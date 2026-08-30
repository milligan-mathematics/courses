---
layout: day
course: 304
course_title: "MATH 304: Modern Geometry"
title: "MATH 304 Day 4: Polar Form, and Why Multiplication Turns Things"
day: 4
chapter_number: 2
chapter: "The Complex Plane"
day_title: "Polar Form, and Why Multiplication Turns Things"
blurb: "Yesterday multiplication by a fixed number visibly rotated and scaled the plane, and we couldn't say by how much. Polar form is the answer, and it turns out to be the only notation this course really needs."
reading: "Section 2.2, polar coordinates and \\(e^{i\\theta}\\) through Theorem 2.2.3"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>One point, two descriptions</h2>

  <p>Drag \(z\). The readout shows it both ways: Cartesian \(x + yi\), and polar \(re^{i\theta}\).</p>

  <canvas class="plot g304" id="d4-polar"></canvas>
  <div class="drag-hint">Drag \(z\).</div>
  <div class="readout cols" id="d4-polar-out"></div>

  <p>The green arc is \(\theta\), measured counterclockwise from the positive real axis; the orange segment is
    \(r = |z|\). The dashed legs are \(x = r\cos\theta\) and \(y = r\sin\theta\), which is the whole content of
    the conversion.</p>

  <p>Two things to be careful about, both of which will bite you at some point this semester:</p>

  <p><strong>The argument is not unique.</strong> Drag \(z\) all the way around and watch \(\theta\) come back
    to where it started. The angle \(\theta\) and the angle \(\theta + 2\pi\) name the same point, so
    "\(\arg(z)\)" is really a whole family of numbers differing by multiples of \(2\pi\). Your reading flags
    this when it says the equation \(\arg(zw) = \arg(z)+\arg(w)\) is "taken modulo \(2\pi\)". It is not a
    technicality &mdash; yesterday's \(\sqrt{-1}\cdot\sqrt{-1}\) disaster was entirely caused by pretending
    otherwise.</p>

  <p><strong>\(\arctan(y/x)\) is not \(\theta\).</strong> Park \(z\) in the second or third quadrant and check.
    The tangent can't tell \(\theta\) from \(\theta+\pi\), so the arctangent always hands back an angle in the
    right half-plane and you have to add \(\pi\) yourself. Your reading's own worked conversion of \(-3+4i\)
    does exactly this: it computes \(\tan^{-1}(4/3)\) and then writes \(\theta = \pi - \tan^{-1}(4/3)\),
    because the point is in the second quadrant.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Theorem 2.2.3, watched happening</h2>

  <p>Here is the theorem the whole section exists for:</p>

  \[ re^{i\theta}\cdot se^{i\beta} = (rs)\,e^{i(\theta+\beta)}. \]

  <p>Multiply the lengths, add the angles. Drag \(z\) and \(w\) and watch it work. The two angles are drawn as
    arcs; the product's angle is the two of them stacked.</p>

  <canvas class="plot g304" id="d4-mult"></canvas>
  <div class="drag-hint">Drag \(z\) or \(w\).</div>
  <div class="readout cols" id="d4-mult-out"></div>

  <p>Now go back and settle yesterday's open question. Multiplying every point of a shape by a fixed \(a\)
    rotates it by \(\arg(a)\) and scales it by \(|a|\). Both numbers were sitting right there in \(a\) the
    whole time; Cartesian form just hid them.</p>

  <p>Try these positions for \(w\) specifically:</p>

  <ul>
    <li><strong>\(w\) on the unit circle.</strong> \(s = 1\), so \(|zw| = |z|\) &mdash; a pure rotation. Every
      rotation of the plane about the origin is multiplication by a point of the unit circle, and nothing
      else. That single sentence is going to do a lot of work in Chapter 3.</li>
    <li><strong>\(w\) on the positive real axis.</strong> \(\beta = 0\), so nothing turns &mdash; a pure
      dilation.</li>
    <li><strong>\(w = z\).</strong> Then \(z^2\) has double the angle and squared modulus, which is why square
      roots halve angles, and why they come in pairs: adding \(2\pi\) to \(\theta\) before halving lands you
      \(\pi\) away.</li>
  </ul>

  <p>One more thing worth extracting, because it is the reason polar form is worth the trouble. In Cartesian
    form, the product \((x+yi)(s+ti) = (xs-yt)+(ys+xt)i\) is four multiplications and a sign you have to
    remember. In polar form it is "multiply, add." The arithmetic didn't get easier &mdash; the
    <em>geometry</em> became visible, and everything we do from here is geometry.</p>
