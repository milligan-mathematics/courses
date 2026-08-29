---
layout: day
title: "MATH 411 Day 25: Sequences and Continuity"
day: 25
chapter_number: 8
chapter: "Continuity"
day_title: "Sequences and Continuity"
blurb: "One theorem connects everything from Chapter 6 to everything in Chapter 8 &mdash; and turns most continuity proofs into sequence proofs you have already done."
reading: "Section 8.2, Theorem 8.2.1 through Lemma 8.2.9"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Feeding a sequence into a function</h2>

  <p>Theorem 8.2.1 says \(f\) is continuous at \(a\) <strong>exactly when</strong> every sequence \(x_n \to a\) forces
    \(f(x_n) \to f(a)\).</p>

  <p>The forward direction is what you'd hope for. The useful direction is the contrapositive: to prove \(f\) is
    <em>not</em> continuous at \(a\), you need only exhibit <strong>one</strong> sequence that misbehaves.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d25-fn">Function</label>
      <select id="d25-fn"></select>
    </div>
    <div class="ctl">
      <label for="d25-seq">Sequence \(x_n \to a\)</label>
      <select id="d25-seq"></select>
    </div>
    <div class="ctl">
      <label for="d25-n">Terms</label>
      <input type="range" id="d25-n" min="3" max="40" step="1" value="12">
    </div>
  </div>

  <canvas class="plot" id="d25-canvas"></canvas>
  <div class="readout" id="d25-out"></div>

  <p>The left panel shows \(x_n\) marching toward \(a\) on the horizontal axis; the right shows where \(f\) sends
    them. For a continuous \(f\), the image points close in on \(f(a)\). For a discontinuous one, they head somewhere
    else entirely &mdash; or refuse to settle at all.</p>

  <p>Notice how much easier this is to use than the \(\varepsilon\)&ndash;\(\delta\) definition. Disproving continuity
    directly means showing that <em>no</em> \(\delta\) works for some \(\varepsilon\) &mdash; an infinite quantity of
    work. With Theorem 8.2.1 you produce one sequence and compute one limit.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>The theorem earning its keep</h2>

  <p>Your reading proves that a sum of continuous functions is continuous &mdash; and does it without touching
    \(\varepsilon\) or \(\delta\) at all. Watch how the work gets delegated.</p>

  <p><strong>Theorem 8.2.7.</strong> If \(f\) and \(g\) are continuous at \(a\), so is \(f + g\).</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the proof</button>
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Step 1. Convert the goal into a statement about sequences.</div>
        <div class="sstep-body">
          <p>By Theorem 8.2.1, showing \(f+g\) continuous at \(a\) means showing: for every sequence \(x_n \to a\),
            \((f+g)(x_n) \to (f+g)(a)\).</p>
          <p>So take an arbitrary sequence \(x_n \to a\). The entire remaining problem is now about sequences.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 2. Convert the hypotheses the same way.</div>
        <div class="sstep-body">
          <p>\(f\) is continuous at \(a\), so by Theorem 8.2.1 (used in the forward direction now) \(f(x_n) \to
            f(a)\). Likewise \(g(x_n) \to g(a)\).</p>
          <p>Both hypotheses and goal are now sequence statements. Nothing about continuity remains.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 3. Apply a theorem you proved in Chapter 6.</div>
        <div class="sstep-body">
          <p>Theorem 6.2.4 &mdash; the limit of a sum is the sum of the limits &mdash; gives</p>
          \[ \lim_{n\to\infty}(f+g)(x_n) = \lim f(x_n) + \lim g(x_n) = f(a) + g(a) = (f+g)(a) \]
          <p>Since \((x_n)\) was arbitrary, Theorem 8.2.1 converts back and \(f+g\) is continuous at \(a\).
            \(\blacksquare\)</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 4. What just happened.</div>
        <div class="sstep-body">
          <p>The continuity result was proved by translating into sequence language, citing a sequence theorem, and
            translating back. The \(\varepsilon\)&ndash;\(\delta\) work was done once, in proving Theorem 8.2.1, and
            never again.</p>
          <p>Your reading: Theorem 8.2.1 "is a bridge between the ideas of convergence and continuity so it allows us
            to bring all of the theory we developed in [Chapter 6] to bear on continuity questions."</p>
          <p>Every limit law from Chapter 6 now has a continuity counterpart, obtained for almost nothing. This is the
            same strategy as Day 19 &mdash; pay once, reuse forever &mdash; applied at the level of whole
            chapters.</p>
        </div>
      </li>
    </ol>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>One well-behaved sequence is not enough</h2>

  <p>Theorem 8.2.1 is an "if and only if," and both directions quantify over <em>all</em> sequences. Here is what
    happens when that gets forgotten.</p>

  <p><strong>Click the step that doesn't follow.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Let \(f(x) = 1\) for \(x &gt; 0\), \(f(x) = -1\) for \(x &lt; 0\), and
        \(f(0) = 1\).</button>
      <button class="fline" type="button">Take \(x_n = \frac1n\), which converges to \(0\).</button>
      <button class="fline" type="button">Then \(f(x_n) = 1\) for every \(n\), so \(f(x_n) \to 1 = f(0)\).</button>
      <button class="fline" type="button">By Theorem 8.2.1, \(f\) is therefore continuous at \(0\).</button>
      <button class="fline" type="button">So a jump discontinuity can be continuous after all.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>A legitimate function.</strong> Note the value at \(0\) was chosen deliberately to match the
        right-hand branch &mdash; which is what makes the trap work.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>True.</strong> \(\frac1n \to 0\), proved on Day 17.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>True.</strong> Every \(\frac1n\) is positive, so \(f\left(\frac1n\right) = 1\) always, and a constant
        sequence converges to that constant. And \(f(0) = 1\), so they do agree.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>That's the error: the theorem requires <em>every</em> sequence, not one.</strong></p>
      <p>Read the statement again: "\(\forall\) sequences \((x_n)\), if \(\lim x_n = a\) then \(\lim f(x_n) =
        f(a)\)." A single obliging sequence establishes nothing, exactly as a single obliging \(\varepsilon\)
        established nothing on Day 18.</p>
      <p>And the sequence chosen here was the worst possible witness: it approaches \(0\) entirely from the right,
        where \(f\) is constant, so it never sees the jump at all. Approach from the left instead &mdash; \(x_n =
        -\frac1n\) &mdash; and \(f(x_n) = -1\) for every \(n\), so \(f(x_n) \to -1 \ne 1 = f(0)\). That sequence
        settles it: \(f\) is not continuous at \(0\).</p>
      <p>Which is why the widget above offers several sequences for the same function. <strong>Choosing the right
        sequence is the whole craft of using this theorem.</strong> To <em>prove</em> continuity you must handle all of
        them &mdash; and in practice you'd use \(\varepsilon\)&ndash;\(\delta\) instead. To <em>disprove</em> it you
        need one, and finding the one that exposes the trouble is where the thinking goes.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>False, and it inherits the error from line (4).</strong> A jump discontinuity is discontinuous; no
        choice of value at the jump repairs it, which is your problem set's Problem 8.2.3.</p>
    </div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Open Question</div>
  <h2>An argument your reading asks you to break &mdash; but not yet</h2>

  <p>Finitely many continuous functions sum to a continuous function: apply Theorem 8.2.7 repeatedly. Your reading then
    offers an argument that the same holds for <em>infinitely</em> many:</p>

  <div class="readout">
    <p>Let \(\varepsilon &gt; 0\). Since \(f_j\) is continuous at \(a\), choose \(\delta_j &gt; 0\) so that
      \(|x-a| &lt; \delta_j\) implies \(|f_j(x)-f_j(a)| &lt; \frac{\varepsilon}{2^j}\). Let \(\delta =
      \min(\delta_1, \delta_2, \ldots)\). If \(|x-a| &lt; \delta\) then</p>
    \[ \left|\sum_{j=1}^{\infty}f_j(x) - \sum_{j=1}^{\infty}f_j(a)\right| \le \sum_{j=1}^{\infty}|f_j(x)-f_j(a)| &lt;
    \sum_{j=1}^{\infty}\frac{\varepsilon}{2^j} = \varepsilon \]
    <p>Thus \(\sum f_j\) is continuous at \(a\).</p>
  </div>

  <p>It must be wrong. Day 16's Fourier series is an infinite sum of continuous cosines that converges to a function
    with a jump.</p>

  <p>Your reading poses this as a question and deliberately leaves it open: <em>"Something fundamental seems to have
      gone wrong here. Can you tell what it is?"</em> &mdash; adding that it will be settled in Chapter 10, and "in the
    meantime keep this problem tucked away in your consciousness."</p>

  <p>So we will not answer it here either; finding the flaw is your problem on the last day of the course. What is fair
    game is a tool you may want. Day 19 was careful to say that a maximum of <strong>finitely many</strong> thresholds
    exists, and warned that this "is not a technicality." Here is the corresponding fact for minima.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d25-k">Take the minimum of the first \(k\) of them</label>
      <input type="range" id="d25-k" min="1" max="60" step="1" value="5">
    </div>
  </div>
  <div class="readout" id="d25-min"></div>

  <p>Keep that alongside two other things you've already seen: the product proof on Day 19 that stalled on a quantity
    depending on \(n\), and the Gibbs overshoot on Day 16 that shrank in width but never in height. Your reading calls
    the question fundamental, and it is &mdash; the same obstruction has now appeared three times in three different
    costumes.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on the bridge</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">To show \(f\) is <em>not</em> continuous at \(a\) using Theorem 8.2.1, what do you produce?</p>
    <button class="mc-opt" type="button" data-key="a">Every sequence converging to \(a\).</button>
    <button class="mc-opt" type="button" data-key="b">A sequence \(x_n \to a\) with \(f(x_n)\) divergent.</button>
    <button class="mc-opt" type="button" data-key="c">One sequence \(x_n \to a\) for which \(f(x_n)\) fails to converge
      to \(f(a)\) &mdash; whether by converging elsewhere or not converging at all.</button>
    <div class="mc-fb" data-key="a">The theorem is an "if and only if," so its failure needs only a single
      counterexample.</div>
    <div class="mc-fb" data-key="b">Divergence is one way to fail, but converging to the <em>wrong value</em> also
      does it &mdash; and that's the more common case.</div>
    <div class="mc-fb" data-key="c">Correct. Either failure suffices. The sign function's \(f(1/n) \to 1 \ne 0 =
      f(0)\) converges perfectly well, just to the wrong number.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Why prove the converse of Theorem 8.2.1 by contrapositive?</p>
    <button class="mc-opt" type="button" data-key="a">Direct proof is impossible.</button>
    <button class="mc-opt" type="button" data-key="b">The hypothesis "every sequence behaves" is awkward to use, while
      its negation hands you a specific failing \(\varepsilon\) to build a sequence from.</button>
    <button class="mc-opt" type="button" data-key="c">Because contrapositives are always shorter.</button>
    <div class="mc-fb" data-key="a">Not impossible, just harder &mdash; you'd have to extract a \(\delta\) from a
      statement about all sequences at once.</div>
    <div class="mc-fb" data-key="b">Correct. Assuming discontinuity gives you a concrete \(\varepsilon\) that no
      \(\delta\) can meet; then \(\delta = 1, \frac12, \frac13, \ldots\) each yield a bad point \(x_n\), and those
      points are your sequence. The negation is <em>constructive</em> where the original is not.</div>
    <div class="mc-fb" data-key="c">They aren't; it depends entirely on which side gives you something to work
      with.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">What is Lemma 8.2.9 (if \(g\) is continuous at \(a\) and \(g(a) \ne 0\), then \(g \ne 0\) near
      \(a\)) needed for?</p>
    <button class="mc-opt" type="button" data-key="a">So that \(g(x_n) \ne 0\) for large \(n\), letting the quotient
      theorem for sequences apply.</button>
    <button class="mc-opt" type="button" data-key="b">To prove \(g\) is continuous.</button>
    <button class="mc-opt" type="button" data-key="c">To show \(g\) has no roots.</button>
    <div class="mc-fb" data-key="a">Correct. Theorem 6.2.12 requires \(b_n \ne 0\) as well as \(b \ne 0\). Assuming
      \(g(a) \ne 0\) doesn't stop \(g\) vanishing at nearby points, so a lemma is needed to clear a neighbourhood
      first.</div>
    <div class="mc-fb" data-key="b">Continuity of \(g\) is the lemma's hypothesis, not its conclusion.</div>
    <div class="mc-fb" data-key="c">It has no roots <em>near \(a\)</em>. Elsewhere it may have as many as it
      likes.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">A maximum of finitely many positive numbers is positive. What about a minimum of infinitely
      many?</p>
    <button class="mc-opt" type="button" data-key="a">Also always positive, since each one is.</button>
    <button class="mc-opt" type="button" data-key="b">Not necessarily &mdash; there may be no minimum at all, and the
      greatest number below all of them can be \(0\).</button>
    <button class="mc-opt" type="button" data-key="c">Always \(0\).</button>
    <div class="mc-fb" data-key="a">Take \(\left\{1, \tfrac12, \tfrac13, \ldots\right\}\): every element is positive,
      no element is smallest, and nothing positive lies below them all &mdash; by the Archimedean Property from Day
      4.</div>
    <div class="mc-fb" data-key="b">Correct, and it's the exact counterpart of Day 19's warning about maxima. "Each is
      positive" and "there is a positive number below all of them" are different claims, and only the first is free.
      Worth having in hand for the open question above.</div>
    <div class="mc-fb" data-key="c">Not always &mdash; \(\left\{1 + \tfrac1n\right\}\) has everything above \(1\).
      Sometimes the infimum is positive and sometimes it isn't, which is precisely why it can't be assumed.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Theorem 8.2.1 converts continuity questions into sequence questions. Is there anything you can do with
      \(\varepsilon\)&ndash;\(\delta\) that you cannot do this way?</li>
    <li>Take the open question seriously for ten minutes before Chapter 10 gets to it. Every individual step of that
      argument resembles something you have done legitimately before &mdash; so which one is doing something it hasn't
      earned?</li>
    <li>Every proof of discontinuity today came down to choosing a clever sequence. For Dirichlet's function at a
      nonzero \(a\), what sequence would you reach for? (Two obvious candidates; only one kind will do.)</li>
    <li>The reading calls the infinite-sum problem "fundamental." Given Days 16 and 19, why do you think it earns that
      word?</li>
  </ol>
