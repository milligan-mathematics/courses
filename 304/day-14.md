---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 14: Three Points Is Exactly Enough"
day: 14
chapter_number: 3
chapter: "Transformations"
day_title: "Three Points Is Exactly Enough"
blurb: "Name where you want three points to go, and there is one Möbius transformation that obeys — no more, no fewer. That single sentence is what makes the whole family usable."
reading: "Section 3.4, Theorem 3.4.4 through the Fundamental Theorem 3.4.8"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Two inversions make a Möbius transformation</h2>

  <p>Theorem 3.4.4 is the structural heart of the section:</p>

  <blockquote class="source">A transformation of \(\mathbb{C}^+\) is a M&ouml;bius transformation if and only
    if it is the composition of an even number of inversions.</blockquote>

  <p>Compare Theorem 3.1.17 from Section 3.1: translations and rotations are compositions of two reflections.
    Same statement, with "reflection in a line" upgraded to "inversion in a cline." Chapter 3 is Section 3.1
    told again with a bigger supply of mirrors.</p>

  <p>Below, invert in the green circle and then in the violet one. Drag either circle's centre.</p>

  <canvas class="plot g304" id="d14-two"></canvas>
  <div class="drag-hint">Drag the two circle centres.</div>
  <div class="legend">
    <span class="green">first mirror</span>
    <span class="violet">second mirror</span>
    <span class="blue">a grid</span>
    <span class="orange">its image after both inversions</span>
  </div>
  <div class="readout cols" id="d14-two-out"></div>

  <p>The composite is a M&ouml;bius transformation, and you can check the two properties by eye. The image
    grid is made of clines &mdash; arcs of circles, some so large they look straight. And the image grid
    still meets itself at right angles everywhere, which is angle preservation with the sign intact, because
    two inversions flipped orientation twice.</p>

  <p>Watch what happens when you make the two circles concentric: the composite becomes a straightforward
    dilation about the shared centre. Make them equal and the composite becomes the identity, because an
    inversion undoes itself.</p>

  <p>Two things worth extracting.</p>

  <p><strong>Reflections are inversions too.</strong> A cline is a circle <em>or a line</em>, and inversion in
    a line is ordinary reflection. So Theorem 3.1.17 is the special case of Theorem 3.4.4 in which both
    mirrors happen to be straight &mdash; and that's why the general linear transformations turned out to be
    M&ouml;bius transformations with \(c=0\).</p>

  <p><strong>Even is doing all the work.</strong> A single inversion is not a M&ouml;bius transformation
    &mdash; it reverses orientation, and no \(\frac{az+b}{cz+d}\) can. Three inversions aren't either. The
    parity is the whole criterion.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Name three destinations</h2>

  <p>The Fundamental Theorem (3.4.8): <em>there is a unique M&ouml;bius transformation taking any three
      distinct points of \(\mathbb{C}^+\) to any three distinct points of \(\mathbb{C}^+\).</em></p>

  <p>The three blue points below are fixed. Drag the three orange targets to say where you want them to go,
    and the plane rearranges itself to comply.</p>

  <canvas class="plot g304" id="d14-fund"></canvas>
  <div class="drag-hint">Drag any of the three orange targets.</div>
  <div class="readout cols" id="d14-fund-out"></div>

  <p>Notice how <em>much</em> moves in response to how <em>little</em> you specified. Three points is nine
    real numbers' worth of nothing much, and it pins down a motion of the entire extended plane. There is no
    slack left over: you cannot additionally demand where a fourth point goes, because the map is already
    completely determined.</p>

  <p>That has a consequence worth stating plainly. Four points have a genuine <em>invariant</em> attached to
    them &mdash; some quantity a M&ouml;bius transformation cannot change &mdash; because a M&ouml;bius
    transformation has already spent all its freedom on the first three. Tomorrow that invariant gets a name
    and a formula. For now, the picture is the argument: watch the fourth grey point, which you cannot drag,
    and which goes wherever the other three send it.</p>

  <details class="hint">
    <summary>Why exactly three, and not two or four?</summary>
    <p>Count what a M&ouml;bius transformation has to give. Four complex coefficients, but scaling all of them
      by the same non-zero constant gives the same map &mdash; check that
      \(\frac{\lambda a z + \lambda b}{\lambda c z + \lambda d}\) simplifies &mdash; so really three complex
      parameters' worth of freedom.</p>
    <p>Each point you place uses up one complex parameter. Three points, three parameters, and the freedom is
      exhausted. Two points would leave one complex parameter free, so there would be a whole family; four
      would be one demand too many.</p>
    <p>That's a heuristic, not a proof &mdash; Day 10's flaw activity was about exactly this kind of
      argument, and parameter counts can lie. Theorem 3.4.8 is proved properly, and the proof leans on
      Theorem 3.4.6: a M&ouml;bius transformation that fixes three points must be the identity.</p>
  </details>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>One, two, or all &mdash; the fixed-point theorem</h2>

  <p>Theorem 3.4.6: <em>any M&ouml;bius transformation fixes 1, 2, or all points of \(\mathbb{C}^+\).</em>
    Never zero, never exactly three. Your reading leaves the proof collapsed; it rests on the quadratic you
    set up on Day 6.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Take \(c \neq 0\) first. Set up the fixed-point equation and say how many
          solutions it can have.</div>
        <div class="sstep-body">
          <p>\(T(z) = z\) becomes \(az+b = z(cz+d)\), that is</p>
          \[ cz^2 + (d-a)z - b = 0. \]
          <p>A genuine quadratic, since \(c \neq 0\). Over \(\mathbb{C}\) it has one or two roots &mdash;
            never zero, because every complex number has a square root, and exactly one when the discriminant
            vanishes. That's Day 6's scaffold.</p>
          <p>And \(\infty\) is not fixed here, since \(T(\infty) = a/c\), which is finite. So for
            \(c \neq 0\) the count is exactly the number of roots: one or two.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now \(c = 0\), so \(T(z) = \frac{a}{d}z + \frac{b}{d}\), a general linear
          transformation. Count its fixed points in \(\mathbb{C}^+\).</div>
        <div class="sstep-body">
          <p>\(\infty\) is always fixed (Theorem 3.3.1). For the finite ones, solve
            \(\frac{a}{d}z+\frac{b}{d} = z\):</p>
          <ul>
            <li>If \(a \neq d\), there is exactly one finite solution. Total: <strong>two</strong>.</li>
            <li>If \(a = d\) and \(b \neq 0\), it's a non-trivial translation and there are no finite
              solutions. Total: <strong>one</strong>.</li>
            <li>If \(a = d\) and \(b = 0\), it's the identity. Total: <strong>all</strong>.</li>
          </ul>
          <p>So every case gives one, two, or all &mdash; and the translations are exactly the maps that
            manage only one, a fact Section 3.5 will use to characterise the parabolic maps.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now the payoff. Suppose a M&ouml;bius transformation fixes three distinct
          points. What follows, and why?</div>
        <div class="sstep-body">
          <p>It must be the identity. Three is more than two, and the theorem allows only one, two, or all;
            "all" is the identity.</p>
          <p>Small and enormously useful. It converts "these two maps are equal" &mdash; a statement about
            infinitely many points &mdash; into "they agree at three points."</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Use it to prove the uniqueness half of the Fundamental Theorem: at most one
          M&ouml;bius transformation sends \(z_1,z_2,z_3\) to \(w_1,w_2,w_3\).</div>
        <div class="sstep-body">
          <p>Suppose \(T\) and \(S\) both do it. Then \(S^{-1}\circ T\) is a M&ouml;bius transformation
            (inverses and composites of M&ouml;bius transformations are M&ouml;bius) and</p>
          \[ S^{-1}(T(z_k)) = S^{-1}(w_k) = z_k \quad\text{for } k = 1,2,3. \]
          <p>Three fixed points, so \(S^{-1}\circ T\) is the identity, so \(T = S\).</p>
          <p>For existence, the reading's construction does the job: build the map
            \(z \mapsto (z,z_1;z_2,z_3)\) sending \(z_1,z_2,z_3\) to \(1,0,\infty\), build the corresponding
            map for the \(w\)'s, and compose one with the other's inverse. Everything is routed through the
            single standard triple \(1, 0, \infty\).</p>
          <p><strong>That routing trick is the one to remember.</strong> It shows up again immediately in
            Section 3.5, where a map fixing \(p\) and \(q\) is studied by first sending \(p, q\) to
            \(0, \infty\). Rather than handle a general configuration, move it to a standard one, do the easy
            work there, and move back. Almost every proof left in this chapter has that shape.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Inside stays inside?</h2>

  <p>An argument about what M&ouml;bius transformations do to disks.</p>

  <p><strong>Click the step that fails.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Let \(C\) be a circle and \(T\) a M&ouml;bius transformation whose
        pole is not on \(C\). Then \(T(C)\) is a circle.</button>
      <button class="fline" type="button">\(T\) is a bijection of \(\mathbb{C}^+\), so it maps the complement
        of \(C\) onto the complement of \(T(C)\).</button>
      <button class="fline" type="button">The complement of a circle in \(\mathbb{C}^+\) has two connected
        pieces &mdash; the inside, and the outside together with \(\infty\) &mdash; and \(T\) is continuous,
        so it maps each piece onto a piece.</button>
      <button class="fline" type="button">The inside of \(C\) is bounded and the outside is not, and \(T\)
        preserves boundedness, so the inside must map to the inside.</button>
      <button class="fline" type="button">Hence a M&ouml;bius transformation always maps the interior of a
        circle onto the interior of its image.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct.</strong> M&ouml;bius transformations map clines to clines, and the image is a line
        exactly when the original passes through the pole. Pole off \(C\), image is a circle &mdash; that was
        yesterday's final self-check.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct.</strong> A bijection maps complements to complements. Nothing controversial.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Correct, and carefully stated.</strong> Note the phrase "together with \(\infty\)" &mdash;
        in \(\mathbb{C}^+\) the outside of a circle includes the point at infinity, which is what makes it a
        connected piece of the sphere rather than something unbounded and awkward. A continuous bijection with
        continuous inverse sends connected pieces onto connected pieces, so the two regions map onto the two
        regions in some order.</p>
      <p>"In some order" is the crucial hedge, and the next line ignores it.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Here's the failure: M&ouml;bius transformations do not preserve boundedness.</strong></p>
      <p>They can't &mdash; the whole point of Section 3.3 was that \(T\) moves \(\infty\) around. If the pole
        \(-d/c\) happens to lie <em>inside</em> \(C\), then some point of the inside maps to \(\infty\), so
        the image of the inside contains \(\infty\) and is therefore the <em>outside</em> of \(T(C)\).
        Inside and outside swap.</p>
      <p>The correct statement is the one line 3 was heading for: \(T\) maps the two complementary regions
        onto the two complementary regions, and <em>which goes to which</em> is decided by where the pole is.
        Pole outside \(C\): inside goes to inside. Pole inside \(C\): inside goes to outside.</p>
      <p>You have already seen this happen. Inversion in a circle sends the inside to the outside, and its
        pole &mdash; the centre &mdash; is as inside as a point can get. And in the first activity above,
        watch a small circle's image turn itself inside out as you drag one of the mirrors across it.</p>
      <p>The habit to build: <strong>"bounded" is not a M&ouml;bius-invariant notion.</strong> Neither is
        "distance," "centre," "radius," or "between." On the sphere, where these maps really live, there is no
        such thing as far away.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>False, and it matters in practice.</strong> Chapter 5 builds hyperbolic geometry inside the
        unit disk, and its transformations are M&ouml;bius maps chosen precisely so that they <em>do</em>
        preserve the disk. If every M&ouml;bius transformation preserved interiors automatically there would
        be nothing to choose and no condition to impose.</p>
      <p>Which condition? Keep the pole outside the disk. Now you know why that requirement appears.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Consequences of the Fundamental Theorem</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Theorem 3.4.15 says any cline can be mapped onto any other cline by some M&ouml;bius
      transformation. How does the Fundamental Theorem give this almost immediately?</p>
    <button class="mc-opt" data-key="a">Both clines have infinitely many points, so a bijection between them
      exists.</button>
    <button class="mc-opt" data-key="b">Pick three points on each and take the M&ouml;bius transformation
      matching them up.</button>
    <button class="mc-opt" data-key="c">Every cline is a circle on the sphere, and the sphere can be
      rotated.</button>
    <button class="mc-opt" data-key="d">It doesn't &mdash; Theorem 3.4.15 needs a separate argument.</button>

    <div class="mc-fb" data-key="a">
      <p>Existence of <em>some</em> bijection is cheap and useless &mdash; we need a M&ouml;bius
        transformation, which is an extremely restricted kind of map, and we need it to carry the whole plane,
        not just the two curves.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Right, and it's worth seeing why so little work is needed. Take \(z_1,z_2,z_3\) on \(C_1\) and
        \(w_1,w_2,w_3\) on \(C_2\). The Fundamental Theorem gives a unique \(T\) with
        \(T(z_k) = w_k\). Now \(T(C_1)\) is a cline through \(w_1, w_2, w_3\) &mdash; and by Theorem 3.2.4
        there is only one such cline, namely \(C_2\). So \(T(C_1) = C_2\).</p>
      <p>The two theorems dovetail exactly: three points determine a cline, and three points determine a
        M&ouml;bius transformation. That's not a coincidence &mdash; it's why "three" keeps appearing.</p>
      <p>Section 4.2 will restate this as: <em>any two clines are congruent in M&ouml;bius geometry.</em>
        Every circle and every line is the same object, seen from a different position.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>This is genuinely true and a lovely way to think about it &mdash; on the sphere all clines are
        circles, and rotations of the sphere are M&ouml;bius transformations. But rotations alone won't do it:
        a rotation preserves the size of a circle on the sphere, and two clines can pull back to circles of
        very different sizes. You'd need the full family, which is more than this option claims.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>It needs about two lines, both of which you have. Try assembling them before moving on &mdash; the
        ingredients are the Fundamental Theorem and Theorem 3.2.4.</p>
    </div>
  </div>

  <div class="mc" data-answer="d">
    <p class="mc-q">You have a M&ouml;bius transformation \(T\) and you discover it fixes \(0\), \(1\), and
      \(\infty\). What is \(T\)?</p>
    <button class="mc-opt" data-key="a">A rotation about the origin.</button>
    <button class="mc-opt" data-key="b">A dilation.</button>
    <button class="mc-opt" data-key="c">Impossible &mdash; no M&ouml;bius transformation fixes three
      points.</button>
    <button class="mc-opt" data-key="d">The identity.</button>

    <div class="mc-fb" data-key="a">
      <p>A rotation about the origin fixes \(0\) and \(\infty\), but it fixes \(1\) only if the rotation angle
        is zero &mdash; in which case it's the identity anyway. Two fixed points is a rotation's budget.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Same issue. A dilation \(z\mapsto kz\) fixes \(0\) and \(\infty\); fixing \(1\) as well forces
        \(k = 1\).</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>The identity fixes every point, so plenty of M&ouml;bius transformations fix three points &mdash;
        just not plenty of <em>different</em> ones. Theorem 3.4.6 says one, two, or all, and three falls into
        "all."</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Right, by Theorem 3.4.6: three fixed points is more than two, so it must be all of them.</p>
      <p>This particular triple is worth remembering because \(0\), \(1\), \(\infty\) is the standard
        reference triple of the subject. Tomorrow's cross ratio is built as "the unique M&ouml;bius
        transformation sending your three favourite points to \(1\), \(0\), \(\infty\)", and the reason such
        a map is unique &mdash; the reason the cross ratio is well defined at all &mdash; is exactly this
        self-check.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Theorem 3.1.17 (rigid motions from two reflections) and Theorem 3.4.4 (M&ouml;bius maps from an even
      number of inversions) have the same shape. State the one difference in the ingredients, and say what it
      costs you.</li>
    <li>In the second activity, one grey point moved without being dragged. Say in one sentence why it had no
      choice.</li>
    <li>A M&ouml;bius transformation can send the inside of a circle to the outside. Which single feature of
      the map decides it, and where does that feature have to be?</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    /* ---- two inversions ---- */
    (function () {
      var R1 = 1.7, R2 = 2.2;

      var P = G.plane('d14-two', {
        span: 15, height: 420,
        handles: [
          { name: 'o1', z: c(-1.6, 0.4), color: G.colors.green, label: 'C₁' },
          { name: 'o2', z: c(1.9, -0.5), color: G.colors.violet, label: 'C₂' }
        ],
        draw: function (p) {
          var o1 = p.get('o1'), o2 = p.get('o2');
          p.grid(); p.axes({ ticks: false });

          var T = function (z) {
            return G.invertIn(G.invertIn(z, o1, R1), o2, R2);
          };

          p.mapGrid(T, {
            x0: -5, x1: 5, y0: -5, y1: 5, step: 0.6, n: 260,
            color: '#f7c7a6', width: 1.2
          });
          p.mapGrid(T, {
            x0: -5, x1: 5, y0: -5, y1: 5, step: 2.4, n: 260,
            color: G.colors.orange, width: 2.2
          });

          p.circle(o1, R1, { color: G.colors.green, width: 2.4 });
          p.circle(o2, R2, { color: G.colors.violet, width: 2.4 });
        },
        onDrag: function () { refresh(); }
      });

      function refresh() {
        P.redraw();
        var o1 = P.get('o1'), o2 = P.get('o2');
        var sep = G.abs(G.sub(o1, o2));
        var note;
        if (sep < 0.12 && Math.abs(R1 - R2) < 0.12) {
          note = 'The two circles coincide — the composite is the identity, since an inversion undoes itself.';
        } else if (sep < 0.12) {
          note = 'Concentric circles — the composite is a dilation about the shared centre.';
        } else {
          note = 'A genuine Möbius transformation: clines to clines, angles preserved with their signs.';
        }
        G.say('d14-two-out',
          '<div class="q"><b>distance between centres</b><span>' + G.num(sep, 2) + '</span></div>' +
          '<div class="q"><b>inversions applied</b><span>2 — an even number</span></div>' +
          '<div class="q hit" style="grid-column:1/-1"><b>the composite</b><span>' + note + '</span></div>');
      }
      refresh();
    })();

    /* ---- the Fundamental Theorem ---- */
    (function () {
      // The three sources are FIXED, and deliberately not any triple appearing on
      // this section's problem set, so this cannot be used as an answer machine.
      var Z = [c(-2.4, -1.1), c(0.2, 2.2), c(2.8, -0.7)];
      var PROBE = c(1.4, 1.4);

      function build(W) {
        // S sends Z to 1,0,inf ; U sends W to 1,0,inf ; T = U^{-1} o S.
        var S = G.crossRatioMap(Z[0], Z[1], Z[2]);
        var U = G.crossRatioMap(W[0], W[1], W[2]);
        // Invert U numerically by building it as an explicit Mobius map.
        var Uab = mobiusOfCrossRatio(W[0], W[1], W[2]);
        var Uinv = Uab.inverse();
        return function (z) { return Uinv(S(z)); };
      }

      // (z, w1; w2, w3) written out as (az+b)/(cz+d).
      function mobiusOfCrossRatio(w1, w2, w3) {
        var k = G.sub(w1, w3), m = G.sub(w1, w2);
        // ((z - w2)(w1 - w3)) / ((z - w3)(w1 - w2))
        return G.mobius(k, G.mul(G.neg(w2), k), m, G.mul(G.neg(w3), m));
      }

      var P = G.plane('d14-fund', {
        span: 14, height: 420,
        handles: [
          { name: 'w0', z: c(-1.4, 1.9), color: G.colors.orange, label: 'w₁' },
          { name: 'w1', z: c(1.6, 0.3), color: G.colors.orange, label: 'w₂' },
          { name: 'w2', z: c(-0.4, -2.1), color: G.colors.orange, label: 'w₃' }
        ],
        draw: function (p) {
          p.grid(); p.axes({ ticks: false });
          var W = [p.get('w0'), p.get('w1'), p.get('w2')];
          var T = build(W);

          p.mapGrid(T, {
            x0: -6, x1: 6, y0: -6, y1: 6, step: 0.8, n: 240,
            color: '#f7c7a6', width: 1.1
          });
          p.mapGrid(T, {
            x0: -6, x1: 6, y0: -6, y1: 6, step: 3.2, n: 240,
            color: G.colors.orange, width: 2
          });

          Z.forEach(function (z, i) {
            p.dot(z, { color: G.colors.blue, r: 6 });
            p.label(z, 'z' + '₁₂₃'.charAt(i), { color: G.colors.blue, dx: 10, dy: -9 });
            var img = T(z);
            if (img && G.abs(img) < 50) p.seg(z, img, { color: '#dfe3e7', width: 1.2, dash: [4, 4] });
          });

          // The undraggable fourth point, along for the ride.
          var q = T(PROBE);
          p.dot(PROBE, { color: G.colors.muted, r: 5, hollow: true });
          if (q && G.abs(q) < 50) {
            p.seg(PROBE, q, { color: '#dfe3e7', width: 1.2, dash: [4, 4] });
            p.dot(q, { color: G.colors.muted, r: 6 });
            p.label(q, 'it goes where it is told', { color: G.colors.muted, dx: 10, dy: -9, size: 12 });
          }
        },
        onDrag: function () { refresh(); }
      });

      function refresh() {
        var W = [P.get('w0'), P.get('w1'), P.get('w2')];
        var T = build(W);
        var ok = Z.every(function (z, i) { return G.near(T(z), W[i], 1e-6); });
        var q = T(PROBE);
        G.say('d14-fund-out',
          '<div class="q ' + (ok ? 'hit' : 'miss') + '"><b>does T hit all three targets?</b><span>'
          + (ok ? 'yes, exactly' : 'the targets have collided — three must stay distinct') + '</span></div>' +
          '<div class="q"><b>the fourth point lands at</b><span>' + G.str(q) + '</span></div>' +
          '<div class="q" style="grid-column:1/-1"><b>&nbsp;</b><span>You never chose that. The three '
          + 'targets used up every degree of freedom the map had.</span></div>');
      }
      refresh();
    })();
  })();
</script>
