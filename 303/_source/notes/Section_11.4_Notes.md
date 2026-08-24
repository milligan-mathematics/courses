**Math 303: Multivariable Calculus**
**Section 11.4: The Cross Product**

***

Greetings, esteemed students of Milligan University Math 303! I am Professor Hubert J. Farnsworth, your friendly neighborhood math TA and pedagogical assistant. Good news, everyone! Today, we embark on a thrilling journey into the third dimension of vector operations: the **Cross Product**.

While the dot product gave us a scalar quantity related to the projection and "sameness" of vectors, the cross product, my dear scholars, grants us a brand-new **vector**! This wondrous new vector possesses truly remarkable geometric properties, allowing us to define normal vectors to planes, calculate areas of parallelograms and triangles, and even quantify the mysterious force known as torque. Prepare yourselves, for we are about to unlock another fundamental tool in our multivariable calculus arsenal!

***

### Core Concepts & Definitions

Let's begin by defining this marvel!

#### Definition: The Cross Product (Geometric Definition)

Given two nonparallel and nonzero vectors $\mathbf{u}$ and $\mathbf{v}$ in $\mathbb{R}^3$, the **cross product** of $\mathbf{u}$ and $\mathbf{v}$, denoted $\mathbf{u} \times \mathbf{v}$, is a vector with the following properties:

1.  **Magnitude:** The magnitude of $\mathbf{u} \times \mathbf{v}$ is given by:
    $$ |\mathbf{u} \times \mathbf{v}| = |\mathbf{u}| |\mathbf{v}| \sin\theta $$
    where $\theta$ is the angle between $\mathbf{u}$ and $\mathbf{v}$ such that $0 \le \theta \le \pi$.
    *   **Geometric Insight:** This magnitude represents the **area of the parallelogram** "spawned" (as Professor Lundholm so eloquently puts it) by vectors $\mathbf{u}$ and $\mathbf{v}$ when placed tail-to-tail.
    *   Sweet Zombie Jesus, it's a parallelogram!

2.  **Direction:** The vector $\mathbf{u} \times \mathbf{v}$ is perpendicular (orthogonal) to both $\mathbf{u}$ and $\mathbf{v}$. Its specific direction is determined by the **right-hand rule**.
    *   Imagine placing the vectors tail-to-tail. If you curl the fingers of your right hand from $\mathbf{u}$ to $\mathbf{v}$ (through the smaller angle $\theta$), your thumb points in the direction of $\mathbf{u} \times \mathbf{v}$. This is our unit vector $\mathbf{n}$.
    *   Thus, we can also write: $\mathbf{u} \times \mathbf{v} = (|\mathbf{u}| |\mathbf{v}| \sin\theta) \mathbf{n}$.

3.  **Special Case:** If $\mathbf{u}$ and $\mathbf{v}$ are parallel (i.e., $\theta = 0$ or $\theta = \pi$), or if either $\mathbf{u}$ or $\mathbf{v}$ is the zero vector, then $\sin\theta = 0$, and thus $\mathbf{u} \times \mathbf{v} = \mathbf{0}$. This makes sense, as parallel vectors cannot "spawn" a parallelogram with non-zero area!

#### Theorem: Properties of the Cross Product

Assuming $\mathbf{u}$, $\mathbf{v}$, and $\mathbf{w}$ are vectors in $\mathbb{R}^3$ and $a$ and $b$ are scalars, the following properties hold:

1.  **Anticommutative Property:**
    $$ \mathbf{u} \times \mathbf{v} = -(\mathbf{v} \times \mathbf{u}) $$
    (This means the order matters! Flipping the order reverses the direction of the resulting vector, as dictated by the right-hand rule.)

2.  **Scalar Multiplication (Associative with Scalar):**
    $$ (a\mathbf{u}) \times (b\mathbf{v}) = (ab)(\mathbf{u} \times \mathbf{v}) $$

