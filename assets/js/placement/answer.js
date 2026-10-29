/* Math placement assessment: reading and checking typed answers.
   Accepts what students actually type: -3, 2.5, .5, 3/4, -3/4, 1 1/2, 1,200, $12, 25%, x = 4, 12 cm.
   Everything is compared as an exact fraction, so 0.75, 3/4 and 6/8 are the same answer unless the
   question asks for a form ('lowest' or 'decimal'). */
(function (root) {
  'use strict';
  var PL = root.PL;

  /* -> { n, d, form: 'int' | 'dec' | 'frac' | 'mixed', lowest } with d > 0, or null if unreadable */
  PL.parse = function (raw) {
    if (raw === null || raw === undefined) return null;
    var s = String(raw).trim().toLowerCase()
      .replace(/[−–—]/g, '-')                // minus signs pasted or auto-corrected
      .replace(/^[a-z]\s*=\s*/, '')                        // "x = 4"
      .replace(/^\$\s*/, '').replace(/^-\s*\$\s*/, '-')      // "$12", "-$3"
      .replace(/\s*(%|percent|degrees?|°)$/, '')
      .replace(/\s*[a-z][a-z.²³^0-9 ]*$/, '')              // trailing units: "12 cm", "4 ft^2", "3 hours"
      .replace(/^-\s+/, '-')
      .trim();
    if (/^-?\d{1,3}(,\d{3})+(\.\d+)?$/.test(s)) s = s.replace(/,/g, '');
    var m, neg;
    if ((m = /^(-?)(\d+)$/.exec(s))) return mk(sg(m[1]) * +m[2], 1, 'int');
    if ((m = /^(-?)(\d*)\.(\d+)$/.exec(s)) || (m = /^(-?)(\d+)\.()$/.exec(s))) {
      var places = m[3].length, n = +(m[2] || '0') * Math.pow(10, places) + +(m[3] || '0');
      return mk(sg(m[1]) * n, Math.pow(10, places), 'dec');
    }
    if ((m = /^(-?)\(?(-?\d+)\)?\s*\/\s*\(?(-?\d+)\)?$/.exec(s))) {
      var num = +m[2], den = +m[3];
      if (den === 0) return null;
      neg = (m[1] === '-') !== ((num < 0) !== (den < 0));
      return mk((neg ? -1 : 1) * Math.abs(num), Math.abs(den), 'frac');
    }
    if ((m = /^(-?)(\d+)\s+(\d+)\s*\/\s*(\d+)$/.exec(s))) {
      var w = +m[2], fn = +m[3], fd = +m[4];
      if (fd === 0 || fn >= fd) return null;
      return mk(sg(m[1]) * (w * fd + fn), fd, 'mixed', fn, fd);
    }
    return null;
  };
  function sg(m) { return m === '-' ? -1 : 1; }
  function mk(n, d, form, fn, fd) {
    var lowest = form === 'int' || form === 'dec' ? true :
      form === 'mixed' ? PL.gcd(fn, fd) === 1 : PL.gcd(Math.abs(n), d) === 1;
    return { n: n, d: d, form: form, lowest: lowest };
  }

  /* The instance's answer as a parsed value (generators write it as a number or a string). */
  PL.key = function (inst) {
    var v = PL.parse(typeof inst.ans === 'number' ? String(inst.ans) : inst.ans);
    if (!v) throw new Error('unreadable answer key for ' + inst.id + ': ' + inst.ans);
    return v;
  };

  /* Check a typed response. -> { ok, unread } ; unread means "ask again", it isn't marked. */
  PL.check = function (inst, raw) {
    var v = PL.parse(raw);
    if (!v) return { ok: false, unread: true };
    var k = PL.key(inst);
    var same = v.n * k.d === k.n * v.d;
    if (same && inst.form === 'lowest' && (v.form === 'dec' || !v.lowest)) same = false;
    if (same && inst.form === 'decimal' && (v.form === 'frac' || v.form === 'mixed')) same = false;
    return { ok: same, unread: false };
  };

  /* The key as students would write it, for reports: '3/4', '-2.5' */
  PL.keyText = function (inst) { return String(inst.ans); };

  if (typeof module !== 'undefined' && module.exports) module.exports = PL;
})(typeof window !== 'undefined' ? window : globalThis);
