---
layout: lesson
title: "MATH 499 Session 1: From a Line to a Probability"
course: 499
unit: "Logistic Regression for Financial Distress"
lesson: 1
lesson_title: "From a Line to a Probability"
blurb: "A firm either fails or it doesn't. Fitting a straight line to that will cheerfully tell you a company has a −14% chance of bankruptcy. Today we build the model that can't."
prereq: "ISLP Chapter 4, sections 4.1–4.2. You do not need to have read 4.3 yet; Session 2 is about fitting."
needs_logreg: true
index_url: "/499/fall-2026/"
index_title: "Logistic Regression"
next: "/499/fall-2026/logistic-02.html"
next_title: "Session 2: Fitting, and How Fitting Fails"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Why not just draw a line?</h2>

  <p>Below are 400 synthetic firms. Each has a current ratio (current assets over short-term liabilities, roughly
    feature \(X_{40}\) in our Polish data) and a fate: bankrupt or solvent. Because the outcome is only ever \(0\) or
    \(1\), the points sit in two rows, jittered a little so you can see the density.</p>

  <p>The obvious first instinct is to fit a line by least squares and read it as a probability. Try it. Drag the
    query slider to a firm's current ratio and compare what the two models claim.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="s1-xq">Query firm's current ratio</label>
      <input type="range" id="s1-xq" min="-1.2" max="5.5" step="0.05" value="0.2">
    </div>
    <div class="ctl">
      <label for="s1-rate">Bankruptcy rate in the sample</label>
      <select id="s1-rate">
        <option value="0.30">30% (unrealistic, but easy to see)</option>
        <option value="0.12" selected>12%</option>
        <option value="0.05">5% (closer to the real thing)</option>
      </select>
    </div>
  </div>

  <canvas class="plot" id="s1-canvas"></canvas>
  <div class="readout" id="s1-out"></div>

  <p>Push the query slider to the far left. The straight line does not stop at \(1\), and on the right it does not
    stop at \(0\) — it keeps going, promising negative probabilities to healthy firms. That is not a rounding
    problem you can patch by clipping. It is a sign the model has the wrong shape.</p>

  <p>There is a second, quieter problem. Lower the bankruptcy rate to 5% and watch the line flatten toward the
    floor. Least squares is trying to minimise squared error against a target that is almost always \(0\), so the
    cheapest thing it can do is predict "almost never" everywhere and stop paying attention to the ratio. The
    logistic curve keeps its shape, because it is not fitting distances — it is fitting <em>odds</em>.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Probability, odds, log-odds</h2>

  <p>The trick that makes logistic regression work is a change of scale, applied three times over. Slide the
    probability and watch what happens to the other two quantities.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="s1-p">Probability of bankruptcy \(p\)</label>
      <input type="range" id="s1-p" min="0.005" max="0.995" step="0.005" value="0.2">
    </div>
  </div>

  <canvas class="plot" id="s1-scales"></canvas>
  <div class="readout" id="s1-scales-out"></div>

  <p>Three scales, same information:</p>

  <ul>
    <li><strong>Probability</strong> \(p\) lives in \((0,1)\). Bounded at both ends — which is exactly what a line
      cannot respect.</li>
    <li><strong>Odds</strong> \(\dfrac{p}{1-p}\) live in \((0,\infty)\). Bounded below only.</li>
    <li><strong>Log-odds</strong> \(\log\dfrac{p}{1-p}\) live in \((-\infty,\infty)\). Not bounded at all.</li>
  </ul>

  <p>That last line is the whole idea. The log-odds scale is where a straight line is finally harmless, because
    there is no edge to fall off. So logistic regression is an ordinary linear model — it just runs on the
    log-odds:</p>

  <p style="text-align:center">\(\log\dfrac{p}{1-p} = \beta_0 + \beta_1 x\)</p>

  <p>Invert that and you get the probability back, squashed safely into \((0,1)\) by the logistic function:</p>

  <p style="text-align:center">\(p = \dfrac{1}{1 + e^{-(\beta_0 + \beta_1 x)}}\)</p>

  <p>Notice how uneven the mapping is. Sliding \(p\) from \(0.50\) to \(0.55\) barely moves the log-odds. Sliding
    it from \(0.005\) to \(0.055\) — the same \(0.05\) in probability — moves the log-odds by more than two whole
    units. <strong>Near the edges, tiny probability differences are enormous odds differences.</strong> For a
    problem where the base rate is 4%, we live permanently at that end of the scale, and this is why.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>What a coefficient actually says</h2>

  <p>Set the two coefficients yourself and watch the curve respond. The readout translates \(\beta_1\) into the
    sentence you need to be able to say out loud.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="s1-b0">Intercept \(\beta_0\)</label>
      <input type="range" id="s1-b0" min="-4" max="4" step="0.1" value="0.6">
    </div>
    <div class="ctl">
      <label for="s1-b1">Slope \(\beta_1\)</label>
      <input type="range" id="s1-b1" min="-3" max="3" step="0.05" value="-1.2">
    </div>
    <div class="ctl">
      <label for="s1-x0">Compare at \(x\) and \(x+1\), starting from \(x =\)</label>
      <input type="range" id="s1-x0" min="-1" max="5" step="0.1" value="0.5">
    </div>
  </div>

  <canvas class="plot" id="s1-coef"></canvas>
  <div class="readout" id="s1-coef-out"></div>

  <p>Move the starting point \(x\) around without touching \(\beta_1\). The <em>odds ratio</em> never budges — one
    more unit of current ratio multiplies the odds by \(e^{\beta_1}\), wherever you start. But the
    <em>probability</em> change swings wildly: large in the middle of the curve, almost nothing out in the tails.</p>

  <p>This is the single most common error in reading a logistic regression. A coefficient is a statement about
    odds, and odds only. "A one-unit increase in the current ratio multiplies the odds of bankruptcy by 0.30" is
    correct at every point on the curve. "…reduces the probability of bankruptcy by 18 percentage points" is
    true at one specific \(x\) and false everywhere else.</p>

  <p>Two special values worth locking in: \(\beta_1 = 0\) gives an odds ratio of \(e^0 = 1\), meaning the
    predictor does nothing. And the sign of \(\beta_1\) is the sign of the effect on log-odds — negative here,
    because a firm with more current assets relative to its short-term obligations is safer.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Before you move on</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">A fitted model reports \(\beta_1 = 0.7\) for a leverage ratio. What does that mean?</p>
    <button class="mc-opt" type="button" data-key="a">The probability of bankruptcy rises by 0.7 for each unit of
      leverage.</button>
    <button class="mc-opt" type="button" data-key="b">The odds of bankruptcy are multiplied by \(e^{0.7} \approx
      2.01\) for each unit of leverage.</button>
    <button class="mc-opt" type="button" data-key="c">The probability of bankruptcy is multiplied by \(e^{0.7}\) for
      each unit of leverage.</button>
    <div class="mc-fb" data-key="a">Probabilities can't rise by 0.7 repeatedly — you'd pass 1 almost immediately.
      That impossibility is precisely why we left the probability scale.</div>
    <div class="mc-fb" data-key="b">Correct, and note the two things this does <em>not</em> tell you: how much the
      probability moves (depends where you start), and whether the effect is causal.</div>
    <div class="mc-fb" data-key="c">Close, but it's the odds that get multiplied, not the probability. Multiplying a
      probability of 0.6 by 2.01 gives 1.21, which is not a probability.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Why is the log-odds scale the right place to put a linear model?</p>
    <button class="mc-opt" type="button" data-key="a">Because logarithms make the arithmetic easier.</button>
    <button class="mc-opt" type="button" data-key="b">Because it makes the residuals normally distributed.</button>
    <button class="mc-opt" type="button" data-key="c">Because it is unbounded in both directions, so a line can run
      as far as it likes without producing an impossible value.</button>
    <div class="mc-fb" data-key="a">It doesn't, particularly — fitting gets <em>harder</em>, as Session 2 will
      show.</div>
    <div class="mc-fb" data-key="b">It doesn't do that either. With a binary outcome the residuals can't be normal
      no matter what scale you use; logistic regression simply stops assuming they are.</div>
    <div class="mc-fb" data-key="c">Correct. A line on \((-\infty,\infty)\) can't fall off an edge, and the
      logistic function maps the result back into \((0,1)\) on the way out.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Two firms have predicted probabilities of 0.02 and 0.04. Two others, 0.48 and 0.50. Which pair
      is further apart in log-odds?</p>
    <button class="mc-opt" type="button" data-key="a">The first pair, by a wide margin.</button>
    <button class="mc-opt" type="button" data-key="b">The second pair — 0.50 is the steepest point of the
      curve.</button>
    <button class="mc-opt" type="button" data-key="c">They're equally far apart; both differ by 0.02.</button>
    <div class="mc-fb" data-key="a">Correct: about 0.71 in log-odds versus about 0.08. Doubling a small risk is a
      big move in odds; nudging a coin flip is not. For rare-event models this is the difference between a firm you
      investigate and one you don't.</div>
    <div class="mc-fb" data-key="b">Steepest in the other direction — near \(p = 0.5\) a large change in log-odds
      produces only a small change in probability, so equal probability gaps there mean <em>small</em> log-odds
      gaps.</div>
    <div class="mc-fb" data-key="c">Equally far apart in probability, yes. That's exactly the intuition the second
      widget is built to break.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>In the first widget, drop the bankruptcy rate to 5% and look at what the least-squares line does. Our Polish
      data runs between 4% and 9%. What does that predict about the quality of a linear-probability baseline on it?</li>
    <li>Zięba et al. report a logistic regression AUC of exactly \(0.500\) on two tasks. Nothing you have seen today
      explains a result that bad. Write down two guesses about what could cause it, and keep them — Sessions 2 and 3
      are about exactly those failures.</li>
    <li>Pick any financial ratio you know well. If its logistic coefficient came back at \(\beta_1 = -0.4\), write
      one sentence interpreting it that you would be willing to defend at a conference.</li>
  </ol>