3.  **Distributive Properties (Vector Addition):**
    $$ \mathbf{u} \times (\mathbf{v} + \mathbf{w}) = (\mathbf{u} \times \mathbf{v}) + (\mathbf{u} \times \mathbf{w}) \quad (\text{distributes from the left}) $$
    $$ (\mathbf{u} + \mathbf{v}) \times \mathbf{w} = (\mathbf{u} \times \mathbf{w}) + (\mathbf{v} \times \mathbf{w}) \quad (\text{distributes from the right}) $$

4.  **Scalar Triple Product Identity:**
    $$ \mathbf{u} \cdot (\mathbf{v} \times \mathbf{w}) = (\mathbf{u} \times \mathbf{v}) \cdot \mathbf{w} $$
    (More on this shortly, my little mathletes!)

5.  **Zero Vector Property:**
    $$ \mathbf{0} \times \mathbf{u} = \mathbf{0} $$

#### Theorem: The Cross Product Determinant Formula (Algebraic Definition)

While the geometric definition is powerful for understanding, for computational purposes, we usually rely on the algebraic definition involving a determinant!

Given $\mathbf{u} = \langle u_1, u_2, u_3 \rangle$ and $\mathbf{v} = \langle v_1, v_2, v_3 \rangle$, their cross product is:

$$ \mathbf{u} \times \mathbf{v} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \end{vmatrix} $$

Expanding this $3 \times 3$ determinant along the first row yields:

$$ \mathbf{u} \times \mathbf{v} = \left( u_2 v_3 - u_3 v_2 \right) \mathbf{i} - \left( u_1 v_3 - u_3 v_1 \right) \mathbf{j} + \left( u_1 v_2 - u_2 v_1 \right) \mathbf{k} $$

Or, in component form:
$$ \mathbf{u} \times \mathbf{v} = \langle u_2 v_3 - u_3 v_2, u_3 v_1 - u_1 v_3, u_1 v_2 - u_2 v_1 \rangle $$

**A note on the proof:** The full proof of this formula involves expanding $\mathbf{u} = u_1 \mathbf{i} + u_2 \mathbf{j} + u_3 \mathbf{k}$ and $\mathbf{v} = v_1 \mathbf{i} + v_2 \mathbf{j} + v_3 \mathbf{k}$ and then applying the distributive properties and the fundamental cross products of the standard unit vectors:

| $\times$ | $\mathbf{i}$ | $\mathbf{j}$ | $\mathbf{k}$ |
| :------- | :----------- | :----------- | :----------- |
| $\mathbf{i}$ | $\mathbf{0}$ | $\mathbf{k}$ | $-\mathbf{j}$ |
| $\mathbf{j}$ | $-\mathbf{k}$ | $\mathbf{0}$ | $\mathbf{i}$ |
| $\mathbf{k}$ | $\mathbf{j}$ | $-\mathbf{i}$ | $\mathbf{0}$ |

Notice the diagonal elements are $\mathbf{0}$ (since $\mathbf{i} \times \mathbf{i} = \mathbf{0}$, etc., as parallel vectors). The off-diagonal elements follow the cyclic permutation rule: $\mathbf{i} \times \mathbf{j} = \mathbf{k}$, $\mathbf{j} \times \mathbf{k} = \mathbf{i}$, $\mathbf{k} \times \mathbf{i} = \mathbf{j}$. Reversing the order gives the negative: $\mathbf{j} \times \mathbf{i} = -\mathbf{k}$, etc.

#### Definition: The Triple Scalar Product

The expression $\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w})$ is called the **triple scalar product** of $\mathbf{u}$, $\mathbf{v}$, and $\mathbf{w}$.

Given $\mathbf{u} = \langle u_1, u_2, u_3 \rangle$, $\mathbf{v} = \langle v_1, v_2, v_3 \rangle$, and $\mathbf{w} = \langle w_1, w_2, w_3 \rangle$, the triple scalar product can be computed using a $3 \times 3$ determinant:

$$ \mathbf{u} \cdot (\mathbf{v} \times \mathbf{w}) = \begin{vmatrix} u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \end{vmatrix} $$

*   **Geometric Insight:** The absolute value of the triple scalar product, $|\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w})|$, represents the **volume of the parallelepiped** (a 3D analogue of a parallelogram) formed by the three vectors $\mathbf{u}$, $\mathbf{v}$, and $\mathbf{w}$ when placed tail-to-tail. If the value is 0, the vectors are coplanar, meaning they lie in the same plane.

