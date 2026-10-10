---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 8: Round Trips and Fast Powers"
day: 8
chapter_number: 4
chapter: "Cyclic Groups"
day_title: "Round Trips and Fast Powers"
blurb: "Multiply two points on the unit circle by adding their angles, and the circle becomes a group you can draw. Its roots of unity form a cyclic group. The same squaring idea computes a huge power mod n in a handful of steps, instead of a huge number of multiplications."
reading: "Chapter 4, Day 3: Sections 4.2 and 4.3, the multiplicative group of complex numbers, the circle group and roots of unity, and the method of repeated squares"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Multiplying points on the circle</h2>

  <p>Write \(\operatorname{cis}\theta = \cos\theta + i\sin\theta\). Every point of the unit circle has this form. The
    reading's proposition on polar multiplication says that multiplying two nonzero complex numbers multiplies their
    lengths and adds their angles. For points on the unit circle, the product's angle is the sum of the two angles.</p>

  <div id="d08-circle"></div>

  <p>The default is \(z = \operatorname{cis}40^\circ\) and \(w = \operatorname{cis}75^\circ\). Predict the angle of \(zw\)
    before you press the button. Then set both angles to \(200^\circ\), predict where the product lands, and check. Where
    does the sum wrap around?</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>DeMoivre's theorem, by induction</h2>

  <p>Judson proves that for a nonzero \(z = r\operatorname{cis}\theta\), \([r\operatorname{cis}\theta]^n =
    r^n\operatorname{cis}(n\theta)\) for every positive integer \(n\). The induction is short. The real work is one
    multiplication and the angle-addition formulas. Commit to each step first.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">What does the statement say when \(n = 1\), and why is that case trivial?</div>
        <div class="sstep-body"><p>It says \(z = r\operatorname{cis}\theta\), which is the definition of \(z\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Assume \(z^n = r^n\operatorname{cis}(n\theta)\) for some \(n \ge 1\). What must you show for
          \(n + 1\)?</div>
        <div class="sstep-body"><p>That \(z^{n+1} = r^{n+1}\operatorname{cis}((n+1)\theta)\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Write \(z^{n+1} = z^n \cdot z\) and multiply the two cis-forms. What do you get before you
          simplify?</div>
        <div class="sstep-body"><p>\(r^{n+1}\big[(\cos n\theta\cos\theta - \sin n\theta\sin\theta) + i(\sin n\theta\cos\theta +
          \cos n\theta\sin\theta)\big]\). Complex numbers multiply out like polynomials, using \(i^2 = -1\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Which identities turn the two brackets into a single cis?</div>
        <div class="sstep-body"><p>The angle-addition formulas for cosine and sine, applied to \(n\theta + \theta\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Put it together. Why does that finish the induction?</div>
        <div class="sstep-body"><p>The brackets are \(\cos((n+1)\theta) + i\sin((n+1)\theta)\), so \(z^{n+1} =
          r^{n+1}\operatorname{cis}((n+1)\theta)\). The statement holds for \(n = 1\), and it holds for \(n+1\) whenever
          it holds for \(n\). So it holds for every positive \(n\).</p></div>
      </li>
    </ol>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Roots of unity around a circle</h2>

  <p>The \(n\)th roots of unity are the solutions of \(z^n = 1\). They sit evenly spaced around the unit circle, and the
    reading states that they form a cyclic group of order \(n\). Let \(\omega = \cos(2\pi/n) + i\sin(2\pi/n)\). The first
    clock below stays on the 8th roots, and its hand starts at \(\omega^2\).</p>

  <div id="d08-roots-8"></div>

  <p>Before you move the slider, predict which of \(\omega, \omega^2, \ldots, \omega^7\) are primitive: which ones reach all
    eight roots before they return to \(1\). Then check each one.</p>

  <div id="d08-roots-9"></div>

  <p>The second clock stays on the 9th roots, and its hand starts at \(\omega^3\). Before you check, predict which powers
    \(\omega^k\) on this clock are primitive.</p>

  <p>Compare your answers with the order rule from Day 7. The readout gives the order of \(\omega^k\). What pattern do the
    primitive ones follow?</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Is the square of a primitive root primitive?</h2>

  <p>A classmate argues that if \(\omega = \operatorname{cis}(\pi/4)\) is a primitive 8th root of unity, so is \(\omega^2\).
    Here is the argument. Click the line that isn't justified.</p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Let \(\omega = \operatorname{cis}(\pi/4)\) and \(\zeta = \omega^2\).</button>
      <button class="fline" type="button">Then \(\zeta^8 = \omega^{16} = 1\), so \(\zeta\) is an 8th root of unity.</button>
      <button class="fline" type="button">The powers of \(\zeta\) are \(\zeta^k = \omega^{2k}\) for \(k = 0, 1, \ldots, 7\).</button>
      <button class="fline" type="button">As \(k\) runs from \(0\) to \(7\), the exponents \(2k\) run through \(0, 1, \ldots, 7\)
        modulo \(8\), each exactly once. So the powers of \(\zeta\) are all eight 8th roots of unity.</button>
      <button class="fline" type="button">So \(\zeta\) is a primitive 8th root of unity.</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> This just names the two numbers.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> \(\omega^8 = 1\), so \(\omega^{16} = (\omega^8)^2 = 1\).</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>Fine.</strong> \((\omega^2)^k = \omega^{2k}\).</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>This is the flaw.</strong> Multiplying exponents by \(2\) is one-to-one
      mod \(8\) only when \(2\) has an inverse mod \(8\), and it doesn't. Every exponent \(2k\) is even, and \(k = 0\) and
      \(k = 4\) both give \(0\). Concretely, \(\zeta = \omega^2 = i\), and \(\zeta^4 = \omega^8 = 1\), so \(\zeta\) has
      order \(4\), not \(8\).</p></div>
    <div class="flaw-verdict" data-key="5"><p><strong>Fine as a deduction.</strong> If the powers of \(\zeta\) really were all
      eight roots, \(\zeta\) would be primitive. The trouble is line 4, so this line is only as good as that one.</p></div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Squaring your way to a big power</h2>

  <p>Section 4.3 opens with a power nobody can write out, and asks how to compute it mod \(n\) anyway. The method: write
    the exponent in binary, square the base again and again (reducing mod \(n\) each time), and multiply together only the
    squares that the binary digits call for.</p>

  <div id="d08-squares"></div>

  <p>Before you press anything, predict two things. How many squarings does it take to get from \(a\) to \(a^{32}\)? And
    how many of the squares do you multiply together to get \(a^{45}\)? Then press the button and check your counts.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Binary digits, primitive roots, and DeMoivre</h2>

  <div class="mc" data-answer="a">
    <p class="mc-q">Repeated squaring computes \(a^{13}\). Which product of the powers \(a, a^2, a^4, a^8, \ldots\) gives
      \(a^{13}\)?</p>
    <button class="mc-opt" data-key="a">\(a \cdot a^4 \cdot a^8\)</button>
    <button class="mc-opt" data-key="b">\(a^2 \cdot a^4 \cdot a^8\)</button>
    <button class="mc-opt" data-key="c">\(a^8 \cdot a^8\)</button>
    <button class="mc-opt" data-key="d">\(a \cdot a^2 \cdot a^4 \cdot a^8\)</button>
    <div class="mc-fb" data-key="a"><p>Right. \(13 = 1101_2 = 8 + 4 + 1\). You need \(a\), \(a^4\), and \(a^8\). Squaring
      gives \(a^2\), then \(a^4\), then \(a^8\), so three squarings in all.</p></div>
    <div class="mc-fb" data-key="b"><p>That product is \(a^{14}\), since \(2 + 4 + 8 = 14\). The binary digits of \(13\) have a
      zero in the twos place.</p></div>
    <div class="mc-fb" data-key="c"><p>That's \(a^{16}\). The method uses each power of \(2\) at most once, because each binary
      digit is \(0\) or \(1\).</p></div>
    <div class="mc-fb" data-key="d"><p>That's \(a^{15}\), since \(1 + 2 + 4 + 8 = 15 = 1111_2\). Thirteen has a zero in the
      twos place.</p></div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Which complex number is a primitive 8th root of unity?</p>
    <button class="mc-opt" data-key="a">\(i\), at \(90^\circ\)</button>
    <button class="mc-opt" data-key="b">\(-1\), at \(180^\circ\)</button>
    <button class="mc-opt" data-key="c">\(\operatorname{cis}(\pi/4)\), at \(45^\circ\)</button>
    <button class="mc-opt" data-key="d">\(\frac{1+i}{2}\), at \(45^\circ\)</button>
    <div class="mc-fb" data-key="a"><p>\(i^4 = 1\) and \(i^2 = -1\), so \(i\) has order \(4\). It's an 8th root of unity,
      since \(i^8 = 1\), but not a primitive one.</p></div>
    <div class="mc-fb" data-key="b"><p>\((-1)^8 = 1\), so \(-1\) is an 8th root of unity. But \((-1)^2 = 1\) already, so its
      order is \(2\).</p></div>
    <div class="mc-fb" data-key="c"><p>Right. \(\omega^8 = 1\), but no smaller positive power is. For example,
      \(\omega^2 = i\) and \(\omega^4 = -1\), and neither is \(1\).</p></div>
    <div class="mc-fb" data-key="d"><p>Same direction as the right answer, but not on the circle. Its distance from \(0\) is
      \(\sqrt{2}/2\), so it isn't a root of unity of any order.</p></div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Using DeMoivre's theorem, what is \((2\operatorname{cis}\theta)^3\)?</p>
    <button class="mc-opt" data-key="a">\(8\operatorname{cis}(3\theta)\)</button>
    <button class="mc-opt" data-key="b">\(6\operatorname{cis}(3\theta)\)</button>
    <button class="mc-opt" data-key="c">\(8\operatorname{cis}(\theta^3)\)</button>
    <button class="mc-opt" data-key="d">\(2\operatorname{cis}(3\theta)\)</button>
    <div class="mc-fb" data-key="a"><p>Right. The modulus gets cubed, \(2^3 = 8\), and the angle gets multiplied by \(3\).</p></div>
    <div class="mc-fb" data-key="b"><p>The modulus is cubed, not multiplied by \(3\). \(2^3 = 8\), not \(6\).</p></div>
    <div class="mc-fb" data-key="c"><p>DeMoivre multiplies the angle by the exponent, giving \(3\theta\). The angle isn't
      raised to a power.</p></div>
    <div class="mc-fb" data-key="d"><p>The modulus gets raised to the third power too, so \(2^3 = 8\), not \(2\).</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Repeated squaring takes about \(\log_2 b\) squarings, not \(b - 1\) multiplications. Why does reducing mod \(n\)
      after each step matter, and how large can the numbers get?</li>
    <li>The angle of a point on the circle is only fixed up to adding \(360^\circ\). What is the polar form of the point you
      get from \(400^\circ\), and why does the reading require \(0^\circ \le \theta < 360^\circ\)?</li>
    <li>The reading says this method is needed for RSA encryption in Chapter 7. Why would computing
      \(2^{37{,}398{,}332}\) by first working out the whole number be hopeless, even on a computer?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;
    var AVOID_NOTE = 'That one is on your homework, so this page won’t do it for you. Work it by hand, then bring it to class — or try a different input here.';

    // Both roots clocks stay at a fixed size (fixedN). Orders 5 and 6 never divide 8 or 9, so no pentagon or
    // hexagon of roots can appear. The avoid list still covers the 5th and 6th roots (Ex 21, Ex 20) and the Ex 2 pair.
    function allK(n) { var out = []; for (var k = 0; k < n; k++) out.push([n, k]); return out; }
    var AVOID_ROOTS = allK(5).concat(allK(6), [[12, 5]]);
    A.clock('d08-roots-8', { n: 8, k: 2, roots: true, fixedN: true, avoid: AVOID_ROOTS });
    A.clock('d08-roots-9', { n: 9, k: 3, roots: true, fixedN: true, avoid: AVOID_ROOTS });

    // BEGIN sqMath (pure arithmetic for the stepper; the check script evaluates this block)
    function sqMath(a, b, n) {
      var bits = [], x = b;
      while (x > 0) { bits.push(x % 2); x = Math.floor(x / 2); }
      var squares = [a % n];
      for (var i = 1; i < bits.length; i++) squares.push((squares[i - 1] * squares[i - 1]) % n);
      var used = [], result = null, prodLines = [];
      for (var j = 0; j < bits.length; j++) {
        if (!bits[j]) continue;
        used.push(j);
        if (result === null) { result = squares[j]; prodLines.push('start with a^' + Math.pow(2, j) + ' ≡ ' + squares[j]); }
        else {
          var p = result * squares[j];
          prodLines.push(result + ' · ' + squares[j] + ' = ' + p + ' ≡ ' + (p % n) + ' (mod ' + n + ')');
          result = p % n;
        }
      }
      return { bits: bits, squares: squares, used: used, result: result, prodLines: prodLines,
        squarings: bits.length - 1, multiplications: used.length - 1 };
    }
    // END sqMath

    // Stepper: a^b mod n by repeated squaring. These inputs are assigned (Ex 22, and the reading question on 15^40 mod 23).
    var HW = [[292, 3171, 582], [2557, 341, 5681], [2071, 9521, 4724], [971, 321, 765], [15, 40, 23]];
    var sqRoot = document.getElementById('d08-squares');
    var inA = A.h('input', { type: 'number', min: 1, step: 1, value: 3, 'aria-label': 'base a', class: 'a308-num' });
    var inB = A.h('input', { type: 'number', min: 1, step: 1, value: 45, 'aria-label': 'exponent b', class: 'a308-num' });
    var inN = A.h('input', { type: 'number', min: 2, step: 1, value: 100, 'aria-label': 'modulus n', class: 'a308-num' });
    var goBtn = A.h('button', { class: 'btn411', type: 'button', text: 'Compute a^b mod n' });
    var sqOut = A.h('div', { class: 'readout a308-readout', 'aria-live': 'polite', text: 'Predict first, then press the button.' });
    sqRoot.appendChild(A.h('div', { class: 'ctl-row' }, [
      A.h('div', { class: 'ctl' }, [A.h('label', { text: 'a' }), inA]),
      A.h('div', { class: 'ctl' }, [A.h('label', { text: 'b' }), inB]),
      A.h('div', { class: 'ctl' }, [A.h('label', { text: 'n' }), inN])
    ]));
    sqRoot.appendChild(A.h('div', { class: 'a308-row' }, [goBtn]));
    sqRoot.appendChild(sqOut);

    goBtn.addEventListener('click', function () {
      var a = Math.floor(Number(inA.value)), b = Math.floor(Number(inB.value)), n = Math.floor(Number(inN.value));
      if (!(a >= 1 && b >= 1 && b <= 1000000 && n >= 2 && n <= 10000)) {
        sqOut.textContent = 'Use whole numbers: a at least 1, b from 1 to 1,000,000, and n from 2 to 10,000.';
        return;
      }
      if (HW.some(function (t) { return t[0] === a && t[1] === b && t[2] === n; })) { sqOut.textContent = AVOID_NOTE; return; }
      var s = sqMath(a, b, n), li = function (t) { return '<li>' + t + '</li>'; }, sq = '';
      sq += li('a^1 ≡ ' + s.squares[0] + ' (mod ' + n + ')');
      for (var i = 1; i < s.squares.length; i++) {
        var prev = s.squares[i - 1];
        sq += li('a^' + Math.pow(2, i) + ' = (a^' + Math.pow(2, i - 1) + ')^2 ≡ ' + prev + '^2 = ' + (prev * prev) +
          ' ≡ ' + s.squares[i] + ' (mod ' + n + ')');
      }
      sqOut.innerHTML =
        '<p><strong>' + b + '</strong> in binary is <span class="mono">' + b.toString(2) + '</span>, so ' + b + ' = ' +
        s.used.map(function (j) { return '2^' + j; }).join(' + ') + '.</p>' +
        '<p>Square the base, reducing mod ' + n + ' at each step:</p><ol class="a308-steps">' + sq + '</ol>' +
        '<p>Multiply together the squares for the 1 digits:</p><ol class="a308-steps">' +
        s.prodLines.map(li).join('') + '</ol>' +
        '<p><strong>' + a + '^' + b + ' ≡ ' + s.result + ' (mod ' + n + ').</strong> That took ' + s.squarings +
        ' squarings and ' + s.multiplications + ' multiplications. Multiplying out directly would take ' + (b - 1) + '.</p>';
    });

    // Circle group: multiply two points on the unit circle by adding angles.
    var cRoot = document.getElementById('d08-circle');
    var zDeg = 40, wDeg = 75, showP = false;
    var sZ = A.h('input', { type: 'range', min: 0, max: 355, step: 5, value: zDeg, 'aria-label': 'angle of z, in degrees' });
    var sW = A.h('input', { type: 'range', min: 0, max: 355, step: 5, value: wDeg, 'aria-label': 'angle of w, in degrees' });
    var lZ = A.h('label', { text: 'z = cis ' + zDeg + '°' }), lW = A.h('label', { text: 'w = cis ' + wDeg + '°' });
    var mulBtn = A.h('button', { class: 'btn411', type: 'button', text: 'Multiply z and w' });
    var cWrap = A.h('div', { class: 'a308-clock-wrap' });
    var cOut = A.h('div', { class: 'readout a308-readout', 'aria-live': 'polite' });
    cRoot.appendChild(A.h('div', { class: 'ctl-row' }, [A.h('div', { class: 'ctl' }, [lZ, sZ]), A.h('div', { class: 'ctl' }, [lW, sW])]));
    cRoot.appendChild(cWrap);
    cRoot.appendChild(A.h('div', { class: 'a308-row' }, [mulBtn]));
    cRoot.appendChild(cOut);

    function at(deg, rad) { var t = deg * Math.PI / 180; return [150 + rad * Math.cos(t), 150 - rad * Math.sin(t)]; }
    function dot(deg, color, label) {
      var p = at(deg, 110), q = at(deg, 132);
      return [
        A.svg('line', { x1: 150, y1: 150, x2: p[0], y2: p[1], stroke: color, 'stroke-width': 2 }),
        A.svg('circle', { cx: p[0], cy: p[1], r: 6, fill: color }),
        A.svg('text', { x: q[0], y: q[1] + 4, 'text-anchor': 'middle', class: 'lab', text: label })
      ];
    }
    function drawCircle() {
      var sum = (zDeg + wDeg) % 360;
      var kids = [A.svg('circle', { cx: 150, cy: 150, r: 110, class: 'rim' })].concat(dot(zDeg, A.PALETTE[0], 'z'), dot(wDeg, A.PALETTE[1], 'w'));
      if (showP) kids = kids.concat(dot(sum, A.PALETTE[2], 'zw'));
      var svg = A.svg('svg', { viewBox: '0 0 300 300', class: 'a308-clock', role: 'img',
        'aria-label': 'Unit circle with z at ' + zDeg + ' degrees and w at ' + wDeg + ' degrees' + (showP ? ', and zw at ' + sum + ' degrees' : '') }, kids);
      cWrap.innerHTML = '';
      cWrap.appendChild(svg);
      cOut.innerHTML = !showP ? 'Predict the angle of <span class="mono">zw</span>, then press the button.'
        : '<strong>zw = cis ' + sum + '°.</strong> The angles add: ' + zDeg + '° + ' + wDeg + '° = ' + (zDeg + wDeg) + '°' +
          (zDeg + wDeg >= 360 ? ', and going once around the circle brings that back to ' + sum + '°' : '') +
          '. The length is 1 · 1 = 1, so the product is still on the circle.';
    }
    sZ.addEventListener('input', function () { zDeg = Number(sZ.value); lZ.textContent = 'z = cis ' + zDeg + '°'; showP = false; drawCircle(); });
    sW.addEventListener('input', function () { wDeg = Number(sW.value); lW.textContent = 'w = cis ' + wDeg + '°'; showP = false; drawCircle(); });
    mulBtn.addEventListener('click', function () { showP = true; drawCircle(); });
    drawCircle();
  })();
</script>
