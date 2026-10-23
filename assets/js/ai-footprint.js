/* Charts for the AI environmental footprint report.
   Each <figure class="aif-fig" data-chart="bar|log|cols"> holds a plain data table; this script draws the
   chart from that table and tucks the table into a "Show the numbers" disclosure. Without JavaScript the
   tables simply show. Row attributes: data-v (value), data-lo/data-hi (range), data-g (ai | cmp | proj). */
(function () {
  'use strict';

  var tip = document.createElement('div');
  tip.className = 'aif-tip';
  tip.setAttribute('aria-hidden', 'true');
  document.body.appendChild(tip);

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  function showTip(el, r) {
    tip.innerHTML = '<b>' + esc(r.label) + '</b><span class="v">' + esc(r.shown) + '</span>' + (r.note ? '<span class="n">' + esc(r.note) + '</span>' : '');
    tip.classList.add('on');
    var b = el.getBoundingClientRect(), t = tip.getBoundingClientRect();
    var x = Math.min(Math.max(8, b.left + b.width / 2 - t.width / 2), window.innerWidth - t.width - 8);
    var y = b.top - t.height - 8;
    if (y < 8) y = b.bottom + 8;
    tip.style.left = x + 'px';
    tip.style.top = y + 'px';
  }
  function hideTip() { tip.classList.remove('on'); }
  window.addEventListener('scroll', hideTip, { passive: true });

  function readRows(table) {
    return Array.prototype.map.call(table.tBodies[0].rows, function (tr) {
      var c = tr.cells, d = tr.dataset;
      return {
        label: c[0].textContent.trim(),
        shown: c[1].textContent.trim(),
        note: c[2] ? c[2].textContent.trim() : '',
        v: d.v != null ? parseFloat(d.v) : null,
        lo: d.lo != null ? parseFloat(d.lo) : null,
        hi: d.hi != null ? parseFloat(d.hi) : null,
        g: d.g || 'ai'
      };
    });
  }

  function el(tag, cls, parent) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (parent) parent.appendChild(e);
    return e;
  }

  function hover(target, hot, r) {
    target.tabIndex = 0;
    target.setAttribute('aria-label', r.label + ': ' + r.shown + (r.note ? '. ' + r.note : ''));
    function on() { hot.classList.add('hot'); showTip(target, r); }
    function off() { hot.classList.remove('hot'); hideTip(); }
    target.addEventListener('mouseenter', on);
    target.addEventListener('mouseleave', off);
    target.addEventListener('focus', on);
    target.addEventListener('blur', off);
  }

  function legend(fig, box) {
    if (!fig.dataset.legend) return;
    var lg = el('div', 'aif-legend', box);
    fig.dataset.legend.split('|').forEach(function (item) {
      var k = item.split(':'), s = el('span', '', lg);
      el('i', 'aif-g-' + k[0] + (fig.dataset.chart === 'log' ? ' dot' : ''), s);
      s.appendChild(document.createTextNode(k.slice(1).join(':')));
    });
  }

  function ticks(fig) {
    return (fig.dataset.ticks || '').split(',').filter(Boolean).map(parseFloat);
  }
  function tickLabels(fig, ts, fmt) {
    var given = fig.dataset.ticklabels ? fig.dataset.ticklabels.split(',') : null;
    return ts.map(function (t, i) { return given ? given[i] : fmt(t); });
  }

  function axis(box, fig, ts, labels, pos, unit) {
    var ax = el('div', 'aif-axis', box);
    el('div', 'unit', ax).textContent = unit || fig.dataset.unit || '';
    var tk = el('div', 'ticks', ax);
    ts.forEach(function (t, i) {
      var s = el('span', i === 0 ? 'first' : (i === ts.length - 1 ? 'last' : ''), tk);
      s.style.left = pos(t) + '%';
      s.textContent = labels[i];
    });
  }

  /* Horizontal bars, linear or log scale. A log chart can also be redrawn on a linear scale (sc), where each
     activity becomes a bar from zero: solid to the low estimate, faint to the high one. */
  function hbars(fig, rows, box, isLog, sc) {
    sc = sc || {};
    var magnitude = fig.dataset.chart === 'log' && !isLog;
    var max = sc.max != null ? sc.max : parseFloat(fig.dataset.max);
    var min = sc.max != null ? 0 : parseFloat(fig.dataset.min || (isLog ? 0.1 : 0));
    var pos = isLog
      ? function (v) { return 100 * (Math.log10(v) - Math.log10(min)) / (Math.log10(max) - Math.log10(min)); }
      : function (v) { return Math.min(100, 100 * (v - min) / (max - min)); };
    var ts = sc.ticks || ticks(fig);
    var labels = sc.labels || tickLabels(fig, ts, function (t) { return t + (fig.dataset.fmt || ''); });
    var grid = el('div', 'aif-rows', box);
    rows.forEach(function (r) {
      var row = el('div', 'aif-row', grid);
      var lab = el('div', 'lab', row);
      lab.textContent = r.label;
      if (fig.dataset.chart === 'log') el('span', 'sh', lab).textContent = r.shown;
      var trk = el('div', 'trk', row);
      ts.forEach(function (t, i) { var g = el('div', 'aif-gl' + (i === 0 && !isLog ? ' base' : ''), trk); g.style.left = pos(t) + '%'; });
      var g = 'aif-g-' + r.g;
      if (isLog) {
        if (r.lo != null && r.hi != null && r.hi > r.lo) {
          var b = el('div', 'aif-bar range ' + g, trk);
          b.style.left = pos(r.lo) + '%';
          b.style.width = Math.max(pos(r.hi) - pos(r.lo), 1) + '%';
        } else {
          el('div', 'aif-dot ' + g, trk).style.left = pos(r.v) + '%';
        }
      } else if (magnitude) {
        var a = r.lo != null ? r.lo : r.v, z = r.hi != null ? r.hi : r.v;
        var solid = el('div', 'aif-bar ' + g, trk);
        solid.style.left = '0';
        solid.style.width = pos(a) + '%';
        if (z > a) {
          var faint = el('div', 'aif-bar soft ' + g, trk);
          faint.style.left = pos(a) + '%';
          faint.style.width = (pos(z) - pos(a)) + '%';
        }
        if (z > max) {
          var off = el('span', 'aif-val off', trk);
          off.textContent = 'off the scale →';
          off.style.right = '0';
          off.style.marginRight = '6px';
        }
      } else {
        var w = Math.max(pos(r.v), 0.4);
        var bar = el('div', 'aif-bar ' + g, trk);
        bar.style.left = '0';
        bar.style.width = w + '%';
        var end = w;
        if (r.lo != null && r.hi != null) {
          var rb = el('div', 'aif-bar range ' + g, trk);
          rb.style.left = pos(r.lo) + '%';
          rb.style.width = Math.max(pos(r.hi) - pos(r.lo), 0.6) + '%';
          bar.style.opacity = '0';
          end = pos(r.hi);
        }
        var val = el('span', 'aif-val', trk);
        val.textContent = r.shown;
        if (end > 74) { val.style.right = (100 - end) + '%'; val.style.marginRight = '6px'; }
        else { val.style.left = end + '%'; val.style.marginLeft = '6px'; }
      }
      hover(trk, row, r);
    });
    axis(box, fig, ts, labels, pos, sc.unit);
  }

  /* Vertical columns over time, with optional range whiskers. */
  function cols(fig, rows, box) {
    var max = parseFloat(fig.dataset.max), ts = ticks(fig);
    var area = el('div', 'aif-cols', box);
    ts.forEach(function (t) {
      if (!t) return;
      var g = el('div', 'gl', area);
      g.style.bottom = (100 * t / max) + '%';
      el('span', '', g).textContent = t + (fig.dataset.fmt || '');
    });
    var xl = el('div', 'aif-xlabels', box);
    rows.forEach(function (r) {
      var c = el('div', 'aif-col', area);
      var b = el('div', 'b aif-g-' + r.g, c);
      b.style.height = (100 * r.v / max) + '%';
      var top = r.v;
      if (r.lo != null && r.hi != null) {
        var w = el('div', 'wh', c);
        w.style.bottom = (100 * r.lo / max) + '%';
        w.style.height = (100 * (r.hi - r.lo) / max) + '%';
        top = r.hi;
      }
      var cv = el('span', 'cv', c);
      cv.textContent = r.shown.split(' (')[0];
      cv.style.bottom = 'calc(' + (100 * top / max) + '% + 4px)';
      el('span', '', xl).textContent = r.label;
      hover(c, c, r);
    });
  }

  /* Buttons that redraw a log chart on other scales (data-scales: JSON list of {key, label, note, max, ticks, labels, unit}). */
  function scaleSwitch(fig, rows, box) {
    var scales = JSON.parse(fig.dataset.scales);
    var sub = fig.querySelector('figcaption .s');
    var bar = el('div', 'aif-scale', box);
    bar.setAttribute('role', 'group');
    bar.setAttribute('aria-label', 'Chart scale');
    legend(fig, box);
    var plot = el('div', '', box);
    var buttons = scales.map(function (sc) {
      var b = el('button', '', bar);
      b.type = 'button';
      b.textContent = sc.label;
      b.addEventListener('click', function () { draw(sc); });
      return b;
    });
    function draw(sc) {
      hideTip();
      plot.innerHTML = '';
      hbars(fig, rows, plot, sc.key === 'log', sc.key === 'log' ? null : sc);
      if (sub && sc.note) sub.textContent = sc.note;
      buttons.forEach(function (b, i) { b.setAttribute('aria-pressed', scales[i] === sc ? 'true' : 'false'); });
    }
    draw(scales[0]);
  }

  Array.prototype.forEach.call(document.querySelectorAll('.aif-fig[data-chart]'), function (fig) {
    var table = fig.querySelector('table.aif-data');
    if (!table) return;
    var rows = readRows(table);
    var box = document.createElement('div');
    box.className = 'aif-chart';
    table.parentNode.insertBefore(box, table);
    var kind = fig.dataset.chart;
    if (fig.dataset.scales) scaleSwitch(fig, rows, box);
    else {
      legend(fig, box);
      if (kind === 'cols') cols(fig, rows, box); else hbars(fig, rows, box, kind === 'log');
    }
    var det = document.createElement('details');
    det.className = 'aif-tv';
    var sum = el('summary', '', det);
    sum.textContent = 'Show the numbers as a table';
    table.parentNode.insertBefore(det, table);
    det.appendChild(table);
  });

  /* Printing: open every table view so the numbers come along. */
  window.addEventListener('beforeprint', function () {
    Array.prototype.forEach.call(document.querySelectorAll('.aif-tv'), function (d) { d.open = true; });
  });
})();
