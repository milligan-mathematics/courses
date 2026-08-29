---
layout: day
title: "MATH 411 Day 18: Proving a Sequence Doesn't Converge"
day: 18
chapter_number: 6
chapter: "Sequences and Series"
day_title: "Proving a Sequence Doesn't Converge"
blurb: "To show a sequence converges you must beat every challenge. To show it doesn't, you need only one challenge it can never beat &mdash; and then defeat every \\(N\\) anyone proposes."
reading: "Section 6.1, Example 6.1.8 through Definition 6.1.11 and convergence to a general limit"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The adversary's turn</h2>

  <p>On Day 17 you were the one answering challenges. Proving <em>non</em>-convergence swaps the roles: you pick a
    single \(\varepsilon\) that can never be met, and then no matter what \(N\) your opponent offers, you produce an
    \(n &gt; N\) that escapes the band.</p>

  <p>Play the escape game. Pick a sequence and a claimed limit, then propose values of \(N\) &mdash; the page will find
    a term past your \(N\) that breaks the bound, if one exists.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d18-seq">Sequence</label>
      <select id="d18-seq"></select>
    </div>
    <div class="ctl">
      <label for="d18-L">Claimed limit \(L\)</label>
      <input type="number" id="d18-L" value="0" step="0.5" style="width:100px">
    </div>
    <div class="ctl">
      <label for="d18-N">Your opponent's \(N\)</label>
      <input type="range" id="d18-N" min="0" max="300" step="1" value="20">
    </div>
  </div>

  <canvas class="plot" id="d18-canvas"></canvas>
  <div class="readout" id="d18-out"></div>

  <p>Notice the asymmetry in what the two claims cost. To prove convergence you owe an answer for infinitely many
    challenges. To disprove it you need <em>one</em> \(\varepsilon\) &mdash; but for that \(\varepsilon\) you must
    defeat infinitely many proposed \(N\)s.</p>

  <p>Your reading's Example 6.1.8 does exactly this for \((2,0,2,0,\ldots)\): fix \(\varepsilon = 2\), and for any
    \(N\), pick an even \(n &gt; N\), where the term is \(2\) and the distance to \(0\) is not less than \(2\). One
    \(\varepsilon\); a recipe covering every \(N\).</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Negating a quantified statement</h2>

  <p>Turning "converges" into "does not converge" is a mechanical operation on quantifiers &mdash; but only if you know
    the mechanics. Your problem set asks you to perform it on the definition, so here is the machinery drilled on
    statements that have nothing to do with sequences.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the rules</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Rule 1. The negation of "for all" is "there exists".</div>
        <div class="sstep-body">
          <p><em>Every student in the class has a laptop.</em></p>
          <p>Negation: <em>there is a student in the class who does not have a laptop.</em></p>
          <p>Note what the negation is <strong>not</strong>: "no student has a laptop." Denying that something holds
            universally requires only one exception, not universal failure. This is the single most common error, and
            it will wreck a divergence proof if you make it.</p>
          \[ \neg\big(\forall x\; P(x)\big) \;\equiv\; \exists x\; \neg P(x) \]
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Rule 2. The negation of "there exists" is "for all".</div>
        <div class="sstep-body">
          <p><em>There is a student who has read every chapter.</em></p>
          <p>Negation: <em>every student has failed to read every chapter</em> &mdash; that is, for each student there
            is some chapter they haven't read.</p>
          \[ \neg\big(\exists x\; P(x)\big) \;\equiv\; \forall x\; \neg P(x) \]
          <p>Notice how the inner part also had to be negated, which brings us to the real rule.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Rule 3. Work outside in, flipping each quantifier and finally the statement.</div>
        <div class="sstep-body">
          <p>For nested quantifiers, walk left to right: every \(\forall\) becomes \(\exists\), every \(\exists\)
            becomes \(\forall\), the order is <strong>preserved</strong>, and the innermost statement gets negated at
            the end.</p>
          <p><em>For every recipe there is an ingredient that some shop in town does not stock.</em></p>
          <p>Negation: <em>there is a recipe such that for every ingredient, every shop in town stocks it.</em></p>
          <p>Three quantifiers, three flips, same order, and the final "does not stock" became "stocks."</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Rule 4. Negating an implication &mdash; the one people get wrong.</div>
        <div class="sstep-body">
          <p>The definition contains "if \(n &gt; N\) then \(|s_n - L| &lt; \varepsilon\)." An implication \(P
            \Rightarrow Q\) is false exactly when \(P\) is true and \(Q\) is false:</p>
          \[ \neg(P \Rightarrow Q) \;\equiv\; P \;\wedge\; \neg Q \]
          <p>So the negation is <em>not</em> another implication. It asserts both halves: the hypothesis holds
            <strong>and</strong> the conclusion fails. Concretely, negating "if it rains then the match is cancelled"
            gives "it rains and the match is not cancelled" &mdash; not "if it rains the match happens."</p>
          <p>That is the whole toolkit. Applying it to Definition 6.1.1 is your problem for today; the mechanics above
            are all you need, and if you find yourself reasoning about what non-convergence "means" rather than
            turning a crank, stop and turn the crank instead.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Rule 5. Reading the result as a strategy.</div>
        <div class="sstep-body">
          <p>Once you've negated the definition, read the quantifiers as instructions about <em>who chooses what, and
              in what order</em>. Each quantifier is a move:</p>
          <ul>
            <li>\(\exists \varepsilon\) &mdash; <strong>you</strong> choose, and may choose cleverly.</li>
            <li>\(\forall N\) &mdash; <strong>your opponent</strong> chooses, and you must handle every case.</li>
            <li>\(\exists n &gt; N\) &mdash; <strong>you</strong> choose again, and may use their \(N\).</li>
          </ul>
          <p>The pattern of a divergence proof follows immediately: name your \(\varepsilon\), let \(N\) be arbitrary,
            and give a formula producing a suitable \(n\) in terms of \(N\). Look at Example 6.1.8 in your reading and
            you'll see exactly those three moves &mdash; "let \(\varepsilon = 2\)", "let \(N\) be any integer", "let
            \(k &gt; \frac{N}{2}\) and take \(n = 2k\)".</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>One \(\varepsilon\) is not enough</h2>

  <p>A student is asked to show that \(s_n = 5 + \frac{(-1)^n}{2}\) converges to \(5\). Here is the argument.</p>

  <p><strong>Click the line that doesn't do what it claims.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">The terms of \(s_n\) are \(4.5, 5.5, 4.5, 5.5, \ldots\), alternating either
        side of \(5\).</button>
      <button class="fline" type="button">Every term satisfies \(|s_n - 5| = \tfrac12\).</button>
      <button class="fline" type="button">So with \(\varepsilon = 1\) and \(N = 0\), every \(n &gt; N\) gives \(|s_n -
        5| = \tfrac12 &lt; 1\).</button>
      <button class="fline" type="button">We have produced an \(N\) that works for \(\varepsilon\), so by Definition
        6.1.11, \(\lim s_n = 5\).</button>
      <button class="fline" type="button">Therefore the sequence converges.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct.</strong> \((-1)^n/2\) is \(\pm\frac12\), so the terms alternate between \(4.5\) and
        \(5.5\).</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct.</strong> The distance from every term to \(5\) is exactly \(\frac12\) &mdash; never more,
        and, crucially, never less.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Correct, and genuinely verified.</strong> With \(\varepsilon = 1\), the tolerance really is met by
        every term from the very beginning. There is nothing wrong with this sentence.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>That's the failure: "for \(\varepsilon\)" was supposed to be "for every \(\varepsilon\)."</strong></p>
      <p>The definition opens with \(\forall \varepsilon &gt; 0\). Meeting one particular tolerance establishes
        nothing. This argument shows the sequence stays within \(1\) of \(5\) &mdash; which is true, and is a statement
        about <em>boundedness</em>, not convergence.</p>
      <p>Take \(\varepsilon = \frac14\) and the claim collapses instantly: \(|s_n - 5| = \frac12\) for every \(n\), so
        no term is ever within \(\frac14\), and no \(N\) exists. The sequence does not converge to \(5\) &mdash; or to
        anything else.</p>
      <p>Set the widget above to this sequence with \(L = 5\) and try it. Every \(N\) fails, forever, because the terms
        never get closer than \(\frac12\).</p>
      <p>This is worth naming as a habit: an \(\varepsilon\)&ndash;\(N\) proof must produce \(N\) as a
        <em>function</em> of \(\varepsilon\). If your \(N\) is a specific number with no \(\varepsilon\) in it, you have
        almost certainly proved something weaker than you intended.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>False &mdash; inherited from line (4).</strong> The sequence oscillates forever between two values
        that stay half a unit apart. It converges to nothing at all, which your problem set's technique will let you
        prove properly.</p>
    </div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Converging to something other than zero</h2>

  <p>Definition 6.1.11 changes almost nothing: \(|s_n|\) becomes \(|s_n - L|\), because the quantity that must get
    small is the <em>distance to the limit</em>. In fact \(\lim s_n = L\) if and only if \(\lim (s_n - L) = 0\), so
    every general limit is a limit-to-zero in disguise.</p>

  <p>The new work is algebraic: you must simplify \(|s_n - L|\) before you can bound it. Here is a worked example
    &mdash; not one of yours &mdash; showing the pattern.</p>

  <p><strong>Claim.</strong> \(\displaystyle\lim_{n\to\infty}\frac{2n+3}{n+1} = 2\).</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the scrapwork and proof</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Scrapwork 1. Combine into a single fraction &mdash; always the first move.</div>
        <div class="sstep-body">
          \[ \left|\frac{2n+3}{n+1} - 2\right| = \left|\frac{2n+3 - 2(n+1)}{n+1}\right| = \left|\frac{1}{n+1}\right| =
          \frac{1}{n+1} \]
          <p>The subtraction is what kills the leading behaviour. The \(2n\) terms cancel, and what's left is the small
            quantity that was hiding inside the difference. Getting a common denominator first is nearly always the
            right opening move.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Scrapwork 2. Bound it by something obviously controllable.</div>
        <div class="sstep-body">
          <p>\(\frac{1}{n+1} &lt; \frac{1}{n}\), and \(\frac1n &lt; \varepsilon\) exactly when \(n &gt;
            \frac{1}{\varepsilon}\). So \(N = \frac{1}{\varepsilon}\) should do.</p>
          <p>We could have used \(N = \frac{1}{\varepsilon} - 1\) and been sharper. There is no prize for sharpness
            &mdash; a simpler \(N\) that works is a better \(N\).</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">The formal proof.</div>
        <div class="sstep-body">
          <p><em>Proof.</em> Let \(\varepsilon &gt; 0\). Let \(N = \frac{1}{\varepsilon}\). If \(n &gt; N\) then \(n
            &gt; \frac{1}{\varepsilon}\), so \(\frac1n &lt; \varepsilon\). Hence</p>
          \[ \left|\frac{2n+3}{n+1} - 2\right| = \frac{1}{n+1} &lt; \frac{1}{n} &lt; \varepsilon \]
          <p>Therefore \(\lim_{n\to\infty}\frac{2n+3}{n+1} = 2\). \(\blacksquare\)</p>
          <p>Three parts again: accept \(\varepsilon\), name \(N\), verify. The algebra of step 1 is visible inside the
            chain of inequalities, exactly as your reading promised.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">The awkward question this raises.</div>
        <div class="sstep-body">
          <p>Where did the \(2\) come from? Nowhere in the proof &mdash; it was <em>guessed</em>, and the definition
            merely confirmed the guess.</p>
          <p>Your reading is candid about this: "given a specific sequence such as \(\left(\frac{n}{n+100}\right)\),
            the definition does not indicate what the limit would be if, in fact, it exists. Once an educated guess is
            made as to what the limit should be, the definition only verifies that this intuition is correct."</p>
          <p>So what is the definition <em>for</em>? Not for finding limits. It was built to settle whether intuitions
            already in confident use could be justified &mdash; and Chapter 5 showed exactly how badly intuition can go
            wrong when nothing checks it. The definition is the check.</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on failing to converge</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">To show \(\lim s_n \ne L\), how many values of \(\varepsilon\) must you exhibit?</p>
    <button class="mc-opt" type="button" data-key="a">All of them.</button>
    <button class="mc-opt" type="button" data-key="b">One &mdash; a single \(\varepsilon\) for which no \(N\)
      works.</button>
    <button class="mc-opt" type="button" data-key="c">All sufficiently small ones.</button>
    <div class="mc-fb" data-key="a">That would be proving something much stronger, and it isn't what the negation says.
      The negation of \(\forall\) is \(\exists\).</div>
    <div class="mc-fb" data-key="b">Correct. Convergence claims \(\forall\varepsilon\), so its negation claims
      \(\exists\varepsilon\). Your reading: "we only need one to mess us up." Note the flip side &mdash; for that one
      \(\varepsilon\), you must defeat <em>every</em> \(N\).</div>
    <div class="mc-fb" data-key="c">True as a fact (if one \(\varepsilon\) fails, all smaller ones do too), but you are
      only obliged to produce one.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">In the negated definition, who chooses \(N\), and what may your choice of \(n\) depend on?</p>
    <button class="mc-opt" type="button" data-key="a">You choose \(N\); \(n\) may not depend on it.</button>
    <button class="mc-opt" type="button" data-key="b">You choose both.</button>
    <button class="mc-opt" type="button" data-key="c">\(N\) is arbitrary &mdash; you must handle every one &mdash; and
      your \(n\) may be chosen using \(N\).</button>
    <div class="mc-fb" data-key="a">Reversed. \(N\) sits under a \(\forall\) in the negation, so it is not yours to
      pick.</div>
    <div class="mc-fb" data-key="b">You choose \(\varepsilon\) and \(n\); \(N\) is your opponent's.</div>
    <div class="mc-fb" data-key="c">Correct, and being able to use \(N\) is what makes these proofs tractable. Example
      6.1.8 takes \(k &gt; \frac{N}{2}\) and sets \(n = 2k\) &mdash; a formula in \(N\), producing an even index past
      whatever was proposed.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">What is the relationship between Definitions 6.1.1 and 6.1.11?</p>
    <button class="mc-opt" type="button" data-key="a">\(\lim s_n = L\) if and only if \(\lim (s_n - L) = 0\) &mdash;
      the second is the first applied to the shifted sequence.</button>
    <button class="mc-opt" type="button" data-key="b">They are unrelated definitions for different
      situations.</button>
    <button class="mc-opt" type="button" data-key="c">6.1.11 is strictly stronger.</button>
    <div class="mc-fb" data-key="a">Correct &mdash; Note 1 of your reading. The general case reduces to the case
      \(L=0\) by subtracting, which is why the reading built the \(L=0\) version first and why the algebraic move in
      every proof is to simplify \(|s_n - L|\).</div>
    <div class="mc-fb" data-key="b">6.1.1 is the special case \(L = 0\) of 6.1.11.</div>
    <div class="mc-fb" data-key="c">It's more general, not stronger &mdash; and it reduces to the special case
      immediately.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">If the definition can't find limits, only verify them, what is it for?</p>
    <button class="mc-opt" type="button" data-key="a">Nothing practical; it's ceremonial.</button>
    <button class="mc-opt" type="button" data-key="b">To settle whether intuitions already in use are actually correct
      &mdash; a check, built because Chapter 5 showed intuition failing.</button>
    <button class="mc-opt" type="button" data-key="c">To compute limits faster than intuition can.</button>
    <div class="mc-fb" data-key="a">Chapter 5 is the answer to this. Term-by-term differentiation of a Fourier series
      felt every bit as obvious as anything else, and it was wrong. Without a check there is no way to know which
      intuitions are the wrong ones.</div>
    <div class="mc-fb" data-key="b">Correct. Your reading: "This definition was developed to address the foundational
      issues. Could our intuitions be verified in a concrete fashion that was above reproach?" It's an auditing tool,
      and Day 19 shows the payoff &mdash; once a few general theorems are verified this way, you rarely touch the
      definition again.</div>
    <div class="mc-fb" data-key="c">It is dramatically slower than intuition. Speed was never the point.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Proving convergence means answering infinitely many challenges; disproving it means defeating infinitely many
      \(N\)s. Is one of these harder in practice? Does your answer depend on the sequence?</li>
    <li>The sequence \(4.5, 5.5, 4.5, 5.5,\ldots\) stays within \(1\) of \(5\) forever. Write down precisely what
      property that <em>does</em> establish, and say how it differs from convergence.</li>
    <li>For a divergent sequence, is there a largest \(\varepsilon\) that fails? A smallest? Try to describe the set of
      \(\varepsilon\) that fail for \((2,0,2,0,\ldots)\) with \(L=0\).</li>
    <li>Every general limit reduces to a limit of \(0\) by subtracting \(L\). Is there anything a general \(L\)
      genuinely adds, or is Definition 6.1.11 pure convenience?</li>
  </ol>
