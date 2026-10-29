/* Math placement assessment: the adaptive engine. Used by the page and by tools/simulate.js.

   One number, theta, stands for how far a student is above (+) or below (-) the bar for a
   college-level course; the bar is theta = 0. The page keeps a probability for every theta on a grid
   (the posterior), starting neutral and centered on the bar. Each answer reweights it using the
   question's level (difficulty b), and P(ready) is the posterior weight at or above 0.

   Chance a student at theta answers a question right:  c + (d - c) / (1 + exp(-a (theta - b)))
     c  lucky guess: 1/(number of choices) for multiple choice, 0.02 for a typed answer
     d  0.95: a ready student still slips now and then, so one miss is never decisive
     a  1.4 for every question until pilot data says otherwise
     b  from the level: 1 -> -2.4, 2 -> -1.4, 3 -> -0.4, 4 -> 0.6, 5 -> 1.6
        (a student right at the bar gets about 92%, 84%, 61%, 30%, 11% of them right)
   A question may set its own `a` and `b` once it has been calibrated on real answers.

   Choosing the next question: strands take turns (the one asked least goes next) so every
   strand is covered; within the strand, the question expected to shrink the uncertainty about
   the decision (ready or not) the most, judged by the expected drop in its entropy. When the
   decision is already nearly certain, that drop is ~0 for everything, and the tie-breaker is how
   informative the question is at the student's estimated level, so students get questions near
   their level rather than ones far above or below it. One of the two best is chosen at random.

   Stopping: at least 12 questions (2 per strand); stop as soon as P(ready) >= 0.95 or <= 0.05;
   otherwise stop at 30 and place by which side is more likely. Every sitting ends in a placement
   (as with the old cut score), but one that ends with P(ready) between 0.20 and 0.80 is flagged as
   a close call so Dr. Lundholm can look at it. These numbers come from tools/simulate.js. */