</div>

<div class="act scaffold">
  <div class="act-type">Build the Argument</div>
  <h2>Is \(e^{i\theta}\) a real exponential, or just notation?</h2>

  <p>Your reading <em>defines</em> \(e^{i\theta} = \cos\theta + i\sin\theta\). That should bother you slightly.
    We already know what \(e^x\) means for real \(x\); writing \(e\) with an imaginary exponent is a new
    symbol, and the book gets to define new symbols however it likes. So is this a genuine extension of the
    exponential, or a suggestive abbreviation?</p>

  <p>The test: does it behave like an exponential? Write \(f(\theta) = \cos\theta + i \sin\theta\) and check.
    Try each step yourself first.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">The defining property of an exponential is that it turns addition into
          multiplication: \(f(\alpha+\beta) = f(\alpha)f(\beta)\). Check it. (You'll need two identities from
          trigonometry.)</div>
        <div class="sstep-body">
          <p>Expand the product:</p>
          \[
          \begin{aligned}
          f(\alpha)f(\beta) &amp;= (\cos\alpha + i\sin\alpha)(\cos\beta + i\sin\beta)\\
          &amp;= (\cos\alpha\cos\beta - \sin\alpha\sin\beta) + i(\sin\alpha\cos\beta + \cos\alpha\sin\beta)\\
          &amp;= \cos(\alpha+\beta) + i\sin(\alpha+\beta)\\
          &amp;= f(\alpha+\beta).
          \end{aligned}
          \]
          <p>The last-but-one line is the pair of angle-addition formulas, and notice they appear
            <em>exactly</em> in the shape complex multiplication produces &mdash; real parts subtracting,
            imaginary parts adding. This is not a coincidence, and it is really the proof of Theorem 2.2.3.
          </p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Second test: an exponential is its own derivative, up to the constant in the
          exponent &mdash; \(\frac{d}{dx}e^{kx} = ke^{kx}\). Differentiate \(f\) and see what constant comes
          out.</div>
        <div class="sstep-body">
          <p>Differentiating the real and imaginary parts separately,</p>
          \[ f'(\theta) = -\sin\theta + i\cos\theta = i(\cos\theta + i\sin\theta) = i\,f(\theta), \]
          <p>using \(i \cdot i\sin\theta = -\sin\theta\) in the middle. So \(f' = i f\), which is precisely
            \(\frac{d}{d\theta}e^{i\theta} = i e^{i\theta}\). The notation predicts the derivative
            correctly.</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Third test, and the most convincing one: the real exponential has a power
          series \(e^{x} = \sum x^n/n!\). Put \(i\theta\) into it and see what falls out.</div>
        <div class="sstep-body">
          <p>Substituting and using \(i^2=-1\), \(i^3=-i\), \(i^4=1\), and so on around a cycle of four:</p>
          \[
          \begin{aligned}
          \sum_{n\ge 0}\frac{(i\theta)^n}{n!}
          &amp;= 1 + i\theta - \frac{\theta^2}{2!} - i\frac{\theta^3}{3!} + \frac{\theta^4}{4!} + \cdots\\
          &amp;= \Big(1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!} - \cdots\Big)
          + i\Big(\theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \cdots\Big)\\
          &amp;= \cos\theta + i\sin\theta.
          \end{aligned}
          \]
          <p>The even powers of \(i\) alternate in sign and assemble the cosine series; the odd ones assemble
            the sine series and carry the \(i\). So the definition isn't a choice at all &mdash; it's the only
            value the exponential series can take at \(i\theta\).</p>
        </div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">So why does the book define it rather than derive it?</div>
        <div class="sstep-body">
          <p>Because deriving it needs convergence of complex power series and the right to rearrange them,
            which is a real-analysis prerequisite this text deliberately does without. Defining
            \(e^{i\theta}\) and then <em>checking</em> it behaves correctly gets you to the geometry
            immediately and costs nothing, as long as you know the checks pass. Now you do.</p>
          <p>One consequence worth carrying: since \(f(\alpha)f(\beta) = f(\alpha+\beta)\) is the engine, and
            \(f(2\pi) = f(0) = 1\), the map \(\theta \mapsto e^{i\theta}\) wraps the real line around the unit
            circle over and over. It is not one-to-one. Every fact about non-unique arguments, multiple square
            roots, and branch trouble is a shadow of that single sentence.</p>
        </div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole argument</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>A proof that \(e^{-2\pi} = 1\)</h2>

  <p>Yesterday's trap was square roots. Here is the same trap wearing a much better disguise.</p>

  <p><strong>Click the step that isn't allowed.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">By definition, \(e^{2\pi i} = \cos(2\pi) + i\sin(2\pi) = 1\).</button>
      <button class="fline" type="button">Raising equal things to the same power keeps them equal, so
        \(\left(e^{2\pi i}\right)^{i} = 1^{i}\).</button>
      <button class="fline" type="button">The power rule \(\left(e^{a}\right)^{b} = e^{ab}\) gives
        \(\left(e^{2\pi i}\right)^{i} = e^{2\pi i \cdot i} = e^{-2\pi}\).</button>
      <button class="fline" type="button">And \(1^{i} = 1\), since \(1\) raised to anything is \(1\).</button>
      <button class="fline" type="button">Therefore \(e^{-2\pi} = 1\). But \(e^{-2\pi} \approx 0.00187\).</button>
    </div>

    <div class="flaw-verdict" data-key="1">
      <p><strong>Correct, straight from the definition.</strong> \(\cos(2\pi) = 1\) and \(\sin(2\pi)=0\), so
        \(e^{2\pi i} = 1\). This is Euler's identity with a full turn instead of a half turn, and it says
        something geometric: going all the way around the unit circle brings you home.</p>
    </div>
    <div class="flaw-verdict" data-key="2">
      <p><strong>Fine, and worth noticing why.</strong> If \(u = v\) then \(u^i\) and \(v^i\) are the same
        expression, so whatever \(u^i\) means, the two sides mean it equally. The trouble is that "whatever
        \(u^i\) means" is hiding a great deal &mdash; and the next two lines each assume a different
        answer.</p>
    </div>
    <div class="flaw-verdict" data-key="3">
      <p><strong>Found it. \(\left(e^{a}\right)^{b} = e^{ab}\) is false for complex exponents.</strong></p>
      <p>Here's why. For a complex exponent, \(u^b\) is <em>defined</em> as \(e^{b\log u}\), and
        \(\log u\) is not a function. Every non-zero \(u\) has infinitely many logarithms, differing by
        \(2\pi i\), because \(e^{i\theta}\) wraps the line around the circle infinitely often &mdash; exactly
        the non-injectivity the scaffold above ended on.</p>
      <p>So \(\left(e^{2\pi i}\right)^{i}\) means \(e^{i\log(1)}\), and \(\log(1)\) is any of
        \(0, \pm 2\pi i, \pm 4\pi i, \dots\). Choosing \(\log 1 = 0\) gives \(1\). Choosing
        \(\log 1 = 2\pi i\) gives \(e^{i\cdot 2\pi i} = e^{-2\pi}\). Both are legitimate values. The
        "\(=\)" in line 3 secretly picks one branch, and line 4 picks the other, and the contradiction is
        entirely manufactured by using two different choices in one chain.</p>
      <p>Same disease as yesterday's \(\sqrt{-1}\cdot\sqrt{-1}\), and it will keep recurring. The pattern to
        internalise: <strong>every time an angle gets multiplied by something that isn't a whole number, the
          \(2\pi\) ambiguity stops being harmless.</strong> Halving it (square roots) or multiplying it by
        \(i\) both do the damage; multiplying it by \(3\), as in \(z^3\), does not.</p>
    </div>
    <div class="flaw-verdict" data-key="4">
      <p><strong>True on one branch, and that's the problem.</strong> Taking \(\log 1 = 0\) does give
        \(1^i = e^{i\cdot 0} = 1\). But line 3 was computed on a <em>different</em> branch, where
        \(\log 1 = 2\pi i\). Neither line is wrong on its own; putting them in the same chain is.</p>
      <p>If you want a genuinely alarming version of this: \(i^i\) is real, and equals
        \(e^{-\pi/2}\approx 0.2079\) &mdash; on the principal branch. On other branches it takes infinitely
        many other real values.</p>
    </div>
    <div class="flaw-verdict" data-key="5">
      <p><strong>The arithmetic is right and the conclusion is absurd, so a rule got broken upstream.</strong>
        Since lines 1, 2 and 4 are each defensible, line 3 is where to look. In practice this is the right
        instinct with any "paradox" of this kind: find the step where a rule proved for real numbers was
        applied to complex ones without checking whether it survived the trip.</p>
    </div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Reading polar form</h2>

  <div class="mc" data-answer="c">
    <p class="mc-q">Which transformation of the plane is \(z \mapsto e^{i\theta}\overline{z}\)?</p>
    <button class="mc-opt" data-key="a">A rotation by \(-\theta\) about the origin.</button>
    <button class="mc-opt" data-key="b">A dilation followed by a rotation.</button>
    <button class="mc-opt" data-key="c">A reflection &mdash; it reverses orientation.</button>
    <button class="mc-opt" data-key="d">The identity, since conjugating twice does nothing.</button>

    <div class="mc-fb" data-key="a">
      <p>The \(\overline{z}\) is doing something a rotation cannot. Take a triangle with its vertices labelled
        counterclockwise and apply the map: the image has them labelled <em>clockwise</em>. No rotation ever
        does that.</p>
      <p>Where the confusion is reasonable: conjugation does negate the argument, since
        \(\overline{re^{i\theta}} = re^{-i\theta}\). But negating the argument is a reflection across the real
        axis, not a rotation.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>No dilation is happening: \(|e^{i\theta}\overline{z}| = |e^{i\theta}||\overline{z}| = |z|\), so
        distances from the origin are unchanged. The map is rigid.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>Right. Conjugation flips the plane over the real axis, and then multiplying by \(e^{i\theta}\) turns
        the flipped copy. The composition of a reflection and a rotation is again a reflection &mdash; across
        a different line, through the origin at angle \(\theta/2\).</p>
      <p>This is exactly the form your reading gives at the end of Section 3.1 for reflection across an
        arbitrary line: \(r_L(z) = e^{i\theta}\overline{z} + b\). Recognising \(\overline{z}\) as "the
        orientation-reversing ingredient" is a genuinely useful reading skill. Every transformation in this
        course is built from \(z\) and \(\overline{z}\), and the ones with a bar in them are the ones that
        flip the plane over.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>Conjugating twice does indeed give back \(z\) &mdash; but this map conjugates once. Applying it twice
        gives \(e^{i\theta}\overline{e^{i\theta}\overline{z}} = e^{i\theta}e^{-i\theta}z = z\), so the map is
        its own inverse. That's a real and useful observation (it's what "reflection" means) but it isn't the
        same as being the identity.</p>
    </div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">You want a transformation that scales the plane by \(3\) and turns it a quarter turn
      counterclockwise, both about the origin. What is it?</p>
    <button class="mc-opt" data-key="a">\(z \mapsto 3z + i\)</button>
    <button class="mc-opt" data-key="b">\(z \mapsto 3iz\)</button>
    <button class="mc-opt" data-key="c">\(z \mapsto (3+i)z\)</button>
    <button class="mc-opt" data-key="d">\(z \mapsto 3z^{i}\)</button>

    <div class="mc-fb" data-key="a">
      <p>This scales by \(3\) and then <em>translates</em> by \(i\) &mdash; it slides the whole picture up by
        one unit without turning it. Adding shifts; multiplying turns. Keeping those two straight is most of
        Section 3.1.</p>
    </div>
    <div class="mc-fb" data-key="b">
      <p>Right. \(3i = 3e^{i\pi/2}\), so the modulus \(3\) is the scale factor and the argument \(\pi/2\) is
        the turn. Once you're reading multipliers in polar form, "scale by \(r\), turn by \(\theta\)" and
        "multiply by \(re^{i\theta}\)" are the same instruction written two ways.</p>
    </div>
    <div class="mc-fb" data-key="c">
      <p>This is a scale-and-turn, just not the one asked for. \(|3+i| = \sqrt{10} \approx 3.16\) and
        \(\arg(3+i) = \tan^{-1}(1/3) \approx 18.4^\circ\). Close to a scaling by \(3\), nowhere near a quarter
        turn. The lesson: to read off what a multiplier does, convert it to polar form &mdash; the Cartesian
        coefficients are not the scale and the angle.</p>
    </div>
    <div class="mc-fb" data-key="d">
      <p>After the previous activity, an expression like \(z^i\) should now make you flinch. It isn't a
        single-valued function of \(z\) at all, so it can't be a transformation of the plane.</p>
    </div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>The map \(\theta \mapsto e^{i\theta}\) wraps the real line around the unit circle infinitely many
      times. Name one concrete difficulty from today's page that this single fact is responsible for.</li>
    <li>Multiplication by \(e^{i\theta}\) rotates about the origin. Suppose you wanted to rotate about
      \(2+2i\) instead. You guessed at this on Day 3; using polar form, try to actually write the formula
      down. (Hint: get the centre to the origin first.)</li>
    <li>Come with one quantity that polar form makes obvious and Cartesian form hides, and one that goes the
      other way. Both exist, and knowing which form to reach for is worth more than either form.</li>
  </ol>
