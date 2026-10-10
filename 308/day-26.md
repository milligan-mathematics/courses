---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 26: Why Wallpaper Has No Five-Fold Turns"
day: 26
chapter_number: 12
chapter: "Matrix Groups and Symmetry"
day_title: "Why Wallpaper Has No Five-Fold Turns"
blurb: "A repeating pattern can only turn about a point in a few ways: a half, a quarter, a third or a sixth of a full turn, never a fifth. The reason fits on an index card, and it is one reason the list of wallpaper kinds is so short."
reading: "Chapter 12, Day 3: the rest of Section 12.2, the point groups and the 17 wallpaper groups"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Which turns can a lattice have?</h2>

  <p>A lattice is the set of whole-number combinations of its basis vectors \(\mathbf b_1, \mathbf b_2\). Some lattices
    are unchanged by a turn about the origin, and some are not. The blue dots are the lattice. The orange rings are
    the lattice after the turn. Where the rings sit on the dots, the turn keeps the lattice.</p>

  <p>Predict before you press anything: which of the four presets keep their shape under a turn of order \(6\)
    (by \(60^\circ\))? Then set the order to \(5\) and try every basis you can think of. The violet arrow is the
    shortest nonzero vector \(\mathbf v\). The red arrow is \(R\mathbf v + R^{-1}\mathbf v\), where \(R\) is the turn.</p>

  <div class="ctl-row">
    <div class="ctl"><label for="d26-basis">Basis</label><select id="d26-basis"></select></div>
    <div class="ctl"><label for="d26-n">Turn</label><select id="d26-n"></select></div>
  </div>
  <div class="ctl-row">
    <div class="ctl"><label for="d26-x1">b₁ x</label><input class="a308-num" id="d26-x1" type="number" step="any"></div>
    <div class="ctl"><label for="d26-y1">b₁ y</label><input class="a308-num" id="d26-y1" type="number" step="any"></div>
    <div class="ctl"><label for="d26-x2">b₂ x</label><input class="a308-num" id="d26-x2" type="number" step="any"></div>
    <div class="ctl"><label for="d26-y2">b₂ y</label><input class="a308-num" id="d26-y2" type="number" step="any"></div>
  </div>
  <div class="a308-poly-wrap" id="d26-turn"></div>
  <div class="readout a308-readout" id="d26-out" aria-live="polite"></div>

  <p>The argument behind the red arrow is the classic shortest-vector argument, and the reading does not give it. For a
    turn \(R\) by \(\theta\), we have \(R + R^{-1} = 2\cos\theta\, I\). If \(R\) keeps the lattice, then
    \(R\mathbf v + R^{-1}\mathbf v = 2\cos\theta\,\mathbf v\) is a lattice vector. When \(0 < |2\cos\theta| < 1\), it is
    shorter than \(\mathbf v\), which contradicts the choice of \(\mathbf v\). Among the orders from \(2\) to \(8\), only
    \(5\) falls in that range. For \(7\) and \(8\) the argument says nothing, and the scaffold below covers every order.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Places to play</h2>

  <p>Three tools let you build and turn wallpaper patterns and show their turn centers and mirror lines. None is
    required. Predict first: which turn orders do you expect a repeating pattern to allow? Then see which orders a
    tool lets you draw.</p>

  <ul>
    <li><a href="https://math.hws.edu/eck/js/symmetry/wallpaper.html" target="_blank" rel="noopener noreferrer">Wallpaper applet, math.hws.edu</a></li>
    <li><a href="https://observablehq.com/@esperanc/wallpaper-groups" target="_blank" rel="noopener noreferrer">Wallpaper groups notebook, Observable</a></li>
    <li><a href="https://eschersket.ch/" target="_blank" rel="noopener noreferrer">eschersket.ch, a pattern-drawing tool</a></li>
  </ul>

  <p>The patterns you turn in for homework must be your own drawings; these applets are for exploring, not for copying.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Which turns can a lattice keep?</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Which turn can no lattice in the plane keep?</p>
    <button class="mc-opt" data-key="a">A half turn (\(180^\circ\)).</button>
    <button class="mc-opt" data-key="b">A quarter turn (\(90^\circ\)).</button>
    <button class="mc-opt" data-key="c">A fifth turn (\(72^\circ\)).</button>
    <button class="mc-opt" data-key="d">A third turn (\(120^\circ\)).</button>
    <div class="mc-fb" data-key="a"><p>Order \(2\). Every lattice has one, because if \(\mathbf b\) is in the lattice,
      so is \(-\mathbf b\).</p></div>
    <div class="mc-fb" data-key="b"><p>Order \(4\). Some lattices have one, and the next check shows which.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. The demo rules it out: \(2\cos 72^\circ \approx 0.62\), so the sum of the
      two turned copies of the shortest vector would be a shorter lattice vector.</p></div>
    <div class="mc-fb" data-key="d"><p>Order \(3\). The hexagonal lattice keeps one.</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which lattice keeps a quarter turn about the origin?</p>
    <button class="mc-opt" data-key="a">The rectangular lattice with basis \((2, 0)\) and \((0, 1)\).</button>
    <button class="mc-opt" data-key="b">The square lattice with basis \((1, 0)\) and \((0, 1)\).</button>
    <button class="mc-opt" data-key="c">The hexagonal lattice with equilateral triangles.</button>
    <button class="mc-opt" data-key="d">The oblique lattice with basis \((2, 0)\) and \((0.6, 1.2)\).</button>
    <div class="mc-fb" data-key="a"><p>The quarter turn sends \((0, 1)\) to \((-1, 0)\), which is not a lattice point:
      the lattice's points on the \(x\)-axis have even first coordinates.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. A quarter turn sends \((1, 0)\) to \((0, 1)\) and \((0, 1)\) to
      \((-1, 0)\), and both are lattice points.</p></div>
    <div class="mc-fb" data-key="c"><p>Hexagonal lattices keep turns of \(60^\circ\), \(120^\circ\) and \(180^\circ\).
      A quarter turn sends \((1, 0)\) to \((0, 1)\), which is not a lattice point.</p></div>
    <div class="mc-fb" data-key="d"><p>This one keeps only the half turn. A quarter turn would send \((2, 0)\) to
      \((0, 2)\), and \((0, 2)\) is not a whole-number combination of the basis.</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Only orders 1, 2, 3, 4 and 6</h2>

  <p>Judson states that the point group of a wallpaper group is \(\mathbb Z_n\) or \(D_n\) with \(n = 1, 2, 3, 4, 6\),
    and he cites other books for the proof rather than giving one. So this scaffold is <em>not</em> a reading proof.
    It is the standard trace argument. It starts from a fact the reading does prove: conjugating a translation by
    \((A, \mathbf b)\) gives the translation by \(A\mathbf x\), so a point group element must carry the lattice onto
    itself. Let \(R\) be the turn by \(\theta\), keeping the lattice \(L\), with basis \(\mathbf b_1, \mathbf b_2\).</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">\(R\mathbf b_1\) is a point of \(L\). Why must \(R\mathbf b_1 = m\mathbf b_1 + n\mathbf b_2\)
          with \(m, n\) whole numbers?</div>
        <div class="sstep-body"><p>Every point of \(L\) is a whole-number combination of the basis, by definition. The same
          holds for \(R\mathbf b_2\). So the matrix \(M\) of \(R\) in this basis has whole-number entries.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Let \(P\) have columns \(\mathbf b_1\) and \(\mathbf b_2\). Why is \(RP = PM\), and so
          \(M = P^{-1}RP\)?</div>
        <div class="sstep-body"><p>The columns of \(RP\) are \(R\mathbf b_1\) and \(R\mathbf b_2\). By the first step,
          those are the columns of \(PM\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">The trace is unchanged by \(X \mapsto P^{-1}XP\). What is the trace of the turn \(R\)?</div>
        <div class="sstep-body"><p>\(\operatorname{tr} M = \operatorname{tr}(P^{-1}RP) = \operatorname{tr} R =
          \cos\theta + \cos\theta = 2\cos\theta\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">The trace of \(M\) is a sum of two whole numbers. What does that force \(2\cos\theta\) to be?</div>
        <div class="sstep-body"><p>A whole number.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Since \(-2 \le 2\cos\theta \le 2\), which whole numbers are possible? What turns and orders
          do they give?</div>
        <div class="sstep-body"><p>\(2\cos\theta\) is \(-2, -1, 0, 1\) or \(2\). These give turns by \(180^\circ\), by
          \(120^\circ\) or \(240^\circ\), by \(90^\circ\) or \(270^\circ\), by \(60^\circ\) or \(300^\circ\), and the identity.
          Their orders are \(2, 3, 4, 6, 1\). A turn of order \(5\) is impossible: \(2\cos 72^\circ = (\sqrt5 - 1)/2\) is
          not a whole number.</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>The point group inside the group?</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Let \(G\) be a wallpaper group, with point group \(G_0 = \{A : (A, \mathbf b) \in G \text{ for some }
      \mathbf b\}\). Which statement is correct?</p>
    <button class="mc-opt" data-key="a">\(G_0\) is a subgroup of \(G\).</button>
    <button class="mc-opt" data-key="b">\(G_0\) is a subgroup of \(O(2)\).</button>
    <button class="mc-opt" data-key="c">\(G_0\) is the translation subgroup of \(G\).</button>
    <button class="mc-opt" data-key="d">\(G_0\) is isomorphic to \(\mathbb Z \times \mathbb Z\).</button>
    <div class="mc-fb" data-key="a"><p>Not in general. Elements of \(G\) are pairs \((A, \mathbf b)\) that carry a shift,
      while \(G_0\) is the set of matrices \(A\). The flaw below shows a matrix in \(G_0\) whose pure version is not in
      \(G\).</p></div>
    <div class="mc-fb" data-key="b"><p>Right. The point group is a set of matrices of symmetries fixing the origin, so it
      sits inside \(O(2)\). Judson states this directly.</p></div>
    <div class="mc-fb" data-key="c"><p>The translation subgroup is the set of pairs with matrix part \(I\). The point
      group is the set of matrix parts.</p></div>
    <div class="mc-fb" data-key="d"><p>That describes the translation subgroup, which is infinite. The point group is
      finite, of the form \(\mathbb Z_n\) or \(D_n\).</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Move the origin of a wallpaper pattern to another point. What happens to the matrix part \(A\) of each
      element \((A, \mathbf b)\) of \(G\)?</p>
    <button class="mc-opt" data-key="a">It changes to a different turn or flip.</button>
    <button class="mc-opt" data-key="b">It stays the same, and only the shift \(\mathbf b\) changes.</button>
    <button class="mc-opt" data-key="c">It becomes the identity matrix, because the origin is the center of the pattern.</button>
    <button class="mc-opt" data-key="d">It becomes a translation.</button>
    <div class="mc-fb" data-key="a"><p>No. Changing the origin conjugates by a translation \(\tau\), and \(\tau(A, \mathbf b)\tau^{-1}\)
      still has matrix part \(A\).</p></div>
    <div class="mc-fb" data-key="b"><p>Right. For the translation \(\tau_{\mathbf c}\), the conjugate is
      \((A, \mathbf b + (I - A)\mathbf c)\). The matrix part is still \(A\), so the point group does not depend on where
      the origin is.</p></div>
    <div class="mc-fb" data-key="c"><p>No. Moving the origin would erase every turn, which can't be right: the turns
      stay turns.</p></div>
    <div class="mc-fb" data-key="d"><p>No. A translation has matrix part \(I\), but moving the origin does not turn a
      rotation into a translation. The matrix part is unchanged.</p></div>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>The point group is a subgroup of the group</h2>

  <p>A classmate argues that the point group of any wallpaper group is a subgroup of the group itself. Here is the
    argument.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Let \(G\) be a wallpaper group with point group \(G_0 = \{A : (A, \mathbf b) \in G \text{ for some } \mathbf b\}\).</button>
      <button class="fline" type="button">Take \(A \in G_0\). Then \((A, \mathbf b) \in G\) for some shift \(\mathbf b\).</button>
      <button class="fline" type="button">The translation by \(-\mathbf b\) is in \(G\), so composing it with \((A, \mathbf b)\) gives \((A, \mathbf 0) \in G\).</button>
      <button class="fline" type="button">So every \(A \in G_0\) is an element of \(G\), and \(G_0\) is a subgroup of \(G\). \(\blacksquare\)</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> That is the definition of the point group.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> That is what membership of \(A\) in \(G_0\) means.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>This is the flaw.</strong> The translation by \(-\mathbf b\) is in \(G\)
      only when \(\mathbf b\) is one of the translations in \(G\), and nothing says it is. Take \(G\) generated by the
      translations by whole-number vectors and the half turn \(\mathbf y \mapsto -\mathbf y + (\tfrac12, 0)\), which turns
      the plane about \((\tfrac14, 0)\). Its point group contains \(-I\), but \((-I, \mathbf 0)\) is not in \(G\): every
      element with matrix part \(-I\) has shift \((\tfrac12, 0)\) plus a whole-number vector.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine, given line 3.</strong> The conclusion follows from the line
      before it, so the mistake is the one in line 3.</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Penrose tilings have five-fold symmetry in small patches, but no translation symmetry. Which assumption in the
      trace argument does a non-repeating pattern break?</li>
    <li>The shortest-vector argument rules out order \(5\) but not order \(7\). Why does the trace argument rule out
      \(7\) without choosing a shortest vector at all?</li>
    <li>Turn a pattern about two different centers and you get two turns of the same order. Why does changing the center
      change only the shift and never the order of the turn? Connect your answer to the second check question about
      moving the origin.</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;
    var PRE = [
      { name: 'Square', b: [[1, 0], [0, 1]] },
      { name: 'Hexagonal (equilateral triangles)', b: [[1, 0], [0.5, Math.sqrt(3) / 2]] },
      { name: 'Rectangular (2 by 1)', b: [[2, 0], [0, 1]] },
      { name: 'Oblique', b: [[2, 0], [0.6, 1.2]] },
      { name: 'Your own basis', b: null }
    ];
    var sel = document.getElementById('d26-basis'), nSel = document.getElementById('d26-n'), out = document.getElementById('d26-out');
    var ids = ['d26-x1', 'd26-y1', 'd26-x2', 'd26-y2'];
    var svg = A.svg('svg', { viewBox: '0 0 300 300', role: 'img', style: 'max-width:300px;width:100%;height:auto',
      'aria-label': 'Lattice dots, the lattice after the chosen turn, and the shortest-vector argument' });
    document.getElementById('d26-turn').appendChild(svg);
    PRE.forEach(function (p, i) { sel.appendChild(A.h('option', { value: i, text: p.name })); });
    for (var n0 = 2; n0 <= 8; n0++) {
      nSel.appendChild(A.h('option', { value: n0, text: 'order ' + n0 + ' (by ' + String(Math.round(360 / n0 * 10) / 10) + '°)' }));
    }
    nSel.value = '5';
    var b = [[1, 0], [0, 1]], S = 40, C = 150, LIM = 3.7;

    function X(x) { return C + S * x; }
    function Y(y) { return C - S * y; }
    function f2(x) { var s = x.toFixed(2); return s === '-0.00' ? '0.00' : s; }
    function num(id) { var v = Number(document.getElementById(id).value); return isFinite(v) ? v : 0; }
    function turn(p, th) { return [Math.cos(th) * p[0] - Math.sin(th) * p[1], Math.sin(th) * p[0] + Math.cos(th) * p[1]]; }
    function det() { return b[0][0] * b[1][1] - b[0][1] * b[1][0]; }
    function coords(p) {
      var d = det();
      return [(p[0] * b[1][1] - b[1][0] * p[1]) / d, (b[0][0] * p[1] - p[0] * b[0][1]) / d];
    }
    function whole(x) { return Math.abs(x - Math.round(x)) < 1e-9; }
    function inView(p) { return Math.abs(p[0]) <= LIM && Math.abs(p[1]) <= LIM; }
    function latticePts() {
      var list = [];
      for (var i = -6; i <= 6; i++) for (var j = -6; j <= 6; j++) {
        var p = [i * b[0][0] + j * b[1][0], i * b[0][1] + j * b[1][1]];
        if (inView(p)) list.push(p);
      }
      return list;
    }
    function shortest() {
      var best = null, bl = Infinity;
      for (var i = -4; i <= 4; i++) for (var j = -4; j <= 4; j++) {
        if (i === 0 && j === 0) continue;
        var p = [i * b[0][0] + j * b[1][0], i * b[0][1] + j * b[1][1]], l = Math.hypot(p[0], p[1]);
        if (l < bl - 1e-12) { bl = l; best = p; }
      }
      return best;
    }
    function arrow(p, attrs) {
      return A.svg('line', Object.assign({ x1: C, y1: C, x2: X(p[0]), y2: Y(p[1]) }, attrs));
    }
    function setBasis(bb) {
      b = bb.map(function (v) { return v.slice(); });
      ids.forEach(function (id, i) { document.getElementById(id).value = i < 2 ? b[0][i] : b[1][i - 2]; });
    }

    function draw() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      for (var k = -4; k <= 4; k++) {
        svg.appendChild(A.svg('line', { x1: X(k), y1: 0, x2: X(k), y2: 300, stroke: '#eef0f3' }));
        svg.appendChild(A.svg('line', { x1: 0, y1: Y(k), x2: 300, y2: Y(k), stroke: '#eef0f3' }));
      }
      if (Math.abs(det()) < 1e-12) {
        out.innerHTML = 'These two vectors are parallel, so they do not form a basis. Change one of them.';
        return;
      }
      var n = Number(nSel.value), th = 2 * Math.PI / n, t = 2 * Math.cos(th);
      var pts = latticePts(), turned = pts.map(function (p) { return turn(p, th); });
      pts.forEach(function (p) { svg.appendChild(A.svg('circle', { cx: X(p[0]), cy: Y(p[1]), r: 4, fill: '#009CDE' })); });
      turned.forEach(function (p) { svg.appendChild(A.svg('circle', { cx: X(p[0]), cy: Y(p[1]), r: 6, fill: 'none', stroke: '#F36E24', 'stroke-width': 2 })); });
      var v = shortest(), L = Math.hypot(v[0], v[1]);
      svg.appendChild(arrow(v, { stroke: '#8B5CF6', 'stroke-width': 3 }));
      if (Math.abs(t) > 1e-9) svg.appendChild(arrow([t * v[0], t * v[1]], { stroke: '#D6336C', 'stroke-width': 2.5, 'stroke-dasharray': '6 4' }));

      var c1 = coords(turn(b[0], th)), c2 = coords(turn(b[1], th));
      var keeps = [c1, c2].every(function (c) { return whole(c[0]) && whole(c[1]); });
      var head = 'Turn of order ' + n + ' (by ' + String(Math.round(360 / n * 10) / 10) + '°). In lattice coordinates the turned basis vectors are (' +
        f2(c1[0]) + ', ' + f2(c1[1]) + ') and (' + f2(c2[0]) + ', ' + f2(c2[1]) + ').';
      var verdict = keeps
        ? '<strong>This turn keeps the lattice.</strong> The rings sit on the dots.'
        : '<strong>This turn does not keep the lattice.</strong> Those coordinates are not whole numbers.';
      var arg;
      if (Math.abs(t) < 1e-9) arg = 'Here 2cos θ = 0, so Rv + R⁻¹v = 0 and the shortest-vector argument says nothing.';
      else if (Math.abs(t) < 1 - 1e-9) arg = 'Shortest-vector check: the shortest nonzero vector has length ' + f2(L) +
        '. Then Rv + R⁻¹v = (2cos θ)v = ' + f2(t) + 'v, of length ' + f2(Math.abs(t) * L) +
        '. If the turn kept the lattice, that would be a shorter nonzero lattice vector, which is impossible. So no lattice keeps this turn.';
      else arg = 'Shortest-vector check: 2cos θ = ' + f2(t) + ', so (2cos θ)v has length at least ' + f2(L) + '. No contradiction.';
      out.innerHTML = head + '<br>' + verdict + '<br>' + arg;
    }

    function fromInputs() {
      b = [[num(ids[0]), num(ids[1])], [num(ids[2]), num(ids[3])]];
    }
    sel.addEventListener('change', function () {
      if (sel.value !== '4') setBasis(PRE[Number(sel.value)].b);
      draw();
    });
    ids.forEach(function (id) {
      document.getElementById(id).addEventListener('input', function () {
        sel.value = '4';
        fromInputs();
        draw();
      });
    });
    nSel.addEventListener('change', draw);
    sel.value = '0';
    setBasis(PRE[0].b);
    draw();
  })();
</script>
