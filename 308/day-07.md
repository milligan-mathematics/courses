---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 7: Which Hands Reach Every Hour"
day: 7
chapter_number: 4
chapter: "Cyclic Groups"
day_title: "Which Hands Reach Every Hour"
blurb: "On a clock, some hands visit every hour and others stop early. A single greatest common divisor sorts them out. The same idea answers a bigger question: every subgroup of a cyclic group is itself cyclic."
reading: "Chapter 4, Day 2: the rest of Section 4.1, from 'Subgroups of Cyclic Groups' through the order of a power and the generators of Z_n"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Which hands get everywhere?</h2>

  <p>The clock has 20 hours. A hand set to \(k\) jumps \(k\) hours at a time. Some hands visit every hour before they
    return to \(0\), and some stop early. The hand starts at \(k = 1\), which visits all twenty hours.</p>

  <div id="d07-clock-a"></div>

  <p>Before you move the slider, predict which of the hands \(k = 2, 3, \ldots, 19\) visit all twenty hours. Write your
    list down. Then slide through the values and check each one. The readout says whether the hand generates
    \(\mathbb Z_{20}\).</p>

  <p>When you're done, put your list next to the number \(20\). What do the hands that work have in common with
    \(20\)? The reading turns that pattern into a theorem.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Nested hands on a 16-hour clock</h2>

  <p>Now the clock has 16 hours, and the hand starts at \(k = 2\), which visits the even hours. Before you slide anything,
    predict: will the hand \(k = 6\) visit the same hours as the hand \(k = 2\)? Predict how many hours the hand \(6\)
    visits, too.</p>

  <div id="d07-clock-b"></div>

  <p>Now slide to \(k = 6\) and check. The readout also shows \(\gcd(16, k)\). Then try \(k = 4\) and \(k = 12\). Do those
    two hands visit the same hours? Judson's theorem says a hand visits \(n/\gcd(k, n)\) hours, which is the order of
    \(k\) in \(\mathbb Z_n\). Test that on each hand you try before you believe it.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Generators and orders</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Which element of \(\mathbb Z_{20}\) generates all of \(\mathbb Z_{20}\)?</p>
    <button class="mc-opt" data-key="a">4</button>
    <button class="mc-opt" data-key="b">6</button>
    <button class="mc-opt" data-key="c">9</button>
    <button class="mc-opt" data-key="d">15</button>
    <div class="mc-fb" data-key="a"><p>\(\gcd(4, 20) = 4\). The multiples of \(4\) are \(0, 4, 8, 12, 16\), only five
      hours.</p></div>
    <div class="mc-fb" data-key="b"><p>\(\gcd(6, 20) = 2\). The hand visits only the even hours, ten of them.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. \(\gcd(9, 20) = 1\), and the hand visits all twenty hours.</p></div>
    <div class="mc-fb" data-key="d"><p>\(\gcd(15, 20) = 5\). The multiples of \(15\) are \(0, 15, 10, 5\), four hours.</p></div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">On a 16-hour clock, which hand has order \(2\)? That is, which hand visits exactly two hours, \(0\) and
      one other?</p>
    <button class="mc-opt" data-key="a">2</button>
    <button class="mc-opt" data-key="b">4</button>
    <button class="mc-opt" data-key="c">8</button>
    <button class="mc-opt" data-key="d">12</button>
    <div class="mc-fb" data-key="a"><p>The hand \(2\) has order \(8\). Its multiples are \(0, 2, 4, \ldots, 14\), eight
      hours.</p></div>
    <div class="mc-fb" data-key="b"><p>The hand \(4\) has order \(4\): \(0, 4, 8, 12\). Four hours, not two.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. \(8 + 8 = 16 \equiv 0\), so the hand \(8\) visits \(0\) and \(8\) and nothing
      else.</p></div>
    <div class="mc-fb" data-key="d"><p>The hand \(12\) has order \(4\), the same as \(4\), because \(\gcd(12, 16) = 4\).</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">On a 20-hour clock, how many hours does the hand \(12\) visit?</p>
    <button class="mc-opt" data-key="a">3</button>
    <button class="mc-opt" data-key="b">5</button>
    <button class="mc-opt" data-key="c">8</button>
    <button class="mc-opt" data-key="d">12</button>
    <div class="mc-fb" data-key="a"><p>Count the multiples of \(12\) mod \(20\): \(0, 12, 4, 16, 8\), and then back to \(0\).
      That's five hours, not three.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. \(\gcd(12, 20) = 4\), and \(20 / 4 = 5\).</p></div>
    <div class="mc-fb" data-key="c"><p>No hand on a 20-hour clock visits exactly \(8\) hours. The count is \(20/\gcd(20, k)\),
      and no value of \(\gcd(20, k)\) makes that equal \(8\).</p></div>
    <div class="mc-fb" data-key="d"><p>Twelve is the hand, not the number of its hours. The hours come from
      \(\gcd(12, 20) = 4\), which leaves five.</p></div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Two tempting shortcuts</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which statement about the generators of \(\mathbb Z_{20}\) is correct?</p>
    <button class="mc-opt" data-key="a">The generators are exactly the prime numbers less than \(20\).</button>
    <button class="mc-opt" data-key="b">The generators are exactly the \(k\) with \(\gcd(k, 20) = 1\).</button>
    <button class="mc-opt" data-key="c">Every nonzero element generates \(\mathbb Z_{20}\).</button>
    <button class="mc-opt" data-key="d">Only \(1\) and \(19\) generate \(\mathbb Z_{20}\).</button>
    <div class="mc-fb" data-key="a"><p>Two problems. \(2\) is prime, but \(\gcd(2, 20) = 2\), so \(2\) doesn't generate. And
      \(9\) generates, though it isn't prime.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. This is the corollary in the reading. A hand reaches every hour exactly when
      it shares no factor with \(20\).</p></div>
    <div class="mc-fb" data-key="c"><p>No. \(10\) is nonzero, but the hand \(10\) visits only \(0\) and \(10\), so it doesn't
      generate.</p></div>
    <div class="mc-fb" data-key="d"><p>No. \(1\) and \(19\) do generate, but so does \(3\), and \(\gcd(3, 20) = 1\).</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">On a 16-hour clock, which statement is true?</p>
    <button class="mc-opt" data-key="a">The hands \(6\) and \(2\) visit different hours, because \(6 > 2\).</button>
    <button class="mc-opt" data-key="b">The hands \(6\) and \(2\) visit the same hours.</button>
    <button class="mc-opt" data-key="c">The hand \(6\) visits only \(0\), \(6\), and \(12\).</button>
    <button class="mc-opt" data-key="d">The hand \(6\) generates the whole clock.</button>
    <div class="mc-fb" data-key="a"><p>A bigger number doesn't mean more hours. \(\gcd(6, 16) = 2 = \gcd(2, 16)\), and both
      hands visit exactly the even hours.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. The multiples of \(6\) mod \(16\) are \(0, 6, 12, 2, 8, 14, 4, 10\), which are
      the even hours.</p></div>
    <div class="mc-fb" data-key="c"><p>The hand keeps going past \(12\): \(12 + 6 = 18 \equiv 2\). It reaches eight hours.</p></div>
    <div class="mc-fb" data-key="d"><p>No. \(\gcd(6, 16) = 2\), so the hand reaches only the even hours.</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Every subgroup of a cyclic group is cyclic</h2>

  <p>This is the first theorem in the subsection "Subgroups of Cyclic Groups." Judson's proof uses two tools you already
    have: the division algorithm and the Well-Ordering Principle. Let \(G = \langle a \rangle\), and let \(H\) be a subgroup of
    \(G\). Commit to each step before you open it.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">If \(H = \{e\}\), why is \(H\) cyclic?</div>
        <div class="sstep-body"><p>\(H = \langle e \rangle\). The trivial group is generated by its identity.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Suppose \(H\) contains some \(a^n \neq e\). Why can you assume the exponent is
          positive?</div>
        <div class="sstep-body"><p>\(H\) contains the inverse \(a^{-n}\). One of \(n\) and \(-n\) is positive, so \(H\)
          contains \(a^p\) for some \(p > 0\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Let \(m\) be the smallest positive integer with \(a^m \in H\). Why does \(m\) exist?</div>
        <div class="sstep-body"><p>The set of positive integers \(p\) with \(a^p \in H\) is nonempty, so it has a least
          element by the Well-Ordering Principle.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Let \(h = a^m\), and take any \(a^k \in H\). Divide \(k = mq + r\) with \(0 \le r < m\).
          What is \(a^r\) in terms of \(a^k\) and \(h\), and why is \(a^r\) in \(H\)?</div>
        <div class="sstep-body"><p>\(a^r = a^k (a^m)^{-q} = a^k h^{-q}\). Both \(a^k\) and \(h^{-q}\) are in \(H\), so
          \(a^r \in H\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Why must \(r = 0\)?</div>
        <div class="sstep-body"><p>If \(r > 0\), then \(a^r \in H\) with \(0 < r < m\), which contradicts the choice of
          \(m\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">So every \(a^k \in H\) equals \(h^q\). What have you shown about \(H\)?</div>
        <div class="sstep-body"><p>Every element of \(H\) is a power of \(h\), so \(H = \langle h \rangle\) is cyclic.</p></div>
      </li>
    </ol>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Do the generators form a subgroup?</h2>

  <p>A classmate argues that the generators of \(\mathbb Z_{20}\) form a subgroup, because they are closed under addition.
    Here is the argument. Click the line that isn't justified.</p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Let \(k\) and \(j\) generate \(\mathbb Z_{20}\).</button>
      <button class="fline" type="button">Then \(\gcd(k, 20) = \gcd(j, 20) = 1\).</button>
      <button class="fline" type="button">Let \(p\) be a prime dividing \(20\). Since \(\gcd(k, 20) = 1\), \(p\) does not
        divide \(k\), and likewise \(p\) does not divide \(j\).</button>
      <button class="fline" type="button">So \(p\) does not divide \(k + j\) either.</button>
      <button class="fline" type="button">Hence \(\gcd(k + j, 20) = 1\), so \(k + j\) also generates \(\mathbb Z_{20}\).</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> This is the setup.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> That's the generator test from the reading's
      corollary.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>Fine.</strong> If \(p\) divided \(k\) and also \(20\), it would divide
      \(\gcd(k, 20)\), which is \(1\).</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>This is the flaw.</strong> A prime can divide a sum without dividing
      either part. Take \(p = 2\) and \(k = j = 3\). Then \(2\) doesn't divide \(3\), but \(2\) divides \(3 + 3 = 6\). And
      \(\gcd(6, 20) = 2\), so \(6\) doesn't generate \(\mathbb Z_{20}\) at all.</p></div>
    <div class="flaw-verdict" data-key="5"><p><strong>Fine as a deduction.</strong> If no prime divides both \(20\) and
      \(k + j\), then \(\gcd(k + j, 20) = 1\). The trouble is line 4, so this line is only as good as that one.</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Hands 6 and 2 on a 16-hour clock visit the same hours. What decides when two hands visit the same hours in
      \(\mathbb Z_n\)?</li>
    <li>The proof that subgroups of cyclic groups are cyclic picks the smallest positive power in the subgroup. What goes
      wrong if you pick any positive power instead?</li>
    <li>The reading lists the generators of \(\mathbb Z_{16}\) and shows that \(9\) is one of them. Could you have
      predicted that \(9\) belongs on the list without writing out its multiples? How?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;

    // Both clocks stay at a fixed size (fixedN). Inputs they must not show: every hand on Z_5 and Z_6 (Ex 20, 21),
    // every hand on Z_18 (Ex 5), Z_60 (Ex 1), and the single pairs from Ex 2 and Ex 3.
    function allK(n) { var out = []; for (var k = 0; k < n; k++) out.push([n, k]); return out; }
    var AVOID = allK(5).concat(allK(6), allK(18), allK(60), [[12, 5], [24, 15], [240, 72], [471, 312]]);

    A.clock('d07-clock-a', { n: 20, k: 1, fixedN: true, avoid: AVOID });
    A.clock('d07-clock-b', { n: 16, k: 2, fixedN: true, showFormula: true, avoid: AVOID });
  })();
</script>
