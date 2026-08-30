---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 1: The Postulate That Wouldn't Behave"
day: 1
chapter_number: 1
chapter: "An Invitation to Geometry"
day_title: "The Postulate That Wouldn't Behave"
blurb: "Four of Euclid's postulates are one line long and obviously true. The fifth is a paragraph, and two thousand years of trying to prove it produced two new geometries instead."
reading: "Section 1.2, Euclid's five postulates through the shape of the universe"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>What Postulate 5 actually says</h2>

  <p>Almost nobody quotes the fifth postulate correctly, because the version most of us learned in high school
    is Playfair's reformulation, not Euclid's. Euclid's version is about a <em>transversal</em>:</p>

  <blockquote class="source">If a straight line falling on two straight lines makes the interior angles on the same
    side less than two right angles, the two straight lines, if produced indefinitely, meet on that side on which
    the angles are less than two right angles.</blockquote>

  <p>Below, the vertical line is the transversal. Two lines cross it, making interior angles \(\alpha\) and
    \(\beta\) on the right-hand side. Move them.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d1-alpha">\(\alpha\)</label>
      <input type="range" id="d1-alpha" min="35" max="145" step="0.5" value="78">
    </div>
    <div class="ctl">
      <label for="d1-beta">\(\beta\)</label>
      <input type="range" id="d1-beta" min="35" max="145" step="0.5" value="86">
    </div>
  </div>

  <canvas class="plot g304" id="d1-post5"></canvas>
  <div class="readout cols" id="d1-post5-out"></div>

  <p>Two things are worth noticing, and the second one is the whole reason this course exists.</p>

  <p><strong>First:</strong> the postulate is a promise about a <em>meeting point</em>. When
    \(\alpha + \beta \lt 180^\circ\) it guarantees the lines meet, and it even tells you which side to look on.
    Push the sum close to \(180^\circ\) and watch where the meeting point goes. It doesn't slow down and settle
    somewhere. It runs off the screen, and it keeps running.</p>

  <p><strong>Second:</strong> at exactly \(\alpha + \beta = 180^\circ\), the postulate says
    <em>nothing at all</em>. It has no clause for that case. The lines might meet somewhere absurdly far away;
    they might never meet; there might be a whole fan of lines through the same point that never meet. Euclid's
    fifth postulate is silent, and the silence is where hyperbolic and elliptic geometry live.</p>

  <details class="hint">
    <summary>Wait &mdash; can't you just say "at \(180^\circ\) they're parallel" and be done?</summary>
    <p>You can say it. What you can't do is get it for free. Turning "the interior angles sum to two right
      angles" into a statement about parallel lines &mdash; in either direction &mdash; takes an actual argument
      from the postulates, and that argument is exactly what your problem set is asking you for. So we'll stop
      the picture here and let you do it properly.</p>
  </details>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Two thousand years of nearly proving it</h2>

  <p>Your reading says that many people tried to derive the fifth postulate from the first four, and all of
    them failed. That's easy to read past. It's more interesting to see <em>how</em> they failed, because the
    failures are subtle and they all fail the same way.</p>

  <p>Here is a genuine historical attempt, in the style of Thabit ibn Qurra (9th century) and revived by
    Clairaut in the 18th. It aims to prove Playfair's version: through a point \(P\) not on a line \(L\), there
    is exactly one line missing \(L\).</p>

  <p><strong>Click the step that isn't earned by the first four postulates.</strong></p>

  <div class="flaw-widget" data-flaw="2">
    <div class="flawlist">
      <button class="fline" type="button">Let \(L\) be a line and \(P\) a point not on it. Drop a perpendicular
        from \(P\) to \(L\), meeting \(L\) at \(F\), and call the distance \(h = |PF|\).</button>
      <button class="fline" type="button">Consider the set \(E\) of all points on \(P\)'s side of \(L\) at
        perpendicular distance exactly \(h\) from \(L\). Since every point of \(E\) is the same distance from
        \(L\), the set \(E\) is a straight line.</button>
      <button class="fline" type="button">\(E\) contains \(P\), and \(E\) never meets \(L\), since every point of
        \(E\) is a distance \(h \gt 0\) away from it.</button>
      <button class="fline" type="button">Now suppose \(M\) is any line through \(P\) other than \(E\). Then
        \(M\) is not everywhere at distance \(h\) from \(L\), so along \(M\) the distance to \(L\) changes.
      </button>
      <button class="fline" type="button">Following \(M\) in the direction where that distance decreases, the
        distance eventually reaches \(0\), so \(M\) meets \(L\). Hence \(E\) is the only line through \(P\)
        missing \(L\), which is Playfair's axiom.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Fine.</strong> Dropping a perpendicular from a point to a line is a construction Euclid carries
        out in Proposition 12, using only the first four postulates. Nothing has been assumed here.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Found it. This is the step that quietly assumes what it's trying to prove.</strong></p>
      <p>The claim is that a <em>curve of constant distance</em> from a line is itself a line. It sounds like a
        definition. It feels like it barely says anything. And it is <em>logically equivalent to the fifth
          postulate</em> &mdash; in hyperbolic geometry the set of points at a fixed distance from a line is a
        curve (called a hypercycle) that is emphatically not a geodesic.</p>
      <p>This is the shape of every failed attempt: the author reaches for something so obvious it doesn't feel
        like an assumption, and it turns out to be Postulate 5 wearing a different hat. Other equivalents that
        have been "assumed" this way over the centuries: that similar triangles of different sizes exist; that
        three non-collinear points always lie on a circle; that a rectangle exists. Every one of them is
        equivalent to the parallel postulate, and every one of them looks harmless.</p>
      <p>Two more things worth taking from this. The first is that Euclid himself seems to have smelled trouble
        &mdash; he avoids using the fifth postulate until Proposition 29, working around it as long as he
        possibly can. The second is that the failure was productive: what finally broke the logjam was Bolyai
        and Lobachevsky asking the other question. Not "how do I prove it?" but "what happens if I deny it?"</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Correct, given line 2.</strong> If \(E\) really is a line, then it does contain \(P\), and it
        never meets \(L\), for exactly the reason stated. The trouble is entirely upstream: without the
        parallel postulate, \(E\) is a perfectly good <em>set of points</em>, but you have no right to call it
        a line.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Reasonable.</strong> If \(M \neq E\) then \(M\) leaves \(E\) somewhere, so the distance from
        \(M\) to \(L\) is not constant. This step is really just bookkeeping.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>The conclusion is exactly Playfair's axiom, and the argument is circular.</strong> It also has a
        secondary problem worth noticing on its own: "the distance decreases, so eventually it reaches zero"
        assumes the decrease doesn't level off. In the hyperbolic plane there are lines through \(P\) whose
        distance to \(L\) decreases forever and never reaches zero &mdash; they approach \(L\) asymptotically
        and never touch it. Those are precisely the extra parallels that hyperbolic geometry has and Euclidean
        geometry doesn't.</p>
    </div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The same question, asked in three worlds</h2>

  <p>Playfair's version of the postulate is a counting question: <em>given a line \(L\) and a point \(P\) not on
    \(L\), how many lines through \(P\) miss \(L\)?</em> Euclid says one. Your reading gives the two
    alternatives &mdash; 5H says at least two, 5E says zero &mdash; and asserts that both give coherent
    geometries. Here are all three, side by side.</p>

  <p>In each panel the thick line is \(L\), the dot is \(P\), and a fan of lines through \(P\) is drawn.
    <span style="color:#008552;font-weight:600;">Green</span> lines miss \(L\);
    <span style="color:#8a9199;font-weight:600;">grey</span> ones hit it, with the hit marked.</p>

  <div class="plane-trio">
    <div class="pane">
      <canvas class="plot g304" id="d1-euc"></canvas>
      <div class="cap"><b>The plane</b>Exactly one green line. Drag \(P\).</div>
    </div>
    <div class="pane">
      <canvas class="plot g304" id="d1-hyp"></canvas>
      <div class="cap"><b>A hyperbolic disk</b>Infinitely many. Drag \(P\).</div>
    </div>
    <div class="pane">
      <canvas class="plot g304" id="d1-sph"></canvas>
      <div class="cap"><b>The sphere</b>None. Spin it.</div>
    </div>
  </div>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d1-yaw">spin the sphere</label>
      <input type="range" id="d1-yaw" min="-180" max="180" step="1" value="-25">
    </div>
  </div>

  <div class="readout" id="d1-three-out"></div>

  <p>The middle panel needs a word of explanation, because it is going to look like cheating. That disk is the
    <strong>Poincar&eacute; disk</strong>, and the arcs in it really are its straight lines &mdash; they are the
    shortest paths between points, once you use the distance function that goes with the model. You'll build
    this model properly in Chapter 5, and by then you will be able to derive every arc on the screen. For now,
    accept the picture and count.</p>

  <p>The right panel is the sphere, where "line" means great circle &mdash; the shortest path between two
    points on the surface. Spin it and try to find a great circle through \(P\) that misses the equator. You
    can't, and the reason is not subtle: two great circles are the intersections of the sphere with two planes
    through its center, and two distinct planes through a common point always meet in a line. Every pair of
    great circles crosses. Twice.</p>

  <p>So the counting question has three answers &mdash; one, many, none &mdash; and each one is consistent. That
    is Beltrami's 1868 result in a picture: he built non-Euclidean geometry <em>inside</em> the Euclidean plane,
    so that any contradiction in the new geometry would be a contradiction in the old one. Non-Euclidean
    geometry doesn't need to be trusted on its own recognisance. It's exactly as safe as Euclid.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Which claim is doing the work?</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Bolyai and Lobachevsky are credited with showing that the fifth postulate is not a
      consequence of the first four. What did they actually <em>do</em>?</p>
    <button class="mc-opt" data-key="a">They found an error in one of Euclid's proofs that had gone unnoticed
      for 2000 years.</button>
    <button class="mc-opt" data-key="b">They proved directly that no derivation of Postulate 5 from Postulates
      1&ndash;4 can exist.</button>
    <button class="mc-opt" data-key="c">They developed a coherent geometry in which Postulates 1&ndash;4 hold
      and Postulate 5 fails.</button>
    <button class="mc-opt" data-key="d">They measured a very large triangle and found its angles didn't sum to
      \(180^\circ\).</button>

    <div class="mc-fb" data-key="a">
      <p>No &mdash; and this is a common misreading of the story. The <em>Elements</em> has some genuine gaps
        (Euclid uses facts about betweenness and continuity he never states), but that's not what happened
        here. The fifth postulate is not an error. It's an assumption, and the discovery was about what
        happens when you decline to make it.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Tempting, and close to the truth, but backwards. Proving that no proof exists is a hard thing to do
        head-on. The trick is <em>indirect</em>: build a world where the first four hold and the fifth fails.
        If Postulate 5 were derivable from 1&ndash;4, it would have to be true in that world too &mdash; and
        it isn't. So no derivation exists. The model does the impossibility proof for you.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Yes. This is the move, and it's worth staring at because it's the engine of the whole subject.
        You establish that something <em>can't be proved</em> by exhibiting a place where it's false and
        everything else is true.</p>
      <p>There's a wrinkle, though, and Beltrami is the one who ironed it out. Bolyai and Lobachevsky developed
        their geometry as a body of theorems, deriving result after result and never hitting a contradiction.
        That's suggestive, but it isn't proof &mdash; maybe the contradiction was on the next page. Beltrami's
        1868 construction of the geometry inside the Euclidean plane is what turned "we haven't found a
        contradiction" into "there is no contradiction unless Euclid has one too."</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Gauss is often said to have attempted something like this with three mountain peaks, though the story
        is probably apocryphal and the measurement was almost certainly a geodetic survey rather than a test of
        geometry. Either way it wouldn't settle anything. A measurement has error bars; it can never show an
        angle sum is <em>exactly</em> \(180^\circ\), and no finite measurement can rule out curvature small
        enough to hide. This is a question about logical consequence, and it gets settled with a model.</p>
    </div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Your reading says the Pythagorean theorem "depends upon the parallel postulate." What is the
      strongest thing that claim licenses you to say?</p>
    <button class="mc-opt" data-key="a">The Pythagorean theorem is false in hyperbolic and elliptic
      geometry.</button>
    <button class="mc-opt" data-key="b">Any proof of the Pythagorean theorem must use the parallel postulate
      somewhere.</button>
    <button class="mc-opt" data-key="c">The Pythagorean theorem is equivalent to the parallel
      postulate.</button>
    <button class="mc-opt" data-key="d">The Pythagorean theorem only holds for small triangles.</button>

    <div class="mc-fb" data-key="a">
      <p>True as stated for the familiar \(a^2+b^2=c^2\), but it undersells things badly. Chapters 5 and 6 prove
        non-Euclidean <em>versions</em> of the theorem, and Chapter 7 unifies all three into a single statement
        with a curvature parameter \(k\) that gives you the Euclidean version at \(k=0\). The theorem isn't
        destroyed by leaving Euclidean geometry &mdash; it's generalized.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Right, and this is what "depends on" means in this context. There's a world &mdash; hyperbolic
        geometry &mdash; where Postulates 1&ndash;4 hold and \(a^2+b^2=c^2\) fails. So no argument using only
        Postulates 1&ndash;4 can possibly reach it. Every one of the hundreds of published proofs of the
        Pythagorean theorem uses the parallel postulate somewhere, often buried inside a fact about similar
        triangles or about angle sums.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>As it happens this is <em>also</em> true &mdash; the Pythagorean theorem is one of the many statements
        equivalent to Postulate 5 &mdash; but it isn't what "depends on" licenses. "\(A\) depends on \(B\)"
        only gives you one direction. Getting equivalence means proving the converse too, which is a separate
        and harder job. Watch for this: the list of statements equivalent to the parallel postulate is long,
        and it is easy to assume membership rather than establish it. That's precisely how the argument in the
        previous activity went wrong.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>This mixes up two different things. In hyperbolic geometry the Pythagorean theorem fails for triangles
        of <em>every</em> size &mdash; small ones just fail by less. What's true is that non-Euclidean geometry
        is <em>locally close to</em> Euclidean, which is why your desk looks flat and why, as the reading puts
        it, "galactic triangles" have angle sums indistinguishable from \(180^\circ\). Small isn't exact; it's
        just hard to measure.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>In the first activity, the meeting point runs off to infinity as \(\alpha+\beta \to 180^\circ\). Elliptic
      geometry says there is no such thing as a pair of lines that never meet. Can you say, in one sentence,
      which of Euclid's five postulates elliptic geometry has to give up <em>besides</em> the fifth? (Look
      hard at Postulates 1 and 2. This is a real subtlety, and your text will come back to it in
      Section 6.4.)</li>
    <li>The failed proof used "points at a constant distance from a line form a line." Come with one other
      statement you believe without evidence that you now suspect might secretly be the parallel postulate.</li>
    <li>Klein's program, described at the end of the reading, defines geometry as the study of what stays
      unchanged under a group of allowable transformations. Before we build any of it: name one quantity you
      would expect to survive being rotated and translated, and one you'd expect not to survive being
      stretched.</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c, TAU = Math.PI * 2;

    /* ---- Postulate 5 with a movable transversal ---- */
    (function () {
      var A = c(0, 1.5), B = c(0, -1.5);
      var alpha = 78, beta = 86;

      function dirs() {
        var a = alpha * Math.PI / 180, b = beta * Math.PI / 180;
        return { dm: c(Math.sin(a), -Math.cos(a)), dn: c(Math.sin(b), Math.cos(b)), a: a, b: b };
      }

      // t sin(a+b) = 3 sin b, from solving A + t*dm = B + s*dn. As a+b -> pi the
      // denominator vanishes: that is the meeting point running away.
      function meet() {
        var d = dirs();
        var s = Math.sin(d.a + d.b);
        if (Math.abs(s) < 1e-9) return null;
        var t = 3 * Math.sin(d.b) / s;
        return { z: G.add(A, G.scale(d.dm, t)), t: t };
      }

      var P = G.plane('d1-post5', {
        span: 13, center: c(1.5, 0), height: 340,
        draw: function (p) {
          var d = dirs();
          p.grid(); p.axes({ ticks: false });

          // The transversal.
          p.line(G.line(c(0, -1), c(0, 1)), { color: G.colors.muted, width: 2 });
          p.label(c(0, 3.4), 'transversal', { color: G.colors.muted, dx: 8, size: 12 });

          // The two lines.
          p.line({ k: 'l', p: A, d: d.dm }, { color: G.colors.blue, width: 2.4 });
          p.line({ k: 'l', p: B, d: d.dn }, { color: G.colors.violet, width: 2.4 });

          // Interior angles on the right-hand side.
          p.angleArc(A, G.add(A, c(0, -1)), G.add(A, d.dm),
            { color: G.colors.blue, width: 1.8, rpx: 30, text: G.num(alpha, 0) + '°' });
          p.angleArc(B, G.add(B, d.dn), G.add(B, c(0, 1)),
            { color: G.colors.violet, width: 1.8, rpx: 30, text: G.num(beta, 0) + '°' });

          p.dot(A, { color: G.colors.blue, r: 4.5 });
          p.dot(B, { color: G.colors.violet, r: 4.5 });

          var m = meet();
          if (m && m.t > 0) {
            var b = p.bounds();
            if (m.z.x <= b.x1 && m.z.x >= b.x0 && m.z.y <= b.y1 && m.z.y >= b.y0) {
              p.dot(m.z, { color: G.colors.orange, r: 7 });
              p.label(m.z, 'they meet here', { color: G.colors.orange, dx: 11, dy: -10 });
            } else {
              // Off-screen: point at it rather than pretending it isn't there.
              var edge = c(b.x1 - 0.55, A.y + (d.dm.y / d.dm.x) * (b.x1 - 0.55));
              p.arrow(G.add(edge, c(-1.6, 0)), edge, { color: G.colors.orange, width: 2.4 });
              p.label(edge, 'meets off-screen', { color: G.colors.orange, dx: -14, dy: -12, align: 'right' });
            }
          }
        }
      });

      function refresh() {
        var sum = alpha + beta, m = meet();
        var where, note;
        if (Math.abs(sum - 180) < 0.25) {
          where = 'nowhere on this side';
          note = 'The postulate has nothing to say here. This is the case it does not cover.';
        } else if (sum < 180) {
          where = G.num(G.abs(G.sub(m.z, c(0, 0))), 1) + ' from the origin';
          note = 'Sum under 180°, so Postulate 5 promises a meeting point on the right — and there it is.';
        } else {
          where = 'on the <em>left</em>, not the right';
          note = 'Sum over 180°. Then the interior angles on the <em>other</em> side sum to under 180°, '
            + 'and the postulate sends the meeting point over there instead.';
        }
        G.say('d1-post5-out',
          '<div class="q"><b>α + β</b><span>' + G.num(sum, 1) + '°</span></div>' +
          '<div class="q ' + (Math.abs(sum - 180) < 0.25 ? 'miss' : 'hit') + '"><b>meeting point</b><span>'
          + where + '</span></div>' +
          '<div class="q" style="grid-column:1/-1"><b>what the postulate says</b><span>' + note + '</span></div>');
        P.redraw();
      }

      G.slider('d1-alpha', function (v) { alpha = v; refresh(); });
      G.slider('d1-beta', function (v) { beta = v; refresh(); });
      refresh();
    })();

    /* ---- Three worlds: how many lines through P miss L? ---- */
    (function () {
      var FAN = 15;
      var missEuc = 0, missHyp = 0, missSph = 0;

      function report() {
        G.say('d1-three-out',
          '<b>Lines through \\(P\\) missing \\(L\\), out of the ' + FAN + ' drawn in each panel:</b> ' +
          'plane <b>' + missEuc + '</b> &middot; hyperbolic disk <b>' + missHyp + '</b> &middot; sphere <b>'
          + missSph + '</b>. ' +
          'The disk count is limited only by how many lines we bothered to draw — the true answer there is ' +
          'infinite, and the fan is a sample of it.');
      }

      /* Euclidean panel. */
      var Peuc = G.plane('d1-euc', {
        span: 9, center: c(0, 0.8), height: 300,
        handles: [{ name: 'P', z: c(-0.6, 2.1), color: G.colors.blue, label: 'P' }],
        draw: function (p) {
          var P0 = p.get('P');
          p.grid(); 
          var L = G.line(c(-6, -1.6), c(6, -1.6));
          missEuc = 0;
          for (var k = 0; k < FAN; k++) {
            var th = -Math.PI / 2 + Math.PI * (k + 0.5) / FAN;
            var ln = G.lineDir(P0, th);
            // Parallel to L exactly when the direction is horizontal.
            var parallel = Math.abs(ln.d.y) < 0.035;
            if (parallel) {
              missEuc++;
              p.line(ln, { color: G.colors.green, width: 2.2 });
            } else {
              var t = (-1.6 - P0.y) / ln.d.y;
              var hit = G.add(P0, G.scale(ln.d, t));
              p.line(ln, { color: '#c9ced4', width: 1.2 });
              p.dot(hit, { color: '#b9bfc6', r: 3 });
            }
          }
          p.line(L, { color: G.colors.ink, width: 3 });
          p.label(c(3.4, -1.6), 'L', { color: G.colors.ink, dx: 4, dy: -6 });
        },
        onDrag: function () { report(); }
      });

      /* Hyperbolic panel: the Poincare disk. Geodesics through P are the images
         of diameters under the disk isometry taking 0 to P, so both ideal
         endpoints come for free - and two geodesics cross exactly when their
         ideal endpoints interleave around the boundary circle. */
      var Lends = [-0.42, -(Math.PI - 0.42)];

      function interleaves(u1, u2, v1, v2) {
        var norm = function (t) { return ((t % TAU) + TAU) % TAU; };
        var a = norm(u1), b = norm(u2), x = norm(v1), y = norm(v2);
        var between = function (t, lo, hi) {
          t = norm(t - lo); hi = norm(hi - lo);
          return t > 1e-9 && t < hi - 1e-9;
        };
        return between(x, a, b) !== between(y, a, b);
      }

      var Phyp = G.plane('d1-hyp', {
        span: 2.5, height: 300,
        handles: [{
          name: 'P', z: c(-0.12, 0.42), color: G.colors.blue, label: 'P',
          // Keep P strictly inside the disk; on the boundary it isn't a point
          // of the hyperbolic plane at all.
          constrain: function (z) {
            var r = G.abs(z);
            return r > 0.94 ? G.scale(z, 0.94 / r) : z;
          }
        }],
        draw: function (p) {
          var P0 = p.get('P');
          p.circle(c(0, 0), 1, { color: '#c9ced4', width: 2, fill: '#fbfcfd', fillAlpha: 1 });

          var L = G.diskGeodesic(Lends[0], Lends[1]);

          // phi maps the disk to itself sending 0 -> P; its inverse turns
          // diameters into the geodesics through P.
          var phiInv = G.mobius(c(1, 0), P0, G.conj(P0), c(1, 0));

          missHyp = 0;
          for (var k = 0; k < FAN; k++) {
            var th = Math.PI * k / FAN;
            var g = G.mapCline(G.lineDir(c(0, 0), th), phiInv, 0.6);
            var e1 = G.arg(phiInv(G.expi(th)));
            var e2 = G.arg(phiInv(G.expi(th + Math.PI)));
            var crosses = interleaves(e1, e2, Lends[0], Lends[1]);
            if (!crosses) missHyp++;
            // Clip each geodesic to the disk by drawing it as a clipped path.
            p.ctx.save();
            p.ctx.beginPath();
            p.ctx.arc(p.sx(c(0, 0)), p.sy(c(0, 0)), p.scale, 0, TAU);
            p.ctx.clip();
            p.cline(g, crosses
              ? { color: '#c9ced4', width: 1.2 }
              : { color: G.colors.green, width: 2 });
            p.ctx.restore();
          }

          p.ctx.save();
          p.ctx.beginPath();
          p.ctx.arc(p.sx(c(0, 0)), p.sy(c(0, 0)), p.scale, 0, TAU);
          p.ctx.clip();
          p.cline(L, { color: G.colors.ink, width: 3 });
          p.ctx.restore();
          p.label(G.scale(G.expi((Lends[0] + Lends[1]) / 2), 0.55), 'L',
            { color: G.colors.ink, dx: 2, dy: 16 });
        },
        onDrag: function () { report(); }
      });

      /* Spherical panel. Every great circle through P meets the equator. */
      var yaw = -25 * Math.PI / 180, pitch = 0.42;
      var Psph = G.v3(Math.cos(0.7) * Math.cos(0.9), Math.cos(0.7) * Math.sin(0.9), Math.sin(0.7));

      function drawArc(p, pts, style, styleBack) {
        var front = [], back = [];
        pts.forEach(function (q) {
          var pr = G.proj3(q, yaw, pitch);
          (pr.depth >= 0 ? front : back).push(pr.z);
          // A break in the other list keeps the two halves from being joined
          // by a chord straight across the sphere.
          (pr.depth >= 0 ? back : front).push(null);
        });
        p.poly(back, styleBack);
        p.poly(front, style);
      }

      var Psphere = G.plane('d1-sph', {
        span: 2.5, height: 300,
        draw: function (p) {
          // The silhouette.
          p.circle(c(0, 0), 1, { color: '#c9ced4', width: 2, fill: '#fbfcfd', fillAlpha: 1 });

          // A fan of great circles through P: normals perpendicular to P.
          var seed = Math.abs(Psph.z) < 0.9 ? G.v3(0, 0, 1) : G.v3(1, 0, 0);
          var u = G.v3(Psph.y * seed.z - Psph.z * seed.y,
            Psph.z * seed.x - Psph.x * seed.z,
            Psph.x * seed.y - Psph.y * seed.x);
          var uL = Math.hypot(u.x, u.y, u.z);
          u = G.v3(u.x / uL, u.y / uL, u.z / uL);
          var v = G.v3(Psph.y * u.z - Psph.z * u.y,
            Psph.z * u.x - Psph.x * u.z,
            Psph.x * u.y - Psph.y * u.x);

          missSph = 0;
          for (var k = 0; k < FAN; k++) {
            var t = Math.PI * k / FAN;
            var n = G.v3(Math.cos(t) * u.x + Math.sin(t) * v.x,
              Math.cos(t) * u.y + Math.sin(t) * v.y,
              Math.cos(t) * u.z + Math.sin(t) * v.z);
            drawArc(p, G.greatCircle(n, 200),
              { color: '#c9ced4', width: 1.2 },
              { color: '#e6e9ec', width: 1 });
            // Where it crosses the equator: the equator's plane is z = 0, so the
            // crossing directions are +/- (n x k), normalized.
            var w = G.v3(n.y, -n.x, 0);
            var wL = Math.hypot(w.x, w.y, w.z);
            if (wL > 1e-9) {
              [1, -1].forEach(function (s) {
                var q = G.v3(s * w.x / wL, s * w.y / wL, 0);
                var pr = G.proj3(q, yaw, pitch);
                if (pr.depth >= 0) p.dot(pr.z, { color: '#b9bfc6', r: 2.5 });
              });
            }
          }

          drawArc(p, G.greatCircle(G.v3(0, 0, 1), 220),
            { color: G.colors.ink, width: 3 },
            { color: '#b9bfc6', width: 1.6, dash: [4, 4] });

          var pr = G.proj3(Psph, yaw, pitch);
          if (pr.depth >= 0) {
            p.dot(pr.z, { color: G.colors.blue, r: 6 });
            p.label(pr.z, 'P', { color: G.colors.blue, dx: 9, dy: -8 });
          } else {
            p.dot(pr.z, { color: G.colors.blue, r: 5, hollow: true });
            p.label(pr.z, 'P (behind)', { color: G.colors.blue, dx: 9, dy: -8, size: 11 });
          }
        }
      });

      G.slider('d1-yaw', function (v) {
        yaw = v * Math.PI / 180;
        Psphere.redraw();
        report();
      });
      report();
    })();
  })();
</script>
