/* Praxis 5003 bank, pass 1: Numbers and Operations (NO1-NO10), 6 original items per topic (60).
   Format and rules: ../praxis-5003-kit/SPEC-5003.md and bank-example.js. Keys recomputed in checks-no.py. */
(function () {
  var R = String.raw;
  PXD.bank.push(

    /* ================= NO1  Place value ================= */
    {
      id: 'NO1-01', topic: 'NO1', type: 'mc', diff: 1,
      stem: R`Which number is equal to $6 \times 1000 + 3 \times 10 + 8 \times 0.1 + 4 \times 0.001$?`,
      choices: ['6,030.804', '6,030.84', '6,300.804', '6,038.004'], answer: 0,
      explain: R`Write each product, then each digit goes in its own place: $6000 + 30 + 0.8 + 0.004 = 6{,}030.804$. The hundredths place has no term, so it holds a 0 as a placeholder.
        <br><i>Common errors:</i> leaving out the 0 in the hundredths place so the 4 slides over (6,030.84, choice B), putting the 3 in the hundreds place (choice C), and treating $8 \times 0.1$ as 8 ones (choice D).`
    },
    {
      id: 'NO1-02', topic: 'NO1', type: 'num', diff: 2,
      stem: R`What number is made of 52 hundreds, 3 tens, and 14 ones? Enter the number without a comma.`,
      answer: 5244, tol: 0,
      explain: R`$52 \text{ hundreds} = 5200$, $3 \text{ tens} = 30$, and $14 \text{ ones} = 14$, so the number is $5200 + 30 + 14 = 5244$. Fourteen ones is one ten and four ones, so the tens digit becomes 4.
        <br><i>Common errors:</i> writing the three counts side by side (52,314) and writing only the 4 of the 14 ones without regrouping the extra ten (5,234).`
    },
    {
      id: 'NO1-03', topic: 'NO1', type: 'mc', diff: 2, task: [1, 7],
      stem: R`A student says, "To multiply by 10, you just add a zero to the end of the number," and writes $3.4 \times 10 = 3.40$. Which statement best explains the error?`,
      choices: [
        R`Adding a zero to the end of a decimal does not change its value ($3.40 = 3.4$). Multiplying by 10 makes each digit worth ten times as much, so $3.4 \times 10 = 34$.`,
        R`Multiplying by 10 means adding 10 to the number, so the answer should be $13.4$.`,
        R`The zero should go at the front of the number, giving $03.4$.`,
        R`Decimals cannot be multiplied by 10 unless they are first written as fractions.`
      ], answer: 0,
      explain: R`The "add a zero" rule works for whole numbers because a zero on the end shifts every digit one place left. On a decimal, a zero on the right end only adds a place of 0 hundredths: $3.40$ is still $3.4$. Multiplying by 10 makes the 3 worth 30 and the 4 worth 4, so the product is $34$ (the digits move one place to the left of the decimal point).
        <br><i>Common errors:</i> confusing "times 10" with "plus 10" (choice B), and thinking a leading zero changes the size of a number (choice C). Decimals can be multiplied by 10 directly (choice D).`
    },
    {
      id: 'NO1-04', topic: 'NO1', type: 'multi', diff: 2,
      stem: R`Select all that apply. Which expressions are equal to $36{,}000$?`,
      choices: [R`$36 \times 10^3$`, R`$3.6 \times 10^4$`, R`$360 \times 10^2$`, R`$3.6 \times 10^3$`, R`$36 \times 10^4$`], answer: [0, 1, 2],
      explain: R`Multiplying by $10^n$ moves the digits $n$ places to the left. $36 \times 10^3 = 36{,}000$; $3.6 \times 10^4 = 36{,}000$; $360 \times 10^2 = 36{,}000$.
        <br><i>Common errors:</i> $3.6 \times 10^3 = 3{,}600$ (one power of 10 too small) and $36 \times 10^4 = 360{,}000$ (one power too large). Counting the zeros in the exponent form without checking the number in front is the usual slip.`
    },
    {
      id: 'NO1-05', topic: 'NO1', type: 'num', diff: 2,
      stem: R`What is $6.0953$ rounded to the nearest hundredth?`,
      answer: 6.1, tol: 0.001,
      explain: R`The hundredths digit is 9, and the digit to its right (the thousandths digit) is 5, so round up. Nine hundredths plus one more hundredth is ten hundredths, which carries: $6.09 \to 6.10 = 6.1$.
        <br><i>Common errors:</i> cutting the number off without rounding ($6.09$) and rounding to the wrong place.`
    },
    {
      id: 'NO1-06', topic: 'NO1', type: 'mc', diff: 3,
      stem: R`The digit 6 in $52.64$ is worth how many times as much as the digit 6 in $0.0163$?`,
      choices: ['10', '100', '1,000', '10,000'], answer: 1, order: 'fixed',
      explain: R`In $52.64$ the 6 is in the tenths place, worth $0.6$. In $0.0163$ the 6 is in the thousandths place, worth $0.006$. Then $0.6 \div 0.006 = 100$: the places are two apart, and each place is ten times the next, so $10 \times 10 = 100$.
        <br><i>Common errors:</i> counting one place of difference instead of two (10), and counting the hundredths place as if it were thousandths or the thousandths as ten-thousandths (1,000 or 10,000).`
    },

    /* ================= NO2  Problem situations and inverse operations ================= */
    {
      id: 'NO2-01', topic: 'NO2', type: 'mc', diff: 1,
      stem: R`A museum trip has 94 students. Each van holds 8 students. What is the fewest number of vans needed to carry all of the students?`,
      choices: ['11', '12', '86', '752'], answer: 1, order: 'fixed',
      explain: R`$94 \div 8 = 11$ with remainder 6. Eleven vans hold only $88$ students, and the 6 students left over still need a ride, so a twelfth van is needed.
        <br><i>Common errors:</i> ignoring the remainder (11, choice A), subtracting (94 − 8 = 86), and multiplying (94 × 8 = 752).`
    },
    {
      id: 'NO2-02', topic: 'NO2', type: 'mc', diff: 2, task: [3],
      stem: R`A teacher wants a story problem that matches $27 - 15$ as a <i>comparison</i> situation. Which story fits?`,
      choices: [
        R`Jin has 27 stickers and gives away 15. How many stickers does Jin have left?`,
        R`Jin puts 15 stickers on each of 27 pages. How many stickers is that in all?`,
        R`Jin has 15 stickers and Mia has 27 stickers. How many more stickers does Mia have than Jin?`,
        R`Jin has 15 stickers and gets 27 more. How many stickers does Jin have now?`
      ], answer: 2,
      explain: R`A comparison situation asks how much more or less one quantity is than another. Mia has 27 and Jin has 15, so "how many more" is $27 - 15 = 12$.
        <br><i>Common errors:</i> choice A is also solved by $27 - 15$, but it is a <i>taking from</i> situation, not a comparison (choosing it means matching the operation but not the structure). Choice B is equal groups ($15 \times 27$) and choice D is adding to ($15 + 27$).`
    },
    {
      id: 'NO2-03', topic: 'NO2', type: 'num', diff: 2, calc: true,
      stem: R`Lena buys 3 notebooks that cost \$2.75 each and a pen that costs \$1.40. She pays with a \$20 bill. How many dollars in change should she get?`,
      answer: 10.35, tol: 0.001, unit: 'dollars',
      explain: R`The notebooks cost $3 \times 2.75 = 8.25$ dollars. With the pen, the total is $8.25 + 1.40 = 9.65$ dollars. The change is $20 - 9.65 = 10.35$ dollars.
        <br><i>Common errors:</i> adding one notebook instead of three ($20 - 4.15 = 15.85$) and leaving out the pen ($20 - 8.25 = 11.75$).`
    },
    {
      id: 'NO2-04', topic: 'NO2', type: 'num', diff: 2,
      stem: R`A number is multiplied by 4, and then 9 is subtracted from the product. The result is 51. What is the number?`,
      answer: 15, tol: 0,
      explain: R`Undo the steps in reverse order with inverse operations. Add 9 to undo the subtraction: $51 + 9 = 60$. Divide by 4 to undo the multiplication: $60 \div 4 = 15$. Check: $15 \times 4 = 60$ and $60 - 9 = 51$.
        <br><i>Common errors:</i> subtracting 9 again instead of adding it ($42 \div 4 = 10.5$) and undoing the steps in the order they were done ($51 \div 4$ first).`
    },
    {
      id: 'NO2-05', topic: 'NO2', type: 'multi', diff: 1,
      stem: R`Which TWO equations can be used to check that $91 \div 7 = 13$?`,
      choices: [R`$13 \times 7 = 91$`, R`$13 + 7 = 20$`, R`$91 \div 13 = 7$`, R`$91 - 7 = 84$`], answer: [0, 2],
      explain: R`Division is the inverse of multiplication, so the quotient times the divisor should give back the dividend: $13 \times 7 = 91$. Dividing the dividend by the quotient should give the divisor: $91 \div 13 = 7$.
        <br><i>Common errors:</i> $13 + 7 = 20$ and $91 - 7 = 84$ are true equations, but neither uses the inverse operation, so neither checks the division.`
    },
    {
      id: 'NO2-06', topic: 'NO2', type: 'mc', diff: 3,
      stem: R`A recipe for one batch of muffins uses $\frac{2}{3}$ cup of flour. Dana has 5 cups of flour. How many full batches can she make, and how much flour will be left over?`,
      choices: [
        R`3 full batches, with $\frac{1}{3}$ cup left over`,
        R`7 full batches, with $\frac{1}{2}$ cup left over`,
        R`8 full batches, with no flour left over`,
        R`7 full batches, with $\frac{1}{3}$ cup left over`
      ], answer: 3,
      explain: R`The number of batches is $5 \div \frac{2}{3} = 7\frac{1}{2}$, so 7 full batches. Seven batches use $7 \times \frac{2}{3} = \frac{14}{3} = 4\frac{2}{3}$ cups, leaving $5 - 4\frac{2}{3} = \frac{1}{3}$ cup.
        <br><i>Common errors:</i> multiplying instead of dividing ($5 \times \frac{2}{3} = 3\frac{1}{3}$, choice A), reading the leftover half <i>batch</i> as half a <i>cup</i> (choice B), and rounding $7\frac{1}{2}$ up to 8 (choice C, which would need $5\frac{1}{3}$ cups).`
    },

    /* ================= NO3  Algorithms and strategies ================= */
    {
      id: 'NO3-01', topic: 'NO3', type: 'mc', diff: 1,
      stem: R`Which expression shows all of the partial products for $34 \times 26$?`,
      choices: [
        R`$(30 \times 20) + (4 \times 6)$`,
        R`$(30 \times 20) + (30 \times 6) + (4 \times 20) + (4 \times 6)$`,
        R`$(30 + 20) \times (4 + 6)$`,
        R`$(30 \times 4) + (20 \times 6)$`
      ], answer: 1,
      explain: R`Write $34 = 30 + 4$ and $26 = 20 + 6$. Each part of 34 multiplies each part of 26: $600 + 180 + 80 + 24 = 884$.
        <br><i>Common errors:</i> multiplying only the tens together and the ones together ($600 + 24 = 624$, choice A), and adding the parts before multiplying or pairing the wrong parts (choices C and D).`
    },
    {
      id: 'NO3-02', topic: 'NO3', type: 'mc', diff: 2, task: [1],
      stem: R`A teacher is using the standard algorithm to find $52 \times 37$. The first row is 364, which is $7 \times 52$. The second row is written as 1560. Which explanation tells why the second row is 1560 and not 156?`,
      choices: [
        R`The 3 in 37 means 3 tens, so the second row is $30 \times 52 = 1560$.`,
        R`The second row has to have the same number of digits as the first row.`,
        R`The rule is to put a zero at the end of the second row of any multiplication problem.`,
        R`The second row is $3 \times 52 = 156$, and the zero is added to show that it is the second row.`
      ], answer: 0,
      explain: R`In 37, the digit 3 is worth 30, so the second row is $30 \times 52 = 1560$. The first row, $7 \times 52 = 364$, and the second row add to the full product: $364 + 1560 = 1924$. The zero is a placeholder because the whole row is ten times as large as $3 \times 52$.
        <br><i>Common errors:</i> explaining the zero as a rule or a label (choices B, C, D) rather than as the value of the digit 3.`
    },
    {
      id: 'NO3-03', topic: 'NO3', type: 'multi', diff: 2,
      stem: R`Which TWO of these strategies give the correct value of $398 + 247$?`,
      choices: [R`$400 + 247 - 2$`, R`$400 + 247 + 2$`, R`$398 + 250 - 3$`, R`$400 + 250 - 3$`, R`$398 + 250 + 3$`], answer: [0, 2],
      explain: R`Compensation: round one number to a friendly number, then fix the sum. $400$ is $2$ more than $398$, so subtract 2: $400 + 247 - 2 = 645$. $250$ is $3$ more than $247$, so subtract 3: $398 + 250 - 3 = 645$.
        <br><i>Common errors:</i> adding the adjustment instead of subtracting it (649 and 651), and rounding both numbers up but correcting for only one of them ($400 + 250 - 3 = 647$; the correction should be $2 + 3 = 5$).`
    },
    {
      id: 'NO3-04', topic: 'NO3', type: 'num', diff: 1,
      stem: R`The steps below find $748 \div 22$ by subtracting multiples of 22.
        <br>$748 - 440 = 308$ (20 groups of 22)<br>$308 - 220 = 88$ (10 groups of 22)<br>$88 - 88 = 0$ (4 groups of 22)<br>
        How many groups of 22 are in 748?`,
      answer: 34, tol: 0, unit: 'groups',
      explain: R`Add the groups taken out at each step: $20 + 10 + 4 = 34$. Check: $22 \times 34 = 748$. This is the partial quotients method: each subtraction takes out an easy number of groups, and the quotient is the sum of those groups.
        <br><i>Common errors:</i> counting the three steps (3) instead of adding the groups.`
    },
    {
      id: 'NO3-05', topic: 'NO3', type: 'mc', diff: 2, task: [7],
      stem: R`A student subtracts and gets the answer shown.
        <div class="work">$402 - 178 = 376$</div>
        Which error most likely produced 376?`,
      choices: [
        R`In each column, the student subtracted the smaller digit from the larger digit.`,
        R`The student borrowed from the 0 in the tens place.`,
        R`The student rounded 178 to 200 before subtracting.`,
        R`The student forgot to reduce the hundreds digit after borrowing.`
      ], answer: 0,
      explain: R`The correct difference is $402 - 178 = 224$. Taking the smaller digit from the larger in every column gives $8 - 2 = 6$ in the ones, $7 - 0 = 7$ in the tens, and $4 - 1 = 3$ in the hundreds, which is 376. This is the most common error when a column needs regrouping, especially across a zero.
        <br>The other choices do not produce 376: rounding 178 to 200 gives 202, and forgetting to reduce the hundreds digit gives 324.`
    },
    {
      id: 'NO3-06', topic: 'NO3', type: 'mc', diff: 3, task: [1],
      stem: R`A student explains $0.4 \times 0.6 = 0.24$ by saying, "$4 \times 6 = 24$, and there are two decimal places in all." Which explanation best shows <i>why</i> the product has two decimal places?`,
      choices: [
        R`Multiplying always adds the number of decimal places, so no further reason is needed.`,
        R`The product of two numbers less than 1 must be less than 0.1, so the decimal point goes before the 2.`,
        R`$0.4$ is 4 tenths and $0.6$ is 6 tenths; tenths times tenths are hundredths, so the product is 24 hundredths.`,
        R`The decimal points are ignored while multiplying and put back so the answer has the same number of digits as the factors.`
      ], answer: 2,
      explain: R`$0.4 = 4 \times \frac{1}{10}$ and $0.6 = 6 \times \frac{1}{10}$, so the product is $24 \times \frac{1}{10} \times \frac{1}{10} = 24 \times \frac{1}{100} = 0.24$. A tenth of a tenth is a hundredth, which is why the product has two decimal places.
        <br><i>Common errors:</i> choices A and D restate the rule without explaining it. Choice B is false: $0.24$ is greater than $0.1$ (a product of two numbers less than 1 is less than <i>each factor</i>, not less than 0.1).`
    },

    /* ================= NO4  Fraction concepts ================= */
    {
      id: 'NO4-01', topic: 'NO4', type: 'mc', diff: 2,
      stem: R`Which expression has a value greater than $\frac{3}{4}$?`,
      choices: [R`$\frac{3}{4} \times \frac{1}{2}$`, R`$\frac{3}{4} \div \frac{1}{2}$`, R`$\frac{3}{4} \times \frac{2}{3}$`, R`$\frac{3}{4} \div 2$`], answer: 1,
      explain: R`Multiplying by a number less than 1 makes a number smaller, and dividing by a number less than 1 makes it larger. $\frac{3}{4} \div \frac{1}{2} = \frac{3}{4} \times 2 = \frac{3}{2}$, which is greater than $\frac{3}{4}$.
        <br>The others are all smaller than $\frac{3}{4}$: $\frac{3}{4} \times \frac{1}{2} = \frac{3}{8}$, $\frac{3}{4} \times \frac{2}{3} = \frac{1}{2}$, and $\frac{3}{4} \div 2 = \frac{3}{8}$. <i>Common error:</i> believing that division always makes a number smaller.`
    },
    {
      id: 'NO4-02', topic: 'NO4', type: 'multi', diff: 1,
      stem: R`Which TWO statements are true?`,
      choices: [
        R`$\frac{1}{5}$ is greater than $\frac{1}{3}$ because 5 is greater than 3.`,
        R`$\frac{1}{9}$ is less than $\frac{1}{6}$.`,
        R`$\frac{4}{4}$ is greater than 1.`,
        R`$\frac{3}{8}$ is the same as 3 groups of $\frac{1}{8}$.`
      ], answer: [1, 3],
      explain: R`The more equal pieces a whole is cut into, the smaller each piece is, so $\frac{1}{9} < \frac{1}{6}$. A fraction $\frac{3}{8}$ is 3 pieces, each of size $\frac{1}{8}$.
        <br><i>Common errors:</i> comparing unit fractions by their denominators as if they were whole numbers ($\frac{1}{5} < \frac{1}{3}$, so the first statement is false) and thinking a fraction with equal numerator and denominator is more than one whole ($\frac{4}{4} = 1$).`
    },
    {
      id: 'NO4-03', topic: 'NO4', type: 'mc', diff: 2, task: [6],
      stem: R`Mia ate $\frac{1}{2}$ of a large pizza and Leo ate $\frac{1}{2}$ of a small pizza. Dev says, "They ate the same amount, because $\frac{1}{2} = \frac{1}{2}$." Which response to Dev is correct?`,
      choices: [
        R`Dev is correct; equal fractions always show equal amounts.`,
        R`Dev is incorrect; Leo ate more pizza, because smaller pizzas are cut into bigger slices.`,
        R`Dev is incorrect; Mia ate more pizza, because half of a larger whole is more than half of a smaller whole.`,
        R`Dev is incorrect; fractions of different pizzas cannot be written as the same fraction.`
      ], answer: 2,
      explain: R`A fraction names a part of a whole, so two fractions can be compared only when they are parts of the <i>same</i> whole. The two halves are equal as numbers, but half of a large pizza is more pizza than half of a small one.
        <br><i>Common errors:</i> forgetting to ask "fraction of what?" (choice A), and the unfounded idea that slices from a smaller whole are bigger (choice B).`
    },
    {
      id: 'NO4-04', topic: 'NO4', type: 'mc', diff: 1,
      stem: R`The bar is one whole, divided into equal parts. Which expression gives the fraction of the whole bar that is shaded?`,
      figure: {
        type: 'svg', alt: 'A horizontal bar divided into 6 equal parts. The 4 parts on the left are shaded and the 2 parts on the right are not.',
        svg: R`<svg viewBox="0 0 340 70"><rect class="fa" x="20" y="15" width="200" height="40"/><rect x="20" y="15" width="300" height="40"/><line x1="70" y1="15" x2="70" y2="55"/><line x1="120" y1="15" x2="120" y2="55"/><line x1="170" y1="15" x2="170" y2="55"/><line x1="220" y1="15" x2="220" y2="55"/><line x1="270" y1="15" x2="270" y2="55"/></svg>`
      },
      choices: [R`$\frac{4}{2}$`, R`$4 \times \frac{1}{4}$`, R`$4 \times \frac{1}{6}$`, R`$\frac{2}{6}$`], answer: 2,
      explain: R`Each of the 6 equal parts is $\frac{1}{6}$ of the whole, and 4 of them are shaded, so the shaded part is $4 \times \frac{1}{6} = \frac{4}{6}$.
        <br><i>Common errors:</i> comparing shaded parts to unshaded parts ($\frac{4}{2}$), using the number of shaded parts as the number of equal parts ($4 \times \frac{1}{4} = 1$), and giving the unshaded part ($\frac{2}{6}$).`
    },
    {
      id: 'NO4-05', topic: 'NO4', type: 'num', diff: 3, calc: true,
      stem: R`A ribbon is $4\frac{1}{2}$ yards long. How many pieces that are each $\frac{3}{8}$ yard long can be cut from the ribbon?`,
      answer: 12, tol: 0, unit: 'pieces',
      explain: R`The question asks how many $\frac{3}{8}$'s fit in $4\frac{1}{2}$: $4\frac{1}{2} \div \frac{3}{8} = \frac{9}{2} \times \frac{8}{3} = 12$. Check: $12 \times \frac{3}{8} = \frac{36}{8} = 4\frac{1}{2}$.
        <br><i>Common errors:</i> multiplying instead of dividing ($4\frac{1}{2} \times \frac{3}{8} = 1\frac{11}{16}$) and inverting the wrong fraction ($\frac{3}{8} \div 4\frac{1}{2} = \frac{1}{12}$).`
    },
    {
      id: 'NO4-06', topic: 'NO4', type: 'mc', diff: 2, task: [2],
      stem: R`A student claims that dividing a number by another number always gives a quotient smaller than the number you started with. Which division is a counterexample to the student's claim?`,
      choices: [R`$12 \div 3$`, R`$\frac{1}{2} \div 4$`, R`$5 \div 5$`, R`$6 \div \frac{3}{4}$`], answer: 3,
      explain: R`A counterexample is a case where the claim fails. $6 \div \frac{3}{4} = 6 \times \frac{4}{3} = 8$, and $8 > 6$, so dividing by a fraction less than 1 made the number larger.
        <br>The other three support the claim: $12 \div 3 = 4$, $\frac{1}{2} \div 4 = \frac{1}{8}$, and $5 \div 5 = 1$ are each smaller than the starting number.`
    },

    /* ================= NO5  Order of operations and properties ================= */
    {
      id: 'NO5-01', topic: 'NO5', type: 'mc', diff: 1,
      stem: R`What is the value of $18 - 2 \times 3^2$?`,
      choices: ['-18', '0', '6', '144'], answer: 1, order: 'fixed',
      explain: R`Exponent first: $3^2 = 9$. Then multiply: $2 \times 9 = 18$. Then subtract: $18 - 18 = 0$.
        <br><i>Common errors:</i> squaring the product $2 \times 3$ instead of just the 3 ($18 - 36 = -18$), treating $3^2$ as $3 \times 2$ ($18 - 12 = 6$), and working left to right ($(18 - 2) \times 9 = 144$).`
    },
    {
      id: 'NO5-02', topic: 'NO5', type: 'num', diff: 2,
      stem: R`What is the value of $48 \div 6 \times 2 + 4^2 - 5$?`,
      answer: 27, tol: 0,
      explain: R`Exponent: $4^2 = 16$. Then multiplication and division from left to right: $48 \div 6 = 8$, and $8 \times 2 = 16$. Then addition and subtraction from left to right: $16 + 16 - 5 = 27$.
        <br><i>Common errors:</i> multiplying before dividing ($48 \div 12 = 4$, giving 15) and treating $4^2$ as $4 \times 2$ (giving 19).`
    },
    {
      id: 'NO5-03', topic: 'NO5', type: 'mc', diff: 1,
      stem: R`Which equation shows the associative property of multiplication?`,
      choices: [
        R`$3 \times 5 \times 2 = 5 \times 3 \times 2$`,
        R`$3 \times (5 + 2) = 3 \times 5 + 3 \times 2$`,
        R`$(3 \times 5) \times 2 = 3 \times (5 \times 2)$`,
        R`$3 \times 1 = 3$`
      ], answer: 2,
      explain: R`The associative property says the <i>grouping</i> of factors does not change the product: $(3 \times 5) \times 2 = 3 \times (5 \times 2)$, and both equal 30. The factors stay in the same order and only the parentheses move.
        <br><i>Common errors:</i> choice A changes the <i>order</i> (commutative property), choice B shares a factor over a sum (distributive property), and choice D uses 1 as the multiplication identity.`
    },
    {
      id: 'NO5-04', topic: 'NO5', type: 'multi', diff: 2,
      stem: R`Which TWO expressions are equal to $12 \times 15 - 12 \times 5$?`,
      choices: [R`$12 \times 15 - 5$`, R`$12 \times (15 - 5)$`, R`$15 \times 5$`, R`$12 \times 10$`], answer: [1, 3],
      explain: R`The common factor 12 can be taken out: $12 \times 15 - 12 \times 5 = 12 \times (15 - 5)$, by the distributive property, and $12 \times (15 - 5) = 12 \times 10 = 120$. Check: $180 - 60 = 120$.
        <br><i>Common errors:</i> subtracting 5 from only one product ($12 \times 15 - 5 = 175$) and multiplying the other numbers together ($15 \times 5 = 75$).`
    },
    {
      id: 'NO5-05', topic: 'NO5', type: 'mc', diff: 2, task: [6, 7],
      stem: R`Tanya evaluated an expression and showed this work.
        <div class="work">$2 + 3 \times 4^2$<br>$= 2 + 3 \times 8$<br>$= 2 + 24$<br>$= 26$</div>
        Which statement describes Tanya's error?`,
      choices: [
        R`She added $2 + 3$ before multiplying.`,
        R`She multiplied $3 \times 8$ incorrectly.`,
        R`She squared 3 instead of squaring 4.`,
        R`She evaluated $4^2$ as $4 \times 2$.`
      ], answer: 3,
      explain: R`Tanya wrote $4^2$ as 8, which is $4 \times 2$. The exponent means repeated multiplication: $4^2 = 4 \times 4 = 16$. The correct work is $2 + 3 \times 16 = 2 + 48 = 50$.
        <br>The rest of her work is fine: she did multiply before adding, and $3 \times 8 = 24$ is right for the number she had.`
    },
    {
      id: 'NO5-06', topic: 'NO5', type: 'mc', diff: 3,
      stem: R`Where should parentheses be placed in $5 + 3 \times 2^2 - 1$ so that its value is 31?`,
      choices: [R`$5 + (3 \times 2)^2 - 1$`, R`$5 + 3 \times (2^2 - 1)$`, R`$(5 + 3 \times 2)^2 - 1$`, R`$(5 + 3) \times 2^2 - 1$`], answer: 3,
      explain: R`Try each: $(5 + 3) \times 2^2 - 1 = 8 \times 4 - 1 = 31$. The other placements give $5 + 6^2 - 1 = 40$, $5 + 3 \times 3 = 14$, and $11^2 - 1 = 120$. (With no parentheses the value is $5 + 12 - 1 = 16$.)
        <br><i>Common errors:</i> forgetting that the exponent applies to the 2 alone unless the parentheses include more, and not checking each placement against the target value.`
    },

    /* ================= NO6  Models and representations of operations ================= */
    {
      id: 'NO6-01', topic: 'NO6', type: 'mc', diff: 1,
      stem: R`The number line shows two jumps that start at 0. Which equation does it show?`,
      figure: {
        type: 'svg', alt: 'A number line from 0 to 2 with a tick mark every one fourth. One arrow jumps from 0 to the third tick mark, which is three fourths. A second arrow jumps from there two more tick marks to the right, landing at five fourths.',
        svg: R`<svg viewBox="0 0 360 110"><line x1="30" y1="70" x2="330" y2="70"/><line class="thin" x1="30" y1="61" x2="30" y2="79"/><line class="thin" x1="67.5" y1="65" x2="67.5" y2="75"/><line class="thin" x1="105" y1="65" x2="105" y2="75"/><line class="thin" x1="142.5" y1="65" x2="142.5" y2="75"/><line class="thin" x1="180" y1="61" x2="180" y2="79"/><line class="thin" x1="217.5" y1="65" x2="217.5" y2="75"/><line class="thin" x1="255" y1="65" x2="255" y2="75"/><line class="thin" x1="292.5" y1="65" x2="292.5" y2="75"/><line class="thin" x1="330" y1="61" x2="330" y2="79"/><text class="up" x="30" y="96" text-anchor="middle">0</text><text class="up" x="180" y="96" text-anchor="middle">1</text><text class="up" x="330" y="96" text-anchor="middle">2</text><path class="b" d="M30,70 Q86.25,20 142.5,70"/><polygon class="b" style="fill:#009CDE" points="142.5,70 133.1,67.0 138.4,61.0"/><path class="a" d="M142.5,70 Q180,30 217.5,70"/><polygon class="a" style="fill:#F36E24" points="217.5,70 208.4,66.2 214.3,60.7"/></svg>`
      },
      choices: [R`$\frac{3}{4} - \frac{1}{2} = \frac{1}{4}$`, R`$\frac{3}{4} + \frac{1}{4} = 1$`, R`$\frac{3}{4} + \frac{1}{2} = \frac{5}{4}$`, R`$\frac{3}{4} + \frac{1}{2} = \frac{4}{6}$`], answer: 2,
      explain: R`The first jump goes 3 tick marks of size $\frac{1}{4}$, from 0 to $\frac{3}{4}$. The second jump goes 2 tick marks to the right (a length of $\frac{1}{2}$) and lands on $\frac{5}{4}$, so the picture shows $\frac{3}{4} + \frac{1}{2} = \frac{5}{4}$.
        <br><i>Common errors:</i> a jump to the right is adding, not subtracting (choice A); the second jump is two tick marks, not one (choice B); and adding the numerators and the denominators ($\frac{3 + 1}{4 + 2} = \frac{4}{6}$, choice D) is not how fractions add.`
    },
    {
      id: 'NO6-02', topic: 'NO6', type: 'num', diff: 2,
      stem: R`The area model shows $14 \times 23$ split into four rectangles. Three of the areas are shown. What is the area, in square units, of the rectangle marked with a question mark? (Figure not drawn to scale)`,
      figure: {
        type: 'svg', alt: 'An area model for 14 times 23. The width is split into 10 and 4, and the height is split into 20 and 3. The upper left rectangle has area 200, the lower left has area 30, and the lower right has area 12. The upper right rectangle, which is 4 wide and 20 tall, is marked with a question mark.',
        svg: R`<svg viewBox="0 0 330 190"><rect x="50" y="30" width="250" height="140"/><line x1="210" y1="30" x2="210" y2="170"/><line x1="50" y1="120" x2="300" y2="120"/><text class="up" x="130" y="22" text-anchor="middle">10</text><text class="up" x="255" y="22" text-anchor="middle">4</text><text class="up" x="30" y="80" text-anchor="middle">20</text><text class="up" x="32" y="150" text-anchor="middle">3</text><text class="up" x="130" y="80" text-anchor="middle">200</text><text class="up" x="255" y="80" text-anchor="middle">?</text><text class="up" x="130" y="150" text-anchor="middle">30</text><text class="up" x="255" y="150" text-anchor="middle">12</text></svg>`
      },
      answer: 80, tol: 0, unit: 'square units',
      explain: R`The marked rectangle is 4 units wide and 20 units tall, so its area is $4 \times 20 = 80$. Check: $200 + 80 + 30 + 12 = 322 = 14 \times 23$.
        <br><i>Common errors:</i> adding the sides ($4 + 20 = 24$) and using the wrong pair of sides ($10 \times 3$ or $4 \times 3$, the areas already shown).`
    },
    {
      id: 'NO6-03', topic: 'NO6', type: 'mc', diff: 2, task: [4],
      stem: R`A teacher wants a story that models $6 \div \frac{1}{2}$. Which story fits?`,
      choices: [
        R`Six pizzas are shared equally among 2 people. How much pizza does each person get?`,
        R`A person eats half of 6 pizzas. How many pizzas are eaten?`,
        R`Six people each get $\frac{1}{2}$ of a pizza. How many pizzas are needed?`,
        R`Six pizzas are cut into halves. How many half-pizza servings are there?`
      ], answer: 3,
      explain: R`$6 \div \frac{1}{2}$ asks how many groups of $\frac{1}{2}$ are in 6. Cutting 6 pizzas into halves makes $6 \div \frac{1}{2} = 12$ servings.
        <br><i>Common errors:</i> dividing by 2 instead of by $\frac{1}{2}$ (choice A, $6 \div 2$), and multiplying by $\frac{1}{2}$ (choices B and C, $\frac{1}{2} \times 6 = 3$).`
    },
    {
      id: 'NO6-04', topic: 'NO6', type: 'mc', diff: 2,
      stem: R`The dot array has 6 rows of 8 dots. The dashed line splits each row into two parts. Which equation does the array show?`,
      figure: {
        type: 'svg', alt: 'An array of dots with 6 rows and 8 columns. A vertical dashed line separates the first 5 columns from the last 3 columns.',
        svg: R`<svg viewBox="0 0 260 200"><circle class="pt" cx="30" cy="30" r="6"/><circle class="pt" cx="58" cy="30" r="6"/><circle class="pt" cx="86" cy="30" r="6"/><circle class="pt" cx="114" cy="30" r="6"/><circle class="pt" cx="142" cy="30" r="6"/><circle class="pt" cx="170" cy="30" r="6"/><circle class="pt" cx="198" cy="30" r="6"/><circle class="pt" cx="226" cy="30" r="6"/><circle class="pt" cx="30" cy="58" r="6"/><circle class="pt" cx="58" cy="58" r="6"/><circle class="pt" cx="86" cy="58" r="6"/><circle class="pt" cx="114" cy="58" r="6"/><circle class="pt" cx="142" cy="58" r="6"/><circle class="pt" cx="170" cy="58" r="6"/><circle class="pt" cx="198" cy="58" r="6"/><circle class="pt" cx="226" cy="58" r="6"/><circle class="pt" cx="30" cy="86" r="6"/><circle class="pt" cx="58" cy="86" r="6"/><circle class="pt" cx="86" cy="86" r="6"/><circle class="pt" cx="114" cy="86" r="6"/><circle class="pt" cx="142" cy="86" r="6"/><circle class="pt" cx="170" cy="86" r="6"/><circle class="pt" cx="198" cy="86" r="6"/><circle class="pt" cx="226" cy="86" r="6"/><circle class="pt" cx="30" cy="114" r="6"/><circle class="pt" cx="58" cy="114" r="6"/><circle class="pt" cx="86" cy="114" r="6"/><circle class="pt" cx="114" cy="114" r="6"/><circle class="pt" cx="142" cy="114" r="6"/><circle class="pt" cx="170" cy="114" r="6"/><circle class="pt" cx="198" cy="114" r="6"/><circle class="pt" cx="226" cy="114" r="6"/><circle class="pt" cx="30" cy="142" r="6"/><circle class="pt" cx="58" cy="142" r="6"/><circle class="pt" cx="86" cy="142" r="6"/><circle class="pt" cx="114" cy="142" r="6"/><circle class="pt" cx="142" cy="142" r="6"/><circle class="pt" cx="170" cy="142" r="6"/><circle class="pt" cx="198" cy="142" r="6"/><circle class="pt" cx="226" cy="142" r="6"/><circle class="pt" cx="30" cy="170" r="6"/><circle class="pt" cx="58" cy="170" r="6"/><circle class="pt" cx="86" cy="170" r="6"/><circle class="pt" cx="114" cy="170" r="6"/><circle class="pt" cx="142" cy="170" r="6"/><circle class="pt" cx="170" cy="170" r="6"/><circle class="pt" cx="198" cy="170" r="6"/><circle class="pt" cx="226" cy="170" r="6"/><line class="m dash" x1="156" y1="8" x2="156" y2="192"/></svg>`
      },
      choices: [R`$6 \times 8 = 6 \times 5 + 3$`, R`$6 \times 8 = 6 \times 5 + 6 \times 3$`, R`$6 \times 8 = (6 + 5) \times (6 + 3)$`, R`$6 \times 8 = 6 + 5 + 3$`], answer: 1,
      explain: R`The dashed line splits each row of 8 into 5 and 3. The left part is 6 rows of 5, or $6 \times 5 = 30$ dots, and the right part is 6 rows of 3, or $6 \times 3 = 18$ dots. Together, $30 + 18 = 48 = 6 \times 8$. This is the distributive property.
        <br><i>Common errors:</i> multiplying only one part by 6 ($30 + 3 = 33$), adding the factors before multiplying ($11 \times 9 = 99$), and adding all the numbers ($6 + 5 + 3 = 14$).`
    },
    {
      id: 'NO6-05', topic: 'NO6', type: 'multi', diff: 2,
      stem: R`Select all that apply. A number line shows 4 jumps of length $0.25$, starting at 0. Which equations are modeled by this number line?`,
      choices: [R`$4 \times 0.25 = 1$`, R`$4 + 0.25 = 4.25$`, R`$0.25 + 0.25 + 0.25 + 0.25 = 1$`, R`$4 - 0.25 = 3.75$`, R`$1 \div 0.25 = 4$`], answer: [0, 2, 4],
      explain: R`Four jumps of $0.25$ end at 1, so the picture shows repeated addition ($0.25 + 0.25 + 0.25 + 0.25 = 1$), multiplication as repeated jumps ($4 \times 0.25 = 1$), and division as "how many jumps of $0.25$ fit in 1" ($1 \div 0.25 = 4$).
        <br><i>Common errors:</i> treating the number of jumps as an amount to add to or subtract from ($4 + 0.25$ and $4 - 0.25$ mix up the number of jumps with the length of a jump).`
    },
    {
      id: 'NO6-06', topic: 'NO6', type: 'num', diff: 3,
      stem: R`A rectangle is one whole. It is divided into 5 equal columns and 6 equal rows, and part of it is shaded as shown. What fraction of the whole rectangle is shaded? Enter your answer as a fraction in simplest form.`,
      figure: {
        type: 'svg', alt: 'A rectangle divided into a grid of 5 columns and 6 rows of equal rectangles. The shaded region is the upper left block that is 2 columns wide and 3 rows tall.',
        svg: R`<svg viewBox="0 0 200 220"><rect class="fa" x="25" y="20" width="60" height="90"/><line class="thin" x1="55" y1="20" x2="55" y2="200"/><line class="thin" x1="85" y1="20" x2="85" y2="200"/><line class="thin" x1="115" y1="20" x2="115" y2="200"/><line class="thin" x1="145" y1="20" x2="145" y2="200"/><line class="thin" x1="25" y1="50" x2="175" y2="50"/><line class="thin" x1="25" y1="80" x2="175" y2="80"/><line class="thin" x1="25" y1="110" x2="175" y2="110"/><line class="thin" x1="25" y1="140" x2="175" y2="140"/><line class="thin" x1="25" y1="170" x2="175" y2="170"/><rect x="25" y="20" width="150" height="180"/></svg>`
      },
      answer: 0.2, tol: 0.0001,
      explain: R`The shaded block covers $\frac{2}{5}$ of the width and $\frac{3}{6}$ of the height, so it is $\frac{2}{5} \times \frac{3}{6} = \frac{6}{30} = \frac{1}{5}$ of the whole. Counting cells agrees: 6 shaded cells out of $5 \times 6 = 30$ cells.
        <br><i>Common errors:</i> adding the fractions ($\frac{2}{5} + \frac{3}{6}$) instead of multiplying, and comparing shaded cells to unshaded cells ($\frac{6}{24}$ or $\frac{1}{4}$).`
    },

    /* ================= NO7  Comparing, ordering, and converting rational numbers ================= */
    {
      id: 'NO7-01', topic: 'NO7', type: 'mc', diff: 1,
      stem: R`Which list is in order from least to greatest?`,
      choices: [R`$0.4, 0.35, \frac{1}{3}$`, R`$0.35, 0.4, \frac{1}{3}$`, R`$0.35, \frac{1}{3}, 0.4$`, R`$\frac{1}{3}, 0.35, 0.4$`], answer: 3,
      explain: R`Write everything as a decimal: $\frac{1}{3} = 0.333\ldots$, $0.35$, and $0.40$. Then $0.333\ldots < 0.35 < 0.40$.
        <br><i>Common errors:</i> listing the numbers from greatest to least (choice A), treating $\frac{1}{3}$ as the greatest of the three (choice B), and swapping $0.35$ and $\frac{1}{3}$ (choice C).`
    },
    {
      id: 'NO7-02', topic: 'NO7', type: 'num', diff: 2,
      stem: R`What percent is equal to $0.065$?`,
      answer: 6.5, tol: 0.001, unit: '%',
      explain: R`A percent is a number out of 100, so multiply by 100: $0.065 \times 100 = 6.5$. That is, $0.065 = \frac{6.5}{100} = 6.5\%$.
        <br><i>Common errors:</i> moving the decimal point one place too far (65%) or in the wrong direction (0.65% or 0.00065%).`
    },
    {
      id: 'NO7-03', topic: 'NO7', type: 'mc', diff: 1,
      stem: R`Which of these is NOT equal to $40\%$?`,
      choices: [R`$0.4$`, R`$\frac{2}{5}$`, R`$\frac{4}{10}$`, R`$\frac{4}{100}$`], answer: 3,
      explain: R`$40\% = \frac{40}{100} = \frac{4}{10} = \frac{2}{5} = 0.4$, so choices A, B, and C are all equal to $40\%$. The fraction $\frac{4}{100} = 0.04 = 4\%$ is only one tenth as large.
        <br><i>Common error:</i> mixing up $\frac{4}{10}$ and $\frac{4}{100}$ (tenths and hundredths).`
    },
    {
      id: 'NO7-04', topic: 'NO7', type: 'multi', diff: 2,
      stem: R`Which TWO of these are equal to $\frac{3}{8}$?`,
      choices: [R`$0.38$`, R`$0.375$`, R`$3.8\%$`, R`$37.5\%$`, R`$0.0375$`], answer: [1, 3],
      explain: R`$3 \div 8 = 0.375$, and $0.375 = 37.5\%$.
        <br><i>Common errors:</i> rounding $0.375$ to $0.38$ (not equal), and slipping by a factor of 10 in the percent ($3.8\%$ and $0.0375 = 3.75\%$).`
    },
    {
      id: 'NO7-05', topic: 'NO7', type: 'mc', diff: 2, task: [7],
      stem: R`Kai says, "$0.6$ is less than $0.45$ because 6 is less than 45." Which statement best describes Kai's misconception?`,
      choices: [
        R`Kai should have compared the numerators of $\frac{6}{10}$ and $\frac{45}{100}$ directly.`,
        R`Kai is correct, because a decimal with more digits is always greater.`,
        R`Kai compared 6 and 45 as whole numbers instead of comparing place values; $0.6 = 0.60$, which is greater than $0.45$.`,
        R`Kai should have converted $0.6$ to $6\%$, which is less than $45\%$.`
      ], answer: 2,
      explain: R`Kai ignores the place values of the digits. Writing both with hundredths, $0.6 = 0.60 = \frac{60}{100}$ and $0.45 = \frac{45}{100}$, and $60 > 45$, so $0.6 > 0.45$.
        <br><i>Common errors in the choices:</i> comparing numerators when the denominators differ (choice A) and trusting the length of the decimal (choice B, the same mistake Kai made); and a conversion error, since $0.6 = 60\%$, not $6\%$ (choice D).`
    },
    {
      id: 'NO7-06', topic: 'NO7', type: 'mc', diff: 3,
      stem: R`Which fraction is closest to $\frac{1}{2}$?`,
      choices: [R`$\frac{3}{7}$`, R`$\frac{4}{9}$`, R`$\frac{5}{11}$`, R`$\frac{7}{12}$`], answer: 2, order: 'fixed',
      explain: R`Find how far each fraction is from $\frac{1}{2}$: $\frac{1}{2} - \frac{3}{7} = \frac{1}{14}$, $\frac{1}{2} - \frac{4}{9} = \frac{1}{18}$, $\frac{1}{2} - \frac{5}{11} = \frac{1}{22}$, and $\frac{7}{12} - \frac{1}{2} = \frac{1}{12}$. The smallest distance is $\frac{1}{22}$, so $\frac{5}{11}$ is closest.
        <br><i>Common error:</i> thinking that the fraction whose numerator and denominator are the closest in size (or the one with the smallest numbers) is closest to a half.`
    },

    /* ================= NO8  Ratios, rates, and percents ================= */
    {
      id: 'NO8-01', topic: 'NO8', type: 'mc', diff: 1,
      stem: R`A bag holds 8 red marbles and 12 blue marbles. What is the ratio of red marbles to all of the marbles in the bag?`,
      choices: [R`$3:5$`, R`$5:2$`, R`$2:5$`, R`$2:3$`], answer: 2,
      explain: R`There are $8 + 12 = 20$ marbles in all, so the ratio of red to all is $8:20 = 2:5$.
        <br><i>Common errors:</i> comparing red to blue ($8:12 = 2:3$, choice D), using blue to all ($12:20 = 3:5$, choice A), and writing the ratio backward ($5:2$, choice B).`
    },
    {
      id: 'NO8-02', topic: 'NO8', type: 'num', diff: 2,
      stem: R`Sam walks 2.5 miles in 50 minutes at a steady pace. What is Sam's speed in miles per hour?`,
      answer: 3, tol: 0, unit: 'miles per hour',
      explain: R`In 60 minutes, Sam walks $2.5 \times \frac{60}{50} = 3$ miles. Or find the rate per minute, $2.5 \div 50 = 0.05$ mile per minute, and multiply by 60 minutes: $0.05 \times 60 = 3$.
        <br><i>Common errors:</i> stopping at the rate per minute (0.05) and flipping the rate to minutes per mile (20).`
    },
    {
      id: 'NO8-03', topic: 'NO8', type: 'mc', diff: 2, calc: true,
      stem: R`Which package of rice is the best buy (the lowest price per ounce)?`,
      choices: [R`12 oz for \$2.40`, R`20 oz for \$3.80`, R`16 oz for \$3.28`, R`8 oz for \$1.68`], answer: 1,
      explain: R`Divide each price by the number of ounces: $\frac{2.40}{12} = 0.200$, $\frac{3.80}{20} = 0.190$, $\frac{3.28}{16} = 0.205$, and $\frac{1.68}{8} = 0.210$ dollars per ounce. The lowest is $0.19$, the 20-ounce package.
        <br><i>Common errors:</i> choosing the lowest total price (the 8-ounce package) or the largest package without computing, rather than comparing unit prices.`
    },
    {
      id: 'NO8-04', topic: 'NO8', type: 'num', diff: 2, calc: true,
      stem: R`A backpack that normally costs \$48 is on sale for 35% off. What is the sale price, in dollars?`,
      answer: 31.2, tol: 0.001, unit: 'dollars',
      explain: R`Paying 35% off means paying $100\% - 35\% = 65\%$ of the price: $0.65 \times 48 = 31.20$ dollars. Or find the discount, $0.35 \times 48 = 16.80$, and subtract: $48 - 16.80 = 31.20$.
        <br><i>Common error:</i> stopping at the discount (16.80), which is the amount saved, not the sale price.`
    },
    {
      id: 'NO8-05', topic: 'NO8', type: 'mc', diff: 2, task: [6, 7],
      stem: R`A student says that the ratios $3:5$ and $6:8$ are equal because "each number went up by 3." Which statement is correct?`,
      choices: [
        R`The student is correct: ratios are equal whenever the same amount is added to each quantity.`,
        R`The student is correct: the ratios are equal because in each ratio the two numbers differ by 2.`,
        R`The ratios are not equal. $3:5$ is equal to $6:10$, because equal ratios come from multiplying each quantity by the same number.`,
        R`The ratios are not equal. $3:5$ is equal to $9:10$.`
      ], answer: 2,
      explain: R`Equal ratios keep the same <i>multiplicative</i> relationship: $3:5 = 6:10 = 9:15$, found by multiplying both numbers by 2 or by 3. Adding the same number to both quantities changes the ratio: $\frac{3}{5} = 0.6$ but $\frac{6}{8} = 0.75$.
        <br><i>Common error:</i> thinking additive change keeps a ratio the same (choices A and B). Choice D does not follow any rule.`
    },
    {
      id: 'NO8-06', topic: 'NO8', type: 'mc', diff: 3, calc: true,
      stem: R`After a 20% discount, a bicycle costs \$96. What was the original price of the bicycle?`,
      choices: [R`\$115.20`, R`\$116`, R`\$120`, R`\$480`], answer: 2, order: 'fixed',
      explain: R`The sale price is $100\% - 20\% = 80\%$ of the original price, so $0.80 \times \text{original} = 96$, and $\text{original} = 96 \div 0.80 = 120$ dollars. Check: $0.80 \times 120 = 96$.
        <br><i>Common errors:</i> taking 20% of the sale price and adding it ($96 \times 1.2 = 115.20$), adding 20 dollars instead of a percent ($116$), and dividing by 0.2 ($480$).`
    },

    /* ================= NO9  Number theory: primes, factors, and multiples ================= */
    {
      id: 'NO9-01', topic: 'NO9', type: 'mc', diff: 1,
      stem: R`Which of these numbers is prime?`,
      choices: ['53', '55', '57', '63'], answer: 0, order: 'fixed',
      explain: R`A prime number has exactly two factors, 1 and itself. 53 is not divisible by 2, 3, 5, or 7 (and $7 \times 7 = 49$, $8^2 = 64 > 53$, so no more checks are needed), so it is prime.
        <br><i>Common errors:</i> $55 = 5 \times 11$, $57 = 3 \times 19$ (a very common one: the digits add to 12, so 3 divides it), and $63 = 7 \times 9$ are composite.`
    },
    {
      id: 'NO9-02', topic: 'NO9', type: 'multi', diff: 2,
      stem: R`Which TWO statements are true?`,
      choices: [
        R`Every odd number greater than 1 is prime.`,
        R`The number 1 is neither prime nor composite.`,
        R`The product of two prime numbers is prime.`,
        R`A composite number has more than two factors.`
      ], answer: [1, 3],
      explain: R`A prime has exactly two factors, a composite number has more than two, and 1 has only one factor, so it is neither.
        <br><i>Common errors:</i> $9 = 3 \times 3$ and $15 = 3 \times 5$ are odd numbers that are not prime, and the product of two primes always has at least the factors 1, each prime, and itself (so $3 \times 5 = 15$ is composite).`
    },
    {
      id: 'NO9-03', topic: 'NO9', type: 'num', diff: 2,
      stem: R`A teacher has 54 pencils and 36 erasers. She wants to make identical supply bags that use all of the pencils and all of the erasers. What is the greatest number of bags she can make?`,
      answer: 18, tol: 0, unit: 'bags',
      explain: R`The number of bags must divide both 54 and 36, and we want the greatest such number, the greatest common factor. $54 = 2 \times 3^3$ and $36 = 2^2 \times 3^2$, so the GCF is $2 \times 3^2 = 18$. Each bag has $54 \div 18 = 3$ pencils and $36 \div 18 = 2$ erasers.
        <br><i>Common errors:</i> finding the least common multiple (108) and stopping at a common factor that is not the greatest (such as 6 or 9).`
    },
    {
      id: 'NO9-04', topic: 'NO9', type: 'mc', diff: 2,
      stem: R`One bell rings every 9 minutes and another bell rings every 15 minutes. They ring together at 1:00 pm. How many minutes later will they next ring together?`,
      choices: ['3', '24', '45', '135'], answer: 2, order: 'fixed',
      explain: R`The next time both ring is the least common multiple of 9 and 15. $9 = 3^2$ and $15 = 3 \times 5$, so the LCM is $3^2 \times 5 = 45$. Listing multiples agrees: 9, 18, 27, 36, 45 and 15, 30, 45.
        <br><i>Common errors:</i> giving the greatest common factor (3), adding the numbers (24), and multiplying the numbers (135), which is a common multiple but not the least.`
    },
    {
      id: 'NO9-05', topic: 'NO9', type: 'num', diff: 3,
      stem: R`How many positive factors does 72 have?`,
      answer: 12, tol: 0,
      explain: R`Factors come in pairs: $1 \times 72$, $2 \times 36$, $3 \times 24$, $4 \times 18$, $6 \times 12$, $8 \times 9$. That is 6 pairs, or 12 factors: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72. The prime factorization $72 = 2^3 \times 3^2$ gives the same count: $(3 + 1)(2 + 1) = 12$.
        <br><i>Common errors:</i> counting the 6 pairs but not both members of each pair (6), and counting only the prime factors (5 with repeats, or 2 different ones).`
    },
    {
      id: 'NO9-06', topic: 'NO9', type: 'mc', diff: 2, task: [6],
      stem: R`A student says that the least common multiple of 6 and 10 is 60, because $6 \times 10 = 60$. Which statement about the student's answer is correct?`,
      choices: [
        R`The answer is correct, because the least common multiple of two numbers is always their product.`,
        R`60 is a common multiple of 6 and 10, but it is not the least; the least common multiple is 30.`,
        R`60 is the greatest common factor of 6 and 10.`,
        R`The least common multiple of 6 and 10 is 16, the sum of the numbers.`
      ], answer: 1,
      explain: R`Both 6 and 10 divide 60, so 60 is a common multiple. But $30 = 6 \times 5 = 10 \times 3$ is smaller and also a common multiple, so the LCM is 30. The product of two numbers is a common multiple, but it is the <i>least</i> one only when the numbers share no common factor (here they share a factor of 2).
        <br><i>Common errors:</i> assuming the product is always the LCM (choice A), confusing LCM with GCF (choice C), and adding (choice D).`
    },

    /* ================= NO10  Reasonableness, estimation, and mental math ================= */
    {
      id: 'NO10-01', topic: 'NO10', type: 'mc', diff: 1,
      stem: R`Which is the best estimate of $6{,}103 - 2{,}897$?`,
      choices: ['3,000', '4,000', '5,000', '9,000'], answer: 0, order: 'fixed',
      explain: R`Round each number to the nearest thousand: $6{,}000 - 3{,}000 = 3{,}000$. (The exact difference is $3{,}206$.)
        <br><i>Common errors:</i> rounding 2,897 down to 2,000 instead of up to 3,000 (giving 4,000) and adding instead of subtracting (giving 9,000).`
    },
    {
      id: 'NO10-02', topic: 'NO10', type: 'mc', diff: 2, task: [8],
      stem: R`A student multiplies $6.2 \times 4.8$ on a calculator and gets $2.976$. Which estimate shows that this answer is unreasonable?`,
      choices: [
        R`$6 + 5 = 11$, so the product should be about 11.`,
        R`$6 \times 5 = 30$, so the product should be exactly 30.`,
        R`$6 \div 5 \approx 1$, so the product should be about 1.`,
        R`$6 \times 5 = 30$, so the product should be about 30, not about 3.`
      ], answer: 3,
      explain: R`Rounding $6.2$ to 6 and $4.8$ to 5 gives $6 \times 5 = 30$, so the product should be close to 30. The calculator's $2.976$ is about ten times too small, which suggests a decimal point was keyed in the wrong place. (The exact product is $29.76$.)
        <br><i>Common errors:</i> estimating with the wrong operation (choices A and C), and treating an estimate as an exact value (choice B).`
    },
    {
      id: 'NO10-03', topic: 'NO10', type: 'mc', diff: 2,
      stem: R`Mr. Lee estimates the cost of 5 packs of pencils priced at \$1.89 each by computing $5 \times \$2$. Will the actual cost be more or less than his estimate?`,
      choices: [
        R`More, because he multiplied by a whole number.`,
        R`Less, because \$2 is greater than \$1.89.`,
        R`Exactly the same, because \$1.89 rounds to \$2.`,
        R`It cannot be known without computing $5 \times \$1.89$.`
      ], answer: 1,
      explain: R`He rounded the price <i>up</i>, from \$1.89 to \$2, so each pack is counted as costing more than it does. The estimate of \$10 is too high, and the actual cost, $5 \times 1.89 = 9.45$ dollars, is less. You can tell the direction of the error without computing the exact product.
        <br><i>Common errors:</i> ignoring the direction of rounding (choices A and D) and thinking a rounded value gives an exact result (choice C).`
    },
    {
      id: 'NO10-04', topic: 'NO10', type: 'num', diff: 1,
      stem: R`Use mental math to find $25 \times 36$.`,
      answer: 900, tol: 0,
      explain: R`Four 25s make 100, and $36 = 4 \times 9$, so $25 \times 36 = 25 \times 4 \times 9 = 100 \times 9 = 900$. Another way: $25 \times 36 = \frac{100}{4} \times 36 = 100 \times 9$.
        <br><i>Common error:</i> multiplying $25 \times 30 = 750$ and forgetting to add $25 \times 6 = 150$.`
    },
    {
      id: 'NO10-05', topic: 'NO10', type: 'multi', diff: 2,
      stem: R`Select all that apply. Which statements about the sum $\frac{7}{8} + \frac{12}{13}$ are true?`,
      choices: [R`The sum is greater than 2.`, R`The sum is less than 2.`, R`The sum is about 1.`, R`The sum is $\frac{19}{21}$.`, R`The sum is greater than 1.`], answer: [1, 4],
      explain: R`Each fraction is a little less than 1, so the sum is a little less than 2 (it is $\frac{187}{104} \approx 1.8$). Each fraction is also more than $\frac{1}{2}$, so the sum is more than 1. That makes "less than 2" and "greater than 1" the true statements.
        <br><i>Common errors:</i> adding the numerators and adding the denominators ($\frac{19}{21}$, which is less than 1, so it cannot be right for two numbers that each exceed $\frac{1}{2}$), and forgetting that each fraction is almost 1.`
    },
    {
      id: 'NO10-06', topic: 'NO10', type: 'mc', diff: 3,
      stem: R`Without finding the exact value, which quotient is less than 1?`,
      choices: [R`$7.8 \div 0.9$`, R`$0.78 \div 0.9$`, R`$7.8 \div 0.09$`, R`$0.78 \div 0.09$`], answer: 1,
      explain: R`A quotient is less than 1 only if the dividend is less than the divisor. $0.78$ is less than $0.9$, so $0.78 \div 0.9$ is less than 1 (about $0.87$). In the others, the dividend is greater than the divisor ($7.8 > 0.9$, $7.8 > 0.09$, and $0.78 > 0.09$), so each quotient is greater than 1.
        <br><i>Common errors:</i> comparing the number of digits instead of the sizes of the numbers (for example, thinking that $0.78$ is larger than $0.9$ because 78 is larger than 9).`
    }

    /* @@END-3@@ */
  );
})();
