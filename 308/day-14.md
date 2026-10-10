---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 14: Powers That Return to One"
day: 14
chapter_number: 6
chapter: "Cosets and Lagrange's Theorem"
day_title: "Powers That Return to One"
blurb: "Raise a unit mod n to the power φ(n) and you land on 1. Euler's Theorem says so for every n, Fermat's Little Theorem is the prime case, and both are Lagrange's rule applied to the units mod n."
reading: "Chapter 6, Day 3: Section 6.3, Fermat's and Euler's Theorems (the Euler phi-function through Fermat's Little Theorem)"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Watch the powers go around</h2>

  <p>Section 6.3 defines \(\phi(n)\) as the number of integers \(m\) with \(1 \le m \lt n\) and \(\gcd(m, n) = 1\).
    Those \(m\) are exactly the units of \(\mathbb Z_n\), so the group \(U(n)\) of units has \(\phi(n)\) elements.</p>

  <p>Pick \(n\) and a unit \(a\). The explorer lists the powers \(a, a^2, a^3, \dots\) reduced mod \(n\), and draws the
    cycle they make. Predict before you move anything:</p>
  <ul>
    <li>Will the powers of \(a\) ever return to \(1\)?</li>
    <li>If they do, will the first return come at step \(\phi(n)\), before it, or after it?</li>
  </ul>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d14-n">n = <span id="d14-nval">8</span></label>
      <input type="range" id="d14-n" min="3" max="16" step="1" value="8">
    </div>
    <div class="ctl">
      <label for="d14-a">Unit a</label>
      <select id="d14-a"></select>
    </div>
  </div>

  <div class="a308-clock-wrap" id="d14-cycle"></div>
  <div class="a308-cayley-wrap" id="d14-table"></div>
  <div class="readout a308-readout" id="d14-out" aria-live="polite"></div>

  <p>The table lists \(a^k \bmod n\) for \(k = 1\) up to \(\phi(n)\). The first green 1 marks the order of \(a\). Try
    several pairs. Is the order always a divisor of \(\phi(n)\)?</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Counting units, then powers</h2>

  <div class="mc" data-answer="a">
    <p class="mc-q">What is \(\phi(10)\)?</p>
    <button class="mc-opt" data-key="a">4</button>
    <button class="mc-opt" data-key="b">5</button>
    <button class="mc-opt" data-key="c">9</button>
    <button class="mc-opt" data-key="d">10</button>

    <div class="mc-fb" data-key="a"><p>Right. The integers from 1 to 9 that are coprime to 10 are 1, 3, 7, and 9.</p></div>
    <div class="mc-fb" data-key="b"><p>Five counts the odd numbers from 1 to 9. But 5 shares a factor with 10, so it has to come out too.</p></div>
    <div class="mc-fb" data-key="c"><p>Nine is \(n - 1\), the answer you'd get if every \(m\) below \(n\) were coprime to \(n\). That's true when \(n\) is
      prime, and 10 isn't prime.</p></div>
    <div class="mc-fb" data-key="d"><p>Ten counts every \(m\) up to 10, including 10 itself. The definition uses
      \(m \lt n\), and the gcd condition removes the rest.</p></div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">What is \(3^{\phi(10)} \bmod 10\)?</p>
    <button class="mc-opt" data-key="a">3</button>
    <button class="mc-opt" data-key="b">9</button>
    <button class="mc-opt" data-key="c">1</button>
    <button class="mc-opt" data-key="d">7</button>

    <div class="mc-fb" data-key="a"><p>3 is \(3^1\). The exponent is \(\phi(10)\), not 1.</p></div>
    <div class="mc-fb" data-key="b"><p>9 is \(3^2\), halfway through the cycle. The exponent is \(\phi(10) = 4\), so two more
      multiplications by 3 are needed.</p></div>
    <div class="mc-fb" data-key="c"><p>Right: \(3^4 = 81 \equiv 1 \pmod{10}\), and \(\phi(10) = 4\).</p></div>
    <div class="mc-fb" data-key="d"><p>7 is \(3^3 = 27\). That's one exponent short of \(\phi(10) = 4\).</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Euler's Theorem from Lagrange's rule</h2>

  <p>Judson proves Euler's Theorem by putting the units into a group and applying the divisibility rule from last
    class. Build the proof one committed step at a time.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Let \(\gcd(a, n) = 1\). Which group contains \(a\), and why?</div>
        <div class="sstep-body"><p>\(U(n)\), the group of units of \(\mathbb Z_n\). Since \(\gcd(a, n) = 1\), the class of \(a\)
          has an inverse mod \(n\), so it is a unit.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">How many elements does \(U(n)\) have?</div>
        <div class="sstep-body"><p>\(\phi(n)\). The units are the classes of the integers \(m\) with \(1 \le m \lt n\) and
          \(\gcd(m, n) = 1\), and those are the integers counted by \(\phi(n)\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Apply the element-order corollary to \(a\) in \(U(n)\). What can you say about the order \(k\) of \(a\)?</div>
        <div class="sstep-body"><p>\(k\) divides \(|U(n)| = \phi(n)\). Write \(\phi(n) = k\ell\) for some integer \(\ell\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Compute \(a^{\phi(n)}\) in \(U(n)\), then translate the result back into a congruence.</div>
        <div class="sstep-body"><p>\(a^{\phi(n)} = (a^k)^{\ell} = 1\), the identity of \(U(n)\). The identity is the class of \(1\),
          so \(a^{\phi(n)} \equiv 1 \pmod n\).</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The units of \(U(9)\)</h2>

  <p>\(U(9) = \{1, 2, 4, 5, 7, 8\}\) is a group of order \(\phi(9) = 6\). Its table is colored by element order, one tint
    per order. Predict first: which orders occur, and does each one divide 6?</p>

  <div id="d14-orders"></div>

  <p>Click a header to read off an order. The scaffold above shows that every order in a unit group divides
    \(\phi(n)\), so each order you see should divide 6.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Fermat's Little Theorem, both forms</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Take \(p = 11\) and \(a = 2\). What is \(2^{10} \bmod 11\)?</p>
    <button class="mc-opt" data-key="a">2</button>
    <button class="mc-opt" data-key="b">0</button>
    <button class="mc-opt" data-key="c">1</button>
    <button class="mc-opt" data-key="d">10</button>

    <div class="mc-fb" data-key="a"><p>2 is \(2^1\). The exponent here is \(p - 1 = 10\).</p></div>
    <div class="mc-fb" data-key="b"><p>0 would need 11 to divide \(2^{10}\). Eleven is prime and doesn't divide 2, so it can't
      divide a power of 2.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. Fermat's Little Theorem says \(a^{p-1} \equiv 1 \pmod p\) whenever \(p\) doesn't
      divide \(a\).</p></div>
    <div class="mc-fb" data-key="d"><p>\(2^5 = 32 \equiv 10 \pmod{11}\). That's using half the exponent. The theorem uses all of
      \(p - 1\).</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Take \(p = 7\) and \(b = 3\). What is \(3^7 \bmod 7\)?</p>
    <button class="mc-opt" data-key="a">1</button>
    <button class="mc-opt" data-key="b">3</button>
    <button class="mc-opt" data-key="c">0</button>
    <button class="mc-opt" data-key="d">2</button>

    <div class="mc-fb" data-key="a"><p>1 is \(3^{p-1} \bmod 7\), but the exponent here is \(p = 7\). Write \(3^7 = 3 \cdot 3^6\),
      and remember that \(3^6 \equiv 1\).</p></div>
    <div class="mc-fb" data-key="b"><p>Right. The second form says \(b^p \equiv b \pmod p\) for every integer \(b\), including
      multiples of \(p\).</p></div>
    <div class="mc-fb" data-key="c"><p>0 would need 7 to divide \(3^7\). It doesn't, since 7 is prime and doesn't divide 3.</p></div>
    <div class="mc-fb" data-key="d"><p>2 is \(3^2 \bmod 7\). That exponent doesn't come from the theorem.</p></div>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Fermat for every modulus?</h2>

  <p>The common misconception: Fermat's Little Theorem works for every modulus, so \(a^{n-1} \equiv 1 \pmod n\) whenever
    \(\gcd(a, n) = 1\). A classmate argues for it below. Click the line that goes wrong.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Let \(n \gt 2\) and \(\gcd(a, n) = 1\).</button>
      <button class="fline" type="button">By Euler's Theorem, \(a^{\phi(n)} \equiv 1 \pmod n\).</button>
      <button class="fline" type="button">Every \(m\) with \(1 \le m \lt n\) is coprime to \(n\), so \(\phi(n) = n - 1\).</button>
      <button class="fline" type="button">Substituting, \(a^{n-1} \equiv 1 \pmod n\).</button>
    </div>

    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> That's the hypothesis.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> Euler's Theorem holds for every modulus \(n\).</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>This is the flaw.</strong> For a prime \(p\), every \(m\) from 1 to
      \(p - 1\) is coprime to \(p\), so \(\phi(p) = p - 1\). For a composite \(n\), some of those \(m\) share a factor
      with \(n\). Take \(n = 9\): the units are \(1, 2, 4, 5, 7, 8\), so \(\phi(9) = 6\), not 8. And
      \(2^8 = 256 \equiv 4 \pmod 9\), not 1.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine as a substitution.</strong> Once line 3 is granted, this
      follows. The conclusion fails only because line 3 does.</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Euler's Theorem needs \(\gcd(a, n) = 1\). Try a non-unit, such as \(a = 2\) mod \(8\), and follow its powers. What
      happens, and which step of the scaffold stops working?</li>
    <li>Is \(U(n)\) cyclic for every \(n\)? The explorer and the \(U(9)\) table are two data points. Test two more values
      of \(n\), then say what you would need to know to settle the question in general.</li>
    <li>The second form of Fermat's Little Theorem, \(b^p \equiv b \pmod p\), has no condition on \(b\), while the first
      form needs one. Why is the condition there, and what does the second form say when \(b\) is a multiple of \(p\)?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308;

    // Pairs (a, n) that are assigned homework. The explorer shows a note instead of the powers.
    var AVOID = [[4, 15]];

    var inN = document.getElementById('d14-n'), inA = document.getElementById('d14-a');
    var labN = document.getElementById('d14-nval');
    var cycle = document.getElementById('d14-cycle'), table = document.getElementById('d14-table');
    var out = document.getElementById('d14-out');

    // U(n): every k from 1 to n-1 coprime to n (so 1 is included and the count is phi(n)).
    function units(n) {
      var u = [];
      for (var k = 1; k < n; k++) if (A.gcd(k, n) === 1) u.push(k);
      return u;
    }

    // The selector offers the units other than 1, since a = 1 is trivial.
    function refreshUnits() {
      var n = Number(inN.value), keep = Number(inA.value);
      var u = units(n).filter(function (x) { return x > 1; });
      inA.innerHTML = '';
      u.forEach(function (x) { inA.appendChild(A.h('option', { value: x, text: String(x) })); });
      inA.value = u.indexOf(keep) >= 0 ? String(keep) : String(u[0]);
    }

    function draw() {
      var n = Number(inN.value), a = Number(inA.value), phi = A.phi(n);
      labN.textContent = String(n);
      cycle.innerHTML = '';
      table.innerHTML = '';
      if (AVOID.some(function (p) { return p[0] === a && p[1] === n; })) {
        out.innerHTML = 'That pair is on your homework, so this page won’t run it for you. Pick another unit or another n.';
        return;
      }

      var seq = [], x = 1;
      for (var k = 1; k <= phi; k++) { x = (x * a) % n; seq.push(x); }
      var order = seq.indexOf(1) + 1;

      var rowK = A.h('tr', null, [A.h('th', { scope: 'row', text: 'k' })]);
      var rowP = A.h('tr', null, [A.h('th', { scope: 'row', text: 'a^k mod n' })]);
      seq.forEach(function (v, i) {
        rowK.appendChild(A.h('th', { scope: 'col', text: String(i + 1) }));
        rowP.appendChild(A.h('td', { text: String(v), class: v === 1 ? 'one' : null }));
      });
      table.appendChild(A.h('table', { class: 'a308-cayley small' }, [A.h('tbody', null, [rowK, rowP])]));

      // The cycle of powers: a^0 = 1, a^1, ..., a^(order-1), then back to 1.
      var R = 105, cx = 150, cy = 150;
      var vals = [1].concat(seq.slice(0, order - 1));
      var pts = vals.map(function (v, j) {
        var t = -Math.PI / 2 + 2 * Math.PI * j / order;
        return { x: cx + R * Math.cos(t), y: cy + R * Math.sin(t),
          lx: cx + (R + 22) * Math.cos(t), ly: cy + (R + 22) * Math.sin(t), v: v };
      });
      var svg = A.svg('svg', { viewBox: '0 0 300 300', class: 'a308-clock', role: 'img',
        'aria-label': 'The powers of ' + a + ' mod ' + n + ' drawn around a circle; the cycle closes after ' + order + ' steps' });
      svg.appendChild(A.svg('circle', { cx: cx, cy: cy, r: R, class: 'rim' }));
      svg.appendChild(A.svg('polygon', { class: 'star',
        points: pts.map(function (p) { return p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' ') }));
      pts.forEach(function (p) {
        svg.appendChild(A.svg('circle', { cx: p.x, cy: p.y, r: 9, class: 'pt on' }));
        svg.appendChild(A.svg('text', { x: p.lx, y: p.ly + 4, class: 'lab', text: String(p.v) }));
      });
      svg.appendChild(A.svg('text', { x: cx, y: cy + 4, class: 'lab', text: 'order ' + order }));
      cycle.appendChild(svg);

      out.innerHTML = 'U(' + n + ') = {' + units(n).join(', ') + '}, so φ(' + n + ') = ' + phi + '. ' +
        'The powers of ' + a + ' first return to 1 at step ' + order + ', so ' + a + ' has order ' + order + '. ' +
        (phi % order === 0 ? "That order divides φ(" + n + ") = " + phi + ", as Lagrange's Theorem requires. " : '') +
        'Check: ' + a + '<sup>' + phi + '</sup> mod ' + n + ' = ' + seq[phi - 1] + '.';
    }

    inN.addEventListener('input', function () { refreshUnits(); draw(); });
    inA.addEventListener('change', draw);
    refreshUnits();
    draw();

    A.cayley('d14-orders', {
      group: A.U(9), color: 'order', clickable: true, caption: 'U(9), one tint per element order'
    });
  })();
</script>
