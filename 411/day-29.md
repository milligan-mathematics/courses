---
layout: day
title: "MATH 411 Day 29: The Nested Interval Property"
day: 29
chapter_number: 9
chapter: "The IVT and the EVT"
day_title: "The Nested Interval Property"
blurb: "Newton simply declared there were no holes in the number line. Two hundred years later, here is what that declaration has to say for itself &mdash; stated precisely enough to prove theorems with."
reading: "Section 9.1, the Completeness Axiom (NIP) through the existence of square roots"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Two sequences closing on a point</h2>

  <p>The NIP is an axiom, not a theorem &mdash; it is what we <em>assume</em> about \(\mathbb{R}\). It says: given a
    non-decreasing \((x_n)\), a non-increasing \((y_n)\), with \(x_n \le y_n\) always and \(y_n - x_n \to 0\), there is
    a unique \(c\) caught between them for every \(n\).</p>

  <p>Equivalently, a shrinking chain of nested closed intervals has exactly one point in common:</p>

  \[ [x_1,y_1] \supseteq [x_2,y_2] \supseteq [x_3,y_3] \supseteq \cdots, \qquad \bigcap_{n=1}^{\infty}[x_n,y_n] =
  \{c\} \]

  <div class="ctl-row">
    <div class="ctl">
      <label for="d29-n">Intervals shown</label>
      <input type="range" id="d29-n" min="1" max="20" step="1" value="6">
    </div>
    <div class="ctl">
      <label for="d29-ex">Example</label>
      <select id="d29-ex"></select>
    </div>
  </div>

  <canvas class="plot" id="d29-nest"></canvas>
  <div class="readout" id="d29-nest-out"></div>

  <p>What the axiom asserts is that the point at the centre <strong>exists</strong>. That is not obvious and it is not
    free &mdash; it is exactly the claim that the line has no gaps. If \(\mathbb{R}\) had a hole where the intervals
    are closing, the sequences would converge on nothing at all, and the intersection would be empty.</p>

  <p>Your reading: "If there was no such \(c\) then there would be a hole where these two sequences come together. The
    NIP guarantees that there is no such hole."</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Which hypotheses are actually doing work?</h2>

  <p>Four conditions is a lot to carry. Here is an argument that some are decoration.</p>

  <p><strong>Click the claim that is false.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">The NIP requires the intervals to be <em>nested</em>: each contained in the
        one before.</button>
      <button class="fline" type="button">It requires their lengths to shrink to \(0\), which is what forces the
        common point to be unique.</button>
      <button class="fline" type="button">The intervals being <em>closed</em> is a technicality; the same conclusion
        holds for open intervals \((x_n, y_n)\).</button>
      <button class="fline" type="button">Without the shrinking condition, the intersection can still be non-empty
        &mdash; it just needn't be a single point.</button>
      <button class="fline" type="button">The NIP is an axiom, so it is assumed rather than proved.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>True.</strong> Conditions 1&ndash;3 &mdash; \((x_n)\) non-decreasing, \((y_n)\) non-increasing, \(x_n
        \le y_n\) &mdash; together say exactly that \([x_{n+1},y_{n+1}] \subseteq [x_n,y_n]\).</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>True.</strong> If the lengths tended to some positive number, the intersection would be an interval
        rather than a point, and uniqueness would fail. Shrinking to \(0\) is what collapses it to one \(c\).</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>False &mdash; and this is the sharpest counterexample in the section.</strong></p>
      <p>Take the open intervals \(\left(0, \frac1n\right)\). They are nested, their lengths shrink to \(0\), and
        every hypothesis but closedness holds. Yet</p>
      \[ \bigcap_{n=1}^{\infty}\left(0, \tfrac1n\right) = \varnothing \]
      <p>Why? Any candidate \(c\) would need \(0 &lt; c &lt; \frac1n\) for every \(n\) &mdash; a positive number below
        every \(\frac1n\). Day 4's Archimedean Property says no such number exists. And \(c=0\) fails because \(0\) is
        excluded from every interval.</p>
      <p>So the intersection is empty, and the NIP is false for open intervals. Closedness is not a technicality; it
        is what keeps the endpoints available as candidates for the limit point. In the closed version, \(c\) is
        frequently one of the endpoints being approached.</p>
      <p>Notice how neatly this ties back. Day 4 said there is no positive real below every \(\frac1n\); Day 21 said
        "open" and "closed" are not opposites; and here both facts combine to explain why one word in an axiom cannot
        be dropped.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>True in general, but be careful &mdash; boundedness matters too.</strong> Nested closed intervals of
        non-shrinking length, like \([0, 1+\frac1n]\), do intersect: in \([0,1]\), an interval rather than a point.</p>
      <p>But unbounded closed sets can fail entirely: \([n,\infty)\) for \(n=1,2,3,\ldots\) are nested and closed, and
        their intersection is empty, since no real number exceeds every integer &mdash; the Archimedean Property
        again. The NIP is stated for genuine intervals \([x_n,y_n]\) with real endpoints, so this case is excluded by
        the setup.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>True, and worth being uncomfortable about.</strong> Your reading: "We do not need to prove this since
        an axiom is, by definition, a self evident truth. We are taking it on faith that the real number system obeys
        this law."</p>
      <p>What makes it acceptable is that the assumption is now <em>explicit</em>. Newton assumed the same thing
        silently on Day 3 when he decided there was a number where \(\sqrt2\) ought to be. The NIP does not remove the
        assumption &mdash; it states it precisely enough to be used in proofs, and precisely enough that you can see
        exactly where each theorem needs it.</p>
    </div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Bisection: manufacturing a number that has to exist</h2>

  <p>Your reading uses the NIP to prove that every non-negative real has a square root &mdash; and the difficulty is
    that you may not write \(\sqrt a\) anywhere in the proof, since its existence is the thing at issue.</p>

  <p>The technique is <em>bisection</em>: start with an interval known to contain the answer, halve it, keep the half
    that still must contain it, repeat. Watch it run.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d29-target">Problem</label>
      <select id="d29-target"></select>
    </div>
    <div class="ctl">
      <label for="d29-steps">Bisection steps</label>
      <input type="range" id="d29-steps" min="0" max="40" step="1" value="5">
    </div>
  </div>

  <canvas class="plot" id="d29-bisect"></canvas>
  <div class="readout" id="d29-bisect-out"></div>

  <p>Every step preserves one crucial extra fact &mdash; for the square-root case, \(x_n^2 \le a \le y_n^2\) &mdash;
    and that is what pins down <em>which</em> number the NIP has produced. Your reading calls this the fifth
    property, and it's the one that changes from application to application:</p>

  <blockquote class="source">
    In applying the NIP to prove the IVT and EVT, we will find that properties 1&ndash;4 will stay the same. Property 5
    is what will change based on the property we want \(c\) to have.
  </blockquote>

  <p>That is a template worth memorising, because Days 30&ndash;32 apply it three more times. Bisect to get properties
    1&ndash;4 for free; choose the halving rule so that property 5 says what you need; let the NIP hand you \(c\); then
    use property 5 to show \(c\) does the job.</p>

  <p>Try the second problem in the list, \(x = \cos x\). Your reading raises it precisely because there is no formula
    for the answer &mdash; no combination of roots and familiar functions produces it. Bisection finds it anyway, and
    the NIP is what guarantees there is something there to find.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on completeness</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Why isn't "the real line has no holes" good enough as a statement of completeness?</p>
    <button class="mc-opt" type="button" data-key="a">Because it's false.</button>
    <button class="mc-opt" type="button" data-key="b">Because you can't build a rigorous proof on it &mdash; "hole" is
      not defined.</button>
    <button class="mc-opt" type="button" data-key="c">Because \(\mathbb{R}\) does have holes.</button>
    <div class="mc-fb" data-key="a">It's true; it just isn't usable.</div>
    <div class="mc-fb" data-key="b">Correct, and it's the same move as Days 17 and 22. "Approaches," "close to," and
      "no holes" are all intuitions that must be replaced by something a proof can consume. Your reading: "How are we
      going to formulate a rigorous proof based on this statement?"</div>
    <div class="mc-fb" data-key="c">\(\mathbb{Q}\) has holes; \(\mathbb{R}\) is what you get by filling them.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Why does the square-root proof avoid writing \(\sqrt a\)?</p>
    <button class="mc-opt" type="button" data-key="a">Notational preference.</button>
    <button class="mc-opt" type="button" data-key="b">Because \(\sqrt a\) might be irrational.</button>
    <button class="mc-opt" type="button" data-key="c">Because the existence of \(\sqrt a\) is what's being proved
      &mdash; using the symbol would assume the conclusion.</button>
    <div class="mc-fb" data-key="a">It's a logical necessity, not a style choice.</div>
    <div class="mc-fb" data-key="b">Irrationality is fine; the issue is whether the number exists at all.</div>
    <div class="mc-fb" data-key="c">Correct. Your reading: "we can't just say, 'Let \(c=\sqrt{a}\),' since the idea is
      to show that this square root exists." Writing the symbol presupposes there is something for it to name &mdash;
      the same error as writing \(\lim a_n\) before proving convergence, on Day 21.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Where in the bisection does the choice of which half to keep get made?</p>
    <button class="mc-opt" type="button" data-key="a">By whichever half preserves the extra property &mdash; here,
      \(x_n^2 \le a \le y_n^2\).</button>
    <button class="mc-opt" type="button" data-key="b">Always the left half.</button>
    <button class="mc-opt" type="button" data-key="c">At random; either works.</button>
    <div class="mc-fb" data-key="a">Correct, and it's the whole design. Compare \(m^2\) with \(a\) and keep the half
      that still brackets the answer. Properties 1&ndash;4 come free from bisecting at all; property 5 is bought by
      choosing <em>which</em> half.</div>
    <div class="mc-fb" data-key="b">Then the intervals would close on the left endpoint and tell you nothing.</div>
    <div class="mc-fb" data-key="c">Random halving satisfies the NIP but produces a meaningless \(c\).</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Does the NIP hold in \(\mathbb{Q}\)?</p>
    <button class="mc-opt" type="button" data-key="a">Yes &mdash; it's about intervals, not about which numbers
      exist.</button>
    <button class="mc-opt" type="button" data-key="b">No &mdash; and that failure is exactly what distinguishes
      \(\mathbb{R}\) from \(\mathbb{Q}\).</button>
    <button class="mc-opt" type="button" data-key="c">Only for intervals with integer endpoints.</button>
    <div class="mc-fb" data-key="a">The conclusion asserts a number <em>exists</em> in the intersection, so it is very
      much about which numbers there are.</div>
    <div class="mc-fb" data-key="b">Correct. One can build nested rational intervals whose lengths shrink to zero with
      no rational point in common &mdash; the intersection sits at a hole. That's your problem for today, and it's why
      the NIP is adopted as <em>the</em> completeness axiom.</div>
    <div class="mc-fb" data-key="c">No such restriction helps.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>\(\bigcap\left(0,\frac1n\right) = \varnothing\) shows closedness is essential. Construct a nested family of
      closed but <em>unbounded</em> sets with empty intersection, and say which NIP hypothesis excludes it.</li>
    <li>Bisection halves the interval each step, so \(k\) steps give about \(k/3\) decimal digits. How many steps to
      pin a root down to ten digits? Is that fast, compared with Day 8's Gregory series?</li>
    <li>Your reading motivates the NIP with Euler's constant \(\gamma\) &mdash; a number whose existence needs proof,
      and which as of 2013 was not even known to be rational or irrational. What does it mean to prove a number exists
      while knowing so little about it?</li>
    <li>The NIP is one of several equivalent ways to state completeness. Before Day 33, try to guess another &mdash;
      what other property might capture "no holes"?</li>
  </ol>
