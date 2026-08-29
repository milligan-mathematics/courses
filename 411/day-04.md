---
layout: day
title: "MATH 411 Day 4: The Archimedean Property"
day: 4
chapter_number: 2
chapter: "Real and Rational"
day_title: "The Archimedean Property"
blurb: "Emptying an ocean with a teaspoon, squeezing a rational into an impossibly small gap, and the assumption about infinitely small numbers that took 200 years to make honest."
reading: "Theorem 2.0.11 (density of rationals and irrationals) through Principle 2.0.12 (the Archimedean Property)"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The teaspoon and the ocean</h2>

  <p>The Archimedean Property says: given any two positive real numbers \(a\) and \(b\), there is a positive integer
    \(n\) with \(na > b\). The reading gives you the picture &mdash; you can empty an ocean \(b\) with a teaspoon \(a\),
    as long as you're willing to dip the teaspoon \(n\) times.</p>

  <p>That sounds obvious. It's worth spending sixty seconds finding out <em>how</em> obvious, because the whole point of
    the reading is that this "obvious" statement is doing real work.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d4-a">Teaspoon \(a\)</label>
      <input type="range" id="d4-a" min="-40" max="1" step="1" value="0">
      <span id="d4-a-out" class="mono"></span>
    </div>
    <div class="ctl">
      <label for="d4-b">Ocean \(b\)</label>
      <input type="range" id="d4-b" min="0" max="90" step="1" value="24">
      <span id="d4-b-out" class="mono"></span>
    </div>
  </div>

  <div class="readout" id="d4-teaspoon"></div>

  <p>Push the teaspoon slider all the way down and the ocean slider all the way up. The number of scoops becomes
    ridiculous &mdash; but it stays a <em>number</em>. That is the entire content of the Archimedean Property: no matter
    how lopsided \(a\) and \(b\) are, finitely many copies of \(a\) will always overshoot \(b\).</p>

  <h3>Now break it</h3>

  <p>Leibniz wanted a quantity \(\mathrm{d}x\) that is not zero, but is smaller than every positive real number. Suppose
    such a thing existed. Then for <em>every</em> positive integer \(n\):</p>

  <div class="readout" id="d4-infinitesimal"></div>

  <p>No slider can help you here, because there is no \(n\) to find. An infinitesimal is precisely a number for which
    the teaspoon never empties the ocean &mdash; adding \(\mathrm{d}x\) to itself a billion billion times still doesn't
    get you past \(10^{-1000}\). So a number system containing infinitesimals is a number system in which the
    Archimedean Property is <strong>false</strong>.</p>

  <p>Hold on to that. It is the cleanest way to say what the mathematicians of the 1600s and 1700s were actually doing:
    computing inside a number system whose rules they had not written down, and which contradicted a property everyone
    assumed without stating.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Squeezing a rational into a gap you can't see</h2>

  <p>Theorem 2.0.11(a) says that between any two distinct real numbers there is a rational number. The proof sketch in
    the reading is not just an existence argument &mdash; it's a <em>recipe</em>, and the Archimedean Property is the
    step that makes the recipe run. Here it is, executing.</p>

  <p>Pick two real numbers \(\beta &lt; \alpha\), as close together as you like:</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d4-beta">\(\beta\) (smaller)</label>
      <input type="text" id="d4-beta" value="0.7071067">
    </div>
    <div class="ctl">
      <label for="d4-alpha">\(\alpha\) (larger)</label>
      <input type="text" id="d4-alpha" value="0.70710678">
    </div>
    <div class="ctl">
      <label>&nbsp;</label>
      <button class="btn411" id="d4-run">Find a rational between them</button>
    </div>
  </div>

  <div class="ctl-row">
    <button class="btn411 ghost d4-preset" data-b="1.414" data-a="1.4142135623730951">1.414 and \(\sqrt2\)</button>
    <button class="btn411 ghost d4-preset" data-b="3.14159265" data-a="3.142857142857143">\(\pi\) and \(22/7\)</button>
    <button class="btn411 ghost d4-preset" data-b="0.333333333" data-a="0.3333333334">two near-thirds</button>
  </div>

  <canvas class="plot" id="d4-canvas"></canvas>

  <div class="readout" id="d4-squeeze"></div>

  <p>The top line is the two numbers at their own scale: one dot, because at that scale they are one dot. The bottom
    line is the same picture multiplied by \(n\) &mdash; and multiplying by \(n\) is exactly what the Archimedean
    Property buys you. It stretches the gap past width \(1\), and once a gap is wider than \(1\) it <em>has</em> to
    contain an integer. Divide that integer back by \(n\) and you have your rational.</p>

  <details class="hint">
    <summary>Why does a gap of width more than 1 have to contain an integer?</summary>
    <p>Because the integers are spaced exactly \(1\) apart. If an open interval \((u, v)\) with \(v - u &gt; 1\) missed
      every integer, it would have to fit strictly between two consecutive integers \(k\) and \(k+1\) &mdash; but that
      would force \(v - u &lt; 1\). The concrete choice in the widget above is \(m = \lfloor n\beta \rfloor + 1\): the
      very first integer strictly past the left end.</p>
  </details>

  <details class="hint">
    <summary>What happens if I make the gap tiny &mdash; like \(10^{-8}\)?</summary>
    <p>Then \(n\) has to be enormous, and the rational \(m/n\) you get out has an enormous denominator. That is worth
      noticing: the theorem promises a rational in <em>every</em> gap, but it never promises a <em>simple</em> one. The
      smaller the gap, the uglier the fraction. Try the "two near-thirds" preset and look at the size of \(m\) and
      \(n\).</p>
  </details>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Build one yourself: the Archimedean Property in \(\varepsilon\) clothing</h2>

  <p>Here is the form in which you will use the Archimedean Property for the rest of the semester &mdash; probably
    hundreds of times, usually without announcing it:</p>

  <p><strong>Claim.</strong> For every real number \(\varepsilon &gt; 0\) there is a positive integer \(n\) such that
    \(\dfrac{1}{n} &lt; \varepsilon\).</p>

  <p>Before you reveal anything: what are the two positive numbers you're going to hand to the Archimedean Property?
    Commit to an answer, then step through.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1. What are we given, and what do we want?</div>
        <div class="sstep-body">
          <p>Given: a real number \(\varepsilon &gt; 0\). Wanted: <em>some</em> positive integer \(n\) with \(1/n &lt;
            \varepsilon\).</p>
          <p>Note the shape of the goal. It is an <em>existence</em> claim, so the proof has to end by producing an
            \(n\) &mdash; and the Archimedean Property is a machine whose output is exactly that.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2. Rewrite the goal so the Archimedean Property can reach it.</div>
        <div class="sstep-body">
          <p>The Property talks about \(na &gt; b\), not about \(1/n\). So clear the fraction. Since \(n &gt; 0\) and
            \(\varepsilon &gt; 0\), the inequalities</p>
          \[ \frac{1}{n} &lt; \varepsilon \qquad\text{and}\qquad n\varepsilon &gt; 1 \]
          <p>are equivalent &mdash; multiply both sides by \(n/\varepsilon\), which is positive, so the inequality does
            not flip. Our new goal: find a positive integer \(n\) with \(n\varepsilon &gt; 1\).</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3. Feed the right two numbers to the Property.</div>
        <div class="sstep-body">
          <p>Compare \(n\varepsilon &gt; 1\) against \(na &gt; b\). Reading them off against each other, take \(a =
            \varepsilon\) and \(b = 1\).</p>
          <p>Both are positive &mdash; \(\varepsilon\) by hypothesis, \(1\) because it is \(1\) &mdash; so the
            Archimedean Property applies and hands us a positive integer \(n\) with \(n\varepsilon &gt; 1\).</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4. Walk it back to the original goal.</div>
        <div class="sstep-body">
          <p>That \(n\) satisfies \(n\varepsilon &gt; 1\), which by Step 2 is the same statement as \(1/n &lt;
            \varepsilon\). That is what we wanted, so we're done. \(\blacksquare\)</p>
          <p>The whole proof is three lines. What makes it worth doing slowly is Step 3: almost every use of the
            Archimedean Property is the work of noticing <em>which</em> two positive numbers to play the roles of \(a\)
            and \(b\).</p>
        </div>
      </li>

    </ol>
  </div>

  <details class="hint">
    <summary>One thing to check before you move on</summary>
    <p>Where did the proof use \(\varepsilon &gt; 0\), as opposed to \(\varepsilon \ge 0\)? Two places, and both are
      fatal if you drop the hypothesis. Find them. (Look at the multiplication in Step 2 and at the word "positive" in
      Step 3.)</p>
  </details>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Leibniz differentiates \(y = x^2\)</h2>

  <p>The reading tells you that seventeenth- and eighteenth-century mathematicians got enormous mileage out of
    infinitesimals despite their being "foundationally suspect." Here is a calculation in that style. Every step was
    considered legitimate at the time, and the answer it produces is correct.</p>

  <p><strong>Click the line a modern analyst would refuse to sign.</strong></p>

  <div class="flaw-widget" data-flaw="5">
    <div class="flawlist">
      <button class="fline" type="button">Let \(\mathrm{d}x\) be an infinitely small quantity: \(\mathrm{d}x \neq 0\),
        but \(\mathrm{d}x\) is smaller than every positive real number.</button>
      <button class="fline" type="button">Let \(y = x^2\). Displacing \(x\) by \(\mathrm{d}x\) displaces \(y\) by
        \(\mathrm{d}y\), so \(y + \mathrm{d}y = (x + \mathrm{d}x)^2 = x^2 + 2x\,\mathrm{d}x + (\mathrm{d}x)^2\).</button>
      <button class="fline" type="button">Subtract \(y = x^2\) from both sides: \(\mathrm{d}y = 2x\,\mathrm{d}x +
        (\mathrm{d}x)^2\).</button>
      <button class="fline" type="button">Divide both sides by \(\mathrm{d}x\): \(\dfrac{\mathrm{d}y}{\mathrm{d}x} = 2x
        + \mathrm{d}x\).</button>
      <button class="fline" type="button">Since \(\mathrm{d}x\) is infinitely small compared to \(2x\), discard it:
        \(\dfrac{\mathrm{d}y}{\mathrm{d}x} = 2x\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Not the flaw &mdash; but you have found the deepest problem.</strong> This line isn't a mistake in the
        derivation; it's the <em>assumption the derivation runs on</em>. And you now know exactly what it costs: a
        nonzero quantity smaller than every positive real is precisely a counterexample to the Archimedean Property. So
        line (1) is not a statement about real numbers at all. Berkeley attacked this in 1734, calling infinitesimals
        "the ghosts of departed quantities."</p>
      <p>The remarkable epilogue, which the reading mentions: Abraham Robinson showed in the 1960s that line (1)
        <em>can</em> be made completely rigorous &mdash; by building a larger, deliberately non-Archimedean number
        system. The line isn't nonsense. It's just not about \(\mathbb{R}\).</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Not the flaw.</strong> This is ordinary algebra: \((x+h)^2 = x^2 + 2xh + h^2\) holds for any \(h\)
        whatsoever. Nothing about \(\mathrm{d}x\) being small is being used yet.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Not the flaw.</strong> Subtracting equals from equals. Still pure algebra.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Not the flaw &mdash; but keep your finger on it.</strong> This division is legal only because
        \(\mathrm{d}x \neq 0\), which line (1) explicitly promised. Remember that you needed \(\mathrm{d}x \neq 0\)
        here, and then look at what the next line does.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>That's the one.</strong> Line (4) divides by \(\mathrm{d}x\), which requires \(\mathrm{d}x \neq 0\).
        Line (5) throws \(\mathrm{d}x\) away, which requires \(\mathrm{d}x = 0\). The same symbol is nonzero and zero
        one line apart. That is not a small bookkeeping slip &mdash; it is a contradiction sitting in the middle of a
        calculation that gets the right answer.</p>
      <p>This is the thing you should find genuinely uncomfortable: <em>the method works.</em> It produced correct
        derivatives, correct series, correct physics, for roughly two hundred years. The project of this course is to
        keep every one of those answers while replacing line (5) with something that can be defended &mdash; and the
        replacement, when it arrives, will be the limit.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions that separate what the reading said from what it didn't</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Does the Archimedean Property hold in \(\mathbb{Q}\)?</p>
    <button class="mc-opt" type="button" data-key="a">No &mdash; it's what distinguishes \(\mathbb{R}\) from
      \(\mathbb{Q}\).</button>
    <button class="mc-opt" type="button" data-key="b">Yes &mdash; it holds perfectly well in \(\mathbb{Q}\).</button>
    <button class="mc-opt" type="button" data-key="c">Only for rationals with denominator a power of 10.</button>
    <div class="mc-fb" data-key="a">This is the most common wrong answer, and it's worth understanding why it's wrong.
      \(\mathbb{Q}\) is Archimedean: given positive rationals \(a = p/q\) and \(b = r/s\), you can absolutely find an
      integer \(n\) with \(na &gt; b\). The gap between \(\mathbb{Q}\) and \(\mathbb{R}\) is <em>completeness</em>
      &mdash; \(\mathbb{Q}\) has holes where numbers like \(\sqrt{2}\) should be &mdash; not the Archimedean Property.
    </div>
    <div class="mc-fb" data-key="b">Correct. Both \(\mathbb{Q}\) and \(\mathbb{R}\) are Archimedean. What separates
      them is that \(\mathbb{Q}\) has holes and \(\mathbb{R}\) doesn't &mdash; the property Newton simply assumed when
      he decided there was a number sitting where \(\sqrt2\) belongs.</div>
    <div class="mc-fb" data-key="c">No &mdash; nothing here depends on decimal representation. Given any two positive
      rationals \(p/q\) and \(r/s\), the integer \(n = rq + 1\) already does the job.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Between any two distinct reals there is a rational. Does it follow that \(\mathbb{Q}\) and
      \(\mathbb{R}\) contain "the same amount" of numbers?</p>
    <button class="mc-opt" type="button" data-key="a">Yes &mdash; if you can always find a rational in any gap, there
      can't be room for extra reals.</button>
    <button class="mc-opt" type="button" data-key="b">Yes, and that's why the two pictures in the reading look
      identical.</button>
    <button class="mc-opt" type="button" data-key="c">No &mdash; density says nothing about size.</button>
    <div class="mc-fb" data-key="a">Tempting, and false &mdash; this is exactly the intuition Cantor demolished. Being
      unable to draw a gap between the rationals is not the same as there being no room. In fact "almost all" reals are
      irrational, in a sense that can be made precise.</div>
    <div class="mc-fb" data-key="b">Half right and half wrong. The pictures do look identical, but not because the sets
      are the same size &mdash; they aren't. They look identical because our drawing tools can't resolve the holes.
    </div>
    <div class="mc-fb" data-key="c">Correct. Density is a statement about <em>where</em> the rationals sit, not about
      how many there are. \(\mathbb{Q}\) is dense in \(\mathbb{R}\) and yet strictly smaller in a sense you'll meet when
      you see Cantor's diagonal argument.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">The reading shows sketches of \(\mathbb{R}\) and \(\mathbb{Q}\) that look exactly the same. What is
      the author's point?</p>
    <button class="mc-opt" type="button" data-key="a">That \(\mathbb{R}\) and \(\mathbb{Q}\) really are the same
      set.</button>
    <button class="mc-opt" type="button" data-key="b">That our pictures are going to fail us, and we'll have to reason
      without them.</button>
    <button class="mc-opt" type="button" data-key="c">That the figure was drawn carelessly.</button>
    <div class="mc-fb" data-key="a">No &mdash; they're radically different sets. The joke of the figure is that the
      difference is invisible.</div>
    <div class="mc-fb" data-key="b">Correct, and it's a warning about the rest of the course. The holes in \(\mathbb{Q}\)
      are genuinely there; the non-holes are packed so tightly that no drawing can separate them. From here on, sketches
      are aids to imagination, not evidence &mdash; which is precisely why we need proofs.</div>
    <div class="mc-fb" data-key="c">The figure is exactly as careless as it has to be. No more accurate drawing is
      possible.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">The reading says the Archimedean Property "is no longer taken as an unproved axiom." What is its
      status now?</p>
    <button class="mc-opt" type="button" data-key="a">It's been found to be false, and is kept only as an
      approximation.</button>
    <button class="mc-opt" type="button" data-key="b">It's still an axiom; the reading means we don't emphasize
      it.</button>
    <button class="mc-opt" type="button" data-key="c">It's a theorem &mdash; a consequence of the other axioms for
      \(\mathbb{R}\).</button>
    <div class="mc-fb" data-key="a">No. It is true in \(\mathbb{R}\). It fails only in deliberately constructed number
      systems that contain infinitesimals &mdash; which is exactly why those systems are called
      <em>non-Archimedean</em>.</div>
    <div class="mc-fb" data-key="b">Not quite. It genuinely has been demoted from assumption to consequence.</div>
    <div class="mc-fb" data-key="c">Correct. It follows from completeness &mdash; the axiom saying \(\mathbb{R}\) has no
      holes. You'll do this derivation on Day 33, when the Nested Interval Property, Bolzano&ndash;Weierstrass, the
      Least Upper Bound Property and the Archimedean Property all turn out to be different faces of one idea. For now
      the reading asks you to accept it "just as Archimedes did."</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The reading says that if the number line has holes in it, Newton's picture of a quantity "generated by
      continuous motion" is impossible, because there's no way to jump the gaps. Push on that. What would it actually
      look like for a point to move continuously along \(\mathbb{Q}\) &mdash; and where exactly does the picture
      break?</li>
    <li>Newton filled in the hole at \(\sqrt2\) by declaring that a number is there. What entitles him to that? Is there
      a difference between <em>assuming</em> the hole is filled and <em>constructing</em> something to fill it with?
      (Hold this question. It's the one Dedekind answered.)</li>
    <li>In the squeezing widget, tiny gaps forced huge denominators. Does the theorem give you any control at all over
      how complicated the rational has to be &mdash; or is "there is one" genuinely all you get?</li>
    <li>The reading claims that from an engineering standpoint irrationals barely matter: use \(1.414\) for \(\sqrt2\)
      and the bridge stands. If that's true, why should a mathematician care that \(\sqrt2\) exists? Give the strongest
      answer you can that <em>isn't</em> "because it's interesting."</li>
  </ol>
</div>

<script>
  (function () {
    // ---------- Teaspoon and ocean ----------
    var aIn = document.getElementById('d4-a'),
      bIn = document.getElementById('d4-b'),
      aOut = document.getElementById('d4-a-out'),
      bOut = document.getElementById('d4-b-out'),
      out = document.getElementById('d4-teaspoon');

    function sci(x) {
      if (x === 0) return '0';
      var e = Math.floor(Math.log10(Math.abs(x)));
      var m = x / Math.pow(10, e);
      var mStr = (Math.abs(m - 1) < 1e-9) ? '' : (m.toFixed(2) + ' \\times ');
      return mStr + '10^{' + e + '}';
    }

    function teaspoon() {
      // Sliders are exponents, so a single drag spans forty orders of magnitude.
      var a = Math.pow(10, +aIn.value),
        b = Math.pow(10, +bIn.value);
      aOut.textContent = '10^' + aIn.value;
      bOut.textContent = '10^' + bIn.value;

      var nExp = +bIn.value - +aIn.value;   // scoops needed is about 10^(b-a)
      var years = nExp - Math.log10(60 * 60 * 24 * 365.25);

      var msg = '<p>With a teaspoon of size \\(a = ' + sci(a) + '\\) and an ocean of size \\(b = ' + sci(b) +
        '\\), the Archimedean Property promises an \\(n\\), and here it is:</p>' +
        '<p class="big">\\( n = 10^{' + nExp + '} + 1 \\quad\\Longrightarrow\\quad na > b \\)</p>';

      if (nExp <= 0) {
        msg += '<p>One scoop already does it. Not very impressive &mdash; try making the teaspoon smaller.</p>';
      } else if (years > 0) {
        msg += '<p>At one scoop per second that is about \\(10^{' + years.toFixed(1) +
          '}\\) years' + (years > 10 ? ' &mdash; vastly longer than the age of the universe' : '') +
          '. Finite, though. Every last one of those scoops is accounted for.</p>';
      }
      out.innerHTML = msg;
      M411.typeset(out);
    }
    aIn.addEventListener('input', teaspoon);
    bIn.addEventListener('input', teaspoon);
    teaspoon();

    var inf = document.getElementById('d4-infinitesimal');
    inf.innerHTML = '<p class="big">\\( \\underbrace{\\mathrm{d}x + \\mathrm{d}x + \\cdots + \\mathrm{d}x}_{n' +
      '\\text{ times}} \\;=\\; n\\,\\mathrm{d}x \\;<\\; 10^{-1000} \\)</p>' +
      '<p>&hellip; for \\(n = 10\\), for \\(n = 10^{100}\\), for every \\(n\\) you will ever write down.</p>';
    M411.typeset(inf);

    // ---------- Squeezing a rational ----------
    var alphaIn = document.getElementById('d4-alpha'),
      betaIn = document.getElementById('d4-beta'),
      sq = document.getElementById('d4-squeeze'),
      canvas = document.getElementById('d4-canvas');

    var state = null;

    function squeeze() {
      var alpha = parseFloat(alphaIn.value),
        beta = parseFloat(betaIn.value);

      if (!isFinite(alpha) || !isFinite(beta)) {
        sq.innerHTML = '<p>Both entries need to be numbers.</p>';
        state = null; draw(); return;
      }
      if (alpha <= beta) {
        sq.innerHTML = '<p>The recipe needs \\(\\beta &lt; \\alpha\\). Swap them, or nudge \\(\\alpha\\) up.</p>';
        M411.typeset(sq); state = null; draw(); return;
      }

      var gap = alpha - beta;
      if (gap < 1e-9) {
        sq.innerHTML = '<p>That gap is below \\(10^{-9}\\), which is where this page runs out of floating-point ' +
          'precision and would start lying to you. The <em>theorem</em> has no such limit &mdash; only the arithmetic ' +
          'in your browser does.</p>';
        M411.typeset(sq); state = null; draw(); return;
      }

      // The proof sketch, run as a recipe.
      var n = (gap > 1) ? 1 : Math.floor(1 / gap) + 1;   // smallest n with n*gap > 1
      var m = Math.floor(n * beta) + 1;                  // first integer strictly past n*beta
      var q = m / n;

      // Stretching by n and dividing back by n are not bit-identical operations in
      // floating point, so right at the boundary the scaled inequality nb < m < na can
      // hold while the one we actually display, beta < m/n < alpha, does not. Verify the
      // displayed quantity and nudge n up if it fails. The theorem doesn't need this;
      // double-precision arithmetic does.
      var guard = 0;
      while (!(beta < q && q < alpha) && guard++ < 64) {
        n++;
        m = Math.floor(n * beta) + 1;
        q = m / n;
      }

      state = { alpha: alpha, beta: beta, n: n, m: m, q: q };

      sq.innerHTML =
        '<p><strong>Case ' + (gap > 1 ? '1' : '2') + '.</strong> ' +
        (gap > 1
          ? 'The gap already exceeds \\(1\\), so there is an integer sitting between them and no stretching is needed.'
          : 'The gap is \\(\\alpha - \\beta = ' + gap.toExponential(4) + ' \\le 1\\), so we stretch.') + '</p>' +
        '<p>Archimedean Property with \\(a = \\alpha-\\beta\\) and \\(b = 1\\) gives \\(n = ' + n +
        '\\), and indeed \\(n(\\alpha-\\beta) = ' + (n * gap).toFixed(4) + ' > 1\\).</p>' +
        '<p>Stretched, the two numbers are \\(n\\beta = ' + (n * beta).toFixed(4) + '\\) and \\(n\\alpha = ' +
        (n * alpha).toFixed(4) + '\\) &mdash; now more than \\(1\\) apart, so the integer \\(m = ' + m +
        '\\) fits strictly between them.</p>' +
        '<p class="big">\\( ' + beta + ' \\;<\\; \\dfrac{' + m + '}{' + n + '} = ' + q.toFixed(12) +
        ' \\;<\\; ' + alpha + ' \\)</p>';
      M411.typeset(sq);
      draw();
    }

    function draw() {
      var d = M411.hidpi(canvas, 230), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      if (!state) return;

      var pad = 40, yTop = 62, yBot = 178;

      function axis(y, lo, hi, label) {
        ctx.strokeStyle = '#333'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(W - pad, y); ctx.stroke();
        ctx.fillStyle = M411.colors.muted;
        ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
        ctx.fillText(label, pad, y - 30);
        return function (v) { return pad + (v - lo) / (hi - lo) * (W - 2 * pad); };
      }

      function tick(x, y, label, color, up) {
        ctx.strokeStyle = color; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(x, y - 8); ctx.lineTo(x, y + 8); ctx.stroke();
        ctx.fillStyle = color; ctx.textAlign = 'center';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(label, x, up ? y - 14 : y + 22);
      }

      // Top: the two numbers at their own scale, one unit wide.
      var lo1 = Math.floor(state.beta), hi1 = lo1 + 1;
      var X1 = axis(yTop, lo1, hi1, 'At their own scale (one unit wide)');
      ctx.strokeStyle = M411.colors.grid;
      for (var t = 0; t <= 10; t++) {
        var xg = X1(lo1 + t / 10);
        ctx.beginPath(); ctx.moveTo(xg, yTop - 4); ctx.lineTo(xg, yTop + 4); ctx.stroke();
      }
      tick(X1(lo1), yTop, String(lo1), M411.colors.muted, false);
      tick(X1(hi1), yTop, String(hi1), M411.colors.muted, false);
      ctx.fillStyle = M411.colors.explore;
      ctx.beginPath(); ctx.arc(X1(state.beta), yTop, 5, 0, 2 * Math.PI); ctx.fill();
      ctx.beginPath(); ctx.arc(X1(state.alpha), yTop, 5, 0, 2 * Math.PI); ctx.fill();
      ctx.textAlign = 'center'; ctx.font = 'bold 12px sans-serif';
      ctx.fillText('β and α (yes, both)', X1((state.alpha + state.beta) / 2), yTop - 14);

      // Bottom: everything multiplied by n.
      var nb = state.n * state.beta, na = state.n * state.alpha;
      var margin = Math.max(1.2, (na - nb) * 0.6);
      var lo2 = nb - margin, hi2 = na + margin;
      var X2 = axis(yBot, lo2, hi2, 'Multiplied by n = ' + state.n);

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var k = Math.ceil(lo2); k <= Math.floor(hi2); k++) {
        var xk = X2(k);
        ctx.beginPath(); ctx.moveTo(xk, yBot - 6); ctx.lineTo(xk, yBot + 6); ctx.stroke();
        if (k !== state.m) {
          ctx.fillStyle = '#aab'; ctx.textAlign = 'center'; ctx.font = '11px sans-serif';
          ctx.fillText(String(k), xk, yBot + 20);
        }
      }

      // The stretched gap, shaded.
      ctx.fillStyle = 'rgba(0,156,222,0.14)';
      ctx.fillRect(X2(nb), yBot - 26, X2(na) - X2(nb), 52);

      tick(X2(nb), yBot, 'nβ', M411.colors.explore, true);
      tick(X2(na), yBot, 'nα', M411.colors.explore, true);
      tick(X2(state.m), yBot, 'm = ' + state.m, M411.colors.check, false);

      ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(X2(nb), yBot - 34); ctx.lineTo(X2(na), yBot - 34); ctx.stroke();
      ctx.fillStyle = M411.colors.explore; ctx.textAlign = 'center'; ctx.font = '11px sans-serif';
      ctx.fillText('width ' + (na - nb).toFixed(3) + ' > 1', X2((nb + na) / 2), yBot - 40);
    }

    document.getElementById('d4-run').addEventListener('click', squeeze);
    alphaIn.addEventListener('change', squeeze);
    betaIn.addEventListener('change', squeeze);
    document.querySelectorAll('.d4-preset').forEach(function (b) {
      b.addEventListener('click', function () {
        betaIn.value = b.getAttribute('data-b');
        alphaIn.value = b.getAttribute('data-a');
        squeeze();
      });
    });
    M411.onResize(draw);
    squeeze();
  })();
</script>
