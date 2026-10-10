---
layout: day
course: 308
course_title: "MATH 308: Modern Algebra"
title: "MATH 308 Day 16: Permutations and Pairs"
day: 16
chapter_number: 9
chapter: "Isomorphisms"
day_title: "Permutations and Pairs"
blurb: "Every group you will meet is hiding inside a group of permutations, and the recipe is one line long. Then glue two groups side by side and watch the order of a pair refuse to be the product of the orders."
reading: "Chapter 9, Day 2: Cayley's Theorem (the rest of Section 9.1), and Section 9.2 through the theorem that an internal direct product is isomorphic to the external one"
---

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Read a row as a permutation</h2>

  <p>Cayley's theorem ends Section 9.1: every group is isomorphic to a group of permutations. The proof attaches to each
    \(g\) the map \(\lambda_g(x) = gx\). Judson's example uses \(\mathbb{Z}_3\); here we use \(\mathbb{Z}_4\), where
    \(\lambda_g(x) = g + x\).</p>

  <p>Predict before you press anything:</p>
  <ul>
    <li>Write \(\lambda_3\) as a two-line list: \(0\ 1\ 2\ 3\) on top, and underneath, where each goes. Which element
      of \(\mathbb{Z}_4\) gives the identity permutation?</li>
    <li>What is \(\lambda_2 \circ \lambda_2\)? Which element does it match?</li>
  </ul>

  <div class="ctl-row">
    <div class="ctl"><label for="d16-g">Element \(g\)</label><select id="d16-g" aria-label="element g"></select></div>
    <div class="ctl"><label for="d16-h">Element \(h\)</label><select id="d16-h" aria-label="element h"></select></div>
  </div>
  <div class="ctl-row">
    <div class="ctl" id="d16-table"></div>
    <div class="ctl" id="d16-arrows"></div>
  </div>
  <div class="readout a308-readout" id="d16-out" aria-live="polite"></div>

  <p>The bottom line of \(\lambda_g\)'s two-line list is row \(g\) of the table. Compare \(\lambda_g \circ \lambda_h\)
    with \(\lambda_{g+h}\). That comparison is the heart of the proof.</p>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Glue two groups together: the order of \((1,1)\)</h2>

  <p>In \(G \times H\), pairs multiply one coordinate at a time. Judson proves that if \(g\) has order \(r\) and \(h\) has
    order \(s\), then \((g,h)\) has order \(\operatorname{lcm}(r,s)\). So \((1,1)\) in \(\mathbb{Z}_m \times \mathbb{Z}_n\)
    has order \(\operatorname{lcm}(m,n)\), while the group has \(mn\) elements.</p>

  <p>Predict: how many multiples of \((1,1)\) return you to \((0,0)\) in \(\mathbb{Z}_2 \times \mathbb{Z}_3\)? In
    \(\mathbb{Z}_2 \times \mathbb{Z}_4\)? Then try your own sizes.</p>

  <div class="ctl-row">
    <div class="ctl"><label for="d16-m">\(m\)</label><input type="range" id="d16-m" min="2" max="8" step="1" value="2" aria-label="m"></div>
    <div class="ctl"><label for="d16-n">\(n\)</label><input type="range" id="d16-n" min="2" max="8" step="1" value="3" aria-label="n"></div>
  </div>
  <div class="a308-row">
    <button class="btn411 ghost" type="button" id="d16-p23">Preset: \(\mathbb{Z}_2 \times \mathbb{Z}_3\)</button>
    <button class="btn411 ghost" type="button" id="d16-p24">Preset: \(\mathbb{Z}_2 \times \mathbb{Z}_4\)</button>
  </div>
  <div id="d16-torus"></div>
  <div class="readout a308-readout" id="d16-torus-out" aria-live="polite"></div>
</div>