***

### Detailed Lecture & Worked Examples

Let's put these new tools to the test with some truly enlightening examples!

#### Example 1: Evaluating Cross Products Using Unit Vector Properties

Simplify each of the following cross products.

a.  $\mathbf{i} \times \mathbf{k}$
b.  $\mathbf{i} \times (-\mathbf{k})$
c.  $\mathbf{i} \times (\mathbf{j} + \mathbf{k})$
d.  $(3\mathbf{i}) \times (-2\mathbf{k})$

**Solution:**

a.  Using the unit vector cross product table, $\mathbf{i} \times \mathbf{k} = -\mathbf{j}$.
    *   *Interpretation:* Curling fingers from $\mathbf{i}$ (positive x-axis) to $\mathbf{k}$ (positive z-axis) with the right hand points the thumb in the negative y-axis direction.

b.  Using the scalar multiplication property:
    $\mathbf{i} \times (-\mathbf{k}) = (-1)(\mathbf{i} \times \mathbf{k})$
    We know $\mathbf{i} \times \mathbf{k} = -\mathbf{j}$, so:
    $(-1)(-\mathbf{j}) = \mathbf{j}$.

c.  Using the distributive property:
    $\mathbf{i} \times (\mathbf{j} + \mathbf{k}) = (\mathbf{i} \times \mathbf{j}) + (\mathbf{i} \times \mathbf{k})$
    From the table: $\mathbf{i} \times \mathbf{j} = \mathbf{k}$ and $\mathbf{i} \times \mathbf{k} = -\mathbf{j}$.
    So, $\mathbf{i} \times (\mathbf{j} + \mathbf{k}) = \mathbf{k} - \mathbf{j} = \langle 0, -1, 1 \rangle$.

d.  Using the scalar multiplication property:
    $(3\mathbf{i}) \times (-2\mathbf{k}) = (3)(-2)(\mathbf{i} \times \mathbf{k})$
    $= -6(-\mathbf{j})$
    $= 6\mathbf{j} = \langle 0, 6, 0 \rangle$.

Excellent work, brainiacs! These basic manipulations are crucial.

#### Example 2: Using the Cross Product Determinant Formula

Calculate the cross product of $\mathbf{u} = \langle -2, 5, 1 \rangle$ and $\mathbf{v} = \langle 1, 3, -1 \rangle$.

**Solution:**

We set up the determinant:
$$ \mathbf{u} \times \mathbf{v} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ -2 & 5 & 1 \\ 1 & 3 & -1 \end{vmatrix} $$

Now, expand along the first row:
$= \mathbf{i} \begin{vmatrix} 5 & 1 \\ 3 & -1 \end{vmatrix} - \mathbf{j} \begin{vmatrix} -2 & 1 \\ 1 & -1 \end{vmatrix} + \mathbf{k} \begin{vmatrix} -2 & 5 \\ 1 & 3 \end{vmatrix}$

Calculate each $2 \times 2$ determinant:
*   $\begin{vmatrix} 5 & 1 \\ 3 & -1 \end{vmatrix} = (5)(-1) - (1)(3) = -5 - 3 = -8$
*   $\begin{vmatrix} -2 & 1 \\ 1 & -1 \end{vmatrix} = (-2)(-1) - (1)(1) = 2 - 1 = 1$
*   $\begin{vmatrix} -2 & 5 \\ 1 & 3 \end{vmatrix} = (-2)(3) - (5)(1) = -6 - 5 = -11$

Substitute these values back:
$= \mathbf{i}(-8) - \mathbf{j}(1) + \mathbf{k}(-11)$
$= -8\mathbf{i} - \mathbf{j} - 11\mathbf{k}$

In component form:
$\mathbf{u} \times \mathbf{v} = \langle -8, -1, -11 \rangle$.

Fascinating! The resulting vector is indeed orthogonal to both $\mathbf{u}$ and $\mathbf{v}$ (you can check this with the dot product: $\mathbf{u} \cdot (\mathbf{u} \times \mathbf{v}) = 0$ and $\mathbf{v} \cdot (\mathbf{u} \times \mathbf{v}) = 0$).

