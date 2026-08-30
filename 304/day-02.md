---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 2: Life as a Two-Dimensional Bug"
day: 2
chapter_number: 1
chapter: "An Invitation to Geometry"
day_title: "Life as a Two-Dimensional Bug"
blurb: "You can't step outside the universe to look at its shape. So the question becomes: what could you find out about it from the inside, with nothing but string and a protractor?"
reading: "Section 1.3, geodesics and homogeneous surfaces through the hexagonal video screen"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>What "straight" means when you can't leave the surface</h2>

  <p>The reading redefines a straight line as a <strong>geodesic</strong>: the shortest path on the surface
    between two points. On the plane that gives you back ordinary lines and nothing changes. On a sphere it
    gives you <em>great circles</em>, and things change a lot.</p>

  <p>Drag the two points around the globe. The solid arc is the geodesic between them &mdash; the taut string.
    The dashed circle is a rival path: a circle of latitude-style route that looks perfectly reasonable but
    isn't shortest.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d2-yaw">spin</label>
      <input type="range" id="d2-yaw" min="-180" max="180" step="1" value="20">
    </div>
    <div class="ctl">
      <label for="d2-a">move A</label>
      <input type="range" id="d2-a" min="-180" max="180" step="1" value="-55">
    </div>
    <div class="ctl">
      <label for="d2-b">move B</label>
      <input type="range" id="d2-b" min="-180" max="180" step="1" value="65">
    </div>
  </div>

  <canvas class="plot g304" id="d2-geo"></canvas>
  <div class="readout cols" id="d2-geo-out"></div>

  <p>This is why long-haul flights from the US to Europe swing north over Greenland. They are not detouring.
    They are going straight.</p>

  <p>The important structural point, though, is what a great circle <em>is</em>: the intersection of the sphere
    with a plane through its centre. That's why circle \(c\) in your reading's Figure 1.3.2 isn't a geodesic
    &mdash; its plane misses the centre. Hold onto that definition. In Chapter 6 the "lines" of elliptic
    geometry are exactly these, and every strange thing about elliptic geometry traces back to it.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Consequences of "line = great circle"</h2>

  <div class="mc" data-answer="d">
    <p class="mc-q">On the sphere, take two distinct points and ask for the "line" through them. Which of
      Euclid's first four postulates does this arrangement put under strain?</p>
    <button class="mc-opt" data-key="a">Postulate 3, about drawing a circle with any centre and radius.</button>
    <button class="mc-opt" data-key="b">Postulate 4, that all right angles are equal.</button>
    <button class="mc-opt" data-key="c">None of them &mdash; only the fifth is affected.</button>
    <button class="mc-opt" data-key="d">Postulates 1 and 2, about drawing and extending lines.</button>

    <div class="mc-fb" data-key="a">
      <p>Postulate 3 survives surprisingly well. You can draw a circle of any radius about any point on the
        sphere &mdash; the set of points a fixed distance from the centre, exactly as your reading defines it.
        What you lose is not the construction but the folklore around it: on a sphere, a circle of large enough
        radius shrinks to a single point, and every circle turns out to have <em>two</em> centres. The postulate
        holds; your intuitions about what it gives you do not.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Postulate 4 holds. Right angles on the sphere are all congruent to one another; the sphere is
        perfectly homogeneous, and a right angle at the north pole is indistinguishable from one at the
        equator. This is exactly the homogeneity your reading is defining.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>This is the natural guess, and it's how the story usually gets told &mdash; but it isn't right, and
        the exception is worth knowing about. Elliptic geometry has to bend more than just the fifth postulate.
        Look again at what happens with two <em>antipodal</em> points, and at what happens when you keep
        extending a line.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Right, and this is the honest complication in the "three geometries" story. Two problems:</p>
      <p><strong>Postulate 1</strong> says you can draw a straight line from any point to any point &mdash;
        implicitly, one of them. But through two <em>antipodal</em> points, like the north and south poles,
        there are infinitely many great circles. Every line of longitude is one. Uniqueness fails.</p>
      <p><strong>Postulate 2</strong> says a finite line can be produced continuously. On a sphere you can keep
        extending, but you come back to where you started; lines are finite in length and closed. Whether that
        violates the postulate depends on how carefully you read it, which is exactly the sort of thing
        Section 6.4 has to sort out.</p>
      <p>Both problems are fixable &mdash; you glue each pair of antipodal points into a single point &mdash;
        and Chapter 6 does exactly that. Note it now so it doesn't feel like a dodge later.</p>
    </div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Homogeneous, or just uniform-looking?</h2>

  <p>Your reading's central word is <strong>homogeneous</strong>: the local geometry is the same at every
    point. Not "looks symmetric." Not "is made of one material." <em>A resident could not tell two points
      apart by doing geometry near them.</em></p>

  <p>The torus surface in Figure 1.3.1 fails this test, and the way it fails is the model for everything else.
    Below, a bug carries a fixed triangle around a donut-shaped surface. The triangle's shape never changes;
    only where it sits does. Watch the angle sum in the readout.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d2-where">where on the donut</label>
      <input type="range" id="d2-where" min="0" max="360" step="1" value="0">
    </div>
  </div>

  <canvas class="plot g304" id="d2-torus"></canvas>
  <div class="figcap">Schematic. The <em>sign</em> of the effect is the real content &mdash; fat on the outer
    wall, thin on the inner &mdash; not the particular numbers, which depend on the donut's proportions.</div>
  <div class="readout cols" id="d2-torus-out"></div>

  <p>On the outer wall the surface curves away from itself in every direction &mdash; a dome &mdash; and
    triangles come out fat. On the inner wall it curves up in one direction and down in another &mdash; a
    saddle &mdash; and triangles come out thin. The bug never has to leave the surface, never has to know
    three-dimensional space exists, and never has to guess. She measures, and the measurement tells her the
    two places are different.</p>

  <p>That is the entire method of this course, and it's worth naming: <strong>intrinsic geometry</strong>.
    Everything is decided by measurements made inside the surface. The picture of a donut sitting in
    three-dimensional space is a convenience for us, and eventually we will throw it away entirely &mdash; by
    Chapter 7 we will be describing surfaces that cannot be embedded in three-dimensional space at all
    without distortion, and it won't matter.</p>

  <details class="hint">
    <summary>So is the donut just a bad surface?</summary>
    <p>No, and this is the surprise your reading is building toward. The <em>donut surface sitting in
        3-space</em> is not homogeneous. But the flat torus of Example 1.3.4 &mdash; the video-game screen
      where flying off the right edge brings you back on the left &mdash; is the same surface
      topologically, and it <em>is</em> homogeneous, with Euclidean geometry at every point. Same surface,
      different geometry. The shape doesn't determine the geometry; you get to put a geometry on it, and
      Chapter 7 is about which geometries a given surface will accept.</p>
  </details>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>The hexagonal screen, corner by corner</h2>

  <p>Example 1.3.9 is the most demanding paragraph in the reading, and it repays being taken apart. The setup:
    a hexagonal video screen whose edges are glued in pairs, as in Figure 1.3.8. Fly off one edge, come back on
    its partner. The question is whether the resulting world is homogeneous.</p>

  <p>Work out what you think happens at each stage before revealing it.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">A pilot flying in the middle of the screen, far from every edge, checks
          whether her surroundings are Euclidean. What does she find, and why is this the easy case?</div>
        <div class="sstep-body">
          <p>Perfectly Euclidean. She's inside a flat hexagon; a small disk around her is an ordinary disk of
            the plane, and triangles drawn in it have angle sum \(180^\circ\).</p>
          <p>It's the easy case because <em>nothing has been glued near her</em>. Gluing only affects the
            boundary. This is worth stating explicitly because it tells you where to look for trouble:
            identifications can only cause problems where identified pieces meet.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now she flies across an edge, in the middle of that edge rather than near a
          corner. Does the world look flat there too?</div>
        <div class="sstep-body">
          <p>Yes. Take her small disk and cut it in half by the edge. The other half reappears attached to the
            partner edge. Slide the two halves back together and you have an ordinary flat disk again: half of
            it came from one part of the hexagon and half from another, but a disk is a disk.</p>
          <p>The angles work out because an edge is straight &mdash; \(180^\circ\) on each side, and
            \(180 + 180 = 360\), a complete flat neighbourhood. Interior points and edge points are both fine.
            Only corners are left.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">The corners are where it breaks. Each interior angle of a regular hexagon is
          \(120^\circ\), and the gluing brings the six corners together in groups. How many corners meet at a
          point, and what does that make the total angle there?</div>
        <div class="sstep-body">
          <p>Your reading says the corners meet <strong>in groups of two</strong>, producing three cone points.
            Two corners of \(120^\circ\) each gives a total angle of \(240^\circ\) around that point.</p>
          <p>And \(240^\circ \neq 360^\circ\). A flat point has a full \(360^\circ\) of surface around it.
            This one has less, so the surface has to pucker: it's a cone point, exactly like the tip of the
            cone in Example 1.3.5.</p>
          <p>The pilot can detect it. Around a cone point, a triangle's angle sum exceeds \(180^\circ\), while
            anywhere else it's exactly \(180^\circ\). So the surface, drawn flat in the plane, is
            <em>not homogeneous</em> &mdash; and she can prove it from the inside.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Here's the move that makes the whole example worth reading. We want the
          corner angles to be \(180^\circ\) instead of \(120^\circ\), so that two of them make a full
          \(360^\circ\). We can't change a hexagon in the plane. What can we change?</div>
        <div class="sstep-body">
          <p><strong>The surface the hexagon is drawn on.</strong> Put the hexagon on a sphere, with its six
            vertices on the equator, filling the northern hemisphere. Now each edge is an arc of a great
            circle running between adjacent vertices along the equator &mdash; so at each vertex, the two
            edges leave along the equator in opposite directions. The corner angle is \(180^\circ\).</p>
          <p>Two corners now glue to a full \(360^\circ\). No cone points. The surface is homogeneous, and its
            homogeneous geometry is <em>spherical</em>, not Euclidean.</p>
          <p>Notice what just happened, because it is the thesis of the entire book. We had a surface that
            wanted a homogeneous geometry and couldn't have a Euclidean one, because the angles didn't add up.
            The fix was to change which geometry we measured with, so that the angles <em>could</em> add up.
            The surface tells you which geometry it wants. Chapter 7 turns this observation into a theorem
            covering every surface there is.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Angle budgets</h2>

  <div class="mc" data-answer="a">
    <p class="mc-q">Suppose you glue up a polygon so that four corners, each of angle \(100^\circ\), come
      together at a single point. What kind of point is it?</p>
    <button class="mc-opt" data-key="a">A saddle point: the total angle exceeds \(360^\circ\).</button>
    <button class="mc-opt" data-key="b">A cone point: the total angle falls short of \(360^\circ\).</button>
    <button class="mc-opt" data-key="c">An ordinary flat point.</button>
    <button class="mc-opt" data-key="d">Not enough information &mdash; it depends on the polygon's
      shape.</button>

    <div class="mc-fb" data-key="a">
      <p>Right: \(4 \times 100^\circ = 400^\circ\), which is \(40^\circ\) more than a flat point's
        \(360^\circ\). There's too much surface crowded around that point, so it ruffles &mdash; the same
        shape as the Saddleland surface of Example 1.3.7, which is built by gluing a wedge of angle
        \(\theta \gt 2\pi\).</p>
      <p>The general rule is a budget: total angle less than \(360^\circ\) gives a cone point (surface
        curving like a dome, fat triangles); exactly \(360^\circ\) gives a flat point; more than
        \(360^\circ\) gives a saddle point (thin triangles). One number, computed by adding up corner
        angles, decides the local geometry.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>The classification is stated correctly &mdash; short of \(360^\circ\) does mean a cone point &mdash;
        but check the arithmetic. Four corners of \(100^\circ\) is \(400^\circ\), which is over budget, not
        under.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>A flat point needs exactly \(360^\circ\) of surface around it, and this one has \(400^\circ\). The
        extra \(40^\circ\) has to go somewhere, and where it goes is into a ruffle.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>It genuinely doesn't depend on the shape &mdash; only on the corner angles that come together, which
        is what makes this such a useful test. You can read off the local geometry of a glued-up surface from
        an angle sum, without knowing anything else about the polygon.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The flat torus is a finite, boundaryless, Euclidean world. Pick one of the following and be ready to
      argue it: (a) if you lived there, could you tell? (b) if the pilot's ship has a headlight, what does she
      see?</li>
    <li>A square screen with opposite edges glued has four corners meeting at one point, each \(90^\circ\).
      Compute the angle budget and say what kind of point it is. Then compare with what you'd get for a
      regular hexagon whose corners meet in threes. One of these is why the flat torus works.</li>
    <li>Your reading closes by asserting that <em>every</em> surface can be given one of exactly three
      homogeneous geometries. Come with a guess at why three and not four, or say what would have to be true
      of a fourth.</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    /* ---- Geodesics on the sphere ---- */
    (function () {
      var yaw = 20 * Math.PI / 180, pitch = 0.4;
      var lonA = -55, lonB = 65, lat = 48 * Math.PI / 180;

      function pt(lonDeg) {
        var lo = lonDeg * Math.PI / 180;
        return G.v3(Math.cos(lat) * Math.cos(lo), Math.cos(lat) * Math.sin(lo), Math.sin(lat));
      }

      function splitDraw(p, pts, front, back) {
        var f = [], b = [];
        pts.forEach(function (q) {
          var pr = G.proj3(q, yaw, pitch);
          if (pr.depth >= 0) { f.push(pr.z); b.push(null); }
          else { b.push(pr.z); f.push(null); }
        });
        p.poly(b, back); p.poly(f, front);
      }

      // Great-circle arc from A to B, the short way: interpolate in 3-space and
      // renormalize, which is the standard slerp.
      function arcAB(A, B, n) {
        var dot = A.x * B.x + A.y * B.y + A.z * B.z;
        dot = Math.max(-1, Math.min(1, dot));
        var ang = Math.acos(dot), out = [], i;
        if (ang < 1e-9) return [A];
        for (i = 0; i <= n; i++) {
          var t = i / n;
          var s1 = Math.sin((1 - t) * ang) / Math.sin(ang);
          var s2 = Math.sin(t * ang) / Math.sin(ang);
          out.push(G.v3(s1 * A.x + s2 * B.x, s1 * A.y + s2 * B.y, s1 * A.z + s2 * B.z));
        }
        return out;
      }

      // The rival: stay on the circle of latitude the whole way.
      function latArc(lonFrom, lonTo, n) {
        var out = [], i;
        var d = lonTo - lonFrom;
        while (d > 180) d -= 360;
        while (d < -180) d += 360;
        for (i = 0; i <= n; i++) {
          var lo = (lonFrom + d * i / n) * Math.PI / 180;
          out.push(G.v3(Math.cos(lat) * Math.cos(lo), Math.cos(lat) * Math.sin(lo), Math.sin(lat)));
        }
        return out;
      }

      function arcLen(pts) {
        var s = 0, i;
        for (i = 1; i < pts.length; i++) {
          var a = pts[i - 1], b = pts[i];
          var dot = Math.max(-1, Math.min(1, a.x * b.x + a.y * b.y + a.z * b.z));
          s += Math.acos(dot);
        }
        return s;
      }

      var P = G.plane('d2-geo', {
        span: 2.6, height: 360,
        draw: function (p) {
          p.circle(c(0, 0), 1, { color: '#c9ced4', width: 2, fill: '#fbfcfd', fillAlpha: 1 });

          // A faint graticule for orientation.
          var k;
          for (k = -60; k <= 60; k += 30) {
            var la = k * Math.PI / 180, ring = [], j;
            for (j = 0; j <= 120; j++) {
              var lo = 2 * Math.PI * j / 120;
              ring.push(G.v3(Math.cos(la) * Math.cos(lo), Math.cos(la) * Math.sin(lo), Math.sin(la)));
            }
            splitDraw(p, ring, { color: '#e6e9ec', width: 1 }, { color: '#f1f3f5', width: 1 });
          }
          for (k = 0; k < 180; k += 30) {
            splitDraw(p, G.greatCircle(G.v3(Math.cos(k * Math.PI / 180 + Math.PI / 2),
              Math.sin(k * Math.PI / 180 + Math.PI / 2), 0), 160),
              { color: '#e6e9ec', width: 1 }, { color: '#f1f3f5', width: 1 });
          }

          var A = pt(lonA), B = pt(lonB);
          splitDraw(p, latArc(lonA, lonB, 120),
            { color: G.colors.violet, width: 2.2, dash: [6, 4] },
            { color: '#d9cdf5', width: 1.4, dash: [6, 4] });
          splitDraw(p, arcAB(A, B, 120),
            { color: G.colors.orange, width: 3 },
            { color: '#f7c7a6', width: 1.8, dash: [4, 4] });

          [[A, 'A'], [B, 'B']].forEach(function (e) {
            var pr = G.proj3(e[0], yaw, pitch);
            p.dot(pr.z, { color: G.colors.blue, r: pr.depth >= 0 ? 6 : 5, hollow: pr.depth < 0 });
            p.label(pr.z, e[1], { color: G.colors.blue, dx: 10, dy: -9 });
          });
        }
      });

      function refresh() {
        var A = pt(lonA), B = pt(lonB);
        var g = arcLen(arcAB(A, B, 200));
        var l = arcLen(latArc(lonA, lonB, 200));
        var pct = l > 0 ? (l - g) / g * 100 : 0;
        G.say('d2-geo-out',
          '<div class="q hit"><b>geodesic (orange)</b><span>' + G.num(g, 3) + ' radii</span></div>' +
          '<div class="q miss"><b>along the latitude (dashed)</b><span>' + G.num(l, 3) + ' radii</span></div>' +
          '<div class="q"><b>the detour costs</b><span>' + G.num(pct, 1) + '% farther</span></div>');
        P.redraw();
      }

      G.slider('d2-yaw', function (v) { yaw = v * Math.PI / 180; P.redraw(); });
      G.slider('d2-a', function (v) { lonA = v; refresh(); });
      G.slider('d2-b', function (v) { lonB = v; refresh(); });
      refresh();
    })();

    /* ---- Carrying a triangle around a torus ---- */
    (function () {
      var where = 0;
      // plane() paints once during construction, before `P` below is assigned,
      // so the draw callback cannot stash anything on `P`.
      var state = { angleSum: 180, kappa: 1 };

      // A cross-section of the donut: the tube circle. `where` is the angle
      // around the tube - 0 on the outer wall, 180 on the inner wall.
      var Rbig = 2.05, rtube = 0.78;

      var P = G.plane('d2-torus', {
        span: 8.6, height: 330,
        draw: function (p) {
          var cx = -1.9;   // the cross-section, drawn on the left
          p.label(c(cx, 2.35), 'cross-section of the donut',
            { color: G.colors.muted, size: 12, dx: -78, halo: false });

          // Outline: two circles standing for the tube's outer and inner walls.
          p.circle(c(cx, 0), Rbig, { color: '#c9ced4', width: 1.6 });
          p.circle(c(cx, 0), Rbig - 2 * rtube, { color: '#c9ced4', width: 1.6 });
          p.circle(c(cx, 0), Rbig - rtube, { color: '#e6e9ec', width: 1, dash: [4, 4] });

          var a = where * Math.PI / 180;
          // Position on the tube: outer wall at 0, inner wall at 180.
          var rad = Rbig - rtube + rtube * Math.cos(a);
          var here = c(cx + rad, rtube * Math.sin(a) * 0.0);
          var mark = c(cx + rad, 0);
          p.dot(mark, { color: G.colors.blue, r: 7 });

          // How curved is it here? On the outer wall both directions curve the
          // same way (dome); on the inner wall they oppose (saddle). cos(a)
          // interpolates, and is the sign of the Gaussian curvature.
          var kappa = Math.cos(a);

          // The bug's triangle, drawn with edges bowed by the local curvature.
          var tx = 1.9, ty = 0.0, sz = 1.45;
          var V = [0, 1, 2].map(function (i) {
            var th = Math.PI / 2 + 2 * Math.PI * i / 3;
            return c(tx + sz * Math.cos(th), ty + sz * Math.sin(th));
          });

          p.label(c(tx, 2.35), 'her triangle, same size everywhere',
            { color: G.colors.muted, size: 12, dx: -102, halo: false });

          // Bow each edge outward (dome) or inward (saddle) by kappa.
          var bow = 0.30 * kappa;
          var angles = [];
          for (var i = 0; i < 3; i++) {
            var A = V[i], B = V[(i + 1) % 3];
            var mid = G.scale(G.add(A, B), 0.5);
            var ctr = c(tx, ty);
            var outward = G.sub(mid, ctr);
            var oL = G.abs(outward);
            var ctrl = G.add(mid, G.scale(outward, bow / (oL || 1)));
            var pts = [], t, j;
            for (j = 0; j <= 40; j++) {
              t = j / 40;
              // quadratic Bezier A -> ctrl -> B
              var u = 1 - t;
              pts.push(c(u * u * A.x + 2 * u * t * ctrl.x + t * t * B.x,
                u * u * A.y + 2 * u * t * ctrl.y + t * t * B.y));
            }
            p.poly(pts, { color: G.colors.orange, width: 2.6 });
            // Tangent direction at A along this edge, for the angle readout.
            angles.push({ at: i, dir: G.sub(ctrl, A) });
            angles.push({ at: (i + 1) % 3, dir: G.sub(ctrl, B) });
          }

          var sum = 0;
          for (var v = 0; v < 3; v++) {
            var ds = angles.filter(function (e) { return e.at === v; });
            var t1 = G.arg(ds[0].dir), t2 = G.arg(ds[1].dir);
            var d = Math.abs(t1 - t2);
            while (d > Math.PI) d = 2 * Math.PI - d;
            sum += d;
            p.dot(V[v], { color: G.colors.blue, r: 4 });
          }
          state.angleSum = sum * 180 / Math.PI;
          state.kappa = kappa;
        }
      });

      function refresh() {
        P.redraw();
        var s = state.angleSum, k = state.kappa;
        var kind = k > 0.12 ? 'dome-shaped (outer wall)'
          : k < -0.12 ? 'saddle-shaped (inner wall)'
            : 'the flat ring between them';
        var verdict = s > 180.6 ? 'more than 180° — she is somewhere convex'
          : s < 179.4 ? 'less than 180° — she is somewhere saddle-shaped'
            : 'about 180° — locally Euclidean here';
        G.say('d2-torus-out',
          '<div class="q"><b>where she is</b><span>' + kind + '</span></div>' +
          '<div class="q"><b>angle sum of her triangle</b><span>' + G.num(s, 1) + '°</span></div>' +
          '<div class="q" style="grid-column:1/-1"><b>what she can conclude</b><span>' + verdict
          + '</span></div>');
      }

      G.slider('d2-where', function (v) { where = v; refresh(); });
      refresh();
    })();
  })();
</script>
