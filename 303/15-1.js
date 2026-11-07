/* MATH 303 §15.1 page: river scene, field labs, predict-then-check cards.
   Plain JS, no libraries (MathJax is loaded by the site). */
(function () {
  'use strict';

  const C = { orange: '#F36E24', orangeDark: '#CD5920', blue: '#009CDE', green: '#008552', gray: '#6E6E6E',
    ink: '#333333', grid: '#e6e6e6', axis: '#bdbdbd' };

  // ---------- tiny expression parser: x, y, numbers, + - * / ^, functions, pi, e ----------
  const FUNCS = { sin: Math.sin, cos: Math.cos, tan: Math.tan, exp: Math.exp, sqrt: Math.sqrt, ln: Math.log,
    log: Math.log, abs: Math.abs, atan: Math.atan };
  const NAMES = Object.keys(FUNCS).concat(['pi', 'x', 'y', 'e']).sort((a, b) => b.length - a.length);
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
    // implicit multiplication: 2x, 2(x), x(y), )(, )x, x y
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
        if (t.v === 'x') return v => v.x; if (t.v === 'y') return v => v.y;
        if (t.v === 'pi') return () => Math.PI; if (t.v === 'e') return () => Math.E;
        const fn = FUNCS[t.v]; const arg = (peek() && peek().t === '(') ? (p++, (() => { const f = expr(); eat(')'); return f; })()) : power();
        return v => fn(arg(v));
      }
      throw new Error('Unexpected "' + t.t + '"');
    }
    const f = expr(); if (p !== tk.length) throw new Error('Extra input'); return f;
  }
  const evalNum = s => parse(s)({ x: 0, y: 0 });

  const typeset = el => { if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([el]).catch(() => {}); };
  const fmt = (v, d = 3) => (Math.abs(v) < 5e-4 ? 0 : v).toFixed(d).replace(/\.?0+$/, '') || '0';

  // ---------- canvas helper ----------
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
  const reduced = () => false; // essential motion: don't gate on prefers-reduced-motion (his laptop reports it)

  // ---------- 1. River scene: channel flow F = <1 - y^2, 0> (m/s), banks at y = ±1 ----------
  function River(root) {
    const cv = root.querySelector('canvas'), { ctx, fit } = setupCanvas(cv, w => (w < 520 ? 0.62 : 0.42));
    const X0 = -0.3, X1 = 9.3, Y = 1.25, BRIDGE = 8;
    let mode = 'arrows', boats = [], t = 0, last = null, running = false;
    const status = root.querySelector('.river-status');
    const toPx = (x, y, s) => [(x - X0) / (X1 - X0) * s.w, (Y - y) / (2 * Y) * s.h];
    const toW = (px, py, s) => [X0 + px / s.w * (X1 - X0), Y - py / s.h * 2 * Y];
    const speed = y => Math.max(0, 1 - y * y);
    function draw() {
      const s = fit();
      ctx.fillStyle = '#7fb069'; ctx.fillRect(0, 0, s.w, s.h);
      const [, top] = toPx(0, 1, s), [, bot] = toPx(0, -1, s);
      if (mode === 'speed') {
        for (let py = Math.floor(top); py < bot; py++) {
          const y = toW(0, py, s)[1], v = speed(y);
          ctx.fillStyle = `rgb(${Math.round(220 - 200 * v)},${Math.round(235 - 120 * v)},${Math.round(250 - 30 * v)})`;
          ctx.fillRect(0, py, s.w, 1.2);
        }
      } else { ctx.fillStyle = '#d6ecfa'; ctx.fillRect(0, top, s.w, bot - top); }
      const [bx] = toPx(BRIDGE, 0, s);
      ctx.fillStyle = '#8d6e63'; ctx.fillRect(bx - 5, top - 10, 10, bot - top + 20);
      ctx.fillStyle = '#fff'; ctx.font = '12px sans-serif'; ctx.fillText('bridge', bx + 8, top - 2);
      const [sx] = toPx(0, 0, s); ctx.setLineDash([4, 4]); ctx.strokeStyle = C.gray; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(sx, top); ctx.lineTo(sx, bot); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = C.ink; ctx.fillText('start', sx + 4, bot - 4);
      if (mode === 'arrows') {
        const sp = (bot - top) / 8;
        for (let j = 0; j <= 8; j++) {
          const py = top + j * sp, y = toW(0, py, s)[1];
          for (let px = sp; px < s.w; px += sp * 1.6) arrow(ctx, px, py, px + speed(y) * sp * 1.4, py, C.blue, 1.4);
        }
      } else {
        ctx.fillStyle = C.ink; ctx.fillText('dark = fast, pale = slow (speed is a scalar: no direction)', 8, top + 14);
      }
      boats.forEach(b => {
        const [px, py] = toPx(b.x, b.y, s);
        ctx.fillStyle = b.color; ctx.beginPath(); ctx.moveTo(px + 9, py); ctx.lineTo(px - 7, py - 6); ctx.lineTo(px - 7, py + 6); ctx.closePath(); ctx.fill();
        ctx.fillStyle = C.ink; ctx.font = 'bold 12px sans-serif'; ctx.fillText(b.name, px - 4, py - 9);
      });
    }
    function step(now) {
      if (!running) return;
      const dt = last === null ? 0 : Math.min(0.05, (now - last) / 1000) * 2.5; last = now; t += dt;
      boats.forEach(b => { if (b.done == null) { b.x += speed(b.y) * dt; if (b.x >= BRIDGE) { b.done = t; } } });
      status.textContent = boats.map(b => `${b.name}: ${b.done != null ? 'reached the bridge at t = ' + b.done.toFixed(1) + ' s' : 'x = ' + b.x.toFixed(1) + ' m'}`).join('   ·   ') + `   (clock ${t.toFixed(1)} s)`;
      draw();
      if (boats.some(b => b.done == null && speed(b.y) > 0.02) && t < 40) requestAnimationFrame(step); else { running = false; last = null; }
    }
    function go() { if (!running) { running = true; last = null; requestAnimationFrame(step); } }
    root.querySelector('[data-act=race]').addEventListener('click', () => {
      t = 0; boats = [{ name: 'A', x: 0, y: 0, color: C.orange }, { name: 'B', x: 0, y: 0.8, color: C.green }]; go();
    });
    root.querySelector('[data-act=mode]').addEventListener('click', e => {
      mode = mode === 'arrows' ? 'speed' : 'arrows';
      e.target.textContent = mode === 'arrows' ? 'Show speed only (scalar field)' : 'Show velocity arrows (vector field)'; draw();
    });
    cv.addEventListener('pointerdown', e => {
      const r = cv.getBoundingClientRect(), s = { w: r.width, h: r.height };
      const [x, y] = toW(e.clientX - r.left, e.clientY - r.top, s);
      if (Math.abs(y) >= 0.98) return;
      if (boats.length > 6) boats.shift();
      const n = boats.filter(b => /^\d+$/.test(b.name)).length + 1;
      boats.push({ name: String(n), x: Math.max(0, x), y, color: C.blue }); go();
    });
    window.addEventListener('resize', draw); draw();
  }

  // ---------- 2. Field lab ----------
  const PRESETS = {
    swirl: { label: 'Swirl ⟨−y, x⟩', P: (x, y) => -y, Q: (x, y) => x },
    outflow: { label: 'Steady outflow ⟨x, y⟩ / (2‖r‖)', P: (x, y) => x / (2 * Math.hypot(x, y)), Q: (x, y) => y / (2 * Math.hypot(x, y)), hole: 0.12 },
    gravity: { label: 'Gravity (a slice through the planet) −r / ‖r‖³', P: (x, y) => -x / Math.pow(Math.hypot(x, y), 3), Q: (x, y) => -y / Math.pow(Math.hypot(x, y), 3), hole: 0.35 },
    grad: { label: '∇f for f = x² + x cos y', P: (x, y) => 2 * x + Math.cos(y), Q: (x, y) => -x * Math.sin(y), f: (x, y) => x * x + x * Math.cos(y) },
    custom: { label: 'Type your own ⟨P, Q⟩' }
  };
  function Lab(root) {
    const keys = root.dataset.presets.split(',');
    root.innerHTML = `
      <div class="lab-grid">
        <div><canvas class="lab-cv" role="img" aria-label="Vector field plot. Drag the probe to read the field."></canvas>
          <div class="lab-hint">Drag the orange probe. The paddle wheel spins if the field would turn it.</div></div>
        <div class="lab-side">
          <label class="lab-lbl">Field <select class="lab-sel">${keys.map(k => `<option value="${k}">${PRESETS[k].label}</option>`).join('')}</select></label>
          <div class="lab-custom" hidden>
            <label class="lab-lbl">P(x, y) = <input class="lab-P" value="x - y" spellcheck="false"></label>
            <label class="lab-lbl">Q(x, y) = <input class="lab-Q" value="x + y" spellcheck="false"></label>
            <button type="button" class="btn-s lab-apply">Draw it</button> <span class="lab-err" role="alert"></span>
          </div>
          <div class="lab-read" aria-live="polite"></div>
          <div class="lab-btns">
            <button type="button" class="btn-s" data-act="one">Release a particle at the probe</button>
            <button type="button" class="btn-s" data-act="cloud">Release a cloud</button>
            <button type="button" class="btn-s ghost" data-act="clear">Clear</button>
            ${root.dataset.contours ? '<label class="lab-chk"><input type="checkbox" class="lab-ct" checked> level curves of f</label>' : ''}
          </div>
        </div>
      </div>`;
    const cv = root.querySelector('canvas'), { ctx, fit } = setupCanvas(cv, 1);
    const R = 3; let key = root.dataset.start || keys[0], F = PRESETS[key], probe = { x: 1, y: 1 }, angle = 0;
    let parts = [], anim = false, last = null, dragging = false;
    const sel = root.querySelector('.lab-sel'), read = root.querySelector('.lab-read'), cust = root.querySelector('.lab-custom');
    sel.value = key;
    const toPx = (x, y, s) => [(x + R) / (2 * R) * s.w, (R - y) / (2 * R) * s.h];
    const toW = (px, py, s) => [px / s.w * 2 * R - R, R - py / s.h * 2 * R];
    const val = (x, y) => { const p = F.P(x, y), q = F.Q(x, y); return [p, q]; };
    const ok = (x, y) => !(F.hole && Math.hypot(x, y) < F.hole);
    function partials(x, y) {
      const h = 1e-4;
      return { Py: (F.P(x, y + h) - F.P(x, y - h)) / (2 * h), Qx: (F.Q(x + h, y) - F.Q(x - h, y)) / (2 * h) };
    }
    function draw() {
      const s = fit();
      ctx.fillStyle = '#fafafa'; ctx.fillRect(0, 0, s.w, s.h);
      ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
      for (let k = -R; k <= R; k++) {
        const [px] = toPx(k, 0, s), [, py] = toPx(0, k, s);
        ctx.strokeStyle = k === 0 ? C.axis : C.grid; ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, s.h); ctx.moveTo(0, py); ctx.lineTo(s.w, py); ctx.stroke();
      }
      ctx.fillStyle = C.gray; ctx.font = '11px sans-serif';
      for (let k = -R + 1; k < R; k++) if (k) { const [px, py] = toPx(k, 0, s); ctx.fillText(k, px + 2, py + 12); const [qx, qy] = toPx(0, k, s); ctx.fillText(k, qx + 4, qy + 4); }
      const ct = root.querySelector('.lab-ct');
      if (F.f && ct && ct.checked) drawContours(s);
      if (!F.P) return;
      const n = s.w < 420 ? 11 : 15, sp = s.w / n, pts = [];
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        const [x, y] = toW((i + 0.5) * sp, (j + 0.5) * sp, s); if (!ok(x, y)) continue;
        const [p, q] = val(x, y); if (!isFinite(p) || !isFinite(q)) continue; pts.push([x, y, p, q, Math.hypot(p, q)]);
      }
      const Ls = pts.map(a => a[4]).sort((a, b) => a - b), cap = Ls[Math.floor(Ls.length * 0.9)] || 1;
      pts.forEach(([x, y, p, q, L]) => {
        const k = Math.min(L, cap) / cap * 0.85 * sp / (L || 1), [px, py] = toPx(x, y, s);
        arrow(ctx, px - p * k / 2, py + q * k / 2, px + p * k / 2, py - q * k / 2, L > cap ? C.blue : '#5aa9d6', 1.4);
      });
      parts.forEach(pt => {
        ctx.strokeStyle = 'rgba(205,89,32,0.55)'; ctx.lineWidth = 2; ctx.beginPath();
        pt.trail.forEach(([x, y], i) => { const [px, py] = toPx(x, y, s); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }); ctx.stroke();
        const [px, py] = toPx(pt.x, pt.y, s); ctx.fillStyle = C.orangeDark; ctx.beginPath(); ctx.arc(px, py, 3.5, 0, 7); ctx.fill();
      });
      // probe + its vector (true length, scaled by the same cap) + paddle wheel
      const [px, py] = toPx(probe.x, probe.y, s);
      if (ok(probe.x, probe.y)) {
        const [p, q] = val(probe.x, probe.y), L = Math.hypot(p, q), k = Math.min(L, cap * 1.6) / cap * 0.85 * sp / (L || 1);
        if (isFinite(L)) arrow(ctx, px, py, px + p * k * 1.6, py - q * k * 1.6, C.orange, 3);
        ctx.strokeStyle = C.ink; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(px, py, 11, 0, 7); ctx.stroke();
        for (let m = 0; m < 4; m++) { const a = angle + m * Math.PI / 2; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + 11 * Math.cos(a), py - 11 * Math.sin(a)); ctx.stroke(); }
      }
      ctx.fillStyle = C.orange; ctx.beginPath(); ctx.arc(px, py, 4, 0, 7); ctx.fill();
    }
    function drawContours(s) {
      // marching squares on f, 14 levels
      const N = 90, vals = [], xs = [];
      for (let i = 0; i <= N; i++) { xs.push(-R + 2 * R * i / N); }
      for (let i = 0; i <= N; i++) { vals.push([]); for (let j = 0; j <= N; j++) vals[i].push(F.f(xs[i], xs[j])); }
      let lo = Infinity, hi = -Infinity; vals.forEach(r => r.forEach(v => { lo = Math.min(lo, v); hi = Math.max(hi, v); }));
      ctx.strokeStyle = 'rgba(0,133,82,0.45)'; ctx.lineWidth = 1;
      for (let L = 1; L <= 14; L++) {
        const c = lo + (hi - lo) * Math.pow(L / 15, 1.6);
        ctx.beginPath();
        for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
          const v = [vals[i][j], vals[i + 1][j], vals[i + 1][j + 1], vals[i][j + 1]], P = [[xs[i], xs[j]], [xs[i + 1], xs[j]], [xs[i + 1], xs[j + 1]], [xs[i], xs[j + 1]]];
          const hits = [];
          for (let e = 0; e < 4; e++) { const a = v[e], b = v[(e + 1) % 4]; if ((a - c) * (b - c) < 0) { const tt = (c - a) / (b - a), A = P[e], B = P[(e + 1) % 4]; hits.push([A[0] + tt * (B[0] - A[0]), A[1] + tt * (B[1] - A[1])]); } }
          for (let h = 0; h + 1 < hits.length; h += 2) { const [ax, ay] = toPx(hits[h][0], hits[h][1], s), [bx, by] = toPx(hits[h + 1][0], hits[h + 1][1], s); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); }
        }
        ctx.stroke();
      }
    }
    function readout() {
      if (!F.P) { read.innerHTML = '<p>Type P and Q, then press <b>Draw it</b>.</p>'; return; }
      const { x, y } = probe;
      if (!ok(x, y)) { read.innerHTML = `<p>Probe at (${fmt(x, 2)}, ${fmt(y, 2)}): the field is not defined here (too close to the origin).</p>`; return; }
      const [p, q] = val(x, y), d = partials(x, y), test = Math.abs(d.Py - d.Qx) < 1e-3 * (1 + Math.abs(d.Py) + Math.abs(d.Qx));
      read.innerHTML = `<table class="lab-tab"><tr><th>probe</th><td>(${fmt(x, 2)}, ${fmt(y, 2)})</td></tr>
        <tr><th>F there</th><td>⟨${fmt(p)}, ${fmt(q)}⟩</td></tr>
        <tr><th>length ‖F‖</th><td>${fmt(Math.hypot(p, q))}</td></tr>
        <tr><th>∂P/∂y, ∂Q/∂x</th><td>${fmt(d.Py)}, ${fmt(d.Qx)} <span class="${test ? 'ok' : 'bad'}">${test ? 'equal here' : 'not equal'}</span></td></tr></table>`;
    }
    function tick(now) {
      const dt = last === null ? 0 : Math.min(0.05, (now - last) / 1000); last = now;
      if (!F.P) { anim = false; return; }
      const { Py, Qx } = ok(probe.x, probe.y) ? partials(probe.x, probe.y) : { Py: 0, Qx: 0 };
      angle += 0.5 * (Qx - Py) * dt * 1.5;
      parts.forEach(pt => {
        if (pt.dead) return;
        let h = dt * 0.8;
        for (let k = 0; k < 4; k++) {
          const f1 = val(pt.x, pt.y), m = [pt.x + f1[0] * h / 2, pt.y + f1[1] * h / 2], f2 = val(m[0], m[1]);
          let dx = f2[0] * h, dy = f2[1] * h; const L = Math.hypot(dx, dy); if (L > 0.06) { dx *= 0.06 / L; dy *= 0.06 / L; }
          pt.x += dx; pt.y += dy;
        }
        if (!isFinite(pt.x) || Math.abs(pt.x) > R * 1.3 || Math.abs(pt.y) > R * 1.3 || !ok(pt.x, pt.y)) pt.dead = true;
        pt.trail.push([pt.x, pt.y]); if (pt.trail.length > 160) pt.trail.shift();
      });
      draw();
      const spinning = ok(probe.x, probe.y) && Math.abs(partials(probe.x, probe.y).Qx - partials(probe.x, probe.y).Py) > 1e-3;
      if (parts.some(p => !p.dead) || spinning) requestAnimationFrame(tick); else { anim = false; last = null; }
    }
    function kick() { if (!anim) { anim = true; last = null; requestAnimationFrame(tick); } }
    function setField(k) {
      key = k; sel.value = k; F = PRESETS[k]; cust.hidden = k !== 'custom'; parts = [];
      if (k === 'custom') applyCustom();
      draw(); readout(); kick();
    }
    function applyCustom() {
      const err = root.querySelector('.lab-err');
      try {
        const P = parse(root.querySelector('.lab-P').value), Q = parse(root.querySelector('.lab-Q').value);
        F = { label: 'custom', P: (x, y) => P({ x, y }), Q: (x, y) => Q({ x, y }) }; err.textContent = '';
      } catch (e) { err.textContent = 'Could not read that: ' + e.message; F = PRESETS.custom; }
      parts = []; draw(); readout(); kick();
    }
    sel.addEventListener('change', () => setField(sel.value));
    root.querySelector('.lab-apply').addEventListener('click', applyCustom);
    const ct = root.querySelector('.lab-ct'); if (ct) ct.addEventListener('change', draw);
    root.querySelector('[data-act=one]').addEventListener('click', () => { parts.push({ x: probe.x, y: probe.y, trail: [[probe.x, probe.y]] }); kick(); });
    root.querySelector('[data-act=cloud]').addEventListener('click', () => {
      for (let i = 0; i < 40; i++) { const x = (Math.random() * 2 - 1) * R * 0.9, y = (Math.random() * 2 - 1) * R * 0.9; if (ok(x, y)) parts.push({ x, y, trail: [[x, y]] }); }
      kick();
    });
    root.querySelector('[data-act=clear]').addEventListener('click', () => { parts = []; draw(); });
    function move(e) {
      const r = cv.getBoundingClientRect(), [x, y] = toW(e.clientX - r.left, e.clientY - r.top, { w: r.width, h: r.height });
      probe = { x: Math.max(-R, Math.min(R, x)), y: Math.max(-R, Math.min(R, y)) }; draw(); readout(); kick();
    }
    cv.addEventListener('pointerdown', e => { dragging = true; cv.setPointerCapture(e.pointerId); move(e); });
    cv.addEventListener('pointermove', e => { if (dragging) move(e); });
    cv.addEventListener('pointerup', () => { dragging = false; });
    window.addEventListener('resize', draw);
    setField(key);
    return { setField, setProbe: (x, y) => { probe = { x, y }; draw(); readout(); kick(); }, el: root };
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
  function Sorter(card) {
    const fb = card.querySelector('.pc-fb');
    card.querySelectorAll('.sort-row').forEach(row => row.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
      row.querySelectorAll('button').forEach(o => o.classList.remove('picked-ok', 'picked-no'));
      const right = b.dataset.v === row.dataset.answer; b.classList.add(right ? 'picked-ok' : 'picked-no');
      row.querySelector('.sort-why').innerHTML = right ? row.dataset.why : 'Compute \\(\\partial P/\\partial y\\) and \\(\\partial Q/\\partial x\\) and compare.';
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
    document.querySelectorAll('.river').forEach(River);
    const labs = {};
    document.querySelectorAll('.lab').forEach(el => { labs[el.id] = Lab(el); });
    document.querySelectorAll('.pc[data-kind=choice]').forEach(Choice);
    document.querySelectorAll('.pc[data-kind=typed]').forEach(Typed);
    document.querySelectorAll('.pc[data-kind=sort]').forEach(Sorter);
    document.querySelectorAll('button.reveal').forEach(Reveal);
    // "Show me in the lab" buttons: data-lab, data-field, data-probe="x,y"
    document.querySelectorAll('[data-showme]').forEach(b => b.addEventListener('click', () => {
      const lab = labs[b.dataset.lab]; if (!lab) return;
      lab.setField(b.dataset.field);
      const [x, y] = b.dataset.probe.split(',').map(Number); lab.setProbe(x, y);
      lab.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  window.__p15 = { parse, evalNum }; // for tests
})();
