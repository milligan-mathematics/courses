Good news, everyone! Professor Farnsworth here, your esteemed Milligan University Math 303 TA and pedagogical assistant! Prepare yourselves for an exciting journey into the three-dimensional wonders of **Section 11.5: Describing Lines and Planes**.

Today, we're not just doodling on flat surfaces anymore! We're venturing into the glorious realm of $R^3$, where points become vectors, lines traverse space with direction, and planes slice through everything with a defined orientation. Understanding lines and planes is absolutely fundamental, not just for multivariable calculus, but for everything from robotics and computer graphics to astrophysics and designing a new doomsday device! (Just kidding... mostly.)

We'll learn how to represent these geometric objects using the power of vectors and equations, how to find where they intersect (or don't!), and even how to measure the distances between them. So, grab your pens, activate your brain-cells, and let's get started on this magnificent mathematical adventure!

***

### Core Concepts & Definitions

Let's start by laying down the foundational mathematical bedrock for our spatial explorations.

#### 1. Lines in Space

A line in three-dimensional space ($R^3$) is uniquely determined by two pieces of information:
1.  A point $P_0(x_0, y_0, z_0)$ that lies on the line.
2.  A vector $\vec{v} = \langle a, b, c \rangle$ that gives the direction of the line (it's parallel to the line).

With these, we can describe any point $P(x,y,z)$ on the line. Imagine starting at $P_0$ and then moving some scalar multiple $t$ along the direction vector $\vec{v}$.

**Definition: Vector Form and Parametric Form of a Line**
The vector form for the line $L$ containing the point $P_0(x_0, y_0, z_0)$ and parallel to the direction vector $\vec{v} = \langle a,b,c \rangle$ is:
$$ \vec{r}(t) = \vec{r_0} + t\vec{v} = \langle x_0, y_0, z_0 \rangle + t\langle a,b,c \rangle, \quad -\infty < t < \infty $$
Here, $\vec{r_0}$ is the position vector of the point $P_0$.

If we let $\langle x, y, z \rangle$ denote the components of $\vec{r}(t)$, then we can equate the components to get the **parametric equations** of the line $L$:
$$ x = x_0 + at $$
$$ y = y_0 + bt $$
$$ z = z_0 + ct $$
where $t$ is the parameter, often thought of as time, tracing out the line.

#### 2. Planes in Space

A plane in $R^3$ is also uniquely determined by two pieces of information:
1.  A point $P_0(x_0, y_0, z_0)$ that lies in the plane.
2.  A vector $\vec{n} = \langle a, b, c \rangle$ that is normal (perpendicular) to the plane.

**Definition: Equation for a Plane with a Known Normal Vector**
If the vector $\vec{n} = \langle a,b,c \rangle$ is normal to a given plane, and if the point $P_0(x_0, y_0, z_0)$ lies in the plane, then any point $P(x, y, z)$ in the plane must satisfy the vector equation:
$$ \vec{n} \cdot (\vec{r} - \vec{r_0}) = 0 $$
where $\vec{r} = \langle x,y,z \rangle$ is the position vector of a general point $P$ on the plane, and $\vec{r_0} = \langle x_0, y_0, z_0 \rangle$ is the position vector of the known point $P_0$ on the plane. The vector $\vec{r} - \vec{r_0}$ lies entirely within the plane.

In scalar form, this becomes the **scalar equation of the plane**:
$$ a(x - x_0) + b(y - y_0) + c(z - z_0) = 0 $$
Expanding this, we get the **general linear equation of a plane**:
$$ ax + by + cz = d $$
where $d = ax_0 + by_0 + cz_0$. Notice that the coefficients $a,b,c$ in the general linear equation are precisely the components of the normal vector $\vec{n}$. Ingenious!

***

### Detailed Lecture & Worked Examples

Now, let's put these magnificent definitions to work with some fully-fledged examples! Don't just watch; follow along with your own calculations!

#### Example 1: Constructing Position Vectors to Describe a Line
*Problem:* Construct position vectors describing the points making up the line $L$ passing through $A(4,2,-1)$ and $B(1,2,3)$.

*Professor Farnsworth's Solution Plan:*
1.  **Make a direction vector:** A line's direction can be found by taking the vector between any two points on it. Let's use $\vec{AB}$.
2.  **Write the line in parametric/vector form:** Once we have a point and a direction vector, we can directly apply our definition.

*Solution:*
1.  **Find the direction vector $\vec{v}$**:
    We can use the points $A(4,2,-1)$ and $B(1,2,3)$. Let $\vec{v} = \vec{AB}$.
    $$ \vec{v} = \vec{B} - \vec{A} = \langle 1-4, 2-2, 3-(-1) \rangle = \langle -3, 0, 4 \rangle $$
    This vector $\langle -3, 0, 4 \rangle$ tells us the direction the line is headed.

2.  **Write the vector form and parametric equations**:
    We need a point on the line. We can use either $A$ or $B$. Let's use $A(4,2,-1)$, so $\vec{r_0} = \langle 4,2,-1 \rangle$.
    Using the vector form $\vec{r}(t) = \vec{r_0} + t\vec{v}$:
    $$ \vec{r}(t) = \langle 4,2,-1 \rangle + t\langle -3,0,4 \rangle $$
    $$ \vec{r}(t) = \langle 4-3t, 2+0t, -1+4t \rangle $$
    $$ \vec{r}(t) = \langle 4-3t, 2, -1+4t \rangle $$
    The corresponding parametric equations are:
    $$ x(t) = 4-3t $$
    $$ y(t) = 2 $$
    $$ z(t) = -1+4t $$
    This describes all points $(x,y,z)$ on the line $L$ for any real value of $t$. Phenomenal!

---

#### Example 2: Finding the Vector Form and Parametric Equations of a Line
*Problem:* Find both the vector form and the parametric equations of the line parallel to the direction vector $3\mathbf{i} - \mathbf{j} + 2\mathbf{k}$ and passing through the point $(-7,2,5)$.

*Professor Farnsworth's Solution Plan:*
This is a direct application of the definitions. We are given a point and a direction vector!

*Solution:*
1.  **Identify the given information**:
    *   Point $P_0 = (-7,2,5)$, so $\vec{r_0} = \langle -7,2,5 \rangle$.
    *   Direction vector $\vec{v} = 3\mathbf{i} - \mathbf{j} + 2\mathbf{k} = \langle 3,-1,2 \rangle$.

2.  **Write the vector form**:
    Using $\vec{r}(t) = \vec{r_0} + t\vec{v}$:
    $$ \vec{r}(t) = \langle -7,2,5 \rangle + t\langle 3,-1,2 \rangle $$
    $$ \vec{r}(t) = \langle -7+3t, 2-t, 5+2t \rangle $$

3.  **Write the parametric equations**:
    Equating the components from the vector form:
    $$ x(t) = -7+3t $$
    $$ y(t) = 2-t $$
    $$ z(t) = 5+2t $$
    And there you have it! Simplicity itself!

---

#### Example 3: Finding the Points of Intersection of a Line with the Coordinate Planes
*Problem:* Determine the points of intersection of the line $\vec{r}(t) = \langle 4-3t, 2, -1+4t \rangle$ with the three coordinate planes.

*Professor Farnsworth's Solution Plan:*
The coordinate planes are defined by setting one coordinate to zero:
*   The $xy$-plane has $z=0$.
*   The $xz$-plane has $y=0$.
*   The $yz$-plane has $x=0$.
For each case, we'll set the appropriate component of $\vec{r}(t)$ to zero and solve for $t$. Then, we'll substitute that value of $t$ back into $\vec{r}(t)$ to find the intersection point.

*Solution:*
The parametric equations for the line are:
$x(t) = 4-3t$
$y(t) = 2$
$z(t) = -1+4t$

1.  **Intersection with the $yz$-plane (where $x=0$)**:
    Set the $x$-component to zero:
    $$ 4-3t = 0 $$
    $$ 4 = 3t $$
    $$ t = \frac{4}{3} $$
    Now substitute $t = \frac{4}{3}$ back into the parametric equations:
    $x\left(\frac{4}{3}\right) = 4 - 3\left(\frac{4}{3}\right) = 4 - 4 = 0$
    $y\left(\frac{4}{3}\right) = 2$
    $z\left(\frac{4}{3}\right) = -1 + 4\left(\frac{4}{3}\right) = -1 + \frac{16}{3} = -\frac{3}{3} + \frac{16}{3} = \frac{13}{3}$
    The point of intersection with the $yz$-plane is $\left(0, 2, \frac{13}{3}\right)$.

2.  **Intersection with the $xz$-plane (where $y=0$)**:
    Set the $y$-component to zero:
    $$ 2 = 0 $$
    This is a contradiction! $2$ is never equal to $0$.
    This means the line is parallel to the $xz$-plane and never intersects it. In fact, since $y(t)=2$ for all $t$, the entire line lies in the plane $y=2$, which is parallel to the $xz$-plane (the plane $y=0$). So, there is **no solution** for this case.

3.  **Intersection with the $xy$-plane (where $z=0$)**:
    Set the $z$-component to zero:
    $$ -1+4t = 0 $$
    $$ 4t = 1 $$
    $$ t = \frac{1}{4} $$
    Now substitute $t = \frac{1}{4}$ back into the parametric equations:
    $x\left(\frac{1}{4}\right) = 4 - 3\left(\frac{1}{4}\right) = \frac{16}{4} - \frac{3}{4} = \frac{13}{4}$
    $y\left(\frac{1}{4}\right) = 2$
    $z\left(\frac{1}{4}\right) = -1 + 4\left(\frac{1}{4}\right) = -1 + 1 = 0$
    The point of intersection with the $xy$-plane is $\left(\frac{13}{4}, 2, 0\right)$.

    *Remarkable!* We found two points of intersection and one case of no intersection. A truly stimulating outcome!

---

#### Example 4: Finding the Point of Intersection of Two Lines
*Problem:* Determine the point of intersection of each of the following pairs of lines, if possible.
a. $\vec{r}(u) = \langle 2+3u, -1-u, 2u \rangle$ and $\vec{s}(v) = \langle 7+2v, -3-v, 1-v \rangle$
b. $\vec{r}(u) = \langle 2-u, 3+2u, 2+u \rangle$ and $\vec{s}(v) = \langle 2v, 4-v, 2-v \rangle$

*Professor Farnsworth's Solution Plan:*
To find the intersection of two lines, we must find values for their parameters (here, $u$ and $v$) that yield the same point $(x,y,z)$.
1.  **Set components equal:** Equate the corresponding $x, y, z$ components of the two vector equations.
2.  **Solve the system:** This will give us a system of three equations with two unknowns ($u$ and $v$). We only need two of these equations to solve for $u$ and $v$.
3.  **Check for consistency:** Plug the values of $u$ and $v$ back into the *third* equation. If it holds, the lines intersect. If not, they are skew (non-intersecting and non-parallel).
4.  **Find the intersection point:** Substitute the found $u$ (or $v$) back into its respective line equation.

*Solution a:*
Lines are:
$\vec{r}(u) = \langle 2+3u, -1-u, 2u \rangle$
$\vec{s}(v) = \langle 7+2v, -3-v, 1-v \rangle$

1.  **Set components equal:**
    (1) $2+3u = 7+2v$
    (2) $-1-u = -3-v$
    (3) $2u = 1-v$

2.  **Solve the system:**
    From equation (2), we can express $v$ in terms of $u$:
    $-1-u = -3-v \implies v = u-2$ (Error in Lundholm's notes $v = 1-u$ from $(2) \implies -1-u = -3-v \implies v = u-2$ and from $(3) \implies v = 1-2u$. I will follow the handwritten notes method for now, but correct it if it leads to inconsistency. Lundholm got $2u=1-v \implies 2u=1-(1-u) \implies 2u=u \implies u=0$. This is a potential mistake in the notes transcription or derivation. Let's re-derive carefully.)

    Let's use (2) and (3) to solve for $u$ and $v$.
    From (2): $v = u - 2$
    Substitute this into (3):
    $2u = 1 - (u - 2)$
    $2u = 1 - u + 2$
    $2u = 3 - u$
    $3u = 3$
    $u = 1$

    Now find $v$ using $v = u - 2$:
    $v = 1 - 2 = -1$

3.  **Check for consistency with equation (1):**
    Substitute $u=1$ and $v=-1$ into equation (1):
    $2+3(1) = 7+2(-1)$
    $2+3 = 7-2$
    $5 = 5$
    The equation holds! Thus, the lines intersect.

4.  **Find the intersection point:**
    Substitute $u=1$ into $\vec{r}(u)$:
    $\vec{r}(1) = \langle 2+3(1), -1-(1), 2(1) \rangle = \langle 5, -2, 2 \rangle$
    (Alternatively, substitute $v=-1$ into $\vec{s}(v)$ to verify):
    $\vec{s}(-1) = \langle 7+2(-1), -3-(-1), 1-(-1) \rangle = \langle 7-2, -3+1, 1+1 \rangle = \langle 5, -2, 2 \rangle$

    The point of intersection is $(5, -2, 2)$. Splendid!

*Solution b:*
Lines are:
$\vec{r}(u) = \langle 2-u, 3+2u, 2+u \rangle$
$\vec{s}(v) = \langle 2v, 4-v, 2-v \rangle$

1.  **Set components equal:**
    (1) $2-u = 2v$
    (2) $3+2u = 4-v$
    (3) $2+u = 2-v$

2.  **Solve the system:**
    Let's use (1) and (3).
    From (1): $u = 2 - 2v$
    Substitute this into (3):
    $2 + (2 - 2v) = 2 - v$
    $4 - 2v = 2 - v$
    $2 = v$

    Now find $u$ using $u = 2 - 2v$:
    $u = 2 - 2(2) = 2 - 4 = -2$

3.  **Check for consistency with equation (2):**
    Substitute $u=-2$ and $v=2$ into equation (2):
    $3+2(-2) = 4-(2)$
    $3-4 = 2$
    $-1 = 2$
    This is a contradiction! $-1 \neq 2$.
    Therefore, the lines **do not intersect**. They are skew lines – neither parallel nor intersecting. Such a fascinating geometrical arrangement!

---

#### Example 5: Finding Equations for a Plane Given a Point and a Normal Vector
*Problem:* Find a vector equation and a scalar equation for the plane containing the point $(-3,1,5)$ and having $\vec{n} = \langle 2,-4,1 \rangle$ as a normal vector.

*Professor Farnsworth's Solution Plan:*
We have a point $P_0(x_0, y_0, z_0)$ and a normal vector $\vec{n} = \langle a, b, c \rangle$. We can directly apply the definitions for vector and scalar forms.

*Solution:*
1.  **Identify given information**:
    *   Point $P_0 = (-3,1,5)$, so $\vec{r_0} = \langle -3,1,5 \rangle$.
    *   Normal vector $\vec{n} = \langle 2,-4,1 \rangle$.

2.  **Vector Equation of the Plane**:
    Using $\vec{n} \cdot (\vec{r} - \vec{r_0}) = 0$:
    $$ \langle 2,-4,1 \rangle \cdot (\langle x,y,z \rangle - \langle -3,1,5 \rangle) = 0 $$
    $$ \langle 2,-4,1 \rangle \cdot \langle x+3, y-1, z-5 \rangle = 0 $$
    This is the vector form.

3.  **Scalar Equation of the Plane**:
    From the vector equation, perform the dot product:
    $$ 2(x+3) - 4(y-1) + 1(z-5) = 0 $$
    $$ 2x + 6 - 4y + 4 + z - 5 = 0 $$
    $$ 2x - 4y + z + 5 = 0 $$
    $$ 2x - 4y + z = -5 $$
    This is the scalar (or general linear) equation of the plane. A truly elegant description!

---

#### Example 6: Describing a Plane as a Two-Parameter Set of Points
*Problem:* Describe the plane $2x - 4y + z = -5$ as a two-parameter set of points in $R^3$.

*Professor Farnsworth's Solution Plan:*
To represent a plane as a two-parameter set of points, we need to express two of the variables in terms of arbitrary parameters, and then solve for the third variable. This essentially finds a parametric form for the *plane itself*.

*Solution:*
The equation of the plane is $2x - 4y + z = -5$.
Let's solve for $z$ in terms of $x$ and $y$:
$$ z = -5 - 2x + 4y $$
Now, we can introduce two parameters, say $s$ and $t$, for $x$ and $y$:
Let $x = s$
Let $y = t$
Then, substitute these into the equation for $z$:
$$ z = -5 - 2s + 4t $$
So, the plane can be described as the set of points $\langle x,y,z \rangle$ such that:
$$ \langle x,y,z \rangle = \langle s, t, -5 - 2s + 4t \rangle $$
where $s$ and $t$ are any real numbers ($-\infty < s < \infty$, $-\infty < t < \infty$).

We could also rearrange this into a more familiar parametric vector form by splitting the constant and parameter-dependent parts:
$$ \langle x,y,z \rangle = \langle 0,0,-5 \rangle + s\langle 1,0,-2 \rangle + t\langle 0,1,4 \rangle $$
This shows that the plane passes through the point $(0,0,-5)$ and is spanned by the two non-parallel vectors $\langle 1,0,-2 \rangle$ and $\langle 0,1,4 \rangle$. These vectors lie *in* the plane. How absolutely fascinating!

---

#### Example 7: Finding an Equation for a Plane Given Three Points
*Problem:* Find an equation for the plane containing the three points $A(-1,2,2)$, $B(2,-1,1)$, and $C(2,2,1)$.

*Professor Farnsworth's Solution Plan:*
To define a plane, we need a point on the plane (we have three!) and a normal vector.
1.  **Make two vectors in the plane:** Since the three points lie in the plane, any two non-parallel vectors formed by these points will also lie in the plane. Let's create $\vec{AB}$ and $\vec{AC}$.
2.  **Take the cross product to find the normal vector:** The cross product of two vectors lying in the plane will yield a vector perpendicular (normal) to both, and thus normal to the plane itself.
3.  **Create the plane equation:** Use the normal vector found and any one of the three given points to write the scalar equation of the plane.

*Solution:*
1.  **Create two vectors lying in the plane**:
    Let's use point $A(-1,2,2)$ as a reference.
    $\vec{u} = \vec{AB} = \vec{B} - \vec{A} = \langle 2-(-1), -1-2, 1-2 \rangle = \langle 3, -3, -1 \rangle$
    $\vec{v} = \vec{AC} = \vec{C} - \vec{A} = \langle 2-(-1), 2-2, 1-2 \rangle = \langle 3, 0, -1 \rangle$
    Excellent, two vectors in the plane!

2.  **Find the normal vector $\vec{n}$ using the cross product**:
    The normal vector $\vec{n}$ will be perpendicular to both $\vec{u}$ and $\vec{v}$.
    $$ \vec{n} = \vec{u} \times \vec{v} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 3 & -3 & -1 \\ 3 & 0 & -1 \end{vmatrix} $$
    $$ \vec{n} = \mathbf{i}\begin{vmatrix} -3 & -1 \\ 0 & -1 \end{vmatrix} - \mathbf{j}\begin{vmatrix} 3 & -1 \\ 3 & -1 \end{vmatrix} + \mathbf{k}\begin{vmatrix} 3 & -3 \\ 3 & 0 \end{vmatrix} $$
    $$ \vec{n} = (\text{det}(-3)(-1) - (-1)(0))\mathbf{i} - (\text{det}(3)(-1) - (-1)(3))\mathbf{j} + (\text{det}(3)(0) - (-3)(3))\mathbf{k} $$
    $$ \vec{n} = (3 - 0)\mathbf{i} - (-3 - (-3))\mathbf{j} + (0 - (-9))\mathbf{k} $$
    $$ \vec{n} = 3\mathbf{i} - 0\mathbf{j} + 9\mathbf{k} = \langle 3, 0, 9 \rangle $$
    Aha! The normal vector $\vec{n} = \langle 3,0,9 \rangle$. We could also use a simpler proportional vector, such as $\langle 1,0,3 \rangle$, by dividing by 3. This often makes calculations easier. Let's use $\langle 3,0,9 \rangle$ as calculated.

3.  **Create the plane equation**:
    We'll use the normal vector $\vec{n} = \langle 3,0,9 \rangle$ and point $A(-1,2,2)$.
    Using $a(x-x_0) + b(y-y_0) + c(z-z_0) = 0$:
    $$ 3(x - (-1)) + 0(y - 2) + 9(z - 2) = 0 $$
    $$ 3(x + 1) + 0 + 9(z - 2) = 0 $$
    $$ 3x + 3 + 9z - 18 = 0 $$
    $$ 3x + 9z - 15 = 0 $$
    Dividing by 3 to simplify:
    $$ x + 3z - 5 = 0 $$
    $$ x + 3z = 5 $$
    This is the scalar equation of the plane. You could check by plugging in points B or C; they should satisfy this equation. They do! Exceedingly clever!

---

#### Example 8: Finding the Point of Intersection of a Line and a Plane
*Problem:* Find the point of intersection between the line $\vec{r}(t) = \langle 2-3t, 1+4t, -3-t \rangle$ and the plane $4x - y + 2z = 5$.

*Professor Farnsworth's Solution Plan:*
The core idea is that a point of intersection must satisfy *both* the line's equations and the plane's equation.
1.  **Plug in line components for x,y,z:** Substitute the parametric expressions for $x, y, z$ from the line into the plane's equation.
2.  **Solve for $t$:** This will give you the specific parameter value $t$ at the intersection.
3.  **Find the point:** Substitute the value of $t$ back into the line's parametric equations to get the coordinates of the intersection point.

*Solution:*
The parametric equations of the line are:
$x(t) = 2-3t$
$y(t) = 1+4t$
$z(t) = -3-t$
The equation of the plane is $4x - y + 2z = 5$.

1.  **Substitute line components into the plane equation**:
    $$ 4(2-3t) - (1+4t) + 2(-3-t) = 5 $$

2.  **Solve for $t$**:
    $$ 8 - 12t - 1 - 4t - 6 - 2t = 5 $$
    Combine constant terms: $8 - 1 - 6 = 1$
    Combine $t$ terms: $-12t - 4t - 2t = -18t$
    So, the equation becomes:
    $$ 1 - 18t = 5 $$
    $$ -18t = 4 $$
    $$ t = -\frac{4}{18} = -\frac{2}{9} $$
    We have found the parameter value for intersection!

3.  **Find the intersection point**:
    Substitute $t = -\frac{2}{9}$ back into the line's parametric equations:
    $x\left(-\frac{2}{9}\right) = 2 - 3\left(-\frac{2}{9}\right) = 2 + \frac{6}{9} = 2 + \frac{2}{3} = \frac{6}{3} + \frac{2}{3} = \frac{8}{3}$
    $y\left(-\frac{2}{9}\right) = 1 + 4\left(-\frac{2}{9}\right) = 1 - \frac{8}{9} = \frac{9}{9} - \frac{8}{9} = \frac{1}{9}$
    $z\left(-\frac{2}{9}\right) = -3 - \left(-\frac{2}{9}\right) = -3 + \frac{2}{9} = -\frac{27}{9} + \frac{2}{9} = -\frac{25}{9}$
    The point of intersection is $\left(\frac{8}{3}, \frac{1}{9}, -\frac{25}{9}\right)$. What a precise calculation!

---

#### Example 9: Finding Parametric Equations for a Line of Intersection of Two Planes
*Problem:* Find parametric equations for the line formed by the intersection of the two planes $x - 2y + 4z = 7$ and $2x - y + 3z = 0$.

*Professor Farnsworth's Solution Plan:*
When two planes intersect, their intersection is a line (unless they're parallel, in which case there's no intersection, or identical, in which case the "intersection" is the plane itself).
1.  **Find the direction vector:** Both planes' normal vectors are perpendicular to their respective planes. The line of intersection lies *in both planes*, so its direction vector must be perpendicular to *both* normal vectors. Thus, the cross product of the normal vectors will give us the direction vector of the line of intersection.
2.  **Find a starting point:** We need one point that lies on *both* planes (i.e., on the line of intersection). We can find this by setting one of the variables ($x, y,$ or $z$) to a convenient value (often $0$) and solving the resulting system of two equations for the other two variables.

*Solution:*
The equations of the planes are:
Plane 1: $x - 2y + 4z = 7$
Plane 2: $2x - y + 3z = 0$

1.  **Find the direction vector $\vec{v}$ of the line of intersection**:
    The normal vector for Plane 1 is $\vec{n_1} = \langle 1, -2, 4 \rangle$.
    The normal vector for Plane 2 is $\vec{n_2} = \langle 2, -1, 3 \rangle$.
    The direction vector $\vec{v}$ of the line of intersection is $\vec{n_1} \times \vec{n_2}$:
    $$ \vec{v} = \vec{n_1} \times \vec{n_2} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & -2 & 4 \\ 2 & -1 & 3 \end{vmatrix} $$
    $$ \vec{v} = \mathbf{i}\begin{vmatrix} -2 & 4 \\ -1 & 3 \end{vmatrix} - \mathbf{j}\begin{vmatrix} 1 & 4 \\ 2 & 3 \end{vmatrix} + \mathbf{k}\begin{vmatrix} 1 & -2 \\ 2 & -1 \end{vmatrix} $$
    $$ \vec{v} = ((-2)(3) - (4)(-1))\mathbf{i} - ((1)(3) - (4)(2))\mathbf{j} + ((1)(-1) - (-2)(2))\mathbf{k} $$
    $$ \vec{v} = (-6 + 4)\mathbf{i} - (3 - 8)\mathbf{j} + (-1 + 4)\mathbf{k} $$
    $$ \vec{v} = -2\mathbf{i} + 5\mathbf{j} + 3\mathbf{k} = \langle -2, 5, 3 \rangle $$
    This is our direction vector!

2.  **Find a point $P_0(x_0, y_0, z_0)$ on the line of intersection**:
    Let's set $x=0$ to simplify the system of equations.
    Plane 1 becomes: $-2y + 4z = 7$
    Plane 2 becomes: $-y + 3z = 0$
    From the second equation, $-y = -3z \implies y = 3z$.
    Substitute $y=3z$ into the first equation:
    $-2(3z) + 4z = 7$
    $-6z + 4z = 7$
    $-2z = 7$
    $z = -\frac{7}{2}$
    Now find $y$:
    $y = 3z = 3\left(-\frac{7}{2}\right) = -\frac{21}{2}$
    So, a point on the line is $P_0 = \left(0, -\frac{21}{2}, -\frac{7}{2}\right)$.

3.  **Write the parametric equations for the line**:
    Using $P_0 = \left(0, -\frac{21}{2}, -\frac{7}{2}\right)$ and $\vec{v} = \langle -2, 5, 3 \rangle$:
    $$ x(t) = x_0 + at = 0 - 2t = -2t $$
    $$ y(t) = y_0 + bt = -\frac{21}{2} + 5t $$
    $$ z(t) = z_0 + ct = -\frac{7}{2} + 3t $$
    These are the parametric equations for the line of intersection. By Jove, we've done it!

---

#### Example 10: Finding the Shortest Distance between a Point and a Plane
*Problem:* Find the shortest distance between the point $A(3,1,-2)$ and the plane $2x - 3y + 6z = 2$.

*Professor Farnsworth's Solution Plan:*
The shortest distance from a point to a plane is found by projecting a vector from a point *in* the plane to the given point onto the plane's normal vector. The magnitude of this projection is the distance.
1.  **Create a vector from a point in the plane to A:** Find any point $P_0$ on the plane. Then form the vector $\vec{P_0A}$.
2.  **Project that vector onto the normal vector:** Find the normal vector $\vec{n}$ from the plane's equation. The distance $D$ is the scalar projection of $\vec{P_0A}$ onto $\vec{n}$, which can be calculated using the formula.

*General Formula for distance from a point $P_1(x_1, y_1, z_1)$ to a plane $ax+by+cz=d$*:
$$ D = \frac{|ax_1 + by_1 + cz_1 - d|}{\sqrt{a^2 + b^2 + c^2}} $$
Let's derive it using the projection method, as intended by Professor Lundholm.

*Solution:*
1.  **Identify the normal vector $\vec{n}$ and find a point $P_0$ on the plane**:
    The plane is $2x - 3y + 6z = 2$. The normal vector is $\vec{n} = \langle 2, -3, 6 \rangle$.
    To find a point $P_0$ on the plane, let's set $y=0$ and $z=0$:
    $2x - 3(0) + 6(0) = 2 \implies 2x = 2 \implies x = 1$.
    So, $P_0(1,0,0)$ is a point on the plane.
    The given point is $A(3,1,-2)$.

2.  **Create a vector from $P_0$ to $A$**:
    $\vec{P_0A} = \vec{A} - \vec{P_0} = \langle 3-1, 1-0, -2-0 \rangle = \langle 2, 1, -2 \rangle$.

3.  **Calculate the scalar projection of $\vec{P_0A}$ onto $\vec{n}$**:
    The distance $D$ is given by the magnitude of the scalar projection (also known as the component) of $\vec{P_0A}$ onto $\vec{n}$:
    $$ D = |\text{comp}_{\vec{n}} \vec{P_0A}| = \frac{|\vec{P_0A} \cdot \vec{n}|}{||\vec{n}||} $$
    First, calculate the dot product:
    $\vec{P_0A} \cdot \vec{n} = \langle 2, 1, -2 \rangle \cdot \langle 2, -3, 6 \rangle = (2)(2) + (1)(-3) + (-2)(6)$
    $= 4 - 3 - 12 = -11$
    Next, calculate the magnitude of $\vec{n}$:
    $||\vec{n}|| = \sqrt{2^2 + (-3)^2 + 6^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7$
    Now, calculate the distance $D$:
    $$ D = \frac{|-11|}{7} = \frac{11}{7} $$
    The shortest distance between point $A$ and the plane is $\frac{11}{7}$. Truly a triumph of vector geometry!
    *Self-check using the formula*:
    $D = \frac{|2(3) - 3(1) + 6(-2) - 2|}{\sqrt{2^2 + (-3)^2 + 6^2}} = \frac{|6 - 3 - 12 - 2|}{\sqrt{4+9+36}} = \frac{|-11|}{\sqrt{49}} = \frac{11}{7}$.
    It matches! For those who prefer to memorize, the formula works, but understanding the projection method is more conceptually rich.

---

#### Example 11: Finding the Shortest Distance between Two Skew Lines
*Problem:* Find the shortest distance $d$ between the two skew lines:
$\vec{r}(u) = \langle 2-u, 3+2u, 2+u \rangle$
$\vec{s}(v) = \langle 2v, 4-v, 2-v \rangle$

*Professor Farnsworth's Solution Plan:*
Recall that these lines were found to be skew in Example 4b. The shortest distance between two skew lines is the length of the line segment that is perpendicular to *both* lines.
1.  **Find a vector perpendicular to both lines:** Take the cross product of their direction vectors. This gives a vector $\vec{n}$ that is normal to both lines.
2.  **Calculate any vector that goes from one line to the other:** Choose a point on each line, say $P$ on $\vec{r}(u)$ and $Q$ on $\vec{s}(v)$, and form the vector $\vec{PQ}$.
3.  **Project this vector onto the orthogonal vector:** The shortest distance is the magnitude of the scalar projection of $\vec{PQ}$ onto $\vec{n}$. This essentially finds how much of the connecting vector $\vec{PQ}$ lies in the direction perpendicular to both lines.

*Solution:*
1.  **Extract direction vectors and base points for each line**:
    For $\vec{r}(u) = \langle 2-u, 3+2u, 2+u \rangle$:
    Base point $P_1 = (2,3,2)$ (when $u=0$)
    Direction vector $\vec{d_1} = \langle -1, 2, 1 \rangle$
    For $\vec{s}(v) = \langle 2v, 4-v, 2-v \rangle$:
    Base point $P_2 = (0,4,2)$ (when $v=0$)
    Direction vector $\vec{d_2} = \langle 2, -1, -1 \rangle$

2.  **Find a vector $\vec{n}$ perpendicular to both direction vectors**:
    $$ \vec{n} = \vec{d_1} \times \vec{d_2} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ -1 & 2 & 1 \\ 2 & -1 & -1 \end{vmatrix} $$
    $$ \vec{n} = \mathbf{i}\begin{vmatrix} 2 & 1 \\ -1 & -1 \end{vmatrix} - \mathbf{j}\begin{vmatrix} -1 & 1 \\ 2 & -1 \end{vmatrix} + \mathbf{k}\begin{vmatrix} -1 & 2 \\ 2 & -1 \end{vmatrix} $$
    $$ \vec{n} = ((2)(-1) - (1)(-1))\mathbf{i} - ((-1)(-1) - (1)(2))\mathbf{j} + ((-1)(-1) - (2)(2))\mathbf{k} $$
    $$ \vec{n} = (-2+1)\mathbf{i} - (1-2)\mathbf{j} + (1-4)\mathbf{k} $$
    $$ \vec{n} = -1\mathbf{i} + 1\mathbf{j} - 3\mathbf{k} = \langle -1, 1, -3 \rangle $$
    This vector is normal to both lines.

3.  **Calculate a vector connecting a point on one line to a point on the other**:
    Let's use $P_1(2,3,2)$ and $P_2(0,4,2)$.
    $\vec{P_1P_2} = \vec{P_2} - \vec{P_1} = \langle 0-2, 4-3, 2-2 \rangle = \langle -2, 1, 0 \rangle$.

4.  **Calculate the shortest distance $D$ using projection**:
    The shortest distance $D$ is the magnitude of the scalar projection of $\vec{P_1P_2}$ onto $\vec{n}$:
    $$ D = \frac{|\vec{P_1P_2} \cdot \vec{n}|}{||\vec{n}||} $$
    First, calculate the dot product:
    $\vec{P_1P_2} \cdot \vec{n} = \langle -2, 1, 0 \rangle \cdot \langle -1, 1, -3 \rangle = (-2)(-1) + (1)(1) + (0)(-3)$
    $= 2 + 1 + 0 = 3$
    Next, calculate the magnitude of $\vec{n}$:
    $||\vec{n}|| = \sqrt{(-1)^2 + 1^2 + (-3)^2} = \sqrt{1 + 1 + 9} = \sqrt{11}$
    Finally, calculate the distance $D$:
    $$ D = \frac{|3|}{\sqrt{11}} = \frac{3}{\sqrt{11}} = \frac{3\sqrt{11}}{11} $$
    There you have it! The shortest distance between those two troublesome skew lines. Another excellent application of our vector tools!

***

### Practice & Reflection

Now, for some critical thinking, my eager students! Solidify your understanding by pondering these questions:

1.  **Conceptual Check-in:**
    *   **True or False (adapted from 11.5: 89):** If the corresponding coefficients of $x, y,$ and $z$ in the equations of two planes ($ax+by+cz=d$) are equal, then the planes are parallel. Explain.
    *   **True or False (adapted from 11.5: 92):** If two lines are parallel to a common line, then they are parallel.
    *   **True or False (adapted from 11.5: 94):** If two lines are perpendicular to a common plane, then they are parallel.
    *   **True or False (adapted from 11.5: 100):** If two lines in $R^3$ do not intersect, then they are parallel.
    *   **True or False (adapted from 11.5: 113):** If $\vec{n_1}$ and $\vec{n_2}$ are normal vectors to the planes $P_1$ and $P_2$, respectively, then $\vec{n_1} \times \vec{n_2}$ is a direction vector for their line of intersection.
    *   **True or False (adapted from 11.5: 114):** If $L_1$ and $L_2$ are skew lines, then there is a pair of parallel planes containing them.

2.  **Discussion Point:** What is the fundamental difference in the information required to define a line versus a plane in $R^3$? How does the *type* of vector (direction vs. normal) dictate the geometry?

3.  **Application Scenario:** Imagine you are designing a laser system for a planetarium show. You need a laser beam (a line) to pass through a specific point on the dome (a plane). How would you use the concepts from this section to calculate the exact angle or position where the laser hits the dome?

***

That's all for today's thrilling excursion into lines and planes! Remember, the universe isn't flat, and neither should your understanding of vector calculus be! Keep practicing, and don't hesitate to consult your holographic study guides (or me!) if you encounter any difficulties.

Now, if you'll excuse me, I believe I left my spare brain in the proton dryer. To the lab!