/* Draggable figures for the Pólya player: window.PolyaExplore.mount(container, spec, onGoal) -> api.
   Kinds: circle-map (x on the unit circle and Ax), grid-map (a matrix acting on the grid), lines (a system with a
   parameter slider), fit-line (drag a line through data), project (closest point on a line), iterate (A^k v),
   phase (trajectories of x' = Ax). Plain SVG; every handle works by mouse, touch and arrow keys.
   Each api has set(state) and solve() so the browser test can reach the goal without dragging. */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg', uid = 0;
  var C = { x: '#009CDE', ax: '#F36E24', eig: '#008552', p: '#7A5195', grid: '#E4E4E8', axis: '#9A9AA2', ink: '#333' };

  function fmt(v, d) {
    d = d == null ? 2 : d;
    if (!isFinite(v)) return '—';
    var s = (Math.round(v * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d).replace(/\.?0+$/, '');
    if (s === '-0') s = '0';
    return s.replace(/^-/, '−');
  }
  function vec(v, d) { return '(' + fmt(v[0], d) + ', ' + fmt(v[1], d) + ')'; }
  function niceDir(v) {  // a direction as small integers when possible: (0.447, 0.894) -> (1, 2)
    var m = Math.max(Math.abs(v[0]), Math.abs(v[1]));
    if (m < 1e-12) return vec(v);
    var base = Math.abs(v[0]) > 1e-9 && Math.abs(v[1]) > 1e-9 ? Math.min(Math.abs(v[0]), Math.abs(v[1])) : m;
    for (var k = 1; k <= 8; k++) {
      var a = v[0] / base * k, b = v[1] / base * k;
      if (Math.abs(a - Math.round(a)) < 1e-6 && Math.abs(b - Math.round(b)) < 1e-6) {
        if (Math.round(a) <= 0 && Math.round(b) <= 0) { a = -a; b = -b; }
        return '(' + fmt(Math.round(a), 0) + ', ' + fmt(Math.round(b), 0) + ')';
      }
    }
    return vec(v);
  }
  function mv(A, v) { return [A[0][0] * v[0] + A[0][1] * v[1], A[1][0] * v[0] + A[1][1] * v[1]]; }
  function norm(v) { return Math.hypot(v[0], v[1]); }
  function unit(v) { var n = norm(v); return n < 1e-15 ? [0, 0] : [v[0] / n, v[1] / n]; }
  function angleBetween(u, v) {  // degrees in [0, 180]
    return Math.atan2(Math.abs(u[0] * v[1] - u[1] * v[0]), u[0] * v[0] + u[1] * v[1]) * 180 / Math.PI;
  }
  /** Real eigenpairs of a 2x2: [{ lambda, dir }] (one entry per distinct direction; [] if complex). */
  function eigen2(A) {
    var a = A[0][0], b = A[0][1], c = A[1][0], d = A[1][1], tr = a + d, dt = a * d - b * c, disc = tr * tr - 4 * dt;
    if (disc < -1e-12) return [];
    var r = Math.sqrt(Math.max(disc, 0)), lams = disc > 1e-12 ? [(tr + r) / 2, (tr - r) / 2] : [tr / 2];
    var out = [];
    lams.forEach(function (l) {
      var dirs;
      if (Math.abs(b) > 1e-12) dirs = [[b, l - a]];
      else if (Math.abs(c) > 1e-12) dirs = [[l - d, c]];
      else if (Math.abs(l - a) < 1e-12 && Math.abs(l - d) < 1e-12) dirs = [[1, 0], [0, 1]];  // scalar: every direction
      else dirs = [Math.abs(l - a) < 1e-12 ? [1, 0] : [0, 1]];
      dirs.forEach(function (v) { out.push({ lambda: l, dir: unit(v) }); });
    });
    return out;
  }
  function sym2top(S) {  // largest eigenvalue and its unit eigenvector for a symmetric 2x2
    var e = eigen2(S).sort(function (p, q) { return q.lambda - p.lambda; });
    return e[0];
  }

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function s(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  /** A plane: math window [x0,x1]x[y0,y1] drawn in a 400-wide viewBox. */
  function Plane(container, win, opts) {
    opts = opts || {};
    var W = 400, H = Math.round(opts.aspect ? W * opts.aspect : W * (win[3] - win[2]) / (win[1] - win[0]));
    var svg = s('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': opts.label || 'Interactive figure' });
    container.appendChild(svg);
    var id = 'pl' + (++uid);
    var defs = s('defs', {}, svg);
    var clip = s('clipPath', { id: id + 'c' }, defs); s('rect', { x: 0, y: 0, width: W, height: H }, clip);
    function X(x) { return (x - win[0]) / (win[1] - win[0]) * W; }
    function Y(y) { return H - (y - win[2]) / (win[3] - win[2]) * H; }
    var markers = {};
    function marker(color) {
      if (markers[color]) return markers[color];
      var mid = id + 'm' + Object.keys(markers).length;
      var m = s('marker', { id: mid, viewBox: '0 0 10 10', refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' }, defs);
      s('path', { d: 'M0,0 L10,5 L0,10 z', fill: color }, m);
      return (markers[color] = 'url(#' + mid + ')');
    }
    var grid = s('g', {}, svg);
    var step = opts.step || 1;
    if (opts.grid !== false) {
      for (var gx = Math.ceil(win[0] / step) * step; gx <= win[1] + 1e-9; gx += step)
        s('line', { x1: X(gx), x2: X(gx), y1: 0, y2: H, stroke: C.grid, 'stroke-width': 1 }, grid);
      for (var gy = Math.ceil(win[2] / step) * step; gy <= win[3] + 1e-9; gy += step)
        s('line', { x1: 0, x2: W, y1: Y(gy), y2: Y(gy), stroke: C.grid, 'stroke-width': 1 }, grid);
    }
    if (win[0] < 0 && win[1] > 0) s('line', { x1: X(0), x2: X(0), y1: 0, y2: H, stroke: C.axis, 'stroke-width': 1.2 }, grid);
    if (win[2] < 0 && win[3] > 0) s('line', { x1: 0, x2: W, y1: Y(0), y2: Y(0), stroke: C.axis, 'stroke-width': 1.2 }, grid);
    if (opts.xlabel) s('text', { x: W - 6, y: (win[2] < 0 && win[3] > 0 ? Y(0) : H) - 6, 'text-anchor': 'end', 'font-size': 13, fill: C.axis }, grid).textContent = opts.xlabel;
    if (opts.ylabel) s('text', { x: (win[0] < 0 && win[1] > 0 ? X(0) : 0) + 6, y: 14, 'font-size': 13, fill: C.axis }, grid).textContent = opts.ylabel;
    var layer = s('g', { 'clip-path': 'url(#' + id + 'c)' }, svg);
    var top = s('g', {}, svg);
    function toMath(evt) {
      var pt = svg.createSVGPoint(); pt.x = evt.clientX; pt.y = evt.clientY;
      var p = pt.matrixTransform(svg.getScreenCTM().inverse());
      return [win[0] + p.x / W * (win[1] - win[0]), win[2] + (H - p.y) / H * (win[3] - win[2])];
    }
    function arrow(g, from, to, color, width) {
      if (Math.hypot(X(to[0]) - X(from[0]), Y(to[1]) - Y(from[1])) < 3) return null;
      return s('line', { x1: X(from[0]), y1: Y(from[1]), x2: X(to[0]), y2: Y(to[1]), stroke: color,
                         'stroke-width': width || 3, 'marker-end': marker(color), 'stroke-linecap': 'round' }, g);
    }
    function fullLine(g, dir, color, attrs) {  // a line through the origin along dir, across the window
      var R = 2 * Math.max(Math.abs(win[0]), Math.abs(win[1]), Math.abs(win[2]), Math.abs(win[3]));
      var a = Object.assign({ x1: X(-R * dir[0]), y1: Y(-R * dir[1]), x2: X(R * dir[0]), y2: Y(R * dir[1]), stroke: color, 'stroke-width': 2 }, attrs || {});
      return s('line', a, g);
    }
    /** A draggable handle; onMove(mathPoint) on drag, onKey(dx, dy) on arrow keys. */
    function handle(color, label, onMove, onKey) {
      var g = s('g', { class: 'pl-handle', tabindex: 0, role: 'slider', 'aria-label': label }, top);
      s('circle', { r: 18, fill: 'transparent' }, g);
      s('circle', { class: 'pl-ring', r: 9, fill: '#fff', stroke: color, 'stroke-width': 3 }, g);
      g.addEventListener('pointerdown', function (e) {
        e.preventDefault(); g.setPointerCapture(e.pointerId); g.focus({ preventScroll: true });
        function move(ev) { onMove(toMath(ev)); }
        function up() { g.removeEventListener('pointermove', move); g.removeEventListener('pointerup', up); g.removeEventListener('pointercancel', up); }
        g.addEventListener('pointermove', move); g.addEventListener('pointerup', up); g.addEventListener('pointercancel', up);
      });
      g.addEventListener('keydown', function (e) {
        var k = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] }[e.key];
        if (k) { e.preventDefault(); onKey(k[0], k[1], e.shiftKey); }
      });
      return { g: g, at: function (p) { g.setAttribute('transform', 'translate(' + X(p[0]) + ',' + Y(p[1]) + ')'); } };
    }
    return { svg: svg, layer: layer, top: top, X: X, Y: Y, W: W, H: H, win: win, toMath: toMath, arrow: arrow,
             fullLine: fullLine, handle: handle, clear: function (g) { while (g.firstChild) g.removeChild(g.firstChild); } };
  }

  function readout(container) { var r = el('div', 'pl-readout'); r.setAttribute('aria-live', 'polite'); container.appendChild(r); return r; }
  function hint(container, text) { container.appendChild(el('p', 'pl-hint', text)); }

  // ---------- circle-map: drag x around the unit circle and watch Ax ----------
  function circleMap(box, spec, onGoal) {
    var A = spec.A, eig = eigen2(A);
    var top = sym2top([[A[0][0] * A[0][0] + A[1][0] * A[1][0], A[0][0] * A[0][1] + A[1][0] * A[1][1]],
                       [A[0][0] * A[0][1] + A[1][0] * A[1][1], A[0][1] * A[0][1] + A[1][1] * A[1][1]]]);
    var s1 = Math.sqrt(top.lambda), v1 = top.dir, v2 = [-v1[1], v1[0]], s2 = norm(mv(A, v2));
    var R = Math.max(1.3, Math.ceil(s1 * 1.15 * 2) / 2);
    hint(box, spec.hint || ('Drag the blue dot (or focus it and use the arrow keys). The blue arrow is x, a unit vector; '
      + 'the orange arrow is Ax. Faint orange dots trace where Ax has been.'));
    var P = Plane(box, [-R, R, -R, R], { step: R > 3 ? 1 : 0.5, label: 'x on the unit circle and its image Ax' });
    s('circle', { cx: P.X(0), cy: P.Y(0), r: P.X(1) - P.X(0), fill: 'none', stroke: C.axis, 'stroke-dasharray': '4 4' }, P.layer);
    var lines = s('g', {}, P.layer), trace = s('g', {}, P.layer), arrows = s('g', {}, P.layer);
    function drawImage() {  // the whole image of the unit circle (an ellipse)
      var pts = [];
      for (var i = 0; i <= 120; i++) { var t = i / 120 * 2 * Math.PI, w = mv(A, [Math.cos(t), Math.sin(t)]); pts.push(P.X(w[0]) + ',' + P.Y(w[1])); }
      s('polyline', { points: pts.join(' '), fill: 'none', stroke: C.ax, 'stroke-opacity': 0.4, 'stroke-width': 2 }, lines);
    }
    if (spec.show_image) drawImage();
    var out = readout(box), theta = spec.start != null ? spec.start * Math.PI / 180 : 0.35, seen = {}, found = [], done = false;
    var h = P.handle(C.x, 'Direction of x', function (p) { setTheta(Math.atan2(p[1], p[0])); },
                     function (dx, dy, big) { setTheta(theta + (dx || dy) * (big ? 10 : 1) * Math.PI / 180); });
    P.svg.addEventListener('pointerdown', function (e) { if (e.target === P.svg || e.target.tagName === 'line') setTheta(Math.atan2(P.toMath(e)[1], P.toMath(e)[0])); });
    function snapTarget(th) {
      var x = [Math.cos(th), Math.sin(th)];
      if (spec.goal === 'max' || spec.goal === 'min') {
        var v = spec.goal === 'max' ? v1 : v2;
        return angleBetween(x, v) < 3 || angleBetween(x, v) > 177 ? Math.atan2(v[1], v[0]) + (angleBetween(x, v) > 90 ? Math.PI : 0) : null;
      }
      for (var k = 0; k < eig.length; k++) {
        var a = angleBetween(x, eig[k].dir);
        if (a < 3 || a > 177) return Math.atan2(eig[k].dir[1], eig[k].dir[0]) + (a > 90 ? Math.PI : 0);
      }
      return null;
    }
    function setTheta(th) {
      var snapped = snapTarget(th);
      theta = snapped != null ? snapped : th;
      draw(snapped != null);
    }
    function draw(snapped) {
      var x = [Math.cos(theta), Math.sin(theta)], y = mv(A, x);
      var key = Math.round(((theta % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) * 180 / Math.PI / 2);
      if (!seen[key]) { seen[key] = 1; s('circle', { cx: P.X(y[0]), cy: P.Y(y[1]), r: 2.2, fill: C.ax, 'fill-opacity': 0.45 }, trace); }
      P.clear(arrows);
      P.arrow(arrows, [0, 0], y, C.ax, 3.5);
      P.arrow(arrows, [0, 0], x, C.x, 3);
      h.at(x);
      var ang = angleBetween(x, y), len = norm(y);
      out.innerHTML = spec.quiet ? 'angle between x and Ax = ' + (len > 1e-9 ? fmt(ang, 0) + '&deg;' : '—')
        : 'x = ' + vec(x) + ' &nbsp; Ax = ' + vec(y) + '<br>length of Ax = ' + fmt(len)
          + (len > 1e-9 ? ' &nbsp; angle between x and Ax = ' + fmt(ang, 0) + '&deg;' : '');
      if (!snapped || done) return;
      if (spec.goal === 'max' || spec.goal === 'min') {
        done = true;
        P.fullLine(lines, x, C.eig, { 'stroke-dasharray': '6 4' });
        if (!spec.show_image) drawImage();
        onGoal({ stretch: fmt(len), dir: niceDir(x), image: vec(y) });
        return;
      }
      var lam = len < 1e-9 ? 0 : (x[0] * y[0] + x[1] * y[1]);
      if (found.some(function (f) { var a = angleBetween(f, x); return a < 5 || a > 175; })) return;
      found.push(x);
      P.fullLine(lines, x, C.eig, { 'stroke-dasharray': '6 4' });
      if (!spec.quiet) {
        var lab = s('text', { x: P.X(x[0] * R * 0.8) + 6, y: P.Y(x[1] * R * 0.8) - 6, fill: C.eig, 'font-size': 14, 'font-weight': 'bold' }, lines);
        lab.textContent = 'λ = ' + fmt(lam);
      }
      if (spec.goal === 'eigen' && found.length >= (spec.need || 1)) {
        done = true;
        onGoal({ lambda: fmt(lam), dir: niceDir(x), count: found.length });
      }
    }
    draw(false);
    return {
      set: function (st) { if (st.theta != null) setTheta(st.theta * Math.PI / 180); },
      solve: function () {
        if (spec.goal === 'max' || spec.goal === 'min') { var v = spec.goal === 'max' ? v1 : v2; setTheta(Math.atan2(v[1], v[0])); return; }
        eig.forEach(function (e) { if (!done) setTheta(Math.atan2(e.dir[1], e.dir[0])); });
      },
      found: function () { return found.length; }
    };
  }

  // ---------- grid-map: what a matrix does to the grid; drag the columns ----------
  function gridMap(box, spec, onGoal) {
    var R = spec.window || 4, st = spec.step || 1, A = (spec.A || [[1, 0], [0, 1]]).map(function (r) { return r.slice(); });
    hint(box, spec.hint || ('Drag the blue and purple dots: they are where e₁ and e₂ land, the columns of A. '
      + 'The shaded shape is where the unit square lands.'));
    var P = Plane(box, [-R, R, -R, R], { step: 1, label: 'A grid transformed by a matrix' });
    var g = s('g', {}, P.layer), probesG = s('g', {}, P.layer), out = readout(box), done = false;
    var h1 = P.handle(C.x, 'Image of e1 (first column)', function (p) { setCol(0, p); }, function (dx, dy) { setCol(0, [A[0][0] + dx * st, A[1][0] + dy * st]); });
    var h2 = P.handle(C.p, 'Image of e2 (second column)', function (p) { setCol(1, p); }, function (dx, dy) { setCol(1, [A[0][1] + dx * st, A[1][1] + dy * st]); });
    if (spec.drag === false) { h1.g.style.display = 'none'; h2.g.style.display = 'none'; }
    function snap(v) { return Math.max(-R, Math.min(R, Math.round(v / st) * st)); }
    function setCol(j, p) { A[0][j] = snap(p[0]); A[1][j] = snap(p[1]); draw(); }
    function det() { return A[0][0] * A[1][1] - A[0][1] * A[1][0]; }
    function draw() {
      P.clear(g); P.clear(probesG);
      var N = R * 3;
      for (var i = -N; i <= N; i++) {
        var a = mv(A, [i, -N]), b = mv(A, [i, N]), c = mv(A, [-N, i]), d = mv(A, [N, i]);
        s('line', { x1: P.X(a[0]), y1: P.Y(a[1]), x2: P.X(b[0]), y2: P.Y(b[1]), stroke: '#C9DDEB', 'stroke-width': 1 }, g);
        s('line', { x1: P.X(c[0]), y1: P.Y(c[1]), x2: P.X(d[0]), y2: P.Y(d[1]), stroke: '#C9DDEB', 'stroke-width': 1 }, g);
      }
      var sq = [[0, 0], [1, 0], [1, 1], [0, 1]].map(function (v) { var w = mv(A, v); return P.X(w[0]) + ',' + P.Y(w[1]); });
      var dt = det();
      s('polygon', { points: sq.join(' '), fill: dt < 0 ? C.p : C.ax, 'fill-opacity': 0.28, stroke: dt < 0 ? C.p : C.ax, 'stroke-width': 1.5 }, g);
      P.arrow(g, [0, 0], [A[0][0], A[1][0]], C.x, 3);
      P.arrow(g, [0, 0], [A[0][1], A[1][1]], C.p, 3);
      h1.at([A[0][0], A[1][0]]); h2.at([A[0][1], A[1][1]]);
      var hits = 0;
      (spec.probes || []).forEach(function (pr) {
        var w = mv(A, pr.v), ok = Math.hypot(w[0] - pr.target[0], w[1] - pr.target[1]) < 1e-9;
        if (ok) hits++;
        s('circle', { cx: P.X(pr.target[0]), cy: P.Y(pr.target[1]), r: 11, fill: 'none', stroke: C.eig, 'stroke-width': 2, 'stroke-dasharray': '4 3' }, probesG);
        P.arrow(probesG, [0, 0], pr.v, '#999', 2);
        P.arrow(probesG, [0, 0], w, C.eig, 3);
      });
      out.innerHTML = 'A = [ ' + fmt(A[0][0]) + '&nbsp;&nbsp;' + fmt(A[0][1]) + ' ; ' + fmt(A[1][0]) + '&nbsp;&nbsp;' + fmt(A[1][1]) + ' ]'
        + ' &nbsp; det A = ' + fmt(dt) + (dt === 0 ? ' (the square is squashed flat)' : dt < 0 ? ' (orientation flipped)' : '')
        + ((spec.probes || []).length ? '<br>' + hits + ' of ' + spec.probes.length + ' images on target' : '');
      if (done) return;
      var reached = spec.goal === 'match' ? A.every(function (r, i) { return r.every(function (x, j) { return Math.abs(x - spec.target[i][j]) < 1e-9; }); })
        : spec.goal === 'det-zero' ? dt === 0 && A.some(function (r) { return r.some(function (x) { return x !== 0; }); })
        : spec.goal === 'probes' ? hits === spec.probes.length
        : spec.goal === 'det' ? Math.abs(dt - spec.det) < 1e-9 : false;
      if (reached) { done = true; onGoal({ det: fmt(dt), a: fmt(A[0][0]), b: fmt(A[0][1]), c: fmt(A[1][0]), d: fmt(A[1][1]) }); }
    }
    draw();
    return {
      set: function (o) { if (o.A) { A = o.A.map(function (r) { return r.slice(); }); draw(); } },
      solve: function () {
        if (spec.goal === 'det-zero') { A = [[1, 2], [1, 2]]; }
        else if (spec.goal === 'match' || spec.goal === 'probes' || spec.goal === 'det') { A = (spec.target || spec.solution).map(function (r) { return r.slice(); }); }
        draw();
      }
    };
  }

  // ---------- lines: a 2-unknown system with a parameter slider ----------
  function linesWidget(box, spec, onGoal) {
    var R = spec.window || 6, par = spec.param, k = par.start, done = false;
    var names = spec.var_names || ['x', 'y'];
    var coef = spec.eqs.map(function (e) { return e.map(function (src) { return window.PM.parseExpr(String(src), [par.name]); }); });
    var colors = [C.x, C.ax, C.p];
    hint(box, spec.hint || ('Move the slider to change ' + par.name + ' and watch the lines.'));
    var P = Plane(box, [-R, R, -R, R], { step: 1, label: 'Lines of a system', xlabel: names[0], ylabel: names[1] });
    var g = s('g', {}, P.layer);
    var eqs = el('div', 'pl-readout'); box.appendChild(eqs);
    var ctl = el('div', 'pl-controls'), lab = el('label', null, ''), slider = document.createElement('input');
    slider.type = 'range'; slider.min = par.min; slider.max = par.max; slider.step = par.step; slider.value = k;
    slider.setAttribute('aria-label', par.name);
    lab.appendChild(document.createTextNode(par.name + ' = ')); var kv = el('strong', null, ''); lab.appendChild(kv);
    ctl.appendChild(slider); ctl.appendChild(lab); box.appendChild(ctl);
    var out = readout(box);
    slider.addEventListener('input', function () { k = parseFloat(slider.value); draw(); });
    function term(c, name, first) {
      if (Math.abs(c) < 1e-12) return '';
      var sign = c < 0 ? (first ? '−' : ' − ') : (first ? '' : ' + ');
      var a = Math.abs(c);
      return sign + (Math.abs(a - 1) < 1e-12 ? '' : fmt(a)) + '<i>' + name + '</i>';
    }
    function draw() {
      kv.textContent = fmt(k);
      P.clear(g);
      var rows = coef.map(function (e) { return e.map(function (t) { var o = {}; o[par.name] = k; return window.PM.evalExpr(t, o); }); });
      eqs.innerHTML = rows.map(function (r, i) {
        var lhs = term(r[0], names[0], true) + term(r[1], names[1], !term(r[0], names[0], true));
        return '<span style="color:' + colors[i] + '">' + (lhs || '0') + ' = ' + fmt(r[2]) + '</span>';
      }).join(' &nbsp; ');
      rows.forEach(function (r, i) {
        var a = r[0], b = r[1], c = r[2], p, q;
        if (Math.abs(a) < 1e-12 && Math.abs(b) < 1e-12) return;
        if (Math.abs(b) > Math.abs(a)) { p = [-2 * R, (c + 2 * R * a) / b]; q = [2 * R, (c - 2 * R * a) / b]; }
        else { p = [(c + 2 * R * b) / a, -2 * R]; q = [(c - 2 * R * b) / a, 2 * R]; }
        s('line', { x1: P.X(p[0]), y1: P.Y(p[1]), x2: P.X(q[0]), y2: P.Y(q[1]), stroke: colors[i], 'stroke-width': 3,
                    'stroke-opacity': 0.85, 'stroke-dasharray': i === 1 ? '9 5' : null }, g);
      });
      // classify by ranks (tolerant)
      var M = rows.map(function (r) { return r.slice(); }), rk = function (cols) {
        var m = M.map(function (r) { return cols.map(function (j) { return r[j]; }); }), rank = 0;
        for (var c = 0; c < cols.length && rank < m.length; c++) {
          var piv = -1, best = 1e-9;
          for (var i = rank; i < m.length; i++) if (Math.abs(m[i][c]) > best) { best = Math.abs(m[i][c]); piv = i; }
          if (piv < 0) continue;
          var t = m[piv]; m[piv] = m[rank]; m[rank] = t;
          for (i = 0; i < m.length; i++) if (i !== rank) { var f = m[i][c] / m[rank][c]; for (var j = 0; j < cols.length; j++) m[i][j] -= f * m[rank][j]; }
          rank++;
        }
        return rank;
      };
      var r1 = rk([0, 1]), r2 = rk([0, 1, 2]), status;
      if (r1 < r2) status = 'none';
      else if (r1 === 2) status = 'unique';
      else status = 'infinite';
      if (status === 'unique') {
        var a = rows[0], b = rows[1], D = a[0] * b[1] - a[1] * b[0];
        if (Math.abs(D) < 1e-12 && rows[2]) b = rows[2], D = a[0] * b[1] - a[1] * b[0];
        var xy = [(a[2] * b[1] - a[1] * b[2]) / D, (a[0] * b[2] - a[2] * b[0]) / D];
        s('circle', { cx: P.X(xy[0]), cy: P.Y(xy[1]), r: 6, fill: C.eig, stroke: '#fff', 'stroke-width': 2 }, g);
        out.innerHTML = '<strong>One solution:</strong> (' + names[0] + ', ' + names[1] + ') = ' + vec(xy);
      } else if (status === 'none') {
        out.innerHTML = '<strong>No solution:</strong> ' + (rows.length === 2 ? 'the lines are parallel and never meet.' : 'no point is on every line.');
      } else {
        out.innerHTML = '<strong>Infinitely many solutions:</strong> the equations describe the same line.';
      }
      if (!done && spec.goal && status === spec.goal) { done = true; onGoal({ k: fmt(k) }); }
    }
    draw();
    return {
      set: function (o) { if (o.k != null) { k = o.k; slider.value = k; draw(); } },
      solve: function () { k = spec.solution; slider.value = k; draw(); }
    };
  }

  // ---------- fit-line: drag a line through data, then compare with least squares ----------
  function fitLine(box, spec, onGoal) {
    var pts = spec.points, xs = pts.map(function (p) { return p[0]; }), ys = pts.map(function (p) { return p[1]; });
    var n = pts.length, sx = xs.reduce(function (a, b) { return a + b; }), sy = ys.reduce(function (a, b) { return a + b; });
    var sxx = xs.reduce(function (a, x) { return a + x * x; }, 0), sxy = pts.reduce(function (a, p) { return a + p[0] * p[1]; }, 0);
    var bm = (n * sxy - sx * sy) / (n * sxx - sx * sx), bb = (sy - bm * sx) / n;
    function sse(m, b) { return pts.reduce(function (a, p) { var r = p[1] - (m * p[0] + b); return a + r * r; }, 0); }
    var best = sse(bm, bb);
    var win = spec.window || (function () {
      var x0 = Math.min.apply(null, xs), x1 = Math.max.apply(null, xs), y0 = Math.min.apply(null, ys), y1 = Math.max.apply(null, ys);
      var px = (x1 - x0) * 0.15 || 1, py = (y1 - y0) * 0.25 || 1;
      return [Math.min(0, x0 - px), x1 + px, Math.min(0, y0 - py), y1 + py];
    })();
    var xL = win[0] + (win[1] - win[0]) * 0.12, xR = win[0] + (win[1] - win[0]) * 0.88;
    var yL = spec.start ? spec.start[0] : (win[2] + win[3]) / 2, yR = spec.start ? spec.start[1] : (win[2] + win[3]) / 2;
    hint(box, spec.hint || 'Drag the two dots to move the line. Orange segments are the errors; try to make the total of their squares as small as you can.');
    var P = Plane(box, win, { grid: false, aspect: 0.75, xlabel: spec.xlabel, ylabel: spec.ylabel, label: 'Data points and a line to fit' });
    var g = s('g', {}, P.layer), bestG = s('g', {}, P.layer), dots = s('g', {}, P.layer), out = readout(box), done = false;
    pts.forEach(function (p) { s('circle', { cx: P.X(p[0]), cy: P.Y(p[1]), r: 5, fill: C.ink }, dots); });
    var dy = (win[3] - win[2]) / 100;
    var hL = P.handle(C.x, 'Left end of your line', function (p) { yL = clampY(p[1]); draw(); }, function (a, b, big) { yL = clampY(yL + b * dy * (big ? 5 : 1)); draw(); });
    var hR = P.handle(C.x, 'Right end of your line', function (p) { yR = clampY(p[1]); draw(); }, function (a, b, big) { yR = clampY(yR + b * dy * (big ? 5 : 1)); draw(); });
    function clampY(y) { return Math.max(win[2], Math.min(win[3], y)); }
    function line(m, b, color, dash, gg) {
      s('line', { x1: P.X(win[0]), y1: P.Y(m * win[0] + b), x2: P.X(win[1]), y2: P.Y(m * win[1] + b), stroke: color, 'stroke-width': 3, 'stroke-dasharray': dash || null }, gg);
    }
    function draw() {
      P.clear(g);
      var m = (yR - yL) / (xR - xL), b = yL - m * xL, e = sse(m, b);
      pts.forEach(function (p) { s('line', { x1: P.X(p[0]), y1: P.Y(p[1]), x2: P.X(p[0]), y2: P.Y(m * p[0] + b), stroke: C.ax, 'stroke-width': 2.5 }, g); });
      line(m, b, C.x, null, g);
      hL.at([xL, yL]); hR.at([xR, yR]);
      out.innerHTML = 'Your line: y = ' + fmt(m, 3) + 'x ' + (b < 0 ? '− ' : '+ ') + fmt(Math.abs(b), 3)
        + '<br>Sum of squared errors: ' + fmt(e, 3) + (done ? ' &nbsp; (least squares: ' + fmt(best, 3) + ')' : '');
      if (!done && e <= best * 1.05 + 1e-9) {
        done = true;
        line(bm, bb, C.eig, '7 5', bestG);
        out.innerHTML += ' &nbsp; (least squares: ' + fmt(best, 3) + ')';
        onGoal({ m: fmt(m, 3), b: fmt(b, 3), sse: fmt(e, 3), best_m: fmt(bm, 3), best_b: fmt(bb, 3), best_sse: fmt(best, 3) });
      }
    }
    draw();
    return {
      set: function (o) { if (o.m != null) { yL = o.m * xL + o.b; yR = o.m * xR + o.b; draw(); } },
      solve: function () { yL = bm * xL + bb; yR = bm * xR + bb; draw(); }
    };
  }

  // ---------- project: the closest point to b on a line through the origin ----------
  function project(box, spec, onGoal) {
    var R = spec.window || 5, b = spec.b, u = unit(spec.u), tStar = b[0] * u[0] + b[1] * u[1], t = spec.start != null ? spec.start : tStar + 2.2;
    hint(box, spec.hint || 'Drag the purple dot along the line. The orange segment runs from it to b; make it as short as you can.');
    var P = Plane(box, [-R, R, -R, R], { step: 1, label: 'A point, a line, and the distance between them' });
    var g = s('g', {}, P.layer), out = readout(box), done = false;
    P.fullLine(g, u, '#AAA', { 'stroke-width': 2.5 });
    var dyn = s('g', {}, P.layer);
    var h = P.handle(C.p, 'Point on the line', function (p) { setT(p[0] * u[0] + p[1] * u[1]); }, function (dx, dy, big) { setT(t + (dx || dy) * (big ? 0.5 : 0.05)); });
    function setT(v) { t = Math.abs(v - tStar) < 0.06 * Math.max(1, Math.abs(tStar)) ? tStar : v; draw(); }
    function draw() {
      P.clear(dyn);
      var p = [t * u[0], t * u[1]], d = Math.hypot(b[0] - p[0], b[1] - p[1]);
      P.arrow(dyn, [0, 0], b, C.x, 3);
      s('text', { x: P.X(b[0]) + 8, y: P.Y(b[1]) - 6, fill: C.x, 'font-size': 15, 'font-weight': 'bold' }, dyn).textContent = spec.b_label || 'b';
      s('line', { x1: P.X(p[0]), y1: P.Y(p[1]), x2: P.X(b[0]), y2: P.Y(b[1]), stroke: C.ax, 'stroke-width': 3, 'stroke-dasharray': '6 4' }, dyn);
      var right = t === tStar;
      if (right && d > 1e-9) {
        var w = unit([b[0] - p[0], b[1] - p[1]]), sz = 0.28 * R / 5;
        var c1 = [p[0] + u[0] * sz, p[1] + u[1] * sz], c2 = [c1[0] + w[0] * sz, c1[1] + w[1] * sz], c3 = [p[0] + w[0] * sz, p[1] + w[1] * sz];
        s('polyline', { points: [c1, c2, c3].map(function (q) { return P.X(q[0]) + ',' + P.Y(q[1]); }).join(' '), fill: 'none', stroke: C.ink, 'stroke-width': 1.5 }, dyn);
      }
      h.at(p);
      out.innerHTML = 'point on the line = ' + vec(p) + ' &nbsp; distance to ' + (spec.b_label || 'b') + ' = ' + fmt(d, 3);
      if (!done && right) { done = true; onGoal({ px: fmt(p[0]), py: fmt(p[1]), point: vec(p), dist: fmt(d, 3) }); }
    }
    draw();
    return { set: function (o) { if (o.t != null) setT(o.t); }, solve: function () { setT(tStar); } };
  }

  // ---------- iterate: v, Av, A^2 v, ... ----------
  function iterate(box, spec, onGoal) {
    var A = spec.A, N = spec.n_max || 12, seq = [spec.v0.slice()], done = false, n = spec.start || 1;
    for (var i = 1; i <= N; i++) seq.push(mv(A, seq[i - 1]));
    var eig = eigen2(A).sort(function (p, q) { return Math.abs(q.lambda) - Math.abs(p.lambda); });
    hint(box, spec.hint || (spec.mode === 'sequence' ? 'Move the slider to compute more terms. Watch the ratio of each term to the one before.'
      : 'Move the slider to apply A again and again. The dots show the direction of each vector, scaled to length 1.'));
    var P, g;
    if (spec.mode === 'sequence') {
      P = Plane(box, [0, N + 1, 0, 1.08], { grid: false, aspect: 0.55, label: 'Bars for the terms of a sequence' });
    } else {
      P = Plane(box, [-1.4, 1.4, -1.4, 1.4], { step: 0.5, label: 'Directions of A to the k times v' });
      s('circle', { cx: P.X(0), cy: P.Y(0), r: P.X(1) - P.X(0), fill: 'none', stroke: C.axis, 'stroke-dasharray': '4 4' }, P.layer);
    }
    g = s('g', {}, P.layer);
    var ctl = el('div', 'pl-controls'), slider = document.createElement('input'), lab = el('label', null, '');
    slider.type = 'range'; slider.min = 1; slider.max = N; slider.step = 1; slider.value = n;
    slider.setAttribute('aria-label', 'Number of steps');
    var kv = el('strong', null, ''); lab.appendChild(document.createTextNode((spec.mode === 'sequence' ? 'terms: ' : 'k = '))); lab.appendChild(kv);
    ctl.appendChild(slider); ctl.appendChild(lab); box.appendChild(ctl);
    var out = readout(box);
    slider.addEventListener('input', function () { n = parseInt(slider.value, 10); draw(); });
    function draw() {
      kv.textContent = String(n);
      P.clear(g);
      if (spec.mode === 'sequence') {
        var terms = seq.slice(0, n + 1).map(function (v) { return v[0]; }), mx = Math.max.apply(null, terms.map(Math.abs)) || 1;
        terms.forEach(function (x, k) {
          var hgt = Math.abs(x) / mx;
          s('rect', { x: P.X(k + 0.6), y: P.Y(hgt), width: P.X(0.8) - P.X(0), height: P.Y(0) - P.Y(hgt), fill: C.x, 'fill-opacity': 0.8 }, g);
        });
        var last = terms[n], prev = terms[n - 1];
        out.innerHTML = (spec.term || 'x') + '<sub>' + (n + (spec.offset || 0)) + '</sub> = ' + fmt(last, 4)
          + ' &nbsp; ratio to the term before = ' + (Math.abs(prev) > 1e-12 ? fmt(last / prev, 4) : '—');
      } else {
        for (var k = 0; k <= n; k++) {
          var d = unit(seq[k]);
          s('circle', { cx: P.X(d[0]), cy: P.Y(d[1]), r: k === n ? 6 : 4, fill: k === n ? C.ax : C.x, 'fill-opacity': 0.35 + 0.65 * (k / n) }, g);
        }
        P.arrow(g, [0, 0], unit(seq[n]), C.ax, 3);
        out.innerHTML = 'A<sup>' + n + '</sup>v = ' + vec(seq[n], 3) + ' &nbsp; growth from the step before: ×' + fmt(norm(seq[n]) / norm(seq[n - 1]), 3);
      }
      if (!done && n >= (spec.goal_n || N)) {
        done = true;
        if (spec.mode !== 'sequence' && eig.length) P.fullLine(g, eig[0].dir, C.eig, { 'stroke-dasharray': '6 4' });
        onGoal({ ratio: fmt(seq[n][0] / seq[n - 1][0], 4), growth: fmt(norm(seq[n]) / norm(seq[n - 1]), 3),
                 lambda: eig.length ? fmt(eig[0].lambda) : '', dir: eig.length ? niceDir(eig[0].dir) : '' });
      }
    }
    draw();
    return { set: function (o) { if (o.n != null) { n = o.n; slider.value = n; draw(); } }, solve: function () { n = spec.goal_n || N; slider.value = n; draw(); } };
  }

  // ---------- phase: trajectories of x' = Ax from a draggable start ----------
  function phase(box, spec, onGoal) {
    var A = spec.A, R = spec.window || 5, x0 = (spec.x0 || [3, 1]).slice(), eig = eigen2(A), done = false, T = spec.tmax || 6;
    hint(box, spec.hint || 'Drag the dot to choose the starting amounts. The curve shows what happens next. Look for a start whose path is a straight line.');
    var P = Plane(box, [spec.xmin != null ? spec.xmin : -R, R, spec.ymin != null ? spec.ymin : -R, R], { step: 1, xlabel: spec.xlabel, ylabel: spec.ylabel, label: 'Paths of a system of differential equations' });
    var field = s('g', {}, P.layer), lines = s('g', {}, P.layer), g = s('g', {}, P.layer), out = readout(box);
    var w = P.win;
    for (var fx = Math.ceil(w[0]); fx <= w[1]; fx += 1) for (var fy = Math.ceil(w[2]); fy <= w[3]; fy += 1) {
      var d = mv(A, [fx, fy]), L = norm(d);
      if (L < 1e-9) continue;
      var e = [d[0] / L * 0.32, d[1] / L * 0.32];
      s('line', { x1: P.X(fx - e[0] / 2), y1: P.Y(fy - e[1] / 2), x2: P.X(fx + e[0] / 2), y2: P.Y(fy + e[1] / 2), stroke: '#C4C4CC', 'stroke-width': 1.4, 'marker-end': null }, field);
    }
    var h = P.handle(C.ax, 'Starting point', function (p) { setX0(p); }, function (dx, dy, big) { setX0([x0[0] + dx * (big ? 0.5 : 0.1), x0[1] + dy * (big ? 0.5 : 0.1)]); });
    function setX0(p) {
      p = [Math.max(w[0], Math.min(w[1], p[0])), Math.max(w[2], Math.min(w[3], p[1]))];
      for (var k = 0; k < eig.length; k++) {
        var a = angleBetween(p, eig[k].dir);
        if (norm(p) > 0.2 && (a < 3 || a > 177)) { var r = norm(p) * (a > 90 ? -1 : 1); p = [eig[k].dir[0] * r, eig[k].dir[1] * r]; break; }
      }
      x0 = p; draw();
    }
    function f(x) { return mv(A, x); }
    function draw() {
      P.clear(g);
      var x = x0.slice(), pts = [P.X(x[0]) + ',' + P.Y(x[1])], dt = 0.01;
      for (var t = 0; t < T; t += dt) {
        var k1 = f(x), k2 = f([x[0] + dt / 2 * k1[0], x[1] + dt / 2 * k1[1]]), k3 = f([x[0] + dt / 2 * k2[0], x[1] + dt / 2 * k2[1]]), k4 = f([x[0] + dt * k3[0], x[1] + dt * k3[1]]);
        x = [x[0] + dt / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]), x[1] + dt / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])];
        if (Math.abs(x[0]) > 4 * R || Math.abs(x[1]) > 4 * R) break;
        pts.push(P.X(x[0]) + ',' + P.Y(x[1]));
      }
      s('polyline', { points: pts.join(' '), fill: 'none', stroke: C.x, 'stroke-width': 3 }, g);
      h.at(x0);
      var straight = null;
      eig.forEach(function (e) { var a = angleBetween(x0, e.dir); if (norm(x0) > 0.2 && (a < 1e-6 || a > 180 - 1e-6)) straight = e; });
      out.innerHTML = 'start = ' + vec(x0) + (straight ? ' &nbsp; <strong>straight-line path</strong>'
        + (spec.quiet ? '' : ' (λ = ' + fmt(straight.lambda) + ')') : '');
      if (straight && !done && spec.goal === 'straight') {
        done = true;
        (spec.quiet ? [straight] : eig).forEach(function (e) { P.fullLine(lines, e.dir, C.eig, { 'stroke-dasharray': '6 4' }); });
        onGoal({ lambda: fmt(straight.lambda), dir: niceDir(straight.dir) });
      }
    }
    draw();
    return {
      set: function (o) { if (o.x0) setX0(o.x0); },
      solve: function () { if (eig.length) setX0([eig[0].dir[0] * 2, eig[0].dir[1] * 2]); }
    };
  }

  var KINDS = { 'circle-map': circleMap, 'grid-map': gridMap, lines: linesWidget, 'fit-line': fitLine, project: project,
                iterate: iterate, phase: phase };

  window.PolyaExplore = {
    kinds: Object.keys(KINDS),
    mount: function (container, spec, onGoal) {
      var api = KINDS[spec.kind](container, spec, onGoal || function () {});
      container.polyaWidget = api;
      return api;
    }
  };
})();
