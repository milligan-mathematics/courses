/* Praxis Mathematics (5165) diagnostic: engine.
   Runs entirely in the browser. Nothing is sent anywhere; progress and history live in localStorage.
   Depends on topics.js, figures.js, bank-*.js (and optionally generators.js) loaded first. */
(function () {
  'use strict';
  var PXD = window.PXD;
  var root = document.getElementById('pxd-root');
  if (!PXD || !root) return;
  PXD.version = '1.0';
  PXD.gens = PXD.gens || [];

  var LS_KEY = 'pxd5165.v1';
  var TEST_Q = 66, TEST_MIN = 180, SEC_PER_Q = TEST_MIN * 60 / TEST_Q;   // ETS pace: about 2 min 44 s per question
  var TEACH_TARGET = 0.27;
  var MODES = {
    quick: { n: 22, label: 'Quick check', blurb: 'One-third of a test. A fast first map of where you stand.' },
    half:  { n: 33, label: 'Half-length diagnostic', blurb: 'Half a test. Enough questions per area to see real patterns.' },
    full:  { n: 66, label: 'Full-length diagnostic', blurb: 'Mirrors the real test blueprint, question for question.' }
  };

  /* ------------------------------------------------------------ utilities */
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function $(sel, el) { return (el || root).querySelector(sel); }
  function $$(sel, el) { return Array.prototype.slice.call((el || root).querySelectorAll(sel)); }
  function pct(a, b) { return b ? Math.round(100 * a / b) : 0; }
  function mmss(sec) { sec = Math.max(0, Math.round(sec)); var h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = sec % 60, p2 = function (n) { return (n < 10 ? '0' : '') + n; }; return h ? h + ':' + p2(m) + ':' + p2(s) : m + ':' + p2(s); }
  function hms(sec) { sec = Math.round(sec); var h = Math.floor(sec / 3600); return h ? h + ' h ' + Math.floor((sec % 3600) / 60) + ' min' : Math.floor(sec / 60) + ' min ' + (sec % 60) + ' s'; }
  function dateStr(t) { var d = new Date(t); return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }); }
  function isoDate(t) { var d = new Date(t), p = function (n) { return (n < 10 ? '0' : '') + n; }; return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); }
  function rng(seed) { var a = seed >>> 0; return function () { a = (a + 0x6D2B79F5) >>> 0; var t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function shuffle(arr, r) { var a = arr.slice(), i, j, t; r = r || Math.random; for (i = a.length - 1; i > 0; i--) { j = Math.floor(r() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function plural(n, w, ws) { return n + ' ' + (n === 1 ? w : (ws || w + 's')); }
  var LET = 'ABCDEF';

  /* ------------------------------------------------------------ storage */
  var mem = null;
  function blank() { return { seen: {}, history: [], session: null, last: null, prefs: {} }; }
  function load() {
    try { var s = window.localStorage.getItem(LS_KEY); if (s) { var o = JSON.parse(s); o.seen = o.seen || {}; o.history = o.history || []; o.prefs = o.prefs || {}; return o; } } catch (e) { /* private mode */ }
    return mem || blank();
  }
  var S = load();
  function save() { try { window.localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) { mem = S; } }

  /* ------------------------------------------------------------ bank indexes */
  PXD.byId = {};
  PXD.bank.forEach(function (q) { PXD.byId[q.id] = q; });
  var genById = {};
  PXD.gens.forEach(function (g) { genById[g.id] = g; });
  var topicItems = {}, topicGens = {};
  PXD.topics.forEach(function (t) { topicItems[t.id] = []; topicGens[t.id] = []; });
  PXD.bank.forEach(function (q) { if (topicItems[q.topic]) topicItems[q.topic].push(q); });
  PXD.gens.forEach(function (g) { if (topicGens[g.topic]) topicGens[g.topic].push(g); });
  var areaTopics = {};
  PXD.areas.forEach(function (a) { areaTopics[a.id] = PXD.topics.filter(function (t) { return t.area === a.id; }); });

  var qcache = {};
  function getQ(item) {
    if (item.id.indexOf('g:') === 0) {
      var key = item.id + '#' + item.seed;
      if (!qcache[key]) {
        var g = genById[item.id.slice(2)];
        var q = g.make(rng(item.seed));
        q.id = item.id; q.topic = g.topic; q.gen = true; q.diff = q.diff || 2;
        qcache[key] = q;
      }
      return qcache[key];
    }
    return PXD.byId[item.id];
  }

  /* ------------------------------------------------------------ answers */
  function parseNum(s) {
    s = String(s == null ? '' : s).trim().replace(/[\u2212\u2013\u2014]/g, '-').replace(/[\u00b0%$]/g, '').replace(/(\d),(?=\d{3}(\D|$))/g, '$1').trim();
    var m;
    if ((m = s.match(/^(-?\d+)\s+(\d+)\s*\/\s*(\d+)$/))) { var w = +m[1], f = +m[2] / +m[3]; return w < 0 || /^-/.test(m[1]) ? w - f : w + f; }
    if ((m = s.match(/^(-?\d*\.?\d+)\s*\/\s*(-?\d*\.?\d+)$/))) return +m[2] === 0 ? NaN : (+m[1]) / (+m[2]);
    if (/^-?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(s)) return Number(s);
    return NaN;
  }
  function hasAnswer(it) { var r = it.resp; return r != null && r !== '' && !(Array.isArray(r) && !r.length); }
  function isCorrect(q, it) {
    if (!hasAnswer(it)) return false;
    if (q.type === 'mc') return it.resp === q.answer;
    if (q.type === 'multi') { var a = it.resp.slice().sort(), b = q.answer.slice().sort(); return a.length === b.length && a.every(function (v, i) { return v === b[i]; }); }
    var v = parseNum(it.resp); return isFinite(v) && Math.abs(v - q.answer) <= (q.tol || 0) + 1e-9;
  }
  function dl(it, oi) { return LET[it.perm ? it.perm.indexOf(oi) : oi]; }   // letter shown on screen for original choice oi
  function byDisplay(it, arr) { return arr.slice().sort(function (a, b) { return it.perm.indexOf(a) - it.perm.indexOf(b); }); }
  function correctText(q, it) {
    if (q.type === 'mc') return dl(it, q.answer) + '. ' + q.choices[q.answer];
    if (q.type === 'multi') return byDisplay(it, q.answer).map(function (i) { return dl(it, i) + '. ' + q.choices[i]; }).join('<br>');
    return esc(String(q.answer)) + (q.unit ? ' ' + esc(q.unit) : '');
  }
  function yourText(q, it) {
    if (!hasAnswer(it)) return '<i>no answer</i>';
    if (q.type === 'mc') return dl(it, it.resp) + '. ' + q.choices[it.resp];
    if (q.type === 'multi') return byDisplay(it, it.resp).map(function (i) { return dl(it, i) + '. ' + q.choices[i]; }).join('<br>');
    return esc(it.resp) + (q.unit ? ' ' + esc(q.unit) : '');
  }

  /* ------------------------------------------------------------ building a session */
  function allocate(N) {
    var raw = PXD.areas.map(function (a) { return N * a.blueprint / TEST_Q; });
    var base = raw.map(Math.floor), left = N - base.reduce(function (x, y) { return x + y; }, 0);
    raw.map(function (v, i) { return { i: i, f: v - Math.floor(v), r: Math.random() }; })
      .sort(function (a, b) { return b.f - a.f || b.r - a.r; })
      .slice(0, left).forEach(function (o) { base[o.i]++; });
    var out = {}; PXD.areas.forEach(function (a, i) { out[a.id] = base[i]; });
    return out;
  }
  function seenCount(key) { return S.seen[key] || 0; }
  function topicSeen(tid) { return topicItems[tid].reduce(function (s, q) { return s + seenCount(q.id); }, 0) + topicGens[tid].reduce(function (s, g) { return s + seenCount('g:' + g.id); }, 0); }
  function candidates(tid, used) {
    var c = topicItems[tid].filter(function (q) { return !used[q.id]; }).map(function (q) { return { q: q, id: q.id, seen: seenCount(q.id), teach: !!q.task }; });
    topicGens[tid].forEach(function (g) { if (!used['g:' + g.id]) c.push({ gen: g, id: 'g:' + g.id, seen: seenCount('g:' + g.id), teach: false }); });
    return c;
  }
  function pickFromTopic(tid, used, teachNow, wantTeach) {
    var c = candidates(tid, used);
    if (!c.length) return null;
    c = shuffle(c);
    c.sort(function (a, b) { return a.seen - b.seen; });
    var minSeen = c[0].seen, tier = c.filter(function (x) { return x.seen === minSeen; });
    var pref = tier.filter(function (x) { return x.teach === wantTeach; });
    var pick = (pref.length ? pref : tier)[0];
    used[pick.id] = 1;
    return pick;
  }
  function makeItem(cand) {
    var it = { id: cand.id, resp: null, guess: false, flag: false, t: 0, checked: false };
    if (cand.gen) it.seed = Math.floor(Math.random() * 4294967295);
    var q = getQ(it);
    var n = q.choices ? q.choices.length : 0, perm = [], i;
    for (i = 0; i < n; i++) perm.push(i);
    it.perm = q.order === 'fixed' ? perm : shuffle(perm);
    return it;
  }
  function pickBalanced(tids, n, used) {
    var picked = [], teach = 0, guard = 0;
    var order = shuffle(tids).sort(function (a, b) { return topicSeen(a) - topicSeen(b); });
    while (picked.length < n && guard++ < 400) {
      var progress = false;
      for (var k = 0; k < order.length && picked.length < n; k++) {
        var want = picked.length ? (teach / picked.length) < TEACH_TARGET : false;
        var c = pickFromTopic(order[k], used, teach, want);
        if (c) { picked.push(c); if (c.teach) teach++; progress = true; }
      }
      if (!progress) break;
      order = shuffle(order);
    }
    return picked;
  }
  function buildDiagnostic(kind) {
    var N = MODES[kind].n, alloc = allocate(N), used = {}, cands = [];
    PXD.areas.forEach(function (a) {
      var tids = areaTopics[a.id].map(function (t) { return t.id; });
      cands = cands.concat(pickBalanced(tids, alloc[a.id], used));
    });
    return finishBuild('diag', kind, shuffle(cands));
  }
  function buildPractice(tids, N) {
    var used = {}, cands = pickBalanced(tids, N, used);
    return finishBuild('practice', 'practice', cands);
  }
  function finishBuild(mode, kind, cands) {
    var items = cands.map(makeItem);
    items.forEach(function (it) { S.seen[it.id] = seenCount(it.id) + 1; });
    return { v: 1, mode: mode, kind: kind, N: items.length, items: items, cur: 0, elapsed: 0, started: Date.now(), name: (S.prefs.name || ''), self: null, finished: false, topics: mode === 'practice' ? cands.map(function (c) { return c.id; }) : null };
  }

  /* ------------------------------------------------------------ analysis */
  function analyze(sess) {
    var rows = sess.items.map(function (it, i) {
      var q = getQ(it), ans = hasAnswer(it), ok = isCorrect(q, it);
      return { i: i, it: it, q: q, ans: ans, ok: ok, guess: ans && it.guess, lucky: ok && it.guess, solid: ok && !it.guess, missed: !ok, t: it.t || 0 };
    });
    var res = { rows: rows, N: rows.length, correct: 0, solid: 0, lucky: 0, missed: 0, blank: 0, areas: {}, topics: {}, task: { n: 0, correct: 0, groups: {} } };
    PXD.areas.forEach(function (a) { res.areas[a.id] = { n: 0, correct: 0, solid: 0, lucky: 0, missed: 0 }; });
    rows.forEach(function (r) {
      if (r.ok) res.correct++; if (r.solid) res.solid++; if (r.lucky) res.lucky++; if (r.missed) res.missed++; if (!r.ans) res.blank++;
      var t = PXD.topicById[r.q.topic], a = res.areas[t.area];
      var tp = res.topics[t.id] = res.topics[t.id] || { n: 0, correct: 0, solid: 0, lucky: 0, missed: 0, rows: [] };
      [a, tp].forEach(function (x) { x.n++; if (r.ok) x.correct++; if (r.solid) x.solid++; if (r.lucky) x.lucky++; if (r.missed) x.missed++; });
      tp.rows.push(r);
      if (r.q.task) {
        res.task.n++; if (r.ok) res.task.correct++;
        var g = PXD.taskGroups.filter(function (gg) { return gg.tasks.indexOf(r.q.task[0]) >= 0; })[0];
        if (g) { var gs = res.task.groups[g.id] = res.task.groups[g.id] || { n: 0, correct: 0 }; gs.n++; if (r.ok) gs.correct++; }
      }
    });
    PXD.areas.forEach(function (a) { var x = res.areas[a.id]; x.adj = x.n ? (x.solid + 0.5 * x.lucky) / x.n : null; x.pct = x.n ? x.correct / x.n : null; });
    res.adj = res.N ? (res.solid + 0.5 * res.lucky) / res.N : 0;
    // priorities: expected points at stake. With only 1-3 questions per topic, each topic's miss rate is
    // shrunk toward its own area's miss rate (a topic missed 2 of 2 in an area at 10% is a stronger signal
    // than a topic missed 1 of 1 in an area at 70%), then weighted by how much of the test the topic covers.
    var K = 1.5;
    res.prio = Object.keys(res.topics).map(function (tid) {
      var tp = res.topics[tid], t = PXD.topicById[tid], a = PXD.areaById[t.area], ar = res.areas[a.id];
      var areaGap = ar.n ? 1 - ar.adj : 0.4;
      var gap = (tp.missed + 0.5 * tp.lucky + K * areaGap) / (tp.n + K);
      var weight = a.blueprint / areaTopics[a.id].length;
      return { tid: tid, t: t, tp: tp, score: gap * weight, hasIssue: tp.missed + tp.lucky > 0 };
    }).filter(function (p) { return p.hasIssue; }).sort(function (x, y) { return y.score - x.score; });
    res.time = sess.elapsed || rows.reduce(function (s, r) { return s + r.t; }, 0);
    return res;
  }
  function band(adj) { return adj == null ? 'none' : adj >= 0.8 ? 'strong' : adj >= 0.6 ? 'dev' : 'pri'; }
  var BAND_NAME = { strong: 'Strong', dev: 'Developing', pri: 'Priority', none: 'Not assessed' };
  var BAND_CLASS = { strong: 'band-strong', dev: 'band-dev', pri: 'band-pri', none: 'band-none' };

  /* ------------------------------------------------------------ MathJax */
  function typeset(el, tries) {
    tries = tries || 0;
    var M = window.MathJax;
    if (M && M.typesetPromise) {
      var go = function () { try { M.typesetPromise([el]).catch(function () { }); } catch (e) { /* ignore */ } };
      if (M.startup && M.startup.promise) M.startup.promise.then(go); else go();
    } else if (tries < 60) setTimeout(function () { typeset(el, tries + 1); }, 250);
  }

  /* ------------------------------------------------------------ views */
  var resCache = null, view = 'landing', timerId = null, saveTick = 0, pendingScroll = true, revFilter = 'all', toast = '';
  function setRoot(html, focusSel) {
    root.innerHTML = html;
    typeset(root);
    if (pendingScroll) {
      var top = root.getBoundingClientRect().top + window.pageYOffset - 70;
      if (window.pageYOffset > top) window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
      pendingScroll = false;
    }
    var f = focusSel && $(focusSel); if (f) { f.setAttribute('tabindex', '-1'); try { f.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
  }
  function go(v) { view = v; pendingScroll = true; render(); }
  function render() {
    stopTimer();
    if (view === 'quiz' && S.session) renderQuiz();
    else if (view === 'results' && (S.last || (S.session && S.session.finished))) renderResults();
    else { view = 'landing'; renderLanding(); }
  }

  /* ---------- landing ---------- */
  function bankStats() {
    var seen = PXD.bank.filter(function (q) { return seenCount(q.id) > 0; }).length;
    return { total: PXD.bank.length, gens: PXD.gens.length, seen: seen };
  }
  function renderLanding() {
    var st = bankStats(), sess = S.session, h = '';
    h += '<div class="eyebrow"><a href="../resources/" style="color:inherit">A Milligan Mathematics resource</a> &middot; open to anyone</div>';
    h += '<h1 id="pxd-h1">Praxis Mathematics (5165) Diagnostic</h1>';
    h += '<p class="lede">Find out which parts of the Praxis Mathematics test you\'re ready for and which need work, then get a study plan ranked by how many test points are at stake.</p>';

    if (sess && !sess.finished) {
      var done = sess.items.filter(hasAnswer).length;
      h += '<div class="card warm"><h3>You have a session in progress</h3><p>' + esc(sess.mode === 'practice' ? 'Topic practice' : MODES[sess.kind].label) + ' &middot; ' + done + ' of ' + sess.N + ' answered &middot; ' + mmss(sess.elapsed) + ' elapsed.</p>' +
        '<div class="toolrow"><button class="btn" data-act="resume">Resume</button><button class="btn ghost" data-act="discard">Discard it</button></div></div>';
    }
    if (S.last) {
      h += '<div class="card"><div class="toolrow" style="margin:0"><div style="flex:1"><b>Last finished:</b> ' + esc(S.last.mode === 'practice' ? 'Topic practice' : MODES[S.last.kind].label) + ', ' + dateStr(S.last.finishedAt || S.last.started) + '</div><button class="btn alt sm" data-act="viewlast">View results &amp; report</button></div></div>';
    }

    h += '<div class="facts"><div class="fact"><b>66</b><span>questions on the real test</span></div><div class="fact"><b>180 min</b><span>testing time (about 2&frac34; min each)</span></div><div class="fact"><b>~25%</b><span>set inside a task of teaching</span></div><div class="fact"><b>Graphing calc</b><span>built into the test screen</span></div></div>';

    h += '<h2>What the test covers</h2><p>The test is built from the four ETS content categories below. This diagnostic samples the same way, so your results are weighted like the real thing.</p><div class="bp">';
    PXD.areas.forEach(function (a) {
      h += '<div class="bp-row"><span>' + esc(a.outline) + ' ' + esc(a.title) + '</span><span class="bp-track"><span class="bp-fill" style="display:block;width:' + a.pct * 3.2 + '%"></span></span><span class="mute">' + a.pct + '%</span></div>';
    });
    h += '</div>';

    h += '<h2>Choose a diagnostic</h2><div class="modes">';
    ['quick', 'half', 'full'].forEach(function (k) {
      var m = MODES[k];
      h += '<div class="mode' + (k === 'half' ? ' rec' : '') + '">' + (k === 'half' ? '<span class="tag">Recommended</span>' : '<span class="tag">&nbsp;</span>') + '<div class="big">' + m.n + '</div><h3 style="margin:0">' + m.label + '</h3><p>' + m.blurb + ' About ' + Math.round(m.n * SEC_PER_Q / 60 / 5) * 5 + ' minutes at test pace.</p><button class="btn" data-act="start" data-kind="' + k + '">Start ' + m.n + ' questions</button></div>';
    });
    h += '</div>';
    h += '<p class="mute small">Each attempt draws a fresh mix from a bank of ' + st.total + ' original questions' + (st.gens ? ' plus generated variants whose numbers change every time' : '') + ', weighted like the real test. You have seen ' + st.seen + ' so far; new attempts favour questions you haven\'t seen.</p>';

    h += '<details class="more"><summary>Optional: rate your confidence first (adds a self-check to your results)</summary><div class="body"><p class="small mute">How well do you think you know each area right now? 1 = barely, 5 = very well. Your results will show where your gut feeling and your performance disagree.</p><div class="rate-grid">';
    PXD.areas.forEach(function (a) {
      h += '<label class="rate-row"><span>' + esc(a.title) + '</span><select data-self="' + a.id + '"><option value="">&mdash;</option>' + [1, 2, 3, 4, 5].map(function (n) { return '<option value="' + n + '">' + n + '</option>'; }).join('') + '</select></label>';
    });
    h += '</div></div></details>';

    h += '<label class="field" style="max-width:26rem">Your name <span class="hint">(optional; it appears on the report you can share)</span><input type="text" id="pxd-name" autocomplete="name" value="' + esc(S.prefs.name || '') + '"></label>';

    h += '<details class="more"><summary>Or practice specific topics with instant feedback</summary><div class="body"><p class="small mute">Untimed, one question at a time, with the worked solution right after each answer. Choose the topics you want.</p><div class="topic-pick">';
    PXD.areas.forEach(function (a) {
      h += '<div class="grp"><div class="gtitle"><span>' + esc(a.title) + '</span><span><button class="linklike" data-act="pickall" data-area="' + a.id + '">all</button> &middot; <button class="linklike" data-act="picknone" data-area="' + a.id + '">none</button></span></div>';
      areaTopics[a.id].forEach(function (t) {
        h += '<label><input type="checkbox" data-tp="' + t.id + '" data-tparea="' + a.id + '"><span>' + esc(t.title) + ' <span class="mute">(' + (topicItems[t.id].length + topicGens[t.id].length) + ')</span></span></label>';
      });
      h += '</div>';
    });
    h += '</div><div class="toolrow"><label class="small">Questions: <select id="pxd-pn"><option>5</option><option selected>10</option><option>15</option><option>20</option><option>30</option></select></label><button class="btn" data-act="startpractice">Start practice</button><span class="mute small" id="pxd-pmsg"></span></div></div></details>';

    var diagHist = S.history.filter(function (x) { return x.mode === 'diag'; }).slice(-8).reverse();
    if (diagHist.length) {
      h += '<h2>Your earlier attempts</h2><div class="card" style="overflow-x:auto"><table class="hist"><thead><tr><th>Date</th><th>Length</th><th>Score</th>' + PXD.areas.map(function (a) { return '<th title="' + esc(a.title) + '">' + esc(a.id) + '</th>'; }).join('') + '</tr></thead><tbody>';
      diagHist.forEach(function (x) {
        h += '<tr><td>' + dateStr(x.t) + '</td><td>' + x.N + ' Q</td><td><b>' + pct(x.correct, x.N) + '%</b></td>' + PXD.areas.map(function (a) { var v = x.areas[a.id]; return '<td>' + (v && v[1] ? pct(v[0], v[1]) + '%' : '&ndash;') + '</td>'; }).join('') + '</tr>';
      });
      h += '</tbody></table><p class="small mute" style="margin:.5rem 0 0">Area columns: ' + PXD.areas.map(function (a) { return esc(a.id) + ' = ' + esc(a.short); }).join(', ') + '. Small samples bounce around: watch trends, not single numbers.</p></div>';
    }

    h += '<h2>How this works</h2><div class="card"><ol style="margin:0 0 0 1.2rem;padding:0"><li>Answer the questions the way you would on test day. Use scratch paper and the graphing calculator (<a href="https://www.desmos.com/calculator" target="_blank" rel="noopener">Desmos</a> works well for practice). There is no feedback until the end of a diagnostic.</li><li>If you are only guessing, tick <b>I\'m guessing</b>. A correct guess counts as half credit toward your area ratings, because a lucky guess isn\'t knowledge.</li><li>At the end you get a rating for each content area, a ranked list of topics to study first, and a full walk-through of every question.</li><li>You can copy or download a report to send to your instructor.</li></ol></div>';
    h += '<div class="card note"><h3>Please read</h3><ul style="margin:0 0 0 1.2rem;padding:0"><li><b>This is a map, not a forecast.</b> It can\'t predict your Praxis score. Passing scores are set by each state or licensing agency; check the requirement for yours at <a href="https://www.ets.org/praxis/states.html" target="_blank" rel="noopener">ets.org/praxis</a>.</li><li><b>Your data stays with you.</b> Nothing is uploaded. Your progress and history are stored only in this browser. Clear your browser data and they are gone. The report is something you choose to copy.</li><li><b>About the questions.</b> They are original, written to the public ETS content outline for Test 5165, and are not ETS items. They were drafted with AI assistance and each answer key was checked independently by computer and by a separate solving pass. If you find a mistake or an unclear question, tell your instructor. Praxis is a registered trademark of Educational Testing Service, which is not affiliated with this page.</li></ul></div>';

    setRoot('<div class="pxd">' + h + '</div>', '#pxd-h1');
    // re-wrap: setRoot writes the wrapper too; keep single .pxd root
  }

  /* ---------- quiz ---------- */
  function displayOrder(it) { return it.perm; }
  function renderQuiz() {
    var s = S.session, it = s.items[s.cur], q = getQ(it), practice = s.mode === 'practice', h = '';
    var answered = s.items.filter(hasAnswer).length;
    var locked = practice && it.checked;
    h += '<div class="qbar noprint"><span class="prog">Question ' + (s.cur + 1) + ' of ' + s.N + '</span><span class="meter" aria-hidden="true"><i style="width:' + pct(answered, s.N) + '%"></i></span><span class="mute small">' + answered + ' answered</span>' +
      '<span class="timer" id="pxd-timer" aria-label="Elapsed time">' + (S.prefs.hideTimer ? '' : mmss(s.elapsed)) + '</span>' +
      '<span class="tools"><button class="btn ghost sm" data-act="timer">' + (S.prefs.hideTimer ? 'Show timer' : 'Hide timer') + '</button><button class="btn ghost sm" data-act="ref">Reference sheet</button><a class="btn ghost sm" href="https://www.desmos.com/calculator" target="_blank" rel="noopener">Calculator &#8599;</a><button class="btn ghost sm" data-act="exit">Save &amp; exit</button></span></div>';

    h += '<div class="qcard"><div class="qmeta"><span class="chip">' + esc(practice ? PXD.topicById[q.topic].title : 'Question ' + (s.cur + 1)) + '</span>';
    if (q.calc) h += '<span class="chip calc">Calculator helpful</span>';
    if (locked && q.task) h += '<span class="chip task">Task of teaching</span>';
    if (it.flag) h += '<span class="chip" style="color:#b3261e">&#9873; flagged</span>';
    h += '</div><div class="stem" id="pxd-stem">' + q.stem + '</div>' + PXD.renderFigure(q.figure);
    if (q.type === 'multi') h += '<div class="directions">Select all answer choices that apply.</div>';
    if (q.type === 'num') h += '<div class="directions">Enter your answer in the box: a number (fractions such as 3/4 are fine).</div>';

    if (q.type === 'mc' || q.type === 'multi') {
      var ord = displayOrder(it), kind = q.type === 'mc' ? 'radio' : 'checkbox';
      h += '<div class="choices ' + q.type + '" role="' + (q.type === 'mc' ? 'radiogroup' : 'group') + '" aria-label="Answer choices">';
      ord.forEach(function (oi, di) {
        var on = q.type === 'mc' ? it.resp === oi : (it.resp || []).indexOf(oi) >= 0, cls = 'choice';
        if (locked) {
          var right = q.type === 'mc' ? q.answer === oi : q.answer.indexOf(oi) >= 0;
          cls += ' locked' + (right ? ' right' : (on ? ' wrong' : ''));
        }
        h += '<label class="' + cls + '"><input type="' + kind + '" name="ans" value="' + oi + '"' + (on ? ' checked' : '') + (locked ? ' disabled' : '') + '><span class="ltr">' + LET[di] + '</span><span class="txt">' + q.choices[oi] + '</span></label>';
      });
      h += '</div>';
    } else {
      h += '<div class="numans"><label class="sr" for="pxd-num">Your answer</label><input type="text" id="pxd-num" inputmode="decimal" autocomplete="off" spellcheck="false" value="' + esc(it.resp || '') + '"' + (locked ? ' disabled' : '') + '>' + (q.unit ? '<span>' + esc(q.unit) + '</span>' : '') + '</div>';
    }

    if (!locked) {
      h += '<div class="qopts"><label><input type="checkbox" data-act="guess"' + (it.guess ? ' checked' : '') + '> I\'m guessing on this one</label><label><input type="checkbox" data-act="flag"' + (it.flag ? ' checked' : '') + '> Flag to come back to</label></div>';
    }
    if (locked) {
      var ok = isCorrect(q, it);
      h += '<div class="fb ' + (ok ? 'ok' : 'no') + '" role="status"><div class="verdict">' + (ok ? 'Correct.' : (hasAnswer(it) ? 'Not quite.' : 'No answer given.')) + (ok ? '' : ' The answer is:') + '</div>' + (ok ? '' : '<div style="margin-bottom:.5rem">' + correctText(q, it) + '</div>') + '<div class="solution">' + q.explain + '</div></div>';
    }
    h += '<div class="qnav"><button class="btn alt" data-act="prev"' + (s.cur === 0 ? ' disabled' : '') + '>&larr; Previous</button><div class="right">';
    if (practice && !locked) h += '<button class="btn" data-act="check">Check answer</button>';
    if (practice && locked && s.cur === s.N - 1) h += '<button class="btn" data-act="finish">See my results</button>';
    else if (!practice && s.cur === s.N - 1) h += '<button class="btn" data-act="finish">Review &amp; finish</button>';
    else h += '<button class="btn' + (practice && !locked ? ' alt' : '') + '" data-act="next">' + (practice && !locked ? 'Skip' : 'Next') + ' &rarr;</button>';
    h += '</div></div></div>';

    if (!practice) {
      h += '<div class="card noprint" style="margin-top:1rem"><h3 style="font-size:1rem">Question map</h3><div class="map">';
      s.items.forEach(function (x, i) { h += '<button class="mapbtn' + (hasAnswer(x) ? ' ans' : '') + (x.flag ? ' flag' : '') + (i === s.cur ? ' cur' : '') + '" data-act="jump" data-i="' + i + '" aria-label="Question ' + (i + 1) + (hasAnswer(x) ? ', answered' : ', unanswered') + (x.flag ? ', flagged' : '') + '">' + (i + 1) + '</button>'; });
      h += '</div><div class="legend"><span><i style="background:#ffe8d8;border-color:#f3b28c"></i>answered</span><span><i></i>not yet</span><span>&#9873; flagged</span></div><div class="toolrow" style="margin-bottom:0"><button class="btn alt sm" data-act="finish">Finish now</button></div></div>';
    } else {
      h += '<div class="toolrow noprint" style="margin-top:.8rem"><button class="btn ghost sm" data-act="finish">End practice &amp; see results</button></div>';
    }
    h += '<p class="mute small noprint" style="margin-top:.8rem">Keyboard: A&ndash;F pick a choice &middot; &larr; &rarr; move between questions' + (practice ? ' &middot; Enter checks your answer' : '') + '.</p>';
    h += dialogs();
    setRoot('<div class="pxd">' + h + '</div>', '#pxd-stem');
    startTimer();
  }

  function startTimer() {
    stopTimer();
    timerId = setInterval(function () {
      var s = S.session; if (!s || view !== 'quiz' || document.hidden) return;
      s.elapsed++; s.items[s.cur].t++;
      var el = $('#pxd-timer'); if (el && !S.prefs.hideTimer) el.textContent = mmss(s.elapsed);
      if (++saveTick % 10 === 0) save();
    }, 1000);
  }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

  /* ---------- reference sheet & dialogs ---------- */
  function dialogs() {
    return '<dialog id="pxd-ref" aria-labelledby="pxd-ref-h"><div class="dhead"><h3 id="pxd-ref-h" style="margin:0">Reference sheet</h3><button class="btn ghost sm" data-act="closeref">Close</button></div><div class="dbody">' +
      '<p class="small mute">The real test provides a sheet of notation and formulas on its Help screen. This is the same kind of information, rewritten here. Everything not on the sheet you are expected to know, so check the current Study Companion at <a href="https://www.ets.org/praxis/mathematics" target="_blank" rel="noopener">ets.org/praxis</a>.</p>' +
      '<h3>Notation</h3><table class="q-table"><tbody>' +
      '<tr><td>$(a,b)$, $[a,b]$, $(a,b]$, $[a,b)$</td><td style="text-align:left">open, closed, and half-open intervals</td></tr>' +
      '<tr><td>$\\gcd(m,n)$, $\\operatorname{lcm}(m,n)$</td><td style="text-align:left">greatest common divisor, least common multiple</td></tr>' +
      '<tr><td>$\\lfloor x \\rfloor$</td><td style="text-align:left">greatest integer $m$ such that $m \\le x$</td></tr>' +
      '<tr><td>$m \\equiv k \\pmod n$</td><td style="text-align:left">$m - k$ is a multiple of $n$ (same remainder on division by $n$)</td></tr>' +
      '<tr><td>$f^{-1}$</td><td style="text-align:left">inverse of the invertible function $f$ (not the reciprocal $1/f$)</td></tr>' +
      '<tr><td>$\\lim_{x\\to a^+} f(x)$, $\\lim_{x\\to a^-} f(x)$</td><td style="text-align:left">right-hand and left-hand limits</td></tr>' +
      '<tr><td>$\\varnothing$, $x \\in S$</td><td style="text-align:left">empty set; $x$ is an element of $S$</td></tr>' +
      '<tr><td>$S \\subset T$, $S \\subseteq T$</td><td style="text-align:left">proper subset; subset or equal</td></tr>' +
      '<tr><td>$S^c$, $T \\setminus S$, $S \\cup T$, $S \\cap T$</td><td style="text-align:left">complement; relative complement; union; intersection</td></tr></tbody></table>' +
      '<h3>Trigonometry</h3><p>Ranges of inverse trigonometric functions: $\\sin^{-1}x \\in [-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}]$, $\\cos^{-1}x \\in [0,\\pi]$, $\\tan^{-1}x \\in (-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2})$.</p>' +
      '<p>Law of Sines: $\\dfrac{\\sin A}{a}=\\dfrac{\\sin B}{b}=\\dfrac{\\sin C}{c}$. &nbsp; Law of Cosines: $c^2=a^2+b^2-2ab\\cos C$.</p>' +
      '<h3>Volume and surface area</h3><p>Sphere (radius $r$): $V=\\tfrac43\\pi r^3$, $A=4\\pi r^2$.<br>Right circular cone (radius $r$, height $h$, slant height $s$): $V=\\tfrac13\\pi r^2h$, $A=\\pi rs+\\pi r^2$.<br>Right circular cylinder: $V=\\pi r^2h$.<br>Pyramid (base area $B$, height $h$): $V=\\tfrac13Bh$. &nbsp; Right prism: $V=Bh$.</p>' +
      '<h3>Differentiation</h3><p>Product: $(fg)\'=f\'g+fg\'$. &nbsp; Chain: $(f(g(x)))\'=f\'(g(x))\\,g\'(x)$. &nbsp; Quotient: $\\left(\\dfrac{f}{g}\\right)\'=\\dfrac{f\'g-fg\'}{g^2}$ for $g\\ne0$.</p></div></dialog>' +
      '<dialog id="pxd-conf" aria-labelledby="pxd-conf-h"><div class="dbody" id="pxd-conf-body"></div></dialog>';
  }
  function openDlg(id) { var d = $(id); if (!d) return; if (d.showModal) { try { d.showModal(); } catch (e) { d.setAttribute('open', ''); } } else d.setAttribute('open', ''); typeset(d); }
  function closeDlg(id) { var d = $(id); if (d && d.close) d.close(); else if (d) d.removeAttribute('open'); }

  /* ---------- results ---------- */
  function sessionForResults() { return S.last || S.session; }
  function areaRow(a, x, sess) {
    var b = band(x.adj), self = sess.self && sess.self[a.id];
    var note = '';
    if (self && x.n) {
      if (self >= 4 && b === 'pri') note = ' &middot; you rated yourself ' + self + '/5: this area may be weaker than it feels';
      else if (self <= 2 && b === 'strong') note = ' &middot; you rated yourself ' + self + '/5: you know more than you think';
      else note = ' &middot; you rated yourself ' + self + '/5';
    }
    return '<div class="arow"><div class="nm">' + esc(a.title) + '<small>' + a.pct + '% of the test' + (x.n ? '' : '') + '</small></div><div><div class="abar ' + BAND_CLASS[b] + '" role="img" aria-label="' + esc(a.title) + ': ' + (x.n ? Math.round(x.adj * 100) + ' percent' : 'not assessed') + '"><i style="width:' + (x.n ? Math.max(3, Math.round(x.adj * 100)) : 0) + '%"></i><span>' + (x.n ? x.correct + ' of ' + x.n + ' · ' + Math.round(x.adj * 100) + '%' + (x.lucky ? ' (' + x.lucky + ' guessed)' : '') : 'not asked') + '</span></div>' +
      '<div class="small" style="margin-top:.25rem"><span class="badge ' + b + '">' + BAND_NAME[b] + '</span>' + (x.n && x.n < 4 ? ' <span class="mute">only ' + plural(x.n, 'question') + ' asked, so treat this loosely</span>' : '') + '<span class="mute">' + note + '</span></div></div></div>';
  }
  function renderResults() {
    var sess = sessionForResults(), res = resCache = analyze(sess), h = '', practice = sess.mode === 'practice';
    var label = practice ? 'Topic practice' : MODES[sess.kind].label;
    h += '<div class="eyebrow">' + esc(label) + ' &middot; ' + dateStr(sess.finishedAt || Date.now()) + '</div><h1 id="pxd-h1">Your results' + (sess.name ? ', ' + esc(sess.name.split(' ')[0]) : '') + '</h1>';
    var avg = res.N ? res.time / res.N : 0;
    h += '<div class="scorecards"><div class="sc main"><b>' + res.correct + ' / ' + res.N + '</b><span>' + pct(res.correct, res.N) + '% correct</span></div>' +
      '<div class="sc"><b>' + res.solid + '</b><span>solid: right, and not a guess</span></div>' +
      '<div class="sc"><b>' + res.lucky + '</b><span>right but marked as a guess</span></div>' +
      '<div class="sc"><b>' + res.missed + '</b><span>missed' + (res.blank ? ' (' + res.blank + ' left blank)' : '') + '</span></div>' +
      '<div class="sc"><b>' + mmss(res.time) + '</b><span>total time &middot; ' + mmss(avg) + ' per question (test pace ' + mmss(SEC_PER_Q) + ')</span></div></div>';

    if (!practice) {
      h += '<h2>Where you stand, by content area</h2><p class="small mute">Bars show your score with guessed-but-correct answers counted at half. Strong is 80% or more, Developing 60&ndash;79%, Priority below 60%. Areas are listed in test order; the real test weights them as shown.</p><div class="areas">';
      PXD.areas.forEach(function (a) { h += areaRow(a, res.areas[a.id], sess); });
      h += '</div>';
    }

    h += '<h2>' + (practice ? 'What to review from this practice' : 'What to study first') + '</h2>';
    if (!res.prio.length) {
      h += '<div class="card"><p style="margin:0"><b>Nothing stood out as a weak spot in these questions.</b> ' + (practice ? 'Try a different set of topics, or take a full diagnostic to check the whole blueprint.' : 'That is a good result. To keep it honest, take another attempt: each one draws new questions, and topics you weren\'t asked about this time may show something different.') + '</p></div>';
    } else {
      h += '<p class="small mute">Ranked by how many test points are likely at stake: how much you missed (or only guessed) weighted by how much of the test that topic covers. With few questions per topic, this is a pointer to check, not a verdict.</p><ol class="prio">';
      res.prio.slice(0, 5).forEach(function (p) {
        var t = p.t, tp = p.tp, a = PXD.areaById[t.area];
        var why = 'Missed ' + tp.missed + ' of ' + tp.n + (tp.lucky ? '; also ' + tp.lucky + ' correct answer' + (tp.lucky > 1 ? 's' : '') + ' you marked as guesses' : '') + '.';
        h += '<li><h3>' + esc(t.title) + ' <span class="badge ' + (tp.missed / tp.n >= 0.5 ? 'pri' : 'dev') + '" style="font-size:.72rem">' + esc(a.short) + '</span></h3><div class="why">' + why + '</div><div class="tip"><b>Do this:</b> ' + esc(t.tip) + '</div><div style="font-size:.85rem" class="mute"><b>What this topic includes:</b></div><ul>' + t.skills.map(function (k) { return '<li>' + esc(k) + '</li>'; }).join('') + '</ul><button class="btn alt sm noprint" data-act="practice1" data-tid="' + t.id + '">Practice this topic (10 questions)</button></li>';
      });
      h += '</ol>';
      var top3 = res.prio.slice(0, 3).map(function (p) { return p.tid; });
      h += '<div class="toolrow noprint"><button class="btn" data-act="practicetop" data-tids="' + top3.join(',') + '">Practice my top ' + top3.length + ' topics (15 questions)</button></div>';
      if (res.prio.length > 5) h += '<p class="small mute">Also worth a look: ' + res.prio.slice(5, 10).map(function (p) { return esc(p.t.title) + ' (missed ' + p.tp.missed + ' of ' + p.tp.n + ')'; }).join('; ') + '.</p>';
    }

    // tasks of teaching
    if (res.task.n) {
      var tp = res.task, rate = tp.correct / tp.n, others = res.N - tp.n, orate = others ? (res.correct - tp.correct) / others : null;
      h += '<h2>Tasks of teaching</h2><div class="card"><p>About a quarter of the real test wraps content in a teaching task: judging student work, explanations, examples, and representations. You answered <b>' + tp.correct + ' of ' + tp.n + '</b> of those correctly (' + Math.round(rate * 100) + '%)' + (orate != null && others >= 4 ? ', compared with ' + Math.round(orate * 100) + '% on the rest' : '') + '.</p>';
      var gl = PXD.taskGroups.filter(function (g) { return tp.groups[g.id]; });
      if (gl.length > 1) h += '<ul style="margin:0 0 .6rem 1.2rem">' + gl.map(function (g) { var x = tp.groups[g.id]; return '<li>' + esc(g.title) + ': ' + x.correct + ' of ' + x.n + '</li>'; }).join('') + '</ul>';
      if (orate != null && others >= 4 && tp.n >= 3 && rate + 0.2 < orate) h += '<p style="margin:0"><b>This is a gap worth attention:</b> you do better on straight mathematics than when it appears inside a teaching scenario. When you see student work, solve the problem yourself first, then read each step looking for the exact place the reasoning departs from yours, and ask what misconception would produce that step.</p>';
      else if (rate >= 0.75) h += '<p style="margin:0">Nice: you are comfortable reasoning about mathematics as a teacher.</p>';
      else h += '<p style="margin:0">For these items, practice explaining <i>why</i> a method works and what a student who chose a wrong answer was probably thinking. That skill is testable and improves quickly with review.</p>';
      h += '</div>';
    }

    // test-taking
    var tips = [];
    if (res.blank) tips.push('You left ' + plural(res.blank, 'question') + ' blank. On the real test there is no penalty for guessing, so answer everything, then flag and return.');
    if (!practice && avg > SEC_PER_Q * 1.25) tips.push('You averaged ' + mmss(avg) + ' per question against a test pace of ' + mmss(SEC_PER_Q) + '. Practice moving on when you\'re stuck: flag it and return.');
    else if (!practice && avg && avg < SEC_PER_Q * 0.5 && res.missed > res.N * 0.3) tips.push('You worked quickly (' + mmss(avg) + ' per question) and missed a fair number. You have time on the real test: slow down and check each answer against the question asked.');
    if (res.N && res.lucky / res.N >= 0.15) tips.push('More than one in seven of your answers were correct guesses. Those topics are less secure than your score suggests.');
    if (tips.length) h += '<h2>Test-taking notes</h2><div class="card"><ul style="margin:0 0 0 1.2rem">' + tips.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>';

    // all topics
    h += '<h2>Every topic you were asked about</h2><div class="card">';
    PXD.areas.forEach(function (a) {
      var rows = areaTopics[a.id].filter(function (t) { return res.topics[t.id]; });
      if (!rows.length) return;
      h += '<h3 style="font-size:1rem;margin-top:.7rem">' + esc(a.title) + '</h3><table class="tt"><tbody>';
      rows.forEach(function (t) {
        var x = res.topics[t.id], marks = x.rows.map(function (r) { return r.ok ? (r.lucky ? '<span class="mk-gs" title="correct, marked as a guess">~</span>' : '<span class="mk-ok" title="correct">&#10003;</span>') : '<span class="mk-no" title="missed">&#10007;</span>'; }).join(' ');
        h += '<tr><td class="mk">' + marks + '</td><td>' + esc(t.title) + '</td></tr>';
      });
      h += '</tbody></table>';
    });
    h += '<p class="small mute" style="margin:.6rem 0 0">&#10003; correct &nbsp; ~ correct but guessed &nbsp; &#10007; missed. Topics not listed weren\'t sampled this time; another attempt will cover different ones (' + (45 - Object.keys(res.topics).length) + ' of 45 topics weren\'t sampled).</p></div>';

    // report
    h += '<h2 id="pxd-report-h">Report to share with your instructor</h2><div class="card"><label class="field" style="max-width:26rem">Your name<input type="text" id="pxd-rname" value="' + esc(sess.name || '') + '"></label>' +
      '<label class="field">A note for your instructor <span class="hint">(optional)</span><textarea id="pxd-rnote" placeholder="e.g., which test date you are aiming for, what worries you">' + esc(sess.note || '') + '</textarea></label>' +
      '<div class="report" id="pxd-report" tabindex="0" aria-label="Report text">' + esc(buildReport(sess, res)) + '</div>' +
      '<div class="toolrow noprint"><button class="btn" data-act="copy">Copy report</button><button class="btn alt" data-act="download">Download as .txt</button><button class="btn ghost" data-act="print">Print</button><span class="toast" id="pxd-toast" role="status">' + esc(toast) + '</span></div><p class="small mute" style="margin:0">Nothing is sent anywhere: copy it into an email or message when you decide to share it.</p></div>';

    // review
    h += '<h2>Review every question</h2><div class="filters noprint" role="group" aria-label="Filter questions">' +
      [['all', 'All'], ['missed', 'Missed'], ['lucky', 'Guessed'], ['flag', 'Flagged'], ['blank', 'Blank']].map(function (f) {
        var n = res.rows.filter(function (r) { return revMatch(r, f[0]); }).length;
        return '<button class="btn ghost sm" data-act="filter" data-f="' + f[0] + '" aria-pressed="' + (revFilter === f[0]) + '">' + f[1] + ' (' + n + ')</button>';
      }).join('') + '</div>';
    res.rows.forEach(function (r) {
      if (!revMatch(r, revFilter)) return;
      var q = r.q, it = r.it, t = PXD.topicById[q.topic];
      h += '<details class="rev" data-i="' + r.i + '"><summary><span class="num">' + (r.i + 1) + '.</span><span class="' + (r.ok ? (r.lucky ? 'mk-gs' : 'mk-ok') : 'mk-no') + '" style="font-weight:700">' + (r.ok ? (r.lucky ? '~ guessed' : '&#10003; correct') : (r.ans ? '&#10007; missed' : '&#10007; blank')) + '</span><span class="mute small">' + esc(t.title) + '</span>' + (it.flag ? '<span class="chip" style="color:#b3261e">&#9873;</span>' : '') + (q.task ? '<span class="chip task">Task of teaching</span>' : '') + '</summary><div class="body" data-lazy="1"></div></details>';
    });
    h += '<div class="toolrow noprint" style="margin-top:1.6rem"><button class="btn" data-act="again" data-kind="' + (practice ? 'half' : sess.kind) + '">New ' + (practice ? MODES.half.n : MODES[sess.kind].n) + '-question diagnostic</button><button class="btn ghost" data-act="home">Back to start</button></div>';
    setRoot('<div class="pxd">' + h + '</div>', '#pxd-h1');
  }
  function revMatch(r, f) { return f === 'all' || (f === 'missed' && r.missed) || (f === 'lucky' && r.lucky) || (f === 'flag' && r.it.flag) || (f === 'blank' && !r.ans); }
  function fillReview(d) {
    var body = $('.body', d); if (!body || body.dataset.lazy !== '1') return;
    var r = resCache.rows[+d.dataset.i], q = r.q, h = '';
    h += '<div class="stem">' + q.stem + '</div>' + PXD.renderFigure(q.figure);
    if (q.type !== 'num') {
      h += '<div class="choices ' + q.type + '">';
      r.it.perm.forEach(function (oi, di) {
        var on = q.type === 'mc' ? r.it.resp === oi : (r.it.resp || []).indexOf(oi) >= 0, right = q.type === 'mc' ? q.answer === oi : q.answer.indexOf(oi) >= 0;
        h += '<div class="choice locked ' + (right ? 'right' : (on ? 'wrong' : '')) + '"><span class="ltr">' + LET[di] + '</span><span class="txt">' + q.choices[oi] + (on ? ' <b class="small">&nbsp;(your answer)</b>' : '') + (right ? ' <b class="small">&nbsp;(correct)</b>' : '') + '</span></div>';
      });
      h += '</div>';
    } else {
      h += '<div class="yours"><b>Your answer:</b> ' + yourText(q, r.it) + '<br><b>Correct answer:</b> ' + correctText(q, r.it) + '</div>';
    }
    h += '<div class="fb ' + (r.ok ? 'ok' : 'no') + '"><div class="verdict">Worked solution</div><div class="solution">' + q.explain + '</div></div>';
    if (!r.ok || r.lucky) h += '<div class="toolrow noprint" style="margin:.6rem 0 0"><button class="btn alt sm" data-act="practice1" data-tid="' + q.topic + '">Practice this topic</button></div>';
    body.innerHTML = h; body.dataset.lazy = '0'; typeset(body);
  }

  /* ---------- report text ---------- */
  function buildReport(sess, res) {
    var L = [], practice = sess.mode === 'practice', line = new Array(61).join('-');
    function pad(s, n) { s = String(s); while (s.length < n) s += ' '; return s; }
    L.push('PRAXIS 5165 MATHEMATICS ' + (practice ? 'TOPIC PRACTICE' : 'DIAGNOSTIC') + ' - RESULT REPORT');
    L.push(line);
    L.push('Name:     ' + (sess.name || '(not given)'));
    L.push('Date:     ' + isoDate(sess.finishedAt || Date.now()));
    L.push('Attempt:  ' + (practice ? 'Topic practice' : MODES[sess.kind].label) + ', ' + res.N + ' questions, ' + hms(res.time) + ' (' + mmss(res.N ? res.time / res.N : 0) + ' per question; test pace ' + mmss(SEC_PER_Q) + ')');
    L.push('Overall:  ' + res.correct + '/' + res.N + ' correct (' + pct(res.correct, res.N) + '%); ' + res.solid + ' solid, ' + res.lucky + ' correct-but-guessed, ' + res.missed + ' missed' + (res.blank ? ' (' + res.blank + ' blank)' : ''));
    L.push('Note:     A map of strengths and weaknesses, not a predicted Praxis score.');
    if (sess.note) { L.push(''); L.push('Student note: ' + sess.note.replace(/\s+/g, ' ')); }
    if (!practice) {
      L.push(''); L.push('BY CONTENT AREA  (share of real test)  -  guessed answers count half in the rating');
      PXD.areas.forEach(function (a) {
        var x = res.areas[a.id], b = band(x.adj), self = sess.self && sess.self[a.id];
        L.push('  ' + pad(a.title, 26) + pad('(' + a.pct + '%)', 6) + pad(x.n ? x.correct + '/' + x.n : 'n/a', 6) + pad(x.n ? Math.round(x.adj * 100) + '%' : '', 6) + BAND_NAME[b] + (self ? '   [self-rated ' + self + '/5]' : ''));
      });
    }
    L.push(''); L.push(practice ? 'REVIEW FIRST' : 'STUDY PRIORITIES (biggest payoff first)');
    if (!res.prio.length) L.push('  No weak spots showed up in these questions.');
    res.prio.slice(0, 8).forEach(function (p, i) { L.push('  ' + (i + 1) + '. ' + p.tid + '  ' + p.t.title + ' - missed ' + p.tp.missed + ' of ' + p.tp.n + (p.tp.lucky ? ', ' + p.tp.lucky + ' guessed' : '')); });
    if (res.task.n) {
      L.push(''); L.push('TASKS OF TEACHING: ' + res.task.correct + '/' + res.task.n + ' correct');
      PXD.taskGroups.forEach(function (g) { var x = res.task.groups[g.id]; if (x) L.push('  ' + pad(g.title, 46) + x.correct + '/' + x.n); });
    }
    L.push(''); L.push('TOPIC LOG  (+ correct, ~ correct but guessed, x missed)');
    PXD.areas.forEach(function (a) {
      areaTopics[a.id].forEach(function (t) {
        var x = res.topics[t.id]; if (!x) return;
        L.push('  ' + pad(t.id, 6) + pad(x.rows.map(function (r) { return r.ok ? (r.lucky ? '~' : '+') : 'x'; }).join(''), 6) + t.title);
      });
    });
    L.push(''); L.push('QUESTION LOG  (id, result, seconds)');
    var cells = res.rows.map(function (r) { return r.q.id + ' ' + (r.ok ? (r.lucky ? '~' : '+') : (r.ans ? 'x' : '-')) + ' ' + r.t + 's' + (r.it.flag ? ' F' : ''); });
    var cw = cells.reduce(function (m, c) { return Math.max(m, c.length); }, 0) + 2;
    for (var i = 0; i < cells.length; i += 3) L.push('  ' + cells.slice(i, i + 3).map(function (c) { return pad(c, cw); }).join('').replace(/\s+$/, ''));
    L.push(''); L.push('Generated by the Milligan Mathematics Praxis diagnostic v' + PXD.version + ' (bank of ' + PXD.bank.length + ' questions)');
    return L.join('\n');
  }
  function refreshReport() {
    var sess = sessionForResults(), el = $('#pxd-report'); if (!sess || !el) return;
    el.textContent = buildReport(sess, analyze(sess));
  }
  function copyText(txt, done) {
    function fallback() { var ta = document.createElement('textarea'); ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); var ok = false; try { ok = document.execCommand('copy'); } catch (e) { /* ignore */ } document.body.removeChild(ta); done(ok); }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(txt).then(function () { done(true); }, fallback); else fallback();
  }
  function flash(msg) { toast = msg; var t = $('#pxd-toast'); if (t) t.textContent = msg; setTimeout(function () { toast = ''; var t2 = $('#pxd-toast'); if (t2) t2.textContent = ''; }, 3500); }

  /* ------------------------------------------------------------ actions */
  function selectedTopics() { return $$('input[data-tp]:checked').map(function (c) { return c.dataset.tp; }); }
  function startSession(sess) { S.session = sess; save(); view = 'quiz'; pendingScroll = true; render(); }
  function finish() {
    var s = S.session; if (!s) return;
    s.finished = true; s.finishedAt = Date.now();
    var res = analyze(s), areas = {};
    PXD.areas.forEach(function (a) { areas[a.id] = [res.areas[a.id].correct, res.areas[a.id].n]; });
    S.history.push({ t: s.finishedAt, mode: s.mode, kind: s.kind, N: res.N, correct: res.correct, adj: res.adj, areas: areas });
    if (S.history.length > 60) S.history = S.history.slice(-60);
    S.last = s; S.session = null; save(); revFilter = 'all'; go('results');
  }
  function confirmFinish() {
    var s = S.session, un = s.items.filter(function (x) { return !hasAnswer(x); }).length, fl = s.items.filter(function (x) { return x.flag; }).length;
    var b = $('#pxd-conf-body');
    b.innerHTML = '<h3 id="pxd-conf-h">Finish and see your results?</h3><p>' + (un ? '<b>' + plural(un, 'question') + ' unanswered</b> (they will count as missed). ' : 'Every question has an answer. ') + (fl ? plural(fl, 'question') + ' still flagged. ' : '') + 'You can\'t change answers after you finish.</p><div class="toolrow"><button class="btn" data-act="finishnow">Finish</button><button class="btn ghost" data-act="closeconf">Keep working</button></div>';
    openDlg('#pxd-conf');
  }
  function curItem() { return S.session.items[S.session.cur]; }
  function moveTo(i) { var s = S.session; s.cur = Math.max(0, Math.min(s.N - 1, i)); save(); pendingScroll = true; render(); }

  root.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]'); if (!el || el.tagName === 'INPUT') return;
    var act = el.dataset.act, s = S.session;
    switch (act) {
      case 'start': var sess0 = buildDiagnostic(el.dataset.kind); sess0.self = readSelf(); startSession(sess0); break;
      case 'again': startSession(buildDiagnostic(el.dataset.kind)); break;
      case 'resume': view = 'quiz'; pendingScroll = true; render(); break;
      case 'discard': if (window.confirm('Discard your session in progress?')) { S.session = null; save(); render(); } break;
      case 'viewlast': go('results'); break;
      case 'home': go('landing'); break;
      case 'startpractice': var tids = selectedTopics(); if (!tids.length) { $('#pxd-pmsg').textContent = 'Pick at least one topic.'; return; } startSession(buildPractice(tids, +$('#pxd-pn').value)); break;
      case 'pickall': case 'picknone': $$('input[data-tparea="' + el.dataset.area + '"]').forEach(function (c) { c.checked = act === 'pickall'; }); break;
      case 'practice1': startSession(buildPractice([el.dataset.tid], 10)); break;
      case 'practicetop': startSession(buildPractice(el.dataset.tids.split(','), 15)); break;
      case 'timer': S.prefs.hideTimer = !S.prefs.hideTimer; save(); render(); break;
      case 'ref': openDlg('#pxd-ref'); break;
      case 'closeref': closeDlg('#pxd-ref'); break;
      case 'closeconf': closeDlg('#pxd-conf'); break;
      case 'exit': save(); go('landing'); break;
      case 'prev': moveTo(s.cur - 1); break;
      case 'next': moveTo(s.cur + 1); break;
      case 'jump': moveTo(+el.dataset.i); break;
      case 'check': curItem().checked = true; save(); render(); break;
      case 'finish': if (s.mode === 'practice') finish(); else confirmFinish(); break;
      case 'finishnow': closeDlg('#pxd-conf'); finish(); break;
      case 'filter': revFilter = el.dataset.f; pendingScroll = false; renderResults(); var fh = document.querySelector('.filters'); if (fh) fh.scrollIntoView({ block: 'center' }); break;
      case 'copy': refreshReport(); copyText($('#pxd-report').textContent, function (ok) { flash(ok ? 'Copied. Paste it into an email or message.' : 'Copy failed. Select the text and copy it, or use Download.'); }); break;
      case 'download': refreshReport(); var blob = new Blob([$('#pxd-report').textContent + '\n'], { type: 'text/plain' }), a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'praxis-5165-diagnostic-' + isoDate(Date.now()) + '.txt'; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); document.body.removeChild(a); }, 500); flash('Downloaded.'); break;
      case 'print': refreshReport(); $$('details.rev').forEach(function (d) { d.open = true; fillReview(d); }); setTimeout(function () { window.print(); }, 400); break;
    }
  });
  function readSelf() {
    var self = {}, any = false;
    $$('select[data-self]').forEach(function (sel) { if (sel.value) { self[sel.dataset.self] = +sel.value; any = true; } });
    return any ? self : null;
  }
  root.addEventListener('change', function (e) {
    var t = e.target, s = S.session;
    if (t.name === 'ans' && s) {
      var it = curItem(), q = getQ(it), v = +t.value;
      if (q.type === 'mc') it.resp = v;
      else { var cur = Array.isArray(it.resp) ? it.resp.slice() : []; var k = cur.indexOf(v); if (t.checked && k < 0) cur.push(v); if (!t.checked && k >= 0) cur.splice(k, 1); it.resp = cur.length ? cur : null; }
      save(); refreshMap();
    } else if (t.dataset && t.dataset.act === 'guess' && s) { curItem().guess = t.checked; save(); }
    else if (t.dataset && t.dataset.act === 'flag' && s) { curItem().flag = t.checked; save(); render(); }
    else if (t.id === 'pxd-name') { S.prefs.name = t.value.trim(); save(); }
  });
  root.addEventListener('input', function (e) {
    var t = e.target, s = S.session;
    if (t.id === 'pxd-num' && s) { var it = curItem(); it.resp = t.value.trim() === '' ? null : t.value; save(); refreshMap(); }
    else if (t.id === 'pxd-name') { S.prefs.name = t.value.trim(); save(); }
    else if (t.id === 'pxd-rname' || t.id === 'pxd-rnote') {
      var sess = sessionForResults(); if (!sess) return;
      if (t.id === 'pxd-rname') { sess.name = t.value.trim(); S.prefs.name = sess.name; } else sess.note = t.value;
      save(); refreshReport();
    }
  });
  function refreshMap() {
    var s = S.session; if (!s) return;
    var answered = s.items.filter(hasAnswer).length;
    var bar = $('.qbar .mute'); if (bar) bar.textContent = answered + ' answered';
    var m = $('.qbar .meter i'); if (m) m.style.width = pct(answered, s.N) + '%';
    $$('.mapbtn').forEach(function (b, i) { b.classList.toggle('ans', hasAnswer(s.items[i])); });
  }
  root.addEventListener('toggle', function (e) { var d = e.target; if (d.classList && d.classList.contains('rev') && d.open) fillReview(d); }, true);

  document.addEventListener('keydown', function (e) {
    if (view !== 'quiz' || !S.session || e.ctrlKey || e.metaKey || e.altKey) return;
    var tag = (e.target.tagName || '').toLowerCase();
    var dlg = document.querySelector('.pxd dialog[open]'); if (dlg) return;
    var s = S.session, it = curItem(), q = getQ(it), locked = s.mode === 'practice' && it.checked;
    if (tag === 'input' && e.target.type === 'text') { if (e.key === 'Enter' && s.mode === 'practice' && !locked) { it.checked = true; save(); render(); e.preventDefault(); } return; }
    if (tag === 'textarea' || tag === 'select') return;
    if (e.key === 'ArrowRight') { if (s.cur < s.N - 1) { moveTo(s.cur + 1); e.preventDefault(); } }
    else if (e.key === 'ArrowLeft') { if (s.cur > 0) { moveTo(s.cur - 1); e.preventDefault(); } }
    else if (e.key === 'Enter' && s.mode === 'practice' && tag !== 'button' && tag !== 'a') { if (!locked) { it.checked = true; save(); render(); } else if (s.cur < s.N - 1) moveTo(s.cur + 1); }
    else if (q.choices && !locked && /^[a-fA-F]$/.test(e.key)) {
      var di = LET.indexOf(e.key.toUpperCase()); if (di < 0 || di >= it.perm.length) return;
      var oi = it.perm[di];
      if (q.type === 'mc') it.resp = oi; else { var cur = Array.isArray(it.resp) ? it.resp.slice() : [], k = cur.indexOf(oi); if (k >= 0) cur.splice(k, 1); else cur.push(oi); it.resp = cur.length ? cur : null; }
      save(); render(); e.preventDefault();
    }
  });

  document.addEventListener('visibilitychange', function () { if (document.hidden) save(); });
  window.addEventListener('pagehide', save);

  render();
})();
