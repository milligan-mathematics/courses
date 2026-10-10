---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 10: Even Shuffles, Odd Shuffles"
day: 10
chapter_number: 5
chapter: "Permutation Groups"
day_title: "Even Shuffles, Odd Shuffles"
blurb: "Every shuffle can be built from swaps, and the number of swaps has a parity that never changes, however you count them. That one fact makes the even permutations a group, the alternating group A_n sitting inside S_n."
reading: "Chapter 5, Day 2: the rest of Section 5.1, from even and odd permutations through the alternating groups A_n"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Twelve elements, three colors</h2>

  <p>Judson's theorem says no permutation is both even and odd. So the even permutations of \(\{1, 2, \ldots, n\}\) form
    a group, the alternating group \(A_n\), inside \(S_n\). Take \(n = 4\): the even permutations of
    \(\{1, 2, 3, 4\}\) form \(A_4\). Before you look at the table, sort its elements by cycle form. Which one is the identity? Which are products of two disjoint
    transpositions? Which are 3-cycles? The order of an element is the number of times you must multiply it by itself
    to get back to the identity. Predict the order of each kind.</p>

  <div id="d10-a4"></div>

  <p>Each cell is colored by the order of the element it names. Every element appears exactly once in each row, so
    counting the colors in one row gives the number of elements of each order. Clicking a header is turned off on this
    table, so the colors and your own multiplication are the evidence. Does the count match your prediction?</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Odd times odd</h2>

  <p>Judson defines a permutation to be even if it can be written as an even number of transpositions, and odd if it can
    be written as an odd number. Yesterday's formula helps with counting: a \(k\)-cycle is a product of \(k - 1\)
    transpositions. The widget reports the parity of \(\sigma\), of \(\tau\), and of \(\sigma\tau\) directly, so use it
    to check your counting, not to replace it. Predict all three before you type. Start with
    \(\sigma = (1\,4\,6\,2)\) and \(\tau = (3\,5\,2)\). Then keep \(\sigma\), change \(\tau\) to
    \((1\,5)(3\,7\,6)\), and predict again.</p>

  <div id="d10-parity"></div>

  <p>Your predictions are the test. If the widget disagrees with one, find the factor you counted wrong before you go on.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The order of a product of cycles</h2>

  <p>The order of a permutation is the number of times you must apply it to get back to the identity. For a single
    cycle, the order is its length. For a product of disjoint cycles, a common first guess is the sum of the lengths.
    Before you type, predict the order of \((1\,2\,4\,5)(3\,6)\), and say whether your guess is the sum of the two
    lengths. Type it into \(\sigma\) and leave \(\tau\) at \((1)\).</p>

  <div id="d10-order"></div>

  <p>If the widget disagrees with you, apply \((1\,2\,4\,5)(3\,6)\) to a number a few times by hand. Follow the two
    cycles separately. They return to their starting points at different times.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Which ones are even</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Which of these permutations is odd?</p>
    <button class="mc-opt" data-key="a">\((1\,2\,3)\)</button>
    <button class="mc-opt" data-key="b">\((1\,2)(3\,4)\)</button>
    <button class="mc-opt" data-key="c">\((1\,2\,3\,4)\)</button>
    <button class="mc-opt" data-key="d">\((1\,2\,3)(4\,5\,6)\)</button>
    <div class="mc-fb" data-key="a"><p>\((1\,2\,3) = (1\,3)(1\,2)\) is two transpositions, an even number. Even.</p></div>
    <div class="mc-fb" data-key="b"><p>\((1\,2)\) is one swap and \((3\,4)\) is one more, so the total is two swaps. An even
      number of swaps. Even.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. \((1\,2\,3\,4) = (1\,4)(1\,3)(1\,2)\), three transpositions, an odd number.</p></div>
    <div class="mc-fb" data-key="d"><p>Each 3-cycle is two transpositions. Four in total is even, so this one is even.</p></div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Let \(\sigma\) and \(\tau\) both be odd. What is \(\sigma\tau\)?</p>
    <button class="mc-opt" data-key="a">Even.</button>
    <button class="mc-opt" data-key="b">Odd.</button>
    <button class="mc-opt" data-key="c">The identity, always.</button>
    <button class="mc-opt" data-key="d">It depends on which two you chose.</button>
    <div class="mc-fb" data-key="a"><p>Right. An odd number of transpositions for \(\sigma\), and another odd number for
      \(\tau\), gives an even total. Simplest case: \((1\,2)(1\,2) = (1)\), which is even.</p></div>
    <div class="mc-fb" data-key="b"><p>Odd plus odd is even, not odd. Count the transpositions: the total is an odd number
      plus an odd number.</p></div>
    <div class="mc-fb" data-key="c"><p>The product was the identity in \((1\,2)(1\,2)\), but that is one example.
      \((1\,2)(1\,3) = (1\,3\,2)\) is another, and it is not the identity.</p></div>
    <div class="mc-fb" data-key="d"><p>It doesn't depend on the choice. Every odd permutation has an odd number of
      transpositions, so any two together have an even number.</p></div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">How many elements does \(A_4\) have?</p>
    <button class="mc-opt" data-key="a">\(4\)</button>
    <button class="mc-opt" data-key="b">\(6\)</button>
    <button class="mc-opt" data-key="c">\(12\)</button>
    <button class="mc-opt" data-key="d">\(24\)</button>
    <div class="mc-fb" data-key="a"><p>\(4\) is the number of points being permuted, not the size of the group.</p></div>
    <div class="mc-fb" data-key="b"><p>\(6\) is the number of transpositions in \(S_4\). They are all odd, so none of them is in
      \(A_4\).</p></div>
    <div class="mc-fb" data-key="c"><p>Right. Exactly half of the \(24\) permutations in \(S_4\) are even, which is
      Judson's proposition on equal numbers of even and odd permutations.</p></div>
    <div class="mc-fb" data-key="d"><p>\(24\) is all of \(S_4\). Half of those are odd and not in \(A_4\).</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>No permutation is both even and odd</h2>

  <p>This is Judson's theorem; its proof uses his lemma about the identity. Walk the even case one step at a time.
    Suppose \(\sigma = \sigma_1\cdots\sigma_m\) with \(m\) even, and also \(\sigma = \tau_1\cdots\tau_n\). We want
    \(n\) to be even.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">If \(n\) were odd, what would the two expressions for \(\sigma\) say about \(\sigma\)?</div>
        <div class="sstep-body"><p>That \(\sigma\) is both even and odd. So the goal is to show \(n\) is even.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Each transposition is its own inverse. Use that to write the identity using the
          \(\sigma_i\) on the left and the \(\tau_j\) on the right.</div>
        <div class="sstep-body"><p>Since \(\sigma = \tau_1\cdots\tau_n\), we get
          \(\sigma_1\cdots\sigma_m\,\tau_n\cdots\tau_1 = \tau_1\cdots\tau_n\,\tau_n\cdots\tau_1 = \mathrm{id}\). The last
          equality holds because the middle pair \(\tau_n\tau_n\) cancels, then \(\tau_{n-1}\tau_{n-1}\), and so on.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">How many transpositions are on the left of that equation?</div>
        <div class="sstep-body"><p>There are \(m\) of the \(\sigma_i\) and \(n\) of the \(\tau_j\), so \(m + n\) in all.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">The lemma says the identity, written with \(r\) transpositions, always has \(r\) even.
          What does that say here?</div>
        <div class="sstep-body"><p>\(m + n\) is even.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">We were told \(m\) is even. What follows about \(n\)?</div>
        <div class="sstep-body"><p>\(n\) is even. So \(\sigma\) cannot also be a product of an odd number of transpositions,
          and no permutation is both even and odd.</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Two swaps undo one</h2>

  <p>A classmate claims that every permutation of order 2 is even. Here is the argument. The common misconception behind
    it is that a single swap feels like one clean move, so it must count as even. Judson's definition counts the
    transpositions, not the moves.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Let \(\sigma\) have order \(2\), so \(\sigma^2 = \mathrm{id}\).</button>
      <button class="fline" type="button">Then every cycle of \(\sigma\) has length \(1\) or \(2\), because a cycle of length \(k\) returns to its start only after \(k\) steps.</button>
      <button class="fline" type="button">So \(\sigma\) is a product of disjoint cycles of length \(1\) and \(2\), that is, of disjoint transpositions.</button>
      <button class="fline" type="button">Each transposition is an even permutation, since a swap of two numbers is undone by a second swap.</button>
      <button class="fline" type="button">A product of even permutations is even, so \(\sigma\) is even.</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> This is the definition of order, applied to \(\sigma\).</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> A cycle of length \(k\) comes back after \(k\) steps, and
      \(\sigma^2 = \mathrm{id}\) forces \(k\) to be \(1\) or \(2\).</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>Fine.</strong> Disjoint cycles of length \(2\) are transpositions, and
      the fixed points are length \(1\) cycles.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>This is the flaw.</strong> A transposition is odd: it is a product
      of one transposition, and one is an odd number. Two swaps in a row give the identity, which is a different
      permutation, so they don't make the first swap even. Counterexample: \((1\,2)\) has order \(2\) and is odd.</p></div>
    <div class="flaw-verdict" data-key="5"><p><strong>Fine as a deduction.</strong> \(A_n\) is closed under products. The
      trouble is the line before it, not this one.</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The lemma that the identity has an even number of transpositions carries most of the weight. If the lemma were
      false, what would go wrong with the definition of an even permutation?</li>
    <li>Judson's proof that \(A_n\) is half of \(S_n\) multiplies by a fixed transposition. What would happen if you
      multiplied every even permutation by a 3-cycle instead? Would the map still land in the odd permutations?</li>
    <li>Without counting transpositions one at a time, how could you read the parity of a permutation from its cycles?
      Test your idea on \((1\,2\,3\,4)(5\,6)\) before you commit to it.</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;

    // The homework products from Exercises 1 to 3, as typed, cycles only (the same list as day 9).
    // The widget refuses each one, every split of it into two typed factors, and each set against
    // the identity. See checks/check_day_10.js, which runs this same code.
    var HW = [
      '(1 2 4 5 3)', '(1 4)(3 5)', '(1 3)(2 5)', '(2 4)',
      '(1 3 4 5)(2 3 4)', '(1 2)(1 2 5 3)', '(1 4 3)(2 3)(2 4)', '(1 4 2 3)(3 4)(5 6)(1 3 2 4)',
      '(1 2 5 4)(1 3)(2 5)', '(1 2 5 4)(1 3)(2 5)(2 5)', '(1 2 5 4)(1 3)',
      '(1 4 5 2)(1 2 3)(4 5)(1 2 5 4)',
      '(1 2 5 4)(1 2 5 4)(1 2 3)(4 5)', '(1 5)(2 4)(1 2 3)(4 5)',
      '(1 2 3)(4 5)(1 4 5 2)(1 4 5 2)', '(1 2 3)(4 5)(1 5)(2 4)',
      '(1 2 5 4)(1 2 5 4)(1 2 5 4)(1 2 5 4)', '(1 2 5 4)', '(1 2 5 4)(1 2 5 4)', '(1 5)(2 4)',
      '(1 2)', '(1 7 3 5 2)', '(4 7)(1 2)(3 4)(1 2)', '(4 7 6)(1 5 3 2)',
      '(1 4 3 5 6)', '(1 5 6)(2 3 4)', '(1 4 2 6)(1 4 2)', '(1 7 2 5 4)(1 4 2 3)(1 5 4 6 3 2)', '(1 4 2 6 3 7)'
    ];
    function avoidFor(words) {
      var out = [];
      words.forEach(function (w) {
        var F = w.match(/\([^)]*\)/g), all = F.join(''), spaced = F.join(' ');
        for (var k = 1; k < F.length; k++) {
          out.push([F.slice(0, k).join(''), F.slice(k).join('')]);
          out.push([F.slice(0, k).join(' '), F.slice(k).join(' ')]);
        }
        ['(1)', 'id'].forEach(function (I) { out.push([all, I], [I, all], [spaced, I], [I, spaced]); });
      });
      return out;
    }
    var AVOID = avoidFor(HW);

    A.cayley('d10-a4', { group: A.A(4), color: 'order', clickable: false, showPowers: false,
      caption: 'A4, each cell colored by the order of the element it names' });
    A.perm('d10-parity', { n: 7, sigma: '(1)', tau: '(1)', avoid: AVOID });
    A.perm('d10-order', { n: 6, sigma: '(1)', tau: '(1)', avoid: AVOID });
  })();
</script>
