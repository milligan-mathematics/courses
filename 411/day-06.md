---
layout: day
title: "MATH 411 Day 6: The Brachistochrone"
day: 6
chapter_number: 3
chapter: "Calculus in the 17th and 18th Centuries"
day_title: "The Brachistochrone"
blurb: "Johann Bernoulli challenged the mathematicians of Europe to find the fastest slide between two points. Newton, running the Royal Mint and by then largely done with mathematics, solved it in a single night."
reading: "Section 3.1, the Brachistochrone problem and Bernoulli's solution via Snell's Law"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The race</h2>

  <p>Four frictionless wires from \(A\) to \(B\), four identical beads, one starting gun. Gravity does all the work.
    Before you press the button: <strong>which do you expect to win, and why?</strong></p>

  <div class="ctl-row">
    <button class="btn411" id="d6-race">Race</button>
    <button class="btn411 ghost" id="d6-slow">Slow motion</button>
  </div>

  <canvas class="plot" id="d6-canvas"></canvas>
  <div class="readout" id="d6-out"></div>

  <p>The straight line is the <em>shortest</em> path and it loses badly. That is the whole surprise: it is worth
    travelling further in order to fall steeply at the start, because early depth buys speed that you then get to spend
    across the entire remaining journey. Bernoulli's winner drops almost vertically out of the gate.</p>

  <p>Notice the circular arc, which dips <em>below</em> \(B\) and climbs back up to it &mdash; and still beats the
    straight line comfortably. Going the wrong way for a while is not automatically a mistake.</p>

  <p>The curve that wins is a <em>cycloid</em> &mdash; and the problem is genuinely hard, because you are not choosing
    among four curves. You are choosing among all of them.</p>

  <details class="hint">
    <summary>Why does every competitor here leave \(A\) steeply?</summary>
    <p>Try imagining a wire that leaves \(A\) horizontally. The bead starts at rest, at zero depth, so its speed is
      \(v = \sqrt{2gy} = 0\) &mdash; and with a horizontal tangent it gains no depth to speed it up. It never gets
      going, and the descent time is <em>infinite</em>.</p>
    <p>So the condition "starts steeply" isn't a stylistic choice in the animation; a horizontal start disqualifies a
      curve outright. Notice that the winning cycloid takes this to the limit: it leaves \(A\) exactly
      <em>vertically</em>.</p>
  </details>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Where a cycloid comes from</h2>

  <p>Bernoulli solved his differential equation and recognised the answer on sight: an inverted <em>cycloid</em>, the
    curve traced by a fixed point on a circle rolling along a straight line. Here is that circle, rolling.</p>

  <div class="ctl-row">
    <button class="btn411" id="d6-roll">Roll the circle</button>
  </div>

  <canvas class="plot" id="d6-cycloid"></canvas>

  <p>Flip that arch upside down and you have the fastest descent. It is a genuinely startling coincidence &mdash; a
    curve defined by rolling a wheel turns out to answer a question about gravity and time &mdash; and it gets stranger.
    The same curve is also the <em>tautochrone</em>: release beads from <em>different</em> heights on an inverted
    cycloid and they all reach the bottom at the same moment. Huygens had proved that in 1659, decades before Bernoulli
    posed the brachistochrone, without suspecting the two problems had the same answer.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>\(v = \sqrt{2gy}\), twice</h2>

  <p>Bernoulli needs the bead's speed at depth \(y\). Your reading derives it in Bernoulli's own style and then again
    in modern notation, and puts a pointed question next to the pair: <em>why did we abandon the clear, simple
      interpretation in favour of the cumbersome one?</em></p>

  <p>Work through both columns and form your own answer.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal both derivations</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1. Where does the derivation start? (Same for both.)</div>
        <div class="sstep-body">
          <p>Gravity \(g\) points straight down, but the bead is constrained to the wire, so only the
            <em>tangential</em> component \(a\) accelerates it. Similar triangles in your reading's figure give</p>
          \[ \frac{a}{g} = \frac{\mathrm{d}y}{\mathrm{d}s} \]
          <p>where \(s\) is arc length along the wire. On a steep stretch, \(\mathrm{d}y\) is nearly all of
            \(\mathrm{d}s\) and almost all of gravity accelerates the bead; on a flat stretch, almost none does.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2 (Bernoulli). Treat the differentials as numbers and rearrange.</div>
        <div class="sstep-body">
          <p>Multiply up, and use "acceleration is the rate of change of velocity":</p>
          \[ a\,\mathrm{d}s = g\,\mathrm{d}y \qquad\Longrightarrow\qquad \frac{\mathrm{d}v}{\mathrm{d}t}\mathrm{d}s =
          g\,\mathrm{d}y \]
          <p>Now the move a modern reader flinches at &mdash; swap which differential sits in the denominator:</p>
          \[ \frac{\mathrm{d}s}{\mathrm{d}t}\mathrm{d}v = g\,\mathrm{d}y \]
          <p>Since \(\frac{\mathrm{d}s}{\mathrm{d}t}\) is the velocity, this is \(v\,\mathrm{d}v = g\,\mathrm{d}y\).
            The rearrangement is legitimate only if these symbols are genuinely numbers that multiply and divide. To
            Bernoulli they were.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3 (Bernoulli). Integrate, reading it as areas.</div>
        <div class="sstep-body">
          <p>Bernoulli read \(v\,\mathrm{d}v = g\,\mathrm{d}y\) as: two rectangles, of heights \(v\) and \(g\) and
            widths \(\mathrm{d}v\) and \(\mathrm{d}y\), have equal area. Summing all such rectangles &mdash; which is
            what integration <em>was</em> &mdash; gives</p>
          \[ \int v\,\mathrm{d}v = \int g\,\mathrm{d}y \qquad\Longrightarrow\qquad \frac{v^2}{2} = gy
          \qquad\Longrightarrow\qquad v = \sqrt{2gy} \]
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4 (modern). The same result, with the Chain Rule doing the work.</div>
        <div class="sstep-body">
          <p>Start again from \(\frac{\mathrm{d}v}{\mathrm{d}t} = g\frac{\mathrm{d}y}{\mathrm{d}s}\). We may not
            rearrange differentials, so we invoke the Chain Rule as a theorem:</p>
          \[ \frac{\mathrm{d}v}{\mathrm{d}t} = \frac{\mathrm{d}v}{\mathrm{d}s}\frac{\mathrm{d}s}{\mathrm{d}t} \]
          <p>with the physical reading that speed depends on how far along the wire you are, and position depends on
            elapsed time. Substituting, and using \(\frac{\mathrm{d}s}{\mathrm{d}t} = v\):</p>
          \[ v\frac{\mathrm{d}v}{\mathrm{d}s} = g\frac{\mathrm{d}y}{\mathrm{d}s} \]
          <p>Integrate both sides with respect to \(s\); the substitution rule converts each side to an integral in its
            own variable, and we land on \(\frac{v^2}{2} = gy\) exactly as before.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 5. So why did we trade down?</div>
        <div class="sstep-body">
          <p>Compare the two. Bernoulli's is shorter, more memorable, and reads like algebra. The modern one needs the
            Chain Rule and the substitution rule as separate justified theorems, and your reading calls it
            "comparatively cumbersome." It is not obviously an improvement.</p>
          <p>The trade is this: <em>every step of the modern derivation is a theorem with a proof and stated
              hypotheses.</em> Bernoulli's rests on \(\mathrm{d}s\) and \(\mathrm{d}t\) being numbers you can shuffle
            &mdash; and Day 4 showed that no such numbers live in \(\mathbb{R}\). His method works here. The question
            it cannot answer is <em>when</em> it works, and that question stops being academic in Chapter 5, where
            these manipulations start producing false results.</p>
          <p>Your reading notes the cost of the trade honestly: eighteenth-century mathematicians "wouldn't have
            recognised a need for what we call the Chain Rule because this operation was a triviality for them. Just
            reduce the fraction."</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Snell's Law, stretched to infinitely many layers</h2>

  <p>Bernoulli's idea is a beautiful piece of opportunism: he already had Snell's Law from Day 5, so he imagined the
    bead falling through stacked layers of different media and applied it repeatedly.</p>

  <p><strong>Click the step that a modern treatment would have to work hardest to justify.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">In a medium stratified into finitely many layers with speeds \(v_1, v_2,
        \ldots\), applying Snell's Law at each interface gives \(\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2} =
        \cdots\).</button>
      <button class="fline" type="button">A falling bead speeds up continuously, so model it as passing through layers
        in which the speed is very nearly constant.</button>
      <button class="fline" type="button">Now let the layers become infinitely thin. In the limit, the curve satisfies
        \(\frac{\sin\alpha}{v} = c\) at every point, where \(\alpha\) is the angle of the tangent from the
        vertical.</button>
      <button class="fline" type="button">Substituting \(v = \sqrt{2gy}\) and \(\sin\alpha =
        \frac{\mathrm{d}x}{\mathrm{d}s}\) turns this into a differential equation for the curve.</button>
      <button class="fline" type="button">Solving that equation gives the inverted cycloid.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Solid.</strong> This is finitely many applications of a law proved on Day 5, chained together. Nothing
        infinite is happening yet, and each equality is an ordinary consequence of the previous one.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>A modelling assumption, and a reasonable one.</strong> Approximating continuous variation by a
        finely-stepped one is exactly what a Riemann sum does. It's the <em>next</em> step, where the approximation is
        declared exact, that carries the weight.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>That's the load-bearing step.</strong> Three separate things are being assumed at once, none of them
        argued for:</p>
      <ul>
        <li>that the sequence of optimal stratified paths <em>has</em> a limiting curve at all;</li>
        <li>that this limiting curve is the optimal curve for the continuous problem &mdash; that "limit of best" equals
          "best of limit";</li>
        <li>that the relation \(\frac{\sin\theta}{v} = c\) survives the limiting process.</li>
      </ul>
      <p>Every one of those is the kind of interchange that Chapter 5 will show can fail. The second is the deepest:
        the limit of the optimal solutions to approximating problems need not solve the limiting problem. That it does
        here is true, and it is a theorem, not an observation.</p>
      <p>None of which means Bernoulli was wrong. He got the right curve, and Newton, Leibniz, Jacob Bernoulli and
        l'Hôpital all got it too by other routes. But the machinery to say <em>why</em> this argument is valid &mdash;
        the calculus of variations &mdash; had to be built afterwards, largely by Euler and Lagrange, in response to
        exactly this problem.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Legitimate once you grant line (3).</strong> These are substitutions of established identities:
        \(v=\sqrt{2gy}\) came from the scaffold above, and \(\sin\alpha = \frac{\mathrm{d}x}{\mathrm{d}s}\) is the
        definition of the angle from the vertical.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>Not the weak point &mdash; this is just hard work.</strong> Solving the equation is a genuine feat, and
        recognising the solution as a cycloid takes a good eye. But it's a computation, and computations can be
        checked. The step that can't simply be checked is (3).</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Five questions on the challenge and its answer</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Why did Bernoulli send the problem to Newton?</p>
    <button class="mc-opt" type="button" data-key="a">He thought Newton was the only one who could solve it.</button>
    <button class="mc-opt" type="button" data-key="b">He expected Newton's methods to fail, and hoped to embarrass him
      in the priority dispute over calculus.</button>
    <button class="mc-opt" type="button" data-key="c">Newton was a friend and collaborator.</button>
    <div class="mc-fb" data-key="a">Rather the opposite. Bernoulli, an advocate of Leibniz's methods, "did not believe
      Newton would be able to solve the problem using his methods."</div>
    <div class="mc-fb" data-key="b">Correct. The Newton&ndash;Leibniz priority controversy was "ongoing and very
      vitriolic," and the challenge was a move in it. Newton solved it overnight, submitted anonymously, and Bernoulli
      recognised him instantly: <em>tanquam ex ungue leonem</em> &mdash; I know the lion by his claw.</div>
    <div class="mc-fb" data-key="c">They were on opposite sides of a bitter dispute. Newton later grumbled that he did
      not love "to be teezed by forreigners about Mathematical things."</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">What was Newton doing for a living when the problem arrived?</p>
    <button class="mc-opt" type="button" data-key="a">Lucasian Professor at Cambridge.</button>
    <button class="mc-opt" type="button" data-key="b">President of the Royal Society.</button>
    <button class="mc-opt" type="button" data-key="c">Master of the Mint, running a recoinage of the entire English
      currency.</button>
    <div class="mc-fb" data-key="a">He had left that behind. By 1696 he "had all but quit science and mathematics."
    </div>
    <div class="mc-fb" data-key="b">That came later (1703).</div>
    <div class="mc-fb" data-key="c">Correct, and the detail is worth keeping. Counterfeiting had wrecked the currency,
      and the fix was to recall, melt down and restrike every coin in England &mdash; Newton's job. He came home from
      the Tower at four, "very much tired," and had the problem solved by four in the morning.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">What does Bernoulli's solution take as its starting point?</p>
    <button class="mc-opt" type="button" data-key="a">Snell's Law of refraction.</button>
    <button class="mc-opt" type="button" data-key="b">Newton's laws of motion.</button>
    <button class="mc-opt" type="button" data-key="c">The properties of the cycloid.</button>
    <div class="mc-fb" data-key="a">Correct, and it's an inspired piece of reuse &mdash; exactly Day 2's "a solved
      problem becomes a tool." Light already solves a least-time problem; Bernoulli reframed a falling bead as a beam
      of light passing through a medium that gets faster with depth.</div>
    <div class="mc-fb" data-key="b">Mechanics supplies \(v = \sqrt{2gy}\), but the organising idea is optical.</div>
    <div class="mc-fb" data-key="c">The cycloid is the <em>output</em>. Bernoulli recognised it at the end; he didn't
      start from it.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">In the race above, the straight line is the shortest path and loses. Why?</p>
    <button class="mc-opt" type="button" data-key="a">Friction is greater on the straight wire.</button>
    <button class="mc-opt" type="button" data-key="b">A steeper start converts height into speed early, and that speed
      is then available for the whole remaining trip.</button>
    <button class="mc-opt" type="button" data-key="c">The straight line is longer in arc length.</button>
    <div class="mc-fb" data-key="a">Every wire is frictionless &mdash; that's stipulated. The difference is entirely
      geometric.</div>
    <div class="mc-fb" data-key="b">Correct. Since \(v = \sqrt{2gy}\), speed depends only on depth <em>fallen so far</em>.
      Dropping steeply at the beginning buys speed you spend over the entire journey, and that more than repays the
      extra distance.</div>
    <div class="mc-fb" data-key="c">The straight line is the <em>shortest</em> path between the two points &mdash;
      that's exactly what makes its defeat interesting.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Your reading says 18th-century mathematicians "wouldn't have recognised a need for what we call the
      Chain Rule." Why not?</p>
    <button class="mc-opt" type="button" data-key="a">They didn't compose functions.</button>
    <button class="mc-opt" type="button" data-key="b">They only worked with polynomials.</button>
    <button class="mc-opt" type="button" data-key="c">For them \(\frac{\mathrm{d}y}{\mathrm{d}u}\frac{\mathrm{d}u}{\mathrm{d}x}\)
      really was a product of fractions, so cancelling \(\mathrm{d}u\) needed no justification.</button>
    <div class="mc-fb" data-key="a">They composed constantly &mdash; the Snell derivation on Day 5 differentiates
      \(\sqrt{x^2+a^2}\), a composition.</div>
    <div class="mc-fb" data-key="b">Not remotely; square roots, logarithms and trigonometric functions were all in
      routine use.</div>
    <div class="mc-fb" data-key="c">Correct. "Just reduce the fraction." What we teach as a theorem requiring proof was,
      for them, a triviality of notation &mdash; which is a good measure of how much the meaning of the symbols has
      shifted underneath us while the symbols stayed put.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The brachistochrone asks you to minimise over <em>all curves</em>, not over a number. On Day 5, Snell's Law
      became easy the moment the unknown collapsed to a single \(x\). What makes minimising over a space of curves a
      different kind of problem?</li>
    <li>A wire leaving \(A\) horizontally gives an infinite descent time. Does that mean there is no <em>slowest</em>
      path? What does the existence of a fastest one require that the slowest one lacks?</li>
    <li>The cycloid is both the brachistochrone and the tautochrone. Is there a reason to expect one curve to answer
      both questions, or is it a coincidence? (Nobody expected it at the time.)</li>
    <li>Bernoulli's argument replaces a continuous problem by a limit of discrete ones. List everything that has to be
      true for that to be legitimate. You met the same move on Day 5 with the \(\mathrm{d}x\,\mathrm{d}v\) corner
      &mdash; is it the same gap?</li>
  </ol>
