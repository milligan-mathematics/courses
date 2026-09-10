---
layout: lesson
title: "MATH 499 Session 2: Fitting, and How Fitting Fails"
course: 499
unit: "Logistic Regression for Financial Distress"
lesson: 2
lesson_title: "Fitting, and How Fitting Fails"
blurb: "Least squares has a formula. Logistic regression has an argument that has to be settled numerically — and one arrangement of the data ends that argument with no answer at all, while the software reports success."
prereq: "ISLP section 4.3, and Session 1. You should already be comfortable saying what a coefficient means in odds."
needs_logreg: true
index_url: "/499/fall-2026/"
index_title: "Logistic Regression"
prev: "/499/fall-2026/logistic-01.html"
prev_title: "Session 1: From a Line to a Probability"
next: "/499/fall-2026/logistic-03.html"
next_title: "Session 3: Making It Defensible"
---

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Where the fitting problem comes from</h2>

  <p>In least squares you write down \(\hat\beta = (X^\top X)^{-1}X^\top y\) and you are finished. Nothing of the
    kind exists here, and it is worth seeing exactly where the road runs out.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the derivation</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1. Each firm is one coin flip, with its own bias.</div>
        <div class="sstep-body">
          <p>Firm \(i\) fails with probability \(p_i\) and survives with probability \(1 - p_i\). Its contribution
            to the likelihood is \(p_i^{y_i}(1-p_i)^{1-y_i}\) — a compact way of writing "\(p_i\) if \(y_i = 1\),
            \(1-p_i\) if \(y_i = 0\)," since anything to the power \(0\) is \(1\).</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2. Independence turns the sample into a product.</div>
        <div class="sstep-body">
          <p>\(\displaystyle \mathcal{L}(\beta) = \prod_{i=1}^{n} p_i^{y_i}(1-p_i)^{1-y_i}\)</p>
          <p>This is a product of several thousand numbers all smaller than one. Evaluated directly it underflows
            to zero on any real computer — one practical reason for the next step, quite apart from the algebra.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3. Take logs, and the product becomes a sum.</div>
        <div class="sstep-body">
          <p>\(\displaystyle \ell(\beta) = \sum_{i=1}^{n}\Big[y_i\log p_i + (1-y_i)\log(1-p_i)\Big]\)</p>
          <p>The logarithm is increasing, so whatever maximises \(\mathcal{L}\) maximises \(\ell\). Nothing has
            been given up.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4. Substitute the model.</div>
        <div class="sstep-body">
          <p>Now put in \(p_i = \sigma(z_i)\) where \(z_i = x_i^\top\beta\). Using
            \(\log\sigma(z) = -\log(1+e^{-z})\) and \(\log(1-\sigma(z)) = -z - \log(1+e^{-z})\), the whole thing
            collapses to</p>
          <p>\(\displaystyle \ell(\beta) = \sum_{i=1}^{n}\Big[y_i z_i - \log\big(1 + e^{z_i}\big)\Big]\)</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 5. Differentiate and set to zero.</div>
        <div class="sstep-body">
          <p>\(\displaystyle \frac{\partial \ell}{\partial \beta} = \sum_{i=1}^{n} x_i\big(y_i - \sigma(x_i^\top\beta)\big) = X^\top(y - p)\)</p>
          <p>These are the <em>score equations</em>, and they have a lovely reading: at the maximum, the residuals
            \(y_i - p_i\) are uncorrelated with every predictor. The model has extracted everything the predictors
            had to say.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 6. Try to solve them — and fail.</div>
        <div class="sstep-body">
          <p>Setting \(X^\top(y - p) = 0\) looks like the normal equations, but \(p\) is
            \(\sigma(X\beta)\): the unknown is trapped inside a nonlinear function. There is no rearrangement that
            frees it. <strong>No closed form exists.</strong></p>
          <p>So we iterate. Guess \(\beta\), compute \(p\), see which way the score points, step, repeat. That is
            all Newton-Raphson or IRLS is doing — and because \(\ell\) is concave, the step always points somewhere
            sensible. Usually.</p>
        </div>
      </li>
    </ol>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The hill the algorithm is climbing</h2>

  <p>Here is \(\ell(\beta_1)\) for our synthetic firms, with the intercept held at its fitted value. Slide
    \(\beta_1\) and watch both panels: the curve you are standing on, and the model that value implies.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="s2-b1">Your \(\beta_1\)</label>
      <input type="range" id="s2-b1" min="-4" max="1.5" step="0.02" value="0.4">
    </div>
  </div>

  <canvas class="plot" id="s2-ll"></canvas>
  <div class="readout" id="s2-ll-out"></div>

  <p>The log-likelihood is <strong>concave</strong> — one hill, one summit, no false peaks to get stuck on. That
    is a genuinely valuable property, and it is why logistic regression fits reliably where a neural network might
    not. Whatever your starting guess, walking uphill gets you to the same place.</p>

  <p>Notice also that \(\ell\) is always negative. It is a sum of logs of probabilities, and probabilities are
    less than one. Closer to zero is better; you will see software report this as "deviance" \(= -2\ell\), where
    smaller is better instead.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>One firm decides whether the model exists</h2>

  <p>Forty solvent firms on the left, forty bankrupt firms on the right, and one more bankrupt firm — the orange
    one — whose current ratio you control.</p>

  <p>Drag it slowly from left to right and watch the fitted coefficient.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="s2-x">The problem firm's current ratio</label>
      <input type="range" id="s2-x" min="0.2" max="3.4" step="0.02" value="1.0">
    </div>
    <div class="ctl">
      <label for="s2-lam">Ridge penalty \(\lambda\)</label>
      <input type="range" id="s2-lam" min="0" max="4" step="0.1" value="0">
    </div>
  </div>

  <canvas class="plot" id="s2-sep"></canvas>
  <div class="readout" id="s2-sep-out"></div>

  <p>While the orange firm sits among the solvent ones, everything is ordinary. The moment it crosses to the right
    of the last solvent firm, the two classes can be split by a single clean cut — and the fit falls apart.</p>

  <p><strong>This is complete separation.</strong> If some boundary classifies every observation perfectly, then
    making \(\beta_1\) steeper always improves the likelihood: it pushes the fitted probabilities closer to a
    perfect \(0\) and \(1\). Steeper is always better, forever. The likelihood has a supremum it never attains,
    and <strong>the maximum likelihood estimate does not exist.</strong></p>

  <p>Now for the part that should worry you. Look at what the software reports when this happens. It does not
    error. The gradient underflows once the probabilities saturate, the step size drops below tolerance, and the
    routine announces <em>convergence</em> — at whatever coefficient it happened to reach when the floating-point
    arithmetic gave out. Change the iteration limit and you get a different "estimate." The number is an artefact
    of the stopping rule.</p>

  <p>Then push the ridge penalty up off zero. The penalty makes large coefficients costly, which restores a
    genuine maximum, and the fit becomes well defined again. This is not a trick to make the warning go away — it
    is a different, answerable question: <em>what is the best model among those that aren't absurdly steep?</em></p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Before you move on</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Why is there no closed-form formula for the logistic regression coefficients?</p>
    <button class="mc-opt" type="button" data-key="a">Because the log-likelihood is not concave.</button>
    <button class="mc-opt" type="button" data-key="b">Because the outcome is binary rather than continuous.</button>
    <button class="mc-opt" type="button" data-key="c">Because the score equations \(X^\top(y-p)=0\) have \(\beta\)
      buried inside the nonlinear \(\sigma(\cdot)\), and it cannot be isolated.</button>
    <div class="mc-fb" data-key="a">It <em>is</em> concave — that's the good news, and it's why iteration reliably
      works.</div>
    <div class="mc-fb" data-key="b">Binary outcomes aren't the obstacle in themselves; the linear probability
      model is binary too and has a closed form. It's the nonlinear link that blocks it.</div>
    <div class="mc-fb" data-key="c">Correct. Compare the normal equations, where \(\beta\) sits alone and can be
      solved for directly.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Your software reports convergence, and a coefficient of 24.7 with a standard error of 9,100.
      What has most likely happened?</p>
    <button class="mc-opt" type="button" data-key="a">A very strong genuine effect.</button>
    <button class="mc-opt" type="button" data-key="b">Complete or near-complete separation — the estimate is an
      artefact of where the iteration stopped.</button>
    <button class="mc-opt" type="button" data-key="c">The predictor needs rescaling.</button>
    <div class="mc-fb" data-key="a">An odds ratio of \(e^{24.7} \approx 5\times10^{10}\) per unit is not a finding,
      it's a symptom. And the enormous standard error is the model telling you it has no idea.</div>
    <div class="mc-fb" data-key="b">Correct. The pairing of a huge coefficient with a huge standard error is the
      signature. Look for a predictor — or a combination — that perfectly sorts your outcome.</div>
    <div class="mc-fb" data-key="c">Rescaling changes the coefficient's units, not its significance or its standard
      error ratio. It won't produce this pattern and won't fix it.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">What does the score equation \(X^\top(y-p)=0\) say in words?</p>
    <button class="mc-opt" type="button" data-key="a">At the optimum, the residuals are uncorrelated with every
      predictor — nothing predictable is left.</button>
    <button class="mc-opt" type="button" data-key="b">At the optimum, every residual is zero.</button>
    <button class="mc-opt" type="button" data-key="c">At the optimum, the predicted probabilities all equal the
      base rate.</button>
    <div class="mc-fb" data-key="a">Correct, and it's the same condition least squares imposes — the residuals are
      orthogonal to the column space of \(X\). The models differ in the link, not in that principle.</div>
    <div class="mc-fb" data-key="b">That would require perfect prediction. In fact it's what separation chases,
      which is exactly when the estimate ceases to exist.</div>
    <div class="mc-fb" data-key="c">That's the intercept-only model. Adding predictors is what moves you off it.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>With 64 predictors and only about 270 bankruptcies in the 1st-year Polish file, how worried should we be
      about separation? What raises the risk — more predictors, fewer positives, or both?</li>
    <li>The ridge penalty makes the estimate exist again. But we changed the question we were asking to get there.
      Write down, in one sentence, what question the penalised fit actually answers.</li>
    <li>Zięba et al. report logistic regression at AUC \(0.500\). Separation produces wild coefficients, not
      chance performance. So separation is probably <em>not</em> the explanation. What else could flatten a logit
      to exactly chance? Bring a guess — Session 3 tests it.</li>
  </ol>
