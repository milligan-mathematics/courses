Good news, everyone! Professor Farnsworth here, your esteemed Math 303 TA and pedagogical assistant. Today, we embark on a truly exhilarating journey into the third dimension – exploring the fascinating world of **Cylinders and Quadric Surfaces**! By the end of this lecture, you'll be identifying and sketching complex 3D shapes with the precision of a seasoned astrophysicist charting a new galaxy. So, gather your wits, prepare your brains for some serious spatial reasoning, and let's delve into the geometric marvels of Section 11.6!

---

# Math 303: Multivariable Calculus
## Section 11.6: Cylinders and Quadric Surfaces
**Professor Hubert J. Farnsworth**
*Milligan University Math TA & Pedagogical Assistant*

---

### 🚀 **Overview: A Glimpse into 3D Geometry!**

In single-variable calculus, we spent a great deal of time graphing functions and equations in two dimensions ($xy$-plane). Now, in multivariable calculus, we expand our horizons to three dimensions ($xyz$-space, or $R^3$). This section introduces two fundamental types of surfaces that are essential building blocks for understanding more complex 3D shapes: **cylinders** and **quadric surfaces**. We'll learn how to identify them, understand their defining characteristics, and most importantly, how to sketch them by analyzing their **cross-sections** (also known as **traces**). Get ready to visualize, my eager intellects!

---

### 💡 **Part 1: Cylinders – More Than Just Soup Cans!**

When you hear "cylinder," you probably picture a circular tube. While that's *a* type of cylinder, in multivariable calculus, the definition is much broader and more exciting!

#### **Definition: Cylinders, Generating Curves, and Rulings**

A **cylinder** is a surface consisting of all lines (called **rulings**) that are parallel to a given line and pass through a fixed planar curve, called the **generating curve** of the cylinder.

*   **Rulings:** These are the parallel lines that "sweep out" the surface.
*   **Generating Curve:** This is the curve in a plane that guides the rulings. The shape of this curve determines the "type" of cylinder.
*   **Cross-sections (or Traces):** These are the curves formed by the intersection of the surface with planes parallel to the coordinate planes (e.g., $xy$-plane, $xz$-plane, $yz$-plane) or other fixed planes. For a cylinder, any cross-section perpendicular to the rulings will be congruent to the generating curve.

**Key Insight:** If an equation in $R^3$ is missing one variable (e.g., $x$, $y$, or $z$), the surface it defines is a cylinder. The generating curve lies in the coordinate plane of the *two* variables present in the equation, and its rulings are parallel to the axis of the *missing* variable.

#### **Quick Review of Basic Conic Sections (Your 2D Generating Curves!)**

Before we leap into 3D, let's have a quick refresher on the 2D curves that often serve as generating curves for our cylinders.

*   **Parabola:** Defined by an equation where one variable is squared and the other is not.
    *   Example: $x^2 = cy$ or $y^2 = cx$.
    *   Shape: A U-shaped curve.
*   **Ellipse:** Defined by an equation where both variables are squared and added, equal to a constant.
    *   Example: $x^2 + y^2 = c$ (if $c > 0$) or $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.
    *   Shape: An oval (or a circle if $a=b$).
*   **Hyperbola:** Defined by an equation where both variables are squared, one is subtracted from the other, equal to a constant.
    *   Example: $x^2 - y^2 = c$ (if $c \neq 0$) or $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$.
    *   Shape: Two separate, opposing curves.
*   **Connected Hyperbola (Pair of Lines):** A special case of the hyperbola where the constant is zero.
    *   Example: $x^2 - y^2 = 0 \implies (x-y)(x+y) = 0$.
    *   Shape: Two intersecting lines (e.g., $y=x$ and $y=-x$).

Now, with those fundamental shapes in mind, let's see how they extend into the third dimension!

---

#### **Example 1: Describing a Parabolic Cylinder**

