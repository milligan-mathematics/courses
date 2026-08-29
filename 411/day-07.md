---
layout: day
title: "MATH 411 Day 7: Power Series and the Exponential"
day: 7
chapter_number: 3
chapter: "Calculus in the 17th and 18th Centuries"
day_title: "Power Series and the Exponential"
blurb: "Treat an infinite series as though it were a very long polynomial and remarkable things happen &mdash; including a differential equation that solves itself and hands you \\(e^x\\) as a byproduct."
reading: "Section 3.2, Definition 3.2.1 through the properties of \\(E(x)\\)"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The geometric series, and where it stops working</h2>

  <p>Multiply \(1 + x + x^2 + \cdots\) by \((1-x)\) and everything telescopes away except a \(1\), which gives the
    reading's first power series representation:</p>

  \[ \frac{1}{1-x} = 1 + x + x^2 + x^3 + \cdots \]

  <p>Purely formal algebra &mdash; no analysis anywhere. So it ought to hold for every \(x\). Drag \(x\) and watch the
    partial sums against the true value.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d7-x">\(x\)</label>
      <input type="range" id="d7-x" min="-2" max="2" step="0.01" value="0.5">
    </div>
    <div class="ctl">
      <label for="d7-n">Terms</label>
      <input type="range" id="d7-n" min="1" max="40" step="1" value="12">
    </div>
  </div>

  <canvas class="plot" id="d7-geom"></canvas>
  <div class="readout" id="d7-geom-out"></div>

  <p>Inside \(|x| &lt; 1\) the partial sums close in on \(\frac{1}{1-x}\). Outside, they don't merely converge slowly
    &mdash; they fly apart. Your reading points at the two worst cases:</p>

  \[ \frac{1}{0} = 1 + 1 + 1 + \cdots \qquad\text{and}\qquad \frac{1}{-1} = 1 + 2 + 2^2 + \cdots \]

  <p>That second one deserves a hard look. The left side is \(-1\). The right side is a sum of positive terms. Whatever
    has gone wrong is not a small numerical discrepancy &mdash; it's a sum of positive numbers coming out
    negative.</p>

  <p>Your reading's response is refreshingly honest: <em>"We are missing something important here, though it may not
      be clear exactly what."</em> Sit with that for a moment. The missing thing is the notion of convergence, it takes
    three more chapters to build properly, and until then this whole chapter operates on credit.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>\(E(x)\), which never breaks</h2>

  <p>Now the same experiment on the series the reading derives from the differential equation \(y' = y\):</p>

  \[ E(x) = \sum_{n=0}^{\infty}\frac{x^n}{n!} = 1 + \frac{x}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots \]

  <div class="ctl-row">
    <div class="ctl">
      <label for="d7-en">Terms</label>
      <input type="range" id="d7-en" min="1" max="30" step="1" value="4">
    </div>
  </div>

  <canvas class="plot" id="d7-exp"></canvas>
  <div class="readout" id="d7-exp-out"></div>

  <p>Compare the two widgets carefully, because the contrast is the point of the day. The geometric series has a wall
    at \(|x| = 1\) that no number of terms will get you past. \(E(x)\) has no wall anywhere: every partial sum is a
    polynomial, and adding terms pushes the agreement further out in both directions, without limit.</p>

  <p>Two series, both "infinite polynomials," behaving completely differently. Nothing in the formal manipulation of
    Chapter 3 can tell them apart &mdash; which is precisely why the formal manipulation is not enough.</p>

  <p>The factorials are what buy the good behaviour: \(n!\) eventually outruns \(x^n\) for <em>any</em> fixed \(x\), no
    matter how large. Watch the term sizes in the readout to see the crossover happen.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Solving \(y' = y\) by pretending it's a polynomial</h2>

  <p>This is the reading's Example 3.2.2, and it's the technique of the whole section: assume the answer is a power
    series, differentiate term by term, and let the equation tell you the coefficients.</p>

  <p>You already know the answer is \(e^x\). Ignore that. The point is the method &mdash; and the fact that it
    <em>constructs</em> the exponential rather than assuming it.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole derivation</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1. Make the assumption, and notice how big it is.</div>
        <div class="sstep-body">
          <p>Assume a solution exists and can be written as a power series:</p>
          \[ y = \sum_{n=0}^{\infty} a_n x^n = a_0 + a_1 x + a_2 x^2 + \cdots \]
          <p>Flag what has just been assumed: that a solution exists, that it has a power series representation, and
            that the representation is valid on some interval. None of these are free. Eighteenth-century practice was
            to assume all three and check the answer afterwards.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2. Differentiate &mdash; term by term.</div>
        <div class="sstep-body">
          \[ \frac{\mathrm{d}y}{\mathrm{d}x} = a_1 + 2a_2 x + 3a_3 x^2 + 4a_4 x^3 + \cdots \]
          <p>Here is the second big assumption: that the derivative of an infinite sum is the sum of the derivatives.
            For a finite polynomial that's just the sum rule applied finitely often. For infinitely many terms it is a
            genuine theorem with hypotheses &mdash; and Chapter 5 will show you a series where it <em>fails</em>.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3. Impose \(y' = y\) and match coefficients.</div>
        <div class="sstep-body">
          <p>Setting the two series equal and matching powers of \(x\) term by term:</p>
          \[ a_1 = a_0, \quad 2a_2 = a_1, \quad 3a_3 = a_2, \quad \ldots, \quad na_n = a_{n-1}, \quad\ldots \]
          <p>Matching coefficients is itself an assumption &mdash; that two power series agreeing as functions must
            agree coefficient by coefficient. True, and again a theorem rather than an observation.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4. Unwind the recursion.</div>
        <div class="sstep-body">
          <p>Each coefficient is determined by the one before it, so cascade all the way down to \(a_0\):</p>
          \[ a_n = \frac{1}{n}a_{n-1} = \frac{1}{n(n-1)}a_{n-2} = \cdots = \frac{1}{n!}a_0 \]
          <p>giving \(y = a_0\sum_{n=0}^{\infty}\frac{x^n}{n!}\). One free constant &mdash; exactly what you expect from
            a first-order differential equation.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 5. Use the initial condition, and name the result.</div>
        <div class="sstep-body">
          <p>At \(x = 0\) every term after the first vanishes, so \(y(0) = a_0\). The condition \(y(0) = 1\) gives
            \(a_0 = 1\), and</p>
          \[ E(x) = \sum_{n=0}^{\infty}\frac{x^n}{n!} \]
          <p>Now look at what you have. Not "the series for \(e^x\)" &mdash; a function <em>defined</em> by a series,
            about which we so far know only that \(E(0)=1\) and \(E' = E\). Everything else, including the fact that it
            deserves to be called an exponential, has to be proved from the series. That is exactly what the
            Properties in your reading do, and why they're worth the effort.</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Property 2, and a rearrangement you should not yet trust</h2>

  <p>Your reading proves \(E(x)E(y) = E(x+y)\) by multiplying the two series together and gathering the results. Here
    is the shape of that argument.</p>

  <p><strong>Click the step that assumes something this course has not yet earned.</strong></p>

  <div class="flaw-widget" data-flaw="2">
    <div class="flawlist">
      <button class="fline" type="button">Write \(E(x)E(y)\) as the product of two infinite series, and expand: every
        term of the first multiplies every term of the second.</button>
      <button class="fline" type="button">Collect the resulting infinitely many products into groups by total degree
        &mdash; all terms with \(x^iy^j\) where \(i+j=k\) go into group \(k\).</button>
      <button class="fline" type="button">Group \(k\) is \(\frac{1}{k!}\sum_{i=0}^{k}\binom{k}{i}x^iy^{k-i}\), since
        \(\frac{1}{i!\,j!} = \frac{1}{k!}\binom{k}{i}\) when \(i+j=k\).</button>
      <button class="fline" type="button">By the Binomial Theorem, group \(k\) equals
        \(\frac{1}{k!}(x+y)^k\).</button>
      <button class="fline" type="button">Summing the groups gives \(\sum_k \frac{(x+y)^k}{k!} = E(x+y)\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Already a leap, but not the one to focus on.</strong> "Multiply out" for two infinite series means
        forming infinitely many products &mdash; there is no finite distributive law being applied. Still, the more
        pointed problem is what happens to those products next.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>That's the step.</strong> The products \(\frac{x^i}{i!}\frac{y^j}{j!}\) arrive in <em>some</em> order,
        and this line gathers them into a completely different arrangement &mdash; by diagonals of total degree \(k\).
        That is a <strong>rearrangement of infinitely many terms</strong>, plus an insertion of parentheses around each
        group.</p>
      <p>For a finite sum, both moves are free: commutativity and associativity. For an infinite one, neither is. On
        Day 14 you will meet a convergent series that can be rearranged to sum to <em>any number you like</em>, and a
        series whose value changes depending on where you put the parentheses. So this step is not a formality. It is
        the exact move that is about to be shown unreliable in general.</p>
      <p>Is Property 2 therefore wrong? No &mdash; it's true, and the argument can be repaired completely. The repair
        needs a hypothesis nobody in this chapter has stated: the series for \(E\) converges <em>absolutely</em>, and
        absolutely convergent series <em>can</em> be rearranged freely. That's a theorem you'll be able to prove later.
        For now the honest position is: correct conclusion, argument running on credit.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Fine.</strong> Pure algebra with factorials: if \(i + j = k\) then \(\frac{1}{i!\,j!} =
        \frac{1}{k!}\cdot\frac{k!}{i!\,j!} = \frac{1}{k!}\binom{k}{i}\). Worth verifying on paper &mdash; it is the
        computational heart of the proof and it's finite.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Fine.</strong> The Binomial Theorem is a statement about a <em>finite</em> sum, and group \(k\) has
        exactly \(k+1\) terms. Nothing infinite happens inside a single group &mdash; which is exactly why the
        regrouping on line (2) was so appealing.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>Fine, given the earlier steps.</strong> Recognising \(\sum_k \frac{(x+y)^k}{k!}\) as \(E\) evaluated at
        \(x+y\) is just reading the definition. The weight was all carried by line (2).</p>
    </div>
  </div>

  <p>This is the pattern to carry through Chapter 3. The results are right. The arguments treat infinite sums as long
    polynomials. Every place that happens is a promissory note, and Chapters 4 through 6 are where the notes come due.
  </p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on infinite polynomials</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Why can't \(\sin x\) be a polynomial?</p>
    <button class="mc-opt" type="button" data-key="a">Because it's bounded and polynomials aren't.</button>
    <button class="mc-opt" type="button" data-key="b">Because it has infinitely many roots and a nonzero polynomial has
      only finitely many.</button>
    <button class="mc-opt" type="button" data-key="c">Because it isn't differentiable everywhere.</button>
    <div class="mc-fb" data-key="a">A correct argument, but not the reading's. (And it needs care: the constant
      polynomial \(0\) is bounded.) The root count is cleaner and completely elementary.</div>
    <div class="mc-fb" data-key="b">Correct. \(\sin x\) vanishes at every \(n\pi\), \(n \in \mathbb{Z}\) &mdash;
      infinitely many roots &mdash; while a polynomial of degree \(d\) has at most \(d\). So no polynomial can be
      \(\sin x\), and if we want a series representation it has to be genuinely infinite.</div>
    <div class="mc-fb" data-key="c">\(\sin x\) is differentiable everywhere, infinitely often.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Substituting \(x = \frac{1}{10}\) into the geometric series gives \(\frac{10}{9}\). What does the
      reading use that for?</p>
    <button class="mc-opt" type="button" data-key="a">To prove the series converges.</button>
    <button class="mc-opt" type="button" data-key="b">To define the decimal expansion of \(\frac{1}{9}\).</button>
    <button class="mc-opt" type="button" data-key="c">As a sanity check &mdash; it matches the familiar fact that
      \(1.111\ldots = \frac{10}{9}\).</button>
    <div class="mc-fb" data-key="a">It doesn't prove convergence; it's a consistency check on a formula obtained
      formally.</div>
    <div class="mc-fb" data-key="b">The reading goes the other way: it uses the already-known decimal fact as
      corroboration.</div>
    <div class="mc-fb" data-key="c">Correct, and worth noticing as a habit. Having derived something by suspect means,
      test it against a case you already trust. It doesn't make the derivation valid &mdash; \(x=2\) will show that
      &mdash; but it's how the eighteenth century built confidence.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">In the reading's derivation, where does \(E(x)\) come from?</p>
    <button class="mc-opt" type="button" data-key="a">It's constructed as the power series solving \(y'=y\) with
      \(y(0)=1\).</button>
    <button class="mc-opt" type="button" data-key="b">It's defined as \(e^x\), and the series is then computed from
      it.</button>
    <button class="mc-opt" type="button" data-key="c">It's the limit of \((1+\frac{1}{n})^{nx}\).</button>
    <div class="mc-fb" data-key="a">Correct, and the direction matters. The reading pointedly sets aside that the answer
      "is" \(e^x\) in order to emphasise the technique. \(E\) is <em>built</em> by the method, and then its properties
      are established from the series &mdash; which is why Properties 1&ndash;6 have to be proved rather than
      quoted.</div>
    <div class="mc-fb" data-key="b">Backwards. The comment in the reading says a few seconds' thought identifies the
      solution as \(e^x\), and then explicitly ignores that "in favour of emphasising the technique."</div>
    <div class="mc-fb" data-key="c">A legitimate alternative definition of the exponential, but not this one.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">The reading says series notation with \(\sum\) is preferable to writing out terms with ellipses.
      Why?</p>
    <button class="mc-opt" type="button" data-key="a">It's shorter.</button>
    <button class="mc-opt" type="button" data-key="b">Ellipses are not accepted in formal mathematics.</button>
    <button class="mc-opt" type="button" data-key="c">Because \(\sum\) carries an explicit formula for the general term,
      so the pattern can't be misread.</button>
    <div class="mc-fb" data-key="a">Often true and not the reason. Sometimes \(\sum\) notation is longer.</div>
    <div class="mc-fb" data-key="b">The reading explicitly permits ellipses when a formula isn't practical &mdash;
      provided "enough terms must be included to make the pattern clear to the reader."</div>
    <div class="mc-fb" data-key="c">Correct: "there can be no doubt about the pattern to the terms. After all, this
      notation contains a formula for the general term." With dots, you're asking the reader to guess, and readers guess
      wrong.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The geometric series fails at \(x=2\) by producing a positive sum equal to \(-1\). Before you have any theory of
      convergence, what would you say has gone wrong? Try to say it without using the word "converge."</li>
    <li>\(E(x)\) works for every \(x\) and \(\frac{1}{1-x}\) only for \(|x|&lt;1\). Looking at the two formulas, what
      feature of \(E\) do you think is responsible? Is there anything about \(\frac{1}{1-x}\) as a <em>function</em>
      that could have warned you where its series would stop?</li>
    <li>Step 2 of the scaffold differentiates an infinite series term by term. Write down what would have to be true for
      that to be legitimate. You will be able to check your guess against the real theorem in Chapter 8.</li>
    <li>The reading defines \(E\) and then proves it behaves like an exponential. What would it take to convince you
      that \(E(x)\) really <em>is</em> \(e^x\), rather than merely resembling it?</li>
  </ol>
</div>

<script>
  (function () {
    /* ---------------- geometric series ---------------- */
    var xIn = document.getElementById('d7-x'),
      nIn = document.getElementById('d7-n'),
      gCan = document.getElementById('d7-geom'),
      gOut = document.getElementById('d7-geom-out');

    function partials(x, N) {
      var s = 0, out = [];
      for (var k = 0; k < N; k++) { s += Math.pow(x, k); out.push(s); }
      return out;
    }

    function drawGeom() {
      var x = +xIn.value, N = +nIn.value;
      var sums = partials(x, N);
      var target = Math.abs(1 - x) < 1e-9 ? null : 1 / (1 - x);

      var d = M411.hidpi(gCan, 260), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 58, padR = 20, padT = 20, padB = 32;

      // A window that keeps the partial sums visible even when they explode.
      var finite = sums.filter(isFinite);
      var lo = Math.min.apply(null, finite), hi = Math.max.apply(null, finite);
      if (target !== null && isFinite(target)) { lo = Math.min(lo, target); hi = Math.max(hi, target); }
      var span = Math.max(hi - lo, 1e-6), mid = (hi + lo) / 2;
      lo = mid - span * 0.65; hi = mid + span * 0.65;

      function X(i) { return padL + (N === 1 ? 0.5 : i / (N - 1)) * (W - padL - padR); }
      function Y(v) { return padT + (hi - v) / (hi - lo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var gg = 0; gg <= 4; gg++) {
        var v = lo + (hi - lo) * gg / 4;
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(Math.abs(v) > 9999 ? v.toExponential(1) : v.toFixed(2), padL - 8, Y(v) + 4);
      }

      if (target !== null && isFinite(target) && target >= lo && target <= hi) {
        ctx.setLineDash([6, 4]); ctx.strokeStyle = M411.colors.scaffold; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(padL, Y(target)); ctx.lineTo(W - padR, Y(target)); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = M411.colors.scaffold; ctx.textAlign = 'left'; ctx.font = 'bold 11px sans-serif';
        ctx.fillText('1/(1−x) = ' + target.toFixed(4), padL + 4, Y(target) - 6);
      }

      ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = 2;
      ctx.beginPath();
      sums.forEach(function (v, i) { i ? ctx.lineTo(X(i), Y(v)) : ctx.moveTo(X(i), Y(v)); });
      ctx.stroke();
      sums.forEach(function (v, i) {
        ctx.fillStyle = M411.colors.explore;
        ctx.beginPath(); ctx.arc(X(i), Y(v), 3, 0, 2 * Math.PI); ctx.fill();
      });

      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('number of terms', (padL + W - padR) / 2, H - 8);

      var last = sums[sums.length - 1];
      var msg;
      if (Math.abs(x) < 1) {
        msg = '<p>\\(|x| &lt; 1\\): the partial sums are closing in. After ' + N + ' terms the gap is \\(' +
          Math.abs(last - target).toExponential(3) + '\\), and it keeps shrinking.</p>';
      } else if (Math.abs(x) === 1) {
        msg = '<p>\\(|x| = 1\\): exactly the boundary. At \\(x=1\\) the partial sums are \\(1, 2, 3, \\ldots\\) and ' +
          'march off to infinity while \\(\\frac{1}{1-x}\\) is undefined. At \\(x=-1\\) they oscillate \\(1, 0, 1, ' +
          '0, \\ldots\\) forever &mdash; the series from Day 14.</p>';
      } else {
        msg = '<p>\\(|x| &gt; 1\\): after ' + N + ' terms the partial sum is \\(' +
          (Math.abs(last) > 1e6 ? last.toExponential(3) : last.toFixed(3)) +
          '\\), while \\(\\frac{1}{1-x} = ' + target.toFixed(4) + '\\). They are not drifting apart slowly; ' +
          'each new term is <em>larger</em> than the last, so the gap grows without bound.</p>';
      }
      gOut.innerHTML = '<p>\\(x = ' + x.toFixed(2) + '\\), ' + N + ' terms.</p>' + msg;
      M411.typeset(gOut);
    }
    xIn.addEventListener('input', drawGeom);
    nIn.addEventListener('input', drawGeom);

    /* ---------------- E(x) ---------------- */
    var enIn = document.getElementById('d7-en'),
      eCan = document.getElementById('d7-exp'),
      eOut = document.getElementById('d7-exp-out');

    function drawExp() {
      var N = +enIn.value;
      var d = M411.hidpi(eCan, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      var padL = 50, padR = 20, padT = 18, padB = 30;
      var xlo = -5, xhi = 4, ylo = -6, yhi = 30;
      function X(x) { return padL + (x - xlo) / (xhi - xlo) * (W - padL - padR); }
      function Y(y) { return padT + (yhi - y) / (yhi - ylo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var gx = xlo; gx <= xhi; gx++) { ctx.beginPath(); ctx.moveTo(X(gx), padT); ctx.lineTo(X(gx), H - padB); ctx.stroke(); }
      for (var gy = ylo; gy <= yhi; gy += 6) {
        ctx.beginPath(); ctx.moveTo(padL, Y(gy)); ctx.lineTo(W - padR, Y(gy)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(String(gy), padL - 8, Y(gy) + 4);
      }
      ctx.strokeStyle = '#999'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke();

      function plot(f, color, width) {
        ctx.strokeStyle = color; ctx.lineWidth = width;
        ctx.beginPath();
        var started = false;
        for (var px = 0; px <= 500; px++) {
          var x = xlo + (xhi - xlo) * px / 500, y = f(x);
          if (!isFinite(y) || y < ylo - 40 || y > yhi + 40) { started = false; continue; }
          started ? ctx.lineTo(X(x), Y(y)) : (ctx.moveTo(X(x), Y(y)), started = true);
        }
        ctx.stroke();
      }

      plot(Math.exp, '#c9ccd1', 3.5);
      plot(function (x) {
        var s = 0, term = 1;
        for (var k = 0; k < N; k++) { s += term; term *= x / (k + 1); }
        return s;
      }, M411.colors.explore, 2.2);

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = '#9aa0a6'; ctx.fillText('e^x', W - padR - 90, padT + 16);
      ctx.fillStyle = M411.colors.explore; ctx.fillText(N + '-term partial sum', W - padR - 90, padT + 34);

      // where do the terms turn over for a sample x?
      var xs = 4, biggest = 0, bi = 0, term = 1;
      for (var k = 0; k < 20; k++) { if (term > biggest) { biggest = term; bi = k; } term *= xs / (k + 1); }

      function val(x, n) { var s = 0, t = 1; for (var i = 0; i < n; i++) { s += t; t *= x / (i + 1); } return s; }
      eOut.innerHTML =
        '<p>With ' + N + ' terms: at \\(x=1\\) the partial sum is \\(' + val(1, N).toFixed(8) +
        '\\) against \\(e = 2.71828183\\); at \\(x=4\\) it is \\(' + val(4, N).toFixed(4) +
        '\\) against \\(e^4 = ' + Math.exp(4).toFixed(4) + '\\); at \\(x=-3\\) it is \\(' + val(-3, N).toFixed(6) +
        '\\) against \\(e^{-3} = ' + Math.exp(-3).toFixed(6) + '\\).</p>' +
        '<p>For \\(x = 4\\) the terms \\(\\frac{4^n}{n!}\\) <em>grow</em> until \\(n = ' + bi + '\\) and shrink ' +
        'thereafter &mdash; once \\(n\\) passes \\(x\\), each new factor \\(\\frac{x}{n}\\) is less than one. ' +
        'That crossover happens for every \\(x\\), however large; it just happens later. This is why \\(E\\) has ' +
        'no wall.</p>';
      M411.typeset(eOut);
    }
    enIn.addEventListener('input', drawExp);

    M411.onResize(function () { drawGeom(); drawExp(); });
    drawGeom();
    drawExp();
  })();
</script>
