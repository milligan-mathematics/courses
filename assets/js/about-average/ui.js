/* Purr-fectly Average: interface. Needs core.js (window.AvgCore). Everything stays in the browser. */
(function () {
  'use strict';
  var C = window.AvgCore;
  var $ = function (id) { return document.getElementById(id); };
  var KEYS = C.KEYS;

  var STAT = {
    mean: { name: 'Mean', what: 'the fair share', step: 'any' },
    median: { name: 'Median', what: 'the middle cat', step: '0.5' },
    mode: { name: 'Mode', what: 'the popular haul', step: '1' },
    range: { name: 'Range', what: 'best minus worst', step: '1' }
  };
  var WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

  function fmt(x) { return String(+(+x).toFixed(3)); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }
  function catsWord(n) { return (WORDS[n] || n) + (n === 1 ? ' cat' : ' cats'); }
  // a short description of a sorted set; big litters become a tally like "50 x 1, 1 x 3"
  function describeSet(vals) {
    if (vals.length <= 12) return vals.join(', ');
    var t = [], i = 0;
    while (i < vals.length) { var j = i; while (j < vals.length && vals[j] === vals[i]) j++; t.push((j - i) + ' × ' + vals[i]); i = j; }
    return vals.length + ' cats: ' + t.join(', ');
  }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function clueText(cond) {
    return C.activeKeys(cond).map(function (k) { return STAT[k].name.toLowerCase() + ' ' + fmt(cond[k]); }).join(', ');
  }
  function sentence(n, cond) { return cap(catsWord(n)) + ': ' + clueText(cond) + '.'; }
  function setText(node, t) { node.textContent = t; }

  /* ---------- the cats ---------- */
  var COATS = {
    tabby: { fur: '#F36E24', ear: '#FFC9A5', stripe: '#B9501A', eye: '#1b1b1b', whisker: '#6b3a1d' },
    black: { fur: '#2e2e2e', ear: '#E9A0A0', stripe: '#2e2e2e', eye: '#F9A01B', whisker: '#d9d9d9' },
    gray: { fur: '#A2A2A2', ear: '#F2C6CF', stripe: '#6E6E6E', eye: '#1b1b1b', whisker: '#4a4a4a' },
    cream: { fur: '#F7E3BE', ear: '#F4B8B0', stripe: '#D3B27D', eye: '#1b1b1b', whisker: '#7a6a4f' }
  };
  var COAT_ORDER = ['tabby', 'black', 'gray', 'cream'];

  function cat(coat, mood) {
    var c = COATS[coat] || COATS.tabby, s = '';
    s += '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">';
    s += '<polygon points="9,30 12,5 29,17" fill="' + c.fur + '"/><polygon points="55,30 52,5 35,17" fill="' + c.fur + '"/>';
    s += '<polygon points="13,25 14,11 24,18" fill="' + c.ear + '"/><polygon points="51,25 50,11 40,18" fill="' + c.ear + '"/>';
    s += '<ellipse cx="32" cy="38" rx="24" ry="21" fill="' + c.fur + '"/>';
    if (coat === 'tabby' || coat === 'gray') {
      s += '<path d="M32 18v7M25 19.5l2 6M39 19.5l-2 6" stroke="' + c.stripe + '" stroke-width="2.4" stroke-linecap="round" fill="none"/>';
    }
    if (coat === 'cream') s += '<ellipse cx="44" cy="27" rx="9" ry="6" fill="' + c.stripe + '" opacity=".55"/>';
    if (mood === 'happy') {
      s += '<path d="M17 37q5.5-7 11 0M36 37q5.5-7 11 0" stroke="' + c.eye + '" stroke-width="3" stroke-linecap="round" fill="none"/>';
    } else {
      s += '<ellipse cx="23" cy="36" rx="3.6" ry="4.6" fill="' + c.eye + '"/><ellipse cx="41" cy="36" rx="3.6" ry="4.6" fill="' + c.eye + '"/>';
      s += '<circle cx="24.3" cy="34.3" r="1.3" fill="#fff"/><circle cx="42.3" cy="34.3" r="1.3" fill="#fff"/>';
      if (mood === 'sad') s += '<path d="M16 30l11 4M48 30l-11 4" stroke="' + c.whisker + '" stroke-width="2" stroke-linecap="round"/>';
    }
    s += '<polygon points="29,43.5 35,43.5 32,47.5" fill="#E8848F"/>';
    if (mood === 'sad') s += '<path d="M32 47.5q-4-4-9-1M32 47.5q4-4 9-1" stroke="' + c.whisker + '" stroke-width="1.8" fill="none" stroke-linecap="round"/>';
    else s += '<path d="M32 47.5v2q-4 5-9.5 1.5M32 49.5q4 5 9.5 1.5" stroke="' + c.whisker + '" stroke-width="1.8" fill="none" stroke-linecap="round"/>';
    s += '<path d="M6 41l13 2M6 47l13-2M58 41l-13 2M58 47l-13-2" stroke="' + c.whisker + '" stroke-width="1.3" stroke-linecap="round"/>';
    s += '</svg>';
    return s;
  }
  function coatFor(i) { return COAT_ORDER[i % COAT_ORDER.length]; }
  var PAW = '<svg class="aa-paw" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="16.5" rx="6" ry="4.6" fill="currentColor"/><ellipse cx="5" cy="10" rx="2.3" ry="3" fill="currentColor"/><ellipse cx="9.5" cy="5.6" rx="2.3" ry="3" fill="currentColor"/><ellipse cx="14.5" cy="5.6" rx="2.3" ry="3" fill="currentColor"/><ellipse cx="19" cy="10" rx="2.3" ry="3" fill="currentColor"/></svg>';

  /* ---------- tabs ---------- */
  var TABS = ['solve', 'lab', 'map', 'design', 'teach'];
  function showTab(name) {
    TABS.forEach(function (t) {
      var on = t === name;
      $('tab-' + t).setAttribute('aria-selected', on ? 'true' : 'false');
      $('tab-' + t).tabIndex = on ? 0 : -1;
      $('panel-' + t).hidden = !on;
    });
  }
  function initTabs() {
    var icons = { solve: 'tabby', lab: 'black', map: 'gray', design: 'cream', teach: 'tabby' };
    TABS.forEach(function (t, i) {
      var b = $('tab-' + t);
      b.insertAdjacentHTML('afterbegin', cat(icons[t], 'neutral'));
      b.addEventListener('click', function () { showTab(t); });
      b.addEventListener('keydown', function (e) {
        var j = TABS.indexOf(t), d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        var nt = TABS[(j + d + TABS.length) % TABS.length];
        showTab(nt); $('tab-' + nt).focus(); e.preventDefault();
      });
    });
  }

  /* =====================================================================
     SOLVE
     ===================================================================== */
  var CASES = [
    { id: '1', n: 3, cond: { mean: 3, mode: 2 } },
    { id: '2', n: 3, cond: { mean: 7, mode: 10 } },
    { id: '3', n: 3, cond: { mean: 8, median: 10, range: 8 } },
    { id: '4', n: 4, cond: { mean: 7.5, mode: 6, median: 7 } },
    { id: '5', n: 4, cond: { mean: 6, median: 6.5, range: 11 } },
    { id: '6', n: 5, cond: { mean: 4, mode: 3, range: 9 } },
    { id: '7', n: 5, cond: { mean: 4, mode: 2, range: 6 } },
    { id: '8', n: 5, cond: { mean: 7, mode: 7, range: 10 } },
    { id: '9', n: 4, cond: { mean: 4, mode: 1, median: 2, range: 10 }, ext: true, label: '9 (extension)' }
  ];
  var S = { happy: false, idx: 0, vals: [], counts: {}, stack: false, hint: 0, found: {}, solved: {}, custom: false };

  function curCase() { return CASES[S.idx]; }
  function solveOpts() { return { zero: $('opt-zero').checked, ties: $('opt-ties').checked }; }
  function lowest() { return $('opt-zero').checked ? 0 : 1; }
  function caseN() { return curCase().ext ? Math.max(3, Math.min(12, parseInt($('ext-n').value, 10) || 4)) : curCase().n; }
  function foundKey() { var o = solveOpts(); return curCase().id + '|' + (o.zero ? 'z' : '') + (o.ties ? 't' : '') + '|' + (curCase().ext ? caseN() : ''); }
  function foundList() { var k = foundKey(); return S.found[k] || (S.found[k] = []); }

  function renderPicker() {
    var box = $('case-picker'); box.innerHTML = '';
    CASES.forEach(function (c, i) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'aa-case' + (S.solved[c.id] ? ' solved' : '');
      b.setAttribute('aria-pressed', i === S.idx ? 'true' : 'false');
      b.innerHTML = (c.custom ? 'Your case' : 'Case ' + esc(c.label || c.id)) + '<span class="dot" aria-hidden="true"></span>' + (S.solved[c.id] ? '<span class="sr-only" style="position:absolute;left:-9999px"> (solved)</span>' : '');
      b.addEventListener('click', function () { selectCase(i); });
      box.appendChild(b);
    });
  }

  function selectCase(i) {
    S.idx = i; S.hint = 0; S.vals = []; S.counts = {}; S.stack = false;
    var c = curCase();
    $('opt-zero').checked = false; $('opt-ties').checked = false;
    $('ext-controls').hidden = !c.ext;
    $('ext-sizes-area').hidden = !c.ext;
    $('sizes-out').innerHTML = '';
    $('ext-n').value = c.n;
    $('ext-mode').setAttribute('aria-pressed', 'false');
    $('ext-n').disabled = false;
    setText($('ext-mode'), 'Switch to stacking cats (big litters)');
    if (c.custom) setText($('case-title'), 'Your case');
    else setText($('case-title'), 'Case ' + (c.label || c.id));
    renderCase(); renderPicker();
  }

  function caseStory() {
    var c = curCase(), n = caseN();
    var story = c.custom ? 'A case someone designed for you. ' : '';
    if (c.ext) return 'The extension: the clues stay the same, but the number of cats changes. For which litters is it possible? (Try 100 cats with the stacking view.)';
    return story + cap(catsWord(n)) + ' compared their mouse counts. Find mouse counts for each cat that fit all the clues.';
  }

  function renderCase() {
    var c = curCase(), n = caseN();
    setText($('case-story'), caseStory());
    var ul = $('case-clues'); ul.innerHTML = '';
    C.activeKeys(c.cond).forEach(function (k) {
      var li = document.createElement('li');
      li.innerHTML = STAT[k].name + ' = ' + fmt(c.cond[k]) + '<small>' + STAT[k].what + '</small>';
      ul.appendChild(li);
    });
    if (c.ext && S.stack) { $('cat-row').hidden = true; $('stack-area').hidden = false; renderStacks(); }
    else { $('cat-row').hidden = false; $('stack-area').hidden = true; renderCatRow(n); }
    $('found-area').hidden = true;
    setText($('solve-msg'), ''); $('solve-msg').className = 'aa-msg';
    renderFound(); updateReadout();
  }

  function renderCatRow(n) {
    var row = $('cat-row'); row.innerHTML = ''; row.classList.remove('win'); S.happy = false;
    S.vals.length = n;
    for (var i = 0; i < n; i++) {
      var d = document.createElement('div'); d.className = 'aa-catcard';
      d.innerHTML = cat(coatFor(i), 'neutral') + '<label for="cat-' + i + '">Cat ' + (i + 1) + '</label><input type="number" inputmode="numeric" min="0" step="1" id="cat-' + i + '" aria-label="Mice caught by cat ' + (i + 1) + '">';
      row.appendChild(d);
      var inp = d.querySelector('input');
      inp.value = S.vals[i] === undefined ? '' : S.vals[i];
      (function (idx, input) { input.addEventListener('input', function () { S.vals[idx] = input.value; updateReadout(); }); })(i, inp);
    }
  }

  function renderStacks() {
    var box = $('stacks'); box.innerHTML = '';
    var lo = lowest();
    for (var v = lo; v <= 12; v++) {
      var d = document.createElement('div'); d.className = 'aa-stack'; d.setAttribute('data-v', v);
      d.innerHTML = '<div class="v" title="mice caught">' + v + '</div><div class="c" aria-live="off"></div><div class="paws" aria-hidden="true"></div>' +
        '<button type="button" aria-label="Add a cat that caught ' + v + ' mice">+</button> <button type="button" aria-label="Remove a cat that caught ' + v + ' mice">&minus;</button>';
      var bs = d.querySelectorAll('button');
      (function (val, plus, minus) {
        plus.addEventListener('click', function () { S.counts[val] = (S.counts[val] || 0) + 1; paintStacks(); updateReadout(); });
        minus.addEventListener('click', function () { if (S.counts[val]) S.counts[val]--; paintStacks(); updateReadout(); });
      })(v, bs[0], bs[1]);
      box.appendChild(d);
    }
    paintStacks();
  }
  /* update the counts in place so keyboard focus stays on the button just pressed */
  function paintStacks() {
    var cells = $('stacks').children;
    for (var i = 0; i < cells.length; i++) {
      var d = cells[i], val = +d.getAttribute('data-v'), cnt = S.counts[val] || 0;
      d.className = 'aa-stack' + (cnt ? ' has' : '');
      d.querySelector('.c').textContent = cnt;
      d.querySelector('.paws').textContent = new Array(Math.min(cnt, 10) + 1).join('•') + (cnt > 10 ? '+' : '');
    }
    var tot = stackValues().length;
    setText($('stack-total'), tot + (tot === 1 ? ' cat' : ' cats') + ' in the litter');
  }
  function stackValues() {
    var a = [], lo = lowest();
    Object.keys(S.counts).forEach(function (k) { if (+k >= lo) for (var i = 0; i < S.counts[k]; i++) a.push(+k); });
    return a.sort(function (x, y) { return x - y; });
  }

  /* values currently entered, sorted, or null if incomplete / invalid */
  function readValues() {
    var lo = lowest(), out = [], bad = false, blank = false;
    if (curCase().ext && S.stack) { var a = stackValues(); return { vals: a.length >= 2 ? a : null, bad: false, blank: a.length < 2 }; }
    var n = caseN();
    for (var i = 0; i < n; i++) {
      var raw = S.vals[i]; var card = $('cat-' + i);
      var ok = true;
      if (raw === undefined || String(raw).trim() === '') { blank = true; ok = true; }
      else {
        var x = Number(raw);
        if (!isFinite(x) || x !== Math.round(x) || x < lo) { bad = true; ok = false; } else out.push(x);
      }
      if (card) card.parentNode.classList.toggle('bad', !ok);
    }
    out.sort(function (x, y) { return x - y; });
    return { vals: (!bad && !blank) ? out : null, bad: bad, blank: blank };
  }

  function updateReadout(suppressWin) {
    var c = curCase(), o = solveOpts(), rv = readValues(), tb = $('read-body'); tb.innerHTML = '';
    var st = rv.vals ? C.stats(rv.vals) : null;
    var allOk = !!st;
    KEYS.forEach(function (k) {
      var tr = document.createElement('tr'), isClue = c.cond[k] !== undefined;
      if (!isClue) tr.className = 'off';
      var yours = '', mark = '';
      if (st) {
        if (k === 'mode') yours = (st.maxc >= 2 && (o.ties || st.top.length === 1)) ? (st.top.length > 1 ? st.top.join(' & ') : String(st.top[0])) : 'none';
        else yours = fmt(st[k]);
        if (isClue) {
          var good = k === 'mode' ? C.modeMatches(st, c.cond.mode, o.ties) : Math.abs(st[k] - c.cond[k]) < 1e-9;
          mark = good ? '<span class="ok">&#10003;<span class="sr-only" style="position:absolute;left:-9999px"> matches</span></span>' : '<span class="no">&#10007;<span class="sr-only" style="position:absolute;left:-9999px"> does not match</span></span>';
          if (!good) allOk = false;
        }
      } else yours = '—';
      tr.innerHTML = '<th scope="row">' + STAT[k].name + '<span class="what">' + STAT[k].what + '</span></th><td class="tgt">' + (isClue ? fmt(c.cond[k]) : '<span class="aa-muted">not a clue</span>') + '</td><td>' + yours + '</td><td>' + mark + '</td>';
      tb.appendChild(tr);
    });
    var cats = $('cat-row'); cats.classList.remove('win');
    if (S.happy) { setFaces('neutral'); }
    if (rv.bad && !(curCase().ext && S.stack)) {
      showMsg('bad', 'Mouse counts must be whole numbers' + (lowest() ? ' (0 is allowed)' : ', at least 1 (tick the box above to allow 0)') + '.');
    } else if (!suppressWin && st && allOk) {
      celebrate(rv.vals);
    } else if (!suppressWin) {
      var m = $('solve-msg'); if (m.classList.contains('good') || m.classList.contains('bad')) { setText(m, ''); m.className = 'aa-msg'; }
    }
    if (curCase().ext && S.stack) { var t = stackValues().length; setText($('stack-total'), t + (t === 1 ? ' cat' : ' cats') + ' in the litter'); }
  }

  function setFaces(mood) {
    var faces = $('cat-row').querySelectorAll('.aa-catcard svg');
    Array.prototype.forEach.call(faces, function (svg, i) { svg.outerHTML = cat(coatFor(i), mood); });
    S.happy = mood === 'happy';
  }
  function showMsg(kind, html) { var m = $('solve-msg'); m.className = 'aa-msg ' + kind; m.innerHTML = html; }

  function celebrate(vals) {
    var key = vals.join(','), list = foundList(), isNew = list.indexOf(key) === -1;
    if (isNew) list.push(key);
    S.solved[curCase().id] = true;
    $('cat-row').classList.add('win');
    setFaces('happy');
    showMsg('good', '<p><strong>Purr-fect!</strong> Mouse counts ' + esc(describeSet(vals)) + ' fit every clue.' + (isNew ? '' : ' (You already found that one.)') + '</p><p class="aa-muted">Order doesn\'t matter. Are there other sets? Press <em>How many answers?</em> to find out.</p>');
    renderFound(); renderPicker();
  }

  function renderFound() {
    var list = foundList(), box = $('found-list'); box.innerHTML = '';
    $('found-area').hidden = !list.length;
    list.forEach(function (k) { var li = document.createElement('li'); li.className = 'mine'; li.textContent = describeSet(k.split(',').map(Number)); box.appendChild(li); });
  }

  function hintList() {
    var c = curCase(), n = caseN(), h = [], o = solveOpts();
    if (c.cond.mean !== undefined) h.push('Start with the total: ' + n + ' cats &times; mean ' + fmt(c.cond.mean) + ' = <strong>' + fmt(n * c.cond.mean) + '</strong> mice altogether.');
    if (c.cond.median !== undefined) h.push(n % 2 ? 'Line the cats up from fewest mice to most. The middle cat (number ' + ((n + 1) / 2) + ') caught exactly ' + fmt(c.cond.median) + '.' : 'Line the cats up from fewest to most. The two middle cats (numbers ' + n / 2 + ' and ' + (n / 2 + 1) + ') have counts that add to ' + fmt(c.cond.median * 2) + '.');
    if (c.cond.mode !== undefined) h.push('At least two cats caught exactly ' + fmt(c.cond.mode) + ' mice' + (o.ties ? '.' : ', and no other number can show up as often as that.'));
    if (c.cond.range !== undefined) h.push('The best hunter caught ' + fmt(c.cond.range) + ' more mice than the worst. If you pick the worst hunter\'s count, the best one is decided.');
    h.push('Still stuck? Try <em>Is it even possible?</em> or <em>Show me one</em>.');
    return h;
  }

  function opinion(n, cond, o) {
    return C.analyze(n, cond, { zero: o.zero, ties: o.ties, maxNodes: 1500000 });
  }

  function conflictSentence(conf) {
    return conf.map(function (g) { return g.map(function (k) { return STAT[k].name.toLowerCase(); }).join(' + '); }).join('; ');
  }

  function init() {
    initTabs();
    $('aa-parade').innerHTML = ['tabby', 'black', 'gray', 'cream', 'tabby'].map(function (c, i) { return cat(c, i % 2 ? 'neutral' : 'happy'); }).join('');
    renderPicker();
    var parsed = parseHash();
    if (parsed) { CASES.push(parsed); S.idx = CASES.length - 1; }
    selectCase(S.idx);
    if (parsed) showTab('solve');

    $('opt-zero').addEventListener('change', function () { if (curCase().ext && S.stack) renderStacks(); else renderCatRow(caseN()); renderFound(); updateReadout(); });
    $('opt-ties').addEventListener('change', function () { renderFound(); updateReadout(); });
    $('ext-n').addEventListener('change', function () { S.vals = []; $('ext-n').value = caseN(); renderCase(); });
    $('ext-mode').addEventListener('click', function () {
      S.stack = !S.stack;
      $('ext-mode').setAttribute('aria-pressed', S.stack ? 'true' : 'false');
      setText($('ext-mode'), S.stack ? 'Switch back to typing numbers' : 'Switch to stacking cats (big litters)');
      $('ext-n').disabled = S.stack;
      renderCase();
    });
    $('btn-hint').addEventListener('click', function () {
      var h = hintList(); var k = Math.min(S.hint, h.length - 1);
      showMsg('hint', '<p><strong>Hint ' + (k + 1) + ' of ' + h.length + '.</strong> ' + h[k] + '</p>');
      S.hint = Math.min(S.hint + 1, h.length - 1);
    });
    $('btn-clear').addEventListener('click', function () {
      S.vals = []; S.counts = {}; S.hint = 0; renderCase();
    });
    $('btn-poss').addEventListener('click', function () {
      var c = curCase(), n = caseN(), o = solveOpts(), a = opinion(n, c.cond, o);
      if (a.possible) { showMsg('info', '<p><strong>Yes, it\'s possible.</strong> At least one set of mouse counts fits' + (o.zero ? '' : ' (with no cat catching 0)') + '. Keep going!</p>'); return; }
      var html = '<p><strong>No, this case is impossible' + (o.zero ? '' : ' with positive whole numbers') + (o.ties ? '' : ' under the single-mode rule') + '.</strong> Not a single set of mouse counts fits.</p>';
      var rs = C.reasons(n, c.cond, o); rs.forEach(function (r) { html += '<p>' + esc(r) + '</p>'; });
      if (a.conflicts.length) html += '<p>These clues clash: ' + esc(conflictSentence(a.conflicts)) + '.</p>';
      if (!o.zero) { var az = opinion(n, c.cond, { zero: true, ties: o.ties }); if (az.possible) html += '<p><strong>But</strong> it becomes possible if a cat may catch 0 mice. Tick the box above.</p>'; }
      if (!o.ties) { var at = opinion(n, c.cond, { zero: o.zero, ties: true }); if (at.possible) html += '<p><strong>But</strong> it becomes possible if tied modes are allowed.</p>'; }
      showMsg('bad', html);
    });
    $('btn-count').addEventListener('click', function () {
      var c = curCase(), n = caseN(), o = solveOpts();
      var r = C.solve(n, c.cond, { zero: o.zero, ties: o.ties, keep: 0, maxNodes: 2000000 });
      var f = foundList().length;
      if (r.aborted) showMsg('info', '<p>There are at least ' + r.count + ' different sets (too many to finish counting).</p>');
      else if (!r.count) showMsg('bad', '<p><strong>There are no sets that work</strong> under these rules. Try <em>Is it even possible?</em> to see why.</p>');
      else showMsg('info', '<p>There ' + (r.count === 1 ? 'is exactly <strong>1</strong> set that fits' : 'are <strong>' + r.count + '</strong> different sets that fit') + '. You\'ve found ' + f + '.</p>');
    });
    $('btn-show').addEventListener('click', function () {
      var c = curCase(), n = caseN(), o = solveOpts();
      var r = C.solve(n, c.cond, { zero: o.zero, ties: o.ties, keep: 60, maxNodes: 2000000 });
      if (!r.solutions.length) { showMsg('bad', '<p>There\'s no set to show: this case is impossible under these rules.</p>'); return; }
      var have = foundList(), pickS = null;
      for (var i = 0; i < r.solutions.length; i++) if (have.indexOf(r.solutions[i].join(',')) === -1) { pickS = r.solutions[i]; break; }
      if (!pickS) { showMsg('info', '<p>You\'ve already found every set' + (r.count > r.solutions.length ? ' I can list' : '') + '.</p>'); return; }
      if (c.ext && S.stack) { S.counts = {}; pickS.forEach(function (v) { S.counts[v] = (S.counts[v] || 0) + 1; }); renderStacks(); }
      else { S.vals = pickS.map(String); renderCatRow(pickS.length); }
      updateReadout(true);
      showMsg('hint', '<p>Here is one: <strong>' + esc(pickS.join(', ')) + '</strong>. Check it against the clues above. Is it the only one?</p>');
    });
    $('btn-sizes').addEventListener('click', function () {
      var c = curCase(), o = solveOpts(), out = $('sizes-out'); out.innerHTML = '';
      var ul = document.createElement('ul'); ul.className = 'aa-sets';
      for (var n = 3; n <= 12; n++) {
        var r = C.solve(n, c.cond, { zero: o.zero, ties: o.ties, keep: 0, maxNodes: 2000000 });
        var li = document.createElement('li');
        li.textContent = n + ' cats: ' + (r.count ? (r.aborted ? 'at least ' : '') + plural(r.count, 'answer', 'answers') : 'impossible');
        ul.appendChild(li);
      }
      out.appendChild(ul);
      var p = document.createElement('p'); p.className = 'aa-muted';
      p.textContent = 'Can you explain why the smallest litters fail? And could 100 cats work? Use the stacking view to find out.';
      out.appendChild(p);
    });

    initLab(); initMap(); initDesign();
    showTabFromHash();
  }

  /* ---------- share links ---------- */
  function parseHash() {
    var h = (location.hash || '').replace(/^#/, ''); if (!h) return null;
    var p = {}; h.split('&').forEach(function (kv) { var a = kv.split('='); p[a[0]] = a[1]; });
    var n = parseInt(p.n, 10); if (!(n >= 2 && n <= 12)) return null;
    var cond = {};
    KEYS.forEach(function (k) { if (p[k] !== undefined && isFinite(Number(p[k])) && p[k] !== '') cond[k] = Number(p[k]); });
    if (!C.activeKeys(cond).length) return null;
    return { id: 'custom', n: n, cond: cond, custom: true, label: 'from link', zero: p.zero === '1', ties: p.ties === '1' };
  }
  function shareLink(n, cond, o) {
    var parts = ['n=' + n]; C.activeKeys(cond).forEach(function (k) { parts.push(k + '=' + cond[k]); });
    if (o.zero) parts.push('zero=1'); if (o.ties) parts.push('ties=1');
    return location.href.replace(/#.*$/, '') + '#' + parts.join('&');
  }
  function showTabFromHash() {
    var c = curCase();
    if (c.custom) { $('opt-zero').checked = !!c.zero; $('opt-ties').checked = !!c.ties; renderCase(); }
  }
  function openInSolve(n, cond, o) {
    var existing = -1; CASES.forEach(function (c, i) { if (c.custom) existing = i; });
    var entry = { id: 'custom', n: n, cond: cond, custom: true, label: 'yours', zero: o.zero, ties: o.ties };
    if (existing >= 0) CASES[existing] = entry; else CASES.push(entry);
    selectCase(existing >= 0 ? existing : CASES.length - 1);
    $('opt-zero').checked = !!o.zero; $('opt-ties').checked = !!o.ties; renderCase();
    showTab('solve'); window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function copyText(text, done) {
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
    else done(false);
  }

  /* =====================================================================
     LAB
     ===================================================================== */
  var L = { guess: null, streak: 0, right: 0, tried: 0 };

  function initLab() {
    var box = $('lab-clues'); box.innerHTML = '';
    var expl = {
      mean: 'the fair share (total &divide; number of cats)', median: 'the middle cat (halves allowed)',
      mode: 'the single most common count, at least two cats', range: 'best hunter minus worst hunter'
    };
    KEYS.forEach(function (k) {
      var d = document.createElement('div'); d.className = 'aa-clue-row';
      d.innerHTML = '<label class="aa-check nm"><input type="checkbox" id="lab-on-' + k + '"> ' + STAT[k].name + '</label>' +
        '<input type="number" id="lab-v-' + k + '" step="' + STAT[k].step + '" aria-label="' + STAT[k].name + ' value" disabled>' +
        '<span class="ex">' + expl[k] + '</span>';
      box.appendChild(d);
      $('lab-on-' + k).addEventListener('change', function () { $('lab-v-' + k).disabled = !this.checked; if (this.checked && $('lab-v-' + k).value === '') $('lab-v-' + k).value = k === 'range' ? 4 : 3; });
    });
    $('lab-go').addEventListener('click', function () { L.guess = null; $('lab-guess').hidden = true; runLab(); });
    $('lab-reset').addEventListener('click', function () {
      KEYS.forEach(function (k) { $('lab-on-' + k).checked = false; $('lab-v-' + k).disabled = true; $('lab-v-' + k).value = ''; });
      $('lab-out').innerHTML = ''; $('lab-guess').hidden = true;
    });
    $('lab-surprise').addEventListener('click', surprise);
    $('guess-yes').addEventListener('click', function () { resolveGuess(true); });
    $('guess-no').addEventListener('click', function () { resolveGuess(false); });
  }

  function labSet(n, cond, o) {
    $('lab-n').value = n; $('lab-zero').checked = !!(o && o.zero); $('lab-ties').checked = !!(o && o.ties);
    KEYS.forEach(function (k) {
      var on = cond[k] !== undefined; $('lab-on-' + k).checked = on; $('lab-v-' + k).disabled = !on; $('lab-v-' + k).value = on ? cond[k] : '';
    });
  }
  function labRead() {
    var n = parseInt($('lab-n').value, 10), cond = {};
    KEYS.forEach(function (k) {
      if ($('lab-on-' + k).checked) { var x = parseFloat($('lab-v-' + k).value); if (isFinite(x)) cond[k] = x; }
    });
    return { n: n, cond: cond, o: { zero: $('lab-zero').checked, ties: $('lab-ties').checked } };
  }

  function surprise() {
    var o = { zero: false, ties: false }, made = null, possible;
    if (Math.random() < 0.5) { var p = C.randomPossible(o); made = { n: p.n, cond: p.cond }; possible = true; }
    else { made = C.randomSneaky(o); possible = false; if (!made) { var p2 = C.randomPossible(o); made = { n: p2.n, cond: p2.cond }; possible = true; } }
    labSet(made.n, made.cond, o);
    L.guess = { possible: possible };
    $('lab-out').innerHTML = ''; $('lab-guess').hidden = false;
    setText($('guess-score'), L.tried ? 'Score: ' + L.right + ' of ' + L.tried : '');
    $('lab-guess').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  function resolveGuess(saidPossible) {
    if (!L.guess) return;
    var cur = labRead(), a = C.analyze(cur.n, cur.cond, { zero: cur.o.zero, ties: cur.o.ties, maxNodes: 1500000 });
    var truth = a.possible; L.tried++; if (truth === saidPossible) L.right++;
    $('lab-guess').hidden = true; L.guess = null;
    runLab((truth === saidPossible ? '<p><strong>You called it.</strong> </p>' : '<p><strong>Not this time.</strong> It looked ' + (saidPossible ? 'possible' : 'impossible') + ', but it isn\'t.</p>') + '<p class="aa-muted">Score: ' + L.right + ' of ' + L.tried + '.</p>');
  }

  function solChips(sols) {
    var ul = document.createElement('ul'); ul.className = 'aa-sets';
    sols.forEach(function (s) { var li = document.createElement('li'); li.textContent = s.join(', '); ul.appendChild(li); });
    return ul;
  }

  function runLab(prefixHtml) {
    var r = labRead(), out = $('lab-out'); out.innerHTML = '';
    var keys = C.activeKeys(r.cond);
    function say(kind, html) { var m = document.createElement('div'); m.className = 'aa-msg ' + kind; m.innerHTML = html; out.appendChild(m); return m; }
    if (!(r.n >= 2 && r.n <= 12)) { say('bad', '<p>Choose between 2 and 12 cats.</p>'); return; }
    if (!keys.length) { say('bad', '<p>Tick at least one clue.</p>'); return; }
    if (r.cond.mean === undefined && r.n > 7) { say('bad', '<p>Without a mean, more than 7 cats means too many sets to check. Add a mean clue or use fewer cats.</p>'); return; }
    var a = C.analyze(r.n, r.cond, { zero: r.o.zero, ties: r.o.ties, maxNodes: 1500000 });
    var hasMean = r.cond.mean !== undefined;
    var wrap = document.createElement('div'); wrap.className = 'aa-verdict';
    var head = document.createElement('div');
    if (a.possible) {
      wrap.innerHTML = cat('tabby', 'happy');
      var cnt = hasMean ? (a.result.aborted ? 'at least ' : '') + plural(a.result.count, 'different set works', 'different sets work') : 'There are lots of sets. Without a mean nothing caps how big the numbers can be.';
      head.innerHTML = '<h3>Possible!</h3><p>' + esc(sentence(r.n, r.cond)) + '<br>' + (hasMean ? esc(cap(cnt)) + '.' : esc(cnt)) + '</p>';
    } else if (a.uncertain) {
      wrap.innerHTML = cat('gray', 'neutral');
      head.innerHTML = '<h3>Couldn\'t finish checking</h3><p>That case has too many possibilities to check in full. Add a mean clue or use fewer cats.</p>';
    } else {
      wrap.innerHTML = cat('black', 'sad');
      head.innerHTML = '<h3>Impossible</h3><p>' + esc(sentence(r.n, r.cond)) + '<br>No set of mouse counts fits all of these' + (r.o.zero ? '' : ' (using whole numbers from 1 up)') + '.</p>';
    }
    wrap.appendChild(head);
    var card = document.createElement('div'); card.className = 'aa-msg ' + (a.possible ? 'good' : a.uncertain ? 'info' : 'bad');
    if (prefixHtml) { var pre = document.createElement('div'); pre.innerHTML = prefixHtml; card.appendChild(pre); }
    card.appendChild(wrap); out.appendChild(card);

    if (a.possible) {
      var sols = a.result.solutions.slice(0, 60);
      var h = document.createElement('h3'); h.textContent = hasMean ? 'The sets' : 'Some of the sets'; out.appendChild(h);
      out.appendChild(solChips(sols));
      if (a.result.count > sols.length && hasMean) say('info', '<p>Showing the first ' + sols.length + ' of ' + a.result.count + '.</p>');
      if (a.result.count === 1 && hasMean) say('good', '<p><strong>Exactly one answer</strong>, which makes this a tidy puzzle.</p>');
    } else if (!a.uncertain) {
      var html = '';
      var rs = C.reasons(r.n, r.cond, r.o);
      if (rs.length) { html += '<h3 style="margin-top:0">Why</h3>'; rs.forEach(function (x) { html += '<p>' + esc(x) + '</p>'; }); }
      if (a.conflicts.length) {
        html += '<h3>The clash</h3><p>These clues can\'t all be true together: <strong>' + esc(conflictSentence(a.conflicts)) + '</strong>.';
        var minSize = Math.min.apply(null, a.conflicts.map(function (g) { return g.length; }));
        if (minSize >= 2) html += ' Each one is fine on its own' + (minSize > 2 ? ', and so is every smaller group of them' : '') + '. It is the <em>combination</em> that fails.';
        html += '</p>';
      }
      var fixes = [];
      keys.forEach(function (k) {
        if (keys.length < 2) return;
        var rest = {}; keys.forEach(function (j) { if (j !== k) rest[j] = r.cond[j]; });
        var rr = C.solve(r.n, rest, { zero: r.o.zero, ties: r.o.ties, keep: 0, maxNodes: 1000000 });
        if (rr.count > 0) fixes.push('drop the ' + STAT[k].name.toLowerCase() + ' clue' + (rest.mean !== undefined ? ' (' + (rr.aborted ? 'at least ' : '') + (rr.count === 1 ? '1 set works' : rr.count + ' sets work') + ')' : ''));
      });
      if (!r.o.zero) { var z = C.solve(r.n, r.cond, { zero: true, ties: r.o.ties, stopAfter: 1, keep: 0, maxNodes: 1000000 }); if (z.count > 0) fixes.push('allow a cat that caught 0 mice'); }
      if (!r.o.ties && r.cond.mode !== undefined) { var t = C.solve(r.n, r.cond, { zero: r.o.zero, ties: true, stopAfter: 1, keep: 0, maxNodes: 1000000 }); if (t.count > 0) fixes.push('allow tied modes (the two-most-common rule)'); }
      if (fixes.length) html += '<h3>Ways to rescue it</h3><ul>' + fixes.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>';
      if (html) say('', html);
    }
    var row = document.createElement('div'); row.className = 'aa-row';
    var b1 = document.createElement('button'); b1.type = 'button'; b1.className = 'aa-btn ghost small'; b1.textContent = 'Try to solve it myself';
    b1.addEventListener('click', function () { openInSolve(r.n, r.cond, r.o); });
    var b2 = document.createElement('button'); b2.type = 'button'; b2.className = 'aa-btn ghost small'; b2.textContent = 'Copy a link to this case';
    b2.addEventListener('click', function () { copyText(shareLink(r.n, r.cond, r.o), function (ok) { b2.textContent = ok ? 'Link copied!' : 'Couldn\'t copy. Copy the address after opening it in Solve.'; }); });
    row.appendChild(b1); row.appendChild(b2); out.appendChild(row);
  }

  /* =====================================================================
     MAP
     ===================================================================== */
  function initMap() {
    var nSel = $('map-n'), pSel = $('map-pair'), fSel = $('map-filter');
    for (var n = 3; n <= 7; n++) { var o = document.createElement('option'); o.value = n; o.textContent = n; if (n === 4) o.selected = true; nSel.appendChild(o); }
    C.MAP_PAIRS.forEach(function (p, i) {
      var o = document.createElement('option'); o.value = i; o.textContent = STAT[p[0]].name + ' (across) and ' + STAT[p[1]].name + ' (up)'; pSel.appendChild(o);
    });
    function fillFilter() {
      var p = C.MAP_PAIRS[+pSel.value]; fSel.innerHTML = '';
      var none = document.createElement('option'); none.value = ''; none.textContent = 'nothing else'; fSel.appendChild(none);
      KEYS.forEach(function (k) { if (k !== p[0] && k !== p[1]) { var o = document.createElement('option'); o.value = k; o.textContent = STAT[k].name + ' = ...'; fSel.appendChild(o); } });
      $('map-fval').style.display = 'none';
    }
    fillFilter();
    pSel.addEventListener('change', fillFilter);
    fSel.addEventListener('change', function () { var k = fSel.value; $('map-fval').style.display = k ? '' : 'none'; if (k) { $('map-fval').step = STAT[k].step === 'any' ? '0.5' : STAT[k].step; } });
    $('map-go').addEventListener('click', drawMap);
    setText($('map-note'), 'Mean and median are shown in steps of one half; mode and range in whole steps. Values go up to 10.');
  }

  function drawMap() {
    var n = +$('map-n').value, pair = C.MAP_PAIRS[+$('map-pair').value], fk = $('map-filter').value;
    var filter = {}; if (fk) { var fv = parseFloat($('map-fval').value); if (isFinite(fv)) filter[fk] = fv; }
    var o = { zero: $('map-zero').checked, ties: $('map-ties').checked };
    var out = $('map-out'); out.innerHTML = '<p class="aa-muted">Drawing the map&hellip;</p>';
    setTimeout(function () {
      var g = C.mapGrid(n, pair[0], pair[1], filter, o);
      var total = 0, poss = 0, uniq = 0, mx = 0;
      g.counts.forEach(function (row) { row.forEach(function (v) { total++; if (v > 0) poss++; if (v === 1) uniq++; if (v > mx) mx = v; }); });
      var html = '<div class="aa-keyrow"><span><strong>' + poss + '</strong> of ' + total + ' squares are possible; <strong>' + uniq + '</strong> have exactly one answer.</span>' +
        '<span class="aa-key"><i style="background:repeating-linear-gradient(45deg,#efefef,#efefef 4px,#e3e3e3 4px,#e3e3e3 8px)"></i>impossible</span>' +
        '<span class="aa-key"><i style="background:#009CDE"></i>exactly 1</span>' +
        '<span class="aa-key"><i style="background:rgba(243,110,36,.45)"></i>2 or more (darker = more)</span></div>';
      html += '<p class="aa-axis-title">' + STAT[pair[1]].name + ' &uarr; &nbsp; ' + STAT[pair[0]].name + ' &rarr;' + (fk ? ' &nbsp; with ' + STAT[fk].name.toLowerCase() + ' = ' + fmt(filter[fk]) : '') + ' &nbsp; (' + catsWord(n) + ')</p>';
      html += '<div class="aa-mapscroll"><table class="aa-map"><caption class="sr-only" style="position:absolute;left:-9999px">Number of solutions for each pair of clues</caption><thead><tr><th></th>';
      g.xs.forEach(function (x) { html += '<th scope="col">' + fmt(x) + '</th>'; });
      html += '</tr></thead><tbody>';
      for (var yi = g.ys.length - 1; yi >= 0; yi--) {
        html += '<tr><th scope="row">' + fmt(g.ys[yi]) + '</th>';
        for (var xi = 0; xi < g.xs.length; xi++) {
          var v = g.counts[yi][xi], cls = v === 0 ? 'z' : v === 1 ? 'one' : '', style = '';
          if (v > 1) { var a = 0.18 + 0.7 * Math.min(1, Math.log(v) / Math.max(Math.log(mx), 1)); style = ' style="background:rgba(243,110,36,' + a.toFixed(2) + ')"'; }
          var label = STAT[pair[0]].name + ' ' + fmt(g.xs[xi]) + ', ' + STAT[pair[1]].name + ' ' + fmt(g.ys[yi]) + ': ' + (v === 0 ? 'impossible' : plural(v, 'answer', 'answers'));
          html += '<td class="' + cls + '"' + style + '><button type="button" data-x="' + xi + '" data-y="' + yi + '" aria-label="' + esc(label) + '" title="' + esc(label) + '">' + (v === 0 ? '&ndash;' : v) + '</button></td>';
        }
        html += '</tr>';
      }
      html += '</tbody></table></div><p class="aa-muted">Click a square to open that case in the lab.</p>';
      out.innerHTML = html;
      out.querySelectorAll('button[data-x]').forEach(function (b) {
        b.addEventListener('click', function () {
          var cond = {}; cond[pair[0]] = g.xs[+b.dataset.x]; cond[pair[1]] = g.ys[+b.dataset.y];
          Object.keys(filter).forEach(function (k) { cond[k] = filter[k]; });
          labSet(n, cond, o); showTab('lab'); runLab(); window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });
    }, 30);
  }

  /* =====================================================================
     DESIGN
     ===================================================================== */
  var D = { vals: [2, 2, 3, 5, 8], reveal: { mean: true, mode: true, range: true } };
  function initDesign() {
    var rv = $('design-reveal'); rv.innerHTML = '';
    KEYS.forEach(function (k) {
      var l = document.createElement('label'); l.className = 'aa-check';
      l.innerHTML = '<input type="checkbox" id="rev-' + k + '"' + (D.reveal[k] ? ' checked' : '') + '> <span id="revl-' + k + '">' + STAT[k].name + '</span>';
      rv.appendChild(l);
      l.querySelector('input').addEventListener('change', function () { D.reveal[k] = this.checked; designReport(); });
    });
    $('design-add').addEventListener('click', function () { if (D.vals.length < 10) { D.vals.push(1 + Math.floor(Math.random() * 9)); renderDesignCats(); designReport(); } });
    $('design-remove').addEventListener('click', function () { if (D.vals.length > 2) { D.vals.pop(); renderDesignCats(); designReport(); } });
    $('design-zero').addEventListener('change', function () { renderDesignCats(); designReport(); });
    $('design-ties').addEventListener('change', designReport);
    renderDesignCats(); designReport();
  }
  function renderDesignCats() {
    var box = $('design-cats'); box.innerHTML = '';
    var lo = $('design-zero').checked ? 0 : 1;
    D.vals.forEach(function (v, i) {
      if (v < lo) D.vals[i] = lo;
      var d = document.createElement('div'); d.className = 'aa-catcard';
      d.innerHTML = cat(coatFor(i), 'neutral') + '<label for="dc-' + i + '">Cat ' + (i + 1) + '</label><input type="number" inputmode="numeric" min="' + lo + '" step="1" id="dc-' + i + '" value="' + D.vals[i] + '" aria-label="Secret mice for cat ' + (i + 1) + '">';
      box.appendChild(d);
      d.querySelector('input').addEventListener('input', function () {
        var x = parseInt(this.value, 10); if (isFinite(x) && x >= lo && x <= 99) { D.vals[i] = x; designReport(); }
      });
    });
  }
  function designReport() {
    var out = $('design-out'), o = { zero: $('design-zero').checked, ties: $('design-ties').checked };
    var st = C.stats(D.vals.slice().sort(function (a, b) { return a - b; }));
    var modeVal = (st.maxc >= 2 && (o.ties || st.top.length === 1)) ? st.top[0] : null;
    KEYS.forEach(function (k) {
      var txt = STAT[k].name + ' (' + (k === 'mode' ? (modeVal === null ? 'none' : modeVal) : fmt(st[k])) + ')';
      setText($('revl-' + k), txt);
      $('rev-' + k).disabled = k === 'mode' && modeVal === null;
      if ($('rev-' + k).disabled) { $('rev-' + k).checked = false; D.reveal[k] = false; }
    });
    var reveal = KEYS.filter(function (k) { return D.reveal[k]; });
    if (!reveal.length) { out.innerHTML = '<div class="aa-msg info"><p>Tick at least one clue to reveal.</p></div>'; return; }
    if (reveal.indexOf('mean') === -1 && D.vals.length > 7) { out.innerHTML = '<div class="aa-msg info"><p>Without revealing the mean, use 7 cats or fewer so the check can finish.</p></div>'; return; }
    var rep = C.designReport(D.vals, reveal, { zero: o.zero, ties: o.ties, maxNodes: 1500000 });
    var hasMean = rep.cond.mean !== undefined, n = rep.n, cnt = rep.result.count;
    var html = '<h3>Your case</h3><p class="aa-sentence">' + esc(sentence(n, rep.cond)) + '</p>';
    html += '<h3>How good a puzzle is it?</h3>';
    if (hasMean) {
      if (cnt === 1) html += '<div class="aa-msg good"><p><strong>Exactly one answer.</strong> A tidy puzzle: anyone who solves it has found your secret set.</p></div>';
      else html += '<div class="aa-msg info"><p><strong>' + (rep.result.aborted ? 'At least ' : '') + cnt + ' different answers.</strong> Your secret set is one of them. Fine for an investigation, but tell solvers to find them all, or add a clue to narrow it down.</p></div>';
    } else {
      html += '<div class="aa-msg info"><p>Without the mean as a clue, a solver can make the numbers as large as they like, so there are lots of answers. ' + (cnt === 1 ? 'In this lucky case there is exactly one.' : '') + '</p></div>';
    }
    if (rep.redundant.length) html += '<div class="aa-msg hint"><p><strong>Unneeded clue:</strong> the ' + rep.redundant.map(function (k) { return STAT[k].name.toLowerCase(); }).join(' and ') + ' adds nothing. The puzzle has the same answers without it.</p></div>';
    else if (reveal.length > 1 && hasMean) html += '<div class="aa-msg good"><p>Every clue earns its place: drop any one and the set of answers changes.</p></div>';
    rep.notes.forEach(function (t) { html += '<div class="aa-msg hint"><p>' + esc(t) + '</p></div>'; });
    if (rep.result.solutions.length) {
      html += '<h3>The answers</h3>';
      var ul = document.createElement('ul'); ul.className = 'aa-sets';
      rep.result.solutions.slice(0, 12).forEach(function (s) { var li = document.createElement('li'); if (s.join() === rep.secret.join()) li.className = 'mine'; li.textContent = s.join(', '); ul.appendChild(li); });
      html += ul.outerHTML;
      if (rep.result.count > 12) html += '<p class="aa-muted">Showing 12. Your secret set is highlighted if it is in the list.</p>';
    }
    html += '<div class="aa-row"><button class="aa-btn small" id="dz-solve" type="button">Solve it (as a classmate would)</button><button class="aa-btn ghost small" id="dz-lab" type="button">Open in the lab</button><button class="aa-btn ghost small" id="dz-copy" type="button">Copy a link to this case</button></div>';
    out.innerHTML = html;
    $('dz-solve').addEventListener('click', function () { openInSolve(n, rep.cond, o); });
    $('dz-lab').addEventListener('click', function () { labSet(n, rep.cond, o); showTab('lab'); runLab(); });
    $('dz-copy').addEventListener('click', function () { var b = this; copyText(shareLink(n, rep.cond, o), function (ok) { b.textContent = ok ? 'Link copied!' : 'Couldn\'t copy. Open it in Solve and copy the address.'; }); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
