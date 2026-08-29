---
layout: day
title: "MATH 411 Day 10: The Basel Problem and Euler's Formula"
day: 10
chapter_number: 3
chapter: "Calculus in the 17th and 18th Centuries"
day_title: "The Basel Problem and Euler's Formula"
blurb: "Euler treats \\(\\frac{\\sin x}{x}\\) as a polynomial of infinite degree, factors it over its infinitely many roots, and reads off a sum nobody else could evaluate. He was 28, and he was right."
reading: "Problems 3.2.17 and 3.2.18"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The sum Euler was chasing</h2>

  <p>The Basel problem asks for a <em>closed form</em> for</p>

  \[ \sum_{n=1}^{\infty}\frac{1}{n^2} = 1 + \frac14 + \frac19 + \frac{1}{16} + \cdots \]

  <p>Everyone already knew this converged &mdash; the terms shrink fast enough that the partial sums plainly settle
    down. What nobody could do was say <em>what number</em> they settled on. The problem had been open for ninety
    years, and had defeated Jakob Bernoulli, who publicly asked for help.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d10-basel">Terms (log scale)</label>
      <input type="range" id="d10-basel" min="0" max="6" step="0.05" value="2">
    </div>
  </div>

  <div class="readout" id="d10-basel-out"></div>

  <p>Watch what makes this so frustrating. The partial sums converge, and they converge to \(1.6449\ldots\) &mdash;
    a number with no obvious identity. You could compute a thousand digits of it and still not recognise it. There is
    no route from the decimal expansion to the answer.</p>

  <p>Euler's answer, when it came, was \(\frac{\pi^2}{6}\). A sum over the reciprocals of perfect squares &mdash; not a
    circle in sight &mdash; producing \(\pi^2\). The result made him famous across Europe at twenty-eight.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Euler's audacity: a function factored over its roots</h2>

  <p>Here is the move. A polynomial with roots \(r_1, \ldots, r_n\) and nonzero constant term factors as</p>

  \[ p(x) = a_0\left(1 - \frac{x}{r_1}\right)\cdots\left(1 - \frac{x}{r_n}\right) \]

  <p>Euler applied this to \(\frac{\sin x}{x}\) &mdash; which is not a polynomial &mdash; using its roots \(\pm\pi,
    \pm2\pi, \pm3\pi, \ldots\) and pairing each root with its negative. Watch the resulting infinite product against
    the actual function.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d10-k">Factors in the product</label>
      <input type="range" id="d10-k" min="1" max="60" step="1" value="3">
    </div>
  </div>

  <canvas class="plot" id="d10-prod"></canvas>
  <div class="readout" id="d10-prod-out"></div>

  <p>With one factor you have a parabola; with three, something that already tracks \(\frac{\sin x}{x}\) closely near
    the origin; with sixty, a curve you can barely distinguish from it across several periods. Each new factor installs
    another pair of roots and pulls the product into line a little further out.</p>

  <p>It works. That is the uncomfortable part &mdash; Euler's step has no justification available in 1735, and the
    picture above shows it landing exactly on target anyway.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Where the Basel argument spends money it doesn't have</h2>

  <p>Your reading is unusually explicit about this: part (d) of the problem begins "<em>Assuming that the result in part
      (c) holds for an infinite polynomial</em>." That word is doing a great deal of work.</p>

  <p><strong>Click the step that is an assumption rather than a consequence.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">\(\frac{\sin x}{x}\) has a power series \(1 - \frac{x^2}{3!} +
        \frac{x^4}{5!} - \cdots\), whose roots are \(\pm\pi, \pm2\pi, \pm3\pi, \ldots\).</button>
      <button class="fline" type="button">A polynomial \(p\) with roots \(r_1,\ldots,r_n\) and \(a_0 = p(0) \neq 0\)
        factors as \(a_0\prod\left(1 - \frac{x}{r_k}\right)\).</button>
      <button class="fline" type="button">Since a power series is an infinite polynomial, the same factorisation
        applies, giving \(\prod_{k=1}^{\infty}\left(1 - \frac{x^2}{k^2\pi^2}\right)\).</button>
      <button class="fline" type="button">Expanding that product, the coefficient of \(x^2\) is
        \(-\sum_{k=1}^{\infty}\frac{1}{k^2\pi^2}\).</button>
      <button class="fline" type="button">Matching it against the \(-\frac{1}{3!}\) from the series gives
        \(\sum\frac{1}{k^2} = \frac{\pi^2}{6}\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Fine.</strong> The series follows from the series for \(\sin x\), and the roots are exactly the
        nonzero roots of \(\sin x\) &mdash; the \(x\) in the denominator having removed the one at the origin.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>A genuine theorem about polynomials.</strong> Every polynomial of degree \(n\) has exactly \(n\) roots
        counted with multiplicity, and factors over them. Finite, provable, uncontroversial &mdash; and part (c) of
        your problem asks you to prove it.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>That's the assumption, and your reading flags it in the problem statement itself.</strong></p>
      <p>The phrase "a power series is an infinite polynomial" is a picture, not a theorem, and here it is being asked
        to carry a factorisation theorem across from the finite case. What breaks is this: the polynomial result
        depends on <em>degree</em>. A degree-\(n\) polynomial has exactly \(n\) roots, so listing them accounts for the
        whole function. A power series has no degree. Knowing all its roots does not tell you that you have accounted
        for everything.</p>
      <p>Here is the sharpest way to see the gap. The function \(e^{x}\cdot\frac{\sin x}{x}\) has <em>exactly the same
          roots</em> as \(\frac{\sin x}{x}\) &mdash; the exponential is never zero &mdash; and yet it is a completely
        different function. So roots alone cannot determine the factorisation. Any correct version of this argument
        must rule out such a hidden factor, and nothing in Euler's reasoning does.</p>
      <p>Euler's conclusion is nonetheless correct. Making the argument valid took another century and became the
        Weierstrass factorisation theorem, later sharpened by Hadamard. Euler had no access to any of it. He checked
        his answer numerically against the partial sums, found agreement to several decimals, and published.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Correct algebra, once you grant line (3).</strong> Multiplying out, an \(x^2\) can be taken from
        exactly one factor at a time, so the coefficient is the sum of the individual \(-\frac{1}{k^2\pi^2}\).</p>
      <p>Although &mdash; notice that "multiplying out an infinite product and collecting a coefficient" is itself an
        infinite rearrangement, of the kind Day 7 flagged and Day 14 will show can go badly wrong. There is more than
        one debt on this page.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>Just matching coefficients &mdash; the final, easy step.</strong> Two expressions for the same
        function must have the same \(x^2\) coefficient, and the arithmetic delivers \(\frac{\pi^2}{6}\). The
        conclusion is true and the numerical check in the first activity confirms it. Everything rode on line (3).</p>
    </div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Euler's formula, watched from the complex plane</h2>

  <p>The other half of today is \(e^{i\theta} = \cos\theta + i\sin\theta\) &mdash; an identity linking the exponential,
    which grows, to the trigonometric functions, which oscillate. Feeding an imaginary number into a series built for
    real ones has no business producing anything sensible.</p>

  <p>Here are the partial sums of \(\sum \frac{(i\theta)^n}{n!}\) plotted as points in the plane, with the unit circle
    for reference.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d10-theta">\(\theta\)</label>
      <input type="range" id="d10-theta" min="0" max="6.28" step="0.02" value="2.1">
    </div>
    <div class="ctl">
      <label for="d10-en">Terms</label>
      <input type="range" id="d10-en" min="1" max="25" step="1" value="6">
    </div>
  </div>

  <canvas class="plot" id="d10-euler"></canvas>
  <div class="readout" id="d10-euler-out"></div>

  <p>The partial sums spiral in and land on the unit circle at angle \(\theta\). Not near it &mdash; on it. A series
    with no circles anywhere in its construction, fed an imaginary argument, produces rotation.</p>

  <p>That is why this identity does so much work. Every trigonometric identity your problem set asks for &mdash;
    addition formulas, double angle, triple angle, and the general \(n\theta\) case &mdash; becomes a consequence of
    the exponential rule \(e^{a}e^{b} = e^{a+b}\), which is Property 2 from Day 7. A pile of separately-memorised
    formulas collapses into one fact about multiplication.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on Euler's methods</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">What exactly was open about the Basel problem before Euler?</p>
    <button class="mc-opt" type="button" data-key="a">Whether \(\sum 1/n^2\) converges.</button>
    <button class="mc-opt" type="button" data-key="b">What its value is in closed form &mdash; convergence was already
      known.</button>
    <button class="mc-opt" type="button" data-key="c">Whether the value is irrational.</button>
    <div class="mc-fb" data-key="a">Your reading is precise about this: "Other mathematicians knew that the series
      converged, but Euler was the first to find its exact value."</div>
    <div class="mc-fb" data-key="b">Correct, and the distinction is worth holding on to. Knowing a limit exists and
      knowing what it is are separate problems, often of wildly different difficulty. You met the same split on Day 14's
      alternating harmonic series: the nesting proves convergence but says nothing about \(\ln 2\).</div>
    <div class="mc-fb" data-key="c">Irrationality wasn't the question &mdash; though it follows immediately from the
      answer, since \(\pi^2\) is irrational.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Why can't Euler's factorisation argument be justified by the polynomial theorem alone?</p>
    <button class="mc-opt" type="button" data-key="a">Because \(\frac{\sin x}{x}\) is undefined at \(0\).</button>
    <button class="mc-opt" type="button" data-key="b">Because the roots are irrational.</button>
    <button class="mc-opt" type="button" data-key="c">Because the polynomial theorem relies on degree, and a power
      series has none &mdash; so knowing every root doesn't account for the whole function.</button>
    <div class="mc-fb" data-key="a">The series \(1 - \frac{x^2}{3!} + \cdots\) is perfectly well defined at \(0\), where
      it equals \(1\). That's the standard way to patch the removable hole, and it isn't the problem.</div>
    <div class="mc-fb" data-key="b">Irrational roots are no obstacle; the polynomial factorisation theorem doesn't care
      what kind of numbers the roots are.</div>
    <div class="mc-fb" data-key="c">Correct. Degree is what makes the finite theorem work: \(n\) roots for degree \(n\)
      means the list is complete. Without it, \(e^x \frac{\sin x}{x}\) has the same roots and is a different function
      &mdash; so roots cannot determine the factorisation on their own.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Euler's formula makes the trigonometric addition formulas follow from which fact?</p>
    <button class="mc-opt" type="button" data-key="a">\(e^{a}e^{b} = e^{a+b}\).</button>
    <button class="mc-opt" type="button" data-key="b">\(\sin^2\theta + \cos^2\theta = 1\).</button>
    <button class="mc-opt" type="button" data-key="c">The periodicity of sine and cosine.</button>
    <div class="mc-fb" data-key="a">Correct, and it's Property 2 from Day 7 &mdash; the one whose proof rearranged
      infinitely many terms. Expand \(e^{i(\alpha+\beta)} = e^{i\alpha}e^{i\beta}\) both ways and match real and
      imaginary parts, and both addition formulas fall out at once.</div>
    <div class="mc-fb" data-key="b">A consequence of Euler's formula (take \(|e^{i\theta}| = 1\)), not the engine behind
      the addition formulas.</div>
    <div class="mc-fb" data-key="c">Also a consequence, not the source.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Given that Euler's Basel argument has an unjustified step, what is the right attitude to his
      result?</p>
    <button class="mc-opt" type="button" data-key="a">The result is doubtful until reproved.</button>
    <button class="mc-opt" type="button" data-key="b">The result is true and now provable; the 1735 argument was a
      brilliant conjecture supported by numerical evidence.</button>
    <button class="mc-opt" type="button" data-key="c">The result is false and the numerical agreement is a
      coincidence.</button>
    <div class="mc-fb" data-key="a">It isn't doubtful &mdash; \(\frac{\pi^2}{6}\) has been proved many times over by
      methods that owe nothing to infinite products. What was missing was warrant, not truth.</div>
    <div class="mc-fb" data-key="b">Correct, and it's the same posture as Newton's binomial leap on Day 9. Euler's
      method was ahead of the available foundations; the foundations caught up (Weierstrass, Hadamard) and vindicated
      him. Recognising an argument as unjustified is not the same as rejecting its conclusion.</div>
    <div class="mc-fb" data-key="c">Set the Basel widget to a large number of terms and watch the partial sums converge
      on \(1.6449\ldots = \pi^2/6\). No coincidence.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>\(e^x\frac{\sin x}{x}\) has exactly the roots of \(\frac{\sin x}{x}\) and is a different function. What extra
      condition on a power series might rule out such an impostor? (You are inventing the hypothesis of a real theorem
      here &mdash; guess boldly.)</li>
    <li>Euler had numerical agreement to several decimals. Newton had a series that squared correctly. Both took that as
      grounds for belief. Is numerical evidence ever <em>sufficient</em> in mathematics? What is it good for?</li>
    <li>The Basel sum involves no circles, yet the answer contains \(\pi^2\). Where do you think the \(\pi\) enters?
      Trace it through the argument and find the exact step that introduces it.</li>
    <li>Euler's formula lets one identity replace a dozen trigonometric ones. Is that a discovery about trigonometry, or
      about notation? What is the difference?</li>
  </ol>
</div>

<script>
  (function () {
    var PI2_6 = Math.PI * Math.PI / 6;

    /* ---------------- Basel partial sums ---------------- */
    var bIn = document.getElementById('d10-basel'), bOut = document.getElementById('d10-basel-out');

    function drawBasel() {
      var N = Math.round(Math.pow(10, +bIn.value));
      var s = 0;
      for (var k = 1; k <= N; k++) s += 1 / (k * k);
      var err = PI2_6 - s;
      bOut.innerHTML =
        '<p>With <strong>' + N.toLocaleString() + '</strong> term' + (N === 1 ? '' : 's') + ':</p>' +
        '<p class="big">\\( \\sum_{n=1}^{' + N + '}\\frac{1}{n^2} = ' + s.toFixed(9) + ' \\)</p>' +
        '<p>Euler\'s answer is \\(\\frac{\\pi^2}{6} = ' + PI2_6.toFixed(9) + '\\); the gap is \\(' +
        err.toExponential(3) + '\\), which shrinks like \\(\\frac1N\\).</p>' +
        '<p>Note that this converges far faster than Gregory\'s series for \\(\\pi\\) from Day 8 &mdash; and it was ' +
        'still useless for <em>identifying</em> the limit. No amount of decimal expansion suggests ' +
        '\\(\\frac{\\pi^2}{6}\\).</p>';
      M411.typeset(bOut);
    }
    bIn.addEventListener('input', drawBasel);

    /* ---------------- sin(x)/x as an infinite product ---------------- */
    var kIn = document.getElementById('d10-k'),
      pCan = document.getElementById('d10-prod'),
      pOut = document.getElementById('d10-prod-out');

    function sinc(x) { return Math.abs(x) < 1e-9 ? 1 : Math.sin(x) / x; }
    function product(x, K) {
      var p = 1;
      for (var k = 1; k <= K; k++) p *= (1 - (x * x) / (k * k * Math.PI * Math.PI));
      return p;
    }

    function drawProd() {
      var K = +kIn.value;
      var d = M411.hidpi(pCan, 280), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      var padL = 44, padR = 20, padT = 18, padB = 30;
      var xlo = -11, xhi = 11, ylo = -0.6, yhi = 1.25;
      function X(x) { return padL + (x - xlo) / (xhi - xlo) * (W - padL - padR); }
      function Y(y) { return padT + (yhi - y) / (yhi - ylo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var m = -3; m <= 3; m++) {
        if (!m) continue;
        ctx.beginPath(); ctx.moveTo(X(m * Math.PI), padT); ctx.lineTo(X(m * Math.PI), H - padB); ctx.stroke();
      }
      ctx.strokeStyle = '#999'; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke();

      function plot(f, color, width) {
        ctx.strokeStyle = color; ctx.lineWidth = width; ctx.beginPath();
        var started = false;
        for (var i = 0; i <= 700; i++) {
          var x = xlo + (xhi - xlo) * i / 700, y = f(x);
          if (!isFinite(y) || y < ylo - 3 || y > yhi + 3) { started = false; continue; }
          started ? ctx.lineTo(X(x), Y(y)) : (ctx.moveTo(X(x), Y(y)), started = true);
        }
        ctx.stroke();
      }

      plot(sinc, '#c9ccd1', 3.5);
      plot(function (x) { return product(x, K); }, M411.colors.explore, 2.2);

      // mark the roots currently installed
      for (var k = 1; k <= Math.min(K, 3); k++) {
        [-1, 1].forEach(function (sgn) {
          var xr = sgn * k * Math.PI;
          if (xr < xlo || xr > xhi) return;
          ctx.fillStyle = M411.colors.check;
          ctx.beginPath(); ctx.arc(X(xr), Y(0), 4, 0, 2 * Math.PI); ctx.fill();
        });
      }

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = '#9aa0a6'; ctx.fillText('sin(x)/x', padL + 6, padT + 14);
      ctx.fillStyle = M411.colors.explore; ctx.fillText(K + ' factor' + (K === 1 ? '' : 's'), padL + 6, padT + 32);

      var samples = [1, 2, 4].map(function (x) {
        return '\\(x=' + x + '\\): product \\(= ' + product(x, K).toFixed(6) +
          '\\) vs \\(\\frac{\\sin x}{x} = ' + sinc(x).toFixed(6) + '\\)';
      });
      pOut.innerHTML = '<p>' + samples.join('<br>') + '</p>' +
        '<p>The product installs roots at \\(\\pm\\pi, \\pm2\\pi, \\ldots, \\pm' + K + '\\pi\\) &mdash; and ' +
        'nothing else. It is built from the roots alone, and it is landing on the right function.</p>';
      M411.typeset(pOut);
    }
    kIn.addEventListener('input', drawProd);

    /* ---------------- Euler's formula ---------------- */
    var thIn = document.getElementById('d10-theta'),
      enIn = document.getElementById('d10-en'),
      eCan = document.getElementById('d10-euler'),
      eOut = document.getElementById('d10-euler-out');

    function drawEuler() {
      var th = +thIn.value, N = +enIn.value;
      var d = M411.hidpi(eCan, 320), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      var cx = W / 2, cy = H / 2, R = Math.min(W, H) / 2 - 42;
      function PX(re) { return cx + re * R; }
      function PY(im) { return cy - im * R; }

      // axes and unit circle
      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(20, cy); ctx.lineTo(W - 20, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, 12); ctx.lineTo(cx, H - 12); ctx.stroke();
      ctx.strokeStyle = '#c9ccd1'; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, 2 * Math.PI); ctx.stroke();

      // partial sums of sum (i*theta)^n / n!
      var re = 0, im = 0, tr = 1, ti = 0, pts = [];
      for (var n = 0; n < N; n++) {
        re += tr; im += ti;
        pts.push([re, im]);
        // multiply running term by (i*theta)/(n+1)
        var nr = (tr * 0 - ti * th) / (n + 1);
        var ni = (tr * th + ti * 0) / (n + 1);
        tr = nr; ti = ni;
      }

      ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = 1.6;
      ctx.beginPath();
      pts.forEach(function (p, i) { i ? ctx.lineTo(PX(p[0]), PY(p[1])) : ctx.moveTo(PX(p[0]), PY(p[1])); });
      ctx.stroke();
      pts.forEach(function (p, i) {
        ctx.fillStyle = i === pts.length - 1 ? M411.colors.explore : 'rgba(0,156,222,0.45)';
        ctx.beginPath(); ctx.arc(PX(p[0]), PY(p[1]), i === pts.length - 1 ? 5.5 : 3, 0, 2 * Math.PI); ctx.fill();
      });

      // the target
      var tx = Math.cos(th), ty = Math.sin(th);
      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(PX(tx), PY(ty)); ctx.stroke();
      ctx.fillStyle = M411.colors.check;
      ctx.beginPath(); ctx.arc(PX(tx), PY(ty), 6, 0, 2 * Math.PI); ctx.fill();

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = M411.colors.check;
      ctx.fillText('cos θ + i sin θ', PX(tx) + 10, PY(ty) - 8);
      ctx.fillStyle = M411.colors.explore;
      ctx.fillText('partial sums', 16, 20);

      var last = pts[pts.length - 1];
      var err = Math.hypot(last[0] - tx, last[1] - ty);
      eOut.innerHTML =
        '<p>\\(\\theta = ' + th.toFixed(2) + '\\), ' + N + ' term' + (N === 1 ? '' : 's') + ':</p>' +
        '<p>partial sum \\(= ' + last[0].toFixed(6) + (last[1] < 0 ? ' - ' : ' + ') + Math.abs(last[1]).toFixed(6) +
        'i\\)<br>\\(\\cos\\theta + i\\sin\\theta = ' + tx.toFixed(6) + (ty < 0 ? ' - ' : ' + ') +
        Math.abs(ty).toFixed(6) + 'i\\)</p>' +
        '<p class="big">distance \\(= ' + err.toExponential(3) + '\\)</p>' +
        '<p>The early partial sums swing well outside the circle before the factorials rein them in &mdash; the ' +
        'same crossover you saw on Day 7, now happening in two dimensions.</p>';
      M411.typeset(eOut);
    }
    thIn.addEventListener('input', drawEuler);
    enIn.addEventListener('input', drawEuler);

    M411.onResize(function () { drawProd(); drawEuler(); });
    drawBasel();
    drawProd();
    drawEuler();
  })();
</script>
