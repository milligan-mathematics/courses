---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 12: One More Point"
day: 12
chapter_number: 3
chapter: "Transformations"
day_title: "One More Point"
blurb: "Inversion has an embarrassing hole at the centre of its circle. The fix is to invent a single new point — and the invented point turns out to have been the missing piece all along."
reading: "Section 3.3, the extended plane and stereographic projection through angles at infinity"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Where \(\infty\) actually lives</h2>

  <p>Adding a point called \(\infty\) to the plane sounds like a bookkeeping dodge, and if that were all it
    was, you'd be right to be suspicious. Stereographic projection is the answer to the suspicion: it makes
    \(\mathbb{C}^+\) into a <em>sphere</em>, on which \(\infty\) is an entirely ordinary point sitting at the
    north pole with nothing special about it at all.</p>

  <p>Drag \(z\) in the plane. The sphere shows the point \(\phi^{-1}(z)\) that projects to it &mdash; found
    by running a line from the north pole \(N\) down to \(z\) and seeing where it pierces the sphere.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d12-yaw">spin the sphere</label>
      <input type="range" id="d12-yaw" min="-180" max="180" step="1" value="-30">
    </div>
  </div>

  <div class="plane-pair">
    <div class="pane">
      <canvas class="plot g304" id="d12-sph"></canvas>
      <div class="cap">the sphere \(\mathbb{S}^2\), with \(N\) at the top</div>
    </div>
    <div class="pane">
      <canvas class="plot g304" id="d12-pl"></canvas>
      <div class="cap">the extended plane \(\mathbb{C}^+\)</div>
    </div>
  </div>
  <div class="drag-hint">Drag \(z\) in the right-hand panel.</div>
  <div class="readout cols" id="d12-sph-out"></div>

  <p>Things to try:</p>

  <ul>
    <li><strong>Put \(z\) at the origin.</strong> Its partner is the south pole. The southern hemisphere is
      the unit disk; the equator is the unit circle; the northern hemisphere is everything outside.</li>
    <li><strong>Drag \(z\) far out in any direction.</strong> Its partner creeps toward \(N\) &mdash; and it
      doesn't matter which direction you went. Every escape route leads to the same place. That is the honest
      content of "there is only <em>one</em> point at infinity," and it's the thing that most needs a picture.
      In calculus you had \(+\infty\) and \(-\infty\); here there is one \(\infty\), because on the sphere
      there is one north pole.</li>
    <li><strong>Notice the crowding.</strong> Enormous regions of the plane correspond to tiny caps near
      \(N\). The plane is infinite and the sphere is not; the projection has to compress badly somewhere, and
      it does it all near one point.</li>
  </ul>

  <p>What you get for the price of one invented point:</p>

  <table class="vals">
    <tr>
      <th>before</th>
      <th>after</th>
    </tr>
    <tr>
      <td>\(i_C\) is undefined at \(z_0\)</td>
      <td>\(i_C(z_0) = \infty\), \(i_C(\infty) = z_0\) &mdash; a transformation of all of
        \(\mathbb{C}^+\)</td>
    </tr>
    <tr>
      <td>a translation has no fixed point</td>
      <td>it fixes exactly one: \(\infty\)</td>
    </tr>
    <tr>
      <td>lines and circles are alike but not the same</td>
      <td>a line is a circle through \(\infty\)</td>
    </tr>
    <tr>
      <td>Theorem 3.2.16 excludes concentric circles</td>
      <td>they're included &mdash; their common symmetric points are the centre and \(\infty\)</td>
    </tr>
  </table>

  <p>Every one of those is a special case disappearing. That's what a good definition does.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Circles on the sphere, clines in the plane</h2>

  <p>Here's the fact that makes the sphere picture more than a metaphor. Take any circle drawn on the sphere
    &mdash; the intersection of the sphere with any plane. Its image under \(\phi\) is a <strong>cline</strong>.
    And it is a <em>line</em> exactly when the circle passes through \(N\).</p>

  <p>Below is a family of parallel circular slices of the sphere. Tilt the axis so that some of the slices
    catch the north pole, and watch what their images do.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d12-tilt">tilt the slices</label>
      <input type="range" id="d12-tilt" min="0" max="90" step="1" value="0">
    </div>
    <div class="ctl">
      <label for="d12-yaw2">spin</label>
      <input type="range" id="d12-yaw2" min="-180" max="180" step="1" value="-30">
    </div>
  </div>

  <div class="plane-pair">
    <div class="pane">
      <canvas class="plot g304" id="d12-sph2"></canvas>
      <div class="cap">slices of the sphere</div>
    </div>
    <div class="pane">
      <canvas class="plot g304" id="d12-pl2"></canvas>
      <div class="cap">their images in \(\mathbb{C}^+\)</div>
    </div>
  </div>
  <div class="readout" id="d12-slices-out"></div>

  <p>At zero tilt the slices are circles of latitude and their images are circles centred at the origin
    &mdash; nested, with the equator landing exactly on the unit circle. Tilt the axis and the images become
    off-centre circles, and one of them &mdash; the slice through \(N\) &mdash; opens up into a line.</p>

  <p>Watch that one carefully as you sweep the tilt. It doesn't snap. It grows enormous, flattens, becomes
    straight for an instant, and bows the other way. On the sphere, meanwhile, nothing dramatic is happening
    at all: a circle slides smoothly past the north pole. The drama is entirely an artifact of drawing it in
    the plane.</p>

  <p>Which is the argument for \(\mathbb{C}^+\) in one image. In the plane, "line" and "circle" look like two
    kinds of thing and the passage between them looks like a discontinuity. On the sphere they are all just
    circles, and \(\infty\) is just a point. The plane's version of the story has a seam in it; the sphere's
    doesn't.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>What angle do two parallel lines make?</h2>

  <p>Your reading makes a claim that ought to stop you:</p>

  <blockquote class="source">The angle at which two parallel lines intersect at \(\infty\) is 0.
    Furthermore, if two lines intersect at a finite point \(p\) as well as at \(\infty\), the angle at which
    they intersect at \(\infty\) equals the negative of the angle at which they intersect at \(p\).</blockquote>

  <p>Two lines meeting twice; parallel lines meeting at all; an angle at a point that isn't in the plane. None
    of this can be checked with a protractor. It has to be <em>defined</em> &mdash; and the definition is
    forced, once you decide the sphere picture is the honest one.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">First, why do two lines in \(\mathbb{C}^+\) always meet at \(\infty\)?</div>
        <div class="sstep-body">
          <p>Because \(\infty\) is on every line, by convention (your reading states this outright). So any
            two lines share it.</p>
          <p>And the convention isn't arbitrary &mdash; look at the sphere. A line in the plane pulls back to
            a circle on the sphere through \(N\). Two lines give two circles, both through \(N\). They meet
            there. The convention is what the sphere picture already says.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Theorem 3.3.5 says stereographic projection preserves angles. Use it to
          <em>define</em> the angle at \(\infty\).</div>
        <div class="sstep-body">
          <p>Pull both curves back to the sphere, measure the angle where they cross at \(N\) &mdash; an
            entirely ordinary angle between two curves at an ordinary point &mdash; and declare that to be
            the angle at \(\infty\).</p>
          <p>This is the only definition compatible with Theorem 3.3.5. If projection preserves angles
            everywhere else, it had better preserve them here too, and that pins the value down. No choice was
            made.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now do parallel lines. What do their circles on the sphere look like near
          \(N\), and what angle do they make there?</div>
        <div class="sstep-body">
          <p>Two parallel lines pull back to two circles through \(N\). Near \(N\), each circle has a tangent
            direction. For parallel lines, those tangent directions are the same &mdash; the lines head off
            to infinity in the same direction, so their pullbacks arrive at \(N\) along the same heading.</p>
          <p>Two curves with the same tangent make an angle of \(0\). They are <strong>tangent to each
              other</strong> at \(N\).</p>
          <p>So "parallel" means "tangent at \(\infty\)." That reframing is worth the whole activity. Parallel
            lines are not lines that fail to meet; they are lines that meet and touch without crossing.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Finally, the strange part: two crossing lines meet at \(p\) and at
          \(\infty\), and the two angles are negatives of each other. Why the sign flip?</div>
        <div class="sstep-body">
          <p>Think about traversing one of the circles on the sphere. Two circles through \(N\) also cross at
            one other point, the pullback of \(p\). Going once around, each circle passes through both
            crossings &mdash; but it arrives at the second crossing having travelled in the reverse sense
            relative to the other circle.</p>
          <p>A cleaner way to see it: rotate the sphere so that \(p\)'s pullback is at the <em>south</em> pole
            and \(N\) stays put. Now the two circles are two great circles through both poles &mdash; two
            meridians. Look down at the north pole and you see them crossing at some angle. Look at the same
            configuration from <em>below</em>, at the south pole, and you see the same two curves crossing
            with the sense reversed, exactly as a clock face reverses when you view it from behind.</p>
          <p>Hence \(-\theta\).</p>
          <p><strong>Why any of this matters.</strong> Your reading draws the conclusion immediately: "we may
            say that inversion about a circle preserves angle magnitudes at all points in
            \(\mathbb{C}^+\)." Without a definition of angle at \(\infty\), that sentence has a hole in it,
            and every theorem about angle preservation would need "except at \(\infty\)" appended. Defining
            the angle at \(\infty\) via the sphere closes the hole, and Theorem 3.4.5 &mdash; M&ouml;bius
            transformations preserve angles &mdash; gets to be stated without exceptions.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Arithmetic with \(\infty\)</h2>

  <p>Now that \(\infty\) is a point of \(\mathbb{C}^+\), it is very tempting to start computing with it.
    Here's someone doing that.</p>

  <p><strong>Click the first step that isn't legitimate.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Inversion in the unit circle extends to \(\mathbb{C}^+\) with
        \(i(0) = \infty\) and \(i(\infty) = 0\).</button>
      <button class="fline" type="button">A translation \(T_b(z) = z+b\) extends to \(\mathbb{C}^+\) by
        \(T_b(\infty) = \infty\), so \(\infty\) is a fixed point of every translation.</button>
      <button class="fline" type="button">Writing this as "\(\infty + b = \infty\)" is a fair shorthand for
        the previous line.</button>
      <button class="fline" type="button">Subtracting \(\infty\) from both sides of
        \(\infty + b = \infty\) gives \(b = 0\).</button>
      <button class="fline" type="button">But \(b\) was an arbitrary complex number, so every complex number
        is \(0\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct &mdash; it's the definition in your reading.</strong> The extended inversion is
        defined case by case: \(r^2/\overline{(z-z_0)}+z_0\) for ordinary points, \(\infty\) at the centre,
        and the centre at \(\infty\). Notice it's a <em>definition</em>, chosen to make the map continuous
        and bijective, not a computation.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct.</strong> This is Theorem 3.3.1: any general linear transformation extended to
        \(\mathbb{C}^+\) fixes \(\infty\). Sensible, since \(z + b\) marches off to infinity exactly when
        \(z\) does.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Sloppy, and it's where the trouble is planted &mdash; but as shorthand it isn't yet
          false.</strong></p>
      <p>"\(T_b(\infty) = \infty\)" is a statement about a function's value at a point. "\(\infty + b =
        \infty\)" looks like a statement about an <em>arithmetic operation</em>, and \(\mathbb{C}^+\) has no
        such operation at \(\infty\). Adding one point to the plane gives you a bigger set; it does not extend
        addition, multiplication, or anything else to that point.</p>
      <p>The shorthand is common and mostly harmless, which is exactly why it's dangerous. Nothing has gone
        wrong <em>yet</em> &mdash; the sentence still records a true fact about \(T_b\). The damage comes when
        someone treats it as an equation and starts operating on it.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>This is the illegitimate step.</strong></p>
      <p>Cancelling \(\infty\) from both sides means subtracting it, and subtraction is not defined at
        \(\infty\). More precisely: cancellation is a property of a group, and it holds because every element
        has an inverse. \(\infty\) has no additive inverse in \(\mathbb{C}^+\), so nothing licenses the
        cancellation.</p>
      <p>Compare a case where the same instinct fails for a familiar reason: from \(0\cdot 3 = 0 \cdot 5\) you
        may not cancel the \(0\) and conclude \(3 = 5\). Cancellation always needs justifying, and here it
        can't be.</p>
      <p><strong>What to take from this.</strong> \(\mathbb{C}^+\) is a <em>set of points</em>, not a number
        system. Its purpose is entirely geometric: to give clines a point in common, to let transformations
        be bijections, to remove case splits from theorem statements. It is not there to be computed with,
        and the moment you write \(\infty\) inside an arithmetic expression you have left what the definition
        supports.</p>
      <p>You can still <em>say</em> things like \(T(\infty) = a/c\), and Section 3.4 will. But those are
        definitions of how a particular map behaves at a particular point &mdash; each one justified by a
        limit &mdash; not consequences of arithmetic.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>The absurd conclusion, arrived at validly from line 4.</strong> If you accept line 4, this
        follows &mdash; which is how you know line 4 has to go. Work backwards from nonsense to the first
        unjustified step; it's the same discipline that found the flaw on Day 3 and Day 4.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Life in \(\mathbb{C}^+\)</h2>

  <div class="mc" data-answer="d">
    <p class="mc-q">In \(\mathbb{C}^+\), how many points does a dilation \(T(z) = kz\) (with \(k \gt 0\),
      \(k \neq 1\)) fix?</p>
    <button class="mc-opt" data-key="a">None.</button>
    <button class="mc-opt" data-key="b">One.</button>
    <button class="mc-opt" data-key="c">Infinitely many.</button>
    <button class="mc-opt" data-key="d">Two.</button>

    <div class="mc-fb" data-key="a">
      <p>\(T(0) = 0\), so at least one. Dilations have a centre, and the centre never moves.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>That was the answer before today. In \(\mathbb{C}\) alone, \(kz = z\) forces \(z = 0\), so exactly
        one. But \(\mathbb{C}^+\) has a new point, and it needs checking.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Only \(k=1\) fixes everything. For \(k \neq 1\), every non-zero finite point genuinely moves &mdash;
        it slides along its ray from the origin.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Right: \(0\) and \(\infty\). Your reading's revised fixed-point list says exactly this.</p>
      <p>The pair matters more than the count. Section 3.5 opens by studying M&ouml;bius transformations that
        fix \(0\) and \(\infty\), shows they are precisely the maps \(T(z) = re^{i\theta}z\) &mdash; dilations
        combined with rotations &mdash; and then handles the general two-fixed-point case by <em>moving the
          fixed points to \(0\) and \(\infty\)</em> and using this one. So this is the model case for the
        entire classification, and it only has two fixed points to be the model case for because
        \(\infty\) exists.</p>
    </div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Why is stereographic projection defined from the <em>north</em> pole onto the plane
      through the equator, rather than, say, from the north pole onto the plane tangent at the south pole?</p>
    <button class="mc-opt" data-key="a">Both work; the equatorial choice makes the unit circle correspond to
      the equator.</button>
    <button class="mc-opt" data-key="b">Projecting onto a tangent plane wouldn't be one-to-one.</button>
    <button class="mc-opt" data-key="c">Projecting onto a tangent plane wouldn't preserve angles.</button>
    <button class="mc-opt" data-key="d">Only the equatorial plane passes through the sphere's centre.</button>

    <div class="mc-fb" data-key="a">
      <p>Right, and it's worth knowing that the choice is a convenience rather than a necessity &mdash;
        different books make different ones. Projecting from \(N\) onto the tangent plane at the south pole is
        equally valid; it just scales everything by a factor of two.</p>
      <p>What the equatorial choice buys is that the sphere's three natural regions line up with the plane's
        three natural regions: southern hemisphere with the open unit disk, equator with the unit circle,
        northern hemisphere with the outside. Since inversion in the unit circle is going to swap inside and
        outside, this correspondence makes it a reflection of the sphere across the equatorial plane &mdash; a
        genuinely clarifying way to see it.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>It would be. Projecting from \(N\) onto any plane not through \(N\) is one-to-one on
        \(\mathbb{S}^2 - \{N\}\), by the same argument: each ray from \(N\) meets the sphere once more and
        meets the plane once.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Angle preservation (Theorem 3.3.5) doesn't depend on which plane you project onto &mdash; parallel
        planes give maps differing by a dilation, and dilations preserve angles. It's a property of projecting
        from a point on the sphere.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>True but not a reason. Passing through the centre isn't required for the construction to work; the
        rays from \(N\) will happily meet any plane that misses \(N\).</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Calculus gave you \(+\infty\) and \(-\infty\) on the real line. \(\mathbb{C}^+\) has exactly one
      \(\infty\). Explain the difference using the sphere &mdash; and then say what the analogous
      "one-point" version of the real line would look like.</li>
    <li>Inversion in a circle now has \(i_C(z_0) = \infty\) and \(i_C(\infty) = z_0\). Check that this makes
      \(i_C \circ i_C\) the identity on <em>all</em> of \(\mathbb{C}^+\), including the two new cases.</li>
    <li>We now have a definition for the angle two curves make at \(\infty\). Use it to answer: what angle do
      the real axis and the imaginary axis make at \(\infty\)?</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    function sphereDraw(p, pts, yaw, pitch, front, back) {
      var f = [], b = [];
      pts.forEach(function (q) {
        var pr = G.proj3(q, yaw, pitch);
        if (pr.depth >= 0) { f.push(pr.z); b.push(null); }
        else { b.push(pr.z); f.push(null); }
      });
      p.poly(b, back); p.poly(f, front);
    }

    function graticule(p, yaw, pitch) {
      var k, j;
      for (k = -60; k <= 60; k += 30) {
        var la = k * Math.PI / 180, ring = [];
        for (j = 0; j <= 120; j++) {
          var lo = 2 * Math.PI * j / 120;
          ring.push(G.v3(Math.cos(la) * Math.cos(lo), Math.cos(la) * Math.sin(lo), Math.sin(la)));
        }
        sphereDraw(p, ring, yaw, pitch, { color: '#eceef1', width: 1 }, { color: '#f4f6f7', width: 1 });
      }
      for (k = 0; k < 180; k += 30) {
        sphereDraw(p, G.greatCircle(G.v3(Math.cos(k * Math.PI / 180 + Math.PI / 2),
          Math.sin(k * Math.PI / 180 + Math.PI / 2), 0), 160), yaw, pitch,
          { color: '#eceef1', width: 1 }, { color: '#f4f6f7', width: 1 });
      }
    }

    /* ---- where infinity lives ---- */
    (function () {
      var yaw = -30 * Math.PI / 180, pitch = 0.42;

      var plane = G.plane('d12-pl', {
        span: 7.5, height: 320,
        handles: [{ name: 'z', z: c(1.5, 0.9), color: G.colors.blue, label: 'z' }],
        draw: function (p) {
          p.grid(); p.axes();
          p.circle(c(0, 0), 1, { color: G.colors.green, width: 2, dash: [5, 4] });
          p.label(c(0, 1), 'unit circle', { color: G.colors.green, dx: 8, dy: -6, size: 11 });
        },
        onDrag: function () { sph.redraw(); refresh(); }
      });

      var sph = G.plane('d12-sph', {
        span: 2.7, height: 320,
        draw: function (p) {
          p.circle(c(0, 0), 1, { color: '#c9ced4', width: 2, fill: '#fbfcfd', fillAlpha: 1 });
          graticule(p, yaw, pitch);

          // The equator, standing for the unit circle.
          sphereDraw(p, G.greatCircle(G.v3(0, 0, 1), 200), yaw, pitch,
            { color: G.colors.green, width: 2.4 },
            { color: '#a8d8c0', width: 1.4, dash: [4, 4] });

          var N = G.v3(0, 0, 1), S = G.v3(0, 0, -1);
          var P3 = G.stereoInv(plane.get('z'));

          // The projecting ray from N through the sphere point, continuing to
          // the plane point (drawn at the sphere's equatorial plane).
          var prN = G.proj3(N, yaw, pitch), prP = G.proj3(P3, yaw, pitch);
          p.seg(prN.z, prP.z, { color: G.colors.orange, width: 1.6, dash: [5, 4] });

          p.dot(G.proj3(S, yaw, pitch).z, { color: '#b9bfc6', r: 4 });
          p.dot(prN.z, { color: G.colors.violet, r: 6 });
          p.label(prN.z, 'N = ∞', { color: G.colors.violet, dx: 9, dy: -9 });
          p.dot(prP.z, { color: G.colors.blue, r: 6, hollow: prP.depth < 0 });
          p.label(prP.z, 'φ⁻¹(z)', { color: G.colors.blue, dx: 10, dy: 16, size: 12 });
        }
      });

      function refresh() {
        var z = plane.get('z'), P3 = G.stereoInv(z);
        var hemi = P3.z > 1e-6 ? 'northern hemisphere' : P3.z < -1e-6 ? 'southern hemisphere' : 'the equator';
        var side = G.abs(z) > 1 ? 'outside the unit circle' : G.abs(z) < 1 ? 'inside the unit circle'
          : 'on the unit circle';
        G.say('d12-sph-out',
          '<div class="q"><b>z</b><span>' + G.str(z) + ' &nbsp;(' + side + ')</span></div>' +
          '<div class="q"><b>|z|</b><span>' + G.num(G.abs(z), 3) + '</span></div>' +
          '<div class="q hit"><b>φ⁻¹(z) lies in</b><span>' + hemi + '</span></div>' +
          '<div class="q"><b>height above the equator</b><span>' + G.num(P3.z, 3) + '</span></div>');
      }

      G.slider('d12-yaw', function (v) { yaw = v * Math.PI / 180; sph.redraw(); });
      refresh();
    })();

    /* ---- slices of the sphere become clines ---- */
    (function () {
      var tilt = 0, yaw = -30 * Math.PI / 180, pitch = 0.42;
      var OFFSETS = [-0.82, -0.55, -0.25, 0, 0.25, 0.55, 0.82];

      function axis() { return G.v3(Math.sin(tilt), 0, Math.cos(tilt)); }

      // The circle {x on the sphere : x . u = h}: centre h*u, radius sqrt(1-h^2)
      // in the plane perpendicular to u.
      function slice(h, n) {
        var u = axis();
        var seed = Math.abs(u.z) < 0.9 ? G.v3(0, 0, 1) : G.v3(1, 0, 0);
        var e1 = G.v3(u.y * seed.z - u.z * seed.y, u.z * seed.x - u.x * seed.z,
          u.x * seed.y - u.y * seed.x);
        var L = Math.hypot(e1.x, e1.y, e1.z);
        e1 = G.v3(e1.x / L, e1.y / L, e1.z / L);
        var e2 = G.v3(u.y * e1.z - u.z * e1.y, u.z * e1.x - u.x * e1.z, u.x * e1.y - u.y * e1.x);
        var rad = Math.sqrt(Math.max(0, 1 - h * h)), out = [], i;
        for (i = 0; i <= n; i++) {
          var t = 2 * Math.PI * i / n;
          out.push(G.v3(h * u.x + rad * (Math.cos(t) * e1.x + Math.sin(t) * e2.x),
            h * u.y + rad * (Math.cos(t) * e1.y + Math.sin(t) * e2.y),
            h * u.z + rad * (Math.cos(t) * e1.z + Math.sin(t) * e2.z)));
        }
        return out;
      }

      // How close does this slice come to the north pole? h = u . N = u.z.
      function throughN(h) { return Math.abs(h - axis().z) < 0.035; }

      var sph2 = G.plane('d12-sph2', {
        span: 2.7, height: 320,
        draw: function (p) {
          p.circle(c(0, 0), 1, { color: '#c9ced4', width: 2, fill: '#fbfcfd', fillAlpha: 1 });
          graticule(p, yaw, pitch);
          OFFSETS.forEach(function (h) {
            var hot = throughN(h);
            sphereDraw(p, slice(h, 220), yaw, pitch,
              { color: hot ? G.colors.orange : G.colors.blue, width: hot ? 3 : 2 },
              { color: hot ? '#f7c7a6' : '#bfe4f6', width: 1.4, dash: [4, 4] });
          });
          var prN = G.proj3(G.v3(0, 0, 1), yaw, pitch);
          p.dot(prN.z, { color: G.colors.violet, r: 6 });
          p.label(prN.z, 'N', { color: G.colors.violet, dx: 9, dy: -9 });
        }
      });

      var pl2 = G.plane('d12-pl2', {
        span: 9, height: 320,
        draw: function (p) {
          p.grid(); p.axes({ ticks: false });
          OFFSETS.forEach(function (h) {
            var hot = throughN(h);
            var pts = slice(h, 400).map(G.stereo);
            // stereo returns null at the north pole, which breaks the polyline
            // exactly where the image runs off to infinity.
            var guarded = pts.map(function (z) {
              return (z && G.abs(z) < 400) ? z : null;
            });
            p.poly(guarded, { color: hot ? G.colors.orange : G.colors.blue, width: hot ? 3 : 2 });
          });
          p.dot(c(0, 0), { color: G.colors.ink, r: 3 });
        }
      });

      function refresh() {
        sph2.redraw(); pl2.redraw();
        var any = OFFSETS.some(throughN);
        G.say('d12-slices-out', any
          ? '<b>One slice passes through N</b> — drawn in orange, and its image in the plane is a '
          + '<b>straight line</b>. Every other slice gives a circle.'
          : 'No slice currently passes through N, so every image is a circle. '
          + 'Nudge the tilt until one of them catches the pole.');
      }

      G.slider('d12-tilt', function (v) { tilt = v * Math.PI / 180; refresh(); });
      G.slider('d12-yaw2', function (v) { yaw = v * Math.PI / 180; sph2.redraw(); });
      refresh();
    })();
  })();
</script>
