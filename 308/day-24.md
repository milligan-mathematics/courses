---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 24: Matrices That Keep Their Shape"
day: 24
chapter_number: 12
chapter: "Matrix Groups and Symmetry"
day_title: "Matrices That Keep Their Shape"
blurb: "A matrix moves the whole plane at once, and most of them stretch, shear or squash as they go. The ones that keep every length and angle are the orthogonal matrices, and in the plane those are exactly the turns and flips about the origin."
reading: "Chapter 12, Day 1: Section 12.1, Matrix Groups, from GL and SL through O(n), SO(n) and E(n)"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>One matrix, one letter</h2>

  <p>A \(2 \times 2\) matrix \(A\) moves the plane linearly. Its columns say where \(\mathbf e_1\) and \(\mathbf e_2\)
    go. Judson calls \(A\) <em>orthogonal</em> when \(A^{-1} = A^{\mathsf T}\); those form \(O(n)\), and \(SO(n)\) is the
    part with determinant one. Before you choose, predict: under the shear, will the F keep its right angles? What will
    its determinant be?</p>

  <div class="ctl-row">
    <div class="ctl"><label for="d24-preset">Preset</label><select id="d24-preset"></select></div>
  </div>
  <div class="ctl-row">
    <div class="ctl"><label for="d24-a">a</label><input class="a308-num" id="d24-a" type="number" step="any"></div>
    <div class="ctl"><label for="d24-b">b</label><input class="a308-num" id="d24-b" type="number" step="any"></div>
    <div class="ctl"><label for="d24-c">c</label><input class="a308-num" id="d24-c" type="number" step="any"></div>
    <div class="ctl"><label for="d24-d">d</label><input class="a308-num" id="d24-d" type="number" step="any"></div>
  </div>
  <div class="a308-poly-wrap" id="d24-view"></div>
  <div class="readout a308-readout" id="d24-out" aria-live="polite"></div>

  <p>Read the readout in order: the determinant is the area factor, and the columns say whether lengths survive. If the
    columns are orthonormal, Judson's orthonormal-matrix theorem says every length and angle survives too.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Two matrices in a row</h2>

  <p>\(AB\) means do \(B\) first, then \(A\). The faint F is \(B\) applied to the letter; the solid one is \(AB\).
    Predict: if both \(A\) and \(B\) are flips, is \(AB\) a turn or a flip? If \(A\) is a turn and \(B\) a flip?</p>

  <div class="ctl-row">
    <div class="ctl"><label for="d24-ca">A (done second)</label><select id="d24-ca"></select></div>
    <div class="ctl"><label for="d24-cb">B (done first)</label><select id="d24-cb"></select></div>
  </div>
  <div class="a308-poly-wrap" id="d24-cview"></div>
  <div class="readout a308-readout" id="d24-cout" aria-live="polite"></div>

  <p>The pattern to look for: turn after turn is a turn, flip after flip is a turn, and a turn with a flip, in either
    order, is a flip. The determinants already tell you this, since the signs multiply the same way.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Which sets are groups, and which matrices keep lengths?</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Under matrix multiplication, which of these sets is a group?</p>
    <button class="mc-opt" data-key="a">The \(2 \times 2\) real matrices with determinant \(2\).</button>
    <button class="mc-opt" data-key="b">The \(2 \times 2\) real matrices with determinant \(1\).</button>
    <button class="mc-opt" data-key="c">The \(2 \times 2\) real matrices with every entry positive.</button>
    <button class="mc-opt" data-key="d">The \(2 \times 2\) real matrices with determinant \(0\).</button>
    <div class="mc-fb" data-key="a"><p>Closure fails: a product of two of these has determinant \(2 \cdot 2 = 4\), not
      \(2\). And the identity, with determinant \(1\), is not in the set.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. The identity has determinant \(1\), and \(\det(AB) = \det A \det B\)
      keeps products at \(1\). Inverses work too, since \(\det A^{-1} = 1/\det A = 1\). This is \(SL_2(\mathbb R)\),
      and Judson shows it is a group.</p></div>
    <div class="mc-fb" data-key="c"><p>The identity has zeros in it, so it is not in the set. Inverses fail as well:
      the inverse of \(\begin{pmatrix}1&amp;1\\1&amp;2\end{pmatrix}\) has negative entries.</p></div>
    <div class="mc-fb" data-key="d"><p>A matrix with determinant \(0\) has no inverse, and the identity (determinant
      \(1\)) is not in the set.</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which of these matrices keeps the length of every vector?</p>
    <button class="mc-opt" data-key="a">\(\begin{pmatrix}2&amp;0\\0&amp;2\end{pmatrix}\)</button>
    <button class="mc-opt" data-key="b">\(\begin{pmatrix}5/13&amp;-12/13\\12/13&amp;5/13\end{pmatrix}\)</button>
    <button class="mc-opt" data-key="c">\(\begin{pmatrix}3&amp;0\\0&amp;1/3\end{pmatrix}\)</button>
    <button class="mc-opt" data-key="d">\(\begin{pmatrix}1&amp;0\\0&amp;0\end{pmatrix}\)</button>
    <div class="mc-fb" data-key="a"><p>Every length doubles. A map that doubles lengths is a scaling, not an
      isometry.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. Each column has length \(1\), and the columns are perpendicular, since
      \(5(-12) + 12 \cdot 5 = 0\). Orthonormal columns keep every length.</p></div>
    <div class="mc-fb" data-key="c"><p>Its determinant is \(1\), but its columns have lengths \(3\) and \(1/3\).
      Determinant measures area. Area and length are different things.</p></div>
    <div class="mc-fb" data-key="d"><p>This sends \(\mathbf e_2\) to \(\mathbf 0\), so it collapses lengths. It also
      has no inverse.</p></div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Isometries that are not matrices, and what determinants occur</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">An isometry is a map that keeps distances. Which isometry of the plane is <em>not</em> given by
      multiplying by a \(2 \times 2\) matrix?</p>
    <button class="mc-opt" data-key="a">Turning the plane by \(30^\circ\) about the origin.</button>
    <button class="mc-opt" data-key="b">Reflecting the plane across the line \(y = x\).</button>
    <button class="mc-opt" data-key="c">Sliding every point by the vector \((2, 1)\).</button>
    <button class="mc-opt" data-key="d">The shear \(x \mapsto x + y\), given by \(\begin{pmatrix}1&amp;1\\0&amp;1\end{pmatrix}\).</button>
    <div class="mc-fb" data-key="a"><p>It is a matrix, \(\begin{pmatrix}\sqrt3/2&amp;-1/2\\1/2&amp;\sqrt3/2\end{pmatrix}\),
      so this is not the one.</p></div>
    <div class="mc-fb" data-key="b"><p>It is the matrix \(\begin{pmatrix}0&amp;1\\1&amp;0\end{pmatrix}\). Not this one.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. A matrix sends \(\mathbf 0\) to \(\mathbf 0\), and this sends it to
      \((2, 1)\). Translations are isometries outside \(O(2)\). Judson brings them in through pairs \((A, \mathbf x)\),
      which is what \(E(n)\) is.</p></div>
    <div class="mc-fb" data-key="d"><p>That one is a matrix, but it is not an isometry: \((0,1)\) has length \(1\) and
      its image \((1,1)\) has length \(\sqrt 2\). The question is about isometries, so this doesn't qualify.</p></div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">What determinants can an orthogonal \(2 \times 2\) matrix have?</p>
    <button class="mc-opt" data-key="a">Only \(1\).</button>
    <button class="mc-opt" data-key="b">Only \(-1\).</button>
    <button class="mc-opt" data-key="c">\(1\) or \(-1\).</button>
    <button class="mc-opt" data-key="d">Any nonzero number.</button>
    <div class="mc-fb" data-key="a"><p>That describes the turns. Flips are orthogonal too, and their determinant is
      \(-1\).</p></div>
    <div class="mc-fb" data-key="b"><p>Flips have determinant \(-1\), but the identity, a turn, has determinant \(1\).
      Both occur.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. If \(A^{\mathsf T}A = I\), then \(\det(A)^2 = \det(A^{\mathsf T})\det(A)
      = \det(A^{\mathsf T}A) = 1\).</p></div>
    <div class="mc-fb" data-key="d"><p>Orthogonal matrices must keep lengths, so the area factor \(|\det A|\) has to be
      \(1\). A scaling by \(2\) has determinant \(4\) and is not orthogonal.</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Orthogonal matrices keep lengths</h2>

  <p>Judson proves this inside his orthonormal-matrix theorem, through a chain: inner products are kept, then
    distances, then lengths. Here is a shorter route through the same computation, one committed step at a time.
    Let \(A\) be orthogonal, so \(A^{-1} = A^{\mathsf T}\).</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">What is \(A^{\mathsf T}A\)?</div>
        <div class="sstep-body"><p>\(A^{\mathsf T}A = A^{-1}A = I\). That is what "orthogonal" says.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Write \(\langle A\mathbf x, A\mathbf x\rangle\) as a product with \(\mathbf x\) on each
          side. Which transpose rule do you need?</div>
        <div class="sstep-body"><p>\((A\mathbf x)^{\mathsf T} = \mathbf x^{\mathsf T}A^{\mathsf T}\), so
          \(\langle A\mathbf x, A\mathbf x\rangle = \mathbf x^{\mathsf T}A^{\mathsf T}A\,\mathbf x\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Substitute the first step into the second. What is left?</div>
        <div class="sstep-body"><p>\(\mathbf x^{\mathsf T}A^{\mathsf T}A\,\mathbf x = \mathbf x^{\mathsf T}\mathbf x
          = \langle \mathbf x, \mathbf x\rangle\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Length is the square root of \(\langle \mathbf x, \mathbf x\rangle\). What does that
          give for \(\|A\mathbf x\|\)?</div>
        <div class="sstep-body"><p>\(\|A\mathbf x\|^2 = \|\mathbf x\|^2\), and both sides are nonnegative, so
          \(\|A\mathbf x\| = \|\mathbf x\|\).</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Determinant one, so a turn?</h2>

  <p>A classmate claims that every \(2 \times 2\) matrix with determinant \(1\) is a turn. Here is the argument.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Let \(A = \begin{pmatrix}a&amp;b\\c&amp;d\end{pmatrix}\) with \(ad - bc = 1\).</button>
      <button class="fline" type="button">Then \(A\) is invertible, and \(A^{-1} = \begin{pmatrix}d&amp;-b\\-c&amp;a\end{pmatrix}\) also has determinant \(1\).</button>
      <button class="fline" type="button">The turns are exactly the matrices with determinant \(1\), so \(A\) is a turn.</button>
      <button class="fline" type="button">A turn keeps every length and angle, so \(A\) does too. \(\blacksquare\)</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> That is the setup.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> The inverse formula is the one from the reading, and
      \(\det A^{-1} = 1/\det A\).</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>This is the flaw.</strong> Turns do have determinant \(1\), but the
      converse fails. Determinant one only says that areas are kept. The shear \(\begin{pmatrix}1&amp;1\\0&amp;1\end{pmatrix}\)
      has determinant \(1\), yet its columns have lengths \(1\) and \(\sqrt 2\), and they are not perpendicular. It is
      not a turn.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine, given line 3.</strong> A turn does keep lengths and angles.
      The trouble started one line earlier.</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>A turn and the shear both have determinant \(1\), and both keep the area of every parallelogram. What extra
      property does the turn have, and how would you check it from the two columns alone?</li>
    <li>Two flips multiply to a turn, and a turn times a flip is a flip. Why do these facts agree with
      \(\det(AB) = \det A \det B\)? What kind of matrix do three flips multiply to?</li>
    <li>A slide is an isometry of the plane but not a matrix, so it can't sit inside \(O(2)\). What does the Euclidean
      group \(E(2)\) add to \(O(2)\), and what part of \(O(2)\) does it still contain?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;
    var R3 = Math.sqrt(3) / 2, Q = Math.SQRT1_2;
    var F = [[-0.9, -1.2], [-0.9, 1.2], [0.9, 1.2], [0.9, 0.9], [-0.4, 0.9], [-0.4, 0.2], [0.5, 0.2],
      [0.5, -0.1], [-0.4, -0.1], [-0.4, -1.2]];
    var PRE = [
      { name: 'Identity', m: [1, 0, 0, 1] },
      { name: 'Turn by 30°', m: [R3, -0.5, 0.5, R3] },
      { name: 'Turn by 90°', m: [0, -1, 1, 0] },
      { name: 'Flip across the x-axis', m: [1, 0, 0, -1] },
      { name: 'Flip across the line y = x', m: [0, 1, 1, 0] },
      { name: 'Flip across the line at 30°', m: [0.5, R3, R3, -0.5] },
      { name: 'Shear: x ↦ x + y', m: [1, 1, 0, 1] },
      { name: 'Scale x by 2, y by ½', m: [2, 0, 0, 0.5] },
      { name: 'Project onto the x-axis', m: [1, 0, 0, 0] }
    ];
    // Inputs held back for homework; the widget shows AVOID_NOTE for these instead of a verdict.
    var AVOID = [[Q, -Q, Q, Q], [1 / Math.sqrt(5), 2 / Math.sqrt(5), -2 / Math.sqrt(5), 1 / Math.sqrt(5)]];
    // Boxes are typed and shown to 4 decimals, so the verdicts and the homework match allow a little slack.
    var ORTH_TOL = 5e-3, AVOID_TOL = 5e-3;
    var AVOID_NOTE = 'That one is on your homework, so this page won’t do it for you. Work it by hand, then bring it to class, or try a different matrix here.';

    function det(m) { return m[0] * m[3] - m[1] * m[2]; }
    function dot(u, v) { return u[0] * v[0] + u[1] * v[1]; }
    function len(u) { return Math.sqrt(dot(u, u)); }
    function apply(m, p) { return [m[0] * p[0] + m[1] * p[1], m[2] * p[0] + m[3] * p[1]]; }
    function mul(m, n) {
      return [m[0] * n[0] + m[1] * n[2], m[0] * n[1] + m[1] * n[3], m[2] * n[0] + m[3] * n[2], m[2] * n[1] + m[3] * n[3]];
    }
    function orthonormal(m) {
      var c1 = [m[0], m[2]], c2 = [m[1], m[3]];
      return Math.abs(len(c1) - 1) < ORTH_TOL && Math.abs(len(c2) - 1) < ORTH_TOL && Math.abs(dot(c1, c2)) < ORTH_TOL;
    }
    function f2(x) { var s = x.toFixed(2); return s === '-0.00' ? '0.00' : s; }
    function describe(m) {
      if (!orthonormal(m)) return 'not orthogonal, so it changes some lengths or angles';
      var t = Math.atan2(m[2], m[0]) * 180 / Math.PI;
      if (det(m) > 0) return 'a turn by ' + f2(t) + '°, so it is in SO(2)';
      return 'a flip across a line at ' + f2(t / 2) + '°, so it is in O(2) but not SO(2)';
    }
    function P(list) {
      return list.map(function (q) { return (150 + 40 * q[0]).toFixed(1) + ',' + (150 - 40 * q[1]).toFixed(1); }).join(' ');
    }
    function poly(list, attrs) { return A.svg('polygon', Object.assign({ points: P(list) }, attrs)); }
    function base(svg) {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      for (var k = -3; k <= 3; k++) {
        svg.appendChild(A.svg('line', { x1: 150 + 40 * k, y1: 0, x2: 150 + 40 * k, y2: 300, stroke: '#e4e6ea' }));
        svg.appendChild(A.svg('line', { x1: 0, y1: 150 - 40 * k, x2: 300, y2: 150 - 40 * k, stroke: '#e4e6ea' }));
      }
      svg.appendChild(A.svg('line', { x1: 0, y1: 150, x2: 300, y2: 150, stroke: '#9aa0a6' }));
      svg.appendChild(A.svg('line', { x1: 150, y1: 0, x2: 150, y2: 300, stroke: '#9aa0a6' }));
    }
    function arrow(svg, v, col, name) {
      var x = 150 + 40 * v[0], y = 150 - 40 * v[1];
      svg.appendChild(A.svg('line', { x1: 150, y1: 150, x2: x, y2: y, stroke: col, 'stroke-width': 2.5 }));
      svg.appendChild(A.svg('text', { x: x + 6, y: y - 6, 'font-size': 14, 'font-weight': 'bold', fill: col, text: name }));
    }
    function makeView(id, label) {
      var svg = A.svg('svg', { viewBox: '0 0 300 300', role: 'img', 'aria-label': label, style: 'max-width:300px;width:100%;height:auto' });
      document.getElementById(id).appendChild(svg);
      return svg;
    }
    var ORIG = { fill: 'none', stroke: '#9aa0a6', 'stroke-width': 1.5, 'stroke-dasharray': '5 4' };
    var IMG = { fill: 'rgba(0,156,222,0.18)', stroke: '#009CDE', 'stroke-width': 2.5, 'stroke-linejoin': 'round' };

    /* ---- Explore 1: one matrix ---- */
    var sel = document.getElementById('d24-preset'), out = document.getElementById('d24-out');
    var ent = ['d24-a', 'd24-b', 'd24-c', 'd24-d'].map(function (id) { return document.getElementById(id); });
    var view = makeView('d24-view', 'A letter F in the plane, its image under the chosen matrix, and the images of the two basis vectors');
    var cur = PRE[1].m;
    PRE.forEach(function (p, i) { sel.appendChild(A.h('option', { value: i, text: p.name })); });
    sel.appendChild(A.h('option', { value: 'own', text: 'Your own numbers' }));
    sel.value = '1';
    function fill(m) { ent.forEach(function (e, i) { e.value = m[i].toFixed(4); }); }

    function drawOne(m) {
      base(view);
      view.appendChild(poly(F, ORIG));
      if (!m) return;
      var c1 = [m[0], m[2]], c2 = [m[1], m[3]];
      view.appendChild(poly(F.map(function (q) { return apply(m, q); }), IMG));
      view.appendChild(poly([[0, 0], c1, [c1[0] + c2[0], c1[1] + c2[1]], c2], { fill: 'rgba(139,92,246,0.12)', stroke: 'none' }));
      arrow(view, c1, '#009CDE', 'Ae₁');
      arrow(view, c2, '#F36E24', 'Ae₂');
    }
    function updateOne() {
      var m = cur;
      if (AVOID.some(function (v) { return v.every(function (x, i) { return Math.abs(x - m[i]) < AVOID_TOL; }); })) {
        drawOne(null);
        out.innerHTML = AVOID_NOTE;
        return;
      }
      drawOne(m);
      var c1 = [m[0], m[2]], c2 = [m[1], m[3]], v = [1, 2], dt = det(m);
      var angle = (len(c1) > 1e-9 && len(c2) > 1e-9)
        ? f2(Math.acos(Math.max(-1, Math.min(1, dot(c1, c2) / (len(c1) * len(c2))))) * 180 / Math.PI) + '°'
        : 'undefined (a column is zero)';
      out.innerHTML =
        'det A = ad − bc = <strong>' + f2(dt) + '</strong>. Areas change by a factor of ' + f2(Math.abs(dt)) + '.<br>' +
        '|Ae₁| = ' + f2(len(c1)) + ' and |Ae₂| = ' + f2(len(c2)) + '. Both should be 1 for the basis lengths to survive.<br>' +
        'The right angle between e₁ and e₂ becomes ' + angle + '.<br>' +
        'The test vector (1, 2) has length ' + f2(len(v)) + ' before and ' + f2(len(apply(m, v))) + ' after.<br>' +
        'Columns orthonormal (to 3 decimal places)? <strong>' + (orthonormal(m) ? 'yes' : 'no') + '</strong>. ' +
        (orthonormal(m) ? 'Then every length and angle survives.' : 'Then some length or angle changes.') + '<br>' +
        'Verdict: <strong>' + describe(m) + '</strong>.';
    }
    sel.addEventListener('change', function () {
      if (sel.value !== 'own') { cur = PRE[Number(sel.value)].m; fill(cur); }
      updateOne();
    });
    ent.forEach(function (e) {
      e.addEventListener('input', function () {
        cur = ent.map(function (x) { return Number(x.value) || 0; });
        sel.value = 'own';
        updateOne();
      });
    });
    fill(cur);
    updateOne();

    /* ---- Explore 2: composition ---- */
    var cA = document.getElementById('d24-ca'), cB = document.getElementById('d24-cb'), cout = document.getElementById('d24-cout');
    var cview = makeView('d24-cview', 'A letter F, its image under B, and the image of that under A, which is the product AB');
    PRE.forEach(function (p, i) {
      cA.appendChild(A.h('option', { value: i, text: p.name }));
      cB.appendChild(A.h('option', { value: i, text: p.name }));
    });
    cA.value = '1';
    cB.value = '3';
    function updateTwo() {
      var mA = PRE[Number(cA.value)].m, mB = PRE[Number(cB.value)].m, AB = mul(mA, mB);
      base(cview);
      cview.appendChild(poly(F, ORIG));
      var BF = F.map(function (q) { return apply(mB, q); });
      cview.appendChild(poly(BF, { fill: 'rgba(0,0,0,0.04)', stroke: '#b8bec5', 'stroke-width': 1.5 }));
      cview.appendChild(poly(BF.map(function (q) { return apply(mA, q); }), IMG));
      cout.innerHTML =
        'AB = [[' + f2(AB[0]) + ', ' + f2(AB[1]) + '], [' + f2(AB[2]) + ', ' + f2(AB[3]) + ']].<br>' +
        'det A = ' + f2(det(mA)) + ', det B = ' + f2(det(mB)) + ', det AB = ' + f2(det(AB)) +
        ', and det A · det B = ' + f2(det(mA) * det(mB)) + '.<br>' +
        'A is ' + describe(mA) + '. B is ' + describe(mB) + '.<br>' +
        'So <strong>AB is ' + describe(AB) + '</strong>.';
    }
    cA.addEventListener('change', updateTwo);
    cB.addEventListener('change', updateTwo);
    updateTwo();
  })();
</script>
