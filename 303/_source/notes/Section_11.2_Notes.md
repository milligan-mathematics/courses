Good news, everyone!

Welcome, aspiring mathematical adventurers, to **Math 303: Multivariable Calculus!** I am Professor Hubert J. Farnsworth, your esteemed pedagogical assistant from Milligan University, and today we embark on a truly fascinating journey into the realm of **Section 11.2: Vectors and Vector Algebra**.

Prepare yourselves for an intellectual feast! In single-variable calculus, we grappled with quantities that had only magnitude, like speed or temperature. But the universe, my young scholars, is far more complex! It's a grand tapestry of forces, velocities, displacements, and fields that demand a richer mathematical language. That language, my friends, is **vectors**!

Today, we'll peel back the layers of this fundamental concept. We'll learn to define vectors, understand their geometric and algebraic forms, and perform various operations on them. This isn't just abstract theory; vectors are the bedrock of physics, engineering, computer graphics, and even the calculations behind your favorite space-faring vessels! So, sharpen your pencils, ignite your brain cells, and let's delve into the magnificent world of vectors! Huzzah!

---

## Math 303 - Section 11.2: Vectors and Vector Algebra

### I. Core Concepts: What ARE Vectors?

Imagine, if you will, a quantity that possesses not just a value, but also a specific direction. Think of a gust of wind – it has a speed (magnitude) *and* it blows in a certain direction. This, my dear students, is the essence of a vector!

#### Definition 1.1: Geometric Vector
A **vector** is a quantity that has both **magnitude** (or length) and **direction**. Geometrically, we represent a vector as a **directed line segment** or an **arrow**.

*   The **initial point** (or tail) is where the vector begins.
*   The **terminal point** (or head) is where the vector ends, indicated by the arrowhead.

We often denote vectors with boldface letters (e.g., $\mathbf{v}$), or with an arrow above the letter (e.g., $\vec{v}$). If a vector starts at point $P$ and ends at point $Q$, we can write it as $\overrightarrow{PQ}$.

#### Definition 1.2: Equivalent Vectors
Two vectors are considered **equivalent** if they have the same magnitude and the same direction. This is a crucial concept! A vector's position in space does not define it, only its length and orientation. We can translate a vector anywhere in space, and it remains the same vector as long as its magnitude and direction are preserved.

#### Definition 1.3: Component Form of a Vector
While geometric representation is intuitive, for calculations, we prefer an algebraic form.
If a vector $\mathbf{v}$ has an initial point $P=(x_1, y_1)$ and a terminal point $Q=(x_2, y_2)$ in the plane ($R^2$), its **component form** is given by:
$$ \mathbf{v} = \langle x_2 - x_1, y_2 - y_1 \rangle $$
In three-dimensional space ($R^3$), if $P=(x_1, y_1, z_1)$ and $Q=(x_2, y_2, z_2)$, then:
$$ \mathbf{v} = \langle x_2 - x_1, y_2 - y_1, z_2 - z_1 \rangle $$
The components $x_2 - x_1$, $y_2 - y_1$, and $z_2 - z_1$ represent the net change in $x$, $y$, and $z$ coordinates, respectively.

#### Definition 1.4: Standard Position
A vector is in **standard position** if its initial point is at the origin $(0,0)$ in $R^2$ or $(0,0,0)$ in $R^3$. In this case, the components of the vector are simply the coordinates of its terminal point. For example, a vector $\mathbf{v} = \langle a, b \rangle$ implies its initial point is $(0,0)$ and its terminal point is $(a,b)$.

#### Definition 1.5: Magnitude (Length) of a Vector
The **magnitude** (or length or norm) of a vector $\mathbf{v}$ is denoted by $||\mathbf{v}||$. It's simply the distance between its initial and terminal points.
*   For $\mathbf{v} = \langle a, b \rangle$ in $R^2$:
    $$ ||\mathbf{v}|| = \sqrt{a^2 + b^2} $$
*   For $\mathbf{v} = \langle a, b, c \rangle$ in $R^3$:
    $$ ||\mathbf{v}|| = \sqrt{a^2 + b^2 + c^2} $$
This is a direct application of the distance formula, or the Pythagorean theorem extended to three dimensions.

#### Definition 1.6: Zero Vector and Unit Vector
*   The **zero vector**, denoted by $\mathbf{0}$ or $\langle 0, 0 \rangle$ (or $\langle 0, 0, 0 \rangle$), has zero magnitude and no specific direction.
*   A **unit vector** is a vector with a magnitude of 1. These are incredibly useful for indicating direction without concern for length.

---

### II. Detailed Lecture & Worked Examples

Let's put these definitions into action!

#### Example 1: Finding the Component Form and Length of a Vector
Find **a.** the component form and **b.** the length of the vector $\mathbf{u}$ in $R^3$ with initial point $P=(-1,3,-2)$ and terminal point $Q=(0,1,-5)$.

**Professor Farnsworth's Solution:**

Alright, let's dissect this problem! We have two points in glorious 3D space.

**Part a. Finding the Component Form:**
To find the component form, we simply subtract the coordinates of the initial point from the coordinates of the terminal point. Remember, it's always "terminal minus initial"!

Given:
*   Initial point $P = (x_1, y_1, z_1) = (-1, 3, -2)$
*   Terminal point $Q = (x_2, y_2, z_2) = (0, 1, -5)$

