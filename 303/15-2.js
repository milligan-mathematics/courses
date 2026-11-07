/* MATH 303 §15.2 page: river-routes scene, wire lab and work lab, predict-then-check cards.
   Plain JS, no libraries (MathJax is loaded by the site). Engine pieces follow 15-1.js. */
(function () {
  'use strict';

  const C = { orange: '#F36E24', orangeDark: '#CD5920', blue: '#009CDE', green: '#008552', red: '#b3261e', gray: '#6E6E6E',
    ink: '#333333', grid: '#e6e6e6', axis: '#bdbdbd' };

  // ---------- tiny expression parser: x, y, t, numbers, + - * / ^, functions, pi, e ----------
  const FUNCS = { sin: Math.sin, cos: Math.cos, tan: Math.tan, exp: Math.exp, sqrt: Math.sqrt, ln: Math.log,
    log: Math.log, abs: Math.abs, atan: Math.atan };
  const NAMES = Object.keys(FUNCS).concat(['pi', 'x', 'y', 't', 'e']).sort((a, b) => b.length - a.length);
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
    const res = [];
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
    if (!tk.length) throw new Error('Empty');
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
        if (t.v === 'x') return v => v.x; if (t.v === 'y') return v => v.y; if (t.v === 't') return v => v.t;
        if (t.v === 'pi') return () => Math.PI; if (t.v === 'e') return () => Math.E;
        const fn = FUNCS[t.v]; const arg = (peek() && peek().t === '(') ? (p++, (() => { const f = expr(); eat(')'); return f; })()) : power();
        return v => fn(arg(v));
      }
      throw new Error('Unexpected "' + t.t + '"');
    }
    const f = expr(); if (p !== tk.length) throw new Error('Extra input'); return f;
  }
  const evalNum = s => parse(s)({ x: 0, y: 0, t: 0 });

  const typeset = el => { if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([el]).catch(() => {}); };
  const fmt = (v, d = 3) => { if (!isFinite(v)) return '—'; const r = (Math.abs(v) < 5e-4 ? 0 : v).toFixed(d).replace(/\.?0+$/, ''); return (r === '-0' ? '0' : r) || '0'; };
  const sgn = v => (v > 1e-9 ? 'pos' : v < -1e-9 ? 'neg' : '');

  // ---------- canvas helpers ----------
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
    const hl = Math.min(4 + 2 * (width || 1.5), L * 0.45), a = Math.atan2(dy, dx);
    ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = width || 1.5;
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1 - hl * 0.6 * Math.cos(a), y1 - hl * 0.6 * Math.sin(a)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x1, y1);
    ctx.lineTo(x1 - hl * Math.cos(a - 0.4), y1 - hl * Math.sin(a - 0.4));
    ctx.lineTo(x1 - hl * Math.cos(a + 0.4), y1 - hl * Math.sin(a + 0.4)); ctx.closePath(); ctx.fill();
  }
  // essential motion starts only on a button press: don't gate it on prefers-reduced-motion (his laptop reports it)

  // ---------- 1. River scene: routes through the channel flow v = <1 - y^2, 0> ----------
  const ROUTES = {
    middle: { name: 'Down the middle', pts: [[1, 0], [5, 0]] },
    across: { name: 'Straight across', pts: [[3, -0.8], [3, 0.8]] },
    upstream: { name: 'Upstream near the bank', pts: [[5, 0.8], [1, 0.8]] },
    loop: { name: 'The loop', pts: [[1, 0], [5, 0], [5, 0.8], [1, 0.8], [1, 0]] }
  };
  function River(root) {
    const cv = root.querySelector('canvas');
    const Y = 1.3, view = w => (w < 520 ? [0.5, 5.5] : [0, 6.4]);
    const { ctx, fit } = setupCanvas(cv, w => { const [a, b] = view(w); return 2 * Y / (b - a); });
    const status = root.querySelector('.river-status');
    const P = y => Math.max(0, 1 - y * y);
    let route = null, steps = [], idx = 0, flow = 0, running = false, last = null, drawing = null, name = '';
    let s = fit();
    const toPx = (x, y) => { const [a, b] = view(s.w), k = s.w / (b - a); return [(x - a) * k, (Y - y) * k]; };
    const toW = (px, py) => { const [a, b] = view(s.w), k = s.w / (b - a); return [a + px / k, Y - py / k]; };
    function prepare(pts) {
      // resample the polyline into steps of about 0.02 m; flow increment = P(y_mid) dx (Q = 0)
      const out = [{ x: pts[0][0], y: pts[0][1], f: 0, tx: 1, ty: 0 }]; let f = 0;
      for (let i = 0; i + 1 < pts.length; i++) {
        const [x0, y0] = pts[i], [x1, y1] = pts[i + 1], L = Math.hypot(x1 - x0, y1 - y0); if (L < 1e-9) continue;
        const n = Math.max(1, Math.ceil(L / 0.02));
        for (let j = 1; j <= n; j++) {
          const xa = x0 + (x1 - x0) * (j - 1) / n, ya = y0 + (y1 - y0) * (j - 1) / n, xb = x0 + (x1 - x0) * j / n, yb = y0 + (y1 - y0) * j / n;
          f += P((ya + yb) / 2) * (xb - xa);
          out.push({ x: xb, y: yb, f, tx: (x1 - x0) / L, ty: (y1 - y0) / L });
        }
      }
      out[0].tx = out.length > 1 ? out[1].tx : 1; out[0].ty = out.length > 1 ? out[1].ty : 0;
      return out;
    }
    function draw() {
      s = fit();
      ctx.fillStyle = '#7fb069'; ctx.fillRect(0, 0, s.w, s.h);
      const [, top] = toPx(0, 1), [, bot] = toPx(0, -1);
      ctx.fillStyle = '#d6ecfa'; ctx.fillRect(0, top, s.w, bot - top);
      const k = toPx(1, 0)[0] - toPx(0, 0)[0];
      // current arrows
      const sp = (bot - top) / 8;
      for (let j = 1; j < 8; j++) {
        const py = top + j * sp, y = toW(0, py)[1];
        for (let px = sp * 0.6; px < s.w; px += sp * 1.7) arrow(ctx, px, py, px + P(y) * sp * 1.3, py, 'rgba(0,156,222,0.55)', 1.2);
      }
      // the planned route (dashed) and the travelled part (solid)
      if (steps.length) {
        ctx.setLineDash([5, 5]); ctx.strokeStyle = C.gray; ctx.lineWidth = 1.5; ctx.beginPath();
        steps.forEach((p, i) => { const [px, py] = toPx(p.x, p.y); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }); ctx.stroke(); ctx.setLineDash([]);
        ctx.strokeStyle = C.orangeDark; ctx.lineWidth = 3; ctx.beginPath();
        for (let i = 0; i <= idx && i < steps.length; i++) { const [px, py] = toPx(steps[i].x, steps[i].y); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); } ctx.stroke();
        const b = steps[Math.min(idx, steps.length - 1)], [bx, by] = toPx(b.x, b.y);
        // current at the boat, split along / across the route
        const vx = P(b.y), along = vx * b.tx, ax = along * b.tx, ay = along * b.ty, cx = vx - ax, cy = -ay, L = 0.9 * k;
        arrow(ctx, bx, by, bx + vx * L, by, C.blue, 2);
        ctx.setLineDash([3, 3]); arrow(ctx, bx, by, bx + cx * L, by - cy * L, '#888', 1.5); ctx.setLineDash([]);
        arrow(ctx, bx, by, bx + ax * L, by - ay * L, along > 1e-6 ? C.green : along < -1e-6 ? C.red : '#888', 4);
        const ang = Math.atan2(-b.ty, b.tx);
        ctx.save(); ctx.translate(bx, by); ctx.rotate(ang); ctx.fillStyle = C.orange;
        ctx.beginPath(); ctx.moveTo(10, 0); ctx.lineTo(-8, -6); ctx.lineTo(-8, 6); ctx.closePath(); ctx.fill(); ctx.restore();
        // meter
        ctx.fillStyle = 'rgba(255,255,255,0.92)'; ctx.fillRect(6, 6, 168, 24);
        ctx.fillStyle = C.ink; ctx.font = 'bold 13px sans-serif';
        ctx.fillText('flow so far: ' + flow.toFixed(2) + ' m²/s', 12, 23);
      } else {
        ctx.font = '13px sans-serif'; const msg = 'pick a route, or drag on the water to draw one'; ctx.fillStyle = 'rgba(255,255,255,0.92)'; ctx.fillRect(6, top + 3, ctx.measureText(msg).width + 10, 19); ctx.fillStyle = C.ink; ctx.fillText(msg, 11, top + 17);
      }
      if (drawing && drawing.length > 1) {
        ctx.strokeStyle = C.orangeDark; ctx.lineWidth = 2; ctx.beginPath();
        drawing.forEach((p, i) => { const [px, py] = toPx(p[0], p[1]); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }); ctx.stroke();
      }
    }
    function say(done) {
      const v = flow.toFixed(2);
      if (!done) { status.textContent = `${name}: flow so far ${v} m²/s`; return; }
      const verdict = Math.abs(flow) < 0.005 ? 'The current never pushed along this route, or its help and its fight cancelled.' :
        flow > 0 ? 'On balance the current helped.' : 'On balance the current fought you.';
      status.textContent = `${name}: total flow ${v} m²/s. ${verdict}`;
    }
    function step(now) {
      if (!running) return;
      const dt = last === null ? 0 : Math.min(0.05, (now - last) / 1000); last = now;
      idx = Math.min(steps.length - 1, idx + Math.max(1, Math.round(dt * 2 / 0.02)));
      flow = steps[idx].f; draw();
      if (idx < steps.length - 1) { say(false); requestAnimationFrame(step); } else { running = false; last = null; say(true); }
    }
    function ride(pts, nm) {
      steps = prepare(pts); idx = 0; flow = 0; name = nm; running = true; last = null; say(false); requestAnimationFrame(step);
    }
    root.querySelectorAll('[data-route]').forEach(b => b.addEventListener('click', () => { const r = ROUTES[b.dataset.route]; ride(r.pts, r.name); }));
    const clampY = y => Math.max(-0.95, Math.min(0.95, y));
    cv.addEventListener('pointerdown', e => {
      const r = cv.getBoundingClientRect(), [x, y] = toW(e.clientX - r.left, e.clientY - r.top);
      if (Math.abs(y) > 1) return;
      running = false; drawing = [[x, clampY(y)]]; cv.setPointerCapture(e.pointerId); e.preventDefault();
    });
    cv.addEventListener('pointermove', e => {
      if (!drawing) return;
      const r = cv.getBoundingClientRect(), [x, y] = toW(e.clientX - r.left, e.clientY - r.top), q = drawing[drawing.length - 1];
      if (Math.hypot(x - q[0], y - q[1]) > 0.05) { drawing.push([x, clampY(y)]); draw(); }
    });
    const finish = () => {
      if (!drawing) return; const d = drawing; drawing = null;
      let L = 0; for (let i = 1; i < d.length; i++) L += Math.hypot(d[i][0] - d[i - 1][0], d[i][1] - d[i - 1][1]);
      if (L > 0.3) ride(d, 'Your route'); else draw();
    };
    cv.addEventListener('pointerup', finish); cv.addEventListener('pointercancel', finish);
    window.addEventListener('resize', draw); draw();
    return { ride: key => { const r = ROUTES[key]; ride(r.pts, r.name); }, el: root, state: () => ({ flow, done: !running, name }) };
  }

  // ---------- 2. Path lab (scalar: a wire; vector: work along a path) ----------
  const CURVES = {
    seg: { label: 'Segment from (0, 0) to (1, 2)', x: t => t, y: t => 2 * t, a: 0, b: 1 },
    semi2: { label: 'Upper semicircle, radius 2', x: t => 2 * Math.cos(t), y: t => 2 * Math.sin(t), a: 0, b: Math.PI },
    circle: { label: 'Unit circle, counterclockwise', x: Math.cos, y: Math.sin, a: 0, b: 2 * Math.PI },
    segw: { label: 'Segment from (−2, −½) to (2, ½)', x: t => -2 + 4 * t, y: t => -0.5 + t, a: 0, b: 1 },
    custom: { label: 'Type your own r(t)' }
  };
  const RHOS = {
    one: { label: 'ρ = 1 (then the integral is the length)', f: () => 1 },
    r2: { label: 'ρ = x² + y²', f: (x, y) => x * x + y * y },
    y: { label: 'ρ = y (heavier higher up)', f: (x, y) => y },
    custom: { label: 'Type your own ρ(x, y)' }
  };
  const FIELDS = {
    swirl: { label: 'Swirl ⟨−y, x⟩', P: (x, y) => -y, Q: (x, y) => x },
    vx: { label: '⟨0, x⟩ (up on the right, down on the left)', P: () => 0, Q: (x, y) => x },
    river: { label: 'The river ⟨1 − y², 0⟩', P: (x, y) => 1 - y * y, Q: () => 0 },
    custom: { label: 'Type your own ⟨P, Q⟩' }
  };
  const N = 2000;
  function Lab(root) {
    const vec = root.dataset.mode === 'vector';
    const ckeys = root.dataset.curves.split(','), skeys = (vec ? root.dataset.fields : root.dataset.rhos).split(',');
    const SRC = vec ? FIELDS : RHOS, id = root.id;
    root.innerHTML = `
      <div class="lab-grid">
        <div><canvas class="lab-cv" role="img" aria-label="${vec ? 'A vector field with a path through it and a walker on the path.' : 'A wire shaded by its density, with a walker and the balance point.'}"></canvas>
          <canvas class="lab-gr" role="img" aria-label="${vec ? 'Graph of the integrand F of r of t dot r prime of t against t, shaded up to the walker.' : 'Graph of the integrand rho times the length of r prime against t, shaded up to the walker.'}"></canvas>
          <div class="lab-hint">Drag along the ${vec ? 'path' : 'wire'} or use the slider to move the walker. The shaded area is the integral so far.</div></div>
        <div class="lab-side">
          <label class="lab-lbl">${vec ? 'Path' : 'Wire'} <select class="lab-csel">${ckeys.map(k => `<option value="${k}">${CURVES[k].label}</option>`).join('')}</select></label>
          <div class="lab-ccust" hidden>
            <div class="lab-row"><label class="lab-lbl">x(t) = <input class="lab-X" value="2cos(t)" spellcheck="false"></label>
            <label class="lab-lbl">y(t) = <input class="lab-Y" value="sin(t)" spellcheck="false"></label></div>
            <div class="lab-row"><label class="lab-lbl">t from <input class="lab-A" value="0" spellcheck="false"></label>
            <label class="lab-lbl">to <input class="lab-B" value="pi" spellcheck="false"></label></div>
          </div>
          <label class="lab-lbl">${vec ? 'Field' : 'Density'} <select class="lab-ssel">${skeys.map(k => `<option value="${k}">${SRC[k].label}</option>`).join('')}</select></label>
          <div class="lab-scust" hidden>
            ${vec ? `<div class="lab-row"><label class="lab-lbl">P(x, y) = <input class="lab-P" value="x - y" spellcheck="false"></label>
              <label class="lab-lbl">Q(x, y) = <input class="lab-Q" value="x + y" spellcheck="false"></label></div>`
              : `<label class="lab-lbl">ρ(x, y) = <input class="lab-R" value="1 + x^2" spellcheck="false"></label>`}
          </div>
          <div class="lab-apply-row" hidden><button type="button" class="btn-s lab-apply">Draw it</button> <span class="lab-err" role="alert"></span></div>
          <label class="lab-chk"><input type="checkbox" class="lab-rev"> Walk it backward (reverse the direction)</label>
          <label class="lab-lbl">Walker position <input type="range" class="lab-u" min="0" max="1000" value="1000"></label>
          <button type="button" class="btn-s" data-act="walk">Walk the ${vec ? 'path' : 'wire'}</button>
          <div class="lab-read" aria-live="polite"></div>
        </div>
      </div>`;
    const cv = root.querySelector('.lab-cv'), gr = root.querySelector('.lab-gr');
    const { ctx, fit } = setupCanvas(cv, 1), G = setupCanvas(gr, w => (w < 420 ? 0.45 : 0.34));
    const csel = root.querySelector('.lab-csel'), ssel = root.querySelector('.lab-ssel'), rev = root.querySelector('.lab-rev');
    const uin = root.querySelector('.lab-u'), read = root.querySelector('.lab-read'), err = root.querySelector('.lab-err');
    const R = 3;
    let cur = null, src = null, ckey = root.dataset.start, skey = vec ? root.dataset.field : root.dataset.rho, u = 1;
    let S = null, anim = false, last = null, dragging = false;
    const toPx = (x, y, s) => [(x + R) / (2 * R) * s.w, (R - y) / (2 * R) * s.h];
    const toW = (px, py, s) => [px / s.w * 2 * R - R, R - py / s.h * 2 * R];

    function compute() {
      // sample the walk: tau from a to b; position r(a + b - tau) if reversed
      S = null; if (!cur || !src) return;
      const { a, b } = cur, back = rev.checked, h = (b - a) * 1e-5;
      const pos = tau => { const t = back ? a + b - tau : tau; return [cur.x(t), cur.y(t)]; };
      const vel = tau => { const t = back ? a + b - tau : tau, sg = back ? -1 : 1; return [sg * (cur.x(t + h) - cur.x(t - h)) / (2 * h), sg * (cur.y(t + h) - cur.y(t - h)) / (2 * h)]; };
      const T = [], X = [], Yv = [], V = [], g = [], aux = [];
      for (let i = 0; i <= N; i++) {
        const tau = a + (b - a) * i / N, [x, y] = pos(tau), [vx, vy] = vel(tau), sp = Math.hypot(vx, vy);
        let gi, ex;
        if (vec) { const p = src.P(x, y), q = src.Q(x, y); gi = p * vx + q * vy; ex = { p, q, ft: sp > 0 ? gi / sp : 0 }; }
        else { const rho = src.f(x, y); gi = rho * sp; ex = { rho }; }
        T.push(tau); X.push(x); Yv.push(y); V.push([vx, vy, sp]); g.push(gi); aux.push(ex);
      }
      if (g.some(v => !isFinite(v)) || X.some(v => !isFinite(v)) || Yv.some(v => !isFinite(v))) { S = { bad: true }; return; }
      const cum = [0], len = [0]; let mx = 0, my = 0;
      for (let i = 1; i <= N; i++) {
        const d = T[i] - T[i - 1];
        cum.push(cum[i - 1] + (g[i] + g[i - 1]) / 2 * d);
        len.push(len[i - 1] + (V[i][2] + V[i - 1][2]) / 2 * d);
        if (!vec) { mx += (Yv[i] * g[i] + Yv[i - 1] * g[i - 1]) / 2 * d; my += (X[i] * g[i] + X[i - 1] * g[i - 1]) / 2 * d; }
      }
      S = { T, X, Y: Yv, V, g, aux, cum, len, total: cum[N], L: len[N], Mx: mx, My: my, closed: Math.hypot(X[0] - X[N], Yv[0] - Yv[N]) < 1e-6 };
    }
    const iOf = () => Math.round(u * N);

    function draw() {
      const s = fit();
      ctx.fillStyle = '#fafafa'; ctx.fillRect(0, 0, s.w, s.h);
      for (let k = -R; k <= R; k++) {
        const [px] = toPx(k, 0, s), [, py] = toPx(0, k, s);
        ctx.strokeStyle = k === 0 ? C.axis : C.grid; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, s.h); ctx.moveTo(0, py); ctx.lineTo(s.w, py); ctx.stroke();
      }
      ctx.fillStyle = C.gray; ctx.font = '11px sans-serif';
      for (let k = -R + 1; k < R; k++) if (k) { const [px, py] = toPx(k, 0, s); ctx.fillText(k, px + 2, py + 12); const [qx, qy] = toPx(0, k, s); ctx.fillText(k, qx + 4, qy + 4); }
      if (vec && src) {
        const n = s.w < 420 ? 11 : 15, sp = s.w / n, pts = [];
        for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
          const [x, y] = toW((i + 0.5) * sp, (j + 0.5) * sp, s), p = src.P(x, y), q = src.Q(x, y);
          if (isFinite(p) && isFinite(q)) pts.push([x, y, p, q, Math.hypot(p, q)]);
        }
        const Ls = pts.map(a => a[4]).sort((a, b) => a - b), cap = Ls[Math.floor(Ls.length * 0.9)] || 1;
        pts.forEach(([x, y, p, q, L]) => {
          const k = Math.min(L, cap) / cap * 0.8 * sp / (L || 1), [px, py] = toPx(x, y, s);
          arrow(ctx, px - p * k / 2, py + q * k / 2, px + p * k / 2, py - q * k / 2, 'rgba(0,156,222,0.45)', 1.2);
        });
      }
      if (!S || S.bad) return;
      const I = iOf();
      if (vec) {
        // whole path in gray, walked part colored by the sign of F . r'
        ctx.lineWidth = 3; ctx.strokeStyle = '#9e9e9e'; ctx.beginPath();
        for (let i = 0; i <= N; i += 4) { const [px, py] = toPx(S.X[i], S.Y[i], s); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); } ctx.stroke();
        ctx.lineWidth = 5;
        for (let i = 0; i < I; i += 2) {
          const j = Math.min(I, i + 2), [ax, ay] = toPx(S.X[i], S.Y[i], s), [bx, by] = toPx(S.X[j], S.Y[j], s), v = S.g[i];
          ctx.strokeStyle = v > 1e-9 ? C.green : v < -1e-9 ? C.red : '#888'; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
        }
      } else {
        // the wire, shaded by density
        const rs = S.aux.map(a => a.rho), lo = Math.min(...rs), hi = Math.max(...rs);
        ctx.lineWidth = 7; ctx.lineCap = 'round';
        for (let i = 0; i < N; i += 4) {
          const j = Math.min(N, i + 4), [ax, ay] = toPx(S.X[i], S.Y[i], s), [bx, by] = toPx(S.X[j], S.Y[j], s);
          const w = hi - lo < 1e-9 ? 0.5 : (rs[i] - lo) / (hi - lo);
          ctx.strokeStyle = `rgb(${Math.round(253 - 85 * w)},${Math.round(224 - 160 * w)},${Math.round(200 - 185 * w)})`;
          ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
        }
        ctx.lineCap = 'butt';
      }
      // direction ticks along the path
      for (let m = 1; m <= 3; m++) {
        const i = Math.round(N * (m / 4 - 0.02)), j = Math.round(N * (m / 4 + 0.02)), [ax, ay] = toPx(S.X[i], S.Y[i], s), [bx, by] = toPx(S.X[j], S.Y[j], s);
        arrow(ctx, ax, ay, bx, by, C.ink, 1.5);
      }
      if (!S.closed) {
        const [ax, ay] = toPx(S.X[0], S.Y[0], s), [bx, by] = toPx(S.X[N], S.Y[N], s);
        ctx.fillStyle = C.ink; ctx.font = 'bold 12px sans-serif'; ctx.fillText('start', ax + 6, ay + 14); ctx.fillText('end', bx + 6, by - 6);
      }
      // balance point (scalar mode)
      if (!vec && Math.abs(S.total) > 1e-9) {
        const xb = S.My / S.total, yb = S.Mx / S.total, [px, py] = toPx(xb, yb, s);
        ctx.strokeStyle = '#111'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(px, py, 7, 0, 7); ctx.stroke();
        ctx.font = '12px sans-serif'; const lw = ctx.measureText('balance point').width; ctx.fillStyle = 'rgba(250,250,250,0.85)'; ctx.fillRect(px - lw / 2 - 3, py + 10, lw + 6, 15); ctx.fillStyle = '#111'; ctx.fillText('balance point', px - lw / 2, py + 22);
      }
      // the walker
      const [wx, wy] = toPx(S.X[I], S.Y[I], s);
      if (vec) {
        const { p, q, ft } = S.aux[I], [vx, vy, sp] = S.V[I], tx = sp ? vx / sp : 0, ty = sp ? vy / sp : 0, k = 0.45 * s.w / (2 * R);
        const F = Math.hypot(p, q), sc = F > 2.5 ? 2.5 / F : 1;
        arrow(ctx, wx, wy, wx + p * k * sc, wy - q * k * sc, C.blue, 2.2);
        arrow(ctx, wx, wy, wx + ft * tx * k * sc, wy - ft * ty * k * sc, ft > 1e-9 ? C.green : ft < -1e-9 ? C.red : '#888', 5);
      }
      ctx.fillStyle = C.orange; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(wx, wy, 6, 0, 7); ctx.fill(); ctx.stroke();
    }

    function drawGraph() {
      const s = G.fit(), g = G.ctx;
      g.fillStyle = '#fff'; g.fillRect(0, 0, s.w, s.h);
      if (!S || S.bad) return;
      const padL = 34, padR = 10, padT = 18, padB = 20, W = s.w - padL - padR, H = s.h - padT - padB;
      let lo = Math.min(0, ...S.g), hi = Math.max(0, ...S.g); if (hi - lo < 1e-9) { hi += 1; lo -= 1; }
      const span = hi - lo; hi += span * 0.08; lo -= lo < 0 ? span * 0.08 : 0;
      const X = i => padL + W * i / N, Yp = v => padT + H * (hi - v) / (hi - lo), I = iOf(), y0 = Yp(0);
      // shaded area so far
      for (let i = 0; i < I; i += 2) {
        const j = Math.min(I, i + 2), v = (S.g[i] + S.g[j]) / 2;
        g.fillStyle = vec ? (v >= 0 ? 'rgba(0,133,82,0.35)' : 'rgba(179,38,30,0.35)') : 'rgba(243,110,36,0.35)';
        g.beginPath(); g.moveTo(X(i), y0); g.lineTo(X(i), Yp(S.g[i])); g.lineTo(X(j), Yp(S.g[j])); g.lineTo(X(j), y0); g.closePath(); g.fill();
      }
      g.strokeStyle = C.axis; g.lineWidth = 1; g.beginPath(); g.moveTo(padL, y0); g.lineTo(padL + W, y0); g.moveTo(padL, padT); g.lineTo(padL, padT + H); g.stroke();
      g.strokeStyle = C.ink; g.lineWidth = 1.8; g.beginPath();
      for (let i = 0; i <= N; i += 4) { const px = X(i), py = Yp(S.g[i]); i ? g.lineTo(px, py) : g.moveTo(px, py); } g.stroke();
      g.strokeStyle = C.orange; g.lineWidth = 1.5; g.beginPath(); g.moveTo(X(I), padT); g.lineTo(X(I), padT + H); g.stroke();
      g.fillStyle = C.gray; g.font = '11px sans-serif';
      g.fillText(fmt(hi, 2), 2, padT + 4); g.fillText('0', padL - 10, y0 + 4); if (lo < 0) g.fillText(fmt(lo, 2), 2, padT + H);
      g.fillText('t = ' + fmt(cur.a, 2), padL, s.h - 5); const e = 't = ' + fmt(cur.b, 2); g.fillText(e, padL + W - g.measureText(e).width, s.h - 5);
      g.fillStyle = C.ink; g.font = '12px sans-serif';
      g.fillText(vec ? 'integrand  F(r(t)) · r′(t)' : 'integrand  ρ(r(t)) ‖r′(t)‖', padL + 6, 12);
    }

    function readout() {
      if (!cur || !src) { read.innerHTML = '<p>Type the formulas, then press <b>Draw it</b>.</p>'; return; }
      if (!S || S.bad) { read.innerHTML = '<p class="lab-err">Some value along this curve is undefined. Try another curve or formula.</p>'; return; }
      const I = iOf(), [vx, vy, sp] = S.V[I], t = S.T[I];
      const rows = [['walker at', `(${fmt(S.X[I], 2)}, ${fmt(S.Y[I], 2)})`]];
      if (vec) {
        const { p, q, ft } = S.aux[I];
        rows.push(['F there', `⟨${fmt(p)}, ${fmt(q)}⟩`], ['F · T (along the path)', `<span class="${sgn(ft)}">${fmt(ft)}</span>`],
          ['F · r′(t)', fmt(S.g[I])], ['work so far', `<span class="${sgn(S.cum[I])}">${fmt(S.cum[I])}</span>`],
          ['total ∫ F · dr', `<b class="${sgn(S.total)}">${fmt(S.total)}</b>`]);
      } else {
        rows.push(['ρ there', fmt(S.aux[I].rho)], ['‖r′(t)‖', fmt(sp)], ['so far', fmt(S.cum[I])],
          ['total ∫ ρ ds', `<b>${fmt(S.total)}</b>`], ['length', fmt(S.L)]);
        if (Math.abs(S.total) > 1e-9) rows.push(['balance point (x̄, ȳ)', `(${fmt(S.My / S.total)}, ${fmt(S.Mx / S.total)})`]);
        if (S.aux.some(a => a.rho < -1e-9)) rows.push(['note', 'ρ is negative somewhere: not a real density']);
      }
      read.innerHTML = `<table class="lab-tab">${rows.map(r => `<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`).join('')}</table>`;
      root.dataset.total = String(S.total);
    }
    function refresh() { draw(); drawGraph(); readout(); }
    function rebuild() { compute(); refresh(); }

    function applyCustom() {
      err.textContent = '';
      try {
        if (ckey === 'custom') {
          const fx = parse(root.querySelector('.lab-X').value), fy = parse(root.querySelector('.lab-Y').value);
          const a = evalNum(root.querySelector('.lab-A').value), b = evalNum(root.querySelector('.lab-B').value);
          if (!(isFinite(a) && isFinite(b) && b > a)) throw new Error('need a number "from" smaller than "to"');
          cur = { x: t => fx({ x: 0, y: 0, t }), y: t => fy({ x: 0, y: 0, t }), a, b };
        }
        if (skey === 'custom') {
          if (vec) { const P = parse(root.querySelector('.lab-P').value), Q = parse(root.querySelector('.lab-Q').value); src = { P: (x, y) => P({ x, y, t: 0 }), Q: (x, y) => Q({ x, y, t: 0 }) }; }
          else { const Rf = parse(root.querySelector('.lab-R').value); src = { f: (x, y) => Rf({ x, y, t: 0 }) }; }
        }
      } catch (e) { err.textContent = 'Could not read that: ' + e.message; if (ckey === 'custom') cur = null; if (skey === 'custom') src = null; }
      rebuild();
    }
    function sync() {
      root.querySelector('.lab-ccust').hidden = ckey !== 'custom';
      root.querySelector('.lab-scust').hidden = skey !== 'custom';
      root.querySelector('.lab-apply-row').hidden = ckey !== 'custom' && skey !== 'custom';
      if (ckey !== 'custom') cur = CURVES[ckey]; if (skey !== 'custom') src = SRC[skey];
      if (ckey === 'custom' || skey === 'custom') applyCustom(); else { err.textContent = ''; rebuild(); }
    }
    function setCurve(k) { ckey = k; csel.value = k; sync(); }
    function setSrc(k) { skey = k; ssel.value = k; sync(); }
    function setU(v) { u = Math.max(0, Math.min(1, v)); uin.value = String(Math.round(u * 1000)); refresh(); }
    csel.addEventListener('change', () => setCurve(csel.value));
    ssel.addEventListener('change', () => setSrc(ssel.value));
    root.querySelector('.lab-apply').addEventListener('click', applyCustom);
    rev.addEventListener('change', rebuild);
    uin.addEventListener('input', () => { anim = false; u = Number(uin.value) / 1000; refresh(); });
    function tick(now) {
      if (!anim) return;
      const dt = last === null ? 0 : Math.min(0.05, (now - last) / 1000); last = now;
      u = Math.min(1, u + dt / 4); uin.value = String(Math.round(u * 1000)); refresh();
      if (u < 1) requestAnimationFrame(tick); else { anim = false; last = null; }
    }
    root.querySelector('[data-act=walk]').addEventListener('click', () => { u = 0; anim = true; last = null; requestAnimationFrame(tick); });
    function grab(e) {
      if (!S || S.bad) return;
      const r = cv.getBoundingClientRect(), [x, y] = toW(e.clientX - r.left, e.clientY - r.top, { w: r.width, h: r.height });
      let best = 0, bd = Infinity; for (let i = 0; i <= N; i += 2) { const d = Math.hypot(S.X[i] - x, S.Y[i] - y); if (d < bd) { bd = d; best = i; } }
      anim = false; setU(best / N);
    }
    cv.addEventListener('pointerdown', e => { dragging = true; cv.setPointerCapture(e.pointerId); grab(e); });
    cv.addEventListener('pointermove', e => { if (dragging) grab(e); });
    cv.addEventListener('pointerup', () => { dragging = false; });
    window.addEventListener('resize', refresh);
    csel.value = ckey; ssel.value = skey; sync();
    return { setCurve, setSrc, setU, setRev: b => { rev.checked = !!b; rebuild(); }, el: root, total: () => S && S.total, S: () => S };
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
  function Typed(card) {
    const ins = [...card.querySelectorAll('input[data-check]')], fb = card.querySelector('.pc-fb');
    card.querySelector('[data-act=check]').addEventListener('click', () => {
      let allRight = true, bad = false;
      ins.forEach(inp => {
        let v; try { v = evalNum(inp.value); } catch (e) { bad = true; inp.classList.add('no'); return; }
        const want = evalNum(inp.dataset.check), right = Math.abs(v - want) <= 0.005 * Math.max(1, Math.abs(want));
        inp.classList.toggle('yes', right); inp.classList.toggle('no', !right); if (!right) allRight = false;
      });
      if (bad) { fb.className = 'pc-fb bad'; fb.textContent = 'Type a number or an expression such as sqrt(5), -1/2 or 2*pi.'; return; }
      fb.className = 'pc-fb ' + (allRight ? 'ok' : 'bad');
      fb.innerHTML = allRight ? '<b>Right.</b> ' + (card.dataset.ok || '') : '<b>Not yet.</b> ' + (card.dataset.hint || 'Check each entry.');
      typeset(fb);
    });
  }
  function Reveal(btn) {
    const box = document.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', () => { const open = box.hidden; box.hidden = !open; btn.setAttribute('aria-expanded', String(open)); btn.textContent = open ? 'Hide' : btn.dataset.label; if (open) typeset(box); });
  }

  function init() {
    const river = [...document.querySelectorAll('.river')].map(River)[0];
    const labs = {};
    document.querySelectorAll('.lab').forEach(el => { labs[el.id] = Lab(el); });
    document.querySelectorAll('.pc[data-kind=choice]').forEach(Choice);
    document.querySelectorAll('.pc[data-kind=typed]').forEach(Typed);
    document.querySelectorAll('button.reveal').forEach(Reveal);
    // "See it in the lab": data-lab, data-curve, data-rho | data-field, data-rev
    document.querySelectorAll('[data-showme]').forEach(b => b.addEventListener('click', () => {
      const lab = labs[b.dataset.lab]; if (!lab) return;
      if (b.dataset.rev != null) lab.el.querySelector('.lab-rev').checked = b.dataset.rev === '1';
      else lab.el.querySelector('.lab-rev').checked = false;
      if (b.dataset.curve) lab.setCurve(b.dataset.curve);
      if (b.dataset.rho || b.dataset.field) lab.setSrc(b.dataset.rho || b.dataset.field);
      lab.setU(1);
      lab.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }));
    document.querySelectorAll('[data-ride]').forEach(b => b.addEventListener('click', () => {
      if (!river) return; river.el.scrollIntoView({ behavior: 'smooth', block: 'center' }); river.ride(b.dataset.ride);
    }));
    window.__p152 = { parse, evalNum, labs, river };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
