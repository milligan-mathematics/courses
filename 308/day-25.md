---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 25: Pinwheels, Flowers and Lattices"
day: 25
chapter_number: 12
chapter: "Matrix Groups and Symmetry"
day_title: "Pinwheels, Flowers and Lattices"
blurb: "Finite symmetry in the plane comes in two shapes: a pinwheel that turns and never flips, or a flower that turns and flips. A repeating pattern rests on a lattice, and a lattice can be built from many different pairs of vectors."
reading: "Chapter 12, Day 2: Section 12.2, Symmetry, from the isometries of the plane through the finite symmetry groups, lattices and their bases"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Five turns and five flips</h2>

  <p>Judson's \(D_n\) is the symmetry group of a regular \(n\)-gon. Here \(n = 5\). The button \(r\) turns the pentagon one
    notch, and \(s\) flips it across the dashed line through vertex A. Predict first: how many presses of \(r\) bring it
    back to the start? How many positions can it reach in all?</p>

  <div id="d25-poly"></div>

  <p>Check your prediction against the readout. \(D_n\) has \(2n\) elements: \(n\) turns and \(n\) flips.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Pinwheels and flowers</h2>

  <p>These are the two kinds of finite symmetry the reading allows in the plane. Each has \(n\) identical motifs around one
    center. A pinwheel's motif has no mirror line, so its group is \(\mathbb Z_n\). A flower's motif is symmetric about
    its own axis, so the flower can also flip, and its group is \(D_n\). Predict first: how many mirror lines does a
    flower with six petals have? Then check the picker.</p>

  <div class="ctl-row">
    <div class="ctl"><label for="d25-n">Motifs, n</label><select id="d25-n"></select></div>
    <div class="ctl"><label for="d25-kind">Shape</label>
      <select id="d25-kind">
        <option value="pin">Pinwheel (turns only)</option>
        <option value="flower">Flower (turns and flips)</option>
      </select></div>
  </div>
  <div class="a308-poly-wrap" id="d25-rosette"></div>
  <div class="readout a308-readout" id="d25-rout" aria-live="polite"></div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Finite symmetry groups, counted</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">A figure's symmetries are the turns by \(0^\circ\), \(120^\circ\) and \(240^\circ\), and nothing else.
      Which group is its symmetry group?</p>
    <button class="mc-opt" data-key="a">\(D_3\)</button>
    <button class="mc-opt" data-key="b">\(\mathbb Z_3\)</button>
    <button class="mc-opt" data-key="c">\(\mathbb Z_6\)</button>
    <button class="mc-opt" data-key="d">\(\mathbb Z_2\)</button>
    <div class="mc-fb" data-key="a"><p>\(D_3\) has three flips, and a figure with no flips has no mirror lines.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. Three turns and no flips: the cyclic group of order \(3\).</p></div>
    <div class="mc-fb" data-key="c"><p>\(\mathbb Z_6\) needs six turns, \(60^\circ\) apart. This figure has three.</p></div>
    <div class="mc-fb" data-key="d"><p>\(\mathbb Z_2\) is a half turn, and the \(120^\circ\) turn has order \(3\).</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">How many symmetries does a regular pentagon have?</p>
    <button class="mc-opt" data-key="a">\(5\)</button>
    <button class="mc-opt" data-key="b">\(10\)</button>
    <button class="mc-opt" data-key="c">\(6\)</button>
    <button class="mc-opt" data-key="d">\(12\)</button>
    <div class="mc-fb" data-key="a"><p>That counts only the turns. Each turn can be followed by a flip, giving five more.</p></div>
    <div class="mc-fb" data-key="b"><p>Right: five turns and five flips, so \(D_5\) has \(2 \cdot 5 = 10\) elements.</p></div>
    <div class="mc-fb" data-key="c"><p>Six is the count for a triangle, \(D_3\).</p></div>
    <div class="mc-fb" data-key="d"><p>Twelve is the count for a regular hexagon, \(D_6\).</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>The only finite symmetry groups of the plane</h2>

  <p>The reading proves that the only finite symmetry groups in \(\mathbb R^2\) are \(\mathbb Z_n\) and \(D_n\), in two
    cases. Let \(G\) be a finite group of symmetries of the plane, and commit to each step before you open it.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Which two kinds of isometry can a finite group not contain, and why?</div>
        <div class="sstep-body"><p>Translations and glide reflections. A nonzero translation has infinite order, and a glide
          reflection's square is a nonzero translation. Judson takes the origin to be fixed by \(G\) (the centroid of a finite
          orbit is one such point), so \(G\) sits inside \(O(2)\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Each element of \(O(2)\) is a turn, with determinant \(1\), or a flip, with determinant
          \(-1\). Into which two cases does that split \(G\)?</div>
        <div class="sstep-body"><p>Case 1: every element is a turn, so \(G\) is a pinwheel. Case 2: some flip \(T\) lies in
          \(G\), so \(G\) is a flower.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Case 1. Why does a smallest positive turning angle \(\theta_0\) exist, and why is every
          turn in \(G\) a power of \(R_{\theta_0}\)?</div>
        <div class="sstep-body"><p>\(G\) is finite, so the smallest angle exists. If \(R_\theta \in G\) were not a power of
          \(R_{\theta_0}\), subtracting the largest multiple of \(\theta_0\) below \(\theta\) would leave a turn in \(G\) with
          a smaller positive angle. So \(G = \mathbb Z_n\), with \(\theta_0 = 2\pi/n\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Case 2. Fix a flip \(T \in G\), and let \(K\) be the turns in \(G\). Why is every flip in
          \(G\) of the form \(TR\) with \(R \in K\)?</div>
        <div class="sstep-body"><p>For a flip \(S \in G\), \(TS\) has determinant \((-1)(-1) = 1\), so \(R = TS\) is a turn in
          \(G\) and \(S = TR\). Hence \(G = K \cup TK\), and \(|G| = 2n\) when \(|K| = n\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Let \(R = R_{2\pi/n}\) and \(T\) a flip in \(G\). What is \(TRT\), and what does it say
          about \(G\)?</div>
        <div class="sstep-body"><p>\(TRT = R^{-1}\), since conjugating a turn by a flip reverses its direction. So \(G\) is
          generated by \(R\) (order \(n\)) and \(T\) (order \(2\)) with \(TRT = R^{-1}\): that is \(D_n\).</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Two bases, one lattice?</h2>

  <p>A lattice is the set of whole-number combinations \(m\mathbf b_1 + n\mathbf b_2\) of its basis. Here
    \(\mathbf y_1 = u_{11}\mathbf b_1 + u_{12}\mathbf b_2\) and \(\mathbf y_2 = u_{21}\mathbf b_1 + u_{22}\mathbf b_2\), so the
    integer matrix \(U\) records a second basis. Predict: will the shear give the same dots? Will doubling the first
    vector? Then try both. Drag the blue handles (they snap to whole numbers) or type.</p>

  <div class="ctl-row">
    <div class="ctl"><label for="d25-b1x">b₁ x</label><input class="a308-num" id="d25-b1x" type="number" step="1"></div>
    <div class="ctl"><label for="d25-b1y">b₁ y</label><input class="a308-num" id="d25-b1y" type="number" step="1"></div>
    <div class="ctl"><label for="d25-b2x">b₂ x</label><input class="a308-num" id="d25-b2x" type="number" step="1"></div>
    <div class="ctl"><label for="d25-b2y">b₂ y</label><input class="a308-num" id="d25-b2y" type="number" step="1"></div>
  </div>
  <div class="ctl-row">
    <div class="ctl"><label for="d25-u">Second basis</label><select id="d25-u"></select></div>
    <div class="ctl"><label for="d25-u11">u₁₁</label><input class="a308-num" id="d25-u11" type="number" step="1"></div>
    <div class="ctl"><label for="d25-u12">u₁₂</label><input class="a308-num" id="d25-u12" type="number" step="1"></div>
    <div class="ctl"><label for="d25-u21">u₂₁</label><input class="a308-num" id="d25-u21" type="number" step="1"></div>
    <div class="ctl"><label for="d25-u22">u₂₂</label><input class="a308-num" id="d25-u22" type="number" step="1"></div>
  </div>
  <div class="a308-poly-wrap" id="d25-lat"></div>
  <div class="readout a308-readout" id="d25-lout" aria-live="polite"></div>

  <p>Blue dots are the first lattice; orange rings are the second. The two bases give the same lattice exactly when every
    ring sits on a dot <em>and</em> every dot has a ring, that is, when each basis lies in the other's lattice. Rings on
    dots alone are not enough: the doubling preset puts every ring on a dot and still misses half the dots.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Which pairs and matrices are bases?</h2>

  <div class="mc" data-answer="a">
    <p class="mc-q">Let \(L\) be the whole-number combinations of \((1, 0)\) and \((0, 2)\). Which pair is also a basis for
      \(L\)?</p>
    <button class="mc-opt" data-key="a">\((1, 2)\) and \((0, 2)\)</button>
    <button class="mc-opt" data-key="b">\((2, 0)\) and \((0, 2)\)</button>
    <button class="mc-opt" data-key="c">\((1, 3)\) and \((0, 2)\)</button>
    <button class="mc-opt" data-key="d">\((3, 2)\) and \((0, 2)\)</button>
    <div class="mc-fb" data-key="a"><p>Right. \((1, 0) = (1, 2) - (0, 2)\), so each pair is a whole-number combination of the
      other.</p></div>
    <div class="mc-fb" data-key="b"><p>Every first coordinate here is even, so \((1, 0)\) is missed.</p></div>
    <div class="mc-fb" data-key="c"><p>\((1, 3)\) is not in \(L\), whose points have an even second coordinate.</p></div>
    <div class="mc-fb" data-key="d"><p>Combinations of these have first coordinate a multiple of \(3\), so \((1, 0)\) is missed.</p></div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Row \(i\) of an integer matrix \(U\) gives the \(i\)th new basis vector in terms of the old ones. Which
      \(U\) could relate two bases of the same lattice?</p>
    <button class="mc-opt" data-key="a">\(\begin{pmatrix}1&amp;2\\2&amp;4\end{pmatrix}\)</button>
    <button class="mc-opt" data-key="b">\(\begin{pmatrix}1&amp;2\\3&amp;4\end{pmatrix}\)</button>
    <button class="mc-opt" data-key="c">\(\begin{pmatrix}3&amp;2\\1&amp;1\end{pmatrix}\)</button>
    <button class="mc-opt" data-key="d">\(\begin{pmatrix}2&amp;3\\2&amp;5\end{pmatrix}\)</button>
    <div class="mc-fb" data-key="a"><p>Determinant \(0\): the new vectors are parallel, so they are not a basis.</p></div>
    <div class="mc-fb" data-key="b"><p>Determinant \(-2\): the second lattice has index \(2\) in the first.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. The determinant is \(3 - 2 = 1\), so \(U^{-1}\) is whole-number too.</p></div>
    <div class="mc-fb" data-key="d"><p>Determinant \(4\): the second lattice has index \(4\) in the first.</p></div>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Is a lattice's symmetry group finite?</h2>

  <p>A classmate claims the symmetry group of any lattice is finite, since a lattice is a discrete set of points.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Let \(L\) be the whole-number combinations of a basis \(\mathbf b_1, \mathbf b_2\).</button>
      <button class="fline" type="button">A symmetry of \(L\) is an isometry \(f\) of the plane with \(f(L) = L\).</button>
      <button class="fline" type="button">Such an \(f\) fixes the origin, because the origin is the only special point of a lattice.</button>
      <button class="fline" type="button">So \(f\) is linear, given by an orthogonal matrix \(A\) that sends \(\mathbf b_1\) and \(\mathbf b_2\) to lattice vectors of the same lengths.</button>
      <button class="fline" type="button">Only finitely many lattice vectors have a given length, so there are finitely many choices for \(A\). The group is finite. \(\blacksquare\)</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> That is the definition of a lattice.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> That is what a symmetry is.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>This is the flaw.</strong> The origin is not special for a lattice. The
      translation by \(\mathbf b_1\) sends \(L\) onto itself (since \(L + \mathbf b_1 = L\)) and moves the origin to
      \(\mathbf b_1\). Translations by lattice vectors are symmetries, so the group is infinite.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine, given line 3.</strong> A map fixing the origin is linear, and a
      linear isometry is an orthogonal matrix.</p></div>
    <div class="flaw-verdict" data-key="5"><p><strong>Fine, given line 4.</strong> Once \(A\) is fixed there are finitely
      many choices. The conclusion fails only because line 3 threw out the translations.</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Can a figure have a turn of order \(3\) and exactly one mirror line? Answer from the group, not from a picture.</li>
    <li>Find two different lattices with the same cell area. Why does equal area not make two lattices the same?</li>
    <li>Every lattice has a shortest nonzero vector. Why must a symmetry that fixes the origin send it to another vector of
      the same length? Keep that in mind for the demo on the next page.</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;
    var AVOID_NOTE = 'That one is on your homework, so this page won’t do it for you. Work it by hand, then bring it to class, or try a different basis here.';
    function f1(x) { var s = x.toFixed(1); return s === '-0.0' ? '0.0' : s; }
    function P(list) { return list.map(function (q) { return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' '); }
    A.polygon('d25-poly', { n: 5, names: ['A', 'B', 'C', 'D', 'E'], mode: 'explore' });

    /* ---- pinwheels and flowers ---- */
    (function () {
      var nSel = document.getElementById('d25-n'), kSel = document.getElementById('d25-kind'), out = document.getElementById('d25-rout');
      var svg = A.svg('svg', { viewBox: '0 0 300 300', role: 'img', style: 'max-width:300px;width:100%;height:auto',
        'aria-label': 'Identical motifs arranged around one center, as a pinwheel or a flower' });
      document.getElementById('d25-rosette').appendChild(svg);
      for (var n0 = 2; n0 <= 8; n0++) nSel.appendChild(A.h('option', { value: n0, text: String(n0) }));
      nSel.value = '5';
      var ARM = [[0.12, -0.12], [0.95, 0.02], [0.62, 0.42], [0.18, 0.22]];   // a hook with no mirror line
      var PETAL = [[0.15, 0], [0.55, 0.22], [1, 0], [0.55, -0.22]];         // symmetric about its own axis
      function place(shape, th) {
        return shape.map(function (p) {
          return [150 + 120 * (p[0] * Math.cos(th) - p[1] * Math.sin(th)), 150 - 120 * (p[0] * Math.sin(th) + p[1] * Math.cos(th))];
        });
      }
      function motif(list, attrs) { return A.svg('polygon', Object.assign({ points: P(list) }, attrs)); }
      function draw() {
        var n = Number(nSel.value), flower = kSel.value === 'flower';
        while (svg.firstChild) svg.removeChild(svg.firstChild);
        for (var k = 0; flower && k < n; k++) {
          var a = Math.PI * k / n;
          svg.appendChild(A.svg('line', { x1: 150 - 130 * Math.cos(a), y1: 150 + 130 * Math.sin(a), x2: 150 + 130 * Math.cos(a),
            y2: 150 - 130 * Math.sin(a), stroke: '#9aa0a6', 'stroke-width': 1.2, 'stroke-dasharray': '5 4' }));
        }
        for (var j = 0; j < n; j++) {
          var th = 2 * Math.PI * j / n;
          svg.appendChild(flower ? motif(place(PETAL, th), { fill: 'rgba(243,110,36,0.25)', stroke: '#F36E24', 'stroke-width': 2 })
            : motif(place(ARM, th), { fill: 'rgba(0,156,222,0.22)', stroke: '#009CDE', 'stroke-width': 2 }));
        }
        out.innerHTML = flower
          ? '<strong>Flower: turns and flips.</strong> ' + n + ' turns and ' + n + ' mirror lines, so the group is D<sub>' + n + '</sub> with ' + (2 * n) + ' elements.'
          : '<strong>Pinwheel: turns only.</strong> The turns by multiples of ' + f1(360 / n) + '° are its only symmetries, so the group is Z<sub>' + n + '</sub> with ' + n + ' elements.';
      }
      nSel.addEventListener('change', draw);
      kSel.addEventListener('change', draw);
      draw();
    })();

    /* ---- lattices and their bases ---- */
    (function () {
      var S = 34, C = 150, LIM = 4.3, dragging = -1;
      var b = [[3, 1], [1, 2]], U = [1, 0, 0, 1];
      var PRE_U = [
        { name: 'Same basis (U = I)', u: [1, 0, 0, 1] },
        { name: 'Swap the two vectors', u: [0, 1, 1, 0] },
        { name: 'Shear: y₁ = b₁ + b₂', u: [1, 1, 0, 1] },
        { name: 'Double the first: y₁ = 2b₁', u: [2, 0, 0, 1] },
        { name: 'Mixed: y₁ = 3b₁ + 2b₂, y₂ = 4b₁ + 3b₂', u: [3, 2, 4, 3] },
        { name: 'Dependent: y₂ = 2y₁', u: [1, 2, 2, 4] }
      ];
      // Two bases held back for homework: the widget shows AVOID_NOTE instead of the pairing.
      var AVOID = [[[2, 1], [1, 1]], [[12, 5], [7, 3]]];
      var sel = document.getElementById('d25-u'), out = document.getElementById('d25-lout');
      var ids = ['d25-b1x', 'd25-b1y', 'd25-b2x', 'd25-b2y', 'd25-u11', 'd25-u12', 'd25-u21', 'd25-u22'];
      var svg = A.svg('svg', { viewBox: '0 0 300 300', role: 'img', style: 'max-width:300px;width:100%;height:auto;touch-action:none',
        'aria-label': 'Lattice dots of two bases, with handles on the first basis vectors' });
      document.getElementById('d25-lat').appendChild(svg);
      PRE_U.forEach(function (p, i) { sel.appendChild(A.h('option', { value: i, text: p.name })); });
      sel.appendChild(A.h('option', { value: 'hand', text: 'Your own U' }));
      sel.value = '0';

      function X(x) { return C + S * x; }
      function Y(y) { return C - S * y; }
      function cross(p, q) { return p[0] * q[1] - p[1] * q[0]; }
      function key(p) { return p[0] + ',' + p[1]; }
      function num(id) { var v = Number(document.getElementById(id).value); return isFinite(v) ? v : 0; }
      function second() {
        return [[U[0] * b[0][0] + U[1] * b[1][0], U[0] * b[0][1] + U[1] * b[1][1]],
          [U[2] * b[0][0] + U[3] * b[1][0], U[2] * b[0][1] + U[3] * b[1][1]]];
      }
      function fillInputs() {
        [b[0][0], b[0][1], b[1][0], b[1][1], U[0], U[1], U[2], U[3]].forEach(function (v, i) { document.getElementById(ids[i]).value = v; });
      }
      function points(v1, v2) {
        var pts = [];
        for (var i = -8; i <= 8; i++) for (var j = -8; j <= 8; j++) {
          var p = [i * v1[0] + j * v2[0], i * v1[1] + j * v2[1]];
          if (Math.abs(p[0]) <= LIM && Math.abs(p[1]) <= LIM) pts.push(p);
        }
        return pts;
      }
      function circ(p, attrs) { return A.svg('circle', Object.assign({ cx: X(p[0]), cy: Y(p[1]) }, attrs)); }
      function vec(p, attrs) { return A.svg('line', Object.assign({ x1: C, y1: C, x2: X(p[0]), y2: Y(p[1]) }, attrs)); }
      function verdict(d) {
        if (cross(b[0], b[1]) === 0) return 'The first two vectors are parallel, so they are not a basis.';
        if (d === 0) return 'The new vectors are parallel (det U = 0), so they are not a basis.';
        if (!U.every(Number.isInteger)) return 'U has a fraction in it, so the new vectors are not lattice points and the two lattices differ.';
        if (Math.abs(d) === 1) return '<strong>Same lattice.</strong> Every ring is on a dot and every dot has a ring: U has whole-number entries and det U = ' + d + ', so U⁻¹ also has whole-number entries, and each basis lies in the other’s lattice.';
        return '<strong>Different lattice.</strong> Every ring is on a dot, but det U = ' + d + ' means the second lattice holds only 1 of every ' + Math.abs(d) + ' points, so many dots have no ring.';
      }
      function draw() {
        var y = second(), d = U[0] * U[3] - U[1] * U[2];
        var k1 = [key(b[0]), key(b[1])].sort().join(' '), k2 = [key(y[0]), key(y[1])].sort().join(' ');
        var av = AVOID.map(function (pr) { return pr.map(key).sort().join(' '); });
        var held = (k1 === av[0] && k2 === av[1]) || (k1 === av[1] && k2 === av[0]);
        while (svg.firstChild) svg.removeChild(svg.firstChild);
        for (var k = -4; k <= 4; k++) {
          svg.appendChild(A.svg('line', { x1: X(k), y1: 0, x2: X(k), y2: 300, stroke: '#eef0f3' }));
          svg.appendChild(A.svg('line', { x1: 0, y1: Y(k), x2: 300, y2: Y(k), stroke: '#eef0f3' }));
        }
        svg.appendChild(A.svg('line', { x1: 0, y1: C, x2: 300, y2: C, stroke: '#c4c9cf' }));
        svg.appendChild(A.svg('line', { x1: C, y1: 0, x2: C, y2: 300, stroke: '#c4c9cf' }));
        if (held) { out.innerHTML = AVOID_NOTE; return; }
        svg.appendChild(A.svg('polygon', { fill: 'rgba(0,156,222,0.10)', stroke: 'none',
          points: [[0, 0], b[0], [b[0][0] + b[1][0], b[0][1] + b[1][1]], b[1]].map(function (q) { return X(q[0]).toFixed(1) + ',' + Y(q[1]).toFixed(1); }).join(' ') }));
        points(b[0], b[1]).forEach(function (p) { svg.appendChild(circ(p, { r: 4, fill: '#009CDE' })); });
        points(y[0], y[1]).forEach(function (p) { svg.appendChild(circ(p, { r: 7, fill: 'none', stroke: '#F36E24', 'stroke-width': 2 })); });
        svg.appendChild(vec(b[0], { stroke: '#009CDE', 'stroke-width': 2.5 }));
        svg.appendChild(vec(b[1], { stroke: '#009CDE', 'stroke-width': 2.5 }));
        svg.appendChild(vec(y[0], { stroke: '#F36E24', 'stroke-width': 2, 'stroke-dasharray': '6 4' }));
        svg.appendChild(vec(y[1], { stroke: '#F36E24', 'stroke-width': 2, 'stroke-dasharray': '6 4' }));
        svg.appendChild(circ(b[0], { r: 9, fill: '#fff', stroke: '#009CDE', 'stroke-width': 2.5, 'data-h': 0, cursor: 'grab' }));
        svg.appendChild(circ(b[1], { r: 9, fill: '#fff', stroke: '#009CDE', 'stroke-width': 2.5, 'data-h': 1, cursor: 'grab' }));
        out.innerHTML = 'Cell area of the first basis: ' + f1(Math.abs(cross(b[0], b[1]))) + '. Of the second: ' +
          f1(Math.abs(cross(y[0], y[1]))) + '.<br>' + verdict(d);
      }
      svg.addEventListener('pointerdown', function (ev) {
        var h = ev.target.getAttribute ? ev.target.getAttribute('data-h') : null;
        if (h === null) return;
        dragging = Number(h);
        svg.setPointerCapture(ev.pointerId);
        ev.preventDefault();
      });
      svg.addEventListener('pointermove', function (ev) {
        if (dragging < 0) return;
        var r = svg.getBoundingClientRect();
        b[dragging] = [Math.round(((ev.clientX - r.left) * 300 / r.width - C) / S), Math.round((C - (ev.clientY - r.top) * 300 / r.height) / S)];
        fillInputs();
        draw();
      });
      svg.addEventListener('pointerup', function () { dragging = -1; });
      svg.addEventListener('pointercancel', function () { dragging = -1; });
      sel.addEventListener('change', function () {
        if (sel.value !== 'hand') { U = PRE_U[Number(sel.value)].u.slice(); fillInputs(); }
        draw();
      });
      ids.forEach(function (id, i) {
        document.getElementById(id).addEventListener('input', function () {
          b = [[num(ids[0]), num(ids[1])], [num(ids[2]), num(ids[3])]];
          U = [num(ids[4]), num(ids[5]), num(ids[6]), num(ids[7])];
          if (i >= 4) sel.value = 'hand';
          draw();
        });
      });
      fillInputs();
      draw();
    })();
  })();
</script>
