/* Praxis Mathematics (5165) diagnostic: content map.
   Topic ids follow the ETS content outline (Study Companion, "Content Topics"):
     NQ  = I.A  Number & Quantity            (about 7 of 66 questions)
     ALG = I.B  Algebra                      (about 13)
     FUN = II.A Functions                    (about 13)
     CAL = II.B Calculus                     (about 7)
     GEO = III  Geometry                     (about 13)
     STP = IV   Statistics & Probability     (about 13)
   Topic numbers match the outline, e.g. ALG3 = "I.B.3 Understands how varied techniques are used to
   solve equations and inequalities". */
window.PXD = window.PXD || {};
PXD.bank = PXD.bank || [];

PXD.areas = [
  { id: 'NQ',  cat: 'I',   outline: 'I.A',  title: 'Number & Quantity',        short: 'Number & Quantity', blueprint: 7,  pct: 10 },
  { id: 'ALG', cat: 'I',   outline: 'I.B',  title: 'Algebra',                  short: 'Algebra',           blueprint: 13, pct: 20 },
  { id: 'FUN', cat: 'II',  outline: 'II.A', title: 'Functions',                short: 'Functions',         blueprint: 13, pct: 20 },
  { id: 'CAL', cat: 'II',  outline: 'II.B', title: 'Calculus',                 short: 'Calculus',          blueprint: 7,  pct: 10 },
  { id: 'GEO', cat: 'III', outline: 'III',  title: 'Geometry',                 short: 'Geometry',          blueprint: 13, pct: 20 },
  { id: 'STP', cat: 'IV',  outline: 'IV',   title: 'Statistics & Probability', short: 'Stats & Probability', blueprint: 13, pct: 20 }
];

/* Tasks of Teaching Mathematics (ETS list, 21 tasks in 4 groups). Roughly 25% of real test questions
   are set inside one of these. Bank items carry  task: [n, ...]  for the task(s) they exercise. */
PXD.taskGroups = [
  { id: 'T1', title: 'Explanations, justifications & definitions', tasks: [1, 2, 3, 4, 5] },
  { id: 'T2', title: 'Problems, tasks, examples & procedures',     tasks: [6, 7, 8, 9, 10, 11] },
  { id: 'T3', title: 'Representations, models & technology',       tasks: [12, 13, 14] },
  { id: 'T4', title: "Students' mathematical reasoning",           tasks: [15, 16, 17, 18, 19, 20, 21] }
];
PXD.tasks = {
  1: 'Identify valid explanations of concepts, procedures, or representations',
  2: 'Evaluate or compare explanations and justifications',
  3: 'Determine changes that would improve an explanation or justification',
  4: 'Evaluate whether counterarguments address a critique',
  5: 'Evaluate definitions and mathematical language',
  6: 'Identify problems that fit a structure or elicit particular thinking',
  7: 'Identify problems that systematically vary in difficulty',
  8: 'Evaluate the usefulness of examples',
  9: 'Identify examples that address misconceptions or student questions',
  10: 'Identify examples or counterexamples that show a distinction',
  11: 'Evaluate procedures, including special cases where they break',
  12: 'Evaluate representations and models for validity and usefulness',
  13: 'Evaluate how representations show ideas and processes',
  14: 'Evaluate the use of technology',
  15: 'Identify likely misconceptions or partial understanding',
  16: "Connect new content to students' prior knowledge and errors",
  17: 'Evaluate or compare student work',
  18: 'Identify the concept or strategy used in student work',
  19: "Identify how a student's reasoning would replicate",
  20: 'Identify different work that shows the same reasoning',
  21: 'Identify valid-looking work that masks incorrect thinking'
};

/* Each topic: id, area, num, title (ETS wording, lightly shortened), skills (ETS sub-skills, paraphrased),
   tip (what to do about it: written for the student). */
