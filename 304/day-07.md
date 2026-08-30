---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 7: Moving the Whole Plane at Once"
day: 7
chapter_number: 3
chapter: "Transformations"
day_title: "Moving the Whole Plane at Once"
blurb: "A transformation isn't a formula that eats a number. It's a rearrangement of every point of the plane simultaneously, with nothing lost and nothing doubled up — which is what one-to-one and onto are really saying."
reading: "Section 3.1, transformations and the general linear map \\(T(z) = az+b\\) through Theorem 3.1.9"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>\(T(z) = az + b\), taken apart</h2>

  <p>Your reading lists four basic transformations &mdash; translation, rotation about \(0\), rotation about
    \(z_0\), dilation &mdash; and then says they're all special cases of \(T(z) = az+b\). Rather than take
    that on faith, drive it.</p>

  <p>The two handles are the constants \(a\) and \(b\). The blue shape is the plane's original contents; the
    orange one is its image.</p>

  <canvas class="plot g304" id="d7-linear"></canvas>
  <div class="drag-hint">Drag \(a\) and \(b\).</div>
  <div class="readout cols" id="d7-linear-out"></div>

  <p>Park \(a\) and \(b\) in each of these spots and watch the readout name the map:</p>

  <table class="vals">
    <tr>
      <th>put \(a\) at</th>
      <th>put \(b\) at</th>
      <th>and you get</th>
    </tr>
    <tr>
      <td>\(1\)</td>
      <td>anywhere</td>
      <td>a translation &mdash; the shape slides, never turns</td>
    </tr>
    <tr>
      <td>on the unit circle</td>
      <td>\(0\)</td>
      <td>a rotation about the origin</td>
    </tr>
    <tr>
      <td>positive real, not \(1\)</td>
      <td>\(0\)</td>
      <td>a dilation about the origin</td>
    </tr>
    <tr>
      <td>anywhere but \(1\)</td>
      <td>anywhere</td>
      <td>a rotation-and-dilation about <em>some other point</em></td>
    </tr>
  </table>

  <p>That last row is the interesting one, and it's easy to miss. When \(a \neq 1\), the map
    \(T(z) = az+b\) has exactly one fixed point &mdash; solve \(z = az+b\) to get \(z = \frac{b}{1-a}\) &mdash;
    and around that point the map is a pure rotation-and-scaling. The green dot in the picture is that fixed
    point. Watch it: as you drag \(b\), the whole motion reorganises itself around wherever the green dot
    lands.</p>

  <p>So a general linear transformation isn't "a rotation, then a dilation, then a slide" in any essential
    way. It's a <strong>rotation-and-dilation about one special point</strong>, and the \(b\) is just
    bookkeeping about where that point is. Set \(a = 1\) and the fixed point runs off to infinity, which is
    the honest reason a translation has no centre.</p>

  <details class="hint">
    <summary>Why the fixed point matters more than the formula</summary>
    <p>Because it survives. The formula \(az+b\) is tied to using \(0\) as the origin; move the origin and
      \(b\) changes. The fixed point is a genuine feature of the motion &mdash; a place in the plane that
      doesn't move &mdash; and it's the same place no matter what coordinates you use.</p>
    <p>Section 3.5 takes this seriously and rewrites every M&ouml;bius transformation in terms of its fixed
      points instead of its coefficients, for exactly this reason. The reading calls the result the
      <em>normal form</em>, and says it is "much more illuminating than the standard \(a,b,c,d\) form." Today
      is the first sighting of why.</p>
  </details>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>What "one-to-one and onto" is protecting you from</h2>

  <p>Definition 3.1.1 requires a transformation to be one-to-one and onto. Your reading then proves it for
    \(T_b\) and for \(T(z) = az+b\), and the proofs are three lines each &mdash; short enough that it's easy
    to read them as a formality. They are not a formality. Work out what each condition rules out.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Consider \(f(z) = z^2\) on \(\mathbb{C}\). Which of the two conditions does
          it fail, and what does the failure look like geometrically?</div>
        <div class="sstep-body">
          <p>It fails <strong>one-to-one</strong>: \(f(z) = f(-z)\) for every \(z\), so the points \(2\) and
            \(-2\) both land on \(4\).</p>
          <p>Geometrically, squaring doubles arguments, so it wraps the plane around itself twice &mdash; the
            upper half-plane alone already covers everything. Two sheets of plane get pressed onto one.</p>
          <p>It <em>is</em> onto, by the way: every complex number has a square root, as Day 6 established.
            So failing one condition says nothing about the other.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now consider \(g(z) = e^{z}\) restricted so it's one-to-one &mdash; say on
          the strip \(-\pi \lt \mathrm{Im}(z) \le \pi\), mapping into \(\mathbb{C}\). What goes wrong
          now?</div>
        <div class="sstep-body">
          <p>It fails <strong>onto</strong>: nothing maps to \(0\), since \(|e^z| = e^{\mathrm{Re}(z)}\) is
            never zero.</p>
          <p>A single point of the target has no preimage. That sounds minor, and for many purposes it is
            &mdash; but it means \(g\) has no inverse defined on all of \(\mathbb{C}\), so you cannot undo it,
            so it cannot be one of the "allowable motions" of a geometry.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Both conditions together are exactly what's needed for one thing. What
          is it?</div>
        <div class="sstep-body">
          <p><strong>An inverse.</strong> Onto guarantees every target point has <em>at least</em> one
            preimage, so \(T^{-1}\) has something to return; one-to-one guarantees <em>at most</em> one, so
            what it returns is unambiguous. Together: exactly one, which is a function.</p>
          <p>Your reading states this immediately after the definition &mdash; "a transformation \(T\) of
            \(A\) has an inverse function \(T^{-1}\)" &mdash; and it is the entire payload of the
            definition.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Last step, and it's the reason this section is here at all. Chapter 4 will
          define a <em>geometry</em> as a set together with a group of transformations. Why does the group
          axiom "\(T\) in \(G\) implies \(T^{-1}\) in \(G\)" force us to care about all of this?</div>
        <div class="sstep-body">
          <p>Because congruence has to be symmetric. In a geometry, two figures are congruent when some
            allowable \(T\) carries one to the other. If \(T^{-1}\) weren't available, "\(A\) is congruent to
            \(B\)" wouldn't imply "\(B\) is congruent to \(A\)" &mdash; and a notion of sameness that only
            works in one direction is useless.</p>
          <p>So the pedantic-looking one-to-one-and-onto check at the start of Chapter 3 is what makes
            congruence in Chapter 4 an equivalence relation. Every proof in Section 3.1 that some map "is a
            transformation" is really a proof that it's allowed to be part of a geometry.</p>
          <p>This also explains the persistent side condition \(a \neq 0\) in \(T(z) = az+b\). If \(a = 0\)
            the map crushes the entire plane onto the single point \(b\): not one-to-one, not onto, no
            inverse, not a transformation, not allowed. You saw this on Day 3 when dragging the multiplier to
            the origin collapsed the picture.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Composition, and why order matters</h2>

  <p>Theorem 3.1.5 says composing two transformations gives a transformation. Fine. The interesting question
    is what the composite <em>is</em> &mdash; and whether you get the same thing doing them in the other
    order.</p>

  <p>Below, two maps are applied one after the other. Choose each one, then swap the order.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d7-first">first apply</label>
      <select id="d7-first">
        <option value="rot">rotate 120° about 0</option>
        <option value="shiftA">translate by 2 − i</option>
        <option value="dil">dilate by 1.6 about 0</option>
        <option value="shiftB">translate by −1 + 2i</option>
      </select>
    </div>
    <div class="ctl">
      <label for="d7-second">then apply</label>
      <select id="d7-second">
        <option value="shiftA">translate by 2 − i</option>
        <option value="rot">rotate 120° about 0</option>
        <option value="dil">dilate by 1.6 about 0</option>
        <option value="shiftB">translate by −1 + 2i</option>
      </select>
    </div>
  </div>

  <canvas class="plot g304" id="d7-comp"></canvas>
  <div class="legend">
    <span class="blue">start</span>
    <span class="muted">after the first map</span>
    <span class="orange">after both, in the order chosen</span>
    <span class="violet dashed">after both, in the opposite order</span>
  </div>
  <div class="readout cols" id="d7-comp-out"></div>

  <p>Some pairs commute and some don't, and the pattern is worth extracting rather than memorising:</p>

  <ul>
    <li><strong>Two translations commute.</strong> Sliding by \(b_1\) then \(b_2\) is sliding by
      \(b_1+b_2\), and addition doesn't care about order.</li>
    <li><strong>A rotation about \(0\) and a dilation about \(0\) commute</strong>, because both are
      multiplication and \(re^{i\theta}z\) reads either way round. This is why "rotation-and-dilation" is one
      operation rather than two.</li>
    <li><strong>A rotation about \(0\) and a translation do not.</strong> Rotating then sliding puts the
      shape somewhere different from sliding then rotating, and you can see why: the rotation moves the
      slide's destination along with everything else.</li>
    <li><strong>A dilation about \(0\) and a translation do not,</strong> for the same reason &mdash; the
      dilation rescales the slide.</li>
  </ul>

  <p>The general fact behind all of it: \(T(z) = a_1z+b_1\) followed by \(S(z) = a_2z+b_2\) gives
    \(S(T(z)) = a_2a_1z + (a_2b_1+b_2)\). The multiplier of a composite is the product of the multipliers
    &mdash; and complex multiplication commutes, so the <em>rotating and scaling</em> part never cares about
    order. It's the additive part, \(a_2b_1 + b_2\), that isn't symmetric in the two maps. Every failure to
    commute in this activity is that one term.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Reading a formula as a motion</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Theorem 3.1.9 says a general linear transformation maps circles to circles. What does the
      proof have to rule out that a casual glance might miss?</p>
    <button class="mc-opt" data-key="a">That the image could be empty.</button>
    <button class="mc-opt" data-key="b">That the image could be an ellipse.</button>
    <button class="mc-opt" data-key="c">That the image could be a different circle.</button>
    <button class="mc-opt" data-key="d">Nothing &mdash; it follows immediately from the map being
      one-to-one.</button>

    <div class="mc-fb" data-key="a">
      <p>The image of a non-empty set under a function is non-empty; there's nothing to rule out. Emptiness is
        never the risk with these maps.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Right, and this is the substance of the theorem. Plenty of perfectly respectable maps of the plane
        send circles to ellipses &mdash; \((x,y)\mapsto(2x,y)\), for one. Nothing about being one-to-one and
        onto prevents it.</p>
      <p>What prevents it here is that multiplication by \(a\) scales <em>every direction by the same
          factor</em> \(|a|\). Stretching \(x\) and \(y\) differently isn't something a single complex
        multiplication can do &mdash; and that limitation, which might look like a weakness of \(\mathbb{C}\),
        is exactly why complex arithmetic is the right tool for geometry. The maps it can express are the
        shape-preserving ones.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>It usually <em>is</em> a different circle &mdash; a different centre, a different radius. The theorem
        only claims the image is <em>a</em> circle, not the same one. (Circles that map to themselves are
        special and get studied later, under the name "invariant.")</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Being one-to-one and onto is about points, not shapes, and constrains the image of a circle almost
        not at all. Here's a map of the plane that's a perfectly good transformation and sends the unit circle
        to something with corners: send \(re^{i\theta}\) to the point at distance \(r\) along the ray at angle
        \(\theta\) <em>measured on a square</em>. Bijective, and circles come out square. Theorem 3.1.9 needs
        the specific structure of \(az+b\).</p>
    </div>
  </div>

  <div class="mc" data-answer="d">
    <p class="mc-q">Which of these is <em>not</em> a transformation of \(\mathbb{C}\)?</p>
    <button class="mc-opt" data-key="a">\(T(z) = \overline{z}\)</button>
    <button class="mc-opt" data-key="b">\(T(z) = iz - 4\)</button>
    <button class="mc-opt" data-key="c">\(T(z) = \overline{z} + 2i\)</button>
    <button class="mc-opt" data-key="d">\(T(z) = z\cdot\overline{z}\)</button>

    <div class="mc-fb" data-key="a">
      <p>Conjugation is a transformation: it's one-to-one (conjugates are equal only if the numbers are) and
        onto (every \(w\) is \(\overline{\overline{w}}\)). It's its own inverse. It's a reflection across the
        real axis &mdash; and reflections are the subject of the rest of this section.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>This is \(az+b\) with \(a = i \neq 0\), so it's a transformation by Example 3.1.7. Specifically a
        quarter turn plus a slide &mdash; and since \(a \neq 1\), it's really a quarter turn about the fixed
        point \(\frac{-4}{1-i} = -2-2i\).</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>A transformation. It's the form \(e^{i\theta}\overline{z}+b\) that your reading gives for reflection
        across a line &mdash; here with \(\theta = 0\) and \(b = 2i\), which reflects across the horizontal
        line \(y = 1\). One-to-one and onto, and its own inverse.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Right. \(z\overline{z} = |z|^2\), which is a non-negative <em>real</em> number, so this map sends the
        entire plane into a ray. It fails both conditions at once: every point of the circle \(|z|=2\) lands
        on \(4\), and nothing at all lands on \(i\).</p>
      <p>The general warning: an expression built from \(z\) and \(\overline{z}\) is only a transformation if
        it's <em>linear</em> in exactly one of them. \(z\), \(\overline{z}\), \(az+b\), and
        \(a\overline{z}+b\) all qualify; \(z\overline{z}\), \(z^2\), and \(z + \overline{z}\) do not. This is
        a fast check worth having.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The map \(T(z) = az+b\) with \(a\neq 1\) has fixed point \(\frac{b}{1-a}\). What happens to that
      point as \(a \to 1\), and how does that fit with translations having no fixed point at all?</li>
    <li>In the composition activity, the composite's multiplier was always the product \(a_2a_1\), no matter
      the order. Say in one sentence why complex multiplication being commutative is doing all the work
      there.</li>
    <li>We now have translations, rotations, and dilations, and all of them preserve angles and send circles
      to circles. Name a motion of the plane you'd expect to be geometrically respectable that <em>isn't</em>
      of the form \(az+b\). (You've already met one.)</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    // A shape with no symmetry, so rotation and reflection look different.
    var FLAG = [
      c(0.35, -0.5), c(0.35, 2.3), c(1.9, 1.75), c(0.85, 1.35),
      c(1.55, 1.05), c(0.85, 0.75), c(0.85, -0.5)
    ];

    /* ---- T(z) = az + b ---- */
    (function () {
      var P = G.plane('d7-linear', {
        span: 13, height: 400,
        handles: [
          { name: 'a', z: c(0.75, 0.6), color: G.colors.violet, label: 'a' },
          { name: 'b', z: c(2.2, -1.4), color: G.colors.green, label: 'b' }
        ],
        draw: function (p) {
          var a = p.get('a'), b = p.get('b');
          p.grid(); p.axes();
          p.circle(c(0, 0), 1, { color: '#e8eaed', width: 1, dash: [4, 4] });

          var T = function (z) { return G.add(G.mul(a, z), b); };
          p.poly(FLAG, { closed: true, color: G.colors.blue, width: 2.4, fill: G.colors.blue });
          p.poly(FLAG.map(T), { closed: true, color: G.colors.orange, width: 2.4, fill: G.colors.orange });

          // The fixed point, when there is one.
          var denom = G.sub(c(1, 0), a);
          if (G.abs(denom) > 0.04) {
            var f = G.div(b, denom);
            p.dot(f, { color: G.colors.green, r: 7 });
            p.label(f, 'fixed point', { color: G.colors.green, dx: 10, dy: -9 });
          }
        },
        onDrag: function () { refresh(); }
      });

      function refresh() {
        P.redraw();
        var a = P.get('a'), b = P.get('b');
        var isOne = G.near(a, c(1, 0), 0.04);
        var unit = Math.abs(G.abs(a) - 1) < 0.04;
        var posReal = Math.abs(a.y) < 0.04 && a.x > 0.04;
        var zeroB = G.abs(b) < 0.08;
        var name;
        if (G.abs(a) < 0.05) name = 'not a transformation — a = 0 collapses the plane to a point';
        else if (isOne && zeroB) name = 'the identity';
        else if (isOne) name = 'a translation by b';
        else if (unit && zeroB) name = 'a rotation about the origin';
        else if (posReal && zeroB) name = 'a dilation about the origin';
        else if (unit) name = 'a rotation about the fixed point';
        else if (posReal) name = 'a dilation about the fixed point';
        else name = 'a rotation and dilation about the fixed point';

        var denom = G.sub(c(1, 0), a);
        var fp = G.abs(denom) > 0.04 ? G.str(G.div(b, denom)) : 'runs off to infinity';
        G.say('d7-linear-out',
          '<div class="q"><b>a</b><span>' + G.str(a) + ' &nbsp;(|a| = ' + G.num(G.abs(a), 2)
          + ', arg = ' + G.num(G.arg(a) * 180 / Math.PI, 0) + '°)</span></div>' +
          '<div class="q"><b>b</b><span>' + G.str(b) + '</span></div>' +
          '<div class="q"><b>fixed point b/(1−a)</b><span>' + fp + '</span></div>' +
          '<div class="q hit" style="grid-column:1/-1"><b>this map is</b><span>' + name + '</span></div>');
      }
      refresh();
    })();

    /* ---- composition, and whether order matters ---- */
    (function () {
      // Deliberately no second rotation about a different centre: composing two
      // such rotations is Exercise 3.1.4, on this section's problem set.
      var MAPS = {
        rot: {
          label: 'rotate 120° about 0',
          f: function (z) { return G.mul(G.expi(2 * Math.PI / 3), z); }
        },
        shiftA: { label: 'translate by 2 − i', f: function (z) { return G.add(z, c(2, -1)); } },
        shiftB: { label: 'translate by −1 + 2i', f: function (z) { return G.add(z, c(-1, 2)); } },
        dil: { label: 'dilate by 1.6 about 0', f: function (z) { return G.scale(z, 1.6); } }
      };
      var first = 'rot', second = 'shiftA';

      var P = G.plane('d7-comp', {
        span: 16, center: c(1, 1), height: 400,
        draw: function (p) {
          p.grid(); p.axes();
          var f = MAPS[first].f, g = MAPS[second].f;

          p.poly(FLAG, { closed: true, color: G.colors.blue, width: 2.2, fill: G.colors.blue });
          p.poly(FLAG.map(f), { closed: true, color: '#c9ced4', width: 1.6 });
          p.poly(FLAG.map(function (z) { return g(f(z)); }),
            { closed: true, color: G.colors.orange, width: 2.6, fill: G.colors.orange });
          p.poly(FLAG.map(function (z) { return f(g(z)); }),
            { closed: true, color: G.colors.violet, width: 2.2, dash: [6, 4] });
        }
      });

      function refresh() {
        P.redraw();
        // Do the two orders agree? Test on the shape's vertices.
        var f = MAPS[first].f, g = MAPS[second].f;
        var same = FLAG.every(function (z) { return G.near(g(f(z)), f(g(z)), 1e-9); });
        G.say('d7-comp-out',
          '<div class="q"><b>the composite</b><span>' + MAPS[second].label + ' ∘ ' + MAPS[first].label
          + '</span></div>' +
          '<div class="q ' + (same ? 'hit' : 'miss') + '"><b>do the two orders agree?</b><span>'
          + (same ? 'yes — these two commute' : 'no — the dashed copy lands elsewhere') + '</span></div>');
      }

      ['d7-first', 'd7-second'].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('change', function () {
          first = document.getElementById('d7-first').value;
          second = document.getElementById('d7-second').value;
          refresh();
        });
      });
      refresh();
    })();
  })();
</script>
