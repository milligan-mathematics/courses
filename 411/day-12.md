---
layout: day
title: "MATH 411 Day 12: Taylor Series and Cauchy's Counterexample"
day: 12
chapter_number: 4
chapter: "Power Series"
day_title: "Taylor Series and Cauchy's Counterexample"
blurb: "Taylor's formula turns cleverness into a machine. Then Cauchy exhibits a function that is infinitely smooth, has a Taylor series converging everywhere, and is equal to it nowhere but the origin."
reading: "Section 4.1, Theorem 4.1.1 through Cauchy's counterexample"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Taylor polynomials, doing what they're supposed to</h2>

  <p>Theorem 4.1.1 says something reassuring: if \(f\) has a power series about \(a\), its coefficients <em>must</em>
    be \(a_n = \frac{f^{(n)}(a)}{n!}\). No function has two different power series at the same centre. So however you
    found a series &mdash; cleverness, substitution, luck &mdash; you found <em>the</em> series.</p>

  <p>That turns the formula into a machine. Feed it derivatives, get a series. Here is the machine running.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d12-fn">Function</label>
      <select id="d12-fn"></select>
    </div>
    <div class="ctl">
      <label for="d12-deg">Degree of Taylor polynomial</label>
      <input type="range" id="d12-deg" min="0" max="18" step="1" value="3">
    </div>
  </div>

  <canvas class="plot" id="d12-canvas"></canvas>
  <div class="readout" id="d12-out"></div>

  <p>For the first three functions the story is exactly what you'd hope: crank the degree and the polynomial hugs the
    curve over a wider and wider stretch. This is the picture Lagrange had in mind when he proposed founding all of
    calculus on power series &mdash; every function <em>is</em> a great big polynomial, so do algebra on the
    polynomial.</p>

  <p>Now select the last function in the list.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>A function flatter than every polynomial</h2>

  <p>Cauchy's counterexample is</p>

  \[ f(x) = \begin{cases} e^{-1/x^2} & x \neq 0 \\ 0 & x = 0 \end{cases} \]

  <p>It is positive everywhere except the origin, smooth everywhere, and infinitely differentiable &mdash; and
    <em>every one</em> of its derivatives at \(0\) is zero. Your problem set proves that. Here is what it means.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d12-zoom">Zoom in on the origin</label>
      <input type="range" id="d12-zoom" min="0" max="30" step="1" value="0">
    </div>
  </div>

  <canvas class="plot" id="d12-cauchy"></canvas>
  <div class="readout" id="d12-cauchy-out"></div>

  <p>Compare it against \(x^2\), \(x^{10}\), \(x^{50}\) &mdash; it beats all of them to zero. Being flatter than every
    power of \(x\) is precisely what "all derivatives vanish" means, and it is why no polynomial can detect this
    function at the origin.</p>

  <p>The consequence is brutal. Its Maclaurin series is</p>

  \[ \sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^n = 0 + 0\cdot x + 0\cdot x^2 + \cdots = 0 \]

  <p>The zero series. It converges &mdash; beautifully, everywhere, instantly. It converges to the zero function. And
    \(f\) is not the zero function.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>What exactly did Cauchy break?</h2>

  <p>Your problem set does the hard analytic work of showing \(f^{(n)}(0) = 0\) for every \(n\). This scaffold does
    something different: it takes that fact as <em>given</em> and traces what follows, because the logical damage is
    easy to under-estimate.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the consequences</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1. Granting \(f^{(n)}(0)=0\) for all \(n\), what is the Maclaurin series?</div>
        <div class="sstep-body">
          <p>Every coefficient is \(\frac{f^{(n)}(0)}{n!} = \frac{0}{n!} = 0\). The series is \(0 + 0x + 0x^2 +
            \cdots\) &mdash; identically zero.</p>
          <p>Notice we haven't yet said anything is wrong. We've just computed a series.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2. Does that series converge? Where?</div>
        <div class="sstep-body">
          <p>Yes &mdash; at every real \(x\), and immediately. Every partial sum is \(0\), so the sequence of partial
            sums is \(0, 0, 0, \ldots\), which converges to \(0\).</p>
          <p>This is important, and it's the part people expect to be the problem. The failure here is <em>not</em>
            that the series diverges. It has the best convergence behaviour imaginable.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3. So where is the failure?</div>
        <div class="sstep-body">
          <p>The series converges to the zero function. But \(f(x) = e^{-1/x^2} &gt; 0\) for every \(x \ne 0\). So</p>
          \[ \sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^n \neq f(x) \quad\text{for every } x \neq 0 \]
          <p>The Taylor series of \(f\) exists, converges everywhere, and agrees with \(f\) at exactly <em>one
              point</em>: the centre. Everywhere else it is simply a different function.</p>
          <p>Three separate things have now come apart that everyone had been treating as one: <em>the series exists</em>,
            <em>the series converges</em>, and <em>the series equals the function</em>. Each needs its own argument.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4. Why doesn't Theorem 4.1.1 rule this out?</div>
        <div class="sstep-body">
          <p>Read its hypothesis carefully: <em>if</em> \(f(x) = \sum a_n(x-a)^n\), then \(a_n =
            \frac{f^{(n)}(a)}{n!}\). It assumes a valid power series representation exists and deduces what the
            coefficients must be.</p>
          <p>It is a <em>uniqueness</em> theorem, not an <em>existence</em> theorem. It says a function cannot have two
            different power series. It never promised any function has one. Cauchy's example is a function with no
            power series representation at \(0\) at all &mdash; so the theorem's hypothesis is false and it has nothing
            to say.</p>
          <p>Mistaking a uniqueness theorem for an existence theorem is one of the most common errors in mathematics,
            and this is a spectacular instance of what it costs.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 5. What does this do to Lagrange's programme?</div>
        <div class="sstep-body">
          <p>It ends it. Lagrange wanted to define the derivative as the coefficient in a power series, escaping
            infinitesimals by making calculus into the algebra of series. That requires <em>every</em> differentiable
            function to be represented by its Taylor series.</p>
          <p>Cauchy's \(f\) is infinitely differentiable and is not represented by its Taylor series. So the
            foundation cannot be laid this way. Your reading puts it plainly: "basing the foundations of calculus on
            power series was not a sound idea."</p>
          <p>What survives is considerable, though. Lagrange moved the subject decisively away from infinitesimals and
            toward function-based reasoning, and the notation \(f'\) &mdash; from his <em>fonction dérivée</em> &mdash;
            is on every page you will ever read. The programme failed; the direction was right.</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Lagrange's plan for the foundations of calculus</h2>

  <p><strong>Click the step that turned out to be false.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Infinitesimals are logically suspect, so calculus needs a foundation that
        avoids them.</button>
      <button class="fline" type="button">Polynomials are easy: differentiating and manipulating them requires no
        limits and no infinitely small quantities.</button>
      <button class="fline" type="button">A power series behaves like a polynomial of infinite degree, and its
        coefficient of \((x-a)^n\) already encodes \(f^{(n)}(a)/n!\).</button>
      <button class="fline" type="button">So every differentiable function can be replaced by its power series, and
        the derivative <em>defined</em> as a coefficient.</button>
      <button class="fline" type="button">Calculus then becomes algebra, done entirely with series and no
        infinitesimals anywhere.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Sound, and history agrees.</strong> Day 4 showed precisely what is wrong with infinitesimals &mdash;
        they contradict the Archimedean Property &mdash; and Day 5 showed the results being obtained by discarding
        terms that were declared negligible. Lagrange's diagnosis was correct.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>True.</strong> The derivative of a polynomial is defined by a finite algebraic rule. No limits, no
        infinitesimals. That's exactly what made this such an attractive place to start.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>True &mdash; and it's Theorem 4.1.1.</strong> If a function has a power series about \(a\), the
        coefficients are forced to be \(\frac{f^{(n)}(a)}{n!}\). Note the "if": that conditional is about to be treated
        as though it were unconditional.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>That's the false step, and it is exactly the "if" from line (3) being dropped.</strong></p>
      <p>Your reading names the fault directly: Lagrange "implicitly assumed that every continuous function could be
        replaced with its power series representation" &mdash; and "its only real flaw is that its fundamental
        assumption is not true."</p>
      <p>\(f(x) = e^{-1/x^2}\) is infinitely differentiable at \(0\), so Lagrange's programme owes it a series. The
        series exists, converges everywhere, and is the zero function. If you <em>defined</em> the derivative as the
        coefficient of \(x\), you would conclude \(f'(0) = 0\) &mdash; which happens to be right &mdash; and also that
        \(f\) is identically zero, which is wildly wrong. The definition cannot distinguish \(f\) from \(0\), so it
        cannot serve as a foundation.</p>
      <p>Notice how the failure arrived. Not through a calculation error, and not through divergence. Through a
        quantifier: a theorem true of <em>every function that has a series</em> was applied to <em>every
          function</em>.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>The goal, not the error.</strong> It's a fine goal, and it fails only because line (4) fails. Something
        close to it does eventually work &mdash; the functions that <em>do</em> equal their Taylor series are called
        <em>analytic</em>, and they are a rich and well-behaved class. What Lagrange couldn't know is that "analytic"
        is strictly narrower than "infinitely differentiable," and that the gap between them is where Cauchy's function
        lives.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on what Taylor series promise</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">What does Theorem 4.1.1 actually assert?</p>
    <button class="mc-opt" type="button" data-key="a">Every function has a power series about every point.</button>
    <button class="mc-opt" type="button" data-key="b">If a function has a power series about \(a\), its coefficients
      must be \(f^{(n)}(a)/n!\) &mdash; so the representation is unique.</button>
    <button class="mc-opt" type="button" data-key="c">Every power series converges to the function that generated
      it.</button>
    <div class="mc-fb" data-key="a">Nothing in the theorem produces a series. That's the existence question, and
      Cauchy's example answers it in the negative.</div>
    <div class="mc-fb" data-key="b">Correct, and the conditional is everything. Uniqueness is genuinely useful &mdash;
      it means any series you find by any trick is <em>the</em> series. It just doesn't promise there is one.</div>
    <div class="mc-fb" data-key="c">This is the claim Cauchy's counterexample destroys.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Cauchy's function has a Maclaurin series. What is wrong with it?</p>
    <button class="mc-opt" type="button" data-key="a">It diverges.</button>
    <button class="mc-opt" type="button" data-key="b">It converges only on a small interval.</button>
    <button class="mc-opt" type="button" data-key="c">It converges everywhere, to the zero function, which is not
      \(f\).</button>
    <div class="mc-fb" data-key="a">The opposite &mdash; every partial sum is \(0\), so it converges instantly at every
      point. Divergence would almost be less alarming, because we'd expect it to signal something.</div>
    <div class="mc-fb" data-key="b">Its interval of convergence is all of \(\mathbb{R}\).</div>
    <div class="mc-fb" data-key="c">Correct, and this is the shock. Convergence was never the issue. The series
      converges perfectly to a perfectly good function &mdash; just not the one it came from. "Converges" and
      "converges to \(f\)" are different claims, and the whole of Chapter 7 exists to tell them apart.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Where does the notation \(f'\) come from?</p>
    <button class="mc-opt" type="button" data-key="a">Lagrange, 1779, from his <em>fonction dérivée</em> &mdash; which
      also gives us the word "derivative."</button>
    <button class="mc-opt" type="button" data-key="b">Newton, in the <em>Principia</em>.</button>
    <button class="mc-opt" type="button" data-key="c">Taylor, in the <em>Methodus Incrementorum</em>.</button>
    <div class="mc-fb" data-key="a">Correct. Two pieces of standard vocabulary &mdash; the prime and the word
      "derivative" itself &mdash; are the surviving remains of a programme that failed. Neither Taylor nor Maclaurin
      used the prime notation.</div>
    <div class="mc-fb" data-key="b">Newton used dots for fluxions, and his conception was kinematic.</div>
    <div class="mc-fb" data-key="c">Taylor published the series in 1715, sixty years before Lagrange's notation.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">What is a Maclaurin series?</p>
    <button class="mc-opt" type="button" data-key="a">A Taylor series that converges everywhere.</button>
    <button class="mc-opt" type="button" data-key="b">A Taylor series centred at \(a = 0\).</button>
    <button class="mc-opt" type="button" data-key="c">A Taylor series with an integral remainder term.</button>
    <div class="mc-fb" data-key="a">Convergence has nothing to do with the name &mdash; and Cauchy's Maclaurin series
      converges everywhere while being useless.</div>
    <div class="mc-fb" data-key="b">Correct. Purely a matter of where it's centred. Maclaurin included the \(a=0\) case
      in his <em>Treatise of Fluxions</em> (1742) and the name stuck, though the general case came first.</div>
    <div class="mc-fb" data-key="c">That's Taylor's Theorem with remainder &mdash; Day 13's business.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Three claims came apart today: a Taylor series <em>exists</em>, it <em>converges</em>, and it <em>equals
        \(f\)</em>. Give an example of a function for each combination you think is possible, or argue that some
      combination cannot happen.</li>
    <li>Cauchy's function is flatter at the origin than \(x^n\) for every \(n\). Explain, without computing anything,
      why that had to make all the derivatives vanish.</li>
    <li>Lagrange's programme failed on a technicality about quantifiers &mdash; "if \(f\) has a series" became "every
      \(f\)". Look back at Day 9's Newton and Day 10's Euler. Were their leaps the same kind of mistake, or a different
      kind?</li>
    <li>The functions that do equal their Taylor series are called analytic. What would you need to know about a
      function to be confident it is one? (Day 13 gives you the tool.)</li>
  </ol>
</div>

<script>
  (function () {
    function cauchy(x) { return x === 0 ? 0 : Math.exp(-1 / (x * x)); }
    function fact(n) { var f = 1; for (var i = 2; i <= n; i++) f *= i; return f; }

    /* ---------------- Taylor polynomial explorer ---------------- */
    var FNS = [
      {
        label: 'sin x', f: Math.sin, lo: -8, hi: 8, ylo: -2.5, yhi: 2.5,
        coeff: function (n) { return n % 2 === 0 ? 0 : (n % 4 === 1 ? 1 : -1) / fact(n); },
        note: 'The Taylor polynomials reach further out with every pair of terms, and eventually track sine ' +
          'across the whole window.'
      },
      {
        label: 'e^x', f: Math.exp, lo: -4, hi: 3, ylo: -3, yhi: 16,
        coeff: function (n) { return 1 / fact(n); },
        note: 'Textbook behaviour: each extra term improves the fit everywhere at once.'
      },
      {
        label: '1 / (1 − x)', f: function (x) { return 1 / (1 - x); }, lo: -2.4, hi: 0.95, ylo: -2, yhi: 8,
        coeff: function () { return 1; },
        note: 'Here the improvement stops at \\(|x| = 1\\). Past that boundary, higher degree makes things ' +
          '<em>worse</em> &mdash; the function is fine at \\(x = -2\\), but its series is not.'
      },
      {
        label: "e^(−1/x²)  (Cauchy's function)", f: cauchy, lo: -2.2, hi: 2.2, ylo: -0.3, yhi: 1.2,
        coeff: function () { return 0; },
        note: 'Every coefficient is zero, so every Taylor polynomial is the constant \\(0\\) &mdash; the flat line ' +
          'along the axis. Raising the degree changes nothing at all, because there is nothing to change.'
      }
    ];

    var sel = document.getElementById('d12-fn'),
      degIn = document.getElementById('d12-deg'),
      canvas = document.getElementById('d12-canvas'),
      out = document.getElementById('d12-out');

    FNS.forEach(function (fn, i) {
      var o = document.createElement('option');
      o.value = String(i); o.textContent = fn.label;
      sel.appendChild(o);
    });

    function drawTaylor() {
      var fn = FNS[+sel.value], N = +degIn.value;
      var d = M411.hidpi(canvas, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      var padL = 46, padR = 20, padT = 18, padB = 30;
      function X(x) { return padL + (x - fn.lo) / (fn.hi - fn.lo) * (W - padL - padR); }
      function Y(y) { return padT + (fn.yhi - y) / (fn.yhi - fn.ylo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = 0; g <= 5; g++) {
        var v = fn.ylo + (fn.yhi - fn.ylo) * g / 5;
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(v.toFixed(1), padL - 8, Y(v) + 4);
      }
      ctx.strokeStyle = '#999'; ctx.lineWidth = 1.4;
      if (0 > fn.ylo && 0 < fn.yhi) { ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke(); }
      ctx.beginPath(); ctx.moveTo(X(0), padT); ctx.lineTo(X(0), H - padB); ctx.stroke();

      function plot(f, color, width) {
        ctx.strokeStyle = color; ctx.lineWidth = width; ctx.beginPath();
        var started = false;
        for (var i = 0; i <= 700; i++) {
          var x = fn.lo + (fn.hi - fn.lo) * i / 700, y = f(x);
          if (!isFinite(y) || y < fn.ylo - 20 || y > fn.yhi + 20) { started = false; continue; }
          started ? ctx.lineTo(X(x), Y(y)) : (ctx.moveTo(X(x), Y(y)), started = true);
        }
        ctx.stroke();
      }

      plot(fn.f, '#c9ccd1', 3.6);
      plot(function (x) {
        var s = 0;
        for (var k = 0; k <= N; k++) s += fn.coeff(k) * Math.pow(x, k);
        return s;
      }, M411.colors.explore, 2.2);

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = '#9aa0a6'; ctx.fillText(fn.label, padL + 6, padT + 14);
      ctx.fillStyle = M411.colors.explore; ctx.fillText('Taylor polynomial, degree ' + N, padL + 6, padT + 32);

      out.innerHTML = '<p>Degree ' + N + ' Taylor polynomial about \\(a = 0\\).</p><p>' + fn.note + '</p>';
      M411.typeset(out);
    }
    sel.addEventListener('change', drawTaylor);
    degIn.addEventListener('input', drawTaylor);

    /* ---------------- Cauchy's function up close ---------------- */
    var zIn = document.getElementById('d12-zoom'),
      cCan = document.getElementById('d12-cauchy'),
      cOut = document.getElementById('d12-cauchy-out');

    function drawCauchy() {
      var z = Math.pow(10, +zIn.value / 12);
      var half = 2.2 / z;

      var d = M411.hidpi(cCan, 280), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      var padL = 60, padR = 20, padT = 18, padB = 32;
      // rescale vertically to whatever the function actually reaches in this window
      var top = Math.max(cauchy(half), 1e-300);
      function X(x) { return padL + (x + half) / (2 * half) * (W - padL - padR); }
      function Y(y) { return H - padB - (y / (top * 1.25)) * (H - padT - padB); }

      ctx.strokeStyle = '#999'; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(X(0), padT); ctx.lineTo(X(0), H - padB); ctx.stroke();

      function plot(f, color, width, dash) {
        ctx.strokeStyle = color; ctx.lineWidth = width; ctx.setLineDash(dash || []);
        ctx.beginPath();
        var started = false;
        for (var i = 0; i <= 700; i++) {
          var x = -half + 2 * half * i / 700, y = f(x);
          if (!isFinite(y)) { started = false; continue; }
          started ? ctx.lineTo(X(x), Y(y)) : (ctx.moveTo(X(x), Y(y)), started = true);
        }
        ctx.stroke(); ctx.setLineDash([]);
      }

      // comparison monomials, scaled to agree at the window edge
      [[2, '#c9ccd1'], [10, '#b9bec4'], [50, '#a9aeb4']].forEach(function (pr) {
        var p = pr[0], edge = Math.pow(half, p);
        plot(function (x) { return top * Math.pow(x, p) / edge; }, pr[1], 1.6, [4, 3]);
      });
      plot(cauchy, M411.colors.check, 2.6);

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = M411.colors.check; ctx.fillText('e^(−1/x²)', padL + 6, padT + 14);
      ctx.fillStyle = '#9aa0a6'; ctx.fillText('x², x¹⁰, x⁵⁰ (scaled to match at the edge)', padL + 6, padT + 32);
      ctx.textAlign = 'center'; ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif';
      ctx.fillText('±' + half.toExponential(1), X(half) - 30, H - 10);

      var samples = [0.5, 0.2, 0.1, 0.05].map(function (x) {
        var v = cauchy(x);
        return '\\(f(' + x + ') = ' + (v === 0 ? '0\\text{ (underflow)}' : v.toExponential(3)) + '\\)';
      });

      cOut.innerHTML =
        '<p>Window \\(\\pm' + half.toExponential(2) + '\\), with the vertical axis rescaled each time so the ' +
        'curve stays visible &mdash; the peak value here is only \\(' + top.toExponential(2) + '\\).</p>' +
        '<p>' + samples.join(', &nbsp;') + '</p>' +
        '<p>The dashed curves are \\(x^2\\), \\(x^{10}\\) and \\(x^{50}\\), each scaled to meet \\(f\\) at the edge ' +
        'of the window. Even \\(x^{50}\\) sits <em>above</em> \\(f\\) near the origin. Whatever power you pick, ' +
        'Cauchy\'s function eventually gets underneath it &mdash; which is exactly the statement that all its ' +
        'derivatives at \\(0\\) vanish.</p>' +
        '<p>By \\(x = 0.05\\) the value is \\(e^{-400}\\), below what double precision can even hold, so your ' +
        'browser reports a flat \\(0\\). The function is not zero there. It is just closer to zero than arithmetic ' +
        'can see &mdash; which is a fair summary of the whole problem.</p>';
      M411.typeset(cOut);
    }
    zIn.addEventListener('input', drawCauchy);

    M411.onResize(function () { drawTaylor(); drawCauchy(); });
    drawTaylor();
    drawCauchy();
  })();
</script>