#### Example 3: Constructing a Vector Normal to a Plane Defined by Three Points

Construct a vector normal to the plane containing the three points $P(-2,1,3)$, $Q(4,-3,1)$, and $R(5,5,3)$.

**Solution:**

To find a vector normal to a plane, we first need two non-parallel vectors that lie *within* that plane. We can form these vectors by taking the difference between the given points.

Let's form $\vec{PQ}$ and $\vec{PR}$:
$\vec{PQ} = Q - P = \langle 4 - (-2), -3 - 1, 1 - 3 \rangle = \langle 6, -4, -2 \rangle$
$\vec{PR} = R - P = \langle 5 - (-2), 5 - 1, 3 - 3 \rangle = \langle 7, 4, 0 \rangle$

Now, the cross product of these two vectors will yield a vector that is normal to both $\vec{PQ}$ and $\vec{PR}$, and thus normal to the plane containing them!

$$ \mathbf{n} = \vec{PQ} \times \vec{PR} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 6 & -4 & -2 \\ 7 & 4 & 0 \end{vmatrix} $$

Expand the determinant:
$= \mathbf{i} \begin{vmatrix} -4 & -2 \\ 4 & 0 \end{vmatrix} - \mathbf{j} \begin{vmatrix} 6 & -2 \\ 7 & 0 \end{vmatrix} + \mathbf{k} \begin{vmatrix} 6 & -4 \\ 7 & 4 \end{vmatrix}$

Calculate the $2 \times 2$ determinants:
*   $\begin{vmatrix} -4 & -2 \\ 4 & 0 \end{vmatrix} = (-4)(0) - (-2)(4) = 0 - (-8) = 8$
*   $\begin{vmatrix} 6 & -2 \\ 7 & 0 \end{vmatrix} = (6)(0) - (-2)(7) = 0 - (-14) = 14$
*   $\begin{vmatrix} 6 & -4 \\ 7 & 4 \end{vmatrix} = (6)(4) - (-4)(7) = 24 - (-28) = 24 + 28 = 52$

So, the normal vector is:
$\mathbf{n} = 8\mathbf{i} - 14\mathbf{j} + 52\mathbf{k} = \langle 8, -14, 52 \rangle$.

This vector is perpendicular to the plane containing $P, Q,$ and $R$. Remarkable!

#### Example 4: Using the Cross Product Formula for Area of a Parallelogram

The two vectors $\mathbf{u} = \langle 3, -1 \rangle$ and $\mathbf{v} = \langle 4, 2 \rangle$ are used to construct a parallelogram. Find its area.

**Solution:**

The geometric definition states that the magnitude of the cross product gives the area of the parallelogram "spawned" by two vectors. However, the cross product is only defined for vectors in $\mathbb{R}^3$.

To use the cross product for 2D vectors, we embed them in the $xy$-plane of $\mathbb{R}^3$ by adding a $z$-component of $0$:
Let $\mathbf{u}^* = \langle 3, -1, 0 \rangle$ and $\mathbf{v}^* = \langle 4, 2, 0 \rangle$.

Now, calculate their cross product:
$$ \mathbf{u}^* \times \mathbf{v}^* = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 3 & -1 & 0 \\ 4 & 2 & 0 \end{vmatrix} $$

Expand the determinant:
$= \mathbf{i} \begin{vmatrix} -1 & 0 \\ 2 & 0 \end{vmatrix} - \mathbf{j} \begin{vmatrix} 3 & 0 \\ 4 & 0 \end{vmatrix} + \mathbf{k} \begin{vmatrix} 3 & -1 \\ 4 & 2 \end{vmatrix}$

*   $\begin{vmatrix} -1 & 0 \\ 2 & 0 \end{vmatrix} = (-1)(0) - (0)(2) = 0$
*   $\begin{vmatrix} 3 & 0 \\ 4 & 0 \end{vmatrix} = (3)(0) - (0)(4) = 0$
*   $\begin{vmatrix} 3 & -1 \\ 4 & 2 \end{vmatrix} = (3)(2) - (-1)(4) = 6 - (-4) = 10$

