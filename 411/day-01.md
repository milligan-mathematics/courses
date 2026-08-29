---
layout: day
title: "MATH 411 Day 1: Depressing the Cubic"
day: 1
chapter_number: 1
chapter: "Prologue"
day_title: "Depressing the Cubic"
blurb: "Three lessons disguised as a history of solving equations: you don't know what a number is, you have to fill in the skipped steps yourself, and every problem you solve becomes a tool."
reading: "Lessons One and Two of the Prologue"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Lesson One: what is a number?</h2>

  <p>Your reading was serious about the pad of paper. If you haven't yet written down your own answer to "what is a
    number?", do that now &mdash; before you touch anything below. The exercise only works if you commit to an answer
    first.</p>

  <p>Done? Then here is the list. <strong>Click every object your definition covers.</strong></p>

  <div id="d1-chips" class="chip-grid"></div>

  <div class="readout" id="d1-count"></div>

  <div class="ctl-row">
    <button class="btn411" id="d1-reveal">Now tell me what each one is</button>
  </div>

  <div id="d1-notes"></div>

  <p>The point of the exercise isn't that your definition was bad. It's that <em>every</em> definition anyone writes
    down in thirty seconds leaks &mdash; and that mathematicians spent centuries arguing about most of the entries on
    that list. Zero and the negatives were resisted for longer than you'd guess. \(\sqrt{-1}\) was forced on people
    against their will, by an argument you'll meet further down this page.</p>

  <p>As the reading says: not knowing is acceptable. Sometimes it's even encouraged. You will not finish this course
    with a tidy definition of "number," but you will finish it understanding \(\mathbb{R}\) far better than you do
    now.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Lesson Two: the step the book skipped</h2>

  <p>The reading derives the Quadratic Formula and then, with some deliberate needling, asks whether you actually
    verified the substitution \(x = y - \frac{b}{2a}\). This is that computation, one step at a time.</p>

  <p><strong>Do it on paper first.</strong> That is the entire lesson of the day, and clicking through these boxes
    instead of writing is exactly the trap the reading is warning you about. Use these to check yourself, not to skip
    yourself.</p>

  <p>We start where the reading starts, having already divided through by \(a \ne 0\):</p>

  \[ x^2 + \frac{b}{a}x = -\frac{c}{a} \]

  <div class="proof-scaffold">
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole computation</button>
    <ol class="scaffold-steps">

      <li class="sstep">
        <div class="sstep-prompt">Step 1. Substitute \(x = y - \frac{b}{2a}\) and expand the square.</div>
        <div class="sstep-body">
          \[ \left(y - \frac{b}{2a}\right)^2 + \frac{b}{a}\left(y - \frac{b}{2a}\right) = -\frac{c}{a} \]
          \[ y^2 - \frac{b}{a}y + \frac{b^2}{4a^2} + \frac{b}{a}y - \frac{b^2}{2a^2} = -\frac{c}{a} \]
          <p>Nothing clever &mdash; just \((u-v)^2 = u^2 - 2uv + v^2\) and distributing.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 2. Something cancels. What, and why is that the whole point?</div>
        <div class="sstep-body">
          <p>The two \(\frac{b}{a}y\) terms cancel &mdash; one from squaring, one from the linear term &mdash; leaving
            no \(y\) term at all:</p>
          \[ y^2 + \frac{b^2}{4a^2} - \frac{b^2}{2a^2} = -\frac{c}{a} \qquad\Longrightarrow\qquad y^2 -
          \frac{b^2}{4a^2} = -\frac{c}{a} \]
          <p>That cancellation is the reason \(\frac{b}{2a}\) was the right shift and not some other number. The
            substitution was engineered to kill the linear term, and everything else is bookkeeping.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 3. Solve for \(y\).</div>
        <div class="sstep-body">
          \[ y^2 = \frac{b^2}{4a^2} - \frac{c}{a} = \frac{b^2 - 4ac}{4a^2} \qquad\Longrightarrow\qquad y = \frac{\pm
          \sqrt{b^2-4ac}}{2a} \]
          <p>Here is where the equation became easy: with no linear term, "solve" means "take a square root." That is
            the only thing that changed, and it changed everything.</p>
        </div>
      </li>

      <li class="sstep">
        <div class="sstep-prompt">Step 4. Undo the substitution.</div>
        <div class="sstep-body">
          <p>We solved for \(y\), but the question was about \(x\). Since \(x = y - \frac{b}{2a}\),</p>
          \[ x = \frac{\pm\sqrt{b^2-4ac}}{2a} - \frac{b}{2a} = \frac{-b \pm \sqrt{b^2-4ac}}{2a} \]
          <p>Forgetting this last step is the single most common way to lose a substitution problem. You answered a
            question, but not the one that was asked.</p>
        </div>
      </li>

    </ol>
  </div>

  <p>The reading's point is not that this was hard. It's that it was <em>routine</em>, and that routine is not the same
    as obvious, and that the only way to know which steps are genuinely routine for you is to try them.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Watch the shift kill the middle term</h2>

  <p>Substituting \(x = y - M\) slides the graph sideways. For exactly one value of \(M\), the shifted curve is
    symmetric about the vertical axis &mdash; and a parabola symmetric about the \(y\)-axis has no linear term at all.
    Drag \(M\) and watch the coefficient.</p>

  <div class="ctl-row">
    <div class="ctl">
      <label for="d1-b">Coefficient \(b\) in \(x^2 + bx + c\)</label>
      <input type="range" id="d1-b" min="-6" max="6" step="0.2" value="3">
    </div>
    <div class="ctl">
      <label for="d1-M">Shift \(M\)</label>
      <input type="range" id="d1-M" min="-4" max="4" step="0.05" value="0">
    </div>
    <div class="ctl">
      <label>&nbsp;</label>
      <button class="btn411 ghost" id="d1-snap">Snap to the depressing shift</button>
    </div>
  </div>

  <canvas class="plot" id="d1-canvas"></canvas>
  <div class="readout" id="d1-quad"></div>

  <p>Now carry the idea forward, which is what your Canvas problem for today asks you to do. A general cubic has an
    \(x^3\), an \(x^2\), an \(x\) and a constant. Ferrari's move was to find a shift that annihilates the \(x^2\) term,
    turning it into the <em>depressed cubic</em> \(y^3 + py + q = 0\) &mdash; which Tartaglia already knew how to
    solve.</p>

  <p>That is the shape of an enormous amount of mathematics: you cannot solve the problem in front of you, so you
    transform it into one somebody has already solved. As the reading puts it, <em>every problem solved is a new theorem
    which then becomes a tool for later use.</em> Depressing a cubic would have been worthless without Tartaglia's
    solution waiting on the other side.</p>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>The calculation that forced \(\sqrt{-1}\) into existence</h2>

  <p>Here is the Cubic Formula being applied to \(x^3 = 15x + 4\) in the sixteenth century. You can check by hand in
    about five seconds that \(x = 4\) is a solution: \(64 = 60 + 4\). The equation has an obvious, whole-number,
    thoroughly real answer.</p>

  <p><strong>Click the line that convinced Cardano's contemporaries the method had broken down.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">For \(x^3 = px + q\), Cardano's formula gives \(x = \sqrt[3]{\frac{q}{2} +
        \sqrt{\left(\frac{q}{2}\right)^2 - \left(\frac{p}{3}\right)^3}} + \sqrt[3]{\frac{q}{2} -
        \sqrt{\left(\frac{q}{2}\right)^2 - \left(\frac{p}{3}\right)^3}}\).</button>
      <button class="fline" type="button">Here \(p = 15\) and \(q = 4\), so \(\left(\frac{q}{2}\right)^2 = 4\) and
        \(\left(\frac{p}{3}\right)^3 = 125\).</button>
      <button class="fline" type="button">So the quantity under the inner square root is \(4 - 125 = -121\), and the
        formula reads \(x = \sqrt[3]{2 + \sqrt{-121}} + \sqrt[3]{2 - \sqrt{-121}}\).</button>
      <button class="fline" type="button">Writing \(\sqrt{-121} = 11\sqrt{-1}\), we need the cube roots of \(2 \pm
        11\sqrt{-1}\).</button>
      <button class="fline" type="button">Since \((2 \pm \sqrt{-1})^3 = 2 \pm 11\sqrt{-1}\), the formula gives \(x = (2
        + \sqrt{-1}) + (2 - \sqrt{-1}) = 4\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Not it.</strong> This is Cardano's formula, correctly stated. It is the tool that Tartaglia's solution
        of the depressed cubic made possible &mdash; exactly the "solved problem becomes a tool" pattern from your
        reading.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Not it.</strong> Just arithmetic: \(4/2 = 2\), \(2^2 = 4\), \(15/3 = 5\), \(5^3 = 125\).</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>That's the line &mdash; and here's the twist: it isn't actually wrong.</strong></p>
      <p>To a sixteenth-century mathematician this was the end of the road. A square root of a negative number was not a
        number; it was a signal that you had asked for something impossible, the way \(\sqrt{-1}\) signals "no real
        solution" for a quadratic. But this cubic <em>does</em> have a solution, and an embarrassingly nice one. The
        formula was correct, the equation was solvable, and the road between them ran through territory nobody believed
        existed.</p>
      <p>Rafael Bombelli's move, around 1572, was to carry on calculating anyway &mdash; to treat \(\sqrt{-1}\) as
        something you can add and multiply and see whether the impossible quantities cancel at the end. Click line (5)
        to watch it happen.</p>
      <p>This is why complex numbers entered mathematics. Not through quadratics &mdash; when a quadratic gave
        \(\sqrt{-1}\) you could shrug and say "no solution." A <em>cubic</em> left no such escape, because the answer
        was sitting right there in plain sight. And note where that puts \(\sqrt{-1}\) on the list at the top of this
        page: it earned its place on the list by being <em>useful</em>, long before anyone could say what it was.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>Not it &mdash; though this is Bombelli's leap of faith.</strong> He decided to keep going and see what
        happened. Click line (3) for why that took nerve, and line (5) for the payoff.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>Not it &mdash; this is the punchline, and you can verify it.</strong> Expand \((2 + \sqrt{-1})^3\)
        treating \(\sqrt{-1}\) as an ordinary symbol with \((\sqrt{-1})^2 = -1\):</p>
      \[ (2+i)^3 = 8 + 12i + 6i^2 + i^3 = 8 + 12i - 6 - i = 2 + 11i \]
      <p>The impossible parts cancel and a perfectly ordinary \(4\) drops out the far end. Do this on the pad of paper.
        It is one of the most persuasive computations in the history of mathematics &mdash; an argument that something
        must exist because using it produces true statements about things that definitely exist.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Did you catch what the Prologue was actually doing?</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Why does the book leave out routine computations?</p>
    <button class="mc-opt" type="button" data-key="a">To save space, since they're unimportant.</button>
    <button class="mc-opt" type="button" data-key="b">Because a reader who can't supply them shouldn't be taking the
      course.</button>
    <button class="mc-opt" type="button" data-key="c">Because supplying them yourself is where the understanding comes
      from.</button>
    <div class="mc-fb" data-key="a">The reading rules this out explicitly: "If they were truly unimportant we would
      leave them out entirely." Length is a side benefit, not the reason.</div>
    <div class="mc-fb" data-key="b">The opposite, in fact. The reading goes out of its way to say that being stuck is
      normal, that it happens to mathematicians, and that the right response is to get help rather than to treat it as
      failure.</div>
    <div class="mc-fb" data-key="c">Correct. "Filling in the details yourself gives you a little better insight into the
      computations. If we'd filled them in for you we would have robbed you of that insight." The gaps are the
      pedagogy.</div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">What does it mean to "depress" a polynomial?</p>
    <button class="mc-opt" type="button" data-key="a">To factor it completely.</button>
    <button class="mc-opt" type="button" data-key="b">To substitute a shift that eliminates the second-highest-degree
      term.</button>
    <button class="mc-opt" type="button" data-key="c">To reduce its degree by one.</button>
    <div class="mc-fb" data-key="a">No &mdash; factoring is usually the goal, not the technique. Depressing is a change
      of variable that makes factoring reachable.</div>
    <div class="mc-fb" data-key="b">Correct. A general cubic \(ax^3+bx^2+cx+d\) becomes \(y^3+py+q\): the degree is
      unchanged, but the \(x^2\) term is gone. Same idea as \(x = y - \frac{b}{2a}\) removing the linear term from a
      quadratic.</div>
    <div class="mc-fb" data-key="c">The degree stays exactly the same. A depressed cubic is still a cubic &mdash; it
      just has a hole where its square term used to be.</div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Ferrari could depress a quartic and solve it. Why did the same program fail for the quintic?</p>
    <button class="mc-opt" type="button" data-key="a">No such formula exists &mdash; and proving that is a story for
      abstract algebra.</button>
    <button class="mc-opt" type="button" data-key="b">The formula exists but is too long to write down.</button>
    <button class="mc-opt" type="button" data-key="c">Nobody has managed it yet.</button>
    <div class="mc-fb" data-key="a">Correct, and it's a genuinely different kind of answer than "we haven't found it."
      Abel and Galois proved in the nineteenth century that no formula in radicals can exist for the general quintic.
      The reading is right that this belongs in algebra, not analysis &mdash; but notice the shape of the result: a
      proof that a certain kind of solution is <em>impossible</em>.</div>
    <div class="mc-fb" data-key="b">Length isn't the obstacle. The obstacle is that no such formula exists at all.
    </div>
    <div class="mc-fb" data-key="c">It isn't an open problem &mdash; it was settled around 1824, and settled in the
      negative.</div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">"A problem, once solved, becomes a tool." Which is the reading's own example?</p>
    <button class="mc-opt" type="button" data-key="a">The Quadratic Formula made the Fundamental Theorem of Algebra
      possible.</button>
    <button class="mc-opt" type="button" data-key="b">Depressing a cubic was valuable on its own.</button>
    <button class="mc-opt" type="button" data-key="c">Depressing a cubic was worthless until Tartaglia's solution of the
      depressed cubic existed to receive it.</button>
    <div class="mc-fb" data-key="a">Not the example given, and not the historical order either.</div>
    <div class="mc-fb" data-key="b">This inverts the point. The reading is explicit: "Depressing a cubic would have been
      utterly useless had not Tartaglia had a solution of the depressed cubic in hand."</div>
    <div class="mc-fb" data-key="c">Correct. The technique had value only because something was waiting to receive its
      output. That's worth remembering every time you finish a problem in this course: the question isn't just "did I
      get it," but "what is this now good for?"</div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Look again at what you wrote for "what is a number?" Which entries on the list did your definition exclude, and
      was the exclusion deliberate? Would you defend it now?</li>
    <li>Bombelli's calculation produces the right answer by passing through quantities he could not justify. Is that
      evidence that \(\sqrt{-1}\) exists, or only evidence that the bookkeeping is consistent? Try to say what the
      difference is.</li>
    <li>The substitution \(x = y - \frac{b}{2a}\) looks like a rabbit out of a hat. If you had never seen it, how might
      you have <em>found</em> it? (Look at what cancelled in Step 2 and work backwards.)</li>
    <li>The reading claims that if it filled in every detail it would rob you of insight. That's a strong claim about
      how learning works. Do you believe it? Has that matched your experience in previous math courses?</li>
    <li>Notice that \(\mathrm{d}x\) is on the list of numbers, sitting next to quaternions and matrices. Keep an eye on
      it &mdash; on Day 4 you'll find out exactly what's strange about it.</li>
  </ol>
</div>

<script>
  (function () {
    /* ---------------- Lesson One: the chips ---------------- */
    var ITEMS = [
      {
        tex: '1', note: 'The one nobody leaves out. Even so, "the counting numbers" took a long time to be ' +
          'separated from "the things being counted."'
      },
      {
        tex: '-1', note: 'Negative numbers were resisted into the seventeenth century. Cardano called them ' +
          '"fictitious"; others refused to accept an equation whose answer was negative, and would rearrange ' +
          'a problem to avoid one.'
      },
      {
        tex: '0', note: 'A placeholder in positional notation long before it was a number you could compute ' +
          'with. Treating "nothing" as a thing is a genuine conceptual leap, and it happened late.'
      },
      {
        tex: '\\frac{3}{5}', note: 'A ratio of two integers. Comfortable enough that the Greeks built a whole ' +
          'theory of proportion on it &mdash; and were badly shaken when they found lengths it could not measure.'
      },
      {
        tex: '\\sqrt{2}', note: 'Irrational: not the ratio of any two integers. You will see the proof on Day 3, ' +
          'and spend a good deal of this course dealing with the consequences.'
      },
      {
        tex: '\\sqrt{-1}', note: 'Forced into mathematics by the cubic, not the quadratic &mdash; see the ' +
          'Bombelli calculation further down this page.'
      },
      {
        tex: 'i^{\\,i}', note: 'Surprisingly, this is a <em>real</em> number: \\(i^i = e^{-\\pi/2} \\approx ' +
          '0.2079\\). (It has other values too, depending on which branch of the logarithm you take, and all of ' +
          'them are real.)'
      },
      {
        tex: 'e^{5i}', note: 'A point on the unit circle, at angle 5 radians. Euler\'s formula ' +
          '\\(e^{i\\theta} = \\cos\\theta + i\\sin\\theta\\) ties exponentials to rotation &mdash; you will ' +
          'derive it from power series on Day 10.'
      },
      {
        tex: '4+3i-2j+6k', note: 'A quaternion. Multiplication here is <em>not commutative</em>: \\(ij = k\\) ' +
          'but \\(ji = -k\\). If your definition of "number" assumed \\(xy = yx\\), this one broke it.'
      },
      {
        tex: '\\mathrm{d}x', note: 'Leibniz\'s infinitesimal: not zero, but smaller than every positive real ' +
          'number. Day 4 shows exactly which rule of arithmetic it violates.'
      },
      {
        tex: '\\begin{pmatrix}1 & 2\\\\-2 & 1\\end{pmatrix}', note: 'Matrices multiply non-commutatively, and ' +
          'some nonzero ones have no reciprocal at all. Yet they add, subtract and multiply enough like numbers ' +
          'to be worth the name.'
      }
    ];

    var grid = document.getElementById('d1-chips'),
      count = document.getElementById('d1-count'),
      notes = document.getElementById('d1-notes');
    var picked = new Array(ITEMS.length).fill(false);

    ITEMS.forEach(function (it, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.innerHTML = '\\(' + it.tex + '\\)';
      b.addEventListener('click', function () {
        picked[i] = !picked[i];
        b.classList.toggle('on', picked[i]);
        tally();
      });
      grid.appendChild(b);
    });

    function tally() {
      var n = picked.filter(Boolean).length;
      var msg;
      if (n === 0) msg = 'Nothing selected yet. Click the ones your written definition actually covers.';
      else if (n === ITEMS.length) msg = 'All eleven. That is a generous definition &mdash; but can you state ' +
        'the property they all share, in a sentence that would exclude, say, a triangle?';
      else msg = 'Your definition covers <strong>' + n + '</strong> of the ' + ITEMS.length + '. ' +
        'The interesting question is not the number &mdash; it is whether you can say <em>why</em> the ' +
        'excluded ones are excluded, in terms your definition actually contains.';
      count.innerHTML = '<p>' + msg + '</p>';
    }
    tally();

    document.getElementById('d1-reveal').addEventListener('click', function () {
      if (notes.childNodes.length) { notes.innerHTML = ''; this.textContent = 'Now tell me what each one is'; return; }
      var html = '<div class="notelist">';
      ITEMS.forEach(function (it, i) {
        html += '<div class="noteitem' + (picked[i] ? ' picked' : '') + '">' +
          '<div class="notesym">\\(' + it.tex + '\\)</div>' +
          '<div class="notetext">' + it.note + '</div></div>';
      });
      html += '</div>';
      notes.innerHTML = html;
      this.textContent = 'Hide these';
      M411.typeset(notes);
    });

    M411.typeset(grid);

    /* ---------------- The depressing shift on a quadratic ---------------- */
    var bIn = document.getElementById('d1-b'),
      mIn = document.getElementById('d1-M'),
      canvas = document.getElementById('d1-canvas'),
      out = document.getElementById('d1-quad');
    var C = 1;   // constant term, fixed - it plays no role in the cancellation

    function draw() {
      var b = +bIn.value, M = +mIn.value;
      var d = M411.hidpi(canvas, 300), ctx = d.ctx, W = d.w, H = d.h;
      ctx.clearRect(0, 0, W, H);

      var padL = 40, padR = 20, padT = 16, padB = 28;
      var xlo = -6, xhi = 6, ylo = -4, yhi = 12;
      function X(x) { return padL + (x - xlo) / (xhi - xlo) * (W - padL - padR); }
      function Y(y) { return padT + (yhi - y) / (yhi - ylo) * (H - padT - padB); }

      // grid + axes
      ctx.strokeStyle = M411.colors.grid; ctx.lineWidth = 1;
      for (var g = xlo; g <= xhi; g++) { ctx.beginPath(); ctx.moveTo(X(g), padT); ctx.lineTo(X(g), H - padB); ctx.stroke(); }
      for (var h = ylo; h <= yhi; h += 2) { ctx.beginPath(); ctx.moveTo(padL, Y(h)); ctx.lineTo(W - padR, Y(h)); ctx.stroke(); }
      ctx.strokeStyle = '#999'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(W - padR, Y(0)); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(X(0), padT); ctx.lineTo(X(0), H - padB); ctx.stroke();

      function curve(f, color, dash) {
        ctx.strokeStyle = color; ctx.lineWidth = 2.2; ctx.setLineDash(dash || []);
        ctx.beginPath();
        var started = false;
        for (var px = 0; px <= 400; px++) {
          var x = xlo + (xhi - xlo) * px / 400, y = f(x);
          if (y < ylo - 5 || y > yhi + 5) { started = false; continue; }
          started ? ctx.lineTo(X(x), Y(y)) : (ctx.moveTo(X(x), Y(y)), started = true);
        }
        ctx.stroke(); ctx.setLineDash([]);
      }

      // original p(x) and the shifted q(y) = p(y - M)
      curve(function (x) { return x * x + b * x + C; }, '#c9ccd1');
      curve(function (y) { var x = y - M; return x * x + b * x + C; }, M411.colors.explore);

      // vertex of the shifted curve
      var linear = b - 2 * M;
      var vy = -linear / 2;
      ctx.fillStyle = M411.colors.check;
      ctx.beginPath(); ctx.arc(X(vy), Y((vy - M) * (vy - M) + b * (vy - M) + C), 5, 0, 2 * Math.PI); ctx.fill();

      ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillStyle = '#9aa0a6'; ctx.fillText('original', X(xlo) + 6, padT + 14);
      ctx.fillStyle = M411.colors.explore; ctx.fillText('shifted by M', X(xlo) + 6, padT + 30);

      var nearly = Math.abs(linear) < 1e-9;
      out.innerHTML = '<p>Substituting \\(x = y - M\\) into \\(x^2 + ' + b.toFixed(1) + 'x + 1\\) gives</p>' +
        '<p class="big">\\( y^2 ' + (linear >= 0 ? '+' : '-') + ' ' + Math.abs(linear).toFixed(2) +
        '\\,y + \\text{(constant)} \\)</p>' +
        '<p>Coefficient of \\(y\\): \\(' + b.toFixed(1) + ' - 2M = ' + linear.toFixed(2) + '\\).' +
        (nearly
          ? ' <strong>Zero &mdash; the middle term is gone,</strong> and the orange vertex has landed on the ' +
          'vertical axis. From here the equation is solved by taking a square root.'
          : ' Not zero yet. Keep dragging until the orange vertex sits on the vertical axis.') + '</p>';
      M411.typeset(out);
    }

    bIn.addEventListener('input', draw);
    mIn.addEventListener('input', draw);
    document.getElementById('d1-snap').addEventListener('click', function () {
      mIn.value = (+bIn.value / 2).toFixed(2);
      draw();
    });
    M411.onResize(draw);
    draw();
  })();
</script>
