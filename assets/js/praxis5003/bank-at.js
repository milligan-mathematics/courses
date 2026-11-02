/* Praxis 5003 bank, pass 1: Algebraic Thinking (AT1-AT6), 6 original items per topic (36).
   Format and rules: ../praxis-5003-kit/SPEC-5003.md and bank-example.js. Keys recomputed in checks-at.py. */
(function () {
  var R = String.raw;
  PXD.bank.push(

    /* ================= AT1  Expressions versus equations; vocabulary ================= */
    {
      id: 'AT1-01', topic: 'AT1', type: 'mc', diff: 1,
      stem: R`Which of the following is an equation?`,
      choices: [R`$3n + 8$`, R`$5(a - 2)$`, R`$4y - 1 = 11$`, R`$2x + 3x$`], answer: 2,
      explain: R`An equation has an equals sign: it says that two expressions have the same value, so it can be true or false. $4y - 1 = 11$ is an equation (it is true when $y = 3$).
        <br><i>Common errors:</i> the other three are expressions. They are phrases with numbers, letters, and operations but no equals sign, so they cannot be true or false. Choosing one of them treats "has a letter in it" as the test for an equation.`
    },
    {
      id: 'AT1-02', topic: 'AT1', type: 'mc', diff: 1,
      stem: R`In the expression $7x - 4y + 9$, what is the coefficient of $y$?`,
      choices: [R`$4$`, R`$-4$`, R`$9$`, R`$7$`], answer: 1,
      explain: R`The coefficient is the number that multiplies the variable in a term. The term with $y$ is $-4y$, and the subtraction sign goes with the 4, so the coefficient is $-4$.
        <br><i>Common errors:</i> dropping the sign (choice A), naming the constant term (choice C), and naming the coefficient of $x$ (choice D).`
    },
    {
      id: 'AT1-03', topic: 'AT1', type: 'multi', diff: 2,
      stem: R`Select all that apply. Which of these are expressions (not equations)?`,
      choices: [R`$6 + 3t$`, R`$9w = 45$`, R`$\frac{n}{4} - 1$`, R`$12 = 3m$`, R`$5(k + 2)$`], answer: [0, 2, 4],
      explain: R`An expression has no equals sign. $6 + 3t$, $\frac{n}{4} - 1$, and $5(k + 2)$ are expressions. $9w = 45$ and $12 = 3m$ are equations, because each says that two quantities are equal (the equals sign can be on either side).
        <br><i>Common errors:</i> thinking an equation must start with the variable side, so that $12 = 3m$ looks like "an answer" rather than an equation; and treating the parentheses in $5(k + 2)$ as a sign of an equation.`
    },
    {
      id: 'AT1-04', topic: 'AT1', type: 'mc', diff: 2, task: [6],
      stem: R`A student says, "$5x + 3$ is an equation because it has numbers and a letter in it." Which response is best?`,
      choices: [
        R`It is an equation only if the letter is $x$. With any other letter it would be an expression.`,
        R`An equation has an equals sign, which says that two expressions have the same value. $5x + 3$ has no equals sign, so it is an expression.`,
        R`It is an equation because you can find a value for it once you know what $x$ is.`,
        R`It is neither an expression nor an equation, because $x$ is not a number.`
      ], answer: 1,
      explain: R`What makes something an equation is the equals sign, which makes a claim that can be true or false. $5x + 3$ is a phrase that stands for a number once $x$ is known, which is what an expression does. Being able to find a value for it (choice C) is true of every expression, so it does not make it an equation.
        <br><i>Common errors:</i> using "has a letter" as the definition (the student's idea), thinking the letter has to be $x$ (choice A), and thinking a variable stops an expression from being an expression (choice D).`
    },
    {
      id: 'AT1-05', topic: 'AT1', type: 'num', diff: 2,
      stem: R`How many terms does the expression $3x^2 - 5x + 7 - y$ have?`,
      answer: 4, tol: 0, unit: 'terms',
      explain: R`Terms are the parts joined by addition or subtraction: $3x^2$, $-5x$, $7$, and $-y$. That is 4 terms. The term $7$ is a constant term, and $-y$ has coefficient $-1$.
        <br><i>Common errors:</i> counting only the terms that contain a letter (3), and counting the numbers written in the expression (3, 5, and 7).`
    },
    {
      id: 'AT1-06', topic: 'AT1', type: 'mc', diff: 3,
      stem: R`Which expression is written as a sum of exactly three terms, one of which is $4m$?`,
      choices: [R`$4m + 7$`, R`$4(m + 3n - 5)$`, R`$m + 3n - 4$`, R`$4m + 3n - 5$`], answer: 3,
      explain: R`In $4m + 3n - 5$ the terms are $4m$, $3n$, and $-5$: three terms, and one of them is $4m$ (its coefficient is 4).
        <br><i>Common errors:</i> $4m + 7$ has only two terms. $4(m + 3n - 5)$ is written as a single term: a product of 4 and a sum in parentheses (terms are the parts separated by plus or minus signs that are not inside parentheses). In $m + 3n - 4$ there are three terms, but they are $m$, $3n$, and $-4$; the 4 is a constant, not a coefficient of $m$.`
    },

    /* ================= AT2  Simplifying and evaluating expressions ================= */
    {
      id: 'AT2-01', topic: 'AT2', type: 'mc', diff: 1,
      stem: R`Which expression is equivalent to $5x + 3 + 2x - 8$?`,
      choices: [R`$7x - 11$`, R`$10x - 5$`, R`$7x^2 - 5$`, R`$7x - 5$`], answer: 3,
      explain: R`Combine like terms: $5x + 2x = 7x$ and $3 - 8 = -5$, so the expression is $7x - 5$.
        <br><i>Common errors:</i> adding 3 and 8 instead of finding $3 - 8$ ($7x - 11$), multiplying the coefficients ($10x$), and changing the variable part when adding like terms ($7x^2$).`
    },
    {
      id: 'AT2-02', topic: 'AT2', type: 'num', diff: 1,
      stem: R`What is the value of $2a - 3b + 5$ when $a = 4$ and $b = -3$?`,
      answer: 22, tol: 0,
      explain: R`Substitute with parentheses: $2(4) - 3(-3) + 5 = 8 + 9 + 5 = 22$. Subtracting $3 \times (-3) = -9$ adds 9.
        <br><i>Common error:</i> losing the negative sign on $b$, which gives $8 - 9 + 5 = 4$.`
    },
    {
      id: 'AT2-03', topic: 'AT2', type: 'mc', diff: 2,
      stem: R`Which expression is equivalent to $-3(2n - 4)$?`,
      choices: [R`$-6n - 12$`, R`$-6n - 4$`, R`$-6n + 12$`, R`$6n - 12$`], answer: 2,
      explain: R`Distribute $-3$ to both terms: $(-3)(2n) = -6n$ and $(-3)(-4) = +12$, so the result is $-6n + 12$.
        <br><i>Common errors:</i> a negative times a negative taken as negative ($-6n - 12$), multiplying only the first term ($-6n - 4$), and losing the negative sign on the first term ($6n - 12$).`
    },
    {
      id: 'AT2-04', topic: 'AT2', type: 'multi', diff: 2,
      stem: R`Which TWO expressions are equivalent to $6x + 9$?`,
      choices: [R`$3(2x + 9)$`, R`$2(3x + 4) + 1$`, R`$6(x + 3)$`, R`$3(2x + 3)$`, R`$15x$`], answer: [1, 3],
      explain: R`$3(2x + 3) = 6x + 9$, and $2(3x + 4) + 1 = 6x + 8 + 1 = 6x + 9$.
        <br><i>Common errors:</i> $3(2x + 9) = 6x + 27$ (when 3 is factored out of $6x + 9$ the 9 becomes 3, not 9) and $6(x + 3) = 6x + 18$ (6 is not a factor of 9). $15x$ adds the unlike terms $6x$ and $9$.`
    },
    {
      id: 'AT2-05', topic: 'AT2', type: 'mc', diff: 2, task: [7],
      stem: R`A student simplified an expression and showed this work.
        <div class="work">$4 + 3x = 7x$</div>
        Which statement best describes the student's error?`,
      choices: [
        R`The student should have multiplied 4 by $3x$ to get $12x$.`,
        R`There is no error, because $4 + 3x$ and $7x$ have the same value.`,
        R`The student should have added 4 and 3 and kept the letter, giving $7 + x$.`,
        R`The terms $4$ and $3x$ are not like terms, so they cannot be combined. $4 + 3x$ is already simplified.`
      ], answer: 3,
      explain: R`Only like terms (same variable part) can be combined. The constant 4 and the term $3x$ are unlike, so the sum stays $4 + 3x$. To see that $7x$ is not equivalent, try $x = 2$: $4 + 3(2) = 10$ but $7(2) = 14$. The two expressions agree only when $x = 1$, which is why checking a single value can fool you.
        <br><i>Common errors:</i> choosing to multiply (choice A), trusting a single check at $x = 1$ (choice B), and adding the 3 in $3x$ to the 4 while leaving the $x$ behind (choice C: $7 + x$ is not equivalent either, since at $x = 2$ it is 9 and $4 + 3x$ is 10).`
    },
    {
      id: 'AT2-06', topic: 'AT2', type: 'num', diff: 3,
      stem: R`What is the value of $2(a - 3b) - a$ when $a = 5$ and $b = -2$?`,
      answer: 17, tol: 0,
      explain: R`Work inside the parentheses first: $a - 3b = 5 - 3(-2) = 5 + 6 = 11$. Then $2(11) - 5 = 22 - 5 = 17$.
        <br><i>Common errors:</i> treating $-3b$ as $-3 - 2$ or dropping the sign of $b$ ($2(5 - 6) - 5 = -7$), and multiplying the 2 by only the first term ($2 \cdot 5 - 3(-2) - 5 = 11$).`
    },

    /* ================= AT3  Translating, formulas, and variables ================= */
    {
      id: 'AT3-01', topic: 'AT3', type: 'mc', diff: 1,
      stem: R`Which expression represents "5 less than twice a number $n$"?`,
      choices: [R`$5 - 2n$`, R`$2(n - 5)$`, R`$2n - 5$`, R`$5n - 2$`], answer: 2,
      explain: R`"Twice a number" is $2n$. "5 less than" that is $2n - 5$: the 5 is taken away from $2n$.
        <br><i>Common errors:</i> writing the subtraction in the order the words appear ($5 - 2n$), subtracting 5 from $n$ before doubling ($2(n - 5)$, which is "twice the number that is 5 less than $n$"), and mixing up which number is doubled ($5n - 2$).`
    },
    {
      id: 'AT3-02', topic: 'AT3', type: 'mc', diff: 2, task: [3],
      stem: R`A teacher asks the class to write an equation for this story: "A water tank holds 40 gallons. Water drains out at 3 gallons per minute." Let $g$ be the number of gallons left after $m$ minutes. Which equation is correct?`,
      choices: [R`$g = 40 + 3m$`, R`$g = 40 - 3m$`, R`$g = 3(40 - m)$`, R`$g = 3m - 40$`], answer: 1,
      explain: R`The tank starts with 40 gallons, and each minute 3 gallons are taken away, so after $m$ minutes $3m$ gallons are gone: $g = 40 - 3m$. Check: after 2 minutes $40 - 6 = 34$ gallons.
        <br><i>Common errors:</i> adding as if the tank were filling ($40 + 3m$), applying the 3 to the starting amount ($3(40 - m)$, which would be 114 gallons after 2 minutes), and reversing the subtraction ($3m - 40$, which is negative at the start).`
    },
    {
      id: 'AT3-03', topic: 'AT3', type: 'num', diff: 2,
      stem: R`The area of a trapezoid is $A = \frac{1}{2}h(b_1 + b_2)$. A trapezoid has area $54 \text{ cm}^2$, height $6$ cm, and one base $7$ cm long. How long is the other base, in centimeters?`,
      answer: 11, tol: 0, unit: 'centimeters',
      explain: R`Substitute: $54 = \frac{1}{2}(6)(7 + b_2) = 3(7 + b_2)$. Divide by 3: $18 = 7 + b_2$, so $b_2 = 11$. Check: $\frac{1}{2}(6)(7 + 11) = 3 \times 18 = 54$.
        <br><i>Common error:</i> leaving out the $\frac{1}{2}$, which gives $54 = 6(7 + b_2)$ and $b_2 = 2$.`
    },
    {
      id: 'AT3-04', topic: 'AT3', type: 'mc', diff: 2, task: [7],
      stem: R`A teacher asks students to write an equation for "There are 6 times as many students as teachers," where $s$ is the number of students and $t$ is the number of teachers. A student writes $6s = t$. Which statement best describes the student's error?`,
      choices: [
        R`The student should have added: $s = t + 6$.`,
        R`There is no error, because $6s = t$ and $s = 6t$ say the same thing.`,
        R`The 6 is attached to the wrong quantity. $6s = t$ says there are 6 times as many teachers as students, and the equation should be $s = 6t$.`,
        R`The student should have divided: $s = \frac{t}{6}$.`
      ], answer: 2,
      explain: R`Test with numbers. If there are 2 teachers there are $6 \times 2 = 12$ students, so $s = 6t$. The student's equation with $s = 12$ would need $t = 72$ teachers. The word order "6 times as many students as teachers" tempts you to write the 6 next to the $s$ that comes first, but the 6 multiplies the smaller group.
        <br><i>Common errors:</i> choosing an operation from a keyword (choices A and D) and not testing the equation with a number (choice B).`
    },
    {
      id: 'AT3-05', topic: 'AT3', type: 'multi', diff: 1,
      stem: R`A gardener measures the height of a bean plant every day for 3 weeks. Let $d$ be the day number and $h$ the height of the plant in centimeters. Which TWO statements are true?`,
      choices: [R`$d$ is the dependent variable.`, R`$h$ is the dependent variable.`, R`$d$ is the independent variable.`, R`$h$ is the independent variable.`], answer: [1, 2],
      explain: R`The height depends on how many days have passed, so the height $h$ is the dependent variable and the day number $d$ is the independent variable.
        <br><i>Common errors:</i> reversing the two roles (choices A and D). A good test is "depends on what?": the plant's height depends on the day, but the day does not depend on the plant's height.`
    },
    {
      id: 'AT3-06', topic: 'AT3', type: 'num', diff: 3, calc: true,
      stem: R`The formula $F = \frac{9}{5}C + 32$ converts a temperature from degrees Celsius $C$ to degrees Fahrenheit $F$. What Celsius temperature is equal to $77$ degrees Fahrenheit?`,
      answer: 25, tol: 0, unit: 'degrees Celsius',
      explain: R`Put $F = 77$ into the formula and solve for $C$: $77 = \frac{9}{5}C + 32$, so $45 = \frac{9}{5}C$, and $C = 45 \times \frac{5}{9} = 25$. Check: $\frac{9}{5}(25) + 32 = 45 + 32 = 77$.
        <br><i>Common errors:</i> putting 77 in for $C$ ($\frac{9}{5}(77) + 32 = 170.6$) and subtracting 32 but multiplying by $\frac{9}{5}$ instead of dividing by it ($45 \times \frac{9}{5} = 81$).`
    },

    /* ================= AT4  Solving and interpreting linear equations and inequalities ================= */
    {
      id: 'AT4-01', topic: 'AT4', type: 'num', diff: 1,
      stem: R`Solve for $x$: $3x + 7 = 31$.`,
      answer: 8, tol: 0,
      explain: R`Undo the addition: $3x = 31 - 7 = 24$. Undo the multiplication: $x = 24 \div 3 = 8$. Check: $3(8) + 7 = 31$.
        <br><i>Common error:</i> dividing before subtracting and only dividing one term ($x + 7 = 31$ gives 24).`
    },
    {
      id: 'AT4-02', topic: 'AT4', type: 'mc', diff: 2,
      stem: R`Which inequality is shown by the graph?`,
      figure: {
        type: 'svg', alt: 'Number line labeled from -4 to 4 with a filled circle at -2 and a thick ray starting at the circle and going right, past 4, ending in an arrowhead.',
        svg: R`<svg viewBox="0 0 340 66"><line x1="14" y1="32" x2="326" y2="32"/><polyline points="24,26 14,32 24,38"/><polyline points="316,26 326,32 316,38"/><line x1="34" y1="27" x2="34" y2="37"/><text class="up" x="34" y="58" text-anchor="middle" style="font-size:14px">−4</text><line x1="68" y1="27" x2="68" y2="37"/><text class="up" x="68" y="58" text-anchor="middle" style="font-size:14px">−3</text><line x1="102" y1="27" x2="102" y2="37"/><text class="up" x="102" y="58" text-anchor="middle" style="font-size:14px">−2</text><line x1="136" y1="27" x2="136" y2="37"/><text class="up" x="136" y="58" text-anchor="middle" style="font-size:14px">−1</text><line x1="170" y1="27" x2="170" y2="37"/><text class="up" x="170" y="58" text-anchor="middle" style="font-size:14px">0</text><line x1="204" y1="27" x2="204" y2="37"/><text class="up" x="204" y="58" text-anchor="middle" style="font-size:14px">1</text><line x1="238" y1="27" x2="238" y2="37"/><text class="up" x="238" y="58" text-anchor="middle" style="font-size:14px">2</text><line x1="272" y1="27" x2="272" y2="37"/><text class="up" x="272" y="58" text-anchor="middle" style="font-size:14px">3</text><line x1="306" y1="27" x2="306" y2="37"/><text class="up" x="306" y="58" text-anchor="middle" style="font-size:14px">4</text><line class="a" x1="102" y1="32" x2="316" y2="32" style="stroke-width:4"/><polyline class="a" points="316,26 326,32 316,38"/><circle class="pt" cx="102" cy="32" r="6"/></svg>`
      },
      choices: [R`$x < -2$`, R`$x \le -2$`, R`$x > -2$`, R`$x \ge -2$`], answer: 3,
      explain: R`The ray goes to the right, so the solutions are greater than $-2$. The circle is filled in, which means $-2$ itself is included, so the inequality is $x \ge -2$.
        <br><i>Common errors:</i> reading an open circle where the circle is filled ($x > -2$), and reading the direction backward because $-2$ looks "small" ($x \le -2$ or $x < -2$).`
    },
    {
      id: 'AT4-03', topic: 'AT4', type: 'multi', diff: 2,
      stem: R`Which TWO of these values are solutions of $2x - 5 > 7$?`,
      choices: ['4', '6', '7', '9'], answer: [2, 3], order: 'fixed',
      explain: R`Solve the inequality: $2x > 12$, so $x > 6$. The values 7 and 9 are greater than 6. Check 7: $2(7) - 5 = 9 > 7$. True.
        <br><i>Common errors:</i> including 6, which makes the two sides equal ($2(6) - 5 = 7$) but not greater, and including 4, which does not satisfy the inequality ($2(4) - 5 = 3$).`
    },
    {
      id: 'AT4-04', topic: 'AT4', type: 'num', diff: 3,
      stem: R`Solve for $x$: $5(2x - 3) = 3x + 20$.`,
      answer: 5, tol: 0,
      explain: R`Distribute: $10x - 15 = 3x + 20$. Subtract $3x$ from both sides: $7x - 15 = 20$. Add 15: $7x = 35$. Divide by 7: $x = 5$. Check: $5(10 - 3) = 35$ and $3(5) + 20 = 35$.
        <br><i>Common error:</i> multiplying the 5 by only the first term, so $10x - 3 = 3x + 20$ and $x = \frac{23}{7}$.`
    },
    {
      id: 'AT4-05', topic: 'AT4', type: 'mc', diff: 2,
      stem: R`Priya has \$60 to spend at a book fair. She buys a poster for \$12, and then she buys notebooks that cost \$4 each. She can spend at most \$60 in all. Which inequality can be used to find $n$, the number of notebooks she can buy?`,
      choices: [R`$12 + 4n \ge 60$`, R`$12 + 4n \le 60$`, R`$12 + 4n < 60$`, R`$16n \le 60$`], answer: 1,
      explain: R`The total cost is the poster plus $n$ notebooks: $12 + 4n$. "At most \$60" means the total can equal \$60 or be less, so $12 + 4n \le 60$ (which gives $n \le 12$).
        <br><i>Common errors:</i> reversing the direction of "at most" ($\ge$), using $<$ so that spending exactly \$60 is ruled out, and adding the poster price to the notebook price before multiplying ($16n$).`
    },
    {
      id: 'AT4-06', topic: 'AT4', type: 'mc', diff: 2, task: [1, 6],
      stem: R`A student solved an inequality and showed this work.
        <div class="work">$-4x + 3 < 19$<br>$-4x < 16$<br>$x < -4$</div>
        The last line is not correct. Which statement explains how to fix the student's last step?`,
      choices: [
        R`The student should have added 3 instead of subtracting it in the first step, giving $-4x < 22$.`,
        R`The last step is correct, because dividing each side of an inequality by the same number never changes the sign.`,
        R`Dividing each side by $-4$ reverses the order of numbers (for example $2 < 5$ but $-2 > -5$), so the sign must flip: $x > -4$.`,
        R`The student should have divided 16 by 4 and kept the sign, giving $x < 4$.`
      ], answer: 2,
      explain: R`The first step is fine: $-4x < 16$. Multiplying or dividing both sides by a negative number reverses the order of the numbers on the number line, so the inequality sign flips: $x > -4$. Check with $x = 0$ (which is greater than $-4$): $-4(0) + 3 = 3 < 19$ is true, but $0 < -4$ is false, so the student's answer leaves out true solutions.
        <br><i>Common errors:</i> not reversing the sign when dividing by a negative (the student's error and choice B), changing the first step (choice A), and dropping the negative sign when dividing (choice D).`
    },

    /* ================= AT5  Linear relationships in equations, tables, and graphs ================= */
    {
      id: 'AT5-01', topic: 'AT5', type: 'mc', diff: 1,
      stem: R`The table shows some values of $x$ and $y$. Which equation relates $y$ to $x$?
        <table class="q-table"><tbody><tr><th>$x$</th><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>$y$</th><td>5</td><td>8</td><td>11</td><td>14</td></tr></tbody></table>`,
      choices: [R`$y = x + 4$`, R`$y = 3x + 5$`, R`$y = 2x + 3$`, R`$y = 3x + 2$`], answer: 3,
      explain: R`Each time $x$ goes up by 1, $y$ goes up by 3, so the equation is $y = 3x + \text{(something)}$. At $x = 1$, $3(1) = 3$ and $y = 5$, so the something is $2$: $y = 3x + 2$. Check at $x = 4$: $3(4) + 2 = 14$.
        <br><i>Common errors:</i> checking only the first row ($y = x + 4$ and $y = 2x + 3$ both give 5 when $x = 1$), and using the first $y$-value as the constant ($y = 3x + 5$).`
    },
    {
      id: 'AT5-02', topic: 'AT5', type: 'mc', diff: 2,
      stem: R`The graph shows a line. Which equation represents the line?`,
      figure: {
        type: 'plot', alt: 'Coordinate plane with a straight line rising from lower left to upper right. It crosses the y-axis at -1 and passes through the points (0, -1), (1, 1), and (2, 3); the points (0, -1) and (2, 3) are marked.',
        line: { m: 2, b: -1 }, points: [{ x: 0, y: -1 }, { x: 2, y: 3 }], xr: [-3, 4], yr: [-4, 6], xstep: 1, ystep: 1
      },
      choices: [R`$y = 2x + 1$`, R`$y = 2x - 1$`, R`$y = \frac{1}{2}x - 1$`, R`$y = -2x - 1$`], answer: 1,
      explain: R`The line crosses the $y$-axis at $-1$, so the constant is $-1$. From $(0, -1)$ to $(2, 3)$ the line rises 4 while it runs 2, so the slope is $\frac{4}{2} = 2$: $y = 2x - 1$.
        <br><i>Common errors:</i> reading the intercept as $+1$ (choice A), inverting rise over run (choice C), and giving a rising line a negative slope (choice D).`
    },
    {
      id: 'AT5-03', topic: 'AT5', type: 'num', diff: 2,
      stem: R`A tank is being filled at a constant rate. The table shows the number of gallons in the tank at four times. If the rate stays the same, how many gallons will be in the tank after 15 minutes?
        <table class="q-table"><tbody><tr><th>Minutes</th><td>2</td><td>4</td><td>6</td><td>8</td></tr><tr><th>Gallons</th><td>50</td><td>70</td><td>90</td><td>110</td></tr></tbody></table>`,
      answer: 180, tol: 0, unit: 'gallons',
      explain: R`The tank gains 20 gallons every 2 minutes, which is 10 gallons per minute. At 2 minutes it holds 50 gallons, so at time 0 it held $50 - 20 = 30$ gallons. After 15 minutes: $30 + 10(15) = 180$ gallons. Check with the table: $30 + 10(8) = 110$.
        <br><i>Common error:</i> ignoring the 30 gallons already in the tank and treating the table as proportional ($\frac{15}{2} \times 50 = 375$).`
    },
    {
      id: 'AT5-04', topic: 'AT5', type: 'mc', diff: 2, task: [2, 4],
      stem: R`A teacher wants students to graph some values and see that they lie on a straight line. Which set of values should the teacher choose?`,
      choices: [
        R`$x$: 1, 2, 3, 4 and $y$: 2, 4, 8, 16`,
        R`$x$: 1, 2, 3, 4 and $y$: 1, 3, 6, 10`,
        R`$x$: 1, 2, 3, 4 and $y$: 4, 9, 14, 19`,
        R`$x$: 1, 2, 3, 4 and $y$: 1, 4, 9, 16`
      ], answer: 2,
      explain: R`Points lie on a line when $y$ changes by the same amount for each step in $x$. For $y$: 4, 9, 14, 19 the change is always 5, so the points lie on the line $y = 5x - 1$.
        <br><i>Common errors:</i> the other sets increase, but not by a constant amount: the changes are 2, 4, 8 (doubling), 2, 3, 4 (growing by 1), and 3, 5, 7 (square numbers). A pattern that "keeps going up" is not necessarily linear.`
    },
    {
      id: 'AT5-05', topic: 'AT5', type: 'multi', diff: 2,
      stem: R`Select all that apply. A line passes through the points $(0, 3)$ and $(2, 7)$. Which statements are true?`,
      choices: [R`The slope of the line is 2.`, R`The line crosses the $y$-axis at $(0, 3)$.`, R`The point $(5, 13)$ is on the line.`, R`The point $(4, 10)$ is on the line.`, R`The slope of the line is $\frac{1}{2}$.`], answer: [0, 1, 2],
      explain: R`The slope is $\frac{7 - 3}{2 - 0} = 2$, and the point $(0, 3)$ is on the $y$-axis, so the line is $y = 2x + 3$. At $x = 5$, $y = 13$, so $(5, 13)$ is on the line. At $x = 4$, $y = 11$, so $(4, 10)$ is not.
        <br><i>Common errors:</i> using run over rise ($\frac{1}{2}$), and adding the wrong amount to $y$ when $x$ goes up by 2 ($(4, 10)$ adds only 3 to the 7; the slope of 2 adds 4).`
    },
    {
      id: 'AT5-06', topic: 'AT5', type: 'mc', diff: 3, task: [4],
      stem: R`A teacher shows the graph of the amount of juice left in a dispenser, in liters, $m$ minutes after it starts pouring. Which statement does the graph support?`,
      figure: {
        type: 'plot', alt: 'Line graph of liters of juice left against minutes. A straight segment starts at 30 liters on the vertical axis (0 minutes) and falls steadily to 0 liters at 6 minutes.',
        segments: [[0, 30, 6, 0]], xr: [0, 8], yr: [0, 35], xstep: 1, ystep: 5, xlabel: 'Minutes', ylabel: 'Liters of juice left'
      },
      choices: [
        R`The dispenser starts with 30 liters and is empty after 5 minutes.`,
        R`The dispenser starts with 5 liters and loses 30 liters each minute.`,
        R`The dispenser starts with 30 liters and loses 5 liters each minute.`,
        R`The dispenser starts with 30 liters and loses 6 liters each minute.`
      ], answer: 2,
      explain: R`The graph meets the vertical axis at 30, so the dispenser starts with 30 liters. It reaches 0 at 6 minutes, so it loses $30 \div 6 = 5$ liters each minute (the equation is $J = 30 - 5m$).
        <br><i>Common errors:</i> swapping the starting amount and the rate (choice B), reading the 6 where the line reaches 0 as the rate (choice D), and misreading where the line reaches the horizontal axis (choice A).`
    },

    /* ================= AT6  Patterns and function rules ================= */
    {
      id: 'AT6-01', topic: 'AT6', type: 'mc', diff: 1,
      stem: R`Which rule gives the $n$th term of the pattern $3, 8, 13, 18, \ldots$?`,
      choices: [R`$5n + 3$`, R`$n + 5$`, R`$3n + 5$`, R`$5n - 2$`], answer: 3,
      explain: R`The pattern goes up by 5 each time, so the rule starts $5n$. For $n = 1$ the rule must give 3, and $5(1) = 5$, so subtract 2: $5n - 2$. Check: $n = 4$ gives 18.
        <br><i>Common errors:</i> adding the first term as the constant ($5n + 3$ gives 8 for $n = 1$), using the step size as an added number ($n + 5$), and mixing up the step and the starting number ($3n + 5$).`
    },
    {
      id: 'AT6-02', topic: 'AT6', type: 'num', diff: 2,
      stem: R`The first four terms of a pattern are $7, 10, 13, 16$. If the pattern continues, what is the 20th term?`,
      answer: 64, tol: 0,
      explain: R`The pattern adds 3 each time, so the $n$th term is $7 + 3(n - 1) = 3n + 4$. The 20th term is $3(20) + 4 = 64$. Check: the 1st term is $3(1) + 4 = 7$.
        <br><i>Common errors:</i> adding 3 twenty times to the first term ($7 + 60 = 67$, which is the 21st term) and multiplying 3 by 20 without the starting amount (60).`
    },
    {
      id: 'AT6-03', topic: 'AT6', type: 'num', diff: 2,
      stem: R`The first three figures in a pattern are made of square tiles. If the pattern continues, how many tiles are in Figure 12?`,
      figure: {
        type: 'svg', alt: 'Three figures made of small squares, each in the shape of a plus sign. Figure 1 has a center square with one square on each of its four sides. Figure 2 has a center square with two squares extending on each of its four sides. Figure 3 has a center square with three squares extending on each side.',
        svg: R`<svg viewBox="0 0 300 140"><rect class="fa" x="24" y="53" width="14" height="14"/><rect class="fa" x="38" y="53" width="14" height="14"/><rect class="fa" x="10" y="53" width="14" height="14"/><rect class="fa" x="24" y="67" width="14" height="14"/><rect class="fa" x="24" y="39" width="14" height="14"/><text class="up" x="31" y="132" text-anchor="middle" style="font-size:14px">Figure 1</text><rect class="fa" x="108" y="53" width="14" height="14"/><rect class="fa" x="122" y="53" width="14" height="14"/><rect class="fa" x="136" y="53" width="14" height="14"/><rect class="fa" x="94" y="53" width="14" height="14"/><rect class="fa" x="80" y="53" width="14" height="14"/><rect class="fa" x="108" y="67" width="14" height="14"/><rect class="fa" x="108" y="81" width="14" height="14"/><rect class="fa" x="108" y="39" width="14" height="14"/><rect class="fa" x="108" y="25" width="14" height="14"/><text class="up" x="115" y="132" text-anchor="middle" style="font-size:14px">Figure 2</text><rect class="fa" x="227" y="53" width="14" height="14"/><rect class="fa" x="241" y="53" width="14" height="14"/><rect class="fa" x="255" y="53" width="14" height="14"/><rect class="fa" x="269" y="53" width="14" height="14"/><rect class="fa" x="213" y="53" width="14" height="14"/><rect class="fa" x="199" y="53" width="14" height="14"/><rect class="fa" x="185" y="53" width="14" height="14"/><rect class="fa" x="227" y="67" width="14" height="14"/><rect class="fa" x="227" y="81" width="14" height="14"/><rect class="fa" x="227" y="95" width="14" height="14"/><rect class="fa" x="227" y="39" width="14" height="14"/><rect class="fa" x="227" y="25" width="14" height="14"/><rect class="fa" x="227" y="11" width="14" height="14"/><text class="up" x="234" y="132" text-anchor="middle" style="font-size:14px">Figure 3</text></svg>`
      },
      answer: 49, tol: 0, unit: 'tiles',
      explain: R`Figures 1, 2, and 3 have 5, 9, and 13 tiles. Each figure is one center tile plus 4 arms, and the arms in Figure $n$ have $n$ tiles each, so Figure $n$ has $4n + 1$ tiles. Figure 12 has $4(12) + 1 = 49$ tiles.
        <br><i>Common errors:</i> forgetting the center tile ($4 \times 12 = 48$) and counting the center tile once for every arm ($4 \times 13 = 52$).`
    },
    {
      id: 'AT6-04', topic: 'AT6', type: 'multi', diff: 2,
      stem: R`Select all that apply. The first four terms of a pattern are $2, 5, 8, 11$. Which expressions give the $n$th term?`,
      choices: [R`$n + 3$`, R`$3n - 1$`, R`$2n + 1$`, R`$3(n - 1) + 2$`, R`$\frac{6n - 2}{2}$`], answer: [1, 3, 4],
      explain: R`The pattern goes up by 3 and the first term is 2, so the $n$th term is $2 + 3(n - 1)$, which simplifies to $3n - 1$. The choices $3n - 1$, $3(n - 1) + 2$, and $\frac{6n - 2}{2} = 3n - 1$ all match. Test the others on the first two terms: $n + 3$ gives 4 for $n = 1$, and $2n + 1$ gives 3.
        <br><i>Common errors:</i> picking a rule that matches the step but not the start, or only checking the choices against one term.`
    },
    {
      id: 'AT6-05', topic: 'AT6', type: 'mc', diff: 2,
      stem: R`The table shows the inputs and outputs of a function rule. Which rule fits every pair in the table?
        <table class="q-table"><tbody><tr><th>Input $x$</th><td>2</td><td>4</td><td>6</td><td>10</td></tr><tr><th>Output $y$</th><td>5</td><td>9</td><td>13</td><td>21</td></tr></tbody></table>`,
      choices: [R`$y = x + 3$`, R`$y = 3x - 1$`, R`$y = 2x + 1$`, R`$y = 4x - 3$`], answer: 2,
      explain: R`The output rises by 4 each time the input rises by 2, which is 2 per 1, so the rule starts with $2x$. At $x = 2$, $2(2) = 4$ and the output is 5, so add 1: $y = 2x + 1$. Check $x = 10$: $2(10) + 1 = 21$.
        <br><i>Common errors:</i> every choice gives 5 when $x = 2$, so a rule must be tested on at least two pairs. $x + 3$ fails at $x = 4$ (7), $3x - 1$ fails at $x = 4$ (11), and $4x - 3$ fails at $x = 4$ (13).`
    },
    {
      id: 'AT6-06', topic: 'AT6', type: 'mc', diff: 3, task: [7],
      stem: R`Squares are made from toothpicks and placed side by side in a row, so each pair of neighboring squares shares one toothpick. Figure 1 is one square (4 toothpicks), Figure 2 is two squares (7 toothpicks), and Figure 3 is three squares (10 toothpicks). A student says, "Each square needs 4 toothpicks, so Figure 10 needs $10 \times 4 = 40$ toothpicks." Which statement describes the student's error?`,
      choices: [
        R`The student should have added 3 to 4 ten times, giving 34 toothpicks.`,
        R`The student is right, because every square has 4 sides.`,
        R`The student counted the shared toothpicks twice. Figure $n$ needs $3n + 1$ toothpicks, so Figure 10 needs 31.`,
        R`The student should have used $3n$, so Figure 10 needs 30 toothpicks.`
      ], answer: 2,
      explain: R`The first square needs 4 toothpicks, and every square after it adds only 3 (the one it shares is already there). So Figure $n$ has $4 + 3(n - 1) = 3n + 1$ toothpicks, and Figure 10 has $3(10) + 1 = 31$. The student's $4n$ counts every shared toothpick twice. Check: Figure 3 has $3(3) + 1 = 10$.
        <br><i>Common errors:</i> adding 3 one time too many (34), leaving off the first square's extra toothpick (30), and ignoring the sharing (40).`
    }
  );
})();
