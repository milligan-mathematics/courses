/* Exact rationals, small-matrix linear algebra and a forgiving formula parser for the Pólya player.
   window.PM = { Q, parseRational, parseExpr, evalExpr, texExpr, LA, close }.
   Everything here is checked against SymPy by the test page (web/test_math.py). */
(function () {
  'use strict';

  // ---------- exact rationals (BigInt) ----------
  function babs(a) { return a < 0n ? -a : a; }
  function bgcd(a, b) { a = babs(a); b = babs(b); while (b) { var t = a % b; a = b; b = t; } return a; }

  function Q(n, d) {
    if (!(this instanceof Q)) return new Q(n, d);
    n = BigInt(n); d = d === undefined ? 1n : BigInt(d);
    if (d === 0n) throw new Error('division by zero');
    if (d < 0n) { n = -n; d = -d; }
    var g = bgcd(n, d) || 1n;
    this.n = n / g; this.d = d / g;
  }
  function q(x) {
    if (x instanceof Q) return x;
    if (typeof x === 'number') {
      if (!Number.isInteger(x)) throw new Error('not an integer: ' + x);
      return new Q(x);
    }
    if (typeof x === 'string') { var r = parseRational(x); if (!r) throw new Error('not a rational: ' + x); return r; }
    return new Q(x);
  }
  Q.prototype.add = function (o) { o = q(o); return new Q(this.n * o.d + o.n * this.d, this.d * o.d); };
  Q.prototype.sub = function (o) { o = q(o); return new Q(this.n * o.d - o.n * this.d, this.d * o.d); };
  Q.prototype.mul = function (o) { o = q(o); return new Q(this.n * o.n, this.d * o.d); };
  Q.prototype.div = function (o) { o = q(o); return new Q(this.n * o.d, this.d * o.n); };
  Q.prototype.neg = function () { return new Q(-this.n, this.d); };
  Q.prototype.isZero = function () { return this.n === 0n; };
  Q.prototype.sign = function () { return this.n > 0n ? 1 : this.n < 0n ? -1 : 0; };
  Q.prototype.cmp = function (o) { return this.sub(o).sign(); };
  Q.prototype.eq = function (o) { return this.cmp(o) === 0; };
  Q.prototype.lt = function (o) { return this.cmp(o) < 0; };
  Q.prototype.gt = function (o) { return this.cmp(o) > 0; };
  Q.prototype.isInt = function () { return this.d === 1n; };
  Q.prototype.toNumber = function () { return Number(this.n) / Number(this.d); };
  Q.prototype.toString = function () { return this.d === 1n ? String(this.n) : this.n + '/' + this.d; };
  Q.prototype.toTeX = function () {
    if (this.d === 1n) return String(this.n);
    return (this.n < 0n ? '-' : '') + '\\tfrac{' + babs(this.n) + '}{' + this.d + '}';
  };

  /** "3", "-2", "3/4", "-0.25", "1.5/2", "−2" (Unicode minus) -> Q, or null. */
  function parseRational(s) {
    s = String(s).replace(/[−–]/g, '-').replace(/\s+/g, '');
    var num = '([+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+))';
    var m = s.match(new RegExp('^' + num + '(?:/' + num + ')?$'));
    if (!m) return null;
    function dec(t) {
      var neg = t[0] === '-'; t = t.replace(/^[+-]/, '');
      var parts = t.split('.'), frac = parts[1] || '';
      return new Q((neg ? -1n : 1n) * BigInt((parts[0] || '0') + frac), 10n ** BigInt(frac.length));
    }
    var a = dec(m[1]);
    if (m[2] === undefined) return a;
    var b = dec(m[2]);
    return b.isZero() ? null : a.div(b);
  }

  // ---------- matrices of rationals ----------
  function mat(rows) { return rows.map(function (r) { return r.map(q); }); }
  function shape(M) { return [M.length, M[0].length]; }
  function eye(n) {
    var I = [];
    for (var i = 0; i < n; i++) { I.push([]); for (var j = 0; j < n; j++) I[i].push(new Q(i === j ? 1 : 0)); }
    return I;
  }
  function transpose(M) { M = mat(M); return M[0].map(function (_, j) { return M.map(function (r) { return r[j]; }); }); }
  function add(A, B) { A = mat(A); B = mat(B); return A.map(function (r, i) { return r.map(function (x, j) { return x.add(B[i][j]); }); }); }
  function sub(A, B) { A = mat(A); B = mat(B); return A.map(function (r, i) { return r.map(function (x, j) { return x.sub(B[i][j]); }); }); }
  function scale(c, A) { c = q(c); return mat(A).map(function (r) { return r.map(function (x) { return x.mul(c); }); }); }
  function mul(A, B) {
    A = mat(A); B = mat(B);
    if (A[0].length !== B.length) throw new Error('shapes do not match');
    return A.map(function (r) {
      return B[0].map(function (_, j) {
        return r.reduce(function (s, x, k) { return s.add(x.mul(B[k][j])); }, new Q(0));
      });
    });
  }
  function eq(A, B) {
    A = mat(A); B = mat(B);
    if (A.length !== B.length || A[0].length !== B[0].length) return false;
    return A.every(function (r, i) { return r.every(function (x, j) { return x.eq(B[i][j]); }); });
  }
  function isZero(A) { return mat(A).every(function (r) { return r.every(function (x) { return x.isZero(); }); }); }
  function trace(A) { A = mat(A); return A.reduce(function (s, r, i) { return s.add(r[i]); }, new Q(0)); }
  function isSquare(A) { return A.length === A[0].length; }
  function isSymmetric(A) { return isSquare(A) && eq(A, transpose(A)); }
  function entry(A, i, j) { return mat(A)[i - 1][j - 1]; }  // 1-based, like the notes

  /** Reduced row-echelon form: { R, pivots } (pivot columns, 0-based). */
  function rref(A) {
    var R = mat(A).map(function (r) { return r.slice(); });
    var m = R.length, n = R[0].length, pivots = [], row = 0;
    for (var col = 0; col < n && row < m; col++) {
      var p = -1;
      for (var i = row; i < m; i++) if (!R[i][col].isZero()) { p = i; break; }
      if (p < 0) continue;
      var t = R[p]; R[p] = R[row]; R[row] = t;
      var lead = R[row][col];
      R[row] = R[row].map(function (x) { return x.div(lead); });
      for (i = 0; i < m; i++) {
        if (i === row || R[i][col].isZero()) continue;
        var f = R[i][col];
        R[i] = R[i].map(function (x, j) { return x.sub(f.mul(R[row][j])); });
      }
      pivots.push(col); row++;
    }
    return { R: R, pivots: pivots };
  }
  function rank(A) { return rref(A).pivots.length; }
  function nullity(A) { return A[0].length - rank(A); }
  function det(A) {
    var M = mat(A).map(function (r) { return r.slice(); });
    if (!isSquare(M)) throw new Error('det needs a square matrix');
    var n = M.length, d = new Q(1);
    for (var c = 0; c < n; c++) {
      var p = -1;
      for (var i = c; i < n; i++) if (!M[i][c].isZero()) { p = i; break; }
      if (p < 0) return new Q(0);
      if (p !== c) { var t = M[p]; M[p] = M[c]; M[c] = t; d = d.neg(); }
      d = d.mul(M[c][c]);
      for (i = c + 1; i < n; i++) {
        var f = M[i][c].div(M[c][c]);
        if (f.isZero()) continue;
        M[i] = M[i].map(function (x, j) { return x.sub(f.mul(M[c][j])); });
      }
    }
    return d;
  }
  function inv(A) {
    A = mat(A);
    var n = A.length, aug = A.map(function (r, i) { return r.concat(eye(n)[i]); });
    var res = rref(aug);
    if (res.pivots.slice(0, n).join() !== Array.from({ length: n }, function (_, i) { return i; }).join()) return null;
    return res.R.map(function (r) { return r.slice(n); });
  }
  function isInvertible(A) { return isSquare(A) && !det(A).isZero(); }
  function isOrthogonal(A) { return isSquare(A) && eq(mul(transpose(A), A), eye(A.length)); }
  function dot(u, v) { u = flat(u); v = flat(v); return u.reduce(function (s, x, i) { return s.add(x.mul(v[i])); }, new Q(0)); }
  function flat(v) { return mat(Array.isArray(v[0]) ? v : v.map(function (x) { return [x]; })).map(function (r) { return r[0]; }); }
  function inColumnSpace(A, b) { return rank(A) === rank(mat(A).map(function (r, i) { return r.concat([flat(b)[i]]); })); }
  function diffCount(A, B) {
    A = mat(A); B = mat(B);
    return A.reduce(function (s, r, i) { return s + r.filter(function (x, j) { return !x.eq(B[i][j]); }).length; }, 0);
  }

  // ---------- polynomials: arrays of Q, p[i] = coefficient of x^i ----------
  function ptrim(p) { p = p.slice(); while (p.length > 1 && p[p.length - 1].isZero()) p.pop(); return p; }
  function pdeg(p) { p = ptrim(p); return p.length === 1 && p[0].isZero() ? -1 : p.length - 1; }
  function peval(p, x) { x = q(x); var s = new Q(0); for (var i = p.length - 1; i >= 0; i--) s = s.mul(x).add(p[i]); return s; }
  function pderiv(p) { return p.length < 2 ? [new Q(0)] : p.slice(1).map(function (c, i) { return c.mul(i + 1); }); }
  function pdivmod(a, b) {
    a = ptrim(a); b = ptrim(b);
    var db = pdeg(b); if (db < 0) throw new Error('divide by zero polynomial');
    var out = [], r = a.slice();
    for (var i = 0; i <= pdeg(a) - db; i++) out.push(new Q(0));
    while (pdeg(r) >= db && pdeg(r) >= 0) {
      var k = pdeg(r) - db, c = r[pdeg(r)].div(b[db]);
      out[k] = c;
      for (var j = 0; j <= db; j++) r[j + k] = r[j + k].sub(c.mul(b[j]));
      r = ptrim(r);
    }
    return { q: out.length ? out : [new Q(0)], r: r };
  }
  function pmonic(p) { p = ptrim(p); var l = p[p.length - 1]; return p.map(function (c) { return c.div(l); }); }
  function pgcd(a, b) {
    a = ptrim(a); b = ptrim(b);
    while (pdeg(b) >= 0) { var r = pdivmod(a, b).r; a = b; b = r; }
    return pmonic(a);
  }
  /** det(xI - A), by Faddeev-LeVerrier. */
  function charpoly(A) {
    A = mat(A); var n = A.length, c = []; for (var i = 0; i <= n; i++) c.push(new Q(0));
    c[n] = new Q(1);
    var Mk = A.map(function (r) { return r.map(function () { return new Q(0); }); });
    for (var k = 1; k <= n; k++) {
      Mk = add(mul(A, Mk), scale(c[n - k + 1], eye(n)));
      c[n - k] = trace(mul(A, Mk)).neg().div(k);
    }
    return c;
  }
  function divisors(n) {
    n = babs(n); var out = [];
    for (var d = 1n; d * d <= n; d++) if (n % d === 0n) { out.push(d); if (d * d !== n) out.push(n / d); }
    return out;
  }
  /** Distinct rational roots of p. */
  function rationalRoots(p) {
    p = ptrim(p);
    if (pdeg(p) <= 0) return [];
    var L = p.reduce(function (l, c) { return l * c.d / bgcd(l, c.d); }, 1n);
    var a = p.map(function (c) { return c.n * (L / c.d); });
    var roots = [];
    if (a[0] === 0n) { roots.push(new Q(0)); while (a.length > 1 && a[0] === 0n) a.shift(); }
    if (a.length > 1) {
      divisors(a[0]).forEach(function (u) {
        divisors(a[a.length - 1]).forEach(function (v) {
          [new Q(u, v), new Q(-u, v)].forEach(function (r) {
            if (peval(p, r).isZero() && !roots.some(function (s) { return s.eq(r); })) roots.push(r);
          });
        });
      });
    }
    return roots.sort(function (x, y) { return x.cmp(y); });
  }
  function rootMult(p, r) {
    var m = 0, lin = [q(r).neg(), new Q(1)];
    p = ptrim(p);
    while (pdeg(p) > 0 && peval(p, r).isZero()) { p = pdivmod(p, lin).q; m++; }
    return m;
  }
  function geoMult(A, lam) { return A.length - rank(sub(A, scale(lam, eye(A.length)))); }
  function algMult(A, lam) { return rootMult(charpoly(A), lam); }
  function hasEigenvalue(A, lam) { return det(sub(A, scale(lam, eye(A.length)))).isZero(); }
  /** Rational eigenvalues with multiplicities: [{ value, alg, geo }]. */
  function eigenvalues(A) {
    var p = charpoly(A);
    return rationalRoots(p).map(function (r) { return { value: r, alg: rootMult(p, r), geo: geoMult(A, r) }; });
  }
  function disc2(p) { var a = p[2], b = p[1], c = p[0]; return b.mul(b).sub(a.mul(c).mul(4)); }
  function disc3(p) {  // a x^3 + b x^2 + c x + d
    var a = p[3], b = p[2], c = p[1], d = p[0];
    return b.mul(b).mul(c).mul(c).sub(a.mul(c).mul(c).mul(c).mul(4)).sub(b.mul(b).mul(b).mul(d).mul(4))
      .sub(a.mul(a).mul(d).mul(d).mul(27)).add(a.mul(b).mul(c).mul(d).mul(18));
  }
  /** Number of distinct real eigenvalues (exact for n <= 3, and for any n when all roots are rational). */
  function realEigenvalueCount(A) {
    var p = charpoly(A), roots = rationalRoots(p), rest = p;
    roots.forEach(function (r) { var m = rootMult(p, r); for (var i = 0; i < m; i++) rest = pdivmod(rest, [r.neg(), new Q(1)]).q; });
    var d = pdeg(rest);
    if (d <= 0) return roots.length;
    if (d === 2) return roots.length + (disc2(rest).sign() > 0 ? 2 : 0);
    if (d === 3) return roots.length + (disc3(rest).sign() > 0 ? 3 : 1);
    throw new Error('only matrices up to 3x3 with irrational eigenvalues are supported');
  }
  /** Diagonalizable over the reals (exact for n <= 3, and for any n when all eigenvalues are rational). */
  function diagonalizable(A) {
    A = mat(A); var p = charpoly(A), roots = rationalRoots(p), rest = p, ok = true;
    roots.forEach(function (r) {
      var m = rootMult(p, r);
      if (geoMult(A, r) !== m) ok = false;
      for (var i = 0; i < m; i++) rest = pdivmod(rest, [r.neg(), new Q(1)]).q;
    });
    if (!ok) return false;
    var d = pdeg(rest);
    if (d <= 0) return true;
    if (d === 2) return disc2(rest).sign() > 0;
    if (d === 3) return disc3(rest).sign() > 0;
    throw new Error('only matrices up to 3x3 with irrational eigenvalues are supported');
  }

  var LA = {
    Q: q, mat: mat, shape: shape, eye: eye, transpose: transpose, add: add, sub: sub, scale: scale, mul: mul, eq: eq,
    isZero: isZero, trace: trace, isSquare: isSquare, isSymmetric: isSymmetric, entry: entry, rref: rref, rank: rank,
    nullity: nullity, det: det, inv: inv, isInvertible: isInvertible, isOrthogonal: isOrthogonal, dot: dot, flat: flat,
    inColumnSpace: inColumnSpace, diffCount: diffCount, charpoly: charpoly, rationalRoots: rationalRoots,
    geoMult: geoMult, algMult: algMult, hasEigenvalue: hasEigenvalue, eigenvalues: eigenvalues,
    realEigenvalueCount: realEigenvalueCount, diagonalizable: diagonalizable,
    peval: peval, pgcd: pgcd, pdeg: pdeg
  };

  // ---------- formulas ----------
  var FUNCS = { sqrt: Math.sqrt, exp: Math.exp, ln: Math.log, log: Math.log, sin: Math.sin, cos: Math.cos,
                tan: Math.tan, abs: Math.abs };
  var CONSTS = { pi: Math.PI, e: Math.E };

  function ParseError(msg) { this.message = msg; }

  var SUPERSCRIPT = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-' };

  /** The answer part of what a student typed: drops a leading "x =" (one name, maybe with a subscript or "(t)")
      and a trailing degree sign, so "x = 3", "x_1 = 3", "f(t) = 2e^t" and "45°" read as the answer itself. */
  function answerPart(src) {
    var s = String(src).replace(/\s*(°|degrees?)\s*$/i, '');
    var m = s.match(/^\s*[A-Za-zͰ-Ͽ][\w{}Ͱ-Ͽ']*\s*(\(\s*[A-Za-z]\s*\))?\s*=(?!=)([\s\S]*)$/);
    return m ? m[2] : s;
  }

  function tokenize(src, vars) {
    var s = String(src).replace(/[−–]/g, '-').replace(/[×·⋅]/g, '*').replace(/÷/g, '/')
      .replace(/π/g, 'pi').replace(/√/g, 'sqrt').replace(/\*\*/g, '^')
      .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+/g, function (m) { return '^(' + m.replace(/./g, function (c) { return SUPERSCRIPT[c]; }) + ')'; })
      .replace(/_\{(\w+)\}|_(\w+)/g, '$1$2');  // x_1, x_{12} -> x1, x12
    var names = Object.keys(FUNCS).concat(Object.keys(CONSTS), vars).sort(function (a, b) { return b.length - a.length; });
    var out = [], i = 0;
    while (i < s.length) {
      var ch = s[i];
      if (/\s/.test(ch)) { i++; continue; }
      var m = s.slice(i).match(/^(\d+(?:\.\d*)?|\.\d+)/);
      if (m) { out.push({ t: 'num', v: m[1] }); i += m[1].length; continue; }
      m = s.slice(i).match(/^[A-Za-z]+\d*/);
      if (m) {
        var word = m[0];
        if (vars.indexOf(word) >= 0) { out.push({ t: 'name', v: word }); i += word.length; continue; }
        var letters = word.match(/^[A-Za-z]+/)[0], k = 0;
        while (k < letters.length) {
          var hit = null;
          for (var n = 0; n < names.length; n++) if (letters.startsWith(names[n], k)) { hit = names[n]; break; }
          if (!hit) throw new ParseError('I don’t know the symbol “' + letters.slice(k) + '”.');
          out.push({ t: 'name', v: hit }); k += hit.length;
        }
        i += letters.length;
        if (word.length > letters.length) { out.push({ t: 'num', v: word.slice(letters.length) }); i += word.length - letters.length; }
        continue;
      }
      if ('+-*/^(),|'.indexOf(ch) >= 0) { out.push({ t: 'op', v: ch }); i++; continue; }
      if (ch === '[' || ch === '{') { out.push({ t: 'op', v: '(' }); i++; continue; }
      if (ch === ']' || ch === '}') { out.push({ t: 'op', v: ')' }); i++; continue; }
      if (ch === '=') throw new ParseError('Type just the answer, without “=”.');
      throw new ParseError('I can’t read “' + ch + '” here.');
    }
    return out;
  }

  function parseExpr(src, vars) {
    vars = vars || [];
    var toks = tokenize(src, vars), pos = 0, absDepth = 0;
    if (!toks.length) throw new ParseError('Type a formula first.');
    function peek() { return toks[pos]; }
    function isOp(t, v) { return t && t.t === 'op' && t.v === v; }
    function expect(v) {
      if (!isOp(peek(), v)) throw new ParseError(v === ')' ? 'Check your parentheses: a “)” is missing.' : 'Expected “' + v + '”.');
      pos++;
    }
    function startsPrimary(t) {
      return t && (t.t === 'num' || t.t === 'name' || isOp(t, '(') || (isOp(t, '|') && absDepth === 0));
    }
    function expr() {
      var a = term();
      while (isOp(peek(), '+') || isOp(peek(), '-')) {
        var op = toks[pos++].v; var b = term();
        a = { t: op === '+' ? 'add' : 'sub', a: a, b: b };
      }
      return a;
    }
    function term() {
      var a = unary();
      for (;;) {
        var t = peek();
        if (isOp(t, '*') || isOp(t, '/')) { pos++; var b = unary(); a = { t: t.v === '*' ? 'mul' : 'div', a: a, b: b }; }
        else if (startsPrimary(t)) { a = { t: 'mul', a: a, b: power(), implicit: true }; }
        else return a;
      }
    }
    function unary() {
      if (isOp(peek(), '-')) { pos++; return { t: 'neg', a: unary() }; }
      if (isOp(peek(), '+')) { pos++; return unary(); }
      return power();
    }
    function power() {
      var base = primary();
      if (isOp(peek(), '^')) { pos++; return { t: 'pow', a: base, b: unary() }; }
      return base;
    }
    function primary() {
      var t = peek();
      if (!t) throw new ParseError('Something is missing at the end.');
      if (t.t === 'num') { pos++; return { t: 'num', v: parseFloat(t.v), s: t.v }; }
      if (isOp(t, '(')) { pos++; var e = expr(); expect(')'); return { t: 'paren', a: e }; }
      if (isOp(t, '|')) {
        pos++; absDepth++; var inner = expr(); absDepth--;
        if (!isOp(peek(), '|')) throw new ParseError('Check your absolute value bars.');
        pos++; return { t: 'fn', n: 'abs', a: inner };
      }
      if (t.t === 'name') {
        pos++;
        if (FUNCS[t.v]) {
          if (isOp(peek(), '(')) { pos++; var arg = expr(); expect(')'); return { t: 'fn', n: t.v, a: arg }; }
          return { t: 'fn', n: t.v, a: power() };  // sqrt5, sqrt 5
        }
        if (vars.indexOf(t.v) >= 0) return { t: 'var', n: t.v };
        return { t: 'const', n: t.v };
      }
      if (isOp(t, ')')) throw new ParseError('Check your parentheses: there’s an extra “)”.');
      throw new ParseError('Something is missing before “' + t.v + '”.');
    }
    var tree = expr();
    if (pos < toks.length) throw new ParseError(isOp(peek(), ')') ? 'Check your parentheses: there’s an extra “)”.'
                                                                 : 'I can’t read the part starting at “' + peek().v + '”.');
    return tree;
  }

  function evalExpr(t, env) {
    env = env || {};
    switch (t.t) {
      case 'num': return t.v;
      case 'var': return env[t.n];
      case 'const': return CONSTS[t.n];
      case 'paren': return evalExpr(t.a, env);
      case 'neg': return -evalExpr(t.a, env);
      case 'add': return evalExpr(t.a, env) + evalExpr(t.b, env);
      case 'sub': return evalExpr(t.a, env) - evalExpr(t.b, env);
      case 'mul': return evalExpr(t.a, env) * evalExpr(t.b, env);
      case 'div': return evalExpr(t.a, env) / evalExpr(t.b, env);
      case 'pow': {
        var b = evalExpr(t.a, env), x = evalExpr(t.b, env);
        if (b < 0 && Number.isInteger(Math.round(x * 1e9) / 1e9)) return Math.pow(b, Math.round(x));
        return Math.pow(b, x);
      }
      case 'fn': return FUNCS[t.n](evalExpr(t.a, env));
    }
    throw new Error('bad node ' + t.t);
  }

  function texName(n) { var m = n.match(/^([A-Za-z]+)(\d+)$/); return m ? m[1] + '_{' + m[2] + '}' : (n.length > 1 ? '\\mathit{' + n + '}' : n); }
  function texExpr(t) {
    function wrap(x) { return '\\left(' + texExpr(x) + '\\right)'; }
    function isSum(x) { return x.t === 'add' || x.t === 'sub'; }
    function strip(x) { return x.t === 'paren' ? x.a : x; }
    switch (t.t) {
      case 'num': return t.s;
      case 'var': return texName(t.n);
      case 'const': return t.n === 'pi' ? '\\pi' : 'e';
      case 'paren': return wrap(t.a);
      case 'neg': return '-' + (isSum(strip(t.a)) ? wrap(strip(t.a)) : texExpr(t.a));
      case 'add': return texExpr(t.a) + '+' + texExpr(t.b);
      case 'sub': return texExpr(t.a) + '-' + (isSum(strip(t.b)) && t.b.t !== 'paren' ? wrap(t.b) : texExpr(t.b));
      case 'mul': {
        var a = isSum(t.a) ? wrap(t.a) : texExpr(t.a), b = isSum(t.b) ? wrap(t.b) : texExpr(t.b);
        var numNext = /^[\d.]/.test(b) || /^-/.test(b);
        return a + (numNext ? '\\cdot ' : t.implicit ? '' : '\\,') + b;
      }
      case 'div': return '\\frac{' + texExpr(strip(t.a)) + '}{' + texExpr(strip(t.b)) + '}';
      case 'pow': {
        var base = strip(t.a);
        var bt = (base.t === 'num' || base.t === 'var' || base.t === 'const') ? texExpr(base) : wrap(base);
        return '{' + bt + '}^{' + texExpr(strip(t.b)) + '}';
      }
      case 'fn':
        if (t.n === 'sqrt') return '\\sqrt{' + texExpr(strip(t.a)) + '}';
        if (t.n === 'abs') return '\\left|' + texExpr(strip(t.a)) + '\\right|';
        return '\\' + t.n + wrap(strip(t.a));
    }
    return '?';
  }

  function close(a, b) {
    if (!isFinite(a) || !isFinite(b)) return false;
    return Math.abs(a - b) <= 1e-9 + 1e-7 * Math.max(Math.abs(a), Math.abs(b));
  }

  window.PM = { Q: q, parseRational: parseRational, parseExpr: parseExpr, evalExpr: evalExpr, texExpr: texExpr, answerPart: answerPart,
                LA: LA, close: close, ParseError: ParseError };
})();