</div>

<script>
  (function () {
    /* ---------------- nested intervals ---------------- */
    var NESTS = [
      {
        label: 'closing on √2',
        x: function (n) { return Math.sqrt(2) - 1.2 / Math.pow(1.9, n); },
        y: function (n) { return Math.sqrt(2) + 1.0 / Math.pow(1.75, n); },
        c: Math.SQRT2, clabel: '\\sqrt2'
      },
      {
        label: 'closing on 1/3',
        x: function (n) { return 1 / 3 - 1 / (n + 1); },
        y: function (n) { return 1 / 3 + 2 / (n + 2); },
        c: 1 / 3, clabel: '\\tfrac13'
      },
      {
        label: 'closing on π − 3',
        x: function (n) { return (Math.PI - 3) - 0.9 / (n * n + 1); },
        y: function (n) { return (Math.PI - 3) + 1.4 / (n * n + 1); },
        c: Math.PI - 3, clabel: '\\pi - 3'
      }
    ];

    var nIn = document.getElementById('d29-n'),
      eSel = document.getElementById('d29-ex'),
      nCan = document.getElementById('d29-nest'),
      nOut = document.getElementById('d29-nest-out');

    NESTS.forEach(function (e, i) {
      var o = document.createElement('option'); o.value = String(i); o.textContent = e.label; eSel.appendChild(o);
    });

    function drawNest() {
      var ex = NESTS[+eSel.value], N = +nIn.value;
      var d = M411.hidpi(nCan, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 60, padR = 30, padT = 22, padB = 34;

      var lo = ex.x(1), hi = ex.y(1);
      var pad = (hi - lo) * 0.08; lo -= pad; hi += pad;
      function X(v) { return padL + (v - lo) / (hi - lo) * (W - padL - padR); }

      var rowH = (H - padT - padB) / N;
      for (var n = 1; n <= N; n++) {
        var y = padT + (n - 0.5) * rowH;
        var xa = ex.x(n), xb = ex.y(n);
        ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = Math.max(2, Math.min(5, rowH * 0.35));
        ctx.globalAlpha = 0.35 + 0.65 * (n / N);
        ctx.beginPath(); ctx.moveTo(X(xa), y); ctx.lineTo(X(xb), y); ctx.stroke();
        // closed endpoints
        ctx.fillStyle = M411.colors.explore;
        ctx.beginPath(); ctx.arc(X(xa), y, 2.6, 0, 2 * Math.PI); ctx.fill();
        ctx.beginPath(); ctx.arc(X(xb), y, 2.6, 0, 2 * Math.PI); ctx.fill();
        ctx.globalAlpha = 1;
        if (n === 1 || n === N) {
          ctx.fillStyle = M411.colors.muted; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
          ctx.fillText('n = ' + n, padL - 8, y + 3);
        }
      }

      // the common point
      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(X(ex.c), padT - 6); ctx.lineTo(X(ex.c), H - padB + 6); ctx.stroke();
      ctx.fillStyle = M411.colors.check; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('c', X(ex.c), H - padB + 20);

      nOut.innerHTML =
        '<p>After ' + N + ' interval' + (N === 1 ? '' : 's') + ': \\([x_{' + N + '}, y_{' + N + '}] = [' +
        ex.x(N).toFixed(8) + ',\\; ' + ex.y(N).toFixed(8) + ']\\), of length \\(' +
        (ex.y(N) - ex.x(N)).toExponential(3) + '\\).</p>' +
        '<p>Each interval sits inside the one above it, and the lengths are heading to \\(0\\). The NIP says there ' +
        'is exactly one point in all of them &mdash; here \\(c = ' + ex.clabel + ' = ' + ex.c.toFixed(10) +
        '\\).</p>' +
        '<p>By Theorem 9.1.4 the two sequences of endpoints both converge to that same \\(c\\), which is what makes ' +
        'the NIP usable: it produces a number <em>and</em> two sequences that reach it.</p>';
      M411.typeset(nOut);
    }
    nIn.addEventListener('input', drawNest);
    eSel.addEventListener('change', drawNest);

    /* ---------------- bisection ---------------- */
    var TARGETS = [
      {
        label: 'find c with c² = 2',
        g: function (x) { return x * x - 2; }, x0: 0, y0: 3,
        prop: 'x_n^2 \\le 2 \\le y_n^2',
        note: 'The reading\'s construction, with \\(a = 2\\). Starting from \\(x_1 = 0\\) and \\(y_1 = a+1\\), ' +
          'each step keeps whichever half still satisfies \\(x^2 \\le 2 \\le y^2\\).'
      },
      {
        label: 'find c with c = cos c',
        g: function (x) { return x - Math.cos(x); }, x0: 0, y0: Math.PI / 2,
        prop: 'f(x_n) \\le 0 \\le f(y_n)',
        note: 'Your reading raises exactly this: \\(f(x) = x - \\cos x\\) is continuous with \\(f(0) = -1\\) and ' +
          '\\(f(\\pi/2) = \\pi/2\\), so something in between must be a root. But <em>what number</em>? There is no ' +
          'formula for it in terms of roots or familiar functions &mdash; and the NIP produces it anyway.'
      },
      {
        label: 'find c with c³ = 7',
        g: function (x) { return x * x * x - 7; }, x0: 0, y0: 8,
        prop: 'x_n^3 \\le 7 \\le y_n^3',
        note: 'The same construction handles cube roots, and \\(n\\)th roots generally &mdash; change the ' +
          'comparison and nothing else.'
      },
      {
        label: 'find c with 2^c = 10',
        g: function (x) { return Math.pow(2, x) - 10; }, x0: 0, y0: 8,
        prop: '2^{x_n} \\le 10 \\le 2^{y_n}',
        note: 'This \\(c\\) is \\(\\log_2 10\\). Bisection does not care that the function is transcendental; it ' +
          'only needs to be able to compare at the midpoint.'
      }
    ];

    var tSel = document.getElementById('d29-target'),
      sIn = document.getElementById('d29-steps'),
      bCan = document.getElementById('d29-bisect'),
      bOut = document.getElementById('d29-bisect-out');

    TARGETS.forEach(function (t, i) {
      var o = document.createElement('option'); o.value = String(i); o.textContent = t.label; tSel.appendChild(o);
    });

    function drawBisect() {
      var t = TARGETS[+tSel.value], K = +sIn.value;
      var x = t.x0, y = t.y0, hist = [[x, y]];
      for (var k = 0; k < K; k++) {
        var m = (x + y) / 2;
        if (t.g(m) <= 0) x = m; else y = m;
        hist.push([x, y]);
      }

      var d = M411.hidpi(bCan, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 56, padR = 26, padT = 20, padB = 34;
      var lo = t.x0, hi = t.y0, span = hi - lo;
      lo -= span * 0.04; hi += span * 0.04;
      function X(v) { return padL + (v - lo) / (hi - lo) * (W - padL - padR); }

      var rows = Math.min(hist.length, 22);
      var rowH = (H - padT - padB) / rows;
      for (var r = 0; r < rows; r++) {
        var idx = Math.round(r * (hist.length - 1) / Math.max(rows - 1, 1));
        var yy = padT + (r + 0.5) * rowH;
        ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = Math.max(2, Math.min(5, rowH * 0.4));
        ctx.globalAlpha = 0.3 + 0.7 * (r / Math.max(rows - 1, 1));
        ctx.beginPath();
        ctx.moveTo(X(hist[idx][0]), yy);
        ctx.lineTo(Math.max(X(hist[idx][1]), X(hist[idx][0]) + 1.5), yy);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(X((x + y) / 2), padT - 6); ctx.lineTo(X((x + y) / 2), H - padB + 6); ctx.stroke();
      ctx.fillStyle = M411.colors.check; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('c', X((x + y) / 2), H - padB + 20);
      ctx.fillStyle = M411.colors.muted; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText('start', padL - 8, padT + rowH * 0.5 + 3);

      bOut.innerHTML =
        '<p>After <strong>' + K + '</strong> bisection' + (K === 1 ? '' : 's') + ':</p>' +
        '<p class="big">\\( x_{' + (K + 1) + '} = ' + x.toFixed(12) + ', \\quad y_{' + (K + 1) + '} = ' +
        y.toFixed(12) + ' \\)</p>' +
        '<p>Interval length \\(' + (y - x).toExponential(3) + '\\) &mdash; halved every step, so it is ' +
        '\\((y_1-x_1)/2^{' + K + '}\\).</p>' +
        '<p>Property 5 held at every stage: \\(' + t.prop + '\\). That is what tells you <em>which</em> number the ' +
        'NIP has produced.</p>' +
        '<p>' + t.note + '</p>';
      M411.typeset(bOut);
    }
    tSel.addEventListener('change', drawBisect);
    sIn.addEventListener('input', drawBisect);

    M411.onResize(function () { drawNest(); drawBisect(); });
    drawNest();
    drawBisect();
  })();
</script>
