---
layout: day
title: "MATH 411 Day 14: Series Anomalies"
day: 14
chapter_number: 4
chapter: "Power Series"
day_title: "Series Anomalies"
blurb: "A series that adds to 0, to 1, and to 1/2 depending on how you squint. A convergent series that can be rearranged to equal literally anything. This is the day the phrase &ldquo;infinite sum&rdquo; stops being safe."
reading: "Section 4.2, Series Anomalies, through Theorem 4.2.2 (Riemann's Rearrangement Theorem)"
---

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>How Leibniz got \(1 - 1 + 1 - 1 + \cdots = \tfrac{1}{2}\)</h2>

  <p>The reading opens with this derivation. Every line was standard practice in the eighteenth century, and the
    controversy it caused was serious enough that Euler wrote a paper about it in 1760.</p>

  <p><strong>Click the <em>first</em> line that doesn't survive contact with modern analysis.</strong></p>

  <div class="flaw-widget" data-flaw="2">
    <div class="flawlist">
      <button class="fline" type="button">For \(|x| &lt; 1\), the geometric series gives \(\dfrac{1}{1+x} = 1 - x + x^2
        - x^3 + \cdots\).</button>
      <button class="fline" type="button">This is an algebraic identity between two expressions in \(x\), so it should
        hold at any \(x\) where both sides can be written down.</button>
      <button class="fline" type="button">At \(x = 1\) the left side is \(\dfrac{1}{1+1} = \dfrac{1}{2}\), which is
        perfectly well defined.</button>
      <button class="fline" type="button">Therefore \(\dfrac{1}{2} = 1 - 1 + 1 - 1 + \cdots\).</button>
      <button class="fline" type="button">But grouping as \((1-1) + (1-1) + \cdots\) gives \(0\), so \(\dfrac{1}{2} =
        0\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Not the flaw.</strong> This line is completely correct &mdash; and notice it comes with a hypothesis
        attached: \(|x| &lt; 1\). Everything that goes wrong afterwards goes wrong by forgetting that hypothesis was
        ever there. Read the next line again.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>That's the first crack.</strong> The equals sign in line (1) is <em>not</em> an algebraic identity. The
        right-hand side isn't an expression you evaluate; it's a <em>limit of partial sums</em>, and it only exists when
        \(|x| &lt; 1\). Outside that range the left side is still a number and the right side is nothing at all &mdash;
        so there is no equation to extend.</p>
      <p>This is the single most important idea available to you today. "\(=\)" between a function and its series is
        shorthand for "the partial sums converge to this value," and it carries its region of convergence with it
        everywhere it goes. Strip the hypothesis off and you can prove anything.</p>
      <p>Line (3) is then true but irrelevant, line (4) is meaningless, and line (5) commits a <em>second</em>,
        independent sin &mdash; click it and see.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>True, but it isn't the flaw.</strong> \(1/(1+1) = 1/2\) is not in dispute. The damage was already done
        on line (2), which claimed we were entitled to substitute \(x = 1\) in the first place.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>False, but it's a consequence, not the cause.</strong> This line inherits its problem from line (2). Go
        back and find the step that first said something it wasn't entitled to say.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>Genuinely illegitimate &mdash; but not the <em>first</em> bad step.</strong> You've found the day's
        second theme, though, and it's worth naming: inserting parentheses into an infinite sum is not a free move. For
        a finite sum the associative law guarantees it changes nothing; for an infinite one, it can change the answer,
        as the next activity shows in three different ways.</p>
      <p>Keep both anomalies straight, because they're different failures. Line (2) misuses <em>convergence</em>. Line
        (5) misuses <em>associativity</em>. And later on this page you'll meet a third: a series that converges, groups
        legally, and still fails the commutative law.</p>
    </div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Three answers to one series</h2>

  <p>Grandi's series \(1 - 1 + 1 - 1 + \cdots\) was argued over for a century, and part of why is that every one of the
    following looks reasonable in isolation. Try each.</p>

  <div class="ctl-row">
    <button class="btn411 ghost d14-grouping" data-mode="left">Group as \((1-1)+(1-1)+\cdots\)</button>
    <button class="btn411 ghost d14-grouping" data-mode="right">Group as \(1+(-1+1)+(-1+1)+\cdots\)</button>
    <button class="btn411 ghost d14-grouping" data-mode="cesaro">Average the partial sums</button>
  </div>

  <canvas class="plot" id="d14-grandi"></canvas>
  <div class="readout" id="d14-grandi-out"></div>

  <p>The sequence of partial sums is \(1, 0, 1, 0, 1, 0, \ldots\) &mdash; it does not converge, full stop. Every
    "answer" above is really an answer to a <em>different question</em>: what value should we assign to a sequence of
    partial sums that refuses to settle down?</p>

  <p>Euler's resolution, from the passage quoted in your reading, is worth reading twice. He does not say Leibniz was
    wrong. He says the word <em>sum</em> was being asked to do two different jobs:</p>

  <blockquote class="source">
    Understanding of this question is to be sought in the word "sum;" this idea, if thus conceived &mdash; namely, the
    sum of a series is said to be that quantity to which it is brought closer as more terms of a series are taken
    &mdash; has relevance only for the convergent series, and we should in general give up this idea of sum for
    divergent series.
    <cite>Euler, <em>On Divergent Series</em>, 1760</cite>
  </blockquote>

  <p>That is a definition being invented in real time, under pressure from a paradox &mdash; which is roughly how every
    definition in this course came to exist.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The alternating harmonic series closes in from both sides</h2>

  <p>Your reading points out something curious: \(\dfrac{1}{1+x}\) has a series that blows up at \(x=1\), but its
    antiderivative \(\ln(1+x) = x - \tfrac{1}{2}x^2 + \tfrac{1}{3}x^3 - \cdots\) has one that converges there. Setting
    \(x = 1\) gives</p>

  \[ \ln 2 \;=\; 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots \]

  <p>and the reason it converges is visible in the partial sums. Slide \(n\) and watch.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d14-n">Partial sums shown</label>
      <input type="range" id="d14-n" min="1" max="40" step="1" value="8">
    </div>
  </div>

  <canvas class="plot" id="d14-alt"></canvas>
  <div class="readout" id="d14-alt-out"></div>

  <p>The odd partial sums come down, the even ones come up, and each one is closer than the last. In symbols, exactly as
    the reading has it:</p>

  \[ S_2 \le S_4 \le S_6 \le \cdots \le \cdots \le S_5 \le S_3 \le S_1, \qquad S_{2k+1} - S_{2k} = \frac{1}{2k+1} \]

  <p>Every value of the sum is trapped in a nest of intervals whose widths shrink to zero, so <em>something</em> has to
    be caught in the middle. Notice what that argument does and doesn't give you.</p>

  <details class="hint">
    <summary>What the nesting proves &mdash; and what it doesn't</summary>
    <p>It proves the partial sums converge, and it tells you the limit lies between any consecutive pair \(S_{2k}\) and
      \(S_{2k+1}\). It does <em>not</em> prove the limit is \(\ln 2\). As the reading says, the diagram indicates
      \(\ln 2\) is in the middle "but actually this is not obvious." Getting from "converges to something" to
      "converges to \(\ln 2\)" needs a separate argument about the remainder of the Taylor series &mdash; which is
      Chapter 7's business.</p>
    <p>This gap between <em>a limit exists</em> and <em>the limit is that number</em> is going to come up constantly.
      They are genuinely different claims requiring genuinely different work.</p>
  </details>

  <p>Hold on to that trapping picture. When you meet the Nested Interval Property on Day 29, this is the example it was
    built to explain.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Why the harmonic series diverges, in blocks</h2>

  <p>Riemann's theorem needs one fact to get off the ground: \(\sum 1/n\) diverges even though its terms shrink to
    zero. The reading gives the classic argument as a chain of inequalities. Rebuild it deliberately &mdash; it's short,
    it's beautiful, and it's due to Nicole Oresme around 1350, which makes it about five centuries older than the rest
    of this chapter.</p>

  <p>The goal: show \(1 + \tfrac12 + \tfrac13 + \tfrac14 + \cdots\) exceeds any number you name.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1. The terms go to zero, so why isn't that enough?</div>
        <div class="sstep-body">
          <p>It isn't enough because the terms don't shrink <em>fast</em>. The question is never "do the terms go to
            zero" but "do they go to zero quickly enough that the accumulated total settles." \(1/n\) fails that test,
            and the point of the proof is to make the failure visible.</p>
          <p>Worth flagging now: you will spend real effort later on the fact that terms going to zero is necessary but
            not sufficient for convergence. This series is the standard counterexample.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2. Chop the series into blocks. Where should the cuts go?</div>
        <div class="sstep-body">
          <p>At the powers of two:</p>
          \[ \left(1 + \frac{1}{2}\right) + \left(\frac13 + \frac14\right) + \left(\frac15 + \frac16 + \frac17 +
          \frac18\right) + \left(\frac19 + \cdots + \frac{1}{16}\right) + \cdots \]
          <p>Block \(k\) runs from \(1/(2^k+1)\) through \(1/2^{k+1}\) and contains \(2^k\) terms. Doubling the block
            length each time is the whole trick, and the next step shows why.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3. Bound each block from below. What's the crudest bound that still works?</div>
        <div class="sstep-body">
          <p>Replace every term in a block by the <em>smallest</em> one in it &mdash; the last. That can only decrease
            the total:</p>
          \[ \frac15 + \frac16 + \frac17 + \frac18 \;>\; \frac18 + \frac18 + \frac18 + \frac18 = \frac{4}{8} =
          \frac12 \]
          <p>And this is not a lucky coincidence for that block. A block with \(2^k\) terms, each at least
            \(1/2^{k+1}\), totals at least \(2^k \cdot 1/2^{k+1} = 1/2\). <em>Every</em> block clears \(1/2\), which is
            exactly what doubling the lengths was for.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4. Assemble.</div>
        <div class="sstep-body">
          <p>The series is bounded below by \(\tfrac12 + \tfrac12 + \tfrac12 + \cdots\), which has no finite total. So
            the harmonic series diverges to \(\infty\). \(\blacksquare\)</p>
          <p>Quantitatively: to guarantee a total past \(N\) you need about \(2^{2N}\) terms. To pass \(10\), roughly a
            billion terms won't do it. This series diverges, and it diverges <em>excruciatingly slowly</em> &mdash;
            which is precisely why no amount of computing partial sums could ever have settled the question. It had to
            be proved.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 5. The two corollaries Riemann's theorem actually needs.</div>
        <div class="sstep-body">
          <p>Split the alternating harmonic series into its positive and negative halves. Each half, on its own,
            diverges:</p>
          \[ -\frac12 - \frac14 - \frac16 - \cdots = -\frac12\left(1 + \frac12 + \frac13 + \cdots\right) = -\infty \]
          \[ 1 + \frac13 + \frac15 + \cdots \;\ge\; \frac12 + \frac14 + \frac16 + \cdots = \infty \]
          <p>Read those as a statement about <em>resources</em>: the positive terms alone can carry you as high as you
            like, and the negative terms alone can carry you as low as you like. Both supplies are inexhaustible. That
            is the entire engine of the next activity.</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The rearrangement machine</h2>

  <p><strong>Theorem 4.2.2 (Riemann, 1854).</strong> Let \(a\) be any real number. There is a rearrangement of \(1 -
    \tfrac12 + \tfrac13 - \cdots\) that converges to \(a\).</p>

  <p>Not "some series." <em>That</em> series &mdash; the same terms, every one of them used exactly once, only the
    order changed. Name a target and watch the proof from your reading run as an algorithm.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d14-target">Target \(a\)</label>
      <input type="number" id="d14-target" value="2" step="0.25">
    </div>
    <div class="ctl">
      <label for="d14-terms">Terms to use</label>
      <input type="range" id="d14-terms" min="50" max="20000" step="50" value="2000">
    </div>
    <div class="ctl">
      <label>&nbsp;</label>
      <button class="btn411" id="d14-go">Rearrange</button>
    </div>
  </div>

  <div class="ctl-row">
    <button class="btn411 ghost d14-target-preset" data-t="0">0</button>
    <button class="btn411 ghost d14-target-preset" data-t="0.6931471805599453">\(\ln 2\) (the honest answer)</button>
    <button class="btn411 ghost d14-target-preset" data-t="3.141592653589793">\(\pi\)</button>
    <button class="btn411 ghost d14-target-preset" data-t="-2">&minus;2</button>
  </div>

  <canvas class="plot" id="d14-riemann"></canvas>
  <div class="readout" id="d14-riemann-out"></div>

  <p>The recipe is exactly the one in your reading: add positive terms until you're just above \(a\), then negative
    terms until you're just below, then positive again. You never run out of either kind, because Step 5 above proved
    both supplies are infinite. And the overshoot each time is at most the size of the term that caused it &mdash;
    which goes to zero. So the bouncing closes in on \(a\), and it closes in on \(a\) <em>whatever \(a\) is</em>.</p>

  <details class="hint">
    <summary>Look at the term counts, not just the picture</summary>
    <p>Set the target to \(\pi\) and read off how many positive versus negative terms got used. The imbalance is the
      whole story: to reach a high target the algorithm front-loads positives, spending a long stretch of the odd
      reciprocals before it ever touches a negative one. Nothing is deleted and nothing is repeated &mdash; the terms
      are just <em>spread differently through time</em>, and for an infinite sum that turns out to be enough to change
      the answer.</p>
  </details>

  <p>Now sit with what this means. The number \(\ln 2\) is not a property of the <em>collection</em> of numbers \(\{1,
    -\tfrac12, \tfrac13, -\tfrac14, \ldots\}\). It is a property of that collection <em>in that order</em>. As the
    reading puts it, with a bluntness worth quoting:</p>

  <blockquote class="source">A series is most decidedly <em>not</em> a great big sum. It follows that a power series is
    <em>not</em> a great big polynomial.</blockquote>

  <p>Every intuition you built in calculus about series being long sums has now failed you at least three separate ways
    in one class period. That is the point of the day.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Did the right thing break?</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Which law of arithmetic does \(1 - 1 + 1 - 1 + \cdots\) appear to violate, and which does \(1 -
      \tfrac12 + \tfrac13 - \cdots\) appear to violate?</p>
    <button class="mc-opt" type="button" data-key="a">Both violate the commutative law.</button>
    <button class="mc-opt" type="button" data-key="b">Both violate the associative law.</button>
    <button class="mc-opt" type="button" data-key="c">The first appears to violate associativity; the second violates
      commutativity.</button>
    <button class="mc-opt" type="button" data-key="d">The first violates commutativity; the second violates
      associativity.</button>
    <div class="mc-fb" data-key="a">Only half. Grandi's series is regrouped, not reordered &mdash; the terms stay in
      their original positions and only the parentheses move. That's associativity.</div>
    <div class="mc-fb" data-key="b">Only half. Riemann's rearrangement genuinely reorders the terms, which is
      commutativity, not associativity.</div>
    <div class="mc-fb" data-key="c">Correct, and keeping them distinct matters. Grandi's series is <em>regrouped</em>
      &mdash; same order, different parentheses &mdash; so it's associativity under strain. The alternating harmonic
      series is <em>reordered</em>, which is commutativity. And note the sharper point in the reading: the alternating
      harmonic series does satisfy associativity, being convergent. It fails commutativity anyway.</div>
    <div class="mc-fb" data-key="d">Reversed. Moving parentheses is associativity (Grandi); moving terms is
      commutativity (Riemann).</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Grandi's series has partial sums \(1, 0, 1, 0, \ldots\). What is the honest modern verdict?</p>
    <button class="mc-opt" type="button" data-key="a">It sums to \(1/2\), as Leibniz said.</button>
    <button class="mc-opt" type="button" data-key="b">It diverges; the partial sums have no limit.</button>
    <button class="mc-opt" type="button" data-key="c">It sums to \(0\), since the terms cancel in pairs.</button>
    <div class="mc-fb" data-key="a">No &mdash; though \(1/2\) is what you get from a <em>different</em> and perfectly
      respectable definition (the Cesàro sum, the limit of the averages of the partial sums). Under the definition of
      "sum" we use in this course, the series simply has none. Euler's paper is precisely about not conflating the
      two.</div>
    <div class="mc-fb" data-key="b">Correct. The sequence \(1, 0, 1, 0, \ldots\) does not converge, so the series
      diverges and has no sum. Everything else &mdash; \(0\), \(1\), \(1/2\) &mdash; comes from quietly changing the
      definition of "sum" mid-argument.</div>
    <div class="mc-fb" data-key="c">That's the grouping \((1-1)+(1-1)+\cdots\), which assumes the regrouping was legal.
      Shift the parentheses one step right and the same reasoning gives \(1\). When one method yields two answers, the
      method is what's wrong.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Riemann's theorem rearranges \(1 - \tfrac12 + \tfrac13 - \cdots\) to hit any target. Which fact
      makes that possible?</p>
    <button class="mc-opt" type="button" data-key="a">The terms go to zero.</button>
    <button class="mc-opt" type="button" data-key="b">The series converges.</button>
    <button class="mc-opt" type="button" data-key="c">The positive terms alone diverge to \(+\infty\), and the negative
      terms alone diverge to \(-\infty\).</button>
    <div class="mc-fb" data-key="a">Necessary but nowhere near sufficient. The terms of \(\sum 1/n^2\) also go to zero,
      and <em>no</em> rearrangement of that series changes its sum. Something stronger is going on here.</div>
    <div class="mc-fb" data-key="b">Convergence is needed for the statement to be interesting, but it isn't the engine.
      \(\sum (-1)^{n+1}/n^2\) converges too, and is completely immune to rearrangement.</div>
    <div class="mc-fb" data-key="c">Correct &mdash; that's Step 5 of the scaffold, and it's what the algorithm spends.
      Because each supply is inexhaustible, the greedy overshoot-and-correct procedure can always continue. A series
      that converges but whose absolute values diverge is called <em>conditionally convergent</em>, and it's exactly
      this class that Riemann's theorem applies to.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Why does the reading conclude that "a power series is not a great big polynomial"?</p>
    <button class="mc-opt" type="button" data-key="a">Because finite sums obey rules &mdash; regrouping, reordering,
      substituting freely &mdash; that infinite ones can violate.</button>
    <button class="mc-opt" type="button" data-key="b">Because power series have infinitely many terms and polynomials
      have finitely many, which is only a matter of length.</button>
    <button class="mc-opt" type="button" data-key="c">Because power series involve \(x\), while the examples on this
      page are just numbers.</button>
    <div class="mc-fb" data-key="a">Correct. The difference isn't length, it's that "infinite sum" denotes a limit, and
      limits don't inherit the algebra of finite sums for free. Every property you want &mdash; term-by-term
      differentiation, integration, rearrangement, substitution at an endpoint &mdash; has to be proved separately and
      comes with hypotheses. Chapters 5 through 10 are largely the bill for this.</div>
    <div class="mc-fb" data-key="b">This is the intuition the reading is dismantling. "Just longer" is precisely the
      wrong picture &mdash; if it were only about length, rearranging the terms couldn't change the answer, and it
      does.</div>
    <div class="mc-fb" data-key="c">The presence of \(x\) isn't the issue. Fix any \(x\) and a power series becomes a
      numerical series exactly like the ones here &mdash; which is the whole reason these examples are relevant to power
      series at all.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The rearrangement machine hits \(\pi\), \(-5\), and \(\ln 2\) with the same set of terms. So what, if anything,
      does the symbol \(\sum_{n=1}^{\infty} a_n\) actually name? Write down the most careful sentence you can.</li>
    <li>Riemann's theorem devastates the alternating harmonic series but leaves \(\sum (-1)^{n+1}/n^2\) untouched. What
      is different about the second one? Try to state the distinguishing property before you're told the name for
      it.</li>
    <li>Euler's response to Grandi's series was to restrict the meaning of "sum" rather than to declare Leibniz wrong.
      Was that intellectual cowardice or good practice? Notice that Cesàro summation &mdash; which does assign \(1/2\)
      &mdash; is a working tool in analysis today.</li>
    <li>The harmonic series diverges, but you'd need something like \(2^{20}\) terms to pass \(10\). Could any amount of
      computation have settled whether it diverges? What does that tell you about what proof is <em>for</em>?</li>
    <li>Reading ahead: the reading says the series for \(1/(1+x)\) fails at \(x=1\) while the series for its
      antiderivative \(\ln(1+x)\) succeeds there. Integrating made convergence <em>better</em>. Guess why, then watch
      for whether your guess survives Chapter 5.</li>
  </ol>
</div>

<script>
  (function () {
    var LN2 = Math.log(2);

    /* ---------------- Grandi's series ---------------- */
    var gCanvas = document.getElementById('d14-grandi'),
      gOut = document.getElementById('d14-grandi-out'),
      gMode = 'left';

    function drawGrandi() {
      var d = M411.hidpi(gCanvas, 190), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      var N = 16, padL = 46, padR = 20, padT = 24, padB = 30;
      var plotW = W - padL - padR, plotH = H - padT - padB;
      function X(i) { return padL + (i - 1) / (N - 1) * plotW; }
      function Y(v) { return padT + (1.15 - v) / 1.4 * plotH; }

      // axes
      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      [0, 0.5, 1].forEach(function (v) {
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(v.toFixed(1), padL - 8, Y(v) + 4);
      });

      // partial sums 1,0,1,0,...
      var sums = [];
      for (var i = 1; i <= N; i++) sums.push(i % 2 === 1 ? 1 : 0);

      if (gMode === 'cesaro') {
        // running averages of the partial sums
        var run = 0, avg = [];
        for (var j = 0; j < N; j++) { run += sums[j]; avg.push(run / (j + 1)); }
        ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2;
        ctx.beginPath();
        avg.forEach(function (v, j) { j ? ctx.lineTo(X(j + 1), Y(v)) : ctx.moveTo(X(j + 1), Y(v)); });
        ctx.stroke();
        avg.forEach(function (v, j) {
          ctx.fillStyle = M411.colors.check;
          ctx.beginPath(); ctx.arc(X(j + 1), Y(v), 3.5, 0, 2 * Math.PI); ctx.fill();
        });
        ctx.setLineDash([5, 4]); ctx.strokeStyle = M411.colors.flaw;
        ctx.beginPath(); ctx.moveTo(padL, Y(0.5)); ctx.lineTo(W - padR, Y(0.5)); ctx.stroke();
        ctx.setLineDash([]);
      }

      // the partial sums themselves, always shown
      ctx.strokeStyle = gMode === 'cesaro' ? '#c9ccd1' : M411.colors.explore;
      ctx.lineWidth = gMode === 'cesaro' ? 1.5 : 2;
      ctx.beginPath();
      sums.forEach(function (v, j) { j ? ctx.lineTo(X(j + 1), Y(v)) : ctx.moveTo(X(j + 1), Y(v)); });
      ctx.stroke();
      sums.forEach(function (v, j) {
        ctx.fillStyle = gMode === 'cesaro' ? '#c9ccd1' : M411.colors.explore;
        ctx.beginPath(); ctx.arc(X(j + 1), Y(v), 3.5, 0, 2 * Math.PI); ctx.fill();
      });

      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('n', (padL + W - padR) / 2, H - 8);
    }

    var grandiText = {
      left: '<p><strong>\\((1-1) + (1-1) + (1-1) + \\cdots = 0 + 0 + 0 + \\cdots = 0\\)</strong></p>' +
        '<p>Every pair cancels, so the total is \\(0\\). Nothing here looks illegal &mdash; adding zeros ' +
        'forever really does give zero.</p>',
      right: '<p><strong>\\(1 + (-1+1) + (-1+1) + \\cdots = 1 + 0 + 0 + \\cdots = 1\\)</strong></p>' +
        '<p>Identical reasoning, parentheses shifted one place. Now the total is \\(1\\). Two applications ' +
        'of the same move, two different answers &mdash; so the move itself is the problem.</p>',
      cesaro: '<p><strong>The averages of the partial sums converge to \\(\\tfrac12\\).</strong></p>' +
        '<p>The partial sums are \\(1, 0, 1, 0, \\ldots\\) (grey). Their running averages are \\(1, ' +
        '\\tfrac12, \\tfrac23, \\tfrac12, \\tfrac35, \\ldots\\) (orange), and those <em>do</em> converge &mdash; ' +
        'to \\(\\tfrac12\\), Leibniz\'s answer.</p>' +
        '<p>This is called <em>Cesàro summation</em>, and it is a legitimate, useful, still-in-use notion. ' +
        'But it is a different definition of "sum," and the whole controversy came from not saying so out loud.</p>'
    };

    document.querySelectorAll('.d14-grouping').forEach(function (b) {
      b.addEventListener('click', function () {
        gMode = b.getAttribute('data-mode');
        gOut.innerHTML = grandiText[gMode];
        M411.typeset(gOut);
        drawGrandi();
      });
    });
    gOut.innerHTML = grandiText.left;
    M411.typeset(gOut);

    /* ---------------- Alternating harmonic partial sums ---------------- */
    var aCanvas = document.getElementById('d14-alt'),
      aOut = document.getElementById('d14-alt-out'),
      aN = document.getElementById('d14-n');

    function altSums(N) {
      var s = 0, out = [];
      for (var k = 1; k <= N; k++) { s += (k % 2 ? 1 : -1) / k; out.push(s); }
      return out;
    }

    function drawAlt() {
      var N = +aN.value;
      var sums = altSums(N);
      var d = M411.hidpi(aCanvas, 250), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      var padL = 52, padR = 20, padT = 20, padB = 32;
      var plotW = W - padL - padR, plotH = H - padT - padB;
      var lo = 0.4, hi = 1.05;
      function X(i) { return padL + (N === 1 ? 0.5 : (i - 1) / (N - 1)) * plotW; }
      function Y(v) { return padT + (hi - v) / (hi - lo) * plotH; }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = 0.4; g <= 1.0001; g += 0.1) {
        ctx.beginPath(); ctx.moveTo(padL, Y(g)); ctx.lineTo(W - padR, Y(g)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(g.toFixed(1), padL - 8, Y(g) + 4);
      }

      // the limit
      ctx.setLineDash([6, 4]); ctx.strokeStyle = M411.colors.scaffold; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(padL, Y(LN2)); ctx.lineTo(W - padR, Y(LN2)); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = M411.colors.scaffold; ctx.textAlign = 'left'; ctx.font = 'bold 11px sans-serif';
      ctx.fillText('ln 2', padL + 4, Y(LN2) - 6);

      // the trapping band between the last even and last odd partial sum
      var lastOdd = null, lastEven = null;
      for (var i = sums.length; i >= 1; i--) {
        if (lastOdd === null && i % 2 === 1) lastOdd = sums[i - 1];
        if (lastEven === null && i % 2 === 0) lastEven = sums[i - 1];
      }
      if (lastOdd !== null && lastEven !== null) {
        ctx.fillStyle = 'rgba(243,110,36,0.10)';
        ctx.fillRect(padL, Y(lastOdd), plotW, Y(lastEven) - Y(lastOdd));
      }

      // odd sums (above) and even sums (below)
      [1, 0].forEach(function (parity) {
        var color = parity ? M411.colors.check : M411.colors.explore;
        ctx.strokeStyle = color; ctx.lineWidth = 1.5;
        ctx.beginPath();
        var started = false;
        sums.forEach(function (v, j) {
          var n = j + 1;
          if (n % 2 !== parity) return;
          started ? ctx.lineTo(X(n), Y(v)) : (ctx.moveTo(X(n), Y(v)), started = true);
        });
        ctx.stroke();
        sums.forEach(function (v, j) {
          var n = j + 1;
          if (n % 2 !== parity) return;
          ctx.fillStyle = color;
          ctx.beginPath(); ctx.arc(X(n), Y(v), 3, 0, 2 * Math.PI); ctx.fill();
        });
      });

      ctx.fillStyle = M411.colors.check; ctx.textAlign = 'right'; ctx.font = '11px sans-serif';
      ctx.fillText('odd Sₙ, coming down', W - padR, padT + 12);
      ctx.fillStyle = M411.colors.explore;
      ctx.fillText('even Sₙ, coming up', W - padR, H - padB + 20);

      aOut.innerHTML = '<p>With \\(n = ' + N + '\\): \\(S_{' + N + '} = ' + sums[N - 1].toFixed(6) +
        '\\), and the limit is trapped between \\(' + Math.min(lastOdd, lastEven).toFixed(6) + '\\) and \\(' +
        Math.max(lastOdd, lastEven).toFixed(6) + '\\) &mdash; a band of width \\(' +
        Math.abs(lastOdd - lastEven).toFixed(6) + '\\).</p>' +
        '<p>The band narrows, but look at <em>how slowly</em>. Doubling \\(n\\) only halves the width. ' +
        'That sluggishness is worth a moment&rsquo;s thought, and it is what your Canvas problem for today is ' +
        'asking you to pin down precisely &mdash; so this widget deliberately stops at \\(n = 40\\).</p>';
      M411.typeset(aOut);
    }
    aN.addEventListener('input', drawAlt);

    /* ---------------- Riemann rearrangement machine ---------------- */
    var rCanvas = document.getElementById('d14-riemann'),
      rOut = document.getElementById('d14-riemann-out'),
      rTarget = document.getElementById('d14-target'),
      rTerms = document.getElementById('d14-terms');

    var rState = null;

    function rearrange(a, maxTerms) {
      var s = 0, odd = 0, even = 0, sums = [], mode = 'pos', crossings = 0;
      for (var t = 0; t < maxTerms; t++) {
        var above = s > a;
        if (mode === 'pos') {
          s += 1 / (2 * odd + 1); odd++;
          if (s > a) mode = 'neg';
        } else {
          s -= 1 / (2 * even + 2); even++;
          if (s <= a) mode = 'pos';
        }
        if ((s > a) !== above) crossings++;
        sums.push(s);
      }
      return { sums: sums, pos: odd, neg: even, final: s, crossings: crossings };
    }

    function runRiemann() {
      var a = parseFloat(rTarget.value);
      if (!isFinite(a)) { a = 0; rTarget.value = '0'; }
      rState = rearrange(a, +rTerms.value);
      rState.target = a;
      drawRiemann();

      var r = rState;
      var body =
        '<p>Using the first \\(' + r.sums.length + '\\) terms of the rearrangement: the running total is \\(' +
        r.final.toFixed(6) + '\\), against a target of \\(' + a + '\\).</p>';

      if (r.crossings === 0) {
        // Far-off targets need a very long run, because the supply of negative
        // terms only accumulates like (1/2)·H_n. Say so rather than showing a
        // flat-looking drift and letting it read as a broken widget.
        body += '<p><strong>It hasn\'t arrived yet</strong> &mdash; the running total has not crossed \\(' + a +
          '\\) even once, so all you are seeing so far is the algorithm marching in one direction. ' +
          'Drag the term slider further right and watch it get there.</p>' +
          '<p>That slowness is not a defect, it is the harmonic series being itself: the negative terms ' +
          'accumulate like \\(\\tfrac12 H_n \\approx \\tfrac12\\ln n\\), so reaching a target of \\(-5\\) takes ' +
          'on the order of \\(e^{10}\\) terms. The supply is infinite. It is just very slow to spend.</p>';
      } else {
        body += '<p>It got there by spending <strong>' + r.pos + '</strong> positive terms \\((1, \\tfrac13, ' +
          '\\tfrac15, \\ldots)\\) and <strong>' + r.neg + '</strong> negative ones \\((-\\tfrac12, -\\tfrac14, ' +
          '\\ldots)\\) &mdash; a ratio of about ' + (r.neg ? (r.pos / r.neg).toFixed(2) : '&infin;') + ' to 1, ' +
          'crossing the target ' + r.crossings + ' times along the way. ' +
          'In the original order that ratio is exactly 1 to 1.</p>' +
          '<p>Not one term was added, dropped, or repeated. Only the order changed.</p>';
      }
      rOut.innerHTML = body;
      M411.typeset(rOut);
    }

    function drawRiemann() {
      var d = M411.hidpi(rCanvas, 260), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      if (!rState) return;

      var sums = rState.sums, a = rState.target;
      var padL = 56, padR = 20, padT = 20, padB = 34;
      var plotW = W - padL - padR, plotH = H - padT - padB;

      var lo = Math.min.apply(null, sums), hi = Math.max.apply(null, sums);
      lo = Math.min(lo, a); hi = Math.max(hi, a);
      var span = Math.max(hi - lo, 0.5), mid = (hi + lo) / 2;
      lo = mid - span * 0.62; hi = mid + span * 0.62;

      function X(i) { return padL + i / (sums.length - 1) * plotW; }
      function Y(v) { return padT + (hi - v) / (hi - lo) * plotH; }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = 0; g <= 4; g++) {
        var v = lo + (hi - lo) * g / 4;
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(v.toFixed(2), padL - 8, Y(v) + 4);
      }

      // target
      ctx.setLineDash([6, 4]); ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(padL, Y(a)); ctx.lineTo(W - padR, Y(a)); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = M411.colors.check; ctx.textAlign = 'left'; ctx.font = 'bold 11px sans-serif';
      ctx.fillText('a = ' + a, padL + 4, Y(a) - 6);

      // partial sums of the rearranged series
      ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = 1.4;
      ctx.beginPath();
      sums.forEach(function (v, j) { j ? ctx.lineTo(X(j), Y(v)) : ctx.moveTo(X(j), Y(v)); });
      ctx.stroke();

      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('number of terms added', (padL + W - padR) / 2, H - 8);
    }

    document.getElementById('d14-go').addEventListener('click', runRiemann);
    rTerms.addEventListener('input', runRiemann);
    rTarget.addEventListener('change', runRiemann);
    document.querySelectorAll('.d14-target-preset').forEach(function (b) {
      b.addEventListener('click', function () {
        rTarget.value = b.getAttribute('data-t');
        runRiemann();
      });
    });

    M411.onResize(function () { drawGrandi(); drawAlt(); drawRiemann(); });
    drawGrandi();
    drawAlt();
    runRiemann();
  })();
</script>
