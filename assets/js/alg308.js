/* MATH 308 - finite groups, permutations and Z_n rings for the daily companion pages.
 *
 * Two layers:
 *
 *   A308.Z(n), A308.U(n), A308.D(n), A308.S(n), A308.A(n), A308.Q8(), A308.V4(),
 *   A308.product(G, H), A308.fromPerms(gens, n), A308.fromTable(labels, rows)
 *       build a finite group as a Cayley table over element indices 0..n-1, with
 *       order(), subgroups(), leftCosets(), isNormal(), quotient(), center(), ...
 *
 *   A308.cayley(el, opts), A308.polygon(el, opts), A308.perm(el, opts),
 *   A308.clock(el, opts), A308.lattice(el, opts), A308.cosets(el, opts),
 *   A308.quotient(el, opts), A308.hom(el, opts), A308.ring(el, opts),
 *   A308.euclid(el, opts), A308.powmod(el, opts), A308.lattice2d(el, opts)
 *       widgets. Each takes a container element and returns a small controller.
 *
 *   A308.dragPoints(svg, opts), A308.dragHandle(id, pt, plane, label)
 *       let a page make its own draggable points in an SVG (lattice2d uses them).
 *   A308.powmodSteps(a, b, n), A308.latticeSame(b, c), A308.latticeTurn(b, n), ...
 *       the arithmetic behind powmod and lattice2d, as plain functions.
 *
 * Conventions follow Judson, *Abstract Algebra: Theory and Applications*:
 *   - permutations multiply RIGHT TO LEFT: (sigma tau)(x) = sigma(tau(x));
 *   - the identity permutation is written (1);
 *   - D_n acts on vertices 1..n; r sends vertex i to i+1, s fixes vertex 1, and
 *     r^k s means "do s, then r^k" (so it sends vertex 1 to vertex k+1);
 *   - D_3 can use Judson's Chapter 3 names id, rho_1, rho_2, mu_1, mu_2, mu_3,
 *     where mu_i fixes the i-th vertex (A, B, C);
 *   - cosets of an additive group (ℤ_n, products of them) are written g + H and
 *     H + g; of a multiplicative group, gH and Hg. A widget's `additive` option
 *     overrides what the group says.
 *
 * Widgets that compute from free input accept `avoid`: a list of inputs that
 * are assigned homework. Entering one shows a friendly note instead of the
 * answer, because nothing on these pages answers an assigned problem.
 *
 * Every widget that has a readout also accepts `predict`: true, or a string to use
 * as the prompt. The readout stays hidden, with the prompt in its place, until the
 * student's first move (a click, a slider, a typed key, a menu choice), so a
 * "predict first" question on the page cannot be answered by the widget before
 * the student has committed. The controller's reveal() shows it early.
 *
 * The engine has no DOM dependencies, so the test suite runs it under Node.
 */
