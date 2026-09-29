/* Praxis diagnostic: generated question variants (numbers change every attempt).
   Each generator: { id, topic, make(rnd) -> question }. rnd() is a seeded 0..1 generator, so a saved
   session rebuilds exactly the same question. Every generator is checked against an independent
   brute-force recomputation by tools/testgens.js over hundreds of seeds. `_p` carries the parameters
   for that check and is ignored by the page. */
(function () {
  var PXD = window.PXD = window.PXD || {};
  PXD.gens = PXD.gens || [];
  function G(id, topic, make) { PXD.gens.push({ id: id, topic: topic, make: make }); }
  function I(r, a, b) { return a + Math.floor(r() * (b - a + 1)); }
  function pick(r, arr) { return arr[Math.floor(r() * arr.length)]; }
  function shuf(r, arr) { var a = arr.slice(), i, j, t; for (i = a.length - 1; i > 0; i--) { j = Math.floor(r() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; }
  function clean(x, d) { return parseFloat(x.toFixed(d == null ? 6 : d)); }
  function lin(c, d) {   /* c x + d  as LaTeX-safe text */
    var s = '';
    if (c !== 0) s = (c === 1 ? '' : c === -1 ? '-' : String(c)) + 'x';
    if (d !== 0 || c === 0) s += s ? (d < 0 ? ' - ' : ' + ') + Math.abs(d) : String(d);
    return s;
  }
  function poly(cs) {    /* highest power first */
    var s = '', n = cs.length - 1;
    cs.forEach(function (c, i) {
      var deg = n - i; if (c === 0) return;
      var a = Math.abs(c), body = deg === 0 ? String(a) : ((a === 1 ? '' : String(a)) + 'x' + (deg > 1 ? '^{' + deg + '}' : ''));
      s += s ? (c < 0 ? ' - ' : ' + ') + body : (c < 0 ? '-' : '') + body;
    });
    return s || '0';
  }
  function cx(re, im) { /* a + bi */
    if (im === 0) return String(re);
    var b = Math.abs(im) === 1 ? 'i' : Math.abs(im) + 'i';
    if (re === 0) return (im < 0 ? '-' : '') + b;
    return re + (im < 0 ? ' - ' : ' + ') + b;
  }
  /* numeric multiple choice: correct + distractors -> sorted ascending, fixed order */
  function numMC(correct, wrongs, fmt) {
    var vals = [correct], seen = {}; seen[clean(correct)] = 1;
    wrongs.forEach(function (w) { var k = clean(w); if (isFinite(w) && !seen[k] && vals.length < 4) { seen[k] = 1; vals.push(w); } });
    var step = 1; while (vals.length < 4) { var w = correct + step * (vals.length % 2 ? 1 : -1) * Math.max(1, Math.abs(Math.round(correct / 10))); step++; if (!seen[clean(w)]) { seen[clean(w)] = 1; vals.push(w); } }
    vals.sort(function (a, b) { return a - b; });
    return { choices: vals.map(fmt), answer: vals.indexOf(correct) };
  }
  function strMC(r, correct, wrongs, extras) {
    var all = [correct], seen = {}; seen[correct] = 1;
    wrongs.concat(extras || []).forEach(function (w) { if (!seen[w] && all.length < 4) { seen[w] = 1; all.push(w); } });
    all = shuf(r, all); return { choices: all, answer: all.indexOf(correct) };
  }
  function frac(n, d) { var g = gcd(n, d); n /= g; d /= g; return d === 1 ? String(n) : '\\dfrac{' + n + '}{' + d + '}'; }

  /* ================= Number & Quantity ================= */
  G('pct-chain', 'NQ1', function (r) {
    var p = pick(r, [10, 15, 20, 25, 30, 40, 50]), q = pick(r, [10, 20, 25, 30, 40, 50]);
    var net = (100 + p) * (100 - q) / 100 - 100;
    return { type: 'num', diff: 2, _p: { p: p, q: q },
      stem: 'A store raises the price of a jacket by ' + p + '%, and later marks the new price down by ' + q + '%. What is the net percent change from the original price? Enter a percent (use a negative number if the price went down).',
      answer: clean(net, 4), tol: 0.01, unit: '%',
      explain: 'Multiply the growth factors: $(1+' + p / 100 + ')(1-' + q / 100 + ') = ' + clean((1 + p / 100) * (1 - q / 100), 5) + '$, so the price is ' + clean((100 + p) * (100 - q) / 100, 4) + '% of the original: a change of ' + clean(net, 4) + '%. Adding the percents ($' + (p - q) + '\\%$) is the usual error; percent changes apply to different bases and do not add.' };
  });
  G('gcd-lcm', 'NQ1', function (r) {
    var g = pick(r, [2, 3, 4, 5, 6]), ab = pick(r, [[2, 3], [3, 4], [2, 5], [3, 5], [4, 5], [3, 7], [2, 7], [5, 6], [4, 7]]);
    if (r() < 0.5) ab = [ab[1], ab[0]];
    var m = g * ab[0], n = g * ab[1], L = g * ab[0] * ab[1];
    return { type: 'num', diff: 2, _p: { m: m, n: n },
      stem: 'The greatest common factor of $m$ and $' + n + '$ is $' + g + '$, and their least common multiple is $' + L + '$. What is $m$?',
      answer: m, tol: 0,
      explain: 'For positive integers, $\\gcd(m,n)\\cdot\\operatorname{lcm}(m,n)=mn$. So $' + g + '\\cdot' + L + ' = m\\cdot' + n + '$ and $m = ' + g * L + '/' + n + ' = ' + m + '$.' };
  });
  G('work-rate', 'NQ1', function (r) {
    var a, d, b, tries = 0;
    do { a = pick(r, [2, 3, 4, 6, 8]); d = pick(r, [6, 8, 9, 12, 15, 18, 20]); b = pick(r, [3, 4, 5, 6, 9, 10, 12, 15]); tries++; } while ((a * d) % b !== 0 || a === b);
    var ans = a * d / b;
    return { type: 'num', diff: 2, _p: { a: a, d: d, b: b },
      stem: 'If ' + a + ' identical machines working together can finish a job in ' + d + ' days, how many days will it take ' + b + ' of the same machines to finish the same job?',
      answer: ans, tol: 0, unit: 'days',
      explain: 'The job takes $' + a + '\\cdot' + d + ' = ' + a * d + '$ machine-days. With ' + b + ' machines: $' + a * d + '/' + b + ' = ' + ans + '$ days. More machines means fewer days (inverse proportion), so multiplying $' + d + '\\cdot' + b + '/' + a + '$ is the usual error.' };
  });
  G('sci-product', 'NQ2', function (r) {
    var x = pick(r, [1.2, 1.5, 2.5, 3, 4, 5, 6, 7, 8, 9]), y = pick(r, [2, 3, 4, 5, 6, 8, 2.5, 1.5]), m = I(r, -6, 8), n = I(r, -5, 7);
    var c = clean(x * y, 4), e = m + n; if (c >= 10) { c = clean(c / 10, 4); e += 1; }
    var fmt = function (co, ex) { return '$' + co + '\\times 10^{' + ex + '}$'; };
    var correct = fmt(c, e);
    var wr = [fmt(clean(x * y, 4), m + n), fmt(c, e + 1), fmt(c, e - 1), fmt(c, m * n), fmt(clean(x + y, 4), m + n)];
    var mc = strMC(r, correct, wr.filter(function (w) { return w !== correct; }), [fmt(c, e + 2), fmt(c, e - 2), fmt(clean(c + 1, 4), e)]);
    return { type: 'mc', diff: 2, _p: { x: x, y: y, m: m, n: n }, order: 'fixed',
      stem: 'Which of the following is the product $(' + x + '\\times 10^{' + m + '})(' + y + '\\times 10^{' + n + '})$ written in scientific notation?',
      choices: mc.choices, answer: mc.answer,
      explain: 'Multiply the coefficients and add the exponents: $' + x + '\\cdot' + y + ' = ' + clean(x * y, 4) + '$ and $10^{' + m + '}\\cdot10^{' + n + '} = 10^{' + (m + n) + '}$. ' + (x * y >= 10 ? 'Since the coefficient is at least 10, rewrite it as ' + c + '$\\times 10$ and add 1 to the exponent, giving ' : 'The result is already normalized: ') + correct + '. Multiplying the exponents, or leaving the coefficient at 10 or more, are the usual errors.' };
  });
  G('rational-exponent', 'NQ2', function (r) {
    var k = pick(r, [2, 3, 4, 5]), n = pick(r, [2, 3]), p = pick(r, [2, 3, 4, 5]); if (p % n === 0) p += 1;
    var neg = r() < 0.4, base = Math.pow(k, n), val = neg ? 1 / Math.pow(k, p) : Math.pow(k, p);
    return { type: 'num', diff: 2, _p: { k: k, n: n, p: p, neg: neg },
      stem: 'Evaluate $' + base + '^{' + (neg ? '-' : '') + '\\frac{' + p + '}{' + n + '}}$. Enter your answer as a number (a fraction such as 1/8 is fine).',
      answer: clean(val, 8), tol: 0.0005,
      explain: 'Write $' + base + ' = ' + k + '^{' + n + '}$, so $' + base + '^{' + (neg ? '-' : '') + '\\frac{' + p + '}{' + n + '}} = ' + k + '^{' + n + '\\cdot(' + (neg ? '-' : '') + p + '/' + n + ')} = ' + k + '^{' + (neg ? '-' : '') + p + '}' + (neg ? ' = \\dfrac{1}{' + Math.pow(k, p) + '}' : ' = ' + Math.pow(k, p)) + '$.' };
  });
  G('unit-rate', 'NQ3', function (r) {
    var kind = r() < 0.5 ? 0 : 1, v = pick(r, kind ? [36, 54, 72, 90, 108, 45, 63] : [30, 45, 60, 65, 75, 55]);
    var ans = kind ? v * 1000 / 3600 : v * 5280 / 3600;
    return { type: 'num', diff: 2, _p: { kind: kind, v: v },
      stem: kind ? 'A cyclist travels at ' + v + ' kilometers per hour. What is the speed in meters per second, to the nearest tenth?' : 'A car travels at ' + v + ' miles per hour. What is its speed in feet per second, to the nearest tenth? (1 mile = 5280 feet)',
      answer: clean(ans, 4), tol: 0.05, unit: kind ? 'm/s' : 'ft/s', calc: true,
      explain: kind ? 'Chain the units so they cancel: $' + v + '\\dfrac{\\text{km}}{\\text{h}}\\cdot\\dfrac{1000\\text{ m}}{1\\text{ km}}\\cdot\\dfrac{1\\text{ h}}{3600\\text{ s}} = ' + clean(ans, 3) + '$ m/s.' : 'Chain the units so they cancel: $' + v + '\\dfrac{\\text{mi}}{\\text{h}}\\cdot\\dfrac{5280\\text{ ft}}{1\\text{ mi}}\\cdot\\dfrac{1\\text{ h}}{3600\\text{ s}} = ' + clean(ans, 3) + '$ ft/s.' };
  });
  G('complex-product', 'NQ4', function (r) {
    var a = I(r, -4, 5), b = pick(r, [-4, -3, -2, -1, 1, 2, 3, 4, 5]), c = I(r, -4, 5), d = pick(r, [-4, -3, -2, -1, 1, 2, 3, 4]);
    var re = a * c - b * d, im = a * d + b * c, f = function (x, y) { return '$' + cx(x, y) + '$'; };
    var correct = f(re, im);
    var wr = [f(a * c + b * d, im), f(re, a * d - b * c), f(a * c, b * d), f(a * c + b * d, a * d - b * c), f(re, -im), f(-re, im)].filter(function (w) { return w !== correct; });
    var mc = strMC(r, correct, wr, [f(re + 1, im), f(re, im + 1), f(re - 1, im - 1), f(im, re)]);
    return { type: 'mc', diff: 2, _p: { a: a, b: b, c: c, d: d }, order: 'fixed',
      stem: 'What is $(' + cx(a, b) + ')(' + cx(c, d) + ')$?',
      choices: mc.choices, answer: mc.answer,
      explain: 'Expand with FOIL and use $i^2=-1$: $(' + a + ')(' + c + ') + (' + a + ')(' + d + 'i) + (' + b + 'i)(' + c + ') + (' + b + 'i)(' + d + 'i) = ' + (a * c) + ' + ' + (a * d + b * c) + 'i + ' + (b * d) + 'i^2 = ' + (a * c - b * d) + ' + ' + (a * d + b * c) + 'i$, which is ' + correct + '. Treating $i^2$ as $+1$ flips the sign of the $bd$ term.' };
  });

  /* ================= Algebra ================= */
  G('discriminant', 'ALG3', function (r) {
    var target = I(r, 0, 2), a, b, c, D, n = 0;
    do { a = pick(r, [1, 1, 2, 3, -1, -2]); b = I(r, -8, 8); c = I(r, -7, 9); D = b * b - 4 * a * c; n++; }
    while (!((target === 0 && D > 0) || (target === 1 && D === 0) || (target === 2 && D < 0)) && n < 3000);
    if (n >= 3000) { a = 1; b = 2; c = 5; D = -16; target = 2; }
    var cs = ['two distinct real solutions', 'exactly one real solution (a repeated root)', 'no real solutions (two complex conjugate solutions)', 'infinitely many real solutions'];
    var t = D > 0 ? 0 : D === 0 ? 1 : 2;
    return { type: 'mc', diff: 2, _p: { a: a, b: b, c: c }, order: 'fixed',
      stem: 'How many real solutions does the equation $' + poly([a, b, c]) + ' = 0$ have?',
      choices: cs.map(function (s) { return s.charAt(0).toUpperCase() + s.slice(1); }), answer: t,
      explain: 'The discriminant is $b^2-4ac = (' + b + ')^2 - 4(' + a + ')(' + c + ') = ' + D + '$. ' + (D > 0 ? 'It is positive, so there are two distinct real solutions.' : D === 0 ? 'It is zero, so there is exactly one (repeated) real solution.' : 'It is negative, so there are no real solutions; the two solutions are complex conjugates.') };
  });
  G('linear-solve', 'ALG3', function (r) {
    var x0 = I(r, -6, 8), a = pick(r, [2, 3, 4, 5, -2, -3]), c = pick(r, [-3, -2, -1, 1, 2, 3, 4, 6]), b = I(r, -5, 5);
    if (a === c) c += 1; if (c === 0) c = 1; if (a === c) c = a + 2;
    var d = a * (x0 + b) - c * x0;
    return { type: 'num', diff: 1, _p: { a: a, b: b, c: c, d: d },
      stem: 'Solve for $x$: $' + a + '(x ' + (b < 0 ? '-' : '+') + ' ' + Math.abs(b) + ') = ' + lin(c, d) + '$.',
      answer: x0, tol: 0,
      explain: 'Distribute: $' + lin(a, a * b) + ' = ' + lin(c, d) + '$. Collect $x$ terms: $' + (a - c) + 'x = ' + (d - a * b) + '$, so $x = ' + x0 + '$. Check: both sides equal ' + (c * x0 + d) + '.' };
  });
  G('line-two-points', 'ALG6', function (r) {
    var m = pick(r, [-4, -3, -2, -1, 1, 2, 3, 4]), b = I(r, -7, 7), x1 = I(r, -4, 2), x2 = x1 + pick(r, [1, 2, 3, 4]);
    var y1 = m * x1 + b, y2 = m * x2 + b, ask = r() < 0.5;
    return { type: 'num', diff: 2, _p: { m: m, b: b, x1: x1, y1: y1, x2: x2, y2: y2, ask: ask },
      stem: 'A line passes through the points $(' + x1 + ', ' + y1 + ')$ and $(' + x2 + ', ' + y2 + ')$. What is its ' + (ask ? 'slope' : '$y$-intercept') + '?',
      answer: ask ? m : b, tol: 0,
      explain: 'Slope: $\\dfrac{' + y2 + ' - (' + y1 + ')}{' + x2 + ' - (' + x1 + ')} = ' + m + '$.' + (ask ? '' : ' Then $y = ' + m + 'x + b$; substituting $(' + x1 + ', ' + y1 + ')$ gives $b = ' + y1 + ' - (' + m + ')(' + x1 + ') = ' + b + '$.') };
  });
  G('avg-rate', 'ALG5', function (r) {
    var a = pick(r, [1, 2, 3, -1, -2]), b = I(r, -6, 6), c = I(r, -5, 5), p = I(r, -2, 3), q = p + pick(r, [2, 3, 4]);
    var f = function (x) { return a * x * x + b * x + c; };
    var ans = (f(q) - f(p)) / (q - p);
    return { type: 'num', diff: 2, _p: { a: a, b: b, c: c, p: p, q: q },
      stem: 'For $f(x) = ' + poly([a, b, c]) + '$, what is the average rate of change of $f$ over the interval $[' + p + ', ' + q + ']$?',
      answer: ans, tol: 0.001,
      explain: '$\\dfrac{f(' + q + ') - f(' + p + ')}{' + q + ' - ' + p + '} = \\dfrac{' + f(q) + ' - (' + f(p) + ')}{' + (q - p) + '} = ' + clean(ans, 4) + '$. This is the slope of the secant line, not $f\'$ at either endpoint.' };
  });
  G('remainder', 'ALG7', function (r) {
    var A = I(r, -3, 4), b = I(r, -4, 4), c = I(r, -6, 6), d = I(r, -9, 9), lead = pick(r, [1, 1, 2]);
    var val = lead * A * A * A + b * A * A + c * A + d;
    if (A === 0) A = 2;
    val = lead * A * A * A + b * A * A + c * A + d;
    return { type: 'num', diff: 2, _p: { lead: lead, b: b, c: c, d: d, A: A },
      stem: 'What is the remainder when $' + poly([lead, b, c, d]) + '$ is divided by $x ' + (A < 0 ? '+ ' + (-A) : '- ' + A) + '$?',
      answer: val, tol: 0,
      explain: 'By the Remainder Theorem, the remainder on division by $x - ' + (A < 0 ? '(' + A + ')' : A) + '$ is the value of the polynomial at $x = ' + A + '$: $' + lead + '(' + A + ')^3 + ' + b + '(' + A + ')^2 + ' + c + '(' + A + ') + ' + d + ' = ' + val + '$. Using the opposite sign of $' + A + '$ is the usual error.' };
  });
  G('system-2x2', 'ALG4', function (r) {
    var x0, y0, a1, b1, a2, b2, det;
    do { x0 = I(r, -5, 6); y0 = I(r, -5, 6); a1 = pick(r, [1, 2, 3, 4, -1, -2]); b1 = pick(r, [1, 2, 3, -1, -2, -3]); a2 = pick(r, [1, 2, 3, -2, -3, 5]); b2 = pick(r, [1, 2, -1, -2, 3, -3]); det = a1 * b2 - a2 * b1; } while (det === 0);
    var c1 = a1 * x0 + b1 * y0, c2 = a2 * x0 + b2 * y0;
    var eq = function (a, b, c) { return lin(a, 0).replace(/^$/, '') + (b < 0 ? ' - ' : ' + ') + (Math.abs(b) === 1 ? '' : Math.abs(b)) + 'y = ' + c; };
    return { type: 'num', diff: 2, _p: { a1: a1, b1: b1, c1: c1, a2: a2, b2: b2, c2: c2 },
      stem: 'The system $\\begin{cases}' + eq(a1, b1, c1) + '\\\\ ' + eq(a2, b2, c2) + '\\end{cases}$ has exactly one solution $(x, y)$. What is the value of $x + y$?',
      answer: x0 + y0, tol: 0,
      explain: 'Eliminate one variable (or substitute) to find $x = ' + x0 + '$ and $y = ' + y0 + '$; check in both equations: $' + a1 + '(' + x0 + ') + ' + b1 + '(' + y0 + ') = ' + c1 + '$ and $' + a2 + '(' + x0 + ') + ' + b2 + '(' + y0 + ') = ' + c2 + '$. The question asks for $x + y = ' + (x0 + y0) + '$, not just $x$.' };
  });

  /* ================= Functions ================= */
  G('arith-nth', 'FUN3', function (r) {
    var a1 = I(r, -8, 12), d = pick(r, [-5, -4, -3, -2, 2, 3, 4, 5, 7]), n = I(r, 12, 40);
    return { type: 'num', diff: 1, _p: { a1: a1, d: d, n: n },
      stem: 'The first three terms of an arithmetic sequence are ' + a1 + ', ' + (a1 + d) + ', ' + (a1 + 2 * d) + '. What is the ' + n + 'th term?',
      answer: a1 + (n - 1) * d, tol: 0,
      explain: 'The common difference is ' + d + ', so $a_n = a_1 + (n-1)d$ and $a_{' + n + '} = ' + a1 + ' + ' + (n - 1) + '(' + d + ') = ' + (a1 + (n - 1) * d) + '$. Using $n$ instead of $n-1$ steps is the usual off-by-one error.' };
  });
  G('geom-nth', 'FUN3', function (r) {
    var a1 = pick(r, [1, 2, 3, 4, 5, -2, -3]), rr = pick(r, [2, 3, -2, 4]), n = I(r, 5, 7);
    return { type: 'num', diff: 2, _p: { a1: a1, r: rr, n: n },
      stem: 'A geometric sequence begins ' + a1 + ', ' + a1 * rr + ', ' + a1 * rr * rr + ', ' + a1 * rr * rr * rr + ', $\\ldots$ What is the ' + n + 'th term?',
      answer: a1 * Math.pow(rr, n - 1), tol: 0,
      explain: 'The common ratio is ' + rr + ', so $a_n = a_1 r^{n-1}$ and $a_{' + n + '} = ' + a1 + '\\cdot(' + rr + ')^{' + (n - 1) + '} = ' + a1 * Math.pow(rr, n - 1) + '$. Using $r^n$ instead of $r^{n-1}$ is the usual error.' };
  });
  G('exp-model', 'FUN5', function (r) {
    var P = pick(r, [200, 500, 800, 1200, 2000]), p = pick(r, [3, 4, 5, 6, 8, 12, 15]), decay = r() < 0.5, rr = p / 100;
    var corr = '$' + P + '(' + (decay ? '1 - ' : '1 + ') + rr + ')^t$';
    var wr = ['$' + P + '(' + rr + ')^t$', '$' + P + '(' + (decay ? '1 - ' : '1 + ') + p + ')^t$', '$' + P + (decay ? ' - ' : ' + ') + rr + 't$', '$' + P + '(' + (decay ? '1 + ' : '1 - ') + rr + ')^t$'];
    var mc = strMC(r, corr, wr);
    return { type: 'mc', diff: 2, _p: { P: P, p: p, decay: decay }, order: 'fixed',
      stem: (decay ? 'The value of a machine is currently $\\$' + P + '$ and decreases by ' + p + '% each year. ' : 'A bank account starts at $\\$' + P + '$ and grows by ' + p + '% each year with no deposits or withdrawals. ') + 'Which expression gives its value after $t$ years?',
      choices: mc.choices, answer: mc.answer,
      explain: 'A ' + p + '% ' + (decay ? 'decrease' : 'increase') + ' each year multiplies by $' + (decay ? '1 - ' : '1 + ') + rr + ' = ' + clean(decay ? 1 - rr : 1 + rr, 4) + '$ per year, so after $t$ years the value is ' + corr + '. Using $' + rr + '$ alone, or $' + p + '$ instead of $' + rr + '$, or adding a fixed amount (linear growth) are the classic errors.' };
  });
  G('log-solve', 'FUN6', function (r) {
    var b = pick(r, [2, 3, 5, 7]), c = pick(r, [10, 15, 20, 30, 50, 75, 100, 200]);
    var ans = Math.log(c) / Math.log(b);
    return { type: 'num', diff: 2, calc: true, _p: { b: b, c: c },
      stem: 'Solve $' + b + '^x = ' + c + '$. Give $x$ to the nearest hundredth.',
      answer: clean(ans, 4), tol: 0.006,
      explain: 'Take logarithms: $x = \\log_{' + b + '}' + c + ' = \\dfrac{\\ln ' + c + '}{\\ln ' + b + '} \\approx ' + clean(ans, 3) + '$. (Change of base lets a calculator evaluate a log in any base.)' };
  });
  G('log-props', 'FUN6', function (r) {
    var b = pick(r, [2, 3, 5]), i = I(r, 1, 4), j = I(r, 2, 5), sum = r() < 0.5;
    if (!sum && j <= i) j = i + I(r, 1, 3);
    var x = Math.pow(b, i), y = Math.pow(b, j);
    return { type: 'num', diff: 1, _p: { b: b, i: i, j: j, sum: sum },
      stem: 'Evaluate $\\log_{' + b + '}' + (sum ? x + ' + \\log_{' + b + '}' + y : y + ' - \\log_{' + b + '}' + x) + '$.',
      answer: sum ? i + j : j - i, tol: 0,
      explain: sum ? 'By the product rule, $\\log_{' + b + '}' + x + ' + \\log_{' + b + '}' + y + ' = \\log_{' + b + '}(' + x * y + ') = \\log_{' + b + '}' + b + '^{' + (i + j) + '} = ' + (i + j) + '$.' : 'By the quotient rule, $\\log_{' + b + '}' + y + ' - \\log_{' + b + '}' + x + ' = \\log_{' + b + '}(' + y / x + ') = ' + (j - i) + '$.' };
  });
  G('deg-rad', 'FUN7', function (r) {
    var th = pick(r, [30, 45, 60, 120, 135, 150, 210, 225, 240, 300, 315, 330]);
    var f = function (n, d) { var g = gcd(n, d); n /= g; d /= g; return (n === 1 ? '' : n) + '\\pi' + (d === 1 ? '' : '/' + d); };
    var correct = '$' + f(th, 180) + '$';
    var wr = ['$' + f(th, 360) + '$', '$' + f(180, th) + '$', '$' + f(th, 90) + '$', '$' + f(th, 120) + '$'].filter(function (w) { return w !== correct; });
    var mc = strMC(r, correct, wr);
    return { type: 'mc', diff: 1, _p: { th: th }, order: 'fixed',
      stem: 'What is $' + th + '^\\circ$ in radians?', choices: mc.choices, answer: mc.answer,
      explain: 'Multiply by $\\pi/180$: $' + th + '\\cdot\\dfrac{\\pi}{180} = ' + f(th, 180) + '$. Dividing by 360 or inverting the conversion factor are the usual errors.' };
  });
  G('composition', 'FUN4', function (r) {
    var a = pick(r, [2, 3, -2, 4, -1]), b = I(r, -5, 6), c = pick(r, [1, 2, 3, -1]), d = I(r, -4, 5), k = I(r, -3, 3), fg = r() < 0.5;
    var f = function (x) { return a * x + b; }, g = function (x) { return c * x * x + d; };
    var ans = fg ? f(g(k)) : g(f(k));
    return { type: 'num', diff: 2, _p: { a: a, b: b, c: c, d: d, k: k, fg: fg },
      stem: 'Let $f(x) = ' + lin(a, b) + '$ and $g(x) = ' + poly([c, 0, d]) + '$. What is $' + (fg ? 'f(g(' + k + '))' : 'g(f(' + k + '))') + '$?',
      answer: ans, tol: 0,
      explain: fg ? 'Work inside-out: $g(' + k + ') = ' + g(k) + '$, then $f(' + g(k) + ') = ' + ans + '$. Computing $g(f(' + k + '))$ instead gives ' + g(f(k)) + '.' : 'Work inside-out: $f(' + k + ') = ' + f(k) + '$, then $g(' + f(k) + ') = ' + ans + '$. Computing $f(g(' + k + '))$ instead gives ' + f(g(k)) + '.' };
  });

  /* ================= Calculus ================= */
  G('derivative-at', 'CAL4', function (r) {
    var a = pick(r, [1, 2, 3, 4, -1, -2]), b = I(r, -5, 5), c = I(r, -6, 6), d = I(r, -8, 8), k = I(r, -2, 3);
    return { type: 'num', diff: 2, _p: { a: a, b: b, c: c, d: d, k: k },
      stem: 'If $f(x) = ' + poly([a, b, c, d]) + '$, what is $f\'(' + k + ')$?',
      answer: 3 * a * k * k + 2 * b * k + c, tol: 0,
      explain: 'By the power rule $f\'(x) = ' + poly([3 * a, 2 * b, c]) + '$, so $f\'(' + k + ') = ' + 3 * a + '(' + k + ')^2 + ' + 2 * b + '(' + k + ') + ' + c + ' = ' + (3 * a * k * k + 2 * b * k + c) + '$. (The constant $' + d + '$ disappears.)' };
  });
  G('definite-integral', 'CAL4', function (r) {
    var k = pick(r, [2, 3, 6]), a, b, c = I(r, -4, 6);
    if (k === 2) { a = pick(r, [3, 6, -3]); b = I(r, -4, 5); } else if (k === 3) { a = pick(r, [1, 2, 3, -1, 4]); b = pick(r, [-4, -2, 2, 4, 6]); } else { a = I(r, -3, 4); b = I(r, -5, 5); }
    var ans = a * k * k * k / 3 + b * k * k / 2 + c * k;
    return { type: 'num', diff: 2, _p: { a: a, b: b, c: c, k: k },
      stem: 'Evaluate $\\displaystyle\\int_0^{' + k + '} (' + poly([a, b, c]) + ')\\,dx$.',
      answer: clean(ans, 6), tol: 0.001,
      explain: 'An antiderivative is $F(x) = ' + a + 'x^3/3 + ' + b + 'x^2/2 + ' + c + 'x$. Then $F(' + k + ') - F(0) = ' + clean(ans, 4) + '$.' };
  });
  G('limit-factor', 'CAL1', function (r) {
    var rr = pick(r, [-4, -3, -2, -1, 1, 2, 3, 4, 5]), s = I(r, -5, 6);
    return { type: 'num', diff: 2, _p: { r: rr, s: s },
      stem: 'Find $\\displaystyle\\lim_{x\\to ' + rr + '} \\frac{' + poly([1, s - rr, -rr * s]) + '}{x ' + (rr < 0 ? '+ ' + (-rr) : '- ' + rr) + '}$.',
      answer: rr + s, tol: 0,
      explain: 'Direct substitution gives $0/0$, so factor: $' + poly([1, s - rr, -rr * s]) + ' = (x ' + (rr < 0 ? '+ ' + (-rr) : '- ' + rr) + ')(x ' + (s < 0 ? '- ' + (-s) : '+ ' + s) + ')$. Cancel the common factor (valid for $x \\ne ' + rr + '$) and substitute: $' + rr + ' ' + (s < 0 ? '- ' + (-s) : '+ ' + s) + ' = ' + (rr + s) + '$.' };
  });

  /* ================= Geometry ================= */
  G('polygon-angle', 'GEO2', function (r) {
    var n = pick(r, [5, 6, 8, 9, 10, 12, 15, 18, 20]), kind = I(r, 0, 2);
    var stem, ans, ex;
    if (kind === 0) { ans = 180 * (n - 2) / n; stem = 'What is the measure of each interior angle of a regular polygon with ' + n + ' sides?'; ex = 'The interior angles sum to $(n-2)\\cdot180^\\circ = ' + 180 * (n - 2) + '^\\circ$; dividing among ' + n + ' equal angles gives $' + ans + '^\\circ$.'; }
    else if (kind === 1) { ans = n; stem = 'Each exterior angle of a regular polygon measures $' + 360 / n + '^\\circ$. How many sides does the polygon have?'; ex = 'The exterior angles of any convex polygon sum to $360^\\circ$, so $n = 360/' + 360 / n + ' = ' + n + '$.'; }
    else { ans = 180 * (n - 2); stem = 'What is the sum of the interior angle measures of a convex polygon with ' + n + ' sides, in degrees?'; ex = 'Split from one vertex into $n-2 = ' + (n - 2) + '$ triangles: $' + (n - 2) + '\\cdot180 = ' + ans + '$.'; }
    return { type: 'num', diff: 1, _p: { n: n, kind: kind }, stem: stem, answer: ans, tol: 0, unit: kind === 1 ? 'sides' : 'degrees', explain: ex };
  });
  G('arc-sector', 'GEO7', function (r) {
    var rad = I(r, 3, 12), th = pick(r, [40, 60, 72, 90, 120, 135, 150, 200, 240]), arc = r() < 0.5;
    var ans = arc ? th / 360 * 2 * Math.PI * rad : th / 360 * Math.PI * rad * rad;
    return { type: 'num', diff: 2, calc: true, _p: { rad: rad, th: th, arc: arc },
      stem: 'A circle has radius ' + rad + ' cm. What is the ' + (arc ? 'length of an arc' : 'area of a sector') + ' with central angle $' + th + '^\\circ$? Give your answer to the nearest tenth.',
      answer: clean(ans, 4), tol: 0.05, unit: arc ? 'cm' : 'cm²',
      explain: arc ? 'Arc length is the fraction $\\dfrac{' + th + '}{360}$ of the circumference: $\\dfrac{' + th + '}{360}\\cdot2\\pi(' + rad + ') \\approx ' + clean(ans, 3) + '$ cm.' : 'Sector area is the fraction $\\dfrac{' + th + '}{360}$ of the circle\'s area: $\\dfrac{' + th + '}{360}\\cdot\\pi(' + rad + ')^2 \\approx ' + clean(ans, 3) + '$ cm$^2$.' };
  });
  G('distance-section', 'GEO8', function (r) {
    var x1 = I(r, -6, 4), y1 = I(r, -6, 4), dist = r() < 0.5;
    if (dist) {
      var t = pick(r, [[3, 4, 5], [5, 12, 13], [8, 15, 17], [6, 8, 10], [9, 12, 15]]), dx = t[r() < 0.5 ? 0 : 1], dy = t[r() < 0.5 ? 1 : 0]; if (dx === dy) dy = t[0] === dx ? t[1] : t[0];
      var sx = r() < 0.5 ? 1 : -1, sy = r() < 0.5 ? 1 : -1, x2 = x1 + sx * dx, y2 = y1 + sy * dy, h = Math.sqrt(dx * dx + dy * dy);
      return { type: 'num', diff: 1, _p: { x1: x1, y1: y1, x2: x2, y2: y2, dist: true },
        stem: 'What is the distance between the points $(' + x1 + ', ' + y1 + ')$ and $(' + x2 + ', ' + y2 + ')$?',
        answer: h, tol: 0.001,
        explain: '$d = \\sqrt{(' + x2 + ' - ' + (x1 < 0 ? '(' + x1 + ')' : x1) + ')^2 + (' + y2 + ' - ' + (y1 < 0 ? '(' + y1 + ')' : y1) + ')^2} = \\sqrt{' + dx * dx + ' + ' + dy * dy + '} = ' + h + '$.' };
    }
    var m = I(r, 1, 3), n = I(r, 1, 3), u = pick(r, [-2, -1, 1, 2, 3]), v = pick(r, [-3, -2, -1, 1, 2]);
    var ex2 = x1 + (m + n) * u, ey2 = y1 + (m + n) * v, px = x1 + m * u, py = y1 + m * v;
    return { type: 'num', diff: 2, _p: { x1: x1, y1: y1, x2: ex2, y2: ey2, m: m, n: n, xcoord: px },
      stem: 'Point $P$ lies on segment $\\overline{AB}$ with $A = (' + x1 + ', ' + y1 + ')$ and $B = (' + ex2 + ', ' + ey2 + ')$, and $AP : PB = ' + m + ' : ' + n + '$. What is the $x$-coordinate of $P$?',
      answer: px, tol: 0,
      explain: '$P$ is $\\dfrac{' + m + '}{' + (m + n) + '}$ of the way from $A$ to $B$: $x = ' + x1 + ' + \\dfrac{' + m + '}{' + (m + n) + '}(' + ex2 + ' - ' + (x1 < 0 ? '(' + x1 + ')' : x1) + ') = ' + px + '$. (Using $\\dfrac{' + m + '}{' + n + '}$ as the fraction is the usual error.)' };
  });
  G('scale-factor', 'GEO10', function (r) {
    var k = pick(r, [2, 3, 4, 5, 10, 0.5]), vol = r() < 0.5;
    return { type: 'num', diff: 1, _p: { k: k, vol: vol },
      stem: 'Every linear dimension of a solid is multiplied by ' + k + '. By what factor does its ' + (vol ? 'volume' : 'surface area') + ' change?',
      answer: vol ? clean(Math.pow(k, 3), 6) : clean(k * k, 6), tol: 0.0001,
      explain: 'Lengths scale by $k$, areas by $k^2$, and volumes by $k^3$. For $k = ' + k + '$ the ' + (vol ? 'volume' : 'surface area') + ' scales by $' + k + '^' + (vol ? 3 : 2) + ' = ' + clean(vol ? Math.pow(k, 3) : k * k, 6) + '$.' };
  });
  G('right-trig', 'GEO6', function (r) {
    var th = pick(r, [20, 25, 30, 35, 40, 50, 55, 60, 65, 70]), leg = I(r, 6, 40), hyp = r() < 0.5;
    var ans = hyp ? leg / Math.cos(th * Math.PI / 180) : leg * Math.tan(th * Math.PI / 180);
    return { type: 'num', diff: 2, calc: true, _p: { th: th, leg: leg, hyp: hyp },
      stem: hyp ? 'A ramp makes a $' + th + '^\\circ$ angle with the ground and covers a horizontal distance of ' + leg + ' feet. How long is the ramp surface, to the nearest tenth of a foot?' : 'From a point ' + leg + ' feet from the base of a flagpole, the angle of elevation to the top is $' + th + '^\\circ$. To the nearest tenth of a foot, how tall is the pole? (Ignore the height of the observer.)',
      answer: clean(ans, 4), tol: 0.05, unit: 'feet',
      explain: hyp ? '$\\cos ' + th + '^\\circ = \\dfrac{' + leg + '}{L}$, so $L = \\dfrac{' + leg + '}{\\cos ' + th + '^\\circ} \\approx ' + clean(ans, 3) + '$ ft. (Check that the calculator is in degree mode.)' : '$\\tan ' + th + '^\\circ = \\dfrac{h}{' + leg + '}$, so $h = ' + leg + '\\tan ' + th + '^\\circ \\approx ' + clean(ans, 3) + '$ ft. (Check that the calculator is in degree mode.)' };
  });

  /* ================= Statistics & Probability ================= */
  G('mean-median', 'STP2', function (r) {
    var n = pick(r, [5, 6, 7, 8]), vals = [], i, s = 0, med = r() < 0.5;
    for (i = 0; i < n; i++) { vals.push(I(r, 2, 24)); }
    if (!med) { s = vals.reduce(function (a, b) { return a + b; }, 0); var fix = (n - s % n) % n; vals[n - 1] += fix; }
    var sorted = vals.slice().sort(function (a, b) { return a - b; });
    var ans = med ? (n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2) : vals.reduce(function (a, b) { return a + b; }, 0) / n;
    return { type: 'num', diff: 1, _p: { vals: vals, med: med },
      stem: 'What is the ' + (med ? 'median' : 'mean') + ' of the data set ' + shuf(r, vals).join(', ') + '?',
      answer: ans, tol: 0.001,
      explain: med ? 'Order the data: ' + sorted.join(', ') + '. With ' + n + ' values the median is ' + (n % 2 ? 'the middle value' : 'the mean of the two middle values') + ': ' + ans + '.' : 'The sum is ' + vals.reduce(function (a, b) { return a + b; }, 0) + ' and there are ' + n + ' values, so the mean is ' + ans + '.' };
  });
  G('prob-rules', 'STP5', function (r) {
    var a = I(r, 30, 70) / 100, b = I(r, 25, 65) / 100, lo = Math.max(0, a + b - 1) + 0.05, hi = Math.min(a, b) - 0.05;
    var c = clean(Math.round((lo + (hi - lo) * r()) * 20) / 20, 2); if (c > Math.min(a, b) - 0.04) c = clean(Math.min(a, b) - 0.05, 2); if (c < Math.max(0, a + b - 1)) c = clean(Math.max(0.05, a + b - 1), 2);
    var cond = r() < 0.5, ans = cond ? clean(c / b, 6) : clean(a + b - c, 6);
    return { type: 'num', diff: 2, _p: { a: a, b: b, c: c, cond: cond },
      stem: 'For events $A$ and $B$, $P(A) = ' + a + '$, $P(B) = ' + b + '$, and $P(A \\cap B) = ' + c + '$. What is ' + (cond ? '$P(A \\mid B)$? Give your answer to the nearest hundredth.' : '$P(A \\cup B)$?'),
      answer: ans, tol: cond ? 0.006 : 0.0005,
      explain: cond ? '$P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)} = \\dfrac{' + c + '}{' + b + '} \\approx ' + clean(ans, 3) + '$. Dividing by $P(A)$ instead gives $P(B \\mid A)$.' : 'By the addition rule, $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = ' + a + ' + ' + b + ' - ' + c + ' = ' + ans + '$. Adding without subtracting the overlap counts it twice.' };
  });
  G('counting', 'STP6', function (r) {
    var kind = I(r, 0, 2), n, k, ans, stem, ex;
    function C(n, k) { var x = 1, i; for (i = 1; i <= k; i++) x = x * (n - k + i) / i; return Math.round(x); }
    if (kind === 0) { n = I(r, 6, 12); k = I(r, 2, 4); ans = C(n, k); stem = 'A club of ' + n + ' students will choose a committee of ' + k + ' members. How many different committees are possible?'; ex = 'Order does not matter, so use combinations: $\\binom{' + n + '}{' + k + '} = ' + ans + '$.'; }
    else if (kind === 1) { n = I(r, 6, 12); k = 3; ans = n * (n - 1) * (n - 2); stem = n + ' runners are in a race with no ties. In how many different ways can gold, silver, and bronze medals be awarded?'; ex = 'Order matters, so use permutations: $' + n + '\\cdot' + (n - 1) + '\\cdot' + (n - 2) + ' = ' + ans + '$.'; }
    else { n = I(r, 2, 4); k = I(r, 2, 3); ans = Math.pow(26, n) * Math.pow(10, k); stem = 'A code consists of ' + n + ' letters (A to Z, repetition allowed) followed by ' + k + ' digits (0 to 9, repetition allowed). How many different codes are possible?'; ex = 'By the fundamental counting principle: $26^{' + n + '}\\cdot10^{' + k + '} = ' + ans + '$.'; }
    return { type: 'num', diff: 2, _p: { kind: kind, n: n, k: k }, stem: stem, answer: ans, tol: 0, explain: ex };
  });
  G('expected-value', 'STP7', function (r) {
    var w1 = pick(r, [10, 20, 40, 50]), w2 = pick(r, [2, 4, 5, 6]), c = pick(r, [2, 3, 4, 5]);
    var ev = (w1 + 2 * w2) / 8 - c;
    return { type: 'num', diff: 2, _p: { w1: w1, w2: w2, c: c },
      stem: 'At a carnival, you pay $\\$' + c + '$ to spin a wheel with 8 equal sections. One section pays $\\$' + w1 + '$, two sections pay $\\$' + w2 + '$ each, and the other five pay nothing. What is your expected net gain per play, in dollars? (Enter a negative number for an expected loss.)',
      answer: clean(ev, 5), tol: 0.005, unit: 'dollars',
      explain: 'Expected payout $= \\dfrac18(' + w1 + ') + \\dfrac28(' + w2 + ') + \\dfrac58(0) = ' + clean((w1 + 2 * w2) / 8, 4) + '$. Subtract the cost to play: $' + clean((w1 + 2 * w2) / 8, 4) + ' - ' + c + ' = ' + clean(ev, 4) + '$. Forgetting to subtract the cost gives the expected <i>payout</i>, not the net gain.' };
  });
  G('empirical-rule', 'STP8', function (r) {
    var mu = pick(r, [50, 60, 70, 75, 100, 120]), sd = pick(r, [4, 5, 8, 10, 15]);
    var cum = { '-3': 0.15, '-2': 2.5, '-1': 16, '0': 50, '1': 84, '2': 97.5, '3': 99.85 };
    var lohi = pick(r, [[-1, 1], [-2, 2], [-1, 2], [-2, 1], [0, 1], [-1, 0], [1, 99], [-99, -2], [-99, -1], [2, 99], [0, 2], [-2, 0]]);
    var lo = lohi[0], hi = lohi[1], pl = lo === -99 ? 0 : cum[lo], ph = hi === 99 ? 100 : cum[hi];
    var ans = clean(ph - pl, 4);
    var val = function (k) { return mu + k * sd; };
    var q = lo === -99 ? 'less than ' + val(hi) : hi === 99 ? 'greater than ' + val(lo) : 'between ' + val(lo) + ' and ' + val(hi);
    return { type: 'num', diff: 2, _p: { mu: mu, sd: sd, lo: lo, hi: hi },
      stem: 'A set of test scores is approximately normally distributed with mean ' + mu + ' and standard deviation ' + sd + '. Using the 68-95-99.7 rule, about what percent of the scores are ' + q + '? Enter a percent (a decimal such as 81.5 is fine).',
      answer: ans, tol: 0.06, unit: '%',
      explain: 'Convert to standard deviations from the mean: ' + (lo === -99 ? '' : val(lo) + ' is ' + lo + ' SD') + (lo !== -99 && hi !== 99 ? ' and ' : '') + (hi === 99 ? '' : val(hi) + ' is ' + hi + ' SD') + ' from ' + mu + '. The empirical rule gives 34% between the mean and one SD on each side, 13.5% between one and two SD, and 2.35% between two and three SD, and by symmetry 50% lie on each side of the mean. Adding the right pieces gives ' + ans + '%.' };
  });
})();
