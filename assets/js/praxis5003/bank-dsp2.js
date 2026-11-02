/* Praxis 5003 diagnostic: question bank, pass 2, Data, Statistics, and Probability: 10 more items that bring DSP to its targets
   (DSP2 +4, DSP3 +2, DSP4 +2, DSP5 +2; DSP1 was already at 6), 40 in all with pass 1 (../praxis-5003-bank-d/bank-dsp.js).
   Item format and rules: ../praxis-5003-kit/SPEC-5003.md and bank-example.js. Every key is recomputed by checks-dsp2.py.
   Figures use the kit's own types (dot, scatter, box), so no raw SVG. DRAFT: validate.js and the in-browser previews have not
   been run on this file. */
(function () {
  var R = String.raw;
  PXD.bank.push(

    /* ================= DSP2  Mean, median, mode, and range ================= */
    {
      id: 'DSP2-07', topic: 'DSP2', type: 'num', diff: 2,
      stem: R`The dot plot shows the number of glasses of water each of 15 people drank yesterday. What is the mean number of glasses of water?`,
      figure: {
        type: 'dot', alt: 'Dot plot of glasses of water on a number line from 0 to 8: five dots at 2, three dots at 3, one dot at 4, two dots at 5, one dot at 6, and three dots at 7.',
        values: [2, 2, 2, 2, 2, 3, 3, 3, 4, 5, 5, 6, 7, 7, 7], range: [0, 8], step: 1, xlabel: 'Glasses of water'
      },
      answer: 4, tol: 0, unit: 'glasses',
      explain: R`The mean is the total divided by the number of values, and every dot counts. The total is $5 \times 2 + 3 \times 3 + 4 + 2 \times 5 + 6 + 3 \times 7 = 60$ glasses for 15 people, so the mean is $60 \div 15 = 4$.
        <br><i>Common errors:</i> 3, the median, the 8th of the 15 values; 2, the mode, the tallest column of dots; and 4.5, found by adding the six different values (2, 3, 4, 5, 6, 7) and dividing by 6, which ignores how many dots are at each value.`
    },
    {
      id: 'DSP2-08', topic: 'DSP2', type: 'mc', diff: 2, task: [1],
      stem: R`Ms. Cole's class has four stacks of cubes with 3, 5, 6, and 10 cubes. The students move cubes from the taller stacks to the shorter stacks, one at a time, until all four stacks are the same height. A student asks, "Why do we end up with stacks of 6?" Which explanation is best?`,
      choices: [
        R`Six is the median of 3, 5, 6, and 10, and equal stacks always end up at the median.`,
        R`Six is halfway between the smallest stack, 3, and the largest stack, 10.`,
        R`Moving cubes keeps the total at 24, so four equal stacks must each have $24 \div 4 = 6$ cubes. That is the mean.`,
        R`Six is the stack height that occurs most often.`
      ], answer: 2,
      explain: R`Moving a cube from one stack to another does not change the total, which is $3 + 5 + 6 + 10 = 24$ cubes. If the four stacks end up the same height, each has $24 \div 4 = 6$ cubes. This is the "fair share" meaning of the mean.
        <br><i>Common errors:</i> the median of 3, 5, 6, and 10 is 5.5, not 6, and equal stacks do not end at the median in general; halfway between 3 and 10 is 6.5; and no height occurs more than once, so there is no mode.`
    },
    {
      id: 'DSP2-09', topic: 'DSP2', type: 'multi', diff: 3,
      stem: R`Six runners finished a race in 10, 12, 14, 15, 18, and 40 minutes. The time of 40 minutes was recorded by mistake and is removed, leaving five times. Select all of the statements that are true about the five remaining times, compared with the original six.`,
      choices: [
        R`The mean decreases.`,
        R`The median stays the same.`,
        R`The range decreases from 30 to 8.`,
        R`The mean decreases by more than the median does.`,
        R`The median decreases by more than the mean does.`
      ], answer: [0, 2, 3],
      explain: R`Original: mean $109 \div 6 \approx 18.2$, median $(14 + 15) \div 2 = 14.5$, range $40 - 10 = 30$. Five times left: mean $69 \div 5 = 13.8$, median 14, range $18 - 10 = 8$. The mean drops by about 4.4 and the median by only 0.5.
        <br><i>Not true:</i> the median does change (14.5 to 14), and it changes much less than the mean, because removing the one very large value pulls the mean down far more than it moves the middle of the list.`
    },
    {
      id: 'DSP2-10', topic: 'DSP2', type: 'num', diff: 2,
      stem: R`A class of 10 students took a 10-point quiz. Three students scored 6, five students scored 8, and two students scored 10. What was the mean score? Enter your answer as a decimal.`,
      answer: 7.8, tol: 0.001,
      explain: R`Add all 10 scores: $3 \times 6 + 5 \times 8 + 2 \times 10 = 18 + 40 + 20 = 78$. The mean is $78 \div 10 = 7.8$.
        <br><i>Common errors:</i> 8, which is both the mode and the median and also what you get from $(6 + 8 + 10) \div 3$ by treating the three different scores as if each had one student.`
    },

    /* ================= DSP3  Reading data displays ================= */
    {
      id: 'DSP3-07', topic: 'DSP3', type: 'mc', diff: 1,
      stem: R`A cafe recorded the outdoor temperature at noon and the number of cups of hot chocolate it sold on each of 10 days. The scatter plot shows the data. Which statement best describes the pattern?`,
      figure: {
        type: 'scatter', alt: 'Scatter plot of cups of hot chocolate sold against noon temperature in degrees Fahrenheit for 10 days: (20, 47), (25, 44), (30, 42), (35, 36), (40, 35), (45, 29), (50, 25), (55, 22), (60, 16), and (65, 13). The points fall from the upper left to the lower right.',
        dots: [[20, 47], [25, 44], [30, 42], [35, 36], [40, 35], [45, 29], [50, 25], [55, 22], [60, 16], [65, 13]], xr: [10, 70], yr: [0, 60], xstep: 10, ystep: 10, xlabel: 'Noon temperature (degrees F)', ylabel: 'Cups sold'
      },
      choices: [
        R`As the temperature rises, the number of cups sold tends to rise.`,
        R`As the temperature rises, the number of cups sold tends to fall.`,
        R`There is no relationship between the temperature and the number of cups sold.`,
        R`The cafe sold about the same number of cups at every temperature.`
      ], answer: 1,
      explain: R`The points fall from the upper left to the lower right: about 47 cups were sold at 20 degrees and only about 13 at 65 degrees. Higher temperatures go with fewer cups, a negative association.
        <br><i>Common errors:</i> reading the direction backward (the points do not rise), and saying there is no relationship or no change, when the points follow a clear downward line.`
    },
    {
      id: 'DSP3-08', topic: 'DSP3', type: 'mc', diff: 2,
      stem: R`The box plot shows the scores of 40 students on a math test. About how many of the students scored higher than 86?`,
      figure: {
        type: 'box', alt: 'A horizontal box plot of test scores on a scale from 40 to 100: minimum 55, first quartile 70, median 78, third quartile 86, and maximum 97.',
        series: [{ label: 'Scores', min: 55, q1: 70, med: 78, q3: 86, max: 97 }], range: [40, 100], step: 10, xlabel: 'Test score'
      },
      choices: ['20', '30', '11', '10'], answer: 3,
      explain: R`Each section of a box plot holds about one fourth of the data. The score 86 is the third quartile, so the part of the plot to its right is the top fourth: $40 \div 4 = 10$ students.
        <br><i>Common errors:</i> 20, treating 86 like the median (half of the students); 30, the number who scored below 86; and 11, reading the distance from 86 to 97 as a number of students.`
    },

    /* ================= DSP4  Constructing and choosing displays ================= */
    {
      id: 'DSP4-07', topic: 'DSP4', type: 'mc', diff: 2,
      stem: R`A school club recorded the number of cans collected by each of five teams: 12, 35, 48, 60, and 24. A club member will make a bar graph of the data. Which vertical scale would let every bar be drawn and compared easily?`,
      choices: [
        R`From 0 to 70, with a mark every 10`,
        R`From 30 to 60, with a mark every 10`,
        R`From 0 to 70, with marks at 0, 10, 20, 40, and 70`,
        R`From 0 to 500, with a mark every 100`
      ], answer: 0,
      explain: R`A good scale starts at 0, is spaced evenly, and reaches a little above the greatest value. Marks at 0, 10, 20, ..., 70 hold all five numbers (12 to 60) and let you read each bar to about the nearest 5.
        <br><i>Common errors:</i> a scale that starts at 30 has no room for the bars of 12 and 24; marks that are not evenly spaced make the bar heights misleading; and a scale to 500 makes every bar less than one eighth of the height of the graph, so the differences are hard to see.`
    },
    {
      id: 'DSP4-08', topic: 'DSP4', type: 'mc', diff: 2,
      stem: R`A researcher has the ages, in whole years, of 50 people at a street fair. The youngest is 3 and the oldest is 87. The researcher will make a histogram, and the intervals must have equal width, must not overlap, and must include every age from 3 to 87. Which set of intervals meets all three requirements?`,
      choices: [
        R`0 to 9, 10 to 19, 20 to 39, 40 to 79, 80 to 99`,
        R`0 to 25, 20 to 45, 40 to 65, 60 to 85, 80 to 105`,
        R`0 to 19, 20 to 39, 40 to 59, 60 to 79, 80 to 99`,
        R`0 to 19, 20 to 39, 40 to 59, 60 to 79`
      ], answer: 2,
      explain: R`Each set of intervals has to be checked against the three requirements. The first set has five intervals of 20 ages each, with no overlap and no gap, and it reaches from 0 to 99, so the ages 3 to 87 all fit.
        <br><i>Common errors:</i> the second set has intervals of different widths (10, 10, 20, 40, 20); the third set overlaps (an age of 22 is in both 0 to 25 and 20 to 45); the last set stops at 79, so a person aged 80 to 87 would not be in any interval.`
    },

    /* ================= DSP5  Probability ================= */
    {
      id: 'DSP5-07', topic: 'DSP5', type: 'mc', diff: 2,
      stem: R`A spinner has ten equal sections numbered 1 through 10. The spinner is spun once. What is the probability that it lands on a prime number or a multiple of 3?`,
      choices: [R`$\frac{7}{10}$`, R`$\frac{3}{5}$`, R`$\frac{3}{25}$`, R`$\frac{1}{10}$`], answer: 1,
      explain: R`List the favorable sections. The primes are 2, 3, 5, 7 and the multiples of 3 are 3, 6, 9. Together the favorable numbers are 2, 3, 5, 6, 7, 9, which is 6 of the 10 sections: $\frac{6}{10} = \frac{3}{5}$.
        <br><i>Common errors:</i> $\frac{7}{10}$ counts the number 3 twice ($4 + 3 = 7$); $\frac{3}{25}$ multiplies $\frac{4}{10} \times \frac{3}{10}$, which would be for "and" with independent events and is not what the question asks; and $\frac{1}{10}$ counts only the number that is both prime and a multiple of 3.`
    },
    {
      id: 'DSP5-08', topic: 'DSP5', type: 'mc', diff: 2, task: [8],
      stem: R`A bag holds 24 tiles, and 5 of them are green. A teacher asks the students to estimate the probability of drawing a green tile without working it out exactly. Which estimate is most reasonable?`,
      choices: [R`About $\frac{1}{2}$`, R`About $\frac{4}{5}$`, R`About 5`, R`About $\frac{1}{5}$`], answer: 3,
      explain: R`Only 5 of the 24 tiles are green, a little more than 4 out of 20, so the probability is a little more than $\frac{1}{5}$. (Exactly, it is $\frac{5}{24} \approx 0.21$.)
        <br><i>Common errors:</i> $\frac{1}{2}$ treats "green or not green" as two equally likely outcomes; $\frac{4}{5}$ is close to the probability of a tile that is not green ($\frac{19}{24}$); and 5 is the number of green tiles, which cannot be a probability because a probability is never greater than 1.`
    }
  );
})();
