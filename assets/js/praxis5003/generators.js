/* Praxis 5003 diagnostic: generated question variants (numbers change every attempt).
   Each generator: { id, topic, make(rnd) -> question }. rnd() is a seeded 0..1 generator, so a saved session rebuilds
   exactly the same question. `_p` carries the parameters for the independent check in tools/testgens.js and is ignored by
   the page. Helpers (I, pick, shuf, gcd, clean, strMC) are the 5165 ones from generators-5165.js. Topic ids are the 5003
   ones in topics-5003.js.

   Slice 1 (queue item `praxis-5003-gens`, 25 Oct 2026): nine Numbers and Operations generators. Slice 2 (`praxis-5003-gens-at`,
   25 Oct 2026): six Algebraic Thinking generators. Slice 3 (`praxis-5003-gens-gm-dsp`, 25 Oct 2026): eight Geometry and
   Measurement, and Data and Probability generators (elapsed time, two unit conversions, L-shape area and perimeter, prism
   volume with fractional edges, mean/median/range, effect of a new value, one-event probability). Slice 4
   (`praxis-5003-gens-figs`, 27 Oct 2026): six generators that draw a figure with the `praxis-5003-figs` helpers (number line,
   circle graph, array, area model, net, double bar); each question carries `figure: {...}` and the page draws it.
   Every generator here also has a line-for-line Python port in courses/253/praxis-5003-gens/port_gens.py, checked by
   checks-gens.py, that recomputes the answers independently over thousands of seeds; tools/compare-golden.js checks that this
   file and the port produce the same questions. */
