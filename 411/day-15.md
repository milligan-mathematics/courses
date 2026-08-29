---
layout: day
title: "MATH 411 Day 15: Fourier Series"
day: 15
chapter_number: 5
chapter: "Breaking Calculus"
day_title: "Fourier Series"
blurb: "Fourier wanted to know how heat moves through a wire. To answer it he claimed any function could be built out of sine waves &mdash; and had to invent a way to find the recipe."
reading: "Section 5.1, Fourier's method of separation of variables through the Fourier sine coefficients"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>A wire cooling down</h2>

  <p>Here is the physical problem. An insulated wire of length \(1\), both ends held at temperature zero, starts with
    some temperature distribution \(f(x)\) along it. What does it look like later?</p>

  <p>Fourier's answer is</p>

  \[ u(x,t) = \sum_{n=1}^{\infty}A_n e^{-(\rho n\pi)^2 t}\sin(n\pi x) \]

  <p>Pick a starting profile and push time forward.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d15-profile">Initial temperature \(f(x)\)</label>
      <select id="d15-profile"></select>
    </div>
    <div class="ctl">
      <label for="d15-n">Terms \(N\)</label>
      <input type="range" id="d15-n" min="1" max="60" step="1" value="8">
    </div>
    <div class="ctl">
      <label for="d15-t">Time \(t\)</label>
      <input type="range" id="d15-t" min="0" max="0.2" step="0.001" value="0">
    </div>
  </div>

  <canvas class="plot" id="d15-heat"></canvas>
  <div class="readout" id="d15-heat-out"></div>

  <p>Two separate things are on display, and it's worth pulling them apart.</p>

  <p>With \(t = 0\), the slider on \(N\) shows <strong>synthesis</strong>: sine waves accumulating into the starting
    shape. Try the square pulse with a small \(N\) &mdash; the fit is poor, and it improves as you add terms. That
    Fourier could build a <em>corner</em>, or a <em>jump</em>, out of smooth sine waves was itself contentious;
    Lagrange among others did not believe it.</p>

  <p>With \(t &gt; 0\), you see <strong>diffusion</strong>, and the mechanism is visible in the formula. Mode \(n\)
    carries the factor \(e^{-(\rho n\pi)^2 t}\), so the \(n\)th mode decays at a rate proportional to \(n^2\). High
    frequencies die first, and fast. Start with the square pulse and step \(t\) forward slightly: the corners round off
    almost immediately while the broad shape lingers, because corners are exactly what the high modes were there to
    build.</p>

  <p>That is a real physical prediction falling straight out of the algebra: heat flow destroys fine detail before
    coarse detail. Run \(t\) to the end and everything collapses toward the single lowest mode, a simple arch, which
    then fades.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Separation of variables, and why a constant appears from nowhere</h2>

  <p>The step that makes students blink is the one where Fourier concludes that two expressions must both equal a
    constant. It's a genuinely clever argument and it takes ten seconds once you see it.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the argument</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1. Make an assumption that has no right to work.</div>
        <div class="sstep-body">
          <p>Look for solutions of the special form \(u(x,t) = X(x)T(t)\) &mdash; the space part times the time part,
            with no mixing.</p>
          <p>There is no reason a solution should look like this, and most don't. It is a guess, made because it turns
            a partial differential equation into ordinary ones. The justification comes later, from the fact that it
            produces enough solutions to build everything else out of.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2. Substitute, and separate the variables.</div>
        <div class="sstep-body">
          <p>With \(u = XT\) we get \(\frac{\partial^2 u}{\partial x^2} = X''T\) and \(\frac{\partial u}{\partial t} =
            XT'\), so the heat equation \(\rho^2 u_{xx} = u_t\) becomes</p>
          \[ \rho^2 X''T = XT' \qquad\Longrightarrow\qquad \frac{X''}{X} = \frac{T'}{\rho^2 T} \]
          <p>Everything involving \(x\) is now on the left, everything involving \(t\) on the right. That is the whole
            purpose of the guess.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3. The clever bit. Why must both sides be constant?</div>
        <div class="sstep-body">
          <p>Fix \(t\) and vary \(x\). The right-hand side cannot change, since it involves no \(x\) &mdash; so the
            left-hand side doesn't change either. But the left-hand side is a function of \(x\) alone, so it must be
            constant in \(x\).</p>
          <p>Now run the same argument with the roles swapped: vary \(t\) with \(x\) fixed, and the right-hand side
            must be constant in \(t\).</p>
          <p>Both sides are constant, and they're equal, so they equal the <em>same</em> constant. Call it \(k\):</p>
          \[ X'' = kX \qquad\text{and}\qquad T' = \rho^2 k T \]
          <p>One partial differential equation has become two ordinary ones. The constant \(k\) was not assumed; it was
            <em>forced</em>, by the observation that a function of \(x\) alone can only equal a function of \(t\) alone
            if neither depends on anything.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4. What the boundary conditions do next.</div>
        <div class="sstep-body">
          <p>Solving those two equations is your problem set, so nothing about the solutions here. But it's worth
            seeing the <em>shape</em> of what happens: the physics forces \(k &lt; 0\), which makes \(X\) oscillate
            rather than grow, and the boundary conditions \(u(0,t) = u(1,t) = 0\) then permit only certain
            frequencies.</p>
          <p>This is a pattern worth recognising, because it recurs everywhere in physics: a continuum of mathematical
            possibilities, cut down to a <em>discrete</em> list by boundary conditions. The wire cannot vibrate at
            just any frequency; it has a fundamental and its overtones. The same argument, run on an atom, is where
            quantum numbers come from.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 5. Superposition, and the leap.</div>
        <div class="sstep-body">
          <p>Each allowed frequency gives one solution. Sums of solutions are again solutions (your problem set again),
            so any finite combination works.</p>
          <p>Fourier then took an <em>infinite</em> combination:</p>
          \[ u(x,t) = \sum_{n=1}^{\infty}A_n e^{-(\rho n\pi)^2t}\sin(n\pi x) \]
          <p>Note the word "surmised" in your reading. Superposition was proved for two solutions and used for
            infinitely many &mdash; the same move as every other unearned interchange in this course. And the initial
            condition \(u(x,0) = f(x)\) then demands that an <em>arbitrary</em> \(f\) be a sum of sine waves, which is
            an extraordinary claim about all functions, made in passing.</p>
          <p>Day 16 is what happens when that claim is examined.</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Orthogonality: why the sines don't interfere</h2>

  <p>Daniel Bernoulli proposed representing functions by sine series in 1753 and got nowhere, because he could not
    find the coefficients. Fourier's advance was a method &mdash; and it rests entirely on one integral.</p>

  <p>Your problem set proves it. Here is what it looks like.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d15-nn">\(n\)</label>
      <input type="range" id="d15-nn" min="1" max="6" step="1" value="2">
    </div>
    <div class="ctl">
      <label for="d15-mm">\(m\)</label>
      <input type="range" id="d15-mm" min="1" max="6" step="1" value="3">
    </div>
  </div>

  <canvas class="plot" id="d15-orth"></canvas>
  <div class="readout" id="d15-orth-out"></div>

  <p>When \(n \ne m\) the product spends exactly as much area above the axis as below, and the integral is zero. When
    \(n = m\) the product is \(\sin^2(n\pi x)\), which is never negative, so nothing cancels and the area is
    \(\frac12\).</p>

  <p>That is what makes the whole method work. Multiplying by \(\sin(n\pi x)\) and integrating is a <em>filter</em>:
    every term of the series is annihilated except the one you want, which survives with a factor of \(\frac12\).
    Bernoulli had the idea; Fourier had the filter.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Extracting a coefficient</h2>

  <p>Here is Fourier's derivation of \(A_n\).</p>

  <p><strong>Click the step that is not justified by anything proved so far.</strong></p>

  <div class="flaw-widget" data-flaw="2">
    <div class="flawlist">
      <button class="fline" type="button">Assume \(f(x) = \sum_{j=1}^{\infty}A_j\sin(j\pi x)\), multiply both sides by
        \(\sin(n\pi x)\), and integrate over \([0,1]\).</button>
      <button class="fline" type="button">Move the integral inside the sum:
        \(\int_0^1\left(\sum_j A_j\sin(j\pi x)\right)\sin(n\pi x)\,\mathrm{d}x = \sum_j A_j\int_0^1\sin(j\pi
        x)\sin(n\pi x)\,\mathrm{d}x\).</button>
      <button class="fline" type="button">By orthogonality every term with \(j \ne n\) vanishes, leaving \(A_n \cdot
        \frac12\).</button>
      <button class="fline" type="button">Therefore \(A_n = 2\int_0^1 f(x)\sin(n\pi x)\,\mathrm{d}x\).</button>
      <button class="fline" type="button">This formula needs only \(f\), so it can be computed for any \(f\) we
        like.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>An assumption, but an openly declared one.</strong> We are <em>supposing</em> \(f\) has a sine series
        and asking what the coefficients would have to be. That's a legitimate strategy &mdash; the same one Theorem
        4.1.1 used for power series &mdash; provided you remember you have not shown any such series exists.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>There it is: \(\int\) and \(\sum\) swapping places again.</strong></p>
      <p>You met this on Day 8 in the bell-curve integral, and again in every term-by-term operation of Chapter 3. For
        a finite sum it's the additivity of the integral. For an infinite one it is an interchange of two limits, and
        it needs a theorem.</p>
      <p>What makes it worse here is that on Day 8 the series was a <em>power</em> series, which turns out to be
        well-behaved. This is a <em>Fourier</em> series, and Day 16 will show you a Fourier series where term-by-term
        differentiation produces something that does not converge at all. The interchange that has been quietly
        succeeding for two chapters is about to fail loudly.</p>
      <p>The formula for \(A_n\) is nonetheless correct under reasonable hypotheses on \(f\). But "correct under
        hypotheses nobody has stated" is exactly the position the nineteenth century found intolerable.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Correct, granted line (2) &mdash; and this is the beautiful part.</strong> Orthogonality is doing
        something remarkable: an infinite sum collapses to a single term. Every unwanted \(A_j\) is multiplied by
        zero.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Just arithmetic.</strong> Multiply through by \(2\).</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>True, and this is precisely where the trouble starts.</strong></p>
      <p>The formula requires only that \(f\) be integrable. So you can compute Fourier coefficients for a function
        with corners, with jumps, with no derivative anywhere &mdash; and get a series. But the derivation
        <em>assumed</em> \(f\) was already the sum of that series. Compute the coefficients for a function that is not,
        and the formula hands you a series anyway, with no complaint.</p>
      <p>So there are now two questions where there used to be one: does the resulting series converge, and if so, does
        it converge to \(f\)? That is the Day 12 problem returning in a new costume &mdash; and this time the answers
        are considerably stranger.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on Fourier's method</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">In separation of variables, why must both sides equal a constant?</p>
    <button class="mc-opt" type="button" data-key="a">Because the heat equation has constant coefficients.</button>
    <button class="mc-opt" type="button" data-key="b">It's an assumption made to simplify the problem.</button>
    <button class="mc-opt" type="button" data-key="c">Because a function of \(x\) alone equals a function of \(t\)
      alone, so neither can actually vary.</button>
    <div class="mc-fb" data-key="a">Constant coefficients matter elsewhere, but they aren't what forces this.</div>
    <div class="mc-fb" data-key="b">It isn't assumed &mdash; it's deduced, and that's what makes the step so satisfying.
      The assumption was \(u = XT\); the constant follows.</div>
    <div class="mc-fb" data-key="c">Correct. Vary \(x\) with \(t\) fixed: the right side can't move, so neither can the
      left. Vary \(t\) with \(x\) fixed: same in reverse. Both sides are constant and equal, hence equal the same
      constant.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">What distinguished Fourier from Daniel Bernoulli, who had the same idea in 1753?</p>
    <button class="mc-opt" type="button" data-key="a">Fourier proved the series converges.</button>
    <button class="mc-opt" type="button" data-key="b">Fourier found a way to compute the coefficients.</button>
    <button class="mc-opt" type="button" data-key="c">Bernoulli was working on heat; Fourier on vibrating
      strings.</button>
    <div class="mc-fb" data-key="a">He did not, and neither did anyone for some time &mdash; convergence questions are
      what Day 16 opens up.</div>
    <div class="mc-fb" data-key="b">Correct. Your reading: Bernoulli "didn't know how to compute the coefficients in
      such a series representation. What distinguished Fourier was that he developed a technique to compute these
      coefficients." An idea without a method isn't yet usable.</div>
    <div class="mc-fb" data-key="c">Reversed &mdash; Bernoulli was on the vibrating string, Fourier on heat.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">In \(u(x,t) = \sum A_n e^{-(\rho n\pi)^2t}\sin(n\pi x)\), which modes decay fastest?</p>
    <button class="mc-opt" type="button" data-key="a">High-frequency ones, since the exponent grows like
      \(n^2\).</button>
    <button class="mc-opt" type="button" data-key="b">All at the same rate.</button>
    <button class="mc-opt" type="button" data-key="c">Low-frequency ones.</button>
    <div class="mc-fb" data-key="a">Correct, and it's the physics of smoothing. Mode \(10\) decays \(100\) times faster
      in the exponent than mode \(1\). Sharp features need high modes, so sharp features vanish first &mdash; visible
      in the widget when you start from the square pulse and nudge \(t\).</div>
    <div class="mc-fb" data-key="b">The rate depends on \(n\) through \((\rho n\pi)^2\) &mdash; strongly.</div>
    <div class="mc-fb" data-key="c">Backwards. Low modes are the ones that survive longest, which is why the profile
      collapses toward a single arch.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">What does orthogonality of the sines actually accomplish?</p>
    <button class="mc-opt" type="button" data-key="a">It proves the Fourier series converges.</button>
    <button class="mc-opt" type="button" data-key="b">It shows sine functions are linearly independent.</button>
    <button class="mc-opt" type="button" data-key="c">It lets you isolate one coefficient by killing every other term
      in the sum.</button>
    <div class="mc-fb" data-key="a">Nothing about convergence follows from it.</div>
    <div class="mc-fb" data-key="b">Independence does follow, but that's not what the method uses it for.</div>
    <div class="mc-fb" data-key="c">Correct &mdash; it's a filter. Multiply by \(\sin(n\pi x)\), integrate, and every
      term but the \(n\)th is annihilated. Without it you'd face infinitely many unknowns in one equation; with it,
      each \(A_n\) is a single integral.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Fourier's method assumes \(u = X(x)T(t)\), which almost no solution satisfies. Why does building from such a
      restricted family end up giving the general solution?</li>
    <li>The coefficient formula \(A_n = 2\int_0^1 f\sin(n\pi x)\,\mathrm{d}x\) needs only that \(f\) be integrable. So
      you can compute a Fourier series for a function with a jump in it. Should you expect the series to converge to
      \(f\) at the jump? What could it even do there?</li>
    <li>Heat flow destroys high-frequency detail fastest. Run the widget backwards in your head: what would it mean to
      solve the heat equation for negative \(t\), and why is that a hopeless thing to attempt in practice?</li>
    <li>Compare the coefficient formulas for a Taylor series and a Fourier series. One uses derivatives at a point, the
      other integrals over an interval. What kind of information does each require about \(f\), and which is more
      demanding?</li>
  </ol>
</div>

<script>
  (function () {
    var RHO = 1;

    var PROFILES = [
      { label: 'triangle:  ½ − |x − ½|', f: function (x) { return 0.5 - Math.abs(x - 0.5); } },
      { label: 'square pulse on [¼, ¾]', f: function (x) { return (x > 0.25 && x < 0.75) ? 0.5 : 0; } },
      { label: 'ramp:  x(1 − x) · 2', f: function (x) { return 2 * x * (1 - x); } },
      {
        label: 'narrow hot spot', f: function (x) {
          return 0.5 * Math.exp(-Math.pow((x - 0.35) / 0.05, 2));
        }
      },
      { label: 'sawtooth', f: function (x) { return x < 0.9 ? x * 0.55 : 0; } }
    ];

    var pSel = document.getElementById('d15-profile'),
      nIn = document.getElementById('d15-n'),
      tIn = document.getElementById('d15-t'),
      hCan = document.getElementById('d15-heat'),
      hOut = document.getElementById('d15-heat-out');

    PROFILES.forEach(function (p, i) {
      var o = document.createElement('option');
      o.value = String(i); o.textContent = p.label;
      pSel.appendChild(o);
    });

    // A_n = 2 * integral_0^1 f(x) sin(n pi x) dx, by the midpoint rule.
    var coeffCache = {};
    function coeffs(idx) {
      if (coeffCache[idx]) return coeffCache[idx];
      var f = PROFILES[idx].f, M = 4000, A = [0];
      for (var n = 1; n <= 60; n++) {
        var s = 0;
        for (var i = 0; i < M; i++) {
          var x = (i + 0.5) / M;
          s += f(x) * Math.sin(n * Math.PI * x);
        }
        A.push(2 * s / M);
      }
      coeffCache[idx] = A;
      return A;
    }

    function drawHeat() {
      var idx = +pSel.value, N = +nIn.value, t = +tIn.value;
      var A = coeffs(idx), f = PROFILES[idx].f;

      var d = M411.hidpi(hCan, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 46, padR = 20, padT = 20, padB = 32;
      var ylo = -0.18, yhi = 0.62;
      function X(x) { return padL + x * (W - padL - padR); }
      function Y(y) { return padT + (yhi - y) / (yhi - ylo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = -0.1; g <= 0.6; g += 0.1) {
        ctx.beginPath(); ctx.moveTo(padL, Y(g)); ctx.lineTo(W - padR, Y(g)); ctx.stroke();
      }
      ctx.strokeStyle = '#999'; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke();

      function u(x) {
        var s = 0;
        for (var n = 1; n <= N; n++) {
          s += A[n] * Math.exp(-Math.pow(RHO * n * Math.PI, 2) * t) * Math.sin(n * Math.PI * x);
        }
        return s;
      }

      // initial profile for reference
      ctx.strokeStyle = '#c9ccd1'; ctx.lineWidth = 3;
      ctx.beginPath();
      for (var i = 0; i <= 600; i++) { var x = i / 600; i ? ctx.lineTo(X(x), Y(f(x))) : ctx.moveTo(X(x), Y(f(x))); }
      ctx.stroke();

      ctx.strokeStyle = t > 0 ? M411.colors.check : M411.colors.explore; ctx.lineWidth = 2.3;
      ctx.beginPath();
      for (var j = 0; j <= 600; j++) { var xx = j / 600; j ? ctx.lineTo(X(xx), Y(u(xx))) : ctx.moveTo(X(xx), Y(u(xx))); }
      ctx.stroke();

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = '#9aa0a6'; ctx.fillText('initial f(x)', padL + 6, padT + 14);
      ctx.fillStyle = t > 0 ? M411.colors.check : M411.colors.explore;
      ctx.fillText(t > 0 ? 'u(x, t) at t = ' + t.toFixed(3) : N + '-term Fourier sum at t = 0', padL + 6, padT + 32);

      // how much of each mode is left
      var bars = '';
      for (var k = 1; k <= Math.min(N, 10); k++) {
        var alive = Math.exp(-Math.pow(RHO * k * Math.PI, 2) * t);
        bars += '<div class="numcell ' + (alive > 0.05 ? 'good' : 'bad') + '">' +
          '<span class="nlab">mode ' + k + '</span><span class="nval">' +
          (alive * 100).toFixed(alive > 0.01 ? 1 : 3) + '%</span></div>';
      }

      var err = 0;
      for (var q = 0; q <= 400; q++) { var xq = q / 400; err = Math.max(err, Math.abs(f(xq) - u(xq))); }

      hOut.innerHTML =
        (t === 0
          ? '<p>At \\(t=0\\) this is pure synthesis: ' + N + ' sine wave' + (N === 1 ? '' : 's') +
          ' added together. Largest gap from \\(f\\): \\(' + err.toFixed(4) + '\\).</p>'
          : '<p>At \\(t = ' + t.toFixed(3) + '\\), each mode has been multiplied by ' +
          '\\(e^{-(n\\pi)^2 t}\\). Fraction of each mode surviving:</p>') +
        '<div class="numgrid" style="grid-template-columns:repeat(auto-fill,minmax(84px,1fr))">' + bars + '</div>' +
        '<p>Mode \\(n\\) decays like \\(e^{-n^2\\pi^2 t}\\), so doubling the frequency quadruples the exponent. ' +
        'Detail disappears first; the broad shape survives.</p>';
      M411.typeset(hOut);
    }
    pSel.addEventListener('change', drawHeat);
    nIn.addEventListener('input', drawHeat);
    tIn.addEventListener('input', drawHeat);

    /* ---------------- orthogonality ---------------- */
    var nnIn = document.getElementById('d15-nn'),
      mmIn = document.getElementById('d15-mm'),
      oCan = document.getElementById('d15-orth'),
      oOut = document.getElementById('d15-orth-out');

    function drawOrth() {
      var n = +nnIn.value, m = +mmIn.value;
      var d = M411.hidpi(oCan, 250), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 46, padR = 20, padT = 18, padB = 30;
      function X(x) { return padL + x * (W - padL - padR); }
      function Y(y) { return padT + (1.15 - y) / 2.3 * (H - padT - padB); }

      function prod(x) { return Math.sin(n * Math.PI * x) * Math.sin(m * Math.PI * x); }

      // shade positive and negative area
      for (var i = 0; i < 600; i++) {
        var x0 = i / 600, x1 = (i + 1) / 600, v = prod((x0 + x1) / 2);
        ctx.fillStyle = v >= 0 ? 'rgba(0,133,82,0.30)' : 'rgba(217,83,79,0.30)';
        ctx.fillRect(X(x0), Y(Math.max(v, 0)), X(x1) - X(x0) + 0.6, Math.abs(Y(v) - Y(0)));
      }

      ctx.strokeStyle = '#999'; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke();

      [[n, 'rgba(0,156,222,0.55)'], [m, 'rgba(139,92,246,0.55)']].forEach(function (pr) {
        ctx.strokeStyle = pr[1]; ctx.lineWidth = 1.5; ctx.beginPath();
        for (var i2 = 0; i2 <= 600; i2++) {
          var x = i2 / 600, y = Math.sin(pr[0] * Math.PI * x);
          i2 ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y));
        }
        ctx.stroke();
      });

      ctx.strokeStyle = '#333'; ctx.lineWidth = 2.4; ctx.beginPath();
      for (var i3 = 0; i3 <= 600; i3++) {
        var x3 = i3 / 600;
        i3 ? ctx.lineTo(X(x3), Y(prod(x3))) : ctx.moveTo(X(x3), Y(prod(x3)));
      }
      ctx.stroke();

      var integral = 0, M2 = 20000;
      for (var q = 0; q < M2; q++) integral += prod((q + 0.5) / M2) / M2;

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = '#333'; ctx.fillText('the product sin(' + n + 'πx)·sin(' + m + 'πx)', padL + 6, padT + 14);

      oOut.innerHTML =
        '<p class="big">\\( \\int_0^1 \\sin(' + n + '\\pi x)\\sin(' + m + '\\pi x)\\,\\mathrm{d}x = ' +
        integral.toFixed(6) + ' \\)</p>' +
        (n === m
          ? '<p>\\(n = m\\), so the product is \\(\\sin^2(' + n + '\\pi x)\\) &mdash; never negative. There is no ' +
          'red area to cancel the green, and the total comes out to \\(\\frac12\\).</p>'
          : '<p>\\(n \\ne m\\), and the green area above the axis exactly matches the red area below it. Total: ' +
          'zero. This is the cancellation that lets Fourier pick out one coefficient at a time.</p>');
      M411.typeset(oOut);
    }
    nnIn.addEventListener('input', drawOrth);
    mmIn.addEventListener('input', drawOrth);

    M411.onResize(function () { drawHeat(); drawOrth(); });
    drawHeat();
    drawOrth();
  })();
</script>