**Problem:** The equation $x^2 = 4y$ corresponds to a surface. Describe this surface.

**Solution:**
1.  **Identify the missing variable:** The equation $x^2 = 4y$ is missing the variable $z$.
2.  **Determine the generating curve:** Since $z$ is missing, the generating curve lies in the $xy$-plane. In the $xy$-plane, $x^2 = 4y$ is the equation of a **parabola** opening upwards along the positive $y$-axis, with its vertex at the origin $(0,0)$.
3.  **Identify the rulings:** Because $z$ is missing, the rulings are lines parallel to the $z$-axis. This means for every point $(x_0, y_0, 0)$ on the generating parabola in the $xy$-plane, the entire vertical line $x=x_0$, $y=y_0$ (i.e., $(x_0, y_0, z)$ for all $z \in R$) is part of the surface.
4.  **Describe the surface:** This surface is a **parabolic cylinder**. It looks like an infinite trough or a folded sheet of paper extending endlessly along the $z$-axis. Any cross-section made by a plane parallel to the $xy$-plane (i.e., $z=k$) will be the parabola $x^2=4y$. Any cross-section made by a plane parallel to the $xz$-plane ($y=k$) will be two vertical lines $x = \pm \sqrt{4k}$ (if $k>0$). Any cross-section made by a plane parallel to the $yz$-plane ($x=k$) will be a vertical line $y=k^2/4$.

---

#### **Example 2: Sketching Surfaces by Determining Their Cross-Sections**

Ah, the art of sketching surfaces! A truly delightful challenge for the spatial imagination. We'll examine the traces (cross-sections) to piece together the 3D form.

**Problem a:** Sketch the surface defined by the equation $4y^2 - 16y + 9z^2 - 18 = 11$.

**Solution a:**
1.  **Rearrange and complete the square:** This equation involves $y$ and $z$, but not $x$. This immediately tells us it's an **elliptic cylinder** with rulings parallel to the $x$-axis. To see the generating curve clearly, we need to complete the square for the $y$ terms.
    $$4y^2 - 16y + 9z^2 = 11 + 18$$
    $$4(y^2 - 4y) + 9z^2 = 29$$
    To complete the square for $y^2 - 4y$, we add $(-4/2)^2 = (-2)^2 = 4$ inside the parenthesis. Since it's multiplied by $4$, we must add $4 \times 4 = 16$ to the right side of the equation.
    $$4(y^2 - 4y + 4) + 9z^2 = 29 + 16$$
    $$4(y-2)^2 + 9z^2 = 45$$
2.  **Standard form:** Divide by $45$ to get the standard form of an ellipse equation:
    $$\frac{4(y-2)^2}{45} + \frac{9z^2}{45} = \frac{45}{45}$$
    $$\frac{(y-2)^2}{45/4} + \frac{z^2}{5} = 1$$
3.  **Identify the generating curve:** This is the equation of an ellipse centered at $(x, 2, 0)$ in the $yz$-plane (specifically, $(y,z) = (2,0)$). The major axis (along the $y$-axis) has semi-axis length $a = \sqrt{45/4} = \frac{3\sqrt{5}}{2}$, and the minor axis (along the $z$-axis) has semi-axis length $b = \sqrt{5}$.
4.  **Sketching:**
    *   In the $yz$-plane, draw an ellipse centered at $(0,2,0)$ (on the $y$-axis). Extend $\frac{3\sqrt{5}}{2} \approx 3.35$ units along the $y$-axis from $(0,2,0)$ to get $y$-intercepts at $2 \pm \frac{3\sqrt{5}}{2}$, and $\sqrt{5} \approx 2.24$ units along the $z$-axis to get $z$-intercepts at $(0,2,\pm \sqrt{5})$.
    *   Since $x$ is missing from the equation, the rulings are parallel to the $x$-axis. Imagine this ellipse being "pulled" infinitely in both the positive and negative $x$ directions.
    *   The surface is an elliptic cylinder.

