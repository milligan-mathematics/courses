---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 21: Möbius Geometry"
day: 21
chapter_number: 4
chapter: "Geometry"
day_title: "Möbius Geometry"
blurb: "The biggest group we've built, and so the poorest geometry. Distance is gone. What's left is angle and the cross ratio — and that turns out to be exactly enough to build hyperbolic and elliptic geometry out of."
reading: "Section 4.2, Möbius geometry and its invariants"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Every cline is the same cline</h2>

  <p>M&ouml;bius geometry is \((\mathbb{C}^+, \mathcal{M})\), with \(\mathcal{M}\) the group of all
    M&ouml;bius transformations. Your reading's first bullet is startling if you take it seriously:</p>

  <blockquote class="source">Any two clines are congruent in M&ouml;bius Geometry.</blockquote>

  <p>A tiny circle and an infinite straight line are the same figure. Below, one M&ouml;bius transformation
    carrying a shape through a range of positions &mdash; watch a circle become a line and come back.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d21-t">move through the family</label>
      <input type="range" id="d21-t" min="-100" max="100" step="1" value="-45">
    </div>
  </div>

  <canvas class="plot g304" id="d21-clines"></canvas>
  <div class="readout cols" id="d21-clines-out"></div>

  <p>Nothing dramatic happens to the figure at the moment it straightens. The pole of the transformation
    crosses the circle, so one point of the circle is sent to \(\infty\), and a cline through \(\infty\) is a
    line. Slide further and it curves back the other way.</p>

  <p>Your reading's second bullet follows immediately: <strong>the set of all clines is a minimally invariant
      set of M&ouml;bius geometry.</strong> Invariant because M&ouml;bius transformations send clines to
    clines (Theorem 3.4.5); minimal because any two of them are congruent (Theorem 3.4.15) and
    Theorem 4.1.10 turns that into minimality.</p>

  <p>Compare what the same collection looked like in weaker geometries. In Euclidean geometry, "all clines"
    splits into infinitely many congruence classes &mdash; one for each radius, plus the lines. In M&ouml;bius
    geometry it is a single class. The group got bigger and the distinctions collapsed, exactly as Day 19
    predicted.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The audit: what's left standing</h2>

  <p>Here is the whole course so far, as a ledger. Pick a quantity and see which geometries preserve it.</p>

  <div class="toggles">
    <button class="btn411 ghost on" type="button" data-q="dist">distance \(|z-w|\)</button>
    <button class="btn411 ghost" type="button" data-q="ratio">ratio of distances</button>
    <button class="btn411 ghost" type="button" data-q="angle">angle</button>
    <button class="btn411 ghost" type="button" data-q="cross">cross ratio</button>
  </div>

  <canvas class="plot g304" id="d21-audit"></canvas>
  <div class="readout cols" id="d21-audit-out"></div>

  <p>The pattern is a staircase. Each time the group grows, one more quantity falls off the list:</p>

  <table class="vals">
    <tr>
      <th>geometry</th>
      <th>distance</th>
      <th>ratio of distances</th>
      <th>angle</th>
      <th>cross ratio</th>
    </tr>
    <tr>
      <td>Euclidean \((\mathbb{C},\mathcal{E})\)</td>
      <td>&#10003;</td>
      <td>&#10003;</td>
      <td>&#10003;</td>
      <td>&#10003;</td>
    </tr>
    <tr>
      <td>Similarities \(z\mapsto az+b\)</td>
      <td>&#10007;</td>
      <td>&#10003;</td>
      <td>&#10003;</td>
      <td>&#10003;</td>
    </tr>
    <tr>
      <td>M&ouml;bius \((\mathbb{C}^+,\mathcal{M})\)</td>
      <td>&#10007;</td>
      <td>&#10007;</td>
      <td>&#10003;</td>
      <td>&#10003;</td>
    </tr>
  </table>

  <p>Your reading makes the loss of distance concrete with \(T(z) = 1/z\): the points \(2\) and \(3\) are one
    unit apart, and their images \(1/2\) and \(1/3\) are one sixth of a unit apart. One example is enough to
    kill an invariant &mdash; that's the asymmetry from Day 20, where invariants prove difference cheaply and
    sameness expensively.</p>

  <p>And your reading is pointed about why angle survival matters. Euclid's <em>fourth</em> postulate says all
    right angles are equal &mdash; that a right angle held over there is the same as one held here. A geometry
    whose transformations mangled angles could not satisfy it, and so could not be a candidate for the
    non-Euclidean geometries we've been chasing since Day 1. M&ouml;bius geometry keeps angles. That is not a
    lucky accident; it's the requirement that shaped the definition.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>Where this has all been going</h2>

  <p>Three chapters of transformations, and the payoff is one paragraph at the end of Section 4.2: rather
    than pursue M&ouml;bius geometry itself, the book applies it to two "subgeometries." Here's why that
    works, and what it means.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">First: why is M&ouml;bius geometry itself not the destination? What's wrong
          with it as a geometry to do mathematics in?</div>
        <div class="sstep-body">
          <p>It's too poor. With every cline congruent to every other and no notion of distance at all, there
            is very little to say. You can't ask how long a segment is, or whether two triangles have the same
            area, or what the angle sum of a triangle is &mdash; there aren't any triangles, since there are
            no line segments distinguishable from arcs.</p>
          <p>Day 19's trade-off, at its extreme: an enormous group buys you very few invariants.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">The fix is to shrink the group. Which subgroup of \(\mathcal{M}\) would you
          take to build a geometry inside the unit disk?</div>
        <div class="sstep-body">
          <p>The M&ouml;bius transformations that <strong>map the unit disk onto itself</strong>. Those are
            the allowable motions of the Poincar&eacute; disk, and Chapter 5 is about the resulting geometry.
          </p>
          <p>Check that this really is a group, since it's the point: the identity preserves the disk;
            composing two disk-preserving maps preserves it; and the inverse of a disk-preserving bijection
            preserves it. Closure comes free, because "preserves \(D\)" is exactly the sort of condition
            composition respects.</p>
          <p>Day 11 supplied these maps: inversion in any cline orthogonal to the unit circle preserves the
            unit circle, so any even number of such inversions is a disk-preserving M&ouml;bius
            transformation.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Shrinking the group gives back invariants. Which ones come back, and where
          does hyperbolic distance come from?</div>
        <div class="sstep-body">
          <p>Angle and the cross ratio survive from M&ouml;bius geometry &mdash; a subgroup preserves
            everything the whole group preserved. The gain is that the smaller group also preserves things
            \(\mathcal{M}\) did not, and the crucial one is a <em>distance</em>.</p>
          <p>It's built from the cross ratio, and it has to be: the cross ratio is the only numerical
            invariant available, so any invariant distance must be assembled from it. Given two points of the
            disk, take the geodesic through them, note the two points where it meets the boundary circle, and
            form the cross ratio of those four points. It's invariant, and with a logarithm applied it obeys
            the triangle inequality &mdash; a metric, in the sense of Definition 4.1.14.</p>
          <p>The boundary circle is the ingredient the disk-preserving subgroup supplies. A general
            M&ouml;bius transformation would move the boundary somewhere else; these don't, so the two extra
            points are always available.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Last: connect this back to Day 1. What has the machinery of Chapters 2, 3
          and 4 actually bought us?</div>
        <div class="sstep-body">
          <p>On Day 1 you counted the lines through a point missing a given line, and got one, many, or none
            in three different worlds. The middle picture &mdash; the Poincar&eacute; disk with its arcs
            &mdash; you were asked to accept on faith.</p>
          <p>You can now build it. The arcs are the clines orthogonal to the unit circle (Day 11). The motions
            are the M&ouml;bius transformations preserving the disk (today). Angles in the picture are honest
            angles, because M&ouml;bius transformations are conformal (Day 8, Day 13). Distance comes from
            the cross ratio (Day 15). Every ingredient of that picture is something you have proved.</p>
          <p>And the strategy was Klein's, stated on Day 1 and executed since: <em>don't build a geometry
              from axioms and see what follows &mdash; choose a space and a group of motions, and study what
              they can't change.</em> Euclid's fifth postulate was never disproved. It was simply found to be
            a feature of one particular group among several, none of them privileged.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>What a poor geometry can and can't say</h2>

  <p>An argument about M&ouml;bius geometry's limitations.</p>

  <p><strong>Click the step that isn't right.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Euclidean distance is not an invariant of M&ouml;bius geometry
        &mdash; the map \(T(z) = 1/z\) changes the distance between \(2\) and \(3\).</button>
      <button class="fline" type="button">Any two clines are congruent in M&ouml;bius geometry, so the set of
        all clines is minimally invariant.</button>
      <button class="fline" type="button">In particular, a circle of radius \(1\) is congruent to a circle of
        radius \(1000\), and to a straight line.</button>
      <button class="fline" type="button">So M&ouml;bius geometry cannot distinguish any two figures at all,
        and every figure is congruent to every other.</button>
      <button class="fline" type="button">Nevertheless it is a perfectly good geometry, since
        \(\mathcal{M}\) is a group.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct, and it's your reading's own example.</strong> \(|2-3| = 1\) while
        \(|1/2 - 1/3| = 1/6\). One counterexample is all it takes.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct.</strong> Theorem 3.4.15 gives the congruence; Theorem 4.1.10 converts "invariant
        and all congruent" into "minimally invariant."</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Correct, and worth sitting with.</strong> In M&ouml;bius geometry, radius is meaningless
        &mdash; a circle has no invariant size, and the distinction between a circle and a line is not a
        distinction the geometry can make. On the sphere, where these maps really live, both are just
        circles.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Here's the overreach.</strong></p>
      <p>Clines being a single congruence class says nothing about figures that aren't clines. M&ouml;bius
        geometry distinguishes plenty:</p>
      <ul>
        <li>A single point is not congruent to a pair of points &mdash; transformations are bijections, so
          they preserve how many points a figure has.</li>
        <li>Two clines crossing at \(30^\circ\) are not congruent to two clines crossing at \(60^\circ\),
          because angle is invariant.</li>
        <li>Four points with cross ratio \(2\) are not congruent, in order, to four points with cross ratio
          \(3\).</li>
        <li>A cline is not congruent to a pair of disjoint clines.</li>
      </ul>
      <p>The error is generalising from one minimally invariant set to the whole geometry. A minimally
        invariant set is <em>one</em> congruence class; a geometry has many, and the ones this geometry keeps
        are precisely what your problem set is asking you to identify for particular figures.</p>
      <p>Compare the trivial extreme, which is what line 4 describes: a geometry where every figure is
        congruent to every other has no invariants and nothing to prove. M&ouml;bius geometry is poor, not
        empty.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>True, and it's the right note to end on.</strong> Definition 4.1.3 asks only for a set and a
        group; it does not ask the geometry to be interesting. M&ouml;bius geometry is a legitimate geometry
        that happens to be sparse.</p>
      <p>Its value is as a <em>parent</em>. Because it is so large, its subgroups are numerous, and each one
        gives a richer geometry that automatically inherits angle and the cross ratio. Hyperbolic and
        elliptic geometry are two of those children, and Chapter 7 will show that between them they cover
        every homogeneous geometry a surface can carry.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>The last self-check of Chapter 4</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Why does passing to a <em>subgroup</em> of \(\mathcal{M}\) give a geometry with
      <em>more</em> invariants, not fewer?</p>
    <button class="mc-opt" data-key="a">Because subgroups have fewer elements, so there is less to
      check.</button>
    <button class="mc-opt" data-key="b">Because subgroups are always finite.</button>
    <button class="mc-opt" data-key="c">Because a function only has to be preserved by the transformations
      you actually allow.</button>
    <button class="mc-opt" data-key="d">It doesn't &mdash; the invariants are the same.</button>

    <div class="mc-fb" data-key="a">
      <p>The counting instinct is right and the reason is slightly off. It isn't that checking is easier; it's
        that the <em>requirement</em> is weaker. A function that fails to be invariant under some
        transformation you've excluded is still invariant under the ones you kept.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>The disk-preserving M&ouml;bius transformations form an infinite subgroup &mdash; there are
        continuum-many of them. Finiteness has nothing to do with it.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Right. "Invariant" means \(f(B) = f(T(B))\) <em>for all \(T\) in \(G\)</em>. Shrink \(G\) and you
        shrink the list of conditions, so more functions pass.</p>
      <p>This is the see-saw the whole chapter turns on, and it's worth stating both ways. Bigger group:
        coarser congruence, fewer invariants, fewer distinctions the geometry can make. Smaller group: finer
        congruence, more invariants, more that can be said. Euclidean geometry is rich because its group is
        small; M&ouml;bius geometry is sparse because its group is huge.</p>
      <p>Hyperbolic geometry sits between them &mdash; small enough to have a distance, large enough to be
        homogeneous and isotropic, which is exactly the balance Chapter 1 said a geometry needs.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Everything invariant under the big group stays invariant under the subgroup, so the subgroup has at
        least as many. And it generally has strictly more &mdash; hyperbolic distance is invariant under the
        disk-preserving subgroup and under nothing larger.</p>
    </div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Chapter 4 ends here, and Chapter 5 begins hyperbolic geometry. Which single result from
      Chapter 3 is doing the most work in that transition?</p>
    <button class="mc-opt" data-key="a">The Fundamental Theorem of M&ouml;bius Transformations.</button>
    <button class="mc-opt" data-key="b">Corollary 3.2.9: inversion in \(C\) maps clines orthogonal to \(C\)
      to themselves.</button>
    <button class="mc-opt" data-key="c">Theorem 3.4.6: a M&ouml;bius transformation fixes one, two, or all
      points.</button>
    <button class="mc-opt" data-key="d">The classification into elliptic, hyperbolic, and loxodromic.</button>

    <div class="mc-fb" data-key="a">
      <p>Enormously useful, and it will be used constantly &mdash; it's how you construct a transformation
        with prescribed behaviour. But it doesn't by itself tell you which transformations preserve the
        disk, and that's the question Chapter 5 has to answer first.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Right, and it's easy to underrate because it arrived so early and so quietly.</p>
      <p>Hyperbolic geometry needs motions of the unit disk &mdash; transformations that don't throw points
        out of it. Corollary 3.2.9 supplies them wholesale: invert in a cline orthogonal to the unit circle
        and the unit circle is preserved, so the inside stays inside. Compose two and you have an
        orientation-preserving M&ouml;bius transformation of the disk. That's the group.</p>
      <p>It supplies the <em>lines</em> too. The geodesics of the Poincar&eacute; disk are exactly the clines
        orthogonal to the unit circle &mdash; the arcs on Day 1 &mdash; and they're the right choice
        precisely because the group carries them among themselves.</p>
      <p>Group and lines, both from one corollary.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Important structurally, and it's what makes the classification possible. But it's about counting
        fixed points, not about preserving a region, and preserving the disk is the requirement Chapter 5
        starts from.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>These will reappear with new names &mdash; the elliptic transformations become the rotations of
        hyperbolic geometry, the hyperbolic ones become translations along a geodesic. So the classification
        gets used heavily. But it describes the motions <em>after</em> you know which group you're in, and
        pinning down that group is the prior step.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Give the one-sentence version of Klein's programme, and then say how Euclidean, M&ouml;bius, and
      hyperbolic geometry are three instances of it.</li>
    <li>M&ouml;bius geometry has no notion of distance, yet hyperbolic geometry &mdash; built from a subgroup
      of it &mdash; does. Explain how that's possible without contradiction.</li>
    <li>Look back at Day 1's three-panel picture. Name one thing in the hyperbolic panel that you accepted on
      faith then and can prove now.</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    /* ---- a circle becoming a line ---- */
    (function () {
      var t = -45;

      // A one-parameter family whose pole sweeps across the fixed circle.
      function Tt() {
        var s = t / 100;
        return G.mobius(c(1, 0), c(0, 0), c(0.55, 0), c(-0.55 * (1.4 * s), 1));
      }
      var CIRC = { c: c(1.4, 0.2), r: 1.05 };

      var P = G.plane('d21-clines', {
        span: 12, height: 400,
        draw: function (pl) {
          pl.grid(); pl.axes({ ticks: false });
          var T = Tt();

          pl.circle(CIRC.c, CIRC.r, { color: '#c9ced4', width: 1.8, dash: [5, 4] });
          var img = G.mapCline(G.circle(CIRC.c, CIRC.r), T, 14);
          if (img) pl.cline(img, { color: G.colors.orange, width: 3 });

          // The pole, whose position relative to the circle decides everything.
          var pole = G.abs2(T.c) > 1e-12 ? G.div(G.neg(T.d), T.c) : null;
          if (pole) {
            pl.dot(pole, { color: G.colors.violet, r: 6 });
            pl.label(pole, 'the pole', { color: G.colors.violet, dx: 10, dy: -9, size: 12 });
          }
        }
      });

      function refresh() {
        P.redraw();
        var T = Tt();
        var img = G.mapCline(G.circle(CIRC.c, CIRC.r), T, 14);
        var pole = G.abs2(T.c) > 1e-12 ? G.div(G.neg(T.d), T.c) : null;
        var d = pole ? G.abs(G.sub(pole, CIRC.c)) : Infinity;
        var onIt = Math.abs(d - CIRC.r) < 0.05;
        G.say('d21-clines-out',
          '<div class="q"><b>distance from the pole to the circle centre</b><span>' + G.num(d, 3)
          + '</span></div>' +
          '<div class="q"><b>the circle&rsquo;s radius</b><span>' + G.num(CIRC.r, 2) + '</span></div>' +
          '<div class="q ' + (onIt ? 'hit' : '') + '"><b>the image is</b><span>'
          + (!img ? '—' : img.k === 'l' ? 'a straight line' : 'a circle of radius ' + G.num(img.r, 2))
          + '</span></div>' +
          '<div class="q" style="grid-column:1/-1"><b>why</b><span>'
          + (onIt
            ? 'The pole is on the circle, so one of its points is sent to ∞ — and a cline through ∞ is a line.'
            : 'The pole is off the circle, so nothing is sent to ∞ and the image stays a circle.')
          + '</span></div>');
      }

      G.slider('d21-t', function (v) { t = v; refresh(); });
      refresh();
    })();

    /* ---- the invariant audit ---- */
    (function () {
      var q = 'dist';
      var A = c(-2.6, 0.9), B = c(-1.1, 1.8), C4 = c(0.4, -1.5), D = c(2.5, 0.3);

      // Three maps, one from each geometry in the table.
      var MAPS = {
        eucl: { name: 'Euclidean', f: function (z) { return G.add(G.mul(G.expi(0.7), z), c(0.6, -0.4)); } },
        sim: { name: 'similarity', f: function (z) { return G.add(G.mul(c(0.62, 0.42), z), c(1.1, 0.3)); } },
        mob: {
          name: 'Möbius',
          f: (function () {
            var T = G.mobius(c(1, 0.4), c(0.8, 0), c(0.35, -0.2), c(1, 0));
            return function (z) { return T(z); };
          })()
        }
      };

      function measure(f) {
        var a = f(A), b = f(B), cc = f(C4), d = f(D);
        if (q === 'dist') return G.abs(G.sub(a, b));
        if (q === 'ratio') return G.abs(G.sub(a, b)) / G.abs(G.sub(cc, d));
        if (q === 'angle') return G.arg(G.div(G.sub(cc, b), G.sub(a, b))) * 180 / Math.PI;
        return G.abs(G.crossRatio(a, b, cc, d));
      }

      var P = G.plane('d21-audit', {
        span: 13, height: 380,
        draw: function (pl) {
          pl.grid(); pl.axes({ ticks: false });
          var sets = [
            { pts: [A, B, C4, D], col: G.colors.blue, w: 2.6 },
            { pts: [A, B, C4, D].map(MAPS.eucl.f), col: G.colors.green, w: 2 },
            { pts: [A, B, C4, D].map(MAPS.sim.f), col: G.colors.violet, w: 2 },
            { pts: [A, B, C4, D].map(MAPS.mob.f), col: G.colors.orange, w: 2 }
          ];
          sets.forEach(function (s) {
            pl.seg(s.pts[1], s.pts[0], { color: s.col, width: s.w });
            pl.seg(s.pts[1], s.pts[2], { color: s.col, width: s.w });
            pl.seg(s.pts[2], s.pts[3], { color: s.col, width: s.w, dash: [5, 4] });
            s.pts.forEach(function (z) { pl.dot(z, { color: s.col, r: 4 }); });
          });
        }
      });

      var LABEL = {
        dist: 'distance |z₁ − z₂|', ratio: 'ratio of two distances',
        angle: 'angle at z₂', cross: '|cross ratio|'
      };

      function row(key, col) {
        var base = measure(function (z) { return z; });
        var got = measure(MAPS[key].f);
        var same = Math.abs(base - got) < 1e-6 * Math.max(1, Math.abs(base));
        return '<div class="q ' + (same ? 'hit' : 'miss') + '"><b>' + MAPS[key].name + '</b><span>'
          + G.num(got, 4) + (same ? ' — unchanged' : ' — changed') + '</span></div>';
      }

      function refresh() {
        P.redraw();
        var base = measure(function (z) { return z; });
        G.say('d21-audit-out',
          '<div class="q"><b>' + LABEL[q] + ', original</b><span>' + G.num(base, 4) + '</span></div>' +
          row('eucl') + row('sim') + row('mob'));
      }

      document.querySelectorAll('[data-q]').forEach(function (b) {
        b.addEventListener('click', function () {
          document.querySelectorAll('[data-q]').forEach(function (o) { o.classList.remove('on'); });
          b.classList.add('on');
          q = b.getAttribute('data-q');
          refresh();
        });
      });
      refresh();
    })();
  })();
</script>
