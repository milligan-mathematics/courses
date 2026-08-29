---
layout: day
title: "MATH 411 Day 2: Pólya and Fermat's Little Theorem"
day: 2
chapter_number: 1
chapter: "Prologue"
day_title: "Pólya and Fermat's Little Theorem"
blurb: "Solving a problem is only three quarters of the job. The fourth step &mdash; reflecting on what you did &mdash; is what turns an answer into a tool you still have next month."
reading: "Lesson Three, the Fundamental Theorem of Arithmetic, and the chain of problems leading to Fermat's Little Theorem"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Fermat's Little Theorem, before you prove it</h2>

  <p>Your reading states it and then asks you to prove it. Before you do, it's worth seeing the thing move. The claim
    is:</p>

  \[ p \mid (n^p - n) \qquad \text{for every prime } p \text{ and every positive integer } n \]

  <p>Pick a modulus below and read off \(n^p - n \bmod p\) for the first few \(n\). A green cell means the modulus
    divides \(n^p - n\) exactly.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d2-p">Modulus \(m\)</label>
      <input type="range" id="d2-p" min="2" max="30" step="1" value="7">
    </div>
    <div class="ctl">
      <label>&nbsp;</label>
      <span class="mono" id="d2-p-out"></span>
    </div>
  </div>

  <div class="ctl-row">
    <button class="btn411 ghost d2-preset" data-m="341">341</button>
    <button class="btn411 ghost d2-preset" data-m="561">561</button>
    <span style="font-size:0.85rem;color:var(--text-muted);">&larr; two composites worth a look, once you've read
      the "primality test that isn't" below</span>
  </div>

  <div id="d2-flt-grid"></div>
  <div class="readout" id="d2-flt-out"></div>

  <p>Slide through the composites and watch the green break up. That's the shape of the theorem: primality is doing
    real work, and any proof you write has to <em>use</em> it somewhere. If your argument would go through unchanged for
    \(p = 8\), you've proved something false.</p>

  <details class="hint">
    <summary>Where does primality get used? (A Pólya step-2 question, not an answer.)</summary>
    <p>Don't look for the answer here &mdash; look at your reading. The chain of problems is arranged so that each one
      hands the next a tool, and the very first link in the chain is a statement about primes that is simply false for
      composites. Find that link, state what it says, and ask yourself what it would mean for \(p = 8\), \(a = 2\), \(b
      = 4\).</p>
  </details>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Pascal's triangle, coloured by divisibility</h2>

  <p>One link in your reading's chain concerns the binomial coefficients \(\binom{p}{k}\). Rather than tell you
    anything about it, here is Pascal's triangle with every entry divisible by \(p\) shaded. Row \(p\) is highlighted.
  </p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d2-pascal-p">Shade multiples of</label>
      <input type="range" id="d2-pascal-p" min="2" max="13" step="1" value="5">
    </div>
    <div class="ctl">
      <label>&nbsp;</label>
      <span class="mono" id="d2-pascal-out"></span>
    </div>
  </div>

  <div id="d2-pascal"></div>
  <div class="readout" id="d2-pascal-note"></div>

  <p>Step through \(2, 3, 5, 7, 11, 13\) and then through \(4, 6, 8, 9, 10, 12\). The difference in the highlighted row
    is stark, and it is not a coincidence &mdash; but noticing a pattern is not the same as proving it, and the proof
    is yours to write.</p>

  <p>This is Pólya's step 4 in miniature. You were handed a statement about \(\binom{p}{k}\) as one problem in a chain.
    Looking at the whole triangle instead of the single row is what turns it from a task into a fact you'll
    remember.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Pólya's four steps on a problem that isn't yours to hand in</h2>

  <p>Your reading gives you Pólya's method &mdash; understand, plan, execute, <em>reflect</em> &mdash; and then a chain
    of problems to try it on. So that we don't spoil any of those, here is a different theorem, walked through all four
    steps. It uses the Fundamental Theorem of Arithmetic, which your reading has just handed you, and it is roughly
    2,300 years old.</p>

  <p><strong>Theorem (Euclid).</strong> There are infinitely many prime numbers.</p>

  <p>Try it yourself before revealing anything. Note in particular what step 4 does &mdash; it is the step everyone
    skips, and the whole reason Lesson Three exists.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal all four steps</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1 &mdash; Understand the problem. What exactly is being claimed?</div>
        <div class="sstep-body">
          <p>"Infinitely many" is awkward to attack head-on, because you cannot exhibit infinitely many things. So
            restate it as something finite: <em>no finite list of primes can be complete</em>. Given any finite list, we
            must produce a prime that isn't on it.</p>
          <p>That reformulation is most of the work. It converts an infinite claim into a concrete construction
            task.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2 &mdash; Formulate a plan. What tool do we have?</div>
        <div class="sstep-body">
          <p>We have exactly one substantial fact available: the Fundamental Theorem of Arithmetic, which says every
            integer greater than \(1\) is prime or a product of primes.</p>
          <p>So if we can build a number bigger than \(1\) that is <em>not</em> divisible by any prime on our list, the
            Fundamental Theorem will hand us a prime factor, and that factor cannot be on the list. The plan is to
            engineer such a number.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3 &mdash; Execute.</div>
        <div class="sstep-body">
          <p>Let \(p_1, p_2, \ldots, p_n\) be any finite list of primes. Set</p>
          \[ N = p_1 p_2 \cdots p_n + 1 \]
          <p>Then \(N &gt; 1\), so by the Fundamental Theorem it has a prime factor \(q\). Suppose \(q\) were one of the
            \(p_i\). Then \(q\) divides the product \(p_1\cdots p_n\), and \(q\) divides \(N\), so \(q\) divides their
            difference, which is \(1\). No prime divides \(1\). Contradiction &mdash; so \(q\) is a prime not on the
            list.</p>
          <p>Since no finite list is complete, there are infinitely many primes. \(\blacksquare\)</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4 &mdash; Reflect. This is the step you'll want to skip. Don't.</div>
        <div class="sstep-body">
          <p>The reading gives you the questions. Run them:</p>
          <p><em>Did we use everything we assumed?</em> We never assumed the list contained <em>all</em> primes, or that
            it was sorted, or that it started at \(2\). The argument works for any finite list at all &mdash; so we
            proved something slightly stronger than we set out to.</p>
          <p><em>Are there easy consequences?</em> Yes: the construction is effective. Feed it \(\{2\}\) and you get
            \(3\); feed it \(\{2,3\}\) and you get \(7\); it manufactures new primes on demand.</p>
          <p><em>What's the common misreading?</em> That \(N\) itself must be prime. It needn't be: \(2\cdot3\cdot5\cdot
            7\cdot11\cdot13 + 1 = 30031 = 59 \times 509\). The proof never claimed \(N\) was prime &mdash; only that its
            prime factors avoid the list. Checking a proof against the strongest wrong version of itself is a good
            habit.</p>
          <p><em>How might it be used later?</em> The pattern &mdash; assume a finite list, build something that escapes
            it &mdash; is the same pattern Cantor will use to show the reals are uncountable. You have seen the move
            once now. You will recognise it.</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>A primality test that isn't</h2>

  <p>Fermat's Little Theorem says that if \(p\) is prime then \(p \mid (n^p - n)\). That looks like it should give a
    fast way to test whether a number is prime. Here is the argument.</p>

  <p><strong>Click the first line that doesn't hold up.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">By Fermat's Little Theorem, if \(p\) is prime then \(p \mid (2^p - 2)\).
      </button>
      <button class="fline" type="button">Checking \(m \mid (2^m - 2)\) is fast, even for very large \(m\), using
        repeated squaring.</button>
      <button class="fline" type="button">So \(m\) is prime if and only if \(m \mid (2^m - 2)\), giving a quick and
        complete primality test.</button>
      <button class="fline" type="button">For example \(341 \mid (2^{341} - 2)\), so \(341\) is prime.</button>
      <button class="fline" type="button">Therefore every number passing the test is prime.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Not the flaw.</strong> This is a correct instance of the theorem &mdash; it's exactly the statement
        your reading asks you to prove, with \(n = 2\).</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Not the flaw.</strong> Genuinely true, and it's why this idea is attractive. Computing \(2^m \bmod m\)
        by repeated squaring takes about \(\log_2 m\) multiplications &mdash; for a 300-digit \(m\), a few thousand
        operations rather than something astronomical.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>That's it: the "if and only if" was never earned.</strong></p>
      <p>The theorem says <em>prime \(\Rightarrow\) divides</em>. Line (3) silently uses <em>divides \(\Rightarrow\)
        prime</em>, which is the converse and does not follow. This is the single most common logical error in
        elementary number theory, and it's exactly the reflection Lesson Three asks for: having proved an implication,
        ask whether the reverse also holds &mdash; and then actually check, rather than assuming.</p>
      <p>It fails. \(341 = 11 \times 31\) is composite, yet \(341 \mid (2^{341}-2)\). Such numbers are called
        <em>pseudoprimes</em>. Worse still, there are <em>Carmichael numbers</em> &mdash; \(561 = 3\times11\times17\) is
        the smallest &mdash; which pass the test for <em>every</em> base \(n\) at once, so you cannot patch the hole by
        trying more bases.</p>
      <p>Both are preset buttons on the widget at the top of this page. \(341\) shows a single green cell at \(n=2\)
        &mdash; enough on its own to kill the test. \(561\) shows a <em>completely</em> green row while being
        \(3\times11\times17\).</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Half of this is true and half is false, which is what makes it instructive.</strong> \(341\) really
        does divide \(2^{341}-2\). But \(341 = 11 \times 31\), so it is <em>not</em> prime. The false step was line (3),
        which claimed passing the test was enough; line (4) is just that error cashing out.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>A consequence, not the cause.</strong> This conclusion is false, but it was already doomed by line (3).
        Go back and find where the implication got quietly reversed.</p>
    </div>
  </div>

  <p>Fermat's Little Theorem is not useless for primality &mdash; it is the seed of tests that are used constantly in
    cryptography today. But those tests are <em>probabilistic</em>, and every one of them is built by taking the failure
    above seriously rather than wishing it away.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on Lesson Three</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Which of Pólya's four steps does the reading say gets skipped, and when?</p>
    <button class="mc-opt" type="button" data-key="a">Step 1, when the problem looks familiar.</button>
    <button class="mc-opt" type="button" data-key="b">Step 3, when the plan seems obvious.</button>
    <button class="mc-opt" type="button" data-key="c">Step 4, specifically when the plan <em>worked</em>.</button>
    <div class="mc-fb" data-key="a">Not the reading's claim. Skipping step 1 is a real hazard, but it isn't what Lesson
      Three is about.</div>
    <div class="mc-fb" data-key="b">Execution is the one step nobody skips &mdash; it's what gets graded.</div>
    <div class="mc-fb" data-key="c">Correct, and the timing is the whole insight. Everyone reflects when a plan fails,
      because they have to try again. When it succeeds we move on "flush with success" &mdash; and that is exactly when
      the reflection would have paid off most.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">The Fundamental Theorem of Arithmetic says prime factorisation is unique "up to the order of the
      factors." Why that qualification?</p>
    <button class="mc-opt" type="button" data-key="a">Because some numbers have several genuinely different
      factorisations.</button>
    <button class="mc-opt" type="button" data-key="b">Because \(12 = 2\cdot2\cdot3\) and \(12 = 3\cdot2\cdot2\) are the
      same factorisation written differently.</button>
    <button class="mc-opt" type="button" data-key="c">Because the theorem only holds for numbers with distinct prime
      factors.</button>
    <div class="mc-fb" data-key="a">That's precisely what the theorem denies. Uniqueness is the substantial half of the
      statement &mdash; existence is the easy half.</div>
    <div class="mc-fb" data-key="b">Correct. Without the phrase, reordering the factors would technically count as a
      different factorisation and the theorem would be false for silly reasons. It's a piece of bookkeeping that
      protects a real statement &mdash; and noticing which parts of a theorem are bookkeeping is a skill worth
      building.</div>
    <div class="mc-fb" data-key="c">No restriction of that kind. \(8 = 2^3\) has a repeated factor and the theorem
      applies to it perfectly well.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">In the notation of your reading, what does \(p \mid a\) mean?</p>
    <button class="mc-opt" type="button" data-key="a">\(p\) divides \(a\) with no remainder.</button>
    <button class="mc-opt" type="button" data-key="b">\(a\) divides \(p\) with no remainder.</button>
    <button class="mc-opt" type="button" data-key="c">The fraction \(p/a\).</button>
    <div class="mc-fb" data-key="a">Correct. Note the direction &mdash; the divisor is on the left, which is the reverse
      of the fraction \(p/a\) and trips people up constantly. \(3 \mid 12\) is true; \(12 \mid 3\) is false.</div>
    <div class="mc-fb" data-key="b">Backwards. The bar points from divisor to multiple: \(p \mid a\) says \(a\) is a
      multiple of \(p\).</div>
    <div class="mc-fb" data-key="c">It isn't a number at all &mdash; \(p \mid a\) is a <em>statement</em>, either true
      or false. \(p/a\) is a quantity. Keeping those categories straight matters more than it sounds.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">"A problem, once solved, becomes a tool for solving subsequent problems." How is your reading's
      chain of problems built?</p>
    <button class="mc-opt" type="button" data-key="a">Each is independent; the order is arbitrary.</button>
    <button class="mc-opt" type="button" data-key="b">Each is a special case of the one before.</button>
    <button class="mc-opt" type="button" data-key="c">Each is designed to be used in proving the next.</button>
    <div class="mc-fb" data-key="a">The reading says the opposite outright: "notice how subsequent problems make use of
      the previous results."</div>
    <div class="mc-fb" data-key="b">Not special cases &mdash; the later results are more general, not less, and they
      consume the earlier ones as ingredients.</div>
    <div class="mc-fb" data-key="c">Correct, and it's worth being deliberate about. If you find yourself stuck on a link
      in that chain, the first question is always: which of the results I already have was this one built to use?</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Take any one problem you solved for today and run Pólya's step 4 on it in writing: did you use every hypothesis?
      What breaks if you drop one? What's the more general statement you might actually have proved?</li>
    <li>The Euclid proof above never claims \(N = p_1\cdots p_n + 1\) is prime, and indeed \(30031\) isn't. Why is the
      proof still airtight? What exactly did it claim about \(N\)?</li>
    <li>Carmichael numbers pass the Fermat test for every base. Given that, is Fermat's Little Theorem still useful for
      primality testing in practice? (It is. Find out what modern tests add.)</li>
    <li>The Fundamental Theorem of Arithmetic is stated without proof in your reading. Is that acceptable? What would
      you need to believe about it to use it as freely as the Euclid proof does?</li>
    <li>Pólya's step 1 is "understand the problem." For the chain in your reading, what is the <em>hardest</em> problem
      to understand the statement of &mdash; before any attempt to prove it?</li>
  </ol>
