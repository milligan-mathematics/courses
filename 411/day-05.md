---
layout: day
title: "MATH 411 Day 5: Newton and Leibniz"
day: 5
chapter_number: 3
chapter: "Calculus in the 17th and 18th Centuries"
day_title: "Newton and Leibniz"
blurb: "Two founders, two shaky arguments for the product rule, and one piece of notation so good we kept it for three hundred years after abandoning the ideas behind it."
reading: "Section 3.1, from Leibniz's 1684 paper through the derivation of Snell's Law"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The L-shaped region, and the corner Leibniz threw away</h2>

  <p>Leibniz reads \(p = xv\) as the area of a rectangle. Nudge \(x\) by \(\mathrm{d}x\) and \(v\) by \(\mathrm{d}v\),
    and the extra area is an L-shape made of three pieces:</p>

  \[ \mathrm{d}(xv) = \underbrace{x\,\mathrm{d}v}_{\text{top strip}} +
  \underbrace{v\,\mathrm{d}x}_{\text{side strip}} + \underbrace{\mathrm{d}x\,\mathrm{d}v}_{\text{corner}} \]

  <p>He then discards the corner, and the product rule falls out. Shrink the increments and watch what happens to
    that corner &mdash; not just in absolute size, but <em>relative to the strips</em>, which is the claim that
    actually matters.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d5-h">Increment size (log scale)</label>
      <input type="range" id="d5-h" min="-6" max="-0.2" step="0.05" value="-0.5">
    </div>
  </div>

  <canvas class="plot" id="d5-canvas"></canvas>
  <div class="readout" id="d5-out"></div>

  <p>The corner isn't merely small &mdash; it shrinks <em>quadratically</em> while the strips shrink linearly, so their
    ratio goes to zero. That is the real content of Leibniz's phrase "even more infinitely small," and it is why the
    answer comes out right.</p>

  <p>But notice what has and hasn't been established. Watching a ratio head toward zero is not the same as it
    <em>being</em> zero, and Leibniz did not have the vocabulary to say the difference. Your reading is blunt about
    it:</p>

  <blockquote class="source">
    It is logically untenable to toss aside an expression just because it is small. Even less so should we be willing
    to ignore an expression on the grounds that it is "infinitely smaller" than another quantity which is itself
    "infinitely small."
  </blockquote>

  <p>Everything in this course from Chapter 6 onward exists to turn the animation above into a sentence that can be
    defended.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Newton's product rule, and the number \(\tfrac12\)</h2>

  <p>Newton gave a different argument in the <em>Principia</em> &mdash; one that appears to avoid throwing anything
    away. Instead of nudging \(x\) and \(v\) forwards, he nudges them <em>half</em> forwards and <em>half</em>
    backwards, and subtracts.</p>

  <p><strong>Click the line that claims more than it has earned.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Increment: \(\left(x+\frac{\Delta x}{2}\right)\left(v+\frac{\Delta
        v}{2}\right) = xv + x\frac{\Delta v}{2} + v\frac{\Delta x}{2} + \frac{\Delta x \Delta v}{4}\).</button>
      <button class="fline" type="button">Decrement: \(\left(x-\frac{\Delta x}{2}\right)\left(v-\frac{\Delta
        v}{2}\right) = xv - x\frac{\Delta v}{2} - v\frac{\Delta x}{2} + \frac{\Delta x \Delta v}{4}\).</button>
      <button class="fline" type="button">Subtracting, the \(xv\) terms and the \(\frac{\Delta x \Delta v}{4}\) terms
        both cancel: \(\Delta R = x\Delta v + v\Delta x\).</button>
      <button class="fline" type="button">So the Product Rule has been derived exactly, with no infinitesimals and
        nothing discarded &mdash; a rigorous improvement on Leibniz.</button>
      <button class="fline" type="button">Hence Newton's foundation for calculus was sound where Leibniz's was
        not.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct as written.</strong> Straight expansion of a product. Note the \(\frac{\Delta x\Delta v}{4}\)
        on the end &mdash; the same second-order term Leibniz had to discard. It hasn't gone anywhere yet.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Also correct.</strong> And here is the crucial detail: the second-order term comes out
        <em>positive</em> again, because \(\left(-\frac{\Delta x}{2}\right)\left(-\frac{\Delta v}{2}\right)\) is a
        product of two negatives. That sign is what makes the next line work.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>The arithmetic is right.</strong> Both second-order terms are \(+\frac{\Delta x\Delta v}{4}\), so
        subtracting kills them exactly. Nothing was approximated. So far, so good &mdash; which is exactly why the next
        line is so tempting.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>There it is.</strong> The cancellation was not a discovery about products; it was a consequence of
        splitting the increment <em>symmetrically</em>. Your reading says so directly: "it relies heavily on the number
        \(1/2\) to make it work. If we take any other increments in \(x\) and \(v\) whose total lengths are \(\Delta
        x\) and \(\Delta v\) it will simply not work. Try it and see."</p>
      <p>So try it. Split the increment as \(t\) forward and \(1-t\) backward, with the total still \(\Delta x\):</p>
      <div class="ctl-row">
        <div class="ctl">
          <label for="d5-t">Forward fraction \(t\)</label>
          <input type="range" id="d5-t" min="0" max="1" step="0.01" value="0.5">
        </div>
      </div>
      <div class="readout" id="d5-newton"></div>
      <p>The leftover is \((2t-1)\,\Delta x\,\Delta v\), which vanishes at \(t = \tfrac12\) and at no other value.
        Newton did not eliminate the second-order term &mdash; he chose the one split that hides it. The error is still
        there; it has been arranged to cancel against itself.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>A consequence of the overreach on line (4), not the overreach itself.</strong></p>
      <p>Worth being fair to Newton, though, as your reading is: he wasn't attempting a foundation here. The
        <em>Principia</em> is a physics book, and he was giving a convincing demonstration, not a proof. Both men knew
        their arguments had gaps. Both were right that the methods worked. Neither could say why, and closing that gap
        took another 150 years.</p>
    </div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Leibniz derives Snell's Law</h2>

  <p>Leibniz needed to show his calculus was worth the philosophical trouble, so he applied it to a real problem: light
    travels through air at speed \(v_a\) and through water at speed \(v_w\); by Fermat's Principle of Least Time it
    takes the <em>fastest</em> path from \(A\) to \(B\). What path is that?</p>

  <p>This is a modelling problem before it is a calculus problem, and the modelling is where people get stuck. Work it
    on paper, then check.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole derivation</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1. What is the unknown? (Careful &mdash; it is not "the path.")</div>
        <div class="sstep-body">
          <p>In each medium the speed is constant, and the fastest route between two points at constant speed is a
            straight line. So the path is two straight segments, and the <em>only</em> freedom left is where they meet
            at the surface.</p>
          <p>Call that crossing point \(x\), measured along the surface. One number now determines the whole path. This
            reduction &mdash; from "find a curve" to "find a number" &mdash; is the entire modelling insight.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2. Write the travel time as a function of \(x\).</div>
        <div class="sstep-body">
          <p>Time is distance over velocity, and the distances are hypotenuses. With \(A\) at height \(a\) above the
            surface, \(B\) at depth \(b\) below it, and horizontal separation \(c\):</p>
          \[ T = \frac{\sqrt{x^2+a^2}}{v_a} + \frac{\sqrt{(c-x)^2+b^2}}{v_w} \]
          <p>The first term is the trip through air, the second through water. Every symbol except \(x\) is a
            constant.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3. Differentiate &mdash; in Leibniz's notation.</div>
        <div class="sstep-body">
          \[ \mathrm{d}T = \left(\frac{1}{v_a}\frac{x}{\sqrt{x^2+a^2}} - \frac{1}{v_w}\frac{c-x}{\sqrt{(c-x)^2+b^2}}
          \right)\mathrm{d}x \]
          <p>Note the minus sign: it comes from the inner \((c-x)\), whose differential is \(-\mathrm{d}x\). Missing it
            is the standard way to lose this problem.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4. Impose the minimum.</div>
        <div class="sstep-body">
          <p>At a minimum, \(\mathrm{d}T = 0\). Since \(\mathrm{d}x \ne 0\), the bracket must vanish:</p>
          \[ \frac{1}{v_a}\frac{x}{\sqrt{x^2+a^2}} = \frac{1}{v_w}\frac{c-x}{\sqrt{(c-x)^2+b^2}} \]
          <p>Look closely at that reasoning, because it is pure eighteenth century: \(\mathrm{d}T\) is a product of a
            bracket and \(\mathrm{d}x\); \(\mathrm{d}x\) is not zero; therefore the bracket is zero. A modern treatment
            says \(T'(x) = 0\) and never mentions a nonzero infinitesimal. Same answer, different licence.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 5. Recognise the trigonometry.</div>
        <div class="sstep-body">
          <p>Now read the fractions geometrically. In the air triangle, \(x\) is the side opposite the angle
            \(\theta_a\) from the vertical, and \(\sqrt{x^2+a^2}\) is the hypotenuse &mdash; so that quotient is
            \(\sin\theta_a\). Likewise the water side gives \(\sin\theta_w\). Therefore</p>
          \[ \frac{\sin\theta_a}{v_a} = \frac{\sin\theta_w}{v_w} \]
          <p>which is Snell's Law. \(\blacksquare\)</p>
          <p>A law discovered empirically by experiment, dropping out of a minimisation. That is the demonstration
            Leibniz needed &mdash; and it's the same law Johann Bernoulli will pick up on Day 6 to solve a problem
            nobody could touch.</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Notation that outlived its meaning</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">To Leibniz, what was the symbol \(\frac{\mathrm{d}y}{\mathrm{d}x}\)?</p>
    <button class="mc-opt" type="button" data-key="a">Notation for a limit of difference quotients.</button>
    <button class="mc-opt" type="button" data-key="b">An honest quotient &mdash; one infinitesimal divided by
      another.</button>
    <button class="mc-opt" type="button" data-key="c">Shorthand for "the derivative operator applied to \(y\)."</button>
    <div class="mc-fb" data-key="a">That's the modern reading, and it came much later. Your reading is explicit:
      "Leibniz and his contemporaries would have viewed the symbol as an actual quotient of infinitesimals, whereas
      today we define it via the limit concept."</div>
    <div class="mc-fb" data-key="b">Correct, and it explains a great deal. If \(\frac{\mathrm{d}y}{\mathrm{d}x}\) is a
      real fraction, then the Chain Rule is just cancelling, and separating variables in a differential equation is just
      multiplying through. The notation was designed to make those moves look obvious &mdash; and it still does, which
      is exactly why we kept it.</div>
    <div class="mc-fb" data-key="c">The operator view is later still. And note the word "derivative" wasn't coined until
      1797, by Lagrange &mdash; more than a century after the 1684 paper.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Leibniz drops \(\mathrm{d}x\,\mathrm{d}v\) from the product rule. What is the strongest honest
      defence of that move?</p>
    <button class="mc-opt" type="button" data-key="a">It equals zero.</button>
    <button class="mc-opt" type="button" data-key="b">It's small, and small quantities can be neglected.</button>
    <button class="mc-opt" type="button" data-key="c">Its ratio to the terms being kept tends to zero &mdash; though
      saying that precisely needs limits, which he didn't have.</button>
    <div class="mc-fb" data-key="a">It isn't zero. It's a product of two things Leibniz insisted were nonzero &mdash;
      and if it were zero, dividing by \(\mathrm{d}x\) elsewhere would be illegal.</div>
    <div class="mc-fb" data-key="b">This is the argument the reading explicitly rejects, quoting Newton: "The smallest
      errors may not, in mathematical matters, be scorned." Smallness alone licenses nothing.</div>
    <div class="mc-fb" data-key="c">Correct, and it's the right way to hold the whole chapter: the eighteenth-century
      answers were <em>right</em>, and the justifications were <em>unavailable</em>. The widget at the top of this page
      shows the ratio collapsing; the machinery to say what that means arrives in Chapter 6.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">What was a "fluxion" in Newton's method?</p>
    <button class="mc-opt" type="button" data-key="a">The rate of change of a quantity he pictured as flowing in
      time.</button>
    <button class="mc-opt" type="button" data-key="b">An infinitely small increment, the same as Leibniz's
      \(\mathrm{d}x\).</button>
    <button class="mc-opt" type="button" data-key="c">The area under a curve.</button>
    <div class="mc-fb" data-key="a">Correct. Newton's variables were <em>fluents</em> &mdash; quantities flowing in time
      &mdash; and their rates of change were <em>fluxions</em>. The whole conception is kinematic, which is why the
      hole-free number line mattered so much to him: continuous motion can't jump gaps.</div>
    <div class="mc-fb" data-key="b">Close but crossed over. The infinitesimal increment is Leibniz's idea; Newton's
      organising picture was motion and rates, not static infinitely small differences.</div>
    <div class="mc-fb" data-key="c">That's closer to the integral. A fluxion is a rate.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Leibniz states his rules "without proof," saying the demonstration "will be easy to one who is
      experienced in such matters." What does the reading make of that?</p>
    <button class="mc-opt" type="button" data-key="a">That he was bluffing and had no arguments.</button>
    <button class="mc-opt" type="button" data-key="b">That his audience was expected to reconstruct them &mdash; and
      that the intuitive reconstructions really are available.</button>
    <button class="mc-opt" type="button" data-key="c">That the rules were empirical guesses from examples.</button>
    <div class="mc-fb" data-key="a">The reading goes on to supply exactly the reconstructions he had in mind: \(d(c) = c
      - c = 0\), and \(d(x+y) = dx+dy\) as an extension of \((x_2+y_2)-(x_1+y_1)=(x_2-x_1)+(y_2-y_1)\).</div>
    <div class="mc-fb" data-key="b">Correct &mdash; and it's Lesson Two from Day 1 in its historical form. Skipped steps
      are an invitation, and reconstructing them is how you learn to trust the machinery. Leibniz's audience took that
      as a matter of course.</div>
    <div class="mc-fb" data-key="c">Not guesses. Each rule has a short intuitive derivation from differences, which is
      precisely why he thought stating them was enough.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Newton's \(\tfrac12\) makes the second-order term cancel. Is there any principled reason to split symmetrically,
      or is it reverse-engineered from the answer he wanted? Does it matter which?</li>
    <li>The reading says these methods gave "verifiably correct answers to problems which had, heretofore, been
      completely intractable." How do you <em>verify</em> an answer produced by a method you can't justify? What
      counted as verification in 1690?</li>
    <li>Leibniz's notation survived the collapse of the ideas behind it. Name another piece of mathematical notation
      that carries a picture we no longer literally believe. Is that a problem?</li>
    <li>Snell's Law was known experimentally before Leibniz derived it. What does a derivation add, if the law was
      already known to be true?</li>
  </ol>
</div>

<script>
  (function () {
    /* ---------------- The L-shaped region ---------------- */
    var hIn = document.getElementById('d5-h'),
      canvas = document.getElementById('d5-canvas'),
      out = document.getElementById('d5-out');
    var X0 = 3, V0 = 2;   // the base rectangle, x by v

    function draw() {
      var h = Math.pow(10, +hIn.value);
      var dx = X0 * h, dv = V0 * h;

      var d = M411.hidpi(canvas, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      // Scale so the *incremented* rectangle always fills the frame. Once the
      // increments get small the strips are invisible at true scale, so the
      // numbers below carry the quantitative story and the picture carries the shape.
      var pad = 46;
      var sx = (W - 2 * pad) / (X0 + dx), sy = (H - 2 * pad) / (V0 + dv);
      var ox = pad, oy = H - pad;
      function PX(x) { return ox + x * sx; }
      function PY(v) { return oy - v * sy; }

      // base rectangle xv
      ctx.fillStyle = '#eef1f4';
      ctx.fillRect(PX(0), PY(V0), X0 * sx, V0 * sy);
      // top strip x dv
      ctx.fillStyle = 'rgba(0,156,222,0.45)';
      ctx.fillRect(PX(0), PY(V0 + dv), X0 * sx, dv * sy);
      // side strip v dx
      ctx.fillStyle = 'rgba(0,133,82,0.45)';
      ctx.fillRect(PX(X0), PY(V0), dx * sx, V0 * sy);
      // corner dx dv
      ctx.fillStyle = 'rgba(243,110,36,0.9)';
      ctx.fillRect(PX(X0), PY(V0 + dv), dx * sx, dv * sy);

      ctx.strokeStyle = '#aab'; ctx.lineWidth = 1;
      ctx.strokeRect(PX(0), PY(V0 + dv), (X0 + dx) * sx, (V0 + dv) * sy);

      ctx.font = '12px sans-serif'; ctx.fillStyle = '#555'; ctx.textAlign = 'center';
      ctx.fillText('xv', PX(X0 / 2), PY(V0 / 2));
      if (dv * sy > 14) { ctx.fillStyle = '#0673a1'; ctx.fillText('x dv', PX(X0 / 2), PY(V0 + dv / 2) + 4); }
      if (dx * sx > 26) { ctx.fillStyle = '#00623c'; ctx.fillText('v dx', PX(X0 + dx / 2), PY(V0 / 2)); }

      // always label the corner, with a leader line once it is too small to hold text
      var cx = PX(X0 + dx / 2), cy = PY(V0 + dv / 2);
      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + 40, cy - 34); ctx.stroke();
      ctx.fillStyle = M411.colors.check; ctx.textAlign = 'left'; ctx.font = 'bold 12px sans-serif';
      ctx.fillText('dx dv', cx + 44, cy - 32);

      var strips = X0 * dv + V0 * dx, corner = dx * dv;
      out.innerHTML =
        '<p>With \\(x = 3\\), \\(v = 2\\), \\(\\mathrm{d}x = ' + dx.toExponential(2) +
        '\\), \\(\\mathrm{d}v = ' + dv.toExponential(2) + '\\):</p>' +
        '<p>strips \\(x\\,\\mathrm{d}v + v\\,\\mathrm{d}x = ' + strips.toExponential(4) + '\\)<br>' +
        'corner \\(\\mathrm{d}x\\,\\mathrm{d}v = ' + corner.toExponential(4) + '\\)</p>' +
        '<p class="big">ratio \\(= ' + (corner / strips).toExponential(3) + '\\)</p>' +
        '<p>Shrink the increments by a factor of ten and the strips shrink by ten, while the corner shrinks by a ' +
        'hundred. The ratio drops by ten every time.</p>';
      M411.typeset(out);
    }
    hIn.addEventListener('input', draw);
    M411.onResize(draw);
    draw();

    /* ---------------- Newton's split parameter ---------------- */
    // This control lives inside a flaw verdict, which starts hidden; it is wired
    // up at load regardless, since the elements exist either way.
    var tIn = document.getElementById('d5-t'),
      nOut = document.getElementById('d5-newton');

    function newton() {
      var t = +tIn.value, DX = 0.1, DV = 0.2;
      var leftover = (2 * t - 1) * DX * DV;
      var main = X0 * DV + V0 * DX;
      nOut.innerHTML =
        '<p>With \\(\\Delta x = 0.1\\), \\(\\Delta v = 0.2\\), \\(x = 3\\), \\(v = 2\\), forward fraction \\(t = ' +
        t.toFixed(2) + '\\):</p>' +
        '<p>\\(\\Delta R = \\underbrace{x\\Delta v + v\\Delta x}_{' + main.toFixed(3) + '} + ' +
        '\\underbrace{(2t-1)\\,\\Delta x\\,\\Delta v}_{' + leftover.toFixed(4) + '}\\)</p>' +
        (Math.abs(leftover) < 1e-12
          ? '<p><strong>Leftover exactly zero</strong> &mdash; and only here, at \\(t = \\tfrac12\\). ' +
          'Nudge the slider either way and it comes straight back.</p>'
          : '<p>Leftover is <strong>not</strong> zero. The second-order term Newton appeared to eliminate is ' +
          'sitting right there; at \\(t=\\tfrac12\\) it is merely invisible.</p>');
      M411.typeset(nOut);
    }
    tIn.addEventListener('input', newton);
    newton();
  })();
</script>
