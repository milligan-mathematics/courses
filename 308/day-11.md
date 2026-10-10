---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 11: Two Moves Make Every Symmetry"
day: 11
chapter_number: 5
chapter: "Permutation Groups"
day_title: "Two Moves Make Every Symmetry"
blurb: "A hexagon has a finite list of symmetries, and two of its motions do all the work: a turn and a flip. Judson's dihedral groups are the rigid motions of a regular polygon, and a cube's rigid motions form a group too, one Judson identifies with a permutation group you have already met."
reading: "Chapter 5, Day 3: Section 5.2, dihedral groups through the generators r and s, and the motion group of a cube"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Flip, then turn</h2>

  <p>Judson's dihedral group \(D_n\) is the group of rigid motions of a regular \(n\)-gon, and the reading shows it has
    \(2n\) elements. Its turn \(r\) is the rotation by \(360^\circ/n\). Here the polygon is a hexagon, so \(r\) turns it
    by \(60^\circ\). Its vertices are numbered \(1\) to \(6\) clockwise from the top. The gray numbers are fixed
    positions, and the bold labels ride along with the polygon. Judson's two basic motions are a turn \(r\), which moves
    each vertex one position clockwise, and a flip \(s\) across the vertical line through position \(1\).</p>

  <p>Before you press anything, predict this. Flip first, then turn. Where does the vertex starting at position \(1\)
    end up? Is the total motion \(rs\) or \(sr\)? Then press Flip, then Rotate, and read the readout.</p>

  <div id="d11-turn"></div>

  <p>The readout writes the product with the later move on the left. The flip came first, so it sits on the right. That
    is the chapter's convention for permutations: \(rs\) means do \(s\) first, then \(r\). Does the position you predicted
    match the one on the polygon?</p>

  <p>Now reset and try the other order: turn first, then flip. Predict where the vertex at position \(1\) ends up, and
    compare it with the flip-then-turn answer. The same two moves, in the other order, send that vertex to a different
    place.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Two flips make a turn</h2>

  <p>Now compose two motions directly. The menus start with \(X = rs\) and \(Y = s\). The button does \(Y\) first, then
    \(X\). Predict the result before you press the button. Is it a turn or a flip?</p>

  <div id="d11-compose"></div>

  <p>Now set \(X = s\) and \(Y = rs\), and predict again before you press. Which order gives \(r\), and which gives
    \(r^5\)? The two answers are different turns.</p>

  <p>What to notice: the two results are inverses of each other, since \(r^5 = r^{-1}\). The product in the second setting
    is \(srs\), and the reading records \(srs = r^{-1}\), leaving its proof to you. This explore is one instance of it.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Twelve motions in one table</h2>

  <p>Every motion of the hexagon is one of the twelve elements \(r^k\) or \(r^k s\), with \(k = 0, \ldots, 5\). That is the
    dihedral group \(D_6\), and Judson shows it is a subgroup of \(S_6\), the permutations of the vertices. In the table,
    row \(X\) and column \(Y\) hold \(XY\), with \(Y\) done first. The six turns are shaded. Judson calls them rotations,
    and the reading says the rotation \(r\) generates all of them.</p>

  <div id="d11-table"></div>

  <p>Before you read any entry, predict whether the shaded block is closed under products. Then compare the cell in row
    \(s\), column \(r\), with the cell in row \(r\), column \(s\). Which of the two names \(rs\)? Every row and every
    column lists all twelve motions exactly once, which gives you a quick check on any entry you fill in. Which row
    copies the column headings exactly, and why must it be the row for the identity? If a cell disagrees with your
    product, check the order first. Reading right to left is the most common source of error here.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Order, count, and what a cube has</h2>

  <p>The reading's second example is the cube. Its rigid motions also form a group, and Judson counts them before he
    says what the group is. The cube question is the last one below. Try it yourself before you read the choices, and
    watch for whether a mirror image of the cube counts as a motion.</p>

  <div class="mc" data-answer="b">
    <p class="mc-q">With the chapter's right-to-left convention for permutations, what does the product \(rs\) of two motions mean?</p>
    <button class="mc-opt" data-key="a">Do \(r\) first, then \(s\).</button>
    <button class="mc-opt" data-key="b">Do \(s\) first, then \(r\).</button>
    <button class="mc-opt" data-key="c">Do \(r\) and \(s\) at the same time.</button>
    <button class="mc-opt" data-key="d">It is the same motion as \(sr\).</button>
    <div class="mc-fb" data-key="a"><p>That is \(sr\). Under the chapter's right-to-left convention, the factor on the
      right is done first.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. The flip \(s\) acts first, and then the turn \(r\) acts on the result.</p></div>
    <div class="mc-fb" data-key="c"><p>Motions happen one after another, so there is an order. The convention says which
      one comes first, and the order matters: \(rs\) and \(sr\) are different motions.</p></div>
    <div class="mc-fb" data-key="d"><p>Not in general. For the hexagon, \(sr = r^5 s\), a different motion from \(rs\).</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">How many rigid motions does a regular hexagon have?</p>
    <button class="mc-opt" data-key="a">\(6\)</button>
    <button class="mc-opt" data-key="b">\(12\)</button>
    <button class="mc-opt" data-key="c">\(36\)</button>
    <button class="mc-opt" data-key="d">\(720\)</button>
    <div class="mc-fb" data-key="a"><p>Six turns alone. The flips add six more.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. Six turns and six flips, so \(2n = 12\) motions. That is the order of \(D_6\).</p></div>
    <div class="mc-fb" data-key="c"><p>Motions are not pairs of turns and flips. Each motion is one element of the
      twelve, not a combination of two lists, so the count is not \(6 \cdot 6\). A turn applied after a flip gives
      \(r^a(r^b s) = r^{a+b} s\), so the 36 pairs give only six different motions.</p></div>
    <div class="mc-fb" data-key="d"><p>That is every permutation of six vertices, \(6!\). Only twelve of those are
      rigid motions of the hexagon.</p></div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">How many rigid motions does a cube have, in Judson's sense?</p>
    <button class="mc-opt" data-key="a">\(6\)</button>
    <button class="mc-opt" data-key="b">\(12\)</button>
    <button class="mc-opt" data-key="c">\(24\)</button>
    <button class="mc-opt" data-key="d">\(48\)</button>
    <div class="mc-fb" data-key="a"><p>Six is the number of faces. A motion that keeps one face up can still turn in four
      ways.</p></div>
    <div class="mc-fb" data-key="b"><p>Twelve is the number of edges, which is not what the count uses.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. Six choices of face to put on top, and four turns that keep that face on
      top: \(6 \cdot 4 = 24\). Judson's proposition gives this count.</p></div>
    <div class="mc-fb" data-key="d"><p>Forty-eight would count the mirror images too. Judson's rigid motions are rotations
      only, so reflections are not included.</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Every motion is a turn or a flip followed by a turn</h2>

  <p>This is the reading's proof that \(r\) and \(s\) generate \(D_n\). Number the vertices \(1\) to \(n\) around the
    polygon, and read vertex numbers mod \(n\). Let \(t\) be any rigid motion. We want \(t = r^j\) or \(t = r^j s\) for
    some \(j\). Keep the hexagon's table open while you go, and check each line against a cell you can find.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Where can vertex \(1\) go under \(t\)?</div>
        <div class="sstep-body"><p>To some vertex \(j + 1\), for some \(j\) from \(0\) to \(n - 1\). The turn \(r^j\) also
          sends vertex \(1\) to \(j + 1\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Where can vertex \(2\) go? Use the fact that a motion keeps neighboring vertices
          neighbors.</div>
        <div class="sstep-body"><p>Vertex \(2\) is next to vertex \(1\), so \(t(2)\) is next to \(j + 1\). That leaves
          only two choices: \(j + 2\) or \(j\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">If \(t(2) = j + 2\), why is \(t = r^j\)?</div>
        <div class="sstep-body"><p>The turn \(r^j\) also sends \(1\) to \(j + 1\) and \(2\) to \(j + 2\). Once two adjacent
          vertices are placed, the rest of the polygon must follow, one neighbor at a time. So the two motions agree
          everywhere.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">If \(t(2) = j\), compare \(t\) with \(r^j s\). Compute \(r^j s\) on \(1\) and on \(2\),
          right to left.</div>
        <div class="sstep-body"><p>The flip \(s\) fixes \(1\) and sends \(2\) to \(n\). So \(r^j s(1) = r^j(1) = j + 1\), and
          \(r^j s(2) = r^j(n) = j\). The motions \(t\) and \(r^j s\) agree on two adjacent vertices, so \(t = r^j s\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">One of the two cases must hold. What does that say about \(D_n\)?</div>
        <div class="sstep-body"><p>Every motion is some \(r^j\) or \(r^j s\). So \(r\) and \(s\) generate \(D_n\), and every
          element is a product of \(r\) and \(s\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">In the last case, why does the order matter, and what would go wrong with the other
          order?</div>
        <div class="sstep-body"><p>The formula \(r^j s\) means flip first, then turn. Read the other way, the same letters
          would do the turn first, so \(r^j s\) would no longer send vertex \(1\) to \(j + 1\), and the case
          check in step 4 would fail.</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
  <p>The proof also counts. Every motion is one of the \(2n\) elements \(r^j\) and \(r^j s\), so \(D_n\) has at most \(2n\)
    elements. The reading's theorem says it has exactly \(2n\).</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Do the turn and the flip commute?</h2>

  <p>A classmate claims that \((rs)^2 = r^2\) in \(D_6\). The mistake here is the most common one with dihedral groups:
    assuming the two basic motions commute. Here is the argument.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">\((rs)^2 = (rs)(rs)\), by the definition of squaring.</button>
      <button class="fline" type="button">\((rs)(rs) = r(sr)s\), by associativity.</button>
      <button class="fline" type="button">\(sr = rs\), so \(r(sr)s = r(rs)s\).</button>
      <button class="fline" type="button">\(r(rs)s = r^2 s^2\), by associativity again.</button>
      <button class="fline" type="button">\(s^2 = e\), so \((rs)^2 = r^2\). \(\blacksquare\)</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> That is what squaring means.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> Associativity lets you regroup a product without
      changing the order of the letters.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>This is the flaw.</strong> \(r\) and \(s\) do not commute. In the
      table, row \(s\), column \(r\) is \(r^5 s\), while row \(r\), column \(s\) is \(rs\). Those are different
      motions.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine.</strong> Regrouping again, with the order of the letters
      unchanged.</p></div>
    <div class="flaw-verdict" data-key="5"><p><strong>Fine as a step.</strong> Given \(r^2 s^2\), the last line does give
      \(r^2\). The wrong conclusion comes from line 3. Counterexample: on the hexagon, \(rs = (1\,2)(3\,6)(4\,5)\), and
      squaring that flip gives the identity. But \(r^2 = (1\,3\,5)(2\,4\,6)\) is a turn by two notches, not the identity.
      So \((rs)^2 = e \neq r^2\).</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Judson's proof of the generator theorem switches to left-to-right products inside the abstract group, in a
      footnote. This page uses right to left throughout, as the chapter does. Rewrite the flip-then-turn from the first
      explore in the other convention. Which symbols change meaning, and which stay the same? In which convention does
      step 4 of the scaffold read most naturally, and why?</li>
    <li>Two different motions of the hexagon move the vertices in different ways. Could two motions move every vertex the
      same way? Why does that make \(D_n\) a subgroup of \(S_n\), rather than just a group that acts on the vertices? Is
      the map from motions to vertex permutations one-to-one? The scaffold has most of the answer.</li>
    <li>Judson counts the cube's motions as six faces times four turns. Why does that count each motion exactly once?
      What would a mirror reflection of the cube add to the count, and why does Judson leave it out?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;

    A.polygon('d11-turn', { n: 6, mode: 'explore' });
    A.polygon('d11-compose', { n: 6, mode: 'compose', X: 7, Y: 6 });
    A.cayley('d11-table', { group: A.D(6), highlight: [0, 1, 2, 3, 4, 5], clickable: false, showPowers: false,
      caption: 'D6 as a table: the six turns are shaded' });
  })();
</script>
