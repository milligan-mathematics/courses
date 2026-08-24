Alright, good news, everyone! Welcome to our inaugural journey into the exciting realm of **Math 303: Multivariable Calculus!** I'm Professor Hubert J. Farnsworth, your trusty pedagogical assistant, and today we're taking our first monumental leap beyond the flat confines of two-dimensional space. Prepare your minds for a grand adventure into the **Third Dimension!**

This section, **11.1: Three-Dimensional Cartesian Space**, lays the foundational groundwork for everything we'll do in this course. Think of it as learning to walk before you can run... or, more accurately, learning to navigate a spaceship before you can perform complex orbital mechanics! We'll establish how to describe points, lines, and surfaces in 3D, calculate distances, and even define spheres. Let's blast off!

---

# Math 303: Multivariable Calculus
## Section 11.1: Three-Dimensional Cartesian Space

### **Overview**

For centuries, mathematicians and scientists modeled the world around us using two dimensions: length and width. This was perfectly adequate for many problems, allowing us to describe points on a plane, graph functions like $y = x^2$, and calculate areas. However, the real world is inherently three-dimensional. To truly understand physical phenomena, from planetary orbits to fluid dynamics, we need to add depth.

In this section, we extend the familiar Cartesian coordinate system from two dimensions ($\mathbb{R}^2$) to three dimensions ($\mathbb{R}^3$). We'll learn to:
1.  **Locate points** using an ordered triple $(x, y, z)$.
2.  **Visualize and graph** basic equations and inequalities in 3D space.
3.  **Calculate the distance** between any two points in space.
4.  **Derive the equation of a sphere**, a fundamental 3D object.

Mastering these concepts is crucial as we progress to vectors, derivatives of multivariable functions, and integrals over volumes. Don't worry, it's just like regular calculus, but with more dimensions! (And consequently, more fun!)

---

### **Core Concepts & Definitions**

#### 1. Cartesian Coordinates in Three Dimensions

Just as we use an ordered pair $(x, y)$ to uniquely identify a point in a 2D plane, we use an **ordered triple** $(x, y, z)$ to uniquely identify a point in three-dimensional space.

*   **The Coordinate Axes:**
    *   We introduce a third axis, the **$z$-axis**, which is perpendicular to both the $x$-axis and the $y$-axis at their origin.
    *   These three axes are mutually orthogonal (perpendicular).
    *   The point where all three axes intersect is called the **origin**, denoted by $O = (0,0,0)$.

*   **Right-Hand Rule:** To maintain a consistent orientation in $\mathbb{R}^3$, we use the **right-hand rule**. If you curl the fingers of your right hand from the positive $x$-axis towards the positive $y$-axis, your thumb will point in the direction of the positive $z$-axis. This establishes a "right-handed coordinate system."

*   **Coordinate Planes:** The three axes define three principal planes:
    *   The **$xy$-plane:** This is the plane containing the $x$-axis and $y$-axis. All points in this plane have a $z$-coordinate of $0$. Its equation is $z=0$.
    *   The **$xz$-plane:** This is the plane containing the $x$-axis and $z$-axis. All points in this plane have a $y$-coordinate of $0$. Its equation is $y=0$.
    *   The **$yz$-plane:** This is the plane containing the $y$-axis and $z$-axis. All points in this plane have an $x$-coordinate of $0$. Its equation is $x=0$.

*   **Octants:** Just as the coordinate axes divide the $xy$-plane into four quadrants, the three coordinate planes divide three-dimensional space into eight regions called **octants**. The first octant is where $x \ge 0$, $y \ge 0$, and $z \ge 0$.

#### 2. Visualizing and Graphing in $\mathbb{R}^3$

Understanding how equations and inequalities manifest in $\mathbb{R}^3$ is fundamental.

*   **Planes Parallel to Coordinate Planes:**
    *   An equation of the form $x=k$ (where $k$ is a constant) represents a plane parallel to the $yz$-plane.
    *   An equation of the form $y=k$ represents a plane parallel to the $xz$-plane.
    *   An equation of the form $z=k$ represents a plane parallel to the $xy$-plane.

*   **Lines in $\mathbb{R}^3$:** A line in $\mathbb{R}^3$ is typically defined by the intersection of two planes or through parametric equations, which we'll explore in more detail later. For now, understand that two distinct planes intersect to form a line.

*   **Cylinders:** A surface in $\mathbb{R}^3$ whose equation involves only two of the three variables (e.g., $x^2+y^2=1$) is called a **cylinder**. This means the missing variable (e.g., $z$) can take any value, effectively "extruding" the 2D curve (e.g., a circle in the $xy$-plane) along the axis of the missing variable.

#### 3. Distance in Three Dimensions

