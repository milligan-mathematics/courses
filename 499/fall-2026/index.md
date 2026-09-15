---
layout: course
title: "MATH 499 · Fall 2026: Logistic Regression"
parent: Home
nav_order: 4991
hide_from_home: true
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/math411.css">

# Logistic Regression for Financial Distress

<p style="font-size:0.9rem;color:#6E6E6E;margin-top:-0.5rem">Part of
<a href="{{ site.baseurl }}/499/">MATH 499: Mentored Research</a> &middot; Fall 2026</p>

<p class="day-blurb">Four working sessions. By the end you should be able to build, diagnose, and defend a
logistic regression baseline on imbalanced financial data — and explain every choice you made.</p>

## Why this unit exists

Two papers in our reading point the same direction.

In **Zięba, Tomczak & Tomczak (2016)** — the paper attached to our Polish bankruptcy dataset — logistic
regression scores an AUC of exactly $0.500$ on two of the five prediction tasks. An AUC of $0.500$ is a coin
flip. A logistic regression on 64 financial ratios should not perform at chance, so that number is not
telling us something about logistic regression. It is telling us something about how the baseline was built.

In **Bao, Ke, Li, Yu & Zhang (2020)**, the accounting fraud paper, the opposite happened. Once
**Walker (2021)** undid a relabelling of 17 AAER identifiers, the boosted ensemble's positive predictive
value fell from $4.5\%$ to $2.5\%$ — below the $2.63\%$ achieved by Dechow et al.'s seven-variable logistic
regression from 2011. A nine-year-old logit beat the state of the art.

So logistic regression is at once **the thing our project has to beat** and **the thing the literature most
often does badly**. If we cannot build a defensible one, we cannot make any honest claim about whether
machine learning is an improvement. That claim is the whole argument of our project, and this unit is its
foundation.

## The four sessions

<div class="day-grid">
  <a class="day-card" href="logistic-01.html"><span class="n">Session 1</span><span class="t">From a Line to a Probability</span></a>
  <a class="day-card" href="logistic-02.html"><span class="n">Session 2</span><span class="t">Fitting, and How Fitting Fails</span></a>
  <a class="day-card" href="logistic-03.html"><span class="n">Session 3</span><span class="t">Making It Defensible</span></a>
  <a class="day-card" href="logistic-04.html"><span class="n">Session 4</span><span class="t">Judging a Rare-Event Model</span></a>
</div>

## Capstone

Write up the careful baseline — data handling, model specification, diagnostics, metric justification,
results — as two or three pages with one figure. This is not a practice exercise. It becomes **Milestone 2
of MATH 499B**, and it is the number every machine learning model in this project gets measured against.

## Reading

| Source | Use |
| --- | --- |
| *An Introduction to Statistical Learning with Python* (ISLP), Chapter 4 | Primary text. Free PDF at [statlearning.com](https://www.statlearning.com/). |
| Hosmer, Lemeshow & Sturdivant, *Applied Logistic Regression* | Depth on diagnostics and separation when ISLP is too brief. |
| Dechow, Ge, Larson & Sloan (2011), "Predicting Material Accounting Misstatements" | The F-Score model — the seven-variable logit that beat Bao et al. once corrected. |
| [scikit-learn `LogisticRegression`](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html) | Know your defaults, especially the automatic L2 penalty. |

## A note on how we work through this

Neither of us should be typing code we cannot explain. Use AI freely to explain a concept, to debug an error
message, or to check whether our reasoning holds — and be able to reconstruct any line we keep. If we cannot
say why a preprocessing step is there, it should not be there.

<p style="font-size:0.85rem;color:#6E6E6E;margin-top:2rem">Every number and figure on these pages is computed
live in your browser from seeded synthetic data, so the values are reproducible but the data is not real. The
patterns are built to mirror the Polish dataset: one informative ratio, heavy right skew, a second variable on
a wildly different scale, and a rare positive class.</p>
