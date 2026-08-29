---
layout: day
title: "MATH 411 Day 17: Sequences and the Definition of a Limit"
day: 17
chapter_number: 6
chapter: "Sequences and Series"
day_title: "Sequences and the Definition of a Limit"
blurb: "The moon gets closer to the earth every night for part of each month. It does not get close to the earth. Today the difference between those two sentences becomes a definition."
reading: "Section 6.1, from partial sums through Definition 6.1.1 and the worked examples"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>The \(\varepsilon\)&ndash;\(N\) game</h2>

  <p>Here is the definition your reading arrives at, stripped to its bones:</p>

  <p><strong>\(\lim_{n\to\infty}s_n = L\)</strong> means: for <em>any</em> \(\varepsilon &gt; 0\) there is a number
    \(N\) such that \(n &gt; N\) implies \(|s_n - L| &lt; \varepsilon\).</p>

  <p>It is easiest to hear as a game between two players. <strong>An adversary picks \(\varepsilon\)</strong> &mdash; a
    tolerance, as small and mean as they like. <strong>You must answer with an \(N\)</strong> &mdash; a place in the
    sequence past which every single term is within \(\varepsilon\) of \(L\). You win the claim \(\lim s_n = L\) if you
    can answer <em>every</em> challenge.</p>

  <p>Play it. Pick a sequence, propose a limit, and let the adversary tighten \(\varepsilon\).</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d17-seq">Sequence \(s_n\)</label>
      <select id="d17-seq"></select>
    </div>
    <div class="ctl">
      <label for="d17-L">Claimed limit \(L\)</label>
      <input type="number" id="d17-L" value="0" step="0.5" style="width:100px">
    </div>
    <div class="ctl">
      <label for="d17-eps">\(\varepsilon\) (adversary's challenge)</label>
      <input type="range" id="d17-eps" min="-3" max="0.3" step="0.02" value="-0.6">
    </div>
  </div>

  <canvas class="plot" id="d17-canvas"></canvas>
  <div class="readout" id="d17-out"></div>

  <p>Two things are worth doing deliberately before you move on.</p>

  <p><strong>First, tighten \(\varepsilon\) all the way for a convergent sequence.</strong> The band gets thin, and
    \(N\) marches right &mdash; but it always exists. That is what convergence <em>is</em>: not that the terms reach
    \(L\), but that every tolerance is eventually met and stayed inside.</p>

  <p><strong>Second, try \(s_n = \frac1n\) with \(L = -1\).</strong> Every term of \(\frac1n\) is closer to \(-1\) than
    the term before it, so in the loose sense of "approaches" this sequence approaches \(-1\). But set \(\varepsilon =
    0.5\) and no \(N\) exists at all. The band around \(-1\) never captures the tail.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Closer, and close</h2>

  <p>Your reading spends real time on this, and it's worth the space. The word "approaches" hides an ambiguity:</p>

  <blockquote class="source">
    Since the moon moves in an elliptical orbit about the earth for part of each month it is "approaching" the earth.
    The moon gets clos<em>er</em> to the earth but, thankfully, it does not get <em>close</em> to the earth.
  </blockquote>

  <p>Below, the same sequence \(\frac1n\) is measured against three candidate limits. The bars show \(|s_n - L|\)
    &mdash; the distance to the target.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d17-n2">Terms shown</label>
      <input type="range" id="d17-n2" min="3" max="40" step="1" value="12">
    </div>
  </div>

  <canvas class="plot" id="d17-closer"></canvas>
  <div class="readout" id="d17-closer-out"></div>

  <p>For all three targets the distance decreases at every step. Monotonically, forever. If "approaches" meant "gets
    closer each step," then \(\frac1n\) would approach \(0\), \(-1\), and \(-1000\) simultaneously &mdash; and a
    sequence with three different limits is not a useful notion of limit.</p>

  <p>What separates \(0\) from the others is not the <em>direction</em> of the distances but their <em>destination</em>.
    Only for \(L = 0\) do those bars get below every positive number you name. That is precisely what the
    \(\varepsilon\) in the definition is for: it is a challenge the distances have to beat, and \(-1\) cannot beat
    \(\varepsilon = 0.5\).</p>

  <p>So the definition's strange shape isn't perversity. Every clause is there to exclude something that would
    otherwise sneak in.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Scrapwork, and the proof that comes out of it</h2>

  <p>Your reading is emphatic that an \(\varepsilon\)&ndash;\(N\) proof has exactly three parts, and that the work of
    <em>finding</em> \(N\) is not one of them:</p>

  <ol>
    <li>provide the challenge of a distance \(\varepsilon &gt; 0\),</li>
    <li>identify a real number \(N\),</li>
    <li>show that this \(N\) works for this given \(\varepsilon\).</li>
  </ol>

  <p>This trips people up, because the finished proof produces \(N\) out of nowhere. Here is the reading's own Example
    6.1.5, with the hidden half made visible.</p>

  <p><strong>Claim.</strong> \(\displaystyle\lim_{n\to\infty}\frac{n+4}{n^2+1} = 0\).</p>

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the scrapwork and the proof</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Scrapwork 1. Start from what you want, and make it bigger.</div>
        <div class="sstep-body">
          <p>We need \(\left|\frac{n+4}{n^2+1}\right| &lt; \varepsilon\). Solving that inequality exactly would be
            miserable, so don't. <strong>Replace the expression by something larger and simpler</strong>, and make the
            larger thing small instead.</p>
          <p>Dropping the \(+1\) from the denominator makes the fraction bigger:</p>
          \[ \frac{n+4}{n^2+1} &lt; \frac{n+4}{n^2} \]
          <p>This is the single most important habit in the chapter. You are not solving for \(n\); you are bounding.
          </p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Scrapwork 2. Simplify the numerator too &mdash; at a price.</div>
        <div class="sstep-body">
          <p>If \(n &gt; 4\), then \(n + 4 &lt; n + n = 2n\). So, <em>provided \(n &gt; 4\)</em>,</p>
          \[ \frac{n+4}{n^2+1} &lt; \frac{n+4}{n^2} &lt; \frac{2n}{n^2} = \frac{2}{n} \]
          <p>Note the price: this bound is only valid once \(n &gt; 4\). Conditions like this accumulate, and you have
            to carry them.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Scrapwork 3. Now the inequality is easy &mdash; and two conditions must hold at
          once.</div>
        <div class="sstep-body">
          <p>\(\frac{2}{n} &lt; \varepsilon\) exactly when \(n &gt; \frac{2}{\varepsilon}\). So we need both</p>
          \[ n &gt; 4 \qquad\text{and}\qquad n &gt; \frac{2}{\varepsilon} \]
          <p>Both hold as soon as \(n\) exceeds the larger of the two, so take \(N = \max\left(4,
            \frac{2}{\varepsilon}\right)\).</p>
          <p>The \(\max\) is not a trick; it's the natural way to satisfy several conditions at once, and it will
            appear constantly from here on.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">The formal proof &mdash; notice what has vanished.</div>
        <div class="sstep-body">
          <p><em>Proof.</em> Let \(\varepsilon &gt; 0\). Let \(N = \max\left(4, \frac{2}{\varepsilon}\right)\). If
            \(n &gt; N\), then \(n &gt; 4\) and \(n &gt; \frac{2}{\varepsilon}\), so \(\frac{2}{n} &lt; \varepsilon\).
            Therefore</p>
          \[ \left|\frac{n+4}{n^2+1}\right| = \frac{n+4}{n^2+1} &lt; \frac{n+4}{n^2} &lt; \frac{2n}{n^2} =
          \frac{2}{n} &lt; \varepsilon \]
          <p>Hence \(\lim_{n\to\infty}\frac{n+4}{n^2+1} = 0\). \(\blacksquare\)</p>
          <p>Four lines. Every trace of the search is gone &mdash; \(N\) simply appears, fully formed. Your reading:
            "the scrapwork is not <strong>explicitly</strong> a part of the formal proof. However, if you look
            carefully, you can always find the scrapwork in the formal proof." Read that chain of inequalities
            backwards and the whole search is there.</p>
          <p>This is a genuine convention of the subject, and it is worth being annoyed about once and then accepting.
            A proof is a <em>verification</em>, not a <em>narrative of discovery</em>. Your job when reading one is to
            reconstruct the scrapwork; your job when writing one is to leave it out.</p>
        </div>
      </li>

    </ol>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>A proof that looks right</h2>

  <p>Here is an attempt at proving \(\lim_{n\to\infty}\frac1n = 0\). It reaches a true conclusion, and every individual
    sentence sounds reasonable.</p>

  <p><strong>Click the line that breaks the definition.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Let \(\varepsilon &gt; 0\) be given.</button>
      <button class="fline" type="button">Since \(\frac1n \to 0\) intuitively, we can find a value of \(n\) large
        enough that \(\frac1n &lt; \varepsilon\).</button>
      <button class="fline" type="button">Let \(N = n\).</button>
      <button class="fline" type="button">Then whenever \(n &gt; N\) we have \(\frac1n &lt; \frac1N &lt;
        \varepsilon\).</button>
      <button class="fline" type="button">Hence \(\lim_{n\to\infty}\frac1n = 0\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct, and it's the right way to start.</strong> Every \(\varepsilon\)&ndash;\(N\) proof opens by
        accepting an arbitrary challenge. "Given" means we know nothing about \(\varepsilon\) except that it is
        positive &mdash; we may not assume it is small, or rational, or anything else.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Sloppy, but survivable.</strong> Appealing to intuition mid-proof is bad form, and this could be made
        precise via the Archimedean Property from Day 4 &mdash; which is exactly what guarantees such an \(n\) exists.
        The fatal problem is what the <em>next</em> line does with this \(n\).</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>That's it, and it's the most common error in the chapter.</strong></p>
      <p>Look at what \(n\) is doing in this argument. In the definition, \(n\) is a <em>bound</em> variable: the
        statement is "for all \(n &gt; N\), \(|s_n| &lt; \varepsilon\)." It ranges over infinitely many values. It is
        not a particular number you get to name and keep.</p>
      <p>Line (2) picked out one specific \(n\). Line (3) then defines \(N\) to be that \(n\) &mdash; so \(N\) depends
        on \(n\). But the whole content of the definition is that \(N\) is chosen <strong>first</strong>, depending
        only on \(\varepsilon\), and must then work for <em>every</em> \(n\) past it. An \(N\) that depends on \(n\) is
        not an \(N\) at all.</p>
      <p>Line (4) then quietly reuses the letter \(n\) with a different meaning, which is what disguises the
        circularity. Rename the one from line (2) as \(n_0\) and the argument reads: "there is an \(n_0\) with
        \(\frac{1}{n_0} &lt; \varepsilon\); let \(N = n_0\); then for \(n &gt; N\)..." &mdash; which is actually fine!
        The proof is repairable, and the repair is entirely a matter of not reusing a letter.</p>
      <p>Order of dependence is the whole subject here: \(\varepsilon\) is given, then \(N\) is chosen knowing
        \(\varepsilon\), then \(n\) ranges over everything past \(N\). Each may depend only on what came before.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>The inequality is true; the trouble is what \(N\) means by now.</strong> \(\frac1n &lt; \frac1N\) for
        \(n &gt; N\) is correct. But \(N\) was defined in terms of \(n\) on the previous line, so this line is using
        \(n\) in two incompatible ways at once. Go back to (3).</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>A true statement.</strong> The reading proves it in one line: given \(\varepsilon\), take
        \(N = \frac{1}{\varepsilon}\); then \(n &gt; N\) gives \(\left|\frac1n\right| &lt; \varepsilon\). Notice that
        \(N\) there depends on \(\varepsilon\) alone &mdash; no \(n\) anywhere &mdash; which is exactly what the
        argument above failed to do.</p>
      <p>A conclusion being true tells you nothing about whether the argument for it was valid. Those are separate
        questions, and this course cares about the second one.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Four questions on the definition</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Why does the definition use \(|s_n| &lt; \varepsilon\) rather than \(s_n &lt; \varepsilon\)?</p>
    <button class="mc-opt" type="button" data-key="a">Convention &mdash; either works.</button>
    <button class="mc-opt" type="button" data-key="b">Because we need the <em>distance</em> to \(0\) to be small;
      without the absolute value you could "prove" \(\lim(-n) = 0\).</button>
    <button class="mc-opt" type="button" data-key="c">To handle sequences that aren't defined for small \(n\).</button>
    <div class="mc-fb" data-key="a">They differ enormously, and your reading gives the counterexample.</div>
    <div class="mc-fb" data-key="b">Correct. \(-n\) is less than every positive \(\varepsilon\) for every \(n\), so
      without absolute values the sequence \(-1, -2, -3, \ldots\) would satisfy the definition of converging to \(0\).
      The absolute value is what makes it a statement about distance rather than about being small.</div>
    <div class="mc-fb" data-key="c">Domain issues aren't what's at stake.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">If \(N\) works for a given \(\varepsilon\), what about \(M &gt; N\)?</p>
    <button class="mc-opt" type="button" data-key="a">It might fail &mdash; larger \(N\) is a stronger claim.</button>
    <button class="mc-opt" type="button" data-key="b">Only if \(M\) is an integer.</button>
    <button class="mc-opt" type="button" data-key="c">It also works, since \(n &gt; M\) implies \(n &gt; N\).</button>
    <div class="mc-fb" data-key="a">Backwards. A larger \(N\) is a <em>weaker</em> claim &mdash; you're promising good
      behaviour later, which is easier.</div>
    <div class="mc-fb" data-key="b">The definition says "a real number \(N\)" &mdash; integrality is never required,
      which is why \(N = \frac{1}{\varepsilon}\) is a legitimate choice.</div>
    <div class="mc-fb" data-key="c">Correct &mdash; Note 4 in your reading. This is liberating in practice: you never
      need the <em>best</em> \(N\), just <em>an</em> \(N\). It's why crude bounds like \(\max(4,
      \frac{2}{\varepsilon})\) are perfectly acceptable.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">What is wrong with "\(\frac1n\) approaches \(0\)" as a definition?</p>
    <button class="mc-opt" type="button" data-key="a">"Approaches" only means getting clos<em>er</em>, which
      \(\frac1n\) also does to \(-1\) and \(-1000\).</button>
    <button class="mc-opt" type="button" data-key="b">It's false &mdash; \(\frac1n\) never reaches \(0\).</button>
    <button class="mc-opt" type="button" data-key="c">Nothing; it's a fine definition.</button>
    <div class="mc-fb" data-key="a">Correct, and it's the whole reason for the machinery. A definition that a single
      sequence satisfies with infinitely many different limits is useless. The \(\varepsilon\) is what upgrades
      "closer" to "close."</div>
    <div class="mc-fb" data-key="b">Reaching \(0\) is not required and never was &mdash; the definition asks for terms
      to get within every tolerance, not to arrive.</div>
    <div class="mc-fb" data-key="c">Then \(\frac1n\) would approach \(-1000\) too, since the distances to \(-1000\)
      decrease at every step. Try it in the second widget.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">Why isn't the scrapwork part of the formal proof?</p>
    <button class="mc-opt" type="button" data-key="a">Because it's usually wrong.</button>
    <button class="mc-opt" type="button" data-key="b">Because a proof only has to <em>verify</em> that the chosen
      \(N\) works, not explain how it was found.</button>
    <button class="mc-opt" type="button" data-key="c">Because it would make proofs too long.</button>
    <div class="mc-fb" data-key="a">Scrapwork is usually right; it just isn't in the logical form a proof needs.
      Working backwards from what you want is fine for searching and invalid as an argument.</div>
    <div class="mc-fb" data-key="b">Correct. The proof's obligation is: here is \(N\), and here is why every \(n &gt;
      N\) satisfies the inequality. How you found \(N\) is irrelevant to whether it works &mdash; you could have
      guessed it. That's why \(N\) can appear from nowhere without the proof being incomplete.</div>
    <div class="mc-fb" data-key="c">Length is a side effect, not the reason.</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The definition never mentions the sequence "getting smaller" or "approaching infinity." Could a sequence
      converge to \(0\) while <em>increasing</em> infinitely often? Try to build one.</li>
    <li>In the game, the adversary moves first and you respond. What would change if you had to name \(N\) before
      seeing \(\varepsilon\)? Which sequences would still qualify?</li>
    <li>The reading proves \(\lim \frac{\sin n}{n} = 0\) using \(N = \frac{1}{\varepsilon}\) &mdash; the same \(N\) as
      for \(\frac1n\), with no attention to how \(\sin n\) behaves. Why is that legitimate, and what does it suggest
      about how much you need to know about a sequence to prove it converges?</li>
    <li>Your reading says this definition "was developed to address the foundational issues," not to help compute
      limits. Given that you still need intuition to guess the limit before you can verify it, what exactly does the
      definition buy?</li>
  </ol>
