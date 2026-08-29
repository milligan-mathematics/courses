---
layout: day
title: "MATH 411 Day 8: Power Series and Differential Equations"
day: 8
chapter_number: 3
chapter: "Calculus in the 17th and 18th Centuries"
day_title: "Power Series and Differential Equations"
blurb: "A series finally answers a question left hanging since Day 3: what could \\(4^{\\sqrt2}\\) possibly mean? Along the way, series make an unintegrable integral computable."
reading: "Section 3.2, Definition 3.2.7 through the setup of Newton's binomial expansion"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>What \(4^{\sqrt2}\) means</h2>

  <p>On Day 3 your reading asked what the symbol \(4^{\sqrt2}\) could possibly denote. Exponentiation by an integer is
    repeated multiplication; by a rational \(m/n\) it is root-taking. Neither survives contact with an irrational
    exponent. How do you multiply \(\sqrt2\) copies of \(4\) together?</p>

  <p>The series answers it. Having defined \(E(x) = \sum \frac{x^n}{n!}\) and shown \(E(r) = e^r\) for rational \(r\),
    we simply <em>define</em></p>

  \[ 4^{\sqrt2} = e^{\sqrt2 \log 4} = \sum_{n=0}^{\infty}\frac{(\sqrt2 \log 4)^n}{n!} \]

  <p>For that to be a legitimate definition rather than an arbitrary one, it has to agree with what we already believe
    about rational exponents. Watch it do so: the blue dots are \(4^r\) for rationals \(r\) closing in on \(\sqrt2\),
    computed the old way, as roots.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d8-terms">Terms in the series</label>
      <input type="range" id="d8-terms" min="1" max="40" step="1" value="10">
    </div>
  </div>

  <div id="d8-approx"></div>
  <div class="readout" id="d8-out"></div>

  <p>Your reading anticipates the obvious objection &mdash; that this is an absurdly long way round to define something
    as simple as raising to a power &mdash; and rejects it flatly:</p>

  <blockquote class="source">
    Exponentiation only <em>seems</em> simple because we've always thought of it as repeated multiplication (in
    \(\mathbb{Z}\)) or root-taking (in \(\mathbb{Q}\)). When we expand the operation to the real numbers this simply
    can't be the way we interpret something like \(4^{\sqrt2}\).
  </blockquote>

  <p>This is a pattern worth naming, because the course will repeat it. An operation defined on a small set is extended
    to a larger one; the original definition cannot survive the extension; so we find a <em>different</em> description
    that agrees with the old one where both apply, and take that as the new definition. The table above is the
    "agrees where both apply" part, and it is the part that makes the extension honest rather than arbitrary.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Integrating a function with no antiderivative</h2>

  <p>The bell curve \(f(x) = \frac{1}{\sqrt{2\pi}}e^{-x^2/2}\) governs most of statistics, and to get probabilities out
    of it you must integrate it. There is no elementary antiderivative &mdash; no combination of polynomials,
    exponentials, logarithms and trigonometric functions differentiates to it. Calculus as you learned it simply
    cannot do this integral.</p>

  <p>Series can. Substitute \(-x^2/2\) into the series for \(e^x\), integrate term by term, and out drops</p>

  \[ \int_0^b \frac{1}{\sqrt{2\pi}}e^{-x^2/2}\,\mathrm{d}x =
  \frac{1}{\sqrt{2\pi}}\sum_{n=0}^{\infty}\frac{(-1)^n b^{2n+1}}{n!\,2^n(2n+1)} \]

  <div class="ctl-row">
    <div class="ctl">
      <label for="d8-b">Upper limit \(b\)</label>
      <input type="range" id="d8-b" min="0.1" max="4" step="0.1" value="1">
    </div>
    <div class="ctl">
      <label for="d8-bn">Terms</label>
      <input type="range" id="d8-bn" min="1" max="40" step="1" value="8">
    </div>
  </div>

  <canvas class="plot" id="d8-bell"></canvas>
  <div class="readout" id="d8-bell-out"></div>

  <p>This is why power series became "of paramount importance in the 1700's," as your reading puts it. They turned
    functions that could not be integrated into functions that could be computed to any accuracy you like &mdash; and
    the shaded area above is a probability someone actually needed.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>The step in that integration nobody mentioned</h2>

  <p>Go back and look at how that bell-curve integral was actually computed. Written out, the chain of equalities
    runs:</p>

  <p><strong>Click the step that is not a rule of calculus.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Start from \(e^u = \sum_{n=0}^{\infty}\frac{u^n}{n!}\), valid for every real
        \(u\).</button>
      <button class="fline" type="button">Substitute \(u = -x^2/2\) to get \(e^{-x^2/2} =
        \sum_{n=0}^{\infty}\frac{1}{n!}\left(\frac{-x^2}{2}\right)^n\).</button>
      <button class="fline" type="button">Integrate: \(\int_0^b \sum_{n=0}^{\infty}(\cdots)\,\mathrm{d}x =
        \sum_{n=0}^{\infty}\int_0^b(\cdots)\,\mathrm{d}x\).</button>
      <button class="fline" type="button">Evaluate each piece: \(\int_0^b x^{2n}\,\mathrm{d}x =
        \frac{b^{2n+1}}{2n+1}\).</button>
      <button class="fline" type="button">Collect the constants to get
        \(\frac{1}{\sqrt{2\pi}}\sum\frac{(-1)^nb^{2n+1}}{n!\,2^n(2n+1)}\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Solid &mdash; as far as anything in this chapter is solid.</strong> The series for \(E\) was
        constructed on Day 7 and the widget there showed it tracking \(e^x\) everywhere. Nothing new is being assumed
        here.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Also fine, and worth appreciating.</strong> Substituting one expression for the variable in a power
        series is legitimate and enormously powerful &mdash; it's how a single known series spawns dozens of others.
        (Notice it also means the resulting series is in powers of \(x^2\), so only even powers appear.)</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>That's the one, and it is stated without comment in your reading.</strong> Swapping \(\int\) and
        \(\sum\) means claiming</p>
      \[ \int_0^b \lim_{N\to\infty} \sum_{n=0}^{N} f_n(x)\,\mathrm{d}x = \lim_{N\to\infty}\int_0^b \sum_{n=0}^{N}
      f_n(x)\,\mathrm{d}x \]
      <p>which is an <em>interchange of two limiting processes</em>. For a finite sum it's the additivity of the
        integral &mdash; a one-line consequence. For an infinite one it is a substantial theorem with hypotheses, and
        <strong>it can fail</strong>. Chapter 5 will show you a sequence of functions where integrating and taking
        limits in the two orders gives two different answers.</p>
      <p>The same interchange is hiding in Day 7's term-by-term differentiation of \(y = \sum a_nx^n\). Once you learn
        to see it, you'll notice it propping up nearly every computation in this chapter. The property that makes it
        legitimate here is <em>uniform</em> convergence, which is the subject of Day 34 &mdash; the last day of the
        course, which tells you something about how much machinery it takes.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Fine.</strong> The power rule on a single monomial over a bounded interval. Nothing infinite is
        happening inside this step &mdash; which is exactly why step (3), which arranged for that to be true, was doing
        the real work.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>Fine.</strong> Bookkeeping: gather \((-1)^n\), \(2^{-n}\), \(n!\) and \((2n+1)\) into one
        coefficient.</p>
    </div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Gregory's series for \(\pi\), and why Newton wanted a better one</h2>

  <p>Your reading records a series for \(\pi\) known to James Gregory and rediscovered by Leibniz:</p>

  \[ \frac{\pi}{4} = 1 - \frac13 + \frac15 - \frac17 + \cdots \]

  <p>It is exact, beautiful, and &mdash; the reading is blunt &mdash; "converges too slowly to be of any practical
    use." Find out how slowly.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d8-pi">Terms (log scale)</label>
      <input type="range" id="d8-pi" min="0" max="6" step="0.05" value="1.5">
    </div>
  </div>

  <div class="readout" id="d8-pi-out"></div>

  <p>The reading's own datapoint: a thousand terms gives \(3.142591654\), correct to <em>two</em> decimal places. Each
    additional correct digit costs roughly a hundredfold more work. To reach ten digits you would need something like
    \(10^{10}\) terms &mdash; and the accumulated rounding error would swamp the answer long before you got there.</p>

  <p>This is what motivated Newton. He had the general scheme of computing areas by series, and he wanted a series for
    \(\pi\) that actually converged at a usable rate. His route starts from the observation that</p>

  \[ \frac{\pi}{4} = \int_0^1 \sqrt{1-x^2}\,\mathrm{d}x \]

  <p>&mdash; the area of a quarter circle &mdash; which turns the problem into finding a series for \(\sqrt{1-x^2}\).
    That is exactly where Day 9 picks up, and it required Newton to take the binomial theorem somewhere it had never
    been asked to go.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on definition by series</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Your reading <em>defines</em> \(e^x\) for irrational \(x\) by the series. Why is a definition
      needed?</p>
    <button class="mc-opt" type="button" data-key="a">Because the series converges faster than other methods.</button>
    <button class="mc-opt" type="button" data-key="b">Because "repeated multiplication" and "root-taking" both fail for
      irrational exponents &mdash; there was no prior meaning to compute.</button>
    <button class="mc-opt" type="button" data-key="c">Because \(e\) is irrational.</button>
    <div class="mc-fb" data-key="a">Speed isn't the issue. The issue is that without the series there is nothing to
      compute.</div>
    <div class="mc-fb" data-key="b">Correct. \(4^3\) is three copies of \(4\) multiplied; \(4^{3/2}\) is
      \((\sqrt4)^3\). Neither description parses when the exponent is \(\sqrt2\). The series supplies a meaning, and
      the check that matters is that it agrees with the old one on rationals.</div>
    <div class="mc-fb" data-key="c">Irrationality of the <em>base</em> is not a problem &mdash; \(e^2\) was always fine.
      The difficulty is entirely in the exponent.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">What is \(e\), in the reading's development?</p>
    <button class="mc-opt" type="button" data-key="a">The base of the natural logarithm, assumed known.</button>
    <button class="mc-opt" type="button" data-key="b">\(\lim_{n\to\infty}(1+1/n)^n\).</button>
    <button class="mc-opt" type="button" data-key="c">The number \(E(1) = \sum_{n=0}^{\infty}\frac{1}{n!}\).</button>
    <div class="mc-fb" data-key="a">Nothing is assumed known here. \(E\) was constructed from a differential equation
      on Day 7, and \(e\) is defined from \(E\) &mdash; the logarithm comes later, not first.</div>
    <div class="mc-fb" data-key="b">True as a fact, but not this development's definition.</div>
    <div class="mc-fb" data-key="c">Correct &mdash; Definition 3.2.7, and note how little it assumes. \(e\) is simply
      the value of a series we already built, and \(e \approx 2.71828\) is then a computation rather than a quoted
      fact.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Why does the bell curve need a series at all?</p>
    <button class="mc-opt" type="button" data-key="a">It has no elementary antiderivative, so ordinary integration
      techniques cannot produce one.</button>
    <button class="mc-opt" type="button" data-key="b">It is discontinuous.</button>
    <button class="mc-opt" type="button" data-key="c">Its integral diverges.</button>
    <div class="mc-fb" data-key="a">Correct, and it's a striking limitation. \(e^{-x^2/2}\) is smooth, bounded, and
      utterly harmless-looking, yet no finite combination of the standard functions differentiates to it &mdash; a fact
      that can itself be proved. The series sidesteps the whole issue by computing rather than solving.</div>
    <div class="mc-fb" data-key="b">It's continuous everywhere, and infinitely differentiable.</div>
    <div class="mc-fb" data-key="c">It converges &mdash; the total area under the normalised curve is exactly \(1\),
      which is what makes it a probability density.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">A thousand terms of Gregory's series give \(\pi\) to two decimal places. What does that tell you?
    </p>
    <button class="mc-opt" type="button" data-key="a">The series is wrong.</button>
    <button class="mc-opt" type="button" data-key="b">Converging and converging <em>usefully</em> are different things.
    </button>
    <button class="mc-opt" type="button" data-key="c">The series diverges.</button>
    <div class="mc-fb" data-key="a">It's exactly right &mdash; it really does converge to \(\pi/4\). It simply takes
      its time.</div>
    <div class="mc-fb" data-key="b">Correct, and the distinction drives a lot of real mathematics. "Converges" is a
      statement about what happens eventually; <em>rate</em> of convergence is a separate question, and for anyone who
      has to compute an answer it is often the more important one. Newton's whole binomial project was chasing
      rate.</div>
    <div class="mc-fb" data-key="c">It converges. Watch the widget: the partial sums close in on \(\pi\) steadily, just
      at a punishing pace.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The series definition of \(e^x\) has to <em>agree</em> with root-taking on the rationals to be acceptable. What
      would it mean for such an extension to be "wrong"? Could there be two different reasonable extensions?</li>
    <li>Term-by-term integration was used without comment. Before you're told the answer, guess: what could go wrong?
      Try to imagine a sequence of functions whose integrals don't converge to the integral of their limit.</li>
    <li>Gregory's series needs \(\sim 10^{2d}\) terms for \(d\) digits. Is a formula that converges this slowly still
      mathematically valuable? What is it good for, if not computation?</li>
    <li>The reading says \(e^{\sqrt2}\) "is meaningless if we try to interpret it as one irrational number raised to
      another," and yet the series "does seem to have meaning." What gives a mathematical expression meaning? Is it
      enough that we can compute it?</li>
  </ol>
</div>

<script>
  (function () {
    var LOG4 = Math.log(4), R2 = Math.SQRT2;

    /* ---------------- 4^sqrt2 ---------------- */
    var tIn = document.getElementById('d8-terms'),
      tbl = document.getElementById('d8-approx'),
      out = document.getElementById('d8-out');

    // Rational approximations to sqrt2 whose 4^r is computable "the old way",
    // as an nth root of an integer power.
    var RATS = [[7, 5], [17, 12], [41, 29], [99, 70], [239, 169], [577, 408]];

    function expSeries(x, N) {
      var s = 0, t = 1;
      for (var k = 0; k < N; k++) { s += t; t *= x / (k + 1); }
      return s;
    }

    function draw4() {
      var N = +tIn.value;
      var series = expSeries(R2 * LOG4, N);
      var truth = Math.pow(4, R2);

      var html = '<div class="numgrid" style="grid-template-columns:repeat(auto-fill,minmax(140px,1fr))">';
      RATS.forEach(function (r) {
        var val = Math.pow(4, r[0] / r[1]);
        html += '<div class="numcell"><span class="nlab">4^(' + r[0] + '/' + r[1] + ')</span>' +
          '<span class="nval">' + val.toFixed(7) + '</span></div>';
      });
      html += '</div>';
      tbl.innerHTML = html;

      out.innerHTML =
        '<p>Rational exponents climbing toward \\(\\sqrt2 = ' + R2.toFixed(9) + '\\) give the values above &mdash; ' +
        'every one of them computable as an integer root, with no series in sight.</p>' +
        '<p class="big">\\( \\sum_{n=0}^{' + (N - 1) + '}\\frac{(\\sqrt2\\log 4)^n}{n!} = ' + series.toFixed(9) +
        ' \\)</p>' +
        '<p>The series value with ' + N + ' term' + (N === 1 ? '' : 's') + ' differs from \\(4^{\\sqrt2} = ' +
        truth.toFixed(9) + '\\) by \\(' + Math.abs(series - truth).toExponential(2) + '\\). ' +
        'The two constructions &mdash; roots on the left, a series on the right &mdash; are converging on the ' +
        'same number, which is exactly what makes the definition legitimate.</p>';
      M411.typeset(out);
    }
    tIn.addEventListener('input', draw4);

    /* ---------------- bell curve ---------------- */
    var bIn = document.getElementById('d8-b'),
      bnIn = document.getElementById('d8-bn'),
      bCan = document.getElementById('d8-bell'),
      bOut = document.getElementById('d8-bell-out');

    function bellSeries(b, N) {
      var s = 0, fact = 1;
      for (var n = 0; n < N; n++) {
        if (n > 0) fact *= n;
        s += Math.pow(-1, n) * Math.pow(b, 2 * n + 1) / (fact * Math.pow(2, n) * (2 * n + 1));
      }
      return s / Math.sqrt(2 * Math.PI);
    }
    function bellNumeric(b) {
      var N = 20000, s = 0;
      for (var i = 0; i < N; i++) { var x = b * (i + 0.5) / N; s += Math.exp(-x * x / 2); }
      return s * b / N / Math.sqrt(2 * Math.PI);
    }

    function drawBell() {
      var b = +bIn.value, N = +bnIn.value;
      var d = M411.hidpi(bCan, 240), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      var padL = 40, padR = 20, padT = 18, padB = 30;
      var xlo = -4.2, xhi = 4.2, ymax = 0.45;
      function X(x) { return padL + (x - xlo) / (xhi - xlo) * (W - padL - padR); }
      function Y(y) { return H - padB - y / ymax * (H - padT - padB); }
      function f(x) { return Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI); }

      ctx.strokeStyle = '#999'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke();

      // shaded region from 0 to b
      ctx.fillStyle = 'rgba(0,156,222,0.28)';
      ctx.beginPath(); ctx.moveTo(X(0), Y(0));
      for (var i = 0; i <= 200; i++) { var x = b * i / 200; ctx.lineTo(X(x), Y(f(x))); }
      ctx.lineTo(X(b), Y(0)); ctx.closePath(); ctx.fill();

      ctx.strokeStyle = '#333'; ctx.lineWidth = 2.2;
      ctx.beginPath();
      for (var p = 0; p <= 500; p++) { var xx = xlo + (xhi - xlo) * p / 500; p ? ctx.lineTo(X(xx), Y(f(xx))) : ctx.moveTo(X(xx), Y(f(xx))); }
      ctx.stroke();

      ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(X(b), Y(0) + 6); ctx.lineTo(X(b), Y(f(b))); ctx.stroke();
      ctx.fillStyle = M411.colors.explore; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('b = ' + b.toFixed(1), X(b), Y(0) + 20);

      var ser = bellSeries(b, N), num = bellNumeric(b);
      bOut.innerHTML =
        '<p class="big">\\( \\int_0^{' + b.toFixed(1) + '} \\frac{1}{\\sqrt{2\\pi}}e^{-x^2/2}\\,\\mathrm{d}x ' +
        '\\approx ' + ser.toFixed(9) + ' \\)</p>' +
        '<p>from ' + N + ' term' + (N === 1 ? '' : 's') + ' of the series, against a direct numerical value of \\(' +
        num.toFixed(9) + '\\) &mdash; a difference of \\(' + Math.abs(ser - num).toExponential(2) + '\\).</p>' +
        '<p>Push \\(b\\) out to \\(4\\) with only a few terms and watch the series lose its grip: the powers ' +
        '\\(b^{2n+1}\\) grow fast, so a larger interval needs many more terms before the factorials take over. ' +
        'Convergence is not in doubt &mdash; the <em>rate</em> is what changes.</p>';
      M411.typeset(bOut);
    }
    bIn.addEventListener('input', drawBell);
    bnIn.addEventListener('input', drawBell);

    /* ---------------- Gregory's series ---------------- */
    var piIn = document.getElementById('d8-pi'), piOut = document.getElementById('d8-pi-out');

    function drawPi() {
      var N = Math.round(Math.pow(10, +piIn.value));
      var s = 0;
      for (var n = 0; n < N; n++) s += (n % 2 ? -1 : 1) / (2 * n + 1);
      var val = 4 * s, err = Math.abs(val - Math.PI);
      // how many leading decimal digits are right?
      var digits = err > 0 ? Math.max(0, Math.floor(-Math.log10(err))) : 15;

      piOut.innerHTML =
        '<p>With <strong>' + N.toLocaleString() + '</strong> term' + (N === 1 ? '' : 's') + ':</p>' +
        '<p class="big">\\( 4\\sum_{n=0}^{' + (N - 1) + '}\\frac{(-1)^n}{2n+1} = ' + val.toFixed(9) + ' \\)</p>' +
        '<p>\\(\\pi = 3.141592654\\ldots\\), so the error is \\(' + err.toExponential(3) + '\\) &mdash; about <strong>' +
        digits + ' correct decimal place' + (digits === 1 ? '' : 's') + '</strong>.</p>' +
        '<p>The error behaves like \\(\\frac{1}{N}\\). Ten times the work buys one more digit.</p>';
      M411.typeset(piOut);
    }
    piIn.addEventListener('input', drawPi);

    M411.onResize(drawBell);
    draw4();
    drawBell();
    drawPi();
  })();
</script>
