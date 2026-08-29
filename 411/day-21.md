---
layout: day
title: "MATH 411 Day 21: Divergence to Infinity"
day: 21
chapter_number: 6
chapter: "Sequences and Series"
day_title: "Divergence to Infinity"
blurb: "A sequence converges in only one way. It can diverge in several &mdash; and the notation \\(\\lim a_n = \\infty\\) is a convenient lie that has to be watched carefully."
reading: "Section 6.2 Example 6.2.17 through Section 6.3, the formal treatment of divergence"
---

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>How <em>not</em> to use the Squeeze Theorem</h2>

  <p>Your reading gives a correct proof that \(\lim\frac{n+1}{n^2} = 0\) and then immediately gives an incorrect one,
    labelled "How <em>not</em> to prove Example 6.2.17." The two look almost identical, which is exactly why it's worth
    dwelling on.</p>

  <p><strong>Click the step that assumes what it is supposed to establish.</strong></p>

  <div class="flaw-widget" data-flaw="2">
    <div class="flawlist">
      <button class="fline" type="button">Notice that \(0 \le \frac{n+1}{n^2} \le \frac{n+n}{n^2} = \frac{2}{n}\) for
        every \(n \ge 1\).</button>
      <button class="fline" type="button">Taking limits through the inequality: \(0 = \lim 0 \le
        \lim\frac{n+1}{n^2} \le \lim\frac2n = 0\).</button>
      <button class="fline" type="button">A quantity between \(0\) and \(0\) must equal \(0\).</button>
      <button class="fline" type="button">Therefore \(\lim\frac{n+1}{n^2} = 0\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct.</strong> \(n + 1 \le n + n = 2n\) for \(n \ge 1\), so dividing by \(n^2\) gives the bound.
        This line is shared with the correct proof.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>That's it, and the flaw is in the <em>form</em>, not the arithmetic.</strong></p>
      <p>Writing \(\lim\frac{n+1}{n^2}\) in the middle of a chain of inequalities <strong>presupposes that this limit
          exists</strong>. If it didn't, the symbol would denote nothing and the inequality would be meaningless.</p>
      <p>But existence is precisely what we were trying to prove. Your reading: "This is incorrect in form because it
        presumes that \(\lim\frac{n+1}{n^2}\) exists, which we don't yet know."</p>
      <p>Compare with the correct version, which never writes the unknown limit until it has been produced:</p>
      <p><em>Since \(0 \le \frac{n+1}{n^2} \le \frac2n\) and \(\lim 0 = 0 = \lim\frac2n\), the Squeeze Theorem gives
          that \(\lim\frac{n+1}{n^2}\) exists and equals \(0\).</em></p>
      <p>The Squeeze Theorem is invoked as a <em>theorem</em>, and it hands back existence as part of its conclusion.
        The flawed version tries to reach the same place by manipulating a symbol it hasn't earned the right to
        write.</p>
      <p>This distinction matters far beyond this example. Writing down "\(\lim a_n\)" is already a claim. If you
        haven't established convergence, you have committed the same error as writing \(\frac{x}{0}\) and reasoning
        about it.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>True of numbers.</strong> If \(0 \le x \le 0\) then \(x = 0\). The problem is that line (2) never
        established there was a number there to reason about.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>A true conclusion, reached invalidly.</strong> The limit is \(0\), and the Squeeze Theorem proves it
        properly. Notice again that a correct conclusion is no evidence of a correct argument &mdash; it just means the
        error didn't happen to change the answer this time.</p>
    </div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The several ways to fail</h2>

  <p>Definition 6.3.1 is deliberately negative: a sequence <em>diverges</em> if it does not converge to any real
    number. That single word covers behaviours with almost nothing in common.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d21-zoo">Sequence</label>
      <select id="d21-zoo"></select>
    </div>
    <div class="ctl">
      <label for="d21-zn">Terms shown</label>
      <input type="range" id="d21-zn" min="10" max="300" step="1" value="60">
    </div>
  </div>

  <canvas class="plot" id="d21-zoo-canvas"></canvas>
  <div class="readout" id="d21-zoo-out"></div>

  <p>Step through them. Some run away, some oscillate between fixed values, some oscillate with growing amplitude, and
    one has infinitely many terms marching to \(0\) while infinitely many others sit stubbornly at \(1\). All of them
    are simply "divergent."</p>

  <p>That is why your reading bothers to introduce a <em>second</em> definition. "Diverges" is a bucket; "diverges to
    infinity" names one specific and well-behaved way of being in it.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The \(r\)&ndash;\(N\) game</h2>

  <p>Definition 6.3.3 is the \(\varepsilon\)&ndash;\(N\) game with the target moved to infinity: \(a_n \to \infty\)
    means that for <em>every</em> real \(r\) there is an \(N\) with \(a_n &gt; r\) whenever \(n &gt; N\).</p>

  <p>The adversary now names a height instead of a tolerance, and you must show the sequence gets above it and stays
    there.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d21-seq">Sequence</label>
      <select id="d21-seq"></select>
    </div>
    <div class="ctl">
      <label for="d21-r">Adversary's height \(r\)</label>
      <input type="range" id="d21-r" min="0" max="3" step="0.02" value="1">
    </div>
  </div>

  <canvas class="plot" id="d21-inf"></canvas>
  <div class="readout" id="d21-inf-out"></div>

  <p>Notice the two failure modes on offer. \((-1)^n n\) has terms that get arbitrarily large, but it does not diverge
    to infinity, because it keeps returning below any \(r\) you name &mdash; the definition demands \(a_n &gt; r\) for
    <em>all</em> \(n &gt; N\), not merely for infinitely many. And \(\sqrt{n}\) grows very slowly but does qualify,
    because slow is not the same as bounded.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Why define both words?</h2>

  <p>Your reading pauses to justify defining "diverges" explicitly, when it is just the negation of "converges." The
    answer is worth having, because it is about how mathematical vocabulary works.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the argument</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1. Reject the bad answer first.</div>
        <div class="sstep-body">
          <p>One could say: "in mathematics we always work from precisely stated definitions." Your reading calls this
            out as "just more pedantry &mdash; a way of saying 'Because we said so' all dressed up in imposing
            language."</p>
          <p>Refusing to accept authority as a reason, in a textbook, about its own conventions, is worth noticing.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2. The real reason: borrowed words don't keep their meanings.</div>
        <div class="sstep-body">
          <p>Mathematics takes ordinary words and gives them technical meanings "only tangentially related" to the
            originals. When two such words are opposites in English, readers assume the technical versions are
            opposites too &mdash; and often they are not.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3. The cautionary example: "open" and "closed".</div>
        <div class="sstep-body">
          <p>In English these are exact opposites. In mathematics they are not. The interval \((a,b]\) contains one
            endpoint and not the other, so it is <strong>neither open nor closed</strong>.</p>
          <p>If they were genuine opposites, every interval would have to be one or the other. And it gets stranger:
            \((-\infty,\infty)\) is <strong>both</strong> open and closed.</p>
          <p>So the English intuition is not merely imprecise here &mdash; it is wrong in both directions at once.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4. So what about converge and diverge?</div>
        <div class="sstep-body">
          <p>These <em>are</em> genuine opposites: every sequence does exactly one of the two. The reading defines both
            anyway, because after the open/closed lesson you cannot safely infer that from the English.</p>
          <p>"Mathematicians have learned to be extremely careful about this sort of thing... even though these words
            are actually opposites mathematically, it is better to say this explicitly so there can be no
            confusion."</p>
          <p>The habit to take away: when you meet a familiar English word in a definition, read the definition. Do not
            assume the mathematics inherited the logic of the English &mdash; sometimes it did, sometimes it didn't,
            and only the definition knows which.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 5. The same caution applies to \(\lim a_n = \infty\).</div>
        <div class="sstep-body">
          <p>This notation is, as your reading says, "an abuse of notation since the symbol \(\infty\) does not
            represent a real number," and it is "problematic since it looks so much like the notation we use to denote
            convergence."</p>
          <p>\(\lim a_n = \infty\) does <strong>not</strong> mean the limit exists and equals something. It means the
            limit does not exist, and says how. The equals sign is not an equals sign.</p>
          <p>The notation persists because divergence to infinity behaves partly like convergence &mdash; sums and
            products of such sequences do what you'd hope. That partial good behaviour is exactly what makes it
            dangerous, and it's why your problem set asks you to check which familiar rules survive and which don't.</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on divergence</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">What is wrong with the improper Squeeze Theorem argument?</p>
    <button class="mc-opt" type="button" data-key="a">The inequality \(0 \le \frac{n+1}{n^2} \le \frac2n\) is
      false.</button>
    <button class="mc-opt" type="button" data-key="b">Writing \(\lim\frac{n+1}{n^2}\) inside the chain assumes the
      limit exists &mdash; which was the thing to be proved.</button>
    <button class="mc-opt" type="button" data-key="c">The conclusion is wrong.</button>
    <div class="mc-fb" data-key="a">The inequality is correct and appears in the valid proof too.</div>
    <div class="mc-fb" data-key="b">Correct. The Squeeze Theorem's job is to <em>establish</em> existence; the flawed
      version helps itself to existence in order to get there. If you already knew the limit existed, the argument
      would be fine &mdash; which is exactly the point.</div>
    <div class="mc-fb" data-key="c">The conclusion is right. The reasoning isn't.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Are "open" and "closed" opposites for intervals?</p>
    <button class="mc-opt" type="button" data-key="a">Yes &mdash; every interval is exactly one of them.</button>
    <button class="mc-opt" type="button" data-key="b">Yes, except for the empty interval.</button>
    <button class="mc-opt" type="button" data-key="c">No &mdash; \((a,b]\) is neither, and \((-\infty,\infty)\) is
      both.</button>
    <div class="mc-fb" data-key="a">\((a,b]\) contains one endpoint and not the other, so it fails both
      definitions.</div>
    <div class="mc-fb" data-key="b">The half-open intervals are the everyday counterexample, and there are plenty of
      them.</div>
    <div class="mc-fb" data-key="c">Correct, and it's the reading's whole reason for defining divergence explicitly.
      Two English opposites became two technical terms that are neither exclusive nor exhaustive.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">\(((-1)^n n)\) has terms of arbitrarily large size. Does it diverge to infinity?</p>
    <button class="mc-opt" type="button" data-key="a">No &mdash; the definition needs \(a_n &gt; r\) for <em>all</em>
      \(n &gt; N\), and the odd terms are very negative.</button>
    <button class="mc-opt" type="button" data-key="b">Yes &mdash; \(|a_n| \to \infty\).</button>
    <button class="mc-opt" type="button" data-key="c">Yes, but only to positive infinity.</button>
    <div class="mc-fb" data-key="a">Correct. It diverges, but not <em>to</em> infinity. Getting arbitrarily large
      infinitely often is not the same as eventually staying large &mdash; the same "for all past some point" versus
      "infinitely often" distinction as in the \(\varepsilon\)&ndash;\(N\) definition.</div>
    <div class="mc-fb" data-key="b">\(|a_n| \to \infty\) is a statement about \(|a_n|\), a different sequence. The
      definition is about \(a_n\).</div>
    <div class="mc-fb" data-key="c">Half the terms are large and negative, so it fails the positive-infinity condition
      at infinitely many indices.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">What does \(\lim a_n = \infty\) actually assert?</p>
    <button class="mc-opt" type="button" data-key="a">The limit exists and equals \(\infty\).</button>
    <button class="mc-opt" type="button" data-key="b">The limit does not exist, and the sequence diverges by becoming
      arbitrarily large and staying there.</button>
    <button class="mc-opt" type="button" data-key="c">The sequence is unbounded.</button>
    <div class="mc-fb" data-key="a">\(\infty\) is not a real number, so there is nothing for the limit to equal. Your
      reading calls the notation "an abuse."</div>
    <div class="mc-fb" data-key="b">Correct. It's shorthand for a specific kind of divergence. The equals sign is
      inherited from a notation it doesn't really belong to, which is why the reading warns that it "looks so much
      like the notation we use to denote convergence."</div>
    <div class="mc-fb" data-key="c">Unboundedness is weaker &mdash; \(((-1)^n n)\) is unbounded and does not diverge to
      infinity.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Divergence to infinity shares some properties with convergence and not others. Before doing the problems, guess
      which of the limit laws survive when one or both limits are infinite, and where you expect trouble.</li>
    <li>The sequence that is \(1\) at powers of \(2\) and \(\frac1n\) elsewhere diverges, even though "most" of its
      terms go to \(0\). What would you have to change about the definition to make such a sequence converge? Would the
      resulting notion be useful?</li>
    <li>Writing \(\lim a_n\) before knowing it exists is the error in the bad Squeeze argument. Look back through your
      own work from this chapter for a place where you did it.</li>
    <li>"Open" and "closed" are neither exclusive nor exhaustive. Can you think of another pair of mathematical terms
      whose English meanings mislead?</li>
  </ol>
</div>

<script>
  (function () {
    var ZOO = [
      {
        label: 'n   →  diverges to +∞', f: function (n) { return n; },
        note: 'Runs away upward. This is the well-behaved kind: it diverges <em>to</em> infinity, so ' +
          'Definition 6.3.3 applies and it shares several properties with convergence.'
      },
      {
        label: '−√n   →  diverges to −∞', f: function (n) { return -Math.sqrt(n); },
        note: 'Runs away downward, and slowly &mdash; but slow does not matter. The definition asks only that ' +
          'the sequence eventually drops below every \\(r\\) and stays there.'
      },
      {
        label: '(−1)^n   →  bounded oscillation', f: function (n) { return Math.pow(-1, n); },
        note: 'Bounded, and divergent. It never settles because it never stops alternating between two values ' +
          'a fixed distance apart. Nothing "escapes" &mdash; there is simply no single number it approaches.'
      },
      {
        label: '(−1)^n · n   →  unbounded oscillation', f: function (n) { return Math.pow(-1, n) * n; },
        note: 'Terms of arbitrarily large size, but not divergence to infinity: the odd terms are large and ' +
          '<em>negative</em>, so no \\(r\\) is ever cleared permanently.'
      },
      {
        label: 'sin(n)   →  dense wandering', f: function (n) { return Math.sin(n); },
        note: 'Bounded, never repeating, and its values fill up \\([-1,1]\\) as densely as you like. It comes ' +
          'arbitrarily close to every number in that interval infinitely often &mdash; and therefore converges ' +
          'to none of them.'
      },
      {
        label: '1 at powers of 2, else 1/n', f: function (n) {
          var p = Math.log2(n);
          return Math.abs(p - Math.round(p)) < 1e-9 ? 1 : 1 / n;
        },
        note: 'Almost all of the terms head to \\(0\\) &mdash; but at \\(n = 1, 2, 4, 8, 16, \\ldots\\) the ' +
          'sequence jumps back to \\(1\\), and it does so infinitely often. Those spikes get rarer and never ' +
          'get smaller, which is exactly enough to prevent convergence.'
      }
    ];

    var zSel = document.getElementById('d21-zoo'),
      znIn = document.getElementById('d21-zn'),
      zCan = document.getElementById('d21-zoo-canvas'),
      zOut = document.getElementById('d21-zoo-out');

    ZOO.forEach(function (z, i) {
      var o = document.createElement('option');
      o.value = String(i); o.textContent = z.label;
      zSel.appendChild(o);
    });

    function drawZoo() {
      var z = ZOO[+zSel.value], N = +znIn.value;
      var d = M411.hidpi(zCan, 290), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 54, padR = 20, padT = 20, padB = 32;

      var vals = [];
      for (var n = 1; n <= N; n++) vals.push(z.f(n));
      var lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals);
      var span = Math.max(hi - lo, 1e-6), mid = (hi + lo) / 2;
      lo = mid - span * 0.62; hi = mid + span * 0.62;

      function X(n) { return padL + (n - 1) / Math.max(N - 1, 1) * (W - padL - padR); }
      function Y(v) { return padT + (hi - v) / (hi - lo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = 0; g <= 4; g++) {
        var v = lo + (hi - lo) * g / 4;
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(Math.abs(v) > 999 ? v.toExponential(1) : v.toFixed(2), padL - 8, Y(v) + 4);
      }
      if (0 > lo && 0 < hi) {
        ctx.strokeStyle = '#999'; ctx.lineWidth = 1.3;
        ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke();
      }

      vals.forEach(function (v, i) {
        ctx.fillStyle = M411.colors.check;
        ctx.beginPath(); ctx.arc(X(i + 1), Y(v), N > 120 ? 1.8 : 3, 0, 2 * Math.PI); ctx.fill();
      });

      zOut.innerHTML = '<p>' + z.note + '</p>';
      M411.typeset(zOut);
    }
    zSel.addEventListener('change', drawZoo);
    znIn.addEventListener('input', drawZoo);

    /* ---------------- the r-N game ---------------- */
    var INF = [
      { label: 'n', f: function (n) { return n; }, ok: true },
      { label: '√n', f: function (n) { return Math.sqrt(n); }, ok: true },
      { label: 'log(n)   (very slow, still →∞)', f: function (n) { return Math.log(n); }, ok: true },
      { label: '(−1)^n · n   (does NOT →∞)', f: function (n) { return Math.pow(-1, n) * n; }, ok: false },
      { label: 'n + 5·(−1)^n · n / 2   (does NOT →∞)', f: function (n) { return n + 5 * Math.pow(-1, n) * n / 2; }, ok: false }
    ];

    var iSel = document.getElementById('d21-seq'),
      rIn = document.getElementById('d21-r'),
      iCan = document.getElementById('d21-inf'),
      iOut = document.getElementById('d21-inf-out');

    INF.forEach(function (s, i) {
      var o = document.createElement('option');
      o.value = String(i); o.textContent = s.label;
      iSel.appendChild(o);
    });

    function drawInf() {
      var s = INF[+iSel.value], r = Math.pow(10, +rIn.value);
      var NT = 600;

      // last index whose term fails to exceed r
      var lastBad = 0;
      for (var n = 1; n <= NT; n++) if (s.f(n) <= r) lastBad = n;
      var works = lastBad < NT * 0.8;

      var d = M411.hidpi(iCan, 290), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 60, padR = 20, padT = 20, padB = 32;

      var vals = [];
      for (var k = 1; k <= NT; k++) vals.push(s.f(k));
      var lo = Math.min.apply(null, vals.concat([0])), hi = Math.max.apply(null, vals.concat([r * 1.3]));
      var span = Math.max(hi - lo, 1e-6), mid = (hi + lo) / 2;
      lo = mid - span * 0.62; hi = mid + span * 0.62;

      function X(n) { return padL + (n - 1) / (NT - 1) * (W - padL - padR); }
      function Y(v) { return padT + (hi - v) / (hi - lo) * (H - padT - padB); }

      // everything above r is the target zone
      ctx.fillStyle = 'rgba(0,133,82,0.11)';
      ctx.fillRect(padL, padT, W - padL - padR, Math.max(Y(r) - padT, 0));
      ctx.strokeStyle = M411.colors.scaffold; ctx.lineWidth = 2; ctx.setLineDash([6, 4]);
      ctx.beginPath(); ctx.moveTo(padL, Y(r)); ctx.lineTo(W - padR, Y(r)); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = M411.colors.scaffold; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('r = ' + r.toFixed(1), padL + 4, Y(r) - 6);

      if (works && lastBad > 0) {
        ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(X(lastBad), padT); ctx.lineTo(X(lastBad), H - padB); ctx.stroke();
        ctx.fillStyle = M411.colors.check; ctx.font = 'bold 12px sans-serif';
        ctx.fillText('N = ' + lastBad, X(lastBad) + 5, padT + 12);
      }

      vals.forEach(function (v, i) {
        ctx.fillStyle = v > r ? 'rgba(0,133,82,0.8)' : '#d9534f';
        ctx.beginPath(); ctx.arc(X(i + 1), Y(v), 1.8, 0, 2 * Math.PI); ctx.fill();
      });

      iOut.innerHTML =
        '<p>Adversary names \\(r = ' + r.toFixed(2) + '\\).</p>' +
        (works
          ? '<p><strong style="color:var(--a411-scaffold)">Cleared.</strong> Taking \\(N = ' + lastBad +
          '\\), every term with \\(n &gt; N\\) exceeds \\(r\\). Raise \\(r\\) and \\(N\\) moves right &mdash; ' +
          'but it always exists, which is what \\(a_n \\to \\infty\\) asserts.</p>'
          : '<p><strong style="color:#d9534f">Not cleared.</strong> Terms keep dropping back below \\(r\\) no ' +
          'matter how far out you look &mdash; the last one in view is at \\(n = ' + lastBad + '\\). ' +
          'The definition needs \\(a_n &gt; r\\) for <em>all</em> \\(n &gt; N\\), so this sequence does not ' +
          'diverge to infinity, however large some of its terms get.</p>');
      M411.typeset(iOut);
    }
    iSel.addEventListener('change', drawInf);
    rIn.addEventListener('input', drawInf);

    M411.onResize(function () { drawZoo(); drawInf(); });
    drawZoo();
    drawInf();
  })();
</script>