The component form $\mathbf{u} = \langle x_2 - x_1, y_2 - y_1, z_2 - z_1 \rangle$ is:
$$ \mathbf{u} = \langle 0 - (-1), 1 - 3, -5 - (-2) \rangle $$
$$ \mathbf{u} = \langle 0 + 1, 1 - 3, -5 + 2 \rangle $$
$$ \mathbf{u} = \langle 1, -2, -3 \rangle $$
So, the component form of vector $\mathbf{u}$ is $\langle 1, -2, -3 \rangle$. This means if we place the tail of $\mathbf{u}$ at the origin, its head would be at $(1, -2, -3)$. Simple, isn't it?

**Part b. Finding the Length (Magnitude) of the Vector:**
Now, for the length! The magnitude is found using the 3D distance formula (which, let's be honest, is just Pythagoras in an extra dimension).

Given $\mathbf{u} = \langle a, b, c \rangle = \langle 1, -2, -3 \rangle$.
The length $||\mathbf{u}||$ is:
$$ ||\mathbf{u}|| = \sqrt{a^2 + b^2 + c^2} $$
$$ ||\mathbf{u}|| = \sqrt{(1)^2 + (-2)^2 + (-3)^2} $$
$$ ||\mathbf{u}|| = \sqrt{1 + 4 + 9} $$
$$ ||\mathbf{u}|| = \sqrt{14} $$
The length (or magnitude) of vector $\mathbf{u}$ is $\sqrt{14}$. Marvelous!

---

### III. Vector Algebra: Operations with Vectors

Just like numbers, vectors can be added, subtracted, and multiplied by scalars! But the rules are a bit different, reflecting their dual nature of magnitude and direction.

#### Definition 2.1: Scalar Multiplication
If $c$ is a scalar (a real number) and $\mathbf{v} = \langle v_1, v_2 \rangle$ is a vector in $R^2$ (or $\langle v_1, v_2, v_3 \rangle$ in $R^3$), then the scalar multiple $c\mathbf{v}$ is defined as:
$$ c\mathbf{v} = \langle cv_1, cv_2 \rangle \quad \text{or} \quad c\mathbf{v} = \langle cv_1, cv_2, cv_3 \rangle $$
**Geometrically:**
*   If $c > 0$, $c\mathbf{v}$ has the same direction as $\mathbf{v}$ but its length is $c$ times the length of $\mathbf{v}$.
*   If $c < 0$, $c\mathbf{v}$ has the opposite direction as $\mathbf{v}$ and its length is $|c|$ times the length of $\mathbf{v}$.
*   If $c = 0$, $c\mathbf{v} = \mathbf{0}$, the zero vector.

#### Definition 2.2: Vector Addition
If $\mathbf{u} = \langle u_1, u_2 \rangle$ and $\mathbf{v} = \langle v_1, v_2 \rangle$ are vectors in $R^2$ (or similarly in $R^3$), then their sum $\mathbf{u} + \mathbf{v}$ is defined as:
$$ \mathbf{u} + \mathbf{v} = \langle u_1 + v_1, u_2 + v_2 \rangle \quad \text{or} \quad \mathbf{u} + \mathbf{v} = \langle u_1 + v_1, u_2 + v_2, u_3 + v_3 \rangle $$
**Geometrically:** There are two common rules for vector addition:
1.  **Triangle Rule:** Place the initial point of $\mathbf{v}$ at the terminal point of $\mathbf{u}$. The vector $\mathbf{u} + \mathbf{v}$ is the vector from the initial point of $\mathbf{u}$ to the terminal point of $\mathbf{v}$.
2.  **Parallelogram Rule:** Place $\mathbf{u}$ and $\mathbf{v}$ so their initial points coincide. The sum $\mathbf{u} + \mathbf{v}$ is the diagonal of the parallelogram formed by $\mathbf{u}$ and $\mathbf{v}$, starting from the common initial point.

#### Definition 2.3: Vector Subtraction
Vector subtraction $\mathbf{u} - \mathbf{v}$ can be thought of as adding the negative of $\mathbf{v}$:
$$ \mathbf{u} - \mathbf{v} = \mathbf{u} + (-\mathbf{v}) $$
Algebraically:
$$ \mathbf{u} - \mathbf{v} = \langle u_1 - v_1, u_2 - v_2 \rangle \quad \text{or} \quad \mathbf{u} - \mathbf{v} = \langle u_1 - v_1, u_2 - v_2, u_3 - v_3 \rangle $$
**Geometrically:** Place $\mathbf{u}$ and $\mathbf{v}$ so their initial points coincide. The vector $\mathbf{u} - \mathbf{v}$ is the vector from the terminal point of $\mathbf{v}$ to the terminal point of $\mathbf{u}$.

#### Theorem: Properties of Scalar Multiplication and Vector Addition
For vectors $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$ and scalars $c$, $d$:
1.  **Commutativity of Addition:** $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$
2.  **Associativity of Addition:** $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$
3.  **Additive Identity:** $\mathbf{u} + \mathbf{0} = \mathbf{u}$
4.  **Additive Inverse:** $\mathbf{u} + (-\mathbf{u}) = \mathbf{0}$
5.  **Associativity of Scalar Multiplication:** $c(d\mathbf{u}) = (cd)\mathbf{u}$
6.  **Distributivity over Vector Addition:** $c(\mathbf{u} + \mathbf{v}) = c\mathbf{u} + c\mathbf{v}$
7.  **Distributivity over Scalar Addition:** $(c + d)\mathbf{u} = c\mathbf{u} + d\mathbf{u}$
8.  **Multiplicative Identity (Scalar):** $1\mathbf{u} = \mathbf{u}$
9.  **Scalar Zero Property:** $0\mathbf{u} = \mathbf{0}$
10. **Magnitude of Scalar Multiple:** $||c\mathbf{u}|| = |c| ||\mathbf{u}||$

These properties are what make vector algebra so robust and useful!

#### Example 3: Performing Vector Algebra Using Vector Components
Let $\mathbf{u} = \langle -2, 2, 4 \rangle$ and $\mathbf{v} = \langle 3, -5, 1 \rangle$. Find the following:
**a.** $2\mathbf{u} + \mathbf{v}$
**b.** $\mathbf{v} - \mathbf{u}$
**c.** $||-\frac{1}{2}\mathbf{u}||$

**Professor Farnsworth's Solution:**

Excellent! Let's calculate these vector expressions with precision!

**Part a. Calculating $2\mathbf{u} + \mathbf{v}$:**
First, we perform the scalar multiplication $2\mathbf{u}$:
$$ 2\mathbf{u} = 2\langle -2, 2, 4 \rangle = \langle 2(-2), 2(2), 2(4) \rangle = \langle -4, 4, 8 \rangle $$
Now, add this to $\mathbf{v}$:
$$ 2\mathbf{u} + \mathbf{v} = \langle -4, 4, 8 \rangle + \langle 3, -5, 1 \rangle $$
$$ 2\mathbf{u} + \mathbf{v} = \langle -4 + 3, 4 + (-5), 8 + 1 \rangle $$
$$ 2\mathbf{u} + \mathbf{v} = \langle -1, -1, 9 \rangle $$
There you have it! A new vector, resulting from our scalar multiplication and addition.

**Part b. Calculating $\mathbf{v} - \mathbf{u}$:**
For subtraction, we simply subtract the corresponding components:
$$ \mathbf{v} - \mathbf{u} = \langle 3, -5, 1 \rangle - \langle -2, 2, 4 \rangle $$
$$ \mathbf{v} - \mathbf{u} = \langle 3 - (-2), -5 - 2, 1 - 4 \rangle $$
$$ \mathbf{v} - \mathbf{u} = \langle 3 + 2, -7, -3 \rangle $$
$$ \mathbf{v} - \mathbf{u} = \langle 5, -7, -3 \rangle $$
Observe the components carefully, especially with negative signs!

**Part c. Calculating $||-\frac{1}{2}\mathbf{u}||$:**
First, let's find the vector $-\frac{1}{2}\mathbf{u}$:
$$ -\frac{1}{2}\mathbf{u} = -\frac{1}{2}\langle -2, 2, 4 \rangle = \langle -\frac{1}{2}(-2), -\frac{1}{2}(2), -\frac{1}{2}(4) \rangle $$
$$ -\frac{1}{2}\mathbf{u} = \langle 1, -1, -2 \rangle $$
Now, calculate the magnitude of this resulting vector:
$$ ||-\frac{1}{2}\mathbf{u}|| = \sqrt{(1)^2 + (-1)^2 + (-2)^2} $$
$$ ||-\frac{1}{2}\mathbf{u}|| = \sqrt{1 + 1 + 4} $$
$$ ||-\frac{1}{2}\mathbf{u}|| = \sqrt{6} $$
Alternatively, we could use property 10: $||c\mathbf{u}|| = |c| ||\mathbf{u}||$.
First, find $||\mathbf{u}||$:
$$ ||\mathbf{u}|| = \sqrt{(-2)^2 + (2)^2 + (4)^2} = \sqrt{4 + 4 + 16} = \sqrt{24} = \sqrt{4 \cdot 6} = 2\sqrt{6} $$
Then, $||-\frac{1}{2}\mathbf{u}|| = |-\frac{1}{2}| ||\mathbf{u}|| = \frac{1}{2} (2\sqrt{6}) = \sqrt{6}$.
Both methods yield the same result! Consistency!

#### Example 4: Graphing Vector Sums and Scalar Multiples of Vectors
Given the two vectors $\mathbf{u} = \langle 5, -2 \rangle$ and $\mathbf{v} = \langle -1, 2 \rangle$ in $R^2$, depict $-2\mathbf{v}$ and $\mathbf{u} - \mathbf{v}$.

**Professor Farnsworth's Solution:**

Ah, the visual aspect! Geometry is paramount for understanding. Let's sketch these marvels!

First, let's place the original vectors $\mathbf{u}$ and $\mathbf{v}$ in standard position (tail at the origin) on a coordinate plane.
*   $\mathbf{u} = \langle 5, -2 \rangle$: From $(0,0)$ to $(5,-2)$.
*   $\mathbf{v} = \langle -1, 2 \rangle$: From $(0,0)$ to $(-1,2)$.

**Depicting $-2\mathbf{v}$:**
First, calculate the component form of $-2\mathbf{v}$:
$$ -2\mathbf{v} = -2\langle -1, 2 \rangle = \langle (-2)(-1), (-2)(2) \rangle = \langle 2, -4 \rangle $$
To depict $-2\mathbf{v}$, draw a vector starting at the origin and ending at $(2,-4)$. Notice it's twice as long as $\mathbf{v}$ and points in the exact opposite direction.

**Depicting $\mathbf{u} - \mathbf{v}$:**
First, calculate the component form of $\mathbf{u} - \mathbf{v}$:
$$ \mathbf{u} - \mathbf{v} = \langle 5, -2 \rangle - \langle -1, 2 \rangle $$
$$ \mathbf{u} - \mathbf{v} = \langle 5 - (-1), -2 - 2 \rangle $$
$$ \mathbf{u} - \mathbf{v} = \langle 6, -4 \rangle $$
To depict $\mathbf{u} - \mathbf{v}$, draw a vector starting at the origin and ending at $(6,-4)$.
**Geometric Interpretation of $\mathbf{u} - \mathbf{v}$:**
Alternatively, using the "head-to-head" rule for subtraction: draw $\mathbf{u}$ and $\mathbf{v}$ from the same initial point (the origin). The vector $\mathbf{u} - \mathbf{v}$ is the vector that goes from the terminal point of $\mathbf{v}$ to the terminal point of $\mathbf{u}$. If you were to draw this, you'd find its component form is indeed $\langle 6, -4 \rangle$, matching our calculation.

**(Visual Description for the notes - in a live lecture, I'd draw this on the board!)**

*   **Coordinate Plane:** Draw an x-y coordinate system.
*   **Vector u:** An arrow from $(0,0)$ to $(5,-2)$.
*   **Vector v:** An arrow from $(0,0)$ to $(-1,2)$.
*   **Vector -2v:** An arrow from $(0,0)$ to $(2,-4)$. (This arrow should be twice as long as $\mathbf{v}$ and pointing southeast, opposite to $\mathbf{v}$'s northwest direction).
*   **Vector u - v (component method):** An arrow from $(0,0)$ to $(6,-4)$.
*   **Vector u - v (geometric method):** Draw $\mathbf{u}$ and $\mathbf{v}$ both starting at the origin. Then draw an arrow from the tip of $\mathbf{v}$ (at $(-1,2)$) to the tip of $\mathbf{u}$ (at $(5,-2)$). This resulting vector, when translated to the origin, will be the same as the one going to $(6,-4)$.

---

### IV. Applications and Advanced Vector Concepts

Vectors are not just abstract mathematical entities; they are powerful tools for solving real-world problems.

#### Example 5: Using Vector Algebra to Find Coordinates of Points
Given $P(-2,4,1)$ and $Q(3,2,-1)$, determine the coordinates of the point:
**a.** halfway between $P$ and $Q$.
**b.** one quarter of the way from $P$ to $Q$.

**Professor Farnsworth's Solution:**

This is a classic application of position vectors and scalar multiplication! We're essentially finding a point along the vector $\overrightarrow{PQ}$.

First, let's represent $P$ and $Q$ as position vectors from the origin, $\mathbf{p}$ and $\mathbf{q}$:
*   $\mathbf{p} = \langle -2, 4, 1 \rangle$
*   $\mathbf{q} = \langle 3, 2, -1 \rangle$

The vector from $P$ to $Q$ is $\overrightarrow{PQ} = \mathbf{q} - \mathbf{p}$:
$$ \overrightarrow{PQ} = \langle 3 - (-2), 2 - 4, -1 - 1 \rangle = \langle 5, -2, -2 \rangle $$

**Part a. Halfway between P and Q:**
Let $M$ be the midpoint. The position vector of $M$, $\mathbf{m}$, can be found by adding half of $\overrightarrow{PQ}$ to $\mathbf{p}$:
$$ \mathbf{m} = \mathbf{p} + \frac{1}{2}\overrightarrow{PQ} $$
Alternatively, and more symmetrically, the midpoint formula for coordinates is simply the average of the coordinates:
$$ M = \left( \frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}, \frac{z_1 + z_2}{2} \right) $$
Using this simpler approach (equivalent to the vector sum above):
$$ M = \left( \frac{-2 + 3}{2}, \frac{4 + 2}{2}, \frac{1 + (-1)}{2} \right) $$
$$ M = \left( \frac{1}{2}, \frac{6}{2}, \frac{0}{2} \right) $$
$$ M = \left( \frac{1}{2}, 3, 0 \right) $$
The point halfway between $P$ and $Q$ is $(\frac{1}{2}, 3, 0)$.

**Part b. One quarter of the way from P to Q:**
Let $N$ be the point one quarter of the way from $P$ to $Q$. Its position vector $\mathbf{n}$ can be found by adding one quarter of the vector $\overrightarrow{PQ}$ to the position vector of $P$:
$$ \mathbf{n} = \mathbf{p} + \frac{1}{4}\overrightarrow{PQ} $$
We know $\mathbf{p} = \langle -2, 4, 1 \rangle$ and $\overrightarrow{PQ} = \langle 5, -2, -2 \rangle$.
$$ \mathbf{n} = \langle -2, 4, 1 \rangle + \frac{1}{4}\langle 5, -2, -2 \rangle $$
$$ \mathbf{n} = \langle -2, 4, 1 \rangle + \langle \frac{5}{4}, -\frac{2}{4}, -\frac{2}{4} \rangle $$
$$ \mathbf{n} = \langle -2, 4, 1 \rangle + \langle \frac{5}{4}, -\frac{1}{2}, -\frac{1}{2} \rangle $$
Now, add the components:
$$ \mathbf{n} = \langle -2 + \frac{5}{4}, 4 - \frac{1}{2}, 1 - \frac{1}{2} \rangle $$
$$ \mathbf{n} = \langle -\frac{8}{4} + \frac{5}{4}, \frac{8}{2} - \frac{1}{2}, \frac{2}{2} - \frac{1}{2} \rangle $$
$$ \mathbf{n} = \langle -\frac{3}{4}, \frac{7}{2}, \frac{1}{2} \rangle $$
The point one quarter of the way from $P$ to $Q$ is $(-\frac{3}{4}, \frac{7}{2}, \frac{1}{2})$. Fantastic!

#### Definition 3.1: Standard Basis Vectors
In $R^2$, the **standard basis vectors** are:
*   $\mathbf{i} = \langle 1, 0 \rangle$ (unit vector in the positive $x$-direction)
*   $\mathbf{j} = \langle 0, 1 \rangle$ (unit vector in the positive $y$-direction)
In $R^3$, the **standard basis vectors** are:
*   $\mathbf{i} = \langle 1, 0, 0 \rangle$ (unit vector in the positive $x$-direction)
*   $\mathbf{j} = \langle 0, 1, 0 \rangle$ (unit vector in the positive $y$-direction)
*   $\mathbf{k} = \langle 0, 0, 1 \rangle$ (unit vector in the positive $z$-direction)

Any vector can be expressed as a **linear combination** of these basis vectors. For example, $\langle a, b, c \rangle = a\mathbf{i} + b\mathbf{j} + c\mathbf{k}$. This is merely another notation for component form!

#### Definition 3.2: Unit Vector in the Direction of $\mathbf{v}$
For any non-zero vector $\mathbf{v}$, the **unit vector in the same direction as $\mathbf{v}$**, denoted by $\hat{\mathbf{u}}$ or $\mathbf{u}_{\mathbf{v}}$, is found by dividing $\mathbf{v}$ by its magnitude:
$$ \hat{\mathbf{u}} = \frac{\mathbf{v}}{||\mathbf{v}||} = \frac{1}{||\mathbf{v}||}\mathbf{v} $$
This process is called **normalizing** the vector.

#### Example 6: Using Standard Basis and Unit Vectors
Let $\mathbf{u} = \langle 3, -2, 4 \rangle$.
**a.** Express $\mathbf{u}$ as a linear combination of the standard basis vectors of $R^3$.
**b.** Express $\mathbf{u}$ as a product of its magnitude and a vector pointing in the same direction.

**Professor Farnsworth's Solution:**

Excellent! Let's translate this vector into different notations!

**Part a. Expressing $\mathbf{u}$ as a linear combination of standard basis vectors:**
This is straightforward! We simply use the definition of the standard basis vectors $\mathbf{i}$, $\mathbf{j}$, and $\mathbf{k}$.
Given $\mathbf{u} = \langle 3, -2, 4 \rangle$:
$$ \mathbf{u} = 3\langle 1, 0, 0 \rangle + (-2)\langle 0, 1, 0 \rangle + 4\langle 0, 0, 1 \rangle $$
$$ \mathbf{u} = 3\mathbf{i} - 2\mathbf{j} + 4\mathbf{k} $$
A truly elegant notation, if I do say so myself!

**Part b. Expressing $\mathbf{u}$ as a product of its magnitude and a unit vector:**
This requires two steps: first find the magnitude, then divide the vector by it to get the unit vector.

**Step 1: Find the magnitude of $\mathbf{u}$:**
$$ ||\mathbf{u}|| = \sqrt{(3)^2 + (-2)^2 + (4)^2} $$
$$ ||\mathbf{u}|| = \sqrt{9 + 4 + 16} $$
$$ ||\mathbf{u}|| = \sqrt{29} $$

**Step 2: Find the unit vector in the direction of $\mathbf{u}$ (let's call it $\hat{\mathbf{u}}$):**
$$ \hat{\mathbf{u}} = \frac{\mathbf{u}}{||\mathbf{u}||} = \frac{1}{\sqrt{29}}\langle 3, -2, 4 \rangle $$
$$ \hat{\mathbf{u}} = \left\langle \frac{3}{\sqrt{29}}, -\frac{2}{\sqrt{29}}, \frac{4}{\sqrt{29}} \right\rangle $$

**Step 3: Express $\mathbf{u}$ as the product:**
$$ \mathbf{u} = ||\mathbf{u}||\hat{\mathbf{u}} = \sqrt{29} \left\langle \frac{3}{\sqrt{29}}, -\frac{2}{\sqrt{29}}, \frac{4}{\sqrt{29}} \right\rangle $$
This demonstrates how any non-zero vector can be uniquely decomposed into its length and its pure directional component. Phenomenal!

---

#### Example 2: Using Vectors with Horizontal and Vertical Velocity (Projectile Motion)
A ball is shot by a slingshot into the air with an initial vertical velocity component of $64 \text{ ft/s}$ and a horizontal component of $10 \text{ ft/s}$.
Determine:
**a.** its velocity at time $t$.
**b.** the magnitude of its velocity at the highest point of its arc.
**c.** the magnitude of its velocity just at the moment it hits the ground.
(Ignore air resistance, and assume the initial height of the ball is $0$).

**Professor Farnsworth's Solution:**

Aha! A classic kinematics problem, perfectly suited for vector analysis! This is where vectors truly shine, allowing us to separate and combine independent motions.

Let's establish our coordinate system:
*   Positive $x$-direction is horizontal.
*   Positive $y$-direction is vertical (upwards).
*   Gravity acts in the negative $y$-direction.

Given initial conditions:
*   Initial horizontal velocity, $v_{x0} = 10 \text{ ft/s}$
*   Initial vertical velocity, $v_{y0} = 64 \text{ ft/s}$
*   Acceleration due to gravity, $a_y = -32 \text{ ft/s}^2$ (downwards)
*   There is no horizontal acceleration, $a_x = 0$.

**Part a. Its velocity at time $t$:**
The velocity vector $\mathbf{v}(t)$ will have horizontal and vertical components.
The horizontal velocity remains constant since there is no horizontal acceleration:
$$ v_x(t) = v_{x0} = 10 \text{ ft/s} $$
The vertical velocity changes due to gravity:
$$ v_y(t) = v_{y0} + a_y t = 64 - 32t \text{ ft/s} $$
Therefore, the velocity vector at time $t$ is:
$$ \mathbf{v}(t) = \langle v_x(t), v_y(t) \rangle = \langle 10, 64 - 32t \rangle $$
Magnificent! This single vector compactly describes the ball's motion at any given moment!

**Part b. The magnitude of its velocity at the highest point of its arc:**
At the highest point of its arc, the ball momentarily stops moving vertically. This means its vertical velocity component is zero.
So, we set $v_y(t) = 0$ to find the time it takes to reach the highest point:
$$ 64 - 32t = 0 $$
$$ 32t = 64 $$
$$ t = 2 \text{ seconds} $$
Now, we find the velocity vector at $t = 2$ seconds:
$$ \mathbf{v}(2) = \langle 10, 64 - 32(2) \rangle = \langle 10, 64 - 64 \rangle = \langle 10, 0 \rangle $$
The velocity vector at the highest point is $\langle 10, 0 \rangle \text{ ft/s}$.
The magnitude of this velocity is:
$$ ||\mathbf{v}(2)|| = \sqrt{(10)^2 + (0)^2} = \sqrt{100} = 10 \text{ ft/s} $$
So, at its highest point, the ball is still moving horizontally at $10 \text{ ft/s}$.

**Part c. The magnitude of its velocity just at the moment it hits the ground:**
First, we need to find the time when the ball hits the ground. Assuming initial height is $0$, the ball hits the ground when its vertical position $y(t) = 0$.
The vertical position equation is:
$$ y(t) = y_0 + v_{y0}t + \frac{1}{2}a_y t^2 $$
Given $y_0 = 0$:
$$ y(t) = 0 + 64t + \frac{1}{2}(-32)t^2 $$
$$ y(t) = 64t - 16t^2 $$
Set $y(t) = 0$ to find when it hits the ground:
$$ 64t - 16t^2 = 0 $$
$$ 16t(4 - t) = 0 $$
This gives two solutions: $t=0$ (initial launch) and $t=4$ seconds (when it hits the ground).
Now, substitute $t=4$ seconds into our velocity vector from Part a:
$$ \mathbf{v}(4) = \langle 10, 64 - 32(4) \rangle $$
$$ \mathbf{v}(4) = \langle 10, 64 - 128 \rangle $$
$$ \mathbf{v}(4) = \langle 10, -64 \rangle \text{ ft/s} $$
The velocity vector just before it hits the ground is $\langle 10, -64 \rangle \text{ ft/s}$.
Finally, find the magnitude of this velocity:
$$ ||\mathbf{v}(4)|| = \sqrt{(10)^2 + (-64)^2} $$
$$ ||\mathbf{v}(4)|| = \sqrt{100 + 4096} $$
$$ ||\mathbf{v}(4)|| = \sqrt{4196} $$
$$ ||\mathbf{v}(4)|| \approx 64.78 \text{ ft/s} $$
The speed (magnitude of velocity) just before impact is approximately $64.78 \text{ ft/s}$. What a fascinating interplay of forces!

---

#### Example 7: Determining Tension Force Vectors Using Trigonometry
A ten-pound weight (a force) is suspended from two ropes, as shown in Figure 10. The ropes are of different lengths, so the tensions (also forces) $\mathbf{T}_1$ and $\mathbf{T}_2$ in the ropes are unequal. Given the measured angles shown in the figure, determine the tension vectors.

**(Figure Description - in a lecture, this would be drawn or shown on a slide)**
*   A horizontal line (ceiling).
*   A weight of $10 \text{ lb}$ hanging below.
*   Two ropes connect the weight to the ceiling.
*   Rope 1 (left) makes an angle of $25^\circ$ with the ceiling.
*   Rope 2 (right) makes an angle of $60^\circ$ with the ceiling.

**Professor Farnsworth's Solution:**

Aha! An equilibrium problem! This is precisely why we need vectors – to analyze forces! The key here is that the system is *static*; the weight is not accelerating. This means the net force acting on the weight is zero!

Let's define our force vectors:
*   $\mathbf{W}$ is the force due to the weight, acting downwards.
    $$ \mathbf{W} = \langle 0, -10 \rangle \text{ lb} $$
*   $\mathbf{T}_1$ is the tension vector in the left rope.
*   $\mathbf{T}_2$ is the tension vector in the right rope.

We need to find the components of $\mathbf{T}_1$ and $\mathbf{T}_2$. Let $||\mathbf{T}_1||$ and $||\mathbf{T}_2||$ be the magnitudes of the tension forces.

First, let's establish the angles relative to the positive $x$-axis.
*   **For $\mathbf{T}_1$:** The angle shown is $25^\circ$ with the *ceiling*. This means the vector $\mathbf{T}_1$ makes an angle of $180^\circ - 25^\circ = 155^\circ$ with the positive $x$-axis.
    $$ \mathbf{T}_1 = \langle ||\mathbf{T}_1||\cos(155^\circ), ||\mathbf{T}_1||\sin(155^\circ) \rangle $$
*   **For $\mathbf{T}_2$:** The angle shown is $60^\circ$ with the *ceiling*. This means the vector $\mathbf{T}_2$ makes an angle of $60^\circ$ with the positive $x$-axis.
    $$ \mathbf{T}_2 = \langle ||\mathbf{T}_2||\cos(60^\circ), ||\mathbf{T}_2||\sin(60^\circ) \rangle $$

Now, for the equilibrium condition: The sum of all forces must be the zero vector:
$$ \mathbf{T}_1 + \mathbf{T}_2 + \mathbf{W} = \mathbf{0} $$
This gives us a system of two equations (one for $x$-components, one for $y$-components):

**x-components:**
$||\mathbf{T}_1||\cos(155^\circ) + ||\mathbf{T}_2||\cos(60^\circ) + 0 = 0$
$$ ||\mathbf{T}_1||\cos(155^\circ) + ||\mathbf{T}_2||\cos(60^\circ) = 0 \quad (1) $$

**y-components:**
$||\mathbf{T}_1||\sin(155^\circ) + ||\mathbf{T}_2||\sin(60^\circ) - 10 = 0$
$$ ||\mathbf{T}_1||\sin(155^\circ) + ||\mathbf{T}_2||\sin(60^\circ) = 10 \quad (2) $$

Let's approximate the trigonometric values:
*   $\cos(155^\circ) \approx -0.9063$
*   $\sin(155^\circ) \approx 0.4226$
*   $\cos(60^\circ) = 0.5$
*   $\sin(60^\circ) \approx 0.8660$

Substitute these values into the equations:
1.  $-0.9063||\mathbf{T}_1|| + 0.5||\mathbf{T}_2|| = 0$
2.  $0.4226||\mathbf{T}_1|| + 0.8660||\mathbf{T}_2|| = 10$

From equation (1), we can express $||\mathbf{T}_2||$ in terms of $||\mathbf{T}_1||$:
$0.5||\mathbf{T}_2|| = 0.9063||\mathbf{T}_1||$
$$ ||\mathbf{T}_2|| = \frac{0.9063}{0.5}||\mathbf{T}_1|| = 1.8126||\mathbf{T}_1|| $$
Now substitute this into equation (2):
$0.4226||\mathbf{T}_1|| + 0.8660(1.8126||\mathbf{T}_1||) = 10$
$0.4226||\mathbf{T}_1|| + 1.5701||\mathbf{T}_1|| = 10$
$1.9927||\mathbf{T}_1|| = 10$
$$ ||\mathbf{T}_1|| = \frac{10}{1.9927} \approx 5.018 \text{ lb} $$
Now find $||\mathbf{T}_2||$:
$$ ||\mathbf{T}_2|| = 1.8126 \times 5.018 \approx 9.096 \text{ lb} $$

Finally, we can write the tension vectors using these magnitudes:
$$ \mathbf{T}_1 = \langle 5.018 \cos(155^\circ), 5.018 \sin(155^\circ) \rangle \approx \langle 5.018(-0.9063), 5.018(0.4226) \rangle $$
$$ \mathbf{T}_1 \approx \langle -4.546, 2.121 \rangle \text{ lb} $$
$$ \mathbf{T}_2 = \langle 9.096 \cos(60^\circ), 9.096 \sin(60^\circ) \rangle \approx \langle 9.096(0.5), 9.096(0.8660) \rangle $$
$$ \mathbf{T}_2 \approx \langle 4.548, 7.877 \rangle \text{ lb} $$
(Note: Small discrepancies due to rounding of trig values.)
And there you have it! The tension forces resolved into their vector components! The laws of physics, elucidated by vectors!

---

#### Problem 39: Expressing a Vector as a Linear Combination
Express the vector $\mathbf{w}$ as a linear combination of $\mathbf{u}$ and $\mathbf{v}$.
(Hint: Using undetermined coefficients, start with the vector equation $\mathbf{w} = a\mathbf{u} + b\mathbf{v}$, and solve the resulting linear system.)
Given: $\mathbf{w} = \langle 1, 2 \rangle$; $\mathbf{u} = \langle 2, 3 \rangle$; $\mathbf{v} = \langle 0, 1 \rangle$.

**Professor Farnsworth's Solution:**

Ah, linear combinations! This is foundational to much of linear algebra and vector spaces. We want to find scalars $a$ and $b$ such that:
$$ \mathbf{w} = a\mathbf{u} + b\mathbf{v} $$
Substitute the given vectors:
$$ \langle 1, 2 \rangle = a\langle 2, 3 \rangle + b\langle 0, 1 \rangle $$
Perform the scalar multiplication:
$$ \langle 1, 2 \rangle = \langle 2a, 3a \rangle + \langle 0b, 1b \rangle $$
Perform the vector addition:
$$ \langle 1, 2 \rangle = \langle 2a + 0b, 3a + 1b \rangle $$
$$ \langle 1, 2 \rangle = \langle 2a, 3a + b \rangle $$
Now, equate the corresponding components to form a system of linear equations:
1.  $1 = 2a$
2.  $2 = 3a + b$

From equation (1), we can immediately solve for $a$:
$$ a = \frac{1}{2} $$
Substitute $a = \frac{1}{2}$ into equation (2):
$$ 2 = 3\left(\frac{1}{2}\right) + b $$
$$ 2 = \frac{3}{2} + b $$
$$ b = 2 - \frac{3}{2} $$
$$ b = \frac{4}{2} - \frac{3}{2} $$
$$ b = \frac{1}{2} $$
So, the scalars are $a = \frac{1}{2}$ and $b = \frac{1}{2}$.
Therefore, $\mathbf{w}$ can be expressed as a linear combination of $\mathbf{u}$ and $\mathbf{v}$:
$$ \mathbf{w} = \frac{1}{2}\mathbf{u} + \frac{1}{2}\mathbf{v} $$
Spectacular! We've shown how to decompose one vector into components along other specified vectors!

---

#### HW #86: Jetliner Flight with Headwind (Relative Velocity)
A jetliner flying at $600 \text{ mph}$ due west encounters an $80 \text{ mph}$ headwind that blows $30^\circ$ south of east. If the captain wants to keep both his ground speed and direction, how much increase in speed will be needed and in what direction should he steer the plane?

**(Figure Description)**
*   A compass rose (N, S, E, W).
*   An airplane pointing West, with "600 mph" next to it. This represents the *desired ground velocity*.
*   Wind blowing $30^\circ$ South of East, with "80 mph" next to it.

**Professor Farnsworth's Solution:**

This is a classic relative velocity problem, a perfect demonstration of vector addition! We have three vectors at play:
1.  **Desired Ground Velocity** ($\mathbf{v}_g$): The velocity of the plane relative to the ground that the captain *wants* to achieve.
2.  **Wind Velocity** ($\mathbf{v}_w$): The velocity of the wind relative to the ground.
3.  **Airspeed Velocity** ($\mathbf{v}_a$): The velocity of the plane relative to the air (what the plane's instruments measure). This is what the captain must *set* the plane's speed and direction to.

The vector relationship is:
$$ \mathbf{v}_g = \mathbf{v}_a + \mathbf{v}_w $$
We want to find $\mathbf{v}_a$, so we rearrange:
$$ \mathbf{v}_a = \mathbf{v}_g - \mathbf{v}_w $$

Let's represent these vectors in component form. We'll set up a coordinate system where East is the positive $x$-axis and North is the positive $y$-axis.

**1. Desired Ground Velocity ($\mathbf{v}_g$):**
*   Magnitude: $600 \text{ mph}$
*   Direction: Due West. This is $180^\circ$ from the positive $x$-axis (East).
$$ \mathbf{v}_g = \langle 600 \cos(180^\circ), 600 \sin(180^\circ) \rangle = \langle 600(-1), 600(0) \rangle = \langle -600, 0 \rangle $$

**2. Wind Velocity ($\mathbf{v}_w$):**
*   Magnitude: $80 \text{ mph}$
*   Direction: $30^\circ$ South of East. This means $30^\circ$ below the positive $x$-axis, so an angle of $-30^\circ$ or $330^\circ$.
$$ \mathbf{v}_w = \langle 80 \cos(-30^\circ), 80 \sin(-30^\circ) \rangle = \langle 80(\frac{\sqrt{3}}{2}), 80(-\frac{1}{2}) \rangle = \langle 40\sqrt{3}, -40 \rangle $$
Using approximations: $\sqrt{3} \approx 1.732$
$$ \mathbf{v}_w \approx \langle 40 \times 1.732, -40 \rangle = \langle 69.28, -40 \rangle $$

**3. Calculate Airspeed Velocity ($\mathbf{v}_a$):**
$$ \mathbf{v}_a = \mathbf{v}_g - \mathbf{v}_w $$
$$ \mathbf{v}_a = \langle -600, 0 \rangle - \langle 40\sqrt{3}, -40 \rangle $$
$$ \mathbf{v}_a = \langle -600 - 40\sqrt{3}, 0 - (-40) \rangle $$
$$ \mathbf{v}_a = \langle -600 - 40\sqrt{3}, 40 \rangle $$
Using approximations:
$$ \mathbf{v}_a \approx \langle -600 - 69.28, 40 \rangle = \langle -669.28, 40 \rangle $$

**a. How much increase in speed will be needed?**
This is the magnitude of $\mathbf{v}_a$.
$$ ||\mathbf{v}_a|| = \sqrt{(-600 - 40\sqrt{3})^2 + (40)^2} $$
$$ ||\mathbf{v}_a|| \approx \sqrt{(-669.28)^2 + (40)^2} $$
$$ ||\mathbf{v}_a|| \approx \sqrt{447975.6 + 1600} $$
$$ ||\mathbf{v}_a|| \approx \sqrt{449575.6} \approx 670.5 \text{ mph} $$
The pilot needs to achieve an airspeed of approximately $670.5 \text{ mph}$.
The original desired ground speed was $600 \text{ mph}$.
Increase in speed needed = $||\mathbf{v}_a|| - ||\mathbf{v}_g|| = 670.5 - 600 = 70.5 \text{ mph}$.

**b. In what direction should he steer the plane?**
This is the direction of $\mathbf{v}_a$. Let $\theta$ be the angle.
$$ \tan \theta = \frac{y_{\mathbf{v}_a}}{x_{\mathbf{v}_a}} = \frac{40}{-669.28} $$
$$ \tan \theta \approx -0.05977 $$
Since the $x$-component is negative and the $y$-component is positive, the vector is in the second quadrant.
$$ \theta = \arctan(-0.05977) \approx -3.42^\circ $$
This angle is measured from the negative $x$-axis. To get the standard angle:
$$ \theta_{actual} = 180^\circ - 3.42^\circ = 176.58^\circ $$
Alternatively, we can describe this as $3.42^\circ$ North of West.
So, the captain should steer the plane approximately $3.42^\circ$ North of West.

There you have it! The raw power of vector algebra to conquer the complexities of flight! Truly exhilarating!

---

### V. Practice & Reflection

Now, my brilliant students, to solidify your understanding, ponder these questions:

1.  What is the fundamental difference between a scalar quantity and a vector quantity? Provide an example of each from everyday life.
2.  Can two vectors be equal if they are in different locations in space? Explain why or why not.
3.  If you multiply a vector $\mathbf{v}$ by a scalar $c$ where $c < 0$, what happens to the magnitude and direction of the vector?
4.  Describe in your own words the "Triangle Rule" for vector addition. How does it relate to simply adding components?
5.  Why are unit vectors so useful in mathematics and physics? How do you find a unit vector in the direction of a given non-zero vector $\mathbf{u}$?

Keep experimenting with these concepts! Practice is the crucible where understanding is forged! Class dismissed! Now, if you'll excuse me, I have some nefarious plans to concoct... I mean, important research to conduct! Huzzah!