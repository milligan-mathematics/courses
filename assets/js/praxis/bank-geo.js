/* GEO bank: Praxis 5165 diagnostic, Geometry (III). */
(function () {
  var R = String.raw;
  PXD.bank.push(

/* ================= GEO1: Lines and angles ================= */
    {
      id: 'GEO1-01', topic: 'GEO1', type: 'mc', diff: 1,
      stem: R`In the figure, $\ell \parallel m$ and $t$ is a transversal. What is the measure of the angle labeled $(2x+15)^\circ$?`,
      figure: { type: 'svg', alt: R`Two horizontal parallel lines l and m, marked parallel with arrowheads, are cut by a slanted transversal t. The angle above line l to the right of t is labeled (2x + 15) degrees and the angle above line m to the right of t is labeled (4x - 25) degrees; they are corresponding angles.`, svg: R`<svg viewBox="0 0 300 220"><line class="b" x1="30" y1="75" x2="270" y2="75"/><line class="b" x1="30" y1="155" x2="270" y2="155"/><line class="a" x1="65.3" y1="196" x2="184.4" y2="25.9"/><polyline class="thin" points="230.4,80.1 236.4,75 230.4,69.9"/><polyline class="thin" points="230.4,160.1 236.4,155 230.4,149.9"/><text x="18" y="80" text-anchor="end">ℓ</text><text x="18" y="160" text-anchor="end">m</text><text x="193.9" y="18.9" text-anchor="start">t</text><path class="thin" d="M174 75 A24 24 0 0 0 163.8 55.3"/><circle class="pt" cx="150" cy="75" r="3"/><path class="thin" d="M118 155 A24 24 0 0 0 107.7 135.3"/><circle class="pt" cx="94" cy="155" r="3"/><text class="up" x="182" y="63" text-anchor="start">(2<tspan font-style="italic">x</tspan> + 15)°</text><text class="up" x="126" y="143" text-anchor="start">(4<tspan font-style="italic">x</tspan> − 25)°</text></svg>` },
      choices: [R`$55^\circ$`, R`$125^\circ$`, R`$20^\circ$`, R`$40^\circ$`],
      answer: 0,
      explain: R`The two labeled angles are corresponding angles, and corresponding angles formed by a transversal of parallel lines are congruent. So $2x+15 = 4x-25$, which gives $x = 20$. The angle measures $2(20)+15 = 55^\circ$.
        <br><i>Common errors:</i> stopping at $x=20$ (choice C) without substituting back; substituting into $2x$ only ($40^\circ$); or using the supplement, $180^\circ - 55^\circ = 125^\circ$, as if the angles were a linear pair.`
    },
    {
      id: 'GEO1-02', topic: 'GEO1', type: 'num', diff: 2,
      stem: R`In the figure, $\ell \parallel m$. The two labeled angles lie between the parallel lines on the same side of the transversal. What is the measure, in degrees, of the <b>larger</b> of the two labeled angles?`,
      figure: { type: 'svg', alt: R`Two horizontal parallel lines l and m, marked with arrowheads, are cut by a nearly vertical transversal. Between the lines and to the right of the transversal, the angle at the upper intersection is labeled (3x + 10) degrees and the angle at the lower intersection is labeled (2x + 20) degrees; they are same-side interior angles.`, svg: R`<svg viewBox="0 0 300 220"><line class="b" x1="30" y1="70" x2="280" y2="70"/><line class="b" x1="30" y1="160" x2="280" y2="160"/><line class="a" x1="126.3" y1="204.3" x2="159.6" y2="15.8"/><polyline class="thin" points="244,75.1 250,70 244,64.9"/><polyline class="thin" points="244,165.1 250,160 244,154.9"/><text x="18" y="75" text-anchor="end">ℓ</text><text x="18" y="165" text-anchor="end">m</text><circle class="pt" cx="150" cy="70" r="3"/><circle class="pt" cx="134.1" cy="160" r="3"/><path class="thin" d="M146.2 91.7 A22 22 0 0 0 172 70"/><path class="thin" d="M156.1 160 A22 22 0 0 0 138 138.3"/><text class="up" x="174" y="98" text-anchor="start">(3<tspan font-style="italic">x</tspan> + 10)°</text><text class="up" x="158.1" y="142" text-anchor="start">(2<tspan font-style="italic">x</tspan> + 20)°</text></svg>` },
      answer: 100, tol: 0, unit: 'degrees',
      explain: R`Same-side interior angles formed by a transversal of parallel lines are supplementary, so $(3x+10)+(2x+20)=180$. Then $5x+30=180$, $x=30$. The angles measure $3(30)+10=100^\circ$ and $2(30)+20=80^\circ$, so the larger is $100^\circ$.
        <br><i>Common errors:</i> setting the two expressions equal (as for alternate interior angles) gives $x=-10$; reporting $80^\circ$ picks the smaller angle.`
    },
    {
      id: 'GEO1-03', topic: 'GEO1', type: 'mc', diff: 1,
      stem: R`In a coordinate plane, line $p$ has equation $3x - 6y = 12$ and line $q$ has equation $4x + 2y = 7$. Which statement is true?`,
      choices: [R`The lines are perpendicular.`, R`The lines are parallel.`, R`The lines are the same line.`, R`The lines intersect at exactly one point but are not perpendicular.`],
      answer: 0,
      explain: R`Line $p$: $y = \tfrac12 x - 2$, slope $\tfrac12$. Line $q$: $y = -2x + \tfrac72$, slope $-2$. The product of the slopes is $\tfrac12 \cdot (-2) = -1$, so the lines are perpendicular.
        <br><i>Common errors:</i> comparing only the coefficients of $x$ (3 and 4) or reading the slopes as $3/6$ and $4/2$ with the wrong signs, which makes the lines look parallel or merely intersecting.`
    },
    {
      id: 'GEO1-04', topic: 'GEO1', type: 'mc', diff: 2, task: [15, 17],
      stem: R`In the figure, transversal $t$ crosses lines $\ell$ and $m$. The angles at $A$ and $B$ are alternate interior angles. A student says, "Alternate interior angles are congruent, so the $110^\circ$ must be a typo; it should be $75^\circ$." Which response best addresses the student's reasoning?`,
      figure: { type: 'svg', alt: R`A vertical transversal t crosses two lines l and m that are visibly not parallel (l rises to the right, m falls to the right). At the upper crossing A, the angle below l and to the left of t is labeled 75 degrees; at the lower crossing B, the angle above m and to the right of t is labeled 110 degrees. These two angles are alternate interior angles.`, svg: R`<svg viewBox="0 0 300 230"><line class="b" x1="40" y1="99.5" x2="265" y2="39.2"/><line class="b" x1="40" y1="125" x2="265" y2="206.9"/><line class="a" x1="150" y1="25" x2="150" y2="210"/><text x="273" y="44.2" text-anchor="start">ℓ</text><text x="273" y="211.9" text-anchor="start">m</text><text x="150" y="20" text-anchor="middle">t</text><circle class="pt" cx="150" cy="70" r="3"/><circle class="pt" cx="150" cy="165" r="3"/><path class="thin" d="M126.8 76.2 A24 24 0 0 0 150 94"/><path class="thin" d="M172.6 173.2 A24 24 0 0 0 150 141"/><text class="up" x="120" y="104" text-anchor="end">75°</text><text class="up" x="182" y="143" text-anchor="start">110°</text><text x="142" y="64" text-anchor="end">A</text><text x="142" y="185" text-anchor="end">B</text></svg>` },
      choices: [
        R`Alternate interior angles are congruent only when the lines are parallel; since these angles are not congruent, $\ell$ and $m$ are not parallel, and nothing is a typo.`,
        R`The student is correct, because alternate interior angles are always congruent.`,
        R`The student is incorrect, because alternate interior angles are always supplementary.`,
        R`The student is incorrect, because alternate interior angles are congruent only when the transversal is perpendicular to both lines.`],
      answer: 0, order: 'fixed',
      explain: R`The theorem "alternate interior angles are congruent" requires $\ell \parallel m$. Its converse says that if alternate interior angles are <i>not</i> congruent, the lines are not parallel. Here the angles measure $75^\circ$ and $110^\circ$, which are not congruent, so the lines are not parallel (and the lines visibly converge to the left).
        <br><i>Why the others fail:</i> B applies the theorem without its hypothesis (the misconception being probed). C confuses alternate interior angles with same-side interior angles. D invents a perpendicularity condition.`
    },
    {
      id: 'GEO1-05', topic: 'GEO1', type: 'mc', diff: 2, task: [9, 10],
      stem: R`A teacher wants an example that shows students that corresponding angles formed by a transversal are <b>not</b> always congruent. Which example best accomplishes this?`,
      choices: [
        R`Lines $\ell$ and $m$ that are not parallel, cut by a transversal so that one pair of corresponding angles measures $70^\circ$ and $85^\circ$.`,
        R`Parallel lines $\ell$ and $m$, cut by a transversal so that each of the corresponding angles measures $70^\circ$.`,
        R`Parallel lines $\ell$ and $m$, cut by a transversal perpendicular to both, so that all eight angles measure $90^\circ$.`,
        R`Two intersecting lines whose vertical angles each measure $70^\circ$.`],
      answer: 0, order: 'fixed',
      explain: R`A counterexample must satisfy the setup (two lines cut by a transversal) and violate the conclusion (corresponding angles not congruent). Only choice A does. The lines in A are not parallel, which is exactly the condition that makes the pair unequal.
        <br><i>Why the others fail:</i> B and C are cases where the statement holds. D describes vertical angles, which do not involve a transversal cutting two lines.`
    },
    {
      id: 'GEO1-06', topic: 'GEO1', type: 'multi', diff: 2,
      stem: R`In a plane, which of the following statements are always true? Select all that apply.`,
      choices: [
        R`If two different lines are each perpendicular to a third line, then the two lines are parallel.`,
        R`If two different lines are each parallel to a third line, then the two lines are parallel to each other.`,
        R`If a transversal cuts two lines so that a pair of alternate interior angles are congruent, then the two lines are parallel.`,
        R`If two lines are cut by a transversal, then corresponding angles are congruent.`,
        R`The two angles in a linear pair are congruent.`],
      answer: [0, 1, 2],
      explain: R`A, B, and C are true (A: the two right-angle corresponding angles are congruent; B: transitivity of parallelism; C: the converse of the alternate interior angles theorem).
        <br>D is false unless the lines are parallel. E is false: the angles of a linear pair are supplementary, and are congruent only when both are $90^\circ$.`
    },
    {
      id: 'GEO1-07', topic: 'GEO1', type: 'num', diff: 3,
      stem: R`In the figure, $\ell \parallel m$. Segments $\overline{AP}$ and $\overline{BP}$ meet at $P$ between the lines. What is $m\angle APB$, in degrees?`,
      figure: { type: 'svg', alt: R`Two horizontal parallel lines l (bottom) and m (top), marked parallel. Point A is on l and point B is on m; segments AP and BP meet at a point P between the lines, to the right of A and B. The angle between l and segment AP at A (measured on the right) is labeled 38 degrees, and the angle between m and segment BP at B (measured below m on the right) is labeled 47 degrees.`, svg: R`<svg viewBox="0 0 300 220"><line class="b" x1="15" y1="160" x2="265" y2="160"/><line class="b" x1="15" y1="60" x2="265" y2="60"/><polyline class="thin" points="234,165.1 240,160 234,154.9"/><polyline class="thin" points="234,65.1 240,60 234,54.9"/><text x="8" y="165" text-anchor="end">ℓ</text><text x="8" y="65" text-anchor="end">m</text><line class="a" x1="45" y1="160" x2="106.4" y2="112"/><line class="a" x1="57.9" y1="60" x2="106.4" y2="112"/><circle class="pt" cx="45" cy="160" r="3"/><circle class="pt" cx="57.9" cy="60" r="3"/><circle class="pt" cx="106.4" cy="112" r="3"/><path class="thin" d="M75 160 A30 30 0 0 0 68.6 141.5"/><path class="thin" d="M78.4 81.9 A30 30 0 0 0 87.9 60"/><text class="up" x="87" y="154" text-anchor="start">38°</text><text class="up" x="99.9" y="80" text-anchor="start">47°</text><text x="39" y="178" text-anchor="end">A</text><text x="51.9" y="52" text-anchor="end">B</text><text x="116.4" y="117" text-anchor="start">P</text></svg>` },
      answer: 85, tol: 0, unit: 'degrees',
      explain: R`Draw a line through $P$ parallel to $\ell$ and $m$. It splits $\angle APB$ into two angles. The lower one is an alternate interior angle with the $38^\circ$ angle at $A$, and the upper one is an alternate interior angle with the $47^\circ$ angle at $B$. So $m\angle APB = 38^\circ + 47^\circ = 85^\circ$.
        <br><i>Common errors:</i> $180^\circ - (38^\circ+47^\circ) = 95^\circ$ (treating $P$ as the third angle of a triangle) or $47^\circ - 38^\circ = 9^\circ$.`
    },

    /* ================= GEO2: Triangles, quadrilaterals, polygons ================= */
    {
      id: 'GEO2-01', topic: 'GEO2', type: 'mc', diff: 1,
      stem: R`Which set of numbers could be the side lengths of a triangle?`,
      choices: [R`$3,\ 4,\ 8$`, R`$5,\ 5,\ 11$`, R`$6,\ 8,\ 13$`, R`$2,\ 9,\ 12$`],
      answer: 2,
      explain: R`By the triangle inequality, the sum of the two shorter sides must exceed the longest side. $6+8=14>13$, so $6, 8, 13$ works. The others fail: $3+4=7<8$; $5+5=10<11$; $2+9=11<12$.
        <br><i>Common error:</i> checking only that the sum of <i>some</i> two sides exceeds the third (for example $4+8>3$), instead of the two shortest.`
    },
    {
      id: 'GEO2-02', topic: 'GEO2', type: 'num', diff: 2,
      stem: R`Two sides of a triangle have lengths 7 and 12. The length of the third side is a whole number. How many different whole-number lengths are possible for the third side?`,
      answer: 13, tol: 0,
      explain: R`The third side $s$ must satisfy $12 - 7 < s < 12 + 7$, that is, $5 < s < 19$. The whole numbers from 6 through 18 work: $18 - 6 + 1 = 13$ values.
        <br><i>Common errors:</i> counting the endpoints 5 and 19 (15 values), which make a degenerate "triangle" with zero area, or counting $19-5 = 14$.`
    },
    {
      id: 'GEO2-03', topic: 'GEO2', type: 'mc', diff: 2,
      stem: R`In equilateral triangle $ABC$, each side has length 10. Segment $\overline{AD}$ is an altitude, as shown. What is the length of $\overline{AD}$?`,
      figure: { type: 'svg', alt: R`An equilateral triangle ABC with side length 10, tick marks on all three sides, and a dashed altitude from A to point D on side BC, with a right-angle mark at D.`, svg: R`<svg viewBox="0 0 300 225"><polygon points="150,55.1 75,185 225,185"/><line class="a dash" x1="150" y1="55.1" x2="150" y2="185"/><polyline class="thin" points="150,175 160,175 160,185"/><line class="thin" x1="117.7" y1="123" x2="107.3" y2="117"/><line class="thin" x1="192.7" y1="117" x2="182.3" y2="123"/><line class="thin" x1="150" y1="179" x2="150" y2="191"/><text x="150" y="45.1" text-anchor="middle">A</text><text x="63" y="191" text-anchor="end">B</text><text x="237" y="191" text-anchor="start">C</text><text x="150" y="205" text-anchor="middle">D</text><text class="up" x="96.5" y="116" text-anchor="end">10</text></svg>` },
      choices: [R`$5\sqrt{3}$`, R`$5\sqrt{2}$`, R`$10\sqrt{3}$`, R`$\dfrac{5\sqrt{3}}{2}$`],
      answer: 0,
      explain: R`The altitude of an equilateral triangle bisects the base, so $\triangle ABD$ is a 30-60-90 triangle with hypotenuse $AB = 10$ and short leg $BD = 5$. The long leg is $BD\sqrt3 = 5\sqrt3$. (Check: $5^2 + AD^2 = 10^2$ gives $AD = \sqrt{75} = 5\sqrt3$.)
        <br><i>Common errors:</i> using the 45-45-90 ratio ($5\sqrt2$), using 10 as the short leg ($10\sqrt3$), or halving again ($\tfrac{5\sqrt3}{2}$).`
    },
    {
      id: 'GEO2-04', topic: 'GEO2', type: 'num', diff: 2,
      stem: R`The hypotenuse of a 45-45-90 triangle has length 18. What is the area of the triangle?`,
      answer: 81, tol: 0,
      explain: R`In a 45-45-90 triangle the legs are equal and the hypotenuse is a leg times $\sqrt2$, so each leg is $\dfrac{18}{\sqrt2} = 9\sqrt2$. The area is $\tfrac12 (9\sqrt2)(9\sqrt2) = \tfrac12 \cdot 162 = 81$.
        <br><i>Common errors:</i> using 18 as a leg (area 162), or dividing by $\sqrt2$ only once for the area.`
    },
    {
      id: 'GEO2-05', topic: 'GEO2', type: 'mc', diff: 2, task: [5, 15],
      stem: R`A student says, "A square can't be a rectangle, because a rectangle has two long sides and two short sides." Which response best addresses the student's claim using standard definitions?`,
      choices: [
        R`A rectangle is a quadrilateral with four right angles. Every square has four right angles, so every square is a rectangle (a special one with equal sides).`,
        R`Squares are rectangles only when the side lengths are whole numbers.`,
        R`Squares and rectangles are two names for exactly the same shape.`,
        R`A square is a rectangle only when its diagonals are perpendicular, and that is not always true.`],
      answer: 0,
      explain: R`The standard definition of a rectangle is a quadrilateral with four right angles (equivalently, a parallelogram with a right angle). A square meets it, so squares are a subset of rectangles in the quadrilateral hierarchy. The student is using a picture of a "typical" rectangle as the definition.
        <br><i>Why the others fail:</i> B has nothing to do with the definition. C is false because a $3\times5$ rectangle is not a square. D is false: the diagonals of every square are perpendicular.`
    },
    {
      id: 'GEO2-06', topic: 'GEO2', type: 'multi', diff: 2,
      stem: R`For which of the following quadrilaterals are the diagonals <b>always</b> perpendicular? Select all that apply.`,
      choices: [R`Rhombus`, R`Rectangle`, R`Kite`, R`Square`, R`Parallelogram`],
      answer: [0, 2, 3],
      explain: R`In a rhombus, a kite, and a square the diagonals are perpendicular (in a kite, one diagonal is the perpendicular bisector of the other; a rhombus and a square are special kites and parallelograms). The diagonals of a rectangle are congruent and bisect each other but are perpendicular only if the rectangle is a square, and those of a general parallelogram bisect each other without being perpendicular.
        <br><i>Common error:</i> selecting Rectangle because a square is a rectangle; the question asks about <i>every</i> rectangle.`
    },
    {
      id: 'GEO2-07', topic: 'GEO2', type: 'num', diff: 2,
      stem: R`In the figure, $\overline{AD}$ is a median of triangle $ABC$, so $BD = 3x+2$ and $DC = 5x-6$. What is the length of $\overline{BC}$?`,
      figure: { type: 'svg', alt: R`Triangle ABC with segment AD drawn from vertex A to point D on side BC. Matching tick marks show BD and DC are congruent. BD is labeled 3x + 2 and DC is labeled 5x - 6.`, svg: R`<svg viewBox="0 0 300 225"><polygon points="95,40 35,180 265,180"/><line class="a" x1="95" y1="40" x2="150" y2="180"/><line class="thin" x1="92.5" y1="174" x2="92.5" y2="186"/><line class="thin" x1="207.5" y1="174" x2="207.5" y2="186"/><text x="91" y="30" text-anchor="middle">A</text><text x="25" y="186" text-anchor="end">B</text><text x="275" y="186" text-anchor="start">C</text><text x="150" y="200" text-anchor="middle">D</text><text class="up" x="92.5" y="205" text-anchor="middle">3<tspan font-style="italic">x</tspan> + 2</text><text class="up" x="207.5" y="205" text-anchor="middle">5<tspan font-style="italic">x</tspan> − 6</text></svg>` },
      answer: 28, tol: 0,
      explain: R`A median joins a vertex to the midpoint of the opposite side, so $BD = DC$: $3x+2 = 5x-6$, giving $x = 4$. Then $BD = 14$ and $DC = 14$, so $BC = 28$.
        <br><i>Common error:</i> stopping at $BD = 14$, which is only half of $BC$.`
    },
    {
      id: 'GEO2-08', topic: 'GEO2', type: 'mc', diff: 2, task: [15, 18],
      stem: R`In the figure, $D$ is the midpoint of $\overline{BC}$. A student says, "$\overline{AD}$ is an altitude of triangle $ABC$ because $D$ is the midpoint of $\overline{BC}$." Which statement best describes the student's error?`,
      figure: { type: 'svg', alt: R`Triangle ABC that leans to the left, with segment AD drawn from A to point D on BC. Tick marks show BD and DC are congruent. Segment AD is visibly not perpendicular to BC.`, svg: R`<svg viewBox="0 0 300 215"><polygon points="85,30 30,180 270,180"/><line class="a" x1="85" y1="30" x2="150" y2="180"/><line class="thin" x1="90" y1="174" x2="90" y2="186"/><line class="thin" x1="210" y1="174" x2="210" y2="186"/><text x="85" y="20" text-anchor="middle">A</text><text x="20" y="186" text-anchor="end">B</text><text x="280" y="186" text-anchor="start">C</text><text x="150" y="200" text-anchor="middle">D</text></svg>` },
      choices: [
        R`The student is confusing a median with an altitude: $\overline{AD}$ is a median because it ends at a midpoint, but an altitude must be perpendicular to the opposite side, which is not the case here.`,
        R`The student is correct, because a segment from a vertex to the midpoint of the opposite side is always an altitude.`,
        R`The student is confusing an altitude with an angle bisector: $\overline{AD}$ bisects $\angle A$.`,
        R`The student is incorrect because an altitude must end at a vertex, not on a side.`],
      answer: 0,
      explain: R`A median joins a vertex to the midpoint of the opposite side; an altitude joins a vertex to the line containing the opposite side at a right angle. They coincide only in special triangles (for example, when $AB = AC$). In this triangle $\overline{AD}$ visibly is not perpendicular to $\overline{BC}$, so it is a median but not an altitude.
        <br><i>Why the others fail:</i> B is the student's misconception restated. C and D misstate the definitions: nothing shows $AD$ bisects $\angle A$, and an altitude does end on the opposite side.`
    },
    {
      id: 'GEO2-09', topic: 'GEO2', type: 'num', diff: 2,
      stem: R`The sum of the interior angle measures of a convex polygon is $1440^\circ$. How many diagonals does the polygon have?`,
      answer: 35, tol: 0,
      explain: R`The interior angle sum of an $n$-gon is $(n-2)\cdot180^\circ$. So $(n-2)\cdot 180 = 1440$, $n - 2 = 8$, $n = 10$. The number of diagonals is $\dfrac{n(n-3)}{2} = \dfrac{10\cdot 7}{2} = 35$.
        <br><i>Common errors:</i> answering 10 (the number of sides), or using $\binom{10}{2} = 45$, which counts the sides too.`
    },
    {
      id: 'GEO2-10', topic: 'GEO2', type: 'mc', diff: 2, task: [15, 16],
      stem: R`A student notices that the interior angles of a triangle add to $180^\circ$ and those of a quadrilateral add to $360^\circ$, and says, "So the exterior angles must also add up to more as the polygon gets more sides." Which response best builds on the student's thinking?`,
      choices: [
        R`Take one exterior angle at each vertex of any convex polygon; their measures always add to $360^\circ$, because each exterior angle is $180^\circ$ minus the interior angle and $n\cdot180^\circ - (n-2)\cdot180^\circ = 360^\circ$.`,
        R`The exterior angles add to $180n^\circ$, so the student is correct.`,
        R`The exterior angles add to $360^\circ$ only for regular polygons.`,
        R`The exterior angles add to $180^\circ$ for every polygon, like a triangle's interior angles.`],
      answer: 0,
      explain: R`At each vertex, exterior angle $= 180^\circ - $ interior angle. Summing over $n$ vertices gives $180n - (n-2)180 = 360$. The sum is $360^\circ$ for every convex polygon, regular or not, and does not depend on $n$. Connecting to the student's interior-angle formula is a productive way to correct the misconception.
        <br><i>Why the others fail:</i> B adds the linear-pair supplements without subtracting the interior angles. C wrongly restricts to regular polygons (only each <i>individual</i> exterior angle needs "regular"). D is the triangle's interior sum.`
    },



    /* ================= GEO3: Transformations ================= */
    {
      id: 'GEO3-01', topic: 'GEO3', type: 'mc', diff: 2,
      stem: R`Triangle $A'B'C'$ is the image of triangle $ABC$ under a single transformation. Which transformation maps $ABC$ onto $A'B'C'$?`,
      figure: { type: 'plot', alt: R`Coordinate plane with orange triangle ABC at A(1,1), B(4,1), C(1,3) in the first quadrant and blue triangle A'B'C' at A'(-1,-1), B'(-4,-1), C'(-1,-3) in the third quadrant.`, segments: [[1, 1, 4, 1, { color: 'a' }], [4, 1, 1, 3, { color: 'a' }], [1, 3, 1, 1, { color: 'a' }], [-1, -1, -4, -1, { color: 'b' }], [-4, -1, -1, -3, { color: 'b' }], [-1, -3, -1, -1, { color: 'b' }]], points: [{ x: 1, y: 1, label: "A", dx: -14, dy: 16 }, { x: 4, y: 1, label: "B", dx: 6, dy: 16 }, { x: 1, y: 3, label: "C", dx: -14, dy: -6 }, { x: -1, y: -1, label: "A'", dx: -26, dy: -6 }, { x: -4, y: -1, label: "B'", dx: -30, dy: -6 }, { x: -1, y: -3, label: "C'", dx: -30, dy: 14 }], xr: [-6, 6], yr: [-4, 4], xstep: 1, ystep: 1 },
      choices: [R`A rotation of $180^\circ$ about the origin`, R`A reflection over the $x$-axis`, R`A rotation of $90^\circ$ counterclockwise about the origin`, R`A translation 2 units left and 2 units down`],
      answer: 0,
      explain: R`Compare all three vertices: $A(1,1)\to A'(-1,-1)$, $B(4,1)\to B'(-4,-1)$, $C(1,3)\to C'(-1,-3)$. Each point goes to $(-x,-y)$, which is a $180^\circ$ rotation about the origin.
        <br><i>Why the others fail:</i> a reflection over the $x$-axis sends $(x,y)$ to $(x,-y)$; a $90^\circ$ counterclockwise rotation sends $(x,y)$ to $(-y,x)$. The translation does send $A$ to $A'$, which is why checking a single vertex is not enough, but it sends $B$ to $(2,-1)$, not $B'$.`
    },
    {
      id: 'GEO3-02', topic: 'GEO3', type: 'mc', diff: 2,
      stem: R`In the figure, triangle $P'Q'R'$ is the image of triangle $PQR$. Which sequence of transformations maps $PQR$ onto $P'Q'R'$?`,
      figure: { type: 'plot', alt: R`Coordinate plane with orange triangle PQR at P(1,1), Q(4,1), R(1,3) and blue triangle P'Q'R' at P'(-1,-3), Q'(-4,-3), R'(-1,-1).`, segments: [[1, 1, 4, 1, { color: 'a' }], [4, 1, 1, 3, { color: 'a' }], [1, 3, 1, 1, { color: 'a' }], [-1, -3, -4, -3, { color: 'b' }], [-4, -3, -1, -1, { color: 'b' }], [-1, -1, -1, -3, { color: 'b' }]], points: [{ x: 1, y: 1, label: "P", dx: -14, dy: 16 }, { x: 4, y: 1, label: "Q", dx: 6, dy: 16 }, { x: 1, y: 3, label: "R", dx: -14, dy: -6 }, { x: -1, y: -3, label: "P'", dx: 6, dy: 16 }, { x: -4, y: -3, label: "Q'", dx: -30, dy: 16 }, { x: -1, y: -1, label: "R'", dx: 6, dy: -6 }], xr: [-6, 6], yr: [-4, 4], xstep: 1, ystep: 1 },
      choices: [
        R`Reflect over the $y$-axis, then translate 4 units down.`,
        R`Reflect over the $x$-axis, then translate 4 units to the left.`,
        R`Rotate $180^\circ$ about the origin, then translate 4 units up.`,
        R`Translate 4 units to the left, then reflect over the $x$-axis.`],
      answer: 0,
      explain: R`Follow $P(1,1)$: reflecting over the $y$-axis gives $(-1,1)$, and translating 4 units down gives $(-1,-3)=P'$. The same steps take $Q(4,1)\to(-4,1)\to(-4,-3)=Q'$ and $R(1,3)\to(-1,3)\to(-1,-1)=R'$.
        <br><i>Why the others fail:</i> B sends $P$ to $(-3,-1)$; C sends $P$ to $(-1,3)$; D sends $P$ to $(-3,-1)$. Because the order of a reflection and a translation matters when they are not along the same axis, the image depends on the order given.`
    },
    {
      id: 'GEO3-03', topic: 'GEO3', type: 'num', diff: 2,
      stem: R`A dilation with center $C(1, 2)$ and scale factor 3 maps point $P(4, -2)$ to $P'$. What is the distance $CP'$?`,
      answer: 15, tol: 0,
      explain: R`A dilation multiplies distances from the center by the scale factor. $CP = \sqrt{(4-1)^2 + (-2-2)^2} = \sqrt{9+16} = 5$, so $CP' = 3\cdot 5 = 15$. (Check: $P' = (1 + 3\cdot3,\ 2 + 3\cdot(-4)) = (10,-10)$ and $\sqrt{9^2 + 12^2} = 15$.)
        <br><i>Common errors:</i> reporting $CP = 5$ or the distance $PP' = 10$, or multiplying the coordinates of $P$ by 3 (dilating about the origin instead of about $C$).`
    },
    {
      id: 'GEO3-04', topic: 'GEO3', type: 'mc', diff: 1, task: [10],
      stem: R`A student conjectures, "Any transformation that preserves angle measure must be a rigid motion." Which transformation is a counterexample to the student's conjecture?`,
      choices: [R`Dilation with center at the origin and scale factor 2`, R`Reflection over the $y$-axis`, R`Rotation of $90^\circ$ about the origin`, R`Translation 3 units to the right`],
      answer: 0,
      explain: R`A counterexample must preserve angle measure but not be a rigid motion. A dilation with scale factor 2 keeps every angle the same but doubles every length, so it is not a rigid motion. Reflections, rotations, and translations are all rigid motions, so none of them can be a counterexample.`
    },
    {
      id: 'GEO3-05', topic: 'GEO3', type: 'multi', diff: 2,
      stem: R`Which of the following transformations of the plane are rigid motions (isometries)? Select all that apply.`,
      choices: [R`$(x, y) \to (x+3,\ y-1)$`, R`$(x, y) \to (-y,\ x)$`, R`$(x, y) \to (2x,\ 2y)$`, R`$(x, y) \to (2x,\ y)$`, R`$(x, y) \to (y,\ x)$`],
      answer: [0, 1, 4],
      explain: R`A rigid motion preserves the distance between every pair of points. $(x,y)\to(x+3,y-1)$ is a translation; $(x,y)\to(-y,x)$ is a $90^\circ$ rotation about the origin; $(x,y)\to(y,x)$ is a reflection over $y=x$. The map $(x,y)\to(2x,2y)$ is a dilation (distances double), and $(x,y)\to(2x,y)$ is a horizontal stretch that changes distances and angles.
        <br><i>Common error:</i> selecting $(2x,2y)$ because it "keeps the same shape"; that is similarity, not congruence.`
    },
    {
      id: 'GEO3-06', topic: 'GEO3', type: 'mc', diff: 2,
      stem: R`The figure is made of three congruent scalene triangular blades arranged around a common center point. Which statement describes the symmetries of the figure?`,
      figure: { type: 'svg', alt: R`A pinwheel figure made of three congruent, unequal-sided triangular blades that all meet at a center point, each blade a copy of the previous one turned 120 degrees around the center.`, svg: R`<svg viewBox="0 0 300 240"><polygon class="fa" points="150,120 150,35 110.7,92.5"/><polygon class="fa" points="150,120 76.4,162.5 145.8,167.8"/><polygon class="fa" points="150,120 223.6,162.5 193.5,99.7"/><circle class="pt" cx="150" cy="120" r="3"/></svg>` },
      choices: [
        R`It has rotational symmetry (turns of $120^\circ$ and $240^\circ$ about the center map it onto itself) but no line of reflection symmetry.`,
        R`It has three lines of reflection symmetry and rotational symmetry of $120^\circ$.`,
        R`It has three lines of reflection symmetry but no rotational symmetry.`,
        R`It has exactly one line of reflection symmetry and no rotational symmetry.`],
      answer: 0,
      explain: R`Turning the figure $120^\circ$ about the center carries each blade onto the next, so it has rotational symmetry of order 3. A reflection would reverse the "handedness" of the blades (each blade leans the same way around the center), and the blades are scalene, so no reflection maps the figure to itself.
        <br><i>Common error:</i> assuming that every figure with rotational symmetry also has reflection symmetry (it is true for a regular polygon, not for a pinwheel).`
    },
    {
      id: 'GEO3-07', topic: 'GEO3', type: 'mc', diff: 2, task: [18, 21],
      stem: R`To rotate the point $(3, 1)$ by $90^\circ$ counterclockwise about the origin, a student writes: "Use $(x, y) \to (y, -x)$, so $(3, 1) \to (1, -3)$." Which statement best describes the student's work?`,
      choices: [
        R`The student used the rule for a $90^\circ$ clockwise rotation. The counterclockwise rule is $(x,y)\to(-y,x)$, which gives $(-1, 3)$.`,
        R`The student reflected the point over the $x$-axis instead of rotating it.`,
        R`The student rotated by $180^\circ$ instead of $90^\circ$.`,
        R`The student's work is correct.`],
      answer: 0,
      explain: R`A $90^\circ$ counterclockwise rotation about the origin maps $(x,y)$ to $(-y,x)$; the rule $(y,-x)$ is the $90^\circ$ clockwise rotation. The correct image is $(-1, 3)$ (test: rotating the point $(1,0)$ counterclockwise should land at $(0,1)$, and $(-y,x)$ gives $(0,1)$ while $(y,-x)$ gives $(0,-1)$).
        <br><i>Why the others fail:</i> a reflection over the $x$-axis would give $(3,-1)$; a $180^\circ$ rotation would give $(-3,-1)$. The student's arithmetic is right, but the rule applies to the wrong direction, so the work looks valid while masking a mistake.`
    },
    {
      id: 'GEO3-08', topic: 'GEO3', type: 'mc', diff: 2, task: [17, 21],
      stem: R`A translation maps point $A(2, 5)$ to $A'(-1, 3)$. A student writes the translation vector as $\langle 3, 2 \rangle$, explaining, "$2-(-1)=3$ and $5-3=2$." Which statement best evaluates the student's work?`,
      figure: { type: 'plot', alt: R`Coordinate plane with point A at (2, 5) and its image A prime at (-1, 3), joined by a dashed segment.`, segments: [[2, 5, -1, 3, { color: 'g', dash: true }]], points: [{ x: 2, y: 5, label: 'A(2, 5)', dx: 8, dy: -8 }, { x: -1, y: 3, label: "A'(-1, 3)", dx: -74, dy: -8 }], xr: [-5, 5], yr: [0, 7], xstep: 1, ystep: 1 },
      choices: [
        R`The student subtracted in the wrong order (initial minus final). The vector is $\langle -3, -2 \rangle$.`,
        R`The student is correct.`,
        R`The student should have added the coordinates. The vector is $\langle 1, 8 \rangle$.`,
        R`The vector is $\langle -3, 2 \rangle$, because the point moved left and up.`],
      answer: 0,
      explain: R`A translation vector is (final $-$ initial): $\langle -1-2,\ 3-5\rangle = \langle -3, -2\rangle$, which moves points 3 left and 2 down. The student computed initial $-$ final, which gives the vector that would undo the translation.
        <br><i>Why the others fail:</i> $\langle 1,8\rangle$ is the sum of coordinates; $\langle -3,2\rangle$ would move the point up, but $A'$ is below $A$ (its $y$-coordinate decreased from 5 to 3).`
    },
    {
      id: 'GEO3-09', topic: 'GEO3', type: 'mc', diff: 1,
      stem: R`A figure is translated by the vector $\langle 3, -2 \rangle$ and then translated by the vector $\langle -7, 5 \rangle$. Which single translation vector gives the same result?`,
      choices: [R`$\langle -4,\ 3 \rangle$`, R`$\langle 4,\ -3 \rangle$`, R`$\langle -10,\ 7 \rangle$`, R`$\langle 10,\ -7 \rangle$`],
      answer: 0,
      explain: R`Translations add: $\langle 3 + (-7),\ -2 + 5 \rangle = \langle -4, 3 \rangle$.
        <br><i>Common errors:</i> subtracting the first vector from the second ($\langle -10, 7\rangle$) or the second from the first ($\langle 10, -7\rangle$), and reversing the signs of the correct answer ($\langle 4,-3\rangle$).`
    },

    /* ================= GEO4: Congruence and similarity ================= */
    {
      id: 'GEO4-01', topic: 'GEO4', type: 'mc', diff: 1,
      stem: R`Which of the following is <b>not</b> sufficient, by itself, to prove that two triangles are congruent?`,
      choices: [R`Two sides and a non-included angle (SSA)`, R`Two angles and the included side (ASA)`, R`Three pairs of congruent sides (SSS)`, R`Two angles and a non-included side (AAS)`],
      answer: 0,
      explain: R`SSS, ASA, AAS, and SAS each guarantee congruence. SSA does not: a fixed angle and two sides (one opposite the angle) can form two different triangles, the "ambiguous case."
        <br><i>Common error:</i> choosing AAS because the side is not between the angles. AAS is valid, because the third angle is then determined and ASA applies.`
    },
    {
      id: 'GEO4-02', topic: 'GEO4', type: 'mc', diff: 2, task: [11, 17],
      stem: R`In the figure, $AC = DF = 8$, $BC = EF = 5$, and $m\angle A = m\angle D = 30^\circ$. A student says, "The triangles are congruent by SSA." Which statement best evaluates the student's claim?`,
      figure: { type: 'svg', alt: R`Two triangles side by side, both drawn to scale. Triangle ABC has a 30 degree angle at A (marked with an arc), side AC = 8 and side BC = 5, with B far to the right of A. Triangle DEF also has a 30 degree angle at D, DF = 8 and EF = 5, but E is much closer to D, so its angle at E is obtuse. Single ticks show AC = DF and double ticks show BC = EF.`, svg: R`<svg viewBox="0 0 350 175"><polygon points="15,130 163.9,130 118.9,70"/><path class="thin" d="M39 130 A24 24 0 0 0 35.8 118"/><text x="9" y="146" text-anchor="end">A</text><text x="169.9" y="146" text-anchor="start">B</text><text x="114.9" y="60" text-anchor="middle">C</text><polygon points="215,130 273.9,130 318.9,70"/><path class="thin" d="M239 130 A24 24 0 0 0 235.8 118"/><text x="209" y="146" text-anchor="end">D</text><text x="279.9" y="146" text-anchor="start">E</text><text x="314.9" y="60" text-anchor="middle">F</text><line class="thin" x1="64" y1="94.8" x2="70" y2="105.2"/><line class="thin" x1="264" y1="94.8" x2="270" y2="105.2"/><line class="thin" x1="137.8" y1="105.2" x2="147.4" y2="98"/><line class="thin" x1="135.4" y1="102" x2="145" y2="94.8"/><line class="thin" x1="290.4" y1="98" x2="300" y2="105.2"/><line class="thin" x1="292.8" y1="94.8" x2="302.4" y2="102"/><text class="up" x="58" y="89.4" text-anchor="middle">8</text><text class="up" x="258" y="89.4" text-anchor="middle">8</text><text class="up" x="155.8" y="94.2" text-anchor="middle">5</text><text class="up" x="310.8" y="115.8" text-anchor="middle">5</text></svg>` },
      choices: [
        R`The claim is invalid. SSA does not guarantee congruence, and here the two triangles match in these parts but have different third sides ($AB \ne DE$).`,
        R`The claim is valid, because SSA works whenever the given angle is acute.`,
        R`The claim is valid, because two sides and an angle are always enough.`,
        R`The claim is invalid because SSA is not a criterion, but the triangles are congruent by SAS.`],
      answer: 0,
      explain: R`By the Law of Sines, $\sin B = \dfrac{8\sin 30^\circ}{5} = 0.8$, so $B$ can be about $53.1^\circ$ or $126.9^\circ$; both triangles satisfy the given parts. The third sides are $8\cos30^\circ \pm 3 \approx 9.93$ and $3.93$, so the triangles are not congruent. SSA is not a congruence criterion.
        <br><i>Why the others fail:</i> B and C claim SSA is reliable, which is the misconception. D is wrong because the given angle is not included between the two given sides, so SAS does not apply.`
    },
    {
      id: 'GEO4-03', topic: 'GEO4', type: 'num', diff: 3,
      stem: R`In right triangle $ABC$, the right angle is at $C$ and $\overline{CD}$ is perpendicular to hypotenuse $\overline{AB}$. If $AD = 4$ and $DB = 9$, what is $CD$?`,
      figure: { type: 'svg', alt: R`Right triangle ABC with the right angle at C. Segment CD is drawn from C perpendicular to hypotenuse AB, meeting it at D. AD is labeled 4 and DB is labeled 9.`, svg: R`<svg viewBox="0 0 300 200"><polygon points="30,155 251,155 98,53"/><line class="a" x1="98" y1="53" x2="98" y2="155"/><polyline class="thin" points="88,155 88,145 98,145"/><polyline class="thin" points="92.5,61.3 100.8,66.9 106.3,58.5"/><text x="20" y="161" text-anchor="end">A</text><text x="261" y="161" text-anchor="start">B</text><text x="98" y="43" text-anchor="middle">C</text><text x="98" y="175" text-anchor="middle">D</text><text class="up" x="64" y="195" text-anchor="middle">4</text><text class="up" x="174.5" y="195" text-anchor="middle">9</text></svg>` },
      answer: 6, tol: 0,
      explain: R`The altitude to the hypotenuse creates two triangles similar to each other and to $ABC$: $\triangle ADC \sim \triangle CDB$ (each has a right angle at $D$, and $\angle ACD \cong \angle B$ because both are complementary to $\angle A$). So $\dfrac{AD}{CD} = \dfrac{CD}{DB}$, giving $CD^2 = 4\cdot 9 = 36$ and $CD = 6$.
        <br><i>Common errors:</i> averaging $\tfrac{4+9}{2} = 6.5$, or using $CD = \sqrt{4^2+9^2}$.`
    },
    {
      id: 'GEO4-04', topic: 'GEO4', type: 'num', diff: 2,
      stem: R`Two right circular cones are similar. The smaller cone has height 6 cm and volume 40 cm$^3$. The larger cone has height 9 cm. What is the volume, in cubic centimeters, of the larger cone?`,
      answer: 135, tol: 0, unit: 'cm³',
      explain: R`The linear scale factor is $\dfrac{9}{6} = \dfrac32$. Volumes of similar solids scale by the cube of the linear factor: $\left(\dfrac32\right)^3 = \dfrac{27}{8}$. So the volume is $40\cdot\dfrac{27}{8} = 135$ cm$^3$.
        <br><i>Common errors:</i> multiplying by $\tfrac32$ (60) or by $\left(\tfrac32\right)^2$ (90).`
    },
    {
      id: 'GEO4-05', topic: 'GEO4', type: 'mc', diff: 2, task: [1, 2],
      stem: R`A teacher wants students to understand why two pairs of congruent angles are enough to show that two triangles are similar (AA similarity). Which explanation is mathematically valid?`,
      choices: [
        R`If $\angle A\cong\angle D$ and $\angle B\cong\angle E$, then $\angle C\cong\angle F$ by the angle sum. Dilate $\triangle ABC$ by the factor $DE/AB$ so that the image has a side equal to $DE$ between congruent angles; by ASA a rigid motion then maps the image onto $\triangle DEF$.`,
        R`If two pairs of angles are congruent, so is the third pair, so the triangles are congruent by AAA and therefore similar.`,
        R`Two pairs of congruent angles force the corresponding sides to be equal, so the triangles are congruent, and congruent triangles are similar.`,
        R`Draw several pairs of triangles with two equal angles and measure the sides; the ratios always come out equal, which proves AA.`],
      answer: 0,
      explain: R`Choice A gives a real argument using transformations: similarity means a dilation followed by a rigid motion, and after dilating to make one pair of sides congruent, ASA finishes the job.
        <br><i>Why the others fail:</i> B claims AAA gives congruence, which is false (similar triangles of different sizes have equal angles). C wrongly says equal angles force equal sides. D is empirical evidence, not a proof.`
    },
    {
      id: 'GEO4-06', topic: 'GEO4', type: 'mc', diff: 2,
      stem: R`In the figure, triangle $DEF$ has vertices $D(-2,2)$, $E(-6,2)$, and $F(-2,4)$, and triangle $ABC$ has vertices $A(1,1)$, $B(3,1)$, and $C(1,2)$. Which statement is true?`,
      figure: { type: 'plot', alt: R`Coordinate plane with small orange triangle ABC at A(1,1), B(3,1), C(1,2) and larger blue triangle DEF at D(-2,2), E(-6,2), F(-2,4) in the second quadrant.`, segments: [[1, 1, 3, 1, { color: 'a' }], [3, 1, 1, 2, { color: 'a' }], [1, 2, 1, 1, { color: 'a' }], [-2, 2, -6, 2, { color: 'b' }], [-6, 2, -2, 4, { color: 'b' }], [-2, 4, -2, 2, { color: 'b' }]], points: [{ x: 1, y: 1, label: "A", dx: -14, dy: 16 }, { x: 3, y: 1, label: "B", dx: 6, dy: 16 }, { x: 1, y: 2, label: "C", dx: -14, dy: -6 }, { x: -2, y: 2, label: "D", dx: 6, dy: -6 }, { x: -6, y: 2, label: "E", dx: -16, dy: -8 }, { x: -2, y: 4, label: "F", dx: 6, dy: -6 }], xr: [-8, 5], yr: [-1, 7], xstep: 1, ystep: 1 },
      choices: [
        R`The triangles are similar but not congruent; $DEF$ is the image of $ABC$ under a dilation with center at the origin and scale factor 2 followed by a reflection over the $y$-axis.`,
        R`The triangles are congruent, because a reflection over the $y$-axis maps $ABC$ onto $DEF$.`,
        R`The triangles are not similar, because $DEF$ is a reflection of a larger triangle and reflections reverse orientation.`,
        R`The triangles are congruent, because their corresponding angles are equal.`],
      answer: 0,
      explain: R`Dilating by 2 about the origin sends $A,B,C$ to $(2,2),(6,2),(2,4)$; reflecting over the $y$-axis gives $(-2,2),(-6,2),(-2,4)$, which are $D, E, F$. A dilation followed by a rigid motion is a similarity transformation, so the triangles are similar; the sides of $DEF$ are twice as long, so they are not congruent.
        <br><i>Why the others fail:</i> B ignores the size change ($DE = 4$ but $AB = 2$). C treats reversed orientation as breaking similarity, but reflections are allowed in a similarity. D confuses equal angles (which gives similarity) with congruence.`
    },
    {
      id: 'GEO4-07', topic: 'GEO4', type: 'mc', diff: 2,
      stem: R`In the figure, the marks show $\angle A\cong\angle D$, $\angle B\cong\angle E$, and $\overline{BC}\cong\overline{EF}$. Which criterion can be used to prove $\triangle ABC\cong\triangle DEF$?`,
      figure: { type: 'svg', alt: R`Two triangles ABC and DEF. In each, one small arc marks the angle at A and at D, two small arcs mark the angle at B and at E, and a single tick mark shows that BC and EF are congruent. Side BC is opposite A and side EF is opposite D.`, svg: R`<svg viewBox="0 0 330 170"><polygon points="20,145 140,145 95,35"/><polygon points="320,30 200,30 245,140"/><path class="thin" d="M40 145 A20 20 0 0 0 31.3 128.5"/><path class="thin" d="M300 30 A20 20 0 0 0 308.7 46.5"/><path class="thin" d="M132.4 126.5 A20 20 0 0 0 120 145"/><path class="thin" d="M130.9 122.8 A24 24 0 0 0 116 145"/><path class="thin" d="M207.6 48.5 A20 20 0 0 0 220 30"/><path class="thin" d="M209.1 52.2 A24 24 0 0 0 224 30"/><line class="thin" x1="111.9" y1="92.3" x2="123.1" y2="87.7"/><line class="thin" x1="228.1" y1="82.7" x2="216.9" y2="87.3"/><text x="12" y="160" text-anchor="end">A</text><text x="148" y="160" text-anchor="start">B</text><text x="95" y="25" text-anchor="middle">C</text><text x="328" y="22" text-anchor="start">D</text><text x="192" y="22" text-anchor="end">E</text><text x="245" y="162" text-anchor="middle">F</text></svg>` },
      choices: [R`AAS`, R`ASA`, R`SAS`, R`SSA`],
      answer: 0,
      explain: R`Two angles are given, and the congruent sides $\overline{BC}$ and $\overline{EF}$ are opposite $\angle A$ and $\angle D$: they are not between the marked angles (the side between $A$ and $B$ would be $\overline{AB}$). Two angles and a non-included side is AAS.
        <br><i>Common error:</i> choosing ASA without checking that the side is <i>included</i> between the two angles.`
    },
    {
      id: 'GEO4-08', topic: 'GEO4', type: 'multi', diff: 2,
      stem: R`Triangles $ABC$ and $DEF$ are given. For which of the following sets of conditions can you conclude that $\triangle ABC \cong \triangle DEF$? Select all that apply.`,
      choices: [
        R`$AB = DE$, $BC = EF$, $m\angle A = m\angle D$`,
        R`$AB = DE$, $AC = DF$, $m\angle A = m\angle D$`,
        R`$m\angle A = m\angle D$, $m\angle B = m\angle E$, $m\angle C = m\angle F$`,
        R`$m\angle A = m\angle D$, $m\angle C = m\angle F$, $AC = DF$`,
        R`$m\angle B = m\angle E$, $m\angle C = m\angle F$, $AB = DE$`],
      answer: [1, 3, 4],
      explain: R`B is SAS ($\angle A$ is between $AB$ and $AC$). D is ASA ($AC$ lies between $\angle A$ and $\angle C$). E is AAS ($AB$ is opposite $\angle C$ and $DE$ is opposite $\angle F$, so the given side is not between the two given angles, and the third angles are then forced to be equal).
        <br>A is SSA ($\angle A$ is opposite $BC$, not between $AB$ and $BC$), which does not guarantee congruence. C is AAA, which gives similarity only.`
    },



    /* ================= GEO5: Proving geometric theorems ================= */
    {
      id: 'GEO5-01', topic: 'GEO5', type: 'mc', diff: 1,
      stem: R`Lines $AB$ and $CD$ intersect at $E$, as shown. The following proof shows that vertical angles $\angle AEC$ and $\angle BED$ are congruent.
        <div class="work">1. $m\angle AEC + m\angle CEB = 180^\circ$ (linear pair)<br>
        2. $m\angle CEB + m\angle BED = 180^\circ$ (linear pair)<br>
        3. $m\angle AEC + m\angle CEB = m\angle CEB + m\angle BED$ (substitution)<br>
        4. $m\angle AEC = m\angle BED$ (?)</div>
        Which is the correct justification for step 4?`,
      figure: { type: 'svg', alt: R`Two lines cross at point E. Line AB passes through A on the lower left and B on the upper right; line CD passes through C on the upper left and D on the lower right. No angle measures are given.`, svg: R`<svg viewBox="0 0 300 220"><line x1="43.4" y1="153.1" x2="256.6" y2="66.9"/><line x1="57.3" y1="60.7" x2="242.7" y2="159.3"/><text x="35.4" y="161.1" text-anchor="end">A</text><text x="264.6" y="64.9" text-anchor="start">B</text><text x="53.3" y="52.7" text-anchor="end">C</text><text x="248.7" y="173.3" text-anchor="start">D</text><text x="152" y="134" text-anchor="middle">E</text></svg>` },
      choices: [R`Subtraction property of equality`, R`Vertical angles are congruent`, R`Alternate interior angles are congruent`, R`Angle addition postulate`],
      answer: 0,
      explain: R`Step 4 comes from subtracting $m\angle CEB$ from both sides of step 3, which is the subtraction property of equality.
        <br><i>Common error:</i> choosing "Vertical angles are congruent." That is the statement being proved, so using it as a reason would be circular.`
    },
    {
      id: 'GEO5-02', topic: 'GEO5', type: 'mc', diff: 1, task: [2],
      stem: R`A student "proves" the triangle angle-sum theorem: "I drew five different triangles and measured their angles with a protractor. The angles added to $180^\circ$ each time (within $1^\circ$), so the angles of every triangle add to $180^\circ$." Which is the best evaluation of the student's argument?`,
      choices: [
        R`It is not a proof: measuring specific examples cannot show that a statement holds for every triangle, and measurements are only approximate. A deductive argument (for example, drawing a line through one vertex parallel to the opposite side) is needed.`,
        R`It is a valid proof, because five triangles is enough evidence to prove the theorem.`,
        R`It is a valid proof as long as the five triangles include acute, right, and obtuse triangles.`,
        R`It is not a proof, because protractors cannot measure angles greater than $90^\circ$.`],
      answer: 0,
      explain: R`Examples and measurements can suggest a conjecture, but a proof must use definitions, postulates, and previously proved theorems to show the claim for <i>all</i> triangles. Measurements also carry error, so they cannot establish an exact sum.
        <br><i>Why the others fail:</i> B and C treat evidence as proof (adding more cases never turns induction into deduction). D is false: protractors measure up to $180^\circ$.`
    },
    {
      id: 'GEO5-03', topic: 'GEO5', type: 'mc', diff: 3, task: [2, 3],
      stem: R`A student writes a proof that the base angles of an isosceles triangle are congruent. In triangle $ABC$, $\overline{AB} \cong \overline{AC}$.
        <div class="work">1. $\overline{AB} \cong \overline{AC}$ (given)<br>
        2. Draw $\overline{AD}$, the bisector of $\angle BAC$, with $D$ on $\overline{BC}$.<br>
        3. $\overline{AD}$ is also the perpendicular bisector of $\overline{BC}$, so $BD = DC$.<br>
        4. $\triangle ABD \cong \triangle ACD$ (SSS, using $AB = AC$, $BD = DC$, $AD = AD$)<br>
        5. $\angle B \cong \angle C$ (corresponding parts of congruent triangles)</div>
        Which is the most serious flaw in the proof?`,
      figure: { type: 'svg', alt: R`Triangle ABC with AB and AC marked congruent by tick marks. Segment AD is drawn from A to point D on BC, and the two angles at A on either side of AD are marked with matching arcs. There is no right-angle mark at D.`, svg: R`<svg viewBox="0 0 300 225"><polygon points="150,30 60,185 240,185"/><line class="a" x1="150" y1="30" x2="150" y2="185"/><line class="thin" x1="110.2" y1="110.5" x2="99.8" y2="104.5"/><line class="thin" x1="200.2" y1="104.5" x2="189.8" y2="110.5"/><path class="thin" d="M136.9 52.5 A26 26 0 0 0 150 56"/><path class="thin" d="M150 56 A26 26 0 0 0 163.1 52.5"/><text x="150" y="20" text-anchor="middle">A</text><text x="50" y="191" text-anchor="end">B</text><text x="250" y="191" text-anchor="start">C</text><text x="150" y="205" text-anchor="middle">D</text></svg>` },
      choices: [
        R`Step 3 asserts, without justification, a property that holds only because the triangle is isosceles, which is essentially what is being proved.`,
        R`Step 2 is not allowed, because an angle bisector cannot be drawn to the opposite side.`,
        R`Step 4 is invalid, because SSS is not a congruence criterion.`,
        R`Step 5 is invalid, because corresponding parts of congruent triangles cannot be used in this proof.`],
      answer: 0,
      explain: R`Step 3 claims that the angle bisector from $A$ is also the perpendicular bisector of $\overline{BC}$. In a general triangle this is false; it is true here only because $AB = AC$, and proving it would require the very base-angle result the student is trying to prove (circular reasoning). A repair: skip step 3 and use SAS instead, with $AB = AC$, $\angle BAD \cong \angle CAD$ (definition of bisector), and $AD = AD$, to get $\triangle ABD \cong \triangle ACD$.
        <br><i>Why the others fail:</i> every triangle has an angle bisector from each vertex, SSS is a valid criterion, and CPCTC is the standard way to finish.`
    },
    {
      id: 'GEO5-04', topic: 'GEO5', type: 'mc', diff: 2,
      stem: R`In parallelogram $ABCD$, the diagonals $\overline{AC}$ and $\overline{BD}$ intersect at $E$. Which argument correctly proves that $AE = CE$?`,
      figure: { type: 'svg', alt: R`Parallelogram ABCD with diagonals AC and BD drawn, crossing at point E. No side lengths or angles are marked.`, svg: R`<svg viewBox="0 0 300 215"><polygon points="50,170 215,170 265,50 100,50"/><line class="a" x1="50" y1="170" x2="265" y2="50"/><line class="a" x1="215" y1="170" x2="100" y2="50"/><text x="40" y="176" text-anchor="end">A</text><text x="225" y="176" text-anchor="start">B</text><text x="275" y="48" text-anchor="start">C</text><text x="90" y="48" text-anchor="end">D</text><text x="157.5" y="132" text-anchor="middle">E</text><circle class="pt" cx="157.5" cy="110" r="3"/></svg>` },
      choices: [
        R`$\angle BAE\cong\angle DCE$ and $\angle ABE\cong\angle CDE$ (alternate interior angles, since $AB\parallel DC$), and $AB = DC$ (opposite sides of a parallelogram), so $\triangle ABE\cong\triangle CDE$ by ASA, and $AE = CE$ by CPCTC.`,
        R`$\angle BAE\cong\angle DCE$, $\angle ABE\cong\angle CDE$, and $\angle AEB\cong\angle CED$, so $\triangle ABE\cong\triangle CDE$ by AAA, and $AE = CE$ by CPCTC.`,
        R`The diagonals of a parallelogram bisect each other by the definition of a parallelogram, so $AE = CE$.`,
        R`$AB = DC$, $\angle AEB\cong\angle CED$ (vertical angles), and $BE = DE$, so $\triangle ABE\cong\triangle CDE$ by SAS, and $AE = CE$ by CPCTC.`],
      answer: 0,
      explain: R`Choice A is a complete ASA argument: two pairs of alternate interior angles (from $AB \parallel DC$ with transversals $AC$ and $BD$) and the included side $AB \cong DC$.
        <br><i>Why the others fail:</i> B uses AAA, which proves similarity, not congruence. C is circular (bisecting diagonals is a theorem about parallelograms, not the definition). D assumes $BE = DE$, which is part of what the diagonal-bisecting theorem establishes, and $\angle AEB$ is not the angle included between $AB$ and $BE$.`
    },
    {
      id: 'GEO5-05', topic: 'GEO5', type: 'multi', diff: 2, task: [10],
      stem: R`A student conjectures: "If a quadrilateral has one pair of parallel sides and the other pair of sides congruent, then it is a parallelogram." Which of the following are counterexamples to the conjecture? Select all that apply.`,
      choices: [
        R`An isosceles trapezoid with parallel sides of lengths 4 and 8 and legs of length 5`,
        R`A rectangle with side lengths 3 and 5`,
        R`A kite with no parallel sides`,
        R`A rhombus with side length 5`,
        R`An isosceles trapezoid with parallel sides of lengths 5 and 11 and legs of length 5`],
      answer: [0, 4],
      explain: R`A counterexample must satisfy the hypothesis (one pair of parallel sides, the other pair congruent) but not be a parallelogram. Both isosceles trapezoids do: their bases are parallel and unequal, and their legs are congruent, so they are not parallelograms. (An isosceles trapezoid with bases 4 and 8 and legs 5 exists: its height is $\sqrt{5^2-2^2}=\sqrt{21}$; for bases 5 and 11 the height is $\sqrt{5^2-3^2}=4$.)
        <br><i>Why the others fail:</i> the rectangle and the rhombus satisfy the hypothesis but are parallelograms, so they agree with the conjecture. The kite fails the hypothesis (no parallel sides), so it cannot be a counterexample.`
    },
    {
      id: 'GEO5-06', topic: 'GEO5', type: 'mc', diff: 2,
      stem: R`The following proof shows that opposite angles of a parallelogram are congruent. In parallelogram $ABCD$:
        <div class="work">1. $AB \parallel DC$ and $AD \parallel BC$ (definition of a parallelogram)<br>
        2. $m\angle A + m\angle B = 180^\circ$ (?)<br>
        3. $m\angle B + m\angle C = 180^\circ$ (same-side interior angles, $AB \parallel DC$)<br>
        4. $m\angle A + m\angle B = m\angle B + m\angle C$ (substitution)<br>
        5. $m\angle A = m\angle C$ (subtraction property of equality)</div>
        Which is the correct justification for step 2?`,
      figure: { type: 'svg', alt: R`Parallelogram ABCD. Arrowhead marks show AB parallel to DC (single arrowheads) and AD parallel to BC (double arrowheads).`, svg: R`<svg viewBox="0 0 300 215"><polygon points="50,170 215,170 265,50 100,50"/><polyline class="thin" points="126.5,175.1 132.5,170 126.5,164.9"/><polyline class="thin" points="176.5,55.1 182.5,50 176.5,44.9"/><polyline class="thin" points="77.4,117.5 75,110 68,113.6"/><polyline class="thin" points="79.7,112 77.3,104.5 70.3,108"/><polyline class="thin" points="242.4,117.5 240,110 233,113.6"/><polyline class="thin" points="244.7,112 242.3,104.5 235.3,108"/><text x="40" y="176" text-anchor="end">A</text><text x="225" y="176" text-anchor="start">B</text><text x="275" y="48" text-anchor="start">C</text><text x="90" y="48" text-anchor="end">D</text></svg>` },
      choices: [
        R`Same-side interior angles are supplementary when the lines cut by the transversal are parallel ($AD \parallel BC$, transversal $\overline{AB}$).`,
        R`Opposite angles of a parallelogram are congruent.`,
        R`The angles of a quadrilateral add to $360^\circ$.`,
        R`Alternate interior angles are congruent.`],
      answer: 0,
      explain: R`Angles $A$ and $B$ lie on the same side of transversal $\overline{AB}$ between the parallel lines $AD$ and $BC$, so they are same-side interior angles and are supplementary.
        <br><i>Common errors:</i> B assumes the conclusion of the proof. C is true but does not give $m\angle A + m\angle B = 180^\circ$ by itself. D applies a pair relationship that does not fit these two angles.`
    },
    {
      id: 'GEO5-07', topic: 'GEO5', type: 'mc', diff: 1,
      stem: R`A student begins an indirect proof (proof by contradiction) of the statement "A triangle has at most one obtuse angle." Which should be the first step?`,
      choices: [
        R`Assume that some triangle has two obtuse angles.`,
        R`Assume that every triangle has exactly one obtuse angle.`,
        R`Assume that a triangle has two acute angles.`,
        R`Assume that the angles of a triangle do not add to $180^\circ$.`],
      answer: 0,
      explain: R`An indirect proof begins by assuming the negation of what is to be proved. The negation of "at most one obtuse angle" is "at least two obtuse angles," so we assume a triangle with two obtuse angles. That leads to angle sum greater than $180^\circ$, a contradiction.
        <br><i>Common error:</i> assuming the opposite of a different statement (for example, that <i>every</i> triangle has an obtuse angle).`
    },
    {
      id: 'GEO5-08', topic: 'GEO5', type: 'mc', diff: 3, task: [2, 4],
      stem: R`A student writes this proof of the theorem "If two lines are cut by a transversal so that alternate interior angles are congruent, then the lines are parallel."
        <div class="work">Given: $\angle 1 \cong \angle 2$. Prove: $\ell \parallel m$.<br>
        Since $\ell \parallel m$, alternate interior angles are congruent, so $\angle 1 \cong \angle 2$. Therefore $\ell \parallel m$.</div>
        A classmate says, "Your proof is circular." Which reply best addresses the classmate's critique?`,
      figure: { type: 'svg', alt: R`Two horizontal lines l and m cut by a slanted transversal. The angle labeled 1 is between l and the transversal, below l and left of the transversal. The angle labeled 2 is between m and the transversal, above m and right of the transversal. They are alternate interior angles. The lines are not marked parallel.`, svg: R`<svg viewBox="0 0 300 215"><line class="b" x1="30" y1="70" x2="280" y2="70"/><line class="b" x1="30" y1="150" x2="280" y2="150"/><line class="a" x1="80" y1="190" x2="200" y2="30"/><text x="18" y="75" text-anchor="end">ℓ</text><text x="18" y="155" text-anchor="end">m</text><path class="thin" d="M148 70 A22 22 0 0 0 156.8 87.6"/><path class="thin" d="M132 150 A22 22 0 0 0 123.2 132.4"/><text class="up" x="140" y="100" text-anchor="end">1</text><text class="up" x="140" y="132" text-anchor="start">2</text><circle class="pt" cx="170" cy="70" r="3"/><circle class="pt" cx="110" cy="150" r="3"/></svg>` },
      choices: [
        R`"You're right: I began by assuming $\ell \parallel m$, which is what I need to prove. I should start from $\angle 1 \cong \angle 2$ and show that $\ell$ and $m$ cannot meet."`,
        R`"It isn't circular, because the theorem about alternate interior angles is well established."`,
        R`"It isn't circular, because my diagram shows the lines are parallel."`,
        R`"It isn't circular, because I stated the conclusion at the end of the proof rather than at the start."`],
      answer: 0,
      explain: R`The classmate's critique is correct. The student used "$\ell \parallel m$" as a premise and then concluded "$\ell \parallel m$." The known theorem goes in the other direction (parallel lines imply congruent alternate interior angles); the statement to be proved is its converse. A valid proof starts from $\angle 1 \cong \angle 2$ (for example, by contradiction: if $\ell$ and $m$ met, they would form a triangle with an exterior angle equal to a nonadjacent interior angle, which is impossible).
        <br><i>Why the others fail:</i> B, C, and D each dispute the critique without addressing that the argument assumes its own conclusion; a diagram and the order of sentences are not proof.`
    },
    {
      id: 'GEO5-09', topic: 'GEO5', type: 'num', diff: 2,
      stem: R`In triangle $ABC$, $M$ is the midpoint of $\overline{AB}$ and $N$ is the midpoint of $\overline{AC}$. If $MN = 3x + 1$ and $BC = 8x - 6$, what is $BC$?`,
      answer: 26, tol: 0,
      explain: R`By the Triangle Midsegment Theorem, the segment joining the midpoints of two sides is parallel to the third side and half as long, so $BC = 2\,MN$: $8x - 6 = 2(3x+1) = 6x + 2$, so $x = 4$. Then $BC = 8(4) - 6 = 26$ (and $MN = 13$).
        <br><i>Common errors:</i> setting $MN = 2\,BC$ (which gives a negative $x$), or reporting $MN = 13$.`
    },
    {
      id: 'GEO5-10', topic: 'GEO5', type: 'mc', diff: 2,
      stem: R`Consider the true statement, "If a quadrilateral is a parallelogram, then its diagonals bisect each other." Which statement is its <b>converse</b>?`,
      choices: [
        R`If the diagonals of a quadrilateral bisect each other, then the quadrilateral is a parallelogram.`,
        R`If a quadrilateral is not a parallelogram, then its diagonals do not bisect each other.`,
        R`If the diagonals of a quadrilateral do not bisect each other, then the quadrilateral is not a parallelogram.`,
        R`If a quadrilateral is a parallelogram, then its diagonals do not bisect each other.`],
      answer: 0,
      explain: R`The converse of "If $p$, then $q$" is "If $q$, then $p$," which is choice A. Choice B is the inverse (negate both parts), C is the contrapositive (swap and negate; it is logically equivalent to the original), and D negates only the conclusion.
        <br><i>Common error:</i> confusing the converse with the contrapositive, since both "switch" the parts.`
    },

    /* ================= GEO6: Trigonometry in triangles ================= */
    {
      id: 'GEO6-01', topic: 'GEO6', type: 'mc', diff: 1,
      stem: R`If $\sin 35^\circ = \cos\theta$ and $\theta$ is an acute angle, what is $\theta$?`,
      choices: [R`$55^\circ$`, R`$35^\circ$`, R`$145^\circ$`, R`$65^\circ$`],
      answer: 0,
      explain: R`The sine of an angle equals the cosine of its complement: $\sin x = \cos(90^\circ - x)$. So $\theta = 90^\circ - 35^\circ = 55^\circ$.
        <br><i>Common errors:</i> answering $35^\circ$ (assuming sine and cosine of the same angle agree) or $145^\circ = 180^\circ - 35^\circ$ (using the supplement).`
    },
    {
      id: 'GEO6-02', topic: 'GEO6', type: 'num', diff: 2, calc: true,
      stem: R`In right triangle $ABC$, $m\angle A = 28^\circ$ and the hypotenuse $AC = 15$. To the nearest tenth, what is $x = BC$?`,
      figure: { type: 'svg', alt: R`Right triangle ABC with the right angle at B. The angle at A is 28 degrees, the hypotenuse AC is labeled 15, and the side BC opposite angle A is labeled x.`, svg: R`<svg viewBox="0 0 300 200"><polygon points="30,165 241.9,165 241.9,52.3"/><polyline class="thin" points="231.9,165 231.9,155 241.9,155"/><path class="thin" d="M66 165 A36 36 0 0 0 61.8 148.1"/><text class="up" x="76" y="159" text-anchor="start">28°</text><text x="22" y="180" text-anchor="end">A</text><text x="249.9" y="180" text-anchor="start">B</text><text x="249.9" y="50.3" text-anchor="start">C</text><text class="up" x="124" y="100.7" text-anchor="end">15</text><text class="up" x="257.9" y="113.7" text-anchor="start"><tspan font-style="italic">x</tspan></text></svg>` },
      answer: 7.0, tol: 0.05,
      explain: R`Side $BC$ is opposite the $28^\circ$ angle and $AC$ is the hypotenuse, so $\sin 28^\circ = \dfrac{x}{15}$ and $x = 15\sin28^\circ \approx 7.04$, which is 7.0 to the nearest tenth.
        <br><i>Common error:</i> using cosine ($15\cos 28^\circ \approx 13.2$), which finds the adjacent side $AB$. Make sure the calculator is in degree mode.`
    },
    {
      id: 'GEO6-03', topic: 'GEO6', type: 'num', diff: 2, calc: true,
      stem: R`From a point on level ground 60 meters from the base of a building, the angle of elevation of the top of the building is $38^\circ$. The observer's eyes are 1.6 meters above the ground. To the nearest tenth of a meter, how tall is the building?`,
      answer: 48.5, tol: 0.05, unit: 'meters',
      explain: R`The height of the top above eye level is $60\tan 38^\circ \approx 46.88$ m. Adding the eye height gives $46.88 + 1.6 \approx 48.5$ m.
        <br><i>Common errors:</i> forgetting to add the 1.6 m (46.9), or using $60/\tan38^\circ \approx 76.8$.`
    },
    {
      id: 'GEO6-04', topic: 'GEO6', type: 'mc', diff: 2,
      stem: R`What is the exact value of $\sin 60^\circ\cos 30^\circ - \cos 60^\circ\sin 30^\circ$?`,
      choices: [R`$\dfrac{1}{2}$`, R`$\dfrac{3}{4}$`, R`$1$`, R`$\dfrac{\sqrt{3}}{2}$`],
      answer: 0,
      explain: R`$\sin60^\circ\cos30^\circ = \dfrac{\sqrt3}{2}\cdot\dfrac{\sqrt3}{2} = \dfrac34$ and $\cos60^\circ\sin30^\circ = \dfrac12\cdot\dfrac12 = \dfrac14$. The difference is $\dfrac34 - \dfrac14 = \dfrac12$. (This is $\sin(60^\circ - 30^\circ) = \sin 30^\circ$.)
        <br><i>Common errors:</i> dropping the second product ($\tfrac34$), adding the products instead of subtracting ($1$), or misremembering a single special-angle value.`
    },
    {
      id: 'GEO6-05', topic: 'GEO6', type: 'num', diff: 2, calc: true,
      stem: R`In triangle $ABC$, $m\angle A = 40^\circ$, $m\angle B = 65^\circ$, and $BC = 12$. To the nearest tenth, what is $b = AC$?`,
      figure: { type: 'svg', alt: R`Triangle ABC drawn to scale. Side BC, the bottom side, is labeled 12. The angle at B is 65 degrees and the angle at A is 40 degrees. The side AC, opposite angle B, is labeled b.`, svg: R`<svg viewBox="0 0 300 215"><polygon points="122.4,34.7 50,190 164,190"/><path class="thin" d="M78 190 A28 28 0 0 0 61.8 164.6"/><path class="thin" d="M113.1 54.7 A22 22 0 0 0 128.1 56"/><text class="up" x="90" y="184" text-anchor="start">65°</text><text class="up" x="124.4" y="100.7" text-anchor="middle">40°</text><text x="42" y="205" text-anchor="end">B</text><text x="172" y="205" text-anchor="start">C</text><text x="122.4" y="24.7" text-anchor="middle">A</text><text class="up" x="107" y="212" text-anchor="middle">12</text><text x="157.2" y="108.4" text-anchor="start">b</text></svg>` },
      answer: 16.9, tol: 0.05,
      explain: R`Side $BC$ is opposite $\angle A$, and side $AC$ is opposite $\angle B$. By the Law of Sines, $\dfrac{b}{\sin 65^\circ} = \dfrac{12}{\sin 40^\circ}$, so $b = \dfrac{12\sin65^\circ}{\sin40^\circ} \approx 16.9$.
        <br><i>Common error:</i> pairing a side with the wrong angle (for example $\dfrac{12\sin 40^\circ}{\sin 65^\circ} \approx 8.5$).`
    },
    {
      id: 'GEO6-06', topic: 'GEO6', type: 'num', diff: 2, calc: true,
      stem: R`In triangle $ABC$, $AB = 9$, $AC = 14$, and $m\angle A = 52^\circ$. To the nearest tenth, what is $x = BC$?`,
      figure: { type: 'svg', alt: R`Triangle ABC drawn to scale. Side AB is labeled 9, side AC is labeled 14, and the angle at A between them is 52 degrees. The third side BC is labeled x.`, svg: R`<svg viewBox="0 0 300 200"><polygon points="40,170 123.1,63.6 250,170"/><path class="thin" d="M70 170 A30 30 0 0 0 58.5 146.4"/><text class="up" x="82" y="162" text-anchor="start">52°</text><text x="32" y="185" text-anchor="end">A</text><text x="258" y="185" text-anchor="start">C</text><text x="119.1" y="53.6" text-anchor="middle">B</text><text class="up" x="69.6" y="112.8" text-anchor="end">9</text><text class="up" x="145" y="190" text-anchor="middle">14</text><text x="200.6" y="114.8" text-anchor="start">x</text></svg>` },
      answer: 11.0, tol: 0.05,
      explain: R`Two sides and the included angle are known, so use the Law of Cosines: $x^2 = 9^2 + 14^2 - 2(9)(14)\cos52^\circ \approx 277 - 155.1 = 121.9$, so $x \approx 11.0$.
        <br><i>Common errors:</i> forgetting to take the square root ($121.9$), or computing $\sqrt{9^2+14^2} \approx 16.6$ (Pythagorean theorem in a non-right triangle).`
    },
    {
      id: 'GEO6-07', topic: 'GEO6', type: 'mc', diff: 3, task: [15, 21],
      stem: R`In triangle $ABC$, $a = 7$, $b = 10$, and $m\angle A = 35^\circ$. A student solves for $\angle B$:
        <div class="work">$\dfrac{\sin B}{10} = \dfrac{\sin 35^\circ}{7} \Rightarrow \sin B \approx 0.819 \Rightarrow B \approx 55^\circ$. "So the triangle has $B = 55^\circ$ and $C = 90^\circ$."</div>
        Which statement best describes the student's work?`,
      choices: [
        R`The student overlooked a second solution: $B$ could also be about $125^\circ$, and $35^\circ + 125^\circ < 180^\circ$, so two different triangles fit the given information.`,
        R`The student should have used the Law of Cosines, because two sides are given.`,
        R`The work is complete, because the inverse sine always gives the only possible angle.`,
        R`There is no triangle, because $\sin B$ must be smaller than $\sin A$.`],
      answer: 0,
      explain: R`This is the ambiguous (SSA) case. Since $a < b$ and $b\sin A = 10\sin35^\circ \approx 5.74 < 7 = a$, there are two triangles. The equation $\sin B \approx 0.819$ has two solutions between $0^\circ$ and $180^\circ$: $B \approx 55^\circ$ and $B \approx 180^\circ - 55^\circ = 125^\circ$. Both work because $35^\circ + 125^\circ = 160^\circ < 180^\circ$. The student's arithmetic is right, but the work is incomplete.
        <br><i>Why the others fail:</i> the Law of Sines is legitimate here (a side-angle pair is known), inverse sine returns only the acute value, and nothing requires $\sin B < \sin A$.`
    },
    {
      id: 'GEO6-08', topic: 'GEO6', type: 'mc', diff: 2, task: [1, 2],
      stem: R`A teacher asks, "Why is $\sin 20^\circ = \cos 70^\circ$?" Which student explanation is valid?`,
      choices: [
        R`In a right triangle with acute angles $20^\circ$ and $70^\circ$, the leg opposite the $20^\circ$ angle is the leg adjacent to the $70^\circ$ angle, so both ratios equal (that leg) divided by the hypotenuse.`,
        R`The angles add to $90^\circ$, and sine and cosine are reciprocals of each other.`,
        R`A calculator shows both equal $0.342$, so they must be equal.`,
        R`For every angle $x$, $\sin x = \cos(x + 90^\circ)$.`],
      answer: 0, order: 'fixed',
      explain: R`Choice A explains the reason: the two acute angles of a right triangle are complementary, and each one's opposite side is the other's adjacent side, so $\sin$ of one equals $\cos$ of the other.
        <br><i>Why the others fail:</i> sine and cosine are not reciprocals (secant is the reciprocal of cosine). A calculator check confirms the value but does not explain it. D is false: $\cos(x + 90^\circ) = -\sin x$; the correct identity is $\sin x = \cos(90^\circ - x)$.`
    },
    {
      id: 'GEO6-09', topic: 'GEO6', type: 'multi', diff: 2, task: [17, 20],
      stem: R`A person 60 m from a building sights the top at an angle of elevation of $38^\circ$. Four students write expressions for the height $h$ of the top of the building above the person's eye level. Which students' work is correct? Select all that apply.
        <div class="work"><b>Ava:</b> $\tan 38^\circ = \dfrac{h}{60}$</div>
        <div class="work"><b>Ben:</b> $h = 60\tan 38^\circ$</div>
        <div class="work"><b>Cy:</b> $h = \dfrac{60}{\tan 38^\circ}$</div>
        <div class="work"><b>Dee:</b> $h = \dfrac{60\sin 38^\circ}{\cos 38^\circ}$</div>`,
      choices: [R`Ava`, R`Ben`, R`Cy`, R`Dee`],
      answer: [0, 1, 3], order: 'fixed',
      explain: R`The height is the side opposite the $38^\circ$ angle and 60 m is the side adjacent to it, so $\tan 38^\circ = \dfrac{h}{60}$. Ava's equation is correct, and Ben solves it correctly. Dee uses $\tan 38^\circ = \dfrac{\sin 38^\circ}{\cos 38^\circ}$, which gives the same value ($h \approx 46.9$ m). Cy divided instead of multiplied (that would be the horizontal distance if $h$ were 60 m).`
    },



    /* ================= GEO7: Circles ================= */
    {
      id: 'GEO7-01', topic: 'GEO7', type: 'mc', diff: 2,
      stem: R`A circular garden has a circumference of $18\pi$ meters. A path of uniform width 1 meter is built around the outside of the garden. What is the area, in square meters, of the path?`,
      choices: [R`$19\pi$`, R`$20\pi$`, R`$181\pi$`, R`$\pi$`],
      answer: 0,
      explain: R`The garden's radius is $r = \dfrac{18\pi}{2\pi} = 9$ m, so the outer edge of the path has radius 10 m. The path is the difference of two circular areas: $\pi(10^2) - \pi(9^2) = 100\pi - 81\pi = 19\pi$ m$^2$.
        <br><i>Common errors:</i> multiplying the outer circumference by the width, $2\pi(10)(1) = 20\pi$ (the path is a ring, not a rectangle of that length); adding the areas ($181\pi$); or computing $\pi\cdot1^2$ for the width alone.`
    },
    {
      id: 'GEO7-02', topic: 'GEO7', type: 'num', diff: 2, calc: true,
      stem: R`In the figure, the shaded sector of the circle with center $O$ has a central angle of $140^\circ$ and radius 9. To the nearest tenth, what is the length of arc $AB$?`,
      figure: { type: 'svg', alt: R`A circle with center O and a shaded sector bounded by radii OA and OB, where OA is horizontal and points right. The central angle AOB is labeled 140 degrees and the radius OA is labeled 9.`, svg: R`<svg viewBox="0 0 300 220"><circle class="m thin" cx="110" cy="120" r="90"/><path class="fa" d="M110 120 L200 120 A90 90 0 0 0 41.1 62.1 Z"/><path class="thin" d="M134 120 A24 24 0 0 0 91.6 104.6"/><text class="up" x="114" y="88" text-anchor="start">140°</text><circle class="pt" cx="110" cy="120" r="3"/><text x="100" y="138" text-anchor="end">O</text><text class="up" x="155" y="140" text-anchor="middle">9</text><text x="210" y="125" text-anchor="start">A</text><text x="33.1" y="56.1" text-anchor="end">B</text></svg>` },
      answer: 22.0, tol: 0.05,
      explain: R`Arc length is the fraction $\dfrac{140}{360}$ of the circumference: $\dfrac{140}{360}\cdot 2\pi(9) = \dfrac{7}{18}\cdot18\pi = 7\pi \approx 21.99$, which is 22.0 to the nearest tenth.
        <br><i>Common errors:</i> computing the sector area $\tfrac{7}{18}\pi(9^2) = 31.5\pi \approx 99.0$ instead of the arc length, or forgetting that the circumference uses $2\pi r$ (using $\pi r$ gives 11.0).`
    },
    {
      id: 'GEO7-03', topic: 'GEO7', type: 'mc', diff: 2,
      stem: R`A circular pizza with radius 9 inches is cut into 10 congruent slices. What is the area of one slice, in square inches, measured to the outer crust?`,
      choices: [R`$8.1\pi$`, R`$1.8\pi$`, R`$81\pi$`, R`$0.81\pi$`],
      answer: 0,
      explain: R`Each slice is a sector with $\dfrac{1}{10}$ of the circle's area: $\dfrac{1}{10}\cdot\pi(9)^2 = 8.1\pi$ in$^2$.
        <br><i>Common errors:</i> $1.8\pi$ is the arc length of the crust ($\tfrac1{10}\cdot 2\pi\cdot 9$), $81\pi$ is the whole pizza, and $0.81\pi$ divides by 100.`
    },
    {
      id: 'GEO7-04', topic: 'GEO7', type: 'mc', diff: 2,
      stem: R`In the figure, $O$ is the center of the circle. Inscribed angle $\angle ACB$ and central angle $\angle AOB$ both intercept minor arc $AB$, with $m\angle ACB = (2x+5)^\circ$ and $m\angle AOB = (5x-1)^\circ$. What is $m\angle ACB$?`,
      figure: { type: 'svg', alt: R`A circle with center O. Points A and B lie on the upper part of the circle and point C on the lower part. Chords CA and CB form the inscribed angle ACB, and dashed radii OA and OB form the central angle AOB. Both angles intercept the minor arc AB.`, svg: R`<svg viewBox="0 0 300 240"><circle cx="150" cy="120" r="90"/><line class="a" x1="119.2" y1="204.6" x2="109.1" y2="39.8"/><line class="a" x1="119.2" y1="204.6" x2="190.9" y2="39.8"/><line class="b dash" x1="150" y1="120" x2="109.1" y2="39.8"/><line class="b dash" x1="150" y1="120" x2="190.9" y2="39.8"/><circle class="pt" cx="150" cy="120" r="3"/><text x="144" y="138" text-anchor="end">O</text><text x="101.1" y="33.8" text-anchor="end">A</text><text x="198.9" y="33.8" text-anchor="start">B</text><text x="115.2" y="224.6" text-anchor="middle">C</text></svg>` },
      choices: [R`$27^\circ$`, R`$54^\circ$`, R`$11^\circ$`, R`$13.5^\circ$`],
      answer: 0,
      explain: R`An inscribed angle is half its intercepted arc, and the central angle equals the arc, so $m\angle AOB = 2\,m\angle ACB$: $5x - 1 = 2(2x+5)$. Then $5x - 1 = 4x + 10$ and $x = 11$. So $m\angle ACB = 2(11) + 5 = 27^\circ$ (and $m\angle AOB = 54^\circ$).
        <br><i>Common errors:</i> reporting the central angle ($54^\circ$), reporting $x = 11$, or halving once more ($13.5^\circ$).`
    },
    {
      id: 'GEO7-05', topic: 'GEO7', type: 'num', diff: 2,
      stem: R`In the figure, $\overline{PT}$ is tangent to the circle with center $O$ at point $T$. The radius is $OT = 5$ and $OP = 13$. What is $PT$?`,
      figure: { type: 'svg', alt: R`A circle with center O and radius OT = 5. Point P lies outside the circle with OP = 13 (dashed). Segment PT is tangent to the circle at T, and a right-angle mark at T shows OT is perpendicular to PT.`, svg: R`<svg viewBox="0 0 320 220"><circle cx="75" cy="115" r="50"/><line class="b" x1="75" y1="115" x2="94.2" y2="68.8"/><line class="a" x1="94.2" y1="68.8" x2="205" y2="115"/><line class="b dash" x1="75" y1="115" x2="205" y2="115"/><polyline class="thin" points="90.8,77.2 99.1,80.6 102.5,72.3"/><circle class="pt" cx="75" cy="115" r="3"/><text x="65" y="133" text-anchor="end">O</text><text x="90.2" y="58.8" text-anchor="middle">T</text><text x="215" y="120" text-anchor="start">P</text><text class="up" x="72.6" y="87.9" text-anchor="end">5</text><text class="up" x="140" y="135" text-anchor="middle">13</text></svg>` },
      answer: 12, tol: 0,
      explain: R`A tangent is perpendicular to the radius at the point of tangency, so $\triangle OTP$ has a right angle at $T$. Then $PT^2 = OP^2 - OT^2 = 169 - 25 = 144$, so $PT = 12$.
        <br><i>Common errors:</i> adding the squares ($\sqrt{194}$) or answering $13 - 5 = 8$.`
    },
    {
      id: 'GEO7-06', topic: 'GEO7', type: 'num', diff: 2,
      stem: R`In the figure, chords $\overline{AB}$ and $\overline{CD}$ intersect at $E$ inside the circle. If $AE = 6$, $EB = 4$, and $CE = 3$, what is $ED$?`,
      figure: { type: 'svg', alt: R`A circle with two chords, AB and CD, that cross at a point E inside the circle. On chord AB, AE is labeled 6 and EB is labeled 4. On chord CD, CE is labeled 3 and ED is labeled x.`, svg: R`<svg viewBox="0 0 300 240"><circle cx="150" cy="120" r="88"/><line class="a" x1="210.6" y1="56.2" x2="179.5" y2="202.9"/><line class="b" x1="236.3" y1="137" x2="73.5" y2="163.5"/><circle class="pt" cx="191.9" cy="144.2" r="3"/><text x="219.5" y="51.7" text-anchor="middle">A</text><text x="183.9" y="220.2" text-anchor="middle">B</text><text x="249.1" y="144.5" text-anchor="middle">C</text><text x="62.2" y="174.9" text-anchor="middle">D</text><text x="182.9" y="136.2" text-anchor="end">E</text><text class="up" x="187.5" y="97.7" text-anchor="middle">6</text><text class="up" x="199.8" y="184.6" text-anchor="middle">4</text><text class="up" x="213.9" y="130.4" text-anchor="middle">3</text><text class="up" x="129.2" y="174.6" text-anchor="middle"><tspan font-style="italic">x</tspan></text></svg>` },
      answer: 8, tol: 0,
      explain: R`For two chords intersecting inside a circle, the products of the segments are equal: $AE\cdot EB = CE\cdot ED$. So $6\cdot4 = 3\cdot ED$, giving $ED = 8$.
        <br><i>Common error:</i> setting up a proportion such as $\dfrac{AE}{EB} = \dfrac{CE}{ED}$ (which would give $ED = 2$); the chord relationship is a product, not a ratio.`
    },
    {
      id: 'GEO7-07', topic: 'GEO7', type: 'mc', diff: 2,
      stem: R`In the figure, $\overline{PA}$ and $\overline{PB}$ are tangent to the circle at $A$ and $B$, and $m\angle APB = 50^\circ$. What is the measure of minor arc $AB$?`,
      figure: { type: 'svg', alt: R`A circle with center O. From an external point P to the right, two tangent segments PA (to the upper part of the circle) and PB (to the lower part) are drawn. The angle APB at P is labeled 50 degrees.`, svg: R`<svg viewBox="0 0 320 220"><circle cx="90" cy="110" r="60"/><line class="a" x1="232" y1="110" x2="115.4" y2="55.6"/><line class="a" x1="232" y1="110" x2="115.4" y2="164.4"/><circle class="pt" cx="90" cy="110" r="3"/><text x="82" y="128" text-anchor="end">O</text><text x="109.4" y="45.6" text-anchor="end">A</text><text x="109.4" y="184.4" text-anchor="end">B</text><text x="242" y="115" text-anchor="start">P</text><path class="thin" d="M204.8 97.3 A30 30 0 0 0 204.8 122.7"/><text class="up" x="192" y="115" text-anchor="end">50°</text></svg>` },
      choices: [R`$130^\circ$`, R`$230^\circ$`, R`$100^\circ$`, R`$25^\circ$`],
      answer: 0,
      explain: R`The angle formed by two tangents is half the difference of the intercepted arcs: $50 = \tfrac12(\text{major} - \text{minor})$, and major $= 360 - $ minor. So $100 = 360 - 2\cdot\text{minor}$, giving minor $= 130^\circ$. (Equivalently, in quadrilateral $OAPB$ the angles at $A$ and $B$ are right angles, so the central angle $AOB$ is $180^\circ - 50^\circ = 130^\circ$.)
        <br><i>Common errors:</i> doubling as for an inscribed angle ($100^\circ$), giving the major arc ($230^\circ$), or halving ($25^\circ$).`
    },
    {
      id: 'GEO7-08', topic: 'GEO7', type: 'mc', diff: 2,
      stem: R`The endpoints of a diameter of a circle are $(2, -1)$ and $(8, 7)$. Which is an equation of the circle?`,
      choices: [R`$(x-5)^2 + (y-3)^2 = 25$`, R`$(x+5)^2 + (y+3)^2 = 25$`, R`$(x-5)^2 + (y-3)^2 = 10$`, R`$(x-5)^2 + (y-3)^2 = 100$`],
      answer: 0,
      explain: R`The center is the midpoint of the diameter: $\left(\dfrac{2+8}{2}, \dfrac{-1+7}{2}\right) = (5, 3)$. The diameter has length $\sqrt{6^2 + 8^2} = 10$, so the radius is 5 and $r^2 = 25$. The equation is $(x-5)^2 + (y-3)^2 = 25$.
        <br><i>Common errors:</i> sign errors in the center ($(x+5)^2 + (y+3)^2$), using the diameter for $r^2$ ($r^2 = 10$), or squaring the diameter (100).`
    },
    {
      id: 'GEO7-09', topic: 'GEO7', type: 'mc', diff: 2,
      stem: R`A circle has equation $x^2 + y^2 + 8x - 2y - 8 = 0$. What are the center and radius of the circle?`,
      choices: [R`Center $(-4, 1)$, radius 5`, R`Center $(4, -1)$, radius 5`, R`Center $(-4, 1)$, radius 25`, R`Center $(-4, 1)$, radius $2\sqrt{2}$`],
      answer: 0,
      explain: R`Complete the square in each variable: $(x^2 + 8x + 16) + (y^2 - 2y + 1) = 8 + 16 + 1$, so $(x+4)^2 + (y-1)^2 = 25$. The center is $(-4, 1)$ and the radius is $\sqrt{25} = 5$.
        <br><i>Common errors:</i> reading the center with the signs of the linear coefficients ($(4,-1)$), stopping at $r^2 = 25$ without taking the square root, or forgetting to add 16 and 1 to the right side ($r^2 = 8$, radius $2\sqrt2$).`
    },
    {
      id: 'GEO7-10', topic: 'GEO7', type: 'mc', diff: 2, task: [5],
      stem: R`A teacher asks four students to define a circle. Which student's definition is the most mathematically precise?`,
      choices: [
        R`Ana: "A circle is the set of all points in a plane that are the same distance from a given point."`,
        R`Ben: "A circle is the set of all points that are the same distance from a given point."`,
        R`Cy: "A circle is a round figure with no corners."`,
        R`Dee: "A circle is a closed curve whose points are all the same distance from each other."`],
      answer: 0,
      explain: R`The locus definition of a circle requires both the plane and the fixed distance from a center. Without "in a plane," Ben's definition also describes a sphere. Cy's is informal (an ellipse is also round with no corners). Dee's is wrong: the points of a circle are all the same distance from the <i>center</i>, not from each other.`
    },
    {
      id: 'GEO7-11', topic: 'GEO7', type: 'mc', diff: 2, task: [15],
      stem: R`In a circle, inscribed angle $\angle ABC$ intercepts an arc $AC$ that measures $80^\circ$. A student says, "So $m\angle ABC = 80^\circ$." Which response best identifies the student's misconception?`,
      choices: [
        R`The student is treating the inscribed angle like a central angle. An inscribed angle measures half its intercepted arc, so $m\angle ABC = 40^\circ$.`,
        R`The student should have doubled the arc, so $m\angle ABC = 160^\circ$.`,
        R`The student is correct, because an angle equals the arc it intercepts.`,
        R`The student should have subtracted from $180^\circ$, so $m\angle ABC = 100^\circ$.`],
      answer: 0,
      explain: R`A <i>central</i> angle equals its intercepted arc, while an <i>inscribed</i> angle is half of it: $\tfrac12(80^\circ) = 40^\circ$. The student applied the central-angle rule to an inscribed angle.
        <br><i>Why the others fail:</i> doubling and supplementing have no basis in the inscribed angle theorem.`
    },
    {
      id: 'GEO7-12', topic: 'GEO7', type: 'mc', diff: 3, task: [17],
      stem: R`To find the radius of the circle $x^2 + y^2 - 6x + 10y - 2 = 0$, a student writes:
        <div class="work">$(x^2 - 6x) + (y^2 + 10y) = 2$<br>
        $(x-3)^2 + (y+5)^2 = 2$<br>
        "The radius is $\sqrt{2}$."</div>
        Which statement best evaluates the student's work?`,
      choices: [
        R`The student did not add $9$ and $25$ to the right side when completing the squares. The equation is $(x-3)^2 + (y+5)^2 = 36$, so the radius is 6.`,
        R`The student found the wrong center; the center should be $(-3, 5)$.`,
        R`The student's work is correct.`,
        R`The student should have stopped at $r^2 = 36$; the radius is 36.`],
      answer: 0,
      explain: R`Completing the square adds $\left(\tfrac{-6}{2}\right)^2 = 9$ and $\left(\tfrac{10}{2}\right)^2 = 25$ to the left side, so the same amounts must be added to the right side: $2 + 9 + 25 = 36$. The circle is $(x-3)^2 + (y+5)^2 = 36$ with center $(3,-5)$ and radius 6. The student's center is correct, and the work looks tidy, but the radius is wrong.
        <br><i>Why the others fail:</i> B claims the center is wrong (it is right). C accepts the flawed algebra. D confuses $r^2$ with $r$.`
    },

    /* ================= GEO8: Coordinate geometry ================= */
    {
      id: 'GEO8-01', topic: 'GEO8', type: 'num', diff: 1,
      stem: R`What is the distance between the points $(-2, 3)$ and $(4, -5)$?`,
      answer: 10, tol: 0,
      explain: R`$d = \sqrt{(4-(-2))^2 + (-5-3)^2} = \sqrt{6^2 + (-8)^2} = \sqrt{36+64} = 10$.
        <br><i>Common errors:</i> subtracting the wrong signs ($4-2=2$), or forgetting the square root (100).`
    },
    {
      id: 'GEO8-02', topic: 'GEO8', type: 'mc', diff: 2,
      stem: R`Point $P$ lies on segment $\overline{AB}$ with $A(-4, 1)$ and $B(6, 11)$, so that $AP : PB = 2 : 3$. What are the coordinates of $P$?`,
      choices: [R`$(0, 5)$`, R`$(2, 7)$`, R`$(1, 6)$`, R`$(-2, 3)$`],
      answer: 0,
      explain: R`$P$ is $\dfrac{2}{2+3} = \dfrac25$ of the way from $A$ to $B$. The change from $A$ to $B$ is $(10, 10)$, so $P = (-4 + \tfrac25\cdot10,\ 1 + \tfrac25\cdot10) = (0, 5)$.
        <br><i>Common errors:</i> $(2, 7)$ uses the fraction $\tfrac35$ (the ratio reversed), $(1, 6)$ is the midpoint, and $(-2,3)$ uses $\tfrac15$.`
    },
    {
      id: 'GEO8-03', topic: 'GEO8', type: 'mc', diff: 2,
      stem: R`Quadrilateral $ABCD$ has vertices $A(0,0)$, $B(5,2)$, $C(7,7)$, and $D(2,5)$. Which is the most specific description of $ABCD$?`,
      figure: { type: 'plot', alt: R`Coordinate plane with quadrilateral ABCD: A(0,0), B(5,2), C(7,7), D(2,5). It leans to the right like a tilted diamond.`, segments: [[0, 0, 5, 2, { color: 'a' }], [5, 2, 7, 7, { color: 'a' }], [7, 7, 2, 5, { color: 'a' }], [2, 5, 0, 0, { color: 'a' }]], points: [{ x: 0, y: 0, label: "A", dx: -16, dy: 16 }, { x: 5, y: 2, label: "B", dx: 8, dy: 16 }, { x: 7, y: 7, label: "C", dx: 8, dy: -6 }, { x: 2, y: 5, label: "D", dx: -16, dy: -6 }], xr: [-2, 11], yr: [-1, 8], xstep: 1, ystep: 1 },
      choices: [R`A rhombus that is not a square`, R`A square`, R`A rectangle that is not a square`, R`A parallelogram that is neither a rhombus nor a rectangle`],
      answer: 0, order: 'fixed',
      explain: R`Slopes: $AB$ and $DC$ both have slope $\tfrac25$; $AD$ and $BC$ both have slope $\tfrac52$. Opposite sides are parallel, so $ABCD$ is a parallelogram. Side lengths: $AB = \sqrt{5^2+2^2} = \sqrt{29}$, $BC = \sqrt{2^2+5^2} = \sqrt{29}$, and the same for the other two sides, so all four sides are equal: a rhombus. The slopes of adjacent sides, $\tfrac25$ and $\tfrac52$, have product $1$, not $-1$, so the angles are not right angles: it is not a square (or rectangle).
        <br><i>Common error:</i> stopping at "all sides equal" and calling it a square, without checking for a right angle.`
    },
    {
      id: 'GEO8-04', topic: 'GEO8', type: 'num', diff: 2,
      stem: R`What is the area of the triangle with vertices $(-1, 2)$, $(5, -2)$, and $(3, 6)$?`,
      answer: 20, tol: 0,
      explain: R`Use the shoelace formula: $\dfrac12\left|(-1)(-2-6) + 5(6-2) + 3(2-(-2))\right| = \dfrac12\left|8 + 20 + 12\right| = 20$.
        <br>(Check by enclosing the triangle in the rectangle $-1\le x\le5$, $-2\le y\le6$, of area $6\cdot8=48$, and subtracting three right triangles of areas 12, 10, and 6: $48 - 28 = 20$.)
        <br><i>Common error:</i> omitting the factor $\tfrac12$ (40).`
    },
    {
      id: 'GEO8-05', topic: 'GEO8', type: 'mc', diff: 2, task: [8],
      stem: R`A teacher wants students to use coordinates to prove that the diagonals of every rectangle are congruent. Which placement of the rectangle in the coordinate plane is most useful for the proof?`,
      choices: [
        R`Vertices $(0,0)$, $(a,0)$, $(a,b)$, $(0,b)$ with $a, b > 0$`,
        R`Vertices $(0,0)$, $(4,0)$, $(4,3)$, $(0,3)$`,
        R`Vertices $(0,0)$, $(a,0)$, $(a,a)$, $(0,a)$ with $a > 0$`,
        R`Vertices $(0,0)$, $(a,0)$, $(a+b,c)$, $(b,c)$ with $a, c > 0$`],
      answer: 0,
      explain: R`Placing two sides on the axes makes the right angles automatic and uses variables $a$ and $b$ for arbitrary side lengths, so the proof covers all rectangles: $AC = \sqrt{a^2+b^2}$ and $BD = \sqrt{(-a)^2+b^2}$ are equal.
        <br><i>Why the others fail:</i> B uses specific numbers (it proves only one rectangle). C forces $a = b$, a square. D describes a general parallelogram, which is not necessarily a rectangle (and its diagonals need not be equal).`
    },
    {
      id: 'GEO8-06', topic: 'GEO8', type: 'mc', diff: 2, task: [15],
      stem: R`A student is asked for the slope of a line perpendicular to $2x + 3y = 6$. The student writes: "The slope of $2x+3y=6$ is $-\tfrac23$, so the perpendicular slope is the opposite, $\tfrac23$." Which statement best identifies the student's error?`,
      choices: [
        R`The student changed the sign but did not take the reciprocal; the perpendicular slope is $\tfrac32$.`,
        R`The student found the wrong slope for the given line; it is $\tfrac23$.`,
        R`The student took the reciprocal but did not change the sign; the perpendicular slope is $-\tfrac32$.`,
        R`The student's work is correct.`],
      answer: 0,
      explain: R`Solving for $y$: $y = -\tfrac23 x + 2$, so the slope $-\tfrac23$ is right. Perpendicular slopes are negative reciprocals: their product is $-1$. The negative reciprocal of $-\tfrac23$ is $\tfrac32$. The student's $\tfrac23$ gives a product of $-\tfrac49$, which is not $-1$ (the lines are neither parallel nor perpendicular).
        <br><i>Why the others fail:</i> B contradicts the correct slope, C describes the opposite error (and $-\tfrac32\cdot(-\tfrac23) = 1$, not $-1$, so $-\tfrac32$ is not perpendicular either), D accepts the flawed work.`
    },
    {
      id: 'GEO8-07', topic: 'GEO8', type: 'num', diff: 3,
      stem: R`Segment $\overline{PQ}$ has endpoints $P(-1, 1)$ and $Q(5, 4)$. A line perpendicular to $\overline{PQ}$ passes through the point $(1, 2)$. What is the $y$-intercept of this line?`,
      answer: 4, tol: 0,
      explain: R`The slope of $\overline{PQ}$ is $\dfrac{4-1}{5-(-1)} = \dfrac12$, so the perpendicular line has slope $-2$. Through $(1, 2)$: $y - 2 = -2(x-1)$, so $y = -2x + 4$. The $y$-intercept is 4.
        <br><i>Common errors:</i> using slope $2$ or $-\tfrac12$ (giving intercepts 0 or $\tfrac52$).`
    },
    {
      id: 'GEO8-08', topic: 'GEO8', type: 'mc', diff: 2,
      stem: R`Triangle $ABC$ has vertices $A(1, 1)$, $B(5, 3)$, and $C(3, -3)$. At which vertex is the right angle?`,
      figure: { type: 'plot', alt: R`Coordinate plane with triangle ABC: A(1,1), B(5,3), C(3,-3).`, segments: [[1, 1, 5, 3, { color: 'a' }], [5, 3, 3, -3, { color: 'a' }], [3, -3, 1, 1, { color: 'a' }]], points: [{ x: 1, y: 1, label: "A", dx: -16, dy: -4 }, { x: 5, y: 3, label: "B", dx: 8, dy: -4 }, { x: 3, y: -3, label: "C", dx: 8, dy: 4 }], xr: [-3, 9], yr: [-4, 4], xstep: 1, ystep: 1 },
      choices: [R`$A$`, R`$B$`, R`$C$`, R`The triangle has no right angle`],
      answer: 0,
      explain: R`Compare slopes: $AB$ has slope $\dfrac{3-1}{5-1} = \dfrac12$ and $AC$ has slope $\dfrac{-3-1}{3-1} = -2$. Since $\dfrac12\cdot(-2) = -1$, the sides $AB$ and $AC$ are perpendicular, so the right angle is at $A$. (Check with the Pythagorean theorem: $AB^2 = 20$, $AC^2 = 20$, $BC^2 = 40$.)
        <br><i>Common error:</i> picking the vertex that merely looks like a right angle. Always confirm with slopes or distances.`
    },



    /* ================= GEO9: Perimeter and area of polygons ================= */
    {
      id: 'GEO9-01', topic: 'GEO9', type: 'num', diff: 2,
      stem: R`The figure shows an L-shaped polygon in which all angles are right angles. Lengths are in centimeters. What is the area of the polygon, in square centimeters?`,
      figure: { type: 'svg', alt: R`A polygon shaped like an L (a 12 by 9 rectangle with a rectangular notch removed from the upper right corner). Bottom side 12, left side 9, top side 7, right side 5. All angles are right angles.`, svg: R`<svg viewBox="0 0 300 220"><polygon class="fb" points="45,190 249,190 249,105 164,105 164,37 45,37"/><text class="up" x="147" y="210" text-anchor="middle">12</text><text class="up" x="35" y="118.5" text-anchor="end">9</text><text class="up" x="104.5" y="29" text-anchor="middle">7</text><text class="up" x="259" y="152.5" text-anchor="start">5</text></svg>` },
      answer: 88, tol: 0, unit: 'cm²',
      explain: R`The notch removed from the upper right has width $12 - 7 = 5$ and height $9 - 5 = 4$. The area is the full $12\times9$ rectangle minus the notch: $108 - 20 = 88$ cm$^2$.
        <br><i>Common errors:</i> multiplying the two labeled lengths that seem to be the outer dimensions and forgetting the notch (108), or subtracting a $7\times5$ rectangle using the wrong pair of labels.`
    },
    {
      id: 'GEO9-02', topic: 'GEO9', type: 'mc', diff: 2,
      stem: R`The figure shows a pentagon made of a rectangle topped by an isosceles triangle. The base is 8, the walls are 5, and the peak is 3 above the top of the walls. What is the perimeter of the pentagon?`,
      figure: { type: 'svg', alt: R`A pentagon shaped like a house. The rectangular base has width 8 and the left wall has height 5. A triangular roof sits on top, with a dashed vertical segment showing that the peak is 3 units above the top of the walls, centered over the base. The two roof sides are equal.`, svg: R`<svg viewBox="0 0 300 215"><polygon points="45,190 237,190 237,70 141,-2 45,70"/><line class="dash thin" x1="141" y1="-2" x2="141" y2="70"/><text class="up" x="141" y="212" text-anchor="middle">8</text><text class="up" x="35" y="135" text-anchor="end">5</text><text class="up" x="151" y="39" text-anchor="start">3</text></svg>` },
      choices: [R`24`, R`26`, R`28`, R`31`],
      answer: 2, order: 'fixed',
      explain: R`Each roof side is the hypotenuse of a right triangle with legs $4$ (half the base) and $3$ (the peak height), so its length is $\sqrt{4^2+3^2} = 5$. The perimeter is $8 + 5 + 5 + 5 + 5 = 28$.
        <br><i>Common errors:</i> using 4 for each roof side (26), using 3 for each roof side (24), or adding the dashed height of 3 to the perimeter (31).`
    },
    {
      id: 'GEO9-03', topic: 'GEO9', type: 'num', diff: 2,
      stem: R`Each dimension of a $6 \times 10$ rectangle is increased by 50%. By what percent does the area of the rectangle increase?`,
      answer: 125, tol: 0, unit: 'percent',
      explain: R`The new rectangle is $9 \times 15$, with area 135, compared with the original area 60. The increase is $135 - 60 = 75$, and $\dfrac{75}{60} = 1.25 = 125\%$. (Equivalently, the area is multiplied by $1.5^2 = 2.25$.)
        <br><i>Common errors:</i> answering 50% (the linear increase) or 225% (the new area as a percent of the old, not the increase).`
    },
    {
      id: 'GEO9-04', topic: 'GEO9', type: 'mc', diff: 3,
      stem: R`A regular hexagon has side length 6. The dashed segments in the figure divide it into six triangles. What is the area of the hexagon?`,
      figure: { type: 'svg', alt: R`A regular hexagon with side length 6. Dashed segments join the center to each of the six vertices, dividing the hexagon into six triangles.`, svg: R`<svg viewBox="0 0 300 230"><polygon class="fb" points="245,115 197.5,32.7 102.5,32.7 55,115 102.5,197.3 197.5,197.3"/><line class="dash thin" x1="150" y1="115" x2="245" y2="115"/><line class="dash thin" x1="150" y1="115" x2="197.5" y2="32.7"/><line class="dash thin" x1="150" y1="115" x2="102.5" y2="32.7"/><line class="dash thin" x1="150" y1="115" x2="55" y2="115"/><line class="dash thin" x1="150" y1="115" x2="102.5" y2="197.3"/><line class="dash thin" x1="150" y1="115" x2="197.5" y2="197.3"/><circle class="pt" cx="150" cy="115" r="2.5"/><text class="up" x="235.2" y="65.9" text-anchor="start">6</text></svg>` },
      choices: [R`$54\sqrt{3}$`, R`$9\sqrt{3}$`, R`$108\sqrt{3}$`, R`$54$`],
      answer: 0,
      explain: R`Each of the six triangles has two sides that are radii of the circumscribed circle and a side of length 6; the central angle is $360^\circ/6 = 60^\circ$, so each triangle is equilateral with side 6. Its area is $\dfrac{\sqrt3}{4}\cdot6^2 = 9\sqrt3$, so the hexagon has area $6\cdot9\sqrt3 = 54\sqrt3$.
        <br><i>Common errors:</i> stopping at one triangle ($9\sqrt3$), using $\tfrac{\sqrt3}{2}s^2$ for a triangle ($108\sqrt3$), or taking the apothem to be 3 ($54$).`
    },
    {
      id: 'GEO9-05', topic: 'GEO9', type: 'mc', diff: 2, task: [15],
      stem: R`A student says, "If I double the side length of a square, the perimeter doubles, so the area doubles too." Which response best addresses the student's thinking?`,
      choices: [
        R`Perimeter is a length, so it doubles, but area is measured in square units and is multiplied by $2^2 = 4$. For example, a $3\times3$ square has area 9, and a $6\times6$ square has area 36.`,
        R`The student is correct: doubling the side doubles every measurement of the square.`,
        R`Area triples when the side length doubles, because the square has two dimensions plus the perimeter.`,
        R`Area doubles only for squares whose side lengths are even numbers.`],
      answer: 0,
      explain: R`If every length is multiplied by $k$, perimeters (lengths) are multiplied by $k$ and areas by $k^2$. With $k=2$, the area is multiplied by 4. A numerical example such as $3\times3 \to 6\times6$ (area $9 \to 36$) makes the point concrete.
        <br><i>Why the others fail:</i> B is the misconception. C and D are unfounded.`
    },
    {
      id: 'GEO9-06', topic: 'GEO9', type: 'multi', diff: 2, task: [17, 20],
      stem: R`The figure shows an isosceles trapezoid with bases 12 and 8 and height 6. Four students find its area. Which students' methods are valid? Select all that apply.
        <div class="work"><b>Ava:</b> Rectangle $8\times6 = 48$, plus two triangles each with base 2 and height 6, $2\cdot\tfrac12(2)(6) = 12$; total 60.</div>
        <div class="work"><b>Ben:</b> $\dfrac{12+8}{2}\cdot 6 = 60$.</div>
        <div class="work"><b>Cy:</b> $12\cdot6 - \tfrac12(8)(6) = 72 - 24 = 48$.</div>
        <div class="work"><b>Dee:</b> Rectangle $12\times6 = 72$, minus two triangles each with base 2 and height 6, $72 - 12 = 60$.</div>`,
      figure: { type: 'svg', alt: R`An isosceles trapezoid with bottom base 12 and top base 8, centered over the bottom base. A dashed vertical segment from the top left vertex to the bottom base is perpendicular to the base and has length 6.`, svg: R`<svg viewBox="0 0 300 190"><polygon class="fa" points="30,155 270,155 230,35 70,35"/><line class="dash thin" x1="70" y1="35" x2="70" y2="155"/><polyline class="thin" points="70,146 79,146 79,155"/><text class="up" x="150" y="177" text-anchor="middle">12</text><text class="up" x="150" y="27" text-anchor="middle">8</text><text class="up" x="78" y="100" text-anchor="start">6</text></svg>` },
      choices: [R`Ava`, R`Ben`, R`Cy`, R`Dee`],
      answer: [0, 1, 3], order: 'fixed',
      explain: R`Ava decomposes the trapezoid into a central rectangle and two right triangles (each with base $\tfrac{12-8}{2}=2$). Ben uses the trapezoid formula. Dee subtracts the two corner triangles from the enclosing $12\times6$ rectangle. All give 60.
        <br>Cy subtracts a triangle with base 8, which is not a piece of the figure that needs to be removed, so the method is invalid (and 48 is the area of the inner rectangle only).`
    },
    {
      id: 'GEO9-07', topic: 'GEO9', type: 'num', diff: 2,
      stem: R`A triangle has side lengths 13, 14, and 15. What is its area?`,
      answer: 84, tol: 0,
      explain: R`Use Heron's formula with semiperimeter $s = \dfrac{13+14+15}{2} = 21$: $A = \sqrt{21\cdot(21-13)(21-14)(21-15)} = \sqrt{21\cdot8\cdot7\cdot6} = \sqrt{7056} = 84$.
        <br>(Check: the altitude to the side of length 14 is 12, and $\tfrac12\cdot14\cdot12 = 84$.)
        <br><i>Common error:</i> using $\tfrac12\cdot 13\cdot 14 = 91$, which treats two sides as perpendicular.`
    },

    /* ================= GEO10: Solids ================= */
    {
      id: 'GEO10-01', topic: 'GEO10', type: 'num', diff: 2, calc: true,
      stem: R`A right circular cone has radius 6 and height 8, as shown. To the nearest tenth, what is its total surface area (including the base)?`,
      figure: { type: 'svg', alt: R`A right circular cone. A dashed segment from the apex straight down to the center of the circular base is labeled 8, and a dashed radius of the base is labeled 6, with a right-angle mark between them.`, svg: R`<svg viewBox="0 0 300 230"><line x1="150" y1="69" x2="78" y2="165"/><line x1="150" y1="69" x2="222" y2="165"/><path d="M78 165 A72 28 0 0 0 222 165"/><path class="dash thin" d="M78 165 A72 28 0 0 1 222 165"/><line class="dash thin" x1="150" y1="69" x2="150" y2="165"/><line class="dash thin" x1="150" y1="165" x2="222" y2="165"/><polyline class="thin" points="150,156 159,156 159,165"/><text class="up" x="140" y="122" text-anchor="end">8</text><text class="up" x="186" y="181" text-anchor="middle">6</text></svg>` },
      answer: 301.6, tol: 0.05,
      explain: R`The slant height is $\ell = \sqrt{6^2 + 8^2} = 10$. Total surface area $= \pi r^2 + \pi r\ell = 36\pi + 60\pi = 96\pi \approx 301.6$.
        <br><i>Common errors:</i> using the height instead of the slant height in the lateral area ($\pi\cdot6\cdot8 + 36\pi = 84\pi \approx 263.9$), or leaving out the base ($60\pi \approx 188.5$).`
    },
    {
      id: 'GEO10-02', topic: 'GEO10', type: 'mc', diff: 2,
      stem: R`The radius of a sphere is tripled. Which statement describes the effect on the sphere's surface area and volume?`,
      choices: [R`The surface area is multiplied by 9 and the volume by 27.`, R`The surface area is multiplied by 3 and the volume by 9.`, R`The surface area is multiplied by 6 and the volume by 9.`, R`The surface area is multiplied by 9 and the volume by 9.`],
      answer: 0,
      explain: R`Surface area is proportional to $r^2$ (from $4\pi r^2$), so it is multiplied by $3^2 = 9$. Volume is proportional to $r^3$ (from $\tfrac43\pi r^3$), so it is multiplied by $3^3 = 27$.
        <br><i>Common errors:</i> scaling every quantity by the same factor, or using one power too few for each.`
    },
    {
      id: 'GEO10-03', topic: 'GEO10', type: 'multi', diff: 3,
      stem: R`A plane slices through a cube. Which of the following shapes can be the cross section? Select all that apply.`,
      choices: [R`An equilateral triangle`, R`A regular hexagon`, R`A circle`, R`A rectangle that is not a square`, R`A heptagon`],
      answer: [0, 1, 3],
      explain: R`Cutting off a corner with a plane through three vertices adjacent to one vertex gives an equilateral triangle. A plane through the center perpendicular to a space diagonal cuts all six faces in equal segments, giving a regular hexagon. A plane through two opposite edges gives a rectangle that is not a square.
        <br>A cross section of a cube is a polygon with at most one side per face, so it has at most 6 sides (no heptagon), and its sides are straight (no circle).`
    },
    {
      id: 'GEO10-04', topic: 'GEO10', type: 'mc', diff: 2,
      stem: R`The right triangle shown has legs of length 3 and 4. It is rotated $360^\circ$ about the dashed axis, which contains the leg of length 4. What is the volume of the solid generated?`,
      figure: { type: 'svg', alt: R`A right triangle with a vertical leg of length 4 and a horizontal leg of length 3 meeting at a right angle at the bottom left. A dashed vertical line (labeled axis) runs along the length-4 leg and extends past both ends; the triangle will be rotated about this axis.`, svg: R`<svg viewBox="0 0 300 230"><line class="m dash" x1="90" y1="25" x2="90" y2="210"/><polygon class="fa" points="90,185 90,65 180,185"/><text class="up" x="135" y="205" text-anchor="middle">3</text><text class="up" x="80" y="130" text-anchor="end">4</text><text x="98" y="28" text-anchor="start">axis</text></svg>` },
      choices: [R`$12\pi$`, R`$16\pi$`, R`$36\pi$`, R`$48\pi$`],
      answer: 0,
      explain: R`Rotating the triangle about the leg of length 4 forms a cone with height 4 and radius 3. Its volume is $\tfrac13\pi r^2h = \tfrac13\pi(3^2)(4) = 12\pi$.
        <br><i>Common errors:</i> swapping radius and height ($\tfrac13\pi\cdot16\cdot3 = 16\pi$), forgetting the factor $\tfrac13$ ($36\pi$), or using a cylinder with a different radius ($48\pi$).`
    },
    {
      id: 'GEO10-05', topic: 'GEO10', type: 'num', diff: 3,
      stem: R`The net shown folds into a square pyramid. The square has side length 6, and the altitude of each triangular face (its slant height) is 5. What is the volume of the pyramid?`,
      figure: { type: 'svg', alt: R`A net made of a square in the center with an isosceles triangle attached to each of its four sides, forming a cross shape. The square has side length 6. In the top triangle a dashed segment from the outer vertex perpendicular to the square is labeled 5.`, svg: R`<svg viewBox="0 0 300 300"><polygon class="fb" points="108,108 192,108 192,192 108,192"/><polygon points="108,108 192,108 150,38"/><polygon points="192,108 192,192 262,150"/><polygon points="192,192 108,192 150,262"/><polygon points="108,192 108,108 38,150"/><line class="dash thin" x1="150" y1="38" x2="150" y2="108"/><polyline class="thin" points="150,100 158,100 158,108"/><text class="up" x="157" y="92" text-anchor="start">5</text><text class="up" x="150" y="155" text-anchor="middle">6</text></svg>` },
      answer: 48, tol: 0,
      explain: R`The slant height 5 is the hypotenuse of a right triangle whose legs are the pyramid's height $h$ and half the base edge, 3. So $h = \sqrt{5^2 - 3^2} = 4$. The volume is $\tfrac13 Bh = \tfrac13(6^2)(4) = 48$.
        <br><i>Common errors:</i> using the slant height as the height ($\tfrac13\cdot36\cdot5 = 60$), or leaving out the factor $\tfrac13$ (144).`
    },
    {
      id: 'GEO10-06', topic: 'GEO10', type: 'mc', diff: 2, task: [15, 19],
      stem: R`A student says, "If I double both the radius and the height of a cylinder, the volume doubles because everything is twice as big." Which response best addresses the student's thinking?`,
      choices: [
        R`Volume depends on the radius squared times the height, so the volume is multiplied by $2^2\cdot2 = 8$.`,
        R`The student is correct: doubling all the dimensions doubles the volume.`,
        R`The volume is multiplied by 4, because the radius is squared.`,
        R`The volume is multiplied by 6, because two dimensions are doubled and the formula has three factors.`],
      answer: 0,
      explain: R`$V = \pi r^2 h$. Replacing $r$ by $2r$ and $h$ by $2h$ gives $\pi(2r)^2(2h) = 8\pi r^2h$. When all linear dimensions of a solid are scaled by $k$, the volume is multiplied by $k^3$.
        <br><i>Why the others fail:</i> B is the misconception being probed. C forgets that the height also doubled. D has no basis in the formula.`
    },
    {
      id: 'GEO10-07', topic: 'GEO10', type: 'mc', diff: 2, task: [12, 13],
      stem: R`A teacher wants students to see why the volume of a cone is one-third the volume of a cylinder with the same base and height. Which demonstration best shows this?`,
      choices: [
        R`Fill a cone with sand and pour it into a cylinder that has the same base and the same height; it takes exactly three cones of sand to fill the cylinder.`,
        R`Fill a cone and a cylinder with different heights and different radii, and compare how much sand each holds.`,
        R`Draw a cone inside a cylinder and note that the cone takes up about one third of the picture.`,
        R`Cut a cylinder in half; each half is a cone with one-third of the volume.`],
      answer: 0,
      explain: R`The physical demonstration works because the two solids have congruent bases and equal heights, so the comparison isolates the factor of $\tfrac13$. It also connects to the formulas $V=\pi r^2h$ and $V=\tfrac13\pi r^2h$.
        <br><i>Why the others fail:</i> B changes both base and height, so the ratio is not $\tfrac13$. C is a visual impression, not a comparison of volumes. D is false: halves of a cylinder are not cones.`
    },
    {
      id: 'GEO10-08', topic: 'GEO10', type: 'num', diff: 2,
      stem: R`A solid metal sphere of radius 3 cm is melted and recast into a right circular cone with base radius 3 cm. What is the height of the cone, in centimeters?`,
      answer: 12, tol: 0, unit: 'cm',
      explain: R`The sphere's volume is $\tfrac43\pi(3)^3 = 36\pi$ cm$^3$. The cone's volume is $\tfrac13\pi(3)^2h = 3\pi h$. Setting $3\pi h = 36\pi$ gives $h = 12$.
        <br><i>Common errors:</i> forgetting the $\tfrac13$ in the cone volume ($h=4$), or using the sphere's surface area formula.`
    },
    {
      id: 'GEO10-09', topic: 'GEO10', type: 'num', diff: 1,
      stem: R`A rectangular prism has edge lengths 3, 4, and 5. What is its surface area?`,
      answer: 94, tol: 0,
      explain: R`The prism has three pairs of congruent faces: $3\cdot4 = 12$, $3\cdot5 = 15$, and $4\cdot5 = 20$. The surface area is $2(12+15+20) = 94$.
        <br><i>Common errors:</i> giving the volume (60) or adding each face type only once (47).`
    },
    {
      id: 'GEO10-10', topic: 'GEO10', type: 'mc', diff: 2, task: [17, 21],
      stem: R`To find the total surface area of a closed cylinder with radius 3 and height 5, a student writes: "The circumference is $2\pi(3) = 6\pi$, and $6\pi\cdot5 = 30\pi$. So the surface area is $30\pi$." Which statement best evaluates the student's work?`,
      choices: [
        R`The calculation is correct but incomplete: $30\pi$ is only the lateral area. Adding the two bases, $2\pi(3^2) = 18\pi$, gives a total of $48\pi$.`,
        R`The student is correct: the surface area is $30\pi$.`,
        R`The student should have used $\pi r^2 h = 45\pi$ for the surface area.`,
        R`The student should have added only one base, giving $39\pi$.`],
      answer: 0,
      explain: R`Unrolled, the side of a cylinder is a rectangle with width equal to the circumference and height 5, so the lateral area is $30\pi$. A closed cylinder also has two circular bases with total area $2\pi r^2 = 18\pi$, so the total is $48\pi$. The student's arithmetic is right, which makes the work look valid, but it answers a different question.
        <br><i>Why the others fail:</i> $\pi r^2h = 45\pi$ is the volume. A closed cylinder has two bases, not one.`
    }
  );
})();
