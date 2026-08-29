---
layout: day
title: "MATH 411 Day 16: Series That Break Continuity"
day: 16
chapter_number: 5
chapter: "Breaking Calculus"
day_title: "Series That Break Continuity"
blurb: "Differentiate a well-behaved Fourier series and you get a discontinuous function. Differentiate again and you get a series that converges to nothing at all. This is the morning after."
reading: "Section 5.1, Example 5.1.6 and what happens when you differentiate its series"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Three generations of one series</h2>

  <p>Start with the triangle wave \(f(x) = \frac12 - \left|x - \frac12\right|\), whose Fourier sine series your problem
    set computes. Then differentiate the series term by term. Then do it again.</p>

  <p>Each generation is obtained from the last by a rule you have used a hundred times: <em>the derivative of a sum is
      the sum of the derivatives.</em> Watch what it produces.</p>

  <div class="ctl-row">
    <button class="btn411 ghost d16-gen" data-g="0">1. the series itself</button>
    <button class="btn411 ghost d16-gen" data-g="1">2. differentiated once</button>
    <button class="btn411 ghost d16-gen" data-g="2">3. differentiated twice</button>
  </div>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d16-N">Terms \(N\)</label>
      <input type="range" id="d16-N" min="1" max="80" step="1" value="5">
    </div>
  </div>

  <canvas class="plot" id="d16-canvas"></canvas>
  <div class="readout" id="d16-out"></div>

  <p>Generation 1 behaves impeccably. Generation 2 converges &mdash; but to a function with a <strong>jump</strong>,
    assembled entirely out of smooth cosine waves. Generation 3 does not converge at all; crank \(N\) and the partial
    sums thrash about, getting no closer to anything.</p>

  <p>Your reading's reaction is the right one: "We knew that there might be a problem at \(x = \frac12\) but this is
    crazy! The series seems to not be converging to zero at all!"</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>An intuition that had never failed before</h2>

  <p>Every step below was standard practice, and each one had worked every previous time it was used.</p>

  <p><strong>Click the first claim that is false.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">A sum of finitely many continuous functions is continuous.</button>
      <button class="fline" type="button">Every partial sum \(C_N(x)\) of the differentiated series is a finite
        combination of cosines, hence continuous.</button>
      <button class="fline" type="button">So the limit of the \(C_N\), if it exists, is continuous too &mdash; a sum of
        continuous functions is continuous however many there are.</button>
      <button class="fline" type="button">The differentiated series does converge, for every \(x\) in
        \([0,1]\).</button>
      <button class="fline" type="button">Therefore its sum is a continuous function on \([0,1]\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>True, and provable.</strong> Continuity is preserved by finite sums &mdash; you can prove it by
        induction from the two-function case. Nothing here is in doubt.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>True.</strong> \(C_N\) is a finite combination of cosines, and each cosine is continuous. So by line
        (1), \(C_N\) is continuous &mdash; for every \(N\), no matter how large.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>That's the false step, and it is the day's whole point.</strong></p>
      <p>Look at what it does: line (1) is a statement about \(n\) functions for a finite \(n\), and line (3) applies it
        to a <em>limit</em>. Those are different operations. "Continuous for every \(N\)" says nothing on its own about
        the limit, because the limit is not one of the \(C_N\) &mdash; it is a new function that no \(N\) produces.</p>
      <p>And here it genuinely fails. Every \(C_N\) is continuous; the limit has a jump at \(x = \frac12\). Set the
        widget to generation 2 and slide \(N\) up: the transition through the jump gets steeper and steeper without
        ever stopping being a continuous ramp &mdash; and in the limit the ramp becomes a cliff.</p>
      <p>Your reading explains why nobody had noticed: "In the 1700's, this was also assumed to be true for infinite
        series, because every time a power series converged to a function, that function happened to be continuous.
        This never failed for power series, so this example was a bit disconcerting."</p>
      <p>An assumption can be exercised for a century without being tested, if you only ever apply it where it happens
        to hold. Power series were hiding a hypothesis nobody knew was there.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>True, and worth pausing over.</strong> The differentiated series converges at every point of
        \([0,1]\), including at \(x=\frac12\), where it converges to \(0\) &mdash; sitting neatly halfway between the
        \(+1\) on one side and the \(-1\) on the other.</p>
      <p>So convergence is not the problem. This is the Day 12 lesson again: a series can converge everywhere and still
        do something you didn't expect. Notice too that the limit differs from \(f'\) at \(x = \frac12\), where \(f'\)
        doesn't exist at all but the series confidently returns \(0\).</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>False, but only because line (3) was.</strong> The sum is genuinely discontinuous &mdash; it is a
        square wave. The conclusion is wrong; the error was upstream.</p>
    </div>
  </div>

  <p>And there is a second casualty. Generation 3 shows term-by-term differentiation producing a series that converges
    <em>nowhere useful</em>. Your reading: "the old calculus rule that the derivative of a sum is the sum of the
    derivatives does not apply for this infinite sum, though it did apply before."</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The overshoot that refuses to leave</h2>

  <p>Zoom in on the jump in generation 2. The partial sums overshoot the true value just before the discontinuity
    &mdash; which is unsurprising. What <em>is</em> surprising is that the overshoot does not shrink as you add
    terms.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d16-gN">Terms \(N\)</label>
      <input type="range" id="d16-gN" min="2" max="120" step="1" value="10">
    </div>
  </div>

  <canvas class="plot" id="d16-gibbs"></canvas>
  <div class="readout" id="d16-gibbs-out"></div>

  <p>The overshoot gets <em>narrower</em> &mdash; it squeezes toward the jump &mdash; but its <em>height</em> settles
    at about 9% of the jump and stays there forever. This is the <strong>Gibbs phenomenon</strong>, and it is the
    visual signature of the distinction this course is building toward.</p>

  <p>Here is the point. At any <em>fixed</em> \(x\), the partial sums do converge to the right value: eventually the
    spike moves past you and you settle down. So the series converges <strong>pointwise</strong>. But at every stage
    there is <em>some</em> point where the error is still about 9% &mdash; it just keeps moving. There is no \(N\)
    after which the approximation is good <em>everywhere at once</em>.</p>

  <p>Convergence at each point, but never uniformly across all points. That distinction has a name and a definition,
    and it is exactly what separates the well-behaved power series from these Fourier series. You meet it properly on
    Day 34.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>What divergence looks like from the inside</h2>

  <p>For generation 3, pick a point and watch its partial sums as \(N\) grows. (Your problem set examines \(x =
    \frac14\); these are other points, so you can see the behaviour without spoiling that computation.)</p>

  <div class="ctl-row">
    <button class="btn411 ghost d16-pt" data-x="0.2">x = 0.2</button>
    <button class="btn411 ghost d16-pt" data-x="0.35">x = 0.35</button>
    <button class="btn411 ghost d16-pt" data-x="0.7">x = 0.7</button>
    <button class="btn411 ghost d16-pt" data-x="0.5">x = 0.5</button>
  </div>

  <canvas class="plot" id="d16-div"></canvas>
  <div class="readout" id="d16-div-out"></div>

  <p>These partial sums do not creep toward a limit. They wander, and keep wandering. If the term-by-term
    differentiation rule were valid, this series would have to converge to \(0\) almost everywhere &mdash; the
    derivative of a square wave is zero wherever it exists.</p>

  <p>Compare this against Day 14. There, a <em>convergent</em> series behaved badly under rearrangement. Here, an
    operation that has been applied freely since Chapter 3 destroys convergence outright.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on the morning after</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">What exactly does the differentiated Fourier series demonstrate?</p>
    <button class="mc-opt" type="button" data-key="a">That the Fourier series of \(f\) was wrong.</button>
    <button class="mc-opt" type="button" data-key="b">That an infinite sum of continuous functions can be
      discontinuous.</button>
    <button class="mc-opt" type="button" data-key="c">That cosine functions are not continuous.</button>
    <div class="mc-fb" data-key="a">The original series is fine &mdash; generation 1 converges to the triangle wave
      beautifully. The trouble starts only when it is differentiated.</div>
    <div class="mc-fb" data-key="b">Correct, and it broke a rule everyone had relied on. Every partial sum is
      continuous; the limit has a jump. The property survives every finite stage and fails in the limit.</div>
    <div class="mc-fb" data-key="c">Cosines are continuous. That's what makes the conclusion startling.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Why hadn't anyone hit this problem with power series?</p>
    <button class="mc-opt" type="button" data-key="a">Power series were used less often.</button>
    <button class="mc-opt" type="button" data-key="b">Nobody had differentiated a power series term by term.</button>
    <button class="mc-opt" type="button" data-key="c">Power series happen to have a property that makes the rule valid
      &mdash; but nobody knew what it was, so nobody knew it could be absent.</button>
    <div class="mc-fb" data-key="a">They were used constantly &mdash; the whole of Chapter 3 is power series.</div>
    <div class="mc-fb" data-key="b">It was done routinely; your reading calls it "part of their appeal."</div>
    <div class="mc-fb" data-key="c">Correct, and your reading is careful to reassure: "Power series are generally much
      more well-behaved than Fourier series. Whenever a power series converges, the function it converges to will be
      continuous." The rules were fine for power series. What was missing was any account of <em>why</em>, and
      therefore any way to know where they'd stop working.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">At \(x = \frac12\), the once-differentiated series converges to \(0\). What is \(f'(\frac12)\)?</p>
    <button class="mc-opt" type="button" data-key="a">It doesn't exist &mdash; \(f\) has a corner there.</button>
    <button class="mc-opt" type="button" data-key="b">\(0\), so the series is right.</button>
    <button class="mc-opt" type="button" data-key="c">\(1\), the value just to the left.</button>
    <div class="mc-fb" data-key="a">Correct, and it's a strange situation. The slope is \(+1\) approaching from the left
      and \(-1\) from the right, so there is no derivative at the corner. The series nonetheless returns \(0\) &mdash;
      the average of the two one-sided values. It has confidently produced a value where the function it is supposed
      to represent has none.</div>
    <div class="mc-fb" data-key="b">The series says \(0\), but \(f'\) has no value there at all &mdash; so they cannot
      agree.</div>
    <div class="mc-fb" data-key="c">The left-hand slope is \(1\), but the series returns \(0\).</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Your reading asks whether "everything we did with power series was bogus." What's the verdict?</p>
    <button class="mc-opt" type="button" data-key="a">Yes &mdash; Chapter 3 needs to be redone.</button>
    <button class="mc-opt" type="button" data-key="b">No &mdash; the results hold, but the justification was missing,
      and supplying it is the rest of the course.</button>
    <button class="mc-opt" type="button" data-key="c">Only the term-by-term differentiation was invalid.</button>
    <div class="mc-fb" data-key="a">The reading answers directly: "Fortunately, the answer to that question is no."
      Power series can be differentiated and integrated term by term inside their interval of convergence.</div>
    <div class="mc-fb" data-key="b">Correct, and it's the position to carry forward. The eighteenth century's answers
      were right; its warrants were absent. Your reading's image is exact: "the nineteenth century was the 'morning
      after' the mathematical party that went on throughout the eighteenth century." The cleanup is Chapters
      6&ndash;10.</div>
    <div class="mc-fb" data-key="c">Term-by-term differentiation of a power series is valid inside the interval of
      convergence. It's Fourier series that lack the guarantee.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Every partial sum is continuous and the limit is not. Where exactly does an induction proving "sums of
      continuous functions are continuous" break down when you try to run it infinitely far?</li>
    <li>The Gibbs overshoot stays at 9% while getting narrower. Convince yourself these are compatible: the series
      converges at every fixed point, yet is never uniformly good. What kind of definition would tell them apart?</li>
    <li>Your reading says power series "have something going for them that your average Fourier series does not." From
      what you've seen, guess what it is. Consider how fast the coefficients shrink in each case.</li>
    <li>Generation 2 converges to something that isn't \(f'\) at \(x=\frac12\); generation 3 doesn't converge at all. Is
      the second failure worse than the first, or are they the same failure at different stages?</li>
    <li>Why did it take a physics problem &mdash; heat flow in a wire &mdash; to expose a gap that a century of pure
      mathematics had missed?</li>
  </ol>
