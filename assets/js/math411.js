/* MATH 411 - shared interaction library for the daily companion pages.
 *
 * Three declarative widgets, wired up from markup alone so each day page only
 * has to write HTML for them:
 *
 *   1. .mc          multiple-choice self-check with per-option feedback
 *   2. .proof-scaffold  proof walked one committed guess at a time
 *   3. .flawlist    click the line of an old argument that doesn't survive
 *
 * Anything genuinely bespoke to a single day (plots, animations) lives in an
 * inline <script> on that day's page and uses the M411 helpers at the bottom.
 */
(function () {
  'use strict';

  /* ------------------------------------------------------------------ *
   * 1. Multiple-choice self-check
   *
   *   <div class="mc" data-answer="b">
   *     <p class="mc-q">Question text</p>
   *     <button class="mc-opt" data-key="a">Option A</button>
   *     <button class="mc-opt" data-key="b">Option B</button>
   *     <div class="mc-fb" data-key="a">Why A is tempting but wrong.</div>
   *     <div class="mc-fb" data-key="b">Why B is right.</div>
   *   </div>
   * ------------------------------------------------------------------ */
  function initMC(root) {
    var answer = root.getAttribute('data-answer');
    var opts = Array.prototype.slice.call(root.querySelectorAll('.mc-opt'));
    var fbs = Array.prototype.slice.call(root.querySelectorAll('.mc-fb'));

    opts.forEach(function (opt) {
      opt.addEventListener('click', function () {
        var key = opt.getAttribute('data-key');
        var right = key === answer;

        // Reveal the chosen option's feedback; hide any previous one.
        fbs.forEach(function (fb) {
          var match = fb.getAttribute('data-key') === key;
          fb.classList.toggle('shown', match);
          fb.classList.toggle('good', match && right);
          fb.classList.toggle('bad', match && !right);
        });

        // A wrong guess dims nothing else - students should stay free to
        // keep exploring the other distractors, which is where the
        // feedback text is actually doing the teaching.
        opts.forEach(function (o) {
          o.classList.remove('correct', 'wrong', 'dim');
        });
        opt.classList.add(right ? 'correct' : 'wrong');
        if (right) {
          opts.forEach(function (o) {
            if (o !== opt) o.classList.add('dim');
          });
        }
      });
    });
  }

  /* ------------------------------------------------------------------ *
   * 2. Proof scaffold
   *
   *   <div class="proof-scaffold">
   *     <ol class="scaffold-steps">
   *       <li class="sstep">
   *         <div class="sstep-prompt">What has to happen next?</div>
   *         <button class="btn411 ghost sstep-reveal">Show this step</button>
   *         <div class="sstep-body"> ... </div>
   *       </li>
   *     </ol>
   *   </div>
   *
   * The reveal button is generated if it isn't written by hand, so day pages
   * can just supply prompt + body.
   * ------------------------------------------------------------------ */
  function initScaffold(root) {
    var steps = Array.prototype.slice.call(root.querySelectorAll('.sstep'));

    steps.forEach(function (step) {
      var body = step.querySelector('.sstep-body');
      if (!body) return;

      var btn = step.querySelector('.sstep-reveal');
      if (!btn) {
        btn = document.createElement('button');
        btn.className = 'btn411 ghost sstep-reveal';
        btn.type = 'button';
        btn.textContent = 'Show this step';
        body.parentNode.insertBefore(btn, body);
      }

      btn.addEventListener('click', function () {
        var open = step.classList.toggle('open');
        btn.textContent = open ? 'Hide this step' : 'Show this step';
        if (open) typeset(body);
      });
    });

    var all = root.querySelector('.scaffold-all');
    if (all) {
      all.addEventListener('click', function () {
        var anyClosed = steps.some(function (s) { return !s.classList.contains('open'); });
        steps.forEach(function (s) {
          s.classList.toggle('open', anyClosed);
          var b = s.querySelector('.sstep-reveal');
          if (b) b.textContent = anyClosed ? 'Hide this step' : 'Show this step';
        });
        all.textContent = anyClosed ? 'Collapse the whole proof' : 'Reveal the whole proof';
        if (anyClosed) typeset(root);
      });
    }
  }

  /* ------------------------------------------------------------------ *
   * 3. Spot the flaw
   *
   *   <div class="flaw-widget" data-flaw="3">
   *     <div class="flawlist">
   *       <button class="fline"> ... line 1 ... </button>
   *       ...
   *     </div>
   *     <div class="flaw-verdict" data-key="1">Line 1 is fine, because ...</div>
   *     ...
   *   </div>
   * ------------------------------------------------------------------ */
  function initFlaw(root) {
    var flaw = parseInt(root.getAttribute('data-flaw'), 10);
    var lines = Array.prototype.slice.call(root.querySelectorAll('.fline'));
    var verdicts = Array.prototype.slice.call(root.querySelectorAll('.flaw-verdict'));

    lines.forEach(function (line, i) {
      var n = i + 1;
      line.addEventListener('click', function () {
        lines.forEach(function (l) { l.classList.remove('is-flaw', 'not-flaw'); });
        line.classList.add(n === flaw ? 'is-flaw' : 'not-flaw');

        verdicts.forEach(function (v) {
          var match = parseInt(v.getAttribute('data-key'), 10) === n;
          v.classList.toggle('shown', match);
          if (match) typeset(v);
        });
      });
    });
  }

  /* ------------------------------------------------------------------ *
   * MathJax re-typesetting for content revealed after load
   * ------------------------------------------------------------------ */
  function typeset(el) {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([el]).catch(function () { /* no-op */ });
    }
  }

  /* ------------------------------------------------------------------ *
   * Small helpers the per-day inline scripts lean on
   * ------------------------------------------------------------------ */

  // Canvas sized for the device pixel ratio, so plots aren't blurry on
  // retina/high-DPI laptops. Returns a context already scaled to CSS pixels.
  function hidpi(canvas, cssHeight) {
    var ratio = window.devicePixelRatio || 1;
    var cssWidth = canvas.clientWidth || canvas.parentNode.clientWidth;
    canvas.style.height = cssHeight + 'px';
    canvas.width = Math.round(cssWidth * ratio);
    canvas.height = Math.round(cssHeight * ratio);
    var ctx = canvas.getContext('2d');
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    return { ctx: ctx, w: cssWidth, h: cssHeight };
  }

  // Redraw on resize, debounced - plots are fluid-width.
  function onResize(fn) {
    var t = null;
    window.addEventListener('resize', function () {
      clearTimeout(t);
      t = setTimeout(fn, 120);
    });
  }

  function fmt(x, digits) {
    if (!isFinite(x)) return '∞';
    return Number(x).toFixed(digits === undefined ? 6 : digits);
  }

  window.M411 = {
    typeset: typeset,
    hidpi: hidpi,
    onResize: onResize,
    fmt: fmt,
    colors: {
      explore: '#009CDE',
      scaffold: '#008552',
      check: '#F36E24',
      flaw: '#8B5CF6',
      primary: '#F36E24',
      muted: '#6E6E6E',
      grid: '#e4e6ea'
    }
  };

  // Bind each widget exactly once. Without this, a container that matches a
  // selector twice (or a nested one) gets two sets of click listeners, and the
  // toggles cancel each other out - a failure that looks like "the button does
  // nothing" and is invisible in the markup.
  function once(selector, init) {
    document.querySelectorAll(selector).forEach(function (el) {
      if (el.dataset.m411Init) return;
      el.dataset.m411Init = '1';
      init(el);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    once('.mc', initMC);
    once('.proof-scaffold', initScaffold);
    once('.flaw-widget', initFlaw);
  });
})();