</div>

<script>
  (function () {
    var g = 9.81, XB = 2, YB = 1;

    function bisect(f, lo, hi) {
      for (var i = 0; i < 200; i++) { var m = (lo + hi) / 2; if (f(m) < 0) lo = m; else hi = m; }
      return (lo + hi) / 2;
    }

    // Cycloid through (XB, YB):  x = r(p - sin p),  y = r(1 - cos p)
    var pB = bisect(function (p) { return (p - Math.sin(p)) / (1 - Math.cos(p)) - XB / YB; }, 1e-3, 2 * Math.PI - 1e-3);
    var rC = YB / (1 - Math.cos(pB));

    // Circular arc leaving A vertically:  x = R(1 - cos t),  y = R sin t
    var tB = bisect(function (t) { return (1 - Math.cos(t)) / Math.sin(t) - XB / YB; }, 1e-3, Math.PI - 1e-3);
    var RC = YB / Math.sin(tB);

    // Every competitor must leave A steeply: a horizontal tangent at the start
    // gives v = 0 with no depth gained, and the descent time diverges.
    var CURVES = [
      {
        name: 'straight line', color: '#6E6E6E',
        pt: function (u) { return [XB * u, YB * u]; }
      },
      {
        name: 'parabola', color: '#8B5CF6',
        pt: function (u) { return [XB * u * u, YB * u]; }
      },
      {
        name: 'circular arc', color: '#009CDE',
        pt: function (u) { var t = tB * u; return [RC - RC * Math.cos(t), RC * Math.sin(t)]; }
      },
      {
        name: 'cycloid', color: '#F36E24',
        pt: function (u) { var p = pB * u; return [rC * (p - Math.sin(p)), rC * (1 - Math.cos(p))]; }
      }
    ];

    // Precompute arc-length samples and cumulative descent time for each curve.
    // Midpoint sampling keeps y > 0, so the integrable 1/sqrt(y) singularity at
    // the start never divides by zero.
    var N = 6000;
    CURVES.forEach(function (c) {
      var pts = [], cum = [0], t = 0;
      for (var i = 0; i <= N; i++) pts.push(c.pt(i / N));
      for (var j = 0; j < N; j++) {
        var a = pts[j], b = pts[j + 1], m = c.pt((j + 0.5) / N);
        var ds = Math.hypot(b[0] - a[0], b[1] - a[1]);
        if (m[1] > 0) t += ds / Math.sqrt(2 * g * m[1]);
        cum.push(t);
      }
      c.pts = pts; c.cum = cum; c.total = t;
    });

    var TMAX = Math.max.apply(null, CURVES.map(function (c) { return c.total; }));

    // The circular arc dips below B before rising back to it, so the drawing
    // window has to follow the curves' real extent rather than just A and B.
    var EXT_X = XB, EXT_Y = YB;
    CURVES.forEach(function (c) {
      c.pts.forEach(function (p) {
        if (p[0] > EXT_X) EXT_X = p[0];
        if (p[1] > EXT_Y) EXT_Y = p[1];
      });
    });

    function posAt(c, time) {
      if (time >= c.total) return c.pts[N];
      // cum is increasing - binary search for the bracketing sample
      var lo = 0, hi = N;
      while (hi - lo > 1) { var m = (lo + hi) >> 1; if (c.cum[m] <= time) lo = m; else hi = m; }
      var span = c.cum[hi] - c.cum[lo];
      var f = span > 0 ? (time - c.cum[lo]) / span : 0;
      var a = c.pts[lo], b = c.pts[hi];
      return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
    }

    var canvas = document.getElementById('d6-canvas'),
      out = document.getElementById('d6-out');
    var raceStart = null, speed = 1, raf = null;

    function drawRace(time) {
      var d = M411.hidpi(canvas, 340), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      var padL = 50, padR = 130, padT = 34, padB = 34;
      var sx = (W - padL - padR) / EXT_X, sy = (H - padT - padB) / EXT_Y;
      var s = Math.min(sx, sy);
      function PX(x) { return padL + x * s; }
      function PY(y) { return padT + y * s; }

      // endpoints
      ctx.fillStyle = '#333'; ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'right'; ctx.fillText('A', PX(0) - 10, PY(0) + 5);
      ctx.textAlign = 'left'; ctx.fillText('B', PX(XB) + 10, PY(YB) + 5);
      ctx.fillStyle = '#333';
      ctx.beginPath(); ctx.arc(PX(0), PY(0), 4, 0, 2 * Math.PI); ctx.fill();
      ctx.beginPath(); ctx.arc(PX(XB), PY(YB), 4, 0, 2 * Math.PI); ctx.fill();

      CURVES.forEach(function (c, ci) {
        ctx.strokeStyle = c.color; ctx.lineWidth = 2;
        ctx.beginPath();
        for (var i = 0; i <= 300; i++) {
          var p = c.pts[Math.round(i / 300 * N)];
          i ? ctx.lineTo(PX(p[0]), PY(p[1])) : ctx.moveTo(PX(p[0]), PY(p[1]));
        }
        ctx.stroke();

        // bead
        var p2 = posAt(c, time);
        ctx.fillStyle = c.color;
        ctx.beginPath(); ctx.arc(PX(p2[0]), PY(p2[1]), 7, 0, 2 * Math.PI); ctx.fill();
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.stroke();

        // legend
        var ly = padT + 6 + ci * 20;
        ctx.fillStyle = c.color; ctx.fillRect(W - padR + 10, ly - 8, 12, 4);
        ctx.fillStyle = '#333'; ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
        ctx.fillText(c.name, W - padR + 28, ly - 3);
        if (time >= c.total) {
          ctx.fillStyle = M411.colors.scaffold;
          ctx.fillText('✓ ' + c.total.toFixed(3) + ' s', W - padR + 28, ly + 10);
        }
      });

      ctx.fillStyle = M411.colors.muted; ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('t = ' + Math.min(time, TMAX).toFixed(3) + ' s', padL, H - 10);
    }

    function frame(now) {
      if (raceStart === null) raceStart = now;
      var t = (now - raceStart) / 1000 * speed;
      drawRace(t);
      if (t < TMAX + 0.6) raf = requestAnimationFrame(frame);
      else { raf = null; showResults(); }
    }

    function showResults() {
      var ranked = CURVES.slice().sort(function (a, b) { return a.total - b.total; });
      var html = '<p>Descent times (computed numerically from \\(T = \\int \\mathrm{d}s/\\sqrt{2gy}\\)):</p><ol>';
      ranked.forEach(function (c) {
        html += '<li><strong style="color:' + c.color + '">' + c.name + '</strong> &mdash; ' +
          c.total.toFixed(4) + ' s' +
          (c === ranked[0] ? ' &nbsp;&larr; fastest' : ' &nbsp;(' +
            ((c.total / ranked[0].total - 1) * 100).toFixed(1) + '% slower)') + '</li>';
      });
      html += '</ol>';
      out.innerHTML = html;
      M411.typeset(out);
    }

    function startRace(sp) {
      speed = sp;
      if (raf) cancelAnimationFrame(raf);
      raceStart = null;
      raf = requestAnimationFrame(frame);
    }
    document.getElementById('d6-race').addEventListener('click', function () { startRace(1); });
    document.getElementById('d6-slow').addEventListener('click', function () { startRace(0.25); });
    M411.onResize(function () { drawRace(TMAX + 1); });
    drawRace(0);
    showResults();

    /* ---------------- The rolling circle ---------------- */
    var cyc = document.getElementById('d6-cycloid'), rollRaf = null, rollT = 0;

    function drawRoll(phi) {
      var d = M411.hidpi(cyc, 240), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      var r = 42, ground = H - 46, x0 = 40;
      var maxPhi = (W - 2 * x0) / r;

      // ground
      ctx.strokeStyle = '#999'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(20, ground); ctx.lineTo(W - 20, ground); ctx.stroke();

      // traced cycloid so far
      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (var i = 0; i <= 400; i++) {
        var p = phi * i / 400;
        var px = x0 + r * (p - Math.sin(p)), py = ground - r * (1 - Math.cos(p));
        i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
      }
      ctx.stroke();

      // the circle at its current position
      var cxx = x0 + r * phi, cyy = ground - r;
      ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(cxx, cyy, r, 0, 2 * Math.PI); ctx.stroke();

      // the marked point, and the spoke to it
      var mx = x0 + r * (phi - Math.sin(phi)), my = ground - r * (1 - Math.cos(phi));
      ctx.strokeStyle = '#bbb'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(cxx, cyy); ctx.lineTo(mx, my); ctx.stroke();
      ctx.fillStyle = M411.colors.check;
      ctx.beginPath(); ctx.arc(mx, my, 6, 0, 2 * Math.PI); ctx.fill();

      ctx.fillStyle = M411.colors.muted; ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('a fixed point on a rolling circle traces a cycloid', 22, 22);
      return maxPhi;
    }

    function rollFrame() {
      rollT += 0.02;
      var maxPhi = drawRoll(rollT);
      if (rollT < maxPhi) rollRaf = requestAnimationFrame(rollFrame);
      else rollRaf = null;
    }
    document.getElementById('d6-roll').addEventListener('click', function () {
      if (rollRaf) cancelAnimationFrame(rollRaf);
      rollT = 0;
      rollRaf = requestAnimationFrame(rollFrame);
    });
    M411.onResize(function () { drawRoll(rollT || 2 * Math.PI); });
    drawRoll(2 * Math.PI);
  })();
</script>
