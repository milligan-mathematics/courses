/* Praxis Elementary Education: Mathematics Subtest (5003) diagnostic: content map. DRAFT for review.
   Same shape as the 5165 topics.js so the 5165 engine can read it. Source: the ETS content outline for 5003
   (50 questions, 65 minutes, on-screen scientific calculator), skills paraphrased, tips written for the student.
     NO  = ETS I      Numbers and Operations                          (20 of 50 questions, 40%)
     AT  = ETS II     Algebraic Thinking                              (15 of 50, 30%)
     GM  = ETS III.A-D  Geometry and Measurement                      ( 8 of 50, our split of category III)
     DSP = ETS III.E-G  Data, Statistics, and Probability             ( 7 of 50, our split of category III)
   ETS publishes one blueprint line for III (about 15 questions, 30%). Splitting it into GM and DSP is our choice so
   students get two ratings instead of one (PLAN.md, decision 2). Each topic lists the ETS numbered items it covers
   in  ets: [...]  ("I.B.3" = category I, heading B, item 3; items with a, b, c sub-points stay with their parent);
   check_plan.py confirms that every numbered ETS item is covered exactly once.
   Fields added to the 5165 shape:  target = planned bank size,  ties = where MATH 253 / MATH 153 teaches it
   (the wording of the where-taught table in praxis-5003-chapter-guide/CHAPTER-GUIDE.md, which checks-engine.py compares). */
window.PXD = window.PXD || {};
PXD.bank = PXD.bank || [];

PXD.areas = [
  { id: 'NO',  cat: 'I',   outline: 'I',        title: 'Numbers and Operations',                  short: 'Numbers & Operations', blueprint: 20, pct: 40 },
  { id: 'AT',  cat: 'II',  outline: 'II',       title: 'Algebraic Thinking',                      short: 'Algebraic Thinking',   blueprint: 15, pct: 30 },
  { id: 'GM',  cat: 'III', outline: 'III.A-D',  title: 'Geometry and Measurement',                short: 'Geometry & Measurement', blueprint: 8,  pct: 16 },
  { id: 'DSP', cat: 'III', outline: 'III.E-G',  title: 'Data, Statistics, and Probability',       short: 'Data & Probability',   blueprint: 7,  pct: 14 }
];

/* Teaching moves. 5003 has no official list like the 21 tasks of teaching in 5165; these eight come from the verbs in
   the 5003 outline ("identifies different problem situations", "uses, interprets, and explains models", "recognizes the
   reasonableness of results", "chooses appropriate graphs", ...). Items set inside a classroom scenario carry
   task: [n, ...]. PLAN.md decision 5. */
PXD.taskGroups = [
  { id: 'T1', title: 'Explaining and justifying',            tasks: [1, 2] },
  { id: 'T2', title: 'Problems, models, and representations', tasks: [3, 4, 5] },
  { id: 'T3', title: "Students' work and reasoning",          tasks: [6, 7, 8] }
];
PXD.tasks = {
  1: 'Explain why a method, rule, or model works',
  2: 'Give or choose an example or counterexample that shows a distinction',
  3: 'Identify the problem situation or structure (adding to, comparing, equal groups, ...)',
  4: 'Choose or interpret a model, drawing, or representation',
  5: 'Choose an appropriate measure, display, tool, or unit',
  6: 'Evaluate a student strategy, algorithm, or answer',
  7: 'Find the misconception behind a student error',
  8: 'Judge whether a result or estimate is reasonable'
};

