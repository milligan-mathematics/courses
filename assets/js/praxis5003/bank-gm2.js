/* Praxis 5003 bank, pass 2: Geometry and Measurement (GM1-GM6), 14 more original items (GM1-07 to GM6-10), bringing
   GM to its target of 50 with pass 1 (GM5 stays at 6). Format and rules: ../praxis-5003-kit/SPEC-5003.md and bank-example.js.
   Keys recomputed in checks-gm2.py; the raw-SVG figures were drawn to scale by gen_svg_gm2.py and checks-gm2.py
   measures them again from this file. */
(function () {
  var R = String.raw;
  PXD.bank.push(

    /* ================= GM1  Lines, rays, segments, and angles ================= */
    {
      id: 'GM1-07', topic: 'GM1', type: 'multi', diff: 1,
      stem: R`Which TWO of these angle measures describe obtuse angles?`,
      choices: [R`$135^\circ$`, R`$89^\circ$`, R`$180^\circ$`, R`$92^\circ$`, R`$90^\circ$`], answer: [0, 3],
      explain: R`An obtuse angle is greater than $90^\circ$ and less than $180^\circ$. Only $135^\circ$ and $92^\circ$ fit. An angle of $89^\circ$ is acute (less than $90^\circ$), $90^\circ$ is a right angle, and $180^\circ$ is a straight angle.
        <br><i>Common errors:</i> counting $90^\circ$ or $180^\circ$ as obtuse because they feel "big" or "at least as wide as a square corner," and forgetting that both ends of the range are left out.`
    },
    {
      id: 'GM1-08', topic: 'GM1', type: 'mc', diff: 2, task: [2],
      stem: R`A student claims, "Whenever two lines cross, they are perpendicular." Which description is a counterexample to the student's claim?`,
      choices: [
        R`Two segments that share one endpoint and form an angle of $90^\circ$.`,
        R`Two lines in the same plane that never cross, no matter how far they are extended.`,
        R`Two lines that cross and form four angles that each measure $90^\circ$.`,
        R`Two lines that cross and form angles of $60^\circ$, $120^\circ$, $60^\circ$, and $120^\circ$.`
      ], answer: 3,
      explain: R`A counterexample must do what the claim says cannot happen: here, two lines that do cross but are not perpendicular. Lines that cross at angles of $60^\circ$ and $120^\circ$ meet at a point, and none of their angles is $90^\circ$, so they are not perpendicular. (The four angles also add to $360^\circ$, as angles around a point do.)
        <br><i>Common errors:</i> the lines that form four right angles agree with the claim, so they cannot disprove it. Lines that never cross do not test the claim at all (they are parallel), and two segments that make a right angle are not lines that cross.`
    },

    /* ================= GM2  Classifying and composing shapes ================= */
    {
      id: 'GM2-07', topic: 'GM2', type: 'num', diff: 2,
      stem: R`How many edges does a pyramid with a hexagonal base have?`,
      answer: 12, tol: 0, unit: 'edges',
      explain: R`The base is a hexagon, which has 6 sides, so the base contributes 6 edges. Each of the 6 corners of the base is joined to the top point by one more edge: 6 more. In all, $6 + 6 = 12$ edges. (Check: the pyramid has 7 faces and 7 vertices, and $7 - 12 + 7 = 2$.)
        <br><i>Common errors:</i> $6$ counts only the edges of the base, $7$ is the number of faces (or of vertices), and $18$ is the count for a hexagonal prism ($6 + 6 + 6$).`
    },
    {
      id: 'GM2-08', topic: 'GM2', type: 'multi', diff: 2,
      stem: R`Each choice gives the three angle measures of a triangle. Which TWO triangles are both isosceles and obtuse?`,
      choices: [R`$60^\circ$, $60^\circ$, $60^\circ$`, R`$100^\circ$, $40^\circ$, $40^\circ$`, R`$90^\circ$, $45^\circ$, $45^\circ$`, R`$100^\circ$, $50^\circ$, $30^\circ$`, R`$120^\circ$, $30^\circ$, $30^\circ$`], answer: [1, 4],
      explain: R`A triangle is isosceles when two of its angles are equal (the sides opposite equal angles are equal), and obtuse when one angle is greater than $90^\circ$. The triangles with $100^\circ, 40^\circ, 40^\circ$ and $120^\circ, 30^\circ, 30^\circ$ each have a pair of equal angles and an angle over $90^\circ$ (and each set adds to $180^\circ$).
        <br><i>Common errors:</i> the $60^\circ$ triangle is equilateral, with no obtuse angle, and the $90^\circ, 45^\circ, 45^\circ$ triangle is isosceles but right, not obtuse. The $100^\circ, 50^\circ, 30^\circ$ triangle is obtuse but has three different angles, so no two sides are equal.`
    },

    /* ================= GM3  Nets, surface area, and volume ================= */
    {
      id: 'GM3-07', topic: 'GM3', type: 'mc', diff: 2,
      stem: R`The net shown folds into a rectangular prism (a box). Which face is opposite face $A$?`,
      figure: {
        type: 'svg', alt: 'A net of six rectangles, drawn to scale. Four rectangles in a row are labeled A, B, C, and D from left to right; A and C are narrow and B and D are wider. Rectangle E is attached to the top edge of B and rectangle F to the bottom edge of B. Rectangle A is shaded orange.',
        svg: R`<svg viewBox="0 0 240 170"><polygon class="fa" points="20,60 60,60 60,110 20,110"/><polygon class="fb" points="60,60 120,60 120,110 60,110"/><polygon class="fb" points="120,60 160,60 160,110 120,110"/><polygon class="fb" points="160,60 220,60 220,110 160,110"/><polygon class="fb" points="60,20 120,20 120,60 60,60"/><polygon class="fb" points="60,110 120,110 120,150 60,150"/><text class="up" x="40" y="90.5" text-anchor="middle">A</text><text class="up" x="90" y="90.5" text-anchor="middle">B</text><text class="up" x="140" y="90.5" text-anchor="middle">C</text><text class="up" x="190" y="90.5" text-anchor="middle">D</text><text class="up" x="90" y="45.5" text-anchor="middle">E</text><text class="up" x="90" y="135.5" text-anchor="middle">F</text></svg>`
      },
      choices: [R`Face $C$`, R`Face $B$`, R`Face $D$`, R`Face $E$`], answer: 0,
      explain: R`Fold the row $A$, $B$, $C$, $D$ into a loop around the box. $A$ touches $B$, $B$ touches $C$, $C$ touches $D$, and $D$ wraps around to touch $A$. Faces $E$ and $F$ become the top and bottom, which also touch $A$. That leaves $C$ as the face directly across from $A$. (Check: opposite faces of a box are the same size, and $A$ and $C$ are both narrow.)
        <br><i>Common errors:</i> choosing $D$ because it is at the far end of the row from $A$ (it is actually next to $A$ once the row wraps around), choosing $B$ because it is next to $A$ in the picture, and choosing $E$ because it sticks out from the row.`
    },
    {
      id: 'GM3-08', topic: 'GM3', type: 'num', diff: 2,
      stem: R`The figure shows the net of a triangular prism. Each triangle is a right triangle. What is the surface area of the prism, in square centimeters?`,
      figure: {
        type: 'svg', alt: 'A net of a triangular prism, drawn to scale. Three rectangles in a row, each 6 cm tall, are 3 cm, 4 cm, and 5 cm wide from left to right. A right triangle is attached above the middle rectangle and an identical right triangle below it. The right angle of each triangle is at the left end of the middle rectangle, and the vertical leg of the upper triangle is labeled 3 cm.',
        svg: R`<svg viewBox="0 0 290 250"><polygon class="fb" points="20,70 74,70 74,178 20,178"/><polygon class="fb" points="74,70 146,70 146,178 74,178"/><polygon class="fb" points="146,70 236,70 236,178 146,178"/><polygon class="fa" points="74,70 146,70 74,16"/><polygon class="fa" points="74,178 146,178 74,232"/><polyline class="thin" points="83,70 83,61 74,61"/><polyline class="thin" points="83,178 83,187 74,187"/><text class="up" x="68" y="48" text-anchor="end">3 cm</text><text class="up" x="47" y="168" text-anchor="middle">3 cm</text><text class="up" x="110" y="168" text-anchor="middle">4 cm</text><text class="up" x="191" y="168" text-anchor="middle">5 cm</text><text class="up" x="242" y="129" text-anchor="start">6 cm</text></svg>`
      },
      answer: 84, tol: 0, unit: 'square centimeters',
      explain: R`The surface area is the sum of the areas of all five faces. The rectangles are $3 \times 6 = 18$, $4 \times 6 = 24$, and $5 \times 6 = 30$, which total $72$. Each triangle has legs 3 and 4, so its area is $\frac{1}{2} \times 3 \times 4 = 6$, and the two triangles give $12$. Altogether: $72 + 12 = 84$.
        <br><i>Common errors:</i> $72$ leaves out the two triangles, $78$ counts only one of them, and $36$ is the volume in cubic centimeters ($6 \times 6$), not a surface area.`
    },
    {
      id: 'GM3-09', topic: 'GM3', type: 'mc', diff: 3,
      stem: R`A box in the shape of a rectangular prism is 3 inches long, 2 inches wide, and $1\frac{1}{2}$ inches tall. How many cubes with edges of $\frac{1}{2}$ inch are needed to fill the box exactly?`,
      choices: ['9', '18', '36', '72'], answer: 3, order: 'fixed',
      explain: R`Count how many small cubes fit along each edge: $3 \div \frac{1}{2} = 6$ along the length, $2 \div \frac{1}{2} = 4$ across, and $1\frac{1}{2} \div \frac{1}{2} = 3$ up. That gives $6 \times 4 \times 3 = 72$ cubes. (Check: the box has volume $3 \times 2 \times 1\frac{1}{2} = 9$ cubic inches, and each small cube has volume $\frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{8}$ cubic inch, and $9 \div \frac{1}{8} = 72$.)
        <br><i>Common errors:</i> $9$ is the volume in cubic inches, which ignores the size of the small cubes. $18$ divides the volume by $\frac{1}{2}$ as if each small cube had volume $\frac{1}{2}$, and $36$ divides by $\frac{1}{4}$, the area of one face of a small cube.`
    },

    /* ================= GM4  Perimeter and area; how they change ================= */
    {
      id: 'GM4-07', topic: 'GM4', type: 'mc', diff: 2,
      stem: R`A tabletop has the shape of the trapezoid shown. What is the area of the tabletop, in square centimeters?`,
      figure: {
        type: 'svg', alt: 'A trapezoid drawn to scale with a horizontal bottom base of 14 cm and a shorter parallel top base of 8 cm. The two slanted sides are each labeled 5 cm. A dashed segment from the top left vertex straight down to the bottom base is marked with a right angle and labeled 4 cm.',
        svg: R`<svg viewBox="0 0 290 116"><polygon class="fb" points="32,88 256,88 208,24 80,24"/><line class="dash thin" x1="80" y1="24" x2="80" y2="88"/><polyline class="thin" points="80,79 89,79 89,88"/><text class="up" x="144" y="16" text-anchor="middle">8 cm</text><text class="up" x="144" y="108" text-anchor="middle">14 cm</text><text class="up" x="86" y="62" text-anchor="start">4 cm</text><text class="up" x="46" y="60" text-anchor="end">5 cm</text><text class="up" x="244" y="60" text-anchor="start">5 cm</text></svg>`
      },
      choices: [R`44`, R`88`, R`32`, R`55`], answer: 0,
      explain: R`The area of a trapezoid is $\frac{1}{2} \times (\text{sum of the parallel sides}) \times \text{height}$. The parallel sides are 14 and 8, and the height is the dashed segment, which is perpendicular to them: $\frac{1}{2} \times (14 + 8) \times 4 = 44$ square centimeters.
        <br><i>Common errors:</i> $88$ forgets the $\frac{1}{2}$, $55$ uses the slanted side (5) as the height ($\frac{1}{2} \times 22 \times 5$), and $32$ is the perimeter ($14 + 8 + 5 + 5$).`
    },
    {
      id: 'GM4-08', topic: 'GM4', type: 'num', diff: 3,
      stem: R`A square garden is 6 meters on each side. A path 1 meter wide goes all the way around the garden, along all four sides. What is the area of the path, in square meters?`,
      answer: 28, tol: 0, unit: 'square meters',
      explain: R`The garden and the path together make a larger square that is $6 + 1 + 1 = 8$ meters on each side, with area $8 \times 8 = 64$ square meters. The garden alone has area $6 \times 6 = 36$. The path is what is left: $64 - 36 = 28$ square meters.
        <br><i>Common errors:</i> $24$ adds four strips that are 6 m by 1 m and leaves out the four corner squares. $32$ adds four strips that are 8 m by 1 m, which counts each corner square twice.`
    },
    {
      id: 'GM4-09', topic: 'GM4', type: 'mc', diff: 2, task: [1],
      stem: R`A teacher wants the class to see why the area of a triangle is $\frac{1}{2} \times \text{base} \times \text{height}$. Which explanation does that best?`,
      choices: [
        R`A triangle has two measurements that are multiplied, a base and a height, so the product is divided by 2 to match the two measurements.`,
        R`Two copies of the triangle, one turned upside down, fit together to make a parallelogram with the same base and height, so one triangle is half of that parallelogram.`,
        R`The slanted sides of a triangle are longer than its height, so the product of the base and the height is cut in half to make up for that.`,
        R`A rectangle can be cut along a diagonal into two triangles, so the formula $\frac{1}{2} \times \text{base} \times \text{height}$ works only for right triangles.`
      ], answer: 1,
      explain: R`Turn a second copy of the triangle upside down and join it along one side: the two copies form a parallelogram. Its base and height are the triangle's base and height, so its area is $\text{base} \times \text{height}$, and one triangle is half of that. This works for every triangle, not just right triangles.
        <br><i>Common errors:</i> treating the $\frac{1}{2}$ as a rule about "two dimensions" or about slanted sides explains nothing about why the area is half. The diagonal of a rectangle gives only right triangles, but the half-of-a-parallelogram argument covers any triangle.`
    },

    /* ================= GM6  Measurement: time, money, units, and conversions ================= */
    {
      id: 'GM6-07', topic: 'GM6', type: 'mc', diff: 2,
      stem: R`Which of these lengths is the longest?`,
      choices: [R`128 cm`, R`1.3 m`, R`0.0014 km`, R`1,250 mm`], answer: 2,
      explain: R`Write every length in meters. There are 100 cm in a meter, so $128$ cm is $1.28$ m. There are 1000 mm in a meter, so $1{,}250$ mm is $1.25$ m. There are 1000 m in a kilometer, so $0.0014$ km is $1.4$ m. Comparing $1.28$, $1.3$, $1.4$, and $1.25$ meters, the longest is $0.0014$ km.
        <br><i>Common errors:</i> choosing $1{,}250$ mm because 1,250 is the biggest number written, and choosing $1.3$ m because it is already in meters and looks "normal" while the other units are not compared at all.`
    },
    {
      id: 'GM6-08', topic: 'GM6', type: 'num', diff: 2,
      stem: R`A school store sells pencils 3 for \$0.75 and erasers 2 for \$0.90. Maya buys 12 pencils and 6 erasers and pays with a \$10 bill. How much change should she get, in dollars?`,
      answer: 4.3, tol: 0.001, unit: 'dollars',
      explain: R`Twelve pencils are $12 \div 3 = 4$ sets of 3, so they cost $4 \times 0.75 = 3.00$ dollars. Six erasers are $6 \div 2 = 3$ sets of 2, so they cost $3 \times 0.90 = 2.70$ dollars. The total is $3.00 + 2.70 = 5.70$ dollars, and the change is $10 - 5.70 = 4.30$ dollars.
        <br><i>Common errors:</i> $7.00$ leaves out the erasers ($10 - 3.00$), and $1.60$ prices each of the 6 erasers at \$0.90 instead of each pair ($3.00 + 5.40 = 8.40$, and $10 - 8.40 = 1.60$).`
    },
    {
      id: 'GM6-09', topic: 'GM6', type: 'mc', diff: 1, task: [5],
      stem: R`A teacher asks the class which measurement should be given in square units. Which student answers correctly?`,
      choices: [
        R`Ana: the distance around a playground`,
        R`Ben: the amount of floor that a rug covers`,
        R`Cy: the amount of water that a fish tank holds`,
        R`Dee: the height of a doorway`
      ], answer: 1,
      explain: R`Square units (such as square feet or square meters) measure area, the amount of flat surface that something covers. The floor covered by a rug is an area, so Ben is correct.
        <br><i>Common errors:</i> the distance around a playground is a perimeter and the height of a doorway is a length, and both are measured in plain units such as feet or meters. The water in a fish tank is a volume, which uses cubic units.`
    },
    {
      id: 'GM6-10', topic: 'GM6', type: 'mc', diff: 3,
      stem: R`Leo starts a hike at 11:35 am. The walking part of the hike takes 2 hours 50 minutes, and he also stops for a 25-minute lunch break. At what time does he finish the hike?`,
      choices: [R`2:10 pm`, R`2:25 pm`, R`2:50 pm`, R`3:15 pm`], answer: 2,
      explain: R`Add the walking time and the break: $2\text{ h }50\text{ min} + 25\text{ min} = 2\text{ h }75\text{ min} = 3\text{ h }15\text{ min}$. Then count forward from 11:35 am: 3 hours later is 2:35 pm, and 15 more minutes is 2:50 pm.
        <br><i>Common errors:</i> $2{:}25$ pm leaves out the lunch break, and $3{:}15$ pm is the length of the whole hike read as a clock time. $2{:}10$ pm comes from treating an hour as 100 minutes: the 110 minutes ($35 + 50 + 25$) is read as 1 hour 10 minutes instead of 1 hour 50 minutes.`
    }
  );
})();