</div>

<script>
  (function () {
    var SEQS = [
      { label: '1/n', f: function (n) { return 1 / n; }, L: 0 },
      { label: 'sin(n)/n', f: function (n) { return Math.sin(n) / n; }, L: 0 },
      { label: '(n+4)/(n²+1)', f: function (n) { return (n + 4) / (n * n + 1); }, L: 0 },
      { label: '1/√n', f: function (n) { return 1 / Math.sqrt(n); }, L: 0 },
      { label: '(0.9)^n', f: function (n) { return Math.pow(0.9, n); }, L: 0 },
      { label: 'n/(n+100)', f: function (n) { return n / (n + 100); }, L: 1 },
      { label: '2 + (−1)^n / n', f: function (n) { return 2 + Math.pow(-1, n) / n; }, L: 2 },
      { label: '1 + (−1)^n   (diverges)', f: function (n) { return 1 + Math.pow(-1, n); }, L: 0 },
      { label: 'sin(n)   (diverges)', f: function (n) { return Math.sin(n); }, L: 0 }
    ];

    var sel = document.getElementById('d17-seq'),
      LIn = document.getElementById('d17-L'),
      epsIn = document.getElementById('d17-eps'),
      canvas = document.getElementById('d17-canvas'),
      out = document.getElementById('d17-out');

    SEQS.forEach(function (s, i) {
      var o = document.createElement('option');
      o.value = String(i); o.textContent = s.label;
      sel.appendChild(o);
    });

    var NTERMS = 260;

    function draw() {
      var seq = SEQS[+sel.value];
      var L = parseFloat(LIn.value);
      if (!isFinite(L)) L = 0;
      var eps = Math.pow(10, +epsIn.value);

      var vals = [];
      for (var n = 1; n <= NTERMS; n++) vals.push(seq.f(n));

      // The smallest N that works, if there is one: scan back from the end and
      // find the last term that violates the band.
      var lastBad = 0;
      for (var i = 0; i < NTERMS; i++) if (Math.abs(vals[i] - L) >= eps) lastBad = i + 1;
      // "No N within our window" if a violation occurs late in the visible range.
      var works = lastBad < NTERMS * 0.75;
      var N = lastBad;

      var d = M411.hidpi(canvas, 330), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 54, padR = 20, padT = 20, padB = 34;

      var vlo = Math.min.apply(null, vals.concat([L - eps * 1.6]));
      var vhi = Math.max.apply(null, vals.concat([L + eps * 1.6]));
      var span = Math.max(vhi - vlo, 1e-6), mid = (vhi + vlo) / 2;
      vlo = mid - span * 0.62; vhi = mid + span * 0.62;

      function X(n) { return padL + (n - 1) / (NTERMS - 1) * (W - padL - padR); }
      function Y(v) { return padT + (vhi - v) / (vhi - vlo) * (H - padT - padB); }

      // the epsilon band
      ctx.fillStyle = 'rgba(0,133,82,0.13)';
      ctx.fillRect(padL, Y(L + eps), W - padL - padR, Math.max(Y(L - eps) - Y(L + eps), 1));
      ctx.strokeStyle = M411.colors.scaffold; ctx.lineWidth = 1.4; ctx.setLineDash([5, 4]);
      [L + eps, L - eps].forEach(function (v) {
        ctx.beginPath(); ctx.moveTo(padL, Y(v)); ctx.lineTo(W - padR, Y(v)); ctx.stroke();
      });
      ctx.setLineDash([]);

      // the claimed limit
      ctx.strokeStyle = M411.colors.scaffold; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(padL, Y(L)); ctx.lineTo(W - padR, Y(L)); ctx.stroke();
      ctx.fillStyle = M411.colors.scaffold; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText('L = ' + L, padL + 4, Y(L) - 6);
      ctx.font = '11px sans-serif';
      ctx.fillText('L + ε', W - padR - 40, Y(L + eps) - 5);

      // the N marker
      if (works && N > 0) {
        ctx.strokeStyle = M411.colors.check; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(X(N), padT); ctx.lineTo(X(N), H - padB); ctx.stroke();
        ctx.fillStyle = M411.colors.check; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'left';
        ctx.fillText('N = ' + N, X(N) + 5, padT + 12);
      }

      // the terms
      vals.forEach(function (v, i) {
        var n = i + 1, inBand = Math.abs(v - L) < eps;
        ctx.fillStyle = inBand ? 'rgba(0,133,82,0.85)' : '#d9534f';
        ctx.beginPath(); ctx.arc(X(n), Y(v), n < 60 ? 2.6 : 1.7, 0, 2 * Math.PI); ctx.fill();
      });

      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('n = 1 … ' + NTERMS, (padL + W - padR) / 2, H - 9);

      var msg;
      if (works && N === 0) {
        msg = '<p><strong style="color:var(--a411-scaffold)">Every term is already inside the band.</strong> ' +
          'Any \\(N\\) at all works for this \\(\\varepsilon\\) &mdash; the challenge was too easy. Tighten it.</p>';
      } else if (works) {
        msg = '<p><strong style="color:var(--a411-scaffold)">Challenge met.</strong> Taking \\(N = ' + N +
          '\\), every term with \\(n &gt; ' + N + '\\) satisfies \\(|s_n - ' + L + '| &lt; \\varepsilon\\). ' +
          'The last term to break the band was \\(n = ' + N + '\\).</p>' +
          '<p>Tighten \\(\\varepsilon\\) and watch \\(N\\) move right. The claim \\(\\lim s_n = ' + L +
          '\\) survives as long as an \\(N\\) exists for <em>every</em> challenge &mdash; however far right it has ' +
          'to go.</p>';
      } else {
        msg = '<p><strong style="color:#d9534f">Challenge not met.</strong> Terms are still escaping the band far out ' +
          'in the sequence &mdash; the last violation in view is at \\(n = ' + lastBad + '\\), and they keep ' +
          'coming. No \\(N\\) can work for this \\(\\varepsilon\\).</p>' +
          '<p>One failed \\(\\varepsilon\\) is enough to destroy the claim \\(\\lim s_n = ' + L + '\\). ' +
          'The definition demands <em>every</em> \\(\\varepsilon\\), so a single counterexample settles it.</p>';
      }

      out.innerHTML = '<p>\\(\\varepsilon = ' + eps.toFixed(5) + '\\), claimed limit \\(L = ' + L + '\\).</p>' + msg;
      M411.typeset(out);
    }

    sel.addEventListener('change', function () {
      LIn.value = SEQS[+sel.value].L;
      draw();
    });
    LIn.addEventListener('input', draw);
    epsIn.addEventListener('input', draw);

    /* ---------------- closer vs close ---------------- */
    var n2In = document.getElementById('d17-n2'),
      cCan = document.getElementById('d17-closer'),
      cOut = document.getElementById('d17-closer-out');

    var TARGETS = [
      { L: 0, color: '#008552' },
      { L: -1, color: '#009CDE' },
      { L: -1000, color: '#8B5CF6' }
    ];

    function drawCloser() {
      var N = +n2In.value;
      var d = M411.hidpi(cCan, 280), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);
      var padL = 58, padR = 20, padT = 24, padB = 46;

      // distances are wildly different in scale, so normalise each row to its own first value
      var rowH = (H - padT - padB) / 3;

      TARGETS.forEach(function (t, r) {
        var d0 = Math.abs(1 - t.L);
        var y0 = padT + r * rowH + rowH - 12;
        var bw = (W - padL - padR) / N;

        for (var n = 1; n <= N; n++) {
          var dist = Math.abs(1 / n - t.L);
          var h = (dist / d0) * (rowH - 20);
          ctx.fillStyle = t.color;
          ctx.globalAlpha = 0.75;
          ctx.fillRect(padL + (n - 1) * bw + 1, y0 - h, Math.max(bw - 2, 1), h);
        }
        ctx.globalAlpha = 1;

        ctx.fillStyle = t.color; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText('L = ' + t.L, padL - 8, y0 - 2);

        // does the distance ever get below 0.5?
        var minDist = Math.abs(1 / N - t.L);
        ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
        ctx.fillStyle = minDist < 0.5 ? M411.colors.scaffold : '#d9534f';
        ctx.fillText(minDist < 0.5 ? 'gets within 0.5  ✓' : 'never within 0.5  ✗', W - padR - 132, y0 - rowH + 24);
      });

      ctx.fillStyle = M411.colors.muted; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('bar height = |1/n − L|, each row scaled to its own first bar', (padL + W - padR) / 2, H - 12);

      var rows = TARGETS.map(function (t) {
        return '\\(|1/' + N + ' - (' + t.L + ')| = ' + Math.abs(1 / N - t.L).toFixed(4) + '\\)';
      });

      cOut.innerHTML =
        '<p>After ' + N + ' terms: ' + rows.join(', &nbsp;') + '</p>' +
        '<p>All three rows shrink at every step &mdash; \\(\\frac1n\\) gets clos<em>er</em> to all three targets, ' +
        'forever. But only the first ever gets <em>close</em>: the distance to \\(-1\\) is heading for \\(1\\), and ' +
        'the distance to \\(-1000\\) is heading for \\(1000\\). Decreasing is not the same as decreasing ' +
        '<em>to zero</em>.</p>';
      M411.typeset(cOut);
    }
    n2In.addEventListener('input', drawCloser);

    M411.onResize(function () { draw(); drawCloser(); });
    draw();
    drawCloser();
  })();
</script>