</div>

<script>
  (function () {
    var G = G304, c = G.c;

    /* ---- one point, two descriptions ---- */
    (function () {
      var P = G.plane('d4-polar', {
        span: 9, height: 360,
        handles: [{ name: 'z', z: c(2.6, 1.9), color: G.colors.blue, label: 'z' }],
        draw: function (p) {
          var z = p.get('z');
          p.grid(); p.axes();
          p.circle(c(0, 0), 1, { color: '#e0e3e7', width: 1, dash: [4, 4] });

          // Legs of the right triangle: x = r cos t, y = r sin t.
          p.seg(c(0, 0), c(z.x, 0), { color: G.colors.violet, width: 2, dash: [5, 4] });
          p.seg(c(z.x, 0), z, { color: G.colors.violet, width: 2, dash: [5, 4] });
          p.label(c(z.x / 2, 0), 'x', { color: G.colors.violet, dx: -4, dy: 18 });
          p.label(c(z.x, z.y / 2), 'y', { color: G.colors.violet, dx: 8, dy: 4 });

          // r, and the angle theta.
          p.arrow(c(0, 0), z, { color: G.colors.orange, width: 3 });
          var r = G.abs(z), t = G.arg(z);
          p.label(G.scale(z, 0.55), 'r = ' + G.num(r, 2),
            { color: G.colors.orange, dx: -6, dy: -12, align: 'right' });
          p.angleArc(c(0, 0), c(1, 0), z,
            { color: G.colors.green, width: 2, rpx: 40, text: G.num(t * 180 / Math.PI, 1) + '°' });

          // Where e^{i theta} itself sits.
          p.dot(G.expi(t), { color: G.colors.green, r: 5 });
          p.label(G.expi(t), 'e^(iθ)', { color: G.colors.green, dx: 9, dy: 16, size: 12 });
        },
        onDrag: function (p) { refresh(p); }
      });

      function refresh(p) {
        var z = p.get('z'), t = G.arg(z);
        G.say('d4-polar-out',
          '<div class="q"><b>Cartesian</b><span>' + G.str(z, 3) + '</span></div>' +
          '<div class="q"><b>modulus r</b><span>' + G.num(G.abs(z), 3) + '</span></div>' +
          '<div class="q"><b>argument θ</b><span>' + G.num(t, 3) + ' rad = '
          + G.num(t * 180 / Math.PI, 1) + '°</span></div>' +
          '<div class="q"><b>polar</b><span>' + G.polarStr(z, 3) + '</span></div>');
      }
      refresh(P);
    })();

    /* ---- Theorem 2.2.3 ---- */
    (function () {
      var P = G.plane('d4-mult', {
        span: 11, height: 380,
        handles: [
          { name: 'z', z: c(2.1, 1.1), color: G.colors.blue, label: 'z' },
          { name: 'w', z: c(0.9, 1.25), color: G.colors.violet, label: 'w' }
        ],
        draw: function (p) {
          var z = p.get('z'), w = p.get('w'), zw = G.mul(z, w);
          p.grid(); p.axes();
          p.circle(c(0, 0), 1, { color: '#e0e3e7', width: 1, dash: [4, 4] });

          p.arrow(c(0, 0), z, { color: G.colors.blue, width: 2.2 });
          p.arrow(c(0, 0), w, { color: G.colors.violet, width: 2.2 });
          p.arrow(c(0, 0), zw, { color: G.colors.orange, width: 3 });
          p.label(zw, 'zw', { color: G.colors.orange, dx: 10, dy: -9 });

          // theta on the inner arc, beta stacked on top of it.
          p.angleArc(c(0, 0), c(1, 0), z,
            { color: G.colors.blue, width: 2, rpx: 34, text: 'θ' });
          p.angleArc(c(0, 0), z, zw,
            { color: G.colors.violet, width: 2, rpx: 52, text: 'β' });

          // Deliberately NOT drawing the triangles 0-1-z and 0-w-zw here: that
          // configuration is Exercise 2.3.4, on the next class day's problem set.
          p.dot(c(1, 0), { color: G.colors.muted, r: 3.5 });
          p.label(c(1, 0), '1', { color: G.colors.muted, dx: 4, dy: 18, size: 12 });
        },
        onDrag: function (p) { refresh(p); }
      });

      function refresh(p) {
        var z = p.get('z'), w = p.get('w'), zw = G.mul(z, w);
        var r = G.abs(z), s = G.abs(w);
        var t = G.arg(z), b = G.arg(w);
        var sum = t + b;
        while (sum > Math.PI) sum -= 2 * Math.PI;
        while (sum < -Math.PI) sum += 2 * Math.PI;
        G.say('d4-mult-out',
          '<div class="q"><b>z</b><span>' + G.polarStr(z, 2) + '</span></div>' +
          '<div class="q"><b>w</b><span>' + G.polarStr(w, 2) + '</span></div>' +
          '<div class="q hit"><b>r · s</b><span>' + G.num(r * s, 3) + ' &nbsp;=&nbsp; |zw| = '
          + G.num(G.abs(zw), 3) + '</span></div>' +
          '<div class="q hit"><b>θ + β</b><span>' + G.num(sum * 180 / Math.PI, 1)
          + '° &nbsp;=&nbsp; arg(zw) = ' + G.num(G.arg(zw) * 180 / Math.PI, 1) + '°</span></div>');
      }
      refresh(P);
    })();
  })();
</script>
