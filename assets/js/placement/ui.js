/* Math placement assessment: the page. Uses PL (core.js, answer.js, model.js, the bank) and
   PL.store (store.js) to send the finished record. The sitting in progress is kept in localStorage,
   so a reload or a dropped connection picks up at the same question. */
(function () {
  'use strict';
  var PL = window.PL, ITEMS = PL.items, CFG = PL.CFG;
  var RETAKE_DAYS = 3;
  var LS_KEY = 'pl-placement-v1';
  var STUDY = {
    int: [['Adding and subtracting negative numbers', 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-add-and-subtract'],
      ['Multiplying and dividing negative numbers', 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-multiply-and-divide'],
      ['Exponents and order of operations', 'https://www.khanacademy.org/math/pre-algebra/xb4832e56:exponents-intro-and-order-of-operations'],
      ['Factors and multiples', 'https://www.khanacademy.org/math/pre-algebra/pre-algebra-factors-multiples']],
    frac: [['Fractions', 'https://www.khanacademy.org/math/arithmetic/fraction-arithmetic'],
      ['Decimals', 'https://www.khanacademy.org/math/arithmetic/arith-decimals'],
      ['Percentages', 'https://www.khanacademy.org/math/pre-algebra/xb4832e56:percentages'],
      ['Percent and fraction word problems', 'https://www.khanacademy.org/math/pre-algebra/xb4832e56:percent-rational-number-word-problems']],
    ratio: [['Ratios and rates', 'https://www.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates'],
      ['Proportional relationships', 'https://www.khanacademy.org/math/pre-algebra/xb4832e56:proportional-relationships'],
      ['Scale drawings', 'https://www.khanacademy.org/math/cc-seventh-grade-math/x6b17ba59:scale-drawings']],
    alg: [['Variables and expressions', 'https://www.khanacademy.org/math/pre-algebra/xb4832e56:variables-expressions'],
      ['One-step and two-step equations and inequalities', 'https://www.khanacademy.org/math/pre-algebra/xb4832e56:one-step-and-two-step-equations-inequalities'],
      ['Multi-step equations', 'https://www.khanacademy.org/math/pre-algebra/xb4832e56:multi-step-equations']],
    data: [['Data and statistics', 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics'],
      ['The coordinate plane', 'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:coordinate-plane'],
      ['Functions and linear models', 'https://www.khanacademy.org/math/pre-algebra/xb4832e56:functions-and-linear-models']],
    geom: [['Area, perimeter and volume', 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic'],
      ['Angles, circles and scale', 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry']]
  };
  var EXAMPLES = {
    int: 'like $-7 - (-3)$ or $3 + 2(5 - 8)^2$',
    frac: 'like $\\frac{2}{3} + \\frac{1}{4}$ or 15% of 80',
    ratio: 'like unit prices or scaling a recipe',
    alg: 'like $5x - 3 = 2x + 9$',
    data: 'like reading a bar graph or finding an average',
    geom: 'like the area of a triangle or a circle'
  };

  /* ---------------------------------------------------------------- storage */
  var mem = {};
  function load() { try { var s = localStorage.getItem(LS_KEY); if (s) return JSON.parse(s); } catch (e) { /* private mode */ } return mem; }
  function save() { mem = store; try { localStorage.setItem(LS_KEY, JSON.stringify(store)); } catch (e) { /* ignore */ } }
  var store = load();
  store.attempts = store.attempts || [];   // finished sittings on this device: { finishedAt, decision }

  /* ---------------------------------------------------------------- helpers */
  var app = document.getElementById('pl-app');
  function esc(s) { return PL.esc(s).replace(/"/g, '&quot;'); }
  function typeset() {
    var MJ = window.MathJax;
    if (MJ && MJ.typesetPromise) { if (MJ.typesetClear) MJ.typesetClear([app]); MJ.typesetPromise([app]).catch(function () {}); }
    else setTimeout(typeset, 150);
  }
  function show(html, focusSel) {
    app.innerHTML = html;
    typeset();
    var f = focusSel && app.querySelector(focusSel);
    if (f) f.focus({ preventScroll: true }); else app.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
  function fmtDate(t) { return new Date(t).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' }); }
  function on(sel, ev, fn) { Array.prototype.forEach.call(app.querySelectorAll(sel), function (el) { el.addEventListener(ev, fn); }); }
  function val(name) { var el = app.querySelector('[name="' + name + '"]:checked') || app.querySelector('select[name="' + name + '"], input[type=text][name="' + name + '"], input[type=email][name="' + name + '"], textarea[name="' + name + '"]'); return el ? el.value.trim() : ''; }
  function radios(name, opts, legend, extra) {
    return '<fieldset class="pl-field ' + (extra || '') + '"><legend>' + legend + '</legend><div class="pl-chips">' + opts.map(function (o, i) {
      return '<label class="pl-chip"><input type="radio" name="' + name + '" value="' + esc(o[0]) + '"' + (i === 0 && false ? ' checked' : '') + '><span>' + o[1] + '</span></label>';
    }).join('') + '</div></fieldset>';
  }
  function select(name, opts, label) {
    return '<label class="pl-field"><span class="pl-label">' + label + '</span><select name="' + name + '"><option value="">Choose one</option>' +
      opts.map(function (o) { return '<option>' + esc(o) + '</option>'; }).join('') + '</select></label>';
  }

  /* ---------------------------------------------------------------- the sitting */
  var S = null, cur = null;   // engine; current { k, inst, order, shownAt }

  function nextQuestion() {
    if (S.done()) return finishQuestions();
    var k = S.next();
    if (k < 0) return finishQuestions();
    var n = S.n(), inst = PL.make(ITEMS[k], S.instanceSeed(n));
    var order = null;
    if (inst.choices) order = PL.R(PL.hash(inst.seed, 5)).shuffle(inst.choices.map(function (_, i) { return i; }));
    cur = { k: k, inst: inst, order: order, shownAt: Date.now() };
    store.sitting.current = ITEMS[k].id;
    save();
    renderQuestion();
  }

  /* rebuild the engine from a saved sitting: same seed, same answers -> same questions */
  function replay(sitting) {
    var E = new PL.Session(ITEMS, sitting.seed);
    for (var i = 0; i < sitting.answers.length; i++) {
      var k = E.next();
      if (k < 0 || ITEMS[k].id !== sitting.answers[i].id) return null;
      E.record(k, sitting.answers[i].correct);
    }
    return E;
  }

  function startSitting() {
    store.sitting = { seed: (Math.random() * 4294967296) >>> 0, startedAt: Date.now(), who: store.who, intake: store.intake, answers: [] };
    S = new PL.Session(ITEMS, store.sitting.seed);
    nextQuestion();
  }

  function resumeSitting() {
    S = replay(store.sitting);
    if (!S) { store.sitting = null; save(); return renderLanding('Your saved progress was from an older version of the assessment, so it starts fresh.'); }
    if (store.sitting.finishedQuestions) return renderExit();
    nextQuestion();
  }

  /* ---------------------------------------------------------------- landing */
  function waitUntil() {
    var last = store.attempts[store.attempts.length - 1];
    if (!last || last.decision === 'ready') return 0;
    var t = last.finishedAt + RETAKE_DAYS * 864e5;
    return t > Date.now() ? t : 0;
  }

  function renderLanding(note) {
    var preview = !PL.store.live();
    var h = '<h1>Math Placement Assessment</h1>' +
      '<p class="pl-lede">This short assessment shows whether you\'re ready to go straight into a college-level math course, or whether MATH 090 would set you up better first.</p>';
    if (note) h += '<p class="pl-note">' + esc(note) + '</p>';
    if (preview) h += '<div class="pl-card pl-preview"><b>Preview.</b> Results stay in this browser and are not sent to anyone. You can download a copy at the end.</div>';
    var last = store.attempts[store.attempts.length - 1];
    if (last) h += '<div class="pl-card soft"><p><b>Your last result</b> (' + fmtDate(last.finishedAt) + '): ' +
      (last.decision === 'ready' ? 'ready for a college-level math course.' : 'MATH 090.') + '</p>' +
      (last.decision === 'ready' ? '<p style="margin:0">You don\'t need to take it again.</p>' : '') + '</div>';
    if (store.sitting && store.sitting.answers && !store.sitting.finished) {
      h += '<div class="pl-card soft"><h3>Pick up where you left off?</h3><p class="pl-mute">You\'ve answered ' + store.sitting.answers.length + ' question' +
        (store.sitting.answers.length === 1 ? '' : 's') + '.</p><div class="pl-row"><button class="pl-btn" data-act="resume">Keep going</button></div></div>';
      return show(h);
    }
    var wait = waitUntil();
    h += '<div class="pl-card"><h2 class="pl-h">What to expect</h2><ul>' +
      '<li><b>12 to 30 questions</b>, usually 20 to 40 minutes. Each answer helps choose the next question, so the assessment stops as soon as it has a clear picture.</li>' +
      '<li><b>No calculator.</b> Have scratch paper and a pencil.</li>' +
      '<li>Most questions ask you to type a number. Fractions like <code>3/4</code>, decimals and negative numbers are all fine.</li>' +
      '<li>If you don\'t know how to do a question, say so: there\'s a button for that. It\'s more useful than a guess.</li>' +
      '<li>You\'ll see your placement as soon as you finish, along with which areas went well and what to practice.</li></ul>' +
      '<p style="margin:0">Please work on your own. This assessment is only useful if it shows what <i>you</i> know right now: there\'s nothing to gain from landing in a course you aren\'t ready for.</p></div>';
    if (wait) {
      h += '<div class="pl-card soft"><p style="margin:0">You can take the assessment again on <b>' + fmtDate(wait) + '</b>. Until then, the practice links from your last result are a great place to spend some time.</p></div>';
      return show(h);
    }
    if (preview) {
      h += '<form id="who" class="pl-card"><h2 class="pl-h">Who\'s taking it?</h2>' +
        '<p class="pl-mute pl-small">In the finished version you\'ll sign in with your Milligan account instead.</p>' +
        '<label class="pl-field"><span class="pl-label">Name</span><input type="text" name="name" autocomplete="name" value="' + esc((store.who || {}).name || '') + '"></label>' +
        '<label class="pl-field"><span class="pl-label">Milligan email</span><input type="email" name="email" autocomplete="email" value="' + esc((store.who || {}).email || '') + '"></label>' +
        '<div class="pl-row"><button class="pl-btn" type="submit">Start</button></div></form>';
    } else {
      h += '<div class="pl-row"><button class="pl-btn" data-act="signin">Sign in with your Milligan account to start</button></div>';
    }
    show(h);
  }

  /* ---------------------------------------------------------------- intake */
  var STRAND_COMFORT = [['1', 'Not at all'], ['2', 'A little'], ['3', 'Mostly'], ['4', 'Very']];
  function renderIntake() {
    var h = '<h1>Before you start</h1><p class="pl-lede">A few quick questions about your math background. These don\'t affect your placement.</p>' +
      '<form id="intake" class="pl-card">' +
      select('plan', ['MATH 111 College Algebra', 'MATH 213 Elementary Statistics', 'MATH 153 Fundamental Concepts I', 'Something else', 'Not sure yet'], 'Which math course do you expect to take first at Milligan?') +
      select('last', ['Algebra I', 'Geometry', 'Algebra II', 'Precalculus or trigonometry', 'Statistics', 'Calculus', 'Something else', 'Not sure'], 'What was the last math class you took?') +
      select('when', ['This year', 'Last year', '2 or 3 years ago', '4 or more years ago'], 'When did you finish it?') +
      select('grade', ['A', 'B', 'C', 'D or lower', 'Pass / no letter grade', 'Rather not say'], 'What grade did you get?') +
      radios('confidence', [['1', 'Very unsure'], ['2', 'Unsure'], ['3', 'In between'], ['4', 'Confident'], ['5', 'Very confident']], 'How do you feel about math right now?') +
      '<fieldset class="pl-field"><legend>How comfortable are you with each of these?</legend><div class="pl-grid">' +
      PL.STRANDS.map(function (s) {
        return '<div class="pl-grid-row"><div class="pl-grid-name"><b>' + s.name + '</b><span class="pl-mute pl-small">' + EXAMPLES[s.key] + '</span></div><div class="pl-chips">' +
          STRAND_COMFORT.map(function (o) { return '<label class="pl-chip"><input type="radio" name="self-' + s.key + '" value="' + o[0] + '"><span>' + o[1] + '</span></label>'; }).join('') + '</div></div>';
      }).join('') + '</div></fieldset>' +
      '<p class="pl-small pl-mute">Skip anything you\'d rather not answer.</p>' +
      '<div class="pl-row"><button class="pl-btn" type="submit">Start the questions</button></div></form>';
    show(h);
    app.querySelector('#intake').addEventListener('submit', function (e) {
      e.preventDefault();
      var self = {};
      PL.STRANDS.forEach(function (s) { var v = val('self-' + s.key); if (v) self[s.key] = +v; });
      store.intake = { plan: val('plan'), last: val('last'), when: val('when'), grade: val('grade'), confidence: val('confidence') ? +val('confidence') : null, self: self };
      save();
      startSitting();
    });
  }

  /* ---------------------------------------------------------------- questions */
  function renderQuestion() {
    var inst = cur.inst, n = S.n() + 1;
    var h = '<div class="pl-qmeta"><span role="status" aria-live="polite">Question ' + n + '</span><span>12 to 30 questions</span></div>' +
      '<div class="pl-progress" aria-hidden="true"><span style="width:' + Math.min(100, Math.round(100 * (n - 1) / CFG.maxItems)) + '%"></span></div>' +
      '<form id="qf" class="pl-card pl-q" autocomplete="off"><div class="pl-stem" id="stem">' + inst.q + '</div>';
    if (inst.fig) h += '<div class="pl-figwrap">' + inst.fig + '<span class="pl-sr">' + esc(inst.alt || '') + '</span></div>';
    if (inst.choices) {
      h += '<fieldset class="pl-field"><legend class="pl-sr">Choose one answer</legend>' + cur.order.map(function (j, i) {
        return '<label class="pl-opt"><input type="radio" name="ans" value="' + j + '"><span class="L">' + 'ABCDE'[i] + '</span><span>' + inst.choices[j] + '</span></label>';
      }).join('') + '</fieldset>';
    } else {
      h += '<label class="pl-answer"><span class="pl-sr">Your answer</span>' + (inst.pre ? '<span class="pl-affix">' + inst.pre + '</span>' : '') +
        '<input type="text" name="ans" id="ans" inputmode="text" autocapitalize="off" spellcheck="false" aria-describedby="stem hint msg">' +
        (inst.post ? '<span class="pl-affix">' + inst.post + '</span>' : '') + '</label>' +
        '<p class="pl-hint" id="hint">' + (inst.hint ? inst.hint : 'Type a number: for example <code>-3</code>, <code>2.5</code>, <code>3/4</code> or <code>1 1/2</code>.') + '</p>';
    }
    h += '<p class="pl-msg" id="msg" role="alert"></p>' +
      radios('conf', [['sure', 'Sure'], ['think', 'I think so'], ['guess', 'Guessing']], 'How sure are you?', 'pl-conf') +
      '<div class="pl-actions"><button type="button" class="pl-btn ghost" data-act="dontknow">I don\'t know how to do this</button>' +
      '<button type="submit" class="pl-btn" id="next">Next</button></div></form>';
    show(h, inst.choices ? null : '#ans');
    var f = app.querySelector('#qf');
    f.addEventListener('submit', function (e) { e.preventDefault(); submitAnswer(false); });
    on('[data-act=dontknow]', 'click', function () { submitAnswer(true); });
    on('.pl-opt input', 'change', function () { Array.prototype.forEach.call(app.querySelectorAll('.pl-opt'), function (l) { l.classList.toggle('sel', l.querySelector('input').checked); }); });
  }

  function submitAnswer(dontKnow) {
    var inst = cur.inst, msg = app.querySelector('#msg'), response = null, correct = false;
    if (!dontKnow) {
      if (inst.choices) {
        response = val('ans');
        if (response === '') { msg.textContent = 'Choose an answer, or press "I don\'t know how to do this."'; return; }
        correct = +response === 0;
        response = +response;
      } else {
        response = val('ans');
        if (!response) { msg.textContent = 'Type an answer, or press "I don\'t know how to do this."'; app.querySelector('#ans').focus(); return; }
        var r = PL.check(inst, response);
        if (r.unread) { msg.textContent = 'I couldn\'t read that as a number. Try something like -3, 2.5, 3/4 or 1 1/2.'; app.querySelector('#ans').focus(); return; }
        correct = r.ok;
      }
    }
    var it = ITEMS[cur.k];
    store.sitting.answers.push({ id: it.id, seed: inst.seed, strand: it.strand, level: it.level, response: response, dontKnow: !!dontKnow,
      correct: correct, conf: dontKnow ? null : (val('conf') || null), ms: Date.now() - cur.shownAt });
    S.record(cur.k, correct);
    save();
    nextQuestion();
  }

  /* ---------------------------------------------------------------- exit survey and result */
  function finishQuestions() {
    store.sitting.finishedQuestions = Date.now();
    store.sitting.result = { decision: S.decision(), close: S.close(), pReady: +S.pReady().toFixed(4), theta: +S.post.mean().toFixed(3),
      sd: +S.post.sd().toFixed(3), n: S.n(), strands: S.strandSummary() };
    save();
    renderExit();
  }

  function renderExit() {
    var h = '<h1>Last step</h1><p class="pl-lede">You\'re done with the questions. Two quick things, then your result.</p>' +
      '<form id="exit" class="pl-card"><fieldset class="pl-field"><legend>Which areas felt shaky? Check any that apply.</legend>' +
      PL.STRANDS.map(function (s) { return '<label class="pl-check"><input type="checkbox" name="gap" value="' + s.key + '"><span>' + s.name + '</span></label>'; }).join('') +
      '<label class="pl-check"><input type="checkbox" name="gap" value="none"><span>None of them</span></label></fieldset>' +
      '<label class="pl-field"><span class="pl-label">Anything else you\'d like us to know about your math background? (optional)</span><textarea name="comment" rows="3"></textarea></label>' +
      '<div class="pl-row"><button class="pl-btn" type="submit">See my result</button></div></form>';
    show(h);
    app.querySelector('#exit').addEventListener('submit', function (e) {
      e.preventDefault();
      var gaps = Array.prototype.map.call(app.querySelectorAll('input[name=gap]:checked'), function (x) { return x.value; });
      store.sitting.exit = { gaps: gaps, comment: val('comment') };
      complete();
    });
  }

  function complete() {
    var s = store.sitting;
    s.finished = Date.now();
    var record = { version: 1, bank: PL.items.length, who: s.who || null, startedAt: s.startedAt, finishedAt: s.finished, attempt: store.attempts.length + 1,
      intake: s.intake || null, answers: s.answers, result: s.result, exit: s.exit || null, userAgent: navigator.userAgent };
    store.attempts.push({ finishedAt: s.finished, decision: s.result.decision });
    store.lastRecord = record;
    store.sitting = null;
    save();
    renderResult(record, null);
    PL.store.submit(record).then(function (r) { renderResult(record, r); }, function (err) { renderResult(record, { error: String(err && err.message || err) }); });
  }

  function renderResult(rec, sent) {
    var res = rec.result, ready = res.decision === 'ready', retake = rec.finishedAt + RETAKE_DAYS * 864e5;
    var h = '<h1>Your result</h1>';
    if (ready) {
      h += '<div class="pl-card pl-result ok"><p class="pl-big">You\'re ready for a college-level math course.</p>' +
        '<p style="margin:0">You don\'t need MATH 090. You can take MATH 111, MATH 213 or MATH 153, whichever your program calls for.</p></div>';
    } else {
      h += '<div class="pl-card pl-result">' +
        '<p class="pl-big">We\'re placing you in MATH 090.</p>' +
        '<p>MATH 090 rebuilds the foundations below at a steady pace, with practice until each idea is solid, so that your college-level math course goes well. Plenty of students start here and do great afterward.</p>' +
        (res.close ? '<p>Your result was close to the line, so Dr. Lundholm will look it over too.</p>' : '') +
        '<p style="margin:0">If you think this doesn\'t show what you know, practice the areas below and take the assessment again on or after <b>' + fmtDate(retake) + '</b>. You\'ll get new questions.</p></div>';
    }
    h += '<h2>How each area went</h2><div class="pl-card"><table class="pl-areas"><thead><tr><th scope="col">Area</th><th scope="col">Right</th></tr></thead><tbody>' +
      res.strands.map(function (s) {
        var weak = s.asked && s.right / s.asked < 0.6;
        return '<tr' + (weak ? ' class="weak"' : '') + '><th scope="row">' + s.name + '</th><td>' + s.right + ' of ' + s.asked + '</td></tr>';
      }).join('') + '</tbody></table>' +
      '<p class="pl-small pl-mute" style="margin:.8rem 0 0">The questions were chosen to match your answers as you went, so these counts are a rough guide, not a score.</p></div>';
    var weakAreas = res.strands.filter(function (s) { return s.asked && s.right / s.asked < 0.6; });
    var practice = weakAreas.length ? weakAreas : (ready ? [] : res.strands.slice().sort(function (a, b) { return a.right / a.asked - b.right / b.asked; }).slice(0, 2));
    if (practice.length) {
      h += '<h2>' + (ready ? 'Worth a quick refresh' : 'What to practice') + '</h2><div class="pl-card">' + practice.map(function (s) {
        return '<h3>' + s.name + '</h3><ul>' + STUDY[s.key].map(function (l) { return '<li><a href="' + l[1] + '" target="_blank" rel="noopener">' + l[0] + '</a> (Khan Academy)</li>'; }).join('') + '</ul>';
      }).join('') + '</div>';
    }
    h += '<div class="pl-card soft">';
    if (!sent) h += '<p class="pl-mute" style="margin:0">Saving your result&hellip;</p>';
    else if (sent.error) h += '<p style="margin:0"><b>Your result didn\'t save.</b> Please keep this page open and email Dr. Lundholm, or download a copy below and send it. (' + esc(sent.error) + ')</p>';
    else if (sent.where === 'local') h += '<p style="margin:0">Preview: this result was saved in this browser only.</p>';
    else h += '<p style="margin:0">Your result has been recorded, and the Registrar\'s office will see your placement. Questions? Email Dr. Lundholm.</p>';
    h += '<div class="pl-row" style="margin-top:.8rem"><button class="pl-btn ghost" data-act="download">Download a copy</button><button class="pl-btn ghost" data-act="print">Print</button></div></div>';
    show(h);
  }

  function download(rec) {
    var blob = new Blob([JSON.stringify(rec, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'placement-' + new Date(rec.finishedAt).toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a); a.click(); a.remove();
  }

  /* ---------------------------------------------------------------- events */
  app.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]');
    if (!b) return;
    var act = b.dataset.act;
    if (act === 'resume') resumeSitting();
    else if (act === 'download') download(store.lastRecord);
    else if (act === 'print') window.print();
    else if (act === 'signin') PL.store.signIn().then(function (who) { store.who = who; save(); renderIntake(); }, function (err) { renderLanding('Sign-in didn\'t work: ' + (err && err.message || err)); });
  });
  app.addEventListener('submit', function (e) {
    if (e.target.id !== 'who') return;
    e.preventDefault();
    store.who = { name: val('name'), email: val('email') };
    save();
    renderIntake();
  });

  if (location.hash === '#result' && store.lastRecord) renderResult(store.lastRecord, { where: PL.store.live() ? 'sent' : 'local' });
  else renderLanding();
})();