</div>

<script>
  (function () {
    var FNS = [
      {
        label: 'sign-like: |x|/x, with f(0) = 0', a: 0,
        f: function (x) { return x === 0 ? 0 : (x > 0 ? 1 : -1); },
        cont: false
      },
      { label: 'x²   (continuous)', a: 1, f: function (x) { return x * x; }, cont: true },
      {
        label: 'sin(1/x), with f(0) = 0', a: 0,
        f: function (x) { return x === 0 ? 0 : Math.sin(1 / x); }, cont: false
      },
      {
        label: 'x·sin(1/x), with f(0) = 0', a: 0,
        f: function (x) { return x === 0 ? 0 : x * Math.sin(1 / x); }, cont: true
      },
      {
        label: 'jump: 0 for x<1, 2 for x≥1', a: 1,
        f: function (x) { return x < 1 ? 0 : 2; }, cont: false
      }
    ];

    var SEQS = [
      { label: 'a + 1/n', g: function (a, n) { return a + 1 / n; } },
      { label: 'a − 1/n', g: function (a, n) { return a - 1 / n; } },
      { label: 'a + (−1)ⁿ/n', g: function (a, n) { return a + Math.pow(-1, n) / n; } },
      { label: 'a + 1/(nπ)', g: function (a, n) { return a + 1 / (n * Math.PI); } },
      { label: 'a + 2/((4n+1)π)', g: function (a, n) { return a + 2 / ((4 * n + 1) * Math.PI); } }
    ];

    var fSel = document.getElementById('d25-fn'),
      sSel = document.getElementById('d25-seq'),
      nIn = document.getElementById('d25-n'),
      canvas = document.getElementById('d25-canvas'),
      out = document.getElementById('d25-out');

    FNS.forEach(function (f, i) {
      var o = document.createElement('option'); o.value = String(i); o.textContent = f.label; fSel.appendChild(o);
    });
    SEQS.forEach(function (s, i) {
      var o = document.createElement('option'); o.value = String(i); o.textContent = s.label; sSel.appendChild(o);
    });

    function draw() {
      var fn = FNS[+fSel.value], sq = SEQS[+sSel.value], N = +nIn.value, a = fn.a;

      var xs = [], ys = [];
      for (var n = 1; n <= N; n++) { var x = sq.g(a, n); xs.push(x); ys.push(fn.f(x)); }

      var d = M411.hidpi(canvas, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      var mid = W / 2, padT = 26, padB = 34;
      // left: the x_n on a line;  right: the f(x_n) on a line
      function panel(x0, x1, vals, target, label, color) {
        var lo = Math.min.apply(null, vals.concat([target])), hi = Math.max.apply(null, vals.concat([target]));
        var span = Math.max(hi - lo, 0.4), c = (hi + lo) / 2;
        lo = c - span * 0.75; hi = c + span * 0.75;
        var axis = (x0 + x1) / 2;

        ctx.strokeStyle = '#999'; ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(axis, padT); ctx.lineTo(axis, H - padB); ctx.stroke();
        function Y(v) { return padT + (hi - v) / (hi - lo) * (H - padT - padB); }

        // target
        ctx.strokeStyle = M411.colors.scaffold; ctx.lineWidth = 2; ctx.setLineDash([5, 4]);
        ctx.beginPath(); ctx.moveTo(x0 + 14, Y(target)); ctx.lineTo(x1 - 14, Y(target)); ctx.stroke();
        ctx.setLineDash([]);

        vals.forEach(function (v, i) {
          var t = i / Math.max(vals.length - 1, 1);
          ctx.fillStyle = color;
          ctx.globalAlpha = 0.35 + 0.65 * t;
          ctx.beginPath(); ctx.arc(axis, Y(v), 4.5, 0, 2 * Math.PI); ctx.fill();
        });
        ctx.globalAlpha = 1;

        ctx.fillStyle = M411.colors.muted; ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(label, axis, 16);
        ctx.fillStyle = M411.colors.scaffold; ctx.font = 'bold 11px sans-serif';
        ctx.fillText(target.toFixed(3), axis + 52, Y(target) + 4);
      }

      panel(20, mid - 10, xs, a, 'xₙ  →  a = ' + a, M411.colors.explore);
      panel(mid + 10, W - 20, ys, fn.f(a), 'f(xₙ)  →  ?', M411.colors.check);

      // arrow between panels
      ctx.strokeStyle = '#bbb'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(mid - 34, H / 2); ctx.lineTo(mid + 34, H / 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(mid + 34, H / 2); ctx.lineTo(mid + 26, H / 2 - 5); ctx.lineTo(mid + 26, H / 2 + 5);
      ctx.closePath(); ctx.fillStyle = '#bbb'; ctx.fill();
      ctx.fillStyle = M411.colors.muted; ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('f', mid, H / 2 - 10);

      var last = ys[ys.length - 1], fa = fn.f(a);
      var tail = ys.slice(Math.max(0, ys.length - 8));
      var spread = Math.max.apply(null, tail) - Math.min.apply(null, tail);

      var verdict;
      if (spread > 0.2) {
        verdict = '<p><strong style="color:#d9534f">\\(f(x_n)\\) is not settling at all.</strong> The last few values ' +
          'range over \\(' + spread.toFixed(3) + '\\). By Theorem 8.2.1 this single sequence is enough to show ' +
          '\\(f\\) is not continuous at \\(a = ' + a + '\\).</p>';
      } else if (Math.abs(last - fa) > 0.05) {
        verdict = '<p><strong style="color:#d9534f">\\(f(x_n)\\) converges &mdash; to the wrong number.</strong> ' +
          'It is heading for \\(' + last.toFixed(4) + '\\) while \\(f(a) = ' + fa.toFixed(4) + '\\). ' +
          'By Theorem 8.2.1, \\(f\\) is not continuous at \\(a\\), and this one sequence proves it.</p>';
      } else {
        verdict = '<p><strong style="color:var(--a411-scaffold)">\\(f(x_n) \\to f(a)\\).</strong> ' +
          'Consistent with continuity &mdash; though one well-behaved sequence proves nothing on its own, since ' +
          'the theorem requires <em>every</em> sequence to behave.</p>';
      }

      out.innerHTML =
        '<p>\\(x_{' + N + '} = ' + xs[N - 1].toFixed(6) + '\\), \\(f(x_{' + N + '}) = ' + last.toFixed(6) +
        '\\), \\(f(a) = ' + fa.toFixed(6) + '\\).</p>' + verdict +
        (fn.cont ? '' : '<p style="color:var(--text-muted);font-size:0.9rem;">Try each sequence on this function ' +
          '&mdash; some make the failure obvious, some hide it. Choosing the right sequence is the whole craft.</p>');
      M411.typeset(out);
    }
    fSel.addEventListener('change', draw);
    sSel.addEventListener('change', draw);
    nIn.addEventListener('input', draw);

    /* ---------------- min of infinitely many deltas ---------------- */
    var kIn = document.getElementById('d25-k'), mOut = document.getElementById('d25-min');
    function drawMin() {
      var K = +kIn.value;
      // a plausible family: delta_j = 1/j, all positive, infimum 0
      var m = 1 / K;
      mOut.innerHTML =
        '<p>Consider the numbers \\(\\delta_j = \\frac1j\\) for \\(j = 1, 2, 3, \\ldots\\) &mdash; every one of ' +
        'them strictly positive.</p>' +
        '<p class="big">\\( \\min\\left(\\delta_1, \\ldots, \\delta_{' + K + '}\\right) = \\frac{1}{' + K + '} = ' +
        m.toFixed(6) + ' \\)</p>' +
        '<p>Positive for every finite list &mdash; and as the list grows, the minimum slides toward \\(0\\). ' +
        'Across the whole infinite family there is no smallest \\(\\delta_j\\) at all, and no positive number lies ' +
        'below all of them, by the Archimedean Property from Day 4.</p>';
      M411.typeset(mOut);
    }
    kIn.addEventListener('input', drawMin);

    M411.onResize(draw);
    draw();
    drawMin();
  })();
</script>
