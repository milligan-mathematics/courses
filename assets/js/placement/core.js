/* Math placement assessment: shared helpers and the question registry.
   Loaded first, in the browser (window.PL) and in node (module.exports), so the bank, the engine,
   the tests and the simulator all use the same code.

   A question is a generator: PL.def({ id, strand, level, skill, gen(R) }) where gen gets a seeded
   random source R and returns one instance:
     { q:   'HTML with $TeX$',                    the question
       ans: 8 | '3/4' | '-2.5',                   typed answer, exact; any equivalent form is accepted
       form: 'lowest' | 'decimal',                optional: the answer must be in this form
       hint: 'Enter a fraction like 3/4.',        optional, shown under the box
       pre: '\\$', post: 'cm',                    optional labels either side of the box
     }
   or, for multiple choice,
     { q, choices: [correct, wrong, wrong, wrong] }   (the page shuffles them)
   plus optional fig: '<svg ...>' with alt: 'what the figure shows, for screen readers'.
   Levels: 1 basic, 2 below the bar, 3 at the bar, 4 above the bar, 5 stretch (see DESIGN.md). */
(function (root) {
  'use strict';
  var PL = root.PL || (root.PL = {});

  PL.STRANDS = [
    { key: 'int', name: 'Integers and order of operations' },
    { key: 'frac', name: 'Fractions, decimals and percents' },
    { key: 'ratio', name: 'Ratios, rates and proportions' },
    { key: 'alg', name: 'Expressions and linear equations' },
    { key: 'data', name: 'Graphs, tables and data' },
    { key: 'geom', name: 'Measurement and geometry' }
  ];
  PL.STRAND_INDEX = {};
  PL.STRANDS.forEach(function (s, i) { PL.STRAND_INDEX[s.key] = i; });

  PL.items = [];
  var ids = {};
  PL.def = function (spec) {
    var bad = !spec || typeof spec.id !== 'string' || ids[spec.id] || !(spec.strand in PL.STRAND_INDEX) ||
      !(spec.level >= 1 && spec.level <= 5) || typeof spec.skill !== 'string' || typeof spec.gen !== 'function';
    if (bad) throw new Error('bad question definition: ' + (spec && spec.id));
    ids[spec.id] = true;
    PL.items.push(spec);
  };

  /* ---------------------------------------------------------------- random numbers */
  PL.rng = function (seed) {   // mulberry32
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };
  PL.hash = function (a, b) {   // mix two integers into a seed
    var h = Math.imul((a >>> 0) ^ 0x9E3779B9, 0x85EBCA6B) ^ Math.imul((b >>> 0) + 0x632BE5AB, 0xC2B2AE35);
    h ^= h >>> 16; h = Math.imul(h, 0x7FEB352D); h ^= h >>> 15;
    return h >>> 0;
  };
  PL.R = function (seed) {
    var r = PL.rng(seed);
    var R = {
      rand: r,
      int: function (lo, hi) { return lo + Math.floor(r() * (hi - lo + 1)); },
      nz: function (lo, hi) { var x; do { x = R.int(lo, hi); } while (x === 0); return x; },
      sign: function () { return r() < 0.5 ? -1 : 1; },
      chance: function (p) { return r() < p; },
      pick: function (arr) { return arr[Math.floor(r() * arr.length)]; },
      shuffle: function (arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
        return a;
      },
      distinct: function (n, lo, hi) {   // n different integers in [lo, hi]
        var out = [];
        while (out.length < n) { var x = R.int(lo, hi); if (out.indexOf(x) < 0) out.push(x); }
        return out;
      }
    };
    return R;
  };

  /* Build one instance of question `it` from `seed`. Retries are part of the generator's job; this
     just records which question and seed made it, so any logged answer can be rebuilt exactly. */
  PL.make = function (it, seed) {
    var inst = it.gen(PL.R(seed));
    inst.id = it.id; inst.seed = seed;
    inst.type = inst.choices ? 'mc' : 'num';
    return inst;
  };

  /* ---------------------------------------------------------------- number formatting */
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; }
  PL.gcd = gcd;
  PL.lcm = function (a, b) { return Math.abs(a * b) / gcd(a, b); };
  PL.reduce = function (n, d) {
    if (d < 0) { n = -n; d = -d; }
    var g = gcd(n, d) || 1;
    return [n / g, d / g];
  };
  /* n/d in lowest terms as an answer string: '3/4', '-5', '7/2' */
  PL.q = function (n, d) {
    var r = PL.reduce(n, d === undefined ? 1 : d);
    return r[1] === 1 ? String(r[0]) : r[0] + '/' + r[1];
  };
  /* n/d in lowest terms as TeX: '\frac{3}{4}', '-\frac{1}{2}', '5' */
  PL.tq = function (n, d) {
    var r = PL.reduce(n, d === undefined ? 1 : d);
    if (r[1] === 1) return String(r[0]);
    return (r[0] < 0 ? '-' : '') + '\\frac{' + Math.abs(r[0]) + '}{' + r[1] + '}';
  };
  /* n/d as a mixed number in TeX, e.g. 7/2 -> '3\frac{1}{2}' */
  PL.tmixed = function (n, d) {
    var r = PL.reduce(n, d), s = r[0] < 0 ? '-' : '', a = Math.abs(r[0]);
    if (r[1] === 1) return s + a;
    var w = Math.floor(a / r[1]), f = a % r[1];
    return s + (w ? w : '') + '\\frac{' + f + '}{' + r[1] + '}';
  };
  /* An integer count of 10^-places as an exact decimal string: dec(347, 2) = '3.47', dec(-5, 1) = '-0.5' */
  PL.dec = function (units, places) {
    places = places || 0;
    var s = units < 0 ? '-' : '', a = String(Math.abs(units));
    if (!places) return s + a;
    while (a.length <= places) a = '0' + a;
    var whole = a.slice(0, a.length - places), frac = a.slice(a.length - places).replace(/0+$/, '');
    return s + whole + (frac ? '.' + frac : '');
  };
  /* Thousands separators: comma(12000) = '12,000' (plain text); in TeX use tcomma -> '12{,}000' */
  PL.comma = function (n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); };
  PL.tcomma = function (n) { return PL.comma(n).replace(/,/g, '{,}'); };
  /* Money from cents, for question text outside math: '\$4.20' (MathJax shows a plain $) */
  PL.money = function (cents) {
    var d = PL.dec(cents, 2);
    if (/\.\d$/.test(d)) d += '0';
    return '\\$' + PL.comma(d.split('.')[0]) + (d.indexOf('.') >= 0 ? '.' + d.split('.')[1] : '');
  };
  /* Signed number for TeX with negatives in parentheses where needed: paren(-3) = '(-3)' */
  PL.paren = function (x) { return String(x).charAt(0) === '-' ? '(' + x + ')' : String(x); };

  /* ---------------------------------------------------------------- figures */
  /* Wrap SVG content. Strokes and text use currentColor so the figure follows the page's text color. */
  PL.svg = function (w, h, inner, maxWidth) {
    return '<svg class="pl-fig" viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" style="max-width:' + (maxWidth || w) +
      'px" role="img" aria-hidden="true" font-family="inherit" font-size="14" fill="none" stroke="currentColor">' + inner + '</svg>';
  };
  PL.esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };

  if (typeof module !== 'undefined' && module.exports) module.exports = PL;
})(typeof window !== 'undefined' ? window : globalThis);