</div>

<script>
  (function () {
    var SEQS = [
      { label: '1 + (−1)^n   →  2,0,2,0,…', f: function (n) { return 1 + Math.pow(-1, n); }, L: 0 },
      { label: '5 + (−1)^n / 2', f: function (n) { return 5 + Math.pow(-1, n) / 2; }, L: 5 },
      { label: 'sin(n)', f: function (n) { return Math.sin(n); }, L: 0 },
      { label: '(−1)^n · n   (unbounded)', f: function (n) { return Math.pow(-1, n) * n; }, L: 0 },
      { label: '1/n   (this one does converge)', f: function (n) { return 1 / n; }, L: 0 },
      { label: '(2n+3)/(n+1)   (converges)', f: function (n) { return (2 * n + 3) / (n + 1); }, L: 2 }
    ];

    var sel = document.getElementById('d18-seq'),
      LIn = document.getElementById('d18-L'),
      NIn = document.getElementById('d18-N'),
      canvas = document.getElementById('d18-canvas'),
      out = document.getElementById('d18-out');

    SEQS.forEach(function (s, i) {
      var o = document.createElement('option');
      o.value = String(i); o.textContent = s.label;
      sel.appendChild(o);
    });

    var NTERMS = 320;

    function draw() {
      var seq = SEQS[+sel.value];
      var L = parseFloat(LIn.value);
      if (!isFinite(L)) L = 0;
      var N = +NIn.value;

      // Choose the epsilon an adversary would pick: half the eventual spread of
      // the tail about L, so a genuinely divergent sequence can never satisfy it.
      var tail = [];
      for (var t = 40; t <= NTERMS; t++) tail.push(Math.abs(seq.f(t) - L));
      var sup = Math.max.apply(null, tail);
      var eps = Math.max(sup / 2, 1e-6);

      var vals = [];
      for (var n = 1; n <= NTERMS; n++) vals.push(seq.f(n));

      // the escape: first index past N breaking the band
      var escape = -1;
      for (var i = N; i < NTERMS; i++) {
        if (Math.abs(vals[i] - L) >= eps) { escape = i + 1; break; }
      }

      var d = M411.hidpi(canvas, 320), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 54, padR = 20, padT = 20, padB = 34;

      var vlo = Math.min.apply(null, vals.concat([L - eps * 1.5]));
      var vhi = Math.max.apply(null, vals.concat([L + eps * 1.5]));
      var span = Math.max(vhi - vlo, 1e-6), mid = (vhi + vlo) / 2;
      vlo = mid - span * 0.62; vhi = mid + span * 0.62;

      function X(n) { return padL + (n - 1) / (NTERMS - 1) * (W - padL - padR); }
      function Y(v) { return padT + (vhi - v) / (vhi - vlo) * (H - padT - padB); }

      ctx.fillStyle = 'rgba(0,133,82,0.13)';
      ctx.fillRect(padL, Y(L + eps), W - padL - padR, Math.max(Y(L - eps) - Y(L + eps), 1));
      ctx.strokeStyle = M411.colors.scaffold; ctx.lineWidth = 1.3; ctx.setLineDash([5, 4]);
      [L + eps, L - eps].forEach(function (v) {
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
      });
      ctx.setLineDash([]);

      // the proposed N, and everything to its left greyed out
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(padL, padT, X(Math.max(N, 1)) - padL, H - padT - padB);
      ctx.strokeStyle = M411.colors.muted; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(X(Math.max(N, 1)), padT); ctx.lineTo(X(Math.max(N, 1)), H - padB); ctx.stroke();
      ctx.fillStyle = M411.colors.muted; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('proposed N = ' + N, X(Math.max(N, 1)) + 5, H - padB - 8);

      vals.forEach(function (v, i) {
        var n = i + 1;
        var past = n > N, inBand = Math.abs(v - L) < eps;
        ctx.fillStyle = !past ? '#ccd0d5' : (inBand ? 'rgba(0,133,82,0.8)' : '#d9534f');
        ctx.beginPath(); ctx.arc(X(n), Y(v), n < 70 ? 2.6 : 1.7, 0, 2 * Math.PI); ctx.fill();
      });

      if (escape > 0) {
        ctx.strokeStyle = '#d9534f'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(X(escape), Y(vals[escape - 1]), 8, 0, 2 * Math.PI); ctx.stroke();
        ctx.fillStyle = '#d9534f'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('n = ' + escape, X(escape), Y(vals[escape - 1]) - 14);
      }

      var msg;
      if (escape > 0) {
        msg = '<p><strong style="color:#d9534f">Escaped.</strong> Past your opponent\'s \\(N = ' + N +
          '\\), the term \\(s_{' + escape + '} = ' + vals[escape - 1].toFixed(4) + '\\) sits a distance \\(' +
          Math.abs(vals[escape - 1] - L).toFixed(4) + '\\) from \\(L\\) &mdash; not less than \\(\\varepsilon\\).</p>' +
          '<p>Slide \\(N\\) as far right as you like: another escape appears every time. That pattern &mdash; ' +
          'an escape available past <em>every</em> \\(N\\) &mdash; is exactly what a divergence proof has to ' +
          'establish, and it is why the proof gives \\(n\\) as a formula in \\(N\\) rather than a number.</p>';
      } else {
        msg = '<p><strong style="color:var(--a411-scaffold)">No escape.</strong> Every term past \\(N = ' + N +
          '\\) lies inside the band, so this \\(N\\) survives &mdash; and it will keep surviving as you tighten ' +
          '\\(\\varepsilon\\), because this sequence genuinely converges to \\(' + L + '\\).</p>';
      }

      out.innerHTML =
        '<p>Adversary\'s choice: \\(\\varepsilon = ' + eps.toFixed(4) + '\\) (half the eventual spread of the ' +
        'sequence about \\(L = ' + L + '\\)).</p>' + msg;
      M411.typeset(out);
    }

    sel.addEventListener('change', function () { LIn.value = SEQS[+sel.value].L; draw(); });
    LIn.addEventListener('input', draw);
    NIn.addEventListener('input', draw);
    M411.onResize(draw);
    draw();
  })();
</script>
