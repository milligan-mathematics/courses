---
layout: day
title: "MATH 411 Day 31: Bolzano–Weierstrass"
day: 31
chapter_number: 9
chapter: "The IVT and the EVT"
day_title: "Bolzano&ndash;Weierstrass"
blurb: "However badly a bounded sequence behaves, some part of it converges. The theorem is what rescues a proof that your reading deliberately breaks in front of you first."
reading: "Section 9.3, Theorem 9.3.1 through the Bolzano&ndash;Weierstrass Theorem"
---

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>The "alleged proof" your reading offers you</h2>

  <p>Your reading wants to show that a continuous function on \([a,b]\) is bounded, and presents an argument labelled
    <strong>Sketch of Alleged Proof</strong>, ending in "<strong>QED?</strong>" &mdash; with the question mark doing a
    lot of work.</p>

  <p><strong>Click the step that is assumed rather than justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Suppose for contradiction that \(f\) has no bound. Then for each positive
        integer \(n\) there is some \(x_n \in [a,b]\) with \(|f(x_n)| &gt; n\).</button>
      <button class="fline" type="button">This gives a sequence \((x_n)\), every term of which lies in
        \([a,b]\).</button>
      <button class="fline" type="button">Since \((x_n)\) lies in \([a,b]\), it converges to some \(c \in
        [a,b]\).</button>
      <button class="fline" type="button">By continuity and Theorem 8.2.1, \(f(x_n) \to f(c)\), so \((f(x_n))\)
        converges and is therefore bounded (Lemma 6.2.7).</button>
      <button class="fline" type="button">But \(|f(x_n)| &gt; n\) for every \(n\), so \((f(x_n))\) is unbounded
        &mdash; a contradiction.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Legitimate.</strong> If no \(n\) were a bound, then for each \(n\) some point must exceed it &mdash;
        that's just the negation of boundedness, applied once per \(n\).</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>True.</strong> Each \(x_n\) was chosen from \([a,b]\), so the whole sequence lives there.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>That's the unearned step, and your reading emphasises it in bold: <em>IF</em> the sequence
        converged.</strong></p>
      <p>Nothing about \((x_n)\) suggests convergence. The points were chosen one at a time, each merely to make
        \(|f|\) large; they could hop about \([a,b]\) forever without settling. Bounded does not mean convergent
        &mdash; \(((-1)^n)\) from Day 21 is bounded and goes nowhere.</p>
      <p>Your reading: "there is no reason to expect the sequence \((x_n)\) to converge to anything and we can't make
        such an assumption."</p>
      <p>But look at how <em>nearly</em> it works. Steps (1), (2), (4) and (5) are all sound; the argument needs one
        fact it does not have. That is a much better position than being wrong &mdash; it tells you precisely what
        theorem to go and prove.</p>
      <p>And the fix is a weakening. We don't need the whole sequence to converge; a piece of it will do, because a
        piece of it still has \(|f(x_{n_k})| &gt; n_k \to \infty\). That weakened statement is the
        Bolzano&ndash;Weierstrass Theorem, and it is true.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Sound, given line (3).</strong> This is Day 25's bridge plus Day 19's boundedness lemma, both
        properly proved. The reasoning is fine; it is standing on nothing.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>Sound, given line (3).</strong> The contradiction really would follow. Everything downstream of the
        gap is in order &mdash; which is exactly what makes this a useful specimen rather than a wrong turn.</p>
    </div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Subsequences: keep some terms, in order</h2>

  <p>A subsequence keeps infinitely many terms of \((x_n)\) <strong>in their original order</strong>, with strictly
    increasing indices \(n_1 &lt; n_2 &lt; n_3 &lt; \cdots\). No repeating, no reordering, no stopping.</p>

  <div class="ctl-row">
    <button class="btn411 ghost d31-sub on" data-k="0">(x₂, x₄, x₆, …)</button>
    <button class="btn411 ghost d31-sub" data-k="1">(x₁, x₄, x₉, …)</button>
    <button class="btn411 ghost d31-sub" data-k="2">(x₂, x₅, x₁₂, x₁₄, …)</button>
    <button class="btn411 ghost d31-sub" data-k="3">(x₁, x₁, x₁, …)</button>
    <button class="btn411 ghost d31-sub" data-k="4">(x₉₉, x₁₀₀, x₉₉, …)</button>
    <button class="btn411 ghost d31-sub" data-k="5">(x₁, x₂, x₃)</button>
  </div>

  <canvas class="plot" id="d31-sub"></canvas>
  <div class="readout" id="d31-sub-out"></div>

  <p>The last three are the reading's non-examples, and each fails for a different reason: repeating an index,
    going backwards, and stopping. All three violate "\(n_1 &lt; n_2 &lt; n_3 &lt; \cdots\) forever."</p>

  <p>The indices need no pattern at all &mdash; \((x_2, x_5, x_{12}, x_{14}, x_{23}, \ldots)\) is perfectly good. That
    matters, because the subsequence Bolzano&ndash;Weierstrass produces is built one term at a time by a rule that
    yields no formula whatsoever.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Bisecting a sequence into submission</h2>

  <p>Bolzano&ndash;Weierstrass: <em>any</em> sequence in \([a,b]\) has a subsequence converging to some \(c \in
    [a,b]\). The proof is Day 29's bisection template again, with a new property 5:</p>

  \[ \text{for each } k, \quad x_n \in [a_k, b_k] \ \text{ for } \textbf{infinitely many } n \]

  <p>Halve the interval; at least one half must still contain infinitely many terms; keep that half. Watch it run on a
    sequence with no limit at all.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d31-seq">Sequence in [0, 1]</label>
      <select id="d31-seq"></select>
    </div>
    <div class="ctl">
      <label for="d31-k">Bisection steps</label>
      <input type="range" id="d31-k" min="0" max="14" step="1" value="3">
    </div>
  </div>

  <canvas class="plot" id="d31-bw"></canvas>
  <div class="readout" id="d31-bw-out"></div>

  <p>"Infinitely many" is the load-bearing phrase, and it does two jobs at once. It guarantees at least one half always
    qualifies &mdash; if both halves held only finitely many terms, the whole interval would too, and it doesn't. And
    it guarantees you can always find a term with index <em>larger</em> than the last one you took, which is what makes
    the result an honest subsequence rather than an arbitrary collection of points.</p>

  <p>Your reading flags exactly this: "to make a subsequence it is crucial that \(n_2 &gt; n_1\), and this is why we
    needed to insist that \(x_n \in [a_2,b_2]\) for infinitely many \(n\)."</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on subsequences</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Which is <em>not</em> a subsequence of \((x_n)\)?</p>
    <button class="mc-opt" type="button" data-key="a">\((x_2, x_4, x_6, \ldots)\)</button>
    <button class="mc-opt" type="button" data-key="b">\((x_2, x_5, x_{12}, x_{14}, x_{23}, \ldots)\)</button>
    <button class="mc-opt" type="button" data-key="c">\((x_{99}, x_{100}, x_{99}, \ldots)\)</button>
    <div class="mc-fb" data-key="a">Indices \(2 &lt; 4 &lt; 6 &lt; \cdots\) &mdash; increasing, so it qualifies.</div>
    <div class="mc-fb" data-key="b">Irregular but strictly increasing, which is all that's required. No pattern is
      needed.</div>
    <div class="mc-fb" data-key="c">Correct &mdash; the indices go \(99, 100, 99\), which decreases. A subsequence
      must move strictly forward. (Repeating a term, as in \((x_1,x_1,x_1,\ldots)\), and stopping after three terms
      both fail for related reasons.)</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">What does Bolzano&ndash;Weierstrass require of the sequence?</p>
    <button class="mc-opt" type="button" data-key="a">That it converges.</button>
    <button class="mc-opt" type="button" data-key="b">Only that it is bounded &mdash; nothing else at all.</button>
    <button class="mc-opt" type="button" data-key="c">That it is monotone.</button>
    <div class="mc-fb" data-key="a">If it converged there'd be nothing to prove.</div>
    <div class="mc-fb" data-key="b">Correct, and the strength of the theorem is exactly how little it asks. Your
      reading: "no matter how 'random' the sequence may be, as long as it is bounded then some part of it must
      converge." That is what lets it rescue the alleged proof, where \((x_n)\) was built by a process with no
      structure whatever.</div>
    <div class="mc-fb" data-key="c">Monotone plus bounded gives convergence outright &mdash; that's Corollary 9.4.5,
      coming on Day 32.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Why must at least one half of \([a_k,b_k]\) contain infinitely many terms?</p>
    <button class="mc-opt" type="button" data-key="a">If both halves held only finitely many, so would their union
      &mdash; contradicting that the whole interval holds infinitely many.</button>
    <button class="mc-opt" type="button" data-key="b">Because the sequence is increasing.</button>
    <button class="mc-opt" type="button" data-key="c">Because the halves have equal length.</button>
    <div class="mc-fb" data-key="a">Correct: a union of two finite sets is finite. Which is also why property 5 has to
      say "infinitely many" rather than "at least one" &mdash; "at least one" would not survive the halving.</div>
    <div class="mc-fb" data-key="b">No monotonicity is assumed anywhere.</div>
    <div class="mc-fb" data-key="c">Equal lengths make the intervals shrink at a known rate, but say nothing about
      where the terms are.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Does every unbounded sequence fail to have a convergent subsequence?</p>
    <button class="mc-opt" type="button" data-key="a">Yes &mdash; unbounded sequences have none.</button>
    <button class="mc-opt" type="button" data-key="b">Yes, unless the sequence is monotone.</button>
    <button class="mc-opt" type="button" data-key="c">No &mdash; some do and some don't; the theorem simply says
      nothing either way.</button>
    <div class="mc-fb" data-key="a">Your reading gives a counterexample: \((((-1)^n + 1)n)\) is unbounded, yet its
      odd-indexed terms are all \(0\), a convergent subsequence.</div>
    <div class="mc-fb" data-key="b">Monotone unbounded sequences have no convergent subsequence, but that isn't the
      general rule.</div>
    <div class="mc-fb" data-key="c">Correct: "if the sequence is unbounded, then all bets are off." \((n)\) has no
      convergent subsequence; \((((-1)^n+1)n)\) does. Boundedness is sufficient, not necessary &mdash; another place
      where a theorem's converse fails.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The alleged proof needed only one extra fact, and everything else was sound. When you get stuck on a proof, how
      would you tell the difference between a wrong approach and a right one missing a lemma?</li>
    <li>Bolzano&ndash;Weierstrass rests on the NIP, which is our completeness axiom. Find a bounded sequence of
      <em>rationals</em> with no subsequence converging to a rational, and see exactly where completeness enters.</li>
    <li>The subsequence is constructed by choosing \(n_k\) one at a time, with no formula. Is that a legitimate way to
      define a sequence? What are you assuming about infinitely many choices?</li>
    <li>For a bounded sequence, how many different limits can its convergent subsequences have? Can it be infinitely
      many? Try \(\sin n\) from Day 21.</li>
  </ol>
