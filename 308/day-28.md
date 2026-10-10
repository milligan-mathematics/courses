---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 28: Where the Zeros Hide"
day: 28
chapter_number: 16
chapter: "Rings"
day_title: "Where the Zeros Hide"
blurb: "A ring has two operations, and multiplication can do something you never saw with ordinary numbers: two nonzero elements can multiply to zero. Find those pairs in the integers mod n, and you will see which elements can be divided by and which cannot."
reading: "Chapter 16, Day 1: Sections 16.1 and 16.2, from the definition of a ring through integral domains and fields"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Two tables, one set of colours</h2>

  <p>Judson's definition of a ring asks for an abelian group under addition, a multiplication that is associative,
    and the two distributive laws. A ring need not have an identity, and its multiplication need not be commutative.
    Those extra conditions come up as the chapter goes on.</p>

  <p>Set the widget to \(n = 8\), using the addition and multiplication you already know. Before you read that
    table, predict:</p>
  <ul>
    <li>Which nonzero elements of \(\mathbb Z_8\) have a multiplicative inverse?</li>
    <li>Which pairs of nonzero elements multiply to \(0\)?</li>
  </ul>

  <div id="d28-ring-a"></div>

  <p>Green row labels are units, the elements with a multiplicative inverse. Orange row labels are zero divisors:
    nonzero elements that multiply with some other nonzero element to give \(0\). Check your predictions against the
    readout. Then look once at the addition table. It is a group you already know, and it says nothing about
    zero divisors.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Zeros and domains</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which pair of nonzero elements of \(\mathbb Z_9\) multiplies to \(0\)?</p>
    <button class="mc-opt" data-key="a">\(2\) and \(5\)</button>
    <button class="mc-opt" data-key="b">\(3\) and \(3\)</button>
    <button class="mc-opt" data-key="c">\(2\) and \(4\)</button>
    <button class="mc-opt" data-key="d">\(4\) and \(5\)</button>
    <div class="mc-fb" data-key="a"><p>\(2 \cdot 5 = 10\), and \(10 \equiv 1 \pmod 9\). This pair multiplies to \(1\),
      so \(2\) and \(5\) are inverses of each other.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. \(3 \cdot 3 = 9 \equiv 0 \pmod 9\), and both factors are nonzero. So \(3\)
      is a zero divisor in \(\mathbb Z_9\).</p></div>
    <div class="mc-fb" data-key="c"><p>\(2 \cdot 4 = 8\), which is not a multiple of \(9\). The product of these two is
      nonzero.</p></div>
    <div class="mc-fb" data-key="d"><p>\(4 \cdot 5 = 20\), and \(20 \equiv 2 \pmod 9\). Not \(0\).</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which of these is an integral domain but not a field?</p>
    <button class="mc-opt" data-key="a">\(\mathbb Z_5\), the integers mod 5</button>
    <button class="mc-opt" data-key="b">\(\mathbb Z\), the integers</button>
    <button class="mc-opt" data-key="c">\(\mathbb Z_9\), the integers mod 9</button>
    <button class="mc-opt" data-key="d">\(\mathbb Z_8\), the integers mod 8</button>
    <div class="mc-fb" data-key="a"><p>\(\mathbb Z_5\) is a field. Each of \(1, 2, 3, 4\) has an inverse mod \(5\), so
      it is an integral domain too. The question asks for one that is not a field.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. \(\mathbb Z\) is commutative with identity \(1\), and \(ab = 0\) forces
      \(a = 0\) or \(b = 0\). It is not a field, because \(2\) has no multiplicative inverse in \(\mathbb Z\).</p></div>
    <div class="mc-fb" data-key="c"><p>Not a domain: \(3 \cdot 3 = 0\) in \(\mathbb Z_9\), so \(3\) is a zero divisor.</p></div>
    <div class="mc-fb" data-key="d"><p>Not a domain: \(2 \cdot 4 = 8 \equiv 0 \pmod 8\), and both \(2\) and \(4\) are
      nonzero. Look at the orange rows in the first widget.</p></div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Slide \(n\) and watch for orange</h2>

  <p>Section 16.2 defines integral domains and fields. An integral domain is a commutative ring with identity and no
    zero divisors. A field is a commutative division ring: every nonzero element is a unit. Slide \(n\) and predict
    before each move whether orange will appear:</p>
  <ul>
    <li>Is there any orange at \(n = 5\)? At \(n = 9\)? At \(n = 16\)?</li>
    <li>If a row is green, what must its element multiply with to give \(1\)?</li>
  </ul>

  <div id="d28-ring-b"></div>

  <p>Which values of \(n\) leave no orange at all? For those values, what do the green rows look like? Write one
    sentence that connects the two. The scaffold below proves the general version for finite integral domains.</p>

  <p class="a308-note">A few sizes are held back because they are on the homework.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Finite domains are fields</h2>

  <p>Judson's Wedderburn theorem says that every finite integral domain is a field. Here is his argument, one step
    at a time. Let \(D\) be a finite integral domain, and let \(D^*\) be its set of nonzero elements. Commit to each
    answer before you open the next step.</p>

  <p>Three facts do the work: a product of nonzero elements is nonzero, cancellation holds for a nonzero factor, and a
    one-to-one map from a finite set to itself is onto. The first two are the domain property. The third is finiteness.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">\(D\) is commutative with identity. What must you show to conclude that \(D\) is a field?</div>
        <div class="sstep-body"><p>That every \(a \in D^*\) has some \(d\) with \(ad = 1\). Commutativity then makes
          \(d\) a two-sided inverse, so every nonzero element is a unit.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Fix \(a \in D^*\) and define \(\lambda_a(d) = ad\) on \(D^*\). Why does \(\lambda_a\)
          send \(D^*\) into \(D^*\)?</div>
        <div class="sstep-body"><p>If \(a \neq 0\) and \(d \neq 0\), then \(ad \neq 0\). That is exactly the statement
          that \(D\) has no zero divisors.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Why is \(\lambda_a\) one-to-one? Where does the domain property enter?</div>
        <div class="sstep-body"><p>If \(ad_1 = ad_2\), then \(a(d_1 - d_2) = 0\). Since \(a \neq 0\) and \(D\) has no zero
          divisors, \(d_1 - d_2 = 0\). This is the cancellation law from the reading.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">\(D^*\) is finite, and \(\lambda_a\) is a one-to-one map from \(D^*\) to itself. What
          does that give you, and why is \(1\) in the picture?</div>
        <div class="sstep-body"><p>A one-to-one map from a finite set to itself is onto. So \(\lambda_a(d) = ad = 1\)
          for some \(d \in D^*\). The element \(1\) lies in \(D^*\), because \(1 \neq 0\) in an integral domain.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Why is \(d\) also a right inverse of \(a\), and what does that make \(D\)?</div>
        <div class="sstep-body"><p>Since \(D\) is commutative, \(da = ad = 1\). Every nonzero element has an inverse, so
          \(D\) is a field.</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Nine is a prime power</h2>

  <p>A classmate argues that \(\mathbb Z_9\) is an integral domain, because \(9\) is a power of a prime. Here is the
    argument.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Suppose \(a, b \in \mathbb Z_9\) are nonzero with \(ab = 0\). Take representatives with \(1 \le a, b \le 8\).</button>
      <button class="fline" type="button">Then \(9\) divides the integer \(ab\).</button>
      <button class="fline" type="button">So \(3\) divides \(ab\), and since \(3\) is prime, \(3 \mid a\) or \(3 \mid b\).</button>
      <button class="fline" type="button">Say \(3 \mid a\). Then \(9 \mid a\), because \(9 = 3 \cdot 3\).</button>
      <button class="fline" type="button">But \(1 \le a \le 8\), so \(9 \nmid a\). This contradiction means \(\mathbb Z_9\) has no zero divisors, so it is an integral domain.</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> This is the definition of a pair of nonzero elements
      with product zero.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> A product that is \(0\) in \(\mathbb Z_9\) is a
      multiple of \(9\) as an integer.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>Fine.</strong> \(3\) divides \(9\), which divides \(ab\). Since
      \(3\) is prime, it divides one of the factors.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>This is the flaw.</strong> \(3 \mid a\) does not give \(9 \mid a\).
      The counterexample is \(a = b = 3\): both are nonzero, and \(ab = 9 \equiv 0 \pmod 9\). This is exactly the
      situation the argument says cannot happen.</p></div>
    <div class="flaw-verdict" data-key="5"><p><strong>Fine as a deduction from line 4.</strong> The conclusion fails only
      because line 4 does. \(\mathbb Z_9\) has zero divisors, \(3\) and \(6\).</p></div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Units and characteristic</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">How many units does \(\mathbb Z_9\) have?</p>
    <button class="mc-opt" data-key="a">Three</button>
    <button class="mc-opt" data-key="b">Six</button>
    <button class="mc-opt" data-key="c">Eight</button>
    <button class="mc-opt" data-key="d">Nine</button>
    <div class="mc-fb" data-key="a"><p>Three counts \(0, 3, 6\), the multiples of \(3\). But \(0\) is never a unit,
      since \(0 \cdot x = 0 \ne 1\). And \(3\) and \(6\) are zero divisors, so they can't be units either.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. The units are \(1, 2, 4, 5, 7, 8\): the nonzero elements that are not
      \(3\) or \(6\). Each of them has an inverse mod \(9\).</p></div>
    <div class="mc-fb" data-key="c"><p>Eight counts the nonzero elements. But \(3 \cdot 3 = 0\), so \(3\) has no inverse.
      A zero divisor can never be a unit.</p></div>
    <div class="mc-fb" data-key="d"><p>All of \(\mathbb Z_9\) would need \(0\) to be a unit. But \(0 \cdot x = 0\) is never
      \(1\) when \(1 \ne 0\).</p></div>
  </div>

  <details class="hint">
    <summary>Stuck on the units?</summary>
    <p>Go through \(1\) to \(8\). For each element, ask whether some element multiplies it to \(1\) mod \(9\). If the
      element multiplies some nonzero element to \(0\), it can't have an inverse, because the product of a unit with
      anything is never \(0\) unless that thing is \(0\).</p>
  </details>

  <div class="mc" data-answer="c">
    <p class="mc-q">What is the characteristic of \(\mathbb Z_9\)?</p>
    <button class="mc-opt" data-key="a">\(3\)</button>
    <button class="mc-opt" data-key="b">\(1\)</button>
    <button class="mc-opt" data-key="c">\(9\)</button>
    <button class="mc-opt" data-key="d">\(0\)</button>
    <div class="mc-fb" data-key="a"><p>\(3 \cdot 1 = 3\), which is not \(0\) in \(\mathbb Z_9\). The characteristic is
      the least positive \(n\) with \(n \cdot 1 = 0\) in the ring.</p></div>
    <div class="mc-fb" data-key="b"><p>\(1 \cdot 1 = 1\), which is not \(0\), so \(1\) is not the characteristic.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. No smaller positive multiple of \(1\) is \(0\), and \(9 \cdot 1 = 9 \equiv 0\), so the
      characteristic is \(9\).</p></div>
    <div class="mc-fb" data-key="d"><p>Characteristic \(0\) would mean that no positive multiple of \(1\) is \(0\). But
      \(9 \cdot 1 = 0\) in \(\mathbb Z_9\).</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Which step of Wedderburn's argument uses that \(D\) is finite? Run the same step on \(\mathbb Z\) with
      \(a = 2\), and say exactly which element fails to be reached.</li>
    <li>The reading shows that the characteristic of an integral domain is prime or \(0\). Use that to explain why
      \(\mathbb Z_9\) cannot be an integral domain, without finding a zero divisor by hand. Compare that with the flaw
      you just read.</li>
    <li>The scaffold uses \(1 \neq 0\) at step 4. Where would the argument break if the definition let \(1\) equal
      \(0\)? Discuss what the definition of an integral domain protects.</li>
  </ol>
</div>

<script>
  (function () {
    var AVOID = [3, 6, 7, 10, 12, 18, 25];
    // Both rings use the same avoid list: the ring widget refuses every Z_n that is on the homework.
    A308.ring('d28-ring-a', { n: 4, show: 'mul', maxN: 16, avoid: AVOID });
    A308.ring('d28-ring-b', { n: 4, show: 'mul', maxN: 16, avoid: AVOID });
  })();
</script>
