---
layout: lesson
title: "MATH 499 Session 3: Making It Defensible"
course: 499
unit: "Logistic Regression for Financial Distress"
lesson: 3
lesson_title: "Making It Defensible"
blurb: "A baseline is not weak because logistic regression is weak. It is weak because someone accepted the defaults. This session is every choice the Zięba paper's baseline appears not to have made."
prereq: "Sessions 1 and 2. This is the session that matters most for our project — the two-baseline exercise at the end becomes Milestone 2."
needs_logreg: true
index_url: "/499/fall-2026/"
index_title: "Logistic Regression"
prev: "/499/fall-2026/logistic-02.html"
prev_title: "Session 2: Fitting, and How Fitting Fails"
next: "/499/fall-2026/logistic-04.html"
next_title: "Session 4: Judging a Rare-Event Model"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Scale, and the penalty that punishes the wrong variable</h2>

  <p>Our firms carry two predictors. The <strong>current ratio</strong> hovers around 1.6 and genuinely predicts
    failure. <strong>Total assets</strong> runs around 40,000 and, in this synthetic world, carries no signal at
    all. A fair procedure should keep the first and discard the second.</p>

  <p>Turn the ridge penalty up, with standardisation off.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="s3-lam">Ridge penalty \(\lambda\) <span id="s3-lamlab">1</span></label>
      <input type="range" id="s3-lam" min="-1" max="4" step="0.05" value="0">
    </div>
    <div class="ctl">
      <label for="s3-std">Standardise predictors first?</label>
      <select id="s3-std">
        <option value="0" selected>No — raw units</option>
        <option value="1">Yes — z-scored</option>
      </select>
    </div>
  </div>

  <canvas class="plot" id="s3-scale"></canvas>
  <div class="readout" id="s3-scale-out"></div>

  <p>Push \(\lambda\) all the way to the right. In raw units the current ratio collapses toward zero, total
    assets barely moves, and by the top of the range <strong>the noise variable carries a larger effect than the
    signal</strong> — AUC falls from \(0.78\) to about \(0.59\), most of the way to chance. Now switch
    standardisation on without touching \(\lambda\). The AUC returns to \(0.78\) and stays there no matter how
    hard you penalise, because shrinking both coefficients proportionally leaves the <em>ranking</em> of firms
    unchanged.</p>

  <p>One practical note before the explanation: ridge only bites once \(\lambda\) is comparable to the number of
    observations, which is why the slider runs on a logarithmic scale to 10,000. At \(\lambda = 3\) on 1,500
    firms, nothing happens at all.</p>

  <p>The reason is pure arithmetic. Ridge charges you \(\lambda\beta_j^2\). To move the log-odds appreciably, a
    predictor measured in units of 1.6 needs a coefficient around \(-1.4\), which costs about \(2\lambda\). A
    predictor measured in units of 40,000 needs a coefficient around \(0.00002\), which costs essentially
    nothing. <strong>The penalty is not charging per unit of predictive work. It is charging per unit of
    measurement scale</strong> — so the variable that happens to be recorded in small numbers pays for the sins
    of the one recorded in large ones.</p>

  <p>Standardise and the comparison becomes honest: every predictor is expressed in standard deviations, so a
    coefficient means the same thing everywhere and the penalty falls where the coefficients are genuinely large.</p>

  <p>This matters beyond ridge. Support vector machines with an RBF kernel compute distances between firms; a
    variable spanning tens of thousands drowns out every other dimension entirely, and the classifier degenerates
    to predicting the majority class. Zięba et al. report SVM at AUC \(0.502, 0.502, 0.500, 0.500, 0.505\) across
    five tasks — an almost perfectly flat line at chance. That is what an unscaled SVM looks like.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Dropping incomplete rows is not a neutral act</h2>

  <p>Firms in trouble file late, file badly, and file less. So missing values are not scattered at random — they
    concentrate in exactly the observations you most need. Raise the missingness rate among bankrupt firms and
    watch two strategies diverge.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="s3-miss">Missing rate among <em>bankrupt</em> firms</label>
      <input type="range" id="s3-miss" min="0" max="0.8" step="0.02" value="0">
    </div>
    <div class="ctl">
      <label for="s3-miss0">Missing rate among <em>solvent</em> firms</label>
      <input type="range" id="s3-miss0" min="0" max="0.4" step="0.02" value="0.05">
    </div>
  </div>

  <canvas class="plot" id="s3-miss-can"></canvas>
  <div class="readout" id="s3-miss-out"></div>

  <p>Both strategies are fitted on the damaged data and then scored on the complete data, so the comparison is
    against the truth rather than against each other.</p>

  <p><strong>Listwise deletion</strong> throws away the incomplete rows. When the missingness is concentrated in
    the minority class, this quietly shreds your positive cases — and the base rate the model learns is no longer
    the base rate of the world. <strong>Median imputation</strong> keeps every row but invents values, pulling
    those firms toward the middle of the distribution and flattening the very relationship you are trying to
    measure.</p>

  <p>Neither is free. The point is not that one wins; it is that this is a modelling decision with consequences,
    and it belongs in your write-up next to the results rather than buried in a preprocessing script.</p>

  <p>This is not hypothetical. Bao et al. required all 28 raw accounting variables to be non-missing, which
    dropped 17 AAER cases — and those 17 turned out to be the ones at the centre of Walker's critique, because the
    dropping is what fragmented their identifiers and let a fraud firm cross the train/test boundary. A missing
    data rule, three steps removed, decided whether the paper's headline result held.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Ratios with small denominators</h2>

  <p>A ratio whose denominator approaches zero explodes. In the Polish data, features like \(X_{47}\)
    (inventory × 365 / cost of products sold) do this whenever a firm reports near-zero costs. Slide the
    winsorising threshold and watch a handful of firms stop dominating the fit.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="s3-win">Winsorise at the … percentile</label>
      <input type="range" id="s3-win" min="0.90" max="1.00" step="0.005" value="1.00">
    </div>
  </div>

  <canvas class="plot" id="s3-win-can"></canvas>
  <div class="readout" id="s3-win-out"></div>

  <p>Winsorising replaces values beyond a chosen percentile with the value <em>at</em> that percentile. It is not
    deletion — the firm stays in the sample, keeps its outcome, and keeps every other variable. Only the extremity
    of one number is capped.</p>

  <p>Notice that this is a defensible choice in both directions, and you must be able to argue yours. Cap too
    aggressively and you erase real signal: a firm with a genuinely catastrophic ratio is genuinely distressed.
    Cap not at all and three firms out of ten thousand set the slope for everyone else. Report the threshold you
    used and show the result is not fragile to it.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Before you move on</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">You fit a ridge-penalised logistic regression on raw, unstandardised financial data. What
      systematically happens?</p>
    <button class="mc-opt" type="button" data-key="a">Nothing — logistic regression is scale-invariant.</button>
    <button class="mc-opt" type="button" data-key="b">Predictors measured in small units are penalised far harder
      than predictors measured in large units, regardless of how useful they are.</button>
    <button class="mc-opt" type="button" data-key="c">The intercept absorbs the difference in scales.</button>
    <div class="mc-fb" data-key="a">Unpenalised logistic regression is scale-invariant in its fitted
      probabilities. Add a penalty on \(\beta^2\) and that invariance is gone, because rescaling a predictor
      rescales its coefficient and therefore its penalty.</div>
    <div class="mc-fb" data-key="b">Correct. The penalty is charged per unit of coefficient, and coefficient size
      is an accident of measurement units.</div>
    <div class="mc-fb" data-key="c">The intercept shifts the baseline log-odds; it cannot rescale the slopes, and
      it isn't penalised anyway.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Missingness concentrates in your bankrupt firms and you drop incomplete rows. The main danger
      is:</p>
    <button class="mc-opt" type="button" data-key="a">A smaller sample, so wider confidence intervals.</button>
    <button class="mc-opt" type="button" data-key="b">Slower fitting.</button>
    <button class="mc-opt" type="button" data-key="c">A biased sample — you have thrown away the minority class
      preferentially, so the base rate and the fitted relationship no longer describe the world.</button>
    <div class="mc-fb" data-key="a">True, and the least of your problems. Wide intervals are honest; a biased
      point estimate is not.</div>
    <div class="mc-fb" data-key="b">Fitting gets faster, which is no consolation whatsoever.</div>
    <div class="mc-fb" data-key="c">Correct. With 4% positives you cannot afford to lose them selectively, and the
      loss is invisible in the output — the model reports clean diagnostics on a sample that no longer represents
      the population.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">A reviewer says you tuned your baseline to make it look good. What is the best defence?</p>
    <button class="mc-opt" type="button" data-key="a">Every preprocessing choice was fixed in advance, applied
      identically to the baseline and to every machine learning model, and reported.</button>
    <button class="mc-opt" type="button" data-key="b">The baseline is standard, so it needs no defence.</button>
    <button class="mc-opt" type="button" data-key="c">The machine learning model still won.</button>
    <div class="mc-fb" data-key="a">Correct — and note it protects you from the opposite accusation too. The
      symmetry is the point: whatever care you give one model, give to all of them.</div>
    <div class="mc-fb" data-key="b">"Standard" is what produced an AUC of 0.500 in a published paper. Defaults are
      a choice, not the absence of one.</div>
    <div class="mc-fb" data-key="c">Then the reviewer's suspicion is that you crippled the baseline, which is
      worse. A win over a handicapped opponent is exactly what's in question.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li><strong>The two-baseline exercise.</strong> On the Polish 1st-year file, build a naive baseline — all 64
      features, library defaults, incomplete rows dropped — and a careful one, with documented imputation,
      winsorised tails, standardisation, and a cross-validated penalty. Record both AUCs. The gap is our
      contribution in miniature.</li>
    <li>Which single change moved the number most? Was it the one you expected?</li>
    <li>Write the paragraph you would put in the paper defending your preprocessing. Then write the paragraph a
      hostile reviewer would write attacking it. If the second is more convincing, go back.</li>
  </ol>