<div class="act explore">
  <div class="act-type">Explore</div>
  <h2>Split \(U(8)\) into two pieces that multiply back</h2>

  <p>An internal direct product is a group \(G\) with subgroups \(H\) and \(K\) such that \(G = HK\), \(H \cap K = \{e\}\),
    and \(hk = kh\) for all \(h \in H\), \(k \in K\). Then \(G \cong H \times K\). The reading's example is
    \(U(8) = \{1, 3\} \times \{1, 5\}\).</p>

  <p>\(U(8)\) has three subgroups of order \(2\): \(\{1,3\}\), \(\{1,5\}\), and \(\{1,7\}\). Predict which ordered pairs
    \((H, K)\) pass all three conditions, and which conditions fail when \(H = K\).</p>

  <div class="ctl-row">
    <div class="ctl"><label for="d16-H">\(H\)</label><select id="d16-H" aria-label="subgroup H"></select></div>
    <div class="ctl"><label for="d16-K">\(K\)</label><select id="d16-K" aria-label="subgroup K"></select></div>
  </div>
  <div id="d16-prod"></div>
  <div class="readout a308-readout" id="d16-prod-out" aria-live="polite"></div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Which permutation is Cayley's?</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Cayley's proof attaches to each element \(g\) of a group a permutation \(\lambda_g\). Which one?</p>
    <button class="mc-opt" data-key="a">\(x \mapsto xg\), multiplication on the right.</button>
    <button class="mc-opt" data-key="b">\(x \mapsto gx\), multiplication on the left.</button>
    <button class="mc-opt" data-key="c">\(x \mapsto x^{-1}\), the same map for every \(g\).</button>
    <button class="mc-opt" data-key="d">\(x \mapsto g\), the constant map.</button>
    <div class="mc-fb" data-key="a"><p>A permutation, yes, but \(g \mapsto (x \mapsto xg)\) reverses products: the map for \(h\), then the map for \(g\),
      gives the map for \(hg\), not \(gh\).</p></div>
    <div class="mc-fb" data-key="b"><p>Right. \(\lambda_g\) is one-to-one (cancel \(g\) on the left), onto (\(g^{-1}c\) goes to \(c\)), and
      \(\lambda_{gh} = \lambda_g \circ \lambda_h\). That last identity is why \(g \mapsto \lambda_g\) respects products.</p></div>
    <div class="mc-fb" data-key="c"><p>This map doesn't depend on \(g\), so it can't tell two elements apart. Cayley's map has to vary with \(g\).</p></div>
    <div class="mc-fb" data-key="d"><p>A constant map is not one-to-one once the group has two elements, so it isn't a permutation.</p></div>
  </div>
</div>