(function () {
  var PXD = window.PXD = window.PXD || {};
  PXD.gens = PXD.gens || [];
  function G(id, topic, make) { PXD.gens.push({ id: id, topic: topic, make: make }); }
  function I(r, a, b) { return a + Math.floor(r() * (b - a + 1)); }
  function pick(r, arr) { return arr[Math.floor(r() * arr.length)]; }
  function shuf(r, arr) { var a = arr.slice(), i, j, t; for (i = a.length - 1; i > 0; i--) { j = Math.floor(r() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; }
  function clean(x, d) { return parseFloat(x.toFixed(d == null ? 6 : d)); }
  function strMC(r, correct, wrongs, extras) {
    var all = [correct], seen = {}; seen[correct] = 1;
    wrongs.concat(extras || []).forEach(function (w) { if (!seen[w] && all.length < 4) { seen[w] = 1; all.push(w); } });
    all = shuf(r, all); return { choices: all, answer: all.indexOf(correct) };
  }
  function comma(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  function usd(cents) { return '\\$' + (cents / 100).toFixed(2); }          /* use inside $...$ */
  function pad(n, w) { var s = String(n); while (s.length < w) s = '0' + s; return s; }
  function decStr(v, d) {                                                   /* integer v scaled by 10^d, as a decimal string */
    var p = Math.pow(10, d); return Math.floor(v / p) + '.' + pad(v % p, d);
  }
  /* algebra helpers (slice 2). All take and return integers or strings; no division, so no float text. */
  function nzI(r, lo, hi) { var k = I(r, lo, hi - 1); return k >= 0 ? k + 1 : k; }   /* one draw: an integer in lo..hi except 0 (lo < 0 < hi) */
  function coef(a, v) { return a === 1 ? v : a === -1 ? '-' + v : a + v; }          /* "3x", "x", "-x" */
  function lin(a, b) {                                                              /* "ax + b" with tidy signs */
    var s = a === 0 ? '' : coef(a, 'x');
    if (b === 0) return s === '' ? '0' : s;
    if (s === '') return String(b);
    return s + (b < 0 ? ' - ' : ' + ') + Math.abs(b);
  }
  function addc(n) { return (n < 0 ? ' - ' : ' + ') + Math.abs(n); }                /* " + 4" or " - 4" */
  function sgn(a, v) { return (a < 0 ? ' - ' : ' + ') + (Math.abs(a) === 1 ? '' : Math.abs(a)) + v; }   /* " + 4x" or " - x" */
  /* ================= Numbers and Operations ================= */

  /* NO1: rounding whole numbers and decimals to a named place */
  G('round-place', 'NO1', function (r) {
    var kind = I(r, 0, 1), i, stem, ans, ex, rd, name, shown;
    if (kind === 0) {
      var len = I(r, 4, 6), kk = I(r, 1, len - 2), ds = [], x, p, names = { 1: 'ten', 2: 'hundred', 3: 'thousand', 4: 'ten thousand' };
      for (i = 0; i < len; i++) ds.push(i === 0 ? I(r, 1, 9) : I(r, 0, 9));
      if (r() < 0.35) ds[len - kk] = 5;
      x = parseInt(ds.join(''), 10); p = Math.pow(10, kk); name = names[kk]; rd = ds[len - kk];
      ans = Math.floor((x + p / 2) / p) * p;
      stem = 'Round ' + comma(x) + ' to the nearest ' + name + '.';
      ex = 'Look at the digit just to the right of the ' + name + 's place, which is ' + rd + '. ' + (rd >= 5 ? 'Because ' + rd + ' is 5 or more, round up: the digit in the ' + name + 's place goes up by one' : 'Because ' + rd + ' is less than 5, round down: the digit in the ' + name + 's place stays the same') + ', and every digit to its right becomes 0. The result is ' + comma(ans) + '. ' + (rd === 5 ? 'A digit of exactly 5 rounds up; rounding it down is the usual error.' : 'The usual slips are checking the wrong digit, or changing the digits to the right instead of replacing them with zeros.');
      return { type: 'num', diff: 1, _p: { kind: kind, x: x, kk: kk }, stem: stem, answer: ans, tol: 0, explain: ex };
    }
    var w = I(r, 1, 9), fd = [I(r, 0, 9), I(r, 0, 9), I(r, 0, 9), I(r, 1, 9)], d = I(r, 1, 3), q, ri, pn = { 1: 'tenth', 2: 'hundredth', 3: 'thousandth' };
    if (r() < 0.35) fd[d] = 5;
    var N = w * 10000 + fd[0] * 1000 + fd[1] * 100 + fd[2] * 10 + fd[3];
    shown = w + '.' + fd.join(''); name = pn[d]; rd = fd[d];
    q = Math.pow(10, 4 - d); ri = Math.floor((N + q / 2) / q);
    stem = 'Round ' + shown + ' to the nearest ' + name + '.';
    ex = 'The ' + name + 's place is decimal place ' + d + '. The digit just to its right is ' + rd + '. ' + (rd >= 5 ? 'Because ' + rd + ' is 5 or more, round up' : 'Because ' + rd + ' is less than 5, round down') + ', and drop the digits after the ' + name + 's place. The result is ' + decStr(ri, d) + '. ' + (rd === 5 ? 'A digit of exactly 5 rounds up.' : 'Keeping extra digits, or rounding the wrong digit, are the usual errors.');
    return { type: 'num', diff: 1, _p: { kind: kind, N: N, d: d }, stem: stem, answer: clean(ri / Math.pow(10, d), d), tol: 0, explain: ex };
  });

  /* NO1: expanded form of a five-digit number that contains zeros */
  G('expanded-form', 'NO1', function (r) {
    var ds, ok, tries = 0, i, N, zeros, correct, wrongs, terms;
    function val(d, e) { return d * Math.pow(10, e); }
    function fmt(vals) { return vals.map(comma).join(' + '); }
    do {
      ds = [I(r, 1, 9), I(r, 0, 9), I(r, 0, 9), I(r, 0, 9), I(r, 1, 9)];
      zeros = 0; for (i = 1; i < 4; i++) if (ds[i] === 0) zeros++;
      ok = zeros >= 1 && zeros <= 2; tries++;
    } while (!ok && tries < 500);
    if (!ok) ds = [4, 0, 3, 0, 5];
    N = ds[0] * 10000 + ds[1] * 1000 + ds[2] * 100 + ds[3] * 10 + ds[4];
    var nz = ds.filter(function (d) { return d !== 0; });
    var exact = [], right = [], left = [], big = [];
    for (i = 0; i < 5; i++) if (ds[i] !== 0) { exact.push(val(ds[i], 4 - i)); big.push(val(ds[i], 5 - i)); }
    nz.forEach(function (d, j) { right.push(val(d, nz.length - 1 - j)); left.push(val(d, 4 - j)); });
    correct = fmt(exact);
    wrongs = [fmt(right), fmt(left), fmt(big)];
    var mc = strMC(r, correct, wrongs);
    return { type: 'mc', diff: 2, _p: { N: N }, order: 'fixed',
      stem: 'Which of the following is ' + comma(N) + ' written in expanded form?',
      choices: mc.choices, answer: mc.answer,
      explain: 'Give each digit the value of its place: ' + fmt(exact) + ' = ' + comma(N) + '. A zero holds a place even though it adds nothing, so the digits after it keep their own places. Dropping the zero and sliding the later digits over gives ' + fmt(right) + ' (counting from the ones place) or ' + fmt(left) + ' (counting from the left); using the value one place too large for every digit gives ' + fmt(big) + '.' };
  });

  /* NO5: order of operations with a whole-number exponent */
  G('order-of-ops', 'NO5', function (r) {
    var t = I(r, 0, 4), a, b, c, d, e, k, tex, ans, ex, tries = 0;
    do {
      tries++;
      if (t === 0) {
        a = I(r, 2, 12); b = I(r, 2, 9); c = I(r, 2, 5);
        tex = a + ' + ' + b + ' \\times ' + c + '^2'; ans = a + b * c * c;
        ex = 'Exponent first: $' + c + '^2 = ' + c * c + '$. Then multiply: $' + b + ' \\times ' + c * c + ' = ' + b * c * c + '$. Then add: $' + a + ' + ' + b * c * c + ' = ' + ans + '$.';
      } else if (t === 1) {
        e = I(r, 2, 6); d = e * I(r, 2, 9); a = I(r, 2, 6); b = I(r, 2, 9); c = I(r, 2, 9);
        tex = a + ' \\times (' + b + ' + ' + c + ') - ' + d + ' \\div ' + e; ans = a * (b + c) - d / e;
        ex = 'Parentheses first: $' + b + ' + ' + c + ' = ' + (b + c) + '$. Then multiply and divide: $' + a + ' \\times ' + (b + c) + ' = ' + a * (b + c) + '$ and $' + d + ' \\div ' + e + ' = ' + d / e + '$. Then subtract: $' + a * (b + c) + ' - ' + d / e + ' = ' + ans + '$.';
      } else if (t === 2) {
        a = I(r, 20, 60); b = I(r, 2, 9); c = I(r, 2, 9); e = I(r, 2, 6); d = e * I(r, 2, 9);
        tex = a + ' - ' + b + ' \\times ' + c + ' + ' + d + ' \\div ' + e; ans = a - b * c + d / e;
        ex = 'Multiply and divide before adding and subtracting: $' + b + ' \\times ' + c + ' = ' + b * c + '$ and $' + d + ' \\div ' + e + ' = ' + d / e + '$. Then work left to right: $' + a + ' - ' + b * c + ' + ' + d / e + ' = ' + ans + '$.';
      } else if (t === 3) {
        a = I(r, 1, 6); b = I(r, 1, 6); c = I(r, 2, 6); d = I(r, 2, 6);
        tex = '(' + a + ' + ' + b + ')^2 - ' + c + ' \\times ' + d; ans = (a + b) * (a + b) - c * d;
        ex = 'Parentheses first: $' + a + ' + ' + b + ' = ' + (a + b) + '$. Then the exponent: $' + (a + b) + '^2 = ' + (a + b) * (a + b) + '$. Then multiply: $' + c + ' \\times ' + d + ' = ' + c * d + '$. Then subtract: $' + (a + b) * (a + b) + ' - ' + c * d + ' = ' + ans + '$.';
      } else {
        b = I(r, 2, 6); k = I(r, 2, 9); a = b * k; c = I(r, 2, 9);
        tex = a + ' \\div ' + b + ' \\times ' + c; ans = k * c;
        ex = 'Multiplication and division have the same rank, so work from left to right: $' + a + ' \\div ' + b + ' = ' + k + '$, then $' + k + ' \\times ' + c + ' = ' + ans + '$. Doing the multiplication first (dividing ' + a + ' by $' + b + ' \\times ' + c + '$) is the usual error.';
      }
    } while (ans <= 0 && tries < 500);
    if (t !== 4) ex += ' Working strictly from left to right, ignoring the order of operations, is the usual error.';
    return { type: 'num', diff: 1, _p: { t: t }, stem: 'What is the value of $' + tex + '$?', answer: ans, tol: 0, explain: ex };
  });

  /* NO7: which of four fractions is greatest or least */
  G('compare-fractions', 'NO7', function (r) {
    var fr, ok, i, j, tries = 0, big = r() < 0.5, best = 0;
    do {
      fr = []; ok = true;
      for (i = 0; i < 4; i++) { var d = I(r, 3, 12), n = I(r, 1, d - 1); fr.push([n, d]); }
      for (i = 0; i < 4; i++) {
        if (gcd(fr[i][0], fr[i][1]) !== 1) ok = false;
        for (j = 0; j < i; j++) if (fr[i][0] * fr[j][1] === fr[j][0] * fr[i][1]) ok = false;
      }
      var v = fr.map(function (p) { return p[0] / p[1]; }).sort(function (x, y) { return x - y; });
      if ((big ? v[3] - v[2] : v[1] - v[0]) >= 0.15) ok = false;    /* the two leaders must be close, so the choice takes thought */
      tries++;
    } while (!ok && tries < 500);
    if (!ok) fr = [[3, 4], [5, 8], [2, 3], [7, 12]];
    for (i = 1; i < 4; i++) {
      if (big ? fr[i][0] * fr[best][1] > fr[best][0] * fr[i][1] : fr[i][0] * fr[best][1] < fr[best][0] * fr[i][1]) best = i;
    }
    var f = function (p) { return '$\\dfrac{' + p[0] + '}{' + p[1] + '}$'; };
    var order = shuf(r, [0, 1, 2, 3]);
    var choices = order.map(function (k) { return f(fr[k]); });
    var list = order.map(function (k) { return '$\\dfrac{' + fr[k][0] + '}{' + fr[k][1] + '} \\approx ' + (fr[k][0] / fr[k][1]).toFixed(3) + '$'; }).join(', ');
    return { type: 'mc', diff: 2, _p: { fr: fr, big: big }, order: 'fixed',
      stem: 'Which of these fractions is the ' + (big ? 'greatest' : 'least') + '?',
      choices: choices, answer: order.indexOf(best),
      explain: 'Rewrite every fraction in the same form, for example as a decimal: ' + list + '. The ' + (big ? 'greatest' : 'least') + ' is ' + f(fr[best]) + '. Comparing only the numerators, or only the denominators, is the usual error: a bigger denominator means smaller pieces, not a bigger fraction.' };
  });

  /* NO2: a fraction of a quantity inside a two-step story */
  G('fraction-of-quantity', 'NO2', function (r) {
    var kind = I(r, 0, 2), a, b, c, d, m, N, k, ans, stem, ex, unit, tries = 0, nm = pick(r, ['Dara', 'Marcus', 'Elena', 'Jamal', 'Priya', 'Tomas']);
    if (kind === 0) {
      b = pick(r, [3, 4, 5, 6, 8]); a = I(r, 1, b - 1); m = I(r, 3, 12); N = b * m; ans = (b - a) * m;
      stem = 'A bag has ' + N + ' marbles. $\\dfrac{' + a + '}{' + b + '}$ of the marbles are red. How many marbles are not red?'; unit = 'marbles';
      ex = 'One $\\dfrac{1}{' + b + '}$ of ' + N + ' is ' + m + ', so the red marbles number ' + a + ' $\\times$ ' + m + ' = ' + a * m + '. The marbles that are not red are ' + N + ' $-$ ' + a * m + ' = ' + ans + '. (Answering ' + a * m + ' finds the red marbles, not the ones that are not red.)';
    } else if (kind === 1) {
      do {
        b = pick(r, [3, 4, 5, 6, 8]); a = I(r, 1, b - 1); N = b * I(r, 3, 15); k = I(r, 2, 9); ans = N / b * (b - a) - k; tries++;
      } while (ans < 1 && tries < 500);
      stem = nm + ' has $\\$' + N + '$. ' + nm + ' spends $\\dfrac{' + a + '}{' + b + '}$ of the money on a book and then $\\$' + k + '$ on lunch. How much money does ' + nm + ' have left?'; unit = 'dollars';
      ex = 'The book costs $\\dfrac{' + a + '}{' + b + '}$ of ' + N + ' = ' + a + ' $\\times$ ' + N / b + ' = ' + a * N / b + ' dollars, which leaves ' + N + ' $-$ ' + a * N / b + ' = ' + N / b * (b - a) + ' dollars. After lunch, ' + N / b * (b - a) + ' $-$ ' + k + ' = ' + ans + ' dollars. (Taking the lunch money off first, or forgetting to subtract the book, are the usual slips.)';
    } else {
      b = pick(r, [2, 3, 4, 5]); d = pick(r, [2, 3, 4]); m = I(r, 2, 6); N = b * d * m; a = I(r, 1, b - 1); c = I(r, 1, d - 1);
      ans = N / b * (b - a) / d * c;
      stem = 'Of the ' + N + ' students in a grade, $\\dfrac{' + a + '}{' + b + '}$ walk to school. Of the students who do not walk, $\\dfrac{' + c + '}{' + d + '}$ ride a bus. How many students ride a bus?'; unit = 'students';
      ex = 'The students who walk are $\\dfrac{' + a + '}{' + b + '}$ of ' + N + ' = ' + a * N / b + ', so ' + N + ' $-$ ' + a * N / b + ' = ' + N / b * (b - a) + ' do not walk. The bus riders are $\\dfrac{' + c + '}{' + d + '}$ of that group: ' + c + ' $\\times$ ' + N / b * (b - a) / d + ' = ' + ans + '. (Taking $\\dfrac{' + c + '}{' + d + '}$ of all ' + N + ' students uses the wrong whole.)';
    }
    return { type: 'num', diff: 2, _p: { kind: kind, N: N, a: a, b: b, c: c, d: d, k: k }, stem: stem, answer: ans, tol: 0, unit: unit, explain: ex };
  });

  /* NO8: percent problems (sale price, percent of a number, what percent, find the original) */
  G('percent-situations', 'NO8', function (r) {
    var kind = I(r, 0, 3), P, p, N, x, O, S, ans, stem, ex, unit, tol = 0, tries = 0, u, cents;
    if (kind === 0) {
      P = I(r, 8, 150); p = pick(r, [10, 15, 20, 25, 30, 35, 40, 50]); cents = P * (100 - p); ans = cents / 100; tol = 0.005; unit = 'dollars';
      stem = 'A jacket regularly costs $\\$' + P + '$. It is on sale for ' + p + '% off. What is the sale price, in dollars?';
      ex = 'The discount is ' + p + '% of ' + P + ': $' + P + ' \\times ' + clean(p / 100, 2) + ' = ' + (P * p / 100).toFixed(2) + '$ dollars, so the sale price is $' + P + ' - ' + (P * p / 100).toFixed(2) + ' = ' + (cents / 100).toFixed(2) + '$ dollars. (Subtracting ' + p + ' dollars instead of ' + p + '% is the usual error, and so is giving the discount rather than the sale price.)';
    } else if (kind === 1) {
      p = pick(r, [10, 12, 15, 20, 25, 30, 35, 40, 60, 75, 80]); u = 100 / gcd(100, p); N = u * I(r, 2, 12);
      while (N < 20 && tries < 50) { N += u; tries++; }
      ans = N * p / 100; unit = 'students';
      stem = 'In a survey of ' + N + ' students, ' + p + '% said that pizza is their favorite lunch. How many students said pizza?';
      ex = p + '% means ' + p + ' per 100, so ' + p + '% of ' + N + ' = $' + N + ' \\times ' + clean(p / 100, 2) + ' = ' + ans + '$ students. (Entering ' + p + ' itself confuses the percent with the count.)';
    } else if (kind === 2) {
      do { N = pick(r, [20, 25, 40, 50, 80, 200, 250]); p = I(r, 1, 19) * 5; tries++; } while ((N * p) % 100 !== 0 && tries < 500);
      x = N * p / 100; ans = p; unit = '%';
      stem = 'A team won ' + x + ' of its ' + N + ' games. What percent of its games did the team win?';
      ex = 'Percent is a part out of 100: $\\dfrac{' + x + '}{' + N + '} = ' + clean(x / N, 4) + ' = ' + p + '\\%$. (Dividing the other way, ' + N + ' by ' + x + ', or answering with the number of wins, are the usual errors.)';
    } else {
      p = pick(r, [10, 20, 25, 30, 40, 50]); O = 5 * I(r, 6, 80); cents = O * (100 - p); ans = O; unit = 'dollars';
      stem = 'A bike is on sale for $' + usd(cents) + '$, which is ' + (100 - p) + '% of its original price. What was the original price, in dollars?';
      ex = 'The sale price is ' + (100 - p) + '% of the original, so original $\\times ' + clean((100 - p) / 100, 2) + ' = ' + (cents / 100).toFixed(2) + '$. Divide: $' + (cents / 100).toFixed(2) + ' \\div ' + clean((100 - p) / 100, 2) + ' = ' + O + '$ dollars. (Adding ' + p + '% of the sale price to it gives a different number, because the ' + p + '% was taken off the original, not the sale price.)';
    }
    return { type: 'num', diff: 2, _p: { kind: kind, P: P, p: p, N: N, x: x, O: O, cents: cents }, stem: stem, answer: ans, tol: tol, unit: unit, explain: ex };
  });

  /* NO8: the better buy (lowest price per unit among four package sizes) */
  G('better-buy', 'NO8', function (r) {
    var prod = pick(r, [['juice', 'ounces'], ['cereal', 'ounces'], ['laundry soap', 'ounces'], ['rice', 'pounds'], ['flour', 'pounds']]);
    var oz = prod[1] === 'ounces', sizes = oz ? [8, 12, 16, 20, 24, 32, 40, 48, 64] : [2, 3, 4, 5, 6, 8, 10];
    var us = [], k;
    for (k = oz ? 8 : 50; k <= (oz ? 30 : 150); k++) us.push(k);
    var u = shuf(r, us).slice(0, 4), sz = shuf(r, sizes).slice(0, 4).sort(function (a, b) { return a - b; });
    var best = 0, i;
    for (i = 1; i < 4; i++) if (u[i] < u[best]) best = i;
    var choices = sz.map(function (s, j) { return s + ' ' + prod[1] + ' for $' + usd(s * u[j]) + '$'; });
    var rates = sz.map(function (s, j) { return s + ' ' + prod[1] + ': $' + usd(s * u[j]) + ' \\div ' + s + ' = ' + usd(u[j]) + '$ per ' + prod[1].slice(0, -1); }).join('; ');
    return { type: 'mc', diff: 2, _p: { sz: sz, u: u }, order: 'fixed',
      stem: 'A store sells ' + prod[0] + ' in four package sizes. Which size has the lowest price per ' + prod[1].slice(0, -1) + '?',
      choices: choices, answer: best,
      explain: 'Compare unit prices, the cost of one ' + prod[1].slice(0, -1) + ': ' + rates + '. The lowest is ' + sz[best] + ' ' + prod[1] + '. The package with the lowest total price, or the largest package, is not automatically the best buy.' };
  });

  /* NO9: greatest common factor and least common multiple in a story */
  G('gcf-lcm-context', 'NO9', function (r) {
    var kind = I(r, 0, 1), a, b, g, m, n, ans, stem, ex, unit, tries = 0, L, ctx;
    if (kind === 0) {
      do { a = I(r, 3, 12); b = I(r, 3, 12); L = a * b / gcd(a, b); tries++; } while ((a === b || a % b === 0 || b % a === 0 || L > 120) && tries < 500);
      ctx = I(r, 0, 1); ans = L; unit = ctx ? 'minutes' : 'seconds';
      stem = ctx ? 'Bus A leaves a station every ' + a + ' minutes and Bus B leaves every ' + b + ' minutes. Both buses leave together at 8:00 am. After how many minutes will they next leave together?'
                 : 'A red light blinks every ' + a + ' seconds and a green light blinks every ' + b + ' seconds. They just blinked together. In how many seconds will they next blink together?';
      ex = 'The answer is the least common multiple of ' + a + ' and ' + b + '. Multiples of ' + a + ': ' + [1, 2, 3, 4, 5].map(function (j) { return a * j; }).join(', ') + ', ... and the first of them that is also a multiple of ' + b + ' is ' + L + '. (Multiplying ' + a + ' $\\times$ ' + b + ' = ' + a * b + ' gives a common multiple, but not the least one, unless the numbers share no factor.)';
    } else {
      do { g = I(r, 2, 6); m = I(r, 2, 9); n = I(r, 2, 9); tries++; } while ((m === n || gcd(m, n) !== 1) && tries < 500);
      a = g * m; b = g * n; ans = g; unit = 'kits';
      stem = 'A teacher has ' + a + ' pencils and ' + b + ' erasers. The teacher wants to make identical supply kits that use all of the pencils and all of the erasers, with none left over. What is the greatest number of kits the teacher can make?';
      ex = 'The number of kits must divide both ' + a + ' and ' + b + ', so the largest possible number is their greatest common factor. Here ' + a + ' = ' + g + ' $\\times$ ' + m + ' and ' + b + ' = ' + g + ' $\\times$ ' + n + ', and ' + m + ' and ' + n + ' have no common factor, so the GCF is ' + g + '. Each kit has ' + m + ' pencils and ' + n + ' erasers. (Finding the least common multiple, ' + a * n + ', answers a different question.)';
    }
    return { type: 'num', diff: 2, _p: { kind: kind, a: a, b: b }, stem: stem, answer: ans, tol: 0, unit: unit, explain: ex };
  });

  /* NO9: choose the prime factorization of a number */
  G('prime-factorization', 'NO9', function (r) {
    var pool = [2, 3, 5, 7], L, N, ok, tries = 0, i, j, cnt;
    function show(list) {
      var s = list.slice().sort(function (a, b) { return a - b; }), out = [], k = 0, e;
      while (k < s.length) { e = 1; while (k + e < s.length && s[k + e] === s[k]) e++; out.push(e === 1 ? String(s[k]) : s[k] + '^{' + e + '}'); k += e; }
      return '$' + out.join(' \\cdot ') + '$';
    }
    do {
      var nd = I(r, 2, 3), ps = shuf(r, pool).slice(0, nd), es = [], mx = 0;
      L = []; N = 1;
      ps.forEach(function (p) { var e = I(r, 1, 3); es.push(e); if (e > mx) mx = e; for (var t = 0; t < e; t++) { L.push(p); N *= p; } });
      ok = mx >= 2 && L.length <= 6 && N >= 60 && N <= 1500; tries++;
    } while (!ok && tries < 500);
    if (!ok) { L = [2, 2, 2, 3, 5]; N = 120; ps = [2, 3, 5]; es = [3, 1, 1]; }
    L.sort(function (a, b) { return a - b; });
    var correct = show(L);
    /* wrong 1: two prime factors multiplied into one composite factor */
    i = I(r, 0, L.length - 1); j = I(r, 0, L.length - 2); if (j >= i) j++;
    var w1 = L.filter(function (v, idx) { return idx !== i && idx !== j; }).concat([L[i] * L[j]]);
    /* wrong 2: one extra prime factor */
    var w2 = L.concat([pick(r, ps)]);
    /* wrong 3: one factor dropped from a repeated prime */
    var rep = ps.filter(function (p, idx) { return es[idx] >= 2; }), drop = pick(r, rep), w3 = L.slice();
    w3.splice(w3.indexOf(drop), 1);
    /* wrong 4: one factor swapped for a prime not in the factorization */
    var others = [2, 3, 5, 7, 11].filter(function (p) { return ps.indexOf(p) < 0; }), w4 = L.slice();
    w4[I(r, 0, w4.length - 1)] = pick(r, others);
    var mc = strMC(r, correct, [show(w1), show(w2), show(w3), show(w4)]);
    var chain = String(N), rem = N, used = [];
    L.forEach(function (p) { used.push(p); rem = rem / p; if (rem > 1) chain += ' = ' + used.join(' \\cdot ') + ' \\cdot ' + rem; });
    return { type: 'mc', diff: 2, _p: { N: N }, order: 'fixed',
      stem: 'Which of the following is the prime factorization of $' + N + '$?',
      choices: mc.choices, answer: mc.answer,
      explain: 'Keep dividing by primes until only primes are left: $' + chain + '$, which is ' + correct + '. A product that contains a composite factor such as ' + show([w1[w1.length - 1]]) + ' is not a prime factorization, and the product of the factors must equal $' + N + '$: multiply each choice to check.' };
  });

  /* ================= Algebraic Thinking (slice 2, queue item `praxis-5003-gens-at`, 25 Oct 2026) ================= */

  /* AT2: evaluate an expression for given values, negative values included */
  G('evaluate-expression', 'AT2', function (r) {
    var t = I(r, 0, 3), a, b, c, v, w, ans, tex, ex, stem, tries = 0;
    do {
      tries++;
      if (t === 0) {
        a = I(r, 2, 9); b = nzI(r, -12, 12); v = nzI(r, -6, 8);
        tex = lin(a, b); ans = a * v + b;
        stem = 'Evaluate $' + tex + '$ when $x = ' + v + '$.';
        ex = 'Replace $x$ with $' + v + '$: $' + a + '(' + v + ')' + addc(b) + ' = ' + a * v + addc(b) + ' = ' + ans + '$.';
      } else if (t === 1) {
        a = I(r, 2, 5); b = nzI(r, -6, 6); c = nzI(r, -9, 9); v = nzI(r, -5, 5);
        tex = a + 'x^2' + sgn(b, 'x') + addc(c); ans = a * v * v + b * v + c;
        stem = 'Evaluate $' + tex + '$ when $x = ' + v + '$.';
        ex = 'Replace $x$ with $' + v + '$ and square before multiplying: $' + a + '(' + v + ')^2' + sgn(b, '(' + v + ')') + addc(c) + ' = ' + a * v * v + addc(b * v) + addc(c) + ' = ' + ans + '$.' + (v < 0 ? ' A negative number squared is positive: $(' + v + ')^2 = ' + v * v + '$, not $-' + v * v + '$.' : '');
      } else if (t === 2) {
        a = I(r, 2, 7); b = nzI(r, -7, 7); v = nzI(r, -5, 6); w = nzI(r, -5, 6);
        tex = a + 'x' + sgn(b, 'y'); ans = a * v + b * w;
        stem = 'Evaluate $' + tex + '$ when $x = ' + v + '$ and $y = ' + w + '$.';
        ex = 'Replace $x$ with $' + v + '$ and $y$ with $' + w + '$: $' + a + '(' + v + ')' + sgn(b, '(' + w + ')') + ' = ' + a * v + addc(b * w) + ' = ' + ans + '$.';
      } else {
        a = I(r, 2, 6); b = nzI(r, -6, 6); c = nzI(r, -6, 6); v = nzI(r, -5, 6);
        tex = a + '(' + lin(1, b) + ')' + sgn(c, 'x'); ans = a * (v + b) + c * v;
        stem = 'Evaluate $' + tex + '$ when $x = ' + v + '$.';
        ex = 'Replace $x$ with $' + v + '$ and do the parentheses first: $' + a + '(' + v + addc(b) + ')' + sgn(c, '(' + v + ')') + ' = ' + a + '(' + (v + b) + ')' + addc(c * v) + ' = ' + a * (v + b) + addc(c * v) + ' = ' + ans + '$.';
      }
    } while ((ans === 0 || (t === 3 && a + c === 0)) && tries < 500);       /* no zero answers, and the answer must depend on x */
    return { type: 'num', diff: 1, _p: { t: t }, stem: stem, answer: ans, tol: 0, explain: ex + ' The usual slips are sign errors with a negative value and adding before multiplying.' };
  });

  /* AT2: equivalent expressions (subtract a group, distribute and combine, factor out the GCF) */
  G('simplify-expression', 'AT2', function (r) {
    var kind = I(r, 0, 2), a, b, c, d, g, m, n, K, tries = 0, ok, stem, key, w1, w2, w3, ex;
    if (kind === 0) {
      do {
        a = I(r, 2, 9); b = nzI(r, -9, 9); c = I(r, 2, 9); d = nzI(r, -9, 9);
        ok = a !== c && b !== d && b + d !== 0 && a + b - c - d !== 0; tries++;
      } while (!ok && tries < 500);
      if (!ok) { a = 5; b = 3; c = 2; d = -4; }
      stem = 'Which expression is equivalent to $(' + lin(a, b) + ') - (' + lin(c, d) + ')$?';
      key = lin(a - c, b - d); w1 = lin(a - c, b + d); w2 = lin(a + c, b - d); w3 = lin(a + b - c - d, 0);
      ex = 'Subtracting a group changes the sign of every term inside it: $' + lin(a, b) + sgn(-c, 'x') + addc(-d) + ' = ' + key + '$. A common slip is to change the sign of only the first term in the group, which gives $' + w1 + '$; another is to add a constant to an $x$ term, which gives $' + w3 + '$.';
    } else if (kind === 1) {
      do {
        a = I(r, 2, 6); b = I(r, 2, 5); c = nzI(r, -7, 7); d = nzI(r, -6, 6); K = a * b + d;
        ok = K !== 0 && b + d !== 0 && K + a * c !== 0; tries++;
      } while (!ok && tries < 500);
      if (!ok) { a = 3; b = 2; c = -5; d = 4; K = 10; }
      stem = 'Which expression is equivalent to $' + a + '(' + lin(b, c) + ')' + sgn(d, 'x') + '$?';
      key = lin(K, a * c); w1 = lin(K, c); w2 = lin(K + a * c, 0); w3 = lin(b + d, a * c);
      ex = 'Multiply each term inside the parentheses by ' + a + ': $' + a + '(' + lin(b, c) + ') = ' + lin(a * b, a * c) + '$. Then combine the $x$ terms: $' + lin(a * b, a * c) + sgn(d, 'x') + ' = ' + key + '$. A common slip is to multiply only the first term by ' + a + ', which gives $' + w1 + '$; another is to combine an $x$ term with a constant, which gives $' + w2 + '$.';
    } else {
      do { g = I(r, 2, 9); m = I(r, 2, 7); n = I(r, 2, 9); ok = gcd(m, n) === 1; tries++; } while (!ok && tries < 500);
      if (!ok) { g = 6; m = 2; n = 3; }
      stem = 'Which expression is equivalent to $' + lin(g * m, g * n) + '$?';
      key = g + '(' + lin(m, n) + ')'; w1 = g + '(' + lin(m, g * n) + ')'; w2 = g + '(' + lin(1, n) + ')'; w3 = (g * m) + '(' + lin(1, n) + ')';
      ex = 'The numbers ' + g * m + ' and ' + g * n + ' have the greatest common factor ' + g + ', so factor it out: $' + lin(g * m, g * n) + ' = ' + key + '$. Check by distributing: ' + g + ' $\\times$ ' + m + 'x is ' + g * m + 'x and ' + g + ' $\\times$ ' + n + ' is ' + g * n + '. Distributing each of the other choices shows what it really equals; for example $' + w1 + '$ is $' + lin(g * m, g * g * n) + '$.';
    }
    var mc = strMC(r, '$' + key + '$', ['$' + w1 + '$', '$' + w2 + '$', '$' + w3 + '$']);
    return { type: 'mc', diff: 2, _p: { kind: kind }, order: 'fixed', stem: stem, choices: mc.choices, answer: mc.answer, explain: ex };
  });

  /* AT4: solve a linear equation with an integer answer (two-step, fraction, parentheses, variable on both sides) */
  G('two-step-equation', 'AT4', function (r) {
    var t = I(r, 0, 3), a, b, c, e, d, k, v, left, right, ex, bad, tries = 0;
    do {
      tries++;
      if (t === 0) {
        a = I(r, 2, 9) * (r() < 0.3 ? -1 : 1); b = nzI(r, -15, 15); v = nzI(r, -9, 12); c = a * v + b; bad = c === 0;
        left = lin(a, b); right = String(c);
        ex = (b < 0 ? 'Add ' : 'Subtract ') + Math.abs(b) + ' on both sides: $' + coef(a, 'x') + ' = ' + (c - b) + '$. Then divide both sides by ' + a + ': $x = ' + v + '$. Check: $' + a + '(' + v + ')' + addc(b) + ' = ' + a * v + addc(b) + ' = ' + c + '$.';
      } else if (t === 1) {
        a = I(r, 2, 8); k = nzI(r, -6, 9); b = nzI(r, -12, 12); v = a * k; c = k + b; bad = c === 0;
        left = '\\dfrac{x}{' + a + '}' + addc(b); right = String(c);
        ex = (b < 0 ? 'Add ' : 'Subtract ') + Math.abs(b) + ' on both sides: $\\dfrac{x}{' + a + '} = ' + k + '$. Then multiply both sides by ' + a + ': $x = ' + a + '(' + k + ') = ' + v + '$. Check: $\\dfrac{' + v + '}{' + a + '}' + addc(b) + ' = ' + k + addc(b) + ' = ' + c + '$.';
      } else if (t === 2) {
        a = I(r, 2, 7); b = nzI(r, -9, 9); v = nzI(r, -8, 10); c = a * (v + b); bad = c === 0;
        left = a + '(' + lin(1, b) + ')'; right = String(c);
        ex = 'Divide both sides by ' + a + ': $' + lin(1, b) + ' = ' + (v + b) + '$. Then ' + (b < 0 ? 'add ' : 'subtract ') + Math.abs(b) + ' on both sides: $x = ' + v + '$. (Distributing first works too.) Check: $' + a + '(' + v + addc(b) + ') = ' + a + '(' + (v + b) + ') = ' + c + '$.';
      } else {
        a = I(r, 2, 9); e = nzI(r, -6, 6); if (e === a) e = a + 1; b = nzI(r, -12, 12); v = nzI(r, -8, 10); d = (a - e) * v + b; bad = false;
        left = lin(a, b); right = lin(e, d);
        ex = 'Get the $x$ terms on one side by subtracting $' + coef(e, 'x') + '$ from both sides: $' + lin(a - e, b) + ' = ' + d + '$. Then ' + (b < 0 ? 'add ' : 'subtract ') + Math.abs(b) + ' on both sides: $' + coef(a - e, 'x') + ' = ' + (d - b) + '$.' + (a - e === 1 ? ' So $x = ' + v + '$.' : ' Divide both sides by ' + (a - e) + ': $x = ' + v + '$.') + ' Check: the left side is $' + a + '(' + v + ')' + addc(b) + ' = ' + (a * v + b) + '$ and the right side is $' + coef(e, '(' + v + ')') + addc(d) + ' = ' + (e * v + d) + '$.';
      }
    } while (bad && tries < 500);
    return { type: 'num', diff: 1, _p: { t: t }, stem: 'Solve for $x$: $' + left + ' = ' + right + '$.', answer: v, tol: 0, explain: ex + ' Doing the same thing to both sides, and doing it in the right order, keeps the equation balanced.' };
  });

  /* AT4: solve a linear inequality, half of them with a negative coefficient */
  G('solve-inequality', 'AT4', function (r) {
    var OP = ['<', '>', '\\le', '\\ge'], FL = [1, 0, 3, 2];
    var neg = r() < 0.5, a = I(r, 2, 8) * (neg ? -1 : 1), o = I(r, 0, 3), v = nzI(r, -9, 9), b = nzI(r, -15, 15), c = a * v + b;
    var cd = neg ? FL[o] : o, wd = neg ? o : FL[o];
    function ch(dir, val) { return '$x ' + OP[dir] + ' ' + val + '$'; }
    var mc = strMC(r, ch(cd, v), [ch(wd, v), ch(cd, -v), ch(cd, c - b)]);
    var t = v + (cd === 1 || cd === 3 ? 1 : -1), lhs = a * t + b;
    return { type: 'mc', diff: 2, _p: { a: a, b: b, c: c, o: o }, order: 'fixed',
      stem: 'Which of these is the solution of $' + lin(a, b) + ' ' + OP[o] + ' ' + c + '$?',
      choices: mc.choices, answer: mc.answer,
      explain: (b < 0 ? 'Add ' : 'Subtract ') + Math.abs(b) + ' on both sides: $' + coef(a, 'x') + ' ' + OP[o] + ' ' + (c - b) + '$. Then divide both sides by ' + a + '. ' + (neg ? 'Dividing by a negative number reverses the inequality, so $' + OP[o] + '$ becomes $' + OP[cd] + '$: ' : 'Dividing by a positive number keeps the direction: ') + '$x ' + OP[cd] + ' ' + v + '$. Check with $x = ' + t + '$, which is in this solution set: $' + a + '(' + t + ')' + addc(b) + ' = ' + lhs + '$, and $' + lhs + ' ' + OP[o] + ' ' + c + '$ is true. ' + (neg ? 'Leaving the inequality sign alone is the usual error.' : 'Reversing the sign when dividing by a positive number is a mistake.') };
  });

  /* AT6: find the rule for a function table (stem plus table, no figure) */
  G('function-table-rule', 'AT6', function (r) {
    var m, b, s, h, K, rules, tries = 0, ok, i, j, xs = [], ys = [];
    do {
      m = I(r, 2, 9); b = I(r, 1, 9); s = I(r, 1, 3); h = I(r, 1, 2); K = (m - 1) * s + b;
      rules = ['y = ' + lin(m, b), 'y = ' + coef(m, 'x'), 'y = ' + lin(1, K), 'y = ' + lin(b, m), 'y = ' + lin(m, -b)];
      ok = b !== m;
      for (i = 0; i < 5; i++) for (j = 0; j < i; j++) if (rules[i] === rules[j]) ok = false;
      tries++;
    } while (!ok && tries < 500);
    if (!ok) { m = 3; b = 2; s = 1; h = 1; K = 4; rules = ['y = 3x + 2', 'y = 3x', 'y = x + 4', 'y = 2x + 3', 'y = 3x - 2']; }
    for (i = 0; i < 4; i++) { xs.push(s + i * h); ys.push(m * (s + i * h) + b); }
    var td = function (v) { return '<td>' + v + '</td>'; };
    var mc = strMC(r, '$' + rules[0] + '$', ['$' + rules[1] + '$', '$' + rules[2] + '$', '$' + rules[3] + '$', '$' + rules[4] + '$']);
    return { type: 'mc', diff: 2, _p: { m: m, b: b, s: s, h: h }, order: 'fixed',
      stem: 'The table shows four pairs of inputs and outputs of a function rule. Which rule fits every pair in the table?<table class="q-table"><tbody><tr><th>$x$</th>' + xs.map(td).join('') + '</tr><tr><th>$y$</th>' + ys.map(td).join('') + '</tr></tbody></table>',
      choices: mc.choices, answer: mc.answer,
      explain: 'From one pair to the next the output goes up by ' + m * h + ' while the input goes up by ' + h + (h > 1 ? ', which is ' + m + ' for each 1 the input goes up' : '') + ', so the rule starts with $' + m + 'x$. When $x = ' + s + '$, $' + m + 'x = ' + m * s + '$ but the output is ' + ys[0] + ', so add ' + b + ': $' + rules[0] + '$. Check another pair: $x = ' + xs[3] + '$ gives $' + m + '(' + xs[3] + ') + ' + b + ' = ' + ys[3] + '$. A rule must fit every pair, not only the first: $' + rules[2] + '$ fits the pair $(' + s + ', ' + ys[0] + ')$ but not $(' + xs[1] + ', ' + ys[1] + ')$.' };
  });

  /* AT6: an arithmetic pattern told in words (nth term, or which figure uses T tiles); no figure */
  G('tile-pattern', 'AT6', function (r) {
    var kind = I(r, 0, 1), a = I(r, 2, 9), d = I(r, 2, 7), n = I(r, 10, 30), T, stem, ans, ex, unit;
    if (a === d) a += 1;
    T = a + (n - 1) * d;
    var head = 'A pattern is built from square tiles. Figure 1 uses ' + a + ' tiles, Figure 2 uses ' + (a + d) + ' tiles, and Figure 3 uses ' + (a + 2 * d) + ' tiles. The number of tiles grows by the same amount from each figure to the next. ';
    if (kind === 0) {
      stem = head + 'How many tiles does Figure ' + n + ' use?'; ans = T; unit = 'tiles';
      ex = 'Each figure adds ' + d + ' tiles. Figure ' + n + ' is ' + (n - 1) + ' steps after Figure 1, so it uses $' + a + ' + ' + d + '(' + (n - 1) + ') = ' + a + ' + ' + d * (n - 1) + ' = ' + T + '$ tiles. (Taking ' + n + ' steps instead of ' + (n - 1) + ' gives ' + (T + d) + ', which is Figure ' + (n + 1) + '.)';
    } else {
      stem = head + 'Which figure number uses ' + T + ' tiles?'; ans = n; unit = '';
      ex = 'Figure 1 already has ' + a + ' tiles, and each step adds ' + d + '. The tiles added after Figure 1 number $' + T + ' - ' + a + ' = ' + (T - a) + '$, which is $' + (T - a) + ' \\div ' + d + ' = ' + (n - 1) + '$ steps. Figure 1 is the start, so the figure number is $' + (n - 1) + ' + 1 = ' + n + '$. (Answering ' + (n - 1) + ' forgets Figure 1.)';
    }
    return { type: 'num', diff: 2, _p: { kind: kind, a: a, d: d, n: n }, stem: stem, answer: ans, tol: 0, unit: unit, explain: ex };
  });

  /* ================= Geometry and Measurement, Data and Probability (slice 3, queue item `praxis-5003-gens-gm-dsp`, 25 Oct 2026) ================= */

  /* helpers (slice 3): integers and strings only, so the text is the same in JavaScript and Python */
  function timeStr(m) { var h = Math.floor(m / 60), h12 = h % 12 === 0 ? 12 : h % 12; return h12 + ':' + pad(m % 60, 2) + (h < 12 ? ' am' : ' pm'); }   /* minutes after midnight -> "2:45 pm" */
  function fracTex(n, d) {                                                  /* n/d in lowest terms as a mixed number: "3", "\dfrac{3}{4}", "2\dfrac{1}{2}" */
    var g = gcd(n, d), w; n = n / g; d = d / g; w = Math.floor(n / d); n = n % d;
    if (n === 0) return String(w);
    return (w > 0 ? String(w) : '') + '\\dfrac{' + n + '}{' + d + '}';
  }
  function impTex(n, d) { return d === 1 ? String(n) : '\\dfrac{' + n + '}{' + d + '}'; }                   /* an improper fraction, as it stands */
  function propTex(n, d) { var g = gcd(n, d); return d / g === 1 ? String(n / g) : '\\dfrac{' + n / g + '}{' + d / g + '}'; }   /* lowest terms, never a mixed number; "2" rather than 2/1 */
  function halfStr(s) { return s % 2 === 0 ? String(s / 2) : Math.floor(s / 2) + '.5'; }                     /* s/2 for a whole number s, as text */
  function isPrime(k) { var d; if (k < 2) return false; for (d = 2; d * d <= k; d++) if (k % d === 0) return false; return true; }
  function sumOf(a) { var s = 0, i; for (i = 0; i < a.length; i++) s += a[i]; return s; }
  function ordered(a) { return a.slice().sort(function (x, y) { return x - y; }); }

  /* GM6: elapsed time in minutes between two clock times, or the end time from a start and a length of time */
  G('elapsed-time', 'GM6', function (r) {
    var kind = I(r, 0, 1), ctx = pick(r, [['A movie', 'starts'], ['A bus ride', 'begins'], ['Band practice', 'starts'], ['A baking class', 'begins']]);
    var S, D, E, tries = 0, ok, stem, ex, h, m, T, H1, H2, parts, txt, wrongs, mc;
    do {
      S = 5 * I(r, 72, 190); D = 5 * I(r, 14, 70); E = S + D; tries++;
      ok = S % 60 !== 0 && E % 60 !== 0 && D % 60 !== 0;                  /* neither time on the hour, and not a whole number of hours long */
    } while (!ok && tries < 500);
    if (!ok) { S = 500; D = 135; E = 635; }
    if (kind === 0) {
      H1 = S - S % 60 + 60; H2 = E - E % 60;
      parts = [H1 - S]; txt = 'From ' + timeStr(S) + ' to ' + timeStr(H1) + ' is ' + (H1 - S) + ' minutes.';
      if (H2 > H1) { txt += ' From ' + timeStr(H1) + ' to ' + timeStr(H2) + ' is ' + (H2 - H1) / 60 + (H2 - H1 === 60 ? ' hour' : ' hours') + ', or ' + (H2 - H1) + ' minutes.'; parts.push(H2 - H1); }
      txt += ' From ' + timeStr(H2) + ' to ' + timeStr(E) + ' is ' + (E - H2) + ' minutes.'; parts.push(E - H2);
      stem = ctx[0] + ' ' + ctx[1] + ' at ' + timeStr(S) + ' and ends at ' + timeStr(E) + '. How many minutes does it last?';
      ex = 'Count in pieces. ' + txt + ' Add them: ' + parts.join(' + ') + ' = ' + D + ' minutes. Subtracting the clock numbers as if they were decimals is the usual slip: an hour has 60 minutes, not 100.';
      return { type: 'num', diff: 2, _p: { kind: kind, S: S, D: D }, stem: stem, answer: D, tol: 0, unit: 'minutes', explain: ex };
    }
    h = Math.floor(D / 60); m = D % 60; T = S + 60 * h;
    stem = ctx[0] + ' ' + ctx[1] + ' at ' + timeStr(S) + ' and lasts ' + h + (h === 1 ? ' hour ' : ' hours ') + m + ' minutes. At what time does it end?';
    wrongs = [timeStr(E - 60), timeStr(E + 60), timeStr((E + 720) % 1440)];
    mc = strMC(r, timeStr(E), wrongs);
    ex = 'Add the hours first: ' + timeStr(S) + ' plus ' + h + (h === 1 ? ' hour' : ' hours') + ' is ' + timeStr(T) + '. Then add the ' + m + ' minutes: ' + timeStr(T) + ' plus ' + m + ' minutes is ' + timeStr(E) + '. One common slip is to be an hour off: an hour too early gives ' + wrongs[0] + ' and an hour too late gives ' + wrongs[1] + '. Another is mixing up am and pm, which gives ' + wrongs[2] + '.';
    return { type: 'mc', diff: 2, _p: { kind: kind, S: S, D: D }, order: 'fixed', stem: stem, choices: mc.choices, answer: mc.answer, explain: ex };
  });

  /* GM6: convert within the customary system (multiply to go to a smaller unit, divide to go to a larger one) */
  G('convert-customary', 'GM6', function (r) {
    var T = [['feet', 'foot', 'inches', 'inch', 12], ['yards', 'yard', 'feet', 'foot', 3], ['yards', 'yard', 'inches', 'inch', 36],
      ['pounds', 'pound', 'ounces', 'ounce', 16], ['gallons', 'gallon', 'quarts', 'quart', 4], ['gallons', 'gallon', 'pints', 'pint', 8],
      ['gallons', 'gallon', 'cups', 'cup', 16], ['quarts', 'quart', 'pints', 'pint', 2], ['quarts', 'quart', 'cups', 'cup', 4],
      ['pints', 'pint', 'cups', 'cup', 2], ['miles', 'mile', 'feet', 'foot', 5280], ['tons', 'ton', 'pounds', 'pound', 2000],
      ['cups', 'cup', 'fluid ounces', 'fluid ounce', 8]];
    var row = pick(r, T), up = r() < 0.5, F = row[4], n = I(r, 2, F >= 1000 ? 8 : 15), total = n * F, stem, ans, unit, ex;
    var fact = 'There are ' + comma(F) + ' ' + row[2] + ' in 1 ' + row[1] + '. ';
    if (!up) {
      stem = 'How many ' + row[2] + ' are in ' + n + ' ' + row[0] + '?'; ans = total; unit = row[2];
      ex = fact + 'Going to a smaller unit takes more of them, so multiply: ' + n + ' $\\times$ ' + comma(F) + ' = ' + comma(total) + ' ' + row[2] + '. (Dividing instead is the usual slip.)';
    } else {
      stem = 'How many ' + row[0] + ' are in ' + comma(total) + ' ' + row[2] + '?'; ans = n; unit = row[0];
      ex = fact + 'Going to a larger unit takes fewer of them, so divide: ' + comma(total) + ' $\\div$ ' + comma(F) + ' = ' + n + ' ' + row[0] + '. Check: ' + n + ' $\\times$ ' + comma(F) + ' = ' + comma(total) + '. (Multiplying instead gives a number far too large.)';
    }
    return { type: 'num', diff: 1, _p: { up: up, n: n, F: F }, stem: stem, answer: ans, tol: 0, unit: unit, explain: ex };
  });

  /* GM6: convert within the metric system, decimal point moves (kilo, centi, milli) */
  G('convert-metric', 'GM6', function (r) {
    var T = [['kilometers', 'meters', 1000], ['meters', 'centimeters', 100], ['centimeters', 'millimeters', 10], ['kilograms', 'grams', 1000],
      ['grams', 'milligrams', 1000], ['liters', 'milliliters', 1000], ['meters', 'millimeters', 1000]];
    var row = pick(r, T), up = r() < 0.5, F = row[2], v = I(r, 12, 99), z = String(F).length - 1, whole, stem, ans, unit, ex;
    if (v % 10 === 0) v += 1;                                              /* a decimal that really has a tenths digit */
    whole = v * F / 10;
    var fact = 'There are ' + comma(F) + ' ' + row[1] + ' in 1 ' + row[0].slice(0, -1) + '. ';
    if (!up) {
      stem = 'How many ' + row[1] + ' are in ' + decStr(v, 1) + ' ' + row[0] + '?'; ans = whole; unit = row[1];
      ex = fact + 'Going to a smaller unit takes more of them, so multiply: ' + decStr(v, 1) + ' $\\times$ ' + comma(F) + ' = ' + comma(whole) + ' ' + row[1] + '. Multiplying by ' + comma(F) + ' moves the decimal point ' + z + (z === 1 ? ' place' : ' places') + ' to the right. (Dividing instead is the usual slip.)';
    } else {
      stem = 'How many ' + row[0] + ' are in ' + comma(whole) + ' ' + row[1] + '?'; ans = clean(v / 10, 1); unit = row[0];
      ex = fact + 'Going to a larger unit takes fewer of them, so divide: ' + comma(whole) + ' $\\div$ ' + comma(F) + ' = ' + decStr(v, 1) + ' ' + row[0] + '. Dividing by ' + comma(F) + ' moves the decimal point ' + z + (z === 1 ? ' place' : ' places') + ' to the left. (Multiplying instead is the usual slip.)';
    }
    return { type: 'num', diff: 1, _p: { up: up, v: v, F: F }, stem: stem, answer: ans, tol: 0, unit: unit, explain: ex };
  });

  /* GM4: area or perimeter of an L-shaped region (a rectangle with a rectangular corner removed), told in words only */
  G('composite-area-perimeter', 'GM4', function (r) {
    var kind = I(r, 0, 1), ctx = pick(r, [['floor', 'feet', 'square feet'], ['garden bed', 'meters', 'square meters'], ['patio', 'yards', 'square yards']]);
    var W = I(r, 8, 20), H = I(r, 6, 16), m = Math.min(W, H) - 3, w = I(r, 2, m), h = I(r, 2, m), stem, ans, unit, ex;   /* the stem does not say which side w runs along, so the corner must be a proper L either way round */
    stem = 'An L-shaped ' + ctx[0] + ' is made by taking a rectangle that is ' + W + ' ' + ctx[1] + ' by ' + H + ' ' + ctx[1] + ' and removing a rectangular corner that is ' + w + ' ' + ctx[1] + ' by ' + h + ' ' + ctx[1] + '. ';
    if (kind === 0) {
      ans = W * H - w * h; unit = ctx[2];
      stem += 'What is the area of the ' + ctx[0] + ', in ' + ctx[2] + '?';
      ex = 'The whole rectangle is $' + W + ' \\times ' + H + ' = ' + W * H + '$ ' + ctx[2] + ' and the removed corner is $' + w + ' \\times ' + h + ' = ' + w * h + '$ ' + ctx[2] + '. Subtract: $' + W * H + ' - ' + w * h + ' = ' + ans + '$ ' + ctx[2] + '. (Adding the corner instead of taking it away, or finding the distance around, are the usual slips.)';
    } else {
      ans = 2 * (W + H); unit = ctx[1];
      stem += 'What is the perimeter of the ' + ctx[0] + ', in ' + ctx[1] + '?';
      ex = 'Going all the way around, the six sides are $' + W + ' + ' + (H - h) + ' + ' + w + ' + ' + h + ' + ' + (W - w) + ' + ' + H + ' = ' + ans + '$ ' + ctx[1] + '. This is the same as the perimeter of the full rectangle, $2(' + W + ' + ' + H + ') = ' + ans + '$: cutting a corner out does not change the distance around. (Subtracting the corner\'s sides, or finding the area, are the usual slips.)';
    }
    return { type: 'num', diff: 2, _p: { kind: kind, W: W, H: H, w: w, h: h }, stem: stem, answer: ans, tol: 0, unit: unit, explain: ex };
  });

  /* GM3: volume of a right rectangular prism with fractional edges, answer as a mixed number */
  G('prism-volume-fractions', 'GM3', function (r) {
    var kind = I(r, 0, 2), un = pick(r, [['inches', 'cubic inches'], ['feet', 'cubic feet'], ['centimeters', 'cubic centimeters']]);
    var k = kind === 0 ? 2 : kind === 1 ? 1 : 3, e, i, j, tries = 0, ok, numP, denP, Sn, vals, A, B;
    do {
      tries++; e = [];
      for (i = 0; i < k; i++) e.push([2 * I(r, 1, 5) + 1, 2]);              /* 3/2, 5/2, ... 11/2 */
      for (i = k; i < 3; i++) e.push([I(r, 2, 8), 1]);
      e = shuf(r, e);
      numP = e[0][0] * e[1][0] * e[2][0]; denP = e[0][1] * e[1][1] * e[2][1];
      A = 1; for (i = 0; i < 3; i++) A *= Math.floor(e[i][0] / e[i][1]);     /* slip: only the whole-number parts of the edges */
      B = numP;                                                              /* slip: multiplied the numerators and forgot the denominators */
      Sn = 2 * (e[0][0] * e[1][0] * e[2][1] + e[0][0] * e[2][0] * e[1][1] + e[1][0] * e[2][0] * e[0][1]);   /* slip: surface area, over the same denominator */
      vals = [[numP, denP], [A, 1], [B, 1], [Sn, denP]]; ok = true;
      for (i = 0; i < 4; i++) for (j = 0; j < i; j++) if (vals[i][0] * vals[j][1] === vals[j][0] * vals[i][1]) ok = false;
    } while (!ok && tries < 500);
    if (!ok) {
      e = [[3, 2], [5, 2], [4, 1]]; numP = 60; denP = 4; A = 8; B = 60; Sn = 158;
    }
    var edge = function (p) { return '$' + fracTex(p[0], p[1]) + '$ ' + un[0]; };
    var correct = '$' + fracTex(numP, denP) + '$', wrongs = ['$' + fracTex(A, 1) + '$', '$' + fracTex(B, 1) + '$', '$' + fracTex(Sn, denP) + '$'];
    var mc = strMC(r, correct, wrongs);
    return { type: 'mc', diff: 2, _p: { kind: kind }, order: 'fixed',
      stem: 'A box is a right rectangular prism. Its edges measure ' + edge(e[0]) + ', ' + edge(e[1]) + ', and ' + edge(e[2]) + '. What is its volume, in ' + un[1] + '?',
      choices: mc.choices, answer: mc.answer,
      explain: 'Volume is length times width times height. Write each edge as an improper fraction and multiply: $' + e.map(function (p) { return impTex(p[0], p[1]); }).join(' \\times ') + ' = \\dfrac{' + numP + '}{' + denP + '} = ' + fracTex(numP, denP) + '$ ' + un[1] + '. (Using only the whole-number parts of the edges gives ' + wrongs[0] + '; multiplying only the numerators gives ' + wrongs[1] + '; and adding the areas of all six faces gives ' + wrongs[2] + ', which is the surface area, not the volume.)' };
  });

  /* DSP2: mean (whole number), median (odd and even counts) or range of a list */
  G('mean-median-range', 'DSP2', function (r) {
    var kind = I(r, 0, 3), n = kind === 1 ? pick(r, [5, 7, 9]) : kind === 2 ? pick(r, [6, 8]) : I(r, 5, 8), ci = I(r, 0, 2), vals = [], i, S, rem, v, cands = [];
    var nm = ['five', 'six', 'seven', 'eight', 'nine'][n - 5];
    for (i = 0; i < n - 1; i++) vals.push(I(r, 3, 40));
    if (kind === 0) {                                                       /* last value chosen so the total is a multiple of n */
      S = sumOf(vals); rem = ((-S) % n + n) % n;
      for (v = 3; v <= 40; v++) if (v % n === rem) cands.push(v);
      vals.push(pick(r, cands));
    } else vals.push(I(r, 3, 40));
    var srt = ordered(vals), total = sumOf(vals), word = ['mean', 'median', 'median', 'range'][kind], ans, ex, a, b;
    var pre = ci === 0 ? 'Here are the numbers of minutes that ' + nm + ' students spent reading last night: ' : ci === 1 ? 'The heights, in centimeters, of ' + nm + ' bean plants are: ' : nm.charAt(0).toUpperCase() + nm.slice(1) + ' quiz scores, out of 40 points, are: ';
    if (kind === 0) {
      ans = total / n;
      ex = 'Add the values: ' + vals.join(' + ') + ' = ' + total + '. Divide by the number of values: ' + total + ' $\\div$ ' + n + ' = ' + ans + '. (Dividing by the wrong count, or giving the middle value, are the usual slips.)';
    } else if (kind === 1) {
      ans = srt[(n - 1) / 2];
      ex = 'Put the values in order: ' + srt.join(', ') + '. With ' + n + ' values the median is the middle one, number ' + (n + 1) / 2 + ' in the ordered list: ' + ans + '. (Taking the middle of the list as it was given, without ordering it, is the usual slip.)';
    } else if (kind === 2) {
      a = srt[n / 2 - 1]; b = srt[n / 2]; ans = (a + b) / 2;
      ex = 'Put the values in order: ' + srt.join(', ') + '. With ' + n + ' values there are two middle values, ' + a + ' and ' + b + ', and the median is their mean: $(' + a + ' + ' + b + ') \\div 2 = ' + halfStr(a + b) + '$. (Giving only one of the two middle values is the usual slip.)';
    } else {
      ans = srt[n - 1] - srt[0];
      ex = 'The range is the greatest value minus the least value: ' + srt[n - 1] + ' $-$ ' + srt[0] + ' = ' + ans + '. (The range is one number, the spread of the data, not the two end values.)';
    }
    return { type: 'num', diff: 1, _p: { kind: kind, vals: vals }, stem: pre + vals.join(', ') + '. What is the ' + word + ' of these values?', answer: ans, tol: 0, explain: ex };
  });

  /* DSP2: how adding one value to a data set changes the mean and the median */
  G('change-mean-median', 'DSP2', function (r) {
    var MW = ['increases', 'decreases', 'stays the same'], kind = I(r, 0, 3), n = pick(r, [5, 7]), vals, i, S, rem, v, cands, X, ok, tries = 0, srt, med;
    do {
      tries++; vals = [];
      for (i = 0; i < n - 1; i++) vals.push(I(r, 3, 30));
      if (kind === 2) {                                                     /* the added value will equal the mean, so the sum must be a multiple of n */
        S = sumOf(vals); rem = ((-S) % n + n) % n; cands = [];
        for (v = 3; v <= 30; v++) if (v % n === rem) cands.push(v);
        vals.push(pick(r, cands));
      } else vals.push(I(r, 3, 30));
      S = sumOf(vals); srt = ordered(vals); med = srt[(n - 1) / 2];
      if (kind === 0) X = srt[n - 1] + I(r, 12, 40);
      else if (kind === 1) X = I(r, 1, srt[0] - 2);
      else if (kind === 2) X = S / n;
      else X = med;
      ok = !(kind === 3 && X * n === S);                                    /* a value equal to the median that still moves the mean */
    } while (!ok && tries < 500);
    var cmp = X * n - S, mi = cmp > 0 ? 0 : cmp < 0 ? 1 : 2;
    var srt2 = ordered(vals.concat([X])), s2 = srt2[(n + 1) / 2 - 1] + srt2[(n + 1) / 2], cm = s2 - 2 * med, di = cm > 0 ? 0 : cm < 0 ? 1 : 2;
    function sent(a, b) { return 'The mean ' + MW[a] + ' and the median ' + MW[b] + '.'; }
    var mc = strMC(r, sent(mi, di), [sent(mi, (di + 1) % 3), sent((mi + 1) % 3, di), sent((mi + 2) % 3, (di + 2) % 3)]);
    return { type: 'mc', diff: 2, _p: { kind: kind, vals: vals, X: X }, order: 'fixed',
      stem: 'The data set ' + vals.join(', ') + ' has ' + n + ' values. A new value, ' + X + ', is added to the data set. Which statement describes what happens to the mean and the median?',
      choices: mc.choices, answer: mc.answer,
      explain: 'Mean: the old sum is ' + S + ' for ' + n + ' values, and ' + X + ' $\\times$ ' + n + ' = ' + X * n + ' is ' + (cmp > 0 ? 'more than' : cmp < 0 ? 'less than' : 'equal to') + ' ' + S + ', so ' + X + ' is ' + (cmp > 0 ? 'above' : cmp < 0 ? 'below' : 'equal to') + ' the old mean, and the mean ' + MW[mi] + '. (A value above the mean pulls the mean up, a value below it pulls the mean down, and a value equal to it leaves the mean alone.) Median: the old median is ' + med + '. With the new value the ordered list is ' + srt2.join(', ') + ', so the median is the mean of the two middle values, $(' + srt2[(n + 1) / 2 - 1] + ' + ' + srt2[(n + 1) / 2] + ') \\div 2 = ' + halfStr(s2) + '$, and the median ' + MW[di] + '. The mean and the median react to a new value in different ways, so one can change while the other does not.' };
  });

  /* DSP5: theoretical probability of one event (marbles in a bag, a number cube, or a spinner); answer is a fraction in lowest terms */
  G('probability-one-event', 'DSP5', function (r) {
    var kind = I(r, 0, 1), tries = 0, ok, f, t, i, stem, ex, R, B, Gn, col, dev, N, e, K, favs, evText;
    var COL = ['red', 'blue', 'green'];
    function ev(q, k, KK) { return q === 0 ? k % 2 === 0 : q === 1 ? k % 3 === 0 : q === 2 ? k % 4 === 0 : q === 3 ? isPrime(k) : q === 4 ? k > KK : k < KK; }
    function distinct(ff, tt) {
      var vs = [[ff, tt], [ff, tt - ff], [tt - ff, tt], [1, tt]], a, b;
      for (a = 0; a < 4; a++) for (b = 0; b < a; b++) if (vs[a][0] * vs[b][1] === vs[b][0] * vs[a][1]) return false;
      return true;
    }
    if (kind === 0) {
      do { R = I(r, 2, 9); B = I(r, 2, 9); Gn = I(r, 2, 9); col = I(r, 0, 2); f = [R, B, Gn][col]; t = R + B + Gn; tries++; ok = distinct(f, t); } while (!ok && tries < 500);
      if (!ok) { R = 3; B = 4; Gn = 5; col = 0; f = 3; t = 12; }
      stem = 'A bag holds ' + R + ' red marbles, ' + B + ' blue marbles, and ' + Gn + ' green marbles. One marble is chosen at random. What is the probability that it is ' + COL[col] + '?';
      ex = 'The probability is the number of favorable outcomes divided by the number of equally likely outcomes. There are ' + R + ' + ' + B + ' + ' + Gn + ' = ' + t + ' marbles in all, and ' + f + ' of them are ' + COL[col] + ', so the probability is $' + (gcd(f, t) === 1 ? '\\dfrac{' + f + '}{' + t + '}' : '\\dfrac{' + f + '}{' + t + '} = ' + propTex(f, t)) + '$.';
    } else {
      dev = I(r, 0, 3); N = dev === 0 ? 6 : pick(r, [8, 10, 12]);
      do {
        e = I(r, 0, 5); K = I(r, 2, N - 3); favs = []; tries++;
        for (i = 1; i <= N; i++) if (ev(e, i, K)) favs.push(i);
        f = favs.length; t = N; ok = f >= 2 && f <= N - 2 && distinct(f, t);
      } while (!ok && tries < 500);
      if (!ok) { dev = 0; N = 6; e = 1; K = 2; favs = [3, 6]; f = 2; t = 6; }
      evText = ['an even number', 'a multiple of 3', 'a multiple of 4', 'a prime number', 'a number greater than ' + K, 'a number less than ' + K][e];
      stem = dev === 0 ? 'A fair number cube has faces numbered 1 through 6. It is rolled once. What is the probability of rolling ' + evText + '?'
                       : 'A spinner has ' + N + ' equal sections numbered 1 through ' + N + '. It is spun once. What is the probability that it lands on ' + evText + '?';
      ex = 'The probability is the number of favorable outcomes divided by the number of equally likely outcomes. The favorable outcomes are ' + favs.join(', ') + ': ' + f + ' of the ' + N + ' outcomes, so the probability is $' + (gcd(f, t) === 1 ? '\\dfrac{' + f + '}{' + t + '}' : '\\dfrac{' + f + '}{' + t + '} = ' + propTex(f, t)) + '$.';
    }
    var w1 = propTex(f, t - f), w2 = propTex(t - f, t), w3 = propTex(1, t);
    var mc = strMC(r, '$' + propTex(f, t) + '$', ['$' + w1 + '$', '$' + w2 + '$', '$' + w3 + '$']);
    return { type: 'mc', diff: 2, _p: { kind: kind, f: f, t: t }, order: 'fixed', stem: stem, choices: mc.choices, answer: mc.answer,
      explain: ex + ' (Dividing by the unfavorable outcomes instead of all of them gives $' + w1 + '$; $' + w2 + '$ is the probability of the opposite event; and counting only one favorable outcome gives $' + w3 + '$.)' };
  });

  /* ================= Generators that draw a figure (slice 4, queue item `praxis-5003-gens-figs`, 27 Oct 2026) =================
     Each question carries  figure: {...}, a spec for PXD.renderFigure (see the header of figures.js), built from the same integers
     as the stem and the key, so the picture and the answer cannot disagree. Text is built from integers and strings only. The
     figure's alt text describes the picture the way the bank's figure items do (it is for screen readers). */

  /* NO6: read the number a point stands for off a number line (a mixed number on a fraction scale, or a whole number on a scale of 2, 5, 10, 20 or 25) */
  G('numberline-read', 'NO6', function (r) {
    var kind = I(r, 0, 1), den, lo, hi, w, j, n, vals, i, k, ok, tries = 0, step, base, e, ans, fig, ex, wrongs, mc, alt;
    if (kind === 0) {
      den = pick(r, [3, 4, 5, 6, 7, 8]); lo = I(r, 0, 3); hi = lo + 2; w = lo + I(r, 0, 1); if (w === 0) w = 1;
      do {
        tries++; j = I(r, 1, den - 1); n = w * den + j;
        vals = [[n, den], [j, den], [n + 1, den], [w * (den - 1) + j, den - 1]];     /* the key, then the three named slips, as [numerator, denominator] */
        ok = gcd(j, den) === 1;
        for (i = 0; i < 4; i++) for (k = 0; k < i; k++) if (vals[i][0] * vals[k][1] === vals[k][0] * vals[i][1]) ok = false;
      } while (!ok && tries < 500);
      if (!ok) { den = 4; lo = 0; hi = 2; w = 1; j = 1; n = 5; }
      wrongs = ['$' + fracTex(j, den) + '$', '$' + fracTex(n + 1, den) + '$', '$' + fracTex(w * (den - 1) + j, den - 1) + '$'];
      mc = strMC(r, '$' + fracTex(n, den) + '$', wrongs);
      alt = 'Number line from ' + lo + ' to ' + hi + ' with tick marks. The whole numbers ' + lo + ', ' + (lo + 1) + ', and ' + hi + ' are labeled, and each whole is divided into ' + den + ' equal parts. Point P is on the tick mark ' + (j === 1 ? '1 part' : j + ' parts') + ' to the right of ' + w + '.';
      fig = { type: 'numberline', alt: alt, range: [lo, hi], step: 1 / den, den: den, labelEvery: den, points: [{ x: w + j / den, label: 'P' }] };
      ex = 'The whole numbers are labeled, and each whole is divided into ' + den + ' equal parts, so each tick mark is $\\dfrac{1}{' + den + '}$ more than the one before. Point $P$ is ' + j + (j === 1 ? ' part' : ' parts') + ' to the right of ' + w + ', so it represents $' + w + ' + \\dfrac{' + j + '}{' + den + '} = ' + fracTex(n, den) + '$. (Naming only the part after the whole number gives ' + wrongs[0] + '; counting the labeled mark as the first step gives ' + wrongs[1] + '; and counting the ' + (den - 1) + ' tick marks between the whole numbers instead of the ' + den + ' equal parts gives ' + wrongs[2] + '.)';
      return { type: 'mc', diff: 2, _p: { kind: kind, den: den, lo: lo, w: w, j: j }, order: 'fixed', stem: 'Point $P$ is shown on the number line. Which number does point $P$ represent?',
        figure: fig, choices: mc.choices, answer: mc.answer, explain: ex };
    }
    step = pick(r, [2, 5, 10, 20, 25]); lo = step * I(r, 0, 12); k = I(r, 1, 8); if (k >= 5) k++;   /* k = 1..9 but not 5, so P is never on a labeled mark */
    base = lo + step * 5 * Math.floor(k / 5); e = k % 5; ans = lo + k * step;
    alt = 'Number line from ' + lo + ' to ' + (lo + 10 * step) + ' with a tick mark every ' + step + '. The marks ' + lo + ', ' + (lo + 5 * step) + ', and ' + (lo + 10 * step) + ' are labeled. Point P is on the tick mark ' + k + (k === 1 ? ' step' : ' steps') + ' to the right of ' + lo + '.';
    fig = { type: 'numberline', alt: alt, range: [lo, lo + 10 * step], step: step, labelEvery: 5, points: [{ x: ans, label: 'P' }] };
    ex = 'The labeled marks are ' + lo + ', ' + (lo + 5 * step) + ', and ' + (lo + 10 * step) + '. From one labeled mark to the next is ' + 5 * step + ', split into 5 equal spaces, so each space is ' + 5 * step + ' $\\div$ 5 = ' + step + '. Point $P$ is ' + e + (e === 1 ? ' space' : ' spaces') + ' to the right of ' + base + ', so it represents $' + base + ' + ' + e + ' \\times ' + step + ' = ' + ans + '$. (Counting each space as 1 instead of ' + step + ' gives ' + (base + e) + '.)';
    return { type: 'num', diff: 1, _p: { kind: kind, step: step, lo: lo, k: k }, stem: 'Point $P$ is shown on the number line. What number does point $P$ represent?',
      figure: fig, answer: ans, tol: 0, explain: ex };
  });

  /* DSP3: read a circle graph: a count from a percent, the total from one count, or two slices together */
  G('circle-percent', 'DSP3', function (r) {
    var CT = [['students', 'how they get to school', ['Bus', 'Walk', 'Car', 'Bike'], 'how students get to school'],
      ['students', 'to name a favorite school subject', ['Math', 'Reading', 'Science', 'Art'], 'favorite school subjects'],
      ['families', 'which kind of pet they have', ['Dog', 'Cat', 'Fish', 'Bird'], 'the kind of pet each family has']];
    var kind = I(r, 0, 2), ct = pick(r, CT), p, ok, tries = 0, i, j, N, col, col2, c, u, ans, stem, ex, head, sl, parts, fig, L = ct[2], who = ct[0];
    do {
      tries++; p = [5 * I(r, 2, 12), 5 * I(r, 2, 12), 5 * I(r, 2, 12)]; p.push(100 - sumOf(p));
      ok = p[3] >= 10 && p[3] <= 60;
      for (i = 0; i < 4; i++) for (j = 0; j < i; j++) if (p[i] === p[j]) ok = false;
    } while (!ok && tries < 500);
    if (!ok) p = [40, 25, 20, 15];
    N = 20 * I(r, 2, 10); col = I(r, 0, 3); col2 = (col + I(r, 1, 3)) % 4; u = N / 20;      /* u = how many are 5% of the whole */
    sl = L.map(function (nm, k) { return { label: nm, value: p[k] }; });
    parts = L.map(function (nm, k) { return nm + ' ' + p[k] + ' percent'; }).join(', ');
    fig = { type: 'circle', alt: 'Circle graph of ' + ct[3] + ': ' + parts + '.', slices: sl, total: 100 };
    head = 'The circle graph shows the percent of the ' + who + ' in each group. ';
    if (kind === 0) {
      ans = u * (p[col] / 5);
      stem = 'Each of ' + N + ' ' + who + ' was asked ' + ct[1] + '. ' + head + 'How many of the ' + N + ' ' + who + ' are in the ' + L[col] + ' group?';
      ex = 'The ' + L[col] + ' slice is ' + p[col] + '% of the circle, so that group is $\\dfrac{' + p[col] + '}{100}$ of the ' + N + ' ' + who + ': $\\dfrac{' + p[col] + '}{100} \\times ' + N + ' = ' + ans + '$. (The ' + p[col] + ' on the graph is a percent, not a number of ' + who + '.)';
    } else if (kind === 1) {
      c = u * (p[col] / 5); ans = N;
      stem = 'Some ' + who + ' were each asked ' + ct[1] + '. ' + head + 'There are ' + c + ' ' + who + ' in the ' + L[col] + ' group. How many ' + who + ' were asked in all?';
      ex = 'The ' + L[col] + ' slice is ' + p[col] + '% of the circle, which is ' + p[col] / 5 + ' pieces of 5%. So each 5% is ' + c + ' $\\div$ ' + p[col] / 5 + ' = ' + u + ' ' + who + '. The whole circle is 100%, which is 20 pieces of 5%, so there are $20 \\times ' + u + ' = ' + N + '$ ' + who + ' in all. (' + c + ' is only the ' + L[col] + ' group, the part, not the whole.)';
    } else {
      ans = u * ((p[col] + p[col2]) / 5);
      stem = 'Each of ' + N + ' ' + who + ' was asked ' + ct[1] + '. ' + head + 'How many of the ' + N + ' ' + who + ' are in the ' + L[col] + ' group or the ' + L[col2] + ' group?';
      ex = 'The ' + L[col] + ' slice is ' + p[col] + '% and the ' + L[col2] + ' slice is ' + p[col2] + '%, which together make ' + (p[col] + p[col2]) + '% of the circle. So the two groups hold $\\dfrac{' + (p[col] + p[col2]) + '}{100} \\times ' + N + ' = ' + ans + '$ ' + who + '. (Using only one of the two slices, ' + u * (p[col] / 5) + ' or ' + u * (p[col2] / 5) + ', leaves the other group out.)';
    }
    return { type: 'num', diff: 2, _p: { kind: kind, p: p, N: N, col: col, col2: col2 }, stem: stem, figure: fig, answer: ans, tol: 0, unit: who, explain: ex };
  });

  /* NO6: which expression gives the total number of dots in an array split by a dashed line */
  G('array-expression', 'NO6', function (r) {
    var kind = I(r, 0, 1), m = I(r, 3, 8), a = I(r, 2, 7), b = I(r, 2, 4), key, w1, w2, w3, mc, rows, cols, fig, stem, ex, alt, part, tot;
    if (a === 2 && b === 2) b = 3;                                          /* 2 x 2 = 2 + 2 would make the "multiply everything" slip equal the total */
    tot = m * (a + b);
    if (kind === 0) {
      rows = m; cols = a + b;
      key = '(' + m + ' \\times ' + a + ') + (' + m + ' \\times ' + b + ')'; w1 = '(' + m + ' \\times ' + a + ') + ' + b;
      w2 = '(' + m + ' + ' + a + ') \\times (' + m + ' + ' + b + ')'; w3 = m + ' \\times ' + a + ' \\times ' + b;
      alt = 'An array of dots with ' + rows + ' rows and ' + cols + ' columns. A dashed vertical line separates the first ' + a + ' columns from the last ' + b + ' columns.';
      fig = { type: 'area', kind: 'array', alt: alt, rows: rows, cols: cols, splitCol: a };
      stem = 'The array of dots is split by a dashed line into a left part and a right part. Which expression gives the total number of dots?';
      part = ['left', 'right'];
    } else {
      rows = a + b; cols = m;
      key = '(' + a + ' \\times ' + m + ') + (' + b + ' \\times ' + m + ')'; w1 = '(' + a + ' \\times ' + m + ') + ' + b;
      w2 = '(' + a + ' + ' + m + ') \\times (' + b + ' + ' + m + ')'; w3 = a + ' \\times ' + b + ' \\times ' + m;
      alt = 'An array of dots with ' + rows + ' rows and ' + cols + ' columns. A dashed horizontal line separates the first ' + a + ' rows from the last ' + b + ' rows.';
      fig = { type: 'area', kind: 'array', alt: alt, rows: rows, cols: cols, splitRow: a };
      stem = 'The array of dots is split by a dashed line into a top part and a bottom part. Which expression gives the total number of dots?';
      part = ['top', 'bottom'];
    }
    mc = strMC(r, '$' + key + '$', ['$' + w1 + '$', '$' + w2 + '$', '$' + w3 + '$']);
    ex = 'The ' + part[0] + ' part is ' + (kind === 0 ? m + ' rows of ' + a + ' dots, $' + m + ' \\times ' + a : a + ' rows of ' + m + ' dots, $' + a + ' \\times ' + m) + ' = ' + a * m + '$, and the ' + part[1] + ' part is ' + (kind === 0 ? m + ' rows of ' + b + ' dots, $' + m + ' \\times ' + b : b + ' rows of ' + m + ' dots, $' + b + ' \\times ' + m) + ' = ' + b * m + '$. Together: $' + a * m + ' + ' + b * m + ' = ' + tot + '$, which is $' + rows + ' \\times ' + cols + '$. (Multiplying only one part by the rows or columns gives $' + w1 + '$; adding the dimensions before multiplying gives $' + w2 + '$; and multiplying all three numbers gives $' + w3 + '$.)';
    return { type: 'mc', diff: 2, _p: { kind: kind, m: m, a: a, b: b }, order: 'fixed', stem: stem, figure: fig, choices: mc.choices, answer: mc.answer, explain: ex };
  });

  /* NO6: a missing partial product in an area model, or the product the model shows (two-digit by two-digit, drawn to scale) */
  G('area-model-cell', 'NO6', function (r) {
    var kind = I(r, 0, 1), t = I(r, 1, 3), u = I(r, 6, 9), s = I(r, 1, 3), v = I(r, 6, 9), hide = I(r, 0, 3), tp = [10 * t, u], sd = [10 * s, v], a = 10 * t + u, b = 10 * s + v;
    var cells = [[tp[0] * sd[0], tp[1] * sd[0]], [tp[0] * sd[1], tp[1] * sd[1]]], txt = [[], []], i, j, hi = Math.floor(hide / 2), hj = hide % 2, ans, stem, ex, alt, fig;
    var sum = cells[0][0] + cells[0][1] + cells[1][0] + cells[1][1];
    for (i = 0; i < 2; i++) for (j = 0; j < 2; j++) txt[i].push(kind === 0 && i === hi && j === hj ? '?' : String(cells[i][j]));
    function say(q) { return q === '?' ? 'a question mark' : q; }
    alt = 'An area model with columns of width ' + tp[0] + ' and ' + tp[1] + ' and rows of height ' + sd[0] + ' and ' + sd[1] + '. The top row holds ' + say(txt[0][0]) + ' and ' + say(txt[0][1]) + '. The bottom row holds ' + say(txt[1][0]) + ' and ' + say(txt[1][1]) + '.';
    fig = { type: 'area', kind: 'model', alt: alt, top: tp, side: sd, cellText: txt };
    ex = 'The numbers along the sides are the full parts of each factor (' + a + ' = ' + tp[0] + ' + ' + tp[1] + ' and ' + b + ' = ' + sd[0] + ' + ' + sd[1] + '), so a tens part counts as tens, not as its digit, and each cell is the product of its column width and its row height. ';
    if (kind === 0) {
      ans = cells[hi][hj];
      stem = 'The area model shows $' + a + ' \\times ' + b + '$ broken into four partial products. What number belongs in the cell with the question mark?';
      ex += 'The cell with the question mark is in the column of width ' + tp[hj] + ' and the row of height ' + sd[hi] + ', so it holds $' + tp[hj] + ' \\times ' + sd[hi] + ' = ' + ans + '$. Check: the four cells add to $' + cells[0][0] + ' + ' + cells[0][1] + ' + ' + cells[1][0] + ' + ' + cells[1][1] + ' = ' + sum + ' = ' + a + ' \\times ' + b + '$.';
    } else {
      ans = sum;
      stem = 'The area model shows $' + a + ' \\times ' + b + '$ broken into four partial products. What is the value of $' + a + ' \\times ' + b + '$?';
      ex += 'The product is the total of the four cells: $' + cells[0][0] + ' + ' + cells[0][1] + ' + ' + cells[1][0] + ' + ' + cells[1][1] + ' = ' + sum + '$, so $' + a + ' \\times ' + b + ' = ' + sum + '$.';
    }
    return { type: 'num', diff: 2, _p: { kind: kind, a: a, b: b, hide: hide }, stem: stem, figure: fig, answer: ans, tol: 0, explain: ex };
  });

  /* GM3: surface area of a box or a square pyramid from its net (dimensions labeled on the net) */
  G('net-surface-area', 'GM3', function (r) {
    var kind = I(r, 0, 1), U = pick(r, [['cm', 'centimeters', 'square centimeters'], ['in', 'inches', 'square inches'], ['m', 'meters', 'square meters'], ['ft', 'feet', 'square feet']]);
    var l, w, h, b, s, ok, tries = 0, SA, stem, ex, alt, fig, tri;
    if (kind === 0) {
      do { l = I(r, 4, 9); w = I(r, 2, 7); h = I(r, 2, 6); ok = l !== w && w !== h && l !== h; tries++; } while (!ok && tries < 500);
      if (!ok) { l = 5; w = 3; h = 2; }
      SA = 2 * (l * w + l * h + w * h);
      alt = 'The net of a rectangular box made of six rectangles in a cross shape. The box is ' + l + ' ' + U[1] + ' long, ' + w + ' ' + U[1] + ' wide, and ' + h + ' ' + U[1] + ' tall.';
      fig = { type: 'net', kind: 'prism', alt: alt, l: l, w: w, h: h, unit: U[0] };
      stem = 'The net folds to make a rectangular box. What is the surface area of the box, in ' + U[2] + '?';
      ex = 'The surface area is the area of all six rectangles: $2(' + l + ' \\times ' + w + ') + 2(' + l + ' \\times ' + h + ') + 2(' + w + ' \\times ' + h + ') = ' + 2 * l * w + ' + ' + 2 * l * h + ' + ' + 2 * w * h + ' = ' + SA + '$ ' + U[2] + '. The volume, $' + l + ' \\times ' + w + ' \\times ' + h + ' = ' + l * w * h + '$, is a different measure, and counting only three of the faces gives half of the surface area.';
      return { type: 'num', diff: 2, _p: { kind: kind, l: l, w: w, h: h }, stem: stem, figure: fig, answer: SA, tol: 0, unit: U[2], explain: ex };
    }
    b = pick(r, [4, 6, 8, 10]); s = I(r, b / 2 + 1, b / 2 + 7); SA = b * b + 2 * b * s; tri = b * s / 2;
    alt = 'The net of a square pyramid: a square base with an isosceles triangle on each of its four sides. The base sides are ' + b + ' ' + U[1] + '. A dashed segment in the top triangle, from the tip to the base, is ' + s + ' ' + U[1] + '.';
    fig = { type: 'net', kind: 'pyramid', alt: alt, b: b, s: s, unit: U[0] };
    stem = 'The net folds to make a square pyramid. The base is a square with sides ' + b + ' ' + U[1] + ', and the dashed segment shows the height of one triangular face. What is the total surface area of the pyramid, in ' + U[2] + '?';
    ex = 'The base has area $' + b + ' \\times ' + b + ' = ' + b * b + '$. Each triangle has base ' + b + ' and height ' + s + ', so its area is $\\dfrac{1}{2}(' + b + ')(' + s + ') = ' + tri + '$, and four of them give $4 \\times ' + tri + ' = ' + 4 * tri + '$. The total is $' + b * b + ' + ' + 4 * tri + ' = ' + SA + '$ ' + U[2] + '. The usual errors are to leave out the base, or to count only one triangle.';
    return { type: 'num', diff: 3, _p: { kind: kind, b: b, s: s }, stem: stem, figure: fig, answer: SA, tol: 0, unit: U[2], explain: ex };
  });

  /* DSP3: read a double bar graph: the category with the greatest difference, the total for one category, the total for one series, or how many more */
  G('double-bar-compare', 'DSP3', function (r) {
    var CT = [
      ['The double bar graph shows the favorite kind of book of students in Grade 4 and in Grade 5.', ['Grade 4', 'Grade 5'], ['Fiction', 'Science', 'Poetry', 'History', 'Mystery', 'Comics'], 'students', 'Students', 'kind of book'],
      ['The double bar graph shows the pounds of fruit sold at a market in spring and in fall.', ['Spring', 'Fall'], ['Apples', 'Pears', 'Plums', 'Peaches', 'Cherries', 'Grapes'], 'pounds', 'Pounds sold', 'kind of fruit'],
      ['The double bar graph shows the slices of pizza sold at a school event on Friday and on Saturday.', ['Friday', 'Saturday'], ['Cheese', 'Pepperoni', 'Veggie', 'Sausage', 'Hawaiian', 'Supreme'], 'slices', 'Slices sold', 'kind of pizza']];
    var kind = I(r, 0, 3), ct = pick(r, CT), step = pick(r, [2, 5, 10]), cats = shuf(r, ct[2]).slice(0, 4), A, B, i, q, ok, tries = 0, gaps, mg, ng, gi, tv, nt, ti, x, ser, ans, stem, ex, fig, alt, big, small, ser2;
    do {
      tries++; A = []; B = [];
      for (i = 0; i < 4; i++) { A.push(step * I(r, 1, 7)); B.push(step * I(r, 1, 7)); }
      q = I(r, 0, 3);
      gaps = A.map(function (a, k) { return Math.abs(a - B[k]); }); mg = Math.max.apply(null, gaps);
      ng = 0; gi = 0; for (i = 0; i < 4; i++) if (gaps[i] === mg) { ng++; gi = i; }
      tv = Math.max(Math.max.apply(null, A), Math.max.apply(null, B)); nt = 0; ti = 0;
      for (i = 0; i < 4; i++) { if (A[i] === tv) { nt++; ti = i; } if (B[i] === tv) { nt++; ti = i; } }
      ok = ng === 1 && mg > 0;
      if (kind === 0) ok = ok && nt === 1 && ti !== gi;                    /* the tallest single bar must not be in the category with the greatest gap */
      if (kind === 1 || kind === 3) ok = ok && A[q] !== B[q];
    } while (!ok && tries < 500);
    if (!ok) { step = 10; A = [60, 30, 20, 40]; B = [40, 10, 30, 10]; q = 1; gaps = [20, 20, 10, 30]; gi = 3; ti = 0; }
    ser = I(r, 0, 1);
    alt = 'Double bar graph with ' + ct[1][0] + ' and ' + ct[1][1] + ' for four groups. ' + cats.map(function (c, k) { return c + ': ' + A[k] + ' and ' + B[k]; }).join('. ') + '.';
    fig = { type: 'dbar', alt: alt, series: ct[1], categories: cats.map(function (c, k) { return { label: c, a: A[k], b: B[k] }; }), ylabel: ct[4], ymax: 8 * step, ystep: step };
    if (kind === 0) {
      stem = ct[0] + ' For which ' + ct[5] + ' is the difference between the two bars the greatest?';
      ex = 'Find the difference between the two bars for each ' + ct[5] + ': ' + cats.map(function (c, k) { return c + ' $' + Math.max(A[k], B[k]) + ' - ' + Math.min(A[k], B[k]) + ' = ' + gaps[k] + '$'; }).join(', ') + '. The greatest difference is for ' + cats[gi] + '. The tallest single bar belongs to ' + cats[ti] + ', but the question asks about the gap between the two bars, not the height of one.';
      return { type: 'mc', diff: 2, _p: { kind: kind }, order: 'fixed', stem: stem, figure: fig, choices: cats.slice(), answer: gi, explain: ex };
    }
    if (kind === 1) {
      ans = A[q] + B[q];
      stem = ct[0] + ' How many ' + ct[3] + ' in all does the graph show for ' + cats[q] + '?';
      ex = 'The two bars for ' + cats[q] + ' are ' + A[q] + ' (' + ct[1][0] + ') and ' + B[q] + ' (' + ct[1][1] + '). In all that is $' + A[q] + ' + ' + B[q] + ' = ' + ans + '$ ' + ct[3] + '. Reading only one of the two bars is the usual slip.';
    } else if (kind === 2) {
      ser2 = ser === 0 ? A : B; ans = sumOf(ser2);
      stem = ct[0] + ' How many ' + ct[3] + ' in all does the graph show for ' + ct[1][ser] + '?';
      ex = 'Add the ' + ct[1][ser] + ' bars of all four groups: $' + ser2.join(' + ') + ' = ' + ans + '$ ' + ct[3] + '. The other bars belong to ' + ct[1][1 - ser] + '.';
    } else {
      x = A[q] > B[q] ? 0 : 1; big = Math.max(A[q], B[q]); small = Math.min(A[q], B[q]); ans = big - small;
      stem = ct[0] + ' For ' + cats[q] + ', how many more ' + ct[3] + ' does the graph show for ' + ct[1][x] + ' than for ' + ct[1][1 - x] + '?';
      ex = 'For ' + cats[q] + ', the ' + ct[1][x] + ' bar is ' + big + ' and the ' + ct[1][1 - x] + ' bar is ' + small + '. The difference is $' + big + ' - ' + small + ' = ' + ans + '$ ' + ct[3] + '. (Adding the two bars, ' + (big + small) + ', answers a different question.)';
    }
    return { type: 'num', diff: 2, _p: { kind: kind }, stem: stem, figure: fig, answer: ans, tol: 0, unit: ct[3], explain: ex };
  });
})();
