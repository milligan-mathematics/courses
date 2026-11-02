/* Praxis diagnostic: figure renderer.
   PXD.renderFigure(fig) -> HTML string ("<figure class='pxd-fig'>...</figure>").
   Figure types (all need  alt: "text description for screen readers"):
     svg     { svg: '<svg viewBox="0 0 300 200">...</svg>' }             hand-drawn (geometry)
     plot    { fns:[{f:'x*x-4', from, to, color, dash, label}], dots:[[x,y]...], points:[{x,y,open,label,dx,dy}],
               segments:[[x1,y1,x2,y2,{dash,color}]], vlines:[x], hlines:[y], labels:[{x,y,text,dx,dy}],
               line:{m,b}, xr:[lo,hi], yr:[lo,hi], xstep, ystep, xlabel, ylabel, hideNumbers, noGrid }
     scatter alias of plot (use dots / line)
     hist    { bins:[[lo,hi,count],...], xlabel, ylabel, showCounts }
     box     { series:[{label,min,q1,med,q3,max,outliers:[..]}], range:[lo,hi], step, xlabel }
     dot     { values:[..], range:[lo,hi], step, xlabel }
     bar     { categories:[{label,value}], ylabel, ymax, ystep }
   Function expressions are JavaScript in x: use ^ for powers, and sin cos tan exp ln log10 sqrt abs
   floor ceil pow PI E asin acos atan sign min max; piecewise via  x<1 ? x+2 : 3 .

   5003 kit: the seven types above were copied unchanged from the 5165 kit (24 Oct 2026). `praxis-5003-figs` (25 Oct 2026)
   added the five below, at the end of this file; each needs alt, and each is drawn to scale unless stated. Checked by
   courses/253/praxis-5003-figs/checks-figs.py (Python port; this JavaScript has not been run yet, see tools/compare-figs.js).
     numberline { range:[lo,hi], step, den, labelEvery, hideLabels:[v..], arrows, points:[{x,label,open}],
                  intervals:[{from,to,fromOpen,toOpen}] }     (range must be a whole number of steps; den: integer, tick labels
                  print as fractions in lowest terms, with the whole part for mixed numbers; from/to null = runs off that end
                  (use arrows:true); labelEvery: label every k-th tick; hideLabels: leave those ticks unlabelled)
     circle     { slices:[{label,value,text}], show:'pct'|'value'|'none', total }   (clockwise from 12 o'clock; values need not
                  add to 100; give total to assert it; text overrides a slice's whole label; keep slices at 4% or more)
     area       { kind:'array',  rows, cols, mark:'dot'|'square', splitCol, splitRow }
                { kind:'model',  top:[widths], side:[heights], showProducts, cellText:[[..],[..]], notToScale }
                                 (to scale by default; throws if a cell holding text is under 20 px; with notToScale the
                                 cells are equal, and the figure's caption must say "Not drawn to scale")
                { kind:'bars',   bars:[{parts, shaded, label}] }   (equal-length fraction bars, first `shaded` parts filled)
     net        { kind:'grid',    cells:[[row,col],..], size, labels:[[row,col,text],..] }   (unit squares, e.g. cube nets)
                { kind:'prism',   l, w, h, unit, labels:{l,w,h} }   (cross-shaped net of a rectangular box; '' hides a label)
                { kind:'pyramid', b, s, unit, labels:{b,s} }        (square pyramid; s = height of a triangular face, must exceed b/2)
     dbar       { categories:[{label,a,b}], series:['name a','name b'], ylabel, xlabel, ymax, ystep, showValues }
                (series b is hatched as well as orange, so the two series differ without colour) */
