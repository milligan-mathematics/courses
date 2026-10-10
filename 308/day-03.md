---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 3: Symmetries You Can Multiply"
day: 3
chapter_number: 3
chapter: "Groups"
day_title: "Symmetries You Can Multiply"
blurb: "Pick up a triangle, turn it, flip it, put it back in its outline. Six moves, a way to combine any two, and a table that turns out to obey four rules. Those four rules are the whole definition of a group."
reading: "Chapter 3, Day 1: Sections 3.1 and 3.2, through the definition of a group, its first examples, and the first basic properties (unique identity and inverses)"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Six ways to put a triangle back</h2>

  <p>Section 3.1 starts with a cardboard triangle and asks: in how many ways can you pick it up and set it back
    down in its own outline? The faint numbers below mark the three <em>positions</em>, and those never move. The
    bold letters \(A\), \(B\), \(C\) are painted on the triangle, so they ride along.</p>

  <div id="d3-move"></div>

  <p>Press the buttons in different orders. Judson's names are \(\rho_1\) for a turn of \(120^\circ\) and
    \(\mu_1\) for the flip that leaves \(A\) where it is. Before you press anything, predict:</p>
  <ul>
    <li>How many presses of \(\rho_1\) bring you back to the start?</li>
    <li>Can you reach a position where \(B\) sits at the top using only \(\rho_1\)? Only \(\mu_1\)?</li>
    <li>Every position you reach is one of six. Which six? Write each as a permutation of \(A, B, C\) and
      compare with the readout.</li>
  </ul>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Do one, then the other</h2>

  <p>The reading defines the product \(\mu_1\rho_1\) as <em>do \(\rho_1\) first, then \(\mu_1\)</em>. That
    right-to-left order comes from function composition, \((\mu_1\rho_1)(A) = \mu_1(\rho_1(A))\), and it
    trips everyone up the first week. Choose two symmetries, predict where the letters end up, then let the
    triangle do it.</p>

  <div id="d3-compose"></div>

  <p>Now set \(Y = \mu_1\), \(X = \rho_1\) and run it; then swap them. The text works out one of these orders by
    hand. You should find two different answers, which means this multiplication is <strong>not
    commutative</strong>. That is new: every number system you have multiplied in before was.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Build the table yourself</h2>

  <p>Here is the multiplication table for the six symmetries, with some cells missing. The entry in row \(X\),
    column \(Y\) is \(XY\): do \(Y\) first, then \(X\). Fill in each blank, using the triangle above to settle
    any you aren't sure of, then check.</p>

  <div id="d3-fill"></div>

  <details class="hint">
    <summary>Stuck on a cell?</summary>
    <p>Row \(\mu_2\), column \(\rho_1\) means: do \(\rho_1\), then \(\mu_2\). Use the "Do one, then the other"
      triangle with \(Y = \rho_1\) and \(X = \mu_2\). Then look at the finished row: does any element appear
      twice? It can't, and that's worth knowing before you do the reading's next proposition.</p>
  </details>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>What the finished table knows</h2>

  <p>This is the complete table for the symmetries of the triangle (Judson writes it out too). Click any element
    in the top row or the left column. You'll see its <strong>order</strong> (how many times you multiply it by
    itself to get back to \(\mathrm{id}\)) and its <strong>inverse</strong>.</p>

  <div id="d3-table"></div>

  <p>Read the four group axioms off the table:</p>
  <ul>
    <li><strong>Closure.</strong> Every cell holds one of the six symmetries. Doing two symmetries in a row is
      a symmetry.</li>
    <li><strong>Identity.</strong> One row copies the column headings exactly. Which one?</li>
    <li><strong>Inverses.</strong> \(\mathrm{id}\) appears in every row. Why does that say every element has an
      inverse? Which elements are their own inverse?</li>
    <li><strong>Associativity.</strong> The table can't show you this at a glance. It holds because these are
      functions, and composing functions is always associative.</li>
  </ul>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Group or not?</h2>

  <p>Each of these is a set with an operation. Decide which axiom, if any, fails. The feedback on the
    <em>wrong</em> answers is where most of the learning is, so try a few.</p>

  <div class="mc" data-answer="c">
    <p class="mc-q">The integers \(\mathbb{Z}\) under subtraction, \(a \ast b = a - b\).</p>
    <button class="mc-opt" data-key="a">It's a group, with identity \(0\).</button>
    <button class="mc-opt" data-key="b">Closure fails.</button>
    <button class="mc-opt" data-key="c">Associativity fails.</button>
    <button class="mc-opt" data-key="d">Inverses fail: \(5\) has no inverse.</button>
    <div class="mc-fb" data-key="a"><p>\(a - 0 = a\), good, but \(0 - a = -a\), not \(a\). An identity has to
      work on <em>both</em> sides. And there's a deeper problem: try \((5 - 3) - 1\) against \(5 - (3 - 1)\).</p></div>
    <div class="mc-fb" data-key="b"><p>The difference of two integers is an integer, so closure is fine.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. \((5 - 3) - 1 = 1\) but \(5 - (3 - 1) = 3\). Once associativity
      fails, nothing else can rescue it. (The identity fails too: \(0\) works only on the right.)</p></div>
    <div class="mc-fb" data-key="d"><p>"Inverse" only makes sense once there's a two-sided identity, and there
      isn't one. The first thing to break is more basic than inverses.</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">The nonzero elements of \(\mathbb{Z}_8\), \(\{1, 2, \ldots, 7\}\), under multiplication
      mod \(8\).</p>
    <button class="mc-opt" data-key="a">It's a group: \(1\) is the identity and the set is finite.</button>
    <button class="mc-opt" data-key="b">Closure fails.</button>
    <button class="mc-opt" data-key="c">Associativity fails, because multiplication mod \(8\) is strange.</button>
    <button class="mc-opt" data-key="d">Only the identity axiom fails.</button>
    <div class="mc-fb" data-key="a"><p>Finite and having an identity isn't enough. Compute \(2 \cdot 4\) mod \(8\).</p></div>
    <div class="mc-fb" data-key="b"><p>Right. \(2 \cdot 4 = 8 \equiv 0\), and \(0\) isn't in the set. The reading
      fixes this by keeping only the elements with inverses: that's \(U(8)\).</p></div>
    <div class="mc-fb" data-key="c"><p>Multiplication mod \(n\) inherits associativity from ordinary integer
      multiplication. The problem is elsewhere.</p></div>
    <div class="mc-fb" data-key="d"><p>\(1 \cdot a = a\) for every \(a\), so the identity is fine.</p></div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">The even integers \(2\mathbb{Z}\) under addition.</p>
    <button class="mc-opt" data-key="a">It's a group.</button>
    <button class="mc-opt" data-key="b">The identity fails, since \(1\) isn't even.</button>
    <button class="mc-opt" data-key="c">Inverses fail, since \(-4\) is negative.</button>
    <button class="mc-opt" data-key="d">Closure fails.</button>
    <div class="mc-fb" data-key="a"><p>Yes. Sums of evens are even, \(0\) is even and is the identity for addition,
      \(-a\) is even when \(a\) is, and addition is associative. Compare: the <em>odd</em> integers under addition
      fail closure.</p></div>
    <div class="mc-fb" data-key="b"><p>The operation is addition, so the identity is \(0\), not \(1\), and \(0\)
      is even.</p></div>
    <div class="mc-fb" data-key="c"><p>Groups are allowed to contain negative numbers. The additive inverse of
      \(4\) is \(-4\), which is even, so it's in the set.</p></div>
    <div class="mc-fb" data-key="d"><p>\(2m + 2n = 2(m+n)\) is even. Closure holds.</p></div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Section 3.1's other example: arithmetic mod \(n\)</h2>

  <p>The integers mod \(n\) carry two operations. Addition always gives a group. Multiplication is more
    interesting. Slide \(n\) and switch to the multiplication table. Green row labels are elements with a
    multiplicative inverse; orange ones are <em>zero divisors</em>, nonzero elements that multiply to \(0\)
    with something nonzero.</p>

  <div id="d3-ring"></div>

  <p>Predict before you slide: for which \(n\) is every nonzero element green? Then test a few values of \(n\).
    Next, compare an element's colour with \(\gcd(a, n)\). The pattern you find is a theorem in the reading.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>A congruence with no solution</h2>

  <div class="mc" data-answer="a">
    <p class="mc-q">How many \(x \in \mathbb{Z}_{8}\) satisfy \(6x \equiv 3 \pmod{8}\)?</p>
    <button class="mc-opt" data-key="a">None.</button>
    <button class="mc-opt" data-key="b">Exactly one.</button>
    <button class="mc-opt" data-key="c">Exactly two.</button>
    <button class="mc-opt" data-key="d">Infinitely many.</button>
    <div class="mc-fb" data-key="a"><p>Right. \(6x - 3\) is always odd, and an odd number is never a multiple of
      \(8\). In the language of the reading: \(\gcd(6, 8) = 2\) doesn't divide \(3\), so \(6\) has no inverse
      mod \(8\) to divide by, and nothing else can save the equation.</p></div>
    <div class="mc-fb" data-key="b"><p>Exactly one solution is what happens when \(6\) has an inverse mod \(8\),
      so you could multiply both sides by it. Does it? Look for a \(1\) in row \(6\) of the \(\mathbb{Z}_{8}\)
      multiplication table above.</p></div>
    <div class="mc-fb" data-key="c"><p>Two solutions is what you'd get for \(6x \equiv 2 \pmod{8}\) (try
      \(x = 3\) and \(x = 7\)). Here the right side is odd. Can \(6x - 3\) ever be a multiple of \(8\)?</p></div>
    <div class="mc-fb" data-key="d"><p>\(\mathbb{Z}_8\) has only eight elements, so there are at most eight
      solutions. And \(6x\) is always even mod \(8\), while \(3\) is odd.</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Socks and shoes: \((ab)^{-1} = b^{-1}a^{-1}\)</h2>

  <p>One of the first things the reading proves about every group is that inverting a product reverses its
    order. Commit to an answer for each step before you reveal it.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">What exactly do we have to show? "\(b^{-1}a^{-1}\) is the inverse of \(ab\)"
          means which equation(s)?</div>
        <div class="sstep-body"><p>That \((ab)(b^{-1}a^{-1}) = e\) and \((b^{-1}a^{-1})(ab) = e\). In a group,
          inverses are unique, so any element that does this job <em>is</em> \((ab)^{-1}\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">\((ab)(b^{-1}a^{-1})\) has four letters in it. Which axiom lets you move the
          parentheses, and where do you want them?</div>
        <div class="sstep-body"><p>Associativity: \((ab)(b^{-1}a^{-1}) = a(bb^{-1})a^{-1}\). We want \(b\) and
          \(b^{-1}\) side by side.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Finish the computation.</div>
        <div class="sstep-body"><p>\(a(bb^{-1})a^{-1} = aea^{-1} = aa^{-1} = e.\) The other order,
          \((b^{-1}a^{-1})(ab) = b^{-1}(a^{-1}a)b = b^{-1}eb = e\), is the same argument.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Where would \(a^{-1}b^{-1}\) have gone wrong? Try the same computation with it.</div>
        <div class="sstep-body"><p>\((ab)(a^{-1}b^{-1})\) has \(b\) next to \(a^{-1}\), and nothing cancels unless
          you may swap \(b\) and \(a^{-1}\). That needs commutativity, and groups don't promise it. (You put on socks,
          then shoes; to undo it you take off shoes, then socks.)</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>A "law of exponents" that isn't</h2>

  <p>A classmate claims that in every group, \((ab)^2 = a^2b^2\). Here's their proof.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">\((ab)^2 = (ab)(ab)\), by the definition of squaring.</button>
      <button class="fline" type="button">\((ab)(ab) = a(ba)b\), by associativity.</button>
      <button class="fline" type="button">\(a(ba)b = a(ab)b\), since \(ba = ab\).</button>
      <button class="fline" type="button">\(a(ab)b = (aa)(bb)\), by associativity again.</button>
      <button class="fline" type="button">\((aa)(bb) = a^2b^2\). \(\blacksquare\)</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> \(g^2\) means \(gg\), with \(g = ab\).</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> Associativity lets you regroup a product of
      four elements however you like, as long as you don't change their order.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>This is the flaw.</strong> \(ba = ab\) is commutativity, which
      isn't an axiom. The triangle gives a counterexample: with \(a = \rho_1\) and \(b = \mu_1\), use the table to
      compute \((\rho_1\mu_1)^2\) and \(\rho_1^2\mu_1^2\). They differ. The claim is true exactly when \(ab = ba\),
      which you could prove by running this argument backwards with cancellation.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine.</strong> Same order of letters, new parentheses.</p></div>
    <div class="flaw-verdict" data-key="5"><p><strong>Fine.</strong> That's the definition of \(a^2\) and \(b^2\).</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>In the finished triangle table, every element appears exactly once in each row and each column. Explain
      why that must happen in <em>any</em> group's table, using \(ax = ay \Rightarrow x = y\).</li>
    <li>The triangle has three rotations (counting \(\mathrm{id}\)) and three flips. Rotation followed by rotation
      is a rotation. What is flip followed by flip? Rotation followed by flip? Find the pattern in the table, then
      explain it with a picture.</li>
    <li>Why do we bother insisting on associativity, when it's the one axiom you can't see in a table?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;
    var names = ['A', 'B', 'C'];
    A.polygon('d3-move', { n: 3, names: names, labels: 'judson3' });
    A.polygon('d3-compose', { n: 3, names: names, labels: 'judson3', mode: 'compose', X: 3, Y: 1 });

    var G = A.D(3, { labels: 'judson3' });
    var L = function (x) { return G.index(x); };
    A.cayley('d3-fill', {
      group: G, clickable: false,
      blanks: [[L('ρ₁'), L('μ₁')], [L('ρ₂'), L('ρ₂')], [L('μ₁'), L('ρ₁')], [L('μ₁'), L('μ₂')],
               [L('μ₂'), L('ρ₁')], [L('μ₂'), L('μ₃')], [L('μ₃'), L('ρ₂')], [L('μ₃'), L('μ₃')]]
    });
    A.cayley('d3-table', { group: G, showPowers: false });
    // Held back: Z_6, Z_7 (3.5 Ex 1), Z_4 (Ex 3's table), Z_10, Z_12, Z_18 (units and ideals,
    // Ch 16 Ex 3-5, Days 28-29).
    A.ring('d3-ring', { n: 8, show: 'mul', maxN: 20, avoid: [4, 6, 7, 10, 12, 18] });
  })();
</script>
