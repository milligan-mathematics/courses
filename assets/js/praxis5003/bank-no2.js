/* Praxis 5003 bank, pass 2: Numbers and Operations (NO1-NO10), 60 more original items (NO1-07 ... NO10-08), bringing each
   topic to its target (120 in all with bank-no.js). Format and rules: ../praxis-5003-kit/SPEC-5003.md and bank-example.js.
   Keys recomputed in checks-no2.py. */
(function () {
  var R = String.raw;
  PXD.bank.push(

    /* ================= NO1  Place value (pass 2: 07-10) ================= */
    {
      id: 'NO1-07', topic: 'NO1', type: 'mc', diff: 1,
      stem: R`Which number is "four hundred two thousand, sixty-five" written in standard form?`,
      choices: ['402,065', '400,265', '42,065', '402,650'], answer: 0,
      explain: R`"Four hundred two thousand" is 402 thousands, or $402{,}000$, and "sixty-five" is 65, so the number is $402{,}000 + 65 = 402{,}065$. The hundreds place is empty, so it holds a 0.
        <br><i>Common errors:</i> writing the pieces side by side as 400, 2, 65 (400,265, choice B), reading "four hundred two" as 42 and losing the 0 (42,065, choice C), and putting the 65 in the hundreds and tens places instead of the tens and ones (402,650, choice D).`
    },
    {
      id: 'NO1-08', topic: 'NO1', type: 'num', diff: 2,
      stem: R`How many hundredths are in $3.4$?`,
      answer: 340, tol: 0, unit: 'hundredths',
      explain: R`Each whole is 100 hundredths, so 3 wholes are 300 hundredths. Each tenth is 10 hundredths, so 4 tenths are 40 hundredths. Together, $300 + 40 = 340$. Another way: $3.4 = 3.40$, which is 340 hundredths.
        <br><i>Common errors:</i> counting tenths instead of hundredths (34) and forgetting the wholes (40).`
    },
    {
      id: 'NO1-09', topic: 'NO1', type: 'mc', diff: 2, task: [2],
      stem: R`A student claims, "Rounding a number always makes it larger." The teacher asks the class for a counterexample. Which rounding is a counterexample to the claim?`,
      choices: [
        R`Rounding 4,670 to the nearest hundred`,
        R`Rounding 38 to the nearest ten`,
        R`Rounding 6,314 to the nearest thousand`,
        R`Rounding 0.96 to the nearest tenth`
      ], answer: 2,
      explain: R`A counterexample is one case where the claim fails. $6{,}314$ rounded to the nearest thousand is $6{,}000$, which is <i>smaller</i> than $6{,}314$.
        <br>The other three support the claim: $4{,}670 \to 4{,}700$, $38 \to 40$, and $0.96 \to 1.0$ each get larger. (Rounding makes a number larger when the digit to the right of the rounding place is 5 or more, and smaller when it is 4 or less.)`
    },
    {
      id: 'NO1-10', topic: 'NO1', type: 'mc', diff: 3,
      stem: R`A number rounds to $4.5$ when it is rounded to the nearest tenth, and it rounds to $5$ when it is rounded to the nearest whole number. Which number could it be?`,
      choices: ['4.46', '4.49', '4.54', '4.56'], answer: 2, order: 'fixed',
      explain: R`Rounding to the nearest tenth gives $4.5$ for numbers from $4.45$ up to (but not including) $4.55$. Rounding to the nearest whole number gives $5$ for numbers from $4.5$ up. Both are true only from $4.5$ up to $4.55$, and of the choices only $4.54$ is in that range.
        <br><i>Common errors:</i> $4.46$ and $4.49$ round to $4.5$ in the tenths place but to $4$ as whole numbers (the tenths digit is less than 5); $4.56$ rounds to $4.6$, not $4.5$.`
    },

    /* ================= NO2  Problem situations and inverse operations (pass 2: 07-16) ================= */
    {
      id: 'NO2-07', topic: 'NO2', type: 'mc', diff: 1,
      stem: R`A baker packs 6 rolls in each bag. She has 75 rolls. How many bags can she fill completely?`,
      choices: ['13', '69', '12', '450'], answer: 2,
      explain: R`$75 \div 6 = 12$ with remainder 3. Twelve bags use $72$ rolls, and the 3 rolls left over are not enough to fill another bag, so she can fill 12 bags completely.
        <br><i>Common errors:</i> rounding up to 13 (that would answer "How many bags are needed to hold all of the rolls?"), subtracting ($75 - 6 = 69$), and multiplying ($75 \times 6 = 450$).`
    },
    {
      id: 'NO2-08', topic: 'NO2', type: 'num', diff: 2,
      stem: R`A 38-inch ribbon is cut into 8 equal pieces. How long is each piece, in inches? Enter your answer as a decimal.`,
      answer: 4.75, tol: 0.001, unit: 'inches',
      explain: R`Sharing 38 equally among 8 pieces is $38 \div 8 = 4$ with remainder 6, and the remaining 6 inches are shared too: $\frac{6}{8} = 0.75$. Each piece is $4.75$ inches long. Check: $8 \times 4.75 = 38$.
        <br><i>Common errors:</i> writing the remainder as the decimal part ($4.6$) and multiplying instead of dividing ($38 \times 8 = 304$).`
    },
    {
      id: 'NO2-09', topic: 'NO2', type: 'mc', diff: 2, task: [3],
      stem: R`A teacher wants a story problem that matches $4 \times 6$ as an <i>array</i>. Which story fits?`,
      choices: [
        R`A theater has 4 rows with 6 seats in each row. How many seats are there?`,
        R`A theater has 4 seats in the front row and 6 seats in the next row. How many seats are in those two rows?`,
        R`A theater has 24 seats and 6 of them are filled. How many seats are empty?`,
        R`A theater has 4 times as many seats as a gym that has 6 seats. How many seats does the theater have?`
      ], answer: 0,
      explain: R`An array has rows and columns: 4 rows of 6 seats, so $4 \times 6 = 24$ seats. Choice A is that structure.
        <br><i>Common errors:</i> choice B is <i>putting together</i> ($4 + 6$), choice C is <i>taking from</i> ($24 - 6$), and choice D is a multiplicative <i>comparison</i> ("4 times as many"). Choice D also uses $4 \times 6$, but it is a comparison, not an array.`
    },
    {
      id: 'NO2-10', topic: 'NO2', type: 'num', diff: 2,
      stem: R`A school play sold 148 tickets on Friday. On Saturday it sold 3 times as many tickets as on Friday. On Sunday it sold 97 fewer tickets than on Saturday. How many tickets did the play sell on the three days in all?`,
      answer: 939, tol: 0, unit: 'tickets',
      explain: R`Saturday: $3 \times 148 = 444$ tickets. Sunday: $444 - 97 = 347$ tickets. In all: $148 + 444 + 347 = 939$ tickets.
        <br><i>Common errors:</i> reading "3 times as many" as "3 more" ($148 + 151 + 54 = 353$) and adding the 97 instead of subtracting it ($148 + 444 + 541 = 1{,}133$).`
    },
    {
      id: 'NO2-11', topic: 'NO2', type: 'mc', diff: 2,
      stem: R`Mia had some stickers. She gave 14 stickers to a friend and now has 23 stickers. Which equation can be used to find how many stickers Mia had at first?`,
      choices: [R`$23 - 14 = \square$`, R`$14 \times 23 = \square$`, R`$14 + 23 = \square$`, R`$23 \div 14 = \square$`], answer: 2,
      explain: R`The story is $\square - 14 = 23$: the unknown is the amount she started with. Undo giving 14 away by adding 14 back: $14 + 23 = 37$ stickers. Check: $37 - 14 = 23$.
        <br><i>Common errors:</i> choosing the operation that matches the word "gave" ($23 - 14 = 9$) instead of working out which number is unknown, and using multiplication or division, which the story does not call for.`
    },
    {
      id: 'NO2-12', topic: 'NO2', type: 'multi', diff: 2,
      stem: R`Which TWO problems can be solved with $36 \div 4$?`,
      choices: [
        R`36 stickers are shared equally among 4 children. How many stickers does each child get?`,
        R`A 36-foot rope is cut into pieces that are each 4 feet long. How many pieces are there?`,
        R`A child has 36 stickers and gets 4 more. How many stickers does the child have now?`,
        R`Each of 4 boxes holds 36 books. How many books are in the boxes?`
      ], answer: [0, 1],
      explain: R`Division fits two kinds of stories. <i>Sharing</i> asks for the size of each group: $36 \div 4 = 9$ stickers each. <i>Measuring</i> asks for the number of groups of a given size: $36 \div 4 = 9$ pieces of rope.
        <br><i>Common errors:</i> choice C is an adding-to story ($36 + 4$) and choice D is equal groups with the total unknown ($4 \times 36$).`
    },
    {
      id: 'NO2-13', topic: 'NO2', type: 'num', diff: 3, calc: true,
      stem: R`A hiking trail is $12\frac{1}{2}$ miles long. On the first day a group hikes $\frac{1}{5}$ of the trail. On the second day the group hikes $3\frac{1}{4}$ miles. How many miles of the trail are left? Enter your answer as a decimal.`,
      answer: 6.75, tol: 0.001, unit: 'miles',
      explain: R`First day: $\frac{1}{5} \times 12\frac{1}{2} = \frac{1}{5} \times 12.5 = 2.5$ miles. Together with the second day, the group hiked $2.5 + 3.25 = 5.75$ miles, so $12.5 - 5.75 = 6.75$ miles are left.
        <br><i>Common errors:</i> treating $\frac{1}{5}$ as $\frac{1}{5}$ of a mile ($12.5 - 0.2 - 3.25 = 9.05$) and forgetting the second day ($12.5 - 2.5 = 10$).`
    },
    {
      id: 'NO2-14', topic: 'NO2', type: 'mc', diff: 1,
      stem: R`Ana jumped $4.87$ meters in the long jump. Ben jumped $5.42$ meters. How many meters farther did Ben jump than Ana?`,
      choices: ['0.65', '1.45', '10.29', '0.55'], answer: 3,
      explain: R`"How many farther" is a comparison, so subtract: $5.42 - 4.87 = 0.55$. Check: $4.87 + 0.55 = 5.42$.
        <br><i>Common errors:</i> subtracting the smaller digit from the larger in each place ($1.45$), forgetting to reduce the tenths digit after regrouping the hundredths ($0.65$), and adding ($10.29$).`
    },
    {
      id: 'NO2-15', topic: 'NO2', type: 'mc', diff: 2, task: [6],
      stem: R`A store had 240 pens. It sold 85 pens and then received 3 boxes of 24 pens each. A student solved the problem and showed this work.
        <div class="work">$240 - 85 + 3 = 158$</div>
        Which statement about the student's work is correct?`,
      choices: [
        R`The work is correct: the store now has 158 pens.`,
        R`The student should have used $3 \times 24 = 72$ for the new pens, so the store now has 227 pens.`,
        R`The student should have added 85 instead of subtracting it, so the store now has 328 pens.`,
        R`The student should have multiplied $240 \times 3$ for the boxes, so the store now has 635 pens.`
      ], answer: 1,
      explain: R`The 3 is the number of <i>boxes</i>, not the number of pens. Each box has 24 pens, so the new pens are $3 \times 24 = 72$. Then $240 - 85 + 72 = 155 + 72 = 227$ pens.
        <br><i>Common errors:</i> using the 3 as a count of pens (choice A, 158), and the changes of operation in choices C and D, which the story does not support (the pens sold are taken away, and the boxes are added in groups of 24).`
    },
    {
      id: 'NO2-16', topic: 'NO2', type: 'mc', diff: 2,
      stem: R`The quotient $47 \div 6$ is 7 with a remainder of 5. Which problem is answered by the number 8?`,
      choices: [
        R`Shirts are packed 6 to a box. How many boxes are needed to pack all 47 shirts?`,
        R`Shirts are packed 6 to a box. How many boxes can be filled completely with 47 shirts?`,
        R`Shirts are packed 6 to a box. How many shirts are left over after filling as many boxes as possible?`,
        R`47 shirts are shared equally among 6 children, with no shirt cut up. How many shirts does each child get?`
      ], answer: 0,
      explain: R`The 5 leftover shirts still have to go somewhere, so one more box is needed: $7 + 1 = 8$ boxes. The remainder is handled differently in each story.
        <br><i>Common errors:</i> choices B and D are answered by the whole-number quotient, 7, and choice C is answered by the remainder, 5.`
    },

    /* ================= NO3  Algorithms and strategies (pass 2: 07-12) ================= */
    {
      id: 'NO3-07', topic: 'NO3', type: 'num', diff: 1,
      stem: R`The partial products for $47 \times 63$ are shown. What is the missing partial product?
        <br>$40 \times 60 = 2400$<br>$40 \times 3 = ?$<br>$7 \times 60 = 420$<br>$7 \times 3 = 21$`,
      answer: 120, tol: 0,
      explain: R`The missing partial product is $40 \times 3 = 120$. Check: $2400 + 120 + 420 + 21 = 2961 = 47 \times 63$.
        <br><i>Common errors:</i> forgetting that the 4 in 47 is worth 40, so $4 \times 3 = 12$, and adding instead of multiplying ($40 + 3 = 43$).`
    },
    {
      id: 'NO3-08', topic: 'NO3', type: 'mc', diff: 2, task: [6],
      stem: R`To find $126 \div 6$, Omar thinks, "$120 \div 6 = 20$ and $6 \div 6 = 1$, so the answer is $21$." Which statement about Omar's strategy is true?`,
      choices: [
        R`It works: 126 is split into $120 + 6$ and each part is divided by 6, because $(120 + 6) \div 6 = 120 \div 6 + 6 \div 6$.`,
        R`It does not work, because a number that is being divided cannot be split into parts.`,
        R`It works only because 126 happens to be a multiple of 6.`,
        R`It does not work, because the divisor 6 should also be split, as in $3 + 3$.`
      ], answer: 0,
      explain: R`Splitting the number being divided into friendly parts and dividing each part is a valid strategy: $126 = 120 + 6$, so $126 \div 6 = 20 + 1 = 21$. It works because dividing a sum by a number is the same as dividing each addend by that number (for example $127 \div 6 = 20 + \frac{7}{6}$ also holds).
        <br><i>Common errors:</i> believing that a dividend can never be split (choice B), and believing that the divisor has to be split as well (choice D; splitting the divisor does not work, because $96 \div (10 + 2)$ is not $96 \div 10 + 96 \div 2$).`
    },
    {
      id: 'NO3-09', topic: 'NO3', type: 'mc', diff: 3, task: [6, 7],
      stem: R`Pia finds $96 \div 12$ by splitting the divisor: "$12 = 10 + 2$, so $96 \div 10 = 9.6$ and $96 \div 2 = 48$, and $9.6 + 48 = 57.6$." Which statement is correct?`,
      choices: [
        R`Pia's method is correct, and $96 \div 12 = 57.6$.`,
        R`Splitting the divisor does not work: $96 \div 12 = 8$, but $96 \div 10 + 96 \div 2 = 57.6$. A sum can be split when it is the number being divided, not when it is the divisor.`,
        R`Pia's method would work if she subtracted the two parts: $48 - 9.6 = 38.4$.`,
        R`Pia's error was in $96 \div 10$, which should be $0.96$.`
      ], answer: 1,
      explain: R`Check by multiplying: $12 \times 8 = 96$, so $96 \div 12 = 8$. Dividing by $10 + 2$ is not the same as dividing by 10 and by 2 and adding: $\frac{96}{10 + 2} \ne \frac{96}{10} + \frac{96}{2}$. The "split the numbers" idea works for $(a + b) \div c$ but not for $a \div (b + c)$.
        <br><i>Common errors:</i> assuming that division spreads over a sum the way multiplication does (choice A) and trying to repair the method with a different operation (choice C). $96 \div 10 = 9.6$ is correct (choice D).`
    },
    {
      id: 'NO3-10', topic: 'NO3', type: 'multi', diff: 2,
      stem: R`Which TWO strategies give the correct value of $25 \times 48$?`,
      choices: [
        R`$(25 \times 50) - (25 \times 2)$`,
        R`$(25 \times 40) + (25 \times 8)$`,
        R`$(25 \times 50) - 2$`,
        R`$(25 \times 40) + 8$`,
        R`$(25 + 40) \times (25 + 8)$`
      ], answer: [0, 1],
      explain: R`Both are partial-product strategies. $48 = 50 - 2$, so $25 \times 48 = 25 \times 50 - 25 \times 2 = 1250 - 50 = 1200$. Also $48 = 40 + 8$, so $25 \times 48 = 1000 + 200 = 1200$.
        <br><i>Common errors:</i> adjusting by 2 instead of by $25 \times 2$ ($1250 - 2 = 1248$), multiplying only one part ($1000 + 8 = 1008$), and adding the parts before multiplying ($65 \times 33 = 2145$).`
    },
    {
      id: 'NO3-11', topic: 'NO3', type: 'mc', diff: 2, task: [1],
      stem: R`A teacher shows the subtraction $62 - 38$ and regroups 62 as 5 tens and 12 ones. Which statement best explains why the regrouping works?`,
      choices: [
        R`$62 = 50 + 12$, so the number keeps the same value, and having 12 ones makes it possible to subtract 8 ones.`,
        R`The 2 in the ones place is changed to 12 so that it is bigger than 8; the number is now 72.`,
        R`It is a rule that you always cross out the tens digit and put a 1 in front of the ones digit, and no reason is needed.`,
        R`The ones digits are subtracted the other way around ($8 - 2 = 6$), so no regrouping is really needed.`
      ], answer: 0,
      explain: R`Regrouping rewrites 62 without changing its value: 6 tens and 2 ones is the same amount as 5 tens and 12 ones. Now each place can be subtracted: $12 - 8 = 4$ ones and $5 - 3 = 2$ tens, so $62 - 38 = 24$.
        <br><i>Common errors:</i> thinking the number changes (choice B, since $72 - 38 = 34$ would be a different problem), memorizing the move as a rule (choice C), and subtracting the smaller digit from the larger (choice D, which gives 36).`
    },
    {
      id: 'NO3-12', topic: 'NO3', type: 'num', diff: 2,
      stem: R`The two-digit number $\square 8$ is multiplied by 6, and the product is 468. What digit goes in the box?`,
      answer: 7, tol: 0,
      explain: R`Ones: $6 \times 8 = 48$, so write 8 and carry 4. Tens: $6 \times \square + 4$ must end in 6 and give 46, so $6 \times \square = 42$ and $\square = 7$. Check: $78 \times 6 = 468$.
        <br><i>Common error:</i> forgetting the carried 4, so that $6 \times \square$ is expected to end in 6 (which suggests 6, since $6 \times 6 = 36$); but $68 \times 6 = 408$, not 468.`
    },

    /* ================= NO4  Fraction concepts (pass 2: 07-14) ================= */
    {
      id: 'NO4-07', topic: 'NO4', type: 'mc', diff: 1,
      stem: R`Which expression is NOT equal to $\frac{5}{6}$?`,
      choices: [
        R`$5 \times \frac{1}{6}$`,
        R`$\frac{1}{6} + \frac{1}{6} + \frac{1}{6} + \frac{1}{6} + \frac{1}{6}$`,
        R`$5 \div 6$`,
        R`$6 \times \frac{1}{5}$`
      ], answer: 3,
      explain: R`The fraction $\frac{5}{6}$ is 5 pieces of size $\frac{1}{6}$, which is $5 \times \frac{1}{6}$ and also $\frac{1}{6}$ added 5 times. A fraction bar also means division, so $\frac{5}{6} = 5 \div 6$. But $6 \times \frac{1}{5} = \frac{6}{5}$, which is greater than 1.
        <br><i>Common error:</i> swapping the numerator and the denominator.`
    },
    {
      id: 'NO4-08', topic: 'NO4', type: 'num', diff: 2,
      stem: R`How many fourths are in $3\frac{1}{2}$?`,
      answer: 14, tol: 0, unit: 'fourths',
      explain: R`Each whole has 4 fourths, so 3 wholes have 12 fourths. One half is 2 fourths. Together, $12 + 2 = 14$ fourths. Check: $3\frac{1}{2} \div \frac{1}{4} = \frac{7}{2} \times 4 = 14$.
        <br><i>Common errors:</i> counting the half as one fourth ($12 + 1 = 13$) and counting halves instead of fourths (7).`
    },
    {
      id: 'NO4-09', topic: 'NO4', type: 'mc', diff: 2,
      stem: R`Point $P$ is shown on the number line. Which fraction names the location of point $P$?`,
      figure: {
        type: 'svg', alt: 'A number line from 0 to 2 with the whole numbers 0, 1 and 2 labeled and a tick mark every one fourth, so there are 3 unlabeled tick marks between each pair of whole numbers. A point labeled P is on the number line between 1 and 2, one tick mark to the right of 1.',
        svg: R`<svg viewBox="0 0 360 110"><line x1="30" y1="70" x2="330" y2="70"/><line class="thin" x1="30" y1="61" x2="30" y2="79"/><text class="up" x="30" y="96" text-anchor="middle">0</text><line class="thin" x1="67.5" y1="65" x2="67.5" y2="75"/><line class="thin" x1="105" y1="65" x2="105" y2="75"/><line class="thin" x1="142.5" y1="65" x2="142.5" y2="75"/><line class="thin" x1="180" y1="61" x2="180" y2="79"/><text class="up" x="180" y="96" text-anchor="middle">1</text><line class="thin" x1="217.5" y1="65" x2="217.5" y2="75"/><line class="thin" x1="255" y1="65" x2="255" y2="75"/><line class="thin" x1="292.5" y1="65" x2="292.5" y2="75"/><line class="thin" x1="330" y1="61" x2="330" y2="79"/><text class="up" x="330" y="96" text-anchor="middle">2</text><circle class="pt" cx="217.5" cy="70" r="5"/><text class="up" x="217.5" y="52" text-anchor="middle">P</text></svg>`
      },
      choices: [R`$\frac{5}{8}$`, R`$\frac{6}{4}$`, R`$\frac{5}{4}$`, R`$\frac{5}{2}$`], answer: 2,
      explain: R`Each unit on the number line is cut into 4 equal parts, so each tick mark is a fourth. Point $P$ is 1 whole and 1 fourth from 0, which is 5 fourths: $\frac{5}{4}$.
        <br><i>Common errors:</i> using the total number of parts on the whole line (8) as the denominator ($\frac{5}{8}$), counting the tick mark at 0 as the first part ($\frac{6}{4}$), and using the number of wholes on the line as the denominator ($\frac{5}{2}$).`
    },
    {
      id: 'NO4-10', topic: 'NO4', type: 'mc', diff: 2, task: [2],
      stem: R`A student, Ravi, says, "When you multiply two numbers, the product is always greater than both of the numbers." Which multiplication is a counterexample to Ravi's claim?`,
      choices: [R`$3 \times 4$`, R`$2 \times 1\frac{1}{2}$`, R`$\frac{3}{4} \times 8$`, R`$5 \times 2$`], answer: 2,
      explain: R`A counterexample is a case where the claim fails. $\frac{3}{4} \times 8 = 6$, and 6 is less than 8, so the product is not greater than both factors: multiplying by a number less than 1 made the other factor smaller.
        <br>The others support Ravi: $3 \times 4 = 12$, $2 \times 1\frac{1}{2} = 3$, and $5 \times 2 = 10$ are each greater than both of their factors.`
    },
    {
      id: 'NO4-11', topic: 'NO4', type: 'multi', diff: 2,
      stem: R`Select all that apply. Which statements are true?`,
      choices: [
        R`$\frac{1}{10}$ is less than $\frac{1}{8}$.`,
        R`$\frac{1}{4}$ is 4 times as large as $\frac{1}{16}$.`,
        R`$3 \times \frac{1}{6} = \frac{1}{2}$`,
        R`$\frac{1}{12}$ is greater than $\frac{1}{9}$.`,
        R`$7 \times \frac{1}{8}$ is greater than 1.`
      ], answer: [0, 1, 2],
      explain: R`Cutting a whole into more equal pieces makes each piece smaller, so $\frac{1}{10} < \frac{1}{8}$ is true and $\frac{1}{12} > \frac{1}{9}$ is false. Four pieces of size $\frac{1}{16}$ make $\frac{4}{16} = \frac{1}{4}$, and $3 \times \frac{1}{6} = \frac{3}{6} = \frac{1}{2}$. Seven eighths is less than 1, because it takes 8 of them to make a whole.
        <br><i>Common error:</i> comparing unit fractions by their denominators as whole numbers (bigger denominator, bigger fraction).`
    },
    {
      id: 'NO4-12', topic: 'NO4', type: 'mc', diff: 2,
      stem: R`Nora and Pablo each have an identical candy bar. Nora eats $\frac{3}{4}$ of her bar and Pablo eats $\frac{2}{3}$ of his bar. Who ate more, and why?`,
      choices: [
        R`Nora ate more, because $\frac{3}{4} > \frac{2}{3}$ (as twelfths, $\frac{9}{12} > \frac{8}{12}$).`,
        R`Nora ate more, because 3 is greater than 2.`,
        R`They ate the same amount, because each of them has one piece left.`,
        R`Pablo ate more, because thirds are larger pieces than fourths.`
      ], answer: 0,
      explain: R`With the same size bar, compare the fractions: $\frac{3}{4} = \frac{9}{12}$ and $\frac{2}{3} = \frac{8}{12}$, so Nora ate more. Another way: Nora has $\frac{1}{4}$ of a bar left and Pablo has $\frac{1}{3}$ left, and $\frac{1}{4} < \frac{1}{3}$, so Nora has less left over.
        <br><i>Common errors:</i> comparing numerators alone (choice B names the right person but gives a reason that does not work: $\frac{3}{8}$ has a larger numerator than $\frac{2}{3}$ and is still the smaller fraction), thinking one piece left means equal amounts, since the pieces are different sizes (choice C), and paying attention to the piece size only (choice D).`
    },
    {
      id: 'NO4-13', topic: 'NO4', type: 'num', diff: 2,
      stem: R`Of a garden, $\frac{3}{4}$ is planted with vegetables. Of the vegetable part, $\frac{2}{3}$ is planted with tomatoes. What fraction of the whole garden is planted with tomatoes? Enter your answer as a fraction.`,
      answer: 0.5, tol: 0.0001,
      explain: R`"$\frac{2}{3}$ of $\frac{3}{4}$" is a product: $\frac{2}{3} \times \frac{3}{4} = \frac{6}{12} = \frac{1}{2}$. Check: one fourth of the garden is a vegetable "part", so $\frac{2}{3}$ of 3 fourths is 2 fourths, which is $\frac{1}{2}$.
        <br><i>Common errors:</i> answering $\frac{2}{3}$ (the fraction of the vegetable part, not of the whole garden) and adding the fractions ($\frac{3}{4} + \frac{2}{3} = \frac{17}{12}$, which is more than the whole garden).`
    },
    {
      id: 'NO4-14', topic: 'NO4', type: 'multi', diff: 2,
      stem: R`Which TWO expressions are equal to $\frac{17}{5}$?`,
      choices: [R`$3 + \frac{2}{5}$`, R`$3 + \frac{2}{3}$`, R`$17 \times \frac{1}{5}$`, R`$17 \div 15$`, R`$5 \times \frac{1}{17}$`], answer: [0, 2],
      explain: R`$\frac{17}{5} = \frac{15}{5} + \frac{2}{5} = 3 + \frac{2}{5}$, and $\frac{17}{5}$ is also 17 pieces of size $\frac{1}{5}$, which is $17 \times \frac{1}{5}$.
        <br><i>Common errors:</i> $3 + \frac{2}{3} = 3\frac{2}{3}$ (the remainder 2 goes over the denominator 5, not 3), $17 \div 15 = 1\frac{2}{15}$, and $5 \times \frac{1}{17} = \frac{5}{17}$ (numerator and denominator swapped).`
    },

    /* ================= NO5  Order of operations and properties (pass 2: 07-10) ================= */
    {
      id: 'NO5-07', topic: 'NO5', type: 'num', diff: 3,
      stem: R`What is the value of $3 + 2 \times (8 - 2^3 \div 4)^2$?`,
      answer: 75, tol: 0,
      explain: R`Work inside the parentheses first, using the order of operations there too: $2^3 = 8$, then $8 \div 4 = 2$, then $8 - 2 = 6$. Now the exponent: $6^2 = 36$. Then multiply: $2 \times 36 = 72$. Finally add: $3 + 72 = 75$.
        <br><i>Common errors:</i> subtracting before dividing inside the parentheses ($(8 - 8) \div 4 = 0$, which gives 3) and adding before multiplying at the end ($(3 + 2) \times 36 = 180$).`
    },
    {
      id: 'NO5-08', topic: 'NO5', type: 'mc', diff: 2,
      stem: R`Which expression uses the distributive property to find $7 \times 98$?`,
      choices: [R`$(7 \times 100) - (7 \times 2)$`, R`$(7 \times 100) - 2$`, R`$(7 \times 90) + 8$`, R`$(7 \times 100) + (7 \times 2)$`], answer: 0,
      explain: R`Write $98 = 100 - 2$. The distributive property multiplies 7 by <i>each</i> part: $7 \times 98 = 7 \times (100 - 2) = 7 \times 100 - 7 \times 2 = 700 - 14 = 686$.
        <br><i>Common errors:</i> multiplying only one part by 7 ($700 - 2 = 698$ and $630 + 8 = 638$) and adding the correction instead of subtracting it ($700 + 14 = 714$).`
    },
    {
      id: 'NO5-09', topic: 'NO5', type: 'mc', diff: 2, task: [6],
      stem: R`A student, Leah, rewrote $3 \times (4 + 5)$ as $3 \times 4 + 5$ and said she used the distributive property. Which statement about Leah's work is correct?`,
      choices: [
        R`The distributive property multiplies 3 by <i>each</i> number in the parentheses, so the correct rewrite is $3 \times 4 + 3 \times 5$.`,
        R`Leah's work is correct, because multiplication is done before addition.`,
        R`Leah's work is correct, because the two expressions are equal to 27.`,
        R`The distributive property can only be used with subtraction, not with addition.`
      ], answer: 0,
      explain: R`The original expression is $3 \times 9 = 27$. The distributive property gives $3 \times 4 + 3 \times 5 = 12 + 15 = 27$. Leah's expression is $3 \times 4 + 5 = 12 + 5 = 17$, which is a different number, so it is not equal to the original.
        <br><i>Common errors:</i> multiplying only the first number in the parentheses (Leah's slip) and defending it with the order of operations (choice B, which does not make $17$ equal to $27$).`
    },
    {
      id: 'NO5-10', topic: 'NO5', type: 'multi', diff: 2,
      stem: R`Select all that apply. Which equations are true?`,
      choices: [
        R`$20 \div 4 \times 5 = 25$`,
        R`$20 \div 4 \times 5 = 1$`,
        R`$2 + 3^2 \times 2 = 20$`,
        R`$(2 + 3)^2 \times 2 = 20$`,
        R`$18 - 6 + 2 = 10$`
      ], answer: [0, 2],
      explain: R`Multiplication and division go left to right: $20 \div 4 \times 5 = 5 \times 5 = 25$. With the exponent first, then multiplication, then addition: $2 + 3^2 \times 2 = 2 + 9 \times 2 = 2 + 18 = 20$.
        <br><i>Common errors:</i> doing the multiplication before the division ($20 \div (4 \times 5) = 1$), putting the 2 and 3 in parentheses so the exponent applies to 5 ($(2 + 3)^2 \times 2 = 50$), and doing the addition before the subtraction ($18 - 8 = 10$ instead of $12 + 2 = 14$).`
    },

    /* ================= NO6  Models and representations of operations (pass 2: 07-14) ================= */
    {
      id: 'NO6-07', topic: 'NO6', type: 'mc', diff: 1,
      stem: R`The number line shows one jump. Which equation does it show?`,
      figure: {
        type: 'svg', alt: 'A number line from 0 to 2 with the whole numbers 0, 1 and 2 labeled and a tick mark every one fourth. One arrow starts at the seventh tick mark to the right of 0 and jumps to the left over three tick marks, landing on 1.',
        svg: R`<svg viewBox="0 0 360 110"><line x1="30" y1="70" x2="330" y2="70"/><line class="thin" x1="30" y1="61" x2="30" y2="79"/><text class="up" x="30" y="96" text-anchor="middle">0</text><line class="thin" x1="67.5" y1="65" x2="67.5" y2="75"/><line class="thin" x1="105" y1="65" x2="105" y2="75"/><line class="thin" x1="142.5" y1="65" x2="142.5" y2="75"/><line class="thin" x1="180" y1="61" x2="180" y2="79"/><text class="up" x="180" y="96" text-anchor="middle">1</text><line class="thin" x1="217.5" y1="65" x2="217.5" y2="75"/><line class="thin" x1="255" y1="65" x2="255" y2="75"/><line class="thin" x1="292.5" y1="65" x2="292.5" y2="75"/><line class="thin" x1="330" y1="61" x2="330" y2="79"/><text class="up" x="330" y="96" text-anchor="middle">2</text><path class="b" d="M292.5,70 Q236.2,20 180,70"/><polygon class="b" style="fill:#009CDE" points="180,70 185.2,59.3 191.2,66.1"/></svg>`
      },
      choices: [
        R`$\frac{7}{4} - \frac{3}{4} = 1$`,
        R`$\frac{7}{4} - \frac{1}{4} = \frac{3}{2}$`,
        R`$\frac{7}{4} + \frac{3}{4} = \frac{5}{2}$`,
        R`$\frac{7}{4} - \frac{1}{2} = \frac{5}{4}$`
      ], answer: 0,
      explain: R`The arrow starts at the 7th tick mark, $\frac{7}{4}$. It jumps left (subtracting) over 3 tick marks of size $\frac{1}{4}$, a length of $\frac{3}{4}$, and lands on 1. So the picture shows $\frac{7}{4} - \frac{3}{4} = 1$.
        <br><i>Common errors:</i> reading the jump as one tick mark (choice B), reading a jump to the left as addition (choice C), and reading the jump as two tick marks (choice D). Each of the other equations is true, but it does not match this picture.`
    },
    {
      id: 'NO6-08', topic: 'NO6', type: 'mc', diff: 2,
      stem: R`The number line shows four jumps of the same length, starting at 0. Which division equation does the number line show?`,
      figure: {
        type: 'svg', alt: 'A number line from 0 to 3 with the whole numbers 0, 1, 2 and 3 labeled and a tick mark every one fourth. Four arrows of the same length jump to the right, one after another, each covering three tick marks. The last arrow lands on 3.',
        svg: R`<svg viewBox="0 0 360 110"><line x1="30" y1="70" x2="330" y2="70"/><line class="thin" x1="30" y1="61" x2="30" y2="79"/><text class="up" x="30" y="96" text-anchor="middle">0</text><line class="thin" x1="55" y1="65" x2="55" y2="75"/><line class="thin" x1="80" y1="65" x2="80" y2="75"/><line class="thin" x1="105" y1="65" x2="105" y2="75"/><line class="thin" x1="130" y1="61" x2="130" y2="79"/><text class="up" x="130" y="96" text-anchor="middle">1</text><line class="thin" x1="155" y1="65" x2="155" y2="75"/><line class="thin" x1="180" y1="65" x2="180" y2="75"/><line class="thin" x1="205" y1="65" x2="205" y2="75"/><line class="thin" x1="230" y1="61" x2="230" y2="79"/><text class="up" x="230" y="96" text-anchor="middle">2</text><line class="thin" x1="255" y1="65" x2="255" y2="75"/><line class="thin" x1="280" y1="65" x2="280" y2="75"/><line class="thin" x1="305" y1="65" x2="305" y2="75"/><line class="thin" x1="330" y1="61" x2="330" y2="79"/><text class="up" x="330" y="96" text-anchor="middle">3</text><path class="a" d="M30,70 Q67.5,26 105,70"/><polygon class="a" style="fill:#F36E24" points="105,70 94.4,64.5 101.3,58.7"/><path class="b" d="M105,70 Q142.5,26 180,70"/><polygon class="b" style="fill:#009CDE" points="180,70 169.4,64.5 176.3,58.7"/><path class="a" d="M180,70 Q217.5,26 255,70"/><polygon class="a" style="fill:#F36E24" points="255,70 244.4,64.5 251.3,58.7"/><path class="b" d="M255,70 Q292.5,26 330,70"/><polygon class="b" style="fill:#009CDE" points="330,70 319.4,64.5 326.3,58.7"/></svg>`
      },
      choices: [
        R`$3 \div \frac{3}{4} = 4$`,
        R`$\frac{3}{4} \div 3 = \frac{1}{4}$`,
        R`$4 \div \frac{3}{4} = \frac{16}{3}$`,
        R`$3 \div \frac{1}{4} = 12$`
      ], answer: 0,
      explain: R`Each jump covers 3 tick marks of size $\frac{1}{4}$, so each jump has length $\frac{3}{4}$, and 4 jumps of $\frac{3}{4}$ reach 3. The picture asks how many jumps of $\frac{3}{4}$ fit in 3, which is $3 \div \frac{3}{4} = 4$.
        <br><i>Common errors:</i> using the spacing of the tick marks ($\frac{1}{4}$) as the length of a jump (choice D), and turning the division around (choices B and C). Each of the other equations is true, but it does not match this picture.`
    },
    {
      id: 'NO6-09', topic: 'NO6', type: 'mc', diff: 1, task: [4],
      stem: R`A teacher uses a $10$-by-$10$ grid as one whole. Ava shades 30 squares blue and 45 different squares red. Which equation does the shaded grid model?`,
      choices: [R`$0.30 + 0.45 = 0.75$`, R`$0.3 + 0.45 = 0.48$`, R`$0.30 + 0.45 = 7.5$`, R`$0.30 \times 0.45 = 0.135$`], answer: 0,
      explain: R`Each of the 100 squares is $0.01$ of the whole. Thirty squares are $0.30$ and 45 squares are $0.45$, and together $30 + 45 = 75$ squares are shaded: $0.30 + 0.45 = 0.75$.
        <br><i>Common errors:</i> lining up the digits instead of the decimal points ($0.3 + 0.45 = 0.48$ is false; the sum is $0.75$), a decimal point in the wrong place (7.5), and multiplying (the grid shows two separate parts joined, not a part of a part).`
    },
    {
      id: 'NO6-10', topic: 'NO6', type: 'num', diff: 3,
      stem: R`An area model for $2.5 \times 1.2$ has its sides split as $2 + 0.5$ and $1 + 0.2$. What area belongs in the rectangle marked $?$, in square units? Enter your answer as a decimal. (Figure not drawn to scale)`,
      figure: {
        type: 'svg', alt: 'An area model for 2.5 times 1.2, not drawn to scale. The width is split into 1 and 0.2, and the height is split into 2 and 0.5. The upper left rectangle has area 2, the upper right has area 0.4, and the lower left has area 0.5. The lower right rectangle, which is 0.2 wide and 0.5 tall, is marked with a question mark.',
        svg: R`<svg viewBox="0 0 330 180"><rect x="60" y="35" width="250" height="125"/><line x1="268" y1="35" x2="268" y2="160"/><line x1="60" y1="135" x2="310" y2="135"/><text class="up" x="164" y="26" text-anchor="middle">1</text><text class="up" x="289" y="26" text-anchor="middle">0.2</text><text class="up" x="38" y="90" text-anchor="middle">2</text><text class="up" x="34" y="152.5" text-anchor="middle">0.5</text><text class="up" x="164" y="90" text-anchor="middle">2</text><text class="up" x="289" y="90" text-anchor="middle">0.4</text><text class="up" x="164" y="152.5" text-anchor="middle">0.5</text><text class="up" x="289" y="152.5" text-anchor="middle">?</text></svg>`
      },
      answer: 0.1, tol: 0.0001, unit: 'square units',
      explain: R`The marked rectangle is $0.2$ wide and $0.5$ tall, so its area is $0.2 \times 0.5$. Five tenths of two tenths is ten hundredths: $0.2 \times 0.5 = 0.10 = 0.1$. Check: $2 + 0.4 + 0.5 + 0.1 = 3 = 2.5 \times 1.2$.
        <br><i>Common errors:</i> adding the sides ($0.2 + 0.5 = 0.7$), losing track of the decimal places ($0.01$), and ignoring them (1).`
    },
    {
      id: 'NO6-11', topic: 'NO6', type: 'mc', diff: 2,
      stem: R`Starting at $3\frac{3}{4}$, the number $\frac{3}{4}$ is subtracted again and again until the result is 0: $3\frac{3}{4},\ 3,\ 2\frac{1}{4},\ 1\frac{1}{2},\ \frac{3}{4},\ 0$. Which division equation does this repeated subtraction show?`,
      choices: [
        R`$3\frac{3}{4} \div \frac{3}{4} = 5$`,
        R`$3\frac{3}{4} \div 3 = 1\frac{1}{4}$`,
        R`$\frac{3}{4} \div 3\frac{3}{4} = \frac{1}{5}$`,
        R`$5 \div \frac{3}{4} = 6\frac{2}{3}$`
      ], answer: 0,
      explain: R`Subtracting the same amount, $\frac{3}{4}$, over and over until nothing is left counts how many $\frac{3}{4}$'s are in $3\frac{3}{4}$. It takes 5 subtractions, so $3\frac{3}{4} \div \frac{3}{4} = 5$.
        <br><i>Common errors:</i> dividing by the wrong number or turning the division around (choices B, C, D). Each of those equations is true, but none of them is the one the subtraction counts.`
    },
    {
      id: 'NO6-12', topic: 'NO6', type: 'multi', diff: 1,
      stem: R`A rectangle has an area of $18$ square units and a width of $3$ units. Which TWO equations can be used to find the length $\ell$ of the rectangle?`,
      choices: [R`$3 \times \ell = 18$`, R`$18 \div 3 = \ell$`, R`$18 - 3 = \ell$`, R`$3 \div 18 = \ell$`], answer: [0, 1],
      explain: R`Area is width times length, so $3 \times \ell = 18$. Dividing the area by the width undoes the multiplication: $\ell = 18 \div 3 = 6$.
        <br><i>Common errors:</i> subtracting the width from the area ($18 - 3 = 15$) and dividing the other way around ($3 \div 18 = \frac{1}{6}$).`
    },
    {
      id: 'NO6-13', topic: 'NO6', type: 'num', diff: 2,
      stem: R`A tape diagram is a bar of length $63$ that is split into 9 equal boxes. Four of the boxes are shaded. What number does the shaded part of the bar represent?`,
      answer: 28, tol: 0,
      explain: R`Each box is $63 \div 9 = 7$. Four boxes are $4 \times 7 = 28$. This is $\frac{4}{9}$ of 63: $\frac{4}{9} \times 63 = 28$.
        <br><i>Common errors:</i> stopping at the size of one box (7) and finding the unshaded part ($5 \times 7 = 35$).`
    },
    {
      id: 'NO6-14', topic: 'NO6', type: 'mc', diff: 3, task: [1, 4],
      stem: R`A teacher wants to show why $\frac{1}{2} \div 3 = \frac{1}{6}$. Which drawing best shows this?`,
      choices: [
        R`Shade half of a circle, then cut the shaded half into 3 equal parts. Each part is $\frac{1}{6}$ of the whole circle.`,
        R`Cut a whole circle into 3 equal parts. Each part is $\frac{1}{3}$ of the whole circle.`,
        R`Shade half of a circle three times. The total shaded is $\frac{3}{2}$ of a circle.`,
        R`Cut 3 circles in half. There are 6 halves.`
      ], answer: 0,
      explain: R`Dividing $\frac{1}{2}$ by 3 means sharing one half into 3 equal parts. Cutting the shaded half into 3 equal parts makes 6 equal parts in the whole circle (2 halves of 3 parts each), so each part is $\frac{1}{6}$ of the whole.
        <br><i>Common errors:</i> dividing a whole into 3 parts and ignoring the half ($\frac{1}{3}$, choice B), multiplying by 3 ($\frac{1}{2} \times 3 = \frac{3}{2}$, choice C), and dividing 3 by $\frac{1}{2}$ ($3 \div \frac{1}{2} = 6$, choice D).`
    },

    /* ================= NO7  Comparing, ordering, and converting rational numbers (pass 2: 07-12) ================= */
    {
      id: 'NO7-07', topic: 'NO7', type: 'mc', diff: 1,
      stem: R`Which decimal is equal to $\frac{7}{20}$?`,
      choices: ['0.7', '0.35', '3.5', '0.035'], answer: 1,
      explain: R`Make the denominator 100: $\frac{7}{20} = \frac{35}{100} = 0.35$. Check: $7 \div 20 = 0.35$.
        <br><i>Common errors:</i> reading the fraction as $\frac{7}{10}$ (0.7) and putting the decimal point in the wrong place (3.5 or 0.035).`
    },
    {
      id: 'NO7-08', topic: 'NO7', type: 'num', diff: 2, calc: true,
      stem: R`What is $\frac{7}{16}$ written as a decimal?`,
      answer: 0.4375, tol: 0.0001,
      explain: R`A fraction means division: $\frac{7}{16} = 7 \div 16 = 0.4375$. Check: $0.4375 \times 16 = 7$.
        <br><i>Common errors:</i> dividing the other way around ($16 \div 7 \approx 2.29$) and stopping the division early ($0.43$).`
    },
    {
      id: 'NO7-09', topic: 'NO7', type: 'mc', diff: 2,
      stem: R`Which list is in order from greatest to least?`,
      choices: [
        R`$\frac{3}{5},\ 65\%,\ \frac{2}{3},\ 0.7$`,
        R`$0.7,\ \frac{2}{3},\ 65\%,\ \frac{3}{5}$`,
        R`$0.7,\ 65\%,\ \frac{2}{3},\ \frac{3}{5}$`,
        R`$\frac{2}{3},\ 0.7,\ 65\%,\ \frac{3}{5}$`
      ], answer: 1,
      explain: R`Write each number as a decimal: $0.7$, $\frac{2}{3} = 0.666\ldots$, $65\% = 0.65$, and $\frac{3}{5} = 0.6$. From greatest to least: $0.7,\ 0.666\ldots,\ 0.65,\ 0.6$.
        <br><i>Common errors:</i> listing from least to greatest (choice A), swapping $65\%$ and $\frac{2}{3}$ (choice C), and swapping $\frac{2}{3}$ and $0.7$ (choice D).`
    },
    {
      id: 'NO7-10', topic: 'NO7', type: 'multi', diff: 2,
      stem: R`Select all that apply. Which numbers are between $\frac{1}{4}$ and $\frac{1}{2}$?`,
      choices: [R`$0.3$`, R`$35\%$`, R`$\frac{4}{9}$`, R`$\frac{3}{5}$`, R`$\frac{1}{5}$`], answer: [0, 1, 2],
      explain: R`As decimals, $\frac{1}{4} = 0.25$ and $\frac{1}{2} = 0.5$. Then $0.3$, $35\% = 0.35$, and $\frac{4}{9} = 0.444\ldots$ are all between $0.25$ and $0.5$.
        <br><i>Common errors:</i> $\frac{3}{5} = 0.6$ is greater than $\frac{1}{2}$ and $\frac{1}{5} = 0.2$ is less than $\frac{1}{4}$. Comparing fractions by their denominators alone does not work.`
    },
    {
      id: 'NO7-11', topic: 'NO7', type: 'mc', diff: 2, task: [7],
      stem: R`A student, Jo, writes $\frac{2}{5} = 2.5$. Which statement best explains Jo's error?`,
      choices: [
        R`Jo divided the denominator by the numerator ($5 \div 2$). The fraction $\frac{2}{5}$ means $2 \div 5 = 0.4$.`,
        R`Jo should have added the numerator and the denominator: $2 + 5 = 7$, so $0.7$.`,
        R`Jo is correct, because the numerator goes before the decimal point and the denominator goes after it.`,
        R`Jo should have multiplied the numerator and the denominator: $2 \times 5 = 10$, so $0.10$.`
      ], answer: 0,
      explain: R`A fraction bar means division of the numerator by the denominator: $\frac{2}{5} = 2 \div 5 = 0.4$. Jo's $2.5$ is $5 \div 2$, the division turned around. A quick check shows it cannot be right: $\frac{2}{5}$ is less than 1, but $2.5$ is greater than 1.
        <br><i>Common errors:</i> choices B and D combine the two numbers with the wrong operation, and choice C treats the fraction as two separate digits.`
    },
    {
      id: 'NO7-12', topic: 'NO7', type: 'mc', diff: 3,
      stem: R`Which statement is true?`,
      choices: [R`$\frac{5}{6} > 0.83$`, R`$\frac{5}{6} = 0.83$`, R`$\frac{5}{6} < 0.8$`, R`$\frac{5}{6} < 83\%$`], answer: 0,
      explain: R`$\frac{5}{6} = 5 \div 6 = 0.8333\ldots$, which is a little greater than $0.83$ (and than $83\%$) and greater than $0.8$. So $\frac{5}{6} > 0.83$ is true.
        <br><i>Common errors:</i> treating a repeating decimal as if it stopped at the hundredths ($\frac{5}{6} = 0.83$), and comparing $\frac{5}{6}$ with $0.8$ or $83\%$ the wrong way around.`
    },

    /* ================= NO8  Ratios, rates, and percents (pass 2: 07-14) ================= */
    {
      id: 'NO8-07', topic: 'NO8', type: 'mc', diff: 1,
      stem: R`In a class there are 12 girls and 15 boys. Which ratio compares the number of boys to the number of girls?`,
      choices: [R`$4:5$`, R`$5:4$`, R`$5:9$`, R`$4:9$`], answer: 1,
      explain: R`The ratio of boys to girls is $15:12$. Dividing both numbers by 3 gives $5:4$.
        <br><i>Common errors:</i> writing the ratio backward ($4:5$, girls to boys), comparing boys to everyone in the class ($15:27 = 5:9$), and comparing girls to everyone ($12:27 = 4:9$).`
    },
    {
      id: 'NO8-08', topic: 'NO8', type: 'num', diff: 2,
      stem: R`A faucet fills a tank at a steady rate of 15 liters every 6 minutes. At this rate, how many liters does it fill in 22 minutes?`,
      answer: 55, tol: 0, unit: 'liters',
      explain: R`The unit rate is $15 \div 6 = 2.5$ liters per minute. In 22 minutes: $2.5 \times 22 = 55$ liters.
        <br><i>Common errors:</i> stopping at the unit rate (2.5) and adding instead of scaling ($15 + 22 = 37$).`
    },
    {
      id: 'NO8-09', topic: 'NO8', type: 'num', diff: 2,
      stem: R`Twelve is $30\%$ of a number. What is the number?`,
      answer: 40, tol: 0,
      explain: R`Since $30\%$ of the number is 12, $0.30 \times \text{number} = 12$, so the number is $12 \div 0.30 = 40$. Check: $0.30 \times 40 = 12$. Another way: 10% of the number is $12 \div 3 = 4$, so 100% is 40.
        <br><i>Common errors:</i> finding 30% of 12 ($3.6$) and multiplying instead of dividing ($12 \times 30 = 360$).`
    },
    {
      id: 'NO8-10', topic: 'NO8', type: 'mc', diff: 2,
      stem: R`Which table of $(x, y)$ pairs shows a proportional relationship, with $y$ always the same multiple of $x$?`,
      choices: [
        R`$(1, 4),\ (2, 7),\ (3, 10)$`,
        R`$(2, 6),\ (4, 12),\ (5, 15)$`,
        R`$(1, 3),\ (2, 5),\ (3, 7)$`,
        R`$(2, 4),\ (3, 6),\ (4, 7)$`
      ], answer: 1,
      explain: R`In a proportional relationship $y \div x$ is the same for every pair. For choice B, $\frac{6}{2} = \frac{12}{4} = \frac{15}{5} = 3$, so $y = 3x$.
        <br><i>Common errors:</i> choices A and C go up by the same amount each time (3 and 2), but they do not start at 0, so $y \div x$ changes ($y = 3x + 1$ and $y = 2x + 1$). Choice D matches $y = 2x$ for the first two pairs only: $\frac{7}{4} \ne 2$.`
    },
    {
      id: 'NO8-11', topic: 'NO8', type: 'mc', diff: 2, task: [6],
      stem: R`A shop raises the price of a \$50 jacket by 20%. Later it takes 20% off the new price. A student says, "The two changes cancel, so the jacket costs \$50 again." What does the jacket actually cost after both changes?`,
      choices: [R`\$40`, R`\$48`, R`\$50`, R`\$60`], answer: 1, order: 'fixed',
      explain: R`After the 20% increase the price is $1.20 \times 50 = 60$ dollars. The 20% discount is taken off \$60, not off \$50: $0.80 \times 60 = 48$ dollars. The student's claim fails because the two percents are taken of different amounts.
        <br><i>Common errors:</i> believing that $+20\%$ and $-20\%$ cancel (\$50), stopping after the increase (\$60), and applying only the discount to the original price (\$40).`
    },
    {
      id: 'NO8-12', topic: 'NO8', type: 'num', diff: 2, calc: true,
      stem: R`A restaurant bill is \$64. A 15% tip is added to the bill. What is the total, including the tip, in dollars?`,
      answer: 73.6, tol: 0.001, unit: 'dollars',
      explain: R`The tip is $0.15 \times 64 = 9.60$ dollars, so the total is $64 + 9.60 = 73.60$ dollars. Or find $115\%$ of the bill: $1.15 \times 64 = 73.60$.
        <br><i>Common errors:</i> stopping at the tip (9.60) and adding 15 dollars instead of 15 percent ($64 + 15 = 79$).`
    },
    {
      id: 'NO8-13', topic: 'NO8', type: 'multi', diff: 2,
      stem: R`Which TWO of these describe the same rate as 150 miles in 3 hours?`,
      choices: [R`50 miles in 1 hour`, R`300 miles in 6 hours`, R`75 miles in 2 hours`, R`450 miles in 6 hours`], answer: [0, 1],
      explain: R`The rate is $150 \div 3 = 50$ miles per hour. Then 50 miles in 1 hour matches, and 300 miles in 6 hours is $300 \div 6 = 50$ miles per hour, which also matches (both numbers were doubled).
        <br><i>Common errors:</i> 75 miles in 2 hours is $37.5$ miles per hour, and 450 miles in 6 hours is 75 miles per hour. Doubling only the hours, or halving only the miles, changes the rate.`
    },
    {
      id: 'NO8-14', topic: 'NO8', type: 'mc', diff: 2,
      stem: R`A town's population grew from 800 to 1,000. By what percent did the population increase?`,
      choices: ['20%', '25%', '125%', '200%'], answer: 1, order: 'fixed',
      explain: R`The increase is $1000 - 800 = 200$. Percent increase compares the change to the <i>original</i> amount: $\frac{200}{800} = 0.25 = 25\%$.
        <br><i>Common errors:</i> comparing the change to the new population ($\frac{200}{1000} = 20\%$), giving the new population as a percent of the old one ($125\%$), and reading the change of 200 as 200 percent.`
    },

    /* ================= NO9  Number theory (pass 2: 07-10) ================= */
    {
      id: 'NO9-07', topic: 'NO9', type: 'num', diff: 2,
      stem: R`What is the sum of all of the prime numbers that are less than 20?`,
      answer: 77, tol: 0,
      explain: R`The primes less than 20 are $2, 3, 5, 7, 11, 13, 17, 19$. Their sum is $2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 = 77$.
        <br><i>Common errors:</i> counting 1 as a prime (78) and leaving out 2 because it is even (75).`
    },
    {
      id: 'NO9-08', topic: 'NO9', type: 'mc', diff: 2, task: [2],
      stem: R`A student says, "If a number is divisible by both 4 and 6, then it must be divisible by 24." Which number is a counterexample to the student's claim?`,
      choices: ['48', '12', '72', '24'], answer: 1,
      explain: R`A counterexample is a number that is divisible by 4 and by 6 but not by 24. $12 = 4 \times 3 = 6 \times 2$, but $12 \div 24$ is not a whole number.
        <br>The other numbers are divisible by 24 ($24 = 24 \times 1$, $48 = 24 \times 2$, $72 = 24 \times 3$), so they agree with the claim. The claim fails because 4 and 6 share a factor of 2: the least common multiple of 4 and 6 is 12, not 24.`
    },
    {
      id: 'NO9-09', topic: 'NO9', type: 'multi', diff: 2,
      stem: R`Which TWO numbers are divisible by both 6 and 9?`,
      choices: ['45', '48', '54', '90', '24'], answer: [2, 3],
      explain: R`A number divisible by both 6 and 9 is divisible by their least common multiple, 18. Both $54 = 18 \times 3$ and $90 = 18 \times 5$ are. Check with the tests: even, with digit sum divisible by 9 ($5 + 4 = 9$ and $9 + 0 = 9$).
        <br><i>Common errors:</i> 45 is divisible by 9 but not 6 (it is odd), and 48 and 24 are divisible by 6 but not 9 (their digit sums are 12 and 6).`
    },
    {
      id: 'NO9-10', topic: 'NO9', type: 'num', diff: 3,
      stem: R`Two numbers have a greatest common factor of 6 and a least common multiple of 180. One of the numbers is 36. What is the other number?`,
      answer: 30, tol: 0,
      explain: R`For two numbers, (GCF) $\times$ (LCM) $=$ (the product of the numbers). So the product is $6 \times 180 = 1080$, and the other number is $1080 \div 36 = 30$. Check: $36 = 2^2 \times 3^2$ and $30 = 2 \times 3 \times 5$ have GCF $2 \times 3 = 6$ and LCM $2^2 \times 3^2 \times 5 = 180$.
        <br><i>Common errors:</i> dividing the LCM by the known number ($180 \div 36 = 5$) and multiplying the GCF by the known number ($6 \times 36 = 216$).`
    },

    /* ================= NO10  Reasonableness, estimation, and mental math (pass 2: 07-08) ================= */
    {
      id: 'NO10-07', topic: 'NO10', type: 'mc', diff: 1,
      stem: R`Which is the best estimate of $4{,}812 \div 62$?`,
      choices: ['8', '80', '800', '8,000'], answer: 1, order: 'fixed',
      explain: R`Round to numbers that divide easily: $4{,}812 \approx 4{,}800$ and $62 \approx 60$, and $4{,}800 \div 60 = 80$. (The exact quotient is about $77.6$.)
        <br><i>Common errors:</i> slipping a place when dividing the zeros (8 or 800).`
    },
    {
      id: 'NO10-08', topic: 'NO10', type: 'mc', diff: 3, task: [8],
      stem: R`A student reports that $19.8\%$ of $245$ is $485$. Which reasoning correctly shows that this answer is not reasonable?`,
      choices: [
        R`$19.8\%$ is about $20\%$, which is $\frac{1}{5}$, and $\frac{1}{5}$ of $245$ is about $50$, so $485$ is far too large.`,
        R`$19.8\%$ is almost $100\%$, so the answer should be close to $245$.`,
        R`A percent of a number is always greater than the number, so the answer should be greater than $245$.`,
        R`$\frac{1}{5}$ of $245$ is about $120$, so the answer should be about $120$.`
      ], answer: 0,
      explain: R`Round the percent to a friendly benchmark: $19.8\% \approx 20\% = \frac{1}{5}$. One fifth of about 250 is about 50, so the answer should be close to 50. The student's 485 is about ten times too large (the exact answer is $48.51$, so a decimal point was misplaced).
        <br><i>Common errors:</i> the other reasonings use false facts: $19.8\%$ is not close to $100\%$, a percent below $100\%$ of a number is less than the number, and $\frac{1}{5}$ of 245 is about 50, not 120.`
    }
  );
})();
