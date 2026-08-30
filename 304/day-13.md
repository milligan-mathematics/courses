---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 13: Möbius Transformations"
day: 13
chapter_number: 3
chapter: "Transformations"
day_title: "Möbius Transformations"
blurb: "One formula, four constants, one side condition. It looks like an arbitrary definition until you take it apart — and find it's made entirely of maps you already know."
reading: "Section 3.4, the definition of a Möbius transformation through Theorem 3.4.5"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Taking \(\frac{az+b}{cz+d}\) apart</h2>

  <p>The definition arrives with no motivation: a M&ouml;bius transformation is
    \(T(z) = \frac{az+b}{cz+d}\) with \(ad - bc \neq 0\). Why <em>that</em> shape?</p>

  <p>Because it's the smallest family containing everything we've built. Watch. When \(c \neq 0\), a little
    algebra rewrites \(T\) as</p>

  \[ T(z) = \frac{a}{c} + \frac{bc-ad}{c}\cdot\frac{1}{cz+d}, \]

  <p>which says \(T\) is four familiar maps applied in a row. Step through them and watch a grid go along for
    the ride.</p>

  <div class="toggles" id="d13-steps">
    <button class="btn411 ghost on" type="button" data-step="0">the plane</button>
    <button class="btn411 ghost" type="button" data-step="1">\(\times c\), \(+d\)</button>
    <button class="btn411 ghost" type="button" data-step="2">\(1/w\)</button>
    <button class="btn411 ghost" type="button" data-step="3">\(\times\frac{bc-ad}{c}\)</button>
    <button class="btn411 ghost" type="button" data-step="4">\(+\frac{a}{c}\)</button>
  </div>

  <canvas class="plot g304" id="d13-decomp"></canvas>
  <div class="readout" id="d13-decomp-out"></div>

  <p>Step 1 is a general linear transformation &mdash; a rotation, a scaling, a slide. Nothing new.
    Step 2 is the reciprocal map, which you met on Day 5 and which is inversion in the unit circle followed
    by a flip. Steps 3 and 4 are linear again.</p>

  <p>So <strong>a M&ouml;bius transformation is a linear map, then a reciprocal, then another linear map</strong>.
    That's the whole thing. And every property in Theorem 3.4.5 follows immediately from properties you have
    already proved about the pieces:</p>

  <ul>
    <li>Linear maps send clines to clines (Theorem 3.1.9). The reciprocal map sends clines to clines
      (Theorem 3.2.6, since \(1/z\) is inversion in the unit circle composed with conjugation, and both do).
      So M&ouml;bius transformations send clines to clines.</li>
    <li>Linear maps preserve angles with sign. The reciprocal map reverses sign twice &mdash; once for the
      inversion, once for the conjugation &mdash; so it preserves them too. So M&ouml;bius transformations
      preserve angles.</li>
  </ul>

  <p>Notice what step 2 buys, and it is the only thing that's new. Steps 1, 3 and 4 all fix \(\infty\)
    &mdash; that's Theorem 3.3.1. Step 2 is the one that <em>moves</em> \(\infty\), swapping it with \(0\).
    Everything a M&ouml;bius transformation can do that a linear map can't &mdash; sending a finite point to
    \(\infty\), turning a circle into a line &mdash; comes from that single reciprocal in the middle.</p>

  <details class="hint">
    <summary>What if \(c = 0\)?</summary>
    <p>Then there's no reciprocal to take, and the algebra above divides by zero. But look at the map itself:
      \(T(z) = \frac{az+b}{d}\), which is just \(\frac{a}{d}z + \frac{b}{d}\) &mdash; a general linear
      transformation, and \(ad-bc = ad \neq 0\) guarantees \(a/d\) makes sense and isn't zero.</p>
    <p>So the general linear transformations are exactly the M&ouml;bius transformations with \(c = 0\), and
      they're exactly the ones fixing \(\infty\). Everything from Section 3.1 is still here, sitting inside
      the new definition as a special case.</p>
  </details>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Why \(ad - bc \neq 0\)</h2>

  <p>The side condition looks like fine print. Slide the coefficient \(a\) and watch what happens as the
    determinant passes through zero.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d13-a">\(a\)</label>
      <input type="range" id="d13-a" min="-2" max="2" step="0.01" value="1.2">
    </div>
  </div>

  <canvas class="plot g304" id="d13-det"></canvas>
  <div class="readout cols" id="d13-det-out"></div>

  <p>As \(ad-bc\) approaches zero the image collapses: the grid contracts toward a single point, and at
    exactly zero the entire plane maps to that one point. Not a small image &mdash; a <em>one-point</em>
    image.</p>

  <p>The reason is visible in the decomposition. The factor multiplying the reciprocal is
    \(\frac{bc-ad}{c}\), which is the determinant divided by \(c\). Send the determinant to zero and step 3
    becomes multiplication by \(0\), which crushes everything to the origin; step 4 then slides that single
    point to \(a/c\). A dead map.</p>

  <p>So \(ad-bc \neq 0\) isn't fine print, it's the whole difference between a transformation and a constant
    function &mdash; the same role \(a \neq 0\) played for \(T(z) = az+b\) back in Section 3.1, and for the
    same reason: without it there's no inverse, so it can't be a motion of any geometry.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>Theorem 3.4.1, proved</h2>

  <p>The theorem is an "if and only if": \(T(z) = \frac{az+b}{cz+d}\) is a transformation of \(\mathbb{C}^+\)
    exactly when \(ad-bc \neq 0\). Your reading states it with the proof collapsed away. Both directions are
    short.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Start with the easy direction. Suppose \(ad - bc = 0\). Show \(T\) is
          constant, so certainly not a transformation. (Assume \(c \neq 0\); the case \(c=0\) is similar.)</div>
        <div class="sstep-body">
          <p>If \(ad = bc\), then \(\frac{a}{c} = \frac{b}{d}\) whenever the denominators allow, so
            \((a,b)\) is a multiple of \((c,d)\): write \(a = \lambda c\), \(b = \lambda d\). Then</p>
          \[ T(z) = \frac{\lambda c z + \lambda d}{cz+d} = \frac{\lambda(cz+d)}{cz+d} = \lambda \]
          <p>for every \(z\) with \(cz+d\neq 0\). Constant. It fails to be one-to-one about as badly as a
            function can, and its image is a single point, so it isn't onto either.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now the other direction. Assume \(ad-bc\neq 0\). Show \(T\) is onto by
          solving \(w = \frac{az+b}{cz+d}\) for \(z\).</div>
        <div class="sstep-body">
          <p>Clear the denominator and collect the \(z\) terms:</p>
          \[ w(cz+d) = az+b \;\Longrightarrow\; z(cw - a) = b - dw \;\Longrightarrow\;
          z = \frac{-dw+b}{cw-a}. \]
          <p>So every \(w\) has a preimage, and we've found it explicitly. That expression is
            Theorem 3.4.2's formula for \(T^{-1}\), and notice it fell out of the onto proof rather than
            needing a separate argument.</p>
          <p>Where is \(ad-bc \neq 0\) used? It's what stops the numerator and denominator of that expression
            from being proportional &mdash; i.e. it's what makes \(T^{-1}\) itself a genuine M&ouml;bius
            transformation rather than a constant. Its determinant is \((-d)(-a) - bc = ad - bc\), the same
            number.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">One-to-one. Suppose \(T(z_1) = T(z_2)\) and derive \(z_1 = z_2\).</div>
        <div class="sstep-body">
          <p>Cross-multiplying \(\frac{az_1+b}{cz_1+d} = \frac{az_2+b}{cz_2+d}\) and expanding, almost
            everything cancels:</p>
          \[ (az_1+b)(cz_2+d) - (az_2+b)(cz_1+d) = (ad-bc)(z_1 - z_2) = 0. \]
          <p>Since \(ad-bc\neq 0\), we get \(z_1 = z_2\).</p>
          <p>That identity is worth keeping in view. Written another way,</p>
          \[ T(z_1) - T(z_2) = \frac{(ad-bc)(z_1-z_2)}{(cz_1+d)(cz_2+d)}, \]
          <p>which is the M&ouml;bius version of the distance formula you derived for inversion on Day 9.
            Same shape: the original difference on top, a product of two "distance to the pole" factors
            underneath. It's why the cross ratio will be invariant &mdash; the junk factors cancel in a ratio
            of ratios, exactly as before.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Loose ends: what about \(\infty\), and what about the point where the
          denominator vanishes?</div>
        <div class="sstep-body">
          <p>Both are handled by definition, and both are forced by continuity. Set \(T(-d/c) = \infty\) and
            \(T(\infty) = a/c\) when \(c \neq 0\); when \(c = 0\), set \(T(\infty) = \infty\).</p>
          <p>With those conventions \(T\) is a bijection of all of \(\mathbb{C}^+\): the one point that had
            no image now has one, and the one point that was in nothing's image now has a preimage. Two
            defects, one new point, both fixed.</p>
          <p>This is Day 12's argument for \(\mathbb{C}^+\) cashing out. Without \(\infty\), Theorem 3.4.1
            would be false as stated &mdash; \(T\) simply isn't a transformation of \(\mathbb{C}\) when
            \(c \neq 0\), no matter what the determinant is.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>"It has a pole, so it isn't a transformation"</h2>

  <p>A reasonable-sounding objection to the whole enterprise.</p>

  <p><strong>Click the step that's wrong.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">If \(c \neq 0\), the expression \(\frac{az+b}{cz+d}\) is undefined
        at \(z = -d/c\), since the denominator vanishes there.</button>
      <button class="fline" type="button">Also, no complex number \(z\) satisfies \(T(z) = a/c\): setting
        \(\frac{az+b}{cz+d} = \frac{a}{c}\) and clearing denominators gives \(bc = ad\), which is
        false.</button>
      <button class="fline" type="button">So \(T\) fails to be defined at one point and fails to hit one
        point.</button>
      <button class="fline" type="button">A function that isn't defined everywhere on its stated domain isn't
        a function on that domain, so \(T\) is not a transformation, and Theorem 3.4.1 is wrong.</button>
      <button class="fline" type="button">The best we could say is that \(T\) is a transformation from
        \(\mathbb{C}-\{-d/c\}\) to \(\mathbb{C}-\{a/c\}\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct.</strong> The point \(-d/c\) is the <em>pole</em> of \(T\), and the formula really
        does say nothing there.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct, and it's a nice computation.</strong> The value \(a/c\) is genuinely unreachable
        from any finite \(z\), and the reason is precisely the determinant condition: if \(bc = ad\) were
        allowed, \(T\) would be the constant \(a/c\) and every point would map there. The same inequality
        that makes \(T\) non-constant makes \(a/c\) unattainable.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Correct as a summary of lines 1 and 2</strong> &mdash; one gap in the domain, one gap in the
        range. Notice that the two gaps are exactly matched in number, which should make you suspect they can
        be plugged into each other. They can, and that's the next line's mistake.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Here's the error, and it's about reading the theorem's statement.</strong></p>
      <p>Theorem 3.4.1 does not say \(T\) is a transformation of \(\mathbb{C}\). It says \(T\) is a
        transformation of \(\mathbb{C}^+\). Those are different sets, and the whole of Section 3.3 exists to
        supply the difference.</p>
      <p>In \(\mathbb{C}^+\) there are no gaps: \(T(-d/c) = \infty\) fills the hole in the domain, and
        \(T(\infty) = a/c\) fills the hole in the range. One extra point repairs both, because the two
        defects were a matched pair &mdash; which is what line 3 noticed without following up.</p>
      <p>This is worth generalising into a reading habit. When a theorem seems obviously false, check the
        <em>domain</em> before checking the argument. Most apparent counterexamples in this chapter are
        statements about \(\mathbb{C}^+\) being tested in \(\mathbb{C}\).</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>True, and a perfectly good statement &mdash; it's just weaker and much less useful.</strong>
      </p>
      <p>The trouble with this version is that the domain and the codomain are <em>different sets</em>, both
        depending on \(T\). So you can't compose two of these without checking whether one's excluded point
        collides with the other's, and "the M&ouml;bius transformations" would not form a group, and there
        would be no M&ouml;bius geometry in Chapter 4 at all.</p>
      <p>Working in \(\mathbb{C}^+\) makes every M&ouml;bius transformation a bijection of one fixed set, so
        they compose freely and invert freely. That's precisely the property Definition 4.1.1 will demand of
        a group of transformations.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Reading the definition</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which of these is <em>not</em> a M&ouml;bius transformation?</p>
    <button class="mc-opt" data-key="a">\(T(z) = \dfrac{1}{z}\)</button>
    <button class="mc-opt" data-key="b">\(T(z) = \dfrac{1}{\overline{z}}\)</button>
    <button class="mc-opt" data-key="c">\(T(z) = 5z - 2i\)</button>
    <button class="mc-opt" data-key="d">\(T(z) = z\)</button>

    <div class="mc-fb" data-key="a">
      <p>This is \(\frac{az+b}{cz+d}\) with \(a=0, b=1, c=1, d=0\), determinant \(0\cdot 0 - 1\cdot 1 = -1
        \neq 0\). A M&ouml;bius transformation, and the most important one &mdash; it's the reciprocal in the
        middle of every decomposition.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Right. This is inversion in the unit circle, and the bar disqualifies it: the definition allows
        \(z\), never \(\overline{z}\).</p>
      <p>Which is a little jarring, since Theorem 3.4.4 says M&ouml;bius transformations are exactly the
        compositions of <em>even</em> numbers of inversions. So a single inversion isn't one, but two are.
        The parity is the point, and the reason is orientation: each inversion reverses it, so an odd number
        of them reverses it overall, and no \(\frac{az+b}{cz+d}\) does.</p>
      <p>Fast check: if you can see a \(\overline{z}\) that can't be cancelled, it isn't M&ouml;bius. If you
        can see an even number of them, it may well be &mdash; \(\overline{(\overline{z})} = z\).</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>A general linear transformation, hence M&ouml;bius with \(c = 0\), \(d = 1\); determinant \(5\).
        Everything from Section 3.1 sits inside the new definition.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>The identity, with \(a=d=1\) and \(b=c=0\), determinant \(1\). It has to be one &mdash; otherwise the
        M&ouml;bius transformations couldn't form a group, and Section 4.2 would have nothing to talk
        about.</p>
    </div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">A M&ouml;bius transformation maps clines to clines. You have a circle \(C\) and you want
      to know whether \(T(C)\) is a circle or a line. What do you check?</p>
    <button class="mc-opt" data-key="a">Whether \(C\) contains the origin.</button>
    <button class="mc-opt" data-key="b">Whether \(C\) contains \(a/c\).</button>
    <button class="mc-opt" data-key="c">Whether \(C\) contains the pole \(-d/c\).</button>
    <button class="mc-opt" data-key="d">Whether \(T\) has a fixed point on \(C\).</button>

    <div class="mc-fb" data-key="a">
      <p>The origin is only special for the bare reciprocal map \(1/z\), where it happens to be the pole. For
        a general \(T\), the origin has no privileged role at all &mdash; the decomposition slides and scales
        the plane before the reciprocal is taken, and the pole ends up wherever \(-d/c\) is.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>\(a/c\) is the <em>image</em> of \(\infty\), not the point that maps to it. If \(C\) happens to
        contain \(a/c\) then \(T(C)\) contains \(T(a/c)\), which is some ordinary point &mdash; interesting
        perhaps, but it doesn't decide line versus circle.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Right. A cline's image is a line exactly when the image passes through \(\infty\), and the only point
        \(T\) sends to \(\infty\) is the pole \(-d/c\). So: pole on \(C\), image is a line; pole off \(C\),
        image is a circle.</p>
      <p>This is Theorem 3.2.6 restated for M&ouml;bius transformations, and it's the practical form. In the
        decomposition, everything before and after the reciprocal is linear and can never turn a circle into
        a line; the reciprocal does it exactly when the circle has been slid onto the origin, which is the
        same as the original having contained the pole.</p>
      <p>Worth adding: a <em>line</em>'s image is a line exactly when the line contains the pole too, since
        in \(\mathbb{C}^+\) a line already passes through \(\infty\) and \(T(\infty) = a/c\) is finite.
        One rule covers both, provided you remember \(\infty\) is on every line.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Fixed points are the subject of Section 3.5 and they matter enormously there, but they don't answer
        this question. A map can fix a point of \(C\) and still send \(C\) to a line, or fix nothing on \(C\)
        and send it to a circle. Only the pole decides.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The decomposition showed a M&ouml;bius transformation is "linear, reciprocal, linear." Which of the
      four steps is responsible for each of these: turning a circle into a line; moving \(\infty\); failing to
      preserve distance?</li>
    <li>Every M&ouml;bius transformation with \(c \neq 0\) has exactly one pole. What is the pole of a
      M&ouml;bius transformation with \(c = 0\)?</li>
    <li>Theorem 3.4.5 says M&ouml;bius transformations preserve angles &mdash; with sign, not just magnitude.
      Trace that back to the decomposition and say which step could have gone wrong and didn't.</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    /* ---- the decomposition, stepped through ---- */
    (function () {
      // Deliberately not one of the maps on the problem set.
      var A = c(1, 1), B = c(2, 0), C4 = c(1, 0), D = c(-1, 1);
      var step = 0;

      var STAGES = [
        { name: 'the plane, untouched', f: function (z) { return z; } },
        {
          name: 'w = cz + d — a rotation, a scaling, a slide',
          f: function (z) { return G.add(G.mul(C4, z), D); }
        },
        {
          name: 'w = 1/w — the reciprocal. This is the only step that moves ∞.',
          f: function (z) { return G.inv(G.add(G.mul(C4, z), D)); }
        },
        {
          name: 'w = ((bc − ad)/c)·w — another rotation and scaling',
          f: function (z) {
            var k = G.div(G.sub(G.mul(B, C4), G.mul(A, D)), C4);
            return G.mul(k, G.inv(G.add(G.mul(C4, z), D)));
          }
        },
        {
          name: 'w = w + a/c — one last slide. This is T(z).',
          f: function (z) {
            var k = G.div(G.sub(G.mul(B, C4), G.mul(A, D)), C4);
            return G.add(G.mul(k, G.inv(G.add(G.mul(C4, z), D))), G.div(A, C4));
          }
        }
      ];

      var P = G.plane('d13-decomp', {
        span: 11, height: 400,
        draw: function (p) {
          p.grid(); p.axes({ ticks: false });
          var f = STAGES[step].f;
          // The image of a modest square patch of grid, which stays legible
          // even when the reciprocal blows part of it up.
          p.mapGrid(f, {
            x0: -4, x1: 4, y0: -4, y1: 4, step: 0.5, n: 240,
            color: '#bfe4f6', width: 1.2
          });
          p.mapGrid(f, {
            x0: -4, x1: 4, y0: -4, y1: 4, step: 2, n: 240,
            color: G.colors.blue, width: 2
          });
          // Track one distinguished point through the stages.
          var mark = f(c(1, 1));
          if (mark && G.abs(mark) < 60) {
            p.dot(mark, { color: G.colors.orange, r: 6 });
            p.label(mark, 'the point 1 + i', { color: G.colors.orange, dx: 10, dy: -9, size: 12 });
          }
        }
      });

      function refresh() {
        P.redraw();
        G.say('d13-decomp-out', '<b>Stage ' + step + '.</b> ' + STAGES[step].name);
      }

      document.querySelectorAll('#d13-steps [data-step]').forEach(function (b) {
        b.addEventListener('click', function () {
          document.querySelectorAll('#d13-steps [data-step]').forEach(function (o) {
            o.classList.remove('on');
          });
          b.classList.add('on');
          step = parseInt(b.getAttribute('data-step'), 10);
          refresh();
        });
      });
      refresh();
    })();

    /* ---- the determinant condition ---- */
    (function () {
      var av = 1.2;
      var B = c(1, 0), C4 = c(1, 0), D = c(0.5, 0);   // so det = a·0.5 − 1

      var P = G.plane('d13-det', {
        span: 11, height: 380,
        draw: function (p) {
          p.grid(); p.axes({ ticks: false });
          var A = c(av, 0);
          var T = function (z) {
            var den = G.add(G.mul(C4, z), D);
            if (G.abs2(den) < 1e-12) return null;
            return G.div(G.add(G.mul(A, z), B), den);
          };
          p.mapGrid(T, {
            x0: -4, x1: 4, y0: -4, y1: 4, step: 0.5, n: 220,
            color: '#bfe4f6', width: 1.2
          });
          p.mapGrid(T, {
            x0: -4, x1: 4, y0: -4, y1: 4, step: 2, n: 220,
            color: G.colors.blue, width: 2
          });
          var det = G.sub(G.mul(A, D), G.mul(B, C4));
          if (G.abs(det) < 0.02) {
            var pt = G.div(A, C4);
            p.dot(pt, { color: G.colors.red, r: 8 });
            p.label(pt, 'the entire plane, here', { color: G.colors.red, dx: 12, dy: -10 });
          }
        }
      });

      function refresh() {
        P.redraw();
        var det = av * 0.5 - 1;
        G.say('d13-det-out',
          '<div class="q"><b>a</b><span>' + G.num(av, 2) + '</span></div>' +
          '<div class="q"><b>ad − bc</b><span>' + G.num(det, 3) + '</span></div>' +
          '<div class="q ' + (Math.abs(det) < 0.02 ? 'miss' : 'hit') + '"><b>status</b><span>'
          + (Math.abs(det) < 0.02
            ? 'degenerate — T is the constant a/c'
            : 'a genuine transformation of ℂ⁺') + '</span></div>');
      }

      G.slider('d13-a', function (v) { av = v; refresh(); });
      refresh();
    })();
  })();
</script>
