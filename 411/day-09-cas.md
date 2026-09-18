---
layout: lesson
title: "MATH 411 Day 09 CAS Review"
course: 411
unit: "Chapter 3 · Calculus in the 17th and 18th Centuries"
badge: "Day 09 CAS review"
lesson_title: "Reading What the Machine Shows You"
blurb: "Three of Day 9's problems hand the arithmetic to a computer. The arithmetic is the easy part — the work is deciding what a plot or a column of digits is entitled to tell you."
prereq: "you have already done Problems 3.2.12, 3.2.13 and 3.2.14(b). This is a review page, so it gives the answers away — including the two coding mistakes that make these problems come out wrong, and the places where the plot on your screen was not evidence for the thing you concluded from it. Every panel is a live CAS; run your own numbers through it and see whether they match what you turned in."
index_url: "/411/"
index_label: "All days"
prev: "/411/day-09.html"
prev_title: "Day 9: Newton's Binomial Series"
next: "/411/day-10.html"
next_title: "Day 10: The Basel Problem and Euler's Formula"
---

<div class="readout">
  <p><strong>The work is done; this is the post-mortem.</strong> Each panel runs the computation the problem asked for,
    says what it comes out to, and then says the more interesting thing: which of your conclusions the computation
    actually supported, and which one you reached for reasons the machine never supplied.</p>
  <p>The three answers, up front, so you can check them against what you turned in:</p>
  <ul>
    <li><strong>3.2.12.</strong> The series converges to \(\sqrt{1+x}\) exactly on \(-1 \le x \le 1\), endpoints
      included.</li>
    <li><strong>3.2.13.</strong> The first 100 terms give \(0.785493\) against \(\pi/4 = 0.785398\) &mdash; three
      correct decimal places, approached from above.</li>
    <li><strong>3.2.14(b).</strong> \(S_1\) wins, and not narrowly: at \(N = 20\) it has nine correct decimals and
      \(S_2\) has one.</li>
  </ul>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>First, get the coefficient right</h2>

  <p>All three problems need the same number:</p>

  \[ c_n \;=\; \binom{1/2}{n} \;=\; \frac{\prod_{j=0}^{n-1}\left(\tfrac12 - j\right)}{n!} \]

  <p>and nearly every CAS attempt that goes wrong goes wrong right here, before any mathematics happens. There are two
    obvious ways to code it. Drag \(n\) and watch whether they agree.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="cas-n">Index \(n\)</label>
      <input type="range" id="cas-n" min="0" max="200" step="1" value="4">
    </div>
    <div class="ctl">
      <label>&nbsp;</label>
      <span class="mono" id="cas-n-out"></span>
    </div>
  </div>

  <div class="ctl-row">
    <button class="btn411 ghost cas-n-preset" data-n="0">\(n = 0\)</button>
    <button class="btn411 ghost cas-n-preset" data-n="4">\(n = 4\)</button>
    <button class="btn411 ghost cas-n-preset" data-n="100">\(n = 100\)</button>
    <button class="btn411 ghost cas-n-preset" data-n="171">\(n = 171\)</button>
  </div>

  <div id="cas-coef-table"></div>
  <div class="readout" id="cas-coef-out"></div>

  <details class="hint">
    <summary>Two failures worth meeting here rather than at 11pm</summary>
    <p><strong>The empty product.</strong> At \(n = 0\) the product \(\prod_{j=0}^{-1}\) has no factors and is declared
      to be \(1\). A loop written as <span class="mono">prod = 0</span> and then multiplied into gives \(0\), and a
      <span class="mono">range(0)</span> loop that never executes leaves whatever you initialised. Your entire series
      then loses its constant term, and every answer below is off by exactly \(1\). Initialise to \(1\).</p>
    <p><strong>The overflow.</strong> The direct translation &mdash; build the numerator product, build \(n!\), divide
      &mdash; asks the machine to hold two astronomically large numbers in order to produce a small one. In ordinary
      double-precision floating point \(n!\) exceeds the largest representable number at \(n = 171\), and the route
      returns <span class="mono">inf</span>, <span class="mono">nan</span>, or \(0\). Problem 3.2.12 asks for \(M =
      100\), which squeaks under the limit; you are one parameter change away from nonsense and nothing warns you.</p>
    <p>The recurrence never builds a large number at all:</p>
    \[ c_0 = 1, \qquad c_n = c_{n-1}\cdot\frac{\tfrac12 - (n-1)}{n} \]
    <p>It is the same mathematics with the cancellation done in advance, and it is what you should actually type.</p>
  </details>

  <details class="hint">
    <summary>Setting it up in your own CAS</summary>
    <p><strong>Python.</strong> No factorials, no imports:</p>
    <pre class="mono">c = [1.0]
for n in range(1, M + 1):
    c.append(c[-1] * (0.5 - (n - 1)) / n)</pre>
    <p><strong>Mathematica.</strong> Exact rationals, so overflow never arises:</p>
    <pre class="mono">c[n_] := Binomial[1/2, n]
S[x_, M_] := Sum[c[n] x^n, {n, 0, M}]
Plot[Evaluate[{Sqrt[1 + x], S[x, 5], S[x, 100]}], {x, -2, 2}]</pre>
    <p><strong>Desmos or GeoGebra.</strong> Both will take a <span class="mono">product</span> or
      <span class="mono">nCr</span> directly, but neither enjoys a 100-term sum evaluated at every pixel. If a plot
      hangs, that is the reason &mdash; not an error on your part.</p>
    <p>Whatever you use, check it against one value you can verify by hand. \(c_2 = -\tfrac18\) is the cheapest test
      there is, and it catches the empty-product bug immediately.</p>
  </details>
</div>

