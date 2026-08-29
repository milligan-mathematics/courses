---
layout: day
title: "MATH 411 Day 22: Continuity, Defined"
day: 22
chapter_number: 8
chapter: "Continuity"
day_title: "Continuity, Defined"
blurb: "Euler thought a continuous curve was one given by a single formula. Then Fourier built a jump out of cosines, and Weierstrass built a curve that is continuous everywhere and smooth nowhere."
reading: "Section 8.1, the history of continuity through Definition 8.1.7 and Example 8.1.8"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The \(\varepsilon\)&ndash;\(\delta\) game</h2>

  <p>Definition 8.1.7, in the same adversarial form as Day 17:</p>

  <p><strong>\(f\) is continuous at \(a\)</strong> means: for any \(\varepsilon &gt; 0\) there exists \(\delta &gt; 0\)
    such that \(|x - a| &lt; \delta\) implies \(|f(x) - f(a)| &lt; \varepsilon\).</p>

  <p>The adversary names a horizontal band of half-height \(\varepsilon\) around \(f(a)\). You must produce a vertical
    strip of half-width \(\delta\) around \(a\), narrow enough that the graph inside your strip never leaves their
    band.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d22-fn">Function</label>
      <select id="d22-fn"></select>
    </div>
    <div class="ctl">
      <label for="d22-a">Point \(a\)</label>
      <input type="range" id="d22-a" min="-2" max="3" step="0.05" value="1">
    </div>
    <div class="ctl">
      <label for="d22-eps">\(\varepsilon\)</label>
      <input type="range" id="d22-eps" min="-2" max="0.2" step="0.02" value="-0.4">
    </div>
  </div>

  <canvas class="plot" id="d22-canvas"></canvas>
  <div class="readout" id="d22-out"></div>

  <p>Compare the shape of this with Day 17's game. Both begin with a challenge \(\varepsilon\) and demand a response.
    The difference is what you get to control: for a sequence you chose <em>how far along</em> to go, and here you
    choose <em>how close in</em> to stay. Your reading makes the parallel explicitly &mdash; "we need to determine how
    close \(x\) must be to \(a\) to ensure this will happen instead of determining how large \(n\) must be."</p>

  <p>Try the last function in the list, which has a jump at \(x = 1\). Put \(a\) at the jump and shrink
    \(\varepsilon\). Below a certain point no \(\delta\) survives, however small &mdash; because every strip around
    \(a\), no matter how narrow, contains points on the far side of the jump.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Finding a \(\delta\) by hand</h2>

  <p>Before the general machinery, your reading does one case concretely: \(f(x) = x^2\) at \(a = 2\), with
    \(\varepsilon = 0.1\). Following it once with actual numbers is worth a lot.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the computation</button>
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Step 1. Translate the demand into an inequality about \(x\).</div>
        <div class="sstep-body">
          <p>\(f(2) = 4\), and we want \(|x^2 - 4| &lt; 0.1\), that is</p>
          \[ 3.9 &lt; x^2 &lt; 4.1 \]
          <p>Since we'll be looking at \(x\) near \(2\), everything in sight is positive and we may take square
            roots:</p>
          \[ \sqrt{3.9} &lt; x &lt; \sqrt{4.1} \]
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 2. Convert to a symmetric interval about \(a\) &mdash; and lose a little.</div>
        <div class="sstep-body">
          <p>Numerically, \(\sqrt{3.9} \approx 1.9748\) and \(\sqrt{4.1} \approx 2.0248\). The allowed interval is not
            symmetric about \(2\), but \(\delta\) has to produce a symmetric one, so we take the smaller side and round
            <em>inward</em>:</p>
          \[ \sqrt{3.9} &lt; 1.98 \qquad\text{and}\qquad 2.02 &lt; \sqrt{4.1} \]
          <p>So \(\delta = 0.02\) works: if \(|x - 2| &lt; 0.02\) then \(1.98 &lt; x &lt; 2.02\), hence \(\sqrt{3.9}
            &lt; x &lt; \sqrt{4.1}\), hence \(|x^2 - 4| &lt; 0.1\).</p>
          <p>We deliberately threw away some room. There was no need to keep it &mdash; a \(\delta\) that works is all
            the definition asks for, and a smaller one is always safe.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 3. Now notice what has and hasn't been proved.</div>
        <div class="sstep-body">
          <p>We handled <em>one</em> \(\varepsilon\). The definition demands all of them. Your reading: "What makes
            this situation more difficult is that we must be able to do this for any \(\varepsilon &gt; 0\)."</p>
          <p>This is the same trap as Day 18's flawed argument, in a new setting. Meeting one tolerance establishes
            nothing on its own; the deliverable is a <em>rule</em> converting any \(\varepsilon\) into a \(\delta\).
          </p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 4. What a complete proof looks like, on an easier function.</div>
        <div class="sstep-body">
          <p>Your reading's Example 8.1.8, for \(f(x) = x\):</p>
          <p><em>Proof.</em> Let \(\varepsilon &gt; 0\). Let \(\delta = \varepsilon\). If \(|x - a| &lt; \delta\)
            then \(|f(x) - f(a)| = |x - a| &lt; \varepsilon\). Hence \(f\) is continuous at \(a\). \(\blacksquare\)</p>
          <p>Three parts, exactly as with sequences: accept \(\varepsilon\), name \(\delta\), verify. And \(\delta\) is
            given as a <em>formula in \(\varepsilon\)</em>, which is what makes it a proof rather than one lucky
            case.</p>
          <p>The reading anticipates the objection &mdash; that for a straight line this is obviously true and the
            proof is pointless: "The point behind the definition is that we can back up your intuition in a rigorous
            manner." The functions where intuition fails are coming, and the machinery has to be tested somewhere
            safe first.</p>
        </div>
      </li>
    </ol>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Weierstrass's monster</h2>

  <p>Before the rigorous definition, one would surely think a continuous curve must be smooth <em>somewhere</em>. It
    might have corners, even many of them &mdash; but surely a tangent line exists at some point.</p>

  <p>In 1872 Weierstrass exhibited</p>

  \[ f(x) = \sum_{n=0}^{\infty}b^n\cos(a^n\pi x) \]

  <p>which, when \(a\) is an odd integer, \(b \in (0,1)\), and \(ab &gt; 1 + \frac{3}{2}\pi\), is continuous
    everywhere and differentiable <strong>nowhere</strong>. Here it is being built. (Your problem set uses \(b =
    \frac12\); this demonstration uses \(b = 0.6\) so the parameters are yours to work out.)</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d22-wn">Terms \(N\)</label>
      <input type="range" id="d22-wn" min="0" max="14" step="1" value="3">
    </div>
    <div class="ctl">
      <label for="d22-wz">Zoom into the origin</label>
      <input type="range" id="d22-wz" min="0" max="40" step="1" value="0">
    </div>
  </div>

  <canvas class="plot" id="d22-weier"></canvas>
  <div class="readout" id="d22-weier-out"></div>

  <p>Each new term adds wrinkles at a smaller scale, with amplitude falling by a factor of \(b\) but frequency rising
    by a factor of \(a\). Because \(ab &gt; 1\), the <em>slopes</em> get steeper even as the bumps get shorter &mdash;
    which is the whole trick. Amplitude shrinking fast enough gives continuity; slope growing gives non-differentiability.</p>

  <p>Now zoom. The magnified curve looks like the original: no amount of magnification ever reveals a smooth patch. A
    tangent line is a claim that the curve looks straight up close, and this one never does.</p>

  <p>Your reading's conclusion: "it is clear that a definition of continuity relying on intuition is inadequate to
    study it." Intuition says continuous curves are mostly smooth. Intuition is wrong &mdash; and in a sense that can
    be made precise, functions like this one are <em>typical</em> among continuous functions, while the smooth ones are
    the rare exceptions.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Euler's definition, and what broke it</h2>

  <p>In 1748 Euler defined continuity like this:</p>

  <blockquote class="source">
    A continuous curve is one such that its nature can be expressed by a single function of \(x\). If a curve is of
    such a nature that for its various parts different functions of \(x\) are required for its expression, then we call
    such a curve discontinuous.
    <cite>Euler, 1748</cite>
  </blockquote>

  <p><strong>Click the assumption this definition depends on that turned out to be false.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">A curve given by a single formula, like \(y = x^2\), has no jumps.</button>
      <button class="fline" type="button">A curve defined piecewise, with different formulas on different parts, may
        well have a jump where the pieces meet.</button>
      <button class="fline" type="button">So "given by a single formula" and "has no jumps" are the same thing, and
        either may be used as the definition.</button>
      <button class="fline" type="button">Therefore continuity is a property of how a function is
        <em>written</em>.</button>
      <button class="fline" type="button">And so a single infinite series, being one expression, defines a continuous
        curve.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>True of the formulas available to Euler.</strong> Polynomials, exponentials, trigonometric functions
        and their combinations are continuous where defined &mdash; which is exactly why the definition held up for
        eighty years.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Often true, and the source of the intuition.</strong> Piecewise definitions are how one usually writes
        down a jump. Note "may well" is doing quiet work here &mdash; it does not follow that piecewise definitions
        <em>must</em> jump, and indeed \(|x|\) is piecewise and perfectly continuous.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>That's the false equivalence, and Fourier destroyed it.</strong></p>
      <p>Day 16's series is a <em>single expression</em>:</p>
      \[ \frac{4}{\pi}\sum_{k=0}^{\infty}\frac{(-1)^k}{2k+1}\cos((2k+1)\pi x) \]
      <p>one formula, no cases &mdash; and it defines a function with a jump. By Euler's definition it is continuous.
        By any reasonable meaning of the word it is not.</p>
      <p>The deeper error is one of category. Euler's definition is about <em>notation</em>: how the function is
        written down. Continuity ought to be about the <em>function</em>: how its values behave. Those coincided for
        the functions of 1748 and came apart as soon as infinite processes were allowed in.</p>
      <p>Bolzano's 1817 formulation is the fix, and it mentions no formulas at all &mdash; only values of \(f\) at
        nearby points. Which is why it survives contact with \(x\sin(1/x)\), with Dirichlet's function, and with
        Weierstrass's monster, none of which Euler could have imagined.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>The consequence, and stating it baldly shows how strange it is.</strong> On this view, rewriting a
        function could change whether it is continuous &mdash; \(|x|\) is one expression or two depending on how you
        write it. A definition that depends on notation is not describing the object.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>Exactly the case that killed the definition.</strong> The Fourier series is one expression and jumps.
        Notice this is Day 16's discovery seen from a different angle: there we asked how continuous functions could
        sum to a discontinuous one; here we ask what it did to the definition of continuity itself.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on the definition</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">In the definition, which quantity is chosen first, and what may the other depend on?</p>
    <button class="mc-opt" type="button" data-key="a">\(\delta\) first; \(\varepsilon\) may depend on it.</button>
    <button class="mc-opt" type="button" data-key="b">\(\varepsilon\) first; \(\delta\) may depend on \(\varepsilon\)
      and on \(a\).</button>
    <button class="mc-opt" type="button" data-key="c">They are chosen independently.</button>
    <div class="mc-fb" data-key="a">Reversed. The challenge comes first and the response answers it.</div>
    <div class="mc-fb" data-key="b">Correct, and both dependencies matter. \(\delta\) may use \(\varepsilon\) &mdash;
      that's the point &mdash; and it may also depend on <em>where</em> you are, which is why continuity is defined
      point by point. When you later require a single \(\delta\) to work at every \(a\) at once, you get a stronger
      property with its own name.</div>
    <div class="mc-fb" data-key="c">If \(\delta\) couldn't depend on \(\varepsilon\), essentially nothing would be
      continuous.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Whose definition is this, historically?</p>
    <button class="mc-opt" type="button" data-key="a">Cauchy's, from the <em>Cours d'analyse</em> of 1821.</button>
    <button class="mc-opt" type="button" data-key="b">Bolzano's, from 1817.</button>
    <button class="mc-opt" type="button" data-key="c">Weierstrass's, from 1859 &mdash; though Bolzano got there first
      in substance and Cauchy usually gets the credit.</button>
    <div class="mc-fb" data-key="a">Cauchy's version is close but, as your reading says, "not quite tight enough for
      modern standards." He gets the credit largely because Bolzano's paper wasn't widely read.</div>
    <div class="mc-fb" data-key="b">Bolzano had the substance in 1817 &mdash; \(|f(x)-f(a)|\) smaller than any given
      quantity provided \(|x-a|\) is small enough &mdash; but the fully modern statement came later.</div>
    <div class="mc-fb" data-key="c">Correct. A useful reminder that credit and priority often diverge: Bolzano was
      first, Cauchy is cited, Weierstrass finished it.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">How does Bolzano's phrasing differ from Leibniz's infinitesimals, given they sound so alike?</p>
    <button class="mc-opt" type="button" data-key="a">Bolzano's \(|x-a|\) is always an ordinary real number, named
      <em>after</em> the challenge; Leibniz's \(\mathrm{d}x\) was to be smaller than every real number at once.</button>
    <button class="mc-opt" type="button" data-key="b">They don't differ; Bolzano used infinitesimals too.</button>
    <button class="mc-opt" type="button" data-key="c">Bolzano's applies only to polynomials.</button>
    <div class="mc-fb" data-key="a">Correct, and the order of quantifiers is the whole difference. Name \(b\) first,
      then choose \(x\) &mdash; and \(|x-a|\) is a perfectly ordinary small real number. Leibniz wanted one quantity
      beating all \(b\) simultaneously, which Day 4 showed is impossible in \(\mathbb{R}\).</div>
    <div class="mc-fb" data-key="b">Your reading is explicit: "Infinitesimals have no place in Bolzano's
      construction."</div>
    <div class="mc-fb" data-key="c">It applies to any function whatsoever &mdash; that generality is its point.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">What did Weierstrass's 1872 function refute?</p>
    <button class="mc-opt" type="button" data-key="a">That continuous functions exist.</button>
    <button class="mc-opt" type="button" data-key="b">That a function continuous on an interval must be differentiable
      somewhere on it.</button>
    <button class="mc-opt" type="button" data-key="c">That differentiable functions are continuous.</button>
    <div class="mc-fb" data-key="a">It <em>is</em> a continuous function, so it rather confirms they exist.</div>
    <div class="mc-fb" data-key="b">Correct &mdash; the conjecture stated in your reading. Continuity everywhere,
      differentiability nowhere. Not at one bad point, not on a small set: nowhere at all.</div>
    <div class="mc-fb" data-key="c">That implication is true and remains true.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Your reading wonders whether real-world motion might be "tiny jerks too small to detect" &mdash; making
      physical space more like \(\mathbb{Q}\) than \(\mathbb{R}\). We postulate continuity instead. What are we
      committing to, and could an experiment ever tell the difference?</li>
    <li>Euler's definition made continuity a property of notation. Are there other mathematical properties you can
      think of that are secretly about how something is written rather than what it is?</li>
    <li>In the \(\varepsilon\)&ndash;\(\delta\) widget, move \(a\) around for \(x^2\) with \(\varepsilon\) fixed. Does
      the \(\delta\) you need change? What does that suggest about \(\delta\) depending on \(a\) as well as
      \(\varepsilon\)?</li>
    <li>Weierstrass's function is continuous and nowhere differentiable, and such functions turn out to be typical
      rather than exceptional. Does that change what you think the word "curve" means?</li>
  </ol>
