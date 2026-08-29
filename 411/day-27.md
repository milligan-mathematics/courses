---
layout: day
title: "MATH 411 Day 27: The Limit of a Function"
day: 27
chapter_number: 8
chapter: "Continuity"
day_title: "The Limit of a Function"
blurb: "The first idea in a calculus course was the last one to be defined properly. Its whole purpose is to describe what a function is doing at a point where it isn't."
reading: "Section 8.3, from Newton's ultimate ratios through the Squeeze Theorem for functions"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The one symbol that matters: \(0 &lt; |x-a|\)</h2>

  <p>Definition 8.3.1 differs from the definition of continuity in exactly two places:</p>

  <div class="ctl-row" style="gap:24px;">
    <div style="flex:1;min-width:260px;">
      <p><strong>Continuity at \(a\)</strong><br>
        \(\forall\varepsilon &gt; 0\;\exists\delta &gt; 0\) such that<br>
        \(\;\;|x - a| &lt; \delta \;\Rightarrow\; |f(x) - \boldsymbol{f(a)}| &lt; \varepsilon\)</p>
    </div>
    <div style="flex:1;min-width:260px;">
      <p><strong>\(\lim_{x\to a}f(x) = L\)</strong><br>
        \(\forall\varepsilon &gt; 0\;\exists\delta &gt; 0\) such that<br>
        \(\;\;\boldsymbol{0 &lt;} |x - a| &lt; \delta \;\Rightarrow\; |f(x) - \boldsymbol{L}| &lt; \varepsilon\)</p>
    </div>
  </div>

  <p>The value \(f(a)\) has become an independent number \(L\), and the point \(x = a\) has been excluded. Both changes
    exist for one reason: <strong>\(f\) need not be defined at \(a\)</strong>.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d27-fn">Function</label>
      <select id="d27-fn"></select>
    </div>
    <div class="ctl">
      <label for="d27-eps">\(\varepsilon\)</label>
      <input type="range" id="d27-eps" min="-2" max="0" step="0.02" value="-0.7">
    </div>
  </div>

  <canvas class="plot" id="d27-canvas"></canvas>
  <div class="readout" id="d27-out"></div>

  <p>The hollow circle marks the excluded point. Because \(x = a\) is never tested, the limit is completely
    indifferent to what happens there &mdash; whether \(f(a)\) is undefined, or defined at some absurd value, the limit
    is the same.</p>

  <p>Which gives the cleanest way to hold the relationship between the two ideas:</p>

  \[ f \text{ is continuous at } a \quad\Longleftrightarrow\quad \lim_{x\to a}f(x) = f(a) \]

  <p>Continuity is the limit existing <em>and</em> the function being defined there <em>and</em> the two agreeing.
    Three conditions bundled into one word.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>"Redefine \(f(a) = L\)" &mdash; a reformulation that pays for itself</h2>

  <p>Your reading makes an observation that looks like bookkeeping and is worth much more:</p>

  <blockquote class="source">
    We could say that \(\lim_{x\to a}f(x) = L\) provided that if we redefine \(f(a) = L\) (or define \(f(a)=L\) in the
    case where \(f(a)\) is not defined) then \(f\) becomes continuous at \(a\).
  </blockquote>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal why this matters</button>
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">Step 1. Why is the reformulation correct?</div>
        <div class="sstep-body">
          <p>Define \(\tilde f\) to agree with \(f\) away from \(a\), with \(\tilde f(a) = L\). Continuity of
            \(\tilde f\) at \(a\) requires \(|x-a| &lt; \delta \Rightarrow |\tilde f(x) - L| &lt; \varepsilon\).</p>
          <p>Split that into \(x = a\) and \(x \ne a\). At \(x = a\) it reads \(|L - L| = 0 &lt; \varepsilon\),
            automatically true. For \(x \ne a\) it is exactly the limit condition. So the two statements say the same
            thing &mdash; and the excluded point \(0 &lt; |x-a|\) is precisely the case that was free anyway.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 2. Cash it in: the limit laws for free.</div>
        <div class="sstep-body">
          <p>Every theorem about continuous functions now transfers to limits, because a limit statement <em>is</em> a
            continuity statement about a patched function.</p>
          <p>Corollary 8.3.5 &mdash; the sequential characterisation of function limits &mdash; comes, in your
            reading's phrase, "virtually for free" from Theorem 8.2.1. And the sum, product and quotient rules for
            limits follow from the sequence theorems of Chapter 6 by the same two-step translation you saw on Day
            25.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 3. Watch the translation run once.</div>
        <div class="sstep-body">
          <p>Your reading's proof of the sum rule, in outline:</p>
          <ul>
            <li>Take any sequence \(x_n \to a\) with \(x_n \ne a\).</li>
            <li>By Corollary 8.3.5, \(f(x_n) \to L\) and \(g(x_n) \to M\).</li>
            <li>By Theorem 6.2.4 (sequences), \(f(x_n) + g(x_n) \to L + M\).</li>
            <li>Since the sequence was arbitrary, Corollary 8.3.5 converts back: \(\lim_{x\to a}(f+g) = L+M\).</li>
          </ul>
          <p>Note \(x_n \ne a\) throughout &mdash; the sequences must avoid \(a\), matching the \(0 &lt; |x-a|\) in the
            definition. Drop that and the argument breaks for functions with a removable discontinuity.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Step 4. A strange consequence worth noticing.</div>
        <div class="sstep-body">
          <p>Your reading asks where the variable \(x\) is drawn from &mdash; \(\mathbb{Q}\) or \(\mathbb{R}\)? All the
            definition needs is that \(x\) can be chosen arbitrarily close to \(a\), and by Theorem 2.0.11 from Day 4
            the rationals alone already permit that.</p>
          <p>Which yields, in the reading's words, "the paradoxical sounding conclusion that we do not need a continuum
            (\(\mathbb{R}\)) to have continuity."</p>
          <p>Worth sitting with. The definition of continuity is <em>local and approximate</em> &mdash; it only ever
            asks about values at nearby points &mdash; and density is enough for that. The completeness of
            \(\mathbb{R}\) is needed for the big <em>theorems</em> about continuous functions, the Intermediate and
            Extreme Value Theorems, which is exactly where Chapter 9 goes next. Not for the definition itself.</p>
        </div>
      </li>
    </ol>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>\(\dfrac{\sin x}{x}\), and the squeeze that settles it</h2>

  <p>This is the limit that started the section: the derivative of \(\sin x\) at \(0\) is the limit of
    \(D(x) = \frac{\sin x}{x}\), a function that is <em>not defined</em> at \(0\). Cauchy's insight was that the limit
    is \(1\) because \(D(x)\) can be made to differ from \(1\) by as little as we wish.</p>

  <p>Your problem set derives the inequality \(\cos x &lt; \frac{\sin x}{x} &lt; 1\) from areas in the unit circle.
    Here is what it looks like once you have it.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d27-zoom">Zoom toward \(0\)</label>
      <input type="range" id="d27-zoom" min="0" max="24" step="1" value="0">
    </div>
  </div>

  <canvas class="plot" id="d27-sinc"></canvas>
  <div class="readout" id="d27-sinc-out"></div>

  <p>Both \(\cos x\) and the constant \(1\) tend to \(1\) as \(x \to 0\), so by the Squeeze Theorem for functions the
    quantity trapped between them does too. Notice that the argument never evaluates \(\frac{\sin x}{x}\) at \(0\)
    &mdash; it can't &mdash; and never needs to.</p>

  <p>Compare with the historical alternatives. Newton's "ultimate ratio" was the value of \(\frac{2xh+h^2}{h}\) "at the
    last instant of time before \(h\) vanishes." Leibniz's \(\mathrm{d}x\) was infinitely small but nonzero. Both were
    trying to describe the value of a quotient at a point where the quotient does not exist. Weierstrass's answer is
    to stop asking about the point.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>A limit is not a value</h2>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Let \(f(x) = \dfrac{x^2 - 1}{x - 1}\) for \(x \neq 1\), and \(f(1) =
        7\).</button>
      <button class="fline" type="button">For \(x \neq 1\), \(f(x) = x + 1\), so \(\lim_{x\to 1}f(x) = 2\).</button>
      <button class="fline" type="button">Since the limit exists, \(f\) is continuous at \(1\).</button>
      <button class="fline" type="button">Hence \(\lim_{x\to 1}f(x) = f(1) = 7\).</button>
      <button class="fline" type="button">So \(2 = 7\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>A perfectly legal function.</strong> Nothing forbids defining \(f(1)\) to be whatever you like &mdash;
        the formula doesn't apply at \(x=1\), so a value has to be supplied by hand, and \(7\) is as available as
        anything else.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Correct.</strong> \(\frac{x^2-1}{x-1} = \frac{(x-1)(x+1)}{x-1} = x+1\) for \(x \ne 1\), and the limit
        only ever consults \(x \ne 1\). This is the reading's Example 8.3.2, where \(\delta = \varepsilon\) works.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>That's the error: existence of the limit is only <em>part</em> of continuity.</strong></p>
      <p>The correct statement is \(f\) is continuous at \(a\) if and only if \(\lim_{x\to a}f(x) = f(a)\). Three
        things are required: the limit exists, \(f(a)\) exists, and <em>they are equal</em>. Here the first two hold
        and the third fails: \(2 \ne 7\).</p>
      <p>This is exactly why the definition of a limit excludes \(x = a\). Excluding it makes the limit blind to
        \(f(a)\) &mdash; which is what we wanted, since \(f(a)\) may not exist &mdash; but that same blindness means
        the limit can tell you nothing about whether \(f(a)\) is the right value.</p>
      <p>Such a discontinuity is called <em>removable</em>: redefine \(f(1) = 2\) and continuity is restored. That's
        the reformulation from the scaffold above, seen from the other side. A removable discontinuity is one where
        the limit knows the right answer and the function simply hasn't been told.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Inherits the error.</strong> The equation \(\lim_{x\to a}f = f(a)\) holds precisely when \(f\) is
        continuous at \(a\) &mdash; which line (3) asserted without warrant.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>False, obviously &mdash; and that is what makes the exercise useful.</strong> The absurdity is
        visible, so the only question is which line to blame. Trace backwards to the first step that claimed more than
        it had.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on limits</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Why does the definition say \(0 &lt; |x-a| &lt; \delta\)?</p>
    <button class="mc-opt" type="button" data-key="a">To keep \(\delta\) positive.</button>
    <button class="mc-opt" type="button" data-key="b">To exclude \(x = a\), since \(f\) may not be defined
      there.</button>
    <button class="mc-opt" type="button" data-key="c">To make the limit unique.</button>
    <div class="mc-fb" data-key="a">\(\delta &gt; 0\) is stated separately.</div>
    <div class="mc-fb" data-key="b">Correct, and your reading says it's the only purpose of the change: "since \(f\)
      needn't be defined at \(a\), we will not even consider what happens when \(x = a\)."</div>
    <div class="mc-fb" data-key="c">Uniqueness holds either way; it isn't what the clause is for.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Historically, which came first?</p>
    <button class="mc-opt" type="button" data-key="a">The formal definition of a limit, then continuity.</button>
    <button class="mc-opt" type="button" data-key="b">Both at once, in Cauchy's 1821 <em>Cours d'analyse</em>.</button>
    <button class="mc-opt" type="button" data-key="c">Continuity (Bolzano, 1817), then the limit &mdash; the reverse of
      the order calculus is now taught in.</button>
    <div class="mc-fb" data-key="a">The reverse of what happened, and your reading flags the oddity.</div>
    <div class="mc-fb" data-key="b">Cauchy's definitions came after Bolzano's continuity work, and the fully modern
      limit is Weierstrass's, around 1859&ndash;60.</div>
    <div class="mc-fb" data-key="c">Correct. The limit "was part of a unification of all the ideas of calculus that
      were studied previously," which is why it now comes first in a course even though it came last
      historically.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">What is the relationship between continuity and limits?</p>
    <button class="mc-opt" type="button" data-key="a">\(f\) is continuous at \(a\) iff \(\lim_{x\to a}f(x) =
      f(a)\).</button>
    <button class="mc-opt" type="button" data-key="b">\(f\) is continuous at \(a\) iff \(\lim_{x\to a}f(x)\)
      exists.</button>
    <button class="mc-opt" type="button" data-key="c">They are independent notions.</button>
    <div class="mc-fb" data-key="a">Correct, and all three parts matter: the limit exists, \(f(a)\) exists, and they
      agree. Dropping the last is the flaw activity above.</div>
    <div class="mc-fb" data-key="b">Not sufficient &mdash; the limit can exist while \(f(a)\) is undefined or simply
      wrong.</div>
    <div class="mc-fb" data-key="c">They are almost the same statement; the limit is continuity with the point
      removed.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Your reading concludes we "do not need a continuum to have continuity." What does that mean?</p>
    <button class="mc-opt" type="button" data-key="a">That continuous functions can be defined without real
      numbers.</button>
    <button class="mc-opt" type="button" data-key="b">That the \(\varepsilon\)&ndash;\(\delta\) definition only needs
      to choose \(x\) arbitrarily close to \(a\), which \(\mathbb{Q}\) already permits.</button>
    <button class="mc-opt" type="button" data-key="c">That \(\mathbb{R}\) and \(\mathbb{Q}\) are the same.</button>
    <div class="mc-fb" data-key="a">Too broad &mdash; the point is about what the <em>definition</em> requires, not
      about dispensing with \(\mathbb{R}\).</div>
    <div class="mc-fb" data-key="b">Correct. The definition is local and approximate: it only asks about values at
      nearby points, and density supplies those. Completeness becomes indispensable for the <em>theorems</em> &mdash;
      the Intermediate and Extreme Value Theorems &mdash; which is exactly where Chapter 9 is headed.</div>
    <div class="mc-fb" data-key="c">Day 3 settled that they are not.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Continuity is defined without needing completeness, but the Intermediate Value Theorem will need it. Find a
      function continuous on \(\mathbb{Q}\) that takes a negative value and a positive value but is never zero
      &mdash; and see exactly where the IVT would fail.</li>
    <li>Newton's ultimate ratio was the value "at the last instant before \(h\) vanishes." What is wrong with that as
      a definition, and what precisely does the modern one do instead?</li>
    <li>The limit ignores \(f(a)\) entirely. Is that a feature or a limitation? What can a limit never tell you?</li>
    <li>Corollary 8.3.5 requires sequences with \(x_n \ne a\). Build an example where dropping that condition makes
      the statement false.</li>
  </ol>
</div>

<script>
  (function () {
    var FNS = [
      {
        label: '(x² − 1)/(x − 1)   at a = 1',
        a: 1, L: 2, defined: false,
        f: function (x) { return Math.abs(x - 1) < 1e-12 ? NaN : (x * x - 1) / (x - 1); },
        note: 'Undefined at \\(a=1\\), yet the limit is a perfectly ordinary \\(2\\). Away from \\(1\\) the ' +
          'function <em>is</em> \\(x+1\\), and the limit never looks at \\(x=1\\).'
      },
      {
        label: 'sin(x)/x   at a = 0',
        a: 0, L: 1, defined: false,
        f: function (x) { return Math.abs(x) < 1e-12 ? NaN : Math.sin(x) / x; },
        note: 'The difference quotient for \\(\\sin\\) at \\(0\\). Undefined at the one point we care about &mdash; ' +
          'which is exactly the situation the limit concept was invented for.'
      },
      {
        label: 'defined at a, but wrongly',
        a: 1, L: 2, defined: true, fa: 7,
        f: function (x) { return Math.abs(x - 1) < 1e-12 ? 7 : x + 1; },
        note: 'Here \\(f(1) = 7\\) exists and the limit is still \\(2\\). The limit is blind to the value at ' +
          '\\(a\\) &mdash; so limit and value can disagree, and that disagreement is exactly discontinuity.'
      },
      {
        label: 'continuous: x + 1 at a = 1',
        a: 1, L: 2, defined: true, fa: 2,
        f: function (x) { return x + 1; },
        note: 'Limit exists, value exists, and they agree. All three conditions hold, which is what "continuous at ' +
          '\\(a\\)" bundles together.'
      }
    ];

    var sel = document.getElementById('d27-fn'),
      eIn = document.getElementById('d27-eps'),
      canvas = document.getElementById('d27-canvas'),
      out = document.getElementById('d27-out');

    FNS.forEach(function (f, i) {
      var o = document.createElement('option'); o.value = String(i); o.textContent = f.label; sel.appendChild(o);
    });

    function draw() {
      var fn = FNS[+sel.value], eps = Math.pow(10, +eIn.value), a = fn.a, L = fn.L;

      var STEP = 0.0005, MAXD = 2.0, delta = MAXD;
      for (var t = STEP; t <= MAXD; t += STEP) {
        var bad = false;
        [a + t, a - t].forEach(function (x) {
          var v = fn.f(x);
          if (isFinite(v) && Math.abs(v - L) >= eps) bad = true;
        });
        if (bad) { delta = t; break; }
      }

      var d = M411.hidpi(canvas, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 50, padR = 20, padT = 18, padB = 32;
      var xlo = a - 2.2, xhi = a + 2.2, ylo = L - 3, yhi = L + 6;
      function X(x) { return padL + (x - xlo) / (xhi - xlo) * (W - padL - padR); }
      function Y(y) { return padT + (yhi - y) / (yhi - ylo) * (H - padT - padB); }

      ctx.fillStyle = 'rgba(0,133,82,0.14)';
      ctx.fillRect(padL, Y(L + eps), W - padL - padR, Math.max(Y(L - eps) - Y(L + eps), 1));
      ctx.fillStyle = 'rgba(243,110,36,0.15)';
      ctx.fillRect(X(a - delta), padT, Math.max(X(a + delta) - X(a - delta), 1.5), H - padT - padB);

      ctx.strokeStyle = '#333'; ctx.lineWidth = 2.2;
      ctx.beginPath();
      var started = false;
      for (var i = 0; i <= 900; i++) {
        var x = xlo + (xhi - xlo) * i / 900, y = fn.f(x);
        if (!isFinite(y) || y < ylo - 20 || y > yhi + 20) { started = false; continue; }
        started ? ctx.lineTo(X(x), Y(y)) : (ctx.moveTo(X(x), Y(y)), started = true);
      }
      ctx.stroke();

      // hollow circle at the excluded point
      ctx.fillStyle = '#fff'; ctx.strokeStyle = '#333'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(X(a), Y(L), 5.5, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
      if (fn.defined && fn.fa !== L) {
        ctx.fillStyle = M411.colors.flaw;
        ctx.beginPath(); ctx.arc(X(a), Y(fn.fa), 5.5, 0, 2 * Math.PI); ctx.fill();
        ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
        ctx.fillText('f(a) = ' + fn.fa, X(a) + 10, Y(fn.fa) + 4);
      } else if (fn.defined) {
        ctx.fillStyle = '#333';
        ctx.beginPath(); ctx.arc(X(a), Y(L), 4, 0, 2 * Math.PI); ctx.fill();
      }

      ctx.fillStyle = M411.colors.scaffold; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('L ± ε', padL + 4, Y(L + eps) - 5);
      ctx.fillStyle = M411.colors.check; ctx.textAlign = 'center';
      ctx.fillText('a ± δ', X(a), H - padB + 14);

      out.innerHTML =
        '<p>\\(a = ' + a + '\\), \\(L = ' + L + '\\), \\(\\varepsilon = ' + eps.toFixed(4) + '\\) &rarr; ' +
        '\\(\\delta = ' + delta.toFixed(4) + '\\) works.</p>' +
        '<p>' + fn.note + '</p>' +
        (fn.defined
          ? (fn.fa === L
            ? '<p>Here \\(f(a) = L\\), so this function is <em>continuous</em> at \\(a\\) as well.</p>'
            : '<p>Here \\(f(a) = ' + fn.fa + ' \\neq L\\), so the limit exists but the function is <strong>not ' +
            'continuous</strong> at \\(a\\). Note the \\(\\delta\\)-strip does not care &mdash; the excluded ' +
            'point is never tested.</p>')
          : '<p>\\(f(a)\\) does not exist, so continuity at \\(a\\) is not even a question. The limit is.</p>');
      M411.typeset(out);
    }
    sel.addEventListener('change', draw);
    eIn.addEventListener('input', draw);

    /* ---------------- sin x / x ---------------- */
    var zIn = document.getElementById('d27-zoom'),
      sCan = document.getElementById('d27-sinc'),
      sOut = document.getElementById('d27-sinc-out');

    function drawSinc() {
      var z = Math.pow(10, +zIn.value / 10), half = 1.5 / z;
      var d = M411.hidpi(sCan, 270), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 62, padR = 20, padT = 18, padB = 32;

      function sinc(x) { return Math.abs(x) < 1e-14 ? NaN : Math.sin(x) / x; }
      var lo = Math.min(Math.cos(half), sinc(half) || 1) - (1 - Math.cos(half)) * 0.4 - 1e-9;
      var hi = 1 + (1 - Math.cos(half)) * 0.5 + 1e-9;
      if (hi - lo < 1e-12) { lo = 1 - 1e-12; hi = 1 + 1e-12; }

      function X(x) { return padL + (x + half) / (2 * half) * (W - padL - padR); }
      function Y(y) { return padT + (hi - y) / (hi - lo) * (H - padT - padB); }

      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = 0; g <= 4; g++) {
        var v = lo + (hi - lo) * g / 4;
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
        ctx.fillStyle = M411.colors.muted; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(v.toFixed(8), padL - 8, Y(v) + 4);
      }

      function plot(f, color, width, dash) {
        ctx.strokeStyle = color; ctx.lineWidth = width; ctx.setLineDash(dash || []);
        ctx.beginPath();
        var started = false;
        for (var i = 0; i <= 900; i++) {
          var x = -half + 2 * half * i / 900, y = f(x);
          if (!isFinite(y)) { started = false; continue; }
          started ? ctx.lineTo(X(x), Y(y)) : (ctx.moveTo(X(x), Y(y)), started = true);
        }
        ctx.stroke(); ctx.setLineDash([]);
      }
      plot(function () { return 1; }, M411.colors.explore, 1.8, [5, 4]);
      plot(Math.cos, M411.colors.explore, 1.8, [5, 4]);
      plot(sinc, M411.colors.check, 2.6);

      ctx.fillStyle = '#fff'; ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(X(0), Y(1), 5, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();

      ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = M411.colors.explore; ctx.fillText('cos x   and   1', padL + 6, padT + 14);
      ctx.fillStyle = M411.colors.check; ctx.fillText('sin(x)/x', padL + 6, padT + 30);

      sOut.innerHTML =
        '<p>Window \\(\\pm' + half.toExponential(2) + '\\). At the edge, \\(\\cos x = ' +
        Math.cos(half).toFixed(12) + '\\) and \\(\\frac{\\sin x}{x} = ' + sinc(half).toFixed(12) + '\\).</p>' +
        '<p>The corridor between \\(\\cos x\\) and \\(1\\) has width \\(' + (1 - Math.cos(half)).toExponential(3) +
        '\\) and closes as \\(x \\to 0\\). Anything trapped inside is forced to \\(1\\) &mdash; and \\(\\frac{\\sin ' +
        'x}{x}\\) is trapped inside.</p>' +
        '<p>The hollow circle is the point that does not exist. The Squeeze Theorem for functions never asks about ' +
        'it: its hypothesis holds "for \\(x\\) sufficiently close to \\(a\\) (but not equal to \\(a\\))."</p>';
      M411.typeset(sOut);
    }
    zIn.addEventListener('input', drawSinc);

    M411.onResize(function () { draw(); drawSinc(); });
    draw();
    drawSinc();
  })();
</script>
