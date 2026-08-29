---
layout: day
title: "MATH 411 Day 30: Applications of the NIP"
day: 30
chapter_number: 9
chapter: "The IVT and the EVT"
day_title: "Applications of the NIP"
blurb: "Bolzano set out in 1817 to prove that a curve crossing from below the axis to above it must cross the axis. It took two centuries of machinery to say why."
reading: "Section 9.1 (Euler's constant) and Section 9.2, the Intermediate Value Theorem"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The IVT is false over \(\mathbb{Q}\)</h2>

  <p>Your reading opens the chapter by asking what goes wrong if we only have the rationals. Take \(f(x) = x^2\), which
    is continuous, with \(f(1) = 1\) and \(f(2) = 4\). The value \(2\) lies between them, so the IVT promises some
    \(c\) with \(f(c) = 2\).</p>

  <p>Over \(\mathbb{R}\) that's \(\sqrt2\). Over \(\mathbb{Q}\) there is no such \(c\) at all &mdash; and yet
    <em>every hypothesis of the IVT is satisfied</em>. The function is continuous in the exact
    \(\varepsilon\)&ndash;\(\delta\) sense of Day 22, which Day 27 showed makes perfect sense over \(\mathbb{Q}\).</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d30-fn">Function and target value</label>
      <select id="d30-fn"></select>
    </div>
    <div class="ctl">
      <label for="d30-q">Rationals with denominator up to \(q\)</label>
      <input type="range" id="d30-q" min="2" max="400" step="1" value="20">
    </div>
  </div>

  <canvas class="plot" id="d30-q-canvas"></canvas>
  <div class="readout" id="d30-q-out"></div>

  <p>Turn \(q\) up. The rational points crowd the curve arbitrarily closely, and the crossing is <em>always</em>
    missed. The function jumps from below \(v\) to above \(v\) without ever equalling it &mdash; not because of any
    defect in \(f\), but because the point where it would have happened is not in the number system.</p>

  <p>So the IVT is not a fact about continuous functions. It is a fact about continuous functions <strong>on a
    complete ordered field</strong>. Completeness is a hypothesis, and here you can watch it fail.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Bisection, hunting the crossing</h2>

  <p>The proof of the IVT is the bisection template from Day 29 with one substitution. Instead of tracking \(x_n^2 \le
    a \le y_n^2\), it tracks</p>

  \[ f(x_n) \le v \le f(y_n) \]

  <p>Halve the interval, keep the half where the crossing must still lie, repeat. The NIP hands you \(c\); property 5
    plus continuity forces \(f(c) = v\).</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d30-bf">Function</label>
      <select id="d30-bf"></select>
    </div>
    <div class="ctl">
      <label for="d30-steps">Bisection steps</label>
      <input type="range" id="d30-steps" min="0" max="40" step="1" value="4">
    </div>
  </div>

  <canvas class="plot" id="d30-bisect"></canvas>
  <div class="readout" id="d30-bisect-out"></div>

  <p>Watch the bracket close. At every stage the crossing is trapped between \(x_n\) and \(y_n\), and the trap tightens
    by half each step.</p>

  <p>The bracketing alone does not finish the argument, though. It produces a \(c\), and \(x_n \to c \leftarrow y_n\)
    by Theorem 9.1.4 &mdash; but why should \(f(c)\) equal \(v\)? That is where <em>continuity</em> enters, via the
    sequential characterisation from Day 25: \(f(x_n) \to f(c)\) and \(f(y_n) \to f(c)\), while \(f(x_n) \le v \le
    f(y_n)\) for every \(n\). The details are your problem for today.</p>

  <p>Which makes the shape of the theorem visible: <strong>the NIP supplies the point, and continuity supplies the
    value.</strong> Remove either and the theorem fails &mdash; the first activity removed completeness, and the next
    one removes continuity.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>What the IVT does not say</h2>

  <p><strong>Click the claim that is false.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">If \(f\) is continuous on \([a,b]\) and \(v\) lies between \(f(a)\) and
        \(f(b)\), then \(f(c) = v\) for some \(c \in [a,b]\).</button>
      <button class="fline" type="button">The IVT gives no information about how many such \(c\) there are, or where
        they lie.</button>
      <button class="fline" type="button">Conversely, if \(f\) takes every value between \(f(a)\) and \(f(b)\), then
        \(f\) is continuous on \([a,b]\).</button>
      <button class="fline" type="button">The IVT can fail for a function with a jump: \(f(x) = 0\) for \(x &lt;
        \frac12\), \(f(x) = 1\) for \(x \ge \frac12\) on \([0,1]\) never takes the value \(\frac12\).</button>
      <button class="fline" type="button">The IVT proves an odd-degree polynomial has a real root.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>The theorem itself.</strong> Theorem 9.2.1, correctly stated.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>True, and it's an existence theorem through and through.</strong> \(\sin x\) on \([0, 100\pi]\) hits
        \(0\) at a hundred different points and the IVT names none of them. Bisection <em>locates</em> one, but that is
        an algorithm, not the theorem.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>That's the false one &mdash; the converse fails.</strong></p>
      <p>Taking every intermediate value is called the <em>intermediate value property</em>, and continuity implies it.
        The reverse does not hold.</p>
      <p>The counterexample is one you already know. Take \(g(x) = \sin\frac1x\) for \(x \ne 0\) and \(g(0) = 0\), on
        \([-1,1]\). Day 24 showed it is <strong>not continuous</strong> at \(0\). But it takes every value in
        \([-1,1]\) on <em>every</em> interval around \(0\), however small &mdash; so it certainly takes every
        intermediate value. The intermediate value property holds and continuity fails.</p>
      <p>There is a deeper twist. Darboux proved that <em>every</em> derivative has the intermediate value property,
        even when the derivative is not continuous. So "takes all intermediate values" is genuinely weaker than
        continuity, and is a property in its own right.</p>
      <p>This is worth generalising. A theorem's converse is a separate claim needing a separate proof or a separate
        counterexample &mdash; exactly Halmos's "Is the converse true?" from Day 23, and exactly the error that sank
        the Fermat primality test on Day 2.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>True.</strong> The step function jumps from \(0\) straight to \(1\), skipping everything in between,
        so no \(c\) has \(f(c) = \frac12\). Continuity is not optional.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>True</strong> &mdash; and it's your problem for today, so nothing more here. Notice only that it is a
        genuinely striking application: a statement about <em>algebra</em>, proved by an argument about
        completeness and continuity, with no factoring anywhere.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on the IVT</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which two ingredients does the proof of the IVT require?</p>
    <button class="mc-opt" type="button" data-key="a">Differentiability and the MVT.</button>
    <button class="mc-opt" type="button" data-key="b">The NIP (to produce \(c\)) and continuity (to force \(f(c) =
      v\)).</button>
    <button class="mc-opt" type="button" data-key="c">Only continuity.</button>
    <div class="mc-fb" data-key="a">No derivatives appear anywhere; the IVT applies to functions that are nowhere
      differentiable.</div>
    <div class="mc-fb" data-key="b">Correct, and the division of labour is clean. Bisection plus the NIP manufacture a
      point; continuity is what makes that point have the right value. Drop the first and \(\mathbb{Q}\) is a
      counterexample; drop the second and a step function is.</div>
    <div class="mc-fb" data-key="c">Continuity alone is not enough &mdash; the first activity is continuous over
      \(\mathbb{Q}\) and the IVT still fails.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">In the bisection, what plays the role of "property 5"?</p>
    <button class="mc-opt" type="button" data-key="a">\(y_n - x_n \to 0\).</button>
    <button class="mc-opt" type="button" data-key="b">\(x_n \le y_n\).</button>
    <button class="mc-opt" type="button" data-key="c">\(f(x_n) \le v \le f(y_n)\) for every \(n\).</button>
    <div class="mc-fb" data-key="a">That's property 4, and it comes free from bisecting.</div>
    <div class="mc-fb" data-key="b">Property 3, also free.</div>
    <div class="mc-fb" data-key="c">Correct. Properties 1&ndash;4 are automatic for any bisection; property 5 is the
      one you engineer, by choosing which half to keep. For square roots it was \(x_n^2 \le a \le y_n^2\); here it is
      the bracketing of \(v\).</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Bolzano's 1817 paper had a very long title. What was it about?</p>
    <button class="mc-opt" type="button" data-key="a">A purely analytic proof of the Intermediate Value Theorem
      &mdash; which is why he needed a definition of continuity in the first place.</button>
    <button class="mc-opt" type="button" data-key="b">The convergence of Fourier series.</button>
    <button class="mc-opt" type="button" data-key="c">The irrationality of \(\pi\).</button>
    <div class="mc-fb" data-key="a">Correct &mdash; Day 22's history. "Purely Analytic Proof of the Theorem that
      Between Any Two Values that Yield Results of Opposite Sign There Will be at Least One Real Root." The word
      <em>analytic</em> means "without appeal to geometry," and defining continuity was a means to that end, not the
      goal.</div>
    <div class="mc-fb" data-key="b">Fourier's work was contemporary but not Bolzano's subject.</div>
    <div class="mc-fb" data-key="c">Proved by Lambert in 1761, and unrelated.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Why does your reading make a fuss about whether Euler's constant \(\gamma\) exists?</p>
    <button class="mc-opt" type="button" data-key="a">Because the harmonic series diverges, so the limit can't
      exist.</button>
    <button class="mc-opt" type="button" data-key="b">Because it's a limit of a difference of two divergent
      quantities, and such limits need not exist &mdash; so existence has to be proved, not assumed.</button>
    <button class="mc-opt" type="button" data-key="c">Because \(\gamma\) is irrational.</button>
    <div class="mc-fb" data-key="a">Both the harmonic sum and \(\ln(n+1)\) diverge; their <em>difference</em> is
      another matter entirely.</div>
    <div class="mc-fb" data-key="b">Correct, and it's the Day 21 lesson again: writing \(\lim\) does not make a limit
      exist. Two quantities racing to infinity may or may not stay a bounded distance apart, and the NIP is what
      settles it here.</div>
    <div class="mc-fb" data-key="c">Nobody knows whether \(\gamma\) is irrational &mdash; your reading notes it was
      still open as of 2013, and it remains open. Which makes the existence proof more impressive, not less: we can
      prove the number exists while knowing almost nothing else about it.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The IVT fails over \(\mathbb{Q}\) while every hypothesis about \(f\) holds. Where exactly, line by line, would
      the bisection proof break if the number system were \(\mathbb{Q}\)?</li>
    <li>\(\sin\frac1x\) has the intermediate value property without being continuous. Can you build a function with the
      intermediate value property on \([0,1]\) that is discontinuous at <em>every</em> point?</li>
    <li>The IVT gives no algorithm; bisection gives one. Are there existence theorems in this course with <em>no</em>
      accompanying method for finding the object?</li>
    <li>We can prove \(\gamma\) exists without knowing whether it is rational. What does that suggest about how much a
      proof of existence actually tells you?</li>
  </ol>
