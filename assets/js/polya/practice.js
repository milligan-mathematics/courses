/* Skill practice for MATH 307: fresh problems per skill with instant feedback, built on the Pólya player's step
   renderers (window.PolyaKit from polya.js). Reads window.PRACTICE (exported by practice_build.py):
   { section, title, intro, links: [{label, url}], skills: [{id, title, mastery, book, items: [{statement, steps}]}] }.
   A skill is "solid" after three problems in a row right on the first try; progress lives in this browser only. */
(function () {
  'use strict';
  var D = window.PRACTICE, K = window.PolyaKit;
  D.links = (D.links || []).concat([{ label: 'Your MATH 307 map', url: 'map.html' }]);
  var root = document.getElementById('polya-app');
  var KEY = 'practice:' + D.section;
  var NEED = 3;
  var state = load(), view = { skill: null };

  function load() {
    try { var v = JSON.parse(localStorage.getItem(KEY) || '{}'); return v && typeof v === 'object' ? v : {}; }
    catch (e) { return {}; }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage blocked: fine */ } }
  function rec(id) { return state[id] || (state[id] = { streak: 0, best: 0, done: 0, seen: [] }); }

  function dots(r) {
    var s = '';
    for (var i = 0; i < NEED; i++) s += '<span class="pr-dot' + (i < Math.min(r.streak, NEED) ? ' pr-on' : '') + '"></span>';
    return '<span class="pr-dots" aria-label="' + Math.min(r.streak, NEED) + ' of ' + NEED + ' in a row">' + s + '</span>';
  }

  function renderHome() {
    var head = K.el('section', 'pl-card');
    head.appendChild(K.el('h1', 'pl-title', D.section + ' Practice: ' + D.title));
    head.appendChild(K.el('p', null, D.intro || ('Fresh problems every time, with feedback on every answer. Get ' + NEED
      + ' in a row right on the first try and a skill is <strong>solid</strong>. Nothing here is graded; it&rsquo;s for building fluency.')));
    if (D.links && D.links.length) {
      head.appendChild(K.el('p', 'pl-connects', D.links.map(function (l) {
        return '<a href="' + l.url + '" target="_blank" rel="noopener">' + l.label + '</a>';
      }).join(' &middot; ')));
    }
    root.appendChild(head);
    D.skills.forEach(function (sk) {
      var r = rec(sk.id), card = K.el('section', 'pl-card pr-skill');
      var top = K.el('div', 'pr-skill-top');
      top.appendChild(K.el('h2', 'pl-sub', sk.title));
      top.appendChild(K.el('span', 'pr-status' + (r.best >= NEED ? ' pr-solid' : ''),
        (r.best >= NEED ? 'Solid' : r.done ? 'Practicing' : 'Not started') + ' ' + dots(r)));
      card.appendChild(top);
      card.appendChild(K.el('p', 'pr-mastery', sk.mastery));
      if (sk.book) card.appendChild(K.el('p', 'pl-connects', 'In the book: ' + sk.book));
      card.appendChild(K.button('pl-next pr-go', r.done ? 'Practice again &rarr;' : 'Practice &rarr;', function () { open(sk.id); }));
      root.appendChild(card);
    });
  }

  function pick(sk) {
    var r = rec(sk.id), n = sk.items.length;
    if (r.seen.length >= n) r.seen = [];
    var free = [];
    for (var i = 0; i < n; i++) if (r.seen.indexOf(i) < 0) free.push(i);
    var k = free[Math.floor(Math.random() * free.length)];
    r.seen.push(k); save();
    return k;
  }

  function open(id) { view.skill = id; view.item = null; render(); }

  function renderSkill() {
    var sk = D.skills.filter(function (x) { return x.id === view.skill; })[0], r = rec(sk.id);
    if (view.item == null) view.item = pick(sk);
    var item = sk.items[view.item];
    var card = K.el('section', 'pl-card');
    var top = K.el('div', 'pr-skill-top');
    top.appendChild(K.el('p', 'pl-phase pl-c1', D.section + ' Practice &middot; ' + sk.title));
    top.appendChild(K.el('span', 'pr-status', dots(r)));
    card.appendChild(top);
    card.appendChild(K.el('div', 'pl-statement pl-static', item.statement));
    root.appendChild(card);
    var i = 0, clean = true;
    (function nextPart() {
      if (i >= item.steps.length) return finish(clean);
      var q = item.steps[i++], part = K.el('div', 'pl-part');
      if (q.text) part.appendChild(K.questionHTML(q.text));
      card.appendChild(part);
      K.RENDER[q.type](q, part, { done: function (result, firstTry) {
        if (result !== 'right' || firstTry === false) clean = false;
        nextPart();
      } });
      K.typeset(part);  // after the renderer, so its labels and choices are typeset too
    })();
    function finish(ok) {
      r.done += 1;
      r.streak = ok ? r.streak + 1 : 0;
      var was = r.best;
      r.best = Math.max(r.best, r.streak);
      save();
      top.querySelector('.pr-status').innerHTML = dots(r);
      var msg = ok
        ? (r.streak >= NEED && was < NEED ? '<strong>That’s ' + NEED + ' in a row. This skill is solid.</strong> Come back in a few days for a quick re-check; that’s what makes it stick.'
           : r.streak >= NEED ? 'Still solid: ' + r.streak + ' in a row.'
           : 'First try. ' + (NEED - r.streak) + ' more in a row and this skill is solid.')
        : 'That one took more than one try, so the streak starts over. That’s normal: the next problem is a fresh chance.';
      K.show(card, K.note(ok ? 'pl-ok' : 'pl-hintb', '', msg));
      var next = K.button('pl-next', 'Next problem &rarr;', function () { view.item = null; render(); });
      card.appendChild(next);
      card.appendChild(K.button('pl-link', 'Back to all skills', function () { view.skill = null; render(); }));
      next.focus({ preventScroll: true });
    }
    card.insertBefore(K.button('pl-link pr-back', '&larr; All skills', function () { view.skill = null; render(); }), card.firstChild);
  }

  function render() {
    if (window.MathJax && MathJax.typesetClear) MathJax.typesetClear([root]);
    root.innerHTML = '';
    if (view.skill) renderSkill(); else renderHome();
    K.typeset(root);
    window.scrollTo(0, 0);
  }

  window.PracticePlayer = { open: open, state: function () { return state; }, view: view, render: render };
  render();
})();