---

**Problem b:** Sketch the surface defined by the equations $z^2 + 2 = -4x^2 = 3$.

**Solution b:**
Now, this is an intriguing one! A common pitfall for students, a true test of your algebraic interpretation skills. When we have a chain of equalities like $A=B=C$, it means $A=C$ AND $B=C$.

1.  **Separate the equations:**
    *   Equation 1: $z^2 + 2 = 3$
    *   Equation 2: $-4x^2 = 3$

2.  **Solve Equation 1:**
    $z^2 + 2 = 3 \implies z^2 = 1 \implies z = \pm 1$.
    This implies that any point on our surface *must* have a $z$-coordinate of $1$ or $-1$. Geometrically, these are two parallel planes: $z=1$ and $z=-1$.

3.  **Solve Equation 2:**
    $-4x^2 = 3 \implies x^2 = -\frac{3}{4}$.
    Now, here's the kicker! There is no real number $x$ whose square is negative. This equation has **no real solutions** for $x$.

4.  **Conclusion:** Since there is no real value of $x$ that satisfies the second equation, there are no points $(x,y,z)$ in $R^3$ that can satisfy *both* conditions simultaneously.
    *   Therefore, the "surface" described by these equations is the **empty set**. It's a surface with no points on it!
    *   *Bad news, everyone!* Sometimes, what seems like a surface turns out to be nothing at all. This highlights the importance of carefully analyzing the algebraic conditions. If the problem *intended* it to be a surface, it would likely be phrased as $z^2+2 = 3-4x^2$ or similar, which would rearrange to $4x^2+z^2=1$, an elliptic cylinder along the $y$-axis. But we must interpret the given equations literally!

---

### ⚛️ **Part 2: Quadric Surfaces – The Six Grand Shapes of $R^3$!**

A **quadric surface** is the graph of a second-degree equation in three variables $x, y, z$. The general form is quite monstrous:

$$Ax^2 + By^2 + Cz^2 + Dxy + Exz + Fyz + Gx + Hy + Iz + J = 0$$

However, through rotations and translations of the coordinate axes, any quadric surface can be transformed into one of the following two standard forms:

1.  $$Ax^2 + By^2 + Cz^2 + J = 0$$
2.  $$Ax^2 + By^2 + Iz = 0$$ (or a similar form where one variable is linear, and the others are quadratic).

There are six fundamental types of non-degenerate quadric surfaces. We'll identify them by their standard equations and the characteristics of their traces.

#### **Classification of Quadric Surfaces (The "Big Six")**

| Surface Type              | Standard Equation (centered at origin)                             | Description of Traces                                                                                                                                                                                                                                               | Visual Description                                                                                                                                                                                             |
| :------------------------ | :----------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. **Ellipsoid**          | $\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$        | All traces are ellipses (or circles). If $a=b=c$, it's a sphere.                                                                                                                                                                                                    | A football or potato shape. All cross-sections are bounded ovals.                                                                                                                                      |
| 2. **Elliptic Paraboloid** | $\frac{x^2}{a^2} + \frac{y^2}{b^2} = \frac{z}{c}$                  | Traces in planes $z=k > 0$ are ellipses. Traces in planes $x=k$ or $y=k$ are parabolas. (The linear variable indicates the axis of the paraboloid and the direction of opening).                                                                                             | A bowl shape, opening up or down along the axis of the linear variable.                                                                                                                                |
| 3. **Hyperbolic Paraboloid** | $\frac{x^2}{a^2} - \frac{y^2}{b^2} = \frac{z}{c}$                  | Traces in planes $z=k$ are hyperbolas (except for $z=0$, which is a pair of lines). Traces in planes $x=k$ or $y=k$ are parabolas.                                                                                                                                  | A "saddle" shape. Looks like a Pringle chip or a mountain pass.                                                                                                                                         |
| 4. **Elliptic Cone**      | $\frac{x^2}{a^2} + \frac{y^2}{b^2} = \frac{z^2}{c^2}$              | Traces in planes $z=k \neq 0$ are ellipses. Traces in planes $x=k$ or $y=k$ are hyperbolas (except for $x=0$ or $y=0$, which are pairs of lines). The apex is at the origin.                                                                                       | Two cones joined at their apex, opening along the axis of the squared variable on the right side.                                                                                                      |
| 5. **Hyperboloid of One Sheet** | $\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1$        | Traces perpendicular to the axis of the negative term ($z$-axis here) are ellipses. Traces parallel to that axis are hyperbolas. It is connected.                                                                                                                     | An hourglass shape, or a cooling tower. It's a single, continuous surface.                                                                                                                             |
| 6. **Hyperboloid of Two Sheets** | $\frac{x^2}{a^2} - \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1$        | Traces perpendicular to the axis of the positive term ($x$-axis here) are ellipses (for $|x| > a$). Traces parallel to that axis are hyperbolas. It has two disconnected components. (Note: only one variable is positive on the left side, the others are negative). | Two separate bowl-shaped components, opening away from each other along the axis of the single positive squared term.                                                                                   |

