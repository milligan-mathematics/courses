---
layout: lesson
title: "MATH 499 Session 4: Judging a Rare-Event Model"
course: 499
unit: "Logistic Regression for Financial Distress"
lesson: 4
lesson_title: "Judging a Rare-Event Model"
blurb: "When 4% of firms fail, a model that predicts nobody fails is 96% accurate. Every metric in this session exists because of that sentence."
prereq: "Sessions 1–3. Bring the careful baseline you built at the end of Session 3 — this session is how you report it."
needs_logreg: true
index_url: "/499/fall-2026/"
index_title: "Logistic Regression"
prev: "/499/fall-2026/logistic-03.html"
prev_title: "Session 3: Making It Defensible"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The accuracy trap</h2>

  <p>A fitted model gives every firm a score. To turn scores into decisions you pick a threshold — above it you
    call the firm distressed, below it you leave it alone. Slide the threshold and watch the four cells and the
    three summary numbers.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="s4-thr">Decision threshold</label>
      <input type="range" id="s4-thr" min="0.005" max="0.9" step="0.005" value="0.5">
    </div>
    <div class="ctl">
      <label for="s4-rate">Bankruptcy rate</label>
      <select id="s4-rate">
        <option value="0.30">30%</option>
        <option value="0.10">10%</option>
        <option value="0.04" selected>4% (like the Polish 1st-year file)</option>
      </select>
    </div>
  </div>

  <canvas class="plot" id="s4-conf"></canvas>
  <div class="readout" id="s4-conf-out"></div>

  <p>Leave the threshold at the default \(0.5\) and look at what the model does at a 4% base rate: it declares
    almost nobody distressed, and scores about 96% accurate for it. That is not a model. It is a model-shaped
    object that has learned to say "no."</p>

  <p>The default threshold of \(0.5\) is not a statistical principle — it is a convention that happens to make
    sense when the classes are balanced. Here it is simply wrong, and lowering it is not cheating.</p>

  <p><strong>Precision</strong> asks: of the firms I flagged, how many were really in trouble? <strong>Recall</strong>
    asks: of the firms really in trouble, how many did I catch? Drag the threshold across its range and watch them
    trade against each other. There is no threshold that maximises both, which is why a single number cannot
    describe a classifier — and why reporting accuracy alone on rare events is close to meaningless.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Why AUC flatters and precision-recall does not</h2>

  <p>Two curves, same model, same scores. Change the base rate and watch them behave completely differently.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="s4-base">Bankruptcy rate in the population</label>
      <input type="range" id="s4-base" min="0.01" max="0.45" step="0.01" value="0.30">
    </div>
  </div>

  <canvas class="plot" id="s4-curves"></canvas>
  <div class="readout" id="s4-curves-out"></div>

  <p>Drag the base rate from 45% down to 1%. <strong>The ROC curve barely moves.</strong> The precision-recall
    curve collapses toward the floor.</p>

  <p>Neither curve is lying; they answer different questions. ROC plots the true positive rate against the false
    positive rate, and the false positive rate has the number of negatives in its denominator. Make the negative
    class ten times bigger and a fixed number of false alarms becomes a tenth of the rate — so the curve looks
    just as good while the practical experience of using the model gets ten times worse.</p>

  <p>Precision has the number of <em>flagged</em> firms in its denominator, and it therefore feels every one of
    those false alarms. That is why its baseline is the base rate itself: a model that scores at random achieves
    precision equal to the fraction of positives, so at 4% the dashed line sits at \(0.04\), and any honest claim
    of skill has to clear it.</p>

  <p>None of this means AUC is useless — it is a clean summary of ranking quality and it is what Zięba et al.
    report. It means AUC alone cannot tell you whether a model is <em>usable</em>. A model with AUC \(0.95\) at a
    1% base rate can still be wrong nineteen times out of twenty when it raises an alarm.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The auditor's metric</h2>

  <p>Now the practical question. Nobody investigates ten thousand firms. An audit team has capacity for a handful,
    so the only thing that matters is the top of the ranked list: <strong>of the \(k\) firms we flag as riskiest,
    how many are genuinely in trouble?</strong></p>

  <p>That is positive predictive value at top \(k\) — precision, computed at a budget rather than a threshold. It
    is the metric Walker used against Bao et al., and the one on which their model lost to a 2011 logit.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="s4-k">Investigation budget: top <span id="s4-klab">1%</span></label>
      <input type="range" id="s4-k" min="0.002" max="0.15" step="0.002" value="0.01">
    </div>
    <div class="ctl">
      <label for="s4-skill">Model quality</label>
      <select id="s4-skill">
        <option value="1.0" selected>Our fitted model</option>
        <option value="0.45">A weaker model</option>
        <option value="0">Random ranking</option>
      </select>
    </div>
  </div>

  <canvas class="plot" id="s4-ppv"></canvas>
  <div class="readout" id="s4-ppv-out"></div>

  <p>Two things are worth noticing. First, PPV falls as the budget grows — the model's confident cases are at the
    very top, and widening the net dilutes them. Any claim of the form "our model is X% precise" is meaningless
    without saying at what budget.</p>

  <p>Second, look at the ratio between the model's PPV and the base rate. That multiple — how many times better
    than blind selection — is the number an auditor actually cares about, and it is roughly what Bao et al. were
    claiming when they reported 4.5% against an unconditional fraud rate of about 0.7%. Walker's correction took
    that to 2.5%, against Dechow's logit at 2.63%. The lift did not vanish. It just stopped being the
    <em>largest</em> lift available, and the paper's contribution was that it was the largest.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Before you commit to a metric</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Your model reports 96% accuracy at a 4% bankruptcy rate. What should you conclude?</p>
    <button class="mc-opt" type="button" data-key="a">It is performing well.</button>
    <button class="mc-opt" type="button" data-key="b">It is overfitting.</button>
    <button class="mc-opt" type="button" data-key="c">Nothing at all — that is exactly the accuracy of predicting
      "no firm ever fails," so the number is consistent with a model that has learned nothing.</button>
    <div class="mc-fb" data-key="a">96% sounds excellent and means nothing here. Always compare accuracy to the
      majority-class rate before reading anything into it.</div>
    <div class="mc-fb" data-key="b">Possibly, but this number is no evidence either way — a model that has learned
      nothing scores the same.</div>
    <div class="mc-fb" data-key="c">Correct. The first thing to compute on any imbalanced problem is what the
      trivial model scores, so you know what "no skill" looks like.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">You lower the base rate from 30% to 3% and re-evaluate the same model. What happens?</p>
    <button class="mc-opt" type="button" data-key="a">Both AUC and average precision fall by about the same
      amount.</button>
    <button class="mc-opt" type="button" data-key="b">AUC stays roughly the same; average precision falls sharply,
      because its no-skill baseline is the base rate.</button>
    <button class="mc-opt" type="button" data-key="c">Both stay the same — they're threshold-free.</button>
    <div class="mc-fb" data-key="a">Only one of them is sensitive to class balance. Slide the base rate in the
      second widget and watch which.</div>
    <div class="mc-fb" data-key="b">Correct. The false positive rate is diluted by a growing negative class, while
      precision is not. This is the single most important thing to understand before quoting AUC on rare
      events.</div>
    <div class="mc-fb" data-key="c">Both are threshold-free, but that isn't the same as being insensitive to class
      balance.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Why must the evaluation metric be chosen before results are seen?</p>
    <button class="mc-opt" type="button" data-key="a">Because with several defensible metrics available, picking
      afterwards means picking the one your model happened to win on — and you will believe your own
      reasoning.</button>
    <button class="mc-opt" type="button" data-key="b">Because it is computationally cheaper.</button>
    <button class="mc-opt" type="button" data-key="c">Because journals require pre-registration.</button>
    <div class="mc-fb" data-key="a">Correct, and note the danger is not dishonesty. Everyone involved is sincere;
      the justification for the favourable metric will feel genuinely convincing after the fact. That is precisely
      why the commitment has to come first.</div>
    <div class="mc-fb" data-key="b">Cost is not the issue — you can compute all of them for nothing.</div>
    <div class="mc-fb" data-key="c">Most accounting and finance journals do not. The discipline has to be your
      own.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li><strong>Report the Session 3 baseline four ways</strong> — accuracy, AUC, average precision, and PPV among
      the top 1% — and write one sentence on how differently the same model reads depending on which you quote.</li>
    <li><strong>Commit.</strong> Which metric goes in Milestone 1, and what is the argument for it? Write it down
      before any machine learning model is fitted, and date it.</li>
    <li>Reopen Walker's Table 2 and reproduce, on paper, how 9 correct cases out of 360 predicted positives becomes
      2.5%. Then decide whether you find his correction persuasive — the authors did not.</li>
    <li>An auditor and a regulator want different things from this model. Which metric serves which, and can one
      model serve both?</li>
  </ol>