</div>

<script>
(function () {
  var L = LR499;

  /* ---------------- 1. line vs curve ---------------- */
  var xqIn = document.getElementById('s1-xq'),
      rateIn = document.getElementById('s1-rate'),
      can1 = document.getElementById('s1-canvas'),
      out1 = document.getElementById('s1-out');

  var jitter = L.rng(1234);
  var JIT = [];
  for (var i = 0; i < 400; i++) JIT.push(jitter());

  function ols(xs, ys) {
    var n = xs.length, mx = 0, my = 0, i;
    for (i = 0; i < n; i++) { mx += xs[i]; my += ys[i]; }
    mx /= n; my /= n;
    var num = 0, den = 0;
    for (i = 0; i < n; i++) { num += (xs[i] - mx) * (ys[i] - my); den += (xs[i] - mx) * (xs[i] - mx); }
    var b1 = den ? num / den : 0;
    return { b0: my - b1 * mx, b1: b1 };
  }

  function draw1() {
    var rate = parseFloat(rateIn.value);
    var firms = L.makeFirms(400, rate, 2026);
    var xs = firms.map(function (f) { return f.ratio; });
    var ys = firms.map(function (f) { return f.y; });
    var lin = ols(xs, ys);
    var fitted = L.fit(firms.map(function (f) { return [1, f.ratio]; }), ys, { maxIter: 80 });
    var b = fitted.beta;

    var d = M411.hidpi(can1, 340), ctx = d.ctx, W = d.w, H = d.h;
    ctx.clearRect(0, 0, W, H);
    var padL = 56, padR = 18, padT = 18, padB = 40;
    var XLO = -1.4, XHI = 5.8, YLO = -0.45, YHI = 1.35;
    function X(v) { return padL + (v - XLO) / (XHI - XLO) * (W - padL - padR); }
    function Y(v) { return padT + (YHI - v) / (YHI - YLO) * (H - padT - padB); }

    // gridlines at 0 and 1 - the walls a probability may not cross
    ctx.strokeStyle = '#c9ccd1'; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
    [0, 1].forEach(function (v) {
      ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
    });
    ctx.setLineDash([]);
    ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
    ctx.fillText('1  bankrupt', padL - 6, Y(1) + 4);
    ctx.fillText('0  solvent', padL - 6, Y(0) + 4);

    // the impossible zones
    ctx.fillStyle = 'rgba(217,83,79,0.07)';
    ctx.fillRect(padL, Y(YHI), W - padL - padR, Y(1) - Y(YHI));
    ctx.fillRect(padL, Y(0), W - padL - padR, Y(YLO) - Y(0));

    // points
    firms.forEach(function (f, i) {
      var jy = f.y + (JIT[i] - 0.5) * 0.17;
      ctx.fillStyle = f.y === 1 ? 'rgba(217,83,79,0.55)' : 'rgba(0,156,222,0.42)';
      ctx.beginPath(); ctx.arc(X(f.ratio), Y(jy), 2.5, 0, 2 * Math.PI); ctx.fill();
    });

    // least squares line
    ctx.strokeStyle = '#8B5CF6'; ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(X(XLO), Y(lin.b0 + lin.b1 * XLO));
    ctx.lineTo(X(XHI), Y(lin.b0 + lin.b1 * XHI));
    ctx.stroke();

    // logistic curve
    ctx.strokeStyle = M411.colors.scaffold; ctx.lineWidth = 2.4;
    ctx.beginPath();
    for (var k = 0; k <= 240; k++) {
      var xv = XLO + (XHI - XLO) * k / 240;
      var yv = L.sigmoid(b[0] + b[1] * xv);
      if (k === 0) ctx.moveTo(X(xv), Y(yv)); else ctx.lineTo(X(xv), Y(yv));
    }
    ctx.stroke();

    // query marker
    var xq = parseFloat(xqIn.value);
    var pl = lin.b0 + lin.b1 * xq, pg = L.sigmoid(b[0] + b[1] * xq);
    ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 1.6; ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(X(xq), Y(YLO)); ctx.lineTo(X(xq), Y(YHI)); ctx.stroke();
    ctx.setLineDash([]);
    [[pl, '#8B5CF6'], [pg, M411.colors.scaffold]].forEach(function (pr) {
      ctx.fillStyle = pr[1];
      ctx.beginPath(); ctx.arc(X(xq), Y(pr[0]), 4.5, 0, 2 * Math.PI); ctx.fill();
    });

    ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('current ratio', (padL + W - padR) / 2, H - 10);
    ctx.textAlign = 'left';
    ctx.fillStyle = '#8B5CF6'; ctx.fillText('— least squares line', padL + 8, padT + 12);
    ctx.fillStyle = M411.colors.scaffold; ctx.fillText('— logistic curve', padL + 8, padT + 27);

    var bad = pl < 0 || pl > 1;
    out1.innerHTML =
      '<p>At a current ratio of \\(x = ' + xq.toFixed(2) + '\\):</p>' +
      '<p><strong style="color:#8B5CF6">Least squares says ' + L.fmt(pl, 3) + '</strong>' +
      (bad ? ' &mdash; <strong style="color:#d9534f">which is not a probability.</strong>' : '.') +
      ' &nbsp; <strong style="color:var(--a411-scaffold)">Logistic says ' + L.fmt(pg, 3) + '</strong>, ' +
      'which is always in \\((0,1)\\) no matter how far out you go.</p>' +
      '<p>Sample base rate: ' + L.pct(ys.reduce(function (a, c) { return a + c; }, 0) / ys.length) +
      '. &nbsp; Fitted logistic model: \\(\\log\\frac{p}{1-p} = ' + L.fmt(b[0], 2) + ' + (' + L.fmt(b[1], 2) +
      ')\\,x\\).</p>';
    M411.typeset(out1);
  }
  xqIn.addEventListener('input', draw1);
  rateIn.addEventListener('change', draw1);

  /* ---------------- 2. three scales ---------------- */
  var pIn = document.getElementById('s1-p'),
      can2 = document.getElementById('s1-scales'),
      out2 = document.getElementById('s1-scales-out');

  function draw2() {
    var p = parseFloat(pIn.value);
    var odds = p / (1 - p), lo = Math.log(odds);

    var d = M411.hidpi(can2, 260), ctx = d.ctx, W = d.w, H = d.h;
    ctx.clearRect(0, 0, W, H);
    var padL = 92, padR = 40;
    var rows = [
      { label: 'p', lo: 0, hi: 1, val: p, map: function (v) { return v; }, color: '#009CDE', tick: ['0', '0.5', '1'] },
      { label: 'odds', lo: 0, hi: 1, val: odds, color: '#F36E24',
        map: function (v) { return Math.min(Math.log10(v + 1) / Math.log10(21), 1); }, tick: ['0', '1', '20+'] },
      { label: 'log-odds', lo: -5, hi: 5, val: lo, color: '#008552',
        map: function (v) { return (Math.max(-5, Math.min(5, v)) + 5) / 10; }, tick: ['−5', '0', '+5'] }
    ];

    rows.forEach(function (r, i) {
      var y = 46 + i * 68;
      var x0 = padL, x1 = W - padR;
      ctx.strokeStyle = '#c9ccd1'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke();

      ctx.fillStyle = '#333'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(r.label, padL - 12, y + 4);

      ctx.fillStyle = M411.colors.muted; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
      [0, 0.5, 1].forEach(function (t, j) {
        var xx = x0 + t * (x1 - x0);
        ctx.beginPath(); ctx.moveTo(xx, y - 4); ctx.lineTo(xx, y + 4);
        ctx.strokeStyle = '#c9ccd1'; ctx.lineWidth = 1; ctx.stroke();
        ctx.fillText(r.tick[j], xx, y + 18);
      });

      var t = Math.max(0, Math.min(1, r.map(r.val)));
      var mx = x0 + t * (x1 - x0);
      ctx.fillStyle = r.color;
      ctx.beginPath(); ctx.arc(mx, y, 7, 0, 2 * Math.PI); ctx.fill();
      ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(i === 0 ? p.toFixed(3) : (i === 1 ? odds.toFixed(2) : lo.toFixed(2)), mx, y - 14);
    });

    ctx.fillStyle = M411.colors.muted; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('odds axis is compressed logarithmically so the whole range fits', W / 2, H - 8);

    out2.innerHTML =
      '<p>\\(p = ' + p.toFixed(3) + '\\) &nbsp;&rarr;&nbsp; odds \\(= \\frac{' + p.toFixed(3) + '}{1 - ' +
      p.toFixed(3) + '} = ' + odds.toFixed(3) + '\\) &nbsp;&rarr;&nbsp; log-odds \\(= ' + lo.toFixed(3) + '\\)</p>' +
      '<p>' + (p < 0.5
        ? 'Below \\(p = 0.5\\) the odds are under 1 and the log-odds are negative — bankruptcy is the less likely outcome.'
        : (p > 0.5
          ? 'Above \\(p = 0.5\\) the odds exceed 1 and the log-odds are positive.'
          : 'At \\(p = 0.5\\) the odds are exactly 1 and the log-odds are exactly 0 — the balance point.')) + '</p>';
    M411.typeset(out2);
  }
  pIn.addEventListener('input', draw2);

  /* ---------------- 3. coefficients ---------------- */
  var b0In = document.getElementById('s1-b0'),
      b1In = document.getElementById('s1-b1'),
      x0In = document.getElementById('s1-x0'),
      can3 = document.getElementById('s1-coef'),
      out3 = document.getElementById('s1-coef-out');

  function draw3() {
    var b0 = parseFloat(b0In.value), b1 = parseFloat(b1In.value), x0 = parseFloat(x0In.value);
    var d = M411.hidpi(can3, 300), ctx = d.ctx, W = d.w, H = d.h;
    ctx.clearRect(0, 0, W, H);
    var padL = 54, padR = 18, padT = 18, padB = 38;
    var XLO = -1.5, XHI = 6;
    function X(v) { return padL + (v - XLO) / (XHI - XLO) * (W - padL - padR); }
    function Y(v) { return padT + (1.05 - v) / 1.1 * (H - padT - padB); }

    ctx.strokeStyle = '#e4e6ea'; ctx.lineWidth = 1;
    [0, 0.25, 0.5, 0.75, 1].forEach(function (v) {
      ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
      ctx.fillStyle = M411.colors.muted; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(v.toFixed(2), padL - 6, Y(v) + 3);
    });

    ctx.strokeStyle = M411.colors.scaffold; ctx.lineWidth = 2.4;
    ctx.beginPath();
    for (var k = 0; k <= 260; k++) {
      var xv = XLO + (XHI - XLO) * k / 260;
      var yv = L.sigmoid(b0 + b1 * xv);
      if (k === 0) ctx.moveTo(X(xv), Y(yv)); else ctx.lineTo(X(xv), Y(yv));
    }
    ctx.stroke();

    var p0 = L.sigmoid(b0 + b1 * x0), p1 = L.sigmoid(b0 + b1 * (x0 + 1));
    [[x0, p0, '#009CDE'], [x0 + 1, p1, '#F36E24']].forEach(function (q) {
      ctx.strokeStyle = q[2]; ctx.lineWidth = 1.4; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(X(q[0]), Y(0)); ctx.lineTo(X(q[0]), Y(q[1])); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(padL, Y(q[1])); ctx.lineTo(X(q[0]), Y(q[1])); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = q[2];
      ctx.beginPath(); ctx.arc(X(q[0]), Y(q[1]), 5, 0, 2 * Math.PI); ctx.fill();
    });

    ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('x  (one unit apart: blue → orange)', (padL + W - padR) / 2, H - 9);

    var o0 = p0 / (1 - p0), o1 = p1 / (1 - p1);
    var or = Math.exp(b1);
    out3.innerHTML =
      '<p>\\(\\log\\frac{p}{1-p} = ' + L.fmt(b0, 2) + ' + (' + L.fmt(b1, 2) + ')\\,x\\)</p>' +
      '<table style="width:100%;font-size:0.92em;border-collapse:collapse">' +
      '<tr><td></td><td style="text-align:right"><strong>at \\(x = ' + x0.toFixed(1) + '\\)</strong></td>' +
      '<td style="text-align:right"><strong>at \\(x = ' + (x0 + 1).toFixed(1) + '\\)</strong></td>' +
      '<td style="text-align:right"><strong>change</strong></td></tr>' +
      '<tr><td>probability</td><td style="text-align:right">' + L.fmt(p0, 4) + '</td><td style="text-align:right">' +
      L.fmt(p1, 4) + '</td><td style="text-align:right">' + (p1 - p0 >= 0 ? '+' : '') + L.fmt(p1 - p0, 4) +
      '</td></tr>' +
      '<tr><td>odds</td><td style="text-align:right">' + L.fmt(o0, 4) + '</td><td style="text-align:right">' +
      L.fmt(o1, 4) + '</td><td style="text-align:right"><strong>&times; ' + L.fmt(o1 / o0, 4) +
      '</strong></td></tr></table>' +
      '<p><strong style="color:var(--a411-scaffold)">The odds ratio is \\(e^{' + L.fmt(b1, 2) + '} = ' +
      L.fmt(or, 4) + '\\)</strong> &mdash; and it is the same number no matter where you set \\(x\\). ' +
      'Slide \\(x\\) and check: the probability column moves, the odds multiplier does not.</p>';
    M411.typeset(out3);
  }
  b0In.addEventListener('input', draw3);
  b1In.addEventListener('input', draw3);
  x0In.addEventListener('input', draw3);

  M411.onResize(function () { draw1(); draw2(); draw3(); });
  draw1(); draw2(); draw3();
})();
</script>
