---
layout: day
title: "MATH 411 Day 28: Fermat, Rolle, and the Mean Value Theorem"
day: 28
chapter_number: 8
chapter: "Continuity"
day_title: "Fermat, Rolle, and the Mean Value Theorem"
blurb: "The derivative arrives late and almost anticlimactically. Then three theorems recover everything you used it for in calculus &mdash; and one of them rests on a result nobody has proved yet."
reading: "Section 8.4, Definition 8.4.1 through the corollaries of the Mean Value Theorem"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The Mean Value Theorem, and the point it promises</h2>

  <p>If \(f\) is continuous on \([a,b]\) and differentiable on \((a,b)\), there is some \(c\) inside where</p>

  \[ f'(c) = \frac{f(b)-f(a)}{b-a} \]

  <p>&mdash; a point where the tangent is parallel to the secant. Drag the endpoints and watch the promise being kept.
  </p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d28-fn">Function</label>
      <select id="d28-fn"></select>
    </div>
    <div class="ctl">
      <label for="d28-a">\(a\)</label>
      <input type="range" id="d28-a" min="-3" max="2.5" step="0.02" value="-2">
    </div>
    <div class="ctl">
      <label for="d28-b">\(b\)</label>
      <input type="range" id="d28-b" min="-2.5" max="3" step="0.02" value="2">
    </div>
  </div>

  <canvas class="plot" id="d28-canvas"></canvas>
  <div class="readout" id="d28-out"></div>

  <p>Notice what the theorem does and does not say. It promises <em>at least one</em> such \(c\); there may be several,
    and it tells you nothing about where. It is a pure existence statement &mdash; and that turns out to be plenty.
    Corollary 8.4.10, for instance, gets "\(f' &gt; 0\) implies \(f\) is increasing" out of it in three lines, without
    ever locating a single \(c\).</p>

  <p>Rolle's Theorem is the special case \(f(a) = f(b)\), where the secant is horizontal and the promised tangent is
    too. Historically it came first, and the general MVT is proved from it by tilting: subtract off the secant line,
    apply Rolle to the difference, tilt back.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Dropping a hypothesis from Rolle's Theorem</h2>

  <p><strong>Click the step that isn't true.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Let \(f(x) = |x|\) on \([-1, 1]\). Then \(f(-1) = f(1) = 1\).</button>
      <button class="fline" type="button">\(f\) is continuous on \([-1,1]\).</button>
      <button class="fline" type="button">\(f\) is differentiable at every point of \((-1,1)\) except
        \(x=0\).</button>
      <button class="fline" type="button">Rolle's Theorem therefore gives some \(c \in (-1,1)\) with \(f'(c) =
        0\).</button>
      <button class="fline" type="button">But \(f'(x) = -1\) for \(x &lt; 0\) and \(+1\) for \(x &gt; 0\), so no such
        \(c\) exists.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>True.</strong> \(|-1| = |1| = 1\), so the equal-endpoints hypothesis holds.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>True.</strong> \(|x|\) is continuous everywhere &mdash; a corner is not a break.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>True, and it is the fatal word "except".</strong> At \(0\) the difference quotient
        \(\frac{|h|}{h}\) equals \(-1\) for \(h &lt; 0\) and \(+1\) for \(h &gt; 0\), so it has no limit. This is
        exactly the sign function from Day 25.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>That's the misapplication.</strong> Rolle's Theorem requires \(f'\) to exist at <em>every</em> point
        of \((a,b)\). One point of failure is one too many, and \(|x|\) fails at \(0\) &mdash; which lies inside
        \((-1,1)\).</p>
      <p>So the theorem does not apply, and there is no contradiction. Line (5) is simply true: no such \(c\)
        exists.</p>
      <p>What makes this instructive is how <em>nearly</em> the hypotheses hold. Continuity is fine on the closed
        interval; differentiability is fine at every point but one; the endpoints match. A single corner, at a single
        point, destroys the conclusion entirely.</p>
      <p>And note the asymmetry in the hypotheses, which is not decoration: continuity is required on the
        <strong>closed</strong> \([a,b]\) and differentiability only on the <strong>open</strong> \((a,b)\). The proof
        needs continuity at the endpoints to know the extreme values are attained, but never differentiates there.
        Being able to say why a hypothesis is stated exactly as it is &mdash; Halmos's "where does the proof use the
        hypothesis?" &mdash; is a good test of whether you have understood a theorem.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>Perfectly true</strong>, and no contradiction follows, because line (4) had no right to invoke the
        theorem. \(|x|\) has slope \(-1\) or \(+1\) everywhere it has a slope at all.</p>
    </div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>What rests on what &mdash; and the debt at the bottom</h2>

  <p>Your reading attaches a warning to Rolle's Theorem that is easy to skim past:</p>

  <blockquote class="source">
    Any proof that relies on the Extreme Value Theorem is not complete until the EVT has been proved. We'll get to this
    in [Chapter 9].
  </blockquote>

  <p>It's worth laying out the whole dependency structure, because Chapter 9 exists to settle it.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the structure</button>
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Layer 1. Fermat's Theorem &mdash; complete.</div>
        <div class="sstep-body">
          <p>If \(f\) is differentiable near \(c\) and \(f(c)\) is the largest value nearby, then \(f'(c) = 0\).</p>
          <p>The proof approaches \(c\) from each side using sequences. From the right, the difference quotients are
            \(\le 0\), so the limit is \(\le 0\); from the left they are \(\ge 0\), so the limit is \(\ge 0\). A number
            that is both gives \(f'(c) = 0\).</p>
          <p>This rests only on the definition of the derivative and Chapter 6 sequence facts. Nothing is owed.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Layer 2. Rolle's Theorem &mdash; complete <em>except</em> for one borrowed fact.</div>
        <div class="sstep-body">
          <p>Given \(f(a) = f(b)\), the proof splits by cases and applies Fermat at an interior maximum or minimum.
            The case analysis is airtight.</p>
          <p>But the very first line asserts that a continuous function on \([a,b]\) <em>attains</em> a maximum and a
            minimum &mdash; which is the Extreme Value Theorem, and has not been proved.</p>
          <p>Everything else in this layer is sound. The theorem is one citation away from complete.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Layer 3. The MVT &mdash; complete, given Rolle.</div>
        <div class="sstep-body">
          <p>Take \(\varphi(x)\) to be the vertical gap between \(f\) and the secant line from \((a,f(a))\) to
            \((b,f(b))\). At both endpoints the gap is zero, so \(\varphi(a) = \varphi(b) = 0\) and Rolle applies to
            \(\varphi\).</p>
          <p>Translating \(\varphi'(c) = 0\) back into a statement about \(f\) gives the MVT. (The details are your
            problem for today.) So the MVT inherits Rolle's debt and adds none of its own.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Layer 4. The calculus you already know &mdash; complete, given the MVT.</div>
        <div class="sstep-body">
          <p>\(f' &gt; 0 \Rightarrow f\) increasing; \(f' &lt; 0 \Rightarrow f\) decreasing; the local versions of
            both. Each is a three-line consequence of the MVT.</p>
          <p>These are the facts you used constantly in calculus without proof. They are all downstream of the same
            one borrowed result.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Layer 5. So where does the EVT come from?</div>
        <div class="sstep-body">
          <p>Not from continuity alone. A continuous function on \([a,b]\) attains its maximum <em>because
            \(\mathbb{R}\) has no holes</em> &mdash; and nothing so far in the course has said that.</p>
          <p>Day 27 noticed that continuity can be defined without a continuum. This is where that stops being enough.
            Chapter 9 opens by adopting a completeness axiom for \(\mathbb{R}\), and the EVT and IVT are proved from
            it.</p>
          <p>Which means the whole tower above &mdash; every derivative fact from your calculus course &mdash; rests
            in the end on \(\mathbb{R}\) having no holes. Newton assumed exactly that on Day 3, without argument, and
            the bill comes due next chapter.</p>
        </div>
      </li>
    </ol>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on the derivative's foundations</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Why does your reading call the derivative "an afterthought"?</p>
    <button class="mc-opt" type="button" data-key="a">Because it's unimportant.</button>
    <button class="mc-opt" type="button" data-key="b">Because it was discovered last.</button>
    <button class="mc-opt" type="button" data-key="c">Because once limits and continuity are in place, defining it
      takes one line &mdash; the hard work was all upstream.</button>
    <div class="mc-fb" data-key="a">The reading immediately denies this: "the derivative isn't really an afterthought
      &mdash; it is one of the most powerful and useful mathematical objects ever devised."</div>
    <div class="mc-fb" data-key="b">Historically it came early; the machinery justifying it came late.</div>
    <div class="mc-fb" data-key="c">Correct. Definition 8.4.1 is a single limit. It "will appear rather pedestrian
      alongside ideas like the convergence of power series" precisely because the difficulty was moved into the limit
      concept, where it was dealt with properly.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Rolle's Theorem needs continuity on \([a,b]\) and differentiability on \((a,b)\). Why the
      difference?</p>
    <button class="mc-opt" type="button" data-key="a">A typographical convention.</button>
    <button class="mc-opt" type="button" data-key="b">The proof needs continuity at the endpoints (to know extreme
      values are attained) but never differentiates there.</button>
    <button class="mc-opt" type="button" data-key="c">Functions can't be differentiable at endpoints.</button>
    <div class="mc-fb" data-key="a">The asymmetry is deliberate and load-bearing.</div>
    <div class="mc-fb" data-key="b">Correct. Weaker hypotheses give a stronger theorem, so one asks for no more than
      the proof consumes. This matters in practice &mdash; \(\sqrt{1-x^2}\) on \([-1,1]\) is continuous on the closed
      interval and not differentiable at the ends, and Rolle still applies.</div>
    <div class="mc-fb" data-key="c">One-sided derivatives exist perfectly well; the theorem simply doesn't need
      them.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">What is currently unproved in the chain from Fermat to the MVT?</p>
    <button class="mc-opt" type="button" data-key="a">The Extreme Value Theorem, used at the start of Rolle's
      proof.</button>
    <button class="mc-opt" type="button" data-key="b">Fermat's Theorem.</button>
    <button class="mc-opt" type="button" data-key="c">That differentiability implies continuity.</button>
    <div class="mc-fb" data-key="a">Correct, and your reading flags it explicitly. Everything else in the chain is
      complete. The EVT requires completeness of \(\mathbb{R}\), which is Chapter 9's business.</div>
    <div class="mc-fb" data-key="b">Fermat's proof uses only the definition of the derivative and sequence facts from
      Chapter 6.</div>
    <div class="mc-fb" data-key="c">That's Theorem 8.4.2, provable directly from the definitions.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Michel Rolle's relationship with calculus was what?</p>
    <button class="mc-opt" type="button" data-key="a">He was one of its earliest developers alongside
      Newton.</button>
    <button class="mc-opt" type="button" data-key="b">He was Leibniz's student.</button>
    <button class="mc-opt" type="button" data-key="c">He was a critic, calling it a collection of "ingenious
      fallacies."</button>
    <div class="mc-fb" data-key="a">The date (1691) makes that a reasonable guess, and your reading says so &mdash;
      "but this is not so."</div>
    <div class="mc-fb" data-key="b">He was disdainful of both Newton's and Leibniz's versions.</div>
    <div class="mc-fb" data-key="c">Correct, and the reading enjoys the irony: "his theorem is so fundamental to the
      modern development of the calculus he ridiculed." Worth noting that his criticism was <em>fair</em> in 1691
      &mdash; Days 4 and 5 showed the fallacies were real. What he could not foresee was that they'd be repaired.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The MVT promises a \(c\) and tells you nothing about where it is. Does that make it weaker than it looks? Find a
      use of it in calculus where knowing \(c\) would have helped &mdash; and one where existence alone is
      everything.</li>
    <li>\(|x|\) on \([-1,1]\) fails Rolle at a single point. Can you build a function that fails at exactly one point
      but where the conclusion of Rolle nevertheless happens to hold?</li>
    <li>Every derivative fact from calculus traces back to the EVT, which traces back to \(\mathbb{R}\) having no holes.
      Try to see, in advance, why "attains a maximum" should need completeness. What goes wrong over
      \(\mathbb{Q}\)?</li>
    <li>Fermat's Theorem says an interior extreme point has zero derivative. State the converse and find a
      counterexample.</li>
  </ol>
</div>

<script>
  (function () {
    var FNS = [
      { label: 'x³ − 3x', f: function (x) { return x * x * x - 3 * x; }, d: function (x) { return 3 * x * x - 3; } },
      { label: 'sin x', f: Math.sin, d: Math.cos },
      { label: 'x² ', f: function (x) { return x * x; }, d: function (x) { return 2 * x; } },
      {
        label: 'e^(−x²)', f: function (x) { return Math.exp(-x * x); },
        d: function (x) { return -2 * x * Math.exp(-x * x); }
      }
    ];

    var sel = document.getElementById('d28-fn'),
      aIn = document.getElementById('d28-a'),
      bIn = document.getElementById('d28-b'),
      canvas = document.getElementById('d28-canvas'),
      out = document.getElementById('d28-out');

    FNS.forEach(function (f, i) {
      var o = document.createElement('option'); o.value = String(i); o.textContent = f.label; sel.appendChild(o);
    });

    function draw() {
      var fn = FNS[+sel.value];
      var a = +aIn.value, b = +bIn.value;
      if (b <= a + 0.1) { b = a + 0.1; }

      var slope = (fn.f(b) - fn.f(a)) / (b - a);

      // every c in (a,b) with f'(c) = slope, by sign change of f' - slope
      var cs = [], STEPS = 4000, prev = fn.d(a) - slope;
      for (var i = 1; i <= STEPS; i++) {
        var x = a + (b - a) * i / STEPS, cur = fn.d(x) - slope;
        if (prev === 0 || (prev < 0) !== (cur < 0)) {
          // bisect for accuracy
          var lo = a + (b - a) * (i - 1) / STEPS, hi = x;
          for (var k = 0; k < 60; k++) {
            var m = (lo + hi) / 2;
            if ((fn.d(lo) - slope < 0) === (fn.d(m) - slope < 0)) lo = m; else hi = m;
          }
          cs.push((lo + hi) / 2);
        }
        prev = cur;
      }

      var d = M411.hidpi(canvas, 320), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 48, padR = 20, padT = 20, padB = 32;
      var xlo = -3.4, xhi = 3.4;
      var vals = [];
      for (var j = 0; j <= 400; j++) vals.push(fn.f(xlo + (xhi - xlo) * j / 400));
      var ylo = Math.min.apply(null, vals), yhi = Math.max.apply(null, vals);
      var pad = (yhi - ylo) * 0.18 || 1; ylo -= pad; yhi += pad;

      function X(x) { return padL + (x - xlo) / (xhi - xlo) * (W - padL - padR); }
      function Y(y) { return padT + (yhi - y) / (yhi - ylo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = Math.ceil(xlo); g <= xhi; g++) { ctx.beginPath(); ctx.moveTo(X(g), padT); ctx.lineTo(X(g), H - padB); ctx.stroke(); }
      if (0 > ylo && 0 < yhi) {
        ctx.strokeStyle = '#999'; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke();
      }

      // the interval
      ctx.fillStyle = 'rgba(0,156,222,0.08)';
      ctx.fillRect(X(a), padT, X(b) - X(a), H - padT - padB);

      // the function
      ctx.strokeStyle = '#333'; ctx.lineWidth = 2.2;
      ctx.beginPath();
      for (var p = 0; p <= 900; p++) {
        var x2 = xlo + (xhi - xlo) * p / 900, y2 = fn.f(x2);
        p ? ctx.lineTo(X(x2), Y(y2)) : ctx.moveTo(X(x2), Y(y2));
      }
      ctx.stroke();

      // the secant
      ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(X(a), Y(fn.f(a))); ctx.lineTo(X(b), Y(fn.f(b))); ctx.stroke();
      [a, b].forEach(function (t) {
        ctx.fillStyle = M411.colors.explore;
        ctx.beginPath(); ctx.arc(X(t), Y(fn.f(t)), 5, 0, 2 * Math.PI); ctx.fill();
      });

      // the tangents at each c
      cs.forEach(function (c) {
        var y0 = fn.f(c), L = 1.1;
        ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(X(c - L), Y(y0 - slope * L));
        ctx.lineTo(X(c + L), Y(y0 + slope * L));
        ctx.stroke();
        ctx.fillStyle = M411.colors.check;
        ctx.beginPath(); ctx.arc(X(c), Y(y0), 5, 0, 2 * Math.PI); ctx.fill();
        ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('c', X(c), Y(y0) - 12);
      });

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = M411.colors.explore; ctx.fillText('secant, slope ' + slope.toFixed(4), padL + 6, padT + 14);
      ctx.fillStyle = M411.colors.check; ctx.fillText('tangent(s) with the same slope', padL + 6, padT + 32);

      out.innerHTML =
        '<p>\\(a = ' + a.toFixed(2) + '\\), \\(b = ' + b.toFixed(2) + '\\), average rate of change \\(= ' +
        slope.toFixed(6) + '\\).</p>' +
        '<p>The MVT guarantees at least one \\(c\\); here there ' + (cs.length === 1 ? 'is exactly <strong>1</strong>' :
          'are <strong>' + cs.length + '</strong>') + ' &mdash; at \\(c = ' +
        cs.map(function (c) { return c.toFixed(4); }).join('\\), \\(') + '\\).</p>' +
        (Math.abs(fn.f(a) - fn.f(b)) < 1e-6
          ? '<p>The endpoints have equal values, so the secant is horizontal &mdash; this is exactly Rolle\'s ' +
          'Theorem, and the promised tangent is horizontal too.</p>'
          : '<p>Slide \\(a\\) and \\(b\\) until \\(f(a) = f(b)\\) to see Rolle\'s Theorem as the special case.</p>');
      M411.typeset(out);
    }
    sel.addEventListener('change', draw);
    aIn.addEventListener('input', draw);
    bIn.addEventListener('input', draw);
    M411.onResize(draw);
    draw();
  })();
</script>