So, $\mathbf{u}^* \times \mathbf{v}^* = 0\mathbf{i} - 0\mathbf{j} + 10\mathbf{k} = \langle 0, 0, 10 \rangle$.

The area of the parallelogram is the magnitude of this resulting vector:
Area $= |\mathbf{u}^* \times \mathbf{v}^*| = |\langle 0, 0, 10 \rangle| = \sqrt{0^2 + 0^2 + 10^2} = \sqrt{100} = 10$ square units.

**Professor Lundholm's Insight for 2D vectors:**
For 2D vectors $\mathbf{u} = \langle u_1, u_2 \rangle$ and $\mathbf{v} = \langle v_1, v_2 \rangle$, the area of the parallelogram can also be found using the $2 \times 2$ determinant:
Area $= \left| \det \begin{pmatrix} u_1 & v_1 \\ u_2 & v_2 \end{pmatrix} \right| = |u_1 v_2 - u_2 v_1|$.

Notice how this matches the $\mathbf{k}$-component of our $\mathbb{R}^3$ cross product! For $\mathbf{u} = \langle 3, -1 \rangle$ and $\mathbf{v} = \langle 4, 2 \rangle$:
Area $= |(3)(2) - (-1)(4)| = |6 - (-4)| = |10| = 10$ square units.
This is a neat shortcut for 2D areas, directly emerging from the 3D cross product. To the math-mobile!

#### Example 5: Using a Cross Product to Find the Area of a Triangle

Find the area of the triangle whose vertices are the origin $O(0,0,0)$, $A(3,-1,5)$, and $B(4,2,-2)$.

**Solution:**

A triangle formed by three points (with one point often being the origin for convenience) can be thought of as half of a parallelogram formed by two vectors originating from a common vertex.

Let $\mathbf{u} = \vec{OA} = A - O = \langle 3, -1, 5 \rangle$
Let $\mathbf{v} = \vec{OB} = B - O = \langle 4, 2, -2 \rangle$

First, calculate the cross product $\mathbf{u} \times \mathbf{v}$:
$$ \mathbf{u} \times \mathbf{v} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 3 & -1 & 5 \\ 4 & 2 & -2 \end{vmatrix} $$

Expand the determinant:
$= \mathbf{i} \begin{vmatrix} -1 & 5 \\ 2 & -2 \end{vmatrix} - \mathbf{j} \begin{vmatrix} 3 & 5 \\ 4 & -2 \end{vmatrix} + \mathbf{k} \begin{vmatrix} 3 & -1 \\ 4 & 2 \end{vmatrix}$

Calculate the $2 \times 2$ determinants:
*   $\begin{vmatrix} -1 & 5 \\ 2 & -2 \end{vmatrix} = (-1)(-2) - (5)(2) = 2 - 10 = -8$
*   $\begin{vmatrix} 3 & 5 \\ 4 & -2 \end{vmatrix} = (3)(-2) - (5)(4) = -6 - 20 = -26$
*   $\begin{vmatrix} 3 & -1 \\ 4 & 2 \end{vmatrix} = (3)(2) - (-1)(4) = 6 - (-4) = 10$

So, $\mathbf{u} \times \mathbf{v} = -8\mathbf{i} - (-26)\mathbf{j} + 10\mathbf{k} = \langle -8, 26, 10 \rangle$.

The area of the parallelogram formed by $\mathbf{u}$ and $\mathbf{v}$ is the magnitude of this vector:
Area of parallelogram $= |\mathbf{u} \times \mathbf{v}| = |\langle -8, 26, 10 \rangle| = \sqrt{(-8)^2 + (26)^2 + (10)^2}$
$= \sqrt{64 + 676 + 100} = \sqrt{840}$

The area of the triangle is half the area of the parallelogram:
Area of triangle $= \frac{1}{2} |\mathbf{u} \times \mathbf{v}| = \frac{1}{2} \sqrt{840} = \frac{1}{2} \sqrt{4 \cdot 210} = \frac{1}{2} \cdot 2\sqrt{210} = \sqrt{210}$ square units.