</div>

<script>
(function () {
  var L = LR499;

  /* ---------------- confusion matrix ---------------- */
  var thrIn = document.getElementById('s4-thr'),
      rateIn = document.getElementById('s4-rate'),
      canC = document.getElementById('s4-conf'),
      outC = document.getElementById('s4-conf-out');

  var cache = {};
  function scored(rate, seed) {
    var key = rate + ':' + seed;
    if (cache[key]) return cache[key];
    var firms = L.makeFirms(2000, rate, seed || 909);
    var X = firms.map(function (f) { return [1, f.ratio]; });
    var y = firms.map(function (f) { return f.y; });
    var fit = L.fit(X, y, { maxIter: 100 });
    var s = L.predict(X, fit.beta);
    cache[key] = { s: s, y: y, fit: fit };
    return cache[key];
  }

  function drawConf() {
    var thr = parseFloat(thrIn.value), rate = parseFloat(rateIn.value);
    var D = scored(rate);
    var c = L.confusion(D.s, D.y, thr);
    var trivial = D.y.filter(function (v) { return v === 0; }).length / D.y.length;

    var d = M411.hidpi(canC, 250), ctx = d.ctx, W = d.w, H = d.h;
    ctx.clearRect(0, 0, W, H);

    var bx = 74, by = 46, cw = 116, ch = 56;
    var cells = [
      { r: 0, c: 0, n: 'true pos', v: c.tp, col: '#008552' },
      { r: 0, c: 1, n: 'false neg', v: c.fn, col: '#d9534f' },
      { r: 1, c: 0, n: 'false pos', v: c.fp, col: '#F36E24' },
      { r: 1, c: 1, n: 'true neg', v: c.tn, col: '#9aa0a6' }
    ];
    cells.forEach(function (q) {
      var x = bx + q.c * cw, y = by + q.r * ch;
      ctx.fillStyle = q.col; ctx.globalAlpha = 0.16;
      ctx.fillRect(x, y, cw - 6, ch - 6);
      ctx.globalAlpha = 1;
      ctx.strokeStyle = q.col; ctx.lineWidth = 1.4; ctx.strokeRect(x, y, cw - 6, ch - 6);
      ctx.fillStyle = q.col; ctx.font = 'bold 17px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(String(q.v), x + (cw - 6) / 2, y + 26);
      ctx.font = '10px sans-serif'; ctx.fillStyle = M411.colors.muted;
      ctx.fillText(q.n, x + (cw - 6) / 2, y + 42);
    });
    ctx.fillStyle = '#333'; ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('actually', bx + cw - 3, by - 26);
    ctx.fillText('bankrupt', bx + (cw - 6) / 2, by - 12);
    ctx.fillText('solvent', bx + cw + (cw - 6) / 2, by - 12);
    ctx.textAlign = 'right';
    ctx.fillText('flagged', bx - 10, by + 30);
    ctx.fillText('not flagged', bx - 10, by + ch + 30);

    var mx = bx + 2 * cw + 26;
    [['accuracy', c.accuracy, c.accuracy > trivial ? '#008552' : '#d9534f'],
     ['precision', c.precision, '#F36E24'],
     ['recall', c.recall, '#009CDE']].forEach(function (m, i) {
      var y = by + 6 + i * 34;
      ctx.textAlign = 'left'; ctx.font = '11px sans-serif'; ctx.fillStyle = M411.colors.muted;
      ctx.fillText(m[0], mx, y);
      ctx.font = 'bold 15px sans-serif'; ctx.fillStyle = m[2];
      ctx.fillText(isFinite(m[1]) ? L.pct(m[1], 1) : '—', mx, y + 17);
    });

    ctx.textAlign = 'left'; ctx.font = '10px sans-serif'; ctx.fillStyle = M411.colors.muted;
    ctx.fillText('"flag nobody" scores ' + L.pct(trivial, 1) + ' accuracy', bx, H - 12);

    outC.innerHTML =
      '<p>Threshold ' + thr.toFixed(3) + ' &middot; flagged ' + (c.tp + c.fp) + ' of ' + D.y.length + ' firms.</p>' +
      '<p>' + (c.tp + c.fp === 0
        ? '<strong style="color:#d9534f">The model flags nobody at this threshold</strong> and is ' +
          L.pct(c.accuracy, 1) + ' accurate for it. Precision has no value at all here — there are no predictions to be right about.'
        : (c.accuracy <= trivial
          ? '<strong style="color:#d9534f">Accuracy is at or below the do-nothing baseline of ' + L.pct(trivial, 1) +
            '.</strong> Yet the model is now catching ' + c.tp + ' real failures, which the do-nothing model catches none of. ' +
            'Accuracy is actively misleading you here.'
          : 'Catching ' + c.tp + ' of ' + (c.tp + c.fn) + ' real failures at the cost of ' + c.fp +
            ' false alarms.')) + '</p>';
    M411.typeset(outC);
  }
  thrIn.addEventListener('input', drawConf);
  rateIn.addEventListener('change', drawConf);

  /* ---------------- ROC vs PR ---------------- */
  var baseIn = document.getElementById('s4-base'),
      canR = document.getElementById('s4-curves'),
      outR = document.getElementById('s4-curves-out');

  function drawCurves() {
    var rate = parseFloat(baseIn.value);
    var D = scored(Math.round(rate * 100) / 100, 1717);
    var roc = L.rocCurve(D.s, D.y), pr = L.prCurve(D.s, D.y);

    var d = M411.hidpi(canR, 340), ctx = d.ctx, W = d.w, H = d.h;
    ctx.clearRect(0, 0, W, H);
    var pad = 44, gap = 40;
    // Square panels, sized by whichever dimension binds, then centred as a pair
    // so a wide viewport doesn't leave them stranded at the left edge.
    var side = Math.min((W - gap - 2 * pad) / 2, H - 26 - 40);
    var ox0 = (W - (2 * side + gap)) / 2;

    function panel(ox, title, pts, diag, diagLabel, color, area, areaLabel) {
      var oy = 26;
      ctx.strokeStyle = '#e4e6ea'; ctx.lineWidth = 1;
      ctx.strokeRect(ox, oy, side, side);
      [0.25, 0.5, 0.75].forEach(function (t) {
        ctx.beginPath(); ctx.moveTo(ox, oy + t * side); ctx.lineTo(ox + side, oy + t * side); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(ox + t * side, oy); ctx.lineTo(ox + t * side, oy + side); ctx.stroke();
      });

      ctx.strokeStyle = '#b9bec5'; ctx.lineWidth = 1.4; ctx.setLineDash([5, 4]);
      ctx.beginPath();
      if (diag === 'diag') { ctx.moveTo(ox, oy + side); ctx.lineTo(ox + side, oy); }
      else { ctx.moveTo(ox, oy + (1 - diag) * side); ctx.lineTo(ox + side, oy + (1 - diag) * side); }
      ctx.stroke(); ctx.setLineDash([]);

      ctx.strokeStyle = color; ctx.lineWidth = 2.4;
      ctx.beginPath();
      pts.forEach(function (p, i) {
        var xx = ox + p.x * side, yy = oy + (1 - p.y) * side;
        if (i === 0) ctx.moveTo(xx, yy); else ctx.lineTo(xx, yy);
      });
      ctx.stroke();

      ctx.fillStyle = '#333'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText(title, ox, oy - 10);
      ctx.fillStyle = color; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(areaLabel + ' ' + L.fmt(area, 3), ox + side, oy + side + 20);
      ctx.fillStyle = M411.colors.muted; ctx.font = '10px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText(diagLabel, ox, oy + side + 20);
    }

    panel(ox0, 'ROC — TPR vs FPR', roc.pts, 'diag', 'no skill = diagonal',
      '#009CDE', roc.auc, 'AUC');
    panel(ox0 + side + gap, 'Precision–Recall', pr.pts, pr.baseline,
      'no skill = ' + L.fmt(pr.baseline, 3), '#F36E24', pr.ap, 'AP');

    var nPos = D.y.reduce(function (a, b) { return a + b; }, 0);
    outR.innerHTML =
      '<p>Base rate ' + L.pct(pr.baseline, 1) + ' (' + nPos + ' bankruptcies in ' + D.y.length + ' firms). ' +
      'AUC ' + L.fmt(roc.auc, 3) + ', average precision ' + L.fmt(pr.ap, 3) + '.</p>' +
      '<p>' + (pr.baseline < 0.08
        ? '<strong>The two panels now tell opposite stories.</strong> AUC still looks respectable while average ' +
          'precision has fallen to ' + L.fmt(pr.ap, 3) + '. If you report only the left panel, a reader has no way ' +
          'to know that flagging a firm is mostly a false alarm.'
        : 'At this base rate the two panels roughly agree. Drag the rate below about 8% and watch them part company.') +
      '</p>';
    M411.typeset(outR);
  }
  baseIn.addEventListener('input', drawCurves);

  /* ---------------- PPV at top k ---------------- */
  var kIn = document.getElementById('s4-k'),
      klab = document.getElementById('s4-klab'),
      skillIn = document.getElementById('s4-skill'),
      canP = document.getElementById('s4-ppv'),
      outP = document.getElementById('s4-ppv-out');

  var noise = (function () { var r = L.rng(4242), a = []; for (var i = 0; i < 2000; i++) a.push(r()); return a; })();

  function drawPPV() {
    var frac = parseFloat(kIn.value), skill = parseFloat(skillIn.value);
    klab.textContent = (100 * frac).toFixed(1) + '%';
    var D = scored(0.04);
    // blend the model's ranking toward pure noise to weaken it
    var s = D.s.map(function (v, i) { return skill * v + (1 - skill) * noise[i] * 0.12; });

    var n = D.y.length, k = Math.max(1, Math.round(frac * n));
    var res = L.ppvAtTopK(s, D.y, k);
    var base = D.y.reduce(function (a, b) { return a + b; }, 0) / n;

    var d = M411.hidpi(canP, 270), ctx = d.ctx, W = d.w, H = d.h;
    ctx.clearRect(0, 0, W, H);
    var padL = 54, padR = 22, padT = 22, padB = 42;
    var KMAX = 0.15;
    function PX(v) { return padL + (v / KMAX) * (W - padL - padR); }
    var YMAX = 0.5;
    function PY(v) { return padT + (1 - Math.min(v, YMAX) / YMAX) * (H - padT - padB); }

    ctx.strokeStyle = '#e4e6ea'; ctx.lineWidth = 1;
    [0, 0.125, 0.25, 0.375, 0.5].forEach(function (v) {
      ctx.beginPath(); ctx.moveTo(padL, PY(v)); ctx.lineTo(W - padR, PY(v)); ctx.stroke();
      ctx.fillStyle = M411.colors.muted; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(L.pct(v, 0), padL - 6, PY(v) + 3);
    });

    // base-rate reference
    ctx.strokeStyle = '#b9bec5'; ctx.lineWidth = 1.6; ctx.setLineDash([5, 4]);
    ctx.beginPath(); ctx.moveTo(padL, PY(base)); ctx.lineTo(W - padR, PY(base)); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = M411.colors.muted; ctx.font = '10px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('base rate ' + L.pct(base, 1) + ' — pick firms at random and this is what you get',
      padL + 6, PY(base) - 6);

    ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2.4;
    ctx.beginPath();
    for (var j = 1; j <= 120; j++) {
      var fr = KMAX * j / 120;
      var kk = Math.max(1, Math.round(fr * n));
      var p = L.ppvAtTopK(s, D.y, kk).ppv;
      if (j === 1) ctx.moveTo(PX(fr), PY(p)); else ctx.lineTo(PX(fr), PY(p));
    }
    ctx.stroke();

    ctx.fillStyle = M411.colors.check;
    ctx.beginPath(); ctx.arc(PX(frac), PY(res.ppv), 6, 0, 2 * Math.PI); ctx.fill();

    ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('investigation budget, as a share of all firms', (padL + W - padR) / 2, H - 10);

    var lift = base > 0 ? res.ppv / base : NaN;
    outP.innerHTML =
      '<p>Investigate the top <strong>' + res.k + '</strong> firms of ' + n + ' (' + (100 * frac).toFixed(1) +
      '%). <strong>' + res.hits + '</strong> of them actually fail &mdash; a PPV of <strong>' +
      L.pct(res.ppv, 1) + '</strong>.</p>' +
      '<p>Picking ' + res.k + ' firms at random would have caught about ' + (base * res.k).toFixed(1) +
      '. The model is <strong>' + L.fmt(lift, 2) + '×</strong> better than blind selection at this budget.</p>' +
      '<p>' + (skill === 0
        ? '<strong style="color:#d9534f">With a random ranking the curve sits on the base-rate line</strong>, which is exactly what "no skill" means here.'
        : 'Widen the budget and PPV drifts down toward the base rate: the further down the ranked list you go, the more ordinary the firms become.') +
      '</p>';
    M411.typeset(outP);
  }
  kIn.addEventListener('input', drawPPV);
  skillIn.addEventListener('change', drawPPV);

  M411.onResize(function () { drawConf(); drawCurves(); drawPPV(); });
  drawConf(); drawCurves(); drawPPV();
})();
</script>
