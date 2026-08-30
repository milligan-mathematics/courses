---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 15: The Cross Ratio"
day: 15
chapter_number: 3
chapter: "Transformations"
day_title: "The Cross Ratio"
blurb: "Three points can be sent anywhere, so nothing about three points survives. Four points is where the invariants start — and there is essentially only one."
reading: "Section 3.4, the cross ratio through Theorem 3.4.15"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The standard triple</h2>

  <p>Yesterday's Fundamental Theorem lets you send any three points anywhere. Section 3.4 immediately puts
    that to work by sending everything to one standard destination:</p>

  \[ T(z) = (z,z_1;z_2,z_3) = \frac{z-z_2}{z-z_3}\cdot\frac{z_1-z_3}{z_1-z_2} \]

  <p>is the unique M&ouml;bius transformation sending \(z_1 \mapsto 1\), \(z_2 \mapsto 0\),
    \(z_3 \mapsto \infty\).</p>

  <p>Below, three fixed points \(z_1, z_2, z_3\) and the map that normalises them. Toggle between the plane
    before and after.</p>

  <div class="toggles">
    <button class="btn411 ghost on" type="button" data-cr="0">before</button>
    <button class="btn411 ghost" type="button" data-cr="1">after</button>
  </div>

  <canvas class="plot g304" id="d15-norm"></canvas>
  <div class="readout cols" id="d15-norm-out"></div>

  <p>Look at what each factor is doing, because the formula is much less mysterious once you do.</p>

  <p>The factor \(\dfrac{z-z_2}{z-z_3}\) is the real engine: it vanishes at \(z_2\), so \(z_2 \mapsto 0\), and
    it blows up at \(z_3\), so \(z_3 \mapsto \infty\). Two of the three requirements, met by inspection. The
    second factor \(\dfrac{z_1-z_3}{z_1-z_2}\) is a constant &mdash; it doesn't involve \(z\) at all &mdash;
    chosen to be exactly the reciprocal of what the first factor gives at \(z_1\), so that the product comes
    out to \(1\) there.</p>

  <p>So the construction is: <em>write down something with a zero where you want \(0\) and a pole where you
      want \(\infty\), then scale so the third point lands on \(1\).</em> No cleverness required.</p>

  <details class="hint">
    <summary>What if one of \(z_1, z_2, z_3\) is already \(\infty\)?</summary>
    <p>Then the factors containing it cancel. Your reading gives the case \(z_2 = \infty\): the map sending
      \(z_1 \mapsto 1\), \(\infty \mapsto 0\), \(z_3 \mapsto \infty\) is
      \(T(z) = \dfrac{z_1-z_3}{z-z_3}\).</p>
    <p>You can see why by treating the offending factor as a limit: as \(z_2\) runs off to infinity, the ratio
      \(\dfrac{z-z_2}{z_1-z_2}\) tends to \(1\), and dropping it is what the cancellation amounts to. Same
      answer, less hand-waving: the map above obviously vanishes at \(\infty\), blows up at \(z_3\), and
      equals \(1\) at \(z_1\), which is all three requirements.</p>
  </details>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The number that won't move</h2>

  <p>Theorem 3.4.12 says the cross ratio is unchanged by every M&ouml;bius transformation:</p>

  \[ (z_0,z_1;z_2,z_3) = (T(z_0), T(z_1); T(z_2), T(z_3)). \]

  <p>Three of the four points below are fixed; drag the fourth. Then use the slider to apply a M&ouml;bius
    transformation to the whole configuration and watch the number in the readout.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d15-t">apply a Möbius transformation</label>
      <input type="range" id="d15-t" min="0" max="100" step="1" value="0">
    </div>
  </div>

  <canvas class="plot g304" id="d15-inv"></canvas>
  <div class="drag-hint">Drag \(z_0\); then sweep the slider.</div>
  <div class="readout cols" id="d15-inv-out"></div>

  <p>The four points travel a long way. The distances between them change completely &mdash; you can watch
    pairs that started close together end up on opposite sides of the picture. The cross ratio does not
    budge.</p>

  <p>It's worth being clear about how strange this is. On Day 9 you computed what inversion does to a
    distance and found it multiplies by a factor depending on both endpoints. On Day 13's scaffold the same
    thing happened for a general M&ouml;bius transformation:</p>

  \[ T(z_1) - T(z_2) = \frac{(ad-bc)(z_1-z_2)}{(cz_1+d)(cz_2+d)}. \]

  <p>Every difference gets multiplied by \((ad-bc)\) and divided by two "distance to the pole" factors. In a
    ratio of two such differences, the \((ad-bc)\) cancels but one pole factor survives. It takes a
    <em>ratio of ratios</em>, arranged so each of the four points appears once on top and once on the bottom,
    for everything to cancel. The cross ratio is precisely the smallest such arrangement.</p>

  <p>Which is why it's four points and not three. Three points don't give you enough factors to cancel.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>Why the cross ratio is invariant</h2>

  <p>The proof of Theorem 3.4.12 is collapsed in your reading, and it is a lovely one &mdash; not a
    computation at all, but an argument from uniqueness.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Set up. Let \(T\) be any M&ouml;bius transformation and \(z_1, z_2, z_3\)
          three distinct points. Define \(S(z) = (z, z_1; z_2, z_3)\). What are \(S\) and \(S\circ T^{-1}\),
          described by what they do?</div>
        <div class="sstep-body">
          <p>\(S\) is the unique M&ouml;bius transformation sending \(z_1,z_2,z_3\) to \(1,0,\infty\).</p>
          <p>\(S\circ T^{-1}\) is a M&ouml;bius transformation (composites and inverses stay in the family),
            and it sends \(T(z_1) \mapsto z_1 \mapsto 1\), and likewise \(T(z_2)\mapsto 0\) and
            \(T(z_3)\mapsto\infty\).</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now name the other map that does the same job, and conclude they're
          equal.</div>
        <div class="sstep-body">
          <p>The map \(w \mapsto (w, T(z_1); T(z_2), T(z_3))\) also sends \(T(z_1), T(z_2), T(z_3)\) to
            \(1, 0, \infty\).</p>
          <p>Two M&ouml;bius transformations agreeing at three distinct points are equal &mdash; that's
            yesterday's uniqueness argument. So</p>
          \[ S \circ T^{-1}(w) = (w, T(z_1); T(z_2), T(z_3)) \quad\text{for every } w. \]
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Finish: substitute \(w = T(z_0)\).</div>
        <div class="sstep-body">
          <p>The left side becomes \(S(T^{-1}(T(z_0))) = S(z_0) = (z_0,z_1;z_2,z_3)\). The right side is
            \((T(z_0),T(z_1);T(z_2),T(z_3))\). Equating them is the theorem.</p>
          <p>Notice there was no algebra. Both sides were identified as "the unique map doing such-and-such,"
            and uniqueness did the rest. This is the standard way to prove things in this subject, and it's
            much more reliable than expanding \(\frac{az+b}{cz+d}\) four times.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">One more idea to extract. Section 4.2 will list the cross ratio as an
          <em>invariant</em> of M&ouml;bius geometry. Why is having one invariant so valuable?</div>
        <div class="sstep-body">
          <p>Because invariants are how you prove things are <em>impossible</em>.</p>
          <p>Congruence is easy to demonstrate and hard to refute: to show two figures are congruent you
            exhibit a transformation, but to show they aren't you'd have to rule out every transformation
            there is. An invariant collapses that: compute it on both figures, and if the answers differ, no
            transformation can exist. One computation replaces an infinite search.</p>
          <p>Every geometry in this book gets studied the same way &mdash; find the group, then find what it
            can't change. Euclidean geometry has distance and angle. M&ouml;bius geometry has lost distance
            entirely and keeps angle and the cross ratio. Chapter 5 will build hyperbolic distance
            <em>out of</em> the cross ratio, precisely because it's the one numerical thing left standing.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>"The cross ratio of four points"</h2>

  <p>A claim about what the cross ratio is attached to.</p>

  <p><strong>Click the step that isn't right.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">The cross ratio \((z,w;u,v)\) is unchanged by every M&ouml;bius
        transformation, by Theorem 3.4.12.</button>
      <button class="fline" type="button">So it is an invariant of M&ouml;bius geometry.</button>
      <button class="fline" type="button">Therefore each unordered set of four distinct points has a
        well-defined cross ratio, a single complex number attached to that set.</button>
      <button class="fline" type="button">So if two sets of four points have different cross ratios, no
        M&ouml;bius transformation carries one set to the other.</button>
      <button class="fline" type="button">And if two sets of four points have the same cross ratio, some
        M&ouml;bius transformation carries one to the other.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct &mdash; that's the theorem, and the scaffold above proves it.</strong></p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct, in the sense Definition 4.1.8 will make precise.</strong> An invariant function is
        one satisfying \(f(B) = f(T(B))\) for every allowable \(T\), and that is exactly what
        Theorem 3.4.12 says about the cross ratio.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Here's the mistake, and it's in the word <em>unordered</em>.</strong></p>
      <p>The cross ratio depends on the order you list the four points in. Not a little &mdash; substantially.
        Writing \(\lambda = (z,w;u,v)\), the twenty-four orderings of the same four points produce
        <strong>six</strong> different values in general:</p>
      \[ \lambda,\quad \frac{1}{\lambda},\quad 1-\lambda,\quad \frac{1}{1-\lambda},\quad
      \frac{\lambda}{\lambda-1},\quad \frac{\lambda-1}{\lambda}. \]
      <p>So four points don't have <em>a</em> cross ratio; an ordered quadruple does. Swap two of them and you
        typically get a different number.</p>
      <p>None of which damages Theorem 3.4.12, because a M&ouml;bius transformation carries the points along
        <em>in the order you listed them</em>. The invariance is a statement about ordered quadruples, and it
        is only the leap to "unordered set" that fails.</p>
      <p>The pattern is the same one Day 11's flaw activity turned on: an invariant is a statement about a
        whole configuration, including the parts that look like bookkeeping. Drop the labelling and the
        invariance goes with it.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>True if you keep the orderings straight, which line 3 didn't.</strong></p>
      <p>Correctly stated: if \((z_1,z_2;z_3,z_4) \neq (w_1,w_2;w_3,w_4)\), then no M&ouml;bius transformation
        sends \(z_k \mapsto w_k\) for all four. That's the "invariants prove impossibility" move from the
        scaffold, and it's the standard way to show a four-point configuration <em>can't</em> be matched.</p>
      <p>What you can't conclude is that no M&ouml;bius transformation carries the one <em>set</em> to the
        other &mdash; it might do so in a different order.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>This one is actually true for ordered quadruples, and worth seeing why.</strong></p>
      <p>Take the unique \(T\) sending \(z_1, z_2, z_3\) to \(w_1, w_2, w_3\). Then
        \((T(z_1),T(z_2);T(z_3),T(z_4)) = (z_1,z_2;z_3,z_4)\) by invariance, and this equals
        \((w_1,w_2;w_3,w_4)\) by hypothesis. So \(T(z_4)\) and \(w_4\) give the same cross ratio against the
        same three points \(w_1,w_2,w_3\) &mdash; and since \(z \mapsto (z,w_1;w_2,w_3)\) is one-to-one,
        \(T(z_4) = w_4\).</p>
      <p>So the cross ratio is a <em>complete</em> invariant for ordered quadruples: equal cross ratios is
        exactly the condition for a M&ouml;bius transformation to exist. Complete invariants are rare and
        valuable, and this is the one this chapter is built to deliver.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Using the invariant</h2>

  <div class="mc" data-answer="a">
    <p class="mc-q">You want to show some map \(F\) of \(\mathbb{C}^+\) is <em>not</em> a M&ouml;bius
      transformation. Which is the most economical strategy?</p>
    <button class="mc-opt" data-key="a">Find four points whose cross ratio \(F\) changes.</button>
    <button class="mc-opt" data-key="b">Show \(F\) has no formula of the form \(\frac{az+b}{cz+d}\).</button>
    <button class="mc-opt" data-key="c">Show \(F\) is not one-to-one.</button>
    <button class="mc-opt" data-key="d">Show \(F\) moves more than two points.</button>

    <div class="mc-fb" data-key="a">
      <p>Right, and this is what invariants are for. One computation on one quadruple settles it, and you
        never have to reason about the infinitely many M&ouml;bius transformations that \(F\) might have been.
      </p>
      <p>It's also robust against maps handed to you geometrically rather than by formula &mdash; "reflect in
        this circle, then squash horizontally" &mdash; where hunting for coefficients is hopeless.</p>
      <p>Angle preservation works the same way and is often quicker: find two curves whose crossing angle
        \(F\) changes, and you're done.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>How would you show that? "No such \(a,b,c,d\) exist" is a statement about all four-tuples of complex
        numbers, which is a search you can't finish by inspection. This is exactly the kind of universal claim
        an invariant is designed to replace with a single computation.</p>
      <p>(It does work in easy cases &mdash; \(F(z) = \overline{z}\) obviously has no such formula &mdash; but
        "obviously" is doing unpaid labour there.)</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>If \(F\) isn't one-to-one it certainly isn't M&ouml;bius, so this works when it applies. But it
        usually doesn't: most interesting non-M&ouml;bius maps are perfectly good bijections of
        \(\mathbb{C}^+\). Conjugation, for one.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>M&ouml;bius transformations move almost everything &mdash; Theorem 3.4.6 says they fix at most two
        points unless they're the identity. Moving lots of points is normal behaviour, not evidence of
        anything.</p>
    </div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Euclidean distance is not an invariant of M&ouml;bius geometry &mdash; Section 4.2 gives
      \(T(z) = 1/z\) with the points \(2\) and \(3\) as the counterexample. Given that, how can Chapter 5
      possibly define a <em>distance</em> in hyperbolic geometry?</p>
    <button class="mc-opt" data-key="a">It can't &mdash; hyperbolic geometry has no distance.</button>
    <button class="mc-opt" data-key="b">It uses Euclidean distance anyway and accepts the
      distortion.</button>
    <button class="mc-opt" data-key="c">It builds a new distance from a quantity that <em>is</em>
      invariant.</button>
    <button class="mc-opt" data-key="d">It restricts to transformations that happen to preserve Euclidean
      distance.</button>

    <div class="mc-fb" data-key="a">
      <p>It has a perfectly good distance &mdash; Section 5.3 is called "Measurement in Hyperbolic Geometry."
        What it doesn't have is <em>Euclidean</em> distance.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Accepting the distortion would mean congruent figures could have different sizes, which makes the
        word "distance" useless. A metric has to be invariant under the geometry's own transformations
        &mdash; Definition 4.1.14 builds that requirement into the definition.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Right, and now you can guess which quantity. The hyperbolic distance between two points of the disk
        is built from the cross ratio of those two points together with the two places where the geodesic
        through them meets the boundary circle &mdash; four points, so a cross ratio, so invariant.</p>
      <p>That's the shape of the whole construction, and it's why today matters more than it looks. Klein's
        programme says: choose the group, see what survives, and build your geometry out of the survivors.
        In the disk the survivors are angle and cross ratio, so hyperbolic geometry's angles are the ones you
        can see and its distances are made of cross ratios. Every strange formula in Chapter 5 traces back to
        that constraint.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>The transformations of hyperbolic geometry are M&ouml;bius transformations preserving the unit disk,
        and they emphatically do not preserve Euclidean distance &mdash; near the boundary they compress
        enormously, which is exactly why the Poincar&eacute; disk pictures on Day 1 had all that detail
        crowded at the edge.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The cross ratio \((z,z_1;z_2,z_3)\), read as a function of \(z\), is a M&ouml;bius transformation.
      Read as a function of all four, it's a number. Say in one sentence how those two readings fit
      together.</li>
    <li>Three points have no M&ouml;bius invariant at all; four points have one. Explain the jump using the
      Fundamental Theorem.</li>
    <li>Six values arise from reordering four points. Two of the six are \(\lambda\) and \(1/\lambda\). What
      does swapping which pair of points get you from one to the other?</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    // Base points fixed throughout, and deliberately not any triple or quadruple
    // appearing on this section's problem set.
    var Z1 = c(-2.2, 0.8), Z2 = c(1.1, 1.9), Z3 = c(2.4, -1.3);

    function crMobius(w1, w2, w3) {
      // (z - w2)(w1 - w3) / [(z - w3)(w1 - w2)] as (az+b)/(cz+d).
      var k = G.sub(w1, w3), m = G.sub(w1, w2);
      return G.mobius(k, G.mul(G.neg(w2), k), m, G.mul(G.neg(w3), m));
    }

    /* ---- normalising to 1, 0, infinity ---- */
    (function () {
      var after = false;
      var S = crMobius(Z1, Z2, Z3);

      var P = G.plane('d15-norm', {
        span: 12, height: 400,
        draw: function (p) {
          p.grid(); p.axes({ ticks: false });
          var f = after ? S : function (z) { return z; };

          p.mapGrid(f, {
            x0: -5, x1: 5, y0: -5, y1: 5, step: 0.6, n: 240,
            color: '#bfe4f6', width: 1.1
          });
          p.mapGrid(f, {
            x0: -5, x1: 5, y0: -5, y1: 5, step: 2.4, n: 240,
            color: G.colors.blue, width: 2
          });

          var labels = ['z₁ → 1', 'z₂ → 0', 'z₃ → ∞'];
          [Z1, Z2, Z3].forEach(function (z, i) {
            var w = f(z);
            if (!w || G.abs(w) > 60) {
              // z3 has gone to infinity: say so rather than drawing nothing.
              p.label(c(0, 0), 'z₃ is now at ∞ — off every edge',
                { color: G.colors.orange, dx: -95, dy: -120, size: 13 });
              return;
            }
            p.dot(w, { color: G.colors.orange, r: 6 });
            p.label(w, after ? labels[i].split(' → ')[1] : labels[i].split(' → ')[0],
              { color: G.colors.orange, dx: 10, dy: -9 });
          });
        }
      });

      function refresh() {
        P.redraw();
        G.say('d15-norm-out', after
          ? '<div class="q hit" style="grid-column:1/-1"><b>after</b><span>z₁ sits at 1, z₂ at the origin, '
          + 'and z₃ has left the picture entirely — it is at ∞. Every cline through z₃ has straightened '
          + 'into a line.</span></div>'
          : '<div class="q" style="grid-column:1/-1"><b>before</b><span>Three ordinary points in an '
          + 'ordinary plane. Nothing is special about them yet.</span></div>');
      }

      document.querySelectorAll('[data-cr]').forEach(function (b) {
        b.addEventListener('click', function () {
          document.querySelectorAll('[data-cr]').forEach(function (o) { o.classList.remove('on'); });
          b.classList.add('on');
          after = b.getAttribute('data-cr') === '1';
          refresh();
        });
      });
      refresh();
    })();

    /* ---- invariance of the cross ratio ---- */
    (function () {
      var t = 0;

      // A one-parameter family of Mobius transformations to sweep through,
      // starting at the identity.
      function Tt() {
        var s = t / 100;
        return G.mobius(c(1, 0.9 * s), G.scale(c(1.4, -0.6), s),
          G.scale(c(0.55, 0.3), s), c(1, 0));
      }

      var P = G.plane('d15-inv', {
        span: 14, height: 400,
        handles: [{ name: 'z0', z: c(-0.6, -2.1), color: G.colors.blue, label: 'z₀' }],
        draw: function (p) {
          p.grid(); p.axes({ ticks: false });
          var T = Tt();
          var pts = [p.get('z0'), Z1, Z2, Z3];
          var names = ['z₀', 'z₁', 'z₂', 'z₃'];
          var cols = [G.colors.blue, G.colors.orange, G.colors.violet, G.colors.green];

          // The cline through the three fixed points, carried along.
          var cl = G.through3(Z1, Z2, Z3);
          if (cl) {
            p.cline(cl, { color: '#e4e7ea', width: 1.6 });
            var img = G.mapCline(cl, T, 14);
            if (img) p.cline(img, { color: '#c9ced4', width: 2, dash: [6, 4] });
          }

          pts.forEach(function (z, i) {
            var w = T(z);
            p.dot(z, { color: cols[i], r: 4, hollow: true });
            if (w && G.abs(w) < 60) {
              p.seg(z, w, { color: '#dfe3e7', width: 1.1, dash: [4, 4] });
              p.dot(w, { color: cols[i], r: 6 });
              p.label(w, names[i], { color: cols[i], dx: 10, dy: -9 });
            }
          });
        },
        onDrag: function () { refresh(); }
      });

      function refresh() {
        P.redraw();
        var T = Tt();
        var z0 = P.get('z0');
        var before = G.crossRatio(z0, Z1, Z2, Z3);
        var after = G.crossRatio(T(z0), T(Z1), T(Z2), T(Z3));
        var moved = G.abs(G.sub(z0, T(z0)));
        G.say('d15-inv-out',
          '<div class="q"><b>how far z₀ moved</b><span>' + G.num(moved, 2) + '</span></div>' +
          '<div class="q hit"><b>(z₀,z₁;z₂,z₃) before</b><span>' + G.str(before, 4) + '</span></div>' +
          '<div class="q hit"><b>and after</b><span>' + G.str(after, 4) + '</span></div>' +
          '<div class="q"><b>difference</b><span>' + G.num(G.abs(G.sub(before, after)), 6)
          + '</span></div>');
      }

      G.slider('d15-t', function (v) { t = v; refresh(); });
      refresh();
    })();
  })();
</script>
