---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 21: Maps That Keep the Table"
day: 21
chapter_number: 11
chapter: "Homomorphisms"
day_title: "Maps That Keep the Table"
blurb: "A map between groups is a homomorphism when it carries products to products. That one condition forces the identity and the inverses to behave, and the elements sent to the identity turn out to form a normal subgroup."
reading: "Chapter 11, Day 1: Section 11.1, Group Homomorphisms, through the kernel is a normal subgroup"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Where do the points go?</h2>

  <p>Section 11.1 starts with a definition. A map \(\phi : G \to H\) between groups is a <em>homomorphism</em> when
    \(\phi(g_1 g_2) = \phi(g_1)\,\phi(g_2)\) for all \(g_1, g_2 \in G\). The map has to respect the operation.
    Nothing else is asked of it.</p>

  <p>The widget builds the map \(\phi(a) = k \cdot a \bmod n\) from \(\mathbb{Z}_m\) to \(\mathbb{Z}_n\), with
    \(k = \phi(1)\) set by the slider. It starts at \(\mathbb{Z}_{12} \to \mathbb{Z}_8\) with \(\phi(1) = 2\). The
    sliders for \(m\) and \(n\) change the groups as well.</p>

  <div id="d21-hom"></div>

  <p>Predict before you move anything:</p>
  <ul>
    <li>Which elements of \(\mathbb{Z}_{12}\) go to \(0\)? How many are there?</li>
    <li>Which elements of \(\mathbb{Z}_8\) are hit? That set is the <strong>image</strong>.</li>
    <li>Take \(3\) and \(5\). Where do \(3\), \(5\), and \(3 + 5\) go? Does \(\phi(3 + 5) = \phi(3) + \phi(5)\) hold?</li>
  </ul>

  <p>Now slide \(\phi(1)\) to \(1\), \(3\), and \(5\). Each of those fails, and the readout says why. Go back to
    \(2\) and look at the dots that land on \(0\). That set is the <strong>kernel</strong>, written \(\ker\phi\).
    It is a subgroup of \(\mathbb{Z}_{12}\). By the end of today you should be able to say why every kernel is one.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Test the rule on pairs</h2>

  <p>The definition is a condition on <em>pairs</em>, so test it on pairs. Here are three maps from
    \(\mathbb{Z}_6\) to \(\mathbb{Z}_4\), each written as a rule on \(a\): \(a \mapsto a \bmod 4\),
    \(a \mapsto 2a \bmod 4\), and \(a \mapsto a + 1 \bmod 4\).</p>

  <p>Predict first: which one of the three passes the test for every pair? Then choose a map and a pair \(a, b\).
    The grid checks \(\phi(a + b) = \phi(a) + \phi(b)\) for all 36 pairs. The sum \(a + b\) is computed in
    \(\mathbb{Z}_6\), and the sum of the values is computed in \(\mathbb{Z}_4\). A cell marked pass is a pair that passes.</p>

  <div id="d21-test"></div>

  <p>Find one failing pair for each map that fails. What is it about that pair that breaks the rule?</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>What every homomorphism must do</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which of these is true of <em>every</em> homomorphism \(\phi : G \to H\)?</p>
    <button class="mc-opt" data-key="a">\(\phi(g^{-1}) = \phi(g)\) for every \(g \in G\).</button>
    <button class="mc-opt" data-key="b">\(\phi(e_G) = e_H\), the identity of \(H\).</button>
    <button class="mc-opt" data-key="c">\(\phi(G) = H\), so every element of \(H\) is hit.</button>
    <button class="mc-opt" data-key="d">The kernel is all of \(G\).</button>

    <div class="mc-fb" data-key="a"><p>Not in general. In the \(\mathbb{Z}_{12} \to \mathbb{Z}_8\) map with \(\phi(1) = 2\),
      we have \(\phi(11) = 22 \bmod 8 = 6\), which is not \(\phi(1) = 2\). What is true is
      \(\phi(g^{-1}) = \phi(g)^{-1}\). Here \(6\) is the inverse of \(2\) in \(\mathbb{Z}_8\), since \(2 + 6 = 8 \equiv 0\).</p></div>
    <div class="mc-fb" data-key="b"><p>Right. Judson proves this first: \(\phi(e) = \phi(ee) = \phi(e)\phi(e)\), and
      canceling in \(H\) gives \(\phi(e) = e_H\). Every homomorphism does this, whatever the groups are.</p></div>
    <div class="mc-fb" data-key="c"><p>Not in general. The image is the set of values actually hit. In the same example it
      is \(\{0, 2, 4, 6\}\), which is not all of \(\mathbb{Z}_8\).</p></div>
    <div class="mc-fb" data-key="d"><p>Not in general. The kernel is the set of elements sent to the identity. In that
      example \(1\) is not in the kernel, because \(\phi(1) = 2 \neq 0\).</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which of the three maps from \(\mathbb{Z}_6\) to \(\mathbb{Z}_4\) is a homomorphism?</p>
    <button class="mc-opt" data-key="a">\(a \mapsto a \bmod 4\)</button>
    <button class="mc-opt" data-key="b">\(a \mapsto 2a \bmod 4\)</button>
    <button class="mc-opt" data-key="c">\(a \mapsto a + 1 \bmod 4\)</button>
    <button class="mc-opt" data-key="d">The constant map \(a \mapsto 2\)</button>

    <div class="mc-fb" data-key="a"><p>No. Since \(3 + 3 = 0\) in \(\mathbb{Z}_6\), the value at \(0\) has to equal
      \(\phi(3) + \phi(3) = 6 \bmod 4 = 2\). But \(\phi(0) = 0\).</p></div>
    <div class="mc-fb" data-key="b"><p>Right. Because \(6\) is even, \(a + b\) computed in \(\mathbb{Z}_6\) has the same
      parity as \(a + b\) computed in the integers. The value \(2a \bmod 4\) depends only on the parity of \(a\), so the
      map passes every pair.</p></div>
    <div class="mc-fb" data-key="c"><p>No. The identity goes to \(1\), not \(0\). The pair \((0, 0)\) fails, since
      \(\phi(0) = 1\) but \(\phi(0) + \phi(0) = 2\).</p></div>
    <div class="mc-fb" data-key="d"><p>No. The constant map sends the identity to \(2\), so \(\phi(0 + 0) = 2\), while
      \(\phi(0) + \phi(0) = 4 = 0\) in \(\mathbb{Z}_4\).</p></div>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>A constant map that isn't a homomorphism</h2>

  <p>A classmate is sure that sending every element to one fixed element is always a homomorphism. Here's their
    argument, with \(h \in H\) fixed.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Define \(\phi(g) = h\) for every \(g \in G\).</button>
      <button class="fline" type="button">Then \(\phi(g_1 g_2) = h\) for all \(g_1, g_2 \in G\).</button>
      <button class="fline" type="button">Also \(\phi(g_1)\phi(g_2) = h \cdot h = h\), so \(\phi(g_1 g_2) = \phi(g_1)\phi(g_2)\).</button>
      <button class="fline" type="button">So \(\phi\) is a homomorphism, whatever \(h\) is.</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> A constant map is a perfectly good map. The only
      question is whether it respects the operation.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> Every product goes to the same \(h\).</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>This is the flaw.</strong> In a group, \(h \cdot h = h\) only when
      \(h = e\). Multiply both sides on the left by \(h^{-1}\) and you get \(h = e\). So the constant map to \(h\) is a
      homomorphism only when \(h\) is the identity. Counterexample: in \(\mathbb{Z}_4\), where the operation is written
      \(+\), we have \(1 + 1 = 2\), not \(1\). The constant map from \(\mathbb{Z}_6\) to \(\mathbb{Z}_4\) sending everything
      to \(1\) fails, since \(\phi(0 + 0) = 1\) but \(\phi(0) + \phi(0) = 2\). The constant map to \(0\) does work.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine as an inference from line 3, so it stands or falls with
      line 3.</strong> If line 3 were true, this would follow. Line 3 isn't true, so the conclusion isn't either.</p></div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Images and preimages</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Let \(\phi : \mathbb{Z}_{12} \to \mathbb{Z}_8\) with \(\phi(1) = 2\). What is \(\phi^{-1}(\{0, 4\})\)?</p>
    <button class="mc-opt" data-key="a">\(\{0, 4, 8\}\)</button>
    <button class="mc-opt" data-key="b">\(\{0, 2, 4, 6, 8, 10\}\)</button>
    <button class="mc-opt" data-key="c">\(\{0, 4\}\)</button>
    <button class="mc-opt" data-key="d">All of \(\mathbb{Z}_{12}\)</button>

    <div class="mc-fb" data-key="a"><p>That's \(\phi^{-1}(\{0\})\), the kernel. The preimage of \(\{0, 4\}\) is larger,
      because \(\phi(2) = 4\) and \(\phi(6) = 4\), so \(2\) and \(6\) belong to it.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. Here \(\phi(a) = 2a \bmod 8\) lands in \(\{0, 4\}\) exactly when \(a\) is
      even. The preimage is the set of evens, and it is a subgroup of order \(6\).</p></div>
    <div class="mc-fb" data-key="c"><p>The preimage of a set is everything that maps into it, not the set itself. Since
      \(\phi(2) = 4\), the element \(2\) belongs to \(\phi^{-1}(\{0, 4\})\), even though \(2\) is not in \(\{0, 4\}\).</p></div>
    <div class="mc-fb" data-key="d"><p>Not every element lands there. Odd elements go to \(2\) or \(6\). For instance
      \(\phi(1) = 2\) and \(\phi(3) = 6\).</p></div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Same map. What is the image \(\phi(\mathbb{Z}_{12})\)?</p>
    <button class="mc-opt" data-key="a">\(\{0, 2, 4, 6\}\)</button>
    <button class="mc-opt" data-key="b">\(\{0, 2, 4\}\)</button>
    <button class="mc-opt" data-key="c">All of \(\mathbb{Z}_8\)</button>
    <button class="mc-opt" data-key="d">\(\{0, 4\}\)</button>

    <div class="mc-fb" data-key="a"><p>Right. Every value \(2a \bmod 8\) is even, and each of \(0, 2, 4, 6\) is hit.</p></div>
    <div class="mc-fb" data-key="b"><p>Close, but it misses \(6\). Since \(\phi(3) = 6\), the element \(6\) is in the image.</p></div>
    <div class="mc-fb" data-key="c"><p>No. The odd elements of \(\mathbb{Z}_8\) are never hit, because every value
      \(2a \bmod 8\) is even.</p></div>
    <div class="mc-fb" data-key="d"><p>No. That set misses \(2\) and \(6\), and both are hit: \(\phi(1) = 2\) and
      \(\phi(3) = 6\).</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Why the kernel is normal</h2>

  <p>Judson proves this by pulling back the normal subgroup \(\{e\}\) of \(H\). The argument below is the same one,
    written for the kernel, one committed step at a time.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">What has to be shown? Let \(K = \ker\phi = \{g \in G : \phi(g) = e\}\). Name the two
          properties of \(K\) that you need.</div>
        <div class="sstep-body"><p>\(K\) has to be a subgroup, and it has to be normal. For normality use the test from
          Chapter 10: \(K\) is normal when \(g^{-1}kg \in K\) for every \(g \in G\) and every \(k \in K\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Why is \(e \in K\)? Start from \(\phi(e) = \phi(ee)\).</div>
        <div class="sstep-body"><p>\(\phi(e) = \phi(ee) = \phi(e)\phi(e)\). Canceling \(\phi(e)\) in \(H\) gives
          \(\phi(e) = e_H\). So \(e \in K\), and \(K\) is not empty.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Take \(a, b \in K\). Why is \(ab^{-1} \in K\)?</div>
        <div class="sstep-body"><p>\(\phi(ab^{-1}) = \phi(a)\phi(b^{-1}) = \phi(a)\phi(b)^{-1} = e_H e_H^{-1} = e_H\).
          So \(ab^{-1} \in K\), and the one-step subgroup test finishes the job.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Take \(g \in G\) and \(k \in K\). What is \(\phi(g^{-1}kg)\)?</div>
        <div class="sstep-body"><p>\(\phi(g^{-1}kg) = \phi(g)^{-1}\phi(k)\phi(g) = \phi(g)^{-1} e_H \phi(g) = e_H\).
          So \(g^{-1}kg \in K\) for every \(g\) and \(k\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Which claims from step 1 have you now covered, and what does the normality test say?</div>
        <div class="sstep-body"><p>Steps 2 and 3 show that \(K\) is a subgroup. Step 4 is the normality test. So \(K\)
          is a normal subgroup of \(G\). Judson's version has the same shape: the preimage of a normal subgroup is normal.</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Judson's argument that \(\phi(e) = e_H\) cancels \(\phi(e)\) in the equation \(\phi(e) = \phi(e)\phi(e)\).
      Which group axiom makes that canceling legal? Could a structure with an operation and an identity, but no
      inverses, let the same map send \(e\) somewhere else?</li>
    <li>In the widget, pick a value in the image other than \(0\), such as \(2\) for \(\phi(1) = 2\). What do you know
      about the set of elements that land on it? Is it a subgroup? Hold on to the answer for next class.</li>
    <li>The kernel is always normal, but a subgroup in general is not. Which property of \(\phi\) does the proof
      actually use, and in which step? What would fail if you tried the same argument for an arbitrary subgroup?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;
    A.hom('d21-hom', { m: 12, n: 8, k: 2, maxM: 24, maxN: 24, avoid: [[24, 18]] });

    /* Explore 2: a pair-by-pair tester for three maps from Z6 to Z4. */
    var MAPS = [
      { name: 'a ↦ a mod 4', f: function (a) { return a % 4; } },
      { name: 'a ↦ 2a mod 4', f: function (a) { return (2 * a) % 4; } },
      { name: 'a ↦ a + 1 mod 4', f: function (a) { return (a + 1) % 4; } }
    ];
    function passes(M, a, b) { return M.f((a + b) % 6) === (M.f(a) + M.f(b)) % 4; }

    var box = document.getElementById('d21-test');
    var selMap = A.h('select', { 'aria-label': 'map' });
    MAPS.forEach(function (M, i) { selMap.appendChild(A.h('option', { value: i, text: M.name })); });
    var selA = A.h('select', { 'aria-label': 'a' }), selB = A.h('select', { 'aria-label': 'b' });
    for (var v = 0; v < 6; v++) {
      selA.appendChild(A.h('option', { value: v, text: String(v) }));
      selB.appendChild(A.h('option', { value: v, text: String(v) }));
    }
    var grid = A.h('div', { class: 'a308-cayley-wrap' });
    var out = A.h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    box.innerHTML = '';
    box.appendChild(A.h('div', { class: 'ctl-row' }, [
      A.h('div', { class: 'ctl' }, [A.h('label', { text: 'Map' }), selMap]),
      A.h('div', { class: 'ctl' }, [A.h('label', { text: 'a' }), selA]),
      A.h('div', { class: 'ctl' }, [A.h('label', { text: 'b' }), selB])
    ]));
    box.appendChild(grid);
    box.appendChild(out);

    function draw() {
      var M = MAPS[Number(selMap.value)], a = Number(selA.value), b = Number(selB.value);
      var fails = 0, t = A.h('table', { class: 'a308-cayley small' });
      var head = A.h('tr', null, [A.h('th', { class: 'corner', scope: 'col', text: '+' })]);
      for (var c = 0; c < 6; c++) head.appendChild(A.h('th', { scope: 'col', text: String(c) }));
      var body = A.h('tbody');
      for (var r = 0; r < 6; r++) {
        var tr = A.h('tr', null, [A.h('th', { scope: 'row', text: String(r) })]);
        for (var q = 0; q < 6; q++) {
          var good = passes(M, r, q);
          if (!good) fails++;
          var mark = (r === a && q === b) ? ' hl' : '';
          tr.appendChild(A.h('td', { class: (good ? 'good' : 'bad') + mark, text: good ? 'pass' : 'fail',
            'aria-label': r + ' and ' + q + (good ? ': passes' : ': fails') }));
        }
        body.appendChild(tr);
      }
      t.appendChild(A.h('thead', null, [head]));
      t.appendChild(body);
      grid.innerHTML = '';
      grid.appendChild(t);

      var s = (a + b) % 6;
      out.innerHTML = '<strong>' + a + ' + ' + b + ' = ' + s + '</strong> in ℤ6, and φ sends that to ' + M.f(s) +
        '. The other side is ' + M.f(a) + ' + ' + M.f(b) + ' = ' + ((M.f(a) + M.f(b)) % 4) + ' in ℤ4. ' +
        (passes(M, a, b) ? 'These agree.' : '<strong>These differ, so this pair breaks the rule.</strong>') + ' ' +
        (fails === 0 ? 'This map passes all 36 pairs.' : 'This map fails on <strong>' + fails + '</strong> of the 36 pairs.');
    }
    selMap.addEventListener('change', draw);
    selA.addEventListener('change', draw);
    selB.addEventListener('change', draw);
    draw();
  })();
</script>