<div class="act explore">
  <div class="act-type">Explore &middot; Problem 3.2.12</div>
  <h2>The plot, and where to point it</h2>

  <p>The problem asks you to plot</p>

  \[ S(x,M) \;=\; \sum_{n=0}^{M} c_n\,x^n \]

  <p>for \(M = 5, 10, 15, 95, 100\) against \(y = \sqrt{1+x}\), and to say for which \(x\) the series appears to
    converge. Below is that plot. Start at \(M = 5\) and walk up through the assigned values.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="cas-M">Degree \(M\)</label>
      <input type="range" id="cas-M" min="1" max="120" step="1" value="5">
    </div>
    <div class="ctl">
      <label>&nbsp;</label>
      <span class="mono" id="cas-M-out"></span>
    </div>
  </div>

  <div class="ctl-row">
    <button class="btn411 ghost cas-M-preset" data-m="5">\(M=5\)</button>
    <button class="btn411 ghost cas-M-preset" data-m="10">\(M=10\)</button>
    <button class="btn411 ghost cas-M-preset" data-m="15">\(M=15\)</button>
    <button class="btn411 ghost cas-M-preset" data-m="95">\(M=95\)</button>
    <button class="btn411 ghost cas-M-preset" data-m="100">\(M=100\)</button>
  </div>

  <div class="ctl-row">
    <button class="btn411 ghost cas-view on" data-view="full">Default window</button>
    <button class="btn411 ghost cas-view" data-view="left">Zoom \(x = -1\)</button>
    <button class="btn411 ghost cas-view" data-view="right">Zoom \(x = +1\)</button>
  </div>

  <canvas class="plot" id="cas-canvas"></canvas>
  <div class="readout" id="cas-plot-out"></div>

  <p>The default window is the one a CAS gives you if you don't think about it, and at \(M = 100\) it mostly shows a
    vertical line where the polynomial leaves the screen. That is real information &mdash; but the two zoom buttons are
    where the problem actually lives, because the question is about a <em>boundary</em>, and a boundary is only visible
    if you look at it.</p>

  <div class="numgrid" id="cas-err-grid" style="grid-template-columns:repeat(auto-fill,minmax(104px,1fr))"></div>
  <p class="mono" style="color:var(--text-muted);font-size:0.82rem">\(\bigl|S(x,M) - \sqrt{1+x}\bigr|\) at sample
    points. Green is agreement to better than \(10^{-3}\).</p>

  <h3>What the plot did and didn't establish</h3>

  <p><strong>Outside the boundary, more terms are worse.</strong> At \(x = 1.2\): \(S = 1.52\) at \(M = 15\),
    \(5514\) at \(M = 95\), \(-12702\) at \(M = 100\). The reason is in the individual terms. Since \(|c_n|\) shrinks
    like \(n^{-3/2}\) while \(1.2^n\) grows exponentially, the products \(|c_n x^n|\) eventually <em>grow</em>, and a
    series whose terms grow cannot converge. The sign flip between \(M = 95\) and \(M = 100\) is the alternation
    swinging ever wider. So the divergence for \(|x| &gt; 1\) is genuinely visible, and your conclusion there was
    earned.</p>

  <p><strong>The left endpoint is where the plot let you down.</strong> Check the error grid at \(M = 100\):
    \(x = -0.9\) agrees to \(5.9\times10^{-8}\), but \(x = -1\) is off by \(0.056\) &mdash; on screen the blue curve
    visibly fails to reach \(0\). If you read that as divergence at \(x = -1\), you read it wrong, and the plot gave
    you no way to know. The series does converge there; it converges like</p>

  \[ S(-1,M) \;\approx\; \frac{1}{\sqrt{\pi M}} \]

  <p>so \(M = 100\) gives \(0.0564\), \(M = 3000\) gives \(0.0103\), and three correct decimals would take about
    \(1.3\) million terms. <strong>Slow convergence and divergence are indistinguishable on any plot</strong>, at any
    resolution, at any \(M\) you can afford. Deciding between them is what the scaffold below is for &mdash; and it is
    why the problem has an analytic half bolted to its visual half.</p>

  <p><strong>And the right endpoint was invisible for the opposite reason.</strong> At \(x = 1\) the fit at \(M = 100\)
    is already good to \(1.4\times10^{-4}\), which looks like the interior rather than a boundary. Convergence at
    \(x = 1\) is real &mdash; but "it looks converged" is exactly what \(x = -1\) looked like the other way round, so
    the plot is not what settled it.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>The half of 3.2.12 the CAS could not do</h2>

  <p>The plot suggests \([-1,1]\). Here is the argument that establishes it, which is the part worth having in your
    notes.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1. Apply the Ratio Test to \(a_n = c_n x^n\).</div>
        <div class="sstep-body">
          <p>The ratio of consecutive terms telescopes beautifully, because \(c_n\) is defined by a product:</p>
          \[ \left|\frac{a_{n+1}}{a_n}\right|
             = \left|\frac{c_{n+1}}{c_n}\right|\,|x|
             = \left|\frac{\tfrac12 - n}{n+1}\right|\,|x| \]
          <p>and as \(n \to \infty\) that fraction tends to \(1\). So</p>
          \[ \lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right| = |x| \]
          <p>giving absolute convergence for \(|x| &lt; 1\) and divergence for \(|x| &gt; 1\). That is the interior
            settled, and it confirms what you saw at \(x = 1.2\).</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2. The Ratio Test says nothing at \(x = \pm1\). Get a handle on \(|c_n|\).</div>
        <div class="sstep-body">
          <p>At \(|x| = 1\) the limit is exactly \(1\) and the test is silent &mdash; which is precisely why the two
            endpoints had to be argued separately, and why the plot alone was never going to decide them.</p>
          <p>What rescues both cases is that the coefficients decay fast enough to be summable:</p>
          \[ |c_n| \;\approx\; \frac{1}{2\sqrt{\pi}\,n^{3/2}} \]
          <p>Since \(3/2 &gt; 1\), the \(p\)-series comparison gives \(\sum |c_n| &lt; \infty\). You can watch this in
            the first panel: \(|c_{100}| = 2.83\times10^{-4}\) against the estimate \(2.82\times10^{-4}\).</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3. Both endpoints, in one stroke.</div>
        <div class="sstep-body">
          <p>At \(x = 1\) the terms are \(c_n\), which alternate in sign from \(n = 1\). At \(x = -1\) the terms are
            \(c_n(-1)^n\), and since \(c_n = (-1)^{n-1}|c_n|\) for \(n \ge 1\), every one of them after the constant
            term is <em>negative</em> &mdash; no alternation at all. The two endpoints could hardly behave more
            differently.</p>
          <p>But neither fact matters, because Step 2 gave absolute convergence, and absolute convergence does not care
            about signs. \(\sum|c_n x^n| = \sum |c_n|\) converges at \(x = \pm 1\) alike, so both endpoints are in.</p>
          <p>The interval of convergence is \([-1,1]\). \(\blacksquare\)</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4. One gap that is still open &mdash; and it is not a small one.</div>
        <div class="sstep-body">
          <p>Everything above shows the series <em>converges</em> on \([-1,1]\). It does not show it converges to
            \(\sqrt{1+x}\). Those are different claims, and nothing you have proved yet closes the distance between
            them.</p>
          <p>The evidence that the limit is the right function is still exactly what it was on Day 9: Newton squared
            the series and got \(1 + x\), and the numbers keep agreeing. Watch \(S(1,M)\) climb towards
            \(\sqrt2 = 1.414214\) in the panel above and notice that no amount of that is a proof.</p>
          <p>Taylor's Theorem in Chapter 4 supplies the remainder estimate that finally does it. Filing this gap where
            you can find it again is the honest version of "the series converges to \(\sqrt{1+x}\) on \([-1,1]\)."</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore &middot; Problem 3.2.13</div>
  <h2>Summing for \(\pi/4\), and the cost of a decimal place</h2>

  <p>Substituting \(-x^2\) and integrating term by term over \([0,1]\) turns the binomial series into</p>

  \[ \frac{\pi}{4} \;=\; \sum_{n=0}^{\infty} c_n\,\frac{(-1)^n}{2n+1}
     \;=\; 1 - \frac16 - \frac1{40} - \frac1{112} - \frac5{1152} - \cdots \]

  <p>and the problem asks for the first 100 terms, compared against \(\pi/4\). Slide \(N\) well past 100 &mdash; the
    interesting thing is not the value at 100 but the <em>rate</em> at which it improves.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="cas-N">Terms \(N\)</label>
      <input type="range" id="cas-N" min="2" max="2000" step="1" value="100">
    </div>
    <div class="ctl">
      <label>&nbsp;</label>
      <span class="mono" id="cas-N-out"></span>
    </div>
  </div>

  <div class="ctl-row">
    <button class="btn411 ghost cas-N-preset" data-n="5">5</button>
    <button class="btn411 ghost cas-N-preset" data-n="10">10</button>
    <button class="btn411 ghost cas-N-preset" data-n="100">100</button>
    <button class="btn411 ghost cas-N-preset" data-n="500">500</button>
    <button class="btn411 ghost cas-N-preset" data-n="2000">2000</button>
  </div>

  <div class="ctl-row">
    <button class="btn411 ghost cas-conv on" data-conv="excl">"First \(N\)" \(= n = 0 \ldots N-1\)</button>
    <button class="btn411 ghost cas-conv" data-conv="incl">"First \(N\)" \(= n = 0 \ldots N\)</button>
  </div>

  <div class="readout" id="cas-pi-out"></div>
  <canvas class="plot" id="cas-pi-canvas"></canvas>

  <p>Those two buttons are not a joke. "The first 100 terms" is ambiguous in English &mdash; it means 100 terms
    (\(n = 0\) through \(99\)) or it means "up to \(n = 100\)", and the two readings differ in the sixth decimal place.
    A published value that disagrees with yours in the last digit or two is very often this, and not a mistake in
    anyone's mathematics. Say which one you computed.</p>

  <h3>The answer, and the rate behind it</h3>

  <p>The first 100 terms sum to \(0.785493\) against \(\pi/4 = 0.785398\): <strong>three correct decimal
    places</strong>, \(0.785\). The error is \(+9.5\times10^{-5}\), and that plus sign never changes, because every
    term after the constant one is negative &mdash; so every partial sum is an overestimate and the sequence decreases
    monotonically onto \(\pi/4\) from above.</p>

  <p>The error plot has logarithmic axes, so a straight line means a power law \(|{\rm error}| \approx C N^{-p}\) with
    slope \(-p\). The curve lies flat along the dashed reference, and the readout's \(|{\rm error}|\cdot N^{3/2}\)
    holds steady near \(0.094\) across two decades, which pins the rate:</p>

  \[ |{\rm error}| \;\approx\; \frac{0.094}{N^{3/2}} \]

  <p>That is the whole story of why this series is a bad way to compute \(\pi\). Each extra decimal place costs a
    factor of \(10^{2/3} \approx 4.6\) more terms, and the factors compound: ten correct decimals needs roughly
    <strong>1.5 million terms</strong>. Newton knew this, which is why Problem 3.2.14 exists.</p>

  <details class="hint">
    <summary>Where the \(N^{-3/2}\) comes from, constant and all</summary>
    <p>The \(n\)th term is \(c_n\dfrac{(-1)^n}{2n+1}\). Feeding in \(|c_n| \approx \dfrac{1}{2\sqrt\pi\,n^{3/2}}\) from
      the first panel, and \(\dfrac{1}{2n+1} \approx \dfrac{1}{2n}\):</p>
    \[ |{\rm term}_n| \;\approx\; \frac{1}{2\sqrt\pi\,n^{3/2}}\cdot\frac{1}{2n}
       \;=\; \frac{1}{4\sqrt\pi}\,n^{-5/2} \]
    <p>Every term after the first shares the same sign, so nothing cancels and the error is the whole tail. Compare it
      with an integral:</p>
    \[ |{\rm error}| \;\approx\; \frac{1}{4\sqrt\pi}\sum_{n=N}^{\infty} n^{-5/2}
       \;\approx\; \frac{1}{4\sqrt\pi}\int_N^\infty t^{-5/2}\,dt
       \;=\; \frac{1}{4\sqrt\pi}\cdot\frac{2}{3}N^{-3/2} \;=\; \frac{0.0940}{N^{3/2}} \]
    <p>against the \(0.094\) the panel measures. Getting the constant and not just the exponent is a good sign that
      the reasoning is right rather than merely fitted.</p>
    <p>Notice what the argument needed: the term size <em>and</em> the absence of cancellation. Had the signs
      alternated, the error would be roughly the first omitted term, \(N^{-5/2}\) &mdash; a whole extra power of
      \(N\) better. \(S_2\) in the next panel does alternate, and its error does track its first omitted term; it
      still loses badly, because its terms start out enormously larger. Sign pattern and term size are separate
      questions, and you need both.</p>
  </details>