<div class="act check">
  <div class="act-type">Check Yourself</div>
  <h2>Which product is cyclic, and how big is an internal product?</h2>

  <div class="mc" data-answer="b">
    <p class="mc-q">Which of these direct products is cyclic?</p>
    <button class="mc-opt" data-key="a">\(\mathbb{Z}_2 \times \mathbb{Z}_6\)</button>
    <button class="mc-opt" data-key="b">\(\mathbb{Z}_3 \times \mathbb{Z}_4\)</button>
    <button class="mc-opt" data-key="c">\(\mathbb{Z}_2 \times \mathbb{Z}_2 \times \mathbb{Z}_3\)</button>
    <button class="mc-opt" data-key="d">\(\mathbb{Z}_2 \times \mathbb{Z}_8\)</button>
    <div class="mc-fb" data-key="a"><p>\(6\) kills every element here, so no element has order \(12\). Not cyclic.</p></div>
    <div class="mc-fb" data-key="b"><p>Right. \(\gcd(3,4) = 1\), so \((1,1)\) has order \(\operatorname{lcm}(3,4) = 12\) and generates the whole group.</p></div>
    <div class="mc-fb" data-key="c"><p>Again every order divides \(\operatorname{lcm}(2,2,3) = 6\), and the group has \(12\) elements. The repeated \(\mathbb{Z}_2\) is the trouble.</p></div>
    <div class="mc-fb" data-key="d"><p>The group has \(16\) elements, but the largest order of any element is \(\operatorname{lcm}(2,8) = 8\).</p></div>
  </div>

  <div class="mc" data-answer="b">
    <p class="mc-q">If \(G\) is the internal direct product of subgroups \(H\) and \(K\), what is \(|G|\)?</p>
    <button class="mc-opt" data-key="a">\(|H| + |K|\)</button>
    <button class="mc-opt" data-key="b">\(|H| \cdot |K|\)</button>
    <button class="mc-opt" data-key="c">\(\max(|H|, |K|)\)</button>
    <button class="mc-opt" data-key="d">\(\operatorname{lcm}(|H|, |K|)\)</button>
    <div class="mc-fb" data-key="a"><p>Try the reading's \(\mathbb{Z}_6 \cong \{0, 2, 4\} \times \{0, 3\}\). Here \(3 \cdot 2 = 6\), but \(3 + 2 = 5\).</p></div>
    <div class="mc-fb" data-key="b"><p>Right. Each element is \(hk\) for exactly one pair \((h,k)\), by the reading's uniqueness argument. So \(|G| = |H||K|\).</p></div>
    <div class="mc-fb" data-key="c"><p>In \(\mathbb{Z}_6 = \{0,2,4\} \times \{0,3\}\), the maximum of \(3\) and \(2\) is \(3\), but the group has \(6\) elements.</p></div>
    <div class="mc-fb" data-key="d"><p>The lcm is the order of an element of a product, not the size of the product. In \(U(8)\), \(\operatorname{lcm}(2,2) = 2\), but \(|U(8)| = 4\).</p></div>
  </div>
</div>

<div class="act scaffold">
  <div class="act-type">Proof Scaffold</div>
  <h2>The core of Cayley's theorem</h2>

  <p>Let \(G\) be a group and \(g \in G\), and define \(\lambda_g(x) = gx\). Judson's proof has four steps. Commit to each
    one before you open it.</p>

  <div class="proof-scaffold">
    <ol class="scaffold-steps">
      <li class="sstep">
        <div class="sstep-prompt">To be a permutation of \(G\), what must \(\lambda_g\) satisfy?</div>
        <div class="sstep-body"><p>It must be one-to-one and onto.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Suppose \(\lambda_g(a) = \lambda_g(b)\). Why must \(a = b\)?</div>
        <div class="sstep-body"><p>\(ga = gb\). Multiply on the left by \(g^{-1}\) to get \(a = b\). That is one-to-one.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Given \(c \in G\), which element goes to \(c\) under \(\lambda_g\)?</div>
        <div class="sstep-body"><p>\(b = g^{-1}c\), since \(\lambda_g(b) = gg^{-1}c = c\). That is onto.</p></div>
      </li>
      <li class="sstep">
        <div class="sstep-prompt">Why does \(\varphi(g) = \lambda_g\) respect products, and why is \(\varphi\) one-to-one?</div>
        <div class="sstep-body"><p>\((\lambda_g \circ \lambda_h)(a) = g(ha) = (gh)a\), so \(\lambda_{gh} = \lambda_g \circ \lambda_h\). If
          \(\lambda_g = \lambda_h\), apply both to \(e\): \(g = ge = he = h\).</p></div>
      </li>
    </ol>
    <button class="btn411 ghost scaffold-all" type="button">Reveal the whole proof</button>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Spot the Flaw</div>
  <h2>Do the orders multiply?</h2>

  <p>A classmate claims that in \(G \times H\), if \(g\) has order \(r\) and \(h\) has order \(s\), then \((g,h)\) has order
    \(rs\). Here's the argument.</p>

  <p><strong>Click the step that isn't justified.</strong></p>

  <div class="flaw-widget" data-flaw="4">
    <div class="flawlist">
      <button class="fline" type="button">Let \(g\) have order \(r\) and \(h\) have order \(s\).</button>
      <button class="fline" type="button">\((g,h)^k = (e,e)\) exactly when \(g^k = e\) and \(h^k = e\), since products in \(G \times H\) are done one coordinate at a time.</button>
      <button class="fline" type="button">So \((g,h)^k = (e,e)\) exactly when \(r\) divides \(k\) and \(s\) divides \(k\).</button>
      <button class="fline" type="button">The smallest positive \(k\) that is a multiple of both \(r\) and \(s\) is \(rs\).</button>
      <button class="fline" type="button">Therefore \((g,h)\) has order \(rs\). \(\blacksquare\)</button>
    </div>
    <div class="flaw-verdict" data-key="1"><p><strong>Fine.</strong> That's the setup.</p></div>
    <div class="flaw-verdict" data-key="2"><p><strong>Fine.</strong> This is the definition of the operation on pairs.</p></div>
    <div class="flaw-verdict" data-key="3"><p><strong>Fine.</strong> Both coordinates have to return to the identity at the same time.</p></div>
    <div class="flaw-verdict" data-key="4"><p><strong>This is the flaw.</strong> The smallest common multiple of \(r\) and \(s\) is
      \(\operatorname{lcm}(r,s)\), which equals \(rs\) only when \(\gcd(r,s) = 1\). Test it: in \(\mathbb{Z}_2 \times \mathbb{Z}_2\), take
      \(g = h = 1\). Then \(r = s = 2\), but \((1,1) + (1,1) = (0,0)\), so the order is \(2\), not \(4\).</p></div>
    <div class="flaw-verdict" data-key="5"><p><strong>Fine, given line 4.</strong> The conclusion follows from the line before it, so the
      trouble is upstream.</p></div>
  </div>