</div>

<script>
  (function () {
    var FNS = [
      { label: 'x²', f: function (x) { return x * x; }, ylo: -1, yhi: 9 },
      { label: '√x   (for x ≥ 0)', f: function (x) { return x >= 0 ? Math.sqrt(x) : NaN; }, ylo: -0.5, yhi: 2.4 },
      { label: 'sin x', f: Math.sin, ylo: -1.6, yhi: 1.6 },
      { label: '1/x   (x ≠ 0)', f: function (x) { return Math.abs(x) < 1e-9 ? NaN : 1 / x; }, ylo: -6, yhi: 6 },
      {
        label: 'jump at x = 1', f: function (x) { return x < 1 ? x : x + 1.5; }, ylo: -2.5, yhi: 5,
        jump: true
      }
    ];

    var sel = document.getElementById('d22-fn'),
      aIn = document.getElementById('d22-a'),
      eIn = document.getElementById('d22-eps'),
      canvas = document.getElementById('d22-canvas'),
      out = document.getElementById('d22-out');

    FNS.forEach(function (fn, i) {
      var o = document.createElement('option');
      o.value = String(i); o.textContent = fn.label;
      sel.appendChild(o);
    });

    function draw() {
      var fn = FNS[+sel.value], a = +aIn.value, eps = Math.pow(10, +eIn.value);
      var fa = fn.f(a);

      var d = M411.hidpi(canvas, 330), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 50, padR = 20, padT = 18, padB = 32;
      var xlo = -2.6, xhi = 3.6;
      function X(x) { return padL + (x - xlo) / (xhi - xlo) * (W - padL - padR); }
      function Y(y) { return padT + (fn.yhi - y) / (fn.yhi - fn.ylo) * (H - padT - padB); }

      if (!isFinite(fa)) {
        ctx.fillStyle = M411.colors.muted; ctx.font = '14px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('f is not defined at a = ' + a.toFixed(2), W / 2, H / 2);
        out.innerHTML = '<p>\\(f\\) is not defined at \\(a = ' + a.toFixed(2) + '\\), so continuity at that point ' +
          'is not even a question we can ask. Move \\(a\\).</p>';
        M411.typeset(out);
        return;
      }

      // Largest delta that works: walk outward from a until f leaves the band.
      var STEP = 0.0004, MAXD = 3.0, delta = MAXD;
      for (var t = STEP; t <= MAXD; t += STEP) {
        var bad = false;
        [a + t, a - t].forEach(function (x) {
          var v = fn.f(x);
          if (isFinite(v) && Math.abs(v - fa) >= eps) bad = true;
        });
        if (bad) { delta = t; break; }
      }

      // grid + axes
      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = Math.ceil(xlo); g <= xhi; g++) { ctx.beginPath(); ctx.moveTo(X(g), padT); ctx.lineTo(X(g), H - padB); ctx.stroke(); }
      ctx.strokeStyle = '#999'; ctx.lineWidth = 1.3;
      if (0 > fn.ylo && 0 < fn.yhi) { ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke(); }

      // epsilon band (horizontal)
      ctx.fillStyle = 'rgba(0,133,82,0.14)';
      ctx.fillRect(padL, Y(fa + eps), W - padL - padR, Math.max(Y(fa - eps) - Y(fa + eps), 1));
      // delta strip (vertical)
      ctx.fillStyle = 'rgba(243,110,36,0.16)';
      ctx.fillRect(X(a - delta), padT, Math.max(X(a + delta) - X(a - delta), 1), H - padT - padB);

      // the function, drawn in pieces so jumps and poles aren't bridged
      ctx.strokeStyle = '#333'; ctx.lineWidth = 2.2;
      ctx.beginPath();
      var started = false, prev = null;
      for (var i = 0; i <= 1400; i++) {
        var x = xlo + (xhi - xlo) * i / 1400, y = fn.f(x);
        if (!isFinite(y) || y < fn.ylo - 30 || y > fn.yhi + 30 ||
          (prev !== null && Math.abs(y - prev) > (fn.yhi - fn.ylo) * 0.25)) {
          started = false; prev = isFinite(y) ? y : null; continue;
        }
        started ? ctx.lineTo(X(x), Y(y)) : (ctx.moveTo(X(x), Y(y)), started = true);
        prev = y;
      }
      ctx.stroke();

      // the point
      ctx.fillStyle = M411.colors.check;
      ctx.beginPath(); ctx.arc(X(a), Y(fa), 5, 0, 2 * Math.PI); ctx.fill();

      ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = M411.colors.scaffold; ctx.fillText('f(a) ± ε', padL + 4, Y(fa + eps) - 5);
      ctx.fillStyle = M411.colors.check; ctx.textAlign = 'center';
      ctx.fillText('a ± δ', X(a), H - padB + 14);

      var msg;
      if (delta >= MAXD) {
        msg = '<p><strong style="color:var(--a411-scaffold)">Any \\(\\delta\\) works</strong> &mdash; the graph never ' +
          'leaves the band anywhere in view. Shrink \\(\\varepsilon\\) to make the adversary\'s challenge bite.</p>';
      } else if (delta > STEP * 2) {
        msg = '<p><strong style="color:var(--a411-scaffold)">Challenge met.</strong> Taking \\(\\delta = ' +
          delta.toFixed(4) + '\\), every \\(x\\) with \\(|x - a| &lt; \\delta\\) has \\(|f(x) - f(a)| &lt; ' +
          '\\varepsilon\\). Any smaller \\(\\delta\\) works too.</p>' +
          '<p>Halve \\(\\varepsilon\\) and watch \\(\\delta\\) shrink in response. Continuity at \\(a\\) is the ' +
          'claim that this never fails, however small the band gets.</p>';
      } else {
        msg = '<p><strong style="color:#d9534f">No \\(\\delta\\) works.</strong> Every strip around \\(a\\), however ' +
          'narrow, contains points whose values escape the band. The function is <em>not</em> continuous at ' +
          '\\(a = ' + a.toFixed(2) + '\\).</p>' +
          '<p>One failed \\(\\varepsilon\\) is enough &mdash; the definition asks for all of them.</p>';
      }

      out.innerHTML = '<p>\\(a = ' + a.toFixed(2) + '\\), \\(f(a) = ' + fa.toFixed(4) + '\\), \\(\\varepsilon = ' +
        eps.toFixed(4) + '\\).</p>' + msg;
      M411.typeset(out);
    }
    sel.addEventListener('change', draw);
    aIn.addEventListener('input', draw);
    eIn.addEventListener('input', draw);

    /* ---------------- Weierstrass ---------------- */
    // b = 0.6 with a = 11 satisfies ab > 1 + 3*pi/2; the problem set uses b = 1/2,
    // so the parameters there are left for the student to work out.
    var WA = 11, WB = 0.6;
    var wnIn = document.getElementById('d22-wn'),
      wzIn = document.getElementById('d22-wz'),
      wCan = document.getElementById('d22-weier'),
      wOut = document.getElementById('d22-weier-out');

    function weier(x, N) {
      var s = 0;
      for (var n = 0; n <= N; n++) s += Math.pow(WB, n) * Math.cos(Math.pow(WA, n) * Math.PI * x);
      return s;
    }

    function drawW() {
      var N = +wnIn.value, z = Math.pow(10, +wzIn.value / 14);
      var half = 1 / z;

      var d = M411.hidpi(wCan, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 46, padR = 20, padT = 18, padB = 32;
      function X(x) { return padL + (x + half) / (2 * half) * (W - padL - padR); }

      // vertical range from what's actually there
      var vals = [];
      for (var i = 0; i <= 3000; i++) vals.push(weier(-half + 2 * half * i / 3000, N));
      var lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals);
      var pad = (hi - lo) * 0.15 || 0.5; lo -= pad; hi += pad;
      function Y(y) { return padT + (hi - y) / (hi - lo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = 0; g <= 4; g++) {
        var v = lo + (hi - lo) * g / 4;
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(v.toFixed(2), padL - 8, Y(v) + 4);
      }

      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 1.6;
      ctx.beginPath();
      var M = 6000;
      for (var j = 0; j <= M; j++) {
        var x = -half + 2 * half * j / M, y = weier(x, N);
        j ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y));
      }
      ctx.stroke();

      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('x ∈ [−' + half.toExponential(1) + ', ' + half.toExponential(1) + ']', (padL + W - padR) / 2, H - 9);

      wOut.innerHTML =
        '<p>\\(a = ' + WA + '\\), \\(b = ' + WB + '\\), so \\(ab = ' + (WA * WB).toFixed(1) +
        ' &gt; 1 + \\frac{3\\pi}{2} \\approx 5.712\\) &mdash; the criterion holds, so this function is continuous ' +
        'everywhere and differentiable nowhere.</p>' +
        '<p>Showing ' + (N + 1) + ' term' + (N ? 's' : '') + '. The \\(n\\)th term has amplitude \\(' +
        Math.pow(WB, N).toExponential(2) + '\\) and frequency \\(' + Math.pow(WA, N).toExponential(2) +
        '\\); their ratio &mdash; roughly the slope it contributes &mdash; is \\(' +
        Math.pow(WA * WB, N).toExponential(2) + '\\), and grows without bound.</p>' +
        '<p>That is the mechanism in one line: <em>amplitudes shrink, slopes grow</em>. The first gives continuity, ' +
        'the second destroys differentiability, and \\(ab &gt; 1\\) is exactly the condition that lets both happen ' +
        'at once.</p>';
      M411.typeset(wOut);
    }
    wnIn.addEventListener('input', drawW);
    wzIn.addEventListener('input', drawW);

    M411.onResize(function () { draw(); drawW(); });
    draw();
    drawW();
  })();
</script>