</div>

<div class="act explore">
  <div class="act-type">Explore &middot; Problem 3.2.14(b)</div>
  <h2>The race Newton cared about</h2>

  <p>Part (a) produces a second series for \(\pi\), from integrating \(\sqrt{x - x^2}\) over \([0,\tfrac12]\) instead
    of \(\sqrt{1-x^2}\) over \([0,1]\):</p>

  \[ S_1(N) = 16\left(\sum_{n=0}^{N} \frac{(-1)^n\,c_n}{\sqrt2\,(2n+3)\,2^n}\right),
     \qquad
     S_2(N) = 4\left(\sum_{n=0}^{N} \frac{(-1)^n}{2n+1}\right) \]

  <p>\(S_2\) is Gregory&ndash;Leibniz, the one everybody meets first. The problem asks for both at \(N = 5, 10, 15,
    20\). Here is that table, live &mdash; drag \(N\) to extend it.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="cas-race">Largest \(N\)</label>
      <input type="range" id="cas-race" min="1" max="40" step="1" value="20">
    </div>
    <div class="ctl">
      <label>&nbsp;</label>
      <span class="mono" id="cas-race-out"></span>
    </div>
  </div>

  <div id="cas-race-table"></div>
  <canvas class="plot" id="cas-race-canvas"></canvas>
  <div class="readout" id="cas-race-note"></div>

  <h3>\(S_1\) wins, and the margin is absurd</h3>

  <p>At \(N = 20\), \(S_1 = 3.14159265424\) against \(\pi = 3.14159265359\) &mdash; nine correct decimal places. At the
    same \(N\), \(S_2 = 3.18918478\), which does not survive rounding to two decimals. Twenty-one terms each.</p>

  <p>The digits plot shows <em>why</em>, and the two shapes are the point. \(S_1\) climbs as a straight line: every
    term buys about \(0.38\) of a decimal place, so a new digit costs about <strong>three more terms, always</strong>.
    \(S_2\) bends over and flattens: its error runs like \(1/N\), so a new digit costs <strong>ten times the terms you
    have already used</strong>, and the price keeps multiplying.</p>

  <p>The mechanism is the \(2^n\) in \(S_1\)'s denominator, which has no counterpart in \(S_2\). It comes from
    integrating over \([0,\tfrac12]\) rather than \([0,1]\) &mdash; every power of \(x\) evaluated at \(\tfrac12\)
    contributes another halving. At \(n = 20\), \(S_1\) is adding \(8.1\times10^{-10}\) while \(S_2\) is still adding
    \(9.8\times10^{-2}\), eight orders of magnitude larger. Geometric decay against sub-linear decay; the race is over
    before it starts.</p>

  <p>To put the margin in one number: extrapolating \(S_2\)'s \(1/N\) law, matching what \(S_1\) achieves with
    <strong>21 terms</strong> would take \(S_2\) roughly <strong>1.5 billion</strong>. That is Newton's 1665 insight,
    and it is worth more than the series itself &mdash; knowing a series converges is half the problem, and knowing
    how fast is the half that decides whether you can use it.</p>

  <details class="hint">
    <summary>One caution before you extrapolate that plot</summary>
    <p>Past about \(N = 35\), \(S_1\)'s curve stops climbing, tops out near 15 decimal places, and then wobbles
      &mdash; \(15.4\) at \(N = 36\), back down to \(14.8\) at \(N = 38\). That is not the series failing, and it is
      not the rate changing. It is double-precision arithmetic running out of digits: there are no more correct
      decimals to be had, because the machine has none left to give.</p>
    <p>The straight-line region runs to about \(N = 34\), where the count is still climbing steadily
      (\(9.2\) at \(N=20\), \(12.6\) at \(N=30\), \(14.0\) at \(N=34\)); only that part is telling you about the
      mathematics. Mistaking a floating-point floor for a mathematical one is a mistake you get to make exactly
      once.</p>
  </details>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions about evidence</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Your code returns \(0\) for the \(n = 0\) term, so every partial sum is exactly \(1\) less than it
      should be. What is the bug?</p>
    <button class="mc-opt" type="button" data-key="a">A floating-point rounding error at small \(n\).</button>
    <button class="mc-opt" type="button" data-key="b">The empty product \(\prod_{j=0}^{-1}\) was computed as \(0\)
      instead of \(1\).</button>
    <button class="mc-opt" type="button" data-key="c">\(0!\) was computed as \(0\) instead of \(1\), dividing by
      zero.</button>
    <div class="mc-fb" data-key="a">Rounding error at \(n = 0\) would be around \(10^{-16}\), not exactly \(1\). An
      error that is exactly a whole number is almost always a convention, not arithmetic.</div>
    <div class="mc-fb" data-key="b">Correct, and it is the single most common CAS bug in this problem set. An empty
      product is \(1\) because \(1\) is what leaves a multiplication unchanged &mdash; the same reasoning that gives
      \(0! = 1\). Initialise your accumulator to \(1\).</div>
    <div class="mc-fb" data-key="c">That would give a division by zero and a crash or an <span class="mono">inf</span>,
      not a clean shortfall of exactly \(1\).</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">At \(x = 1.2\) you compute \(S(x,15) \approx 1.52\), then \(S(x,95) \approx 5514\), then
      \(S(x,100) \approx -12702\). What have you learned?</p>
    <button class="mc-opt" type="button" data-key="a">The CAS has accumulated rounding error; with exact arithmetic the
      values would converge.</button>
    <button class="mc-opt" type="button" data-key="b">Nothing yet &mdash; \(M = 100\) is simply not enough terms at
      this \(x\).</button>
    <button class="mc-opt" type="button" data-key="c">The terms \(c_n x^n\) are growing rather than shrinking, so
      adding terms makes things worse, not better.</button>
    <div class="mc-fb" data-key="a">Worth checking, and you can: redo it in exact rational arithmetic and the same
      thing happens. The behaviour is in the mathematics, not the floating point.</div>
    <div class="mc-fb" data-key="b">This is the assumption the problem is built to break. "More terms" only helps if
      the terms are shrinking, and here they are not &mdash; which is why the \(M = 95\) and \(M = 100\) values are
      wildly far apart instead of closing in on each other.</div>
    <div class="mc-fb" data-key="c">Correct. \(|c_n|\) decays like \(n^{-3/2}\), but \(1.2^n\) grows exponentially, and
      exponential growth beats polynomial decay every time. The partial sums do not merely fail to converge; they
      oscillate with growing amplitude, which is why the sign flips between \(M = 95\) and \(M = 100\).</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">At \(M = 100\) the curve sits invisibly close to \(\sqrt{1+x}\) at \(x = -0.9\), but at \(x = -1\)
      it is still visibly above \(0\). Does that show the series diverges at \(x = -1\)?</p>
    <button class="mc-opt" type="button" data-key="a">Yes &mdash; the approximation is clearly not converging
      there.</button>
    <button class="mc-opt" type="button" data-key="b">No. A plot cannot distinguish divergence from convergence that is
      simply very slow.</button>
    <button class="mc-opt" type="button" data-key="c">No &mdash; the discrepancy is a plotting artefact and disappears
      at higher resolution.</button>
    <div class="mc-fb" data-key="a">This is exactly the inference the problem is inviting, and it is not available.
      Push the panel above towards \(M = 120\) and the gap at \(x = -1\) does keep closing &mdash; it just closes like
      \(1/\sqrt{\pi M}\), which would need a million terms for three decimal places.</div>
    <div class="mc-fb" data-key="b">Correct, and it is the central limitation of the whole exercise. Slow convergence
      and divergence look identical at any fixed \(M\). Deciding between them is what the Ratio Test is for &mdash;
      which is why the problem's visual half has an analytic half attached to it.</div>
    <div class="mc-fb" data-key="c">The gap is real and computable: at \(M = 100\), \(S(-1,M) \approx 0.056\) against a
      true value of \(0\). Resolution has nothing to do with it.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">\(S_1(20)\) agrees with \(\pi\) to nine decimal places. What has that established?</p>
    <button class="mc-opt" type="button" data-key="a">That the series converges to \(\pi\).</button>
    <button class="mc-opt" type="button" data-key="b">Nothing &mdash; numerical agreement is never evidence.</button>
    <button class="mc-opt" type="button" data-key="c">That the series has passed a test it could have failed, which is
      evidence and not proof.</button>
    <div class="mc-fb" data-key="a">Nine decimal places is compatible with converging to \(\pi\), and equally
      compatible with converging to something that differs from \(\pi\) in the twentieth place. Finitely many digits
      cannot separate those.</div>
    <div class="mc-fb" data-key="b">Too severe, and it throws away the thing Newton was actually doing. The derivation
      in part (a) rests on integrating an infinite series term by term, which nothing you have proved yet permits. Had
      the number come out as \(3.9\), you would have learned something decisive.</div>
    <div class="mc-fb" data-key="c">Correct &mdash; and it is the same epistemic move as Day 9's squaring check.
      A prediction that could have come out wrong didn't. What converts it into knowledge is uniform convergence, in
      Chapter 10, which is what licenses the interchange of \(\int\) and \(\sum\) in the first place.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Step 4 of the scaffold leaves one thing unproved: that the series converges <em>to \(\sqrt{1+x}\)</em> rather
      than merely converging. Every computation on this page is consistent with the limit being some other function
      that happens to agree to fourteen digits. What kind of statement would close that gap, and why can no amount of
      arithmetic supply it?</li>
    <li>Both \(\pi\) series were produced by integrating an infinite series term by term &mdash; swapping \(\int\) and
      \(\sum\), which nothing in Chapter 3 entitles you to do. Go back through 3.2.13 and 3.2.14(a) and mark every step
      that is running on credit. Does the fact that the answers came out right pay any of that debt?</li>
    <li>Now that you know the mechanism &mdash; that integrating over \([0,\tfrac12]\) bought a factor of \(2^n\)
      &mdash; could you have predicted the winner before computing anything? Push it further: what would integrating
      over \([0,\tfrac14]\) do to the rate, and why did Newton stop where he did?</li>
    <li>Newton, in 1665, had no plot and no error column &mdash; he had hand arithmetic and the fact that the numbers
      kept agreeing with values he already trusted. Is what you did on this problem set different in kind from what he
      did, or only in speed? Defend your answer, because the two positions lead to quite different views of what
      Chapter 10 is for.</li>
  </ol>
