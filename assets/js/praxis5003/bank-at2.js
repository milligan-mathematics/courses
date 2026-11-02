/* Praxis 5003 bank, pass 2: Algebraic Thinking (AT1-AT6), 44 more original items (AT1-07 to AT6-12) that bring every AT
   topic to its target, so AT has 80 items with pass 1 (../praxis-5003-bank-b/bank-at.js).
   Format and rules: ../praxis-5003-kit/SPEC-5003.md and bank-example.js. Keys recomputed in checks-at2.py. */
(function () {
  var R = String.raw;
  PXD.bank.push(

    /* ================= AT1  Expressions versus equations; mathematical vocabulary ================= */
    {
      id: 'AT1-07', topic: 'AT1', type: 'mc', diff: 1,
      stem: R`In the expression $9 + 4t - 7s$, what is the constant term?`,
      choices: [R`$4$`, R`$-7$`, R`$9$`, R`$4t$`], answer: 2,
      explain: R`The constant term is the term with no variable in it: $9$. It stays the same whatever $t$ and $s$ are.
        <br><i>Common errors:</i> naming a coefficient, $4$ or $-7$ (choices A and B), and naming a term that has a variable in it, $4t$ (choice D).`
    },
    {
      id: 'AT1-08', topic: 'AT1', type: 'multi', diff: 2,
      stem: R`Select all that apply. Which statements about $3(x + 2) = 5x - 4$ are true?`,
      choices: [
        R`It is an equation, because it says that two expressions are equal.`,
        R`The expression $5x - 4$ has two terms.`,
        R`The equation is true for every value of $x$.`,
        R`The coefficient of $x$ on the right side is $-4$.`,
        R`The right side has a constant term of $-4$.`
      ], answer: [0, 1, 4],
      explain: R`The equals sign joins the expressions $3(x + 2)$ and $5x - 4$, so this is an equation. The right side has two terms, $5x$ and $-4$; the coefficient of $x$ is 5 and the constant term is $-4$.
        <br><i>Common errors:</i> the equation is not true for every $x$: it is true only when $x = 5$ (both sides are 21), and for $x = 0$ the sides are 6 and $-4$. And $-4$ is the constant term, not the coefficient of $x$ (that is 5).`
    },
    {
      id: 'AT1-09', topic: 'AT1', type: 'mc', diff: 2, task: [6],
      stem: R`A teacher writes $4n + 7$ on the board and asks, "What are the terms of this expression?" A student answers, "The terms are $4$, $n$, and $7$." Which response by the teacher is best?`,
      choices: [
        R`That is right: every number and every letter in an expression is its own term.`,
        R`The terms are $4n$ and $7$, and the 4 is the coefficient of the term $4n$.`,
        R`The terms are $4n$ and $7$, and the 4 is the constant term of the expression.`,
        R`There is only one term, $4n + 7$, because the whole expression is added together.`
      ], answer: 1,
      explain: R`Terms are the parts of an expression that are added or subtracted. In $4n + 7$ the parts are $4n$ (a product of the number 4 and the variable $n$, so one term) and $7$ (the constant term). The 4 is the coefficient of the term $4n$.
        <br><i>Common errors:</i> treating each number and letter as its own term (the student's idea, choice A), calling 4 the constant term when it multiplies a variable (choice C), and thinking a sum is a single term (choice D).`
    },
    {
      id: 'AT1-10', topic: 'AT1', type: 'mc', diff: 3,
      stem: R`What is the constant term of $2(3x - 1) + 4$ after it is written as a sum of terms with like terms combined?`,
      choices: [R`$4$`, R`$-2$`, R`$3$`, R`$2$`], answer: 3,
      explain: R`Distribute first: $2(3x - 1) = 6x - 2$. Then $6x - 2 + 4 = 6x + 2$, and the constant term is $2$.
        <br><i>Common errors:</i> reading the constant term from the original expression (4, choice A), forgetting the $+4$ (choice B, $-2$), and multiplying only the $3x$ by 2, which gives $6x - 1 + 4 = 6x + 3$ (choice C).`
    },

    /* ================= AT2  Simplifying and evaluating expressions ================= */
    {
      id: 'AT2-07', topic: 'AT2', type: 'mc', diff: 1,
      stem: R`Which expression is equivalent to $(4x + 6) + (3x + 2)$?`,
      choices: [R`$7x + 8$`, R`$7x + 12$`, R`$12x + 8$`, R`$15x$`], answer: 0,
      explain: R`Add the like terms: $4x + 3x = 7x$ and $6 + 2 = 8$, so the sum is $7x + 8$.
        <br><i>Common errors:</i> multiplying the constants instead of adding them ($7x + 12$), multiplying the coefficients ($12x + 8$), and adding unlike terms ($4 + 6 + 3 + 2 = 15$, giving $15x$).`
    },
    {
      id: 'AT2-08', topic: 'AT2', type: 'mc', diff: 2,
      stem: R`Which expression is equivalent to $(7y - 2) - (3y - 5)$?`,
      choices: [R`$4y - 7$`, R`$10y - 7$`, R`$4y + 7$`, R`$4y + 3$`], answer: 3,
      explain: R`Subtracting the group $(3y - 5)$ subtracts both of its terms: $7y - 2 - 3y + 5$. Then $7y - 3y = 4y$ and $-2 + 5 = 3$, so the result is $4y + 3$.
        <br><i>Common errors:</i> not changing the sign of $-5$ ($4y - 7$), adding the groups instead of subtracting ($10y - 7$), and changing the signs in both groups ($4y + 7$).`
    },
    {
      id: 'AT2-09', topic: 'AT2', type: 'num', diff: 1,
      stem: R`Evaluate $6 + 2(k - 3)$ for $k = 9$.`,
      answer: 18, tol: 0,
      explain: R`Work inside the parentheses first: $9 - 3 = 6$. Then multiply: $2(6) = 12$. Then add: $6 + 12 = 18$.
        <br><i>Common error:</i> adding before multiplying, which gives $(6 + 2)(9 - 3) = 8 \times 6 = 48$.`
    },
    {
      id: 'AT2-10', topic: 'AT2', type: 'multi', diff: 2,
      stem: R`Select all that apply. Which expressions are equivalent to $4(x - 3)$?`,
      choices: [R`$4x - 12$`, R`$4x - 3$`, R`$4 \cdot x - 4 \cdot 3$`, R`$4x + (-12)$`, R`$4x + 12$`], answer: [0, 2, 3],
      explain: R`The distributive property gives $4(x - 3) = 4x - 12$. Writing the same thing as $4 \cdot x - 4 \cdot 3$ or as $4x + (-12)$ does not change its value.
        <br><i>Common errors:</i> multiplying only the first term ($4x - 3$) and losing the minus sign when distributing ($4x + 12$). Check any choice with a number: at $x = 5$ the expression is $4(2) = 8$, and $4x - 3$ gives 17.`
    },
    {
      id: 'AT2-11', topic: 'AT2', type: 'mc', diff: 2, task: [4],
      stem: R`A teacher draws a rectangle that is 6 units tall and $n + 4$ units wide, and splits it into two rectangles, as shown. (Figure not drawn to scale.) Which equation does the drawing show?`,
      figure: {
        type: 'svg', alt: 'A rectangle split by one vertical line into a wider left part and a narrower right part. The left part is labeled n across the top and the right part is labeled 4. The height of the whole rectangle is labeled 6 on the left side.',
        svg: R`<svg viewBox="0 0 330 170"><rect class="fb" x="60" y="40" width="230" height="100"/><line x1="210" y1="40" x2="210" y2="140"/><text class="up" x="135" y="30" text-anchor="middle" style="font-size:16px;font-style:italic">n</text><text class="up" x="250" y="30" text-anchor="middle" style="font-size:16px">4</text><text class="up" x="44" y="95" text-anchor="middle" style="font-size:16px">6</text></svg>`
      },
      choices: [R`$6(n + 4) = 6n + 4$`, R`$6(n + 4) = n + 24$`, R`$6(n + 4) = 6n + 24$`, R`$6 + (n + 4) = 6n + 24$`], answer: 2,
      explain: R`The whole rectangle has area $6(n + 4)$. The left rectangle has area $6 \times n = 6n$ and the right one has area $6 \times 4 = 24$. The two pieces together make the whole, so $6(n + 4) = 6n + 24$. This is the distributive property.
        <br><i>Common errors:</i> multiplying only one part by 6 ($6n + 4$ or $n + 24$), and adding 6 to the width instead of multiplying (choice D).`
    },
    {
      id: 'AT2-12', topic: 'AT2', type: 'mc', diff: 2, task: [7],
      stem: R`A teacher asks students to find the value of $3m^2$ when $m = 4$. A student writes this work.
        <div class="work">$3m^2 = (3 \cdot 4)^2 = 12^2 = 144$</div>
        Which statement best describes the student's error?`,
      choices: [
        R`The student should have multiplied 3 by 4 and then by the exponent 2, which gives 24.`,
        R`The exponent applies only to $m$. Square 4 first, then multiply by 3, which gives 48.`,
        R`There is no error, because $3m^2$ means $3m$ times $3m$, which is $12 \cdot 12$.`,
        R`The student should have added the 3 to $4^2$ instead of multiplying, which gives 19.`
      ], answer: 1,
      explain: R`In $3m^2$ the exponent 2 belongs to $m$ alone. Evaluate the power first: $4^2 = 16$, and then multiply: $3 \times 16 = 48$. The student put the 3 inside the square, which is the expression $(3m)^2$.
        <br><i>Common errors:</i> reading the exponent as "times 2" (choice A), the student's own idea that the 3 is squared too (choice C), and turning the multiplication into addition (choice D).`
    },
    {
      id: 'AT2-13', topic: 'AT2', type: 'num', diff: 3,
      stem: R`When $3(2x - 1) - 2(x - 5)$ is written in the form $ax + b$, what is the value of $a + b$?`,
      answer: 11, tol: 0,
      explain: R`Distribute: $3(2x - 1) = 6x - 3$ and $-2(x - 5) = -2x + 10$. Combine like terms: $6x - 3 - 2x + 10 = 4x + 7$. So $a = 4$, $b = 7$, and $a + b = 11$.
        <br><i>Common errors:</i> forgetting that $-2 \times (-5) = +10$ (this gives $4x - 13$ and $a + b = -9$), and answering with only one of the two numbers (4 or 7).`
    },
    {
      id: 'AT2-14', topic: 'AT2', type: 'mc', diff: 3,
      stem: R`Which expression is equivalent to $\frac{1}{2}(8y - 6) + 3(y + 1)$?`,
      choices: [R`$7y$`, R`$7y - 3$`, R`$7y - 2$`, R`$7y + 6$`], answer: 0,
      explain: R`Distribute each factor: $\frac{1}{2}(8y - 6) = 4y - 3$ and $3(y + 1) = 3y + 3$. Add: $4y - 3 + 3y + 3 = 7y$. The constants cancel.
        <br><i>Common errors:</i> halving only the $8y$ ($4y - 6 + 3y + 3 = 7y - 3$), multiplying only the $y$ by 3 ($4y - 3 + 3y + 1 = 7y - 2$), and a sign slip on the $-3$ ($7y + 6$).`
    },

    /* ================= AT3  Translating, formulas, and variables ================= */
    {
      id: 'AT3-07', topic: 'AT3', type: 'mc', diff: 1,
      stem: R`Which equation represents "a number $x$ decreased by 6 is equal to 15"?`,
      choices: [R`$6 - x = 15$`, R`$x - 6 = 15$`, R`$x + 6 = 15$`, R`$6x = 15$`], answer: 1,
      explain: R`"A number $x$ decreased by 6" means 6 is taken away from $x$: $x - 6$. "Is equal to 15" gives $x - 6 = 15$ (and $x = 21$).
        <br><i>Common errors:</i> writing the subtraction in the order the words appear ($6 - x$), choosing the wrong operation ($x + 6$), and multiplying instead ($6x$).`
    },
    {
      id: 'AT3-08', topic: 'AT3', type: 'mc', diff: 2,
      stem: R`Which expression represents "the sum of a number $n$ and 4, divided by 2"?`,
      choices: [R`$\frac{n}{2} + 4$`, R`$n + \frac{4}{2}$`, R`$2(n + 4)$`, R`$\frac{n + 4}{2}$`], answer: 3,
      explain: R`"The sum of a number $n$ and 4" is $n + 4$, and the whole sum is divided by 2, so the expression is $\frac{n + 4}{2}$. Test it with $n = 6$: the sum is 10 and half of it is 5, and $\frac{6 + 4}{2} = 5$.
        <br><i>Common errors:</i> dividing only $n$ by 2 (choice A, which gives 7 at $n = 6$), dividing only the 4 by 2 (choice B, which gives 8), and multiplying by 2 instead of dividing (choice C, which gives 20).`
    },
    {
      id: 'AT3-09', topic: 'AT3', type: 'num', diff: 2,
      stem: R`The perimeter of a rectangle is $P = 2(\ell + w)$, where $\ell$ is the length and $w$ is the width. A rectangle has perimeter $46$ inches and length $15$ inches. What is its width, in inches?`,
      answer: 8, tol: 0, unit: 'inches',
      explain: R`Substitute: $46 = 2(15 + w)$. Divide both sides by 2: $23 = 15 + w$, so $w = 8$. Check: $2(15 + 8) = 46$.
        <br><i>Common errors:</i> leaving out the 2, which gives $46 = 15 + w$ and $w = 31$, and doubling only the length ($46 = 2(15) + w$ gives $w = 16$).`
    },
    {
      id: 'AT3-10', topic: 'AT3', type: 'num', diff: 1,
      stem: R`A regular hexagon has six sides of equal length. Its perimeter is $P = 6s$, where $s$ is the length of one side. A regular hexagon has a perimeter of $54$ centimeters. How long is each side, in centimeters?`,
      answer: 9, tol: 0, unit: 'centimeters',
      explain: R`Substitute: $54 = 6s$. Divide both sides by 6: $s = 9$. Check: $6 \times 9 = 54$.
        <br><i>Common error:</i> multiplying instead of dividing ($54 \times 6 = 324$).`
    },
    {
      id: 'AT3-11', topic: 'AT3', type: 'multi', diff: 1,
      stem: R`Which TWO statements correctly name the independent variable and the dependent variable?`,
      choices: [
        R`Independent: the number of minutes since a candle was lit. Dependent: the height of the candle.`,
        R`Independent: the height of the candle. Dependent: the number of minutes since the candle was lit.`,
        R`Independent: the number of tickets bought. Dependent: the total price.`,
        R`Independent: the total price. Dependent: the number of tickets bought.`
      ], answer: [0, 2],
      explain: R`The dependent variable is the one whose value depends on the other. The height of a burning candle depends on how long it has burned, and the total price depends on the number of tickets bought (price per ticket times the number of tickets).
        <br><i>Common errors:</i> reversing the roles in the candle statement (choice B) or the ticket statement (choice D). A good test is "depends on what?": the time does not depend on the candle's height, and the number of tickets does not depend on the price.`
    },
    {
      id: 'AT3-12', topic: 'AT3', type: 'mc', diff: 2, task: [7],
      stem: R`A teacher asks the class to write an equation for "Jonah is 4 years older than twice his sister's age," where $j$ is Jonah's age and $s$ is his sister's age. A student writes $j = 2(s + 4)$. Which statement best describes the student's error?`,
      choices: [
        R`The 4 should be added after doubling the sister's age, not before: $j = 2s + 4$.`,
        R`The student should have subtracted: $j = 2s - 4$.`,
        R`The student should have multiplied the sister's age by 4: $j = 4s + 2$.`,
        R`The student should have written the 2 after the parentheses: $j = (s + 4) \cdot 2$.`
      ], answer: 0,
      explain: R`Test with a number. If the sister is 5, twice her age is 10, and Jonah is 4 years older than that: 14. The equation $j = 2s + 4$ gives $2(5) + 4 = 14$, but the student's $j = 2(s + 4)$ gives $2(9) = 18$, because it doubles the extra 4 years as well.
        <br><i>Common errors:</i> choosing an operation from a keyword (choice B turns "older" into subtraction), swapping the 2 and the 4 (choice C), and moving the 2 without changing the grouping (choice D has the same value as the student's equation).`
    },
    {
      id: 'AT3-13', topic: 'AT3', type: 'num', diff: 3,
      stem: R`The sum of the interior angle measures of a polygon with $n$ sides is $S = 180(n - 2)$ degrees. A polygon has an interior angle sum of $1080$ degrees. How many sides does the polygon have?`,
      answer: 8, tol: 0, unit: 'sides',
      explain: R`Substitute: $1080 = 180(n - 2)$. Divide both sides by 180: $6 = n - 2$, so $n = 8$. Check: $180(8 - 2) = 1080$.
        <br><i>Common errors:</i> stopping after the division (answering 6) and subtracting 2 instead of adding it back ($6 - 2 = 4$).`
    },
    {
      id: 'AT3-14', topic: 'AT3', type: 'mc', diff: 2, task: [8],
      stem: R`A teacher gives the class the formula $d = rt$, where $d$ is distance, $r$ is rate, and $t$ is time. A student wants to know how long a 90-mile trip takes at 45 miles per hour. The student writes $t = 90 \times 45 = 4050$ hours and says, "That is how long it takes." Which response is best?`,
      choices: [
        R`Divide instead of multiplying, with the numbers in the other order: $t = 45 \div 90 = 0.5$ hour.`,
        R`Add the rate and the distance to get the time: $t = 90 + 45 = 135$ hours.`,
        R`A 90-mile trip at 45 miles per hour cannot take 4,050 hours. Divide: $t = 90 \div 45 = 2$ hours.`,
        R`The answer is reasonable, because the formula $d = rt$ says to multiply the two numbers you are given.`
      ], answer: 2,
      explain: R`At 45 miles per hour a car covers 45 miles in one hour, so 90 miles takes about 2 hours, and 4,050 hours (almost 169 days) is not reasonable. In $d = rt$ the distance is already known, so $90 = 45t$ and $t = 90 \div 45 = 2$. Check: $45 \times 2 = 90$.
        <br><i>Common errors:</i> dividing in the wrong order (choice A), choosing an operation without thinking about the story (choice B), and using the formula's multiplication where the unknown is a factor (the student's error and choice D).`
    },

    /* ================= AT4  Solving and interpreting linear equations and inequalities ================= */
    {
      id: 'AT4-07', topic: 'AT4', type: 'num', diff: 1,
      stem: R`What value of $x$ makes the equation $\frac{x}{4} - 3 = 5$ true?`,
      answer: 32, tol: 0,
      explain: R`Undo the subtraction: $\frac{x}{4} = 5 + 3 = 8$. Undo the division: $x = 8 \times 4 = 32$. Check: $\frac{32}{4} - 3 = 8 - 3 = 5$.
        <br><i>Common errors:</i> stopping at $\frac{x}{4} = 8$ and answering 8, and multiplying by 4 but not the 3 ($x - 3 = 20$ gives 23).`
    },
    {
      id: 'AT4-08', topic: 'AT4', type: 'mc', diff: 2,
      stem: R`The graph shows the solutions of one of these inequalities. Which one?`,
      figure: {
        type: 'svg', alt: 'Number line labeled from -5 to 3 with an open circle at -2 and a thick ray starting at the circle and going left, past -5, ending in an arrowhead.',
        svg: R`<svg viewBox="0 0 340 66"><line x1="14" y1="32" x2="326" y2="32"/><polyline points="24,26 14,32 24,38"/><polyline points="316,26 326,32 316,38"/><line x1="34" y1="27" x2="34" y2="37"/><text class="up" x="34" y="58" text-anchor="middle" style="font-size:14px">&minus;5</text><line x1="68" y1="27" x2="68" y2="37"/><text class="up" x="68" y="58" text-anchor="middle" style="font-size:14px">&minus;4</text><line x1="102" y1="27" x2="102" y2="37"/><text class="up" x="102" y="58" text-anchor="middle" style="font-size:14px">&minus;3</text><line x1="136" y1="27" x2="136" y2="37"/><text class="up" x="136" y="58" text-anchor="middle" style="font-size:14px">&minus;2</text><line x1="170" y1="27" x2="170" y2="37"/><text class="up" x="170" y="58" text-anchor="middle" style="font-size:14px">&minus;1</text><line x1="204" y1="27" x2="204" y2="37"/><text class="up" x="204" y="58" text-anchor="middle" style="font-size:14px">0</text><line x1="238" y1="27" x2="238" y2="37"/><text class="up" x="238" y="58" text-anchor="middle" style="font-size:14px">1</text><line x1="272" y1="27" x2="272" y2="37"/><text class="up" x="272" y="58" text-anchor="middle" style="font-size:14px">2</text><line x1="306" y1="27" x2="306" y2="37"/><text class="up" x="306" y="58" text-anchor="middle" style="font-size:14px">3</text><line class="a" x1="130" y1="32" x2="24" y2="32" style="stroke-width:4"/><polyline class="a" points="24,26 14,32 24,38"/><circle class="a" cx="136" cy="32" r="6" style="fill:#fff"/></svg>`
      },
      choices: [R`$x - 5 < -3$`, R`$x + 5 < 3$`, R`$x + 5 \le 3$`, R`$-2x < -4$`], answer: 1,
      explain: R`The open circle at $-2$ and the ray to the left show $x < -2$. Solve $x + 5 < 3$: subtract 5 from both sides, so $x < -2$. That matches.
        <br><i>Common errors:</i> $x - 5 < -3$ has the solution $x < 2$ (the circle would be at $+2$); $x + 5 \le 3$ has the solution $x \le -2$, which needs a filled circle; and $-2x < -4$ has the solution $x > 2$ (the sign flips when dividing by $-2$), a ray going right.`
    },
    {
      id: 'AT4-09', topic: 'AT4', type: 'mc', diff: 2, task: [7],
      stem: R`A student solved an equation and showed this work.
        <div class="work">$\frac{2}{3}x = 10$<br>$x = 10 \cdot \frac{2}{3}$<br>$x = \frac{20}{3}$</div>
        Which statement best describes the student's error?`,
      choices: [
        R`The student should have subtracted $\frac{2}{3}$ from each side to get $x$ alone.`,
        R`The student should have multiplied each side by 3 only, which gives $x = 30$.`,
        R`Multiply each side by the reciprocal, $\frac{3}{2}$, to undo the multiplication by $\frac{2}{3}$. That gives $x = 15$.`,
        R`There is no error, because multiplying each side by $\frac{2}{3}$ keeps the equation balanced and leaves $x$ alone.`
      ], answer: 2,
      explain: R`Multiplying both sides by $\frac{2}{3}$ would give $\frac{4}{9}x = \frac{20}{3}$, which does not leave $x$ alone. To get $x$ alone, multiply by the reciprocal: $\frac{3}{2} \cdot \frac{2}{3}x = x$ and $\frac{3}{2} \cdot 10 = 15$. Check: $\frac{2}{3}(15) = 10$.
        <br><i>Common errors:</i> subtracting when the operation is multiplication (choice A), multiplying by the denominator only (choice B, which gives $2x = 30$), and thinking that any operation done to both sides solves the equation (the student's idea and choice D).`
    },
    {
      id: 'AT4-10', topic: 'AT4', type: 'mc', diff: 2,
      stem: R`Dana has 25 stickers. She wants to have more than 65 stickers after she buys $p$ packs of 8 stickers each. Which inequality can be used to find the number of packs she should buy?`,
      choices: [R`$25 + 8p > 65$`, R`$25 + 8p \ge 65$`, R`$8p > 65$`, R`$25p + 8 > 65$`], answer: 0,
      explain: R`After buying $p$ packs she has $25 + 8p$ stickers. "More than 65" means the total must be greater than 65, not equal to it, so $25 + 8p > 65$. This gives $p > 5$, so she needs at least 6 packs.
        <br><i>Common errors:</i> using $\ge$, which would allow exactly 65 stickers (5 packs) and is not "more than"; leaving out the 25 stickers she already has ($8p > 65$); and attaching the 25 to the packs and the 8 to the single amount ($25p + 8$).`
    },
    {
      id: 'AT4-11', topic: 'AT4', type: 'num', diff: 3, calc: true,
      stem: R`A canoe rental costs \$15 plus \$6 for each hour. Mina has \$74 to spend. What is the greatest whole number of hours she can rent the canoe?`,
      answer: 9, tol: 0, unit: 'hours',
      explain: R`The cost of $h$ hours is $15 + 6h$, and it must be at most 74: $15 + 6h \le 74$, so $6h \le 59$ and $h \le 9.83\ldots$. Mina can rent for a whole number of hours, so the greatest is 9. Check: 9 hours cost $15 + 54 = 69$, and 10 hours would cost $75$, which is more than she has.
        <br><i>Common error:</i> rounding 9.83 to the nearest whole number (10). In this story the answer has to be rounded down.`
    },
    {
      id: 'AT4-12', topic: 'AT4', type: 'multi', diff: 2,
      stem: R`Which TWO inequalities have the same solutions as $3x - 6 > 9$?`,
      choices: [R`$3x > 15$`, R`$x > 1$`, R`$x - 2 > 3$`, R`$x < 5$`, R`$x > 3$`], answer: [0, 2],
      explain: R`Solve: add 6 to both sides to get $3x > 15$, and divide by 3 to get $x > 5$. The inequality $3x > 15$ is the first step, and $x - 2 > 3$ also gives $x > 5$ (add 2 to both sides).
        <br><i>Common errors:</i> subtracting 6 from 9 instead of adding it ($x > 3$ or, after dividing, $x > 1$), and reversing the direction of the inequality ($x < 5$).`
    },
    {
      id: 'AT4-13', topic: 'AT4', type: 'mc', diff: 2, task: [4],
      stem: R`A teacher uses a balance to show an equation. Each bag holds the same number of blocks, $b$, and the balance is level. Which equation does the balance show?`,
      figure: {
        type: 'svg', alt: 'A level balance. On the left side are three identical bags and four loose blocks, stacked two by two. On the right side are nineteen loose blocks, in a row of ten and a row of nine.',
        svg: R`<svg viewBox="0 0 420 170"><line x1="10" y1="120" x2="410" y2="120" style="stroke-width:4"/><polygon points="210,123 190,156 230,156"/><rect class="fb" x="12" y="80" width="34" height="40" rx="8"/><line class="thin" x1="19" y1="90" x2="39" y2="90"/><rect class="fb" x="52" y="80" width="34" height="40" rx="8"/><line class="thin" x1="59" y1="90" x2="79" y2="90"/><rect class="fb" x="92" y="80" width="34" height="40" rx="8"/><line class="thin" x1="99" y1="90" x2="119" y2="90"/><rect class="fa" x="140" y="106" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="157" y="106" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="140" y="89" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="157" y="89" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="225" y="106" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="242" y="106" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="259" y="106" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="276" y="106" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="293" y="106" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="310" y="106" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="327" y="106" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="344" y="106" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="361" y="106" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="378" y="106" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="225" y="89" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="242" y="89" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="259" y="89" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="276" y="89" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="293" y="89" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="310" y="89" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="327" y="89" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="344" y="89" width="14" height="14" style="stroke-width:1.4"/><rect class="fa" x="361" y="89" width="14" height="14" style="stroke-width:1.4"/></svg>`
      },
      choices: [R`$3 + 4b = 19$`, R`$7b = 19$`, R`$3b - 4 = 19$`, R`$3b + 4 = 19$`], answer: 3,
      explain: R`The left side holds 3 bags with $b$ blocks each, which is $3b$, plus 4 loose blocks: $3b + 4$. The right side holds 19 blocks, so the balance shows $3b + 4 = 19$. Solving it gives $3b = 15$ and $b = 5$.
        <br><i>Common errors:</i> swapping the 3 and the 4 ($3 + 4b$), adding the number of bags and the number of loose blocks and calling that the number of bags ($7b$), and subtracting the loose blocks instead of adding them ($3b - 4$).`
    },
    {
      id: 'AT4-14', topic: 'AT4', type: 'num', diff: 3,
      stem: R`Find the value of $x$ that satisfies $\frac{3x - 2}{4} = x + 1$.`,
      answer: -6, tol: 0,
      explain: R`Multiply both sides by 4: $3x - 2 = 4(x + 1) = 4x + 4$. Subtract $3x$ from both sides: $-2 = x + 4$. Subtract 4: $x = -6$. Check: $\frac{3(-6) - 2}{4} = \frac{-20}{4} = -5$ and $-6 + 1 = -5$.
        <br><i>Common error:</i> multiplying only part of the right side by 4 ($3x - 2 = 4x + 1$ gives $x = -3$).`
    },
    {
      id: 'AT4-15', topic: 'AT4', type: 'mc', diff: 3,
      stem: R`Which description matches the graph of the solutions of $-3x \ge 6$ on a number line?`,
      choices: [
        R`A closed circle at $-2$ with the shaded ray going to the right`,
        R`A closed circle at $-2$ with the shaded ray going to the left`,
        R`An open circle at $-2$ with the shaded ray going to the left`,
        R`A closed circle at $2$ with the shaded ray going to the right`
      ], answer: 1,
      explain: R`Divide both sides by $-3$. Dividing by a negative number reverses the inequality, so $x \le -2$. The circle is closed because $-2$ itself is a solution ($-3(-2) = 6$), and the ray goes to the left. Check with $x = -3$: $-3(-3) = 9 \ge 6$.
        <br><i>Common errors:</i> not reversing the inequality (choice A), reading $\le$ as "less than" and using an open circle (choice C), and dropping the negative sign when dividing $6$ by $-3$ (choice D).`
    },
    {
      id: 'AT4-16', topic: 'AT4', type: 'mc', diff: 2,
      stem: R`What is the solution of $4(y - 2) = 20$?`,
      choices: ['3', '5', '7', '18'], answer: 2, order: 'fixed',
      explain: R`Divide both sides by 4: $y - 2 = 5$. Add 2: $y = 7$. Check: $4(7 - 2) = 4(5) = 20$.
        <br><i>Common errors:</i> subtracting 2 instead of adding it (3), stopping after dividing by 4 (5), and subtracting 4 from 20 instead of dividing ($y - 2 = 16$ gives 18).`
    },

    /* ================= AT5  Linear relationships in equations, tables, and graphs ================= */
    {
      id: 'AT5-07', topic: 'AT5', type: 'mc', diff: 1,
      stem: R`Lena records the number of stickers, $y$, in her collection after $x$ weeks. Which equation matches her table?
        <table class="q-table"><tbody><tr><th>$x$</th><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><th>$y$</th><td>2</td><td>6</td><td>10</td><td>14</td></tr></tbody></table>`,
      choices: [R`$y = 2x + 4$`, R`$y = 4x$`, R`$y = x + 2$`, R`$y = 4x + 2$`], answer: 3,
      explain: R`When $x = 0$, $y = 2$, so the starting value is 2. Each time $x$ goes up by 1, $y$ goes up by 4, so the equation is $y = 4x + 2$. Check at $x = 3$: $4(3) + 2 = 14$.
        <br><i>Common errors:</i> swapping the rate and the starting value ($y = 2x + 4$ gives 4 when $x = 0$), forgetting the starting value ($y = 4x$ gives 0), and checking only the first row ($y = x + 2$ also gives 2 when $x = 0$).`
    },
    {
      id: 'AT5-08', topic: 'AT5', type: 'mc', diff: 2,
      stem: R`The table shows the amount, $y$, in dollars, left on a gift card after $x$ visits to a store. Which equation matches the table?
        <table class="q-table"><tbody><tr><th>$x$</th><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>$y$</th><td>9</td><td>7</td><td>5</td><td>3</td></tr></tbody></table>`,
      choices: [R`$y = -2x + 11$`, R`$y = 2x + 7$`, R`$y = -2x + 9$`, R`$y = -x + 10$`], answer: 0,
      explain: R`Each time $x$ goes up by 1, $y$ goes down by 2, so the equation starts $y = -2x$. At $x = 1$, $-2(1) = -2$ and $y = 9$, so add 11: $y = -2x + 11$. Check at $x = 4$: $-8 + 11 = 3$.
        <br><i>Common errors:</i> giving a falling pattern a positive slope ($y = 2x + 7$) or the wrong rate ($y = -x + 10$), both of which give 9 at $x = 1$, and using the first $y$-value as the constant ($y = -2x + 9$).`
    },
    {
      id: 'AT5-09', topic: 'AT5', type: 'mc', diff: 2,
      stem: R`The graph shows a line. Which statement about the line is true?`,
      figure: {
        type: 'plot', alt: 'Coordinate plane with a straight line falling from upper left to lower right. It crosses the y-axis at 3, passes through the marked points (0, 3) and (4, 1), and crosses the x-axis at 6.',
        line: { m: -0.5, b: 3 }, points: [{ x: 0, y: 3 }, { x: 4, y: 1 }], xr: [-2, 6], yr: [-2, 6], xstep: 1, ystep: 1
      },
      choices: [
        R`The slope is $-2$, and the line crosses the $y$-axis at 3.`,
        R`The slope is $-\frac{1}{2}$, and the line crosses the $y$-axis at 3.`,
        R`The slope is $-\frac{1}{2}$, and the line crosses the $y$-axis at 6.`,
        R`The slope is $\frac{1}{2}$, and the line crosses the $y$-axis at 3.`
      ], answer: 1,
      explain: R`The line crosses the $y$-axis at 3. From $(0, 3)$ to $(4, 1)$ the line falls 2 while it runs 4, so the slope is $\frac{-2}{4} = -\frac{1}{2}$. The equation of the line is $y = -\frac{1}{2}x + 3$.
        <br><i>Common errors:</i> inverting rise over run (choice A), reading the point where the line crosses the $x$-axis, 6, as the $y$-intercept (choice C), and giving a falling line a positive slope (choice D).`
    },
    {
      id: 'AT5-10', topic: 'AT5', type: 'num', diff: 3,
      stem: R`A gym charges a joining fee and then the same fee every month. The graph shows the total cost, in dollars, of a membership for different numbers of months. What is the total cost of a membership for 12 months, in dollars?`,
      figure: {
        type: 'plot', alt: 'Line graph of total cost in dollars against months. A straight line starts at 15 dollars on the vertical axis at 0 months and rises steadily to 45 dollars at 6 months. The points (1, 20) and (5, 40) are marked.',
        line: { m: 5, b: 15 }, points: [{ x: 1, y: 20 }, { x: 5, y: 40 }], xr: [0, 6], yr: [0, 45], xstep: 1, ystep: 5, xlabel: 'Months', ylabel: 'Total cost (dollars)'
      },
      answer: 75, tol: 0, unit: 'dollars',
      explain: R`The line starts at \$15 (the joining fee) and rises \$5 for each month (from $(1, 20)$ to $(5, 40)$ is \$20 in 4 months). So the cost after $m$ months is $15 + 5m$, and after 12 months it is $15 + 5(12) = 75$ dollars.
        <br><i>Common errors:</i> treating the cost as proportional to the months, either from one point ($12 \times 20 = 240$) or from the other ($\frac{12}{5} \times 40 = 96$), which ignores the \$15 joining fee.`
    },
    {
      id: 'AT5-11', topic: 'AT5', type: 'multi', diff: 2,
      stem: R`Select all that apply. The table shows values of $x$ and $y$ for a linear relationship. Which statements are true?
        <table class="q-table"><tbody><tr><th>$x$</th><td>0</td><td>2</td><td>4</td><td>6</td></tr><tr><th>$y$</th><td>3</td><td>7</td><td>11</td><td>15</td></tr></tbody></table>`,
      choices: [
        R`The value of $y$ increases by 2 each time $x$ increases by 1.`,
        R`The value of $y$ is 3 when $x = 0$.`,
        R`When $x = 5$, $y = 13$.`,
        R`When $x = 8$, $y = 20$.`,
        R`The equation $y = 4x + 3$ fits the table.`
      ], answer: [0, 1, 2],
      explain: R`The table jumps by 2 in $x$ and 4 in $y$, so $y$ rises 2 for each 1 in $x$, and $y = 3$ at $x = 0$. The equation is $y = 2x + 3$. At $x = 5$, $y = 13$; at $x = 8$, $y = 19$, not 20.
        <br><i>Common errors:</i> using the change in $y$ for a step of 2 as the rate per step of 1 (the equation $y = 4x + 3$ would give 11 when $x = 2$, but the table has 7), and adding the wrong amount to the last $y$-value when $x$ goes from 6 to 8 (the table rises 4 for each step of 2, so $15 + 4 = 19$, not 20).`
    },
    {
      id: 'AT5-12', topic: 'AT5', type: 'mc', diff: 2, task: [2],
      stem: R`A student says, "If $y$ goes up by 3 each time $x$ goes up by 1, then the equation must be $y = 3x$." The teacher wants a table that shows the student the claim is false. Which table should the teacher use?`,
      choices: [
        R`$x$: 1, 2, 3, 4 and $y$: 3, 6, 9, 12`,
        R`$x$: 1, 2, 3, 4 and $y$: 6, 12, 18, 24`,
        R`$x$: 1, 2, 3, 4 and $y$: 4, 7, 10, 13`,
        R`$x$: 1, 2, 3, 4 and $y$: 2, 5, 9, 14`
      ], answer: 2,
      explain: R`A counterexample must follow the student's "if" part (up by 3 each time) and break the "then" part. The values 4, 7, 10, 13 go up by 3 each time, but the equation is $y = 3x + 1$, not $y = 3x$ (which would give 3, 6, 9, 12).
        <br><i>Common errors:</i> choosing a table that fits $y = 3x$ (choice A, which supports the claim), a table that goes up by 6 (choice B, so the "if" part does not hold), and a table whose change is not constant, 3, 4, 5 (choice D).`
    },
    {
      id: 'AT5-13', topic: 'AT5', type: 'num', diff: 3,
      stem: R`Two shops rent kayaks. The graph shows the total cost, in dollars, of renting a kayak for different numbers of hours at each shop. For how many hours is the total cost the same at both shops?`,
      figure: {
        type: 'plot', alt: 'Graph with two straight lines, labeled Shop A and Shop B, showing total cost in dollars against hours. Shop A starts at 10 dollars at 0 hours and rises steeply. Shop B starts higher, at 20 dollars at 0 hours, and rises more slowly. The two lines cross at 5 hours.',
        fns: [{ f: '5*x+10', from: 0, to: 8, color: 'a' }, { f: '3*x+20', from: 0, to: 8, color: 'b' }],
        labels: [{ x: 6, y: 47, text: 'Shop A' }, { x: 0.4, y: 27, text: 'Shop B' }],
        xr: [0, 8], yr: [0, 60], xstep: 1, ystep: 10, xlabel: 'Hours', ylabel: 'Total cost (dollars)'
      },
      answer: 5, tol: 0, unit: 'hours',
      explain: R`The costs are equal where the two lines cross, which is at 5 hours. As a check, Shop A charges \$10 plus \$5 per hour and Shop B charges \$20 plus \$3 per hour: at 5 hours both cost \$35, because $10 + 5(5) = 35 = 20 + 3(5)$.
        <br><i>Common errors:</i> answering with the cost where the lines cross (35) instead of the number of hours, and reading the point where a line meets the vertical axis (the starting costs, 10 and 20).`
    },
    {
      id: 'AT5-14', topic: 'AT5', type: 'mc', diff: 2, task: [6],
      stem: R`A teacher asks the class to complete a table for $y = 3x - 2$. A student fills in the table.
        <table class="q-table"><tbody><tr><th>$x$</th><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><th>$y$</th><td>2</td><td>5</td><td>8</td><td>11</td></tr></tbody></table>
        The student says, "My table is right, because $y$ goes up by 3 each time $x$ goes up by 1." Which response is best?`,
      choices: [
        R`The change of 3 is right, but the table starts in the wrong place: at $x = 0$, $y = 3(0) - 2 = -2$, so the values are $-2, 1, 4, 7$.`,
        R`The table is right, because a change of 3 for each step in $x$ means that the equation is satisfied in every row.`,
        R`The table should show $y$ going down by 2 each time, since the equation subtracts 2 from $3x$.`,
        R`The table should show $0, 3, 6, 9$, because $y = 3x$ in every row of the table.`
      ], answer: 0,
      explain: R`A table fits an equation only if every row does. Substitute: $x = 0$ gives $3(0) - 2 = -2$, but the student wrote 2. The student's values satisfy $y = 3x + 2$. They do go up by 3 each time, which is the slope, but the slope does not tell the starting value.
        <br><i>Common errors:</i> checking only the change in $y$ (the student's idea and choice B), thinking "subtract 2" is the rate of change (choice C), and dropping the $-2$ altogether (choice D).`
    },

    /* ================= AT6  Patterns and function rules ================= */
    {
      id: 'AT6-07', topic: 'AT6', type: 'mc', diff: 1,
      stem: R`What is the next number in the pattern $2, 6, 18, 54, \ldots$?`,
      choices: [R`$72$`, R`$108$`, R`$162$`, R`$216$`], answer: 2, order: 'fixed',
      explain: R`Each number is 3 times the one before it: $2 \times 3 = 6$, $6 \times 3 = 18$, $18 \times 3 = 54$. The next number is $54 \times 3 = 162$.
        <br><i>Common errors:</i> adding the last difference again ($54 + 18 = 72$), doubling ($54 \times 2 = 108$), and multiplying by 4 ($54 \times 4 = 216$).`
    },
    {
      id: 'AT6-08', topic: 'AT6', type: 'num', diff: 3,
      stem: R`A pattern begins $100, 93, 86, 79, \ldots$ and continues by the same rule. What is the value of the first term in the pattern that is less than $0$?`,
      answer: -5, tol: 0,
      explain: R`The pattern subtracts 7 each time, so the $n$th term is $100 - 7(n - 1) = 107 - 7n$. The term is negative when $107 - 7n < 0$, that is, when $n > 15.28\ldots$, so the first negative term is the 16th: $107 - 7(16) = -5$. Check: the 15th term is $107 - 105 = 2$, which is still positive.
        <br><i>Common errors:</i> answering with the last positive term (2), and dividing $100 \div 7 \approx 14.3$ and taking the 14th term (9) or the 15th (2) without checking its sign.`
    },
    {
      id: 'AT6-09', topic: 'AT6', type: 'mc', diff: 2,
      stem: R`The first three figures in a pattern are made of square tiles. Which expression gives the number of tiles in Figure $n$?`,
      figure: {
        type: 'svg', alt: 'Three square arrangements of tiles. Figure 1 is a square of 2 tiles by 2 tiles. Figure 2 is a square of 3 tiles by 3 tiles. Figure 3 is a square of 4 tiles by 4 tiles.',
        svg: R`<svg viewBox="0 0 260 150"><rect class="fa" x="20" y="82" width="14" height="14"/><rect class="fa" x="34" y="82" width="14" height="14"/><rect class="fa" x="20" y="96" width="14" height="14"/><rect class="fa" x="34" y="96" width="14" height="14"/><text class="up" x="34" y="134" text-anchor="middle" style="font-size:14px">Figure 1</text><rect class="fa" x="90" y="68" width="14" height="14"/><rect class="fa" x="104" y="68" width="14" height="14"/><rect class="fa" x="118" y="68" width="14" height="14"/><rect class="fa" x="90" y="82" width="14" height="14"/><rect class="fa" x="104" y="82" width="14" height="14"/><rect class="fa" x="118" y="82" width="14" height="14"/><rect class="fa" x="90" y="96" width="14" height="14"/><rect class="fa" x="104" y="96" width="14" height="14"/><rect class="fa" x="118" y="96" width="14" height="14"/><text class="up" x="111" y="134" text-anchor="middle" style="font-size:14px">Figure 2</text><rect class="fa" x="170" y="54" width="14" height="14"/><rect class="fa" x="184" y="54" width="14" height="14"/><rect class="fa" x="198" y="54" width="14" height="14"/><rect class="fa" x="212" y="54" width="14" height="14"/><rect class="fa" x="170" y="68" width="14" height="14"/><rect class="fa" x="184" y="68" width="14" height="14"/><rect class="fa" x="198" y="68" width="14" height="14"/><rect class="fa" x="212" y="68" width="14" height="14"/><rect class="fa" x="170" y="82" width="14" height="14"/><rect class="fa" x="184" y="82" width="14" height="14"/><rect class="fa" x="198" y="82" width="14" height="14"/><rect class="fa" x="212" y="82" width="14" height="14"/><rect class="fa" x="170" y="96" width="14" height="14"/><rect class="fa" x="184" y="96" width="14" height="14"/><rect class="fa" x="198" y="96" width="14" height="14"/><rect class="fa" x="212" y="96" width="14" height="14"/><text class="up" x="198" y="134" text-anchor="middle" style="font-size:14px">Figure 3</text></svg>`
      },
      choices: [R`$4n$`, R`$2n + 2$`, R`$n^2 + 3$`, R`$(n + 1)^2$`], answer: 3,
      explain: R`Figures 1, 2, and 3 are squares with 2, 3, and 4 tiles on a side, so they have $2^2 = 4$, $3^2 = 9$, and $4^2 = 16$ tiles. Figure $n$ has $n + 1$ tiles on a side, so it has $(n + 1)^2$ tiles.
        <br><i>Common errors:</i> every choice gives 4 for Figure 1, so a rule has to be tested on at least two figures. $4n$ gives 8 for Figure 2, $2n + 2$ gives 6, and $n^2 + 3$ gives 7, but Figure 2 has 9 tiles.`
    },
    {
      id: 'AT6-10', topic: 'AT6', type: 'multi', diff: 2,
      stem: R`Select all that apply. Which statements are true for all whole numbers?`,
      choices: [
        R`The sum of two odd numbers is always even.`,
        R`The product of two odd numbers is always even.`,
        R`The sum of two consecutive whole numbers is always odd.`,
        R`The sum of any two whole numbers is always even.`,
        R`The product of any whole number and an even number is always even.`
      ], answer: [0, 2, 4],
      explain: R`Odd numbers are 1 more than a multiple of 2, so the sum of two odd numbers is 2 more than a multiple of 2: even. Two consecutive whole numbers are one even and one odd, and even plus odd is odd. Any whole number times an even number has a factor of 2, so it is even.
        <br><i>Common errors:</i> a single example does not prove a statement, but one counterexample disproves it: $3 \times 5 = 15$ is odd, so the product of two odd numbers is not always even, and $2 + 3 = 5$ is odd, so the sum of two whole numbers is not always even.`
    },
    {
      id: 'AT6-11', topic: 'AT6', type: 'mc', diff: 3, task: [1],
      stem: R`A student notices that $1 + 3 = 4$, $1 + 3 + 5 = 9$, and $1 + 3 + 5 + 7 = 16$, and says, "The sum of the first $n$ odd numbers is always $n^2$." The teacher asks how the student could be sure that this works for every $n$, not just the ones tried. Which explanation is best?`,
      choices: [
        R`Each new odd number is an L-shaped border that turns an $n$-by-$n$ square of tiles into an $(n + 1)$-by-$(n + 1)$ square, so the sum is always a square number.`,
        R`Check the pattern for the first 20 odd numbers on a calculator. If it works for all of them, then the pattern is proven for every $n$.`,
        R`The pattern is certain, because the sums 4, 9, and 16 are all square numbers and the next sum will be one too.`,
        R`No one can be sure, because a pattern that works for a few cases might fail on the next one.`
      ], answer: 0,
      explain: R`Checking cases, even many of them, does not show why a pattern must continue. A picture can: an $n$-by-$n$ square has $n^2$ tiles, and adding a border of $2n + 1$ tiles (the next odd number) along two sides gives an $(n + 1)$-by-$(n + 1)$ square with $(n + 1)^2$ tiles. So the pattern holds for every $n$.
        <br><i>Common errors:</i> treating many checked cases as proof (choice B), restating the pattern as the reason for it (choice C), and thinking that a reason is impossible (choice D). A pattern can fail later, but here there is an argument that explains why it cannot.`
    },
    {
      id: 'AT6-12', topic: 'AT6', type: 'num', diff: 2,
      stem: R`The table shows inputs and outputs of a function rule. What is the output when the input is 20?
        <table class="q-table"><tbody><tr><th>Input $x$</th><td>3</td><td>5</td><td>8</td><td>12</td></tr><tr><th>Output $y$</th><td>11</td><td>17</td><td>26</td><td>38</td></tr></tbody></table>`,
      answer: 62, tol: 0,
      explain: R`Between inputs 3 and 5, the output goes up by 6 while the input goes up by 2, which is 3 per 1. So the rule starts $3x$. At $x = 3$, $3(3) = 9$ and the output is 11, so add 2: $y = 3x + 2$. It fits every pair (for example $3(12) + 2 = 38$), so for input 20 the output is $3(20) + 2 = 62$.
        <br><i>Common errors:</i> treating the output as proportional to the input ($\frac{11}{3} \times 20 \approx 73$) and forgetting to add 2 ($3 \times 20 = 60$).`
    }
  );
})();