(function (root) {
  'use strict';

  /* ================================================================== *
   * Number theory
   * ================================================================== */
  function mod(a, n) { return ((a % n) + n) % n; }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; }
  function lcm(a, b) { return a && b ? Math.abs(a / gcd(a, b) * b) : 0; }
  function phi(n) { var c = 0; for (var k = 1; k <= n; k++) if (gcd(k, n) === 1) c++; return c; }
  function divisors(n) { var d = []; for (var k = 1; k <= n; k++) if (n % k === 0) d.push(k); return d; }

  /* Euclidean algorithm with the steps kept, then back-substitution.
   * Returns { g, r, s, steps: [{a, b, q, rem}] } with g = r*a + s*b. */
  function egcd(a, b) {
    var steps = [], x = Math.abs(a), y = Math.abs(b);
    while (y !== 0) {
      var q = Math.floor(x / y), rem = x - q * y;
      steps.push({ a: x, b: y, q: q, rem: rem });
      x = y; y = rem;
    }
    // Extended version on the original signed inputs.
    var r0 = a, r1 = b, s0 = 1, s1 = 0, t0 = 0, t1 = 1;
    while (r1 !== 0) {
      var qq = Math.floor(r0 / r1), tmp;
      tmp = r0 - qq * r1; r0 = r1; r1 = tmp;
      tmp = s0 - qq * s1; s0 = s1; s1 = tmp;
      tmp = t0 - qq * t1; t0 = t1; t1 = tmp;
    }
    if (r0 < 0) { r0 = -r0; s0 = -s0; t0 = -t0; }
    return { g: r0, r: s0, s: t0, steps: steps };
  }

  function modInverse(a, n) {
    var e = egcd(mod(a, n), n);
    return e.g === 1 ? mod(e.r, n) : null;
  }

  /* All x in 0..n-1 with a x = b (mod n). */
  function solveLinearCongruence(a, b, n) {
    var out = [];
    for (var x = 0; x < n; x++) if (mod(a * x - b, n) === 0) out.push(x);
    return out;
  }

  /* ================================================================== *
   * Permutations: arrays p with p[i] = image of i, on 0..n-1 internally,
   * written 1..n for students.
   * ================================================================== */
  function permIdentity(n) { var p = []; for (var i = 0; i < n; i++) p.push(i); return p; }

  // compose(p, q) = p q = "do q, then p" (Judson: right to left).
  function compose(p, q) { return q.map(function (qi) { return p[qi]; }); }
  function permInverse(p) { var r = new Array(p.length); p.forEach(function (pi, i) { r[pi] = i; }); return r; }
  function permEqual(p, q) { return p.length === q.length && p.every(function (x, i) { return x === q[i]; }); }
  function permKey(p) { return p.join(','); }

  function permCycles(p) {
    var seen = [], cycles = [];
    for (var i = 0; i < p.length; i++) {
      if (seen[i] || p[i] === i) { seen[i] = true; continue; }
      var c = [], j = i;
      while (!seen[j]) { seen[j] = true; c.push(j); j = p[j]; }
      cycles.push(c);
    }
    return cycles;
  }

  function permToCycles(p, opts) {
    opts = opts || {};
    var names = opts.names, sep = opts.sep === undefined ? ' ' : opts.sep;
    var cs = permCycles(p);
    if (!cs.length) return opts.identity || '(1)';
    return cs.map(function (c) {
      return '(' + c.map(function (i) { return names ? names[i] : String(i + 1); }).join(sep) + ')';
    }).join('');
  }

  /* Parse "(1 3 4)(2 5)" or "(134)(25)" (single digits only when unspaced) or
   * "(1)" / "id" / "e". Cycles multiply right to left, so "(1 2)(1 3)" is
   * computed as do (1 3) first. Returns null on malformed input. */
  function parseCycles(str, n) {
    var s = String(str).trim();
    if (/^(\(\s*1?\s*\)|id|e|\(\s*\))$/i.test(s) || s === '') return permIdentity(n);
    if (!/^(\(\s*[0-9 ,]+\s*\)\s*)+$/.test(s)) return null;
    var groups = s.match(/\(([^)]*)\)/g), result = permIdentity(n);
    for (var g = groups.length - 1; g >= 0; g--) {
      var body = groups[g].slice(1, -1).trim(), parts;
      if (/[\s,]/.test(body)) parts = body.split(/[\s,]+/).filter(Boolean);
      else parts = body.split('');
      var nums = parts.map(Number);
      if (nums.some(function (x) { return !(x >= 1 && x <= n && Math.floor(x) === x); })) return null;
      var uniq = {};
      for (var k = 0; k < nums.length; k++) { if (uniq[nums[k]]) return null; uniq[nums[k]] = 1; }
      var cyc = permIdentity(n);
      for (var m = 0; m < nums.length; m++) cyc[nums[m] - 1] = nums[(m + 1) % nums.length] - 1;
      result = compose(cyc, result);
    }
    return result;
  }

  function permParity(p) {
    // A k-cycle is a product of k-1 transpositions.
    var t = permCycles(p).reduce(function (acc, c) { return acc + c.length - 1; }, 0);
    return t % 2 === 0 ? 'even' : 'odd';
  }
  function permOrder(p) { return permCycles(p).reduce(function (acc, c) { return lcm(acc, c.length); }, 1); }
  function cycleType(p) {
    var t = permCycles(p).map(function (c) { return c.length; });
    for (var i = 0; i < p.length - t.reduce(function (a, b) { return a + b; }, 0); i++) t.push(1);
    return t.sort(function (a, b) { return b - a; });
  }

  /* ================================================================== *
   * Groups as Cayley tables
   * ================================================================== */
  function Group(name, labels, table, extra) {
    this.name = name;
    this.labels = labels;
    this.table = table;          // table[a][b] = index of a*b
    this.n = labels.length;
    extra = extra || {};
    this.perms = extra.perms || null;   // optional permutation for each element
    this.tex = extra.tex || null;       // optional TeX label for each element
    this.e = -1;
    for (var a = 0; a < this.n && this.e < 0; a++) {
      var ok = true;
      for (var b = 0; b < this.n; b++) if (table[a][b] !== b || table[b][a] !== b) { ok = false; break; }
      if (ok) this.e = a;
    }
    this._inv = [];
    for (var x = 0; x < this.n; x++) {
      this._inv[x] = -1;
      for (var y = 0; y < this.n; y++) if (table[x][y] === this.e) { this._inv[x] = y; break; }
    }
  }

  Group.prototype.op = function (a, b) { return this.table[a][b]; };
  Group.prototype.inv = function (a) { return this._inv[a]; };
  Group.prototype.label = function (a) { return this.labels[a]; };
  Group.prototype.index = function (label) { return this.labels.indexOf(label); };
  Group.prototype.elements = function () { var r = []; for (var i = 0; i < this.n; i++) r.push(i); return r; };

  Group.prototype.pow = function (a, k) {
    var r = this.e, base = k < 0 ? this.inv(a) : a, m = Math.abs(k);
    for (var i = 0; i < m; i++) r = this.op(r, base);
    return r;
  };

  Group.prototype.order = function (a) {
    var x = a, k = 1;
    while (x !== this.e) { x = this.op(x, a); k++; if (k > this.n) return Infinity; }
    return k;
  };

  // Powers e, a, a^2, ... in order (the cyclic subgroup, listed as generated).
  Group.prototype.powers = function (a) {
    var out = [this.e], x = a;
    while (x !== this.e) { out.push(x); x = this.op(x, a); }
    return out;
  };

  // Smallest subgroup containing the given elements; sorted indices.
  Group.prototype.generate = function (gens) {
    var self = this, inSet = {}, list = [this.e];
    inSet[this.e] = true;
    var frontier = [this.e];
    gens = gens.filter(function (g) { return g !== undefined && g !== null; });
    while (frontier.length) {
      var next = [];
      frontier.forEach(function (x) {
        gens.forEach(function (g) {
          var y = self.op(x, g);
          if (!inSet[y]) { inSet[y] = true; list.push(y); next.push(y); }
        });
      });
      frontier = next;
    }
    return list.sort(function (p, q) { return p - q; });
  };

  Group.prototype.isSubgroup = function (set) {
    if (!set.length || set.indexOf(this.e) < 0) return false;
    var has = {};
    set.forEach(function (x) { has[x] = true; });
    for (var i = 0; i < set.length; i++) {
      if (!has[this.inv(set[i])]) return false;
      for (var j = 0; j < set.length; j++) if (!has[this.op(set[i], set[j])]) return false;
    }
    return true;
  };

  Group.prototype.isAbelian = function () {
    for (var a = 0; a < this.n; a++) for (var b = a + 1; b < this.n; b++)
      if (this.table[a][b] !== this.table[b][a]) return false;
    return true;
  };

  Group.prototype.isCyclic = function () {
    for (var a = 0; a < this.n; a++) if (this.order(a) === this.n) return true;
    return false;
  };

  Group.prototype.generators = function () {
    var self = this;
    return this.elements().filter(function (a) { return self.order(a) === self.n; });
  };

  Group.prototype.isAssociative = function () {
    for (var a = 0; a < this.n; a++) for (var b = 0; b < this.n; b++) for (var c = 0; c < this.n; c++)
      if (this.op(this.op(a, b), c) !== this.op(a, this.op(b, c))) return false;
    return true;
  };

  /* All subgroups, as sorted index arrays, smallest first. Every subgroup is a
   * join of cyclic subgroups, so start from the cyclic ones and keep joining
   * pairs until nothing new appears. Fine for the small groups on these pages. */
  Group.prototype.subgroups = function () {
    if (this._subs) return this._subs;
    var self = this, seen = {}, subs = [];
    function add(s) { var k = s.join(','); if (!seen[k]) { seen[k] = true; subs.push(s); return true; } return false; }
    for (var a = 0; a < this.n; a++) add(this.generate([a]));
    var grew = true;
    while (grew) {
      grew = false;
      var snapshot = subs.slice();
      for (var i = 0; i < snapshot.length; i++) for (var j = i + 1; j < snapshot.length; j++) {
        var A = snapshot[i], B = snapshot[j];
        if (A.length === self.n || B.length === self.n) continue;
        if (add(self.generate(A.concat(B)))) grew = true;
      }
    }
    subs.sort(function (p, q) { return p.length - q.length || p.join(',').localeCompare(q.join(',')); });
    this._subs = subs;
    return subs;
  };

  Group.prototype.leftCoset = function (g, H) {
    var self = this;
    return H.map(function (h) { return self.op(g, h); }).sort(function (p, q) { return p - q; });
  };
  Group.prototype.rightCoset = function (g, H) {
    var self = this;
    return H.map(function (h) { return self.op(h, g); }).sort(function (p, q) { return p - q; });
  };

  // Partition of G into left (or right) cosets of H, each listed with the
  // first representative met in index order.
  Group.prototype.cosets = function (H, side) {
    var self = this, used = {}, out = [];
    for (var g = 0; g < this.n; g++) {
      if (used[g]) continue;
      var c = side === 'right' ? self.rightCoset(g, H) : self.leftCoset(g, H);
      c.forEach(function (x) { used[x] = true; });
      out.push({ rep: g, elements: c });
    }
    return out;
  };
  Group.prototype.leftCosets = function (H) { return this.cosets(H, 'left'); };
  Group.prototype.rightCosets = function (H) { return this.cosets(H, 'right'); };

  /* The name of the coset of g in the group's own notation: gN or Ng for a
   * multiplicative group, g + N or N + g for an additive one (side 'left' or
   * 'right'; nName defaults to 'H'). additive defaults to the group's own flag. */
  Group.prototype.cosetName = function (g, side, nName, additive) {
    var add = additive === undefined ? !!this.additive : additive, lab = this.labels[g], nn = nName || 'H';
    if (add) return side === 'right' ? nn + ' + ' + lab : lab + ' + ' + nn;
    return side === 'right' ? nn + lab : lab + nn;
  };

  Group.prototype.isNormal = function (H) {
    var has = {};
    H.forEach(function (x) { has[x] = true; });
    for (var g = 0; g < this.n; g++) for (var i = 0; i < H.length; i++)
      if (!has[this.op(this.op(g, H[i]), this.inv(g))]) return false;
    return true;
  };

  Group.prototype.center = function () {
    var out = [];
    for (var a = 0; a < this.n; a++) {
      var ok = true;
      for (var b = 0; b < this.n; b++) if (this.table[a][b] !== this.table[b][a]) { ok = false; break; }
      if (ok) out.push(a);
    }
    return out;
  };

  Group.prototype.centralizer = function (a) {
    var out = [];
    for (var b = 0; b < this.n; b++) if (this.table[a][b] === this.table[b][a]) out.push(b);
    return out;
  };

  Group.prototype.conjugacyClasses = function () {
    var used = {}, out = [];
    for (var a = 0; a < this.n; a++) {
      if (used[a]) continue;
      var cls = {};
      for (var g = 0; g < this.n; g++) cls[this.op(this.op(g, a), this.inv(g))] = true;
      var list = Object.keys(cls).map(Number).sort(function (p, q) { return p - q; });
      list.forEach(function (x) { used[x] = true; });
      out.push(list);
    }
    return out;
  };

  /* G/N as a Group whose elements are the cosets of N. Labels are "gN" (or
   * "g + N" when the group is additive; opts.additive overrides) written with
   * the coset's first representative, or "N" for N itself. Returns null if
   * N is not normal (the operation would not be well defined). */
  Group.prototype.quotient = function (N, opts) {
    if (!this.isNormal(N)) return null;
    opts = opts || {};
    var self = this, cs = this.leftCosets(N), which = [];
    var additive = opts.additive === undefined ? !!this.additive : !!opts.additive;
    cs.forEach(function (c, k) { c.elements.forEach(function (x) { which[x] = k; }); });
    var nName = opts.nName || 'N';
    var labels = cs.map(function (c) {
      return c.rep === self.e ? nName : self.cosetName(c.rep, 'left', nName, additive);
    });
    var table = cs.map(function (c1) {
      return cs.map(function (c2) { return which[self.op(c1.rep, c2.rep)]; });
    });
    var Q = new Group(this.name + '/' + nName, labels, table);
    if (additive) Q.additive = true;
    Q.cosetList = cs;
    Q.cosetOf = which;
    return Q;
  };

  Group.prototype.orderCounts = function () {
    var counts = {};
    for (var a = 0; a < this.n; a++) { var o = this.order(a); counts[o] = (counts[o] || 0) + 1; }
    return counts;
  };

  /* A short readable name for a subgroup: <a> if cyclic, else <a, b> with the
   * fewest generators found, else the element list. */
  Group.prototype.describe = function (H) {
    var self = this;
    if (H.length === 1) return '{' + this.labels[this.e] + '}';
    if (H.length === this.n) return this.name;
    for (var i = 0; i < H.length; i++) if (this.order(H[i]) === H.length) return '⟨' + this.labels[H[i]] + '⟩';
    var key = H.join(',');
    for (var a = 0; a < H.length; a++) for (var b = a + 1; b < H.length; b++)
      if (self.generate([H[a], H[b]]).join(',') === key) return '⟨' + this.labels[H[a]] + ', ' + this.labels[H[b]] + '⟩';
    for (var c = 0; c < H.length; c++) for (var d = c + 1; d < H.length; d++) for (var f = d + 1; f < H.length; f++)
      if (self.generate([H[c], H[d], H[f]]).join(',') === key)
        return '⟨' + [H[c], H[d], H[f]].map(function (x) { return self.labels[x]; }).join(', ') + '⟩';
    return '{' + H.map(function (x) { return self.labels[x]; }).join(', ') + '}';
  };

  // Is f (array: index in G -> index in K) a homomorphism G -> K?
  function isHomomorphism(G, K, f) {
    for (var a = 0; a < G.n; a++) for (var b = 0; b < G.n; b++)
      if (f[G.op(a, b)] !== K.op(f[a], f[b])) return false;
    return true;
  }
  function kernel(G, K, f) { return G.elements().filter(function (a) { return f[a] === K.e; }); }
  function image(G, K, f) {
    var s = {};
    f.forEach(function (y) { s[y] = true; });
    return Object.keys(s).map(Number).sort(function (p, q) { return p - q; });
  }

  /* ================================================================== *
   * Constructors
   * ================================================================== */
  var SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };
  function sup(k) { return String(k).split('').map(function (ch) { return SUP[ch] || ch; }).join(''); }
  var SUB = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉' };
  function subs(k) { return String(k).split('').map(function (ch) { return SUB[ch] || ch; }).join(''); }

  function tableFrom(n, f) {
    var t = [];
    for (var a = 0; a < n; a++) { t.push([]); for (var b = 0; b < n; b++) t[a].push(f(a, b)); }
    return t;
  }

  function Z(n) {
    var labels = [];
    for (var k = 0; k < n; k++) labels.push(String(k));
    var G = new Group('ℤ' + subs(n), labels, tableFrom(n, function (a, b) { return (a + b) % n; }));
    G.additive = true;
    G.modulus = n;
    return G;
  }

  function U(n) {
    var units = [];
    for (var k = 1; k < n; k++) if (gcd(k, n) === 1) units.push(k);
    if (n === 1) units = [0];
    var pos = {};
    units.forEach(function (u, i) { pos[u] = i; });
    var G = new Group('U(' + n + ')', units.map(String), tableFrom(units.length, function (a, b) {
      return pos[(units[a] * units[b]) % n];
    }));
    G.values = units;
    G.modulus = n;
    return G;
  }

  /* Build a group from permutation generators on n points (closure). Elements
   * are ordered by breadth-first discovery from the identity, so a list of
   * generators [r, s] gives e, r, s, ... Labels default to cycle notation. */
  function fromPerms(gens, n, opts) {
    opts = opts || {};
    var id = permIdentity(n), list = [id], keyIdx = {};
    keyIdx[permKey(id)] = 0;
    for (var i = 0; i < list.length; i++) {
      for (var g = 0; g < gens.length; g++) {
        var p = compose(gens[g], list[i]);
        var k = permKey(p);
        if (keyIdx[k] === undefined) { keyIdx[k] = list.length; list.push(p); }
      }
      if (list.length > 2000) throw new Error('group too large');
    }
    return groupOnPerms(list, opts.name || 'G', opts);
  }

  function groupOnPerms(list, name, opts) {
    opts = opts || {};
    var keyIdx = {};
    list.forEach(function (p, i) { keyIdx[permKey(p)] = i; });
    var table = tableFrom(list.length, function (a, b) { return keyIdx[permKey(compose(list[a], list[b]))]; });
    var labels = opts.labels || list.map(function (p) { return permToCycles(p, { names: opts.names }); });
    return new Group(name, labels, table, { perms: list });
  }

  /* D_n as permutations of the vertices 1..n (n >= 3). Elements are listed
   * e, r, ..., r^{n-1}, s, rs, ..., r^{n-1}s. labels: 'rs' (default),
   * 'judson3' (n = 3 only: id, rho_1, rho_2, mu_1, mu_2, mu_3 with mu_i fixing
   * vertex i), or 'cycles'. opts.identity changes the name of e (default 'e'). */
  function D(n, opts) {
    opts = opts || {};
    var r = [], s = [];
    for (var i = 0; i < n; i++) { r.push((i + 1) % n); s.push(mod(-i, n)); }   // s: vertex i+1 -> vertex (1 - i) mod n
    var list = [], labels = [], ident = opts.identity || 'e';
    var rk = permIdentity(n);
    for (var k = 0; k < n; k++) {
      list.push(rk.slice());
      labels.push(k === 0 ? ident : (k === 1 ? 'r' : 'r' + sup(k)));
      rk = compose(r, rk);
    }
    rk = permIdentity(n);
    for (var m = 0; m < n; m++) {
      list.push(compose(rk, s));
      labels.push(m === 0 ? 's' : (m === 1 ? 'rs' : 'r' + sup(m) + 's'));
      rk = compose(r, rk);
    }
    if (opts.labels === 'judson3' && n === 3) {
      // Judson's Chapter 3 names, in his order: id, rho_1, rho_2, mu_1, mu_2, mu_3,
      // where mu_i is the flip that fixes vertex i.
      labels = list.map(function (p) {
        if (permEqual(p, permIdentity(3))) return 'id';
        if (permEqual(p, r)) return 'ρ₁';
        if (permEqual(p, compose(r, r))) return 'ρ₂';
        for (var v = 0; v < 3; v++) if (p[v] === v) return 'μ' + subs(v + 1);
        return '?';
      });
      var want = ['id', 'ρ₁', 'ρ₂', 'μ₁', 'μ₂', 'μ₃'];
      var order = want.map(function (w) { return labels.indexOf(w); });
      list = order.map(function (k) { return list[k]; });
      labels = want.slice();
    } else if (opts.labels === 'cycles') {
      labels = list.map(function (p) { return permToCycles(p, { names: opts.names }); });
    }
    var G = groupOnPerms(list, 'D' + subs(n), { labels: labels });
    G.polygon = n;
    G.r = 1;
    G.s = n;
    return G;
  }

  function permsOfN(n) {
    var out = [];
    (function rec(prefix, rest) {
      if (!rest.length) { out.push(prefix); return; }
      for (var i = 0; i < rest.length; i++) rec(prefix.concat([rest[i]]), rest.slice(0, i).concat(rest.slice(i + 1)));
    })([], permIdentity(n));
    return out;
  }

  // S_n with elements sorted by (order of cycle type, then lexicographic).
  function S(n, opts) {
    var list = permsOfN(n);
    list.sort(function (p, q) { return permOrder(p) - permOrder(q) || cycleKey(p).localeCompare(cycleKey(q)); });
    var G = groupOnPerms(list, 'S' + subs(n), opts);
    G.degree = n;
    return G;
  }
  function cycleKey(p) { return permToCycles(p); }

  function A(n, opts) {
    var list = permsOfN(n).filter(function (p) { return permParity(p) === 'even'; });
    list.sort(function (p, q) { return permOrder(p) - permOrder(q) || cycleKey(p).localeCompare(cycleKey(q)); });
    var G = groupOnPerms(list, 'A' + subs(n), opts);
    G.degree = n;
    return G;
  }

  // Quaternion group: 1, -1, i, -i, j, -j, k, -k.
  function Q8() {
    var labels = ['1', '−1', 'i', '−i', 'j', '−j', 'k', '−k'];
    // basis index 0..3 = 1, i, j, k ; sign
    var mult = [
      [[0, 1], [1, 1], [2, 1], [3, 1]],
      [[1, 1], [0, -1], [3, 1], [2, -1]],
      [[2, 1], [3, -1], [0, -1], [1, 1]],
      [[3, 1], [2, 1], [1, -1], [0, -1]]
    ];
    function dec(x) { return { b: x >> 1, s: x & 1 ? -1 : 1 }; }
    function enc(b, s) { return b * 2 + (s < 0 ? 1 : 0); }
    var G = new Group('Q₈', labels, tableFrom(8, function (x, y) {
      var X = dec(x), Y = dec(y), m = mult[X.b][Y.b];
      return enc(m[0], X.s * Y.s * m[1]);
    }));
    return G;
  }

  function V4() {
    var labels = ['e', 'a', 'b', 'c'];
    return new Group('V', labels, tableFrom(4, function (x, y) { return x ^ y; }));
  }

  function product(G, H, opts) {
    opts = opts || {};
    var labels = [];
    for (var a = 0; a < G.n; a++) for (var b = 0; b < H.n; b++) labels.push('(' + G.labels[a] + ', ' + H.labels[b] + ')');
    var P = new Group(opts.name || (G.name + ' × ' + H.name), labels, tableFrom(G.n * H.n, function (x, y) {
      var a1 = Math.floor(x / H.n), b1 = x % H.n, a2 = Math.floor(y / H.n), b2 = y % H.n;
      return G.op(a1, a2) * H.n + H.op(b1, b2);
    }));
    P.factors = [G, H];
    if (G.additive && H.additive) P.additive = true;
    return P;
  }

  function fromTable(labels, rows, name) {
    var idx = {};
    labels.forEach(function (l, i) { idx[l] = i; });
    var table = rows.map(function (row) { return row.map(function (l) { return idx[l]; }); });
    return new Group(name || 'G', labels, table);
  }

  /* Check the group axioms on an arbitrary operation table (labels -> labels).
   * Returns { closed, identity, inverses, associative, failures: [...] } with
   * a concrete witness for each failure, for the "is this a group?" widgets. */
  function checkAxioms(labels, rows) {
    var n = labels.length, idx = {};
    labels.forEach(function (l, i) { idx[l] = i; });
    var T = rows.map(function (row) { return row.map(function (l) { return idx[l] === undefined ? -1 : idx[l]; }); });
    var res = { closed: true, identity: null, inverses: true, associative: true, failures: [] };
    for (var a = 0; a < n; a++) for (var b = 0; b < n; b++) if (T[a][b] < 0) {
      res.closed = false; res.failures.push({ axiom: 'closure', a: labels[a], b: labels[b] });
    }
    if (!res.closed) return res;
    for (var e = 0; e < n && res.identity === null; e++) {
      var ok = true;
      for (var x = 0; x < n; x++) if (T[e][x] !== x || T[x][e] !== x) { ok = false; break; }
      if (ok) res.identity = labels[e];
    }
    if (res.identity === null) { res.failures.push({ axiom: 'identity' }); res.inverses = false; }
    else {
      var ei = idx[res.identity];
      for (var y = 0; y < n; y++) {
        var found = false;
        for (var z = 0; z < n; z++) if (T[y][z] === ei && T[z][y] === ei) { found = true; break; }
        if (!found) { res.inverses = false; res.failures.push({ axiom: 'inverse', a: labels[y] }); }
      }
    }
    outer:
    for (var p = 0; p < n; p++) for (var q = 0; q < n; q++) for (var r = 0; r < n; r++) {
      if (T[T[p][q]][r] !== T[p][T[q][r]]) {
        res.associative = false;
        res.failures.push({ axiom: 'associativity', a: labels[p], b: labels[q], c: labels[r],
          left: labels[T[T[p][q]][r]], right: labels[T[p][T[q][r]]] });
        break outer;
      }
    }
    return res;
  }

  /* ================================================================== *
   * Z_n as a ring
   * ================================================================== */
  function ringZn(n) {
    var els = [];
    for (var k = 0; k < n; k++) els.push(k);
    var units = els.filter(function (a) { return n === 1 || gcd(a, n) === 1; });
    var zeroDivisors = els.filter(function (a) {
      if (a === 0) return false;
      for (var b = 1; b < n; b++) if ((a * b) % n === 0) return true;
      return false;
    });
    var ideals = divisors(n).map(function (d) {
      var gen = d % n;
      var set = [];
      for (var k2 = 0; k2 < n; k2++) if (k2 % d === 0) set.push(k2);
      // In Z_n the ideal <d> (d | n) is proper unless d = 1, and Z_n/<d> = Z_d,
      // so <d> is prime iff maximal iff d is prime.
      return { generator: gen, elements: set, index: d, maximal: isPrime(d), prime: isPrime(d) };
    });
    return { n: n, elements: els, units: units, zeroDivisors: zeroDivisors, ideals: ideals,
      add: function (a, b) { return (a + b) % n; }, mul: function (a, b) { return (a * b) % n; },
      isField: isPrime(n), isDomain: isPrime(n) };
  }
  function isPrime(p) { if (p < 2) return false; for (var k = 2; k * k <= p; k++) if (p % k === 0) return false; return true; }

  /* ================================================================== *
   * DOM helpers (only touched by widgets)
   * ================================================================== */
  var PALETTE = ['#009CDE', '#F36E24', '#008552', '#8B5CF6', '#F9A01B', '#D6336C', '#2B8A8A', '#6E6E6E',
    '#5C7CFA', '#B5651D', '#37B24D', '#AE3EC9'];
  var TINTS = ['#dff2fb', '#fde6d8', '#d9efe5', '#ece6fd', '#fef0d4', '#f9dbe5', '#d8eded', '#ececec',
    '#e3e8fe', '#f1e2d4', '#dcf3e0', '#f3def7'];

  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (attrs[k] === null || attrs[k] === undefined) return;
      if (k === 'text') el.textContent = attrs[k];
      else if (k === 'html') el.innerHTML = attrs[k];
      else if (k === 'class') el.className = attrs[k];
      else if (k.slice(0, 2) === 'on') el.addEventListener(k.slice(2), attrs[k]);
      else el.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return el;
  }
  var SVGNS = 'http://www.w3.org/2000/svg';
  function s(tag, attrs, kids) {
    var el = document.createElementNS(SVGNS, tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (attrs[k] === null || attrs[k] === undefined) return;
      if (k === 'text') el.textContent = attrs[k];
      else if (k.slice(0, 2) === 'on' && typeof attrs[k] === 'function') el.addEventListener(k.slice(2), attrs[k]);
      else el.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) el.appendChild(c); });
    return el;
  }
  function resolve(el) { return typeof el === 'string' ? document.getElementById(el) : el; }
  function typeset(el) { if (root.M411 && root.M411.typeset) root.M411.typeset(el); else if (root.MathJax && root.MathJax.typesetPromise) root.MathJax.typesetPromise([el]); }
  function setList(G, set) { return '{' + set.map(function (x) { return G.labels[x]; }).join(', ') + '}'; }

  function avoidHit(list, value) {
    if (!list) return false;
    var key = JSON.stringify(value);
    return list.some(function (v) { return JSON.stringify(v) === key; });
  }
  var AVOID_NOTE = 'That one is on your homework, so this page won’t do it for you. Work it by hand, then bring it to class — or try a different input here.';

  /* "Predict first": with opts.predict set (true, or a string to use as the prompt), the
   * readout `out` is hidden and a prompt sits in its place until the student's first
   * move inside `el`: a click on a button, a table header or a lattice node, a slider or
   * typed input, a menu choice, or Enter/Space on a header or node. The widget keeps
   * computing as usual underneath, so the first move shows the readout for that move.
   * Returns { revealed, reveal() }; reveal() also works as a "show me" button. */
  var PREDICT_NOTE = 'Predict first. Make your guess, then make your first move: the readout appears after that.';
  function predictGate(el, out, opts) {
    var gate = { revealed: true, reveal: function () {} };
    // A widget rebuilt in the same container must not leave the old gate's listeners behind.
    if (el._a308Off) { el._a308Off(); el._a308Off = null; }
    if (!opts || !opts.predict || !out) return gate;
    var note = h('p', { class: 'a308-note a308-predict', text: typeof opts.predict === 'string' ? opts.predict : PREDICT_NOTE });
    out.hidden = true;
    out.parentNode.insertBefore(note, out);
    gate.revealed = false;
    gate.reveal = function () {
      if (gate.revealed) return;
      gate.revealed = true;
      out.hidden = false;
      if (note.parentNode) note.parentNode.removeChild(note);
    };
    var onClick = function (ev) { if (ev.target.closest && ev.target.closest('button, th[data-el], .node')) gate.reveal(); };
    var onKey = function (ev) {
      if ((ev.key === 'Enter' || ev.key === ' ') && ev.target.closest && ev.target.closest('th[data-el], .node')) gate.reveal();
    };
    el.addEventListener('input', gate.reveal);
    el.addEventListener('change', gate.reveal);
    el.addEventListener('click', onClick);
    el.addEventListener('keydown', onKey);
    el._a308Off = function () {
      el.removeEventListener('input', gate.reveal);
      el.removeEventListener('change', gate.reveal);
      el.removeEventListener('click', onClick);
      el.removeEventListener('keydown', onKey);
    };
    return gate;
  }

  /* ================================================================== *
   * Widget: Cayley table
   *
   *   A308.cayley(el, {
   *     group: G,
   *     highlight: [indices]      shade the rows/cols/cells of a subset (e.g. a subgroup)
   *     color: 'cosets-left' | 'cosets-right' | 'order' | null
   *     H: [indices]              subgroup for coset colouring / reordering
   *     reorder: true             list rows/columns coset by coset
   *     clickable: true           clicking a header shows order, powers, inverse
   *     showPowers: false         ...without listing the powers (when a later exercise asks for subgroups)
   *     blanks: [[a, b], ...]     "fill it in" mode: those cells become dropdowns
   *     caption: 'text'
   *     predict: true | 'text'    hide the readout until the first header is picked (not in blanks mode)
   *     onPick: function (a) {}
   *   })
   * ================================================================== */
  function cayley(el, opts) {
    el = resolve(el);
    var state = { G: opts.group, H: opts.H || null, color: opts.color || null, highlight: opts.highlight || null,
      reorder: !!opts.reorder, picked: null, blanks: opts.blanks || null };
    var wrap = h('div', { class: 'a308-cayley-wrap' });
    var out = h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    el.innerHTML = '';
    el.appendChild(wrap);
    if (opts.clickable !== false || state.blanks) el.appendChild(out);
    var gate = predictGate(el, (opts.clickable !== false && !state.blanks) ? out : null, opts);

    function order() {
      var G = state.G;
      if (state.reorder && state.H) {
        var side = state.color === 'cosets-right' ? 'right' : 'left';
        var list = [];
        G.cosets(state.H, side).forEach(function (c) {
          // keep the representative first, then the rest in index order
          list.push(c.rep);
          c.elements.forEach(function (x) { if (x !== c.rep) list.push(x); });
        });
        return list;
      }
      return G.elements();
    }

    function cellColor(x) {
      var G = state.G;
      if (state.color === 'cosets-left' || state.color === 'cosets-right') {
        if (!state.H) return null;
        var cs = G.cosets(state.H, state.color === 'cosets-right' ? 'right' : 'left');
        for (var k = 0; k < cs.length; k++) if (cs[k].elements.indexOf(x) >= 0) return k;
      }
      if (state.color === 'order') {
        var ords = [];
        G.elements().forEach(function (a) { var o = G.order(a); if (ords.indexOf(o) < 0) ords.push(o); });
        ords.sort(function (a, b) { return a - b; });
        return ords.indexOf(G.order(x));
      }
      return null;
    }

    function render() {
      var G = state.G, ord = order(), hl = {};
      (state.highlight || []).forEach(function (x) { hl[x] = true; });
      var blank = {};
      (state.blanks || []).forEach(function (p) { blank[p[0] + ',' + p[1]] = true; });
      var table = h('table', { class: 'a308-cayley' + (G.n > 12 ? ' small' : '') + (G.n > 24 ? ' tiny' : '') });
      if (opts.caption) table.appendChild(h('caption', { text: opts.caption }));
      var head = h('tr', null, [h('th', { class: 'corner', scope: 'col', html: G.additive ? '+' : '&middot;' })]);
      ord.forEach(function (b) {
        head.appendChild(h('th', { scope: 'col', class: (hl[b] ? 'hl ' : '') + (state.picked === b ? 'picked' : ''),
          tabindex: opts.clickable === false ? null : '0', text: G.labels[b], 'data-el': b }));
      });
      table.appendChild(h('thead', null, [head]));
      var body = h('tbody');
      ord.forEach(function (a) {
        var tr = h('tr', null, [h('th', { scope: 'row', class: (hl[a] ? 'hl ' : '') + (state.picked === a ? 'picked' : ''),
          tabindex: opts.clickable === false ? null : '0', text: G.labels[a], 'data-el': a })]);
        ord.forEach(function (b) {
          var x = G.op(a, b), td;
          if (blank[a + ',' + b]) {
            var sel = h('select', { 'aria-label': G.labels[a] + ' times ' + G.labels[b], 'data-a': a, 'data-b': b });
            sel.appendChild(h('option', { value: '', text: '?' }));
            G.elements().forEach(function (y) { sel.appendChild(h('option', { value: y, text: G.labels[y] })); });
            td = h('td', { class: 'blank' }, [sel]);
          } else {
            td = h('td', { text: G.labels[x] });
            var c = cellColor(x);
            if (c !== null && c >= 0) { td.style.background = TINTS[c % TINTS.length]; td.style.color = '#222'; }
            if (hl[a] && hl[b]) td.classList.add('hl');
            if (state.picked !== null && x === G.e && (a === state.picked || b === state.picked)) td.classList.add('ident');
          }
          tr.appendChild(td);
        });
        body.appendChild(tr);
      });
      table.appendChild(body);
      wrap.innerHTML = '';
      wrap.appendChild(table);
      if (state.blanks) {
        var chk = h('button', { class: 'btn411', type: 'button', text: 'Check my table' });
        chk.addEventListener('click', checkBlanks);
        wrap.appendChild(h('div', { class: 'a308-row' }, [chk]));
      }
      Array.prototype.forEach.call(table.querySelectorAll('th[data-el]'), function (th) {
        if (opts.clickable === false) return;
        function go() { pick(Number(th.getAttribute('data-el'))); }
        th.addEventListener('click', go);
        th.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); go(); } });
      });
    }

    function checkBlanks() {
      var G = state.G, sels = wrap.querySelectorAll('select'), right = 0, empty = 0;
      Array.prototype.forEach.call(sels, function (sel) {
        var a = Number(sel.getAttribute('data-a')), b = Number(sel.getAttribute('data-b'));
        sel.parentNode.classList.remove('good', 'bad');
        if (sel.value === '') { empty++; return; }
        var ok = Number(sel.value) === G.op(a, b);
        if (ok) right++;
        sel.parentNode.classList.add(ok ? 'good' : 'bad');
      });
      var total = sels.length;
      if (right === total) out.innerHTML = '<strong>All ' + total + ' cells are right.</strong> Notice that every row and every column lists each element exactly once.';
      else out.innerHTML = right + ' of ' + total + ' right' + (empty ? ', ' + empty + ' still blank' : '') +
        '. Hint: in a group each element appears <em>exactly once</em> in every row and every column.';
    }

    function pick(a) {
      var G = state.G;
      state.picked = a;
      render();
      var pw = G.powers(a);
      var html = '<strong>' + G.labels[a] + '</strong> has order <strong>' + pw.length + '</strong>. ' +
        (opts.showPowers === false ? '' : 'Its powers: ' + pw.map(function (x) { return G.labels[x]; }).join(', ') + '. ') +
        'Inverse: <strong>' + G.labels[G.inv(a)] + '</strong> (the identity sits where its row meets the inverse’s column).';
      out.innerHTML = html;
      if (opts.onPick) opts.onPick(a);
    }

    render();
    if (opts.clickable !== false && !state.blanks)
      out.innerHTML = 'Click (or tab to) any element in the header row or column to see its order' + (opts.showPowers === false ? '' : ', its powers') + ' and its inverse.';

    return {
      el: el,
      set: function (o) {
        Object.keys(o).forEach(function (k) { state[k] = o[k]; });
        if (o.group) state.picked = null;
        render();
      },
      pick: pick,
      reveal: gate.reveal,
      state: state
    };
  }

  /* ================================================================== *
   * Widget: regular polygon symmetries (D_n)
   *
   *   A308.polygon(el, { n: 4, names: ['A','B','C','D'], labels: 'rs'|'judson3',
   *                      mode: 'explore' | 'compose', predict: true | 'text', onChange: fn })
   *
   * explore: buttons apply r (rotate) and s (flip) to the CURRENT position, so
   *          pressing r then s performs "r, then s" = the element s r.
   * compose: pick X and Y; the widget animates "do Y, then X" and names XY.
   * ================================================================== */
  function polygon(el, opts) {
    el = resolve(el);
    var n = opts.n || 4;
    var G = D(n, { labels: opts.labels, identity: opts.identity });
    var names = opts.names || (function () { var a = []; for (var i = 0; i < n; i++) a.push(String(i + 1)); return a; })();
    var size = 260, R = 92, cx = size / 2, cy = size / 2 + 4;
    var cur = G.e, history = [], timers = [];
    el.innerHTML = '';
    var svg = s('svg', { viewBox: '0 0 ' + size + ' ' + size, class: 'a308-poly', role: 'img',
      'aria-label': 'A regular ' + n + '-gon with labelled vertices; vertex positions are numbered 1 to ' + n + ' clockwise from the top' });
    var ghost = s('g', { class: 'ghost' });
    var body = s('g', { class: 'body' });
    var labels = s('g', { class: 'upright' });
    svg.appendChild(ghost);
    svg.appendChild(s('line', { class: 'axis', x1: cx, y1: cy - R - 22, x2: cx, y2: cy + R + 22 }));
    svg.appendChild(body);
    svg.appendChild(labels);

    function vpos(i, radius) {
      var t = -Math.PI / 2 + 2 * Math.PI * i / n;   // position 1 at the top, then clockwise
      return [cx + (radius || R) * Math.cos(t), cy + (radius || R) * Math.sin(t)];
    }
    function outline(g, cls) {
      var pts = [];
      for (var i = 0; i < n; i++) pts.push(vpos(i).join(','));
      g.appendChild(s('polygon', { points: pts.join(' '), class: cls }));
    }
    outline(ghost, 'outline');
    for (var i = 0; i < n; i++) {
      var p = vpos(i, R + 16);
      ghost.appendChild(s('text', { x: p[0], y: p[1] + 4, class: 'pos', text: String(i + 1) }));
    }
    outline(body, 'face');
    // An off-centre marker so a flip is visible even when you ignore the labels.
    var m1 = vpos(0, R * 0.55), m2 = vpos(1, R * 0.38);
    body.appendChild(s('circle', { cx: m1[0], cy: m1[1], r: 7, class: 'mark' }));
    body.appendChild(s('circle', { cx: m2[0], cy: m2[1], r: 4, class: 'mark2' }));
    body.style.transformOrigin = cx + 'px ' + cy + 'px';
    body.style.transformBox = 'view-box';

    var ctl = h('div', { class: 'a308-row' });
    var out = h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    el.appendChild(h('div', { class: 'a308-poly-wrap' }, [svg]));
    el.appendChild(ctl);
    el.appendChild(out);
    var gate = predictGate(el, out, opts);

    // Element g = r^k or r^k s. As a motion of the plane: first the flip (if any), then
    // rotate k notches clockwise. CSS applies the rightmost function first. Every
    // transform uses the same four-function shape so transitions interpolate cleanly.
    function canon(g) { return 'rotate(0deg) scaleX(1) rotate(' + (360 * (g % n) / n) + 'deg) scaleX(' + (g >= n ? -1 : 1) + ')'; }
    function prefixed(pre, g) { return pre + ' rotate(' + (360 * (g % n) / n) + 'deg) scaleX(' + (g >= n ? -1 : 1) + ')'; }
    function motionPrefix(x) { return 'rotate(' + (360 * (x % n) / n) + 'deg) scaleX(' + (x >= n ? -1 : 1) + ')'; }

    function drawLabels(g) {
      while (labels.firstChild) labels.removeChild(labels.firstChild);
      for (var idx = 0; idx < n; idx++) {
        var q = vpos(G.perms[g][idx], R - 18);
        labels.appendChild(s('text', { x: q[0], y: q[1] + 5, class: 'vlab', text: names[idx] }));
      }
    }
    function clearTimers() { timers.forEach(clearTimeout); timers = []; }
    function snap(g) {
      body.style.transition = 'none';
      body.style.transform = canon(g);
      drawLabels(g);
      labels.style.opacity = 1;
    }
    // Animate "do motion x" starting from position `from`.
    function animate(from, x, delay) {
      timers.push(setTimeout(function () {
        body.style.transition = 'none';
        body.style.transform = canon(from);
        void body.getBoundingClientRect();
        labels.style.opacity = 0;
        body.style.transition = 'transform 0.55s ease';
        body.style.transform = prefixed(motionPrefix(x), from);
      }, delay));
      timers.push(setTimeout(function () { snap(G.op(x, from)); }, delay + 600));
    }

    function describe(g) {
      var cyc = permToCycles(G.perms[g], { names: names, identity: names[0] === 'A' ? 'identity' : '(1)' });
      return '<strong>' + G.labels[g] + '</strong> &nbsp;&middot;&nbsp; as a permutation of the vertex labels: <span class="mono">' + cyc + '</span>';
    }

    function apply(gen) {
      // doing `gen` after the current position gives gen * cur
      var g = gen === 'r' ? G.r : G.s, from = cur;
      cur = G.op(g, cur);
      history.push(G.labels[g]);
      clearTimers();
      animate(from, g, 0);
      out.innerHTML = 'Moves so far (first to last): <span class="mono">' + history.join(', then ') + '</span><br>' +
        'Current position: ' + describe(cur) +
        (history.length > 1 ? '<br><span class="muted">Written as a product, later moves go on the <em>left</em>: ' +
          history.slice().reverse().join(' ') + ' = ' + G.labels[cur] + '.</span>' : '');
      if (opts.onChange) opts.onChange(cur, history.slice());
    }

    if (opts.mode === 'compose') {
      var selX = h('select', { 'aria-label': 'second motion X' }), selY = h('select', { 'aria-label': 'first motion Y' });
      G.elements().forEach(function (g) {
        selX.appendChild(h('option', { value: g, text: G.labels[g] }));
        selY.appendChild(h('option', { value: g, text: G.labels[g] }));
      });
      selX.value = opts.X === undefined ? 1 : opts.X;
      selY.value = opts.Y === undefined ? n : opts.Y;
      var go = h('button', { class: 'btn411', type: 'button', text: 'Do Y, then X' });
      ctl.appendChild(h('label', { class: 'a308-inline' }, ['Y = ', selY]));
      ctl.appendChild(h('label', { class: 'a308-inline' }, ['X = ', selX]));
      ctl.appendChild(go);
      go.addEventListener('click', function () {
        var X = Number(selX.value), Y = Number(selY.value);
        clearTimers();
        snap(G.e);
        animate(G.e, Y, 80);
        animate(Y, X, 800);
        cur = G.op(X, Y);
        out.innerHTML = 'First ' + G.labels[Y] + ', then ' + G.labels[X] + ': the result is ' + describe(cur) +
          '<br>So <span class="mono">' + G.labels[X] + ' · ' + G.labels[Y] + ' = ' + G.labels[cur] + '</span>' +
          (G.op(Y, X) !== cur ? ' &mdash; but <span class="mono">' + G.labels[Y] + ' · ' + G.labels[X] + ' = ' + G.labels[G.op(Y, X)] + '</span>. Order matters.'
                              : ' (and in the other order you get the same thing).');
        if (opts.onChange) opts.onChange(cur, [Y, X]);
      });
      out.innerHTML = 'Pick two symmetries. The polygon will do <strong>Y first</strong>, then <strong>X</strong>; the product is written X · Y.';
    } else {
      var bR = h('button', { class: 'btn411', type: 'button', text: 'Rotate (' + G.labels[G.r] + ')' });
      var bS = h('button', { class: 'btn411', type: 'button', text: 'Flip (' + G.labels[G.s] + ')' });
      var bReset = h('button', { class: 'btn411 ghost', type: 'button', text: 'Reset' });
      bR.addEventListener('click', function () { apply('r'); });
      bS.addEventListener('click', function () { apply('s'); });
      bReset.addEventListener('click', function () {
        clearTimers(); cur = G.e; history = []; snap(G.e);
        out.innerHTML = 'Back to the start: ' + describe(G.e);
        if (opts.onChange) opts.onChange(cur, []);
      });
      ctl.appendChild(bR); ctl.appendChild(bS); ctl.appendChild(bReset);
      out.innerHTML = '<strong>' + G.labels[G.r] + '</strong> turns the polygon one notch clockwise (the vertex at position 1 moves to position 2); ' +
        '<strong>' + G.labels[G.s] + '</strong> flips it across the dashed vertical line. The small grey numbers are fixed positions; the bold labels ride along.';
    }
    snap(G.e);
    return { group: G, current: function () { return cur; }, apply: apply, reveal: gate.reveal };
  }

  /* ================================================================== *
   * Widget: permutation arrows and products
   *
   *   A308.perm(el, { n: 5, sigma: '(1 2 3)', tau: '(2 4)', avoid: [['(1 3)', '(2 4)'], ...],
   *                   predict: true | 'text' })
   *
   * Two-line arrow diagram of tau then sigma, the product sigma*tau (right to
   * left), cycle form, parity and order, and "follow one number through".
   * ================================================================== */
  function perm(el, opts) {
    el = resolve(el);
    var n = opts.n || 5;
    el.innerHTML = '';
    var inS = h('input', { type: 'text', value: opts.sigma || '(1 2 3)', 'aria-label': 'sigma in cycle notation', class: 'a308-text' });
    var inT = h('input', { type: 'text', value: opts.tau || '(1 4)', 'aria-label': 'tau in cycle notation', class: 'a308-text' });
    var row = h('div', { class: 'ctl-row' }, [
      h('div', { class: 'ctl' }, [h('label', { html: 'σ (cycle notation)' }), inS]),
      h('div', { class: 'ctl' }, [h('label', { html: 'τ (cycle notation)' }), inT])
    ]);
    var follow = h('select', { 'aria-label': 'number to follow' });
    for (var i = 1; i <= n; i++) follow.appendChild(h('option', { value: i - 1, text: String(i) }));
    row.appendChild(h('div', { class: 'ctl' }, [h('label', { text: 'Follow the number' }), follow]));
    var svgWrap = h('div', { class: 'a308-perm-svg' });
    var out = h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    el.appendChild(row);
    el.appendChild(h('p', { class: 'a308-note', html: 'Products go <strong>right to left</strong>, as in Judson: στ means do τ first, then σ. Type cycles like <span class="mono">(1 3 5)(2 4)</span>; <span class="mono">(1)</span> is the identity.' }));
    el.appendChild(svgWrap);
    el.appendChild(out);
    var gate = predictGate(el, out, opts);

    // Homework products to refuse. Each avoid entry is [sigma, tau] in cycle notation (or a
    // single string for one permutation). Inputs are compared as permutations, so spacing
    // doesn't matter, and typing the whole product into one box is caught too, since the
    // readout would show that box in cycle form.
    var avoidPerms = (opts.avoid || []).map(function (e) {
      var pair = Array.isArray(e) ? e : [e, '(1)'];
      var a = parseCycles(pair[0], n), b = parseCycles(pair[1], n);
      return a && b ? { a: a, b: b, ab: compose(a, b) } : null;
    }).filter(Boolean);
    function permAvoided(sg, tu) {
      var id = permIdentity(n);
      if (permEqual(sg, id) && permEqual(tu, id)) return false;   // the identity reveals nothing
      return avoidPerms.some(function (v) {
        if (permEqual(sg, v.a) && permEqual(tu, v.b)) return true;
        if (permEqual(v.ab, id)) return false;
        return permEqual(sg, v.ab) || permEqual(tu, v.ab);
      });
    }

    function diagram(rows, labelsLeft, fpath) {
      var W = 60 + n * 52, Hh = 30 + rows.length * 62;
      var svg = s('svg', { viewBox: '0 0 ' + W + ' ' + Hh, class: 'a308-perm', role: 'img',
        'aria-label': 'Arrow diagram of tau, then sigma, on 1 to ' + n });
      var y0 = 18;
      for (var lv = 0; lv <= rows.length; lv++) {
        var y = y0 + lv * 62;
        if (lv < labelsLeft.length) svg.appendChild(s('text', { x: 6, y: y + 36, class: 'lvl', text: labelsLeft[lv] }));
        for (var k = 0; k < n; k++) {
          var x = 60 + k * 52;
          var onPath = fpath && fpath[lv] === k;
          svg.appendChild(s('circle', { cx: x, cy: y, r: 11, class: 'dot' + (onPath ? ' on' : '') }));
          svg.appendChild(s('text', { x: x, y: y + 4, class: 'num' + (onPath ? ' on' : ''), text: String(k + 1) }));
        }
      }
      rows.forEach(function (p, lv2) {
        var ya = y0 + lv2 * 62 + 12, yb = y0 + (lv2 + 1) * 62 - 12;
        for (var k2 = 0; k2 < n; k2++) {
          var xa = 60 + k2 * 52, xb = 60 + p[k2] * 52;
          var onP = fpath && fpath[lv2] === k2;
          svg.appendChild(s('line', { x1: xa, y1: ya, x2: xb, y2: yb, class: 'arr' + (p[k2] === k2 ? ' fixed' : '') + (onP ? ' on' : ''),
            'marker-end': 'url(#a308ah' + (onP ? 'on' : '') + ')' }));
        }
      });
      var defs = s('defs');
      ['', 'on'].forEach(function (suf) {
        var mk = s('marker', { id: 'a308ah' + suf, viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 6, markerHeight: 6, orient: 'auto-start-reverse' });
        mk.appendChild(s('path', { d: 'M 0 0 L 10 5 L 0 10 z', class: 'ah' + suf }));
        defs.appendChild(mk);
      });
      svg.insertBefore(defs, svg.firstChild);
      return svg;
    }

    function update() {
      var sg = parseCycles(inS.value, n), tu = parseCycles(inT.value, n);
      svgWrap.innerHTML = '';
      if (!sg || !tu) {
        out.innerHTML = 'I can’t read ' + (!sg ? 'σ' : 'τ') + '. Use numbers 1 to ' + n + ' in parentheses, e.g. <span class="mono">(1 3 5)(2 4)</span>, with no number repeated inside a cycle.';
        return;
      }
      if (permAvoided(sg, tu)) {
        out.innerHTML = AVOID_NOTE;
        return;
      }
      var st = compose(sg, tu), f = Number(follow.value);
      svgWrap.appendChild(diagram([tu, sg], ['τ', 'σ'], [f, tu[f], sg[tu[f]]]));
      out.innerHTML =
        '<strong>στ = <span class="mono">' + permToCycles(st) + '</span></strong>' +
        ' &nbsp;(order ' + permOrder(st) + ', ' + permParity(st) + ')<br>' +
        'Follow ' + (f + 1) + ': τ sends ' + (f + 1) + ' → ' + (tu[f] + 1) + ', then σ sends ' + (tu[f] + 1) + ' → ' + (sg[tu[f]] + 1) +
        ', so στ sends ' + (f + 1) + ' → ' + (st[f] + 1) + '.<br>' +
        '<span class="muted">σ = ' + permToCycles(sg) + ' (' + permParity(sg) + ', order ' + permOrder(sg) + ') &nbsp;&middot;&nbsp; ' +
        'τ = ' + permToCycles(tu) + ' (' + permParity(tu) + ', order ' + permOrder(tu) + ') &nbsp;&middot;&nbsp; ' +
        'τσ = ' + permToCycles(compose(tu, sg)) + '</span>';
    }
    [inS, inT].forEach(function (inp) { inp.addEventListener('input', update); });
    follow.addEventListener('change', update);
    update();
    return { update: update, reveal: gate.reveal };
  }

  /* ================================================================== *
   * Widget: Z_n on a clock / n-th roots of unity
   *
   *   A308.clock(el, { n: 12, k: 8, roots: false, maxN: 30, avoid: [[n, k], ...], predict: true | 'text' })
   * ================================================================== */
  function clock(el, opts) {
    el = resolve(el);
    el.innerHTML = '';
    var state = { n: opts.n || 12, k: opts.k === undefined ? 5 : opts.k, roots: !!opts.roots };
    var maxN = opts.maxN || 30;
    var inN = h('input', { type: 'range', min: 2, max: maxN, step: 1, value: state.n, 'aria-label': 'n' });
    var inK = h('input', { type: 'range', min: 0, max: state.n - 1, step: 1, value: state.k, 'aria-label': 'k' });
    var labN = h('label', { text: '' }), labK = h('label', { text: '' });
    var row = h('div', { class: 'ctl-row' }, [h('div', { class: 'ctl' }, [labN, inN]), h('div', { class: 'ctl' }, [labK, inK])]);
    var size = 300, R = 112, cx = size / 2, cy = size / 2;
    var svg = s('svg', { viewBox: '0 0 ' + size + ' ' + size, class: 'a308-clock', role: 'img' });
    var out = h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    if (opts.fixedN) row.firstChild.style.display = 'none';
    el.appendChild(row);
    el.appendChild(h('div', { class: 'a308-clock-wrap' }, [svg]));
    el.appendChild(out);
    var gate = predictGate(el, out, opts);

    function pos(j, n, rad) {
      var t = state.roots ? (2 * Math.PI * j / n) : (-Math.PI / 2 + 2 * Math.PI * j / n);
      return state.roots ? [cx + (rad || R) * Math.cos(t), cy - (rad || R) * Math.sin(t)] : [cx + (rad || R) * Math.cos(t), cy + (rad || R) * Math.sin(t)];
    }
    function update() {
      var n = state.n, k = Math.min(state.k, n - 1);
      inK.max = n - 1;
      if (Number(inK.value) !== k) inK.value = k;
      labN.textContent = 'n = ' + n;
      labK.textContent = state.roots ? 'generator ω^' + k : 'k = ' + k;
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      if (avoidHit(opts.avoid, [n, k])) {
        svg.appendChild(s('circle', { cx: cx, cy: cy, r: R, class: 'rim' }));
        out.innerHTML = AVOID_NOTE;
        return;
      }
      svg.setAttribute('aria-label', state.roots
        ? 'The ' + n + 'th roots of unity on the unit circle, with the powers of omega to the ' + k + ' joined in order'
        : 'The elements of Z_' + n + ' around a circle, with the multiples of ' + k + ' joined in order');
      if (state.roots) {
        svg.appendChild(s('line', { x1: 8, y1: cy, x2: size - 8, y2: cy, class: 'axis' }));
        svg.appendChild(s('line', { x1: cx, y1: 8, x2: cx, y2: size - 8, class: 'axis' }));
      }
      svg.appendChild(s('circle', { cx: cx, cy: cy, r: R, class: 'rim' }));
      var hit = {}, path = [], x = 0;
      do { path.push(x); hit[x] = true; x = (x + k) % n; } while (x !== 0 && path.length <= n);
      var pts = path.map(function (j) { return pos(j, n).join(','); });
      if (path.length > 1) svg.appendChild(s('polygon', { points: pts.join(' '), class: 'star' }));
      for (var j = 0; j < n; j++) {
        var p = pos(j, n), lp = pos(j, n, R + 18);
        svg.appendChild(s('circle', { cx: p[0], cy: p[1], r: n > 20 ? 5 : 7, class: 'pt' + (hit[j] ? ' on' : '') + (j === k ? ' gen' : '') }));
        if (n <= 24) svg.appendChild(s('text', { x: lp[0], y: lp[1] + 4, class: 'lab', text: state.roots ? (j === 0 ? '1' : 'ω' + (j === 1 ? '' : sup(j))) : String(j) }));
      }
      var ord = n / gcd(n, k || n);
      if (k === 0) ord = 1;
      var gens = [];
      for (var g = 1; g < n; g++) if (gcd(g, n) === 1) gens.push(g);
      if (n === 1) gens = [0];
      out.innerHTML = state.roots
        ? 'ω = cos(2π/' + n + ') + i sin(2π/' + n + '). The powers of ω' + sup(k) + ' land on <strong>' + ord + '</strong> of the ' + n + ' roots, so ω' + sup(k) + ' has order ' + ord + '. ' +
          (ord === n ? 'It is a <strong>primitive</strong> ' + n + 'th root of unity.' : 'It is not primitive.')
        : '⟨' + k + '⟩ = {' + path.slice().sort(function (a, b) { return a - b; }).join(', ') + '} has <strong>' + path.length + '</strong> elements, so ' + k + ' has order ' + path.length + ' in ℤ' + subs(n) + '. ' +
          (path.length === n ? '<strong>' + k + ' generates ℤ' + subs(n) + '.</strong>' : 'It does not generate ℤ' + subs(n) + '.') +
          (opts.showFormula ? ' <span class="muted">gcd(' + n + ', ' + k + ') = ' + gcd(n, k) + '.</span>' : '');
    }
    inN.addEventListener('input', function () { state.n = Number(inN.value); update(); });
    inK.addEventListener('input', function () { state.k = Number(inK.value); update(); });
    update();
    return { set: function (o) { Object.keys(o).forEach(function (kk) { state[kk] = o[kk]; }); inN.value = state.n; inK.value = state.k; update(); }, reveal: gate.reveal };
  }

  /* ================================================================== *
   * Widget: subgroup lattice (Hasse diagram)
   *
   *   A308.lattice(el, { group: G, onPick: function (H) {}, markNormal: true,
   *                      hideCount: true,        never say how many subgroups there are
   *                      avoid: ['D₄', ...],     names of groups (G.name) whose lattice is homework
   *                      predict: true | 'text' })
   *
   * hideCount leaves the number out of the readout and the accessible name; the drawing
   * itself still shows every subgroup, so a page that asks "how many?" before the student
   * has counted should not show the lattice until they have answered (or should say so).
   * ================================================================== */
  function lattice(el, opts) {
    el = resolve(el);
    el.innerHTML = '';
    var G = opts.group;
    if (avoidHit(opts.avoid, G.name)) {
      el.appendChild(h('div', { class: 'readout a308-readout', 'aria-live': 'polite', text: AVOID_NOTE }));
      return { subgroups: [], avoided: true, reveal: function () {} };
    }
    var subsList = G.subgroups();
    // Rows by the number of prime factors of |H| (with multiplicity), so a subgroup sits one row
    // above each maximal subgroup of prime index; rows by order alone stack Z_30's subgroups in a
    // single column that looks like a chain. A row too crowded to read is split by order.
    function omega(m) { var c = 0; for (var p = 2; m > 1; p++) while (m % p === 0) { m /= p; c++; } return c; }
    function nodeW(H) { return Math.max(34, 7.2 * G.describe(H).length + 14); }
    function rowW(row) { return row.reduce(function (a, H) { return a + nodeW(H) + 12; }, 0); }
    var levels = [];
    subsList.forEach(function (H) { var w = omega(H.length); if (levels.indexOf(w) < 0) levels.push(w); });
    levels.sort(function (a, b) { return a - b; });
    var rows = [];
    levels.forEach(function (w) {
      var level = subsList.filter(function (H) { return omega(H.length) === w; })
        .sort(function (A, B) { return A.length - B.length; });
      var ords = [];
      level.forEach(function (H) { if (ords.indexOf(H.length) < 0) ords.push(H.length); });
      if (rowW(level) > 470 && ords.length > 1)
        ords.forEach(function (o) { rows.push(level.filter(function (H) { return H.length === o; })); });
      else rows.push(level);
    });
    var W = Math.max(560, 90 + Math.max.apply(null, rows.map(rowW)));
    var rowH = 74, Hh = 40 + (rows.length - 1) * rowH + 30;
    var svg = s('svg', { viewBox: '0 0 ' + W + ' ' + Hh, class: 'a308-lattice', role: 'img',
      'aria-label': 'Subgroup lattice of ' + G.name + (opts.hideCount ? '' : ': ' + subsList.length + ' subgroups') });
    if (W > 560) svg.style.minWidth = Math.round(W * 0.8) + 'px';
    var posOf = [], rowOrders = [];
    rows.forEach(function (row, li) {
      rowOrders[li] = [];
      var avail = W - 90, slot = avail / row.length;
      var even = row.every(function (H) { return nodeW(H) + 12 <= slot; });
      var x = 70 + (avail - rowW(row)) / 2;
      row.forEach(function (H, k) {
        if (rowOrders[li].indexOf(H.length) < 0) rowOrders[li].push(H.length);
        var w = nodeW(H) + 12;
        // spread evenly when every label fits its slot; otherwise pack them side by side
        posOf[subsList.indexOf(H)] = [even ? 70 + slot * (k + 0.5) : x + w / 2, Hh - 28 - li * rowH];
        x += w;
      });
    });
    function contains(A, B) { // B subset of A
      var has = {}; A.forEach(function (x) { has[x] = true; });
      return B.every(function (x) { return has[x]; });
    }
    // edges: covering relations only
    subsList.forEach(function (A, i) {
      subsList.forEach(function (B, j) {
        if (A.length <= B.length || !contains(A, B)) return;
        var between = subsList.some(function (C) { return C.length < A.length && C.length > B.length && contains(A, C) && contains(C, B); });
        if (between) return;
        svg.appendChild(s('line', { x1: posOf[i][0], y1: posOf[i][1], x2: posOf[j][0], y2: posOf[j][1], class: 'edge' }));
      });
    });
    var out = h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    var nodes = [];
    subsList.forEach(function (H, i) {
      var normal = G.isNormal(H);
      var g = s('g', { class: 'node' + (normal && opts.markNormal ? ' normal' : ''), tabindex: 0, role: 'button',
        'aria-label': G.describe(H) + ', order ' + H.length + (normal && opts.markNormal ? ', normal' : '') });
      var txt = G.describe(H);
      var w = Math.max(34, 7.2 * txt.length + 14);
      g.appendChild(s('rect', { x: posOf[i][0] - w / 2, y: posOf[i][1] - 13, width: w, height: 26, rx: 13 }));
      g.appendChild(s('text', { x: posOf[i][0], y: posOf[i][1] + 4, text: txt }));
      function go() {
        nodes.forEach(function (nd) { nd.classList.remove('on'); });
        g.classList.add('on');
        out.innerHTML = '<strong>' + txt + '</strong> = ' + setList(G, H) + ' &nbsp;&middot;&nbsp; order ' + H.length +
          ', index ' + (G.n / H.length) + (opts.markNormal ? ' &nbsp;&middot;&nbsp; ' + (normal ? 'normal' : 'not normal') : '');
        if (opts.onPick) opts.onPick(H);
      }
      g.addEventListener('click', go);
      g.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); go(); } });
      nodes.push(g);
      svg.appendChild(g);
    });
    // order labels at the left
    rowOrders.forEach(function (os, li) {
      svg.appendChild(s('text', { x: 6, y: Hh - 24 - li * rowH, class: 'ordlab',
        text: (os.length > 1 ? 'orders ' : 'order ') + os.join(', ') }));
    });
    el.appendChild(h('div', { class: 'a308-lattice-wrap' }, [svg]));
    el.appendChild(out);
    var gate = predictGate(el, out, opts);
    out.innerHTML = opts.hideCount
      ? 'Subgroup lattice of ' + G.name + '. Click a subgroup to see its elements' + (opts.markNormal ? ' (normal subgroups have a green ring)' : '') + '.'
      : G.name + ' has <strong>' + subsList.length + '</strong> subgroups. Click one to see its elements' +
        (opts.markNormal ? ' (normal subgroups have a green ring)' : '') + '.';
    return { subgroups: subsList, reveal: gate.reveal };
  }

  /* ================================================================== *
   * Widget: left vs right cosets, side by side
   *
   *   A308.cosets(el, { group: G, subgroups: [[...], ...] or null (all proper nontrivial), avoid: [...],
   *                     additive: true | false (default: the group's own flag), predict: true | 'text' })
   *
   * Additive groups are written g + H and H + g.
   * ================================================================== */
  function cosets(el, opts) {
    el = resolve(el);
    el.innerHTML = '';
    var G = opts.group;
    var additive = opts.additive === undefined ? !!G.additive : !!opts.additive;
    var choices = opts.subgroups || G.subgroups().filter(function (H) { return H.length > 1 && H.length < G.n; });
    var sel = h('select', { 'aria-label': 'subgroup H' });
    choices.forEach(function (H, i) { sel.appendChild(h('option', { value: i, text: 'H = ' + G.describe(H) + '  (order ' + H.length + ')' })); });
    el.appendChild(h('div', { class: 'ctl-row' }, [h('div', { class: 'ctl' }, [h('label', { text: 'Subgroup' }), sel])]));
    var grid = h('div', { class: 'a308-coset-grid' });
    var out = h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    el.appendChild(grid);
    el.appendChild(out);
    var gate = predictGate(el, out, opts);
    function col(title, list, side) {
      var c = h('div', { class: 'a308-coset-col' }, [h('h4', { text: title })]);
      list.forEach(function (cs, k) {
        var chip = h('div', { class: 'a308-coset' });
        chip.style.background = TINTS[k % TINTS.length];
        chip.style.borderColor = PALETTE[k % PALETTE.length];
        chip.innerHTML = '<span class="rep">' + G.cosetName(cs.rep, side, 'H', additive) + '</span> ' + setList(G, cs.elements);
        c.appendChild(chip);
      });
      return c;
    }
    function update() {
      var H = choices[Number(sel.value)];
      if (avoidHit(opts.avoid, G.describe(H))) { grid.innerHTML = ''; out.innerHTML = AVOID_NOTE; return; }
      var L = G.leftCosets(H), Rr = G.rightCosets(H);
      grid.innerHTML = '';
      grid.appendChild(col(additive ? 'Left cosets g + H' : 'Left cosets gH', L, 'left'));
      grid.appendChild(col(additive ? 'Right cosets H + g' : 'Right cosets Hg', Rr, 'right'));
      var same = L.every(function (c) { return Rr.some(function (d) { return d.elements.join(',') === c.elements.join(','); }); });
      out.innerHTML = '[G : H] = ' + G.n + ' / ' + H.length + ' = <strong>' + L.length + '</strong> cosets on each side. ' +
        (same ? 'The left and right partitions are <strong>the same</strong>.'
              : 'The left and right partitions are <strong>different</strong>: some ' + (additive ? 'g + H ≠ H + g' : 'gH ≠ Hg') + '.');
      if (opts.onChange) opts.onChange(H, same);
    }
    sel.addEventListener('change', update);
    update();
    return { update: update, reveal: gate.reveal };
  }

  /* ================================================================== *
   * Widget: quotient group - sort the table by cosets, then collapse
   *
   *   A308.quotient(el, { group: G, subgroups: [...] (default: all proper nontrivial), avoid: [...],
   *                       additive: true | false (default: the group's own flag), predict: true | 'text' })
   *
   * Quotients of additive groups are labelled g + N and their table is headed "+".
   * ================================================================== */
  function quotient(el, opts) {
    el = resolve(el);
    el.innerHTML = '';
    var G = opts.group;
    var additive = opts.additive === undefined ? !!G.additive : !!opts.additive;
    var choices = opts.subgroups || G.subgroups().filter(function (H) { return H.length > 1 && H.length < G.n; });
    var sel = h('select', { 'aria-label': 'subgroup N' });
    choices.forEach(function (H, i) { sel.appendChild(h('option', { value: i, text: 'N = ' + G.describe(H) + '  (order ' + H.length + ')' })); });
    var btn = h('button', { class: 'btn411', type: 'button', text: 'Collapse the blocks' });
    el.appendChild(h('div', { class: 'ctl-row' }, [h('div', { class: 'ctl' }, [h('label', { text: 'Subgroup' }), sel]), btn]));
    var big = h('div', { class: 'a308-q-big' }), small = h('div', { class: 'a308-q-small' });
    var out = h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    el.appendChild(big); el.appendChild(small); el.appendChild(out);
    var gate = predictGate(el, out, opts);
    var cay = cayley(big, { group: G, clickable: false });
    function update() {
      var N = choices[Number(sel.value)];
      small.innerHTML = '';
      if (avoidHit(opts.avoid, G.describe(N))) { cay.set({ H: null, color: null, reorder: false }); out.innerHTML = AVOID_NOTE; btn.disabled = true; return; }
      btn.disabled = false;
      cay.set({ H: N, color: 'cosets-left', reorder: true });
      var normal = G.isNormal(N);
      out.innerHTML = 'Rows and columns are now grouped coset by coset, and each cell is coloured by the coset its product lands in. ' +
        (normal ? 'Every block is a single colour: <strong>N is normal</strong>, so “coset ' + (additive ? 'plus' : 'times') + ' coset” is well defined.'
                : 'Some blocks mix colours: <strong>N is not normal</strong>. ' + (additive ? 'Adding' : 'Multiplying') +
                  ' two cosets can land in different cosets depending on which representatives you pick.');
    }
    btn.addEventListener('click', function () {
      var N = choices[Number(sel.value)];
      var Q = G.quotient(N, { additive: additive });
      small.innerHTML = '';
      if (!Q) {
        out.innerHTML += '<br>Nothing to collapse: the mixed blocks have no single answer. Try a normal subgroup.';
        return;
      }
      cayley(small, { group: Q, clickable: false, color: 'order', caption: G.name + ' / ' + G.describe(N) });
      var named = Q.isCyclic() ? 'cyclic of order ' + Q.n : (Q.n === 4 ? 'the Klein four-group (not cyclic)' : (Q.isAbelian() ? 'abelian, not cyclic' : 'nonabelian'));
      out.innerHTML = 'Each one-colour block became one entry. G/N has ' + Q.n + ' elements and is ' + named + '.';
    });
    sel.addEventListener('change', update);
    update();
    return { update: update, reveal: gate.reveal };
  }

  /* ================================================================== *
   * Widget: homomorphisms Z_m -> Z_n determined by phi(1) = k
   *
   *   A308.hom(el, { m: 12, n: 8, k: 2, avoid: [[m, n], ...], predict: true | 'text' })
   * ================================================================== */
  function hom(el, opts) {
    el = resolve(el);
    el.innerHTML = '';
    var state = { m: opts.m || 12, n: opts.n || 8, k: opts.k === undefined ? 2 : opts.k };
    function rng(label, min, max, val) {
      var inp = h('input', { type: 'range', min: min, max: max, step: 1, value: val, 'aria-label': label });
      var lab = h('label', { text: label });
      return { inp: inp, lab: lab, box: h('div', { class: 'ctl' }, [lab, inp]) };
    }
    var M = rng('m', 2, opts.maxM || 24, state.m), N = rng('n', 2, opts.maxN || 24, state.n), K = rng('φ(1) = k', 0, state.n - 1, state.k);
    el.appendChild(h('div', { class: 'ctl-row' }, [M.box, N.box, K.box]));
    var svgW = 560, svgH = 300;
    var svg = s('svg', { viewBox: '0 0 ' + svgW + ' ' + svgH, class: 'a308-hom', role: 'img' });
    var out = h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    el.appendChild(h('div', { class: 'a308-hom-wrap' }, [svg]));
    el.appendChild(out);
    var gate = predictGate(el, out, opts);
    function update() {
      var m = state.m, n = state.n, k = Math.min(state.k, n - 1);
      K.inp.max = n - 1;
      K.inp.value = k;
      M.lab.textContent = 'domain ℤ' + subs(m);
      N.lab.textContent = 'codomain ℤ' + subs(n);
      K.lab.textContent = 'φ(1) = ' + k;
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      if (avoidHit(opts.avoid, [m, n])) { out.innerHTML = AVOID_NOTE; svg.setAttribute('aria-label', 'hidden'); return; }
      var ok = (m * k) % n === 0;
      var f = [];
      for (var a = 0; a < m; a++) f.push((a * k) % n);
      var cxL = 130, cxR = 430, cy = 150, RL = 105, RR = 105;
      function pL(a) { var t = -Math.PI / 2 + 2 * Math.PI * a / m; return [cxL + RL * Math.cos(t), cy + RL * Math.sin(t)]; }
      function pR(b) { var t = -Math.PI / 2 + 2 * Math.PI * b / n; return [cxR + RR * Math.cos(t), cy + RR * Math.sin(t)]; }
      svg.appendChild(s('text', { x: cxL, y: 18, class: 'ttl', text: 'ℤ' + subs(m) }));
      svg.appendChild(s('text', { x: cxR, y: 18, class: 'ttl', text: 'ℤ' + subs(n) }));
      var imgSet = {};
      f.forEach(function (y) { imgSet[y] = true; });
      var imgList = Object.keys(imgSet).map(Number).sort(function (p, q) { return p - q; });
      if (ok) {
        for (var a2 = 0; a2 < m; a2++) {
          var p1 = pL(a2), p2 = pR(f[a2]), col = PALETTE[imgList.indexOf(f[a2]) % PALETTE.length];
          svg.appendChild(s('line', { x1: p1[0], y1: p1[1], x2: p2[0], y2: p2[1], class: 'map', stroke: col }));
        }
      }
      for (var a3 = 0; a3 < m; a3++) {
        var q1 = pL(a3);
        var c1 = ok ? PALETTE[imgList.indexOf(f[a3]) % PALETTE.length] : '#999';
        svg.appendChild(s('circle', { cx: q1[0], cy: q1[1], r: m > 16 ? 8 : 10, class: 'pt', fill: ok && f[a3] === 0 ? '#fff' : c1, stroke: c1 }));
        svg.appendChild(s('text', { x: q1[0], y: q1[1] + 4, class: 'lab' + (ok && f[a3] === 0 ? ' dark' : ''), text: String(a3) }));
      }
      for (var b = 0; b < n; b++) {
        var q2 = pR(b), inImg = ok && imgSet[b];
        var c2 = inImg ? PALETTE[imgList.indexOf(b) % PALETTE.length] : '#c9ccd1';
        svg.appendChild(s('circle', { cx: q2[0], cy: q2[1], r: n > 16 ? 8 : 10, class: 'pt', fill: inImg ? c2 : '#fff', stroke: c2 }));
        svg.appendChild(s('text', { x: q2[0], y: q2[1] + 4, class: 'lab' + (inImg ? '' : ' dark'), text: String(b) }));
      }
      svg.setAttribute('aria-label', 'Arrows from Z_' + m + ' to Z_' + n + ' for the map sending a to ' + k + 'a mod ' + n);
      if (!ok) {
        out.innerHTML = '<strong>Not a homomorphism.</strong> In ℤ' + subs(m) + ', adding 1 to itself ' + m + ' times gives 0, so φ would need ' +
          m + ' · ' + k + ' = ' + (m * k) + ' to be 0 in ℤ' + subs(n) + '. It isn’t: ' + (m * k) + ' mod ' + n + ' = ' + ((m * k) % n) + '.';
        return;
      }
      var ker = [];
      for (var a4 = 0; a4 < m; a4++) if (f[a4] === 0) ker.push(a4);
      out.innerHTML = '<strong>A homomorphism:</strong> φ(a) = ' + k + 'a mod ' + n + '. ' +
        'Kernel = {' + ker.join(', ') + '} (white dots on the left, ' + ker.length + ' of them). Image = {' + imgList.join(', ') + '} (' + imgList.length + ' elements). ' +
        'Same-coloured dots on the left are the cosets of the kernel; each one lands on a single point. ' +
        '<span class="muted">' + m + ' / ' + ker.length + ' = ' + imgList.length + '.</span>';
    }
    M.inp.addEventListener('input', function () { state.m = Number(M.inp.value); update(); });
    N.inp.addEventListener('input', function () { state.n = Number(N.inp.value); update(); });
    K.inp.addEventListener('input', function () { state.k = Number(K.inp.value); update(); });
    update();
    return { update: update, reveal: gate.reveal };
  }

  /* ================================================================== *
   * Widget: Z_n as a ring - addition and multiplication tables
   *
   *   A308.ring(el, { n: 8, show: 'mul' | 'add', maxN: 20, avoid: [10, 12, ...], predict: true | 'text' })
   * ================================================================== */
  function ring(el, opts) {
    el = resolve(el);
    el.innerHTML = '';
    var state = { n: opts.n || 8, show: opts.show || 'mul' };
    var inN = h('input', { type: 'range', min: 2, max: opts.maxN || 20, step: 1, value: state.n, 'aria-label': 'n' });
    var labN = h('label');
    var tAdd = h('button', { class: 'btn411 ghost', type: 'button', text: 'Addition' });
    var tMul = h('button', { class: 'btn411 ghost', type: 'button', text: 'Multiplication' });
    el.appendChild(h('div', { class: 'ctl-row' }, [h('div', { class: 'ctl' }, [labN, inN]), tAdd, tMul]));
    var wrap = h('div', { class: 'a308-cayley-wrap' });
    var out = h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    el.appendChild(wrap); el.appendChild(out);
    var gate = predictGate(el, out, opts);
    function update() {
      var n = state.n, Rg = ringZn(n);
      labN.textContent = 'ℤ' + subs(n);
      tAdd.classList.toggle('on', state.show === 'add');
      tMul.classList.toggle('on', state.show === 'mul');
      wrap.innerHTML = '';
      if (avoidHit(opts.avoid, n)) { out.innerHTML = AVOID_NOTE; return; }
      var table = h('table', { class: 'a308-cayley' + (n > 12 ? ' small' : '') });
      var head = h('tr', null, [h('th', { class: 'corner', scope: 'col', html: state.show === 'add' ? '+' : '&times;' })]);
      for (var b = 0; b < n; b++) head.appendChild(h('th', { scope: 'col', text: String(b) }));
      table.appendChild(h('thead', null, [head]));
      var body = h('tbody');
      for (var a = 0; a < n; a++) {
        var tr = h('tr', null, [h('th', { scope: 'row', text: String(a),
          class: state.show === 'mul' ? (Rg.units.indexOf(a) >= 0 ? 'unit' : (Rg.zeroDivisors.indexOf(a) >= 0 ? 'zd' : '')) : '' })]);
        for (var c = 0; c < n; c++) {
          var v = state.show === 'add' ? Rg.add(a, c) : Rg.mul(a, c);
          var td = h('td', { text: String(v) });
          if (state.show === 'mul' && v === 1) td.classList.add('one');
          if (state.show === 'mul' && v === 0 && a !== 0 && c !== 0) td.classList.add('zero');
          tr.appendChild(td);
        }
        body.appendChild(tr);
      }
      table.appendChild(body);
      wrap.appendChild(table);
      out.innerHTML = state.show === 'mul'
        ? 'Units (green row labels): {' + Rg.units.join(', ') + '} &nbsp;&middot;&nbsp; zero divisors (orange): {' + Rg.zeroDivisors.join(', ') + '}' +
          '<br>A green cell is a product equal to 1; an orange cell is two nonzero elements multiplying to 0. ' +
          (Rg.isField ? 'ℤ' + subs(n) + ' has no zero divisors and every nonzero element is a unit: it is a <strong>field</strong>.' : 'ℤ' + subs(n) + ' is not a field.')
        : 'Every row of the addition table is a shift of the first: (ℤ' + subs(n) + ', +) is a cyclic group.';
    }
    inN.addEventListener('input', function () { state.n = Number(inN.value); update(); });
    tAdd.addEventListener('click', function () { state.show = 'add'; update(); });
    tMul.addEventListener('click', function () { state.show = 'mul'; update(); });
    update();
    return { update: update, reveal: gate.reveal };
  }

  /* ================================================================== *
   * Widget: Euclidean algorithm with back-substitution
   *
   *   A308.euclid(el, { a: 252, b: 198, avoid: [[a, b], ...], predict: true | 'text' })
   * ================================================================== */
  function euclid(el, opts) {
    el = resolve(el);
    el.innerHTML = '';
    var inA = h('input', { type: 'number', value: opts.a || 252, 'aria-label': 'a', class: 'a308-num' });
    var inB = h('input', { type: 'number', value: opts.b || 198, 'aria-label': 'b', class: 'a308-num' });
    el.appendChild(h('div', { class: 'ctl-row' }, [
      h('div', { class: 'ctl' }, [h('label', { text: 'a' }), inA]),
      h('div', { class: 'ctl' }, [h('label', { text: 'b' }), inB])
    ]));
    var steps = h('div', { class: 'a308-euclid' });
    var out = h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    el.appendChild(steps); el.appendChild(out);
    var gate = predictGate(el, out, opts);
    function update() {
      var a = Math.trunc(Number(inA.value)), b = Math.trunc(Number(inB.value));
      steps.innerHTML = '';
      if (!a || !b || Math.abs(a) > 1e9 || Math.abs(b) > 1e9) { out.innerHTML = 'Enter two nonzero integers.'; return; }
      if (avoidHit(opts.avoid, [a, b]) || avoidHit(opts.avoid, [b, a])) { out.innerHTML = AVOID_NOTE; return; }
      var E = egcd(Math.abs(a), Math.abs(b));
      var ol = h('ol', { class: 'a308-steps' });
      E.steps.forEach(function (st) {
        ol.appendChild(h('li', { class: 'mono', text: st.a + ' = ' + st.q + ' · ' + st.b + ' + ' + st.rem }));
      });
      steps.appendChild(ol);
      var E2 = egcd(a, b);
      out.innerHTML = 'The last nonzero remainder is <strong>gcd(' + a + ', ' + b + ') = ' + E2.g + '</strong>. ' +
        'Working back up the steps: <span class="mono">' + E2.g + ' = (' + E2.r + ')(' + a + ') + (' + E2.s + ')(' + b + ')</span>.';
    }
    inA.addEventListener('input', update);
    inB.addEventListener('input', update);
    update();
    return { update: update, reveal: gate.reveal };
  }

  /* ================================================================== *
   * Powers mod n by repeated squaring
   *
   * powmodSteps(a, b, n) -> { bits (least significant first), squares [a, a^2, a^4, ... mod n],
   *   used (the bit positions that are 1), result, prodLines (the products, as text), squarings,
   *   multiplications }. Whole numbers, a >= 0, b >= 0, n >= 2.
   * ================================================================== */
  function powmodSteps(a, b, n) {
    var bits = [], x = b;
    while (x > 0) { bits.push(x % 2); x = Math.floor(x / 2); }
    var squares = bits.length ? [a % n] : [];
    for (var i = 1; i < bits.length; i++) squares.push((squares[i - 1] * squares[i - 1]) % n);
    var used = [], result = null, prodLines = [];
    for (var j = 0; j < bits.length; j++) {
      if (!bits[j]) continue;
      used.push(j);
      if (result === null) { result = squares[j]; prodLines.push('start with a^' + Math.pow(2, j) + ' ≡ ' + squares[j]); }
      else {
        var p = result * squares[j];
        prodLines.push(result + ' · ' + squares[j] + ' = ' + p + ' ≡ ' + (p % n) + ' (mod ' + n + ')');
        result = p % n;
      }
    }
    if (result === null) result = 1 % n;   // b = 0: the empty product
    return { bits: bits, squares: squares, used: used, result: result, prodLines: prodLines,
      squarings: Math.max(0, bits.length - 1), multiplications: Math.max(0, used.length - 1) };
  }

  /* ================================================================== *
   * Widget: a^b mod n, worked by repeated squaring
   *
   *   A308.powmod(el, { a: 3, b: 45, n: 100, avoid: [[a, b, n], ...], stepwise: false,
   *                     maxB: 1000000, maxN: 10000, prompt: 'text', predict: true | 'text' })
   *
   * The student types a, b and n and presses the button. stepwise: true shows the binary
   * expansion first and then one line per press of "Next step", so a page can ask for each
   * square (or product) to be predicted. The readout is idle until the first press, so a
   * predict gate here only delays the idle prompt, never an answer.
   * ================================================================== */
  function commas(x) { return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

  function powmod(el, opts) {
    el = resolve(el);
    el.innerHTML = '';
    var maxA = 1000000000, maxB = opts.maxB || 1000000, maxN = opts.maxN || 10000;
    var inA = h('input', { type: 'number', min: 1, step: 1, value: opts.a === undefined ? 3 : opts.a, 'aria-label': 'base a', class: 'a308-num' });
    var inB = h('input', { type: 'number', min: 1, step: 1, value: opts.b === undefined ? 45 : opts.b, 'aria-label': 'exponent b', class: 'a308-num' });
    var inN = h('input', { type: 'number', min: 2, step: 1, value: opts.n === undefined ? 100 : opts.n, 'aria-label': 'modulus n', class: 'a308-num' });
    var go = h('button', { class: 'btn411', type: 'button', text: opts.stepwise ? 'Start' : 'Compute a^b mod n' });
    var next = opts.stepwise ? h('button', { class: 'btn411 ghost', type: 'button', text: 'Next step', disabled: 'disabled' }) : null;
    var idle = opts.prompt || 'Press the button to see the steps.';
    var out = h('div', { class: 'readout a308-readout', 'aria-live': 'polite', text: idle });
    el.appendChild(h('div', { class: 'ctl-row' }, [
      h('div', { class: 'ctl' }, [h('label', { text: 'a' }), inA]),
      h('div', { class: 'ctl' }, [h('label', { text: 'b' }), inB]),
      h('div', { class: 'ctl' }, [h('label', { text: 'n' }), inN])
    ]));
    el.appendChild(h('div', { class: 'a308-row' }, [go, next]));
    el.appendChild(out);
    var gate = predictGate(el, out, opts);
    var run = null;   // the computation on screen: { a, b, n, st, sq, units, shown }

    function li(t) { return '<li>' + t + '</li>'; }
    function show(k) {
      var r = run, st = r.st, html = '<p><strong>' + r.b + '</strong> in binary is <span class="mono">' + r.b.toString(2) + '</span>, so ' +
        r.b + ' = ' + st.used.map(function (j) { return '2^' + j; }).join(' + ') + '.</p>';
      var nSq = Math.min(Math.max(k - 1, 0), r.sq.length), nPr = Math.min(Math.max(k - 1 - r.sq.length, 0), st.prodLines.length);
      if (nSq) html += '<p>Square the base, reducing mod ' + r.n + ' at each step:</p><ol class="a308-steps">' + r.sq.slice(0, nSq).map(li).join('') + '</ol>';
      if (nPr) html += '<p>Multiply together the squares for the 1 digits:</p><ol class="a308-steps">' + st.prodLines.slice(0, nPr).map(li).join('') + '</ol>';
      if (k >= r.units) html += '<p><strong>' + r.a + '^' + r.b + ' ≡ ' + st.result + ' (mod ' + r.n + ').</strong> That took ' + st.squarings +
        ' squarings and ' + st.multiplications + ' multiplications. Multiplying out directly would take ' + (r.b - 1) + '.</p>';
      out.innerHTML = html;
      r.shown = k;
      if (next) next.disabled = k >= r.units;
    }
    function start() {
      var a = Math.floor(Number(inA.value)), b = Math.floor(Number(inB.value)), n = Math.floor(Number(inN.value));
      run = null;
      if (next) next.disabled = true;
      if (!(a >= 1 && a <= maxA && b >= 1 && b <= maxB && n >= 2 && n <= maxN)) {
        out.textContent = 'Use whole numbers: a from 1 to ' + commas(maxA) + ', b from 1 to ' + commas(maxB) + ', and n from 2 to ' + commas(maxN) + '.';
        return;
      }
      if (avoidHit(opts.avoid, [a, b, n])) { out.textContent = AVOID_NOTE; return; }
      var st = powmodSteps(a, b, n), sq = [];
      st.squares.forEach(function (v, i) {
        var prev = st.squares[i - 1];
        sq.push(i === 0 ? 'a^1 ≡ ' + v + ' (mod ' + n + ')'
          : 'a^' + Math.pow(2, i) + ' = (a^' + Math.pow(2, i - 1) + ')^2 ≡ ' + prev + '^2 = ' + (prev * prev) + ' ≡ ' + v + ' (mod ' + n + ')');
      });
      run = { a: a, b: b, n: n, st: st, sq: sq, units: 2 + sq.length + st.prodLines.length, shown: 0 };
      show(opts.stepwise ? 1 : run.units);
    }
    go.addEventListener('click', start);
    if (next) next.addEventListener('click', function () { if (run && run.shown < run.units) show(run.shown + 1); });
    // Changing a number clears the steps, so what is on screen always matches the boxes.
    el.addEventListener('input', function () { run = null; out.textContent = idle; if (next) next.disabled = true; });
    return { reveal: gate.reveal, run: function () { start(); return run; } };
  }

  /* ================================================================== *
   * Dragging a point in an SVG
   *
   *   A308.dragPoints(svg, {
   *     plane: { cx, cy, scale },   math (x, y) sits at svg (cx + scale x, cy - scale y)
   *     get: function (id) -> [x, y],            the point's current place
   *     set: function (id, pt) {},               called with the new place; redraw here
   *     snap: 1,                                 round to multiples of this (0: no rounding)
   *     limit: 4,                                keep |x| and |y| within this
   *     step: ...,                               arrow-key step (default: snap, else 0.1)
   *     onStart: function (id) {}, onEnd: function (id) {} })  -> { off() }
   *   A308.dragHandle(id, pt, plane, label)  an SVG circle the helper can grab (data-h = id,
   *       focusable, role button); draw one per point, after everything else, on every redraw.
   *
   * Listeners sit on the svg itself, so redrawing the svg's children is safe: the helper
   * captures the pointer on the svg, and after an arrow key it puts focus back on the new
   * handle. Pages should give the svg `touch-action: none` (the .a308-lat-drag class does).
   * ================================================================== */
  function snapValue(v, snap) {
    var r = snap ? Math.round(v / snap) * snap : v;
    return Math.round(r * 1e6) / 1e6 + 0;   // + 0 turns -0 into 0
  }
  // Round a point to multiples of opts.snap, then keep it within opts.limit (a limit that is not a multiple of snap rounds down).
  function snapPoint(pt, opts) {
    opts = opts || {};
    var lim = opts.limit ? (opts.snap ? Math.floor(opts.limit / opts.snap + 1e-9) * opts.snap : opts.limit) : null;
    return pt.map(function (v) {
      var r = snapValue(v, opts.snap);
      return lim === null ? r : Math.max(-lim, Math.min(lim, r));
    });
  }

  function dragHandle(id, pt, plane, label) {
    return s('circle', { cx: plane.cx + plane.scale * pt[0], cy: plane.cy - plane.scale * pt[1], r: 9, class: 'a308-handle',
      'data-h': id, tabindex: 0, role: 'button', 'aria-label': label });
  }

  function dragPoints(svg, opts) {
    var pl = opts.plane, so = { snap: opts.snap === undefined ? 1 : opts.snap, limit: opts.limit }, dragging = null;
    function handleId(ev) { var t = ev.target; return t && t.getAttribute ? t.getAttribute('data-h') : null; }
    function toMath(ev) {
      var m = svg.getScreenCTM();
      if (!m) return null;
      var p = svg.createSVGPoint();
      p.x = ev.clientX; p.y = ev.clientY;
      var q = p.matrixTransform(m.inverse());
      return [(q.x - pl.cx) / pl.scale, (pl.cy - q.y) / pl.scale];
    }
    function move(id, raw) {
      var q = snapPoint(raw, so), p = opts.get(id);
      if (q[0] !== p[0] || q[1] !== p[1]) opts.set(id, q);
    }
    function onDown(ev) {
      var id = handleId(ev);
      if (id === null) return;
      dragging = id;
      try { svg.setPointerCapture(ev.pointerId); } catch (e) { /* a pointer that is already gone */ }
      ev.preventDefault();
      if (opts.onStart) opts.onStart(id);
    }
    function onMove(ev) {
      if (dragging === null) return;
      var pt = toMath(ev);
      if (pt) move(dragging, pt);
    }
    function onUp() {
      if (dragging === null) return;
      var id = dragging;
      dragging = null;
      if (opts.onEnd) opts.onEnd(id);
    }
    function onKey(ev) {
      var id = handleId(ev);
      if (id === null) return;
      var dx = ev.key === 'ArrowRight' ? 1 : ev.key === 'ArrowLeft' ? -1 : 0, dy = ev.key === 'ArrowUp' ? 1 : ev.key === 'ArrowDown' ? -1 : 0;
      if (!dx && !dy) return;
      ev.preventDefault();
      var step = opts.step || so.snap || 0.1, p = opts.get(id);
      move(id, [p[0] + dx * step, p[1] + dy * step]);
      var again = svg.querySelector('[data-h="' + id + '"]');
      if (again && again.focus) again.focus();
    }
    svg.addEventListener('pointerdown', onDown);
    svg.addEventListener('pointermove', onMove);
    svg.addEventListener('pointerup', onUp);
    svg.addEventListener('pointercancel', onUp);
    svg.addEventListener('keydown', onKey);
    return { off: function () {
      svg.removeEventListener('pointerdown', onDown);
      svg.removeEventListener('pointermove', onMove);
      svg.removeEventListener('pointerup', onUp);
      svg.removeEventListener('pointercancel', onUp);
      svg.removeEventListener('keydown', onKey);
    } };
  }

  /* ================================================================== *
   * Lattices in the plane
   *
   * A basis is [[x1, y1], [x2, y2]]; the lattice is every whole-number combination of the two
   * vectors. Pure functions (the widget below draws them):
   *   latticeCoords(b, p)    the (s, t) with p = s b1 + t b2, or null if b is not a basis
   *   latticeHas(b, p)       is p a point of the lattice?
   *   latticeSame(b, c)      do the two bases give the same lattice?
   *   latticeShortest(b)     a shortest nonzero vector (Lagrange-Gauss reduction), or null
   *   latticeSecond(b, U)    the vectors y1 = U11 b1 + U12 b2, y2 = U21 b1 + U22 b2, U = [U11, U12, U21, U22]
   *   latticeCompare(b, U)   { y, det, areas, kind, same }: kind is 'bParallel', 'yParallel', 'fraction',
   *                          'same' or 'different'
   *   latticeTurn(b, n)      does turning the plane by 2 pi / n keep the lattice? { coords, keeps, t, shortest }
   * ================================================================== */
  var LAT_EPS = 1e-9;
  function cross2(p, q) { return p[0] * q[1] - p[1] * q[0]; }
  function isWhole(x) { return Math.abs(x - Math.round(x)) < LAT_EPS; }
  function latticeCoords(b, p) {
    var d = cross2(b[0], b[1]);
    return Math.abs(d) < LAT_EPS ? null : [cross2(p, b[1]) / d, cross2(b[0], p) / d];
  }
  function latticeHas(b, p) {
    var c = latticeCoords(b, p);
    return !!c && isWhole(c[0]) && isWhole(c[1]);
  }
  function latticeSame(b, c) {
    return latticeHas(b, c[0]) && latticeHas(b, c[1]) && latticeHas(c, b[0]) && latticeHas(c, b[1]);
  }
  function latticeShortest(b) {
    if (Math.abs(cross2(b[0], b[1])) < LAT_EPS) return null;
    var u = b[0].slice(), v = b[1].slice();
    function len2(p) { return p[0] * p[0] + p[1] * p[1]; }
    for (var it = 0; it < 200; it++) {
      if (len2(u) > len2(v)) { var t = u; u = v; v = t; }
      var m = Math.round((u[0] * v[0] + u[1] * v[1]) / len2(u));
      if (m === 0) break;
      v = [v[0] - m * u[0], v[1] - m * u[1]];
    }
    return u;
  }
  function latticeSecond(b, U) {
    return [[U[0] * b[0][0] + U[1] * b[1][0], U[0] * b[0][1] + U[1] * b[1][1]],
      [U[2] * b[0][0] + U[3] * b[1][0], U[2] * b[0][1] + U[3] * b[1][1]]];
  }
  function latticeCompare(b, U) {
    var d = U[0] * U[3] - U[1] * U[2], y = latticeSecond(b, U);
    var r = { y: y, det: d, areas: [Math.abs(cross2(b[0], b[1])), Math.abs(cross2(y[0], y[1]))] };
    if (r.areas[0] < LAT_EPS) r.kind = 'bParallel';
    else if (Math.abs(d) < LAT_EPS) r.kind = 'yParallel';
    else if (!U.every(function (x) { return x === Math.round(x); })) r.kind = 'fraction';
    else r.kind = Math.abs(d) === 1 ? 'same' : 'different';
    r.same = r.kind === 'same';
    return r;
  }
  function latticeTurn(b, n) {
    var th = 2 * Math.PI / n, c = Math.cos(th), sn = Math.sin(th);
    function turn(p) { return [c * p[0] - sn * p[1], sn * p[0] + c * p[1]]; }
    var c1 = latticeCoords(b, turn(b[0])), c2 = latticeCoords(b, turn(b[1]));
    if (!c1) return null;
    return { coords: [c1, c2], keeps: c1.concat(c2).every(isWhole), t: 2 * c, shortest: latticeShortest(b) };
  }

  /* ================================================================== *
   * Widget: a lattice in the plane, with a basis you can drag
   *
   *   A308.lattice2d(el, {
   *     basis: [[3, 1], [1, 2]],      the first basis (default: the square lattice)
   *     U: [1, 0, 0, 1],              compare mode: rings mark the lattice of a second basis, y = U b
   *     uPresets: [{ name, u }, ...]  a menu of choices for U ("Your own U" is added)
   *     turn: 5, turnMenu: [2, ..., 8]  turn mode: rings mark the lattice turned by 2 pi / n; turnMenu adds a menu
   *     presets: [{ name, basis }, ...]  a menu of bases ("Your own basis" is added)
   *     drag: true                    handles on the two basis vectors (arrow keys work too)
   *     inputs: true                  labelled number boxes for the basis (and U)
   *     snap: 1                       handles snap to multiples of this (use 0.1 for a hexagonal or oblique lattice)
   *     lim: 4                        the picture shows -lim..lim in each direction
   *     avoid: [...]                  compare mode: [[basis, basis], ...] pairings (either order) that are homework;
   *                                   turn mode: [[basis, n], ...]
   *     onChange: function (state) {}, predict: true | 'text' })
   *   -> { state: { b, U, n }, set({ basis, U, turn }), update(), reveal() }
   *
   * Give U or turn, not both. With neither, the widget just draws the lattice and its cell.
   * ================================================================== */
  function lattice2d(el, opts) {
    el = resolve(el);
    el.innerHTML = '';
    if ((opts.U || opts.uPresets) && (opts.turn || opts.turnMenu)) throw new Error('lattice2d: give U (compare two bases) or turn, not both');
    var mode = (opts.turn || opts.turnMenu) ? 'turn' : (opts.U || opts.uPresets ? 'compare' : 'plain');
    var lim = opts.lim || 4, C = 150, S = 150 / (lim + 0.5), R = lim + 0.3, dragOn = opts.drag !== false;
    var plane = { cx: C, cy: C, scale: S }, snap = opts.snap === undefined ? 1 : opts.snap;
    function clone(b) { return b.map(function (v) { return v.slice(); }); }
    var state = { b: clone(opts.basis || [[1, 0], [0, 1]]), U: (opts.U || [1, 0, 0, 1]).slice(), n: opts.turn || (opts.turnMenu && opts.turnMenu[0]) || 4 };
    function num(x) { var r = Math.round(x * 100) / 100; return String(r === 0 ? 0 : r); }
    function vec(p) { return '(' + num(p[0]) + ', ' + num(p[1]) + ')'; }

    // ---- controls
    var kids = [];
    function menu(label, items, onPick, ownText) {
      var sel = h('select', { 'aria-label': label });
      items.forEach(function (t, i) { sel.appendChild(h('option', { value: i, text: t })); });
      if (ownText) sel.appendChild(h('option', { value: 'own', text: ownText }));
      sel.addEventListener('change', function () { onPick(sel.value); changed(); });
      kids.push(h('div', { class: 'ctl' }, [h('label', { text: label }), sel]));
      return sel;
    }
    var presetSel = opts.presets ? menu('Lattice', opts.presets.map(function (p) { return p.name; }), function (v) {
      if (v !== 'own') { state.b = clone(opts.presets[Number(v)].basis); syncBoxes(); }
    }, 'Your own basis') : null;
    var uSel = opts.uPresets ? menu('Second basis', opts.uPresets.map(function (p) { return p.name; }), function (v) {
      if (v !== 'own') { state.U = opts.uPresets[Number(v)].u.slice(); syncBoxes(); }
    }, 'Your own U') : null;
    if (opts.turnMenu) {
      var tSel = menu('Turn', opts.turnMenu.map(function (n) { return 'order ' + n + ' (by ' + num(360 / n) + '°)'; }), function (v) { state.n = opts.turnMenu[Number(v)]; });
      tSel.value = String(Math.max(0, opts.turnMenu.indexOf(state.n)));
    }
    var boxes = [];   // [{ inp, get, put }]
    function box(label, get, put, own) {
      var inp = h('input', { type: 'number', step: 'any', 'aria-label': label, class: 'a308-num a308-num-sm' });
      inp.addEventListener('input', function () {
        put(isFinite(Number(inp.value)) ? Number(inp.value) : 0);
        if (own && own.value !== 'own') own.value = 'own';
      });
      boxes.push({ inp: inp, get: get });
      return h('div', { class: 'ctl' }, [h('label', { text: label }), inp]);
    }
    // Show at most four decimals in the boxes (a hexagonal basis has 0.8660254037844386 in it).
    function syncBoxes() { boxes.forEach(function (bx) { bx.inp.value = Math.round(bx.get() * 1e4) / 1e4; }); }
    var boxKids = [];
    if (opts.inputs !== false) {
      [['b₁ x', 0, 0], ['b₁ y', 0, 1], ['b₂ x', 1, 0], ['b₂ y', 1, 1]].forEach(function (q) {
        boxKids.push(box('first basis: ' + q[0], function () { return state.b[q[1]][q[2]]; }, function (v) { state.b[q[1]][q[2]] = v; changed(); }, presetSel));
      });
      if (mode === 'compare') ['U₁₁', 'U₁₂', 'U₂₁', 'U₂₂'].forEach(function (nm, i) {
        boxKids.push(box('matrix U: ' + nm, function () { return state.U[i]; }, function (v) { state.U[i] = v; changed(); }, uSel));
      });
    }
    if (kids.length) el.appendChild(h('div', { class: 'ctl-row' }, kids));
    if (boxKids.length) el.appendChild(h('div', { class: 'ctl-row' }, boxKids));
    var svg = s('svg', { viewBox: '0 0 300 300', class: 'a308-lat' + (dragOn ? ' a308-lat-drag' : ''), role: dragOn ? 'group' : 'img' });
    var out = h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    el.appendChild(h('div', { class: 'a308-lat-wrap' }, [svg]));
    el.appendChild(out);
    var gate = predictGate(el, out, opts);
    syncBoxes();

    // ---- drawing
    function X(x) { return C + S * x; }
    function Y(y) { return C - S * y; }
    function inView(p) { return Math.abs(p[0]) <= R && Math.abs(p[1]) <= R; }
    // Lattice points in the square |x|, |y| <= half; null if the lattice is too fine to draw.
    function points(b, half) {
      if (Math.abs(cross2(b[0], b[1])) < LAT_EPS) return [];
      var lo = [Infinity, Infinity], hi = [-Infinity, -Infinity];
      [[-half, -half], [-half, half], [half, -half], [half, half]].forEach(function (q) {
        var c = latticeCoords(b, q);
        for (var k = 0; k < 2; k++) { lo[k] = Math.min(lo[k], c[k]); hi[k] = Math.max(hi[k], c[k]); }
      });
      var i0 = Math.ceil(lo[0]), i1 = Math.floor(hi[0]), j0 = Math.ceil(lo[1]), j1 = Math.floor(hi[1]), pts = [];
      if ((i1 - i0 + 1) * (j1 - j0 + 1) > 20000) return null;
      for (var i = i0; i <= i1; i++) for (var j = j0; j <= j1; j++) {
        var p = [i * b[0][0] + j * b[1][0], i * b[0][1] + j * b[1][1]];
        if (Math.abs(p[0]) <= half + 1e-9 && Math.abs(p[1]) <= half + 1e-9) pts.push(p);
        if (pts.length > 1200) return null;
      }
      return pts;
    }
    function dot(p, r, attrs) { return s('circle', Object.assign({ cx: X(p[0]), cy: Y(p[1]), r: r }, attrs)); }
    function arrow(p, attrs) { return s('line', Object.assign({ x1: C, y1: C, x2: X(p[0]), y2: Y(p[1]) }, attrs)); }
    function sameSet(p, q) { function k(v) { return v.map(function (w) { return w.join(','); }).sort().join(' '); } return k(p) === k(q); }
    function held(y) {
      return (opts.avoid || []).some(function (e) {
        if (mode === 'compare') return (sameSet(state.b, e[0]) && sameSet(y, e[1])) || (sameSet(state.b, e[1]) && sameSet(y, e[0]));
        return mode === 'turn' && sameSet(state.b, e[0]) && e[1] === state.n;
      });
    }

    function draw() {
      var b = state.b, indep = Math.abs(cross2(b[0], b[1])) >= LAT_EPS, name = 'Lattice dots of the basis ' + vec(b[0]) + ', ' + vec(b[1]);
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      for (var k = -Math.floor(lim); k <= Math.floor(lim); k++) {
        svg.appendChild(s('line', { x1: X(k), y1: 0, x2: X(k), y2: 300, class: 'grid' }));
        svg.appendChild(s('line', { x1: 0, y1: Y(k), x2: 300, y2: Y(k), class: 'grid' }));
      }
      svg.appendChild(s('line', { x1: 0, y1: C, x2: 300, y2: C, class: 'axis' }));
      svg.appendChild(s('line', { x1: C, y1: 0, x2: C, y2: 300, class: 'axis' }));
      var msg = '', cmp = mode === 'compare' ? latticeCompare(b, state.U) : null, isHeld = false, fine = false;
      if (!indep) msg = 'The two basis vectors are parallel, so they do not form a basis. Move one of them.';
      else {
        isHeld = mode === 'compare' ? held(cmp.y) : (mode === 'turn' && held(null));
        svg.appendChild(s('polygon', { class: 'cell', points: [[0, 0], b[0], [b[0][0] + b[1][0], b[0][1] + b[1][1]], b[1]]
          .map(function (q) { return X(q[0]).toFixed(1) + ',' + Y(q[1]).toFixed(1); }).join(' ') }));
        var th = 2 * Math.PI / state.n, big = points(b, mode === 'turn' ? R * Math.SQRT2 : R);
        if (big === null) fine = true;
        else {
          big.filter(inView).forEach(function (p) { svg.appendChild(dot(p, 4, { class: 'dot' })); });
          if (mode === 'turn' && !isHeld) big.map(function (p) {
            return [Math.cos(th) * p[0] - Math.sin(th) * p[1], Math.sin(th) * p[0] + Math.cos(th) * p[1]];
          }).filter(inView).forEach(function (p) { svg.appendChild(dot(p, 7, { class: 'ring' })); });
        }
        if (mode === 'compare' && !isHeld && cmp.kind !== 'yParallel') {
          var rings = points(cmp.y, R);
          if (rings === null) fine = true;
          else rings.forEach(function (p) { svg.appendChild(dot(p, 7, { class: 'ring' })); });
          svg.appendChild(arrow(cmp.y[0], { class: 'vec2' }));
          svg.appendChild(arrow(cmp.y[1], { class: 'vec2' }));
        }
        var sv = latticeShortest(b);
        svg.appendChild(arrow(b[0], { class: 'vec1' }));
        svg.appendChild(arrow(b[1], { class: 'vec1' }));
        if (mode === 'turn' && !isHeld) {
          var tt = latticeTurn(b, state.n);
          svg.appendChild(arrow(sv, { class: 'vecs' }));
          if (Math.abs(tt.t) > LAT_EPS) svg.appendChild(arrow([tt.t * sv[0], tt.t * sv[1]], { class: 'vect' }));
        }
        msg = readout(cmp, isHeld, sv);
        // A held pairing stays out of the accessible name too.
        if (!isHeld) name += mode === 'compare' ? ', with rings on the lattice of ' + vec(cmp.y[0]) + ', ' + vec(cmp.y[1])
          : mode === 'turn' ? ', and rings on the lattice turned by ' + num(360 / state.n) + ' degrees' : '';
      }
      if (fine) msg += ' <span class="muted">(The lattice is too fine to draw every point.)</span>';
      if (dragOn) [0, 1].forEach(function (i) {
        svg.appendChild(dragHandle(i, b[i], plane, 'End of basis vector ' + (i + 1) + ', at ' + vec(b[i]) + '. Drag it, or use the arrow keys.'));
      });
      svg.setAttribute('aria-label', name);
      out.innerHTML = msg;
    }

    function readout(cmp, isHeld, sv) {
      var b = state.b, area = Math.abs(cross2(b[0], b[1]));
      if (isHeld) return AVOID_NOTE;
      if (mode === 'plain') return 'Basis ' + vec(b[0]) + ' and ' + vec(b[1]) + '. Cell area ' + num(area) + '. Shortest nonzero vector: length ' + num(Math.hypot(sv[0], sv[1])) + '.';
      if (mode === 'compare') {
        var d = cmp.det, head = 'Cell area of the first basis: ' + num(cmp.areas[0]) + '. Of the second: ' + num(cmp.areas[1]) + '.<br>';
        if (cmp.kind === 'yParallel') return head + 'The new vectors are parallel (det U = 0), so they are not a basis.';
        if (cmp.kind === 'fraction') return head + 'U has a fraction in it, so a new vector is not a lattice point and the two lattices differ.';
        if (cmp.kind === 'same') return head + '<strong>Same lattice.</strong> Every ring is on a dot and every dot has a ring: U has whole-number entries and det U = ' + num(d) +
          ', so U⁻¹ also has whole-number entries, and each basis lies in the other’s lattice.';
        return head + '<strong>Different lattice.</strong> Every ring is on a dot, but det U = ' + num(d) + ' means the second lattice holds only 1 of every ' +
          num(Math.abs(d)) + ' points, so many dots have no ring.';
      }
      var n = state.n, tt = latticeTurn(b, n), L = Math.hypot(sv[0], sv[1]), ang = num(360 / n);
      var head2 = 'Turn of order ' + n + ' (by ' + ang + '°). In lattice coordinates the turned basis vectors are ' + vec(tt.coords[0]) + ' and ' + vec(tt.coords[1]) + '.';
      var verdict = tt.keeps ? '<strong>This turn keeps the lattice.</strong> The rings sit on the dots.'
        : '<strong>This turn does not keep the lattice.</strong> Those coordinates are not whole numbers.';
      var arg;
      if (Math.abs(tt.t) < LAT_EPS) arg = 'Here 2cos θ = 0, so Rv + R⁻¹v = 0 and the shortest-vector argument says nothing.';
      else if (Math.abs(tt.t) < 1 - LAT_EPS) arg = 'Shortest-vector check: the shortest nonzero vector has length ' + num(L) + '. Then Rv + R⁻¹v = (2cos θ)v = ' + num(tt.t) +
        'v, of length ' + num(Math.abs(tt.t) * L) + '. If the turn kept the lattice, that would be a shorter nonzero lattice vector, which is impossible. So no lattice keeps this turn.';
      else arg = 'Shortest-vector check: 2cos θ = ' + num(tt.t) + ', so (2cos θ)v has length at least ' + num(L) + '. No contradiction.';
      return head2 + '<br>' + verdict + '<br>' + arg;
    }

    function changed() {
      gate.reveal();
      draw();
      if (opts.onChange) opts.onChange(state);
    }
    if (dragOn) dragPoints(svg, {
      plane: plane, snap: snap, limit: lim,
      get: function (id) { return state.b[Number(id)]; },
      set: function (id, pt) {
        state.b[Number(id)] = pt;
        if (presetSel) presetSel.value = 'own';
        syncBoxes();
        changed();
      }
    });
    draw();
    return {
      state: state,
      update: draw,
      reveal: gate.reveal,
      set: function (o) {
        if (o.basis) state.b = clone(o.basis);
        if (o.U) state.U = o.U.slice();
        if (o.turn) state.n = o.turn;
        // The menus describe what the page chose; after a set() they follow the state instead.
        if (o.basis && presetSel) presetSel.value = 'own';
        if (o.U && uSel) uSel.value = 'own';
        if (o.turn && tSel) tSel.value = String(Math.max(0, opts.turnMenu.indexOf(state.n)));
        syncBoxes();
        draw();
      }
    };
  }

  /* ================================================================== *
   * Export
   * ================================================================== */
  var A308 = {
    // number theory
    mod: mod, gcd: gcd, lcm: lcm, phi: phi, divisors: divisors, egcd: egcd, modInverse: modInverse,
    solveLinearCongruence: solveLinearCongruence, isPrime: isPrime,
    // permutations
    permIdentity: permIdentity, compose: compose, permInverse: permInverse, permEqual: permEqual,
    permCycles: permCycles, permToCycles: permToCycles, parseCycles: parseCycles, permParity: permParity,
    permOrder: permOrder, cycleType: cycleType,
    // groups
    Group: Group, Z: Z, U: U, D: D, S: S, A: A, Q8: Q8, V4: V4, product: product, fromPerms: fromPerms,
    fromTable: fromTable, checkAxioms: checkAxioms, isHomomorphism: isHomomorphism, kernel: kernel, image: image,
    ringZn: ringZn,
    // display helpers
    sup: sup, sub: subs, setList: setList, PALETTE: PALETTE, TINTS: TINTS, predictGate: predictGate,
    // widgets
    cayley: cayley, polygon: polygon, perm: perm, clock: clock, lattice: lattice, cosets: cosets,
    quotient: quotient, hom: hom, ring: ring, euclid: euclid, powmod: powmod, lattice2d: lattice2d,
    // drag helper, plane lattices, powers mod n (pure functions)
    dragPoints: dragPoints, dragHandle: dragHandle, snapPoint: snapPoint,
    latticeCoords: latticeCoords, latticeHas: latticeHas, latticeSame: latticeSame, latticeShortest: latticeShortest,
    latticeSecond: latticeSecond, latticeCompare: latticeCompare, latticeTurn: latticeTurn, powmodSteps: powmodSteps,
    h: h, svg: s, typeset: typeset
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = A308;
  else root.A308 = A308;
})(typeof window !== 'undefined' ? window : this);
