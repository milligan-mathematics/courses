/* Praxis 5165 diagnostic: Statistics & Probability (STP1-STP8) */
(function () {
  var R = String.raw;

  /* helpers for normal-curve pictures: shade(a,b) returns thin vertical segments under the curve */
  function shade(mu, sd, a, b, color) {
    var out = [], step = sd / 22;
    for (var x = a; x <= b + 1e-9; x += step) {
      var y = Math.exp(-((x - mu) * (x - mu)) / (2 * sd * sd));
      out.push([x, 0, x, y, { color: color || 'b' }]);
    }
    return out;
  }
  function normalFig(mu, sd, shadeFrom, shadeTo, labelXs, alt, marks) {
    var lo = mu - 3.6 * sd, hi = mu + 3.6 * sd;
    var segs = shade(mu, sd, Math.max(shadeFrom, lo), Math.min(shadeTo, hi));
    var labels = [];
    (labelXs || []).forEach(function (v) {
      var t = String(v);
      labels.push({ x: v, y: 0, text: t, dx: -3.4 * t.length, dy: 22 });
      segs.push([v, -0.025, v, 0.025, { color: 'k' }]);
    });
    return {
      type: 'plot', alt: alt,
      fns: [{ f: 'exp(-(x-' + mu + ')*(x-' + mu + ')/(2*' + (sd * sd) + '))', color: 'k' }],
      segments: segs, labels: labels,
      xr: [lo, hi], yr: [-0.24, 1.12], hideNumbers: true, noGrid: true
    };
  }

  PXD.bank.push(

    /* ================= STP1 ================= */
    {
      id: 'STP1-01', topic: 'STP1', type: 'mc', diff: 1,
      stem: R`A principal wants to estimate the proportion of the 1,200 students at her school who favor a later start time. Which sampling method is <b>most</b> likely to produce a sample that represents the whole student body?`,
      choices: [
        R`Ask the first 100 students who enter the cafeteria at lunch`,
        R`Post an online poll on the school website and use the first 100 responses`,
        R`Number every student on the roster and use a random number generator to choose 100 students`,
        R`Ask the 100 students who belong to the most clubs`
      ],
      answer: 2,
      explain: R`Only a random sample gives every student a chance of being chosen and protects against selection bias. Choosing the first students to arrive is a convenience sample, an online poll is a voluntary-response sample (students with strong opinions are more likely to respond), and students in many clubs are not typical of the whole school.`
    },
    {
      id: 'STP1-02', topic: 'STP1', type: 'multi', diff: 2,
      stem: R`In an <b>experiment</b>, researchers impose a treatment on the subjects and then observe the response. Which of the following studies are experiments? Select all that apply.`,
      choices: [
        R`Researchers record the exercise habits and resting heart rates of 200 randomly selected adults.`,
        R`Forty tomato plants are randomly assigned to one of two fertilizers, and the heights of the plants are compared after six weeks.`,
        R`A teacher lets each student choose flash cards or a study guide and then compares the students' test scores.`,
        R`Thirty volunteers rate two brands of headphones, using each brand for a week, with a coin flip deciding which brand each person uses first.`
      ],
      answer: [1, 3],
      explain: R`The second study assigns treatments (fertilizers) to the plants at random, and the fourth assigns the order of the treatments, so both impose treatments and are experiments. The first study only measures existing habits (an observational study or survey). In the third, the students choose their own method, so the researcher did not impose the treatment: it is observational, and students who pick one method may differ in other ways.`
    },
    {
      id: 'STP1-03', topic: 'STP1', type: 'mc', diff: 2,
      stem: R`A researcher selects 500 adults at random from the residents of a city. Each person reports whether he or she regularly uses a standing desk and rates his or her back pain. The people who use standing desks report less back pain, on average. Which conclusion is best supported by this study design?`,
      choices: [
        R`Standing desks reduce back pain for adults in the city.`,
        R`The result can be generalized to adults in the city, but the study does not show that standing desks cause less back pain.`,
        R`Standing desks reduce back pain for these 500 adults, but the result cannot be generalized to the city.`,
        R`No association can be claimed, because the researcher did not assign people to use standing desks.`
      ],
      answer: 1,
      explain: R`Random <i>selection</i> of the sample supports generalizing to the population (the city's adults). There was no random <i>assignment</i> of the desk, so this is an observational study: an association can be reported but not a cause-and-effect conclusion (people who choose standing desks may differ in job, fitness, or age). Choice A ignores this; choice C reverses the roles of sampling and assignment; choice D wrongly claims that no association can be observed.`
    },
    {
      id: 'STP1-04', topic: 'STP1', type: 'num', diff: 1,
      stem: R`A random sample of 250 students was selected from a district of 8,000 students. In the sample, 90 students said that they walk to school. Based on the sample, about how many of the 8,000 students in the district walk to school?`,
      answer: 2880, tol: 0, unit: 'students',
      explain: R`The sample proportion is $\dfrac{90}{250} = 0.36$. Assuming the sample is representative, estimate that 36% of the district walks: $0.36 \times 8000 = 2880$. Using $90 \times 8000/250$ gives the same value; multiplying $90 \times 8$ or reporting 90 as the estimate are the usual slips.`
    },
    {
      id: 'STP1-05', topic: 'STP1', type: 'mc', diff: 2, task: [3],
      stem: R`A student in a statistics class proposes a study to find out whether a new study app raises test scores. Her plan is to give the app to the students in her school who volunteer to try it and to compare their next test scores with the scores of students who did not volunteer. She says, "If the app group scores higher, that proves the app works."
        <br>Which change to her plan would most improve her justification for a cause-and-effect conclusion?`,
      choices: [
        R`Use the students who volunteer as the app group, and use the same number of non-volunteers as the comparison group.`,
        R`Compare the median scores instead of the mean scores.`,
        R`Among the students who volunteer, randomly assign half to use the app and half to not use it, and compare the scores of the two groups.`,
        R`Give the app to every student in the school so that the sample is as large as possible.`
      ],
      answer: 2,
      explain: R`Volunteers may differ from non-volunteers in motivation and study habits, so the two groups are not comparable. Randomly assigning the volunteers to the two groups makes the groups similar on average in every other respect, which is what allows a difference in scores to be attributed to the app. Matching group sizes (A) or changing the summary statistic (B) does not remove the confounding, and giving the app to everyone (D) leaves no comparison group.`
    },
    {
      id: 'STP1-06', topic: 'STP1', type: 'mc', diff: 3, task: [15],
      stem: R`A teacher asks how large a random sample must be to estimate the proportion of adults in a town who support a new park. A student, Jamal, says:
        <div class="work">"A random sample of 100 people from a town of 2,000 is 5% of the town, which is fine. But a random sample of 100 people from a city of 2,000,000 is only 0.005% of the city, so it would be much less accurate."</div>
        Which response best addresses Jamal's reasoning?`,
      choices: [
        R`Jamal is correct: the accuracy of an estimate depends on the percentage of the population that is sampled.`,
        R`Jamal is incorrect: when the population is much larger than the sample, the accuracy of the estimate depends mainly on the size of the random sample, so both estimates would be about equally accurate.`,
        R`Jamal is incorrect: a larger population needs a smaller sample because there is more variety to average out.`,
        R`Jamal is correct, but only if the samples are not random.`
      ],
      answer: 1,
      explain: R`For a random sample that is small compared with the population, the variability of the sample proportion is about $\sqrt{p(1-p)/n}$, which depends on the sample size $n$ and hardly at all on the population size. A random sample of 100 has roughly the same margin of error whether the population is 2,000 or 2,000,000. Jamal is confusing the <i>fraction</i> of the population sampled with the sample size.`
    },
    {
      id: 'STP1-07', topic: 'STP1', type: 'mc', diff: 3,
      stem: R`In a randomized experiment, 40 students were randomly assigned to two groups of 20. One group used Method A to study and the other used Method B. The mean test score for Method B was 5 points higher than for Method A.
        <br>To see whether a difference this large could plausibly happen by chance alone, a computer assumed that the two methods were equally effective and randomly reassigned the 40 scores to two groups of 20 a total of 50 times. Each dot in the plot is the difference in the group means (B minus A) from one reassignment.`,
      figure: {
        type: 'dot',
        alt: 'Dot plot of 50 simulated differences in group means from -6 to 6, centered near 0 and tapering off on both sides. One dot at -6, one at -5, two at -4, four at -3, six at -2, eight at -1, nine at 0, seven at 1, five at 2, three at 3, two at 4, one at 5, one at 6.',
        values: [-6, -5, -4, -4, -3, -3, -3, -3, -2, -2, -2, -2, -2, -2, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5, 6],
        range: [-7, 7], step: 1, xlabel: 'Difference in means (B minus A), from random reassignments'
      },
      choices: [
        R`A difference of 5 or more occurred in only 2 of the 50 reassignments, so a difference this large would be unusual if the methods were equally effective. This is evidence that Method B produces higher scores.`,
        R`The probability that Method B is more effective than Method A is $2/50 = 4\%$.`,
        R`The observed difference, 5, is smaller than the largest simulated difference, 6, so the results give no evidence that the methods differ.`,
        R`The simulation shows that Method B will raise the score of every student by about 5 points.`
      ],
      answer: 0,
      explain: R`The simulation shows what differences arise from random assignment alone. Only 2 of 50 (4%) were as large as the one observed, so the observed difference is unlikely to be due to chance alone. Because students were randomly assigned, it is reasonable to attribute it to the method. Choice B misreads 4% as the probability that a hypothesis is true (it is the fraction of chance-only outcomes at least as extreme as the observed one). Choice C compares the observed value only with the single most extreme simulated value, and choice D confuses a difference in group means with an effect on every individual.`
    },

    /* ================= STP2 ================= */
    {
      id: 'STP2-01', topic: 'STP2', type: 'num', diff: 1,
      stem: R`The dot plot shows the number of books read last month by each of 10 students. What is the mean number of books read?`,
      figure: { type: 'dot', alt: 'Dot plot on a number line from 0 to 10: one dot at 1, two at 2, three at 3, two at 4, one at 5, and one at 9.', values: [1, 2, 2, 3, 3, 3, 4, 4, 5, 9], range: [0, 10], step: 1, xlabel: 'Books read last month' },
      answer: 3.6, tol: 0.05,
      explain: R`The 10 values are 1, 2, 2, 3, 3, 3, 4, 4, 5, 9, whose sum is 36. The mean is $36/10 = 3.6$. (The median is 3; the value 9 pulls the mean above it.)`
    },
    {
      id: 'STP2-02', topic: 'STP2', type: 'multi', diff: 2,
      stem: R`A data set is $4, 6, 7, 9, 10, 12, 14$. The largest value, 14, is replaced by 50. Which of the following statistics are <b>unchanged</b> by this replacement? Select all that apply.`,
      choices: [R`Mean`, R`Median`, R`Interquartile range`, R`Range`, R`Standard deviation`],
      answer: [1, 2],
      explain: R`The median stays 9 because the middle value did not move. The quartiles stay $Q_1 = 6$ and $Q_3 = 12$ (the upper half is now 10, 12, 50, whose median is still 12), so the IQR stays 6. The mean changes from $62/7 \approx 8.9$ to 14, the range from 10 to 46, and the standard deviation increases a great deal. The median and IQR are <i>resistant</i> to outliers; the mean, range, and standard deviation are not.`
    },
    {
      id: 'STP2-03', topic: 'STP2', type: 'mc', diff: 1,
      stem: R`The histogram shows the number of minutes 32 students needed to finish a puzzle. Which choice gives the best description of the shape and the most appropriate measures of center and spread?`,
      figure: { type: 'hist', alt: 'Histogram of minutes to finish a puzzle, bins of width 5 from 0 to 35 with counts 4, 10, 8, 5, 3, 1, 1. The bars rise quickly to a peak at 5 to 10 and then trail off gradually to the right.', bins: [[0, 5, 4], [5, 10, 10], [10, 15, 8], [15, 20, 5], [20, 25, 3], [25, 30, 1], [30, 35, 1]], xlabel: 'Minutes to finish the puzzle' },
      choices: [
        R`Skewed right; mean and standard deviation`,
        R`Skewed right; median and IQR`,
        R`Skewed left; median and IQR`,
        R`Approximately symmetric; mean and standard deviation`
      ],
      answer: 1,
      explain: R`The long tail is on the right, so the distribution is skewed right. For skewed distributions the median and IQR are the better summaries because they are not pulled toward the tail, while the mean and standard deviation are. Choosing A pairs the right shape with the measures that suit a symmetric distribution; choosing C misreads which side the tail is on.`
    },
    {
      id: 'STP2-04', topic: 'STP2', type: 'mc', diff: 2,
      stem: R`The boxplots show the number of points scored per game by two basketball teams over a season. Which statement is supported by the boxplots?`,
      figure: { type: 'box', alt: 'Two horizontal boxplots on a scale from 0 to 50. Team A: minimum 12, Q1 20, median 26, Q3 30, maximum 44. Team B: minimum 8, Q1 18, median 26, Q3 38, maximum 46.', series: [{ label: 'Team A', min: 12, q1: 20, med: 26, q3: 30, max: 44 }, { label: 'Team B', min: 8, q1: 18, med: 26, q3: 38, max: 46 }], range: [0, 50], step: 5, xlabel: 'Points scored per game' },
      choices: [
        R`Team B's scores have a larger interquartile range than Team A's scores.`,
        R`The two teams have the same mean score because they have the same median.`,
        R`About half of Team A's scores are greater than 30.`,
        R`Team A's scores have a greater range than Team B's scores.`
      ],
      answer: 0,
      explain: R`The IQR for Team A is $30 - 20 = 10$ and for Team B it is $38 - 18 = 20$, so Team B's scores are more spread out in the middle 50%. Equal medians do not imply equal means (B). Only about 25% of Team A's scores exceed $Q_3 = 30$ (C). The ranges are $44 - 12 = 32$ for A and $46 - 8 = 38$ for B, so B has the greater range (D).`
    },
    {
      id: 'STP2-05', topic: 'STP2', type: 'num', diff: 2, calc: true,
      stem: R`A random sample of five plants has heights (in centimeters) 3, 5, 7, 9, and 11. What is the sample standard deviation of these heights? Round to the nearest hundredth.`,
      answer: 3.16, tol: 0.005, unit: 'cm',
      explain: R`The mean is 7. The squared deviations are $16, 4, 0, 4, 16$, which sum to 40. For a sample, divide by $n - 1 = 4$: $s = \sqrt{40/4} = \sqrt{10} \approx 3.16$. Dividing by $n = 5$ (the population formula) gives $\sqrt{8} \approx 2.83$.`
    },
    {
      id: 'STP2-06', topic: 'STP2', type: 'mc', diff: 3, task: [15, 17],
      stem: R`Two data sets each have six values and each has mean 7.
        <div class="work">Set P: 2, 4, 6, 8, 10, 12<br>Set Q: 1, 1, 1, 13, 13, 13</div>
        A student, Amara, says, "Set P has the larger standard deviation, because it has six different values and Set Q has only two different values." Which response is correct?`,
      choices: [
        R`Amara is correct: more distinct values means more variation.`,
        R`Amara is incorrect: Set Q has the larger standard deviation, because every value in Q is 6 units from the mean, while the values in P are only 1, 3, or 5 units from the mean.`,
        R`Amara is incorrect: the two sets have the same standard deviation, because they have the same mean and the same number of values.`,
        R`Amara is incorrect: Set Q has the larger standard deviation, because it has the larger range.`
      ],
      answer: 1,
      explain: R`Standard deviation measures the typical distance of the values from the mean; it is not a count of distinct values. Set Q: every deviation is $\pm 6$, so $\sigma_Q = 6$ (treating the set as a population; the sample formula gives the same ordering). Set P: the deviations are $\pm 1, \pm 3, \pm 5$, giving $\sigma_P = \sqrt{70/6} \approx 3.4$. Choice D reaches the right conclusion for the wrong reason (the range depends only on two values), and choice C ignores the spread entirely.`
    },
    {
      id: 'STP2-07', topic: 'STP2', type: 'mc', diff: 2,
      stem: R`The histogram shows the quiz scores of 30 students. Each bin includes its left endpoint but not its right endpoint. In which interval does the median score lie?`,
      figure: { type: 'hist', alt: 'Histogram of 30 quiz scores in bins of width 5 from 60 to 100 with counts 1, 4, 8, 5, 5, 4, 2, 1. The tallest bar is the 70 to 75 bin.', bins: [[60, 65, 1], [65, 70, 4], [70, 75, 8], [75, 80, 5], [80, 85, 5], [85, 90, 4], [90, 95, 2], [95, 100, 1]], xlabel: 'Quiz score', showCounts: true },
      choices: [R`70 to 75`, R`75 to 80`, R`80 to 85`, R`85 to 90`],
      answer: 1, order: 'fixed',
      explain: R`With 30 scores, the median is the average of the 15th and 16th scores in order. Cumulative counts are 1, 5, 13, 18, so the 15th and 16th scores are both in the 75 to 80 bin. Choosing 70 to 75 confuses the median with the mode (tallest bar); choosing 80 to 85 uses the middle of the horizontal axis instead of the middle of the data.`
    },
    {
      id: 'STP2-08', topic: 'STP2', type: 'mc', diff: 2, task: [13, 15],
      stem: R`The boxplot shows the scores of a class on a test. A student, Priya, says, "The section from the median to $Q_3$ is much longer than the section from $Q_1$ to the median, so more students scored between the median and $Q_3$ than between $Q_1$ and the median."`,
      figure: { type: 'box', alt: 'A single horizontal boxplot on a scale from 0 to 70: minimum 10, Q1 20, median 24, Q3 40, maximum 60. The right half of the box is much longer than the left half.', series: [{ label: 'Scores', min: 10, q1: 20, med: 24, q3: 40, max: 60 }], range: [0, 70], step: 10, xlabel: 'Test score' },
      choices: [
        R`Priya is correct: the longer the section, the more data values it contains.`,
        R`Priya is incorrect: each section between consecutive quartiles contains about 25% of the scores, so the length shows how spread out the scores are, not how many there are.`,
        R`Priya is incorrect: the section from the median to $Q_3$ contains 50% of the scores and the section from $Q_1$ to the median contains 25%.`,
        R`Priya is correct, because the boxplot shows the distribution is skewed left.`
      ],
      answer: 1,
      explain: R`The quartiles split the ordered data into four groups of about equal size, so each section of the boxplot (whisker, half-box, half-box, whisker) holds about 25% of the values. A longer section means those values are more spread out, not more numerous. The longer right half of the box indicates the upper scores are more spread out than the lower ones (a right-skewed pattern), which is why choice D is also wrong.`
    },
    {
      id: 'STP2-09', topic: 'STP2', type: 'mc', diff: 3,
      stem: R`A data set has first quartile $Q_1 = 32$ and third quartile $Q_3 = 44$. A value is classified as an outlier if it is more than $1.5 \times \text{IQR}$ below $Q_1$ or above $Q_3$. Which of the following values would be classified as an outlier?`,
      choices: [R`15`, R`20`, R`60`, R`66`],
      answer: 3,
      explain: R`$\text{IQR} = 44 - 32 = 12$ and $1.5 \times 12 = 18$. The fences are $32 - 18 = 14$ and $44 + 18 = 62$. A value is an outlier only if it is below 14 or above 62, so 66 is the only outlier. The values 15 and 60 lie just inside the fences, and 20 is well inside.`
    },
    {
      id: 'STP2-10', topic: 'STP2', type: 'mc', diff: 2, task: [1],
      stem: R`A teacher shows the histogram of the scores of 30 students on a final exam and asks the class to compare the mean and the median. Which explanation is <b>valid</b>?`,
      figure: { type: 'hist', alt: 'Histogram of 30 final exam scores in bins of width 10 from 50 to 100 with counts 1, 2, 4, 9, 14. The bars increase steadily to the right, with a long tail toward the low scores.', bins: [[50, 60, 1], [60, 70, 2], [70, 80, 4], [80, 90, 9], [90, 100, 14]], xlabel: 'Exam score', showCounts: true },
      choices: [
        R`The mean is less than the median, because the few low scores in the tail pull the mean down, while the median is not affected much by how low they are.`,
        R`The mean is greater than the median, because the tallest bars are on the right side of the graph.`,
        R`The mean and median are about equal, because the graph has one peak.`,
        R`The median is less than the mean, because the median is always the middle of the horizontal axis.`
      ],
      answer: 0,
      explain: R`The distribution is skewed left (tail toward low scores). Extreme low values reduce the mean but change the median only slightly, so the mean is less than the median. Using the bin midpoints, the mean is about 86 while the median is near 89. Choice B mixes up where the tail is; choice C treats "one peak" as a symmetry test; choice D describes the median incorrectly.`
    }
    ,

    /* ================= STP3 ================= */
    {
      id: 'STP3-01', topic: 'STP3', type: 'mc', diff: 1,
      stem: R`A survey of 200 students asked how each student usually gets to school. The results are shown in the table.
        <table class="q-table"><tr><th></th><th>Bus</th><th>Walk</th><th>Car</th><th>Total</th></tr>
        <tr><th>Middle school</th><td>40</td><td>30</td><td>20</td><td>90</td></tr>
        <tr><th>High school</th><td>35</td><td>25</td><td>50</td><td>110</td></tr>
        <tr><th>Total</th><td>75</td><td>55</td><td>70</td><td>200</td></tr></table>
        What is the joint relative frequency of students who are in high school <b>and</b> ride the bus?`,
      choices: [R`$\dfrac{35}{200}$`, R`$\dfrac{35}{75}$`, R`$\dfrac{35}{110}$`, R`$\dfrac{75}{200}$`],
      answer: 0,
      explain: R`A joint relative frequency divides the count in one cell by the grand total: $\dfrac{35}{200} = 0.175$. Choice B ($35/75$) is the conditional relative frequency of high school among bus riders; choice C ($35/110$) is the conditional relative frequency of bus among high school students; choice D is the marginal relative frequency of bus riders.`
    },
    {
      id: 'STP3-02', topic: 'STP3', type: 'mc', diff: 2, task: [17],
      stem: R`A gym surveyed 300 adults about whether they are members of a fitness center.
        <table class="q-table"><tr><th></th><th>Member</th><th>Not a member</th><th>Total</th></tr>
        <tr><th>Under 30</th><td>45</td><td>55</td><td>100</td></tr>
        <tr><th>30 and over</th><td>60</td><td>140</td><td>200</td></tr>
        <tr><th>Total</th><td>105</td><td>195</td><td>300</td></tr></table>
        A student, Devon, writes: <div class="work">"There are 60 members who are 30 and over but only 45 who are under 30, so membership is more common among adults 30 and over."</div>
        Which evaluation of Devon's reasoning is best?`,
      choices: [
        R`Devon is correct: the larger count of members in the 30-and-over row shows that membership is more likely in that group.`,
        R`Devon is incorrect: the groups have different sizes, so he should compare relative frequencies within each group, and 45% of adults under 30 are members compared with 30% of adults 30 and over.`,
        R`Devon is incorrect: the table shows no association, because 105 of the 300 adults, or 35%, are members.`,
        R`Devon is correct: $60/300 = 20\%$ is greater than $45/300 = 15\%$.`
      ],
      answer: 1,
      explain: R`Because the two age groups have different sizes (100 and 200), counts (or joint relative frequencies such as $60/300$ and $45/300$) cannot be used to compare how common membership is in each group. Comparing the conditional relative frequencies gives $\dfrac{45}{100} = 45\%$ for under 30 and $\dfrac{60}{200} = 30\%$ for 30 and over, so membership is <i>more</i> common among adults under 30: there is an association, in the opposite direction from Devon's claim. Choices A and D make the same error of comparing counts; choice C confuses the overall rate with equal rates in the two groups.`
    },
    {
      id: 'STP3-03', topic: 'STP3', type: 'num', diff: 2,
      stem: R`A class of 120 students was asked whether they like math.
        <table class="q-table"><tr><th></th><th>Likes math</th><th>Does not like math</th><th>Total</th></tr>
        <tr><th>Girls</th><td>33</td><td>27</td><td>60</td></tr>
        <tr><th>Boys</th><td>30</td><td>30</td><td>60</td></tr>
        <tr><th>Total</th><td>63</td><td>57</td><td>120</td></tr></table>
        Of the students who like math, what percent are girls? Round to the nearest whole percent.`,
      answer: 52, tol: 0.5, unit: '%',
      explain: R`The condition is "likes math," so the denominator is the column total 63: $\dfrac{33}{63} \approx 0.524$, or about 52%. Dividing by the number of girls ($33/60 = 55\%$) answers a different question (what percent of girls like math), and $33/120 = 27.5\%$ is the joint relative frequency.`
    },
    {
      id: 'STP3-04', topic: 'STP3', type: 'mc', diff: 1,
      stem: R`The scatterplot shows the fuel efficiency of a car (in miles per gallon) at several steady speeds. Which statement best describes the association between speed and fuel efficiency?`,
      figure: { type: 'scatter', alt: 'Scatterplot of fuel efficiency in miles per gallon against speed in miles per hour. Points: (20, 22), (30, 28), (40, 33), (50, 35), (60, 34), (70, 30), (80, 25), (90, 19). The points rise to a peak near 50 mph and then fall, forming an arch.', dots: [[20, 22], [30, 28], [40, 33], [50, 35], [60, 34], [70, 30], [80, 25], [90, 19]], xr: [10, 100], yr: [10, 40], xstep: 10, ystep: 5, xlabel: 'Speed (mph)', ylabel: 'Fuel efficiency (mpg)' },
      choices: [
        R`A positive linear association`,
        R`A negative linear association`,
        R`A nonlinear association: efficiency increases with speed at first and then decreases`,
        R`No association`
      ],
      answer: 2,
      explain: R`The points form an arch. Efficiency rises from 20 to about 50 mph and falls afterward, so the association is clearly nonlinear (a straight line would be a poor summary: $r$ is only about $-0.23$ even though the variables are strongly related). Choosing "no association" confuses a lack of <i>linear</i> association with a lack of any association.`
    },
    {
      id: 'STP3-05', topic: 'STP3', type: 'mc', diff: 2, task: [10],
      stem: R`A teacher wants a two-way table in which there is <b>no association</b> between grade level and whether a student owns a bicycle. Which set of survey results should the teacher use?`,
      choices: [
        R`Freshmen: 12 own a bicycle, 18 do not. Seniors: 20 own a bicycle, 30 do not.`,
        R`Freshmen: 20 own a bicycle, 30 do not. Seniors: 20 own a bicycle, 40 do not.`,
        R`Freshmen: 15 own a bicycle, 15 do not. Seniors: 30 own a bicycle, 15 do not.`,
        R`Freshmen: 10 own a bicycle, 20 do not. Seniors: 20 own a bicycle, 20 do not.`
      ],
      answer: 0,
      explain: R`No association means the conditional relative frequencies are equal in each row. Choice A: $12/30 = 0.40$ for freshmen and $20/50 = 0.40$ for seniors. The others have unequal rates: B is $0.40$ vs $0.33$ (the counts of owners are equal, but the group sizes are not), C is $0.50$ vs $0.67$, and D is $0.33$ vs $0.50$.`
    },
    {
      id: 'STP3-06', topic: 'STP3', type: 'mc', diff: 2,
      stem: R`A survey asked people in four age groups whether they own a smartwatch. The bar chart shows the percent of the people <i>in each age group</i> who said yes. Which statement is supported by the bar chart?`,
      figure: { type: 'bar', alt: 'Bar chart of the percent of each age group who own a smartwatch: ages 18-29, 40 percent; ages 30-49, 30 percent; ages 50-64, 20 percent; ages 65 and over, 10 percent.', categories: [{ label: '18-29', value: 40 }, { label: '30-49', value: 30 }, { label: '50-64', value: 20 }, { label: '65+', value: 10 }], ylabel: 'Percent who own a smartwatch', ymax: 50, ystep: 10 },
      choices: [
        R`A person in the 18-29 age group is more likely to own a smartwatch than a person aged 65 or over.`,
        R`Of all the people who own a smartwatch, 40% are in the 18-29 age group.`,
        R`More people in the survey are in the 18-29 age group than in any other age group.`,
        R`Age and smartwatch ownership are not associated, because every group has some owners.`
      ],
      answer: 0,
      explain: R`Each bar is a conditional relative frequency (percent of an age group that owns a smartwatch), so the bars can be compared: 40% of the youngest group versus 10% of the oldest. The chart does not give the share of owners who are in an age group (B reverses the condition), it says nothing about how many people are in each group (C), and the different percentages show an association (D).`
    },
    {
      id: 'STP3-07', topic: 'STP3', type: 'multi', diff: 3,
      stem: R`The table gives joint relative frequencies for the students at a school, classified by class and by whether the student takes an AP course.
        <table class="q-table"><tr><th></th><th>Takes AP</th><th>Does not take AP</th><th>Total</th></tr>
        <tr><th>Seniors</th><td>0.15</td><td>0.15</td><td>0.30</td></tr>
        <tr><th>Other students</th><td>0.25</td><td>0.45</td><td>0.70</td></tr>
        <tr><th>Total</th><td>0.40</td><td>0.60</td><td>1.00</td></tr></table>
        Which of the following statements are true? Select all that apply.`,
      choices: [
        R`Among seniors, the relative frequency of taking an AP course is 0.50.`,
        R`Among students who take an AP course, 15% are seniors.`,
        R`Among students who take an AP course, the relative frequency of seniors is 0.375.`,
        R`Seniors take AP courses at a higher rate than the other students do, so class and AP enrollment are associated.`,
        R`The marginal relative frequency of taking an AP course is 0.25.`
      ],
      answer: [0, 2, 3],
      explain: R`Conditional on seniors: $0.15/0.30 = 0.50$ (true). Conditional on AP students: $0.15/0.40 = 0.375$, not 0.15 (so B is false and C is true). Among other students the AP rate is $0.25/0.70 \approx 0.36 < 0.50$, so seniors take AP at a higher rate and there is an association (D true). The marginal relative frequency of AP is the column total, 0.40, not 0.25 (E false).`
    },

    /* ================= STP4 ================= */
    {
      id: 'STP4-01', topic: 'STP4', type: 'mc', diff: 1,
      stem: R`The scatterplot shows the age and the asking price of nine used cars of the same model, together with the least-squares line $\hat{y} = 22.4 - 1.6x$, where $x$ is the age in years and $\hat{y}$ is the predicted price in thousands of dollars. Which is the best interpretation of the slope?`,
      figure: { type: 'scatter', alt: 'Scatterplot of price in thousands of dollars against age in years for nine cars, with a decreasing fitted line from about 20.8 at age 1 to about 8 at age 9. Points: (1, 20.3), (2, 20.7), (3, 15.6), (4, 17.5), (5, 13.4), (6, 13.3), (7, 12.2), (8, 8.1), (9, 8.5).', dots: [[1, 20.3], [2, 20.7], [3, 15.6], [4, 17.5], [5, 13.4], [6, 13.3], [7, 12.2], [8, 8.1], [9, 8.5]], line: { m: -1.6, b: 22.4 }, xr: [0, 10], yr: [0, 25], xstep: 1, ystep: 5, xlabel: 'Age (years)', ylabel: 'Price (thousands of dollars)' },
      choices: [
        R`For each additional year of age, the predicted price decreases by about \$1,600.`,
        R`For each additional year of age, the predicted price decreases by about \$1.60.`,
        R`For each additional \$1,000 in price, the age of the car is predicted to decrease by 1.6 years.`,
        R`Each year, a car loses 1.6% of its value.`
      ],
      answer: 0,
      explain: R`The slope is $-1.6$ in units of (thousands of dollars) per (year), so the predicted price drops 1.6 thousand dollars, or \$1,600, per additional year. Choice B ignores that $y$ is in thousands of dollars; choice C swaps the roles of $x$ and $y$; choice D confuses a constant amount per year with a percent.`
    },
    {
      id: 'STP4-02', topic: 'STP4', type: 'num', diff: 1,
      stem: R`For puppies between 4 and 16 weeks old, a least-squares line predicts weight in kilograms from age in weeks: $\hat{y} = 1.2 + 0.85x$. A puppy that is 10 weeks old weighs 9.4 kg. What is the residual for this puppy, in kilograms?`,
      answer: -0.3, tol: 0.005, unit: 'kg',
      explain: R`The predicted weight is $1.2 + 0.85(10) = 9.7$ kg. Residual $=$ actual $-$ predicted $= 9.4 - 9.7 = -0.3$ kg, so the model overestimates this puppy's weight. Subtracting in the other order gives $+0.3$, a sign error.`
    },
    {
      id: 'STP4-03', topic: 'STP4', type: 'mc', diff: 2,
      stem: R`The residual plot shown comes from fitting a least-squares line to a data set. Which conclusion is best supported by the residual plot?`,
      figure: { type: 'scatter', alt: 'Residual plot: ten points with x from 1 to 10 and residuals 4.0, 1.8, -0.6, -2.4, -2.8, -2.8, -2.4, -0.6, 1.8, 4.0 about a horizontal line at zero. The residuals are positive, then negative, then positive, forming a U shape.', dots: [[1, 4], [2, 1.8], [3, -0.6], [4, -2.4], [5, -2.8], [6, -2.8], [7, -2.4], [8, -0.6], [9, 1.8], [10, 4]], line: { m: 0, b: 0 }, xr: [0, 11], yr: [-5, 5], xstep: 1, ystep: 1, xlabel: 'x', ylabel: 'Residual' },
      choices: [
        R`A linear model is appropriate, because the residuals are centered around zero.`,
        R`A linear model is not appropriate, because the residuals show a curved pattern.`,
        R`The data contain one influential outlier.`,
        R`The spread of the residuals increases as $x$ increases.`
      ],
      answer: 1,
      explain: R`Residuals from a least-squares line always average to zero, so being centered at zero says nothing about fit (choice A). A good linear model leaves a residual plot with no pattern; the U-shape means that the data are curved and a nonlinear model would fit better. There is no single extreme point (C), and the vertical spread is not systematically fanning out (D).`
    },
    {
      id: 'STP4-04', topic: 'STP4', type: 'mc', diff: 2, task: [15],
      stem: R`A student, Tomas, is comparing two data sets. The correlation between hours of television per week and grade point average is $r = -0.92$. The correlation between height and arm span for a group of students is $r = 0.40$. Tomas says, "The second association is stronger, because a negative correlation is a bad sign and means the relationship is weak."
        <br>Which response best addresses Tomas's misconception?`,
      choices: [
        R`The sign of $r$ tells the direction of the association; the strength of a linear association is given by how close $|r|$ is to 1, so $r = -0.92$ shows a stronger linear association than $r = 0.40$.`,
        R`Tomas is correct: a positive correlation is always stronger than a negative one.`,
        R`The strength of an association is determined by the steepness of the fitted line, so neither correlation can be compared without the slopes.`,
        R`Neither value can be compared, because a correlation is meaningful only when one variable causes the other.`
      ],
      answer: 0,
      explain: R`The correlation coefficient has two features: its sign gives the direction (negative: as one variable increases the other tends to decrease) and its absolute value gives the strength of the <i>linear</i> relationship. Since $|-0.92| > |0.40|$, the first association is much stronger. Strength is not the same as slope (C), and $r$ describes association whether or not there is causation (D).`
    },
    {
      id: 'STP4-05', topic: 'STP4', type: 'mc', diff: 2,
      stem: R`The scatterplot shows the age of a machine in years and the number of units it produces per hour, for 12 machines. Which of the following is closest to the correlation coefficient $r$ for these data?`,
      figure: { type: 'scatter', alt: 'Scatterplot of 12 points that fall from upper left to lower right, fairly close to a straight line. Points: (1, 17), (2, 14), (3, 16), (4, 11), (5, 13), (6, 11), (7, 12), (8, 8), (9, 10), (10, 6), (11, 9), (12, 5).', dots: [[1, 17], [2, 14], [3, 16], [4, 11], [5, 13], [6, 11], [7, 12], [8, 8], [9, 10], [10, 6], [11, 9], [12, 5]], xr: [0, 13], yr: [0, 20], xstep: 1, ystep: 5, xlabel: 'Age of machine (years)', ylabel: 'Units per hour' },
      choices: [R`$-0.9$`, R`$-0.5$`, R`$0.5$`, R`$0.9$`],
      answer: 0, order: 'fixed',
      explain: R`The points slope downward, so $r$ is negative, and they lie close to a line, so $|r|$ is near 1. (The computed value is about $-0.91$.) Choosing $0.9$ has the right strength but the wrong direction; $-0.5$ would describe a much looser cloud.`
    },
    {
      id: 'STP4-06', topic: 'STP4', type: 'mc', diff: 3, task: [21],
      stem: R`The scatterplot shows the age and height of nine children between 2 and 10 years old, with the least-squares line $\hat{y} = 75 + 6x$, where $x$ is age in years and $\hat{y}$ is height in centimeters. The correlation is $r \approx 0.99$. A student, Luis, writes:
        <div class="work">"For a 30-year-old, $\hat{y} = 75 + 6(30) = 255$. The correlation is almost 1, so I can trust that a 30-year-old is about 255 cm tall."</div>
        Which is the best evaluation of Luis's work?`,
      figure: { type: 'scatter', alt: 'Scatterplot of height in centimeters against age in years from 2 to 10, with a rising fitted line. Points: (2, 86), (3, 91), (4, 103), (5, 103), (6, 114), (7, 118), (8, 120), (9, 128), (10, 136).', dots: [[2, 86], [3, 91], [4, 103], [5, 103], [6, 114], [7, 118], [8, 120], [9, 128], [10, 136]], line: { m: 6, b: 75 }, xr: [0, 12], yr: [60, 150], xstep: 2, ystep: 10, xlabel: 'Age (years)', ylabel: 'Height (cm)' },
      choices: [
        R`The arithmetic is correct and, since $r$ is close to 1, the prediction is reliable.`,
        R`The arithmetic is correct, but 30 is far outside the ages in the data, so there is no reason to think the linear pattern continues; the prediction is an unreliable extrapolation.`,
        R`The arithmetic is incorrect: the prediction should be $6 + 75(30)$.`,
        R`The prediction is reliable for any $x$-value, because the least-squares line minimizes the sum of the squared residuals.`
      ],
      answer: 1,
      explain: R`$75 + 6(30) = 255$ is a correct calculation of the equation's output. But the line was fit only to ages 2 through 10; using it far outside that interval is extrapolation, and a value of 255 cm is not plausible because growth slows and stops. A high $r$ describes how well the line fits the observed range only. Choice C reverses slope and intercept; choice D confuses "best fit to the data" with "valid everywhere".`
    },
    {
      id: 'STP4-07', topic: 'STP4', type: 'num', diff: 1,
      stem: R`For a set of paired data, the correlation coefficient is $r = -0.80$. What percent of the variation in $y$ is accounted for by the linear relationship with $x$?`,
      answer: 64, tol: 0, unit: '%',
      explain: R`The coefficient of determination is $r^2 = (-0.80)^2 = 0.64$, so 64% of the variation in $y$ is accounted for by its linear relationship with $x$. Answering 80% (using $|r|$) or $-64\%$ are the usual errors; $r^2$ can never be negative.`
    },
    {
      id: 'STP4-08', topic: 'STP4', type: 'mc', diff: 2,
      stem: R`A biologist fits a least-squares line to the lengths $x$ (in cm) and weights $\hat{y}$ (in kg) of fish of one species, using fish between 20 cm and 50 cm long: $\hat{y} = -45 + 2.8x$. Which is the best interpretation of the $y$-intercept?`,
      choices: [
        R`A fish 0 cm long is predicted to weigh $-45$ kg; this is not meaningful, since $x = 0$ is far outside the data, and the intercept just positions the line.`,
        R`Each additional centimeter of length is associated with an increase of 45 kg in predicted weight.`,
        R`A fish that weighs 0 kg is predicted to be 45 cm long.`,
        R`The average fish in the sample weighs 45 kg less than the longest fish.`
      ],
      answer: 0,
      explain: R`The intercept is the predicted value of $y$ when $x = 0$. Here that would be a fish of length 0 cm, which is outside the data (20 to 50 cm) and gives an impossible negative weight, so it has no practical meaning. Choice B describes a slope; choice C swaps $x$ and $y$ (a weight of 0 corresponds to $x = 45/2.8 \approx 16$ cm).`
    },
    {
      id: 'STP4-09', topic: 'STP4', type: 'mc', diff: 2, task: [9],
      stem: R`Over 12 months, the monthly ice cream sales in a town and the monthly number of visits to the town swimming pool have a correlation of $r = 0.88$. A student concludes, "Buying ice cream makes people go swimming." The teacher wants a response that helps students see why the data do not establish cause and effect. Which response is most helpful?`,
      choices: [
        R`Ask students to name another variable, such as the temperature or the season, that could affect both quantities, and to explain how that could produce a strong correlation without either quantity causing the other.`,
        R`Tell students that $r = 0.88$ is too small to show any relationship.`,
        R`Have students remove the highest month and recompute $r$, because a correlation is caused by a few extreme values.`,
        R`Tell students that correlation implies causation whenever $r$ is greater than 0.8.`
      ],
      answer: 0,
      explain: R`A strong correlation can arise from a lurking (confounding) variable that influences both quantities: in summer both ice cream sales and swimming increase. Only a randomized experiment can establish cause and effect. Choice B is false ($r = 0.88$ is a strong linear association); choice C mistakes what removing a point would do to the meaning of $r$; choice D states the misconception itself.`
    }
    ,

    /* ================= STP5 ================= */
    {
      id: 'STP5-01', topic: 'STP5', type: 'num', diff: 1,
      stem: R`In a class of 30 students, 14 play soccer, 9 play basketball, and 4 play both sports. How many students in the class play neither sport?`,
      answer: 11, tol: 0, unit: 'students',
      explain: R`The number who play at least one sport is $14 + 9 - 4 = 19$ (subtracting the 4 who were counted twice). So $30 - 19 = 11$ students play neither. Forgetting to subtract the overlap gives $30 - 23 = 7$.`
    },
    {
      id: 'STP5-02', topic: 'STP5', type: 'mc', diff: 2,
      stem: R`For events $A$ and $B$ in a sample space, $P(A) = 0.5$, $P(B) = 0.4$, and $P(A \cup B) = 0.7$. Which statement is true?`,
      choices: [
        R`$A$ and $B$ are independent.`,
        R`$A$ and $B$ are mutually exclusive.`,
        R`$P(A \mid B) = 0.4$`,
        R`$P(A \cap B) = 0.9$`
      ],
      answer: 0,
      explain: R`By the addition rule, $P(A \cap B) = P(A) + P(B) - P(A \cup B) = 0.5 + 0.4 - 0.7 = 0.2$. Since $P(A)P(B) = (0.5)(0.4) = 0.2 = P(A \cap B)$, the events are independent. They are not mutually exclusive, because $P(A \cap B) \neq 0$ (B); $P(A \mid B) = 0.2/0.4 = 0.5$, not 0.4 (C, which is $P(B \mid A)$); and 0.9 is $P(A) + P(B)$, which forgets to subtract $P(A \cup B)$ (D).`
    },
    {
      id: 'STP5-03', topic: 'STP5', type: 'mc', diff: 2,
      stem: R`A survey of 200 adults asked where they live and whether they own a pet.
        <table class="q-table"><tr><th></th><th>Owns a pet</th><th>Does not own a pet</th><th>Total</th></tr>
        <tr><th>Urban</th><td>48</td><td>72</td><td>120</td></tr>
        <tr><th>Rural</th><td>44</td><td>36</td><td>80</td></tr>
        <tr><th>Total</th><td>92</td><td>108</td><td>200</td></tr></table>
        One of the 200 adults is chosen at random. Given that the person owns a pet, what is the probability that the person lives in a rural area?`,
      choices: [R`$\dfrac{11}{23}$`, R`$\dfrac{11}{20}$`, R`$\dfrac{11}{50}$`, R`$\dfrac{2}{5}$`],
      answer: 0,
      explain: R`Restrict the sample space to the 92 pet owners; 44 of them live in a rural area, so $P(\text{rural} \mid \text{pet}) = \dfrac{44}{92} = \dfrac{11}{23}$. Choice B is $P(\text{pet} \mid \text{rural}) = 44/80$; choice C is $P(\text{rural and pet}) = 44/200$; choice D is $P(\text{rural}) = 80/200$.`
    },
    {
      id: 'STP5-04', topic: 'STP5', type: 'mc', diff: 2, task: [15],
      stem: R`A fair six-sided die is rolled once. Event $A$ is "the die shows a 2" and event $B$ is "the die shows a 5." A student, Renee, says, "$A$ and $B$ are independent, because they can't both happen." Which response best addresses Renee's statement?`,
      choices: [
        R`Renee is incorrect: if $A$ occurs then $B$ cannot, so $P(B \mid A) = 0$, which is not equal to $P(B) = \frac{1}{6}$. The events are mutually exclusive but not independent.`,
        R`Renee is correct: events that cannot happen together do not affect each other, so they are independent.`,
        R`Renee is incorrect: the events are independent, because $P(A) = P(B) = \frac{1}{6}$.`,
        R`Renee is incorrect: the events are neither mutually exclusive nor independent, because they are events on the same roll.`
      ],
      answer: 0,
      explain: R`Independence means $P(B \mid A) = P(B)$, equivalently $P(A \cap B) = P(A)P(B)$. Here $P(A \cap B) = 0$ but $P(A)P(B) = \frac{1}{36} \neq 0$, so the events are dependent: learning that $A$ occurred tells you for certain that $B$ did not. Renee has confused "mutually exclusive" with "independent" (B); equal probabilities do not make events independent (C); and choice D is wrong because $A$ and $B$ cannot occur together, so they <i>are</i> mutually exclusive.`
    },
    {
      id: 'STP5-05', topic: 'STP5', type: 'num', diff: 2,
      stem: R`A bag contains 5 red marbles and 3 blue marbles. Two marbles are drawn at random, one after the other, <b>without replacement</b>. What is the probability that both marbles are red? Round to the nearest thousandth.`,
      answer: 0.357, tol: 0.001,
      explain: R`$P(\text{first red}) = \frac{5}{8}$. Given that, 4 of the remaining 7 marbles are red, so $P(\text{second red} \mid \text{first red}) = \frac{4}{7}$. By the general multiplication rule, $P(\text{both red}) = \frac{5}{8} \cdot \frac{4}{7} = \frac{5}{14} \approx 0.357$. Using $\frac{5}{8} \cdot \frac{5}{8} \approx 0.391$ treats the draws as independent (with replacement).`
    },
    {
      id: 'STP5-06', topic: 'STP5', type: 'multi', diff: 2, task: [17, 2],
      stem: R`A fair six-sided die is rolled three times. Four students each write a method for finding the probability of getting <b>at least one 6</b>. Which methods are valid? Select all that apply.
        <div class="work"><b>Ana:</b> $1 - \left(\frac{5}{6}\right)^3$</div>
        <div class="work"><b>Ben:</b> $3 \cdot \frac{1}{6} = \frac{1}{2}$</div>
        <div class="work"><b>Cho:</b> $3\cdot\frac{1}{6}\left(\frac{5}{6}\right)^2 + 3\cdot\left(\frac{1}{6}\right)^2\frac{5}{6} + \left(\frac{1}{6}\right)^3$</div>
        <div class="work"><b>Dee:</b> $1 - \left(\frac{1}{6}\right)^3$</div>`,
      choices: [R`Ana's method`, R`Ben's method`, R`Cho's method`, R`Dee's method`],
      answer: [0, 2], order: 'fixed',
      explain: R`Ana uses the complement: $P(\text{no sixes}) = (5/6)^3$, so $P(\text{at least one}) = 1 - 125/216 = 91/216$. Cho adds the probabilities of exactly one, exactly two, and exactly three sixes: $\frac{75}{216} + \frac{15}{216} + \frac{1}{216} = \frac{91}{216}$, so the method is valid. Ben adds the three single-roll probabilities, which double counts outcomes with more than one 6 (and would exceed 1 with enough rolls). Dee's expression is the probability of <i>not getting three sixes</i>, which is a different event.`
    },
    {
      id: 'STP5-07', topic: 'STP5', type: 'mc', diff: 3,
      stem: R`A factory has two machines. Machine A makes 60% of the items, and 2% of its items are defective. Machine B makes the other 40% of the items, and 5% of its items are defective. An item is chosen at random from all the items made and is found to be defective. What is the probability that it was made by Machine A?`,
      choices: [R`0.012`, R`0.032`, R`0.375`, R`0.600`],
      answer: 2, order: 'fixed',
      explain: R`$P(A \cap D) = 0.60(0.02) = 0.012$ and $P(B \cap D) = 0.40(0.05) = 0.020$, so $P(D) = 0.032$. Then $P(A \mid D) = \dfrac{0.012}{0.032} = 0.375$. Choice D is the unconditional $P(A)$; choice A is the joint probability $P(A \cap D)$; choice B is $P(D)$.`
    },
    {
      id: 'STP5-08', topic: 'STP5', type: 'mc', diff: 1,
      stem: R`A fair coin is flipped twice. The sample space is $\{HH, HT, TH, TT\}$. Let $A$ be the event "at least one flip is heads" and let $B$ be the event "both flips show the same face." Which set is $A \cap B$?`,
      choices: [R`$\{HH\}$`, R`$\{HH, TT\}$`, R`$\{HH, HT, TH\}$`, R`$\{HT, TH\}$`],
      answer: 0,
      explain: R`$A = \{HH, HT, TH\}$ and $B = \{HH, TT\}$. The intersection contains the outcomes in <i>both</i> events: $\{HH\}$. The set $\{HH, TT\}$ is $B$ itself; $\{HH, HT, TH\}$ is $A$; $\{HT, TH\}$ is the complement of $B$.`
    },
    {
      id: 'STP5-09', topic: 'STP5', type: 'multi', diff: 2,
      stem: R`A survey of 100 students recorded gender and whether the student is in the school band.
        <table class="q-table"><tr><th></th><th>In band</th><th>Not in band</th><th>Total</th></tr>
        <tr><th>Girls</th><td>12</td><td>28</td><td>40</td></tr>
        <tr><th>Boys</th><td>18</td><td>42</td><td>60</td></tr>
        <tr><th>Total</th><td>30</td><td>70</td><td>100</td></tr></table>
        One student is chosen at random. Which statements are true? Select all that apply.`,
      choices: [
        R`Being a girl and being in the band are independent events.`,
        R`Being a girl and being in the band are mutually exclusive events.`,
        R`$P(\text{girl} \mid \text{in band}) = 0.4$`,
        R`$P(\text{in band} \mid \text{girl}) = 0.4$`,
        R`$P(\text{boy and in band}) = 0.18$`
      ],
      answer: [0, 2, 4],
      explain: R`$P(\text{in band} \mid \text{girl}) = 12/40 = 0.30 = P(\text{in band})$, so the events are independent (A true, D false). They are not mutually exclusive, since 12 girls are in the band (B false). $P(\text{girl} \mid \text{in band}) = 12/30 = 0.4$ (C true; note it differs from the reverse conditional probability). $P(\text{boy and in band}) = 18/100 = 0.18$ (E true).`
    },
    {
      id: 'STP5-10', topic: 'STP5', type: 'mc', diff: 3, task: [18],
      stem: R`A student, Elena, is asked for the probability that a card drawn at random from a standard 52-card deck is a heart or a king. She writes:
        <div class="work">$P(\text{heart or king}) = \dfrac{13}{52} + \dfrac{4}{52} = \dfrac{17}{52}$</div>
        Which statement best describes Elena's work?`,
      choices: [
        R`She added the probabilities without accounting for the king of hearts, which is in both events; the correct value is $\frac{13}{52} + \frac{4}{52} - \frac{1}{52} = \frac{16}{52}$.`,
        R`She is correct, because the events "heart" and "king" are mutually exclusive.`,
        R`She should have multiplied the probabilities, since the word "or" indicates multiplication: $\frac{13}{52} \cdot \frac{4}{52} = \frac{1}{52}$.`,
        R`She double counted the king of hearts, so she should subtract $\frac{4}{52}$, giving $\frac{13}{52}$.`
      ],
      answer: 0,
      explain: R`Elena used the addition rule for mutually exclusive events, but heart and king overlap in one card (the king of hearts), which gets counted twice. The general addition rule is $P(A \cup B) = P(A) + P(B) - P(A \cap B) = \frac{13}{52} + \frac{4}{52} - \frac{1}{52} = \frac{16}{52} = \frac{4}{13}$. Equivalently, there are 13 hearts plus 3 non-heart kings, or 16 cards. Choice D subtracts the whole probability of a king instead of only the overlap.`
    },

    /* ================= STP6 ================= */
    {
      id: 'STP6-01', topic: 'STP6', type: 'num', diff: 1,
      stem: R`A restaurant's lunch special lets a customer choose 1 of 5 sandwiches, 1 of 3 sides, and 1 of 4 drinks. How many different lunch specials are possible?`,
      answer: 60, tol: 0,
      explain: R`By the fundamental counting principle, multiply the number of choices at each stage: $5 \times 3 \times 4 = 60$. Adding the numbers of choices ($5 + 3 + 4 = 12$) is the usual error.`
    },
    {
      id: 'STP6-02', topic: 'STP6', type: 'mc', diff: 2,
      stem: R`A club with 9 members will choose a president, a vice president, and a secretary, and no member may hold more than one office. In how many ways can the offices be filled?`,
      choices: [R`84`, R`504`, R`729`, R`27`],
      answer: 1,
      explain: R`The offices are different, so order matters: $P(9,3) = 9 \cdot 8 \cdot 7 = 504$. Choosing 84 uses $\binom{9}{3}$ (a committee of 3, order ignored). Choosing 729 allows one person to hold several offices ($9^3$), and 27 is $9 \cdot 3$.`
    },
    {
      id: 'STP6-03', topic: 'STP6', type: 'num', diff: 2, calc: true,
      stem: R`A committee of 3 people is chosen at random from 5 juniors and 4 seniors. What is the probability that the committee has exactly 2 juniors and 1 senior? Round to the nearest thousandth.`,
      answer: 0.476, tol: 0.001,
      explain: R`The number of equally likely committees is $\binom{9}{3} = 84$. The favorable committees: choose 2 of the 5 juniors and 1 of the 4 seniors, $\binom{5}{2} \cdot \binom{4}{1} = 10 \cdot 4 = 40$. So the probability is $\dfrac{40}{84} = \dfrac{10}{21} \approx 0.476$.`
    },
    {
      id: 'STP6-04', topic: 'STP6', type: 'mc', diff: 2, calc: true,
      stem: R`A license plate consists of 3 different letters followed by 2 digits. The letters cannot repeat, but the digits may repeat. How many license plates are possible?`,
      choices: [R`260,000`, R`1,404,000`, R`1,560,000`, R`1,757,600`],
      answer: 2, order: 'fixed',
      explain: R`Using the fundamental counting principle: $26 \cdot 25 \cdot 24$ ways to fill the letters (no repeats) and $10 \cdot 10$ ways for the digits, so $26 \cdot 25 \cdot 24 \cdot 100 = 1{,}560{,}000$. Choice D lets the letters repeat ($26^3 \cdot 100$); choice B also prevents the digits from repeating ($26 \cdot 25 \cdot 24 \cdot 10 \cdot 9$); choice A treats the letters as a combination, ignoring their order.`
    },
    {
      id: 'STP6-05', topic: 'STP6', type: 'mc', diff: 2, task: [17],
      stem: R`A teacher asks, "How many different 4-digit codes can be made from the digits 0 through 9 if no digit may be used more than once?" A student, Ari, writes:
        <div class="work">Order doesn't matter when digits can't repeat, so I'll use a combination:<br>$\binom{10}{4} = 210$</div>
        Which response best evaluates Ari's work?`,
      choices: [
        R`Ari should have used a permutation, because the order of the digits matters (a code 1234 is different from 4321): $10 \cdot 9 \cdot 8 \cdot 7 = 5040$.`,
        R`Ari is correct: when no digit can repeat, the order of the digits does not matter.`,
        R`Ari should have used $10^4 = 10{,}000$, because there are 10 choices for each of the 4 places.`,
        R`Ari should multiply 210 by 4 for the four positions, giving 840.`
      ],
      answer: 0,
      explain: R`Whether a code is a combination or a permutation depends on whether rearranging the same digits gives a different outcome, not on whether repeats are allowed. Codes such as 1234 and 4321 are different, so order matters: $P(10,4) = 10 \cdot 9 \cdot 8 \cdot 7 = 5040$ (equivalently, $210 \cdot 4! = 5040$). Choice C would be correct if digits could repeat, and choice D multiplies by 4 rather than $4! = 24$.`
    },
    {
      id: 'STP6-06', topic: 'STP6', type: 'multi', diff: 2, task: [6],
      stem: R`A teacher wants problems whose answer is exactly $\binom{8}{3} = 56$. Which of these problems have that answer? Select all that apply.`,
      choices: [
        R`How many ways can 3 of 8 students be chosen to serve on a committee, if all committee members have the same role?`,
        R`How many ways can a president, a vice president, and a treasurer be chosen from 8 students?`,
        R`How many ways can 5 of 8 students be chosen to form a team?`,
        R`How many ways can 3 of 8 different books be arranged in order on a shelf?`
      ],
      answer: [0, 2],
      explain: R`Choosing 3 of 8 with no order gives $\binom{8}{3} = 56$ (first problem). Choosing 5 of 8 gives $\binom{8}{5} = 56$ as well, since choosing the 5 who are on the team is the same as choosing the 3 who are left off (third problem). The second and fourth problems assign distinct positions, so order matters and each has $8 \cdot 7 \cdot 6 = 336$ outcomes.`
    },
    {
      id: 'STP6-07', topic: 'STP6', type: 'mc', diff: 2,
      stem: R`A fair coin is flipped 5 times. What is the probability of getting exactly 2 heads?`,
      choices: [R`$\dfrac{1}{32}$`, R`$\dfrac{1}{4}$`, R`$\dfrac{5}{16}$`, R`$\dfrac{2}{5}$`],
      answer: 2,
      explain: R`There are $2^5 = 32$ equally likely sequences of flips. The number with exactly 2 heads is the number of ways to choose which 2 of the 5 flips are heads, $\binom{5}{2} = 10$. The probability is $\dfrac{10}{32} = \dfrac{5}{16}$. Choice A is the probability of one particular sequence, choice B is $(1/2)^2$, and choice D uses the fraction of flips that are heads.`
    },
    {
      id: 'STP6-08', topic: 'STP6', type: 'mc', diff: 3,
      stem: R`Five friends stand in a line for a photograph. In how many different arrangements do Nia and Omar stand next to each other?`,
      choices: [R`24`, R`48`, R`96`, R`120`],
      answer: 1, order: 'fixed',
      explain: R`Treat Nia and Omar as one block. There are $4!= 24$ ways to arrange the block and the three other friends, and 2 ways to order Nia and Omar within the block, so $2 \cdot 24 = 48$. Choice A forgets the order within the block; choice C counts the internal order twice; choice D is all $5! = 120$ arrangements with no restriction.`
    }
    ,

    /* ================= STP7 ================= */
    {
      id: 'STP7-01', topic: 'STP7', type: 'num', diff: 1,
      stem: R`A carnival game uses a spinner. The table shows the possible net gains (in dollars) for one spin and their probabilities.
        <table class="q-table"><tr><th>Net gain</th><td>\$10</td><td>\$2</td><td>&minus;\$4</td></tr>
        <tr><th>Probability</th><td>0.2</td><td>0.5</td><td>0.3</td></tr></table>
        What is the expected net gain for one spin, in dollars?`,
      answer: 1.8, tol: 0.005, unit: 'dollars',
      explain: R`$E = 10(0.2) + 2(0.5) + (-4)(0.3) = 2 + 1 - 1.2 = 1.8$. Averaging the three values without weighting ($\frac{10 + 2 - 4}{3} \approx 2.67$) ignores the probabilities.`
    },
    {
      id: 'STP7-02', topic: 'STP7', type: 'mc', diff: 2,
      stem: R`To play a game, you pay \$4. You then roll two fair six-sided dice. If the sum is 7, you receive \$18; otherwise you receive nothing. What is your expected <b>net</b> gain per play?`,
      choices: [R`&minus;\$1.00`, R`\$3.00`, R`\$2.33`, R`&minus;\$4.00`],
      answer: 0,
      explain: R`The probability of a sum of 7 is $\frac{6}{36} = \frac{1}{6}$. Net gain is $\$14$ with probability $\frac{1}{6}$ and $-\$4$ with probability $\frac{5}{6}$: $E = 14 \cdot \frac{1}{6} - 4 \cdot \frac{5}{6} = -\frac{6}{6} = -1$. Equivalently, the expected prize is $18 \cdot \frac{1}{6} = 3$, minus the \$4 cost. Choice B forgets the cost of playing; choice C omits the \$4 lost on the other rolls; choice D is the cost only.`
    },
    {
      id: 'STP7-03', topic: 'STP7', type: 'num', diff: 2,
      stem: R`A survey recorded the number of cars owned by each of 50 households. The bar chart shows the results. Based on this empirical distribution, what is the expected number of cars per household?`,
      figure: { type: 'bar', alt: 'Bar chart of the number of households owning 0, 1, 2, 3, and 4 cars: 4 households own 0 cars, 18 own 1 car, 20 own 2 cars, 6 own 3 cars, and 2 own 4 cars.', categories: [{ label: '0 cars', value: 4 }, { label: '1 car', value: 18 }, { label: '2 cars', value: 20 }, { label: '3 cars', value: 6 }, { label: '4 cars', value: 2 }], ylabel: 'Number of households', ymax: 24, ystep: 4 },
      answer: 1.68, tol: 0.005, unit: 'cars',
      explain: R`Each relative frequency is a count divided by 50: $0.08, 0.36, 0.40, 0.12, 0.04$. Then $E = 0(0.08) + 1(0.36) + 2(0.40) + 3(0.12) + 4(0.04) = 1.68$. (Equivalently, the total number of cars is $0 + 18 + 40 + 18 + 8 = 84$, and $84/50 = 1.68$.) Averaging the five category values $0, 1, 2, 3, 4$ to get 2 ignores how many households are in each category.`
    },
    {
      id: 'STP7-04', topic: 'STP7', type: 'multi', diff: 2,
      stem: R`A prize plan is chosen from two options. The table shows the possible payouts and their probabilities.
        <table class="q-table"><tr><th>Plan A payout</th><td>\$120</td><td>\$40</td></tr>
        <tr><th>Probability</th><td>0.5</td><td>0.5</td></tr></table>
        <table class="q-table"><tr><th>Plan B payout</th><td>\$200</td><td>\$60</td><td>\$0</td></tr>
        <tr><th>Probability</th><td>0.3</td><td>0.4</td><td>0.3</td></tr></table>
        Which of the following statements are true? Select all that apply.`,
      choices: [
        R`The expected payout of Plan A is \$80.`,
        R`The expected payout of Plan B is \$84.`,
        R`If the choice is to be based only on expected payout, Plan B is the better choice.`,
        R`The two plans have the same expected payout.`,
        R`On any single play, Plan B will pay more than Plan A.`
      ],
      answer: [0, 1, 2],
      explain: R`Plan A: $120(0.5) + 40(0.5) = 80$. Plan B: $200(0.3) + 60(0.4) + 0(0.3) = 60 + 24 = 84$. Since $84 > 80$, Plan B has the larger expected payout, so it is preferred by that criterion. Expected value is a long-run average, not a guarantee for one play: Plan B can pay \$0 while Plan A always pays at least \$40.`
    },
    {
      id: 'STP7-05', topic: 'STP7', type: 'num', diff: 2,
      stem: R`A raffle sells 1,000 tickets. One ticket wins \$400, three tickets each win \$100, and ten tickets each win \$20. All other tickets win nothing. What ticket price, in dollars, would make the raffle fair (expected net gain of \$0 per ticket)?`,
      answer: 0.9, tol: 0.005, unit: 'dollars',
      explain: R`The expected winnings per ticket are $\dfrac{400 + 3(100) + 10(20)}{1000} = \dfrac{900}{1000} = 0.90$ dollars. A fair price makes the expected net gain zero, so the ticket price is \$0.90. Dividing the total prize money by the number of winning tickets (14) is a common slip.`
    },
    {
      id: 'STP7-06', topic: 'STP7', type: 'mc', diff: 2, task: [2, 3],
      stem: R`A student, Marcus, says, "In 3 flips of a fair coin, the expected number of heads is $3 \cdot \frac{1}{2} = 1.5$. But you can't get 1.5 heads in 3 flips, so the expected-value formula must be wrong." Which explanation would best help Marcus?`,
      choices: [
        R`The expected value is the long-run average number of heads over many sets of 3 flips; it does not need to be a possible outcome of a single set of flips.`,
        R`Marcus is right that 1.5 is not possible, so the expected value should be rounded up to 2 heads.`,
        R`The expected value is always the most likely outcome, and 1.5 is halfway between the two most likely outcomes, 1 and 2.`,
        R`The expected value tells exactly how many heads will occur in each set of 3 flips.`
      ],
      answer: 0,
      explain: R`Expected value is a weighted average of the possible values. It describes the long-run mean over many repetitions (here the mean of the number of heads across many sets of three flips approaches 1.5) and need not be an achievable value: $0(\frac18) + 1(\frac38) + 2(\frac38) + 3(\frac18) = 1.5$. Choices B and D treat the expected value as a prediction of a single trial; choice C is a common misconception (the expected value is not defined as the most likely outcome, and it can differ from the mode).`
    },
    {
      id: 'STP7-07', topic: 'STP7', type: 'mc', diff: 2, task: [17, 18],
      stem: R`A teacher gives the probability distribution of a random variable $X$:
        <table class="q-table"><tr><th>$x$</th><td>0</td><td>1</td><td>2</td><td>3</td></tr>
        <tr><th>$P(X = x)$</th><td>0.1</td><td>0.2</td><td>0.3</td><td>0.4</td></tr></table>
        A student, Nadia, writes: <div class="work">$E(X) = \dfrac{0 + 1 + 2 + 3}{4} = 1.5$</div>
        Which statement best describes Nadia's work?`,
      choices: [
        R`Nadia treated the four values as equally likely; weighting each value by its probability gives $E(X) = 2.0$.`,
        R`Nadia is correct: the expected value is the mean of the possible values.`,
        R`Nadia should have weighted the values by their probabilities and then divided by 4, giving 0.5.`,
        R`Nadia should have added the probabilities, so $E(X) = 1.0$.`
      ],
      answer: 0,
      explain: R`$E(X) = \sum x\,P(X = x) = 0(0.1) + 1(0.2) + 2(0.3) + 3(0.4) = 0 + 0.2 + 0.6 + 1.2 = 2.0$. Nadia found the unweighted mean of the possible values, which is the expected value only when all values are equally likely. The probabilities already act as weights (they sum to 1), so no further division is needed (C); the probabilities sum to 1 for every distribution (D).`
    },

    /* ================= STP8 ================= */
    {
      id: 'STP8-01', topic: 'STP8', type: 'mc', diff: 1,
      stem: R`The heights of the plants of one species are approximately normally distributed with mean 70 cm and standard deviation 8 cm. The shaded region under the curve is between 54 cm and 86 cm. About what percent of the plants have heights in the shaded region?`,
      figure: normalFig(70, 8, 54, 86, [46, 54, 62, 70, 78, 86, 94], 'Normal (bell-shaped) curve centered at 70 with tick marks at 46, 54, 62, 70, 78, 86, and 94. The region under the curve between 54 and 86 is shaded.'),
      choices: [R`47.5%`, R`68%`, R`95%`, R`99.7%`],
      answer: 2, order: 'fixed',
      explain: R`Since $54 = 70 - 2(8)$ and $86 = 70 + 2(8)$, the shaded region is within 2 standard deviations of the mean, which contains about 95% of a normal distribution (empirical rule). Choosing 68% uses 1 standard deviation; 99.7% uses 3; 47.5% is only the half of the region on one side of the mean.`
    },
    {
      id: 'STP8-02', topic: 'STP8', type: 'mc', diff: 2, task: [17],
      stem: R`On Test A, the scores have mean 72 and standard deviation 6. On Test B, the scores have mean 80 and standard deviation 5. Lena scored 84 on Test A and 91 on Test B. Lena says, "I did better on Test A, because 84 is 12 points above the mean and 91 is only 11 points above the mean." Which evaluation of Lena's reasoning is best?`,
      choices: [
        R`Lena is correct: the score with the larger number of points above the mean is the better relative performance.`,
        R`Lena is incorrect: her z-score is $\frac{84 - 72}{6} = 2.0$ on Test A but $\frac{91 - 80}{5} = 2.2$ on Test B, so she did relatively better on Test B.`,
        R`Lena is incorrect: she did better on Test B, because 91 is greater than 84.`,
        R`Lena is incorrect: her performances were equally good, because both scores are above the mean.`
      ],
      answer: 1,
      explain: R`Raw distances from the mean are not comparable when the standard deviations differ. Converting to z-scores measures each score in standard deviations from its mean: $z_A = 12/6 = 2.0$ and $z_B = 11/5 = 2.2$. Her Test B score is farther above the mean relative to the spread, so it is the better relative performance. Choice C reaches the right conclusion for the wrong reason (comparing raw scores from different tests).`
    },
    {
      id: 'STP8-03', topic: 'STP8', type: 'mc', diff: 2,
      stem: R`Scores on an exam are approximately normally distributed with mean 500 and standard deviation 100. The shaded region is the area to the left of 400. About what percent of the scores are 400 or lower?`,
      figure: normalFig(500, 100, 140, 400, [200, 300, 400, 500, 600, 700, 800], 'Normal curve centered at 500 with tick marks at 200, 300, 400, 500, 600, 700, and 800. The region under the curve to the left of 400 is shaded.'),
      choices: [R`16%`, R`34%`, R`68%`, R`84%`],
      answer: 0, order: 'fixed',
      explain: R`400 is one standard deviation below the mean. About 68% of the scores lie within one standard deviation of the mean, so about $100\% - 68\% = 32\%$ lie outside, and by symmetry half of that, 16%, lies below 400. Choice B is the area between 400 and 500; choice D is the area to the <i>right</i> of 400; choice C is the area between 400 and 600.`
    },
    {
      id: 'STP8-04', topic: 'STP8', type: 'num', diff: 2, calc: true,
      stem: R`Scores on an IQ test are approximately normally distributed with mean 100 and standard deviation 15. The shaded region is between 90 and 115. To the nearest hundredth, what proportion of scores are in the shaded region?`,
      figure: normalFig(100, 15, 90, 115, [90, 100, 115], 'Normal curve centered at 100 with tick marks at 90, 100, and 115. The region under the curve between 90 and 115 is shaded.'),
      answer: 0.59, tol: 0.005,
      explain: R`Standardize: $z = \dfrac{90 - 100}{15} \approx -0.667$ and $z = \dfrac{115 - 100}{15} = 1$. Then $P(-0.667 < Z < 1) = 0.8413 - 0.2525 = 0.5888 \approx 0.59$. With a graphing calculator: normalcdf(90, 115, 100, 15). Using the empirical rule alone (68%) would be too crude because 90 is not a whole number of standard deviations from the mean.`
    },
    {
      id: 'STP8-05', topic: 'STP8', type: 'num', diff: 3, calc: true,
      stem: R`The scores on a placement test are approximately normally distributed with mean 50 and standard deviation 10. A student must score in the top 10% to qualify for a scholarship. To the nearest tenth, what is the lowest score that qualifies?`,
      answer: 62.8, tol: 0.05,
      explain: R`The 90th percentile has $z \approx 1.2816$, so $x = 50 + 1.2816(10) \approx 62.8$. With a calculator: invNorm(0.90, 50, 10). Using $z = 1.645$ (the cutoff for the top 5%) or $z = 1.96$ would give scores that are too high.`
    },
    {
      id: 'STP8-06', topic: 'STP8', type: 'mc', diff: 2, task: [10],
      stem: R`A student, Jo, says, "If a data set is symmetric, then it is normally distributed." Which description of a data set is a <b>counterexample</b> to Jo's claim?`,
      choices: [
        R`A histogram that is symmetric, has one peak in the center, and is bell-shaped, with about 68% of the values within one standard deviation of the mean.`,
        R`A histogram with a long tail on the right and a single peak on the left.`,
        R`A histogram that is symmetric about its center in which all the bars have the same height.`,
        R`A histogram with a single peak and two outliers on the right.`
      ],
      answer: 2,
      explain: R`A counterexample must be symmetric but not normal. A histogram whose bars all have the same height (a uniform distribution) is symmetric but has no bell shape: about 58% of its values lie within one standard deviation of the mean and 100% within two, unlike the 68% and 95% of a normal distribution. Choice A describes a data set that is approximately normal, and choices B and D are not symmetric, so they do not test Jo's claim.`
    },
    {
      id: 'STP8-07', topic: 'STP8', type: 'mc', diff: 3, task: [21],
      stem: R`The lengths of a species of fish are approximately normally distributed with mean 70 mm and standard deviation 5 mm. A student, Kai, is asked for the proportion of fish shorter than 65 mm (the shaded region) and writes:
        <div class="work">$z = \dfrac{65 - 70}{5} = -1$, and 68% of the data are within 1 standard deviation, so the proportion is about 0.68.</div>
        Which statement about Kai's work is correct?`,
      figure: normalFig(70, 5, 52, 65, [55, 60, 65, 70, 75, 80, 85], 'Normal curve centered at 70 with tick marks at 55, 60, 65, 70, 75, 80, and 85. The region under the curve to the left of 65 is shaded.'),
      choices: [
        R`Kai's $z$-score is correct, but the 68% is the area between $z = -1$ and $z = 1$; the area to the left of $z = -1$ is about 16%.`,
        R`Kai's $z$-score should be $+1$, because 65 is less than the mean.`,
        R`Kai is correct: the area to the left of $z = -1$ is 68%, by symmetry.`,
        R`Kai's $z$-score is wrong because the divisor should be $5^2 = 25$.`
      ],
      answer: 0,
      explain: R`The calculation $z = (65 - 70)/5 = -1$ is right. But 68% is the area <i>between</i> $z = -1$ and $z = 1$. The remaining 32% is split equally between the two tails, so the proportion of fish shorter than 65 mm is about 16%. The work looks valid because of the correct $z$-score, but it answers a different question. Choices B and D misstate the $z$-score formula; C misuses symmetry.`
    },
    {
      id: 'STP8-08', topic: 'STP8', type: 'mc', diff: 1,
      stem: R`The weights of packages filled by a machine are approximately normally distributed with mean 500 g and standard deviation 12 g. The lightest 2.5% of the packages weigh less than about how many grams?`,
      choices: [R`464`, R`476`, R`488`, R`512`],
      answer: 1, order: 'fixed',
      explain: R`About 95% of the values are within 2 standard deviations of the mean, so 5% lie outside, and by symmetry 2.5% lie below $\mu - 2\sigma = 500 - 24 = 476$ g. Choice C is $\mu - \sigma$ (which marks the lowest 16%), choice A is $\mu - 3\sigma$ (the lowest 0.15%), and choice D is above the mean.`
    },
    {
      id: 'STP8-09', topic: 'STP8', type: 'multi', diff: 2,
      stem: R`A student wants to decide whether each of four data sets is approximately normally distributed. She finds the percent of the values within 1, 2, and 3 standard deviations of the mean. Which data sets are consistent with an approximately normal distribution? Select all that apply.`,
      choices: [
        R`Data set P: 66% within 1 standard deviation, 95% within 2, 99.5% within 3`,
        R`Data set Q: 70% within 1 standard deviation, 94% within 2, 100% within 3`,
        R`Data set R: 58% within 1 standard deviation, 100% within 2, 100% within 3`,
        R`Data set S: 82% within 1 standard deviation, 92% within 2, 96% within 3`
      ],
      answer: [0, 1],
      explain: R`For a normal distribution, about 68%, 95%, and 99.7% of the values fall within 1, 2, and 3 standard deviations of the mean. Sets P and Q are close to these percentages. Set R has too few values within 1 standard deviation and none beyond 2, as in a flat (uniform) distribution. Set S has too many values near the center and a heavy tail (4% beyond 3 standard deviations), which is not consistent with a normal distribution.`
    }
  );
})();
