---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 6: Lines and Circles, Written in z"
day: 6
chapter_number: 2
chapter: "The Complex Plane"
day_title: "Lines and Circles, Written in z"
blurb: "Every figure we care about for the rest of the course is a line or a circle. Today they get complex equations — and the two equations start to look uncomfortably alike."
reading: "Section 2.4, line and circle equations, quadratics, and complex expressions as regions"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Two equations, one plane</h2>

  <p>Section 2.4 ends with a summary box holding the two equations everything else is built on:</p>

  \[ \alpha z + \overline{\alpha z} + d = 0 \quad\text{(a line)} \qquad\qquad |z - z_0| = r \quad\text{(a
  circle)} \]

  <p>Drag the parameters and watch what each one controls. The point of this activity is <em>not</em> to
    verify the equations &mdash; it's to build the reflex that when you see \(\alpha\) you think "direction"
    and when you see \(z_0\) you think "centre."</p>

  <div class="toggles">
    <button class="btn411 ghost on" type="button" data-eq="line">the line equation</button>
    <button class="btn411 ghost" type="button" data-eq="circle">the circle equation</button>
  </div>

  <canvas class="plot g304" id="d6-eq"></canvas>
  <div class="drag-hint">Drag the coloured point.</div>
  <div class="ctl-row" id="d6-drow">
    <div class="ctl">
      <label for="d6-d">the constant <span id="d6-dlabel">d</span></label>
      <input type="range" id="d6-d" min="-6" max="6" step="0.05" value="-2">
    </div>
  </div>
  <div class="readout cols" id="d6-eq-out"></div>

  <p>Two features of the line equation are worth pausing on, because they will come back transformed.</p>

  <p><strong>\(\alpha\) is perpendicular to the line.</strong> Drag \(\alpha\) around and watch: the line
    always sits at right angles to it. That's because \(\alpha z + \overline{\alpha z}\) is
    \(2\,\mathrm{Re}(\alpha z)\), which measures how far along the \(\overline{\alpha}\) direction the point
    \(z\) is. Setting it to a constant fixes that distance, which is exactly what a line perpendicular to
    \(\alpha\) does.</p>

  <p><strong>The equation is real, but \(\alpha\) isn't.</strong> The expression \(\alpha z +
    \overline{\alpha z}\) is a number plus its own conjugate, so it's always real, and \(d\) is real. This is
    a real equation dressed in complex clothing, and that's what lets one equation with a complex constant do
    the work of \(ax + by + d = 0\) with two real ones.</p>

  <p>Now look at the two equations side by side once more. They do not resemble each other at all: one is
    linear in \(z\) and \(\overline{z}\), the other has modulus bars. Square out the circle equation, though
    &mdash; \(|z-z_0|^2 = (z-z_0)\overline{(z-z_0)}\) &mdash; and you get</p>

  \[ z\overline{z} - \overline{z_0}z - z_0\overline{z} + (|z_0|^2 - r^2) = 0. \]

  <p>Now compare. The line has no \(z\overline{z}\) term; the circle does. Everything else has the same shape.
    Section 3.2 is going to write both at once as</p>

  \[ c\,z\overline{z} + \alpha z + \overline{\alpha}\,\overline{z} + d = 0 \]

  <p>and call it a <strong>cline</strong>, with \(c = 0\) giving a line and \(c \neq 0\) giving a circle. You
    have already done most of that work today.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Sum, product, ratio &mdash; only one of them is a cline</h2>

  <p>Fix two points, \(-w\) and \(w\). For a point \(z\), you have two distances to play with:
    \(|z + w|\) and \(|z - w|\). There are three obvious things to hold constant, and they give three
    completely different curves.</p>

  <div class="toggles">
    <button class="btn411 ghost on" type="button" data-reg="0">\(|z-w| + |z+w| = 5\)</button>
    <button class="btn411 ghost" type="button" data-reg="1">\(|z-w|\cdot|z+w| = 4\)</button>
    <button class="btn411 ghost" type="button" data-reg="2">\(|z-w| = 2\,|z+w|\)</button>
  </div>

  <canvas class="plot g304" id="d6-region"></canvas>
  <div class="drag-hint">Drag \(w\). The two focal points are \(w\) and \(-w\).</div>
  <div class="readout" id="d6-region-out"></div>

  <p><strong>Constant sum</strong> is an ellipse &mdash; the pins-and-string construction from high school.
    Drag \(w\) outward and the ellipse gets thinner; push the two points past a separation of \(5\) and the
    curve disappears entirely, because no point can have distances summing to less than the gap between the
    foci.</p>

  <p><strong>Constant product</strong> is a <em>Cassini oval</em>. Drag \(w\) out and the curve pinches in the
    middle, splits into two separate loops, and then shrinks. Nothing in this course depends on Cassini ovals;
    they are here to make the point that conditions built from moduli can perfectly well describe things far
    stranger than lines and circles.</p>

  <p><strong>Constant ratio</strong> is the one that matters, and the picture should surprise you: it is a
    <em>circle</em>. Always. Drag \(w\) anywhere and it stays a circle &mdash; it just moves and resizes. The
    ratio \(2\) is not special either; every positive ratio gives a circle, except the ratio \(1\), which
    gives a line.</p>

  <p>That is Theorem 3.2.14, the <strong>Apollonian Circles Theorem</strong>, and it's coming in Section 3.2.
    It is worth being startled by it now. Two of the three natural conditions produce genuinely new curves.
    The third produces nothing but clines &mdash; and it will turn out to be the coordinate system that every
    M&ouml;bius transformation with two fixed points moves points along.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>Why a complex quadratic always has a root</h2>

  <p>Your reading notes, almost in passing, that "the complex quadratic equation \(\alpha z^2 + \beta z +
    \gamma = 0\) will have one or two solutions. This marks an important difference from the real case."</p>

  <p>That sentence is doing a lot of work, and it's about to matter enormously: in Section 3.5 the fixed
    points of a M&ouml;bius transformation come from a quadratic, and the classification of M&ouml;bius
    transformations into elliptic, parabolic and hyperbolic is <em>entirely</em> a statement about that
    quadratic's roots. So it's worth knowing why complex quadratics never fail.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">The quadratic formula gives \(z = \frac{-\beta \pm \sqrt{\beta^2 -
          4\alpha\gamma}}{2\alpha}\). Over the reals this fails when the discriminant is negative. What
          exactly fails, and does that failure happen over \(\mathbb{C}\)?</div>
        <div class="sstep-body">
          <p>What fails over \(\mathbb{R}\) is the square root: a negative real number has no real square
            root, because every real square is non-negative.</p>
          <p>Over \(\mathbb{C}\) that obstruction is gone. Example 2.4.3 shows why: writing
            \(z_0 = r_0e^{i\theta_0}\), the equation \(z^2 = z_0\) is solved by
            \(\pm\sqrt{r_0}\,e^{i\theta_0/2}\) &mdash; take the (real, non-negative) square root of the
            modulus, and halve the argument. Both operations are always available. Every complex number has a
            square root.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">So the formula always produces something. When does it produce
          <em>one</em> solution rather than two?</div>
        <div class="sstep-body">
          <p>Exactly when \(\beta^2 - 4\alpha\gamma = 0\), so that \(+\sqrt{\phantom{x}}\) and
            \(-\sqrt{\phantom{x}}\) coincide and both branches give \(z = -\beta/(2\alpha)\).</p>
          <p>Note how different this is from the real case. Over \(\mathbb{R}\) there are three outcomes
            (two roots, one root, no roots) governed by the <em>sign</em> of the discriminant. Over
            \(\mathbb{C}\) there are two outcomes governed by whether the discriminant is <em>zero</em>.
            Sign has stopped being a meaningful question &mdash; as we established on Day 3, \(\mathbb{C}\)
            has no order &mdash; and "zero or not" is all that's left.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now look ahead. A M&ouml;bius transformation \(T(z) = \frac{az+b}{cz+d}\)
          has fixed points where \(T(z) = z\). Clear the denominator and see what kind of equation that
          is.</div>
        <div class="sstep-body">
          <p>\(az + b = z(cz+d)\), so \(cz^2 + (d-a)z - b = 0\): a complex quadratic, with
            \(\alpha = c\), \(\beta = d-a\), \(\gamma = -b\).</p>
          <p>By the previous step it has one or two roots, never zero. So <em>every</em> M&ouml;bius
            transformation with \(c\neq 0\) has at least one fixed point, and at most two. That's most of
            Theorem 3.4.6 (the "or all points" case is the identity, and the \(c=0\) case adds
            \(\infty\)).</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Last step, and it's the one to remember. What geometric distinction is the
          discriminant \((d-a)^2 + 4cb\) going to be making?</div>
        <div class="sstep-body">
          <p><strong>Two fixed points or one.</strong> And in Section 3.5 those two cases get completely
            different pictures:</p>
          <ul>
            <li><em>Two</em> fixed points \(p, q\): the map pushes points along a coordinate system of clines
              built from \(p\) and \(q\) &mdash; elliptic, hyperbolic, or loxodromic depending on a further
              constant.</li>
            <li><em>One</em> fixed point \(p\): the map is <em>parabolic</em>, pushing points along clines all
              tangent to each other at \(p\).</li>
          </ul>
          <p>So a discriminant vanishing &mdash; an algebraic accident &mdash; is what separates two entirely
            different kinds of motion of the plane. Worth knowing three weeks early, because when Section 3.5
            starts talking about normal forms it can otherwise look like unmotivated case analysis.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Recognising figures from equations</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">What is the set of \(z\) satisfying \(z\overline{z} = 9\)?</p>
    <button class="mc-opt" data-key="a">A line.</button>
    <button class="mc-opt" data-key="b">The two points \(3\) and \(-3\).</button>
    <button class="mc-opt" data-key="c">The circle of radius \(3\) centred at the origin.</button>
    <button class="mc-opt" data-key="d">Nothing &mdash; \(z\overline{z}\) is complex and \(9\) is
      real.</button>

    <div class="mc-fb" data-key="a">
      <p>Lines come from equations that are <em>linear</em> in \(z\) and \(\overline{z}\) &mdash; the shape
        \(\alpha z + \overline{\alpha z} + d = 0\), with no product of the two. This equation has \(z\) and
        \(\overline{z}\) multiplied together, which is exactly the term that makes a cline curve.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Those two points do satisfy it, but so does \(3i\), and so does \(\frac{3}{\sqrt2}(1+i)\). The trap
        is reading \(z\overline{z} = 9\) as "\(z^2 = 9\)" &mdash; but \(z\overline{z}\) and \(z^2\) are
        completely different animals. The first is always a non-negative real; the second is generally
        complex.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Right. \(z\overline{z} = |z|^2\), so the equation says \(|z| = 3\): every point at distance \(3\)
        from the origin.</p>
      <p>Worth filing the pattern rather than the answer. In the cline equation \(cz\overline{z} + \alpha z +
        \overline{\alpha}\overline{z} + d = 0\), this is the case \(c = 1\), \(\alpha = 0\), \(d = -9\).
        The \(\alpha\) term is what moves the centre off the origin, and here there isn't one.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>\(z\overline{z}\) is always real &mdash; it equals \(|z|^2\). This is the single most useful identity
        in Chapter 2, and it's what makes the cline equation's \(c\) and \(d\) able to be real numbers while
        \(\alpha\) is complex.</p>
    </div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Theorem 2.4.2 says any line can be written \(|z-\gamma| = |z-\beta|\). Given a line, how
      many valid choices of the pair \(\gamma, \beta\) are there?</p>
    <button class="mc-opt" data-key="a">Exactly one.</button>
    <button class="mc-opt" data-key="b">Infinitely many &mdash; any pair of points the line perpendicularly
      bisects.</button>
    <button class="mc-opt" data-key="c">Exactly two, one for each side of the line.</button>
    <button class="mc-opt" data-key="d">None, unless the line passes through the origin.</button>

    <div class="mc-fb" data-key="a">
      <p>Try it on the real axis: \(\gamma = i, \beta = -i\) works, and so does \(\gamma = 5i, \beta = -5i\),
        and so does \(\gamma = 3+i, \beta = 3-i\). The representation is far from unique.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Right &mdash; and the phrase to hold onto is the one in the answer. Take any point \(\gamma\) off the
        line and let \(\beta\) be its mirror image across the line; the line is then the perpendicular
        bisector of the segment \(\gamma\beta\), which is precisely the set of points equidistant from the
        two.</p>
      <p>That relationship has a name you'll meet in Section 3.2: \(\gamma\) and \(\beta\) are
        <strong>symmetric points</strong> with respect to the line. Inversion in a circle generalises exactly
        this &mdash; and Theorem 3.2.12, that inversion preserves symmetry points, is the reason M&ouml;bius
        transformations are as well-behaved as they are. Today's non-uniqueness is tomorrow's structure.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>There's a real asymmetry here worth noticing &mdash; the two points do sit on opposite sides &mdash;
        but swapping \(\gamma\) and \(\beta\) gives the same equation, and there are infinitely many such
        pairs at different distances from the line.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>The origin plays no special role. Take the vertical line \(x=4\): the points \(3\) and \(5\) are
        equidistant from every point on it, so \(|z-3| = |z-5|\) describes it. Nothing about the construction
        needs the line to pass through anywhere in particular.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Write down, without looking, the general cline equation Section 3.2 is going to use, and say which
      term is the one that decides between line and circle.</li>
    <li>Take the constant-ratio circle from the activity. As the ratio runs from just above \(0\) up through
      \(1\) and on toward \(\infty\), the circle sweeps out a whole family. Describe roughly what that family
      looks like &mdash; where the circles are small, where they are big, and what sits at the two
      extremes.</li>
    <li>Of constant sum, constant product, and constant ratio of two distances, only one gave a cline. Be
      ready to say what happens to the constant-ratio curve when the ratio is exactly \(1\), and why that case
      is the odd one out.</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    /* ---- the line equation and the circle equation ---- */
    (function () {
      var mode = 'line', d = -2;

      var P = G.plane('d6-eq', {
        span: 12, height: 380,
        handles: [
          { name: 'a', z: c(1.4, 0.9), color: G.colors.violet, label: 'α' },
          { name: 'z0', z: c(-1.2, 1.1), color: G.colors.violet, label: 'z₀' }
        ],
        draw: function (p) {
          p.grid(); p.axes();
          var a = p.get('a'), z0 = p.get('z0');

          if (mode === 'line') {
            p.handle('a').hidden = false;
            p.handle('z0').hidden = true;
            // alpha z + conj(alpha z) + d = 0  is  2 Re(alpha z) = -d, i.e. the
            // line perpendicular to conj(alpha) at signed distance -d/(2|alpha|).
            var m = G.abs2(a);
            if (m > 1e-6) {
              var foot = G.scale(G.conj(a), -d / (2 * m));
              var dir = c(-a.y, -a.x);          // perpendicular to conj(alpha)
              var L = G.abs(dir);
              p.line({ k: 'l', p: foot, d: G.scale(dir, 1 / L) },
                { color: G.colors.blue, width: 2.8 });
              p.arrow(c(0, 0), a, { color: G.colors.violet, width: 2.2 });
              p.seg(c(0, 0), foot, { color: G.colors.orange, width: 2, dash: [5, 4] });
              p.dot(foot, { color: G.colors.orange, r: 4.5 });
              p.label(foot, 'closest point to 0', { color: G.colors.orange, dx: 9, dy: 18, size: 12 });
            }
          } else {
            p.handle('a').hidden = true;
            p.handle('z0').hidden = false;
            var r = Math.max(0.15, d + 6.2);   // slider drives the radius here
            p.circle(z0, r, { color: G.colors.blue, width: 2.8, fill: G.colors.blue, fillAlpha: 0.06 });
            p.seg(z0, G.add(z0, c(r, 0)), { color: G.colors.orange, width: 2 });
            p.label(G.add(z0, c(r / 2, 0)), 'r = ' + G.num(r, 2),
              { color: G.colors.orange, dx: -10, dy: -8 });
            p.dot(z0, { color: G.colors.violet, r: 4.5 });
          }
        },
        onDrag: function () { refresh(); }
      });

      function refresh() {
        P.redraw();
        var a = P.get('a'), z0 = P.get('z0');
        if (mode === 'line') {
          var m = G.abs2(a);
          G.say('d6-eq-out',
            '<div class="q"><b>equation</b><span>αz + conj(αz) + d = 0</span></div>' +
            '<div class="q"><b>α</b><span>' + G.str(a) + '</span></div>' +
            '<div class="q"><b>d</b><span>' + G.num(d, 2) + '</span></div>' +
            '<div class="q"><b>distance from 0 to the line</b><span>'
            + (m > 1e-6 ? G.num(Math.abs(d) / (2 * Math.sqrt(m)), 3) : '—') + '</span></div>');
        } else {
          var r = Math.max(0.15, d + 6.2);
          G.say('d6-eq-out',
            '<div class="q"><b>equation</b><span>|z − z₀| = r</span></div>' +
            '<div class="q"><b>z₀</b><span>' + G.str(z0) + '</span></div>' +
            '<div class="q"><b>r</b><span>' + G.num(r, 2) + '</span></div>' +
            '<div class="q"><b>expanded</b><span>zz̄ − z̄₀z − z₀z̄ + ('
            + G.num(G.abs2(z0) - r * r, 2) + ') = 0</span></div>');
        }
      }

      G.slider('d6-d', function (v) { d = v; refresh(); });

      document.querySelectorAll('[data-eq]').forEach(function (b) {
        b.addEventListener('click', function () {
          document.querySelectorAll('[data-eq]').forEach(function (o) { o.classList.remove('on'); });
          b.classList.add('on');
          mode = b.getAttribute('data-eq');
          var lab = document.getElementById('d6-dlabel');
          if (lab) lab.textContent = mode === 'line' ? 'd' : 'r';
          refresh();
        });
      });
      refresh();
    })();

    /* ---- constant sum / product / ratio of the two distances ---- */
    (function () {
      var which = 0;
      var NAMES = [
        'Constant <b>sum</b> of the distances to w and −w: an <b>ellipse</b> with those two points as foci. '
        + 'It vanishes once the foci are more than 5 apart.',
        'Constant <b>product</b>: a <b>Cassini oval</b>. Watch it pinch and split as you drag w outward.',
        'Constant <b>ratio</b>: a <b>circle</b>, for every position of w and every ratio but 1. '
        + 'This is the Apollonian Circles Theorem, arriving three sections early.'
      ];

      // Each condition as f(z) = 0, so one level-set routine draws all three.
      function level(z, w) {
        var d1 = G.abs(G.sub(z, w)), d2 = G.abs(G.add(z, w));
        if (which === 0) return d1 + d2 - 5;
        if (which === 1) return d1 * d2 - 4;
        return d1 - 2 * d2;
      }

      var P = G.plane('d6-region', {
        span: 11, height: 380,
        handles: [{ name: 'w', z: c(1.7, 0.6), color: G.colors.violet, label: 'w' }],
        draw: function (p) {
          var w = p.get('w');
          p.grid(); p.axes();

          // Marching squares: mark every cell of a fine grid whose corners
          // straddle the zero level, which traces the curve without needing a
          // parametrisation for any of the three cases.
          var b = p.bounds(), st = p.span / 300, x, y;
          p.ctx.beginPath();
          for (x = b.x0; x <= b.x1; x += st) {
            for (y = b.y0; y <= b.y1; y += st) {
              var v0 = level(c(x, y), w);
              if (v0 * level(c(x + st, y), w) < 0 || v0 * level(c(x, y + st), w) < 0) {
                var sx = p.sx(c(x, y)), sy = p.sy(c(x, y));
                p.ctx.moveTo(sx, sy);
                p.ctx.lineTo(sx + 1.8, sy);
              }
            }
          }
          p.ctx.strokeStyle = G.colors.blue;
          p.ctx.lineWidth = 2.4;
          p.ctx.stroke();

          p.dot(G.neg(w), { color: G.colors.orange, r: 5, label: '−w' });
        },
        onDrag: function () { report(); }
      });

      function report() { G.say('d6-region-out', NAMES[which]); }

      document.querySelectorAll('[data-reg]').forEach(function (b) {
        b.addEventListener('click', function () {
          document.querySelectorAll('[data-reg]').forEach(function (o) { o.classList.remove('on'); });
          b.classList.add('on');
          which = parseInt(b.getAttribute('data-reg'), 10);
          P.redraw(); report();
        });
      });
      report();
    })();
  })();
</script>
