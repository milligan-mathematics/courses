---
layout: day
title: "MATH 411 Day 34: Uniform Convergence"
day: 34
chapter_number: 10
chapter: "Power Series Again"
day_title: "Uniform Convergence"
blurb: "Everything that has gone wrong since Chapter 3 &mdash; Gibbs, the stalled product proof, the impossible \\(\\delta\\), Cauchy's mistaken theorem &mdash; turns out to be one thing, and it has been waiting for a name."
reading: "Section 10.1, Definitions 10.1.2 and 10.1.3 and Theorem 10.1.5"
---

<div class="act explore">
  <div class="act-type">Orientation</div>
  <h2>The question the whole course was built to answer</h2>

  <p>Chapter 5 asked it and could not answer it: <em>why are power series well behaved when Fourier series are
    not?</em> Power series converge to continuous functions and can be differentiated and integrated term by term.
    Fourier series can do neither reliably &mdash; Day 16 built a discontinuity out of cosines and then destroyed
    convergence altogether by differentiating.</p>

  <p>The answer is that there are two ways a sequence of functions can converge, and until Weierstrass wrote them down
    in 1841 nobody had separated them. Abel noticed something was wrong in 1826; it took fifteen more years to say
    what.</p>

  <p>Compare the two definitions, and look only at where the \(N\) sits relative to the \(x\):</p>

  <div class="ctl-row" style="gap:24px;">
    <div style="flex:1;min-width:270px;">
      <p><strong>Pointwise:</strong> \(f_n \to f\) on \(S\)<br>
        \(\;\;\boldsymbol{\forall x \in S}\;\;\forall\varepsilon &gt; 0\;\;\exists N\) such that<br>
        \(\;\;n &gt; N \Rightarrow |f_n(x) - f(x)| &lt; \varepsilon\)</p>
    </div>
    <div style="flex:1;min-width:270px;">
      <p><strong>Uniform:</strong> \(f_n \rightrightarrows f\) on \(S\)<br>
        \(\;\;\forall\varepsilon &gt; 0\;\;\exists N\) such that<br>
        \(\;\;n &gt; N \Rightarrow |f_n(x) - f(x)| &lt; \varepsilon,\;\;\boldsymbol{\forall x \in S}\)</p>
    </div>
  </div>

  <p>Two quantifiers have swapped. In the first, you are handed \(x\) <em>and</em> \(\varepsilon\), and may choose
    \(N\) knowing both &mdash; so \(N\) may differ from point to point. In the second you get only \(\varepsilon\), and
    the one \(N\) you produce must work at every \(x\) simultaneously.</p>

  <p>Uniform convergence obviously implies pointwise convergence: an \(N\) that works everywhere works at each
    particular place. The reverse is what fails, and everything on this page is that failure.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Watching \(N\) run away</h2>

  <p>Here are sequences of functions that converge pointwise. For each one, fix \(\varepsilon\), then ask at each
    \(x\): how large must \(n\) be before \(|f_n(x) - f(x)| &lt; \varepsilon\) and stays there?</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d34-fam">Family</label>
      <select id="d34-fam"></select>
    </div>
    <div class="ctl">
      <label for="d34-n">\(n\)</label>
      <input type="range" id="d34-n" min="1" max="60" step="1" value="6">
    </div>
    <div class="ctl">
      <label for="d34-eps">\(\varepsilon\)</label>
      <input type="range" id="d34-eps" min="-1.6" max="-0.3" step="0.02" value="-0.8">
    </div>
  </div>

  <canvas class="plot" id="d34-canvas"></canvas>
  <div class="readout" id="d34-out"></div>

  <p>The lower strip is the diagnostic. It plots, for each \(x\), the smallest \(n\) that gets within \(\varepsilon\)
    and stays. <strong>If that curve is bounded, a single \(N\) works everywhere and the convergence is uniform. If it
    runs off to infinity, no single \(N\) can serve and the convergence is only pointwise.</strong></p>

  <p>Try the moving bump. At every fixed \(x\) the bump eventually passes and the values drop to zero &mdash; so it
    converges pointwise to \(0\). But at every stage there is <em>somewhere</em> the error is still \(1\); the trouble
    simply moves. Exactly Day 16's Gibbs overshoot, which shrank in width and never in height.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Why uniform convergence saves continuity</h2>

  <p><strong>Theorem 10.1.5.</strong> If each \(f_n\) is continuous on \(I\) and \(f_n \rightrightarrows f\) on \(I\),
    then \(f\) is continuous on \(I\).</p>

  <p>The idea, in your reading's phrase, is "to use uniform convergence to replace \(f\) with one of the known
    continuous functions \(f_n\)." Formalising it is your problem for today; here is the shape.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the idea</button>
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Step 1. Uncancel, into three pieces.</div>
        <div class="sstep-body">
          <p>We know nothing about \(f\) directly, but we know a great deal about each \(f_n\). So route through one,
            by Day 19's trick &mdash; twice:</p>
          \[ |f(x)-f(a)| \le \underbrace{|f(x)-f_n(x)|}_{\text{(A)}} + \underbrace{|f_n(x)-f_n(a)|}_{\text{(B)}} +
          \underbrace{|f_n(a)-f(a)|}_{\text{(C)}} \]
          <p>Two intermediate terms rather than one, because we must get from \(f\) to \(f_n\), across, and back
            again.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 2. What controls each piece?</div>
        <div class="sstep-body">
          <ul>
            <li><strong>(A) and (C)</strong> are about \(f_n\) approximating \(f\) &mdash; controlled by
              <em>convergence</em>, by taking \(n\) large.</li>
            <li><strong>(B)</strong> is about one fixed \(f_n\) at two nearby points &mdash; controlled by the
              <em>continuity of \(f_n\)</em>, by taking \(x\) close to \(a\).</li>
          </ul>
          <p>Each is small for a different reason, and the budget splits three ways.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 3. Where uniformity is indispensable &mdash; and it's term (A).</div>
        <div class="sstep-body">
          <p>Term (C) involves the fixed point \(a\), so pointwise convergence at \(a\) would handle it.</p>
          <p>Term (A) involves \(x\) &mdash; and \(x\) is <em>not yet chosen</em> when \(n\) is fixed. The order of
            play is: choose \(n\), then choose \(\delta\), then let \(x\) range over everything within \(\delta\) of
            \(a\). So we need one \(n\) making \(|f(x)-f_n(x)|\) small for <strong>all</strong> those \(x\) at
            once.</p>
          <p>That is precisely uniform convergence. Your reading flags it: "the uniform convergence makes the first
            term uniformly small for all \(x\)."</p>
          <p>With only pointwise convergence you could get an \(n\) for each \(x\) separately &mdash; and an \(n\)
            depending on \(x\) is useless here, for exactly the reason that Day 19's \(\frac{\varepsilon}{2|a_n|}\)
            was useless and Day 23's \(\delta = \frac{\varepsilon}{|x+3|}\) was illegal. <strong>A quantity that must
            be fixed has been allowed to depend on the variable.</strong> That failure has now appeared in every
            chapter of this course, and this is its final form.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 4. Order the choices, and the proof writes itself.</div>
        <div class="sstep-body">
          <ol>
            <li>\(\varepsilon\) is given.</li>
            <li>Use <em>uniform</em> convergence to fix one \(n\) making (A) and (C) small &mdash; (A) for every \(x\)
              at once.</li>
            <li>That \(n\) is now fixed, so \(f_n\) is one specific continuous function. Use its continuity at \(a\)
              to get \(\delta\) making (B) small.</li>
            <li>Add the three.</li>
          </ol>
          <p>The whole content is in the ordering. Uniformity is what lets step 2 come before step 3 &mdash; and if
            you had to know \(x\) before choosing \(n\), the argument could not be written in this order at all.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 5. What it explains, all at once.</div>
        <div class="sstep-body">
          <p>Contrapositive: <em>if the limit is discontinuous, the convergence was not uniform.</em> So Day 16's
            square wave, assembled from continuous cosines, tells you immediately that its Fourier series does not
            converge uniformly &mdash; no computation required.</p>
          <p>And your reading closes the loop on Chapter 3: power series converge uniformly on closed intervals inside
            their interval of convergence, which is why they always converge to continuous functions, and why they may
            be differentiated and integrated term by term. Every promissory note from Chapter 3 is redeemed by this
            one property.</p>
        </div>
      </li>
    </ol>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Open Question</div>
  <h2>Cauchy's mistake, and yours to find</h2>

  <p>In 1821 Cauchy published a proof that an infinite sum of continuous functions is continuous, in his
    <em>Cours d'analyse</em>. He was, as your reading says, a first-rate mathematician who was sure enough of the
    argument to put it in a textbook.</p>

  <p>You have met this argument twice before: your reading posed it in Chapter 8 and asked "can you tell what it is?",
    and Day 25 flagged it as an open question. Today it is Problem 10.1.1, and it is yours.</p>

  <p>So no answer here. What is worth laying out is everything the course has assembled that bears on it &mdash;
    because the flaw is not a new phenomenon, and you have seen its shape four times already.</p>

  <div class="readout">
    <p><strong>Day 16.</strong> The Gibbs overshoot shrinks in <em>width</em> and never in <em>height</em>. At every
      \(N\) there is still somewhere the error is 9% of the jump &mdash; it just keeps moving.</p>
    <p><strong>Day 19.</strong> The product proof stalled on \(\frac{\varepsilon}{2|a_n|}\), a tolerance that moved
      with \(n\) where a constant was needed. And: a maximum of <em>finitely many</em> thresholds exists.</p>
    <p><strong>Day 23.</strong> \(\delta = \frac{\varepsilon}{|x+3|}\) is illegal, because \(\delta\) must be fixed
      before \(x\) is chosen.</p>
    <p><strong>Day 25.</strong> A minimum of infinitely many positive numbers need not be positive.</p>
  </div>

  <p>Read Cauchy's argument beside those four, and ask the question Halmos asked on Day 23: <em>where does the proof
    use the hypothesis?</em> More precisely &mdash; which quantity in it is required to be fixed, and what is it
    secretly allowed to depend on?</p>

  <p>One more thing worth noticing before you go looking. Cauchy's conclusion is <em>almost</em> right. Replace
    pointwise convergence by uniform convergence and the theorem is true, and its proof is the scaffold above. He was
    not making a silly error; he was missing a distinction that did not yet exist, and locating it took the next
    twenty years and Weierstrass.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions to finish on</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">What exactly distinguishes uniform from pointwise convergence?</p>
    <button class="mc-opt" type="button" data-key="a">Uniform convergence is faster.</button>
    <button class="mc-opt" type="button" data-key="b">Uniform convergence requires the \(f_n\) to be
      continuous.</button>
    <button class="mc-opt" type="button" data-key="c">In uniform convergence one \(N\) must work for every \(x\) at
      once; pointwise allows \(N\) to depend on \(x\).</button>
    <div class="mc-fb" data-key="a">Speed isn't it &mdash; a uniformly convergent sequence can converge very slowly,
      as long as it converges slowly <em>everywhere equally</em>.</div>
    <div class="mc-fb" data-key="b">Neither definition mentions continuity; both apply to arbitrary functions.</div>
    <div class="mc-fb" data-key="c">Correct, and it is purely a matter of quantifier order. The \(\forall x\) moves
      from the front to the back, and that single move is the whole content of the distinction.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which term in the three-piece decomposition needs uniformity?</p>
    <button class="mc-opt" type="button" data-key="a">\(|f_n(x) - f_n(a)|\), the middle one.</button>
    <button class="mc-opt" type="button" data-key="b">\(|f(x) - f_n(x)|\), because \(x\) is not yet chosen when \(n\)
      is fixed.</button>
    <button class="mc-opt" type="button" data-key="c">\(|f_n(a) - f(a)|\), because \(a\) is arbitrary.</button>
    <div class="mc-fb" data-key="a">That one is handled by the continuity of the single fixed function \(f_n\)
      &mdash; no convergence involved.</div>
    <div class="mc-fb" data-key="b">Correct. \(n\) must be chosen before \(\delta\), hence before \(x\), so the bound
      has to hold for every \(x\) the \(\delta\) will later admit. Pointwise convergence gives an \(n\) per \(x\),
      which arrives too late to be useful.</div>
    <div class="mc-fb" data-key="c">\(a\) is fixed at the start, so pointwise convergence at \(a\) suffices for that
      term.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Day 16's Fourier series converges to a discontinuous function. What follows immediately?</p>
    <button class="mc-opt" type="button" data-key="a">The convergence is not uniform &mdash; by the contrapositive of
      Theorem 10.1.5.</button>
    <button class="mc-opt" type="button" data-key="b">The series diverges somewhere.</button>
    <button class="mc-opt" type="button" data-key="c">The cosines are not continuous.</button>
    <div class="mc-fb" data-key="a">Correct, and it costs nothing to deduce. Uniform convergence of continuous
      functions forces a continuous limit; the limit is discontinuous; so the convergence was not uniform. A single
      theorem, applied backwards, settles a question Chapter 5 could not touch.</div>
    <div class="mc-fb" data-key="b">It converges at every point &mdash; Day 16 checked. Pointwise convergence is not
      in doubt.</div>
    <div class="mc-fb" data-key="c">Cosines are continuous everywhere.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Why did it take from 1821 to 1841 to sort this out?</p>
    <button class="mc-opt" type="button" data-key="a">The counterexamples hadn't been found.</button>
    <button class="mc-opt" type="button" data-key="b">Cauchy's argument had an arithmetic error nobody spotted.</button>
    <button class="mc-opt" type="button" data-key="c">The distinction is one of quantifier order, and there was no
      vocabulary for it &mdash; Abel sensed a problem in 1826 and Weierstrass had to invent the definitions.</button>
    <div class="mc-fb" data-key="a">Fourier's work was already circulating, and Day 16's example was available in
      principle. Having a counterexample is not the same as knowing what it is a counterexample <em>to</em>.</div>
    <div class="mc-fb" data-key="b">There is no arithmetic error. Every computation in it is correct.</div>
    <div class="mc-fb" data-key="c">Correct, and it's a fitting note to end the course on. The error is invisible
      unless you have a way to talk about the order of quantifiers &mdash; and that language is exactly what this
      course has spent thirty-four days building. \(\varepsilon\)&ndash;\(N\), \(\varepsilon\)&ndash;\(\delta\), and
      now \(\rightrightarrows\) are not pedantry; they are the tools that make a distinction like this
      <em>sayable</em>.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Uniform convergence rescues continuity. Would you expect it to rescue term-by-term differentiation too? Look
      back at Day 16's third generation, where differentiating destroyed convergence entirely, and make a guess.</li>
    <li>The moving bump converges pointwise to \(0\) while every \(f_n\) has a peak of height \(1\). What happens to
      \(\int_0^1 f_n\)? Does it converge to \(\int_0^1 0 = 0\)? Try a bump of height \(n\).</li>
    <li>The failure "a quantity that must be fixed was allowed to depend on the variable" appeared on Days 17, 19, 23,
      25 and today. Write down the cleanest general statement of it you can.</li>
    <li>Look back at Day 1. You were asked what a number is, and told you didn't know. Thirty-four days later &mdash;
      what would you say now? Not a definition necessarily, but what do you know about \(\mathbb{R}\) that you
      didn't?</li>
  </ol>
