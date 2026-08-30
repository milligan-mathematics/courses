---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 20: What Survives"
day: 20
chapter_number: 4
chapter: "Geometry"
day_title: "What Survives"
blurb: "Once you've fixed the group, the interesting question is what it can't change. Invariant sets, invariant functions, and metrics are three answers, and each is stricter than the last."
reading: "Section 4.1, invariant sets through the Euclidean metric"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Invariant, and minimally so</h2>

  <p>Definition 4.1.8 calls a collection \(\mathcal{D}\) of figures an <strong>invariant set</strong> if
    applying any transformation in \(G\) to any figure in \(\mathcal{D}\) lands you back in \(\mathcal{D}\).
    Definition 4.1.9 calls it <strong>minimally invariant</strong> if no proper subset of it is also
    invariant.</p>

  <p>Below, a group and a collection of figures. The collection is drawn, one transformation from \(G\) is
    applied, and you can see whether everything stayed inside.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d20-group">the group \(G\)</label>
      <select id="d20-group">
        <option value="trans">all translations</option>
        <option value="eucl">rotations and translations</option>
      </select>
    </div>
    <div class="ctl">
      <label for="d20-set">the collection \(\mathcal{D}\)</label>
      <select id="d20-set">
        <option value="all">all circles</option>
        <option value="r1">all circles of radius 1</option>
        <option value="horiz">all horizontal lines</option>
        <option value="lines">all lines</option>
      </select>
    </div>
    <div class="ctl">
      <label for="d20-amt">apply a transformation</label>
      <input type="range" id="d20-amt" min="0" max="100" step="1" value="0">
    </div>
  </div>

  <canvas class="plot g304" id="d20-inv"></canvas>
  <div class="readout cols" id="d20-inv-out"></div>

  <p>Two of these combinations are worth thinking hard about.</p>

  <p><strong>All horizontal lines, under translations.</strong> Invariant &mdash; sliding a horizontal line
    leaves it horizontal. And <em>minimally</em> invariant, because any two horizontal lines are congruent
    (translate one onto the other), so no proper subset can be closed. Your reading makes the same point with
    "all lines of slope 8."</p>

  <p><strong>All horizontal lines, under rotations and translations.</strong> No longer invariant: rotate and
    the line tilts, landing outside the collection. To repair it you must enlarge \(\mathcal{D}\) to all
    lines. Note which direction the repair goes &mdash; a bigger group forces bigger invariant sets, which is
    Day 19's trade-off seen from the other side.</p>

  <p><strong>All circles, under either group.</strong> Invariant, but not minimally: the circles of radius 1
    form a smaller invariant set inside it. There's no transformation in either group that changes a radius,
    so radius sorts the circles into classes that never mix.</p>

  <p>Theorem 4.1.10 packages this: an invariant set is minimally invariant exactly when any two of its
    figures are congruent. So minimally invariant sets <em>are</em> congruence classes, and finding them is
    the same job as classifying figures up to congruence.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>When is a function a metric?</h2>

  <p>Definition 4.1.14 asks a lot of a metric for a geometry \((S,G)\): it must be an <em>invariant</em>
    function, non-negative and zero only on equal points, symmetric, and satisfy the triangle inequality.
    Five conditions. Watching candidate functions fail them is the fastest way to see what each one is
    for.</p>

  <p>Work through these four candidates on \(\mathbb{C}\), with \(G = \mathcal{E}\) the Euclidean group.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">\(d_1(z,w) = |z - w|\). Which conditions does it satisfy?</div>
        <div class="sstep-body">
          <p>All of them, which is Example 4.1.15 and Lemma 4.1.16. Invariance was checked in
            Example 4.1.11: for \(T(z) = e^{i\theta}z + b\),
            \(|T(z_1)-T(z_2)| = |e^{i\theta}||z_1-z_2| = |z_1-z_2|\).</p>
          <p>Non-negativity and symmetry are immediate from the definition of modulus, and the triangle
            inequality is Lemma 4.1.16. This is the metric of Euclidean geometry.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">\(d_2(z,w) = |z - w|^2\). It's invariant, non-negative, symmetric, and zero
          only when \(z = w\). So which condition fails?</div>
        <div class="sstep-body">
          <p>The <strong>triangle inequality</strong>. Take \(z = 0\), \(v = 1\), \(w = 2\):</p>
          \[ d_2(z,w) = 4, \qquad d_2(z,v) + d_2(v,w) = 1 + 1 = 2. \]
          <p>And \(4 \not\le 2\). Going via a middle point comes out <em>cheaper</em> than going direct, which
            is exactly what the triangle inequality forbids.</p>
          <p>This is the condition that makes "distance" mean something about paths: it says a detour can
            never be a shortcut. Without it you could not define geodesics, and Chapter 1's whole picture of
            straight lines as shortest paths would collapse.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">\(d_3(z,w) = \big||z| - |w|\big|\). What goes wrong here?</div>
        <div class="sstep-body">
          <p>Two things, and they're different in kind.</p>
          <p>First, \(d_3(z,w) = 0\) whenever \(|z| = |w|\), so \(d_3(1, -1) = 0\) even though
            \(1 \neq -1\). It fails the "zero only when equal" condition &mdash; distinct points at zero
            distance. Such a function is called a <em>pseudometric</em>, and it can't distinguish points on a
            common circle.</p>
          <p>Second, and more fundamentally for us: it isn't <strong>invariant</strong>. Translating by
            \(b\) changes \(|z|\), so \(d_3(T(z),T(w)) \neq d_3(z,w)\) in general &mdash; try \(z=0\),
            \(w=1\), \(b = 5\). It measures distance from an origin that Euclidean geometry has no way to
            single out.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Last one. \(d_4(z,w) = \min(|z-w|,\,1)\). Check the conditions, and then
          say what this tells you about the definition.</div>
        <div class="sstep-body">
          <p>It passes all five. Invariance: capping an invariant quantity at \(1\) leaves it invariant.
            Non-negativity, symmetry, and "zero only when equal": clear. The triangle inequality survives
            capping too &mdash; if \(d_4(z,w) = 1\) then the right side is at least... well, each term is at
            most \(1\), and either the direct distance was already at most \(1\), in which case the uncapped
            inequality applies, or it exceeded \(1\) and \(d_4(z,w)=1\) while at least one term on the right
            must then be reasonably large. Checking the cases is a good exercise.</p>
          <p>So it is a perfectly legitimate metric for \((\mathbb{C},\mathcal{E})\), and it's a strange one:
            no two points are ever more than \(1\) apart.</p>
          <p><strong>Which is the point.</strong> Definition 4.1.14 does not pin down "the" distance in a
            geometry &mdash; a geometry can carry many metrics, some of them useless. What the definition
            provides is a <em>standard a candidate must meet</em>, and invariance is the one that ties it to
            the group. When Chapter 5 defines hyperbolic distance, the work is not in inventing a formula;
            it's in showing the formula is invariant under the allowed transformations. Everything else is
            routine.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Reasoning about invariant functions</h2>

  <p>An argument about what invariance gives you.</p>

  <p><strong>Click the step that isn't right.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">A function \(f\) on a collection \(\mathcal{D}\) is invariant if
        \(f(B) = f(T(B))\) for every \(B\) in \(\mathcal{D}\) and every \(T\) in \(G\).</button>
      <button class="fline" type="button">So an invariant function is constant on each congruence class: if
        \(A \cong B\) then \(f(A) = f(B)\).</button>
      <button class="fline" type="button">Hence if \(f(A) \neq f(B)\), then \(A\) and \(B\) are not
        congruent.</button>
      <button class="fline" type="button">And conversely, if \(f(A) = f(B)\) then \(A\) and \(B\) are
        congruent, since \(f\) captures everything the geometry can see.</button>
      <button class="fline" type="button">So computing one invariant function settles every congruence
        question in the geometry.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct &mdash; Definition 4.1.8, quoted.</strong></p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct.</strong> \(A \cong B\) means \(B = T(A)\) for some \(T \in G\), and invariance gives
        \(f(A) = f(T(A)) = f(B)\). Restating invariance as "constant on congruence classes" is the useful
        form, and it's the link back to yesterday's scaffold.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Correct &mdash; and this is what invariants are <em>for</em>.</strong> It's the
        contrapositive of line 2, and it converts a hopeless search ("no transformation in this infinite group
        works") into a finite computation. Day 15 made the same point about the cross ratio.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Here's the error, and it's the converse being assumed rather than proved.</strong></p>
      <p>An invariant function is constant on congruence classes. It is <em>not</em> required to take
        different values on different classes. Nothing forbids \(f\) from giving the same answer for two
        genuinely non-congruent figures.</p>
      <p>The extreme case makes it obvious: \(f(B) = 0\) for every figure is a perfectly good invariant
        function, and it tells you nothing. Less trivially, in Euclidean geometry the function "number of
        connected pieces" is invariant, and it assigns \(1\) to a circle, a square, and a line segment alike.
        No one would conclude those are congruent.</p>
      <p>An invariant that <em>does</em> separate all the classes &mdash; where \(f(A)=f(B)\) really does
        imply \(A\cong B\) &mdash; is called a <strong>complete</strong> invariant, and they are rare and
        valuable. Radius is a complete invariant for circles under the Euclidean group. The cross ratio is a
        complete invariant for ordered quadruples under M&ouml;bius transformations, which is exactly why
        Day 15 made a point of it.</p>
      <p>So the discipline is: an invariant proves figures <em>different</em> for free, and proves them
        <em>the same</em> only if you have separately shown it's complete.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>False, and it inherits line 4's mistake.</strong></p>
      <p>In practice you use several invariants at once. Two circles in Euclidean geometry are congruent iff
        they have the same radius, but comparing two general figures might need area, perimeter, number of
        pieces, and more &mdash; and even then you may not have enough. Classifying figures up to congruence
        is generally hard, and finding a complete invariant is the same thing as solving it.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Invariance in practice</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">In translational geometry \((\mathbb{C},\mathcal{T})\), is the set of all circles of
      radius \(1\) minimally invariant?</p>
    <button class="mc-opt" data-key="a">No &mdash; the circles centred on the real axis form a smaller
      invariant set.</button>
    <button class="mc-opt" data-key="b">Yes &mdash; any two of them are congruent.</button>
    <button class="mc-opt" data-key="c">No &mdash; it isn't invariant to begin with, since translation moves
      the centre.</button>
    <button class="mc-opt" data-key="d">Yes &mdash; radius is an invariant function.</button>

    <div class="mc-fb" data-key="a">
      <p>Check whether that subset is actually invariant. Translate a circle centred at \(0\) by \(i\) and its
        centre is at \(i\), off the real axis &mdash; so the subset isn't closed under the group and isn't an
        invariant set. Translations move centres anywhere.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Right, via Theorem 4.1.10: an invariant set is minimally invariant exactly when any two of its
        figures are congruent. Given two unit circles centred at \(p\) and \(q\), the translation \(T_{q-p}\)
        carries one to the other. So they're all congruent, and the set is minimal.</p>
      <p>Using Theorem 4.1.10 this way is usually much easier than the definition, which would have you rule
        out every proper subset.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Moving the centre is fine &mdash; invariance asks that the image be <em>in the collection</em>, and
        a translated unit circle is still a unit circle. Compare Day 11: preserving a set doesn't mean fixing
        its elements, and here it doesn't mean fixing the figures either, only keeping them in the
        family.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Radius being invariant explains why "all circles" is <em>not</em> minimal &mdash; it splits by
        radius. It doesn't establish that a single radius class is minimal; for that you need the congruence
        argument.</p>
    </div>
  </div>

  <div class="mc" data-answer="d">
    <p class="mc-q">Your reading gives a recipe: for a figure \(A\) in \((S,G)\), the collection
      \(\mathcal{A} = \{T(A) : T \in G\}\) is minimally invariant. Why is it invariant?</p>
    <button class="mc-opt" data-key="a">Because \(G\) contains the identity.</button>
    <button class="mc-opt" data-key="b">Because every figure in it is congruent to \(A\).</button>
    <button class="mc-opt" data-key="c">Because \(G\) is closed under inverses.</button>
    <button class="mc-opt" data-key="d">Because \(G\) is closed under composition.</button>

    <div class="mc-fb" data-key="a">
      <p>The identity guarantees \(A\) itself is in \(\mathcal{A}\), which is worth knowing but isn't
        invariance. Invariance is about what happens when you apply a transformation to a member.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>True, and it's what makes \(\mathcal{A}\) <em>minimally</em> invariant once you know it's invariant
        &mdash; Theorem 4.1.10. But it presupposes the invariance rather than establishing it.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Inverses give congruence its symmetry, which matters elsewhere. They aren't what's needed here.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Right. Take a member \(S(A)\) of \(\mathcal{A}\) and a transformation \(T\) in \(G\). Then
        \(T(S(A)) = (T\circ S)(A)\), and closure puts \(T\circ S\) in \(G\), so the result is again of the
        form "\(A\) moved by something in \(G\)" &mdash; a member of \(\mathcal{A}\).</p>
      <p>The recipe is worth internalising, because it means minimally invariant sets are never mysterious:
        pick a figure, apply everything in the group, and collect the results. The work is always in
        <em>describing</em> the resulting collection, not in finding it.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Enlarging the group makes congruence classes merge, so minimally invariant sets get bigger. Follow one
      figure &mdash; a circle of radius 2 &mdash; through translations, Euclidean, and similarities, and say
      what its minimally invariant set is each time.</li>
    <li>An invariant function proves two figures are different but not that they're the same. Explain why, and
      give the name for the invariants that do both.</li>
    <li>We now have a definition of "metric for a geometry." Before Chapter 5: what would go wrong if we
      tried to use ordinary Euclidean distance as the metric of hyperbolic geometry in the disk?</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    /* ---- invariant sets ---- */
    (function () {
      var group = 'trans', which = 'all', amt = 0;

      function xform() {
        var t = amt / 100;
        if (group === 'trans') return function (z) { return G.add(z, G.scale(c(1.7, 1.1), t)); };
        return function (z) {
          return G.add(G.mul(G.expi(t * 1.1), z), G.scale(c(1.2, 0.6), t));
        };
      }

      // Each collection as a list of figures, plus the test for "is this image
      // still in the collection?".
      function members() {
        var out = [], k;
        if (which === 'all') {
          [[c(-2.6, 1.4), 0.7], [c(0.6, 1.9), 1.3], [c(2.4, -1.2), 0.45],
          [c(-1.4, -1.9), 1.0]].forEach(function (e) {
            out.push({ kind: 'circle', c: e[0], r: e[1] });
          });
        } else if (which === 'r1') {
          [c(-2.6, 1.4), c(0.9, 1.7), c(2.3, -1.5), c(-1.6, -1.7)].forEach(function (z) {
            out.push({ kind: 'circle', c: z, r: 1 });
          });
        } else if (which === 'horiz') {
          for (k = -2; k <= 2; k++) out.push({ kind: 'line', p: c(0, k * 1.5), ang: 0 });
        } else {
          for (k = 0; k < 5; k++) out.push({ kind: 'line', p: c(0, (k - 2) * 1.2), ang: k * 0.42 });
        }
        return out;
      }

      // Does the image still belong to the collection?
      function stillIn(f, T) {
        if (f.kind === 'circle') {
          // Both groups preserve radius, so circles never leave "all circles" or
          // a fixed-radius family.
          return true;
        }
        // A line stays horizontal only if the transformation doesn't rotate.
        var rotated = group !== 'trans' && amt > 0;
        if (which === 'horiz') return !rotated;
        return true;
      }

      var P = G.plane('d20-inv', {
        span: 12, height: 390,
        draw: function (pl) {
          pl.grid(); pl.axes({ ticks: false });
          var T = xform();

          members().forEach(function (f) {
            var ok = stillIn(f, T);
            if (f.kind === 'circle') {
              pl.circle(f.c, f.r, { color: '#c9ced4', width: 1.6, dash: [5, 4] });
              var ctr = T(f.c);
              pl.circle(ctr, f.r, { color: ok ? G.colors.green : G.colors.red, width: 2.6 });
            } else {
              var L = G.lineDir(f.p, f.ang);
              pl.line(L, { color: '#c9ced4', width: 1.4, dash: [5, 4] });
              // Push the line through T by mapping two of its points.
              var a = T(f.p), b = T(G.add(f.p, G.expi(f.ang)));
              pl.line(G.line(a, b), { color: ok ? G.colors.green : G.colors.red, width: 2.6 });
            }
          });
        }
      });

      var SETNAME = {
        all: 'all circles', r1: 'all circles of radius 1',
        horiz: 'all horizontal lines', lines: 'all lines'
      };
      var GRPNAME = { trans: 'all translations', eucl: 'rotations and translations' };

      function refresh() {
        P.redraw();
        var T = xform();
        var all = members().every(function (f) { return stillIn(f, T); });
        // Minimality: are any two members congruent under this group?
        var minimal;
        if (which === 'all') minimal = false;                       // radii differ
        else if (which === 'r1') minimal = true;
        else if (which === 'horiz') minimal = group === 'trans';    // invariant only there
        else minimal = group === 'eucl';                            // all lines, all directions reachable
        G.say('d20-inv-out',
          '<div class="q"><b>G</b><span>' + GRPNAME[group] + '</span></div>' +
          '<div class="q"><b>𝒟</b><span>' + SETNAME[which] + '</span></div>' +
          '<div class="q ' + (all ? 'hit' : 'miss') + '"><b>invariant?</b><span>'
          + (all ? 'yes — every image is still in 𝒟'
            : 'no — the red images have left 𝒟') + '</span></div>' +
          '<div class="q ' + (all && minimal ? 'hit' : 'miss') + '"><b>minimally invariant?</b><span>'
          + (!all ? 'not invariant, so the question does not arise'
            : minimal ? 'yes — any two members are congruent'
              : 'no — a proper subset is also invariant') + '</span></div>');
      }

      ['d20-group', 'd20-set'].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('change', function () {
          group = document.getElementById('d20-group').value;
          which = document.getElementById('d20-set').value;
          refresh();
        });
      });
      G.slider('d20-amt', function (v) { amt = v; refresh(); });
      refresh();
    })();
  })();
</script>
