---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 20: Three-Cycles Hold the Group Together"
day: 20
chapter_number: 10
chapter: "Normal Subgroups and Factor Groups"
day_title: "Three-Cycles Hold the Group Together"
blurb: "Judson's proof that the alternating group A_n is simple for n ≥ 5 turns on one fact: a normal subgroup that holds a single 3-cycle holds all of them. Three-cycles turn out to be the key pieces, and a count of conjugacy classes gives a shortcut for A_5."
reading: "Chapter 10, Day 3: Section 10.2, the simplicity of the alternating group A_n for n ≥ 5"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Two transpositions, two 3-cycles</h2>

  <p>Judson's section has three moves, and this page follows them. First, the generation lemma: the 3-cycles generate the alternating group \(A_n\) when \(n \ge 3\). Second, the one-cycle lemma: a normal subgroup that contains one 3-cycle is all of \(A_n\). Third, the case-analysis lemma: for \(n \ge 5\), every nontrivial normal subgroup contains a 3-cycle. Start with the first move.</p>

  <p>The alternating group \(A_n\) is the group of even permutations, and the generation lemma is about its generators. The proof only has to show that a product of two transpositions is a product of 3-cycles, and it uses identities such as \((1\,2)(3\,4) = (1\,3\,2)(1\,3\,4)\). Permutations multiply right to left, so \((1\,3\,2)(1\,3\,4)\) means: do \((1\,3\,4)\) first.</p>

  <p>Predict before you type. Follow each of \(1, 2, 3, 4\) through \((1\,3\,4)\) and then through \((1\,3\,2)\), and write the product in cycle notation. Then enter \(\sigma = (1\,3\,2)\) and \(\tau = (1\,3\,4)\) and compare.</p>

  <div id="d20-perm"></div>

  <p>Now try \((1\,2)(1\,3)\) and \((1\,2)(1\,4)\). Each one gives a single 3-cycle. Which 3-cycles are they?</p>

  <p>Notice the pattern in the readout. Each 3-cycle is even, and so is each product of two transpositions, so the identities never leave \(A_n\). That is why the 3-cycles are the right building blocks for \(A_n\).</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>One 3-cycle brings in all of them</h2>

  <p>The one-cycle lemma says: if \(N\) is a normal subgroup of \(A_n\), with \(n \ge 3\), and \(N\) contains a 3-cycle, then \(N = A_n\). The proof conjugates one 3-cycle into another, using a conjugating permutation that is always even, so normality applies. Name the entries of the 3-cycle in \(N\) so that it reads \((i, j, a)\), and walk the proof one step at a time. The whole argument is conjugation: normality lets you move an element around by even conjugators, and each move stays inside \(N\).</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Judson first shows that the 3-cycles \((i, j, k)\), with \(i\) and \(j\) fixed and \(k\) free, already generate \(A_n\). So what is enough to prove?</div>
        <div class="sstep-body"><p>It is enough to show that \(N\) contains \((i, j, k)\) for every \(k \notin \{i, j\}\). Then \(N\) contains a generating set of \(A_n\), so \(N = A_n\). The case \(k = a\) is the cycle we started with.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Let \(x = (i, j, a)^2\). Why is \(x\) in \(N\), and which 3-cycle is it?</div>
        <div class="sstep-body"><p>\(N\) is a subgroup containing \((i, j, a)\), so \(x \in N\). Squaring gives \(x = (i, j, a)(i, j, a) = (i, a, j)\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Fix \(k\) with \(k \notin \{i, j, a\}\), and let \(g = (i\,j)(a\,k)\). Is \(g\) in \(A_n\), and why does that matter?</div>
        <div class="sstep-body"><p>Yes. \(g\) is a product of two transpositions, so it is even. Normality of \(N\) in \(A_n\) says \(hNh^{-1} = N\) for every \(h \in A_n\), so \(gxg^{-1} \in N\). This is the only place normality is used.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Conjugating a cycle relabels its entries: \(gxg^{-1}\) is the cycle \((g(i), g(a), g(j))\). Compute it.</div>
        <div class="sstep-body"><p>\(g(i) = j\), \(g(a) = k\), and \(g(j) = i\). So \(gxg^{-1} = (j, k, i) = (i, j, k)\), and that 3-cycle lies in \(N\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Every \(k\) gives a 3-cycle \((i, j, k)\) in \(N\). What does the first step now say about \(N\)?</div>
        <div class="sstep-body"><p>The 3-cycles \((i, j, k)\) generate \(A_n\), and all of them lie in \(N\). Hence \(N = A_n\).</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>

  <p>Notice how little the proof needs. The generation lemma supplies the generating set, normality supplies the conjugation, and the even permutation \(g\) makes normality applicable. The case-analysis lemma is the harder half: it has to produce a 3-cycle from any nontrivial normal subgroup, not just from one that already holds a 3-cycle.</p>

  <p>For numbers, take \(i = 1\), \(j = 2\), \(a = 3\), and \(k = 4\). The conjugating permutation is \((1\,2)(3\,4)\), and it carries \((1\,3\,2)\) to \((1\,2\,4)\). Check that by following the entries through the relabeling.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Does the double-transposition case work for \(n = 4\)?</h2>

  <p>The case-analysis lemma says that for \(n \ge 5\), every nontrivial normal subgroup of \(A_n\) contains a 3-cycle. Judson's proof splits into five cases by cycle type. In one of them, \(N\) contains \(\rho = (a_1\,a_3)(a_2\,a_4)\), a product of two disjoint transpositions, and the argument conjugates \(\rho\) by a 3-cycle that uses a fifth symbol \(b\). A classmate runs that case with \(n = 4\). Here is their argument.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="1">
    <div class="flawlist">
      <button class="fline" type="button">Since \(n \ge 4\), we can choose \(b\) in \(\{1, \ldots, n\}\) with \(b \ne a_1, a_2, a_3, a_4\).</button>
      <button class="fline" type="button">Let \(\mu = (a_1\,a_3\,b)\). Since \(\mu\) is in \(A_n\) and \(N\) is normal, \(\mu^{-1}\rho\mu\) lies in \(N\), and so does \(\mu^{-1}\rho\mu\rho\).</button>
      <button class="fline" type="button">Multiplying out gives \(\mu^{-1}\rho\mu\rho = (a_1\,a_3\,b)\), a 3-cycle.</button>
      <button class="fline" type="button">So \(N\) contains a 3-cycle, and by the one-cycle lemma, \(N = A_n\).</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>This is the flaw.</strong> For \(n = 4\), the four symbols \(a_1, a_2, a_3, a_4\) are all of \(\{1, 2, 3, 4\}\), so there is no fifth symbol \(b\). This step needs \(n \ge 5\), and that is exactly where Judson's hypothesis is used.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine, once \(b\) exists.</strong> \(\mu\) is a 3-cycle, so it is even, and normality of \(N\) in \(A_n\) keeps \(\mu^{-1}\rho\mu\) inside \(N\). Then \(\mu^{-1}\rho\mu\rho\) is a product of two elements of \(N\).</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>Fine, given a fifth symbol.</strong> This is Judson's computation: when \(b\) is different from the four symbols, \(\mu^{-1}\rho\mu\rho = (a_1\,a_3\,b)\). Try it on five symbols if you want to see it happen.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine as a deduction.</strong> A 3-cycle in \(N\) gives \(N = A_n\) by the one-cycle lemma, so this line is right whenever the lines before it are.</p></div>
  </div>

  <p>Notice what the other cases of the case-analysis lemma look like. None of them needs a symbol beyond the ones already in the cycles they start with. This double-transposition case is the one place where the proof has to bring in a new symbol, and that is why that lemma assumes \(n \ge 5\).</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Conjugators and normality</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which even permutation conjugates \((1\,2\,3)\) to \((1\,3\,2)\)?</p>
    <button class="mc-opt" data-key="a">\((2\,3)\)</button>
    <button class="mc-opt" data-key="b">\((2\,3)(4\,5)\)</button>
    <button class="mc-opt" data-key="c">\((1\,2)(3\,4)\)</button>
    <button class="mc-opt" data-key="d">\((2\,4\,5)\)</button>
    <div class="mc-fb" data-key="a"><p>\((2\,3)\) does send \((1\,2\,3)\) to \((1\,3\,2)\), but it is odd, so it isn't in \(A_5\). Normality can't be applied with an odd conjugator.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. It is even, and conjugating relabels the entries: 1 stays 1, 2 becomes 3, and 3 becomes 2, so \((1\,2\,3)\) goes to \((1\,3\,2)\).</p></div>
    <div class="mc-fb" data-key="c"><p>This one is even, but it sends 1 to 2 and 2 to 1, so the image of \((1\,2\,3)\) is \((1\,4\,2)\), not \((1\,3\,2)\).</p></div>
    <div class="mc-fb" data-key="d"><p>This one is even, but it sends 2 to 4, so the image of \((1\,2\,3)\) is \((1\,4\,3)\), not \((1\,3\,2)\).</p></div>
  </div>

  <details class="hint">
    <summary>Stuck on the first question?</summary>
    <p>Write the image of each entry under the candidate permutation: where does it send 1, then 2, then 3? Then write the cycle \((1\,2\,3)\) with those images in its place.</p>
  </details>

  <div class="mc" data-answer="c">
    <p class="mc-q">Suppose \(N\) is a subgroup of \(A_n\), with \(n \ge 5\), that is not known to be normal, and \(N\) contains \((1\,2\,3)\). What can you conclude?</p>
    <button class="mc-opt" data-key="a">\(N = A_n\).</button>
    <button class="mc-opt" data-key="b">\(N\) contains every 3-cycle.</button>
    <button class="mc-opt" data-key="c">\(N\) contains the powers of \((1\,2\,3)\), and nothing more follows.</button>
    <button class="mc-opt" data-key="d">\(N\) has exactly three elements.</button>
    <div class="mc-fb" data-key="a"><p>Only normality forces that. Without it, a subgroup containing one 3-cycle need not be all of \(A_n\).</p></div>
    <div class="mc-fb" data-key="b"><p>That needs normality. Without it, nothing makes \(N\) contain the conjugates of \((1\,2\,3)\).</p></div>
    <div class="mc-fb" data-key="c"><p>Right. A subgroup must contain the powers of each of its elements, so \((1\,3\,2)\) is in \(N\) too. Beyond that nothing is forced, and the one-cycle lemma needs normality to reach the other 3-cycles.</p></div>
    <div class="mc-fb" data-key="d"><p>Not necessarily. \(N\) must contain the powers of \((1\,2\,3)\), but it can be larger.</p></div>
  </div>

  <p>Both questions rest on the same two facts from the proof. Conjugators have to be even, and normality is what turns one 3-cycle into all of them.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>A5 by counting</h2>

  <p>Judson's proof covers every \(A_n\) with \(n \ge 5\). For \(A_5\) alone there is a shorter route by counting. A normal subgroup \(N\) satisfies \(hNh^{-1} = N\) for every \(h\) in the group. So if \(x \in N\), every conjugate of \(x\) is in \(N\), which means \(N\) is a union of conjugacy classes. It contains \(e\), so the identity class is always part of it. Its order is the total size of the classes it contains, and by Lagrange's theorem that total must divide \(60\).</p>

  <p>The menu lists the five conjugacy classes of \(A_5\) and their sizes. The 24 five-cycles split into two classes of 12, not one class of 24. Predict first: of the 16 unions of classes that include the identity class, how many have a total that divides \(60\)?</p>

  <div id="d20-classes"></div>

  <p>Tick a few classes and watch the total. Then press the button to see all 16 totals at once.</p>

  <details class="hint">
    <summary>Stuck on the count?</summary>
    <p>Start with the identity class (1 element), add the double transpositions (15), and then see what each of the other classes adds. A union has to be built from whole classes, so you can't add part of the 5-cycles.</p>
  </details>

  <p>Notice what the count uses. Each class is a whole block, and a union either takes a block or leaves it out. A normal subgroup has to be a union of blocks, and that is the only fact the count needs, together with Lagrange's theorem.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>The smallest normal subgroup</h2>

  <div class="mc" data-answer="d">
    <p class="mc-q">What is the smallest order a nontrivial normal subgroup of \(A_5\) can have?</p>
    <button class="mc-opt" data-key="a">12</button>
    <button class="mc-opt" data-key="b">16</button>
    <button class="mc-opt" data-key="c">30</button>
    <button class="mc-opt" data-key="d">60</button>
    <div class="mc-fb" data-key="a"><p>12 is the size of one class of 5-cycles. But a normal subgroup must contain the identity too, so the smallest candidate with that class has order \(1 + 12 = 13\), which doesn't divide 60.</p></div>
    <div class="mc-fb" data-key="b"><p>\(16 = 1 + 15\) is the identity plus the double transpositions. But 16 doesn't divide 60, so no subgroup of \(A_5\) has that order.</p></div>
    <div class="mc-fb" data-key="c"><p>30 divides 60, but no union of classes containing the identity has total 30. The other class sizes are 12, 12, 15, and 20, and none of their sums is 29.</p></div>
    <div class="mc-fb" data-key="d"><p>Right. Every union of classes that contains the identity and has order dividing 60 is either \(\{e\}\) or all of \(A_5\). So \(A_5\) has no nontrivial proper normal subgroup, and it is simple.</p></div>
  </div>

  <p>The count is a different route from Judson's, with a different reach. It settles \(A_5\) by arithmetic. Judson's argument works for every \(A_n\) with \(n \ge 5\), at the cost of a case analysis.</p>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The counting argument settles \(A_5\) and nothing else. What would you need to know about \(A_6\) before a counting argument could work there? Why does Judson's case analysis avoid that work?</li>
    <li>The one-cycle lemma picks the names \(i\) and \(j\) after you already have a 3-cycle in \(N\). Why is that safe, given that the generation claim works for any fixed pair?</li>
    <li>3-cycles are the smallest nontrivial even permutations. Why do you think the reading starts from them, rather than from double transpositions or 5-cycles?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;

    // Explore 1: products of permutations, right to left.
    A.perm('d20-perm', { n: 5, sigma: '(1 4 5)', tau: '(2 3)' });

    // Explore 2: conjugacy classes of A5 and the unions of classes that contain the identity.
    var G = A.A(5);
    var classes = G.conjugacyClasses();
    var eClass = classes.findIndex(function (c) { return c.indexOf(G.e) >= 0; });
    var box = document.getElementById('d20-classes');
    var rows = [];
    classes.forEach(function (c, i) {
      var cb = A.h('input', { type: 'checkbox', 'aria-label': 'include the class of ' + G.labels[c[0]] });
      if (i === eClass) { cb.checked = true; cb.disabled = true; }
      rows.push({ cb: cb, size: c.length });
      box.appendChild(A.h('label', { class: 'a308-inline' }, [cb,
        ' class of ' + G.labels[c[0]] + ': ' + c.length + (c.length === 1 ? ' element' : ' elements')]));
    });
    var tot = A.h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    var showAll = A.h('button', { class: 'btn411', type: 'button', text: 'Show all 16 unions' });
    var allOut = A.h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    box.appendChild(tot);
    box.appendChild(showAll);
    box.appendChild(allOut);

    function tally() {
      var size = rows.reduce(function (s, r) { return s + (r.cb.checked ? r.size : 0); }, 0);
      tot.innerHTML = 'Your union has <strong>' + size + '</strong> elements. ' +
        (60 % size === 0
          ? 'That divides 60, so Lagrange’s theorem allows it. Whether it is a subgroup is a separate question.'
          : 'That does not divide 60, so it cannot be a subgroup, and so it cannot be a normal subgroup.');
    }
    rows.forEach(function (r) { r.cb.addEventListener('change', tally); });

    showAll.addEventListener('click', function () {
      var base = rows[eClass].size;
      var rest = rows.filter(function (r, i) { return i !== eClass; });
      var sizes = [];
      for (var mask = 0; mask < (1 << rest.length); mask++) {
        var t = base;
        rest.forEach(function (r, k) { if (mask & (1 << k)) t += r.size; });
        sizes.push(t);
      }
      sizes.sort(function (p, q) { return p - q; });
      var divisors = sizes.filter(function (t) { return 60 % t === 0; });
      allOut.innerHTML = 'The 16 totals are ' + sizes.join(', ') + '. Only ' + divisors.join(' and ') +
        ' divide 60.';
    });
    tally();
  })();
</script>
