---
layout: day
title: "MATH 411 Day 19: The Triangle Inequality and Bounded Sequences"
day: 19
chapter_number: 6
chapter: "Sequences and Series"
day_title: "The Triangle Inequality and Bounded Sequences"
blurb: "The definition is rigorous and exhausting. The way out is to prove a handful of general rules once, carefully, and then never touch the definition again."
reading: "Section 6.2, the limit as a primary tool, through the scrapwork for the product theorem"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The triangle inequality, on a line</h2>

  <p>Almost every proof in the rest of this course runs through</p>

  \[ |a+b| \le |a| + |b| \]

  <p>which looks unremarkable until you notice what it lets you do: <strong>split a quantity you can't control into
    pieces you can</strong>. Here it is, with the three lengths drawn.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d19-a">\(a\)</label>
      <input type="range" id="d19-a" min="-5" max="5" step="0.1" value="3">
    </div>
    <div class="ctl">
      <label for="d19-b">\(b\)</label>
      <input type="range" id="d19-b" min="-5" max="5" step="0.1" value="-2">
    </div>
  </div>

  <canvas class="plot" id="d19-tri"></canvas>
  <div class="readout" id="d19-tri-out"></div>

  <p>Give \(a\) and \(b\) the same sign and the inequality becomes an equality &mdash; the two displacements reinforce.
    Give them opposite signs and there is slack, because they partly cancel. The inequality is the statement that
    cancellation can only ever <em>help</em>.</p>

  <p>Which is exactly why it's useful. In a proof you rarely know the signs of the quantities involved, so you give up
    the possibility of cancellation and bound each piece separately. You lose nothing when the signs happen to agree,
    and you gain a bound that holds regardless.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Why \(\varepsilon/2\), and why it isn't a trick</h2>

  <p>The sum theorem says: if \(a_n \to a\) and \(b_n \to b\) then \(a_n + b_n \to a+b\). By the triangle inequality,</p>

  \[ |(a_n + b_n) - (a+b)| = |(a_n - a) + (b_n - b)| \le |a_n - a| + |b_n - b| \]

  <p>so if each piece is under \(\frac{\varepsilon}{2}\), the total is under \(\varepsilon\). Watch the budget being
    spent.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d19-eps">\(\varepsilon\)</label>
      <input type="range" id="d19-eps" min="-2.5" max="0" step="0.02" value="-1">
    </div>
  </div>

  <canvas class="plot" id="d19-half"></canvas>
  <div class="readout" id="d19-half-out"></div>

  <p>The two sequences meet their \(\frac{\varepsilon}{2}\) targets at different places, \(N_1\) and \(N_2\). Past
    <em>both</em> &mdash; that is, past \(N = \max(N_1, N_2)\) &mdash; the two errors together stay under
    \(\varepsilon\).</p>

  <p>There is nothing sacred about halves. Thirds would work for a sum of three sequences; \(\frac{\varepsilon}{2}\)
    and \(\frac{\varepsilon}{2}\) is simply the obvious way to divide one budget between two spenders. What matters is
    the shape of the move: <em>decide how much error each piece may contribute, then use the definition to buy exactly
      that much.</em></p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>The obvious attack on the product theorem</h2>

  <p>Now the product: if \(a_n \to a\) and \(b_n \to b\), then \(a_nb_n \to ab\). Your reading opens with the standard
    "uncancel" move &mdash; subtract and add \(a_nb\) &mdash; arriving at</p>

  \[ |a_nb_n - ab| \le |a_n||b_n - b| + |b||a_n - a| \]

  <p>Two pieces, each to be pushed under \(\frac{\varepsilon}{2}\), exactly as before. Here is the natural next move.
  </p>

  <p><strong>Click the step that cannot be carried out.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">For the second piece, make \(|a_n - a| &lt;
        \frac{\varepsilon}{2(|b|+1)}\), which the definition permits since that bound is a fixed positive
        number.</button>
      <button class="fline" type="button">The \(+1\) in \(|b|+1\) is there so the bound stays defined when \(b =
        0\).</button>
      <button class="fline" type="button">For the first piece, symmetrically, make \(|b_n - b| &lt;
        \frac{\varepsilon}{2|a_n|}\).</button>
      <button class="fline" type="button">Take \(N\) to be the larger of the two resulting thresholds.</button>
      <button class="fline" type="button">Then \(|a_nb_n - ab| &lt; \varepsilon\) for all \(n &gt; N\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Legitimate.</strong> \(b\) is a fixed number &mdash; it's the limit, not a term &mdash; so
        \(\frac{\varepsilon}{2(|b|+1)}\) is a fixed positive number. The definition of \(a_n \to a\) will supply a
        threshold for any fixed positive tolerance you name. No problem here.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct, and a nice piece of craft.</strong> Your reading calls it a "slick trick." Writing
        \(\frac{\varepsilon}{2|b|}\) would divide by zero when \(b=0\); the \(+1\) makes the denominator strictly
        positive always, at the cost of a slightly smaller tolerance &mdash; which costs nothing, since any smaller
        tolerance is also achievable. Avoiding a case split for free.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>That's the step that can't be done, and the reason is subtle enough to be worth real attention.</strong>
      </p>
      <p>Look at what \(\frac{\varepsilon}{2|a_n|}\) is. It contains \(n\). It is not a fixed number &mdash; it is a
        <em>different</em> tolerance for every term of the sequence.</p>
      <p>The definition of \(b_n \to b\) says: name a fixed positive \(\varepsilon'\), and I will give you an \(N\)
        that works from then on. It does <strong>not</strong> say: name a moving target and I will hit all of them at
        once. Your reading puts it exactly: "there is no reason to believe that a single \(N\) will work with all of
        these simultaneously."</p>
      <p>And there is a second problem hiding underneath: if some \(a_n = 0\), the bound isn't even defined. The
        \(+1\) trick doesn't rescue this one, because the real difficulty is the \(n\), not the zero.</p>
      <p>The way out is the one your reading takes: replace the moving \(|a_n|\) by a <em>fixed</em> bound \(B\) with
        \(|a_n| \le B\) for all \(n\). Such a \(B\) exists because a convergent sequence is bounded &mdash; which is
        Lemma 6.2.7, and is on your problem set. Once \(|a_n|\) is replaced by the constant \(B\), the tolerance
        \(\frac{\varepsilon}{2B}\) is fixed and the definition applies.</p>
      <p>Notice the shape of what just happened. A proof got stuck, and the obstruction was <em>a quantity that
        depended on \(n\) where a constant was needed</em>. That is the same failure as Day 17's broken proof, where
        \(N\) depended on \(n\). Watch for it: it is the characteristic error of the whole subject.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Fine in principle &mdash; taking the max of finitely many thresholds is standard.</strong> But there
        is no second threshold to take the max with, because line (3) never produced one.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>The conclusion is true; this argument doesn't establish it.</strong> The product theorem holds. Fixing
        line (3) with the boundedness lemma repairs the whole proof, and the final chain in your reading is</p>
      \[ |a_nb_n - ab| \le |a_n||b_n-b| + |b||a_n-a| &lt; B|b_n - b| + (|b|+1)|a_n - a| \]
      <p>with both coefficients now constant.</p>
    </div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Two moves that will keep coming back</h2>

  <p>Your reading names one of these outright &mdash; "one of the standard tricks in analysis" &mdash; and uses the
    other without comment. Both are worth extracting from their surroundings, because you will need them long after
    you've forgotten these particular theorems.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal both moves</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Move 1: uncancelling. Why would you ever add zero?</div>
        <div class="sstep-body">
          <p>You need to bound \(|a_nb_n - ab|\). The two terms have <em>nothing in common</em> &mdash; the first has
            \(n\) in both factors, the second in neither &mdash; so there is no way to compare them directly.</p>
          <p>So build a stepping stone. Insert a hybrid term with one factor from each, and subtract it straight back:</p>
          \[ a_nb_n - ab = \underbrace{a_nb_n - a_nb}_{\text{only } b \text{ changed}} + \underbrace{a_nb -
          ab}_{\text{only } a \text{ changed}} \]
          <p>Adding \(0\) in the form \(-a_nb + a_nb\) has bought a decomposition in which each piece varies in one
            factor only &mdash; and a single-factor difference is something the definition can control.</p>
          <p>The general recipe: <em>to compare two things that differ in several respects, route through an
              intermediate that differs from each in one respect.</em> You have already met it once, in the Reverse
            Triangle Inequality, where \(|a| = |a - b + b|\) is the same manoeuvre.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Move 2: \(\max\) of finitely many thresholds.</div>
        <div class="sstep-body">
          <p>Each application of the definition gives its own threshold: \(N_1\) for one sequence, \(N_2\) for another.
            To have both conditions at once, take \(N = \max(N_1, N_2)\); then \(n &gt; N\) implies \(n &gt; N_1\)
            and \(n &gt; N_2\).</p>
          <p><strong>Finitely many.</strong> The max of infinitely many thresholds need not exist, and that is not a
            technicality &mdash; it is precisely the obstruction in the flawed step above, and it is what separates
            pointwise from uniform convergence when you meet them on Day 34.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Why bother proving these theorems at all?</div>
        <div class="sstep-body">
          <p>Your reading opens the section with the motivation: "the definition itself is an unwieldy tool. If only
            there was a way to be rigorous without having to run back to the definition each time."</p>
          <p>That is the entire strategy. Pay the \(\varepsilon\)&ndash;\(N\) cost <em>once</em> for each general rule
            &mdash; sums, products, constants, boundedness &mdash; and afterwards compute limits algebraically, with
            every step backed by a theorem. Rigour becomes a property of the toolkit rather than something you
            re-establish each time.</p>
          <p>So a limit like \(\lim \frac{2n+3}{n+1}\) eventually becomes a two-line computation citing the limit laws,
            rather than the \(\varepsilon\)&ndash;\(N\) argument from Day 18. The definition doesn't go away; it goes
            underneath.</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on building a toolkit</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">When is \(|a+b| = |a|+|b|\) rather than \(&lt;\)?</p>
    <button class="mc-opt" type="button" data-key="a">Only when \(a = b\).</button>
    <button class="mc-opt" type="button" data-key="b">When \(a\) and \(b\) have the same sign, or one is zero.</button>
    <button class="mc-opt" type="button" data-key="c">Never &mdash; it's a strict inequality.</button>
    <div class="mc-fb" data-key="a">\(a = 3\), \(b = 5\) gives \(8 = 8\), and they're different.</div>
    <div class="mc-fb" data-key="b">Correct. Same signs means no cancellation, so the magnitudes add exactly. Opposite
      signs means partial cancellation and strict inequality. Slide the widget to see the gap open and close.</div>
    <div class="mc-fb" data-key="c">It's \(\le\), and equality is common &mdash; try \(a=1, b=2\).</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Why does the product proof need a bound \(B\) with \(|a_n| \le B\)?</p>
    <button class="mc-opt" type="button" data-key="a">To stop the sequence diverging.</button>
    <button class="mc-opt" type="button" data-key="b">To make sure \(a_n \ne 0\).</button>
    <button class="mc-opt" type="button" data-key="c">Because the definition can only meet a <em>fixed</em> tolerance,
      and \(\frac{\varepsilon}{2|a_n|}\) moves with \(n\).</button>
    <div class="mc-fb" data-key="a">\(a_n\) already converges by hypothesis; divergence isn't a risk.</div>
    <div class="mc-fb" data-key="b">A real nuisance, but not the main problem &mdash; and the \(+1\) trick handles
      that kind of issue elsewhere.</div>
    <div class="mc-fb" data-key="c">Correct. The definition promises one \(N\) per fixed tolerance. Feed it a target
      that changes with \(n\) and it has nothing to say. Replacing \(|a_n|\) with the constant \(B\) freezes the target
      and the definition applies again.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">What is "uncancelling"?</p>
    <button class="mc-opt" type="button" data-key="a">Adding and subtracting a convenient term to split a difference
      into pieces that vary one at a time.</button>
    <button class="mc-opt" type="button" data-key="b">Cancelling a common factor from numerator and
      denominator.</button>
    <button class="mc-opt" type="button" data-key="c">Multiplying by a conjugate.</button>
    <div class="mc-fb" data-key="a">Correct. \(a_nb_n - ab = (a_nb_n - a_nb) + (a_nb - ab)\) &mdash; you added zero, and
      bought a decomposition. Your reading notes you'd already seen it in the Reverse Triangle Inequality via \(|a| =
      |a-b+b|\).</div>
    <div class="mc-fb" data-key="b">That's ordinary cancelling &mdash; the name is a joke about doing the reverse.</div>
    <div class="mc-fb" data-key="c">A different (also useful) trick, especially for differences of square roots.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Why is \(N = \max(N_1, N_2)\) fine, while a max over all \(n\) would not be?</p>
    <button class="mc-opt" type="button" data-key="a">Because \(N_1\) and \(N_2\) are integers.</button>
    <button class="mc-opt" type="button" data-key="b">Because a maximum of finitely many numbers always exists; an
      infinite set may have none.</button>
    <button class="mc-opt" type="button" data-key="c">Because \(N_1\) and \(N_2\) come from the same
      \(\varepsilon\).</button>
    <div class="mc-fb" data-key="a">The definition allows real \(N\), and the argument never uses integrality.</div>
    <div class="mc-fb" data-key="b">Correct, and it's the hinge of the whole section. \(\{1, 2, 3, \ldots\}\) has no
      maximum. So "take the max of the thresholds for every \(n\)" is not an available move &mdash; which is exactly
      why the flawed product proof gets stuck, and exactly what "uniform" will mean on Day 34.</div>
    <div class="mc-fb" data-key="c">They may well come from different tolerances; that isn't what makes the max
      legitimate.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The triangle inequality throws away cancellation. Find a situation where that loss is costly &mdash; where
      bounding each piece separately gives an answer far weaker than the truth.</li>
    <li>The \(+1\) in \(|b|+1\) removes a case split. Can you find another place in this section where a small
      deliberate weakening buys a simpler proof?</li>
    <li>Uncancelling routes through an intermediate that differs from each end in one respect. Where else have you seen
      that pattern &mdash; in this course or elsewhere?</li>
    <li>Once sums, products and constants are established, you can compute most limits without the definition. What
      kinds of limit would still force you back to \(\varepsilon\)&ndash;\(N\)?</li>
  </ol>
</div>

<script>
  (function () {
    /* ---------------- triangle inequality ---------------- */
    var aIn = document.getElementById('d19-a'),
      bIn = document.getElementById('d19-b'),
      tCan = document.getElementById('d19-tri'),
      tOut = document.getElementById('d19-tri-out');

    function drawTri() {
      var a = +aIn.value, b = +bIn.value;
      var d = M411.hidpi(tCan, 210), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      var pad = 50, lo = -11, hi = 11;
      function X(v) { return pad + (v - lo) / (hi - lo) * (W - 2 * pad); }

      // number line
      ctx.strokeStyle = '#999'; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(pad, 150); ctx.lineTo(W - pad, 150); ctx.stroke();
      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
      for (var g = -10; g <= 10; g += 5) {
        ctx.beginPath(); ctx.moveTo(X(g), 145); ctx.lineTo(X(g), 155); ctx.stroke();
        ctx.fillText(String(g), X(g), 170);
      }

      function arrow(y, from, to, color, label) {
        if (Math.abs(to - from) < 1e-9) return;
        ctx.strokeStyle = color; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(X(from), y); ctx.lineTo(X(to), y); ctx.stroke();
        var dir = to > from ? 1 : -1;
        ctx.beginPath();
        ctx.moveTo(X(to), y);
        ctx.lineTo(X(to) - dir * 9, y - 5);
        ctx.lineTo(X(to) - dir * 9, y + 5);
        ctx.closePath(); ctx.fillStyle = color; ctx.fill();
        ctx.fillStyle = color; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(label, X((from + to) / 2), y - 10);
      }

      // a then b, stacked, and |a+b| below
      arrow(52, 0, a, M411.colors.explore, '|a| = ' + Math.abs(a).toFixed(1));
      arrow(52, a, a + b, M411.colors.flaw, '|b| = ' + Math.abs(b).toFixed(1));
      arrow(112, 0, a + b, M411.colors.check, '|a+b| = ' + Math.abs(a + b).toFixed(1));

      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('travel a, then b', pad - 34, 32);
      ctx.fillText('net displacement', pad - 34, 92);

      var lhs = Math.abs(a + b), rhs = Math.abs(a) + Math.abs(b);
      var equal = Math.abs(lhs - rhs) < 1e-9;
      tOut.innerHTML =
        '<p class="big">\\( |' + a.toFixed(1) + ' + (' + b.toFixed(1) + ')| = ' + lhs.toFixed(1) +
        ' \\;\\le\\; ' + Math.abs(a).toFixed(1) + ' + ' + Math.abs(b).toFixed(1) + ' = ' + rhs.toFixed(1) + ' \\)</p>' +
        (equal
          ? '<p><strong>Equality.</strong> \\(a\\) and \\(b\\) point the same way (or one is zero), so no distance ' +
          'is lost to cancellation and the trip length equals the net displacement.</p>'
          : '<p><strong>Strict inequality</strong>, with slack \\(' + (rhs - lhs).toFixed(1) + '\\). The two ' +
          'displacements partly undo each other, so the net move is shorter than the total travelled.</p>');
      M411.typeset(tOut);
    }
    aIn.addEventListener('input', drawTri);
    bIn.addEventListener('input', drawTri);

    /* ---------------- epsilon/2 ---------------- */
    var eIn = document.getElementById('d19-eps'),
      hCan = document.getElementById('d19-half'),
      hOut = document.getElementById('d19-half-out');

    // two sample sequences with different convergence rates
    function an(n) { return 3 + 5 / n; }          // -> 3
    function bn(n) { return -1 + 2 / Math.sqrt(n); } // -> -1
    var A = 3, B = -1;

    function drawHalf() {
      var eps = Math.pow(10, +eIn.value);
      var NT = 400;

      // thresholds for eps/2 on each, and for eps on the sum
      function thresh(f, L, tol) {
        for (var n = 1; n <= 20000; n++) {
          var ok = true;
          for (var m = n; m <= Math.min(n + 30, 20000); m++) if (Math.abs(f(m) - L) >= tol) { ok = false; break; }
          if (ok) return n - 1;
        }
        return Infinity;
      }
      var N1 = thresh(an, A, eps / 2), N2 = thresh(bn, B, eps / 2);
      var N = Math.max(N1, N2);

      var d = M411.hidpi(hCan, 280), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 54, padR = 20, padT = 20, padB = 34;

      function X(n) { return padL + (n - 1) / (NT - 1) * (W - padL - padR); }
      var top = eps * 1.5;
      function Y(v) { return padT + (top - v) / (top * 1.15) * (H - padT - padB); }

      // eps and eps/2 lines
      [[eps, M411.colors.check, 'ε'], [eps / 2, M411.colors.explore, 'ε/2']].forEach(function (pr) {
        ctx.strokeStyle = pr[1]; ctx.lineWidth = 1.6; ctx.setLineDash([5, 4]);
        ctx.beginPath(); ctx.moveTo(padL, Y(pr[0])); ctx.lineTo(W - padR, Y(pr[0])); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = pr[1]; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
        ctx.fillText(pr[2], padL + 4, Y(pr[0]) - 5);
      });

      function plot(f, L, color) {
        ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.beginPath();
        var started = false;
        for (var n = 1; n <= NT; n++) {
          var v = Math.abs(f(n) - L);
          if (v > top * 1.2) { started = false; continue; }
          started ? ctx.lineTo(X(n), Y(v)) : (ctx.moveTo(X(n), Y(v)), started = true);
        }
        ctx.stroke();
      }
      plot(an, A, M411.colors.explore);
      plot(bn, B, M411.colors.flaw);
      // the sum's error
      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2.4; ctx.beginPath();
      var st = false;
      for (var n2 = 1; n2 <= NT; n2++) {
        var v2 = Math.abs((an(n2) + bn(n2)) - (A + B));
        if (v2 > top * 1.2) { st = false; continue; }
        st ? ctx.lineTo(X(n2), Y(v2)) : (ctx.moveTo(X(n2), Y(v2)), st = true);
      }
      ctx.stroke();

      [[N1, M411.colors.explore, 'N₁'], [N2, M411.colors.flaw, 'N₂']].forEach(function (pr) {
        if (!isFinite(pr[0]) || pr[0] > NT) return;
        ctx.strokeStyle = pr[1]; ctx.lineWidth = 1.4; ctx.setLineDash([3, 3]);
        ctx.beginPath(); ctx.moveTo(X(pr[0]), padT); ctx.lineTo(X(pr[0]), H - padB); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = pr[1]; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(pr[2], X(pr[0]), H - padB + 14);
      });

      ctx.font = '12px sans-serif'; ctx.textAlign = 'right';
      ctx.fillStyle = M411.colors.explore; ctx.fillText('|aₙ − a|', W - padR, padT + 14);
      ctx.fillStyle = M411.colors.flaw; ctx.fillText('|bₙ − b|', W - padR, padT + 30);
      ctx.fillStyle = M411.colors.check; ctx.fillText('|(aₙ+bₙ) − (a+b)|', W - padR, padT + 46);

      hOut.innerHTML =
        '<p>With \\(\\varepsilon = ' + eps.toFixed(4) + '\\): the first sequence is within \\(\\frac{\\varepsilon}{2}\\) ' +
        'from \\(N_1 = ' + N1 + '\\) on; the second from \\(N_2 = ' + N2 + '\\) on.</p>' +
        '<p class="big">\\( N = \\max(' + N1 + ', ' + N2 + ') = ' + N + ' \\)</p>' +
        '<p>Past \\(N\\), both errors are under \\(\\frac{\\varepsilon}{2}\\), so their sum is under ' +
        '\\(\\varepsilon\\) &mdash; and by the triangle inequality the error in the sum is no bigger than that sum. ' +
        'Notice the two sequences converge at quite different rates, and the \\(\\max\\) is what lets you stop ' +
        'caring which is slower.</p>';
      M411.typeset(hOut);
    }
    eIn.addEventListener('input', drawHalf);

    M411.onResize(function () { drawTri(); drawHalf(); });
    drawTri();
    drawHalf();
  })();
</script>