</div>

<div class="bring-to-class">
  <h2>Bring to class</h2>
  <ol>
    <li>Cayley's theorem puts every group inside some symmetric group \(S_n\). Why doesn't that classify groups, and what
      would you need to know about \(S_n\) to make it useful?</li>
    <li>In the \(U(8)\) explorer, which of the three conditions becomes automatic when the group is abelian? Which ones
      still need checking, and why?</li>
    <li>Choosing \(H = K\) breaks two of the three conditions at once. For which subgroups \(H\) would \(H = K\) satisfy
      \(H \cap K = \{e\}\)?</li>
  </ol>
</div>

<script>
  (function () {
    var A = A308, Z4 = A.Z(4), names = ['0', '1', '2', '3'];
    function $(id) { return document.getElementById(id); }
    function lam(g) { return [0, 1, 2, 3].map(function (x) { return (x + g) % 4; }); }
    function cyc(p) { return A.permToCycles(p, { names: names, identity: '(0)' }); }

    /* ---- Explore 1: lambda_g on Z_4 ---- */
    [0, 1, 2, 3].forEach(function (k) {
      $('d16-g').appendChild(A.h('option', { value: k, text: String(k) }));
      $('d16-h').appendChild(A.h('option', { value: k, text: String(k) }));
    });
    $('d16-g').value = 1; $('d16-h').value = 2;
    A.cayley('d16-table', { group: Z4, clickable: false, caption: 'Z4: row g is lambda_g' });

    function arrows(g) {
      var xs = [52, 116, 180, 244], top = 36, bot = 124;
      var svg = A.svg('svg', { viewBox: '0 0 300 160', class: 'a308-perm', role: 'img',
        'aria-label': 'Each top element x has an arrow to the bottom element g + x mod 4, with g = ' + g + '.' });
      var defs = A.svg('defs'), mk = A.svg('marker', { id: 'd16ah', viewBox: '0 0 10 10', refX: 9, refY: 5,
        markerWidth: 6, markerHeight: 6, orient: 'auto-start-reverse' });
      mk.appendChild(A.svg('path', { d: 'M 0 0 L 10 5 L 0 10 z', class: 'ah' }));
      defs.appendChild(mk); svg.appendChild(defs);
      svg.appendChild(A.svg('text', { x: 4, y: top + 5, class: 'lvl', text: 'x' }));
      svg.appendChild(A.svg('text', { x: 4, y: bot + 5, class: 'lvl', text: 'g+x' }));
      for (var x = 0; x < 4; x++) svg.appendChild(A.svg('line', { x1: xs[x], y1: top + 12, x2: xs[(x + g) % 4], y2: bot - 12,
        class: 'arr', 'marker-end': 'url(#d16ah)' }));
      for (var j = 0; j < 4; j++) {
        svg.appendChild(A.svg('circle', { cx: xs[j], cy: top, r: 11, class: 'dot' }));
        svg.appendChild(A.svg('text', { x: xs[j], y: top + 4, class: 'num', text: String(j) }));
        svg.appendChild(A.svg('circle', { cx: xs[j], cy: bot, r: 11, class: 'dot on' }));
        svg.appendChild(A.svg('text', { x: xs[j], y: bot + 4, class: 'num on', text: String(j) }));
      }
      return svg;
    }

    function update() {
      var g = Number($('d16-g').value), h = Number($('d16-h').value);
      var pg = lam(g), ph = lam(h), comp = pg.map(function (_, x) { return pg[ph[x]]; });
      var sum = (g + h) % 4;
      $('d16-arrows').innerHTML = '';
      $('d16-arrows').appendChild(arrows(g));
      var tableDiv = $('d16-table');
      Array.prototype.forEach.call(tableDiv.querySelectorAll('tbody th[data-el]'), function (th) {
        th.classList.toggle('picked', Number(th.getAttribute('data-el')) === g);
      });
      Array.prototype.forEach.call(tableDiv.querySelectorAll('thead th[data-el]'), function (th) {
        th.classList.toggle('hl', Number(th.getAttribute('data-el')) === h);
      });
      $('d16-out').innerHTML = 'Row ' + g + ' of the table is <span class="mono">' + Z4.table[g].map(function (x) { return names[x]; }).join(' ') +
        '</span>, so λ<sub>' + g + '</sub> = <span class="mono">' + cyc(pg) + '</span>.<br>' +
        'λ<sub>' + g + '</sub> ∘ λ<sub>' + h + '</sub> = <span class="mono">' + cyc(comp) + '</span> and ' +
        'λ<sub>' + sum + '</sub> = <span class="mono">' + cyc(lam(sum)) + '</span>: ' +
        (JSON.stringify(comp) === JSON.stringify(lam(sum)) ? '<strong>equal</strong>, because ' + g + ' + ' + h + ' = ' + sum + ' in ℤ<sub>4</sub>.' : '<strong>not equal</strong>.');
    }
    $('d16-g').addEventListener('change', update);
    $('d16-h').addEventListener('change', update);
    update();

    /* ---- Explore 2: the order of (1,1) in Z_m x Z_n ---- */
    function drawTorus() {
      var m = Number($('d16-m').value), n = Number($('d16-n').value), out = $('d16-torus-out');
      $('d16-torus').innerHTML = '';
      var cell = 40, pad = 26, ord = A.lcm(m, n), total = m * n, onOrbit = {};
      for (var k = 0; k < ord; k++) onOrbit[(k % m) + ',' + (k % n)] = k;
      var svg = A.svg('svg', { viewBox: '0 0 ' + (pad * 2 + cell * (m - 1) + 20) + ' ' + (pad * 2 + cell * (n - 1) + 20), role: 'img',
        'aria-label': 'The grid of pairs in Z_' + m + ' x Z_' + n + ', with the multiples of (1,1) marked' });
      svg.style.cssText = 'width:100%;max-width:340px;height:auto;display:block;margin:0 auto;';
      for (var a = 0; a < m; a++) for (var b = 0; b < n; b++) {
        var key = a + ',' + b, hit = key in onOrbit, x = pad + a * cell, y = pad + b * cell;
        svg.appendChild(A.svg('circle', { cx: x, cy: y, r: hit ? 10 : 7, fill: hit ? '#F36E24' : '#fff',
          stroke: hit ? '#F36E24' : '#9aa0a6', 'stroke-width': 1.5 }));
        if (hit) svg.appendChild(A.svg('text', { x: x + 13, y: y + 4, 'font-size': 12, fill: '#1f2328', text: String(onOrbit[key]) }));
      }
      $('d16-torus').appendChild(svg);
      out.innerHTML = 'The order of \\((1,1)\\) is \\(\\operatorname{lcm}(' + m + ', ' + n + ') = ' + ord + '\\), in a group of ' + total +
        ' elements. Orange dots are the multiples \\(k(1,1)\\), labeled by \\(k\\). ' +
        (ord === total ? '<strong>(1,1) generates the whole group</strong>, so the group is cyclic.'
          : 'They reach only ' + ord + ' elements. Every element is killed by \\(\\operatorname{lcm} = ' + ord + '\\), which is less than \\(mn\\), so no element generates. The group is not cyclic.');
      if (window.M411) M411.typeset(out);
    }
    $('d16-m').addEventListener('input', drawTorus);
    $('d16-n').addEventListener('input', drawTorus);
    $('d16-p23').addEventListener('click', function () { $('d16-m').value = 2; $('d16-n').value = 3; drawTorus(); });
    $('d16-p24').addEventListener('click', function () { $('d16-m').value = 2; $('d16-n').value = 4; drawTorus(); });
    drawTorus();

    /* ---- Explore 3: internal direct products in U(8) ---- */
    var U8 = A.U(8), order2 = U8.subgroups().filter(function (H) { return H.length === 2; });
    function setName(H) { return '{' + H.map(function (x) { return U8.labels[x]; }).join(', ') + '}'; }
    order2.forEach(function (H, i) {
      $('d16-H').appendChild(A.h('option', { value: i, text: setName(H) }));
      $('d16-K').appendChild(A.h('option', { value: i, text: setName(H) }));
    });
    $('d16-H').value = 0; $('d16-K').value = 1;      // the reading's example: {1,3} and {1,5}

    function drawProd() {
      var H = order2[Number($('d16-H').value)], K = order2[Number($('d16-K').value)], seen = {};
      H.forEach(function (h) { K.forEach(function (k) { seen[U8.op(h, k)] = true; }); });
      var HK = Object.keys(seen), inter = H.filter(function (x) { return K.indexOf(x) >= 0; });
      var c1 = HK.length === U8.n, c2 = inter.length === 1 && inter[0] === U8.e;
      var c3 = H.every(function (h) { return K.every(function (k) { return U8.op(h, k) === U8.op(k, h); }); });
      var div = $('d16-prod');
      div.innerHTML = '';
      div.appendChild(A.h('table', { class: 'a308-cayley' }, [
        A.h('thead', null, [A.h('tr', null, [A.h('th', { class: 'corner', scope: 'col', html: 'h·k' })].concat(K.map(function (k) {
          return A.h('th', { scope: 'col', text: U8.labels[k] });
        })))]),
        A.h('tbody', null, H.map(function (h) {
          return A.h('tr', null, [A.h('th', { scope: 'row', text: U8.labels[h] })].concat(K.map(function (k) {
            return A.h('td', { text: U8.labels[U8.op(h, k)] });
          })));
        }))
      ]));
      $('d16-prod-out').innerHTML = 'G = HK? ' + (c1 ? '<strong>yes</strong>' : '<strong>no</strong>, only ' + HK.length + ' products') +
        '.<br>H ∩ K = ' + setName(inter) + (c2 ? ', so the intersection is trivial.' : ', not trivial.') +
        '<br>hk = kh? ' + (c3 ? '<strong>yes</strong>, every pair commutes.' : '<strong>no</strong>.') + '<br>' +
        (c1 && c2 && c3 ? '<strong>Internal direct product.</strong> So U(8) ≅ ' + setName(H) + ' × ' + setName(K) + '.'
          : '<strong>Not an internal direct product</strong> for this pair.');
    }
    $('d16-H').addEventListener('change', drawProd);
    $('d16-K').addEventListener('change', drawProd);
    drawProd();
  })();
</script>