</div>

<script>
  (function () {
    /* ---------------- IVT over Q ---------------- */
    var QFNS = [
      {
        label: 'f(x) = x²,  v = 2  on [1,2]',
        f: function (x) { return x * x; }, v: 2, a: 1, b: 2,
        note: 'The crossing would be at \\(\\sqrt2\\), which is not rational (Day 3). Over \\(\\mathbb{Q}\\) the ' +
          'function steps from values below \\(2\\) to values above \\(2\\) with nothing in between.'
      },
      {
        label: 'f(x) = x³,  v = 2  on [1,2]',
        f: function (x) { return x * x * x; }, v: 2, a: 1, b: 2,
        note: 'The crossing is \\(\\sqrt[3]{2}\\), irrational as well. Adding square roots to \\(\\mathbb{Q}\\) ' +
          'would not save us &mdash; the reading anticipates that objection.'
      },
      {
        label: 'f(x) = x − cos x,  v = 0  on [0, π/2]',
        f: function (x) { return x - Math.cos(x); }, v: 0, a: 0, b: Math.PI / 2,
        note: 'Here the crossing is not any kind of root of a rational number. Your reading asks: "What would this ' +
          'mysterious \\(c\\) be?" It has no closed form at all, which is exactly why an axiom about the number ' +
          'system is needed rather than a list of extra numbers.'
      }
    ];

    var qSel = document.getElementById('d30-fn'),
      qIn = document.getElementById('d30-q'),
      qCan = document.getElementById('d30-q-canvas'),
      qOut = document.getElementById('d30-q-out');

    QFNS.forEach(function (f, i) {
      var o = document.createElement('option'); o.value = String(i); o.textContent = f.label; qSel.appendChild(o);
    });

    function drawQ() {
      var fn = QFNS[+qSel.value], q = +qIn.value;
      var d = M411.hidpi(qCan, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 52, padR = 20, padT = 20, padB = 32;
      var xlo = fn.a - 0.05 * (fn.b - fn.a), xhi = fn.b + 0.05 * (fn.b - fn.a);
      var ylo = Math.min(fn.f(fn.a), fn.f(fn.b)), yhi = Math.max(fn.f(fn.a), fn.f(fn.b));
      var pad = (yhi - ylo) * 0.15; ylo -= pad; yhi += pad;
      function X(x) { return padL + (x - xlo) / (xhi - xlo) * (W - padL - padR); }
      function Y(y) { return padT + (yhi - y) / (yhi - ylo) * (H - padT - padB); }

      // the target level
      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2; ctx.setLineDash([6, 4]);
      ctx.beginPath(); ctx.moveTo(padL, Y(fn.v)); ctx.lineTo(W - padR, Y(fn.v)); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = M411.colors.check; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('v = ' + fn.v, padL + 4, Y(fn.v) - 6);

      // rational points only
      var below = 0, above = 0, exact = 0, closestGap = Infinity, closestX = null;
      for (var qq = 1; qq <= q; qq++) {
        var from = Math.ceil(fn.a * qq), to = Math.floor(fn.b * qq);
        for (var p = from; p <= to; p++) {
          var x = p / qq;
          if (x < fn.a || x > fn.b) continue;
          var y = fn.f(x);
          if (Math.abs(y - fn.v) < 1e-15) exact++;
          else if (y < fn.v) below++; else above++;
          if (Math.abs(y - fn.v) < closestGap) { closestGap = Math.abs(y - fn.v); closestX = x; }
          ctx.fillStyle = y < fn.v ? 'rgba(0,156,222,0.75)' : 'rgba(139,92,246,0.75)';
          ctx.beginPath(); ctx.arc(X(x), Y(y), 1.9, 0, 2 * Math.PI); ctx.fill();
        }
      }

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = 'rgb(0,120,175)'; ctx.fillText('rational x with f(x) < v', padL + 6, padT + 14);
      ctx.fillStyle = 'rgb(120,80,210)'; ctx.fillText('rational x with f(x) > v', padL + 6, padT + 32);

      qOut.innerHTML =
        '<p>Using only rationals with denominator \\(\\le ' + q + '\\): <strong>' + below + '</strong> points below ' +
        '\\(v\\), <strong>' + above + '</strong> above, and <strong>' + exact + '</strong> exactly equal to it.</p>' +
        '<p>Closest approach: \\(x = ' + closestX.toFixed(8) + '\\) with \\(f(x) - v = ' +
        (fn.f(closestX) - fn.v).toExponential(3) + '\\).</p>' +
        '<p>' + fn.note + '</p>' +
        '<p>The count of exact hits stays at <strong>0</strong> however large you make \\(q\\) &mdash; and the ' +
        'closest approach shrinks toward \\(0\\) without ever reaching it. That is precisely a hole.</p>';
      M411.typeset(qOut);
    }
    qSel.addEventListener('change', drawQ);
    qIn.addEventListener('input', drawQ);

    /* ---------------- bisection for the IVT ---------------- */
    var BFNS = [
      { label: 'x − cos x = 0  on [0, π/2]', f: function (x) { return x - Math.cos(x); }, v: 0, a: 0, b: Math.PI / 2 },
      { label: 'x⁵ + x − 1 = 0  on [0, 1]', f: function (x) { return Math.pow(x, 5) + x - 1; }, v: 0, a: 0, b: 1 },
      { label: 'x³ − 4x + 1 = 0  on [0, 2]', f: function (x) { return x * x * x - 4 * x + 1; }, v: 0, a: 0, b: 2 },
      { label: 'e^x = 3x  on [0, 1]', f: function (x) { return Math.exp(x) - 3 * x; }, v: 0, a: 0, b: 1 }
    ];

    var bSel = document.getElementById('d30-bf'),
      sIn = document.getElementById('d30-steps'),
      bCan = document.getElementById('d30-bisect'),
      bOut = document.getElementById('d30-bisect-out');

    BFNS.forEach(function (f, i) {
      var o = document.createElement('option'); o.value = String(i); o.textContent = f.label; bSel.appendChild(o);
    });

    function drawB() {
      var fn = BFNS[+bSel.value], K = +sIn.value;
      var x = fn.a, y = fn.b;
      var incr = fn.f(fn.a) <= fn.v;   // orientation: is f increasing through v?
      for (var k = 0; k < K; k++) {
        var m = (x + y) / 2, fm = fn.f(m);
        if ((fm <= fn.v) === incr) x = m; else y = m;
      }

      var d = M411.hidpi(bCan, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 52, padR = 20, padT = 20, padB = 32;
      var xlo = fn.a, xhi = fn.b;
      var vals = [];
      for (var i = 0; i <= 400; i++) vals.push(fn.f(xlo + (xhi - xlo) * i / 400));
      var ylo = Math.min.apply(null, vals), yhi = Math.max.apply(null, vals);
      var pad = (yhi - ylo) * 0.15; ylo -= pad; yhi += pad;
      function X(t) { return padL + (t - xlo) / (xhi - xlo) * (W - padL - padR); }
      function Y(t) { return padT + (yhi - t) / (yhi - ylo) * (H - padT - padB); }

      ctx.fillStyle = 'rgba(243,110,36,0.16)';
      ctx.fillRect(X(x), padT, Math.max(X(y) - X(x), 1.5), H - padT - padB);

      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 1.8; ctx.setLineDash([6, 4]);
      ctx.beginPath(); ctx.moveTo(padL, Y(fn.v)); ctx.lineTo(W - padR, Y(fn.v)); ctx.stroke();
      ctx.setLineDash([]);

      ctx.strokeStyle = '#333'; ctx.lineWidth = 2.2;
      ctx.beginPath();
      for (var j = 0; j <= 700; j++) {
        var xx = xlo + (xhi - xlo) * j / 700, yy = fn.f(xx);
        j ? ctx.lineTo(X(xx), Y(yy)) : ctx.moveTo(X(xx), Y(yy));
      }
      ctx.stroke();

      [[x, M411.colors.explore, 'xₙ'], [y, M411.colors.flaw, 'yₙ']].forEach(function (pr) {
        ctx.strokeStyle = pr[1]; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(X(pr[0]), padT); ctx.lineTo(X(pr[0]), H - padB); ctx.stroke();
        ctx.fillStyle = pr[1]; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(pr[2], X(pr[0]), H - padB + 14);
        ctx.beginPath(); ctx.arc(X(pr[0]), Y(fn.f(pr[0])), 4.5, 0, 2 * Math.PI); ctx.fill();
      });

      bOut.innerHTML =
        '<p>After <strong>' + K + '</strong> step' + (K === 1 ? '' : 's') + ': \\(x_n = ' + x.toFixed(12) +
        '\\), \\(y_n = ' + y.toFixed(12) + '\\), bracket width \\(' + (y - x).toExponential(3) + '\\).</p>' +
        '<p>\\(f(x_n) = ' + fn.f(x).toExponential(4) + '\\) and \\(f(y_n) = ' + fn.f(y).toExponential(4) +
        '\\) &mdash; on opposite sides of \\(v = ' + fn.v + '\\), as property 5 requires at every stage.</p>' +
        '<p>The bracket halves each step, so after ' + K + ' steps it is \\((b-a)/2^{' + K + '}\\). The NIP says ' +
        'the shrinking brackets have exactly one point in common, and continuity says that point is where ' +
        '\\(f = v\\).</p>';
      M411.typeset(bOut);
    }
    bSel.addEventListener('change', drawB);
    sIn.addEventListener('input', drawB);

    M411.onResize(function () { drawQ(); drawB(); });
    drawQ();
    drawB();
  })();
</script>