</div>

<script>
  (function () {
    /* ---------------- subsequences ---------------- */
    var SUBS = [
      { idx: function (k) { return 2 * k; }, count: 14, ok: true, label: '(x₂, x₄, x₆, …)', why: 'Indices \\(2 &lt; 4 &lt; 6 &lt; \\cdots\\) increase forever. A subsequence.' },
      { idx: function (k) { return k * k; }, count: 8, ok: true, label: '(x₁, x₄, x₉, …)', why: 'Indices \\(1 &lt; 4 &lt; 9 &lt; \\cdots\\) increase forever. A subsequence &mdash; and note it skips more and more terms, which is allowed.' },
      { list: [2, 5, 12, 14, 23, 27, 31, 40, 44, 51], ok: true, label: '(x₂, x₅, x₁₂, x₁₄, …)', why: 'No pattern at all, but the indices strictly increase. A subsequence. Patternless index sets are exactly what Bolzano&ndash;Weierstrass produces.' },
      { list: [1, 1, 1, 1, 1, 1], ok: false, label: '(x₁, x₁, x₁, …)', why: '<strong>Not</strong> a subsequence: the indices repeat rather than increase. You are reusing one term, not selecting from the sequence.' },
      { list: [99, 100, 99, 100, 99], ok: false, label: '(x₉₉, x₁₀₀, x₉₉, …)', why: '<strong>Not</strong> a subsequence: the indices go backwards. Order must be preserved.' },
      { list: [1, 2, 3], ok: false, label: '(x₁, x₂, x₃)', why: '<strong>Not</strong> a subsequence: it stops. A subsequence is itself an infinite sequence.' }
    ];

    var subCan = document.getElementById('d31-sub'),
      subOut = document.getElementById('d31-sub-out'),
      subK = 0;

    function drawSub() {
      var s = SUBS[subK];
      var picks = s.list ? s.list.slice() : [];
      if (!s.list) for (var k = 1; k <= s.count; k++) picks.push(s.idx(k));

      var NMAX = 30;
      var d = M411.hidpi(subCan, 190), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 30, padR = 20, y = 74;
      function X(n) { return padL + (n - 1) / (NMAX - 1) * (W - padL - padR); }

      ctx.strokeStyle = '#ddd'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(W - padR, y); ctx.stroke();
      for (var n = 1; n <= NMAX; n++) {
        ctx.fillStyle = '#ccd0d5';
        ctx.beginPath(); ctx.arc(X(n), y, 3.2, 0, 2 * Math.PI); ctx.fill();
      }

      // the chosen ones, in the order chosen
      var prev = null, broke = false;
      picks.forEach(function (p, i) {
        if (p > NMAX) return;
        var bad = prev !== null && p <= prev;
        if (bad) broke = true;
        ctx.fillStyle = bad ? '#d9534f' : M411.colors.check;
        ctx.beginPath(); ctx.arc(X(p), y, 6, 0, 2 * Math.PI); ctx.fill();
        // order label below
        ctx.fillStyle = bad ? '#d9534f' : M411.colors.muted;
        ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(String(i + 1), X(p), y + 22);
        if (prev !== null && prev <= NMAX) {
          ctx.strokeStyle = bad ? '#d9534f' : 'rgba(243,110,36,0.5)'; ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(X(prev), y - 9);
          ctx.quadraticCurveTo((X(prev) + X(p)) / 2, y - 34, X(p), y - 9);
          ctx.stroke();
        }
        prev = p;
      });

      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('the original sequence x₁ … x₃₀; selected terms in orange, numbered by position', padL, 24);
      ctx.fillText('order taken →', padL, H - 10);

      subOut.innerHTML = '<p><strong>' + s.label + '</strong> &mdash; indices ' +
        picks.slice(0, 8).join(', ') + (picks.length > 8 ? ', …' : '') + '</p><p>' + s.why + '</p>' +
        (s.ok ? '' : '<p style="color:#d9534f">The red markers show where the index rule breaks.</p>');
      M411.typeset(subOut);
    }

    document.querySelectorAll('.d31-sub').forEach(function (b) {
      b.addEventListener('click', function () {
        subK = +b.getAttribute('data-k');
        document.querySelectorAll('.d31-sub').forEach(function (o) { o.classList.remove('on'); });
        b.classList.add('on');
        drawSub();
      });
    });

    /* ---------------- BW bisection ---------------- */
    var SEQS = [
      {
        label: 'xₙ = fractional part of n·√2  (dense, no limit)',
        f: function (n) { var v = n * Math.SQRT2; return v - Math.floor(v); }
      },
      { label: 'xₙ = (1 + (−1)ⁿ)/2  (oscillates 0,1,0,1)', f: function (n) { return (1 + Math.pow(-1, n)) / 2; } },
      { label: 'xₙ = |sin n|  (wanders)', f: function (n) { return Math.abs(Math.sin(n)); } },
      { label: 'xₙ = 1/n  (converges — subsequences too)', f: function (n) { return 1 / n; } }
    ];

    var qSel = document.getElementById('d31-seq'),
      kIn = document.getElementById('d31-k'),
      bwCan = document.getElementById('d31-bw'),
      bwOut = document.getElementById('d31-bw-out');

    SEQS.forEach(function (s, i) {
      var o = document.createElement('option'); o.value = String(i); o.textContent = s.label; qSel.appendChild(o);
    });

    function drawBW() {
      var seq = SEQS[+qSel.value], K = +kIn.value;
      var NSAMP = 3000;
      var vals = [];
      for (var n = 1; n <= NSAMP; n++) vals.push(seq.f(n));

      // bisect, keeping the half with more terms (a proxy for "infinitely many")
      var a = 0, b = 1, picks = [];
      var alive = vals.map(function (v, i) { return i; });
      for (var k = 0; k < K; k++) {
        var m = (a + b) / 2;
        var left = alive.filter(function (i) { return vals[i] <= m; });
        var right = alive.filter(function (i) { return vals[i] > m; });
        if (left.length >= right.length) { b = m; alive = left; } else { a = m; alive = right; }
      }

      // build the subsequence: after each halving, take the first index beyond the last taken
      var aa = 0, bb = 1, liveIdx = vals.map(function (v, i) { return i; }), last = -1;
      for (var kk = 0; kk <= K; kk++) {
        if (kk > 0) {
          var mm = (aa + bb) / 2;
          var L = liveIdx.filter(function (i) { return vals[i] <= mm; });
          var R = liveIdx.filter(function (i) { return vals[i] > mm; });
          if (L.length >= R.length) { bb = mm; liveIdx = L; } else { aa = mm; liveIdx = R; }
        }
        for (var t = 0; t < liveIdx.length; t++) {
          if (liveIdx[t] > last) { last = liveIdx[t]; picks.push(liveIdx[t] + 1); break; }
        }
      }

      var d = M411.hidpi(bwCan, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 52, padR = 20, padT = 20, padB = 34, NSHOW = 220;
      function X(n) { return padL + (n - 1) / (NSHOW - 1) * (W - padL - padR); }
      function Y(v) { return padT + (1.06 - v) / 1.12 * (H - padT - padB); }

      // the surviving band
      ctx.fillStyle = 'rgba(243,110,36,0.16)';
      ctx.fillRect(padL, Y(b), W - padL - padR, Math.max(Y(a) - Y(b), 1.5));
      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 1.4;
      [a, b].forEach(function (v) {
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
      });

      for (var i2 = 1; i2 <= NSHOW; i2++) {
        var v = vals[i2 - 1];
        var inside = v >= a && v <= b;
        ctx.fillStyle = inside ? 'rgba(243,110,36,0.85)' : '#ccd0d5';
        ctx.beginPath(); ctx.arc(X(i2), Y(v), 2, 0, 2 * Math.PI); ctx.fill();
      }
      picks.forEach(function (p) {
        if (p > NSHOW) return;
        ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(X(p), Y(vals[p - 1]), 6, 0, 2 * Math.PI); ctx.stroke();
      });

      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('terms x₁ … x' + NSHOW + '; circled = the subsequence being built', padL, H - 10);

      var insideCount = vals.filter(function (v) { return v >= a && v <= b; }).length;

      bwOut.innerHTML =
        '<p>After <strong>' + K + '</strong> halving' + (K === 1 ? '' : 's') + ': surviving interval \\([' +
        a.toFixed(6) + ',\\; ' + b.toFixed(6) + ']\\), of width \\(' + (b - a).toExponential(3) + '\\).</p>' +
        '<p>Of the first ' + NSAMP.toLocaleString() + ' terms, <strong>' + insideCount.toLocaleString() +
        '</strong> still land inside &mdash; and the real theorem says infinitely many do.</p>' +
        '<p>Subsequence indices chosen so far: \\(n_k = ' + picks.slice(0, 10).join(',\\; ') +
        (picks.length > 10 ? ',\\; \\ldots' : '') + '\\) &mdash; strictly increasing, with no pattern whatsoever. ' +
        'That is fine, and it is what the theorem delivers.</p>' +
        '<p>Whatever the original sequence does &mdash; and the first option here never settles anywhere &mdash; the ' +
        'circled terms are being squeezed into an interval that is halving every step. The NIP supplies the point ' +
        'they close in on.</p>';
      M411.typeset(bwOut);
    }
    qSel.addEventListener('change', drawBW);
    kIn.addEventListener('input', drawBW);

    M411.onResize(function () { drawSub(); drawBW(); });
    drawSub();
    drawBW();
  })();
</script>
