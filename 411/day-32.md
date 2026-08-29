---
layout: day
title: "MATH 411 Day 32: Least Upper Bounds and the EVT"
day: 32
chapter_number: 9
chapter: "The IVT and the EVT"
day_title: "Least Upper Bounds and the EVT"
blurb: "Being bounded is not the same as having a maximum. The gap between them is filled by the supremum &mdash; and closing it finally discharges the debt Rolle's Theorem has been carrying since Day 28."
reading: "Section 9.4, upper bounds and the supremum through the Extreme Value Theorem"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Bounded, without a maximum</h2>

  <p>Your reading opens with \(\arctan x\) on \((-\infty,\infty)\). It is bounded &mdash; strictly between
    \(-\frac{\pi}{2}\) and \(\frac{\pi}{2}\) &mdash; and it attains neither. The bounds are approached and never
    reached.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d32-ex">Example</label>
      <select id="d32-ex"></select>
    </div>
  </div>

  <canvas class="plot" id="d32-canvas"></canvas>
  <div class="readout" id="d32-out"></div>

  <p>Step through the list. In each case the set of values has a smallest upper bound, and the question is whether the
    function ever <em>equals</em> it. Sometimes yes, sometimes no &mdash; and where it fails, the reason is always
    either an unbounded domain, a missing endpoint, or a discontinuity.</p>

  <p>That's why the EVT insists on all three: a <strong>closed</strong>, <strong>bounded</strong> interval and a
    <strong>continuous</strong> function. Remove any one and the examples above supply a counterexample.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The supremum: the smallest of the upper bounds</h2>

  <p>Any \(b \ge x\) for all \(x \in S\) is an upper bound, and a set with one has infinitely many. What's special is
    the <em>least</em> of them:</p>

  <ul>
    <li>\(b \ge x\) for every \(x \in S\), and</li>
    <li>if \(c &lt; b\), then some \(x \in S\) has \(x &gt; c\) &mdash; so nothing smaller is an upper bound.</li>
  </ul>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d32-set">Set \(S\)</label>
      <select id="d32-set"></select>
    </div>
    <div class="ctl">
      <label for="d32-c">Candidate bound \(c\)</label>
      <input type="range" id="d32-c" min="-0.5" max="2.5" step="0.01" value="1.4">
    </div>
  </div>

  <canvas class="plot" id="d32-sup"></canvas>
  <div class="readout" id="d32-sup-out"></div>

  <p>Slide \(c\) down past the supremum and watch elements of \(S\) escape above it. That is the second condition
    doing its work: below the supremum, the set always has something left.</p>

  <p>Two things are worth pinning down, because both trip people up. The supremum <strong>may or may not belong to
    \(S\)</strong> &mdash; \(\sup(0,1) = \sup[0,1] = 1\), and only the second contains it. And a set with a supremum
    need not have a <em>maximum</em>: \((0,1)\) has no largest element at all, yet its least upper bound is perfectly
    well defined.</p>

  <p>That distinction is exactly what makes the supremum useful. "Maximum" may not exist; "supremum" always does, for
    any non-empty set bounded above. Theorem 9.4.3 &mdash; the Least Upper Bound Property &mdash; is what guarantees
    it, and like everything in this chapter, it is proved from the NIP by bisection.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>How the EVT gets assembled</h2>

  <p>The proof of the EVT is the first place in this course where several major theorems are combined into one
    argument. Worth seeing the assembly before you write it out.</p>

  <p><strong>EVT.</strong> If \(f\) is continuous on \([a,b]\), there are \(c, d \in [a,b]\) with \(f(d) \le f(x) \le
    f(c)\) for all \(x \in [a,b]\).</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the assembly</button>
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Step 1. Get a bounded set of values.</div>
        <div class="sstep-body">
          <p>Theorem 9.3.1 says \(f[a,b] = \{f(x) : x \in [a,b]\}\) is bounded &mdash; and that theorem was the one
            rescued on Day 31 by Bolzano&ndash;Weierstrass.</p>
          <p>Note what has changed viewpoint here: we stop thinking about the function and start thinking about its
            <em>set of values</em>. Everything that follows is about that set.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 2. Name the target.</div>
        <div class="sstep-body">
          <p>The set \(f[a,b]\) is non-empty and bounded above, so by the LUBP it has a supremum. Call it \(s\).</p>
          <p>By definition \(s \ge f(x)\) for every \(x\), so \(s\) is a ceiling. The entire remaining question is
            whether the ceiling is ever <em>touched</em> &mdash; whether some \(c\) has \(f(c) = s\). The \(\arctan\)
            example shows this is exactly where it can fail.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 3. Manufacture a sequence closing in on the supremum.</div>
        <div class="sstep-body">
          <p>Here the second condition earns its keep. For each \(n\), the number \(s - \frac1n\) is smaller than
            \(s\), so it is <em>not</em> an upper bound &mdash; meaning some value of \(f\) exceeds it. So there is
            \(x_n \in [a,b]\) with</p>
          \[ s - \tfrac1n &lt; f(x_n) \le s \]
          <p>The values \(f(x_n)\) are squeezed toward \(s\). But the points \(x_n\) themselves are, again, chosen one
            at a time with no reason to converge &mdash; the same situation as Day 31's alleged proof.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 4. Extract a convergent piece.</div>
        <div class="sstep-body">
          <p>\((x_n)\) lies in \([a,b]\), so it's bounded, and Bolzano&ndash;Weierstrass gives a subsequence
            \((x_{n_k})\) converging to some \(c \in [a,b]\).</p>
          <p>That \(c\) lies <em>in</em> \([a,b]\) is not a detail &mdash; it is where closedness of the interval is
            spent. On \((a,b)\) the limit could escape to an endpoint that isn't there, and on an unbounded domain
            Bolzano&ndash;Weierstrass wouldn't apply at all.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 5. Let continuity close the deal.</div>
        <div class="sstep-body">
          <p>By Theorem 8.2.1, \(f(x_{n_k}) \to f(c)\). But the squeeze from Step 3 forces \(f(x_{n_k}) \to s\). A
            sequence has one limit, so \(f(c) = s\) &mdash; the supremum is attained, and \(c\) is the maximum point.
            (The details are your problem for today.)</p>
          <p>For the minimum, apply all of this to \(-f\). A slick move worth remembering: rather than repeat a
            symmetric argument, transform the problem into one you've already solved.</p>
          <p>Now count what was used: the NIP (via Bolzano&ndash;Weierstrass <em>and</em> via the LUBP), continuity in
            two places, and the closedness and boundedness of \([a,b]\) in two more. This theorem is where the whole
            chapter converges.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 6. The debt from Day 28 is discharged.</div>
        <div class="sstep-body">
          <p>Rolle's Theorem opened by asserting that a continuous function on \([a,b]\) attains a maximum and a
            minimum, and your reading attached a warning that the proof was incomplete until the EVT was proved.</p>
          <p>It now is. So Rolle is complete, and therefore the Mean Value Theorem, and therefore every fact about
            derivatives you used in calculus.</p>
          <p>Trace the chain all the way down: \(f' &gt; 0 \Rightarrow f\) increasing rests on the MVT, which rests on
            Rolle, which rests on the EVT, which rests on Bolzano&ndash;Weierstrass and the LUBP, which rest on the
            NIP &mdash; which is the assumption that \(\mathbb{R}\) has no holes. Newton made that assumption silently
            on Day 3. It has taken twenty-nine days to pay for it.</p>
        </div>
      </li>
    </ol>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Which hypothesis is doing the work?</h2>

  <p><strong>Click the claim that is false.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">\(f(x) = \frac1x\) on \((0,1]\) is continuous and unbounded &mdash; so the
        EVT needs a <em>closed</em> interval.</button>
      <button class="fline" type="button">\(f(x) = x\) on \((0,1)\) is continuous and bounded but attains neither
        extreme &mdash; so the EVT needs the endpoints included.</button>
      <button class="fline" type="button">\(f(x) = \arctan x\) on \(\mathbb{R}\) is continuous and bounded but attains
        neither &mdash; so the EVT needs a <em>bounded</em> interval.</button>
      <button class="fline" type="button">A bounded function on a closed bounded interval attains its extremes, so
        continuity is not really needed.</button>
      <button class="fline" type="button">The supremum of a set need not belong to the set, which is precisely why
        "attained" has to be proved rather than assumed.</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>True.</strong> \(\frac1x\) blows up as \(x \to 0^+\), and \((0,1]\) is missing that endpoint. Even
        Theorem 9.3.1 &mdash; mere boundedness &mdash; fails without a closed interval.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>True, and it's the subtler failure.</strong> On \((0,1)\) the values are bounded, \(\sup = 1\) and
        \(\inf = 0\), and neither is attained because the points where they would be attained are not in the domain.
        The supremum exists; the maximum does not.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>True</strong> &mdash; your reading's opening example. Bounded by \(\pm\frac{\pi}{2}\), attaining
        neither, because the domain runs off to infinity.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>False &mdash; continuity is indispensable.</strong></p>
      <p>Take \(f\) on \([0,1]\) with \(f(x) = x\) for \(x &lt; 1\) and \(f(1) = 0\). It is bounded, the interval is
        closed and bounded, and the supremum of its values is \(1\). But \(f\) never equals \(1\): the values climb
        toward it and the one point that would have reached it has been reassigned to \(0\).</p>
      <p>So no maximum, on a closed bounded interval, with a bounded function. The single missing ingredient is
        continuity &mdash; and you can see exactly where the proof would break. Step 5 needs \(f(x_{n_k}) \to f(c)\),
        which is Theorem 8.2.1, which needs continuity at \(c\). Here \(x_{n_k} \to 1\) while \(f(x_{n_k}) \to 1 \ne
        0 = f(1)\).</p>
      <p>This is the value of having a proof rather than a picture: you can point at the line that fails.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>True, and it's the heart of the matter.</strong> \(\sup(0,1) = 1 \notin (0,1)\). The supremum always
        exists (for non-empty sets bounded above); being <em>attained</em> is an additional claim, and the EVT is
        precisely the theorem that it holds under the right hypotheses.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on suprema and extremes</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">What is \(\sup(0,1)\), and is it in the set?</p>
    <button class="mc-opt" type="button" data-key="a">There is none, since \((0,1)\) has no largest element.</button>
    <button class="mc-opt" type="button" data-key="b">\(0.999\ldots\), which is in the set.</button>
    <button class="mc-opt" type="button" data-key="c">\(1\), which is not in the set.</button>
    <div class="mc-fb" data-key="a">This conflates maximum with supremum. There's no maximum; the supremum exists
      anyway, and that's exactly why the notion was introduced.</div>
    <div class="mc-fb" data-key="b">\(0.999\ldots = 1\), and \(1 \notin (0,1)\).</div>
    <div class="mc-fb" data-key="c">Correct. \(1\) bounds the set above, and nothing smaller does &mdash; for any
      \(c &lt; 1\) there's an element between \(c\) and \(1\). Membership is irrelevant to being the least upper
      bound.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which theorems does the EVT proof use?</p>
    <button class="mc-opt" type="button" data-key="a">Only the LUBP.</button>
    <button class="mc-opt" type="button" data-key="b">Boundedness (via Bolzano&ndash;Weierstrass), the LUBP,
      Bolzano&ndash;Weierstrass again, and the sequential characterisation of continuity.</button>
    <button class="mc-opt" type="button" data-key="c">Only the Mean Value Theorem.</button>
    <div class="mc-fb" data-key="a">The LUBP supplies the target \(s\), but nothing yet says \(s\) is attained.</div>
    <div class="mc-fb" data-key="b">Correct &mdash; it's the most heavily assembled proof in the course, and every
      ingredient traces back to the NIP.</div>
    <div class="mc-fb" data-key="c">Backwards: the MVT depends on the EVT, through Rolle.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Why can we say \(s - \frac1n\) is not an upper bound of \(f[a,b]\)?</p>
    <button class="mc-opt" type="button" data-key="a">Because \(s\) is the <em>least</em> upper bound, so anything
      smaller fails to be one.</button>
    <button class="mc-opt" type="button" data-key="b">Because \(f\) is continuous.</button>
    <button class="mc-opt" type="button" data-key="c">Because \(\frac1n \to 0\).</button>
    <div class="mc-fb" data-key="a">Correct &mdash; the second defining condition, in its contrapositive form: if
      \(c &lt; s\) then some element of the set exceeds \(c\). That is what produces the sequence.</div>
    <div class="mc-fb" data-key="b">Continuity is used later, at the last step.</div>
    <div class="mc-fb" data-key="c">True, and it's why the squeeze tightens &mdash; but the reason \(s-\frac1n\) fails
      to bound is leastness.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Your reading says the NIP, Bolzano&ndash;Weierstrass and the LUBP are equivalent. What does that
      mean?</p>
    <button class="mc-opt" type="button" data-key="a">They say the same thing in different words.</button>
    <button class="mc-opt" type="button" data-key="b">They are all unproved axioms.</button>
    <button class="mc-opt" type="button" data-key="c">Any one may be taken as the completeness axiom, and the others
      then proved as theorems from it.</button>
    <div class="mc-fb" data-key="a">Their statements are quite different &mdash; about nested intervals, about
      subsequences, about upper bounds. The equivalence is logical, not verbal.</div>
    <div class="mc-fb" data-key="b">Exactly one need be an axiom; the rest become theorems. Which one you pick is a
      matter of taste, and your reading notes that "most modern textbooks use the LUBP."</div>
    <div class="mc-fb" data-key="c">Correct, and your reading is nice about why several formulations exist: "people
      tend to gravitate toward ideas that suit the particular problem they are working on... Only in hindsight do we
      see that they were really talking about the same concept."</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The EVT proof uses \(-f\) to get the minimum from the maximum. Where else in this course has a symmetric case
      been dispatched by a transformation rather than a repeated argument?</li>
    <li>Every non-empty set bounded above has a supremum. What is the analogous statement for lower bounds, and can you
      derive it from the LUBP rather than proving it again?</li>
    <li>Corollary 9.4.5 says a bounded increasing sequence converges. Compare that with Bolzano&ndash;Weierstrass:
      which is stronger, and what does monotonicity buy you?</li>
    <li>Follow the chain from "\(f' &gt; 0\) implies \(f\) is increasing" all the way down to the NIP, naming every
      theorem on the way. How many links are there?</li>
  </ol>
</div>

<script>
  (function () {
    var EX = [
      {
        label: 'arctan x  on (−∞, ∞)', f: Math.atan, lo: -8, hi: 8, closed: false,
        sup: Math.PI / 2, inf: -Math.PI / 2, attained: false,
        why: 'Bounded by \\(\\pm\\frac{\\pi}{2}\\) and attaining neither. The domain is unbounded, so the EVT ' +
          'does not apply &mdash; and its conclusion genuinely fails.'
      },
      {
        label: 'x  on (0, 1)', f: function (x) { return x; }, lo: 0, hi: 1, closed: false,
        sup: 1, inf: 0, attained: false,
        why: 'Bounded, continuous, and attaining neither extreme &mdash; because the two points where it would ' +
          'has been removed from the domain. The interval is bounded but not closed.'
      },
      {
        label: 'x  on [0, 1]', f: function (x) { return x; }, lo: 0, hi: 1, closed: true,
        sup: 1, inf: 0, attained: true,
        why: 'Closed, bounded, continuous &mdash; all three hypotheses hold, and both extremes are attained, at the ' +
          'endpoints.'
      },
      {
        label: 'x(1 − x)  on [0, 1]', f: function (x) { return x * (1 - x); }, lo: 0, hi: 1, closed: true,
        sup: 0.25, inf: 0, attained: true,
        why: 'Both extremes attained &mdash; the maximum in the interior at \\(x = \\frac12\\), the minimum at both ' +
          'endpoints. The EVT says nothing about <em>where</em>.'
      },
      {
        label: 'x for x<1, 0 at x=1,  on [0,1]',
        f: function (x) { return x >= 1 ? 0 : x; }, lo: 0, hi: 1, closed: true,
        sup: 1, inf: 0, attained: false, jump: true,
        why: 'Closed, bounded, and <em>discontinuous</em>. The supremum of the values is \\(1\\), and the function ' +
          'never equals it. Continuity is not an optional hypothesis.'
      }
    ];

    var sel = document.getElementById('d32-ex'),
      canvas = document.getElementById('d32-canvas'),
      out = document.getElementById('d32-out');

    EX.forEach(function (e, i) {
      var o = document.createElement('option'); o.value = String(i); o.textContent = e.label; sel.appendChild(o);
    });

    function draw() {
      var ex = EX[+sel.value];
      var d = M411.hidpi(canvas, 280), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 54, padR = 20, padT = 20, padB = 32;
      var span = ex.sup - ex.inf;
      var ylo = ex.inf - span * 0.25, yhi = ex.sup + span * 0.25;
      function X(x) { return padL + (x - ex.lo) / (ex.hi - ex.lo) * (W - padL - padR); }
      function Y(y) { return padT + (yhi - y) / (yhi - ylo) * (H - padT - padB); }

      [[ex.sup, 'sup'], [ex.inf, 'inf']].forEach(function (pr) {
        ctx.setLineDash([6, 4]); ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(padL, Y(pr[0])); ctx.lineTo(W - padR, Y(pr[0])); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = M411.colors.check; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
        ctx.fillText(pr[1] + ' = ' + pr[0].toFixed(4), padL + 4, Y(pr[0]) - 6);
      });

      ctx.strokeStyle = '#333'; ctx.lineWidth = 2.4;
      ctx.beginPath();
      var started = false, prev = null;
      for (var i = 0; i <= 900; i++) {
        var x = ex.lo + (ex.hi - ex.lo) * i / 900, y = ex.f(x);
        if (!isFinite(y) || (prev !== null && Math.abs(y - prev) > (yhi - ylo) * 0.3)) {
          started = false; prev = y; continue;
        }
        started ? ctx.lineTo(X(x), Y(y)) : (ctx.moveTo(X(x), Y(y)), started = true);
        prev = y;
      }
      ctx.stroke();

      // endpoint markers: filled if included, hollow if not
      [[ex.lo], [ex.hi]].forEach(function (pr) {
        var x = pr[0], y = ex.f(x);
        if (!isFinite(y)) return;
        ctx.lineWidth = 2; ctx.strokeStyle = '#333';
        ctx.fillStyle = ex.closed ? '#333' : '#fff';
        ctx.beginPath(); ctx.arc(X(x), Y(y), 5, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
      });

      out.innerHTML =
        '<p>\\(\\sup = ' + ex.sup.toFixed(6) + '\\), \\(\\inf = ' + ex.inf.toFixed(6) + '\\). ' +
        (ex.attained
          ? '<strong style="color:var(--a411-scaffold)">Both attained.</strong>'
          : '<strong style="color:#d9534f">Not attained.</strong>') + '</p>' +
        '<p>' + ex.why + '</p>';
      M411.typeset(out);
    }
    sel.addEventListener('change', draw);

    /* ---------------- supremum ---------------- */
    var SETS = [
      {
        label: 'S = (0, 1)', pts: null, lo: 0, hi: 1, open: true, sup: 1,
        inS: false, note: 'The supremum \\(1\\) is not an element. \\(S\\) has no maximum at all.'
      },
      {
        label: 'S = [0, 1]', pts: null, lo: 0, hi: 1, open: false, sup: 1,
        inS: true, note: 'Here the supremum <em>is</em> an element, so it is also the maximum.'
      },
      {
        label: 'S = {1 − 1/n : n = 1, 2, 3, …}', pts: function () {
          var a = []; for (var n = 1; n <= 60; n++) a.push(1 - 1 / n); return a;
        }, lo: 0, hi: 1, sup: 1, inS: false,
        note: 'Every element is strictly below \\(1\\), and they close in on it. \\(\\sup S = 1 \\notin S\\), and ' +
          'again there is no maximum.'
      },
      {
        label: 'S = {rationals q with q² < 2, q > 0}', pts: function () {
          var a = []; for (var q = 1; q <= 40; q++) { var p = Math.floor(Math.sqrt(2) * q); a.push(p / q); }
          return a;
        }, lo: 0, hi: Math.SQRT2, sup: Math.SQRT2, inS: false,
        note: 'A set of <em>rationals</em> whose supremum is \\(\\sqrt2\\) &mdash; irrational. Over ' +
          '\\(\\mathbb{Q}\\) this set is bounded above with no least upper bound at all, which is the LUBP failing.'
      }
    ];

    var sSel = document.getElementById('d32-set'),
      cIn = document.getElementById('d32-c'),
      sCan = document.getElementById('d32-sup'),
      sOut = document.getElementById('d32-sup-out');

    SETS.forEach(function (s, i) {
      var o = document.createElement('option'); o.value = String(i); o.textContent = s.label; sSel.appendChild(o);
    });

    function drawSup() {
      var S = SETS[+sSel.value], c = +cIn.value;
      var d = M411.hidpi(sCan, 190), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var pad = 50, y = 96, lo = -0.6, hi = 2.6;
      function X(v) { return pad + (v - lo) / (hi - lo) * (W - 2 * pad); }

      ctx.strokeStyle = '#999'; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(W - pad, y); ctx.stroke();

      var above = 0;
      if (S.pts) {
        var arr = S.pts();
        arr.forEach(function (v) {
          if (v > c) above++;
          ctx.fillStyle = v > c ? '#d9534f' : M411.colors.explore;
          ctx.beginPath(); ctx.arc(X(v), y, 3.4, 0, 2 * Math.PI); ctx.fill();
        });
      } else {
        // an interval
        ctx.strokeStyle = M411.colors.explore; ctx.lineWidth = 7;
        ctx.beginPath(); ctx.moveTo(X(S.lo), y); ctx.lineTo(X(Math.min(S.hi, c)), y); ctx.stroke();
        if (c < S.hi) {
          ctx.strokeStyle = '#d9534f';
          ctx.beginPath(); ctx.moveTo(X(Math.max(S.lo, c)), y); ctx.lineTo(X(S.hi), y); ctx.stroke();
          above = 1;
        }
        ctx.lineWidth = 2;
        [[S.lo], [S.hi]].forEach(function (pr) {
          ctx.fillStyle = S.open ? '#fff' : M411.colors.explore;
          ctx.strokeStyle = M411.colors.explore;
          ctx.beginPath(); ctx.arc(X(pr[0]), y, 5.5, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
        });
      }

      // candidate c and the supremum
      ctx.strokeStyle = '#333'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(X(c), y - 34); ctx.lineTo(X(c), y + 22); ctx.stroke();
      ctx.fillStyle = '#333'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('c = ' + c.toFixed(2), X(c), y - 40);

      ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2; ctx.setLineDash([4, 3]);
      ctx.beginPath(); ctx.moveTo(X(S.sup), y - 22); ctx.lineTo(X(S.sup), y + 34); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = M411.colors.check;
      ctx.fillText('sup S', X(S.sup), y + 48);

      sOut.innerHTML =
        '<p>\\(\\sup S = ' + S.sup.toFixed(6) + '\\)' + (S.inS ? ', and it belongs to \\(S\\).' :
          ', and it does <strong>not</strong> belong to \\(S\\).') + '</p>' +
        (c >= S.sup
          ? '<p><strong style="color:var(--a411-scaffold)">\\(c = ' + c.toFixed(2) + '\\) is an upper bound.</strong> ' +
          'Every element of \\(S\\) is at or below it. But is it the <em>least</em> one? Slide down and find out.</p>'
          : '<p><strong style="color:#d9534f">\\(c = ' + c.toFixed(2) + '\\) is not an upper bound</strong> &mdash; ' +
          'elements of \\(S\\) (in red) lie above it. That is the second defining condition in action: below the ' +
          'supremum, the set always has something left.</p>') +
        '<p>' + S.note + '</p>';
      M411.typeset(sOut);
    }
    sSel.addEventListener('change', drawSup);
    cIn.addEventListener('input', drawSup);

    M411.onResize(function () { draw(); drawSup(); });
    draw();
    drawSup();
  })();
</script>
