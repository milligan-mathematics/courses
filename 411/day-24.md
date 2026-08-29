---
layout: day
title: "MATH 411 Day 24: Continuity, Harder Cases"
day: 24
chapter_number: 8
chapter: "Continuity"
day_title: "Continuity, Harder Cases"
blurb: "A function that oscillates infinitely often near the origin, and one that is continuous at exactly one point out of uncountably many. No picture will settle either. The definition will."
reading: "Section 8.1, \\(e^x\\), the topologist's sine function, and Dirichlet's function"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Two functions that look identical and aren't</h2>

  <p>Compare \(\sin\left(\frac1x\right)\) with \(x\sin\left(\frac1x\right)\), both defined to be \(0\) at the origin.
    Near \(x = 0\) each oscillates infinitely often, faster and faster. One is continuous at \(0\) and one is not.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d24-which">Function</label>
      <select id="d24-which"></select>
    </div>
    <div class="ctl">
      <label for="d24-zoom">Zoom into the origin</label>
      <input type="range" id="d24-zoom" min="0" max="34" step="1" value="0">
    </div>
  </div>

  <canvas class="plot" id="d24-canvas"></canvas>
  <div class="readout" id="d24-out"></div>

  <p>Zoom in on \(\sin\frac1x\) and nothing improves. However narrow a strip you take around \(0\), the function still
    runs through every value from \(-1\) to \(1\) inside it &mdash; infinitely many times. No band of half-height, say,
    \(\frac12\) can ever contain it, so no \(\delta\) works and continuity fails.</p>

  <p>Now zoom in on \(x\sin\frac1x\). The oscillation is just as violent &mdash; it still crosses zero infinitely often
    in every neighbourhood of the origin &mdash; but the envelope \(\pm|x|\) is squeezing it flat. The wiggles never
    stop; they simply run out of room.</p>

  <p>That is the difference the factor of \(x\) makes, and it is invisible to intuition about "drawing without lifting
    the pen." Your reading is blunt that the picture cannot be trusted here: "since \(\sin\left(\frac1x\right)\)
    oscillates infinitely often as \(x\) nears zero this graph must be viewed with a certain amount of suspicion."</p>

  <p>The definition has no such difficulty. It never asks what the graph looks like &mdash; only how big \(|f(x) -
    f(0)|\) can be when \(|x|\) is small.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Dirichlet's function, drawn as honestly as possible</h2>

  <p>Now the one that really cannot be drawn:</p>

  \[ D(x) = \begin{cases} x & x \text{ rational} \\ 0 & x \text{ irrational} \end{cases} \]

  <p>To the eye its graph looks like the two lines \(y = x\) and \(y = 0\). It is neither &mdash; each line is riddled
    with holes exactly where the other has points, and every hole has width zero.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d24-q">Show rationals with denominator up to \(q\)</label>
      <input type="range" id="d24-q" min="2" max="60" step="1" value="8">
    </div>
    <div class="ctl">
      <label for="d24-win">Window around a chosen point</label>
      <input type="range" id="d24-dw" min="0" max="24" step="1" value="0">
    </div>
  </div>

  <canvas class="plot" id="d24-dirichlet"></canvas>
  <div class="readout" id="d24-dir-out"></div>

  <p>Raise \(q\) and the upper line fills in; the picture converges to something indistinguishable from two solid
    lines. But no finite \(q\) ever shows the real thing, because between any two rationals there is another
    &mdash; and an irrational too, by Theorem 2.0.11 from Day 4.</p>

  <p>That density is what governs continuity here. Near any point \(a\) there are rationals, where \(D\) takes values
    close to \(a\), and irrationals, where \(D\) is \(0\). So the values of \(D\) in <em>every</em> neighbourhood of
    \(a\) include things near \(a\) and things equal to \(0\), which are far apart &mdash; unless \(a\) happens to be
    \(0\) itself, where the two possibilities coincide.</p>

  <p>Zoom in on the origin with the second slider and watch the two lines close together like a pair of scissors. That
    is the whole reason \(0\) is special, and it is worth seeing before you prove it.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>"You can't draw it, so it can't be continuous"</h2>

  <p><strong>Click the step that doesn't follow.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Between any two real numbers there are both rationals and irrationals, so
        every interval contains points where \(D(x) = x\) and points where \(D(x) = 0\).</button>
      <button class="fline" type="button">So in any interval, the graph of \(D\) has points on both the line \(y=x\)
        and the line \(y=0\).</button>
      <button class="fline" type="button">Therefore the graph of \(D\) cannot be drawn without lifting the pen
        &mdash; in fact it cannot be drawn at all.</button>
      <button class="fline" type="button">A function whose graph cannot be drawn without lifting the pen is
        discontinuous, so \(D\) is discontinuous everywhere.</button>
      <button class="fline" type="button">In particular \(D\) is discontinuous at \(0\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>True</strong> &mdash; density of both sets in \(\mathbb{R}\), which is Theorem 2.0.11 from Day 4 doing
        real work here.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>True.</strong> Both lines are represented in every interval, however short.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>True, and rather worse than stated.</strong> Any drawing you make of \(D\) is wrong at
        uncountably many points, because a pen stroke has width and every neighbourhood contains points of both
        kinds. This function has no faithful picture at any resolution.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>That's the false step, and it's the reason this chapter exists.</strong></p>
      <p>"Drawable without lifting the pen" is not a definition of continuity. It is a picture that happens to
        correspond to continuity for the functions you met before this course. Definition 8.1.7 says nothing about pens
        or graphs &mdash; it is a statement about the <em>values</em> \(|f(x) - f(a)|\).</p>
      <p>And here the two come apart completely. At \(a = 0\) we have \(D(0) = 0\), and for any \(x\),</p>
      \[ |D(x) - D(0)| = |D(x)| \le |x| \]
      <p>because \(D(x)\) is either \(x\) or \(0\), and both have absolute value at most \(|x|\). So making \(|x|\)
        small forces \(|D(x) - D(0)|\) small &mdash; regardless of which kind of number \(x\) turns out to be. \(D\) is
        continuous at \(0\).</p>
      <p>Away from \(0\) it fails, and your reading tells you the outcome: \(D\) is continuous at \(0\) "and at no other
        point." A function continuous at exactly one point out of uncountably many &mdash; and the proof of that half
        is yours.</p>
      <p>Notice that the argument above needed no picture, no cases beyond a one-line inequality, and no intuition at
        all. That is what the definition bought.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>False.</strong> \(D\) is continuous at \(0\) &mdash; the one point where it is. Click line (4) for
        why, and note how little work it takes once you stop reasoning about the graph.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on pathological functions</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Why is \(x\sin\frac1x\) continuous at \(0\) when \(\sin\frac1x\) is not?</p>
    <button class="mc-opt" type="button" data-key="a">Because \(x\sin\frac1x\) oscillates less.</button>
    <button class="mc-opt" type="button" data-key="b">Because the factor \(x\) bounds it: \(\left|x\sin\frac1x\right|
      \le |x|\), which is small when \(x\) is.</button>
    <button class="mc-opt" type="button" data-key="c">Because \(x\sin\frac1x\) is differentiable at \(0\).</button>
    <div class="mc-fb" data-key="a">It oscillates exactly as often &mdash; infinitely many times in every
      neighbourhood of \(0\). Only the amplitude differs.</div>
    <div class="mc-fb" data-key="b">Correct, and the whole proof is that one inequality. Since \(|\sin(\cdot)| \le
      1\), the envelope \(\pm|x|\) squeezes the function to \(0\). The oscillation is irrelevant &mdash; the definition
      only cares how big the values can get.</div>
    <div class="mc-fb" data-key="c">It isn't differentiable at \(0\): the difference quotient is \(\sin\frac1x\), which
      has no limit. Continuous without being differentiable.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Where is Dirichlet's \(D(x)\) continuous?</p>
    <button class="mc-opt" type="button" data-key="a">Nowhere.</button>
    <button class="mc-opt" type="button" data-key="b">At every rational.</button>
    <button class="mc-opt" type="button" data-key="c">At \(0\), and nowhere else.</button>
    <div class="mc-fb" data-key="a">The natural guess, and wrong. At \(0\) both branches give values within \(|x|\) of
      \(0\), so the definition is satisfied.</div>
    <div class="mc-fb" data-key="b">At a nonzero rational \(a\), the nearby irrationals have \(D = 0\) while \(D(a) =
      a \ne 0\) &mdash; and irrationals are dense, so they appear in every neighbourhood.</div>
    <div class="mc-fb" data-key="c">Correct: continuous at exactly one point. This is why intuitions about
      "mostly continuous" or "continuous on an interval" are no guide &mdash; continuity is defined point by point, and
      the set where it holds can be as strange as a single point.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">The reading suggests rewriting \(e^x - e^a\) as \(e^{a+(x-a)} - e^a\). What is that move for?</p>
    <button class="mc-opt" type="button" data-key="a">To factor out \(e^a\) and reduce continuity at \(a\) to
      continuity at \(0\).</button>
    <button class="mc-opt" type="button" data-key="b">To simplify the exponent.</button>
    <button class="mc-opt" type="button" data-key="c">To apply the chain rule.</button>
    <div class="mc-fb" data-key="a">Correct. \(e^{a+(x-a)} - e^a = e^a\left(e^{x-a} - 1\right)\), so the general case
      becomes a constant times the behaviour of \(e^h - 1\) near \(h = 0\) &mdash; which part (a) already handled.
      Same shape as Day 18's reduction of \(\lim s_n = L\) to \(\lim(s_n - L) = 0\): solve one case, get the rest by
      algebra.</div>
    <div class="mc-fb" data-key="b">It looks more complicated, not less &mdash; until you factor.</div>
    <div class="mc-fb" data-key="c">No derivatives are involved; this is about continuity.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">What do these examples show about graphs as evidence?</p>
    <button class="mc-opt" type="button" data-key="a">Graphs are always misleading and should not be drawn.</button>
    <button class="mc-opt" type="button" data-key="b">Graphs guide intuition but cannot settle questions &mdash; some
      functions have no faithful picture at any resolution.</button>
    <button class="mc-opt" type="button" data-key="c">Graphs are fine as long as you zoom in far enough.</button>
    <div class="mc-fb" data-key="a">Too strong. The pictures on this page are genuinely useful &mdash; the envelope
      around \(x\sin\frac1x\) shows you the proof. They just aren't proofs themselves.</div>
    <div class="mc-fb" data-key="b">Correct, and it echoes Day 3, where \(\mathbb{R}\) and \(\mathbb{Q}\) had identical
      pictures. Draw freely; conclude from the definition.</div>
    <div class="mc-fb" data-key="c">Zooming doesn't rescue \(\sin\frac1x\), which looks the same at every scale, and it
      does nothing at all for \(D(x)\).</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Modify Dirichlet's function to \(D_2(x) = x^2\) for rational \(x\) and \(0\) otherwise. Where is it continuous?
      What about \(D_3(x) = x\) for rational and \(x^2\) otherwise?</li>
    <li>\(x\sin\frac1x\) is continuous at \(0\) but not differentiable there. What would you have to multiply
      \(\sin\frac1x\) by to make it differentiable at \(0\)?</li>
    <li>The set where a function is continuous can be a single point. Can it be <em>any</em> set at all? Try to find a
      function continuous exactly on \(\{0, 1\}\).</li>
    <li>Every example today was designed to defeat a picture. Do you think mathematicians found these functions by
      exploring, or built them deliberately to break a definition? Does it matter which?</li>
  </ol>
</div>

<script>
  (function () {
    /* ---------------- sin(1/x) vs x sin(1/x) ---------------- */
    var WHICH = [
      {
        label: 'sin(1/x)   — not continuous at 0',
        f: function (x) { return x === 0 ? 0 : Math.sin(1 / x); },
        env: null, cont: false
      },
      {
        label: 'x·sin(1/x)   — continuous at 0',
        f: function (x) { return x === 0 ? 0 : x * Math.sin(1 / x); },
        env: function (x) { return Math.abs(x); }, cont: true
      }
    ];

    var wSel = document.getElementById('d24-which'),
      zIn = document.getElementById('d24-zoom'),
      canvas = document.getElementById('d24-canvas'),
      out = document.getElementById('d24-out');

    WHICH.forEach(function (w, i) {
      var o = document.createElement('option');
      o.value = String(i); o.textContent = w.label;
      wSel.appendChild(o);
    });

    function draw() {
      var w = WHICH[+wSel.value], z = Math.pow(10, +zIn.value / 12);
      var half = 0.6 / z;

      var d = M411.hidpi(canvas, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 56, padR = 20, padT = 18, padB = 32;

      var top = w.env ? half * 1.35 : 1.35;
      function X(x) { return padL + (x + half) / (2 * half) * (W - padL - padR); }
      function Y(y) { return padT + (top - y) / (2 * top) * (H - padT - padB); }

      ctx.strokeStyle = '#999'; ctx.lineWidth = 1.3;
      ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(X(0), padT); ctx.lineTo(X(0), H - padB); ctx.stroke();

      // the epsilon band that decides the question
      var eps = w.env ? half * 0.55 : 0.5;
      ctx.fillStyle = 'rgba(0,133,82,0.13)';
      ctx.fillRect(padL, Y(eps), W - padL - padR, Math.max(Y(-eps) - Y(eps), 1));

      if (w.env) {
        ctx.strokeStyle = 'rgba(0,156,222,0.75)'; ctx.lineWidth = 1.6; ctx.setLineDash([5, 4]);
        [1, -1].forEach(function (s) {
          ctx.beginPath();
          ctx.moveTo(X(-half), Y(s * half)); ctx.lineTo(X(0), Y(0)); ctx.lineTo(X(half), Y(s * half));
          ctx.stroke();
        });
        ctx.setLineDash([]);
      }

      // very dense sampling - the function oscillates without bound near 0
      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 1.1;
      ctx.beginPath();
      var M = 24000, started = false;
      for (var i = 0; i <= M; i++) {
        var x = -half + 2 * half * i / M, y = w.f(x);
        if (!isFinite(y)) { started = false; continue; }
        started ? ctx.lineTo(X(x), Y(y)) : (ctx.moveTo(X(x), Y(y)), started = true);
      }
      ctx.stroke();

      ctx.fillStyle = M411.colors.scaffold; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('band of half-height ' + eps.toExponential(1), padL + 4, Y(eps) - 5);
      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('x ∈ ±' + half.toExponential(1), (padL + W - padR) / 2, H - 9);

      out.innerHTML = w.cont
        ? '<p>The envelope \\(\\pm|x|\\) (dashed) pins the function down. Since \\(\\left|x\\sin\\frac1x\\right| \\le ' +
        '|x|\\), choosing \\(\\delta = \\varepsilon\\) forces \\(|f(x) - f(0)| &lt; \\varepsilon\\) &mdash; ' +
        'the oscillation never enters the argument.</p>' +
        '<p>Zoom as far as you like: the wiggles keep coming, and the envelope keeps closing. Both things are ' +
        'true at once, and only the second one matters for continuity.</p>'
        : '<p>Zooming changes nothing. In every window around \\(0\\), however narrow, the function still sweeps ' +
        'the full range from \\(-1\\) to \\(1\\) infinitely often &mdash; so it escapes the band of half-height ' +
        '\\(0.5\\) no matter how small \\(\\delta\\) is.</p>' +
        '<p>That is a failure of continuity at \\(0\\), and \\(\\varepsilon = 0.5\\) is enough to prove it. Note ' +
        'the function is perfectly continuous at every other point &mdash; the trouble is only at the origin.</p>';
      M411.typeset(out);
    }
    wSel.addEventListener('change', draw);
    zIn.addEventListener('input', draw);

    /* ---------------- Dirichlet ---------------- */
    var qIn = document.getElementById('d24-q'),
      dwIn = document.getElementById('d24-dw'),
      dCan = document.getElementById('d24-dirichlet'),
      dOut = document.getElementById('d24-dir-out');

    function drawD() {
      var q = +qIn.value, z = Math.pow(10, +dwIn.value / 12);
      var half = 1.5 / z;

      var d = M411.hidpi(dCan, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 56, padR = 20, padT = 18, padB = 32;
      function X(x) { return padL + (x + half) / (2 * half) * (W - padL - padR); }
      function Y(y) { return padT + (half * 1.2 - y) / (2.4 * half) * (H - padT - padB); }

      ctx.strokeStyle = '#999'; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(X(0), padT); ctx.lineTo(X(0), H - padB); ctx.stroke();

      // irrationals: D = 0. Sampled points to suggest a dense line of them.
      ctx.fillStyle = 'rgba(139,92,246,0.55)';
      for (var i = 0; i < 900; i++) {
        var xi = -half + 2 * half * ((i * 0.6180339887498949) % 1);
        ctx.beginPath(); ctx.arc(X(xi), Y(0), 1.6, 0, 2 * Math.PI); ctx.fill();
      }

      // rationals p/qq with qq <= q : D = x
      var count = 0;
      ctx.fillStyle = M411.colors.check;
      for (var qq = 1; qq <= q; qq++) {
        var from = Math.ceil(-half * qq), to = Math.floor(half * qq);
        for (var p = from; p <= to; p++) {
          var xr = p / qq;
          if (xr < -half || xr > half) continue;
          ctx.beginPath(); ctx.arc(X(xr), Y(xr), 2.2, 0, 2 * Math.PI); ctx.fill();
          count++;
        }
      }

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = M411.colors.check; ctx.fillText('rationals: D(x) = x', padL + 6, padT + 14);
      ctx.fillStyle = 'rgb(139,92,246)'; ctx.fillText('irrationals: D(x) = 0', padL + 6, padT + 32);
      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('x ∈ ±' + half.toExponential(1), (padL + W - padR) / 2, H - 9);

      dOut.innerHTML =
        '<p>Showing ' + count + ' rationals with denominator at most \\(' + q + '\\), plus a scattering of ' +
        'irrationals. Both sets are dense, so both "lines" are everywhere &mdash; and every point drawn on one ' +
        'of them is a hole in the other.</p>' +
        '<p>Window half-width \\(' + half.toExponential(2) + '\\). As you zoom toward the origin the two lines ' +
        'converge: the largest possible value of \\(|D(x)|\\) in this window is just \\(' + half.toExponential(2) +
        '\\), because \\(|D(x)| \\le |x|\\) always. That single inequality is what makes \\(0\\) the exceptional ' +
        'point.</p>';
      M411.typeset(dOut);
    }
    qIn.addEventListener('input', drawD);
    dwIn.addEventListener('input', drawD);

    M411.onResize(function () { draw(); drawD(); });
    draw();
    drawD();
  })();
</script>
