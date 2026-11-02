/* Praxis 5003 diagnostic: question bank, pass 1, Data, Statistics, and Probability (DSP1-DSP5), 6 items per topic (30).
   Item format and rules: ../praxis-5003-kit/SPEC-5003.md and bank-example.js. Every key is recomputed by checks-dsp.py.
   Raw-SVG figures (circle graph, double bar, spinners) were drawn by gen-svg-dsp.py. DRAFT: validate.js and the in-browser
   previews have not been run on this file. */
(function () {
  var R = String.raw;
  PXD.bank.push(

    /* ================= DSP1  Statistical questions and describing data ================= */
    {
      id: 'DSP1-01', topic: 'DSP1', type: 'mc', diff: 1,
      stem: R`Which of these is a statistical question?`,
      choices: [
        R`How many students are in Room 14 right now?`,
        R`How long does it take the students in our school to eat lunch?`,
        R`What is the tallest building in our state?`,
        R`How many days are in a leap year?`
      ], answer: 1,
      explain: R`A statistical question is one where you expect the answers to vary, so you need to collect data from many people or things. Lunch times differ from student to student, so asking how long the students take to eat lunch is a statistical question.
        <br><i>Common errors:</i> the other three questions each have exactly one answer (a count at one moment, one building, one number of days), so there is nothing to collect and compare.`
    },
    {
      id: 'DSP1-02', topic: 'DSP1', type: 'multi', diff: 2, task: [2],
      stem: R`Mr. Hill's students are planning a survey of the students in their school. Which TWO questions are statistical questions that the survey could answer?`,
      choices: [
        R`How many pets does each student at our school have?`,
        R`How many students are in our school's choir?`,
        R`How many students were absent last Monday?`,
        R`How many minutes do the students at our school spend on homework on a school night?`
      ], answer: [0, 3],
      explain: R`The number of pets and the minutes of homework differ from student to student, so both questions expect varied answers and need data from many students.
        <br><i>Common errors:</i> the choir count and last Monday's absences are each a single number that can be looked up, so they are not statistical questions even though they are about students.`
    },
    {
      id: 'DSP1-03', topic: 'DSP1', type: 'mc', diff: 2,
      stem: R`The dot plot shows the number of books each of 15 students read last month. Which statement best describes the data?`,
      figure: {
        type: 'dot', alt: 'Dot plot of books read last month on a number line from 0 to 15: one dot at 2, three at 3, four at 4, three at 5, two at 6, one at 7, and one at 14.',
        values: [2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 7, 14], range: [0, 15], step: 1, xlabel: 'Books read'
      },
      choices: [
        R`The data are centered near 4 books, and the value 14 is an outlier.`,
        R`The data are centered near 8 books, halfway between the least and greatest values.`,
        R`The data are spread evenly from 2 to 14 books, with no outliers.`,
        R`The data are centered near 4 books, and the value 2 is an outlier.`
      ], answer: 0,
      explain: R`Most of the dots are bunched from 3 to 6, with the middle (the 8th of 15 values) at 4. The dot at 14 is far from all the others, so it is an outlier.
        <br><i>Common errors:</i> choosing the midpoint of the scale instead of where the data pile up, ignoring the clump and the lone dot, and calling the low end an outlier when 2 is only one step from 3.`
    },
    {
      id: 'DSP1-04', topic: 'DSP1', type: 'mc', diff: 2,
      stem: R`The histogram shows how many minutes each of 28 people waited at a clinic. Which statement best describes the shape of the distribution?`,
      figure: {
        type: 'hist', alt: 'Histogram of waiting time in minutes with bins of width 10 from 0 to 60: 0 to 10 has 3 people, 10 to 20 has 10, 20 to 30 has 8, 30 to 40 has 4, 40 to 50 has 2, and 50 to 60 has 1.',
        bins: [[0, 10, 3], [10, 20, 10], [20, 30, 8], [30, 40, 4], [40, 50, 2], [50, 60, 1]], xlabel: 'Minutes waited', ylabel: 'People', ystep: 2
      },
      choices: [
        R`Skewed to the right: most people waited a shorter time, and a few waited much longer.`,
        R`Skewed to the left: most people waited a shorter time, and a few waited much longer.`,
        R`Symmetric, with the center at 30 minutes.`,
        R`Uniform: about the same number of people are in every interval.`
      ], answer: 0,
      explain: R`The tallest bars are at the low end and the bars get shorter toward the high end, so the data have a long tail to the right. That is called skewed to the right.
        <br><i>Common errors:</i> naming the skew by where the tallest bars are instead of by the direction of the tail, picking the middle of the scale as the center, and ignoring the very different bar heights.`
    },
    {
      id: 'DSP1-05', topic: 'DSP1', type: 'mc', diff: 2, task: [3],
      stem: R`A teacher's class recorded the number of hours of sleep each of 8 students got last night: 7, 9, 8, 8, 10, 7, 8, 9. Which statistical question could this data set be used to answer?`,
      choices: [
        R`How many hours of sleep do students need to be healthy?`,
        R`How many hours of sleep did the students in our class get last night?`,
        R`What time did the students in our class go to bed last night?`,
        R`How many hours of sleep did the teacher get last night?`
      ], answer: 1,
      explain: R`The data are hours of sleep for the students in the class on one night, so the question they answer is the one about the hours of sleep the students in the class got last night, and the answers vary from student to student.
        <br><i>Common errors:</i> choosing a question that needs a recommendation, a different variable (bedtime), or a different group (the teacher). A data set can only answer a question about the same variable and the same group.`
    },
    {
      id: 'DSP1-06', topic: 'DSP1', type: 'multi', diff: 3,
      stem: R`The dot plot shows the number of text messages each of 13 students sent yesterday. Select all of the statements that are true.`,
      figure: {
        type: 'dot', alt: 'Dot plot of text messages sent on a number line from 0 to 10: two dots at 1, three at 2, two at 3, no dots at 4, 5, or 6, two at 7, three at 8, and one at 9.',
        values: [1, 1, 2, 2, 2, 3, 3, 7, 7, 8, 8, 8, 9], range: [0, 10], step: 1, xlabel: 'Text messages sent'
      },
      choices: [
        R`There is a gap in the data between 3 and 7.`,
        R`The value 9 is an outlier.`,
        R`The data fall into two clusters, one from 1 to 3 and one from 7 to 9.`,
        R`The median is 7.`,
        R`The values 2 and 8 each occur three times.`
      ], answer: [0, 2, 4],
      explain: R`Nothing is plotted at 4, 5, or 6, so there is a gap, and the data form two clusters: 1 to 3 (7 values) and 7 to 9 (6 values). Both 2 and 8 have three dots.
        <br><i>Not true:</i> 9 sits right next to 8 inside its cluster, so it is not an outlier; and the median is the 7th of 13 ordered values, which is 3, not 7 (the numbers 1, 1, 2, 2, 2, 3, 3 come first).`
    },

    /* ================= DSP2  Mean, median, mode, and range ================= */
    {
      id: 'DSP2-01', topic: 'DSP2', type: 'mc', diff: 1,
      stem: R`The ages, in years, of the seven players on a youth team are 9, 12, 10, 9, 11, 9, and 13. What are the mode and the range of the ages?`,
      choices: [R`mode 9, range 4`, R`mode 9, range 13`, R`mode 10, range 4`, R`mode 4, range 9`],
      answer: 0,
      explain: R`The mode is the most frequent value: 9 appears three times. The range is the greatest value minus the least value: $13 - 9 = 4$.
        <br><i>Common errors:</i> using the greatest value as the range, using the median 10 as the mode, and swapping the two answers.`
    },
    {
      id: 'DSP2-02', topic: 'DSP2', type: 'num', diff: 2,
      stem: R`Six students took 14, 9, 21, 6, 17, and 12 minutes to finish a puzzle. What is the median number of minutes?`,
      answer: 13, tol: 0, unit: 'minutes',
      explain: R`Put the times in order first: 6, 9, 12, 14, 17, 21. With six values the median is the average of the two middle values: $(12 + 14) \div 2 = 13$.
        <br><i>Common errors:</i> averaging the middle pair of the list as written, 21 and 6, which gives 13.5; taking only one of the middle values (12 or 14); and finding the mean, about 13.2.`
    },
    {
      id: 'DSP2-03', topic: 'DSP2', type: 'mc', diff: 2,
      stem: R`The yearly pay, in thousands of dollars, of the five people who work at a small shop is 31, 33, 34, 36, and 190. A newspaper wants to describe the pay of a typical person at the shop. Which statement is correct?`,
      choices: [
        R`The mean is the best measure, because it uses every value.`,
        R`The median is the best measure, because the one very large value pulls the mean far above what most people earn.`,
        R`The mode is the best measure, because it is the most common value.`,
        R`The range is the best measure, because it shows how much the pay varies.`
      ], answer: 1,
      explain: R`The mean is $324 \div 5 = 64.8$ thousand dollars, higher than four of the five people earn, because of the 190. The median, 34 thousand dollars, is close to what most of the people earn.
        <br><i>Common errors:</i> choosing the mean because it "uses all the data" even though a very large value distorts it; choosing the mode when no value repeats; choosing the range, which measures spread and not a typical value.`
    },
    {
      id: 'DSP2-04', topic: 'DSP2', type: 'mc', diff: 2, task: [7],
      stem: R`A teacher asks a student to find the mean number of points a player scored in four games: 0, 6, 8, and 10. The student's work is shown.
        <div class="work">$0 + 6 + 8 + 10 = 24$<br>$24 \div 3 = 8$<br>The mean is 8 points.</div>
        Which statement describes the student's error?`,
      choices: [
        R`The student divided by 3 instead of 4, leaving out the game in which the player scored 0.`,
        R`The student added the four numbers incorrectly.`,
        R`The student should have found the median instead of the mean.`,
        R`The student should have divided by 24, the sum of the scores.`
      ], answer: 0,
      explain: R`The mean is the sum divided by the number of values. A score of 0 is still a value: there were four games, so the mean is $24 \div 4 = 6$ points.
        <br>The sum 24 is correct, so the addition is not the problem. Finding the median, or dividing by 24, would answer a different question.`
    },
    {
      id: 'DSP2-05', topic: 'DSP2', type: 'num', diff: 2,
      stem: R`A student's first four quiz scores are 78, 85, 90, and 75. What score on the fifth quiz would give the student a mean of exactly 85 on all five quizzes?`,
      answer: 97, tol: 0,
      explain: R`For a mean of 85 on five quizzes the five scores must total $5 \times 85 = 425$. The first four total $78 + 85 + 90 + 75 = 328$, so the fifth score must be $425 - 328 = 97$.
        <br><i>Common errors:</i> answering 85 because the goal is 85, or 82, which is only the mean of the first four scores.`
    },
    {
      id: 'DSP2-06', topic: 'DSP2', type: 'multi', diff: 3,
      stem: R`Five students practiced piano for 12, 15, 15, 16, and 17 minutes. A sixth student then joins and practices for 40 minutes. Which TWO statements are true about the new data set of six values, compared with the original five?`,
      choices: [
        R`The mean increases by more than the median does.`,
        R`The median stays the same.`,
        R`The mode stays the same.`,
        R`The range stays the same.`
      ], answer: [0, 2],
      explain: R`Original: mean 15, median 15, mode 15, range 5. With 40 added: the mean is $115 \div 6 \approx 19.2$ (up about 4.2), the median is the average of 15 and 16, which is 15.5 (up 0.5), the mode is still 15, and the range is $40 - 12 = 28$.
        <br>So the statement about the mean and the median is true, and so is the one about the mode; the median and the range both change. A very large value moves the mean much more than the median.`
    },

    /* ================= DSP3  Reading data displays ================= */
    {
      id: 'DSP3-01', topic: 'DSP3', type: 'mc', diff: 2,
      stem: R`The histogram shows the ages of the 33 people at a park one afternoon. Each bar includes its left endpoint but not its right endpoint. In which interval is the median age?`,
      figure: {
        type: 'hist', alt: 'Histogram of ages with bins of width 10 from 0 to 50: 0 to 10 has 12 people, 10 to 20 has 5, 20 to 30 has 7, 30 to 40 has 5, and 40 to 50 has 4.',
        bins: [[0, 10, 12], [10, 20, 5], [20, 30, 7], [30, 40, 5], [40, 50, 4]], xlabel: 'Age (years)', ylabel: 'People', ystep: 2
      },
      choices: [R`0 to 10`, R`10 to 20`, R`20 to 30`, R`30 to 40`], answer: 1, order: 'fixed',
      explain: R`With 33 people the median is the 17th age when they are in order. The first bar holds 12 people and the first two bars hold $12 + 5 = 17$, so the 17th person is in the 10 to 20 bar.
        <br><i>Common errors:</i> choosing the tallest bar (0 to 10), which shows the most common interval and not the middle of the data, and choosing the middle bar of the five (20 to 30).`
    },
    {
      id: 'DSP3-02', topic: 'DSP3', type: 'mc', diff: 2,
      stem: R`The scatter plot shows the hours that each of 9 students studied for a test and the student's score. Based on the pattern in the plot, which score is the most reasonable prediction for a student who studies 3.5 hours?`,
      figure: {
        type: 'scatter', alt: 'Scatter plot of test score against hours studied for 9 students: (0.5, 55), (1, 58), (1.5, 66), (2, 65), (2.5, 73), (3, 72), (4, 84), (4.5, 88), and (5, 90). The points rise from left to right.',
        dots: [[0.5, 55], [1, 58], [1.5, 66], [2, 65], [2.5, 73], [3, 72], [4, 84], [4.5, 88], [5, 90]], xr: [0, 6], yr: [40, 100], xstep: 1, ystep: 10, xlabel: 'Hours studied', ylabel: 'Test score'
      },
      choices: ['56', '66', '78', '92'], answer: 2, order: 'fixed',
      explain: R`The scores rise as study time rises. The students who studied 3 hours and 4 hours scored 72 and 84, so 3.5 hours should give a score between them, about 78.
        <br><i>Common errors:</i> picking a score from a point far to the left (56 or 66), or one above the whole pattern (92, higher than the 90 earned by a student who studied 5 hours).`
    },
    {
      id: 'DSP3-03', topic: 'DSP3', type: 'mc', diff: 2,
      stem: R`The box plots show the number of minutes the students in two classes took to finish a reading assignment. Which statement is supported by the box plots?`,
      figure: {
        type: 'box', alt: 'Two horizontal box plots on a scale from 0 to 35 minutes. Class A: minimum 8, first quartile 11, median 14, third quartile 18, maximum 24. Class B: minimum 6, first quartile 12, median 17, third quartile 22, maximum 30.',
        series: [{ label: 'Class A', min: 8, q1: 11, med: 14, q3: 18, max: 24 }, { label: 'Class B', min: 6, q1: 12, med: 17, q3: 22, max: 30 }], range: [0, 35], step: 5, xlabel: 'Minutes'
      },
      choices: [
        R`More than half of the students in Class A took longer than 14 minutes.`,
        R`About one fourth of the students in Class B took longer than 22 minutes.`,
        R`Every student in Class B took longer than every student in Class A.`,
        R`Class A has a greater range than Class B.`
      ], answer: 1,
      explain: R`Each section of a box plot holds about one fourth of the data. The part of Class B's plot to the right of the third quartile, 22, is the top fourth, so about one fourth of the Class B students took longer than 22 minutes.
        <br><i>Not supported:</i> the median 14 means half the Class A students took 14 minutes or less, so at most half took longer; the plots overlap, since Class B's fastest student (6 minutes) beat Class A's slowest (24 minutes); the ranges are 16 (Class A) and 24 (Class B), so Class B's is greater.`
    },
    {
      id: 'DSP3-04', topic: 'DSP3', type: 'num', diff: 1,
      stem: R`The circle graph shows the lunch that each of the 120 students at a school chose on one day. How many of the students chose pizza or pasta?`,
      figure: {
        type: 'svg', alt: 'Circle graph of lunch choices for 120 students: Pizza 35 percent, Tacos 30 percent, Pasta 10 percent, and Salad 25 percent.',
        svg: R`<svg viewBox="0 0 340 250"><path class="fa" d="M170 122 L170 44 A78 78 0 0 1 233.1 167.85 Z"/><text class="up" x="251.97" y="78.23" text-anchor="start">Pizza</text><text class="up" x="251.97" y="94.23" text-anchor="start">35%</text><path class="fb" d="M170 122 L233.1 167.85 A78 78 0 0 1 106.9 167.85 Z"/><text class="up" x="170" y="226" text-anchor="middle">Tacos</text><text class="up" x="170" y="242" text-anchor="middle">30%</text><path class="fg" d="M170 122 L106.9 167.85 A78 78 0 0 1 92 122 Z"/><text class="up" x="82.5" y="148.43" text-anchor="end">Pasta</text><text class="up" x="82.5" y="164.43" text-anchor="end">10%</text><path d="M170 122 L92 122 A78 78 0 0 1 170 44 Z"/><text class="up" x="104.95" y="38.95" text-anchor="end">Salad</text><text class="up" x="104.95" y="54.95" text-anchor="end">25%</text></svg>`
      },
      answer: 54, tol: 0, unit: 'students',
      explain: R`Pizza and pasta together are $35\% + 10\% = 45\%$ of the students: $0.45 \times 120 = 54$.
        <br><i>Common errors:</i> answering 45 (the percent, not the number of students) and reading only one of the two sectors ($0.35 \times 120 = 42$ or $0.10 \times 120 = 12$).`
    },
    {
      id: 'DSP3-05', topic: 'DSP3', type: 'mc', diff: 2, task: [6],
      stem: R`The students in a class recorded how many minutes each spent on chores last Saturday. A student looked at the histogram and said, "More than half of the class spent 20 to 30 minutes on chores, because that bar is the tallest." Which statement about the student's claim is correct?`,
      figure: {
        type: 'hist', alt: 'Histogram of minutes spent on chores with bins of width 10 from 0 to 50: 0 to 10 has 3 students, 10 to 20 has 6, 20 to 30 has 9, 30 to 40 has 7, and 40 to 50 has 5.',
        bins: [[0, 10, 3], [10, 20, 6], [20, 30, 9], [30, 40, 7], [40, 50, 5]], xlabel: 'Minutes on chores', ylabel: 'Students', ystep: 1
      },
      choices: [
        R`The claim is correct, because the tallest bar shows where more than half of the students are.`,
        R`The claim is not correct, because 9 of the 30 students is fewer than half of the class.`,
        R`The claim is not correct, because the height of a bar shows the number of minutes, not the number of students.`,
        R`The claim is not correct, because a histogram cannot show how many students are in an interval.`
      ], answer: 1,
      explain: R`The bar heights are counts of students: $3 + 6 + 9 + 7 + 5 = 30$ students in all, and the 20 to 30 bar holds 9 of them, which is 30%. It is the most common interval, but it is not more than half of the class (that would take more than 15 students).
        <br><i>Common errors:</i> thinking "tallest bar" means "most of the data", misreading the vertical axis as minutes, and thinking a histogram cannot show how many are in an interval.`
    },
    {
      id: 'DSP3-06', topic: 'DSP3', type: 'multi', diff: 3,
      stem: R`The line graph shows the height of a plant when it was first measured (Week 0) and at the end of each of the next 6 weeks. Select all of the statements that are true.`,
      figure: {
        type: 'plot', alt: 'Line graph of plant height in centimeters at the end of each week: Week 0 is 2, Week 1 is 3, Week 2 is 7, Week 3 is 9, Week 4 is 9, Week 5 is 10, and Week 6 is 12.',
        points: [{ x: 0, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 7 }, { x: 3, y: 9 }, { x: 4, y: 9 }, { x: 5, y: 10 }, { x: 6, y: 12 }],
        segments: [[0, 2, 1, 3], [1, 3, 2, 7], [2, 7, 3, 9], [3, 9, 4, 9], [4, 9, 5, 10], [5, 10, 6, 12]],
        xr: [0, 6], yr: [0, 14], xstep: 1, ystep: 2, xlabel: 'Week', ylabel: 'Height (cm)'
      },
      choices: [
        R`The plant grew the most between Week 1 and Week 2.`,
        R`The plant's height did not change between Week 3 and Week 4.`,
        R`The plant was taller than 10 cm at the end of Week 5.`,
        R`The plant grew 7 cm during the first two weeks.`,
        R`The plant's height at Week 2 was more than double its height at Week 0.`
      ], answer: [0, 1, 4],
      explain: R`The weekly changes are $+1, +4, +2, 0, +1, +2$, so the greatest growth is from Week 1 to Week 2, there was no change from Week 3 to Week 4, and at Week 2 the height is 7, more than double the starting 2.
        <br><i>Not true:</i> at Week 5 the plant is exactly 10 cm, not taller than 10; in the first two weeks it grew $7 - 2 = 5$ cm, and 7 cm is its height at Week 2, not its growth.`
    },
    /* ================= DSP4  Constructing and choosing displays ================= */
    {
      id: 'DSP4-01', topic: 'DSP4', type: 'mc', diff: 1,
      stem: R`A town clerk has the town's population for every tenth year from 1950 to 2020 and wants to show how the population has changed over time. Which type of display is best for this purpose?`,
      choices: [R`Line graph`, R`Circle graph`, R`Box plot`, R`Histogram`], answer: 0,
      explain: R`A line graph connects values measured over time, so the rise and fall of the population is easy to see.
        <br><i>Common errors:</i> a circle graph shows how one whole is split into parts at one moment; a box plot and a histogram show how the values of one data set are spread out, and ignore the order in time.`
    },
    {
      id: 'DSP4-02', topic: 'DSP4', type: 'mc', diff: 2, task: [5],
      stem: R`A teacher has the heights, to the nearest centimeter, of all 28 students in her class. She wants her students to see how the heights are spread across equal intervals (140 to 144 cm, 145 to 149 cm, and so on). Which display is best for this purpose?`,
      choices: [R`Histogram`, R`Circle graph`, R`Line graph`, R`Double bar graph`], answer: 0,
      explain: R`A histogram groups numerical data into equal intervals and shows how many values fall in each, which is exactly the purpose described.
        <br><i>Common errors:</i> a circle graph is for parts of a whole, a line graph is for change over time, and a double bar graph compares two groups across categories.`
    },
    {
      id: 'DSP4-03', topic: 'DSP4', type: 'mc', diff: 2,
      stem: R`A student is making a double bar graph of the books checked out of the school library each day. The bars for Monday through Wednesday are done. On Thursday, students checked out 20 books in all, and 6 more of them were nonfiction than fiction. What should the bars for Thursday show?`,
      figure: {
        type: 'svg', alt: 'Partly finished double bar graph of books checked out, with a legend for fiction and nonfiction. Monday: fiction 12, nonfiction 8. Tuesday: fiction 9, nonfiction 14. Wednesday: fiction 15, nonfiction 10. Thursday has no bars yet. The vertical scale runs from 0 to 20 books.',
        svg: R`<svg viewBox="0 0 380 232"><line class="m thin" x1="64" y1="200" x2="364" y2="200"/><text class="up" x="56" y="205" text-anchor="end">0</text><line class="m thin" x1="64" y1="160" x2="364" y2="160"/><text class="up" x="56" y="165" text-anchor="end">5</text><line class="m thin" x1="64" y1="120" x2="364" y2="120"/><text class="up" x="56" y="125" text-anchor="end">10</text><line class="m thin" x1="64" y1="80" x2="364" y2="80"/><text class="up" x="56" y="85" text-anchor="end">15</text><line class="m thin" x1="64" y1="40" x2="364" y2="40"/><text class="up" x="56" y="45" text-anchor="end">20</text><line x1="64" y1="40" x2="64" y2="200"/><line x1="64" y1="200" x2="364" y2="200"/><rect class="fa" x="71.5" y="104" width="28" height="96"/><rect class="fb" x="103.5" y="136" width="28" height="64"/><text class="up" x="101.5" y="220" text-anchor="middle">Mon</text><rect class="fa" x="146.5" y="128" width="28" height="72"/><rect class="fb" x="178.5" y="88" width="28" height="112"/><text class="up" x="176.5" y="220" text-anchor="middle">Tue</text><rect class="fa" x="221.5" y="80" width="28" height="120"/><rect class="fb" x="253.5" y="120" width="28" height="80"/><text class="up" x="251.5" y="220" text-anchor="middle">Wed</text><text class="up" x="326.5" y="220" text-anchor="middle">Thu</text><text class="up" x="8" y="18" text-anchor="start">Books</text><rect class="fa" x="150" y="6" width="14" height="14"/><text class="up" x="170" y="19" text-anchor="start">Fiction</text><rect class="fb" x="250" y="6" width="14" height="14"/><text class="up" x="270" y="19" text-anchor="start">Nonfiction</text></svg>`
      },
      choices: [R`Fiction 6, nonfiction 14`, R`Fiction 7, nonfiction 13`, R`Fiction 13, nonfiction 7`, R`Fiction 10, nonfiction 16`], answer: 1,
      explain: R`Let fiction be $f$ books. Nonfiction is $f + 6$, and together they total 20: $f + (f + 6) = 20$, so $f = 7$ and nonfiction is 13. The bars should reach 7 (fiction) and 13 (nonfiction).
        <br><i>Common errors:</i> treating the 6 as the number of fiction books, swapping the two kinds, and adding 6 to half of the total without keeping the total at 20 (10 and 16 total 26).`
    },
    {
      id: 'DSP4-04', topic: 'DSP4', type: 'num', diff: 2, calc: true,
      stem: R`Forty students voted on where to go for a field trip: zoo, 14 votes; museum, 10 votes; park, 12 votes; aquarium, 4 votes. A teacher is making a circle graph of the votes. How many degrees should the zoo sector have?`,
      answer: 126, tol: 0, unit: 'degrees',
      explain: R`The zoo got $\frac{14}{40}$ of the votes, and a full circle is $360^\circ$: $\frac{14}{40} \times 360 = 126$ degrees.
        <br><i>Common errors:</i> using 35, the percent of the votes, as the number of degrees, and using 14 (the number of votes). Check: the four sectors are 126, 90, 108, and 36 degrees, which add to 360.`
    },
    {
      id: 'DSP4-05', topic: 'DSP4', type: 'mc', diff: 2,
      stem: R`Which data set is best displayed with a scatter plot?`,
      choices: [
        R`The favorite sport of each student in a class`,
        R`The height and the arm span of each of 20 students`,
        R`The temperature at noon on each day of one week`,
        R`The percent of a family's budget spent on each of five categories`
      ], answer: 1,
      explain: R`A scatter plot shows two numerical measurements for each person or thing, here the height and arm span of each student, so you can look for a pattern between them.
        <br><i>Common errors:</i> favorite sports are category counts (bar graph), noon temperatures are change over time (line graph), and budget percents are parts of a whole (circle graph).`
    },
    {
      id: 'DSP4-06', topic: 'DSP4', type: 'multi', diff: 3, task: [6],
      stem: R`A student made the histogram below from these 20 test scores: 55, 58, 61, 64, 67, 69, 71, 73, 74, 77, 80, 82, 84, 85, 88, 91, 93, 96, 97, 99. Each bar should include its left endpoint but not its right endpoint. Which TWO bars have the wrong height?`,
      figure: {
        type: 'hist', alt: 'Histogram of test scores with bins of width 10 from 50 to 100: 50 to 60 has 2, 60 to 70 has 4, 70 to 80 has 5, 80 to 90 has 4, and 90 to 100 has 5.',
        bins: [[50, 60, 2], [60, 70, 4], [70, 80, 5], [80, 90, 4], [90, 100, 5]], xlabel: 'Test score', ylabel: 'Students', ystep: 1
      },
      choices: [R`50 to 60`, R`60 to 70`, R`70 to 80`, R`80 to 90`, R`90 to 100`], answer: [2, 3], order: 'fixed',
      explain: R`Counting with each bar including its left endpoint: 50 to 60 has 55, 58 (2); 60 to 70 has 61, 64, 67, 69 (4); 70 to 80 has 71, 73, 74, 77 (4); 80 to 90 has 80, 82, 84, 85, 88 (5); 90 to 100 has 91, 93, 96, 97, 99 (5). The student's bars for 70 to 80 (5) and 80 to 90 (4) are wrong.
        <br>The student counted the score of exactly 80 in the 70 to 80 bar, which moved one student from the 80 to 90 bar into it. The other three bars are right.`
    },

    /* ================= DSP5  Probability ================= */
    {
      id: 'DSP5-01', topic: 'DSP5', type: 'mc', diff: 1,
      stem: R`A spinner has eight equal sections, as shown. The spinner is spun once. Which event has a probability of $\frac{1}{4}$?`,
      figure: {
        type: 'svg', alt: 'A circular spinner divided into eight equal sections, labeled in order clockwise from the top: 3, 6, 6, 1, 3, 6, 4, 2.',
        svg: R`<svg viewBox="0 0 220 220"><path class="fa" d="M110 110 L110 18 A92 92 0 0 1 175.05 44.95 Z"/><path class="fb" d="M110 110 L175.05 44.95 A92 92 0 0 1 202 110 Z"/><path class="fa" d="M110 110 L202 110 A92 92 0 0 1 175.05 175.05 Z"/><path class="fb" d="M110 110 L175.05 175.05 A92 92 0 0 1 110 202 Z"/><path class="fa" d="M110 110 L110 202 A92 92 0 0 1 44.95 175.05 Z"/><path class="fb" d="M110 110 L44.95 175.05 A92 92 0 0 1 18 110 Z"/><path class="fa" d="M110 110 L18 110 A92 92 0 0 1 44.95 44.95 Z"/><path class="fb" d="M110 110 L44.95 44.95 A92 92 0 0 1 110 18 Z"/><circle cx="110" cy="110" r="92"/><text class="up" x="133.24" y="59.9" text-anchor="middle">3</text><text class="up" x="166.1" y="92.76" text-anchor="middle">6</text><text class="up" x="166.1" y="139.24" text-anchor="middle">6</text><text class="up" x="133.24" y="172.1" text-anchor="middle">1</text><text class="up" x="86.76" y="172.1" text-anchor="middle">3</text><text class="up" x="53.9" y="139.24" text-anchor="middle">6</text><text class="up" x="53.9" y="92.76" text-anchor="middle">4</text><text class="up" x="86.76" y="59.9" text-anchor="middle">2</text><line x1="110" y1="110" x2="120.56" y2="135.5"/><circle class="pt" cx="110" cy="110" r="4"/></svg>`
      },
      choices: [R`Landing on a 6`, R`Landing on an even number`, R`Landing on a 3`, R`Landing on a number greater than 3`], answer: 2,
      explain: R`The 3 appears in 2 of the 8 equal sections, so $P(3) = \frac{2}{8} = \frac{1}{4}$.
        <br><i>The others:</i> a 6 is in 3 sections ($\frac{3}{8}$); even numbers (6, 6, 6, 4, 2) are in 5 sections ($\frac{5}{8}$); numbers greater than 3 (6, 6, 6, 4) are in 4 sections ($\frac{4}{8} = \frac{1}{2}$).`
    },
    {
      id: 'DSP5-02', topic: 'DSP5', type: 'mc', diff: 1,
      stem: R`Which probability best describes an event that is very unlikely but not impossible?`,
      choices: ['0', '0.05', '0.5', '0.95'], answer: 1, order: 'fixed',
      explain: R`A probability near 0 means very unlikely, and 0.05 is 5 chances in 100.
        <br><i>Common errors:</i> 0 means the event is impossible, 0.5 means it is as likely as not, and 0.95 means very likely.`
    },
    {
      id: 'DSP5-03', topic: 'DSP5', type: 'num', diff: 2,
      stem: R`A bag holds 4 red tiles, 6 blue tiles, and 5 green tiles. One tile is drawn without looking. What is the probability that the tile is not blue? Enter your answer as a decimal.`,
      answer: 0.6, tol: 0.001,
      explain: R`There are $4 + 6 + 5 = 15$ tiles and $4 + 5 = 9$ of them are not blue, so $P(\text{not blue}) = \frac{9}{15} = \frac{3}{5} = 0.6$. Another way: $1 - \frac{6}{15} = 0.6$.
        <br><i>Common errors:</i> giving the probability of blue ($\frac{6}{15} = 0.4$) and comparing "not blue" with the number of blue tiles ($\frac{9}{6} = 1.5$, which cannot be a probability).`
    },
    {
      id: 'DSP5-04', topic: 'DSP5', type: 'mc', diff: 2, task: [7],
      stem: R`A teacher's spinner has four equal sections, and one of them is red. Marcus spins it five times and never lands on red. He says, "Red is due, so my next spin is more likely to be red." Which statement about his claim is correct?`,
      choices: [
        R`The claim is not correct, because each spin has the same probability of landing on red, $\frac{1}{4}$, no matter what happened before.`,
        R`The claim is correct, because the spinner must land on red soon to make up for the earlier spins.`,
        R`The claim is not correct, because red has not come up in five spins, so it is now impossible.`,
        R`The claim is not correct, because the probability of red is $\frac{1}{5}$ after five spins.`
      ], answer: 0,
      explain: R`The spinner has no memory: every spin has the same chances, so the probability of red on the next spin is still $\frac{1}{4}$. Marcus believes that a run without red makes red more likely, a common misconception about chance.
        <br><i>The wrong choices:</i> saying the spinner must land on red to make up for earlier spins repeats Marcus's misconception; saying red is now impossible has no basis; and $\frac{1}{5}$ mixes up the number of spins with the number of sections.`
    },
    {
      id: 'DSP5-05', topic: 'DSP5', type: 'mc', diff: 3,
      stem: R`Spinner 1 has three equal sections and Spinner 2 has four equal sections, as shown. Each spinner is spun once. What is the probability that Spinner 1 lands on A and Spinner 2 lands on an even number?`,
      figure: {
        type: 'svg', alt: 'Two circular spinners side by side. Spinner 1 is divided into three equal sections labeled A, B, and C. Spinner 2 is divided into four equal sections labeled 1, 2, 3, and 4.',
        svg: R`<svg viewBox="0 0 440 210"><path class="fa" d="M110 96 L110 16 A80 80 0 0 1 179.28 136 Z"/><path class="fb" d="M110 96 L179.28 136 A80 80 0 0 1 40.72 136 Z"/><path class="fg" d="M110 96 L40.72 136 A80 80 0 0 1 110 16 Z"/><circle cx="110" cy="96" r="80"/><text class="up" x="155.73" y="75.6" text-anchor="middle">A</text><text class="up" x="110" y="154.8" text-anchor="middle">B</text><text class="up" x="64.27" y="75.6" text-anchor="middle">C</text><line x1="110" y1="96" x2="110" y2="120"/><circle class="pt" cx="110" cy="96" r="4"/><path class="fa" d="M330 96 L330 16 A80 80 0 0 1 410 96 Z"/><path class="fb" d="M330 96 L410 96 A80 80 0 0 1 330 176 Z"/><path class="fa" d="M330 96 L330 176 A80 80 0 0 1 250 96 Z"/><path class="fb" d="M330 96 L250 96 A80 80 0 0 1 330 16 Z"/><circle cx="330" cy="96" r="80"/><text class="up" x="367.34" y="64.66" text-anchor="middle">1</text><text class="up" x="367.34" y="139.34" text-anchor="middle">2</text><text class="up" x="292.66" y="139.34" text-anchor="middle">3</text><text class="up" x="292.66" y="64.66" text-anchor="middle">4</text><line x1="330" y1="96" x2="313.03" y2="112.97"/><circle class="pt" cx="330" cy="96" r="4"/><text class="up" x="110" y="200" text-anchor="middle">Spinner 1</text><text class="up" x="330" y="200" text-anchor="middle">Spinner 2</text></svg>`
      },
      choices: [R`$\frac{1}{6}$`, R`$\frac{5}{6}$`, R`$\frac{2}{7}$`, R`$\frac{1}{2}$`], answer: 0,
      explain: R`The spins are independent, so multiply: $P(\text{A}) = \frac{1}{3}$ and $P(\text{even}) = \frac{2}{4} = \frac{1}{2}$, so $P(\text{A and even}) = \frac{1}{3} \times \frac{1}{2} = \frac{1}{6}$. There are $3 \times 4 = 12$ equally likely pairs, and 2 of them (A with 2 or 4) qualify.
        <br><i>Common errors:</i> adding the probabilities ($\frac{1}{3} + \frac{1}{2} = \frac{5}{6}$), adding the tops and the bottoms ($\frac{1 + 1}{3 + 4} = \frac{2}{7}$), and using only the second spinner ($\frac{1}{2}$).`
    },
    {
      id: 'DSP5-06', topic: 'DSP5', type: 'num', diff: 2,
      stem: R`A spinner has 5 equal sections, and 2 of them are shaded. The spinner is spun 150 times. Based on the theoretical probability, how many times would you expect it to land on a shaded section?`,
      answer: 60, tol: 0, unit: 'times',
      explain: R`The probability of landing on a shaded section is $\frac{2}{5}$, so the expected number of times is $\frac{2}{5} \times 150 = 60$.
        <br><i>Common errors:</i> $150 \div 5 = 30$ (the count for just one section) and $150 \div 2 = 75$ (using the number of shaded sections as the divisor).`
    }
  );
})();
