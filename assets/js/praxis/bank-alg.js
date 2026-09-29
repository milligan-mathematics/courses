/* Praxis 5165 diagnostic: Algebra (ALG1-ALG9) question bank. Original items. */
(function () {
  var R = String.raw;

  /* Hand-drawn inequality graph. halfplanes: [a,b,c] means region a*x+b*y+c >= 0 (shaded where all hold).
     lines: [a,b,c,dashed] boundary a*x+b*y+c = 0. Window is -5..5 on both axes. */
  var _ineqN = 0;
  function ineqSvg(halfplanes, lines) {
    var S = 30, O = 160, id = 'iq' + (++_ineqN);
    function px(x) { return Math.round((O + S * x) * 100) / 100; }
    function py(y) { return Math.round((O - S * y) * 100) / 100; }
    function clip(poly, h) {
      var out = [];
      for (var i = 0; i < poly.length; i++) {
        var p = poly[i], q = poly[(i + 1) % poly.length];
        var fp = h[0] * p[0] + h[1] * p[1] + h[2], fq = h[0] * q[0] + h[1] * q[1] + h[2];
        if (fp >= 0) out.push(p);
        if ((fp >= 0) !== (fq >= 0)) { var t = fp / (fp - fq); out.push([p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])]); }
      }
      return out;
    }
    var poly = [[-5, -5], [5, -5], [5, 5], [-5, 5]];
    halfplanes.forEach(function (h) { poly = clip(poly, h); });
    var s = '<svg viewBox="0 0 320 320">';
    s += '<defs><clipPath id="' + id + '"><rect x="10" y="10" width="300" height="300"/></clipPath></defs>';
    for (var k = -5; k <= 5; k++) {
      s += '<line class="m thin" style="stroke-opacity:.35" x1="' + px(k) + '" y1="10" x2="' + px(k) + '" y2="310"/>';
      s += '<line class="m thin" style="stroke-opacity:.35" x1="10" y1="' + py(k) + '" x2="310" y2="' + py(k) + '"/>';
    }
    if (poly.length > 2) s += '<polygon style="fill:#F36E24;fill-opacity:.22;stroke:none" points="' + poly.map(function (p) { return px(p[0]) + ',' + py(p[1]); }).join(' ') + '"/>';
    s += '<g clip-path="url(#' + id + ')">';
    lines.forEach(function (l) {
      var a = l[0], b = l[1], c = l[2], x1, y1, x2, y2;
      if (Math.abs(b) > 1e-9) { x1 = -6; y1 = (-c - a * x1) / b; x2 = 6; y2 = (-c - a * x2) / b; }
      else { x1 = x2 = -c / a; y1 = -6; y2 = 6; }
      s += '<line class="' + (l[3] ? 'dash ' : '') + 'a" x1="' + px(x1) + '" y1="' + py(y1) + '" x2="' + px(x2) + '" y2="' + py(y2) + '"/>';
    });
    s += '</g>';
    s += '<line x1="10" y1="160" x2="310" y2="160"/><line x1="160" y1="10" x2="160" y2="310"/>';
    for (var t = -4; t <= 4; t++) {
      if (t === 0) continue;
      s += '<line x1="' + px(t) + '" y1="156" x2="' + px(t) + '" y2="164"/><line x1="156" y1="' + py(t) + '" x2="164" y2="' + py(t) + '"/>';
      s += '<text class="up" style="font-size:11px" x="' + (px(t) - 3) + '" y="176">' + (t < 0 ? '−' + (-t) : t) + '</text>';
      s += '<text class="up" style="font-size:11px" x="' + (t < 0 ? 138 : 143) + '" y="' + (py(t) + 4) + '">' + (t < 0 ? '−' + (-t) : t) + '</text>';
    }
    s += '<text x="301" y="151">x</text><text x="168" y="22">y</text></svg>';
    return s;
  }

  PXD.bank.push(

    /* ================= ALG1: Equivalent forms ================= */
    {
      id: 'ALG1-01', topic: 'ALG1', type: 'mc', diff: 1,
      stem: R`Which expression is equivalent to $(2x-3)^2-(x+1)^2$?`,
      choices: [R`$(x-4)(3x-2)$`, R`$(x-2)(3x-4)$`, R`$3x^2-10x+10$`, R`$(x-4)^2$`],
      answer: 0,
      explain: R`The expression is a difference of squares, $A^2-B^2=(A-B)(A+B)$, with $A=2x-3$ and $B=x+1$. Then $A-B=x-4$ and $A+B=3x-2$, so the expression equals $(x-4)(3x-2)$. (Expanded, both forms give $3x^2-14x+8$.)
        <br><i>Common errors:</i> choosing B comes from not distributing the subtraction in $A-B$ (getting $x-2$) and slipping on the sign in $A+B$. Choosing C comes from expanding but not distributing the minus sign over $(x+1)^2$. Choosing D treats $A^2-B^2$ as $(A-B)^2$.`
    },
    {
      id: 'ALG1-02', topic: 'ALG1', type: 'mc', diff: 2,
      stem: R`The thin-lens equation is $\dfrac{1}{f}=\dfrac{1}{u}+\dfrac{1}{v}$. Which expression gives $v$ in terms of $f$ and $u$?`,
      choices: [R`$v=\dfrac{fu}{u-f}$`, R`$v=\dfrac{fu}{f-u}$`, R`$v=f-u$`, R`$v=\dfrac{u-f}{fu}$`],
      answer: 0,
      explain: R`Isolate the term containing $v$: $\dfrac{1}{v}=\dfrac{1}{f}-\dfrac{1}{u}=\dfrac{u-f}{fu}$. Taking reciprocals of both sides gives $v=\dfrac{fu}{u-f}$.
        <br><i>Common errors:</i> B reverses the subtraction. C subtracts the reciprocals' denominators, treating $\frac1v=\frac1f-\frac1u$ as $v=f-u$. D stops one step early and forgets to take the reciprocal.`
    },
    {
      id: 'ALG1-03', topic: 'ALG1', type: 'mc', diff: 2, task: [18],
      stem: R`A student, Devon, solved $y=\dfrac{2x+1}{x-3}$ for $x$ and got an incorrect answer. His work is shown.
        <div class="work">Step 1: $y(x-3)=2x+1$<br>Step 2: $yx-3y=2x+1$<br>Step 3: $yx-2x=1-3y$<br>Step 4: $x(y-2)=1-3y$<br>Step 5: $x=\dfrac{1-3y}{y-2}$</div>
        In which step did Devon first make an error?`,
      choices: [R`Step 2, because $y(x-3)$ should equal $yx-3$`, R`Step 3, because moving $-3y$ to the other side gives $1+3y$, not $1-3y$`, R`Step 4, because $yx-2x$ cannot be factored`, R`Step 5, because dividing by $y-2$ reverses the equation`],
      answer: 1,
      explain: R`Step 2 correctly distributes $y$ over $x-3$. In Step 3, Devon wants the $x$-terms on the left: adding $3y$ to both sides gives $yx-2x=1+3y$. He instead wrote $1-3y$, so the error is in Step 3. The correct answer is $x=\dfrac{1+3y}{y-2}$.
        <br><i>Distractors:</i> Step 4 is a valid factoring of $x$ out of both terms, and Step 5 is a valid division (for $y\ne2$), so neither is an error.`
    },
    {
      id: 'ALG1-04', topic: 'ALG1', type: 'num', diff: 1,
      stem: R`When $(x^2-3x+4)(2x^2+x-6)$ is multiplied out and written in standard form, what is the coefficient of $x^2$?`,
      answer: -1, tol: 0,
      explain: R`Only three products of terms give an $x^2$ term: $x^2\cdot(-6)=-6x^2$, $(-3x)(x)=-3x^2$, and $4\cdot2x^2=8x^2$. The sum is $-6-3+8=-1$.
        <br>A frequent slip is to miss one of the three pairings (for example, $-6+8=2$ or $-3+8=5$).`
    },
    {
      id: 'ALG1-05', topic: 'ALG1', type: 'mc', diff: 2,
      stem: R`Which expression is equal to $\dfrac{2x^3-5x^2+4x-7}{x-2}$ for all $x\ne2$?`,
      choices: [R`$2x^2-x+2-\dfrac{3}{x-2}$`, R`$2x^2-x+2+\dfrac{3}{x-2}$`, R`$2x^2-9x+22-\dfrac{51}{x-2}$`, R`$2x^2-x+2$`],
      answer: 0,
      explain: R`Synthetic division by $x-2$ uses the number 2: the bottom row is $2,\,-1,\,2,\,-3$. So the quotient is $2x^2-x+2$ and the remainder is $-3$, and the expression equals $2x^2-x+2+\dfrac{-3}{x-2}=2x^2-x+2-\dfrac{3}{x-2}$.
        <br><i>Common errors:</i> B loses the sign of the remainder. C uses $-2$ in the synthetic division (the divisor is $x-2$, not $x+2$). D ignores the remainder.`
    },
    {
      id: 'ALG1-06', topic: 'ALG1', type: 'mc', diff: 2, task: [15],
      stem: R`A student factors $x^4-16$ as $(x^2-4)(x^2+4)$, then factors $x^2-4$ as $(x-2)(x+2)$ and says, "I'm done, because $x^2+4$ can't be factored." The teacher asks the class to factor $x^4-16$ <b>completely over the complex numbers</b>. Which of the following is correct?`,
      choices: [R`$(x-2)(x+2)(x-2i)(x+2i)$`, R`$(x-2)(x+2)(x^2+4)$`, R`$(x-2)(x+2)(x-4i)(x+4i)$`, R`$(x-2)^2(x+2)^2$`],
      answer: 0,
      explain: R`Over the complex numbers, $x^2+4=x^2-(2i)^2=(x-2i)(x+2i)$, since $(2i)^2=-4$. So $x^4-16=(x-2)(x+2)(x-2i)(x+2i)$. The student's factorization is complete only over the real numbers.
        <br><i>Common errors:</i> B stops at the real factorization. C uses $4i$ (confusing $b^2=4$ with $b=4$). D treats $x^2+4$ as $(x+2)^2$ or $(x-2)(x+2)$ (a sum of squares is not a perfect square).`
    },
    {
      id: 'ALG1-07', topic: 'ALG1', type: 'multi', diff: 2,
      stem: R`Which expressions are equivalent to $f(x)=2x^2-12x+22$ for all real $x$? Select all that apply.`,
      choices: [R`$2(x-3)^2+4$`, R`$(2x-6)(x-3)+4$`, R`$2(x-6)^2-50$`, R`$2(x+3)^2+4$`, R`$2(x-3)^2-4$`],
      answer: [0, 1],
      explain: R`Complete the square: $2x^2-12x+22=2(x^2-6x+9)+22-18=2(x-3)^2+4$, so the first expression is equivalent. For the second, $(2x-6)(x-3)=2x^2-12x+18$, and adding 4 gives $2x^2-12x+22$, so it is also equivalent.
        <br>Third: $2(x-6)^2-50=2x^2-24x+22$ (the middle coefficient is wrong). Fourth: $2(x+3)^2+4=2x^2+12x+22$ (sign of the linear term). Fifth: $2(x-3)^2-4=2x^2-12x+14$ (the constant is wrong).`
    },
    {
      id: 'ALG1-08', topic: 'ALG1', type: 'mc', diff: 1,
      stem: R`The height, in feet, of a ball $t$ seconds after it is thrown is $h(t)=-16t^2+64t+5$. Which of the following equivalent forms most directly shows the maximum height of the ball?`,
      choices: [R`$h(t)=-16t^2+64t+5$`, R`$h(t)=-16t(t-4)+5$`, R`$h(t)=-16(t-2)^2+69$`, R`$h(t)=-16(t^2-4t)+5$`],
      answer: 2,
      explain: R`Vertex form shows the extreme value: $-16(t-2)^2+69$ has a squared term that is never positive, so the maximum value is 69 feet, reached at $t=2$. (Check: $-16(t^2-4t+4)+69=-16t^2+64t+5$.) The standard form shows the initial height 5, and the other two forms are equivalent but do not display the maximum.`
    },

    /* ================= ALG2: Creating equations and inequalities ================= */
    {
      id: 'ALG2-01', topic: 'ALG2', type: 'num', diff: 1,
      stem: R`A music-streaming service charges a one-time setup fee of \$25 plus \$18 per month. Kayla can spend at most \$200 in total. What is the greatest whole number of months she can subscribe?`,
      answer: 9, tol: 0, unit: 'months',
      explain: R`Let $m$ be the number of months. The cost is $25+18m\le200$, so $18m\le175$ and $m\le9.72\ldots$. Since $m$ must be a whole number, the greatest viable value is 9. (At 10 months the cost would be \$205.)`
    },
    {
      id: 'ALG2-02', topic: 'ALG2', type: 'multi', diff: 2,
      stem: R`A theater sells adult tickets for \$12 and child tickets for \$8. One night the ticket revenue was exactly \$960. Let $a$ be the number of adult tickets sold and $c$ the number of child tickets sold, so $12a+8c=960$. Which of the following ordered pairs $(a,c)$ are viable solutions to the situation? Select all that apply.`,
      choices: [R`$(50,\,45)$`, R`$(-10,\,135)$`, R`$(25,\,82.5)$`, R`$(40,\,60)$`, R`$(100,\,-30)$`],
      answer: [0, 3],
      explain: R`Every pair listed satisfies the equation $12a+8c=960$, but a viable solution must also make sense in context: the numbers of tickets must be nonnegative whole numbers. $(50,45)$ and $(40,60)$ qualify. $(-10,135)$ and $(100,-30)$ contain negative ticket counts, and $(25,82.5)$ has a fractional number of tickets.`
    },
    {
      id: 'ALG2-03', topic: 'ALG2', type: 'mc', diff: 1, task: [6],
      stem: R`Ms. Ortiz wants her students to write the inequality $15+2.5n\le40$ from a word problem. Which problem leads to this inequality?`,
      choices: [R`An arcade charges a \$15 entry fee plus \$2.50 per game. Jo has at most \$40 to spend. How many games can Jo play?`, R`An arcade charges a \$2.50 entry fee plus \$15 per game. Jo has at most \$40 to spend. How many games can Jo play?`, R`An arcade charges a \$15 entry fee plus \$2.50 per game. Jo wants to spend at least \$40. How many games must Jo play?`, R`Jo has \$15 and earns \$2.50 for each game she wins. She wants to have at least \$40. How many games must she win?`],
      answer: 0,
      explain: R`The expression $15+2.5n$ is a fixed amount plus \$2.50 for each of $n$ items, and "$\le40$" means a maximum total of \$40. Only the first problem has both features. B swaps the fee and the rate. C and D both describe "at least \$40," which would give $\ge$.`
    },
    {
      id: 'ALG2-04', topic: 'ALG2', type: 'mc', diff: 2,
      stem: R`The length of a rectangular garden is 3 meters more than its width. The area of the garden is 70 square meters. Which equation and solution correctly describe the width $w$ of the garden?`,
      choices: [R`$w(w+3)=70$; the width is 7 meters.`, R`$w(w-3)=70$; the width is 10 meters.`, R`$w+(w+3)=70$; the width is 33.5 meters.`, R`$w(w+3)=70$; the width is $-10$ meters.`],
      answer: 0,
      explain: R`Length $=w+3$, so area gives $w(w+3)=70$, i.e. $w^2+3w-70=0$, or $(w+10)(w-7)=0$. Then $w=7$ or $w=-10$. A width cannot be negative, so $w=-10$ is not viable and the width is 7 meters (length 10 meters).
        <br><i>Common errors:</i> B writes the length as $w-3$. C uses perimeter instead of area. D reports the nonviable root.`
    },
    {
      id: 'ALG2-05', topic: 'ALG2', type: 'mc', diff: 2,
      stem: R`Priya works $x$ hours per week tutoring (earning \$20 per hour) and $y$ hours per week babysitting (earning \$12 per hour). She wants to work at most 15 hours in all and to earn at least \$180 per week. The graph shows the lines $x+y=15$ and $20x+12y=180$. Which labeled point represents a weekly schedule that satisfies both conditions?`,
      figure: {
        type: 'plot', alt: 'Coordinate grid with x from 0 to 16 (tutoring hours) and y from 0 to 16 (babysitting hours). Two decreasing lines: x+y=15 through (0,15) and (15,0), and 20x+12y=180 through (0,15) and (9,0). Labeled points: A at (5,5), B at (12,6), C at (10,3), D at (3,3).',
        fns: [{ f: '15 - x', color: 'a' }, { f: '15 - 5*x/3', color: 'b' }],
        points: [{ x: 5, y: 5, label: 'A', dx: -16, dy: -4 }, { x: 12, y: 6, label: 'B' }, { x: 10, y: 3, label: 'C', dx: 6, dy: 16 }, { x: 3, y: 3, label: 'D' }],
        xr: [0, 16], yr: [0, 16], xstep: 2, ystep: 2, xlabel: 'Tutoring hours (x)', ylabel: 'Babysitting hours (y)'
      },
      choices: [R`$A$`, R`$B$`, R`$C$`, R`$D$`], answer: 2, order: 'fixed',
      explain: R`The schedule must satisfy $x+y\le15$ (on or below the line through $(0,15)$ and $(15,0)$) and $20x+12y\ge180$ (on or above the line through $(0,15)$ and $(9,0)$). Test each point: $A(5,5)$ earns $20(5)+12(5)=160<180$. $B(12,6)$ works 18 hours, which is too many. $C(10,3)$ works 13 hours and earns $200+36=236$, so it satisfies both. $D(3,3)$ earns only $96$.`
    },
    {
      id: 'ALG2-06', topic: 'ALG2', type: 'num', diff: 3,
      stem: R`A school will buy $x$ laptops at \$400 each and $y$ tablets at \$250 each, with a budget of at most \$5000. The school needs at least 6 laptops and at least 12 devices in all, and $x$ and $y$ must be whole numbers. What is the greatest total number of devices the school can buy?`,
      answer: 16, tol: 0, unit: 'devices',
      explain: R`The constraints are $400x+250y\le5000$, $x\ge6$, and $x+y\ge12$. Because tablets are cheaper, to maximize $x+y$ use as few laptops as allowed: with $x=6$, $250y\le5000-2400=2600$, so $y\le10.4$, hence $y=10$ and $x+y=16$. With $x=7$, $y\le8.8$, so $y=8$ and the total is only 15, and the total keeps falling as $x$ increases. The maximum is 16 devices (which also satisfies the 12-device minimum).`
    },
    {
      id: 'ALG2-07', topic: 'ALG2', type: 'mc', diff: 2, task: [15],
      stem: R`A school trip needs to seat 50 students in boats, and each boat holds 6 students. Marcus writes $6b\ge50$, solves to get $b\ge8.33$, and says, "I'll round to the nearest whole number, so 8 boats is enough." Which response is best?`,
      choices: [R`The inequality is correct, but the number of boats must be a whole number, so the least viable value is $b=9$. Eight boats would seat only 48 students.`, R`The inequality should be $6b\le50$, so 8 boats is correct.`, R`Because $b$ cannot be a decimal, the solution $b\ge8.33$ is not viable and the problem has no solution.`, R`Marcus is correct, because 8.33 rounds to 8.`],
      answer: 0,
      explain: R`The inequality $6b\ge50$ correctly says the boats must seat at least 50 students, giving $b\ge8.33\ldots$. Since $b$ counts boats, only whole numbers are viable, and the least whole number that is at least 8.33 is 9. Rounding to the nearest whole number ignores the direction of the inequality: 8 boats seat $6\cdot8=48<50$. Choice C confuses "some values are nonviable" with "all values are nonviable"; 9, 10, 11, ... all work.`
    },

    /* ================= ALG3: Solving equations and inequalities ================= */
    {
      id: 'ALG3-01', topic: 'ALG3', type: 'mc', diff: 1,
      stem: R`Solve $ax-5=3x+7$ for $x$, where $a\ne3$.`,
      choices: [R`$x=\dfrac{12}{a-3}$`, R`$x=\dfrac{2}{a-3}$`, R`$x=\dfrac{12}{a+3}$`, R`$x=\dfrac{12}{3-a}$`],
      answer: 0,
      explain: R`Collect the $x$-terms on one side and constants on the other: $ax-3x=7+5$, so $x(a-3)=12$ and $x=\dfrac{12}{a-3}$.
        <br><i>Common errors:</i> B computes $7-5$ instead of $7+5$. C combines $ax$ and $3x$ as $a+3$. D reverses the subtraction of the coefficients.`
    },
    {
      id: 'ALG3-02', topic: 'ALG3', type: 'num', diff: 1,
      stem: R`What is the greatest integer $x$ that satisfies $-3(2x-4)>18$?`,
      answer: -2, tol: 0,
      explain: R`Divide both sides by $-3$ and reverse the inequality: $2x-4<-6$. Then $2x<-2$, so $x<-1$. The greatest integer less than $-1$ is $-2$. (Forgetting to reverse the inequality leads to $x>-1$, and $x=-1$ itself is not a solution because the inequality is strict.)`
    },
    {
      id: 'ALG3-03', topic: 'ALG3', type: 'mc', diff: 2,
      stem: R`Solve $x^2+6x+13=0$ by completing the square. What are the solutions?`,
      choices: [R`$x=-3\pm2i$`, R`$x=3\pm2i$`, R`$x=-3\pm4i$`, R`$x=-1$ or $x=-5$`],
      answer: 0,
      explain: R`Subtract 13 and add $\left(\tfrac62\right)^2=9$ to both sides: $x^2+6x+9=-4$, so $(x+3)^2=-4$. Then $x+3=\pm2i$, and $x=-3\pm2i$.
        <br><i>Common errors:</i> B loses the sign when undoing $x+3$. C forgets to take the square root of 4. D treats the $-4$ as $+4$, which would give real solutions.`
    },
    {
      id: 'ALG3-04', topic: 'ALG3', type: 'mc', diff: 2,
      stem: R`For which values of $k$ does the equation $2x^2-4x+k=0$ have two distinct nonreal complex solutions?`,
      choices: [R`$k>2$`, R`$k<2$`, R`$k>8$`, R`$k<8$`],
      answer: 0,
      explain: R`Nonreal solutions occur when the discriminant is negative: $b^2-4ac=(-4)^2-4(2)k=16-8k<0$. Solving, $8k>16$, so $k>2$ (dividing by $-8$ reverses the inequality direction from $-8k<-16$).
        <br><i>Common errors:</i> B forgets to reverse the inequality. C and D come from computing $4ac$ as $2k$ instead of $8k$, which gives $16-2k$ and the boundary value 8.`
    },
    {
      id: 'ALG3-05', topic: 'ALG3', type: 'multi', diff: 2, task: [17],
      stem: R`Four students solved $x^2-5x=14$. Which students used a <b>valid</b> method? Select all that apply.
        <div class="work"><b>Ana:</b> $x^2-5x-14=0 \Rightarrow (x-7)(x+2)=0 \Rightarrow x=7$ or $x=-2$</div>
        <div class="work"><b>Ben:</b> $x(x-5)=14 \Rightarrow x=14$ or $x-5=14 \Rightarrow x=14$ or $x=19$</div>
        <div class="work"><b>Cara:</b> $x^2-5x+\tfrac{25}{4}=14+\tfrac{25}{4} \Rightarrow \left(x-\tfrac52\right)^2=\tfrac{81}{4} \Rightarrow x=\tfrac52\pm\tfrac92$</div>
        <div class="work"><b>Dev:</b> $x=\dfrac{5\pm\sqrt{25-4(1)(14)}}{2}=\dfrac{5\pm\sqrt{-31}}{2}$</div>`,
      choices: [R`Ana's`, R`Ben's`, R`Cara's`, R`Dev's`],
      answer: [0, 2], order: 'fixed',
      explain: R`Ana moves everything to one side and factors correctly (the zero-product property applies because the product is 0). Cara completes the square correctly: half of $-5$ squared is $\tfrac{25}{4}$, and $\tfrac52\pm\tfrac92$ gives $7$ and $-2$. Ben uses the zero-product property when the product equals 14, which is not valid: a product being 14 says nothing about the individual factors. Dev substitutes $c=+14$ into the quadratic formula; after rearranging, $c=-14$, so the discriminant should be $25+56=81$.`
    },
    {
      id: 'ALG3-06', topic: 'ALG3', type: 'mc', diff: 2,
      stem: R`What are the solutions of $3x^2-2x+5=0$?`,
      choices: [R`$x=\dfrac{1\pm i\sqrt{14}}{3}$`, R`$x=\dfrac{1\pm2i\sqrt{14}}{3}$`, R`$x=\dfrac{2\pm i\sqrt{14}}{3}$`, R`$x=\dfrac{-1\pm i\sqrt{14}}{3}$`],
      answer: 0,
      explain: R`The discriminant is $(-2)^2-4(3)(5)=-56$, and $\sqrt{-56}=2i\sqrt{14}$. So $x=\dfrac{2\pm2i\sqrt{14}}{6}=\dfrac{1\pm i\sqrt{14}}{3}$.
        <br><i>Common errors:</i> B and C divide only one term of $2\pm2i\sqrt{14}$ by 2. D uses $-b=-2$ instead of $+2$.`
    },
    {
      id: 'ALG3-07', topic: 'ALG3', type: 'mc', diff: 2,
      stem: R`Which inequality is represented by the graph shown? The boundary line passes through $(0,-2)$ and $(3,0)$.`,
      figure: {
        type: 'svg', alt: 'Coordinate plane from -5 to 5. A dashed line passes through (0,-2) and (3,0). The region above and to the left of the line is shaded.',
        svg: ineqSvg([[-2, 3, 6]], [[-2, 3, 6, true]])
      },
      choices: [R`$y>\tfrac23x-2$`, R`$y\ge\tfrac23x-2$`, R`$y<\tfrac23x-2$`, R`$y>\tfrac32x-2$`],
      answer: 0,
      explain: R`The line has slope $\dfrac{0-(-2)}{3-0}=\tfrac23$ and $y$-intercept $-2$, so its equation is $y=\tfrac23x-2$. The line is dashed, so points on it are not included: the symbol is strict ($>$ or $<$). The shaded region contains points above the line (for example $(0,0)$: $0>-2$), so the inequality is $y>\tfrac23x-2$.
        <br><i>Common errors:</i> B ignores the dashed boundary; C shades the wrong side; D swaps the rise and run.`
    },
    {
      id: 'ALG3-08', topic: 'ALG3', type: 'mc', diff: 2, task: [2, 3],
      stem: R`A student solves $-2x+5\le11$ by writing "Subtract 5: $-2x\le6$. Divide by $-2$: $x\ge-3$." The student asks, "Why did the inequality sign turn around?" Which explanation is mathematically correct and most helpful?`,
      choices: [R`Multiplying or dividing both sides by a negative number reverses the order of the two sides. For example, $2<5$ but $-2>-5$, so the symbol must be reversed to keep the statement true.`, R`The sign turns around because $x$ turns out to be a negative number.`, R`The sign turns around any time we divide, since division undoes multiplication.`, R`The sign turns around because we subtracted 5 from both sides first.`],
      answer: 0,
      explain: R`Multiplying by a negative number reflects the number line, which reverses the order of any two numbers: $2<5$ becomes $-2>-5$ after multiplying by $-1$. That is why dividing an inequality by a negative reverses the symbol; adding or subtracting the same number (like the 5) never does, and neither does dividing by a positive. Whether $x$ is negative is irrelevant (here the solution set $x\ge-3$ includes positive numbers).`
    },
    {
      id: 'ALG3-09', topic: 'ALG3', type: 'mc', diff: 3, task: [21],
      stem: R`A student, Jess, solved $x^2+8x=5$ by completing the square. Her work is shown.
        <div class="work">$x^2+8x=5$<br>$x^2+8x+16=5$<br>$(x+4)^2=5$<br>$x=-4\pm\sqrt5$</div>
        Which statement about Jess's work is correct?`,
      choices: [R`The work is correct.`, R`Jess added 16 to only one side of the equation; the correct solutions are $x=-4\pm\sqrt{21}$.`, R`Jess should have added 64, not 16; the correct solutions are $x=-4\pm\sqrt{69}$.`, R`Jess should have written $(x+4)^2=x^2+16$, so the equation has no real solutions.`],
      answer: 1,
      explain: R`Completing the square requires adding $\left(\tfrac82\right)^2=16$ to <i>both</i> sides. That gives $x^2+8x+16=5+16=21$, so $(x+4)^2=21$ and $x=-4\pm\sqrt{21}$. Jess's steps look tidy, but she changed the equation by adding 16 on the left only. (Check with the quadratic formula on $x^2+8x-5=0$: the discriminant is $64+20=84$, so $x=\dfrac{-8\pm\sqrt{84}}{2}=-4\pm\sqrt{21}$.) Choice C adds $8^2$ instead of $(8/2)^2$, and D confuses $(x+4)^2$ with $x^2+16$.`
    },
    {
      id: 'ALG3-10', topic: 'ALG3', type: 'mc', diff: 2,
      stem: R`What is the solution set of $\dfrac{2x-1}{3}-\dfrac{x+2}{4}\ge1$?`,
      choices: [R`$x\ge\dfrac{22}{5}$`, R`$x\ge\dfrac{11}{5}$`, R`$x\ge\dfrac{14}{5}$`, R`$x\le\dfrac{22}{5}$`],
      answer: 0,
      explain: R`Multiply both sides by 12 (a positive number, so the inequality direction is unchanged): $4(2x-1)-3(x+2)\ge12$. Distribute: $8x-4-3x-6\ge12$, so $5x-10\ge12$, $5x\ge22$, and $x\ge\tfrac{22}{5}$.
        <br><i>Common errors:</i> B forgets to multiply the right side by 12. C fails to distribute the $-3$ across $x+2$ (it multiplies only the $x$). D reverses the inequality even though the multiplier was positive.`
    },

    /* ================= ALG4: Systems ================= */
    {
      id: 'ALG4-01', topic: 'ALG4', type: 'mc', diff: 1,
      stem: R`The graph shows both equations of a system of two linear equations. What is the solution of the system?`,
      figure: {
        type: 'plot', alt: 'Two lines on a coordinate grid: one rising through (0,-1) and (2,3); the other falling through (0,5) and (5,0). They cross at the point (2,3).',
        fns: [{ f: '2*x - 1', color: 'a' }, { f: '5 - x', color: 'b' }], xr: [-2, 6], yr: [-3, 7], xstep: 1, ystep: 1
      },
      choices: [R`$(2,3)$`, R`$(3,2)$`, R`$(0,-1)$`, R`$(0,5)$`],
      answer: 0,
      explain: R`The solution of a system is the point on both graphs, which is where the lines cross: $(2,3)$. Reading the coordinates in the wrong order gives $(3,2)$, and $(0,-1)$ and $(0,5)$ are the $y$-intercepts of the two lines, each on only one graph.`
    },
    {
      id: 'ALG4-02', topic: 'ALG4', type: 'num', diff: 1,
      stem: R`The system $3x+2y=10$ and $5x-4y=24$ has exactly one solution $(x,y)$. What is the value of $x+y$?`,
      answer: 3, tol: 0,
      explain: R`Multiply the first equation by 2: $6x+4y=20$. Adding it to $5x-4y=24$ eliminates $y$: $11x=44$, so $x=4$. Then $3(4)+2y=10$ gives $y=-1$. Therefore $x+y=4+(-1)=3$. (Check in the second equation: $20+4=24$.)`
    },
    {
      id: 'ALG4-03', topic: 'ALG4', type: 'multi', diff: 2,
      stem: R`Consider the system $y=x^2-4x+3$ and $y=x-1$. Which of the following points are solutions of the system? Select all that apply.`,
      choices: [R`$(1,0)$`, R`$(4,3)$`, R`$(3,0)$`, R`$(0,-1)$`, R`$(0,3)$`],
      answer: [0, 1],
      explain: R`Set the expressions equal: $x^2-4x+3=x-1$, so $x^2-5x+4=0$, $(x-1)(x-4)=0$, and $x=1$ or $x=4$. Using $y=x-1$ gives the points $(1,0)$ and $(4,3)$. The other points each lie on only one of the graphs: $(3,0)$ and $(0,3)$ are on the parabola (its $x$-intercept and $y$-intercept), and $(0,-1)$ is on the line.`
    },
    {
      id: 'ALG4-04', topic: 'ALG4', type: 'mc', diff: 2, task: [14],
      stem: R`A student graphs $y=x^2-2x+4$ and $y=2x-5$ on a graphing calculator using the window $-10\le x\le10$, $-10\le y\le10$ and sees no intersection. The student says, "Maybe they cross somewhere outside the window." Which response is best?`,
      choices: [R`Setting the expressions equal gives $x^2-4x+9=0$, whose discriminant is $-20$. There are no real solutions, so the graphs never intersect, whatever the window.`, R`Setting the expressions equal gives $x^2-4x+9=0$, whose discriminant is $20$. The graphs intersect twice, outside the window.`, R`A line and a parabola always intersect, so the student should keep zooming out until the graphs cross.`, R`Try the window $-1000\le x\le1000$, $-1000\le y\le1000$. If the graphs still do not appear to cross, that proves they never intersect.`],
      answer: 0,
      explain: R`Technology shows only a window; algebra can settle the question for all $x$. Setting $x^2-2x+4=2x-5$ gives $x^2-4x+9=0$, with discriminant $(-4)^2-4(1)(9)=-20<0$. There are no real solutions, so the graphs have no intersection anywhere. B miscalculates the sign of the discriminant, C is false (lines and parabolas can miss each other), and D treats a larger window as a proof, which it is not.`
    },
    {
      id: 'ALG4-05', topic: 'ALG4', type: 'num', diff: 3, calc: true,
      stem: R`The graphs of $f(x)=2^x$ and $g(x)=8-x$ are shown. To the nearest tenth, what is the solution of $f(x)=g(x)$?`,
      figure: {
        type: 'plot', alt: 'Graphs of an increasing exponential curve f(x)=2^x, passing through (0,1), (1,2), (2,4), (3,8), and a decreasing line g(x)=8-x through (0,8) and (8,0). They cross once near x=2.5, y=5.5.',
        fns: [{ f: '2^x', color: 'a' }, { f: '8 - x', color: 'b' }], xr: [-1, 6], yr: [-1, 10], xstep: 1, ystep: 1
      },
      answer: 2.5, tol: 0.05,
      explain: R`Solutions of $f(x)=g(x)$ are the $x$-coordinates of the intersection points. The equation $2^x=8-x$ cannot be solved by ordinary algebra, so use technology: graph both functions and use the intersect feature (or solve numerically), which gives $x\approx2.468$, or $2.5$ to the nearest tenth. Checking: $2^{2.47}\approx5.54$ and $8-2.47=5.53$. Note that the answer is the $x$-coordinate, not the $y$-coordinate (about 5.5).`
    },
    {
      id: 'ALG4-06', topic: 'ALG4', type: 'mc', diff: 2,
      stem: R`Which system of inequalities is represented by the shaded region? The dashed boundary passes through $(0,4)$ and $(4,0)$, and the solid boundary passes through $(0,-1)$ and $(2,0)$.`,
      figure: {
        type: 'svg', alt: 'Coordinate plane from -5 to 5. A dashed line through (0,4) and (4,0) and a solid line through (0,-1) and (2,0) cross near (3.3, 0.7). The shaded region lies below the dashed line and above the solid line, opening toward the upper left.',
        svg: ineqSvg([[-1, -1, 4], [-0.5, 1, 1]], [[-1, -1, 4, true], [-0.5, 1, 1, false]])
      },
      choices: [R`$y<-x+4$ and $y\ge\tfrac12x-1$`, R`$y>-x+4$ and $y\ge\tfrac12x-1$`, R`$y<-x+4$ and $y\le\tfrac12x-1$`, R`$y\le-x+4$ and $y>\tfrac12x-1$`],
      answer: 0,
      explain: R`The dashed line has slope $-1$ and $y$-intercept 4: $y=-x+4$. The solid line has slope $\tfrac12$ and $y$-intercept $-1$: $y=\tfrac12x-1$. Dashed means strict for the first inequality and solid means "or equal" for the second. A test point in the shaded region, such as $(-2,1)$, gives $1<6$ (below the first line) and $1\ge-2$ (above the second line). So the system is $y<-x+4$ and $y\ge\tfrac12x-1$. B and C shade a different side of one line, and D swaps which line is dashed.`
    },
    {
      id: 'ALG4-07', topic: 'ALG4', type: 'mc', diff: 3, task: [19],
      stem: R`A student, Pia, solved the system $y=3x-2$ and $6x-2y=4$ as shown.
        <div class="work">Substitute: $6x-2(3x-2)=4$<br>$6x-6x+4=4$<br>$4=4$<br>"The $x$-terms cancelled, so the system has no solution."</div>
        Pia will use the rule "if the variable terms cancel, there is no solution" on other systems. For which of the following systems would that rule lead her to an <b>incorrect</b> conclusion?`,
      choices: [R`$y=2x+1$ and $4x-2y=-2$`, R`$y=2x+1$ and $4x-2y=6$`, R`$y=2x+1$ and $4x+2y=6$`, R`$y=2x+1$ and $3x-y=4$`],
      answer: 0,
      explain: R`Substituting $y=2x+1$ into $4x-2y=-2$ gives $4x-4x-2=-2$, i.e. $-2=-2$, which is always true: the equations describe the same line, so there are infinitely many solutions, and the rule "no solution" would be wrong (as it was for Pia's own system, where $4=4$). In B the variables cancel and leave the false statement $-2=6$ (parallel lines), so "no solution" is correct. In C and D the variable terms do not cancel and the systems have single solutions ($x=\tfrac12$ and $x=5$), so the rule is never triggered. The distinction is whether the leftover statement is true or false.`
    },

    /* ================= ALG5: Average rate of change ================= */
    {
      id: 'ALG5-01', topic: 'ALG5', type: 'num', diff: 1,
      stem: R`The table shows the distance $d$, in meters, that a delivery drone has flown $t$ seconds after takeoff.
        <table class="q-table"><tr><th>$t$ (seconds)</th><td>0</td><td>2</td><td>5</td><td>9</td></tr><tr><th>$d$ (meters)</th><td>4</td><td>10</td><td>25</td><td>41</td></tr></table>
        What is the average rate of change of $d$ from $t=2$ to $t=5$?`,
      answer: 5, tol: 0, unit: 'meters per second',
      explain: R`Average rate of change $=\dfrac{d(5)-d(2)}{5-2}=\dfrac{25-10}{3}=5$ meters per second. Using the wrong pair of columns (for example, from $t=0$ to $t=5$ gives $\tfrac{21}{5}$) or dividing by the number of table entries instead of the change in time are the usual slips.`
    },
    {
      id: 'ALG5-02', topic: 'ALG5', type: 'mc', diff: 1,
      stem: R`What is the average rate of change of $f(x)=x^2-3x$ from $x=1$ to $x=4$?`,
      choices: [R`$\dfrac23$`, R`$\dfrac65$`, R`$2$`, R`$6$`],
      answer: 2, order: 'fixed',
      explain: R`$f(4)=16-12=4$ and $f(1)=1-3=-2$. The average rate of change is $\dfrac{f(4)-f(1)}{4-1}=\dfrac{4-(-2)}{3}=2$.
        <br><i>Common errors:</i> $\tfrac23$ adds the function values instead of subtracting; $\tfrac65$ divides by $4+1$ instead of $4-1$; $6$ is the change in $f$ without dividing by the change in $x$.`
    },
    {
      id: 'ALG5-03', topic: 'ALG5', type: 'mc', diff: 2,
      stem: R`The graph of a function $f$ is shown, with two points marked. What is the average rate of change of $f$ from $x=2$ to $x=6$?`,
      figure: {
        type: 'plot', alt: 'Graph of an increasing curve that bends upward, starting near (0,1). Two points are marked: (2,2) and (6,8).',
        fns: [{ f: '2^(x/2)', color: 'b' }],
        points: [{ x: 2, y: 2, label: '(2, 2)', dx: 8, dy: 16 }, { x: 6, y: 8, label: '(6, 8)', dx: -62, dy: -6 }],
        xr: [0, 8], yr: [0, 10], xstep: 1, ystep: 1
      },
      choices: [R`$1$`, R`$1.5$`, R`$2$`, R`$6$`],
      answer: 1, order: 'fixed',
      explain: R`The average rate of change is the slope of the line through the two marked points: $\dfrac{8-2}{6-2}=\dfrac64=1.5$.
        <br><i>Common errors:</i> 6 is the change in $y$ alone; 2 comes from $\tfrac{8}{4}$ (forgetting to subtract $f(2)$); 1 comes from using $\tfrac{8-2}{6}$ (dividing by the second $x$-value rather than the change in $x$).`
    },
    {
      id: 'ALG5-04', topic: 'ALG5', type: 'mc', diff: 2, task: [17],
      stem: R`A teacher gives the data $f(0)=0$, $f(2)=10$, $f(6)=14$. A student, Ravi, finds the average rate of change over $[0,2]$ and over $[2,6]$ and then averages the two results to get the average rate of change over $[0,6]$. Which is the best evaluation of Ravi's method?`,
      choices: [R`It is not valid here: his method gives 3, but the average rate of change over $[0,6]$ is $\tfrac{7}{3}$. The two rates must be weighted by the lengths of the intervals, 2 and 4.`, R`It is valid: the mean of 5 and 1 is 3, which is the average rate of change over $[0,6]$.`, R`It is not valid: the average rate of change over $[0,6]$ is the sum of the two rates, $5+1=6$.`, R`It is not valid: the average rate of change over $[0,6]$ is the same as over $[2,6]$, which is 1, since $[2,6]$ is the most recent interval.`],
      answer: 0,
      explain: R`Over $[0,2]$ the rate is $\tfrac{10-0}{2}=5$; over $[2,6]$ it is $\tfrac{14-10}{4}=1$; over $[0,6]$ it is $\tfrac{14-0}{6}=\tfrac73$. Ravi's mean of the two rates is $3\ne\tfrac73$. Because the intervals have different lengths, the correct combination is a weighted mean: $\dfrac{2\cdot5+4\cdot1}{6}=\dfrac{14}{6}=\tfrac73$. (Averaging the rates works when the intervals have equal length or the two rates are equal.) B endorses the flawed method, C adds rates, and D ignores the first interval.`
    },
    {
      id: 'ALG5-05', topic: 'ALG5', type: 'num', diff: 2, calc: true,
      stem: R`The number of bacteria, in thousands, in a culture is modeled by $B(t)=200(1.05)^t$, where $t$ is the number of hours since the culture was started. To the nearest tenth, what is the average rate of change of $B$ from $t=0$ to $t=10$?`,
      answer: 12.6, tol: 0.05, unit: 'thousand bacteria per hour',
      explain: R`$B(10)=200(1.05)^{10}\approx325.78$ and $B(0)=200$. The average rate of change is $\dfrac{325.78-200}{10-0}\approx12.58$, which is $12.6$ thousand bacteria per hour to the nearest tenth. (The instantaneous rate is different at each time; the average rate is the slope of the secant line.)`
    },
    {
      id: 'ALG5-06', topic: 'ALG5', type: 'mc', diff: 3,
      stem: R`For $f(x)=3x^2-x$ and $h\ne0$, which expression equals the average rate of change of $f$ from $x=2$ to $x=2+h$?`,
      choices: [R`$11+3h$`, R`$11h+3h^2$`, R`$13+3h$`, R`$3h-1$`],
      answer: 0,
      explain: R`$f(2)=12-2=10$ and $f(2+h)=3(4+4h+h^2)-(2+h)=10+11h+3h^2$. So $\dfrac{f(2+h)-f(2)}{h}=\dfrac{11h+3h^2}{h}=11+3h$.
        <br><i>Common errors:</i> B forgets to divide by $h$. C mishandles the minus sign on $-(2+h)$. D squares $2+h$ as $4+h^2$.`
    },
    {
      id: 'ALG5-07', topic: 'ALG5', type: 'multi', diff: 2, task: [1],
      stem: R`At a weather station, the average rate of change of the temperature from 2 p.m. to 6 p.m. was $-3^\circ\text{F}$ per hour. A teacher wants students to interpret this number. Which statements are valid interpretations? Select all that apply.`,
      choices: [R`On average, the temperature dropped $3^\circ\text{F}$ per hour between 2 p.m. and 6 p.m.`, R`The temperature dropped exactly $3^\circ\text{F}$ during every hour between 2 p.m. and 6 p.m.`, R`The temperature at 6 p.m. was $12^\circ\text{F}$ lower than at 2 p.m.`, R`The temperature at 6 p.m. was $-3^\circ\text{F}$.`, R`If the temperature had changed at a constant rate from its 2 p.m. value to its 6 p.m. value, it would have dropped $3^\circ\text{F}$ each hour.`],
      answer: [0, 2, 4],
      explain: R`An average rate of change is the total change divided by the elapsed time: $\dfrac{\Delta T}{4\text{ h}}=-3$, so $\Delta T=-12^\circ\text{F}$ over the four hours. Statements 1, 3, and 5 say this correctly (statement 5 is the "constant-rate equivalent" reading, the slope of the secant line). Statement 2 wrongly treats an average as if it held in every hour, and statement 4 confuses the rate with a temperature value.`
    },

    /* ================= ALG6: Linear equations in various forms ================= */
    {
      id: 'ALG6-01', topic: 'ALG6', type: 'mc', diff: 1,
      stem: R`What are the slope and the $y$-intercept of the line $3x-4y=12$?`,
      choices: [R`slope $\tfrac34$, $y$-intercept $-3$`, R`slope $3$, $y$-intercept $-4$`, R`slope $-\tfrac34$, $y$-intercept $3$`, R`slope $\tfrac34$, $y$-intercept $12$`],
      answer: 0,
      explain: R`Solve for $y$: $-4y=-3x+12$, so $y=\tfrac34x-3$. The slope is $\tfrac34$ and the $y$-intercept is $-3$. (Check: setting $x=0$ in the original gives $-4y=12$, so $y=-3$.)
        <br><i>Common errors:</i> B reads the coefficients of $x$ and $y$ as slope and intercept; C loses the signs when dividing by $-4$; D divides the $x$-term by $-4$ but not the constant.`
    },
    {
      id: 'ALG6-02', topic: 'ALG6', type: 'num', diff: 2,
      stem: R`The table shows four points on a line.
        <table class="q-table"><tr><th>$x$</th><td>1</td><td>4</td><td>6</td><td>10</td></tr><tr><th>$y$</th><td>5</td><td>17</td><td>25</td><td>41</td></tr></table>
        What is the $y$-coordinate of the $y$-intercept of the line?`,
      answer: 1, tol: 0,
      explain: R`The slope is $\dfrac{17-5}{4-1}=4$ (and $\dfrac{25-17}{6-4}=4$, $\dfrac{41-25}{10-6}=4$, confirming the points are collinear). Using $y-5=4(x-1)$ gives $y=4x+1$, so the $y$-intercept is 1. The tempting wrong answer is to read the intercept off the first row (5) without stepping back to $x=0$.`
    },
    {
      id: 'ALG6-03', topic: 'ALG6', type: 'mc', diff: 2,
      stem: R`A tank contains 500 gallons of water and is drained at a constant rate of 12 gallons per minute. The equation $g=500-12t$ gives the number of gallons $g$ in the tank $t$ minutes after draining begins. What does the $t$-intercept of the graph represent?`,
      choices: [R`The tank will be empty after about 41.7 minutes.`, R`The tank holds about 41.7 gallons at the start.`, R`The tank starts with 500 gallons.`, R`The water drains at 12 gallons per minute.`],
      answer: 0,
      explain: R`The $t$-intercept is where $g=0$: $500-12t=0$, so $t=\tfrac{500}{12}\approx41.7$. At that time the tank is empty. Choice C describes the $g$-intercept $(0,500)$, and D describes the slope $-12$. Choice B swaps the coordinates.`
    },
    {
      id: 'ALG6-04', topic: 'ALG6', type: 'mc', diff: 2,
      stem: R`The graph shows the cost $C$, in dollars, of renting a paddleboard for $h$ hours. The line passes through the two labeled points. Which equation represents the line?`,
      figure: {
        type: 'plot', alt: 'Line rising from the vertical axis near (0,4) through the labeled points (1,7) and (5,19). Horizontal axis: hours from 0 to 6. Vertical axis: cost in dollars from 0 to 22.',
        fns: [{ f: '3*x + 4', color: 'b' }],
        points: [{ x: 1, y: 7, label: '(1, 7)', dx: 8, dy: 16 }, { x: 5, y: 19, label: '(5, 19)', dx: -58, dy: -4 }],
        xr: [0, 6], yr: [0, 22], xstep: 1, ystep: 2, xlabel: 'Hours (h)', ylabel: 'Cost in dollars (C)'
      },
      choices: [R`$C-7=3(h-1)$`, R`$C=3h+7$`, R`$C=4h+3$`, R`$C-19=3(h+5)$`],
      answer: 0,
      explain: R`The slope is $\dfrac{19-7}{5-1}=3$. Point-slope form through $(1,7)$ is $C-7=3(h-1)$, which simplifies to $C=3h+4$ (the vertical intercept 4 matches the graph).
        <br><i>Common errors:</i> B treats the point $(1,7)$ as if it were the vertical intercept. C swaps the slope and the intercept. D uses the wrong sign for $h$ in the point-slope form.`
    },
    {
      id: 'ALG6-05', topic: 'ALG6', type: 'mc', diff: 2, task: [17],
      stem: R`A student, Marisol, was asked to write an equation of the line through $(2,5)$ and $(6,-3)$. Her work is shown.
        <div class="work">$m=\dfrac{-3-5}{6-2}=-2$<br>$y-5=-2(x-2)$<br>$y-5=-2x-4$<br>$y=-2x+1$</div>
        Which statement about her work is correct?`,
      choices: [R`Her slope is wrong; it should be $2$.`, R`Her error is in the third line: $-2(x-2)=-2x+4$, so the equation should be $y=-2x+9$.`, R`Point-slope form must use the second point, $(6,-3)$, so her equation is invalid.`, R`Her work is correct, since the line passes through $(2,5)$.`],
      answer: 1,
      explain: R`The slope $\dfrac{-3-5}{6-2}=-2$ is correct, and the point-slope equation $y-5=-2(x-2)$ is correct (either point may be used). Distributing, $-2(x-2)=-2x+4$, not $-2x-4$, so $y=-2x+9$. Her final equation fails to pass through $(2,5)$: $-2(2)+1=-3\ne5$, while $-2(2)+9=5$ and $-2(6)+9=-3$.`
    },
    {
      id: 'ALG6-06', topic: 'ALG6', type: 'multi', diff: 2, task: [20],
      stem: R`Ms. Lee asked her class to write an equation of the line through $(4,2)$ with slope $\tfrac32$. Which students wrote an equation of the correct line? Select all that apply.
        <div class="work"><b>Ava:</b> $y-2=1.5(x-4)$</div>
        <div class="work"><b>Bo:</b> $y=1.5x-4$</div>
        <div class="work"><b>Cal:</b> $3x-2y=8$</div>
        <div class="work"><b>Dee:</b> $y-4=1.5(x-2)$</div>
        <div class="work"><b>Eli:</b> $y=1.5x+2$</div>`,
      choices: [R`Ava`, R`Bo`, R`Cal`, R`Dee`, R`Eli`],
      answer: [0, 1, 2], order: 'fixed',
      explain: R`Ava's point-slope equation uses the given point and slope. Expanding, $y=1.5x-6+2=1.5x-4$, which is Bo's equation. Multiplying by 2 and rearranging, $2y=3x-8$, so $3x-2y=8$, Cal's equation (a standard form of the same line). Dee swapped the coordinates of the point (that line passes through $(2,4)$, not $(4,2)$). Eli used the $y$-coordinate 2 of the point as the $y$-intercept ($1.5(4)+2=8\ne2$).`
    },
    {
      id: 'ALG6-07', topic: 'ALG6', type: 'num', diff: 3,
      stem: R`The graph of the line $Ax+By=60$ has $x$-intercept $12$ and passes through the point $(4,10)$. What is the value of $B$?`,
      answer: 4, tol: 0,
      explain: R`The $x$-intercept $(12,0)$ is on the line: $12A=60$, so $A=5$. The point $(4,10)$ is also on the line: $5(4)+10B=60$, so $10B=40$ and $B=4$. (The line $5x+4y=60$ has slope $-\tfrac54$ and passes through both given points.)`
    },

    /* ================= ALG7: Zeros of polynomials ================= */
    {
      id: 'ALG7-01', topic: 'ALG7', type: 'num', diff: 1,
      stem: R`What is the remainder when $f(x)=x^3-4x^2+2x+7$ is divided by $x-3$?`,
      answer: 4, tol: 0,
      explain: R`By the Remainder Theorem, the remainder is $f(3)=27-36+6+7=4$. (Synthetic division with 3 gives the bottom row $1,-1,-1,4$, with the same remainder.)`
    },
    {
      id: 'ALG7-02', topic: 'ALG7', type: 'mc', diff: 2,
      stem: R`For what value of $k$ is $x+2$ a factor of $p(x)=x^3+kx^2-5x+6$?`,
      choices: [R`$-8$`, R`$-2$`, R`$-1$`, R`$2$`],
      answer: 1, order: 'fixed',
      explain: R`By the Factor Theorem, $x+2$ is a factor exactly when $p(-2)=0$. Compute $p(-2)=-8+4k+10+6=4k+8$. Setting $4k+8=0$ gives $k=-2$.
        <br><i>Common errors:</i> $-8$ forgets to divide by 4. $-1$ comes from evaluating $p(2)=4k+4$ (using $x-2$ instead of $x+2$). $2$ is a sign error in solving $4k+8=0$.`
    },
    {
      id: 'ALG7-03', topic: 'ALG7', type: 'mc', diff: 2, task: [15],
      stem: R`A student, Kai, sketches the graph of $p(x)=x^2(x-3)^3(x^2+9)$ and says, "It crosses the $x$-axis at 0 and touches it at 3, because the bigger exponent makes the bigger bounce." Which description of the graph near its $x$-intercepts is correct?`,
      choices: [R`It touches the $x$-axis at $x=0$ and crosses it at $x=3$.`, R`It crosses the $x$-axis at $x=0$ and touches it at $x=3$.`, R`It touches the $x$-axis at both $x=0$ and $x=3$, because both zeros are repeated.`, R`It crosses the $x$-axis at $x=0$, $x=3$, $x=3i$, and $x=-3i$.`],
      answer: 0,
      explain: R`A zero of even multiplicity (here $x=0$ has multiplicity 2) makes the graph touch the axis and turn around; a zero of odd multiplicity ($x=3$ has multiplicity 3) makes the graph cross the axis (flattening as it crosses). The factor $x^2+9$ has only the complex zeros $\pm3i$, which do not appear as $x$-intercepts. Kai has the parity reversed, treating the size of the exponent rather than whether it is even or odd as the deciding factor.`
    },
    {
      id: 'ALG7-04', topic: 'ALG7', type: 'mc', diff: 2,
      stem: R`Which could be an equation of the polynomial function whose graph is shown?`,
      figure: {
        type: 'plot', alt: 'Graph of a polynomial that comes down from the upper left, touches the x-axis at x=-2 and turns back up, comes down again to cross the x-axis at x=1, dips below the axis to a minimum of about -17 near x=2, crosses the x-axis at x=3, and rises steeply to the right; it crosses the y-axis at 12.',
        fns: [{ f: '(x+2)^2*(x-1)*(x-3)', color: 'b' }], xr: [-3.5, 3.5], yr: [-20, 40], xstep: 1, ystep: 10
      },
      choices: [R`$y=(x+2)^2(x-1)(x-3)$`, R`$y=(x+2)(x-1)^2(x-3)$`, R`$y=-(x+2)^2(x-1)(x-3)$`, R`$y=(x-2)^2(x+1)(x+3)$`],
      answer: 0,
      explain: R`The graph touches the axis at $x=-2$ (an even-multiplicity zero, so the factor $(x+2)^2$) and crosses at $x=1$ and $x=3$ (odd multiplicity, so $(x-1)$ and $(x-3)$). Both ends rise, so the degree is even and the leading coefficient is positive. Choice B puts the double root at 1, choice C has a negative leading coefficient (ends would point down), and choice D has the zeros at $2,-1,-3$ (signs reversed).`
    },
    {
      id: 'ALG7-05', topic: 'ALG7', type: 'mc', diff: 2,
      stem: R`According to the Rational Root Theorem, which of the following is <b>not</b> a possible rational zero of $2x^3+x^2-13x+6$?`,
      choices: [R`$\dfrac34$`, R`$\dfrac32$`, R`$-6$`, R`$\dfrac12$`],
      answer: 0,
      explain: R`Any rational zero $\tfrac pq$ in lowest terms has $p$ dividing the constant term 6 and $q$ dividing the leading coefficient 2. So $p\in\{\pm1,\pm2,\pm3,\pm6\}$ and $q\in\{1,2\}$. The candidates $\tfrac32$, $-6$, and $\tfrac12$ all fit this pattern, but $\tfrac34$ has denominator 4, which does not divide 2. (In fact the zeros are $2$, $\tfrac12$, and $-3$.)`
    },
    {
      id: 'ALG7-06', topic: 'ALG7', type: 'multi', diff: 3,
      stem: R`Which of the following are zeros of $p(x)=2x^3-3x^2+8x-12$? Select all that apply.`,
      choices: [R`$\dfrac32$`, R`$2i$`, R`$-2i$`, R`$-\dfrac32$`, R`$2$`],
      answer: [0, 1, 2],
      explain: R`Factor by grouping: $p(x)=x^2(2x-3)+4(2x-3)=(2x-3)(x^2+4)$. Then $2x-3=0$ gives $x=\tfrac32$, and $x^2+4=0$ gives $x=\pm2i$. (The Rational Root Theorem suggests $\tfrac32$ as a candidate, and complex zeros of a real polynomial come in conjugate pairs.) Checking the others: $p(-\tfrac32)=-24-\tfrac{27}{4}-\tfrac{27}{4}\ne0$, and $p(2)=16-12+16-12=8\ne0$.`
    },
    {
      id: 'ALG7-07', topic: 'ALG7', type: 'mc', diff: 3, task: [11],
      stem: R`A student, Jonah, needs the remainder when $f(x)=2x^3-5x^2+4x+9$ is divided by $2x-3$. He says, "The Remainder Theorem says to plug in the number that makes the divisor zero, but I'll just plug in 3 from $2x-3$, so the remainder is $f(3)=30$." Which response is correct?`,
      choices: [R`The remainder is $f\!\left(\tfrac32\right)=\tfrac{21}{2}$, because $2x-3=0$ when $x=\tfrac32$.`, R`Jonah is correct: the remainder is $f(3)=30$.`, R`The remainder is $f\!\left(-\tfrac32\right)=-15$.`, R`The Remainder Theorem does not apply, since the divisor is not of the form $x-c$; only long division can find the remainder.`],
      answer: 0,
      explain: R`The value to substitute is the zero of the divisor: $2x-3=0$ gives $x=\tfrac32$. Writing $2x-3=2\left(x-\tfrac32\right)$ shows that $f(x)=(2x-3)q(x)+r$ with $r$ a constant, and evaluating at $x=\tfrac32$ gives $r=f\!\left(\tfrac32\right)=\tfrac{27}{4}-\tfrac{45}{4}+6+9=\tfrac{21}{2}$. Jonah's shortcut works only when the coefficient of $x$ in the divisor is 1. Choice C uses the wrong sign. The theorem does apply (choice D), with a small adjustment, and long division confirms the remainder $\tfrac{21}{2}$.`
    },

    /* ================= ALG8: Rational expressions ================= */
    {
      id: 'ALG8-01', topic: 'ALG8', type: 'mc', diff: 1,
      stem: R`Which expression is equivalent to $\dfrac{x^2-9}{x^2+5x+6}$ for all $x$ for which both are defined?`,
      choices: [R`$\dfrac{x-3}{x+2}$`, R`$\dfrac{-9}{5x+6}$`, R`$\dfrac{x+3}{x+2}$`, R`$\dfrac{x-3}{x+3}$`],
      answer: 0,
      explain: R`Factor: $\dfrac{(x-3)(x+3)}{(x+2)(x+3)}$. Cancel the common factor $x+3$ (valid for $x\ne-3$) to get $\dfrac{x-3}{x+2}$.
        <br><i>Common errors:</i> B cancels $x^2$ terms, which are terms, not factors. C and D mis-factor $x^2-9$ or $x^2+5x+6$.`
    },
    {
      id: 'ALG8-02', topic: 'ALG8', type: 'mc', diff: 2,
      stem: R`Which expression is equivalent to $\dfrac{3}{x-2}+\dfrac{5}{x+4}$?`,
      choices: [R`$\dfrac{8x+2}{(x-2)(x+4)}$`, R`$\dfrac{8}{2x+2}$`, R`$\dfrac{8x+22}{(x-2)(x+4)}$`, R`$\dfrac{8}{(x-2)(x+4)}$`],
      answer: 0,
      explain: R`Use the common denominator $(x-2)(x+4)$: $\dfrac{3(x+4)+5(x-2)}{(x-2)(x+4)}=\dfrac{3x+12+5x-10}{(x-2)(x+4)}=\dfrac{8x+2}{(x-2)(x+4)}$.
        <br><i>Common errors:</i> B adds numerators and denominators separately. C makes a sign slip on the second numerator (using $x+2$). D adds numerators without rescaling them to the common denominator.`
    },
    {
      id: 'ALG8-03', topic: 'ALG8', type: 'mc', diff: 2,
      stem: R`Simplify $\dfrac{x^2-4}{x+3}\div\dfrac{x+2}{x^2-9}$, where all expressions are defined.`,
      choices: [R`$(x-2)(x-3)$`, R`$\dfrac{1}{(x-2)(x-3)}$`, R`$\dfrac{(x-2)(x+2)^2}{(x+3)^2(x-3)}$`, R`$\dfrac{(x-2)(x-3)}{x+2}$`],
      answer: 0,
      explain: R`Dividing means multiplying by the reciprocal: $\dfrac{(x-2)(x+2)}{x+3}\cdot\dfrac{(x-3)(x+3)}{x+2}$. Cancel $x+3$ and $x+2$ to get $(x-2)(x-3)$.
        <br><i>Common errors:</i> B inverts the wrong fraction. C multiplies straight across without inverting. D forgets that the factor $x+2$ appears in both the numerator and the denominator and cancels.`
    },
    {
      id: 'ALG8-04', topic: 'ALG8', type: 'multi', diff: 2, task: [11],
      stem: R`Students in an algebra class propose the simplifications below. Which of them are equal to the original expression for every value of $x$ at which the original (left-hand) expression is defined? Select all that apply.`,
      choices: [R`$\dfrac{6x+12}{x+2}=6$`, R`$\dfrac{x+5}{5}=x+1$`, R`$\dfrac{x^2-4}{x-2}=x+2$`, R`$\dfrac{x^2+4}{x+2}=x+2$`, R`$\dfrac{3x^2-6x}{3x}=x-2$`],
      answer: [0, 2, 4],
      explain: R`Cancellation is valid only for common <i>factors</i>. $6x+12=6(x+2)$, so the first equals 6 for $x\ne-2$. $x^2-4=(x-2)(x+2)$, so the third equals $x+2$ for $x\ne2$. $3x^2-6x=3x(x-2)$, so the fifth equals $x-2$ for $x\ne0$. In the second, the 5 is a term, not a factor: $\tfrac{x+5}{5}=\tfrac x5+1$. In the fourth, $x^2+4$ does not factor over the reals and has no factor $x+2$ (at $x=1$: $\tfrac53\ne3$).`
    },
    {
      id: 'ALG8-05', topic: 'ALG8', type: 'num', diff: 2,
      stem: R`For $x\ne-2$, the expression $\dfrac{3x+7}{x+2}$ can be written in the form $a+\dfrac{b}{x+2}$, where $a$ and $b$ are constants. What is the value of $a+b$?`,
      answer: 4, tol: 0,
      explain: R`Divide: $3x+7=3(x+2)+1$, so $\dfrac{3x+7}{x+2}=3+\dfrac{1}{x+2}$. Then $a=3$, $b=1$, and $a+b=4$. (Check with $x=0$: $\tfrac72=3+\tfrac12$.)`
    },
    {
      id: 'ALG8-06', topic: 'ALG8', type: 'mc', diff: 3,
      stem: R`For $x\ne0$, $h\ne0$, and $x+h\ne0$, which expression is equivalent to $\dfrac{\dfrac{1}{x+h}-\dfrac1x}{h}$?`,
      choices: [R`$-\dfrac{1}{x(x+h)}$`, R`$\dfrac{1}{x(x+h)}$`, R`$-\dfrac{h}{x(x+h)}$`, R`$-\dfrac{1}{x^2}$`],
      answer: 0,
      explain: R`Combine the fractions in the numerator: $\dfrac1{x+h}-\dfrac1x=\dfrac{x-(x+h)}{x(x+h)}=\dfrac{-h}{x(x+h)}$. Dividing by $h$ gives $-\dfrac{1}{x(x+h)}$.
        <br><i>Common errors:</i> B loses the sign (subtracting in the wrong order); C forgets to divide by $h$; D sets $h=0$, which is not allowed (and is not equivalent for $h\ne0$).`
    },
    {
      id: 'ALG8-07', topic: 'ALG8', type: 'mc', diff: 2, task: [3],
      stem: R`A student, Dana, writes the following.
        <div class="work">$\dfrac{x^2-x-6}{x^2-9}=\dfrac{(x-3)(x+2)}{(x-3)(x+3)}=\dfrac{x+2}{x+3}$, for $x\ne-3$</div>
        Which change would make Dana's justification complete and accurate?`,
      choices: [R`State that the equality holds for $x\ne3$ and $x\ne-3$, because both values make the original denominator 0.`, R`Replace the restriction with $x\ne-2$, because $-2$ makes the numerator of the simplified expression 0.`, R`Remove the restriction, because after canceling the two expressions are identical for all $x$.`, R`State only $x\ne3$, because the factor $x-3$ was the one that was canceled.`],
      answer: 0,
      explain: R`The original expression is not defined wherever $x^2-9=0$, i.e. at $x=3$ and $x=-3$. After canceling $x-3$, the simplified expression $\tfrac{x+2}{x+3}$ is defined at $x=3$, but the original is not, so the equality is valid only for $x\ne3$ and $x\ne-3$. Dana listed only the restriction visible in the simplified form. Choice B excludes a value that is a perfectly good input (the value 0 in a numerator is fine), C ignores excluded values, and D drops $-3$.`
    },

    /* ================= ALG9: Rational and radical equations ================= */
    {
      id: 'ALG9-01', topic: 'ALG9', type: 'num', diff: 1,
      stem: R`Solve $\sqrt{2x+9}=5$. What is the value of $x$?`,
      answer: 8, tol: 0,
      explain: R`Square both sides: $2x+9=25$, so $2x=16$ and $x=8$. Check: $\sqrt{2(8)+9}=\sqrt{25}=5$. The solution is valid.`
    },
    {
      id: 'ALG9-02', topic: 'ALG9', type: 'mc', diff: 2,
      stem: R`What is the solution set of $\sqrt{x+6}=x$?`,
      choices: [R`$\{3\}$`, R`$\{-2,\,3\}$`, R`$\{-2\}$`, R`$\{2,\,-3\}$`],
      answer: 0,
      explain: R`Square both sides: $x+6=x^2$, so $x^2-x-6=0$ and $(x-3)(x+2)=0$, giving $x=3$ or $x=-2$. Check both in the original equation: $\sqrt{3+6}=3$ is true, but $\sqrt{-2+6}=2\ne-2$. So $x=-2$ is extraneous (squaring made $-2$ and $2$ look alike). The solution set is $\{3\}$.
        <br><i>Common errors:</i> B skips the check. C keeps only the extraneous root. D solves $x^2-x-6=0$ with reversed signs.`
    },
    {
      id: 'ALG9-03', topic: 'ALG9', type: 'mc', diff: 2, task: [2],
      stem: R`A student, Priya, solves $\dfrac{x}{x-3}=\dfrac{3}{x-3}+2$. She writes: "Multiply both sides by $x-3$: $x=3+2(x-3)$, so $x=2x-3$ and $x=3$. I did the same thing to both sides, so 3 must be a solution." Which is the best evaluation of her reasoning?`,
      choices: [R`Incorrect: multiplying by a variable expression can introduce extraneous solutions. The value 3 makes the denominators 0, so the original equation has no solution.`, R`Correct: doing the same operation to both sides always produces an equivalent equation.`, R`Incorrect: the original equation is true for all real $x$.`, R`Correct: 3 is a solution because it satisfies the equation $x=3+2(x-3)$.`],
      answer: 0,
      explain: R`Multiplying both sides by $x-3$ is not reversible when $x-3=0$: it turns the original equation into $x=3+2(x-3)$, which has the extra solution $x=3$. But $x=3$ makes the original denominators zero, so it is not in the domain. Since $x=3$ was the only candidate, the original equation has <b>no solution</b>. (Directly: $\dfrac{x-3}{x-3}=2$ would mean $1=2$ for $x\ne3$.) B and D both confuse "solves the new equation" with "solves the original equation." C is false.`
    },
    {
      id: 'ALG9-04', topic: 'ALG9', type: 'mc', diff: 2, task: [21],
      stem: R`A student solved $\sqrt{x+2}=x-4$ as shown and concluded, "Both answers work, because I squared correctly."
        <div class="work">$x+2=(x-4)^2$<br>$x+2=x^2-8x+16$<br>$0=x^2-9x+14=(x-2)(x-7)$<br>$x=2$ or $x=7$</div>
        Which statement is correct?`,
      choices: [R`Only $x=7$ is a solution; $x=2$ is extraneous because $\sqrt{4}=2$ but $2-4=-2$.`, R`Only $x=2$ is a solution; $x=7$ is extraneous.`, R`Both $x=2$ and $x=7$ are solutions, as the student said.`, R`Neither $x=2$ nor $x=7$ is a solution.`],
      answer: 0,
      explain: R`The algebra is correct, but squaring can introduce extraneous solutions, so each candidate must be checked in the original equation. For $x=7$: $\sqrt9=3$ and $7-4=3$ (true). For $x=2$: $\sqrt4=2$ but $2-4=-2$ (false, since a principal square root is never negative). So $x=7$ only. Correct squaring does not guarantee that every root of the squared equation solves the original.`
    },
    {
      id: 'ALG9-05', topic: 'ALG9', type: 'num', diff: 3,
      stem: R`Solve $\sqrt{2x+3}+\sqrt{x-2}=4$. What is the value of $x$?`,
      answer: 3, tol: 0,
      explain: R`Isolate one radical: $\sqrt{2x+3}=4-\sqrt{x-2}$. Square: $2x+3=16-8\sqrt{x-2}+x-2$, so $x-11=-8\sqrt{x-2}$. Square again: $x^2-22x+121=64x-128$, so $x^2-86x+249=0$, $(x-3)(x-83)=0$. Check: $x=3$ gives $\sqrt9+\sqrt1=4$ (true). $x=83$ gives $\sqrt{169}+\sqrt{81}=22\ne4$ (extraneous). The solution is $x=3$.`
    },
    {
      id: 'ALG9-06', topic: 'ALG9', type: 'mc', diff: 2,
      stem: R`What is the solution set of $\dfrac{x}{x-2}-\dfrac{3}{x+1}=\dfrac{6}{(x-2)(x+1)}$?`,
      choices: [R`$\{0\}$`, R`$\{0,\,2\}$`, R`$\{2\}$`, R`The equation has no solution.`],
      answer: 0,
      explain: R`Multiply both sides by $(x-2)(x+1)$: $x(x+1)-3(x-2)=6$, so $x^2-2x+6=6$, giving $x(x-2)=0$ and $x=0$ or $x=2$. The value $x=2$ makes $x-2=0$ in the denominators, so it is extraneous. Check $x=0$: $\dfrac{0}{-2}-\dfrac31=-3$ and $\dfrac{6}{(-2)(1)}=-3$. The solution set is $\{0\}$.
        <br>Choice B skips the domain check; choice C keeps only the extraneous value; choice D would result from discarding a valid solution.`
    },
    {
      id: 'ALG9-07', topic: 'ALG9', type: 'num', diff: 3,
      stem: R`A cyclist rides 30 miles to a lake at a constant speed of $s$ miles per hour and returns along the same route at $s+5$ miles per hour. The round trip takes 5 hours of riding. What was the cyclist's speed, in miles per hour, on the way to the lake?`,
      answer: 10, tol: 0, unit: 'miles per hour',
      explain: R`Time to the lake is $\tfrac{30}{s}$ and time back is $\tfrac{30}{s+5}$, so $\dfrac{30}{s}+\dfrac{30}{s+5}=5$. Multiply by $s(s+5)$: $30(s+5)+30s=5s(s+5)$, so $60s+150=5s^2+25s$, or $s^2-7s-30=0$, giving $(s-10)(s+3)=0$. The solution $s=-3$ is not viable (a speed cannot be negative), so $s=10$. Check: $\tfrac{30}{10}+\tfrac{30}{15}=3+2=5$.`
    }
  );
})();
