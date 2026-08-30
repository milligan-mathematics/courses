---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 5: Division, and What an Angle Really Is"
day: 5
chapter_number: 2
chapter: "The Complex Plane"
day_title: "Division, and What an Angle Really Is"
blurb: "Dividing subtracts arguments. That one fact turns \"the angle at a vertex\" into a formula, and the formula is what makes angle-preservation something we can prove instead of assert."
reading: "Section 2.3, division in Cartesian and polar form through the angle determined by three points"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>What \(z \mapsto 1/z\) does to the plane</h2>

  <p>Division by \(w\) is multiplication by \(1/w\), so once you understand the single map \(z \mapsto 1/z\)
    you understand all of division. Multiplication turned out to be a rotation and a scaling. Reciprocation is
    something else entirely, and you should look at it before you meet it under a fancier name in
    Chapter 3.</p>

  <p>On the left, a family of clean, ordinary lines and circles. On the right, their images under
    \(z \mapsto 1/z\). Change what's in the left panel and watch what happens.</p>

  <div class="toggles">
    <button class="btn411 ghost on" type="button" data-fig="grid">a square grid</button>
    <button class="btn411 ghost" type="button" data-fig="rings">circles about the origin</button>
    <button class="btn411 ghost" type="button" data-fig="vlines">vertical lines</button>
    <button class="btn411 ghost" type="button" data-fig="disk">a small disk</button>
  </div>

  <div class="plane-pair">
    <div class="pane">
      <canvas class="plot g304" id="d5-src"></canvas>
      <div class="cap">the plane, before</div>
    </div>
    <div class="pane">
      <canvas class="plot g304" id="d5-img"></canvas>
      <div class="cap">its image under \(z \mapsto 1/z\)</div>
    </div>
  </div>

  <p>Three observations, in increasing order of consequence.</p>

  <p><strong>Circles centred at the origin stay circles centred at the origin,</strong> and they turn
    inside out: the big ones become small, the small ones become big, and the unit circle stays exactly where
    it is. That's \(|1/z| = 1/|z|\) doing its work &mdash; the unit circle is the set where \(|z| = 1\), and
    \(1/1 = 1\).</p>

  <p><strong>Straight lines mostly stop being straight.</strong> A vertical line not through the origin comes
    back as a circle. This should be surprising. It is the first crack in the distinction between lines and
    circles, and by Section 3.2 that distinction will be gone entirely, replaced by a single word:
    <em>cline</em>.</p>

  <p><strong>The grid stays square.</strong> Look closely at where the image curves cross: they still cross at
    right angles, everywhere. Reciprocation bends lines into circles but does not bend angles. That property
    is called <em>conformality</em>, and it is the single thread running from here to the end of the
    course &mdash; it's why hyperbolic geometry can be drawn inside a disk and still have honest angles in it.</p>

  <details class="hint">
    <summary>Where did the origin go?</summary>
    <p>Nowhere &mdash; that's the trouble. \(1/0\) is undefined, so \(z \mapsto 1/z\) isn't defined at the
      origin, and no point of the image plane is \(1/0\). Watch the grid lines near the centre of the left
      panel: their images run off to arbitrarily large modulus and leave the picture entirely.</p>
    <p>Section 3.3 fixes this by adding a single new point called \(\infty\) and declaring
      \(1/0 = \infty\) and \(1/\infty = 0\). It sounds like a dodge. It is actually the move that makes every
      theorem in Chapter 3 come out clean, and you'll see it earn its keep.</p>
  </details>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>Turning "the angle at a vertex" into a formula</h2>

  <p>Your reading gives the angle between two rays from a common point \(z_0\) as</p>

  \[ \angle(L_1,L_2) = \arg\!\bigg(\frac{z_2-z_0}{z_1-z_0}\bigg). \]

  <p>That formula deserves to be built rather than memorised, because every conformality argument in this
    course runs through it. Try each step before revealing it.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Start with the easiest possible case: the common point is the origin, and
          \(L_1\) is the positive real axis. If \(z_2\) is a point on \(L_2\), what is the angle from \(L_1\)
          to \(L_2\)?</div>
        <div class="sstep-body">
          <p>It's \(\arg(z_2)\), by the definition of the argument &mdash; the angle measured counterclockwise
            from the positive real axis to the ray through \(z_2\).</p>
          <p>Your reading states exactly this at the end of the section: if \(u=1\), \(v=0\), then
            \(\angle uvz = \arg(z)\). So in the simplest case the answer is already sitting in the notation
            we have. The rest of the argument is about reducing the general case to this one.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now move the vertex. Suppose the rays leave from \(z_0\) instead of the
          origin, but keep \(L_1\) pointing along the positive real direction. What changes?</div>
        <div class="sstep-body">
          <p>Nothing about the angle. Translate the whole configuration by \(-z_0\), which slides \(z_0\) to
            the origin and sends \(z_2\) to \(z_2 - z_0\). A translation moves everything by the same vector,
            so directions &mdash; and therefore angles &mdash; are untouched.</p>
          <p>So the angle is \(\arg(z_2 - z_0)\). This is the first appearance of a move you'll make
            constantly: <em>a difference is a direction</em>. Not a point.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Finally, let \(L_1\) point wherever it likes, through a point \(z_1\). We
          now have two directions, \(z_1 - z_0\) and \(z_2 - z_0\). How do you get the angle
          <em>between</em> them?</div>
        <div class="sstep-body">
          <p>Each direction has its own angle from the positive real axis, and the angle between them is the
            difference:</p>
          \[ \angle(L_1,L_2) = \arg(z_2-z_0) - \arg(z_1-z_0). \]
          <p>And now the punchline. Example 2.3.2 established that dividing subtracts arguments,
            \(\arg(z/w) = \arg(z)-\arg(w)\). So that difference of two arguments <em>is</em> the argument of a
            single quotient:</p>
          \[ \angle(L_1,L_2) = \arg\!\bigg(\frac{z_2-z_0}{z_1-z_0}\bigg). \]
          <p>Why bother packaging it as one quotient instead of a difference? Because now the angle is
            \(\arg\) of <em>one complex number</em> that you can compute, transform, and track through a map.
            When we want to prove some transformation preserves angles, we will show it does something
            predictable to that quotient. A difference of two separate arguments is much harder to push
            through a formula.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">One consequence to extract before you go: what does the formula say about
          \(\angle(L_2,L_1)\), the same angle measured the other way?</div>
        <div class="sstep-body">
          <p>Swapping the rays inverts the quotient, and \(\arg(1/u) = -\arg(u)\). So</p>
          \[ \angle(L_2,L_1) = -\angle(L_1,L_2), \]
          <p>which is the sign convention your reading states: counterclockwise positive, clockwise negative.
            <strong>This is not decoration.</strong> An angle in this course is a <em>signed</em> quantity,
            and the sign is orientation.</p>
          <p>Look ahead at why it matters. Section 3.1 will say general linear transformations "preserve
            angles," while reflections only "preserve angle <em>magnitudes</em>" &mdash; they flip the sign.
            That distinction is the whole reason a M&ouml;bius transformation is an <em>even</em> number of
            inversions (Theorem 3.4.4): two sign flips make a preserved angle, and one doesn't.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>An angle that refuses to change</h2>

  <p>Here is a fixed configuration of three points. You can't move them relative to each other &mdash; you can
    only move the whole arrangement: slide it, spin it, resize it. Watch the angle at the middle vertex.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d5-rot">rotate</label>
      <input type="range" id="d5-rot" min="-180" max="180" step="1" value="0">
    </div>
    <div class="ctl">
      <label for="d5-scale">scale</label>
      <input type="range" id="d5-scale" min="0.35" max="1.9" step="0.01" value="1">
    </div>
    <div class="ctl">
      <label for="d5-shift">slide</label>
      <input type="range" id="d5-shift" min="-3" max="3" step="0.05" value="0">
    </div>
    <div class="ctl">
      <label for="d5-flip">
        <input type="checkbox" id="d5-flip"> reflect it
      </label>
    </div>
  </div>

  <canvas class="plot g304" id="d5-angle"></canvas>
  <div class="readout cols" id="d5-angle-out"></div>

  <p>Slide it, spin it, resize it: the angle does not move. Tick "reflect it" and the number keeps its size
    but changes sign.</p>

  <p>This is a small demonstration of an enormous idea, and it is worth naming now because Chapter 4 is going
    to build the whole course on it. We have a family of allowable motions, and we have a quantity that
    survives all of them. Klein's definition of a geometry, which your Day 1 reading described as
    "subtractive," is precisely this: fix the group of allowable motions, then study whatever survives.</p>

  <p>Angle survives translation, rotation, and dilation. Notice what it does <em>not</em> survive: reflection
    leaves the magnitude alone but reverses the sign. That's why we'll keep two separate phrases &mdash;
    <em>preserves angles</em> and <em>preserves angle magnitudes</em> &mdash; and why the difference between
    them decides which transformations count as M&ouml;bius transformations.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>An angle computation that comes out backwards</h2>

  <p>Someone is computing the angle \(\angle(L_1,L_2)\) between two rays from a common point, and gets an
    answer that's off by a full turn. Their work looks fine.</p>

  <p><strong>Click the step that isn't safe.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Pick \(z_1\) on \(L_1\) and \(z_2\) on \(L_2\), and set
        \(a = z_1 - z_0\), \(b = z_2 - z_0\), so the angle we want is \(\arg(b/a)\).</button>
      <button class="fline" type="button">Since \(\arg\) of a quotient is the difference of the arguments,
        \(\arg(b/a) = \arg(b) - \arg(a)\).</button>
      <button class="fline" type="button">Compute each argument with the convention
        \(0 \le \arg \lt 2\pi\), subtract, and report the result.</button>
      <button class="fline" type="button">If the two rays get swapped, the answer changes sign, since
        \(\arg(a/b) = -\arg(b/a)\).</button>
      <button class="fline" type="button">So the angle between the rays is determined by the two points
        chosen on them, and doesn't depend on how far along each ray they sit.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct, and it's the right way to set the problem up.</strong> Subtracting \(z_0\) turns
        points into directions, and the quotient packages the angle into one number. Straight out of the
        scaffold above.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>True, with the caveat your reading attaches to it.</strong> Example 2.3.2 derives
        \(\arg(z/w)=\arg(z)-\arg(w)\) and then adds: "where equality is taken modulo \(2\pi\)." Both sides
        name the same <em>direction</em>, and directions only determine angles up to whole turns. Fine as
        written, so long as the next line respects the caveat.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Here's the break, and it's the caveat from line 2 coming due.</strong></p>
      <p>Pinning both arguments into \([0,2\pi)\) is a perfectly reasonable thing to do to each one
        separately. But their <em>difference</em> then lands in \((-2\pi, 2\pi)\), which is twice as much room
        as an angle needs, and the value you get depends on an arbitrary choice you made point by point.</p>
      <p>Concretely: let \(a\) sit at \(350^\circ\) and \(b\) at \(10^\circ\). These rays are \(20^\circ\)
        apart, and by eye the rotation from \(a\) to \(b\) is \(+20^\circ\). The recipe returns
        \(10 - 350 = -340^\circ\). It isn't wrong &mdash; a rotation of \(-340^\circ\) really does carry one
        ray to the other &mdash; but it is not the answer anyone wanted, and if you're chaining several of
        these together the errors compound.</p>
      <p>The fix is to normalise <em>after</em> subtracting, not before: add or subtract multiples of
        \(2\pi\) until the result lands in \((-\pi,\pi]\). Equivalently, and more robustly, compute
        \(\arg(b/a)\) directly by dividing first and taking the argument of the single quotient &mdash; which
        is exactly why the reading writes the formula as one quotient rather than a difference. The
        packaging isn't cosmetic; it makes the branch problem disappear.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Correct in principle.</strong> \(\angle(L_2,L_1) = -\angle(L_1,L_2)\), which is the reading's
        sign convention. In practice, if you computed the first one badly by the recipe in line 3, you'll get
        a matching pair of bad answers &mdash; consistent with each other and both off by a turn.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>True and worth checking, since it's what makes the formula about <em>rays</em> rather than
          about the particular points chosen.</strong></p>
      <p>Moving \(z_1\) further out along \(L_1\) replaces \(a\) by \(ta\) for some real \(t \gt 0\), and
        \(\arg(b/(ta)) = \arg\!\big(\tfrac{1}{t}\cdot\tfrac{b}{a}\big) = \arg(b/a)\), since multiplying by a
        positive real doesn't rotate anything. So the answer really does depend only on the two rays.</p>
      <p>The condition \(t \gt 0\) is load-bearing: pick a point on the <em>opposite</em> ray and you've added
        \(\pi\).</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Orientation</h2>

  <div class="mc" data-answer="d">
    <p class="mc-q">A transformation \(T\) has the property that for every triple of points,
      \(\angle T(u)T(v)T(w) = -\angle uvw\). What kind of map is it?</p>
    <button class="mc-opt" data-key="a">It preserves angles, so it's a rotation or translation.</button>
    <button class="mc-opt" data-key="b">It destroys angles, so it can't be a useful transformation.</button>
    <button class="mc-opt" data-key="c">It must be the identity, since \(-0 = 0\).</button>
    <button class="mc-opt" data-key="d">It preserves angle magnitudes but reverses orientation &mdash; it
      involves an odd number of reflections.</button>

    <div class="mc-fb" data-key="a">
      <p>Preserving angles would mean \(\angle T(u)T(v)T(w) = +\angle uvw\), with the sign intact. This map
        flips every sign, which no rotation or translation does. The distinction looks pedantic until it
        becomes the criterion for what a M&ouml;bius transformation is.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Far from it &mdash; reflections and inversions are exactly this kind of map, and they are the two
        most important transformations in the course. Theorem 3.4.4 says every M&ouml;bius transformation is a
        composition of an even number of them. A sign-reversing map is a building block, not a failure.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Only angles that happen to be \(0\) or \(\pi\) are their own negatives; a right angle satisfies
        \(-90^\circ \neq 90^\circ\). So the condition doesn't collapse to preservation, and the identity is
        just one very special map that happens to satisfy both.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Right. \(|{-\theta}| = |\theta|\), so magnitudes survive, but every counterclockwise angle comes back
        clockwise: the plane has been turned over.</p>
      <p>The parity bookkeeping is the useful part. Each reflection or inversion flips the sign once. Compose
        two and the signs cancel, giving a genuinely angle-preserving map. Compose three and you're back to
        reversing. So "preserves angles" and "even number of reflections" track each other exactly &mdash;
        which is what makes Theorem 3.4.4's characterisation of M&ouml;bius transformations feel inevitable
        rather than arbitrary.</p>
    </div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">In the first activity, the image of a vertical line under \(z\mapsto 1/z\) was a circle
      &mdash; but the vertical line through the origin came back as a line. What distinguishes the two
      cases?</p>
    <button class="mc-opt" data-key="a">Whether the line passes through \(0\), the one point where \(1/z\) is
      undefined.</button>
    <button class="mc-opt" data-key="b">Whether the line is vertical or slanted.</button>
    <button class="mc-opt" data-key="c">Whether the line crosses the unit circle.</button>
    <button class="mc-opt" data-key="d">Nothing &mdash; the "line" is really a circle of enormous radius in
      both cases.</button>

    <div class="mc-fb" data-key="a">
      <p>Yes, and you have just anticipated Theorem 3.2.6. A cline whose image ought to be a circle can only
        come out as a line if something on it got sent infinitely far away &mdash; and under \(1/z\) the only
        candidate is \(0\). Pass through the bad point, get a line; miss it, get a circle.</p>
      <p>Once \(\infty\) is a legitimate point (Section 3.3), this stops being two cases and becomes one: a
        line is exactly a circle that passes through \(\infty\), and \(1/z\) maps \(0 \leftrightarrow
        \infty\). The exception vanishes into the notation, which is what good notation is for.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Try it: the horizontal line through the origin (the real axis) also comes back as a line, and a
        slanted line missing the origin comes back as a circle. Direction isn't the variable.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Not the distinguishing feature. A line can cross the unit circle and still have a circle for an
        image &mdash; crossing the unit circle just means part of the image is inside and part outside, since
        the unit circle is fixed. What matters is a single point, and it isn't on the unit circle at all.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>This is a genuinely productive instinct pointed slightly wrong. Section 3.2 <em>will</em> merge lines
        and circles into a single object, the cline &mdash; but not by calling a line a circle of huge radius.
        A line is exactly straight, not slightly curved. The merger happens by adding the point \(\infty\)
        and letting a "circle through \(\infty\)" be a line.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>In the first activity, one circle in the left panel is unchanged by \(z\mapsto 1/z\), and one family
      of lines is unchanged as a family. Identify both, and say what they have in common.</li>
    <li>The angle formula uses a quotient rather than a difference of arguments. Give the practical reason
      &mdash; you met it in the flaw activity.</li>
    <li>We now have three quantities that survive rotations and translations: distance, angle, and shape. One
      of the three does <em>not</em> survive dilation. Which, and what does that tell you about what a
      "geometry" is allowed to measure?</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    /* ---- z -> 1/z on whole families of clines ---- */
    (function () {
      var fig = 'grid';
      var recip = function (z) { return G.inv(z); };

      // Each figure is a list of clines plus, where useful, a fill.
      function figures() {
        var out = [], k;
        if (fig === 'grid') {
          for (k = -3; k <= 3; k++) {
            out.push({ cl: G.lineDir(c(k, 0), Math.PI / 2), col: G.colors.blue });
            out.push({ cl: G.lineDir(c(0, k), 0), col: G.colors.violet });
          }
        } else if (fig === 'rings') {
          [0.35, 0.6, 1, 1.7, 2.9].forEach(function (r) {
            out.push({ cl: G.circle(c(0, 0), r), col: Math.abs(r - 1) < 1e-9 ? G.colors.green : G.colors.blue });
          });
          for (k = 0; k < 6; k++) {
            out.push({ cl: G.lineDir(c(0, 0), Math.PI * k / 6), col: '#dfe3e7' });
          }
        } else if (fig === 'vlines') {
          [-2.5, -1.5, -0.75, 0, 0.75, 1.5, 2.5].forEach(function (x) {
            out.push({ cl: G.lineDir(c(x, 0), Math.PI / 2), col: x === 0 ? G.colors.green : G.colors.blue });
          });
        } else {
          out.push({ cl: G.circle(c(1.5, 0.9), 0.7), col: G.colors.orange });
          out.push({ cl: G.circle(c(0, 0), 1), col: '#dfe3e7' });
        }
        return out;
      }

      function panel(id, mapped) {
        return G.plane(id, {
          span: 7.4, height: 320,
          draw: function (p) {
            p.grid(); p.axes({ ticks: false });
            figures().forEach(function (f) {
              var cl = mapped ? G.mapCline(f.cl, recip, 24) : f.cl;
              if (cl) p.cline(cl, { color: f.col, width: 1.8 });
            });
            p.dot(c(0, 0), { color: G.colors.ink, r: 3.5 });
            p.label(c(0, 0), '0', { color: G.colors.ink, dx: 7, dy: -6, size: 12 });
          }
        });
      }

      var src = panel('d5-src', false);
      var img = panel('d5-img', true);

      document.querySelectorAll('[data-fig]').forEach(function (b) {
        b.addEventListener('click', function () {
          document.querySelectorAll('[data-fig]').forEach(function (o) { o.classList.remove('on'); });
          b.classList.add('on');
          fig = b.getAttribute('data-fig');
          src.redraw(); img.redraw();
        });
      });
    })();

    /* ---- an angle that refuses to change ---- */
    (function () {
      // A configuration deliberately unlike anything on the problem set.
      var U0 = c(2.2, -0.6), V0 = c(-0.4, -1.5), W0 = c(-1.1, 1.8);
      var rot = 0, sc = 1, shift = 0, flip = false;

      function place(z) {
        var w = flip ? G.conj(z) : z;
        return G.add(G.mul(G.scale(G.expi(rot), sc), w), c(shift, shift * 0.35));
      }

      var P = G.plane('d5-angle', {
        span: 11, height: 350,
        draw: function (p) {
          p.grid(); p.axes();
          var u = place(U0), v = place(V0), w = place(W0);

          p.seg(v, u, { color: G.colors.blue, width: 2.4 });
          p.seg(v, w, { color: G.colors.violet, width: 2.4 });
          p.seg(u, w, { color: '#dfe3e7', width: 1.4, dash: [5, 4] });

          var ang = G.arg(G.div(G.sub(w, v), G.sub(u, v)));
          p.angleArc(v, u, w,
            { color: G.colors.green, width: 2.4, rpx: 34, text: G.num(ang * 180 / Math.PI, 1) + '°' });

          p.dot(u, { color: G.colors.blue, r: 5, label: 'u' });
          p.dot(v, { color: G.colors.green, r: 6, label: 'v' });
          p.dot(w, { color: G.colors.violet, r: 5, label: 'w' });
        }
      });

      function refresh() {
        P.redraw();
        var u = place(U0), v = place(V0), w = place(W0);
        var ang = G.arg(G.div(G.sub(w, v), G.sub(u, v))) * 180 / Math.PI;
        G.say('d5-angle-out',
          '<div class="q"><b>what we did to it</b><span>turned ' + G.num(rot * 180 / Math.PI, 0)
          + '°, scaled ×' + G.num(sc, 2) + (flip ? ', reflected' : '') + '</span></div>' +
          '<div class="q hit"><b>∠uvw</b><span>' + G.num(ang, 2) + '°</span></div>' +
          '<div class="q"><b>|∠uvw|</b><span>' + G.num(Math.abs(ang), 2) + '° — unchanged by all of it'
          + '</span></div>');
      }

      G.slider('d5-rot', function (v) { rot = v * Math.PI / 180; refresh(); });
      G.slider('d5-scale', function (v) { sc = v; refresh(); });
      G.slider('d5-shift', function (v) { shift = v; refresh(); });
      var cb = document.getElementById('d5-flip');
      if (cb) cb.addEventListener('change', function () { flip = cb.checked; refresh(); });
      refresh();
    })();
  })();
</script>