</div>

<script>
(function () {
  var L = LR499;

  /* ---------------- scale x ridge ---------------- */
  var lamIn = document.getElementById('s3-lam'),
      stdIn = document.getElementById('s3-std'),
      canSc = document.getElementById('s3-scale'),
      outSc = document.getElementById('s3-scale-out');

  var FIRMS = L.makeFirms(1500, 0.10, 777);
  var YV = FIRMS.map(function (f) { return f.y; });

  function moments(vals) {
    var n = vals.length, m = 0, i;
    for (i = 0; i < n; i++) m += vals[i];
    m /= n;
    var v = 0;
    for (i = 0; i < n; i++) v += (vals[i] - m) * (vals[i] - m);
    return { mean: m, sd: Math.sqrt(v / n) || 1 };
  }
  var RM = moments(FIRMS.map(function (f) { return f.ratio; }));
  var AM = moments(FIRMS.map(function (f) { return f.assets; }));

  // Scientific notation as LaTeX. toExponential() renders as "-5.69e-6", and
  // inside MathJax the "e" italicises into something that looks like a variable.
  function sci(x, d) {
    if (x === 0) return '0';
    var e = Math.floor(Math.log10(Math.abs(x)));
    return (x / Math.pow(10, e)).toFixed(d === undefined ? 2 : d) + ' \\times 10^{' + e + '}';
  }

  function drawScale() {
    var lam = Math.pow(10, parseFloat(lamIn.value)), std = stdIn.value === '1';
    document.getElementById('s3-lamlab').textContent =
      lam >= 100 ? Math.round(lam) : (lam >= 1 ? lam.toFixed(1) : lam.toFixed(2));
    var X = FIRMS.map(function (f) {
      return std
        ? [1, (f.ratio - RM.mean) / RM.sd, (f.assets - AM.mean) / AM.sd]
        : [1, f.ratio, f.assets];
    });
    var fit = L.fit(X, YV, { lambda: lam, maxIter: 120 });
    var auc = L.rocCurve(L.predict(X, fit.beta), YV).auc;

    // express both coefficients in "per standard deviation" so the bars are comparable
    var effRatio = fit.beta[1] * (std ? 1 : RM.sd);
    var effAssets = fit.beta[2] * (std ? 1 : AM.sd);

    var d = M411.hidpi(canSc, 250), ctx = d.ctx, W = d.w, H = d.h;
    ctx.clearRect(0, 0, W, H);
    var padL = 132, padR = 90, padT = 26, padB = 54;
    var mid = padL + (W - padL - padR) * 0.5;
    var maxAbs = 2.0;
    function BX(v) { return mid + Math.max(-1, Math.min(1, v / maxAbs)) * (W - padL - padR) * 0.5; }

    ctx.strokeStyle = '#c9ccd1'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(mid, padT - 6); ctx.lineTo(mid, H - padB + 6); ctx.stroke();

    [{ n: 'current ratio', v: effRatio, c: '#009CDE', useful: true },
     { n: 'total assets', v: effAssets, c: '#8B5CF6', useful: false }].forEach(function (r, i) {
      var y = padT + 18 + i * 54;
      ctx.fillStyle = r.c; ctx.globalAlpha = 0.8;
      var x1 = BX(r.v);
      ctx.fillRect(Math.min(mid, x1), y - 13, Math.abs(x1 - mid), 26);
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#333'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(r.n, padL - 10, y + 4);
      ctx.font = '10px sans-serif'; ctx.fillStyle = M411.colors.muted;
      ctx.fillText(r.useful ? '(signal)' : '(noise)', padL - 10, y + 17);
      ctx.textAlign = 'left'; ctx.fillStyle = r.c; ctx.font = 'bold 11px sans-serif';
      ctx.fillText(L.fmt(r.v, 3), W - padR + 8, y + 4);
    });

    ctx.fillStyle = M411.colors.muted; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('coefficient per standard deviation of the predictor', (padL + W - padR) / 2, H - 28);
    ctx.fillText('0', mid, H - padB + 20);

    ctx.textAlign = 'right'; ctx.font = 'bold 13px sans-serif';
    ctx.fillStyle = auc > 0.75 ? M411.colors.scaffold : (auc > 0.65 ? '#F36E24' : '#d9534f');
    ctx.fillText('AUC ' + L.fmt(auc, 4), W - padR + 62, H - 16);

    // Judge by what actually happened, not by lambda: the whole point is that
    // the same lambda does very different things depending on scaling.
    var swamped = Math.abs(effAssets) >= Math.abs(effRatio);
    var collapsed = auc < 0.70;

    var body;
    if (swamped && !std) {
      body = '<strong style="color:#d9534f">The noise variable now matters more than the signal.</strong> ' +
        'Total assets carries an effect of ' + L.fmt(effAssets, 3) + ' per SD against the current ratio\'s ' +
        L.fmt(effRatio, 3) + '. The penalty has not selected the useful predictor — it has selected the one ' +
        'that happened to be recorded in large numbers.';
    } else if (!std && Math.abs(effRatio) < 1.0) {
      body = '<strong style="color:#F36E24">The penalty is falling almost entirely on the useful predictor.</strong> ' +
        'The current ratio has been pulled to ' + L.fmt(effRatio, 3) + ' per SD, while total assets barely moves — ' +
        'its raw coefficient is about \\(' + sci(fit.beta[2], 1) + '\\), and squaring that costs nothing at all.';
    } else if (std && Math.abs(effRatio) < 1.0) {
      body = '<strong style="color:var(--a411-scaffold)">Standardised, the penalty is fair.</strong> ' +
        'Both predictors are measured in standard deviations, so shrinkage falls on whichever coefficient is ' +
        'genuinely large — and the noise variable is the one being squeezed out (' + L.fmt(effAssets, 3) + ').';
    } else {
      body = 'At this penalty nothing much is happening yet. Ridge only bites once \\(\\lambda\\) is ' +
        'comparable to the number of observations — here ' + FIRMS.length + '. Push the slider well past 100.';
    }

    outSc.innerHTML =
      '<p>\\(\\lambda = ' + (lam >= 1 ? Math.round(lam) : lam.toFixed(2)) + '\\), ' +
      (std ? 'standardised' : '<strong>raw units</strong>') +
      '. Raw coefficients: ratio \\(' + sci(fit.beta[1], 2) + '\\), assets \\(' + sci(fit.beta[2], 2) + '\\).</p>' +
      '<p>' + body + '</p>' +
      (collapsed
        ? '<p><strong style="color:#d9534f">AUC has fallen to ' + L.fmt(auc, 4) + '.</strong> ' +
          'Reported without comment, a baseline like this would read as proof that logistic regression cannot do ' +
          'the job. Switch standardisation on — at the very same \\(\\lambda\\) — and watch it come back.</p>'
        : '');
    M411.typeset(outSc);
  }
  lamIn.addEventListener('input', drawScale);
  stdIn.addEventListener('change', drawScale);

  /* ---------------- missing data ---------------- */
  var missIn = document.getElementById('s3-miss'),
      miss0In = document.getElementById('s3-miss0'),
      canM = document.getElementById('s3-miss-can'),
      outM = document.getElementById('s3-miss-out');

  var MF = L.makeFirms(2000, 0.08, 5150);
  var MU = (function () { var r = L.rng(31), a = []; for (var i = 0; i < MF.length; i++) a.push(r()); return a; })();
  var CLEAN_X = MF.map(function (f) { return [1, f.ratio]; });
  var CLEAN_Y = MF.map(function (f) { return f.y; });
  var TRUE_FIT = L.fit(CLEAN_X, CLEAN_Y, { maxIter: 100 });
  var TRUE_AUC = L.rocCurve(L.predict(CLEAN_X, TRUE_FIT.beta), CLEAN_Y).auc;

  function drawMiss() {
    var m1 = parseFloat(missIn.value), m0 = parseFloat(miss0In.value);
    var missing = MF.map(function (f, i) { return MU[i] < (f.y === 1 ? m1 : m0); });

    // strategy A: listwise deletion
    var dX = [], dY = [];
    MF.forEach(function (f, i) { if (!missing[i]) { dX.push([1, f.ratio]); dY.push(f.y); } });
    // strategy B: median imputation on the observed values
    var obs = MF.filter(function (f, i) { return !missing[i]; }).map(function (f) { return f.ratio; })
      .sort(function (a, b) { return a - b; });
    var med = obs.length ? obs[Math.floor(obs.length / 2)] : 1.6;
    var iX = MF.map(function (f, i) { return [1, missing[i] ? med : f.ratio]; });

    var fitD = dY.length > 20 && dY.indexOf(1) >= 0 ? L.fit(dX, dY, { maxIter: 100 }) : null;
    var fitI = L.fit(iX, CLEAN_Y, { maxIter: 100 });
    var aucD = fitD ? L.rocCurve(L.predict(CLEAN_X, fitD.beta), CLEAN_Y).auc : NaN;
    var aucI = L.rocCurve(L.predict(CLEAN_X, fitI.beta), CLEAN_Y).auc;

    var nPos = CLEAN_Y.reduce(function (a, b) { return a + b; }, 0);
    var keptPos = dY.reduce(function (a, b) { return a + b; }, 0);
    var rateFull = nPos / MF.length, rateKept = dY.length ? keptPos / dY.length : 0;

    var d = M411.hidpi(canM, 250), ctx = d.ctx, W = d.w, H = d.h;
    ctx.clearRect(0, 0, W, H);
    var padL = 118, padR = 76, padT = 24;

    var rows = [
      { n: 'complete data', auc: TRUE_AUC, b: TRUE_FIT.beta[1], c: '#008552' },
      { n: 'listwise deletion', auc: aucD, b: fitD ? fitD.beta[1] : NaN, c: '#d9534f' },
      { n: 'median imputation', auc: aucI, b: fitI.beta[1], c: '#009CDE' }
    ];
    rows.forEach(function (r, i) {
      var y = padT + 16 + i * 46;
      var full = W - padL - padR;
      ctx.fillStyle = '#eef0f3';
      ctx.fillRect(padL, y - 11, full, 22);
      if (isFinite(r.auc)) {
        var frac = Math.max(0, (r.auc - 0.5) / 0.35);
        ctx.fillStyle = r.c; ctx.globalAlpha = 0.85;
        ctx.fillRect(padL, y - 11, Math.min(1, frac) * full, 22);
        ctx.globalAlpha = 1;
      }
      ctx.fillStyle = '#333'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(r.n, padL - 10, y + 4);
      ctx.textAlign = 'left'; ctx.fillStyle = r.c; ctx.font = 'bold 11px sans-serif';
      ctx.fillText(isFinite(r.auc) ? L.fmt(r.auc, 4) : 'n/a', W - padR + 8, y + 4);
    });
    ctx.fillStyle = M411.colors.muted; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('AUC on the complete data (bar starts at 0.50)', (padL + W - padR) / 2, H - 12);

    outM.innerHTML =
      '<p>Of ' + nPos + ' bankruptcies, listwise deletion keeps <strong>' + keptPos + '</strong>. ' +
      'The base rate shifts from ' + L.pct(rateFull, 2) + ' to <strong>' + L.pct(rateKept, 2) + '</strong>.</p>' +
      '<p>Slope \\(\\hat\\beta_1\\): complete ' + L.fmt(TRUE_FIT.beta[1], 3) +
      ', deletion ' + (fitD ? L.fmt(fitD.beta[1], 3) : 'n/a') +
      ', imputation ' + L.fmt(fitI.beta[1], 3) + '. ' +
      'Imputation pulls the slope toward zero because every imputed firm is handed the same, average-looking ratio.</p>' +
      (m1 > 0.35
        ? '<p><strong style="color:#d9534f">At this missingness rate the deleted sample is not the population.</strong> ' +
          'You are now modelling the subset of failing firms that filed complete accounts — a different, and ' +
          'systematically healthier, kind of company.</p>'
        : '');
    M411.typeset(outM);
  }
  missIn.addEventListener('input', drawMiss);
  miss0In.addEventListener('input', drawMiss);

  /* ---------------- winsorising ---------------- */
  var winIn = document.getElementById('s3-win'),
      canW = document.getElementById('s3-win-can'),
      outW = document.getElementById('s3-win-out');

  var WF = L.makeFirms(1200, 0.09, 616);
  var WY = WF.map(function (f) { return f.y; });
  var SORTED = WF.map(function (f) { return f.ratio; }).sort(function (a, b) { return a - b; });

  function drawWin() {
    var q = parseFloat(winIn.value);
    var cap = SORTED[Math.min(SORTED.length - 1, Math.floor(q * (SORTED.length - 1)))];
    var X = WF.map(function (f) { return [1, Math.min(f.ratio, cap)]; });
    var fit = L.fit(X, WY, { maxIter: 100 });
    var auc = L.rocCurve(L.predict(X, fit.beta), WY).auc;
    var nCapped = WF.filter(function (f) { return f.ratio > cap; }).length;

    var d = M411.hidpi(canW, 230), ctx = d.ctx, W = d.w, H = d.h;
    ctx.clearRect(0, 0, W, H);
    var padL = 48, padR = 18, padT = 20, padB = 40;
    var XLO = 0, XHI = Math.max(8, SORTED[SORTED.length - 1] * 1.02);
    function PX(v) { return padL + (v - XLO) / (XHI - XLO) * (W - padL - padR); }

    // histogram of the raw ratios
    var NB = 60, bins = new Array(NB).fill(0);
    WF.forEach(function (f) {
      var b = Math.min(NB - 1, Math.max(0, Math.floor((f.ratio - XLO) / (XHI - XLO) * NB)));
      bins[b]++;
    });
    var bmax = Math.max.apply(null, bins);
    var bw = (W - padL - padR) / NB;
    bins.forEach(function (c, i) {
      var h = (c / bmax) * (H - padT - padB);
      var xLeft = padL + i * bw;
      var beyond = XLO + (i + 0.5) / NB * (XHI - XLO) > cap;
      ctx.fillStyle = beyond ? 'rgba(217,83,79,0.65)' : 'rgba(0,156,222,0.5)';
      ctx.fillRect(xLeft, H - padB - h, Math.max(bw - 1, 1), h);
    });

    ctx.strokeStyle = '#F36E24'; ctx.lineWidth = 2; ctx.setLineDash([5, 4]);
    ctx.beginPath(); ctx.moveTo(PX(cap), padT); ctx.lineTo(PX(cap), H - padB); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#F36E24'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('cap = ' + cap.toFixed(2), PX(cap) + 5, padT + 10);

    ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('current ratio (red = capped)', (padL + W - padR) / 2, H - 10);

    outW.innerHTML =
      '<p>Capping at the ' + (100 * q).toFixed(1) + 'th percentile (\\(x = ' + cap.toFixed(2) + '\\)) affects <strong>' +
      nCapped + '</strong> of ' + WF.length + ' firms. Fitted slope \\(\\hat\\beta_1 = ' +
      L.fmt(fit.beta[1], 3) + '\\), AUC ' + L.fmt(auc, 4) + '.</p>' +
      '<p>' + (q >= 0.999
        ? 'No capping. A long right tail of firms with tiny denominators is stretching the \\(x\\)-axis, and the fit is spending its effort out there.'
        : 'The capped firms keep their outcome and every other variable — only the extremity of this one number is limited.') +
      '</p>';
    M411.typeset(outW);
  }
  winIn.addEventListener('input', drawWin);

  M411.onResize(function () { drawScale(); drawMiss(); drawWin(); });
  drawScale(); drawMiss(); drawWin();
})();
</script>
