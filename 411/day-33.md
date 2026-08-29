---
layout: day
title: "MATH 411 Day 33: Four Theorems, One Idea"
day: 33
chapter_number: 9
chapter: "The IVT and the EVT"
day_title: "Four Theorems, One Idea"
blurb: "The Nested Interval Property, Bolzano&ndash;Weierstrass, and the Least Upper Bound Property turn out to be the same statement in three costumes. The Archimedean Property, which looks like a fourth, is not."
reading: "Section 9.4, Problems 9.4.11&ndash;9.4.16, and the Archimedean Property as a theorem"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Three statements, one idea</h2>

  <p>Your reading makes a striking claim: the NIP, Bolzano&ndash;Weierstrass and the LUBP "are equivalent in the sense
    that any one of them can be taken as the completeness axiom for the real number system and the others proved as
    theorems."</p>

  <p>They do not look alike. One is about nested intervals, one about subsequences, one about upper bounds. Here they
    are side by side, along with what each says over \(\mathbb{Q}\).</p>

  <div class="ctl-row">
    <button class="btn411 ghost d33-view on" data-v="0">over ℝ (all true)</button>
    <button class="btn411 ghost d33-view" data-v="1">over ℚ (all false)</button>
  </div>

  <div id="d33-table"></div>

  <p>The pattern is the point. Each statement is true in \(\mathbb{R}\) and false in \(\mathbb{Q}\), and each fails in
    \(\mathbb{Q}\) for the same underlying reason: something closes in on a hole. Nested rational intervals shrink onto
    a gap; a bounded rational sequence has its subsequences converging to a gap; a bounded set of rationals has its
    least upper bound sitting in a gap.</p>

  <p>Three different vocabularies for one fact about the number line.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>What "equivalent" actually requires</h2>

  <p>Equivalence of three statements is not one proof but a cycle of them. Worth being precise about what has to be
    shown, because "equivalent" gets used loosely.</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the structure</button>
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Step 1. What has been proved so far.</div>
        <div class="sstep-body">
          <p>Chapter 9 took the NIP as its axiom and derived the other two:</p>
          <ul>
            <li>NIP \(\Rightarrow\) Bolzano&ndash;Weierstrass (Day 31, by bisection on "infinitely many terms")</li>
            <li>NIP \(\Rightarrow\) LUBP (Day 32, by bisection on "still an upper bound")</li>
          </ul>
          <p>Both used the same template with a different property 5. That is one direction only.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 2. What is missing.</div>
        <div class="sstep-body">
          <p>To show all three are interchangeable, the arrows must come back:</p>
          <ul>
            <li>Bolzano&ndash;Weierstrass \(\Rightarrow\) NIP</li>
            <li>LUBP \(\Rightarrow\) NIP</li>
          </ul>
          <p>Those are your problems for today. With them, any of the three can serve as the starting axiom, and the
            other two follow &mdash; possibly via the NIP as an intermediate stop.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 3. Why anyone should care.</div>
        <div class="sstep-body">
          <p>Because it means the choice of axiom is free, and you can pick whichever is most convenient. Your reading
            notes that "most modern textbooks use the LUBP as the axiom of completeness and prove all other
            formulations as theorems."</p>
          <p>It also explains why several formulations exist at all. Different people needed completeness for different
            problems and each wrote down the version that suited their work: "Only in hindsight do we see that they
            were really talking about the same concept."</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 4. The Archimedean Property finally gets proved.</div>
        <div class="sstep-body">
          <p>Day 4 introduced the Archimedean Property &mdash; given positive \(a, b\), some integer \(n\) has \(na
            &gt; b\) &mdash; and accepted it "just as Archimedes did," noting it "is no longer taken as an unproved
            axiom."</p>
          <p>Now it can be proved. The strategy: suppose no such \(n\) exists. Then \(b\) is an upper bound for
            \(\{na : n \in \mathbb{N}\}\), so by the LUBP that set has a supremum, and a short argument about
            \(\sup - a\) produces a contradiction. Your problem set does the details.</p>
          <p>So Day 4's promise is kept: an assumption has become a theorem.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 5. But the Archimedean Property is <em>not</em> equivalent to the others.</div>
        <div class="sstep-body">
          <p>Natural question: if completeness implies it, could it serve as the completeness axiom too?</p>
          <p>No &mdash; and the reason is the one you established on Day 4. \(\mathbb{Q}\) <em>satisfies</em> the
            Archimedean Property. Given positive rationals \(a\) and \(b\), an integer \(n\) with \(na &gt; b\)
            certainly exists.</p>
          <p>So the Archimedean Property cannot capture completeness: it holds in a system that is manifestly
            incomplete. It is strictly weaker &mdash; implied by completeness, and not implying it.</p>
          <p>This is a clean example of how to test whether a property characterises a structure. Find something with
            the property and without the structure, and you're done. The Day 4 multiple-choice question about whether
            \(\mathbb{Q}\) is Archimedean was quietly setting this up.</p>
        </div>
      </li>
    </ol>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Where \(\mathbb{Q}\) breaks, three ways</h2>

  <p>The cleanest way to feel the equivalence is to watch all three fail at once, at the same hole.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d33-n">Steps</label>
      <input type="range" id="d33-n" min="1" max="14" step="1" value="5">
    </div>
    <div class="ctl">
      <label for="d33-which">Statement</label>
      <select id="d33-which"></select>
    </div>
  </div>

  <canvas class="plot" id="d33-canvas"></canvas>
  <div class="readout" id="d33-out"></div>

  <p>In each case the rational numbers do everything they are asked to do, and the object whose existence is promised
    is simply not in \(\mathbb{Q}\). The failure is not in the sequences or the sets &mdash; it is in the number
    system.</p>

  <p>Which is what an axiom of completeness is for. It does not describe how numbers behave; it asserts that the ones
    you need are <em>there</em>.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>An argument for adopting the Archimedean Property as the completeness axiom</h2>

  <p><strong>Click the step that fails.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">The LUBP implies the Archimedean Property, as your problem set
        shows.</button>
      <button class="fline" type="button">The NIP, Bolzano&ndash;Weierstrass and the LUBP are equivalent, so any of
        them implies the Archimedean Property.</button>
      <button class="fline" type="button">The Archimedean Property is simpler to state than any of them, and was
        historically accepted as obvious.</button>
      <button class="fline" type="button">Since it follows from completeness and is easier to state, we may as well
        adopt it as the completeness axiom instead.</button>
      <button class="fline" type="button">Adopting it would let us prove the NIP, Bolzano&ndash;Weierstrass, the LUBP,
        the IVT and the EVT from it.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>True</strong> &mdash; Theorem 9.4.14, proved from the LUBP by considering \(\sup\{na : n \in
        \mathbb{N}\}\).</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>True</strong>, once today's problems close the cycle. Implications compose.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>True.</strong> "Given positive \(a\) and \(b\) there is an \(n\) with \(na &gt; b\)" is far simpler
        than anything involving nested intervals or subsequences &mdash; which is exactly why it was taken for granted
        for two thousand years, as Day 4 described.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>That's the false step, and the error is a familiar one.</strong></p>
      <p>The argument has established <em>completeness \(\Rightarrow\) Archimedean</em> and then helped itself to the
        <em>converse</em>. But implication in one direction says nothing about the other &mdash; the same mistake that
        sank the Fermat primality test on Day 2 and misread Theorem 4.1.1 on Day 12.</p>
      <p>And the converse is definitely false, with a counterexample you have had since Day 4. \(\mathbb{Q}\) is
        Archimedean: for positive rationals \(\frac pq\) and \(\frac rs\), the integer \(n = rq+1\) already works.
        \(\mathbb{Q}\) is emphatically not complete &mdash; the NIP, Bolzano&ndash;Weierstrass and the LUBP all fail
        there, as the widget above shows.</p>
      <p>So the Archimedean Property is strictly weaker than completeness. It is implied by it and does not imply it,
        which disqualifies it as a completeness axiom no matter how convenient it is to state.</p>
      <p>This is your reading's closing question, and it is a good one to end the chapter on: the way to show a
        property fails to characterise a structure is to exhibit something with the property and without the
        structure.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>False, and decisively so.</strong> If the Archimedean Property implied the IVT, then the IVT would
        hold over \(\mathbb{Q}\), since \(\mathbb{Q}\) is Archimedean. Day 30 showed it does not: \(x^2 = 2\) has no
        rational solution while \(x^2\) passes from below \(2\) to above it.</p>
      <p>One counterexample kills the whole proposal.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on completeness</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Does \(\mathbb{Q}\) satisfy the Archimedean Property?</p>
    <button class="mc-opt" type="button" data-key="a">No &mdash; that's what distinguishes \(\mathbb{R}\).</button>
    <button class="mc-opt" type="button" data-key="b">Yes &mdash; which is exactly why it can't serve as an axiom of
      completeness.</button>
    <button class="mc-opt" type="button" data-key="c">Only for rationals with denominator \(1\).</button>
    <div class="mc-fb" data-key="a">Day 4's check-yourself made this point, and it pays off here. \(\mathbb{Q}\) is
      Archimedean; what it lacks is completeness.</div>
    <div class="mc-fb" data-key="b">Correct. A property held by an incomplete system cannot characterise completeness.
      That single observation answers your reading's closing question.</div>
    <div class="mc-fb" data-key="c">Given \(\frac pq\) and \(\frac rs\) positive, \(n = rq + 1\) works &mdash; no
      restriction needed.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">What does it take to show three statements are equivalent?</p>
    <button class="mc-opt" type="button" data-key="a">Showing they have the same words.</button>
    <button class="mc-opt" type="button" data-key="b">Showing all three are true.</button>
    <button class="mc-opt" type="button" data-key="c">A cycle of implications, so that each can be derived from any
      other.</button>
    <div class="mc-fb" data-key="a">They look nothing alike &mdash; nested intervals, subsequences, upper bounds.</div>
    <div class="mc-fb" data-key="b">All true statements are trivially equivalent in a technical sense, which is why
      that isn't the interesting notion here. The content is that each can be <em>derived</em> from the others without
      assuming the rest of the theory.</div>
    <div class="mc-fb" data-key="c">Correct. Chapter 9 proved NIP \(\Rightarrow\) BW and NIP \(\Rightarrow\) LUBP;
      today's problems supply the arrows back. Then any one may be taken as the axiom.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Why do several formulations of completeness exist?</p>
    <button class="mc-opt" type="button" data-key="a">Different mathematicians needed completeness for different
      problems and wrote down the version suited to their work.</button>
    <button class="mc-opt" type="button" data-key="b">Because the earlier ones were found to be wrong.</button>
    <button class="mc-opt" type="button" data-key="c">Because they say genuinely different things.</button>
    <div class="mc-fb" data-key="a">Correct &mdash; your reading's account: "people tend to gravitate toward ideas that
      suit the particular problem they are working on... Only in hindsight do we see that they were really talking
      about the same concept."</div>
    <div class="mc-fb" data-key="b">None was wrong; they turned out to be the same thing.</div>
    <div class="mc-fb" data-key="c">They are logically equivalent, which is the whole point of today.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Day 4 said the Archimedean Property "is no longer taken as an unproved axiom." What is its status
      now?</p>
    <button class="mc-opt" type="button" data-key="a">Still an axiom, just a less popular one.</button>
    <button class="mc-opt" type="button" data-key="b">A theorem equivalent to completeness.</button>
    <button class="mc-opt" type="button" data-key="c">A theorem, derived from completeness &mdash; but strictly weaker
      than it.</button>
    <div class="mc-fb" data-key="a">It has genuinely been demoted from assumption to consequence, exactly as Day 4
      promised.</div>
    <div class="mc-fb" data-key="b">Not equivalent &mdash; \(\mathbb{Q}\) is Archimedean and incomplete, so the
      implication runs one way only.</div>
    <div class="mc-fb" data-key="c">Correct, and the promise from Day 4 is now kept: what Archimedes assumed, and what
      the eighteenth century took for granted, is a consequence of the one axiom we do assume about \(\mathbb{R}\).
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Day 4 said infinitesimals violate the Archimedean Property. Given that \(\mathbb{Q}\) is Archimedean but
      incomplete, what would a number system that is complete but <em>not</em> Archimedean look like &mdash; or is that
      impossible?</li>
    <li>Three formulations of completeness, all equivalent. Can you think of a fourth? (What about "every Cauchy
      sequence converges"?)</li>
    <li>Look back over Chapters 8 and 9 and list every theorem whose proof used completeness. Which results in this
      course are true over \(\mathbb{Q}\) and which are not?</li>
    <li>The Archimedean Property was assumed for two millennia and proved in the nineteenth century. Did proving it
      change anything about how it gets used?</li>
  </ol>
</div>

<script>
  (function () {
    /* ---------------- the three statements ---------------- */
    var ROWS = [
      {
        name: 'Nested Interval Property',
        R: 'Nested closed intervals with lengths shrinking to \\(0\\) have exactly one point in common.',
        Q: 'Nested closed <em>rational</em> intervals can shrink onto a gap, with no rational point in common. ' +
          'Take the decimal truncations of an irrational number from below and above.'
      },
      {
        name: 'Bolzano&ndash;Weierstrass',
        R: 'Every bounded sequence has a convergent subsequence.',
        Q: 'A bounded sequence of rationals can have <em>every</em> subsequence converging to an irrational &mdash; ' +
          'so no subsequence converges in \\(\\mathbb{Q}\\).'
      },
      {
        name: 'Least Upper Bound Property',
        R: 'Every non-empty set bounded above has a least upper bound.',
        Q: 'A non-empty bounded set of rationals can have its least upper bound sitting at an irrational, so within ' +
          '\\(\\mathbb{Q}\\) it has no least upper bound at all.'
      },
      {
        name: 'Archimedean Property',
        R: 'For positive \\(a, b\\) there is an integer \\(n\\) with \\(na &gt; b\\). <strong>A theorem</strong>, ' +
          'proved from any of the three above.',
        Q: '<strong>Still true.</strong> \\(\\mathbb{Q}\\) is Archimedean &mdash; which is exactly why this one ' +
          'cannot serve as an axiom of completeness.',
        odd: true
      }
    ];

    var table = document.getElementById('d33-table'), view = 0;

    function drawTable() {
      var html = '<ol class="certlist">';
      ROWS.forEach(function (r) {
        html += '<li class="cert ' + (r.odd ? (view === 1 ? 'check' : '') : (view === 1 ? '' : 'leaf')) + '">' +
          '<span class="cert-claim">' + r.name + '</span>' +
          '<span class="cert-why">' + (view === 0 ? r.R : r.Q) + '</span></li>';
      });
      html += '</ol>';
      table.innerHTML = html;
      M411.typeset(table);
    }
    document.querySelectorAll('.d33-view').forEach(function (b) {
      b.addEventListener('click', function () {
        view = +b.getAttribute('data-v');
        document.querySelectorAll('.d33-view').forEach(function (o) { o.classList.remove('on'); });
        b.classList.add('on');
        drawTable();
      });
    });

    /* ---------------- Q breaking three ways ---------------- */
    var WHICH = [
      {
        label: 'NIP fails: nested rational intervals with no rational inside',
        note: 'Decimal truncations of \\(\\sqrt2\\) from below and above give nested closed rational intervals of ' +
          'length \\(10^{-k}\\). Every hypothesis of the NIP holds within \\(\\mathbb{Q}\\), and the promised point ' +
          'is \\(\\sqrt2\\) &mdash; not a rational number. Within \\(\\mathbb{Q}\\), the intersection is empty.'
      },
      {
        label: 'BW fails: a bounded rational sequence with no rational subsequential limit',
        note: 'The truncations \\(1, 1.4, 1.41, 1.414, \\ldots\\) are rational and bounded. Every subsequence ' +
          'converges to \\(\\sqrt2\\), so within \\(\\mathbb{Q}\\) no subsequence converges at all.'
      },
      {
        label: 'LUBP fails: a bounded rational set whose supremum is irrational',
        note: 'The set of positive rationals \\(q\\) with \\(q^2 &lt; 2\\) is non-empty and bounded above (by ' +
          '\\(2\\), say). Its least upper bound is \\(\\sqrt2\\). Within \\(\\mathbb{Q}\\) it has upper bounds but ' +
          'no <em>least</em> one &mdash; for any rational bound you name, a smaller rational bound exists.'
      }
    ];

    var nIn = document.getElementById('d33-n'),
      wSel = document.getElementById('d33-which'),
      canvas = document.getElementById('d33-canvas'),
      out = document.getElementById('d33-out');

    WHICH.forEach(function (w, i) {
      var o = document.createElement('option'); o.value = String(i); o.textContent = w.label; wSel.appendChild(o);
    });

    function drawQ() {
      var K = +nIn.value, w = +wSel.value;
      var R2 = Math.SQRT2;

      var d = M411.hidpi(canvas, 290), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 56, padR = 30, padT = 24, padB = 40;

      // window zooms in as K grows
      var half = Math.max(0.6 / Math.pow(1.9, Math.min(K, 10)), 1e-9);
      var lo = R2 - half, hi = R2 + half;
      function X(v) { return padL + (v - lo) / (hi - lo) * (W - padL - padR); }

      // the hole
      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2; ctx.setLineDash([5, 4]);
      ctx.beginPath(); ctx.moveTo(X(R2), padT - 6); ctx.lineTo(X(R2), H - padB + 10); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = M411.colors.check; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('√2  (not rational)', X(R2), H - padB + 26);

      if (w === 0) {
        var rows = Math.min(K, 12), rowH = (H - padT - padB) / rows;
        for (var k = 1; k <= rows; k++) {
          var p = Math.pow(10, k);
          var a = Math.floor(R2 * p) / p, b = Math.ceil(R2 * p) / p;
          var y = padT + (k - 0.5) * rowH;
          ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = Math.max(2, Math.min(5, rowH * 0.35));
          ctx.globalAlpha = 0.4 + 0.6 * k / rows;
          ctx.beginPath();
          ctx.moveTo(Math.max(X(a), padL), y);
          ctx.lineTo(Math.min(X(b), W - padR), y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
        ctx.fillText('nested rational intervals [⌊√2·10ᵏ⌋/10ᵏ, ⌈√2·10ᵏ⌉/10ᵏ]', padL, 16);
      } else if (w === 1) {
        var y2 = H / 2;
        ctx.strokeStyle = '#999'; ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(padL, y2); ctx.lineTo(W - padR, y2); ctx.stroke();
        for (var j = 1; j <= Math.min(K, 12); j++) {
          var pj = Math.pow(10, j), v = Math.floor(R2 * pj) / pj;
          if (v < lo) continue;
          ctx.fillStyle = M411.colors.explore;
          ctx.globalAlpha = 0.4 + 0.6 * j / 12;
          ctx.beginPath(); ctx.arc(X(v), y2, 5, 0, 2 * Math.PI); ctx.fill();
          ctx.globalAlpha = 1;
        }
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
        ctx.fillText('rational terms 1, 1.4, 1.41, 1.414, … marching toward the hole', padL, 16);
      } else {
        var y3 = H / 2;
        ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = 8;
        ctx.beginPath(); ctx.moveTo(padL, y3); ctx.lineTo(X(R2), y3); ctx.stroke();
        // candidate rational upper bounds, each beatable
        for (var m = 1; m <= Math.min(K, 10); m++) {
          var pm = Math.pow(10, m), ub = Math.ceil(R2 * pm) / pm;
          if (ub > hi) continue;
          ctx.strokeStyle = '#d9534f'; ctx.lineWidth = 1.6;
          ctx.beginPath(); ctx.moveTo(X(ub), y3 - 24); ctx.lineTo(X(ub), y3 + 24); ctx.stroke();
        }
        ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
        ctx.fillText('the set {q ∈ ℚ : q > 0, q² < 2} in blue; rational upper bounds in red', padL, 16);
        ctx.fillText('each red bound is beaten by a smaller one — there is no least', padL, H - 14);
      }

      var pk = Math.pow(10, Math.min(K, 12));
      out.innerHTML =
        '<p>At step ' + K + ': the rational endpoints are \\(' + (Math.floor(R2 * pk) / pk) + '\\) and \\(' +
        (Math.ceil(R2 * pk) / pk) + '\\), separated by \\(10^{-' + Math.min(K, 12) + '}\\).</p>' +
        '<p>' + WHICH[w].note + '</p>' +
        '<p>All three failures are the same failure. The rationals crowd right up to \\(\\sqrt2\\) from both sides ' +
        '&mdash; as Day 3 showed &mdash; and there is nothing there.</p>';
      M411.typeset(out);
    }
    nIn.addEventListener('input', drawQ);
    wSel.addEventListener('change', drawQ);

    M411.onResize(drawQ);
    drawTable();
    drawQ();
  })();
</script>
