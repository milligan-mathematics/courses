/* MATH 307 map: every section's Pólya problem(s) and practice skills, colored by this browser's progress.
   Reads window.MAP (from practice/map_build.py) and the localStorage keys the other pages write
   (polya:<slug> = {step, ...}; practice:<section> = {<skill>: {streak, best, done}}). Nothing leaves the browser. */
(function () {
  'use strict';
  var D = window.MAP, root = document.getElementById('polya-app');
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function get(key) { try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch (e) { return null; } }

  function problemState(p) {
    var s = get('polya:' + p.slug);
    var step = typeof s === 'number' ? s : s && s.step || 0;
    return step > p.steps ? 'done' : step > 0 ? 'started' : 'new';
  }
  var practice = {};
  D.sections.forEach(function (sec) { practice[sec.id] = get('practice:' + sec.id) || {}; });
  function skillState(sec, sk) {
    var r = practice[sec][sk];
    return !r ? 'new' : r.best >= 3 ? 'solid' : r.done ? 'started' : 'new';
  }
  var skillSection = {};
  D.sections.forEach(function (sec) { sec.skills.forEach(function (sk) { skillSection[sk.id] = sec.id; }); });
  function solid(id) { var s = skillSection[id]; return s ? skillState(s, id) === 'solid' : true; }

  // What next: the first section (in course order) with an unfinished problem or a skill that isn't solid yet.
  var next = null;
  D.sections.some(function (sec) {
    var p = sec.problems.filter(function (x) { return problemState(x) !== 'done'; })[0];
    var k = sec.skills.filter(function (x) { return x.built && skillState(sec.id, x.id) !== 'solid'; })[0];
    if (p) next = { sec: sec, label: 'the Pólya problem “' + p.title + '”', url: p.url };
    else if (k) next = { sec: sec, label: 'practice on “' + k.title + '”', url: sec.practice };
    return !!next;
  });

  var head = el('section', 'pl-card');
  head.appendChild(el('h1', 'pl-title', 'Your MATH 307 map'));
  head.appendChild(el('p', null, 'Each section has a Pólya problem (understand, plan, carry out, look back) and short practice sets '
    + 'for its skills. Colors show your progress in <em>this browser</em>; nothing is sent anywhere.'));
  head.appendChild(el('p', 'mp-legend', '<span class="mp-chip mp-done">done / solid</span> <span class="mp-chip mp-started">started</span> '
    + '<span class="mp-chip mp-new">not yet</span>'));
  if (next) {
    head.appendChild(el('div', 'pl-goal', '<strong>Next up:</strong> ' + next.sec.id + ' ' + next.sec.title + ', '
      + '<a href="' + next.url + '">' + next.label + '</a>.'));
  }
  root.appendChild(head);

  var chapter = null, card;
  D.sections.forEach(function (sec) {
    var ch = sec.id.split('.')[0];
    if (ch !== chapter) {
      chapter = ch;
      card = el('section', 'pl-card mp-chapter');
      card.appendChild(el('h2', 'pl-sub', 'Chapter ' + ch + ': ' + (D.chapters[ch] || '')));
      root.appendChild(card);
    }
    var row = el('div', 'mp-row');
    row.appendChild(el('div', 'mp-sec', '<strong>' + sec.id + '</strong> ' + sec.title));
    var items = el('div', 'mp-items');
    sec.problems.forEach(function (p) {
      var st = problemState(p);
      items.appendChild(el('a', 'mp-chip mp-' + (st === 'done' ? 'done' : st), '&#9998; ' + p.title));
      items.lastChild.href = p.url;
    });
    sec.skills.forEach(function (sk) {
      var st = sk.built ? skillState(sec.id, sk.id) : 'none';
      var needs = (sk.requires || []).filter(function (r) { return !solid(r); });
      var chip = el(sk.built ? 'a' : 'span', 'mp-chip mp-skill mp-' + (st === 'solid' ? 'done' : st), sk.title);
      if (sk.built) chip.href = sec.practice;
      if (needs.length && st !== 'solid') chip.title = 'Builds on: ' + needs.map(function (r) { return D.titles[r] || r; }).join(', ');
      items.appendChild(chip);
    });
    row.appendChild(items);
    card.appendChild(row);
  });
  window.MapPage = { next: next };
})();
