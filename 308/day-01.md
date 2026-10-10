---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 1: Arrows and Piles"
day: 1
chapter_number: 1
chapter: "Preliminaries"
day_title: "Arrows and Piles"
blurb: "Chapter 1 is the grammar the rest of the book is written in: arrows between sets, and rules that sort a set into piles. Draw the arrows, build the piles, and find the one line in a proof that quietly breaks."
reading: "Chapter 1, Day 1: Sections 1.1 and 1.2 as a quick overview, from proofs through equivalence relations and partitions"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Arrows from one set to another</h2>

  <p>Judson defines a function \(f : A \to B\) as a special kind of relation. A relation is a subset of the Cartesian product \(A \times B\), the set of ordered pairs \((a, b)\) with \(a \in A\) and \(b \in B\). A function is a relation in which each \(a\) appears in exactly one pair. Picture each pair as an arrow from \(a\) to \(b\), and the rule is one arrow leaving each input.</p>

  <p>Click an element on the left to select it, then click elements on the right to draw or erase its arrows. The menu loads diagrams to start from.</p>

  <div id="d01-arrows"></div>

  <p>Before you click anything, predict:</p>
  <ul>
    <li>Can an element of \(A\) have two arrows leaving it and still be a function?</li>
    <li>Can two arrows land on the same element of \(B\) and still be a function? Can they be one-to-one?</li>
    <li>If \(A\) and \(B\) have the same number of elements, must one-to-one and onto go together?</li>
  </ul>

  <p>Now load presets and compare the readout with your guesses. The readout uses the reading's definitions: one-to-one means no two inputs share an output, and onto means every element of \(B\) is hit. A function that is both has an inverse. Judson proves that a map is invertible exactly when it is one-to-one and onto, and the inverse just reverses every arrow.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Functions and counterexamples</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">A classmate claims that every onto function is one-to-one. What is the quickest way to show the claim is false?</p>
    <button class="mc-opt" data-key="a">Check it on several examples, and watch it hold.</button>
    <button class="mc-opt" data-key="b">Find one function that is onto but not one-to-one.</button>
    <button class="mc-opt" data-key="c">Prove it for finite sets, where it is easier to see.</button>
    <button class="mc-opt" data-key="d">Prove the contrapositive: if \(f\) is not one-to-one, it is not onto.</button>
    <div class="mc-fb" data-key="a"><p>Examples that work support a claim without proving it. One counterexample is enough to kill a universal claim, and Judson's note on proofs says a theorem cannot be proved by example.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. One counterexample settles a universal claim. Diagram 2 in the explorer above is exactly that function.</p></div>
    <div class="mc-fb" data-key="c"><p>Finite sets don't rescue it. Take three inputs and two outputs, and the claim already fails.</p></div>
    <div class="mc-fb" data-key="d"><p>The contrapositive says "if not one-to-one, then not onto." That is the same claim in other words, and it fails for the same reason: a function that is not one-to-one can still be onto.</p></div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Let \(|A| = 2\) and \(|B| = 3\). Which of these is impossible for a function \(f : A \to B\)?</p>
    <button class="mc-opt" data-key="a">\(f\) is one-to-one.</button>
    <button class="mc-opt" data-key="b">\(f\) is neither one-to-one nor onto.</button>
    <button class="mc-opt" data-key="c">\(f\) is onto, so every element of \(B\) gets an arrow.</button>
    <button class="mc-opt" data-key="d">\(f\) is one-to-one but not onto.</button>
    <div class="mc-fb" data-key="a"><p>Possible. Send the two elements of \(A\) to two different elements of \(B\). The third element of \(B\) just gets no arrow.</p></div>
    <div class="mc-fb" data-key="b"><p>Possible. Send both elements of \(A\) to the same element of \(B\). Only one element of \(B\) is hit, so the function is neither.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. Only two arrows leave \(A\), so at most two elements of \(B\) can be hit. The third can't be reached, so no function from a 2-element set is onto a 3-element set.</p></div>
    <div class="mc-fb" data-key="d"><p>Possible, and it is the same case as the first option: the two inputs go to two different outputs, and the third output gets nothing.</p></div>
  </div>

  <div class="mc" data-answer="a">
    <p class="mc-q">Given \(f : A \to B\) and \(g : B \to C\), what is \((g \circ f)(x)\)?</p>
    <button class="mc-opt" data-key="a">\(g(f(x))\)</button>
    <button class="mc-opt" data-key="b">\(f(g(x))\)</button>
    <button class="mc-opt" data-key="c">\(f(x) \cdot g(x)\)</button>
    <button class="mc-opt" data-key="d">The pair \((f(x), g(x))\)</button>
    <div class="mc-fb" data-key="a"><p>Right. Apply \(f\) first, then feed the result into \(g\). The notation runs right to left, as function notation always does.</p></div>
    <div class="mc-fb" data-key="b"><p>That is the composition \(f \circ g\), in the other order. It needs \(g\)'s outputs to be inputs to \(f\). Here they live in \(C\), so \(f(g(x))\) isn't even defined.</p></div>
    <div class="mc-fb" data-key="c"><p>That multiplies two outputs, which needs a multiplication on \(C\) that the sets don't come with. Composition feeds one output into the next function instead.</p></div>
    <div class="mc-fb" data-key="d"><p>That is a pair of outputs, and a composition has one output. The output of \(f\) becomes the input of \(g\), so only \(g\)'s value comes out.</p></div>
  </div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Sorting into piles</h2>

  <p>An equivalence relation behaves like equality: it is reflexive (every element is related to itself), symmetric (if \(x \sim y\) then \(y \sim x\)), and transitive (if \(x \sim y\) and \(y \sim z\), then \(x \sim z\)). Judson's theorem says the equivalence classes \([x] = \{y : y \sim x\}\) form a partition, a collection of nonempty, pairwise disjoint pieces that cover the set.</p>

  <p>The grid is a relation on \(\{1, \ldots, 6\}\). Clicking a square toggles whether \(i \sim j\) for that pair. The readout tests the three properties, and when they all hold it lists the classes and colors them.</p>

  <div id="d01-grid"></div>

  <p>Pick a preset and predict whether it is an equivalence relation. If it isn't, predict which property fails. Then load it and compare with the readout. Clear one diagonal square by hand and see what the readout names.</p>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Which relations sort?</h2>

  <div class="mc" data-answer="d">
    <p class="mc-q">Which of these relations on the integers is an equivalence relation?</p>
    <button class="mc-opt" data-key="a">\(x \sim y\) if \(x\) is less than \(y\).</button>
    <button class="mc-opt" data-key="b">\(x \sim y\) if \(|x| \le |y|\).</button>
    <button class="mc-opt" data-key="c">\(x \sim y\) if \(x + y\) is odd.</button>
    <button class="mc-opt" data-key="d">\(x \sim y\) if \(x^2 + y^2\) is even.</button>
    <div class="mc-fb" data-key="a"><p>It fails reflexivity: \(3 \lt 3\) is false, so 3 is not related to itself. It fails symmetry too: \(1 \lt 2\) holds, but \(2 \lt 1\) doesn't.</p></div>
    <div class="mc-fb" data-key="b"><p>Reflexive and transitive, but not symmetric. \(|1| \le |2|\) holds, while \(|2| \le |1|\) doesn't, so \(1 \sim 2\) but not \(2 \sim 1\).</p></div>
    <div class="mc-fb" data-key="c"><p>It fails reflexivity: \(x + x = 2x\) is always even, never odd. It fails transitivity too: \(1 + 2\) and \(2 + 3\) are odd, but \(1 + 3 = 4\) is not.</p></div>
    <div class="mc-fb" data-key="d"><p>Right. \(x^2 + x^2 = 2x^2\) is even, so the relation is reflexive. It is symmetric because addition is. For transitivity, \(x^2 + z^2 = (x^2 + y^2) + (y^2 + z^2) - 2y^2\), which is even when both pieces are. The classes are the evens and the odds.</p></div>
  </div>

  <div class="mc" data-answer="c">
    <p class="mc-q">Which statement about the equivalence classes of an equivalence relation is always true?</p>
    <button class="mc-opt" data-key="a">Every element belongs to exactly two classes.</button>
    <button class="mc-opt" data-key="b">Two classes can share exactly one element.</button>
    <button class="mc-opt" data-key="c">Any two classes are either equal or share no elements.</button>
    <button class="mc-opt" data-key="d">There is always exactly one class.</button>
    <div class="mc-fb" data-key="a"><p>No. Each element lies in exactly one class, its own \([x]\). If it lay in two, those two classes would be the same class.</p></div>
    <div class="mc-fb" data-key="b"><p>No. If two classes share even one element, they are the same class, so a partial overlap can't happen.</p></div>
    <div class="mc-fb" data-key="c"><p>Right. This is the corollary to Judson's theorem on equivalence classes: two classes are either disjoint or identical.</p></div>
    <div class="mc-fb" data-key="d"><p>No. One class would mean everything is related to everything. That is an extra property, not part of the definition.</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>Why two classes either match or don't touch</h2>

  <p>This is Judson's theorem that the equivalence classes partition the set, one committed step at a time.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">A partition needs nonempty pieces that cover the set, and pieces that are pairwise disjoint. Which of these does reflexivity give you directly?</div>
        <div class="sstep-body"><p>Nonempty and covering. Since \(x \sim x\), we have \(x \in [x]\). Every class is nonempty, and every element lies in some class. Disjointness is the real work.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Suppose \([x]\) and \([y]\) share an element \(z\). What do you know about \(z\)?</div>
        <div class="sstep-body"><p>\(z \in [x]\) means \(z \sim x\), and \(z \in [y]\) means \(z \sim y\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Use symmetry and transitivity to get a relation between \(x\) and \(y\).</div>
        <div class="sstep-body"><p>From \(z \sim x\), symmetry gives \(x \sim z\). Then \(x \sim z\) and \(z \sim y\) give \(x \sim y\) by transitivity.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Show that \([x] \subseteq [y]\). Take any \(w\) in \([x]\). What chain puts \(w\) in \([y]\)?</div>
        <div class="sstep-body"><p>\(w \in [x]\) means \(w \sim x\). With \(x \sim y\), transitivity gives \(w \sim y\), so \(w \in [y]\).</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Why is \([y] \subseteq [x]\) also true, and what does that say about the two classes?</div>
        <div class="sstep-body"><p>Swap the roles of \(x\) and \(y\). Symmetry gives \(y \sim x\), and the same argument goes through. So \([x] = [y]\). Two classes that meet are equal, so any two classes are either equal or disjoint.</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Onto does not mean one-to-one</h2>

  <p>A student tries to prove that every onto function is one-to-one. Here is the argument.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="3">
    <div class="flawlist">
      <button class="fline" type="button">Let \(f : A \to B\) be onto, and let \(b\) be any element of \(B\).</button>
      <button class="fline" type="button">Since \(f\) is onto, some \(a \in A\) has \(f(a) = b\).</button>
      <button class="fline" type="button">So \(a\) is the only element of \(A\) that \(f\) sends to \(b\), because \(f\) is onto.</button>
      <button class="fline" type="button">Since \(b\) was arbitrary, no two different inputs share an output, so \(f\) is one-to-one. \(\blacksquare\)</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> Choosing an arbitrary \(b\) makes the argument cover all of \(B\).</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> That is exactly what onto means: each \(b\) is hit by at least one input.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>This is the flaw.</strong> Onto says at least one input reaches \(b\). It says nothing about how many do. Take \(A = \{1, 2, 3\}\) and \(B = \{a, b\}\), with \(f(1) = f(2) = a\) and \(f(3) = b\). Every element of \(B\) is hit, but \(f(1) = f(2)\).</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>Fine as a step, given line 3.</strong> Once line 3 is granted, distinct inputs can't share an output. The error is already made in line 3.</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>When the two sets had the same size, one-to-one and onto kept showing up together. Explain why without the explorer. (Count the arrows.)</li>
    <li>A partition determines its equivalence relation: two elements are related exactly when they sit in the same piece. Could two different equivalence relations have the same classes? Why or why not?</li>
    <li>Chapter 6's cosets are equivalence classes too. What would go wrong later if two classes of the same relation could overlap partly?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308, PALETTE = A.PALETTE;

    // Clicks, and Enter or Space, both run the handler, so the SVG controls work from the keyboard.
    function onAct(el, fn) {
      el.addEventListener('click', fn);
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); } });
    }
    // Preset menu above a widget; choosing an entry calls onPick with that entry.
    function presetMenu(list, onPick, label) {
      var sel = A.h('select', { 'aria-label': label, onchange: function () { onPick(list[Number(this.value)]); } },
        list.map(function (p, k) { return A.h('option', { value: String(k), text: p.name }); }));
      return A.h('div', { class: 'ctl-row' }, [A.h('div', { class: 'ctl' }, [sel])]);
    }

    // Widget 1: select an element of A, then click elements of B to draw or erase its arrows.
    var ARROW_PRESETS = [
      { name: 'Diagram 1', nA: 3, nB: 2, arrows: [[], [], []] },
      { name: 'Diagram 2', nA: 3, nB: 2, arrows: [[0], [0], [1]] },
      { name: 'Diagram 3', nA: 2, nB: 3, arrows: [[0], [1]] },
      { name: 'Diagram 4', nA: 3, nB: 2, arrows: [[0, 1], [1], []] },
      { name: 'Diagram 5', nA: 3, nB: 3, arrows: [[0], [0], [1]] },
      { name: 'Diagram 6', nA: 3, nB: 3, arrows: [[1], [2], [0]] }
    ];
    function arrowExplorer(host) {
      var LA = ['1', '2', '3'], LB = ['a', 'b', 'c'], st = { nA: 3, nB: 2, arrows: [], sel: null };
      var svg = A.svg('svg', { viewBox: '0 0 340 230', width: '100%', role: 'img', style: 'max-width:340px;display:block;margin:0 auto',
        'aria-label': 'Arrow diagram: elements of A on the left, elements of B on the right, with the arrows you draw' });
      var out = A.h('p', { class: 'readout', 'aria-live': 'polite' });
      function ypos(i, n) { return n === 1 ? 115 : 30 + i * 170 / (n - 1); }
      function report() {
        var i, j, inc = [], over = -1, miss = -1, bad = -1, msg;
        for (i = 0; i < st.nA; i++) if (st.arrows[i].length !== 1) { bad = i; break; }
        if (bad >= 0) return 'Function? No: ' + LA[bad] + ' has ' + (st.arrows[bad].length ? st.arrows[bad].length + ' arrows' : 'no arrow') +
          ' leaving it. One-to-one and onto only apply to functions.';
        for (j = 0; j < st.nB; j++) inc.push(0);
        st.arrows.forEach(function (t) { t.forEach(function (k) { inc[k]++; }); });
        for (j = 0; j < st.nB; j++) { if (inc[j] > 1 && over < 0) over = j; if (inc[j] === 0 && miss < 0) miss = j; }
        msg = 'Function? Yes. One-to-one? ' + (over < 0 ? 'Yes.' : 'No: ' + LB[over] + ' has ' + inc[over] + ' arrows into it.') +
          ' Onto? ' + (miss < 0 ? 'Yes.' : 'No: ' + LB[miss] + ' gets no arrow.');
        return msg + (over < 0 && miss < 0 ? ' Both, so it is a bijection, and reversing every arrow gives its inverse.' : '');
      }
      function toggleArrow(j) {
        if (st.sel === null) { out.textContent = 'Click an element of A first, then the elements of B it should point to.'; return; }
        var t = st.arrows[st.sel], k = t.indexOf(j);
        if (k >= 0) t.splice(k, 1); else t.push(j);
        t.sort();
        draw();
      }
      function draw() {
        while (svg.firstChild) svg.removeChild(svg.firstChild);
        svg.appendChild(A.svg('defs', {}, [A.svg('marker', { id: 'd01-head', viewBox: '0 0 10 10', refX: '9', refY: '5', markerWidth: '7', markerHeight: '7', orient: 'auto' }, [A.svg('path', { d: 'M0,0 L10,5 L0,10 z', fill: 'currentColor' })])]));
        st.arrows.forEach(function (t, i) {
          t.forEach(function (j) {
            svg.appendChild(A.svg('line', { x1: 79, y1: ypos(i, st.nA), x2: 261, y2: ypos(j, st.nB), stroke: 'currentColor', 'stroke-width': 1.6, 'marker-end': 'url(#d01-head)' }));
          });
        });
        LA.slice(0, st.nA).forEach(function (lab, i) {
          var dot = A.svg('circle', { cx: 70, cy: ypos(i, st.nA), r: 9, fill: st.sel === i ? '#F36E24' : '#009CDE', tabindex: 0, role: 'button', 'aria-label': 'Element ' + lab + ' of A' });
          onAct(dot, function () { st.sel = st.sel === i ? null : i; draw(); });
          svg.appendChild(dot);
          svg.appendChild(A.svg('text', { x: 50, y: ypos(i, st.nA) + 5, 'text-anchor': 'end', 'font-size': 15, text: lab }));
        });
        LB.slice(0, st.nB).forEach(function (lab, j) {
          var dot = A.svg('circle', { cx: 270, cy: ypos(j, st.nB), r: 9, fill: '#009CDE', tabindex: 0, role: 'button', 'aria-label': 'Element ' + lab + ' of B' });
          onAct(dot, function () { toggleArrow(j); });
          svg.appendChild(dot);
          svg.appendChild(A.svg('text', { x: 292, y: ypos(j, st.nB) + 5, 'font-size': 15, text: lab }));
        });
        out.textContent = report() + (st.sel === null ? '' : ' Selected: ' + LA[st.sel] + '.');
      }
      function load(p) {
        st.nA = p.nA; st.nB = p.nB; st.sel = null;
        st.arrows = p.arrows.map(function (t) { return t.slice(); });
        draw();
      }
      host.innerHTML = '';
      host.appendChild(presetMenu(ARROW_PRESETS, load, 'Arrow diagram preset'));
      host.appendChild(svg);
      host.appendChild(out);
      load(ARROW_PRESETS[0]);
    }

    // Widget 2: a relation on {1, ..., 6}, edited one square at a time. When it is an
    // equivalence relation, the readout lists the classes and the squares take a class color.
    var RELATION_PRESETS = [
      { name: 'Relation A', pairs: [] },
      { name: 'Relation B', pairs: [[1, 2], [2, 1], [4, 5], [5, 4], [4, 6], [6, 4], [5, 6], [6, 5]] },
      { name: 'Relation C', pairs: [[1, 2], [2, 3], [1, 3]] },
      { name: 'Relation D', pairs: [[1, 2], [2, 1], [2, 3], [3, 2]] }
    ];
    function relationGrid(host) {
      var N = 6, S = 38, O = 40, R = [];
      var svg = A.svg('svg', { viewBox: '0 0 268 268', width: '100%', role: 'img', style: 'max-width:268px;display:block;margin:0 auto',
        'aria-label': 'Grid of pairs (i, j) for i and j from 1 to 6. A filled square means i is related to j.' });
      var out = A.h('p', { class: 'readout', 'aria-live': 'polite' });
      function analyse() {
        var i, j, k, cid = [], classes = [], c;
        for (i = 0; i < N; i++) if (!R[i][i]) return { ok: false, text: 'Not reflexive: ' + (i + 1) + ' is not related to itself.' };
        for (i = 0; i < N; i++) for (j = 0; j < N; j++) if (R[i][j] && !R[j][i]) {
          return { ok: false, text: 'Not symmetric: ' + (i + 1) + ' ~ ' + (j + 1) + ' holds, but ' + (j + 1) + ' ~ ' + (i + 1) + ' does not.' };
        }
        for (i = 0; i < N; i++) for (j = 0; j < N; j++) for (k = 0; k < N; k++) if (R[i][j] && R[j][k] && !R[i][k]) {
          return { ok: false, text: 'Not transitive: ' + (i + 1) + ' ~ ' + (j + 1) + ' and ' + (j + 1) + ' ~ ' + (k + 1) + ' hold, but ' + (i + 1) + ' ~ ' + (k + 1) + ' does not.' };
        }
        for (i = 0; i < N; i++) if (cid[i] === undefined) {
          c = [];
          for (j = 0; j < N; j++) if (R[i][j]) c.push(j);
          classes.push(c);
          c.forEach(function (m) { cid[m] = classes.length - 1; });
        }
        return { ok: true, cid: cid, text: 'Equivalence relation. The classes are ' +
          classes.map(function (c) { return '{' + c.map(function (m) { return m + 1; }).join(', ') + '}'; }).join(', ') +
          '. Each element is in exactly one class, so the classes partition {1, ..., 6}.' };
      }
      function flip(i, j) { return function () { R[i][j] = !R[i][j]; draw(); }; }
      function draw() {
        var res = analyse(), i, j, el;
        while (svg.firstChild) svg.removeChild(svg.firstChild);
        for (i = 0; i < N; i++) {
          svg.appendChild(A.svg('text', { x: O - 12, y: O + i * S + S / 2 + 5, 'text-anchor': 'end', 'font-size': 14, text: String(i + 1) }));
          svg.appendChild(A.svg('text', { x: O + i * S + S / 2, y: O - 12, 'text-anchor': 'middle', 'font-size': 14, text: String(i + 1) }));
          for (j = 0; j < N; j++) {
            el = A.svg('rect', { x: O + j * S + 2, y: O + i * S + 2, width: S - 4, height: S - 4, rx: 4, stroke: 'currentColor', 'stroke-width': 1,
              fill: !R[i][j] ? 'none' : (res.ok ? PALETTE[res.cid[i] % PALETTE.length] : '#009CDE'), tabindex: 0, role: 'button',
              'aria-label': (i + 1) + ' related to ' + (j + 1) + '? ' + (R[i][j] ? 'yes' : 'no') });
            onAct(el, flip(i, j));
            svg.appendChild(el);
          }
        }
        out.textContent = res.text;
      }
      function load(p) {
        R = [];
        for (var i = 0; i < N; i++) { R.push([]); for (var j = 0; j < N; j++) R[i].push(i === j); }
        p.pairs.forEach(function (q) { R[q[0] - 1][q[1] - 1] = true; });
        draw();
      }
      host.innerHTML = '';
      host.appendChild(presetMenu(RELATION_PRESETS, load, 'Relation preset'));
      host.appendChild(svg);
      host.appendChild(out);
      load(RELATION_PRESETS[0]);
    }

    arrowExplorer(document.getElementById('d01-arrows'));
    relationGrid(document.getElementById('d01-grid'));
  })();
</script>
