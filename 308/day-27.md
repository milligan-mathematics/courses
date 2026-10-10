---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 27: Abelian Groups in Pieces"
day: 27
chapter_number: 13
chapter: "The Structure of Groups"
day_title: "Abelian Groups in Pieces"
blurb: "Every finite abelian group is a product of cyclic groups whose orders are prime powers. Split an order into its prime powers, count the ways the pieces can glue together, and then test whether two of the glued groups really are different."
reading: "Chapter 13, Day 1: Section 13.1 (finite abelian groups), and the first part of 13.2 (composition series and solvable groups)"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Count the pieces</h2>

  <p>Section 13.1 opens with the claim that every finite abelian group is isomorphic to a direct product of
    cyclic groups of prime-power order. Judson's example with a group of order \(540\) works one order out by hand. The widget below runs
    the same method for any order from \(2\) to \(150\).</p>

  <p>The widget opens at \(n = 100\). Before you enter \(n = 36\), predict how many abelian groups of order \(36\) are there, up to
    isomorphism? Which of them is cyclic? Write down the prime factorization first, since the widget starts from it.</p>

  <div id="d27-explorer"></div>

  <p>Now read the element-order rows. The reading proves that the decomposition exists; the rows are the evidence that two listed groups really differ. Two groups can have the same number of elements of order \(3\) and still be
    different. Find such a pair. Which order tells them apart?</p>

  <p class="a308-note">A few orders are held back because they are on the homework.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Gluing two cyclic groups</h2>

  <p>Section 13.1 starts with a fact you can test: \(\mathbb Z_{mn} \cong \mathbb Z_m \times \mathbb Z_n\) when
    \(\gcd(m,n) = 1\). Choose two factors and predict whether \(\mathbb Z_m \times \mathbb Z_n\) is cyclic. The readout
    gives the largest order of an element, and a cyclic group of order \(k\) has an element of order \(k\).</p>

  <div id="d27-glue"></div>

  <p>Predict the answer for \((2,3)\), \((2,4)\), \((3,3)\) and \((4,5)\) before you read the readout. Then state a
    rule for which pairs glue into a cyclic group, and test it on a pair you have not tried.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Count and identify</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">How many abelian groups of order \(27\) are there, up to isomorphism?</p>
    <button class="mc-opt" data-key="a">Two: \(\mathbb Z_{27}\), and \(\mathbb Z_3 \times \mathbb Z_3 \times \mathbb Z_3\), the two extremes.</button>
    <button class="mc-opt" data-key="b">Three: \(\mathbb Z_{27}\), \(\mathbb Z_9 \times \mathbb Z_3\), and \(\mathbb Z_3 \times \mathbb Z_3 \times \mathbb Z_3\).</button>
    <button class="mc-opt" data-key="c">Four: the three above, plus \(\mathbb Z_{81}\), which has order \(81\).</button>
    <button class="mc-opt" data-key="d">One: a group of prime-power order must be cyclic.</button>
    <div class="mc-fb" data-key="a"><p>You have the two extremes but missed the middle one. The exponent \(3\) can also
      split as \(2 + 1\), which gives \(\mathbb Z_9 \times \mathbb Z_3\).</p></div>
    <div class="mc-fb" data-key="b"><p>Right. The exponent \(3\) splits three ways: as \(3\), as \(2 + 1\), or as
      \(1 + 1 + 1\). Each split gives one group, and their element-order counts all differ.</p></div>
    <div class="mc-fb" data-key="c"><p>\(\mathbb Z_{81}\) has order \(81\), not \(27\). Check the order of every group
      before you count it.</p></div>
    <div class="mc-fb" data-key="d"><p>Prime-power order does not force a cyclic group. \(\mathbb Z_3 \times \mathbb Z_3
      \times \mathbb Z_3\) has order \(27\) and no element of order \(27\).</p></div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">\(\mathbb Z_4\) and \(\mathbb Z_2 \times \mathbb Z_2\) both have order \(4\). Which element-order
      fact tells them apart?</p>
    <button class="mc-opt" data-key="a">Both groups have three elements of order \(2\).</button>
    <button class="mc-opt" data-key="b">\(\mathbb Z_2 \times \mathbb Z_2\) has an element of order \(4\), but \(\mathbb Z_4\) has none.</button>
    <button class="mc-opt" data-key="c">\(\mathbb Z_4\) has an element of order \(4\), but \(\mathbb Z_2 \times \mathbb Z_2\) has none.</button>
    <button class="mc-opt" data-key="d">Each group has exactly one element of order \(2\).</button>
    <div class="mc-fb" data-key="a"><p>Only \(\mathbb Z_2 \times \mathbb Z_2\) has three elements of order \(2\). In
      \(\mathbb Z_4\) the only one is \(2\) itself.</p></div>
    <div class="mc-fb" data-key="b"><p>Reversed. Every nonidentity element of \(\mathbb Z_2 \times \mathbb Z_2\) has order
      \(2\), because adding any element to itself gives \(0\). The element \(1\) of \(\mathbb Z_4\) has order \(4\).</p></div>
    <div class="mc-fb" data-key="c"><p>Right. The element \(1\) generates \(\mathbb Z_4\), so \(\mathbb Z_4\) is cyclic.
      Every element of \(\mathbb Z_2 \times \mathbb Z_2\) has order \(1\) or \(2\), so that group is not cyclic.</p></div>
    <div class="mc-fb" data-key="d"><p>\(\mathbb Z_2 \times \mathbb Z_2\) has three elements of order \(2\), one for each
      of its nonzero elements. \(\mathbb Z_4\) has only one, namely \(2\).</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Splitting off the prime parts</h2>

  <p>Judson's lemma in 13.1 is the first half of the work toward the Fundamental Theorem. Let \(G\) be a finite abelian
    group of order \(n = p_1^{\alpha_1} \cdots p_k^{\alpha_k}\), with distinct primes. Let \(G_i\) be the elements whose
    order is a power of \(p_i\). The lemma says \(G\) is the internal direct product of \(G_1, \ldots, G_k\).</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Why is \(G_i\) a subgroup? Where do you need \(G\) to be abelian?</div>
        <div class="sstep-body"><p>If \(g^{p_i^r} = 1\) and \(h^{p_i^s} = 1\), let \(t = \max(r, s)\). Commutativity
          lets you write \((gh)^{p_i^t} = g^{p_i^t} h^{p_i^t} = 1\). Inverses have the same order as the elements they
          invert. Without commutativity the middle equation fails.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Take \(g \in G\) with \(|g| = p_1^{\beta_1} \cdots p_k^{\beta_k}\), and let \(a_i = |g| / p_i^{\beta_i}\).
          Why are there integers \(b_i\) with \(a_1 b_1 + \cdots + a_k b_k = 1\)?</div>
        <div class="sstep-body"><p>A prime dividing every \(a_i\) would have to be some \(p_j\), but \(a_j\) has no
          factor \(p_j\). So the \(a_i\) have gcd \(1\), and Bézout gives the \(b_i\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Write \(g = g^{a_1 b_1} \cdots g^{a_k b_k}\). Why does each factor lie in \(G_i\)?</div>
        <div class="sstep-body"><p>\((g^{a_i b_i})^{p_i^{\beta_i}} = g^{b_i |g|} = e\), so the order of \(g^{a_i b_i}\)
          divides \(p_i^{\beta_i}\), a power of \(p_i\). Every element is a product with one factor from each \(G_i\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Suppose \(x \in G_1\) is also a product \(g_2 \cdots g_k\) with \(g_i \in G_i\). Why must \(x = e\)?</div>
        <div class="sstep-body"><p>Let \(m = p_2^{\alpha_2} \cdots p_k^{\alpha_k}\). Each \(g_i^{m} = e\), since
          \(p_i^{\alpha_i}\) divides \(m\). Commutativity gives \(x^m = g_2^m \cdots g_k^m = e\). The order of \(x\) is a
          power of \(p_1\) that divides \(m\), and \(m\) has no factor \(p_1\). So \(x\) has order \(1\).</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Same order, same group?</h2>

  <p>A classmate argues that \(\mathbb Z_8 \cong \mathbb Z_4 \times \mathbb Z_2\). Here is the argument.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Both groups are finite, abelian, and have order \(8\).</button>
      <button class="fline" type="button">By the Fundamental Theorem, each is a product of cyclic groups of prime-power order.</button>
      <button class="fline" type="button">Both are products of cyclic \(2\)-groups whose orders multiply to \(8\), so they are two ways of writing the same product.</button>
      <button class="fline" type="button">Therefore \(\mathbb Z_8 \cong \mathbb Z_4 \times \mathbb Z_2\). \(\blacksquare\)</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> Both groups have order \(8\), since \(|\mathbb Z_4 \times \mathbb Z_2| = 4 \cdot 2\).</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> This is the existence half of the theorem, and both groups fit it.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>This is the flaw.</strong> The same order does not make two products
      the same. Here \(\mathbb Z_8\) is one piece, \(\mathbb Z_{2^3}\), while the other is \(\mathbb Z_{2^2} \times \mathbb Z_2\).
      They really differ: \(\mathbb Z_8\) has an element of order \(8\), and \(\mathbb Z_4 \times \mathbb Z_2\) has largest
      element order \(4\). Check both on the explorer with \(n = 8\).</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine as a deduction from line 3.</strong> The conclusion fails
      only because line 3 does.</p></div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>A chain of subgroups with simple steps</h2>

  <p>Section 13.2 asks for a subnormal series whose factor groups are all simple, a composition series. Judson's
    \(\mathbb Z_{60}\) example shows that such a series need not be unique, though its factors always form the same list.
    Here is \(\mathbb Z_{30}\). Every subgroup of an abelian group is normal, so every chain of subgroups is a normal series. The lattice draws all eight subgroups. Its rows group them by how many prime factors their orders have, and each row label gives the orders, so the drawing is a cube with \(\{0\}\) at the bottom and \(\mathbb Z_{30}\) at the top.</p>

  <p>Predict before you click: what must each factor group be for the series to be composition? Find a chain from the
    top down to \(\{0\}\) that works, and one that fails. Name the factor that isn't simple in the failing chain. The
    readout gives each subgroup's order and index.</p>

  <div id="d27-lattice"></div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Simple steps and solvable groups</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which statement about composition series is true?</p>
    <button class="mc-opt" data-key="a">Every group has one, since you can always refine a chain of subgroups.</button>
    <button class="mc-opt" data-key="b">A composition series is a subnormal series whose factor groups are all simple.</button>
    <button class="mc-opt" data-key="c">Every factor group in a composition series must be abelian.</button>
    <button class="mc-opt" data-key="d">A composition series is a normal series, with every term normal in the whole group.</button>
    <div class="mc-fb" data-key="a"><p>Not every group has one. Judson's example is \(\mathbb Z\). Its first step from
      \(\{0\}\) is \(k\mathbb Z \cong \mathbb Z\), which has proper nontrivial subgroups, so no factor can be simple.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. That is Judson's definition. Each term is normal in the term above it, and
      each factor has no normal subgroups except the trivial ones.</p></div>
    <div class="mc-fb" data-key="c"><p>Simple groups need not be abelian. \(A_5\) is simple and not abelian. Abelian
      factors are the condition for solvability, a different property.</p></div>
    <div class="mc-fb" data-key="d"><p>Close, but a normal series needs every term normal in the whole group. A subnormal
      series only needs each term normal in the one above it, and a composition series is subnormal.</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Why is \(\mathbb Z_{30}\) solvable?</p>
    <button class="mc-opt" data-key="a">Because \(30\) is not a prime power.</button>
    <button class="mc-opt" data-key="b">Because the series \(\mathbb Z_{30} \supset \{0\}\) has one abelian factor.</button>
    <button class="mc-opt" data-key="c">Because it has a composition series with simple factors.</button>
    <button class="mc-opt" data-key="d">Because it is cyclic, and cyclic groups are the only solvable ones.</button>
    <div class="mc-fb" data-key="a"><p>Solvability does not depend on how the order factors. Every abelian group is
      solvable, including \(\mathbb Z_4 \times \mathbb Z_2\), whose order \(8\) is a prime power.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. Solvable means some subnormal series has abelian factors. Here that series
      is \(\mathbb Z_{30} \supset \{0\}\), and its only factor is \(\mathbb Z_{30}\) itself. The same argument works for
      every abelian group.</p></div>
    <div class="mc-fb" data-key="c"><p>True of \(\mathbb Z_{30}\), but not the reason. \(A_5\) has a composition series with simple
      factors, yet it is not solvable. It is simple and nonabelian, so its only subnormal series, ignoring repeated
      terms, is \(\{e\} \subset A_5\), and that factor is nonabelian.</p></div>
    <div class="mc-fb" data-key="d"><p>Not true. \(\mathbb Z_2 \times \mathbb Z_2\) is abelian, so it is solvable, but it
      is not cyclic.</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Judson's example with a group of order \(540\) lists six groups. Explain why no two of them can be isomorphic. Which property
      of a group would you check first, and why would it not change under an isomorphism?</li>
    <li>The splitting lemma needs the primes to be distinct. Take a group of order \(9\), such as \(\mathbb Z_3 \times
      \mathbb Z_3\), and say what the lemma can and cannot tell you about it.</li>
    <li>\(\mathbb Z\) has no composition series, yet it is solvable. Which of the two definitions does \(\mathbb Z\)
      satisfy, and why do the two notions come apart?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;
    // Held back: 12 and 48 (Ch 13 Ex 4 groups), 200 and 720 (Ch 13 Ex 2, 3), 72 and 108 (the same exponent
    // pattern as 200), 144 (the groups of 720 without their Z_5 factor), 18 and 25 (Ch 16 Ex 4).
    // The gluing widget uses the same list on its products.
    var AVOID_ORDERS = [12, 18, 25, 48, 72, 108, 144, 200, 720];
    var NOTE = 'That one is on your homework, so this page won’t do it for you. Work it by hand, then bring it to class — or try a different input here.';

    /* ---- Explorer: abelian groups of order n ---- */
    (function () {
      var el = document.getElementById('d27-explorer');

      function factor(n) {
        var out = [], m = n;
        for (var p = 2; p * p <= m; p++) {
          if (m % p === 0) { var e = 0; while (m % p === 0) { m /= p; e++; } out.push([p, e]); }
        }
        if (m > 1) out.push([m, 1]);
        return out;
      }
      // Partitions of e, largest part first: 3 gives [3], [2,1], [1,1,1].
      function partitions(e, cap) {
        cap = cap || e;
        if (e === 0) return [[]];
        var res = [];
        for (var k = Math.min(e, cap); k >= 1; k--) {
          partitions(e - k, k).forEach(function (rest) { res.push([k].concat(rest)); });
        }
        return res;
      }
      // One partition for each prime gives one group, written as a list of [p, k] pieces Z_{p^k}.
      function groupsOf(n) {
        var combos = [[]];
        factor(n).forEach(function (pe) {
          var next = [];
          combos.forEach(function (c) {
            partitions(pe[1]).forEach(function (lam) { next.push(c.concat(lam.map(function (k) { return [pe[0], k]; }))); });
          });
          combos = next;
        });
        return combos;
      }
      function piece(p, k) { return k === 1 ? '\\mathbb Z_{' + p + '}' : '\\mathbb Z_{' + p + '^{' + k + '}}'; }
      function build(parts) {
        var G = null;
        parts.forEach(function (pk) { var Zi = A.Z(Math.pow(pk[0], pk[1])); G = G ? A.product(G, Zi) : Zi; });
        return G;
      }
      function countLine(G) {
        var c = G.orderCounts();
        return Object.keys(c).map(Number).sort(function (a, b) { return a - b; })
          .map(function (o) { return 'order ' + o + ': ' + c[o]; }).join(' · ');
      }

      var input = A.h('input', { type: 'number', min: 2, max: 150, step: 1, value: 100, id: 'd27-n',
        class: 'a308-num', 'aria-label': 'order n, from 2 to 150' });
      var out = A.h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
      var detail = A.h('div', { class: 'd27-detail' });
      var presets = [36, 60, 90, 100].map(function (v) {
        return A.h('button', { type: 'button', class: 'btn411 ghost', text: String(v),
          onclick: function () { input.value = v; update(); } });
      });
      el.appendChild(A.h('div', { class: 'ctl-row' },
        [A.h('div', { class: 'ctl' }, [A.h('label', { for: 'd27-n', text: 'order n' }), input])].concat(presets)));
      el.appendChild(out);
      el.appendChild(detail);

      function update() {
        var n = Math.round(Number(input.value));
        detail.innerHTML = '';
        if (AVOID_ORDERS.indexOf(n) >= 0) { out.innerHTML = NOTE; return; }
        if (!(n >= 2 && n <= 150)) { out.innerHTML = 'Pick a whole number from 2 to 150.'; return; }
        var fac = factor(n);
        var facTeX = fac.map(function (pe) { return pe[0] + (pe[1] > 1 ? '^{' + pe[1] + '}' : ''); }).join(' \\cdot ');
        out.innerHTML = '\\(' + n + ' = ' + facTeX + '\\). Split each exponent into parts. Each combination of splits, ' +
          'one per prime, is one abelian group of order ' + n + '.';
        var splits = fac.map(function (pe) {
          var parts = partitions(pe[1]).map(function (lam) { return '\\(' + lam.join(' + ') + '\\)'; }).join(', ');
          return '<p>The exponent ' + pe[1] + ' of \\(' + pe[0] + '\\) splits as ' + parts + '.</p>';
        }).join('');
        var groups = groupsOf(n);
        var items = groups.map(function (parts) {
          var G = build(parts);
          var label = parts.map(function (pk) { return piece(pk[0], pk[1]); }).join(' \\times ');
          return '<li><div>\\(' + label + '\\)' + (G.isCyclic() ? ' <strong>(cyclic)</strong>' : '') +
            '</div><div class="mono">' + countLine(G) + '</div></li>';
        }).join('');
        detail.innerHTML = splits + '<p>Groups of order ' + n + ': ' + groups.length + '.</p>' +
          '<ol class="a308-steps">' + items + '</ol>';
        A.typeset(el);
      }
      input.addEventListener('input', update);
      update();
    })();

    /* ---- Gluing two cyclic groups ---- */
    (function () {
      var box = document.getElementById('d27-glue');
      var vals = [2, 3, 4, 5, 7];
      function pick(id, label, def) {
        var s = A.h('select', { id: id, 'aria-label': label }, vals.map(function (v) {
          return A.h('option', { value: v, text: 'ℤ' + A.sub(v) });
        }));
        s.value = String(def);
        return s;
      }
      var s1 = pick('d27-m', 'first factor', 3), s2 = pick('d27-k', 'second factor', 5);
      var out = A.h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
      box.appendChild(A.h('div', { class: 'ctl-row' }, [
        A.h('div', { class: 'ctl' }, [A.h('label', { for: 'd27-m', text: 'first factor' }), s1]),
        A.h('div', { class: 'ctl' }, [A.h('label', { for: 'd27-k', text: 'second factor' }), s2])
      ]));
      box.appendChild(out);

      function update() {
        var m = Number(s1.value), k = Number(s2.value), size = m * k;
        if (AVOID_ORDERS.indexOf(size) >= 0) { out.innerHTML = NOTE; return; }
        var G = A.product(A.Z(m), A.Z(k));
        var c = G.orderCounts();
        var largest = Math.max.apply(null, Object.keys(c).map(Number));
        out.innerHTML = '\\(\\mathbb Z_{' + m + '} \\times \\mathbb Z_{' + k + '}\\) has ' + size +
          ' elements, and its largest element order is <strong>' + largest + '</strong>. ' +
          (G.isCyclic()
            ? 'Some element has order ' + size + ', so the group is <strong>cyclic</strong>.'
            : 'No element has order ' + size + ', so the group is <strong>not cyclic</strong>.');
        A.typeset(box);
      }
      s1.addEventListener('change', update);
      s2.addEventListener('change', update);
      update();
    })();

    /* ---- Composition series in Z_30: the subgroup lattice ---- */
    A.lattice('d27-lattice', { group: A.Z(30) });
  })();
</script>
