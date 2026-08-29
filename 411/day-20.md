---
layout: day
title: "MATH 411 Day 20: Limit Laws and the Squeeze Theorem"
day: 20
chapter_number: 6
chapter: "Sequences and Series"
day_title: "Limit Laws and the Squeeze Theorem"
blurb: "The point of paying the \\(\\varepsilon\\)&ndash;\\(N\\) price on a few general theorems is that you then stop paying it. Today the toolkit is finished and limits become algebra again."
reading: "Section 6.2, Corollary 6.2.10 through the Squeeze Theorem"
---

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>A limit computed entirely by citation</h2>

  <p>You could evaluate \(\lim_{n\to\infty}\frac{2n^2+7}{4n^2-n}\) with an \(\varepsilon\)&ndash;\(N\) argument, and it
    would be unpleasant. With the limit laws in hand it is a short algebraic computation in which <em>every step names
      a theorem</em>.</p>

  <p>Work it yourself first, then step through and check that you can justify each move. Getting used to seeing the
    theorems behind the algebra is the point &mdash; it is what your reading calls being "rigorous without having to
    run back to the definition each time."</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the computation</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1. Why can't we just take limits of the top and bottom?</div>
        <div class="sstep-body">
          <p>Because the quotient theorem requires the denominator's limit to be a nonzero real number, and both
            \(2n^2+7\) and \(4n^2-n\) diverge. The theorem simply doesn't apply to the expression as written.</p>
          <p>So the algebra comes first: rewrite until every piece has a limit the theorems can handle. This is why the
            "divide by the highest power" manoeuvre is not a trick but a necessity.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2. Factor out the dominant power.</div>
        <div class="sstep-body">
          \[ \frac{2n^2+7}{4n^2-n} = \frac{n^2\left(2 + \frac{7}{n^2}\right)}{n^2\left(4 - \frac{1}{n}\right)} =
          \frac{2 + \frac{7}{n^2}}{4 - \frac{1}{n}} \]
          <p>Note that the cancellation of \(n^2\) is ordinary algebra valid for each individual \(n\) &mdash; no limit
            theorem is involved yet. The two expressions are the same sequence.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3. Now name the theorems, from the inside out.</div>
        <div class="sstep-body">
          <ul>
            <li>\(\lim \frac1n = 0\) &mdash; proved directly from the definition on Day 17.</li>
            <li>\(\lim \frac{1}{n^2} = 0\) &mdash; by the <em>product</em> theorem applied to \(\frac1n \cdot
              \frac1n\).</li>
            <li>\(\lim \frac{7}{n^2} = 0\) and \(\lim \frac{1}{n} = 0\) scaled &mdash; by the <em>constant
                multiple</em> corollary.</li>
            <li>\(\lim 2 = 2\) and \(\lim 4 = 4\) &mdash; the <em>constant sequence</em> result.</li>
            <li>\(\lim\left(2 + \frac{7}{n^2}\right) = 2\) and \(\lim\left(4 - \frac1n\right) = 4\) &mdash; by the
              <em>sum</em> theorem (with the constant multiple \(-1\) for the subtraction).</li>
          </ul>
          <p>Five theorems, and we have not yet divided anything.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4. Apply the quotient theorem &mdash; and check its hypotheses.</div>
        <div class="sstep-body">
          <p>The denominator's limit is \(4 \ne 0\), and \(4 - \frac1n \ne 0\) for every \(n \ge 1\). Both hypotheses
            of Theorem 6.2.12 hold, so</p>
          \[ \lim_{n\to\infty}\frac{2n^2+7}{4n^2-n} = \frac{2}{4} = \frac12 \]
          <p>Checking those hypotheses is not a formality. The theorem needs both \(b \ne 0\) and \(b_n \ne 0\) for all
            \(n\) &mdash; the second because you cannot even form the quotient otherwise.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 5. What made the quotient theorem hard to prove.</div>
        <div class="sstep-body">
          <p>Day 19's product proof got stuck because \(\frac{\varepsilon}{2|a_n|}\) moved with \(n\), and the fix was
            a fixed bound \(B\) with \(|a_n| \le B\). The quotient has the mirror-image problem: in</p>
          \[ \left|\frac{1}{b_n} - \frac1b\right| = \frac{|b - b_n|}{|b_n||b|} \]
          <p>we need \(\frac{1}{|b_n|}\) bounded <em>above</em>, which means \(|b_n|\) bounded <em>away from zero</em>.
          </p>
          <p>Your reading's move is worth stealing. Since \(b \ne 0\), the number \(\frac{|b|}{2}\) is a legitimate
            positive tolerance &mdash; so feed it to the definition. Past the resulting \(N_1\), \(b_n\) is within
            \(\frac{|b|}{2}\) of \(b\), which forces \(|b_n| &gt; \frac{|b|}{2}\), hence \(\frac{1}{|b_n|} &lt;
            \frac{2}{|b|}\). A fixed bound, obtained by choosing a clever \(\varepsilon\).</p>
          <p>This is a technique, not a one-off: <strong>you may feed the definition any positive number you like, not
              just the \(\varepsilon\) you were handed.</strong> Choosing \(\frac{|b|}{2}\) to trap a sequence away
            from zero comes up repeatedly.</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The Squeeze Theorem</h2>

  <p>If \(r_n \le s_n \le t_n\) and the outer two converge to the <em>same</em> limit \(s\), then \(s_n\) has nowhere
    to go. Drag \(n\) and watch the corridor close.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d20-n">Terms shown</label>
      <input type="range" id="d20-n" min="4" max="60" step="1" value="14">
    </div>
    <div class="ctl">
      <label for="d20-ex">Example</label>
      <select id="d20-ex"></select>
    </div>
  </div>

  <canvas class="plot" id="d20-canvas"></canvas>
  <div class="readout" id="d20-out"></div>

  <p>Note carefully what the theorem delivers. Your reading flags it: "this theorem really says two things:
    \((s_n)\) converges <em>and</em> it converges to \(s\)."</p>

  <p>The existence half is the valuable one. Everything else in Chapter 6 requires you to already know a limit exists
    before you can compute it &mdash; the sum, product and quotient theorems all begin "if \(\lim a_n = a\) and \(\lim
    b_n = b\)." The Squeeze Theorem is the first tool that <em>produces</em> convergence rather than propagating it,
    and that is why it can handle sequences like \(\frac{\sin n}{n}\), whose behaviour is far too erratic to
    analyse directly.</p>

  <p>Pick the \(\frac{\sin n}{n}\) example above. Nothing about \(\sin n\) is under control &mdash; it jumps around
    \([-1,1]\) forever &mdash; but it is pinned between \(-\frac1n\) and \(\frac1n\), and that is enough.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Dividing by something that vanishes</h2>

  <p>The quotient theorem carries two hypotheses that are easy to skim past. Here is what happens when one goes
    missing.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Let \(a_n = \frac{1}{n}\) and \(b_n = \frac{1}{n^2}\). Both converge, with
        \(a = 0\) and \(b = 0\).</button>
      <button class="fline" type="button">Both are nonzero for every \(n\), so the quotient \(\frac{a_n}{b_n}\) is
        defined for every \(n\).</button>
      <button class="fline" type="button">By Theorem 6.2.12, \(\lim\frac{a_n}{b_n} = \frac{a}{b} =
        \frac{0}{0}\).</button>
      <button class="fline" type="button">But \(\frac{a_n}{b_n} = \frac{1/n}{1/n^2} = n\), which diverges.</button>
      <button class="fline" type="button">So the quotient theorem is false.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>True.</strong> Both sequences converge to \(0\) &mdash; Day 17 proved the first, and the product
        theorem gives the second.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>True, and it's the hypothesis people remember.</strong> Theorem 6.2.12 does require \(b_n \ne 0\) for
        all \(n\), and that holds here. Satisfying one hypothesis is not satisfying the theorem.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>There it is: the theorem also requires \(b \ne 0\), and here \(b = 0\).</strong></p>
      <p>Read Theorem 6.2.12 again: "Also suppose \(b \ne 0\) <em>and</em> \(b_n \ne 0, \forall n\)." Two separate
        conditions, and this argument checked only the second. The theorem simply does not apply, so it makes no claim
        about \(\lim \frac{a_n}{b_n}\) &mdash; true or false.</p>
      <p>The expression \(\frac{0}{0}\) should have been the alarm. It isn't a number, so an equation ending in it
        cannot be a valid conclusion.</p>
      <p>This is the honest content of the phrase "indeterminate form" from calculus. It doesn't mean the limit is
        mysterious; it means <em>the quotient theorem has nothing to say</em>, and you must analyse the sequence some
        other way. And the answer genuinely depends on the sequences, not just on their limits: \(\frac{1/n}{1/n^2}\)
        diverges, \(\frac{1/n^2}{1/n}\) tends to \(0\), and \(\frac{2/n}{1/n}\) tends to \(2\) &mdash; three different
        outcomes from three pairs with identical limits.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Perfectly true.</strong> \(\frac{1/n}{1/n^2} = n\), which diverges to infinity. There is no
        contradiction with anything, because line (3) was never entitled to its conclusion.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>False.</strong> The theorem is fine; it was misapplied. This is worth internalising as a habit: when a
        theorem appears to yield a false conclusion, the fault is essentially always an unchecked hypothesis. Go back
        and read the statement word by word.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on the toolkit</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">What does the Squeeze Theorem give you that the sum and product theorems don't?</p>
    <button class="mc-opt" type="button" data-key="a">A faster computation.</button>
    <button class="mc-opt" type="button" data-key="b">A way to handle infinite limits.</button>
    <button class="mc-opt" type="button" data-key="c">A conclusion that the middle sequence <em>converges</em> &mdash;
      it produces existence rather than assuming it.</button>
    <div class="mc-fb" data-key="a">Speed isn't the distinction; the other theorems are quick too.</div>
    <div class="mc-fb" data-key="b">Infinite limits are Day 21's topic, and the Squeeze Theorem as stated is about
      finite ones.</div>
    <div class="mc-fb" data-key="c">Correct, and your reading stresses it: "this theorem really says two things:
      \((s_n)\) converges and it converges to \(s\)." Every other limit law starts by <em>assuming</em> convergence.
      This one concludes it &mdash; which is why it can handle \(\frac{\sin n}{n}\).</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Why does the quotient proof use \(\varepsilon = \frac{|b|}{2}\) at one point?</p>
    <button class="mc-opt" type="button" data-key="a">Because \(\frac{|b|}{2}\) is the smallest useful
      tolerance.</button>
    <button class="mc-opt" type="button" data-key="b">To force \(|b_n| &gt; \frac{|b|}{2}\), bounding \(b_n\) away from
      zero so \(\frac{1}{|b_n|}\) has a fixed upper bound.</button>
    <button class="mc-opt" type="button" data-key="c">Because the final answer needs a factor of \(2\).</button>
    <div class="mc-fb" data-key="a">There is no smallest useful tolerance &mdash; \(\varepsilon\) ranges over all
      positive reals.</div>
    <div class="mc-fb" data-key="b">Correct, and the technique generalises. The definition will meet <em>any</em>
      positive tolerance you name, so you may name one chosen for its usefulness rather than one you were given.
      Half the limit is the natural choice for trapping a sequence away from zero.</div>
    <div class="mc-fb" data-key="c">The \(2\) that appears in \(\frac{2}{|b|}\) is a consequence of the choice, not
      the motive.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Why must \(\frac{2n^2+7}{4n^2-n}\) be rewritten before the limit laws apply?</p>
    <button class="mc-opt" type="button" data-key="a">Because numerator and denominator both diverge, so the quotient
      theorem's hypotheses fail as written.</button>
    <button class="mc-opt" type="button" data-key="b">Because the expression is not in lowest terms.</button>
    <button class="mc-opt" type="button" data-key="c">Because the limit laws only apply to bounded sequences.</button>
    <div class="mc-fb" data-key="a">Correct. The theorem needs both limits to exist as real numbers; neither does. The
      algebra converts it into a quotient whose parts do converge, and only then does the theorem apply.</div>
    <div class="mc-fb" data-key="b">Lowest terms is irrelevant here.</div>
    <div class="mc-fb" data-key="c">There's no boundedness hypothesis in the limit laws &mdash; convergence already
      implies boundedness, by Day 19's lemma.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">The Squeeze Theorem is stated with \(r_n \le s_n \le t_n\) for <em>all</em> \(n\). What if it only
      holds for large \(n\)?</p>
    <button class="mc-opt" type="button" data-key="a">The theorem fails.</button>
    <button class="mc-opt" type="button" data-key="b">You must first modify the sequences.</button>
    <button class="mc-opt" type="button" data-key="c">It still holds &mdash; take \(N = \max(N_0, N_1)\), where
      \(N_0\) is where the inequality starts.</button>
    <div class="mc-fb" data-key="a">Convergence never depends on finitely many initial terms &mdash; a fact worth
      stating explicitly and using often.</div>
    <div class="mc-fb" data-key="b">No modification needed; the proof absorbs the change directly.</div>
    <div class="mc-fb" data-key="c">Correct, and your reading spells out the repair. The \(\max\) move from Day 19
      handles it, and the same reasoning shows no limit theorem cares about any finite initial segment.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The sum, product and quotient theorems all assume the individual limits exist. Give an example where \(a_n +
      b_n\) converges but neither \(a_n\) nor \(b_n\) does. Does that contradict the sum theorem?</li>
    <li>Three pairs of sequences all tending to \(0\) gave quotients tending to \(\infty\), \(0\), and \(2\). What does
      that tell you about how much information "both tend to \(0\)" actually carries?</li>
    <li>The Squeeze Theorem produces existence. Are there other theorems you've met that do this &mdash; that conclude
      something exists without exhibiting it? (Day 29 is full of them.)</li>
    <li>You may feed the definition any positive tolerance, including one built out of the limit itself. Where else
      might a cleverly chosen \(\varepsilon\) buy you something?</li>
  </ol>