PXD.topics = [
  /* ---------------- Number & Quantity (I.A) ---------------- */
  { id: 'NQ1', area: 'NQ', num: 1, title: 'The real number system and its operations',
    skills: ['Word problems with the four operations', 'Commutative, associative, and distributive properties (including for a new operation)', 'Sums and products of rational and irrational numbers', 'Primes, factors, multiples, gcd/lcm, even/odd', 'Ratio, rate, and percent problems'],
    tip: 'Number theory and proportional reasoning are where most misses happen. Practice gcd/lcm and prime factorization by hand, and for "must be / can be / cannot be rational" questions, always test a counterexample such as √2 · √2 or √2 + (−√2).' },
  { id: 'NQ2', area: 'NQ', num: 2, title: 'Radicals, rational exponents, scientific notation',
    skills: ['Operations with rational exponents', 'Rewriting radical and rational-exponent expressions', 'Scientific notation: represent, compare, calculate'],
    tip: 'Convert everything to rational exponents before you simplify (∛(x²) = x^(2/3)), and keep the exponent laws in one list you can recite. For scientific notation, handle the coefficients and the powers of ten separately, then renormalize.' },
  { id: 'NQ3', area: 'NQ', num: 3, title: 'Quantitative reasoning and units',
    skills: ['Choose and interpret units in formulas', 'Scale and origin in graphs and data displays', 'Measurement, estimation, and conversion', 'Dimensional analysis'],
    tip: 'Write every conversion as a chain of fractions so the units visibly cancel (ft/s → mi/h). On graph questions, read the axes first: check the scale, and check whether the axis starts at zero.' },
  { id: 'NQ4', area: 'NQ', num: 4, title: 'Complex numbers',
    skills: ['Operations with complex numbers, including conjugates', 'Commutative, associative, and distributive properties for complex numbers'],
    tip: 'Treat i like a variable, then replace i² by −1. To divide, multiply top and bottom by the conjugate. Know the cycle i, −1, −i, 1 for powers of i.' },

  /* ---------------- Algebra (I.B) ---------------- */
  { id: 'ALG1', area: 'ALG', num: 1, title: 'Equivalent forms of algebraic expressions',
    skills: ['Use structure to rewrite polynomial and exponential expressions', 'Choose a form for a purpose (factored form for zeros, vertex form for extrema)', 'Solve a formula for a specified variable', 'Add, subtract, multiply, divide polynomials', 'Factor over the complex numbers'],
    tip: 'Ask "what does this form show?": factored form shows zeros, vertex form shows the extreme value, standard form shows the y-intercept. Practice difference of squares, sum/difference of cubes, and factoring x² + a² over the complex numbers.' },
  { id: 'ALG2', area: 'ALG', num: 2, title: 'Creating equations and inequalities',
    skills: ['One-variable equations and inequalities from context', 'Two-variable equations and their graphs', 'Constraints as systems; viable vs. nonviable solutions'],
    tip: 'Define your variables in words first. In modeling problems, check the answer against the context: a negative number of students, or a non-integer number of buses, is not a viable solution.' },
  { id: 'ALG3', area: 'ALG', num: 3, title: 'Solving equations and inequalities (several methods)',
    skills: ['Linear equations and inequalities, including variable coefficients', 'Quadratics with complex solutions', 'Completing the square', 'Factoring, quadratic formula, graphing', 'Discriminant and the nature of solutions', 'Graphing linear inequalities in two variables', 'Justifying each step'],
    tip: 'Know all three quadratic tools (factor, complete the square, formula) and when each is quickest. The discriminant tells you the number and type of solutions without solving. Remember to flip the inequality when multiplying or dividing by a negative.' },
  { id: 'ALG4', area: 'ALG', num: 4, title: 'Systems of equations and inequalities',
    skills: ['Two linear equations, algebraically and graphically', 'A linear and a quadratic equation', 'Approximate solutions of f(x) = g(x) with technology', 'Graphing systems of linear inequalities'],
    tip: 'For a line and a parabola, substitute and use the discriminant to count intersections. Practice reading approximate solutions from a graphing tool: intersection points are solutions to f(x) = g(x).' },
  { id: 'ALG5', area: 'ALG', num: 5, title: 'Average rate of change',
    skills: ['Average rate of change from a table, an expression, or a graph, and its interpretation'],
    tip: 'Average rate of change is (f(b) − f(a))/(b − a): the slope of the secant line. Always attach units and say what it means in context.' },
  { id: 'ALG6', area: 'ALG', num: 6, title: 'Linear equations in various forms',
    skills: ['Intercepts and their meaning in context', 'Slope from a table, an equation, or a graph, and its meaning in context'],
    tip: 'Convert between slope-intercept, point-slope, and standard form until it is automatic. In context, slope is "change in output per one unit of input" and the y-intercept is the starting value.' },
  { id: 'ALG7', area: 'ALG', num: 7, title: 'Zeros of polynomials and factors',
    skills: ['Remainder and factor theorems', 'Zeros from factorization', 'Sketching a polynomial from its zeros and multiplicities', 'Real and complex zeros: rational root theorem and other techniques'],
    tip: 'f(a) is the remainder when f(x) is divided by (x − a). Learn how a zero’s multiplicity changes the graph (crosses vs. touches) and how the Rational Root Theorem narrows the candidates.' },
  { id: 'ALG8', area: 'ALG', num: 8, title: 'Rational expressions',
    skills: ['Rewriting simple rational expressions', 'Operations on rational expressions'],
    tip: 'Factor first, then cancel common factors (not common terms). Use a common denominator to add or subtract, and remember excluded values stay excluded even after canceling.' },
  { id: 'ALG9', area: 'ALG', num: 9, title: 'Rational and radical equations; extraneous solutions',
    skills: ['Solve simple rational and radical equations', 'Identify and account for extraneous solutions'],
    tip: 'Squaring both sides or multiplying by a variable expression can create extraneous solutions. Substitute every candidate back into the original equation.' },

  /* ---------------- Functions (II.A) ---------------- */
  { id: 'FUN1', area: 'FUN', num: 1, title: 'Functions and function notation',
    skills: ['Is a relation a function?', 'Evaluate functions and interpret function notation in context', 'Domain and range from a rule, graph, pairs, or table'],
    tip: 'Vertical line test and "each input has exactly one output." Find domain by asking what values break the rule (division by zero, negative under an even root, log of a non-positive).' },
  { id: 'FUN2', area: 'FUN', num: 2, title: 'Analyzing function behavior (graphs, tables, forms)',
    skills: ['Key features in context: intervals, extrema, discontinuities, end behavior', 'Sketch a graph from a description', 'Graph the standard function families and identify features', 'Equivalent forms that reveal zeros, extrema, symmetry', 'Exponential growth and decay', 'Even, odd, or neither', 'Compare functions given in different representations', 'Quadratics: standard, vertex, factored forms and conversions'],
    tip: 'This is the largest and most varied topic. Know the parent graphs cold, test f(−x) for even/odd, and be able to move among standard, vertex, and factored form of a quadratic (completing the square is the bridge).' },
  { id: 'FUN3', area: 'FUN', num: 3, title: 'Modeling relationships with functions',
    skills: ['Write a function relating two quantities', 'Explicit and recursive rules from a context', 'Arithmetic and geometric sequences, recursive and explicit', 'Translate between recursive and explicit forms'],
    tip: 'Arithmetic = add the same amount (linear); geometric = multiply by the same factor (exponential). Practice writing a_n = a_1 + (n − 1)d and a_n = a_1 r^(n−1) and converting to and from recursive form.' },
  { id: 'FUN4', area: 'FUN', num: 4, title: 'New functions from old (composition, transformations, inverses)',
    skills: ['Transformations: f(x)+k, kf(x), f(kx), f(x+k)', 'Values of an inverse from a graph or table', 'Meaning of an inverse in context', 'Restricting a domain to make a function invertible', 'Finding an inverse and its domain', 'Exponentials and logarithms as inverses', 'Combining functions; domains of sums, products, quotients, compositions', 'Composition from tables, formulas, graphs', 'f(f⁻¹(x)) = x'],
    tip: 'Horizontal changes act "backwards" (f(x − 3) shifts right). For an inverse, swap x and y and solve; its graph is the reflection over y = x. For compositions, work inside-out and watch the domain of the inner function.' },
  { id: 'FUN5', area: 'FUN', num: 5, title: 'Linear, quadratic, and exponential models',
    skills: ['Equal differences (linear) vs. equal factors (exponential)', 'Constant rate situations', 'Constant percent growth/decay', 'Construct linear and exponential functions from data', 'Exponential eventually exceeds polynomial growth', 'Interpret parameters in context'],
    tip: 'Look at a table: constant differences → linear, constant ratios → exponential. A 5% increase per period means multiplying by 1.05; a 12% decrease means multiplying by 0.88.' },
  { id: 'FUN6', area: 'FUN', num: 6, title: 'Logarithms',
    skills: ['Properties of logarithms', 'Rewrite an exponential equation as a logarithm', 'Evaluate logs in any base with technology (change of base)'],
    tip: 'log_b(x) = y means b^y = x. Memorize the product, quotient, and power rules, plus change of base: log_b(x) = ln x / ln b.' },
  { id: 'FUN7', area: 'FUN', num: 7, title: 'The unit circle and trigonometric values',
    skills: ['Degrees ↔ radians', 'Reference angles', 'Trig values of any angle', 'Symmetry and periodicity from the unit circle'],
    tip: 'Know the unit circle: the coordinates at 30°, 45°, 60° and their reflections in each quadrant. Radians = degrees × π/180. The reference angle gives the magnitude and the quadrant gives the sign.' },
  { id: 'FUN8', area: 'FUN', num: 8, title: 'Modeling periodic phenomena',
    skills: ['Choose trig functions with a given amplitude, frequency, midline', 'Use inverse functions to solve trig equations in context'],
    tip: 'For y = A sin(B(x − C)) + D: amplitude |A|, period 2π/B, midline y = D. Practice reading these off a graph and from a verbal description (Ferris wheel, tides, daylight hours).' },
  { id: 'FUN9', area: 'FUN', num: 9, title: 'Solving trigonometric, logarithmic, and exponential equations',
    skills: ['Solve trigonometric, logarithmic, and exponential equations'],
    tip: 'Isolate the exponential and take a logarithm; combine logs then rewrite in exponential form; for trig equations, find all solutions in one period, then add multiples of the period. Check log solutions against the domain.' },

  /* ---------------- Calculus (II.B) ---------------- */
  { id: 'CAL1', area: 'CAL', num: 1, title: 'Limits',
    skills: ['Limits by properties', 'Limits from a graph', 'One-sided limits and existence', 'Limits at infinity', 'Limits that do not exist'],
    tip: 'Try substitution first; if you get 0/0, factor or rationalize. A two-sided limit exists only if both one-sided limits exist and agree. Know that limits at infinity compare degrees.' },
  { id: 'CAL2', area: 'CAL', num: 2, title: 'The derivative: limit, tangent slope, rate of change',
    skills: ['Derivative as the limit of secant slopes; tangent slope at a point'],
    tip: 'f’(a) = lim of [f(x) − f(a)]/(x − a) = slope of the tangent line = instantaneous rate of change. Connect all three descriptions and know how a secant line approaches the tangent.' },
  { id: 'CAL3', area: 'CAL', num: 3, title: 'Continuity and differentiability',
    skills: ['The three-part definition of continuity at a point', 'Continuous but not differentiable (corners, cusps, vertical tangents)'],
    tip: 'Continuity needs f(a) defined, the limit to exist, and the two to be equal. Differentiable implies continuous, but not the reverse: think of |x| at 0.' },
  { id: 'CAL4', area: 'CAL', num: 4, title: 'Differentiation and integration techniques',
    skills: ['Standard differentiation rules', 'Definite and indefinite integrals', 'Position, velocity, and acceleration'],
    tip: 'Power, product, quotient, and chain rules must be automatic, and so must the basic antiderivatives (with + C). For motion: velocity is the derivative of position, acceleration the derivative of velocity, and integrate to go backward.' },
  { id: 'CAL5', area: 'CAL', num: 5, title: 'Analyzing functions and computing area',
    skills: ['First and second derivatives to analyze a graph', 'Matching graphs of f, f’, and accumulation functions (FTC part 2)', 'Area by integration'],
    tip: 'f’ > 0 means f increasing; f″ > 0 means concave up. Practice sketching f from a graph of f’ and back. The derivative of ∫ₐˣ g(t) dt is g(x).' },

  /* ---------------- Geometry (III) ---------------- */
  { id: 'GEO1', area: 'GEO', num: 1, title: 'Lines and angles',
    skills: ['Parallel, perpendicular, and intersecting lines', 'Supplementary, vertical, alternate interior, corresponding angles'],
    tip: 'Name each angle pair (vertical, linear pair, corresponding, alternate interior) and what it tells you. Only parallel lines make the transversal angle pairs congruent.' },
  { id: 'GEO2', area: 'GEO', num: 2, title: 'Triangles, quadrilaterals, and polygons',
    skills: ['Triangle inequality; classifying triangles', 'Special triangles: isosceles, equilateral, 30-60-90, 45-45-90', 'Median, midpoint, altitude', 'Properties of quadrilaterals and their hierarchy', 'Sides, angles, and diagonals of polygons'],
    tip: 'Learn the quadrilateral hierarchy (every square is a rectangle and a rhombus) and the diagonal properties of each. The angle sum of an n-gon is (n − 2)·180°.' },
  { id: 'GEO3', area: 'GEO', num: 3, title: 'Transformations in the plane',
    skills: ['Translations, rotations, reflections', 'Dilations', 'Properties preserved by rigid motions and dilations', 'Sequences of transformations', 'Symmetries of a figure', 'Translations as vectors'],
    tip: 'Rigid motions preserve distance and angle; dilations preserve angle and shape but not distance. Practice writing the coordinate rule for reflections over the axes and y = x and for 90° rotations about the origin.' },
  { id: 'GEO4', area: 'GEO', num: 4, title: 'Congruence and similarity',
    skills: ['SSS, SAS, ASA, AAS; (SSA fails)', 'AA similarity', 'Congruence and similarity via transformations', 'Unknown lengths and angles in 2-D and 3-D figures'],
    tip: 'SSA does not prove congruence. For similar figures, lengths scale by k, areas by k², volumes by k³. Set up proportions by matching corresponding vertices, not by picture position.' },
  { id: 'GEO5', area: 'GEO', num: 5, title: 'Proving geometric theorems',
    skills: ['Proofs about lines and angles', 'Proofs about triangles', 'Proofs about parallelograms', 'Judging whether a proof is valid; counterexamples'],
    tip: 'Know the standard proofs: vertical angles, triangle angle sum, isosceles base angles, midsegment, parallelogram diagonals. When judging a proof, look for circular reasoning and for facts used that were never justified.' },
  { id: 'GEO6', area: 'GEO', num: 6, title: 'Trigonometry in triangles',
    skills: ['Sine and cosine of complementary angles', 'Right-triangle trig and applied problems', 'Special-angle values', 'Law of Sines and Law of Cosines'],
    tip: 'SOH-CAH-TOA for right triangles; Law of Sines for AAS/ASA/SSA, Law of Cosines for SAS/SSS. Check calculator mode (degrees vs. radians) before every trig computation.' },
  { id: 'GEO7', area: 'GEO', num: 7, title: 'Circles',
    skills: ['Circumference and area', 'Arc length and sector area', 'Inscribed, central, and circumscribed angles', 'Chords, secants, tangents, radii', 'Locus definition of a circle', 'Equation of a circle', 'Center and radius from an equation (completing the square)'],
    tip: 'Inscribed angle = half its intercepted arc. A tangent is perpendicular to the radius at the point of tangency. To find a center and radius from x² + y² + bx + cy + d = 0, complete the square in both variables.' },
  { id: 'GEO8', area: 'GEO', num: 8, title: 'Coordinate geometry',
    skills: ['Coordinate methods for shapes', 'Distance between two points', 'Point that partitions a segment in a given ratio', 'Slope criteria for parallel and perpendicular lines'],
    tip: 'Distance is the Pythagorean theorem in disguise. Parallel lines have equal slopes; perpendicular slopes are negative reciprocals. For a ratio partition, move the fraction of the way from the start to the end in both coordinates.' },
  { id: 'GEO9', area: 'GEO', num: 9, title: 'Perimeter and area of polygons',
    skills: ['Perimeter and area of composite polygons', 'How perimeter and area change as dimensions change'],
    tip: 'Break composite shapes into triangles and rectangles. Scale a length by k and perimeter scales by k, but area scales by k².' },
  { id: 'GEO10', area: 'GEO', num: 10, title: 'Solids',
    skills: ['Surface area and volume of prisms, pyramids, cones, cylinders, spheres', 'How they change with dimensions', 'Cross sections and solids of revolution', 'Nets'],
    tip: 'Keep the formulas straight: cone and pyramid are one-third of the matching cylinder/prism. Volume scales by k³ and surface area by k². For solids of revolution, sketch the region and the axis first.' },

  /* ---------------- Statistics & Probability (IV) ---------------- */
  { id: 'STP1', area: 'STP', num: 1, title: 'Inference from samples, experiments, and observational studies',
    skills: ['Estimate population parameters from a sample', 'Surveys vs. experiments vs. observational studies; role of randomization', 'Estimating a mean or proportion from a survey', 'Comparing treatments in a randomized experiment'],
    tip: 'Random sampling supports generalizing to a population; random assignment supports cause-and-effect conclusions. Only a randomized experiment can support a causal claim.' },
  { id: 'STP2', area: 'STP', num: 2, title: 'Summarizing single-variable data',
    skills: ['Dot plots, histograms, boxplots', 'Mean, median, IQR, standard deviation', 'Choosing statistics to fit the shape', 'Comparing shape, center, spread; outliers'],
    tip: 'Skewed data or outliers: use the median and IQR. Roughly symmetric: mean and standard deviation. Practice reading five-number summaries off a boxplot and describing what an outlier does to each measure.' },
  { id: 'STP3', area: 'STP', num: 3, title: 'Two-variable data',
    skills: ['Two-way frequency tables: joint, marginal, conditional relative frequencies', 'Associations and trends', 'Scatterplots'],
    tip: 'In a two-way table, be clear which total you divide by (row, column, or grand total). Association is judged by comparing conditional relative frequencies.' },
  { id: 'STP4', area: 'STP', num: 4, title: 'Linear regression',
    skills: ['Fit a line with technology; correlation coefficient', 'Use a fitted model to predict', 'Residuals and residual plots', 'Interpret slope and intercept in context', 'Interpret r', 'Correlation vs. causation'],
    tip: 'r measures the direction and strength of a linear association only, and says nothing about causation. A residual plot with a pattern means a line is the wrong model. Interpret slope with units.' },
  { id: 'STP5', area: 'STP', num: 5, title: 'Probability: independence, compound, and conditional',
    skills: ['Events as subsets; unions, intersections, complements', 'Independence', 'Conditional probability', 'Simple and compound events', 'Two-way tables as a sample space', 'Addition rule', 'General multiplication rule'],
    tip: 'P(A or B) = P(A) + P(B) − P(A and B). Events are independent when P(A and B) = P(A)P(B), which is not the same as mutually exclusive (mutually exclusive events with positive probabilities are never independent).' },
  { id: 'STP6', area: 'STP', num: 6, title: 'Counting: permutations and combinations',
    skills: ['Fundamental counting principle; probabilities with independent trials', 'Permutations and combinations'],
    tip: 'First ask "does order matter?" Yes: permutation, no: combination. Use the fundamental counting principle whenever the choices are made in stages.' },
  { id: 'STP7', area: 'STP', num: 7, title: 'Expected value and decisions',
    skills: ['Theoretical probability distributions and expected value', 'Empirical distributions and expected value', 'Weighing decisions by expected value'],
    tip: 'Expected value = sum of (value × probability). For a game, subtract the cost to play, and check that the probabilities sum to 1.' },
  { id: 'STP8', area: 'STP', num: 8, title: 'Normal distributions',
    skills: ['Deciding whether data are approximately normal', 'Use mean and standard deviation to interpret percentages', 'Estimate and interpret areas under the normal curve'],
    tip: 'Know the 68-95-99.7 rule, and convert to z-scores, z = (x − μ)/σ, for anything else. Use technology (normalcdf) or a z-table for other areas.' }
];

PXD.topicById = {};
PXD.topics.forEach(function (t) { PXD.topicById[t.id] = t; });
PXD.areaById = {};
PXD.areas.forEach(function (a) { PXD.areaById[a.id] = a; });