</div>

<script>
  (function () {
    // The three series from the reading, all built on odd harmonics (2k+1).
    // gen 0: the Fourier sine series of the triangle wave
    // gen 1: differentiated once  -> square wave
    // gen 2: differentiated twice -> divergent
    function term(gen, k, x) {
      var m = 2 * k + 1, s = (k % 2 === 0 ? 1 : -1);
      if (gen === 0) return (4 / (Math.PI * Math.PI)) * s / (m * m) * Math.sin(m * Math.PI * x);
      if (gen === 1) return (4 / Math.PI) * s / m * Math.cos(m * Math.PI * x);
      return 4 * (k % 2 === 0 ? -1 : 1) * Math.sin(m * Math.PI * x);
    }
    function partial(gen, N, x) {
      var s = 0;
      for (var k = 0; k <= N; k++) s += term(gen, k, x);
      return s;
    }

    var TRUE = [
      { f: function (x) { return 0.5 - Math.abs(x - 0.5); }, lo: -0.9, hi: 0.9, label: 'f(x) = ½ − |x − ½|' },
      {
        f: function (x) { return x < 0.5 ? 1 : (x > 0.5 ? -1 : 0); }, lo: -1.9, hi: 1.9,
        label: "f '(x): +1 then −1, undefined at ½"
      },
      { f: null, lo: -6, hi: 6, label: 'should be 0 wherever f ″ exists' }
    ];

    var GEN_NOTES = [
      '<p>Every added term improves the fit. The corner at \\(x=\\frac12\\) is the hardest part &mdash; it needs ' +
      'the high harmonics &mdash; but the partial sums close in on the triangle from all sides. Nothing here ' +
      'would have troubled anyone in 1800.</p>',
      '<p>Differentiating term by term gives a series of <em>cosines</em>. Every partial sum is continuous, and ' +
      'the limit is a square wave with a jump of \\(2\\) at \\(x = \\frac12\\). Infinitely many continuous ' +
      'functions have summed to a discontinuous one.</p>' +
      '<p>Watch the transition as \\(N\\) grows: it stays a continuous ramp at every stage, and simply gets ' +
      'steeper. The discontinuity exists only in the limit &mdash; it is in none of the approximations.</p>',
      '<p>Differentiate once more and the series stops converging. The partial sums oscillate with amplitude that ' +
      'does not settle, at essentially every point. This is not slow convergence; it is no convergence.</p>' +
      '<p>The derivative of the square wave is \\(0\\) wherever it exists, so if term-by-term differentiation were ' +
      'valid this would have to be the zero function. It is not remotely close.</p>'
    ];

    var gen = 0;
    var NIn = document.getElementById('d16-N'),
      canvas = document.getElementById('d16-canvas'),
      out = document.getElementById('d16-out');

    function draw() {
      var N = +NIn.value, t = TRUE[gen];
      var d = M411.hidpi(canvas, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 46, padR = 20, padT = 20, padB = 32;
      function X(x) { return padL + x * (W - padL - padR); }
      function Y(y) { return padT + (t.hi - y) / (t.hi - t.lo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = 0; g <= 4; g++) {
        var v = t.lo + (t.hi - t.lo) * g / 4;
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(v.toFixed(1), padL - 8, Y(v) + 4);
      }
      ctx.strokeStyle = '#999'; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke();

      if (t.f) {
        ctx.strokeStyle = '#c9ccd1'; ctx.lineWidth = 3.4;
        // drawn in two pieces so the square wave's jump isn't bridged by a line
        [[0, 0.4999], [0.5001, 1]].forEach(function (seg) {
          ctx.beginPath();
          for (var i = 0; i <= 300; i++) {
            var x = seg[0] + (seg[1] - seg[0]) * i / 300;
            i ? ctx.lineTo(X(x), Y(t.f(x))) : ctx.moveTo(X(x), Y(t.f(x)));
          }
          ctx.stroke();
        });
      }

      ctx.strokeStyle = gen === 2 ? '#d9534f' : M411.colors.explore; ctx.lineWidth = 2;
      ctx.beginPath();
      for (var j = 0; j <= 1400; j++) {
        var xx = j / 1400, yy = partial(gen, N, xx);
        j ? ctx.lineTo(X(xx), Y(yy)) : ctx.moveTo(X(xx), Y(yy));
      }
      ctx.stroke();

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      if (t.f) { ctx.fillStyle = '#9aa0a6'; ctx.fillText(t.label, padL + 6, padT + 14); }
      else { ctx.fillStyle = '#9aa0a6'; ctx.fillText(t.label, padL + 6, padT + 14); }
      ctx.fillStyle = gen === 2 ? '#d9534f' : M411.colors.explore;
      ctx.fillText('partial sum, ' + (N + 1) + ' term' + (N ? 's' : ''), padL + 6, padT + 32);

      out.innerHTML = GEN_NOTES[gen];
      M411.typeset(out);
    }

    document.querySelectorAll('.d16-gen').forEach(function (b) {
      b.addEventListener('click', function () {
        gen = +b.getAttribute('data-g');
        document.querySelectorAll('.d16-gen').forEach(function (o) { o.classList.remove('on'); });
        b.classList.add('on');
        draw();
      });
    });
    NIn.addEventListener('input', draw);

    /* ---------------- Gibbs ---------------- */
    var gNIn = document.getElementById('d16-gN'),
      gCan = document.getElementById('d16-gibbs'),
      gOut = document.getElementById('d16-gibbs-out');

    function drawGibbs() {
      var N = +gNIn.value;
      var d = M411.hidpi(gCan, 280), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 46, padR = 20, padT = 20, padB = 32;
      var xlo = 0.26, xhi = 0.5, ylo = 0.55, yhi = 1.35;
      function X(x) { return padL + (x - xlo) / (xhi - xlo) * (W - padL - padR); }
      function Y(y) { return padT + (yhi - y) / (yhi - ylo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = 0.6; g <= 1.3; g += 0.1) {
        ctx.beginPath(); ctx.moveTo(padL, Y(g)); ctx.lineTo(W - padR, Y(g)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(g.toFixed(1), padL - 8, Y(g) + 4);
      }

      ctx.setLineDash([6, 4]); ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(padL, Y(1)); ctx.lineTo(W - padR, Y(1)); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('true value 1', padL + 6, Y(1) - 6);

      var peak = 0, peakAt = 0;
      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2;
      ctx.beginPath();
      for (var i = 0; i <= 2000; i++) {
        var x = xlo + (xhi - xlo) * i / 2000, y = partial(1, N, x);
        if (y > peak) { peak = y; peakAt = x; }
        i ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y));
      }
      ctx.stroke();

      ctx.strokeStyle = M411.colors.flaw; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(X(peakAt), Y(1)); ctx.lineTo(X(peakAt), Y(peak)); ctx.stroke();
      ctx.fillStyle = M411.colors.flaw;
      ctx.beginPath(); ctx.arc(X(peakAt), Y(peak), 4, 0, 2 * Math.PI); ctx.fill();

      // The jump is from -1 to +1, so its magnitude is 2. Gibbs is conventionally
      // quoted as a fraction of the jump, not of the limiting value.
      var pctOfJump = (peak - 1) / 2 * 100;

      gOut.innerHTML =
        '<p>With ' + (N + 1) + ' terms, the peak overshoot is \\(' + peak.toFixed(6) + '\\) at \\(x = ' +
        peakAt.toFixed(5) + '\\) &mdash; an excess of \\(' + (peak - 1).toFixed(5) + '\\) above the true value ' +
        'of \\(1\\), which is <strong>' + pctOfJump.toFixed(3) + '%</strong> of the jump of \\(2\\).</p>' +
        '<p>Distance from the jump: \\(' + (0.5 - peakAt).toExponential(2) + '\\). Push \\(N\\) up and watch the ' +
        'two numbers behave completely differently &mdash; the distance shrinks steadily toward zero, while the ' +
        'percentage settles at \\(8.949\\%\\) and stops moving.</p>' +
        '<p>That limiting value is not a rounding artefact. It is exactly \\(\\frac{1}{2}\\left(\\frac{2}{\\pi}' +
        '\\mathrm{Si}(\\pi) - 1\\right)\\), where \\(\\mathrm{Si}\\) is the sine integral from Day 11 &mdash; a ' +
        'specific constant that no amount of extra terms will reduce.</p>';
      M411.typeset(gOut);
    }
    gNIn.addEventListener('input', drawGibbs);

    /* ---------------- divergence at a point ---------------- */
    var dCan = document.getElementById('d16-div'),
      dOut = document.getElementById('d16-div-out'),
      dx = 0.2;

    function drawDiv() {
      var d = M411.hidpi(dCan, 260), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 46, padR = 20, padT = 20, padB = 34, NM = 80;

      var sums = [], s = 0;
      for (var k = 0; k <= NM; k++) { s += term(2, k, dx); sums.push(s); }

      var lo = Math.min.apply(null, sums), hi = Math.max.apply(null, sums);
      var span = Math.max(hi - lo, 1), mid = (hi + lo) / 2;
      lo = mid - span * 0.65; hi = mid + span * 0.65;

      function X(n) { return padL + n / NM * (W - padL - padR); }
      function Y(v) { return padT + (hi - v) / (hi - lo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = 0; g <= 4; g++) {
        var v = lo + (hi - lo) * g / 4;
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(v.toFixed(2), padL - 8, Y(v) + 4);
      }
      if (0 > lo && 0 < hi) {
        ctx.setLineDash([6, 4]); ctx.strokeStyle = M411.colors.scaffold; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = M411.colors.scaffold; ctx.textAlign = 'left'; ctx.font = 'bold 11px sans-serif';
        ctx.fillText('what it would have to converge to', padL + 6, Y(0) - 6);
      }

      ctx.strokeStyle = '#d9534f'; ctx.lineWidth = 1.8;
      ctx.beginPath();
      sums.forEach(function (v, n) { n ? ctx.lineTo(X(n), Y(v)) : ctx.moveTo(X(n), Y(v)); });
      ctx.stroke();
      sums.forEach(function (v, n) {
        ctx.fillStyle = '#d9534f';
        ctx.beginPath(); ctx.arc(X(n), Y(v), 2.4, 0, 2 * Math.PI); ctx.fill();
      });

      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('number of terms', (padL + W - padR) / 2, H - 9);

      var tail = sums.slice(40);
      dOut.innerHTML =
        '<p>Partial sums of the twice-differentiated series at \\(x = ' + dx + '\\), for up to ' + (NM + 1) +
        ' terms.</p>' +
        '<p>Over the last 40 partial sums they range from \\(' + Math.min.apply(null, tail).toFixed(4) +
        '\\) to \\(' + Math.max.apply(null, tail).toFixed(4) + '\\) &mdash; a spread of \\(' +
        (Math.max.apply(null, tail) - Math.min.apply(null, tail)).toFixed(4) +
        '\\) that shows no sign of closing.</p>' +
        (dx === 0.5
          ? '<p>At \\(x=\\frac12\\) every term is \\(\\sin\\left(\\frac{(2k+1)\\pi}{2}\\right)\\) times a constant, ' +
          'and the partial sums simply refuse to settle.</p>'
          : '<p>The terms do not shrink &mdash; they are all of size up to \\(4\\) &mdash; so there is no prospect ' +
          'of the partial sums settling. A series whose terms don\'t tend to zero cannot converge.</p>');
      M411.typeset(dOut);
    }
    document.querySelectorAll('.d16-pt').forEach(function (b) {
      b.addEventListener('click', function () {
        dx = +b.getAttribute('data-x');
        document.querySelectorAll('.d16-pt').forEach(function (o) { o.classList.remove('on'); });
        b.classList.add('on');
        drawDiv();
      });
    });

    M411.onResize(function () { draw(); drawGibbs(); drawDiv(); });
    draw();
    drawGibbs();
    drawDiv();
  })();
</script>