**A Handy Trick for Identification:**
*   **Ellipsoid:** All three variables squared, all positive, equals 1.
*   **Paraboloid:** Two variables squared, one linear.
    *   *Elliptic:* Squared terms have same sign.
    *   *Hyperbolic:* Squared terms have opposite signs.
*   **Cone:** All three variables squared, one is isolated on one side, and equals the sum/difference of the others which sum to zero. (e.g., $x^2+y^2-z^2=0$)
*   **Hyperboloid:** All three variables squared, equals 1.
    *   *One Sheet:* One negative squared term.
    *   *Two Sheets:* Two negative squared terms.

---

#### **Example 3: Sketching a Surface**

**Problem:** Sketch the surface $x^2 + 4y^2 + 4z = 0$.

**Solution:**
1.  **Rearrange the equation:** Isolate the linear term or try to match a standard form.
    $$4z = -x^2 - 4y^2$$
    $$z = -\frac{x^2}{4} - y^2$$
    This can be written as $z = -\frac{x^2}{2^2} - \frac{y^2}{1^2}$. This form, with two squared terms and one linear term, identifies it as a **paraboloid**. Since both squared terms ($x^2$ and $y^2$) have the same sign (negative, meaning opening downwards), it's an **elliptic paraboloid**.

2.  **Analyze traces:**
    *   **Trace in $xy$-plane (set $z=k$):**
        *   If $z=0$, then $x^2 + 4y^2 = 0$. This implies $x=0$ and $y=0$, so the trace is the single point $(0,0,0)$. This is the vertex of the paraboloid.
        *   If $z=k < 0$, then $x^2 + 4y^2 = -4k$. This is an ellipse centered at the origin. As $k$ becomes more negative (e.g., $z=-1, -2$), the ellipses get larger.
        *   If $z=k > 0$, then $x^2 + 4y^2 = -4k$. There are no real solutions, as the sum of squares cannot be negative. This confirms the paraboloid opens downwards.
    *   **Trace in $xz$-plane (set $y=0$):**
        $$x^2 + 4z = 0 \implies 4z = -x^2 \implies z = -\frac{1}{4}x^2$$
        This is a parabola opening downwards in the $xz$-plane, with vertex at $(0,0,0)$.
    *   **Trace in $yz$-plane (set $x=0$):**
        $$4y^2 + 4z = 0 \implies 4z = -4y^2 \implies z = -y^2$$
        This is a parabola opening downwards in the $yz$-plane, with vertex at $(0,0,0)$.

