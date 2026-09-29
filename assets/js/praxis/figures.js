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
   floor ceil pow PI E asin acos atan sign min max; piecewise via  x<1 ? x+2 : 3 . */
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

  PXD.renderFigure = function (fig) {
    if (!fig) return '';
    switch (fig.type) {
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
