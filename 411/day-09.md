---
layout: day
title: "MATH 411 Day 9: Newton's Binomial Series"
day: 9
chapter_number: 3
chapter: "Calculus in the 17th and 18th Centuries"
day_title: "Newton's Binomial Series"
blurb: "The binomial theorem describes \\((1+x)^N\\) for whole-number \\(N\\). Newton asked what happens if you write \\(N = \\tfrac12\\) anyway, and then checked his answer by squaring it."
reading: "Section 3.2, the \\(\\prod\\) convention through the binomial series for general \\(\\alpha\\)"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Why the series stops for some exponents and not others</h2>

  <p>Written with products instead of factorials, the binomial coefficient is</p>

  \[ \binom{\alpha}{n} = \frac{\alpha(\alpha-1)(\alpha-2)\cdots(\alpha-n+1)}{n!} =
  \frac{\prod_{j=0}^{n-1}(\alpha-j)}{n!} \]

  <p>and this version never mentions \(\alpha!\) &mdash; so nothing stops you writing down \(\alpha = \tfrac12\), or
    \(-1\), or \(\pi\). That is the whole of Newton's idea. Drag \(\alpha\) and watch the coefficients.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d9-alpha">Exponent \(\alpha\)</label>
      <input type="range" id="d9-alpha" min="-3" max="6" step="0.5" value="0.5">
    </div>
    <div class="ctl">
      <label>&nbsp;</label>
      <span class="mono" id="d9-alpha-out"></span>
    </div>
  </div>

  <div class="ctl-row">
    <button class="btn411 ghost d9-preset" data-a="3">\(\alpha = 3\)</button>
    <button class="btn411 ghost d9-preset" data-a="0.5">\(\alpha = \tfrac12\)</button>
    <button class="btn411 ghost d9-preset" data-a="-1">\(\alpha = -1\)</button>
  </div>

  <div id="d9-coeffs"></div>
  <div class="readout" id="d9-out"></div>

  <p>Step \(\alpha\) through the whole numbers and something abrupt happens: the coefficients go to zero and
    <em>stay</em> there. Step onto a half-integer and they never stop. The reason is visible in the product: when
    \(\alpha\) is a non-negative integer, the factor \((\alpha - j)\) hits zero exactly when \(j = \alpha\), killing
    that coefficient and every one after it. When \(\alpha\) is not an integer, no factor is ever zero.</p>

  <p>So for whole-number exponents the "infinite" series was secretly finite all along &mdash; it is the ordinary
    binomial theorem in disguise. For \(\alpha = \tfrac12\) it is a genuinely infinite object, and something entirely
    new.</p>

  <details class="hint">
    <summary>The \(\alpha = -1\) case, which you already know</summary>
    <p>Set \(\alpha = -1\) above and read off the coefficients: \(1, -1, 1, -1, \ldots\). So the binomial series claims
      \((1+x)^{-1} = 1 - x + x^2 - x^3 + \cdots\), which is just the geometric series with \(-x\) substituted for
      \(x\).</p>
    <p>This matters as evidence. The binomial series was <em>derived</em> only for non-negative integers, and here it
      is producing a correct answer for \(\alpha = -1\) &mdash; one we can verify independently. Two confirmations
      (whole numbers, and \(-1\)) are not a proof that it works for every \(\alpha\), but they are exactly the kind of
      thing that makes a mathematician willing to bet.</p>
  </details>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Why the whole-number case collapses to the familiar theorem</h2>

  <p>Before trusting the extension, make sure you believe the base case: that with the \(\prod\) convention, the
    "infinite" formula really is the binomial theorem when \(N\) is a non-negative integer.</p>

  <p><strong>Claim.</strong> For every non-negative integer \(N\),</p>

  \[ (1+x)^N = \sum_{n=0}^{\infty}\left(\frac{\prod_{j=0}^{n-1}(N-j)}{n!}\right)x^n \]

  <p>with only finitely many nonzero terms.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1. Check that the product formula reproduces \(\binom{N}{n}\) for \(n \le N\).
        </div>
        <div class="sstep-body">
          <p>Expand \(\frac{N!}{n!(N-n)!}\) by cancelling \((N-n)!\) from the top:</p>
          \[ \frac{N!}{n!(N-n)!} = \frac{N(N-1)\cdots(N-n+1)}{n!} = \frac{\prod_{j=0}^{n-1}(N-j)}{n!} \]
          <p>The numerator has exactly \(n\) factors, running from \(N\) down to \(N-n+1\). So for \(n \le N\) the two
            expressions agree, and the sum is the ordinary binomial theorem.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2. Now push past \(n = N\). What happens?</div>
        <div class="sstep-body">
          <p>The factorial version \(\frac{N!}{n!(N-n)!}\) is meaningless once \(n &gt; N\), since \((N-n)!\) asks for
            the factorial of a negative number. The product version has no such problem &mdash; it just keeps
            multiplying.</p>
          <p>And when \(n &gt; N\), the range \(j = 0, 1, \ldots, n-1\) includes \(j = N\), contributing a factor of
            \((N - N) = 0\). So the whole product is zero:</p>
          \[ \binom{N}{n} = 0 \quad\text{for } n &gt; N \]
          <p>Every term beyond the \(N\)th vanishes. The infinite sum has finitely many nonzero terms, and equals the
            finite binomial expansion. \(\blacksquare\)</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3. The convention at \(n = 0\), and why it isn't cheating.</div>
        <div class="sstep-body">
          <p>At \(n = 0\) the product \(\prod_{j=0}^{-1}(N-j)\) has <em>no factors at all</em>, and your reading
            declares it equal to \(1\). That looks like a dodge; it isn't. An empty product is \(1\) for the same
            reason an empty sum is \(0\): each is the value that leaves the operation unchanged when you append it.</p>
          <p>It's the same convention that makes \(0! = 1\), and it earns its keep by letting \(\sum_{n=0}^{\infty}\)
            include the constant term instead of writing \(1 + \sum_{n=1}^{\infty}\) separately. Your reading shows both
            forms and remarks that they "probably look the same at first" &mdash; the difference is exactly whether the
            \(n=0\) term is inside the sum or written out in front.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4. So what exactly did Newton do?</div>
        <div class="sstep-body">
          <p>He had a formula, valid for every non-negative integer \(\alpha\), whose right-hand side <em>continues to
              make sense</em> for other \(\alpha\). He proposed that the equation continues to hold there too.</p>
          <p>Notice how little that is. It is not a derivation; the derivation used \(N\) being a whole number in an
            essential way (it counted how many ways to choose terms from \(N\) factors). It is a bet that a formula
            outlives its proof &mdash; and the next activity looks at what such a bet is worth.</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Newton's leap, and the test he ran on it</h2>

  <p><strong>Click the step that is not justified by anything that came before it.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">For a non-negative integer \(N\), \((1+x)^N = \sum_{n=0}^{\infty}
        \frac{\prod_{j=0}^{n-1}(N-j)}{n!}x^n\), with all terms past \(n=N\) equal to zero.</button>
      <button class="fline" type="button">The right-hand side is defined for any exponent whatsoever &mdash; nothing in
        it requires \(N\) to be a whole number.</button>
      <button class="fline" type="button">Therefore the equation also holds for \(\alpha = \tfrac12\), giving a series
        for \(\sqrt{1+x}\).</button>
      <button class="fline" type="button">Squaring that series term by term begins \(1 + x + 0x^2 + 0x^3 + \cdots\),
        as it must if the series really is \(\sqrt{1+x}\).</button>
      <button class="fline" type="button">Newton concluded he had the right series and used it to compute
        \(\pi\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Established.</strong> That's exactly the scaffold above &mdash; a theorem, fully proved for
        non-negative integers.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>True, and it's the observation that makes the whole thing possible.</strong> Note carefully what it
        does and doesn't say: the right-hand side is <em>well defined</em> for any \(\alpha\). That is a statement about
        an expression parsing, not about an equation being true. Those are very different claims, and the next line
        slides from one to the other.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>That's the leap.</strong> Your reading is candid: "Newton did not prove that this series was correct
        (nor did we)."</p>
      <p>The reasoning is <em>an expression still makes sense, therefore the equation still holds</em> &mdash; and that
        is not a valid form of argument. Plenty of formulas fail outside the range where they were proved. \(\sum_{n=0}^{N}
        x^n = \frac{1-x^{N+1}}{1-x}\) is fine for finite \(N\), and Day 7 showed exactly how badly its infinite version
        behaves at \(x=2\).</p>
      <p>What makes Newton's leap <em>good practice</em> rather than reckless is what he did next: he tested it. Not a
        proof, but not nothing either &mdash; a falsifiable prediction that could have come out wrong and didn't. This
        is how a great deal of mathematics is actually made, and it's worth seeing the working method rather than only
        the polished result.</p>
      <p>Your reading records the eventual status honestly: "the binomial series is the correct series representation
        for all values of the exponent \(\alpha\) (though we haven't proved this yet)." True, provable, not yet
        proved.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Not a flaw &mdash; it's evidence, and it's the interesting part.</strong> If the series really equals
        \(\sqrt{1+x}\), then squaring it must give back exactly \(1+x\): the \(x^0\) and \(x^1\) coefficients should be
        \(1\), and every higher coefficient should vanish. Those cancellations are delicate, and there is no reason for
        them to occur unless something is right.</p>
      <p>Note what kind of evidence this is. Any single higher coefficient failing to vanish would have <em>disproved</em>
        the series outright. It survived a test it could have failed &mdash; which is worth much more than a test it
        could not have failed. (Working through those coefficients is your problem for today, so nothing more about
        them here.)</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>Reasonable, given the evidence he had &mdash; and it paid off.</strong> The resulting series for
        \(\pi\) converges dramatically faster than Gregory's, which was the entire point of the exercise.</p>
      <p>It's also a second, independent test: a series derived from an unproved conjecture, producing a number that can
        be checked against \(\pi\). Your reading notes it "convinced him even further." Confidence accumulating from
        repeated falsifiable checks is not proof, but it is not superstition either.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on extending a formula</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Why does the binomial series terminate for \(\alpha = 3\) but not \(\alpha = \tfrac12\)?</p>
    <button class="mc-opt" type="button" data-key="a">Because \(3\) is small and \(\tfrac12\) is a fraction.</button>
    <button class="mc-opt" type="button" data-key="b">Because \(3! \) is defined and \((\tfrac12)!\) is not.</button>
    <button class="mc-opt" type="button" data-key="c">Because the product \(\prod_{j=0}^{n-1}(\alpha - j)\) contains a
      zero factor once \(j\) reaches \(\alpha\) &mdash; which only happens if \(\alpha\) is a non-negative
      integer.</button>
    <div class="mc-fb" data-key="a">Size has nothing to do with it. \(\alpha = 100\) terminates; \(\alpha = 0.5\) does
      not.</div>
    <div class="mc-fb" data-key="b">Tempting, but the whole point of the \(\prod\) form is that no factorial of
      \(\alpha\) ever appears. That's what made the extension possible.</div>
    <div class="mc-fb" data-key="c">Correct. The factors run \(\alpha, \alpha-1, \alpha-2, \ldots\) When \(\alpha\) is a
      non-negative integer this sequence lands exactly on \(0\) and annihilates everything after. When \(\alpha =
      \tfrac12\) it steps \(\tfrac12, -\tfrac12, -\tfrac32, \ldots\), straddling zero without ever hitting it.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">What is \(\prod_{j=0}^{-1}(N-j)\) declared to be, and why?</p>
    <button class="mc-opt" type="button" data-key="a">\(0\), matching the convention \(\sum_{j=0}^{-1}s_j = 0\).</button>
    <button class="mc-opt" type="button" data-key="b">\(1\), because an empty product should leave a multiplication
      unchanged.</button>
    <button class="mc-opt" type="button" data-key="c">Undefined; the reading avoids the case.</button>
    <div class="mc-fb" data-key="a">The empty <em>sum</em> is \(0\); the empty <em>product</em> is \(1\). Each is the
      identity element for its own operation, so the two conventions are consistent rather than contradictory &mdash;
      your reading makes exactly this point.</div>
    <div class="mc-fb" data-key="b">Correct. It's the same reasoning that gives \(0! = 1\), and it exists so that the
      \(n = 0\) term can sit inside \(\sum_{n=0}^{\infty}\) rather than being written out in front.</div>
    <div class="mc-fb" data-key="c">The reading defines it explicitly, calling it "strange as this may look" but
      convenient.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">How did Newton test his conjectured series for \(\sqrt{1+x}\)?</p>
    <button class="mc-opt" type="button" data-key="a">He squared it and checked that he got \(1 + x\) back.</button>
    <button class="mc-opt" type="button" data-key="b">He proved it by induction on the exponent.</button>
    <button class="mc-opt" type="button" data-key="c">He differentiated it and compared with the chain rule.</button>
    <div class="mc-fb" data-key="a">Correct &mdash; and it's a genuinely good test, because it could have failed. The
      higher coefficients have no reason to cancel unless the series is right.</div>
    <div class="mc-fb" data-key="b">Induction moves from \(N\) to \(N+1\) through the integers; it cannot reach
      \(\tfrac12\) at all. That's precisely why the leap needed testing rather than proving.</div>
    <div class="mc-fb" data-key="c">A reasonable idea, but not what the reading records.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Your reading says the binomial series is correct for all \(\alpha\) "though we haven't proved this
      yet." How should you hold that?</p>
    <button class="mc-opt" type="button" data-key="a">As a warning that it might be false.</button>
    <button class="mc-opt" type="button" data-key="b">As a claim we should refuse to use until proved.</button>
    <button class="mc-opt" type="button" data-key="c">As a true statement, provable later, which we are using on credit
      &mdash; and the debt is being tracked.</button>
    <div class="mc-fb" data-key="a">The reading asserts it <em>is</em> correct. The gap is in our warrant for believing
      it, not in its truth.</div>
    <div class="mc-fb" data-key="b">That would stall the chapter entirely &mdash; and it isn't how mathematics is
      actually done. Results are often used before they're proved; what matters is knowing that you're doing it.</div>
    <div class="mc-fb" data-key="c">Correct, and the bookkeeping is the point. This chapter runs almost entirely on
      credit: term-by-term differentiation, term-by-term integration, rearranging products, and now this. The value of
      a phrase like "though we haven't proved this yet" is that it records the debt instead of hiding it.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Newton's argument is "the formula still makes sense, so it should still be true." Construct a formula where that
      reasoning fails &mdash; where the expression parses outside its proved range but the equation is false.</li>
    <li>Squaring the series and getting \(1+x\) is evidence, not proof. What <em>would</em> a proof need to establish
      that the numerical check cannot?</li>
    <li>For \(\alpha = -1\) the binomial series reproduces the geometric series, which Day 7 showed fails for \(|x| \ge
      1\). Does that tell you anything about where to expect the \(\alpha = \tfrac12\) series to be valid?</li>
    <li>Euler is about to solve the Basel problem by treating a power series as an infinite-degree polynomial and
      factoring it over its roots. Given what you've just watched Newton do, what's your prior on whether that will work
      &mdash; and on whether it will be proved?</li>
  </ol>
</div>

<script>
  (function () {
    var aIn = document.getElementById('d9-alpha'),
      aOut = document.getElementById('d9-alpha-out'),
      grid = document.getElementById('d9-coeffs'),
      out = document.getElementById('d9-out');

    var current = +aIn.value;

    function coeff(alpha, n) {
      var p = 1;
      for (var j = 0; j < n; j++) p *= (alpha - j);
      var f = 1;
      for (var k = 1; k <= n; k++) f *= k;
      return p / f;
    }

    function fmtA(a) {
      if (Math.abs(a - Math.round(a)) < 1e-9) return String(Math.round(a));
      return (a * 2 === Math.round(a * 2)) ? (Math.round(a * 2) + '/2') : a.toFixed(2);
    }

    function fmtC(c) {
      if (c === 0) return '0';
      if (Math.abs(c - Math.round(c)) < 1e-9) return String(Math.round(c));
      return c.toFixed(5);
    }

    function draw() {
      var a = current;
      aOut.textContent = 'α = ' + fmtA(a);

      var html = '<div class="numgrid" style="grid-template-columns:repeat(auto-fill,minmax(78px,1fr))">';
      var allZeroFrom = -1;
      for (var n = 0; n <= 11; n++) {
        var c = coeff(a, n);
        var isZero = Math.abs(c) < 1e-12;
        if (isZero && allZeroFrom < 0) allZeroFrom = n;
        if (!isZero) allZeroFrom = -1;
        html += '<div class="numcell ' + (isZero ? 'bad' : 'good') + '">' +
          '<span class="nlab">n = ' + n + '</span><span class="nval">' + fmtC(c) + '</span></div>';
      }
      html += '</div>';
      grid.innerHTML = html;

      var isInt = Math.abs(a - Math.round(a)) < 1e-9 && a >= 0;
      var msg;
      if (isInt) {
        msg = '<p>\\(\\alpha = ' + Math.round(a) + '\\) is a non-negative integer, so the factor \\((\\alpha - j)\\) ' +
          'hits zero at \\(j = ' + Math.round(a) + '\\). Every coefficient from \\(n = ' + (Math.round(a) + 1) +
          '\\) onward vanishes, and what looked like an infinite series is the ordinary binomial expansion of ' +
          '\\((1+x)^{' + Math.round(a) + '}\\) &mdash; ' + (Math.round(a) + 1) + ' terms and no more.</p>';
      } else if (Math.abs(a + 1) < 1e-9) {
        msg = '<p>\\(\\alpha = -1\\): the coefficients are \\(1, -1, 1, -1, \\ldots\\), so the series is ' +
          '\\(1 - x + x^2 - x^3 + \\cdots\\) &mdash; the geometric series with \\(-x\\) in place of \\(x\\). ' +
          'A case where we can check the answer independently, and it is right.</p>';
      } else {
        msg = '<p>\\(\\alpha = ' + fmtA(a) + '\\) is not a non-negative integer, so no factor \\((\\alpha - j)\\) is ' +
          'ever zero and the coefficients never stop. This is a genuinely infinite series &mdash; and nothing ' +
          'proved so far says the equation still holds here.</p>';
      }

      out.innerHTML = '<p>Coefficients \\(\\binom{\\alpha}{n} = \\frac{\\prod_{j=0}^{n-1}(\\alpha-j)}{n!}\\) ' +
        'for \\(\\alpha = ' + fmtA(a) + '\\):</p>' + msg;
      M411.typeset(out);
    }

    aIn.addEventListener('input', function () { current = +aIn.value; draw(); });
    document.querySelectorAll('.d9-preset').forEach(function (b) {
      b.addEventListener('click', function () {
        current = +b.getAttribute('data-a');
        aIn.value = current;
        draw();
      });
    });
    draw();
  })();
</script>
