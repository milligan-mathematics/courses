---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 2: Remainders All the Way Down"
day: 2
chapter_number: 2
chapter: "The Integers"
day_title: "Remainders All the Way Down"
blurb: "Chapter 2 is the arithmetic under the rest of the book. Divide with remainders, run the remainders backward, and you can write a gcd as a combination of the numbers you started with. The same ideas force every integer to factor into primes in exactly one way, up to order."
reading: "Chapter 2, Day 1: Sections 2.1 and 2.2, from induction through the Fundamental Theorem of Arithmetic"
---

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Induction and well-ordering</h2>

  <p>Judson's first section rests on two principles. Induction: if \(S(n_0)\) holds, and \(S(k)\) implies \(S(k+1)\) for every \(k \ge n_0\), then \(S(n)\) holds for every \(n \ge n_0\). Well-ordering: every nonempty subset of \(\mathbb{N}\) has a least element. Judson proves that induction implies well-ordering. The converse is left to the exercises.</p>

  <p>Well-ordering does the heavy lifting in the next section. It lets you pick the smallest of a set of remainders, and that smallest one is the remainder you want.</p>

  <div class="mc" data-answer="c">
    <p class="mc-q">In an induction proof that \(P(n)\) holds for all \(n \ge 1\), what may you assume in the inductive step?</p>
    <button class="mc-opt" data-key="a">\(P(k+1)\) is true, and you show that \(P(k)\) follows from it.</button>
    <button class="mc-opt" data-key="b">\(P(1)\) is true, and nothing more.</button>
    <button class="mc-opt" data-key="c">\(P(k)\) for an arbitrary \(k \ge 1\), and you show \(P(k+1)\).</button>
    <button class="mc-opt" data-key="d">\(P(n)\) for every \(n\), since that is what you are proving.</button>
    <div class="mc-fb" data-key="a"><p>Backwards. Assuming \(P(k+1)\) tells you nothing about \(P(k)\), so you never reach the next case.</p></div>
    <div class="mc-fb" data-key="b"><p>That is the base case, and you prove it directly. The inductive step needs the hypothesis at a general \(k\).</p></div>
    <div class="mc-fb" data-key="c"><p>Right. The hypothesis is for an arbitrary \(k\), not one particular value. From it you deduce \(P(k+1)\), and the chain runs on.</p></div>
    <div class="mc-fb" data-key="d"><p>That is the conclusion. Assuming it proves nothing, since the proof is supposed to establish it.</p></div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Which of these subsets of \(\mathbb{Z}\) has a least element?</p>
    <button class="mc-opt" data-key="a">The integers \(n\) with \(n \ge -3\), as a subset of \(\mathbb{Z}\).</button>
    <button class="mc-opt" data-key="b">The even integers, as a subset of \(\mathbb{Z}\).</button>
    <button class="mc-opt" data-key="c">All of \(\mathbb{Z}\), with no restriction at all.</button>
    <button class="mc-opt" data-key="d">The negative integers, which are all below zero.</button>
    <div class="mc-fb" data-key="a"><p>Right. Its least element is \(-3\). Shift the set up by 3 and you get the nonnegative integers, which are well-ordered, so this set is too.</p></div>
    <div class="mc-fb" data-key="b"><p>No. The evens keep going down forever: \(-2, -4, -6, \ldots\) all belong, so there is no least one.</p></div>
    <div class="mc-fb" data-key="c"><p>No. For any integer, the integer one below it is also in \(\mathbb{Z}\), so nothing is smallest. Judson's point is that \(\mathbb{Z}\) is not well-ordered.</p></div>
    <div class="mc-fb" data-key="d"><p>No. Like the evens, the negatives go down forever, so there is no smallest one.</p></div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Division with dots</h2>

  <p>The division algorithm says that for integers \(a\) and \(b \gt 0\) there are unique integers \(q\) and \(r\) with \(a = bq + r\) and \(0 \le r \lt b\). Picture \(a\) dots in rows of \(b\). You get \(q\) full rows, and \(r\) dots are left over in the last row.</p>

  <p>Set \(b = 4\) and leave \(a = 0\). Before you slide \(a\) to 11, predict \(q\) and \(r\). Then slide and check. Next, predict what happens to \(r\) as \(a\) goes up to 12, 13, 14, and then 15.</p>

  <div id="d02-dots"></div>

  <p>Now try \(b = 3\) and \(b = 8\), with \(a\) near 20. The remainder always lands between 0 and \(b - 1\). When \(b\) is larger than \(a\), the quotient is 0 and the remainder is \(a\) itself. Does the picture still match the equation?</p>

  <details class="hint">
    <summary>Stuck on the remainder?</summary>
    <p>Count the full rows first, then the dots left over. If the leftover count is \(b\) or more, you could have made one more full row, so that count was not the remainder.</p>
  </details>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Why the remainder must be smaller than \(b\)</h2>

  <p>This is the existence half of the division algorithm, following Judson's proof, which runs on the Principle of Well-Ordering. His uniqueness argument is in the reading, so read it before class. Throughout, \(b \gt 0\). Judson splits off the case where \(b\) divides \(a\), but the argument below covers that case without a separate step.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">What must the existence half produce, and what must be true of it?</div>
        <div class="sstep-body"><p>Integers \(q\) and \(r\) with \(a = bq + r\) and \(0 \le r \lt b\). The equation is bookkeeping; the inequality is the real claim.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Let \[ S = \{a - bk : k \in \mathbb{Z} \text{ and } a - bk \ge 0\}. \] Why is \(S\) nonempty?</div>
        <div class="sstep-body"><p>If \(a \ge 0\), take \(k = 0\). If \(a \lt 0\), take \(k = 2a\). Then \(a - b(2a) = a(1 - 2b)\). Here \(a \lt 0\), and \(1 - 2b \lt 0\) because \(b \gt 0\), so the product is positive.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">\(S\) is a nonempty set of nonnegative integers, so it has a least element. Call it \(r = a - bq\). Why are \(a = bq + r\) and \(r \ge 0\) both true?</div>
        <div class="sstep-body"><p>The equation is \(r = a - bq\) rearranged. And \(r \ge 0\) because \(r\) is in \(S\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Suppose \(r \ge b\). Find an element of \(S\) that is smaller than \(r\).</div>
        <div class="sstep-body"><p>\(r - b = a - b(q + 1)\). It is nonnegative, so it lies in \(S\), and it is smaller than \(r\) because \(b \gt 0\). That contradicts the choice of \(r\) as the least element. So \(r \lt b\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Where did the proof use \(b \gt 0\)?</div>
        <div class="sstep-body"><p>Twice. In step 2, \(1 - 2b\) is negative exactly when \(b \gt 0\), and that is what makes \(a(1 - 2b)\) nonnegative when \(a \lt 0\). In step 4, \(r - b\) is smaller than \(r\) only because \(b \gt 0\). If \(b\) were negative, both arguments would fail.</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The Euclidean algorithm, run for you</h2>

  <p>Divide, keep the remainder, and repeat with the smaller pair until the remainder is 0. The last nonzero remainder is \(\gcd(a, b)\), and working the steps backward writes it as \(\gcd(a, b) = ra + sb\). That is Judson's theorem on the gcd, and the widget shows both halves: the steps going down, then the combination coming back up.</p>

  <p>Before you press anything, predict:</p>
  <ul>
    <li>Does the last nonzero remainder divide both numbers?</li>
    <li>Why must the process stop? Look at the sequence of remainders.</li>
    <li>Could the remainders ever fail to get smaller?</li>
  </ul>

  <details class="hint">
    <summary>Stuck on the combination?</summary>
    <p>Start with the last nonzero remainder, which is the gcd. Solve the line above it for that remainder, then substitute the line above that, and keep going until only \(a\) and \(b\) are left. Each substitution removes one remainder.</p>
  </details>

  <div id="d02-euclid"></div>

  <p>The widget starts on \(a = 1071\) and \(b = 462\). Try pairs of your own. The widget won't run the pairs on this week's homework list, so work those by hand. Then compare how many steps a pair takes with how big its numbers are.</p>

  <p>Notice what happens after you run a pair. Each remainder is smaller than the one before it, and a strictly decreasing sequence of positive integers can't go on forever. That is why the process stops, and it stops at the gcd.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Combinations and factorizations</h2>

  <p>These two questions test the end of the chapter: the gcd as a combination of \(a\) and \(b\), and the uniqueness half of the Fundamental Theorem. Judson proves both. Answer from the statements, then check the reading.</p>

  <div class="mc" data-answer="c">
    <p class="mc-q">Let \(d = \gcd(a, b)\) for nonzero integers \(a\) and \(b\). Which statement is always true?</p>
    <button class="mc-opt" data-key="a">The integers \(r\) and \(s\) with \(d = ra + sb\) are unique.</button>
    <button class="mc-opt" data-key="b">\(d\) is the smallest positive common divisor of \(a\) and \(b\).</button>
    <button class="mc-opt" data-key="c">\(d\) is the smallest positive integer of the form \(ra + sb\).</button>
    <button class="mc-opt" data-key="d">\(d\) is a multiple of both \(a\) and \(b\).</button>
    <div class="mc-fb" data-key="a"><p>Not unique. For \(a = 2\) and \(b = 3\), both \(1 = (-1)(2) + (1)(3)\) and \(1 = (2)(2) + (-1)(3)\) work. The gcd is unique; the pair \((r, s)\) is not.</p></div>
    <div class="mc-fb" data-key="b"><p>Always 1, so it says nothing. The number 1 divides everything, so it is always the smallest positive common divisor. The gcd is the largest one.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. This is Judson's theorem. The proof takes the least positive combination, shows it divides both \(a\) and \(b\), and notes that every common divisor divides it.</p></div>
    <div class="mc-fb" data-key="d"><p>No. A gcd divides both numbers, so it is a divisor of them, not a multiple. The least common multiple is the one that is a multiple.</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which statement is the uniqueness part of the Fundamental Theorem of Arithmetic?</p>
    <button class="mc-opt" data-key="a">Every integer \(n \gt 1\) can be written as a product of primes, not necessarily distinct.</button>
    <button class="mc-opt" data-key="b">Two prime factorizations of the same \(n\) have the same primes with the same repeats, possibly in a different order.</button>
    <button class="mc-opt" data-key="c">No prime can appear more than once in the factorization of a single integer, since that would be redundant.</button>
    <button class="mc-opt" data-key="d">Every integer \(n \gt 1\) has exactly one prime factor, which is itself, so factoring never splits it.</button>
    <div class="mc-fb" data-key="a"><p>That is the existence half. Uniqueness is about two factorizations of the same number.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. The order doesn't matter, and the number of factors is forced too. Judson's proof of uniqueness uses Euclid's lemma: a prime that divides a product divides one of the factors.</p></div>
    <div class="mc-fb" data-key="c"><p>No. \(12 = 2 \cdot 2 \cdot 3\) repeats the prime 2, and the theorem allows that: the primes need not be distinct.</p></div>
    <div class="mc-fb" data-key="d"><p>No. \(60 = 2 \cdot 2 \cdot 3 \cdot 5\) has three distinct prime factors. Confusing "a prime factor" with "the prime factorization" is a common slip.</p></div>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>A new prime every time</h2>

  <p>A student tries to prove there are infinitely many primes, the way Euclid did. Here is the argument.</p>

  <p>Euclid's argument produces a prime that is missing from the list. It doesn't produce a formula for one.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Suppose \(p_1, \ldots, p_n\) are all the primes, and let \(P = p_1 p_2 \cdots p_n + 1\).</button>
      <button class="fline" type="button">No \(p_i\) divides \(P\), since each one leaves remainder 1 when it divides \(P\).</button>
      <button class="fline" type="button">So the only prime that could divide \(P\) is \(P\) itself, and therefore \(P\) is prime.</button>
      <button class="fline" type="button">So some prime divides \(P\), and that prime is not on the list. This contradicts the list being complete. \(\blacksquare\)</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> This is the assumption for a proof by contradiction, with \(P\) built from the list.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> Each \(p_i\) divides \(P - 1\), so \(P\) leaves remainder 1 on division by \(p_i\).</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>This is the flaw.</strong> Only the listed primes were ruled out. Any other prime could divide \(P\), and \(P\) may be a product of new primes. Check: \(2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 + 1 = 30031 = 59 \cdot 509\), and none of \(2, 3, 5, 7, 11, 13\) divides it.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine as a step.</strong> Every integer above 1 has a prime divisor, and this one can't be on the list, because line 2 says no listed prime divides \(P\).</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Judson's remainder satisfies \(0 \le r \lt b\) even when \(a\) is negative. What would the dots picture look like for \(a \lt 0\)? Find \(q\) and \(r\) for \(a = -7\) and \(b = 3\) by any method you like. Why does the requirement on \(r\) still make sense?</li>
    <li>The division proof works with a set of nonnegative integers, and well-ordering is what stops it from decreasing forever. Where exactly in the proof does that matter?</li>
    <li>Two students factor 360 in different orders, one starting with 2 and one with 3. Why should you believe they end up with the same list of primes? What would a proof of uniqueness have to rule out?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;

    /* Widget: a = qb + r as dots. Rows have b dots; q full rows, and the last r dots are left over. */
    function divisionDots(host) {
      var svg = A.svg('svg', { viewBox: '0 0 340 220', width: '100%', role: 'img',
        'aria-label': 'a dots in rows of b: q full rows, with the remaining r dots in the last row',
        style: 'max-width:340px;display:block;margin:0 auto' });
      var out = A.h('p', { class: 'readout', 'aria-live': 'polite' });
      var inA = A.h('input', { type: 'range', min: '0', max: '30', step: '1', value: '0', 'aria-label': 'a, the number of dots' });
      var inB = A.h('input', { type: 'range', min: '3', max: '8', step: '1', value: '4', 'aria-label': 'b, the number of dots in each row' });
      function draw() {
        var a = Number(inA.value), b = Number(inB.value), q = Math.floor(a / b), r = a - q * b;
        var rows = Math.max(1, Math.ceil(a / b)), s = Math.min(26, Math.floor(180 / rows), Math.floor(300 / b));
        while (svg.firstChild) svg.removeChild(svg.firstChild);
        for (var k = 0; k < a; k++) {
          svg.appendChild(A.svg('circle', { cx: 24 + (k % b) * s, cy: 24 + Math.floor(k / b) * s,
            r: Math.max(3, s * 0.36), fill: k >= q * b ? '#F36E24' : '#009CDE' }));
        }
        out.textContent = 'a = ' + a + ', b = ' + b + ': q = ' + q + ' full rows and r = ' + r + ' left over. So ' +
          a + ' = ' + q + ' × ' + b + ' + ' + r + ', with 0 ≤ ' + r + ' < ' + b + '.';
      }
      host.innerHTML = '';
      host.appendChild(A.h('div', { class: 'ctl-row' }, [
        A.h('div', { class: 'ctl' }, [A.h('span', { text: 'a ' }), inA]),
        A.h('div', { class: 'ctl' }, [A.h('span', { text: 'b ' }), inB])
      ]));
      host.appendChild(svg);
      host.appendChild(out);
      inA.addEventListener('input', draw);
      inB.addEventListener('input', draw);
      draw();
    }

    /* The six pairs on this week's homework list, in every order and sign pattern, are passed to the
       euclid widget's avoid list, so typing any version of them shows the homework note instead. */
    var EX15 = [[14, 39], [234, 165], [1739, 9923], [471, 562], [23771, 19945], [-4357, 3754]];
    var AVOID = [];
    EX15.forEach(function (p) {
      var a = p[0], b = p[1];
      [[a, b], [b, a], [-a, b], [a, -b], [-a, -b], [-b, a], [b, -a], [-b, -a]].forEach(function (q) { AVOID.push(q); });
    });
    A.euclid('d02-euclid', { a: 1071, b: 462, avoid: AVOID });
    divisionDots(document.getElementById('d02-dots'));
  })();
</script>
