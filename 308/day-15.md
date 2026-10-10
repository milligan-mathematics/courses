---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 15: Same Group, New Names"
day: 15
chapter_number: 9
chapter: "Isomorphisms"
day_title: "Same Group, New Names"
blurb: "Two groups can look nothing alike and still be the same group with the elements renamed. Find the renaming, and you have settled every question about one group by asking it of the other."
reading: "Chapter 9, Day 1: Section 9.1 through the definition of an isomorphism, its examples, and the results on what isomorphisms preserve and on cyclic groups"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Relabel until the tables match</h2>

  <p>The reading's first examples say that some groups which look different are really one group with different
    names on the elements. The test is a bijection \(\varphi\) that carries the operation along: \(\varphi(a \cdot b)
    = \varphi(a) \circ \varphi(b)\) for every \(a\) and \(b\). Judson calls such a \(\varphi\) an isomorphism.</p>

  <p>Here are two groups of order 4. On the left, \(U(10)\), the units mod \(10\) under multiplication. On the
    right, \(\mathbb{Z}_4\) under addition, relabeled with \(U(10)\) names as you choose them, and with its rows and
    columns listed in the order of those names. Colors show element orders, which is one thing an isomorphism must keep.</p>

  <p>Before you touch the controls, predict:</p>
  <ul>
    <li>Which element of \(U(10)\) must play the role of \(0\) in \(\mathbb{Z}_4\)? Which must play the role of \(2\),
      the one element of order \(2\) in \(\mathbb{Z}_4\)?</li>
    <li>How many bijections from \(\mathbb{Z}_4\) to \(U(10)\) are there? How many of them could possibly work?</li>
  </ul>

  <div class="ctl-row">
    <div class="ctl" id="d15-relabel-ctl"></div>
  </div>
  <div class="ctl-row">
    <div class="ctl"><div id="d15-left"></div></div>
    <div class="ctl"><div id="d15-right"></div></div>
  </div>
  <div class="readout a308-readout" id="d15-relabel-out" aria-live="polite"></div>

  <p>Set the four menus so the right table matches the left, cell for cell and color for color. Because the right table
    follows your choice of names, a correct relabeling makes the two tables look identical. The menus always keep a
    one-to-one pairing, so when you pick a name already in use, the two menus trade. Then notice which element was
    forced to play the identity.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>A negative example: the same size, the same shape, not the same group</h2>

  <p>\(\mathbb{Z}_4\) and the Klein four-group \(V_4\) (written \(\mathbb{Z}_2 \times \mathbb{Z}_2\) in Judson) both have
    four elements, and both are abelian. They are still not isomorphic, and the quickest argument is about element orders.</p>

  <p>Predict first: in each table, how many elements have order \(4\)? Then look.</p>

  <div class="ctl-row">
    <div class="ctl"><div id="d15-z4"></div></div>
    <div class="ctl"><div id="d15-v4"></div></div>
  </div>

  <p>An isomorphism carries an element of order \(4\) to an element of order \(4\), so no bijection can match these
    two tables. Count the colors in each table and say which color is missing from the other.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Same order, abelian, still different</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Are \(\mathbb{Z}_4\) and \(V_4\) isomorphic?</p>
    <button class="mc-opt" data-key="a">Yes. Both have four elements and both are abelian.</button>
    <button class="mc-opt" data-key="b">Yes. Every group of order \(4\) is isomorphic to \(\mathbb{Z}_4\).</button>
    <button class="mc-opt" data-key="c">No. \(\mathbb{Z}_4\) has an element of order \(4\), and \(V_4\) does not.</button>
    <button class="mc-opt" data-key="d">No. \(V_4\) is not a group, because some elements are their own inverses.</button>
    <div class="mc-fb" data-key="a"><p>Those are two properties an isomorphism keeps, but matching them does not guarantee
      an isomorphism. Two groups can agree on order and on being abelian and still differ in element orders.</p></div>
    <div class="mc-fb" data-key="b"><p>That would make every group of order \(4\) the same as \(\mathbb{Z}_4\). The Klein
      four-group is a standard counterexample.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. An isomorphism carries an element of order \(4\) to an element of order \(4\).
      \(V_4\) has no such element, so no isomorphism exists. Try the element-order colors above.</p></div>
    <div class="mc-fb" data-key="d"><p>Being your own inverse is normal in a group: the identity is, and so is every element of
      order \(2\). \(V_4\) is a group. The problem is elsewhere.</p></div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Which pair, and what must a map do?</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Which pair of groups is isomorphic?</p>
    <button class="mc-opt" data-key="a">\(\mathbb{Z}_6\) and \(S_3\), which both have six elements.</button>
    <button class="mc-opt" data-key="b">\(\mathbb{Z}_8\) and \(\mathbb{Z}_{12}\), which are both cyclic.</button>
    <button class="mc-opt" data-key="c">\(U(8)\) and \(U(12)\), which both have four elements.</button>
    <button class="mc-opt" data-key="d">\(\mathbb{Z}_4\) and \(V_4\), which are both abelian of order four.</button>
    <div class="mc-fb" data-key="a"><p>Same order, but \(\mathbb{Z}_6\) is abelian and \(S_3\) is not. An isomorphism would have to
      keep that, so no isomorphism exists. This is the reading's example.</p></div>
    <div class="mc-fb" data-key="b"><p>Both are cyclic, but their orders differ: \(|\mathbb{Z}_8| = 8\) and \(|\mathbb{Z}_{12}| = 12\).
      A bijection can't join sets of different sizes.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. Judson writes out a bijection \(U(8) \to U(12)\) and notes that another one also works.
      Both groups are isomorphic to \(\mathbb{Z}_2 \times \mathbb{Z}_2\).</p></div>
    <div class="mc-fb" data-key="d"><p>Same size and abelian, but the element-order check from the explorer above shows no
      isomorphism. Matching these two properties is not enough.</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which statement about an isomorphism \(\varphi\colon G \to H\) is true?</p>
    <button class="mc-opt" data-key="a">\(\varphi\) only has to be a bijection, not respect the operation.</button>
    <button class="mc-opt" data-key="b">\(\varphi\) is one-to-one and onto, and \(\varphi(ab) = \varphi(a)\varphi(b)\) for all \(a, b \in G\).</button>
    <button class="mc-opt" data-key="c">\(\varphi\) can send the identity of \(G\) to a non-identity element of \(H\).</button>
    <button class="mc-opt" data-key="d">\(\varphi\) only has to respect the operation, not be onto.</button>
    <div class="mc-fb" data-key="a"><p>A bijection that ignores the operation is just a relabeling, and relabeling alone
      proves nothing. The first explorer shows the tables only match when the operation is carried along.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. Both conditions are part of the definition. The first makes the names match one
      for one; the second makes the two tables agree cell by cell.</p></div>
    <div class="mc-fb" data-key="c"><p>Identities must match. If \(\varphi(e_G) = h\), then \(h = \varphi(e_G e_G) = h h\),
      and canceling gives \(h = e_H\). Try writing that out in your own words before you trust it.</p></div>
    <div class="mc-fb" data-key="d"><p>Onto is half of "one-to-one and onto," and the definition requires it. Without it you
      have a map into \(H\), which can miss most of \(H\).</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Every infinite cyclic group is \(\mathbb{Z}\)</h2>

  <p>The reading proves the result below. Commit to each step before you open it. Let \(G\) be cyclic of
    infinite order, with generator \(a\), and define \(\varphi\colon \mathbb{Z} \to G\) by \(\varphi(n) = a^n\).</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">What three things must \(\varphi\) do to be an isomorphism?</div>
        <div class="sstep-body"><p>It must respect the operation, be one-to-one, and be onto. Judson's proof takes them in
          that order, and the infinite-order hypothesis is needed for only one of them.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Why is \(\varphi(m + n) = \varphi(m)\varphi(n)\)?</div>
        <div class="sstep-body"><p>Because \(\varphi(m+n) = a^{m+n} = a^m a^n = \varphi(m)\varphi(n)\). The exponent law
          holds in any group for powers of one element.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Suppose \(\varphi(m) = \varphi(n)\) with \(m \neq n\), say \(m \gt n\). What equation do you get, and why does it contradict the hypothesis?</div>
        <div class="sstep-body"><p>\(a^m = a^n\), so \(a^{m-n} = e\) with \(m - n \gt 0\). An element of infinite order has
          no positive power equal to \(e\), so this cannot happen. That is one-to-one.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Why is \(\varphi\) onto?</div>
        <div class="sstep-body"><p>Every element of \(G\) is a power of the generator \(a\), so every element of \(G\) is
          \(\varphi(n)\) for some integer \(n\).</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Matching the table's shape is not matching the operation</h2>

  <p>A classmate claims that \(\mathbb{Z}_4\) is isomorphic to \(V_4\), using the bijection \(0 \mapsto e\), \(1 \mapsto a\),
    \(2 \mapsto b\), \(3 \mapsto c\). Here's their argument.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">The map \(\varphi\colon 0 \mapsto e,\ 1 \mapsto a,\ 2 \mapsto b,\ 3 \mapsto c\) is a bijection, since its four values are the four elements of \(V_4\), each used once.</button>
      <button class="fline" type="button">\(\varphi(0)\) is the identity of \(V_4\), so the identities are matched.</button>
      <button class="fline" type="button">The operations match too, since both tables have the same shape: each row and column lists all four elements once.</button>
      <button class="fline" type="button">So \(\varphi\) is a bijection that respects the operation, which means \(\varphi\) is an isomorphism. \(\blacksquare\)</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> A bijection is one-to-one and onto, and each of the four
      values appears once.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> \(\varphi(0)\) is what the bijection sends the identity to,
      and it has to be the identity of \(V_4\) for the matching to work.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>This is the flaw.</strong> Every group table has this property, and so do
      many tables that are not groups, so it can't be the reason two operations agree. What is needed is
      \(\varphi(x + y) = \varphi(x)\varphi(y)\) for all \(x, y\). Test one pair: \(1 + 1 = 2\), so \(\varphi(1+1) = \varphi(2) = b\),
      but \(\varphi(1)\varphi(1) = a \cdot a = e\). They differ, so \(\varphi\) is not an isomorphism.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine, as far as it goes.</strong> That is the definition of an isomorphism.
      The conclusion is right exactly when the preceding justification is, and the trouble is in line 3.</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The reading's list of what an isomorphism keeps covers the order of the group, being abelian, being cyclic, and
      having a subgroup of each order that the other group has. Which of these can you justify from the definition alone,
      and which needs the most thought?</li>
    <li>The proof that infinite cyclic groups are isomorphic to \(\mathbb{Z}\) uses the infinite-order hypothesis at exactly
      one step. Where would a finite cyclic group break that step, and what would you need to change in the map?</li>
    <li>The reading gives one bijection from \(U(8)\) to \(U(12)\) and remarks that another also works. What would you check
      to be sure a proposed bijection is an isomorphism, and how many checks does a four-element group need?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;

    /* ---- Explore 1: relabel Z_4 onto U(10) ---- */
    var L = A.U(10);                       // labels '1','3','7','9'
    var R = A.Z(4);                        // labels '0','1','2','3'
    A.cayley('d15-left', { group: L, color: 'order', clickable: false, caption: 'U(10)' });

    var ctl = document.getElementById('d15-relabel-ctl');
    var out = document.getElementById('d15-relabel-out');
    var rightDiv = document.getElementById('d15-right');
    var choice = [0, 1, 2, 3];             // choice[h] = index in L of the image of R element h (always a bijection)
    var selects = [];

    // The right table lists its rows and columns in the order of the names they take. Position j
    // holds the Z_4 element that is sent to name j, so a correct relabeling makes the tables identical.
    function drawRight() {
      var pos = [0, 0, 0, 0];
      choice.forEach(function (j, h) { pos[j] = h; });
      var T2 = pos.map(function (a) { return pos.map(function (b) { return choice[R.op(a, b)]; }); });
      var rows = T2.map(function (row) { return row.map(function (y) { return L.labels[y]; }); });
      var G2 = A.fromTable(L.labels.slice(), rows, 'Z4 relabeled');
      A.cayley(rightDiv, { group: G2, color: 'order', clickable: false, caption: 'Z4, relabeled to U(10) names' });

      var bad = [];
      for (var j = 0; j < 4; j++) for (var k = 0; k < 4; k++) if (T2[j][k] !== L.table[j][k]) bad.push([j, k]);
      // The order coloring sets inline backgrounds, so mismatches get an inline outline instead.
      Array.prototype.forEach.call(rightDiv.querySelectorAll('tbody tr'), function (tr, j) {
        Array.prototype.forEach.call(tr.querySelectorAll('td'), function (td, k) {
          var off = bad.some(function (p) { return p[0] === j && p[1] === k; });
          td.style.boxShadow = off ? 'inset 0 0 0 3px #d92d20' : '';
        });
      });
      if (bad.length === 0) {
        out.innerHTML = '<strong>The tables match.</strong> Every cell agrees, so this bijection is an isomorphism.';
      } else {
        var p = bad[0];
        out.innerHTML = bad.length + ' cell(s) differ, outlined in red. The first is row ' + L.labels[p[0]] + ', column ' +
          L.labels[p[1]] + ': the left table shows ' + L.labels[L.table[p[0]][p[1]]] + ' and the right shows ' +
          L.labels[T2[p[0]][p[1]]] + '.';
      }
      if (window.M411 && M411.typeset) M411.typeset(out);
    }

    // Four menus, one per element of Z_4. Choosing a name already in use swaps the two menus.
    [0, 1, 2, 3].forEach(function (h) {
      var sel = A.h('select', { 'aria-label': 'image of ' + R.labels[h] + ' in U(10)' });
      L.labels.forEach(function (lab, i) { sel.appendChild(A.h('option', { value: i, text: lab })); });
      selects[h] = sel;
      sel.addEventListener('change', function () {
        var v = Number(sel.value), old = choice[h];
        var k = choice.indexOf(v);
        choice[h] = v;
        if (k !== h) { choice[k] = old; selects[k].value = old; }
        drawRight();
      });
      ctl.appendChild(A.h('label', { class: 'a308-inline' }, ['Z4 element ' + R.labels[h] + ' goes to ', sel]));
    });
    [0, 1, 2, 3].forEach(function (h) { selects[h].value = choice[h]; });

    drawRight();

    /* ---- Explore 2: element orders in Z_4 and V_4 ---- */
    A.cayley('d15-z4', { group: A.Z(4), color: 'order', clickable: false, caption: 'Z4: element orders' });
    A.cayley('d15-v4', { group: A.V4(), color: 'order', clickable: false, caption: 'V4: element orders' });
  })();
</script>
