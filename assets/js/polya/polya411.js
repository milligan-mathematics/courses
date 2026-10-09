/* MATH 411 Pólya walk-throughs: several problems on one class-day page, each a four-phase walk-through.
   Reads window.POLYA411 (exported by build.py). Needs polya-math.js (window.PM) and polya.js (window.PolyaKit, the
   MATH 307 step renderers: mc, multi, num, error, order, write).

   Differences from the 307 player: finished steps stay on screen (a proof needs the scrapwork above it), phases are
   headings in one running column, and there is one new step type, `epsN`. In it the student types N as a formula in
   eps (and maybe b or p), and the page plays the adversary from Definition 6.1.1: it throws challenges eps at the
   formula and checks every term past N, so any N that works is right, not just the one in the key. */
(function () {
  'use strict';
  var D = window.POLYA411, K = window.PolyaKit, PM = window.PM;
  if (!D || !K || !PM) return;
  var PHASES = ['Understand', 'Plan', 'Carry out', 'Look back'];
  var el = K.el, button = K.button, typeset = K.typeset, bubble = K.bubble, note = K.note, show = K.show;

  // ---------- numbers and TeX ----------
  function sig(x) {  // significant digits of a candidate challenge, for choosing a readable one to report
    var s = Number(x.toPrecision(12)).toExponential().split('e')[0].replace('-', '').replace('.', '');
    return s.replace(/0+$/, '').length;
  }
  function tex(x) {
    if (!isFinite(x)) return String(x);
    if (Math.abs(x - Math.round(x)) < 1e-9 * Math.max(1, Math.abs(x)) && Math.abs(x) < 1e15) return String(Math.round(x)).replace(/\B(?=(\d{3})+(?!\d))/g, '{,}');
    var a = Math.abs(x);
    if (a >= 1e6 || a < 1e-4) {
      var p = x.toExponential(3).split('e');
      return String(Number(p[0])) + '\\times 10^{' + Number(p[1]) + '}';
    }
    return String(Number(x.toPrecision(4)));
  }
  function epsTeX(src) {  // the parser's TeX for our variable names
    return src.replace(/\\mathit\{eps\}/g, '\\varepsilon ');
  }
  /** What a student typed, read as a formula: ε (any spelling) becomes eps. */
  function normalize(s) {
    return String(s).replace(/[εϵ]/g, 'eps').replace(/epsilon/gi, 'eps').replace(/\bN\s*=\s*/, '');
  }
  function varsIn(t, out) {
    out = out || {};
    if (!t || typeof t !== 'object') return out;
    if (t.t === 'var') out[t.n] = true;
    if (t.t === 'const') out['const:' + t.n] = true;
    ['a', 'b'].forEach(function (k) { if (t[k]) varsIn(t[k], out); });
    (t.args || []).forEach(function (a) { varsIn(a, out); });
    return out;
  }

  // ---------- the adversary ----------
  function seqFn(q) { return new Function('n', 'b', 'p', '"use strict"; return (' + q.seq_js + ');'); }
  function bases(q) {  // one environment per value of the extra parameter (b or p), if any
    var keys = Object.keys(q.params || {});
    if (!keys.length) return [{}];
    return q.params[keys[0]].map(function (v) { var e = {}; e[keys[0]] = v; return e; });
  }
  /** Indices k at which to challenge: every k up to 400, then every 8% further, while the terms are not negligible. */
  function kset(s) {
    var ks = [], k;
    for (k = 1; k <= 400; k++) { if (s(k) < 1e-9) return ks; ks.push(k); }
    for (var x = 400; x < 1e12;) { x *= 1.08; k = Math.floor(x); if (s(k) < 1e-9) break; ks.push(k); }
    return ks;
  }
  function niceBelow(x) {  // 1-3 significant-digit numbers just under x (readable challenges)
    var out = [];
    for (var d = 1; d <= 3; d++) {
      var m = Math.floor(Math.log10(x)) - d + 1, c = Number((Math.floor(x / Math.pow(10, m)) * Math.pow(10, m)).toPrecision(d));
      if (c > 0 && c < x) out.push(c);
    }
    return out;
  }
  /** Test N(env) against the definition. The terms |s_n| decrease (build.py checks this), so N works for a challenge
      eps exactly when the first whole number past N has its term below eps. On (s(k+1), s(k)] the smallest N that works
      is k, so the challenges sit just under each term s(k) (readable round numbers, 0.9 s(k), 0.999 s(k)), at the
      midpoint to the next term, and at a few large values. Never exactly at s(k): there a correct floor(...) answer can
      lose to rounding. Returns the most readable failure, or null. */
  function verdict(s, N, env) {
    var v;
    try { v = N(env); } catch (e) { v = NaN; }
    if (typeof v !== 'number' || !isFinite(v)) return { kind: 'nan', eps: env.eps, env: env };
    var n0 = v < 1 ? 1 : Math.floor(v + Math.max(1e-9, Math.abs(v) * 1e-12)) + 1, t = s(n0);  // rounding grows with N
    if (t < env.eps) return null;
    return { kind: t > env.eps * (1 + 1e-12) ? 'strict' : 'equal', eps: env.eps, env: env, N: v, n0: n0, term: t };
  }
  function adversary(q, N) {
    var s0 = seqFn(q), fails = [];
    bases(q).forEach(function (base) {
      var s = function (n) { return Math.abs(s0(n, base.b, base.p)); }, cands = [];
      kset(s).forEach(function (k) {
        var x = s(k);
        niceBelow(x).forEach(function (c) { cands.push(c); });
        cands.push(x * 0.9, x * 0.999, Math.sqrt(x * s(k + 1)));
      });
      [s(1) * 1.5, s(1) * 10, 2, 5, 20, 1000].forEach(function (c) { cands.push(c); });
      cands.forEach(function (eps) {
        if (!(eps > 0) || !isFinite(eps)) return;
        var f = verdict(s, N, Object.assign({ eps: eps }, base));
        // a tie with a term at a round challenge is rounding unless a slightly harder challenge also fails
        if (f && f.kind === 'equal' && !verdict(s, N, Object.assign({ eps: eps * (1 - 1e-9) }, base))) f = null;
        if (f) fails.push(f);
      });
    });
    if (!fails.length) return null;
    function score(f) { return sig(f.eps) * 10 + Math.abs(Math.log10(f.eps) - Math.log10(0.05)); }
    var order = { nan: 0, strict: 1, equal: 2 };
    fails.sort(function (a, b) { return order[a.kind] - order[b.kind] || score(a) - score(b); });
    // An N that only loses to challenges of 1 or more may come from a proof that says "we may assume eps < 1".
    fails[0].onlyBig = fails.every(function (f) { return f.eps >= 1; });
    return fails[0];
  }
  function paramText(env) {
    return ['b', 'p'].filter(function (k) { return k in env; }).map(function (k) { return ', \\(' + k + ' = ' + tex(env[k]) + '\\)'; }).join('');
  }
  function describe(q, f) {
    var head = 'Challenge: \\(\\varepsilon = ' + tex(f.eps) + '\\)' + paramText(f.env) + '. ';
    if (f.kind === 'nan') {
      return head + 'Your formula doesn’t give a real number there' + (f.env.b < 0 ? ' (is something taking the logarithm of a negative number?)' : '')
        + ', so it names no \\(N\\) for this challenge. \\(N\\) has to exist for every \\(\\varepsilon > 0\\).';
    }
    var term = (q.term_tex ? '\\(' + q.term_tex.replace(/#/g, String(f.n0)) + '\\)' : 'the term') + ' at \\(n = ' + tex(f.n0) + '\\)';
    var need = f.N < 1 ? 'Your formula gives \\(N = ' + tex(f.N) + '\\), so every term from \\(n = 1\\) on must be within \\(\\varepsilon\\) of \\(0\\).'
      : 'Your formula gives \\(N = ' + tex(f.N) + '\\), so every \\(n > N\\), starting with \\(n = ' + tex(f.n0) + '\\), must have its term within \\(\\varepsilon\\) of \\(0\\).';
    var exact = Math.abs(f.term - Number(f.term.toPrecision(4))) < 1e-12 * Math.max(1, f.term);
    var but = f.kind === 'strict' ? ' But ' + term + ' is ' + (exact ? '' : 'about ') + '\\(' + tex(f.term) + '\\), which is not less than \\(\\varepsilon\\).'
      : ' But ' + term + ' equals \\(\\varepsilon\\) exactly, and the definition asks for strictly less. A fussy point, and it’s the definition.';
    var big = f.onlyBig ? ' <em>Every challenge below \\(1\\) was met, though.</em> If your proof says “we may assume \\(\\varepsilon < 1\\)” '
      + '(fair: an \\(N\\) for a smaller \\(\\varepsilon\\) also works for bigger ones), your \\(N\\) has to keep that promise, '
      + 'for example by using \\(\\min(\\varepsilon, 1)\\) in place of \\(\\varepsilon\\).' : '';
    return head + need + but + big;
  }

  // ---------- epsN: type N, face the adversary ----------
  var PROBES = [0.3, 0.03, 0.003, 3e-5];
  function sizeNote(q, N) {  // compare a passing N with the one in the model proof
    var ref = PM.parseExpr(q.answer, q.vars), bigger = false, smaller = false;
    bases(q).slice(0, 2).forEach(function (base) {
      PROBES.forEach(function (eps) {
        var env = Object.assign({ eps: eps }, base), a = N(env), r = PM.evalExpr(ref, env);
        if (!(r > 1)) return;  // tiny or negative thresholds say nothing about size
        if (a > r * (1 + 1e-6) + 1e-9) bigger = true;
        if (a < r * (1 - 1e-6) - 1e-9) smaller = true;
      });
    });
    if (smaller) return ' Yours is smaller than \\(' + q.answer_tex + '\\) for some \\(\\varepsilon\\): a sharper \\(N\\). That’s fine, as long as your proof shows it works.';
    if (bigger) return ' Yours is bigger than \\(' + q.answer_tex + '\\), which is fine: by Note 4, any larger \\(N\\) works too.';
    return '';
  }
  function matchWrong(q, tree) {  // a known slip, recognized by its values (NaN matches NaN)
    var envs = [];
    bases(q).slice(0, 3).forEach(function (base) { [0.37, 0.051, 0.0063, 2.3].forEach(function (eps) { envs.push(Object.assign({ eps: eps }, base)); }); });
    function vals(t) { return envs.map(function (e) { try { return PM.evalExpr(t, e); } catch (x) { return NaN; } }); }
    var mine = vals(tree);
    return (q.wrong || []).filter(function (w) {
      var theirs = vals(PM.parseExpr(w.f, q.vars));
      return theirs.every(function (v, i) { return isNaN(v) ? isNaN(mine[i]) : PM.close(v, mine[i]); });
    })[0];
  }
  function renderEpsN(q, box, opts) {
    var tries = 0, finished = false;
    var row = el('div', 'pl-expr-row');
    row.appendChild(el('span', 'pl-mat-label', '\\(' + (q.label || 'N =') + '\\)'));
    var inp = document.createElement('input');
    inp.type = 'text'; inp.autocomplete = 'off'; inp.spellcheck = false; inp.className = 'pl-expr';
    inp.setAttribute('autocapitalize', 'off'); inp.setAttribute('aria-label', 'Your N, as a formula in epsilon');
    row.appendChild(inp); box.appendChild(row);
    var preview = el('div', 'pl-preview'); preview.setAttribute('aria-live', 'polite'); box.appendChild(preview);
    box.appendChild(el('p', 'pl-hint', q.syntax || 'Type ε as <code>eps</code>. Formulas look like <code>5*sqrt(eps)</code>, '
      + '<code>3*eps^4</code> or <code>max(3, eps)</code>. Any \\(N\\) that works is right: the page tests yours against the definition.'));
    var check = button('pl-check-btn', 'Test my N', attempt);
    box.appendChild(check);
    if (!opts.cold) K.hintLadder(q, box);
    var out = el('div', 'pl-msg'); box.appendChild(out);
    var timer = null;
    inp.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        var src = normalize(inp.value);
        if (!src.trim()) { preview.innerHTML = ''; return; }
        try {
          preview.innerHTML = 'You typed: \\(N = ' + epsTeX(PM.texExpr(PM.parseExpr(PM.answerPart(src), q.vars))) + '\\)';
          typeset(preview);
        } catch (e) { preview.innerHTML = '<span class="pl-muted">' + (e.message || 'Keep typing…') + '</span>'; }
      }, 300);
    });
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') attempt(); });

    function nudge(msg) { out.appendChild(el('p', 'pl-nudge', msg)); }
    function attempt() {
      if (finished) return;
      out.querySelectorAll('.pl-nudge').forEach(function (n) { n.remove(); });
      var src = normalize(inp.value);
      if (!src.trim()) { nudge('Type a formula for \\(N\\) first.'); return typeset(out); }
      if (/(^|[^a-z])n([^a-z]|$)/i.test(src.replace(/\b(ln|sin|min|ceil)\b/g, ''))) {
        nudge('\\(N\\) is chosen before \\(n\\), so it can use \\(\\varepsilon\\)' + (q.vars.length > 1 ? ' and \\(' + q.vars[1] + '\\)' : '')
          + ', but not \\(n\\).');
        return typeset(out);
      }
      var tree;
      try { tree = PM.parseExpr(PM.answerPart(src), q.vars); } catch (e) {
        if (!(e instanceof PM.ParseError)) throw e;
        return nudge(e.message);
      }
      var used = varsIn(tree);
      if (!used.eps && used['const:e']) {
        nudge('Your formula has \\(e = 2.718\\ldots\\) in it but no \\(\\varepsilon\\). Type \\(\\varepsilon\\) as <code>eps</code>.');
        return typeset(out);
      }
      var N = function (env) { return PM.evalExpr(tree, env); };
      var fail = adversary(q, N);
      out.querySelectorAll('.pl-bubble').forEach(function (b) { b.remove(); });
      if (!fail) {
        finish(); inp.classList.add('pl-in-ok');
        show(out, bubble(true, q.comment + sizeNote(q, N)));
        return opts.done('right', tries === 0);
      }
      tries += 1;
      var known = matchWrong(q, tree);
      var msg = (known ? known.comment + ' ' : !used.eps ? 'A formula without \\(\\varepsilon\\) can’t answer every challenge. ' : '') + describe(q, fail);
      if (opts.cold) { finish(); show(out, bubble(false, msg)); return opts.done('wrong'); }
      show(out, bubble(false, msg));
      if (tries >= 2 && !box.querySelector('.pl-reveal')) {
        box.insertBefore(button('pl-link pl-reveal', 'Show me one that works', function () {
          if (finished) return;
          finish();
          out.querySelectorAll('.pl-bubble').forEach(function (b) { b.remove(); });
          show(out, note('pl-model', 'One that works:', '\\(N = ' + q.answer_tex + '\\). ' + q.comment.replace(/^(Right|Yes)[.:!,]\s*/, '')));
          opts.done('revealed');
        }), out);
      }
    }
    function finish() {
      finished = true; check.remove(); inp.disabled = true;
      box.querySelectorAll('.pl-reveal, .pl-hint-btn').forEach(function (n) { n.remove(); });
    }
  }
  var RENDER = Object.assign({}, K.RENDER, { epsN: renderEpsN });

  // ---------- a finished step, redrawn after a reload or a jump (the live one isn't saved) ----------
  function doneView(q) {
    var box = el('div', 'pl-step pl-done-step');
    if (q.type !== 'text') box.appendChild(K.questionHTML(q.text));
    var ans;
    if (q.type === 'text') ans = el('div', 'pl-hint', q.text);
    else if (q.type === 'mc') { var a = q.answers.filter(function (x) { return x.ok; })[0]; ans = bubble(true, '<em>' + a.html + '</em> ' + a.comment); }
    else if (q.type === 'multi') ans = note('pl-ok', 'The ones that work:', '<ul>' + q.answers.filter(function (x) { return x.ok; }).map(function (x) { return '<li>' + x.html + '</li>'; }).join('') + '</ul>');
    else if (q.type === 'num') ans = note('pl-ok', 'Answer: \\(' + q.answer_tex + '\\).', q.comment.replace(/^(Right|Yes)[.:!,]\s*/, ''));
    else if (q.type === 'epsN') ans = note('pl-ok', 'One that works: \\(N = ' + q.answer_tex + '\\).', '');
    else if (q.type === 'order') ans = note('pl-model', 'The proof:', q.model);
    else if (q.type === 'error') { var w = q.lines.filter(function (x) { return x.wrong; })[0]; ans = note('pl-ok', 'The first wrong line:', w.html + ' ' + w.comment); }
    else if (q.type === 'write') ans = note('pl-model', 'One way to write it:', q.model);
    if (ans) box.appendChild(ans);
    return box;
  }

  // ---------- one problem ----------
  function mount(P) {
    var host = document.getElementById('pw-' + P.slug);
    if (!host) return;
    var KEY = 'polya411:' + P.slug, S = load();
    var root = el('div', 'pl pl411');
    host.appendChild(root);
    render();

    function load() {
      var s = { mode: 'idle', step: 0, cold: 0 };
      try { var v = JSON.parse(localStorage.getItem(KEY) || 'null'); if (v && typeof v === 'object') Object.assign(s, v); } catch (e) { /* blocked */ }
      if (!(s.step >= 0 && s.step <= P.steps.length)) s.step = 0;
      return s;
    }
    function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage blocked: fine */ } }
    function set(mode, step) { S.mode = mode; S.step = step || 0; S.cold = 0; save(); render(); }

    function progress(phase) {
      var n = PHASES.indexOf(phase), bar = el('ol', 'pl-progress');
      bar.setAttribute('aria-label', 'Phase ' + (n + 1) + ' of 4: ' + phase);
      PHASES.forEach(function (name, i) {
        bar.appendChild(el('li', 'pl-seg pl-p' + (i + 1) + (i < n ? ' pl-done' : i === n ? ' pl-now' : ''), name));
      });
      return bar;
    }
    function phaseHead(phase) {
      var n = PHASES.indexOf(phase) + 1;
      return el('h3', 'pl-phase-head pl-c' + n, 'Phase ' + n + ' of 4 &middot; ' + phase);
    }
    function firstOf(phase) { return P.steps.findIndex(function (q) { return q.phase === phase; }); }

    function render() {
      if (window.MathJax && MathJax.typesetClear) MathJax.typesetClear([root]);
      root.innerHTML = '';
      if (S.mode === 'cold' && P.cold && P.cold.length) renderCold();
      else if (S.mode === 'walk') renderWalk();
      else renderStart();
      typeset(root);
    }

    function renderStart() {
      var row = el('div', 'pl-start');
      row.appendChild(button('btn411', 'Walk me through it', function () { set('walk', 0); }));
      if (P.cold && P.cold.length) {
        row.appendChild(button('btn411 ghost', 'Already have a proof? Test your N', function () { set('cold', 0); }));
      }
      root.appendChild(row);
    }

    function topBar(phase) {
      var top = el('div', 'pl-top');
      var bar = progress(phase);
      top.appendChild(bar);
      top.appendChild(button('pl-link pl-restart', 'Start over', function () {
        if (window.confirm('Start this walk-through over from the beginning?')) set('idle', 0);
      }));
      root.appendChild(top);
      return bar;
    }

    function renderWalk() {
      var cur = P.steps[Math.min(S.step, P.steps.length - 1)];
      var bar = topBar(S.step >= P.steps.length ? 'Look back' : cur.phase);
      var col = el('div', 'pl-column');
      root.appendChild(col);
      if (S.step > 0) {  // finished steps from an earlier visit (or skipped by a cold try), folded away
        var det = el('details', 'pl-earlier');
        det.appendChild(el('summary', null, S.step === 1 ? 'The step you finished' : 'The ' + S.step + ' steps you finished (or skipped)'));
        var prev = null;
        P.steps.slice(0, S.step).forEach(function (q) {
          if (q.phase !== prev) det.appendChild(phaseHead(q.phase));
          prev = q.phase;
          det.appendChild(doneView(q));
        });
        col.appendChild(det);
      }
      var last = S.step > 0 ? P.steps[S.step - 1].phase : null;
      live(S.step, last, false);

      function live(i, prevPhase, user) {  // user: reached by a click, so bring the new step into view
        if (i >= P.steps.length) return end();
        var q = P.steps[i];
        if (q.phase !== prevPhase) {
          col.appendChild(phaseHead(q.phase));
          var nb = progress(q.phase); bar.replaceWith(nb); bar = nb;
        }
        var box = el('div', 'pl-step');
        col.appendChild(box);
        var next = function () {
          var b = button('pl-next', 'Next &rarr;', function () {
            b.remove(); box.classList.add('pl-step-finished');
            S.step = i + 1; save();
            live(i + 1, q.phase, true);
          });
          box.appendChild(b);
          b.focus({ preventScroll: true });
        };
        if (q.type === 'text') {
          box.appendChild(el('div', 'pl-checkpoint', q.text));
          var go = button('pl-next', q.cta || 'Got it', function () {
            go.remove(); box.classList.add('pl-step-finished'); S.step = i + 1; save(); live(i + 1, q.phase, true);
          });
          box.appendChild(go);
        } else {
          box.appendChild(K.questionHTML(q.text));
          RENDER[q.type](q, box, { done: next });
        }
        typeset(box);
        if (user && box.getBoundingClientRect().top > window.innerHeight * 0.6) {
          box.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      function end() {
        var card = el('div', 'pl-step pl-end');
        card.appendChild(el('h3', 'pl-sub', 'Nice work.'));
        card.appendChild(el('p', null, '<strong>You can now:</strong> ' + P.goal.replace(/^./, function (c) { return c.toLowerCase(); })));
        if (P.discuss) card.appendChild(el('div', 'pl-discuss', '<strong>Bring to class.</strong> ' + P.discuss));
        card.appendChild(button('pl-link', 'Work through it again', function () { set('walk', 0); }));
        col.appendChild(card);
        typeset(card);
      }
    }

    function renderCold() {
      var idx = P.cold[S.cold], q = P.steps[idx];
      var box = el('div', 'pl-step');
      box.appendChild(el('p', 'pl-phase', 'Testing your proof&rsquo;s \\(N\\) &middot; ' + (P.cold.length > 1 ? 'part ' + (S.cold + 1) + ' of ' + P.cold.length : 'one try')));
      box.appendChild(K.questionHTML(q.cold_text || q.text));
      root.appendChild(box);
      RENDER[q.type](q, box, { cold: true, done: function (res) {
        if (res === 'right' && S.cold + 1 < P.cold.length) {
          box.appendChild(button('pl-next', 'Next part &rarr;', function () { S.cold += 1; save(); render(); }));
        } else if (res === 'right') {
          box.appendChild(el('p', null, 'Your \\(N\\) survived every challenge the page could throw at it. That isn&rsquo;t a proof (the proof shows it works '
            + 'for <em>every</em> \\(\\varepsilon\\)), but it&rsquo;s a good sign. Skip ahead to <strong>Look back</strong>.'));
          box.appendChild(button('pl-next', 'On to Look back &rarr;', function () { set('walk', firstOf('Look back')); }));
          box.appendChild(button('pl-link', 'Walk through the whole thing anyway', function () { set('walk', 0); }));
        } else {
          box.appendChild(el('p', null, 'That&rsquo;s useful to know before class. The walk-through will take you through it one phase at a time.'));
          box.appendChild(button('pl-next', 'Walk me through it &rarr;', function () { set('walk', 0); }));
        }
        typeset(box);
      } });
      typeset(box);
    }
  }

  D.problems.forEach(mount);
  // for the browser test
  window.Polya411 = { adversary: adversary, parse: function (src, vars) { return PM.parseExpr(PM.answerPart(normalize(src)), vars); } };
})();