Approximately, $\sqrt{210} \approx 14.49$ square units.
By Jove, that's efficient!

#### Example 6: Using the Triple Scalar Product Formula for Volume of a Parallelepiped

Find the volume of the parallelepiped defined by the vectors $\mathbf{u} = \langle -3, -1, 1 \rangle$, $\mathbf{v} = \langle 2, 0, 1 \rangle$, and $\mathbf{w} = \langle 4, 1, -2 \rangle$.

**Solution:**

The volume of the parallelepiped is given by the absolute value of the triple scalar product: $|\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w})|$. We can calculate this directly using the $3 \times 3$ determinant:

$$ \text{Volume} = \left| \begin{vmatrix} -3 & -1 & 1 \\ 2 & 0 & 1 \\ 4 & 1 & -2 \end{vmatrix} \right| $$

Let's expand this determinant along the first row:
$= -3 \begin{vmatrix} 0 & 1 \\ 1 & -2 \end{vmatrix} - (-1) \begin{vmatrix} 2 & 1 \\ 4 & -2 \end{vmatrix} + 1 \begin{vmatrix} 2 & 0 \\ 4 & 1 \end{vmatrix}$

Calculate the $2 \times 2$ determinants:
*   $\begin{vmatrix} 0 & 1 \\ 1 & -2 \end{vmatrix} = (0)(-2) - (1)(1) = 0 - 1 = -1$
*   $\begin{vmatrix} 2 & 1 \\ 4 & -2 \end{vmatrix} = (2)(-2) - (1)(4) = -4 - 4 = -8$
*   $\begin{vmatrix} 2 & 0 \\ 4 & 1 \end{vmatrix} = (2)(1) - (0)(4) = 2 - 0 = 2$

Substitute these values back:
$= -3(-1) - (-1)(-8) + 1(2)$
$= 3 - 8 + 2$
$= -3$

Since volume must be a positive quantity, we take the absolute value:
Volume $= |-3| = 3$ cubic units.

Simply marvelous! The ability to derive a volume from three vectors is truly a testament to the power of vector calculus!

#### Example 7: Using a Cross Product to Find the Torque Generated by a Wrench

A bolt is tightened by a wrench supplying 20 pounds of force at an angle of $\theta = 75^\circ$. The length of the wrench (the moment arm) is 1 foot. How much torque is applied to the bolt at the pivot point?

**Solution:**

In physics, **torque** ($\boldsymbol{\tau}$) is a measure of the force that can cause an object to rotate about an axis. It is defined as the cross product of the position vector $\mathbf{r}$ (from the pivot point to the point where the force is applied) and the force vector $\mathbf{F}$:
$$ \boldsymbol{\tau} = \mathbf{r} \times \mathbf{F} $$
The magnitude of the torque is given by:
$$ |\boldsymbol{\tau}| = |\mathbf{r}| |\mathbf{F}| \sin\theta $$

Given:
*   Length of wrench (magnitude of position vector) $|\mathbf{r}| = 1 \text{ foot}$
*   Magnitude of force $|\mathbf{F}| = 20 \text{ pounds}$
*   Angle between $\mathbf{r}$ and $\mathbf{F}$ is $\theta = 75^\circ$

Substitute these values into the formula:
$|\boldsymbol{\tau}| = (1 \text{ ft}) (20 \text{ lbs}) \sin(75^\circ)$
$|\boldsymbol{\tau}| \approx 20 \cdot (0.9659)$
$|\boldsymbol{\tau}| \approx 19.32 \text{ ft-lbs}$

The direction of the torque vector is determined by the right-hand rule. If tightening a bolt (clockwise turn), the torque vector typically points "into" the page (or into the bolt). For loosening (counter-clockwise), it points "out" of the page. This tells us the axis of rotation! Ingenious!

#### Professor Lundholm's Challenge: Equation of a Plane

Let's tackle Professor Lundholm's bonus problem from the notes, which is a common application of finding normal vectors.

**Problem:** Find the equation of the plane through the points $A(-5,0,4)$, $B(2,2,2)$, and $C(6,-1,3)$.

