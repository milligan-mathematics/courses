/* logreg499.js — numerics for the MATH 499 logistic-regression lessons.
 *
 * Deliberately small and readable: these pages are teaching how logistic
 * regression works, so the fitting really is IRLS and the metrics really are
 * computed from the data, not faked with pre-baked numbers.
 *
 * Loaded before {{ content }} by _layouts/lesson.html, because the lesson pages
 * call LR499.* from inline scripts at parse time.
 */
(function () {
  'use strict';

  /* ---------- deterministic randomness ----------
   * Seeded so every reader sees the same "data" and a reload never changes the
   * numbers discussed in the prose. mulberry32. */
  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  // Box-Muller on top of a seeded uniform.
  function normal(r) {
    var u = 0, v = 0;
    while (u === 0) u = r();
    while (v === 0) v = r();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }

  /* ---------- basics ---------- */
  function sigmoid(z) {
    // Branch to avoid overflow of exp() for large |z|.
    if (z >= 0) return 1 / (1 + Math.exp(-z));
    var e = Math.exp(z);
    return e / (1 + e);
  }
  function dot(a, b) {
    var s = 0;
    for (var i = 0; i < a.length; i++) s += a[i] * b[i];
    return s;
  }

  /* ---------- small dense linear solve (Gauss-Jordan, partial pivot) ----------
   * Only ever called on 2x2 / 3x3 systems here. Returns null if singular. */
  function solve(A, b) {
    var n = b.length, i, j, k;
    var M = [];
    for (i = 0; i < n; i++) M.push(A[i].slice().concat([b[i]]));
    for (i = 0; i < n; i++) {
      var piv = i;
      for (k = i + 1; k < n; k++) if (Math.abs(M[k][i]) > Math.abs(M[piv][i])) piv = k;
      if (Math.abs(M[piv][i]) < 1e-12) return null;
      var tmp = M[i]; M[i] = M[piv]; M[piv] = tmp;
      var d = M[i][i];
      for (j = i; j <= n; j++) M[i][j] /= d;
      for (k = 0; k < n; k++) {
        if (k === i) continue;
        var f = M[k][i];
        if (f === 0) continue;
        for (j = i; j <= n; j++) M[k][j] -= f * M[i][j];
      }
    }
    var x = [];
    for (i = 0; i < n; i++) x.push(M[i][n]);
    return x;
  }

  /* ---------- log-likelihood ----------
   * Penalised when lambda > 0. The intercept (column 0) is never penalised —
   * shrinking it would bias the base rate, which matters enormously when the
   * positive class is rare. */
  function loglik(X, y, beta, lambda) {
    var ll = 0, i;
    for (i = 0; i < X.length; i++) {
      var z = dot(X[i], beta);
      // log(sigmoid(z)) and log(1-sigmoid(z)) written stably.
      ll += y[i] * (z < 0 ? z - Math.log(1 + Math.exp(z)) : -Math.log(1 + Math.exp(-z)));
      ll += (1 - y[i]) * (z < 0 ? -Math.log(1 + Math.exp(z)) : -z - Math.log(1 + Math.exp(-z)));
    }
    if (lambda) for (i = 1; i < beta.length; i++) ll -= 0.5 * lambda * beta[i] * beta[i];
    return ll;
  }

  /* ---------- IRLS / Newton-Raphson ----------
   * X rows must already carry the intercept as column 0.
   * opts: { lambda, maxIter, weights } — weights is a per-observation multiplier,
   * used to demonstrate class weighting.
   *
   * Reports `diverged` rather than silently returning nonsense: with perfectly
   * separable data the likelihood has no maximum and the coefficients run off
   * toward infinity. That failure is the point of Session 2, so it has to be
   * detectable rather than hidden. */
  function fit(X, y, opts) {
    opts = opts || {};
    var lambda = opts.lambda || 0;
    var maxIter = opts.maxIter || 60;
    var w = opts.weights || null;
    var p = X[0].length, n = X.length;
    var beta = new Array(p).fill(0);
    var it, i, j, k, converged = false, diverged = false;

    for (it = 1; it <= maxIter; it++) {
      var grad = new Array(p).fill(0);
      var H = [];
      for (i = 0; i < p; i++) H.push(new Array(p).fill(0));

      for (i = 0; i < n; i++) {
        var mu = sigmoid(dot(X[i], beta));
        var wi = w ? w[i] : 1;
        var resid = wi * (y[i] - mu);
        var vv = wi * mu * (1 - mu);
        for (j = 0; j < p; j++) {
          grad[j] += X[i][j] * resid;
          for (k = j; k < p; k++) H[j][k] += X[i][j] * X[i][k] * vv;
        }
      }
      for (j = 0; j < p; j++) for (k = 0; k < j; k++) H[j][k] = H[k][j];
      // ridge on the slopes only, plus a whisper of regularisation on the
      // diagonal so a near-singular Hessian still yields a step.
      for (j = 0; j < p; j++) {
        if (j > 0) { H[j][j] += lambda; grad[j] -= lambda * beta[j]; }
        H[j][j] += 1e-10;
      }

      var step = solve(H, grad);
      if (!step) { diverged = true; break; }

      // Damp the step: undamped Newton on nearly-separable data can leap to
      // absurd coefficients in one iteration and then stall.
      var maxStep = 0;
      for (j = 0; j < p; j++) maxStep = Math.max(maxStep, Math.abs(step[j]));
      var scale = maxStep > 4 ? 4 / maxStep : 1;
      for (j = 0; j < p; j++) beta[j] += scale * step[j];

      var big = 0;
      for (j = 0; j < p; j++) big = Math.max(big, Math.abs(beta[j]));
      if (big > 60) { diverged = true; break; }
      if (maxStep * scale < 1e-9) { converged = true; break; }
    }

    // Complete separation cannot be caught by magnitude alone. As beta grows,
    // every fitted probability saturates to 0 or 1, the gradient underflows, the
    // step goes to zero and IRLS cheerfully reports "converged" — at whatever
    // arbitrary coefficient it happened to reach when the arithmetic ran out.
    // The honest test is geometric: does the fitted boundary classify every
    // training point correctly? If so the likelihood has no maximum and the
    // reported beta is an artefact of the stopping rule, not an estimate.
    var separated = false;
    if (!lambda) {
      separated = true;
      for (i = 0; i < n; i++) {
        var zi = dot(X[i], beta);
        if ((y[i] === 1 && zi <= 0) || (y[i] === 0 && zi >= 0)) { separated = false; break; }
      }
    }

    return {
      beta: beta, iters: it, converged: converged && !separated,
      diverged: diverged || separated, separated: separated,
      ll: loglik(X, y, beta, lambda)
    };
  }

  function predict(X, beta) {
    return X.map(function (row) { return sigmoid(dot(row, beta)); });
  }

  /* ---------- ranking metrics ----------
   * Ties are handled by sorting descending and walking the list; with continuous
   * scores exact ties are vanishingly rare here, and treating them in order is
   * adequate for a teaching page. */
  function rocCurve(scores, y) {
    var idx = scores.map(function (s, i) { return i; })
      .sort(function (a, b) { return scores[b] - scores[a]; });
    var P = y.reduce(function (a, b) { return a + b; }, 0);
    var N = y.length - P;
    var tp = 0, fp = 0, pts = [{ x: 0, y: 0 }], auc = 0, prevFpr = 0, prevTpr = 0;
    idx.forEach(function (i) {
      if (y[i] === 1) tp++; else fp++;
      var tpr = P ? tp / P : 0, fpr = N ? fp / N : 0;
      auc += (fpr - prevFpr) * (tpr + prevTpr) / 2;   // trapezoid
      prevFpr = fpr; prevTpr = tpr;
      pts.push({ x: fpr, y: tpr });
    });
    return { pts: pts, auc: auc };
  }

  // Precision-recall curve and average precision (the step-wise sum, which is
  // what scikit-learn's average_precision_score reports).
  function prCurve(scores, y) {
    var idx = scores.map(function (s, i) { return i; })
      .sort(function (a, b) { return scores[b] - scores[a]; });
    var P = y.reduce(function (a, b) { return a + b; }, 0);
    var tp = 0, fp = 0, pts = [], ap = 0, prevRec = 0;
    idx.forEach(function (i) {
      if (y[i] === 1) tp++; else fp++;
      var prec = tp / (tp + fp), rec = P ? tp / P : 0;
      ap += (rec - prevRec) * prec;
      prevRec = rec;
      pts.push({ x: rec, y: prec });
    });
    return { pts: pts, ap: ap, baseline: y.length ? P / y.length : 0 };
  }

  // Positive predictive value among the k highest-scoring cases — the auditor's
  // metric, and the one Walker (2021) used against Bao et al. (2020).
  function ppvAtTopK(scores, y, k) {
    var idx = scores.map(function (s, i) { return i; })
      .sort(function (a, b) { return scores[b] - scores[a]; });
    k = Math.max(1, Math.min(k, idx.length));
    var hit = 0;
    for (var i = 0; i < k; i++) hit += y[idx[i]];
    return { k: k, hits: hit, ppv: hit / k };
  }

  function confusion(scores, y, thr) {
    var tp = 0, fp = 0, tn = 0, fn = 0;
    for (var i = 0; i < y.length; i++) {
      var pos = scores[i] >= thr;
      if (pos && y[i] === 1) tp++;
      else if (pos) fp++;
      else if (y[i] === 1) fn++;
      else tn++;
    }
    return {
      tp: tp, fp: fp, tn: tn, fn: fn,
      accuracy: (tp + tn) / y.length,
      precision: tp + fp ? tp / (tp + fp) : NaN,
      recall: tp + fn ? tp / (tp + fn) : NaN
    };
  }

  /* ---------- synthetic firms ----------
   * A stand-in for the Polish data: one informative ratio, one noise ratio on a
   * wildly different scale, a rare positive class, and heavy right skew — the
   * four properties that make real financial data awkward.
   *
   * `rate` is the target share of bankrupt firms; the intercept is solved for by
   * bisection so the realised base rate actually lands near it. */
  function makeFirms(n, rate, seed) {
    var r = rng(seed || 7);
    var raw = [];
    for (var i = 0; i < n; i++) {
      var ratio = 1.6 + 0.75 * normal(r);          // a current-ratio-like number
      if (r() < 0.06) ratio += 6 * r();            // a fat right tail
      var scaleFeat = 40000 + 18000 * normal(r);   // "total assets", huge scale
      raw.push({ ratio: ratio, assets: scaleFeat, u: r() });
    }
    var b1 = -1.35;
    function shareAt(b0) {
      var c = 0;
      raw.forEach(function (f) { c += sigmoid(b0 + b1 * f.ratio); });
      return c / n;
    }
    var lo = -12, hi = 6, b0 = 0;
    for (var t = 0; t < 60; t++) {
      b0 = (lo + hi) / 2;
      if (shareAt(b0) > rate) hi = b0; else lo = b0;
    }
    return raw.map(function (f) {
      return {
        ratio: f.ratio,
        assets: f.assets,
        y: f.u < sigmoid(b0 + b1 * f.ratio) ? 1 : 0
      };
    });
  }

  function fmt(x, d) {
    if (x === null || x === undefined || !isFinite(x)) return '—';
    return Number(x).toFixed(d === undefined ? 3 : d);
  }
  function pct(x, d) {
    if (!isFinite(x)) return '—';
    return (100 * x).toFixed(d === undefined ? 1 : d) + '%';
  }

  window.LR499 = {
    rng: rng, normal: normal, sigmoid: sigmoid, dot: dot, solve: solve,
    loglik: loglik, fit: fit, predict: predict,
    rocCurve: rocCurve, prCurve: prCurve, ppvAtTopK: ppvAtTopK, confusion: confusion,
    makeFirms: makeFirms, fmt: fmt, pct: pct
  };
})();