(function (root) {
  'use strict';
  var PL = root.PL;

  var CFG = PL.CFG = {
    cut: 0,
    levelB: { 1: -2.4, 2: -1.4, 3: -0.4, 4: 0.6, 5: 1.6 },
    a: 1.4,
    upper: 0.95,
    guessTyped: 0.02,
    prior: { mean: 0, sd: 1.5 },
    grid: { lo: -5, hi: 5, n: 201 },
    minItems: 12,
    maxItems: 30,
    perStrandMin: 2,
    stopAt: 0.95,
    atMax: 0.5,
    closeBand: 0.80,
    topK: 2,
    warmupLevel: 2
  };

  /* ---------------------------------------------------------------- question parameters */
  var shape = {};   // id -> { mc, k } from one sample instance (type never changes with the seed)
  PL.params = function (it, cfg) {
    cfg = cfg || CFG;
    var sh = shape[it.id];
    if (!sh) { var x = PL.make(it, 1); sh = shape[it.id] = { mc: !!x.choices, k: x.choices ? x.choices.length : 0 }; }
    return { a: it.a || cfg.a, b: it.b !== undefined ? it.b : cfg.levelB[it.level], c: sh.mc ? 1 / sh.k : cfg.guessTyped, d: cfg.upper };
  };
  function prob(p, th) { return p.c + (p.d - p.c) / (1 + Math.exp(-p.a * (th - p.b))); }
  PL.prob = prob;

  /* ---------------------------------------------------------------- posterior on a grid */
  function Posterior(cfg) {
    cfg = cfg || CFG;
    this.cfg = cfg;
    var g = cfg.grid, n = g.n;
    this.th = new Float64Array(n); this.w = new Float64Array(n);
    for (var i = 0; i < n; i++) {
      var t = g.lo + (g.hi - g.lo) * i / (n - 1), z = (t - cfg.prior.mean) / cfg.prior.sd;
      this.th[i] = t; this.w[i] = Math.exp(-0.5 * z * z);
    }
    this.norm();
  }
  Posterior.prototype.norm = function () {
    var s = 0, i;
    for (i = 0; i < this.w.length; i++) s += this.w[i];
    for (i = 0; i < this.w.length; i++) this.w[i] /= s;
  };
  /* chance of a right answer at each grid point, cached per (parameters, grid) */
  var tables = {};
  Posterior.prototype.table = function (p) {
    var g = this.cfg.grid, key = [p.a, p.b, p.c, p.d, g.lo, g.hi, g.n].join('|'), t = tables[key];
    if (!t) { t = tables[key] = new Float64Array(this.th.length); for (var i = 0; i < t.length; i++) t[i] = prob(p, this.th[i]); }
    return t;
  };
  Posterior.prototype.update = function (p, correct) {
    var t = this.table(p);
    for (var i = 0; i < this.w.length; i++) this.w[i] *= correct ? t[i] : 1 - t[i];
    this.norm();
  };
  /* weight at or above the bar; a grid point exactly on the bar counts half */
  Posterior.prototype.upper = function () {
    if (!this.up) {
      var cut = this.cfg.cut;
      this.up = new Float64Array(this.th.length);
      for (var i = 0; i < this.th.length; i++) this.up[i] = this.th[i] > cut + 1e-9 ? 1 : Math.abs(this.th[i] - cut) <= 1e-9 ? 0.5 : 0;
    }
    return this.up;
  };
  Posterior.prototype.pReady = function () {
    var s = 0, up = this.upper();
    for (var i = 0; i < this.w.length; i++) s += this.w[i] * up[i];
    return s;
  };
  Posterior.prototype.mean = function () { var s = 0; for (var i = 0; i < this.w.length; i++) s += this.w[i] * this.th[i]; return s; };
  Posterior.prototype.sd = function () {
    var m = this.mean(), s = 0;
    for (var i = 0; i < this.w.length; i++) s += this.w[i] * (this.th[i] - m) * (this.th[i] - m);
    return Math.sqrt(s);
  };
  function H(p) { return p <= 0 || p >= 1 ? 0 : -(p * Math.log(p) + (1 - p) * Math.log(1 - p)); }
  /* expected drop in the entropy of the ready / not-ready decision from asking a question with params p */
  Posterior.prototype.gain = function (p) {
    var t = this.table(p), up = this.upper(), pc = 0, rc = 0, rw = 0, r = 0;
    for (var i = 0; i < this.w.length; i++) {
      var q = t[i], w = this.w[i];
      pc += w * q; rc += w * q * up[i]; rw += w * (1 - q) * up[i]; r += w * up[i];
    }
    if (pc <= 0 || pc >= 1) return 0;
    return H(r) - (pc * H(rc / pc) + (1 - pc) * H(rw / (1 - pc)));
  };
  /* Fisher information of a question at theta */
  function info(p, th) {
    var P = prob(p, th), e = Math.exp(-p.a * (th - p.b)), L = 1 / (1 + e), dP = (p.d - p.c) * p.a * L * (1 - L);
    return dP * dP / (P * (1 - P));
  }
  PL.Posterior = Posterior;
  PL.info = info;

  /* ---------------------------------------------------------------- one sitting */
  /* items: the bank (PL.items); seed: chooses among near-ties and makes the question instances;
     opts.cfg overrides CFG (the simulator uses this). Replaying the same seed and answers gives the
     same questions, so a saved session can be rebuilt after a reload. */
  function Session(items, seed, opts) {
    opts = opts || {};
    this.cfg = opts.cfg || CFG;
    this.items = items;
    this.seed = seed >>> 0;
    this.rand = PL.rng(PL.hash(this.seed, 99));
    this.post = new Posterior(this.cfg);
    this.used = {};
    this.count = PL.STRANDS.map(function () { return 0; });
    this.log = [];   // { id, strand, level, correct }
    this.par = items.map(function (it) { return PL.params(it, this.cfg); }, this);
  }
  Session.prototype.n = function () { return this.log.length; };
  Session.prototype.pReady = function () { return this.post.pReady(); };

  Session.prototype.done = function () {
    var c = this.cfg, n = this.n(), p = this.pReady();
    if (n >= c.maxItems) return true;
    if (n < c.minItems || Math.min.apply(null, this.count) < c.perStrandMin) return false;
    return p >= c.stopAt || p <= 1 - c.stopAt;
  };

  /* 'ready' | '090' | 'review'. Once done(), 'review' only happens if atMax is set above 0.5
     (an option the simulator compares); the page uses atMax 0.5, so every sitting gets a placement. */
  Session.prototype.decision = function () {
    var c = this.cfg, p = this.pReady();
    if (p >= c.stopAt) return 'ready';
    if (p <= 1 - c.stopAt) return '090';
    if (this.n() >= c.maxItems) return p >= c.atMax ? 'ready' : p < 1 - c.atMax ? '090' : 'review';
    return 'review';
  };
  /* a placement the evidence doesn't settle firmly: flagged for a second look */
  Session.prototype.close = function () {
    var p = this.pReady(), b = this.cfg.closeBand;
    return p > 1 - b && p < b;
  };

  /* index into items of the next question, or -1 when there is nothing left to ask */
  Session.prototype.next = function () {
    var self = this, c = this.cfg, k;
    var open = [];
    for (k = 0; k < this.items.length; k++) if (!this.used[this.items[k].id]) open.push(k);
    if (!open.length) return -1;
    var r = this.rand();
    if (this.n() === 0) {   // start gently: an easy question from a random strand
      var easy = open.filter(function (k) { return self.items[k].level === c.warmupLevel; });
      if (easy.length) return easy[Math.floor(r * easy.length)];
    }
    var byStrand = PL.STRANDS.map(function () { return []; });
    open.forEach(function (k) { byStrand[PL.STRAND_INDEX[self.items[k].strand]].push(k); });
    var est = this.post.mean();
    var score = {};
    open.forEach(function (k) { score[k] = self.post.gain(self.par[k]) + 0.01 * info(self.par[k], est); });
    var least = Infinity, s;
    for (s = 0; s < byStrand.length; s++) if (byStrand[s].length && this.count[s] < least) least = this.count[s];
    var bestStrand = -1, bestScore = -1;
    for (s = 0; s < byStrand.length; s++) {
      if (!byStrand[s].length || this.count[s] !== least) continue;
      var top = Math.max.apply(null, byStrand[s].map(function (k) { return score[k]; }));
      if (top > bestScore + 1e-12) { bestScore = top; bestStrand = s; }
    }
    var pool = byStrand[bestStrand].slice().sort(function (x, y) { return score[y] - score[x] || x - y; }).slice(0, c.topK);
    return pool[Math.floor(r * pool.length)];
  };

  Session.prototype.record = function (k, correct) {
    var it = this.items[k];
    this.used[it.id] = true;
    this.count[PL.STRAND_INDEX[it.strand]]++;
    this.post.update(this.par[k], !!correct);
    this.log.push({ id: it.id, strand: it.strand, level: it.level, correct: !!correct });
  };

  /* seed for the instance (the numbers) of the n-th question in this sitting */
  Session.prototype.instanceSeed = function (n) { return PL.hash(this.seed, 1000 + n); };

  /* right / asked per strand, for the result screen */
  Session.prototype.strandSummary = function () {
    var out = PL.STRANDS.map(function (s) { return { key: s.key, name: s.name, asked: 0, right: 0 }; });
    this.log.forEach(function (e) { var o = out[PL.STRAND_INDEX[e.strand]]; o.asked++; if (e.correct) o.right++; });
    return out;
  };

  PL.Session = Session;
  if (typeof module !== 'undefined' && module.exports) module.exports = PL;
})(typeof window !== 'undefined' ? window : globalThis);