</div>

<script>
  (function () {
    /* ---------------- Fermat's Little Theorem grid ---------------- */
    var pIn = document.getElementById('d2-p'),
      pOut = document.getElementById('d2-p-out'),
      grid = document.getElementById('d2-flt-grid'),
      out = document.getElementById('d2-flt-out');

    function isPrime(m) {
      if (m < 2) return false;
      for (var i = 2; i * i <= m; i++) if (m % i === 0) return false;
      return true;
    }

    // (base^exp) mod m, by repeated squaring. BigInt keeps this exact for the
    // large moduli (341, 561) that make the pseudoprime point.
    function powMod(base, exp, m) {
      var b = BigInt(base) % BigInt(m), e = BigInt(exp), n = BigInt(m), r = 1n;
      while (e > 0n) {
        if (e & 1n) r = (r * b) % n;
        b = (b * b) % n;
        e >>= 1n;
      }
      return Number(r);
    }

    function factorLabel(m) {
      if (isPrime(m)) return 'prime';
      for (var i = 2; i * i <= m; i++) if (m % i === 0) return 'composite = ' + i + ' × ' + (m / i);
      return 'composite';
    }

    // The slider covers small moduli; the presets reach the two composites
    // (341, 561) that the "primality test that isn't" activity refers to.
    var currentM = +pIn.value;

    function drawFLT() {
      var m = currentM;
      pOut.textContent = m + ' (' + factorLabel(m) + ')';

      var html = '<div class="numgrid">', allZero = true, base2Zero = false;
      for (var n = 1; n <= 24; n++) {
        // n^m - n  (mod m)
        var v = (powMod(n, m, m) - (n % m) + m) % m;
        if (v !== 0) allZero = false;
        if (n === 2 && v === 0) base2Zero = true;
        html += '<div class="numcell ' + (v === 0 ? 'good' : 'bad') + '">' +
          '<span class="nlab">' + n + '</span><span class="nval">' + v + '</span></div>';
      }
      html += '</div>';
      grid.innerHTML = html;

      var msg;
      if (isPrime(m)) {
        msg = '<p>\\(m = ' + m + '\\) is prime, and every cell is \\(0\\) &mdash; exactly as Fermat\'s Little ' +
          'Theorem predicts. It will stay that way for every \\(n\\) you could try.</p>';
      } else if (allZero) {
        msg = '<p>\\(m = ' + m + '\\) is <strong>composite</strong> (' + factorLabel(m) + ') and yet <em>every</em> ' +
          'cell is \\(0\\). This is a <strong>Carmichael number</strong>: it impersonates a prime against every ' +
          'base at once, so no amount of extra testing will unmask it. ' + m + ' is the reason the converse of ' +
          'Fermat\'s Little Theorem cannot be repaired by trying harder.</p>';
      } else if (base2Zero) {
        msg = '<p>\\(m = ' + m + '\\) is composite (' + factorLabel(m) + '), and most cells are nonzero &mdash; ' +
          'but look at <strong>\\(n = 2\\)</strong>, which is \\(0\\). So \\(m \\mid (2^m - 2)\\) even though ' +
          '\\(m\\) is not prime: it passes the base-2 test and is still composite. That single green cell is ' +
          'enough to sink the "primality test" below.</p>';
      } else {
        msg = '<p>\\(m = ' + m + '\\) is composite (' + factorLabel(m) + '), and the pattern breaks: some cells ' +
          'are nonzero, so \\(m \\nmid (n^m - n)\\) for those \\(n\\). Primality was carrying real weight.</p>';
      }
      out.innerHTML = '<p>Each cell shows \\(n^{' + m + '} - n \\bmod ' + m + '\\) for \\(n = 1 \\ldots 24\\).</p>' + msg;
      M411.typeset(out);
    }

    pIn.addEventListener('input', function () { currentM = +pIn.value; drawFLT(); });
    document.querySelectorAll('.d2-preset').forEach(function (b) {
      b.addEventListener('click', function () {
        currentM = +b.getAttribute('data-m');
        drawFLT();
      });
    });

    /* ---------------- Pascal's triangle mod p ---------------- */
    var ppIn = document.getElementById('d2-pascal-p'),
      ppOut = document.getElementById('d2-pascal-out'),
      pascal = document.getElementById('d2-pascal'),
      pnote = document.getElementById('d2-pascal-note');

    function drawPascal() {
      var p = +ppIn.value, ROWS = 14;
      ppOut.textContent = p + ' (' + factorLabel(p) + ')';

      var row = [1], html = '<div class="pascal">';
      for (var r = 0; r < ROWS; r++) {
        html += '<div class="prow' + (r === p ? ' focus' : '') + '">';
        for (var k = 0; k < row.length; k++) {
          var div = row[k] % p === 0;
          html += '<span class="pcell' + (div ? ' div' : '') + '">' + row[k] + '</span>';
        }
        html += '</div>';
        var next = [1];
        for (var j = 0; j < row.length - 1; j++) next.push(row[j] + row[j + 1]);
        next.push(1);
        row = next;
      }
      html += '</div>';
      pascal.innerHTML = html;

      // Is every interior entry of row p divisible by p?
      var rp = [1];
      for (var i = 0; i < p; i++) {
        var nx = [1];
        for (var j2 = 0; j2 < rp.length - 1; j2++) nx.push(rp[j2] + rp[j2 + 1]);
        nx.push(1);
        rp = nx;
      }
      var allDiv = true;
      for (var k2 = 1; k2 < rp.length - 1; k2++) if (rp[k2] % p !== 0) allDiv = false;

      pnote.innerHTML = '<p>Highlighted row \\(' + p + '\\): every interior entry ' +
        (allDiv ? '<strong>is</strong>' : '<strong>is not</strong>') + ' divisible by \\(' + p + '\\). ' +
        '\\(' + p + '\\) is ' + factorLabel(p) + '.</p>' +
        (allDiv
          ? '<p>Notice this is a statement about the <em>interior</em> only &mdash; the \\(1\\)s on the ends are ' +
          'never divisible by anything, which is why your reading\'s version restricts to \\(1 \\le k \\le p-1\\).</p>'
          : '<p>Find the first interior entry that isn\'t shaded, and ask what that entry shares with the ' +
          'modulus.</p>');
      M411.typeset(pnote);
    }
    ppIn.addEventListener('input', drawPascal);

    drawFLT();
    drawPascal();
  })();
</script>