</div>

<script>
(function () {
  var L = LR499;

  /* ---------------- log-likelihood hill ---------------- */
  var b1In = document.getElementById('s2-b1'),
      canLL = document.getElementById('s2-ll'),
      outLL = document.getElementById('s2-ll-out');

  var FIRMS = L.makeFirms(500, 0.14, 404);
  var XM = FIRMS.map(function (f) { return [1, f.ratio]; });
  var YV = FIRMS.map(function (f) { return f.y; });
  var MLE = L.fit(XM, YV, { maxIter: 80 });

  function drawLL() {
    var b1 = parseFloat(b1In.value);
    var b0 = MLE.beta[0];
    var d = M411.hidpi(canLL, 320), ctx = d.ctx, W = d.w, H = d.h;
    ctx.clearRect(0, 0, W, H);

    var half = Math.floor(W / 2);
    var padL = 56, padT = 20, padB = 40;

    // ---- left panel: the likelihood curve ----
    var B1LO = -4, B1HI = 1.5;
    var lls = [], k;
    for (k = 0; k <= 200; k++) {
      var bb = B1LO + (B1HI - B1LO) * k / 200;
      lls.push(L.loglik(XM, YV, [b0, bb], 0));
    }
    var lmax = Math.max.apply(null, lls), lmin = Math.min.apply(null, lls);
    function LX(v) { return padL + (v - B1LO) / (B1HI - B1LO) * (half - padL - 16); }
    function LY(v) { return padT + (lmax + 8 - v) / (lmax + 8 - lmin) * (H - padT - padB); }

    ctx.strokeStyle = '#e4e6ea'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(padL, padT); ctx.lineTo(padL, H - padB); ctx.lineTo(half - 16, H - padB); ctx.stroke();

    ctx.strokeStyle = M411.colors.scaffold; ctx.lineWidth = 2.4;
    ctx.beginPath();
    lls.forEach(function (v, i) {
      var xx = LX(B1LO + (B1HI - B1LO) * i / 200);
      if (i === 0) ctx.moveTo(xx, LY(v)); else ctx.lineTo(xx, LY(v));
    });
    ctx.stroke();

    // summit
    ctx.strokeStyle = M411.colors.muted; ctx.lineWidth = 1.2; ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(LX(MLE.beta[1]), padT); ctx.lineTo(LX(MLE.beta[1]), H - padB); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = M411.colors.muted; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('MLE', LX(MLE.beta[1]), padT - 6);

    // your position
    var yourLL = L.loglik(XM, YV, [b0, b1], 0);
    ctx.fillStyle = M411.colors.check;
    ctx.beginPath(); ctx.arc(LX(b1), LY(yourLL), 6, 0, 2 * Math.PI); ctx.fill();

    ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('β₁', (padL + half - 16) / 2, H - 10);
    ctx.textAlign = 'left'; ctx.font = 'bold 11px sans-serif'; ctx.fillStyle = '#333';
    ctx.fillText('log-likelihood ℓ(β₁)', padL, padT - 6);

    // ---- right panel: the implied model ----
    var pL = half + 44, pR = W - 16;
    var XLO = -1, XHI = 6;
    function PX(v) { return pL + (v - XLO) / (XHI - XLO) * (pR - pL); }
    function PY(v) { return padT + (1.05 - v) / 1.1 * (H - padT - padB); }

    ctx.strokeStyle = '#e4e6ea'; ctx.lineWidth = 1;
    [0, 0.5, 1].forEach(function (v) {
      ctx.beginPath(); ctx.moveTo(pL, PY(v)); ctx.lineTo(pR, PY(v)); ctx.stroke();
      ctx.fillStyle = M411.colors.muted; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(v.toFixed(1), pL - 5, PY(v) + 3);
    });

    FIRMS.forEach(function (f, i) {
      ctx.fillStyle = f.y === 1 ? 'rgba(217,83,79,0.4)' : 'rgba(0,156,222,0.3)';
      ctx.beginPath(); ctx.arc(PX(f.ratio), PY(f.y === 1 ? 0.97 : 0.03), 2, 0, 2 * Math.PI); ctx.fill();
    });

    [[MLE.beta[1], M411.colors.muted, 1.4, [4, 4]], [b1, M411.colors.check, 2.4, []]].forEach(function (c) {
      ctx.strokeStyle = c[1]; ctx.lineWidth = c[2]; ctx.setLineDash(c[3]);
      ctx.beginPath();
      for (var j = 0; j <= 200; j++) {
        var xv = XLO + (XHI - XLO) * j / 200;
        var yv = L.sigmoid(b0 + c[0] * xv);
        if (j === 0) ctx.moveTo(PX(xv), PY(yv)); else ctx.lineTo(PX(xv), PY(yv));
      }
      ctx.stroke();
      ctx.setLineDash([]);
    });

    ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('current ratio', (pL + pR) / 2, H - 10);

    var gap = MLE.ll - yourLL;
    outLL.innerHTML =
      '<p>Your \\(\\beta_1 = ' + b1.toFixed(2) + '\\) gives \\(\\ell = ' + L.fmt(yourLL, 2) + '\\). ' +
      'The maximum is \\(\\ell = ' + L.fmt(MLE.ll, 2) + '\\) at \\(\\hat\\beta_1 = ' +
      L.fmt(MLE.beta[1], 3) + '\\), found in ' + MLE.iters + ' iterations.</p>' +
      '<p>' + (gap < 0.05
        ? '<strong style="color:var(--a411-scaffold)">You are at the summit.</strong> The dashed and solid curves coincide.'
        : 'You are <strong>' + L.fmt(gap, 2) + '</strong> below the summit. Slide toward it and watch the solid curve settle onto the dashed one.') +
      '</p>';
    M411.typeset(outLL);
  }
  b1In.addEventListener('input', drawLL);

  /* ---------------- separation ---------------- */
  var xIn = document.getElementById('s2-x'),
      lamIn = document.getElementById('s2-lam'),
      canS = document.getElementById('s2-sep'),
      outS = document.getElementById('s2-sep-out');

  var rs = L.rng(88);
  var BASE = [];
  for (var i = 0; i < 40; i++) BASE.push({ x: 0.35 + 1.25 * rs(), y: 0 });   // solvent, low ratio
  for (i = 0; i < 40; i++) BASE.push({ x: 1.95 + 1.35 * rs(), y: 1 });       // bankrupt, high ratio
  var LASTSOLVENT = Math.max.apply(null, BASE.filter(function (d) { return d.y === 0; })
    .map(function (d) { return d.x; }));

  function drawSep() {
    var px = parseFloat(xIn.value), lam = parseFloat(lamIn.value);
    var pts = BASE.concat([{ x: px, y: 1, flag: true }]);
    var X = pts.map(function (p) { return [1, p.x]; });
    var y = pts.map(function (p) { return p.y; });
    var f = L.fit(X, y, { maxIter: 200, lambda: lam });

    var d = M411.hidpi(canS, 300), ctx = d.ctx, W = d.w, H = d.h;
    ctx.clearRect(0, 0, W, H);
    var padL = 50, padR = 18, padT = 20, padB = 40;
    var XLO = 0, XHI = 3.8;
    function PX(v) { return padL + (v - XLO) / (XHI - XLO) * (W - padL - padR); }
    function PY(v) { return padT + (1.08 - v) / 1.16 * (H - padT - padB); }

    ctx.strokeStyle = '#e4e6ea'; ctx.lineWidth = 1;
    [0, 0.5, 1].forEach(function (v) {
      ctx.beginPath(); ctx.moveTo(padL, PY(v)); ctx.lineTo(W - padR, PY(v)); ctx.stroke();
      ctx.fillStyle = M411.colors.muted; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(v.toFixed(1), padL - 5, PY(v) + 3);
    });

    var separated = f.separated;
    // shade the no-man's-land between the classes when they are disjoint
    if (separated) {
      var firstBankrupt = Math.min.apply(null, pts.filter(function (p) { return p.y === 1; })
        .map(function (p) { return p.x; }));
      if (firstBankrupt > LASTSOLVENT) {
        ctx.fillStyle = 'rgba(139,92,246,0.10)';
        ctx.fillRect(PX(LASTSOLVENT), padT, PX(firstBankrupt) - PX(LASTSOLVENT), H - padT - padB);
        ctx.fillStyle = '#8B5CF6'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('a clean cut fits here', (PX(LASTSOLVENT) + PX(firstBankrupt)) / 2, padT + 12);
      }
    }

    ctx.strokeStyle = separated ? '#d9534f' : M411.colors.scaffold;
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    for (var k = 0; k <= 300; k++) {
      var xv = XLO + (XHI - XLO) * k / 300;
      var yv = L.sigmoid(f.beta[0] + f.beta[1] * xv);
      if (k === 0) ctx.moveTo(PX(xv), PY(yv)); else ctx.lineTo(PX(xv), PY(yv));
    }
    ctx.stroke();

    pts.forEach(function (p) {
      if (p.flag) return;
      ctx.fillStyle = p.y === 1 ? 'rgba(217,83,79,0.6)' : 'rgba(0,156,222,0.5)';
      ctx.beginPath(); ctx.arc(PX(p.x), PY(p.y === 1 ? 1 : 0), 3.4, 0, 2 * Math.PI); ctx.fill();
    });
    ctx.fillStyle = '#F36E24';
    ctx.beginPath(); ctx.arc(PX(px), PY(1), 7, 0, 2 * Math.PI); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.6; ctx.stroke();

    ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('current ratio', (padL + W - padR) / 2, H - 10);
    ctx.textAlign = 'left';
    ctx.fillText('bankrupt', padL + 6, PY(1) - 10);
    ctx.fillText('solvent', padL + 6, PY(0) - 10);

    var msg;
    if (separated) {
      msg = '<p><strong style="color:#d9534f">Complete separation. The maximum likelihood estimate does not exist.</strong> ' +
        'Every bankrupt firm now sits to the right of every solvent one, so a steeper curve always scores better — ' +
        'there is no best \\(\\beta_1\\), only ever-larger ones.</p>' +
        '<p>The routine stopped at \\(\\hat\\beta_1 = ' + L.fmt(f.beta[1], 2) + '\\) after ' + f.iters +
        ' iterations, not because that is the answer but because the fitted probabilities saturated and the ' +
        'gradient underflowed. <strong>Raise \\(\\lambda\\) above zero</strong> to restore a real maximum.</p>';
    } else if (lam > 0) {
      msg = '<p><strong style="color:var(--a411-scaffold)">Penalised fit, well defined.</strong> ' +
        '\\(\\hat\\beta_1 = ' + L.fmt(f.beta[1], 3) + '\\) with \\(\\lambda = ' + lam.toFixed(1) + '\\). ' +
        'The penalty caps how steep the curve is allowed to get, so a maximum exists whether or not the classes ' +
        'overlap.</p>';
    } else {
      msg = '<p><strong style="color:var(--a411-scaffold)">Ordinary fit, well defined.</strong> ' +
        '\\(\\hat\\beta_1 = ' + L.fmt(f.beta[1], 3) + '\\), converged in ' + f.iters + ' iterations. ' +
        'The orange firm overlaps the solvent group, so no clean cut exists and the likelihood has a genuine peak.</p>';
    }
    outS.innerHTML =
      '<p>Problem firm at \\(x = ' + px.toFixed(2) + '\\); the rightmost solvent firm sits at \\(x = ' +
      LASTSOLVENT.toFixed(2) + '\\).</p>' + msg;
    M411.typeset(outS);
  }
  xIn.addEventListener('input', drawSep);
  lamIn.addEventListener('input', drawSep);

  M411.onResize(function () { drawLL(); drawSep(); });
  drawLL(); drawSep();
})();
</script>
