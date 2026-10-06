/* Calc-ready check: the page. Uses window.CR_DATA (built from the skill graph) and window.CRModel.
   Nothing is sent anywhere. localStorage keeps the session in progress, the last result and which
   questions this browser has seen (so a retake prefers new ones). */
(function () {
  'use strict';
  var D = window.CR_DATA, M = window.CRModel;
  var G = new M.Graph(D);
  var N = D.nodes, ITEMS = D.items;
  var LS_KEY = 'crc-v' + D.version;
  var MODES = {
    quick: { label: 'Quick', min: 12, max: 15, toss: 4, about: 'About 15 questions, 15 to 20 minutes' },
    full: { label: 'Full', min: 20, max: 30, toss: 2, about: '20 to 30 questions, 30 to 40 minutes' }
  };
  var EARLIEST_STOP = 8, MAX_PER_NODE = 2;
  var itemsByNode = N.map(function () { return []; });
  ITEMS.forEach(function (it, k) { itemsByNode[it.node].push(k); });
  var itemIndex = {};
  ITEMS.forEach(function (it, k) { itemIndex[it.id] = k; });

  /* ---------------------------------------------------------------- storage */
  var mem = null;
  function load() {
    try { var s = window.localStorage.getItem(LS_KEY); if (s) return JSON.parse(s); } catch (e) { /* private mode */ }
    return mem || {};
  }
  function save(st) { mem = st; try { window.localStorage.setItem(LS_KEY, JSON.stringify(st)); } catch (e) { /* ignore */ } }
  var store = load();
  store.seen = store.seen || {};

  /* ---------------------------------------------------------------- session engine */
  var S = null;   // { seed, mode, answers: [{item, choice}], post, rand, used, usedItems, last, current }

  function newEngine(seed, mode) {
    var rand = M.rng(seed);
    return { seed: seed, mode: mode, answers: [], rand: rand, post: new M.Posterior(G, D.prior, rand),
      used: new Array(N.length).fill(0), usedItems: {}, last: -1, current: null };
  }

  /* Next item: the model picks the node, then an unused item on it, preferring ones this browser has
     seen least. `forced` (replay) reuses the saved item but still draws the same random numbers, so a
     rebuilt session stays in step even though the seen counts have changed since. */
  function pickNext(E, forced) {
    var cand = [];
    for (var i = 0; i < N.length; i++) {
      if (i === E.last || E.used[i] >= MAX_PER_NODE) continue;
      if (itemsByNode[i].some(function (k) { return !E.usedItems[k]; })) cand.push(i);
    }
    if (!cand.length) return null;
    var node = E.post.nextNode(cand);
    var pool = itemsByNode[node].filter(function (k) { return !E.usedItems[k]; });
    var least = Math.min.apply(null, pool.map(function (k) { return store.seen[ITEMS[k].id] || 0; }));
    pool = pool.filter(function (k) { return (store.seen[ITEMS[k].id] || 0) === least; });
    var r = E.rand();
    if (forced !== undefined) return ITEMS[forced] && ITEMS[forced].node === node && !E.usedItems[forced] ? forced : null;
    return pool[Math.floor(r * pool.length)];
  }

  function respOf(k, choice) { return choice === 'skip' ? 'skip' : (choice === ITEMS[k].correct ? 'correct' : 'wrong'); }

  function apply(E, k, choice) {
    var it = ITEMS[k];
    E.post.update(it.node, respOf(k, choice));
    E.used[it.node]++; E.usedItems[k] = true; E.last = it.node;
    E.answers.push({ item: it.id, choice: choice });
  }

  function shouldStop(E) {
    var md = MODES[E.mode], n = E.answers.length;
    if (n >= md.max) return true;
    return n >= md.min && E.post.tossUps() <= md.toss;
  }

  /* Rebuild a saved session from its seed and answers; null if the bank has changed since. */
  function replay(saved) {
    if (!saved || !MODES[saved.mode]) return null;
    var E = newEngine(saved.seed, saved.mode);
    for (var a = 0; a < saved.answers.length; a++) {
      var k = pickNext(E, itemIndex[saved.answers[a].item]);
      if (k === null || k === undefined) return null;
      apply(E, k, saved.answers[a].choice);
    }
    return E;
  }

  function persist() {
    store.session = S ? { seed: S.seed, mode: S.mode, answers: S.answers, current: S.current === null ? null : ITEMS[S.current].id, done: !!S.done } : null;
    save(store);
  }

  /* ---------------------------------------------------------------- helpers */
  var app = document.getElementById('crc-app');
  // rac -> \dfrac so fractions in questions and answers are full size (the site's MathJax config is shared)
  function esc(s) { return String(s).replace(/\\frac(?![a-zA-Z])/g, '\\dfrac').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function typeset() {
    var MJ = window.MathJax;
    if (MJ && MJ.typesetPromise) { MJ.typesetClear && MJ.typesetClear([app]); MJ.typesetPromise([app]).catch(function () {}); }
    else setTimeout(typeset, 150);
  }
  function show(html, focus) {
    app.innerHTML = html;
    typeset();
    if (focus !== false) { app.focus({ preventScroll: true }); window.scrollTo(0, 0); }
  }
  function list(arr) {
    if (arr.length <= 1) return arr.join('');
    return arr.slice(0, -1).join(', ') + (arr.length > 2 ? ',' : '') + ' and ' + arr[arr.length - 1];
  }
  function lower(s) { return s.charAt(0).toLowerCase() + s.slice(1); }

  /* ---------------------------------------------------------------- landing */
  function renderLanding() {
    var saved = store.session, resume = saved && !saved.done && saved.answers && saved.answers.length;
    var h = '<h1>Where do I start?</h1>' +
      '<p class="crc-lede">A short check of the algebra and trigonometry that Calculus I leans on. It finds where to start and points you to practice for each skill.</p>';
    if (resume) {
      h += '<div class="crc-card soft"><h3>Pick up where you left off?</h3><p class="crc-mute">You answered ' + saved.answers.length +
        ' question' + (saved.answers.length === 1 ? '' : 's') + ' in the ' + MODES[saved.mode].label.toLowerCase() + ' check.</p>' +
        '<div class="crc-row"><button class="crc-btn" data-act="resume">Keep going</button><button class="crc-btn ghost" data-act="discard">Start over</button></div></div>';
    }
    if (store.last) h += '<p><a href="#" data-act="last">See your last result</a></p>';
    h += '<div class="crc-card"><p>This is not a grade, and nobody sees it unless you choose to share it. Each answer helps the page pick the next question, so no two people get quite the same set.</p>' +
      '<p>If you haven\'t met something yet, press <b>Haven\'t seen this yet</b>. That tells the page more than a guess does, and it\'s completely fine.</p>' +
      '<p style="margin:0">No calculator needed; have scratch paper handy. At the end you\'ll see where to start, why, and links to lessons and practice.</p></div>' +
      '<h2>Choose a length</h2><div class="crc-modes">' +
      '<button class="crc-mode" data-act="start" data-mode="quick"><b>Quick check</b><span class="crc-mute">' + MODES.quick.about + '</span></button>' +
      '<button class="crc-mode" data-act="start" data-mode="full"><b>Full check</b><span class="crc-mute">' + MODES.full.about + '. A sharper picture.</span></button></div>' +
      '<p class="crc-small crc-mute">You can stop after ' + EARLIEST_STOP + ' questions and see what the page has so far. It covers ' + N.length +
      ' skills, from fractions and factoring to logarithms and trig identities.</p>';
    show(h);
  }

  /* ---------------------------------------------------------------- quiz */
  var selected = null;
  function renderQuestion() {
    var E = S, k = E.current, it = ITEMS[k], md = MODES[E.mode], n = E.answers.length + 1;
    selected = null;
    var h = '<div class="crc-qmeta"><span>' + md.label + ' check</span><span role="status" aria-live="polite">Question ' + n + ', up to ' + md.max + '</span></div>' +
      '<div class="crc-progress" aria-hidden="true"><span style="width:' + Math.round(100 * (n - 1) / md.max) + '%"></span></div>' +
      '<div class="crc-card"><form id="qf"><fieldset><legend>' + esc(it.prompt) + '</legend>';
    it.options.forEach(function (o, i) {
      h += '<label class="crc-opt" data-i="' + i + '"><input type="radio" name="ans" value="' + i + '"><span class="L">' + 'ABCD'[i] + '</span><span>' + esc(o) + '</span></label>';
    });
    h += '</fieldset><div class="crc-actions"><button type="button" class="crc-btn ghost" data-act="skip">Haven\'t seen this yet</button>' +
      '<button type="submit" class="crc-btn" id="next" disabled>Next</button></div></form></div>';
    if (E.answers.length >= EARLIEST_STOP) h += '<p class="crc-noprint"><button class="crc-btn alt" data-act="stop">Show me what you have so far</button></p>';
    else h += '<p class="crc-small crc-mute">You can stop and see a result after ' + EARLIEST_STOP + ' questions.</p>';
    show(h, n === 1);
    var f = document.getElementById('qf');
    f.addEventListener('change', function (e) {
      selected = +e.target.value;
      document.getElementById('next').disabled = false;
      Array.prototype.forEach.call(f.querySelectorAll('.crc-opt'), function (l) { l.classList.toggle('sel', +l.dataset.i === selected); });
    });
    f.addEventListener('submit', function (e) { e.preventDefault(); if (selected !== null) answer(selected); });
    var first = f.querySelector('input'); if (first && n > 1) first.focus({ preventScroll: true });
  }

  function answer(choice) {
    var k = S.current;
    apply(S, k, choice);
    store.seen[ITEMS[k].id] = (store.seen[ITEMS[k].id] || 0) + 1;
    if (shouldStop(S)) return finish();
    S.current = pickNext(S);
    if (S.current === null) return finish();
    persist();
    renderQuestion();
  }

  function startSession(mode) {
    var seed = (Math.random() * 4294967296) >>> 0;
    S = newEngine(seed, mode);
    S.current = pickNext(S);
    persist();
    renderQuestion();
  }

  function finish() {
    S.done = true;
    var res = computeResult(S);
    store.last = res;
    persist();
    renderResults(res);
  }

  /* ---------------------------------------------------------------- results */
  function status(p) { return p >= 0.8 ? 'solid' : p <= 0.3 ? 'gap' : 'unsure'; }
  var STATUS_LABEL = { solid: 'looks solid', unsure: 'not sure yet', gap: 'probably a gap' };

  function computeResult(E) {
    var m = Array.from(E.post.marginals());
    var ranked = E.post.ranked(0.1);
    var asked = {};
    E.answers.forEach(function (a) { var k = itemIndex[a.item]; if (k !== undefined) asked[ITEMS[k].node] = (asked[ITEMS[k].node] || '') + respOf(k, a.choice)[0]; });
    function evidence(i) {   // a miss or "not seen" on the node itself, or on something built on it
      if (asked[i] && /[ws]/.test(asked[i])) return true;
      return G.dep[i].some(function (d) { return asked[d] && /[ws]/.test(asked[d]); });
    }
    var cands = ranked.order.filter(function (i) { return ranked.fringe[i] >= 0.25; });
    var start = cands.filter(evidence).concat(cands.filter(function (i) { return !evidence(i); })).slice(0, 3);
    var also = ranked.order.filter(function (i) { return start.indexOf(i) < 0 && m[i] < 0.6; }).slice(0, 3);
    var leastSure = [];
    if (!start.length) {
      leastSure = m.map(function (p, i) { return [Math.abs(p - 0.5), i]; }).sort(function (a, b) { return a[0] - b[0]; })
        .slice(0, 2).map(function (x) { return x[1]; });
    }
    var d = new Date();
    return { v: D.version, mode: E.mode, n: E.answers.length, answers: E.answers, marg: m.map(function (p) { return Math.round(p * 1000) / 1000; }),
      start: start, also: also, leastSure: leastSure, month: d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) };
  }

  function answersByNode(res) {
    var by = {};
    res.answers.forEach(function (a, q) {
      var k = itemIndex[a.item]; if (k === undefined) return;
      var it = ITEMS[k];
      (by[it.node] = by[it.node] || []).push({ q: q + 1, k: k, choice: a.choice, resp: respOf(k, a.choice) });
    });
    return by;
  }

  function whyThis(i, res, by) {
    var mine = by[i] || [];
    var wrong = mine.filter(function (a) { return a.resp === 'wrong'; }).length, skip = mine.filter(function (a) { return a.resp === 'skip'; }).length;
    if (wrong && skip) return 'You missed a question on this and said you hadn\'t seen another.';
    if (wrong) return wrong > 1 ? 'You missed both questions on this.' : 'You missed the question on this.';
    if (skip) return 'You said you hadn\'t seen this yet.';
    var hurt = [];
    G.dep[i].forEach(function (d) { (by[d] || []).forEach(function (a) { if (a.resp !== 'correct' && hurt.indexOf(N[d].title) < 0) hurt.push(N[d].title); }); });
    if (hurt.length) return 'You weren\'t asked about this directly, but you missed questions that build on it: ' + esc(lower(list(hurt.slice(0, 2)))) + '.';
    if (mine.length) return 'You got its question right, but the answers around it suggest checking it.';
    return 'The check didn\'t get to this one. Students who answer the way you did often haven\'t got it yet, and Calculus I leans on it, so give it a quick check: try the practice, and if it\'s easy, move on.';
  }

  function linksHtml(node) {
    if (!node.links || !node.links.length) return '<p class="crc-small crc-mute">Study links for this skill are coming soon. Ask your instructor in the meantime.</p>';
    var icon = { practice: 'Practice', lesson: 'Lesson', watch: 'Watch', read: 'Read' };
    return '<div class="crc-links">' + node.links.map(function (l) {
      return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + (icon[l.kind] || 'Open') + ': ' + esc(l.title) + ' <small>' + esc(l.source) + '</small></a>';
    }).join('') + '</div>';
  }

  function slipNotes(res, by) {
    var notes = [];
    Object.keys(by).forEach(function (i) {
      by[i].forEach(function (a) {
        if (a.resp !== 'wrong') return;
        var slip = ITEMS[a.k].slips[String(a.choice)];
        if (slip) notes.push({ node: +i, q: a.q, slip: slip, twice: by[i].filter(function (b) { return b.resp === 'wrong'; }).length > 1 });
      });
    });
    return notes.sort(function (a, b) { return a.q - b.q; });
  }

  function renderResults(res) {
    var by = answersByNode(res), m = res.marg, md = MODES[res.mode];
    var h = '<h1>Here\'s where I\'d start</h1>';
    var solidTopics = D.topics.filter(function (t) {
      var ids = N.map(function (d, i) { return d.topic === t.key ? i : -1; }).filter(function (i) { return i >= 0; });
      if (ids.some(function (i) { return res.start.indexOf(i) >= 0 || m[i] <= 0.3; })) return false;
      return ids.filter(function (i) { return m[i] >= 0.8; }).length >= 0.75 * ids.length;
    }).map(function (t) { return lower(t.label); });
    function hasEvidence(i) {
      if ((by[i] || []).some(function (a) { return a.resp !== 'correct'; })) return true;
      return G.dep[i].some(function (d) { return (by[d] || []).some(function (a) { return a.resp !== 'correct'; }); });
    }
    var nextSteps = res.start.filter(hasEvidence), toCheck = res.start.filter(function (i) { return !hasEvidence(i); });
    var names = function (ix) { return esc(list(ix.map(function (i) { return lower(N[i].title); }))); };
    if (res.start.length) {
      h += '<p class="crc-lede">' + (solidTopics.length ? 'You look solid in ' + esc(list(solidTopics)) + '. ' : '') +
        (nextSteps.length ? 'The next step' + (nextSteps.length > 1 ? 's are ' : ' is ') + names(nextSteps) + '.' +
          (toCheck.length ? ' The check didn\'t get to ' + names(toCheck) + ', so give ' + (toCheck.length > 1 ? 'those' : 'that') + ' a quick look too.' : '')
        : 'Nothing you answered points to a gap, but the check didn\'t get to ' + names(toCheck) + ', so give ' + (toCheck.length > 1 ? 'those' : 'that') + ' a quick look.') + '</p>';
    } else {
      h += '<p class="crc-lede">Nothing in this check looks missing. Nice work.' + (res.leastSure.length ? ' If you want to double-check something, these are the two skills the page is least sure about: ' +
        esc(list(res.leastSure.map(function (i) { return lower(N[i].title); }))) + '.' : '') + '</p>';
    }
    h += '<p class="crc-small crc-mute">This is a best guess from ' + res.n + ' questions, not a grade. Skills you weren\'t asked about are inferred from your other answers.' +
      (res.n < md.min ? ' You stopped early, so take it lightly; a full check will sharpen it.' : '') + '</p>';

    if (res.start.length) {
      h += '<h2>Start here</h2>';
      res.start.forEach(function (i, r) {
        var d = N[i];
        h += '<div class="crc-card crc-start"><h3 style="display:flex;align-items:center"><span class="crc-num" aria-hidden="true">' + (r + 1) + '</span>' + esc(d.title) + '</h3>' +
          '<p class="crc-kv"><b>Why this one.</b> ' + whyThis(i, res, by) + '</p>' +
          '<p class="crc-kv"><b>What it looks like when you\'ve got it.</b> ' + esc(d.mastery) + '</p>' +
          (d.used211.length ? '<p class="crc-kv"><b>Where Calculus I uses it.</b> ' + esc(d.used211.slice(0, 3).join('; ')) + '.</p>' : '') +
          linksHtml(d) +
          (d.misconceptions.length ? '<details style="margin-top:12px"><summary>Common slips to watch for</summary><ul>' +
            d.misconceptions.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></details>' : '') + '</div>';
      });
    }

    var notes = slipNotes(res, by);
    if (notes.length) {
      h += '<h2>What I noticed</h2><div class="crc-card"><ul style="margin:0;padding-left:1.2em">';
      notes.slice(0, 6).forEach(function (x) {
        h += '<li><b>' + esc(N[x.node].title) + '</b> (question ' + x.q + '): your answer looks like this slip: ' + esc(lower(x.slip)) + '.' + (x.twice ? ' It came up more than once, so it\'s worth a look.' : '') + '</li>';
      });
      h += '</ul><p class="crc-small crc-mute" style="margin:8px 0 0">One slip can be just that. The walk-through below shows the right method for each.</p></div>';
    }

    if (res.also.length) {
      h += '<h2>Also worth a look</h2><p class="crc-mute">These look shaky but aren\'t the first step. They\'ll matter once the ones above are solid.</p><div class="crc-card"><ul style="margin:0;padding-left:1.2em">';
      res.also.forEach(function (i) {
        var l = N[i].links && N[i].links[0];
        h += '<li>' + esc(N[i].title) + (l ? ' &middot; <a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.title) + '</a>' : '') + '</li>';
      });
      h += '</ul></div>';
    }

    h += '<h2>Your map</h2><div class="crc-legend" aria-hidden="true"><span><span class="crc-mark solid" style="display:inline-block"></span> looks solid</span>' +
      '<span><span class="crc-mark unsure" style="display:inline-block"></span> not sure yet</span><span><span class="crc-mark gap" style="display:inline-block"></span> probably a gap</span>' +
      '<span><i>(inferred)</i> = not asked directly</span></div><div class="crc-card">';
    D.topics.forEach(function (t) {
      h += '<div class="crc-topic"><h3>' + esc(t.label) + '</h3><ul class="crc-nodes">';
      N.forEach(function (d, i) {
        if (d.topic !== t.key) return;
        var st = status(m[i]), pos = res.start.indexOf(i);
        h += '<li><span class="crc-mark ' + st + '" aria-hidden="true"></span><span>' + (pos >= 0 ? '<span class="crc-sh">' + (pos + 1) + '.</span> ' : '') + esc(d.title) +
          ' <span class="crc-sr">' + STATUS_LABEL[st] + '</span>' + (by[i] ? '' : ' <span class="crc-inferred">(inferred)</span>') + '</span></li>';
      });
      h += '</ul></div>';
    });
    h += '</div>';

    h += '<h2>Walk-through</h2><p class="crc-mute">Every question you saw, with the answer and what each wrong choice usually means.</p>';
    res.answers.forEach(function (a, q) {
      var k = itemIndex[a.item]; if (k === undefined) return;
      var it = ITEMS[k], resp = respOf(k, a.choice);
      var tag = resp === 'correct' ? '<span class="crc-tag ok">right</span>' : resp === 'skip' ? '<span class="crc-tag sk">not seen yet</span>' : '<span class="crc-tag no">not quite</span>';
      h += '<details><summary>' + (q + 1) + '. ' + esc(N[it.node].title) + tag + '</summary><p style="margin-top:10px">' + esc(it.prompt) + '</p>';
      it.options.forEach(function (o, i) {
        var cls = i === it.correct ? 'right' : (i === a.choice ? 'chosen-wrong' : '');
        var note = i === it.correct ? ' <b>(answer)</b>' : (it.slips[String(i)] ? ' <span class="crc-mute crc-small">: ' + esc(it.slips[String(i)]) + '</span>' : '');
        h += '<div class="crc-wt ' + cls + '">' + 'ABCD'[i] + '. ' + esc(o) + (i === a.choice ? ' <b>&larr; yours</b>' : '') + note + '</div>';
      });
      if (it.why) h += '<p class="crc-small crc-mute" style="margin-top:8px">' + esc(it.why) + '</p>';
      h += '</details>';
    });

    var rep = reportText(res), line = classLine(res);
    h += '<h2>Save or share</h2><div class="crc-card crc-noprint"><p class="crc-mute">Nothing has been sent anywhere. Copy this if you want to keep it or send it to your instructor.</p>' +
      '<pre class="crc-report" id="rep">' + esc(rep) + '</pre><div class="crc-row"><button class="crc-btn" data-act="copy" data-target="rep">Copy report</button>' +
      '<button class="crc-btn alt" data-act="download">Download .txt</button><button class="crc-btn ghost" data-act="print">Print</button><span class="crc-toast" id="toast" role="status"></span></div>' +
      '<details style="margin-top:14px"><summary>Class summary line (only if your instructor asks)</summary><p class="crc-small crc-mute" style="margin-top:8px">This line says which skills look solid, unsure or missing, and nothing about who you are. Paste it into an anonymous form only if your instructor asks for it.</p>' +
      '<pre class="crc-report" id="cls">' + esc(line) + '</pre><button class="crc-btn ghost" data-act="copy" data-target="cls">Copy line</button></details></div>';
    h += '<div class="crc-row crc-noprint" style="margin-top:20px"><button class="crc-btn" data-act="home">Take it again</button><button class="crc-btn ghost" data-act="clear">Clear what this page saved</button></div>';
    show(h);
  }

  function reportText(res) {
    var by = answersByNode(res), m = res.marg, L = [];
    L.push('Where do I start? Calc-ready check (' + MODES[res.mode].label.toLowerCase() + ', ' + res.n + ' questions, ' + res.month + ')');
    L.push('');
    if (res.start.length) {
      L.push('Start here:');
      res.start.forEach(function (i, r) {
        L.push('  ' + (r + 1) + '. ' + N[i].title);
        (N[i].links || []).forEach(function (l) { L.push('     ' + l.source + ': ' + l.url); });
      });
    } else L.push('Nothing in this check looks missing.');
    if (res.also.length) L.push('Also worth a look: ' + res.also.map(function (i) { return N[i].title; }).join('; '));
    L.push('');
    D.topics.forEach(function (t) {
      L.push(t.label + ':');
      N.forEach(function (d, i) { if (d.topic === t.key) L.push('  [' + { solid: 'x', unsure: '~', gap: ' ' }[status(m[i])] + '] ' + d.title + (by[i] ? '' : ' (inferred)')); });
    });
    L.push('');
    L.push('[x] looks solid  [~] not sure yet  [ ] probably a gap');
    return L.join('\n');
  }

  function classLine(res) {
    var code = res.marg.map(function (p) { return { solid: 'S', unsure: 'U', gap: 'G' }[status(p)]; }).join('');
    var by = answersByNode(res), slips = [];
    Object.keys(by).forEach(function (i) { by[i].forEach(function (a) { if (a.resp === 'wrong') slips.push(N[i].id + ':' + 'ABCD'[a.choice]); }); });
    return 'CRC' + D.version + ' ' + res.mode.charAt(0) + ' ' + res.month + ' | ' + code + ' | start: ' + res.start.map(function (i) { return N[i].id; }).join(',') + ' | slips: ' + slips.join(',');
  }

  /* ---------------------------------------------------------------- actions */
  function flash(msg) { var t = document.getElementById('toast'); if (t) { t.textContent = msg; setTimeout(function () { t.textContent = ''; }, 4000); } }
  function copyText(txt, done) {
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(txt).then(function () { done(true); }, function () { done(false); });
    else {
      var ta = document.createElement('textarea'); ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
      var ok = false; try { ok = document.execCommand('copy'); } catch (e) { /* ignore */ } document.body.removeChild(ta); done(ok);
    }
  }

  app.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]'); if (!b) return;
    var act = b.dataset.act;
    if (act !== 'copy' && act !== 'download' && act !== 'print') e.preventDefault();
    switch (act) {
      case 'start': startSession(b.dataset.mode); break;
      case 'resume': S = replay(store.session); if (S) S.current = pickNext(S, itemIndex[store.session.current]); if (!S || S.current === null || S.current === undefined) { S = null; store.session = null; save(store); renderLanding(); break; } renderQuestion(); break;
      case 'discard': store.session = null; save(store); renderLanding(); break;
      case 'skip': answer('skip'); break;
      case 'stop': finish(); break;
      case 'last': renderResults(store.last); break;
      case 'home': S = null; store.session = null; save(store); renderLanding(); break;
      case 'copy': copyText(document.getElementById(b.dataset.target).textContent, function (ok) { flash(ok ? 'Copied.' : 'Copy failed; select the text and copy it.'); }); break;
      case 'download': {
        var blob = new Blob([document.getElementById('rep').textContent], { type: 'text/plain' }), a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = 'calc-ready-check.txt'; document.body.appendChild(a); a.click(); a.remove(); break;
      }
      case 'print': window.print(); break;
      case 'clear': try { window.localStorage.removeItem(LS_KEY); } catch (err) { /* ignore */ } mem = null; store = { seen: {} }; S = null; renderLanding(); break;
    }
  });

  if (store.last && store.last.v !== D.version) store.last = null;
  renderLanding();
  window.CRC = { _engine: function () { return S; }, _store: function () { return store; } };   // for the browser tests
})();
