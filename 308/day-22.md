---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 22: Collapse the Kernel"
day: 22
chapter_number: 11
chapter: "Homomorphisms"
day_title: "Collapse the Kernel"
blurb: "Glue together every element a homomorphism sends to the same place, and what's left has exactly the structure of the image. That's the First Isomorphism Theorem, and the tables below let you watch it happen."
reading: "Chapter 11, Day 2: Section 11.2, the canonical homomorphism and the First Isomorphism Theorem"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Count the kernel and the image</h2>

  <p>Section 11.2 turns the idea around. If \(N\) is a normal subgroup of \(G\), the map \(\phi : G \to G/N\) sending \(g\)
    to \(gN\) is a homomorphism, and its kernel is \(N\). Judson calls it the <em>natural</em> or <em>canonical</em>
    homomorphism and writes it \(\phi\). The First Isomorphism Theorem goes the other way. There Judson writes the
    homomorphism as \(\psi\), and we'll use his letters: start with any homomorphism \(\psi : G \to H\) whose kernel is
    \(K\). Then the image \(\psi(G)\) is isomorphic to \(G/K\).</p>

  <p>The widget starts at \(\mathbb{Z}_6 \to \mathbb{Z}_9\) with \(\psi(1) = 3\). Its labels say \(\phi\); that's the
    homomorphism \(\psi\) here. Predict first:</p>
  <ul>
    <li>What is the kernel? List its elements.</li>
    <li>What is the image?</li>
    <li>The domain has \(6\) elements. How do the sizes of the kernel and the image fit with that?</li>
  </ul>

  <div id="d22-hom"></div>

  <p>Check the readout's last line against your prediction. Then move the sliders to \(\mathbb{Z}_{10} \to \mathbb{Z}_{15}\)
    with \(\psi(1) = 3\), and see whether the same relationship holds.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The picture on \(\mathbb{Z}_{12}\)</h2>

  <p>Here is the picture behind the theorem. Take \(\psi(a) = 2a \bmod 8\) on \(\mathbb{Z}_{12}\). Its kernel is
    \(K = \{0, 4, 8\}\). The big table is the addition table of \(\mathbb{Z}_{12}\), with rows and columns grouped into
    the cosets of \(K\), and each cell shaded by the coset it lands in. The two small tables sit side by side. On the
    left is \(\mathbb{Z}_{12}/K\), with each coset collapsed to one entry. On the right is the image \(\{0, 2, 4, 6\}\),
    with its own addition table inside \(\mathbb{Z}_8\).</p>

  <p>Predict before you press anything. How many cosets does \(K\) have? Do the two small tables have the same shape?
    Then press the button to see which image element each coset goes to.</p>

  <div id="d22-big"></div>

  <div class="a308-coset-grid">
    <div id="d22-q"></div>
    <div id="d22-im"></div>
  </div>

  <div class="ctl-row"><button class="btn411" id="d22-match" type="button">Show the matching</button></div>
  <div class="readout a308-readout" id="d22-out" aria-live="polite"></div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The same idea, nonabelian</h2>

  <p>The theorem doesn't need an abelian group. Take \(D_3\), the symmetries of the triangle from Day 3, with Judson's
    names. Send each rotation to \(0\) and each flip to \(1\) in \(\mathbb{Z}_2\). The rotations are the even symmetries
    and the flips are the odd ones, so this is the sign map in disguise.</p>

  <p>Predict first. What is the kernel? How many elements does \(D_3\) divided by that kernel have, and what does its
    table look like? Then press the button in the widget to collapse the blocks.</p>

  <p>The menu also offers the three subgroups of order \(2\), and none of them is normal. Pick \(\langle \mu_1 \rangle\)
    to see what the widget does with a mixed block, then try to collapse it.</p>

  <div id="d22-quot"></div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Which quotient, which isomorphism</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">The kernel of the map \(\psi : \mathbb{Z}_{12} \to \mathbb{Z}_8\) with \(\psi(1) = 2\) is \(K = \{0, 4, 8\}\).
      By the First Isomorphism Theorem, \(\mathbb{Z}_{12}/K\) is isomorphic to:</p>
    <button class="mc-opt" data-key="a">\(\mathbb{Z}_3\)</button>
    <button class="mc-opt" data-key="b">\(\mathbb{Z}_4\)</button>
    <button class="mc-opt" data-key="c">\(\mathbb{Z}_8\)</button>
    <button class="mc-opt" data-key="d">\(\mathbb{Z}_{12}\)</button>

    <div class="mc-fb" data-key="a"><p>\(\mathbb{Z}_3\) is the kernel itself, the subgroup you divide by. The quotient
      has \(12 / 3 = 4\) elements, so it can't be \(\mathbb{Z}_3\).</p></div>
    <div class="mc-fb" data-key="b"><p>Right. There are four cosets: \(K\), \(1 + K\), \(2 + K\), and \(3 + K\). The
      coset \(1 + K\) has order \(4\): \(4(1 + K) = 4 + K = K\), while \(2(1 + K) = 2 + K \neq K\), so no smaller power
      returns to \(K\). The quotient is cyclic of order \(4\), like the image \(\{0, 2, 4, 6\}\).</p></div>
    <div class="mc-fb" data-key="c"><p>\(\mathbb{Z}_8\) is the codomain, where the map lands. The quotient is isomorphic to
      the image, which has four elements, not to all of \(\mathbb{Z}_8\).</p></div>
    <div class="mc-fb" data-key="d"><p>\(\mathbb{Z}_{12}\) is the domain. Dividing by a nontrivial subgroup makes the group
      smaller, so the quotient has four elements, not twelve.</p></div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Same map. Which statement is the First Isomorphism Theorem for \(\psi\)?</p>
    <button class="mc-opt" data-key="a">\(\mathbb{Z}_{12}/\ker\psi \cong \psi(\mathbb{Z}_{12})\)</button>
    <button class="mc-opt" data-key="b">\(\mathbb{Z}_{12} \cong \psi(\mathbb{Z}_{12})\)</button>
    <button class="mc-opt" data-key="c">\(\ker\psi \cong \psi(\mathbb{Z}_{12})\)</button>
    <button class="mc-opt" data-key="d">\(\psi(\mathbb{Z}_{12}) = \mathbb{Z}_8\)</button>

    <div class="mc-fb" data-key="a"><p>Right. The quotient by the kernel is isomorphic to the image. Here both have four
      elements, and the isomorphism is the one the proof builds: \(gK \mapsto \psi(g)\).</p></div>
    <div class="mc-fb" data-key="b"><p>The domain has \(12\) elements and the image has \(4\), so they can't be isomorphic.
      The theorem puts the quotient, not the domain, on the left.</p></div>
    <div class="mc-fb" data-key="c"><p>The kernel has \(3\) elements and the image has \(4\). They can't be isomorphic, and the
      kernel is the thing being divided out, not the thing that is matched.</p></div>
    <div class="mc-fb" data-key="d"><p>No. The image is \(\{0, 2, 4, 6\}\). The odd elements of \(\mathbb{Z}_8\) are never hit,
      because every value \(2a \bmod 8\) is even.</p></div>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Equal values, equal elements?</h2>

  <p>Someone is checking that the induced map \(\eta(gK) = \psi(g)\) is one-to-one, where \(K\) is the kernel of
    \(\psi\). Here is their argument.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Suppose \(\eta(gK) = \eta(hK)\).</button>
      <button class="fline" type="button">Then \(\psi(g) = \psi(h)\).</button>
      <button class="fline" type="button">So \(g = h\), since equal values can only come from equal elements.</button>
      <button class="fline" type="button">Hence \(gK = hK\).</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> This is how a one-to-one check starts: take two
      cosets with the same image.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> By the definition of \(\eta\), both sides are values of
      \(\psi\) at representatives.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>This is the flaw.</strong> From \(\psi(g) = \psi(h)\) you get
      \(\psi(h^{-1}g) = e\), so \(h^{-1}g\) lies in the kernel. That is exactly the statement \(gK = hK\). It does not give
      \(g = h\). Counterexample: in \(\mathbb{Z}_{12}\) with \(\psi(a) = 2a \bmod 8\), we have \(\psi(1) = \psi(5) = 2\),
      but \(1 \neq 5\). Here \(5 - 1 = 4\) is in \(K\), so \(1 + K = 5 + K\).</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine as an inference from line 3.</strong> If \(g = h\), then
      \(gK = hK\) at once. But line 3 doesn't hold, so this argument doesn't establish the conclusion.</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>The First Isomorphism Theorem, one committed step at a time</h2>

  <p>Let \(\psi : G \to H\) be a homomorphism with kernel \(K\). Day 21 showed that \(K\) is normal, so \(G/K\) is a
    group. Judson's proof defines \(\eta : G/K \to \psi(G)\) by \(\eta(gK) = \psi(g)\). Work through it in order.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">What must be checked before \(\eta(gK) = \psi(g)\) defines a map at all?</div>
        <div class="sstep-body"><p>That the value doesn't depend on which representative \(g\) of \(gK\) you pick. A
          coset has many names, and a definition by representatives has to survive every choice of name.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Well defined. Suppose \(gK = hK\). Why is \(h^{-1}g \in K\), and what does that say
          about \(\psi(g)\) and \(\psi(h)\)?</div>
        <div class="sstep-body"><p>\(gK = hK\) means \(h^{-1}g \in K\), so \(\psi(h^{-1}g) = e\). Then
          \(\psi(h)^{-1}\psi(g) = e\), so \(\psi(g) = \psi(h)\). The value of \(\eta\) doesn't depend on the
          representative.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Homomorphism. Compute \(\eta\big((gK)(hK)\big)\).</div>
        <div class="sstep-body"><p>\((gK)(hK) = ghK\), because \(K\) is normal. So
          \(\eta\big((gK)(hK)\big) = \psi(gh) = \psi(g)\psi(h) = \eta(gK)\,\eta(hK)\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Onto. Why does every element of \(\psi(G)\) come from \(\eta\)?</div>
        <div class="sstep-body"><p>Every element of \(\psi(G)\) has the form \(\psi(g)\), and \(\psi(g) = \eta(gK)\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">One-to-one. Suppose \(\eta(gK) = \eta(hK)\). Show that \(gK = hK\).</div>
        <div class="sstep-body"><p>Then \(\psi(g) = \psi(h)\), so \(\psi(h^{-1}g) = e\), so \(h^{-1}g \in K\), so
          \(gK = hK\). Notice what was used: only that \(h^{-1}g\) lies in \(K\). That is the statement \(gK = hK\),
          and it is the only place the kernel enters this step.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Conclude. What do steps 2 through 5 give you about \(\eta\), and what does that say
          about \(G/K\) and \(\psi(G)\)?</div>
        <div class="sstep-body"><p>\(\eta\) is well defined, a homomorphism, one-to-one, and onto \(\psi(G)\). So it is an
          isomorphism, and \(G/K \cong \psi(G)\). Judson adds that \(\eta\) is the only isomorphism with
          \(\psi = \eta \circ \phi\), where \(\phi(g) = gK\) is the canonical map.</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>If the kernel is the whole group, what does the First Isomorphism Theorem say about the image? Check your answer
      against a map you can build yourself.</li>
    <li>The theorem gives an isomorphism, not an equality of sets. Two groups can be isomorphic in several ways. Why is
      \(gK \mapsto \psi(g)\) the one the theorem names, and what does Judson's uniqueness statement rule out?</li>
    <li>The quotient widget warns about mixed blocks when a subgroup isn't normal. Why is a mixed block exactly what
      stops the collapse from working?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;
    A.hom('d22-hom', { m: 6, n: 9, k: 3, maxM: 24, maxN: 24, avoid: [[24, 18]] });

    /* Explore 2: psi(a) = 2a mod 8 on Z12, kernel K = {0, 4, 8}. */
    var Z12 = A.Z(12);
    var K = [0, 4, 8];
    A.cayley('d22-big', { group: Z12, H: K, color: 'cosets-left', reorder: true, clickable: false,
      caption: 'ℤ12, rows and columns grouped by the cosets of K' });

    var Q = Z12.quotient(K, { additive: true, nName: 'K' });
    Q.additive = true;
    A.cayley('d22-q', { group: Q, clickable: false, caption: 'ℤ12 / K' });

    var imgLabels = ['0', '2', '4', '6'];
    var Im = A.fromTable(imgLabels, imgLabels.map(function (a) {
      return imgLabels.map(function (b) { return String((Number(a) + Number(b)) % 8); });
    }), 'image');
    Im.additive = true;
    A.cayley('d22-im', { group: Im, clickable: false, caption: 'the image {0, 2, 4, 6} in ℤ8' });

    var out2 = document.getElementById('d22-out');
    document.getElementById('d22-match').addEventListener('click', function () {
      var lines = Q.cosetList.map(function (c, i) {
        var v = (2 * c.rep) % 8;
        return '<strong>' + Q.labels[i] + '</strong> = {' + c.elements.join(', ') + '} goes to ' + v + '.';
      });
      out2.innerHTML = lines.join('<br>') +
        '<br>So the collapsed table on the left has the same shape as the image table on the right.';
    });

    /* Explore 3: D3 with the rotation subgroup as the kernel of the sign map.
       The rotations come first, so the menu opens on the kernel. */
    var D3 = A.D(3, { labels: 'judson3' });
    var rot = [D3.index('id'), D3.index('ρ₁'), D3.index('ρ₂')];
    var others = D3.subgroups().filter(function (H) {
      return H.length > 1 && H.length < D3.n && H.join(',') !== rot.join(',');
    });
    A.quotient('d22-quot', { group: D3, subgroups: [rot].concat(others) });
  })();
</script>
