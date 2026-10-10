---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 4: Groups Inside Groups"
day: 4
chapter_number: 3
chapter: "Groups"
day_title: "Groups Inside Groups"
blurb: "Two groups built from matrices, a group of eight quaternions that refuses to commute, and a short proof that each element has exactly one inverse. Then the question the chapter keeps asking: when does one group sit inside a bigger one?"
reading: "Chapter 3, Day 2: the rest of Section 3.2 (matrix groups, quaternions, direct products, basic properties) and the start of Section 3.3, through the definition of a subgroup and its first examples"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Two groups of matrices</h2>

  <p>Judson's next examples are sets of \(2 \times 2\) real matrices under multiplication. \(GL_2(\mathbb R)\) is the set of invertible matrices. A matrix \(A = \begin{pmatrix} a &amp; b \\ c &amp; d \end{pmatrix}\) is invertible exactly when \(\det A = ad - bc \neq 0\), and then
    \[ A^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d &amp; -b \\ -c &amp; a \end{pmatrix}. \]
    \(SL_2(\mathbb R)\) is the subset where \(\det A = 1\). Judson states, without proof, that a product of invertible matrices is invertible, and that is what makes \(GL_2(\mathbb R)\) closed. The closure of \(SL_2(\mathbb R)\) he leaves to you.</p>

  <p>Predict before you press anything. Four matrices are on the buttons below. Which of them are in \(GL_2(\mathbb R)\)? Which are in \(SL_2(\mathbb R)\)?</p>

  <div id="d04-matrix"></div>

  <p>Notice why the formula works. The product of \(A\) with \(\begin{pmatrix} d &amp; -b \\ -c &amp; a \end{pmatrix}\) is always \((ad - bc)\) times the identity, so dividing by \(\det A\) gives the inverse. When \(\det A = 1\), there are no fractions at all. Type in your own entries too, and try one with \(\det A = 0\).</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Eight quaternions, and a table that isn't symmetric</h2>

  <p>The quaternion group \(Q_8 = \{\pm 1, \pm I, \pm J, \pm K\}\) is built from four \(2 \times 2\) matrices with complex entries, where \(i^2 = -1\): the identity \(1\), and
    \(I = \begin{pmatrix} 0 &amp; 1 \\ -1 &amp; 0 \end{pmatrix}\), \(J = \begin{pmatrix} 0 &amp; i \\ i &amp; 0 \end{pmatrix}\), \(K = \begin{pmatrix} i &amp; 0 \\ 0 &amp; -i \end{pmatrix}\). You won't need the matrices. The reading's relations do the work:</p>
  <ul>
    <li>\(I^2 = J^2 = K^2 = -1\);</li>
    <li>\(IJ = K\), \(JK = I\), and \(KI = J\);</li>
    <li>reversing a pair flips the sign: \(JI = -K\), \(KJ = -I\), and \(IK = -J\).</li>
  </ul>

  <p>Predict before you fill anything. The table has a blank in each of four cells, and each blank is one of the products above. Will the table be symmetric across its diagonal, so that \(xy = yx\) for every pair? Fill in the four blanks, then press Check.</p>

  <div id="d04-q8"></div>

  <p>Once the check is green, compare the cell in row \(I\), column \(J\) with the cell in row \(J\), column \(I\). They differ, so \(IJ \neq JI\), and \(Q_8\) is nonabelian. Most of the work is in the signs. For example, \((-I)J = -(IJ) = -K\), the same rule you use for \((-2)(3) = -6\).</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>A product of two groups, one coordinate at a time</h2>

  <p>Given groups \(G\) and \(H\), the direct product \(G \times H\) is the set of ordered pairs \((g, h)\), with the operation done in each coordinate: \((g, h)(g', h') = (gg', hh')\). The reading's \(\mathbb Z_2 \times \mathbb Z_2\) example does this with addition. Here \(\mathbb Z_2 \times \mathbb Z_4\) adds the first coordinates mod \(2\) and the second mod \(4\). To save room, the table writes \((a, b)\) as \(ab\), so the entry \(13\) means \((1, 3)\).</p>

  <p>Predict before you fill anything. How many entries does this table have? Each blank asks you to add two pairs one coordinate at a time. Fill in the three blanks, then press Check.</p>

  <div id="d04-prod"></div>

  <p>Look at the finished table. It is symmetric across the diagonal, because addition in each coordinate is commutative. The identity is \(00\). Each coordinate is handled inside its own group, and the table is simply the two smaller operations run side by side.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Inverses are unique</h2>

  <p>The reading proves that the identity of a group is unique, and then that each element has only one inverse. Judson's argument for inverses is short. Walk through it one committed step at a time, and answer each prompt before you open its box.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Suppose \(g'\) and \(g''\) are both inverses of \(g\). Which equations do you know, and what do you need to prove?</div>
        <div class="sstep-body"><p>\(gg' = g'g = e\) and \(gg'' = g''g = e\). We need \(g' = g''\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Start from \(g'\). Write \(g' = g'e\), then replace the \(e\) by something that brings \(g''\) into play. What do you replace it with?</div>
        <div class="sstep-body"><p>Since \(gg'' = e\), we get \(g' = g'(gg'')\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Which axiom lets you regroup \(g'(gg'')\) as \((g'g)g''\)? Then what does \(g'g\) equal?</div>
        <div class="sstep-body"><p>Associativity. And \(g'g = e\), so \((g'g)g'' = eg''\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Finish. What is \(eg''\), and what does the chain of equalities say about \(g'\) and \(g''\)?</div>
        <div class="sstep-body"><p>\(eg'' = g''\), so the chain reads \(g' = g''\). The inverse of \(g\) is unique.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Which facts about the group did the argument use? Is commutativity among them?</div>
        <div class="sstep-body"><p>Only associativity, the identity, and the inverse equations. Commutativity never appeared, so the same argument works in every group, abelian or not.</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Cancel, and count the exponents</h2>

  <p>The reading states the cancellation laws and the exponent laws, and leaves their proofs to you. The cancellation law says that \(ba = ca\) forces \(b = c\), and that \(ab = ac\) forces \(b = c\). The exponent laws say \(g^m g^n = g^{m+n}\) and \((g^m)^n = g^{mn}\). Pick an answer before you check it.</p>

  <div class="mc" data-answer="a">
    <p class="mc-q">In a group \(G\), suppose \(ab = cb\) for some \(a, b, c \in G\). Which conclusion is correct?</p>
    <button class="mc-opt" data-key="a">\(a = c\). Multiply on the right by \(b^{-1}\) and use associativity.</button>
    <button class="mc-opt" data-key="b">\(a = c\), but only when \(G\) is abelian. Cancellation needs commutativity.</button>
    <button class="mc-opt" data-key="c">Nothing follows, because cancellation only works when \(b\) is the identity.</button>
    <button class="mc-opt" data-key="d">\(b = a^{-1}c\). Move \(a\) to the other side, the way you would with a number.</button>
    <div class="mc-fb" data-key="a"><p>Right. Multiplying on the right by \(b^{-1}\) and regrouping clears the \(b\)'s from both sides. Only associativity and the inverse axiom are needed.</p></div>
    <div class="mc-fb" data-key="b"><p>Cancellation does not need commutativity. The argument in the first option uses only associativity and the inverse axiom, and it runs the same way in any group. Assuming that a group must be abelian for cancellation to work is a common slip.</p></div>
    <div class="mc-fb" data-key="c"><p>The identity plays no special role. Any \(b\) can be cancelled on the right, because \(b\) has an inverse \(b^{-1}\).</p></div>
    <div class="mc-fb" data-key="d"><p>Not quite. Multiplying on the left by \(a^{-1}\) gives \(b = a^{-1}cb\), and the \(b\) on the right can't be dropped. Try \(a = c = I\) and \(b = J\) in \(Q_8\): both sides of \(ab = cb\) equal \(K\), but \(a^{-1}c = e\) and \(b \neq e\).</p></div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Which statement is true in every group?</p>
    <button class="mc-opt" data-key="a">\(g^2 g^3 = g^6\).</button>
    <button class="mc-opt" data-key="b">\((gh)^{-1} = g^{-1}h^{-1}\).</button>
    <button class="mc-opt" data-key="c">\((g^{-1})^{-1} = g\).</button>
    <button class="mc-opt" data-key="d">\(g^{-1} = g\) for every \(g\).</button>
    <div class="mc-fb" data-key="a"><p>Multiplying powers adds exponents: \(g^2g^3 = g^5\). Exponents multiply only when you raise a power to a power, as in \((g^2)^3 = g^6\).</p></div>
    <div class="mc-fb" data-key="b"><p>Inverses reverse the order: \((gh)^{-1} = h^{-1}g^{-1}\), the socks-and-shoes rule from Day 3. In \(Q_8\), \((IJ)^{-1} = K^{-1} = -K\), but \(I^{-1}J^{-1} = (-I)(-J) = IJ = K\).</p></div>
    <div class="mc-fb" data-key="c"><p>Right. Multiply \(g^{-1}(g^{-1})^{-1} = e\) on the left by \(g\), regroup with associativity, and you get \((g^{-1})^{-1} = g\). The proof uses only associativity and the inverse axioms.</p></div>
    <div class="mc-fb" data-key="d"><p>Not every element is its own inverse. In \(Q_8\), \(I \cdot I = -1\), so \(I^{-1} = -I\), not \(I\).</p></div>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>The positive integers, a subgroup of \(\mathbb R^*\)?</h2>

  <p>Section 3.3 starts with the definition. A subgroup \(H\) of a group \(G\) is a subset of \(G\) that is a group in its own right, using the operation of \(G\). Every group with at least two elements has at least two subgroups: the trivial subgroup \(\{e\}\) and the whole group.</p>

  <p>A classmate argues that the positive integers \(\mathbb Z^+\) form a subgroup of \(\mathbb R^*\), the nonzero real numbers under multiplication. Here is the argument.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">\(1 \in \mathbb Z^+\), and \(1\) is the identity of \(\mathbb R^*\).</button>
      <button class="fline" type="button">If \(m, n \in \mathbb Z^+\), then \(mn\) is a positive integer, so \(\mathbb Z^+\) is closed under multiplication.</button>
      <button class="fline" type="button">For \(n \in \mathbb Z^+\), the inverse of \(n\) in \(\mathbb R^*\) is \(1/n\). Since \(1/n\) is positive, \(1/n \in \mathbb Z^+\).</button>
      <button class="fline" type="button">Multiplication is associative in \(\mathbb R^*\), so it is associative on \(\mathbb Z^+\).</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> The identity of \(\mathbb R^*\) is \(1\), and \(1\) is a positive integer.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> Closure is one of the requirements, and the product of two positive integers is a positive integer.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>This is the flaw.</strong> \(1/n\) is positive, but it need not be an integer. The inverse of \(2\) is \(1/2\), which is positive and not in \(\mathbb Z^+\). Positive is not the same as integer, and the set fails the inverse requirement.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine.</strong> The operation is the same as in \(\mathbb R^*\), so associativity carries over.</p></div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Which subsets are subgroups?</h2>

  <p>Test each option against the definition: a group in its own right, under the operation of the bigger group. Look for the identity, closure, and inverses, and if one fails, say which product or inverse breaks it.</p>

  <div class="mc" data-answer="d">
    <p class="mc-q">Which subset of \(\mathbb C^*\), the nonzero complex numbers under multiplication, is a subgroup?</p>
    <button class="mc-opt" data-key="a">\(\{1, -1, i\}\)</button>
    <button class="mc-opt" data-key="b">\(\{z \in \mathbb C^* : |z| \le 1\}\)</button>
    <button class="mc-opt" data-key="c">\(\{1, 2, \tfrac12\}\)</button>
    <button class="mc-opt" data-key="d">\(\{1, -1, i, -i\}\)</button>
    <div class="mc-fb" data-key="a"><p>Closure fails: \(i \cdot (-1) = -i\), and \(-i\) is not in the set.</p></div>
    <div class="mc-fb" data-key="b"><p>Closure does hold, since \(|zw| = |z|\,|w| \le 1\) when \(|z|, |w| \le 1\), and \(1\) is in the set. Inverses fail: \(\tfrac12\) is in the set, but its inverse \(2\) is not.</p></div>
    <div class="mc-fb" data-key="c"><p>Inverses are fine, since \(2\) and \(\tfrac12\) are inverses of each other. Closure fails: \(2 \cdot 2 = 4\) is not in the set.</p></div>
    <div class="mc-fb" data-key="d"><p>Right. The product of any two of these four numbers is one of the four, \(1\) is in the set, and the inverses of \(-1\), \(i\), and \(-i\) are \(-1\), \(-i\), and \(i\), all in the set.</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which subset of \((\mathbb Z, +)\) is a subgroup?</p>
    <button class="mc-opt" data-key="a">\(\{0, 2, 4\}\)</button>
    <button class="mc-opt" data-key="b">\(2\mathbb Z\), the even integers</button>
    <button class="mc-opt" data-key="c">The nonnegative integers \(\{0, 1, 2, \ldots\}\)</button>
    <button class="mc-opt" data-key="d">\(\{-1, 0, 1\}\)</button>
    <div class="mc-fb" data-key="a"><p>Closure fails: \(2 + 4 = 6\), which is not in the set. Inverses fail too, since \(-2\) is missing.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. A sum of two even integers is even, \(0\) is even, and the negative of an even integer is even.</p></div>
    <div class="mc-fb" data-key="c"><p>Closed under addition, and it contains \(0\), but \(-1\) is not a nonnegative integer, so the inverse requirement fails.</p></div>
    <div class="mc-fb" data-key="d"><p>Inverses are fine, since \(-1\) and \(1\) are inverses of each other. Closure fails: \(1 + 1 = 2\) is not in the set.</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Find the step in the inverse proof where associativity does the real work. What would become ambiguous at that step if the operation were not associative?</li>
    <li>\(Q_8\) can be described by its matrices, by its relations, or by its table. When is each description easiest to work with? Give one reason for each.</li>
    <li>Judson's definition asks a subgroup to be a group under the operation of the bigger group. Why would it be a mistake to accept any group structure that happens to live on the same set?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;

    function small(id) {
      var t = document.querySelector('#' + id + ' table');
      if (t) t.classList.add('small');
    }

    // 1. Matrices: det, membership in GL2 and SL2, and the inverse formula.
    var mat = document.getElementById('d04-matrix');
    var names = ['a', 'b', 'c', 'd'];
    var where = { a: 'top left', b: 'top right', c: 'bottom left', d: 'bottom right' };
    var entry = {};
    var fields = A.h('div', { class: 'ctl-row' });
    var out = A.h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    names.forEach(function (nm) {
      entry[nm] = A.h('input', { type: 'number', step: 1, value: 0, class: 'a308-num',
        'aria-label': 'entry ' + nm + ' (' + where[nm] + ')' });
      entry[nm].addEventListener('input', update);
      fields.appendChild(A.h('div', { class: 'ctl' }, [A.h('label', { text: nm + ' (' + where[nm] + ')' }), entry[nm]]));
    });
    var presets = [[2, 1, 1, 1], [1, 2, 3, 4], [1, 2, 2, 4], [0, 1, -1, 0]];
    var buttons = A.h('div', { class: 'a308-row' });
    presets.forEach(function (p) {
      var label = 'A = [[' + p[0] + ', ' + p[1] + '], [' + p[2] + ', ' + p[3] + ']]';
      var b = A.h('button', { class: 'btn411 ghost', type: 'button', text: label.replace(/-/g, '−') });
      b.addEventListener('click', function () {
        names.forEach(function (nm, k) { entry[nm].value = p[k]; });
        update();
      });
      buttons.appendChild(b);
    });
    mat.appendChild(fields);
    mat.appendChild(buttons);
    mat.appendChild(out);
    out.innerHTML = 'Press one of the buttons, or type your own entries.';

    function v(nm) { return Math.trunc(Number(entry[nm].value)) || 0; }
    function frac(p, q) {
      if (q < 0) { p = -p; q = -q; }
      var g = A.gcd(p, q) || 1;
      p = p / g; q = q / g;
      return (q === 1 ? String(p) : p + '/' + q).replace(/-/g, '−');
    }
    function update() {
      var a = v('a'), b = v('b'), c = v('c'), d = v('d');
      var det = a * d - b * c;
      var html = '<strong>det A = ad − bc = ' + String(det).replace('-', '−') + '.</strong> ';
      if (det === 0) {
        html += 'A is not invertible, so A is not in GL₂(ℝ), and it is not in SL₂(ℝ) either.';
      } else {
        html += 'A is invertible, so A ∈ GL₂(ℝ), with inverse [[' + frac(d, det) + ', ' + frac(-b, det) +
          '], [' + frac(-c, det) + ', ' + frac(a, det) + ']]. ';
        html += det === 1 ? 'Since det A = 1, A is also in SL₂(ℝ), and the inverse has no fractions.'
                          : 'Since det A ≠ 1, A is not in SL₂(ℝ).';
      }
      out.innerHTML = html;
    }

    // 2. Q8 with Judson's names (the engine calls the units i, j, k).
    var Q = A.Q8();
    Q.labels = ['1', '−1', 'I', '−I', 'J', '−J', 'K', '−K'];
    function at(x, y) { return [Q.index(x), Q.index(y)]; }
    A.cayley('d04-q8', {
      group: Q, clickable: false, caption: 'Q₈, row times column',
      blanks: [at('I', 'J'), at('J', 'I'), at('I', 'K'), at('K', 'J')]
    });
    small('d04-q8');

    // 3. Z2 x Z4, with (a, b) written ab.
    var P = A.product(A.Z(2), A.Z(4));
    P.labels = P.labels.map(function (_, k) { return Math.floor(k / 4) + '' + (k % 4); });
    function atP(x, y) { return [P.index(x), P.index(y)]; }
    A.cayley('d04-prod', {
      group: P, clickable: false, caption: 'ℤ₂ × ℤ₄, with (a, b) written ab',
      blanks: [atP('13', '12'), atP('11', '13'), atP('12', '12')]
    });
    small('d04-prod');
  })();
</script>
