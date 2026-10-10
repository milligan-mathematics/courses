---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 29: Collapse an Ideal, Keep the Ring"
day: 29
chapter_number: 16
chapter: "Rings"
day_title: "Collapse an Ideal, Keep the Ring"
blurb: "A ring homomorphism respects both operations, and the set it sends to zero is an ideal. Collapse any ideal to a single point and you get a quotient ring, and the ideals whose quotients are fields turn out to be the maximal ones."
reading: "Chapter 16, Day 2: Sections 16.3 and 16.4, from ring homomorphisms and ideals through maximal and prime ideals"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Read the rows</h2>

  <p>An ideal is a subring \(I\) of a ring \(R\) that absorbs multiplication: \(rI \subseteq I\) and \(Ir \subseteq I\)
    for every \(r \in R\). In a commutative ring with identity the simplest ideals are the principal ideals
    \(\langle a \rangle = \{ar : r \in R\}\), which Judson introduces in 16.3.</p>

  <p>The multiplication table of \(\mathbb Z_{15}\) already contains them. Row \(a\) lists the products \(ar\) as \(r\)
    runs across the columns. Set the table to \(n = 15\), and before you read it, predict:</p>
  <ul>
    <li>Which rows contain \(1\)? Think about which elements have multiplicative inverses.</li>
    <li>Row \(3\) lists which set of numbers? Predict it, then ask whether that set stays closed when you multiply by
      any element of \(\mathbb Z_{15}\).</li>
  </ul>

  <div id="d29-ring"></div>

  <p>Read row \(3\), then row \(5\), then row \(2\). In a commutative ring with identity, each row is a principal ideal.
    Can you see why, using only the table?</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Collapse the ideal</h2>

  <p>Judson's factor ring \(R/I\) has the cosets \(r + I\) as its elements. In \(\mathbb Z_n\), the ideal \(\langle d \rangle\)
    for a divisor \(d\) of \(n\) is the set of multiples of \(d\). Its cosets are the sets of numbers with the same
    remainder mod \(d\).</p>

  <p>The picture opens at \(n = 9\) and \(d = 3\). Choose your own \(n\) and \(d\). Before you look at the picture,
    predict how many elements \(\langle d \rangle\) has, and how many cosets there are. The first circle colours each
    element of \(\mathbb Z_n\) by its remainder mod \(d\). The second circle collapses each colour to a single point.</p>

  <div id="d29-collapse"></div>

  <p>Compare the two circles. What does the second one look like, and how is its size related to \(d\)?</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Doubling is not a homomorphism</h2>

  <p>A ring homomorphism has to respect both operations. A classmate says that \(\varphi(a) = 2a\) is a ring
    homomorphism from \(\mathbb Z_8\) to \(\mathbb Z_8\). Here is the argument.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">\(\varphi(a + b) = 2(a + b) = 2a + 2b = \varphi(a) + \varphi(b)\), so \(\varphi\) respects addition.</button>
      <button class="fline" type="button">By definition, \(\varphi(ab) = 2ab\).</button>
      <button class="fline" type="button">\(\varphi(a)\varphi(b) = (2a)(2b) = 2ab\), so \(\varphi(ab) = \varphi(a)\varphi(b)\).</button>
      <button class="fline" type="button">Therefore \(\varphi\) is a ring homomorphism. \(\blacksquare\)</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> Multiplication by \(2\) distributes over addition in \(\mathbb Z_8\).</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> That is the definition of \(\varphi\).</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>This is the flaw.</strong> \((2a)(2b) = 4ab\), not \(2ab\). A
      concrete check: take \(a = b = 1\). Then \(\varphi(1)\varphi(1) = 2 \cdot 2 = 4\), but \(\varphi(1 \cdot 1) = \varphi(1) = 2\).
      The map respects addition and fails to respect multiplication.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine as a deduction from line 3.</strong> The premise is false,
      so the conclusion is false too.</p></div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Kernels and quotient sizes</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Let \(\varphi: \mathbb Z_{20} \to \mathbb Z_5\) be \(\varphi(a) = a \bmod 5\). Which set is \(\ker \varphi\)?</p>
    <button class="mc-opt" data-key="a">\(\{0, 4, 8, 12, 16\}\)</button>
    <button class="mc-opt" data-key="b">\(\{0, 5, 10, 15\}\)</button>
    <button class="mc-opt" data-key="c">\(\{0, 2, 4, 6, 8, 10, 12, 14, 16, 18\}\)</button>
    <button class="mc-opt" data-key="d">\(\{0\}\)</button>
    <div class="mc-fb" data-key="a"><p>Those are the multiples of \(4\). But \(\varphi(4) = 4 \neq 0\), so \(4\) is not in
      the kernel.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. The kernel is the set of \(a\) with \(a \equiv 0 \pmod 5\), which is the
      ideal \(\langle 5 \rangle\). The map is well defined because \(5\) divides \(20\).</p></div>
    <div class="mc-fb" data-key="c"><p>Those are the even residues. But \(\varphi(2) = 2 \neq 0\), so \(2\) is not in
      the kernel.</p></div>
    <div class="mc-fb" data-key="d"><p>The kernel is bigger than \(\{0\}\). \(\varphi(5) = 0 = \varphi(0)\), and
      \(5 \neq 0\).</p></div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">How many elements does \(\mathbb Z_{20}/\langle 4 \rangle\) have?</p>
    <button class="mc-opt" data-key="a">\(4\)</button>
    <button class="mc-opt" data-key="b">\(5\)</button>
    <button class="mc-opt" data-key="c">\(16\)</button>
    <button class="mc-opt" data-key="d">\(20\)</button>
    <div class="mc-fb" data-key="a"><p>Right. \(\langle 4 \rangle = \{0, 4, 8, 12, 16\}\) has \(5\) elements, so there are
      \(20 / 5 = 4\) cosets. The quotient has one element for each coset.</p></div>
    <div class="mc-fb" data-key="b"><p>Five is the size of the ideal \(\langle 4 \rangle\) itself, not of the quotient.
      Each coset has five elements, and there are four cosets.</p></div>
    <div class="mc-fb" data-key="c"><p>Sixteen is \(20 - 4\). Collapsing an ideal does not subtract elements. It groups
      them into cosets of equal size.</p></div>
    <div class="mc-fb" data-key="d"><p>Twenty is the size of \(\mathbb Z_{20}\) itself. Collapsing \(\langle 4 \rangle\)
      groups the twenty elements into cosets, which reduces the count.</p></div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Which ideals are maximal?</h2>

  <p>Judson calls a proper ideal \(M\) maximal when the only ideal properly containing \(M\) is the whole ring. A proper
    ideal \(P\) is prime when \(ab \in P\) implies \(a \in P\) or \(b \in P\). Set the table to \(n = 20\). Before you
    read the marks, predict which of the ideals \(\langle d \rangle\) are maximal. Then choose another \(n\) and
    predict again.</p>

  <div id="d29-ideals"></div>

  <p>Pick one green row and one orange row. For each, check by hand whether some proper ideal lies strictly between it
    and \(\mathbb Z_n\). Does your answer match the marks?</p>

  <p class="a308-note">A few sizes are held back because they are on the homework.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Maximal and prime</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Which ideal of \(\mathbb Z_{20}\) is maximal?</p>
    <button class="mc-opt" data-key="a">\(\langle 4 \rangle\)</button>
    <button class="mc-opt" data-key="b">\(\langle 10 \rangle\)</button>
    <button class="mc-opt" data-key="c">\(\langle 5 \rangle\)</button>
    <button class="mc-opt" data-key="d">\(\{0\}\)</button>
    <div class="mc-fb" data-key="a"><p>Not maximal. \(\langle 4 \rangle\) lies inside the proper ideal \(\langle 2 \rangle =
      \{0, 2, 4, \ldots, 18\}\), so \(\langle 2 \rangle\) sits strictly between \(\langle 4 \rangle\) and \(\mathbb Z_{20}\).</p></div>
    <div class="mc-fb" data-key="b"><p>Not maximal. \(\langle 10 \rangle\) lies inside \(\langle 5 \rangle\), which is proper.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. No ideal sits strictly between \(\langle 5 \rangle\) and \(\mathbb Z_{20}\).
      The quotient \(\mathbb Z_{20}/\langle 5 \rangle\) is a field, since Judson's theorem links maximality to fields.</p></div>
    <div class="mc-fb" data-key="d"><p>Not maximal. \(\{0\}\) lies inside \(\langle 2 \rangle\), which is proper.</p></div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Which statement about \(\langle 4 \rangle\) in \(\mathbb Z_{20}\) is true?</p>
    <button class="mc-opt" data-key="a">It is prime, because \(\mathbb Z_{20}/\langle 4 \rangle \cong \mathbb Z_4\) has no zero divisors.</button>
    <button class="mc-opt" data-key="b">It is maximal, because it has five elements, and five is prime.</button>
    <button class="mc-opt" data-key="c">It is proper, but it is neither prime nor maximal.</button>
    <button class="mc-opt" data-key="d">It is not proper, because \(4\) divides \(20\).</button>
    <div class="mc-fb" data-key="a"><p>\(\mathbb Z_4\) does have zero divisors: \(2 \cdot 2 = 4 \equiv 0\). Directly in
      \(\mathbb Z_{20}\): \(2 \cdot 2 = 4\) lies in \(\langle 4 \rangle\), but \(2\) does not.</p></div>
    <div class="mc-fb" data-key="b"><p>The number of elements is not the test. \(\langle 4 \rangle\) lies inside the proper
      ideal \(\langle 2 \rangle\), so it is not maximal.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. It is proper, since \(1\) is not a multiple of \(4\). It is not prime,
      because \(2 \cdot 2\) lies in \(\langle 4 \rangle\) and \(2\) does not. It is not maximal, because \(\langle 2 \rangle\)
      lies strictly between it and the whole ring.</p></div>
    <div class="mc-fb" data-key="d"><p>Divisibility of the generator does not decide it. \(\langle 4 \rangle\) contains
      only multiples of \(4\), and \(1\) is not one of them.</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>A maximal ideal gives a field</h2>

  <p>Let \(R\) be a commutative ring with identity, and let \(M\) be a proper ideal. Judson's theorem in 16.4 says that
    \(M\) is maximal if and only if \(R/M\) is a field, and he proves both directions. This page walks the direction from
    maximal to field, which contains the construction. Commit to each step before you open it.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">What must you show about \(R/M\)? Why is \(1 + M \neq 0 + M\)?</div>
        <div class="sstep-body"><p>\(R/M\) is commutative with identity \(1 + M\), since \(R\) is. Because \(M\) is
          proper, \(1 \notin M\), so \(1 + M \neq M = 0 + M\). What remains is that every nonzero element \(a + M\) has an
          inverse.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Take \(a + M \neq 0 + M\). What does that say about \(a\)?</div>
        <div class="sstep-body"><p>\(a \notin M\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Let \(I = \{ra + m : r \in R, m \in M\}\). Why is \(I\) an ideal that properly contains \(M\)?</div>
        <div class="sstep-body"><p>Differences of elements of \(I\) are again in \(I\), since \((r_1 a + m_1) - (r_2 a + m_2) = (r_1 - r_2)a + (m_1 - m_2)\).
          For \(s \in R\), \(s(ra + m) = (sr)a + sm\) is in \(I\). Since \(R\) is commutative, \((ra + m)s = s(ra + m)\) is in
          \(I\) too, so the right-hand check follows from the left-hand one. That is the only place commutativity is needed
          here. Taking \(r = 0\) shows \(M \subseteq I\), and taking \(r = 1\), \(m = 0\) puts \(a\) in \(I\). Since
          \(a \notin M\), the inclusion is proper.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">\(M\) is maximal, so \(I = R\). What does that give for the element \(1\)?</div>
        <div class="sstep-body"><p>\(1 \in I\), so \(1 = ba + m\) for some \(b \in R\) and \(m \in M\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Show that \(b + M\) is an inverse of \(a + M\). Why does that make \(R/M\) a field?</div>
        <div class="sstep-body"><p>\((b + M)(a + M) = ba + M = (1 - m) + M = 1 + M\), since \(m \in M\). Commutativity
          gives the other order too. So every nonzero element of \(R/M\) is a unit, and \(R/M\) is a field.</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Judson's corollary says every maximal ideal of a commutative ring with identity is prime. Is \(\{0\}\) a prime
      ideal of \(\mathbb Z\)? Is it maximal? What does the answer say about the converse of the corollary?</li>
    <li>Step 3 of the scaffold uses commutativity to check that \(I\) is an ideal. Where exactly does that happen, and what
      would fail in a noncommutative ring?</li>
    <li>The First Isomorphism Theorem identifies \(\mathbb Z_{20}/\langle 5 \rangle\) with \(\mathbb Z_5\). Use that
      identification to explain why \(\langle 5 \rangle\) is maximal, without going back to the scaffold.</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;
    var NOTE = 'That one is on your homework, so this page won’t do it for you. Work it by hand, then bring it to class — or try a different input here.';
    // Z_n and ideal views: the homework rings Z_6, Z_12, Z_18 and Z_25 are held back.
    var AVOID_N = [6, 12, 18, 25];

    /* ---- Explore: rows of the multiplication table are principal ideals ---- */
    A.ring('d29-ring', { n: 8, show: 'mul', maxN: 20, avoid: [3, 6, 7, 10, 12, 18, 25] });

    /* ---- Explore: collapse Z_n by the ideal <d> ---- */
    (function () {
      var box = document.getElementById('d29-collapse');
      var inN = A.h('input', { type: 'number', min: 2, max: 30, step: 1, value: 9, id: 'd29-cn',
        class: 'a308-num', 'aria-label': 'n, from 2 to 30' });
      var selD = A.h('select', { id: 'd29-cd', 'aria-label': 'divisor d of n' });
      var pics = A.h('div', { class: 'd29-pics' });
      var out = A.h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
      box.appendChild(A.h('div', { class: 'ctl-row' }, [
        A.h('div', { class: 'ctl' }, [A.h('label', { for: 'd29-cn', text: 'n' }), inN]),
        A.h('div', { class: 'ctl' }, [A.h('label', { for: 'd29-cd', text: 'd' }), selD])
      ]));
      box.appendChild(pics);
      box.appendChild(out);

      function hue(r, d) { return 'hsl(' + Math.round(360 * r / d) + ', 65%, 42%)'; }

      function dotRing(count, labelOf, colorOf, title) {
        var S = 300, cx = 150, cy = 150, R = 115, small = count > 12;
        var svg = A.svg('svg', { viewBox: '0 0 ' + S + ' ' + S, class: 'a308-clock', role: 'img', 'aria-label': title });
        for (var i = 0; i < count; i++) {
          var t = -Math.PI / 2 + 2 * Math.PI * i / count;
          var x = (cx + R * Math.cos(t)).toFixed(1), y = (cy + R * Math.sin(t)).toFixed(1);
          svg.appendChild(A.svg('circle', { cx: x, cy: y, r: small ? 9 : 13, fill: colorOf(i), stroke: '#333', 'stroke-width': 1 }));
          svg.appendChild(A.svg('text', { x: x, y: (Number(y) + 4).toFixed(1), text: String(labelOf(i)),
            style: 'fill:#fff;font-size:' + (small ? 9 : 12) + 'px;text-anchor:middle;font-weight:bold' }));
        }
        return svg;
      }

      function fillD(n) {
        var keep = Number(selD.value), ds = [];
        for (var d = 2; d <= n; d++) if (n % d === 0) ds.push(d);
        selD.innerHTML = '';
        ds.forEach(function (x) { selD.appendChild(A.h('option', { value: x, text: '⟨' + x + '⟩' })); });
        selD.value = String(ds.indexOf(keep) >= 0 ? keep : (ds.indexOf(5) >= 0 ? 5 : ds[0]));
      }

      function update() {
        var n = Math.round(Number(inN.value));
        pics.innerHTML = '';
        if (!(n >= 2 && n <= 30)) { out.innerHTML = 'Pick a whole number from 2 to 30.'; return; }
        if (AVOID_N.indexOf(n) >= 0) { out.innerHTML = NOTE; return; }
        fillD(n);
        var d = Number(selD.value);
        var main = dotRing(n, function (i) { return i; }, function (i) { return hue(i % d, d); },
          'The integers mod ' + n + ', coloured by remainder mod ' + d);
        var quot = dotRing(d, function (r) { return r; }, function (r) { return hue(r, d); },
          'The quotient, one point for each colour');
        pics.appendChild(A.h('div', { class: 'a308-clock-wrap' }, [main]));
        pics.appendChild(A.h('div', { class: 'a308-clock-wrap' }, [quot]));
        out.innerHTML = '\\(\\langle ' + d + ' \\rangle\\) is the set of multiples of ' + d + ' in \\(\\mathbb Z_{' + n +
          '}\\), so it has ' + (n / d) + ' elements. Each colour is one coset: the numbers with the same remainder mod ' +
          d + '. There are ' + d + ' colours, so collapsing each one to a point leaves a quotient with ' + d + ' elements.';
        A.typeset(box);
      }
      inN.addEventListener('input', update);
      selD.addEventListener('change', update);
      update();
    })();

    /* ---- Explore: the ideals of Z_n, with their marks ---- */
    (function () {
      var box = document.getElementById('d29-ideals');
      var inN = A.h('input', { type: 'number', min: 2, max: 30, step: 1, value: 30, id: 'd29-in',
        class: 'a308-num', 'aria-label': 'n, from 2 to 30' });
      var presets = [8, 15, 20, 30].map(function (v) {
        return A.h('button', { type: 'button', class: 'btn411 ghost', text: String(v),
          onclick: function () { inN.value = v; update(); } });
      });
      var tbl = A.h('div', { class: 'a308-cayley-wrap' });
      var out = A.h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
      box.appendChild(A.h('div', { class: 'ctl-row' },
        [A.h('div', { class: 'ctl' }, [A.h('label', { for: 'd29-in', text: 'n' }), inN])].concat(presets)));
      box.appendChild(tbl);
      box.appendChild(out);

      function update() {
        var n = Math.round(Number(inN.value));
        tbl.innerHTML = '';
        if (!(n >= 2 && n <= 30)) { out.innerHTML = 'Pick a whole number from 2 to 30.'; return; }
        if (AVOID_N.indexOf(n) >= 0) { out.innerHTML = NOTE; return; }
        var R = A.ringZn(n);
        var head = A.h('tr', null, ['ideal', 'elements in it', 'cosets', 'status'].map(function (t) {
          return A.h('th', { scope: 'col', text: t });
        }));
        var body = A.h('tbody');
        R.ideals.forEach(function (I) {
          var d = I.index, size = I.elements.length;
          var elems = d === 1 ? 'all of ℤ' + A.sub(n)
            : (size <= 10 ? '{' + I.elements.join(', ') + '}' : 'multiples of ' + d);
          var status = d === 1 ? 'not proper' : (I.maximal ? 'maximal and prime' : 'proper, neither');
          var cls = d === 1 ? '' : (I.maximal ? 'unit' : 'zd');
          body.appendChild(A.h('tr', null, [
            A.h('th', { scope: 'row', class: cls, text: '⟨' + d + '⟩' }),
            A.h('td', { text: elems }),
            A.h('td', { text: String(n / size) }),
            A.h('td', { text: status })
          ]));
        });
        tbl.appendChild(A.h('table', { class: 'a308-cayley small' }, [A.h('thead', null, [head]), body]));
        out.innerHTML = 'Green rows are maximal ideals, and each is also prime. Orange rows are proper, but neither ' +
          'prime nor maximal. Compare each row\'s cosets with its status.';
        A.typeset(box);
      }
      inN.addEventListener('input', update);
      update();
    })();
  })();
</script>
