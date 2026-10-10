---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 19: Cosets That Multiply"
day: 19
chapter_number: 10
chapter: "Normal Subgroups and Factor Groups"
day_title: "Cosets That Multiply"
blurb: "Treat each coset as one element and multiply cosets by multiplying representatives. That only works if the answer doesn't depend on which representatives you chose. Here is why it doesn't, and what the resulting group looks like."
reading: "Chapter 10, Day 2: the rest of Section 10.1, from the proof that G/N is a group through the order of G/N and the factor group examples"
---

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>The product doesn't care which representative you pick</h2>

  <p>Let \(N\) be a normal subgroup of \(G\). The cosets of \(N\) form a group \(G/N\) under \((aN)(bN) = abN\), but that rule needs checking. A coset \(aN\) has one name for each of its elements, so the product must not depend on the names. If \(aN = a'N\) and \(bN = b'N\), we need \(a'b'N = abN\). Judson calls this showing the operation is <em>well defined</em>, and it is the heart of his proof that \(G/N\) is a group. Walk it one step at a time.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">We have \(aN = a'N\). Why does \(a'\) lie in \(aN\), and what does that give you for \(a'\)?</div>
        <div class="sstep-body"><p>\(a' = a'e\) lies in \(a'N = aN\), so \(a' = an_1\) for some \(n_1 \in N\). In the same way, \(b' = bn_2\) for some \(n_2 \in N\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now \(a'b' = an_1bn_2\). To move \(n_1\) past \(b\), you need \(Nb\) written in terms of \(bN\). Which set equals \(Nb\)?</div>
        <div class="sstep-body"><p>Normality gives \(Nb = bN\). So \(n_1b \in bN\), which means \(n_1b = bn_3\) for some \(n_3 \in N\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Substitute \(n_1b = bn_3\) into \(a'b'\). Write \(a'b'\) as \(ab\) times an element \(m\) of \(N\).</div>
        <div class="sstep-body"><p>\(a'b' = a(n_1b)n_2 = abn_3n_2\). Since \(m = n_3n_2\) is in \(N\), \(a'b' = abm\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Why does \(a'b' = abm\) with \(m \in N\) give \(a'b'N = abN\)?</div>
        <div class="sstep-body"><p>Because \(mN = N\), we get \(a'b'N = (abm)N = ab(mN) = abN\). Whichever representatives you chose, the product lands in the same coset.</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>

  <p>Judson calls the rest of the group axioms easy. They follow from the corresponding facts in \(G\), once the product is well defined.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Every choice of representatives</h2>

  <p>Pick a subgroup \(N\) and two elements \(a\) and \(b\). The widget lists every choice of representatives for the cosets \(aN\) and \(bN\). Each coset has two elements here, so there are four pairs. For each pair, it multiplies the representatives and reports which coset the product lands in.</p>

  <p>Predict first: for \(N = \langle s\rangle\) and \(a = b = r\), will all four products land in the same coset? Check your answer against the readout. Then switch to \(N = \langle r^3\rangle\) and try \(a = s\), \(b = r\). What changes?</p>

  <div id="d19-reps"></div>

  <p>When every pair gives the same coset, the rule \((aN)(bN) = abN\) gives one answer, whichever names you used. When the pairs disagree, the rule gives no single answer, and the next block shows where the argument breaks.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Does the same trick work without normality?</h2>

  <p>Take \(H = \{e, s\}\) in \(D_6\). You saw yesterday that \(H\) is not normal. A classmate tries the proof above for \(H\), with the same steps and one change, to see whether coset products are well defined anyway. Here is their argument, for any subgroup \(H\) of \(G\).</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Suppose \(aH = a'H\) and \(bH = b'H\).</button>
      <button class="fline" type="button">Then \(a' = ah\) and \(b' = bk\) for some \(h, k \in H\).</button>
      <button class="fline" type="button">So \(a'b' = ahbk\).</button>
      <button class="fline" type="button">Since \(h\) is in \(H\), it commutes with \(b\), so \(ahbk = abhk\).</button>
      <button class="fline" type="button">Since \(hk \in H\), \(abhk \in abH\). Hence \(a'b'H = abH\).</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> This is the setup. Nothing has been assumed about \(H\) yet.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> Since \(a' \in aH\) and \(b' \in bH\), such \(h\) and \(k\) exist.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>Fine.</strong> Multiply the two equations out.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>This is the flaw.</strong> Nothing says \(hb = bh\). Normality would only give \(Hb = bH\), so \(hb = bh'\) for some \(h' \in H\), and the proof can carry \(h'\) along. Here \(H\) is not normal, and the claimed equality is false. Take \(a = e\), \(a' = s\) (so \(h = s\)), and \(b = b' = r\) (so \(k = e\)). Then \(a'b' = sr = r^5s\), while the line claims \(a'b' = abhk = rs\), and \(r^5s \ne rs\). The products really differ: \((eH)(rH) = rH = \{r, rs\}\), but \((sH)(rH) = (sr)H = \{r^5s, r^5\}\).</p></div>
    <div class="flaw-verdict" data-key="5"><p><strong>Fine as a deduction from line 4.</strong> The conclusion would follow if line 4 held, but line 4 is where the argument breaks.</p></div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>A factor group you can count</h2>

  <p>Take \(G = \mathbb Z_2 \times \mathbb Z_4\), with elements written \((a, b)\) and added coordinate by coordinate. Let \(N = \langle (0,2)\rangle = \{(0,0), (0,2)\}\). Before you look at the table, list the cosets of \(N\) yourself.</p>

  <p>Predict first: how many elements does \(G/N\) have, what is its identity, what is the order of \((0,1)N\), and what is \((0,1)N + (1,0)N\)? Then click elements of the table to check their orders and inverses. The headers are the cosets, so the table shows the group \(G/N\) directly.</p>

  <div id="d19-quotient-table"></div>

  <p>After you click a few entries, compare each order with your prediction.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>What the elements of a factor group are</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">What is the identity element of \(G/N\)?</p>
    <button class="mc-opt" data-key="a">The element \(e\) of \(G\).</button>
    <button class="mc-opt" data-key="b">The coset \(eN = N\).</button>
    <button class="mc-opt" data-key="c">The set \(\{e\}\).</button>
    <button class="mc-opt" data-key="d">The empty set.</button>
    <div class="mc-fb" data-key="a"><p>\(e\) is an element of \(G\), not of \(G/N\). The identity of \(G/N\) is the coset \(eN\), which is a set.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. \(eN = N\), and multiplying any coset by it gives that coset back: \(N(gN) = gN\).</p></div>
    <div class="mc-fb" data-key="c"><p>\(\{e\}\) is the identity only when \(N = \{e\}\). In general the identity coset is all of \(N\).</p></div>
    <div class="mc-fb" data-key="d"><p>Cosets are never empty. Each \(gN\) contains \(g\).</p></div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Let \(G = \mathbb Z_2 \times \mathbb Z_4\) and \(N = \langle (0,2)\rangle\). How many elements does \(G/N\) have?</p>
    <button class="mc-opt" data-key="a">2</button>
    <button class="mc-opt" data-key="b">8</button>
    <button class="mc-opt" data-key="c">4</button>
    <button class="mc-opt" data-key="d">16</button>
    <div class="mc-fb" data-key="a"><p>That's \(|N|\). The factor group counts cosets, not the elements of \(N\).</p></div>
    <div class="mc-fb" data-key="b"><p>That's \(|G|\). The cosets cut \(G\) into pieces, and the factor group counts the pieces.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. The cosets split the 8 elements of \(G\) into pieces of size 2, so there are \(8/2 = 4\) of them. That number is the index \([G:N]\), and it is the order of \(G/N\).</p></div>
    <div class="mc-fb" data-key="d"><p>There can't be 16 cosets. They partition the 8 elements of \(G\), and each has 2 of them, so there are \(8/2 = 4\).</p></div>
  </div>

  <details class="hint">
    <summary>Stuck on the count?</summary>
    <p>List the cosets \(gN\) one at a time. Start with \(N\) itself, then take \(g = (1,0)\), then \(g = (0,1)\). Each coset has 2 elements, and the cosets never overlap. How many do you get before every element of \(G\) is used?</p>
  </details>

  <div class="mc" data-answer="d">
    <p class="mc-q">What is an element of \(G/N\)?</p>
    <button class="mc-opt" data-key="a">An element of \(G\).</button>
    <button class="mc-opt" data-key="b">A subgroup of \(G\).</button>
    <button class="mc-opt" data-key="c">A number from 0 to \(|N|\).</button>
    <button class="mc-opt" data-key="d">A coset \(gN\).</button>
    <div class="mc-fb" data-key="a"><p>Not quite. Each element of \(G/N\) is a whole coset, a set of \(|N|\) elements of \(G\). Two different elements of \(G\) can name the same element of \(G/N\).</p></div>
    <div class="mc-fb" data-key="b"><p>Only the identity coset \(N\) is a subgroup. A coset \(gN\) with \(g \notin N\) doesn't contain \(e\), so it can't be one.</p></div>
    <div class="mc-fb" data-key="c"><p>No. The labels \(N\) and \(gN\) are sets, not numbers. The number of cosets is \([G:N]\), not \(|N|\).</p></div>
    <div class="mc-fb" data-key="d"><p>Right. Judson stresses this: the elements of a factor group are sets of elements of the original group. Here \((0,1)N = \{(0,1), (0,3)\}\).</p></div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Collapse the half-turn</h2>

  <p>Now \(G = D_6\) and \(N = \langle r^3\rangle = \{e, r^3\}\), the rotation through \(180^\circ\). It is the only subgroup on the menu. Predict first: how many elements does \(D_6/N\) have, and how many of them have order 1, order 2, and order 3?</p>

  <p>Also work out \((rN)(sN)\) and \((sN)(rN)\) by multiplying representatives: compare \(rs\) with \(sr\), and say which coset each one is in. Then press <em>Collapse the blocks</em>, and check the order colors and your two products against the table.</p>

  <div id="d19-quotient"></div>

  <p>The six elements of \(D_6/N\) are \(N\), \(rN\), \(r^2N\), \(sN\), \(rsN\), and \(r^2sN\). The readout says the group is nonabelian. Compare your two products with the table, and compare the order colors with your prediction. The order pattern matches \(S_3\). The factor group keeps some of the structure of \(D_6\) and drops the rest.</p>

  <p>The cosets menu below lists the left and right cosets of \(N\). The two columns name the same six sets, which is what normality asks for. Each set is one element of \(D_6/N\).</p>

  <div id="d19-cosets"></div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Same coset, different name</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">In \(\mathbb Z_2 \times \mathbb Z_4\) modulo \(N = \langle (0,2)\rangle\), which element names the same coset as \((1,1)N\)?</p>
    <button class="mc-opt" data-key="a">\((1,2)\)</button>
    <button class="mc-opt" data-key="b">\((0,1)\)</button>
    <button class="mc-opt" data-key="c">\((1,3)\)</button>
    <button class="mc-opt" data-key="d">\((0,0)\)</button>
    <div class="mc-fb" data-key="a"><p>\((1,2) - (1,1) = (0,1)\), which is not in \(N\). So \((1,2)N\) is a different coset.</p></div>
    <div class="mc-fb" data-key="b"><p>\((0,1) - (1,1) = (1,0)\), which is not in \(N\). Two elements name the same coset only when their difference lies in \(N\).</p></div>
    <div class="mc-fb" data-key="c"><p>Right. \((1,3) - (1,1) = (0,2)\), which is in \(N\). So \((1,3)N = (1,1)N\).</p></div>
    <div class="mc-fb" data-key="d"><p>\((0,0)N\) is the identity coset \(N\) itself, not \((1,1)N\).</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Since \((1,2)N = (1,0)N\), you may compute \((1,2)N + (0,1)N\) with either name. Which coset is the answer?</p>
    <button class="mc-opt" data-key="a">\(N\)</button>
    <button class="mc-opt" data-key="b">\((1,1)N\)</button>
    <button class="mc-opt" data-key="c">\((1,0)N\)</button>
    <button class="mc-opt" data-key="d">\((0,1)N\)</button>
    <div class="mc-fb" data-key="a"><p>\(N\) is the identity coset. But \((1,2) + (0,1) = (1,3)\), which is not in \(N\), so the sum isn't \(N\).</p></div>
    <div class="mc-fb" data-key="b"><p>Right. \((1,2) + (0,1) = (1,3)\), and \((1,3)N = (1,1)N\). Using the other name, \((1,0) + (0,1) = (1,1)\) gives the same coset.</p></div>
    <div class="mc-fb" data-key="c"><p>That is \((1,2)N\) itself. Adding \((0,1)\) moves to a different coset, because \((0,1)\) is not in \(N\).</p></div>
    <div class="mc-fb" data-key="d"><p>The first coordinate of \((1,2) + (0,1)\) is \(1\), and every element of \((0,1)N\) has first coordinate \(0\). So the answer can't be \((0,1)N\).</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The factor group \(D_6/\langle r^3\rangle\) keeps some of the structure of \(D_6\) and drops the rest. What does it keep, and what does it lose? Would a different normal subgroup lose different things?</li>
    <li>Judson's chain uses normality twice. This walk-through uses it once, in the step \(Nb = bN\). Suppose you only knew \(Nb = bN\) for the particular \(b\) you happened to be multiplying by. Would the proof work for every choice of representatives? What does your answer say about how the definition of normal is written?</li>
    <li>Every subgroup \(N\) has \([G:N]\) cosets, normal or not. Only normality makes the cosets into a group. Which part of the factor group's structure needs normality, and which part is just counting?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;

    // Explore 1: Z2 x Z4 modulo <(0,2)>, with clickable elements.
    var P = A.product(A.Z(2), A.Z(4));
    var N = P.generate([P.index('(0, 2)')]);
    var Q = P.quotient(N);
    Q.additive = true;
    A.cayley('d19-quotient-table', { group: Q, clickable: true, caption: 'Z2 × Z4 modulo N' });

    // Explore 2: D6 modulo its half-turn subgroup (the only menu choice).
    var D = A.D(6);
    var half = D.generate([D.index('r³')]);
    A.quotient('d19-quotient', { group: D, subgroups: [half] });
    A.cosets('d19-cosets', { group: D, subgroups: [half] });

    // Explore 1 (representatives): every pair of representatives for aN and bN.
    var rBox = document.getElementById('d19-reps');
    var choicesN = [D.generate([D.index('s')]), D.generate([D.index('r³')])];
    var selN = A.h('select', { 'aria-label': 'subgroup N' });
    choicesN.forEach(function (K, i) {
      selN.appendChild(A.h('option', { value: i, text: 'N = ' + D.describe(K) }));
    });
    function elementMenu(label) {
      var sel = A.h('select', { 'aria-label': label });
      D.elements().forEach(function (x) { sel.appendChild(A.h('option', { value: x, text: D.labels[x] })); });
      return sel;
    }
    var selA = elementMenu('a'), selB = elementMenu('b');
    selA.value = D.index('r');
    selB.value = D.index('r');
    var rOut = A.h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    rBox.appendChild(A.h('div', { class: 'ctl-row' }, [
      A.h('div', { class: 'ctl' }, [A.h('label', { text: 'Subgroup' }), selN]),
      A.h('div', { class: 'ctl' }, [A.h('label', { text: 'a' }), selA]),
      A.h('div', { class: 'ctl' }, [A.h('label', { text: 'b' }), selB])
    ]));
    rBox.appendChild(rOut);
    function representativeReport() {
      var K = choicesN[Number(selN.value)], a = Number(selA.value), b = Number(selB.value);
      var found = {}, pairs = 0;
      K.forEach(function (n1) {
        K.forEach(function (n2) {
          var c = D.leftCoset(D.op(D.op(a, n1), D.op(b, n2)), K);
          found[c.join(',')] = c;
          pairs++;
        });
      });
      var landed = Object.keys(found).map(function (k) { return found[k]; });
      rOut.innerHTML = 'The ' + pairs + ' choices of representatives give products in ' +
        (landed.length === 1 ? '<strong>one</strong> coset: ' : '<strong>' + landed.length + ' different</strong> cosets: ') +
        landed.map(function (c) { return A.setList(D, c); }).join(' and ') + '. ' +
        (landed.length === 1
          ? 'The product of these two cosets is well defined.'
          : 'The product depends on the representatives, so the rule gives no single answer.');
    }
    selN.addEventListener('change', representativeReport);
    selA.addEventListener('change', representativeReport);
    selB.addEventListener('change', representativeReport);
    rOut.innerHTML = 'Predict first, then choose N, a, and b to see the result.';
  })();
</script>
