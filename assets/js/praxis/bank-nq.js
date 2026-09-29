/* Number & Quantity (NQ1-NQ4) item bank. All strings are R`...` (String.raw). */
(function () {
  var R = String.raw;
  PXD.bank.push(

    /* ================= NQ1: The real number system and its operations ================= */
    {
      id: 'NQ1-01', topic: 'NQ1', type: 'num', diff: 1,
      stem: R`A school club raised \$1,240 selling calendars. It spent \$320 on printing and then divided the remaining money equally among 4 service projects. How many dollars did each project receive?`,
      answer: 230, tol: 0, unit: 'dollars',
      explain: R`The money left after printing is $1240 - 320 = 920$ dollars. Dividing equally among 4 projects gives $920 \div 4 = 230$ dollars each. <br><i>Common error:</i> dividing the full \$1,240 by 4 (getting 310) before subtracting the printing cost.`
    },
    {
      id: 'NQ1-02', topic: 'NQ1', type: 'multi', diff: 2,
      stem: R`For real numbers $a$ and $b$, an operation $\diamond$ is defined by $a \diamond b = a + b + ab$. Which of the following are true for <b>all</b> real numbers $a$, $b$, and $c$? Select all that apply.`,
      choices: [R`$a \diamond b = b \diamond a$`, R`$(a \diamond b) \diamond c = a \diamond (b \diamond c)$`, R`$a \diamond (b + c) = (a \diamond b) + (a \diamond c)$`, R`$a \diamond 0 = 0$`],
      answer: [0, 1],
      explain: R`<b>Commutative:</b> $a + b + ab = b + a + ba$, so the first statement is true. <b>Associative:</b> $(a \diamond b) \diamond c = (a + b + ab) + c + (a + b + ab)c = a + b + c + ab + ac + bc + abc$, and expanding $a \diamond (b \diamond c)$ gives exactly the same symmetric expression, so the second statement is true.
        <br><b>Distributive:</b> false. With $a = b = c = 1$: $1 \diamond (1+1) = 1 \diamond 2 = 1 + 2 + 2 = 5$, but $(1 \diamond 1) + (1 \diamond 1) = 3 + 3 = 6$. <b>Zero:</b> false, because $a \diamond 0 = a + 0 + 0 = a$, so 0 is the <i>identity</i> for $\diamond$, not an absorbing element (choosing it confuses this operation with multiplication).`
    },
    {
      id: 'NQ1-03', topic: 'NQ1', type: 'mc', diff: 2,
      stem: R`An operation $\ast$ is defined on the set $\{p, q, r\}$ by the table below. (The entry in row $x$ and column $y$ is $x \ast y$.)
        <table class="q-table">
          <tr><th>$\ast$</th><th>$p$</th><th>$q$</th><th>$r$</th></tr>
          <tr><th>$p$</th><td>$q$</td><td>$r$</td><td>$p$</td></tr>
          <tr><th>$q$</th><td>$r$</td><td>$p$</td><td>$q$</td></tr>
          <tr><th>$r$</th><td>$p$</td><td>$q$</td><td>$r$</td></tr>
        </table>
        The operation has an identity element. With respect to $\ast$, what is the inverse of $q$?`,
      choices: [R`$p$`, R`$q$`, R`$r$`, R`$q$ has no inverse`],
      answer: 0,
      explain: R`The identity is the element $e$ for which $e \ast x = x$ and $x \ast e = x$ for every $x$. Row $r$ reads $p, q, r$ and column $r$ reads $p, q, r$, so $r$ is the identity. The inverse of $q$ is the element $x$ with $q \ast x = x \ast q = r$. From the table, $q \ast p = r$ and $p \ast q = r$, so the inverse of $q$ is $p$.
        <br><i>Common errors:</i> assuming the first row-element $p$ is the identity (then $q \ast q = p$ points to $q$ as its "inverse", choice B); naming the identity itself (choice C); and concluding no inverse exists.`
    },
    {
      id: 'NQ1-04', topic: 'NQ1', type: 'mc', diff: 3, task: [2],
      stem: R`A teacher gives students the table for an operation $\odot$ on the set $\{a, b, c\}$.
        <table class="q-table">
          <tr><th>$\odot$</th><th>$a$</th><th>$b$</th><th>$c$</th></tr>
          <tr><th>$a$</th><td>$a$</td><td>$b$</td><td>$c$</td></tr>
          <tr><th>$b$</th><td>$b$</td><td>$a$</td><td>$b$</td></tr>
          <tr><th>$c$</th><td>$c$</td><td>$b$</td><td>$a$</td></tr>
        </table>
        A student writes: <div class="work">"The table is symmetric about the main diagonal, so $\odot$ is commutative. I also checked that $(a \odot b) \odot c = a \odot (b \odot c)$, and it worked, so $\odot$ is associative."</div>
        Which statement best evaluates the student's reasoning?`,
      choices: [
        R`Both conclusions are justified.`,
        R`The symmetry justifies commutativity, but one triple that works does not justify associativity; in fact, associativity fails for some triple.`,
        R`Symmetry of the table does not show commutativity, but the associativity check is convincing.`,
        R`Neither conclusion is justified, because a table can never be used to establish a property of an operation.`
      ],
      answer: 1,
      explain: R`The entry in row $x$, column $y$ is $x \odot y$, and the entry in row $y$, column $x$ is $y \odot x$. A table that is symmetric about its main diagonal therefore has $x \odot y = y \odot x$ for every pair, and this table is symmetric (for example, $b \odot c = b = c \odot b$), so the first conclusion is valid. Associativity, however, must hold for <i>every</i> triple, and a single example proves nothing. The student's triple involves the identity $a$, where it always works. Try $b, b, c$: $(b \odot b) \odot c = a \odot c = c$, but $b \odot (b \odot c) = b \odot b = a$. Since $c \neq a$, $\odot$ is <b>not</b> associative.
        <br><i>Common errors:</i> choosing A (accepting one example as proof), C (thinking symmetry is not enough for commutativity), or D (a table shows every value of the operation, so it can be used to check a property completely).`
    },
    {
      id: 'NQ1-05', topic: 'NQ1', type: 'mc', diff: 2, task: [10],
      stem: R`A student claims, "The product of two irrational numbers is always irrational." Which pair of numbers is a counterexample to the student's claim?`,
      choices: [R`$\sqrt{2}$ and $\sqrt{18}$`, R`$\sqrt{5}$ and $\sqrt{7}$`, R`$\sqrt{4}$ and $\sqrt{9}$`, R`$\sqrt{6}$ and $\sqrt{10}$`],
      answer: 0,
      explain: R`A counterexample needs two <i>irrational</i> numbers whose product is <i>rational</i>. $\sqrt{2}\cdot\sqrt{18} = \sqrt{36} = 6$, and both $\sqrt2$ and $\sqrt{18} = 3\sqrt2$ are irrational. <br>Choice B gives $\sqrt{35}$, which is irrational (it supports the claim). Choice C uses $\sqrt4 = 2$ and $\sqrt9 = 3$, which are rational, so the pair does not meet the hypothesis. Choice D gives $\sqrt{60} = 2\sqrt{15}$, which is irrational.`
    },
    {
      id: 'NQ1-06', topic: 'NQ1', type: 'multi', diff: 3,
      stem: R`Let $q$ be a nonzero rational number and let $s$ be an irrational number. Which of the following <b>must</b> be irrational? Select all that apply.`,
      choices: [R`$q + s$`, R`$q \cdot s$`, R`$s \cdot s$`, R`$\dfrac{1}{s}$`, R`$s + \sqrt{2}$`],
      answer: [0, 1, 3],
      explain: R`If $q + s$ were rational, then $s = (q+s) - q$ would be rational, a contradiction; so $q + s$ is irrational. If $qs$ were a rational number $t$, then $s = t/q$ would be rational (this needs $q \neq 0$), a contradiction. If $1/s$ were rational, it would be nonzero, and $s = 1/(1/s)$ would be rational, a contradiction.
        <br>$s \cdot s$ need not be irrational: $\sqrt2\cdot\sqrt2 = 2$. Likewise $s + \sqrt2$ need not be irrational: with $s = -\sqrt2$ the sum is 0. (Testing $\sqrt2 \cdot \sqrt2$ and $\sqrt2 + (-\sqrt2)$ is the quickest way to rule out the last two.)`
    },
    {
      id: 'NQ1-07', topic: 'NQ1', type: 'num', diff: 2,
      stem: R`A florist has 84 roses and 126 tulips. She wants to make as many identical bouquets as possible, using every flower with none left over. How many bouquets can she make?`,
      answer: 42, tol: 0, unit: 'bouquets',
      explain: R`The number of bouquets must divide both 84 and 126, and we want the largest such number: $\gcd(84, 126)$. Since $84 = 2^2\cdot 3\cdot 7$ and $126 = 2\cdot 3^2\cdot 7$, the gcd is $2\cdot 3\cdot 7 = 42$. Each bouquet has 2 roses and 3 tulips. <br><i>Common error:</i> computing the lcm ($2^2\cdot3^2\cdot7 = 252$) instead of the gcd.`
    },
    {
      id: 'NQ1-08', topic: 'NQ1', type: 'mc', diff: 2,
      stem: R`How many positive integers divide 360 evenly?`,
      choices: ['24', '9', '18', '6'],
      answer: 0,
      explain: R`$360 = 2^3\cdot 3^2\cdot 5^1$. Each positive divisor has the form $2^a3^b5^c$ with $0 \le a \le 3$, $0 \le b \le 2$, $0 \le c \le 1$, giving $(3+1)(2+1)(1+1) = 24$ divisors.
        <br><i>Common errors:</i> multiplying the exponents themselves, $3\cdot2\cdot1 = 6$ (or adding them, $3+2+1 = 6$); adding 1 to only some of the exponents, e.g. $3\cdot 3\cdot 2 = 18$; and adding the three counts instead of multiplying them, $4+3+2 = 9$.`
    },
    {
      id: 'NQ1-09', topic: 'NQ1', type: 'mc', diff: 1,
      stem: R`Which of the following numbers is prime?`,
      choices: ['91', '97', '87', '51'],
      answer: 1,
      explain: R`$97$ is not divisible by 2, 3, 5, or 7, and since $11^2 = 121 > 97$ there is no need to test larger primes, so 97 is prime. The others are composite: $91 = 7\cdot 13$, $87 = 3 \cdot 29$, and $51 = 3\cdot 17$. Numbers such as 91 are the classic trap because they are not divisible by 2, 3, or 5.`
    },
    {
      id: 'NQ1-10', topic: 'NQ1', type: 'mc', diff: 2, task: [3],
      stem: R`A teacher asks students to justify that the sum of any two odd integers is even. Ravi writes:
        <div class="work">$3 + 5 = 8$, $7 + 9 = 16$, $11 + 15 = 26$. All of these sums are even, so the sum of two odd numbers is always even.</div>
        Which change would best improve Ravi's justification so that it applies to <b>all</b> pairs of odd integers?`,
      choices: [
        R`Test more pairs of odd numbers, such as $101 + 203$.`,
        R`Write the two odd integers as $2k+1$ and $2m+1$ for integers $k$ and $m$, and show the sum is $2(k+m+1)$.`,
        R`Write an odd integer as $2k+1$ and show that $(2k+1)+(2k+1) = 4k+2$ is even.`,
        R`Explain that odd numbers are not divisible by 2, so their sum is not divisible by 2 either.`
      ],
      answer: 1,
      explain: R`A general justification must represent <i>arbitrary</i> odd integers. Using two independent integers $k$ and $m$, $(2k+1)+(2m+1) = 2k + 2m + 2 = 2(k+m+1)$, which is twice an integer. <br>Choice A adds more examples, which can never prove a universal statement. Choice C uses the same $k$ twice, so it proves only that an odd number plus <i>itself</i> is even. Choice D is false reasoning: the sum of two odd numbers <i>is</i> divisible by 2.`
    },
    {
      id: 'NQ1-11', topic: 'NQ1', type: 'mc', diff: 2,
      stem: R`A store raises the price of a jacket by 40%. Later, the store lowers the new price by 25%. Compared with the original price, the final price is`,
      choices: [R`5% higher`, R`15% higher`, R`10% higher`, R`65% higher`],
      answer: 0,
      explain: R`Multiplying the original price by $1.40$ and then by $0.75$ gives $1.40 \times 0.75 = 1.05$ times the original, a 5% increase. The two percentages apply to <i>different</i> bases, so they cannot be combined by subtraction. <br><i>Common errors:</i> $40\% - 25\% = 15\%$ (choice B); taking 25% of the 40% to get 10% (choice C); adding the percents, $40\% + 25\% = 65\%$ (choice D).`
    },
    {
      id: 'NQ1-12', topic: 'NQ1', type: 'num', diff: 3,
      stem: R`A driver travels 120 miles from Ashford to Belmont at an average speed of 40 miles per hour. She then drives the same 120 miles back at an average speed of 60 miles per hour. What is her average speed, in miles per hour, for the entire round trip?`,
      answer: 48, tol: 0, unit: 'miles per hour',
      explain: R`Average speed is total distance divided by total time. Going: $120/40 = 3$ hours. Returning: $120/60 = 2$ hours. Total: $240$ miles in $5$ hours, so the average speed is $240/5 = 48$ miles per hour. <br><i>Common error:</i> averaging the two speeds, $(40+60)/2 = 50$. The average is lower because more time is spent traveling at the slower speed.`
    },
    {
      id: 'NQ1-13', topic: 'NQ1', type: 'mc', diff: 2, task: [15, 18],
      stem: R`A bicycle's price was reduced by 20%, and the sale price is \$360. To find the original price, Maria wrote
        <div class="work">$360 \times 1.20 = \$432$</div>
        Which statement best describes Maria's work and the correct original price?`,
      choices: [
        R`Maria took 20% of the sale price instead of 20% of the original price. The sale price is 80% of the original, so the original is $360 \div 0.80 = \$450$.`,
        R`Maria's work is correct: a 20% reduction is undone by adding 20%.`,
        R`Maria should have divided by 1.20 instead: $360 \div 1.20 = \$300$.`,
        R`Maria should have subtracted 20% of the sale price: $360 - 72 = \$288$.`
      ],
      answer: 0,
      explain: R`If the price was cut by 20%, then $\text{sale} = 0.80 \times \text{original}$, so $\text{original} = 360/0.80 = 450$. Check: 20% of \$450 is \$90, and $450 - 90 = 360$. Maria's product $360 \times 1.20$ finds 20% <i>of the sale price</i> and adds it on, but the discount was taken from the (larger) original price. Choices C and D make the same base error in a different way.`
    },
    {
      id: 'NQ1-14', topic: 'NQ1', type: 'mc', diff: 1,
      stem: R`Blue paint and yellow paint are mixed in the ratio $3:5$ to make a certain green. A painter needs 24 liters of the green mixture. How many liters of blue paint are needed?`,
      choices: ['14.4', '9', '15', '8'],
      answer: 1,
      explain: R`The ratio $3:5$ means the mixture has $3+5 = 8$ equal parts, of which 3 are blue. One part is $24 \div 8 = 3$ liters, so blue is $3 \times 3 = 9$ liters. <br><i>Common errors:</i> 15 liters is the amount of yellow; $24 \times \tfrac35 = 14.4$ treats the part-to-part ratio as a part-to-whole fraction; 8 comes from dividing 24 by the 3.`
    },

    /* ================= NQ2: Radicals, rational exponents, scientific notation ================= */
    {
      id: 'NQ2-01', topic: 'NQ2', type: 'num', diff: 1,
      stem: R`What is the value of $32^{3/5}$?`,
      answer: 8, tol: 0,
      explain: R`$32^{3/5} = \left(32^{1/5}\right)^3 = 2^3 = 8$, because the fifth root of 32 is 2. <br><i>Common errors:</i> $32 \cdot \tfrac35$ (multiplying the base by the exponent), or $32^3 \div 5$.`
    },
    {
      id: 'NQ2-02', topic: 'NQ2', type: 'mc', diff: 2,
      stem: R`Which expression is equivalent to $\left(16x^{8}y^{-4}\right)^{3/4}$, where $x > 0$ and $y > 0$?`,
      choices: [R`$\dfrac{8x^{6}}{y^{3}}$`, R`$\dfrac{12x^{6}}{y^{3}}$`, R`$\dfrac{2x^{6}}{y^{3}}$`, R`$8x^{6}y^{3}$`],
      answer: 0,
      explain: R`Apply the exponent $3/4$ to each factor: $16^{3/4} = (16^{1/4})^3 = 2^3 = 8$; $(x^8)^{3/4} = x^{6}$; $(y^{-4})^{3/4} = y^{-3} = 1/y^3$. So the result is $\dfrac{8x^6}{y^3}$.
        <br><i>Common errors:</i> $16 \cdot \tfrac34 = 12$ (choice B); taking the fourth root of 16 but forgetting the power of 3 (choice C); dropping the negative sign on the exponent of $y$ (choice D).`
    },
    {
      id: 'NQ2-03', topic: 'NQ2', type: 'mc', diff: 2,
      stem: R`For $x > 0$, which expression is equivalent to $\sqrt[3]{x^{2}} \cdot \sqrt{x}$?`,
      choices: [R`$x^{7/6}$`, R`$x^{1/3}$`, R`$x^{3/5}$`, R`$x^{1/6}$`],
      answer: 0,
      explain: R`Rewrite each radical with a rational exponent: $\sqrt[3]{x^2} = x^{2/3}$ and $\sqrt{x} = x^{1/2}$. When multiplying powers with the same base, add the exponents: $\tfrac23 + \tfrac12 = \tfrac46 + \tfrac36 = \tfrac76$. <br><i>Common errors:</i> multiplying the exponents, $\tfrac23\cdot\tfrac12 = \tfrac13$ (choice B); adding numerators and denominators separately, $\tfrac{2+1}{3+2} = \tfrac35$ (choice C); subtracting the exponents, $\tfrac23 - \tfrac12 = \tfrac16$ (choice D).`
    },
    {
      id: 'NQ2-04', topic: 'NQ2', type: 'mc', diff: 2, task: [15],
      stem: R`A student evaluates an expression as follows:
        <div class="work">$16^{-1/2} = -4$</div>
        Which statement correctly gives the value of the expression and describes the student's likely misconception?`,
      choices: [
        R`The value is $\dfrac14$. The student treated the negative exponent as a negative sign, not as a reciprocal.`,
        R`The value is $4$. The student correctly found the square root but made an arithmetic error in the sign of it.`,
        R`The value is $\dfrac18$. The student treated the fractional exponent $\tfrac12$ as "divide by 2".`,
        R`The value is $-\dfrac14$. The student found the root correctly but forgot to take the reciprocal.`
      ],
      answer: 0,
      explain: R`By the definition of negative and rational exponents, $16^{-1/2} = \dfrac{1}{16^{1/2}} = \dfrac{1}{\sqrt{16}} = \dfrac14$. The student found the square root, 4, correctly, but then applied the negative exponent as a negative sign ($-4$) instead of taking the reciprocal. The other choices give wrong values ($4$, $\tfrac18$, $-\tfrac14$), so they cannot describe the correct evaluation.`
    },
    {
      id: 'NQ2-05', topic: 'NQ2', type: 'mc', diff: 2,
      stem: R`For $x \ge 0$, which expression is equivalent to $\sqrt[4]{81x^{6}}$?`,
      choices: [R`$3x\sqrt{x}$`, R`$9x^{3}$`, R`$27x^{3/2}$`, R`$3x^{24}$`],
      answer: 0,
      explain: R`$\sqrt[4]{81x^6} = (81x^6)^{1/4} = 81^{1/4}\cdot x^{6/4} = 3x^{3/2} = 3x \cdot x^{1/2} = 3x\sqrt{x}$. <br><i>Common errors:</i> taking a square root instead of a fourth root ($9x^3$); using $81^{3/4} = 27$ (choice C); multiplying the index by the exponent, $6 \cdot 4 = 24$ (choice D).`
    },
    {
      id: 'NQ2-06', topic: 'NQ2', type: 'mc', diff: 2, calc: true,
      stem: R`A single hydrogen atom has a mass of about $1.67 \times 10^{-27}$ kilogram. Which is the best approximation of the number of hydrogen atoms in $5.0 \times 10^{-3}$ kilogram of hydrogen?`,
      choices: [R`$3.0 \times 10^{24}$`, R`$3.0 \times 10^{-30}$`, R`$3.0 \times 10^{-24}$`, R`$3.0 \times 10^{30}$`],
      answer: 0,
      explain: R`The number of atoms is (total mass) $\div$ (mass per atom): $\dfrac{5.0 \times 10^{-3}}{1.67 \times 10^{-27}} = \dfrac{5.0}{1.67} \times 10^{-3-(-27)} \approx 2.99 \times 10^{24} \approx 3.0\times 10^{24}$. <br><i>Common errors:</i> adding the exponents while dividing (choice B, $10^{-30}$); inverting the quotient (choice C); treating the exponent $-3$ as $+3$ (choice D, $10^{27+3}$).`
    },
    {
      id: 'NQ2-07', topic: 'NQ2', type: 'multi', diff: 2, task: [17, 5],
      stem: R`A teacher asks four students to write a number in scientific notation. Which students' answers are written correctly in scientific notation and equal the given number? Select all that apply.
        <div class="work"><b>Ava:</b> $0.00072 = 7.2 \times 10^{-4}$</div>
        <div class="work"><b>Ben:</b> $48{,}000{,}000 = 48 \times 10^{6}$</div>
        <div class="work"><b>Cara:</b> $630{,}000 = 6.3 \times 10^{5}$</div>
        <div class="work"><b>Dev:</b> $0.0000905 = 9.05 \times 10^{5}$</div>`,
      choices: [R`Ava's`, R`Ben's`, R`Cara's`, R`Dev's`],
      answer: [0, 2],
      explain: R`Scientific notation requires a coefficient $c$ with $1 \le c < 10$ times a power of 10, and the value must match. Ava's and Cara's answers do both. Ben's $48 \times 10^6$ equals the given number but the coefficient 48 is not between 1 and 10 (it should be $4.8 \times 10^{7}$). Dev's coefficient is fine, but the exponent should be $-5$, not $5$: $0.0000905 = 9.05 \times 10^{-5}$.`
    },

    /* ================= NQ3: Quantitative reasoning and units ================= */
    {
      id: 'NQ3-01', topic: 'NQ3', type: 'mc', diff: 2, task: [21],
      stem: R`A student uses $d = rt$ to find how far a runner goes at $r = 44$ feet per second for $t = 3$ minutes, and writes
        <div class="work">$d = 44 \times 3 = 132$ feet</div>
        Which statement best describes the error and gives the correct distance?`,
      choices: [
        R`The units do not match. Three minutes is 180 seconds, so $d = 44 \times 180 = 7{,}920$ feet.`,
        R`There is no error: feet per second times minutes gives feet.`,
        R`The units do not match. Three minutes is $\tfrac{3}{60} = 0.05$ second, so $d = 44 \times 0.05 = 2.2$ feet.`,
        R`The formula should be $d = r \div t$, so $d = 44 \div 3 \approx 14.7$ feet.`
      ],
      answer: 0,
      explain: R`The rate is in feet per <i>second</i>, so the time must also be in seconds: $3 \text{ min} \times 60 \tfrac{\text{s}}{\text{min}} = 180 \text{ s}$. Then $d = 44 \tfrac{\text{ft}}{\text{s}} \times 180 \text{ s} = 7{,}920$ ft. The student's arithmetic is correct, which makes the work look valid, but the unit of the product is $\tfrac{\text{ft}}{\text{s}}\cdot\text{min}$, not feet. <br>Choice C converts in the wrong direction (dividing by 60), and choice D uses the wrong formula.`
    },
    {
      id: 'NQ3-02', topic: 'NQ3', type: 'num', diff: 2,
      stem: R`A sprinter runs at an average speed of 9 meters per second. What is this speed in kilometers per hour?`,
      answer: 32.4, tol: 0.05, unit: 'kilometers per hour',
      explain: R`$9 \dfrac{\text{m}}{\text{s}} \times \dfrac{1\text{ km}}{1000\text{ m}} \times \dfrac{3600\text{ s}}{1\text{ h}} = \dfrac{9 \times 3600}{1000} = 32.4$ km/h. Writing the conversion as a chain of fractions lets the units cancel. <br><i>Common error:</i> dividing by 3600 instead of multiplying (getting 0.0025), or using 60 in place of 3600.`
    },
    {
      id: 'NQ3-03', topic: 'NQ3', type: 'num', diff: 3,
      stem: R`A rectangular room measures 12 feet by 15 feet. Carpet is sold by the square yard for \$28 per square yard. How many dollars will it cost to carpet the entire room?`,
      answer: 560, tol: 0, unit: 'dollars',
      explain: R`The area is $12 \times 15 = 180$ square feet. Since 1 yd = 3 ft, 1 yd$^2$ = 9 ft$^2$, so the area is $\dfrac{180}{9} = 20$ square yards, and the cost is $20 \times 28 = 560$ dollars. <br><i>Common error:</i> dividing 180 by 3 instead of 9 (using the linear conversion for an area), which gives 60 square yards and \$1,680.`
    },
    {
      id: 'NQ3-04', topic: 'NQ3', type: 'mc', diff: 2, task: [13, 12],
      stem: R`The bar graph shows one month's sales for two branches of a store. Kayla says, "South's sales were about three times North's, because the South bar is three times as tall as the North bar." Which response best addresses Kayla's claim?`,
      figure: {
        type: 'svg',
        alt: 'Bar graph of sales in thousands of dollars for two branches. The vertical axis starts at 80 and runs to 96 in steps of 4. The North bar reaches 84 and the South bar reaches 92, so the South bar looks three times as tall as the North bar.',
        svg: R`<svg viewBox="0 0 320 250">
          <line class="m thin" x1="60" y1="20" x2="300" y2="20"/><line class="m thin" x1="60" y1="65" x2="300" y2="65"/><line class="m thin" x1="60" y1="110" x2="300" y2="110"/><line class="m thin" x1="60" y1="155" x2="300" y2="155"/>
          <rect class="fb b" x="100" y="155" width="60" height="45"/><rect class="fb b" x="200" y="65" width="60" height="135"/>
          <line x1="60" y1="20" x2="60" y2="200"/><line x1="60" y1="200" x2="300" y2="200"/>
          <text class="up" style="font-size:13px" x="52" y="24" text-anchor="end">96</text><text class="up" style="font-size:13px" x="52" y="69" text-anchor="end">92</text><text class="up" style="font-size:13px" x="52" y="114" text-anchor="end">88</text><text class="up" style="font-size:13px" x="52" y="159" text-anchor="end">84</text><text class="up" style="font-size:13px" x="52" y="204" text-anchor="end">80</text>
          <text class="up" style="font-size:14px" x="130" y="221" text-anchor="middle">North</text><text class="up" style="font-size:14px" x="230" y="221" text-anchor="middle">South</text>
          <text class="up" style="font-size:13px" transform="translate(14 110) rotate(-90)" text-anchor="middle">Sales (thousands of dollars)</text>
        </svg>`
      },
      choices: [
        R`Her claim is correct, because the height of a bar always shows how many times larger one value is than another.`,
        R`Her claim is not supported. The vertical axis starts at 80, not 0, so bar heights do not show the ratio of the values; South's sales are only about 10% greater than North's.`,
        R`Her claim is correct, because $92 - 80 = 12$ and $84 - 80 = 4$, and 12 is three times 4.`,
        R`Her claim is wrong only because a line graph, not a bar graph, should be used for two values.`
      ],
      answer: 1,
      explain: R`The bar graph reads the North bar at 84 and the South bar at 92, but the axis begins at 80. The bars' heights therefore measure $84 - 80 = 4$ and $92 - 80 = 12$ units, which have a ratio of 3, while the actual sales have ratio $\dfrac{92}{84} \approx 1.10$, about 10% more. A bar's <i>length</i> is proportional to its value only when the axis starts at zero. <br>Choice C repeats Kayla's mistake of comparing distances from 80 rather than the values themselves.`
    },
    {
      id: 'NQ3-05', topic: 'NQ3', type: 'num', diff: 2,
      stem: R`A cyclist rides at a constant speed. The graph shows the distance traveled during the ride. What is the cyclist's speed, in miles per hour?`,
      figure: {
        type: 'plot',
        alt: 'Graph of distance in miles versus time in minutes for a cyclist, a line through the origin. The marked points are (20, 4) and (50, 10). The horizontal axis runs from 0 to 60 minutes and the vertical axis runs from 0 to 12 miles.',
        segments: [[0, 0, 60, 12]],
        points: [{ x: 20, y: 4, label: '(20, 4)', dx: 8, dy: 18 }, { x: 50, y: 10, label: '(50, 10)', dx: -10, dy: 20 }],
        xr: [0, 60], yr: [0, 12], xstep: 10, ystep: 2, xlabel: 'Time (minutes)', ylabel: 'Distance (miles)'
      },
      answer: 12, tol: 0, unit: 'miles per hour',
      explain: R`The slope of the line is $\dfrac{10 - 4}{50 - 20} = \dfrac{6}{30} = 0.2$ miles per minute. Converting minutes to hours: $0.2 \dfrac{\text{mi}}{\text{min}} \times 60 \dfrac{\text{min}}{\text{h}} = 12$ miles per hour. <br><i>Common error:</i> reporting the slope 0.2 without converting the time unit, or reading a distance (such as 10 miles) as the speed.`
    },
    {
      id: 'NQ3-06', topic: 'NQ3', type: 'mc', diff: 1,
      stem: R`The bar graph shows the populations of four towns. How many more people live in Ashton than in Clay?`,
      figure: {
        type: 'bar',
        alt: 'Bar chart of town populations in thousands: Ashton 45, Brook 30, Clay 18, Dale 36. The vertical axis is labeled Population in thousands.',
        categories: [{ label: 'Ashton', value: 45 }, { label: 'Brook', value: 30 }, { label: 'Clay', value: 18 }, { label: 'Dale', value: 36 }],
        ylabel: 'Population (thousands)', ymax: 50, ystep: 10
      },
      choices: [R`27 people`, R`27,000 people`, R`2,700 people`, R`270,000 people`],
      answer: 1,
      explain: R`The vertical axis is labeled "Population (thousands)", so each value must be multiplied by 1,000. Ashton has 45,000 people and Clay has 18,000, a difference of $45{,}000 - 18{,}000 = 27{,}000$ people. Choice A ignores the scale label, and choices C and D misplace the decimal.`
    },
    {
      id: 'NQ3-07', topic: 'NQ3', type: 'mc', diff: 2, calc: true,
      stem: R`Which of the following is the best estimate of the number of seconds in one year?`,
      choices: [R`$3 \times 10^{5}$`, R`$3 \times 10^{6}$`, R`$3 \times 10^{7}$`, R`$3 \times 10^{8}$`],
      answer: 2, order: 'fixed',
      explain: R`One year has about $365 \times 24 \times 3600 = 31{,}536{,}000 \approx 3 \times 10^{7}$ seconds. A quick estimate chains conversions: $365 \text{ days} \times 24\tfrac{\text{h}}{\text{day}} \times 60\tfrac{\text{min}}{\text{h}} \times 60 \tfrac{\text{s}}{\text{min}}$. Choice A is roughly the number of seconds in a few days (86,400 per day), and choices B and D are off by a factor of 10 in either direction.`
    },
    {
      id: 'NQ3-08', topic: 'NQ3', type: 'multi', diff: 2,
      stem: R`Which of the following comparisons are meaningful, in the sense that the "twice as much" conclusion would not change if a different unit or scale were used? Select all that apply.`,
      choices: [
        R`A 30-kilogram bag is twice as heavy as a 15-kilogram bag.`,
        R`A day with a high of $80^\circ$F is twice as hot as a day with a high of $40^\circ$F.`,
        R`A room at $20^\circ$C is twice as warm as a room at $10^\circ$C.`,
        R`A 60-minute movie is twice as long as a 30-minute movie.`,
        R`The year 2000 is twice as late as the year 1000.`
      ],
      answer: [0, 3],
      explain: R`Mass (kg) and duration (minutes) have a true zero meaning "none", so ratios of measurements are meaningful. Degrees Fahrenheit and Celsius have arbitrary zero points: for example, $40^\circ$F is about $4.4^\circ$C and $80^\circ$F is about $26.7^\circ$C, a ratio of about 6, not 2, so "twice as hot" depends on the scale. Calendar years are measured from an arbitrary origin, so "twice as late" has no meaning either. (Only Kelvin, which starts at absolute zero, supports temperature ratios.)`
    },

    /* ================= NQ4: Complex numbers ================= */
    {
      id: 'NQ4-01', topic: 'NQ4', type: 'mc', diff: 1,
      stem: R`What is the product $(3 + 2i)(1 - 4i)$, written in the form $a + bi$?`,
      choices: [R`$11 - 10i$`, R`$3 - 8i$`, R`$-5 - 10i$`, R`$11 + 10i$`],
      answer: 0,
      explain: R`Distribute (FOIL): $(3)(1) + (3)(-4i) + (2i)(1) + (2i)(-4i) = 3 - 12i + 2i - 8i^2$. Since $i^2 = -1$, $-8i^2 = +8$, so the product is $11 - 10i$. <br><i>Common errors:</i> multiplying only real parts and only imaginary parts, giving $3 - 8i$ (choice B); using $i^2 = +1$, giving $3 - 8 - 10i = -5 - 10i$ (choice C); a sign error on the middle terms (choice D).`
    },
    {
      id: 'NQ4-02', topic: 'NQ4', type: 'mc', diff: 2,
      stem: R`Which of the following is equal to $\dfrac{5 + i}{2 - 3i}$?`,
      choices: [R`$\dfrac{7 + 17i}{13}$`, R`$\dfrac{13 + 17i}{13}$`, R`$-\dfrac{7 + 17i}{5}$`, R`$\dfrac{7 - 17i}{13}$`],
      answer: 0,
      explain: R`Multiply the numerator and denominator by the conjugate of the denominator, $2 + 3i$: <br>$\dfrac{(5+i)(2+3i)}{(2-3i)(2+3i)} = \dfrac{10 + 15i + 2i + 3i^2}{4 - 9i^2} = \dfrac{7 + 17i}{13}$. <br><i>Common errors:</i> using $i^2 = +1$ in the numerator, giving $13 + 17i$ (choice B); computing the denominator as $4 - 9 = -5$, forgetting $-9i^2 = +9$ (choice C); a sign error in the imaginary part (choice D).`
    },
    {
      id: 'NQ4-03', topic: 'NQ4', type: 'num', diff: 1,
      stem: R`Let $z = 4 - 3i$ and let $\bar{z}$ be its complex conjugate. What is the value of $z \cdot \bar{z}$?`,
      answer: 25, tol: 0,
      explain: R`$\bar{z} = 4 + 3i$, so $z\bar{z} = (4 - 3i)(4 + 3i) = 16 - 9i^2 = 16 + 9 = 25$. In general, $(a + bi)(a - bi) = a^2 + b^2$, which is always a nonnegative real number. <br><i>Common error:</i> $16 - 9 = 7$ (forgetting that $i^2 = -1$).`
    },
    {
      id: 'NQ4-04', topic: 'NQ4', type: 'mc', diff: 1,
      stem: R`The point $z$ is graphed in the complex plane. Which point represents the complex conjugate $\bar{z}$?`,
      figure: {
        type: 'plot',
        alt: 'Complex plane with real axis horizontal and imaginary axis vertical, both from -5 to 5. Point z is at 3 + 2i. Point A is at -3 + 2i, point B at 3 - 2i, point C at -3 - 2i, and point D at 2 + 3i.',
        points: [
          { x: 3, y: 2, label: 'z', dx: 8, dy: -8 }, { x: -3, y: 2, label: 'A', dx: -16, dy: -8 }, { x: 3, y: -2, label: 'B', dx: 8, dy: 16 },
          { x: -3, y: -2, label: 'C', dx: -16, dy: 16 }, { x: 2, y: 3, label: 'D', dx: -16, dy: -8 }
        ],
        xr: [-5, 5], yr: [-5, 5], xstep: 1, ystep: 1, xlabel: 'Real axis', ylabel: 'Imaginary axis'
      },
      choices: ['Point A', 'Point B', 'Point C', 'Point D'], answer: 1, order: 'fixed',
      explain: R`The point $z$ is $3 + 2i$, so $\bar{z} = 3 - 2i$, which is the reflection of $z$ across the real axis: point B. <br><i>Common errors:</i> reflecting across the imaginary axis, $-3 + 2i$ (A, this is $-\bar z$); reflecting through the origin, $-3 - 2i$ (C, this is $-z$); swapping the real and imaginary parts, $2 + 3i$ (D).`
    },
    {
      id: 'NQ4-05', topic: 'NQ4', type: 'mc', diff: 2, task: [11],
      stem: R`A student simplifies a product of square roots using the rule $\sqrt{a}\cdot\sqrt{b} = \sqrt{ab}$:
        <div class="work">$\sqrt{-4}\cdot\sqrt{-9} = \sqrt{(-4)(-9)} = \sqrt{36} = 6$</div>
        Which statement best evaluates this work?`,
      choices: [
        R`The work is correct, because the rule $\sqrt{a}\cdot\sqrt{b} = \sqrt{ab}$ holds for all real numbers $a$ and $b$.`,
        R`The first step is not valid, because the rule requires $a \ge 0$ and $b \ge 0$; writing $\sqrt{-4} = 2i$ and $\sqrt{-9} = 3i$ gives $(2i)(3i) = -6$.`,
        R`The first step is not valid; the correct product is $6i$, because each square root of a negative number contributes one factor of $i$.`,
        R`The only error is in the last step, because $\sqrt{36}$ equals $\pm 6$.`
      ],
      answer: 1,
      explain: R`The product rule for radicals is valid only when the radicands are nonnegative. For negative radicands, first rewrite using $i$: $\sqrt{-4} = 2i$ and $\sqrt{-9} = 3i$, so the product is $(2i)(3i) = 6i^2 = -6$. The student's answer of 6 has the wrong sign. <br>Choice C gets a single factor of $i$, but $i \cdot i = i^2 = -1$; choice D confuses the principal square root with "the solutions of $x^2 = 36$".`
    },
    {
      id: 'NQ4-06', topic: 'NQ4', type: 'mc', diff: 1, task: [1],
      stem: R`A teacher asks why the step below is valid when adding complex numbers:
        <div class="work">$(5 + 2i) + (3 - 6i) = (5 + 3) + (2i - 6i)$</div>
        Which explanation is the most complete and accurate?`,
      choices: [
        R`Addition of complex numbers is commutative and associative, just as for real numbers, so the terms can be reordered and regrouped to combine the real parts and the imaginary parts.`,
        R`The distributive property lets us multiply through by $i$, which is why the terms can be combined.`,
        R`Complex addition is not commutative, but the step is allowed by defining that the real parts are added first.`,
        R`The step is valid only because $i^2 = -1$, which makes the imaginary terms combine.`
      ],
      answer: 0,
      explain: R`The step regroups terms: $5 + 2i + 3 - 6i = 5 + 3 + 2i - 6i$. This uses the commutative property (to reorder the four terms) and the associative property (to regroup them) of addition, which hold for complex numbers. The distributive property is used in the <i>next</i> step, $2i - 6i = (2 - 6)i$. The fact that $i^2 = -1$ is not used at all in addition; it matters only in multiplication.`
    },
    {
      id: 'NQ4-07', topic: 'NQ4', type: 'multi', diff: 2, task: [17, 20],
      stem: R`Four students expand $(1 + 2i)^2$. Which students' work is <b>valid</b> and leads to the correct result? Select all that apply.
        <div class="work"><b>Ana:</b> $(1+2i)(1+2i) = 1 + 2i + 2i + 4i^2 = 1 + 4i - 4 = -3 + 4i$</div>
        <div class="work"><b>Ben:</b> $(1+2i)^2 = 1^2 + (2i)^2 = 1 + 4i^2 = -3$</div>
        <div class="work"><b>Cam:</b> $(1+2i)^2 = 1^2 + 2(1)(2i) + (2i)^2 = 1 + 4i - 4 = -3 + 4i$</div>
        <div class="work"><b>Dee:</b> $(1+2i)^2 = 1 + 4i + 4i^2 = 1 + 4i + 4 = 5 + 4i$</div>`,
      choices: [R`Ana's`, R`Ben's`, R`Cam's`, R`Dee's`],
      answer: [0, 2],
      explain: R`$(1+2i)^2 = 1 + 4i + 4i^2 = 1 + 4i - 4 = -3 + 4i$. Ana multiplies the two factors out directly (distributive property); Cam uses the square-of-a-binomial pattern, $(a+b)^2 = a^2 + 2ab + b^2$, which holds for complex numbers because multiplication is commutative and distributive. These are different methods with the same reasoning. <br>Ben omits the middle term $2ab$, the same error as writing $(a+b)^2 = a^2 + b^2$. Dee expands correctly but evaluates $4i^2$ as $+4$ instead of $-4$.`
    },
    {
      id: 'NQ4-08', topic: 'NQ4', type: 'mc', diff: 1,
      stem: R`What is the value of $i^{2027}$?`,
      choices: [R`$-i$`, R`$i$`, R`$1$`, R`$-1$`],
      answer: 0,
      explain: R`Powers of $i$ repeat in a cycle of length 4: $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$. Dividing, $2027 = 4 \cdot 506 + 3$, so $i^{2027} = i^3 = -i$. <br><i>Common errors:</i> $i$ (using the quotient 506 or misreading the remainder as 1), $1$ (remainder 0), $-1$ (remainder 2).`
    },
    {
      id: 'NQ4-09', topic: 'NQ4', type: 'mc', diff: 3,
      stem: R`Which of the following is a square root of $-5 + 12i$?`,
      choices: [R`$2 + 3i$`, R`$3 + 2i$`, R`$2 - 3i$`, R`$-3 + 2i$`],
      answer: 0,
      explain: R`Check each candidate by squaring. $(2 + 3i)^2 = 4 + 12i + 9i^2 = -5 + 12i$. <br>For the others: $(3 + 2i)^2 = 9 + 12i - 4 = 5 + 12i$; $(2 - 3i)^2 = 4 - 12i - 9 = -5 - 12i$; $(-3 + 2i)^2 = 9 - 12i - 4 = 5 - 12i$. (To find a root from scratch, set $(a+bi)^2 = -5 + 12i$, so $a^2 - b^2 = -5$ and $2ab = 12$, giving $a = 2$, $b = 3$ or $a = -2$, $b = -3$.)`
    }

  );
})();
