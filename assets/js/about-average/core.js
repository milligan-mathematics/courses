/* Purr-fectly Average: the puzzle engine.
 *
 * Pure functions, no DOM, so the same file runs in the browser and under Node for testing.
 *
 * A "puzzle" is: how many numbers (n) plus any of four clues about them:
 *   mean, median, mode, range.
 * A "solution" is a multiset of whole numbers (sorted, lowest first) that satisfies every clue.
 *
 * Every search is exhaustive inside a bound that is proven (or, for the no-mean/no-range case,
 * argued and tested) to contain every solution, so "no solutions" really means impossible.
 */
(function (root) {
  'use strict';

  var KEYS = ['mean', 'median', 'mode', 'range'];

  /* ---------- statistics of a sorted array ---------- */
  function stats(a) {
    var n = a.length, sum = 0, i;
    for (i = 0; i < n; i++) sum += a[i];
    var median = n % 2 ? a[(n - 1) / 2] : (a[n / 2 - 1] + a[n / 2]) / 2;
    var counts = {}, maxc = 0;
    for (i = 0; i < n; i++) {
      counts[a[i]] = (counts[a[i]] || 0) + 1;
      if (counts[a[i]] > maxc) maxc = counts[a[i]];
    }
    var top = [];
    Object.keys(counts).forEach(function (k) { if (counts[k] === maxc) top.push(+k); });
    top.sort(function (x, y) { return x - y; });
    return { n: n, sum: sum, mean: sum / n, median: median, range: a[n - 1] - a[0], maxc: maxc, top: top };
  }

  /* The mode rule.
   * Default ("one mode", the rule NRICH's solution counts follow): the mode is the single value
   * that appears most often, and it must appear at least twice.
   * With ties allowed: any value tied for most often counts, still at least twice. */
  function modeMatches(st, m, ties) {
    if (st.maxc < 2) return false;
    if (ties) return st.top.indexOf(m) !== -1;
    return st.top.length === 1 && st.top[0] === m;
  }

  function satisfies(a, cond, opts) {
    var st = stats(a);
    if (cond.mean !== undefined && Math.abs(st.mean - cond.mean) > 1e-9) return false;
    if (cond.median !== undefined && st.median !== cond.median) return false;
    if (cond.range !== undefined && st.range !== cond.range) return false;
    if (cond.mode !== undefined && !modeMatches(st, cond.mode, opts && opts.ties)) return false;
    return true;
  }

  /* ---------- the search ---------- */
  function hiBound(n, cond, lo) {
    if (cond.mean !== undefined) return Math.round(cond.mean * n) - (n - 1) * lo;
    var m = lo;
    if (cond.mode !== undefined) m = Math.max(m, cond.mode);
    if (cond.range !== undefined) {
      // the smallest number is at most the median (and the mode), so the largest is at most that plus the range
      if (cond.median !== undefined) m = Math.max(m, Math.ceil(cond.median));
      return m + cond.range;
    }
    // no mean, no range: a number just above the middle can be as big as 2 x median - lo
    if (cond.median !== undefined) m = Math.max(m, Math.round(2 * cond.median) - lo);
    return m + n;
  }

  /* solve(n, cond, opts) -> { count, solutions, truncated, aborted, nodes }
   *   opts.zero      allow 0 as a number            (default false)
   *   opts.ties      allow tied modes               (default false)
   *   opts.keep      how many solutions to keep     (default 200)
   *   opts.stopAfter stop once this many are found  (default: never)
   *   opts.maxNodes  give up after this many steps  (default 4,000,000)
   * count is exact unless aborted (then it is "at least"). */
  function solve(n, cond, opts) {
    opts = opts || {};
    var lo = opts.zero ? 0 : 1;
    var keep = opts.keep === undefined ? 200 : opts.keep;
    var stopAfter = opts.stopAfter || Infinity;
    var maxNodes = opts.maxNodes || 4000000;
    var res = { count: 0, solutions: [], truncated: false, aborted: false, nodes: 0 };
    if (n < 1) return res;

    var sum;
    if (cond.mean !== undefined) {
      sum = cond.mean * n;
      if (Math.abs(sum - Math.round(sum)) > 1e-9) return res;      // total must be a whole number
      sum = Math.round(sum);
      if (sum < lo * n) return res;
    }
    if (cond.median !== undefined) {
      var dbl = cond.median * 2;
      if (Math.abs(dbl - Math.round(dbl)) > 1e-9) return res;
      if (n % 2 === 1 && Math.abs(cond.median - Math.round(cond.median)) > 1e-9) return res;
    }
    if (cond.mode !== undefined && (cond.mode < lo || cond.mode !== Math.round(cond.mode))) return res;
    if (cond.range !== undefined && (cond.range < 0 || cond.range !== Math.round(cond.range))) return res;
    if (cond.range !== undefined && n === 1 && cond.range !== 0) return res;

    var hi = hiBound(n, cond, lo);
    var a = new Array(n), done = false;
    var hasRange = cond.range !== undefined;
    var med2 = cond.median !== undefined ? Math.round(cond.median * 2) : undefined;
    var midA = n % 2 ? (n - 1) / 2 : n / 2 - 1;      // index of the lower middle element
    var minV, maxV;                                   // when range is fixed: the min and max values

    function finish() {
      if (cond.mode !== undefined && !modeMatches(stats(a), cond.mode, opts.ties)) return;
      res.count++;
      if (res.solutions.length < keep) res.solutions.push(a.slice());
      else res.truncated = true;
      if (res.count >= stopAfter) done = true;
    }

    function rec(i, min, s) {
      if (done) return;
      if (++res.nodes > maxNodes) { res.aborted = true; done = true; return; }
      if (i === n) { if (sum === undefined || s === sum) finish(); return; }
      var left = n - i;
      var top = hasRange ? maxV : hi;
      var from = min, to = top;
      if (hasRange && i === n - 1) { from = maxV; to = maxV; }
      for (var v = from; v <= to; v++) {
        if (sum !== undefined) {
          if (s + v * left > sum) break;                       // too big already
          if (s + v + (left - 1) * top < sum) continue;        // can never reach the total
        }
        if (med2 !== undefined) {
          if (n % 2 === 1 && i === midA && v * 2 !== med2) continue;
          if (n % 2 === 0 && i === midA + 1 && a[midA] + v !== med2) continue;
        }
        a[i] = v;
        rec(i + 1, v, s + v);
        if (done) return;
      }
    }

    if (hasRange) {
      if (n === 1) { minV = maxV = lo; a[0] = lo; /* a lone number has no mode, so this never passes a mode clue */ rec(1, lo, lo); return res; }
      var maxMin = hi - cond.range;
      if (cond.mean !== undefined) maxMin = Math.min(maxMin, Math.floor(sum / n));
      for (var mn = lo; mn <= maxMin && !done; mn++) {
        minV = mn; maxV = mn + cond.range;
        if (med2 !== undefined && (maxV * 2 < med2 || mn * 2 > med2)) continue;
        a[0] = mn;
        rec(1, mn, mn);
      }
    } else {
      rec(0, lo, 0);
    }
    return res;
  }

  /* ---------- what conflicts? ---------- */
  function subsets(keys) {
    var out = [], total = 1 << keys.length;
    for (var m = 1; m < total; m++) {
      var s = [];
      for (var b = 0; b < keys.length; b++) if (m & (1 << b)) s.push(keys[b]);
      out.push(s);
    }
    out.sort(function (x, y) { return x.length - y.length; });
    return out;
  }
  function pick(cond, keys) {
    var c = {};
    keys.forEach(function (k) { c[k] = cond[k]; });
    return c;
  }
  function activeKeys(cond) { return KEYS.filter(function (k) { return cond[k] !== undefined; }); }

  /* analyze: is the puzzle possible, and if not, what is the smallest group of clues that clash?
   * Returns { possible, result, conflicts: [ [keys...], ... ] } where each conflict is a *minimal*
   * set of clues that is impossible on its own. */
  function analyze(n, cond, opts) {
    var keys = activeKeys(cond);
    var full = solve(n, cond, opts);
    var out = { possible: full.count > 0, result: full, conflicts: [], uncertain: full.aborted && full.count === 0 };
    if (out.possible || !keys.length) return out;
    var bad = [];
    subsets(keys).forEach(function (s) {
      for (var i = 0; i < bad.length; i++) {      // skip if it already contains a smaller conflict
        if (bad[i].every(function (k) { return s.indexOf(k) !== -1; })) return;
      }
      var r = solve(n, pick(cond, s), { zero: opts && opts.zero, ties: opts && opts.ties, maxNodes: opts && opts.maxNodes, stopAfter: 1, keep: 0 });
      if (r.count === 0) { if (r.aborted) out.uncertain = true; bad.push(s); }
    });
    out.conflicts = bad;
    return out;
  }

  /* Why is a single clue (or the whole puzzle) impossible?  Plain-language reasons for the
   * common causes. Returns an array of strings; empty if nothing simple applies. */
  function reasons(n, cond, opts) {
    var zero = opts && opts.zero, lo = zero ? 0 : 1, out = [];
    var word = zero ? 'zero or more' : 'at least 1';
    if (cond.mean !== undefined) {
      var t = cond.mean * n;
      if (Math.abs(t - Math.round(t)) > 1e-9) {
        if (Math.abs(t - Math.round(t)) < 0.03)
          out.push('Mean ' + cond.mean + ' would need a total of ' + (+t.toFixed(4)) + ', which is not whole. (If you meant a repeating decimal such as 8.666…, this tool needs an exact mean; pick a case whose mean stops, like 8.5.)');
        else
          out.push('Mean ' + cond.mean + ' of ' + n + ' whole numbers would need a total of ' + (+t.toFixed(4)) + ', and a total of whole numbers is always whole.');
      }
    }
    if (cond.median !== undefined && n % 2 === 1 && cond.median !== Math.round(cond.median))
      out.push('With ' + n + ' numbers (an odd count) the median is one of the numbers, so it cannot be ' + cond.median + '.');
    if (cond.median !== undefined && Math.abs(cond.median * 2 - Math.round(cond.median * 2)) > 1e-9)
      out.push('The median of whole numbers is always a whole number or ends in .5.');
    if (cond.mean !== undefined && cond.range !== undefined && Math.abs(cond.mean * n - Math.round(cond.mean * n)) < 1e-9) {
      var S = Math.round(cond.mean * n), maxRange = S - n * lo;
      if (cond.range > maxRange)
        out.push('The total is ' + S + '. Even if every number but one is ' + lo + ', the biggest could only be ' + (S - (n - 1) * lo) + ', so the range is at most ' + maxRange + '.');
    }
    if (cond.mean !== undefined && cond.mode !== undefined && Math.abs(cond.mean * n - Math.round(cond.mean * n)) < 1e-9) {
      var S2 = Math.round(cond.mean * n);
      if (cond.mode * 2 + (n - 2) * lo > S2)
        out.push('The mode has to appear at least twice: 2 × ' + cond.mode + ' = ' + (2 * cond.mode) + ', and the other ' + (n - 2) + ' number' + (n - 2 === 1 ? ' needs ' : 's need ') + word + (n - 2 === 1 ? '' : ' each') + ', so the total would be over ' + S2 + '.');
    }
    if (cond.median !== undefined && cond.mean !== undefined && n % 2 === 1 && Math.abs(cond.mean * n - Math.round(cond.mean * n)) < 1e-9) {
      var S3 = Math.round(cond.mean * n), h = (n - 1) / 2, floor3 = lo * h + cond.median * (h + 1);
      if (floor3 > S3)
        out.push('The median is the middle number, so ' + (h + 1) + ' of the ' + n + ' numbers are at least ' + cond.median + '. Even with the other ' + h + ' as small as ' + lo + ', the total would be at least ' + floor3 + ', more than ' + S3 + '.');
    }
    return out;
  }

  /* ---------- the possibility map ----------
   * For a fixed n, count the solutions for every pair of values of two clues (and optionally a
   * third fixed clue).  Axis values: mean and median in halves 1..10, mode 1..10, range 0..10. */
  var AXES = {
    mean: { label: 'Mean', vals: range(1, 10, 0.5) },
    median: { label: 'Median', vals: range(1, 10, 0.5) },
    mode: { label: 'Mode', vals: range(1, 10, 1) },
    range: { label: 'Range', vals: range(0, 10, 1) }
  };
  function range(a, b, step) { var o = []; for (var v = a; v <= b + 1e-9; v += step) o.push(+v.toFixed(2)); return o; }

  function forEachMultiset(n, lo, maxVal, maxSum, cb) {
    var a = new Array(n);
    (function rec(i, min, s) {
      if (i === n) { cb(a); return; }
      var left = n - i;
      for (var v = min; v <= maxVal; v++) {
        if (maxSum !== undefined && s + v * left > maxSum) break;
        a[i] = v; rec(i + 1, v, s + v);
      }
    })(0, lo, 0);
  }

  /* mapGrid(n, xKey, yKey, filter, opts) -> { xs, ys, counts[yi][xi] }
   * Allowed pairs must keep the search finite: they must include mean or range. */
  function mapGrid(n, xKey, yKey, filter, opts) {
    opts = opts || {};
    var lo = opts.zero ? 0 : 1, ties = !!opts.ties;
    filter = filter || {};
    var xs = AXES[xKey].vals, ys = AXES[yKey].vals;
    var counts = ys.map(function () { return xs.map(function () { return 0; }); });
    var xi = {}, yi = {};
    xs.forEach(function (v, i) { xi[v] = i; });
    ys.forEach(function (v, i) { yi[v] = i; });
    var usesMean = xKey === 'mean' || yKey === 'mean' || filter.mean !== undefined;
    var maxSum = usesMean ? 10 * n : undefined;
    var maxVal = usesMean ? 10 * n : 20;
    forEachMultiset(n, lo, maxVal, maxSum, function (a) {
      var st = stats(a);
      if (filter.mean !== undefined && Math.abs(st.mean - filter.mean) > 1e-9) return;
      if (filter.median !== undefined && st.median !== filter.median) return;
      if (filter.range !== undefined && st.range !== filter.range) return;
      if (filter.mode !== undefined && !modeMatches(st, filter.mode, ties)) return;
      function val(key) {
        if (key === 'mean') return +st.mean.toFixed(2);
        if (key === 'median') return st.median;
        if (key === 'range') return st.range;
        // mode: a solution counts toward every value it can be the mode of
        return null;
      }
      var xv = xKey === 'mode' ? st.top : [val(xKey)];
      var yv = yKey === 'mode' ? st.top : [val(yKey)];
      if ((xKey === 'mode' || yKey === 'mode') && st.maxc < 2) return;
      if ((xKey === 'mode' || yKey === 'mode') && !ties && st.top.length !== 1) return;
      for (var p = 0; p < xv.length; p++) for (var q = 0; q < yv.length; q++) {
        var cx = xi[xv[p]], cy = yi[yv[q]];
        if (cx !== undefined && cy !== undefined) counts[cy][cx]++;
      }
    });
    return { xs: xs, ys: ys, counts: counts };
  }
  var MAP_PAIRS = [['mean', 'mode'], ['mean', 'median'], ['mean', 'range'], ['median', 'range'], ['mode', 'range']];

  /* ---------- puzzle makers ---------- */
  function rnd(k) { return Math.floor(Math.random() * k); }
  // a mean a student can type exactly: at most two decimal places
  function tidy(x) { return Math.abs(x * 100 - Math.round(x * 100)) < 1e-9; }

  /* A random puzzle that is guaranteed possible: clues read off a secret set. */
  function randomPossible(opts) {
    opts = opts || {};
    for (var tries = 0; tries < 500; tries++) {
      var n = 3 + rnd(3), a = [], i;
      for (i = 0; i < n; i++) a.push(1 + rnd(12));
      a.sort(function (x, y) { return x - y; });
      var st = stats(a);
      var modes = st.maxc >= 2 && st.top.length === 1 ? st.top[0] : undefined;
      var pool = ['mean', 'median', 'range'];
      if (modes !== undefined) pool.push('mode');
      var want = 2 + rnd(2), cond = {};
      while (want-- > 0 && pool.length) {
        var k = pool.splice(rnd(pool.length), 1)[0];
        if (k === 'mean' && !tidy(st.mean)) continue;
        cond[k] = k === 'mode' ? modes : st[k];
      }
      if (activeKeys(cond).length >= 2) return { n: n, cond: cond, secret: a };
    }
    return { n: 3, cond: { mean: 3, mode: 2 }, secret: [2, 2, 5] };
  }

  /* A random puzzle that is impossible although every single clue, and every smaller group of
   * clues, is fine on its own: the kind of impossible that looks possible. */
  function randomSneaky(opts) {
    opts = opts || {};
    var o = { zero: opts.zero, ties: opts.ties };
    for (var tries = 0; tries < 6000; tries++) {
      var n = 3 + rnd(4), cond = { mean: (n * (2 + rnd(7)) + rnd(n)) / n };
      if (!tidy(cond.mean)) continue;
      var others = ['median', 'mode', 'range'];
      var want = 2 + rnd(2);
      while (want-- > 0 && others.length) {
        var k = others.splice(rnd(others.length), 1)[0];
        if (k === 'median') cond.median = (n % 2 ? 1 + rnd(14) : 2 + rnd(28) / 2);
        if (k === 'mode') cond.mode = 1 + rnd(14);
        if (k === 'range') cond.range = rnd(12);
      }
      var keys = activeKeys(cond);
      if (keys.length < 3) continue;
      if (solve(n, cond, { zero: o.zero, ties: o.ties, stopAfter: 1, keep: 0 }).count > 0) continue;
      var ok = true;
      for (var i = 0; i < keys.length && ok; i++) {
        var sub = keys.filter(function (_, j) { return j !== i; });
        if (solve(n, pick(cond, sub), { zero: o.zero, ties: o.ties, stopAfter: 1, keep: 0 }).count === 0) ok = false;
      }
      if (ok) return { n: n, cond: cond };
    }
    return null;
  }

  /* Puzzle design report: from a secret set and the clues you reveal. */
  function designReport(secret, revealed, opts) {
    var a = secret.slice().sort(function (x, y) { return x - y; });
    var st = stats(a), n = a.length, cond = {}, notes = [];
    revealed.forEach(function (k) {
      if (k === 'mode') {
        if (modeMatches(st, st.top[0], opts && opts.ties)) cond.mode = st.top[0];
        else notes.push('Your set has no single most common value, so there is no mode to reveal.');
      } else cond[k] = st[k];
    });
    var r = solve(n, cond, { zero: opts && opts.zero, ties: opts && opts.ties, maxNodes: opts && opts.maxNodes, keep: 12 });
    var redundant = [];
    activeKeys(cond).forEach(function (k) {
      var rest = {};
      activeKeys(cond).forEach(function (j) { if (j !== k) rest[j] = cond[j]; });
      if (!activeKeys(rest).length) return;
      var r2 = solve(n, rest, { zero: opts && opts.zero, ties: opts && opts.ties, maxNodes: opts && opts.maxNodes, keep: 0 });
      if (r2.count === r.count && !r2.aborted && !r.aborted) redundant.push(k);
    });
    return { n: n, secret: a, cond: cond, result: r, redundant: redundant, notes: notes };
  }

  var api = {
    KEYS: KEYS, AXES: AXES, MAP_PAIRS: MAP_PAIRS,
    stats: stats, modeMatches: modeMatches, satisfies: satisfies, solve: solve, analyze: analyze,
    reasons: reasons, mapGrid: mapGrid, randomPossible: randomPossible, randomSneaky: randomSneaky,
    designReport: designReport, activeKeys: activeKeys, hiBound: hiBound
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.AvgCore = api;
})(typeof window !== 'undefined' ? window : this);