</div>

<script>
  (function () {
    'use strict';

    /* ---------------------------------------------------------------- *
     * Shared: binomial coefficients c_n = C(1/2, n), by recurrence.
     *
     * The recurrence is the point of the first activity, so the page had
     * better not quietly use the factorial route anywhere else.
     * ---------------------------------------------------------------- */
    var NMAX = 2100;
    var C = new Array(NMAX + 1);
    C[0] = 1;
    for (var ci = 1; ci <= NMAX; ci++) C[ci] = C[ci - 1] * (0.5 - (ci - 1)) / ci;

    var PI4 = Math.PI / 4;

    function sci(v, d) {
      if (isNaN(v)) return 'nan';
      if (!isFinite(v)) return v > 0 ? 'inf' : '-inf';
      return v.toExponential(d === undefined ? 3 : d);
    }

    /* ---------------------------------------------------------------- *
     * 1. The coefficient: recurrence vs product-over-factorial
     * ---------------------------------------------------------------- */
    var nIn = document.getElementById('cas-n'),
      nOut = document.getElementById('cas-n-out'),
      coefTable = document.getElementById('cas-coef-table'),
      coefOut = document.getElementById('cas-coef-out');

    // Deliberately the naive translation, overflow and all - that is the exhibit.
    function naiveCoeff(n) {
      var prod = 1, j;
      for (j = 0; j < n; j++) prod *= (0.5 - j);
      var fact = 1;
      for (j = 1; j <= n; j++) fact *= j;
      return { prod: prod, fact: fact, value: prod / fact };
    }

    // The honest comparison for the middle column: the largest magnitude each
    // route actually holds in a variable on its way to c_n.
    function peakRecurrence(n) {
      var c = 1, peak = 1;
      for (var k = 1; k <= n; k++) {
        var numerator = Math.abs(c * (0.5 - (k - 1)));
        if (numerator > peak) peak = numerator;
        c = c * (0.5 - (k - 1)) / k;
        if (Math.abs(c) > peak) peak = Math.abs(c);
      }
      return peak;
    }

    function drawCoef() {
      var n = +nIn.value;
      nOut.textContent = 'n = ' + n;

      var good = C[n];
      var bad = naiveCoeff(n);
      var broken = !isFinite(bad.value) || isNaN(bad.value) ||
        (good !== 0 && Math.abs((bad.value - good) / good) > 1e-9);

      coefTable.innerHTML =
        '<table><thead><tr><th>Route</th><th>Largest number it builds</th><th>Result</th></tr></thead><tbody>' +
        '<tr><td>Recurrence<br><span class="mono" style="font-size:0.78rem">c[n] = c[n-1]*(0.5-(n-1))/n</span></td>' +
        '<td class="mono">' + sci(peakRecurrence(n), 2) + '</td>' +
        '<td class="mono">' + sci(good, 6) + '</td></tr>' +
        '<tr><td>Product &divide; factorial<br><span class="mono" style="font-size:0.78rem">prod / n!</span></td>' +
        '<td class="mono">' + sci(Math.abs(bad.prod)) + ' and ' + sci(bad.fact) + '</td>' +
        '<td class="mono">' + (isFinite(bad.value) ? sci(bad.value, 6) : String(bad.value)) + '</td></tr>' +
        '</tbody></table>';

      var msg;
      if (n === 0) {
        msg = '<p>The empty case. The product \\(\\prod_{j=0}^{-1}\\) runs over no values of \\(j\\) at all and is ' +
          'declared to be \\(1\\); so is \\(0!\\). Both routes give \\(c_0 = 1\\) <em>provided</em> your accumulator ' +
          'started at \\(1\\). If it started at \\(0\\) you would see \\(0\\) here, and every sum on this page would ' +
          'come out exactly \\(1\\) too small.</p>';
      } else if (!broken && bad.fact < 1e15) {
        msg = '<p>The two routes agree, and at this size there is nothing to choose between them &mdash; which is ' +
          'exactly why the bug is so easy to ship. Watch the middle column as you drag \\(n\\) upward: the ' +
          'recurrence stays where it is, and the product route does not.</p>';
      } else if (!broken) {
        msg = '<p>The two routes still agree to full double precision, but look at what it costs. To report a number ' +
          'of size \\(' + sci(Math.abs(good)) + '\\), the product route is building \\(' + sci(Math.abs(bad.prod)) +
          '\\) and \\(' + sci(bad.fact) + '\\) and dividing one by the other, while the recurrence never holds ' +
          'anything bigger than \\(1\\). Carrying two enormous numbers so their ratio can come out small works right ' +
          'up until it doesn\'t.</p>';
      } else {
        msg = '<p><strong>The product route has broken.</strong> Double precision cannot represent numbers past about ' +
          '\\(1.8\\times10^{308}\\), and \\(n!\\) crosses that line at \\(n = 171\\). The division returns ' +
          '<span class="mono">' + String(bad.value) + '</span> while the true coefficient is a perfectly ordinary ' +
          '\\(' + sci(good, 6) + '\\). Nothing raised an error; the number is simply wrong.</p>';
      }

      coefOut.innerHTML = msg +
        '<p style="font-size:0.88rem;color:var(--text-muted)">The signs alternate from \\(n = 2\\) onwards, and the ' +
        'sizes settle into \\(\\left|c_n\\right| \\approx \\dfrac{1}{2\\sqrt{\\pi}\\,n^{3/2}}\\); here that estimate ' +
        'gives \\(' + (n > 0 ? sci(1 / (2 * Math.sqrt(Math.PI) * Math.pow(n, 1.5)), 4) : '\\text{---}') +
        '\\) against a true \\(\\left|c_n\\right| = ' + sci(Math.abs(good), 4) +
        '\\). That \\(n^{-3/2}\\) decay is the number controlling every convergence rate below.</p>';
      M411.typeset(coefOut);
    }

    nIn.addEventListener('input', drawCoef);
    document.querySelectorAll('.cas-n-preset').forEach(function (b) {
      b.addEventListener('click', function () {
        nIn.value = b.getAttribute('data-n');
        drawCoef();
      });
    });

    /* ---------------------------------------------------------------- *
     * 2. Problem 3.2.12 - plotting S(x,M) against sqrt(1+x)
     * ---------------------------------------------------------------- */
    var mIn = document.getElementById('cas-M'),
      mOut = document.getElementById('cas-M-out'),
      pCan = document.getElementById('cas-canvas'),
      pOut = document.getElementById('cas-plot-out'),
      errGrid = document.getElementById('cas-err-grid');

    var VIEWS = {
      full: { xlo: -2, xhi: 2, ylo: -1, yhi: 3, xstep: 0.5, ystep: 1, label: 'the window a CAS gives you by default' },
      left: { xlo: -1.15, xhi: -0.6, ylo: -0.1, yhi: 0.85, xstep: 0.1, ystep: 0.2, label: 'the left endpoint, magnified' },
      right: { xlo: 0.7, xhi: 1.35, ylo: 1.1, yhi: 1.75, xstep: 0.1, ystep: 0.1, label: 'the right endpoint, magnified' }
    };
    var view = 'full';

    // Term recurrence rather than Horner: it mirrors what a student would type,
    // and it never forms x^n and c_n separately (both of which overflow long
    // before their product does).
    function S(x, M) {
      var s = 1, t = 1;
      for (var n = 1; n <= M; n++) {
        t *= x * (0.5 - (n - 1)) / n;
        s += t;
      }
      return s;
    }

    function drawPlot() {
      var M = +mIn.value, V = VIEWS[view];
      mOut.textContent = 'M = ' + M;

      var d = M411.hidpi(pCan, 320), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 52, padR = 16, padT = 16, padB = 34;

      function X(x) { return padL + (x - V.xlo) / (V.xhi - V.xlo) * (W - padL - padR); }
      function Y(y) { return padT + (V.yhi - y) / (V.yhi - V.ylo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      ctx.font = '11px sans-serif';
      var g;
      for (g = Math.ceil(V.xlo / V.xstep) * V.xstep; g <= V.xhi + 1e-9; g += V.xstep) {
        ctx.beginPath(); ctx.moveTo(X(g), padT); ctx.lineTo(X(g), H - padB); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.textAlign = 'center';
        ctx.fillText((Math.abs(g) < 1e-9 ? 0 : g).toFixed(1), X(g), H - padB + 15);
      }
      for (g = Math.ceil(V.ylo / V.ystep) * V.ystep; g <= V.yhi + 1e-9; g += V.ystep) {
        ctx.beginPath(); ctx.moveTo(padL, Y(g)); ctx.lineTo(W - padR, Y(g)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.textAlign = 'right';
        ctx.fillText((Math.abs(g) < 1e-9 ? 0 : g).toFixed(V.ystep < 1 ? 1 : 0), padL - 8, Y(g) + 4);
      }

      // The two candidate boundaries, marked but not asserted.
      [-1, 1].forEach(function (b) {
        if (b < V.xlo || b > V.xhi) return;
        ctx.setLineDash([5, 4]); ctx.strokeStyle = '#c2c6cc'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(X(b), padT); ctx.lineTo(X(b), H - padB); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#9aa0a6'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('x = ' + b, X(b), padT + 12);
      });

      function curve(f, color, width, from) {
        ctx.strokeStyle = color; ctx.lineWidth = width;
        ctx.beginPath();
        var started = false;
        var margin = (V.yhi - V.ylo) * 4;
        for (var px = 0; px <= 720; px++) {
          var x = V.xlo + (V.xhi - V.xlo) * px / 720;
          if (x < from) { started = false; continue; }
          var y = f(x);
          if (!isFinite(y) || y < V.ylo - margin || y > V.yhi + margin) { started = false; continue; }
          started ? ctx.lineTo(X(x), Y(y)) : (ctx.moveTo(X(x), Y(y)), started = true);
        }
        ctx.stroke();
      }

      curve(function (x) { return Math.sqrt(1 + x); }, '#c9ccd1', 4, -1);
      curve(function (x) { return S(x, M); }, M411.colors.explore, 2.2, -Infinity);

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = '#9aa0a6'; ctx.fillText('\u221A(1+x)', padL + 8, padT + 16);
      ctx.fillStyle = M411.colors.explore; ctx.fillText('S(x, ' + M + ')', padL + 8, padT + 34);

      // Error grid at the points that decide the question.
      var pts = [-1, -0.99, -0.9, -0.5, 0.5, 0.9, 0.99, 1, 1.05, 1.2];
      var cells = '';
      pts.forEach(function (x) {
        var e = Math.abs(S(x, M) - Math.sqrt(1 + x));
        cells += '<div class="numcell ' + (e < 1e-3 ? 'good' : 'bad') + '">' +
          '<span class="nlab">x = ' + x + '</span><span class="nval">' + e.toExponential(2) + '</span></div>';
      });
      errGrid.innerHTML = cells;

      var at12 = S(1.2, M);
      pOut.innerHTML = '<p>\\(M = ' + M + '\\), showing ' + V.label + '. At the three points the problem keeps ' +
        'steering you towards: \\(S(-1,' + M + ') = ' + S(-1, M).toFixed(6) + '\\) against \\(\\sqrt{0} = 0\\); ' +
        '\\(S(1,' + M + ') = ' + S(1, M).toFixed(6) + '\\) against \\(\\sqrt{2} = 1.414214\\); and ' +
        '\\(S(1.2,' + M + ') = ' + (Math.abs(at12) > 1e4 ? sci(at12) : at12.toFixed(4)) +
        '\\) against \\(\\sqrt{2.2} = 1.483240\\).</p>';
      M411.typeset(pOut);
    }

    mIn.addEventListener('input', drawPlot);
    document.querySelectorAll('.cas-M-preset').forEach(function (b) {
      b.addEventListener('click', function () {
        mIn.value = b.getAttribute('data-m');
        drawPlot();
      });
    });
    document.querySelectorAll('.cas-view').forEach(function (b) {
      b.addEventListener('click', function () {
        view = b.getAttribute('data-view');
        document.querySelectorAll('.cas-view').forEach(function (o) { o.classList.remove('on'); });
        b.classList.add('on');
        drawPlot();
      });
    });

    /* ---------------------------------------------------------------- *
     * 3. Problem 3.2.13 - partial sums for pi/4
     * ---------------------------------------------------------------- */
    var bigN = document.getElementById('cas-N'),
      bigNOut = document.getElementById('cas-N-out'),
      piOut = document.getElementById('cas-pi-out'),
      piCan = document.getElementById('cas-pi-canvas');

    // P[k] = sum over n = 0..k, computed once.
    var P = new Array(NMAX + 1);
    (function () {
      var s = 0;
      for (var n = 0; n <= NMAX; n++) {
        s += C[n] * (n % 2 === 0 ? 1 : -1) / (2 * n + 1);
        P[n] = s;
      }
    })();

    var conv = 'excl';
    function partial(N) { return conv === 'excl' ? P[N - 1] : P[N]; }

    function decimals(err) {
      if (!(err > 0)) return 16;
      return Math.max(0, -Math.log10(err));
    }

    function drawPi() {
      var N = +bigN.value;
      bigNOut.textContent = 'N = ' + N;

      var s = partial(N), err = s - PI4, ae = Math.abs(err);

      piOut.innerHTML =
        '<p><span class="big mono">' + s.toFixed(10) + '</span> &nbsp;against&nbsp; ' +
        '<span class="big mono">' + PI4.toFixed(10) + '</span> \\(= \\pi/4\\)</p>' +
        '<p>Signed error \\(' + (err >= 0 ? '+' : '') + sci(err) + '\\) &mdash; the partial sums approach from ' +
        (err > 0 ? '<strong>above</strong>, because every term after the first is negative' : 'below') +
        ', so the error never changes sign and what you are holding is always an overestimate. That is roughly ' +
        '<strong>' + decimals(ae).toFixed(1) + ' correct decimal places</strong>.</p>' +
        '<p class="mono" style="font-size:0.88rem">|error| &times; N^(3/2) = ' +
        (ae * Math.pow(N, 1.5)).toFixed(5) + '</p>';
      M411.typeset(piOut);

      // log-log error curve
      var d = M411.hidpi(piCan, 250), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 56, padR = 16, padT = 16, padB = 34;
      var lxlo = 0, lxhi = Math.log10(NMAX), lylo = -8, lyhi = -1;
      function X(lx) { return padL + (lx - lxlo) / (lxhi - lxlo) * (W - padL - padR); }
      function Y(ly) { return padT + (lyhi - ly) / (lyhi - lylo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      ctx.font = '11px sans-serif';
      var e, k;
      for (e = -8; e <= -1; e++) {
        ctx.beginPath(); ctx.moveTo(padL, Y(e)); ctx.lineTo(W - padR, Y(e)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.textAlign = 'right';
        ctx.fillText('1e' + e, padL - 8, Y(e) + 4);
      }
      for (k = 0; k <= 3; k++) {
        ctx.beginPath(); ctx.moveTo(X(k), padT); ctx.lineTo(X(k), H - padB); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.textAlign = 'center';
        ctx.fillText('N=' + Math.pow(10, k), X(k), H - padB + 15);
      }

      // reference slope -3/2, anchored at the N = 10 point
      var anchor = Math.log10(Math.abs(P[9] - PI4));
      ctx.setLineDash([6, 4]); ctx.strokeStyle = M411.colors.scaffold; ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(X(1), Y(anchor));
      ctx.lineTo(X(lxhi), Y(anchor - 1.5 * (lxhi - 1)));
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = M411.colors.scaffold; ctx.textAlign = 'left'; ctx.font = 'bold 11px sans-serif';
      ctx.fillText('slope \u22123/2', X(1.15), Y(anchor) - 6);

      ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = 2;
      ctx.beginPath();
      var started = false;
      for (var m = 2; m <= NMAX; m++) {
        var ee = Math.abs(P[m - 1] - PI4);
        if (!(ee > 0)) { started = false; continue; }
        var lx = Math.log10(m), ly = Math.log10(ee);
        if (ly < lylo || ly > lyhi) { started = false; continue; }
        started ? ctx.lineTo(X(lx), Y(ly)) : (ctx.moveTo(X(lx), Y(ly)), started = true);
      }
      ctx.stroke();

      if (ae > 0 && Math.log10(ae) >= lylo && Math.log10(ae) <= lyhi) {
        ctx.fillStyle = M411.colors.check;
        ctx.beginPath(); ctx.arc(X(Math.log10(N)), Y(Math.log10(ae)), 4.5, 0, 2 * Math.PI); ctx.fill();
      }

      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('terms used (log scale)', (padL + W - padR) / 2, H - 6);
    }

    bigN.addEventListener('input', drawPi);
    document.querySelectorAll('.cas-N-preset').forEach(function (b) {
      b.addEventListener('click', function () {
        bigN.value = b.getAttribute('data-n');
        drawPi();
      });
    });
    document.querySelectorAll('.cas-conv').forEach(function (b) {
      b.addEventListener('click', function () {
        conv = b.getAttribute('data-conv');
        document.querySelectorAll('.cas-conv').forEach(function (o) { o.classList.remove('on'); });
        b.classList.add('on');
        drawPi();
      });
    });

    /* ---------------------------------------------------------------- *
     * 4. Problem 3.2.14(b) - S1 against S2
     * ---------------------------------------------------------------- */
    var rIn = document.getElementById('cas-race'),
      rOut = document.getElementById('cas-race-out'),
      rTable = document.getElementById('cas-race-table'),
      rCan = document.getElementById('cas-race-canvas'),
      rNote = document.getElementById('cas-race-note');

    var RMAX = 40, S1 = new Array(RMAX + 1), S2 = new Array(RMAX + 1);
    (function () {
      var a = 0, b = 0, root2 = Math.SQRT2;
      for (var n = 0; n <= RMAX; n++) {
        var sign = (n % 2 === 0 ? 1 : -1);
        a += sign * C[n] / (root2 * (2 * n + 3) * Math.pow(2, n));
        b += sign / (2 * n + 1);
        S1[n] = 16 * a;
        S2[n] = 4 * b;
      }
    })();

    function drawRace() {
      var N = +rIn.value;
      rOut.textContent = 'N = ' + N;

      var rows = '', n;
      for (n = 0; n <= N; n++) {
        var e1 = Math.abs(S1[n] - Math.PI), e2 = Math.abs(S2[n] - Math.PI);
        var assigned = (n === 5 || n === 10 || n === 15 || n === 20);
        rows += '<tr' + (assigned ? ' style="font-weight:600"' : '') + '>' +
          '<td class="mono">' + n + (assigned ? ' &starf;' : '') + '</td>' +
          '<td class="mono">' + S1[n].toFixed(11) + '</td>' +
          '<td class="mono">' + S2[n].toFixed(11) + '</td>' +
          '<td class="mono">' + decimals(e1).toFixed(1) + '</td>' +
          '<td class="mono">' + decimals(e2).toFixed(1) + '</td></tr>';
      }
      rTable.innerHTML =
        '<div style="max-height:340px;overflow-y:auto">' +
        '<table><thead><tr><th>N</th><th>S<sub>1</sub>(N)</th><th>S<sub>2</sub>(N)</th>' +
        '<th>digits, S<sub>1</sub></th><th>digits, S<sub>2</sub></th></tr></thead><tbody>' +
        rows + '</tbody></table></div>' +
        '<p style="font-size:0.82rem;color:var(--text-muted)">&starf; marks the four values the problem asks for. ' +
        '&pi; = 3.14159265359. "digits" counts correct decimal places.</p>';

      var d = M411.hidpi(rCan, 260), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 46, padR = 16, padT = 16, padB = 34;
      var ymax = 16;
      function X(v) { return padL + v / RMAX * (W - padL - padR); }
      function Y(v) { return padT + (ymax - v) / ymax * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      ctx.font = '11px sans-serif';
      var g;
      for (g = 0; g <= ymax; g += 4) {
        ctx.beginPath(); ctx.moveTo(padL, Y(g)); ctx.lineTo(W - padR, Y(g)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.textAlign = 'right';
        ctx.fillText(String(g), padL - 8, Y(g) + 4);
      }
      for (g = 0; g <= RMAX; g += 10) {
        ctx.beginPath(); ctx.moveTo(X(g), padT); ctx.lineTo(X(g), H - padB); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.textAlign = 'center';
        ctx.fillText(String(g), X(g), H - padB + 15);
      }

      function line(arr, color) {
        ctx.strokeStyle = color; ctx.lineWidth = 2.2;
        ctx.beginPath();
        for (var i = 0; i <= RMAX; i++) {
          var v = Math.min(decimals(Math.abs(arr[i] - Math.PI)), ymax);
          i ? ctx.lineTo(X(i), Y(v)) : ctx.moveTo(X(i), Y(v));
        }
        ctx.stroke();
      }
      line(S2, M411.colors.muted);
      line(S1, M411.colors.explore);

      [S1, S2].forEach(function (arr) {
        var v = Math.min(decimals(Math.abs(arr[N] - Math.PI)), ymax);
        ctx.fillStyle = M411.colors.check;
        ctx.beginPath(); ctx.arc(X(N), Y(v), 4.5, 0, 2 * Math.PI); ctx.fill();
      });

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = M411.colors.explore; ctx.fillText('S\u2081 (Newton)', padL + 10, padT + 16);
      ctx.fillStyle = M411.colors.muted; ctx.fillText('S\u2082 (Gregory\u2013Leibniz)', padL + 10, padT + 34);
      ctx.textAlign = 'center';
      ctx.fillText('correct decimal places vs N', (padL + W - padR) / 2, H - 6);

      var t1 = Math.abs(16 * C[20] / (Math.SQRT2 * 43 * Math.pow(2, 20)));
      var t2 = 4 / 41;
      rNote.innerHTML = '<p>At \\(N = ' + N + '\\): \\(S_1\\) has \\(' +
        decimals(Math.abs(S1[N] - Math.PI)).toFixed(1) + '\\) correct decimal places, \\(S_2\\) has \\(' +
        decimals(Math.abs(S2[N] - Math.PI)).toFixed(1) + '\\).</p>' +
        '<p>The \\(n = 20\\) terms, which is where the difference comes from: \\(S_1\\) is adding \\(' +
        sci(t1) + '\\), while \\(S_2\\) is still adding \\(' + sci(t2) + '\\) &mdash; eight orders of magnitude ' +
        'larger. Compare the two denominators and find the factor present in one and absent in the other.</p>';
      M411.typeset(rNote);
    }

    rIn.addEventListener('input', drawRace);

    /* ---------------------------------------------------------------- */
    drawCoef(); drawPlot(); drawPi(); drawRace();
    M411.onResize(function () { drawPlot(); drawPi(); drawRace(); });
  })();
</script>
