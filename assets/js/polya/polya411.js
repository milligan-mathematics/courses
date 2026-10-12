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
  /** A function of one leading variable (n or x) and the parameters, from build.py's JavaScript: f(v, env). */
  function fnOf(q, lead, body) {
    var names = q.pnames || Object.keys(q.params || {});
    var f = new Function(lead, names.join(','), '"use strict"; return (' + body + ');');
    return function (v, env) { return f.apply(null, [v].concat(names.map(function (k) { return env[k]; }))); };
  }
  function seqFn(q) { return fnOf(q, 'n', q.seq_js); }
  function valFn(q, body) { var f = fnOf(q, '_', body); return function (env) { return f(0, env); }; }
  function bases(q) {  // one environment per parameter setting; several parameters are zipped (build.py checks the lengths)
    var keys = Object.keys(q.params || {});
    if (!keys.length) return [{}];
    return q.params[keys[0]].map(function (_, i) { var e = {}; keys.forEach(function (k) { e[k] = q.params[k][i]; }); return e; });
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
      if (c > 0 && c < x * (1 - 1e-7)) out.push(c);  // a challenge within 1e-7 of a term is a tie, decided by rounding
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
    if (n0 > 1e4 && t <= env.eps * (1 + 1e-6)) return null;  // past 10^4 a miss this small is floating point (build.py says why)
    return { kind: t > env.eps * (1 + 1e-12) ? 'strict' : 'equal', eps: env.eps, env: env, N: v, n0: n0, term: t };
  }
  function adversary(q, N) {
    var s0 = seqFn(q), fails = [];
    bases(q).forEach(function (base) {
      var s = function (n) { return Math.abs(s0(n, base)); }, cands = [];
      kset(s).forEach(function (k) {
        var x = s(k);
        niceBelow(x).forEach(function (c) { cands.push(c); });
        cands.push(x * 0.9, x * 0.999, Math.sqrt(x * s(k + 1)));
      });
      [s(1) * 1.5, s(1) * 10, 2, 5, 20, 1000].forEach(function (c) { cands.push(c); });
      if (q.eps_below) cands = cands.filter(function (c) { return c < q.eps_below; });  // the step takes 0 < eps < eps_below
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
    return Object.keys(env).filter(function (k) { return k !== 'eps' && k !== 'N'; })
      .map(function (k) { return ', \\(' + k + ' = ' + tex(env[k]) + '\\)'; }).join('');
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

  // ---------- escN: the student names an n past N that escapes the band; the opponent names every N ----------
  /** The N's the opponent names (build.py's opponent_Ns): every whole number to 400, then every 8% to 10^9; fractions too
      when the step allows real N. */
  function opponentNs(real) {
    var Ns = [], k;
    for (k = 1; k <= 400; k++) Ns.push(k);
    for (var x = 400; x < 1e9;) { x *= 1.08; Ns.push(Math.floor(x)); }
    if (real) [0, 1, 2, 3, 6, 7, 10, 41, 99, 1000, 123456].forEach(function (w) { [0.25, 0.5, 0.9].forEach(function (f) { Ns.push(w + f); }); });
    if (real) [0, -0.5, -3, -20, -50.5, -1000].forEach(function (w) { Ns.push(w); });  // any real N, negative ones too
    return Ns.sort(function (a, b) { return a - b; });
  }
  function escape(q, nOf) {
    var s0 = seqFn(q), L = valFn(q, q.L_js), E = valFn(q, q.eps_js), fails = [];
    bases(q).forEach(function (base) {
      var e = E(base), l = L(base);
      opponentNs(q.real_N).forEach(function (N) {
        var v, f = { N: N, env: base, eps: e, L: l };
        try { v = nOf(Object.assign({ N: N }, base)); } catch (x) { v = NaN; }
        f.v = v;
        if (typeof v !== 'number' || !isFinite(v)) { f.kind = 'nan'; return fails.push(f); }
        var k = Math.round(v);
        if (Math.abs(v - k) > 1e-6) { f.kind = 'notint'; return fails.push(f); }
        if (k < 1) { f.kind = 'noterm'; return fails.push(f); }
        if (k <= N) { f.kind = 'notpast'; return fails.push(f); }
        f.term = s0(k, base); f.d = Math.abs(f.term - l);
        if (!(f.d >= e * (1 - 1e-12))) { f.kind = 'inside'; fails.push(f); }
      });
    });
    if (!fails.length) return null;
    // report the smallest N that beats it, a whole one if there is one
    fails.sort(function (a, b) { return (a.N % 1 ? 1 : 0) - (b.N % 1 ? 1 : 0) || a.N - b.N; });
    return fails[0];
  }
  function describeEsc(q, f) {
    var head = 'Your opponent names \\(N = ' + tex(f.N) + '\\)' + paramText(f.env) + '. ';
    if (f.kind === 'nan') return head + 'Your formula doesn’t give a number there, so it names no term. You need an answer for every \\(N\\).';
    if (f.kind === 'notint') return head + 'Your formula gives \\(n = ' + tex(f.v) + '\\), which isn’t a whole number, so there is no term with that index.'
      + (f.N % 1 ? ' (Here \\(N\\) itself isn’t whole, so think about rounding it up first.)' : '');
    if (f.kind === 'noterm') return head + 'Your formula gives \\(n = ' + tex(f.v) + '\\), and the sequence has no term there: indices start at \\(1\\).';
    if (f.kind === 'notpast') return head + 'Your formula gives \\(n = ' + tex(f.v) + '\\), which is not past \\(N\\). The term that escapes has to come '
      + '<em>after</em> \\(N\\): that’s the “there is an \\(n > N\\)” in the negation.';
    var k = Math.round(f.v), exact = Math.abs(f.term - Number(f.term.toPrecision(4))) < 1e-12 * Math.max(1, Math.abs(f.term));
    var term = q.term_tex ? '\\(' + q.term_tex.replace(/#/g, String(k)) + '\\)' : 'the term';
    return head + 'Your formula gives \\(n = ' + tex(k) + '\\), and ' + term + ' is ' + (exact ? '' : 'about ') + '\\(' + tex(f.term) + '\\). '
      + 'That is within \\(\\varepsilon = ' + (q.eps_tex || tex(f.eps)) + '\\) of \\(' + (q.L_tex || tex(f.L)) + '\\): inside the band, so it doesn’t escape.';
  }

  // ---------- epsDelta: the student names delta; the page hunts for an x within delta where f escapes ----------
  var TS = (function () {  // build.py's TS: just inside the edge, and a grid; both sides of a for each
    var t = [1 - 1e-9, 0.9999, 0.999, 0.99, 0.95, 0.9, 0.75, 0.5, 0.3, 0.1, 0.03, 0.01, 1e-3, 1e-5], seen = {};
    for (var k = 1; k < 97; k++) t.push(k / 97);
    return t.filter(function (x) { if (seen[x]) return false; seen[x] = true; return true; }).sort(function (a, b) { return a - b; });
  })();
  var EPS_CHALLENGES = [10, 5, 2, 1, 0.9, 0.5, 0.3, 0.2, 0.1, 0.05, 0.03, 0.01, 0.005, 1e-3, 1e-4, 1e-5, 1e-6];
  function deltaHunt(q, D) {
    var f = fnOf(q, 'x', q.f_js), at = valFn(q, q.at_js), Lf = q.L_js ? valFn(q, q.L_js) : null;
    var lo = q.domain && q.domain[0], hi = q.domain && q.domain[1], fails = [];
    bases(q).forEach(function (base) {
      var a = at(base), target = Lf ? Lf(base) : f(a, base);
      EPS_CHALLENGES.forEach(function (eps) {
        var d;
        try { d = D(Object.assign({ eps: eps }, base)); } catch (x) { d = NaN; }
        if (!(typeof d === 'number' && isFinite(d) && d > 0)) return fails.push({ kind: 'nonpos', eps: eps, env: base, d: d });
        for (var i = 0; i < TS.length; i++) {
          var xs = [a - TS[i] * d, a + TS[i] * d];
          for (var j = 0; j < 2; j++) {
            var x = xs[j];
            if ((lo !== null && lo !== undefined && x < lo) || (hi !== null && hi !== undefined && x > hi)) continue;
            var gap = Math.abs(f(x, base) - target);
            if (!(gap < eps)) return fails.push({ kind: 'escape', eps: eps, env: base, d: d, x: x, a: a, gap: gap, fx: f(x, base), target: target });
          }
        }
      });
    });
    if (!fails.length) return null;
    var order = { nonpos: 0, escape: 1 };
    function score(f) { return Math.abs(Math.log10(f.eps) - Math.log10(0.1)); }
    fails.sort(function (a, b) { return order[a.kind] - order[b.kind] || score(a) - score(b); });
    fails[0].onlyBig = fails.every(function (f) { return f.eps >= 1; });
    return fails[0];
  }
  function describeDelta(q, f) {
    var head = 'Challenge: \\(\\varepsilon = ' + tex(f.eps) + '\\)' + paramText(f.env) + '. ';
    if (f.kind === 'nonpos') return head + (typeof f.d === 'number' && isFinite(f.d) ? 'Your formula gives \\(\\delta = ' + tex(f.d) + '\\), but \\(\\delta\\) has to be positive.'
      : 'Your formula doesn’t give a real number there, so it names no \\(\\delta\\).') + ' The definition needs a \\(\\delta > 0\\) for every \\(\\varepsilon > 0\\).';
    var lim = q.L_js ? '\\(L\\)' : '\\(f(a)\\)', fa = q.L_js ? 'L' : 'f(a)';
    var x = Number(f.x.toPrecision(6)), exact = Math.abs(f.gap - Number(f.gap.toPrecision(4))) < 1e-12 * Math.max(1, f.gap);
    var big = f.onlyBig ? ' <em>Every challenge below \\(1\\) was met, though.</em> If your proof says “we may assume \\(\\varepsilon < 1\\)”, '
      + 'your \\(\\delta\\) has to keep that promise, for example by using \\(\\min(\\varepsilon, 1)\\) in place of \\(\\varepsilon\\).' : '';
    return head + 'Your formula gives \\(\\delta = ' + tex(f.d) + '\\). But \\(x = ' + tex(x) + '\\) is within \\(\\delta\\) of \\(a = ' + tex(f.a) + '\\)'
      + ', and there \\(|f(x) - ' + fa + '| \\) is ' + (exact ? '' : 'about ') + '\\(' + tex(f.gap) + '\\), which is not less than '
      + '\\(\\varepsilon\\): \\(f(x)\\) escapes the band around ' + lim + '.' + big;
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
  /** The three typed steps differ in what the student names, what it may use, and how the page attacks it. */
  var KINDS = {
    epsN: { name: 'N', lead: 'eps', label: 'N =', samples: [0.37, 0.051, 0.0063, 2.3], button: 'Test my N',
      aria: 'Your N, as a formula in epsilon', run: function (q, F) { return adversary(q, F); }, describe: describe,
      before: 'n', beforeMsg: '\\(N\\) is chosen before \\(n\\)',
      syntax: 'Type ε as <code>eps</code>. Formulas look like <code>5*sqrt(eps)</code>, <code>3*eps^4</code> or <code>max(3, eps)</code>. '
        + 'Any \\(N\\) that works is right: the page tests yours against the definition.' },
    escN: { name: 'n', lead: 'N', label: 'n =', samples: [3, 10, 57, 1000], button: 'Test my n',
      aria: 'Your n, as a formula in N', run: function (q, F) { return escape(q, F); }, describe: describeEsc,
      syntax: 'Type a formula in <code>N</code>, like <code>3*N + 2</code> or <code>N^2 + 5</code>. Any \\(n\\) that works is right: '
        + 'the page names every \\(N\\) it can think of and checks your term.' },
    epsDelta: { name: '\\delta', lead: 'eps', label: '\\delta =', samples: [0.37, 0.051, 0.0063, 2.3], button: 'Test my δ',
      aria: 'Your delta, as a formula in epsilon', run: function (q, F) { return deltaHunt(q, F); }, describe: describeDelta,
      before: 'x', beforeMsg: '\\(\\delta\\) is chosen before \\(x\\)',
      syntax: 'Type ε as <code>eps</code>. Formulas look like <code>eps^3/7</code>, <code>2*eps^2</code> or <code>min(9, eps^4)</code>. '
        + 'Any \\(\\delta\\) that works is right: the page tests yours against the definition.' },
  };
  function matchWrong(q, tree) {  // a known slip, recognized by its values (NaN matches NaN, Infinity matches Infinity)
    var kind = KINDS[q.type], envs = [];
    bases(q).slice(0, 3).forEach(function (base) {
      kind.samples.forEach(function (v) { var e = Object.assign({}, base); e[kind.lead] = v; envs.push(e); });
    });
    function vals(t) { return envs.map(function (e) { try { return PM.evalExpr(t, e); } catch (x) { return NaN; } }); }
    var mine = vals(tree);
    return (q.wrong || []).filter(function (w) {
      var theirs = vals(PM.parseExpr(w.f, q.vars));
      return theirs.every(function (v, i) {
        var w = mine[i];
        return isFinite(v) && isFinite(w) ? PM.close(v, w) : v === w || (isNaN(v) && isNaN(w));
      });
    })[0];
  }
  /** What a student typed, read as a formula: ε (any spelling) becomes eps, and a leading "N =", "n =" or "δ =" goes. */
  function normalizeFor(q, s) {
    var t = String(s).replace(/^\s*(δ|delta)\s*=\s*/i, '');
    return q.type === 'epsN' ? normalize(t) : t.replace(/[εϵ]/g, 'eps').replace(/epsilon/gi, 'eps');
  }
  function usesBefore(q, src) {  // the thing named after this one (n for N, x for delta) appearing in the formula
    var kind = KINDS[q.type];
    if (!kind.before) return false;
    var bare = src.replace(/\b(ln|sin|min|ceil|cos|tan|exp|max|abs|sqrt|floor|log)\b/g, '');
    return q.type === 'epsN' ? /(^|[^a-z])n([^a-z]|$)/i.test(bare) : new RegExp('(^|[^A-Za-z])' + kind.before + '([^A-Za-z]|$)').test(bare);
  }
  function renderTyped(q, box, opts) {
    var kind = KINDS[q.type], tries = 0, finished = false;
    var row = el('div', 'pl-expr-row');
    row.appendChild(el('span', 'pl-mat-label', '\\(' + (q.label || kind.label) + '\\)'));
    var inp = document.createElement('input');
    inp.type = 'text'; inp.autocomplete = 'off'; inp.spellcheck = false; inp.className = 'pl-expr';
    inp.setAttribute('autocapitalize', 'off'); inp.setAttribute('aria-label', kind.aria);
    row.appendChild(inp); box.appendChild(row);
    var preview = el('div', 'pl-preview'); preview.setAttribute('aria-live', 'polite'); box.appendChild(preview);
    box.appendChild(el('p', 'pl-hint', q.syntax || kind.syntax));
    var check = button('pl-check-btn', kind.button, attempt);
    box.appendChild(check);
    if (!opts.cold) K.hintLadder(q, box);
    var out = el('div', 'pl-msg'); box.appendChild(out);
    var timer = null;
    inp.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        var src = normalizeFor(q, inp.value);
        if (!src.trim()) { preview.innerHTML = ''; return; }
        try {
          preview.innerHTML = 'You typed: \\(' + kind.label + ' ' + epsTeX(PM.texExpr(PM.parseExpr(PM.answerPart(src), q.vars))) + '\\)';
          typeset(preview);
        } catch (e) { preview.innerHTML = '<span class="pl-muted">' + (e.message || 'Keep typing…') + '</span>'; }
      }, 300);
    });
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') attempt(); });

    function nudge(msg) {  // not a try: clear any earlier verdict so the two don't seem to disagree
      out.querySelectorAll('.pl-bubble').forEach(function (b) { b.remove(); });
      out.appendChild(el('p', 'pl-nudge', msg)); typeset(out);
    }
    function attempt() {
      if (finished) return;
      out.querySelectorAll('.pl-nudge').forEach(function (n) { n.remove(); });
      var src = PM.answerPart(normalizeFor(q, inp.value));  // drop a leading "N =", "n =" or "delta =" before any check
      if (!src.trim()) return nudge('Type a formula for \\(' + kind.name + '\\) first.');
      if (usesBefore(q, src)) {
        var others = q.vars.map(function (v) { return v === 'eps' ? '\\varepsilon' : v; });
        return nudge(kind.beforeMsg + ', so it can use \\(' + others.join('\\), \\(') + '\\), but not \\(' + kind.before + '\\).');
      }
      if (q.type === 'escN' && /(^|[^A-Za-z])n([^A-Za-z]|$)/.test(src.replace(/\b(ln|sin|min|ceil|cos|tan|exp|max|abs|sqrt|floor|log)\b/g, ''))) {
        return nudge('Write \\(n\\) as a formula in the opponent’s \\(N\\) (capital <code>N</code>), like <code>N + 5</code>.');
      }
      var tree;
      try { tree = PM.parseExpr(PM.answerPart(src), q.vars); } catch (e) {
        if (!(e instanceof PM.ParseError)) throw e;
        return nudge(e.message);
      }
      var used = varsIn(tree);
      if (kind.lead === 'eps' && !used.eps && used['const:e']) {
        return nudge('Your formula has \\(e = 2.718\\ldots\\) in it but no \\(\\varepsilon\\). Type \\(\\varepsilon\\) as <code>eps</code>.');
      }
      var F = function (env) { return PM.evalExpr(tree, env); };
      var fail = kind.run(q, F);
      out.querySelectorAll('.pl-bubble').forEach(function (b) { b.remove(); });
      if (!fail) {
        finish(); inp.classList.add('pl-in-ok');
        show(out, bubble(true, q.comment + (q.type === 'epsN' ? sizeNote(q, F) : '')));
        return opts.done('right', tries === 0);
      }
      tries += 1;
      var known = matchWrong(q, tree);
      var lacks = kind.lead === 'eps' && !used.eps ? 'A formula without \\(\\varepsilon\\) can’t answer every challenge. '
        : kind.lead === 'N' && !used.N ? 'A fixed number can’t be past every \\(N\\) your opponent might name. ' : '';
      var msg = (known ? known.comment + ' ' : lacks) + kind.describe(q, fail);
      if (opts.cold) { finish(); show(out, bubble(false, msg)); return opts.done('wrong'); }
      show(out, bubble(false, msg));
      if (tries >= 2 && !box.querySelector('.pl-reveal')) {
        box.insertBefore(button('pl-link pl-reveal', 'Show me one that works', function () {
          if (finished) return;
          finish();
          out.querySelectorAll('.pl-bubble').forEach(function (b) { b.remove(); });
          show(out, note('pl-model', 'One that works:', '\\(' + kind.label + ' ' + q.answer_tex + '\\). ' + q.comment.replace(/^(Right|Yes)[.:!,]\s*/, '')));
          opts.done('revealed');
        }), out);
      }
    }
    function finish() {
      finished = true; check.remove(); inp.disabled = true;
      box.querySelectorAll('.pl-reveal, .pl-hint-btn').forEach(function (n) { n.remove(); });
    }
  }
  var RENDER = Object.assign({}, K.RENDER, { epsN: renderTyped, escN: renderTyped, epsDelta: renderTyped });

  // ---------- a finished step, redrawn after a reload or a jump (the live one isn't saved) ----------
  function doneView(q) {
    var box = el('div', 'pl-step pl-done-step');
    if (q.type !== 'text') box.appendChild(K.questionHTML(q.text));
    var ans;
    if (q.type === 'text') ans = el('div', 'pl-hint', q.text);
    else if (q.type === 'mc') { var a = q.answers.filter(function (x) { return x.ok; })[0]; ans = bubble(true, '<em>' + a.html + '</em> ' + a.comment); }
    else if (q.type === 'multi') ans = note('pl-ok', 'The ones that work:', '<ul>' + q.answers.filter(function (x) { return x.ok; }).map(function (x) { return '<li>' + x.html + '</li>'; }).join('') + '</ul>');
    else if (q.type === 'num') ans = note('pl-ok', 'Answer: \\(' + q.answer_tex + '\\).', q.comment.replace(/^(Right|Yes)[.:!,]\s*/, ''));
    else if (KINDS[q.type]) ans = note('pl-ok', 'One that works: \\(' + KINDS[q.type].label + ' ' + q.answer_tex + '\\).', '');
    else if (q.type === 'expr') ans = note('pl-ok', 'Answer: \\(' + q.answer_tex + '\\).', q.comment.replace(/^(Right|Yes)[.:!,]\s*/, ''));
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
    function coldName(plain) {  // what the cold try tests: N, n or delta
      var t = P.cold && P.cold.length ? P.steps[P.cold[0]].type : 'epsN';
      return t === 'escN' ? (plain ? 'n' : '\\(n\\)') : t === 'epsDelta' ? (plain ? 'δ' : '\\(\\delta\\)') : (plain ? 'N' : '\\(N\\)');
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
        row.appendChild(button('btn411 ghost', 'Already have a proof? Test your ' + coldName(true), function () { set('cold', 0); }));
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
      box.appendChild(el('p', 'pl-phase', 'Testing your proof&rsquo;s ' + coldName() + ' &middot; ' + (P.cold.length > 1 ? 'part ' + (S.cold + 1) + ' of ' + P.cold.length : 'one try')));
      box.appendChild(K.questionHTML(q.cold_text || q.text));
      root.appendChild(box);
      RENDER[q.type](q, box, { cold: true, done: function (res) {
        if (res === 'right' && S.cold + 1 < P.cold.length) {
          box.appendChild(button('pl-next', 'Next part &rarr;', function () { S.cold += 1; save(); render(); }));
        } else if (res === 'right') {
          box.appendChild(el('p', null, 'Your ' + coldName() + ' survived every challenge the page could throw at it. That isn&rsquo;t a proof (the proof shows it works '
            + 'for <em>every</em> ' + (q.type === 'escN' ? '\\(N\\)' : '\\(\\varepsilon\\)') + '), but it&rsquo;s a good sign. Skip ahead to <strong>Look back</strong>.'));
          if (q.cold_note) {  // a case the test can't see (m = 0 on Day 22), with an optional jump to the step about it
            box.appendChild(el('p', null, q.cold_note));
            if (typeof q.cold_note_step === 'number') {
              box.appendChild(button('pl-link', 'Take me to that step', function () { set('walk', q.cold_note_step); }));
            }
          }
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
  window.Polya411 = { adversary: adversary, escape: escape, deltaHunt: deltaHunt, kinds: KINDS, parse: function (src, vars) { return PM.parseExpr(PM.answerPart(normalize(src)), vars); } };
})();