3.  **Sketching:**
    *   Plot the vertex at $(0,0,0)$.
    *   Draw the parabolic traces in the $xz$-plane and $yz$-plane.
    *   Draw a few elliptical traces for $z < 0$. For instance, for $z=-1$, we have $x^2+4y^2=4$, or $\frac{x^2}{4}+\frac{y^2}{1}=1$. This is an ellipse with semi-axes 2 along $x$ and 1 along $y$.
    *   Connect these traces to form the bowl-shaped elliptic paraboloid opening downwards along the $z$-axis.

---

#### **Example 4: Describing the Traces of a Surface**

**Problem:** Describe the traces of the surface $\frac{y^2}{9} - \frac{z^2}{4} = \frac{x}{5}$.

**Solution:**
1.  **Identify the surface type:** This equation has two squared terms with opposite signs ($y^2$ and $z^2$) and one linear term ($x$). This is the signature of a **hyperbolic paraboloid**. It's often called a "saddle surface."

2.  **Analyze traces in planes parallel to the coordinate planes:**
    *   **Trace in $xy$-plane (set $z=k$):**
        $$\frac{y^2}{9} - \frac{k^2}{4} = \frac{x}{5}$$
        $$x = 5\left(\frac{y^2}{9} - \frac{k^2}{4}\right)$$
        For any constant $k$, this is the equation of a **parabola** opening along the positive $x$-axis. The vertex of the parabola shifts depending on $k$.
    *   **Trace in $xz$-plane (set $y=k$):**
        $$\frac{k^2}{9} - \frac{z^2}{4} = \frac{x}{5}$$
        $$x = 5\left(\frac{k^2}{9} - \frac{z^2}{4}\right)$$
        For any constant $k$, this is the equation of a **parabola** opening along the negative $x$-axis. (Note the $-z^2$ term).
    *   **Trace in $yz$-plane (set $x=k$):**
        $$\frac{y^2}{9} - \frac{z^2}{4} = \frac{k}{5}$$
        *   If $k \neq 0$, this is the equation of a **hyperbola**.
            *   If $k>0$, the transverse axis is along the $y$-axis.
            *   If $k<0$, the transverse axis is along the $z$-axis.
        *   If $k=0$ (i.e., $x=0$ plane), then $\frac{y^2}{9} - \frac{z^2}{4} = 0 \implies \left(\frac{y}{3} - \frac{z}{2}\right)\left(\frac{y}{3} + \frac{z}{2}\right) = 0$. This gives two intersecting lines: $y = \frac{3}{2}z$ and $y = -\frac{3}{2}z$. These lines form the characteristic "crossover" at the saddle point.

3.  **Summary:** The traces along planes perpendicular to the $x$-axis are hyperbolas (or intersecting lines), while traces along planes perpendicular to the $y$- or $z$-axes are parabolas. This combination defines the unique saddle shape of the hyperbolic paraboloid.

---

#### **Example 5: Sketching a Surface (Completing the Square Again!)**

**Problem:** Sketch the surface $9x^2 - 9y^2 - 4z^2 + 18y + 16z = 61$.

**Solution:**
This equation involves all three variables squared, plus linear terms for $y$ and $z$. This screams for completing the square to identify the standard form and center.

1.  **Group terms and complete the square:**
    $$9x^2 - (9y^2 - 18y) - (4z^2 - 16z) = 61$$
    Factor out coefficients for the squared terms:
    $$9x^2 - 9(y^2 - 2y) - 4(z^2 - 4z) = 61$$
    Complete the square for $y^2-2y$: add $(-2/2)^2 = 1$. Multiply by $-9$: add $-9$ to the right side.
    Complete the square for $z^2-4z$: add $(-4/2)^2 = 4$. Multiply by $-4$: add $-16$ to the right side.
    $$9x^2 - 9(y^2 - 2y + 1) - 4(z^2 - 4z + 4) = 61 - 9 - 16$$
    $$9x^2 - 9(y-1)^2 - 4(z-2)^2 = 36$$

