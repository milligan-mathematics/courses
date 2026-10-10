---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 5: One Step to a Subgroup"
day: 5
chapter_number: 3
chapter: "Groups"
day_title: "One Step to a Subgroup"
blurb: "Checking that a subset is a subgroup sounds like three separate jobs, but Judson's one-step test does them all at once: pick two elements, multiply one by the inverse of the other, and see whether you stay inside. Then try to break it."
reading: "Chapter 3, Day 3: the rest of Section 3.3, the subgroup tests (the three-part test and the one-step test)"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Is it a subgroup? A checker for \(D_5\)</h2>

  <p>Judson's first test says that a subset \(H\) of a group \(G\) is a subgroup exactly when \(e \in H\), \(H\) is closed under the operation, and \(H\) contains the inverse of each of its elements. Our group is \(D_5\), the symmetries of a regular pentagon. The element \(r\) turns the pentagon by \(72^\circ\), and \(s\) is a flip. There are ten symmetries in all, and the group is nonabelian, so the order in which you multiply matters.</p>

  <p>Predict before you touch anything. Which of these three subsets are subgroups: the rotations \(\{e, r, r^2, r^3, r^4\}\), the pair \(\{e, s\}\), and \(\{e, r, s\}\)? For any that fails, guess where it breaks.</p>

  <div id="d05-explore"></div>

  <p>Build your own sets with the chips, or press a preset. The readout checks the identity, closure, and inverses, then the one-step test, and it shows the smallest subgroup containing your choices. In the table, a green cell is a product of two chosen elements that stays in your set. A red cell is a product that escapes it.</p>

  <p>Notice that the verdict agrees with the one-step test every time you try a set. For \(\{e, r, s\}\), the closure line names the first product that escapes. Find that cell in the table. Is it red?</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Which condition is enough?</h2>

  <p>Let \(H\) be a nonempty subset of a group \(G\). Judson's one-step test replaces the three-part test with a single condition. Pick the condition that is equivalent to \(H\) being a subgroup.</p>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which condition, together with \(H \neq \emptyset\), is equivalent to \(H\) being a subgroup of \(G\)?</p>
    <button class="mc-opt" data-key="a">If \(g, h \in H\), then \(gh \in H\).</button>
    <button class="mc-opt" data-key="b">If \(g, h \in H\), then \(gh^{-1} \in H\).</button>
    <button class="mc-opt" data-key="c">\(e \in H\), and if \(h \in H\) then \(h^{-1} \in H\).</button>
    <button class="mc-opt" data-key="d">If \(g, h \in H\), then \(g^{-1}h^{-1} \in H\).</button>
    <div class="mc-fb" data-key="a"><p>Closure alone is not enough. In \(\mathbb Z\) under addition, the nonnegative integers are closed under \(+\), but \(-1\) is not in the set. Closure is only part of the job.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. This one condition, together with \(H \neq \emptyset\), gives all three requirements. The proof in the next activity shows how.</p></div>
    <div class="mc-fb" data-key="c"><p>The identity and inverse conditions are needed, but they are not enough. In \(\mathbb Z\), the set \(\{-1, 0, 1\}\) contains \(0\) and the inverse of each element, yet \(1 + 1 = 2\) is not in it.</p></div>
    <div class="mc-fb" data-key="d"><p>Not sufficient. Let \(H\) be the set of integers congruent to \(1\) mod \(3\). For \(g, h \in H\), the element \(-g - h\) is congruent to \(-2\), which is \(1\) mod \(3\), so it stays in \(H\). But \(0 \notin H\).</p></div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Which subset of \(D_5\) is a subgroup?</p>
    <button class="mc-opt" data-key="a">\(\{e, rs\}\)</button>
    <button class="mc-opt" data-key="b">\(\{e, r, s\}\)</button>
    <button class="mc-opt" data-key="c">\(\{r, r^2, r^3, r^4\}\)</button>
    <button class="mc-opt" data-key="d">\(\{e, r^2, s, rs\}\)</button>
    <div class="mc-fb" data-key="a"><p>Right. \(rs\) is a flip, and flipping twice returns you to \(e\), so the set contains the inverse of each of its elements and is closed.</p></div>
    <div class="mc-fb" data-key="b"><p>Closure fails: \(r \cdot s = rs\) is not in the set. Also, \(r\) has no inverse in the set.</p></div>
    <div class="mc-fb" data-key="c"><p>The identity is missing, and a subgroup must contain the identity of the group. Closure also fails: \(r \cdot r^4 = e\), which is not in the set.</p></div>
    <div class="mc-fb" data-key="d"><p>Closure fails: \(r^2 \cdot r^2 = r^4\) is not in the set.</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>The one-step test</h2>

  <p>The reading's second test is shorter. A nonempty subset \(H\) of \(G\) is a subgroup exactly when \(gh^{-1} \in H\) for all \(g, h \in H\). The forward direction is quick: a subgroup contains \(h^{-1}\) and is closed under the operation, so it contains \(gh^{-1}\). The converse is the part to earn. Judson's argument uses only the definition of a subgroup and the facts from Day 4. Commit to each step before you open it.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Assume \(H \neq \emptyset\) and \(gh^{-1} \in H\) for all \(g, h \in H\). Which three things must you show to get the three-part test?</div>
        <div class="sstep-body"><p>That \(e \in H\), that \(H\) is closed under the operation, and that \(H\) contains inverses. Associativity needs no separate check, because it holds in \(G\) and the operation on \(H\) is the same.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Pick any \(g \in H\), which is possible because \(H\) is nonempty. Use the hypothesis with the pair \((g, g)\). What element of \(H\) do you get?</div>
        <div class="sstep-body"><p>\(gg^{-1} = e\), so \(e \in H\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now use the hypothesis with the pair \((e, g)\). What element of \(H\) comes out, and why is it the inverse of \(g\)?</div>
        <div class="sstep-body"><p>\(eg^{-1} = g^{-1}\), so \(g^{-1} \in H\). Since \(g\) was any element of \(H\), every element of \(H\) has its inverse in \(H\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Take \(h_1, h_2 \in H\). Step 3 says \(h_2^{-1} \in H\). Apply the hypothesis to \(h_1\) and \(h_2^{-1}\), then simplify \((h_2^{-1})^{-1}\). What do you get?</div>
        <div class="sstep-body"><p>\(h_1(h_2^{-1})^{-1} \in H\), and \((h_2^{-1})^{-1} = h_2\) by the basic property from Day 4. So \(h_1h_2 \in H\), and \(H\) is closed.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Put the pieces together. Which of the three-part conditions have you now shown, and why does that make \(H\) a subgroup?</div>
        <div class="sstep-body"><p>The identity (step 2), inverses (step 3), and closure (step 4). With associativity inherited from \(G\), \(H\) is a group under the operation of \(G\), which is the definition of a subgroup.</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Nonnegative and closed, so a subgroup?</h2>

  <p>A classmate wants to show that \(H = \{0, 1, 2, 3, \ldots\}\), the nonnegative integers, is a subgroup of \(\mathbb Z\) under addition. The argument uses the one-step test. Here it is.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">\(H\) is nonempty, since \(0 \in H\).</button>
      <button class="fline" type="button">Let \(g, h \in H\). In \(\mathbb Z\) the inverse of \(h\) is \(-h\), so the one-step test asks whether \(g + (-h) = g - h\) lies in \(H\).</button>
      <button class="fline" type="button">Since \(g \ge 0\) and \(h \ge 0\), we have \(g - h \ge 0\), so \(g - h \in H\).</button>
      <button class="fline" type="button">So \(H\) passes the one-step test, and \(H\) is a subgroup of \(\mathbb Z\).</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> \(0\) is a nonnegative integer, so the set is nonempty.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> In \(\mathbb Z\), \(h^{-1} = -h\), so \(gh^{-1} = g - h\). That is the element the test asks about.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>This is the flaw.</strong> Subtraction can make a number negative. Take \(g = 0\) and \(h = 1\). Then \(g - h = -1\), which is not in \(H\). Nonnegativity is not preserved by subtraction.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine as logic.</strong> If every \(gh^{-1}\) landed in \(H\), the one-step test would be passed. The trouble is that line 3 is false, so the conclusion is not established.</p></div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The subgroups of \(\mathbb Z_2 \times \mathbb Z_4\)</h2>

  <p>Here is the group from Day 4, with \((a, b)\) written \(ab\). Its operation adds coordinatewise, so \(00\) is the identity. The order of an element is the smallest number of copies of it that add up to \(00\). A subgroup lattice draws every subgroup of a finite group, and a line joins each subgroup to the larger subgroups that contain it with nothing in between.</p>

  <p>Predict before you reveal anything: how many subgroups does \(\mathbb Z_2 \times \mathbb Z_4\) have, and how many of them have four elements? Find a four-element subgroup whose elements all have order \(1\) or \(2\).</p>

  <div id="d05-lattice"></div>
  <div id="d05-table"></div>

  <p>Click a node in the lattice, and its elements light up in the table. Pick two highlighted elements and find their sum, to see for yourself that the set stays closed. Then notice which subgroups contain an element of order \(4\) and which do not.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Read the lattice, then test by hand</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Which subset of \(\mathbb Z_2 \times \mathbb Z_4\) is a subgroup?</p>
    <button class="mc-opt" data-key="a">\(\{00, 01, 02\}\)</button>
    <button class="mc-opt" data-key="b">\(\{00, 11, 10\}\)</button>
    <button class="mc-opt" data-key="c">\(\{00, 02, 10, 12\}\)</button>
    <button class="mc-opt" data-key="d">\(\{00, 02, 13\}\)</button>
    <div class="mc-fb" data-key="a"><p>Closure fails: \(01 + 02 = 03\), which is not in the set. Inverses fail too, since the inverse of \(01\) is \(03\).</p></div>
    <div class="mc-fb" data-key="b"><p>Closure fails: \(11 + 10 = 01\), which is not in the set.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. This is the Klein subgroup from the lattice. Each of its elements is its own inverse, and every sum of two of them stays inside, for example \(10 + 12 = 02\).</p></div>
    <div class="mc-fb" data-key="d"><p>Closure fails: \(13 + 02 = 11\), which is not in the set. Inverses fail too, since the inverse of \(13\) is \(11\).</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">How many subgroups of \(\mathbb Z_2 \times \mathbb Z_4\) have exactly four elements?</p>
    <button class="mc-opt" data-key="a">One</button>
    <button class="mc-opt" data-key="b">Three</button>
    <button class="mc-opt" data-key="c">Two</button>
    <button class="mc-opt" data-key="d">Four</button>
    <div class="mc-fb" data-key="a"><p>The Klein subgroup is one. But \(\langle 01\rangle = \{00, 01, 02, 03\}\) and \(\langle 11 \rangle = \{00, 02, 11, 13\}\) also have four elements.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. Three subgroups have four elements: \(\langle 01 \rangle\), \(\langle 11 \rangle\), and the Klein subgroup \(\{00, 02, 10, 12\}\).</p></div>
    <div class="mc-fb" data-key="c"><p>You found \(\langle 01 \rangle\) and \(\langle 11 \rangle\). The Klein subgroup \(\{00, 02, 10, 12\}\) is a third.</p></div>
    <div class="mc-fb" data-key="d"><p>Count again. The lattice shows three subgroups with four elements, and the whole group, with eight, is not one of them.</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The one-step test needs \(H \neq \emptyset\). The condition "\(gh^{-1} \in H\) for all \(g, h \in H\)" is vacuously true for \(H = \varnothing\). What does that tell you about the hypothesis, and what would the test claim about the empty set without it?</li>
    <li>Could a finite subset of \(D_5\) be closed under the operation and still miss an inverse? Think about what repeated multiplication does to one element.</li>
    <li>When you build a subgroup by hand, which condition do you check first? Does your answer change if the subset is given as a list of elements, or as a rule such as "the integers congruent to \(1\) mod \(3\)"?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;

    function small(id) {
      var t = document.querySelector('#' + id + ' table');
      if (t) t.classList.add('small');
    }

    // 1. A checker for D5: pick elements, test the subgroup conditions, see the smallest subgroup.
    var D = A.D(5);
    var box = document.getElementById('d05-explore');
    var S = [];
    var chips = [];
    var chipRow = A.h('div', { class: 'a308-row' });
    D.elements().forEach(function (x) {
      var c = A.h('button', { class: 'btn411 ghost', type: 'button', text: D.labels[x], 'aria-pressed': 'false' });
      c.addEventListener('click', function () { toggle(x); });
      chips.push(c);
      chipRow.appendChild(c);
    });
    var presetRow = A.h('div', { class: 'a308-row' });
    [['Rotations', ['e', 'r', 'r²', 'r³', 'r⁴']], ['e and s', ['e', 's']],
     ['e, r and s', ['e', 'r', 's']], ['Clear', []]].forEach(function (p) {
      var b = A.h('button', { class: 'btn411 ghost', type: 'button', text: p[0] });
      b.addEventListener('click', function () { setSet(p[1]); });
      presetRow.appendChild(b);
    });
    var tableBox = A.h('div');
    var out = A.h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    box.appendChild(chipRow);
    box.appendChild(presetRow);
    box.appendChild(tableBox);
    box.appendChild(out);
    var tbl = A.cayley(tableBox, { group: D, clickable: false, caption: 'D₅, row times column', highlight: [] });

    function lab(x) { return D.labels[x]; }
    function sortS() { S.sort(function (p, q) { return p - q; }); }
    function toggle(x) {
      var k = S.indexOf(x);
      if (k >= 0) S.splice(k, 1); else S.push(x);
      sortS();
      sync();
    }
    function setSet(labels) {
      S.length = 0;
      labels.forEach(function (l) { S.push(D.index(l)); });
      sortS();
      sync();
    }
    function paint() {
      var t = tableBox.querySelector('table');
      if (!t) return;
      t.classList.add('small');
      Array.prototype.forEach.call(t.querySelectorAll('tbody tr'), function (tr, x) {
        Array.prototype.forEach.call(tr.querySelectorAll('td'), function (td, y) {
          td.classList.remove('good', 'bad');
          if (S.indexOf(x) >= 0 && S.indexOf(y) >= 0) {
            td.classList.add(S.indexOf(D.op(x, y)) >= 0 ? 'good' : 'bad');
          }
        });
      });
    }
    function report() {
      if (!S.length) { out.innerHTML = 'Pick some elements, or press a preset.'; return; }
      var html = [];
      html.push('Identity: ' + (S.indexOf(D.e) >= 0 ? 'e is in S.' : 'e is <strong>not</strong> in S, so S cannot be a subgroup.'));
      var bad = null;
      S.forEach(function (g) { S.forEach(function (h) {
        if (!bad && S.indexOf(D.op(g, h)) < 0) bad = [g, h];
      }); });
      html.push('Closure: ' + (bad ? 'no. ' + lab(bad[0]) + ' · ' + lab(bad[1]) + ' = ' +
        lab(D.op(bad[0], bad[1])) + ' is not in S.' : 'yes.'));
      var invBad = S.filter(function (g) { return S.indexOf(D.inv(g)) < 0; })[0];
      html.push('Inverses: ' + (invBad === undefined ? 'yes.' :
        'no. The inverse of ' + lab(invBad) + ' is ' + lab(D.inv(invBad)) + ', which is not in S.'));
      var one = null;
      S.forEach(function (g) { S.forEach(function (h) {
        if (!one && S.indexOf(D.op(g, D.inv(h))) < 0) one = [g, h];
      }); });
      html.push('One-step test (g·h⁻¹ in S for all g, h in S): ' + (one ? 'no. ' + lab(one[0]) + ' · ' +
        lab(one[1]) + '⁻¹ = ' + lab(D.op(one[0], D.inv(one[1]))) + ' is not in S.' : 'yes.'));
      html.push('<strong>S is ' + (D.isSubgroup(S) ? '' : 'not ') + 'a subgroup.</strong>');
      html.push('Smallest subgroup containing S: {' + D.generate(S).map(lab).join(', ') + '}.');
      out.innerHTML = html.join('<br>');
    }
    function sync() {
      chips.forEach(function (c, x) {
        var on = S.indexOf(x) >= 0;
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
        c.className = on ? 'btn411' : 'btn411 ghost';
      });
      tbl.set({ highlight: S.slice() });
      paint();
      report();
    }
    sync();

    // 2. The Z2 x Z4 table, linked to its subgroup lattice (revealed on request).
    var P = A.product(A.Z(2), A.Z(4));
    P.labels = P.labels.map(function (_, k) { return Math.floor(k / 4) + '' + (k % 4); });
    var tableP = A.cayley('d05-table', { group: P, clickable: false, caption: 'ℤ₂ × ℤ₄, with (a, b) written ab' });
    small('d05-table');
    var holder = document.getElementById('d05-lattice');
    var reveal = A.h('button', { class: 'btn411', type: 'button', text: 'Show the subgroup lattice' });
    var latBox = A.h('div');
    holder.appendChild(reveal);
    holder.appendChild(latBox);
    reveal.addEventListener('click', function () {
      reveal.parentNode.removeChild(reveal);
      A.lattice(latBox, {
        group: P,
        onPick: function (H) { tableP.set({ highlight: H }); small('d05-table'); }
      });
    });
  })();
</script>