</div>

<script>
  (function () {
    var FAMS = [
      {
        label: 'moving bump: tent of width 2/n at x = 1/n',
        f: function (n, x) {
          var c = 1 / n, w = 1 / n;
          var t = 1 - Math.abs(x - c) / w;
          return t > 0 ? t : 0;
        },
        lim: function () { return 0; },
        uniform: false,
        note: 'At any fixed \\(x &gt; 0\\) the bump eventually moves left past you and \\(f_n(x) \\to 0\\). But every ' +
          '\\(f_n\\) still has a peak of height \\(1\\) somewhere. The error never shrinks &mdash; it only moves, ' +
          'exactly like Day 16\'s Gibbs overshoot.'
      },
      {
        label: 'xⁿ on [0, 0.9]',
        f: function (n, x) { return Math.pow(x, n); },
        lim: function () { return 0; },
        xmax: 0.9, uniform: true,
        note: 'The worst case is always at the right end, and \\(0.9^n \\to 0\\). So one \\(N\\), chosen from the ' +
          'endpoint, works for the whole interval &mdash; the required-\\(n\\) curve is bounded.'
      },
      {
        label: 'x/(1 + n x²)',
        f: function (n, x) { return x / (1 + n * x * x); },
        lim: function () { return 0; },
        uniform: true,
        note: 'The peak height is \\(\\frac{1}{2\\sqrt n}\\), which tends to \\(0\\). The bump moves <em>and</em> ' +
          'flattens, so a single \\(N\\) suffices &mdash; uniform convergence. Compare with the first family, ' +
          'where the bump moved without flattening.'
      },
      {
        label: 'sin(nx)/√n',
        f: function (n, x) { return Math.sin(n * x) / Math.sqrt(n); },
        lim: function () { return 0; },
        uniform: true,
        note: 'Oscillating ever faster, and bounded by \\(\\frac{1}{\\sqrt n}\\) everywhere at once. Wild behaviour ' +
          'is no obstacle to uniformity &mdash; only the <em>size</em> of the error matters.'
      },
      {
        label: 'n x (1 − x²)ⁿ',
        f: function (n, x) { return n * x * Math.pow(1 - x * x, n); },
        lim: function () { return 0; },
        uniform: false, ymax: 3.2,
        note: 'Converges pointwise to \\(0\\), and the peak grows like \\(\\sqrt{n}\\). Not merely non-uniform ' +
          '&mdash; the maximum error runs off to infinity while every individual point settles to zero.'
      }
    ];

    var sel = document.getElementById('d34-fam'),
      nIn = document.getElementById('d34-n'),
      eIn = document.getElementById('d34-eps'),
      canvas = document.getElementById('d34-canvas'),
      out = document.getElementById('d34-out');

    FAMS.forEach(function (f, i) {
      var o = document.createElement('option'); o.value = String(i); o.textContent = f.label; sel.appendChild(o);
    });

    var NMAX = 400;

    function requiredN(fam, x, eps) {
      // smallest n such that |f_m(x) - f(x)| < eps for all m in [n, NMAX]
      for (var n = 1; n <= NMAX; n++) {
        var ok = true;
        for (var m = n; m <= Math.min(n + 60, NMAX); m++) {
          if (Math.abs(fam.f(m, x) - fam.lim(x)) >= eps) { ok = false; break; }
        }
        if (ok) return n;
      }
      return Infinity;
    }

    function draw() {
      var fam = FAMS[+sel.value], n = +nIn.value, eps = Math.pow(10, +eIn.value);
      var xmax = fam.xmax || 1;

      var d = M411.hidpi(canvas, 360), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 56, padR = 24, padT = 18;
      var splitY = H * 0.62, padB = 34;

      var ymax = fam.ymax || 1.25;
      function X(x) { return padL + x / xmax * (W - padL - padR); }
      function Y(y) { return padT + (ymax - y) / (ymax + 0.15) * (splitY - padT - 10); }

      // the epsilon band about the limit (0 for all these)
      ctx.fillStyle = 'rgba(0,133,82,0.14)';
      ctx.fillRect(padL, Y(eps), W - padL - padR, Math.max(Y(-eps) - Y(eps), 1.5));
      ctx.strokeStyle = M411.colors.scaffold; ctx.lineWidth = 1.3; ctx.setLineDash([5, 4]);
      ctx.beginPath(); ctx.moveTo(padL, Y(eps)); ctx.lineTo(W - padR, Y(eps)); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = M411.colors.scaffold; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('±ε', padL + 4, Y(eps) - 5);

      // a few earlier members, faded
      [Math.max(1, Math.round(n / 4)), Math.max(1, Math.round(n / 2))].forEach(function (m) {
        ctx.strokeStyle = '#d5d8dc'; ctx.lineWidth = 1.4;
        ctx.beginPath();
        for (var i = 0; i <= 1200; i++) {
          var x = xmax * i / 1200, y = fam.f(m, x);
          i ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y));
        }
        ctx.stroke();
      });

      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2.2;
      ctx.beginPath();
      var peak = 0;
      for (var i2 = 0; i2 <= 2000; i2++) {
        var x2 = xmax * i2 / 2000, y2 = fam.f(n, x2);
        peak = Math.max(peak, Math.abs(y2 - fam.lim(x2)));
        i2 ? ctx.lineTo(X(x2), Y(y2)) : ctx.moveTo(X(x2), Y(y2));
      }
      ctx.stroke();

      ctx.fillStyle = M411.colors.check; ctx.font = '12px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText('f' + n, W - padR - 4, padT + 14);

      // ---- lower strip: required n as a function of x ----
      ctx.strokeStyle = '#e4e6ea'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(padL, splitY); ctx.lineTo(W - padR, splitY); ctx.stroke();

      var xs = [], reqs = [], maxReq = 1, anyInf = false;
      for (var k = 1; k <= 200; k++) {
        var xx = xmax * k / 200;
        var r = requiredN(fam, xx, eps);
        xs.push(xx); reqs.push(r);
        if (!isFinite(r)) anyInf = true; else maxReq = Math.max(maxReq, r);
      }

      var top = anyInf ? NMAX : Math.max(maxReq * 1.2, 10);
      function YR(v) { return splitY + 20 + (1 - Math.min(v, NMAX) / top) * (H - splitY - padB - 24); }

      ctx.strokeStyle = anyInf || maxReq > NMAX * 0.8 ? '#d9534f' : M411.colors.explore;
      ctx.lineWidth = 2;
      ctx.beginPath();
      var started = false;
      xs.forEach(function (x, i3) {
        var v = reqs[i3];
        if (!isFinite(v)) { started = false; return; }
        started ? ctx.lineTo(X(x), YR(v)) : (ctx.moveTo(X(x), YR(v)), started = true);
      });
      ctx.stroke();

      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('smallest n that works at each x  (bounded ⇒ uniform)', padL, splitY + 15);
      ctx.textAlign = 'right';
      ctx.fillText('n = ' + Math.round(top), padL - 6, YR(top) + 4);
      ctx.fillText('1', padL - 6, YR(1) + 4);

      var verdict;
      if (anyInf || maxReq > NMAX * 0.8) {
        verdict = '<p><strong style="color:#d9534f">Not uniform.</strong> The required \\(n\\) grows without bound ' +
          'as \\(x\\) moves &mdash; it reaches ' + (anyInf ? 'beyond ' + NMAX : maxReq) + ' within the window. ' +
          'No single \\(N\\) works for every \\(x\\) at once, so the convergence is pointwise only.</p>';
      } else {
        verdict = '<p><strong style="color:var(--a411-scaffold)">Uniform.</strong> The required \\(n\\) never exceeds ' +
          '<strong>' + maxReq + '</strong> anywhere on the interval &mdash; so \\(N = ' + maxReq +
          '\\) works at every \\(x\\) simultaneously.</p>';
      }

      out.innerHTML =
        '<p>\\(n = ' + n + '\\), \\(\\varepsilon = ' + eps.toFixed(4) + '\\). Largest error anywhere: \\(' +
        peak.toFixed(6) + '\\).</p>' + verdict + '<p>' + fam.note + '</p>' +
        '<p style="color:var(--text-muted);font-size:0.9rem;">Shrink \\(\\varepsilon\\) and watch the lower curve ' +
        'rise. For a uniformly convergent family it rises and stays bounded; otherwise it escapes.</p>';
      M411.typeset(out);
    }
    sel.addEventListener('change', draw);
    nIn.addEventListener('input', draw);
    eIn.addEventListener('input', draw);
    M411.onResize(draw);
    draw();
  })();
</script>