2.  **Standard form:** Divide by $36$ to get the equation in standard form:
    $$\frac{9x^2}{36} - \frac{9(y-1)^2}{36} - \frac{4(z-2)^2}{36} = \frac{36}{36}$$
    $$\frac{x^2}{4} - \frac{(y-1)^2}{4} - \frac{(z-2)^2}{9} = 1$$

3.  **Identify the surface type and center:**
    *   We have three squared terms, equal to $1$. One term ($x^2$) is positive, and two terms ($(y-1)^2$ and $(z-2)^2$) are negative.
    *   This is the definition of a **hyperboloid of two sheets**.
    *   The center of the surface is given by setting the terms in parentheses to zero: $(0, 1, 2)$.
    *   The axis of the hyperboloid (the axis along which the two sheets open) is the $x$-axis, because the $x^2$ term is the *only* positive one.

4.  **Analyze traces (useful for sketching):**
    *   **Trace in planes perpendicular to the $x$-axis (set $x=k$):**
        $$\frac{k^2}{4} - \frac{(y-1)^2}{4} - \frac{(z-2)^2}{9} = 1$$
        $$\frac{(y-1)^2}{4} + \frac{(z-2)^2}{9} = \frac{k^2}{4} - 1$$
        *   For the trace to exist, we need $\frac{k^2}{4} - 1 > 0 \implies \frac{k^2}{4} > 1 \implies k^2 > 4 \implies |k| > 2$.
        *   If $|k|=2$, we get $\frac{(y-1)^2}{4} + \frac{(z-2)^2}{9} = 0$, which implies $y=1$ and $z=2$. These are the "vertices" of the hyperboloid at $(2,1,2)$ and $(-2,1,2)$.
        *   If $|k|>2$, the traces are **ellipses** centered at $(k, 1, 2)$. As $|k|$ increases, the ellipses expand. This confirms the two sheets opening away from $x=0$.
    *   **Trace in planes parallel to the $x$-axis (e.g., $y=1$ or $z=2$):**
        *   If $y=1$: $\frac{x^2}{4} - \frac{(z-2)^2}{9} = 1$. This is a **hyperbola** in the plane $y=1$, opening along the $x$-axis.
        *   If $z=2$: $\frac{x^2}{4} - \frac{(y-1)^2}{4} = 1$. This is a **hyperbola** in the plane $z=2$, opening along the $x$-axis.

5.  **Sketching:**
    *   Locate the center $(0,1,2)$.
    *   The vertices of the two sheets are at $(2,1,2)$ and $(-2,1,2)$.
    *   Sketch elliptical traces in planes like $x=3$ and $x=-3$. For $x=3$, $\frac{(y-1)^2}{4} + \frac{(z-2)^2}{9} = \frac{9}{4} - 1 = \frac{5}{4}$. This is an ellipse centered at $(3,1,2)$.
    *   Sketch hyperbolic traces in the planes $y=1$ and $z=2$.
    *   Connect these to form two distinct, bowl-shaped surfaces opening along the $x$-axis, separated by a gap between $x=-2$ and $x=2$.

---

### 💻 **Technology Note: Sketching Surfaces**

*Good news, everyone!* While manual sketching of these surfaces is crucial for developing your intuition, modern tools can significantly aid your visualization. Websites and software like **GeoGebra 3D Calculator** (many links provided in the original slide notes, e.g., `https://www.geogebra.org/3d/w7kpdgck`) are invaluable. You can input these equations directly and rotate the resulting 3D graphs to understand their structure from all angles. It's like having your own personal, virtual spaceship to explore these mathematical landscapes!

---

### 🧠 **Practice & Reflection: Sharpening Your Geometric Wits!**

To truly master these concepts, you must engage your brain! Let's tackle a few more problems.

#### **Problem 47: The Earth as a Perfect Ellipsoid**

**Problem:** Assuming that the Earth is a perfect ellipsoid with equatorial and polar radii of $6378$ and $6357$ kilometers, respectively, find the equation of this ellipsoid assuming it is centered at the origin and the axis of rotation is the $z$-axis.

