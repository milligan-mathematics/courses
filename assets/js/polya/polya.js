/* Pólya-scaffolded problem player. Reads window.POLYA (exported from problem.py by build_web.py); needs polya-math.js
   (window.PM) and, for figures, polya-explore.js (window.PolyaExplore).
   One step at a time; every answer gets its speech bubble right away; wrong answers can be retried.
   Step types: mc, multi, num, matrix, expr, example, error, explore, write, text (checkpoint), essay (reflection).
   A problem may also offer "try it cold" (its final-answer steps first) and a "now you try" twin before the reflection. */
(function () {
  'use strict';
  var P = window.POLYA || null, PM = window.PM;
  var PHASES = ['Understand', 'Plan', 'Carry out', 'Look back'];
  var root = document.getElementById('polya-app');
  var KEY = P ? 'polya:' + P.slug : null;

  // The walk-through: the problem's steps, with the twin (if any) just before the closing reflection.
  var STEPS = P ? P.questions.slice() : [];
  if (P && P.twins && P.twins.length) STEPS.splice(STEPS.length - 1, 0, { phase: 'Look back', type: 'twin' });

  var S = P ? load() : null;

  function load() {
    var s = { step: 0, mode: 'walk', cold: 0, twin: -1 };
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var v = JSON.parse(raw);
        if (typeof v === 'number') s.step = v; else if (v && typeof v === 'object') Object.assign(s, v);
      }
    } catch (e) { /* storage blocked or old format: start fresh */ }
    if (!(s.step >= 0 && s.step <= STEPS.length + 1)) s.step = 0;
    return s;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage blocked: fine */ } }
  function go(step, mode) { S.step = step; if (mode) S.mode = mode; save(); render(); }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function button(cls, html, onclick) { var b = el('button', cls, html); b.type = 'button'; b.onclick = onclick; return b; }

  function typeset(node) {
    if (window.MathJax && MathJax.typesetPromise) {
      if (MathJax.typesetClear) MathJax.typesetClear([node]);
      MathJax.typesetPromise([node]).catch(function () {});
    }
  }

  var OPEN_OK = /^(Right|Yes|Exactly|Correct)([.:!,])\s*/, OPEN_NO = /^(Not quite|Not so|Not yet|Careful)([.:!,])\s*/;
  function bubble(ok, html) {
    var b = el('div', 'pl-bubble ' + (ok ? 'pl-ok' : 'pl-no'));
    b.setAttribute('role', 'status');
    // Comments often open with their own "Right." / "Not quite."; bold that instead of adding a second opener.
    var m = html.match(ok ? OPEN_OK : OPEN_NO);
    b.innerHTML = m ? '<strong>' + m[1] + m[2] + '</strong> ' + html.slice(m[0].length)
                    : (ok ? '<strong>Yes.</strong> ' : '<strong>Not quite.</strong> ') + html;
    return b;
  }
  function note(cls, label, html) {
    var b = el('div', 'pl-bubble ' + cls, (label ? '<strong>' + label + '</strong> ' : '') + html);
    b.setAttribute('role', 'status');
    return b;
  }
  function bare(html) { return html.replace(OPEN_OK, ''); }
  function show(box, node) { box.appendChild(node); typeset(node); return node; }

  function progress(phase) {
    var n = PHASES.indexOf(phase);
    var bar = el('ol', 'pl-progress');
    bar.setAttribute('aria-label', 'Phase ' + (n + 1) + ' of 4');
    PHASES.forEach(function (name, i) {
      bar.appendChild(el('li', 'pl-seg pl-p' + (i + 1) + (i < n ? ' pl-done' : i === n ? ' pl-now' : ''), name));
    });
    return bar;
  }

  function nextButton(label, card, onclick) {
    var b = button('pl-next', label || 'Next &rarr;', onclick || function () { go(S.step + 1); });
    card.appendChild(b);
    b.focus({ preventScroll: true });
    return b;
  }

  /** Hints on demand: one at a time, each a little more specific. */
  function hintLadder(q, box) {
    if (!q.hints || !q.hints.length) return;
    var shown = 0, wrap = el('div', 'pl-hints');
    var b = button('pl-link pl-hint-btn', 'Want a hint?', function () {
      show(wrap, note('pl-hintb', 'Hint' + (q.hints.length > 1 ? ' ' + (shown + 1) : '') + '.', q.hints[shown]));
      shown += 1;
      if (shown >= q.hints.length) b.remove(); else b.innerHTML = 'Another hint?';
    });
    box.appendChild(wrap); box.appendChild(b);
  }

  // ---------- choice steps ----------
  function renderMC(q, box, opts) {
    var list = el('div', 'pl-options'), misses = 0;
    list.setAttribute('role', 'group');
    q.answers.forEach(function (a) {
      var wrap = el('div', 'pl-opt-wrap');
      var btn = button('pl-opt', a.html, function () {
        if (btn.disabled) return;
        btn.disabled = true;
        btn.classList.add(a.ok ? 'pl-opt-ok' : 'pl-opt-no');
        show(wrap, bubble(a.ok, a.comment));
        if (!a.ok) misses += 1;
        if (a.ok || opts.cold) {
          list.querySelectorAll('.pl-opt').forEach(function (o) { o.disabled = true; });
          opts.done(a.ok ? 'right' : 'wrong', misses === 0);
        }
      });
      wrap.appendChild(btn);
      list.appendChild(wrap);
    });
    box.appendChild(el('p', 'pl-hint', opts.cold ? 'One pick.' : 'Pick an answer. If it&rsquo;s not right, read why and try again.'));
    box.appendChild(list);
  }

  function renderMulti(q, box, opts) {
    var list = el('div', 'pl-options'), boxes = [], checks = 0;
    q.answers.forEach(function (a) {
      var wrap = el('div', 'pl-opt-wrap'), lab = el('label', 'pl-opt pl-check'), cb = document.createElement('input');
      cb.type = 'checkbox';
      lab.appendChild(cb); lab.appendChild(el('span', null, a.html));
      wrap.appendChild(lab); list.appendChild(wrap);
      boxes.push({ a: a, cb: cb, wrap: wrap, lab: lab });
    });
    var msg = el('div', 'pl-msg');
    var check = button('pl-check-btn', 'Check', function () {
      list.querySelectorAll('.pl-bubble').forEach(function (b) { b.remove(); });
      msg.innerHTML = '';
      var wrongPicked = boxes.filter(function (x) { return x.cb.checked && !x.a.ok; });
      var missing = boxes.filter(function (x) { return !x.cb.checked && x.a.ok; });
      checks += 1;
      if (!wrongPicked.length && !missing.length) {
        boxes.forEach(function (x) {
          x.cb.disabled = true;
          x.lab.classList.add(x.a.ok ? 'pl-opt-ok' : 'pl-opt-off');
          x.wrap.appendChild(x.a.ok ? bubble(true, x.a.comment)
                                    : note('pl-why', 'Why not this one:', x.a.comment));
        });
        check.remove();
        typeset(list);
        opts.done('right', checks === 1);
        return;
      }
      wrongPicked.forEach(function (x) { x.wrap.appendChild(bubble(false, x.a.comment)); });
      if (missing.length) {
        msg.appendChild(el('p', 'pl-nudge', wrongPicked.length
          ? 'Also, at least one option that works isn&rsquo;t checked yet.'
          : 'Everything you checked works, but something is missing: at least one more option works too.'));
      }
      typeset(list);
      if (opts.cold) { boxes.forEach(function (x) { x.cb.disabled = true; }); check.remove(); opts.done('wrong'); }
    });
    box.appendChild(el('p', 'pl-hint', 'Select all that apply, then check.'));
    box.appendChild(list); box.appendChild(check); box.appendChild(msg);
  }

  /** Find the error: a worked solution whose lines are clickable; one line is the first wrong one. */
  function renderError(q, box, opts) {
    var sol = el('ol', 'pl-solution'), misses = 0;
    q.lines.forEach(function (ln) {
      var li = el('li', 'pl-sol-wrap');
      var btn = button('pl-sol-line', ln.html, function () {
        if (btn.disabled) return;
        btn.disabled = true;
        if (ln.wrong) {
          btn.classList.add('pl-sol-bad');
          show(li, bubble(true, ln.comment));
          sol.querySelectorAll('.pl-sol-line').forEach(function (o) { o.disabled = true; });
          opts.done('right', misses === 0);
        } else {
          btn.classList.add('pl-sol-fine');
          show(li, note('pl-why', 'This line is fine.', ln.comment));
          misses += 1;
          if (opts.cold) opts.done('wrong');
        }
      });
      li.appendChild(btn);
      sol.appendChild(li);
    });
    box.appendChild(el('p', 'pl-hint', 'Click the first line that is wrong.'));
    box.appendChild(sol);
  }

  // ---------- order: arrange the lines of a proof (a Parsons problem) ----------
  // q.lines: [{html, pos, comment}] in display order; pos is the line's place in the proof, or -1 for a line that
  // doesn't belong (its comment says why). q.groups: [[a, b], ...] runs of places whose lines may come in any order.
  function renderOrder(q, box, opts) {
    var tries = 0, done = false;
    var n = q.lines.filter(function (l) { return l.pos >= 0; }).length, allowed = [];
    for (var p = 0; p < n; p++) allowed.push([p]);
    (q.groups || []).forEach(function (g) {
      var run = []; for (var i = g[0]; i <= g[1]; i++) run.push(i);
      run.forEach(function (i) { allowed[i] = run; });
    });
    var extra = q.lines.length > n;
    box.appendChild(el('p', 'pl-hint', 'Tap the lines in order to build the proof. Tap a line in your proof to send it back.'
      + (extra ? ' Not every line belongs.' : '')));
    box.appendChild(el('p', 'pl-order-label', 'Your proof'));
    var proof = el('ol', 'pl-solution pl-order-proof');
    box.appendChild(proof);
    var poolLabel = el('p', 'pl-order-label', 'Lines to use');
    box.appendChild(poolLabel);
    var pool = el('div', 'pl-order-pool');
    box.appendChild(pool);
    var chosen = [];
    var btns = q.lines.map(function (ln, k) {
      var b = button('pl-sol-line pl-order-line', ln.html, function () {
        if (done) return;
        var at = chosen.indexOf(k);
        if (at < 0) chosen.push(k); else chosen.splice(at, 1);
        clearMarks(); draw();
      });
      b.setAttribute('data-k', String(k));
      return b;
    });
    var out = el('div', 'pl-msg');
    var row = el('div', 'pl-order-btns');
    var check = button('pl-check-btn', 'Check my proof', attempt);
    var reset = button('pl-link pl-order-reset', 'Start over', function () { if (done) return; chosen = []; clearMarks(); draw(); });
    row.appendChild(check); row.appendChild(reset);
    box.appendChild(row);
    hintLadder(q, box);
    box.appendChild(out);
    draw();
    function draw() {
      proof.innerHTML = ''; pool.innerHTML = '';  // the buttons are kept in btns and moved, so their typeset math stays
      chosen.forEach(function (k) { var li = el('li', 'pl-sol-wrap'); li.appendChild(btns[k]); proof.appendChild(li); });
      q.lines.forEach(function (ln, k) { if (chosen.indexOf(k) < 0) pool.appendChild(btns[k]); });
      proof.classList.toggle('pl-order-empty', !chosen.length);
      pool.classList.toggle('pl-order-empty', chosen.length === q.lines.length);
    }
    function clearMarks() {
      btns.forEach(function (b) { b.classList.remove('pl-sol-bad'); });
      out.innerHTML = '';
    }
    function attempt() {
      if (done) return;
      clearMarks();
      var stray = chosen.filter(function (k) { return q.lines[k].pos < 0; });
      if (stray.length) {
        btns[stray[0]].classList.add('pl-sol-bad');
        show(out, bubble(false, q.lines[stray[0]].comment)); missed(); return;
      }
      if (chosen.length < n) {
        var left = n - chosen.length;
        out.appendChild(el('p', 'pl-nudge', 'Your proof isn&rsquo;t finished: ' + left + ' more line' + (left > 1 ? 's belong' : ' belongs') + ' in it.'));
        return;
      }
      for (var p = 0; p < n; p++) if (allowed[p].indexOf(q.lines[chosen[p]].pos) < 0) break;
      if (p < n) {
        btns[chosen[p]].classList.add('pl-sol-bad');
        show(out, bubble(false, p === 0 ? 'Look again at how the proof starts: the first line should set up what you know or what you need to show.'
          : (p === 1 ? 'The first line is' : 'The first ' + p + ' lines are') + ' in a good order. Line ' + (p + 1)
            + ' doesn&rsquo;t follow yet: what does it need that hasn&rsquo;t been shown?'));
        missed(); return;
      }
      done = true;
      btns.forEach(function (b) { b.disabled = true; });
      chosen.forEach(function (k) { btns[k].classList.add('pl-sol-fine'); });
      row.remove(); box.querySelectorAll('.pl-reveal, .pl-hint-btn').forEach(function (x) { x.remove(); });
      if (extra) { pool.classList.add('pl-order-done'); poolLabel.innerHTML = 'Lines that don&rsquo;t belong'; }
      show(out, bubble(true, q.comment));
      opts.done('right', tries === 0);
    }
    function missed() {
      tries += 1;
      if (tries >= 2 && !box.querySelector('.pl-reveal')) {
        box.insertBefore(button('pl-link pl-reveal', 'Show me the proof', function () {
          if (done) return;
          done = true; btns.forEach(function (b) { b.disabled = true; }); row.remove();
          box.querySelectorAll('.pl-reveal, .pl-hint-btn').forEach(function (x) { x.remove(); });
          show(out, note('pl-model', 'Here&rsquo;s the proof:', q.model));
          opts.done('revealed');
        }), out);
      }
    }
  }

  // ---------- typed answers: num, matrix (and vectors), expr ----------
  function cellGrid(rows, cols, label, start, aria) {
    var wrap = el('div', 'pl-mat-row');
    if (label) wrap.appendChild(el('span', 'pl-mat-label', '\\(' + label + '\\)'));
    var grid = el('div', 'pl-mat' + (rows * cols === 1 ? ' pl-mat-1' : ''));
    grid.style.gridTemplateColumns = 'repeat(' + cols + ', minmax(3.4em, 5.5em))';
    var inputs = [];
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        var inp = document.createElement('input');
        inp.type = 'text'; inp.autocomplete = 'off'; inp.spellcheck = false;
        inp.setAttribute('autocapitalize', 'off');
        inp.setAttribute('aria-label', rows * cols === 1 ? aria || 'Your answer' : 'Row ' + (i + 1) + ', column ' + (j + 1));
        if (start) inp.value = String(start[i][j]);
        grid.appendChild(inp); inputs.push(inp);
      }
    }
    wrap.appendChild(grid);
    return { wrap: wrap, grid: grid, inputs: inputs };
  }

  function sameValues(got, want, upToScale) {
    if (got.length !== want.length) return false;
    if (!upToScale) return got.every(function (g, i) { return PM.close(g, want[i]); });
    // nonzero multiple: find the first nonzero entry of want and scale
    var k = want.findIndex(function (w) { return Math.abs(w) > 1e-12; });
    if (k < 0 || Math.abs(got[k]) < 1e-12) return false;
    var c = got[k] / want[k];
    return got.every(function (g, i) { return PM.close(g, c * want[i]); });
  }

  function renderTyped(q, box, opts) {
    var kind = q.type, tries = 0, revealed = false, inputs, preview, grid;
    if (kind === 'expr') {
      var row = el('div', 'pl-expr-row');
      if (q.label) row.appendChild(el('span', 'pl-mat-label', '\\(' + q.label + '\\)'));
      var inp = document.createElement('input');
      inp.type = 'text'; inp.autocomplete = 'off'; inp.spellcheck = false; inp.className = 'pl-expr';
      inp.setAttribute('autocapitalize', 'off'); inp.setAttribute('aria-label', 'Your formula');
      row.appendChild(inp);
      box.appendChild(row);
      preview = el('div', 'pl-preview'); preview.setAttribute('aria-live', 'polite');
      box.appendChild(preview);
      box.appendChild(el('p', 'pl-hint', q.syntax || 'Type ^ for powers and sqrt( ) for square roots, and put negative bases in '
        + 'parentheses: for example 5*3^k - (-2)^k/4.'));
      inputs = [inp];
      var timer = null;
      inp.addEventListener('input', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          if (!inp.value.trim()) { preview.innerHTML = ''; return; }
          try {
            var t = PM.parseExpr(inp.value, q.vars);
            preview.innerHTML = 'You typed: \\(' + (q.label ? q.label + ' ' : '') + PM.texExpr(t) + '\\)';
            typeset(preview);
          } catch (e) { preview.innerHTML = '<span class="pl-muted">' + (e.message || 'Keep typing…') + '</span>'; }
        }, 300);
      });
    } else {
      var shape = kind === 'num' ? [1, 1] : q.shape;
      var g = cellGrid(shape[0], shape[1], q.label, null);
      grid = g.grid; inputs = g.inputs;
      box.appendChild(g.wrap);
      if (kind === 'matrix') box.appendChild(el('p', 'pl-hint', q.syntax || (q.vars && q.vars.length
        ? 'Fill in every entry. Entries can use ' + q.vars.join(', ') + ': type ' + q.vars[0] + '^2 for ' + q.vars[0] + ' squared and 3' + q.vars[0] + ' for 3 times ' + q.vars[0] + '.'
        : 'Fill in every entry. Fractions like 3/2 and roots like sqrt(5) are fine.')));
    }
    var out = el('div', 'pl-msg');
    var check = button('pl-check-btn', 'Check', attempt);
    box.appendChild(check);
    hintLadder(q, box);
    box.appendChild(out);
    inputs.forEach(function (i) { i.addEventListener('keydown', function (e) { if (e.key === 'Enter') attempt(); }); });

    function read() {
      if (kind === 'expr') {
        var t = PM.parseExpr(inputs[0].value, q.vars);
        return q.samples.map(function (env) { return PM.evalExpr(t, env); });
      }
      var envs = q.samples || [{}], vals = [];
      inputs.forEach(function (i) {
        if (!i.value.trim()) throw new PM.ParseError(kind === 'num' ? 'Type a number first.' : 'Fill in every entry first.');
        var t = PM.parseExpr(i.value, q.vars || []);
        envs.forEach(function (env) {
          var v = PM.evalExpr(t, env);
          if (!isFinite(v)) throw new PM.ParseError('One entry doesn’t come out to a number.');
          vals.push(v);
        });
      });
      return vals;
    }
    function cellOK(got, k) {  // all sample values of cell k
      var n = (q.samples || [{}]).length;
      for (var s = 0; s < n; s++) if (!PM.close(got[k * n + s], q.values[k * n + s])) return false;
      return true;
    }
    function attempt() {
      if (revealed) return;
      var got;
      out.querySelectorAll('.pl-nudge').forEach(function (n) { n.remove(); });
      try { got = read(); } catch (e) {
        if (!(e instanceof PM.ParseError)) throw e;
        out.appendChild(el('p', 'pl-nudge', e.message)); return;
      }
      out.querySelectorAll('.pl-bubble').forEach(function (b) { b.remove(); });
      if (sameValues(got, q.values, q.up_to_scale)) {
        finish();
        inputs.forEach(function (i) { i.classList.add('pl-in-ok'); });
        show(out, bubble(true, q.comment));
        opts.done('right', tries === 0);
        return;
      }
      tries += 1;
      var known = (q.wrong || []).filter(function (w) { return sameValues(got, w.values, q.up_to_scale); })[0];
      if (opts.cold) { finish(); show(out, bubble(false, known ? known.comment : 'Not yet.')); opts.done('wrong'); return; }
      var msg = known ? known.comment
        : tries === 1 ? 'That&rsquo;s not it yet. Check your work and try again.'
        : 'Still not it. ' + (q.hints && q.hints.length ? 'A hint might help, or ' : '') + 'you can see the answer below.';
      show(out, bubble(false, msg));
      if (kind === 'matrix' && tries >= 2 && !q.up_to_scale) {
        inputs.forEach(function (i, k) { i.classList.toggle('pl-in-no', !cellOK(got, k)); });
      }
      if (tries >= 2 && !box.querySelector('.pl-reveal')) {
        box.insertBefore(button('pl-link pl-reveal', 'Show me the answer', reveal), out);
      }
    }
    function finish() {
      revealed = true; check.remove();
      inputs.forEach(function (i) { i.disabled = true; i.classList.remove('pl-in-no'); });
      box.querySelectorAll('.pl-reveal, .pl-hint-btn').forEach(function (n) { n.remove(); });
    }
    function reveal() {
      if (revealed) return;
      finish();
      var r = box.querySelector('.pl-reveal'); if (r) r.remove();
      out.querySelectorAll('.pl-bubble').forEach(function (b) { b.remove(); });
      show(out, note('pl-model', 'Here&rsquo;s the answer:', '\\(' + (q.label ? q.label + ' ' : '') + q.answer_tex + '\\). ' + bare(q.comment)));
      opts.done('revealed');
    }
  }

  // ---------- give an example ----------
  var LA_NAMES = Object.keys(PM.LA);
  /** The matrices an example asks for: q.parts ([{name, shape, start?}]) for several named matrices, else one. */
  function partsOf(q) {
    return q.parts || [{ name: null, shape: q.shape, label: q.label, start: q.start }];
  }
  function compile(js, q) {
    // A condition is a JavaScript expression over M (the student's entries), S (the starting entries),
    // x (M's only entry), v (M as a list), the named parts (A, B, ... when q.parts is given; M is the first)
    // and the PM.LA helpers by name: det(M).eq(0), rank(M) === 1, eq(mul(A, B), ...)
    var names = q && q.parts ? q.parts.map(function (p) { return p.name; }) : [];
    return Function.apply(null, ['M', 'S', 'x', 'v'].concat(names, LA_NAMES, ['"use strict"; return (' + js + ');']));
  }
  /** Index of the first condition the example fails, or -1 if it passes them all. Ms: one matrix (rows of PM.Q) per part. */
  function firstFailure(conds, q, Ms) {
    var M = Ms[0], S = q.start ? PM.LA.mat(q.start) : null, x = M[0][0], v = M.map(function (row) { return row[0]; });
    var args = [M, S, x, v].concat(q.parts ? Ms : [], LA_NAMES.map(function (n) { return PM.LA[n]; }));
    for (var k = 0; k < conds.length; k++) {
      var ok;
      try { ok = conds[k].fn.apply(null, args); } catch (e) { console.error('example condition', q.conditions[k].js, String(e)); ok = false; }
      if (!ok) return k;
    }
    return -1;
  }
  function renderExample(q, box, opts) {
    var tries = 0, done = false;
    var conds = q.conditions.map(function (c) { return { fn: compile(c.js, q), comment: c.comment }; });
    var grids = partsOf(q).map(function (p) {
      var g = cellGrid(p.shape[0], p.shape[1], p.label || (p.name ? p.name + ' =' : null), p.start, 'Your example');
      box.appendChild(g.wrap);
      return g;
    });
    var g = { inputs: [].concat.apply([], grids.map(function (gr) { return gr.inputs; })) };
    box.appendChild(el('p', 'pl-hint', q.syntax || 'Any example that works is right. Whole numbers or fractions are fine.'));
    var out = el('div', 'pl-msg');
    var check = button('pl-check-btn', 'Check my example', attempt);
    box.appendChild(check);
    hintLadder(q, box);
    box.appendChild(out);
    g.inputs.forEach(function (i) { i.addEventListener('keydown', function (e) { if (e.key === 'Enter') attempt(); }); });
    function attempt() {
      if (done) return;
      out.querySelectorAll('.pl-nudge, .pl-bubble').forEach(function (n) { n.remove(); });
      var vals = g.inputs.map(function (i) { return PM.parseRational(i.value); });
      if (vals.some(function (v) { return v === null; })) {
        out.appendChild(el('p', 'pl-nudge', 'Fill in every entry with a whole number or a fraction like 3/2.')); return;
      }
      var Ms = [], at = 0;
      partsOf(q).forEach(function (p) {
        var M = [], c = p.shape[1];
        for (var r = 0; r < p.shape[0]; r++) { M.push(vals.slice(at, at + c)); at += c; }
        Ms.push(M);
      });
      var k = firstFailure(conds, q, Ms), failed = k < 0 ? null : conds[k];
      if (!failed) {
        done = true; g.inputs.forEach(function (i) { i.disabled = true; i.classList.add('pl-in-ok'); }); check.remove();
        box.querySelectorAll('.pl-reveal, .pl-hint-btn').forEach(function (n) { n.remove(); });
        show(out, bubble(true, q.comment));
        opts.done('right', tries === 0);
        return;
      }
      tries += 1;
      show(out, bubble(false, failed.comment));
      if (opts.cold) { done = true; check.remove(); opts.done('wrong'); return; }
      if (tries >= 2 && !box.querySelector('.pl-reveal')) {
        box.insertBefore(button('pl-link pl-reveal', 'Show me one that works', function () {
          if (done) return;
          done = true; g.inputs.forEach(function (i) { i.disabled = true; }); check.remove();
          box.querySelectorAll('.pl-reveal, .pl-hint-btn').forEach(function (n) { n.remove(); });
          out.querySelectorAll('.pl-bubble').forEach(function (b) { b.remove(); });
          show(out, note('pl-model', 'Here&rsquo;s one:', q.model));
          opts.done('revealed');
        }), out);
      }
    }
  }

  // ---------- figures ----------
  function renderExplore(q, box, opts) {
    var fig = el('div', 'pl-figure'), out = el('div', 'pl-msg'), finished = false;
    box.appendChild(fig);
    box.appendChild(out);
    var skip = button('pl-link pl-skip', 'Skip the figure', function () {
      if (finished) return; finished = true; skip.remove(); opts.done('revealed');
    });
    box.appendChild(skip);
    if (!window.PolyaExplore) { fig.appendChild(el('p', 'pl-nudge', 'The figure didn’t load. Use “Skip the figure”.')); return; }
    PolyaExplore.mount(fig, q.widget, function (info) {
      if (finished) return;
      finished = true; skip.remove();
      var msg = (q.found || 'You found it.').replace(/\{(\w+)\}/g, function (_, k) { return info && info[k] != null ? info[k] : ''; });
      show(out, bubble(true, msg));
      opts.done('right');
    });
  }

  // ---------- writing ----------
  function renderWrite(q, box, opts) {
    box.appendChild(el('p', 'pl-hint', 'Write it in your own words first, then compare. '
      + 'Nothing here is saved or graded; it&rsquo;s for your thinking.'));
    var ta = document.createElement('textarea');
    ta.rows = 3; ta.setAttribute('aria-label', 'Your answer in your own words');
    var out = el('div', 'pl-msg');
    var btn = button('pl-check-btn', 'Compare with mine', function () {
      out.innerHTML = '';
      if (ta.value.trim().split(/\s+/).filter(Boolean).length < 3) {
        out.appendChild(el('p', 'pl-nudge', 'Write a sentence first, even a rough one.'));
        return;
      }
      btn.remove();
      show(out, note('pl-model', 'Here&rsquo;s one way to say it:', q.model));
      if (q.checklist && q.checklist.length) {
        var cl = el('fieldset', 'pl-checklist');
        cl.appendChild(el('legend', null, 'Look back at what you wrote. Did yours&hellip;'));
        q.checklist.forEach(function (item) {
          var lab = el('label', 'pl-check'), cb = document.createElement('input');
          cb.type = 'checkbox'; lab.appendChild(cb); lab.appendChild(el('span', null, item));
          cl.appendChild(lab);
        });
        var tip = el('p', 'pl-hint', 'Unticked boxes aren&rsquo;t a problem. They show what to watch for next time.');
        cl.appendChild(tip);
        show(out, cl);
      }
      opts.done('right');
    });
    box.appendChild(ta); box.appendChild(btn); box.appendChild(out);
  }

  var RENDER = { mc: renderMC, multi: renderMulti, error: renderError, order: renderOrder, num: renderTyped, matrix: renderTyped,
                 expr: renderTyped, example: renderExample, explore: renderExplore, write: renderWrite };

  function questionHTML(text) { return el('div', 'pl-question', text.charAt(0) === '<' ? text : '<p>' + text + '</p>'); }
  function statementBox(html, open) {
    var st = el('details', 'pl-statement');
    st.open = open !== false;
    st.appendChild(el('summary', null, '<strong>Problem</strong>'));
    st.appendChild(el('div', null, html));
    return st;
  }

  function renderStep(q) {
    var n = PHASES.indexOf(q.phase) + 1;
    root.appendChild(progress(q.phase));
    var card = el('section', 'pl-card');
    card.appendChild(el('p', 'pl-phase pl-c' + n, 'Phase ' + n + ' of 4 &middot; ' + q.phase));
    root.appendChild(card);
    if (q.type === 'twin') return renderTwin(card);
    card.appendChild(statementBox(P.statement));
    card.appendChild(questionHTML(q.text));
    if (q.type === 'text') return nextButton(q.cta, card);
    if (q.type === 'essay') {
      card.appendChild(el('p', 'pl-hint', 'You&rsquo;ll write this in the Canvas check-in for this problem. '
        + 'Jot your thoughts here first if it helps; this box isn&rsquo;t saved or sent anywhere.'));
      var ta = document.createElement('textarea');
      ta.rows = 4; ta.setAttribute('aria-label', 'Scratch space for your reflection');
      card.appendChild(ta);
      return nextButton('Finish', card);
    }
    RENDER[q.type](q, card, { done: function () { nextButton(null, card); } });
  }

  /** "Now you try": a twin problem with new numbers, no scaffolding. */
  function renderTwin(card) {
    if (!(S.twin >= 0 && S.twin < P.twins.length)) { S.twin = Math.floor(Math.random() * P.twins.length); save(); }
    var t = P.twins[S.twin];
    card.appendChild(el('h2', 'pl-sub', 'Now you try: same idea, new numbers'));
    card.appendChild(el('p', 'pl-hint', 'No scaffolding this time. Use the plan that worked above. '
      + 'The Canvas check-in will give you another one like it.'));
    card.appendChild(el('div', 'pl-statement pl-static', '<strong>Problem.</strong> ' + t.statement));
    var i = 0;
    (function nextPart() {
      if (i >= t.steps.length) {
        nextButton(null, card, function () { go(S.step + 1); });
        var other = button('pl-link', 'Try a different one', function () {
          S.twin = (S.twin + 1 + Math.floor(Math.random() * (P.twins.length - 1))) % P.twins.length; save(); render();
        });
        if (P.twins.length > 1) card.appendChild(other);
        return;
      }
      var q = t.steps[i++], part = el('div', 'pl-part');
      part.appendChild(questionHTML(q.text));
      card.appendChild(part);
      typeset(part);
      RENDER[q.type](q, part, { done: nextPart });
    })();
  }

  // ---------- try it cold ----------
  function firstLookBack() { return STEPS.findIndex(function (q) { return q.phase === 'Look back'; }) + 1; }
  function renderCold() {
    var idx = P.cold[S.cold], q = P.questions[idx];
    var card = el('section', 'pl-card');
    card.appendChild(el('p', 'pl-phase', 'Trying it cold &middot; part ' + (S.cold + 1) + ' of ' + P.cold.length));
    card.appendChild(statementBox(P.statement));
    card.appendChild(questionHTML(q.text));
    root.appendChild(card);
    RENDER[q.type](q, card, { cold: true, done: function (res) {
      if (res === 'right') {
        nextButton(S.cold + 1 < P.cold.length ? 'Next part &rarr;' : 'Next &rarr;', card, function () { S.cold += 1; save(); render(); });
      } else {
        card.appendChild(el('p', null, 'That&rsquo;s fine: this is what the walk-through is for. '
          + 'It will take you through the problem one phase at a time.'));
        nextButton('Walk me through it &rarr;', card, function () { S.cold = 0; go(1, 'walk'); });
      }
    } });
  }
  function renderColdDone() {
    var card = el('section', 'pl-card');
    card.appendChild(el('h1', 'pl-title', 'Solved cold.'));
    card.appendChild(el('p', null, 'You got the answer without the walk-through. Skip ahead to <strong>Look back</strong>: '
      + 'checking and extending a solution is where a lot of the learning happens.'));
    root.appendChild(card);
    nextButton('On to Look back &rarr;', card, function () { S.cold = 0; go(firstLookBack(), 'walk'); });
    card.appendChild(button('pl-link', 'Walk through the whole thing anyway', function () { S.cold = 0; go(1, 'walk'); }));
  }

  // ---------- start and end ----------
  function renderStart() {
    var card = el('section', 'pl-card');
    card.appendChild(el('h1', 'pl-title', P.title));
    if (P.goal) card.appendChild(el('p', 'pl-goal', '<strong>Goal.</strong> ' + P.goal));
    if (P.connects) card.appendChild(el('p', 'pl-connects', P.connects));
    card.appendChild(el('p', null, 'This problem walks through Pólya&rsquo;s four phases of problem solving: '
      + '<strong>Understand</strong> the problem, make a <strong>Plan</strong>, <strong>Carry out</strong> the plan, '
      + 'and <strong>Look back</strong>. You&rsquo;ll get feedback on every answer as you go, and you can try again '
      + 'when something isn&rsquo;t right. Keep scratch paper handy.'));
    card.appendChild(el('div', 'pl-statement pl-static', '<strong>Problem.</strong> ' + P.statement));
    root.appendChild(card);
    nextButton('Walk me through it &rarr;', card, function () { go(1, 'walk'); });
    if (P.cold && P.cold.length) {
      var cold = el('div', 'pl-cold');
      cold.appendChild(button('pl-check-btn pl-cold-btn', 'Try it cold', function () { S.cold = 0; go(0, 'cold'); }));
      cold.appendChild(el('span', 'pl-hint', ' Think you can do it already? Give the final answer on your own. '
        + 'If it&rsquo;s right, you skip to Look back; if not, you&rsquo;ll walk through it.'));
      card.appendChild(cold);
    }
  }

  function renderEnd() {
    var card = el('section', 'pl-card');
    card.appendChild(el('h1', 'pl-title', 'Nice work.'));
    card.appendChild(el('p', null, P.goal ? '<strong>You can now:</strong> ' + P.goal.replace(/^./, function (c) { return c.toLowerCase(); })
      : 'You understood the problem, planned, carried out the plan and looked back.'));
    card.appendChild(el('p', null, 'That rhythm (understand, plan, carry out, look back) is the habit we&rsquo;re building all semester.'));
    if (P.discuss) card.appendChild(el('div', 'pl-discuss', '<strong>Bring to class.</strong> ' + P.discuss));
    card.appendChild(el('p', null, '<strong>Last step:</strong> open the Canvas check-in for this problem. It gives you '
      + 'a new problem like this one, plus your reflection, and that is what earns the credit.'));
    card.appendChild(button('pl-link', 'Work through it again', function () { S.twin = -1; go(0, 'walk'); }));
    card.appendChild(el('p', null, '<a class="pl-link" href="../practice/map.html" target="_top">See your MATH 307 map</a> '
      + '(what you have done, and what to try next).'));
    root.appendChild(card);
  }

  function render() {
    if (window.MathJax && MathJax.typesetClear) MathJax.typesetClear([root]);
    root.innerHTML = '';
    if (S.mode === 'cold' && P.cold && P.cold.length) {
      if (S.cold >= P.cold.length) renderColdDone(); else renderCold();
    } else if (S.step <= 0) { S.step = 0; S.mode = 'walk'; renderStart(); }
    else if (S.step > STEPS.length) renderEnd();
    else renderStep(STEPS[S.step - 1]);
    typeset(root);
    window.scrollTo(0, 0);
  }

  // Shared with practice.js: the step renderers and helpers.
  /** First failing condition index (-1 if none) for an example; rows: one matrix, or (with q.parts) a list of them. */
  function checkExample(q, rows) {
    var conds = q.conditions.map(function (c) { return { fn: compile(c.js, q), comment: c.comment }; });
    var toQ = function (M) { return M.map(function (r) { return r.map(function (x) { return PM.parseRational(String(x)); }); }); };
    return firstFailure(conds, q, q.parts ? rows.map(toQ) : [toQ(rows)]);
  }
  window.PolyaKit = { RENDER: RENDER, el: el, button: button, typeset: typeset, bubble: bubble, note: note, show: show,
                      questionHTML: function (t) { return questionHTML(t); }, checkExample: checkExample };
  if (!P) return;

  window.PolyaPlayer = {
    state: function () { return S; }, steps: STEPS, go: go,
    // for the browser test: which condition (index) a sample example fails, or -1
    checkExample: checkExample
  };
  render();
})();
