---
layout: day
title: "MATH 411 Day 3: What the Rationals Can't Do"
day: 3
chapter_number: 2
chapter: "Real and Rational"
day_title: "What the Rationals Can't Do"
blurb: "The rationals are packed so tightly that between any two of them sits another. They are also riddled with holes. Both of those things are true, and holding them in your head at once is the work of today."
reading: "the opening of Chapter 2, through the proof that \\(\\sqrt2\\) is irrational and the hole it leaves behind"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The hole where \(\sqrt2\) should be</h2>

  <p>Your reading ends with a picture that ought to bother you: the diagonal of a unit square, rotated down onto the
    rational number line, lands on a point that <em>isn't there</em>. Here is that hole, magnified as far as you
    like.</p>

  <p>The blue ticks are the best rational approximations to \(\sqrt2\) available with denominator at most \(q\). Turn
    up \(q\) and watch them crowd in.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d3-q">Largest denominator \(q\)</label>
      <input type="range" id="d3-q" min="1" max="200" step="1" value="12">
    </div>
    <div class="ctl">
      <label for="d3-zoom">Zoom</label>
      <input type="range" id="d3-zoom" min="0" max="60" step="1" value="0">
    </div>
  </div>

  <canvas class="plot" id="d3-canvas"></canvas>
  <div class="readout" id="d3-out"></div>

  <p>No matter how far you zoom, two things stay true at once, and they are not in conflict &mdash; though it takes a
    while to stop feeling like they are:</p>

  <ul>
    <li>There are rationals arbitrarily close to the gap on both sides. You can never isolate the hole; every window
      you draw around it is stuffed with rationals.</li>
    <li>The gap is never filled. No fraction ever lands on it, because a fraction that landed on it would be a rational
      number whose square is \(2\), and the proof below says there isn't one.</li>
  </ul>

  <p>This is the reading's point about drawing: the rational line <em>looks</em> continuous at every magnification a
    picture can reach. The holes are real, and invisible.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Why \(\sqrt2\) is irrational</h2>

  <p>Your reading gives this proof in full, so nothing here will be new &mdash; the value is in taking it apart. It is
    the first serious proof by contradiction in the course, and the machinery it uses will come back repeatedly.</p>

  <p>Read it once in the book, close the book, then step through and see whether you can predict each move.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1. Set up the contradiction &mdash; and notice the extra assumption.</div>
        <div class="sstep-body">
          <p>Suppose, for contradiction, that \(\sqrt2 = a/b\) with \(a, b\) integers. <strong>Additionally, suppose
              the fraction is in lowest terms.</strong></p>
          <p>That second sentence is not decoration. If \(a/b\) is in lowest terms then \(a\) and \(b\) share no common
            factor, so in particular <em>at most one of them is even</em>. The entire proof is a trap built around that
            phrase, and if you drop it there is no contradiction to reach.</p>
          <p>Why are we entitled to it? Because any fraction can be reduced. Assuming lowest terms costs us
            nothing.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2. Square, and clear the denominator.</div>
        <div class="sstep-body">
          \[ \frac{a}{b} = \sqrt2 \quad\Longrightarrow\quad \frac{a^2}{b^2} = 2 \quad\Longrightarrow\quad a^2 = 2b^2 \]
          <p>So \(a^2\) is even, since it is \(2\) times an integer.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3. The book says "if \(a^2\) is even then \(a\) must be even also (why?)". Answer
          the why.</div>
        <div class="sstep-body">
          <p>Prove the contrapositive, which is much easier: if \(a\) is <em>odd</em>, then \(a = 2k+1\) for some
            integer \(k\), so</p>
          \[ a^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1 \]
          <p>which is odd. So an odd \(a\) forces an odd \(a^2\); contrapositively, an even \(a^2\) forces an even
            \(a\).</p>
          <p>Your reading flags this with a parenthetical "(why?)" precisely because it is the sort of step that reads
            as obvious and isn't &mdash; it is a small theorem, and it needs its own argument. Lesson Two, in
            action.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4. Use the evenness of \(a\) and turn the crank once more.</div>
        <div class="sstep-body">
          <p>Since \(a\) is even, write \(a = 2k\). Substituting into \(a^2 = 2b^2\):</p>
          \[ 4k^2 = 2b^2 \quad\Longrightarrow\quad 2k^2 = b^2 \]
          <p>So \(b^2\) is even, and by Step 3 again, \(b\) is even.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 5. Spring the trap.</div>
        <div class="sstep-body">
          <p>We have concluded that \(a\) and \(b\) are <em>both</em> even. But Step 1 assumed the fraction was in
            lowest terms, which forces at most one of them to be even. Contradiction.</p>
          <p>Every step of the reasoning was sound, so the fault must lie in the only thing we assumed without warrant:
            that \(\sqrt2\) could be written as \(a/b\) at all. Therefore it cannot. \(\blacksquare\)</p>
          <p>Notice the logical shape, because you will use it constantly: to prove a negative ("no such fraction
            exists"), assume the positive, derive an absurdity, and conclude the assumption was impossible. You never
            have to search through the infinitely many fractions.</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>The same proof, run on \(\sqrt4\)</h2>

  <p>Here is that argument again, word for word, with \(2\) replaced by \(4\). It concludes that \(\sqrt4\) is
    irrational. Since \(\sqrt4 = 2\), which is emphatically rational, something in it must fail.</p>

  <p><strong>Click the first line that doesn't hold.</strong> This is the most valuable five minutes on the page: an
    argument you just accepted is about to be run past its breaking point, and finding the crack tells you what the
    original proof was really using.</p>

  <div class="flaw-widget" data-flaw="5">
    <div class="flawlist">
      <button class="fline" type="button">Suppose \(\sqrt4 = a/b\) in lowest terms, so at most one of \(a, b\) is even.
      </button>
      <button class="fline" type="button">Squaring and clearing denominators: \(a^2 = 4b^2\).</button>
      <button class="fline" type="button">So \(a^2\) is even, and therefore \(a\) is even; write \(a = 2k\).</button>
      <button class="fline" type="button">Substituting: \(4k^2 = 4b^2\), so \(k^2 = b^2\).</button>
      <button class="fline" type="button">Therefore \(b^2\) is even, so \(b\) is even &mdash; contradicting line (1).
      </button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Fine.</strong> Any fraction can be put in lowest terms, and \(2 = 2/1\) certainly can. The assumption
        costs nothing here, just as it cost nothing in the \(\sqrt2\) proof.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Fine.</strong> \((a/b)^2 = 4\) gives \(a^2 = 4b^2\). Pure algebra, and true &mdash; with \(a = 2, b =
        1\) it reads \(4 = 4\).</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Fine.</strong> \(a^2 = 4b^2 = 2(2b^2)\) really is even, and Step 3 of the scaffold above really does
        force \(a\) even. With \(a = 2\), this is correct.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Fine &mdash; and this is where the two proofs quietly diverge.</strong> Substituting \(a = 2k\) gives
        \(4k^2 = 4b^2\), so \(k^2 = b^2\). Compare the \(\sqrt2\) version, which gave \(2k^2 = b^2\). One of those has
        a factor of \(2\) sitting in front and the other doesn't. Now look at line (5).</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>That's the break.</strong> Line (4) gave \(k^2 = b^2\), with <em>no factor of 2</em> anywhere. There
        is nothing here forcing \(b^2\) to be even, so the conclusion doesn't follow and the contradiction never
        arrives. (And indeed with \(a=2, b=1, k=1\): \(k^2 = b^2\) says \(1 = 1\), and \(b = 1\) is odd. No
        contradiction &mdash; just a true statement.)</p>
      <p>Now the important question, the one this whole activity exists for: <em>why</em> did the \(\sqrt2\) version get
        a surviving factor of \(2\) and this one didn't? Because \(4\) is a perfect square, so it was completely
        consumed when \(a = 2k\) was substituted. In the \(\sqrt2\) case the \(2\) could not be absorbed, and the
        leftover factor is exactly what propagated the evenness from \(a\) to \(b\).</p>
      <p>That is the real content of the proof, and it is easy to miss when you only ever see it succeed. Your reading
        says \(\sqrt3, \sqrt5\), and "the square root of every positive integer which is not the square of an integer"
        are all irrational &mdash; and now you can see why that last clause is stated the way it is.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on holes and density</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Your reading says the name "real numbers" is badly chosen. Why?</p>
    <button class="mc-opt" type="button" data-key="a">Because the reals aren't a well-defined set.</button>
    <button class="mc-opt" type="button" data-key="b">Because it suggests other number systems are less real, which is
      a historical accident rather than a mathematical fact.</button>
    <button class="mc-opt" type="button" data-key="c">Because the reals were discovered after the complex
      numbers.</button>
    <div class="mc-fb" data-key="a">They're perfectly well defined &mdash; though pinning down <em>how</em> is a real
      project, and one this course will circle for weeks.</div>
    <div class="mc-fb" data-key="b">Correct. The reading compares it to the "Pythagorean Theorem," known long before
      Pythagoras: the name records history, not content. \(\mathbb{Q}\), \(\mathbb{Z}\), and \(\mathbb{N}\) are exactly
      as real as \(\mathbb{R}\).</div>
    <div class="mc-fb" data-key="c">Not the reading's point, and the chronology is muddier than that in any case
      &mdash; as Day 1's cubic showed, complex numbers arrived while the reals were still unexamined.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Between any two rationals there is another rational. What does that <em>not</em> tell you?</p>
    <button class="mc-opt" type="button" data-key="a">That the rationals are densely packed.</button>
    <button class="mc-opt" type="button" data-key="b">That there is no "next" rational after a given one.</button>
    <button class="mc-opt" type="button" data-key="c">That the rational line has no gaps in it.</button>
    <div class="mc-fb" data-key="a">This <em>is</em> what it tells you &mdash; that's the definition of dense.</div>
    <div class="mc-fb" data-key="b">Also a genuine consequence: if \(r\) had a next rational \(s\), there would be
      nothing between them, contradicting density. Worth sitting with, since it's so unlike the integers.</div>
    <div class="mc-fb" data-key="c">Correct, and this is the trap the whole chapter is built around. Density and
      completeness are different properties. \(\mathbb{Q}\) has the first and lacks the second &mdash; it is packed
      infinitely tightly and still full of holes.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">In the rotating-diagonal picture, what exactly is the conclusion?</p>
    <button class="mc-opt" type="button" data-key="a">On a rational \(x\)-axis, the rotating diagonal's endpoint has
      nowhere to land &mdash; the point \((\sqrt2, 0)\) does not exist.</button>
    <button class="mc-opt" type="button" data-key="b">The diagonal cannot actually be constructed.</button>
    <button class="mc-opt" type="button" data-key="c">The rotation is impossible.</button>
    <div class="mc-fb" data-key="a">Correct, and the reading is careful about which part is startling. The construction
      works; the rotation works; the length is \(\sqrt2\). It is the <em>destination</em> that's missing. That is what a
      hole in a number line means.</div>
    <div class="mc-fb" data-key="b">It certainly can &mdash; take a unit square and draw its diagonal. The reading
      stresses this: "It is clear that the construction works and that we really can build such a line segment. It
      exists."</div>
    <div class="mc-fb" data-key="c">Nothing stops the rotation. The problem is only where the endpoint arrives.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">In the \(\sqrt2\) proof, what work is "in lowest terms" doing?</p>
    <button class="mc-opt" type="button" data-key="a">It makes the algebra tidier.</button>
    <button class="mc-opt" type="button" data-key="b">It supplies the fact being contradicted &mdash; without it, "both
      \(a\) and \(b\) are even" is not absurd.</button>
    <button class="mc-opt" type="button" data-key="c">It guarantees \(a\) and \(b\) are positive.</button>
    <div class="mc-fb" data-key="a">Tidiness isn't the issue &mdash; the proof genuinely collapses without it.</div>
    <div class="mc-fb" data-key="b">Correct. The proof derives "\(a\) and \(b\) are both even," which is a perfectly
      ordinary thing for a fraction to have (\(4/6\), say). It is only <em>contradictory</em> against the standing
      assumption of lowest terms. Remove that phrase and you've proved nothing at all.</div>
    <div class="mc-fb" data-key="c">Lowest terms says nothing about sign. Positivity is available separately and isn't
      what the contradiction runs on.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The reading asks what \(4^{\sqrt2}\) could possibly mean. For rational exponents \(m/n\) we have
      \(4^{m/n}=\sqrt[n]{4^m}\), but that recipe needs a numerator and a denominator. What would you even <em>want</em>
      \(4^{\sqrt2}\) to be? Try to say what property should pin it down.</li>
    <li>In the zooming widget, the rationals crowd right up to the gap from both sides but never reach it. Write down,
      as precisely as you can, what distinguishes "gets arbitrarily close to" from "reaches." That distinction is the
      seed of everything in Chapters 6 onward.</li>
    <li>Running the \(\sqrt2\) proof on \(\sqrt4\) broke at exactly one line. Without doing your assigned problems, say
      in one sentence what property of the number under the root the proof actually needs.</li>
    <li>The Pythagoreans are said to have found the irrationality of \(\sqrt2\) genuinely disturbing. Given that
      \(1.414\) is close enough to build a bridge with, what exactly was there to be disturbed <em>about</em>?</li>
  </ol>
</div>

<script>
  (function () {
    var R2 = Math.SQRT2;
    var qIn = document.getElementById('d3-q'),
      zIn = document.getElementById('d3-zoom'),
      canvas = document.getElementById('d3-canvas'),
      out = document.getElementById('d3-out');

    // Best rational approximations to sqrt(2) from each side, with denominator <= q.
    function bestApprox(q) {
      var below = { p: 1, q: 1, v: 1 }, above = { p: 2, q: 1, v: 2 };
      for (var b = 1; b <= q; b++) {
        var lo = Math.floor(R2 * b), hi = lo + 1;
        var vlo = lo / b, vhi = hi / b;
        if (vlo > below.v && vlo < R2) below = { p: lo, q: b, v: vlo };
        if (vhi < above.v && vhi > R2) above = { p: hi, q: b, v: vhi };
      }
      return { below: below, above: above };
    }

    function draw() {
      var q = +qIn.value;
      var zoom = Math.pow(10, +zIn.value / 20);   // 1 .. ~1000
      var half = 0.6 / zoom;

      var d = M411.hidpi(canvas, 190), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      var pad = 40, y = 108;
      var lo = R2 - half, hi = R2 + half;
      function X(v) { return pad + (v - lo) / (hi - lo) * (W - 2 * pad); }

      // the line
      ctx.strokeStyle = '#333'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(W - pad, y); ctx.stroke();

      // every rational p/b with b <= q that falls inside the window
      ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = 1;
      var shown = 0;
      for (var b = 1; b <= q; b++) {
        var from = Math.ceil(lo * b), to = Math.floor(hi * b);
        if (to - from > 4000) continue;             // keep the draw bounded
        for (var p = from; p <= to; p++) {
          var v = p / b;
          if (v < lo || v > hi) continue;
          var x = X(v);
          ctx.globalAlpha = 0.25 + 0.75 / b;
          ctx.beginPath(); ctx.moveTo(x, y - 12); ctx.lineTo(x, y + 12); ctx.stroke();
          shown++;
          if (shown > 6000) break;
        }
        if (shown > 6000) break;
      }
      ctx.globalAlpha = 1;

      // the hole
      var xh = X(R2);
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(xh, y, 6, 0, 2 * Math.PI); ctx.fill();
      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.arc(xh, y, 6, 0, 2 * Math.PI); ctx.stroke();
      ctx.fillStyle = M411.colors.check; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('√2 is not here', xh, y - 26);
      ctx.font = '11px sans-serif'; ctx.fillStyle = M411.colors.muted;
      ctx.fillText('(nothing is)', xh, y - 12);

      // window edges
      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif';
      ctx.textAlign = 'left'; ctx.fillText(lo.toFixed(Math.min(12, 2 + Math.round(+zIn.value / 6))), pad, y + 34);
      ctx.textAlign = 'right'; ctx.fillText(hi.toFixed(Math.min(12, 2 + Math.round(+zIn.value / 6))), W - pad, y + 34);

      // Plain decimals read better until the window gets genuinely tiny.
      var width = 2 * half;
      var widthStr = width >= 0.001 ? width.toFixed(4).replace(/0+$/, '').replace(/\.$/, '')
        : width.toExponential(2).replace('e-', ' \\times 10^{-') + '}';

      var a = bestApprox(q);
      out.innerHTML =
        '<p>Window width \\(' + widthStr + '\\), showing every rational with denominator ' +
        '\\(\\le ' + q + '\\) that falls inside it (' + shown + ' of them).</p>' +
        '<p>Closest from below: \\(\\dfrac{' + a.below.p + '}{' + a.below.q + '} = ' + a.below.v.toFixed(10) +
        '\\). Closest from above: \\(\\dfrac{' + a.above.p + '}{' + a.above.q + '} = ' + a.above.v.toFixed(10) +
        '\\).</p>' +
        '<p>They squeeze in from both sides &mdash; and neither will ever arrive, no matter how large you allow ' +
        'the denominator to be.</p>';
      M411.typeset(out);
    }

    qIn.addEventListener('input', draw);
    zIn.addEventListener('input', draw);
    M411.onResize(draw);
    draw();
  })();
</script>