**Solution:**
1.  **Recall the ellipsoid equation:** The standard equation for an ellipsoid centered at the origin is $\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$.
2.  **Assign radii:**
    *   The axis of rotation is the $z$-axis, so the polar radius corresponds to $c$. Thus, $c = 6357$ km.
    *   The equatorial radii are perpendicular to the axis of rotation. This means $a$ and $b$ are the equatorial radii. Thus, $a = 6378$ km and $b = 6378$ km.
3.  **Formulate the equation:** Substitute these values into the standard equation:
    $$\frac{x^2}{(6378)^2} + \frac{y^2}{(6378)^2} + \frac{z^2}{(6357)^2} = 1$$
    This is the equation of the Earth modeled as an oblate spheroid (an ellipsoid flattened at the poles).

---

#### **Problems 1-8: Identify and Match!**

*My dear students,* this is where the rubber meets the road! Match the following equations to their corresponding surface types and, if possible, to the general graphical representations (A-H) provided in your notes. (I will describe the graphs as best as possible in text).

**Graphs Description (for reference):**
*   **A:** Saddle shape (hyperbolic paraboloid).
*   **B:** Oval-shaped, bounded surface (ellipsoid).
*   **C:** Trough-like, parabolic cross-sections, extending infinitely in one direction (parabolic cylinder).
*   **D:** Two cones joined at an apex (elliptic cone).
*   **E:** Bowl-shaped, opening along one axis (elliptic paraboloid).
*   **F:** Two disconnected bowl-shaped surfaces, opening away from each other along one axis (hyperboloid of two sheets).
*   **G:** Hourglass-shaped, continuous surface (hyperboloid of one sheet).
*   **H:** Tube-like, circular cross-sections, extending infinitely in one direction (circular cylinder).

Let's break down each equation:

1.  **$x^2 = 2(1-y)$**
    *   **Analysis:** $x^2 = -2y + 2$. This equation is missing $z$. It has one squared term ($x^2$) and one linear term ($y$).
    *   **Type:** Parabolic Cylinder. Rulings are parallel to the $z$-axis. The generating curve $x^2=-2(y-1)$ is a parabola opening along the negative $y$-axis in the $xy$-plane, with vertex at $(0,1)$.
    *   **Match:** **C** (A parabolic cylinder opening along the y-axis).

2.  **$y^2 - 4y + z^2 = 4$**
    *   **Analysis:** Complete the square for $y$: $(y^2 - 4y + 4) + z^2 = 4 + 4 \implies (y-2)^2 + z^2 = 8$. This equation is missing $x$.
    *   **Type:** Circular Cylinder. Rulings are parallel to the $x$-axis. The generating curve $(y-2)^2 + z^2 = 8$ is a circle centered at $(0,2,0)$ in the $yz$-plane, with radius $\sqrt{8} = 2\sqrt{2}$.
    *   **Match:** **H** (A circular cylinder opening along the x-axis).

3.  **$\frac{x}{5} = \frac{y^2}{8} - \frac{z^2}{6}$**
    *   **Analysis:** One linear term ($x$) and two squared terms with opposite signs ($y^2$ and $z^2$).
    *   **Type:** Hyperbolic Paraboloid.
    *   **Match:** **A** (The saddle shape).

4.  **$\frac{x^2}{9} + \frac{z^2}{4} = \frac{y}{25}$**
    *   This should be D. The y term is supposed to be $y^2$.
    * **Analysis:** One linear term ($y$) and two squared terms with the same positive sign ($x^2$ and $z^2$).
    *   **Type:** Elliptic Paraboloid. Opens along the positive $y$-axis, with vertex at the origin.
    *   **Match:** **E** (A bowl-shaped surface opening along the y-axis).

