---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 17: Elliptic, Hyperbolic, Loxodromic"
day: 17
chapter_number: 3
chapter: "Transformations"
day_title: "Elliptic, Hyperbolic, Loxodromic"
blurb: "Two fixed points and one complex number. That's the entire content of a Möbius transformation with two fixed points — and the modulus and argument of that one number split them into three kinds."
reading: "Section 3.5, the normal form with two fixed points through Example 3.5.11"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The normal form, driven</h2>

  <p>Here is the equation your reading builds. If \(T\) fixes distinct finite points \(p\) and \(q\), then</p>

  \[ \frac{T(z) - p}{T(z) - q} = re^{i\theta}\cdot\frac{z-p}{z-q}. \]

  <p>The claim is that four numbers &mdash; \(p\), \(q\), \(r\), \(\theta\) &mdash; determine the map, and
    each one means something. Below, \(p\) and \(q\) are draggable and \(r, \theta\) are on sliders. The
    coloured dots are one point and its images under repeated application of \(T\).</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d17-r">\(r\) &mdash; stretch along type I clines</label>
      <input type="range" id="d17-r" min="-0.7" max="0.7" step="0.01" value="0.18">
    </div>
    <div class="ctl">
      <label for="d17-th">\(\theta\) &mdash; swirl around type II clines</label>
      <input type="range" id="d17-th" min="-180" max="180" step="1" value="0">
    </div>
  </div>

  <canvas class="plot g304" id="d17-normal"></canvas>
  <div class="drag-hint">Drag \(p\) or \(q\); then move the sliders.</div>
  <div class="readout cols" id="d17-normal-out"></div>

  <p>Work through the three cases deliberately, because the names are going to keep coming back.</p>

  <p><strong>Set \(\theta = 0\), leave \(r \neq 1\).</strong> The orbit marches along a single type I cline
    &mdash; a cline through \(p\) and \(q\) &mdash; away from one fixed point and toward the other. Nothing
    swirls. This is a <strong>hyperbolic</strong> transformation.</p>

  <p><strong>Set \(r = 1\), leave \(\theta \neq 0\).</strong> Now the orbit stays on a single type II cline
    and circulates around it. It never gets any closer to either fixed point. This is an
    <strong>elliptic</strong> transformation.</p>

  <p><strong>Set both.</strong> The orbit spirals: drifting toward one fixed point while circling. This is
    <strong>loxodromic</strong>, from the nautical term for a course of constant bearing &mdash; a rhumb line,
    which spirals into the pole for exactly this reason.</p>

  <p>Notice what \(p\) and \(q\) are doing while all this happens. They never move. Everything else does. A
    M&ouml;bius transformation with two fixed points is completely described by "how hard it pushes along the
    grid" in two independent directions &mdash; which is what \(r\) and \(\theta\) are &mdash; and there is
    nothing else it can do.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Watch a whole figure get carried</h2>

  <p>One orbit shows you where a point goes. Carrying a shape shows you what the map does to the plane.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d17-kind">the kind of map</label>
      <select id="d17-kind">
        <option value="hyp">hyperbolic (θ = 0)</option>
        <option value="ell">elliptic (r = 1)</option>
        <option value="lox">loxodromic (both)</option>
      </select>
    </div>
    <div class="ctl">
      <label for="d17-steps">applied this many times</label>
      <input type="range" id="d17-steps" min="0" max="8" step="1" value="3">
    </div>
  </div>

  <canvas class="plot g304" id="d17-carry"></canvas>
  <div class="readout" id="d17-carry-out"></div>

  <p>The circle gets carried to a circle every time &mdash; M&ouml;bius transformations preserve clines
    &mdash; but its size and position change wildly, and under the elliptic map it swings around the pair of
    fixed points without ever settling. Nothing here preserves distance, or area, or "being near the
    middle."</p>

  <p>One thing does survive, and it's worth naming again: the picture never develops a corner or a crossing.
    Angles are preserved, so a smooth closed curve stays a smooth closed curve. That is essentially all the
    regularity a M&ouml;bius transformation gives you, and it turns out to be enough to build two geometries
    on.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>Lemma 3.5.7: \(p + q = z_\infty + w_\infty\)</h2>

  <p>Your reading defines the <strong>pole</strong> \(z_\infty\) (the point sent to \(\infty\)) and the
    <strong>inverse pole</strong> \(w_\infty\) (the image of \(\infty\)), and then states a relationship
    between them and the fixed points that looks like it came from nowhere. The proof is collapsed. It's
    three lines.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Write \(T(z) = \frac{az+b}{cz+d}\) with \(c\neq 0\). Express \(z_\infty\)
          and \(w_\infty\) in terms of the coefficients.</div>
        <div class="sstep-body">
          <p>\(T\) sends to \(\infty\) whatever kills the denominator, so \(z_\infty = -d/c\). And
            \(T(\infty)\) is the ratio of the leading coefficients, \(w_\infty = a/c\).</p>
          <p>So \(z_\infty + w_\infty = \dfrac{a-d}{c}\).</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now the fixed points. You set up their equation on Day 6. What is the sum
          of its two roots?</div>
        <div class="sstep-body">
          <p>The fixed points satisfy \(cz^2 + (d-a)z - b = 0\). For a quadratic \(\alpha z^2 + \beta z +
            \gamma = 0\), the sum of the roots is \(-\beta/\alpha\). Here that is</p>
          \[ p + q = -\frac{d-a}{c} = \frac{a-d}{c}. \]
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Compare the two expressions.</div>
        <div class="sstep-body">
          <p>They're identical. So \(p + q = z_\infty + w_\infty\), which is Lemma 3.5.7.</p>
          <p>The whole content is Vieta's formula for the sum of the roots, applied to the fixed-point
            quadratic. No geometry was used at all &mdash; which is a little unsatisfying, and worth
            correcting in the next step.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">What does the lemma <em>say</em>, geometrically? Rewrite it as a statement
          about midpoints.</div>
        <div class="sstep-body">
          <p>Divide by two:</p>
          \[ \frac{p+q}{2} = \frac{z_\infty + w_\infty}{2}. \]
          <p><strong>The midpoint of the two fixed points is the midpoint of the pole and the inverse
              pole.</strong> Four points, arranged so that two of them straddle the other two symmetrically
            about a common centre.</p>
          <p>That's a genuine constraint on the configuration, and it's what makes the shapes in your problem
            set's questions about these four points possible to determine at all. Whatever else those four
            points do, they always share a centre.</p>
          <p>It also explains Theorem 3.5.8's formula \(T(z) = \frac{w_\infty z - pq}{z - z_\infty}\): once
            you know the fixed points and the pole, the lemma hands you \(w_\infty\) for free, and the map is
            determined. Three numbers instead of four, because the lemma removed one degree of freedom.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Which way do the points move?</h2>

  <p>An argument about hyperbolic transformations.</p>

  <p><strong>Click the step that isn't right.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Let \(T\) be hyperbolic, fixing \(p\) and \(q\), with normal form
        \(\frac{T(z)-p}{T(z)-q} = r\,\frac{z-p}{z-q}\) and \(r\) a positive real, \(r \neq 1\).</button>
      <button class="fline" type="button">Write \(u(z) = \frac{z-p}{z-q}\). Then \(u(T(z)) = r\,u(z)\), so
        applying \(T\) repeatedly multiplies \(u\) by \(r\) each time.</button>
      <button class="fline" type="button">\(u(z) = 0\) exactly at \(z = p\), and \(|u(z)|\) is large exactly
        when \(z\) is near \(q\).</button>
      <button class="fline" type="button">So if \(r \gt 1\), then \(|u|\) grows under iteration, so points
        move toward \(q\). Since \(r \gt 1\) is what "\(r\) is a stretch factor" means, hyperbolic maps always
        push points toward \(q\) and away from \(p\).</button>
      <button class="fline" type="button">In particular, every hyperbolic transformation has an
        <em>attracting</em> fixed point and a <em>repelling</em> one.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct &mdash; that's the definition.</strong> Hyperbolic means the multiplier
        \(re^{i\theta}\) has \(\theta = 0\), so it's a positive real, and \(r\neq 1\) rules out the
        identity.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct, and it's the right way to think about the normal form.</strong> The substitution
        \(u = \frac{z-p}{z-q}\) is the M&ouml;bius transformation sending \(p\mapsto 0\) and
        \(q\mapsto\infty\); in the \(u\) coordinate, \(T\) is just multiplication by \(r\). The normal form
        says: change coordinates and the map becomes trivial.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Correct.</strong> \(u\) vanishes at \(p\) and blows up at \(q\), by construction. So
        \(|u|\) small means near \(p\), and \(|u|\) large means near \(q\).</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Here it is, and the mistake is in the last sentence: \(r\) is not required to exceed
          \(1\).</strong></p>
      <p>"\(r\) is a stretch factor" doesn't mean \(r \gt 1\); it means \(r \gt 0\). Values below \(1\) are
        perfectly legal and describe a map pushing points the other way &mdash; toward \(p\) and away from
        \(q\).</p>
      <p>Worse, the labelling is arbitrary. Nothing distinguishes \(p\) from \(q\); they're just the two roots
        of a quadratic and you chose which to call which. Swap the names and \(u\) becomes \(1/u\), so the
        multiplier becomes \(1/r\). <strong>A map with multiplier \(3\) and a map with multiplier
          \(\tfrac13\) can be the same map, described with the fixed points listed in the other order.</strong>
      </p>
      <p>So "\(r \gt 1\)" is not a fact about the transformation at all &mdash; it's a fact about your
        notation. Any statement of the form "hyperbolic maps push points toward \(q\)" has to name which fixed
        point is which first, and there is no canonical way to do that.</p>
      <p>Watch for this whenever you compute a multiplier. Getting \(2\) where the book gets \(\tfrac12\)
        usually means you labelled the fixed points the other way round, and you are not wrong.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>True, and it survives the correction &mdash; which is what makes it the useful
          statement.</strong></p>
      <p>Whichever way you label them, one fixed point attracts and the other repels, because \(r\) and
        \(1/r\) are on opposite sides of \(1\) and neither equals it. "Attracting" and "repelling" are
        properties of the points themselves, independent of naming, which is exactly what a good description
        should be.</p>
      <p>Contrast the elliptic case, where \(|re^{i\theta}| = 1\) and neither fixed point attracts or repels
        &mdash; orbits circulate forever. And the loxodromic case, where one attracts and one repels, but the
        approach spirals.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Reading the multiplier</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">A M&ouml;bius transformation fixes \(0\) and \(\infty\). Your reading shows it must have
      the form \(T(z) = re^{i\theta}z\). Which multiplier makes \(T\) elliptic?</p>
    <button class="mc-opt" data-key="a">Any \(r \gt 1\), with \(\theta = 0\).</button>
    <button class="mc-opt" data-key="b">\(r = 1\) and \(\theta = 0\).</button>
    <button class="mc-opt" data-key="c">\(r = 1\) and \(\theta \neq 0\).</button>
    <button class="mc-opt" data-key="d">\(r \neq 1\) and \(\theta \neq 0\).</button>

    <div class="mc-fb" data-key="a">
      <p>\(\theta = 0\) with \(r\neq 1\) is a pure dilation: points slide along rays from the origin, out to
        infinity or in to zero. Those rays are the type I clines of \(0\) and \(\infty\), so this is the
        <em>hyperbolic</em> case.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>That's multiplication by \(1\) &mdash; the identity, which fixes everything and belongs to no class.
        Theorem 3.4.6's "or all points" case.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Right. \(r = 1\) means no dilation, and \(\theta \neq 0\) is a genuine rotation about the origin.
        Points circulate on circles centred at the origin &mdash; the type II clines of \(0\) and \(\infty\)
        &mdash; and never approach either fixed point.</p>
      <p>Worth carrying: <strong>elliptic maps are the rotations</strong>, seen through a change of
        coordinates. Every elliptic transformation is conjugate to an honest rotation about the origin, which
        is why they turn out to be the "rotations" of hyperbolic and elliptic geometry in Chapters 5 and 6.
        The word "elliptic" here has nothing to do with ellipses, and everything to do with that eventual
        role.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>That's loxodromic: dilation and rotation at once, so orbits spiral. It's the generic case &mdash; a
        randomly chosen M&ouml;bius transformation is loxodromic &mdash; and the three named types are the
        degenerate ones where either the stretching or the turning switches off.</p>
    </div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Why does the normal form describe the map better than the coefficients \(a,b,c,d\)?</p>
    <button class="mc-opt" data-key="a">Because each of \(p, q, r, \theta\) has a direct geometric meaning,
      while \(a,b,c,d\) do not.</button>
    <button class="mc-opt" data-key="b">Because the normal form uses fewer numbers.</button>
    <button class="mc-opt" data-key="c">Because the normal form is easier to compute with.</button>
    <button class="mc-opt" data-key="d">Because \(a,b,c,d\) aren't uniquely determined and \(p,q,r,\theta\)
      are.</button>

    <div class="mc-fb" data-key="a">
      <p>Right, and it's the reason your reading calls the normal form "much more illuminating." \(p\) and
        \(q\) are the fixed points &mdash; visible in the picture. \(r\) is how far points slide along type I
        clines; \(\theta\) is how far they swirl around type II clines. Every symbol is something you can
        point at.</p>
      <p>Whereas \(a,b,c,d\) are four numbers you can't see anywhere in the picture. You can compute with them
        and you can't reason about them. That trade &mdash; a formula you can evaluate versus a description
        you can understand &mdash; recurs constantly, and this course generally takes the second.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>It doesn't &mdash; both use four numbers. (Though \(a,b,c,d\) are four complex numbers with one
        redundant scaling, while \(p,q\) are complex and \(r,\theta\) real, so the counts do work out
        the same. That's a consistency check, not an advantage.)</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Usually the reverse. If you want \(T(5)\), the coefficient form is a single substitution, while the
        normal form needs you to solve for \(T(z)\). Normal form is for understanding, not for
        arithmetic.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>There's a real point nearby &mdash; \(a,b,c,d\) are only determined up to a common scale factor
        &mdash; but the normal form isn't unique either, as the flaw activity showed: swapping the labels on
        \(p\) and \(q\) replaces the multiplier by its reciprocal. Neither description is canonical. The
        normal form's advantage is meaning, not uniqueness.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Elliptic, hyperbolic, loxodromic &mdash; give a one-phrase physical description of each, in terms of
      what an orbit looks like.</li>
    <li>Swapping the names of the two fixed points replaces the multiplier \(m\) by \(1/m\). Check that this
      leaves the <em>classification</em> alone: elliptic stays elliptic, hyperbolic stays hyperbolic.</li>
    <li>An elliptic map's orbits stay on a single type II cline. What does that say about the long-run
      behaviour of a point under repeated application &mdash; and how is it different from the hyperbolic
      case?</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    // T from its normal form: (T-p)/(T-q) = m (z-p)/(z-q).
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

    function classify(m) {
      var r = G.abs(m), th = G.arg(m);
      if (Math.abs(r - 1) < 5e-3 && Math.abs(th) < 5e-3) return 'the identity';
      if (Math.abs(th) < 5e-3 || Math.abs(Math.abs(th) - Math.PI) < 5e-3) return 'hyperbolic';
      if (Math.abs(r - 1) < 5e-3) return 'elliptic';
      return 'loxodromic';
    }

    /* ---- the normal form, driven ---- */
    (function () {
      var logr = 0.18, th = 0;

      var P = G.plane('d17-normal', {
        span: 13, height: 430,
        handles: [
          { name: 'p', z: c(-1.8, -0.5), color: G.colors.green, label: 'p' },
          { name: 'q', z: c(2.1, 0.9), color: G.colors.green, label: 'q' },
          { name: 'z', z: c(-0.3, 2.3), color: G.colors.blue, label: 'z' }
        ],
        draw: function (pl) {
          var p0 = pl.get('p'), q0 = pl.get('q'), z0 = pl.get('z');
          pl.grid(); pl.axes({ ticks: false });
          if (G.dist(p0, q0) < 0.3) return;

          var fam = G.typeClines(p0, q0, { typeI: 9, typeII: 7 });
          fam.typeII.forEach(function (cl) {
            if (cl) pl.cline(cl, { color: '#ccd3d9', width: 1.3, dash: [6, 4] });
          });
          fam.typeI.forEach(function (cl) {
            if (cl) pl.cline(cl, { color: '#dbe1e6', width: 1.3 });
          });

          var m = G.fromPolar(Math.pow(10, logr), th * Math.PI / 180);
          var T = fromNormal(p0, q0, m);

          // The forward orbit of z, and a few steps backward too.
          var w = z0, k;
          var prev = z0;
          for (k = 1; k <= 9; k++) {
            w = T(w);
            if (!w || G.abs(w) > 200) break;
            pl.seg(prev, w, { color: '#f7c7a6', width: 1.4 });
            pl.dot(w, { color: G.colors.orange, r: Math.max(2.5, 6 - k * 0.4) });
            prev = w;
          }
          var Ti = fromNormal(p0, q0, G.inv(m));
          w = z0; prev = z0;
          for (k = 1; k <= 5; k++) {
            w = Ti(w);
            if (!w || G.abs(w) > 200) break;
            pl.seg(prev, w, { color: '#dfe3e7', width: 1.2, dash: [3, 3] });
            pl.dot(w, { color: '#c9ced4', r: 3 });
            prev = w;
          }
        },
        onDrag: function () { refresh(); }
      });

      function refresh() {
        P.redraw();
        var r = Math.pow(10, logr);
        var m = G.fromPolar(r, th * Math.PI / 180);
        var kind = classify(m);
        var moves = {
          'hyperbolic': 'along type I clines — through p and q, no swirl',
          'elliptic': 'around type II clines — circulating, never approaching either fixed point',
          'loxodromic': 'across both families — a spiral',
          'the identity': 'not at all'
        }[kind];
        G.say('d17-normal-out',
          '<div class="q"><b>r</b><span>' + G.num(r, 3) + '</span></div>' +
          '<div class="q"><b>θ</b><span>' + G.num(th, 0) + '°</span></div>' +
          '<div class="q hit"><b>this map is</b><span>' + kind + '</span></div>' +
          '<div class="q" style="grid-column:1/-1"><b>points move</b><span>' + moves + '</span></div>');
      }

      G.slider('d17-r', function (v) { logr = v; refresh(); });
      G.slider('d17-th', function (v) { th = v; refresh(); });
      refresh();
    })();

    /* ---- carrying a figure ---- */
    (function () {
      var kind = 'hyp', steps = 3;
      var P0 = c(-1.6, 0), Q0 = c(1.6, 0);

      function mult() {
        if (kind === 'hyp') return c(1.55, 0);
        if (kind === 'ell') return G.expi(0.62);
        return G.scale(G.expi(0.5), 1.35);
      }

      var P = G.plane('d17-carry', {
        span: 12, height: 400,
        draw: function (pl) {
          pl.grid(); pl.axes({ ticks: false });
          var T = fromNormal(P0, Q0, mult());

          var fam = G.typeClines(P0, Q0, { typeI: 8, typeII: 6 });
          fam.typeII.forEach(function (cl) {
            if (cl) pl.cline(cl, { color: '#d3dade', width: 1.2, dash: [5, 4] });
          });
          fam.typeI.forEach(function (cl) {
            if (cl) pl.cline(cl, { color: '#e0e5e9', width: 1.2 });
          });

          // A circle, carried step by step. Each image is drawn by pushing many
          // sample points through T, so a distorted image still reads correctly.
          var base = [];
          for (var j = 0; j <= 160; j++) {
            var t = 2 * Math.PI * j / 160;
            base.push(G.add(c(-0.2, 1.5), G.fromPolar(0.62, t)));
          }
          var cur = base;
          for (var k = 0; k <= steps; k++) {
            var alpha = k === 0 ? 1 : Math.max(0.25, 1 - k * 0.09);
            pl.poly(cur, {
              color: k === 0 ? G.colors.blue : G.colors.orange,
              width: k === 0 ? 2.6 : 2.1, alpha: alpha
            });
            cur = cur.map(T).map(function (z) { return (z && G.abs(z) < 400) ? z : null; });
          }

          pl.dot(P0, { color: G.colors.green, r: 6, label: 'p' });
          pl.dot(Q0, { color: G.colors.green, r: 6, label: 'q' });
        }
      });

      function refresh() {
        P.redraw();
        var names = {
          hyp: 'Hyperbolic. The circle slides along the clines through p and q, shrinking toward q.',
          ell: 'Elliptic. The circle swings around the pair of fixed points and comes back — it never '
            + 'settles on either.',
          lox: 'Loxodromic. The circle spirals: it circulates and drifts toward a fixed point at once.'
        };
        G.say('d17-carry-out', '<b>' + names[kind] + '</b> Each faded copy is one more application of T.');
      }

      var sel = document.getElementById('d17-kind');
      if (sel) sel.addEventListener('change', function () { kind = sel.value; refresh(); });
      G.slider('d17-steps', function (v) { steps = v; refresh(); });
      refresh();
    })();
  })();
</script>
