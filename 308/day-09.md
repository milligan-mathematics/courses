---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 9: Read the Arrows Right to Left"
day: 9
chapter_number: 5
chapter: "Permutation Groups"
day_title: "Read the Arrows Right to Left"
blurb: "A permutation is a rearrangement with arrows: each number points to where it lands. Judson packs those arrows into short loops called cycles, and multiplying two of them means reading right to left, the rule that trips up nearly everyone in the first week."
reading: "Chapter 5, Day 1: Section 5.1, from permutations and two-line notation through cycles, disjoint cycles, and transpositions"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Two rows, then loops</h2>

  <p>Judson writes a permutation of \(\{1, 2, \ldots, n\}\) as a two-row array. The top row lists the numbers, and
    the row underneath gives where each one goes. This permutation sends \(1\) to \(3\), \(2\) to \(5\), and so on:</p>

  <table class="twoline" aria-label="Two-row array for a permutation of 1 to 6">
    <tr><th scope="row">number</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
    <tr><th scope="row">goes to</th><td>3</td><td>5</td><td>1</td><td>6</td><td>4</td><td>2</td></tr>
  </table>

  <p>Before you type anything, predict the cycle notation. Start at \(1\), follow the arrows until you return to
    \(1\), then start again at the smallest number you haven't used. Type your answer in the box for \(\sigma\). The
    box for \(\tau\) stays at \((1)\), the identity, so the picture shows \(\sigma\) alone.</p>

  <div id="d09-two-line"></div>

  <p>Look at what the picture shows. Each loop in the cycle notation is a set of arrows you can trace on the diagram.
    If the arrows in the widget don't match the table, you have misread one column.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Follow one number through two moves</h2>

  <p>The reading multiplies permutations right to left: \(\sigma\tau\) means do \(\tau\) first, then \(\sigma\). Judson
    adopts this convention on purpose, because it matches how we compose functions. Type \(\sigma = (1\,3\,6)\) in the
    first box and \(\tau = (1\,2\,4\,5)\) in the second. Predict, before you type the second one, where \(1\) ends up
    under \(\sigma\tau\).</p>

  <div id="d09-follow"></div>

  <p>Now predict where \(1\) ends up under \(\tau\sigma\). The trace follows only \(\sigma\tau\). For \(\tau\sigma\), read
    the small gray line at the bottom of the readout, which prints \(\tau\sigma\) in cycle notation. The number after
    \(1\) in that cycle is where \(1\) goes.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>A cycle as a product of swaps</h2>

  <p>Judson shows that every cycle is a product of transpositions, which are cycles of length two. The formula is
    \((a_1, a_2, \ldots, a_n) = (a_1\,a_n)(a_1\,a_{n-1})\cdots(a_1\,a_2)\). Take \((1\,6\,2\,4)\), so \(a_1 = 1\),
    \(a_2 = 6\), \(a_3 = 2\), and \(a_4 = 4\). Before you type, use the formula to write \((1\,6\,2\,4)\) as a product of
    transpositions, and predict how many factors you get.</p>

  <div id="d09-formula"></div>

  <p>Type the first two factors of your product into the \(\sigma\) box and the last factor into the \(\tau\) box. The
    readout should return \((1\,6\,2\,4)\). The parity line is there for later. Tomorrow you will learn what it means.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Right to left, and what commutes</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Let \(\sigma = (1\,2\,3)\) and \(\tau = (3\,4)\). What is \(\sigma\tau(3)\)?</p>
    <button class="mc-opt" data-key="a">\(1\)</button>
    <button class="mc-opt" data-key="b">\(2\)</button>
    <button class="mc-opt" data-key="c">\(4\)</button>
    <button class="mc-opt" data-key="d">\(3\)</button>
    <div class="mc-fb" data-key="a"><p>That is \(\tau\sigma(3)\). You applied \(\sigma\) first, which is the left-to-right
      reading. Under the chapter's convention \(\tau\) goes first, and \(\tau(3) = 4\).</p></div>
    <div class="mc-fb" data-key="b"><p>Neither factor sends \(3\) to \(2\). Trace the arrows one factor at a time,
      starting with the one on the right.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. \(\tau\) sends \(3\) to \(4\), and then \(\sigma\) fixes \(4\), so
      \(\sigma\tau(3) = 4\).</p></div>
    <div class="mc-fb" data-key="d"><p>\(\tau\) moves \(3\), so the product cannot fix \(3\). Check which factor
      touches \(3\) first.</p></div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Let \(\sigma = (1\,4\,6)\) and \(\tau = (2\,5\,3\,7)\). Which statement is true?</p>
    <button class="mc-opt" data-key="a">\(\sigma\tau = \tau\sigma\), because the two cycles share no number.</button>
    <button class="mc-opt" data-key="b">\(\sigma\tau = \tau\sigma\), because any two cycles commute.</button>
    <button class="mc-opt" data-key="c">\(\sigma\tau \neq \tau\sigma\), because \(\sigma\) acts on \(\tau\)'s numbers first.</button>
    <button class="mc-opt" data-key="d">\(\sigma\tau = \tau\sigma\), but only when the two cycles have the same length.</button>
    <div class="mc-fb" data-key="a"><p>Right. Neither cycle touches the other's numbers, so either order gives the same
      map. This is Judson's proposition on disjoint cycles.</p></div>
    <div class="mc-fb" data-key="b"><p>That is too strong. The claim is about disjoint cycles, and disjointness is the
      thing doing the work here.</p></div>
    <div class="mc-fb" data-key="c"><p>Check one number. \(\sigma\tau(2) = \sigma(5) = 5\), and
      \(\tau\sigma(2) = \tau(2) = 5\). The two products agree there, and the argument below shows they agree everywhere.</p></div>
    <div class="mc-fb" data-key="d"><p>Length plays no role. The proof uses only that the two cycles are disjoint.</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">How many transpositions does the formula \((a_1\,a_n)\cdots(a_1\,a_2)\) produce for a 7-cycle?</p>
    <button class="mc-opt" data-key="a">\(5\)</button>
    <button class="mc-opt" data-key="b">\(6\)</button>
    <button class="mc-opt" data-key="c">\(7\)</button>
    <button class="mc-opt" data-key="d">\(21\)</button>
    <div class="mc-fb" data-key="a"><p>Five is one short. The formula has one factor for each of \(a_2\) through
      \(a_7\), which is six.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. One factor for each of \(a_2, \ldots, a_7\): six in all. Multiply them
      out and you get \((1\,2\,3\,4\,5\,6\,7)\).</p></div>
    <div class="mc-fb" data-key="c"><p>Seven is the length of the cycle. The formula has one fewer factor than the
      length.</p></div>
    <div class="mc-fb" data-key="d"><p>Twenty-one is the number of pairs among seven numbers. The formula does not use
      all of them.</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Disjoint cycles commute</h2>

  <p>This is Judson's proposition, and his proof is short enough to walk one step at a time. Let
    \(\sigma = (a_1, \ldots, a_k)\) and \(\tau = (b_1, \ldots, b_l)\) be disjoint cycles. Commit to an answer before you
    open each step.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">What has to be shown?</div>
        <div class="sstep-body"><p>That \(\sigma\tau(x) = \tau\sigma(x)\) for every \(x\) in \(\{1, \ldots, n\}\). Two
          permutations are equal when they agree at every point.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Take \(x\) in neither cycle. What do \(\sigma\) and \(\tau\) do to \(x\)?</div>
        <div class="sstep-body"><p>Both fix \(x\). So \(\sigma\tau(x) = x = \tau\sigma(x)\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Take \(x = a_i\), a number in \(\sigma\)'s cycle. What is \(\tau(a_i)\)?</div>
        <div class="sstep-body"><p>Since the cycles are disjoint, \(a_i\) is not in \(\tau\)'s cycle, so \(\tau(a_i) = a_i\).
          Therefore \(\sigma\tau(a_i) = \sigma(a_i) = a_{i+1}\), where \(a_{k+1}\) means \(a_1\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Now compute \(\tau\sigma(a_i)\). Which cycle contains \(\sigma(a_i) = a_{i+1}\), and
          what does \(\tau\) do to it?</div>
        <div class="sstep-body"><p>\(a_{i+1}\) is in \(\sigma\)'s cycle, so \(\tau\) fixes it. Thus
          \(\tau\sigma(a_i) = \tau(a_{i+1}) = a_{i+1}\), which matches \(\sigma\tau(a_i)\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Take \(x\) in \(\tau\)'s cycle. Why does the same argument work?</div>
        <div class="sstep-body"><p>Swap the roles of \(\sigma\) and \(\tau\) in the last two steps. Every \(x\) lies in
          neither cycle, in \(\sigma\)'s cycle, or in \(\tau\)'s cycle, so \(\sigma\tau = \tau\sigma\).</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>One cycle, or two?</h2>

  <p>A classmate claims that a product of two disjoint cycles can always be rewritten as a single longer cycle. Here is
    the argument for \(\sigma = (1\,3)(2\,4\,5)\).</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="2">
    <div class="flawlist">
      <button class="fline" type="button">\((1\,3)\) and \((2\,4\,5)\) share no number, so \(\sigma\) is a product of two disjoint cycles.</button>
      <button class="fline" type="button">Disjoint cycles can be joined into one cycle by linking the end of the first to the start of the second. Here that gives \(3\) linking to \(2\), and \(5\) linking back to \(1\).</button>
      <button class="fline" type="button">So \(\sigma = (1\,3\,2\,4\,5)\), a single 5-cycle.</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> Disjoint means no number appears in both cycles.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>This is the flaw.</strong> Joining changes the map. In
      \((1\,3\,2\,4\,5)\) the number \(3\) goes to \(2\), but \(\sigma(3) = 1\). Also \(\sigma(1) = 3\) and
      \(\sigma(3) = 1\), so \(1\) and \(3\) form a loop of their own. No joined cycle has that loop.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>Fine as a step.</strong> The conclusion follows from the line
      above it. The error is in the line above, so this one is wrong only because it inherits that error.</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Two-line notation and cycle notation carry the same information. If you had to decide whether two permutations
      are equal, which form would you rather compare, and why?</li>
    <li>The formula gives one way to write \((1\,2\,3)\) as a product of transpositions. Find a second way. Do both use
      the same number of factors? What would you need to check to be sure they always do?</li>
    <li>The proof that disjoint cycles commute uses disjointness through two facts: \(\tau\) fixes every number in
      \(\sigma\)'s cycle, and \(\sigma\) fixes every number in \(\tau\)'s cycle. Which steps use each fact? Explain in
      words what the argument would need if the two cycles shared a number, without computing an example.</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;

    // The homework products from Exercises 1 to 3, as typed, cycles only. The widget
    // refuses each one, every split of it into two typed factors, and each set against
    // the identity. See checks/check_day_09.js, which runs this same code.
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

    A.perm('d09-two-line', { n: 6, sigma: '(1)', tau: '(1)', avoid: AVOID });
    A.perm('d09-follow', { n: 6, sigma: '(1)', tau: '(1)', avoid: AVOID });
    A.perm('d09-formula', { n: 6, sigma: '(1)', tau: '(1)', avoid: AVOID });
  })();
</script>