**Solution:**

To find the equation of a plane, we need two things:
1.  A **point** on the plane (we have three to choose from!).
2.  A **normal vector** to the plane.

We can find a normal vector by taking the cross product of two vectors that lie in the plane. Let's form vectors $\vec{AB}$ and $\vec{AC}$:

$\vec{AB} = B - A = \langle 2 - (-5), 2 - 0, 2 - 4 \rangle = \langle 7, 2, -2 \rangle$
$\vec{AC} = C - A = \langle 6 - (-5), -1 - 0, 3 - 4 \rangle = \langle 11, -1, -1 \rangle$

Now, calculate the normal vector $\mathbf{n} = \vec{AB} \times \vec{AC}$:
$$ \mathbf{n} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 7 & 2 & -2 \\ 11 & -1 & -1 \end{vmatrix} $$

Expand the determinant:
$= \mathbf{i} \begin{vmatrix} 2 & -2 \\ -1 & -1 \end{vmatrix} - \mathbf{j} \begin{vmatrix} 7 & -2 \\ 11 & -1 \end{vmatrix} + \mathbf{k} \begin{vmatrix} 7 & 2 \\ 11 & -1 \end{vmatrix}$

Calculate the $2 \times 2$ determinants:
*   $\begin{vmatrix} 2 & -2 \\ -1 & -1 \end{vmatrix} = (2)(-1) - (-2)(-1) = -2 - 2 = -4$
*   $\begin{vmatrix} 7 & -2 \\ 11 & -1 \end{vmatrix} = (7)(-1) - (-2)(11) = -7 - (-22) = -7 + 22 = 15$
*   $\begin{vmatrix} 7 & 2 \\ 11 & -1 \end{vmatrix} = (7)(-1) - (2)(11) = -7 - 22 = -29$

So, the normal vector is $\mathbf{n} = -4\mathbf{i} - 15\mathbf{j} - 29\mathbf{k} = \langle -4, -15, -29 \rangle$.

Now, we use the equation of a plane: $\mathbf{n} \cdot (\mathbf{x} - \mathbf{P_0}) = 0$, where $\mathbf{P_0}$ is a point on the plane and $\mathbf{x} = \langle x, y, z \rangle$. Let's use point $A(-5,0,4)$ as $\mathbf{P_0}$.

$\langle -4, -15, -29 \rangle \cdot \langle x - (-5), y - 0, z - 4 \rangle = 0$
$\langle -4, -15, -29 \rangle \cdot \langle x + 5, y, z - 4 \rangle = 0$

$-4(x + 5) - 15(y) - 29(z - 4) = 0$
$-4x - 20 - 15y - 29z + 116 = 0$
$-4x - 15y - 29z + 96 = 0$

For neatness, we can multiply by $-1$:
$4x + 15y + 29z - 96 = 0$.

This is the equation of the plane! Isn't that just a grand demonstration of the cross product's utility?

***

### Practice & Reflection

Now, for a few thought-provoking questions to solidify your understanding. Don't worry, these won't cause temporal paradoxes!

1.  **Conceptual Check-in:** Explain, in your own words, why the cross product of two parallel vectors is always the zero vector. How does this relate to the geometric definition and the algebraic determinant formula?
2.  **Right-Hand Rule Reasoning:** If $\mathbf{a} \times \mathbf{b} = \mathbf{c}$, what is the value of $\mathbf{b} \times \mathbf{a}$? How about $(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{a}$? Explain your reasoning.
3.  **Application Scenario:** You are designing a robotic arm. If the arm extends along the vector $\mathbf{r} = \langle 1, 2, 0 \rangle$ meters, and you apply a force $\mathbf{F} = \langle 0, 5, 0 \rangle$ Newtons at the end of the arm, what is the torque vector generated? What is its magnitude? What direction does it point? (Assume standard $\mathbf{i}, \mathbf{j}, \mathbf{k}$ directions correspond to x, y, z axes).

Keep pondering these concepts, for mastery is the reward for diligence! Until next time, stay curious, and keep those brains bubbling with mathematical delight!