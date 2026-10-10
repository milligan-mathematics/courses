---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 23: Quotients Inside Quotients"
day: 23
chapter_number: 11
chapter: "Homomorphisms"
day_title: "Quotients Inside Quotients"
blurb: "Subgroups that contain a normal subgroup N come back inside the quotient G/N, and dividing in two stages gives the same answer as dividing once. The Second and Third Isomorphism Theorems say how, and the integers mod 12 are small enough to check every case."
reading: "Chapter 11, Day 3: the rest of Section 11.2, the Second Isomorphism Theorem, the Correspondence Theorem, and the Third Isomorphism Theorem"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Two ways to divide</h2>

  <p>The Second Isomorphism Theorem starts with a subgroup \(H\) and a normal subgroup \(N\) of the same group. It makes
    three claims. The set \(HN = \{hn : h \in H,\ n \in N\}\) is a subgroup. The set \(H \cap N\) is normal in \(H\).
    And \(H/(H \cap N) \cong HN/N\). Judson's proof sends each \(h\) to \(hN\) and reads the answer off the First
    Isomorphism Theorem.</p>

  <p>Here it is in \(\mathbb{Z}_{12}\), with \(H = \{0, 2, 4, 6, 8, 10\}\) and \(N = \{0, 3, 6, 9\}\). (The letters are
    for this explore only.) Since \(\mathbb{Z}_{12}\) is abelian, \(N\) is normal.</p>

  <p>Predict first. What is \(HN\)? What is \(H \cap N\)? How many cosets does \(H \cap N\) have inside \(H\), and how
    many cosets does \(N\) have inside \(HN\)? Then guess which coset on the right goes with each coset on the left.</p>

  <div class="a308-coset-grid">
    <div class="a308-coset-col" id="d23-left"><h4>Cosets of \(H \cap N\) inside \(H\)</h4></div>
    <div class="a308-coset-col" id="d23-right"><h4>Cosets of \(N\) inside \(HN\)</h4></div>
  </div>

  <div class="ctl-row"><button class="btn411" id="d23-pair" type="button">Show the pairing</button></div>
  <div class="readout a308-readout" id="d23-pair-out" aria-live="polite"></div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Subgroups that contain \(N\)</h2>

  <p>The Correspondence Theorem runs in the other direction. Let \(N\) be normal in \(G\). Then \(H \mapsto H/N\) is a
    one-to-one correspondence between the subgroups \(H\) of \(G\) that contain \(N\) and the subgroups of \(G/N\).</p>

  <p>Take \(G = \mathbb{Z}_{12}\) and \(N = \{0, 6\}\). The lattice shows all six subgroups of \(\mathbb{Z}_{12}\).
    Click one. The readout says whether it contains \(N\) and, if it does, what \(H/N\) looks like.</p>

  <p>Predict first. How many of the six subgroups contain \(N\)? How many subgroups does \(\mathbb{Z}_{12}/N\) have?</p>

  <div id="d23-lattice"></div>
  <div class="readout a308-readout" id="d23-corr-out" aria-live="polite"></div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Divide in two stages</h2>

  <p>The Third Isomorphism Theorem comes out of the same proof. If \(N \subseteq H\) are both normal in \(G\), then
    \(G/H \cong (G/N)/(H/N)\). Judson's example is \(\mathbb{Z}/m\mathbb{Z} \cong (\mathbb{Z}/mn\mathbb{Z})/(m\mathbb{Z}/mn\mathbb{Z})\),
    which is this statement with \(G = \mathbb{Z}\).</p>

  <p>Take \(G = \mathbb{Z}_{12}\), \(N = \{0, 6\}\), and \(H = \{0, 3, 6, 9\}\). (In this explore \(N\) and \(H\) are
    these two sets.) \(G/N\) has six elements and \(H/N\) has two. Predict how many elements \((G/N)/(H/N)\) should have.
    Then press the button in the widget to collapse \(\mathbb{Z}_{12}\) by \(H\), and compare the result with your
    prediction.</p>

  <div id="d23-quot"></div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Second, correspondence, and third</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">In \(\mathbb{Z}_{12}\), let \(H = \{0, 2, 4, 6, 8, 10\}\) and \(N = \{0, 3, 6, 9\}\). What is \(H/(H \cap N)\)?</p>
    <button class="mc-opt" data-key="a">It has order \(6\), the same as \(H\).</button>
    <button class="mc-opt" data-key="b">It has order \(3\).</button>
    <button class="mc-opt" data-key="c">It has order \(2\), the same as \(H \cap N\).</button>
    <button class="mc-opt" data-key="d">It has order \(4\), the same as \(N\).</button>

    <div class="mc-fb" data-key="a"><p>Dividing by \(H \cap N\) shrinks \(H\). The cosets of \(\{0, 6\}\) inside \(H\) are
      \(\{0, 6\}\), \(\{2, 8\}\), and \(\{4, 10\}\), so there are three.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. \(H \cap N = \{0, 6\}\), so \(H/(H \cap N)\) has \(6 / 2 = 3\) elements. Its
      partner \(HN/N\) also has three, since \(HN = \mathbb{Z}_{12}\) and \(|N| = 4\) gives \(12 / 4 = 3\).</p></div>
    <div class="mc-fb" data-key="c"><p>\(\{0, 6\}\) is the subgroup you divide by. It isn't the quotient, and the quotient is
      built from the cosets of it inside \(H\).</p></div>
    <div class="mc-fb" data-key="d"><p>\(N\) is a different subgroup. The quotient \(H/(H \cap N)\) is about \(H\), which has six
      elements.</p></div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">How many subgroups of \(\mathbb{Z}_{12}\) contain \(\{0, 6\}\)?</p>
    <button class="mc-opt" data-key="a">Two</button>
    <button class="mc-opt" data-key="b">Three</button>
    <button class="mc-opt" data-key="c">Four</button>
    <button class="mc-opt" data-key="d">Six</button>

    <div class="mc-fb" data-key="a"><p>Two would be \(\{0, 6\}\) and \(\mathbb{Z}_{12}\) alone. The subgroups \(\langle 3 \rangle = \{0, 3, 6, 9\}\)
      and \(\langle 2 \rangle\) also contain \(6\).</p></div>
    <div class="mc-fb" data-key="b"><p>You're one short. Check \(\{0, 6\}\), \(\langle 3 \rangle\), \(\langle 2 \rangle\), and
      \(\mathbb{Z}_{12}\). All four contain \(6\).</p></div>
    <div class="mc-fb" data-key="c"><p>Right. Those four correspond to the four subgroups of \(\mathbb{Z}_{12}/\{0, 6\}\),
      which have orders \(1\), \(2\), \(3\), and \(6\). The subgroup \(\{0\}\) and the subgroup \(\langle 4 \rangle = \{0, 4, 8\}\)
      don't contain \(6\), so they're not on the list.</p></div>
    <div class="mc-fb" data-key="d"><p>Not all six. The trivial subgroup \(\{0\}\) and \(\langle 4 \rangle = \{0, 4, 8\}\)
      don't contain \(6\).</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Still with \(N = \{0, 6\}\) and \(H = \{0, 3, 6, 9\}\): \((\mathbb{Z}_{12}/N)/(H/N)\) is isomorphic to:</p>
    <button class="mc-opt" data-key="a">\(\mathbb{Z}_2\)</button>
    <button class="mc-opt" data-key="b">\(\mathbb{Z}_3\)</button>
    <button class="mc-opt" data-key="c">\(\mathbb{Z}_4\)</button>
    <button class="mc-opt" data-key="d">\(\mathbb{Z}_6\)</button>

    <div class="mc-fb" data-key="a"><p>\(\mathbb{Z}_2\) is \(H/N\) itself, the piece you divided by. The answer is a quotient of
      \(G/N\), not the piece you divided by.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. By the Third Isomorphism Theorem this is \(\mathbb{Z}_{12}/H\), which has
      \(12 / 4 = 3\) elements and is cyclic.</p></div>
    <div class="mc-fb" data-key="c"><p>\(\mathbb{Z}_4\) is \(H\) itself, the subgroup \(\{0, 3, 6, 9\}\). The answer is a quotient,
      and it is smaller than \(H\).</p></div>
    <div class="mc-fb" data-key="d"><p>\(\mathbb{Z}_6\) is \(G/N\), the first quotient. Dividing it again by a subgroup of
      order \(2\) leaves three elements, not six.</p></div>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Is \(HN\) always a subgroup?</h2>

  <p>A classmate claims that for any subgroups \(H\) and \(N\) of a group \(G\), the set \(HN\) is a subgroup. Here is
    their argument.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="2">
    <div class="flawlist">
      <button class="fline" type="button">Take two elements \(h_1 n_1\) and \(h_2 n_2\) of \(HN\).</button>
      <button class="fline" type="button">Their product is \((h_1 n_1)(h_2 n_2) = (h_1 h_2)(n_1 n_2)\), by associativity.</button>
      <button class="fline" type="button">Since \(h_1 h_2 \in H\) and \(n_1 n_2 \in N\), the product lies in \(HN\).</button>
      <button class="fline" type="button">So \(HN\) is closed under products. A nonempty finite set closed under products is a subgroup, so \(HN\) is a subgroup.</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> These are the typical elements of \(HN\).</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>This is the flaw.</strong> Associativity lets you regroup a product,
      but the step above moves \(n_1\) past \(h_2\), and that isn't a regrouping. The correct rewriting is
      \((h_1 n_1)(h_2 n_2) = h_1 h_2 \,(h_2^{-1} n_1 h_2)\, n_2\), and the bracket lies in \(N\) only because \(N\) is
      normal. Counterexample in \(D_3\), with Judson's names: let \(H = \{\mathrm{id}, \mu_1\}\) and
      \(N = \{\mathrm{id}, \mu_2\}\). Then \(HN = \{\mathrm{id}, \mu_1, \mu_2, \mu_1\mu_2\}\), and \(\mu_1\mu_2 = \rho_1\).
      But \(\mu_2\mu_1 = \rho_2\) is not in \(HN\), so \(HN\) is not closed under products.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>Fine as an inference from line 2.</strong> If line 2 held, the
      product would be in \(HN\). Line 2 is the step that fails.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine as a fact about finite groups.</strong> A nonempty set closed under
      products is a subgroup when the group is finite. But the closure in line 3 is inherited from line 2, so the conclusion
      is not established here.</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>The set-up for the Second Isomorphism Theorem</h2>

  <p>Judson's proof starts with this set-up. Let \(H\) be any subgroup of \(G\) and \(N\) a normal subgroup. Two things
    have to be checked before the map \(h \mapsto hN\) can be used.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Take \(h \in H\) and \(n \in N\). Why is \(h^{-1} n h\) in \(N\)?</div>
        <div class="sstep-body"><p>Normality says \(gNg^{-1} \subseteq N\) for every \(g \in G\). Take \(g = h^{-1}\). Then
          \(h^{-1} n h = h^{-1} n (h^{-1})^{-1}\) is in \(N\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Why is \(HN\) closed under products? Take \(h_1 n_1\) and \(h_2 n_2\) in \(HN\), and use
          step 1 with \(h = h_2\) and \(n = n_1\).</div>
        <div class="sstep-body"><p>\((h_1 n_1)(h_2 n_2) = h_1 h_2 \,(h_2^{-1} n_1 h_2)\, n_2\). The middle factor
          \(h_2^{-1} n_1 h_2\) is in \(N\) by step 1, and \(h_1 h_2\) is in \(H\). So the product is \(h_1 h_2\) times an element
          of \(N\), which is an element of \(HN\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Why is the inverse of \(hn\) in \(HN\)?</div>
        <div class="sstep-body"><p>\((hn)^{-1} = n^{-1}h^{-1} = h^{-1}\,(h n^{-1} h^{-1})\). The bracket is in \(N\) by
          normality, and \(h^{-1} \in H\). So \((hn)^{-1} \in HN\). Since \(e = ee\) is in \(HN\) too, \(HN\) is a subgroup.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Why is \(H \cap N\) normal in \(H\)? Take \(h \in H\) and \(x \in H \cap N\).</div>
        <div class="sstep-body"><p>\(h^{-1} x h\) is in \(H\), because \(H\) is a subgroup. It is in \(N\), because \(N\) is
          normal in \(G\). So \(h^{-1}(H \cap N)h \subseteq H \cap N\), and \(H \cap N\) is normal in \(H\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">What does this set-up buy you for the map \(h \mapsto hN\)?</div>
        <div class="sstep-body"><p>The image of \(H\) under \(h \mapsto hN\) is \(HN/N\), which is a group because \(HN\) is one.
          The kernel is \(H \cap N\), which is normal in \(H\) by step 4. So the First Isomorphism Theorem applies to
          \(H\), and \(H/(H \cap N) \cong HN/N\). That's the proof the reading gives.</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The Correspondence Theorem needs \(N\) normal in \(G\), not only in \(H\). Which step of the proof uses that, and
      what would go wrong with \(G/N\) if \(N\) were only a subgroup?</li>
    <li>The Third Isomorphism Theorem needs \(N \subseteq H\). What would \(G/H \cong (G/N)/(H/N)\) even mean if \(N\) and
      \(H\) were not nested?</li>
    <li>In the \(\mathbb{Z}_{12}\) example, both \(H/(H \cap N)\) and \(HN/N\) came out to \(\mathbb{Z}_3\). Is that a
      coincidence of the example, or does the Second Isomorphism Theorem force it?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;
    var Z12 = A.Z(12);

    /* Cosets of a subgroup Sub of Z12 that partition the set S. */
    function cosetsIn(S, Sub) {
      var used = {}, out = [];
      S.forEach(function (s) {
        if (used[s]) return;
        var c = Sub.map(function (x) { return (s + x) % 12; }).sort(function (p, q) { return p - q; });
        c.forEach(function (x) { used[x] = true; });
        out.push({ rep: s, elements: c });
      });
      return out;
    }
    function setText(c) { return '{' + c.elements.join(', ') + '}'; }

    /* Explore 1: Second Isomorphism Theorem in Z12, with H = evens and N = multiples of 3. */
    var H = Z12.generate([2]), N = Z12.generate([3]);
    var HN = [];
    H.forEach(function (h) { N.forEach(function (n) { var x = (h + n) % 12; if (HN.indexOf(x) < 0) HN.push(x); }); });
    HN.sort(function (p, q) { return p - q; });
    var HcapN = H.filter(function (x) { return N.indexOf(x) >= 0; });
    var left = cosetsIn(H, HcapN), right = cosetsIn(HN, N);
    right.forEach(function (c) { c.label = c.rep === 0 ? 'N' : c.rep + ' + N'; });

    var leftBox = document.getElementById('d23-left'), rightBox = document.getElementById('d23-right');
    var leftChips = left.map(function (c) {
      var chip = A.h('div', { class: 'a308-coset', text: setText(c) });
      leftBox.appendChild(chip);
      return chip;
    });
    var rightChips = right.map(function (c) {
      var chip = A.h('div', { class: 'a308-coset', text: c.label + ' = ' + setText(c) });
      rightBox.appendChild(chip);
      return chip;
    });
    var pairOut = document.getElementById('d23-pair-out');
    document.getElementById('d23-pair').addEventListener('click', function () {
      var lines = left.map(function (c, i) {
        var target = right.filter(function (d) { return d.elements.indexOf(c.rep) >= 0; })[0];
        var j = right.indexOf(target);
        var col = A.PALETTE[i % A.PALETTE.length], tint = A.TINTS[i % A.TINTS.length];
        leftChips[i].style.borderColor = col; leftChips[i].style.background = tint;
        rightChips[j].style.borderColor = col; rightChips[j].style.background = tint;
        return '<strong>' + setText(c) + '</strong> goes to <strong>' + target.label + '</strong>, since ' +
          c.rep + ' is in ' + target.label + '.';
      });
      pairOut.innerHTML = lines.join('<br>') +
        '<br>Each \\(h + (H \\cap N)\\) goes to \\(h + N\\). ' +
        'Counting check: \\(HN\\) has ' + HN.length + ' elements, so \\(HN/N\\) has ' + (HN.length / N.length) +
        ' cosets, and \\(H/(H \\cap N)\\) has ' + (H.length / HcapN.length) + '.';
      if (A.typeset) A.typeset(pairOut);
    });

    /* Explore 2: the Correspondence Theorem in Z12 with N = {0, 6}. */
    var Nc = Z12.generate([6]);
    var corr = document.getElementById('d23-corr-out');
    corr.innerHTML = 'Click a subgroup to see whether it contains {0, 6}, and what its quotient looks like.';
    A.lattice('d23-lattice', { group: Z12, onPick: function (Hs) {
      var contains = Nc.every(function (x) { return Hs.indexOf(x) >= 0; });
      if (!contains) {
        corr.innerHTML = '<strong>' + Z12.describe(Hs) + '</strong> does not contain {0, 6}, so it has no image in ℤ12/N.';
        return;
      }
      var cos = cosetsIn(Hs, Nc);
      var word = cos.length === 1 ? ' element' : ' elements';
      corr.innerHTML = '<strong>' + Z12.describe(Hs) + '</strong> contains {0, 6}. Its image H/N has ' + cos.length +
        word + ': ' + cos.map(setText).join(', ') + '. In ℤ12/N it is a subgroup of order ' + cos.length + '.';
    } });

    /* Explore 3: collapse Z12 by H = {0, 3, 6, 9}. */
    var H3 = Z12.generate([3]);
    A.quotient('d23-quot', { group: Z12, subgroups: [H3] });
  })();
</script>
