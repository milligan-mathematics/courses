---
layout: day
title: "MATH 411 Day 13: Taylor's Theorem by Induction and Parts"
day: 13
chapter_number: 4
chapter: "Power Series"
day_title: "Taylor's Theorem by Induction and Parts"
blurb: "Yesterday's problem was that a Taylor series can converge to the wrong thing. Today's theorem supplies the missing quantity &mdash; an exact formula for the error, which turns &ldquo;does it work?&rdquo; into a question you can answer."
reading: "Section 4.1, Theorem 4.1.9 (Taylor's Theorem with the integral form of the remainder)"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The remainder is the whole story</h2>

  <p>Taylor's Theorem says that for a function with enough continuous derivatives,</p>

  \[ f(x) = \underbrace{\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k}_{\text{Taylor polynomial } P_n(x)} +
  \underbrace{\frac{1}{n!}\int_{a}^{x}f^{(n+1)}(t)(x-t)^n\,\mathrm{d}t}_{\text{remainder } R_n(x)} \]

  <p>Note that this is an <em>equality</em>, not an approximation. There is no "\(\approx\)" and no hand-waving about
    small terms: the polynomial plus the integral is exactly \(f\). All the error lives in one identified quantity.</p>

  <p>Which gives the criterion Day 12 was missing. The Taylor series converges to \(f\) at a point precisely
    when \(R_n(x) \to 0\) there. Not when \(f\) is smooth. Not when the series converges. When the <em>remainder</em>
    dies.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d13-fn">Function</label>
      <select id="d13-fn"></select>
    </div>
    <div class="ctl">
      <label for="d13-x">Evaluate at \(x\)</label>
      <input type="range" id="d13-x" min="-3" max="3" step="0.05" value="1.5">
    </div>
  </div>

  <canvas class="plot" id="d13-canvas"></canvas>
  <div class="readout" id="d13-out"></div>

  <p>Watch \(|R_n(x)|\) as \(n\) grows. For \(e^x\) and \(\sin x\) it collapses toward zero at any \(x\) you choose
    &mdash; those series really do represent their functions everywhere. For \(\frac{1}{1+x^2}\), it collapses inside
    \(|x| &lt; 1\) and grows without bound outside. For Cauchy's function the remainder never shrinks at all: since
    every \(P_n\) is the zero polynomial, \(R_n(x) = f(x)\) for every \(n\), permanently.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Getting the induction started</h2>

  <p>Your reading sets up the proof and hands the formal induction to you. This scaffold covers exactly the two cases
    the reading works &mdash; the anchor and the first step &mdash; with attention to <em>why</em> the moves are what
    they are. The general step is yours.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the two worked cases</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1. The anchor \(n=0\). Where could it possibly come from?</div>
        <div class="sstep-body">
          <p>At \(n=0\) the claim reads</p>
          \[ f(x) = f(a) + \frac{1}{0!}\int_a^x f'(t)(x-t)^0\,\mathrm{d}t = f(a) + \int_a^x f'(t)\,\mathrm{d}t \]
          <p>which is the Fundamental Theorem of Calculus, rearranged. Nothing new is being asserted at all.</p>
          <p>Worth pausing on: the entire theorem is an <em>iterated</em> Fundamental Theorem of Calculus. That's a
            good thing to know before you start, because it tells you the induction has to be driven by something that
            converts one integral into the next &mdash; and there is only one such tool.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2. Set up the integration by parts. Which factor should be \(u\)?</div>
        <div class="sstep-body">
          <p>We want to move from \(\int_a^x f'(t)(x-t)^0\,\mathrm{d}t\) toward something involving \(f''\) and
            \((x-t)^1\). So differentiate the \(f\) factor and integrate the power:</p>
          \[ u = f'(t), \quad \mathrm{d}v = (x-t)^0\,\mathrm{d}t \]
          \[ \mathrm{d}u = f''(t)\,\mathrm{d}t, \quad v = -\frac{1}{1}(x-t)^1 \]
          <p><strong>Watch the minus sign in \(v\).</strong> We are integrating with respect to \(t\), and \(t\)
            appears inside \((x-t)\) with a coefficient of \(-1\), so the chain rule contributes a \(-1\). Losing it is
            the standard way to lose this proof.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3. Apply it, and watch a boundary term vanish.</div>
        <div class="sstep-body">
          \[ \int_a^x f'(t)\,\mathrm{d}t = \Big[-f'(t)(x-t)\Big]_{t=a}^{t=x} + \int_a^x f''(t)(x-t)\,\mathrm{d}t \]
          <p>Evaluate the boundary term. At \(t = x\) it is \(-f'(x)(x-x) = 0\) &mdash; the factor \((x-t)\) kills it.
            At \(t = a\) it contributes \(+f'(a)(x-a)\). So</p>
          \[ f(x) = f(a) + f'(a)(x-a) + \int_a^x f''(t)(x-t)\,\mathrm{d}t \]
          <p>which is the \(n=1\) case. Look at what just happened: the boundary term at \(t=a\) <em>became the next
              term of the Taylor polynomial</em>, and the leftover integral is the next remainder. That is the engine of
            the whole induction, and it runs on the vanishing of \((x-t)^n\) at \(t=x\).</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4. What the general step will need &mdash; and why we stop here.</div>
        <div class="sstep-body">
          <p>Writing the formal induction is your problem for today, so no more computation from us. But it is fair to
            say what to aim at, since knowing the shape of an induction is not the same as having done it:</p>
          <ul>
            <li>Assume the formula holds for some \(n\), with remainder \(\frac{1}{n!}\int_a^x
              f^{(n+1)}(t)(x-t)^n\,\mathrm{d}t\).</li>
            <li>Integrate that remainder by parts, choosing \(u\) and \(\mathrm{d}v\) by the same logic as Step 2.</li>
            <li>Check that the boundary term at \(t=x\) vanishes and that the one at \(t=a\) is the degree-\((n+1)\)
              Taylor term &mdash; factorials included.</li>
            <li>Confirm the surviving integral is the \((n+1)\) remainder.</li>
          </ul>
          <p>The factorials are where the arithmetic bites: integrating \((x-t)^n\) produces both an \(n+1\) in the
            denominator and a sign, and they have to combine with the \(\frac{1}{n!}\) out front to give exactly
            \(\frac{1}{(n+1)!}\). If your bookkeeping is right, it lands cleanly.</p>
        </div>
      </li>

    </ol>
  </div>

  <p>One thing to notice about the hypotheses: Theorem 4.1.9 requires \(f', \ldots, f^{(n+1)}\) to be <em>continuous</em>
    on an interval containing \(a\) and \(x\). Continuity is needed to know the integral exists at all. Watch for that
    &mdash; from Chapter 8 onward, hypotheses like this stop being decoration.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>A perfectly smooth function whose series quits at \(x = 1\)</h2>

  <p>Consider \(f(x) = \dfrac{1}{1+x^2}\). It is defined for every real \(x\), infinitely differentiable everywhere,
    bounded between \(0\) and \(1\), and has no bad behaviour anywhere on the real line whatsoever.</p>

  <p><strong>Click the first claim that is false.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Substituting \(-x^2\) into the geometric series gives \(\frac{1}{1+x^2} = 1 -
        x^2 + x^4 - x^6 + \cdots\).</button>
      <button class="fline" type="button">By Theorem 4.1.1, that is <em>the</em> Maclaurin series of \(f\) &mdash; no
        other power series about \(0\) can represent it.</button>
      <button class="fline" type="button">\(f\) is infinitely differentiable at every real number, with no
        singularities on the real line.</button>
      <button class="fline" type="button">A function that smooth, with a unique Maclaurin series, must be represented
        by it everywhere &mdash; so the series converges to \(f\) for all real \(x\).</button>
      <button class="fline" type="button">In particular, at \(x = 2\) the series gives \(1 - 4 + 16 - 64 + \cdots =
        \frac{1}{5}\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct.</strong> The geometric series with \(u = -x^2\), exactly the Move 1 from Day 11. It is valid
        where \(|u| &lt; 1\), that is \(|x| &lt; 1\) &mdash; a restriction that came along with the substitution and is
        about to be quietly ignored.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct.</strong> Theorem 4.1.1 gives uniqueness: whatever series represents \(f\) near \(0\), its
        coefficients are forced. So there is no second series to appeal to.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Correct, and it's what makes this example so disconcerting.</strong> \(1+x^2\) is never zero for real
        \(x\), so \(f\) is a quotient of polynomials with no real singularity. Plot it: a smooth bump, perfectly
        behaved from \(-\infty\) to \(\infty\). Nothing on the real line is wrong with this function anywhere.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>False &mdash; and there is no warning sign on the real line.</strong></p>
      <p>The series converges only for \(|x| &lt; 1\). At \(x = 2\) the terms are \(1, -4, 16, -64, \ldots\), growing
        without bound, so the series diverges. Smoothness does not imply representability &mdash; Day 12 already showed
        that with Cauchy's function &mdash; but this case is worse in a specific way. Cauchy's function at least
        <em>looked</em> peculiar at the origin. This one looks like nothing is happening at \(x = \pm 1\) at all.</p>
      <p>So why does it stop there? Nothing about \(f\) on the real line explains it. The explanation is that
        \(1+x^2 = 0\) when \(x = \pm i\) &mdash; the function has singularities in the <em>complex</em> plane, at
        distance \(1\) from the origin. A power series converges in a disc reaching out to the nearest singularity in
        the complex plane, and the interval you see on the real line is just that disc's shadow.</p>
      <p>That is a genuinely startling piece of news: the behaviour of a real series is governed by points that are not
        on the real line. It is one of the best arguments for studying complex analysis, and it explains a fact you may
        have accepted without question in calculus &mdash; that intervals of convergence are always symmetric about the
        centre. They are the diameters of discs.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>False, but only as a consequence of line (4).</strong> The value \(\frac{1}{5}\) is what \(f(2)\)
        genuinely is; the series simply has nothing to say there. Its partial sums are \(1, -3, 13, -51, 205, \ldots\),
        oscillating with growing amplitude &mdash; the same Day 7 failure, now attached to a function with no visible
        defect.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on remainders</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">What does Taylor's Theorem with remainder add to Theorem 4.1.1?</p>
    <button class="mc-opt" type="button" data-key="a">A faster way to compute coefficients.</button>
    <button class="mc-opt" type="button" data-key="b">A proof that every smooth function has a Taylor series.</button>
    <button class="mc-opt" type="button" data-key="c">An exact formula for the error, so "does the series equal \(f\)?"
      becomes "does \(R_n \to 0\)?"</button>
    <div class="mc-fb" data-key="a">The coefficients are the same either way. What's new is control over what the
      polynomial <em>misses</em>.</div>
    <div class="mc-fb" data-key="b">No such theorem exists &mdash; Cauchy's counterexample rules it out permanently.
    </div>
    <div class="mc-fb" data-key="c">Correct, and it converts a vague worry into a concrete task. Day 12 left us unable
      to tell whether a series represents its function; now there is a specific quantity to bound. Chapter 7 is
      largely the business of bounding it.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Why is the \(n=0\) case a restatement of the Fundamental Theorem of Calculus?</p>
    <button class="mc-opt" type="button" data-key="a">Because it says \(f(x) = f(a) + \int_a^x f'(t)\,\mathrm{d}t\),
      which is the FTC rearranged.</button>
    <button class="mc-opt" type="button" data-key="b">Because the remainder is zero when \(n=0\).</button>
    <button class="mc-opt" type="button" data-key="c">Because \(0! = 1\).</button>
    <div class="mc-fb" data-key="a">Correct. With \(n=0\) the polynomial is the constant \(f(a)\) and \((x-t)^0 = 1\),
      leaving exactly the FTC. The whole theorem is that one fact, applied repeatedly by parts.</div>
    <div class="mc-fb" data-key="b">The remainder is very much not zero &mdash; it's the entire integral \(\int_a^x
      f'\), which is generally the bulk of \(f(x)\).</div>
    <div class="mc-fb" data-key="c">True and needed for the bookkeeping, but it isn't what makes the case the FTC.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">In the \(n=1\) step, the boundary term at \(t = x\) vanishes. Why?</p>
    <button class="mc-opt" type="button" data-key="a">Because \(f'(x) = 0\).</button>
    <button class="mc-opt" type="button" data-key="b">Because it carries a factor \((x-t)\), which is zero at \(t =
      x\).</button>
    <button class="mc-opt" type="button" data-key="c">Because the integral is zero when its limits coincide.</button>
    <div class="mc-fb" data-key="a">No reason for \(f'(x)\) to vanish &mdash; \(f\) is arbitrary.</div>
    <div class="mc-fb" data-key="b">Correct, and it's not an accident. The choice \(v = -\frac{(x-t)^{n+1}}{n+1}\) was
      made precisely so the boundary term would carry that factor. One endpoint dies and the other becomes the next
      Taylor coefficient &mdash; which is what makes the induction go.</div>
    <div class="mc-fb" data-key="c">The limits \(a\) and \(x\) are different; that's not what's happening.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">For Cauchy's function \(e^{-1/x^2}\), what is \(R_n(x)\) at a fixed \(x \ne 0\)?</p>
    <button class="mc-opt" type="button" data-key="a">It tends to \(0\) as \(n \to \infty\).</button>
    <button class="mc-opt" type="button" data-key="b">It tends to \(\infty\).</button>
    <button class="mc-opt" type="button" data-key="c">It equals \(f(x)\) for every \(n\) &mdash; it never changes.</button>
    <div class="mc-fb" data-key="a">If it did, the Taylor series would converge to \(f\), and Day 12 showed it doesn't.
    </div>
    <div class="mc-fb" data-key="b">It doesn't grow either &mdash; it sits perfectly still.</div>
    <div class="mc-fb" data-key="c">Correct, and it's a clean way to see the failure. Since \(P_n \equiv 0\) for every
      \(n\), the identity \(f = P_n + R_n\) forces \(R_n = f\) always. The remainder isn't shrinking slowly; it is
      carrying the entire function, forever, at every stage.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Taylor's Theorem is an equality, not an approximation. What is gained by insisting on that, when in practice you
      always discard the remainder anyway?</li>
    <li>\(\frac{1}{1+x^2}\) is smooth on all of \(\mathbb{R}\) and its series quits at \(|x|=1\). Before reading the
      explanation again, could you have predicted where it would stop by looking only at the real graph? What does that
      tell you about how much the real line reveals?</li>
    <li>Intervals of convergence are always symmetric about the centre. Having seen the complex-plane explanation, does
      that now seem inevitable rather than coincidental?</li>
    <li>The induction runs on one integration by parts and the vanishing of \((x-t)^n\) at \(t=x\). If you had to invent
      this proof from scratch, what would have suggested integrating by parts in the first place?</li>
  </ol>
</div>

<script>
  (function () {
    function fact(n) { var f = 1; for (var i = 2; i <= n; i++) f *= i; return f; }
    function cauchy(x) { return x === 0 ? 0 : Math.exp(-1 / (x * x)); }

    var FNS = [
      {
        label: 'e^x', f: Math.exp,
        coeff: function (n) { return 1 / fact(n); },
        note: 'The remainder collapses for every \\(x\\). This series really does represent \\(e^x\\) on the ' +
          'whole real line.'
      },
      {
        label: 'sin x', f: Math.sin,
        coeff: function (n) { return n % 2 === 0 ? 0 : (n % 4 === 1 ? 1 : -1) / fact(n); },
        note: 'Same story, though the remainder takes a while to start falling when \\(|x|\\) is large &mdash; ' +
          'it must wait until \\(n\\) overtakes \\(x\\), the crossover from Day 7.'
      },
      {
        label: '1 / (1 + x²)', f: function (x) { return 1 / (1 + x * x); },
        coeff: function (n) { return n % 2 ? 0 : (n % 4 === 0 ? 1 : -1); },
        note: 'Inside \\(|x| &lt; 1\\) the remainder dies; outside it explodes. The function is smooth ' +
          'everywhere, so nothing on the real line explains the wall at \\(|x| = 1\\).'
      },
      {
        label: "e^(−1/x²)  (Cauchy)", f: cauchy,
        coeff: function () { return 0; },
        note: 'Every Taylor polynomial is \\(0\\), so \\(R_n(x) = f(x)\\) for all \\(n\\). The remainder is a flat ' +
          'line: it never shrinks, because there is nothing subtracting anything from \\(f\\).'
      }
    ];

    var sel = document.getElementById('d13-fn'),
      xIn = document.getElementById('d13-x'),
      canvas = document.getElementById('d13-canvas'),
      out = document.getElementById('d13-out');

    FNS.forEach(function (fn, i) {
      var o = document.createElement('option');
      o.value = String(i); o.textContent = fn.label;
      sel.appendChild(o);
    });

    var NMAX = 22;

    function draw() {
      var fn = FNS[+sel.value], x = +xIn.value;

      // |R_n(x)| = |f(x) - P_n(x)|, straight from the identity f = P_n + R_n.
      var rem = [], partial = 0;
      for (var n = 0; n <= NMAX; n++) {
        partial += fn.coeff(n) * Math.pow(x, n);
        rem.push(Math.abs(fn.f(x) - partial));
      }

      var d = M411.hidpi(canvas, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 62, padR = 20, padT = 22, padB = 34;

      // log scale, floored so that exact zeros stay on the plot
      var FLOOR = 1e-16;
      var logs = rem.map(function (r) { return Math.log10(Math.max(r, FLOOR)); });
      var hi = Math.max.apply(null, logs.concat([0]));
      var lo = Math.min.apply(null, logs);
      if (hi - lo < 2) { hi += 1; lo -= 1; }

      function X(n) { return padL + n / NMAX * (W - padL - padR); }
      function Y(L) { return padT + (hi - L) / (hi - lo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = 0; g <= 5; g++) {
        var L = lo + (hi - lo) * g / 5;
        ctx.beginPath(); ctx.moveTo(padL, Y(L)); ctx.lineTo(W - padR, Y(L)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText('10^' + Math.round(L), padL - 8, Y(L) + 4);
      }

      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2.2;
      ctx.beginPath();
      logs.forEach(function (L, n) { n ? ctx.lineTo(X(n), Y(L)) : ctx.moveTo(X(n), Y(L)); });
      ctx.stroke();
      logs.forEach(function (L, n) {
        ctx.fillStyle = M411.colors.check;
        ctx.beginPath(); ctx.arc(X(n), Y(L), 3, 0, 2 * Math.PI); ctx.fill();
      });

      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('degree n', (padL + W - padR) / 2, H - 9);
      ctx.textAlign = 'left'; ctx.fillStyle = M411.colors.check; ctx.font = 'bold 12px sans-serif';
      ctx.fillText('|R\u2099(x)| at x = ' + x.toFixed(2), padL + 6, padT + 12);

      var first = rem[0], last = rem[NMAX];
      var verdict;
      if (last < 1e-12) verdict = 'The remainder has collapsed to the limits of machine precision &mdash; the ' +
        'series is converging to \\(f\\) at this point.';
      else if (last < first) verdict = 'The remainder is shrinking, but slowly at this \\(x\\). More terms would ' +
        'keep pushing it down.';
      else if (Math.abs(last - first) < 1e-15) verdict = 'The remainder is not moving at all.';
      else verdict = '<strong>The remainder is growing.</strong> More terms make the approximation ' +
        '<em>worse</em>, and the series does not represent \\(f\\) here.';

      out.innerHTML =
        '<p>\\(f(' + x.toFixed(2) + ') = ' + fn.f(x).toExponential(6) + '\\). Remainder after ' + NMAX +
        ' terms: \\(|R_{' + NMAX + '}| = ' + last.toExponential(3) + '\\) (started at \\(' +
        first.toExponential(3) + '\\)).</p>' +
        '<p>' + verdict + '</p><p>' + fn.note + '</p>';
      M411.typeset(out);
    }

    sel.addEventListener('change', draw);
    xIn.addEventListener('input', draw);
    M411.onResize(draw);
    draw();
  })();
</script>
