---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 10: Clines"
day: 10
chapter_number: 3
chapter: "Transformations"
day_title: "Clines"
blurb: "Lines and circles have been separate objects your whole life. Inversion doesn't respect the distinction, so we stop making it — and the merger turns out to simplify everything downstream."
reading: "Section 3.2, Definition 3.2.3 through Theorem 3.2.6"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>One equation, both shapes</h2>

  <p>Definition 3.2.3 puts lines and circles under a single equation:</p>

  \[ c\,z\overline{z} + \alpha z + \overline{\alpha}\,\overline{z} + d = 0, \]

  <p>with \(c, d\) real and \(\alpha\) complex. Take \(c = 0\) and you have a line; take \(c \neq 0\) and
    (usually) a circle. Drive the coefficients and watch one figure become the other.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d10-c">\(c\)</label>
      <input type="range" id="d10-c" min="-1.5" max="1.5" step="0.01" value="0.6">
    </div>
    <div class="ctl">
      <label for="d10-d">\(d\)</label>
      <input type="range" id="d10-d" min="-8" max="8" step="0.05" value="-3">
    </div>
  </div>

  <canvas class="plot g304" id="d10-cline"></canvas>
  <div class="drag-hint">Drag \(\alpha\). Slide \(c\) through zero.</div>
  <div class="readout cols" id="d10-cline-out"></div>

  <p>Slide \(c\) slowly toward zero from either side and watch the circle's radius grow. The curve flattens,
    straightens, and at \(c = 0\) it is a line &mdash; then bows back the other way. A line is what a circle
    looks like at the moment its radius passes through infinity.</p>

  <p>The reading's boxed formulas say the same thing in symbols. For \(c \neq 0\), the equation gives a circle
    centred at</p>

  \[ z_0 = \bigg(-\frac{\mathrm{Re}(\alpha)}{c}, \frac{\mathrm{Im}(\alpha)}{c}\bigg)
  \qquad\text{with}\qquad r = \sqrt{\frac{|\alpha|^2 - cd}{c^2}}, \]

  <p>and both have \(c\) in the denominator. Send \(c \to 0\) and the centre runs off to infinity while the
    radius does the same, at a matched rate that leaves a perfectly ordinary line behind.</p>

  <p>Two more things the sliders will show you if you go looking.</p>

  <p><strong>The condition \(|\alpha|^2 \gt cd\) is not decoration.</strong> Push \(d\) until the readout says
    the figure is degenerate. When \(|\alpha|^2 = cd\) the radius is \(0\) and the "circle" is a single point;
    when \(|\alpha|^2 \lt cd\) the radius would be imaginary and <em>no point of the plane satisfies the
      equation at all</em>. The equation is still there; its solution set is empty.</p>

  <p><strong>Scaling all four coefficients changes nothing.</strong> Multiply \(c, \alpha, d\) by the same
    non-zero real and you get the same figure &mdash; the equation is homogeneous. So a cline doesn't have
    <em>a</em> set of coefficients; it has a whole family of them, all proportional. Worth knowing before you
    try to prove two clines are equal by comparing coefficients.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>Exactly one cline through any three points</h2>

  <p>Theorem 3.2.4 says: <em>there exists a unique cline through any three distinct points in
      \(\mathbb{C}\).</em> Your reading states it and shows Figure 3.2.5, but the proof sits in a collapsed
    box you may not have opened. It's worth building, because the statement is doing something sneakier than
    it looks.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">First, why is the theorem false if you replace "cline" with "circle"? And
          false again if you replace it with "line"?</div>
        <div class="sstep-body">
          <p>Three <em>collinear</em> points lie on no circle at all &mdash; a circle meets a line in at most
            two points. And three points not on a common line lie on no line. Neither word works on its own;
            each one fails on exactly the cases the other handles.</p>
          <p>That's the first hint that "cline" is the natural object rather than a convenient abbreviation.
            The clean statement requires the merged notion.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now prove existence. Given distinct \(z_1, z_2, z_3\), split into the two
          cases and construct the cline in each.</div>
        <div class="sstep-body">
          <p><em>Collinear:</em> the line through them exists (through any two of them, and the third is on
            it by assumption). Done.</p>
          <p><em>Not collinear:</em> build the circumcircle, which is Figure 3.2.5. Take the perpendicular
            bisector of \(z_1z_2\) and the perpendicular bisector of \(z_2z_3\). Each is the set of points
            equidistant from its pair (Theorem 2.4.2). They are not parallel &mdash; if they were, the two
            segments would be parallel and the three points collinear &mdash; so they meet at a single point
            \(z_0\). That \(z_0\) is equidistant from \(z_1\) and \(z_2\), and from \(z_2\) and \(z_3\), hence
            from all three. The circle centred at \(z_0\) through them is the one we want.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Uniqueness. Suppose two clines both pass through all three points. Why must
          they be the same cline?</div>
        <div class="sstep-body">
          <p>Count intersections. Two distinct lines meet in at most one point; a line and a circle in at most
            two; two distinct circles in at most two. In every case, <strong>two distinct clines share at most
              two points.</strong> Three shared points is one too many, so the clines coincide.</p>
          <p>That single sentence &mdash; distinct clines meet in at most two points &mdash; is the whole
            uniqueness argument, and it's worth keeping. It's the reason three points is exactly the right
            amount of data: two points don't pin a cline down, four are usually too many to be consistent.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Last: Section 3.3 extends this to \(\mathbb{C}^+\), where one of the three
          points is allowed to be \(\infty\). What is the cline through \(z_1\), \(z_2\), and \(\infty\), and
          why is that the only sensible answer?</div>
        <div class="sstep-body">
          <p>The line through \(z_1\) and \(z_2\). Your reading states it directly: "If one of the given points
            is \(\infty\), the unique cline is the line through the other two."</p>
          <p>And it's forced, not chosen. By convention \(\infty\) lies on every line and on no circle, so the
            only clines through \(\infty\) are lines, and the only line through \(z_1\) and \(z_2\) is the
            obvious one. The convention that "\(\infty\) is on every line" is precisely what's needed to keep
            Theorem 3.2.4 true in \(\mathbb{C}^+\).</p>
          <p>Watch how much this buys. "Three points determine a cline" plus "\(\infty\) is a point" is going
            to give the Fundamental Theorem of M&ouml;bius Transformations (3.4.8) its shape: a M&ouml;bius
            transformation is pinned down by where it sends three points, and the standard trick is to send
            them to \(1\), \(0\), and \(\infty\) &mdash; a move that only makes sense because \(\infty\) is a
            legitimate destination.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Three points, one cline</h2>

  <p>Drag the three points. The cline through them updates. Line them up and watch it become a line.</p>

  <canvas class="plot g304" id="d10-three"></canvas>
  <div class="drag-hint">Drag any of the three points.</div>
  <div class="readout cols" id="d10-three-out"></div>

  <p>The perpendicular bisectors are drawn faintly. When the three points are nearly collinear, the bisectors
    are nearly parallel and their meeting point &mdash; the circle's centre &mdash; runs a long way off. This
    is the same limiting behaviour as the \(c \to 0\) slider in the first activity, seen from a different
    angle: a circle straightening into a line is a centre escaping to infinity.</p>

  <p>Nothing bad happens at the moment of collinearity. Nothing in the picture tears or jumps. The
    <em>figure</em> passes smoothly from circle to line, and it is only our two-word vocabulary that has a
    discontinuity in it. That's the argument for the word "cline" in one sentence.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Counting clines through two points</h2>

  <p>Someone is reasoning about how much data pins down a cline.</p>

  <p><strong>Click the step that isn't right.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">A cline equation \(cz\overline{z} + \alpha z +
        \overline{\alpha}\,\overline{z} + d = 0\) has four real parameters: \(c\), \(d\), and the two
        components of \(\alpha\).</button>
      <button class="fline" type="button">Scaling all the coefficients by a non-zero real gives the same
        figure, so really there are only three parameters' worth of clines.</button>
      <button class="fline" type="button">Each point we require the cline to pass through imposes one real
        equation on the coefficients.</button>
      <button class="fline" type="button">So three points impose three equations on three parameters, which
        has exactly one solution &mdash; and that is Theorem 3.2.4.</button>
      <button class="fline" type="button">By the same count, two points leave one parameter free, so the
        clines through two given points form a one-parameter family.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct.</strong> \(c\) and \(d\) are real by definition, and \(\alpha\) is one complex
        number, so two more reals. Four real parameters. (Notice the equation only <em>looks</em> complex; as
        Day 6 observed, \(\alpha z + \overline{\alpha z}\) is real, and so is \(cz\overline{z}\), so the whole
        left side is a real quantity.)</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct, and it's the observation the first activity ended on.</strong> The equation is
        homogeneous, so \((c,\alpha,d)\) and \((\lambda c, \lambda\alpha, \lambda d)\) describe the same
        figure for any real \(\lambda \neq 0\). Four parameters modulo one scaling leaves three.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Correct.</strong> Substituting a specific point for \(z\) turns the cline equation into one
        linear equation in \(c\), \(\mathrm{Re}(\alpha)\), \(\mathrm{Im}(\alpha)\), \(d\) &mdash; one real
        equation, since as noted the left side is real.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Here's the trouble: "three equations in three unknowns" does not mean "exactly one
          solution."</strong></p>
      <p>It means that generically, and the parameter count is a genuinely useful heuristic &mdash; it tells
        you three points is the right <em>amount</em> of data, which is real information. But a linear system
        with as many equations as unknowns can have no solutions or infinitely many, depending on whether the
        equations are independent. Any honest proof has to rule those out.</p>
      <p>And they are not idle worries here. Look at the two ways the count can lie:</p>
      <ul>
        <li>Solutions of the linear system can be <em>degenerate</em> &mdash; recall from the first activity
          that a perfectly good solution \((c,\alpha,d)\) with \(|\alpha|^2 \lt cd\) describes the empty set,
          not a cline. The algebra doesn't know that.</li>
        <li>If the three points are not distinct, the equations repeat and you get a whole family. The
          theorem's hypothesis "three <em>distinct</em> points" is what excludes this, and no parameter count
          notices the hypothesis.</li>
      </ul>
      <p>The scaffold above proves the theorem properly, and notice it never counts parameters: existence
        comes from an explicit construction, and uniqueness from "two distinct clines meet in at most two
        points." Geometric arguments, both of them.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>The conclusion is true, and it's important &mdash; but it inherits the previous line's
          reasoning, so it isn't established here.</strong></p>
      <p>The clines through two given points \(p\) and \(q\) really do form a one-parameter family. Section
        3.5 names it: these are the <strong>type I clines</strong> of \(p\) and \(q\), and together with the
        type II clines they form the coordinate system that every M&ouml;bius transformation with fixed points
        \(p\) and \(q\) moves points along. You can also see it without any counting: take a third point, get
        a unique cline by Theorem 3.2.4, and let the third point range over the plane.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Living with the merged vocabulary</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Theorem 3.2.6 says inversion in a circle maps clines to clines, and that a cline through
      the centre of inversion maps to a line. Suppose you invert in \(C\) and your cline \(D\) misses the
      centre entirely. What can you conclude about \(i_C(D)\)?</p>
    <button class="mc-opt" data-key="a">It's a line.</button>
    <button class="mc-opt" data-key="b">It's a circle, and it also misses the centre.</button>
    <button class="mc-opt" data-key="c">It's a circle, and it misses the centre.</button>
    <button class="mc-opt" data-key="d">Not enough information &mdash; it depends on whether \(D\) is a line
      or a circle.</button>

    <div class="mc-fb" data-key="a">
      <p>Lines are the images of clines that <em>do</em> pass through the centre. This one doesn't, so its
        image is a circle.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>This says the same thing as the correct answer &mdash; the two options are identical, which is worth
        noticing. If two options are indistinguishable, neither can be the intended one on its own, and it's
        a signal to re-read them.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Right on both counts, and the second half is the part worth reasoning through.</p>
      <p>It's a circle because \(D\) misses the centre, by the theorem. And it misses the centre because
        inversion is its own inverse: if \(i_C(D)\) contained \(z_0\), then applying \(i_C\) again would put
        \(i_C(z_0)\) on \(D\) &mdash; and \(i_C(z_0)\) is the one point inversion can't produce from anywhere
        finite. Nothing maps to \(z_0\) except \(\infty\), so \(z_0\) is on the image only if \(\infty\) was
        on \(D\), i.e. only if \(D\) was a line.</p>
      <p>Once Section 3.3 makes \(\infty\) a real point, all of this compresses to: \(i_C\) swaps \(z_0\) and
        \(\infty\), and a line is a cline through \(\infty\). "Through the centre" and "is a line" are the
        same condition seen from the two ends of one swap.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>It genuinely doesn't depend on that, which is the whole gain from the word "cline." A line missing
        the centre inverts to a circle; a circle missing the centre inverts to a circle. One rule, no case
        split &mdash; that's the merger paying off.</p>
    </div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which of these is <em>not</em> a cline?</p>
    <button class="mc-opt" data-key="a">The set \(|z - 3i| = |z + 1|\).</button>
    <button class="mc-opt" data-key="b">The set \(|z| = |z - 2| + 1\).</button>
    <button class="mc-opt" data-key="c">The real axis.</button>
    <button class="mc-opt" data-key="d">The set \(z\overline{z} + 2z + 2\overline{z} - 5 = 0\).</button>

    <div class="mc-fb" data-key="a">
      <p>This is the set of points equidistant from \(3i\) and \(-1\) &mdash; the perpendicular bisector of
        the segment between them, which is a line, hence a cline. (Theorem 2.4.2, met on Day 6.)</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Right. This one says the difference of the distances to \(0\) and to \(2\) is a constant, which is a
        <em>branch of a hyperbola</em> &mdash; not a line, not a circle, not a cline.</p>
      <p>The contrast worth keeping from Day 6: constant <em>ratio</em> of distances gives a cline (the
        Apollonian circles, Theorem 3.2.14); constant sum gives an ellipse; constant difference gives a
        hyperbola; constant product gives a Cassini oval. Only the ratio behaves. It is not obvious in advance
        which combinations of distances give clines, and that is exactly why Theorem 3.2.14 is a theorem.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>The real axis is a line, and lines are clines &mdash; that's the definition. In the standard form it
        is \(\alpha = -\tfrac{i}{2}\) with \(c = d = 0\), which you can check gives
        \(-\tfrac{i}{2}z + \tfrac{i}{2}\overline{z} = \mathrm{Im}(z) = 0\).</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>This is in standard cline form with \(c = 1\), \(\alpha = 2\), \(d = -5\), and the test
        \(|\alpha|^2 \gt cd\) reads \(4 \gt -5\), which holds. So it's a genuine circle &mdash; centred at
        \(-2\) with radius \(3\), if you'd like to check it against the boxed formulas.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Give a one-sentence answer to a sceptic who says "cline" is just a word for "line or circle" and
      buys nothing.</li>
    <li>The cline equation can describe a single point or nothing at all. Which values of \(c\), \(\alpha\),
      \(d\) do each, and why doesn't Definition 3.2.3 call those clines?</li>
    <li>Two distinct clines meet in at most two points. Check this against the case of two parallel lines,
      and then against two lines in \(\mathbb{C}^+\), where \(\infty\) is on both of them.</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    /* ---- the cline equation, driven ---- */
    (function () {
      var cc = 0.6, dd = -3;

      // c z zbar + alpha z + alphabar zbar + d = 0, read via the reading's boxed
      // centre and radius formulas.
      function figure(alpha) {
        if (Math.abs(cc) < 1e-4) {
          // A line: 2 Re(alpha z) + d = 0, perpendicular to conj(alpha).
          var m = G.abs2(alpha);
          if (m < 1e-9) return null;
          var foot = G.scale(G.conj(alpha), -dd / (2 * m));
          var dir = c(-alpha.y, -alpha.x);
          return { kind: 'line', cl: { k: 'l', p: foot, d: G.scale(dir, 1 / G.abs(dir)) } };
        }
        var ctr = c(-alpha.x / cc, alpha.y / cc);
        var rr = (G.abs2(alpha) - cc * dd) / (cc * cc);
        if (rr < 1e-9) return { kind: rr > -1e-9 ? 'point' : 'empty', ctr: ctr };
        return { kind: 'circle', cl: G.circle(ctr, Math.sqrt(rr)), ctr: ctr, r: Math.sqrt(rr) };
      }

      var P = G.plane('d10-cline', {
        span: 16, height: 400,
        handles: [{ name: 'a', z: c(1.3, 0.9), color: G.colors.violet, label: 'α' }],
        draw: function (p) {
          var a = p.get('a');
          p.grid(); p.axes();
          var f = figure(a);
          if (!f) return;
          if (f.kind === 'line') {
            p.line(f.cl, { color: G.colors.blue, width: 3 });
          } else if (f.kind === 'circle') {
            p.cline(f.cl, { color: G.colors.blue, width: 3 });
          } else if (f.kind === 'point') {
            p.dot(f.ctr, { color: G.colors.red, r: 6 });
            p.label(f.ctr, 'a single point', { color: G.colors.red, dx: 10, dy: -8 });
          } else {
            p.label(c(0, 0), 'no points satisfy this equation',
              { color: G.colors.red, dx: -100, dy: 0, size: 15 });
          }
          p.arrow(c(0, 0), a, { color: G.colors.violet, width: 2 });
        },
        onDrag: function () { refresh(); }
      });

      function refresh() {
        P.redraw();
        var a = P.get('a'), f = figure(a);
        var disc = G.abs2(a) - cc * dd;
        var desc, extra;
        if (!f) { desc = '—'; extra = '—'; }
        else if (f.kind === 'line') { desc = 'a line (c = 0)'; extra = 'no centre, no radius'; }
        else if (f.kind === 'circle') {
          desc = 'a circle';
          extra = 'centre ' + G.str(f.ctr) + ', radius ' + G.num(f.r, 2);
        } else if (f.kind === 'point') { desc = 'a single point (|α|² = cd)'; extra = 'radius 0'; }
        else { desc = 'the empty set (|α|² < cd)'; extra = 'radius would be imaginary'; }
        G.say('d10-cline-out',
          '<div class="q"><b>c</b><span>' + G.num(cc, 2) + '</span></div>' +
          '<div class="q"><b>d</b><span>' + G.num(dd, 2) + '</span></div>' +
          '<div class="q"><b>|α|² − cd</b><span>' + G.num(disc, 2) + '</span></div>' +
          '<div class="q ' + (f && (f.kind === 'line' || f.kind === 'circle') ? 'hit' : 'miss')
          + '"><b>the figure is</b><span>' + desc + '</span></div>' +
          '<div class="q" style="grid-column:1/-1"><b>&nbsp;</b><span>' + extra + '</span></div>');
      }

      G.slider('d10-c', function (v) { cc = v; refresh(); });
      G.slider('d10-d', function (v) { dd = v; refresh(); });
      refresh();
    })();

    /* ---- three points determine a cline ---- */
    (function () {
      var P = G.plane('d10-three', {
        span: 13, height: 390,
        handles: [
          { name: 'z1', z: c(-3, -1.2), color: G.colors.blue, label: 'z₁' },
          { name: 'z2', z: c(0.8, 2.4), color: G.colors.violet, label: 'z₂' },
          { name: 'z3', z: c(3.4, -0.6), color: G.colors.green, label: 'z₃' }
        ],
        draw: function (p) {
          var z1 = p.get('z1'), z2 = p.get('z2'), z3 = p.get('z3');
          p.grid(); p.axes();

          // The two perpendicular bisectors used in the existence proof.
          [[z1, z2], [z2, z3]].forEach(function (pair) {
            var mid = G.scale(G.add(pair[0], pair[1]), 0.5);
            var d = G.sub(pair[1], pair[0]);
            if (G.abs(d) < 1e-9) return;
            p.line(G.lineDir(mid, G.arg(d) + Math.PI / 2),
              { color: '#dfe3e7', width: 1.4, dash: [5, 4] });
          });

          var cl = G.through3(z1, z2, z3);
          if (cl) {
            p.cline(cl, { color: G.colors.orange, width: 3 });
            if (cl.k === 'c') p.dot(cl.c, { color: G.colors.orange, r: 4 });
          }
        },
        onDrag: function () { refresh(); }
      });

      function refresh() {
        var z1 = P.get('z1'), z2 = P.get('z2'), z3 = P.get('z3');
        var cl = G.through3(z1, z2, z3);
        var kind, detail;
        if (!cl) { kind = 'undefined — two points have collided'; detail = '—'; }
        else if (cl.k === 'l') { kind = 'a line'; detail = 'the three points are collinear'; }
        else {
          kind = 'a circle';
          detail = 'centre ' + G.str(cl.c) + ', radius ' + G.num(cl.r, 2);
        }
        G.say('d10-three-out',
          '<div class="q hit"><b>the cline through them is</b><span>' + kind + '</span></div>' +
          '<div class="q"><b>&nbsp;</b><span>' + detail + '</span></div>');
      }
      refresh();
    })();
  })();
</script>
