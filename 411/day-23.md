---
layout: day
title: "MATH 411 Day 23: Working with the Definition"
day: 23
chapter_number: 8
chapter: "Continuity"
day_title: "Working with the Definition"
blurb: "Finding \\(\\delta\\) is a craft: work backwards from what you want, restrict yourself early, and be as crude as you can get away with."
reading: "Section 8.1, Examples 8.1.10 and 8.1.14, and the Halmos quotation"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>\(\delta\) depends on \(a\), not just on \(\varepsilon\)</h2>

  <p>Fix \(\varepsilon\) and slide the point \(a\) along the curve. Watch how much room you get.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d23-fn">Function</label>
      <select id="d23-fn"></select>
    </div>
    <div class="ctl">
      <label for="d23-a">Point \(a\)</label>
      <input type="range" id="d23-a" min="0.02" max="4" step="0.01" value="1">
    </div>
    <div class="ctl">
      <label for="d23-eps">\(\varepsilon\) (held fixed)</label>
      <input type="range" id="d23-eps" min="-1.7" max="-0.2" step="0.02" value="-1">
    </div>
  </div>

  <canvas class="plot" id="d23-canvas"></canvas>
  <div class="readout" id="d23-out"></div>

  <p>For \(x^2\), the same \(\varepsilon\) buys a generous \(\delta\) near the origin and a stingy one far out, because
    the graph is steeper there. For \(\sqrt{x}\) it's the reverse &mdash; the crunch is near \(0\), where the curve
    turns vertical. And for \(\frac1x\) the required \(\delta\) collapses toward zero as \(a\) approaches the pole.</p>

  <p>So \(\delta\) is a function of <em>two</em> things: the tolerance demanded and the location. That is why
    Definition 8.1.7 is stated at a single point \(a\), and why your reading says that to check continuity on an
    interval "in theory, we would need to use the above definition to check continuity at each individual point."</p>

  <p>Hold on to the question this raises. Is there ever a single \(\delta\) that works for a given \(\varepsilon\) at
    <em>every</em> point at once? For \(\sqrt x\) on \((0,\infty)\) the widget suggests not &mdash; you can always
    move left and break it. That question has a name, and it is what Day 34 is about.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Working backwards, with a bound you have to earn</h2>

  <p>Your reading's \(\sqrt{x}\) example is unusually kind: the algebra hands you \(|\sqrt x - 1| &lt; |x-1|\)
    directly, so \(\delta = \varepsilon\) works. Most functions are not so obliging. Here is one that needs the extra
    move you'll use constantly.</p>

  <p><strong>Claim.</strong> \(f(x) = x^3\) is continuous at \(a = 1\).</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the scrapwork and proof</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Scrapwork 1. Factor out the quantity you can control.</div>
        <div class="sstep-body">
          <p>We can control \(|x - 1|\), so make it appear:</p>
          \[ |x^3 - 1| = |x-1|\,|x^2 + x + 1| \]
          <p>The first factor is as small as we like. The second is a nuisance &mdash; it depends on \(x\), and Day 19
            taught us that a quantity depending on the variable cannot be handed to a definition as a tolerance.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Scrapwork 2. Buy a constant bound by restricting \(\delta\) in advance.</div>
        <div class="sstep-body">
          <p>Here is the move. <strong>Decide up front that \(\delta\) will be at most \(1\).</strong> We're allowed to
            &mdash; a smaller \(\delta\) is always acceptable &mdash; and it costs nothing.</p>
          <p>With \(\delta \le 1\) we have \(|x - 1| &lt; 1\), so \(0 &lt; x &lt; 2\), and therefore</p>
          \[ |x^2 + x + 1| &lt; 4 + 2 + 1 = 7 \]
          <p>The nuisance factor is now bounded by a <em>constant</em>. We traded away the far-away \(x\) values, which
            we never needed, in exchange for a number that doesn't move.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Scrapwork 3. Now the tolerance is easy.</div>
        <div class="sstep-body">
          <p>Given \(\delta \le 1\), we have \(|x^3 - 1| &lt; 7|x-1|\), which is under \(\varepsilon\) as soon as
            \(|x-1| &lt; \frac{\varepsilon}{7}\).</p>
          <p>Two conditions to satisfy at once, so take the smaller:</p>
          \[ \delta = \min\left(1, \frac{\varepsilon}{7}\right) \]
          <p>Compare with Day 17, where several conditions were combined with \(\max\). There we needed \(n\) large, so
            the larger threshold won; here we need \(|x-a|\) small, so the smaller wins. Same idea, opposite
            direction.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">The formal proof.</div>
        <div class="sstep-body">
          <p><em>Proof.</em> Let \(\varepsilon &gt; 0\). Let \(\delta = \min\left(1, \frac{\varepsilon}{7}\right)\).
            Suppose \(|x - 1| &lt; \delta\). Then \(|x-1| &lt; 1\), so \(0 &lt; x &lt; 2\) and \(|x^2+x+1| &lt; 7\).
            Hence</p>
          \[ |x^3 - 1| = |x-1|\,|x^2+x+1| &lt; 7|x-1| &lt; 7\cdot\frac{\varepsilon}{7} = \varepsilon \]
          <p>Therefore \(x^3\) is continuous at \(1\). \(\blacksquare\)</p>
          <p>Where did \(7\) come from? Nowhere, as far as the reader can see &mdash; it appears fully formed, exactly
            like the \(N\)s of Chapter 6. And as your reading says, "to a trained reader, your ideas will come through
            when you demonstrate that your choice of \(\delta\) works."</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">The general recipe, worth memorising.</div>
        <div class="sstep-body">
          <ol>
            <li>Write \(|f(x) - f(a)|\) and factor out \(|x - a|\).</li>
            <li>If what remains depends on \(x\), restrict \(\delta \le\) some convenient number first, and use that
              restriction to bound the remainder by a constant \(K\).</li>
            <li>Take \(\delta = \min\left(\text{that number}, \frac{\varepsilon}{K}\right)\).</li>
          </ol>
          <p>Nothing here needs to be sharp. Your reading stresses that any smaller \(\delta\) also works, so crude
            bounds are not merely acceptable &mdash; they're preferable, because they're easier to justify. \(7\) was a
            lazy bound and it was fine.</p>
        </div>
      </li>

    </ol>
  </div>

  <p>And on reading proofs rather than writing them, your reading quotes Paul Halmos:</p>

  <blockquote class="source">
    Don't just read it; fight it! Ask your own questions, look for your own examples, discover your own proofs. Is the
    hypothesis necessary? Is the converse true? What happens in the classical special case? What about the degenerate
    cases? Where does the proof use the hypothesis?
    <cite>Paul Halmos (1916&ndash;2006)</cite>
  </blockquote>

  <p>Try it on the proof above. Where was \(a = 1\) used? What would change at \(a = 100\)? What if the restriction had
    been \(\delta \le 10\) instead of \(\delta \le 1\)?</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>A \(\delta\) that isn't allowed</h2>

  <p>Here is an attempt to show \(f(x) = x^2\) is continuous at \(a = 3\).</p>

  <p><strong>Click the line that violates the definition.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Let \(\varepsilon &gt; 0\) be given.</button>
      <button class="fline" type="button">\(|x^2 - 9| = |x-3|\,|x+3|\).</button>
      <button class="fline" type="button">Let \(\delta = \dfrac{\varepsilon}{|x+3|}\).</button>
      <button class="fline" type="button">Then \(|x - 3| &lt; \delta\) gives \(|x^2 - 9| = |x-3|\,|x+3| &lt;
        \dfrac{\varepsilon}{|x+3|}\cdot|x+3| = \varepsilon\).</button>
      <button class="fline" type="button">Hence \(x^2\) is continuous at \(3\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct opening.</strong> Accept an arbitrary positive challenge.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct algebra</strong>, and the right first move &mdash; factor out the quantity you control.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>That's the violation: \(\delta\) must not depend on \(x\).</strong></p>
      <p>Read the definition's order again. \(\varepsilon\) is given; then \(\delta\) is chosen; then \(x\) ranges over
        <em>every</em> point with \(|x - a| &lt; \delta\). So \(\delta\) is fixed before any particular \(x\) exists.
        Defining it in terms of \(x\) is circular &mdash; you would need to know \(x\) to know which \(x\) to
        consider.</p>
      <p>This is Day 17's broken proof and Day 19's stuck product proof, for the third time. The pattern is always the
        same: <strong>a quantity that must be constant has been allowed to depend on the variable.</strong> Once you
        recognise it, you'll catch it everywhere.</p>
      <p>The repair is Scrapwork 2 above. Restrict \(\delta \le 1\) first; then \(|x - 3| &lt; 1\) gives \(2 &lt; x &lt;
        4\), so \(|x + 3| &lt; 7\), a constant. Then \(\delta = \min\left(1, \frac{\varepsilon}{7}\right)\) works and
        mentions no \(x\).</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>The algebra is impeccable and the reasoning is void.</strong> This is what makes the error dangerous:
        the cancellation is perfect and the line looks like a proof. It is manipulating a symbol \(\delta\) that was
        never legitimately defined.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>True, but not established here.</strong> \(x^2\) is continuous at \(3\), and the fix in the verdict
        for line (3) proves it properly.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on finding \(\delta\)</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">If \(\delta_0\) works for a given \(\varepsilon\), what about a smaller \(\delta\)?</p>
    <button class="mc-opt" type="button" data-key="a">It may fail &mdash; you need the exact \(\delta\).</button>
    <button class="mc-opt" type="button" data-key="b">It works too: fewer \(x\) values are being considered, and they
      were already fine.</button>
    <button class="mc-opt" type="button" data-key="c">Only if it's at least half of \(\delta_0\).</button>
    <div class="mc-fb" data-key="a">There's no "exact" \(\delta\) &mdash; the definition asks for existence, not
      optimality.</div>
    <div class="mc-fb" data-key="b">Correct. \(|x-a| &lt; \delta &lt; \delta_0\) implies \(|x-a| &lt; \delta_0\), so
      the conclusion still holds. This is what licenses "restrict \(\delta \le 1\) first" &mdash; you may always shrink
      \(\delta\) for convenience.</div>
    <div class="mc-fb" data-key="c">No such threshold; any positive smaller value is fine.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Why restrict \(\delta \le 1\) before bounding \(|x^2+x+1|\)?</p>
    <button class="mc-opt" type="button" data-key="a">To make the algebra tidier.</button>
    <button class="mc-opt" type="button" data-key="b">Because the definition requires \(\delta \le 1\).</button>
    <button class="mc-opt" type="button" data-key="c">To confine \(x\) to a bounded interval, so the leftover factor
      has a constant bound.</button>
    <div class="mc-fb" data-key="a">Tidiness is a side effect; the restriction is doing real work.</div>
    <div class="mc-fb" data-key="b">No such requirement &mdash; \(\delta\) may be any positive number.</div>
    <div class="mc-fb" data-key="c">Correct. Without a restriction, \(x\) could be anywhere and \(|x^2+x+1|\) is
      unbounded. Confining \(x\) to \((0,2)\) turns it into the constant \(7\), and constants are what the definition
      can work with.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Chapter 6 combined conditions with \(\max\); here we used \(\min\). Why the switch?</p>
    <button class="mc-opt" type="button" data-key="a">There we needed \(n\) large, so the larger threshold wins; here
      we need \(|x-a|\) small, so the smaller \(\delta\) wins.</button>
    <button class="mc-opt" type="button" data-key="b">Because \(\delta\) is always less than \(1\).</button>
    <button class="mc-opt" type="button" data-key="c">Arbitrary convention.</button>
    <div class="mc-fb" data-key="a">Correct, and it's worth being able to say out loud. Both are "satisfy several
      conditions at once"; the direction is set by whether the conditions ask for something big or something
      small.</div>
    <div class="mc-fb" data-key="b">It needn't be &mdash; that was a choice we made for convenience.</div>
    <div class="mc-fb" data-key="c">Not arbitrary: taking the max of two \(\delta\)s would break the condition that the
      smaller one was enforcing.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Halmos says "Don't just read it; fight it!" What is he asking for?</p>
    <button class="mc-opt" type="button" data-key="a">Scepticism about whether published proofs are correct.</button>
    <button class="mc-opt" type="button" data-key="b">Finding shorter proofs.</button>
    <button class="mc-opt" type="button" data-key="c">Active reconstruction &mdash; asking where each hypothesis is
      used, what the degenerate cases do, whether the converse holds.</button>
    <div class="mc-fb" data-key="a">Not hunting for errors, though that can happen. It's about understanding.</div>
    <div class="mc-fb" data-key="b">Brevity isn't the goal.</div>
    <div class="mc-fb" data-key="c">Correct, and it's the reading counterpart to Day 1's Lesson Two. The author omits
      the scrapwork; your job is to reconstruct it. "As a trained reader, when you read the proof of a theorem it is
      <em>your</em> responsibility to find the scrapwork."</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Run Halmos on the \(x^3\) proof. Where was \(a=1\) used? What changes at \(a = 100\)? Does the restriction
      \(\delta \le 1\) matter, or would \(\delta \le 10\) do just as well?</li>
    <li>In the widget, \(\sqrt x\) needs an ever-smaller \(\delta\) as \(a \to 0^+\), while \(x^2\) needs an
      ever-smaller \(\delta\) as \(a\) grows. Is there a function where one \(\delta\) works at every point for a given
      \(\varepsilon\)?</li>
    <li>The proof never explains where \(7\) came from. Is that a defect in mathematical writing? What would be lost by
      including the scrapwork &mdash; and what would be gained?</li>
    <li>Both Chapter 6 and Chapter 8 definitions have the same quantifier shape. Write them side by side and identify
      exactly which symbols correspond.</li>
  </ol>
</div>

<script>
  (function () {
    var FNS = [
      { label: 'x²', f: function (x) { return x * x; }, lo: 0, hi: 4.2, ylo: -0.5, yhi: 18 },
      { label: '√x', f: function (x) { return x > 0 ? Math.sqrt(x) : NaN; }, lo: 0, hi: 4.2, ylo: -0.2, yhi: 2.4 },
      { label: '1/x', f: function (x) { return x > 1e-9 ? 1 / x : NaN; }, lo: 0, hi: 4.2, ylo: -0.5, yhi: 12 },
      { label: 'x³', f: function (x) { return x * x * x; }, lo: 0, hi: 4.2, ylo: -1, yhi: 40 }
    ];

    var sel = document.getElementById('d23-fn'),
      aIn = document.getElementById('d23-a'),
      eIn = document.getElementById('d23-eps'),
      canvas = document.getElementById('d23-canvas'),
      out = document.getElementById('d23-out');

    FNS.forEach(function (fn, i) {
      var o = document.createElement('option');
      o.value = String(i); o.textContent = fn.label;
      sel.appendChild(o);
    });

    var history = {};

    function largestDelta(fn, a, eps) {
      var fa = fn.f(a);
      if (!isFinite(fa)) return 0;
      var STEP = 0.0005, MAXD = 2.5;
      for (var t = STEP; t <= MAXD; t += STEP) {
        var bad = false;
        [a + t, a - t].forEach(function (x) {
          var v = fn.f(x);
          if (!isFinite(v) || Math.abs(v - fa) >= eps) bad = true;
        });
        if (bad) return t;
      }
      return MAXD;
    }

    function draw() {
      var fn = FNS[+sel.value], a = +aIn.value, eps = Math.pow(10, +eIn.value);
      var fa = fn.f(a), delta = largestDelta(fn, a, eps);

      var d = M411.hidpi(canvas, 320), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 50, padR = 20, padT = 18, padB = 52;
      function X(x) { return padL + (x - fn.lo) / (fn.hi - fn.lo) * (W - padL - padR); }
      function Y(y) { return padT + (fn.yhi - y) / (fn.yhi - fn.ylo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = 0; g <= 4; g++) { ctx.beginPath(); ctx.moveTo(X(g), padT); ctx.lineTo(X(g), H - padB); ctx.stroke(); }

      if (isFinite(fa)) {
        ctx.fillStyle = 'rgba(0,133,82,0.14)';
        ctx.fillRect(padL, Y(fa + eps), W - padL - padR, Math.max(Y(fa - eps) - Y(fa + eps), 1));
        ctx.fillStyle = 'rgba(243,110,36,0.18)';
        ctx.fillRect(X(a - delta), padT, Math.max(X(a + delta) - X(a - delta), 1.5), H - padT - padB);
      }

      ctx.strokeStyle = '#333'; ctx.lineWidth = 2.2;
      ctx.beginPath();
      var started = false;
      for (var i = 0; i <= 1200; i++) {
        var x = fn.lo + (fn.hi - fn.lo) * i / 1200, y = fn.f(x);
        if (!isFinite(y) || y < fn.ylo - 40 || y > fn.yhi + 40) { started = false; continue; }
        started ? ctx.lineTo(X(x), Y(y)) : (ctx.moveTo(X(x), Y(y)), started = true);
      }
      ctx.stroke();

      if (isFinite(fa)) {
        ctx.fillStyle = M411.colors.check;
        ctx.beginPath(); ctx.arc(X(a), Y(fa), 5, 0, 2 * Math.PI); ctx.fill();
      }

      // a strip along the bottom recording delta as a function of a
      var key = sel.value + '|' + eps.toFixed(4);
      if (!history[key]) {
        var arr = [];
        for (var s = 0; s <= 200; s++) {
          var aa = 0.02 + (4 - 0.02) * s / 200;
          arr.push([aa, largestDelta(fn, aa, eps)]);
        }
        history[key] = arr;
      }
      var arr2 = history[key];
      var maxD = Math.max.apply(null, arr2.map(function (p) { return p[1]; }));
      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 1.8;
      ctx.beginPath();
      arr2.forEach(function (p, i2) {
        var px = X(p[0]), py = H - 12 - (p[1] / maxD) * 30;
        i2 ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
      });
      ctx.stroke();
      ctx.fillStyle = M411.colors.muted; ctx.font = '10px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('largest usable δ, as a varies →', padL + 2, H - 46);

      out.innerHTML = isFinite(fa)
        ? '<p>At \\(a = ' + a.toFixed(2) + '\\) with \\(\\varepsilon = ' + eps.toFixed(4) + '\\), the largest ' +
        'usable \\(\\delta\\) is about \\(' + delta.toFixed(4) + '\\).</p>' +
        '<p>The orange trace along the bottom is that value as \\(a\\) moves across the whole range, with ' +
        '\\(\\varepsilon\\) held fixed. It is emphatically not constant &mdash; and where it dips toward zero, ' +
        'continuity is getting harder to certify even though it never actually fails.</p>'
        : '<p>\\(f\\) is undefined at \\(a = ' + a.toFixed(2) + '\\).</p>';
      M411.typeset(out);
    }
    sel.addEventListener('change', draw);
    aIn.addEventListener('input', draw);
    eIn.addEventListener('input', draw);
    M411.onResize(draw);
    draw();
  })();
</script>
