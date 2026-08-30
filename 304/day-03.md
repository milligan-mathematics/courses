---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 3: The Plane, With Arithmetic"
day: 3
chapter_number: 2
chapter: "The Complex Plane"
day_title: "The Plane, With Arithmetic"
blurb: "We are not adopting complex numbers because we need to solve polynomials. We are adopting them because C is the plane, and it comes with a multiplication that moves the plane around."
reading: "Section 2.1, complex numbers as ordered pairs through the arithmetic examples"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The one formula you will use every single day</h2>

  <p>Your reading defines the modulus \(|z| = \sqrt{x^2+y^2}\) and notes it gives the distance from \(z\) to
    the origin. Combine that with the observation about subtraction &mdash; that \(z - w\) is represented by
    the vector <em>from \(w\) to \(z\)</em> &mdash; and you get the workhorse of this entire course:</p>

  \[ |z - w| = \text{the Euclidean distance between } z \text{ and } w. \]

  <p>Drag both points. Watch the vector and the number.</p>

  <canvas class="plot g304" id="d3-dist"></canvas>
  <div class="drag-hint">Drag either point.</div>
  <div class="readout cols" id="d3-dist-out"></div>

  <p>It doesn't look like much. Here is what it buys you, in the order you'll meet it:</p>

  <ul>
    <li>\(|z - z_0| = r\) is a circle &mdash; the points at distance \(r\) from \(z_0\). One symbol for a
      conic section.</li>
    <li>\(|z - \gamma| = |z - \beta|\) is a line &mdash; the points equidistant from two others.</li>
    <li>\(|z-z_0|\cdot|z^*-z_0| = r^2\) defines inversion in a circle, the central transformation of
      Chapter 3.</li>
    <li>\(|z-p| = k|z-q|\) defines the circles of Apollonius, which turn out to be the coordinate grid for
      every M&ouml;bius transformation with two fixed points.</li>
  </ul>

  <p>All four are one modulus of one difference. Nothing else in Chapter 2 will pay off this well, so it's
    worth over-learning: <strong>a difference is a displacement, and its modulus is a distance.</strong></p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Multiplication is a motion</h2>

  <p>Addition is easy to see &mdash; it slides everything by a fixed vector, and your reading draws it as
    vector addition. Multiplication is the interesting one, and it's the reason we're using \(\mathbb{C}\) and
    not just \(\mathbb{R}^2\), which has no multiplication worth having.</p>

  <p>Below, a shape sits in the plane. Drag \(a\), and the orange copy is the image of that shape under
    \(z \mapsto a\cdot z\) &mdash; every point of it multiplied by \(a\).</p>

  <canvas class="plot g304" id="d3-mult"></canvas>
  <div class="drag-hint">Drag the point \(a\). The shape follows.</div>
  <div class="legend">
    <span class="blue">the shape</span>
    <span class="orange">its image under \(z \mapsto az\)</span>
  </div>

  <p>Things to try, and what to look for:</p>

  <ul>
    <li>Put \(a\) on the positive real axis. The shape doesn't turn &mdash; it only grows and shrinks.</li>
    <li>Put \(a\) on the unit circle. The shape doesn't change size &mdash; it only turns.</li>
    <li>Put \(a\) exactly at \(i\). The shape makes a quarter turn. Then imagine doing it again: two quarter
      turns is a half turn, which is multiplication by \(-1\). <strong>That is what
        \(i^2 = -1\) means geometrically</strong>, and it is a much better reason to believe it than "because
      we said so."</li>
    <li>Drag \(a\) toward the origin and watch the whole picture collapse. Now you can see why we will always
      insist \(a \neq 0\) when we call \(T(z) = az+b\) a transformation.</li>
  </ul>

  <p>Notice what the shape never does: it never gets sheared, never gets reflected, never comes out with its
    corners at different angles. Multiplication by a fixed \(a\) turns and scales, and does nothing else. In
    Chapter 3 that observation gets a name &mdash; multiplication is a rotation composed with a dilation
    &mdash; and it becomes half of every transformation we study.</p>

  <p>Which rotation, and which scale factor? You can already guess from the picture. Tomorrow's polar form
    turns the guess into a formula.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>The oldest trap in complex arithmetic</h2>

  <p>Here's an argument that \(1 = -1\). Every line of it is a manipulation you have done a hundred times.</p>

  <p><strong>Click the step that isn't allowed.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">By definition, \(i\) satisfies \(i^2 = -1\).</button>
      <button class="fline" type="button">So \(i = \sqrt{-1}\), and therefore
        \(i^2 = \sqrt{-1}\cdot\sqrt{-1}\).</button>
      <button class="fline" type="button">For any \(a\) and \(b\), \(\sqrt{a}\cdot\sqrt{b} = \sqrt{ab}\), so
        \(\sqrt{-1}\cdot\sqrt{-1} = \sqrt{(-1)(-1)}\).</button>
      <button class="fline" type="button">\((-1)(-1) = 1\), so \(\sqrt{(-1)(-1)} = \sqrt{1} = 1\).</button>
      <button class="fline" type="button">Chaining these together, \(-1 = i^2 = 1\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Fine &mdash; this is the definition.</strong> Your reading builds \(\mathbb{C}\) as ordered
        pairs with \(i = (0,1)\), and checks that \((0,1)\cdot(0,1) = (-1,0)\) using the multiplication rule.
        Nothing suspicious here.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Sloppy, but not yet fatal.</strong> The notation \(\sqrt{-1}\) is doing something dishonest:
        \(-1\) has <em>two</em> square roots in \(\mathbb{C}\), namely \(i\) and \(-i\), and neither has any
        claim to be "the" one. In \(\mathbb{R}\) you break the tie by taking the non-negative root, but
        \(\mathbb{C}\) has no notion of non-negative, so there is no tie-breaker.</p>
      <p>This is a warning sign rather than the error itself, though. The actual damage is done on the next
        line.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>This is the step that fails, and the reason is more interesting than "you can't do that with
          negatives."</strong></p>
      <p>The rule \(\sqrt{a}\sqrt{b} = \sqrt{ab}\) is a theorem about non-negative reals, and its proof leans
        entirely on there being a well-defined choice of root. Over \(\mathbb{C}\), "the square root" is not a
        function &mdash; every non-zero number has exactly two square roots and no principled way to pick one
        that respects multiplication.</p>
      <p>Watch it fail concretely. Section 2.4 shows that \(z^2 = z_0\) has solutions
        \(\pm\sqrt{r_0}e^{i\theta_0/2}\), so squaring <em>halves the angle</em> when you invert it. Now,
        \(-1\) sits at angle \(\pi\); halving gives \(\pi/2\), which is \(i\). But \((-1)(-1)\) sits at angle
        \(2\pi\), and halving <em>that</em> gives \(\pi\), which is \(-1\), not \(1\). The two routes disagree
        because \(\pi\) and \(2\pi\) are different angles even though they name the same point after you
        finish. Angles are only defined modulo \(2\pi\), and halving them is not.</p>
      <p>The practical consequence for this course: <strong>never write \(\sqrt{\phantom{x}}\) of a complex
          number and expect it to be a single thing.</strong> Section 2.4's quadratic formula produces
        \(\pm\) and means it, and Section 3.5 will find <em>two</em> fixed points from a quadratic for exactly
        this reason.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>True as a statement about positive reals.</strong> \((-1)(-1)\) really is \(1\), and \(1\)
        really does have \(1\) as a square root. The problem is that line 3 had no right to hand you
        \(\sqrt{(-1)(-1)}\) in the first place.</p>
      <p>Notice also the second thing this line quietly does: it writes \(\sqrt{1} = 1\), forgetting that
        \(-1\) is also a square root of \(1\). Take that branch instead and the chain gives \(-1 = -1\), which
        is fine. The whole illusion depends on choosing roots inconsistently and not saying so.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>The bookkeeping is right; the conclusion is false, so something upstream must be.</strong>
        This is worth doing deliberately whenever an argument produces nonsense: accept that the last line
        follows, and go hunting. Here the chain is only as good as line 3.</p>
    </div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>Why you will never see \(z \lt w\) in this course</h2>

  <p>Here is something your reading doesn't mention but that you should know before you accidentally rely on
    it. In \(\mathbb{R}\) you can compare any two numbers. In \(\mathbb{C}\) you cannot &mdash; not because
    nobody has found a way, but because no way exists that's compatible with the arithmetic.</p>

  <p>Suppose someone hands you an ordering \(\lt\) on \(\mathbb{C}\) with the two properties any useful
    ordering has: any two distinct numbers are comparable, and</p>

  \[ \text{if } 0 \lt a \text{ and } 0 \lt b, \text{ then } 0 \lt a+b \text{ and } 0 \lt ab. \]

  <p>Work through what happens to \(i\).</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">First, a warm-up we'll need twice: show that in any such ordering,
          \(0 \lt 1\). (Suppose not, and use the multiplication rule.)</div>
        <div class="sstep-body">
          <p>Since \(1 \neq 0\), comparability gives either \(0 \lt 1\) or \(1 \lt 0\). Suppose
            \(1 \lt 0\). Then \(0 \lt -1\), and the multiplication rule gives
            \(0 \lt (-1)(-1) = 1\). So \(0 \lt 1\) and \(1 \lt 0\) at once, which is a contradiction.
            Hence \(0 \lt 1\).</p>
          <p>The same argument shows more generally that a non-zero square is always positive: whichever side
            of \(0\) the number \(a\) is on, \(a^2\) ends up positive.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now take \(i\). It isn't \(0\), so it's comparable to \(0\). Suppose first
          that \(0 \lt i\). What goes wrong?</div>
        <div class="sstep-body">
          <p>Multiply \(0 \lt i\) by itself using the rule: \(0 \lt i \cdot i = -1\).</p>
          <p>But we just proved \(0 \lt 1\), which forces \(-1 \lt 0\). So \(-1\) is both positive and
            negative. Contradiction.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">The other case: suppose \(i \lt 0\). Does the same thing happen?</div>
        <div class="sstep-body">
          <p>Yes, and it takes one extra move. From \(i \lt 0\) we get \(0 \lt -i\). Now multiply
            \(-i\) by itself: \(0 \lt (-i)(-i) = i^2 = -1\). Same contradiction as before.</p>
          <p>Both cases fail, and \(i \neq 0\), so no such ordering exists.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">So what do we do instead? Every inequality in this course is going to be an
          inequality about <em>something</em>. What?</div>
        <div class="sstep-body">
          <p><strong>The modulus.</strong> \(|z|\) is a real number, so \(|z| \lt |w|\) makes sense and
            \(z \lt w\) does not. Every inequality you will write this semester &mdash; every one &mdash; is
            about a modulus, an argument, a real part, an imaginary part, or a distance. Never about a complex
            number itself.</p>
          <p>This is not a technicality; it's a habit that will save you. When you find yourself wanting to
            say a complex number is "bigger," stop and ask which real quantity you actually mean. The answer
            is almost always \(|z|\), and being forced to say so usually clarifies the argument.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Two habits of mind</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Your reading defines a complex number as an ordered pair \((x,y)\) and only afterwards
      writes it as \(x+yi\). Why start with the pair?</p>
    <button class="mc-opt" data-key="a">Because \(x + yi\) is ambiguous until you know what \(i\) is.</button>
    <button class="mc-opt" data-key="b">Because ordered pairs are easier to add.</button>
    <button class="mc-opt" data-key="c">Because it makes \(\mathbb{C}\) <em>be</em> the plane, rather than
      something that happens to be drawable in it.</button>
    <button class="mc-opt" data-key="d">Because the pair notation is what we'll use for the rest of the
      course.</button>

    <div class="mc-fb" data-key="a">
      <p>There is a real logical point nearby &mdash; defining \(i\) as "the number whose square is \(-1\)"
        assumes such a number exists, which is exactly what needs constructing &mdash; and the ordered-pair
        definition does dispose of it cleanly. But that's a foundational tidiness issue, and it isn't why
        <em>this</em> book does it.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>They aren't, particularly; componentwise addition of pairs and collecting like terms in \(x+yi\) are
        the same computation written twice.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Yes &mdash; and given the title of the book, this is the whole point. We are not going to use
        \(\mathbb{C}\) to solve polynomials. We are going to use it as the <em>space our geometry happens
          in</em>. The set \(\mathbb{C}\) is literally the set of points of the plane, so a "transformation of
        \(\mathbb{C}\)" is a motion of the plane, a "circle in \(\mathbb{C}\)" is a circle, and the equation
        \(|z-z_0|=r\) is a geometric object rather than a description of one.</p>
      <p>What we gain by the identification is that the plane now has a multiplication &mdash; and as you saw
        above, multiplication moves the plane. That is the leverage. \(\mathbb{R}^2\) has no such operation,
        and geometry done in \(\mathbb{R}^2\) needs matrices to say what a single complex constant says here.
      </p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>The opposite, actually &mdash; you'll almost never see \((x,y)\) again after this section. Cartesian
        form \(x+yi\) and, from tomorrow, polar form \(re^{i\theta}\) are what get used. The pair definition
        is scaffolding that gets kicked away, which makes the question of why it's there at all worth
        asking.</p>
    </div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">You want to describe "the set of points closer to \(3+i\) than to \(-2\)". Which expression
      says it?</p>
    <button class="mc-opt" data-key="a">\(|z| \lt |3+i| - |-2|\)</button>
    <button class="mc-opt" data-key="b">\(|z - (3+i)| \lt |z + 2|\)</button>
    <button class="mc-opt" data-key="c">\(z - (3+i) \lt z + 2\)</button>
    <button class="mc-opt" data-key="d">\(|z - (3+i)| \lt |{-2}|\)</button>

    <div class="mc-fb" data-key="a">
      <p>This compares \(|z|\) &mdash; the distance from \(z\) to the <em>origin</em> &mdash; with a fixed
        number computed from the two given points. It's a statement about a single circle centred at \(0\),
        and it has nothing to do with either of the points in the question.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Right. "Distance from \(z\) to \(3+i\)" is \(|z-(3+i)|\); "distance from \(z\) to \(-2\)" is
        \(|z-(-2)| = |z+2|\); "closer to the first" is the inequality between them.</p>
      <p>Worth noticing what the boundary case is. Replace \(\lt\) with \(=\) and you get the set of points
        equidistant from two given points &mdash; which Theorem 2.4.2 will tell you is a straight line, the
        perpendicular bisector. So this inequality describes an open half-plane, and you can see which one
        without any algebra at all.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>This is the error the scaffold above was written to prevent: it compares two <em>complex numbers</em>
        with \(\lt\), and no such comparison exists. Whenever you want an inequality, find the real quantity
        you actually mean &mdash; here, a distance &mdash; and put the modulus bars in.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>The left side is right: it is the distance from \(z\) to \(3+i\). The right side is just the number
        \(2\), so this says "within \(2\) units of \(3+i\)" &mdash; an open disk. The point \(-2\) has been
        used as a <em>length</em> rather than as a place. Watch for this: in \(\mathbb{C}\) the same symbol
        can be a location or, after modulus bars, a size, and the two roles are easy to mix up.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>In the multiplication activity, one position of \(a\) leaves the shape completely unmoved. Which, and
      why is that reassuring?</li>
    <li>Multiplication by \(i\) is a quarter turn about the origin. What single complex operation would you
      guess is a quarter turn about the point \(2+2i\) instead? You don't need to be right &mdash; you need a
      guess you can defend, and Section 3.1 will tell you whether you had it.</li>
    <li>We showed \(\mathbb{C}\) admits no ordering compatible with its arithmetic. We are about to build a
      whole geometry on \(\mathbb{C}\) anyway. What do we lose by having no order, and what do we still
      have?</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    /* ---- |z - w| is the distance ---- */
    (function () {
      var P = G.plane('d3-dist', {
        span: 11, height: 360,
        handles: [
          { name: 'z', z: c(3, 2), color: G.colors.blue, label: 'z' },
          { name: 'w', z: c(-2, -1.4), color: G.colors.violet, label: 'w' }
        ],
        draw: function (p) {
          var z = p.get('z'), w = p.get('w');
          p.grid(); p.axes();

          // The two position vectors, faintly, and the difference vector.
          p.arrow(c(0, 0), z, { color: '#bfe4f6', width: 1.8 });
          p.arrow(c(0, 0), w, { color: '#ded0f7', width: 1.8 });
          p.arrow(w, z, { color: G.colors.orange, width: 3 });

          // The difference drawn again from the origin, so it is visibly the
          // same arrow in a different place.
          p.arrow(c(0, 0), G.sub(z, w), { color: G.colors.orange, width: 1.6, dash: [5, 4] });
          p.label(G.sub(z, w), 'z − w', { color: G.colors.orange, dx: 8, dy: -8 });

          // Midpoint label carrying the distance.
          var mid = G.scale(G.add(z, w), 0.5);
          p.label(mid, '|z − w| = ' + G.num(G.abs(G.sub(z, w)), 2),
            { color: G.colors.orange, dx: 8, dy: 18 });
        },
        onDrag: function (p) { refresh(p); }
      });

      function refresh(p) {
        var z = p.get('z'), w = p.get('w');
        G.say('d3-dist-out',
          '<div class="q"><b>z</b><span>' + G.str(z) + '</span></div>' +
          '<div class="q"><b>w</b><span>' + G.str(w) + '</span></div>' +
          '<div class="q"><b>z − w</b><span>' + G.str(G.sub(z, w)) + '</span></div>' +
          '<div class="q hit"><b>|z − w|</b><span>' + G.num(G.abs(G.sub(z, w)), 3) + '</span></div>');
      }
      refresh(P);
    })();

    /* ---- multiplication by a fixed a, acting on a shape ---- */
    (function () {
      // An asymmetric shape, so that turning and reflecting look different.
      var SHAPE = [
        c(0.4, 0.3), c(2.0, 0.3), c(2.0, 0.85), c(1.05, 0.85),
        c(1.05, 1.35), c(1.85, 1.35), c(1.85, 1.9), c(1.05, 1.9),
        c(1.05, 2.7), c(0.4, 2.7)
      ];

      G.plane('d3-mult', {
        span: 11, height: 380,
        handles: [{ name: 'a', z: c(0.85, 0.75), color: G.colors.orange, label: 'a' }],
        draw: function (p) {
          var a = p.get('a');
          p.grid(); p.axes();

          p.circle(c(0, 0), 1, { color: '#e0e3e7', width: 1, dash: [4, 4] });

          p.poly(SHAPE, { closed: true, color: G.colors.blue, width: 2.4, fill: G.colors.blue });
          p.poly(SHAPE.map(function (z) { return G.mul(a, z); }),
            { closed: true, color: G.colors.orange, width: 2.4, fill: G.colors.orange });

          // Mark one vertex and its image, so the correspondence is visible.
          p.dot(SHAPE[0], { color: G.colors.blue, r: 4 });
          p.dot(G.mul(a, SHAPE[0]), { color: G.colors.orange, r: 4 });
        }
      });
    })();
  })();
</script>