The distance formula in $\mathbb{R}^3$ is a natural extension of the Pythagorean theorem.

**Definition (Distance Formula in $\mathbb{R}^3$):**
The distance $d$ between two points $P_1(x_1, y_1, z_1)$ and $P_2(x_2, y_2, z_2)$ in three-dimensional Cartesian space is given by:
$$d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$$

**Derivation:** We can visualize this by constructing a rectangular box with $P_1$ and $P_2$ as opposite vertices.
1.  First, consider the distance between $(x_1, y_1, z_1)$ and $(x_2, y_2, z_1)$ in a plane parallel to the $xy$-plane. Using the 2D distance formula (Pythagorean theorem), this distance is $\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$. Let's call this $d_{xy}$.
2.  Now, imagine a right triangle formed by:
    *   One leg being $d_{xy}$.
    *   The other leg being the vertical distance between the two points, which is $|z_2-z_1|$.
    *   The hypotenuse being the desired 3D distance $d$.
3.  Applying the Pythagorean theorem again: $d^2 = d_{xy}^2 + (z_2-z_1)^2$.
    Substituting $d_{xy}^2 = (x_2-x_1)^2 + (y_2-y_1)^2$, we get:
    $$d^2 = (x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2$$
    Taking the square root yields the distance formula. Eureka!

#### 4. Equation of a Sphere

**Definition (Sphere):**
A **sphere** is the set of all points in $\mathbb{R}^3$ that are equidistant from a fixed point called its **center**. This constant distance is called the **radius** of the sphere.

**Standard Equation of a Sphere:**
Given a sphere with center $C=(a, b, c)$ and radius $r$, any point $P=(x, y, z)$ on the surface of the sphere must be at a distance $r$ from $C$. Using the distance formula:
$$\sqrt{(x-a)^2 + (y-b)^2 + (z-c)^2} = r$$
Squaring both sides eliminates the square root and gives us the standard equation of a sphere:
$$(x-a)^2 + (y-b)^2 + (z-c)^2 = r^2$$

---

### **Detailed Lecture & Worked Examples**

Let's put these concepts into practice. Pay close attention to how we visualize these objects and manipulate their equations.

#### **Example 1: Graphing in Cartesian Three-Dimensional Space**

Let's explore several basic equations and inequalities in $\mathbb{R}^3$.

**a. The graph of the equation $y=1$.**
*   **Concept:** This is an equation where $x$ and $z$ are not specified, meaning they can take any real value. Only the $y$-coordinate is fixed at $1$.
*   **Geometric Interpretation:** Imagine the $xz$-plane (where $y=0$). The plane $y=1$ is a plane parallel to the $xz$-plane, shifted $1$ unit in the positive $y$-direction. It extends infinitely in the $x$ and $z$ directions.
*   **Visualization:** Picture a flat sheet slicing through the $y$-axis at $y=1$, standing upright relative to the $xy$-plane.

**b. The region in $\mathbb{R}^3$ defined by the compound inequality $1 \le z < 3$.**
*   **Concept:** Here, $x$ and $y$ are free to be any real numbers, but the $z$-coordinate is restricted to be between $1$ (inclusive) and $3$ (exclusive).
*   **Geometric Interpretation:** This inequality defines the region *between* two horizontal planes.
    *   The plane $z=1$ is included (a solid plane).
    *   The plane $z=3$ is excluded (an "open" plane boundary).
*   **Visualization:** Imagine two infinite flat sheets, one at height $z=1$ and another at $z=3$. The region is all the space between them, including the lower sheet but not the upper one.

**c. Those points satisfying the three relations $x \ge 0$, $y=0$, and $z \ge 0$.**
*   **Concept:** We have three conditions here. The $y=0$ condition immediately tells us that all points must lie in the $xz$-plane.
*   **Geometric Interpretation:** Within the $xz$-plane ($y=0$), we are further restricted by $x \ge 0$ and $z \ge 0$. This corresponds to the region where both $x$ and $z$ coordinates are non-negative.
*   **Visualization:** This is precisely the **first quadrant of the $xz$-plane**. It's a quarter-infinite sheet extending from the origin in the positive $x$ and positive $z$ directions.

**d. Those points satisfying the two equations $x=1$ and $z=2$.**
*   **Concept:** We have two simultaneous equations. The variable $y$ is absent, implying it can take any real value.
*   **Geometric Interpretation:**
    *   $x=1$ defines a plane parallel to the $yz$-plane, passing through $x=1$.
    *   $z=2$ defines a plane parallel to the $xy$-plane, passing through $z=2$.
    *   The intersection of these two planes is a **line**. Since $y$ is free, this line is parallel to the $y$-axis.
*   **Visualization:** Picture a vertical line (relative to the $xy$-plane) that passes through the point $(1,0,2)$ and extends infinitely in both the positive and negative $y$-directions.
*   **Connection to Parametric Form (Advanced Thought):** As Professor Lundholm noted, this can be expressed parametrically. We could let $y=t$, where $t \in \mathbb{R}$. Then the line is given by $(x,y,z) = (1, t, 2)$. This is a common way to represent lines in 3D space.

**e. In the $yz$-plane, the graph of the equation $y+z=0$. Then, in $\mathbb{R}^3$, the graph of $y+z=0$.**
*   **Concept (in $yz$-plane):** If we're only considering the $yz$-plane, $x=0$. The equation $y+z=0$ can be rewritten as $z=-y$. This is a straight line passing through the origin in the $yz$-plane with a slope of $-1$.
*   **Concept (in $\mathbb{R}^3$):** Now, consider the same equation, $y+z=0$, but in $\mathbb{R}^3$. The variable $x$ is not present in the equation. This is key! It means that for any point $(x,y,z)$ satisfying $y+z=0$, $x$ can be *any* real number.
*   **Geometric Interpretation:** Since $x$ is unconstrained, we take the line $z=-y$ in the $yz$-plane and "extend" it infinitely along the $x$-axis. This forms a **plane**.
*   **Visualization:** This plane consists of all points of the form $\{(x, y, -y) | x,y \in \mathbb{R}\}$. Imagine the line $z=-y$ in the $yz$-plane, and then sweep that line parallel to itself along the entire $x$-axis. This creates a plane tilted relative to the coordinate axes.

---

#### **Example 2: Determining Projections of Points and Objects onto Planes**

A **projection** is essentially the "shadow" an object casts onto a plane. To project a point onto a plane, you essentially "zero out" the coordinate corresponding to that plane.

**a. Projection of $(3,-2,7)$ onto the three coordinate planes.**
*   **Onto the $xy$-plane ($z=0$):** We set the $z$-coordinate to $0$. The projection is $(3, -2, 0)$.
*   **Onto the $yz$-plane ($x=0$):** We set the $x$-coordinate to $0$. The projection is $(0, -2, 7)$.
*   **Onto the $xz$-plane ($y=0$):** We set the $y$-coordinate to $0$. The projection is $(3, 0, 7)$.

**b. Projection of $(3,-2,7)$ onto the plane $y=5$.**
*   **Concept:** To project onto a plane like $y=k$, we adjust the relevant coordinate to $k$ while keeping the other two coordinates fixed.
*   **Solution:** We want to project onto the plane where $y=5$. So, we simply change the $y$-coordinate of the point $(3,-2,7)$ to $5$. The projection is $(3, 5, 7)$.

**c. Projection of the plane defined by $y+z=0$ onto the $yz$-plane.**
*   **Concept:** This is asking for the "shadow" of an entire plane onto another plane.
*   **Solution:** The equation $y+z=0$ (or $z=-y$) *already* defines a relationship exclusively between $y$ and $z$. When projected onto the $yz$-plane (where $x=0$), the $x$-coordinate is simply disregarded, and the relationship between $y$ and $z$ remains unchanged.
*   **Geometric Interpretation:** The projection of the plane $y+z=0$ onto the $yz$-plane is the line $y+z=0$ (or $z=-y$) itself within the $yz$-plane. This is because the plane $y+z=0$ already contains this line; it's just that line extended along the $x$-axis.

---

#### **Example 3: Graphing an Equation in Cartesian Three-Dimensional Space**

**Graph the equation $x^2 + y^2 = 1$ in $\mathbb{R}^3$.**
*   **Concept:** Notice that the variable $z$ is missing from this equation. This is a tell-tale sign of a cylindrical surface.
*   **Step 1: Understand the 2D graph.** In the $xy$-plane ($z=0$), the equation $x^2+y^2=1$ represents a circle centered at the origin with radius $1$.
*   **Step 2: Extend to 3D.** Since $z$ is not constrained, for every point $(x,y)$ on the unit circle in the $xy$-plane, $z$ can take any real value.
*   **Geometric Interpretation:** This means we take that circle and "extrude" it (or sweep it) parallel to the $z$-axis, both upwards and downwards, infinitely.
*   **Visualization:** The graph is a **circular cylinder** (often just called a cylinder) with radius $1$, whose axis is the $z$-axis.

---

### **Distance in Three Dimensions**

Now that we can navigate 3D space, let's learn how to measure distances within it.

#### **Example 4: Finding the Distance between Points in Cartesian Three-Dimensional Space**

**Find the distance between the points $(-2,5,1)$ and $(3,0,-1)$.**
*   **Concept:** We directly apply the 3D distance formula.
*   **Step 1: Identify coordinates.**
    Let $P_1 = (x_1, y_1, z_1) = (-2, 5, 1)$.
    Let $P_2 = (x_2, y_2, z_2) = (3, 0, -1)$.
*   **Step 2: Apply the distance formula.**
    $$d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$$
    $$d = \sqrt{(3 - (-2))^2 + (0 - 5)^2 + (-1 - 1)^2}$$
*   **Step 3: Calculate the terms.**
    $$d = \sqrt{(3+2)^2 + (-5)^2 + (-2)^2}$$
    $$d = \sqrt{(5)^2 + 25 + 4}$$
    $$d = \sqrt{25 + 25 + 4}$$
    $$d = \sqrt{54}$$
*   **Step 4: Simplify the radical (if possible).**
    We can factor $54 = 9 \times 6$.
    $$d = \sqrt{9 \times 6} = \sqrt{9} \times \sqrt{6} = 3\sqrt{6}$$
*   **Solution:** The distance between the points is $3\sqrt{6}$.

---

#### **Example 5: Using the Distance Formula to Construct an Equation of a Sphere**

**Construct an equation whose graph is the sphere of radius $2$ centered at the point $(2,3,-1)$.**
*   **Concept:** A sphere is defined as all points $(x,y,z)$ that are a fixed distance (the radius $r$) from a given center point $(a,b,c)$. We use the distance formula and the definition of a sphere.
*   **Step 1: Identify the center and radius.**
    Center $C = (a, b, c) = (2, 3, -1)$.
    Radius $r = 2$.
*   **Step 2: Set up the distance formula.**
    Let $(x,y,z)$ be any point on the sphere. The distance from $(x,y,z)$ to $(2,3,-1)$ must be $2$.
    $$\sqrt{(x-a)^2 + (y-b)^2 + (z-c)^2} = r$$
    $$\sqrt{(x-2)^2 + (y-3)^2 + (z-(-1))^2} = 2$$
*   **Step 3: Simplify and square both sides.**
    $$\sqrt{(x-2)^2 + (y-3)^2 + (z+1)^2} = 2$$
    Squaring both sides eliminates the square root:
    $$(x-2)^2 + (y-3)^2 + (z+1)^2 = 2^2$$
*   **Step 4: Final Equation.**
    $$(x-2)^2 + (y-3)^2 + (z+1)^2 = 4$$
*   **Solution:** The equation of the sphere is $(x-2)^2 + (y-3)^2 + (z+1)^2 = 4$.

This equation is a standard form for a sphere, where $(a,b,c)$ is the center and $r^2$ is the constant on the right side.

---

### **Practice & Reflection**

Now for a little brain-stretching to solidify your understanding. Remember, thinking about these concepts geometrically is just as important as the algebraic manipulation!

1.  **Conceptual Check: Planes and Axes**
    *   What are the equations for the $x$-axis, the $y$-axis, and the $z$-axis in $\mathbb{R}^3$? Think about which coordinates are zero and which are free.
    *   **Hint:** The $x$-axis is the intersection of two coordinate planes.

2.  **Visualizing Regions:** Describe the region defined by $x=0$ and $y \ge 0$. Is it a line, a plane, or something else?

3.  **Advanced Application: Finding Radius for Tangency (similar to HW 73)**
    A sphere is centered at $(-1, 4, -3)$ and is tangent to the $yz$-plane. What is its radius? (Hint: If a sphere is tangent to a plane, the shortest distance from the center to that plane must be equal to the radius.)

4.  **Equation of a Line (similar to HW 65):**
    What is the equation for the line in $\mathbb{R}^3$ that passes through the point $(0,-1,2)$ and is parallel to the $x$-axis? (Hint: If it's parallel to the $x$-axis, its $y$ and $z$ coordinates must remain constant.)

5.  **Critique and Connect:** Explain why $x^2+z^2=9$ in $\mathbb{R}^3$ is a cylinder, but in $\mathbb{R}^2$ (if we were plotting it in the $xz$-plane) it would be a circle. How does the concept of an unconstrained variable change the geometric interpretation?

---

That concludes our expedition into Three-Dimensional Cartesian Space! You've learned the fundamental tools for navigating and describing objects in $\mathbb{R}^3$. This foundation is absolutely crucial, so make sure these concepts are crystal clear. Next time, we'll dive into the world of vectors, which will give us even more powerful ways to describe direction and movement in this beautiful 3D universe.

Don't hesitate to review these notes, re-work the examples, and tackle those practice problems. And remember, in multivariable calculus, the more dimensions, the merrier! Good luck, and as always, **"Don't you worry about blank, let me worry about blank!"** (Just kidding, please worry about your homework.)