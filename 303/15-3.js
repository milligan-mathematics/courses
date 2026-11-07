/* MATH 303 §15.3 page: hiking scene, two-paths lab, predict-then-check cards.
   Plain JS, no libraries (MathJax is loaded by the site). Same engine style as 15-1.js. */
(function () {
  'use strict';

  const C = { orange: '#F36E24', orangeDark: '#CD5920', blue: '#009CDE', blueDark: '#007bb0', green: '#008552',
    gray: '#6E6E6E', ink: '#333333', grid: '#e6e6e6', axis: '#bdbdbd' };

  // ---------- tiny expression parser: x, y, z, numbers, + - * / ^, functions, pi, e ----------
  const FUNCS = { sin: Math.sin, cos: Math.cos, tan: Math.tan, exp: Math.exp, sqrt: Math.sqrt, ln: Math.log,
    log: Math.log, abs: Math.abs, atan: Math.atan };
  const NAMES = Object.keys(FUNCS).concat(['pi', 'x', 'y', 'z', 'e']).sort((a, b) => b.length - a.length);
  function tokenize(s) {
    s = s.replace(/π/g, 'pi').replace(/−/g, '-').replace(/·|×/g, '*').replace(/\s+/g, '').toLowerCase();
    const out = []; let i = 0;
    while (i < s.length) {
      const ch = s[i];
      if (/[0-9.]/.test(ch)) { let j = i; while (j < s.length && /[0-9.]/.test(s[j])) j++; out.push({ t: 'n', v: parseFloat(s.slice(i, j)) }); i = j; continue; }
      if (/[a-z]/.test(ch)) { const nm = NAMES.find(n => s.startsWith(n, i)); if (!nm) throw new Error('Unknown name at "' + s.slice(i) + '"'); out.push({ t: 'id', v: nm }); i += nm.length; continue; }
      if ('+-*/^(),'.includes(ch)) { out.push({ t: ch }); i++; continue; }
      throw new Error('Unexpected "' + ch + '"');
    }
    const res = []; // implicit multiplication: 2x, 2(x), x(y), )(, )x, x y
    for (let k = 0; k < out.length; k++) {
      const a = res[res.length - 1], b = out[k];
      const aEnds = a && (a.t === 'n' || a.t === ')' || (a.t === 'id' && !FUNCS[a.v]));
      const bStarts = b.t === 'n' || b.t === '(' || b.t === 'id';
      if (aEnds && bStarts) res.push({ t: '*' });
      res.push(b);
    }
    return res;
  }
  function parse(src) {
    const tk = tokenize(src); let p = 0;
    const peek = () => tk[p], eat = t => { if (!tk[p] || tk[p].t !== t) throw new Error('Expected ' + t); return tk[p++]; };
    function expr() { let f = term(); while (peek() && (peek().t === '+' || peek().t === '-')) { const op = tk[p++].t, g = term(), h = f; f = op === '+' ? v => h(v) + g(v) : v => h(v) - g(v); } return f; }
    function term() { let f = unary(); while (peek() && (peek().t === '*' || peek().t === '/')) { const op = tk[p++].t, g = unary(), h = f; f = op === '*' ? v => h(v) * g(v) : v => h(v) / g(v); } return f; }
    function unary() { if (peek() && peek().t === '-') { p++; const g = unary(); return v => -g(v); } if (peek() && peek().t === '+') { p++; return unary(); } return power(); }
    function power() { const b = atom(); if (peek() && peek().t === '^') { p++; const e = unary(); return v => Math.pow(b(v), e(v)); } return b; }
    function atom() {
      const t = peek(); if (!t) throw new Error('Unexpected end');
      if (t.t === 'n') { p++; return () => t.v; }
      if (t.t === '(') { p++; const f = expr(); eat(')'); return f; }
      if (t.t === 'id') {
        p++;
        if (t.v === 'x') return v => v.x; if (t.v === 'y') return v => v.y; if (t.v === 'z') return v => v.z;
        if (t.v === 'pi') return () => Math.PI; if (t.v === 'e') return () => Math.E;
        const fn = FUNCS[t.v]; const arg = (peek() && peek().t === '(') ? (p++, (() => { const f = expr(); eat(')'); return f; })()) : power();
        return v => fn(arg(v));
      }
      throw new Error('Unexpected "' + t.t + '"');
    }
    const f = expr(); if (p !== tk.length) throw new Error('Extra input'); return f;
  }
  const evalNum = s => parse(s)({ x: 0, y: 0, z: 0 });

  const typeset = el => { if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([el]).catch(() => {}); };
  const fmt = (v, d = 3) => { if (!isFinite(v)) return '—'; let s = (Math.abs(v) < 5e-4 ? 0 : v).toFixed(d); if (s.includes('.')) s = s.replace(/\.?0+$/, ''); return (s === '-0' ? '0' : s || '0').replace('-', '−'); };

  function setupCanvas(cv, aspect) {
    const ctx = cv.getContext('2d');
    function fit() {
      const w = cv.clientWidth || 300, h = w * (typeof aspect === 'function' ? aspect(w) : aspect), dpr = window.devicePixelRatio || 1;
      cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); return { w, h };
    }
    return { ctx, fit };
  }
  function arrow(ctx, x0, y0, x1, y1, color, width) {
    const dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy); if (L < 0.5) return;
    const hl = Math.min(7, L * 0.4), a = Math.atan2(dy, dx);
    ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = width || 1.5;
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1 - hl * 0.6 * Math.cos(a), y1 - hl * 0.6 * Math.sin(a)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x1, y1);
    ctx.lineTo(x1 - hl * Math.cos(a - 0.4), y1 - hl * Math.sin(a - 0.4));
    ctx.lineTo(x1 - hl * Math.cos(a + 0.4), y1 - hl * Math.sin(a + 0.4)); ctx.closePath(); ctx.fill();
  }
  // marching squares: calls seg(ax, ay, bx, by) in world coordinates for level c
  function contour(fn, x0, x1, y0, y1, N, M, levels, seg) {
    const xs = [], ys = [], V = [];
    for (let i = 0; i <= N; i++) xs.push(x0 + (x1 - x0) * i / N);
    for (let j = 0; j <= M; j++) ys.push(y0 + (y1 - y0) * j / M);
    for (let i = 0; i <= N; i++) { V.push([]); for (let j = 0; j <= M; j++) V[i].push(fn(xs[i], ys[j])); }
    levels.forEach(c => {
      for (let i = 0; i < N; i++) for (let j = 0; j < M; j++) {
        const v = [V[i][j], V[i + 1][j], V[i + 1][j + 1], V[i][j + 1]], P = [[xs[i], ys[j]], [xs[i + 1], ys[j]], [xs[i + 1], ys[j + 1]], [xs[i], ys[j + 1]]];
        const hits = [];
        for (let e = 0; e < 4; e++) { const a = v[e], b = v[(e + 1) % 4]; if ((a - c) * (b - c) < 0) { const tt = (c - a) / (b - a), A = P[e], B = P[(e + 1) % 4]; hits.push([A[0] + tt * (B[0] - A[0]), A[1] + tt * (B[1] - A[1])]); } }
        for (let h = 0; h + 1 < hits.length; h += 2) seg(hits[h][0], hits[h][1], hits[h + 1][0], hits[h + 1][1], c);
      }
    });
  }

  // ---------- 1. Hiking scene ----------
  // Map units: 1 unit = 200 m. Elevation h is measured from the trailhead A, so h(A) = 0 and h(B) = 300 m exactly.
  const HIKE = {
    A: [-3.4, -1.8], B: [2.0, 1.0], S: [-1.2, 1.6], M_PER_UNIT: 200, CLIMB: 300, WEIGHT: 800,
    direct: [[-3.4, -1.8], [2.0, 1.0]],
    switchback: [[-3.4, -1.8], [-2.24, -0.07], [-0.89, -1.54], [-1.24, 0.27], [-0.04, -0.92], [-0.24, 0.61], [0.81, -0.3], [0.75, 0.95], [1.67, 0.32], [2.0, 1.0]]
  };
  const G = (x, y) => Math.exp(-((x - HIKE.B[0]) ** 2 + (y - HIKE.B[1]) ** 2) / 4) + 0.35 * Math.exp(-((x - HIKE.S[0]) ** 2 + (y - HIKE.S[1]) ** 2) / 1.5);
  const GA = G(...HIKE.A), GB = G(...HIKE.B);
  const elev = (x, y) => HIKE.CLIMB * (G(x, y) - GA) / (GB - GA);

  function Hike(root) {
    const map = root.querySelector('.hike-map'), prof = root.querySelector('.hike-prof');
    const M = setupCanvas(map, w => (w < 520 ? 0.72 : 0.56)), Pf = setupCanvas(prof, w => (w < 520 ? 0.34 : 0.2));
    const X0 = -4.2, X1 = 4.2, Y0 = -2.6, Y1 = 2.6;
    const status = root.querySelector('.hike-status');
    let hikers = [], running = false, last = null, drawing = false, drawPts = null, relief = null, reliefW = 0;
    const toPx = (x, y, s) => [(x - X0) / (X1 - X0) * s.w, (Y1 - y) / (Y1 - Y0) * s.h];
    const toW = (px, py, s) => [X0 + px / s.w * (X1 - X0), Y1 - py / s.h * (Y1 - Y0)];
    function trailInfo(pts) { const cum = [0]; for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1])); return { pts, cum, len: cum[cum.length - 1] }; }
    function at(tr, s) {
      if (s >= tr.len) return tr.pts[tr.pts.length - 1].slice();
      let i = 1; while (tr.cum[i] < s) i++;
      const u = (s - tr.cum[i - 1]) / (tr.cum[i] - tr.cum[i - 1] || 1), a = tr.pts[i - 1], b = tr.pts[i];
      return [a[0] + u * (b[0] - a[0]), a[1] + u * (b[1] - a[1])];
    }
    const TR = { direct: trailInfo(HIKE.direct), switchback: trailInfo(HIKE.switchback) };
    function buildRelief(s) {
      const W = Math.max(60, Math.round(s.w / 4)), H = Math.max(30, Math.round(s.h / 4)), off = document.createElement('canvas');
      off.width = W; off.height = H; const c2 = off.getContext('2d'), img = c2.createImageData(W, H);
      for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
        const x = X0 + (i + 0.5) / W * (X1 - X0), y = Y1 - (j + 0.5) / H * (Y1 - Y0), t = Math.max(0, Math.min(1, elev(x, y) / 300)), k = 4 * (j * W + i);
        img.data[k] = 196 + 40 * t; img.data[k + 1] = 222 - 12 * t; img.data[k + 2] = 178 - 30 * t; img.data[k + 3] = 255;
      }
      c2.putImageData(img, 0, 0); relief = off; reliefW = s.w;
    }
    function drawTrail(ctx, s, pts, color, dash) {
      ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.setLineDash(dash || []); ctx.beginPath();
      pts.forEach(([x, y], i) => { const [px, py] = toPx(x, y, s); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }); ctx.stroke(); ctx.setLineDash([]);
    }
    function draw() {
      const s = M.fit(), ctx = M.ctx;
      if (!relief || reliefW !== s.w) buildRelief(s);
      ctx.imageSmoothingEnabled = true; ctx.drawImage(relief, 0, 0, s.w, s.h);
      ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(110,80,40,0.45)'; ctx.beginPath();
      contour(elev, X0, X1, Y0, Y1, 84, 52, [50, 100, 150, 200, 250], (ax, ay, bx, by) => { const [p, q] = toPx(ax, ay, s), [r, t] = toPx(bx, by, s); ctx.moveTo(p, q); ctx.lineTo(r, t); });
      ctx.stroke();
      ctx.fillStyle = 'rgba(90,60,30,0.85)'; ctx.font = '11px sans-serif';
      [[50, 3.47, -1.24], [150, 2.92, -0.39], [250, 2.47, 0.29]].forEach(([v, x, y]) => { const [px, py] = toPx(x, y, s); ctx.fillText(v + ' m', px, py); });
      drawTrail(ctx, s, HIKE.switchback, C.green, [6, 4]);
      drawTrail(ctx, s, HIKE.direct, C.orangeDark, [6, 4]);
      hikers.forEach(h => { if (h.custom) drawTrail(ctx, s, h.tr.pts, C.blue, [6, 4]); });
      if (drawPts) drawTrail(ctx, s, drawPts, C.blue);
      hikers.forEach(h => drawTrail(ctx, s, h.trace, h.color));
      const [ax, ay] = toPx(...HIKE.A, s), [bx, by] = toPx(...HIKE.B, s);
      ctx.fillStyle = C.ink; ctx.beginPath(); ctx.arc(ax, ay, 5, 0, 7); ctx.fill();
      ctx.font = 'bold 12px sans-serif'; ctx.fillText('A  trailhead', ax + 8, ay + 4);
      ctx.fillStyle = '#8d6e63'; ctx.fillRect(bx - 7, by - 4, 14, 10); ctx.beginPath(); ctx.moveTo(bx - 9, by - 4); ctx.lineTo(bx, by - 12); ctx.lineTo(bx + 9, by - 4); ctx.fill();
      ctx.fillStyle = C.ink; ctx.fillText('B  cabin', bx + 12, by - 2);
      hikers.forEach(h => {
        const [px, py] = toPx(h.pos[0], h.pos[1], s);
        ctx.fillStyle = h.color; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(px, py, 6.5, 0, 7); ctx.fill(); ctx.stroke();
      });
      if (drawing) { ctx.fillStyle = C.blueDark; ctx.font = '13px sans-serif'; ctx.fillText('Drag from A to the cabin to draw your trail', 8, 18); }
      drawProfile();
    }
    function drawProfile() {
      const s = Pf.fit(), ctx = Pf.ctx, pad = { l: 40, r: 8, t: 8, b: 20 };
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, s.w, s.h);
      const maxD = Math.max(3, ...hikers.map(h => h.tr.len * HIKE.M_PER_UNIT / 1000 * (h.round ? 1 : 1)), TR.switchback.len * HIKE.M_PER_UNIT / 1000);
      const X = d => pad.l + d / maxD * (s.w - pad.l - pad.r), Y = e => s.h - pad.b - e / 320 * (s.h - pad.t - pad.b);
      ctx.strokeStyle = C.grid; ctx.fillStyle = C.gray; ctx.font = '10px sans-serif'; ctx.lineWidth = 1;
      [0, 100, 200, 300].forEach(e => { ctx.beginPath(); ctx.moveTo(pad.l, Y(e)); ctx.lineTo(s.w - pad.r, Y(e)); ctx.stroke(); ctx.fillText(e + ' m', 2, Y(e) + 3); });
      for (let d = 0; d <= maxD; d += 1) { const lb = d + ' km', tw = ctx.measureText(lb).width; ctx.fillText(lb, Math.min(s.w - tw - 2, Math.max(pad.l - 4, X(d) - tw / 2)), s.h - 5); }
      hikers.forEach(h => {
        ctx.strokeStyle = h.color; ctx.lineWidth = 2; ctx.beginPath();
        h.prof.forEach(([d, e], i) => i ? ctx.lineTo(X(d), Y(e)) : ctx.moveTo(X(d), Y(e))); ctx.stroke();
      });
      if (!hikers.length) { ctx.fillStyle = C.gray; ctx.font = '12px sans-serif'; ctx.fillText('Elevation profile: appears as the hikers walk', pad.l + 6, pad.t + 14); }
    }
    function report() {
      const rows = hikers.map(h => {
        const km = h.s * HIKE.M_PER_UNIT / 1000, gain = elev(...h.pos);
        return `<tr><th style="color:${h.color}">${h.name}</th><td>${km.toFixed(2)} km</td><td>${fmt(gain, 0)} m</td><td><b>${fmt(h.work / 1000, 1)} kJ</b></td></tr>`;
      }).join('');
      status.innerHTML = hikers.length ? `<table class="lab-tab hike-tab"><tr><th>hiker</th><th>walked</th><th>height above A</th><th>work done by gravity</th></tr>${rows}</table>` : '';
    }
    function step(now) {
      if (!running) return;
      const dt = last === null ? 0 : Math.min(0.05, (now - last) / 1000); last = now;
      hikers.forEach(h => {
        if (h.s >= h.tr.len) return;
        const prevE = elev(...h.pos);
        h.s = Math.min(h.tr.len, h.s + 1.5 * dt); h.pos = at(h.tr, h.s);
        const e = elev(...h.pos);
        h.work += -HIKE.WEIGHT * (e - prevE); // gravity's work on this step: −(weight)·(rise)
        h.trace.push(h.pos.slice()); h.prof.push([h.s * HIKE.M_PER_UNIT / 1000, e]);
      });
      report(); draw();
      if (hikers.some(h => h.s < h.tr.len)) requestAnimationFrame(step); else { running = false; last = null; done(); }
    }
    function done() {
      const fin = hikers.map(h => `${h.name}: ${fmt(h.work / 1000, 1)} kJ`).join(', ');
      status.insertAdjacentHTML('beforeend', `<p class="hike-done">Done. Work done by gravity: ${fin}.</p>`);
    }
    function start(list) {
      hikers = list.map(o => ({ ...o, s: 0, pos: o.tr.pts[0].slice(), work: 0, trace: [o.tr.pts[0].slice()], prof: [[0, elev(...o.tr.pts[0])]] }));
      report(); if (!running) { running = true; last = null; requestAnimationFrame(step); }
    }
    const both = () => start([{ name: 'Direct trail', tr: TR.direct, color: C.orangeDark }, { name: 'Switchbacks', tr: TR.switchback, color: C.green }]);
    const round = () => start([{ name: 'Up the switchbacks, down the direct trail', tr: trailInfo(HIKE.switchback.concat(HIKE.direct.slice().reverse().slice(1))), color: '#7b4fa0', round: true }]);
    root.querySelector('[data-act=both]').addEventListener('click', both);
    root.querySelector('[data-act=round]').addEventListener('click', round);
    const drawBtn = root.querySelector('[data-act=draw]');
    drawBtn.addEventListener('click', () => {
      drawing = !drawing; drawPts = null; drawBtn.textContent = drawing ? 'Cancel drawing' : 'Draw your own trail';
      drawBtn.setAttribute('aria-pressed', String(drawing)); draw();
    });
    const pt = e => { const r = map.getBoundingClientRect(); return toW(e.clientX - r.left, e.clientY - r.top, { w: r.width, h: r.height }); };
    map.addEventListener('pointerdown', e => {
      if (!drawing) return; e.preventDefault(); try { map.setPointerCapture(e.pointerId); } catch (err) { /* synthetic events */ }
      drawPts = [HIKE.A.slice(), pt(e)]; draw();
    });
    map.addEventListener('pointermove', e => {
      if (!drawing || !drawPts) return; const p = pt(e), q = drawPts[drawPts.length - 1];
      if (Math.hypot(p[0] - q[0], p[1] - q[1]) > 0.06) { drawPts.push([Math.max(X0, Math.min(X1, p[0])), Math.max(Y0, Math.min(Y1, p[1]))]); draw(); }
    });
    map.addEventListener('pointerup', () => {
      if (!drawing || !drawPts) return;
      const q = drawPts[drawPts.length - 1];
      if (Math.hypot(q[0] - HIKE.B[0], q[1] - HIKE.B[1]) < 0.45) drawPts.push(HIKE.B.slice());
      const tr = trailInfo(drawPts); drawPts = null; drawing = false; drawBtn.textContent = 'Draw your own trail'; drawBtn.setAttribute('aria-pressed', 'false');
      if (tr.len < 0.2) { draw(); return; }
      start([{ name: 'Your trail', tr, color: C.blue, custom: true }]);
    });
    window.addEventListener('resize', draw); draw();
    return { both, round, el: root };
  }

  // ---------- 2. Two-paths lab ----------
  const LPRE = {
    gcos: { label: '⟨2x cos y, −x² sin y⟩ = ∇(x² cos y)', P: (x, y) => 2 * x * Math.cos(y), Q: (x, y) => -x * x * Math.sin(y),
      f: (x, y) => x * x * Math.cos(y), fname: 'x² cos y', test: 'P<sub>y</sub> = −2x sin y = Q<sub>x</sub>: passes everywhere',
      view: [0.6, 1.55, 2.4], A: [0, 0], B: [1, Math.PI], p1: [[1 / 9, Math.PI / 3], [4 / 9, 2 * Math.PI / 3]], p2: [[-1.3, 1.0], [2.3, 2.1]], sharp: false },
    exy: { label: '⟨y e^(xy), x e^(xy)⟩ = ∇(e^(xy))', P: (x, y) => y * Math.exp(x * y), Q: (x, y) => x * Math.exp(x * y),
      f: (x, y) => Math.exp(x * y), fname: 'e<sup>xy</sup>', test: 'P<sub>y</sub> = e<sup>xy</sup> + xy e<sup>xy</sup> = Q<sub>x</sub>: passes everywhere',
      view: [1, 0.5, 1.9], A: [0, 1], B: [2, 0], p1: [[0.67, 0.67], [1.33, 0.33]], p2: [[0.2, -0.6], [2.2, 1.3]], sharp: false },
    y2x2: { label: '⟨y², x²⟩ (not conservative)', P: (x, y) => y * y, Q: (x, y) => x * x, f: null,
      test: 'P<sub>y</sub> = 2y, Q<sub>x</sub> = 2x: fails off the line y = x',
      view: [0.5, 0.5, 1.3], A: [0, 0], B: [1, 1], p1: [[1 / 3, 1 / 3], [2 / 3, 2 / 3]], p2: [[1, 0], [1, 0.5]], sharp: true },
    vortex: { label: 'Vortex ⟨−y, x⟩ / (x² + y²)', P: (x, y) => -y / (x * x + y * y), Q: (x, y) => x / (x * x + y * y), f: null, hole: 0.15,
      test: 'P<sub>y</sub> = Q<sub>x</sub> = (y² − x²)/(x² + y²)² wherever the field is defined, but the origin is a hole',
      view: [0, 0, 2], A: [1, 0], B: [-1, 0], p1: [[0.8, 1.1], [-0.8, 1.1]], p2: [[0.8, -1.1], [-0.8, -1.1]], sharp: false },
    custom: { label: 'Type your own ⟨P, Q⟩', view: [0, 0, 3], A: [-2, -1], B: [2, 1], p1: [[-0.7, -0.3], [0.7, 0.3]], p2: [[-1.5, 2], [1.5, -2]], sharp: false }
  };
  function PathLab(root) {
    const keys = root.dataset.presets.split(',');
    root.innerHTML = `
      <div class="lab-grid">
        <div><canvas class="lab-cv" role="img" aria-label="Vector field with two paths from A to B. Drag A, B or the round handles to reshape the paths."></canvas>
          <div class="lab-hint">Drag A, B, or the small round handles on each path. Orange = path 1, blue = path 2.</div></div>
        <div class="lab-side">
          <label class="lab-lbl">Field <select class="lab-sel">${keys.map(k => `<option value="${k}">${LPRE[k].label}</option>`).join('')}</select></label>
          <div class="lab-custom" hidden>
            <label class="lab-lbl">P(x, y) = <input class="lab-P" value="y cos x" spellcheck="false"></label>
            <label class="lab-lbl">Q(x, y) = <input class="lab-Q" value="sin x" spellcheck="false"></label>
            <button type="button" class="btn-s lab-apply">Draw it</button> <span class="lab-err" role="alert"></span>
          </div>
          <label class="lab-chk"><input type="checkbox" class="lab-sharp"> sharp corners (straight pieces between handles)</label>
          <div class="lab-read" aria-live="polite"></div>
          <div class="lab-btns">
            <button type="button" class="btn-s" data-act="trace">Walk both paths</button>
            <button type="button" class="btn-s ghost" data-act="reset">Reset paths</button>
          </div>
        </div>
      </div>`;
    const cv = root.querySelector('canvas'), { ctx, fit } = setupCanvas(cv, 1);
    const sel = root.querySelector('.lab-sel'), read = root.querySelector('.lab-read'), cust = root.querySelector('.lab-custom'), sharpBox = root.querySelector('.lab-sharp');
    let key, F, A, B, H1, H2, view, drag = null, trace = null, res = null;
    const toPx = (x, y, s) => [(x - view[0] + view[2]) / (2 * view[2]) * s.w, (view[1] + view[2] - y) / (2 * view[2]) * s.h];
    const toW = (px, py, s) => [view[0] - view[2] + px / s.w * 2 * view[2], view[1] + view[2] - py / s.h * 2 * view[2]];
    const ok = (x, y) => !(F.hole && Math.hypot(x, y) < F.hole);
    // dense samples of a path through nodes; Catmull-Rom (endpoints doubled) or straight pieces
    function samples(nodes, sharp) {
      const out = [nodes[0].slice()], n = 300;
      for (let i = 0; i < nodes.length - 1; i++) {
        const p0 = nodes[Math.max(0, i - 1)], p1 = nodes[i], p2 = nodes[i + 1], p3 = nodes[Math.min(nodes.length - 1, i + 2)];
        for (let k = 1; k <= n; k++) {
          const t = k / n;
          if (sharp) { out.push([p1[0] + t * (p2[0] - p1[0]), p1[1] + t * (p2[1] - p1[1])]); continue; }
          const t2 = t * t, t3 = t2 * t;
          out.push([0, 1].map(c => 0.5 * (2 * p1[c] + (-p0[c] + p2[c]) * t + (2 * p0[c] - 5 * p1[c] + 4 * p2[c] - p3[c]) * t2 + (-p0[c] + 3 * p1[c] - 3 * p2[c] + p3[c]) * t3)));
        }
      }
      return out;
    }
    function work(pts) { // line integral along the sampled polyline; cum[k] = work up to sample k
      const cum = [0]; let bad = false;
      for (let k = 1; k < pts.length; k++) {
        const mx = (pts[k][0] + pts[k - 1][0]) / 2, my = (pts[k][1] + pts[k - 1][1]) / 2;
        if (!ok(mx, my)) bad = true;
        const a = pts[k - 1], b = pts[k], dx = b[0] - a[0], dy = b[1] - a[1]; // Simpson's rule on each chord
        const Pm = (F.P(a[0], a[1]) + 4 * F.P(mx, my) + F.P(b[0], b[1])) / 6, Qm = (F.Q(a[0], a[1]) + 4 * F.Q(mx, my) + F.Q(b[0], b[1])) / 6;
        cum.push(cum[k - 1] + Pm * dx + Qm * dy);
      }
      return { cum, W: cum[cum.length - 1], bad };
    }
    function compute() {
      if (!F.P) { res = null; return; }
      const sh = sharpBox.checked, s1 = samples([A, H1[0], H1[1], B], sh), s2 = samples([A, H2[0], H2[1], B], sh);
      res = { s1, s2, w1: work(s1), w2: work(s2) };
    }
    function draw() {
      const s = fit();
      ctx.fillStyle = '#fafafa'; ctx.fillRect(0, 0, s.w, s.h);
      const lo = [view[0] - view[2], view[1] - view[2]], hi = [view[0] + view[2], view[1] + view[2]], stepG = view[2] > 2 ? 1 : 0.5;
      ctx.lineWidth = 1; ctx.fillStyle = C.gray; ctx.font = '11px sans-serif';
      for (let g = Math.ceil(lo[0] / stepG) * stepG; g <= hi[0]; g += stepG) { const [px] = toPx(g, 0, s); ctx.strokeStyle = Math.abs(g) < 1e-9 ? C.axis : C.grid; ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, s.h); ctx.stroke(); if (Math.abs(g) > 1e-9) ctx.fillText(+g.toFixed(1), px + 2, Math.min(s.h - 3, Math.max(12, toPx(0, 0, s)[1] + 12))); }
      for (let g = Math.ceil(lo[1] / stepG) * stepG; g <= hi[1]; g += stepG) { const [, py] = toPx(0, g, s); ctx.strokeStyle = Math.abs(g) < 1e-9 ? C.axis : C.grid; ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(s.w, py); ctx.stroke(); if (Math.abs(g) > 1e-9) ctx.fillText(+g.toFixed(1), Math.min(s.w - 24, Math.max(2, toPx(0, 0, s)[0] + 4)), py - 2); }
      if (F.f) { // level curves of the potential
        const vals = []; for (let i = 0; i <= 20; i++) for (let j = 0; j <= 20; j++) vals.push(F.f(lo[0] + (hi[0] - lo[0]) * i / 20, lo[1] + (hi[1] - lo[1]) * j / 20));
        vals.sort((a, b) => a - b); const a = vals[2], b = vals[vals.length - 3], lev = []; for (let k = 1; k <= 11; k++) lev.push(a + (b - a) * k / 12);
        ctx.strokeStyle = 'rgba(0,133,82,0.35)'; ctx.lineWidth = 1; ctx.beginPath();
        contour(F.f, lo[0], hi[0], lo[1], hi[1], 70, 70, lev, (ax, ay, bx, by) => { const [p, q] = toPx(ax, ay, s), [r, t] = toPx(bx, by, s); ctx.moveTo(p, q); ctx.lineTo(r, t); });
        ctx.stroke();
      }
      if (F.P) {
        const n = s.w < 420 ? 11 : 15, sp = s.w / n, pts = [];
        for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
          const [x, y] = toW((i + 0.5) * sp, (j + 0.5) * sp, s); if (!ok(x, y)) continue;
          const p = F.P(x, y), q = F.Q(x, y); if (!isFinite(p) || !isFinite(q)) continue; pts.push([x, y, p, q, Math.hypot(p, q)]);
        }
        const Ls = pts.map(a => a[4]).sort((a, b) => a - b), cap = Ls[Math.floor(Ls.length * 0.9)] || 1;
        pts.forEach(([x, y, p, q, L]) => {
          const k = Math.min(L, cap) / cap * 0.8 * sp / (L || 1), [px, py] = toPx(x, y, s);
          arrow(ctx, px - p * k / 2, py + q * k / 2, px + p * k / 2, py - q * k / 2, '#8cc3e3', 1.3);
        });
      }
      if (F.hole) { const [ox, oy] = toPx(0, 0, s); ctx.fillStyle = '#fff'; ctx.strokeStyle = C.gray; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(ox, oy, F.hole / (2 * view[2]) * s.w, 0, 7); ctx.fill(); ctx.stroke(); }
      if (res) {
        [[res.s2, C.blue], [res.s1, C.orange]].forEach(([pts, col]) => {
          ctx.strokeStyle = col; ctx.lineWidth = 3; ctx.beginPath();
          pts.forEach(([x, y], i) => { const [px, py] = toPx(x, y, s); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }); ctx.stroke();
        });
        [[H1, C.orangeDark], [H2, C.blueDark]].forEach(([H, col]) => H.forEach(([x, y]) => { const [px, py] = toPx(x, y, s); ctx.fillStyle = '#fff'; ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(px, py, 6, 0, 7); ctx.fill(); ctx.stroke(); }));
        if (trace) {
          const k = Math.min(res.s1.length - 1, Math.floor(trace.u * (res.s1.length - 1)));
          [[res.s1, C.orangeDark], [res.s2, C.blueDark]].forEach(([pts, col]) => { const [px, py] = toPx(pts[k][0], pts[k][1], s); ctx.fillStyle = col; ctx.beginPath(); ctx.arc(px, py, 6, 0, 7); ctx.fill(); });
        }
      }
      [[A, 'A'], [B, 'B']].forEach(([p, nm]) => { const [px, py] = toPx(p[0], p[1], s); ctx.fillStyle = C.ink; ctx.beginPath(); ctx.arc(px, py, 7, 0, 7); ctx.fill(); ctx.fillStyle = '#fff'; ctx.font = 'bold 10px sans-serif'; ctx.fillText(nm, px - 3.5, py + 3.5); });
    }
    function readout() {
      if (!F.P) { read.innerHTML = '<p>Type P and Q, then press <b>Draw it</b>.</p>'; return; }
      const k = trace ? Math.min(res.s1.length - 1, Math.floor(trace.u * (res.s1.length - 1))) : res.s1.length - 1;
      const w1 = res.w1.cum[k], w2 = res.w2.cum[k], here = trace && trace.u < 1;
      const warn = (res.w1.bad || res.w2.bad) ? '<p class="lab-err">A path runs through the hole at the origin, where the field is not defined. Move it away.</p>' : '';
      let potRow = '<tr><th>f(B) − f(A)</th><td>no potential known</td></tr>';
      if (F.f) potRow = here
        ? `<tr><th>f(dot) − f(A)</th><td>${fmt(F.f(...res.s1[k]) - F.f(...A))} and ${fmt(F.f(...res.s2[k]) - F.f(...A))}</td></tr>`
        : `<tr><th>f(B) − f(A), f = ${F.fname}</th><td>${fmt(F.f(...B) - F.f(...A))}</td></tr>`;
      read.innerHTML = warn + `<table class="lab-tab"><tr><th>A, B</th><td>(${fmt(A[0], 2)}, ${fmt(A[1], 2)}), (${fmt(B[0], 2)}, ${fmt(B[1], 2)})</td></tr>
        <tr><th>work along path 1${here ? ' so far' : ''}</th><td style="color:${C.orangeDark}"><b>${fmt(w1)}</b></td></tr>
        <tr><th>work along path 2${here ? ' so far' : ''}</th><td style="color:${C.blueDark}"><b>${fmt(w2)}</b></td></tr>
        ${here ? '' : `<tr><th>out along 1, back along 2 (a closed loop)</th><td>${fmt(w1 - w2)}</td></tr>`}
        ${potRow}
        <tr><th>component test</th><td>${F.test || testCustom()}</td></tr></table>`;
    }
    function testCustom() {
      const h = 1e-4; let worst = null;
      for (let i = 0; i < 7; i++) for (let j = 0; j < 7; j++) {
        const x = -2.6 + i * 0.87, y = -2.6 + j * 0.87, Py = (F.P(x, y + h) - F.P(x, y - h)) / (2 * h), Qx = (F.Q(x + h, y) - F.Q(x - h, y)) / (2 * h);
        if (isFinite(Py) && isFinite(Qx) && Math.abs(Py - Qx) > 1e-3 * (1 + Math.abs(Py) + Math.abs(Qx))) { worst = [x, y, Py, Qx]; break; }
      }
      return worst ? `fails, e.g. at (${fmt(worst[0], 2)}, ${fmt(worst[1], 2)}): P<sub>y</sub> = ${fmt(worst[2])}, Q<sub>x</sub> = ${fmt(worst[3])}` : 'P<sub>y</sub> = Q<sub>x</sub> at every point checked';
    }
    function refresh() { compute(); draw(); readout(); }
    function load(k) {
      key = k; sel.value = k; const pr = LPRE[k]; cust.hidden = k !== 'custom'; trace = null;
      view = pr.view.slice(); A = pr.A.slice(); B = pr.B.slice(); H1 = pr.p1.map(p => p.slice()); H2 = pr.p2.map(p => p.slice()); sharpBox.checked = !!pr.sharp;
      if (k === 'custom') applyCustom(); else { F = pr; refresh(); }
    }
    function applyCustom() {
      const err = root.querySelector('.lab-err');
      try {
        const P = parse(root.querySelector('.lab-P').value), Q = parse(root.querySelector('.lab-Q').value);
        F = { P: (x, y) => P({ x, y, z: 0 }), Q: (x, y) => Q({ x, y, z: 0 }), f: null }; err.textContent = '';
      } catch (e) { err.textContent = 'Could not read that: ' + e.message; F = LPRE.custom; }
      trace = null; refresh();
    }
    sel.addEventListener('change', () => load(sel.value));
    sharpBox.addEventListener('change', () => { trace = null; refresh(); });
    root.querySelector('.lab-apply').addEventListener('click', applyCustom);
    root.querySelector('[data-act=reset]').addEventListener('click', () => load(key));
    root.querySelector('[data-act=trace]').addEventListener('click', () => {
      if (!res) return; trace = { u: 0, last: null };
      const go = now => { if (!trace) return; if (trace.last !== null) trace.u = Math.min(1, trace.u + (now - trace.last) / 3500); trace.last = now; draw(); readout(); if (trace.u < 1) requestAnimationFrame(go); else { trace = null; draw(); readout(); } };
      requestAnimationFrame(go);
    });
    function pick(e) {
      const r = cv.getBoundingClientRect(), s = { w: r.width, h: r.height }, mx = e.clientX - r.left, my = e.clientY - r.top;
      const cands = [[A, 'A'], [B, 'B'], [H1[0]], [H1[1]], [H2[0]], [H2[1]]]; let best = null, bd = e.pointerType === 'touch' ? 26 : 16;
      cands.forEach(([p]) => { const [px, py] = toPx(p[0], p[1], s), d = Math.hypot(px - mx, py - my); if (d < bd) { bd = d; best = p; } });
      return best;
    }
    function move(e) {
      const r = cv.getBoundingClientRect(), [x, y] = toW(e.clientX - r.left, e.clientY - r.top, { w: r.width, h: r.height });
      drag[0] = Math.max(view[0] - view[2], Math.min(view[0] + view[2], x)); drag[1] = Math.max(view[1] - view[2], Math.min(view[1] + view[2], y));
      trace = null; refresh();
    }
    cv.addEventListener('pointerdown', e => { drag = pick(e); if (drag) { e.preventDefault(); try { cv.setPointerCapture(e.pointerId); } catch (err) { /* synthetic events */ } } });
    cv.addEventListener('pointermove', e => { if (drag) move(e); });
    cv.addEventListener('pointerup', () => { drag = null; });
    window.addEventListener('resize', draw);
    load(root.dataset.start || keys[0]);
    return { load, el: root, state: () => ({ key, A, B, w1: res && res.w1.W, w2: res && res.w2.W, df: F.f ? F.f(...B) - F.f(...A) : null }) };
  }

  // ---------- 3. Predict-then-check cards ----------
  function Choice(card) {
    const fb = card.querySelector('.pc-fb');
    card.querySelectorAll('[data-choice]').forEach(b => b.addEventListener('click', () => {
      card.querySelectorAll('[data-choice]').forEach(o => o.classList.remove('picked-ok', 'picked-no'));
      const right = b.dataset.choice === card.dataset.answer;
      b.classList.add(right ? 'picked-ok' : 'picked-no');
      fb.className = 'pc-fb ' + (right ? 'ok' : 'bad');
      fb.innerHTML = (right ? '<b>Yes.</b> ' : '<b>Not quite.</b> ') + (b.dataset.fb || '') + (right && card.dataset.more ? ' ' + card.dataset.more : '');
      typeset(fb);
    }));
  }
  // Typed: data-check="number expression", or data-fn="f(x,y,z)" to accept any function differing from it by a constant
  function sameUpToConstant(src, want) {
    const g = parse(src), f = parse(want), pts = [[0.3, 0.7, -0.4], [1.1, -0.6, 0.9], [-0.8, 1.3, 0.2], [0.5, 0.2, 1.4], [-1.2, -0.9, -0.7]];
    const v = pts.map(([x, y, z]) => g({ x, y, z }) - f({ x, y, z }));
    return v.every(d => isFinite(d) && Math.abs(d - v[0]) < 1e-6 * (1 + Math.abs(v[0])));
  }
  function Typed(card) {
    const ins = [...card.querySelectorAll('input[data-check], input[data-fn]')], fb = card.querySelector('.pc-fb');
    card.querySelector('[data-act=check]').addEventListener('click', () => {
      let allRight = true, bad = false;
      ins.forEach(inp => {
        let right;
        try {
          if (!inp.value.trim()) throw new Error('empty');
          if (inp.dataset.fn) right = sameUpToConstant(inp.value, inp.dataset.fn);
          else { const v = evalNum(inp.value), want = evalNum(inp.dataset.check); right = Math.abs(v - want) <= 0.005 * Math.max(1, Math.abs(want)); }
        } catch (e) { bad = true; inp.classList.add('no'); inp.classList.remove('yes'); return; }
        inp.classList.toggle('yes', right); inp.classList.toggle('no', !right); if (!right) allRight = false;
      });
      if (bad) { fb.className = 'pc-fb bad'; fb.textContent = card.dataset.syntax || 'Type a number or an expression such as sqrt(5), -1/2 or 2*pi.'; return; }
      fb.className = 'pc-fb ' + (allRight ? 'ok' : 'bad');
      fb.innerHTML = allRight ? '<b>Right.</b> ' + (card.dataset.ok || '') : '<b>Not yet.</b> ' + (card.dataset.hint || 'Check each entry.');
      typeset(fb);
    });
  }
  function Sorter(card) {
    const fb = card.querySelector('.pc-fb');
    card.querySelectorAll('.sort-row').forEach(row => row.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
      row.querySelectorAll('button').forEach(o => o.classList.remove('picked-ok', 'picked-no'));
      const right = b.dataset.v === row.dataset.answer; b.classList.add(right ? 'picked-ok' : 'picked-no');
      row.querySelector('.sort-why').innerHTML = right ? row.dataset.why : (row.dataset.nudge || 'Compute the cross partials and compare.');
      typeset(row);
      const done = [...card.querySelectorAll('.sort-row')].every(r => r.querySelector('.picked-ok'));
      if (done) { fb.className = 'pc-fb ok'; fb.innerHTML = card.dataset.ok; typeset(fb); }
    })));
  }
  function Reveal(btn) {
    const box = document.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', () => { const open = box.hidden; box.hidden = !open; btn.setAttribute('aria-expanded', String(open)); btn.textContent = open ? 'Hide' : btn.dataset.label; if (open) typeset(box); });
  }

  function init() {
    const hikes = [...document.querySelectorAll('.hike')].map(Hike);
    const labs = {};
    document.querySelectorAll('.lab[data-presets]').forEach(el => { labs[el.id] = PathLab(el); });
    document.querySelectorAll('.pc[data-kind=choice]').forEach(Choice);
    document.querySelectorAll('.pc[data-kind=typed]').forEach(Typed);
    document.querySelectorAll('.pc[data-kind=sort]').forEach(Sorter);
    document.querySelectorAll('button.reveal').forEach(Reveal);
    // "Show me" buttons: data-lab + data-preset (+ data-sharp), or data-hike="both|round"
    document.querySelectorAll('[data-showme]').forEach(b => b.addEventListener('click', () => {
      if (b.dataset.hike && hikes[0]) { hikes[0].el.scrollIntoView({ behavior: 'smooth', block: 'center' }); hikes[0][b.dataset.hike](); return; }
      const lab = labs[b.dataset.lab]; if (!lab) return;
      lab.load(b.dataset.preset);
      lab.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }));
    window.__p153 = { parse, evalNum, sameUpToConstant, labs, hikes, elev, HIKE };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