</div>

<script>
  (function () {
    var EXAMPLES = [
      {
        label: 'sin(n)/n  squeezed by ±1/n',
        s: function (n) { return Math.sin(n) / n; },
        r: function (n) { return -1 / n; },
        t: function (n) { return 1 / n; },
        L: 0,
        note: '\\(-\\frac1n \\le \\frac{\\sin n}{n} \\le \\frac1n\\) because \\(|\\sin n| \\le 1\\). The middle ' +
          'sequence is wild &mdash; \\(\\sin n\\) never settles &mdash; but the corridor closes to \\(0\\), so it ' +
          'has nowhere left to be.'
      },
      {
        label: '(n+1)/n²  squeezed by 0 and 2/n',
        s: function (n) { return (n + 1) / (n * n); },
        r: function () { return 0; },
        t: function (n) { return 2 / n; },
        L: 0,
        note: 'Your reading\'s Example 6.2.17: \\(0 \\le \\frac{n+1}{n^2} \\le \\frac{n+n}{n^2} = \\frac2n\\). ' +
          'The upper bound is deliberately crude &mdash; it only has to be <em>an</em> upper bound that converges ' +
          'to the right thing.'
      },
      {
        label: 'cos(n²)/√n  squeezed by ±1/√n',
        s: function (n) { return Math.cos(n * n) / Math.sqrt(n); },
        r: function (n) { return -1 / Math.sqrt(n); },
        t: function (n) { return 1 / Math.sqrt(n); },
        L: 0,
        note: '\\(\\cos(n^2)\\) is about as erratic as a bounded sequence gets, and it makes no difference at ' +
          'all. Only the bound \\(|\\cos(n^2)| \\le 1\\) is used.'
      },
      {
        label: '2 + (−1)^n/n  squeezed toward 2',
        s: function (n) { return 2 + Math.pow(-1, n) / n; },
        r: function (n) { return 2 - 1 / n; },
        t: function (n) { return 2 + 1 / n; },
        L: 2,
        note: 'The middle sequence bounces from one wall of the corridor to the other at every step, and still has ' +
          'no choice but to converge to \\(2\\). Being trapped says nothing about being well behaved.'
      }
    ];

    var nIn = document.getElementById('d20-n'),
      sel = document.getElementById('d20-ex'),
      canvas = document.getElementById('d20-canvas'),
      out = document.getElementById('d20-out');

    EXAMPLES.forEach(function (e, i) {
      var o = document.createElement('option');
      o.value = String(i); o.textContent = e.label;
      sel.appendChild(o);
    });

    function draw() {
      var N = +nIn.value, ex = EXAMPLES[+sel.value];
      var d = M411.hidpi(canvas, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 52, padR = 20, padT = 20, padB = 34;

      var all = [];
      for (var n = 1; n <= N; n++) { all.push(ex.r(n), ex.s(n), ex.t(n)); }
      var lo = Math.min.apply(null, all), hi = Math.max.apply(null, all);
      var span = Math.max(hi - lo, 1e-6), mid = (hi + lo) / 2;
      lo = mid - span * 0.68; hi = mid + span * 0.68;

      function X(n) { return padL + (n - 1) / Math.max(N - 1, 1) * (W - padL - padR); }
      function Y(v) { return padT + (hi - v) / (hi - lo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = 0; g <= 4; g++) {
        var v = lo + (hi - lo) * g / 4;
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(v.toFixed(2), padL - 8, Y(v) + 4);
      }

      // the corridor
      ctx.fillStyle = 'rgba(0,156,222,0.16)';
      ctx.beginPath();
      for (var n1 = 1; n1 <= N; n1++) { n1 === 1 ? ctx.moveTo(X(n1), Y(ex.t(n1))) : ctx.lineTo(X(n1), Y(ex.t(n1))); }
      for (var n2 = N; n2 >= 1; n2--) ctx.lineTo(X(n2), Y(ex.r(n2)));
      ctx.closePath(); ctx.fill();

      // the limit
      ctx.setLineDash([6, 4]); ctx.strokeStyle = M411.colors.scaffold; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(padL, Y(ex.L)); ctx.lineTo(W - padR, Y(ex.L)); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = M411.colors.scaffold; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('s = ' + ex.L, W - padR - 44, Y(ex.L) - 6);

      function dots(f, color, rad) {
        for (var n = 1; n <= N; n++) {
          ctx.fillStyle = color;
          ctx.beginPath(); ctx.arc(X(n), Y(f(n)), rad, 0, 2 * Math.PI); ctx.fill();
        }
      }
      dots(ex.r, 'rgba(0,156,222,0.7)', 2.6);
      dots(ex.t, 'rgba(0,156,222,0.7)', 2.6);
      dots(ex.s, M411.colors.check, 4);

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = M411.colors.explore; ctx.fillText('rₙ and tₙ', padL + 6, padT + 14);
      ctx.fillStyle = M411.colors.check; ctx.fillText('sₙ (trapped)', padL + 6, padT + 32);

      out.innerHTML =
        '<p>At \\(n = ' + N + '\\): corridor width \\(t_n - r_n = ' + (ex.t(N) - ex.r(N)).toFixed(6) +
        '\\), and \\(s_{' + N + '} = ' + ex.s(N).toFixed(6) + '\\).</p>' +
        '<p>' + ex.note + '</p>';
      M411.typeset(out);
    }
    nIn.addEventListener('input', draw);
    sel.addEventListener('change', draw);
    M411.onResize(draw);
    draw();
  })();
</script>
