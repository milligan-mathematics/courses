---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 16: A Coordinate System Built From Two Points"
day: 16
chapter_number: 3
chapter: "Transformations"
day_title: "A Coordinate System Built From Two Points"
blurb: "Pick two points. They generate two families of clines that cross at right angles everywhere and fill the plane. That grid is the right way to look at every Möbius transformation fixing those two points."
reading: "Section 3.5, type I and type II clines through Example 3.5.3"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Two families, one grid</h2>

  <p>Given \(p\) and \(q\) in \(\mathbb{C}^+\), your reading defines two families:</p>

  <ul>
    <li>a <strong>type I cline</strong> of \(p\) and \(q\) is a cline <em>through</em> both of them;</li>
    <li>a <strong>type II cline</strong> is a cline with respect to which \(p\) and \(q\) are
      <em>symmetric</em>.</li>
  </ul>

  <p>Drag \(p\) and \(q\) and watch what the two families do.</p>

  <canvas class="plot g304" id="d16-clines"></canvas>
  <div class="drag-hint">Drag \(p\) or \(q\).</div>
  <div class="legend">
    <span class="orange">type I &mdash; through \(p\) and \(q\)</span>
    <span class="blue dashed">type II &mdash; \(p\) and \(q\) symmetric across them</span>
  </div>
  <div class="readout cols" id="d16-clines-out"></div>

  <p>Three things are true of this picture and all three matter.</p>

  <p><strong>They meet at right angles.</strong> Every orange cline crosses every dashed blue one
    perpendicularly. That's Theorem 3.2.8 doing its job, and the scaffold below spells it out.</p>

  <p><strong>They fill the plane.</strong> Every point other than \(p\) and \(q\) lies on exactly one cline of
    each family. So the pair \(\{p,q\}\) really does supply a coordinate system: name a type I cline and a
    type II cline and you have named a point.</p>

  <p><strong>The type II clines are the circles of Apollonius.</strong> You met them on Day 6 as the locus
    \(|z-p| = k|z-q|\), and on Day 11 you watched the whole family sweep the plane as \(k\) ran from \(0\) to
    \(\infty\). Same family, arrived at from a different direction &mdash; and the value of \(k\) is exactly
    which member of the family you are on.</p>

  <details class="hint">
    <summary>The easiest case, and why it's the one to think about</summary>
    <p>Take \(p = 0\) and \(q = \infty\). Then the type I clines &mdash; the clines through \(0\) and
      \(\infty\) &mdash; are precisely the <strong>lines through the origin</strong>, since a cline through
      \(\infty\) is a line. And the type II clines, the ones with \(0\) and \(\infty\) symmetric across them,
      are precisely the <strong>circles centred at the origin</strong>, because inversion in such a circle
      swaps its centre with \(\infty\).</p>
    <p>Lines through the origin and circles around it: that's polar coordinates. Your reading says so, and
      Figure 3.5.2(a) draws it.</p>
    <p>So the general picture above is polar coordinate paper, pushed around by a M&ouml;bius transformation
      that sends \(0 \mapsto p\) and \(\infty \mapsto q\). It looks distorted because it is &mdash; but the
      right angles survived the trip, because M&ouml;bius transformations preserve angles.</p>
  </details>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>Why the two families are perpendicular</h2>

  <p>Your reading asserts the orthogonality in one sentence, citing Theorem 3.2.8. Unpacking it is worth five
    minutes, because the same trick &mdash; normalise, do the easy case, transport back &mdash; is how
    everything else in this section gets proved.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Do the easy case first: \(p = 0\), \(q = \infty\). Why are the two families
          perpendicular there?</div>
        <div class="sstep-body">
          <p>Type I clines are lines through the origin; type II clines are circles centred at the origin. A
            line through a circle's centre meets that circle at right angles &mdash; it's along the radius,
            and the tangent to a circle is perpendicular to the radius.</p>
          <p>No machinery needed. That's the point of choosing this case.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now transport. Let \(S\) be a M&ouml;bius transformation with
          \(S(0) = p\) and \(S(\infty) = q\). Why does \(S\) carry each family to the corresponding
          family?</div>
        <div class="sstep-body">
          <p><em>Type I.</em> A cline through \(0\) and \(\infty\) maps to a cline (Theorem 3.4.5) through
            \(S(0) = p\) and \(S(\infty) = q\). So it's a type I cline of \(p\) and \(q\).</p>
          <p><em>Type II.</em> A cline \(C\) with \(0\) and \(\infty\) symmetric across it maps to a cline
            \(S(C)\) with \(S(0)\) and \(S(\infty)\) symmetric across it &mdash; that's Corollary 3.4.14,
            which is Theorem 3.2.12 upgraded from inversions to M&ouml;bius transformations. So it's a type II
            cline of \(p\) and \(q\).</p>
          <p>And the correspondence goes both ways, since \(S^{-1}\) is also M&ouml;bius. So \(S\) matches the
            two families up exactly.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Finish it.</div>
        <div class="sstep-body">
          <p>Take a type I cline and a type II cline of \(p\) and \(q\). Pull both back by \(S^{-1}\) to get
            a line through the origin and a circle centred at the origin, which meet at right angles by
            step 1. Push forward by \(S\), which preserves angles. So the originals meet at right
            angles.</p>
          <p>Notice how little computation there was. Two facts about M&ouml;bius transformations &mdash;
            they preserve clines and angles, and they preserve symmetry &mdash; plus one obvious picture.
            That is the whole proof.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">One consequence to bank. Your reading says a M&ouml;bius transformation
          \(T\) fixing \(p\) and \(q\) "will push points along type I clines of \(p\) and \(q\) and along
          type II clines." Why must \(T\) respect the two families?</div>
        <div class="sstep-body">
          <p>Because \(T\) preserves clines and symmetry, and it fixes \(p\) and \(q\). A type I cline is a
            cline through \(p\) and \(q\); its image is a cline through \(T(p) = p\) and \(T(q) = q\), so
            again type I. Same argument for type II.</p>
          <p>So \(T\) shuffles each family among itself. It cannot send a type I cline to a type II cline, or
            to anything outside the two families.</p>
          <p>That is a serious restriction, and it's why the classification in the next section is possible at
            all. A M&ouml;bius transformation fixing two points is not free to do whatever it likes &mdash;
            it is confined to sliding points around a grid it cannot move off. All that's left to decide is
            <em>how far</em> along each direction, which is two real numbers, which is exactly the
            \(re^{i\theta}\) of the normal form.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>What happens when the two points collide</h2>

  <p>The grid above needs \(p \neq q\). Slide them together and watch it fail &mdash; carefully, because the
    way it fails is the subject of Day 18.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d16-sep">separation of \(p\) and \(q\)</label>
      <input type="range" id="d16-sep" min="0" max="100" step="1" value="70">
    </div>
  </div>

  <canvas class="plot g304" id="d16-merge"></canvas>
  <div class="readout" id="d16-merge-out"></div>

  <p>As the separation shrinks, both families crowd toward the meeting point &mdash; and they crowd in a very
    particular way. The type I clines still pass through both points, so they become clines through a single
    point. The type II clines shrink around one point or the other, and they too end up through &mdash; or
    rather, tangent at &mdash; the single meeting point.</p>

  <p>In the limit, the two families become <em>one</em> family: clines all mutually tangent at the surviving
    point. That's exactly the picture in Figure 3.5.12, and it belongs to the <strong>parabolic</strong>
    transformations, the ones with a single fixed point.</p>

  <p>So the case split in Section 3.5 &mdash; two fixed points or one &mdash; isn't administrative. Two fixed
    points give you a grid with two independent directions; one fixed point gives a degenerate grid with only
    one. The transformations behave completely differently because the scaffolding they run on is
    completely different.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Which family gets frozen?</h2>

  <p>An argument about what a fixed-point-preserving map does to the grid.</p>

  <p><strong>Click the step that isn't right.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Let \(T\) be a M&ouml;bius transformation fixing the distinct points
        \(p\) and \(q\), and not the identity.</button>
      <button class="fline" type="button">\(T\) maps the family of type I clines of \(p\) and \(q\) onto
        itself, and likewise the family of type II clines.</button>
      <button class="fline" type="button">Take a type I cline \(C\) through \(p\) and \(q\). Its image
        \(T(C)\) is a type I cline, and it passes through \(p\) and \(q\) as well.</button>
      <button class="fline" type="button">Two distinct clines meet in at most two points, so \(T(C)\) and
        \(C\) share \(p\) and \(q\) and must be the same cline. Hence \(T\) fixes every type I cline
        setwise.</button>
      <button class="fline" type="button">So every M&ouml;bius transformation with two fixed points slides
        points along the clines through those points, and never across them.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Just the setup.</strong> Theorem 3.4.6 allows exactly this &mdash; a non-identity
        M&ouml;bius transformation may fix two points.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct.</strong> That's the final step of the scaffold above: \(T\) preserves clines and
        symmetry points and fixes \(p\) and \(q\), so it shuffles each family among itself.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Found it &mdash; and the error is a single unearned word.</strong></p>
      <p>\(T(C)\) is a type I cline, so it passes through \(p\) and \(q\). True. But the sentence smuggles in
        the idea that this makes it <em>the same</em> type I cline. There are infinitely many clines through
        \(p\) and \(q\), and \(T(C)\) is allowed to be any of them.</p>
      <p>And for most maps it is a different one. Take \(p = 0\), \(q = \infty\), and
        \(T(z) = e^{i\theta}z\) &mdash; a rotation. The type I clines are the lines through the origin, and
        \(T\) rotates each one onto a <em>different</em> one. The family is preserved; its members are
        permuted.</p>
      <p>This is the same distinction as Day 11's: \(i_C(D) = D\) preserves the set \(D\) without fixing its
        points, and here \(T\) preserves the family without fixing its members. Preserving a collection and
        fixing its elements are different claims, and the gap between them is where the whole classification
        lives.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>The reasoning is valid; it just isn't about anything.</strong> If \(T(C)\) and \(C\) both
        pass through \(p\) and \(q\), that gives them two shared points, which is not enough to force them
        equal &mdash; two distinct clines are <em>allowed</em> two common points. Three would do it.</p>
      <p>Notice this is where Day 10's uniqueness argument gets misapplied: "at most two points" was used
        there to derive uniqueness from <em>three</em> shared points. Two is exactly one short.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>False in general &mdash; and the maps for which it <em>is</em> true have a name.</strong></p>
      <p>Your reading calls a map that pushes points along type I clines <strong>hyperbolic</strong>, and it's
        one of three cases. The other two are <strong>elliptic</strong>, which does the opposite &mdash;
        every type II cline is preserved and points swirl around them &mdash; and <strong>loxodromic</strong>,
        which preserves neither and spirals across both.</p>
      <p>So this line describes one third of the possibilities. Which third you get is decided by a single
        complex number, and that's tomorrow.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Reading the grid</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">For \(p = 0\) and \(q = \infty\), the type II clines are the circles centred at the
      origin. Why is \(\infty\) symmetric to \(0\) with respect to such a circle?</p>
    <button class="mc-opt" data-key="a">Because \(\infty\) is on every cline.</button>
    <button class="mc-opt" data-key="b">Because inversion in a circle sends its centre to \(\infty\).</button>
    <button class="mc-opt" data-key="c">Because \(0\) and \(\infty\) are the only points not on the
      circle.</button>
    <button class="mc-opt" data-key="d">Because \(|0|\cdot|\infty| = r^2\) for every \(r\).</button>

    <div class="mc-fb" data-key="a">
      <p>\(\infty\) lies on every <em>line</em>, by the convention of Section 3.3 &mdash; not on every circle.
        In fact the whole point of that convention is to distinguish the two: a cline is a line exactly when
        it contains \(\infty\).</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Right. Section 3.3 extends inversion by \(i_C(z_0) = \infty\) and \(i_C(\infty) = z_0\), and defines
        \(z_0\) and \(\infty\) to be symmetric with respect to \(C\) on exactly that basis.</p>
      <p>So "circle centred at the origin" and "cline with \(0\) and \(\infty\) symmetric across it" are the
        same condition, and the type II clines of \(0\) and \(\infty\) are the concentric circles. This is
        also what made Theorem 3.2.16 work for concentric circles: their common symmetric pair is the shared
        centre together with \(\infty\).</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Every point off the circle other than those two is also off the circle &mdash; the plane is full of
        them. Symmetry is a relation between a specific <em>pair</em> of points and a cline, not a matter of
        being excluded from it.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>This has the right shape but \(\infty\) is not a number and \(|\infty|\) is not a quantity, so the
        equation doesn't say anything &mdash; Day 12's flaw activity was about exactly this temptation. What's
        true is that as \(z \to 0\), its symmetric point runs off to infinity; the extended definition is the
        formalisation of that limit, not an arithmetic identity.</p>
    </div>
  </div>

  <div class="mc" data-answer="d">
    <p class="mc-q">How many type II clines of \(p\) and \(q\) pass through a given point \(z\) (with
      \(z \neq p, q\))?</p>
    <button class="mc-opt" data-key="a">None, in general.</button>
    <button class="mc-opt" data-key="b">Infinitely many.</button>
    <button class="mc-opt" data-key="c">Two.</button>
    <button class="mc-opt" data-key="d">Exactly one.</button>

    <div class="mc-fb" data-key="a">
      <p>Look at the picture &mdash; the dashed family fills the plane with no gaps. Every point other than
        \(p\) and \(q\) is on one.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>That's the type <em>I</em> family: infinitely many clines pass through \(p\) and \(q\), and through
        any third point there's exactly one of them. The type II family works the other way round.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Two would make it a bad coordinate system &mdash; a point would have an ambiguous address. Look at
        the picture again; the dashed clines are disjoint from one another.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Right, and there's a clean reason. The type II clines are the Apollonian loci \(|z-p| = k|z-q|\),
        one for each \(k \gt 0\). Given \(z\), the ratio \(k = |z-p|/|z-q|\) is a single determined number, so
        \(z\) is on the member with that \(k\) and no other.</p>
      <p>Combined with the type I family, every point gets a unique address: one cline from each family,
        crossing at right angles. That is what "coordinate system" means here, and it is why the next section
        can describe a whole transformation with just two numbers &mdash; how far to move in each of the two
        directions.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The type I and type II clines of \(0\) and \(\infty\) are polar coordinate paper. Say what plays the
      role of \(r\) and what plays the role of \(\theta\) for a general pair \(p, q\).</li>
    <li>A M&ouml;bius transformation fixing \(p\) and \(q\) preserves both families but usually permutes their
      members. Describe, in words, what such a map does to a single point.</li>
    <li>When \(p\) and \(q\) merge, the two families merge too. Before Day 18: guess what a transformation
      with a single fixed point can possibly do, given that it only has one family to slide along.</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    /* ---- the two families ---- */
    (function () {
      var P = G.plane('d16-clines', {
        span: 13, height: 420,
        handles: [
          { name: 'p', z: c(-1.9, -0.6), color: G.colors.orange, label: 'p' },
          { name: 'q', z: c(2.2, 1.0), color: G.colors.orange, label: 'q' }
        ],
        draw: function (pl) {
          var p0 = pl.get('p'), q0 = pl.get('q');
          pl.grid(); pl.axes({ ticks: false });
          if (G.dist(p0, q0) < 0.25) return;

          var fam = G.typeClines(p0, q0, { typeI: 9, typeII: 7 });
          fam.typeII.forEach(function (cl) {
            if (cl) pl.cline(cl, { color: G.colors.blue, width: 1.5, dash: [6, 4] });
          });
          fam.typeI.forEach(function (cl) {
            if (cl) pl.cline(cl, { color: G.colors.orange, width: 1.6 });
          });
        },
        onDrag: function () { refresh(); }
      });

      function refresh() {
        P.redraw();
        var p0 = P.get('p'), q0 = P.get('q');
        var close = G.dist(p0, q0) < 0.25;
        // Verify the defining properties numerically, so the claim is checkable.
        var fam = close ? null : G.typeClines(p0, q0, { typeI: 5, typeII: 4 });
        var through = fam && fam.typeI.every(function (cl) {
          return cl && G.onCline(cl, p0, 1e-4) && G.onCline(cl, q0, 1e-4);
        });
        var symm = fam && fam.typeII.every(function (cl) {
          return cl && G.near(G.invertInCline(p0, cl), q0, 1e-4);
        });
        G.say('d16-clines-out',
          '<div class="q"><b>separation |p − q|</b><span>' + G.num(G.dist(p0, q0), 2) + '</span></div>' +
          '<div class="q ' + (through ? 'hit' : 'miss') + '"><b>every type I cline hits p and q</b><span>'
          + (close ? 'p and q have collided' : through ? 'verified' : '—') + '</span></div>' +
          '<div class="q ' + (symm ? 'hit' : 'miss')
          + '"><b>every type II cline has p, q symmetric</b><span>'
          + (close ? 'p and q have collided' : symm ? 'verified' : '—') + '</span></div>');
      }
      refresh();
    })();

    /* ---- collapsing the two points together ---- */
    (function () {
      var sep = 70;

      var P = G.plane('d16-merge', {
        span: 11, height: 400,
        draw: function (pl) {
          pl.grid(); pl.axes({ ticks: false });
          var d = 0.02 + 2.6 * (sep / 100);
          var p0 = c(-d, 0), q0 = c(d, 0);

          if (d > 0.06) {
            var fam = G.typeClines(p0, q0, { typeI: 9, typeII: 7 });
            fam.typeII.forEach(function (cl) {
              if (cl) pl.cline(cl, { color: G.colors.blue, width: 1.4, dash: [6, 4] });
            });
            fam.typeI.forEach(function (cl) {
              if (cl) pl.cline(cl, { color: G.colors.orange, width: 1.5 });
            });
          } else {
            // The limit: clines mutually tangent at the surviving point. These are
            // the images of horizontal lines under z -> 1/z + p.
            for (var k = -7; k <= 7; k++) {
              if (k === 0) continue;
              var h = k * 0.42;
              pl.curve(function (t) {
                var w = G.inv(c(t, h));
                return w ? G.add(w, c(0, 0)) : null;
              }, -70, 70, 500, { color: G.colors.violet, width: 1.6 });
            }
            pl.line(G.lineDir(c(0, 0), 0), { color: G.colors.violet, width: 1.6 });
          }

          pl.dot(p0, { color: G.colors.orange, r: 6, label: 'p' });
          pl.dot(q0, { color: G.colors.orange, r: 6, label: 'q' });
        }
      });

      function refresh() {
        P.redraw();
        var d = 0.02 + 2.6 * (sep / 100);
        G.say('d16-merge-out', d > 0.06
          ? 'Separation ' + G.num(2 * d, 2) + '. Two independent families, meeting at right angles.'
          : '<b>Collapsed.</b> The two families have become one: clines all mutually tangent at the single '
          + 'surviving point. This is the picture that belongs to a <b>parabolic</b> transformation, and '
          + 'Day 18 is about it.');
      }

      G.slider('d16-sep', function (v) { sep = v; refresh(); });
      refresh();
    })();
  })();
</script>
