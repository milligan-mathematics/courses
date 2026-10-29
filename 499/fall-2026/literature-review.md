---
layout: lesson
title: "MATH 499: Writing the Literature Review"
course: 499
badge: "Writing Guide"
unit: "Home Sales Project · Fall 2026"
lesson_title: "From Five Book Reports to One Literature Review"
blurb: "You have good notes on good sources. This page is about the next move: turning notes on separate papers into one argument about what we know, and where our project fits."
prereq: "Have your notes on Ho, Tang &amp; Wong (2020) and Berry (2021) open. Work through the page top to bottom; the synthesis grid near the end saves in your browser, so you can come back to it."
index_url: "/499/"
index_title: "MATH 499"
index_label: "MATH 499 home"
---

{% raw %}
<style>
  .lr { --lr-br: #6E6E6E; --lr-lr: #008552; --lr-gap: #F9A01B; }
  .lr .two-up { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 1rem 0; }
  @media (max-width: 640px) { .lr .two-up { grid-template-columns: 1fr; } }
  .lr .panel { border: 1px solid #e4e6ea; border-radius: 8px; padding: 14px 16px; background: #fafbfc; }
  .lr .panel h3 { margin: 0 0 6px; font-size: 1rem; font-family: var(--font-primary); }
  .lr .panel.br { border-top: 4px solid var(--lr-br); }
  .lr .panel.rv { border-top: 4px solid var(--lr-lr); }
  .lr .panel p { margin: 0.4rem 0; }
  .lr .tests { counter-reset: t; list-style: none; padding: 0; }
  .lr .tests li { counter-increment: t; position: relative; padding: 10px 12px 10px 48px; margin: 8px 0;
    background: #fff; border: 1px solid #e4e6ea; border-radius: 8px; }
  .lr .tests li::before { content: counter(t); position: absolute; left: 12px; top: 10px; width: 26px; height: 26px;
    border-radius: 50%; background: var(--color-primary); color: #fff; font-family: var(--font-primary);
    display: flex; align-items: center; justify-content: center; font-size: 0.9rem; }

  /* Sorter */
  .lr .sort-item { border: 1px solid #e4e6ea; border-radius: 8px; padding: 12px 14px; margin: 10px 0; background: #fff; }
  .lr .sort-item q { display: block; font-style: italic; margin-bottom: 8px; quotes: none; }
  .lr .sort-btns { display: flex; gap: 8px; flex-wrap: wrap; }
  .lr .sort-fb { display: none; margin-top: 8px; font-size: 0.93rem; padding: 8px 10px; border-radius: 6px; }
  .lr .sort-fb.shown { display: block; }
  .lr .sort-fb.good { background: #e8f5ee; border-left: 4px solid var(--lr-lr); }
  .lr .sort-fb.bad { background: #fff4e5; border-left: 4px solid var(--lr-gap); }
  .lr .score { font-family: var(--font-primary); color: var(--text-muted); font-size: 0.95rem; }

  /* Before / after */
  .lr .toggle-row { display: flex; gap: 8px; flex-wrap: wrap; margin: 10px 0; }
  .lr .para { background: #fff; border: 1px solid #e4e6ea; border-radius: 8px; padding: 14px 16px; line-height: 1.65; }
  .lr .para[hidden] { display: none; }
  .lr mark { background: none; padding: 1px 2px; border-radius: 3px; }
  .lr.show-marks mark.m-claim { background: #dff0fa; box-shadow: inset 0 -2px #009CDE; }
  .lr.show-marks mark.m-side { background: #e2f3ea; box-shadow: inset 0 -2px #008552; }
  .lr.show-marks mark.m-gap { background: #fdf0d6; box-shadow: inset 0 -2px #F9A01B; }
  .lr .legend { display: none; gap: 14px; flex-wrap: wrap; font-size: 0.88rem; margin-top: 8px; }
  .lr.show-marks .legend { display: flex; }
  .lr .legend span::before { content: ""; display: inline-block; width: 12px; height: 12px; border-radius: 3px;
    margin-right: 6px; vertical-align: -1px; }
  .lr .legend .l-claim::before { background: #009CDE; }
  .lr .legend .l-side::before { background: #008552; }
  .lr .legend .l-gap::before { background: #F9A01B; }

  /* Checker */
  .lr textarea.lr-input { width: 100%; min-height: 180px; box-sizing: border-box; font: inherit; font-size: 0.95rem;
    padding: 10px 12px; border: 1px solid #ccd0d5; border-radius: 8px; resize: vertical; }
  .lr .chk-out { margin-top: 12px; }
  .lr .chk-para { border: 1px solid #e4e6ea; border-left: 5px solid #A2A2A2; border-radius: 6px; padding: 10px 12px;
    margin: 8px 0; background: #fff; }
  .lr .chk-para.ok { border-left-color: var(--lr-lr); }
  .lr .chk-para.warn { border-left-color: var(--lr-gap); }
  .lr .chk-para .excerpt { color: var(--text-muted); font-size: 0.88rem; margin-bottom: 4px; }
  .lr .chk-para ul { margin: 4px 0 0; padding-left: 20px; }
  .lr .tag { display: inline-block; font-size: 0.8rem; padding: 1px 8px; border-radius: 10px; background: #eef0f3;
    margin: 2px 4px 2px 0; }
  .lr .chk-summary { font-family: var(--font-primary); font-size: 1rem; margin: 6px 0; }

  /* Synthesis grid */
  .lr .grid-wrap { overflow-x: auto; margin: 12px 0; border: 1px solid #e4e6ea; border-radius: 8px; background: #fff; }
  .lr table.sgrid { border-collapse: collapse; min-width: 1000px; width: 100%; margin: 0; table-layout: fixed; }
  .lr table.sgrid tbody th { width: 170px; }
  .lr table.sgrid th, .lr table.sgrid td { border: 1px solid #e4e6ea; padding: 0; vertical-align: top; }
  .lr table.sgrid th { background: #f6f7f9; }
  .lr table.sgrid input, .lr table.sgrid textarea { width: 100%; box-sizing: border-box; border: none; background: transparent;
    font: inherit; padding: 8px; }
  .lr table.sgrid thead input { font-family: var(--font-primary); font-weight: 600; font-size: 0.9rem; }
  .lr table.sgrid tbody th input { font-weight: 600; font-size: 0.88rem; }
  .lr table.sgrid textarea { min-height: 84px; resize: vertical; font-size: 0.86rem; line-height: 1.4; display: block;
    overflow: hidden; }
  .lr table.sgrid tbody th textarea { font-weight: 600; font-size: 0.88rem; min-height: 0; resize: none; }
  .lr table.sgrid td.empty { background: repeating-linear-gradient(45deg, #fffaf0, #fffaf0 6px, #fff 6px, #fff 12px); }
  .lr table.sgrid .corner { font-size: 0.8rem; color: var(--text-muted); padding: 8px; font-weight: normal; width: 150px; }
  .lr table.sgrid input:focus, .lr table.sgrid textarea:focus { outline: 2px solid var(--color-primary); outline-offset: -2px; }
  .lr .colcount { display: block; font-size: 0.75rem; color: var(--text-muted); padding: 0 8px 6px; font-weight: normal; }
  .lr .grid-btns { display: flex; gap: 8px; flex-wrap: wrap; margin: 8px 0; }
  .lr .saved { font-size: 0.85rem; color: var(--text-muted); margin-left: auto; align-self: center; }
  .lr .colview { margin-top: 14px; }
  .lr .colview h3 { font-family: var(--font-primary); margin: 0.6rem 0; }
  .lr .colview .entry { padding: 8px 12px; border-left: 3px solid var(--lr-lr); background: #f7fbf9; margin: 6px 0; }
  .lr .colview .entry.blank { border-left-color: var(--lr-gap); background: #fffaf0; color: var(--text-muted); }
  .lr .colview .entry b { font-size: 0.85rem; }

  /* Gap cards + goals */
  .lr .gaps { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin: 12px 0; }
  .lr .gap { background: #fff; border: 1px solid #e4e6ea; border-top: 4px solid var(--lr-gap); border-radius: 8px; padding: 12px 14px; }
  .lr .gap h3 { margin: 0 0 6px; font-size: 1rem; font-family: var(--font-primary); }
  .lr .gap p { margin: 0.3rem 0; font-size: 0.93rem; }
  .lr .gap .fills { font-size: 0.83rem; color: var(--text-muted); }
  .lr .goals { list-style: none; padding: 0; }
  .lr .goals li { margin: 8px 0; }
  .lr .goals label { display: flex; gap: 10px; align-items: flex-start; cursor: pointer; padding: 10px 12px;
    background: #fff; border: 1px solid #e4e6ea; border-radius: 8px; }
  .lr .goals input { margin-top: 4px; width: 18px; height: 18px; accent-color: #008552; flex: none; }
  .lr .goals li.done label { background: #f2faf5; border-color: #bfe3cd; }
  .lr .progress { height: 10px; background: #eef0f3; border-radius: 5px; overflow: hidden; margin: 8px 0 4px; }
  .lr .progress > div { height: 100%; width: 0; background: #008552; transition: width .25s; }
</style>
{% endraw %}

<div class="lr mathjax_ignore tex2jax_ignore" id="lr">

<div class="act explore">
  <div class="act-type">The Big Idea</div>
  <h2>Witness statements vs. the detective's summary</h2>

  <p>A <strong>book report</strong> answers: <em>"What did this paper say?"</em><br>
     A <strong>literature review</strong> answers: <em>"What do we know about <u>my</u> question, and where does my project fit?"</em></p>

  <div class="two-up">
    <div class="panel br">
      <h3>Five book reports</h3>
      <p>Five witnesses each tell their own story, start to finish. The statements are stapled together in the order they
        were collected.</p>
      <p>The reader has to work out how the stories connect.</p>
    </div>
    <div class="panel rv">
      <h3>A literature review</h3>
      <p>The detective's case summary. It's organized by <strong>question</strong>: where the witnesses agree, where they
        contradict each other, and what nobody saw.</p>
      <p>Witnesses get quoted wherever they help, often several in one paragraph.</p>
    </div>
  </div>

  <p>The same papers can produce either one. What changes is the <strong>organizing principle</strong>: one
    organizes by article, the other by idea.</p>

  <h3 style="margin-top:1.4rem">Three quick tests</h3>
  <ol class="tests">
    <li><strong>Your headings are ideas, not authors.</strong> "How accurate are county appraisals?" is a literature
      review heading. "Berry (2021)" is a book report heading.</li>
    <li><strong>Most paragraphs cite two or more sources.</strong> A paragraph that cites only one paper is usually a
      summary of that paper.</li>
    <li><strong>Each paragraph opens with a claim about the field, not about one paper.</strong> For example: "Machine
      learning models beat ordinary regression in most studies, but by less than you'd expect."</li>
  </ol>
</div>

<div class="act check">
  <div class="act-type">Try It</div>
  <h2>Sort the sentences</h2>
  <p>Each sentence below could appear in a paper about house prices. Is it doing book-report work or
    literature-review work? Click to decide. The feedback explains the call.</p>
  <div id="sorter"></div>
  <p class="score" id="sort-score"></p>
</div>

<div class="act scaffold">
  <div class="act-type">Your Sources</div>
  <h2>Your two papers are already talking to each other</h2>

  <p>Right now your notes treat them as unrelated: one is about machine learning in Hong Kong, the other is about
    property taxes in the US. But they answer the <strong>same question</strong>:</p>

  <p style="font-family:var(--font-primary);font-size:1.15rem;text-align:center;margin:1rem 0">
    How well can a home's price be estimated from its records?</p>

  <div class="two-up">
    <div class="panel">
      <h3>Berry (2021): the official answer</h3>
      <p>Every county already estimates every home's value: the appraisal. Berry shows those estimates are
        <strong>regressive</strong> across the US. Cheap homes are over-assessed and expensive homes are under-assessed.</p>
    </div>
    <div class="panel">
      <h3>Ho, Tang &amp; Wong (2020): the model's answer</h3>
      <p>Random forests and gradient boosting predicted prices well (R² about 0.90) from just four features. But the
        data was very uniform: high-rise apartments in one Hong Kong district.</p>
    </div>
  </div>

  <p>Our Washington County data has <strong>both the appraisal and the sale price</strong> for every home. So we can
    ask whether Berry's pattern shows up here, and whether a model built from the same records does better than the
    county does. <strong>That is our project's place in the literature.</strong> A literature review exists to set up
    that sentence.</p>

  <h3 style="margin-top:1.4rem">Same facts, two ways</h3>
  <p>Here is a passage written both ways, using only facts from your own notes. Switch between them, then turn on the
    highlights to see what the second version does differently.</p>

  <div class="toggle-row" role="group" aria-label="Choose a version">
    <button class="btn411 ghost on" type="button" data-ver="br">Book report version</button>
    <button class="btn411 ghost" type="button" data-ver="rv">Literature review version</button>
    <button class="btn411 ghost" type="button" id="marks-btn" aria-pressed="false" style="margin-left:auto">Show highlights</button>
  </div>

  <div class="para" id="ver-br">
    <mark class="m-side">Ho et al. (2020) used SVM, random forest, and GBM on 40,000 Hong Kong sales and found RF and GBM
    performed best.</mark> <mark class="m-side">Berry (2021) found that property tax assessments in the US are
    regressive.</mark>
  </div>
  <div class="para" id="ver-rv" hidden>
    <mark class="m-claim">There are two very different ways to estimate what a house is worth.</mark> County assessors
    produce an official appraisal for every parcel, but <mark class="m-side">Berry (2021) shows these appraisals are
    regressive across the US: in Chicago, homes that sold for $100,000 had been assessed at about $125,000, while
    million-dollar homes were assessed at about 65% of their price.</mark> Machine learning offers an alternative.
    <mark class="m-side">Ho et al. (2020) predicted Hong Kong apartment prices with an R² of about 0.90 using only floor
    area, age, floor level, and travel time.</mark> <mark class="m-gap">Their apartments, though, were far more uniform
    than single-family homes in a mixed rural and suburban county, so it is an open question whether that accuracy
    carries over to data like ours.</mark>
  </div>

  <div class="legend" aria-hidden="true">
    <span class="l-claim">Opens with a claim about the field</span>
    <span class="l-side">Sources used as evidence</span>
    <span class="l-gap">Points to the gap our project fills</span>
  </div>

  <p id="ver-note" style="font-size:0.93rem;color:var(--text-muted);margin-top:10px">The book report version is two
    separate facts. Nothing connects them, and the reader can't tell why either one matters to our project.</p>
</div>

<div class="act explore">
  <div class="act-type">Tool</div>
  <h2>The synthesis grid</h2>

  <p>Before writing more prose, fill in this table: sources down the side, themes across the top. Write a phrase or
    two in each cell about what that source says on that theme. The first two rows start with entries from your own
    notes as examples. Change them however you like.</p>

  <p><strong>Blank cells are useful.</strong> They show you where a source is silent, and a whole column of blanks is a
    gap in the literature. That's often exactly where our project fits. Every cell, header, and source name can be
    edited.</p>

  <div class="grid-btns">
    <button class="btn411 ghost" type="button" id="add-row">+ Source</button>
    <button class="btn411 ghost" type="button" id="add-col">+ Theme</button>
    <button class="btn411 ghost" type="button" id="dl-csv">Download CSV</button>
    <button class="btn411 ghost" type="button" id="copy-md">Copy as table</button>
    <button class="btn411 ghost" type="button" id="reset-grid">Start over</button>
    <span class="saved" id="saved-note" aria-live="polite"></span>
  </div>

  <div class="grid-wrap"><table class="sgrid" id="sgrid"></table></div>

  <h3 style="margin-top:1.4rem">Then write by column, not by row</h3>
  <p>A <strong>row</strong> is everything one source says, which makes it a book report. A <strong>column</strong> is
    everything the field says about one idea. Each column becomes one section of your review. Pick a theme to see its
    column gathered into a rough outline:</p>
  <div class="toggle-row" id="col-picker" role="group" aria-label="Choose a theme"></div>
  <div class="colview" id="colview"></div>
</div>

<div class="act check">
  <div class="act-type">Tool</div>
  <h2>Check a draft</h2>
  <p>Paste in some or all of your draft. Put headings on their own lines and leave a blank line between paragraphs.
    The checker looks for citations like <em>Berry (2021)</em> or <em>(Ho et al., 2020)</em> and applies the three tests
    from the top of this page.</p>
  <p style="font-size:0.9rem;color:var(--text-muted)">It's a rough pattern-matcher, not a grader. It can miscount, and
    some paragraphs should cite nothing (your opening, your "our project" section). Use it to spot patterns, not to
    chase a score. Nothing you paste leaves your browser.</p>
  <textarea class="lr-input" id="chk-in" aria-label="Paste your draft here" placeholder="Paste your draft here…"></textarea>
  <div class="grid-btns">
    <button class="btn411" type="button" id="chk-run">Check it</button>
    <button class="btn411 ghost" type="button" id="chk-demo">Try it on the book report version</button>
  </div>
  <div class="chk-out" id="chk-out" aria-live="polite"></div>
</div>

<div class="act scaffold">
  <div class="act-type">Next Sources</div>
  <h2>What your other three sources should do</h2>
  <p>Choose them to <strong>fill gaps in the grid</strong>, not just because they're about houses. Look at your empty
    columns. Three kinds of sources would help most:</p>
  <div class="gaps">
    <div class="gap">
      <h3>A regression study</h3>
      <p>A study using ordinary (hedonic) regression on house prices. Our baseline model will be a regression, so we need
        to know what a good one looks like.</p>
      <p class="fills">Fills: <em>which methods work</em>, <em>what drives price</em></p>
    </div>
    <div class="gap">
      <h3>A study closer to our data</h3>
      <p>Machine learning applied to US single-family homes, ideally on county or assessor records. Hong Kong apartments
        are a long way from Washington County.</p>
      <p class="fills">Fills: <em>data</em>, <em>which methods work</em>, <em>how accuracy is measured</em></p>
    </div>
    <div class="gap">
      <h3>How appraisals are judged</h3>
      <p>Something on how appraisal accuracy is measured professionally, such as the IAAO's <em>Standard on Ratio
        Studies</em>. That's the standard behind what Berry measured.</p>
      <p class="fills">Fills: <em>how good are official appraisals</em>, <em>how accuracy is measured</em></p>
    </div>
  </div>
</div>

<div class="act flaw">
  <div class="act-type">Look Closer</div>
  <h2>A puzzle in your notes</h2>
  <p>Your Ho et al. table reports a mean absolute percentage error (MAPE) of 0.32% for random forest. That means the
    typical prediction was off by about a third of one percent, or roughly $1,000 on a $300,000 home.</p>

  <div class="mc" data-answer="c">
    <p class="mc-q">The same row reports RMSE = 0.089 on log price. What is the most likely explanation for the tiny MAPE?</p>
    <button class="mc-opt" type="button" data-key="a">Hong Kong apartments are so uniform that prices really are that predictable.</button>
    <button class="mc-opt" type="button" data-key="b">It's a typo in the paper; it should be 32%.</button>
    <button class="mc-opt" type="button" data-key="c">The percentage error was computed on <em>log</em> price, not on dollars.</button>
    <div class="mc-fb" data-key="a">Uniform data helps, but not this much. An RMSE of 0.089 on log price means a
      typical miss of about 9%, and the two numbers in the same row have to agree with each other.</div>
    <div class="mc-fb" data-key="b">32% would be far too large for a model with R² = 0.90. Before you call something a
      typo, check whether the numbers are on different scales.</div>
    <div class="mc-fb" data-key="c">Right. Log prices are numbers around 12 to 15, so missing by 0.09 is less than 1%
      <em>of the log</em>. In dollars, an error of 0.089 in log price is about a 9% miss. Watch for this whenever you
      compare accuracy across papers: different papers measure error on different scales, and you can only compare
      numbers that are on the same one. Spotting things like this is part of what a literature review is for.</div>
  </div>

  <h3 style="margin-top:1.4rem">Two quick fixes</h3>
  <ul>
    <li>Berry's data covers US <strong>counties</strong>, not "countries."</li>
    <li>Your Ho et al. notes describe 5-fold cross-validation, but the Limitations section says "only tested on one
      train/split." Go back to the paper and check which is right.</li>
  </ul>
</div>

<div class="act check">
  <div class="act-type">Goals</div>
  <h2>For your next draft</h2>
  <p>Check items off as you finish them. Your progress is saved in this browser.</p>
  <div class="progress" aria-hidden="true"><div id="goal-bar"></div></div>
  <p class="score" id="goal-count"></p>
  <ul class="goals" id="goals">
    <li><label><input type="checkbox" data-goal="five"> <span><strong>Five sources</strong>, all about home prices or
      home valuation.</span></label></li>
    <li><label><input type="checkbox" data-goal="grid"> <span><strong>A synthesis grid.</strong> It can be messy; just
      bring it. (Download it from the grid above.)</span></label></li>
    <li><label><input type="checkbox" data-goal="heads"> <span><strong>Headings that are themes, not
      authors.</strong></span></label></li>
    <li><label><input type="checkbox" data-goal="side"> <span><strong>At least a few paragraphs that put two or more
      sources side by side.</strong></span></label></li>
    <li><label><input type="checkbox" data-goal="gap"> <span><strong>A first try at the closing section:</strong> what
      hasn't been done on data like ours, and what our project adds.</span></label></li>
  </ul>
  <p style="font-size:0.93rem;color:var(--text-muted)">The closing section matters most. It's the part that answers
    "so why does our project need to exist?" It will grow into the motivation section of the research proposal and,
    eventually, the opening of the spring presentation.</p>
</div>

</div>

{% raw %}
<script>
(function () {
  'use strict';
  var KEY_GRID = 'math499-litreview-grid-v1';
  var KEY_GOALS = 'math499-litreview-goals-v1';
  function load(k) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (a) { n.setAttribute(a, attrs[a]); });
    if (text != null) n.textContent = text;
    return n;
  }
  var root = document.getElementById('lr');

  /* ---------------- Sorter ---------------- */
  var ITEMS = [
    { s: 'Ho et al. (2020) studied 40,000 resale transactions in Hong Kong.', a: 'br',
      why: 'One paper, one fact, with no connection to anything else. Facts like this belong in a review, but as evidence inside a sentence that makes a point.' },
    { s: 'Official appraisals and statistical models offer two competing answers to the same question: what is a house worth?', a: 'rv',
      why: 'This is a claim about the field. It sets up a comparison that the following paragraph can fill in with sources.' },
    { s: 'The second paper I read was about property taxes.', a: 'br',
      why: 'This is organized by your reading order, not by an idea. The reader learns what you read, not what is known.' },
    { s: 'Ho et al. (2020) get R² of about 0.90 from just four features, but on apartments far more uniform than the single-family homes in our data.', a: 'rv',
      why: 'It uses a source as evidence and then immediately asks whether the result carries over to our setting. That "but" is synthesis.' },
    { s: 'The authors used grid search with 5-fold cross-validation.', a: 'br',
      why: 'Method details from one paper. These are useful in your grid, but in the review they need a point, like "most studies validate this way, but none hold out a later year."' },
    { s: 'What we don’t yet know is whether a model built from a county’s own records can beat that county’s appraisal.', a: 'rv',
      why: 'A gap statement. It names what the literature hasn’t done, which is exactly where our project fits.' }
  ];
  var sorter = document.getElementById('sorter');
  var answered = {};
  function updateScore() {
    var n = Object.keys(answered).length, right = 0;
    Object.keys(answered).forEach(function (k) { if (answered[k]) right++; });
    document.getElementById('sort-score').textContent = n ? (right + ' of ' + n + ' sorted correctly' + (n === ITEMS.length ? '.' : ' so far.')) : '';
  }
  ITEMS.forEach(function (it, i) {
    var box = el('div', { 'class': 'sort-item' });
    box.appendChild(el('q', null, it.s));
    var btns = el('div', { 'class': 'sort-btns' });
    var fb = el('div', { 'class': 'sort-fb', 'aria-live': 'polite' });
    [['br', 'Book report'], ['rv', 'Literature review']].forEach(function (pair) {
      var b = el('button', { 'class': 'btn411 ghost', type: 'button' }, pair[1]);
      b.addEventListener('click', function () {
        btns.querySelectorAll('button').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        var ok = pair[0] === it.a;
        answered[i] = ok;
        fb.className = 'sort-fb shown ' + (ok ? 'good' : 'bad');
        fb.textContent = (ok ? 'Yes. ' : 'Not quite. This one is ' + (it.a === 'br' ? 'book-report' : 'literature-review') + ' work. ') + it.why;
        updateScore();
      });
      btns.appendChild(b);
    });
    box.appendChild(btns);
    box.appendChild(fb);
    sorter.appendChild(box);
  });

  /* ---------------- Before / after ---------------- */
  var NOTES = {
    br: 'The book report version is two separate facts. Nothing connects them, and the reader can’t tell why either one matters to our project.',
    rv: 'Same facts. Now it’s organized around an idea, the sources sit side by side as evidence, and it ends by pointing at our project.'
  };
  document.querySelectorAll('[data-ver]').forEach(function (b) {
    b.addEventListener('click', function () {
      var v = b.getAttribute('data-ver');
      document.querySelectorAll('[data-ver]').forEach(function (x) { x.classList.toggle('on', x === b); });
      document.getElementById('ver-br').hidden = v !== 'br';
      document.getElementById('ver-rv').hidden = v !== 'rv';
      document.getElementById('ver-note').textContent = NOTES[v];
    });
  });
  var marksBtn = document.getElementById('marks-btn');
  marksBtn.addEventListener('click', function () {
    var on = root.classList.toggle('show-marks');
    marksBtn.classList.toggle('on', on);
    marksBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    marksBtn.textContent = on ? 'Hide highlights' : 'Show highlights';
  });

  /* ---------------- Synthesis grid ---------------- */
  function starter() {
    return {
      cols: ['What drives price', 'Which methods work', 'How accuracy is measured', 'How good are official appraisals', 'Data: place, years, housing type'],
      rows: [
        { name: 'Ho, Tang & Wong (2020)', cells: [
          'Floor area is the strongest predictor; also building age, floor level, travel time. Only 4 inputs.',
          'RF ≈ GBM, both better than SVM.',
          '5-fold CV; R², MSE, RMSE, MAPE (on log price?)',
          '',
          '~40,000 apartment resales, Tseung Kwan O, Hong Kong, 1996–2014. Inflation-adjusted, logged.' ] },
        { name: 'Berry (2021)', cells: [
          '',
          '',
          'Compares assessed value with actual sale price.',
          'Regressive across the US: cheap homes over-assessed, expensive homes under-assessed. Bottom 10% pay over twice the effective rate of the top 10%.',
          '26 million arm’s-length US sales, 2007–2016, counties covering ~99% of the population.' ] },
        { name: 'Source 3', cells: ['', '', '', '', ''] },
        { name: 'Source 4', cells: ['', '', '', '', ''] },
        { name: 'Source 5', cells: ['', '', '', '', ''] }
      ]
    };
  }
  var grid = load(KEY_GRID) || starter();
  var table = document.getElementById('sgrid');
  var savedNote = document.getElementById('saved-note');
  var activeCol = 0;
  var saveTimer = null;
  function persist() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      savedNote.textContent = save(KEY_GRID, grid) ? 'Saved in this browser' : 'Couldn’t save here; download a copy before leaving';
    }, 300);
  }
  function filled(c) { return grid.rows.filter(function (r) { return (r.cells[c] || '').trim(); }).length; }
  function renderGrid() {
    table.innerHTML = '';
    var thead = el('thead'), hr = el('tr');
    hr.appendChild(el('th', { 'class': 'corner', scope: 'col' }, 'Sources ↓  Themes →'));
    grid.cols.forEach(function (c, ci) {
      var th = el('th', { scope: 'col' });
      var inp = el('input', { type: 'text', 'aria-label': 'Theme ' + (ci + 1) + ' name' });
      inp.value = c;
      inp.addEventListener('input', function () { grid.cols[ci] = inp.value; persist(); renderPicker(); renderCol(); });
      th.appendChild(inp);
      th.appendChild(el('span', { 'class': 'colcount', id: 'cc-' + ci }));
      hr.appendChild(th);
    });
    thead.appendChild(hr);
    table.appendChild(thead);
    var tb = el('tbody');
    grid.rows.forEach(function (r, ri) {
      var tr = el('tr');
      var th = el('th', { scope: 'row' });
      var inp = el('textarea', { rows: '1', 'aria-label': 'Source ' + (ri + 1) + ' name' });
      inp.value = r.name;
      inp.addEventListener('input', function () { r.name = inp.value; fit(inp); persist(); renderCol(); });
      th.appendChild(inp);
      tr.appendChild(th);
      grid.cols.forEach(function (c, ci) {
        var td = el('td');
        var ta = el('textarea', { 'aria-label': (r.name || 'Source ' + (ri + 1)) + ': ' + (c || 'theme ' + (ci + 1)) });
        ta.value = r.cells[ci] || '';
        td.classList.toggle('empty', !ta.value.trim());
        ta.addEventListener('input', function () {
          r.cells[ci] = ta.value;
          td.classList.toggle('empty', !ta.value.trim());
          fit(ta); updateCounts(); persist(); if (ci === activeCol) renderCol();
        });
        td.appendChild(ta);
        tr.appendChild(td);
      });
      tb.appendChild(tr);
    });
    table.appendChild(tb);
    table.querySelectorAll('textarea').forEach(fit);
    updateCounts();
  }
  // Grow a cell to show all its text, so nothing hides behind a scrollbar.
  function fit(ta) { ta.style.height = 'auto'; ta.style.height = ta.scrollHeight + 'px'; }
  window.addEventListener('resize', function () { table.querySelectorAll('textarea').forEach(fit); });
  function updateCounts() {
    grid.cols.forEach(function (c, ci) {
      var n = filled(ci), s = document.getElementById('cc-' + ci);
      if (s) s.textContent = n + ' of ' + grid.rows.length + ' sources' + (n <= 1 ? ' — a gap?' : '');
    });
  }
  function renderPicker() {
    var p = document.getElementById('col-picker');
    p.innerHTML = '';
    grid.cols.forEach(function (c, ci) {
      var b = el('button', { 'class': 'btn411 ghost' + (ci === activeCol ? ' on' : ''), type: 'button' }, c || ('Theme ' + (ci + 1)));
      b.addEventListener('click', function () { activeCol = ci; renderPicker(); renderCol(); });
      p.appendChild(b);
    });
  }
  function renderCol() {
    var v = document.getElementById('colview');
    v.innerHTML = '';
    if (activeCol >= grid.cols.length) activeCol = 0;
    v.appendChild(el('h3', null, 'Section: ' + (grid.cols[activeCol] || 'Theme ' + (activeCol + 1))));
    var n = filled(activeCol);
    grid.rows.forEach(function (r) {
      var t = (r.cells[activeCol] || '').trim();
      var d = el('div', { 'class': 'entry' + (t ? '' : ' blank') });
      d.appendChild(el('b', null, (r.name || 'Unnamed source') + ': '));
      d.appendChild(document.createTextNode(t || 'says nothing here (yet).'));
      v.appendChild(d);
    });
    var tip = n === 0 ? 'No source speaks to this theme yet. Either find one, or this is a gap worth naming in your review.'
      : n === 1 ? 'Only one source here, so a paragraph on this theme would be a summary of that source. A second source would let you compare.'
      : 'Several sources speak to this. Where do they agree? Where do they differ, and why (different data, methods, places)? Your topic sentence should say that.';
    v.appendChild(el('p', { style: 'font-size:0.93rem;color:var(--text-muted)' }, tip));
  }
  document.getElementById('add-row').addEventListener('click', function () {
    grid.rows.push({ name: 'Source ' + (grid.rows.length + 1), cells: grid.cols.map(function () { return ''; }) });
    persist(); renderGrid(); renderCol();
  });
  document.getElementById('add-col').addEventListener('click', function () {
    grid.cols.push('New theme');
    grid.rows.forEach(function (r) { r.cells.push(''); });
    persist(); renderGrid(); renderPicker(); renderCol();
  });
  document.getElementById('reset-grid').addEventListener('click', function () {
    if (!confirm('Clear your grid and go back to the starter version? Download a copy first if you want to keep it.')) return;
    grid = starter(); activeCol = 0; persist(); renderGrid(); renderPicker(); renderCol();
  });
  function csvCell(s) { s = String(s == null ? '' : s); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; }
  document.getElementById('dl-csv').addEventListener('click', function () {
    var lines = [[''].concat(grid.cols).map(csvCell).join(',')];
    grid.rows.forEach(function (r) { lines.push([r.name].concat(r.cells).map(csvCell).join(',')); });
    var blob = new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv' });
    var a = el('a', { href: URL.createObjectURL(blob), download: 'synthesis-grid.csv' });
    document.body.appendChild(a); a.click(); a.remove();
  });
  document.getElementById('copy-md').addEventListener('click', function () {
    function c(s) { return String(s || '').replace(/\|/g, '/').replace(/\s*\n\s*/g, ' '); }
    var out = '| Source | ' + grid.cols.map(c).join(' | ') + ' |\n|' + grid.cols.concat(['']).map(function () { return ' --- '; }).join('|') + '|\n';
    grid.rows.forEach(function (r) { out += '| ' + c(r.name) + ' | ' + r.cells.map(c).join(' | ') + ' |\n'; });
    var done = function () { savedNote.textContent = 'Copied. Paste into Word or Google Docs.'; };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(out).then(done, function () { prompt('Copy this:', out); });
    else prompt('Copy this:', out);
  });
  renderGrid(); renderPicker(); renderCol();

  /* ---------------- Draft checker ---------------- */
  var STOP = /^(In|By|Since|From|Until|During|The|After|Before|Of|And|Between|Through|For|To|At|On|As|Around|Over|Under|Than|Q[1-4]|Spring|Summer|Fall|Winter|January|February|March|April|May|June|July|August|September|October|November|December)$/;
  // First author, then optionally "et al." or ", B & C" / "and B", then the year.
  var CITE = /([A-Z][A-Za-zÀ-ſ'’-]+)(\s+et\s+al\.?|(?:,\s+[A-Z][A-Za-zÀ-ſ'’-]+)*,?\s+(?:and|&)\s+[A-Z][A-Za-zÀ-ſ'’-]+)?,?\s*\(?((?:19|20)\d{2}[a-z]?)\b/g;
  function cites(text) {
    var found = {}, m;
    CITE.lastIndex = 0;
    while ((m = CITE.exec(text))) {
      if (STOP.test(m[1])) continue;
      found[m[1] + ' ' + m[3]] = true;
    }
    return Object.keys(found);
  }
  function firstSentence(p) {
    // "et al." would otherwise end the sentence early.
    var q = p.replace(/et al\./g, 'et al');
    var m = q.match(/^[\s\S]*?[.!?](\s|$)/); return m ? m[0] : q;
  }
  function esc(s) { return s.replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }
  function check(text) {
    var out = document.getElementById('chk-out');
    out.innerHTML = '';
    var blocks = text.replace(/\r/g, '').split(/\n\s*\n/).map(function (b) { return b.trim(); }).filter(Boolean);
    if (!blocks.length) { out.textContent = 'Paste some text first.'; return; }
    var all = {}, paras = 0, multi = 0, html = [];
    blocks.forEach(function (b) {
      // A block may start with a heading line: short, no end punctuation.
      var lines = b.split('\n');
      while (lines.length && lines[0].trim().length < 90 && !/[.!:"”]$/.test(lines[0].trim())) {
        var h = lines.shift().trim().replace(/^#+\s*/, '');
        if (!h) continue;
        var hc = cites(h), byAuthor = hc.length || /et al/i.test(h);
        html.push('<div class="chk-para ' + (byAuthor ? 'warn' : 'ok') + '"><div class="excerpt">Heading</div><strong>' + esc(h) + '</strong><ul><li>' +
          (byAuthor ? 'This heading names a source. Try renaming it after the idea that section is about.' : 'Reads like an idea, not an author. Good.') + '</li></ul></div>');
      }
      var p = lines.join(' ').trim();
      if (!p) return;
      paras++;
      var cs = cites(p), first = cites(firstSentence(p));
      cs.forEach(function (c) { all[c] = true; });
      if (cs.length >= 2) multi++;
      var notes = [], warn = false;
      if (cs.length === 0) notes.push('No citations found. That’s fine for an introduction or your “our project” section; elsewhere, what’s the evidence?');
      else if (cs.length === 1) { warn = true; notes.push('Cites one source. Is this a summary of that paper? Could a second source agree, disagree, or add context?'); }
      else notes.push('Cites ' + cs.length + ' sources side by side.');
      if (first.length) { warn = true; notes.push('The first sentence names a source. Try opening with the claim the sources support, then bring them in as evidence.'); }
      else if (cs.length) notes.push('Opens with an idea before bringing in sources.');
      var ex = p.length > 140 ? p.slice(0, 140) + '…' : p;
      html.push('<div class="chk-para ' + (warn ? 'warn' : 'ok') + '"><div class="excerpt">' + esc(ex) + '</div>' +
        cs.map(function (c) { return '<span class="tag">' + esc(c) + '</span>'; }).join('') +
        '<ul>' + notes.map(function (n) { return '<li>' + n + '</li>'; }).join('') + '</ul></div>');
    });
    var total = Object.keys(all).length;
    var sum = el('div', { 'class': 'chk-summary' });
    sum.textContent = paras + ' paragraph' + (paras === 1 ? '' : 's') + ', ' + multi + ' citing two or more sources. ' +
      total + ' distinct source' + (total === 1 ? '' : 's') + ' found overall (goal: 5).';
    out.appendChild(sum);
    out.insertAdjacentHTML('beforeend', html.join(''));
  }
  document.getElementById('chk-run').addEventListener('click', function () { check(document.getElementById('chk-in').value); });
  document.getElementById('chk-demo').addEventListener('click', function () {
    var t = 'Ho et al. (2020)\n\nHo et al. (2020) used SVM, random forest, and GBM on 40,000 Hong Kong sales and found RF and GBM performed best.\n\nBerry (2021)\n\nBerry (2021) found that property tax assessments in the US are regressive.';
    document.getElementById('chk-in').value = t;
    check(t);
  });

  /* ---------------- Goals ---------------- */
  var goals = load(KEY_GOALS) || {};
  var boxes = document.querySelectorAll('#goals input');
  function renderGoals() {
    var n = 0;
    boxes.forEach(function (b) {
      var on = !!goals[b.getAttribute('data-goal')];
      b.checked = on; if (on) n++;
      b.closest('li').classList.toggle('done', on);
    });
    document.getElementById('goal-bar').style.width = (100 * n / boxes.length) + '%';
    document.getElementById('goal-count').textContent = n + ' of ' + boxes.length + ' done' + (n === boxes.length ? '. Ready to turn in.' : '');
  }
  boxes.forEach(function (b) {
    b.addEventListener('change', function () { goals[b.getAttribute('data-goal')] = b.checked; save(KEY_GOALS, goals); renderGoals(); });
  });
  renderGoals();
})();
</script>
{% endraw %}
