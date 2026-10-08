/* Pólya-scaffolded problem player. Reads window.POLYA (exported from problem.py by build_web.py).
   One step at a time; every choice gets its speech bubble right away; wrong choices can be retried. */
(function () {
  'use strict';
  var P = window.POLYA;
  var PHASES = ['Understand', 'Plan', 'Carry out', 'Look back'];
  var root = document.getElementById('polya-app');
  var KEY = 'polya:' + P.slug;
  var step = 0;

  function load() { try { var v = parseInt(localStorage.getItem(KEY), 10); return isNaN(v) ? 0 : v; } catch (e) { return 0; } }
  function save() { try { localStorage.setItem(KEY, String(step)); } catch (e) { /* storage blocked: fine */ } }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function typeset(node) {
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetClear && MathJax.typesetClear([node]);
      MathJax.typesetPromise([node]).catch(function () {});
    }
  }

  function bubble(ok, html) {
    var b = el('div', 'pl-bubble ' + (ok ? 'pl-ok' : 'pl-no'));
    b.setAttribute('role', 'status');
    b.innerHTML = (ok ? '<strong>Yes.</strong> ' : '<strong>Not quite.</strong> ') + html;
    return b;
  }

  function progress(phase) {
    var n = PHASES.indexOf(phase);
    var bar = el('ol', 'pl-progress');
    bar.setAttribute('aria-label', 'Phase ' + (n + 1) + ' of 4');
    PHASES.forEach(function (name, i) {
      var li = el('li', 'pl-seg pl-p' + (i + 1) + (i < n ? ' pl-done' : i === n ? ' pl-now' : ''), name);
      bar.appendChild(li);
    });
    return bar;
  }

  function nextButton(label, card) {
    var b = el('button', 'pl-next', label || 'Next &rarr;');
    b.type = 'button';
    b.onclick = function () { step += 1; save(); render(); };
    card.appendChild(b);
    b.focus({ preventScroll: true });
    return b;
  }

  function renderMC(q, card) {
    var list = el('div', 'pl-options');
    list.setAttribute('role', 'group');
    q.answers.forEach(function (a) {
      var wrap = el('div', 'pl-opt-wrap');
      var btn = el('button', 'pl-opt', a.html);
      btn.type = 'button';
      btn.onclick = function () {
        if (btn.disabled) return;
        btn.disabled = true;
        btn.classList.add(a.ok ? 'pl-opt-ok' : 'pl-opt-no');
        var bub = bubble(a.ok, a.comment);
        wrap.appendChild(bub);
        typeset(bub);
        if (a.ok) {
          list.querySelectorAll('.pl-opt').forEach(function (o) { o.disabled = true; });
          nextButton(null, card);
        }
      };
      wrap.appendChild(btn);
      list.appendChild(wrap);
    });
    card.appendChild(el('p', 'pl-hint', 'Pick an answer. If it&rsquo;s not right, read why and try again.'));
    card.appendChild(list);
  }

  function renderMulti(q, card) {
    var list = el('div', 'pl-options');
    var boxes = [];
    q.answers.forEach(function (a, i) {
      var wrap = el('div', 'pl-opt-wrap');
      var lab = el('label', 'pl-opt pl-check');
      var cb = document.createElement('input');
      cb.type = 'checkbox';
      lab.appendChild(cb);
      lab.appendChild(el('span', null, a.html));
      wrap.appendChild(lab);
      list.appendChild(wrap);
      boxes.push({ a: a, cb: cb, wrap: wrap, lab: lab });
    });
    var msg = el('div', 'pl-msg');
    var check = el('button', 'pl-check-btn', 'Check');
    check.type = 'button';
    check.onclick = function () {
      list.querySelectorAll('.pl-bubble').forEach(function (b) { b.remove(); });
      msg.innerHTML = '';
      var wrongPicked = boxes.filter(function (x) { return x.cb.checked && !x.a.ok; });
      var missing = boxes.filter(function (x) { return !x.cb.checked && x.a.ok; });
      if (!wrongPicked.length && !missing.length) {
        boxes.forEach(function (x) {
          x.cb.disabled = true;
          x.lab.classList.add(x.a.ok ? 'pl-opt-ok' : 'pl-opt-off');
          var b = x.a.ok ? bubble(true, x.a.comment)
                         : el('div', 'pl-bubble pl-why', '<strong>Why not this one:</strong> ' + x.a.comment);
          x.wrap.appendChild(b);
        });
        check.remove();
        typeset(list);
        nextButton(null, card);
        return;
      }
      wrongPicked.forEach(function (x) { x.wrap.appendChild(bubble(false, x.a.comment)); });
      if (missing.length) {
        msg.appendChild(el('p', 'pl-nudge', wrongPicked.length
          ? 'Also, at least one option that works isn&rsquo;t checked yet.'
          : 'Everything you checked works, but something is missing: at least one more option works too.'));
      }
      typeset(list);
    };
    card.appendChild(el('p', 'pl-hint', 'Select all that apply, then check.'));
    card.appendChild(list);
    card.appendChild(check);
    card.appendChild(msg);
  }

  function parseNum(s) {
    s = String(s).trim().replace(/\s+/g, '').replace(/−/g, '-');
    var m = s.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
    if (m) return parseFloat(m[1]) / parseFloat(m[2]);
    return /^-?\d+(\.\d+)?$/.test(s) ? parseFloat(s) : NaN;
  }

  function renderNum(q, card) {
    var tries = 0;
    var row = el('div', 'pl-num');
    var input = document.createElement('input');
    input.type = 'text'; input.inputMode = 'decimal'; input.setAttribute('aria-label', 'Your answer');
    var btn = el('button', 'pl-check-btn', 'Check');
    btn.type = 'button';
    var out = el('div', 'pl-msg');
    function go() {
      var v = parseNum(input.value);
      out.innerHTML = '';
      if (isNaN(v)) { out.appendChild(el('p', 'pl-nudge', 'Type a number, like 3, -2 or 5/2.')); return; }
      tries += 1;
      if (Math.abs(v - q.value) < 1e-9) {
        input.disabled = true; btn.remove();
        out.appendChild(bubble(true, q.comment)); typeset(out); nextButton(null, card);
      } else if (tries < 2) {
        out.appendChild(bubble(false, 'Check your last row operation and try again.'));
      } else {
        input.disabled = true; btn.remove();
        out.appendChild(bubble(false, 'Here&rsquo;s how it goes: ' + q.comment));
        typeset(out); nextButton(null, card);
      }
    }
    btn.onclick = go;
    input.onkeydown = function (e) { if (e.key === 'Enter') go(); };
    row.appendChild(input); row.appendChild(btn);
    card.appendChild(row); card.appendChild(out);
  }

  function renderWrite(q, card) {
    card.appendChild(el('p', 'pl-hint', 'Write it in your own words first, then compare. '
      + 'Nothing here is saved or graded; it&rsquo;s for your thinking.'));
    var ta = document.createElement('textarea');
    ta.rows = 3; ta.setAttribute('aria-label', 'Your answer in your own words');
    var btn = el('button', 'pl-check-btn', 'Compare with mine');
    btn.type = 'button';
    var out = el('div', 'pl-msg');
    btn.onclick = function () {
      out.innerHTML = '';
      if (ta.value.trim().split(/\s+/).filter(Boolean).length < 3) {
        out.appendChild(el('p', 'pl-nudge', 'Write a sentence first, even a rough one.'));
        return;
      }
      btn.remove();
      var b = el('div', 'pl-bubble pl-model', '<strong>Here&rsquo;s one way to say it:</strong> ' + q.model);
      b.setAttribute('role', 'status');
      out.appendChild(b);
      typeset(out);
      nextButton(null, card);
    };
    card.appendChild(ta); card.appendChild(btn); card.appendChild(out);
  }

  function renderStep(q) {
    var n = PHASES.indexOf(q.phase) + 1;
    root.appendChild(progress(q.phase));
    var card = el('section', 'pl-card');
    card.appendChild(el('p', 'pl-phase pl-c' + n, 'Phase ' + n + ' of 4 &middot; ' + q.phase));
    var st = el('details', 'pl-statement');
    st.open = true;
    st.appendChild(el('summary', null, '<strong>Problem</strong>'));
    st.appendChild(el('div', null, P.statement));
    card.appendChild(st);
    card.appendChild(el('div', 'pl-question', q.text.charAt(0) === '<' ? q.text : '<p>' + q.text + '</p>'));
    root.appendChild(card);
    if (q.type === 'mc') renderMC(q, card);
    else if (q.type === 'multi') renderMulti(q, card);
    else if (q.type === 'num') renderNum(q, card);
    else if (q.type === 'write') renderWrite(q, card);
    else if (q.type === 'text') nextButton(q.cta, card);
    else if (q.type === 'essay') {
      card.appendChild(el('p', 'pl-hint', 'You&rsquo;ll write this in the Canvas check-in for this problem. '
        + 'Jot your thoughts here first if it helps; this box isn&rsquo;t saved or sent anywhere.'));
      var ta = document.createElement('textarea');
      ta.rows = 4; ta.setAttribute('aria-label', 'Scratch space for your reflection');
      card.appendChild(ta);
      nextButton('Finish', card);
    }
  }

  function renderStart() {
    var card = el('section', 'pl-card');
    card.appendChild(el('h1', 'pl-title', P.title));
    card.appendChild(el('p', null, 'This problem walks through Pólya&rsquo;s four phases of problem solving: '
      + '<strong>Understand</strong> the problem, make a <strong>Plan</strong>, <strong>Carry out</strong> the plan, '
      + 'and <strong>Look back</strong>. You&rsquo;ll get feedback on every choice as you go, and you can try again '
      + 'when something isn&rsquo;t right. Keep scratch paper handy.'));
    var st = el('div', 'pl-statement pl-static', '<strong>Problem.</strong> ' + P.statement);
    card.appendChild(st);
    root.appendChild(card);
    nextButton('Start &rarr;', card);
  }

  function renderEnd() {
    var card = el('section', 'pl-card');
    card.appendChild(el('h1', 'pl-title', 'Nice work.'));
    card.appendChild(el('p', null, 'You understood the problem, planned, carried out the plan and looked back. '
      + 'That rhythm is the habit we&rsquo;re building all semester.'));
    card.appendChild(el('p', null, '<strong>Last step:</strong> open the Canvas check-in for this problem. It asks a few '
      + 'of these questions again, plus your reflection, and that is what earns the credit.'));
    var again = el('button', 'pl-link', 'Work through it again');
    again.type = 'button';
    again.onclick = function () { step = 0; save(); render(); };
    card.appendChild(again);
    root.appendChild(card);
  }

  function render() {
    if (window.MathJax && MathJax.typesetClear) MathJax.typesetClear([root]);
    root.innerHTML = '';
    // step 0 = start screen; step i (1..n) = question i; n+1 = end.
    if (step <= 0) { step = 0; renderStart(); }
    else if (step > P.questions.length) renderEnd();
    else renderStep(P.questions[step - 1]);
    typeset(root);
    window.scrollTo(0, 0);
  }

  step = load();
  if (step > P.questions.length + 1) step = 0;
  render();
})();
