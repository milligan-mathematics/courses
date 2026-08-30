---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 8: Reflections Are the Atoms"
day: 8
chapter_number: 3
chapter: "Transformations"
day_title: "Reflections Are the Atoms"
blurb: "Rotations and translations look like the basic motions. They aren't. Every rigid motion of the plane is built from at most three reflections — and that fact is the template for the whole of Chapter 3."
reading: "Section 3.1, angle preservation and fixed points through Theorem 3.1.20"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Two reflections make one rigid motion</h2>

  <p>Theorem 3.1.17 makes two claims at once, and both are easier to believe once you've watched them:</p>

  <blockquote class="source">A translation of \(\mathbb{C}\) is the composition of reflections about two
    parallel lines. A rotation of \(\mathbb{C}\) about a point \(z_0\) is the composition of reflections about
    two lines that intersect at \(z_0\).</blockquote>

  <p>Below are two mirrors. Reflect the shape in the first, then reflect the result in the second. Rotate the
    second mirror and watch the composite change character.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d8-ang1">first mirror</label>
      <input type="range" id="d8-ang1" min="0" max="179" step="1" value="90">
    </div>
    <div class="ctl">
      <label for="d8-ang2">second mirror</label>
      <input type="range" id="d8-ang2" min="0" max="179" step="1" value="120">
    </div>
    <div class="ctl">
      <label for="d8-gap">gap between them</label>
      <input type="range" id="d8-gap" min="0" max="3" step="0.05" value="1.2">
    </div>
  </div>

  <canvas class="plot g304" id="d8-two"></canvas>
  <div class="legend">
    <span class="blue">start</span>
    <span class="muted">after the first mirror</span>
    <span class="orange">after both</span>
  </div>
  <div class="readout cols" id="d8-two-out"></div>

  <p>Set both mirrors to the same angle and they're parallel: the composite is a pure translation, and the
    distance moved is <em>twice the gap</em> between the mirrors &mdash; not the gap itself. Slide the gap to
    zero and the two mirrors coincide, so the composite is the identity, which is another way of saying a
    reflection is its own inverse.</p>

  <p>Now make the angles differ. The mirrors cross, and the composite becomes a rotation about the crossing
    point through <em>twice the angle</em> between them. That factor of two is the same one, and it's the
    signature of "reflect twice."</p>

  <p>Two consequences worth carrying forward.</p>

  <p><strong>Orientation.</strong> Watch the grey intermediate copy: it's flipped. The final orange copy isn't.
    Each reflection reverses orientation, so two of them restore it. That's why a composition of an
    <em>even</em> number of reflections can be a rotation or translation, and an odd number never can.</p>

  <p><strong>The mirrors aren't unique.</strong> Rotate both mirrors together, keeping the angle between them
    fixed, and the composite doesn't change at all. A given rotation can be factored into two reflections in
    infinitely many ways &mdash; only the angle between the mirrors matters, not where they point. That
    freedom is what makes the factorisation useful: when you need one, you get to choose a convenient
    pair.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>Why "at most three" and not four</h2>

  <p>Theorem 3.1.20 says any Euclidean isometry is a composition of at most three reflections. Your reading
    doesn't prove it. The argument is short and it's the best possible advertisement for reflections, so
    here it is.</p>

  <p>Let \(T\) be an isometry &mdash; a map with \(|T(z)-T(w)| = |z-w|\) for all \(z,w\). Pick three
    non-collinear points \(A, B, C\).</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">First a lemma we'll lean on: if an isometry fixes three non-collinear
          points, it's the identity. Why?</div>
        <div class="sstep-body">
          <p>Take any point \(z\). Its distances to \(A\), \(B\), \(C\) are preserved, so \(T(z)\) has the
            same three distances to \(A\), \(B\), \(C\) that \(z\) does. But a point in the plane is pinned
            down by its distances to three non-collinear points &mdash; two distances leave you a choice of
            two intersection points, and the third breaks the tie.</p>
          <p>So \(T(z) = z\) for every \(z\). (Your problem set from Section 2.4 asked you to prove the
            pinning-down step; here we're just using it.)</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now the construction. If \(T(A) \neq A\), find a reflection that fixes
          this.</div>
        <div class="sstep-body">
          <p>Let \(r_1\) be the reflection across the perpendicular bisector of the segment from \(A\) to
            \(T(A)\). By construction \(r_1(T(A)) = A\).</p>
          <p>So \(r_1 \circ T\) is an isometry (a composition of isometries) that fixes \(A\). If
            \(T(A) = A\) already, skip this step and use no reflection at all.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Repeat for \(B\). But there's something to check &mdash; the second
          reflection mustn't undo the first. What guarantees it doesn't?</div>
        <div class="sstep-body">
          <p>Write \(S = r_1\circ T\), which fixes \(A\). If \(S(B) \neq B\), let \(r_2\) be the reflection
            across the perpendicular bisector of \(B\) and \(S(B)\).</p>
          <p>The check: does \(r_2\) still fix \(A\)? Yes, and here's why. \(S\) is an isometry fixing \(A\),
            so \(|A - S(B)| = |S(A) - S(B)| = |A - B|\). So \(A\) is equidistant from \(B\) and \(S(B)\),
            which puts it <em>on</em> the perpendicular bisector &mdash; and reflections fix every point of
            their mirror.</p>
          <p>That's the crux of the whole proof, and it's worth noticing how it works: the perpendicular
            bisector of two points is exactly the set of points equidistant from them (Theorem 2.4.2), so
            "already correctly placed" and "on the mirror" are the same condition. Each reflection fixes one
            more point without disturbing the ones already fixed.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Finish it. Count the reflections.</div>
        <div class="sstep-body">
          <p>Do the same for \(C\): the composite so far fixes \(A\) and \(B\), so both lie on the
            perpendicular bisector of \(C\) and its image, so the third reflection \(r_3\) fixes them and
            corrects \(C\).</p>
          <p>Now \(r_3\circ r_2\circ r_1\circ T\) fixes \(A\), \(B\), \(C\) &mdash; three non-collinear points
            &mdash; so by the lemma it's the identity. Since reflections are their own inverses,</p>
          \[ T = r_1 \circ r_2 \circ r_3. \]
          <p>At most three, because we used at most one per point, and we skip any point already in place.</p>
          <p><strong>Why this matters beyond the theorem.</strong> Look at the shape of the argument: we found
            a small family of simple maps, and showed every map in a much larger class is a short composition
            of them. Section 3.4 does <em>exactly this again</em> with inversions in place of reflections
            (Theorem 3.4.4: a M&ouml;bius transformation is precisely an even number of inversions), and
            that's why Chapter 3 spends a whole section on inversion before mentioning M&ouml;bius
            transformations at all. Reflections are the practice run.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Angles: preserved, or only preserved in size?</h2>

  <p>Definition 3.1.11 is unusually careful. It defines <em>preserves angles</em> and, separately,
    <em>preserves angle magnitudes</em>. Theorem 3.1.12 says general linear transformations do the first;
    Theorem 3.1.19 says reflections do only the second.</p>

  <p>Here are two curves crossing at a point, and the same pair after a map. The angle between them is
    marked in both panels, with its sign.</p>

  <div class="toggles">
    <button class="btn411 ghost on" type="button" data-map="lin">\(T(z) = az+b\)</button>
    <button class="btn411 ghost" type="button" data-map="ref">reflection across a line</button>
    <button class="btn411 ghost" type="button" data-map="two">two reflections</button>
  </div>

  <div class="plane-pair">
    <div class="pane">
      <canvas class="plot g304" id="d8-asrc"></canvas>
      <div class="cap">before</div>
    </div>
    <div class="pane">
      <canvas class="plot g304" id="d8-aimg"></canvas>
      <div class="cap">after</div>
    </div>
  </div>
  <div class="drag-hint">Drag the crossing point in the left panel.</div>
  <div class="readout cols" id="d8-angle-out"></div>

  <p>The distinction is not fussiness. Here is why it will decide the shape of Chapter 3.</p>

  <p>Angle <em>magnitude</em> is what you'd measure with a protractor, and it survives everything we've built.
    Angle <em>with sign</em> also records whether the plane has been turned over. A single reflection keeps the
    protractor reading and flips the sign. Two reflections flip it twice, which is not flipping it at all.</p>

  <p>So there are two grades of transformation, and the grade is a parity count. Section 3.4 will define a
    M&ouml;bius transformation to be an <em>even</em> number of inversions, and immediately conclude that
    M&ouml;bius transformations preserve angles &mdash; sign and all. The parity is the reason, and it's the
    only reason.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Isometries, fixed points, and what survives</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Example 3.1.15 shows \(T(z)=az+b\) is a Euclidean isometry exactly when \(|a|=1\). What
      does a general linear transformation with \(|a| \neq 1\) fail to preserve &mdash; and what does it still
      preserve?</p>
    <button class="mc-opt" data-key="a">It fails to preserve angles, but preserves distances.</button>
    <button class="mc-opt" data-key="b">It fails to preserve both angles and distances.</button>
    <button class="mc-opt" data-key="c">It fails to preserve distances, but preserves angles and ratios of
      distances.</button>
    <button class="mc-opt" data-key="d">It preserves everything &mdash; it's still a transformation.</button>

    <div class="mc-fb" data-key="a">
      <p>Backwards. Theorem 3.1.12 says <em>all</em> general linear transformations preserve angles, whatever
        \(|a|\) is; and Example 3.1.15 computes \(|T(z)-T(w)| = |a||z-w|\), so distances are multiplied by
        \(|a|\) and only survive when \(|a|=1\).</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Half right. Distances genuinely are destroyed when \(|a|\neq 1\). But angles are not &mdash; that's
        Theorem 3.1.12, with no condition on \(|a|\). Multiplying by \(a\) rotates every direction by the same
        \(\arg(a)\), and rotating both arms of an angle by the same amount leaves the angle alone.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Right, and the third item is the one worth adding to your list. Since every distance gets multiplied
        by the same factor \(|a|\), any <em>ratio</em> of distances is unchanged:
        \(\frac{|T(z)-T(w)|}{|T(u)-T(v)|} = \frac{|a||z-w|}{|a||u-v|} = \frac{|z-w|}{|u-v|}\).</p>
      <p>This is what "similar" means, and it explains why these maps preserve shapes but not sizes. Keep an
        eye on the pattern: as we allow more transformations, distance goes first, then ratios of distances,
        and angle holds out longest. In M&ouml;bius geometry (Section 4.2) distance is gone entirely and
        angle is still standing. The invariants that survive the biggest group are the ones a geometry is
        really about.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Being a transformation only means one-to-one and onto &mdash; it says nothing about preserving
        anything. A dilation by \(3\) is a perfectly good transformation and it triples every distance in the
        plane.</p>
    </div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">A non-identity isometry of \(\mathbb{C}\) fixes exactly two distinct points. What must
      it be?</p>
    <button class="mc-opt" data-key="a">A reflection, and the two points lie on its mirror.</button>
    <button class="mc-opt" data-key="b">A rotation about the midpoint of the two.</button>
    <button class="mc-opt" data-key="c">Impossible &mdash; an isometry fixes zero, one, or all points.</button>
    <button class="mc-opt" data-key="d">A translation.</button>

    <div class="mc-fb" data-key="a">
      <p>Right, and the argument is a nice use of the lemma from the scaffold. Let the fixed points be \(P\)
        and \(Q\). Any point \(z\) on the line \(PQ\) is determined by its distances to \(P\) and \(Q\)
        together with being on that line, so the whole line is fixed pointwise. Off the line, a point \(z\)
        has an image with the same two distances &mdash; and there are exactly two such points, \(z\) and its
        mirror image across \(PQ\). If the map ever chooses \(z\) itself, it fixes three non-collinear points
        and is the identity. So it chooses the mirror image, every time: it's the reflection across
        \(PQ\).</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>A rotation about a point fixes that point and nothing else &mdash; every other point moves along a
        circle around the centre. Two fixed points is one too many for a rotation.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Close to a real theorem but missing a case. Translations fix nothing, rotations fix one point, the
        identity fixes everything &mdash; and reflections fix an entire line, which is more than one point and
        less than everything. The reflection is exactly the case this option leaves out.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>A non-identity translation fixes no point at all: \(z + b = z\) forces \(b = 0\). (Once
        \(\infty\) is available in Section 3.3, a translation will fix exactly one point &mdash; \(\infty\)
        &mdash; which is a genuinely useful way to think about it. But never two.)</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>In the first activity, a translation came from two parallel mirrors and moved things <em>twice</em>
      the gap. Explain the factor of two in one sentence, using a single point and its two images.</li>
    <li>Reflections are their own inverses. Which of the other maps we've met &mdash; translations, rotations,
      dilations, general linear maps &mdash; are their own inverses, and what do those have in common?</li>
    <li>Every reflection has the form \(r_L(z) = e^{i\theta}\overline{z}+b\). Not every map of that form is a
      reflection, though &mdash; some are "glide reflections," a reflection followed by a slide along the
      mirror. Come with a guess at what condition on \(\theta\) and \(b\) separates the two.</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    var FLAG = [
      c(0.4, -0.4), c(0.4, 2.2), c(1.85, 1.7), c(0.85, 1.3),
      c(1.5, 1.0), c(0.85, 0.72), c(0.85, -0.4)
    ];

    /* ---- two mirrors ---- */
    (function () {
      var a1 = 90, a2 = 120, gap = 1.2;

      function mirrors() {
        var t1 = a1 * Math.PI / 180, t2 = a2 * Math.PI / 180;
        // The first mirror through the origin; the second offset by `gap` along
        // its own normal, so that equal angles give genuinely parallel mirrors
        // a known distance apart.
        var L1 = G.lineDir(c(0, 0), t1);
        var n2 = c(Math.cos(t2 + Math.PI / 2), Math.sin(t2 + Math.PI / 2));
        var L2 = G.lineDir(G.scale(n2, gap), t2);
        return { L1: L1, L2: L2, t1: t1, t2: t2 };
      }

      var P = G.plane('d8-two', {
        span: 14, center: c(0.5, 0.5), height: 400,
        draw: function (p) {
          var m = mirrors();
          p.grid(); p.axes();

          p.line(m.L1, { color: G.colors.green, width: 2.2, dash: [7, 5] });
          p.line(m.L2, { color: G.colors.violet, width: 2.2, dash: [7, 5] });

          var r1 = function (z) { return G.reflectIn(z, m.L1); };
          var r2 = function (z) { return G.reflectIn(z, m.L2); };

          p.poly(FLAG, { closed: true, color: G.colors.blue, width: 2.2, fill: G.colors.blue });
          p.poly(FLAG.map(r1), { closed: true, color: '#c9ced4', width: 1.6 });
          p.poly(FLAG.map(function (z) { return r2(r1(z)); }),
            { closed: true, color: G.colors.orange, width: 2.6, fill: G.colors.orange });

          // Where the mirrors cross, when they do.
          var d = Math.abs(Math.sin(m.t2 - m.t1));
          if (d > 0.02) {
            // Solve L1.p + s*L1.d = L2.p + t*L2.d for the crossing point.
            var w = G.sub(m.L2.p, m.L1.p);
            var s = (w.x * m.L2.d.y - w.y * m.L2.d.x) / (m.L1.d.x * m.L2.d.y - m.L1.d.y * m.L2.d.x);
            var X = G.add(m.L1.p, G.scale(m.L1.d, s));
            p.dot(X, { color: G.colors.green, r: 6 });
            p.label(X, 'centre of the rotation', { color: G.colors.green, dx: 10, dy: -9, size: 12 });
          }
        }
      });

      function refresh() {
        P.redraw();
        var diff = a2 - a1;
        var parallel = Math.abs(Math.sin(diff * Math.PI / 180)) < 0.02;
        var body;
        if (parallel && gap < 0.02) {
          body = '<div class="q hit" style="grid-column:1/-1"><b>the composite is</b>'
            + '<span>the identity — the two mirrors coincide</span></div>';
        } else if (parallel) {
          body = '<div class="q"><b>the mirrors are</b><span>parallel, ' + G.num(gap, 2)
            + ' apart</span></div>'
            + '<div class="q hit"><b>the composite is</b><span>a translation of length '
            + G.num(2 * gap, 2) + ' — twice the gap</span></div>';
        } else {
          body = '<div class="q"><b>angle between the mirrors</b><span>' + G.num(diff, 0) + '°</span></div>'
            + '<div class="q hit"><b>the composite is</b><span>a rotation through ' + G.num(2 * diff, 0)
            + '° — twice the angle</span></div>';
        }
        G.say('d8-two-out', body +
          '<div class="q" style="grid-column:1/-1"><b>orientation</b>'
          + '<span>the grey copy is flipped; the orange one is not</span></div>');
      }

      G.slider('d8-ang1', function (v) { a1 = v; refresh(); });
      G.slider('d8-ang2', function (v) { a2 = v; refresh(); });
      G.slider('d8-gap', function (v) { gap = v; refresh(); });
      refresh();
    })();

    /* ---- angle vs angle magnitude ---- */
    (function () {
      var mode = 'lin';
      var MIRROR = G.lineDir(c(0, 0), Math.PI / 6);
      var MIRROR2 = G.lineDir(c(0, 0), Math.PI / 6 + 0.9);

      function T(z) {
        if (mode === 'lin') return G.add(G.mul(c(0.85, 0.7), z), c(0.4, -0.3));
        if (mode === 'ref') return G.reflectIn(z, MIRROR);
        return G.reflectIn(G.reflectIn(z, MIRROR), MIRROR2);
      }

      // Two rays from a moving vertex, at fixed angles, so the "before" angle is
      // a known constant and only the map can change it.
      var A1 = 0.35, A2 = 0.35 + 1.15;

      var src = G.plane('d8-asrc', {
        span: 8, height: 320,
        handles: [{ name: 'v', z: c(-0.8, 0.6), color: G.colors.blue, label: 'v' }],
        draw: function (p) {
          var v = p.get('v');
          p.grid(); p.axes({ ticks: false });
          if (mode !== 'lin') p.line(MIRROR, { color: '#dfe3e7', width: 1.6, dash: [6, 4] });
          if (mode === 'two') p.line(MIRROR2, { color: '#dfe3e7', width: 1.6, dash: [6, 4] });
          var u = G.add(v, G.scale(G.expi(A1), 2.3));
          var w = G.add(v, G.scale(G.expi(A2), 2.3));
          p.seg(v, u, { color: G.colors.blue, width: 2.6 });
          p.seg(v, w, { color: G.colors.violet, width: 2.6 });
          p.angleArc(v, u, w, { color: G.colors.green, width: 2.2, rpx: 28, text: G.num((A2 - A1) * 180 / Math.PI, 0) + '°' });
          p.dot(v, { color: G.colors.blue, r: 5 });
        },
        onDrag: function () { img.redraw(); refresh(); }
      });

      var img = G.plane('d8-aimg', {
        span: 8, height: 320,
        draw: function (p) {
          var v = src.get('v');
          p.grid(); p.axes({ ticks: false });
          var u = G.add(v, G.scale(G.expi(A1), 2.3));
          var w = G.add(v, G.scale(G.expi(A2), 2.3));
          var V = T(v), U = T(u), W = T(w);
          p.seg(V, U, { color: G.colors.blue, width: 2.6 });
          p.seg(V, W, { color: G.colors.violet, width: 2.6 });
          var ang = G.arg(G.div(G.sub(W, V), G.sub(U, V)));
          p.angleArc(V, U, W,
            { color: G.colors.orange, width: 2.2, rpx: 28, text: G.num(ang * 180 / Math.PI, 0) + '°' });
          p.dot(V, { color: G.colors.blue, r: 5 });
        }
      });

      function refresh() {
        var v = src.get('v');
        var u = G.add(v, G.scale(G.expi(A1), 2.3));
        var w = G.add(v, G.scale(G.expi(A2), 2.3));
        var before = (A2 - A1) * 180 / Math.PI;
        var after = G.arg(G.div(G.sub(T(w), T(v)), G.sub(T(u), T(v)))) * 180 / Math.PI;
        var flipped = before * after < 0;
        G.say('d8-angle-out',
          '<div class="q"><b>angle before</b><span>' + G.num(before, 1) + '°</span></div>' +
          '<div class="q"><b>angle after</b><span>' + G.num(after, 1) + '°</span></div>' +
          '<div class="q ' + (flipped ? 'miss' : 'hit') + '"><b>sign</b><span>'
          + (flipped ? 'reversed — orientation flipped' : 'kept — orientation preserved') + '</span></div>' +
          '<div class="q hit"><b>magnitude</b><span>' + G.num(Math.abs(before), 1) + '° → '
          + G.num(Math.abs(after), 1) + '°, unchanged</span></div>');
      }

      document.querySelectorAll('[data-map]').forEach(function (b) {
        b.addEventListener('click', function () {
          document.querySelectorAll('[data-map]').forEach(function (o) { o.classList.remove('on'); });
          b.classList.add('on');
          mode = b.getAttribute('data-map');
          src.redraw(); img.redraw(); refresh();
        });
      });
      refresh();
    })();
  })();
</script>
