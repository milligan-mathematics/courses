/* Praxis 5165 diagnostic: FUN (Functions) question bank. All keys verified in checks-fun.py. */
(function () {
  var R = String.raw;
  PXD.bank.push(

    /* ================= FUN1: Functions and function notation ================= */
    {
      id: 'FUN1-01', topic: 'FUN1', type: 'mc', diff: 1,
      stem: R`Which set of ordered pairs $(x, y)$ does <b>not</b> represent $y$ as a function of $x$?`,
      choices: [
        R`$\{(1,4),\ (2,4),\ (3,4),\ (4,4)\}$`,
        R`$\{(0,1),\ (1,2),\ (2,3),\ (1,4)\}$`,
        R`$\{(-1,2),\ (0,5),\ (1,2),\ (2,7)\}$`,
        R`$\{(3,-1),\ (5,0),\ (7,1),\ (9,2)\}$`],
      answer: 1,
      explain: R`A relation is a function when each input is paired with exactly one output. In choice B the input $x=1$ is paired with both $y=2$ and $y=4$, so B is not a function. In A and C, different inputs share an output, which is allowed (choosing A or C comes from believing outputs may not repeat). Choice D has four different inputs.`
    },
    {
      id: 'FUN1-02', topic: 'FUN1', type: 'mc', diff: 2, task: [2],
      stem: R`In class, Ms. Alvarez shows the graph of the relation $x = y^2$ and asks whether it defines $y$ as a function of $x$. Which student response gives a correct justification?`,
      figure: {
        type: 'plot', alt: 'Graph of the relation x = y squared: a parabola opening to the right with vertex at the origin, passing through the points (4, 2) and (4, -2).',
        fns: [{ f: 'sqrt(x)', from: 0, to: 9 }, { f: '-sqrt(x)', from: 0, to: 9, color: 'a' }],
        points: [{ x: 4, y: 2, label: '(4, 2)', dx: -24, dy: -10 }, { x: 4, y: -2, label: '(4, -2)', dx: -26, dy: 20 }],
        xr: [-1, 9], yr: [-4, 4], xstep: 1, ystep: 1
      },
      choices: [
        R`"Yes, because every $y$-value has only one $x$-value, namely $x = y^2$."`,
        R`"No, because the input $x = 4$ is paired with two outputs, $y = 2$ and $y = -2$; a vertical line at $x=4$ meets the graph twice."`,
        R`"Yes, because the graph passes the horizontal line test."`,
        R`"No, because the graph is curved instead of a straight line."`],
      answer: 1,
      explain: R`For $y$ to be a function of $x$, each input $x$ must give exactly one output $y$. Here $x=4$ gives $y=2$ and $y=-2$, and equivalently a vertical line meets the graph in two points, so the relation is not a function. <br><i>Traps:</i> A reverses the roles (it shows $x$ is a function of $y$); C uses the horizontal line test, which tells whether the <i>inverse</i> relation is a function, not whether this one is; D confuses "function" with "linear function."`
    },
    {
      id: 'FUN1-03', topic: 'FUN1', type: 'num', diff: 1,
      stem: R`The function $g$ is defined by $g(x) = 3x^2 - 2x + 1$. What is $g(-2)$?`,
      answer: 17, tol: 0,
      explain: R`$g(-2) = 3(-2)^2 - 2(-2) + 1 = 12 + 4 + 1 = 17$. The usual slip is evaluating $-2^2$ as $-4$ (or $3\cdot(-2)^2$ as $-12$), which gives $-12+4+1=-7$.`
    },
    {
      id: 'FUN1-04', topic: 'FUN1', type: 'mc', diff: 2,
      stem: R`Let $T(h)$ be the temperature, in degrees Fahrenheit, $h$ hours after noon. It is known that $T(8) - T(2) = -9$. Which statement is the best interpretation of this equation?`,
      choices: [
        R`The temperature 8 hours after noon was $9^\circ$F lower than the temperature 2 hours after noon.`,
        R`The temperature fell $9^\circ$F each hour between 2 hours and 8 hours after noon.`,
        R`Six hours after noon, the temperature was $-9^\circ$F.`,
        R`The temperature 8 hours after noon was $-9^\circ$F.`],
      answer: 0,
      explain: R`$T(8)$ and $T(2)$ are temperatures at two specific times, and their difference $T(8)-T(2)=-9$ is the net change: the temperature at hour 8 is 9 degrees below the temperature at hour 2. B treats the net change as a per-hour rate; C mistakes the difference of inputs ($8-2$) for an input; D reads the difference as the value of $T(8)$ itself.`
    },
    {
      id: 'FUN1-05', topic: 'FUN1', type: 'mc', diff: 2,
      stem: R`What is the domain of $f(x) = \dfrac{\sqrt{x+3}}{x-1}$?`,
      choices: [
        R`$[-3, 1) \cup (1, \infty)$`,
        R`$(-3, 1) \cup (1, \infty)$`,
        R`$[-3, \infty)$`,
        R`$(-\infty, 1) \cup (1, \infty)$`],
      answer: 0,
      explain: R`The radicand must be nonnegative: $x+3 \ge 0$, so $x \ge -3$ (and $x=-3$ is allowed because $\sqrt{0}=0$). The denominator cannot be zero: $x \ne 1$. Together: $[-3,1)\cup(1,\infty)$. B wrongly excludes $-3$; C forgets the denominator; D forgets the square root.`
    },
    {
      id: 'FUN1-06', topic: 'FUN1', type: 'mc', diff: 2, task: [15],
      stem: R`A student is asked for the domain and range of the function $f$ whose graph is shown. The student answers: "Domain: $[0, 4]$; Range: $[-1, 3]$." Which is the most likely source of the student's error?`,
      figure: {
        type: 'plot', alt: 'Graph of a downward-opening parabola with vertex (1, 4), starting at the closed point (-1, 0) on the left and ending at the closed point (3, 0) on the right; it exists only for x from -1 to 3.',
        fns: [{ f: '4-(x-1)^2', from: -1, to: 3 }],
        points: [{ x: -1, y: 0 }, { x: 3, y: 0 }], xr: [-3, 5], yr: [-2, 5], xstep: 1, ystep: 1
      },
      choices: [
        R`The student read the horizontal extent as the range and the vertical extent as the domain.`,
        R`The student described only where $f$ is positive rather than the full domain and range.`,
        R`The student used interval notation incorrectly, writing brackets where parentheses are needed.`,
        R`The student assumed the domain is all real numbers because the graph is a parabola.`],
      answer: 0,
      explain: R`The graph runs from $x=-1$ to $x=3$ (domain $[-1,3]$) and from $y=0$ to $y=4$ (range $[0,4]$). The student's intervals are these two intervals in the wrong order: the outputs were reported as the domain and the inputs as the range. The other explanations do not produce the intervals the student wrote.`
    },
    {
      id: 'FUN1-07', topic: 'FUN1', type: 'multi', diff: 3,
      stem: R`For which of these equations is $y$ a function of $x$? Select all that apply.`,
      choices: [R`$x^2 + y = 4$`, R`$x + y^2 = 4$`, R`$y = \sqrt{x}$`, R`$|y| = x$`, R`$x = 5$`],
      answer: [0, 2],
      explain: R`$x^2+y=4$ gives $y=4-x^2$, one output for each $x$ (function). $y=\sqrt{x}$ has exactly one nonnegative output for each $x\ge 0$ (function). $x+y^2=4$ gives $y=\pm\sqrt{4-x}$ (two outputs for $x \lt 4$). $|y|=x$ gives $y=\pm x$ for $x>0$. $x=5$ is a vertical line: one input paired with every real output. Squaring $y$ or taking $|y|$ hides the "$\pm$", which is why students mistakenly select B and D.`
    },

    /* ================= FUN2: Analyzing function behavior ================= */
    {
      id: 'FUN2-01', topic: 'FUN2', type: 'mc', diff: 2,
      stem: R`The graph shows a hiker's elevation $E$, in feet, as a function of time $t$, in hours, during a 7-hour hike. Which statement is true?`,
      figure: {
        type: 'plot', alt: 'Piecewise linear graph of elevation versus time: from (0, 800) rising to (2, 1400), falling to (3, 1100), level at 1100 until t = 5, then rising to (7, 1700).',
        fns: [{ f: 'x<2 ? 800+300*x : (x<3 ? 1400-300*(x-2) : (x<5 ? 1100 : 1100+300*(x-5)))', from: 0, to: 7 }],
        points: [{ x: 0, y: 800 }, { x: 2, y: 1400 }, { x: 3, y: 1100 }, { x: 5, y: 1100 }, { x: 7, y: 1700 }],
        xr: [0, 7], yr: [600, 1800], xstep: 1, ystep: 200, xlabel: 'Time t (hours)', ylabel: 'Elevation E (feet)'
      },
      choices: [
        R`The hiker's elevation was greatest at $t = 2$.`,
        R`The hiker was descending between $t = 2$ and $t = 3$.`,
        R`The hiker's elevation was constant between $t = 3$ and $t = 7$.`,
        R`The hiker's elevation at $t = 3$ was the same as at $t = 0$.`],
      answer: 1,
      explain: R`Between $t=2$ and $t=3$ the elevation drops from 1400 to 1100 feet, so the hiker is descending. The value at $t=2$ (1400) is only a local maximum; the greatest elevation is 1700 feet at $t=7$ (A). The graph is level only from $t=3$ to $t=5$ (C). $E(3)=1100$ but $E(0)=800$ (D).`
    },
    {
      id: 'FUN2-02', topic: 'FUN2', type: 'mc', diff: 2, calc: true,
      stem: R`A polynomial function $f$ is increasing on $(-\infty, -1)$, decreasing on $(-1, 2)$, and increasing on $(2, \infty)$. Which of these could be $f(x)$?`,
      choices: [
        R`$f(x) = x^3 - 1.5x^2 - 6x$`,
        R`$f(x) = -x^3 + 1.5x^2 + 6x$`,
        R`$f(x) = x^3 + 1.5x^2 - 6x$`,
        R`$f(x) = x^3 - 3x^2 - 6x$`],
      answer: 0,
      explain: R`The turning points are at $x=-1$ and $x=2$, so $f'(x)$ must equal $c(x+1)(x-2)$ with $c>0$ (positive, so $f$ increases as $x\to\infty$). For choice A, $f'(x)=3x^2-3x-6=3(x+1)(x-2)$. Choice B has the right turning points but the opposite pattern (decreasing, increasing, decreasing). Choices C and D have turning points at $x=-2,1$ and $x=1\pm\sqrt3$. Graphing each option is a fast way to confirm.`
    },
    {
      id: 'FUN2-03', topic: 'FUN2', type: 'mc', diff: 2, task: [17],
      stem: R`A student converts $f(x) = 2x^2 - 12x + 7$ to vertex form.
        <div class="work">$f(x) = 2(x^2 - 6x) + 7$<br>$\phantom{f(x)} = 2(x^2 - 6x + 9) + 7 - 9$<br>$\phantom{f(x)} = 2(x-3)^2 - 2$</div>
        Which statement about the student's work is correct?`,
      choices: [
        R`The student should have subtracted 18 instead of 9, because the 9 added inside the parentheses is multiplied by 2. The correct vertex form is $2(x-3)^2 - 11$.`,
        R`The student should have added 9 to the constant term instead of subtracting it. The correct vertex form is $2(x-3)^2 + 16$.`,
        R`The student should have completed the square with $(x+3)^2$. The correct vertex form is $2(x+3)^2 - 11$.`,
        R`The work is correct: the vertex of the parabola is $(3, -2)$.`],
      answer: 0,
      explain: R`Adding 9 inside $2(\ \ )$ actually adds $2\cdot 9 = 18$ to the expression, so 18 must be subtracted: $2(x^2-6x+9)+7-18=2(x-3)^2-11$. Check: $f(3)=18-36+7=-11$, so the vertex is $(3,-11)$, not $(3,-2)$. The student's slip is forgetting the leading coefficient when balancing the added term.`
    },
    {
      id: 'FUN2-04', topic: 'FUN2', type: 'num', diff: 2,
      stem: R`What is the maximum value of the function $f(x) = -2(x-1)(x+5)$?`,
      answer: 18, tol: 0,
      explain: R`The zeros are $x=1$ and $x=-5$, so the axis of symmetry (and the maximum, since $-2 \lt 0$) is at their midpoint $x=-2$. Then $f(-2) = -2(-3)(3) = 18$. A common error is to report the zero-average $-2$ as the maximum value, or to use the vertex $x$-coordinate $-2$ without evaluating.`
    },
    {
      id: 'FUN2-05', topic: 'FUN2', type: 'mc', diff: 2,
      stem: R`The graph shows an exponential decay model of the mass, in milligrams, of a sample after $x$ days. Which equation matches the graph?`,
      figure: {
        type: 'plot', alt: 'Decreasing curve that flattens toward the x-axis; it passes through (0, 80) and (2, 20).',
        fns: [{ f: '80*0.5^x', from: -1, to: 6 }],
        points: [{ x: 0, y: 80, label: '(0, 80)', dx: 8, dy: -8 }, { x: 2, y: 20, label: '(2, 20)', dx: 8, dy: -8 }],
        xr: [-1, 6], yr: [0, 100], xstep: 1, ystep: 20, xlabel: 'Days', ylabel: 'Mass (mg)'
      },
      choices: [R`$y = 80(0.5)^x$`, R`$y = 80(0.25)^x$`, R`$y = 80 - 30x$`, R`$y = 80(0.75)^x$`],
      answer: 0,
      explain: R`The initial value is $a=80$. Over 2 days the mass is multiplied by $20/80=1/4$, so $b^2=1/4$ and $b=1/2$ per day. Check: $80(0.5)^2=20$. Choice B uses the two-day factor as the daily factor; C is a line that happens to hit both points but a line does not level off; D uses the "percent lost" (75%) as the base.`
    },
    {
      id: 'FUN2-06', topic: 'FUN2', type: 'mc', diff: 2, task: [10],
      stem: R`A student claims, "If a function is not even, then it must be odd." Which function is a counterexample to the claim?`,
      choices: [R`$f(x) = x^2 + 1$`, R`$f(x) = x^3 - x$`, R`$f(x) = x^2 + x$`, R`$f(x) = |x|$`],
      answer: 2,
      explain: R`A counterexample must be neither even nor odd. For $f(x)=x^2+x$: $f(2)=6$, $f(-2)=2$; since $f(-2)\ne f(2)$ it is not even, and $f(-2)\ne -f(2)$ so it is not odd. The others do not work: $x^2+1$ and $|x|$ are even (so the "if" part is false, not a counterexample), and $x^3-x$ is odd.`
    },
    {
      id: 'FUN2-07', topic: 'FUN2', type: 'multi', diff: 2,
      stem: R`The graph of a function $f$ is shown. Which statements are true? Select all that apply.`,
      figure: {
        type: 'plot', alt: 'Graph of a cubic curve that passes through the origin and the points (-2, 0) and (2, 0); it rises to a local maximum left of the origin, falls through the origin, reaches a local minimum right of the origin, then rises. It looks the same after a half-turn about the origin.',
        fns: [{ f: '(x^3-4*x)/2', from: -3, to: 3 }],
        points: [{ x: -2, y: 0 }, { x: 0, y: 0 }, { x: 2, y: 0 }], xr: [-3, 3], yr: [-5, 5], xstep: 1, ystep: 1
      },
      choices: [R`$f$ is an odd function`, R`$f(-x) = f(x)$ for every $x$`, R`The graph is symmetric about the origin`, R`$f(0) = 0$`, R`The graph is symmetric about the $y$-axis`],
      answer: [0, 2, 3],
      explain: R`Rotating the graph $180^\circ$ about the origin maps it onto itself, which is symmetry about the origin, the signature of an odd function ($f(-x)=-f(x)$). The graph passes through the origin, so $f(0)=0$. It is not symmetric about the $y$-axis: for instance the graph is above the axis on the far right and below it on the far left, so $f(-x)\ne f(x)$.`
    },
    {
      id: 'FUN2-08', topic: 'FUN2', type: 'mc', diff: 2,
      stem: R`Function $f$ is given by the table, and function $g$ is given by the graph.
        <table class="q-table"><tr><th>$x$</th><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><th>$f(x)$</th><td>1</td><td>3</td><td>5</td><td>7</td></tr></table>
        Which statement is true?`,
      figure: {
        type: 'plot', alt: 'Graph of g: a parabola opening upward with vertex (1, 2), passing through (0, 3), (2, 3), and (3, 6).',
        fns: [{ f: '(x-1)^2+2', from: -1.5, to: 3.5, color: 'b' }],
        points: [{ x: 0, y: 3 }, { x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 6 }],
        xr: [-2, 4], yr: [-1, 8], xstep: 1, ystep: 1, labels: [{ x: 3.1, y: 7, text: 'g', dx: 4, dy: 4 }]
      },
      choices: [
        R`The average rate of change of $f$ on $[0, 3]$ is greater than that of $g$ on $[0, 3]$.`,
        R`The $y$-intercept of $f$ is greater than the $y$-intercept of $g$.`,
        R`$g(x) \lt f(x)$ for every $x$ in $[0, 3]$.`,
        R`Both $f$ and $g$ are increasing on $[0, 3]$.`],
      answer: 0,
      explain: R`From the table, $f$ is linear with average rate $\frac{7-1}{3-0}=2$. From the graph, $g(0)=3$ and $g(3)=6$, so its average rate on $[0,3]$ is $\frac{6-3}{3}=1$. A is true. B is false: $f(0)=1 \lt g(0)=3$. C is false: at $x=3$, $g(3)=6 \lt f(3)=7$ but at $x=0$, $g(0)=3>f(0)=1$. D is false because $g$ decreases on $[0,1]$.`
    },
    {
      id: 'FUN2-09', topic: 'FUN2', type: 'num', diff: 2, calc: true,
      stem: R`A 120-milligram sample of a substance has a half-life of 6 days, so the mass remaining after $t$ days is $M(t) = 120\left(\tfrac{1}{2}\right)^{t/6}$ milligrams. To the nearest tenth of a milligram, how much remains after 15 days?`,
      answer: 21.2, tol: 0.05, unit: 'milligrams',
      explain: R`$M(15) = 120\left(\tfrac12\right)^{15/6} = 120\left(\tfrac12\right)^{2.5} = 120 \cdot 0.17678 \approx 21.2$ mg. Rounding the exponent to 2 gives $30$, and to 3 gives $15$, both too coarse; using $t$ in place of $t/6$ is the other common slip.`
    },
    {
      id: 'FUN2-10', topic: 'FUN2', type: 'mc', diff: 2, task: [13],
      stem: R`Ms. Osei wants her students to see the maximum value of $f(x) = -3x^2 + 12x + 15$ by inspection, without graphing or further computation. Which equivalent form of $f(x)$ shows this most directly?`,
      choices: [
        R`$f(x) = -3x^2 + 12x + 15$`,
        R`$f(x) = -3(x-5)(x+1)$`,
        R`$f(x) = -3(x-2)^2 + 27$`,
        R`$f(x) = -3x(x-4) + 15$`],
      answer: 2,
      explain: R`All four expressions are equal. Vertex form $-3(x-2)^2+27$ shows the maximum directly: the squared term is never positive and is 0 at $x=2$, so the maximum value is 27. Standard form shows the $y$-intercept (15), and factored form shows the zeros $5$ and $-1$; D is an equivalent form that highlights neither.`
    },

    /* ================= FUN3: Modeling relationships with functions ================= */
    {
      id: 'FUN3-01', topic: 'FUN3', type: 'mc', diff: 2,
      stem: R`A rectangular garden has a perimeter of 60 feet. If $w$ represents the width of the garden in feet, which function gives the area $A$ of the garden, in square feet, in terms of $w$?`,
      choices: [R`$A(w) = w(30 - w)$`, R`$A(w) = w(60 - w)$`, R`$A(w) = w(60 - 2w)$`, R`$A(w) = 30w$`],
      answer: 0,
      explain: R`The perimeter is $2w + 2\ell = 60$, so the length is $\ell = 30 - w$ and $A = w\ell = w(30-w)$. Choice B treats 60 as the sum of one width and one length; C uses $60-2w$, which is <i>twice</i> the length; D multiplies the width by half the perimeter without subtracting the width.`
    },
    {
      id: 'FUN3-02', topic: 'FUN3', type: 'mc', diff: 1,
      stem: R`The first row of a theater has 14 seats, and each row after the first has 3 more seats than the row in front of it. Which expression gives the number of seats in row $n$?`,
      choices: [R`$14 + 3(n-1)$`, R`$14 + 3n$`, R`$3 + 14(n-1)$`, R`$14 \cdot 3^{n-1}$`],
      answer: 0,
      explain: R`The seats form an arithmetic sequence with first term 14 and common difference 3, so $a_n = 14 + 3(n-1)$. Check: row 1 has $14$ seats and row 2 has $17$. B counts one extra step (row 1 would have 17 seats); C swaps the first term and the difference; D treats the pattern as multiplication (a geometric sequence).`
    },
    {
      id: 'FUN3-03', topic: 'FUN3', type: 'num', diff: 2,
      stem: R`A geometric sequence has $a_3 = 12$ and $a_6 = 96$. What is $a_1$?`,
      answer: 3, tol: 0,
      explain: R`From $a_3$ to $a_6$ there are 3 multiplications by the common ratio $r$, so $r^3 = 96/12 = 8$ and $r = 2$. Then $a_1 = a_3 / r^2 = 12/4 = 3$. Check: $3, 6, 12, 24, 48, 96$. Using $r = 96/12 = 8$ (forgetting to take the cube root) gives $a_1 = 12/64$.`
    },
    {
      id: 'FUN3-04', topic: 'FUN3', type: 'mc', diff: 2, task: [15, 17],
      stem: R`The recursive rule $a_1 = 7,\ a_{n+1} = a_n - 4$ defines a sequence. A student converts it to an explicit rule and writes $a_n = 7 - 4n$. Which statement best describes the student's error?
        <div class="work">Recursive: $7,\ 3,\ -1,\ -5,\ \dots$<br>Student's explicit rule: $a_n = 7 - 4n$</div>`,
      choices: [
        R`The student used $n$ where $n - 1$ belongs. The rule gives $a_1 = 3$, not 7; the correct rule is $a_n = 7 - 4(n-1)$.`,
        R`The common difference should be $+4$, because the sequence is defined recursively.`,
        R`Because the sequence is decreasing, the explicit rule should be $a_n = 7(-4)^{n-1}$.`,
        R`There is no error, because $7 - 4n$ and $7 - 4(n-1)$ produce the same terms.`],
      answer: 0,
      explain: R`The recursion starts at $a_1 = 7$ and subtracts 4 each step, so $a_n = 7 - 4(n-1) = 11 - 4n$. The student's $7-4n$ gives $a_1 = 3$: it starts one step too late (it is really the formula for a sequence whose first term is 3). Choice C confuses arithmetic with geometric sequences, and B misreads the sign of the difference.`
    },
    {
      id: 'FUN3-05', topic: 'FUN3', type: 'mc', diff: 2,
      stem: R`A sequence is defined explicitly by $a_n = 20\left(\tfrac{1}{2}\right)^{n-1}$. Which recursive definition gives the same sequence?`,
      choices: [
        R`$a_1 = 20,\ a_n = \tfrac{1}{2}\,a_{n-1}$ for $n \ge 2$`,
        R`$a_1 = 20,\ a_n = a_{n-1} - \tfrac{1}{2}$ for $n \ge 2$`,
        R`$a_1 = 10,\ a_n = \tfrac{1}{2}\,a_{n-1}$ for $n \ge 2$`,
        R`$a_1 = \tfrac{1}{2},\ a_n = 20\,a_{n-1}$ for $n \ge 2$`],
      answer: 0,
      explain: R`The first term is $a_1 = 20$ and the sequence $20, 10, 5, 2.5, \dots$ is geometric with ratio $\tfrac12$, so $a_n = \tfrac12 a_{n-1}$. B subtracts (an arithmetic pattern); C starts at $a_2$ instead of $a_1$; D swaps the first term and the ratio.`
    },
    {
      id: 'FUN3-06', topic: 'FUN3', type: 'multi', diff: 2, task: [6],
      stem: R`Ms. Ortiz makes a card sort in which students place recursive rules into a "geometric sequence" pile. Which rules belong in that pile? Select all that apply.`,
      choices: [
        R`$a_1 = 4,\ a_{n+1} = -a_n$`,
        R`$a_1 = 2,\ a_{n+1} = a_n + 6$`,
        R`$a_1 = 81,\ a_{n+1} = \dfrac{a_n}{3}$`,
        R`$a_1 = 1,\ a_{n+1} = a_n + n$`,
        R`$a_1 = 3,\ a_{n+1} = a_n^{\,2}$`],
      answer: [0, 2],
      explain: R`A geometric sequence multiplies each term by a fixed ratio. A: $4, -4, 4, \dots$ has $r=-1$. C: $81, 27, 9, \dots$ has $r=\tfrac13$. B adds 6 each time (arithmetic). D adds $n$, which changes each step: $1, 2, 4, 7, \dots$ (neither). E squares each term: $3, 9, 81, \dots$; the ratios $3$ and $9$ are not constant (neither).`
    },
    {
      id: 'FUN3-07', topic: 'FUN3', type: 'mc', diff: 2,
      stem: R`The 5th term of an arithmetic sequence is 23, and the 12th term is 58. What is the 20th term?`,
      choices: ['88', '93', '98', '103'], answer: 2, order: 'fixed',
      explain: R`Seven steps take the sequence from 23 to 58, so $d = 35/7 = 5$. Then $a_{20} = a_{12} + 8d = 58 + 40 = 98$. Choice 88 counts only 6 steps from term 12 instead of 8; 93 comes from an off-by-one slip when finding $a_1$ ($a_1 = 23 - 5\cdot 5 = -2$ instead of $23 - 4\cdot5 = 3$); 103 counts 9 steps from term 12 rather than 8.`
    },

    /* ================= FUN4: New functions from old ================= */
    {
      id: 'FUN4-01', topic: 'FUN4', type: 'mc', diff: 2,
      stem: R`The graphs of $f(x) = x^2$ and a function $g$ are shown. Which expression defines $g(x)$?`,
      figure: {
        type: 'plot', alt: 'Two upward-opening parabolas of the same shape. The curve labeled f has its vertex at the origin. The curve labeled g has its vertex at (-2, -3), so it is f shifted 2 units left and 3 units down.',
        fns: [{ f: 'x^2', from: -3, to: 3, color: 'a' }, { f: '(x+2)^2-3', from: -6, to: 2, color: 'b' }],
        points: [{ x: 0, y: 0 }, { x: -2, y: -3 }], xr: [-6, 4], yr: [-4, 8], xstep: 1, ystep: 1,
        labels: [{ x: 2.75, y: 5.8, text: 'f' }, { x: -5.6, y: 4.6, text: 'g' }]
      },
      choices: [R`$g(x) = f(x+2) - 3$`, R`$g(x) = f(x-2) - 3$`, R`$g(x) = f(x+2) + 3$`, R`$g(x) = f(x-3) + 2$`],
      answer: 0,
      explain: R`The vertex moves from $(0,0)$ to $(-2,-3)$: 2 units left and 3 units down. Replacing $x$ by $x+2$ shifts left 2 (horizontal changes act "backwards"), and subtracting 3 shifts down 3, so $g(x) = f(x+2)-3 = (x+2)^2-3$. Choice B shifts right (the usual sign trap), C shifts up, and D swaps the horizontal and vertical shifts.`
    },
    {
      id: 'FUN4-02', topic: 'FUN4', type: 'num', diff: 2,
      stem: R`The graph of $y = f(x)$ and the graph of $y = g(x) = f(kx)$, where $k$ is a positive constant, are shown. What is the value of $k$?`,
      figure: {
        type: 'plot', alt: 'Two downward-opening parabolas. The wider curve f has x-intercepts at 0 and 6 with vertex at (3, 9). The narrower curve g has x-intercepts at 0 and 2 with vertex at (1, 9).',
        fns: [{ f: 'x*(6-x)', from: -1, to: 7.5, color: 'a' }, { f: '3*x*(6-3*x)', from: -0.5, to: 2.5, color: 'b' }],
        points: [{ x: 2, y: 0, label: '(2, 0)', dx: 8, dy: -8 }, { x: 6, y: 0, label: '(6, 0)', dx: 8, dy: -8 }],
        xr: [-1, 8], yr: [-2, 10], xstep: 1, ystep: 2,
        labels: [{ x: 4.7, y: 6.9, text: 'f' }, { x: 1.25, y: 9.7, text: 'g' }]
      },
      answer: 3, tol: 0,
      explain: R`The zeros of $f$ are $x=0$ and $x=6$. The zeros of $g(x)=f(kx)$ occur where $kx = 6$, that is, $x = 6/k$. The graph shows $x=2$, so $6/k = 2$ and $k = 3$: replacing $x$ by $3x$ compresses the graph horizontally by a factor of 3. (Using $k = \tfrac13$ is the usual mistake: it stretches instead of compressing.)`
    },
    {
      id: 'FUN4-03', topic: 'FUN4', type: 'mc', diff: 2,
      stem: R`Let $d(t)$ be the distance, in miles, that a truck has traveled $t$ hours after leaving a depot. Suppose $d$ is invertible and $d^{-1}(150) = 2.5$. Which statement is a correct interpretation?`,
      choices: [
        R`The truck has traveled 150 miles after 2.5 hours.`,
        R`The truck has traveled 2.5 miles after 150 hours.`,
        R`The reciprocal of the distance traveled after 150 hours is 2.5.`,
        R`The truck travels at a constant rate of 150 miles in every 2.5 hours.`],
      answer: 0,
      explain: R`The inverse takes a distance as input and returns the time: $d^{-1}(150)=2.5$ means the truck reaches 150 miles at $t=2.5$ hours, which is the same as $d(2.5)=150$. B swaps input and output; C reads $d^{-1}$ as a reciprocal $1/d$; D adds a constant-speed claim that the information does not support.`
    },
    {
      id: 'FUN4-04', topic: 'FUN4', type: 'mc', diff: 2,
      stem: R`The graph of a function $f$ on the interval $0 \le x \le 6$ is shown; $f$ is increasing, and the graph consists of line segments joining the plotted points. What is the value of $f^{-1}(3) + f^{-1}(8)$?`,
      figure: {
        type: 'plot', alt: 'Increasing piecewise linear graph through the plotted points (0, 1), (2, 3), (4, 7), and (6, 8) on a grid.',
        fns: [{ f: 'x<2 ? 1+x : (x<4 ? 3+2*(x-2) : 7+0.5*(x-4))', from: 0, to: 6 }],
        points: [{ x: 0, y: 1 }, { x: 2, y: 3 }, { x: 4, y: 7 }, { x: 6, y: 8 }], xr: [-1, 7], yr: [-1, 9], xstep: 1, ystep: 1
      },
      choices: ['2', '6', '8', '11'], answer: 2, order: 'fixed',
      explain: R`$f^{-1}(3)$ is the input that produces output 3: $f(2)=3$, so $f^{-1}(3)=2$. Likewise $f(6)=8$, so $f^{-1}(8)=6$. The sum is $2+6=8$. Choice 2 is only $f^{-1}(3)$; 6 is only $f^{-1}(8)$; 11 adds the outputs $3+8$ instead of the inputs.`
    },
    {
      id: 'FUN4-05', topic: 'FUN4', type: 'multi', diff: 3, task: [17],
      stem: R`Ms. Hall asks her class to restrict the domain of $f(x) = (x-3)^2 + 1$ so that the restricted function has an inverse. Students propose the restrictions below. Which restrictions work? Select all that apply.`,
      choices: [R`$x \ge 3$`, R`$x \le 1$`, R`$x \ge 0$`, R`$1 \le x \le 5$`, R`$x > 4$`],
      answer: [0, 1, 4],
      explain: R`A restricted function has an inverse if it is one-to-one, so the restricted domain cannot contain two points symmetric about the vertex $x=3$. $f$ is decreasing on $(-\infty,3]$ and increasing on $[3,\infty)$, so $x\ge3$, $x\le1$ (part of the decreasing side), and $x>4$ (part of the increasing side) are all one-to-one. $x\ge0$ contains both $x=2$ and $x=4$, where $f=2$; and $1\le x\le5$ contains the vertex and pairs such as $x=2$ and $x=4$. Students often think only $x \ge 3$ or $x\le 3$ are allowed.`
    },
    {
      id: 'FUN4-06', topic: 'FUN4', type: 'mc', diff: 2, task: [15],
      stem: R`To find the inverse of $f(x) = 3x - 5$, a student writes $f^{-1}(x) = \dfrac{1}{3x - 5}$. Which misconception is most likely behind this answer?`,
      choices: [
        R`The student interprets the $-1$ in $f^{-1}$ as a reciprocal (an exponent) rather than as notation for the inverse function.`,
        R`The student swapped $x$ and $y$ but did not solve the new equation for $y$.`,
        R`The student added 5 to both sides, but then divided by 3 first, in the wrong order.`,
        R`The student reflected the graph of $f$ over the $x$-axis instead of over the line $y = x$.`],
      answer: 0,
      explain: R`The inverse undoes $f$: from $x = 3y-5$ we get $y = \dfrac{x+5}{3}$, so $f^{-1}(x) = \dfrac{x+5}{3}$. The student instead wrote $1/(3x-5) = 1/f(x)$, reading $f^{-1}$ as "one over $f$", which is the classic notation confusion. The other errors would not produce a reciprocal (B would produce $x = 3y-5$; C would produce $\frac{x}{3}+5$; D would produce $-3x+5$).`
    },
    {
      id: 'FUN4-07', topic: 'FUN4', type: 'mc', diff: 3, calc: false,
      stem: R`The function $f$ is defined by $f(x) = 3 + 2\ln(x-1)$ for $x > 1$. What is $f^{-1}(x)$?`,
      choices: [
        R`$f^{-1}(x) = 1 + e^{(x-3)/2}$`,
        R`$f^{-1}(x) = e^{(x-3)/2} + \ln 1$`,
        R`$f^{-1}(x) = 1 + \tfrac{1}{2}e^{x-3}$`,
        R`$f^{-1}(x) = 1 + 2e^{x-3}$`],
      answer: 0,
      explain: R`Set $y = 3 + 2\ln(x-1)$, swap the variables: $x = 3 + 2\ln(y-1)$. Then $\ln(y-1) = \dfrac{x-3}{2}$, so $y - 1 = e^{(x-3)/2}$ and $y = 1 + e^{(x-3)/2}$. Choices C and D move the factor 2 outside the exponent (it must divide the whole exponent $x-3$), and B drops the shift.`
    },
    {
      id: 'FUN4-08', topic: 'FUN4', type: 'mc', diff: 2,
      stem: R`Let $f(x) = \sqrt{x+4}$ and $g(x) = x^2 - 9$. What is the domain of $\dfrac{f}{g}$?`,
      choices: [
        R`$[-4, -3) \cup (-3, 3) \cup (3, \infty)$`,
        R`$[-4, \infty)$`,
        R`$[-4, 3) \cup (3, \infty)$`,
        R`$(-\infty, -3) \cup (-3, 3) \cup (3, \infty)$`],
      answer: 0,
      explain: R`The quotient is defined where both functions are defined and the denominator is nonzero. $f$ requires $x\ge -4$. $g(x)=0$ at $x=\pm3$, and both $-3$ and $3$ lie in $[-4,\infty)$, so both must be removed. B ignores the zeros of $g$; C removes only $x=3$; D ignores the domain of $f$.`
    },
    {
      id: 'FUN4-09', topic: 'FUN4', type: 'num', diff: 2,
      stem: R`The graphs of $f$ and $g$ are shown; each consists of line segments joining the plotted points. What is $f(g(2))$?`,
      figure: {
        type: 'plot', alt: 'Two piecewise linear graphs. Graph f passes through (0, 2), (1, 4), (2, 1), and (3, 2). Graph g passes through (0, 1), (1, 0), (2, 3), (3, 1), and (4, 4).',
        segments: [[0, 2, 1, 4, { color: 'a' }], [1, 4, 2, 1, { color: 'a' }], [2, 1, 3, 2, { color: 'a' }],
          [0, 1, 1, 0, { color: 'b' }], [1, 0, 2, 3, { color: 'b' }], [2, 3, 3, 1, { color: 'b' }], [3, 1, 4, 4, { color: 'b' }]],
        points: [{ x: 0, y: 2 }, { x: 1, y: 4 }, { x: 2, y: 1 }, { x: 3, y: 2 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 2, y: 3 }, { x: 3, y: 1 }, { x: 4, y: 4 }],
        xr: [-1, 5], yr: [-1, 5], xstep: 1, ystep: 1,
        labels: [{ x: 0, y: 2, text: 'f', dx: -16, dy: -6 }, { x: 4, y: 4, text: 'g', dx: 9, dy: 4 }]
      },
      answer: 2, tol: 0,
      explain: R`Work from the inside out. From the graph of $g$, $g(2)=3$. Then $f(g(2)) = f(3) = 2$. Reversing the order gives a different value: $g(f(2)) = g(1) = 0$.`
    },
    {
      id: 'FUN4-10', topic: 'FUN4', type: 'mc', diff: 3, task: [21],
      stem: R`In a lesson on inverse functions, a student writes the following.
        <div class="work">Since $f(x) = \ln x$ and $f^{-1}(x) = e^{x}$ are inverses, $f^{-1}(f(x)) = e^{\ln x} = x$ for every real number $x$.</div>
        Which response best addresses the student's claim?`,
      choices: [
        R`The claim is true only for $x > 0$, because $\ln x$ is not defined otherwise. In contrast, $f(f^{-1}(x)) = \ln(e^x) = x$ is true for every real $x$.`,
        R`The claim is true for every real $x$, because inverse functions always satisfy $f^{-1}(f(x)) = x$.`,
        R`The claim is false, because $e^{\ln x} = x$ only when $x$ is an integer.`,
        R`The claim is false, because it is $\ln(e^x)$, not $e^{\ln x}$, that is equal to $x$; the other expression equals $1$.`],
      answer: 0,
      explain: R`$f^{-1}(f(x)) = x$ holds only for $x$ in the domain of $f$, here $x>0$: the inner function must be defined. The other composition, $f(f^{-1}(x))=x$, holds for all $x$ in the domain of $f^{-1}$, which is every real number. The student's work looks valid but masks the domain restriction. Choice B ignores domains; C and D are false statements ($e^{\ln x}=x$ for all $x>0$, not just integers, and it does not equal 1).`
    },
    {
      id: 'FUN4-11', topic: 'FUN4', type: 'num', diff: 2,
      stem: R`Let $f(x) = 2x - 1$ and $g(x) = x^2 + 3$. For what positive value of $x$ does $(g \circ f)(x) = 12$?`,
      answer: 2, tol: 0,
      explain: R`$(g\circ f)(x) = g(2x-1) = (2x-1)^2 + 3$. Setting this equal to 12 gives $(2x-1)^2 = 9$, so $2x - 1 = \pm 3$ and $x = 2$ or $x = -1$. The positive solution is $x = 2$. Computing $f(g(x))$ instead, $2(x^2+3)-1 = 12$, gives a different (non-integer) answer.`
    },

    /* ================= FUN5: Linear, quadratic, and exponential models ================= */
    {
      id: 'FUN5-01', topic: 'FUN5', type: 'mc', diff: 1,
      stem: R`The table shows values of a function $y$.
        <table class="q-table"><tr><th>$x$</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>$y$</th><td>2</td><td>6</td><td>18</td><td>54</td><td>162</td></tr></table>
        Which equation models the data?`,
      choices: [R`$y = 4x + 2$`, R`$y = 2(3)^x$`, R`$y = 3(2)^x$`, R`$y = 2x^2 + 4x$`],
      answer: 1,
      explain: R`Equal steps in $x$ produce a constant <i>ratio</i> in $y$: $6/2 = 18/6 = 54/18 = 162/54 = 3$, so the model is exponential with initial value 2 and growth factor 3: $y = 2(3)^x$. Choice A matches only the first two rows (it is the line through $(0,2)$ and $(1,6)$); C has the wrong initial value; D matches $x=0$ and $x=1$ only.`
    },
    {
      id: 'FUN5-02', topic: 'FUN5', type: 'mc', diff: 2,
      stem: R`The table shows values of a function $y$.
        <table class="q-table"><tr><th>$x$</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>$y$</th><td>3</td><td>5</td><td>9</td><td>15</td><td>23</td></tr></table>
        Which statement best describes the relationship?`,
      choices: [
        R`It is linear, because $y$ increases every time $x$ increases by 1.`,
        R`It is quadratic, because the second differences (the differences of the differences) are constant.`,
        R`It is exponential, because $y$ increases faster and faster.`,
        R`It is not a function of $x$, because $y$ changes by a different amount each time.`],
      answer: 1,
      explain: R`The first differences are $2, 4, 6, 8$ (not constant, so not linear). The second differences are $2, 2, 2$ (constant), which is the signature of a quadratic: here $y = x^2 + x + 3$. The ratios $5/3,\ 9/5,\ 15/9,\ 23/15$ are not constant, so it is not exponential. D confuses "function" with "linear."`
    },
    {
      id: 'FUN5-03', topic: 'FUN5', type: 'num', diff: 2, calc: true,
      stem: R`A machine is worth \$850 today and loses 12% of its value each year. Assuming this pattern continues, what will the machine be worth in 4 years, to the nearest dollar?`,
      answer: 510, tol: 0.5, unit: 'dollars',
      explain: R`A 12% loss each year means multiplying by $1 - 0.12 = 0.88$ each year: $850(0.88)^4 \approx 509.7$, or about \$510. The linear error $850 - 4(0.12)(850) = 442$ subtracts 12% of the <i>original</i> value each year instead of 12% of the current value.`
    },
    {
      id: 'FUN5-04', topic: 'FUN5', type: 'mc', diff: 2, task: [15],
      stem: R`The number of subscribers to a channel is modeled by $S(t) = 1500(1.04)^t$, where $t$ is the number of months since the channel launched. When asked what the 1.04 means, a student says, "It means the channel gains 1.04 subscribers each month." Which response best corrects the student's thinking?`,
      choices: [
        R`The number 1.04 is the monthly growth factor: each month the number of subscribers is 104% of the previous month's, an increase of 4% per month.`,
        R`The number 1.04 means the number of subscribers grows by 1.04% each month.`,
        R`The number 1.04 is the number of subscribers when the channel launched, and 1500 is the growth rate.`,
        R`The student is correct, because the base of an exponential function is the amount added each period.`],
      answer: 0,
      explain: R`In $S(t)=a\,b^t$, $a=1500$ is the initial value and $b=1.04$ is the growth factor: each month the value is multiplied by 1.04, that is, it increases by 4% of its current value (4% of 1500 is 60 subscribers in the first month, not 1.04). Choice B mistakes the factor 1.04 for a percent rate; C swaps the roles of $a$ and $b$; D describes a linear model.`
    },
    {
      id: 'FUN5-05', topic: 'FUN5', type: 'multi', diff: 2,
      stem: R`Which of these situations are modeled by exponential functions? Select all that apply.`,
      choices: [
        R`The value of a car decreases by 9% each year.`,
        R`A candle burns down by 1.5 centimeters each hour.`,
        R`A bacteria population triples every 4 hours.`,
        R`A savings account, with no interest, grows by \$50 each month from deposits.`,
        R`A radioactive sample loses half of its mass every 30 years.`],
      answer: [0, 2, 4],
      explain: R`Exponential change multiplies by a constant factor in equal time periods: 0.91 per year (A), 3 per 4 hours (C), and 0.5 per 30 years (E). Situations B and D change by the same <i>amount</i> each period, which is linear.`
    },
    {
      id: 'FUN5-06', topic: 'FUN5', type: 'mc', diff: 3, task: [14],
      stem: R`Ms. Reyes has her class compare $f(x) = 2^x$ and $g(x) = x^3$ on a graphing calculator, using the window shown ($0 \le x \le 6$, $0 \le y \le 250$). One student concludes, "The cubic $g$ is above the exponential $f$ after $x \approx 1.4$, so $g$ grows faster and will always stay above $f$." Which response is best?`,
      figure: {
        type: 'plot', alt: 'Calculator-style window from x = 0 to 6 and y = 0 to 250. The curve labeled f, 2 to the x, rises slowly from 1 to 64. The curve labeled g, x cubed, starts at 0, crosses f near x = 1.4, and then rises much more steeply to 216 at x = 6.',
        fns: [{ f: '2^x', from: 0, to: 6, color: 'b' }, { f: 'x^3', from: 0, to: 6, color: 'a' }],
        xr: [0, 6], yr: [0, 250], xstep: 1, ystep: 50,
        labels: [{ x: 4.6, y: 8, text: 'f' }, { x: 4.5, y: 135, text: 'g' }]
      },
      choices: [
        R`The window is too narrow to support the conclusion: the graphs cross again near $x \approx 9.9$, and for larger $x$ the exponential is greater and stays greater.`,
        R`The conclusion is correct, because the cubic's exponent 3 is larger than the exponential's base 2.`,
        R`The conclusion is wrong, because $2^x$ is above $x^3$ for every $x > 0$.`,
        R`The conclusion is correct, because polynomial functions always eventually exceed exponential functions.`],
      answer: 0,
      explain: R`Checking beyond the window: at $x=9$, $2^9=512 \lt 729=9^3$, but at $x=10$, $2^{10}=1024>1000=10^3$, so the graphs cross near $x\approx 9.9$. After that, $2^x$ outgrows $x^3$ and stays above it: any exponential with base greater than 1 eventually exceeds any polynomial. A narrow window can mislead. Choices B and D state the reverse of that principle; C is false ($2^5=32 \lt 125=5^3$).`
    },
    {
      id: 'FUN5-07', topic: 'FUN5', type: 'num', diff: 2,
      stem: R`A gym charges a one-time enrollment fee plus a fixed amount each month. A member has paid a total of \$154 after 3 months and a total of \$226 after 7 months. Assuming the same pricing throughout, what is the total cost after 12 months, in dollars?`,
      answer: 316, tol: 0, unit: 'dollars',
      explain: R`The monthly fee is the constant rate of change: $\dfrac{226 - 154}{7 - 3} = 18$ dollars per month. The enrollment fee is $154 - 3(18) = 100$, so the total cost is $C(m) = 100 + 18m$ and $C(12) = 100 + 216 = 316$. Dividing $226/7$ or $154/3$ to get the monthly fee ignores the enrollment fee.`
    },

    /* ================= FUN6: Logarithms ================= */
    {
      id: 'FUN6-01', topic: 'FUN6', type: 'mc', diff: 1,
      stem: R`What is the value of $\log_2\left(\tfrac{1}{8}\right) + \log_9 81$?`,
      choices: [R`$-5$`, R`$-1$`, R`$1$`, R`$5$`], answer: 1, order: 'fixed',
      explain: R`$\log_2\left(\tfrac18\right) = -3$ because $2^{-3} = \tfrac18$, and $\log_9 81 = 2$ because $9^2 = 81$. The sum is $-3 + 2 = -1$. Choice $-5$ makes both logs negative, $5$ takes $\log_2(1/8)=+3$, and $1$ takes $3-2$.`
    },
    {
      id: 'FUN6-02', topic: 'FUN6', type: 'mc', diff: 1,
      stem: R`Which equation is equivalent to $3^y = x + 2$?`,
      choices: [R`$y = \log_3(x+2)$`, R`$y = \log_{x+2} 3$`, R`$y = 3\log(x+2)$`, R`$x + 2 = \log_3 y$`],
      answer: 0,
      explain: R`$\log_b(N) = y$ means $b^y = N$. With base 3 and $N = x+2$ this gives $y = \log_3(x+2)$. B uses the wrong base, C multiplies instead of using a base, and D swaps the exponent and the argument.`
    },
    {
      id: 'FUN6-03', topic: 'FUN6', type: 'mc', diff: 2,
      stem: R`Which expression is equal to $2\log x + \log y - 3\log z$, for positive $x$, $y$, and $z$?`,
      choices: [R`$\log\dfrac{x^2 y}{z^3}$`, R`$\log\dfrac{2xy}{3z}$`, R`$\log\dfrac{x^2 + y}{z^3}$`, R`$\log\dfrac{x^2 y}{3z}$`],
      answer: 0,
      explain: R`The power rule moves coefficients into exponents: $2\log x = \log x^2$ and $3\log z = \log z^3$. Adding logs multiplies the arguments and subtracting divides: $\log x^2 + \log y - \log z^3 = \log\dfrac{x^2 y}{z^3}$. Choice B multiplies by the coefficients instead of using them as exponents, C adds the arguments, and D applies the coefficient 3 only to the base of the power.`
    },
    {
      id: 'FUN6-04', topic: 'FUN6', type: 'mc', diff: 2, task: [15],
      stem: R`A student simplifies a logarithm as follows.
        <div class="work">$\log_2(8 + 8) = \log_2 8 + \log_2 8 = 3 + 3 = 6$</div>
        Which misconception is most likely behind this work?`,
      choices: [
        R`The student thinks the logarithm of a sum equals the sum of the logarithms; the rule applies to a product, $\log_2(ab) = \log_2 a + \log_2 b$.`,
        R`The student evaluated $\log_2 8$ incorrectly; it is not equal to 3.`,
        R`The student confused the power rule with the product rule.`,
        R`The student should have used the change-of-base formula before adding.`],
      answer: 0,
      explain: R`$\log_2 8 = 3$ is correct, but $\log_2(8+8) = \log_2 16 = 4$, not 6. The identity $\log(a) + \log(b) = \log(ab)$ concerns a <i>product</i> inside the log, so $\log_2 8 + \log_2 8 = \log_2 64 = 6$. The student distributed the log over a sum, as if $\log$ were a linear function.`
    },
    {
      id: 'FUN6-05', topic: 'FUN6', type: 'num', diff: 2, calc: true,
      stem: R`To the nearest hundredth, what is the value of $\log_7 50$?`,
      answer: 2.01, tol: 0.005,
      explain: R`Change of base: $\log_7 50 = \dfrac{\ln 50}{\ln 7} = \dfrac{3.9120}{1.9459} \approx 2.01$. Check: $7^2 = 49$, so the answer should be a little more than 2. Computing $\ln 7/\ln 50$ (upside down) gives about 0.50, and $\ln(50/7)$ gives about 1.97.`
    },
    {
      id: 'FUN6-06', topic: 'FUN6', type: 'mc', diff: 3,
      stem: R`Suppose $\log_b 2 = p$ and $\log_b 3 = q$. Which expression equals $\log_b 18$?`,
      choices: [R`$p + 2q$`, R`$2p + q$`, R`$2pq$`, R`$p + q^2$`],
      answer: 0,
      explain: R`Since $18 = 2 \cdot 3^2$, $\log_b 18 = \log_b 2 + \log_b 3^2 = p + 2q$. Choice B is $\log_b 12$ (the exponent is on the wrong factor); C multiplies where the product rule adds; D squares the log rather than bringing the exponent down as a coefficient.`
    },
    {
      id: 'FUN6-07', topic: 'FUN6', type: 'multi', diff: 2, task: [17],
      stem: R`Five students describe how to compute $\log_3 20$ with a calculator that has only the buttons $\log$ (base 10) and $\ln$ (base $e$). Which methods are valid? Select all that apply.
        <div class="work"><b>Ava:</b> $\log_3 20 = \dfrac{\log 20}{\log 3}$</div>
        <div class="work"><b>Ben:</b> $\log_3 20 = \dfrac{\log 3}{\log 20}$</div>
        <div class="work"><b>Cy:</b> $\log_3 20 = \dfrac{\ln 20}{\ln 3}$</div>
        <div class="work"><b>Dee:</b> $\log_3 20 = \log 20 - \log 3$</div>
        <div class="work"><b>Eli:</b> Let $y = \log_3 20$, so $3^y = 20$. Then $y \ln 3 = \ln 20$, so $y = \dfrac{\ln 20}{\ln 3}$.</div>`,
      choices: [R`Ava's method`, R`Ben's method`, R`Cy's method`, R`Dee's method`, R`Eli's method`],
      answer: [0, 2, 4],
      explain: R`The change-of-base formula is $\log_b N = \dfrac{\log_c N}{\log_c b}$ for any valid base $c$, so Ava's and Cy's methods are valid, and Eli's derivation of the formula is valid too. Ben has the fraction upside down (it would give $\log_{20} 3$). Dee treats the quotient of logs as a difference of logs; the difference $\log 20 - \log 3 = \log\tfrac{20}{3}$ is a different number.`
    },
    {
      id: 'FUN6-08', topic: 'FUN6', type: 'num', diff: 2,
      stem: R`The graph of $g(x) = \log_b(x+1)$ is shown, where $b > 1$. The graph passes through the point $(8, 2)$. What is the value of $b$?`,
      figure: {
        type: 'plot', alt: 'Graph of a logarithmic function that increases slowly, with a vertical dashed asymptote at x = -1. It passes through the origin and through the point (8, 2).',
        fns: [{ f: 'ln(x+1)/ln(3)', from: -0.99, to: 10 }],
        points: [{ x: 0, y: 0 }, { x: 8, y: 2, label: '(8, 2)', dx: -20, dy: -12 }],
        vlines: [-1], xr: [-3, 10], yr: [-4, 4], xstep: 1, ystep: 1
      },
      answer: 3, tol: 0,
      explain: R`Substitute the point: $2 = \log_b(8 + 1) = \log_b 9$, so $b^2 = 9$ and, since $b > 1$, $b = 3$. Using $\log_b 8 = 2$ (forgetting the shift inside the log) would give $b = \sqrt 8$.`
    },

    /* ================= FUN7: The unit circle and trigonometric values ================= */
    {
      id: 'FUN7-01', topic: 'FUN7', type: 'mc', diff: 1,
      stem: R`What is the radian measure of an angle of $150^\circ$?`,
      choices: [R`$\dfrac{5\pi}{6}$`, R`$\dfrac{6\pi}{5}$`, R`$\dfrac{5\pi}{3}$`, R`$\dfrac{5\pi}{12}$`],
      answer: 0,
      explain: R`Multiply by $\dfrac{\pi}{180}$: $150 \cdot \dfrac{\pi}{180} = \dfrac{5\pi}{6}$. Choice B uses the inverted conversion factor $\dfrac{180}{150}\pi$; C is $300^\circ$; D is $75^\circ$.`
    },
    {
      id: 'FUN7-02', topic: 'FUN7', type: 'num', diff: 1,
      stem: R`An angle measures $\dfrac{7\pi}{12}$ radians. What is its measure in degrees?`,
      answer: 105, tol: 0, unit: 'degrees',
      explain: R`Multiply by $\dfrac{180}{\pi}$: $\dfrac{7\pi}{12}\cdot\dfrac{180}{\pi} = 7 \cdot 15 = 105$. Multiplying by $\dfrac{\pi}{180}$ instead is the usual error.`
    },
    {
      id: 'FUN7-03', topic: 'FUN7', type: 'mc', diff: 2,
      stem: R`What is the reference angle for an angle of $\dfrac{7\pi}{5}$ radians?`,
      choices: [R`$\dfrac{2\pi}{5}$`, R`$\dfrac{3\pi}{5}$`, R`$\dfrac{7\pi}{5}$`, R`$\dfrac{5\pi}{7}$`],
      answer: 0,
      explain: R`$\dfrac{7\pi}{5} = 252^\circ$ lies in Quadrant III ($\pi \lt \dfrac{7\pi}{5} \lt \dfrac{3\pi}{2}$), so the reference angle is $\dfrac{7\pi}{5} - \pi = \dfrac{2\pi}{5}$. Choice B uses the Quadrant IV rule $2\pi - \theta$; C is the angle itself; D inverts the fraction.`
    },
    {
      id: 'FUN7-04', topic: 'FUN7', type: 'mc', diff: 2,
      stem: R`What is the exact value of $\cos\left(-\dfrac{7\pi}{6}\right)$?`,
      choices: [R`$-\dfrac{\sqrt{3}}{2}$`, R`$\dfrac{\sqrt{3}}{2}$`, R`$-\dfrac{1}{2}$`, R`$\dfrac{1}{2}$`],
      answer: 0,
      explain: R`Cosine is an even function, so $\cos\left(-\dfrac{7\pi}{6}\right) = \cos\dfrac{7\pi}{6}$. The angle $\dfrac{7\pi}{6}$ is in Quadrant III with reference angle $\dfrac{\pi}{6}$, where cosine is negative: $-\cos\dfrac{\pi}{6} = -\dfrac{\sqrt3}{2}$. Choice B ignores the quadrant sign; C and D use the sine value $\pm\tfrac12$ (mixing up sine and cosine at $\pi/6$).`
    },
    {
      id: 'FUN7-05', topic: 'FUN7', type: 'mc', diff: 2, task: [1],
      stem: R`Ms. Kim draws the point $P = (\cos\theta, \sin\theta)$ on the unit circle, for an angle $\theta$ in Quadrant I, and its reflection $P'$ across the $y$-axis. She asks students which identity the diagram justifies. Which of these is a correct identity that students can justify with the diagram?`,
      figure: {
        type: 'plot', alt: 'Unit circle with a point P in the first quadrant and its mirror image P prime in the second quadrant, joined to each other by a dashed horizontal segment; radii are drawn from the origin to each point.',
        fns: [{ f: 'sqrt(1-x^2)', from: -1, to: 1, color: 'm' }, { f: '-sqrt(1-x^2)', from: -1, to: 1, color: 'm' }],
        segments: [[0, 0, 0.643, 0.766, { color: 'a' }], [0, 0, -0.643, 0.766, { color: 'b' }], [-0.643, 0.766, 0.643, 0.766, { color: 'm', dash: true }]],
        points: [{ x: 0.643, y: 0.766, label: 'P', dx: 8, dy: -6 }, { x: -0.643, y: 0.766, label: "P'", dx: -22, dy: -6 }],
        xr: [-1.8, 1.8], yr: [-1.2, 1.2], xstep: 1, ystep: 1, noGrid: true, hideNumbers: true
      },
      choices: [R`$\sin(\pi - \theta) = \sin\theta$`, R`$\cos(\pi - \theta) = \cos\theta$`, R`$\sin(\pi - \theta) = -\sin\theta$`, R`$\tan(\pi - \theta) = \tan\theta$`],
      answer: 0,
      explain: R`Reflecting $P=(\cos\theta,\sin\theta)$ across the $y$-axis gives $P'=(-\cos\theta,\sin\theta)$, and $P'$ is the point at angle $\pi-\theta$. So $\cos(\pi-\theta) = -\cos\theta$ and $\sin(\pi-\theta) = \sin\theta$; the $y$-coordinates agree. Dividing, $\tan(\pi-\theta) = -\tan\theta$, which rules out B, C, and D (each has a sign error that the diagram shows).`
    },
    {
      id: 'FUN7-06', topic: 'FUN7', type: 'num', diff: 3,
      stem: R`Angle $\theta$ is in Quadrant II and $\sin\theta = \dfrac{5}{13}$. What is the value of $\tan(\theta + \pi)$, to the nearest hundredth?`,
      answer: -0.42, tol: 0.005,
      explain: R`In Quadrant II, $\cos\theta = -\dfrac{12}{13}$, so $\tan\theta = \dfrac{5/13}{-12/13} = -\dfrac{5}{12}$. Tangent has period $\pi$, so $\tan(\theta+\pi) = \tan\theta = -\dfrac5{12} \approx -0.42$. Taking $\tan(\theta+\pi) = -\tan\theta$ (confusing tangent with sine and cosine, whose period is $2\pi$) gives $+0.42$.`
    },
    {
      id: 'FUN7-07', topic: 'FUN7', type: 'mc', diff: 2, task: [15, 17],
      stem: R`A student evaluates $\tan 225^\circ$.
        <div class="work">$225^\circ$ is in Quadrant III, where $x$ and $y$ are both negative, so tangent is negative. The reference angle is $45^\circ$, so $\tan 225^\circ = -\tan 45^\circ = -1$.</div>
        Which statement about the student's work is correct?`,
      choices: [
        R`The student overlooked that $\tan\theta = \dfrac{y}{x}$, and a quotient of two negatives is positive; the correct value is $\tan 225^\circ = 1$.`,
        R`The reference angle of $225^\circ$ is $55^\circ$, not $45^\circ$.`,
        R`The angle $225^\circ$ is in Quadrant II, not Quadrant III.`,
        R`Tangent is negative in Quadrant III, but $\tan 45^\circ = \dfrac{\sqrt{2}}{2}$, so the answer is $-\dfrac{\sqrt{2}}{2}$.`],
      answer: 0,
      explain: R`The point on the terminal side of $225^\circ$ is $\left(-\tfrac{\sqrt2}{2}, -\tfrac{\sqrt2}{2}\right)$, so $\tan 225^\circ = \dfrac{y}{x} = 1$. Sine and cosine are both negative in Quadrant III, but tangent is their quotient and is positive there. The student's reasoning ("both coordinates are negative, so every trig value is negative") is a common overgeneralization. The reference angle is $225^\circ - 180^\circ = 45^\circ$ and $\tan 45^\circ = 1$.`
    },

    /* ================= FUN8: Modeling periodic phenomena ================= */
    {
      id: 'FUN8-01', topic: 'FUN8', type: 'mc', diff: 2,
      stem: R`The graph of a sinusoidal function is shown. Which equation could define the function?`,
      figure: {
        type: 'plot', alt: 'Cosine-shaped wave starting at a maximum at (0, 3), falling to a minimum at (3, -1), rising to a maximum again at x = 6, and continuing to x = 8.',
        fns: [{ f: '2*cos(PI*x/3)+1', from: 0, to: 8 }],
        points: [{ x: 0, y: 3, label: '(0, 3)', dx: 8, dy: -8 }, { x: 3, y: -1, label: '(3, -1)', dx: 8, dy: 16 }],
        xr: [0, 8], yr: [-2, 4], xstep: 1, ystep: 1
      },
      choices: [R`$y = 2\cos\left(\dfrac{\pi x}{3}\right) + 1$`, R`$y = 3\cos\left(\dfrac{\pi x}{3}\right) - 1$`, R`$y = 2\cos\left(\dfrac{\pi x}{6}\right) + 1$`, R`$y = 2\sin\left(\dfrac{\pi x}{3}\right) + 1$`],
      answer: 0,
      explain: R`The maximum is 3 and the minimum is $-1$, so the midline is $y = \dfrac{3 + (-1)}{2} = 1$ and the amplitude is $\dfrac{3-(-1)}{2} = 2$. The graph starts at a maximum, which matches cosine, and one full cycle takes 6 units, so $B = \dfrac{2\pi}{6} = \dfrac{\pi}{3}$. Choice B has the wrong amplitude and midline; C has period 12; D starts at the midline (sine) rather than at a maximum.`
    },
    {
      id: 'FUN8-02', topic: 'FUN8', type: 'multi', diff: 3,
      stem: R`A Ferris wheel has a diameter of 40 feet, and its center is 25 feet above the ground. The wheel makes one full rotation every 8 minutes. A rider boards at the lowest point of the wheel at time $t = 0$ minutes. Which functions give the rider's height $h$, in feet above the ground, at time $t$? Select all that apply.`,
      choices: [
        R`$h(t) = 25 - 20\cos\left(\dfrac{\pi t}{4}\right)$`,
        R`$h(t) = 25 + 20\sin\left(\dfrac{\pi (t-2)}{4}\right)$`,
        R`$h(t) = 25 + 20\cos\left(\dfrac{\pi (t-4)}{4}\right)$`,
        R`$h(t) = 25 + 20\cos\left(\dfrac{\pi t}{4}\right)$`,
        R`$h(t) = 25 - 20\cos\left(\dfrac{\pi t}{8}\right)$`],
      answer: [0, 1, 2],
      explain: R`The radius is 20 ft, the midline is $y=25$, and the period is 8 minutes, so $B = \dfrac{2\pi}{8} = \dfrac{\pi}{4}$. Starting at the lowest point ($h(0)=5$) gives $h(t) = 25 - 20\cos\left(\dfrac{\pi t}{4}\right)$ (choice A). Choices B and C are equivalent forms: $\sin\left(\dfrac{\pi t}{4} - \dfrac{\pi}{2}\right) = -\cos\dfrac{\pi t}{4}$ and $\cos\left(\dfrac{\pi t}{4} - \pi\right) = -\cos\dfrac{\pi t}{4}$. Choice D starts at the top ($h(0) = 45$), and E has period 16 minutes rather than 8.`
    },
    {
      id: 'FUN8-03', topic: 'FUN8', type: 'num', diff: 2, calc: true,
      stem: R`The depth of water at the end of a pier is modeled by $d(t) = 8 + 3\sin\left(\dfrac{\pi t}{6}\right)$, where $d$ is in feet and $t$ is the number of hours after midnight (with the calculator in radian mode). To the nearest tenth of an hour, what is the first time after midnight, $t > 0$, at which the depth is 10 feet?`,
      answer: 1.4, tol: 0.05, unit: 'hours',
      explain: R`Solve $8 + 3\sin\left(\dfrac{\pi t}{6}\right) = 10$: $\sin\left(\dfrac{\pi t}{6}\right) = \dfrac23$. The smallest positive angle is $\dfrac{\pi t}{6} = \sin^{-1}\left(\dfrac23\right) \approx 0.7297$, so $t \approx \dfrac{6(0.7297)}{\pi} \approx 1.39$, or 1.4 hours. (Using degree mode gives $\sin^{-1}(2/3) \approx 41.8$, which would then be divided by $\pi/6$ and gives a meaningless answer near 80.)`
    },
    {
      id: 'FUN8-04', topic: 'FUN8', type: 'mc', diff: 2, task: [15],
      stem: R`A student says that the function $y = 4\sin(3x)$ has period 3 "because the number next to $x$ is 3." Which response best corrects the student's thinking?`,
      choices: [
        R`The coefficient 3 says the graph completes 3 cycles in every $2\pi$ units, so the period is $\dfrac{2\pi}{3}$.`,
        R`The period is 4, because the number in front of sine determines how long one cycle takes.`,
        R`The period is $6\pi$, because the coefficient multiplies the normal period of $2\pi$.`,
        R`The student is correct, because the period of $y = \sin(Bx)$ is always equal to $B$.`],
      answer: 0,
      explain: R`For $y = A\sin(Bx)$, the period is $\dfrac{2\pi}{|B|}$. Here $B = 3$, so the graph compresses horizontally and completes three cycles over $[0, 2\pi]$: period $\dfrac{2\pi}{3}$. The student confuses $B$ with the period. Choice B mistakes the amplitude (4) for the period, and C multiplies where it should divide.`
    },
    {
      id: 'FUN8-05', topic: 'FUN8', type: 'mc', diff: 3,
      stem: R`The graph shows one function of the form $y = A\sin(B(x - C)) + D$ with $A, B > 0$. Which equation matches the graph?`,
      figure: {
        type: 'plot', alt: 'Sinusoidal wave that rises through the point (1, 2), reaches a maximum of 5 at (2, 5), returns to 2 at x = 3, reaches a minimum of -1 at (4, -1), and repeats with period 4.',
        fns: [{ f: '3*sin(PI/2*(x-1))+2', from: -1, to: 8 }],
        points: [{ x: 1, y: 2, label: '(1, 2)', dx: 8, dy: 18 }, { x: 2, y: 5, label: '(2, 5)', dx: 8, dy: -8 }, { x: 4, y: -1, label: '(4, -1)', dx: 8, dy: 16 }],
        xr: [-1, 8], yr: [-2, 6], xstep: 1, ystep: 1
      },
      choices: [
        R`$y = 3\sin\left(\dfrac{\pi}{2}(x - 1)\right) + 2$`,
        R`$y = 3\sin\left(\dfrac{\pi}{2}(x + 1)\right) + 2$`,
        R`$y = 3\sin\left(\pi (x - 1)\right) + 2$`,
        R`$y = 3\sin\left(\dfrac{\pi}{2}(x - 1)\right) - 2$`],
      answer: 0,
      explain: R`The maximum is 5 and the minimum is $-1$, so $D = 2$ and $A = 3$. One cycle takes 4 units (from the maximum at $x=2$ to the next maximum at $x=6$), so $B = \dfrac{2\pi}{4} = \dfrac{\pi}{2}$. The graph crosses the midline going upward at $x=1$, which is where an unshifted sine starts its cycle, so $C = 1$. Choice B shifts the wrong direction (a sine wave rising at $x=-1$); C has period 2; D has midline $-2$.`
    },
    {
      id: 'FUN8-06', topic: 'FUN8', type: 'num', diff: 3, calc: true,
      stem: R`A weight bobs on a spring. Its height above the floor is modeled by $h(t) = 30 + 8\sin\left(\dfrac{2\pi t}{3}\right)$, where $h$ is in centimeters and $t$ is in seconds. The graph shows one full cycle. During one full cycle, for how many seconds is the weight more than 36 centimeters above the floor? Round to the nearest hundredth of a second. (Use radian mode on your calculator.)`,
      figure: {
        type: 'plot', alt: 'Sine-shaped graph of height in centimeters versus time in seconds over one cycle from t = 0 to t = 3. The curve starts at 30, rises to 38 near t = 0.75, falls to 22 near t = 2.25, and returns to 30. A dashed horizontal line marks height 36.',
        fns: [{ f: '30+8*sin(2*PI*x/3)', from: 0, to: 3 }],
        hlines: [36], xr: [0, 3], yr: [20, 40], xstep: 0.5, ystep: 4, xlabel: 'Time t (seconds)', ylabel: 'Height h (cm)',
        labels: [{ x: 2.2, y: 36, text: 'h = 36', dy: -6 }]
      },
      answer: 0.69, tol: 0.006, unit: 'seconds',
      explain: R`Solve $30 + 8\sin\left(\dfrac{2\pi t}{3}\right) = 36$: $\sin\left(\dfrac{2\pi t}{3}\right) = 0.75$. Let $\alpha = \sin^{-1}(0.75) \approx 0.8481$. Within one cycle the sine is greater than 0.75 for $\alpha \lt \dfrac{2\pi t}{3} \lt \pi - \alpha$, so the time above 36 cm is $\dfrac{3}{2\pi}(\pi - 2\alpha) \approx 0.4775(1.4455) \approx 0.69$ seconds. Reporting only the first crossing time ($t \approx 0.40$) answers a different question.`
    },
    {
      id: 'FUN8-07', topic: 'FUN8', type: 'mc', diff: 2, task: [17],
      stem: R`The height of the tide at a dock varies between a low of 1 meter and a high of 7 meters, and one full cycle takes 12.4 hours. A student writes the model below. Which statement about the student's model is correct?
        <div class="work">$h(t) = 6\sin\left(\dfrac{2\pi t}{12.4}\right) + 1$</div>`,
      choices: [
        R`The student used the total variation (7 - 1 = 6) as the amplitude and the low tide (1) as the midline; the amplitude should be 3 and the midline 4.`,
        R`The period is wrong; it should be $2\pi \cdot 12.4$ hours.`,
        R`The model must use cosine, because tides always begin at a high tide.`,
        R`The student should have used 12.4 as the amplitude, since it is the largest number given.`],
      answer: 0,
      explain: R`Amplitude is half the difference between the maximum and minimum: $\dfrac{7-1}{2} = 3$. The midline is their average: $\dfrac{7+1}{2} = 4$. So a correct model is $h(t) = 3\sin\left(\dfrac{2\pi t}{12.4}\right) + 4$ (or a shifted version). The student's model oscillates between $-5$ and $7$. The period $\dfrac{2\pi}{2\pi/12.4} = 12.4$ hours is correct as written, and the choice of sine versus cosine is only a matter of where $t=0$ is placed.`
    },

    /* ================= FUN9: Solving trigonometric, logarithmic, and exponential equations ================= */
    {
      id: 'FUN9-01', topic: 'FUN9', type: 'mc', diff: 1,
      stem: R`What is the solution of $3^{2x-1} = 81$?`,
      choices: ['1.5', '2', '2.5', '4'], answer: 2, order: 'fixed',
      explain: R`Write $81 = 3^4$, so $2x - 1 = 4$ and $x = 2.5$. Choice 1.5 comes from a sign slip ($2x + 1 = 4$); choice 2 forgets to add 1 before dividing by 2 ($2x = 4$); choice 4 sets $x$ equal to the exponent on 81.`
    },
    {
      id: 'FUN9-02', topic: 'FUN9', type: 'num', diff: 2, calc: true,
      stem: R`An investment of \$12,000 grows by 6% each year, so its value after $t$ years is $12000(1.06)^t$ dollars. To the nearest tenth of a year, how long will it take for the investment to reach \$30,000?`,
      answer: 15.7, tol: 0.05, unit: 'years',
      explain: R`Solve $12000(1.06)^t = 30000$: $1.06^t = 2.5$, so $t = \dfrac{\ln 2.5}{\ln 1.06} \approx \dfrac{0.9163}{0.05827} \approx 15.7$ years. Dividing $2.5$ by 1.06 (or $\ln 2.5$ by 1.06) instead of using $\ln 1.06$ is a common slip, and so is using 6 rather than 1.06 as the base.`
    },
    {
      id: 'FUN9-03', topic: 'FUN9', type: 'mc', diff: 2,
      stem: R`What is the solution set of $\log_2 x + \log_2 (x - 2) = 3$?`,
      choices: [R`$\{4\}$`, R`$\{-2,\ 4\}$`, R`$\{-2\}$`, R`$\{3\}$`],
      answer: 0,
      explain: R`Combine: $\log_2[x(x-2)] = 3$, so $x(x-2) = 2^3 = 8$ and $x^2 - 2x - 8 = 0$, giving $(x-4)(x+2)=0$. Both logs must have positive arguments, so $x > 2$; $x=-2$ is extraneous (you cannot take $\log_2$ of a negative number). Check $x=4$: $\log_2 4 + \log_2 2 = 2 + 1 = 3$. Choice B is the "forgot to check" error.`
    },
    {
      id: 'FUN9-04', topic: 'FUN9', type: 'mc', diff: 2, task: [17],
      stem: R`A student solves $\log(x+2) + \log(x-1) = 1$ (logarithms base 10).
        <div class="work">$\log[(x+2)(x-1)] = 1$<br>$(x+2)(x-1) = 10$<br>$x^2 + x - 12 = 0$<br>$(x+4)(x-3) = 0$, so $x = -4$ or $x = 3$<br>"Both solutions work, because both satisfy the quadratic."</div>
        Which response to the student is best?`,
      choices: [
        R`Only $x = 3$ is a solution. When $x = -4$, the expressions $x+2$ and $x-1$ are negative, so the original logarithms are not defined; $-4$ is extraneous.`,
        R`Both are solutions, because every step of the algebra is reversible.`,
        R`Only $x = -4$ is a solution; $x = 3$ is extraneous because it makes $\log(x+2) + \log(x-1)$ larger than 1.`,
        R`The student should have added the arguments, $(x+2)+(x-1) = 10$, because logs add.`],
      answer: 0,
      explain: R`The product rule requires positive arguments, so the domain of the original equation is $x > 1$. Then $x=-4$ is rejected (it gives $\log(-2)+\log(-5)$). Check $x=3$: $\log 5 + \log 2 = \log 10 = 1$. Combining logs into one log is not reversible when it enlarges the domain, which is why the solutions must be checked in the original equation.`
    },
    {
      id: 'FUN9-05', topic: 'FUN9', type: 'mc', diff: 2,
      stem: R`Which is the set of all solutions of $2\cos\theta = \sqrt{3}$ in the interval $0 \le \theta \lt 2\pi$?`,
      choices: [R`$\left\{\dfrac{\pi}{6},\ \dfrac{11\pi}{6}\right\}$`, R`$\left\{\dfrac{\pi}{6},\ \dfrac{5\pi}{6}\right\}$`, R`$\left\{\dfrac{\pi}{3},\ \dfrac{5\pi}{3}\right\}$`, R`$\left\{\dfrac{\pi}{6},\ \dfrac{7\pi}{6}\right\}$`],
      answer: 0,
      explain: R`$\cos\theta = \dfrac{\sqrt3}{2}$. Cosine is positive in Quadrants I and IV, with reference angle $\dfrac{\pi}{6}$, so $\theta = \dfrac{\pi}{6}$ and $\theta = 2\pi - \dfrac{\pi}{6} = \dfrac{11\pi}{6}$. Choice B is the pair for $\sin\theta = \tfrac12$; C uses the reference angle $\pi/3$ (the sine/cosine mix-up); D uses the wrong quadrant for the second solution.`
    },
    {
      id: 'FUN9-06', topic: 'FUN9', type: 'num', diff: 3,
      stem: R`How many solutions does the equation $2\sin(2x) = 1$ have in the interval $0 \le x \lt 2\pi$?`,
      answer: 4, tol: 0,
      explain: R`$\sin(2x) = \tfrac12$. Let $u = 2x$, which ranges over $0 \le u \lt 4\pi$ (two full periods). In each period, $\sin u = \tfrac12$ at $u = \dfrac{\pi}{6}$ and $\dfrac{5\pi}{6}$, so $u = \dfrac{\pi}{6},\ \dfrac{5\pi}{6},\ \dfrac{13\pi}{6},\ \dfrac{17\pi}{6}$ and $x = \dfrac{\pi}{12},\ \dfrac{5\pi}{12},\ \dfrac{13\pi}{12},\ \dfrac{17\pi}{12}$: four solutions. Solving over one period only (and not accounting for the doubled frequency) gives 2.`
    },
    {
      id: 'FUN9-07', topic: 'FUN9', type: 'mc', diff: 2, task: [11],
      stem: R`A student solves $\sin x \cos x = \sin x$ for $0 \le x \lt 2\pi$.
        <div class="work">Divide both sides by $\sin x$: $\cos x = 1$, so $x = 0$.</div>
        Which statement about the student's method is correct?`,
      choices: [
        R`Dividing by $\sin x$ loses the solutions where $\sin x = 0$. Factoring $\sin x(\cos x - 1) = 0$ gives $x = 0$ and $x = \pi$.`,
        R`The method is valid, but $\cos x = 1$ also has the solution $x = 2\pi$ in the interval.`,
        R`The student should have divided by $\cos x$ instead, which gives $\tan x = 1$ and $x = \dfrac{\pi}{4}, \dfrac{5\pi}{4}$.`,
        R`There is no error; $x = 0$ is the only solution.`],
      answer: 0,
      explain: R`Dividing both sides by an expression that can equal zero discards those solutions. Instead, move everything to one side and factor: $\sin x(\cos x - 1) = 0$. Then $\sin x = 0$ gives $x = 0, \pi$ and $\cos x = 1$ gives $x = 0$. The full solution set is $\{0, \pi\}$; the student missed $x = \pi$ (check: $\sin\pi\cos\pi = 0 = \sin\pi$). The endpoint $2\pi$ is not in the interval $[0, 2\pi)$.`
    },
    {
      id: 'FUN9-08', topic: 'FUN9', type: 'multi', diff: 3,
      stem: R`Which values of $x$ in the interval $0 \le x \lt 2\pi$ satisfy $2\sin^2 x - \sin x - 1 = 0$? Select all that apply.`,
      choices: [R`$\dfrac{\pi}{2}$`, R`$\dfrac{7\pi}{6}$`, R`$\dfrac{11\pi}{6}$`, R`$\dfrac{\pi}{6}$`, R`$\dfrac{5\pi}{6}$`],
      answer: [0, 1, 2],
      explain: R`Treat $\sin x$ as the variable: $2s^2 - s - 1 = (2s+1)(s-1) = 0$, so $s = -\tfrac12$ or $s = 1$. $\sin x = 1$ gives $x = \dfrac{\pi}{2}$. $\sin x = -\tfrac12$ gives the Quadrant III and IV angles $\dfrac{7\pi}{6}$ and $\dfrac{11\pi}{6}$. The choices $\dfrac{\pi}{6}$ and $\dfrac{5\pi}{6}$ are solutions of $\sin x = +\tfrac12$ (a sign slip when solving the factor $2s+1=0$).`
    }
  );
})();
