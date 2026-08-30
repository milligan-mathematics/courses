---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 11: Orthogonality and Symmetry Points"
day: 11
chapter_number: 3
chapter: "Transformations"
day_title: "Orthogonality and Symmetry Points"
blurb: "Inversion destroys distance and bends lines. What it protects is angle, and a relationship between pairs of points called symmetry — and those two survivors are enough to build a geometry on."
reading: "Section 3.2, Lemma 3.2.7 through Theorem 3.2.16"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The clines that don't move</h2>

  <p>Corollary 3.2.9 says inversion in \(C\) sends every cline orthogonal to \(C\) to <em>itself</em>. Not to
    a congruent copy &mdash; to the same set of points. That's a strong claim, and it's the load-bearing fact
    for the rest of the course.</p>

  <p>Below, \(C\) is the green circle. Drag \(z\), and its symmetric point \(z^*\) follows. The orange clines
    are the ones passing through both \(z\) and \(z^*\).</p>

  <canvas class="plot g304" id="d11-orth"></canvas>
  <div class="drag-hint">Drag \(z\).</div>
  <div class="readout cols" id="d11-orth-out"></div>

  <p>Every orange cline crosses the green circle at right angles &mdash; check a few by eye, and check the
    readout, which measures one of them. That's Theorem 3.2.8:</p>

  <blockquote class="source">A cline through \(z\) is orthogonal to \(C\) if and only if it goes through
    \(z^*\), the point symmetric to \(z\) with respect to \(C\).</blockquote>

  <p>The "if and only if" is doing real work. It converts a statement about <em>angles</em> &mdash; hard to
    check, involves tangent directions &mdash; into a statement about <em>incidence</em>: does the cline pass
    through this particular other point? Incidence is easy. Whenever you need orthogonality to \(C\) later,
    this is how you'll get it.</p>

  <p>Now put the two facts together, because the combination is what makes the whole thing useful.
    Theorem 3.2.8 says an orthogonal cline contains both \(z\) and \(z^*\); inversion swaps those two, and
    maps clines to clines. So the image cline still passes through \(z\) and \(z^*\)&mdash; and by
    Theorem 3.2.4 there's only <em>one</em> cline through a given three points. Pin down a third point on it
    the same way, and the image has to be the original. That's Corollary 3.2.9, and the scaffold below does
    it carefully.</p>

  <details class="hint">
    <summary>A special case you've already seen</summary>
    <p>Lines through the centre \(z_0\) are orthogonal to \(C\) &mdash; a line meets a circle at right angles
      exactly when it goes through the centre. And on Day 9 you saw those lines map to themselves, because
      inversion slides points along rays from \(z_0\).</p>
    <p>Corollary 3.2.9 says this is not a special feature of lines. Circles orthogonal to \(C\) do it too, and
      for the same underlying reason. Drag \(z\) around and watch: most of the orange clines are circles, and
      every one of them is invariant.</p>
  </details>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>Why orthogonal clines survive</h2>

  <p>Theorem 3.2.8 and Corollary 3.2.9 are stated in your reading with their proofs collapsed away. Both are
    short, and the first uses Lemma 3.2.7 (the power of a point) in a way worth seeing.</p>

  <p>Recall the lemma: if \(C\) has radius \(r\) and centre \(o\), and \(p\) is outside \(C\) at distance
    \(s\) from \(o\), then any line through \(p\) meeting \(C\) at \(m\) and \(n\) satisfies
    \(|p-m|\cdot|p-n| = s^2 - r^2\). The right side depends only on \(p\), not on which line you drew.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Warm-up: the lemma says the product is the same for every line through
          \(p\). What does that let you say about a line through \(p\) that is <em>tangent</em> to \(C\),
          touching at \(t\)?</div>
        <div class="sstep-body">
          <p>A tangent line meets \(C\) at one point, which you can think of as \(m = n = t\). The product
            becomes \(|p-t|^2 = s^2 - r^2\).</p>
          <p>And that is the Pythagorean theorem in the right triangle with vertices \(o\), \(t\), \(p\)
            &mdash; right-angled at \(t\), because a tangent is perpendicular to the radius at the point of
            contact. So the power of a point is the squared tangent length. Worth having: it converts an
            algebraic quantity into a visible one.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now the easy direction of Theorem 3.2.8. Suppose a circle \(D\) is
          orthogonal to \(C\), and \(z\) is on \(D\). Show \(z^*\) is on \(D\) too.</div>
        <div class="sstep-body">
          <p>Let \(o\) be the centre of \(C\) and \(r\) its radius. \(D\) meets \(C\) at right angles at some
            point \(t\); orthogonality of the two circles means the radius \(ot\) of \(C\) is tangent to
            \(D\) at \(t\). So the line \(ot\) is tangent to \(D\), and \(|o - t| = r\).</p>
          <p>Now apply the lemma to the circle \(D\) and the point \(o\): the tangent length from \(o\) to
            \(D\) is \(r\), so <em>every</em> line through \(o\) meeting \(D\) at two points \(m, n\)
            satisfies \(|o-m|\cdot|o-n| = r^2\).</p>
          <p>Take the line through \(o\) and \(z\). It meets \(D\) at \(z\) and at some second point \(w\),
            with \(|o-z|\cdot|o-w| = r^2\) and \(w\) on the same ray as \(z\) (both hit the same side; the
            product being positive settles it). But that is exactly the defining condition for \(w = z^*\).
            So \(z^*\) is on \(D\).</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now Corollary 3.2.9: an orthogonal cline \(D\) maps to itself. Assemble it
          from what you have.</div>
        <div class="sstep-body">
          <p>Take any point \(z\) on \(D\), other than the two crossing points. By the previous step, \(z^*\)
            is also on \(D\). But \(z^* = i_C(z)\). So \(i_C\) sends every point of \(D\) to a point of
            \(D\).</p>
          <p>That gives \(i_C(D) \subseteq D\). For equality, use that \(i_C\) is its own inverse: applying
            it again, \(D = i_C(i_C(D)) \subseteq i_C(D)\). Both inclusions, so \(i_C(D) = D\).</p>
          <p>Note carefully what is <em>not</em> being claimed. The set \(D\) is preserved; its individual
            points are not. Points of \(D\) inside \(C\) get swapped with points of \(D\) outside \(C\). The
            only points of \(D\) that stay put are the two where it crosses \(C\). "Invariant" means the
            figure is preserved, not frozen &mdash; a distinction Chapter 4 will lean on constantly.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Last: why is this the fact that Chapter 5 is built on?</div>
        <div class="sstep-body">
          <p>Because it hands you a supply of transformations that preserve a disk.</p>
          <p>Hyperbolic geometry lives inside the unit disk. To do geometry there you need motions that carry
            the disk to itself &mdash; a "rotation" of the hyperbolic plane must not throw points out of the
            disk. Corollary 3.2.9 supplies them: invert in any circle orthogonal to the unit circle, and the
            unit circle is preserved, so the inside stays inside.</p>
          <p>Compose two such inversions and you get an orientation-preserving M&ouml;bius transformation of
            the disk to itself. Those are the isometries of the hyperbolic plane. And the arcs you saw in the
            Poincar&eacute; disk on Day 1 &mdash; the "lines" of that geometry &mdash; are precisely the
            clines orthogonal to the unit circle, which is to say, exactly the ones this corollary protects.
          </p>
          <p>Everything in Chapter 5 is downstream of this one sentence.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Apollonius: constant ratio, every time a circle</h2>

  <p>Theorem 3.2.14 fixes two points \(p, q\) and a positive real \(k\), and looks at</p>

  \[ D = \{\, z : |z - p| = k\,|z-q| \,\}. \]

  <p>You met this on Day 6 for \(k=2\) and saw a circle. Now watch the whole family as \(k\) runs.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d11-k">\(k\)</label>
      <input type="range" id="d11-k" min="-1.6" max="1.6" step="0.01" value="0.45">
    </div>
    <div class="ctl">
      <label for="d11-fam">
        <input type="checkbox" id="d11-fam" checked> show the whole family
      </label>
    </div>
  </div>

  <canvas class="plot g304" id="d11-apoll"></canvas>
  <div class="drag-hint">Drag \(p\) or \(q\).</div>
  <div class="readout cols" id="d11-apoll-out"></div>

  <p>Run \(k\) from small to large and watch the circle sweep across the plane. When \(k\) is tiny, \(z\) has
    to be very close to \(p\), so the circle is a small loop around \(p\). When \(k\) is huge, it's a small
    loop around \(q\). And at exactly \(k = 1\) the circle degenerates &mdash; into the perpendicular bisector
    of \(pq\), which is a line.</p>

  <p>So this one family contains circles of every size around each of two points, plus exactly one line. The
    family fills the plane: through any point other than \(p\) and \(q\) there is exactly one member,
    determined by the ratio of that point's two distances.</p>

  <p>Your reading calls these the <strong>circles of Apollonius of \(p\) and \(q\)</strong>. Section 3.5 will
    call them the <strong>type II clines</strong> of \(p\) and \(q\), pair them with the clines through
    \(p\) and \(q\) (the type I clines), and show that every M&ouml;bius transformation fixing \(p\) and
    \(q\) moves points <em>along</em> these two families. What looks now like a curiosity about ratios of
    distances is about to become a coordinate system.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Transporting a symmetry</h2>

  <p>Theorem 3.2.12 says inversion preserves symmetry points: if \(p\) and \(q\) are symmetric with respect
    to a cline \(D\), then \(i_C(p)\) and \(i_C(q)\) are symmetric with respect to \(i_C(D)\). Here's an
    argument that gets it slightly &mdash; and consequentially &mdash; wrong.</p>

  <p><strong>Click the step that isn't right.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Suppose \(p\) and \(q\) are symmetric with respect to the cline
        \(D\), and let \(C\) be some other circle.</button>
      <button class="fline" type="button">By Theorem 3.2.8, every cline through \(p\) and \(q\) is orthogonal
        to \(D\), and inversion in \(C\) preserves angle magnitudes.</button>
      <button class="fline" type="button">So the images of those clines all pass through \(i_C(p)\) and
        \(i_C(q)\), and all meet \(D\) at right angles.</button>
      <button class="fline" type="button">By Theorem 3.2.8 read backwards, that makes \(i_C(p)\) and
        \(i_C(q)\) symmetric with respect to \(D\).</button>
      <button class="fline" type="button">So symmetry with respect to \(D\) is preserved by inversion in any
        circle \(C\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Fine &mdash; this is just the setup.</strong> Nothing is claimed yet.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Both halves are correct.</strong> Theorem 3.2.8 characterises the clines orthogonal to \(D\)
        as exactly those through a symmetric pair, and Theorem 3.2.10 gives angle-magnitude preservation for
        inversion. Angle magnitude is all we need here, since "right angle" doesn't care about sign.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Found it. The images meet \(i_C(D)\) at right angles, not \(D\).</strong></p>
      <p>Inversion in \(C\) moves <em>everything</em>. If two clines cross at right angles, their images cross
        at right angles &mdash; but the images, not the originals. \(D\) has been moved too, into \(i_C(D)\),
        and the right angles are now between the image clines and \(i_C(D)\).</p>
      <p>This is a specific and very common failure mode, worth naming: <strong>applying a transformation to
          some of the objects in a statement and not all of them.</strong> Every ingredient of the hypothesis
        has to be pushed through the map. Compare Theorem 3.2.12 as your reading actually states it: the
        conclusion is about \(i_C(D)\), and the whole content of the theorem is in that one symbol.</p>
      <p>How wrong is it? Completely. Take \(D\) the unit circle, \(p = \tfrac12\), \(q = 2\) &mdash; genuinely
        symmetric, since \(\tfrac12 \cdot 2 = 1\). Now invert in the circle \(C\) centred at \(3\) with
        radius \(1\). The images of \(p\) and \(q\) are \(3 - \tfrac{1}{2.5} = 2.6\) and \(3 - 1 = 2\), and
        those two are nowhere near symmetric about the unit circle &mdash; their distances from the origin
        multiply to \(5.2\), not \(1\). They <em>are</em> symmetric about \(i_C(D)\), which is a different
        circle entirely.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>The inference is valid; it's the input that's wrong.</strong> Theorem 3.2.8 does run
        backwards like this &mdash; if every cline through two points is orthogonal to a cline, the two points
        are symmetric with respect to it. Fed \(i_C(D)\) instead of \(D\), this line would be correct and the
        argument would prove the theorem.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>False as stated, and worth understanding why the correct version is still powerful.</strong>
      </p>
      <p>Symmetry is not preserved with respect to a <em>fixed</em> cline. What's preserved is the
        <em>relationship</em>: the pair and the cline all move together, and the relation between them
        survives.</p>
      <p>That's what an invariant looks like in this subject, and Chapter 4 will make the pattern official.
        Rarely does a specific object stay put. What stays is a relation among objects that all move at
        once &mdash; and Corollary 3.4.14 will carry this exact statement over from inversions to every
        M&ouml;bius transformation.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Symmetry, orthogonality, invariance</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Theorem 3.2.16 needs two clines that don't intersect, <em>and</em> at least one of them
      to be a circle. Why isn't "two non-intersecting clines" enough on its own?</p>
    <button class="mc-opt" data-key="a">Because two lines always intersect, so the case can't
      arise.</button>
    <button class="mc-opt" data-key="b">Because a line has no interior, so symmetry isn't defined across
      it.</button>
    <button class="mc-opt" data-key="c">Because two parallel lines have no pair of distinct points symmetric
      across both.</button>
    <button class="mc-opt" data-key="d">Because the theorem is about circles and lines were never
      included.</button>

    <div class="mc-fb" data-key="a">
      <p>In \(\mathbb{C}^+\) any two lines do share the point \(\infty\), which is a real subtlety &mdash;
        but "non-intersecting" here is being used about the finite plane, and two parallel lines are the
        obvious pair to worry about. They're precisely the case the extra hypothesis excludes.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Symmetry across a line is perfectly well defined &mdash; it's ordinary reflection, which
        Definition 3.2.3 folds into "inversion in a cline." A point and its mirror image are symmetric with
        respect to the line. No interior required.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Right, and it's worth checking. Suppose \(p\) and \(q\) were symmetric across both of two parallel
        lines \(L_1\) and \(L_2\). Symmetry across a line means the line is the perpendicular bisector of the
        segment \(pq\) &mdash; and a segment has only one perpendicular bisector. So \(L_1 = L_2\), and we
        assumed they were different.</p>
      <p>So the hypothesis isn't decoration; parallel lines are a genuine exception. Requiring at least one
        circle rules them out, and it's the only case that needed ruling out.</p>
      <p>Notice that \(\infty\) doesn't rescue it either: \(\infty\) is symmetric to itself with respect to
        any line, which gives you a point but not a <em>pair</em> of distinct ones.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Lines are clines, and the theorem is stated for clines &mdash; a line and a circle that miss each
        other are covered. What's excluded is only the case where <em>both</em> are lines.</p>
    </div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">A circle \(D\) is orthogonal to \(C\), so \(i_C(D) = D\). Which points of \(D\) does
      \(i_C\) leave exactly where they are?</p>
    <button class="mc-opt" data-key="a">All of them &mdash; that's what \(i_C(D) = D\) means.</button>
    <button class="mc-opt" data-key="b">Only the centre of \(D\).</button>
    <button class="mc-opt" data-key="c">Only the two points where \(D\) crosses \(C\).</button>
    <button class="mc-opt" data-key="d">None of them.</button>

    <div class="mc-fb" data-key="a">
      <p>This is the distinction the scaffold flagged, and it's worth getting straight because Chapter 4
        depends on it. \(i_C(D) = D\) says the <em>set</em> \(D\) is carried onto itself, not that each point
        stays. Points of \(D\) inside \(C\) get sent to points of \(D\) outside \(C\), and vice versa. The set
        is preserved; almost all its points move.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>The centre of \(D\) isn't even on \(D\), so it isn't among the candidates. (And in fact the centre of
        \(D\) does <em>not</em> map to the centre of the image &mdash; a point your problem set asks you to
        settle.)</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Right. The only points \(i_C\) fixes anywhere in the plane are the points of \(C\) itself &mdash;
        every other point either moves in or moves out. So the fixed points on \(D\) are exactly
        \(D \cap C\), which for orthogonal circles is two points.</p>
      <p>A useful way to hold the whole picture: \(i_C\) has a fixed <em>curve</em> (all of \(C\)) and a large
        supply of invariant <em>curves</em> (everything orthogonal to \(C\)), and those are different things.
        In Section 3.5 the same distinction reappears: a M&ouml;bius transformation fixes one or two
        <em>points</em>, but leaves whole families of clines invariant, sliding points along them.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Points of \(C\) never move &mdash; the definition forces \(|z-z_0|^2 = r^2\) there, so \(z^* = z\).
        Since \(D\) is orthogonal to \(C\), it crosses \(C\), and those crossing points are on both.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Theorem 3.2.8 turns a question about angles into a question about incidence. Say why that's a good
      trade, in terms of what's easy to check.</li>
    <li>In the Apollonius activity, \(k = 1\) gave a line rather than a circle. Every other \(k\) gave a
      circle. Explain the exception, and say where the "missing" circle went.</li>
    <li>Chapter 5 will do hyperbolic geometry inside the unit disk. Based on today, name the transformations
      you'd expect to be the allowable motions of that geometry, and say what property qualifies them.</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    /* ---- clines through z and z*, all orthogonal to C ---- */
    (function () {
      var Z0 = c(0, 0), R = 2.4;

      var P = G.plane('d11-orth', {
        span: 13, height: 400,
        handles: [{
          name: 'z', z: c(1.1, 0.7), color: G.colors.blue, label: 'z',
          constrain: function (w) {
            var d = G.sub(w, Z0), m = G.abs(d);
            if (m < 0.3) return G.add(Z0, G.scale(d, 0.3 / Math.max(m, 1e-6)));
            // Keep z off C itself, where z* = z and the family degenerates.
            if (Math.abs(m - R) < 0.12) {
              return G.add(Z0, G.scale(d, (m < R ? R - 0.12 : R + 0.12) / m));
            }
            return w;
          }
        }],
        draw: function (p) {
          var z = p.get('z');
          var zs = G.invertIn(z, Z0, R);
          p.grid(); p.axes({ ticks: false });

          p.circle(Z0, R, { color: G.colors.green, width: 3 });
          p.label(G.add(Z0, c(0, R)), 'C', { color: G.colors.green, dx: 8, dy: -6 });

          // The clines through z and z* are exactly the type I clines of that
          // pair, so reuse the library's family rather than sweeping a third
          // point by hand - it spreads them much more evenly.
          if (zs) {
            G.typeClines(z, zs, { typeI: 11, typeII: 0 }).typeI.forEach(function (cl) {
              if (cl) p.cline(cl, { color: G.colors.orange, width: 1.6, alpha: 0.9 });
            });
            p.dot(zs, { color: G.colors.orange, r: 6 });
            p.label(zs, 'z*', { color: G.colors.orange, dx: 10, dy: -9 });
          }
          p.dot(Z0, { color: G.colors.green, r: 4 });
        },
        onDrag: function () { refresh(); }
      });

      function refresh() {
        P.redraw();
        var z = P.get('z'), zs = G.invertIn(z, Z0, R);
        // Measure the crossing angle of one member of the family against C.
        // Measure one of the members actually drawn, so the readout and the
        // picture cannot disagree.
        var fam = G.typeClines(z, zs, { typeI: 11, typeII: 0 }).typeI;
        var cl = fam[3] || fam[0];
        var ang = '—';
        if (cl && cl.k === 'c') {
          // Two circles are orthogonal exactly when d^2 = r1^2 + r2^2.
          var dd = G.abs(G.sub(cl.c, Z0));
          var lhs = dd * dd, rhs = R * R + cl.r * cl.r;
          var cosang = (lhs - rhs) / (2 * R * cl.r);
          cosang = Math.max(-1, Math.min(1, cosang));
          ang = G.num(Math.acos(Math.max(-1, Math.min(1, -cosang))) * 180 / Math.PI, 2) + '°';
        } else if (cl) {
          ang = '90.00° (a line through the centre)';
        }
        G.say('d11-orth-out',
          '<div class="q"><b>|z − z₀| · |z* − z₀|</b><span>'
          + G.num(G.abs(G.sub(z, Z0)) * G.abs(G.sub(zs, Z0)), 3) + '</span></div>' +
          '<div class="q"><b>r²</b><span>' + G.num(R * R, 3) + '</span></div>' +
          '<div class="q hit"><b>angle where one of them meets C</b><span>' + ang + '</span></div>' +
          '<div class="q"><b>so each orange cline is</b><span>mapped onto itself by i_C</span></div>');
      }
      refresh();
    })();

    /* ---- circles of Apollonius ---- */
    (function () {
      var logk = 0.45, family = true;

      // The locus |z-p| = k|z-q| in closed form: for k != 1 a circle with
      // centre (p - k^2 q)/(1-k^2) and radius k|p-q|/|1-k^2|.
      function apollo(p0, q0, k) {
        if (Math.abs(k - 1) < 1e-4) {
          var mid = G.scale(G.add(p0, q0), 0.5);
          var d = G.sub(q0, p0);
          if (G.abs(d) < 1e-9) return null;
          return G.lineDir(mid, G.arg(d) + Math.PI / 2);
        }
        var k2 = k * k, den = 1 - k2;
        var ctr = G.scale(G.sub(p0, G.scale(q0, k2)), 1 / den);
        var rad = k * G.abs(G.sub(p0, q0)) / Math.abs(den);
        return G.circle(ctr, rad);
      }

      var P = G.plane('d11-apoll', {
        span: 13, height: 400,
        handles: [
          { name: 'p', z: c(-2, -0.4), color: G.colors.blue, label: 'p' },
          { name: 'q', z: c(2.1, 0.7), color: G.colors.violet, label: 'q' }
        ],
        draw: function (pl) {
          var p0 = pl.get('p'), q0 = pl.get('q');
          pl.grid(); pl.axes({ ticks: false });

          if (family) {
            for (var j = -6; j <= 6; j++) {
              if (j === 0) continue;
              var cl = apollo(p0, q0, Math.pow(2, j / 2.2));
              if (cl) pl.cline(cl, { color: '#dfe3e7', width: 1.4 });
            }
            var mid = apollo(p0, q0, 1);
            if (mid) pl.cline(mid, { color: '#c9ced4', width: 1.6, dash: [6, 4] });
          }

          var here = apollo(p0, q0, Math.pow(10, logk));
          if (here) pl.cline(here, { color: G.colors.orange, width: 3 });
        },
        onDrag: function () { refresh(); }
      });

      function refresh() {
        P.redraw();
        var k = Math.pow(10, logk);
        var cl = apollo(P.get('p'), P.get('q'), k);
        var desc = !cl ? '—'
          : cl.k === 'l' ? 'a line — the perpendicular bisector of pq'
            : 'a circle, radius ' + G.num(cl.r, 2) + ', centred ' + G.str(cl.c);
        var near = Math.abs(k - 1) < 0.03;
        G.say('d11-apoll-out',
          '<div class="q"><b>k</b><span>' + G.num(k, 3) + '</span></div>' +
          '<div class="q"><b>the locus |z − p| = k|z − q| is</b><span>' + desc + '</span></div>' +
          '<div class="q ' + (near ? 'miss' : 'hit') + '" style="grid-column:1/-1"><b>note</b><span>'
          + (near ? 'k = 1 is the one value that gives a line rather than a circle.'
            : (k < 1 ? 'k < 1: points closer to p, so the circle wraps p.'
              : 'k > 1: points closer to q, so the circle wraps q.'))
          + '</span></div>');
      }

      G.slider('d11-k', function (v) { logk = v; refresh(); });
      var cb = document.getElementById('d11-fam');
      if (cb) cb.addEventListener('change', function () { family = cb.checked; refresh(); });
      refresh();
    })();
  })();
</script>
