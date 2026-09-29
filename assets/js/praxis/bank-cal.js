/* Praxis 5165 diagnostic: Calculus (CAL1-CAL5). Answers verified in checks-cal.py. */
(function () {
  var R = String.raw;
  PXD.bank.push(

    /* ================= CAL1: Limits ================= */
    {
      id: 'CAL1-01', topic: 'CAL1', type: 'mc', diff: 1,
      stem: R`What is $\displaystyle\lim_{x \to 3} \dfrac{x^2 - 9}{x - 3}$?`,
      choices: [R`$0$`, R`$3$`, R`$6$`, R`The limit does not exist.`],
      answer: 2,
      explain: R`Direct substitution gives $\frac{0}{0}$, which is indeterminate, so simplify first: $\dfrac{x^2-9}{x-3} = \dfrac{(x-3)(x+3)}{x-3} = x + 3$ for $x \neq 3$. Then $\lim_{x\to3}(x+3) = 6$.
        <br><i>Common errors:</i> stopping at $\frac{0}{0}$ and answering $0$ or "does not exist" (a $0/0$ form says nothing about the limit); substituting $x=3$ into the simplified quotient $\frac{x^2}{x}$ to get $3$.`
    },
    {
      id: 'CAL1-02', topic: 'CAL1', type: 'num', diff: 2,
      stem: R`The graph of $f$ is shown. It is a line with a hole at $x = 3$, and the point $(3, -1)$ is on the graph. What is $\displaystyle\lim_{x \to 3} f(x) - f(3)$?`,
      figure: {
        type: 'plot', alt: 'Graph of f: a straight line rising through (1,1) and (5,3) with an open circle at (3,2), and a separate filled point at (3,-1) below the line.',
        fns: [{ f: '0.5*x+0.5', color: 'b' }],
        points: [{ x: 3, y: 2, open: true }, { x: 3, y: -1 }], xr: [-2, 6], yr: [-2, 5], xstep: 1, ystep: 1
      },
      answer: 3, tol: 0,
      explain: R`The limit depends only on the values of $f$ near $x=3$ (not at 3). Following the line from either side, the $y$-values approach $2$, so $\lim_{x\to3} f(x) = 2$. The filled point shows $f(3) = -1$. Therefore $2 - (-1) = 3$.
        <br><i>Common errors:</i> reading the limit as the value at the filled point ($-1 - (-1) = 0$) or using the hole's height for $f(3)$ ($2-2=0$); getting $-3$ by subtracting in the wrong order.`
    },
    {
      id: 'CAL1-03', topic: 'CAL1', type: 'multi', diff: 2,
      stem: R`The graph of $f$ is shown. Select all statements that are true.`,
      figure: {
        type: 'plot', alt: 'Graph of f with a jump at x=1: a line rising from the lower left toward an open circle at (1,2); a line falling from an open circle at (1,3) toward the lower right; and an isolated filled point at (1,1).',
        fns: [{ f: 'x<1 ? x+1 : NaN', to: 1 }, { f: 'x>1 ? 4-x : NaN', from: 1, color: 'b' }],
        points: [{ x: 1, y: 2, open: true }, { x: 1, y: 3, open: true }, { x: 1, y: 1 }], xr: [-2, 4], yr: [-1, 5], xstep: 1, ystep: 1
      },
      choices: [R`$\displaystyle\lim_{x \to 1^-} f(x) = 2$`, R`$\displaystyle\lim_{x \to 1^+} f(x) = 1$`, R`$\displaystyle\lim_{x \to 1} f(x)$ does not exist`, R`$\displaystyle\lim_{x \to 1} f(x) = 1$`, R`$f(1) = 3$`],
      answer: [0, 2],
      explain: R`Approaching $x=1$ from the left, the graph heads to the open circle at height $2$, so the left-hand limit is $2$. From the right it heads to the open circle at height $3$, so the right-hand limit is $3$. The one-sided limits differ, so the two-sided limit does not exist. The isolated filled point gives $f(1) = 1$.
        <br><i>Common errors:</i> using the filled point's height $1$ as a limit (the second and fourth statements) or as the right-hand limit; reading $f(1)$ from the right-hand open circle (the last statement).`
    },
    {
      id: 'CAL1-04', topic: 'CAL1', type: 'mc', diff: 2, task: [2, 17],
      stem: R`A class studies $f(x) = \dfrac{1}{x-2}$, whose graph is shown. Marcus says, "The limit as $x$ approaches 2 does not exist because $f(2)$ is not defined." Which is the best evaluation of Marcus's reasoning?`,
      figure: {
        type: 'plot', alt: 'Graph of f(x)=1/(x-2) with a dashed vertical asymptote at x=2. The left branch falls without bound toward the asymptote from the left; the right branch comes down from very large values just right of the asymptote and levels toward the x-axis.',
        fns: [{ f: '1/(x-2)', color: 'b' }], vlines: [2], xr: [-1, 5], yr: [-4, 4], xstep: 1, ystep: 1
      },
      choices: [
        R`His conclusion is correct, but his reason is not: a limit can exist where $f$ is not defined. Here the values fall without bound from the left and rise without bound from the right, so they approach no single number.`,
        R`His reasoning is correct, because a limit exists at $x = a$ only when the function is defined at $x = a$, and $f(2)$ is not.`,
        R`His conclusion is wrong: the limit is 0, because the graph gets closer and closer to the $x$-axis as $x$ moves away from 2.`,
        R`His conclusion is correct, because $f$ is discontinuous at 2 and a limit cannot exist at a point where a function is discontinuous.`],
      answer: 0,
      explain: R`Whether $f(a)$ exists does not determine whether $\lim_{x\to a} f(x)$ exists; only the behavior of $f$ near $a$ matters. The function $\frac{x^2-4}{x-2}$ is not defined at 2 yet has limit 4. For $\frac{1}{x-2}$, the values are large and negative just left of 2 and large and positive just right of 2, so there is no single number being approached and the limit does not exist.
        <br><i>Why the others fail:</i> the second repeats Marcus's misconception; the third confuses the behavior as $x \to \pm\infty$ (where $f \to 0$) with the behavior near $x=2$; the fourth uses the false claim that discontinuity forces a missing limit (a removable discontinuity has a limit).`
    },
    {
      id: 'CAL1-05', topic: 'CAL1', type: 'mc', diff: 1,
      stem: R`What is $\displaystyle\lim_{x \to \infty} \dfrac{3x^2 - 5x + 1}{2x^2 + 7}$?`,
      choices: [R`$0$`, R`$\dfrac{3}{2}$`, R`$3$`, R`$\infty$`],
      answer: 1, order: 'fixed',
      explain: R`Divide the numerator and denominator by $x^2$: $\dfrac{3 - 5/x + 1/x^2}{2 + 7/x^2} \to \dfrac{3}{2}$ as $x \to \infty$. The numerator and denominator have the same degree, so the limit is the ratio of the leading coefficients.
        <br><i>Common errors:</i> answering $0$ (thinking the limit is 0 whenever a denominator grows), $\infty$ (numerator grows), or $3$ (using only the numerator's leading coefficient).`
    },
    {
      id: 'CAL1-06', topic: 'CAL1', type: 'num', diff: 2,
      stem: R`Suppose $\displaystyle\lim_{x \to a} f(x) = 4$ and $\displaystyle\lim_{x \to a} g(x) = -2$. What is $\displaystyle\lim_{x \to a} \dfrac{\left[f(x)\right]^2 + 3\,g(x)}{f(x) + g(x)}$?`,
      answer: 5, tol: 0,
      explain: R`Limit laws (power, constant multiple, sum, and quotient, valid because the denominator's limit is nonzero) give $\dfrac{4^2 + 3(-2)}{4 + (-2)} = \dfrac{16 - 6}{2} = 5$.
        <br><i>Common errors:</i> squaring only part of the numerator, or evaluating $f(x)^2$ as $2\cdot 4 = 8$ (which gives $\frac{8-6}{2}=1$).`
    },
    {
      id: 'CAL1-07', topic: 'CAL1', type: 'mc', diff: 2, task: [15, 18],
      stem: R`A student evaluates a limit as follows.
        <div class="work"><b>Jordan:</b> $\displaystyle\lim_{x \to \infty} \dfrac{4x^2 - 1}{2x^3 + x}$. Both the top and the bottom go to $\infty$, so the limit is $\dfrac{\infty}{\infty} = 1$.</div>
        Which response gives the correct limit and identifies Jordan's misconception?`,
      choices: [
        R`The limit is 0. Jordan treated $\infty/\infty$ as a number equal to 1, but the denominator (degree 3) grows faster than the numerator (degree 2).`,
        R`The limit is 2. Jordan should have divided the leading coefficients, $4/2$.`,
        R`The limit is $\infty$. Jordan should have noticed that the numerator and denominator both increase without bound.`,
        R`The limit is 1. Jordan's method is valid whenever the numerator and denominator both approach $\infty$.`],
      answer: 0,
      explain: R`Dividing the top and bottom by $x^3$ gives $\dfrac{4/x - 1/x^3}{2 + 1/x^2} \to \dfrac{0}{2} = 0$. The symbol $\infty/\infty$ is indeterminate: it is not the number 1. What matters is how fast each part grows, and a higher-degree denominator wins.
        <br><i>Why the others fail:</i> the second applies the equal-degree rule to unequal degrees; the third forgets the denominator is growing faster; the fourth agrees with Jordan's misconception.`
    },
    {
      id: 'CAL1-08', topic: 'CAL1', type: 'mc', diff: 3,
      stem: R`What is $\displaystyle\lim_{x \to 0} \dfrac{\sqrt{x + 9} - 3}{x}$?`,
      choices: [R`$0$`, R`$\dfrac{1}{6}$`, R`$\dfrac{1}{3}$`, R`The limit does not exist.`],
      answer: 1,
      explain: R`Substitution gives $\frac{0}{0}$. Multiply by the conjugate: $\dfrac{(\sqrt{x+9}-3)(\sqrt{x+9}+3)}{x(\sqrt{x+9}+3)} = \dfrac{x}{x(\sqrt{x+9}+3)} = \dfrac{1}{\sqrt{x+9}+3}$, which approaches $\dfrac{1}{3+3} = \dfrac16$.
        <br><i>Common errors:</i> replacing the denominator $\sqrt{x+9}+3$ by $\sqrt 9 = 3$ (giving $\frac13$); declaring $0/0$ to mean $0$ or "does not exist".`
    },

    /* ================= CAL2: The derivative ================= */
    {
      id: 'CAL2-01', topic: 'CAL2', type: 'mc', diff: 1,
      stem: R`Which expression, if the limit exists, equals $f'(a)$?`,
      choices: [
        R`$\displaystyle\lim_{h \to 0} \dfrac{f(a+h) - f(a)}{h}$`,
        R`$\displaystyle\lim_{h \to 0} \dfrac{f(a+h) + f(a)}{h}$`,
        R`$\displaystyle\lim_{x \to 0} \dfrac{f(x) - f(a)}{x - a}$`,
        R`$\displaystyle\lim_{h \to 0} \dfrac{f(a+h) - f(a-h)}{h}$`],
      answer: 0,
      explain: R`The derivative at $a$ is the limit of the slopes of secant lines through $(a, f(a))$ and $(a+h, f(a+h))$ as $h \to 0$.
        <br><i>Why the others fail:</i> the second adds the function values (not a change); the third lets $x \to 0$ instead of $x \to a$; the fourth equals $2f'(a)$ when $f'(a)$ exists, because the interval from $a-h$ to $a+h$ has width $2h$, not $h$.`
    },
    {
      id: 'CAL2-02', topic: 'CAL2', type: 'num', diff: 2,
      stem: R`Let $f(x) = x^3$. The slope of the secant line through $(3, f(3))$ and $(x, f(x))$ is $\dfrac{x^3 - 27}{x - 3}$. What is the slope of the line tangent to the graph of $f$ at $x = 3$?`,
      answer: 27, tol: 0,
      explain: R`The tangent slope is the limit of the secant slopes: $\displaystyle\lim_{x \to 3}\dfrac{x^3-27}{x-3} = \lim_{x\to3}(x^2+3x+9) = 27$. Equivalently, $f'(x) = 3x^2$ and $f'(3) = 27$.
        <br><i>Common errors:</i> substituting $x=3$ to get $0/0$ and stopping, or using $f(3) = 27$ as the slope by mistake.`
    },
    {
      id: 'CAL2-03', topic: 'CAL2', type: 'mc', diff: 2, task: [13, 12],
      stem: R`A teacher introduces the derivative with the figure below. It shows the graph of $f$, a point $P$ on the graph, three points $Q_1$, $Q_2$, $Q_3$ that are successively closer to $P$, the three secant lines through $P$ and each $Q$, and the tangent line at $P$ (dashed). Which statement should the teacher emphasize as the main idea?`,
      figure: {
        type: 'plot', alt: 'Graph of an upward-opening curve with point P at (1, 1.25) and points Q1, Q2, Q3 to the right of P at x = 3, 2, and 1.5. Three solid secant lines pass through P and each Q; their slopes decrease as Q approaches P. A dashed tangent line at P has a smaller slope than all three secants.',
        fns: [{ f: '0.25*x^2+1', color: 'k' }],
        segments: [
          [0, 0.25, 4, 4.25, { color: 'b' }],
          [0, 0.5, 4, 3.5, { color: 'b' }],
          [0, 0.625, 4, 3.125, { color: 'b' }],
          [0, 0.75, 4, 2.75, { color: 'a', dash: true }]
        ],
        points: [
          { x: 1, y: 1.25, label: 'P', dx: -20, dy: -10 },
          { x: 3, y: 3.25, label: 'Q₁', dx: 8, dy: 14 },
          { x: 2, y: 2, label: 'Q₂', dx: 20, dy: 24 },
          { x: 1.5, y: 1.5625, label: 'Q₃', dx: 8, dy: 16 }
        ],
        xr: [0, 4], yr: [0, 5], xstep: 1, ystep: 1
      },
      choices: [
        R`As $Q$ moves toward $P$, the slopes of the secant lines get closer to the slope of the tangent line at $P$; $f'$ at $P$ is the limit of these slopes.`,
        R`The secant lines all have the same slope as the tangent line, because each of them passes through $P$.`,
        R`As $Q$ moves toward $P$, the slopes of the secant lines get closer to the $y$-coordinate of $P$.`,
        R`As $Q$ moves toward $P$, the slopes of the secant lines get closer to 0, because the distance between $P$ and $Q$ approaches 0.`],
      answer: 0,
      explain: R`Each secant slope is an average rate of change over a shrinking interval. As $Q \to P$ these slopes approach the slope of the tangent line, and that limiting value is the derivative at $P$; this is the idea the figure is built to show (the secant slopes visibly decrease toward the dashed line's slope).
        <br><i>Why the others fail:</i> sharing one point does not make two lines have the same slope; a slope is a rate of change, not a height, so it does not approach $f(1)$; the run and the rise both shrink to 0 together, so the ratio need not tend to 0 (the "$\frac00$" misconception).`
    },
    {
      id: 'CAL2-04', topic: 'CAL2', type: 'mc', diff: 2,
      stem: R`The volume $V(t)$, in liters, of water in a tank is a differentiable function of the time $t$, in minutes, after a valve is opened. Given that $V'(5) = -3$, which statement is the best interpretation?`,
      choices: [
        R`Five minutes after the valve is opened, the tank contains 3 liters of water.`,
        R`Five minutes after the valve is opened, the volume of water is decreasing at a rate of 3 liters per minute.`,
        R`During the first 5 minutes, the volume of water decreased at an average rate of 3 liters per minute.`,
        R`Between $t = 5$ and $t = 6$, the volume of water decreases by exactly 3 liters.`],
      answer: 1,
      explain: R`$V'(5)$ is the instantaneous rate of change of volume at $t = 5$, with units liters per minute; the negative sign means the volume is decreasing at that instant.
        <br><i>Why the others fail:</i> the first confuses the derivative with the function value $V(5)$; the third describes an average rate of change over $[0,5]$, namely $\frac{V(5)-V(0)}{5}$; the fourth treats an instantaneous rate as an exact change over a full minute, which is only an approximation unless the rate is constant.`
    },
    {
      id: 'CAL2-05', topic: 'CAL2', type: 'num', diff: 2,
      stem: R`An object moves along a line so that its position at time $t$ seconds is $s(t) = 4t^2 + 3t$ meters. The object's average velocity over the interval from $t = 2$ to $t = 2 + h$ can be written as an expression in $h$. What is the object's instantaneous velocity at $t = 2$?`,
      answer: 19, tol: 0, unit: 'meters per second',
      explain: R`$s(2) = 22$ and $s(2+h) = 4(4 + 4h + h^2) + 6 + 3h = 22 + 19h + 4h^2$, so the average velocity is $\dfrac{19h + 4h^2}{h} = 19 + 4h$. As $h \to 0$ this approaches $19$ meters per second.
        <br><i>Common errors:</i> forgetting the $3t$ term's contribution ($16$), or forgetting to let $h \to 0$ (answering $19+4h$).`
    },
    {
      id: 'CAL2-06', topic: 'CAL2', type: 'mc', diff: 2,
      stem: R`The figure shows the graph of a function $f$ and the line tangent to the graph at the point $(2, 3)$. The tangent line passes through the marked lattice points. What is $f'(2)$?`,
      figure: {
        type: 'plot', alt: 'Graph of a downward-opening parabola with vertex near (1,4) passing through (2,3). A straight line falling to the right touches the parabola at (2,3) and passes through the marked points (1,5) and (3,1).',
        fns: [{ f: '4-(x-1)^2', color: 'b' }], line: { m: -2, b: 7 },
        points: [{ x: 1, y: 5 }, { x: 2, y: 3 }, { x: 3, y: 1 }], xr: [-1, 5], yr: [-2, 6], xstep: 1, ystep: 1
      },
      choices: [R`$-2$`, R`$-\dfrac{1}{2}$`, R`$2$`, R`$3$`],
      answer: 0, order: 'fixed',
      explain: R`$f'(2)$ is the slope of the tangent line at $x=2$. Using $(1,5)$ and $(3,1)$: slope $= \dfrac{1 - 5}{3 - 1} = -2$.
        <br><i>Common errors:</i> reading the height $f(2) = 3$; dropping the sign of the slope; inverting the slope ($-\frac12$, run over rise).`
    },
    {
      id: 'CAL2-07', topic: 'CAL2', type: 'multi', diff: 3, task: [1, 2],
      stem: R`Students are asked to explain what it means that $f'(2) = 4$ for the function $f(x) = x^2 + 1$. Which of the following are <b>valid</b> explanations? Select all that apply.
        <div class="work"><b>Ana:</b> If we zoom in very close to the point $(2, 5)$, the graph looks like a straight line with slope 4.</div>
        <div class="work"><b>Ben:</b> The average rates of change of $f$ over the intervals $[2, 2+h]$ get closer and closer to 4 as $h$ gets closer to 0.</div>
        <div class="work"><b>Cal:</b> It means the height of the graph at $x = 2$ is 4.</div>
        <div class="work"><b>Dee:</b> It means that $f$ increases by exactly 4 when $x$ goes from 2 to 3.</div>
        <div class="work"><b>Eli:</b> It means the tangent line at $x = 2$ is the line $y = 4x - 3$.</div>`,
      choices: [R`Ana`, R`Ben`, R`Cal`, R`Dee`, R`Eli`],
      answer: [0, 1, 4],
      explain: R`Ana describes local linearity and Ben the secant-slope limit: $\dfrac{f(2+h)-f(2)}{h} = \dfrac{4h+h^2}{h} = 4 + h \to 4$. Eli's line passes through $(2, f(2)) = (2,5)$ with slope 4: $y - 5 = 4(x-2)$, i.e. $y = 4x - 3$.
        <br><i>Why the others fail:</i> Cal confuses $f'(2)$ with $f(2)$ (which is 5). Dee treats an instantaneous rate as an exact change over a unit interval: actually $f(3) - f(2) = 10 - 5 = 5$.`
    },

    /* ================= CAL3: Continuity and differentiability ================= */
    {
      id: 'CAL3-01', topic: 'CAL3', type: 'multi', diff: 1,
      stem: R`Which of the following are part of the definition of "$f$ is continuous at $x = a$"? Select all that apply.`,
      choices: [R`$f(a)$ is defined`, R`$\displaystyle\lim_{x \to a} f(x)$ exists`, R`$\displaystyle\lim_{x \to a} f(x) = f(a)$`, R`$f'(a)$ exists`, R`$f$ is increasing near $x = a$`],
      answer: [0, 1, 2],
      explain: R`Continuity at a point has three parts: (1) $f(a)$ is defined, (2) $\lim_{x\to a} f(x)$ exists, and (3) the limit equals $f(a)$.
        <br>Differentiability is a stronger property that is not part of the definition: $f(x) = |x|$ is continuous at 0 but $f'(0)$ does not exist. A continuous function also need not be increasing (a constant function is continuous).`
    },
    {
      id: 'CAL3-02', topic: 'CAL3', type: 'mc', diff: 2,
      stem: R`The graph of $f$ is shown. At which value of $x = a$ is $f(a)$ defined and $\displaystyle\lim_{x \to a} f(x)$ exists, but $f$ is <b>not</b> continuous at $a$?`,
      figure: {
        type: 'plot', alt: 'Graph on 0 to 8: a rising line through (1,1.5), with an open circle at (2,2) and a separate filled point at (2,4), another open circle at (4,3) with no filled point there, and an open circle at (6,4) where the line stops; from a filled point at (6,2) a line descends to the right.',
        fns: [{ f: 'x<6 ? 1+0.5*x : NaN', to: 6, color: 'b' }, { f: 'x>=6 ? 5-0.5*x : NaN', from: 6, color: 'a' }],
        points: [{ x: 2, y: 2, open: true }, { x: 2, y: 4 }, { x: 4, y: 3, open: true }, { x: 6, y: 4, open: true }, { x: 6, y: 2 }],
        xr: [0, 8], yr: [0, 6], xstep: 1, ystep: 1
      },
      choices: [R`$a = 1$`, R`$a = 2$`, R`$a = 4$`, R`$a = 6$`],
      answer: 1, order: 'fixed',
      explain: R`At $a = 2$: the filled point shows $f(2) = 4$ is defined, and the graph approaches height $2$ from both sides, so the limit exists (it equals 2) but does not equal $f(2)$: the third condition fails.
        <br>At $a = 1$ the function is continuous. At $a = 4$ there is a hole and no filled point, so $f(4)$ is not defined (the limit, 3, does exist). At $a = 6$ the left-hand limit is 4 and the right-hand limit is 2, so the limit does not exist.`
    },
    {
      id: 'CAL3-03', topic: 'CAL3', type: 'num', diff: 2,
      stem: R`The function $f$ is defined by
        $$f(x) = \begin{cases} 2x + k & \text{if } x < -1 \\ x^2 + 3 & \text{if } x \ge -1. \end{cases}$$
        For what value of the constant $k$ is $f$ continuous at every real number?`,
      answer: 6, tol: 0,
      explain: R`Each piece is a polynomial, so the only possible trouble is at $x = -1$. There, $f(-1) = (-1)^2 + 3 = 4$ and the limit from the left is $2(-1) + k = k - 2$. Continuity requires $k - 2 = 4$, so $k = 6$.
        <br><i>Common errors:</i> setting the two formulas equal at $x = 1$ instead of $x=-1$, or a sign slip giving $k = -2$.`
    },
    {
      id: 'CAL3-04', topic: 'CAL3', type: 'mc', diff: 2,
      stem: R`The graph of $f(x) = \sqrt[3]{x - 1}$ is shown. Which statement about $f$ at $x = 1$ is true?`,
      figure: {
        type: 'plot', alt: 'Graph of the cube root function shifted right by 1: a smooth increasing curve through (0,-1), (1,0), and (2,1) that becomes vertical as it passes through (1,0).',
        fns: [{ f: 'sign(x-1)*pow(abs(x-1),1/3)', color: 'b' }], xr: [-2, 4], yr: [-2, 2], xstep: 1, ystep: 1
      },
      choices: [
        R`$f$ is continuous at 1 but not differentiable at 1, because the tangent line there is vertical.`,
        R`$f$ is differentiable at 1 with $f'(1) = 0$, because $f(1) = 0$.`,
        R`$f$ is neither continuous nor differentiable at 1, because $f'(1)$ does not exist.`,
        R`$f$ is differentiable at 1, because $f$ is continuous at 1.`],
      answer: 0,
      explain: R`The graph has no break at $x = 1$: $f(1) = 0$, the limit is 0, so $f$ is continuous. The graph is vertical there, so the slopes of secant lines grow without bound and $f'(1)$ does not exist. (Here $f'(x) = \frac{1}{3}(x-1)^{-2/3}$.)
        <br><i>Common errors:</i> confusing the function value $f(1) = 0$ with the slope; assuming that a missing derivative means a missing function value; reversing "differentiable implies continuous" to claim that continuous implies differentiable.`
    },
    {
      id: 'CAL3-05', topic: 'CAL3', type: 'mc', diff: 2, task: [10, 8],
      stem: R`A student claims, "If a function is continuous at every real number, then it is differentiable at every real number." Which function is the best counterexample to show the claim is false?`,
      choices: [R`$f(x) = x^2$`, R`$f(x) = |x - 2|$`, R`$f(x) = \dfrac{1}{x - 2}$`, R`$f(x) = \lfloor x \rfloor$`],
      answer: 1,
      explain: R`A counterexample must be continuous everywhere yet fail to be differentiable somewhere. $f(x) = |x-2|$ is continuous everywhere but has a corner at $x = 2$, where $f'(2)$ does not exist.
        <br><i>Why the others fail:</i> $x^2$ is both continuous and differentiable everywhere, so it agrees with the claim; $\frac{1}{x-2}$ is not defined at 2, so it is not continuous at every real number; $\lfloor x\rfloor$ has jump discontinuities at the integers, so it is not continuous everywhere.`
    },
    {
      id: 'CAL3-06', topic: 'CAL3', type: 'mc', diff: 2, task: [2, 3],
      stem: R`Let $f(x) = \begin{cases} \dfrac{x^2 - 9}{x - 3} & \text{if } x \ne 3 \\ 6 & \text{if } x = 3. \end{cases}$
        A student writes the justification below to show that $f$ is continuous at $x = 3$.
        <div class="work"><b>Dana:</b> $\displaystyle\lim_{x \to 3} \dfrac{x^2 - 9}{x - 3} = \lim_{x \to 3} (x + 3) = 6$, so $f$ is continuous at 3.</div>
        Which statement best evaluates Dana's justification?`,
      choices: [
        R`It is incomplete: Dana must also state that $f(3)$ is defined and equals the limit. Since $f(3) = 6$, her conclusion is correct.`,
        R`It is incorrect: $f$ cannot be continuous at 3 because the formula $\dfrac{x^2-9}{x-3}$ is not defined at $x = 3$.`,
        R`It is incomplete: Dana must also show that $f'(3)$ exists before concluding that $f$ is continuous at 3.`,
        R`It is complete: a function is continuous at a point exactly when the limit exists there.`],
      answer: 0,
      explain: R`Dana verified only the second condition (the limit exists, and equals 6). Continuity also requires $f(3)$ to be defined and equal to that limit. The definition of $f$ gives $f(3) = 6$, so all three conditions hold and $f$ is continuous at 3.
        <br><i>Why the others fail:</i> the second ignores the separate rule $f(3)=6$; the third asks for differentiability, which continuity does not require; the fourth drops the "equals $f(a)$" condition (a removable discontinuity has a limit but is not continuous).`
    },
    {
      id: 'CAL3-07', topic: 'CAL3', type: 'num', diff: 3,
      stem: R`The function $f$ is defined by
        $$f(x) = \begin{cases} x^2 & \text{if } x \le 2 \\ mx + c & \text{if } x > 2, \end{cases}$$
        where $m$ and $c$ are constants chosen so that $f$ is differentiable at $x = 2$. What is the value of $c$?`,
      answer: -4, tol: 0,
      explain: R`Differentiability at 2 requires continuity and equal one-sided derivatives. Left derivative: $2x = 4$ at $x=2$, so $m = 4$. Continuity: $f(2) = 4$, so $2m + c = 4$, giving $8 + c = 4$ and $c = -4$.
        <br><i>Common errors:</i> matching only the function values (with no condition on $m$), or forgetting to use $m=4$ when solving for $c$.`
    },

    /* ================= CAL4: Differentiation and integration techniques ================= */
    {
      id: 'CAL4-01', topic: 'CAL4', type: 'mc', diff: 1,
      stem: R`If $f(x) = x^2 e^{3x}$, what is $f'(x)$?`,
      choices: [R`$(3x^2 + 2x)\,e^{3x}$`, R`$6x\,e^{3x}$`, R`$(x^2 + 2x)\,e^{3x}$`, R`$3x^2 e^{3x}$`],
      answer: 0,
      explain: R`Use the product rule with the chain rule for $e^{3x}$: $f'(x) = 2x\,e^{3x} + x^2\cdot 3e^{3x} = (3x^2 + 2x)e^{3x}$.
        <br><i>Common errors:</i> multiplying the derivatives of the factors ($2x \cdot 3e^{3x} = 6xe^{3x}$); omitting the chain-rule factor 3; differentiating only $e^{3x}$.`
    },
    {
      id: 'CAL4-02', topic: 'CAL4', type: 'mc', diff: 2,
      stem: R`If $h(x) = \dfrac{\sin x}{x^2 + 1}$, what is $h'(x)$?`,
      choices: [
        R`$\dfrac{2x\sin x - (x^2+1)\cos x}{(x^2+1)^2}$`,
        R`$\dfrac{\cos x}{2x}$`,
        R`$\dfrac{(x^2+1)\cos x + 2x\sin x}{(x^2+1)^2}$`,
        R`$\dfrac{(x^2+1)\cos x - 2x\sin x}{(x^2+1)^2}$`],
      answer: 3,
      explain: R`By the quotient rule, $h'(x) = \dfrac{(x^2+1)(\cos x) - (\sin x)(2x)}{(x^2+1)^2}$.
        <br><i>Common errors:</i> reversing the order of the two products in the numerator (first choice); using $+$ in place of $-$ (third choice); differentiating numerator and denominator separately and dividing (second choice).`
    },
    {
      id: 'CAL4-03', topic: 'CAL4', type: 'num', diff: 2,
      stem: R`If $f(x) = (3x^2 + 1)^4$, what is $f'(1)$?`,
      answer: 1536, tol: 0,
      explain: R`By the chain rule, $f'(x) = 4(3x^2+1)^3\cdot 6x$. At $x = 1$: $4(4)^3(6) = 4 \cdot 64 \cdot 6 = 1536$.
        <br><i>Common errors:</i> omitting the inner derivative $6x$ (giving $256$), or lowering the exponent but forgetting the factor 4.`
    },
    {
      id: 'CAL4-04', topic: 'CAL4', type: 'num', diff: 2,
      stem: R`Evaluate $\displaystyle\int_0^1 x\,(x^2 + 1)^3\,dx$. Enter your answer as a decimal.`,
      answer: 1.875, tol: 0.001,
      explain: R`Let $u = x^2 + 1$, so $du = 2x\,dx$ and $x\,dx = \tfrac12\,du$. The limits become $u = 1$ (at $x = 0$) and $u = 2$ (at $x = 1$). Then $\displaystyle\int_1^2 \tfrac12 u^3\,du = \tfrac12\cdot\dfrac{u^4}{4}\Big|_1^2 = \dfrac{16 - 1}{8} = \dfrac{15}{8} = 1.875$.
        <br><i>Common errors:</i> forgetting the factor $\frac12$ (which gives $3.75$), or not changing the limits.`
    },
    {
      id: 'CAL4-05', topic: 'CAL4', type: 'mc', diff: 1,
      stem: R`Which of the following is $\displaystyle\int \left(4x^3 + 2\cos x - \dfrac{1}{x}\right)dx$?`,
      choices: [
        R`$x^4 - 2\sin x - \ln|x| + C$`,
        R`$x^4 + 2\sin x + \ln|x| + C$`,
        R`$12x^2 - 2\sin x + \dfrac{1}{x^2}$`,
        R`$x^4 + 2\sin x - \ln|x| + C$`],
      answer: 3,
      explain: R`Integrate term by term: $\int 4x^3\,dx = x^4$, $\int 2\cos x\,dx = 2\sin x$, and $\int \frac1x\,dx = \ln|x|$, so the result is $x^4 + 2\sin x - \ln|x| + C$. (Check: differentiating gives back $4x^3 + 2\cos x - \frac1x$.)
        <br><i>Common errors:</i> using $\int\cos x\,dx = -\sin x$ (confusing with the derivative), dropping the minus sign on the last term, or differentiating instead of integrating (third choice).`
    },
    {
      id: 'CAL4-06', topic: 'CAL4', type: 'num', diff: 2,
      stem: R`A particle moves along a line with acceleration $a(t) = 6t - 12$ meters per second squared. At $t = 0$ its velocity is $9$ meters per second and its position is $0$ meters. What is the particle's position, in meters, at $t = 4$ seconds?`,
      answer: 4, tol: 0, unit: 'meters',
      explain: R`Integrate acceleration: $v(t) = 3t^2 - 12t + C$, and $v(0) = 9$ gives $C = 9$. Integrate velocity: $s(t) = t^3 - 6t^2 + 9t + D$, and $s(0) = 0$ gives $D = 0$. Then $s(4) = 64 - 96 + 36 = 4$.
        <br><i>Common errors:</i> omitting the initial conditions (constants of integration), or using $v(4)$ (which is 9) instead of $s(4)$.`
    },
    {
      id: 'CAL4-07', topic: 'CAL4', type: 'mc', diff: 2, task: [19, 15],
      stem: R`A student differentiates a product as follows.
        <div class="work"><b>Tomas:</b> If $f(x) = x^2 \sin x$, then $f'(x) = 2x \cos x$.</div>
        If Tomas uses the same reasoning to differentiate $g(x) = x^3 \ln x$, which answer would he most likely write?`,
      choices: [R`$3x$`, R`$3x^2 \ln x + x^2$`, R`$x^2$`, R`$3x^2 \ln x$`],
      answer: 0,
      explain: R`Tomas multiplies the derivatives of the two factors. For $x^3$ and $\ln x$ that gives $3x^2 \cdot \dfrac{1}{x} = 3x$.
        <br><i>Why the others fail:</i> $3x^2\ln x + x^2$ is the <b>correct</b> derivative (product rule), so it reflects a valid method, not Tomas's; $x^2$ and $3x^2 \ln x$ each differentiate only one factor, which is not what Tomas did.`
    },
    {
      id: 'CAL4-08', topic: 'CAL4', type: 'multi', diff: 2, task: [17, 1],
      stem: R`Four students find $\displaystyle\int x\cos(x^2)\,dx$. Which students used a <b>valid</b> method that led to a correct answer? Select all that apply.
        <div class="work"><b>Ana:</b> Let $u = x^2$, so $du = 2x\,dx$. Then $\int x\cos(x^2)\,dx = \tfrac12\int \cos u\,du = \tfrac12\sin(x^2) + C$.</div>
        <div class="work"><b>Ben:</b> Let $u = x^2$, so $du = 2x\,dx$. Then $\int x\cos(x^2)\,dx = \int \cos u\,du = \sin(x^2) + C$.</div>
        <div class="work"><b>Cy:</b> I guessed $\tfrac12 \sin(x^2)$ and checked by differentiating: $\dfrac{d}{dx}\left[\tfrac12\sin(x^2)\right] = \tfrac12\cos(x^2)\cdot 2x = x\cos(x^2)$. So the answer is $\tfrac12\sin(x^2) + C$.</div>
        <div class="work"><b>Dee:</b> The integral of a product is the product of the integrals: $\int x\,dx \cdot \int \cos(x^2)\,dx$, which gives $\dfrac{x^2}{2}\sin(x^2) + C$.</div>`,
      choices: [R`Ana`, R`Ben`, R`Cy`, R`Dee`],
      answer: [0, 2],
      explain: R`Ana's substitution is correct (she accounts for the factor $\frac12$ in $x\,dx = \frac12 du$). Cy's guess-and-check is valid: an antiderivative is confirmed by differentiating it, and the chain rule gives $x\cos(x^2)$.
        <br><i>Why the others fail:</i> Ben forgot the $\frac12$; differentiating $\sin(x^2)$ gives $2x\cos(x^2)$, twice the integrand. Dee's claim is false: there is no product rule for integrals (differentiating her result gives $x\sin(x^2) + x^3\cos(x^2)$, not the integrand).`
    },
    {
      id: 'CAL4-09', topic: 'CAL4', type: 'mc', diff: 3, task: [2, 15],
      stem: R`The position of an object moving along a line is $s(t) = t^3 - 6t^2 + 9t$ feet, for $t \ge 0$ seconds. A student says, "The object changes direction when the acceleration is zero, so it changes direction at $t = 2$." Which is the best response?`,
      choices: [
        R`Incorrect: the object changes direction when the velocity changes sign, which happens at $t = 1$ and $t = 3$. At $t = 2$ the acceleration is zero but the velocity is $-3$ feet per second.`,
        R`Correct: when the acceleration is zero the object stops speeding up or slowing down, so it turns around.`,
        R`Incorrect: the object changes direction when its position is zero, which happens at $t = 0$ and $t = 3$.`,
        R`Incorrect: the object changes direction only at $t = 1$, the first time its velocity is zero.`],
      answer: 0,
      explain: R`Velocity is $v(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3)$, which changes sign at $t=1$ (from positive to negative) and $t=3$ (negative to positive). Acceleration is $a(t) = 6t - 12$, which is zero at $t = 2$, but there $v(2) = -3 \ne 0$: the object is moving in the negative direction at its greatest rate, not turning around.
        <br><i>Why the others fail:</i> the second misreads zero acceleration as a turning point; the third confuses position with velocity ($s(t) = t(t-3)^2$ touches 0 at $t=0$ and $t=3$, but only $t=3$ is a turn); the fourth misses the second sign change at $t = 3$.`
    },
    {
      id: 'CAL4-10', topic: 'CAL4', type: 'mc', diff: 2,
      stem: R`For $-\dfrac{\pi}{2} < x < \dfrac{\pi}{2}$, what is $\dfrac{d}{dx}\left[\ln(\cos x)\right]$?`,
      choices: [R`$\tan x$`, R`$\dfrac{1}{\cos x}$`, R`$-\sec^2 x$`, R`$-\tan x$`],
      answer: 3,
      explain: R`By the chain rule, $\dfrac{d}{dx}\ln(\cos x) = \dfrac{1}{\cos x}\cdot(-\sin x) = -\tan x$.
        <br><i>Common errors:</i> forgetting the factor $-\sin x$ from the chain rule ($\frac{1}{\cos x}$); losing the sign ($\tan x$); confusing this with $\frac{d}{dx}(-\tan x)$, which is $-\sec^2 x$.`
    },

    /* ================= CAL5: Analyzing functions and computing area ================= */
    {
      id: 'CAL5-01', topic: 'CAL5', type: 'mc', diff: 2,
      stem: R`The graph of $f'$, the derivative of a function $f$, is shown. Which statement about $f$ must be true?`,
      figure: {
        type: 'plot', alt: 'Graph of a cubic curve labeled y = f prime of x that crosses the x-axis at x = -1, x = 2, and x = 4: it is below the axis for x < -1, above the axis between -1 and 2, below the axis between 2 and 4, and above the axis for x > 4.',
        fns: [{ f: '(x+1)*(x-2)*(x-4)/8', color: 'b' }], labels: [{ x: 3.6, y: 2.2, text: "y = f′(x)" }],
        xr: [-2, 5], yr: [-4, 3], xstep: 1, ystep: 1
      },
      choices: [R`$f$ has a local maximum at $x = 2$.`, R`$f$ has a local minimum at $x = 2$.`, R`$f$ is decreasing on the interval $(-1, 2)$.`, R`$f$ has a local maximum at $x = -1$.`],
      answer: 0,
      explain: R`The sign of $f'$ tells whether $f$ increases or decreases. Reading the graph: $f' < 0$ for $x < -1$, $f' > 0$ on $(-1, 2)$, $f' < 0$ on $(2, 4)$, and $f' > 0$ for $x > 4$. At $x = 2$, $f'$ changes from positive to negative, so $f$ has a local maximum there.
        <br><i>Common errors:</i> reversing the sign change (calling the maximum a minimum); reading $f'$'s graph as if it were $f$'s (treating "graph below the axis" as "$f$ is decreasing" on the wrong interval); mixing up which zero of $f'$ is a maximum and which is a minimum.`
    },
    {
      id: 'CAL5-02', topic: 'CAL5', type: 'num', diff: 3,
      stem: R`The graph of $f'$, the derivative of a twice-differentiable function $f$, is shown. At what value of $x$ does the graph of $f$ have a point of inflection?`,
      figure: {
        type: 'plot', alt: 'Graph of an upward-opening parabola labeled y = f prime of x that crosses the x-axis at x = 1 and x = 3 and dips below the axis between them.',
        fns: [{ f: 'x*x-4*x+3', color: 'b' }], labels: [{ x: 3.3, y: 3.6, text: "y = f′(x)" }],
        xr: [-1, 5], yr: [-2, 4], xstep: 1, ystep: 1
      },
      answer: 2, tol: 0,
      explain: R`Inflection points of $f$ occur where $f''$ changes sign, that is, where the graph of $f'$ changes from decreasing to increasing (or the reverse). The graph of $f'$ is a parabola that decreases for $x < 2$ and increases for $x > 2$, with its turning point at $x = 2$ (halfway between its zeros at 1 and 3). So $f'' < 0$ before 2 and $f'' > 0$ after 2, and $f$ has a point of inflection at $x = 2$.
        <br><i>Common errors:</i> answering $1$ or $3$ (the zeros of $f'$, which are the local extrema of $f$), or reading $f'$'s graph as $f$'s.`
    },
    {
      id: 'CAL5-03', topic: 'CAL5', type: 'num', diff: 2,
      stem: R`The graph of a continuous function $g$ is shown; it consists of line segments. Let $G(x) = \displaystyle\int_0^x g(t)\,dt$. What is $G(6)$?`,
      figure: {
        type: 'plot', alt: 'Graph of a piecewise linear function g of t: it rises in a straight line from (0,0) to (2,4), falls in a straight line to (4,0), and continues falling below the axis to (6,-2).',
        fns: [{ f: 'x<=2 ? 2*x : (x<=4 ? 8-2*x : 4-x)', color: 'b' }],
        points: [{ x: 2, y: 4 }, { x: 4, y: 0 }, { x: 6, y: -2 }], labels: [{ x: 3, y: 3.6, text: "y = g(t)" }],
        xr: [0, 6], yr: [-3, 5], xstep: 1, ystep: 1, xlabel: 't'
      },
      answer: 6, tol: 0,
      explain: R`$G(6)$ is the signed area between the graph and the $t$-axis from 0 to 6. Triangle above the axis on $[0, 2]$: $\tfrac12(2)(4) = 4$. Triangle above the axis on $[2, 4]$: $\tfrac12(2)(4) = 4$. Triangle below the axis on $[4, 6]$: $-\tfrac12(2)(2) = -2$. So $G(6) = 4 + 4 - 2 = 6$.
        <br><i>Common errors:</i> adding the area below the axis as positive ($10$), stopping at $t = 4$ ($8$), or reporting $g(6) = -2$.`
    },
    {
      id: 'CAL5-04', topic: 'CAL5', type: 'multi', diff: 3,
      stem: R`The graph of $g$ on the interval $[0, 5]$ is shown. Let $G(x) = \displaystyle\int_0^x g(t)\,dt$ for $0 \le x \le 5$. Select all statements that are true.`,
      figure: {
        type: 'plot', alt: 'Graph of an upward-opening parabola y = g of t on 0 to 5, starting at (0,2), crossing the t-axis at t = 1, dipping to a minimum below the axis (passing through (2,-1)), crossing the axis again at t = 4, and rising to (5,2).',
        fns: [{ f: '0.5*(x-1)*(x-4)', color: 'b' }],
        points: [{ x: 0, y: 2 }, { x: 1, y: 0 }, { x: 2, y: -1 }, { x: 4, y: 0 }, { x: 5, y: 2 }], labels: [{ x: 3.1, y: 2.2, text: "y = g(t)" }],
        xr: [0, 5], yr: [-2, 3], xstep: 1, ystep: 1, xlabel: 't'
      },
      choices: [R`$G$ has a local maximum at $x = 1$.`, R`$G$ has a local minimum at $x = 4$.`, R`$G(x) > 0$ for all $x$ in $(0, 5]$.`, R`The graph of $G$ is concave up on the interval $(0, 2)$.`, R`$G'(2) = -1$.`],
      answer: [0, 1, 4],
      explain: R`By the Fundamental Theorem of Calculus, $G'(x) = g(x)$. Since $g$ changes from positive to negative at $x=1$, $G$ has a local maximum there; since $g$ changes from negative to positive at $x=4$, $G$ has a local minimum there. Also $G'(2) = g(2) = -1$.
        <br><i>Why the others fail:</i> $g$ is decreasing on $(0, 2)$, so $G'' = g' < 0$ and $G$ is concave <i>down</i> there. $G$ is not always positive: $g$ is negative on $(1,4)$ and the negative area is larger than the initial positive area, so $G(4) = -\tfrac43$ (and $G(5) = -\tfrac{5}{12}$).`
    },
    {
      id: 'CAL5-05', topic: 'CAL5', type: 'num', diff: 2, calc: true,
      stem: R`The figure shows the graphs of $y = x^2$ and $y = x + 2$, which intersect at the two marked points. What is the area of the region enclosed between the two graphs?`,
      figure: {
        type: 'plot', alt: 'Graphs of the parabola y = x squared and the line y = x + 2 on axes from -2 to 3, intersecting at the marked points (-1, 1) and (2, 4). Between the intersection points the line lies above the parabola.',
        fns: [{ f: 'x*x', color: 'a' }, { f: 'x+2', color: 'b' }],
        points: [{ x: -1, y: 1 }, { x: 2, y: 4 }], labels: [{ x: -1.95, y: 4.6, text: 'y = x²' }, { x: 0.1, y: 3.8, text: 'y = x + 2' }],
        xr: [-2, 3], yr: [-1, 6], xstep: 1, ystep: 1
      },
      answer: 4.5, tol: 0.01,
      explain: R`On $[-1, 2]$ the line is above the parabola, so the area is $\displaystyle\int_{-1}^{2} \left[(x + 2) - x^2\right]dx = \left[\dfrac{x^2}{2} + 2x - \dfrac{x^3}{3}\right]_{-1}^{2} = \left(2 + 4 - \tfrac83\right) - \left(\tfrac12 - 2 + \tfrac13\right) = \dfrac{9}{2}$.
        <br><i>Common errors:</i> subtracting in the wrong order (giving $-4.5$), integrating only $x+2$ or only $x^2$ over the interval, or using the wrong limits.`
    },
    {
      id: 'CAL5-06', topic: 'CAL5', type: 'mc', diff: 2, task: [10, 11],
      stem: R`A student claims, "If $f''(c) = 0$, then the graph of $f$ has a point of inflection at $x = c$." Which function is the best counterexample to the claim?`,
      choices: [R`$f(x) = x^3$`, R`$f(x) = x^2$`, R`$f(x) = x^3 - 3x$`, R`$f(x) = x^4$`],
      answer: 3,
      explain: R`A counterexample needs $f''(c) = 0$ without a change in concavity. For $f(x) = x^4$, $f''(x) = 12x^2$ is zero at $x = 0$ but is positive on both sides, so the graph is concave up on both sides and there is no inflection point.
        <br><i>Why the others fail:</i> $x^3$ and $x^3 - 3x$ both have $f''(x)$ equal to a multiple of $x$ ($6x$), which is zero at 0 and changes sign there, so each has an inflection point (they support the claim); $x^2$ has $f'' = 2$, never zero, so the claim says nothing about it.`
    },
    {
      id: 'CAL5-07', topic: 'CAL5', type: 'mc', diff: 3, task: [21, 15],
      stem: R`A student differentiates a function defined by an integral.
        <div class="work"><b>Priya:</b> Let $F(x) = \displaystyle\int_1^{x^2} \sin t\,dt$. By the Fundamental Theorem of Calculus, $F'(x) = \sin(x^2)$.</div>
        Which response gives the correct derivative and identifies the error in Priya's work?`,
      choices: [
        R`$F'(x) = \sin(x^2) - \sin 1$; Priya forgot to subtract the value at the lower limit.`,
        R`$F'(x) = 2x\sin(x^2)$; Priya did not apply the chain rule for the upper limit $x^2$.`,
        R`$F'(x) = \sin(x^2)$ is correct: the derivative of an integral is always the integrand evaluated at the upper limit.`,
        R`$F'(x) = -\cos(x^2) + \cos 1$; Priya must find an antiderivative before differentiating.`],
      answer: 1,
      explain: R`Let $u = x^2$. Then $F(x) = \int_1^{u} \sin t\,dt$ and, by the chain rule and the Fundamental Theorem, $F'(x) = \sin(u)\cdot\dfrac{du}{dx} = 2x\sin(x^2)$. (Check by evaluating: $F(x) = \cos 1 - \cos(x^2)$, whose derivative is $2x\sin(x^2)$.) Priya's answer looks valid because it applies the theorem to the integrand, but it ignores that the upper limit is a function of $x$, not $x$ itself.
        <br><i>Why the others fail:</i> the first subtracts a constant, whose derivative is zero anyway; the third repeats the misconception; the fourth gives $F(x)$ itself, not $F'(x)$.`
    },
    {
      id: 'CAL5-08', topic: 'CAL5', type: 'num', diff: 2,
      stem: R`What is the total area of the region bounded by the graph of $y = x^2 - 6x$ and the $x$-axis?`,
      answer: 36, tol: 0,
      explain: R`The graph meets the $x$-axis where $x^2 - 6x = 0$, at $x = 0$ and $x = 6$, and lies below the axis in between. Then $\displaystyle\int_0^6 (x^2 - 6x)\,dx = \left[\dfrac{x^3}{3} - 3x^2\right]_0^6 = 72 - 108 = -36$, and the area is the positive value $36$.
        <br><i>Common errors:</i> reporting the signed integral $-36$ as the area, or using the wrong limits.`
    }
  );
})();
