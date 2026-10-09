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
    var s = (Math.round(v * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d);
    if (d > 0) s = s.replace(/\.?0+$/, '');  // 2.50 -> 2.5, 3.00 -> 3; never strip a whole number's zeros
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
  // Text in a figure uses a darker shade of its color, so labels meet the 4.5:1 contrast rule on white.
  var INK = { '#009CDE': '#007CB1', '#F36E24': '#BF561C', '#9A9AA2': '#6B6B73', '#008552': '#00704A', '#888': '#6B6B73', '#AAA': '#6B6B73' };
  function s(tag, attrs, parent) {
    if (tag === 'text' && attrs.fill && INK[attrs.fill]) attrs.fill = INK[attrs.fill];
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  /** A plane: math window [x0,x1]x[y0,y1] drawn in a 400-wide viewBox. */
  function Plane(container, win, opts) {
    opts = opts || {};
    var W = 400, H = Math.round(opts.aspect ? W * opts.aspect : W * (win[3] - win[2]) / (win[1] - win[0]));
    var svg = s('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'group', 'aria-label': opts.label || 'Interactive figure' });
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
      var g = s('g', { class: 'pl-handle', tabindex: 0, role: 'button', 'aria-roledescription': 'movable point',
                       'aria-label': label + '. Drag it, or use the arrow keys.' }, top);
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
      var nm = spec.name || 'A';
      out.innerHTML = spec.quiet ? 'angle between x and ' + nm + 'x = ' + (len > 1e-9 ? fmt(ang, 0) + '&deg;' : '—')
        : 'x = ' + vec(x) + ' &nbsp; ' + nm + 'x = ' + vec(y) + '<br>length of ' + nm + 'x = ' + fmt(len)
          + (len > 1e-9 ? ' &nbsp; angle between x and ' + nm + 'x = ' + fmt(ang, 0) + '&deg;' : '');
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
    var hL = P.handle(C.x, 'Left end of your line', function (p) { yL = clampY(p[1]); snapBest(); draw(); }, function (a, b, big) { yL = clampY(yL + b * dy * (big ? 5 : 1)); snapBest(); draw(); });
    var hR = P.handle(C.x, 'Right end of your line', function (p) { yR = clampY(p[1]); snapBest(); draw(); }, function (a, b, big) { yR = clampY(yR + b * dy * (big ? 5 : 1)); snapBest(); draw(); });
    var tol = (win[3] - win[2]) * (spec.tolerance || 0.04);
    function clampY(y) { return Math.max(win[2], Math.min(win[3], y)); }
    function snapBest() {  // both ends close to the least-squares line: snap onto it
      var bl = bm * xL + bb, br = bm * xR + bb;
      if (Math.abs(yL - bl) < tol && Math.abs(yR - br) < tol) { yL = bl; yR = br; }
    }
    function line(m, b, color, dash, gg) {
      s('line', { x1: P.X(win[0]), y1: P.Y(m * win[0] + b), x2: P.X(win[1]), y2: P.Y(m * win[1] + b), stroke: color, 'stroke-width': 3, 'stroke-dasharray': dash || null }, gg);
    }
    function draw() {
      P.clear(g);
      var m = (yR - yL) / (xR - xL), b = yL - m * xL, e = sse(m, b);
      pts.forEach(function (p) { s('line', { x1: P.X(p[0]), y1: P.Y(p[1]), x2: P.X(p[0]), y2: P.Y(m * p[0] + b), stroke: C.ax, 'stroke-width': 2.5 }, g); });
      line(m, b, C.x, null, g);
      hL.at([xL, yL]); hR.at([xR, yR]);
      out.innerHTML = (spec.quiet ? '' : 'Your line: y = ' + fmt(m, 3) + 'x ' + (b < 0 ? '− ' : '+ ') + fmt(Math.abs(b), 3) + '<br>')
        + 'Sum of squared errors: ' + fmt(e, 3) + (done ? ' &nbsp; (least squares: ' + fmt(best, 3) + ')' : '');
      if (!done && e <= best + 1e-9) {
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

  // ---------- space: a figure in R^3 that turns (drag it, or focus it and use the arrow keys) ----------
  var SUB = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
  function dot3(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function add3(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
  function sub3(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function mul3(c, a) { return [c * a[0], c * a[1], c * a[2]]; }
  function norm3(a) { return Math.sqrt(dot3(a, a)); }
  function unit3(a) { var n = norm3(a); return n < 1e-15 ? [0, 0, 0] : mul3(1 / n, a); }
  function cross3(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
  function vecN(v, d) { return '(' + v.map(function (x) { return fmt(x, d); }).join(', ') + ')'; }
  function niceDirN(v) {  // (0.41, -0.2, 0.2) -> (2, -1, 1)
    var nz = v.filter(function (x) { return Math.abs(x) > 1e-9; }).map(Math.abs);
    if (!nz.length) return vecN(v);
    var base = Math.min.apply(null, nz);
    for (var k = 1; k <= 12; k++) {
      var w = v.map(function (x) { return x / base * k; });
      if (w.every(function (x) { return Math.abs(x - Math.round(x)) < 1e-6; })) {
        w = w.map(Math.round);
        if (w.filter(function (x) { return x !== 0; })[0] < 0) w = w.map(function (x) { return -x; });
        return vecN(w, 0);
      }
    }
    return vecN(v);
  }
  function colorOf(c) { return C[c] || c || C.ink; }
  /** Unit vectors e1, e2 spanning a plane given by 'span' (two vectors) or 'normal', and its unit normal n. */
  function planeBasis(o) {
    var n = unit3(o.normal || cross3(o.span[0], o.span[1]));
    var e1 = o.span ? unit3(o.span[0]) : unit3(Math.abs(n[0]) < 0.9 ? cross3(n, [1, 0, 0]) : cross3(n, [0, 1, 0]));
    return { n: n, e1: e1, e2: unit3(cross3(n, e1)) };
  }

  /** A starting view [azimuth, elevation] in degrees that shows the key vectors well: none of them points at the
      viewer, and no two of them line up on the screen. */
  function autoView(keys) {
    keys = keys.filter(function (k) { return norm3(k) > 1e-9; }).map(unit3);
    if (!keys.length) return [32, 20];
    var best = null;
    for (var a = 0; a < 360; a += 10) {
      for (var e = 14; e <= 34; e += 10) {
        var ct = Math.cos(a * Math.PI / 180), st = Math.sin(a * Math.PI / 180), cp = Math.cos(e * Math.PI / 180), sp = Math.sin(e * Math.PI / 180);
        var r = [-st, ct, 0], u = [-sp * ct, -sp * st, cp];
        var pr = keys.map(function (k) { return [dot3(k, r), dot3(k, u)]; });
        var len = pr.map(function (q) { return Math.hypot(q[0], q[1]); });
        var sep = 1;
        for (var i = 0; i < pr.length; i++) for (var j = i + 1; j < pr.length; j++) {
          if (len[i] > 1e-6 && len[j] > 1e-6) sep = Math.min(sep, Math.abs(pr[i][0] * pr[j][1] - pr[i][1] * pr[j][0]) / (len[i] * len[j]));
        }
        var axisLen = [[1, 0, 0], [0, 1, 0], [0, 0, 1]].map(function (k) { return Math.hypot(dot3(k, r), dot3(k, u)); });
        var score = Math.min.apply(null, len) + 0.6 * sep + 0.1 * len.reduce(function (x, y) { return x + y; }, 0) / len.length
          - (Math.min.apply(null, axisLen) < 0.68 ? 2 : 0);  // no axis may point at the viewer either
        if (!best || score > best.score + 1e-9) best = { score: score, view: [a, e] };
      }
    }
    return best.view;
  }

  /** The scene: draw(fn) calls fn(add) to collect planes, lines, arrows, points and labels, then paints them so that
      the parts of lines behind a plane show faded and dashed. */
  function Space(box, spec) {
    var R = spec.window || 4, W = 400, H = 340, sc = W / (2.9 * R);
    var view0 = spec.view || autoView(spec.keys || []), th = view0[0] * Math.PI / 180, ph = view0[1] * Math.PI / 180;
    var svg = s('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', tabindex: 0, class: 'pl-space',
                         'aria-label': (spec.label || 'A figure in space') + '. Drag it, or use the arrow keys, to turn it.' });
    box.appendChild(svg);
    var id = 'pl' + (++uid), defs = s('defs', {}, svg), markers = {}, g = s('g', {}, svg), B, fn = null, axes = spec.axes || ['x', 'y', 'z'];
    function marker(color) {
      if (markers[color]) return markers[color];
      var mid = id + 'm' + Object.keys(markers).length;
      var m = s('marker', { id: mid, viewBox: '0 0 10 10', refX: 8, refY: 5, markerWidth: 6, markerHeight: 6, orient: 'auto-start-reverse' }, defs);
      s('path', { d: 'M0,0 L10,5 L0,10 z', fill: color }, m);
      return (markers[color] = 'url(#' + mid + ')');
    }
    function basis() {
      var ct = Math.cos(th), st = Math.sin(th), cp = Math.cos(ph), sp = Math.sin(ph);
      B = { r: [-st, ct, 0], u: [-sp * ct, -sp * st, cp], w: [cp * ct, cp * st, sp] };
    }
    var mid = spec.center || [0, 0, 0];  // the point the view centers on
    function X(p) { return W / 2 + sc * dot3(sub3(p, mid), B.r); }
    function Y(p) { return H / 2 - sc * dot3(sub3(p, mid), B.u); }
    function pts(list) { return list.map(function (p) { return X(p).toFixed(1) + ',' + Y(p).toFixed(1); }).join(' '); }

    function paint() {
      basis();
      while (g.firstChild) g.removeChild(g.firstChild);
      var planes = [], segs = [], dots = [], texts = [], rights = [];
      var add = {
        plane: function (o) {
          var pb = planeBasis(o), c = o.center || o.through || [0, 0, 0], h = o.size || R * 0.8;
          planes.push({ c: c, e1: pb.e1, e2: pb.e2, h: h, color: colorOf(o.color || 'p'), label: o.label, opacity: o.opacity });
        },
        line: function (o) {
          var d = unit3(o.dir), c = o.through || [0, 0, 0], L = o.length || R * 1.25;
          segs.push({ a: add3(c, mul3(-L, d)), b: add3(c, mul3(L, d)), color: colorOf(o.color), width: o.width || 2.5, dash: o.dash });
          if (o.label) texts.push({ p: add3(c, mul3(L * 0.92, d)), text: o.label, color: colorOf(o.color), dy: -8 });
        },
        arrow: function (o) {
          var a = o.from || [0, 0, 0], b = add3(a, o.v);
          if (norm3(o.v) < 1e-9) { dots.push({ p: a, color: colorOf(o.color), r: 4 }); return; }
          segs.push({ a: a, b: b, color: colorOf(o.color), width: o.width || 3, arrow: true, dash: o.dash });
          if (o.label) texts.push({ p: b, text: o.label, color: colorOf(o.color), dx: 7, dy: -7, bold: true });
        },
        seg: function (o) { segs.push({ a: o.a, b: o.b, color: colorOf(o.color), width: o.width || 2, dash: o.dash || '6 4' }); },
        point: function (o) {
          dots.push({ p: o.p, color: colorOf(o.color), r: o.r || 5 });
          if (o.label) texts.push({ p: o.p, text: o.label, color: colorOf(o.color), dx: 8, dy: -8, bold: true });
        },
        right: function (o) { rights.push(o); },  // a right-angle mark at o.at between directions o.u and o.v
        text: function (o) { texts.push({ p: o.p, text: o.text, color: colorOf(o.color), dx: o.dx || 0, dy: o.dy || 0, bold: o.bold }); }
      };
      // the floor (the plane z = 0) and the axes
      if (spec.floor !== false) {
        var fl = s('g', { stroke: C.grid, 'stroke-width': 1 }, g), k = Math.max(1, Math.round(R / 4));
        for (var t = -R; t <= R + 1e-9; t += k) {
          s('line', { x1: X([t, -R, 0]), y1: Y([t, -R, 0]), x2: X([t, R, 0]), y2: Y([t, R, 0]) }, fl);
          s('line', { x1: X([-R, t, 0]), y1: Y([-R, t, 0]), x2: X([R, t, 0]), y2: Y([R, t, 0]) }, fl);
        }
      }
      [[1, 0, 0], [0, 1, 0], [0, 0, 1]].forEach(function (e, i) {
        segs.push({ a: mul3(-R, e), b: mul3(R * 1.12, e), color: C.axis, width: 1.3, arrow: true, axis: true });
        texts.push({ p: mul3(R * 1.2, e), text: axes[i], color: C.axis, dx: -4, dy: 5 });
      });
      if (fn) fn(add);

      function depthAt(P, x, y) {  // where the screen point (x, y), in world units, meets plane P: [a, b, depth] or null
        var m11 = dot3(P.e1, B.r), m12 = dot3(P.e2, B.r), m21 = dot3(P.e1, B.u), m22 = dot3(P.e2, B.u), det = m11 * m22 - m12 * m21;
        if (Math.abs(det) < 1e-6) return null;  // seen edge-on
        var rx = x - dot3(P.c, B.r), ry = y - dot3(P.c, B.u), a = (rx * m22 - m12 * ry) / det, b = (m11 * ry - m21 * rx) / det;
        if (Math.abs(a) > P.h || Math.abs(b) > P.h) return null;
        return dot3(add3(P.c, add3(mul3(a, P.e1), mul3(b, P.e2))), B.w);
      }
      function hidden(p) {
        var x = dot3(p, B.r), y = dot3(p, B.u), d = dot3(p, B.w);
        return planes.some(function (P) { var dp = depthAt(P, x, y); return dp != null && dp > d + 1e-6 * R; });
      }
      planes.sort(function (p, q) { return dot3(p.c, B.w) - dot3(q.c, B.w); }).forEach(function (P) {
        var h = P.h, cs = [[-h, -h], [h, -h], [h, h], [-h, h]].map(function (ab) { return add3(P.c, add3(mul3(ab[0], P.e1), mul3(ab[1], P.e2))); });
        s('polygon', { points: pts(cs), fill: P.color, 'fill-opacity': P.opacity || 0.16, stroke: P.color, 'stroke-opacity': 0.45, 'stroke-width': 1.2 }, g);
        if (P.label) {  // at the corner farthest (on screen) from the other labels
          var spots = [[1, 1], [-1, 1], [1, -1], [-1, -1]].map(function (ab) {
            return add3(P.c, add3(mul3(0.78 * h * ab[0], P.e1), mul3(0.78 * h * ab[1], P.e2)));
          });
          var room = function (q) {
            return texts.reduce(function (m, t) { return Math.min(m, Math.hypot(X(q) - X(t.p), Y(q) - Y(t.p))); }, 1e9)
              - (X(q) < 40 || X(q) > W - 60 || Y(q) < 20 || Y(q) > H - 10 ? 500 : 0);  // and on the canvas
          };
          var spot = spots.reduce(function (a, b) { return room(b) > room(a) ? b : a; });
          texts.push({ p: spot, text: P.label, color: P.color, bold: true });
        }
      });
      segs.forEach(function (sg) {  // split into pieces; the pieces behind a plane are faded
        var n = planes.length ? 30 : 1, runs = [], cur = null;
        for (var i = 0; i < n; i++) {
          var p0 = add3(sg.a, mul3(i / n, sub3(sg.b, sg.a))), p1 = add3(sg.a, mul3((i + 1) / n, sub3(sg.b, sg.a)));
          var hid = n > 1 && hidden(mul3(0.5, add3(p0, p1)));
          if (!cur || cur.hid !== hid) { cur = { hid: hid, pts: [p0] }; runs.push(cur); }
          cur.pts.push(p1);
        }
        runs.forEach(function (r, i) {
          var attrs = { points: pts(r.pts), fill: 'none', stroke: sg.color, 'stroke-width': sg.width, 'stroke-linecap': 'round',
                        'stroke-opacity': r.hid ? 0.35 : 1 };
          if (r.hid || sg.dash) attrs['stroke-dasharray'] = sg.dash || '4 4';
          if (sg.arrow && i === runs.length - 1) attrs['marker-end'] = marker(sg.color);
          s('polyline', attrs, g);
        });
      });
      rights.forEach(function (o) {
        var z = o.size || R * 0.09, u = unit3(o.u), v = unit3(o.v), at = o.at || [0, 0, 0];
        s('polyline', { points: pts([add3(at, mul3(z, u)), add3(at, add3(mul3(z, u), mul3(z, v))), add3(at, mul3(z, v))]),
                        fill: 'none', stroke: C.ink, 'stroke-width': 1.4 }, g);
      });
      dots.forEach(function (d) {
        s('circle', { cx: X(d.p), cy: Y(d.p), r: d.r, fill: '#fff', stroke: d.color, 'stroke-width': 3, 'stroke-opacity': hidden(d.p) ? 0.4 : 1 }, g);
      });
      texts.forEach(function (t) {
        var e = s('text', { x: X(t.p) + (t.dx || 0), y: Y(t.p) + (t.dy || 0), fill: t.color, 'font-size': 14,
                            'font-weight': t.bold ? 'bold' : 'normal', 'paint-order': 'stroke', stroke: '#fff', 'stroke-width': 3 }, g);
        e.textContent = t.text;
      });
    }
    var queued = false;
    function repaint() { if (queued) return; queued = true; requestAnimationFrame(function () { queued = false; paint(); }); }
    function turn(dth, dph) { th += dth; ph = Math.max(-1.2, Math.min(1.5699, ph + dph)); repaint(); }
    svg.addEventListener('pointerdown', function (e) {
      e.preventDefault(); svg.setPointerCapture(e.pointerId); svg.focus({ preventScroll: true });
      var x0 = e.clientX, y0 = e.clientY;
      function move(ev) { turn(-(ev.clientX - x0) * 0.012, (ev.clientY - y0) * 0.012); x0 = ev.clientX; y0 = ev.clientY; }
      function up() { svg.removeEventListener('pointermove', move); svg.removeEventListener('pointerup', up); svg.removeEventListener('pointercancel', up); }
      svg.addEventListener('pointermove', move); svg.addEventListener('pointerup', up); svg.addEventListener('pointercancel', up);
    });
    svg.addEventListener('keydown', function (e) {
      var k = { ArrowLeft: [0.09, 0], ArrowRight: [-0.09, 0], ArrowUp: [0, 0.09], ArrowDown: [0, -0.09] }[e.key];
      if (k) { e.preventDefault(); turn(k[0], k[1]); }
    });
    var views = el('div', 'pl-controls pl-views');
    function viewButton(text, a, b) {
      var bt = el('button', 'pl-link', text); bt.type = 'button';
      bt.addEventListener('click', function () { th = a * Math.PI / 180; ph = b * Math.PI / 180; paint(); });
      views.appendChild(bt);
    }
    if (spec.from_above) viewButton('Look from above', -90, 89.99);
    viewButton('Reset the view', view0[0], view0[1]);
    box.appendChild(views);
    return { draw: function (f) { fn = f; paint(); }, R: R, svg: svg };
  }

  /** A row of labelled sliders: list of {name, label, min, max, step, value}; onInput() after each move. */
  function sliders(box, list, onInput) {
    var ctl = el('div', 'pl-controls pl-sliders'), inputs = {};
    list.forEach(function (p) {
      var lab = el('label', 'pl-slider'), inp = document.createElement('input'), val = el('strong', 'pl-slider-val', fmt(p.value));
      inp.type = 'range'; inp.min = p.min; inp.max = p.max; inp.step = p.step; inp.value = p.value;
      inp.setAttribute('aria-label', p.label);
      inp.addEventListener('input', function () { val.textContent = fmt(+inp.value); onInput(); });
      lab.appendChild(el('span', 'pl-slider-name', p.label + ' ='));
      lab.appendChild(inp); lab.appendChild(val); ctl.appendChild(lab);
      inputs[p.name] = { inp: inp, val: val };
    });
    box.appendChild(ctl);
    return {
      get: function (n) { return +inputs[n].inp.value; },
      set: function (n, v) { inputs[n].inp.value = v; inputs[n].val.textContent = fmt(v); }
    };
  }

  // mode 'null': choose x with three sliders and watch Ax; the goal is a nonzero x with Ax = 0
  function spaceNull(box, spec, onGoal) {
    var A = spec.A, rng = spec.range || 3, step = spec.step || 1, x = (spec.start || [1, 1, 1]).slice(), done = false;
    hint(box, spec.hint || 'Move the sliders to choose x (the blue arrow). Find a nonzero x with Ax = 0. Drag the picture to turn it.');
    var S = Space(box, Object.assign({ keys: A.concat([spec.solution]) }, spec));
    var sl = sliders(box, [0, 1, 2].map(function (i) {
      return { name: 'x' + i, label: 'x' + SUB[i + 1], min: -rng, max: rng, step: step, value: x[i] };
    }), function () { x = [0, 1, 2].map(function (i) { return sl.get('x' + i); }); draw(); });
    var out = readout(box);
    function draw() {
      var y = A.map(function (r) { return dot3(r, x); }), zero = y.every(function (v) { return Math.abs(v) < 1e-9; }), hit = zero && norm3(x) > 1e-9;
      S.draw(function (add) {
        (spec.planes || []).forEach(add.plane);
        (spec.lines || []).forEach(add.line);
        (spec.arrows || []).forEach(add.arrow);
        if (hit) {
          add.line({ dir: x, color: 'eig', label: spec.null_label || 'null A' });
          var p0 = (spec.planes || [])[0];
          if (p0) add.right({ u: x, v: planeBasis(p0).e1 });
        }
        add.arrow({ v: x, color: 'x', label: 'x', width: 3.5 });
      });
      out.innerHTML = 'x = ' + vecN(x) + ' &nbsp; A<b>x</b> = ' + vecN(y);
      if (!done && hit) { done = true; onGoal({ x: vecN(x), dir: niceDirN(x) }); }
    }
    draw();
    var api = {
      set: function (o) { if (o.x) { x = o.x.slice(); x.forEach(function (v, i) { sl.set('x' + i, v); }); draw(); } },
      solve: function () { api.set({ x: spec.solution }); }
    };
    return api;
  }

  // mode 'combo': weights on sliders; the weighted vectors add head to tail; the goal is to land on the target
  function spaceCombo(box, spec, onGoal) {
    var V = spec.vectors, names = spec.names || V.map(function (_, i) { return 'v' + SUB[i + 1]; }), k = spec.use || V.length;
    var c = (spec.start || V.slice(0, k).map(function () { return 1; })).slice(), b = spec.target, done = false;
    var paint = [C.x, C.ax, C.p];
    hint(box, spec.hint || 'Move the sliders to set the weights. The weighted arrows add head to tail; land the tip on '
      + (spec.target_label || 'b') + '. Drag the picture to turn it.');
    var S = Space(box, Object.assign({ keys: V.concat([b]) }, spec));
    var sl = sliders(box, c.map(function (v, i) {
      return { name: 'c' + i, label: 'c' + SUB[i + 1], min: -(spec.range || 3), max: spec.range || 3, step: spec.step || 0.5, value: v };
    }), function () { c = c.map(function (_, i) { return sl.get('c' + i); }); draw(); });
    var out = readout(box);
    function draw() {
      var tip = [0, 0, 0];
      S.draw(function (add) {
        if (spec.show_span !== false) add.plane({ span: [V[0], V[1]], color: 'p', label: spec.span_label || 'span' });
        V.forEach(function (v, i) { add.arrow({ v: v, color: '#888', width: 1.8, label: names[i] }); });
        add.arrow({ v: b, color: 'eig', label: spec.target_label || 'b', width: 3 });
        for (var i = 0; i < k; i++) {
          var w = mul3(c[i], V[i]);
          add.arrow({ from: tip, v: w, color: paint[i % 3], width: 3.5 });
          tip = add3(tip, w);
        }
        add.point({ p: tip, color: C.ink, r: 4 });
      });
      var gap = norm3(sub3(tip, b));
      out.innerHTML = c.map(function (v, i) { return (v === 1 ? '' : v === -1 ? '−' : fmt(v)) + names[i]; }).join(' + ')
        .replace(/\+ −/g, '− ') + ' = ' + vecN(tip)
        + ' &nbsp; ' + (spec.target_label || 'b') + ' = ' + vecN(b);
      if (!done && gap < 1e-9) { done = true; onGoal({ c: vecN(c) }); }
    }
    draw();
    var api = {
      set: function (o) { if (o.c) { c = o.c.slice(); c.forEach(function (v, i) { sl.set('c' + i, v); }); draw(); } },
      solve: function () { api.set({ c: spec.solution }); }
    };
    return api;
  }

  // mode 'two-lines': a point on each line (sliders t and s); goal 'above' (they line up seen from above),
  // 'meet' (the points coincide) or 'closest' (the shortest gap, at spec.solution)
  function spaceLines(box, spec, onGoal) {
    var p1 = spec.p1, d1 = spec.d1, p2 = spec.p2, d2 = spec.d2, names = spec.names || ['L₁', 'L₂'], done = false;
    var tr = spec.t || { min: -3, max: 3, step: 0.5, start: 0 }, sr = spec.s || { min: -3, max: 3, step: 0.5, start: 0 };
    var t = tr.start, sv = sr.start;
    hint(box, spec.hint || 'Move the sliders to slide a point along each line. Drag the picture to turn it.');
    var S = Space(box, Object.assign({ from_above: true, keys: [d1, d2, sub3(p2, p1)] }, spec));
    var sl = sliders(box, [{ name: 't', label: 't', min: tr.min, max: tr.max, step: tr.step, value: t },
                           { name: 's', label: 's', min: sr.min, max: sr.max, step: sr.step, value: sv }],
                     function () { t = sl.get('t'); sv = sl.get('s'); draw(); });
    var out = readout(box), sol = spec.solution || {};
    function draw() {
      var P = add3(p1, mul3(t, d1)), Q = add3(p2, mul3(sv, d2)), gap = norm3(sub3(P, Q));
      S.draw(function (add) {
        add.line({ through: p1, dir: d1, color: 'x', label: names[0], length: S.R * 1.6 });
        add.line({ through: p2, dir: d2, color: 'ax', label: names[1], length: S.R * 1.6 });
        if (gap > 1e-9) add.seg({ a: P, b: Q, color: C.ink, width: 1.8 });
        add.point({ p: P, color: C.x });
        add.point({ p: Q, color: C.ax });
      });
      out.innerHTML = 'on ' + names[0] + ': ' + vecN(P) + ' &nbsp; on ' + names[1] + ': ' + vecN(Q) + ' &nbsp; gap = ' + fmt(gap, 3);
      var hit = spec.goal === 'above' ? Math.abs(P[0] - Q[0]) < 1e-9 && Math.abs(P[1] - Q[1]) < 1e-9
        : spec.goal === 'meet' ? gap < 1e-9 : Math.abs(t - sol.t) < 1e-9 && Math.abs(sv - sol.s) < 1e-9;
      if (!done && hit) { done = true; onGoal({ t: fmt(t), s: fmt(sv), P: vecN(P), Q: vecN(Q), gap: fmt(gap, 3), dz: fmt(Math.abs(P[2] - Q[2]), 3) }); }
    }
    draw();
    var api = {
      set: function (o) { if (o.t != null) { t = o.t; sl.set('t', t); } if (o.s != null) { sv = o.s; sl.set('s', sv); } draw(); },
      solve: function () { api.set(spec.solution); }
    };
    return api;
  }

  // mode 'plane-point': slide Q around a plane (sliders a, b: Q = q0 + a u + b v); the goal is the point closest to P
  function spacePlanePoint(box, spec, onGoal) {
    var n = spec.normal, P = spec.P, q0 = spec.q0, U = spec.dirs[0], Vd = spec.dirs[1], done = false;
    var ar = spec.a || { min: -4, max: 4, step: 0.5, start: 1 }, br = spec.b || { min: -4, max: 4, step: 0.5, start: 1 };
    var a = ar.start, bb = br.start, sol = spec.solution;
    hint(box, spec.hint || 'Move the sliders to slide Q around the plane. Make the dashed segment from ' + (spec.P_label || 'P')
      + ' to Q as short as you can. Drag the picture to turn it.');
    var S = Space(box, Object.assign({ keys: [U, Vd, n] }, spec));
    var sl = sliders(box, [{ name: 'a', label: 'a', min: ar.min, max: ar.max, step: ar.step, value: a },
                           { name: 'b', label: 'b', min: br.min, max: br.max, step: br.step, value: bb }],
                     function () { a = sl.get('a'); bb = sl.get('b'); draw(); });
    var out = readout(box);
    function draw() {
      var Q = add3(q0, add3(mul3(a, U), mul3(bb, Vd))), d = norm3(sub3(P, Q)), hit = Math.abs(a - sol.a) < 1e-9 && Math.abs(bb - sol.b) < 1e-9;
      S.draw(function (add) {
        add.plane({ normal: n, center: spec.center || Q, color: 'p', label: spec.plane_label || '', size: spec.size });
        add.seg({ a: P, b: Q, color: C.ax, width: 2.5, dash: hit ? 'none' : '6 4' });
        if (hit) add.right({ at: Q, u: sub3(P, Q), v: planeBasis({ normal: n }).e1 });
        add.point({ p: P, color: C.x, label: spec.P_label || 'P' });
        add.point({ p: Q, color: C.p, label: 'Q' });
      });
      out.innerHTML = 'Q = ' + vecN(Q) + ' &nbsp; distance from ' + (spec.P_label || 'P') + ' = ' + fmt(d, 3);
      if (!done && hit) { done = true; onGoal({ Q: vecN(Q), dist: fmt(d, 3) }); }
    }
    draw();
    var api = {
      set: function (o) { if (o.a != null) { a = o.a; sl.set('a', a); } if (o.b != null) { bb = o.b; sl.set('b', bb); } draw(); },
      solve: function () { api.set(sol); }
    };
    return api;
  }

  // ---------- combine: weights on the columns of A (sliders), added head to tail, to reach b ----------
  function combine(box, spec, onGoal) {
    var cols = spec.columns, b = spec.target, names = spec.names || cols.map(function (_, i) { return 'a' + SUB[i + 1]; });
    var x = (spec.start || cols.map(function () { return 1; })).slice(), ways = [], done = false, need = spec.goal === 'two-ways' ? 2 : 1;
    var bl = spec.target_label || 'b', paint = [C.x, C.ax, C.p, C.eig];
    hint(box, spec.hint || 'Move the sliders to set the weights. The colored arrows are the weighted columns, added head to tail. '
      + 'Land the tip on ' + bl + (need > 1 ? ', in two different ways.' : '.'));
    var P = Plane(box, spec.window, { step: spec.grid || 1, label: 'Weighted columns added head to tail' });
    var g = s('g', {}, P.layer);
    var ranges = spec.ranges || cols.map(function () { return { min: -4, max: 6, step: 1 }; });
    var sl = sliders(box, x.map(function (v, i) {
      return { name: 'x' + i, label: 'x' + SUB[i + 1], min: ranges[i].min, max: ranges[i].max, step: ranges[i].step, value: v };
    }), function () { x = x.map(function (_, i) { return sl.get('x' + i); }); draw(); });
    var out = readout(box);
    function label(p, text, color, dx, dy) {
      s('text', { x: P.X(p[0]) + (dx || 6), y: P.Y(p[1]) + (dy || -6), fill: color, 'font-size': 14, 'font-weight': 'bold',
                  'paint-order': 'stroke', stroke: '#fff', 'stroke-width': 3 }, g).textContent = text;
    }
    function draw() {
      P.clear(g);
      cols.forEach(function (a, i) { P.arrow(g, [0, 0], a, '#AAA', 1.6); label(a, names[i], '#888', 4, 14); });
      P.arrow(g, [0, 0], b, C.eig, 2.5); label(b, bl, C.eig);
      var tip = [0, 0];
      cols.forEach(function (a, i) {
        var next = [tip[0] + x[i] * a[0], tip[1] + x[i] * a[1]];
        P.arrow(g, tip, next, paint[i % 4], 3.5);
        tip = next;
      });
      s('circle', { cx: P.X(tip[0]), cy: P.Y(tip[1]), r: 5, fill: '#fff', stroke: C.ink, 'stroke-width': 2.5 }, g);
      var hit = Math.abs(tip[0] - b[0]) < 1e-9 && Math.abs(tip[1] - b[1]) < 1e-9, key = vecN(x);
      if (hit && ways.indexOf(key) < 0) ways.push(key);
      out.innerHTML = x.map(function (v, i) { return (v === 1 ? '' : v === -1 ? '−' : fmt(v)) + names[i]; }).join(' + ').replace(/\+ −/g, '− ') + ' = ' + vec(tip)
        + ' &nbsp; ' + bl + ' = ' + vec(b) + (need > 1 ? ' &nbsp; ways found: ' + ways.length : '');
      if (!done && ways.length >= need) { done = true; onGoal({ first: ways[0], second: ways[1] || '', ways: ways.join(' and ') }); }
    }
    draw();
    var api = {
      set: function (o) { if (o.x) { x = o.x.slice(); x.forEach(function (v, i) { sl.set('x' + i, v); }); draw(); } },
      solve: function () { (spec.solutions || [spec.solution]).forEach(function (sol) { api.set({ x: sol }); }); }
    };
    return api;
  }

  // mode 'planes': the row picture of a 3x3 system; buttons apply row operations to the equations, and the planes move
  // while the common point stays. rows: [[a, b, c, d], ...] for ax + by + cz = d; ops: [{label, target, add: {row: k}}]
  function spacePlanes(box, spec, onGoal) {
    var rows = spec.rows.map(function (r) { return r.slice(); }), ops = spec.ops, applied = 0, done = false, pt = spec.point;
    var paint = ['x', 'ax', 'p'], names = spec.axes || ['x₁', 'x₂', 'x₃'];
    hint(box, spec.hint || 'Each plane is one equation. Press the row operations in order and watch which plane moves. Drag the '
      + 'picture to turn it.');
    var S = Space(box, Object.assign({ keys: rows.map(function (r) { return r.slice(0, 3); }).concat([pt]), center: mul3(0.7, pt) }, spec));
    var ctl = el('div', 'pl-controls'), btns = ops.map(function (op, i) {
      var b = el('button', 'pl-op', op.label); b.type = 'button'; b.disabled = i > 0;
      b.addEventListener('click', function () { apply(i); }); ctl.appendChild(b); return b;
    });
    var reset = el('button', 'pl-link', 'Start over'); reset.type = 'button';
    reset.addEventListener('click', function () { rows = spec.rows.map(function (r) { return r.slice(); }); applied = 0; sync(); draw(); });
    ctl.appendChild(reset); box.appendChild(ctl);
    var out = readout(box);
    function eqText(r) {
      var parts = [];
      r.slice(0, 3).forEach(function (c, j) {
        if (Math.abs(c) < 1e-12) return;
        var mag = Math.abs(c) === 1 ? '' : fmt(Math.abs(c));
        parts.push((c < 0 ? (parts.length ? ' − ' : '−') : (parts.length ? ' + ' : '')) + mag + names[j]);
      });
      return (parts.join('') || '0') + ' = ' + fmt(r[3]);
    }
    function sync() { btns.forEach(function (b, i) { b.disabled = i !== applied; }); }
    function apply(i) {
      if (i !== applied) return;
      var op = ops[i], t = rows[op.target].slice();
      Object.keys(op.add).forEach(function (k) { var c = op.add[k]; t = t.map(function (x, j) { return x + c * rows[+k][j]; }); });
      rows[op.target] = t; applied += 1; sync(); draw();
    }
    function draw() {
      S.draw(function (add) {
        rows.forEach(function (r, i) {
          if (r.slice(0, 3).every(function (c) { return Math.abs(c) < 1e-12; })) return;
          add.plane({ normal: r.slice(0, 3), center: pt, size: spec.size || S.R * 0.55, color: paint[i % 3], label: 'plane ' + (i + 1) });
        });
        add.point({ p: pt, color: C.ink, r: 5, label: spec.point_label || '' });
      });
      out.innerHTML = rows.map(function (r, i) { return '<span style="color:' + (INK[colorOf(paint[i % 3])] || colorOf(paint[i % 3])) + '">' + eqText(r) + '</span>'; }).join(' &nbsp; ');
      if (!done && applied === ops.length) { done = true; onGoal({ last: eqText(rows[ops[ops.length - 1].target]) }); }
    }
    sync(); draw();
    var api = { set: function (o) { if (o.applied != null) { while (applied < o.applied) apply(applied); } },
                solve: function () { api.set({ applied: ops.length }); } };
    return api;
  }

  function space(box, spec, onGoal) {
    return ({ 'null': spaceNull, combo: spaceCombo, 'two-lines': spaceLines, 'plane-point': spacePlanePoint,
              planes: spacePlanes })[spec.mode](box, spec, onGoal);
  }

  var KINDS = { 'circle-map': circleMap, 'grid-map': gridMap, lines: linesWidget, 'fit-line': fitLine, project: project,
                iterate: iterate, phase: phase, space: space, combine: combine };

  window.PolyaExplore = {
    kinds: Object.keys(KINDS),
    autoView: autoView,  // for the browser test
    mount: function (container, spec, onGoal) {
      var api = KINDS[spec.kind](container, spec, onGoal || function () {});
      container.polyaWidget = api;
      return api;
    }
  };
})();