5.  **$\frac{x^2}{16} + \frac{y^2}{9} + \frac{z^2}{4} = 1$**
    *   **Analysis:** All three variables squared, all positive, equals 1.
    *   **Type:** Ellipsoid.
    *   **Match:** **B** (The bounded oval shape).

6.  **$6y^2 + 4z^2 - 3x^2 = 12$**
    *   **Analysis:** Rearrange to standard form: $-\frac{3x^2}{12} + \frac{6y^2}{12} + \frac{4z^2}{12} = \frac{12}{12} \implies -\frac{x^2}{4} + \frac{y^2}{2} + \frac{z^2}{3} = 1$. One negative squared term, two positive squared terms, equals 1.
    *   **Type:** Hyperboloid of One Sheet. The axis of the hyperboloid is the $x$-axis (the axis corresponding to the negative term).
    *   **Match:** **G** (The hourglass shape, opening along the x-axis).

7.  **$5x^2 - 8y^2 + 32y - 10z^2 + 20z = 82$**
    *   **Analysis:** Group terms and complete the square:
        $5x^2 - 8(y^2 - 4y) - 10(z^2 - 2z) = 82$
        $5x^2 - 8(y^2 - 4y + 4) - 10(z^2 - 2z + 1) = 82 - 8(4) - 10(1)$
        $5x^2 - 8(y-2)^2 - 10(z-1)^2 = 82 - 32 - 10$
        $5x^2 - 8(y-2)^2 - 10(z-1)^2 = 40$
        Divide by 40: $\frac{x^2}{8} - \frac{(y-2)^2}{5} - \frac{(z-1)^2}{4} = 1$.
    *   **Type:** Hyperboloid of Two Sheets. One positive squared term ($x^2$), two negative squared terms. Centered at $(0,2,1)$, opens along the $x$-axis.
    *   **Match:** **F** (Two separate bowl shapes opening along the x-axis).

8.  **$15x^2 + 30x - 20y + 12z^2 + 55 = 0$**
    *   **Analysis:** Group $x$ terms and $z$ terms, move $y$ and constant to the other side:
        $15(x^2 + 2x) + 12z^2 = 20y - 55$
        Complete the square for $x^2+2x$: add $(2/2)^2=1$. Multiply by 15: add 15 to the right side.
        $15(x^2 + 2x + 1) + 12z^2 = 20y - 55 + 15$
        $15(x+1)^2 + 12z^2 = 20y - 40$
        $15(x+1)^2 + 12z^2 = 20(y-2)$
    *   **Type:** Elliptic Paraboloid. Two squared terms with the same positive sign, one linear term. Opens along the positive $y$-axis, with vertex at $(-1,2,0)$.
    *   **Match:** *Houston, we have a minor pedagogical anomaly!* This equation, like equation 4, is an elliptic paraboloid opening along the $y$-axis. However, there is only one graph **E** depicting an elliptic paraboloid. Graph **D** is clearly an elliptic cone. This suggests there might be an error in the original problem's selection of graphs or equations. In a real exam, I'd bring this to your professor's attention! For our purposes, we've correctly identified it as an elliptic paraboloid. If we had to choose one, it would share characteristics with **E**.
    * Dr. Lundholm note: Number 4 is an elliptic cone, so it matches with D. Professor Farnsworth missed the exponent on the $y^2$ term

---

### **Closing Remarks: A Grand Finale!**

*Hooray!* You've successfully navigated the wondrous world of cylinders and quadric surfaces. Understanding these fundamental 3D shapes is not just an academic exercise; it's vital for fields ranging from engineering and physics to computer graphics and architecture. You've learned to:
*   Identify cylinders by their missing variables.
*   Classify the six main quadric surfaces by their equations.
*   Skillfully use cross-sections (traces) to understand and sketch these surfaces.
*   Even handle those tricky cases where algebra reveals no surface at all!

Keep practicing, keep visualizing, and remember: the universe is not flat, and neither should your mathematical understanding be! Forward, into the academic unknown!

---