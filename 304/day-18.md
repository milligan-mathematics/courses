---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 18: When the Fixed Points Collide"
day: 18
chapter_number: 3
chapter: "Transformations"
day_title: "When the Fixed Points Collide"
blurb: "A discriminant hits zero, two fixed points become one, and the whole coordinate grid degenerates into a single family of tangent circles. The maps that live there are the parabolic ones."
reading: "Section 3.5, Lemma 3.5.7 through Example 3.5.13"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Two becoming one</h2>

  <p>On Day 6 you found that the fixed points of \(T(z)=\frac{az+b}{cz+d}\) are the roots of
    \(cz^2+(d-a)z-b=0\), and that a complex quadratic has two roots unless its discriminant vanishes. Here is
    that vanishing, watched happening.</p>

  <p>The slider moves a family of transformations through the degenerate case. Watch the two fixed points, the
    two cline families, and the orbit of a point all at once.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d18-merge-s">approach the collision</label>
      <input type="range" id="d18-merge-s" min="0" max="100" step="1" value="55">
    </div>
  </div>

  <canvas class="plot g304" id="d18-merge"></canvas>
  <div class="readout cols" id="d18-merge-out"></div>

  <p>Away from the collision, everything is Day 17: two fixed points, two families crossing at right angles,
    a point sliding along the grid. As the fixed points close in, the grid gets squeezed &mdash; the type I
    clines and type II clines are being forced through a narrower and narrower gap.</p>

  <p>At the collision they don't disappear. They <em>merge</em>. Every cline in the limiting family passes
    through the single surviving fixed point, and every pair of them is <strong>tangent</strong> there
    &mdash; they touch without crossing. There is no longer a grid with two independent directions; there is
    one family, and points slide along it.</p>

  <p>That's what your reading's Figure 3.5.12 is showing, and it's why the parabolic case gets its own normal
    form:</p>

  \[ \frac{1}{T(z)-p} = \frac{1}{z-p} + d. \]

  <p>Compare with the two-fixed-point version, \(\frac{T(z)-p}{T(z)-q} = re^{i\theta}\frac{z-p}{z-q}\). There
    the coordinate change was \(z \mapsto \frac{z-p}{z-q}\), which needs two points and sends them to \(0\)
    and \(\infty\). Here only one point is available, so the coordinate change is
    \(z\mapsto\frac{1}{z-p}\), sending \(p\) to \(\infty\) and nothing in particular to \(0\). In those
    coordinates the map becomes \(w \mapsto w + d\): a plain translation.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>A parabolic map, up close</h2>

  <p>Drag the fixed point \(p\) and turn the constant \(d\). The family of mutually tangent clines is drawn,
    and one point's orbit runs along it.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d18-dmag">\(|d|\)</label>
      <input type="range" id="d18-dmag" min="0.05" max="2.4" step="0.01" value="0.75">
    </div>
    <div class="ctl">
      <label for="d18-darg">\(\arg d\)</label>
      <input type="range" id="d18-darg" min="-180" max="180" step="1" value="0">
    </div>
  </div>

  <canvas class="plot g304" id="d18-par"></canvas>
  <div class="drag-hint">Drag \(p\) or the starting point.</div>
  <div class="readout cols" id="d18-par-out"></div>

  <p>Several things are worth noticing, and they're all slightly counterintuitive.</p>

  <p><strong>Points move away from \(p\) and toward \(p\) at once.</strong> Follow the orbit forward far
    enough and it comes back around toward \(p\); follow it backward and it does the same. Your reading puts
    it exactly: "a parabolic map sends points both toward and away from \(p\) along these clines, just as any
    translation pushes points along a line toward \(\infty\) and also away from \(\infty\)." One fixed point
    has to serve as both source and sink.</p>

  <p><strong>There is exactly one line in the family.</strong> Every other member is a circle tangent to it at
    \(p\). Turn \(\arg d\) and watch which one straightens out. (Working out precisely which line it is, in
    terms of \(d\), is on your problem set &mdash; so this page will not tell you.)</p>

  <p><strong>Nothing rotates.</strong> There is no swirling component the way there is in the elliptic and
    loxodromic cases, because there is no second family to swirl around. Changing \(\arg d\) doesn't add a
    rotation &mdash; it turns the entire family of clines, which is a different thing.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>Why the grid degenerates rather than vanishing</h2>

  <p>The picture in the first activity is suggestive, but "the two families merge" deserves an argument. The
    cleanest one runs through the coordinate change, and it explains all three normal forms at once.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Recall the two-fixed-point case. The map \(S(z) = \frac{z-p}{z-q}\) sends
          \(p \mapsto 0\), \(q \mapsto \infty\). What does it do to the two families?</div>
        <div class="sstep-body">
          <p>It carries the type I clines of \(p, q\) to the lines through the origin, and the type II clines
            to the circles centred at the origin &mdash; that was Day 16's scaffold. Polar coordinate paper.
          </p>
          <p>The two families are independent there because \(0\) and \(\infty\) are two different points:
            one family passes through both, the other separates them.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now suppose \(T\) has only the fixed point \(p\). We can't build \(S\)
          &mdash; there's no \(q\). What's the natural substitute, and where does it send \(p\)?</div>
        <div class="sstep-body">
          <p>Use \(S(z) = \frac{1}{z-p}\), which sends \(p \mapsto \infty\). Your reading picks exactly
            this.</p>
          <p>The difference from the two-point case is the whole story: \(S\) has only one job to do, so it
            sends \(p\) to \(\infty\) and everything else falls where it may. Where \(0\) ends up is not
            controlled.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">In the new coordinate, \(U = S\circ T\circ S^{-1}\) fixes \(\infty\) and
          nothing else. What are the U-pictures of the two families &mdash; and why do they coincide?</div>
        <div class="sstep-body">
          <p>\(U\) fixes only \(\infty\), so by the structure of linear maps it must be a translation
            \(U(w) = w+d\). A translation slides points along a family of parallel lines.</p>
          <p>Now: parallel lines in \(\mathbb{C}^+\) all pass through \(\infty\), and by Day 12's scaffold
            they are all <em>tangent</em> to one another there &mdash; parallel means "meeting at angle
            \(0\)". So in the \(U\) picture there is a single family of clines through the fixed point,
            mutually tangent.</p>
          <p>The two-point picture had lines through the origin (type I) and circles around it (type II),
            distinguishable because \(0\) and \(\infty\) were distinct. Here both roles fall to \(\infty\),
            and the families collapse together.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Push back through \(S^{-1}\) and say what you get, and why the tangency
          survives.</div>
        <div class="sstep-body">
          <p>\(S^{-1}\) is a M&ouml;bius transformation, so it carries clines to clines and preserves angles.
            The parallel lines become clines through \(p\), and the angle between any two of them &mdash;
            zero &mdash; is preserved. Zero angle at a shared point is exactly tangency.</p>
          <p>So the family in the plane is a set of clines mutually tangent at \(p\), and \(T\) slides points
            along them. Figure 3.5.12 in a sentence.</p>
          <p><strong>The general lesson is about the method, not the result.</strong> All three normal forms
            come from the same move: change coordinates so the fixed points sit at \(0\) and \(\infty\) (or
            just \(\infty\)), where the map becomes something trivial &mdash; a multiplication or a
            translation &mdash; then change back. The classification into elliptic, hyperbolic, loxodromic and
            parabolic is nothing more than the list of trivial maps available at the far end: rotate, scale,
            do both, or slide.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>"Parabolic maps are just translations"</h2>

  <p>An argument from the coordinate change.</p>

  <p><strong>Click the step that isn't right.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Let \(T\) be parabolic with fixed point \(p \neq \infty\), and let
        \(S(z) = \frac{1}{z-p}\).</button>
      <button class="fline" type="button">Then \(U = S\circ T\circ S^{-1}\) fixes \(\infty\) and nothing else,
        so \(U(w) = w+d\) is a translation.</button>
      <button class="fline" type="button">So \(T = S^{-1}\circ U\circ S\): every parabolic transformation is
        a translation, conjugated by a M&ouml;bius transformation.</button>
      <button class="fline" type="button">Conjugation doesn't change what a map essentially does. So a
        parabolic transformation is a translation, and in particular it moves every point the same distance
        along parallel straight lines.</button>
      <button class="fline" type="button">Since a translation has no fixed point in \(\mathbb{C}\), a
        parabolic map has no fixed point in \(\mathbb{C}\) either.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Fine.</strong> \(S\) is a M&ouml;bius transformation sending \(p\) to \(\infty\), which is
        the construction the reading uses.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct.</strong> \(U\) fixes \(\infty\) because \(T\) fixes \(p\); it fixes nothing else
        because \(T\) fixes nothing else and conjugation matches fixed points up one-for-one. A M&ouml;bius
        transformation fixing only \(\infty\) is a translation &mdash; which is on your problem set to
        prove.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Correct, and it's the useful summary.</strong> "Conjugate to a translation" is a perfectly
        good characterisation of the parabolic maps, just as "conjugate to a rotation" characterises the
        elliptic ones.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Here's the error, and it's in the phrase "doesn't change what a map essentially does."</strong>
      </p>
      <p>Conjugation preserves a great deal &mdash; the number of fixed points, the cycle structure, whether
        orbits are bounded &mdash; and it is exactly the right notion of "the same map in different
        coordinates." What it does <em>not</em> preserve is anything that isn't M&ouml;bius-invariant. And
        "moves every point the same distance along parallel straight lines" is loaded with such things:
        distance, parallelism, straightness. All three are destroyed by \(S^{-1}\).</p>
      <p>Concretely: \(S^{-1}\) turns those parallel lines into circles tangent at \(p\), and turns the
        constant translation distance into something that varies wildly from point to point &mdash; enormous
        near \(p\)'s antipode in the family, vanishing as you approach \(p\).</p>
      <p>The general discipline: <strong>when you carry a statement through a conjugation, only the
          conjugation-invariant part comes with it.</strong> "Fixes exactly one point" survives. "Moves points
        along parallel lines" does not. Day 11's flaw activity made the same mistake in a different costume
        &mdash; applying a transformation to some ingredients of a statement and not all.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>False, and it contradicts the definition.</strong> A parabolic map fixes exactly one point of
        \(\mathbb{C}^+\), namely \(p\), which is a perfectly ordinary finite point.</p>
      <p>The slip is treating \(\infty\)'s special role in the \(U\) picture as if it transferred. \(U\) fixes
        \(\infty\); \(T\) fixes \(S^{-1}(\infty) = p\). Fixed points are conjugation-invariant as a
        <em>count</em>, but the points themselves move with the conjugating map. Translations are the
        parabolic maps that happen to have their fixed point at \(\infty\), which is one case among
        many.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>The whole classification, in one place</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">You are told a M&ouml;bius transformation \(T\) satisfies \(T\circ T = \) the identity,
      and \(T\) is not the identity. How many fixed points does it have?</p>
    <button class="mc-opt" data-key="a">One.</button>
    <button class="mc-opt" data-key="b">Two.</button>
    <button class="mc-opt" data-key="c">None.</button>
    <button class="mc-opt" data-key="d">Could be any of the above.</button>

    <div class="mc-fb" data-key="a">
      <p>One fixed point means parabolic, and it's worth seeing why that's incompatible. Conjugate so the
        fixed point is at \(\infty\); then \(T\) becomes \(w \mapsto w+d\) with \(d\neq 0\), and applying it
        twice gives \(w+2d \neq w\). So \(T\circ T\) isn't the identity. Parabolic maps never have finite
        order.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Right. Theorem 3.4.6 allows one, two, or all; "all" is excluded since \(T\) isn't the identity, and
        the parabolic case is excluded by the argument above. So two.</p>
      <p>Your problem set goes further and asks you to pin down <em>which</em> of the two-fixed-point types it
        must be, so this is a partial answer by design &mdash; but the reasoning above is the part worth
        having: <strong>conjugate to the standard form and ask the question there.</strong> In the standard
        coordinate a map with two fixed points is \(w\mapsto mw\), and the condition \(T\circ T = \mathrm{id}\)
        becomes a condition on \(m\) that you can read off immediately.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>No M&ouml;bius transformation has zero fixed points in \(\mathbb{C}^+\) &mdash; that's the content of
        Theorem 3.4.6, and it comes from every complex quadratic having a root. This is a real difference from
        maps of the real line, where a translation genuinely fixes nothing.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Theorem 3.4.6 already cuts it down to one, two, or all, and two of those three can be eliminated
        here. Try the parabolic case explicitly &mdash; conjugate the fixed point to \(\infty\) and see what
        \(T \circ T\) does.</p>
    </div>
  </div>

  <div class="mc" data-answer="d">
    <p class="mc-q">Which of these does <em>not</em> vary between the four types (elliptic, hyperbolic,
      loxodromic, parabolic)?</p>
    <button class="mc-opt" data-key="a">The number of fixed points.</button>
    <button class="mc-opt" data-key="b">Whether orbits approach a fixed point.</button>
    <button class="mc-opt" data-key="c">Whether the map preserves each cline of some family.</button>
    <button class="mc-opt" data-key="d">Whether the map preserves angles.</button>

    <div class="mc-fb" data-key="a">
      <p>This does vary: parabolic maps fix one point, the other three fix two. It's the primary split in the
        classification.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Varies. Hyperbolic and loxodromic orbits converge to a fixed point; elliptic orbits circulate
        forever without approaching either; parabolic orbits approach the single fixed point in both time
        directions.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Varies, and it's a good way to tell the types apart. A hyperbolic map preserves each type I cline
        individually and permutes the type II clines; an elliptic map does the reverse; a loxodromic map
        preserves neither individually. A parabolic map preserves each cline of its single tangent
        family.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Right &mdash; every M&ouml;bius transformation preserves angles, with sign, always. Theorem 3.4.5,
        no exceptions, no cases.</p>
      <p>This is the one to remember, because it's what makes the classification a classification of
        <em>motions within one geometry</em> rather than a list of unrelated maps. All four types belong to
        the same group and share its invariants: clines go to clines, angles are preserved, the cross ratio is
        preserved. What differs is only how each one pushes points around inside that fixed structure &mdash;
        and Chapter 4 will make exactly this distinction official.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Four types, two normal forms. Say which types share a normal form and what single quantity separates
      them within it.</li>
    <li>Every normal form came from conjugating to a standard position. List the standard positions used, and
      what the map becomes at each.</li>
    <li>A parabolic map's orbit leaves \(p\) and eventually returns to it. Sketch, in words, what that looks
      like on the sphere &mdash; where \(p\) is an ordinary point and the tangent clines are circles through
      it.</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    function fromNormal(p0, q0, m) {
      return function (z) {
        if (!z) return G.div(G.sub(p0, G.mul(m, q0)), G.sub(c(1, 0), m));
        var u = G.mul(m, G.div(G.sub(z, p0), G.sub(z, q0)));
        if (!u) return q0;
        var den = G.sub(c(1, 0), u);
        if (G.abs2(den) < 1e-14) return null;
        return G.div(G.sub(p0, G.mul(u, q0)), den);
      };
    }

    // Parabolic from its normal form: 1/(T(z)-p) = 1/(z-p) + d.
    function parabolic(p0, d) {
      return function (z) {
        if (!z) return p0;
        var w = G.sub(z, p0);
        if (G.abs2(w) < 1e-14) return p0;
        var u = G.add(G.inv(w), d);
        if (!u) return null;
        return G.add(G.inv(u), p0);
      };
    }

    // The tangent family for a parabolic map: images of the lines Im(w) = const
    // under w -> 1/w + p, rotated so the family lines up with d.
    function tangentFamily(pl, p0, d, style) {
      var rot = G.abs(d) > 1e-9 ? G.scale(d, 1 / G.abs(d)) : c(1, 0);
      for (var k = -8; k <= 8; k++) {
        if (k === 0) continue;
        var h = k * 0.30;
        (function (hh) {
          pl.curve(function (t) {
            var w = G.inv(G.mul(rot, c(t, hh)));
            return w ? G.add(w, p0) : null;
          }, -90, 90, 460, style);
        })(h);
      }
      // The single straight member.
      pl.line(G.lineDir(p0, G.arg(rot)), style);
    }

    /* ---- two fixed points becoming one ---- */
    (function () {
      var s = 55;

      var P = G.plane('d18-merge', {
        span: 11, height: 400,
        draw: function (pl) {
          pl.grid(); pl.axes({ ticks: false });
          var gap = 2.4 * Math.pow(s / 100, 1.4);
          var p0 = c(-gap, 0), q0 = c(gap, 0);
          var start = c(0.4, 2.0);

          if (gap > 0.05) {
            var fam = G.typeClines(p0, q0, { typeI: 9, typeII: 7 });
            fam.typeII.forEach(function (cl) {
              if (cl) pl.cline(cl, { color: '#ccd3d9', width: 1.3, dash: [6, 4] });
            });
            fam.typeI.forEach(function (cl) {
              if (cl) pl.cline(cl, { color: '#dbe1e6', width: 1.3 });
            });
            var T = fromNormal(p0, q0, c(1.4, 0));
            var w = start, prev = start, k;
            pl.dot(start, { color: G.colors.blue, r: 5 });
            for (k = 1; k <= 7; k++) {
              w = T(w);
              if (!w || G.abs(w) > 200) break;
              pl.seg(prev, w, { color: '#f7c7a6', width: 1.4 });
              pl.dot(w, { color: G.colors.orange, r: Math.max(2.5, 6 - k * 0.5) });
              prev = w;
            }
            pl.dot(p0, { color: G.colors.green, r: 6, label: 'p' });
            pl.dot(q0, { color: G.colors.green, r: 6, label: 'q' });
          } else {
            tangentFamily(pl, c(0, 0), c(1, 0), { color: G.colors.violet, width: 1.5 });
            var Tp = parabolic(c(0, 0), c(0.9, 0));
            var v = start, pv = start, j;
            pl.dot(start, { color: G.colors.blue, r: 5 });
            for (j = 1; j <= 9; j++) {
              v = Tp(v);
              if (!v || G.abs(v) > 200) break;
              pl.seg(pv, v, { color: '#f7c7a6', width: 1.4 });
              pl.dot(v, { color: G.colors.orange, r: Math.max(2.5, 6 - j * 0.4) });
              pv = v;
            }
            pl.dot(c(0, 0), { color: G.colors.green, r: 7, label: 'p = q' });
          }
        }
      });

      function refresh() {
        P.redraw();
        var gap = 2.4 * Math.pow(s / 100, 1.4);
        var merged = gap <= 0.05;
        G.say('d18-merge-out',
          '<div class="q"><b>separation of the fixed points</b><span>'
          + (merged ? '0 — they have collided' : G.num(2 * gap, 3)) + '</span></div>' +
          '<div class="q"><b>discriminant of the fixed-point quadratic</b><span>'
          + (merged ? 'zero' : 'non-zero') + '</span></div>' +
          '<div class="q hit"><b>the cline families</b><span>'
          + (merged ? 'one family, mutually tangent at p' : 'two families, meeting at right angles')
          + '</span></div>' +
          '<div class="q hit"><b>the map is</b><span>'
          + (merged ? 'parabolic' : 'hyperbolic (θ = 0 here)') + '</span></div>');
      }

      G.slider('d18-merge-s', function (v) { s = v; refresh(); });
      refresh();
    })();

    /* ---- a parabolic map up close ---- */
    (function () {
      var dm = 0.75, da = 0;

      var P = G.plane('d18-par', {
        span: 12, height: 420,
        handles: [
          { name: 'p', z: c(-0.6, 0.2), color: G.colors.green, label: 'p' },
          { name: 'z', z: c(2.3, 1.6), color: G.colors.blue, label: 'z' }
        ],
        draw: function (pl) {
          var p0 = pl.get('p'), z0 = pl.get('z');
          pl.grid(); pl.axes({ ticks: false });
          var d = G.fromPolar(dm, da * Math.PI / 180);

          tangentFamily(pl, p0, d, { color: '#ccd3d9', width: 1.4 });

          var T = parabolic(p0, d);
          var w = z0, prev = z0, k;
          for (k = 1; k <= 14; k++) {
            w = T(w);
            if (!w || G.abs(w) > 300) break;
            pl.seg(prev, w, { color: '#f7c7a6', width: 1.4 });
            pl.dot(w, { color: G.colors.orange, r: Math.max(2.2, 6 - k * 0.3) });
            prev = w;
          }
          var Ti = parabolic(p0, G.neg(d));
          w = z0; prev = z0;
          for (k = 1; k <= 8; k++) {
            w = Ti(w);
            if (!w || G.abs(w) > 300) break;
            pl.seg(prev, w, { color: '#dfe3e7', width: 1.2, dash: [3, 3] });
            pl.dot(w, { color: '#c9ced4', r: 3 });
            prev = w;
          }
        },
        onDrag: function () { refresh(); }
      });

      function refresh() {
        P.redraw();
        var p0 = P.get('p'), z0 = P.get('z');
        var d = G.fromPolar(dm, da * Math.PI / 180);
        var T = parabolic(p0, d);
        var img = T(z0);
        G.say('d18-par-out',
          '<div class="q"><b>d</b><span>' + G.str(d) + '</span></div>' +
          '<div class="q"><b>fixed points</b><span>just p = ' + G.str(p0) + '</span></div>' +
          '<div class="q"><b>z</b><span>' + G.str(z0) + '</span></div>' +
          '<div class="q hit"><b>T(z)</b><span>' + G.str(img) + '</span></div>');
      }

      G.slider('d18-dmag', function (v) { dm = v; refresh(); });
      G.slider('d18-darg', function (v) { da = v; refresh(); });
      refresh();
    })();
  })();
</script>
