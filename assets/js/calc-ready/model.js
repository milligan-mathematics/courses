/* Calc-ready check: the belief model (a port of simulate.py's Posterior).
   Pure computation, no DOM. Runs in the browser and under Node for the tests.

   The belief is a weighted sample of "possible students", each a set of mastered nodes that is closed
   under prerequisites. A right answer on X raises every sample containing X (and so X's prerequisites);
   a miss lowers them (and so everything built on X). See ../DESIGN.md. */
(function (root) {
  'use strict';

  var PARAMS = { slip: 0.10, guess: 0.25, skipU: 0.30, skipM: 0.02 };
  var RESP = ['correct', 'wrong', 'skip'];

  /* Small seeded generator (mulberry32) so a session can be rebuilt from its seed. */
  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function lik(knows, resp, p) {
    if (resp === 'correct') return knows ? 1 - p.slip - p.skipM : p.guess * (1 - p.skipU);
    if (resp === 'wrong') return knows ? p.slip : (1 - p.guess) * (1 - p.skipU);
    return knows ? p.skipM : p.skipU;
  }

  function H(p) {
    if (p < 1e-9) p = 1e-9; else if (p > 1 - 1e-9) p = 1 - 1e-9;
    return -(p * Math.log2(p) + (1 - p) * Math.log2(1 - p));
  }

  function decodeBase64(b64) {
    if (typeof atob === 'function') {
      var s = atob(b64), out = new Uint8Array(s.length);
      for (var i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
      return out;
    }
    return new Uint8Array(Buffer.from(b64, 'base64'));
  }

  /* Graph structure from the page data. */
  function Graph(data) {
    var n = data.nodes.length;
    this.n = n;
    this.req = data.nodes.map(function (d) { return d.req; });
    this.dep = [];
    for (var i = 0; i < n; i++) this.dep.push([]);
    for (i = 0; i < n; i++) this.req[i].forEach(function (r) { this.dep[r].push(i); }, this);
    this.nDesc = data.nDesc;
    var maxD = Math.max.apply(null, data.nDesc);
    this.importance = data.nDesc.map(function (d) { return 1 + Math.log1p(d) / Math.log1p(maxD); });
    this.depth = data.depth;
    this.scale = data.scale;
  }

  /* Posterior over knowledge states. prior = data.prior (packed bits + theta). */
  function Posterior(graph, prior, random, params) {
    var P = prior.particles, n = graph.n, bpr = prior.bytesPerRow;
    var bytes = decodeBase64(prior.bits);
    this.g = graph; this.P = P; this.n = n; this.rand = random; this.p = params || PARAMS;
    this.S = new Uint8Array(P * n);
    for (var k = 0; k < P; k++) {
      for (var i = 0; i < n; i++) {
        var b = bytes[k * bpr + (i >> 3)];
        this.S[k * n + i] = (b >> (7 - (i & 7))) & 1;      // numpy packbits: most significant bit first
      }
    }
    this.theta = Float64Array.from(prior.theta);
    this.logodds = new Float64Array(P * n);
    for (k = 0; k < P; k++)
      for (i = 0; i < n; i++)
        this.logodds[k * n + i] = (this.theta[k] - graph.depth[i]) / graph.scale;
    this.w = new Float64Array(P).fill(1 / P);
    this.history = [];   // [node, resp]
    this.resamples = 0;
  }

  Posterior.prototype.marginals = function () {
    var P = this.P, n = this.n, S = this.S, w = this.w, m = new Float64Array(n);
    for (var k = 0; k < P; k++) {
      var wk = w[k], off = k * n;
      if (wk === 0) continue;
      for (var i = 0; i < n; i++) if (S[off + i]) m[i] += wk;
    }
    return m;
  };

  Posterior.prototype.ess = function () {
    var s = 0;
    for (var k = 0; k < this.P; k++) s += this.w[k] * this.w[k];
    return 1 / s;
  };

  Posterior.prototype.update = function (node, resp, opts) {
    var P = this.P, n = this.n, S = this.S, w = this.w, p = this.p, tot = 0;
    var l1 = lik(1, resp, p), l0 = lik(0, resp, p);
    for (var k = 0; k < P; k++) { w[k] *= S[k * n + node] ? l1 : l0; tot += w[k]; }
    for (k = 0; k < P; k++) w[k] /= tot;
    this.history.push([node, resp]);
    if (!(opts && opts.noRejuvenate) && this.ess() < 0.5 * P) this.rejuvenate();
  };

  /* Systematic resampling, then one Metropolis sweep so the copies spread out again. */
  Posterior.prototype.rejuvenate = function () {
    var P = this.P, n = this.n, w = this.w, u = this.rand();
    var S2 = new Uint8Array(P * n), th2 = new Float64Array(P), lo2 = new Float64Array(P * n);
    var cum = 0, j = 0;
    for (var k = 0; k < P; k++) {
      var pos = (u + k) / P;
      while (j < P - 1 && cum + w[j] < pos) { cum += w[j]; j++; }
      S2.set(this.S.subarray(j * n, j * n + n), k * n);
      lo2.set(this.logodds.subarray(j * n, j * n + n), k * n);
      th2[k] = this.theta[j];
    }
    this.S = S2; this.theta = th2; this.logodds = lo2;
    this.w = new Float64Array(P).fill(1 / P);
    this.sweep();
    this.resamples++;
  };

  /* One Metropolis sweep over the nodes. Moves keep each set closed under prerequisites:
     add a node whose prerequisites are in, or remove a node nothing in the set requires. */
  Posterior.prototype.sweep = function () {
    var P = this.P, n = this.n, S = this.S, g = this.g, p = this.p, rand = this.rand;
    var order = [], i;
    for (i = 0; i < n; i++) order.push(i);
    for (i = n - 1; i > 0; i--) { var r = Math.floor(rand() * (i + 1)), t = order[i]; order[i] = order[r]; order[r] = t; }
    // evidence per node: sum over its answers of log l1 - log l0
    var ev = new Float64Array(n);
    this.history.forEach(function (h) {
      ev[h[0]] += Math.log(Math.max(lik(1, h[1], p), 1e-12)) - Math.log(Math.max(lik(0, h[1], p), 1e-12));
    });
    for (var oi = 0; oi < n; oi++) {
      var j = order[oi], req = g.req[j], dep = g.dep[j];
      for (var k = 0; k < P; k++) {
        var off = k * n, inj = S[off + j], ok = true, q;
        if (inj) { for (q = 0; q < dep.length; q++) if (S[off + dep[q]]) { ok = false; break; } }
        else { for (q = 0; q < req.length; q++) if (!S[off + req[q]]) { ok = false; break; } }
        if (!ok) continue;
        var lr = inj ? -this.logodds[off + j] - ev[j] : this.logodds[off + j] + ev[j];
        if (Math.log(rand()) < lr) S[off + j] = inj ? 0 : 1;
      }
    }
  };

  /* Expected information gain for asking about each node.
     Uses J[x][i] = sum_k w_k S_kx S_ki, so each candidate costs O(n) instead of O(P n). */
  Posterior.prototype.gains = function () {
    var P = this.P, n = this.n, S = this.S, w = this.w, p = this.p;
    var m = new Float64Array(n), J = new Float64Array(n * n), on = new Int32Array(n);
    for (var k = 0; k < P; k++) {
      var wk = w[k];
      if (wk === 0) continue;
      var off = k * n, c = 0;
      for (var i = 0; i < n; i++) if (S[off + i]) on[c++] = i;
      for (var a = 0; a < c; a++) {
        var ia = on[a], row = ia * n;
        m[ia] += wk;
        for (var b = 0; b < c; b++) J[row + on[b]] += wk;
      }
    }
    var cur = 0;
    for (i = 0; i < n; i++) cur += H(m[i]);
    var gain = new Float64Array(n);
    for (var x = 0; x < n; x++) {
      var expected = 0;
      for (var r = 0; r < 3; r++) {
        var a1 = lik(1, RESP[r], p), a0 = lik(0, RESP[r], p);
        if (a1 === 0 && a0 === 0) continue;
        var pout = a1 * m[x] + a0 * (1 - m[x]);
        if (pout < 1e-12) continue;
        var hs = 0, row2 = x * n;
        for (i = 0; i < n; i++) hs += H((a1 * J[row2 + i] + a0 * (m[i] - J[row2 + i])) / pout);
        expected += pout * hs;
      }
      gain[x] = cur - expected;
    }
    return gain;
  };

  /* The candidate with the largest gain; near-ties (within 1%) broken at random. */
  Posterior.prototype.nextNode = function (candidates, tol) {
    tol = tol === undefined ? 0.01 : tol;
    var gain = this.gains(), best = -Infinity;
    candidates.forEach(function (c) { if (gain[c] > best) best = gain[c]; });
    var near = candidates.filter(function (c) { return gain[c] >= best - tol * Math.max(best, 1e-9); });
    return near[Math.floor(this.rand() * near.length)];
  };

  /* P(node is a first gap) = P(unmastered and all direct prerequisites mastered). */
  Posterior.prototype.fringeProb = function () {
    var P = this.P, n = this.n, S = this.S, w = this.w, req = this.g.req, f = new Float64Array(n);
    for (var k = 0; k < P; k++) {
      var wk = w[k], off = k * n;
      if (wk === 0) continue;
      for (var i = 0; i < n; i++) {
        if (S[off + i]) continue;
        var ok = true, rs = req[i];
        for (var q = 0; q < rs.length; q++) if (!S[off + rs[q]]) { ok = false; break; }
        if (ok) f[i] += wk;
      }
    }
    return f;
  };

  /* Ranked "start here" nodes: first-gap chance weighted up to double by how much rests on the node. */
  Posterior.prototype.ranked = function (floor) {
    var f = this.fringeProb(), imp = this.g.importance, idx = [];
    for (var i = 0; i < this.n; i++) if (f[i] >= floor) idx.push(i);
    idx.sort(function (a, b) { return f[b] * imp[b] - f[a] * imp[a]; });
    return { order: idx, fringe: f };
  };

  Posterior.prototype.startHere = function (k, floor) {
    return this.ranked(floor === undefined ? 0.25 : floor).order.slice(0, k || 3);
  };

  Posterior.prototype.tossUps = function (lo, hi) {
    lo = lo === undefined ? 0.15 : lo; hi = hi === undefined ? 0.85 : hi;
    var m = this.marginals(), c = 0;
    for (var i = 0; i < this.n; i++) if (m[i] > lo && m[i] < hi) c++;
    return c;
  };

  var api = { PARAMS: PARAMS, rng: rng, lik: lik, Graph: Graph, Posterior: Posterior };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CRModel = api;
})(this);
