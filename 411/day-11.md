---
layout: day
title: "MATH 411 Day 11: Power Series Workshop"
day: 11
chapter_number: 3
chapter: "Calculus in the 17th and 18th Centuries"
day_title: "Power Series Workshop"
blurb: "Today's reading is nothing but problems. So this page is a workshop: the five moves that build new series out of old ones, demonstrated on functions that aren't yours to hand in &mdash; plus a machine for checking your own work."
reading: "Section 3.3, Additional Problems"
---

<div class="act explore">
  <div class="act-type">Orientation</div>
  <h2>You already have every series you need</h2>

  <p>Today's problems all say the same thing underneath: <em>without using Taylor's Theorem</em>, find a power series
    for some function. That restriction is the whole point. You are not meant to differentiate repeatedly and evaluate
    at a point &mdash; you are meant to <strong>start from a series you already have and transform it</strong>.</p>

  <p>Chapter 3 has handed you exactly four:</p>

  \[ \frac{1}{1-x} = \sum_{n=0}^{\infty}x^n \qquad e^x = \sum_{n=0}^{\infty}\frac{x^n}{n!} \]
  \[ \sin x = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!} \qquad \cos x = \sum_{n=0}^{\infty}\frac{(-1)^n
  x^{2n}}{(2n)!} \]

  <p>and one family, the binomial series, for \((1+x)^\alpha\). Everything today is built from these by five moves.
    The activities below demonstrate each move on a function that is <em>not</em> on your problem set, so the technique
    is visible and the answers stay yours.</p>
</div>

