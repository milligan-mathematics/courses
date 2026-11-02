/* Praxis 5003 bank, pass 1: Geometry and Measurement (GM1-GM6), 6 original items per topic (36).
   Format and rules: ../praxis-5003-kit/SPEC-5003.md and bank-example.js. Keys recomputed in checks-gm.py;
   the raw-SVG figures were drawn to scale by gen-svg-gm.py and checks-gm.py measures them again from this file. */
(function () {
  var R = String.raw;
  PXD.bank.push(

    /* ================= GM1  Lines, rays, segments, and angles ================= */
    {
      id: 'GM1-01', topic: 'GM1', type: 'mc', diff: 1,
      stem: R`Which of the following is the best name for the figure shown?`,
      figure: {
        type: 'svg', alt: 'A horizontal path with a solid dot at its left end labeled P, a second dot labeled Q to the right of P, and an arrowhead at the right end. The left end stops at P; the right end continues past Q.',
        svg: R`<svg viewBox="0 0 270 70"><line x1="45" y1="30" x2="245" y2="30"/><polyline points="236.8,26.3 245,30 236.8,33.7"/><circle class="pt" cx="45" cy="30" r="3.5"/><circle class="pt" cx="135" cy="30" r="3.5"/><text x="45" y="56" text-anchor="middle">P</text><text x="135" y="56" text-anchor="middle">Q</text></svg>`
      },
      choices: [R`ray $PQ$`, R`ray $QP$`, R`segment $PQ$`, R`line $PQ$`], answer: 0,
      explain: R`A ray has one endpoint and goes on forever in one direction. The figure starts at the endpoint $P$, passes through $Q$, and has an arrowhead at the right end only, so it is ray $PQ$ (the endpoint is named first).
        <br><i>Common errors:</i> ray $QP$ would start at $Q$ and run the other way. A segment has two endpoints and no arrowheads, and a line has arrowheads on both ends.`
    },
    {
      id: 'GM1-02', topic: 'GM1', type: 'multi', diff: 2,
      stem: R`The figure shows four lines, $a$, $b$, $c$, and $d$. Select all that apply. Which statements are true?`,
      figure: {
        type: 'svg', alt: 'Four straight lines with arrowheads on both ends, drawn to scale. Lines a and c both slope up to the right at 25 degrees above horizontal. Line b slopes steeply up to the left at 115 degrees and crosses lines a and c. Line d slopes steeply up to the right at 70 degrees.',
        svg: R`<svg viewBox="0 0 320 240"><line x1="26" y1="193.8" x2="294" y2="68.9"/><polyline points="285,69 294,68.9 288.1,75.7"/><polyline points="35,193.7 26,193.8 31.9,187"/><text x="306.7" y="67.9" text-anchor="middle">a</text><line x1="193.8" y1="214" x2="106.2" y2="26"/><polyline points="106.3,35 106.2,26 113,31.9"/><polyline points="193.7,205 193.8,214 187,208.1"/><text x="100.3" y="18.3" text-anchor="middle">b</text><line x1="26" y1="164.5" x2="294" y2="39.5"/><polyline points="285,39.7 294,39.5 288.1,46.3"/><polyline points="35,164.3 26,164.5 31.9,157.7"/><text x="306.7" y="38.6" text-anchor="middle">c</text><line x1="158.5" y1="214" x2="226.9" y2="26"/><polyline points="220.7,32.5 226.9,26 227.6,35"/><polyline points="164.8,207.5 158.5,214 157.9,205"/><text x="231.7" y="17.8" text-anchor="middle">d</text></svg>`
      },
      choices: [R`Line $a$ is parallel to line $c$.`, R`Line $b$ is perpendicular to line $a$.`, R`Line $d$ is perpendicular to line $b$.`, R`Line $d$ is parallel to line $a$.`, R`Line $b$ is parallel to line $d$.`], answer: [0, 1],
      explain: R`Lines $a$ and $c$ slope the same way ($25^\circ$ above horizontal), so they never meet: they are parallel. Line $b$ is at $115^\circ$, and $115^\circ - 25^\circ = 90^\circ$, so $b$ crosses $a$ at a right angle: they are perpendicular.
        <br>Line $d$ is at $70^\circ$. It differs from $a$ by $45^\circ$ and from $b$ by $45^\circ$, so it is neither parallel nor perpendicular to either.
        <br><i>Common errors:</i> calling any two lines that cross "perpendicular" and calling lines that lean the same general way "parallel" even though they meet.`
    },
    {
      id: 'GM1-03', topic: 'GM1', type: 'mc', diff: 1,
      stem: R`Which type of angle is shown?`,
      figure: {
        type: 'svg', alt: 'An angle drawn to scale with its vertex at the lower middle. One ray points horizontally to the right and the other points up and to the left, so the angle is 128 degrees.',
        svg: R`<svg viewBox="0 0 240 150"><line x1="115" y1="125" x2="220" y2="125"/><line x1="115" y1="125" x2="50.4" y2="42.3"/><path d="M 139 125 A 24 24 0 0 0 100.2 106.1"/></svg>`
      },
      choices: [R`acute`, R`right`, R`obtuse`, R`straight`], answer: 2,
      explain: R`The angle measures $128^\circ$. An obtuse angle is greater than $90^\circ$ and less than $180^\circ$: it is wider than a square corner but not a straight line.
        <br><i>Common errors:</i> calling it acute because it is "less than a full turn," and calling it straight because the second ray leans well back.`
    },
    {
      id: 'GM1-04', topic: 'GM1', type: 'num', diff: 2,
      stem: R`In the figure, a ray starts at point $O$ on a straight line and makes a $65^\circ$ angle with the line. What is the value of $x$, in degrees?`,
      figure: {
        type: 'svg', alt: 'A horizontal straight line with arrowheads on both ends. A point O is marked on it, and a ray rises from O up and to the right. The angle between the ray and the right part of the line is labeled 65 degrees. The angle between the ray and the left part of the line is labeled x.',
        svg: R`<svg viewBox="0 0 290 140"><line x1="14" y1="112" x2="276" y2="112"/><polyline points="22.2,115.7 14,112 22.2,108.3"/><polyline points="267.8,108.3 276,112 267.8,115.7"/><line x1="145" y1="112" x2="186.4" y2="23.2"/><circle class="pt" cx="145" cy="112" r="3.5"/><path d="M 175 112 A 30 30 0 0 0 157.7 84.8"/><text class="up" x="196.2" y="86.9" text-anchor="middle">65°</text><path d="M 155.1 90.2 A 24 24 0 0 0 121 112"/><text x="122.4" y="81.6" text-anchor="middle">x</text></svg>`
      },
      answer: 115, tol: 0, unit: 'degrees',
      explain: R`The two angles together make a straight angle, which measures $180^\circ$. So $x = 180 - 65 = 115$.
        <br><i>Common errors:</i> $25$ comes from subtracting from $90^\circ$ (treating the line as a right angle), $295$ from subtracting from $360^\circ$, and $65$ from assuming the two angles are equal.`
    },
    {
      id: 'GM1-05', topic: 'GM1', type: 'mc', diff: 2, task: [7],
      stem: R`A teacher shows the class two angles, $A$ and $B$. A student says, "Angle $A$ is bigger because its sides are longer." Which statement best describes the student's error?`,
      figure: {
        type: 'svg', alt: 'Two angles drawn to scale, each with a horizontal ray and a second ray above it. Angle A is 50 degrees and its rays are long, about 150 units. Angle B is 75 degrees and its rays are short, about 62 units.',
        svg: R`<svg viewBox="0 0 380 150"><line x1="22" y1="128" x2="172" y2="128"/><line x1="22" y1="128" x2="118.4" y2="13.1"/><path d="M 44 128 A 22 22 0 0 0 36.1 111.1"/><text x="60.1" y="115.3" text-anchor="middle">A</text><line x1="225" y1="128" x2="287" y2="128"/><line x1="225" y1="128" x2="241" y2="68.1"/><path d="M 245 128 A 20 20 0 0 0 230.2 108.7"/><text x="255.1" y="109.9" text-anchor="middle">B</text></svg>`
      },
      choices: [
        R`The student compared how long the rays are drawn instead of how far apart the rays open.`,
        R`The student measured each angle with the wrong tool.`,
        R`The student thought the angle with the longer rays must also have the longer base.`,
        R`The student believed that two acute angles cannot be compared.`
      ], answer: 0,
      explain: R`The size of an angle is the amount of turning between its two rays. It does not depend on how long the rays are drawn, because the rays go on forever. Angle $B$ ($75^\circ$) opens wider than angle $A$ ($50^\circ$) even though its rays are shorter.
        <br><i>Common errors:</i> the student's idea treats an angle like a length or an area. The other choices describe mistakes the student did not make: nothing in what the student said involves a tool, a base, or a rule against comparing acute angles.`
    },
    {
      id: 'GM1-06', topic: 'GM1', type: 'mc', diff: 3,
      stem: R`What is the measure of the smaller angle formed by the hands of a clock at 2:30?`,
      choices: [R`$75^\circ$`, R`$90^\circ$`, R`$105^\circ$`, R`$120^\circ$`], answer: 2, order: 'fixed',
      explain: R`The 12 numbers are equally spaced around a full turn of $360^\circ$, so neighboring numbers are $30^\circ$ apart. At 2:30 the minute hand points at the 6, which is $180^\circ$ from the 12. The hour hand is halfway between the 2 and the 3, which is $2.5 \times 30 = 75^\circ$ from the 12. The angle between the hands is $180 - 75 = 105^\circ$.
        <br><i>Common errors:</i> $120^\circ$ puts the hour hand right on the 2 ($4 \times 30$), $90^\circ$ puts it on the 3 ($3 \times 30$), and $75^\circ$ is the hour hand's own distance from the 12.`
    },

    /* ================= GM2  Classifying and composing shapes ================= */
    {
      id: 'GM2-01', topic: 'GM2', type: 'mc', diff: 1,
      stem: R`A quadrilateral has exactly one pair of parallel sides. Which of these must the quadrilateral be?`,
      choices: [R`rectangle`, R`rhombus`, R`parallelogram`, R`trapezoid`], answer: 3,
      explain: R`A rectangle, a rhombus, and a parallelogram each have two pairs of parallel sides. A quadrilateral with exactly one pair cannot be any of them, so it must be a trapezoid.
        <br><i>Common errors:</i> choosing parallelogram because the word "parallel" seems to match, or choosing rectangle because it is the most familiar shape with parallel sides.`
    },
    {
      id: 'GM2-02', topic: 'GM2', type: 'multi', diff: 2,
      stem: R`Which TWO statements are true?`,
      choices: [R`Every square is a rectangle.`, R`Every rectangle is a square.`, R`Every rhombus is a parallelogram.`, R`Every parallelogram is a rectangle.`, R`Every rectangle is a rhombus.`], answer: [0, 2],
      explain: R`A square has four right angles, so it is a rectangle. A rhombus has two pairs of parallel sides, so it is a parallelogram.
        <br><i>Common errors:</i> reading the statements backward. A rectangle with sides 3 and 5 is not a square and is not a rhombus, and a parallelogram that is not a rectangle (slanted, with no right angles) is easy to draw.`
    },
    {
      id: 'GM2-03', topic: 'GM2', type: 'mc', diff: 2,
      stem: R`The regular hexagon is divided into six triangles by segments that join its center to its vertices. Which statement is true of every one of the six triangles?`,
      figure: {
        type: 'svg', alt: 'A regular hexagon drawn to scale with a vertex at the far left and far right. Six segments run from the center to the six vertices, dividing the hexagon into six triangles.',
        svg: R`<svg viewBox="0 0 260 230"><polygon class="fb" points="220,115 175,37.1 85,37.1 40,115 85,192.9 175,192.9"/><line x1="130" y1="115" x2="220" y2="115"/><line x1="130" y1="115" x2="175" y2="37.1"/><line x1="130" y1="115" x2="85" y2="37.1"/><line x1="130" y1="115" x2="40" y2="115"/><line x1="130" y1="115" x2="85" y2="192.9"/><line x1="130" y1="115" x2="175" y2="192.9"/></svg>`
      },
      choices: [R`It is equilateral.`, R`It is isosceles with exactly two equal sides.`, R`It is a right triangle.`, R`It is scalene.`], answer: 0,
      explain: R`The six angles at the center fill a full turn and are equal, so each is $360^\circ \div 6 = 60^\circ$. Two sides of each triangle are segments from the center to a vertex, so they are equal and the other two angles are equal too: $(180 - 60) \div 2 = 60^\circ$. All three angles are $60^\circ$, so every triangle is equilateral.
        <br><i>Common errors:</i> stopping at "two sides are equal" and choosing isosceles, and expecting right angles because the triangles look like pieces of a rectangle.`
    },
    {
      id: 'GM2-04', topic: 'GM2', type: 'mc', diff: 1,
      stem: R`A solid has exactly one square face and four triangular faces. Which solid is it?`,
      choices: [R`cube`, R`triangular prism`, R`square pyramid`, R`triangular pyramid`], answer: 2,
      explain: R`A square pyramid has a square base and four triangular faces that meet at the top.
        <br><i>Common errors:</i> a cube has six square faces, a triangular prism has two triangles and three rectangles, and a triangular pyramid has four triangles and no square.`
    },
    {
      id: 'GM2-05', topic: 'GM2', type: 'mc', diff: 2, task: [2],
      stem: R`A teacher asks the class to give an example of a quadrilateral that is not a parallelogram. Which student gives a correct example?`,
      choices: [R`Ana: a rectangle that is 3 cm by 5 cm`, R`Ben: a rhombus with all sides 4 cm`, R`Cy: a square`, R`Dee: a quadrilateral with exactly one pair of parallel sides`], answer: 3,
      explain: R`A parallelogram has two pairs of parallel sides. Dee's quadrilateral has only one pair, so it is not a parallelogram (a trapezoid is an example).
        <br><i>Common errors:</i> a rectangle, a rhombus, and a square each have two pairs of parallel sides, so each is a parallelogram. Choosing one of them treats a shape with its own name as "different from" a parallelogram.`
    },
    {
      id: 'GM2-06', topic: 'GM2', type: 'num', diff: 3,
      stem: R`A $3 \times 3 \times 3$ cube is built from 27 small cubes. Then the entire outside of the large cube is painted. How many of the small cubes have paint on exactly two faces?`,
      answer: 12, tol: 0, unit: 'cubes',
      explain: R`Sort the 27 small cubes by position. The 8 corner cubes show 3 painted faces. Each of the 12 edges of the large cube has one cube in the middle of it, and that cube shows 2 painted faces. The 6 cubes at the centers of the faces show 1 painted face, and the cube in the very center shows none: $8 + 12 + 6 + 1 = 27$. So 12 cubes have exactly two painted faces.
        <br><i>Common errors:</i> $8$ comes from counting the corners, $24$ from counting two cubes on each edge, and $6$ from counting the face centers.`
    },

    /* ================= GM3  Nets, surface area, and volume ================= */
    {
      id: 'GM3-01', topic: 'GM3', type: 'mc', diff: 1,
      stem: R`The figure shows a net. Which solid can be folded from this net?`,
      figure: {
        type: 'svg', alt: 'A net made of a row of three equal rectangles. An equilateral triangle is attached to the top edge of the middle rectangle and another equilateral triangle to its bottom edge. Each triangle has the same side length as the width of a rectangle.',
        svg: R`<svg viewBox="0 0 160 190"><polygon class="fb" points="20,55 60,55 60,135 20,135"/><polygon class="fb" points="60,55 100,55 100,135 60,135"/><polygon class="fb" points="100,55 140,55 140,135 100,135"/><polygon class="fa" points="60,55 100,55 80,20.4"/><polygon class="fa" points="60,135 100,135 80,169.6"/></svg>`
      },
      choices: [R`triangular prism`, R`rectangular prism`, R`triangular pyramid`, R`square pyramid`], answer: 0,
      explain: R`The net has three rectangles and two triangles. When folded, the rectangles form the sides and the two triangles are the ends, which is a triangular prism.
        <br><i>Common errors:</i> a rectangular prism needs six rectangles, a triangular pyramid has four triangles, and a square pyramid has a square and four triangles.`
    },
    {
      id: 'GM3-02', topic: 'GM3', type: 'num', diff: 2, task: [4],
      stem: R`A teacher gives students the net of a square pyramid. The base is a square with sides of 6 cm, and the height of each triangular face (the dashed segment) is 5 cm. What is the surface area of the pyramid, in square centimeters?`,
      figure: {
        type: 'svg', alt: 'A net of a square pyramid: a square in the middle with an identical triangle attached to each of its four sides. The square is labeled 6 cm. A dashed segment from the apex of the top triangle to the middle of its base is labeled 5 cm and marked as perpendicular to the base.',
        svg: R`<svg viewBox="0 0 246 246"><polygon class="fa" points="81,81 165,81 165,165 81,165"/><polygon class="fb" points="81,81 165,81 123,11"/><polygon class="fb" points="81,165 165,165 123,235"/><polygon class="fb" points="81,81 81,165 11,123"/><polygon class="fb" points="165,81 165,165 235,123"/><line class="dash thin" x1="123" y1="11" x2="123" y2="81"/><polyline class="thin" points="123,72 132,72 132,81"/><text class="up halo hb" x="130" y="68" text-anchor="start">5 cm</text><text class="up" x="123" y="156" text-anchor="middle">6 cm</text></svg>`
      },
      answer: 96, tol: 0, unit: 'square centimeters',
      explain: R`The surface area is the sum of the areas of all five faces shown in the net. The square has area $6 \times 6 = 36$. Each triangle has base 6 and height 5, so its area is $\frac{1}{2} \times 6 \times 5 = 15$. Altogether: $36 + 4 \times 15 = 96$.
        <br><i>Common errors:</i> $60$ leaves out the square base, $156$ forgets the $\frac{1}{2}$ in each triangle ($36 + 4 \times 30$), and $51$ counts only one triangle.`
    },
    {
      id: 'GM3-03', topic: 'GM3', type: 'mc', diff: 2,
      stem: R`A fish tank is a rectangular prism that is 40 cm long, 25 cm wide, and 30 cm tall. It is filled with water to a depth of 20 cm. How many liters of water are in the tank? (1 liter = 1000 cubic centimeters)`,
      choices: ['2', '20', '30', '200'], answer: 1, order: 'fixed',
      explain: R`The water fills a prism that is 40 cm by 25 cm by 20 cm deep: $40 \times 25 \times 20 = 20{,}000$ cubic centimeters. Since 1 liter is 1000 cubic centimeters, that is $20{,}000 \div 1000 = 20$ liters.
        <br><i>Common errors:</i> $30$ uses the whole height of the tank instead of the depth of the water ($30{,}000$ cubic centimeters), and $2$ and $200$ come from dividing by $10{,}000$ or by $100$ instead of $1000$.`
    },
    {
      id: 'GM3-04', topic: 'GM3', type: 'mc', diff: 2, task: [1, 6],
      stem: R`A teacher shows this arrangement of six identical squares. Marcus says, "This will fold into a cube because it is made of six squares." Which response is best?`,
      figure: {
        type: 'svg', alt: 'Six identical squares joined edge to edge in two rows of three, forming a rectangle that is three squares wide and two squares tall.',
        svg: R`<svg viewBox="0 0 160 120"><polygon class="fb" points="20,20 60,20 60,60 20,60"/><polygon class="fb" points="60,20 100,20 100,60 60,60"/><polygon class="fb" points="100,20 140,20 140,60 100,60"/><polygon class="fb" points="20,60 60,60 60,100 20,100"/><polygon class="fb" points="60,60 100,60 100,100 60,100"/><polygon class="fb" points="100,60 140,60 140,100 100,100"/></svg>`
      },
      choices: [
        R`Marcus is right: any six squares joined edge to edge will fold into a cube.`,
        R`Marcus is wrong: a cube needs only five squares in its net.`,
        R`Marcus is wrong: when it is folded, some squares would land on top of each other and some faces of the cube would have no square.`,
        R`Marcus is wrong: a net of a cube has to be a single row of six squares.`
      ], answer: 2,
      explain: R`Having six squares is necessary but not enough: how they are joined matters. Fold the shape in your mind. The squares of the top row and the bottom row wrap around to the same faces, so some squares land on top of each other while other faces are left open. (Rolling a cube over this arrangement touches only 4 of its 6 faces.) A cross made of a column of four squares with one square attached to each side of the second one does fold into a cube.
        <br><i>Common errors:</i> believing the count of squares is all that matters (Marcus's idea), thinking five squares are enough, and thinking the squares must be in one row (a row of six squares does not fold into a cube either).`
    },
    {
      id: 'GM3-05', topic: 'GM3', type: 'multi', diff: 2,
      stem: R`Select all that apply. Which rectangular prisms have a volume of 24 cubic centimeters? (Each list gives length, width, and height in centimeters.)`,
      choices: [R`$2 \times 3 \times 4$`, R`$1 \times 5 \times 5$`, R`$1\frac{1}{2} \times 4 \times 4$`, R`$3 \times 3 \times 3$`, R`$\frac{1}{2} \times 6 \times 8$`], answer: [0, 2, 4],
      explain: R`Multiply the three edges: $2 \times 3 \times 4 = 24$; $1 \times 5 \times 5 = 25$; $1\frac{1}{2} \times 4 \times 4 = 24$; $3 \times 3 \times 3 = 27$; $\frac{1}{2} \times 6 \times 8 = 24$. The first, third, and fifth give 24.
        <br><i>Common errors:</i> dropping the fraction (treating $1\frac{1}{2}$ as 1 or 2, or $\frac{1}{2}$ as 1) and rejecting an edge length that is not a whole number.`
    },
    {
      id: 'GM3-06', topic: 'GM3', type: 'num', diff: 3,
      stem: R`An open box (with no lid) is a rectangular prism. Its base is 6 inches by 4 inches and its height is $2\frac{1}{2}$ inches. How many square inches of cardboard are needed to make the box?`,
      answer: 74, tol: 0, unit: 'square inches',
      explain: R`The box has a base and four sides, but no top. Base: $6 \times 4 = 24$. Two long sides: $2 \times (6 \times 2.5) = 30$. Two short sides: $2 \times (4 \times 2.5) = 20$. Total: $24 + 30 + 20 = 74$ square inches.
        <br><i>Common errors:</i> $98$ adds a lid (full surface area), $50$ leaves out the base, and $60$ is the volume ($6 \times 4 \times 2.5$), not a surface area.`
    },

    /* ================= GM4  Perimeter and area; how they change ================= */
    {
      id: 'GM4-01', topic: 'GM4', type: 'mc', diff: 1,
      stem: R`What is the area of the triangle shown, in square centimeters?`,
      figure: {
        type: 'svg', alt: 'A triangle drawn to scale with a horizontal base of 10 cm. The two equal slanted sides are each labeled 13 cm. A dashed segment from the top vertex straight down to the base is marked with a right angle and labeled 12 cm.',
        svg: R`<svg viewBox="0 0 200 186"><polygon class="fa" points="40,160 160,160 100,16"/><line class="dash thin" x1="100" y1="16" x2="100" y2="160"/><polyline class="thin" points="100,150 110,150 110,160"/><text class="up halo" x="113" y="146" text-anchor="start" style="font-size:14px">12 cm</text><text class="up" x="56" y="88" text-anchor="end">13 cm</text><text class="up" x="144" y="88" text-anchor="start">13 cm</text><text class="up" x="100" y="178" text-anchor="middle">10 cm</text></svg>`
      },
      choices: ['36', '60', '120', '130'], answer: 1, order: 'fixed',
      explain: R`The area of a triangle is $\frac{1}{2} \times \text{base} \times \text{height}$. The height is the dashed segment, which is perpendicular to the base: $\frac{1}{2} \times 10 \times 12 = 60$ square centimeters.
        <br><i>Common errors:</i> $36$ is the perimeter ($13 + 13 + 10$), $120$ forgets the $\frac{1}{2}$, and $130$ uses the slanted side as the height and also forgets the $\frac{1}{2}$.`
    },
    {
      id: 'GM4-02', topic: 'GM4', type: 'num', diff: 2,
      stem: R`The figure shows a polygon in which all the angles are right angles. The lengths are in centimeters. What is the perimeter of the polygon, in centimeters?`,
      figure: {
        type: 'svg', alt: 'A U-shaped polygon with only right angles, drawn to scale. The bottom side is labeled 12 and the left side 7. The top-left piece of the top edge is labeled 5. A rectangular notch is cut from the top edge: the notch is 4 wide, labeled below its floor, and 2 deep, labeled beside its left wall. The right top piece is not labeled.',
        svg: R`<svg viewBox="0 0 240 152"><polygon class="fa" points="25,125 205,125 205,20 160,20 160,50 100,50 100,20 25,20"/><text class="up" x="115" y="144" text-anchor="middle">12</text><text class="up" x="13" y="77.5" text-anchor="middle">7</text><text class="up" x="62.5" y="13" text-anchor="middle">5</text><text class="up" x="130" y="69" text-anchor="middle">4</text><text class="up" x="107" y="41" text-anchor="start">2</text></svg>`
      },
      answer: 42, tol: 0, unit: 'centimeters',
      explain: R`The right side is the same length as the left side, 7. The top edge is cut into three pieces by the notch: $5$ on the left, $4$ across the notch floor, and $12 - 5 - 4 = 3$ on the right. The notch also has two vertical sides of 2 each. Add all eight sides: $12 + 7 + 3 + 2 + 4 + 2 + 5 + 7 = 42$.
        <br>A shortcut: a $12 \times 7$ rectangle has perimeter $2(12 + 7) = 38$, and the notch adds its two vertical sides: $38 + 2 + 2 = 42$.
        <br><i>Common errors:</i> $38$ ignores the notch, and $40$ counts only one of the notch's vertical sides.`
    },
    {
      id: 'GM4-03', topic: 'GM4', type: 'mc', diff: 2,
      stem: R`A rectangular poster is $2\frac{1}{2}$ feet long and $1\frac{3}{4}$ feet wide. What is the area of the poster, in square feet?`,
      choices: [R`$2\frac{3}{8}$`, R`$4\frac{1}{4}$`, R`$4\frac{3}{8}$`, R`$8\frac{1}{2}$`], answer: 2, order: 'fixed',
      explain: R`Area is length times width. Write each as a fraction: $\frac{5}{2} \times \frac{7}{4} = \frac{35}{8} = 4\frac{3}{8}$ square feet.
        <br><i>Common errors:</i> $2\frac{3}{8}$ multiplies the whole numbers and the fractions separately ($2 \times 1$ and $\frac{1}{2} \times \frac{3}{4}$) and adds, which leaves out two of the four partial products. $4\frac{1}{4}$ adds the two sides, and $8\frac{1}{2}$ is the perimeter.`
    },
    {
      id: 'GM4-04', topic: 'GM4', type: 'mc', diff: 2, task: [6],
      stem: R`A teacher asks the class to find the area of the parallelogram shown. Pedro writes $10 \times 5 = 50$ square centimeters. Which feedback is best?`,
      figure: {
        type: 'svg', alt: 'A parallelogram drawn to scale with a horizontal base of 10 cm. The slanted left side is labeled 5 cm. A dashed segment from the top left vertex straight down to the base is marked with a right angle and labeled 4 cm.',
        svg: R`<svg viewBox="0 0 270 128"><polygon class="fb" points="30,96 190,96 238,32 78,32"/><line class="dash thin" x1="78" y1="32" x2="78" y2="96"/><polyline class="thin" points="78,87 87,87 87,96"/><text class="up" x="84" y="70" text-anchor="start">4 cm</text><text class="up" x="40" y="62" text-anchor="end">5 cm</text><text class="up" x="110" y="116" text-anchor="middle">10 cm</text></svg>`
      },
      choices: [
        R`Pedro is correct. Area is the base times the length of the side next to it.`,
        R`Area is half of the base times the side: $\frac{1}{2} \times 10 \times 5 = 25$ square centimeters.`,
        R`The 5 cm side is slanted. Area is the base times the perpendicular height: $10 \times 4 = 40$ square centimeters.`,
        R`Area is the distance around: $10 + 5 + 10 + 5 = 30$ square centimeters.`
      ], answer: 2,
      explain: R`The area of a parallelogram is the base times the perpendicular height, which is the dashed segment: $10 \times 4 = 40$ square centimeters. The slanted side (5 cm) is longer than the height, so using it overstates the area. (Cutting off the triangle at the left and moving it to the right makes a $10 \times 4$ rectangle.)
        <br><i>Common errors:</i> Pedro's error is using the slanted side as the height. The $\frac{1}{2}$ belongs to triangles, not parallelograms, and $30$ is the perimeter.`
    },
    {
      id: 'GM4-05', topic: 'GM4', type: 'multi', diff: 2,
      stem: R`Select all that apply. Which changes make the area of a rectangle exactly 4 times as large as it was?`,
      choices: [R`Double the length and double the width.`, R`Triple the length and keep the width the same.`, R`Multiply the length by 4 and keep the width the same.`, R`Double the length and triple the width.`, R`Multiply the length by 8 and cut the width in half.`], answer: [0, 2, 4],
      explain: R`The new area is the old area times the product of the two factors: $2 \times 2 = 4$, $3 \times 1 = 3$, $4 \times 1 = 4$, $2 \times 3 = 6$, and $8 \times \frac{1}{2} = 4$. So the first, third, and fifth changes work.
        <br><i>Common errors:</i> adding the factors instead of multiplying them. Doubling one side and tripling the other does not make the area 5 times as large, it makes it 6 times as large.`
    },
    {
      id: 'GM4-06', topic: 'GM4', type: 'num', diff: 3,
      stem: R`A cube-shaped tank holds 5 liters of water when it is full. A second cube-shaped tank has edges that are 3 times as long as the edges of the first tank. How many liters does the second tank hold when it is full?`,
      answer: 135, tol: 0, unit: 'liters',
      explain: R`Volume is length times width times height, so multiplying every edge by 3 multiplies the volume by $3 \times 3 \times 3 = 27$. The second tank holds $5 \times 27 = 135$ liters.
        <br><i>Common errors:</i> $15$ multiplies the volume by 3 (the factor for the edges), and $45$ multiplies by $3^2 = 9$ (the factor for area).`
    },

    /* ================= GM5  The coordinate plane ================= */
    {
      id: 'GM5-01', topic: 'GM5', type: 'multi', diff: 1,
      stem: R`Which TWO ordered pairs name points in Quadrant II of the coordinate plane?`,
      choices: [R`$(-3, 4)$`, R`$(3, -4)$`, R`$(-5, -1)$`, R`$(-2, 7)$`, R`$(6, 2)$`], answer: [0, 3],
      explain: R`Quadrant II is the upper left part of the plane, where $x$ is negative and $y$ is positive. $(-3, 4)$ and $(-2, 7)$ fit.
        <br><i>Common errors:</i> $(3, -4)$ is in Quadrant IV, $(-5, -1)$ is in Quadrant III, and $(6, 2)$ is in Quadrant I. Mixing these up usually means forgetting that the quadrants are numbered counterclockwise, starting at the upper right.`
    },
    {
      id: 'GM5-02', topic: 'GM5', type: 'mc', diff: 1,
      stem: R`Point $Q$ is shown on the coordinate plane. Which ordered pair names point $Q$?`,
      figure: {
        type: 'plot', alt: 'Coordinate plane from -6 to 6 on both axes with three labeled points: P at (-3, 2), Q at (2, -4), and R at (4, 3).',
        points: [{ x: -3, y: 2, label: 'P' }, { x: 2, y: -4, label: 'Q' }, { x: 4, y: 3, label: 'R' }],
        xr: [-6, 6], yr: [-6, 6], xstep: 1, ystep: 1
      },
      choices: [R`$(-4, 2)$`, R`$(2, -4)$`, R`$(-2, 4)$`, R`$(4, -2)$`], answer: 1,
      explain: R`Start at the origin. Point $Q$ is 2 units to the right and 4 units down, so it is $(2, -4)$: the first number tells the horizontal move and the second the vertical move.
        <br><i>Common errors:</i> $(-4, 2)$ reverses the order of the coordinates, $(4, -2)$ reverses them and flips both signs, and $(-2, 4)$ uses the wrong signs.`
    },
    {
      id: 'GM5-03', topic: 'GM5', type: 'num', diff: 2,
      stem: R`The triangle shown has one horizontal side and one vertical side. What is the area of the triangle, in square units?`,
      figure: {
        type: 'plot', alt: 'Coordinate plane with a triangle whose vertices are A at (-3, -1), B at (4, -1), and C at (4, 3). Side AB is horizontal, side BC is vertical, and side AC is slanted.',
        points: [{ x: -3, y: -1, label: 'A', dx: -14, dy: 18 }, { x: 4, y: -1, label: 'B', dx: 8, dy: 18 }, { x: 4, y: 3, label: 'C', dx: 8, dy: 4 }],
        segments: [[-3, -1, 4, -1], [4, -1, 4, 3], [-3, -1, 4, 3]],
        xr: [-5, 6], yr: [-3, 5], xstep: 1, ystep: 1
      },
      answer: 14, tol: 0, unit: 'square units',
      explain: R`The horizontal side $AB$ runs from $x = -3$ to $x = 4$, so its length is $4 - (-3) = 7$. The vertical side $BC$ runs from $y = -1$ to $y = 3$, so its length is $3 - (-1) = 4$. These two sides meet at a right angle, so the area is $\frac{1}{2} \times 7 \times 4 = 14$.
        <br><i>Common errors:</i> $28$ forgets the $\frac{1}{2}$, and $2$ comes from finding the base as $4 - 3 = 1$, which ignores that $-3$ is on the other side of the $y$-axis.`
    },
    {
      id: 'GM5-04', topic: 'GM5', type: 'mc', diff: 2, task: [7],
      stem: R`A student is asked to plot the point $(-2, 5)$. The student's point, $S$, is shown on the coordinate plane. Which statement best describes the student's error?`,
      figure: {
        type: 'plot', alt: 'Coordinate plane from -6 to 6 on both axes with one labeled point: S at (5, -2), which is 5 units right of the y-axis and 2 units below the x-axis.',
        points: [{ x: 5, y: -2, label: 'S' }],
        xr: [-6, 6], yr: [-6, 6], xstep: 1, ystep: 1
      },
      choices: [
        R`The student reversed the order of the coordinates, moving 5 units right and 2 units down.`,
        R`The student ignored the negative sign and moved 2 units right and 5 units up.`,
        R`The student moved 2 units left but then moved 5 units down instead of up.`,
        R`The student plotted the point correctly but labeled it with the wrong letter.`
      ], answer: 0,
      explain: R`Point $S$ is 5 units to the right and 2 units down, so it is at $(5, -2)$. That is $(-2, 5)$ with the two numbers swapped, each keeping its own sign: the student used the first number for the up-and-down move and the second for the left-and-right move.
        <br><i>Common errors:</i> the other pictures describe other mistakes. Ignoring the sign would put the point at $(2, 5)$, and a wrong vertical direction would put it at $(-2, -5)$; neither is where $S$ is.`
    },
    {
      id: 'GM5-05', topic: 'GM5', type: 'mc', diff: 2,
      stem: R`On a map drawn on a coordinate plane, each unit is 1 block. The library is at $(-4, 3)$ and the school is at $(-4, -5)$. How many blocks apart are they along the straight street between them?`,
      choices: ['2', '8', '12', '15'], answer: 1, order: 'fixed',
      explain: R`Both points have $x = -4$, so the street is vertical. Going from $y = 3$ down to the $x$-axis is 3 blocks, and from there down to $y = -5$ is 5 more: $3 + 5 = 8$ blocks.
        <br><i>Common errors:</i> $2$ comes from combining $3$ and $-5$ as $3 + (-5)$ instead of finding the distance across the axis, $12$ adds the $x$-value too ($4 + 3 + 5$), and $15$ multiplies $3 \times 5$.`
    },
    {
      id: 'GM5-06', topic: 'GM5', type: 'num', diff: 3,
      stem: R`The triangle shown has vertices at $P(0, 0)$, $Q(6, 2)$, and $R(2, 5)$. What is the area of the triangle, in square units?`,
      figure: {
        type: 'plot', alt: 'Coordinate plane with a triangle whose vertices are P at (0, 0), Q at (6, 2), and R at (2, 5). None of the sides is horizontal or vertical.',
        points: [{ x: 0, y: 0, label: 'P', dx: -14, dy: 16 }, { x: 6, y: 2, label: 'Q', dx: 8, dy: 4 }, { x: 2, y: 5, label: 'R', dx: 8, dy: -4 }],
        segments: [[0, 0, 6, 2], [6, 2, 2, 5], [2, 5, 0, 0]],
        xr: [-1, 7], yr: [-1, 6], xstep: 1, ystep: 1
      },
      answer: 13, tol: 0, unit: 'square units',
      explain: R`No side is horizontal or vertical, so enclose the triangle in a rectangle with corners $(0, 0)$ and $(6, 5)$. The rectangle has area $6 \times 5 = 30$. Three right triangles are left over: $\frac{1}{2} \times 6 \times 2 = 6$ (below $PQ$), $\frac{1}{2} \times 3 \times 4 = 6$ (to the right of $QR$), and $\frac{1}{2} \times 2 \times 5 = 5$ (to the left of $PR$). The area is $30 - (6 + 6 + 5) = 13$.
        <br><i>Common errors:</i> $15$ takes half of the enclosing rectangle, and $30$ gives the rectangle's area itself.`
    },

    /* ================= GM6  Measurement: time, money, units, and conversions ================= */
    {
      id: 'GM6-01', topic: 'GM6', type: 'mc', diff: 1,
      stem: R`A train arrives at 2:10 pm after a trip that lasted 1 hour 35 minutes. At what time did the train leave?`,
      choices: [R`12:35 pm`, R`12:45 pm`, R`1:25 pm`, R`3:45 pm`], answer: 0,
      explain: R`Count back from 2:10. One hour back is 1:10. Going back 10 more minutes reaches 1:00, and 25 more minutes (to make 35 in all) reaches 12:35 pm.
        <br><i>Common errors:</i> $1{:}25$ comes from subtracting the minutes the wrong way around ($35 - 10 = 25$) and the hours separately ($2 - 1 = 1$). $3{:}45$ adds the trip time to the arrival time. $12{:}45$ comes from subtracting as decimals ($2.10 - 1.35 = 0.75$) and reading $0.75$ as 45 minutes after 12.`
    },
    {
      id: 'GM6-02', topic: 'GM6', type: 'num', diff: 1,
      stem: R`Nora buys 3 notebooks that cost \$2.49 each and a pen that costs \$1.35. She pays with a \$10 bill. How much change should she get, in dollars?`,
      answer: 1.18, tol: 0.001, unit: 'dollars',
      explain: R`Three notebooks cost $3 \times 2.49 = 7.47$ dollars. With the pen, the total is $7.47 + 1.35 = 8.82$ dollars. Change: $10 - 8.82 = 1.18$ dollars.
        <br><i>Common errors:</i> $2.53$ forgets the pen ($10 - 7.47$), and $6.16$ buys only one notebook ($10 - 2.49 - 1.35$).`
    },
    {
      id: 'GM6-03', topic: 'GM6', type: 'multi', diff: 2, task: [8],
      stem: R`A teacher asks students to estimate real-life measurements. Which TWO of these estimates are reasonable?`,
      choices: [R`A new pencil is about 19 cm long.`, R`A glass of milk holds about 25 L.`, R`A bicycle has a mass of about 12 kg.`, R`A classroom door is about 20 m tall.`, R`A teaspoon holds about 5 L.`], answer: [0, 2],
      explain: R`A new pencil is a little under 8 inches, and 19 cm is about $7\frac{1}{2}$ inches. A bicycle weighs about 26 pounds, and 12 kg is about 26 pounds.
        <br><i>Common errors:</i> mixing up the size of metric prefixes. A glass of milk is about 250 mL (a quarter of a liter), not 25 L, which would fill a large bucket. A door is about 2 m tall, not 20 m, and a teaspoon holds about 5 mL, not 5 L.`
    },
    {
      id: 'GM6-04', topic: 'GM6', type: 'num', diff: 3, calc: true,
      stem: R`A recipe uses $3\frac{1}{2}$ cups of broth for each batch of soup. How many complete batches can be made from 2 gallons of broth?`,
      answer: 9, tol: 0, unit: 'batches',
      explain: R`One gallon is 4 quarts, one quart is 2 pints, and one pint is 2 cups, so 1 gallon is $4 \times 2 \times 2 = 16$ cups and 2 gallons is 32 cups. Then $32 \div 3\frac{1}{2} = 9.14\ldots$, so there is enough broth for 9 complete batches.
        <br><i>Common errors:</i> $10$ rounds $9.14$ up to the next whole number, but the tenth batch would be short of broth. $4$ comes from using 8 cups in a gallon (the number of pints) and then dividing $16 \div 3\frac{1}{2}$.`
    },
    {
      id: 'GM6-05', topic: 'GM6', type: 'mc', diff: 2, task: [6],
      stem: R`A student converts 3.2 kilometers to meters and writes $3.2 \times 100 = 320$ meters. Which feedback is best?`,
      choices: [
        R`There are 1000 meters in a kilometer, so multiply by 1000: $3.2 \times 1000 = 3200$ meters.`,
        R`The answer is correct, because "kilo" means 100.`,
        R`Meters are smaller than kilometers, so divide: $3.2 \div 1000 = 0.0032$ meters.`,
        R`Meters are smaller than kilometers, so divide: $3.2 \div 100 = 0.032$ meters.`
      ], answer: 0,
      explain: R`The prefix kilo means 1000, so 1 kilometer is 1000 meters. Meters are smaller units than kilometers, so it takes more of them: multiply, $3.2 \times 1000 = 3200$ meters.
        <br><i>Common errors:</i> the student used 100 (the number of centimeters in a meter). Dividing when converting to a smaller unit (the last two choices) gives a number smaller than 3.2, which cannot be right when each kilometer contains many meters.`
    },
    {
      id: 'GM6-06', topic: 'GM6', type: 'mc', diff: 2, task: [7],
      stem: R`A teacher lays a paper strip along a centimeter ruler, as shown. Ben says, "The strip is 11.6 cm long, because its right end is at 11.6." Which statement best describes Ben's error?`,
      figure: {
        type: 'svg', alt: 'A centimeter ruler marked from 0 to 12 with millimeter tick marks. A paper strip lies along the top edge of the ruler. Its left end is at the 2 centimeter mark and its right end is at 11.6 centimeters, six small marks past the 11 centimeter mark.',
        svg: R`<svg viewBox="0 0 384 112"><rect class="fa" x="14" y="36" width="356" height="46"/><rect class="fb" x="80" y="12" width="268.8" height="24"/><line class="thin" x1="24" y1="36" x2="24" y2="54"/><line class="thin" x1="26.8" y1="36" x2="26.8" y2="43"/><line class="thin" x1="29.6" y1="36" x2="29.6" y2="43"/><line class="thin" x1="32.4" y1="36" x2="32.4" y2="43"/><line class="thin" x1="35.2" y1="36" x2="35.2" y2="43"/><line class="thin" x1="38" y1="36" x2="38" y2="48"/><line class="thin" x1="40.8" y1="36" x2="40.8" y2="43"/><line class="thin" x1="43.6" y1="36" x2="43.6" y2="43"/><line class="thin" x1="46.4" y1="36" x2="46.4" y2="43"/><line class="thin" x1="49.2" y1="36" x2="49.2" y2="43"/><line class="thin" x1="52" y1="36" x2="52" y2="54"/><line class="thin" x1="54.8" y1="36" x2="54.8" y2="43"/><line class="thin" x1="57.6" y1="36" x2="57.6" y2="43"/><line class="thin" x1="60.4" y1="36" x2="60.4" y2="43"/><line class="thin" x1="63.2" y1="36" x2="63.2" y2="43"/><line class="thin" x1="66" y1="36" x2="66" y2="48"/><line class="thin" x1="68.8" y1="36" x2="68.8" y2="43"/><line class="thin" x1="71.6" y1="36" x2="71.6" y2="43"/><line class="thin" x1="74.4" y1="36" x2="74.4" y2="43"/><line class="thin" x1="77.2" y1="36" x2="77.2" y2="43"/><line class="thin" x1="80" y1="36" x2="80" y2="54"/><line class="thin" x1="82.8" y1="36" x2="82.8" y2="43"/><line class="thin" x1="85.6" y1="36" x2="85.6" y2="43"/><line class="thin" x1="88.4" y1="36" x2="88.4" y2="43"/><line class="thin" x1="91.2" y1="36" x2="91.2" y2="43"/><line class="thin" x1="94" y1="36" x2="94" y2="48"/><line class="thin" x1="96.8" y1="36" x2="96.8" y2="43"/><line class="thin" x1="99.6" y1="36" x2="99.6" y2="43"/><line class="thin" x1="102.4" y1="36" x2="102.4" y2="43"/><line class="thin" x1="105.2" y1="36" x2="105.2" y2="43"/><line class="thin" x1="108" y1="36" x2="108" y2="54"/><line class="thin" x1="110.8" y1="36" x2="110.8" y2="43"/><line class="thin" x1="113.6" y1="36" x2="113.6" y2="43"/><line class="thin" x1="116.4" y1="36" x2="116.4" y2="43"/><line class="thin" x1="119.2" y1="36" x2="119.2" y2="43"/><line class="thin" x1="122" y1="36" x2="122" y2="48"/><line class="thin" x1="124.8" y1="36" x2="124.8" y2="43"/><line class="thin" x1="127.6" y1="36" x2="127.6" y2="43"/><line class="thin" x1="130.4" y1="36" x2="130.4" y2="43"/><line class="thin" x1="133.2" y1="36" x2="133.2" y2="43"/><line class="thin" x1="136" y1="36" x2="136" y2="54"/><line class="thin" x1="138.8" y1="36" x2="138.8" y2="43"/><line class="thin" x1="141.6" y1="36" x2="141.6" y2="43"/><line class="thin" x1="144.4" y1="36" x2="144.4" y2="43"/><line class="thin" x1="147.2" y1="36" x2="147.2" y2="43"/><line class="thin" x1="150" y1="36" x2="150" y2="48"/><line class="thin" x1="152.8" y1="36" x2="152.8" y2="43"/><line class="thin" x1="155.6" y1="36" x2="155.6" y2="43"/><line class="thin" x1="158.4" y1="36" x2="158.4" y2="43"/><line class="thin" x1="161.2" y1="36" x2="161.2" y2="43"/><line class="thin" x1="164" y1="36" x2="164" y2="54"/><line class="thin" x1="166.8" y1="36" x2="166.8" y2="43"/><line class="thin" x1="169.6" y1="36" x2="169.6" y2="43"/><line class="thin" x1="172.4" y1="36" x2="172.4" y2="43"/><line class="thin" x1="175.2" y1="36" x2="175.2" y2="43"/><line class="thin" x1="178" y1="36" x2="178" y2="48"/><line class="thin" x1="180.8" y1="36" x2="180.8" y2="43"/><line class="thin" x1="183.6" y1="36" x2="183.6" y2="43"/><line class="thin" x1="186.4" y1="36" x2="186.4" y2="43"/><line class="thin" x1="189.2" y1="36" x2="189.2" y2="43"/><line class="thin" x1="192" y1="36" x2="192" y2="54"/><line class="thin" x1="194.8" y1="36" x2="194.8" y2="43"/><line class="thin" x1="197.6" y1="36" x2="197.6" y2="43"/><line class="thin" x1="200.4" y1="36" x2="200.4" y2="43"/><line class="thin" x1="203.2" y1="36" x2="203.2" y2="43"/><line class="thin" x1="206" y1="36" x2="206" y2="48"/><line class="thin" x1="208.8" y1="36" x2="208.8" y2="43"/><line class="thin" x1="211.6" y1="36" x2="211.6" y2="43"/><line class="thin" x1="214.4" y1="36" x2="214.4" y2="43"/><line class="thin" x1="217.2" y1="36" x2="217.2" y2="43"/><line class="thin" x1="220" y1="36" x2="220" y2="54"/><line class="thin" x1="222.8" y1="36" x2="222.8" y2="43"/><line class="thin" x1="225.6" y1="36" x2="225.6" y2="43"/><line class="thin" x1="228.4" y1="36" x2="228.4" y2="43"/><line class="thin" x1="231.2" y1="36" x2="231.2" y2="43"/><line class="thin" x1="234" y1="36" x2="234" y2="48"/><line class="thin" x1="236.8" y1="36" x2="236.8" y2="43"/><line class="thin" x1="239.6" y1="36" x2="239.6" y2="43"/><line class="thin" x1="242.4" y1="36" x2="242.4" y2="43"/><line class="thin" x1="245.2" y1="36" x2="245.2" y2="43"/><line class="thin" x1="248" y1="36" x2="248" y2="54"/><line class="thin" x1="250.8" y1="36" x2="250.8" y2="43"/><line class="thin" x1="253.6" y1="36" x2="253.6" y2="43"/><line class="thin" x1="256.4" y1="36" x2="256.4" y2="43"/><line class="thin" x1="259.2" y1="36" x2="259.2" y2="43"/><line class="thin" x1="262" y1="36" x2="262" y2="48"/><line class="thin" x1="264.8" y1="36" x2="264.8" y2="43"/><line class="thin" x1="267.6" y1="36" x2="267.6" y2="43"/><line class="thin" x1="270.4" y1="36" x2="270.4" y2="43"/><line class="thin" x1="273.2" y1="36" x2="273.2" y2="43"/><line class="thin" x1="276" y1="36" x2="276" y2="54"/><line class="thin" x1="278.8" y1="36" x2="278.8" y2="43"/><line class="thin" x1="281.6" y1="36" x2="281.6" y2="43"/><line class="thin" x1="284.4" y1="36" x2="284.4" y2="43"/><line class="thin" x1="287.2" y1="36" x2="287.2" y2="43"/><line class="thin" x1="290" y1="36" x2="290" y2="48"/><line class="thin" x1="292.8" y1="36" x2="292.8" y2="43"/><line class="thin" x1="295.6" y1="36" x2="295.6" y2="43"/><line class="thin" x1="298.4" y1="36" x2="298.4" y2="43"/><line class="thin" x1="301.2" y1="36" x2="301.2" y2="43"/><line class="thin" x1="304" y1="36" x2="304" y2="54"/><line class="thin" x1="306.8" y1="36" x2="306.8" y2="43"/><line class="thin" x1="309.6" y1="36" x2="309.6" y2="43"/><line class="thin" x1="312.4" y1="36" x2="312.4" y2="43"/><line class="thin" x1="315.2" y1="36" x2="315.2" y2="43"/><line class="thin" x1="318" y1="36" x2="318" y2="48"/><line class="thin" x1="320.8" y1="36" x2="320.8" y2="43"/><line class="thin" x1="323.6" y1="36" x2="323.6" y2="43"/><line class="thin" x1="326.4" y1="36" x2="326.4" y2="43"/><line class="thin" x1="329.2" y1="36" x2="329.2" y2="43"/><line class="thin" x1="332" y1="36" x2="332" y2="54"/><line class="thin" x1="334.8" y1="36" x2="334.8" y2="43"/><line class="thin" x1="337.6" y1="36" x2="337.6" y2="43"/><line class="thin" x1="340.4" y1="36" x2="340.4" y2="43"/><line class="thin" x1="343.2" y1="36" x2="343.2" y2="43"/><line class="thin" x1="346" y1="36" x2="346" y2="48"/><line class="thin" x1="348.8" y1="36" x2="348.8" y2="43"/><line class="thin" x1="351.6" y1="36" x2="351.6" y2="43"/><line class="thin" x1="354.4" y1="36" x2="354.4" y2="43"/><line class="thin" x1="357.2" y1="36" x2="357.2" y2="43"/><line class="thin" x1="360" y1="36" x2="360" y2="54"/><text class="up" x="24" y="75" text-anchor="middle">0</text><text class="up" x="52" y="75" text-anchor="middle">1</text><text class="up" x="80" y="75" text-anchor="middle">2</text><text class="up" x="108" y="75" text-anchor="middle">3</text><text class="up" x="136" y="75" text-anchor="middle">4</text><text class="up" x="164" y="75" text-anchor="middle">5</text><text class="up" x="192" y="75" text-anchor="middle">6</text><text class="up" x="220" y="75" text-anchor="middle">7</text><text class="up" x="248" y="75" text-anchor="middle">8</text><text class="up" x="276" y="75" text-anchor="middle">9</text><text class="up" x="304" y="75" text-anchor="middle">10</text><text class="up" x="332" y="75" text-anchor="middle">11</text><text class="up" x="360" y="75" text-anchor="middle">12</text></svg>`
      },
      choices: [
        R`Ben did not notice that the strip starts at 2.0 instead of 0, so he did not subtract the starting point.`,
        R`Ben read the wrong end of the strip: the length is the number at the left end, 2.0 cm.`,
        R`Ben should have measured the strip in millimeters instead of centimeters.`,
        R`Ben misread the ruler: the right end of the strip is at 11.4 cm.`
      ], answer: 0,
      explain: R`A length is the distance from one end to the other. The strip runs from 2.0 cm to 11.6 cm, so its length is $11.6 - 2.0 = 9.6$ cm. Ben read the position of the right end and treated it as the length, which only works when the strip starts at the 0 mark.
        <br><i>Common errors:</i> using the left end alone (2.0), changing units (the unit does not change the length), and doubting the reading of the right end (11.6 is correct).`
    }
  );
})();
