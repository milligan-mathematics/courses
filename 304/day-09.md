---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 9: Reflection in a Circle"
day: 9
chapter_number: 3
chapter: "Transformations"
day_title: "Reflection in a Circle"
blurb: "Reflection across a line has an obvious meaning. Reflection across a circle sounds like nonsense until you write down what a mirror actually does — and then it's forced."
reading: "Section 3.2, the definition of inversion through Example 3.2.2"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The defining equation, and nothing else</h2>

  <p>Inversion in the circle \(C\) with centre \(z_0\) and radius \(r\) sends \(z\) to the point \(z^*\) on
    the ray from \(z_0\) through \(z\) satisfying</p>

  \[ |z - z_0|\cdot|z^* - z_0| = r^2. \]

  <p>That's the whole definition. Drag \(z\) and watch the two distances trade off. Note that the circle here
    is <em>not</em> the unit circle &mdash; inversion is defined for any circle, and it's worth keeping that
    generality in view from the start.</p>

  <canvas class="plot g304" id="d9-def"></canvas>
  <div class="drag-hint">Drag \(z\).</div>
  <div class="readout cols" id="d9-def-out"></div>

  <p>Four things you can see, all of which your reading states:</p>

  <ul>
    <li><strong>Points of \(C\) don't move.</strong> Put \(z\) on the circle: then \(|z-z_0| = r\), so
      \(|z^*-z_0|\) must be \(r\) too, and \(z^*\) is on the same ray. Same point.</li>
    <li><strong>Inside and outside swap.</strong> If \(|z-z_0| \lt r\) then \(|z^*-z_0| \gt r\), because the
      product is pinned at \(r^2\).</li>
    <li><strong>Closer in means further out.</strong> Push \(z\) toward \(z_0\) and \(z^*\) leaves the screen.
      The relationship is reciprocal, not linear.</li>
    <li><strong>The centre has nowhere to go.</strong> At \(z = z_0\) the left factor is \(0\), and no finite
      \(z^*\) makes the product \(r^2\). Inversion is a transformation of \(\mathbb{C} - \{z_0\}\), which is
      an ugly domain, and Section 3.3 exists to fix it.</li>
  </ul>

  <p>Compare with reflection across a line, which is what this is imitating. There, \(z\) and \(z^*\) are
    equidistant from the mirror, on opposite sides, along the perpendicular. Here, \(z\) and \(z^*\) are on
    the same ray from the centre, on opposite sides of the mirror, with distances multiplying to \(r^2\)
    instead of being equal. Same idea &mdash; "other side of the mirror, matched up" &mdash; with the matching
    rule bent to fit a curved mirror.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>What it does to everything at once</h2>

  <p>Example 3.2.2 inverts a grid, a circle, and the letter 'M', and notes that the straight strokes of the M
    come back as arcs. Here it is live. Drag the shape around and watch what happens as it crosses the circle
    and as it approaches the centre.</p>

  <canvas class="plot g304" id="d9-figure"></canvas>
  <div class="drag-hint">Drag the shape by its handle.</div>
  <div class="legend">
    <span class="green">the circle of inversion \(C\)</span>
    <span class="blue">the figure</span>
    <span class="orange">its image</span>
  </div>

  <p>What to notice, in order of how much trouble it will save you later:</p>

  <p><strong>Straight segments become arcs.</strong> Every stroke of the shape is straight, and every stroke
    of the image is curved. Inversion does not map lines to lines. This is the first transformation we've met
    that doesn't, and it is exactly why it's worth having.</p>

  <p><strong>Except when they don't.</strong> Line the shape up so one of its strokes points straight at the
    centre of \(C\), and that stroke's image stays straight. A line through the centre of inversion comes back
    a line &mdash; because every point on it is already on its own ray from \(z_0\), so inversion just slides
    points along it.</p>

  <p><strong>The corners stay square.</strong> Look at the right angles in the shape and then in the image.
    The image's strokes are curved, but where two of them meet, they still meet at a right angle. Inversion
    bends curves and leaves angles alone &mdash; the same conformality you saw for \(1/z\) on Day 5, and now
    you know why they're related: on the unit circle, \(i_{\mathbb{S}^1}(z) = 1/\overline{z}\).</p>

  <p><strong>Near the centre, everything explodes.</strong> Push the shape toward \(z_0\) and its image races
    off in every direction. Nothing is going wrong; the map is just extremely non-uniform. Distances near the
    centre get multiplied by enormous factors, and distances far away get crushed.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>"Inversion is just a dilation"</h2>

  <p>Rearranging the definition gives a formula that looks awfully familiar. Here's an argument built on
    it.</p>

  <p><strong>Click the step that doesn't hold up.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">\(z^*\) is on the ray from \(z_0\) through \(z\), so
        \(z^* - z_0 = k\,(z - z_0)\) for some real \(k \gt 0\).</button>
      <button class="fline" type="button">Substituting into \(|z-z_0|\cdot|z^*-z_0| = r^2\) gives
        \(k\,|z-z_0|^2 = r^2\), so \(k = \dfrac{r^2}{|z-z_0|^2}\).</button>
      <button class="fline" type="button">Therefore \(i_C(z) = k\,(z-z_0) + z_0\).</button>
      <button class="fline" type="button">But \(S(z) = k(z-z_0)+z_0\) is precisely the formula for a dilation
        by factor \(k\) about the point \(z_0\). So inversion in \(C\) is a dilation about \(z_0\).</button>
      <button class="fline" type="button">In particular, since dilations map lines to lines, inversion maps
        lines to lines.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct.</strong> "On the ray from \(z_0\) through \(z\)" means the displacement
        \(z^*-z_0\) points the same direction as \(z-z_0\), and same-direction means a positive real
        multiple.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct, and it's the standard computation.</strong> Taking moduli,
        \(|z^*-z_0| = k|z-z_0|\), so the defining equation reads \(|z-z_0|\cdot k|z-z_0| = r^2\). Solving for
        \(k\) gives what's written. (For the unit circle centred at \(0\), this is Example 3.2.1's
        \(k = 1/|z|^2\).)</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Correct.</strong> This is just line 1 rearranged, with \(k\) now known. Everything through
        here is genuinely true, which is what makes the next line so tempting.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Here it is. Look at what \(k\) is.</strong></p>
      <p>\(k = \dfrac{r^2}{|z-z_0|^2}\) <em>contains \(z\)</em>. It is not a constant &mdash; it's a different
        number for every point of the plane. A dilation about \(z_0\) is \(S(z) = k(z-z_0)+z_0\) for
        <strong>one fixed \(k\)</strong> applied to every point at once. This formula uses a different
        stretch factor at every point.</p>
      <p>Concretely: a point at distance \(\tfrac{r}{2}\) from \(z_0\) gets \(k = 4\), and a point at
        distance \(2r\) gets \(k = \tfrac14\). One expands, the other contracts, in the same map. No dilation
        does that.</p>
      <p>This error &mdash; <em>reading a varying quantity as a constant because the formula has the shape of
        one</em> &mdash; is worth learning to catch, because it is going to recur. When Section 3.5 writes the
        normal form of a M&ouml;bius transformation as \(\frac{T(z)-p}{T(z)-q} = re^{i\theta}\frac{z-p}{z-q}\),
        the whole content is that \(re^{i\theta}\) really <em>is</em> constant, the same for every \(z\).
        That's a theorem, not a notation.</p>
      <p>There's a genuine result hiding nearby, though. Inversion is not a dilation, but each individual
        <em>ray</em> from \(z_0\) does get mapped to itself, with points sliding along it. So inversion is
        "radial" &mdash; it just isn't uniform.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>False, and the second activity shows it directly.</strong> Straight strokes came back as
        arcs. Theorem 3.2.6 will say precisely what does happen: inversion maps clines to clines, and a cline
        through the centre of inversion gives a line while any other gives a circle.</p>
      <p>Notice that this line is a <em>consequence</em> of the bad step rather than the bad step itself.
        When an argument reaches a conclusion you can see is false, the useful discipline is to go back and
        find the first line you can't defend &mdash; not to argue with the last one.</p>
    </div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>What inversion does to a distance</h2>

  <p>Inversion mangles distances &mdash; you've just seen it stretch and squash in the same picture. But it
    mangles them in an <em>orderly</em> way, and the formula for how is worth deriving. It is the single most
    useful computation in this chapter, and it is not in your reading.</p>

  <p>Take two points \(z, w\), both different from \(z_0\), and ask how far apart their images are. Use the
    formula from the flaw activity: \(i_C(z) = z_0 + \dfrac{r^2}{|z-z_0|^2}(z-z_0)\), or equivalently the
    boxed form \(i_C(z) = \dfrac{r^2}{\overline{z-z_0}} + z_0\).</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Simplify first: take \(z_0 = 0\) and \(r = 1\), so \(i(z) = 1/\overline{z}\).
          Compute \(i(z) - i(w)\) as a single fraction.</div>
        <div class="sstep-body">
          \[ i(z) - i(w) = \frac{1}{\overline{z}} - \frac{1}{\overline{w}}
          = \frac{\overline{w} - \overline{z}}{\overline{z}\,\overline{w}}
          = \frac{\overline{w - z}}{\overline{z}\,\overline{w}}. \]
          <p>The middle step uses that conjugation respects subtraction, so
            \(\overline{w}-\overline{z} = \overline{w-z}\).</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now take the modulus of both sides. What do you get?</div>
        <div class="sstep-body">
          <p>Moduli multiply and divide, and conjugation doesn't change a modulus, so</p>
          \[ |i(z) - i(w)| = \frac{|z-w|}{|z|\,|w|}. \]
          <p>Read it out loud: <strong>the distance between the images is the original distance, divided by
              the two distances to the centre.</strong></p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Restore the general circle. What is the formula for inversion in \(C\) with
          centre \(z_0\) and radius \(r\)?</div>
        <div class="sstep-body">
          \[ |i_C(z) - i_C(w)| = \frac{r^2\,|z-w|}{|z-z_0|\,|w-z_0|}. \]
          <p>The \(r^2\) is an overall scale and the two denominators are the distances from each point to the
            centre. Sanity checks: if both points sit on \(C\) the denominator is \(r^2\) and the distance is
            unchanged, as it must be, since points of \(C\) don't move. And as \(z \to z_0\) the denominator
            goes to \(0\) and the image distance blows up, matching what you watched happen.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now the payoff. Distances are wrecked. But look at the formula and find a
          combination of distances that <em>would</em> survive.</div>
        <div class="sstep-body">
          <p>Divide two of them. Taking four points \(z_1,z_2,z_3,z_4\), the ratio</p>
          \[ \frac{|i(z_1)-i(z_2)|}{|i(z_1)-i(z_4)|} =
          \frac{|z_1-z_2|}{|z_1-z_4|}\cdot\frac{|z_4-z_0|}{|z_2-z_0|} \]
          <p>still carries junk. But form the <em>ratio of two ratios</em>:</p>
          \[ \frac{|z_1-z_3|}{|z_1-z_4|}\cdot\frac{|z_2-z_4|}{|z_2-z_3|} \]
          <p>and every \(|z_k - z_0|\) factor appears once on top and once on the bottom. They all cancel, and
            so does the \(r^2\). This four-point combination is <strong>unchanged by inversion</strong>.</p>
          <p>You are looking at the modulus of the <strong>cross ratio</strong>, which Definition 3.4.10 will
            introduce as if from nowhere. It is not from nowhere. It is the thing that survives when
            everything simpler has been destroyed &mdash; and Klein's programme, which we met on Day 1, says
            that what survives is what the geometry is about.</p>
          <p>Distance died. Ratios of distances died. Ratios of ratios of distances live, and so do angles.
            That short list is essentially the content of M&ouml;bius geometry.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Getting the definition straight</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Inversion in \(C\) applied twice returns every point to where it started. What kind of
      map does that make it?</p>
    <button class="mc-opt" data-key="a">An isometry, since nothing has moved after two applications.</button>
    <button class="mc-opt" data-key="b">An involution &mdash; it is its own inverse.</button>
    <button class="mc-opt" data-key="c">The identity.</button>
    <button class="mc-opt" data-key="d">A rotation by \(180^\circ\).</button>

    <div class="mc-fb" data-key="a">
      <p>An isometry has to preserve distances at every step, and inversion emphatically does not &mdash; the
        scaffold above computes exactly how badly. "Undoes itself" and "preserves distance" are unrelated
        properties.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Right, and it's shared with reflection across a line, which is the point of the analogy. A mirror
        applied twice does nothing.</p>
      <p>Worth checking algebraically for the unit circle: \(i(i(z)) = 1/\overline{1/\overline{z}} =
        1/(1/z) = z\), where the middle step uses \(\overline{1/\overline{z}} = 1/z\). Note it takes both
        conjugations to get back &mdash; which is another way of seeing that a single inversion reverses
        orientation and two restore it.</p>
      <p>The word will come back in Section 3.5, where involutions turn out to be a class worth singling
        out.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>The <em>composition</em> \(i_C \circ i_C\) is the identity; \(i_C\) itself certainly isn't &mdash;
        it moves everything except the points of \(C\). Keep the map and its square apart.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Rotation by \(180^\circ\) about \(z_0\) is \(z \mapsto -(z-z_0)+z_0\), and it's also its own inverse,
        so the instinct isn't crazy. But it sends points to the <em>opposite</em> ray from \(z_0\), while
        inversion keeps them on the <em>same</em> ray. Different maps that happen to share one property.</p>
    </div>
  </div>

  <div class="mc" data-answer="d">
    <p class="mc-q">In the second activity, one orientation of the shape had a stroke whose image stayed
      perfectly straight. What was special about it?</p>
    <button class="mc-opt" data-key="a">It was tangent to \(C\).</button>
    <button class="mc-opt" data-key="b">It was entirely outside \(C\).</button>
    <button class="mc-opt" data-key="c">It was perpendicular to \(C\).</button>
    <button class="mc-opt" data-key="d">Extended, it passed through the centre \(z_0\).</button>

    <div class="mc-fb" data-key="a">
      <p>Tangency isn't it. A tangent line touches \(C\) at one point &mdash; that point is fixed, since
        points of \(C\) don't move &mdash; but the rest of the line still curves away into an arc.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Being outside changes nothing about straightness. A line entirely outside \(C\) inverts to a circle
        entirely inside it (minus the centre, which nothing reaches). Position relative to \(C\) controls
        where the image goes, not what shape it is.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Very close, and in fact these two answers describe the same lines &mdash; a line is perpendicular to
        a circle exactly when it passes through the centre. But "perpendicular" is the derived description and
        "through the centre" is the reason. The mechanism is that inversion moves points along rays from
        \(z_0\), and a line through \(z_0\) is a union of two such rays, so points slide along it and never
        leave.</p>
      <p>The perpendicularity framing pays off later, though: Corollary 3.2.9 says <em>every</em> cline
        orthogonal to \(C\) is mapped to itself, circles included. Lines through the centre are just the
        easiest examples.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Right. Inversion moves each point along its own ray from \(z_0\), so a line through \(z_0\) is built
        out of exactly two such rays and every point stays on it.</p>
      <p>This is the first half of Theorem 3.2.6: a cline through the centre of inversion has a <em>line</em>
        for its image, and anything else gives a circle. Once \(\infty\) exists, this stops being two cases
        &mdash; the centre maps to \(\infty\), a line is a cline through \(\infty\), and the theorem becomes
        one sentence.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Reflection across a line and inversion in a circle are both "mirrors." List one property they share
      and one where they part company.</li>
    <li>The formula \(|i(z)-i(w)| = \dfrac{|z-w|}{|z||w|}\) says inversion in the unit circle
      <em>increases</em> some distances and <em>decreases</em> others. Where's the boundary between the two
      behaviours? A rough answer is fine; the point is to know it isn't the unit circle.</li>
    <li>We now have a transformation that doesn't map lines to lines. Given that Chapter 4 defines a geometry
      by the transformations it allows, what does admitting inversion cost us &mdash; and what might it be
      worth?</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    // A circle of inversion that is deliberately NOT the unit circle: the
    // computational exercises in this section are all about inverting specific
    // lines and circles in the unit circle, and these widgets must not answer
    // them.
    var Z0 = c(-0.5, 0.3), R = 2.1;

    /* ---- the defining equation ---- */
    (function () {
      var P = G.plane('d9-def', {
        span: 13, center: c(0, 0), height: 380,
        handles: [{
          name: 'z', z: c(2.6, 1.9), color: G.colors.blue, label: 'z',
          // Never let z sit exactly on the centre, where the image is undefined.
          constrain: function (w) {
            var d = G.sub(w, Z0);
            return G.abs(d) < 0.18 ? G.add(Z0, G.scale(d, 0.18 / Math.max(G.abs(d), 1e-6))) : w;
          }
        }],
        draw: function (p) {
          var z = p.get('z');
          p.grid(); p.axes();

          p.circle(Z0, R, { color: G.colors.green, width: 2.6 });
          p.dot(Z0, { color: G.colors.green, r: 5 });
          p.label(Z0, 'z₀', { color: G.colors.green, dx: 9, dy: -8 });

          var zs = G.invertIn(z, Z0, R);
          p.ray(Z0, z, { color: '#dfe3e7', width: 1.4 });
          p.seg(Z0, z, { color: G.colors.blue, width: 2.4 });
          p.seg(Z0, zs, { color: G.colors.orange, width: 2.4 });
          p.dot(zs, { color: G.colors.orange, r: 6 });
          p.label(zs, 'z*', { color: G.colors.orange, dx: 10, dy: -9 });

          // Mark where the ray meets C: the geometric mean of the two distances.
          var dir = G.sub(z, Z0);
          var hit = G.add(Z0, G.scale(dir, R / G.abs(dir)));
          p.dot(hit, { color: G.colors.green, r: 4 });
        },
        onDrag: function (p) { refresh(p); }
      });

      function refresh(p) {
        var z = p.get('z'), zs = G.invertIn(z, Z0, R);
        var d1 = G.abs(G.sub(z, Z0)), d2 = G.abs(G.sub(zs, Z0));
        var where = d1 < R - 1e-6 ? 'inside C' : d1 > R + 1e-6 ? 'outside C' : 'on C';
        var wh2 = d2 < R - 1e-6 ? 'inside C' : d2 > R + 1e-6 ? 'outside C' : 'on C';
        G.say('d9-def-out',
          '<div class="q"><b>|z − z₀|</b><span>' + G.num(d1, 3) + ' &nbsp;(' + where + ')</span></div>' +
          '<div class="q"><b>|z* − z₀|</b><span>' + G.num(d2, 3) + ' &nbsp;(' + wh2 + ')</span></div>' +
          '<div class="q hit"><b>their product</b><span>' + G.num(d1 * d2, 3) + '</span></div>' +
          '<div class="q hit"><b>r²</b><span>' + G.num(R * R, 3) + '</span></div>');
      }
      refresh(P);
    })();

    /* ---- inversion applied to a whole figure ---- */
    (function () {
      // A blocky shape with right angles, so conformality is visible at corners.
      var SHAPE = [
        c(0, 0), c(2.6, 0), c(2.6, 0.62), c(1.6, 0.62),
        c(1.6, 2.5), c(0.98, 2.5), c(0.98, 0.62), c(0, 0.62)
      ];

      G.plane('d9-figure', {
        span: 15, center: c(0.4, 0.6), height: 430,
        handles: [{ name: 'o', z: c(2.4, -2.2), color: G.colors.blue, label: 'drag me' }],
        draw: function (p) {
          var o = p.get('o');
          var inv = function (z) { return G.invertIn(z, Z0, R); };
          p.grid(); p.axes({ ticks: false });

          p.circle(Z0, R, { color: G.colors.green, width: 2.6 });
          p.dot(Z0, { color: G.colors.green, r: 5 });
          p.label(Z0, 'z₀', { color: G.colors.green, dx: 9, dy: -8 });

          var placed = SHAPE.map(function (z) { return G.add(z, o); });

          // The image: each straight edge sampled and pushed through inversion,
          // so a stroke that becomes an arc actually looks like one.
          for (var i = 0; i < placed.length; i++) {
            var A = placed[i], B = placed[(i + 1) % placed.length];
            p.curve(function (t) { return inv(G.add(A, G.scale(G.sub(B, A), t))); },
              0, 1, 90, { color: G.colors.orange, width: 2.6 });
          }
          p.poly(placed, { closed: true, color: G.colors.blue, width: 2.4, fill: G.colors.blue });
        }
      });
    })();
  })();
</script>