<div class="act scaffold">
  <div class="act-type">The Five Moves</div>
  <h2>Move 1&ndash;2: substitute, then multiply through</h2>

  <p>By far the most productive move. If \(f(x) = \sum a_n x^n\), then \(f(g(x)) = \sum a_n\,g(x)^n\) &mdash; you may
    substitute any expression for the variable, then tidy up.</p>

  <p><strong>Demonstration: a series for \(\dfrac{x^2}{1+3x^2}\).</strong></p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the demonstration</button>
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Step 1. Force the target into the shape \(\frac{1}{1 - \square}\).</div>
        <div class="sstep-body">
          <p>The geometric series is a machine that eats \(\frac{1}{1-u}\). Our denominator is \(1 + 3x^2\), so write
            it as \(1 - (-3x^2)\), which identifies \(u = -3x^2\). Getting the sign right here is where most of the
            errors live.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 2. Substitute and simplify the powers.</div>
        <div class="sstep-body">
          \[ \frac{1}{1+3x^2} = \sum_{n=0}^{\infty}(-3x^2)^n = \sum_{n=0}^{\infty}(-3)^n x^{2n} = 1 - 3x^2 + 9x^4 -
          27x^6 + \cdots \]
          <p>Note \((-3x^2)^n = (-3)^n x^{2n}\): the constant and the variable each get raised to the \(n\). Only even
            powers survive, which is what you'd expect from an even function.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 3. Multiply through by the leftover factor.</div>
        <div class="sstep-body">
          \[ \frac{x^2}{1+3x^2} = x^2\sum_{n=0}^{\infty}(-3)^n x^{2n} = \sum_{n=0}^{\infty}(-3)^n x^{2n+2} = x^2 - 3x^4
          + 9x^6 - \cdots \]
          <p>Multiplying by a power of \(x\) just shifts every exponent. Easy to do and easy to forget.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 4. Where is it valid?</div>
        <div class="sstep-body">
          <p>The geometric series needs \(|u| &lt; 1\), and here \(u = -3x^2\). So we need \(3x^2 &lt; 1\), that is
            \(|x| &lt; \frac{1}{\sqrt3}\).</p>
          <p><strong>Carry the region of validity through every substitution.</strong> It transforms along with
            everything else, and a series quoted without it is the Day 14 disaster waiting to happen.</p>
        </div>
      </li>
    </ol>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">The Five Moves</div>
  <h2>Move 3&ndash;4: differentiate, integrate</h2>

  <p>Both are done term by term. (Both are the interchange Day 8 flagged as running on credit &mdash; legitimate here,
    provable in Chapter 8.)</p>

  <p><strong>Demonstration: \(\displaystyle\int_0^x \frac{\sin t}{t}\,\mathrm{d}t\)</strong>, a function with no
    elementary antiderivative at all.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the demonstration</button>
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Step 1. Build the integrand's series by dividing.</div>
        <div class="sstep-body">
          \[ \frac{\sin t}{t} = \frac{1}{t}\left(t - \frac{t^3}{3!} + \frac{t^5}{5!} - \cdots\right) = 1 -
          \frac{t^2}{3!} + \frac{t^4}{5!} - \cdots \]
          <p>Dividing a series by \(t\) is legal here precisely because every term already carries a factor of \(t\).
            Notice this also repairs the hole at \(t=0\): the series is perfectly well behaved there and equals
            \(1\).</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 2. Integrate term by term.</div>
        <div class="sstep-body">
          \[ \int_0^x \frac{\sin t}{t}\,\mathrm{d}t = \sum_{n=0}^{\infty}\frac{(-1)^n}{(2n+1)!}\int_0^x t^{2n}\,
          \mathrm{d}t = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!\,(2n+1)} \]
          <p>which begins \(x - \frac{x^3}{18} + \frac{x^5}{600} - \cdots\). This is the <em>sine integral</em>
            \(\mathrm{Si}(x)\), and no combination of elementary functions equals it &mdash; but the series computes it
            to any accuracy you want.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 3. The differentiation move, and how to use it as a check.</div>
        <div class="sstep-body">
          <p>Differentiating goes the other way, term by term. It is worth using as a <em>free error check</em> on
            everything you do: differentiate your answer and see whether you get back what you should.</p>
          <p>For instance, differentiating the cosine series term by term:</p>
          \[ \frac{\mathrm{d}}{\mathrm{d}x}\left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots\right) = -x +
          \frac{x^3}{3!} - \frac{x^5}{5!} + \cdots = -\sin x \]
          <p>which is correct, and would have exposed an arithmetic slip in either series instantly. Get in the habit:
            every series you produce today can be checked by differentiating or integrating it back.</p>
        </div>
      </li>
    </ol>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">The Five Moves</div>
  <h2>Move 5: recentre</h2>

  <p>The last move is the one people find hardest, because the goal changes shape. "Expanded about \(a\)" means every
    power must be a power of \((x-a)\) &mdash; so the strategy is to <em>manufacture</em> \((x-a)\) inside the function
    and treat it as the new variable.</p>

  <p><strong>Demonstration: \(\dfrac{1}{3-x}\) expanded about \(a = 1\).</strong></p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the demonstration</button>
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Step 1. Introduce \((x-a)\) by adding and subtracting \(a\).</div>
        <div class="sstep-body">
          <p>We want \((x-1)\) to appear, so rewrite \(x\) as \((x-1) + 1\):</p>
          \[ 3 - x = 3 - \big[(x-1) + 1\big] = 2 - (x-1) \]
          <p>Purely cosmetic, and it's the entire trick. Every recentring problem starts here.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 2. Factor out the constant to expose \(\frac{1}{1-u}\).</div>
        <div class="sstep-body">
          <p>The geometric series needs a bare \(1\) in front, so pull out the \(2\):</p>
          \[ \frac{1}{3-x} = \frac{1}{2 - (x-1)} = \frac{1}{2}\cdot\frac{1}{1 - \frac{x-1}{2}} \]
          <p>Now it is exactly \(\frac{1}{1-u}\) with \(u = \frac{x-1}{2}\), scaled by \(\frac12\).</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 3. Expand, and tidy the constants.</div>
        <div class="sstep-body">
          \[ \frac{1}{3-x} = \frac12\sum_{n=0}^{\infty}\left(\frac{x-1}{2}\right)^n =
          \sum_{n=0}^{\infty}\frac{(x-1)^n}{2^{n+1}} \]
          <p>which begins \(\frac12 + \frac{x-1}{4} + \frac{(x-1)^2}{8} + \cdots\). Every power is a power of
            \((x-1)\), as required.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 4. Validity &mdash; and a sanity check worth doing every time.</div>
        <div class="sstep-body">
          <p>We need \(\left|\frac{x-1}{2}\right| &lt; 1\), so \(|x - 1| &lt; 2\), i.e. \(-1 &lt; x &lt; 3\). Sensible:
            the interval is centred on \(a=1\) and stops exactly where the function blows up, at \(x = 3\).</p>
          <p><strong>The check:</strong> substitute \(x = a\) into your answer. Every term with a positive power of
            \((x-a)\) dies, leaving the constant term, which must equal \(f(a)\). Here that gives \(\frac12\), and
            \(\frac{1}{3-1} = \frac12\). It takes five seconds and catches a surprising fraction of mistakes.</p>
        </div>
      </li>
    </ol>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Your Own Work</div>
  <h2>The series checker</h2>

  <p>Pick a practice function, enter the coefficients <em>you</em> derived, and see whether your polynomial tracks the
    real function. It will tell you <strong>whether</strong> you're right, not what the answer is &mdash; if your curve
    peels away from the grey one, the degree where it separates tells you roughly which coefficient to re-examine.</p>

  <p>These are extra practice, deliberately <em>not</em> the functions on your problem set. Once the method works here,
    it will work there.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d11-fn">Practice function</label>
      <select id="d11-fn"></select>
    </div>
    <div class="ctl" style="flex:1;min-width:260px;">
      <label for="d11-coeffs">Your coefficients \(a_0, a_1, a_2, \ldots\) (comma separated)</label>
      <input type="text" id="d11-coeffs" value="1, 0, -3, 0, 9" style="width:100%">
    </div>
  </div>

  <div class="ctl-row">
    <button class="btn411" id="d11-check">Check it</button>
    <span style="font-size:0.85rem;color:var(--text-muted);">fractions are fine &mdash; write them as
      <code>1/6</code></span>
  </div>

  <canvas class="plot" id="d11-canvas"></canvas>
  <div class="readout" id="d11-out"></div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on method</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">The problems say "without using Taylor's Theorem." What are you being asked to do instead?</p>
    <button class="mc-opt" type="button" data-key="a">Compute the coefficients numerically.</button>
    <button class="mc-opt" type="button" data-key="b">Transform a series you already have by substitution,
      multiplication, differentiation, integration or recentring.</button>
    <button class="mc-opt" type="button" data-key="c">Guess the pattern from the first few terms.</button>
    <div class="mc-fb" data-key="a">Numerics won't give you a general term, and the answers are wanted in closed
      form.</div>
    <div class="mc-fb" data-key="b">Correct. Taylor's Theorem is a universal method that works by brute force and tells
      you nothing about structure. The manipulation approach is faster in practice, keeps the region of validity in
      view, and &mdash; not incidentally &mdash; is how these series were actually discovered in the eighteenth
      century.</div>
    <div class="mc-fb" data-key="c">Guessing gives you no warrant and no region of validity. It's also how Day 9's
      Newton got into trouble.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">You substitute \(u = -5x^3\) into the geometric series. What happens to the region of validity?</p>
    <button class="mc-opt" type="button" data-key="a">It stays \(|x| &lt; 1\).</button>
    <button class="mc-opt" type="button" data-key="b">It becomes all of \(\mathbb{R}\).</button>
    <button class="mc-opt" type="button" data-key="c">It becomes \(|{-5x^3}| &lt; 1\), that is \(|x| &lt;
      5^{-1/3}\).</button>
    <div class="mc-fb" data-key="a">The condition was never about \(x\) &mdash; it was about whatever sits in the
      geometric series' slot. Substituting changes the occupant, so it changes the condition.</div>
    <div class="mc-fb" data-key="b">Substituting into a series can only inherit the original's restriction; it cannot
      remove it.</div>
    <div class="mc-fb" data-key="c">Correct. The requirement is always \(|u| &lt; 1\) where \(u\) is what you put in.
      Translate it back into a statement about \(x\) every single time &mdash; it is the half of the answer that is
      easiest to drop and most important to keep.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">To expand \(f\) about \(a\), what is the first move?</p>
    <button class="mc-opt" type="button" data-key="a">Rewrite the function so that \((x-a)\) appears explicitly, usually
      by replacing \(x\) with \((x-a)+a\).</button>
    <button class="mc-opt" type="button" data-key="b">Compute \(f(a)\), \(f'(a)\), \(f''(a), \ldots\)</button>
    <button class="mc-opt" type="button" data-key="c">Expand about \(0\) first, then substitute \(x \mapsto x-a\).</button>
    <div class="mc-fb" data-key="a">Correct, and it's a purely algebraic manoeuvre. Once \((x-a)\) is visible you can
      treat it as a single new variable and use any series you already know.</div>
    <div class="mc-fb" data-key="b">That's Taylor's Theorem, which today's problems explicitly rule out.</div>
    <div class="mc-fb" data-key="c">This does <em>not</em> work, and it's a common wrong turn. Substituting \(x-a\) for
      \(x\) in the series for \(f\) gives you the series for \(f(x-a)\) &mdash; a different function &mdash; not the
      series for \(f\) recentred. Try it on \(\frac{1}{1-x}\) with \(a=1\) and watch it fail.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">You've produced a series for some \(f\) about \(a\). What is the fastest check?</p>
    <button class="mc-opt" type="button" data-key="a">Verify the series converges.</button>
    <button class="mc-opt" type="button" data-key="b">Set \(x = a\): every term but the constant vanishes, and that
      constant must equal \(f(a)\).</button>
    <button class="mc-opt" type="button" data-key="c">Check that the coefficients decrease.</button>
    <div class="mc-fb" data-key="a">Worth doing, but slower &mdash; and convergence to <em>something</em> doesn't
      confirm it converges to \(f\).</div>
    <div class="mc-fb" data-key="b">Correct, and it costs nothing. A second nearly-free check: differentiate your series
      once and compare with \(f'(a)\). Between them these catch most sign and factorial errors immediately.</div>
    <div class="mc-fb" data-key="c">Coefficients often don't decrease &mdash; look at \(1 - 3x^2 + 9x^4 - 27x^6\) from
      the first demonstration, which converges perfectly well near \(0\).</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Every technique today produces a series <em>and</em> a region of validity. For a function like
      \(\frac{1}{3-x}\) expanded about \(1\), the region stopped exactly at the singularity. Will that always
      happen?</li>
    <li>Expanding the same function about different centres gives genuinely different series. What is the relationship
      between them? Should they agree wherever both converge?</li>
    <li>The sine integral has no elementary antiderivative, yet its series is easy. Does having a power series make a
      function "known"? What more would you want?</li>
    <li>Every move today used term-by-term differentiation or integration, or substitution into an infinite sum. Which
      of these do you now actually believe, and which are you taking on faith until Chapter 8?</li>
  </ol>
</div>

<script>
  (function () {
    // Practice functions, chosen so none of them is on today's problem set.
    var FNS = [
      {
        label: '1 / (1 + 3x²)', f: function (x) { return 1 / (1 + 3 * x * x); },
        lo: -0.5, hi: 0.5, note: 'geometric series with u = −3x²'
      },
      {
        label: 'x² / (1 − x)', f: function (x) { return x * x / (1 - x); },
        lo: -0.8, hi: 0.8, note: 'geometric series, then multiply through by x²'
      },
      {
        label: 'e^(−x/2)', f: function (x) { return Math.exp(-x / 2); },
        lo: -3, hi: 3, note: 'exponential series with u = −x/2'
      },
      {
        label: 'cos(2x)', f: function (x) { return Math.cos(2 * x); },
        lo: -3, hi: 3, note: 'cosine series with u = 2x'
      },
      {
        label: '1 / (4 + x²)', f: function (x) { return 1 / (4 + x * x); },
        lo: -1.6, hi: 1.6, note: 'factor out the 4 first, then substitute'
      },
      {
        label: 'x·e^x', f: function (x) { return x * Math.exp(x); },
        lo: -3, hi: 2.5, note: 'exponential series multiplied through by x'
      },
      {
        label: 'sinh x = (e^x − e^(−x))/2', f: function (x) { return Math.sinh(x); },
        lo: -3, hi: 3, note: 'combine two exponential series and watch terms cancel'
      }
    ];

    var sel = document.getElementById('d11-fn'),
      coefIn = document.getElementById('d11-coeffs'),
      canvas = document.getElementById('d11-canvas'),
      out = document.getElementById('d11-out');

    FNS.forEach(function (fn, i) {
      var o = document.createElement('option');
      o.value = String(i); o.textContent = fn.label;
      sel.appendChild(o);
    });

    // Accepts decimals and simple fractions like 1/6 or -3/40.
    function parseCoeffs(s) {
      var bad = [];
      var vals = s.split(',').map(function (piece, i) {
        var t = piece.trim();
        if (!t) return null;
        var m = t.match(/^(-?\d*\.?\d+)\s*\/\s*(-?\d*\.?\d+)$/);
        var v = m ? (+m[1]) / (+m[2]) : Number(t);
        if (!isFinite(v)) { bad.push(i); return null; }
        return v;
      });
      return { vals: vals.filter(function (v) { return v !== null; }), bad: bad };
    }

    function check() {
      var fn = FNS[+sel.value];
      var parsed = parseCoeffs(coefIn.value);
      var a = parsed.vals;

      var d = M411.hidpi(canvas, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      if (parsed.bad.length || !a.length) {
        out.innerHTML = '<p>Couldn\'t read ' + (a.length ? 'entr' + (parsed.bad.length > 1 ? 'ies' : 'y') + ' ' +
          parsed.bad.map(function (i) { return i + 1; }).join(', ') : 'anything') +
          '. Use numbers or simple fractions, separated by commas &mdash; for example <code>1, 0, -1/2, 0, 1/24</code>.</p>';
        return;
      }

      function poly(x) {
        var s = 0;
        for (var n = a.length - 1; n >= 0; n--) s = s * x + a[n];
        return s;
      }

      // sample to find both the plot window and the worst error
      var lo = fn.lo, hi = fn.hi, worst = 0, worstAt = lo;
      var ymin = Infinity, ymax = -Infinity;
      for (var i = 0; i <= 400; i++) {
        var x = lo + (hi - lo) * i / 400;
        var t = fn.f(x), p = poly(x);
        if (isFinite(t)) { ymin = Math.min(ymin, t); ymax = Math.max(ymax, t); }
        if (isFinite(p)) { ymin = Math.min(ymin, p); ymax = Math.max(ymax, p); }
        if (isFinite(t) && Math.abs(t - p) > worst) { worst = Math.abs(t - p); worstAt = x; }
      }
      var pad = (ymax - ymin) * 0.15 || 1;
      ymin -= pad; ymax += pad;

      var padL = 48, padR = 20, padT = 18, padB = 30;
      function X(x) { return padL + (x - lo) / (hi - lo) * (W - padL - padR); }
      function Y(y) { return padT + (ymax - y) / (ymax - ymin) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = 0; g <= 4; g++) {
        var v = ymin + (ymax - ymin) * g / 4;
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(v.toFixed(2), padL - 8, Y(v) + 4);
      }
      if (0 > ymin && 0 < ymax) {
        ctx.strokeStyle = '#999'; ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke();
      }

      function plot(f, color, width) {
        ctx.strokeStyle = color; ctx.lineWidth = width; ctx.beginPath();
        var started = false;
        for (var i = 0; i <= 600; i++) {
          var x = lo + (hi - lo) * i / 600, y = f(x);
          if (!isFinite(y)) { started = false; continue; }
          started ? ctx.lineTo(X(x), Y(y)) : (ctx.moveTo(X(x), Y(y)), started = true);
        }
        ctx.stroke();
      }
      plot(fn.f, '#c9ccd1', 4);
      plot(poly, M411.colors.check, 2.2);

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = '#9aa0a6'; ctx.fillText(fn.label, padL + 6, padT + 14);
      ctx.fillStyle = M411.colors.check; ctx.fillText('your series (' + a.length + ' terms)', padL + 6, padT + 32);

      // Judging a truncated series by raw error is hopeless: a *correct* series
      // cut off after N terms still misses by a lot away from the centre. What
      // actually distinguishes right from wrong is the ORDER OF CONTACT - how
      // fast the error dies as x -> 0. A correct N-term series has error O(x^N)
      // or better; a series whose first mistake is in a_k has error O(x^k).
      // So halve x repeatedly and read the order off the shrink rate.
      var r0 = Math.min(0.4, (hi - lo) / 8);
      var xs = [r0, r0 / 2, r0 / 4, r0 / 8, r0 / 16];
      var errs = xs.map(function (x) {
        var e = 0;
        [x, -x].forEach(function (s) {
          var t = fn.f(s);
          if (isFinite(t)) e = Math.max(e, Math.abs(t - poly(s)));
        });
        return e;
      });

      // Use consecutive pairs that are still above the floating-point noise floor.
      var orders = [];
      for (var q = 0; q < errs.length - 1; q++) {
        if (errs[q] > 1e-11 && errs[q + 1] > 1e-13) {
          orders.push(Math.log(errs[q] / errs[q + 1]) / Math.LN2);
        }
      }
      var order = orders.length ? orders[orders.length - 1] : Infinity;
      var k = Math.round(order);

      var verdict;
      if (!isFinite(order) || k >= a.length) {
        verdict = '<p><strong style="color:var(--a411-scaffold)">These agree.</strong> The gap shrinks like ' +
          '\\(x^{' + (isFinite(order) ? k : a.length) + '}\\) as \\(x \\to 0\\), which is exactly what a correct ' +
          'series truncated after ' + a.length + ' term' + (a.length === 1 ? '' : 's') + ' should do. Every ' +
          'coefficient you entered is right.</p>';
      } else {
        verdict = '<p><strong style="color:#d9534f">Something is off.</strong> The gap shrinks only like ' +
          '\\(x^{' + k + '}\\), when a correct ' + a.length + '-term series would manage \\(x^{' + a.length +
          '}\\). That points at the coefficient of \\(x^{' + k + '}\\) &mdash; your \\(a_0\\) through \\(a_{' +
          (k - 1) + '}\\) are doing their job, and \\(a_{' + k + '}\\) is the first one that isn\'t.</p>';
      }

      out.innerHTML = verdict +
        '<p>Largest gap anywhere in the plotted range: \\(' + worst.toExponential(2) + '\\) near \\(x = ' +
        worstAt.toFixed(2) + '\\). Disagreement out at the edges is expected and means nothing on its own &mdash; ' +
        'that is a partial sum running out of road. Only the behaviour near the centre is diagnostic.</p>' +
        '<p style="color:var(--text-muted);font-size:0.9rem;">Hint for this one: ' + fn.note + '.</p>';
      M411.typeset(out);
    }

    document.getElementById('d11-check').addEventListener('click', check);
    sel.addEventListener('change', check);
    coefIn.addEventListener('change', check);
    M411.onResize(check);
    check();
  })();
</script>
