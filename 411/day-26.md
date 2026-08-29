---
layout: day
title: "MATH 411 Day 26: Continuity of Familiar Functions"
day: 26
chapter_number: 8
chapter: "Continuity"
day_title: "Continuity of Familiar Functions"
blurb: "Four theorems and two base cases certify every function you met before this course &mdash; and continuous functions turn out to be exactly the ones you may pull a limit through."
reading: "Section 8.2, the quotient and composition theorems through commuting limits with functions"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Certifying a function continuous, without the definition</h2>

  <p>You now have base cases &mdash; \(f(x) = x\) and \(f(x) = c\) are continuous &mdash; and closure rules: sums,
    products, quotients (where the denominator doesn't vanish), and compositions of continuous functions are
    continuous.</p>

  <p>That's enough to certify an enormous class of functions with no \(\varepsilon\) in sight. Pick one and watch the
    certificate get built from the leaves up.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d26-fn">Function</label>
      <select id="d26-fn"></select>
    </div>
  </div>

  <div id="d26-tree"></div>
  <canvas class="plot" id="d26-canvas"></canvas>
  <div class="readout" id="d26-out"></div>

  <p>Each line rests on the ones above it, and the leaves are facts proved directly from the definition back on Days
    22&ndash;24. Nothing in the middle needs any new \(\varepsilon\)&ndash;\(\delta\) work at all.</p>

  <p>This is what a mathematical toolkit is <em>for</em>. Six results, proved once, cover essentially every function
    in a calculus course. When your reading asks what allows you to conclude that \(\sin(e^x)\) is continuous "without
    referring back to the definition," this tree is the answer.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Continuous functions commute with limits</h2>

  <p>Here is another way to read Theorem 8.2.1. If \(f\) is continuous at \(a\) and \(x_n \to a\), then</p>

  \[ \lim_{n\to\infty}f(x_n) = f(a) = f\left(\lim_{n\to\infty}x_n\right) \]

  <p>The limit and the function have swapped places. <strong>Continuous functions are precisely the ones you may move
    a limit through.</strong></p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d26-ex">Example</label>
      <select id="d26-ex"></select>
    </div>
    <div class="ctl">
      <label for="d26-n">Terms</label>
      <input type="range" id="d26-n" min="1" max="60" step="1" value="8">
    </div>
  </div>

  <canvas class="plot" id="d26-commute"></canvas>
  <div class="readout" id="d26-com-out"></div>

  <p>Try the last entry, where the outer function is <em>not</em> continuous at the relevant point. There the two
    orders give genuinely different answers, and the identity fails.</p>

  <p>That failure is worth dwelling on, because "pull the limit inside" is a move you have been making since calculus
    without noticing. It is legal exactly when the outer function is continuous at the limiting value &mdash; and this
    is the same interchange-of-limits question that has been stalking the course since Chapter 3. Term-by-term
    differentiation, swapping \(\int\) and \(\sum\), and \(\lim f(x_n)\) versus \(f(\lim x_n)\) are all instances of
    one question: <em>when may two limiting processes be exchanged?</em></p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Composing when the outside isn't continuous</h2>

  <p>Theorem 8.2.12 requires \(f\) continuous at \(a\) <strong>and</strong> \(g\) continuous at \(f(a)\). Here is what
    the second hypothesis is doing.</p>

  <p><strong>Click the step that fails.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Let \(f(x) = x^2\), which is continuous everywhere, and let \(g(y) = 1\) for
        \(y \neq 0\), \(g(0) = 0\).</button>
      <button class="fline" type="button">Take \(a = 0\), so \(f(a) = 0\) and \((g\circ f)(0) = g(0) = 0\).</button>
      <button class="fline" type="button">Take any sequence \(x_n \to 0\) with \(x_n \neq 0\). Then \(f(x_n) = x_n^2
        \to 0\).</button>
      <button class="fline" type="button">Since \(f\) is continuous at \(0\), \(g\circ f\) is continuous at \(0\)
        too.</button>
      <button class="fline" type="button">So \(\lim_n (g\circ f)(x_n) = (g\circ f)(0) = 0\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Fine.</strong> \(x^2\) is continuous everywhere, and \(g\) is a legitimate function &mdash;
        discontinuous at \(0\) only.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Fine.</strong> Just evaluating. \((g\circ f)(0) = g(f(0)) = g(0) = 0\).</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Fine.</strong> \(f\) is continuous, so \(f(x_n) \to f(0) = 0\). Notice that \(f(x_n) = x_n^2\) is
        never actually \(0\), so \(g(f(x_n)) = 1\) for every \(n\). Hold that thought.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>That's the failure: continuity of \(f\) alone isn't enough.</strong></p>
      <p>Theorem 8.2.12 requires <em>both</em> \(f\) continuous at \(a\) and \(g\) continuous at \(f(a)\). Here \(g\)
        is discontinuous at \(f(0) = 0\) &mdash; precisely the point that matters &mdash; so the theorem does not
        apply.</p>
      <p>And the composition really is discontinuous. From line (3), \(g(f(x_n)) = 1\) for every \(n\), so</p>
      \[ \lim_n (g \circ f)(x_n) = 1 \neq 0 = (g\circ f)(0) \]
      <p>By Theorem 8.2.1, \(g \circ f\) is not continuous at \(0\).</p>
      <p>Notice <em>where</em> \(g\) must be continuous. Not at \(a\) &mdash; \(a\) lives in the domain of \(f\), and
        \(g\) may not even be defined there. \(g\) must be continuous at \(f(a)\), the point \(f\) actually delivers.
        Getting that wrong is the standard way to misapply this theorem.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>False, and it inherits the error from line (4).</strong> In fact \((g\circ f)(x_n) = 1\) for every
        \(n\), so the limit is \(1\), not \(0\).</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on building continuity</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which base cases do all the polynomial results rest on?</p>
    <button class="mc-opt" type="button" data-key="a">That \(x^n\) is continuous, for each \(n\).</button>
    <button class="mc-opt" type="button" data-key="b">That \(f(x)=x\) and \(f(x)=c\) are continuous &mdash; everything
      else follows by sums and products.</button>
    <button class="mc-opt" type="button" data-key="c">That every function on \(\mathbb{R}\) is continuous.</button>
    <div class="mc-fb" data-key="a">\(x^n\) is a <em>consequence</em>: apply the product rule \(n-1\) times to
      \(f(x)=x\).</div>
    <div class="mc-fb" data-key="b">Correct, and the economy is the point. Two facts proved from the definition, plus
      closure under sums and products, and every polynomial comes for free. Add quotients and you have every rational
      function.</div>
    <div class="mc-fb" data-key="c">Days 24 and 22 supplied plenty of counterexamples.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">For \(g \circ f\) to be continuous at \(a\), where must \(g\) be continuous?</p>
    <button class="mc-opt" type="button" data-key="a">At \(a\).</button>
    <button class="mc-opt" type="button" data-key="b">Everywhere.</button>
    <button class="mc-opt" type="button" data-key="c">At \(f(a)\).</button>
    <div class="mc-fb" data-key="a">A natural slip, and it's the flaw activity above. \(g\) receives \(f\)'s output,
      not \(a\) &mdash; and may not even be defined at \(a\).</div>
    <div class="mc-fb" data-key="b">Far more than needed. Continuity at the single point \(f(a)\) suffices.</div>
    <div class="mc-fb" data-key="c">Correct. Follow the arrows: \(a \mapsto f(a) \mapsto g(f(a))\). Each function must
      be continuous where it actually receives its input.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">What does "continuous functions commute with limits" mean?</p>
    <button class="mc-opt" type="button" data-key="a">\(\lim_n f(x_n) = f(\lim_n x_n)\) when \(f\) is continuous at the
      limit.</button>
    <button class="mc-opt" type="button" data-key="b">\(f(g(x)) = g(f(x))\) for continuous \(f, g\).</button>
    <button class="mc-opt" type="button" data-key="c">Continuous functions preserve the order of a sequence.</button>
    <div class="mc-fb" data-key="a">Correct, and it's just Theorem 8.2.1 rewritten. It licenses moves like
      \(\lim e^{(n+1)/n} = e^{\lim (n+1)/n} = e^1\) &mdash; the reading's own example &mdash; and it is exactly why
      you must know \(f\) is continuous before making them.</div>
    <div class="mc-fb" data-key="b">Composition of functions is not commutative, continuous or not.</div>
    <div class="mc-fb" data-key="c">Order isn't preserved &mdash; \(f(x) = -x\) is continuous and reverses it.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Why is a rational function continuous only "at every point in its domain"?</p>
    <button class="mc-opt" type="button" data-key="a">Because polynomials can be discontinuous.</button>
    <button class="mc-opt" type="button" data-key="b">Because the quotient theorem needs a nonzero denominator, and
      points where it vanishes aren't in the domain anyway.</button>
    <button class="mc-opt" type="button" data-key="c">Because rational functions are only continuous on
      intervals.</button>
    <div class="mc-fb" data-key="a">Polynomials are continuous everywhere &mdash; that's the previous part of the
      problem.</div>
    <div class="mc-fb" data-key="b">Correct, and the phrasing is precise rather than cautious. Continuity at a point
      requires the function to <em>have</em> a value there. Where the denominator vanishes the function isn't defined,
      so the question doesn't arise &mdash; it isn't discontinuous there, it simply isn't there.</div>
    <div class="mc-fb" data-key="c">The domain of a rational function is usually not an interval, and that's fine.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The certificate tree bottoms out at \(f(x)=x\) and \(f(x)=c\). Which of the functions you use routinely
      <em>cannot</em> be certified this way, and what would you need to prove directly for each?</li>
    <li>"Continuous functions are the ones you may pull a limit through." Is that a consequence of continuity or a
      reasonable <em>definition</em> of it? What would be lost by taking it as the definition?</li>
    <li>The composition theorem needs \(g\) continuous at \(f(a)\), not at \(a\). Build your own example where getting
      that wrong leads to a false conclusion.</li>
    <li>Term-by-term differentiation, swapping \(\int\) and \(\sum\), and \(\lim f(x_n)\) versus \(f(\lim x_n)\) are
      all interchanges of limits. What would a single theorem covering all of them have to say?</li>
  </ol>
</div>

<script>
  (function () {
    var TREES = [
      {
        label: 'cos(√(x² + 1))',
        f: function (x) { return Math.cos(Math.sqrt(x * x + 1)); },
        rows: [
          ['\\(x\\) is continuous', 'proved from the definition (Day 22)', 'leaf'],
          ['\\(1\\) is continuous', 'constant function, definition', 'leaf'],
          ['\\(x^2\\) is continuous', 'product of \\(x\\) with itself', 'product'],
          ['\\(x^2 + 1\\) is continuous', 'sum of the two above', 'sum'],
          ['\\(\\sqrt{\\;}\\) is continuous on \\([0,\\infty)\\)', 'proved from the definition (Day 23)', 'leaf'],
          ['\\(\\sqrt{x^2+1}\\) is continuous', 'composition; \\(x^2+1 \\ge 1 &gt; 0\\), inside the domain', 'comp'],
          ['\\(\\cos\\) is continuous', 'proved from the definition', 'leaf'],
          ['\\(\\cos\\sqrt{x^2+1}\\) is continuous', 'composition of the last two', 'comp']
        ]
      },
      {
        label: 'e^(sin x) · (x³ + 2)',
        f: function (x) { return Math.exp(Math.sin(x)) * (x * x * x + 2); },
        rows: [
          ['\\(x\\) and constants are continuous', 'definition', 'leaf'],
          ['\\(x^3\\) is continuous', 'product rule, twice', 'product'],
          ['\\(x^3 + 2\\) is continuous', 'sum with a constant', 'sum'],
          ['\\(\\sin\\) is continuous', 'proved from the definition (Day 23)', 'leaf'],
          ['\\(e^{\\,\\cdot}\\) is continuous', 'proved from the definition (Day 24)', 'leaf'],
          ['\\(e^{\\sin x}\\) is continuous', 'composition', 'comp'],
          ['\\(e^{\\sin x}(x^3+2)\\) is continuous', 'product of the two branches', 'product']
        ]
      },
      {
        label: '(x² − 4) / (x² + 3)',
        f: function (x) { return (x * x - 4) / (x * x + 3); },
        rows: [
          ['\\(x\\) and constants are continuous', 'definition', 'leaf'],
          ['\\(x^2 - 4\\) is continuous', 'product then sum', 'sum'],
          ['\\(x^2 + 3\\) is continuous', 'product then sum', 'sum'],
          ['\\(x^2 + 3 \\neq 0\\) for every real \\(x\\)', 'needed before the quotient rule applies', 'check'],
          ['the quotient is continuous on all of \\(\\mathbb{R}\\)', 'quotient rule, hypothesis verified', 'quot']
        ]
      }
    ];

    var sel = document.getElementById('d26-fn'),
      tree = document.getElementById('d26-tree'),
      canvas = document.getElementById('d26-canvas'),
      out = document.getElementById('d26-out');

    TREES.forEach(function (t, i) {
      var o = document.createElement('option'); o.value = String(i); o.textContent = t.label; sel.appendChild(o);
    });

    function drawTree() {
      var t = TREES[+sel.value];
      var html = '<ol class="certlist">';
      t.rows.forEach(function (r) {
        html += '<li class="cert ' + r[2] + '"><span class="cert-claim">' + r[0] + '</span>' +
          '<span class="cert-why">' + r[1] + '</span></li>';
      });
      html += '</ol>';
      tree.innerHTML = html;
      M411.typeset(tree);

      var d = M411.hidpi(canvas, 220), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 46, padR = 20, padT = 16, padB = 28;
      var xlo = -4, xhi = 4;
      var vals = [];
      for (var i = 0; i <= 600; i++) vals.push(t.f(xlo + (xhi - xlo) * i / 600));
      var lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals);
      var pad = (hi - lo) * 0.15 || 1; lo -= pad; hi += pad;
      function X(x) { return padL + (x - xlo) / (xhi - xlo) * (W - padL - padR); }
      function Y(y) { return padT + (hi - y) / (hi - lo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = 0; g <= 4; g++) {
        var v = lo + (hi - lo) * g / 4;
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(v.toFixed(1), padL - 8, Y(v) + 4);
      }
      ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = 2.2;
      ctx.beginPath();
      vals.forEach(function (v, i2) {
        var x = X(xlo + (xhi - xlo) * i2 / 600);
        i2 ? ctx.lineTo(x, Y(v)) : ctx.moveTo(x, Y(v));
      });
      ctx.stroke();

      out.innerHTML = '<p>Every line above is justified by a theorem, and the leaves are the handful of facts proved ' +
        'directly from Definition 8.1.7. No new \\(\\varepsilon\\)&ndash;\\(\\delta\\) argument was needed anywhere ' +
        'in the middle.</p>';
      M411.typeset(out);
    }
    sel.addEventListener('change', drawTree);

    /* ---------------- commuting ---------------- */
    var EX = [
      {
        label: 'lim  cos(n / (2n+3))',
        x: function (n) { return n / (2 * n + 3); }, xlim: 0.5,
        g: Math.cos, glabel: '\\cos', cont: true
      },
      {
        label: 'lim  √((3n²+1)/(n²+n))',
        x: function (n) { return (3 * n * n + 1) / (n * n + n); }, xlim: 3,
        g: Math.sqrt, glabel: '\\sqrt{\\;\\cdot\\;}', cont: true
      },
      {
        label: 'lim  e^(1/n)',
        x: function (n) { return 1 / n; }, xlim: 0,
        g: Math.exp, glabel: 'e^{\\,\\cdot}', cont: true
      },
      {
        label: 'lim  g(1/n),  g discontinuous at 0',
        x: function (n) { return 1 / n; }, xlim: 0,
        g: function (y) { return Math.abs(y) < 1e-12 ? 0 : 1; }, glabel: 'g', cont: false
      }
    ];

    var eSel = document.getElementById('d26-ex'),
      cnIn = document.getElementById('d26-n'),
      cCan = document.getElementById('d26-commute'),
      cOut = document.getElementById('d26-com-out');

    EX.forEach(function (e, i) {
      var o = document.createElement('option'); o.value = String(i); o.textContent = e.label; eSel.appendChild(o);
    });

    function drawCommute() {
      var ex = EX[+eSel.value], N = +cnIn.value;
      var vals = [];
      for (var n = 1; n <= N; n++) vals.push(ex.g(ex.x(n)));

      var d = M411.hidpi(cCan, 250), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 60, padR = 20, padT = 20, padB = 34;

      var target = ex.g(ex.xlim);
      var lo = Math.min.apply(null, vals.concat([target])), hi = Math.max.apply(null, vals.concat([target]));
      var span = Math.max(hi - lo, 0.3), mid = (hi + lo) / 2;
      lo = mid - span * 0.7; hi = mid + span * 0.7;

      function X(n) { return padL + (n - 1) / Math.max(N - 1, 1) * (W - padL - padR); }
      function Y(v) { return padT + (hi - v) / (hi - lo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = 0; g <= 4; g++) {
        var v = lo + (hi - lo) * g / 4;
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(v.toFixed(3), padL - 8, Y(v) + 4);
      }

      ctx.setLineDash([6, 4]); ctx.strokeStyle = M411.colors.scaffold; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(padL, Y(target)); ctx.lineTo(W - padR, Y(target)); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = M411.colors.scaffold; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('g(lim xₙ) = ' + target.toFixed(5), padL + 4, Y(target) - 6);

      vals.forEach(function (v, i) {
        ctx.fillStyle = M411.colors.check;
        ctx.beginPath(); ctx.arc(X(i + 1), Y(v), 3.4, 0, 2 * Math.PI); ctx.fill();
      });

      var last = vals[N - 1];
      cOut.innerHTML =
        '<p>\\(x_{' + N + '} = ' + ex.x(N).toFixed(6) + ' \\to ' + ex.xlim + '\\), and \\(' + ex.glabel +
        '(x_{' + N + '}) = ' + last.toFixed(6) + '\\).</p>' +
        (ex.cont
          ? '<p><strong style="color:var(--a411-scaffold)">The swap is legal.</strong> \\(\\lim ' + ex.glabel +
          '(x_n) = ' + ex.glabel + '(\\lim x_n) = ' + target.toFixed(6) + '\\) &mdash; you may evaluate the ' +
          'inner limit first and apply the function to it, which is far easier than analysing the composite.</p>'
          : '<p><strong style="color:#d9534f">The swap fails.</strong> Every \\(x_n = \\frac1n\\) is nonzero, so ' +
          '\\(g(x_n) = 1\\) for all \\(n\\) and \\(\\lim g(x_n) = 1\\). But \\(g(\\lim x_n) = g(0) = 0\\). ' +
          'Two different answers from the two orders &mdash; because \\(g\\) is not continuous at the limiting ' +
          'value.</p>');
      M411.typeset(cOut);
    }
    eSel.addEventListener('change', drawCommute);
    cnIn.addEventListener('input', drawCommute);

    M411.onResize(function () { drawTree(); drawCommute(); });
    drawTree();
    drawCommute();
  })();
</script>