PXD.topics = [
  /* ---------------- Numbers and Operations (ETS I) ---------------- */
  { id: 'NO1', area: 'NO', num: 1, title: 'Place value', target: 10, ets: ['I.A.1', 'I.A.2', 'I.A.3', 'I.A.4', 'I.A.5', 'I.A.6'],
    skills: ['Standard form, number names, and expanded form', 'Compose and decompose multi-digit numbers', 'Place and value of a given digit', 'Ten times / one-tenth relationships across several places', 'Whole-number exponents as powers of 10', 'Rounding to any place'],
    ties: 'Mostly 153. In 253 it is the idea behind the even/odd and divisibility arguments, and decimals',
    tip: 'Say what each digit is worth, not just where it sits: in 47.35 the 4 is worth 40, the 5 is worth 5 hundredths, and each step to the left is worth ten times as much. When you round, circle the digit to its right and nothing else.' },
  { id: 'NO2', area: 'NO', num: 2, title: 'Problem situations and inverse operations', target: 16, ets: ['I.B.1'],
    skills: ['Multistep problems with whole numbers, fractions, and decimals', 'Problem situations for each operation (adding to, taking from, putting together, taking apart, comparing; equal groups, arrays, sharing)', 'Using inverse operations to solve or check', 'Interpreting remainders'],
    ties: '153; in 253, multistep word problems by working backward with strip diagrams',
    tip: 'Before you compute, name the situation: is something being added to, taken from, compared, split into equal groups? A remainder means different things in different stories: sometimes ignore it, sometimes round up, sometimes share it out.' },
  { id: 'NO3', area: 'NO', num: 3, title: 'Algorithms and strategies', target: 12, ets: ['I.B.2'],
    skills: ['Standard and alternative algorithms for the four operations (partial products, partial quotients, compensation, ...)', 'Why each step works', 'Spotting where a worked method went wrong'],
    ties: '153 only; no 253 chapter',
    tip: 'Know one strategy besides the standard algorithm for each operation, and be able to say why it works in terms of place value. When a student method looks odd, test it on a small example before you call it wrong.' },
  { id: 'NO4', area: 'NO', num: 4, title: 'Fraction concepts', target: 14, ets: ['I.B.3'],
    skills: ['Products that are not larger than both factors; quotients that are not smaller than the dividend', 'Compose and decompose fractions, including with unit fractions', 'Unit fractions get smaller as the denominator grows', 'Compare fractions only for the same whole'],
    ties: '153; in 253, fractions of a quantity in expressions and the meaning of fraction multiplication in probability',
    tip: 'Multiplying is not always "making bigger" and dividing is not always "making smaller": try factors of 0, 1, and fractions between 0 and 1. Think of 3/5 as three pieces of size 1/5, and always ask "fraction of what whole?"' },
  { id: 'NO5', area: 'NO', num: 5, title: 'Order of operations and properties', target: 10, ets: ['I.B.4', 'I.B.5'],
    skills: ['Order of operations with whole-number exponents', 'Name and use commutative, associative, and distributive properties'],
    ties: '153; in 253, properties of arithmetic used to justify equivalent expressions (order of operations has no activity of its own)',
    tip: 'Parentheses, exponents, then multiplication and division left to right, then addition and subtraction left to right. For properties, ask what moved: the order (commutative), the grouping (associative), or a factor shared out over a sum (distributive).' },
  { id: 'NO6', area: 'NO', num: 6, title: 'Models and representations of operations', target: 14, ets: ['I.B.6'],
    skills: ['Concrete models and drawings for the four operations with rational numbers', 'Numbers and sums/differences on a number line', 'Equations, arrays, and area models for multiplication and division'],
    ties: '153; in 253, strip diagrams, math drawings and area models',
    tip: 'Practice drawing: a number line for adding and subtracting fractions, an array or area model for multiplying, equal groups or measuring for dividing. Then check that the drawing matches the equation, not just the answer.' },
  { id: 'NO7', area: 'NO', num: 7, title: 'Comparing, ordering, and converting rational numbers', target: 12, ets: ['I.B.7', 'I.B.8'],
    skills: ['Compare, classify, and order fractions, decimals, and percents', 'Convert among fractions, decimals, and percents'],
    ties: '153; 253 §8.6, fractions and decimals',
    tip: 'Pick one form before you compare: common denominators for fractions, or convert everything to decimals. Know the benchmark conversions (1/8 = 0.125, 1/3 = 0.333..., 3/4 = 75%) so you do not need a calculator.' },
  { id: 'NO8', area: 'NO', num: 8, title: 'Ratios, rates, and percents', target: 14, ets: ['I.C.1', 'I.C.2', 'I.C.3', 'I.C.4'],
    skills: ['Ratios and unit rates describing two quantities', 'Percent as a rate per 100', 'Unit-rate problems', 'Proportional reasoning for ratio and percent problems'],
    ties: '153; in 253, percent increase, ratio relationships and conversions as rates',
    tip: 'Find the unit rate first (per one), then scale. For percent, 25% of a number is the same as one fourth of it, and "percent of what?" decides which number gets divided.' },
  { id: 'NO9', area: 'NO', num: 9, title: 'Number theory: primes, factors, and multiples', target: 10, ets: ['I.D.1', 'I.D.2'],
    skills: ['Prime and composite numbers', 'Factors and multiples; greatest common factor and least common multiple in context'],
    ties: '253 Ch 8, §8.1 to §8.5',
    tip: 'Write the prime factorization and read everything off it: the GCF uses the shared primes (lowest powers), the LCM uses every prime (highest powers). Remember 1 is neither prime nor composite.' },
  { id: 'NO10', area: 'NO', num: 10, title: 'Reasonableness, estimation, and mental math', target: 8, ets: ['I.E.1', 'I.E.2'],
    skills: ['Is the result reasonable in the context?', 'Mental math, estimation, and rounding to check results'],
    ties: '153; in 253, whether a reported measurement or an estimate is reasonable',
    tip: 'Estimate before you compute and compare. Round so the arithmetic is easy, and ask whether the answer is the right size and the right kind (a count of buses cannot be 7.3).' },

  /* ---------------- Algebraic Thinking (ETS II) ---------------- */
  { id: 'AT1', area: 'AT', num: 1, title: 'Expressions versus equations; mathematical vocabulary', target: 10, ets: ['II.A.1', 'II.A.5'],
    skills: ['Tell an expression from an equation', 'Name parts: term, factor, coefficient, constant term, variable'],
    ties: '253 Ch 9, §9.1 and §9.2, with the vocabulary of §9.7',
    tip: 'An equation has an equals sign and makes a claim that can be true or false; an expression is a phrase with no equals sign. In 5x + 3, the 5 is the coefficient, 3 is the constant term, and 5x is a term.' },
  { id: 'AT2', area: 'AT', num: 2, title: 'Simplifying and evaluating expressions', target: 14, ets: ['II.A.2', 'II.A.3', 'II.A.4'],
    skills: ['Add and subtract linear expressions', 'Use the distributive property to write equivalent expressions', 'Evaluate simple expressions for given values'],
    ties: '253 §9.2',
    tip: 'Combine only like terms. When you subtract a group, change every sign inside it. To check an equivalent form, substitute a number into both expressions.' },
  { id: 'AT3', area: 'AT', num: 3, title: 'Translating, formulas, and variables', target: 14, ets: ['II.A.6', 'II.A.7', 'II.A.8'],
    skills: ['Translate between words and expressions or equations', 'Use a formula to find an unknown quantity', 'Independent and dependent variables'],
    ties: '253 §9.2 and §9.7',
    tip: 'Define what each letter means before you write the equation, and test it on a number: if a ticket costs $3 more than a popcorn and popcorn is $4, your equation must give $7. The dependent variable is the one that depends on the other.' },
  { id: 'AT4', area: 'AT', num: 4, title: 'Solving and interpreting linear equations and inequalities', target: 16, ets: ['II.B.1', 'II.B.2'],
    skills: ['Multistep one-variable equations and inequalities', 'Graph a solution on a number line; state constraints in a situation'],
    ties: '253 §9.3 and §9.4, equations only; inequalities do not appear in the activities or homework keys',
    tip: 'Do the same thing to both sides and keep the equation balanced. For inequalities, flip the sign when you multiply or divide by a negative. Open circle means "not included", filled means "included".' },
  { id: 'AT5', area: 'AT', num: 5, title: 'Linear relationships in equations, tables, and graphs', target: 14, ets: ['II.B.3'],
    skills: ['Move among an equation, a table, and a graph of a linear relationship', 'Use any of them to solve a problem'],
    ties: '253 §9.6 and §9.7',
    tip: 'In a table, a constant change in y for each step in x means a line: the change is the slope and the value at x = 0 is the starting amount. Test each answer choice against two table rows.' },
  { id: 'AT6', area: 'AT', num: 6, title: 'Patterns and function rules', target: 12, ets: ['II.C.1', 'II.C.2', 'II.C.3'],
    skills: ['Identify, extend, and describe number and shape patterns', 'Conjectures and generalizations from patterns', 'Find the rule relating two number patterns (function table)'],
    ties: '253 §9.5 (the even/odd arguments of §8.2 come back here)',
    tip: 'Find what changes each time, then connect the step number to the term. A rule like 3n + 1 should reproduce every term you were given, so test two or three, not one.' },

  /* ---------------- Geometry and Measurement (ETS III.A-D) ---------------- */
  { id: 'GM1', area: 'GM', num: 1, title: 'Lines, rays, segments, and angles', target: 8, ets: ['III.A.1', 'III.A.2'],
    skills: ['Define and identify lines, rays, segments, parallel and perpendicular lines', 'Classify angles by measure'],
    ties: '253 §10.1',
    tip: 'A segment has two endpoints, a ray one, a line none. Acute is less than 90°, right is exactly 90°, obtuse is between 90° and 180°, straight is 180°.' },
  { id: 'GM2', area: 'GM', num: 2, title: 'Classifying and composing shapes', target: 8, ets: ['III.A.3', 'III.A.4'],
    skills: ['Compose and decompose 2-D and 3-D shapes', 'Classify polygons and solids by attributes'],
    ties: '253 §10.4 for plane shapes; composing shapes in §12.2 and §12.3; solids are in Ch 13, not taught',
    tip: 'Classify by what must be true, not by how the picture looks: every square is a rectangle, a rhombus, and a parallelogram. Count sides for polygons; count faces, edges, and vertices for solids.' },
  { id: 'GM3', area: 'GM', num: 3, title: 'Nets, surface area, and volume', target: 9, ets: ['III.B.1', 'III.B.2', 'III.B.4'],
    skills: ['Match a solid to its net', 'Surface area from a net of rectangles and triangles', 'Volume and surface area of right rectangular prisms with fractional edges'],
    ties: 'Not taught (Ch 13 is not on the schedule); §11.4 touches cubic-unit conversion only',
    tip: 'Surface area is the sum of the areas of every face (the net shows them all, laid flat). Volume is how many unit cubes fit: length times width times height, even when an edge is a fraction.' },
  { id: 'GM4', area: 'GM', num: 4, title: 'Perimeter and area; how they change', target: 9, ets: ['III.B.3', 'III.B.5'],
    skills: ['Area and perimeter of polygons, including fractional sides and composite shapes', 'How area and volume change when dimensions change'],
    ties: '253 Ch 12, §12.2 to §12.6 and §12.8',
    tip: 'Perimeter measures the distance around, area the space inside. Break an odd shape into rectangles and triangles. Double every side and the perimeter doubles but the area becomes four times as large.' },
  { id: 'GM5', area: 'GM', num: 5, title: 'The coordinate plane', target: 6, ets: ['III.C.1', 'III.C.2'],
    skills: ['Axes, origin, and the four quadrants', 'Plot points and draw polygons to solve problems'],
    ties: 'Not taught as a topic; axes and graphs appear in §9.6 and §9.7',
    tip: 'Go along the x-axis first, then up or down: (3, −2) is three right, two down. Quadrants are numbered counterclockwise from the upper right.' },
  { id: 'GM6', area: 'GM', num: 6, title: 'Measurement: time, money, units, and conversions', target: 10, ets: ['III.D.1', 'III.D.2', 'III.D.3', 'III.D.4'],
    skills: ['Elapsed time, money, length, volume, and mass problems', 'Measure and compare lengths with standard tools', 'Relative sizes of customary and metric units', 'Convert within the customary system and within the metric system'],
    ties: '253 Ch 11, §11.1 to §11.4 (units and conversions; not elapsed time or money)',
    tip: 'Write a conversion as a fraction equal to 1 so the units cancel (12 in / 1 ft). Know rough sizes: a meter is a little over a yard, a kilogram about two pounds, a liter a little more than a quart.' },

  /* ---------------- Data, Statistics, and Probability (ETS III.E-G) ---------------- */
  { id: 'DSP1', area: 'DSP', num: 1, title: 'Statistical questions and describing data', target: 6, ets: ['III.E.1', 'III.E.5'],
    skills: ['Tell a statistical question from one with a single answer', 'Describe a data set: overall pattern and outliers'],
    ties: '253 §15.1, and describing a distribution in §15.2',
    tip: 'A statistical question expects the answers to vary ("How many pets do the students in our school have?"), while "How many pets does Maria have?" has one answer. When you describe data, comment on the overall shape, where it centers, how spread out it is, and any outlier.' },
  { id: 'DSP2', area: 'DSP', num: 2, title: 'Mean, median, mode, and range', target: 10, ets: ['III.E.2', 'III.E.3', 'III.E.4'],
    skills: ['Compute mean, median, mode, and range', 'Which measure of center best describes the data', 'How adding or removing a value changes each measure'],
    ties: '253 §15.3; range and quartiles in §15.4',
    tip: 'The mean balances the data and gets pulled toward outliers; the median is the middle value and resists them. Before you decide how a change affects the mean, ask whether the new value is above or below the old mean.' },
  { id: 'DSP3', area: 'DSP', num: 3, title: 'Reading data displays', target: 8, ets: ['III.F.1'],
    skills: ['Interpret box plots, histograms, scatterplots, and other displays'],
    ties: '253 §15.2 and §15.4',
    tip: 'Read the title, the labels, and the scale before the picture. In a histogram, bar height counts how many fall in a bin; in a box plot, each quarter of the data lives in a section; in a scatterplot, look for direction and shape.' },
  { id: 'DSP4', area: 'DSP', num: 4, title: 'Constructing and choosing displays', target: 8, ets: ['III.F.2', 'III.F.3'],
    skills: ['Identify, construct, or complete graphs that match given data (circle, bar, line, histogram, scatterplot, double bar, double line, box plot, line plot)', 'Choose an appropriate graph for a purpose'],
    ties: '253 §15.2 (and box plots in §15.4)',
    tip: 'Match the display to the question: parts of a whole (circle graph), comparing categories (bar graph), change over time (line graph), how data are distributed (histogram, line plot, box plot), two variables (scatterplot).' },
  { id: 'DSP5', area: 'DSP', num: 5, title: 'Probability', target: 8, ets: ['III.G.1'],
    skills: ['Interpret probabilities as likelihood; find theoretical probability'],
    ties: '253 Ch 16, §16.1 (spinners; empirical against theoretical) and the compound events of §16.3',
    tip: 'Probability runs from 0 (impossible) to 1 (certain). Count favorable outcomes over equally likely outcomes, and for two independent events multiply. A probability of 3/7 does not promise 3 out of any 7 tries.' }
];

PXD.topicById = {};
PXD.topics.forEach(function (t) { PXD.topicById[t.id] = t; });
PXD.areaById = {};
PXD.areas.forEach(function (a) { PXD.areaById[a.id] = a; });
