/* ============================================================
   reading-map.js
   Reader controls, line guide, and the pattern -> strategy
   matching for 499/fall-2026/reading-map.html.

   All state is per-browser (localStorage). Nothing is sent
   anywhere: a student's answers about their own reading stay
   on their own machine.
   ============================================================ */

(function () {
  "use strict";

  var rm = document.getElementById("rm");
  if (!rm) return;

  var KEYS = ["phon", "surf", "lpd", "attn", "neg", "vowel", "speed", "stealth"];

  var NAMES = {
    phon: "sounding out new words",
    surf: "irregular words and spelling",
    lpd: "middle letters swapping",
    attn: "letters jumping between words",
    neg: "the front of the word dropping",
    vowel: "vowels sliding",
    speed: "accurate but slow, and tiring",
    stealth: "understanding faster than reading"
  };

  var SENT = {
    phon: "unfamiliar or technical words are slow and effortful to sound out, and I sometimes substitute a similar-looking real word",
    surf: "words that don't follow spelling rules give me trouble, and my spelling of technical terms is unreliable",
    lpd: "I transpose letters in the middle of words and digits in the middle of numbers, and I don't catch it on re-reading",
    attn: "I read single words fine but make errors in running text, where letters seem to move between neighbouring words",
    neg: "I drop characters from the front of words and symbols, which produces something that still looks correct",
    vowel: "I get the consonants right but the vowels wrong, in both reading and spelling",
    speed: "my reading is accurate but slow, and it fatigues me much faster than it does my classmates",
    stealth: "I comprehend well by using context and reasoning, but reading aloud, spelling, and written output are much weaker than my understanding, and reading tires me quickly"
  };

  function store(k, v) {
    try { v === null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) { /* private mode */ }
  }
  function load(k) {
    try { return localStorage.getItem(k); } catch (e) { return null; }
  }

  /* ---- keep the control bar clear of the site navbar ---- */
  function measureNav() {
    var nav = document.querySelector(".navbar");
    var h = nav ? Math.round(nav.getBoundingClientRect().height) : 60;
    rm.style.setProperty("--rm-navh", h + "px");
  }
  measureNav();
  window.addEventListener("resize", measureNav, { passive: true });

  /* ---- reader settings ---- */
  ["size", "space", "font", "tint"].forEach(function (set) {
    var saved = load("rm-" + set);
    if (saved !== null) {
      saved ? rm.setAttribute("data-" + set, saved) : rm.removeAttribute("data-" + set);
    }
    var cur = rm.getAttribute("data-" + set) || "";
    rm.querySelectorAll('[data-set="' + set + '"]').forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.val === cur));
    });
  });

  rm.querySelectorAll("[data-set]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var set = btn.dataset.set, val = btn.dataset.val;
      val ? rm.setAttribute("data-" + set, val) : rm.removeAttribute("data-" + set);
      store("rm-" + set, val);
      rm.querySelectorAll('[data-set="' + set + '"]').forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === btn));
      });
    });
  });

  /* ---- line guide ---- */
  var ruler = document.getElementById("rm-ruler");
  var rulerBtn = document.getElementById("rm-rulerBtn");
  var rulerOn = false;

  function setRuler(on) {
    rulerOn = on;
    ruler.classList.toggle("on", on);
    rulerBtn.setAttribute("aria-pressed", String(on));
    store("rm-ruler", on ? "1" : "");
  }
  setRuler(load("rm-ruler") === "1");
  rulerBtn.addEventListener("click", function () { setRuler(!rulerOn); });

  window.addEventListener("pointermove", function (e) {
    if (!rulerOn) return;
    ruler.style.setProperty("--ry", e.clientY + "px");
  }, { passive: true });

  /* ---- marks -> profile -> strategies ---- */
  var chipsYes = document.getElementById("rm-chips-yes");
  var chipsSome = document.getElementById("rm-chips-some");
  var summary = document.getElementById("rm-summary");
  var said = document.getElementById("rm-said");

  function marks() {
    var m = {};
    KEYS.forEach(function (k) {
      var el = rm.querySelector('input[name="' + k + '"]:checked');
      if (el) m[k] = el.value;
    });
    return m;
  }

  function chip(k, soft) {
    var s = document.createElement("span");
    s.className = soft ? "rm-chip soft" : "rm-chip";
    s.textContent = NAMES[k];
    return s;
  }

  function fill(node, keys, soft, emptyText) {
    node.textContent = "";
    if (!keys.length) {
      var e = document.createElement("span");
      e.className = "rm-empty";
      e.textContent = emptyText;
      node.appendChild(e);
      return;
    }
    keys.forEach(function (k) { node.appendChild(chip(k, soft)); });
  }

  function render() {
    var m = marks();
    var yes = KEYS.filter(function (k) { return m[k] === "yes"; });
    var some = KEYS.filter(function (k) { return m[k] === "some"; });

    KEYS.forEach(function (k) {
      var card = rm.querySelector('.rm-pattern[data-key="' + k + '"]');
      if (card) card.classList.toggle("marked", m[k] === "yes" || m[k] === "some");
    });

    fill(chipsYes, yes, false, "Nothing marked yet — work through the eight patterns above.");
    fill(chipsSome, some, true, "—");

    var hit = yes.concat(some);
    rm.querySelectorAll(".rm-strat[data-for]").forEach(function (s) {
      var tags = (s.dataset.for || "").split(" ").filter(Boolean);
      s.classList.toggle("flagged", tags.some(function (t) { return hit.indexOf(t) > -1; }));
    });

    if (!yes.length && !some.length) {
      summary.textContent = "Mark some patterns above and a description will be written here.";
    } else {
      var parts = ["I'm an engineering student and I'd like to talk about how I read."];
      if (yes.length) {
        parts.push("These describe me consistently: " +
          yes.map(function (k) { return SENT[k]; }).join("; ") + ".");
      }
      if (some.length) {
        parts.push("These happen sometimes: " +
          some.map(function (k) { return SENT[k]; }).join("; ") + ".");
      }
      parts.push("I'd like to know what an evaluation would involve, and what support is available for reading-heavy coursework and timed exams.");
      summary.textContent = parts.join("\n\n");
    }

    var state = {};
    KEYS.forEach(function (k) { if (m[k]) state[k] = m[k]; });
    store("rm-marks", JSON.stringify(state));
  }

  (function restore() {
    var raw = load("rm-marks");
    if (!raw) return;
    try {
      var state = JSON.parse(raw);
      Object.keys(state).forEach(function (k) {
        var el = rm.querySelector('input[name="' + k + '"][value="' + state[k] + '"]');
        if (el) el.checked = true;
      });
    } catch (e) { /* corrupt entry, ignore */ }
  })();

  rm.querySelectorAll('.rm-mark input[type="radio"]').forEach(function (i) {
    i.addEventListener("change", render);
  });
  render();

  /* ---- filter ---- */
  var filterBtn = document.getElementById("rm-filterBtn");
  filterBtn.addEventListener("click", function () {
    var on = filterBtn.getAttribute("aria-pressed") !== "true";
    filterBtn.setAttribute("aria-pressed", String(on));
    on ? rm.setAttribute("data-filter", "mine") : rm.removeAttribute("data-filter");
    filterBtn.textContent = on ? "Show everything" : "Show only my matches";
  });

  /* ---- buttons ---- */
  function flash(msg) {
    said.textContent = msg;
    setTimeout(function () { said.textContent = ""; }, 2600);
  }

  function selectSummary() {
    var r = document.createRange();
    r.selectNodeContents(summary);
    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(r);
  }

  document.getElementById("rm-copyBtn").addEventListener("click", function () {
    var text = summary.textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () { flash("Copied."); },
        function () { selectSummary(); flash("Press Ctrl+C to copy."); }
      );
    } else {
      selectSummary();
      flash("Press Ctrl+C to copy.");
    }
  });

  document.getElementById("rm-printBtn").addEventListener("click", function () { window.print(); });

  document.getElementById("rm-resetBtn").addEventListener("click", function () {
    rm.querySelectorAll('.rm-mark input[type="radio"]').forEach(function (i) { i.checked = false; });
    store("rm-marks", null);
    render();
    flash("Cleared.");
  });
})();
