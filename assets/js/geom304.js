/* MATH 304 - Modern Geometry: complex-plane drawing and direct-manipulation library.
 *
 * The 411 pages plot functions of a real variable; this course is about points
 * moving in C, so the primitive here is a *plane* you can grab things on rather
 * than a plot you can only watch.
 *
 * Two ideas carry most of the weight:
 *
 *   1. A complex number is a plain {x, y} object, and `null` means the point at
 *      infinity. Every operation below propagates null the way C+ says it should,
 *      so a page can hand a Mobius transformation its own pole without a guard.
 *
 *   2. A cline is a first-class value - {k:'c', c, r} or {k:'l', p, d} - and the
 *      image of a cline under any cline-preserving map is computed by sampling
 *      three points, mapping them, and running the unique-cline-through-three-
 *      points construction (Theorem 3.2.4). That one routine handles inversion,
 *      Mobius maps, reflections, and the line/circle swap at the pole for free,
 *      which is exactly the unification the chapter is arguing for.
 *
 * The widget chrome (.act, .mc, .proof-scaffold, .flaw-widget) comes from
 * math411.js, which the day layout loads first.
 */
(function () {
  'use strict';

  /* ================================================================== *
   * 1. Complex arithmetic. `null` is the point at infinity throughout.
   * ================================================================== */

  function c(x, y) { return { x: x, y: y === undefined ? 0 : y }; }

  function add(a, b) { if (!a || !b) return null; return c(a.x + b.x, a.y + b.y); }
  function sub(a, b) { if (!a || !b) return null; return c(a.x - b.x, a.y - b.y); }
  function mul(a, b) { if (!a || !b) return null; return c(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x); }
  function conj(a) { return a ? c(a.x, -a.y) : null; }
  function neg(a) { return a ? c(-a.x, -a.y) : null; }
  function scale(a, k) { return a ? c(a.x * k, a.y * k) : null; }
  function abs2(a) { return a ? a.x * a.x + a.y * a.y : Infinity; }
  function abs(a) { return a ? Math.sqrt(a.x * a.x + a.y * a.y) : Infinity; }
  function arg(a) { return a ? Math.atan2(a.y, a.x) : NaN; }

  // 1/z, with the two conventions of C+: 1/0 = infinity, 1/infinity = 0.
  function inv(a) {
    if (!a) return c(0, 0);
    var d = a.x * a.x + a.y * a.y;
    if (d === 0) return null;
    return c(a.x / d, -a.y / d);
  }

  function div(a, b) {
    if (!b) return c(0, 0);          // z / infinity = 0 for finite z
    if (!a) return null;             // infinity / w = infinity
    var d = b.x * b.x + b.y * b.y;
    if (d === 0) return null;        // z / 0 = infinity
    return c((a.x * b.x + a.y * b.y) / d, (a.y * b.x - a.x * b.y) / d);
  }

  function fromPolar(r, t) { return c(r * Math.cos(t), r * Math.sin(t)); }
  function expi(t) { return c(Math.cos(t), Math.sin(t)); }

  // Principal square root - needed wherever fixed points come from a quadratic.
  function sqrt(a) {
    if (!a) return null;
    var r = Math.sqrt(a.x * a.x + a.y * a.y);
    if (r === 0) return c(0, 0);
    var t = Math.atan2(a.y, a.x) / 2;
    var s = Math.sqrt(r);
    return c(s * Math.cos(t), s * Math.sin(t));
  }

  function dist(a, b) { return abs(sub(a, b)); }

  function near(a, b, tol) {
    tol = tol === undefined ? 1e-9 : tol;
    if (!a && !b) return true;
    if (!a || !b) return false;
    return Math.abs(a.x - b.x) < tol && Math.abs(a.y - b.y) < tol;
  }

  /* ================================================================== *
   * 2. Formatting - readouts print a lot of complex numbers.
   * ================================================================== */

  function num(v, d) {
    if (!isFinite(v)) return '∞';
    d = d === undefined ? 2 : d;
    var s = Number(v).toFixed(d);
    if (/^-0(\.0*)?$/.test(s)) s = s.slice(1);   // kill "-0.00"
    return s;
  }

  // Cartesian form, tidied: 3, -2i, 1 + 0.5i, rather than 3 + 0i.
  function str(z, d) {
    if (!z) return '∞';
    d = d === undefined ? 2 : d;
    var re = num(z.x, d), im = num(z.y, d);
    if (re === '∞' || im === '∞') return '∞';
    var reV = parseFloat(re), imV = parseFloat(im);
    // Round first, then decide: a real part that prints as 0.00 should be
    // dropped, not shown, or every readout drifts into "0.00 + 1.00i".
    if (imV === 0) return re;
    var mag = Math.abs(imV) === 1 ? '' : num(Math.abs(imV), d);
    if (reV === 0) return (imV < 0 ? '−' : '') + mag + 'i';
    return re + (imV < 0 ? ' − ' : ' + ') + mag + 'i';
  }

  function polarStr(z, d) {
    if (!z) return '∞';
    var r = abs(z), t = arg(z);
    return num(r, d === undefined ? 2 : d) + 'e^(' + num(t, 2) + 'i)';
  }

  // Radians as a readable multiple of pi when it is close to one.
  function angleStr(t) {
    if (!isFinite(t)) return '—';
    var deg = t * 180 / Math.PI;
    return num(deg, 1) + '°';
  }

  /* ================================================================== *
   * 3. Clines.
   *
   *   circle: {k:'c', c: center, r: radius}
   *   line:   {k:'l', p: a point on it, d: unit direction}
   * ================================================================== */

  function circle(center, r) { return { k: 'c', c: center, r: Math.abs(r) }; }

  function line(p, q) {
    var d = sub(q, p), L = abs(d);
    if (L < 1e-12) return null;
    return { k: 'l', p: p, d: scale(d, 1 / L) };
  }

  function lineDir(p, theta) { return { k: 'l', p: p, d: expi(theta) }; }

  // Signed area of the triangle z1 z2 z3, times two. Zero means collinear.
  function cross3(z1, z2, z3) {
    return (z2.x - z1.x) * (z3.y - z1.y) - (z2.y - z1.y) * (z3.x - z1.x);
  }

  /* The unique cline through three distinct points of C+ (Theorem 3.2.4).
   * If one point is infinity the answer is the line through the other two,
   * which is exactly what makes mapCline work across a pole. */
  function through3(z1, z2, z3) {
    var pts = [z1, z2, z3];
    var finite = pts.filter(function (z) { return !!z; });
    if (finite.length < 2) return null;
    if (finite.length === 2) return line(finite[0], finite[1]);

    var d = cross3(z1, z2, z3);
    var span = Math.max(dist(z1, z2), dist(z2, z3), dist(z1, z3));
    if (span < 1e-12) return null;
    // Collinear within tolerance, scaled to the size of the triangle so that a
    // huge nearly-straight arc is reported as the line it visually is.
    if (Math.abs(d) < 1e-9 * span * span) {
      var far = dist(z1, z2) >= dist(z1, z3) ? z2 : z3;
      return line(z1, far);
    }

    var a2 = abs2(z1), b2 = abs2(z2), c2 = abs2(z3);
    var ux = (a2 * (z2.y - z3.y) + b2 * (z3.y - z1.y) + c2 * (z1.y - z2.y)) / (2 * d);
    var uy = (a2 * (z3.x - z2.x) + b2 * (z1.x - z3.x) + c2 * (z2.x - z1.x)) / (2 * d);
    var ctr = c(ux, uy);
    return circle(ctr, dist(ctr, z1));
  }

  // Three well-separated points on a cline, for pushing it through a map.
  function samplePoints(cl, reach) {
    reach = reach || 10;
    if (!cl) return [];
    if (cl.k === 'c') {
      return [0, 2 * Math.PI / 3, 4 * Math.PI / 3].map(function (t) {
        return add(cl.c, fromPolar(cl.r, t));
      });
    }
    return [-reach, 0, reach].map(function (t) { return add(cl.p, scale(cl.d, t)); });
  }

  /* Image of a cline under any cline-preserving map T: C+ -> C+.
   * Sampling three points and rebuilding is exact for Mobius maps and
   * inversions (both send clines to clines), and it needs no case analysis
   * for "does this one pass through the center of inversion?" - if it does,
   * one sample lands on infinity and through3 hands back a line. */
  function mapCline(cl, T, reach) {
    var pts = samplePoints(cl, reach).map(T);
    return through3(pts[0], pts[1], pts[2]);
  }

  function onCline(cl, z, tol) {
    tol = tol || 1e-6;
    if (!cl || !z) return false;
    if (cl.k === 'c') return Math.abs(dist(cl.c, z) - cl.r) < tol;
    var v = sub(z, cl.p);
    return Math.abs(v.x * cl.d.y - v.y * cl.d.x) < tol;
  }

  /* ================================================================== *
   * 4. The transformations of Chapter 3.
   * ================================================================== */

  // Inversion in the circle centered z0 with radius r: r^2 / conj(z - z0) + z0.
  function invertIn(z, z0, r) {
    if (!z) return z0;
    var w = sub(z, z0);
    if (abs2(w) === 0) return null;
    return add(div(c(r * r, 0), conj(w)), z0);
  }

  // Reflection across the line through p with unit direction d.
  function reflectIn(z, ln) {
    if (!z) return null;
    var v = sub(z, ln.p);
    var dot = v.x * ln.d.x + v.y * ln.d.y;
    var proj = scale(ln.d, dot);
    return add(ln.p, sub(scale(proj, 2), v));
  }

  // Inversion in any cline - circle or line - as one map (Definition 3.2.3).
  function invertInCline(z, cl) {
    return cl.k === 'c' ? invertIn(z, cl.c, cl.r) : reflectIn(z, cl);
  }

  /* A Mobius transformation as a callable with its coefficients attached.
   * T(infinity) = a/c and T(-d/c) = infinity are built in. */
  function mobius(a, b, cc, d) {
    var T = function (z) {
      if (!z) return (abs2(cc) === 0) ? null : div(a, cc);
      var den = add(mul(cc, z), d);
      if (abs2(den) === 0) return null;
      return div(add(mul(a, z), b), den);
    };
    T.a = a; T.b = b; T.c = cc; T.d = d;
    T.det = sub(mul(a, d), mul(b, cc));
    T.inverse = function () { return mobius(neg(d), b, cc, neg(a)); };
    return T;
  }

  // The map sending z1 -> 1, z2 -> 0, z3 -> infinity, i.e. w |-> (w, z1; z2, z3).
  function crossRatioMap(z1, z2, z3) {
    return function (z) {
      if (!z) return div(sub(z1, z3), sub(z1, z2));
      var A = mul(sub(z, z2), sub(z1, z3));
      var B = mul(sub(z, z3), sub(z1, z2));
      return div(A, B);
    };
  }

  function crossRatio(z, z1, z2, z3) { return crossRatioMap(z1, z2, z3)(z); }

  /* Fixed points of a Mobius transformation (Theorem 3.4.6): solve cz^2 +
   * (d-a)z - b = 0. Returns an array of points of C+, with null for infinity. */
  function fixedPoints(T) {
    var a = T.a, b = T.b, cc = T.c, d = T.d;
    if (abs2(cc) < 1e-14) {
      // Affine: T(z) = (a/d) z + b/d. Infinity is always fixed.
      if (near(a, d, 1e-9)) return abs2(b) < 1e-14 ? 'all' : [null];
      return [div(b, sub(d, a)), null];      // az + b = dz
    }
    var B = sub(d, a);
    var disc = sqrt(add(mul(B, B), scale(mul(cc, b), 4)));
    var p = div(add(neg(B), disc), scale(cc, 2));
    var q = div(sub(neg(B), disc), scale(cc, 2));
    return near(p, q, 1e-7) ? [p] : [p, q];
  }

  /* Classify by the trace of the determinant-1 normalization (Section 3.5).
   * Returns 'identity' | 'parabolic' | 'elliptic' | 'hyperbolic' | 'loxodromic'. */
  function classify(T) {
    var det = T.det;
    if (abs2(det) < 1e-14) return 'degenerate';
    var s = inv(sqrt(det));
    var tr = mul(add(T.a, T.d), s);
    var tr2 = mul(tr, tr);                       // trace^2, and it is 4 for parabolic
    if (Math.abs(tr2.y) < 1e-6 && Math.abs(tr2.x - 4) < 1e-6) {
      var isId = near(T.b, c(0, 0), 1e-9) && near(T.c, c(0, 0), 1e-9) && near(T.a, T.d, 1e-9);
      return isId ? 'identity' : 'parabolic';
    }
    if (Math.abs(tr2.y) > 1e-6) return 'loxodromic';
    if (tr2.x >= 0 && tr2.x < 4) return 'elliptic';
    return 'hyperbolic';
  }

  /* The multiplier of the normal form (T(z)-p)/(T(z)-q) = m (z-p)/(z-q).
   * Found by feeding the normal form one convenient point rather than by
   * solving for it symbolically. */
  function multiplier(T, p, q) {
    if (!p || !q) return null;
    var probe = null;
    var candidates = [c(0, 0), c(1, 0), c(0, 1), c(2, 3), c(-1.7, 0.9), c(4, -2)];
    for (var i = 0; i < candidates.length; i++) {
      var z = candidates[i];
      if (near(z, p, 1e-6) || near(z, q, 1e-6)) continue;
      var w = T(z);
      if (!w) continue;
      var rhs = div(sub(z, p), sub(z, q));
      if (!rhs || abs2(rhs) < 1e-12) continue;
      var lhs = div(sub(w, p), sub(w, q));
      if (!lhs) continue;
      probe = div(lhs, rhs);
      break;
    }
    return probe;
  }

  // Type I clines of p and q go through both; type II clines have p and q
  // symmetric across them (Section 3.5). Both families are produced by pushing
  // the polar-coordinate system at 0 and infinity forward through S^-1.
  function typeClines(p, q, counts) {
    counts = counts || {};
    var nI = counts.typeI || 8, nII = counts.typeII || 6;
    var S = mobius(c(1, 0), neg(p), c(1, 0), neg(q));    // p -> 0, q -> infinity
    var Sinv = S.inverse();
    var out = { typeI: [], typeII: [] };
    var k, cl;
    for (k = 0; k < nI; k++) {
      cl = lineDir(c(0, 0), Math.PI * k / nI);            // line through the origin
      // Sample close in: S^-1 sends far-out points of the line to within
      // |q-p|/reach of q, and two samples crowding onto q make the
      // three-point construction numerically worthless.
      out.typeI.push(mapCline(cl, Sinv, 3));
    }
    for (k = 1; k <= nII; k++) {
      var rad = Math.pow(2.2, k - (nII + 1) / 2);         // circles centered at 0
      out.typeII.push(mapCline(circle(c(0, 0), rad), Sinv));
    }
    return out;
  }

  /* ================================================================== *
   * 4b. Two surfaces the plane has to borrow from.
   *
   * Chapter 1 asks what a "line" is on a sphere and inside a disk before it
   * has any machinery, and Section 3.3 puts the plane on a sphere. Both need
   * a little 3-D and the Poincare disk's geodesics, so they live here rather
   * than being retyped on three different day pages.
   * ================================================================== */

  function v3(x, y, z) { return { x: x, y: y, z: z }; }

  /* Orthographic projection of a point of R^3 onto the drawing plane, after a
   * yaw about the vertical axis and a pitch toward the viewer. Returns the
   * complex point to draw at plus a depth: positive is the near side, which is
   * what lets a page draw the far half of a great circle dashed. */
  function proj3(p, yaw, pitch) {
    var cy = Math.cos(yaw), sy = Math.sin(yaw);
    var x1 = p.x * cy + p.z * sy;
    var z1 = -p.x * sy + p.z * cy;
    var cp = Math.cos(pitch), sp = Math.sin(pitch);
    var y2 = p.y * cp - z1 * sp;
    var z2 = p.y * sp + z1 * cp;
    return { z: c(x1, y2), depth: z2 };
  }

  // Points of the great circle cut by the plane through the origin with the
  // given normal - the geodesics of the sphere (Section 1.3).
  function greatCircle(normal, n) {
    n = n || 160;
    var L = Math.sqrt(normal.x * normal.x + normal.y * normal.y + normal.z * normal.z);
    var nn = v3(normal.x / L, normal.y / L, normal.z / L);
    // Any vector not parallel to nn gives a first basis vector.
    var seed = Math.abs(nn.z) < 0.9 ? v3(0, 0, 1) : v3(1, 0, 0);
    var ux = nn.y * seed.z - nn.z * seed.y;
    var uy = nn.z * seed.x - nn.x * seed.z;
    var uz = nn.x * seed.y - nn.y * seed.x;
    var uL = Math.sqrt(ux * ux + uy * uy + uz * uz);
    var u = v3(ux / uL, uy / uL, uz / uL);
    var v = v3(nn.y * u.z - nn.z * u.y, nn.z * u.x - nn.x * u.z, nn.x * u.y - nn.y * u.x);
    var pts = [], i, t;
    for (i = 0; i <= n; i++) {
      t = 2 * Math.PI * i / n;
      pts.push(v3(Math.cos(t) * u.x + Math.sin(t) * v.x,
        Math.cos(t) * u.y + Math.sin(t) * v.y,
        Math.cos(t) * u.z + Math.sin(t) * v.z));
    }
    return pts;
  }

  // Stereographic projection from the north pole (Definition 3.3.3), and its
  // inverse. The north pole is the point at infinity.
  function stereo(p) {
    if (Math.abs(p.z - 1) < 1e-12) return null;
    return c(p.x / (1 - p.z), p.y / (1 - p.z));
  }

  function stereoInv(z) {
    if (!z) return v3(0, 0, 1);
    var d = z.x * z.x + z.y * z.y + 1;
    return v3(2 * z.x / d, 2 * z.y / d, (d - 2) / d);
  }

  /* The Poincare-disk geodesic joining the two boundary points at angles alpha
   * and beta: the cline through them orthogonal to the unit circle. A center w
   * is orthogonal exactly when Re(w * conj(b)) = 1 at each boundary point b,
   * which is two linear equations; when they are dependent the two boundary
   * points are antipodal and the geodesic is a diameter. */
  function diskGeodesic(alpha, beta) {
    var a1 = Math.cos(alpha), a2 = Math.sin(alpha);
    var b1 = Math.cos(beta), b2 = Math.sin(beta);
    var det = a1 * b2 - a2 * b1;
    if (Math.abs(det) < 1e-9) return line(expi(alpha), expi(beta));
    var wx = (b2 - a2) / det;
    var wy = (a1 - b1) / det;
    var w = c(wx, wy);
    var rr = abs2(w) - 1;
    if (rr <= 0) return line(expi(alpha), expi(beta));
    return circle(w, Math.sqrt(rr));
  }

  /* ================================================================== *
   * 5. The plane widget.
   * ================================================================== */

  var COLORS = {
    ink: '#2b2f33',
    grid: '#e8eaed',
    axis: '#aeb4ba',
    blue: '#009CDE',      // Stoele blue   - the input / the thing you drag
    orange: '#F36E24',    // Milligan      - the output / the image
    green: '#008552',     // Anglin field  - the structure, circle of inversion
    violet: '#8B5CF6',    // a third object
    muted: '#8a9199',
    red: '#D92B2B'
  };

  function el(ref) { return typeof ref === 'string' ? document.getElementById(ref) : ref; }

  /* plane(canvas, opts)
   *
   *   opts.span     world width of the view (default 8)
   *   opts.center   complex number at the middle of the view (default 0)
   *   opts.height   CSS pixel height (default 380)
   *   opts.draw     function(P) called on every repaint - do all drawing here
   *   opts.handles  [{name, z, color, label, constrain, fixed}]
   *   opts.onDrag   function(P, handle) after a handle moves
   */
  function plane(canvas, opts) {
    canvas = el(canvas);
    if (!canvas) return null;
    var o = opts || {};

    var P = {
      canvas: canvas,
      ctx: canvas.getContext('2d'),
      span: o.span || 8,
      center: o.center || c(0, 0),
      height: o.height || 380,
      colors: COLORS,
      handles: [],
      _drag: null
    };

    (o.handles || []).forEach(function (h) {
      P.handles.push({
        name: h.name,
        z: c(h.z.x, h.z.y),
        home: c(h.z.x, h.z.y),
        color: h.color || COLORS.blue,
        label: h.label || h.name,
        r: h.r || 6,
        fixed: !!h.fixed,
        constrain: h.constrain || null
      });
    });

    P.handle = function (name) {
      for (var i = 0; i < P.handles.length; i++) if (P.handles[i].name === name) return P.handles[i];
      return null;
    };
    P.get = function (name) { var h = P.handle(name); return h ? h.z : null; };
    P.set = function (name, z) { var h = P.handle(name); if (h) h.z = c(z.x, z.y); };

    /* ---- sizing: a fresh backing store at device resolution each resize ---- */
    function resize() {
      var ratio = window.devicePixelRatio || 1;
      var w = canvas.clientWidth || canvas.parentNode.clientWidth || 640;
      canvas.style.height = P.height + 'px';
      canvas.width = Math.round(w * ratio);
      canvas.height = Math.round(P.height * ratio);
      P.ctx = canvas.getContext('2d');
      P.ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      P.w = w;
      P.h = P.height;
      P.scale = P.w / P.span;
    }
    P.resize = resize;

    /* ---- world <-> screen ---- */
    P.sx = function (z) { return P.w / 2 + (z.x - P.center.x) * P.scale; };
    P.sy = function (z) { return P.h / 2 - (z.y - P.center.y) * P.scale; };
    P.toScreen = function (z) { return { x: P.sx(z), y: P.sy(z) }; };
    P.toWorld = function (px, py) {
      return c(P.center.x + (px - P.w / 2) / P.scale, P.center.y - (py - P.h / 2) / P.scale);
    };
    // World-coordinate bounds of the visible rectangle.
    P.bounds = function () {
      var hw = P.span / 2, hh = (P.h / P.scale) / 2;
      return { x0: P.center.x - hw, x1: P.center.x + hw, y0: P.center.y - hh, y1: P.center.y + hh };
    };
    P.reach = function () { var b = P.bounds(); return 3 * Math.max(b.x1 - b.x0, b.y1 - b.y0); };

    /* ---- primitives ---- */

    function stroke(style) {
      var ctx = P.ctx;
      ctx.strokeStyle = (style && style.color) || COLORS.ink;
      ctx.lineWidth = (style && style.width) || 1.6;
      ctx.setLineDash((style && style.dash) || []);
      ctx.globalAlpha = (style && style.alpha) !== undefined ? style.alpha : 1;
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;
    }

    P.clear = function () {
      P.ctx.clearRect(0, 0, P.w, P.h);
    };

    P.grid = function (step) {
      var b = P.bounds();
      step = step || niceStep(P.span);
      var ctx = P.ctx, x, y;
      ctx.beginPath();
      for (x = Math.ceil(b.x0 / step) * step; x <= b.x1; x += step) {
        ctx.moveTo(P.sx(c(x, 0)), 0); ctx.lineTo(P.sx(c(x, 0)), P.h);
      }
      for (y = Math.ceil(b.y0 / step) * step; y <= b.y1; y += step) {
        ctx.moveTo(0, P.sy(c(0, y))); ctx.lineTo(P.w, P.sy(c(0, y)));
      }
      stroke({ color: COLORS.grid, width: 1 });
    };

    P.axes = function (opt) {
      opt = opt || {};
      var b = P.bounds(), ctx = P.ctx;
      ctx.beginPath();
      ctx.moveTo(0, P.sy(c(0, 0))); ctx.lineTo(P.w, P.sy(c(0, 0)));
      ctx.moveTo(P.sx(c(0, 0)), 0); ctx.lineTo(P.sx(c(0, 0)), P.h);
      stroke({ color: COLORS.axis, width: 1.2 });

      if (opt.ticks === false) return;
      var step = opt.step || niceStep(P.span);
      ctx.fillStyle = COLORS.muted;
      ctx.font = '11px ui-sans-serif, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      var x;
      for (x = Math.ceil(b.x0 / step) * step; x <= b.x1; x += step) {
        if (Math.abs(x) < step / 4) continue;
        ctx.fillText(num(x, step < 1 ? 1 : 0), P.sx(c(x, 0)), P.sy(c(0, 0)) + 4);
      }
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      var y;
      for (y = Math.ceil(b.y0 / step) * step; y <= b.y1; y += step) {
        if (Math.abs(y) < step / 4) continue;
        ctx.fillText(num(y, step < 1 ? 1 : 0) + 'i', P.sx(c(0, 0)) - 5, P.sy(c(0, y)));
      }
    };

    P.dot = function (z, style) {
      if (!z) return;
      style = style || {};
      var ctx = P.ctx, s = P.toScreen(z), r = style.r || 5;
      ctx.beginPath();
      ctx.arc(s.x, s.y, r, 0, 2 * Math.PI);
      if (style.hollow) {
        ctx.fillStyle = '#fff';
        ctx.fill();
        stroke({ color: style.color || COLORS.ink, width: style.width || 2 });
      } else {
        ctx.fillStyle = style.color || COLORS.ink;
        ctx.globalAlpha = style.alpha === undefined ? 1 : style.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      if (style.label) P.label(z, style.label, style);
    };

    P.label = function (z, text, style) {
      if (!z) return;
      style = style || {};
      var ctx = P.ctx, s = P.toScreen(z);
      ctx.font = (style.size || 13) + 'px ' + (style.font || 'ui-sans-serif, system-ui, sans-serif');
      ctx.textAlign = style.align || 'left';
      ctx.textBaseline = style.baseline || 'bottom';
      var dx = style.dx === undefined ? 9 : style.dx;
      var dy = style.dy === undefined ? -8 : style.dy;
      if (style.halo !== false) {
        ctx.lineWidth = 3.5;
        ctx.strokeStyle = 'rgba(255,255,255,0.92)';
        ctx.strokeText(text, s.x + dx, s.y + dy);
      }
      ctx.fillStyle = style.labelColor || style.color || COLORS.ink;
      ctx.fillText(text, s.x + dx, s.y + dy);
    };

    P.seg = function (a, b, style) {
      if (!a || !b) return;
      var ctx = P.ctx;
      ctx.beginPath();
      ctx.moveTo(P.sx(a), P.sy(a));
      ctx.lineTo(P.sx(b), P.sy(b));
      stroke(style);
    };

    P.poly = function (pts, style) {
      var ctx = P.ctx, started = false;
      ctx.beginPath();
      pts.forEach(function (z) {
        if (!z) { started = false; return; }
        if (!started) { ctx.moveTo(P.sx(z), P.sy(z)); started = true; }
        else ctx.lineTo(P.sx(z), P.sy(z));
      });
      if (style && style.closed) ctx.closePath();
      if (style && style.fill) {
        ctx.fillStyle = style.fill;
        ctx.globalAlpha = style.fillAlpha === undefined ? 0.15 : style.fillAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      stroke(style);
    };

    P.circle = function (center, r, style) {
      if (!center || !isFinite(r)) return;
      var ctx = P.ctx;
      ctx.beginPath();
      ctx.arc(P.sx(center), P.sy(center), r * P.scale, 0, 2 * Math.PI);
      if (style && style.fill) {
        ctx.fillStyle = style.fill;
        ctx.globalAlpha = style.fillAlpha === undefined ? 0.1 : style.fillAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      stroke(style);
    };

    // Infinite line through p with direction d, clipped to the viewport.
    P.line = function (ln, style) {
      if (!ln) return;
      var t = P.reach();
      P.seg(add(ln.p, scale(ln.d, -t)), add(ln.p, scale(ln.d, t)), style);
    };

    /* Draw a cline without caring which kind it is - the whole point of the
     * word. A circle so large it has left the viewport is drawn as the line it
     * looks like, which keeps a map's image from vanishing near its pole. */
    P.cline = function (cl, style) {
      if (!cl) return;
      if (cl.k === 'l') return P.line(cl, style);
      if (cl.r * P.scale > 4e4) {
        var toC = sub(cl.c, P.center);
        var d = abs(toC) < 1e-9 ? c(1, 0) : scale(toC, 1 / abs(toC));
        var foot = add(cl.c, scale(d, -cl.r));
        return P.line({ k: 'l', p: foot, d: c(-d.y, d.x) }, style);
      }
      P.circle(cl.c, cl.r, style);
    };

    P.ray = function (from, through, style) {
      if (!from || !through) return;
      var d = sub(through, from), L = abs(d);
      if (L < 1e-12) return;
      P.seg(from, add(from, scale(d, P.reach() / L)), style);
    };

    P.arrow = function (from, to, style) {
      if (!from || !to) return;
      style = style || {};
      P.seg(from, to, style);
      var a = P.toScreen(from), b = P.toScreen(to);
      var ang = Math.atan2(b.y - a.y, b.x - a.x);
      var head = style.head || 9;
      var ctx = P.ctx;
      ctx.beginPath();
      ctx.moveTo(b.x, b.y);
      ctx.lineTo(b.x - head * Math.cos(ang - 0.4), b.y - head * Math.sin(ang - 0.4));
      ctx.lineTo(b.x - head * Math.cos(ang + 0.4), b.y - head * Math.sin(ang + 0.4));
      ctx.closePath();
      ctx.fillStyle = style.color || COLORS.ink;
      ctx.fill();
    };

    // Angle arc at `vertex`, swept from ray(vertex,a) to ray(vertex,b).
    P.angleArc = function (vertex, a, b, style) {
      style = style || {};
      var t1 = arg(sub(a, vertex)), t2 = arg(sub(b, vertex));
      var ctx = P.ctx;
      var rad = (style.rpx || 26);
      var s = P.toScreen(vertex);
      ctx.beginPath();
      ctx.arc(s.x, s.y, rad, -t1, -t2, t2 > t1);
      stroke(style);
      if (style.text) {
        var mid = (t1 + t2) / 2;
        ctx.font = '12px ui-sans-serif, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 3.5;
        ctx.strokeStyle = 'rgba(255,255,255,0.92)';
        ctx.strokeText(style.text, s.x + (rad + 14) * Math.cos(mid), s.y - (rad + 14) * Math.sin(mid));
        ctx.fillStyle = style.color || COLORS.ink;
        ctx.fillText(style.text, s.x + (rad + 14) * Math.cos(mid), s.y - (rad + 14) * Math.sin(mid));
      }
    };

    /* Parametric curve, optionally pushed through a map. Breaks the polyline
     * where the image runs off to infinity so a Mobius image doesn't get a
     * bogus chord straight across the picture. */
    P.curve = function (f, t0, t1, n, style) {
      n = n || 200;
      var pts = [], i, jumpAt = (style && style.jump) || 6 * P.span;
      var prev = null;
      for (i = 0; i <= n; i++) {
        var z = f(t0 + (t1 - t0) * i / n);
        if (!z || !isFinite(z.x) || !isFinite(z.y) || abs(z) > 1e5) { pts.push(null); prev = null; continue; }
        if (prev && dist(prev, z) > jumpAt) pts.push(null);
        pts.push(z);
        prev = z;
      }
      P.poly(pts, style);
    };

    /* The image of a Cartesian grid under a map - the single most useful
     * picture in Chapter 3, because it shows a transformation acting on
     * everything at once rather than on one marked point. */
    P.mapGrid = function (T, opt) {
      opt = opt || {};
      var b = P.bounds();
      var x0 = opt.x0 === undefined ? b.x0 : opt.x0;
      var x1 = opt.x1 === undefined ? b.x1 : opt.x1;
      var y0 = opt.y0 === undefined ? b.y0 : opt.y0;
      var y1 = opt.y1 === undefined ? b.y1 : opt.y1;
      var step = opt.step || niceStep(P.span);
      var n = opt.n || 160;
      var style = { color: opt.color || COLORS.grid, width: opt.width || 1.2, alpha: opt.alpha };
      var x, y;
      for (x = Math.ceil(x0 / step) * step; x <= x1 + 1e-9; x += step) {
        (function (xx) {
          P.curve(function (t) { return T(c(xx, t)); }, y0, y1, n, style);
        })(x);
      }
      for (y = Math.ceil(y0 / step) * step; y <= y1 + 1e-9; y += step) {
        (function (yy) {
          P.curve(function (t) { return T(c(t, yy)); }, x0, x1, n, style);
        })(y);
      }
    };

    /* ---- handles ---- */

    P.drawHandles = function () {
      P.handles.forEach(function (h) {
        if (h.hidden) return;
        var s = P.toScreen(h.z), ctx = P.ctx;
        ctx.beginPath();
        ctx.arc(s.x, s.y, h.r + 4, 0, 2 * Math.PI);
        ctx.fillStyle = h.color;
        ctx.globalAlpha = 0.18;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, h.r, 0, 2 * Math.PI);
        ctx.fillStyle = h.color;
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.6;
        ctx.stroke();
        if (h.label) P.label(h.z, h.label, { color: h.color, dx: 11, dy: -9 });
      });
    };

    P.reset = function () {
      P.handles.forEach(function (h) { h.z = c(h.home.x, h.home.y); });
      P.redraw();
    };

    /* ---- paint ---- */

    P.redraw = function () {
      P.clear();
      if (o.draw) o.draw(P);
      P.drawHandles();
    };

    /* ---- pointer dragging ---- */

    function localPoint(ev) {
      var rect = canvas.getBoundingClientRect();
      return { x: ev.clientX - rect.left, y: ev.clientY - rect.top };
    }

    function pick(pt) {
      var best = null, bestD = 16;   // px; generous, fingers are not styluses
      P.handles.forEach(function (h) {
        if (h.fixed || h.hidden) return;
        var s = P.toScreen(h.z);
        var d = Math.hypot(s.x - pt.x, s.y - pt.y);
        if (d < bestD) { bestD = d; best = h; }
      });
      return best;
    }

    canvas.addEventListener('pointerdown', function (ev) {
      var pt = localPoint(ev);
      var h = pick(pt);
      if (!h) return;
      P._drag = h;
      canvas.setPointerCapture(ev.pointerId);
      canvas.classList.add('dragging');
      ev.preventDefault();
    });

    canvas.addEventListener('pointermove', function (ev) {
      var pt = localPoint(ev);
      if (!P._drag) {
        canvas.classList.toggle('over-handle', !!pick(pt));
        return;
      }
      var z = P.toWorld(pt.x, pt.y);
      if (P._drag.constrain) z = P._drag.constrain(z, P);
      P._drag.z = z;
      // Repaint before the callback: a readout that reports something computed
      // during draw (a count, a hit test) would otherwise be one frame stale.
      P.redraw();
      if (o.onDrag) o.onDrag(P, P._drag);
      ev.preventDefault();
    });

    function endDrag(ev) {
      if (!P._drag) return;
      P._drag = null;
      canvas.classList.remove('dragging');
      if (ev && ev.pointerId !== undefined && canvas.hasPointerCapture(ev.pointerId)) {
        canvas.releasePointerCapture(ev.pointerId);
      }
    }
    canvas.addEventListener('pointerup', endDrag);
    canvas.addEventListener('pointercancel', endDrag);

    /* ---- go ---- */
    resize();
    P.redraw();

    // A registry of every live plane on the page. The browser test harness uses
    // it to find where the draggable handles currently are on screen, which is
    // the only way to actually exercise a drag from outside the page.
    (window.__g304planes = window.__g304planes || []).push(P);

    var t = null;
    window.addEventListener('resize', function () {
      clearTimeout(t);
      t = setTimeout(function () { resize(); P.redraw(); }, 120);
    });

    return P;
  }

  // A grid step that keeps roughly 8-16 lines across the view.
  function niceStep(span) {
    var raw = span / 10;
    var mag = Math.pow(10, Math.floor(Math.log10(raw)));
    var norm = raw / mag;
    var mult = norm < 1.5 ? 1 : norm < 3.5 ? 2 : norm < 7.5 ? 5 : 10;
    return mult * mag;
  }

  /* ================================================================== *
   * 6. Small conveniences for the day pages.
   * ================================================================== */

  // Wire a range input to a callback, firing once immediately.
  function slider(id, fn) {
    var input = el(id);
    if (!input) return null;
    var run = function () { fn(parseFloat(input.value), input); };
    input.addEventListener('input', run);
    run();
    return input;
  }

  // Wire a button.
  function button(id, fn) {
    var b = el(id);
    if (b) b.addEventListener('click', fn);
    return b;
  }

  // Write HTML into a readout and re-typeset any math inside it.
  function say(id, html) {
    var node = el(id);
    if (!node) return;
    node.innerHTML = html;
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([node]).catch(function () { /* no-op */ });
    }
  }

  // requestAnimationFrame loop with a stop handle.
  function animate(fn) {
    var id = null, t0 = performance.now(), running = true;
    function step(t) {
      if (!running) return;
      fn((t - t0) / 1000);
      id = requestAnimationFrame(step);
    }
    id = requestAnimationFrame(step);
    return {
      stop: function () { running = false; if (id) cancelAnimationFrame(id); },
      running: function () { return running; }
    };
  }

  window.G304 = {
    c: c, add: add, sub: sub, mul: mul, div: div, conj: conj, neg: neg, scale: scale,
    abs: abs, abs2: abs2, arg: arg, inv: inv, sqrt: sqrt, dist: dist, near: near,
    fromPolar: fromPolar, expi: expi,

    num: num, str: str, polarStr: polarStr, angleStr: angleStr,

    circle: circle, line: line, lineDir: lineDir, through3: through3,
    mapCline: mapCline, onCline: onCline, samplePoints: samplePoints,

    invertIn: invertIn, reflectIn: reflectIn, invertInCline: invertInCline,
    mobius: mobius, crossRatio: crossRatio, crossRatioMap: crossRatioMap,
    fixedPoints: fixedPoints, classify: classify, multiplier: multiplier,
    typeClines: typeClines,

    v3: v3, proj3: proj3, greatCircle: greatCircle,
    stereo: stereo, stereoInv: stereoInv, diskGeodesic: diskGeodesic,

    plane: plane, colors: COLORS, slider: slider, button: button, say: say, animate: animate
  };
})();