(function () {
  var PXD = window.PXD = window.PXD || {};
  var uid = 0;
  var PALETTE = { a: '#F36E24', b: '#009CDE', g: '#008552', m: '#6E6E6E', k: '#222222' };

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function num(v) { return Math.round(v * 100) / 100; }
  function tickLabel(v) { var r = parseFloat(v.toFixed(6)); return String(r).replace('-', '−'); }
  function niceStep(span, target) {
    var raw = span / (target || 8), pow = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / pow;
    var n = f < 1.5 ? 1 : f < 3.5 ? 2 : f < 7.5 ? 5 : 10;
    return n * pow;
  }
  function ticks(lo, hi, step) {
    var out = [], s = step || niceStep(hi - lo), k = Math.ceil(lo / s - 1e-9);
    for (var v = k * s; v <= hi + 1e-9; v += s) out.push(parseFloat(v.toFixed(9)));
    return out;
  }
  function compile(expr) {
    var body = String(expr).replace(/\^/g, '**');
    var pre = 'var sin=Math.sin,cos=Math.cos,tan=Math.tan,exp=Math.exp,ln=Math.log,log10=Math.log10,sqrt=Math.sqrt,abs=Math.abs,' +
      'pow=Math.pow,floor=Math.floor,ceil=Math.ceil,PI=Math.PI,E=Math.E,asin=Math.asin,acos=Math.acos,atan=Math.atan,' +
      'sign=Math.sign,min=Math.min,max=Math.max;';
    return new Function('x', pre + 'return (' + body + ');');
  }
  PXD.compileExpr = compile;

  function wrap(fig, svg) {
    var alt = esc(fig.alt || 'Figure');
    return '<figure class="pxd-fig">' + svg.replace('<svg', '<svg role="img" aria-label="' + alt + '"') +
      (fig.caption ? '<figcaption>' + fig.caption + '</figcaption>' : '') + '</figure>';
  }

  /* ---------- plot / scatter ---------- */
  function plot(fig) {
    var W = 440, H = 300, L = fig.ylabel ? 56 : 44, R = 16, T = 14, B = fig.xlabel ? 46 : 32;
    var xr = fig.xr || [-5, 5], yr = fig.yr || [-5, 5];
    var pw = W - L - R, ph = H - T - B, id = 'pc' + (++uid);
    function sx(x) { return L + (x - xr[0]) / (xr[1] - xr[0]) * pw; }
    function sy(y) { return H - B - (y - yr[0]) / (yr[1] - yr[0]) * ph; }
    var xt = ticks(xr[0], xr[1], fig.xstep), yt = ticks(yr[0], yr[1], fig.ystep);
    var s = '<svg class="fig" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">';
    s += '<defs><clipPath id="' + id + '"><rect x="' + L + '" y="' + T + '" width="' + pw + '" height="' + ph + '"/></clipPath></defs>';
    if (!fig.noGrid) {
      xt.forEach(function (v) { s += '<line class="grid" x1="' + num(sx(v)) + '" y1="' + T + '" x2="' + num(sx(v)) + '" y2="' + (H - B) + '"/>'; });
      yt.forEach(function (v) { s += '<line class="grid" x1="' + L + '" y1="' + num(sy(v)) + '" x2="' + (W - R) + '" y2="' + num(sy(v)) + '"/>'; });
    }
    var ax = (xr[0] <= 0 && xr[1] >= 0) ? sx(0) : L, ay = (yr[0] <= 0 && yr[1] >= 0) ? sy(0) : H - B;
    s += '<rect class="frame" x="' + L + '" y="' + T + '" width="' + pw + '" height="' + ph + '"/>';
    s += '<line class="axis" x1="' + L + '" y1="' + num(ay) + '" x2="' + (W - R) + '" y2="' + num(ay) + '"/>';
    s += '<line class="axis" x1="' + num(ax) + '" y1="' + T + '" x2="' + num(ax) + '" y2="' + (H - B) + '"/>';
    if (!fig.hideNumbers) {
      xt.forEach(function (v) {
        if (Math.abs(v) < 1e-9 && xr[0] < 0 && xr[1] > 0) return;
        s += '<text class="tick" x="' + num(sx(v)) + '" y="' + (H - B + 15) + '" text-anchor="middle">' + tickLabel(v) + '</text>';
      });
      yt.forEach(function (v) {
        if (Math.abs(v) < 1e-9 && yr[0] < 0 && yr[1] > 0) return;
        s += '<text class="tick" x="' + (L - 6) + '" y="' + num(sy(v) + 4) + '" text-anchor="end">' + tickLabel(v) + '</text>';
      });
    }
    if (fig.xlabel) s += '<text class="alab" x="' + num(L + pw / 2) + '" y="' + (H - 6) + '" text-anchor="middle">' + fig.xlabel + '</text>';
    if (fig.ylabel) s += '<text class="alab" transform="translate(13 ' + num(T + ph / 2) + ') rotate(-90)" text-anchor="middle">' + fig.ylabel + '</text>';

    s += '<g clip-path="url(#' + id + ')">';
    (fig.vlines || []).forEach(function (v) { s += '<line class="dash" x1="' + num(sx(v)) + '" y1="' + T + '" x2="' + num(sx(v)) + '" y2="' + (H - B) + '"/>'; });
    (fig.hlines || []).forEach(function (v) { s += '<line class="dash" x1="' + L + '" y1="' + num(sy(v)) + '" x2="' + (W - R) + '" y2="' + num(sy(v)) + '"/>'; });
    if (fig.line) {
      s += '<line class="ln c-a" x1="' + num(sx(xr[0])) + '" y1="' + num(sy(fig.line.m * xr[0] + fig.line.b)) + '" x2="' + num(sx(xr[1])) + '" y2="' + num(sy(fig.line.m * xr[1] + fig.line.b)) + '"/>';
    }
    (fig.fns || []).forEach(function (fn, i) {
      var f = compile(fn.f), a = fn.from != null ? fn.from : xr[0], b = fn.to != null ? fn.to : xr[1];
      var N = 500, d = '', pen = false, prev = null, span = yr[1] - yr[0];
      for (var k = 0; k <= N; k++) {
        var x = a + (b - a) * k / N, y;
        try { y = f(x); } catch (e) { y = NaN; }
        if (typeof y !== 'number' || !isFinite(y) || Math.abs(y) > 6 * span + Math.abs(yr[0]) + Math.abs(yr[1]) || (prev !== null && Math.abs(y - prev) > 1.2 * span)) { pen = false; prev = isFinite(y) ? y : null; continue; }
        d += (pen ? 'L' : 'M') + num(sx(x)) + ' ' + num(sy(y)); pen = true; prev = y;
      }
      var col = fn.color || ['a', 'b', 'g', 'm'][i % 4];
      s += '<path class="curve c-' + col + (fn.dash ? ' dashed' : '') + '" d="' + d + '"/>';
    });
    (fig.segments || []).forEach(function (g) {
      var o = g[4] || {};
      s += '<line class="ln c-' + (o.color || 'a') + (o.dash ? ' dashed' : '') + '" x1="' + num(sx(g[0])) + '" y1="' + num(sy(g[1])) + '" x2="' + num(sx(g[2])) + '" y2="' + num(sy(g[3])) + '"/>';
    });
    (fig.dots || []).forEach(function (p) { s += '<circle class="dotpt" cx="' + num(sx(p[0])) + '" cy="' + num(sy(p[1])) + '" r="3.6"/>'; });
    (fig.points || []).forEach(function (p) {
      s += '<circle class="' + (p.open ? 'openpt' : 'closedpt') + '" cx="' + num(sx(p.x)) + '" cy="' + num(sy(p.y)) + '" r="4.4"/>';
    });
    s += '</g>';
    (fig.points || []).forEach(function (p) {
      if (p.label) s += '<text class="plab" x="' + num(sx(p.x) + (p.dx != null ? p.dx : 8)) + '" y="' + num(sy(p.y) + (p.dy != null ? p.dy : -8)) + '">' + p.label + '</text>';
    });
    (fig.labels || []).forEach(function (t) {
      s += '<text class="plab" x="' + num(sx(t.x) + (t.dx || 0)) + '" y="' + num(sy(t.y) + (t.dy || 0)) + '">' + t.text + '</text>';
    });
    (fig.fns || []).forEach(function (fn) {
      if (fn.label && fn.labelAt) s += '<text class="plab" x="' + num(sx(fn.labelAt[0]) + 4) + '" y="' + num(sy(fn.labelAt[1]) - 4) + '">' + fn.label + '</text>';
    });
    return s + '</svg>';
  }

  /* ---------- histogram ---------- */
  function hist(fig) {
    var W = 440, H = 280, L = 52, R = 14, T = 14, B = fig.xlabel ? 50 : 34;
    var bins = fig.bins, lo = bins[0][0], hi = bins[bins.length - 1][1];
    var maxc = Math.max.apply(null, bins.map(function (b) { return b[2]; }));
    var ymax = fig.ymax || Math.ceil(maxc / (fig.ystep || niceStep(maxc, 6))) * (fig.ystep || niceStep(maxc, 6));
    var pw = W - L - R, ph = H - T - B;
    function sx(x) { return L + (x - lo) / (hi - lo) * pw; }
    function sy(y) { return H - B - y / ymax * ph; }
    var s = '<svg class="fig" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">';
    ticks(0, ymax, fig.ystep || niceStep(ymax, 6)).forEach(function (v) {
      s += '<line class="grid" x1="' + L + '" y1="' + num(sy(v)) + '" x2="' + (W - R) + '" y2="' + num(sy(v)) + '"/>';
      s += '<text class="tick" x="' + (L - 6) + '" y="' + num(sy(v) + 4) + '" text-anchor="end">' + tickLabel(v) + '</text>';
    });
    bins.forEach(function (b) {
      s += '<rect class="bar" x="' + num(sx(b[0])) + '" y="' + num(sy(b[2])) + '" width="' + num(sx(b[1]) - sx(b[0])) + '" height="' + num(H - B - sy(b[2])) + '"/>';
      if (fig.showCounts) s += '<text class="tick" x="' + num((sx(b[0]) + sx(b[1])) / 2) + '" y="' + num(sy(b[2]) - 4) + '" text-anchor="middle">' + b[2] + '</text>';
    });
    var edges = bins.map(function (b) { return b[0]; }).concat([hi]);
    edges.forEach(function (v) { s += '<text class="tick" x="' + num(sx(v)) + '" y="' + (H - B + 15) + '" text-anchor="middle">' + tickLabel(v) + '</text>'; });
    s += '<line class="axis" x1="' + L + '" y1="' + (H - B) + '" x2="' + (W - R) + '" y2="' + (H - B) + '"/><line class="axis" x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + (H - B) + '"/>';
    if (fig.xlabel) s += '<text class="alab" x="' + num(L + pw / 2) + '" y="' + (H - 6) + '" text-anchor="middle">' + fig.xlabel + '</text>';
    s += '<text class="alab" transform="translate(13 ' + num(T + ph / 2) + ') rotate(-90)" text-anchor="middle">' + (fig.ylabel || 'Frequency') + '</text>';
    return s + '</svg>';
  }

  /* ---------- box plots ---------- */
  function box(fig) {
    var n = fig.series.length, rowH = 54, W = 440, L = 96, R = 18, T = 10, B = fig.xlabel ? 50 : 34, H = T + n * rowH + B;
    var lo = fig.range[0], hi = fig.range[1], pw = W - L - R;
    function sx(x) { return L + (x - lo) / (hi - lo) * pw; }
    var s = '<svg class="fig" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">';
    ticks(lo, hi, fig.step).forEach(function (v) {
      s += '<line class="grid" x1="' + num(sx(v)) + '" y1="' + T + '" x2="' + num(sx(v)) + '" y2="' + (H - B) + '"/><text class="tick" x="' + num(sx(v)) + '" y="' + (H - B + 15) + '" text-anchor="middle">' + tickLabel(v) + '</text>';
    });
    s += '<line class="axis" x1="' + L + '" y1="' + (H - B) + '" x2="' + (W - R) + '" y2="' + (H - B) + '"/>';
    fig.series.forEach(function (r, i) {
      var cy = T + i * rowH + rowH / 2, h = 24;
      s += '<text class="alab" x="' + (L - 8) + '" y="' + (cy + 4) + '" text-anchor="end">' + (r.label || '') + '</text>';
      s += '<line class="ln c-k" x1="' + num(sx(r.min)) + '" y1="' + cy + '" x2="' + num(sx(r.q1)) + '" y2="' + cy + '"/><line class="ln c-k" x1="' + num(sx(r.q3)) + '" y1="' + cy + '" x2="' + num(sx(r.max)) + '" y2="' + cy + '"/>';
      s += '<line class="ln c-k" x1="' + num(sx(r.min)) + '" y1="' + (cy - 8) + '" x2="' + num(sx(r.min)) + '" y2="' + (cy + 8) + '"/><line class="ln c-k" x1="' + num(sx(r.max)) + '" y1="' + (cy - 8) + '" x2="' + num(sx(r.max)) + '" y2="' + (cy + 8) + '"/>';
      s += '<rect class="boxr" x="' + num(sx(r.q1)) + '" y="' + (cy - h / 2) + '" width="' + num(sx(r.q3) - sx(r.q1)) + '" height="' + h + '"/>';
      s += '<line class="ln c-k thick" x1="' + num(sx(r.med)) + '" y1="' + (cy - h / 2) + '" x2="' + num(sx(r.med)) + '" y2="' + (cy + h / 2) + '"/>';
      (r.outliers || []).forEach(function (o) { s += '<circle class="dotpt" cx="' + num(sx(o)) + '" cy="' + cy + '" r="3.4"/>'; });
    });
    if (fig.xlabel) s += '<text class="alab" x="' + num(L + pw / 2) + '" y="' + (H - 6) + '" text-anchor="middle">' + fig.xlabel + '</text>';
    return s + '</svg>';
  }

  /* ---------- dot plot ---------- */
  function dot(fig) {
    var W = 440, L = 24, R = 24, T = 10, B = fig.xlabel ? 50 : 34;
    var lo = fig.range[0], hi = fig.range[1], step = fig.step || 1, pw = W - L - R;
    var counts = {}, maxc = 1;
    fig.values.forEach(function (v) { counts[v] = (counts[v] || 0) + 1; maxc = Math.max(maxc, counts[v]); });
    var r = Math.min(9, pw / ((hi - lo) / step) / 2.4), gap = r * 2.15, H = T + maxc * gap + 10 + B;
    function sx(x) { return L + (x - lo) / (hi - lo) * pw; }
    var s = '<svg class="fig" viewBox="0 0 ' + W + ' ' + Math.round(H) + '" xmlns="http://www.w3.org/2000/svg">';
    s += '<line class="axis" x1="' + L + '" y1="' + (H - B) + '" x2="' + (W - R) + '" y2="' + (H - B) + '"/>';
    ticks(lo, hi, step).forEach(function (v) {
      s += '<line class="axis" x1="' + num(sx(v)) + '" y1="' + (H - B) + '" x2="' + num(sx(v)) + '" y2="' + (H - B + 5) + '"/><text class="tick" x="' + num(sx(v)) + '" y="' + (H - B + 18) + '" text-anchor="middle">' + tickLabel(v) + '</text>';
    });
    Object.keys(counts).forEach(function (k) {
      for (var i = 0; i < counts[k]; i++) s += '<circle class="dotpt big" cx="' + num(sx(+k)) + '" cy="' + num(H - B - r - 2 - i * gap) + '" r="' + num(r) + '"/>';
    });
    if (fig.xlabel) s += '<text class="alab" x="' + num(L + pw / 2) + '" y="' + (H - 6) + '" text-anchor="middle">' + fig.xlabel + '</text>';
    return s + '</svg>';
  }

  /* ---------- bar chart (categorical) ---------- */
  function bar(fig) {
    var cats = fig.categories, W = 440, H = 280, L = 52, R = 14, T = 14, B = 50, pw = W - L - R, ph = H - T - B;
    var maxv = Math.max.apply(null, cats.map(function (c) { return c.value; }));
    var st = fig.ystep || niceStep(maxv, 6), ymax = fig.ymax || Math.ceil(maxv / st) * st;
    function sy(y) { return H - B - y / ymax * ph; }
    var bw = pw / cats.length, s = '<svg class="fig" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">';
    ticks(0, ymax, st).forEach(function (v) {
      s += '<line class="grid" x1="' + L + '" y1="' + num(sy(v)) + '" x2="' + (W - R) + '" y2="' + num(sy(v)) + '"/><text class="tick" x="' + (L - 6) + '" y="' + num(sy(v) + 4) + '" text-anchor="end">' + tickLabel(v) + '</text>';
    });
    cats.forEach(function (c, i) {
      var x = L + i * bw + bw * 0.18;
      s += '<rect class="bar" x="' + num(x) + '" y="' + num(sy(c.value)) + '" width="' + num(bw * 0.64) + '" height="' + num(H - B - sy(c.value)) + '"/>';
      s += '<text class="tick" x="' + num(x + bw * 0.32) + '" y="' + (H - B + 16) + '" text-anchor="middle">' + c.label + '</text>';
    });
    s += '<line class="axis" x1="' + L + '" y1="' + (H - B) + '" x2="' + (W - R) + '" y2="' + (H - B) + '"/><line class="axis" x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + (H - B) + '"/>';
    if (fig.ylabel) s += '<text class="alab" transform="translate(13 ' + num(T + ph / 2) + ') rotate(-90)" text-anchor="middle">' + fig.ylabel + '</text>';
    return s + '</svg>';
  }

  /* ===== 5003 figure helpers (praxis-5003-figs, 25 Oct 2026): numberline, circle, area, net, dbar =====
     Everything below is new; nothing above this line was changed. Geometry is drawn to scale. The line-for-line
     Python port is courses/253/praxis-5003-figs/figs_port.py, and checks-figs.py recomputes each drawing from its spec. */

  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function sumOf(a) { return a.reduce(function (p, q) { return p + q; }, 0); }
  function svgOpen(cls, W, H) { return '<svg class="' + cls + '" viewBox="0 0 ' + num(W) + ' ' + num(H) + '" xmlns="http://www.w3.org/2000/svg">'; }

  /* ---------- number line ---------- */
  function nlLabel(x, ay, v, den) {
    var base = '<text class="tick" x="' + x + '" y="' + (ay + 26) + '" text-anchor="middle">';
    if (!den) return base + tickLabel(v) + '</text>';
    var t = Math.round(v * den), a = Math.abs(t), whole = Math.floor(a / den), rem = a % den, g = gcd(rem, den);
    var left = (t < 0 ? '−' : '') + (whole > 0 || rem === 0 ? whole : '');
    if (rem === 0) return base + left + '</text>';
    var fx = left ? x + 8 : x, out = '';
    if (left) out += '<text class="tick" x="' + num(x - (whole > 0 ? 8 : 6)) + '" y="' + (ay + 33) + '" text-anchor="middle">' + left + '</text>';
    out += '<text class="tick fn" x="' + num(fx) + '" y="' + (ay + 23) + '" text-anchor="middle">' + (rem / g) + '</text>';
    out += '<line class="fbar" x1="' + num(fx - 8) + '" y1="' + (ay + 26) + '" x2="' + num(fx + 8) + '" y2="' + (ay + 26) + '"/>';
    out += '<text class="tick fd" x="' + num(fx) + '" y="' + (ay + 38) + '" text-anchor="middle">' + (den / g) + '</text>';
    return out;
  }
  function numberline(fig) {
    var W = 440, L = 28, R = 28, ay = 52, lo = fig.range[0], hi = fig.range[1], pw = W - L - R;
    var step = fig.step || niceStep(hi - lo, 8), n = Math.round((hi - lo) / step);
    if (!(hi > lo) || n < 1 || Math.abs(n * step - (hi - lo)) > 1e-9) throw new Error('numberline: range must be a whole number of steps');
    var den = fig.den || 0, every = fig.labelEvery || 1, hide = fig.hideLabels || [], H = den ? 108 : 92, ext = fig.arrows ? 14 : 6;
    function sx(x) { return L + (x - lo) / (hi - lo) * pw; }
    function inside(x) { if (x < lo - 1e-9 || x > hi + 1e-9) throw new Error('numberline: ' + x + ' is outside the range'); return x; }
    var s = svgOpen('fig', W, H), k, v, x, lab;
    s += '<line class="axis" x1="' + (L - ext) + '" y1="' + ay + '" x2="' + (W - R + ext) + '" y2="' + ay + '"/>';
    if (fig.arrows) {
      s += '<polygon class="arrow" points="' + (L - ext - 4) + ',' + ay + ' ' + (L - ext + 6) + ',' + (ay - 5) + ' ' + (L - ext + 6) + ',' + (ay + 5) + '"/>';
      s += '<polygon class="arrow" points="' + (W - R + ext + 4) + ',' + ay + ' ' + (W - R + ext - 6) + ',' + (ay - 5) + ' ' + (W - R + ext - 6) + ',' + (ay + 5) + '"/>';
    }
    for (k = 0; k <= n; k++) {
      v = parseFloat((lo + k * step).toFixed(9)); x = num(sx(v));
      lab = k % every === 0 && !hide.some(function (h) { return Math.abs(h - v) < 1e-9; });
      s += '<line class="axis tk" x1="' + x + '" y1="' + (ay - (lab ? 8 : 5)) + '" x2="' + x + '" y2="' + (ay + (lab ? 8 : 5)) + '"/>';
      if (lab) {
        if (den && Math.abs(v * den - Math.round(v * den)) > 1e-6) throw new Error('numberline: ' + v + ' is not a multiple of 1/' + den);
        s += nlLabel(x, ay, v, den);
      }
    }
    (fig.intervals || []).forEach(function (iv) {
      var a = iv.from == null ? L - ext : num(sx(inside(iv.from))), b = iv.to == null ? W - R + ext : num(sx(inside(iv.to)));
      s += '<line class="ln thick c-a" x1="' + a + '" y1="' + ay + '" x2="' + b + '" y2="' + ay + '"/>';
      if (iv.from == null) s += '<polygon class="arrow c-a" points="' + (a - 4) + ',' + ay + ' ' + (a + 6) + ',' + (ay - 5) + ' ' + (a + 6) + ',' + (ay + 5) + '"/>';
      if (iv.to == null) s += '<polygon class="arrow c-a" points="' + (b + 4) + ',' + ay + ' ' + (b - 6) + ',' + (ay - 5) + ' ' + (b - 6) + ',' + (ay + 5) + '"/>';
      if (iv.from != null) s += '<circle class="' + (iv.fromOpen ? 'openpt' : 'closedpt') + '" cx="' + a + '" cy="' + ay + '" r="4.8"/>';
      if (iv.to != null) s += '<circle class="' + (iv.toOpen ? 'openpt' : 'closedpt') + '" cx="' + b + '" cy="' + ay + '" r="4.8"/>';
    });
    (fig.points || []).forEach(function (p) {
      var px = num(sx(inside(p.x)));
      s += '<circle class="' + (p.open ? 'openpt' : 'closedpt') + '" cx="' + px + '" cy="' + ay + '" r="4.8"/>';
      if (p.label) s += '<text class="plab" x="' + px + '" y="' + (ay - 14) + '" text-anchor="middle">' + p.label + '</text>';
    });
    return s + '</svg>';
  }

  /* ---------- circle graph ---------- */
  function pctText(p) { return String(Math.round(p * 10) / 10) + '%'; }
  function circle(fig) {
    var W = 440, H = 300, cx = 220, cy = 152, r = 96, sl = fig.slices, total = sumOf(sl.map(function (c) { return c.value; }));
    var show = fig.show || 'pct', a0 = 0, s = svgOpen('fig', W, H);
    if (fig.total && Math.abs(fig.total - total) > 1e-9) throw new Error('circle: slices add to ' + total + ', not ' + fig.total);
    sl.forEach(function (c, i) {
      var f = c.value / total, a1 = a0 + f * 2 * Math.PI, am = (a0 + a1) / 2, cls = 'sl sl' + (i % 6), sn = Math.sin(am), cs = Math.cos(am);
      if (f > 0.9999) s += '<circle class="' + cls + '" cx="' + cx + '" cy="' + cy + '" r="' + r + '"/>';
      else s += '<path class="' + cls + '" d="M' + cx + ' ' + cy + ' L' + num(cx + r * Math.sin(a0)) + ' ' + num(cy - r * Math.cos(a0)) + ' A' + r + ' ' + r + ' 0 ' + (a1 - a0 > Math.PI ? 1 : 0) + ' 1 ' + num(cx + r * Math.sin(a1)) + ' ' + num(cy - r * Math.cos(a1)) + ' Z"/>';
      var txt = c.text || (c.label + (show === 'pct' ? ' ' + pctText(100 * f) : show === 'value' ? ' ' + c.value : ''));
      s += '<text class="tick" x="' + num(cx + (r + 12) * sn) + '" y="' + num(cy - (r + 12) * cs + (cs > 0.5 ? -2 : cs < -0.5 ? 12 : 4)) + '" text-anchor="' + (sn > 0.25 ? 'start' : sn < -0.25 ? 'end' : 'middle') + '">' + txt + '</text>';
      a0 = a1;
    });
    return s + '</svg>';
  }

  /* ---------- area model / array / fraction bars ---------- */
  function arrayFig(fig) {
    var rows = fig.rows, cols = fig.cols, cell = Math.min(32, Math.floor(300 / cols), Math.floor(200 / rows)), M = 14, i, j;
    var W = cols * cell + 2 * M, H = rows * cell + 2 * M, s = svgOpen('fig', W, H);
    for (i = 0; i < rows; i++) for (j = 0; j < cols; j++) {
      if (fig.mark === 'square') s += '<rect class="cellbox" x="' + (M + j * cell) + '" y="' + (M + i * cell) + '" width="' + cell + '" height="' + cell + '"/>';
      else s += '<circle class="dotpt big" cx="' + num(M + (j + 0.5) * cell) + '" cy="' + num(M + (i + 0.5) * cell) + '" r="' + num(cell * 0.32) + '"/>';
    }
    if (fig.splitCol) s += '<line class="dash" x1="' + (M + fig.splitCol * cell) + '" y1="' + (M - 6) + '" x2="' + (M + fig.splitCol * cell) + '" y2="' + (H - M + 6) + '"/>';
    if (fig.splitRow) s += '<line class="dash" x1="' + (M - 6) + '" y1="' + (M + fig.splitRow * cell) + '" x2="' + (W - M + 6) + '" y2="' + (M + fig.splitRow * cell) + '"/>';
    return s + '</svg>';
  }
  function modelFig(fig) {
    var top = fig.top, side = fig.side, sc = Math.min(300 / sumOf(top), 190 / sumOf(side)), L = 44, T = 30, M = 12, xs = [L], ys = [T];
    var even = !!fig.notToScale, cw = Math.min(110, 300 / top.length), chh = Math.min(60, 190 / side.length);
    top.forEach(function (a) { xs.push(xs[xs.length - 1] + (even ? cw : a * sc)); });
    side.forEach(function (b) { ys.push(ys[ys.length - 1] + (even ? chh : b * sc)); });
    var s = svgOpen('fig', xs[xs.length - 1] + M, ys[ys.length - 1] + M);
    top.forEach(function (a, j) { s += '<text class="alab" x="' + num((xs[j] + xs[j + 1]) / 2) + '" y="' + (T - 10) + '" text-anchor="middle">' + a + '</text>'; });
    side.forEach(function (b, i) { s += '<text class="alab" x="' + (L - 8) + '" y="' + num((ys[i] + ys[i + 1]) / 2 + 4) + '" text-anchor="end">' + b + '</text>'; });
    side.forEach(function (b, i) {
      top.forEach(function (a, j) {
        var t = fig.cellText ? fig.cellText[i][j] : (fig.showProducts ? a * b : '');
        if (t !== '' && Math.min(xs[j + 1] - xs[j], ys[i + 1] - ys[i]) < 20) throw new Error('area model: a cell is too small for its text; use notToScale (and say so in the caption) or friendlier numbers');
        s += '<rect class="cellbox" x="' + num(xs[j]) + '" y="' + num(ys[i]) + '" width="' + num(xs[j + 1] - xs[j]) + '" height="' + num(ys[i + 1] - ys[i]) + '"/>';
        if (t !== '') s += '<text class="alab" x="' + num((xs[j] + xs[j + 1]) / 2) + '" y="' + num((ys[i] + ys[i + 1]) / 2 + 4) + '" text-anchor="middle">' + t + '</text>';
      });
    });
    return s + '</svg>';
  }
  function barsFig(fig) {
    var bars = fig.bars, hasLab = bars.some(function (b) { return b.label; }), L = hasLab ? 64 : 14, R = 14, T = 12, rowH = 30, gap = 18, pw = 440 - L - R;
    var s = svgOpen('fig', 440, 2 * T + bars.length * rowH + (bars.length - 1) * gap);
    bars.forEach(function (b, i) {
      var y = T + i * (rowH + gap), w = pw / b.parts, k;
      if (b.label) s += '<text class="alab" x="' + (L - 8) + '" y="' + (y + rowH / 2 + 4) + '" text-anchor="end">' + b.label + '</text>';
      for (k = 0; k < b.parts; k++) s += '<rect class="' + (k < b.shaded ? 'cellon' : 'cellbox') + '" x="' + num(L + k * w) + '" y="' + y + '" width="' + num(w) + '" height="' + rowH + '"/>';
    });
    return s + '</svg>';
  }
  function areaFig(fig) {
    if (fig.kind === 'array') return arrayFig(fig);
    if (fig.kind === 'model') return modelFig(fig);
    if (fig.kind === 'bars') return barsFig(fig);
    throw new Error('area: kind must be array, model or bars');
  }

  /* ---------- nets ---------- */
  function netGrid(fig) {
    var cells = fig.cells, z = fig.size || 40, M = 12, rmin = 1e9, cmin = 1e9, rmax = -1e9, cmax = -1e9, labs = {};
    cells.forEach(function (c) { rmin = Math.min(rmin, c[0]); rmax = Math.max(rmax, c[0]); cmin = Math.min(cmin, c[1]); cmax = Math.max(cmax, c[1]); });
    (fig.labels || []).forEach(function (t) { labs[t[0] + ',' + t[1]] = t[2]; });
    var s = svgOpen('fig geo', (cmax - cmin + 1) * z + 2 * M, (rmax - rmin + 1) * z + 2 * M);
    cells.forEach(function (c) {
      var x = M + (c[1] - cmin) * z, y = M + (c[0] - rmin) * z;
      s += '<rect class="fb" x="' + x + '" y="' + y + '" width="' + z + '" height="' + z + '"/>';
      if (labs[c[0] + ',' + c[1]] !== undefined) s += '<text class="up" x="' + (x + z / 2) + '" y="' + (y + z / 2 + 5) + '" text-anchor="middle">' + labs[c[0] + ',' + c[1]] + '</text>';
    });
    return s + '</svg>';
  }
  function netPrism(fig) {
    var l = fig.l, w = fig.w, h = fig.h, u = fig.unit ? ' ' + fig.unit : '', lab = fig.labels || {}, Wu = 2 * h + 2 * l, Hu = w + 2 * h;
    var k = Math.min(300 / Wu, 200 / Hu), X = 44, Y = 14, s = svgOpen('fig geo', Wu * k + 2 * X, Hu * k + Y + 36);
    function rc(cls, a, b, c, d) { return '<rect class="' + cls + '" x="' + num(X + a * k) + '" y="' + num(Y + b * k) + '" width="' + num(c * k) + '" height="' + num(d * k) + '"/>'; }
    s += rc('fg', 0, h, h, w) + rc('fb', h, h, l, w) + rc('fg', h + l, h, h, w) + rc('fb', 2 * h + l, h, l, w) + rc('fa', h, 0, l, h) + rc('fa', h, h + w, l, h);
    var tl = lab.l !== undefined ? lab.l : l + u, th = lab.h !== undefined ? lab.h : h + u, tw = lab.w !== undefined ? lab.w : w + u;
    if (tl !== '') s += '<text class="up" x="' + num(X + (h + l / 2) * k) + '" y="' + num(Y + Hu * k + 18) + '" text-anchor="middle">' + tl + '</text>';
    if (th !== '') s += '<text class="up" x="' + num(X + (h + l) * k + 8) + '" y="' + num(Y + (w + 1.5 * h) * k + 5) + '" text-anchor="start">' + th + '</text>';
    if (tw !== '') s += '<text class="up" x="' + (X - 8) + '" y="' + num(Y + (h + w / 2) * k + 5) + '" text-anchor="end">' + tw + '</text>';
    return s + '</svg>';
  }
  function netPyramid(fig) {
    var b = fig.b, t = fig.s, u = fig.unit ? ' ' + fig.unit : '', lab = fig.labels || {}, Wu = b + 2 * t, k = 230 / Wu, X = 24, Y = 22;
    var s = svgOpen('fig geo', Wu * k + 2 * X, Wu * k + Y + 16);
    function P(x, y) { return num(X + x * k) + ',' + num(Y + y * k); }
    s += '<rect class="fb" x="' + num(X + t * k) + '" y="' + num(Y + t * k) + '" width="' + num(b * k) + '" height="' + num(b * k) + '"/>';
    s += '<polygon class="fa" points="' + [P(t, t), P(t + b, t), P(t + b / 2, 0)].join(' ') + '"/>';
    s += '<polygon class="fa" points="' + [P(t, t + b), P(t + b, t + b), P(t + b / 2, 2 * t + b)].join(' ') + '"/>';
    s += '<polygon class="fa" points="' + [P(t, t), P(t, t + b), P(0, t + b / 2)].join(' ') + '"/>';
    s += '<polygon class="fa" points="' + [P(t + b, t), P(t + b, t + b), P(2 * t + b, t + b / 2)].join(' ') + '"/>';
    s += '<line class="thin dash" x1="' + num(X + (t + b / 2) * k) + '" y1="' + num(Y) + '" x2="' + num(X + (t + b / 2) * k) + '" y2="' + num(Y + t * k) + '"/>';
    var ts = lab.s !== undefined ? lab.s : t + u, tb = lab.b !== undefined ? lab.b : b + u;
    if (ts !== '') s += '<text class="up halo" x="' + num(X + (t + b / 2) * k + 6) + '" y="' + num(Y + t * k * 0.7 + 4) + '" text-anchor="start">' + ts + '</text>';
    if (tb !== '') s += '<text class="up" x="' + num(X + (t + b / 2) * k) + '" y="' + num(Y + (t + b) * k - 8) + '" text-anchor="middle">' + tb + '</text>';
    return s + '</svg>';
  }
  function netFig(fig) {
    if (fig.kind === 'grid') return netGrid(fig);
    if (fig.kind === 'prism') return netPrism(fig);
    if (fig.kind === 'pyramid') return netPyramid(fig);
    throw new Error('net: kind must be grid, prism or pyramid');
  }

  /* ---------- double bar graph ---------- */
  function dbar(fig) {
    var cats = fig.categories, W = 440, H = 300, L = 52, R = 14, T = 38, B = 50, pw = W - L - R, ph = H - T - B, id = 'pd' + (++uid);
    var maxv = Math.max.apply(null, cats.map(function (c) { return Math.max(c.a, c.b); }));
    var st = fig.ystep || niceStep(maxv, 6), ymax = fig.ymax || Math.ceil(maxv / st) * st, names = fig.series || ['', ''];
    function sy(y) { return H - B - y / ymax * ph; }
    var bw = pw / cats.length, barW = bw * 0.34, s = svgOpen('fig', W, H);
    s += '<defs><pattern id="' + id + '" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#fff"/><rect width="3" height="6" fill="#F36E24"/></pattern></defs>';
    ticks(0, ymax, st).forEach(function (v) {
      s += '<line class="grid" x1="' + L + '" y1="' + num(sy(v)) + '" x2="' + (W - R) + '" y2="' + num(sy(v)) + '"/><text class="tick" x="' + (L - 6) + '" y="' + num(sy(v) + 4) + '" text-anchor="end">' + tickLabel(v) + '</text>';
    });
    cats.forEach(function (c, i) {
      var xa = L + i * bw + bw * 0.15, xb = xa + barW;
      s += '<rect class="bar" x="' + num(xa) + '" y="' + num(sy(c.a)) + '" width="' + num(barW) + '" height="' + num(H - B - sy(c.a)) + '"/>';
      s += '<rect class="bar2" fill="url(#' + id + ')" x="' + num(xb) + '" y="' + num(sy(c.b)) + '" width="' + num(barW) + '" height="' + num(H - B - sy(c.b)) + '"/>';
      if (fig.showValues) s += '<text class="tick" x="' + num(xa + barW / 2) + '" y="' + num(sy(c.a) - 4) + '" text-anchor="middle">' + c.a + '</text><text class="tick" x="' + num(xb + barW / 2) + '" y="' + num(sy(c.b) - 4) + '" text-anchor="middle">' + c.b + '</text>';
      s += '<text class="tick" x="' + num(xb) + '" y="' + (H - B + 16) + '" text-anchor="middle">' + c.label + '</text>';
    });
    s += '<line class="axis" x1="' + L + '" y1="' + (H - B) + '" x2="' + (W - R) + '" y2="' + (H - B) + '"/><line class="axis" x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + (H - B) + '"/>';
    s += '<rect class="bar" x="' + L + '" y="8" width="14" height="14"/><text class="tick" x="' + (L + 20) + '" y="20">' + names[0] + '</text>';
    s += '<rect class="bar2" fill="url(#' + id + ')" x="' + (L + 150) + '" y="8" width="14" height="14"/><text class="tick" x="' + (L + 170) + '" y="20">' + names[1] + '</text>';
    if (fig.ylabel) s += '<text class="alab" transform="translate(13 ' + num(T + ph / 2) + ') rotate(-90)" text-anchor="middle">' + fig.ylabel + '</text>';
    if (fig.xlabel) s += '<text class="alab" x="' + num(L + pw / 2) + '" y="' + (H - 6) + '" text-anchor="middle">' + fig.xlabel + '</text>';
    return s + '</svg>';
  }

  PXD.renderFigure = function (fig) {
    if (!fig) return '';
    switch (fig.type) {
      case 'numberline': return wrap(fig, numberline(fig));
      case 'circle': return wrap(fig, circle(fig));
      case 'area': return wrap(fig, areaFig(fig));
      case 'net': return wrap(fig, netFig(fig));
      case 'dbar': return wrap(fig, dbar(fig));
      case 'svg': return wrap(fig, fig.svg.replace('<svg', '<svg class="fig geo"'));
      case 'plot': case 'scatter': return wrap(fig, plot(fig));
      case 'hist': return wrap(fig, hist(fig));
      case 'box': return wrap(fig, box(fig));
      case 'dot': return wrap(fig, dot(fig));
      case 'bar': return wrap(fig, bar(fig));
    }
    return '';
  };
})();
