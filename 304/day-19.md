---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 19: A Geometry Is a Group"
day: 19
chapter_number: 4
chapter: "Geometry"
day_title: "A Geometry Is a Group"
blurb: "Day 1 promised Klein's definition. Here it is: choose a set, choose the motions you'll allow, and the geometry is whatever those motions can't tell apart."
reading: "Section 4.1, groups of transformations through Example 4.1.11"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Same group, different geometry</h2>

  <p>Definition 4.1.3 is short enough to be startling. A <strong>geometry</strong> is a pair \((S, G)\): a set,
    and a group of transformations of it. Two figures are <strong>congruent</strong> when some transformation
    in \(G\) carries one onto the other. That's all.</p>

  <p>The consequence is that the <em>same eight figures</em> sort into completely different congruence classes
    depending on which group you pick. Choose a group, then click a figure to see everything congruent to
    it.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d19-group">the group \(G\)</label>
      <select id="d19-group">
        <option value="trans">all translations</option>
        <option value="rot6">rotations about 0 by multiples of 60°</option>
        <option value="eucl">Euclidean: rotations and translations</option>
        <option value="simil">similarities: \(z \mapsto az+b\), \(a \neq 0\)</option>
      </select>
    </div>
  </div>

  <canvas class="plot g304" id="d19-cong"></canvas>
  <div class="drag-hint">Click a figure.</div>
  <div class="readout" id="d19-cong-out"></div>

  <p>Work down the list and watch the classes merge.</p>

  <p><strong>Translations</strong> can slide but not turn or resize, so two figures are congruent only if they
    are identical copies in the same orientation. This is a very fine-grained geometry &mdash; it can tell a
    tilted square from an upright one, which Euclidean geometry cannot.</p>

  <p><strong>Rotations by multiples of 60°</strong> is a <em>finite</em> group, with six elements. Almost
    nothing is congruent to anything; each figure has at most six companions, and the geometry can distinguish
    almost every pair of figures in the plane. Small group, sharp geometry.</p>

  <p><strong>Euclidean</strong> allows both, so orientation and position stop mattering and only size and
    shape survive. This is the geometry you grew up with.</p>

  <p><strong>Similarities</strong> add dilations, so size goes too. Now every circle is congruent to every
    circle and every square to every square. All that's left is shape.</p>

  <p>Here is the pattern, and it's the one to carry into the rest of the course: <strong>a bigger group means
      coarser congruence and fewer invariants.</strong> Adding transformations doesn't enrich a geometry
    &mdash; it impoverishes it, by taking away distinctions. Klein called his method "subtractive" for exactly
    this reason.</p>

  <p>Which raises the question that Section 4.2 answers. M&ouml;bius geometry has an enormous group. What on
    earth is left?</p>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>Three axioms, three properties of "congruent"</h2>

  <p>The group axioms in Definition 4.1.1 &mdash; identity, closure, inverses &mdash; look like an arbitrary
    checklist. They aren't. Each one exists to make congruence behave, and the correspondence is exact.</p>

  <p>Recall: \(A \cong B\) means there is some \(T \in G\) with \(T(A) = B\).</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Which axiom makes every figure congruent to itself?</div>
        <div class="sstep-body">
          <p><strong>Identity.</strong> \(G\) contains the identity map \(I\), and \(I(A) = A\), so
            \(A \cong A\).</p>
          <p>Drop that axiom and you could have a "geometry" in which a figure isn't congruent to itself,
            which is absurd on its face.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Which axiom makes congruence symmetric &mdash; if \(A \cong B\) then
          \(B \cong A\)?</div>
        <div class="sstep-body">
          <p><strong>Inverses.</strong> If \(T(A) = B\) with \(T \in G\), then \(T^{-1} \in G\) and
            \(T^{-1}(B) = A\), so \(B \cong A\).</p>
          <p>Without it, "congruent" would be a one-way street: \(A\) could be congruent to \(B\) while \(B\)
            is not congruent to \(A\). That is why Section 3.1 was so insistent that its maps be one-to-one
            and onto &mdash; the inverse has to exist before you can ask whether it's in \(G\).</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">And which makes it transitive?</div>
        <div class="sstep-body">
          <p><strong>Closure.</strong> If \(T(A) = B\) and \(S(B) = C\) with \(T, S \in G\), then
            \(S\circ T \in G\) and \((S\circ T)(A) = C\), so \(A \cong C\).</p>
          <p>Transitivity is what lets congruence sort figures into <em>classes</em> where everything in a
            class is congruent to everything else. Without it you'd have a tangled web of pairwise
            relationships and no way to speak of "the congruence class of \(A\)."</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Put it together. What have the three axioms bought?</div>
        <div class="sstep-body">
          <p>Reflexive, symmetric, transitive: congruence is an <strong>equivalence relation</strong>, so it
            partitions the figures into disjoint classes.</p>
          <p>That partition <em>is</em> the geometry. Everything a geometry can say &mdash; every theorem
            about triangles or circles or distances &mdash; is ultimately a statement about which figures
            land in which class, or about functions constant on classes. Definition 4.1.8's invariant
            functions are exactly the functions that are constant on congruence classes.</p>
          <p>So the group axioms aren't a checklist inherited from algebra. They are precisely the conditions
            under which "same shape" means anything at all. Any collection of transformations failing one of
            them gives a notion of sameness too broken to build on.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Is this a group?</h2>

  <p>Someone is checking whether the reflections of \(\mathbb{C}\) across lines through the origin form a
    group. Write \(\rho_\theta\) for the reflection across the line through the origin at angle \(\theta\),
    and let \(G = \{\rho_\theta : \theta \in \mathbb{R}\}\).</p>

  <p><strong>Click the step that isn't right.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Each \(\rho_\theta\) is a transformation of \(\mathbb{C}\): it's
        one-to-one and onto, with formula \(\rho_\theta(z) = e^{2i\theta}\overline{z}\).</button>
      <button class="fline" type="button">Inverses: each reflection is its own inverse, since reflecting
        twice across the same line returns every point. So \(\rho_\theta^{-1} = \rho_\theta \in G\).</button>
      <button class="fline" type="button">Closure: composing two reflections across lines through the origin
        gives a map that fixes the origin and is built from reflections, so it is again a reflection across
        a line through the origin.</button>
      <button class="fline" type="button">Identity: taking \(\theta\) to be any angle,
        \(\rho_\theta\circ\rho_\theta\) is the identity, and by closure the identity is in \(G\).</button>
      <button class="fline" type="button">All three axioms hold, so \(G\) is a group of transformations and
        \((\mathbb{C}, G)\) is a geometry.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct.</strong> Reflection across the line through the origin at angle \(\theta\) is
        \(z \mapsto e^{2i\theta}\overline{z}\) &mdash; the form \(e^{i\alpha}\overline{z}+b\) from
        Section 3.1 with \(b = 0\) and \(\alpha = 2\theta\). It's a bijection and it's its own inverse.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct.</strong> \(\rho_\theta(\rho_\theta(z)) = e^{2i\theta}\overline{e^{2i\theta}
        \overline{z}} = e^{2i\theta}e^{-2i\theta}z = z\). Self-inverse, so the inverse axiom holds.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>This is where it fails: the composition of two reflections is a rotation, not a
          reflection.</strong></p>
      <p>You proved this on Day 8. Theorem 3.1.17: a rotation about \(z_0\) is the composition of reflections
        across two lines meeting at \(z_0\), and the rotation angle is <em>twice</em> the angle between the
        mirrors. Algebraically:</p>
      \[ \rho_\alpha(\rho_\beta(z)) = e^{2i\alpha}\overline{e^{2i\beta}\overline{z}}
      = e^{2i\alpha}e^{-2i\beta}z = e^{2i(\alpha-\beta)}z, \]
      <p>which is a rotation about the origin, and not a reflection unless it's the identity. There's no
        \(\overline{z}\) left.</p>
      <p>The tell is orientation, and it's a fast check worth internalising: reflections reverse it, rotations
        preserve it, and no map can do both. The step's reasoning &mdash; "fixes the origin and is built from
        reflections, so it's a reflection" &mdash; conflates "built from" with "is one." Parity is exactly
        what that conflation ignores, and parity has been the hinge of this whole chapter.</p>
      <p>So \(G\) fails closure and is not a group. To fix it you must add the rotations, and then you have
        the orthogonal group &mdash; all maps \(e^{i\alpha}z\) and \(e^{i\alpha}\overline{z}\) &mdash; which
        genuinely is one.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>The conclusion is true but the reasoning leans on the broken step.</strong> The identity is
        not itself a reflection &mdash; a reflection moves every point off its mirror &mdash; so it isn't in
        \(G\) as defined, and the appeal to closure can't rescue it because closure fails.</p>
      <p>Worth noting how the errors compound: line 3's false closure claim is used in line 4 to manufacture
        the identity. One bad axiom check can make the others look fine.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>Wrong, since closure and identity both fail.</strong></p>
      <p>Worth extracting the practical lesson: <em>closure is the axiom that fails in practice</em>. Identity
        and inverses are usually easy to see. Composition is where a family that was chosen for its "shape"
        turns out not to be closed &mdash; because composing two maps of one shape typically produces a
        different shape. Whenever you check whether a set of transformations is a group, spend your effort
        there.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Groups and what they cost</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Consider \(H = \{T(z) = az + b : |a| \geq 1\}\), the general linear transformations that
      don't shrink. Is \(H\) a group of transformations of \(\mathbb{C}\)?</p>
    <button class="mc-opt" data-key="a">Yes &mdash; it has the identity, and composing two of them gives
      another.</button>
    <button class="mc-opt" data-key="b">No &mdash; it doesn't contain the identity.</button>
    <button class="mc-opt" data-key="c">No &mdash; it isn't closed under inverses.</button>
    <button class="mc-opt" data-key="d">No &mdash; it isn't closed under composition.</button>

    <div class="mc-fb" data-key="a">
      <p>Both those claims are true &mdash; the identity has \(|a| = 1\), and composing gives multiplier
        \(a_2a_1\) with \(|a_2a_1| = |a_2||a_1| \geq 1\). But two out of three axioms isn't enough, and the
        third is the one that fails.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>It does: \(T(z) = z\) has \(a = 1\), and \(|1| \geq 1\).</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Right. Take \(T(z) = 2z\), which is in \(H\). Its inverse is \(T^{-1}(z) = \tfrac12 z\), with
        \(|a| = \tfrac12 \lt 1\). Not in \(H\).</p>
      <p>And you can see the damage without any algebra, using the scaffold: congruence would stop being
        symmetric. A small disk would be congruent to a big one (stretch it) while the big one is not
        congruent to the small one (that needs a shrink). "Same shape" would depend on which figure you
        started from, which is incoherent.</p>
      <p>Failing closure under inverses is a characteristic symptom of defining a family by an
        <em>inequality</em>. Inequalities have a preferred direction; inverting reverses it.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>It is closed under composition, as computed above. Composition is usually the axiom to worry about,
        which makes this a reasonable first guess &mdash; but here the inequality bites on inverses
        instead.</p>
    </div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Definition 4.1.12 calls a geometry <strong>homogeneous</strong> if any two points are
      congruent. Which of the four groups in the first activity gives a homogeneous geometry?</p>
    <button class="mc-opt" data-key="a">Translations, Euclidean, and similarities &mdash; but not the
      rotations by 60°.</button>
    <button class="mc-opt" data-key="b">Only the similarities, since only they can move any figure
      anywhere.</button>
    <button class="mc-opt" data-key="c">All four.</button>
    <button class="mc-opt" data-key="d">Only Euclidean, since homogeneity is a Euclidean notion.</button>

    <div class="mc-fb" data-key="a">
      <p>Right. Any group containing all translations is homogeneous, because \(T_{q-p}\) carries \(p\) to
        \(q\) whatever \(p\) and \(q\) are &mdash; that's Example 4.1.13's argument. So the first, third and
        fourth all qualify.</p>
      <p>The rotations by \(60^\circ\) do not. Every one of them fixes the origin, so the origin is congruent
        to nothing but itself; and a point at distance \(3\) can never reach a point at distance \(5\),
        because rotations preserve distance from the centre. Points at different radii live in different
        congruence classes.</p>
      <p>Notice the connection back to Day 2: the rotation geometry is the algebraic version of a
        <em>non-homogeneous surface</em>. A resident could tell where they were, by measuring their distance
        from the one special point &mdash; exactly as the bug on the donut could tell the outer wall from the
        inner one.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Translations alone are already enough &mdash; there's a translation carrying any point to any other,
        so \((\mathbb{C},\mathcal{T})\) is homogeneous. Homogeneity is a low bar; it only asks about
        <em>points</em>, not about larger figures.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>The 60° rotations all fix the origin, so no other point is congruent to it.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Homogeneity is defined for any geometry \((S,G)\) whatsoever &mdash; it's Definition 4.1.12, stated
        in complete generality. It's exactly the property Chapter 1 wanted from a surface, and it will be
        asked of hyperbolic and elliptic geometry too.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>"A bigger group means a coarser geometry." State the trade-off in terms of invariants, and name one
      quantity that survives the Euclidean group but not the similarities.</li>
    <li>Congruence is an equivalence relation because \(G\) is a group. Which axiom would you have to drop to
      make congruence fail to be transitive, and what would the resulting mess look like?</li>
    <li>Definition 4.1.12 gives two words: <em>homogeneous</em> and <em>isotropic</em>. Give an example from
      today of a geometry that is one and not the other.</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    /* ---- congruence under four different groups ---- */
    (function () {
      // Deliberately not the figures of the textbook's Figure 4.1.7.
      var FIGS = [
        { id: 0, kind: 'circle', c: c(-3.4, 1.9), r: 0.8 },
        { id: 1, kind: 'circle', c: c(-0.4, 2.4), r: 0.8 },
        { id: 2, kind: 'circle', c: c(2.6, 2.1), r: 1.5 },
        { id: 3, kind: 'seg', a: c(-3.7, -0.4), b: c(-2.1, -0.4) },
        { id: 4, kind: 'seg', a: c(-0.9, -1.0), b: c(0.35, 0.0) },
        { id: 5, kind: 'seg', a: c(1.9, -0.9), b: c(4.3, -0.9) },
        { id: 6, kind: 'square', c: c(-2.6, -2.6), s: 1.15, ang: 0 },
        { id: 7, kind: 'square', c: c(1.4, -2.7), s: 1.15, ang: 0.55 }
      ];

      var group = 'trans', picked = 0;

      function segVec(f) { return G.sub(f.b, f.a); }
      function segLen(f) { return G.abs(segVec(f)); }

      function sameKind(f, g) { return f.kind === g.kind; }

      // Congruence tests, one per group.
      function cong(f, g) {
        if (!sameKind(f, g)) return false;
        if (group === 'simil') return true;            // any az+b: shape only

        if (group === 'eucl') {                        // rotations + translations
          if (f.kind === 'circle') return Math.abs(f.r - g.r) < 1e-9;
          if (f.kind === 'seg') return Math.abs(segLen(f) - segLen(g)) < 1e-9;
          return Math.abs(f.s - g.s) < 1e-9;
        }

        if (group === 'trans') {                       // slide only
          if (f.kind === 'circle') return Math.abs(f.r - g.r) < 1e-9;
          if (f.kind === 'seg') {
            // Same displacement vector, up to which end you call first.
            return G.near(segVec(f), segVec(g), 1e-9) || G.near(segVec(f), G.neg(segVec(g)), 1e-9);
          }
          var da = Math.abs(f.ang - g.ang) % (Math.PI / 2);
          return Math.abs(f.s - g.s) < 1e-9 && (da < 1e-9 || Math.abs(da - Math.PI / 2) < 1e-9);
        }

        // Rotations about 0 by multiples of 60 degrees: check all six.
        for (var k = 0; k < 6; k++) {
          var R = G.expi(k * Math.PI / 3);
          if (f.kind === 'circle') {
            if (G.near(G.mul(R, f.c), g.c, 1e-6) && Math.abs(f.r - g.r) < 1e-9) return true;
          } else if (f.kind === 'seg') {
            if ((G.near(G.mul(R, f.a), g.a, 1e-6) && G.near(G.mul(R, f.b), g.b, 1e-6)) ||
              (G.near(G.mul(R, f.a), g.b, 1e-6) && G.near(G.mul(R, f.b), g.a, 1e-6))) return true;
          } else {
            var ang = f.ang + k * Math.PI / 3;
            var da2 = Math.abs(ang - g.ang) % (Math.PI / 2);
            if (G.near(G.mul(R, f.c), g.c, 1e-6) && Math.abs(f.s - g.s) < 1e-9 &&
              (da2 < 1e-6 || Math.abs(da2 - Math.PI / 2) < 1e-6)) return true;
          }
        }
        return false;
      }

      function squarePts(f) {
        var out = [];
        for (var k = 0; k < 4; k++) {
          var t = f.ang + Math.PI / 4 + k * Math.PI / 2;
          out.push(G.add(f.c, G.fromPolar(f.s * Math.SQRT1_2 * Math.SQRT2, t)));
        }
        return out;
      }

      function centre(f) {
        if (f.kind === 'circle' || f.kind === 'square') return f.c;
        return G.scale(G.add(f.a, f.b), 0.5);
      }

      var P = G.plane('d19-cong', {
        span: 11, height: 400,
        draw: function (pl) {
          pl.grid(); pl.axes({ ticks: false });
          var sel = FIGS[picked];

          FIGS.forEach(function (f) {
            var isSel = f.id === picked;
            var isCong = !isSel && cong(sel, f);
            var col = isSel ? G.colors.blue : isCong ? G.colors.green : '#c2c8ce';
            var wid = isSel ? 3.2 : isCong ? 2.8 : 1.8;
            if (f.kind === 'circle') pl.circle(f.c, f.r, { color: col, width: wid });
            else if (f.kind === 'seg') pl.seg(f.a, f.b, { color: col, width: wid });
            else pl.poly(squarePts(f), { closed: true, color: col, width: wid });
          });

          pl.dot(centre(sel), { color: G.colors.blue, r: 3 });
        }
      });

      // Click-to-select: find the figure whose centre is nearest the click.
      P.canvas.addEventListener('click', function (ev) {
        if (P._drag) return;
        var rect = P.canvas.getBoundingClientRect();
        var w = P.toWorld(ev.clientX - rect.left, ev.clientY - rect.top);
        var best = picked, bd = 1e9;
        FIGS.forEach(function (f) {
          var d = G.dist(centre(f), w);
          if (d < bd) { bd = d; best = f.id; }
        });
        picked = best;
        refresh();
      });

      var NAMES = {
        trans: 'all translations',
        rot6: 'rotations about 0 by multiples of 60°',
        eucl: 'the Euclidean group — rotations and translations',
        simil: 'similarities z ↦ az + b'
      };

      function refresh() {
        P.redraw();
        var sel = FIGS[picked];
        var n = FIGS.filter(function (f) { return f.id !== picked && cong(sel, f); }).length;
        var kindName = { circle: 'circle', seg: 'segment', square: 'square' }[sel.kind];
        G.say('d19-cong-out',
          '<b>G = ' + NAMES[group] + '.</b> The selected ' + kindName + ' (blue) is congruent to <b>'
          + n + '</b> of the other seven figures' + (n ? ', shown in green' : '') + '. '
          + 'Click another figure, or change the group.');
      }

      var sel = document.getElementById('d19-group');
      if (sel) sel.addEventListener('change', function () { group = sel.value; refresh(); });
      refresh();
    })();
  })();
</script>
