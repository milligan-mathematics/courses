---
layout: section
title: "MATH 303: GeoGebra Interactives"
course_title: "MATH 303: Multivariable Calculus"
course_url: "/303/"
---

<style>
.gg-toc { display: flex; flex-wrap: wrap; gap: 0.5rem 0.75rem; padding: 0; margin: 0 0 var(--spacing-lg) 0; list-style: none; }
.gg-toc a { display: inline-block; padding: 0.3rem 0.7rem; border-radius: 999px; background: var(--bg-card, #fff);
  box-shadow: var(--shadow-card); font-size: 0.85rem; font-weight: bold; text-decoration: none; white-space: nowrap; }
.gg-secnav { font-size: 0.85rem; color: var(--text-muted); margin: -0.4rem 0 1.2rem 0; }
.gg-secnav a { text-decoration: none; }
.gg-item { background: var(--bg-card, #fff); border-radius: 12px; padding: var(--spacing-md) var(--spacing-lg);
  box-shadow: var(--shadow-card); border-left: 4px solid var(--color-accent-blue); margin-bottom: var(--spacing-md); }
.gg-item h4.gg-name { font-family: var(--font-primary); font-size: 1.05rem; margin: 0 0 0.15rem 0;
  display: flex; align-items: baseline; justify-content: space-between; gap: 0.75rem; }
.gg-item h4.gg-name a { text-decoration: none; }
.gg-item h4.gg-name a:hover { text-decoration: underline; }
.gg-app { flex: none; font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.06em; font-weight: bold;
  color: var(--color-primary); border: 1px solid currentColor; border-radius: 4px; padding: 0.05rem 0.35rem; }
.gg-meta { font-size: 0.78rem; color: var(--text-muted); margin: 0 0 0.6rem 0; }
.gg-note { font-size: 0.82rem; margin: 0 0 0.6rem 0; padding: 0.4rem 0.6rem; border-radius: 6px;
  background: rgba(243, 110, 36, 0.09); border-left: 3px solid var(--color-primary); }
.gg-what { margin: 0 0 0.7rem 0; }
.gg-try-h { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.07em; font-weight: bold;
  color: var(--color-accent-green); margin: 0 0 0.3rem 0; }
.gg-try { margin: 0; padding-left: 1.2rem; }
.gg-try li { margin-bottom: 0.28rem; }
.gg-xref { font-size: 0.88rem; color: var(--text-muted); margin: 0 0 var(--spacing-md) 0; }
@media (prefers-color-scheme: dark) { .gg-note { background: rgba(243, 110, 36, 0.16); } }
</style>

# GeoGebra Interactives

Every GeoGebra applet used in the MATH 303 notes, gathered in one place and organized by section. These are the same links that appear scattered through the lecture notes — this page just puts them in order so you can find one again after class, or browse ahead.

Each entry says what the applet shows and suggests a few things to look for. **Work the "things to try" prompts with a pencil in hand.** Most of them ask you to predict something, or to check the applet's answer against one you computed yourself — that is where the learning actually happens. Dragging sliders while watching passively is a lot less useful than it feels.

<ul class="gg-toc">
<li><a href="#ch11">Chapter 11</a></li>
<li><a href="#ch12">Chapter 12</a></li>
<li><a href="#ch13">Chapter 13</a></li>
<li><a href="#ch14">Chapter 14</a></li>
<li><a href="#ch15">Chapter 15</a></li>
</ul>

## Chapter 11 &middot; Vectors and the Geometry of Space {#ch11}

<p class="gg-secnav">Jump to: <a href="#s11-2">&sect;11.2</a> &middot; <a href="#s11-3">&sect;11.3</a> &middot; <a href="#s11-4">&sect;11.4</a> &middot; <a href="#s11-5">&sect;11.5</a> &middot; <a href="#s11-6">&sect;11.6</a></p>

### &sect;11.2 &mdash; Vectors and Vector Algebra {#s11-2}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/rfcdrspt" target="_blank" rel="noopener">Points between two points</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.2 Example 5 Creating points in between points&rdquo; &middot; linked from p.&nbsp;3 of the &sect;11.2 notes</p>
  <p class="gg-what">The point $R = P + t(Q-P)$ slides along the line through $P=(-2,4,1)$ and $Q=(3,2,-1)$ as you drag $t$, with the vector $t\mathbf{v}$ drawn from $P$ so you can see the scaling happen.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Which value of $t$ puts $R$ exactly at the midpoint? Predict it before you slide.</li>
    <li>What part of the line do you get from $0 \le t \le 1$? What does $t < 0$ give you?</li>
    <li>Watch the arrow $t\mathbf{v}$ as $t$ passes through $0$ and then goes negative.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/calculator/zxkp3hp3" target="_blank" rel="noopener">Linear combinations (Exercise 39)</a><span class="gg-app">Graphing</span></h4>
  <p class="gg-meta">saved as &ldquo;11.2 Exercise 39 Linear combination of vectors&rdquo; &middot; linked from p.&nbsp;4 of the &sect;11.2 notes</p>
  <p class="gg-what">Two sliders scale $\mathbf{u} = \langle 2,3\rangle$ and $\mathbf{v} = \langle 0,1\rangle$, and the sum $a\mathbf{u} + b\mathbf{v}$ is drawn as you go. The target vector $\mathbf{w} = \langle 1,2\rangle$ is also plotted.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Hunt for the $a$ and $b$ that land the sum exactly on $\mathbf{w}$, then solve the system by hand and compare.</li>
    <li>Can you reach <em>every</em> vector in the plane this way? Try a few targets by eye.</li>
    <li>What would go wrong if $\mathbf{v}$ were a scalar multiple of $\mathbf{u}$?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/calculator/zz25vyxt" target="_blank" rel="noopener">Hanging weight / tension (Example 7)</a><span class="gg-app">Graphing</span></h4>
  <p class="gg-meta">saved as &ldquo;11.2 Example 7&rdquo; &middot; linked from p.&nbsp;4 of the &sect;11.2 notes</p>
  <p class="gg-what">A $10$-unit weight hangs from two cables at $155^\circ$ and $60^\circ$. Sliders control the two tension magnitudes and the resultant of all three vectors is drawn.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Adjust both magnitudes until the three vectors sum to zero — that is the equilibrium condition.</li>
    <li>Which cable carries more tension, and does that match your intuition from the angles?</li>
    <li>Make one cable nearly horizontal. What happens to the tension it must carry?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/classic/hds4bpf6" target="_blank" rel="noopener">Airplane and crosswind (Exercise 86)</a><span class="gg-app">Classic</span></h4>
  <p class="gg-meta">saved as &ldquo;11.2 Exercise #86&rdquo; &middot; linked from p.&nbsp;5 of the &sect;11.2 notes</p>
  <p class="gg-what">An intended course of $\langle -600, 0\rangle$ is corrected against an $80$-unit wind blowing in the direction $\langle \sqrt3, -1\rangle$. The applet builds the corrected heading and reports the angle between it and the original course.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Read the angle off the applet, then reproduce it with $\cos\theta = \frac{\mathbf{u}\cdot\mathbf{v}}{\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert}$.</li>
    <li>Why is the corrected course <em>longer</em> than $600$? What is the plane trading away?</li>
    <li>Which direction would the wind have to blow for no correction to be needed?</li>
  </ul>
</div>

### &sect;11.3 &mdash; The Dot Product {#s11-3}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/vks9zauc" target="_blank" rel="noopener">Dot product, both formulas at once</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;Dot product&rdquo; &middot; linked from p.&nbsp;1 of the &sect;11.3 notes</p>
  <p class="gg-what">Drag two vectors in 3D and the applet displays the dot product computed two ways side by side — componentwise as $u_1v_1+u_2v_2+u_3v_3$, and geometrically as $\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert\cos\theta$ — along with the projections.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Drag until the dot product reads zero. What is the angle? Now make it negative.</li>
    <li>The two formulas always agree. Which one is easier to compute, and which one tells you more?</li>
    <li>Make the vectors nearly parallel. What happens to the projection of one onto the other?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/fzjdukkm" target="_blank" rel="noopener">Splitting a vector (Example 6)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.3 Example 6&rdquo; &middot; linked from p.&nbsp;5 of the &sect;11.3 notes</p>
  <p class="gg-what">For $\mathbf{u} = \langle 4,-1,3\rangle$ and $\mathbf{v} = \langle -3,0,1\rangle$, the applet draws $\mathbf{u}_1 = \operatorname{proj}_{\mathbf{v}}\mathbf{u}$ and the leftover piece $\mathbf{u}_2 = \mathbf{u} - \mathbf{u}_1$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Confirm visually that $\mathbf{u}_1 + \mathbf{u}_2$ really does reassemble $\mathbf{u}$.</li>
    <li>Check that $\mathbf{u}_2$ is perpendicular to $\mathbf{v}$ — compute $\mathbf{u}_2\cdot\mathbf{v}$ by hand.</li>
    <li>Which of the two pieces is "the part of $\mathbf{u}$ along $\mathbf{v}$"?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/afazyh3k" target="_blank" rel="noopener">Planes are solution sets to dot product equations</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.3 Planes are solution sets to dot product equations&rdquo; &middot; linked from p.&nbsp;6 of the &sect;11.3 notes</p>
  <p class="gg-what">Sliders $a,b,c,d$ control the plane $ax+by+cz=d$. The normal $\mathbf{n}=\langle a,b,c\rangle$ is drawn, a point $P$ is constrained to the plane, and the applet reports $\mathbf{n}\cdot\mathbf{p}$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Drag $P$ all over the plane. Why does $\mathbf{n}\cdot\mathbf{p}$ never change?</li>
    <li>Change $d$ only. How does the plane move, and why does its direction stay fixed?</li>
    <li>This is the single most useful idea in §11.3 and §11.5 — say in one sentence what $d$ measures.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/calculator/hucxkqsu" target="_blank" rel="noopener">Thales' theorem (Exercise 53)</a><span class="gg-app">Graphing</span></h4>
  <p class="gg-meta">saved as &ldquo;11.3 Exercise 53 Thales&#x27;&rdquo; &middot; linked from p.&nbsp;7 of the &sect;11.3 notes</p>
  <p class="gg-what">A circle with $\overline{AB}$ as a diameter, plus a point $P$ you can drag anywhere on the circle. The applet tracks the angle $\angle APB$ and the vectors $\vec{PA}$ and $\vec{PB}$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Drag $P$ all the way around. What does the angle do — and why is that surprising?</li>
    <li>Write $\vec{PA}$ and $\vec{PB}$ in terms of the radius vectors, then show their dot product is zero.</li>
    <li>Where does the proof use the fact that $\overline{AB}$ passes through the center?</li>
  </ul>
</div>

### &sect;11.4 &mdash; The Cross Product {#s11-4}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/apdn25jk" target="_blank" rel="noopener">What the cross product measures</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.4 Cross product meaning&rdquo; &middot; linked from p.&nbsp;1 of the &sect;11.4 notes</p>
  <p class="gg-what">Six sliders set two vectors. The applet draws the parallelogram they span, splits $\mathbf{u}$ into components parallel and perpendicular to $\mathbf{v}$, and compares the parallelogram area with $\lVert\mathbf{u}\times\mathbf{v}\rVert$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>The area readout and the cross-product magnitude readout always match. Convince yourself why via $\lVert\mathbf{u}\rVert\sin\theta$.</li>
    <li>Make the two vectors parallel. What happens to the area, and to $\mathbf{u}\times\mathbf{v}$?</li>
    <li>Keep $\mathbf{v}$ fixed and slide $\mathbf{u}$ along its own direction. Why does the area not change?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/classic/dqthffz9" target="_blank" rel="noopener">The $2\times2$ determinant is an area</a><span class="gg-app">Classic</span></h4>
  <p class="gg-meta">saved as &ldquo;11.4 2 by 2 determinant&rdquo; &middot; linked from p.&nbsp;2 of the &sect;11.4 notes</p>
  <p class="gg-what">Sliders $a,b,c,d$ build the parallelogram spanned by $\langle a,c\rangle$ and $\langle b,d\rangle$, dissected into rectangles and triangles that show geometrically why the area is $ad-bc$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Swap the two columns. The parallelogram is unchanged but the determinant flips sign — what is the sign recording?</li>
    <li>Find slider settings that make the determinant $0$. What is true about the two vectors then?</li>
    <li>Follow one triangle of the dissection as you drag $b$. Which term of $ad-bc$ is it accounting for?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/bycyvhhj" target="_blank" rel="noopener">Everything is a plane if you zoom in far enough</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.4 Everything is a plane&rdquo; &middot; linked from p.&nbsp;3 of the &sect;11.4 notes</p>
  <p class="gg-what">The surface $z = \sin x\cos y$ with a draggable point and its tangent plane attached.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Pick a point, then zoom in hard. How far do you have to zoom before surface and plane are indistinguishable?</li>
    <li>Find a point where the tangent plane is horizontal. What is special about it?</li>
    <li>This is the whole idea behind differentiability in §13.6 — try to state it before you get there.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/neuqzhte" target="_blank" rel="noopener">Plane through three points (Example 3)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.4 Ex 3&rdquo; &middot; linked from p.&nbsp;3 of the &sect;11.4 notes</p>
  <p class="gg-what">Points $P=(-2,1,3)$, $Q=(4,-3,1)$, $R=(5,5,3)$ with $\mathbf{u}=R-P$, $\mathbf{v}=Q-P$ and the normal $\mathbf{n}=\mathbf{u}\times\mathbf{v}$. A slider moves the constant $d$ in $\mathbf{n}\cdot\langle x,y,z\rangle = d$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Slide $d$ until the plane catches all three points. Then compute $\mathbf{n}\cdot P$ by hand and compare.</li>
    <li>Why do $Q-P$ and $R-P$ work as edge vectors, but $Q$ and $R$ themselves would not?</li>
    <li>Would $\mathbf{v}\times\mathbf{u}$ give a different plane? A different equation?</li>
  </ul>
</div>

### &sect;11.5 &mdash; Describing Lines and Planes {#s11-5}

<p class="gg-xref">Page&nbsp;3 of these notes also reuses <a href="https://www.geogebra.org/3d/afazyh3k" target="_blank" rel="noopener">Planes are solution sets to dot product equations</a>, listed above under <a href="#s11-3">&sect;11.3</a>.</p>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/szgagvpm" target="_blank" rel="noopener">Line where two planes meet (Example 9)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.5 Example 9&rdquo; &middot; linked from p.&nbsp;4 of the &sect;11.5 notes</p>
  <p class="gg-what">The planes $x-2y+4z=7$ and $2x-y+3z=0$ with both normals drawn, their cross product, and the resulting line of intersection.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Why must the cross product of the two normals point <em>along</em> the line?</li>
    <li>The applet finds one point on the line by setting $z=0$. Do that algebraically and check it.</li>
    <li>What would you see here if the two planes were parallel?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/hdrufagw" target="_blank" rel="noopener">Distance from a point to a plane (Example 10)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.5 Ex 10&rdquo; &middot; linked from p.&nbsp;5 of the &sect;11.5 notes</p>
  <p class="gg-what">The point $A=(3,1,-2)$ and the plane $2x-3y+6z=2$. A draggable point $B$ sits in the plane; the applet projects $\vec{BA}$ onto the normal and reports the length.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Drag $B$ far across the plane. Why is the distance readout completely unmoved?</li>
    <li>The projection onto $\mathbf{n}$ is doing all the work. Write out the formula it is computing.</li>
    <li>Where would $B$ have to be for $\vec{BA}$ itself to be the shortest path?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/nqk6abau" target="_blank" rel="noopener">Distance between skew lines (Example 11)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.5 Example 11&rdquo; &middot; linked from p.&nbsp;5 of the &sect;11.5 notes</p>
  <p class="gg-what">Two skew lines with direction vectors $\langle -1,2,1\rangle$ and $\langle 2,-1,-1\rangle$, their common normal $\mathbf{n}$, and draggable points $A$, $B$ on the two lines with $\vec{AB}$ projected onto $\mathbf{n}$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Drag $A$ and $B$ independently. The projection onto $\mathbf{n}$ never changes — why is that the distance?</li>
    <li>Confirm the lines really are skew: show they are not parallel and do not intersect.</li>
    <li>One copy of the first line is translated by the projection. What does the translated line touch?</li>
  </ul>
</div>

### &sect;11.6 &mdash; Cylinders and Quadric Surfaces {#s11-6}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/a9gveaur" target="_blank" rel="noopener">Cylinders in 3D (Example 1)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.6 Ex 1 Cylinders in 3D&rdquo; &middot; linked from p.&nbsp;1 of the &sect;11.6 notes</p>
  <p class="gg-what">The same three conic equations as the warm-up, now graphed in space where the missing third variable turns each curve into a cylinder.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Each surface is a curve "extruded" along an axis. Which axis, and how do you tell from the equation?</li>
    <li>Compare directly against the 2D version — the cross-section is the conic you already know.</li>
    <li>Write down an equation for a cylinder running along the $x$-axis instead.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/w8aczvw9" target="_blank" rel="noopener">Cylinders needing completing the square (Example 2)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.6 Ex 2&rdquo; &middot; linked from p.&nbsp;1 of the &sect;11.6 notes</p>
  <p class="gg-what">$4y^2-16y+9z^2-18z=11$ and $z^2+2z-4x^2=3$ — two cylinders whose equations hide their centers until you complete the square.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Complete the square on both. Where is each cylinder centered, and along which axis does it run?</li>
    <li>Which one is elliptic and which hyperbolic? Predict from the signs before you look.</li>
    <li>Notice that no variable is missing by <em>accident</em> — check which one is genuinely absent.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/calculator/e5kcduur" target="_blank" rel="noopener">Conic sections warm-up</a><span class="gg-app">Graphing</span></h4>
  <p class="gg-meta">saved as &ldquo;11.6 Conic sections&rdquo; &middot; linked from p.&nbsp;1 of the &sect;11.6 notes</p>
  <p class="gg-what">A 2D refresher: $\frac{x^2}{a^2} \pm \frac{y^2}{b^2} = c$ and $\frac{y}{b} = \frac{x^2}{a^2} + c$ with $a$, $b$, $c$ on sliders.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Which sign choice gives an ellipse and which a hyperbola? Change $c$ to negative and watch a hyperbola swap branches.</li>
    <li>What does $c=0$ give you in each of the three equations?</li>
    <li>These are exactly the traces you will meet in 3D on the next few applets — get fluent here first.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/f8ms2zjn" target="_blank" rel="noopener">Reading a surface from its traces (Example 3)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.6 Example 3&rdquo; &middot; linked from p.&nbsp;2 of the &sect;11.6 notes</p>
  <p class="gg-what">The surface $x^2+4y^2+4z=0$ with three movable cutting planes $x=k$, $y=k$, $z=k$ that draw the trace curve where each slices the surface.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Slide each plane and name the trace: parabola, ellipse, hyperbola, or nothing at all.</li>
    <li>For which values of $k$ does the $z=k$ trace disappear entirely? What does that tell you about the surface?</li>
    <li>From the three families of traces alone, could you have identified this surface?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/w7kpdgck" target="_blank" rel="noopener">The six quadric surfaces, side by side</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.6 Quadric Surfaces&rdquo; &middot; linked from p.&nbsp;2 of the &sect;11.6 notes</p>
  <p class="gg-what">All six standard quadrics — ellipsoid, hyperboloid of one and of two sheets, elliptic cone, hyperbolic paraboloid, elliptic paraboloid — each labeled, sharing the sliders $a,b,c$, with the coordinate planes shown for cutting traces.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Line the equations up and count minus signs. How does the count predict which surface you get?</li>
    <li>Compare the one-sheet and two-sheet hyperboloids. Exactly one sign differs — find it.</li>
    <li>Change $c$ and watch which surfaces stretch. Which slider controls which axis?</li>
    <li>Cover the labels and identify each surface from its equation. This is the §11.6 exam skill.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/ahstjnkz" target="_blank" rel="noopener">Hyperbolic paraboloid traces (Example 4)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.6 Example 4&rdquo; &middot; linked from p.&nbsp;3 of the &sect;11.6 notes</p>
  <p class="gg-what">$\frac{y^2}{9} - \frac{z^2}{4} = \frac{x}{5}$ with the three movable trace planes.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Which slice directions give hyperbolas and which give parabolas?</li>
    <li>Find the value of $k$ where the trace degenerates into a pair of crossing lines.</li>
    <li>This is a saddle. Where is the saddle point, and which way is "uphill" from it?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/fphsgeex" target="_blank" rel="noopener">A shifted quadric (Example 5)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.6 Ex 5&rdquo; &middot; linked from p.&nbsp;3 of the &sect;11.6 notes</p>
  <p class="gg-what">$9x^2-9y^2-4z^2+18y+16z=61$, with three independent trace sliders so you can cut in all three directions at once.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Complete the square in $y$ and in $z$. Where is the center, and what is the surface once re-centered?</li>
    <li>Predict the surface type from the sign pattern $(+,-,-)$ before you cut anything.</li>
    <li>Use the traces to check your prediction rather than trusting the picture alone.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/pfzbtrgj" target="_blank" rel="noopener">Is the Earth a sphere? (Exercise 47)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;11.6 #47 Earth&rdquo; &middot; linked from p.&nbsp;4 of the &sect;11.6 notes</p>
  <p class="gg-what">The Earth as the ellipsoid with equatorial radius $6378$ km and polar radius $6357$ km, drawn together with a sphere of the mean radius for comparison.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>The two surfaces are nearly indistinguishable. Compute the percent difference between the radii.</li>
    <li>Exaggerate the flattening with the sliders until you can actually see it. How far did you have to go?</li>
    <li>Would treating the Earth as a sphere be a defensible modeling choice? For what questions would it not be?</li>
  </ul>
</div>

## Chapter 12 &middot; Vector-Valued Functions and Motion in Space {#ch12}

<p class="gg-secnav">Jump to: <a href="#s12-1">&sect;12.1</a> &middot; <a href="#s12-2">&sect;12.2</a> &middot; <a href="#s12-3">&sect;12.3</a></p>

### &sect;12.1 &mdash; Vector-Valued Functions {#s12-1}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/ggwtqbez" target="_blank" rel="noopener">Epsilon–delta for a vector-valued function</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;12.1 Epsilon-Delta for vector valued functions&rdquo; &middot; linked from p.&nbsp;1 of the &sect;12.1 notes</p>
  <p class="gg-what">The helix with a target point $\mathbf{L}$, a sphere of radius $\varepsilon$ around it, and the sub-arc corresponding to $0 < |t-a| < \delta$ highlighted. Both $\varepsilon$ and $\delta$ are sliders.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Shrink $\varepsilon$, then find a $\delta$ that keeps the whole highlighted arc inside the sphere.</li>
    <li>Can you always win this game? What would the picture look like if the limit did not exist?</li>
    <li>Compare with the single-variable version linked in the same section — what replaced the interval?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/jc6ygcm6" target="_blank" rel="noopener">A helix and its shadows (Example 1)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;12.1 Ex 1&rdquo; &middot; linked from p.&nbsp;1 of the &sect;12.1 notes</p>
  <p class="gg-what">The helix $\mathbf{r}(t) = \langle \cos t, \sin t, t\rangle$ drawn together with the two component curves $\langle\cos t,0,t\rangle$ and $\langle 0,\sin t,t\rangle$ and the circle it projects onto in the $xy$-plane.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Each "shadow" is one component function. Which coordinate plane is each drawn in?</li>
    <li>Why is the projection into the $xy$-plane a circle traced over and over?</li>
    <li>Slide the point and watch all three curves at once — this is what "vector-valued" means.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/calculator/whmur5zg" target="_blank" rel="noopener">Epsilon–delta in one variable (review)</a><span class="gg-app">Graphing</span></h4>
  <p class="gg-meta">saved as &ldquo;2.3 Epsilon-delta definition of limit y=3x-2&rdquo; &middot; linked from p.&nbsp;1 of the &sect;12.1 notes</p>
  <p class="gg-what">The familiar 2D $\varepsilon$–$\delta$ picture for a linear function, with $c$, $\delta$ and $\varepsilon$ on sliders and the $\delta$-interval and $\varepsilon$-band drawn and labeled.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Pick an $\varepsilon$, then find the largest $\delta$ that works. Now halve $\varepsilon$ — what happened to $\delta$?</li>
    <li>For a line of slope $m$, there is a formula relating $\delta$ and $\varepsilon$. Work it out from the picture.</li>
    <li>Carried into 3D, the $\varepsilon$-band becomes a sphere. Look at the vector-valued applet next.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/zm9ubmj8" target="_blank" rel="noopener">Curve as an intersection (Example 3)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;12.1 EX 3&rdquo; &middot; linked from p.&nbsp;2 of the &sect;12.1 notes</p>
  <p class="gg-what">$\mathbf{r}(t) = \langle 2\cos t, 2\sin t, 2-2\cos t\rangle$ shown as the intersection of the cylinder $x^2+y^2=4$ with the plane $x+z=2$, with a tangent vector at a draggable $t$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Verify algebraically that every point of $\mathbf{r}(t)$ satisfies both equations.</li>
    <li>The curve is an ellipse, but it is not in a coordinate plane. Which plane is it in?</li>
    <li>Where along the curve is the tangent vector horizontal?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/ub9rnbgz" target="_blank" rel="noopener">Derivative of a space curve (Example 4)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;12.1 Ex 4&rdquo; &middot; linked from p.&nbsp;3 of the &sect;12.1 notes</p>
  <p class="gg-what">$\mathbf{r}(t) = \langle t^3-t,\; e^{-t},\; \ln t\rangle$ with the derivative curve and the tangent vector at a draggable parameter value.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Why does the slider refuse to go to $t \le 0$? Which component is responsible?</li>
    <li>Differentiate each component by hand and check the tangent vector at $t=1$.</li>
    <li>Find where the curve doubles back on itself in the $x$-direction. What is $x'(t)$ there?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/rgdrsdbf" target="_blank" rel="noopener">Tangent line to a helix (Example 5)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;12.1 Ex 5&rdquo; &middot; linked from p.&nbsp;4 of the &sect;12.1 notes</p>
  <p class="gg-what">The helix with the tangent line drawn at $t=\pi/4$, where the point of tangency is $\left(\tfrac{1}{\sqrt2}, \tfrac{1}{\sqrt2}, \tfrac{\pi}{4}\right)$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Compute $\mathbf{r}'(\pi/4)$ by hand and match it against the drawn direction.</li>
    <li>Write the parametric equations of that tangent line.</li>
    <li>Rotate the view until the tangent line looks like it lies <em>on</em> the helix. Why is that an illusion?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/zdcseysm" target="_blank" rel="noopener">A curve constrained to a sphere (Example 6)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;12.1 Ex 6&rdquo; &middot; linked from p.&nbsp;5 of the &sect;12.1 notes</p>
  <p class="gg-what">The curve $\mathbf{c}(t) = \frac{\langle t, t^2, 1\rangle}{\sqrt{t^2+t^4+1}}$, which lives entirely on the unit sphere, drawn with the sphere, its derivative curve, and several companion spherical curves.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Show that $\lVert\mathbf{c}(t)\rVert = 1$ for every $t$ — that is why it never leaves the sphere.</li>
    <li>Differentiate $\mathbf{c}\cdot\mathbf{c} = 1$. What does the result say about $\mathbf{c}$ and $\mathbf{c}'$?</li>
    <li>Check that conclusion against the picture: is the tangent vector ever pointing away from the sphere?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/srenuab6" target="_blank" rel="noopener">Projectile motion (Example 7)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;12.1 Ex 7&rdquo; &middot; linked from p.&nbsp;6 of the &sect;12.1 notes</p>
  <p class="gg-what">$\mathbf{r}(t) = \langle 0,\; 10t,\; -16t^2+64t\rangle$ for $0 \le t \le 4$, with the velocity and acceleration vectors drawn as the point moves.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>The acceleration vector never changes. What is it, and why?</li>
    <li>At what time is the velocity horizontal? What is the height there?</li>
    <li>The motion is planar even though it lives in 3D. Which plane, and what in the formula tells you?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/brsmfyzf" target="_blank" rel="noopener">Tangent line to a curve (Exercise 58)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;12.1 #58&rdquo; &middot; linked from p.&nbsp;7 of the &sect;12.1 notes</p>
  <p class="gg-what">$\mathbf{s}(t) = \langle t, \sin 2t, \cos 2t\rangle$ with the tangent vector and tangent line at a draggable parameter value.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>This is a helix, but wound around which axis? Compare with the standard one.</li>
    <li>Compute $\lVert\mathbf{s}'(t)\rVert$. Is it constant? What does that mean physically?</li>
    <li>Slide along the curve. Does the tangent vector change length, direction, or both?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/g8uebzun" target="_blank" rel="noopener">Recovering position from acceleration (Exercise 83)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;12.1 #83&rdquo; &middot; linked from p.&nbsp;7 of the &sect;12.1 notes</p>
  <p class="gg-what">$\mathbf{r}(t) = \left\langle \tfrac{t^3}{3}+3t-5,\; \tfrac{t^2}{2}+t,\; -t+2 \right\rangle$ with position, velocity and acceleration vectors all drawn and the initial conditions $\mathbf{r}(0)$ and $\mathbf{v}(0)$ marked.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Start from the acceleration and integrate twice. The two constants of integration are the marked initial vectors.</li>
    <li>Check that $\mathbf{r}(0) = \langle -5,0,2\rangle$ and $\mathbf{v}(0) = \langle 3,1,-1\rangle$.</li>
    <li>The $z$-component is linear. What does that say about the $z$-acceleration?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/m4guhs8w" target="_blank" rel="noopener">Intersection of cylinder and surface (Exercise 25)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;12.1 #25&rdquo; &middot; linked from p.&nbsp;7 of the &sect;12.1 notes</p>
  <p class="gg-what">The curve $\langle \cos t, \sin t, 2\cos^2 t - \sin^2 t\rangle$ shown as the intersection of the cylinder $x^2+y^2=1$ with the surface $2x^2-y^2=z$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Substitute the parametrization into both equations and confirm they hold identically.</li>
    <li>Why does the cylinder force $x^2+y^2=1$, and how does that pin down the first two components?</li>
    <li>The $z$-component oscillates. Between what two values, and where are the extremes?</li>
  </ul>
</div>

### &sect;12.2 &mdash; Arc Length and the Unit Tangent Vector {#s12-2}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/vzv6tz3v" target="_blank" rel="noopener">Arc length along a helix (Example 1)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;12.2 Ex 1 arc length helix&rdquo; &middot; linked from p.&nbsp;1 of the &sect;12.2 notes</p>
  <p class="gg-what">$\mathbf{r}(t) = \langle \cos t, t/2, \sin t\rangle$ on $[0,4\pi]$, with the speed readout, the accumulated arc length, and a second copy of the curve reparametrized by arc length so it is traced at unit speed.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Compute $\lVert\mathbf{r}'(t)\rVert$ by hand. It is constant — which makes arc length just speed times time.</li>
    <li>Check the total length readout against $\lVert\mathbf{r}'\rVert \cdot 4\pi$.</li>
    <li>Run both sliders. The unit-speed copy covers equal distance in equal slider steps; the original does not always.</li>
  </ul>
</div>

<p class="gg-xref">Page&nbsp;2 of these notes also reuses <a href="https://www.geogebra.org/3d/zdcseysm" target="_blank" rel="noopener">A curve constrained to a sphere (Example 6)</a>, listed above under <a href="#s12-1">&sect;12.1</a>.</p>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/classic/fhmxtyw9" target="_blank" rel="noopener">First Fundamental Theorem of Calculus (review)</a><span class="gg-app">Classic</span></h4>
  <p class="gg-meta">saved as &ldquo;First Fundamental Theorem of Calculus&rdquo; &middot; linked from p.&nbsp;2 of the &sect;12.2 notes</p>
  <p class="gg-note">Built by GeoGebra user jack.jackson, not by Dr. Lundholm.</p>
  <p class="gg-what">A single-variable refresher on accumulation: enter a function, pick a base point $a$, and watch the area function $A(x) = \int_a^x f'(t)\,dt$ build up alongside $f(x)-f(a)$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Change $a$. The area function shifts vertically but its shape does not change — why?</li>
    <li>Drag $x$ to the left of $a$. What happens to the sign of the accumulated area?</li>
    <li>This is the machinery behind the arc-length integral. Keep the accumulation picture in mind.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/wqn7kzyg" target="_blank" rel="noopener">Unit tangent vector (Example 3)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;12.2 Ex 3&rdquo; &middot; linked from p.&nbsp;4 of the &sect;12.2 notes</p>
  <p class="gg-what">$\mathbf{r}(t) = \langle \cos t, \sin t, \cos 3t\rangle$ with its speed $\sqrt{1+9\sin^2 3t}$, the unit tangent $\mathbf{T}$, and a separate curve tracing $\mathbf{T}(t)$ itself.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>This speed is <em>not</em> constant. Find where it is largest and smallest, and relate that to the picture.</li>
    <li>The traced $\mathbf{T}(t)$ curve stays on the unit sphere. Why must it?</li>
    <li>Compare $\mathbf{r}'(t)$ with $\mathbf{T}(t)$: same direction, different length. What did dividing by the speed cost you, and what did it buy?</li>
  </ul>
</div>

### &sect;12.3 &mdash; The TNB Frame, Curvature, and Torsion {#s12-3}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/rym6snhr" target="_blank" rel="noopener">The TNB frame on a helix</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;New TNB&rdquo; &middot; linked from p.&nbsp;1 of the &sect;12.3 notes</p>
  <p class="gg-what">The helix carrying its unit tangent $\mathbf{T}$, principal normal $\mathbf{N}$ and binormal $\mathbf{B}$, plus all three planes they determine (normal, rectifying, osculating) and a tube swept out around the curve.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Which plane contains $\mathbf{T}$ and $\mathbf{N}$? That is the osculating plane — the one the curve is momentarily bending inside.</li>
    <li>Watch $\mathbf{N}$ as the point moves. Where does it always point for a helix?</li>
    <li>Check $\mathbf{T}\times\mathbf{N} = \mathbf{B}$ using the right-hand rule at a few positions.</li>
    <li>The tube is built from $\mathbf{N}$ and $\mathbf{B}$ — see how the frame gives you a coordinate system that travels with the curve.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/u4jzjgsk" target="_blank" rel="noopener">TNB, planes, and a swept tube (Examples 1–3)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;12.3 Ex 1 and 2 and 3&rdquo; &middot; linked from p.&nbsp;1 of the &sect;12.3 notes</p>
  <p class="gg-what">The helix with $\mathbf{T}$, $\mathbf{N}$, $\mathbf{B}$ attached at a moving point, the three named planes, and a ribbon and tube that grow along the curve as you drag the slider. A companion plane curve is included for contrast.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Grow the tube from nothing. Which two frame vectors sweep out its cross-section?</li>
    <li>Stop partway and identify each of the three planes by which vector is normal to it.</li>
    <li>Compare with the plane curve: which frame vector becomes uninteresting when a curve is flat?</li>
  </ul>
</div>

## Chapter 13 &middot; Partial Derivatives {#ch13}

<p class="gg-secnav">Jump to: <a href="#s13-1">&sect;13.1</a> &middot; <a href="#s13-2">&sect;13.2</a> &middot; <a href="#s13-3">&sect;13.3</a> &middot; <a href="#s13-4">&sect;13.4</a> &middot; <a href="#s13-5">&sect;13.5</a> &middot; <a href="#s13-6">&sect;13.6</a> &middot; <a href="#s13-7">&sect;13.7</a> &middot; <a href="#s13-8">&sect;13.8</a></p>

### &sect;13.1 &mdash; Functions of Several Variables {#s13-1}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/xwujtahu" target="_blank" rel="noopener">Domains and level curves (Examples 1, 2, 5)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.1 Ex 1, 2, 5&rdquo; &middot; linked from p.&nbsp;1 of the &sect;13.1 notes</p>
  <p class="gg-what">$f(x,y) = \sqrt{y^2-x}$ and $g(x,y) = \ln(y-x)$, each with a family of level curves generated by slicing at many heights, plus the full surface $z^2 = y^2-x$ that $f$ is the upper half of.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Describe the domain of each function as a region in the plane, then check it against where the surface exists.</li>
    <li>The level curves of $f$ are parabolas; those of $g$ are lines. Verify both by setting $z = k$ and solving.</li>
    <li>Why is $f$ only half of the surface $z^2 = y^2 - x$? What happened to the other half?</li>
  </ul>
</div>

### &sect;13.2 &mdash; Limits and Continuity {#s13-2}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/ktr4py32" target="_blank" rel="noopener">A limit that fails (Example 1)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.2 Ex 1 limit&rdquo; &middot; linked from p.&nbsp;1 of the &sect;13.2 notes</p>
  <p class="gg-what">$f(x,y) = \dfrac{x^2-y^2}{x^2+y^2}$ with a circle of radius $\delta$ around the origin and the ring of surface heights above it, plus the bands $z = \pm\varepsilon$. Both $\delta$ and $\varepsilon$ are sliders.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Approach along $y=0$, then along $x=0$. You get two different values — so the limit cannot exist.</li>
    <li>Shrink $\delta$ toward zero. Does the ring of heights ever collapse to a single value?</li>
    <li>The height above the $\delta$-circle depends only on the <em>angle</em>. Substitute polar coordinates and see why.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/rapncnpe" target="_blank" rel="noopener">A limit that succeeds (Example 3)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.2 Ex 3&rdquo; &middot; linked from p.&nbsp;5 of the &sect;13.2 notes</p>
  <p class="gg-what">$f(x,y) = \dfrac{5x^2y}{x^2+y^2}$ sampled along the lines $y = mx$ and around a circle of radius $\delta$, with $\delta$ tied to $\varepsilon$ by $\delta = \varepsilon/5$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Slide $m$ through every slope. The limit along each line is $0$ — but why is that <em>not yet</em> a proof?</li>
    <li>The applet uses $\delta = \varepsilon/5$. Find the bound on $|f|$ that justifies that choice.</li>
    <li>Compare the shape of this surface near the origin with the previous example. What looks different?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/n8svvxud" target="_blank" rel="noopener">Lines are not enough (Exercise 27)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.2 #27&rdquo; &middot; linked from p.&nbsp;7 of the &sect;13.2 notes</p>
  <p class="gg-what">$f(x,y) = \dfrac{2x^{3/2}y}{x^3+y^2}$ sampled along straight lines $y=mx$, along parabolas $y = cx^2$, and along the curve $y = cx^{3/2}$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Check the limit along every line and every parabola. All zero — tempting, but keep going.</li>
    <li>Now switch to the $y = cx^{3/2}$ path. What value do you get, and how does it depend on $c$?</li>
    <li>Moral: testing lines can only ever <em>disprove</em> a limit. What would you need for a proof?</li>
  </ul>
</div>

### &sect;13.3 &mdash; Partial Derivatives {#s13-3}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/uaudtqnq" target="_blank" rel="noopener">Partials as slopes of trace curves (Example 1)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.3 Ex 1&rdquo; &middot; linked from p.&nbsp;1 of the &sect;13.3 notes</p>
  <p class="gg-what">$f(x,y) = x^3y^2-2x^2y-3x+y$ at the point $(1,1)$, with the two tangent lines in the $x$- and $y$-directions drawn with direction vectors $\langle 1,0,-4\rangle$ and $\langle 0,1,1\rangle$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Compute $f_x(1,1)$ and $f_y(1,1)$ by hand. Those numbers are the third components of the two direction vectors.</li>
    <li>Each tangent line lies in a vertical plane. Which plane, and what is held constant in it?</li>
    <li>One slope is negative and one positive. Walk the surface in each direction and feel the difference.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/classic/akgsfrgk" target="_blank" rel="noopener">Symbolic partial derivatives (Example 2)</a><span class="gg-app">Classic</span></h4>
  <p class="gg-meta">saved as &ldquo;13.3 Ex 2&rdquo; &middot; linked from p.&nbsp;2 of the &sect;13.3 notes</p>
  <p class="gg-what">GeoGebra's CAS doing the differentiation for you: three cells take $f(x,y,z) = x^2\sin(yz^3) - \ln(xyz)$ and return $f_x$, $f_y$ and $f_z$ symbolically, so you can check a messy three-variable computation against a machine.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Work all three partials out by hand first, then compare. The $-\ln(xyz)$ term is the one most people fumble.</li>
    <li>Why does differentiating $\ln(xyz)$ with respect to $x$ give just $1/x$, with no $y$ or $z$ left in it?</li>
    <li>In $f_z$ the chain rule bites hardest — check that you get $3x^2yz^2\cos(yz^3)$ and can say where each factor came from.</li>
    <li>Type in your own function and let the CAS confirm your work. <code>Derivative(f, x)</code> is the command.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/rvqdskaa" target="_blank" rel="noopener">Implicit partials on a cone (Example 3)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.3 Ex 3&rdquo; &middot; linked from p.&nbsp;3 of the &sect;13.3 notes</p>
  <p class="gg-what">The cone $z^2-4x^2-5y^2=0$ with movable trace planes $x=x_0$ and $y=y_0$, a point on the upper sheet, and the two tangent lines built from $z_x = 4x_0/z_0$ and $z_y = 5y_0/z_0$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Derive $z_x$ and $z_y$ by differentiating the equation implicitly, and match the applet.</li>
    <li>Drive the point toward the origin. Both formulas blow up — what goes wrong geometrically at the vertex?</li>
    <li>Why did we have to pick the upper sheet to talk about $z$ as a function of $x$ and $y$?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/r7gcavbe" target="_blank" rel="noopener">Partials exist but the function is not continuous (Example 9)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.3 Ex 9&rdquo; &middot; linked from p.&nbsp;6 of the &sect;13.3 notes</p>
  <p class="gg-what">The function equal to $1$ on the coordinate axes and $0$ everywhere else, with two draggable points and the line between them.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Walk toward the origin along the $x$-axis, then along the line $y=x$. Two different limits.</li>
    <li>Yet $f_x(0,0)$ and $f_y(0,0)$ both exist. Compute them from the definition — the difference quotients are along the axes.</li>
    <li>So "both partials exist" does not imply continuity, let alone differentiability. What extra condition is needed?</li>
  </ul>
</div>

### &sect;13.4 &mdash; The Chain Rule {#s13-4}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/vxr9utxs" target="_blank" rel="noopener">Chain rule along a curve (Example 2)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.4 Ex 2&rdquo; &middot; linked from p.&nbsp;3 of the &sect;13.4 notes</p>
  <p class="gg-what">The surface $f(x,y)=xy$ with a curve $\langle \sin 2t, \cos 3t, \sin 2t\cos 3t\rangle$ riding on it, the gradient $\nabla f = \langle y,x\rangle$, the curve's tangent vector, and the dot product $\nabla f \cdot \mathbf{r}'$ read out live.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>That readout is $\frac{df}{dt}$. Compute it the other way — differentiate $\sin 2t\cos 3t$ directly — and compare.</li>
    <li>Find a spot where $\frac{df}{dt}=0$. Is the gradient zero there, or just perpendicular to the motion?</li>
    <li>Speed up along the curve without changing direction. What happens to $\frac{df}{dt}$, and why?</li>
  </ul>
</div>

### &sect;13.5 &mdash; Directional Derivatives and Gradient Vectors {#s13-5}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/zycmym7e" target="_blank" rel="noopener">Directional derivative as a limit (Example 1)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.5 Ex 1&rdquo; &middot; linked from p.&nbsp;1 of the &sect;13.5 notes</p>
  <p class="gg-what">$f(x,y)=3xy$ at $P=(2,1,6)$ in the direction $\frac{\langle 1,-1\rangle}{\sqrt2}$. A slider shrinks the step $w$ while the difference quotient $\frac{f(Q)-f(2,1)}{w}$ is displayed.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Drive $w$ toward $0$ and watch the quotient settle. It converges to $-3/\sqrt2$.</li>
    <li>The secant line rotates into the tangent line as $w\to 0$ — the same story as first-semester calculus, on a slanted slice.</li>
    <li>Now compute $\nabla f(2,1)\cdot\mathbf{u}$ and check you get the same number with no limit at all.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/btw6mg2j" target="_blank" rel="noopener">Rotating the direction (Example 2)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.5 Ex 2&rdquo; &middot; linked from p.&nbsp;2 of the &sect;13.5 notes</p>
  <p class="gg-what">$f(x,y) = x^2y - e^{xy}$ at $P=(1,-1)$, with the gradient, the tangent plane, and a direction you can spin all the way around. The directional derivative in each direction is drawn, sweeping out a tilted circle.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Spin the direction and find where the directional derivative is largest. How does that direction compare with $\nabla f$?</li>
    <li>Find the two directions giving derivative zero. What are they perpendicular to?</li>
    <li>The swept curve is a tilted circle, not a blob. Why must the directional derivative be a <em>linear</em> function of direction?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/calculator/cnneep7x" target="_blank" rel="noopener">Gradient is perpendicular to level curves (Example 4)</a><span class="gg-app">Graphing</span></h4>
  <p class="gg-meta">saved as &ldquo;13.5 Ex 4&rdquo; &middot; linked from p.&nbsp;4 of the &sect;13.5 notes</p>
  <p class="gg-what">The level curve $(x-2)^2+4(y+1)^2=8$ of $f(x,y)=(x-2)^2+4(y+1)^2$, with a point you can drag around it, the gradient at that point, and the tangent line to the curve.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Drag the point all the way around. The gradient and the tangent line stay perpendicular everywhere.</li>
    <li>Where on the ellipse is the gradient longest? What does its length say about how crowded the level curves are?</li>
    <li>Prove the perpendicularity: differentiate $f(\mathbf{r}(t)) = \text{constant}$ along the curve.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/hyeah4wz" target="_blank" rel="noopener">Path on a hill, 3D view (Exercise 72)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.5 #72&rdquo; &middot; linked from p.&nbsp;7 of the &sect;13.5 notes</p>
  <p class="gg-what">The hill $z = 500-x^2-3y^2$ with the point $(5,25)$ marked and a family of cubic paths $y = wx^3$ lifted onto the surface, controlled by a slider.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Slide $w$ until the path passes through $(5,25)$. What is the required $w$?</li>
    <li>Follow your path uphill. Is it the steepest route, or is it cutting across the slope?</li>
    <li>Pair this with the 2D contour version listed next — the contour picture makes "steepest" much easier to judge.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/classic/a95gwh7u" target="_blank" rel="noopener">Same hill, contour view (Exercise 72)</a><span class="gg-app">Classic</span></h4>
  <p class="gg-meta">saved as &ldquo;13.5 #72&rdquo; &middot; linked from p.&nbsp;7 of the &sect;13.5 notes</p>
  <p class="gg-what">The contour map of $z = 500-x^2-3y^2$ drawn at heights from $500$ down to $-500$, with the point $(5,25)$, the cubic $y = x^3/5$, and an adjustable cubic $y = ax^3$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Find the $a$ that sends the cubic through $(5,25)$, and compare with the 3D version.</li>
    <li>Where does the path cross contours most nearly at right angles? That is where it is steepest.</li>
    <li>Sketch the gradient at $(5,25)$ on the contour map. Is the cubic heading that way?</li>
  </ul>
</div>

### &sect;13.6 &mdash; Tangent Planes and Differentials {#s13-6}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/qszzrdup" target="_blank" rel="noopener">Tangent plane via a level surface (Example 1)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.6 Ex 1&rdquo; &middot; linked from p.&nbsp;1 of the &sect;13.6 notes</p>
  <p class="gg-what">$f(x,y)=15-x^2-3y^2$, rewritten as the level surface $F(x,y,z)=x^2+3y^2+z=15$, with $\nabla F$, the tangent plane and the normal line at a point you steer with two sliders.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Compute $\nabla F$ by hand. Confirm it is normal to the surface, not tangent to it.</li>
    <li>Compare this route with the $z = f(x,y)$ route: the normal $\langle -f_x, -f_y, 1\rangle$ should point the same way.</li>
    <li>Move the point to the top of the dome. What happens to the tangent plane and the normal line there?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/cxyqd3hu" target="_blank" rel="noopener">Tangent plane and linearization (Example 2)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.6 Ex 2&rdquo; &middot; linked from p.&nbsp;2 of the &sect;13.6 notes</p>
  <p class="gg-what">$f(x,y)=\cos(xy)$ at $\left(\tfrac{\pi}{4},1,\tfrac{1}{\sqrt2}\right)$, with the level-surface gradient of $F = \cos(xy)-z$, the tangent plane, the linearization $T(x,y)$, and the level curves $xy = 2\pi k$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>The tangent plane and the linearization are the same object written two ways. Show the equations match.</li>
    <li>The level curves are hyperbolas $xy = $ constant. Why does that follow immediately from the form of $f$?</li>
    <li>Move away from the point of tangency. How far can you go before the linear approximation is visibly wrong?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/vwaucgmm" target="_blank" rel="noopener">How good is the linearization? (Example 4)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.6 Ex 4&rdquo; &middot; linked from p.&nbsp;4 of the &sect;13.6 notes</p>
  <p class="gg-what">$f(x,y)=(x-1)^2-y+(y-1)^4$ near $P=(2,1)$, drawn with its linearization $L$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Compute $L$ by hand from $f(P)$, $f_x(P)$ and $f_y(P)$, then compare with the plotted plane.</li>
    <li>Move away from $P$ in the $y$-direction. The quartic term eventually dominates — where does the error become obvious?</li>
    <li>Is the error growing linearly or faster? What does that suggest about the size of the next Taylor term?</li>
  </ul>
</div>

### &sect;13.7 &mdash; Extreme Values of Functions of Two Variables {#s13-7}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/gfk6w65f" target="_blank" rel="noopener">Why the second derivative test works</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;Second derivative test&rdquo; &middot; linked from p.&nbsp;2 of the &sect;13.7 notes</p>
  <p class="gg-what">The general quadratic $f(x,y)=c_1x^2+c_2y^2+c_3xy$ with all three coefficients on sliders. The applet shows the tangent plane, the quadratic approximation, the three second partials, the discriminant $f_{xx}f_{yy}-f_{xy}^2$, and trace curves along the axes <em>and</em> along $y = \pm x$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Set $c_3=0$ first. With no cross term, the axis traces tell the whole story — bowl, dome, or saddle?</li>
    <li>Now turn $c_3$ up. The axis traces can both curve upward while the diagonal traces disagree. This is exactly what $f_{xy}$ is detecting.</li>
    <li>Drive the discriminant negative and confirm you always get a saddle; drive it positive and check the sign of $f_{xx}$ to separate max from min.</li>
    <li>Find settings that make the discriminant exactly zero. Why is the test silent there?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/metbjd2a" target="_blank" rel="noopener">A single critical point (Example 1)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.7 Ex 1&rdquo; &middot; linked from p.&nbsp;2 of the &sect;13.7 notes</p>
  <p class="gg-what">$f(x,y)=x^2+6x+y^2-2y+5$ with its critical point at $(-3,1)$ marked.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Solve $f_x=f_y=0$ by hand and confirm the marked point.</li>
    <li>Complete the square in both variables. The surface is a paraboloid — how does that settle the classification with no second-derivative test at all?</li>
    <li>What is the minimum value? Read it off the completed square.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/calculator/yf8ud4pj" target="_blank" rel="noopener">Quadratic approximation in one variable</a><span class="gg-app">Graphing</span></h4>
  <p class="gg-meta">saved as &ldquo;13.7 Quadratic approximation 2d&rdquo; &middot; linked from p.&nbsp;3 of the &sect;13.7 notes</p>
  <p class="gg-what">$f(x)=\cos x$ with a hand-tunable quadratic $c_0+c_1x+c_2x^2$ and, for comparison, the actual second-order Taylor polynomial at a movable center $x_0$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Tune the three coefficients by hand to match $\cos x$ near $0$. Which one did you have to get right first?</li>
    <li>Compare your fit against the Taylor polynomial. What do $c_0$, $c_1$, $c_2$ turn out to be?</li>
    <li>Move $x_0$ away from $0$ and re-fit. The two-variable version in the next applets works exactly this way.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/ss9rrkh5" target="_blank" rel="noopener">Classifying critical points (Example 3)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.7 Ex 3&rdquo; &middot; linked from p.&nbsp;4 of the &sect;13.7 notes</p>
  <p class="gg-what">$f(x,y)=6y^2-2y^3+3x^2-6xy$ with a movable test point, the tangent plane, the constant, linear and quadratic approximations, and a live readout of $f_{xx}$, $f_{yy}$, $f_{xy}$ and the discriminant.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Find the critical points algebraically, then steer the point to each and read the discriminant.</li>
    <li>At each one, watch the quadratic approximation. A saddle looks like a saddle even in the approximation.</li>
    <li>Compare the constant, linear and quadratic approximations at a critical point. Why is the linear one useless there?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/yqgayqdy" target="_blank" rel="noopener">Quadratic approximation, general surface</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;General quadratic approximation&rdquo; &middot; linked from p.&nbsp;4 of the &sect;13.7 notes</p>
  <p class="gg-what">$f(x,y)=\cos x\sin y$ with a movable base point and the constant, linear (tangent plane) and quadratic approximations drawn together.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Step up through the three approximations at one point. What does each one get right that the previous one did not?</li>
    <li>Find a point where the tangent plane is horizontal but the surface is a saddle.</li>
    <li>Move the base point to a peak of $\cos x\sin y$. Which approximation is good over the widest region there?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/ztdjbwxw" target="_blank" rel="noopener">Several critical points at once (Example 4)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.7 Ex 4&rdquo; &middot; linked from p.&nbsp;5 of the &sect;13.7 notes</p>
  <p class="gg-what">$f(x,y)=6y+3xy-3x^2y-2y^2-xy^2+x^2y^2$ — a surface with several critical points — with the same tangent-plane, quadratic-approximation and discriminant apparatus.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Locate the critical points, then visit each and classify it from the discriminant readout.</li>
    <li>At least one should be a saddle. Rotate the view until you can see the saddle shape directly.</li>
    <li>Does this function have a global maximum? Follow the surface out to large $|x|$ and $|y|$ before you answer.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/jdbfneky" target="_blank" rel="noopener">Box volume by substitution (Example 6)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.7 Example 6 2nd derivative test&rdquo; &middot; linked from p.&nbsp;8 of the &sect;13.7 notes</p>
  <p class="gg-what">The box-volume problem with the constraint already substituted in. Solving $x+2y+2z=84$ for $x$ and putting it into $V=xyz$ leaves the two-variable function $h(y,z)=84yz-2y^2z-2yz^2$, plotted over the triangle $y+z \le 42$ with the critical point $(14,14)$ marked.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Do the substitution yourself and confirm you get this $h$. That step is what turns a constrained problem into an unconstrained one.</li>
    <li>Verify $(14,14)$ is a critical point, then classify it with the second derivative test.</li>
    <li>Back out the full answer: $y=z=14$ gives what $x$, and what volume?</li>
    <li>The domain is a triangle, so the boundary matters too. Why can you rule it out here?</li>
    <li>Section 13.8 solves this exact problem again with Lagrange multipliers and no substitution — compare the two routes.</li>
  </ul>
</div>

### &sect;13.8 &mdash; Lagrange Multipliers {#s13-8}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/b9qkzu32" target="_blank" rel="noopener">Lagrange multipliers, first look (Example 0)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.8 Ex 0&rdquo; &middot; linked from p.&nbsp;1 of the &sect;13.8 notes</p>
  <p class="gg-what">Maximize $f(x,y)=2x+y$ on the circle $x^2+y^2=1$. The constraint circle is lifted onto the plane $z=f(x,y)$, the level lines $f=k$ slide with a slider, and both gradients $\nabla f = \langle 2,1\rangle$ and $\nabla g = 2\langle x,y\rangle$ are drawn.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Slide $k$ upward until the level line only just touches the circle. That tangency is the whole method.</li>
    <li>At that point the two gradients are parallel. Find the multiplier $\lambda$ with $\nabla f = \lambda\nabla g$.</li>
    <li>Confirm the maximum is at $\left(\tfrac{2}{\sqrt5},\tfrac{1}{\sqrt5}\right)$, and identify the minimum too.</li>
    <li>Why can the optimum never happen where the level line <em>crosses</em> the circle?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/augbxauf" target="_blank" rel="noopener">A curved objective (Example 1)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.8 Ex 1&rdquo; &middot; linked from p.&nbsp;2 of the &sect;13.8 notes</p>
  <p class="gg-what">Maximize $f(x,y)=x^2y$ subject to $g(x,y)=x^2+2y^2=6$, with a movable level plane $z=k$ cutting both the constraint cylinder and the objective surface.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Raise $k$ until the level curve of $f$ is tangent to the constraint ellipse.</li>
    <li>Set up $\nabla f = \lambda\nabla g$ and solve. How many candidate points do you get?</li>
    <li>Not every candidate is a maximum. Evaluate $f$ at each and sort them out.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/z6t97efr" target="_blank" rel="noopener">The same box, now with Lagrange multipliers (Example 6 revisited)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;13.7 Ex 6&rdquo; &middot; linked from p.&nbsp;3 of the &sect;13.8 notes</p>
  <p class="gg-what">The §13.7 box problem attacked a second way. A rectangular box has one corner sliding on the plane $x+2y+2z=84$, with the volume $V=xyz$ displayed alongside the level surfaces of $V$ and both gradients $\nabla V = \langle yz,xz,xy\rangle$ and $\nabla g = \langle 1,2,2\rangle$.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Drag the corner to hunt for the largest volume by eye, then read off the coordinates.</li>
    <li>At the best position the two gradients are parallel. That is the Lagrange condition — check it numerically.</li>
    <li>Solve $\nabla V = \lambda\nabla g$ with the constraint and confirm the maximum volume is $5488$.</li>
    <li>Watch the volume level surface become tangent to the plane exactly at the optimum. Why must tangency be the condition?</li>
    <li>Compare with the §13.7 version, which substituted the constraint away instead. Which approach would you rather do by hand here?</li>
  </ul>
</div>

## Chapter 14 &middot; Multiple Integrals {#ch14}

<p class="gg-secnav">Jump to: <a href="#s14-1">&sect;14.1</a> &middot; <a href="#s14-2">&sect;14.2</a> &middot; <a href="#s14-3">&sect;14.3</a> &middot; <a href="#s14-4">&sect;14.4</a> &middot; <a href="#s14-5">&sect;14.5</a></p>

### &sect;14.1 &mdash; Double Integrals {#s14-1}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/swnacfyx" target="_blank" rel="noopener">The solid under a surface (Example 2)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;14.1 Ex 2&rdquo; &middot; linked from p.&nbsp;2 of the &sect;14.1 notes</p>
  <p class="gg-what">$f(x,y)=6xy^2-4y$ over the rectangle $0<x<1$, $0<y<2$, drawn with the plane $z=0$ so you can see where the surface dips below it.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Part of this solid is below the $xy$-plane. What does the double integral do with that part?</li>
    <li>Find the curve in the rectangle where $f=0$ — that is the dividing line.</li>
    <li>Set up the integral both ways, $dx\,dy$ and $dy\,dx$. Over a rectangle, does the order matter?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/m/aswvav89" target="_blank" rel="noopener">Fubini's Theorem</a><span class="gg-app">Classic</span></h4>
  <p class="gg-meta">linked from p.&nbsp;2 of the &sect;14.1 notes</p>
  <p class="gg-note">Adapted by Dr. Lundholm from <a href="https://www.geogebra.org/m/sgsapd6t" target="_blank" rel="noopener">Fubini&rsquo;s Theorem</a> by GeoGebra user alessandrogaio.</p>
  <p class="gg-what">Why you may integrate in either order. A slice plane sweeps across the region of integration; the cross-section it cuts from the solid has area $A$, and the double integral is recovered either as $\int A(x)\,dx$ or as $\int A(y)\,dy$ — the same volume accumulated two different ways.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Sweep the slice in the $x$-direction and watch the cross-sectional area change. That area is the <em>inner</em> integral.</li>
    <li>Now switch to slicing the other way. The individual cross-sections look nothing alike — but the total is identical.</li>
    <li>Write out both iterated integrals and confirm they give the same number.</li>
    <li>Over a rectangle the order never matters. Look ahead to §14.2: what changes once the region has curved edges?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/axkycc7p" target="_blank" rel="noopener">Slicing a tetrahedron two ways (Example 6)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;14.1 Ex 6&rdquo; &middot; linked from p.&nbsp;4 of the &sect;14.1 notes</p>
  <p class="gg-what">The solid under the plane $2x+3y+z=6$ in the first octant, with cross-section triangles drawn at $x=x_0$ and at $y=y_0$ on independent sliders.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Slide the $x$-cut across. How does the triangle's shape change, and where does it vanish?</li>
    <li>Now do the same in $y$. These two families of slices are the two iterated integrals.</li>
    <li>Write both orders of integration and confirm the limits against the shrinking triangles.</li>
  </ul>
</div>

### &sect;14.2 &mdash; Applications of Double Integrals {#s14-2}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/grk5syse" target="_blank" rel="noopener">Average value as a level box</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;14.2 Average value of an integral&rdquo; &middot; linked from p.&nbsp;1 of the &sect;14.2 notes</p>
  <p class="gg-what">The solid under $f(x,y)=3y$ over the unit square, with an adjustable-height box beside it so you can match volumes.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Slide the box height until its volume matches the solid. That height <em>is</em> the average value.</li>
    <li>Predict the answer first: what is the average of $3y$ for $0\le y\le 1$?</li>
    <li>The slanted top gets cut and rearranged into the flat top. Where does the material removed from one side end up?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/hzn6f9gg" target="_blank" rel="noopener">Region between two curves (Examples 1–2)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;14.2 Ex 1,2&rdquo; &middot; linked from p.&nbsp;1 of the &sect;14.2 notes</p>
  <p class="gg-what">The region between $y=3x^2$ and $y=2+x^2$ for $-1\le x\le 1$, with the surface $z=5y$ over it and an adjustable height showing the lateral walls.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Which curve is on top? Find the crossing points and confirm the $x$-range.</li>
    <li>Set up $\int\int 5y\,dy\,dx$ with the curves as inner limits.</li>
    <li>Try to reverse the order to $dx\,dy$. What makes that unpleasant here?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/m/ub9c85sx" target="_blank" rel="noopener">Center of mass of a plate (Example 3)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;14.2 Ex 3&rdquo; &middot; linked from p.&nbsp;2 of the &sect;14.2 notes</p>
  <p class="gg-what">A triangular plate bounded by $y=0$, $x=1$ and $y=x$ carrying the variable density $\rho(x,y)=x^2+y$. The applet reports the mass, both moments, and plots the resulting center of mass.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Compute the mass $M=\iint \rho\,dA$ yourself. The applet gets $\tfrac{5}{12}$.</li>
    <li>Recover the center of mass from the moments: $\bar x = M_y/M$ and $\bar y = M_x/M$. You should land on $\left(\tfrac{39}{50}, \tfrac{11}{25}\right)$.</li>
    <li>The center of mass sits toward the heavy corner, not at the triangle's centroid. Which corner is densest, and does the plotted point agree?</li>
    <li>Replace the density with a constant. Where does the center of mass move to, and what is that point called?</li>
  </ul>
</div>

### &sect;14.3 &mdash; Double Integrals in Polar Coordinates {#s14-3}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/rfuu2d5w" target="_blank" rel="noopener">Polar coordinates earn their keep (Example 3)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;14.3 Ex 3&rdquo; &middot; linked from p.&nbsp;2 of the &sect;14.3 notes</p>
  <p class="gg-what">The bell surface $z=e^{-(x^2+y^2)}$ over the unit disk, with the exact value $\pi\left(1-\tfrac{1}{e}\right)$ displayed.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Try to set this up in rectangular coordinates. Where do you get stuck?</li>
    <li>Now convert to polar. The $r\,dr\,d\theta$ factor makes the inner integral elementary — why?</li>
    <li>Check your answer against the displayed exact value.</li>
  </ul>
</div>

### &sect;14.4 &mdash; Triple Integrals {#s14-4}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/fwqyquux" target="_blank" rel="noopener">Solid between two surfaces (Example 2)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;14.4 Ex  2&rdquo; &middot; linked from p.&nbsp;2 of the &sect;14.4 notes</p>
  <p class="gg-what">The solid caught between $z=x^2+3y^2+2$ and $z=6-x^2-y^2$ over the ellipse $x^2+2y^2=2$, with a slider drawing the vertical segment from bottom to top.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Which surface is the roof and which the floor? Check at the origin, then near the edge.</li>
    <li>Where do the two surfaces meet? Show that curve projects exactly onto the ellipse.</li>
    <li>The drawn segment is the inner ($dz$) integral. What are its limits as a function of $x$ and $y$?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/feupd5xd" target="_blank" rel="noopener">Reading a solid off its bounding planes (Exercises 25 & 27)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;14.4 Exercise 25 &amp; 27&rdquo; &middot; linked from p.&nbsp;5 of the &sect;14.4 notes</p>
  <p class="gg-what">A solid described by the surfaces $z=x^2$, $z=4$, $y=0$, $z=y$ together with the region bounded by $x=1-y^2$ and $x=0$, with connecting segments on a slider.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Before integrating anything, get the solid straight: rotate until you can name every face.</li>
    <li>Pick an order of integration and write all three sets of limits. Then try a different order.</li>
    <li>Which order avoids splitting the region into pieces?</li>
  </ul>
</div>

### &sect;14.5 &mdash; Triple Integrals in Cylindrical and Spherical Coordinates {#s14-5}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/nhbwqss7" target="_blank" rel="noopener">Cylindrical coordinates on a paraboloid (Example 1)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;14.5 Ex 1&rdquo; &middot; linked from p.&nbsp;1 of the &sect;14.5 notes</p>
  <p class="gg-what">The region inside $z=x^2+y^2$ below $z=1$, with a radial ray at an adjustable angle and a swept surface showing the cylindrical wedge being accumulated.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Sweep the angle through a full turn. What are the $\theta$-limits, and is the shape $\theta$-dependent at all?</li>
    <li>For fixed $r$, the segment runs from $z=r^2$ up to $z=1$. Write the $dz\,r\,dr\,d\theta$ integral.</li>
    <li>Where does $r$ stop? Solve $r^2=1$ and check against the picture.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/classic/dnfdczkd" target="_blank" rel="noopener">An off-center disk (Example 3)</a><span class="gg-app">Classic</span></h4>
  <p class="gg-meta">saved as &ldquo;14.5 Ex 3&rdquo; &middot; linked from p.&nbsp;3 of the &sect;14.5 notes</p>
  <p class="gg-what">The cone $z=\sqrt{x^2+y^2}$ over the disk $(x-1)^2+y^2=1$, which touches the origin rather than being centered on it, with a movable cross-section.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Convert the boundary circle to polar. You should get $r=2\cos\theta$ — verify it on a couple of points.</li>
    <li>What is the $\theta$-range? The disk only occupies half the directions from the origin.</li>
    <li>Why is this harder than a centered disk, and what does the cone contribute to the difficulty?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/classic/ntscbupn" target="_blank" rel="noopener">Building spherical coordinates step by step</a><span class="gg-app">Classic</span></h4>
  <p class="gg-meta">saved as &ldquo;Spherical Coordinates&rdquo; &middot; linked from p.&nbsp;3 of the &sect;14.5 notes</p>
  <p class="gg-what">An animated construction of $(\rho,\theta,\phi)$: a "Slide to Plot!" control walks through each coordinate in turn, with $\rho$, $\theta$ and $\phi$ labeled on the figure and input boxes for typing exact values.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Run the animation slowly and name what each stage adds. Which angle is measured down from the $z$-axis?</li>
    <li>Set $\phi=\pi/2$. Where does the point live, and what do $\rho$ and $\theta$ reduce to?</li>
    <li>Find the relationship $r = \rho\sin\phi$ on the figure — it is the bridge to cylindrical coordinates.</li>
    <li>Type in a few $(\rho,\theta,\phi)$ triples and predict the rectangular coordinates before you look.</li>
  </ul>
</div>

## Chapter 15 &middot; Vector Calculus {#ch15}

<p class="gg-secnav">Jump to: <a href="#s15-1">&sect;15.1</a></p>

### &sect;15.1 &mdash; Vector Fields {#s15-1}

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/vhjpzcbu" target="_blank" rel="noopener">A uniform vector field (Example 2)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;15.1 Ex 2&rdquo; &middot; linked from p.&nbsp;2 of the &sect;15.1 notes</p>
  <p class="gg-what">A 3D grid of sample points, each carrying the same vector pointing straight up in $z$ — the simplest possible vector field.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Every arrow is identical. What would a particle dropped into this field do?</li>
    <li>A field can depend on position or not. What is the formula for this one?</li>
    <li>Keep this picture as your baseline — the next two applets are fields that genuinely vary.</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/aenakcyx" target="_blank" rel="noopener">Gravitational field in 3D</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;Gravitational Field 3D&rdquo; &middot; linked from p.&nbsp;3 of the &sect;15.1 notes</p>
  <p class="gg-what">The inverse-square field $\mathbf{F} = -\dfrac{GMm}{(x^2+y^2+z^2)^{3/2}}\langle x,y,z\rangle$ sampled on a grid, with $G$, $M$ and $m$ on sliders.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Every arrow points at the origin. Which factor in the formula is responsible for the direction?</li>
    <li>Compare arrow lengths near the origin with those far out. The falloff is $1/r^2$ — check a ratio.</li>
    <li>Flip the sign of $G$. What kind of force is that now, and what would orbits look like?</li>
  </ul>
</div>

<div class="gg-item">
  <h4 class="gg-name"><a href="https://www.geogebra.org/3d/rztcujue" target="_blank" rel="noopener">Gradient field and level curves (Example 5)</a><span class="gg-app">3D</span></h4>
  <p class="gg-meta">saved as &ldquo;15.1 Ex 5 Gradient Field 3D&rdquo; &middot; linked from p.&nbsp;4 of the &sect;15.1 notes</p>
  <p class="gg-what">The gradient field of $f(x,y)=xy^2-x^2$ drawn in the plane, together with the level curves of $f$ and an adjustable arrow scale.</p>
  <p class="gg-try-h">Things to try</p>
  <ul class="gg-try">
    <li>Everywhere you look, the arrows cross the level curves at right angles. Why must that be?</li>
    <li>Find where the arrows are longest. What is happening to the spacing of the level curves there?</li>
    <li>Locate a point where the gradient vanishes. What does the level curve picture do at that point?</li>
    <li>Follow the arrows from a starting point. Are you walking uphill or downhill?</li>
  </ul>
</div>

---

<p class="gg-meta">Something here broken or pointing at the wrong applet? Tell Dr. Lundholm and it will get fixed.</p>
