---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 18: When Left and Right Cosets Agree"
day: 18
chapter_number: 10
chapter: "Normal Subgroups and Factor Groups"
day_title: "When Left and Right Cosets Agree"
blurb: "Left cosets and right cosets of a subgroup usually come apart. For some subgroups they never do, and those are the subgroups whose cosets you can multiply. Let's find out which ones, and why the answer matters."
reading: "Chapter 10, Day 1: Section 10.1, from the definition of a normal subgroup through the three equivalent conditions and the first look at factor groups"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Left cosets against right cosets</h2>

  <p>Take a subgroup \(H\) of a group \(G\). The left coset of \(g\) is \(gH\), and the right coset is \(Hg\). Judson opens the chapter with the observation that the two need not match: \(gH = Hg\) can fail for some \(g\). Here \(G = D_6\), the symmetries of a regular hexagon. Write \(r\) for a turn through \(60^\circ\) and \(s\) for a flip, so \(srs = r^{-1}\).</p>

  <p>The menu opens on \(H = \langle s\rangle = \{e, s\}\). Before you look at the picture, write out the left cosets and the right cosets of this subgroup by hand. Then compare.</p>

  <div id="d18-cosets"></div>

  <p>Switch to the other two subgroups and predict, for each, whether the left partition and the right partition will match. The group \(D_6\) stays the same. Only the subgroup changes.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Conjugate the subgroup</h2>

  <p>Judson calls a subgroup \(H\) <em>normal</em> when \(gH = Hg\) for every \(g \in G\). The key equivalence in the section gives a test that is often quicker to run: \(H\) is normal exactly when \(gHg^{-1} = H\) for every \(g\). You'll prove that equivalence in the next block.</p>

  <p>Predict first: for \(H = \langle s\rangle\), how many of the twelve elements \(g\) of \(D_6\) satisfy \(gHg^{-1} = H\)? Pick a few \(g\) and compute \(gHg^{-1}\) by hand. Then use the menu to test them.</p>

  <div id="d18-conj"></div>

  <p>Then try \(\langle r^3\rangle\) and \(\langle r^3, s\rangle\). Only one of the three subgroups on the menu passes the test for every \(g\).</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Three conditions that say one thing</h2>

  <p>For a subgroup \(N\) of \(G\), Judson's theorem says these three statements are equivalent:</p>
  <ul>
    <li>(1) \(gN = Ng\) for every \(g \in G\);</li>
    <li>(2) \(gNg^{-1} \subseteq N\) for every \(g \in G\);</li>
    <li>(3) \(gNg^{-1} = N\) for every \(g \in G\).</li>
  </ul>

  <p>Statement (1) is the definition. The proof goes \((1) \Rightarrow (2) \Rightarrow (3) \Rightarrow (1)\). Commit to each step before you reveal it.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Assume (1). Take \(g \in G\) and \(n \in N\). The element \(gn\) lies in \(gN\). Given (1), which coset is \(gN\) equal to, and what does that say about \(gn\)?</div>
        <div class="sstep-body"><p>Given (1), \(gN = Ng\), so \(gn \in Ng\). That means \(gn = n'g\) for some \(n' \in N\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Solve \(gn = n'g\) for \(gng^{-1}\). What does that say about \(gNg^{-1}\)?</div>
        <div class="sstep-body"><p>\(gng^{-1} = n' \in N\). Since \(n\) was an arbitrary element of \(N\), \(gNg^{-1} \subseteq N\). That is (2).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">For (3) we also need \(N \subseteq gNg^{-1}\). Apply the inclusion from the last step to \(g^{-1}\) and to \(n\). What element of \(N\) do you get?</div>
        <div class="sstep-body"><p>Applying (2) to \(g^{-1}\) gives \(g^{-1}ng \in N\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Write \(n\) as a conjugate of \(g^{-1}ng\). Which set does \(n\) lie in?</div>
        <div class="sstep-body"><p>\(n = g\,(g^{-1}ng)\,g^{-1}\), which lies in \(gNg^{-1}\). So \(N \subseteq gNg^{-1}\). With (2), \(gNg^{-1} = N\). That is (3).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now assume (3). Take \(n \in N\). Which element \(n'\) of \(N\) satisfies \(gn = n'g\)?</div>
        <div class="sstep-body"><p>By (3), \(n' = gng^{-1}\) lies in \(gNg^{-1} = N\). Then \(gn = n'g\), so \(gN \subseteq Ng\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">The other inclusion, \(Ng \subseteq gN\), uses the same idea with \(g^{-1}\). Try it: write \(ng\) as \(g\) times something in \(N\).</div>
        <div class="sstep-body"><p>\(ng = g\,(g^{-1}ng)\), and \(g^{-1}ng \in N\) by (3) applied to \(g^{-1}\). So \(Ng \subseteq gN\), hence \(gN = Ng\). That is (1).</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Normal, right cosets, and abelian groups</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Which statement is equivalent to \(N\) being normal in \(G\)?</p>
    <button class="mc-opt" data-key="a">\(N\) is normal exactly when \(N\) is abelian.</button>
    <button class="mc-opt" data-key="b">\(gN = Ng\) holds for one particular \(g\) in \(G\).</button>
    <button class="mc-opt" data-key="c">\(gNg^{-1} \subseteq N\) holds for every \(g\) in \(G\).</button>
    <button class="mc-opt" data-key="d">\(gN \subseteq N\) holds for every \(g\) in \(G\).</button>
    <div class="mc-fb" data-key="a"><p>Not so. Every group is normal in itself, and \(D_6\) is not abelian. Abelian is not required.</p></div>
    <div class="mc-fb" data-key="b"><p>One \(g\) is not enough. Take \(g = e\) and the equation always holds. For \(H = \langle s\rangle\) it fails at \(g = r\): \(rH = \{r, rs\}\) but \(Hr = \{r, r^5s\}\). The definition needs every \(g\).</p></div>
    <div class="mc-fb" data-key="c"><p>Right. This is condition (2). It says that conjugating \(N\) by any element of \(G\) keeps it inside \(N\), and the theorem shows that this is the same as \(gN = Ng\) for every \(g\).</p></div>
    <div class="mc-fb" data-key="d"><p>This one forces \(N = G\). Since \(g = ge\) lies in \(gN\), the inclusion \(gN \subseteq N\) puts every \(g\) inside \(N\).</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Let \(H = \{e, s\}\) in \(D_6\). Which set is the right coset \(Hr\)?</p>
    <button class="mc-opt" data-key="a">\(\{r,\ rs\}\)</button>
    <button class="mc-opt" data-key="b">\(\{r,\ r^5s\}\)</button>
    <button class="mc-opt" data-key="c">\(\{r,\ s\}\)</button>
    <button class="mc-opt" data-key="d">\(\{e,\ r\}\)</button>
    <div class="mc-fb" data-key="a"><p>That is the left coset \(rH = \{re, rs\}\). The right coset multiplies on the other side: \(Hr = \{er, sr\}\).</p></div>
    <div class="mc-fb" data-key="b"><p>Right. From \(srs = r^{-1}\) we get \(sr = r^{-1}s = r^5s\). So \(Hr = \{r, r^5s\}\).</p></div>
    <div class="mc-fb" data-key="c"><p>\(Hr\) always contains \(er = r\), and its other element is \(sr\), not \(s\). Since \(sr \ne s\), this set is wrong.</p></div>
    <div class="mc-fb" data-key="d"><p>\(e\) is not in \(Hr\). That would need \(r\) to lie in \(H\), and it doesn't.</p></div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Let \(G\) be abelian and \(H\) a subgroup of \(G\). Which statement is true?</p>
    <button class="mc-opt" data-key="a">\(H\) is normal, since \(gh = hg\) for all \(g \in G\) and \(h \in H\).</button>
    <button class="mc-opt" data-key="b">\(H\) need not be normal, since left and right cosets can differ.</button>
    <button class="mc-opt" data-key="c">\(H\) is normal only when \(H\) is cyclic.</button>
    <button class="mc-opt" data-key="d">\(H\) is normal only when \(G\) is finite.</button>
    <div class="mc-fb" data-key="a"><p>Right. Commuting makes \(gH\) and \(Hg\) the same set, so nothing more is needed.</p></div>
    <div class="mc-fb" data-key="b"><p>Left and right cosets can differ in a nonabelian group. In an abelian group \(gh = hg\) for every pair, so they can't.</p></div>
    <div class="mc-fb" data-key="c"><p>Cyclicity never comes up. The commuting argument works for every subgroup of an abelian group.</p></div>
    <div class="mc-fb" data-key="d"><p>Finiteness never comes up either. The argument uses only that the elements commute.</p></div>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>One coset check is not enough</h2>

  <p>A classmate argues that \(H = \{e, s\}\) is a normal subgroup of \(D_6\). Here is the argument.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Normal means \(gH = Hg\) for every \(g \in D_6\).</button>
      <button class="fline" type="button">Take \(g = e\): \(eH = H = He\), so the condition holds.</button>
      <button class="fline" type="button">Take \(g = s\): \(sH = \{s, e\} = H\) and \(Hs = \{s, e\} = H\), since \(s \in H\). It holds again.</button>
      <button class="fline" type="button">Those are the only \(g\) that matter, since \(H\) has just two elements.</button>
      <button class="fline" type="button">So \(H\) is normal in \(D_6\). \(\blacksquare\)</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> That is the definition. It has to hold for every \(g\).</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> \(eH\) and \(He\) are both \(H\), so this case holds.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>Fine.</strong> Since \(s\) is in \(H\), both products give \(H\). Both checks are correct.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>This is the flaw.</strong> The size of \(H\) doesn't limit which \(g\) matter. The condition has to hold for all twelve elements. Take \(g = r\): \(rH = \{r, rs\}\), but \(Hr = \{r, r^5s\}\). The two sets differ, so \(H\) is not normal.</p></div>
    <div class="flaw-verdict" data-key="5"><p><strong>Fine as a deduction from line 4.</strong> The conclusion follows from line 4, and line 4 is where the argument breaks.</p></div>
  </div>

  <p>Notice that the failure needed only one bad \(g\). A condition stated for every \(g\) can't be confirmed by checking a few of them, but it can be refuted by checking one.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Multiply cosets, or don't</h2>

  <p>When \(N\) is normal, its cosets form a group \(G/N\) under \((aN)(bN) = abN\). Judson proves the group axioms in the next reading. Today, see what the rule does. Each block of the big table holds the products of one row coset with one column coset, and the color of a cell shows which coset that product lands in.</p>

  <p>Predict first. The menu opens on \(N = \langle s\rangle\). Find a block in the table whose cells don't all have the same color. What does that tell you about multiplying those two cosets?</p>

  <div id="d18-quotient"></div>

  <p>Now choose \(N = \langle r^3\rangle\) and press <em>Collapse the blocks</em>. Every block is a single color, and each block becomes one entry of \(D_6/\langle r^3\rangle\). That group has six elements, and tomorrow we'll look at it closely.</p>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Judson's definition checks \(gN = Ng\) for every \(g\). Why would a definition demand every \(g\) when a proof might only use a few? Think about what a shorter test would have to promise.</li>
    <li>In the cosets menu, one subgroup has matching left and right partitions. Describe what conjugating it does, without using the word "normal." (Hint: compare \(gHg^{-1}\) with \(H\).)</li>
    <li>Could a different choice of representatives repair the mixed blocks? Explain why or why not, in terms of the product \((aN)(bN)\).</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;
    var G = A.D(6);
    var L = function (x) { return G.index(x); };
    var s = G.generate([L('s')]);
    var r3 = G.generate([L('r³')]);
    var r3s = G.generate([L('r³'), L('s')]);

    // Explore 1 and Explore 3 use the shared widgets.
    A.cosets('d18-cosets', { group: G, subgroups: [s, r3s, r3] });
    A.quotient('d18-quotient', { group: G, subgroups: [s, r3] });

    // Explore 2: conjugate a subgroup by g, and test every g.
    var choices = [s, r3s, r3];
    var box = document.getElementById('d18-conj');
    function conj(g, K) {
      return K.map(function (h) { return G.op(G.op(g, h), G.inv(g)); })
              .sort(function (p, q) { return p - q; });
    }
    function same(X, Y) { return X.join(',') === Y.join(','); }

    var selH = A.h('select', { 'aria-label': 'subgroup H' });
    choices.forEach(function (K, i) {
      selH.appendChild(A.h('option', { value: i, text: 'H = ' + G.describe(K) }));
    });
    var selG = A.h('select', { 'aria-label': 'element g' });
    G.elements().forEach(function (x) {
      selG.appendChild(A.h('option', { value: x, text: 'g = ' + G.labels[x] }));
    });
    var test = A.h('button', { class: 'btn411', type: 'button', text: 'Test every g' });
    var out = A.h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    box.appendChild(A.h('div', { class: 'ctl-row' }, [
      A.h('div', { class: 'ctl' }, [A.h('label', { text: 'Subgroup' }), selH]),
      A.h('div', { class: 'ctl' }, [A.h('label', { text: 'Element' }), selG]),
      test
    ]));
    box.appendChild(out);

    function showOne() {
      var K = choices[Number(selH.value)], g = Number(selG.value), c = conj(g, K);
      out.innerHTML = '<strong>g = ' + G.labels[g] + '</strong>: gHg⁻¹ = ' + A.setList(G, c) +
        (same(c, K) ? ', which is H.' : ', which is not H.');
    }
    function testAll() {
      var K = choices[Number(selH.value)];
      var bad = G.elements().filter(function (g) { return !same(conj(g, K), K); });
      out.innerHTML = bad.length === 0
        ? '<strong>' + G.describe(K) + ' is normal.</strong> gHg⁻¹ = H for all 12 values of g.'
        : '<strong>' + G.describe(K) + ' is not normal.</strong> gHg⁻¹ ≠ H for ' + bad.length +
          ' of the 12 values of g. The first is g = ' + G.labels[bad[0]] + ', where gHg⁻¹ = ' +
          A.setList(G, conj(bad[0], K)) + '.';
    }
    selH.addEventListener('change', showOne);
    selG.addEventListener('change', showOne);
    test.addEventListener('click', testAll);
    showOne();
  })();
</script>
