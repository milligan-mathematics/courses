# Math 303: Multivariable Calculus
## Section 13.1: Functions of Several Variables

**Greetings, esteemed future mathematicians! I am Professor Hubert J. Farnsworth, your trusty Milligan University Math TA and pedagogical assistant!** Get ready to embark on a grand adventure beyond the familiar plains of single-variable calculus into the glorious landscapes of higher dimensions!

For far too long, our mathematical journey has been confined to the humble two-dimensional graph, where a single dependent variable, typically $y$, depended on a single independent variable, $x$. "Why, that's practically prehistoric!" you might exclaim. And you'd be right! In the real world, phenomena rarely depend on just one factor. Temperature, atmospheric pressure, and even the structural integrity of my latest invention often depend on *multiple* variables: location ($x, y, z$), time ($t$), and perhaps even the ambient aroma of anchovies!

Today, we take our first intrepid steps into this exciting new realm. We'll learn how to define, analyze, and visualize functions that take multiple inputs and produce a single, real-valued output. This is the foundational knowledge for understanding surfaces, volumes, and the complex dynamics that govern our universe! Huzzah!

---

## Core Concepts & Definitions

### 1. Real-Valued Functions of Two Variables

Let's begin by extending our fundamental concept of a function.

**Definition: Real-Valued Function of Two Variables**

A **real-valued function** $f$ of two (real) variables, typically $x$ and $y$, is a rule that assigns a unique real number, denoted $f(x,y)$, to each ordered pair $(x,y)$ in a specific set called the **domain** $D$.
The domain $D$ is a subset of the Cartesian plane, i.e., $D \subset \mathbb{R}^2$.
The **range** of $f$ is the set of all real numbers that $f$ can output:
$$ \text{Range}(f) = \{f(x,y) \mid (x,y) \in D\} $$
If the domain of $f$ is not explicitly stated, it is assumed to be the **natural domain**: all ordered pairs $(x,y)$ for which $f(x,y)$ is a well-defined real number.
In the equation $z = f(x,y)$:
*   $x$ and $y$ are the **independent variables**.
*   $z$ is the **dependent variable**.

**Conceptual Link:** Think of it like a machine that takes two numbers as input $(x,y)$ and spits out a single number $z$. For instance, if $f(x,y)$ represents the temperature at a specific geographical location $(x,y)$, then $z$ is the temperature reading.

---

### 2. Interior Points, Boundary Points, and Open/Closed Regions

To describe the domains of these multivariable functions accurately, we need some new topological vocabulary.

**Definition: Interior Points, Boundary Points, and Open and Closed Regions**

Let $R$ be a region of the Cartesian plane $\mathbb{R}^2$.
1.  A point $(x_0, y_0) \in R$ is said to be an **interior point** of $R$ if there exists some $\varepsilon > 0$ (no matter how small!) such that all points within a distance of $\varepsilon$ from $(x_0, y_0)$ are also elements of $R$. That is, the entire **open disk** centered at $(x_0, y_0)$ with radius $\varepsilon$, denoted $\mathcal{B}_\varepsilon(x_0, y_0)$, is completely contained within $R$.
    $$ \mathcal{B}_\varepsilon(x_0, y_0) = \{(x,y) \mid \sqrt{(x-x_0)^2 + (y-y_0)^2} < \varepsilon\} $$
    *(This is crucial, students! An open disk does NOT include its boundary circle!)*

2.  A point $(x_0, y_0)$ is said to be a **boundary point** of $R$ if, for *every* $\varepsilon > 0$ (no matter how small!), the open disk $\mathcal{B}_\varepsilon(x_0, y_0)$ contains both points that lie *in* $R$ and points that lie *outside* $R$.
    *(A boundary point may or may not be an element of $R$ itself!)*

3.  A region $R$ is **open** if every point in $R$ is an interior point. (This means an open region does *not* contain any of its boundary points.)

4.  A region $R$ is **closed** if it contains *all* of its boundary points.

**Professor's Insight (Topology Corner):** In $\mathbb{R}^1$, you're familiar with open intervals like $(a,b)$ and closed intervals like $[a,b]$. This is the direct generalization to $\mathbb{R}^2$ and higher dimensions! An open interval doesn't contain its endpoints (boundary points). A closed interval does. Similarly, an open disk doesn't contain its bounding circle, while a closed disk does.

**Visual Aid (Professor's Sketch, inspired by Lundholm's notes):**

```
                 . Interior Point
                /
    +----------+----------+
    |         _---_         |
    |        /  .  \        |  Region R
    |       | (x0,y0) |      |
    |        \_   _/        |
    |          ---          |
    +----------+----------+
               . Boundary Point
              /
   Region R   +   . Outside R
             / \
            /   \
           /     \
          |       |
           \     /
            \   /
             \ /
              V
            Boundary
```

---

### 3. Bounded and Unbounded Regions

Another important characteristic for classifying regions is whether they are "finite" in extent.

**Definition: Bounded and Unbounded Regions**

Let $R$ be a region of the Cartesian plane $\mathbb{R}^2$.
1.  $R$ is said to be **bounded** if, for some positive real number $d > 0$, the entire region $R$ can be contained within an open disk of radius $d$ centered at the origin, i.e., $R \subseteq \mathcal{B}_d(0,0)$.
    *(Think of it as being able to draw a big enough circle around the entire region.)*

2.  A region for which no such $d$ exists is **unbounded**.
    *(These regions stretch off infinitely in at least one direction.)*

---

### 4. Graphs and Contour Maps of Functions of Two Variables

When we moved from $y=f(x)$ to $z=f(x,y)$, we moved from curves in $\mathbb{R}^2$ to surfaces in $\mathbb{R}^3$. Visualizing these surfaces can be tricky, so we have a powerful tool: contour maps!

**Definition: Graphs and Contour Maps of Functions of Two Variables**

1.  The **graph** of a function $f: D \to \mathbb{R}$ is the set of all ordered triples $(x,y,f(x,y))$ in $\mathbb{R}^3$ for which $(x,y) \in D$. Equivalently, it is the set of all points $(x,y,z)$ solving the equation $z = f(x,y)$. This graph forms a surface in three-dimensional space.

2.  A **contour** (or **level curve**) of $f$ is the set of points $(x,y)$ in the domain $D$ for which $f(x,y) = c$, for some fixed constant $c$. These are curves drawn in the $xy$-plane ($\mathbb{R}^2$).

3.  A collection of such contours for various values of $c$ is called a **contour map**.

**Conceptual Link:** Imagine slicing a 3D mountain (the graph of $z=f(x,y)$) with horizontal planes ($z=c$). Each slice produces a curve (the contour). If you project all these curves onto a 2D map, you get a topographical map, which is precisely a contour map! The closer the contour lines, the steeper the "mountain" or surface.

---

### 5. Functions of Three or More Variables

"Good news, everyone!" We can extend these concepts even further! What if a quantity depends on three variables? Or $n$ variables?

**Definition: Real-Valued Function of $n$ Variables**

A **real-valued function** $f$ of $n$ (real) variables, typically $x_1, x_2, \dots, x_n$, is a rule that assigns a unique real number, denoted $f(x_1, x_2, \dots, x_n)$, to each ordered $n$-tuple $(x_1, x_2, \dots, x_n)$ in a domain $D \subset \mathbb{R}^n$.
The range of $f$ is the set of all real numbers $\{f(x_1, \dots, x_n) \mid (x_1, \dots, x_n) \in D\}$.
In the equation $w = f(x_1, \dots, x_n)$:
*   $x_1, \dots, x_n$ are the **independent variables**.
*   $w$ is the **dependent variable**.

**Visualizing Higher Dimensions:**
*   For $n=2$, the graph $z=f(x,y)$ is a surface in $\mathbb{R}^3$.
*   For $n=3$, the graph $w=f(x,y,z)$ would exist in $\mathbb{R}^4$, which is impossible to visualize directly! This is where the concept of level sets becomes even more crucial.

**Level Surfaces (for functions of three variables):**
For a function $f(x,y,z)$, instead of level curves, we talk about **level surfaces**. A level surface is the set of points $(x,y,z)$ in the domain $D$ for which $f(x,y,z) = c$, for some fixed constant $c$. These are surfaces in $\mathbb{R}^3$ that we *can* visualize!

**Definition: Interior Points, Boundary Points, Open and Closed Regions, and Boundedness in $\mathbb{R}^n$**

These definitions generalize directly from $\mathbb{R}^2$ to $\mathbb{R}^n$ by replacing "open disk" with "open ball."

1.  A point $\mathbf{x}_0 = (x_{0,1}, \dots, x_{0,n}) \in R$ is an **interior point** of $R \subset \mathbb{R}^n$ if there exists an $\varepsilon > 0$ such that the entire **open ball** $\mathcal{B}_\varepsilon(\mathbf{x}_0)$ is contained within $R$.
    $$ \mathcal{B}_\varepsilon(\mathbf{x}_0) = \{\mathbf{x} \in \mathbb{R}^n \mid ||\mathbf{x} - \mathbf{x}_0|| < \varepsilon\} $$
    (Where $||\mathbf{x} - \mathbf{x}_0||$ is the distance between $\mathbf{x}$ and $\mathbf{x}_0$ in $\mathbb{R}^n$).

2.  A point $\mathbf{x}_0$ is a **boundary point** of $R$ if every open ball $\mathcal{B}_\varepsilon(\mathbf{x}_0)$ contains both points in $R$ and points outside $R$.

3.  A region $R \subset \mathbb{R}^n$ is **open** if every point in $R$ is an interior point.

4.  A region $R \subset \mathbb{R}^n$ is **closed** if it contains all of its boundary points.

5.  A region $R \subset \mathbb{R}^n$ is **bounded** if it can be contained within an open ball of some radius $d$ centered at the origin, i.e., $R \subseteq \mathcal{B}_d(\mathbf{0})$ for some $d > 0$. Otherwise, it is **unbounded**.

---

## Detailed Lecture & Worked Examples

"Prepare for enlightenment!" Now, let's put these definitions into action with some practical examples!

### Example 1: Finding the Domain and Range of a Function of Two Variables, and Evaluating It

*(Based on Hawkes Slide 4-8 and Professor Lundholm's Page 1)*

**Problem:** Determine the domain and range of each of the given functions, and evaluate each at the point $(1,2)$.

**a. $f(x,y) = \sqrt{y^2 - x}$**

**Domain:**
For $f(x,y)$ to be a well-defined real number, the expression under the square root must be non-negative.
$$ y^2 - x \ge 0 $$
$$ x \le y^2 $$
The domain $D$ is the set of all points $(x,y)$ in $\mathbb{R}^2$ such that $x \le y^2$.

**Geometric Interpretation of Domain:** This region is the parabola $x = y^2$ (a parabola opening to the right, symmetric about the $x$-axis) and all points to its left, including the parabola itself.

**Is this domain open, closed, bounded, or unbounded?**
*   **Closed:** Yes, because it includes its boundary points (the parabola $x=y^2$).
*   **Unbounded:** Yes, because it extends infinitely to the left and along the $y$-axis. No single disk can contain it.

**Range:**
Since $x \le y^2$, the expression $y^2 - x$ can take on any non-negative value. For example:
*   If we choose $x=0$, then $y^2-x = y^2$. As $y$ ranges over all real numbers, $y^2$ can be any value in $[0, \infty)$.
*   Thus, $\sqrt{y^2-x}$ can take on any value in $[0, \infty)$.
The range of $f$ is $[0, \infty)$.

**Evaluation at $(1,2)$:**
Substitute $x=1$ and $y=2$ into the function:
$$ f(1,2) = \sqrt{(2)^2 - 1} = \sqrt{4 - 1} = \sqrt{3} $$

**b. $g(x,y) = \ln(y - x)$**

**Domain:**
For $g(x,y)$ to be a well-defined real number, the argument of the natural logarithm must be strictly positive.
$$ y - x > 0 $$
$$ y > x $$
The domain $D$ is the set of all points $(x,y)$ in $\mathbb{R}^2$ such that $y > x$.

**Geometric Interpretation of Domain:** This region is the set of all points strictly above the line $y=x$.

**Is this domain open, closed, bounded, or unbounded?**
*   **Open:** Yes, because it does *not* include its boundary points (the line $y=x$). For any point $(x_0, y_0)$ with $y_0 > x_0$, you can always find a small enough $\varepsilon$ such that the open disk $\mathcal{B}_\varepsilon(x_0, y_0)$ is entirely above the line $y=x$.
*   **Unbounded:** Yes, because it extends infinitely upwards, downwards, left, and right, as long as $y > x$. No single disk can contain it.

**Range:**
Let $k = y-x$. Since $y > x$, $k$ can be any positive real number $(0, \infty)$.
As $k \to 0^+$, $\ln(k) \to -\infty$.
As $k \to \infty$, $\ln(k) \to \infty$.
Thus, $\ln(y-x)$ can take on any real value.
The range of $g$ is $(-\infty, \infty)$ or $\mathbb{R}$.

**Evaluation at $(1,2)$:**
Substitute $x=1$ and $y=2$ into the function:
$$ g(1,2) = \ln(2 - 1) = \ln(1) = 0 $$

---

### Example 2: Identifying Bounded and Unbounded Regions

*(Based on Hawkes Slide 14-16 and Professor Lundholm's Page 2)*

**Problem:** Consider the domain of $f(x,y) = \sqrt{y^2-x}$ from Example 1a, which is $D = \{(x,y) \mid y^2 \ge x\}$. Is this region bounded or unbounded? Is it open or closed?

**Solution:**
Let's revisit the domain $D = \{(x,y) \mid y^2 \ge x\}$.

**Open or Closed?**
The boundary of this region is the parabola $x = y^2$. Since the inequality $y^2 \ge x$ includes points *on* the parabola, the domain contains all its boundary points. Therefore, the region $D$ is **closed**.

**Bounded or Unbounded?**
To determine if it's bounded, we ask: can we enclose this entire region within an open disk centered at the origin, no matter how large?
The region $x \le y^2$ extends infinitely to the left and also infinitely up and down along the $y$-axis. For any radius $d$, we can always find points in $D$ such as $(-d^2-1, d)$ that lie outside any disk $\mathcal{B}_d(0,0)$.
Therefore, the region $D$ is **unbounded**.

**Visual Aid (representing $x \le y^2$):**

```
      ^ y
      |
      |   .  (Points like (-5,0), (-100,10) are in D,
      |        but far from origin)
      |          x = y^2
   ---+----------O-----------> x
      |         /
      |        /
      |       /
      |      /
      |     /
      V
```

---

### Example 3: Writing an Equation of a Surface as a Function of $x$ and $y$

*(Based on Hawkes Slide 20-21 and Professor Lundholm's Page 2)*

**Problem:** Write the half of the sphere $x^2 + y^2 + z^2 = 9$ above the $xy$-plane as a function of $x$ and $y$.

**Solution:**
We are given the equation of a sphere:
$$ x^2 + y^2 + z^2 = 9 $$
To express $z$ as a function of $x$ and $y$, we need to solve for $z$:
$$ z^2 = 9 - x^2 - y^2 $$
Taking the square root:
$$ z = \pm\sqrt{9 - x^2 - y^2} $$
The problem specifies "the half of the sphere *above the $xy$-plane*." This means we are only interested in values where $z \ge 0$.
So, we choose the positive square root:
$$ z = f(x,y) = \sqrt{9 - x^2 - y^2} $$

**Domain of $f(x,y)$:**
For $f(x,y)$ to be real-valued, the expression under the square root must be non-negative:
$$ 9 - x^2 - y^2 \ge 0 $$
$$ x^2 + y^2 \le 9 $$
This describes a closed disk centered at the origin with radius $3$. $D = \{(x,y) \mid x^2 + y^2 \le 9\}$.

**Range of $f(x,y)$:**
Since $z = \sqrt{9 - x^2 - y^2}$ and the domain is $x^2 + y^2 \le 9$:
*   The maximum value of $z$ occurs when $x^2+y^2$ is minimized (i.e., $x=0, y=0$), giving $z = \sqrt{9-0} = 3$.
*   The minimum value of $z$ occurs when $x^2+y^2$ is maximized (i.e., $x^2+y^2=9$), giving $z = \sqrt{9-9} = 0$.
So the range of $f$ is $[0, 3]$.

---

### Example 4: Examining a Quadric Surface and Its Contour Map

*(Based on Hawkes Slide 22-25 and Professor Lundholm's Page 3)*

**Problem:** Consider the function $z = f(x,y) = 9x^2 + 4y^2$. Identify the surface and describe its contour map.

**Solution:**
**Identifying the Surface:**
The equation $z = 9x^2 + 4y^2$ is a form of a **quadric surface**. Specifically, it is an **elliptic paraboloid** that opens upwards, with its vertex at the origin $(0,0,0)$.
It's "elliptic" because if you slice it with horizontal planes ($z=c$), you get ellipses. It's a "paraboloid" because if you slice it with planes parallel to the $xz$-plane ($y=k$), you get parabolas ($z = 9x^2 + 4k^2$), and if you slice it with planes parallel to the $yz$-plane ($x=k$), you get parabolas ($z = 9k^2 + 4y^2$).

**Contour Map:**
To find the contour lines (or level curves), we set $f(x,y) = c$ for various constant values of $c$.
$$ 9x^2 + 4y^2 = c $$
*   **If $c < 0$**: There are no solutions, as $9x^2 + 4y^2$ must be non-negative.
*   **If $c = 0$**: $9x^2 + 4y^2 = 0 \implies x=0, y=0$. The level curve is just the single point $(0,0)$ (the origin).
*   **If $c > 0$**: We can rewrite the equation by dividing by $c$:
    $$ \frac{9x^2}{c} + \frac{4y^2}{c} = 1 $$
    $$ \frac{x^2}{c/9} + \frac{y^2}{c/4} = 1 $$
    This is the standard form of an **ellipse** centered at the origin.
    *   The semi-major/minor axes are $a = \sqrt{c/9} = \frac{\sqrt{c}}{3}$ and $b = \sqrt{c/4} = \frac{\sqrt{c}}{2}$.
    *   Since $\frac{\sqrt{c}}{2} > \frac{\sqrt{c}}{3}$, the major axis is along the $y$-axis.

**Example Contour Lines:**
Let's choose a few values for $c$:
*   If $c = 1$: $\frac{x^2}{1/9} + \frac{y^2}{1/4} = 1$. This is an ellipse with semi-axes $1/3$ (along $x$) and $1/2$ (along $y$).
*   If $c = 4$: $\frac{x^2}{4/9} + \frac{y^2}{1} = 1$. This is an ellipse with semi-axes $2/3$ (along $x$) and $1$ (along $y$).
*   If $c = 9$: $\frac{x^2}{1} + \frac{y^2}{9/4} = 1$. This is an ellipse with semi-axes $1$ (along $x$) and $3/2$ (along $y$).

**Interpretation of the Contour Map:**
As $c$ increases, the ellipses get larger, but they are "stretched" more in the $y$-direction than the $x$-direction (because of the $4y^2$ vs. $9x^2$ creating smaller denominator for $y$ when in standard form, i.e., larger semi-axis). The contour lines get closer together as $c$ increases, indicating a steeper slope on the elliptic paraboloid further from the origin.

**Visual Aid (Professor's Sketch, similar to Lundholm's):**

```
        ^ y
        |
        |     .  (c=9)
        |   /   \
    c=4 |  |     |
        |  |  .  |
    c=1 |  | / \ |
    ----+--+-----+-----  > x
        |  | \ / |
        |  |  .  |
        |  |     |
        |   \   /
    c=0 .    '

    (Nested ellipses, becoming larger for larger 'c')
```

---

### Example 5: Examining a Surface and Its Contour Map

*(Based on Hawkes Slide 26-28 and Professor Lundholm's Page 3)*

**Problem:** Consider the surface defined by the function $g(x,y) = \ln(y-x)$. Describe its contour map.

**Solution:**
We already determined the domain of $g(x,y)$ in Example 1b: $D = \{(x,y) \mid y > x\}$.
The range is $(-\infty, \infty)$.
The surface itself looks like a "curtain" stretching infinitely upwards and downwards, always remaining above the line $y=x$. As $(x,y)$ approaches the line $y=x$ from above, $y-x \to 0^+$, so $z = \ln(y-x) \to -\infty$. As $y-x$ gets larger, $z$ increases without bound.

**Contour Map:**
To find the level curves, we set $g(x,y) = c$ for some constant $c$:
$$ \ln(y-x) = c $$
To solve for $y-x$, we exponentiate both sides with base $e$:
$$ y-x = e^c $$
Let $k = e^c$. Since $e^c$ is always positive, $k$ will always be positive.
$$ y = x + k $$
The level curves are a family of **parallel lines** with slope 1. Since $k = e^c > 0$, all these lines lie strictly above the line $y=x$.

**Example Contour Lines:**
*   If $c = -5$: $k = e^{-5} \approx 0.0067$. (Line very close to $y=x$)
*   If $c = 0$: $k = e^0 = 1$. ($y = x+1$)
*   If $c = 1$: $k = e^1 \approx 2.718$. ($y = x+2.718$)
*   If $c = 2$: $k = e^2 \approx 7.389$. ($y = x+7.389$)

**Interpretation of the Contour Map:**
The level curves are parallel lines. Notice how the lines "bunch up" when $c$ is a large negative number (e.g., $c=-5$). This means $k$ is very small, and the lines are very close to the boundary line $y=x$. This indicates that the surface $z = \ln(y-x)$ drops off very steeply as it approaches the line $y=x$ (where it tends to $-\infty$). Conversely, for large positive $c$, $k$ is large, and the lines are further apart, indicating a gentler slope.

**Visual Aid (Professor's Sketch, similar to Lundholm's):**

```
        ^ y
        |
        |  y = x + e^2 (c=2)
        |  y = x + e^1 (c=1)
        |  y = x + 1   (c=0)
        |  y = x + e^-5 (c=-5) (closely spaced lines here)
        | /
        |/ (boundary line y=x, not included)
   -----+----------------> x
       /|
      / |
     /  |
```

---

### Example 6: Writing an Equation of a Surface as a Function of Two Variables Other than $x$ and $y$

*(Based on Hawkes Slide 30-31 and Professor Lundholm's Page 4)*

**Problem:** Express the planar surface $x + 2y + 3z = 2$ as a function of two variables other than the pair $x$ and $y$.

**Solution:**
We can express any of the variables ($x, y, z$) as a function of the other two, provided the domain is chosen appropriately.

**1. Expressing $x$ as a function of $y$ and $z$:**
Given $x + 2y + 3z = 2$, solve for $x$:
$$ x = 2 - 2y - 3z $$
So, we have a function $f(y,z) = 2 - 2y - 3z$.
Here, $y$ and $z$ are the independent variables, and $x$ is the dependent variable. The "graph" of this function would be a plane in $\mathbb{R}^3$, where the output corresponds to the $x$-coordinate.

**2. Expressing $y$ as a function of $x$ and $z$:**
Given $x + 2y + 3z = 2$, solve for $y$:
$$ 2y = 2 - x - 3z $$
$$ y = \frac{2 - x - 3z}{2} $$
$$ y = 1 - \frac{1}{2}x - \frac{3}{2}z $$
So, we have a function $g(x,z) = 1 - \frac{1}{2}x - \frac{3}{2}z$.
Here, $x$ and $z$ are the independent variables, and $y$ is the dependent variable. The "graph" of this function would also be the same plane, but the output corresponds to the $y$-coordinate.

**Professor's Remark:** The choice of which variable is "dependent" is often dictated by the context of the problem. Mathematically, these are just different ways to represent the same geometric object (a plane in $\mathbb{R}^3$).

---

### Example 7: Visualizing the Level Surfaces of a Function of Three Variables

*(Based on Hawkes Slide 46 and Professor Lundholm's Page 4)*

**Problem:** Consider the function $f(x,y,z) = \sqrt{x^2 + y^2 + z^2}$. Describe its level surfaces.

**Solution:**
**Understanding the Function:**
The expression $\sqrt{x^2 + y^2 + z^2}$ represents the **distance** from the origin $(0,0,0)$ to the point $(x,y,z)$ in $\mathbb{R}^3$.

**Level Surfaces:**
To find the level surfaces, we set $f(x,y,z) = c$ for some constant $c$:
$$ \sqrt{x^2 + y^2 + z^2} = c $$
Since distance cannot be negative, $c$ must be a non-negative real number ($c \ge 0$).

*   **If $c = 0$**: $\sqrt{x^2 + y^2 + z^2} = 0 \implies x^2 + y^2 + z^2 = 0$. This implies $x=0, y=0, z=0$. The level surface is just the **single point**, the origin $(0,0,0)$.

*   **If $c > 0$**: Square both sides:
    $$ x^2 + y^2 + z^2 = c^2 $$
    This is the equation of a **sphere** centered at the origin $(0,0,0)$ with radius $c$.

**Interpretation of Level Surfaces:**
The level surfaces of $f(x,y,z) = \sqrt{x^2 + y^2 + z^2}$ are a family of concentric spheres centered at the origin. As $c$ increases, the radius of the spheres increases.

**Visual Aid (Professor Lundholm's Figure 15):** Imagine an onion, where each layer is a level surface. The values $c=1, 2, 4$ correspond to spheres of radius $1, 2, 4$ respectively.

---

### Problem 61: Describing Level Surfaces (from Professor Lundholm's Notes)

**Problem:** Describe the level surfaces of the three-variable function $f(x, y, z) = x^2 + 2y^2 + 3z^2$.

**Solution:**
To find the level surfaces, we set $f(x,y,z) = k$ for some constant $k$:
$$ x^2 + 2y^2 + 3z^2 = k $$
*   **If $k < 0$**: There are no solutions, as $x^2 + 2y^2 + 3z^2$ must be non-negative.
*   **If $k = 0$**: $x^2 + 2y^2 + 3z^2 = 0 \implies x=0, y=0, z=0$. The level surface is the **single point**, the origin $(0,0,0)$.
*   **If $k > 0$**: We can divide by $k$ to get the standard form:
    $$ \frac{x^2}{k} + \frac{y^2}{k/2} + \frac{z^2}{k/3} = 1 $$
    This is the equation of an **ellipsoid** centered at the origin $(0,0,0)$.
    The semi-axes along the $x, y, z$ axes are $\sqrt{k}$, $\sqrt{k/2}$, and $\sqrt{k/3}$, respectively.
    As $k$ increases, the ellipsoids grow larger.

---

### Problem 63: Topographical Map Analysis (from Professor Lundholm's Notes)

*(Based on Professor Lundholm's Pages 5-6)*

**Problem:** The figure below shows a portion of a topographical map of an area near Julian, California. Examine the map and answer the following.

**(Map Image - Refer to the provided PDF for context)**

**a. Estimate the direction of the steepest slope from point A.**

**Solution:**
On a contour map, the steepest slope is always perpendicular to the contour lines. The contour lines represent lines of constant elevation. From point A, the nearest contour lines are 3600 and 3800. The elevation increases as you go west/south-west (towards 4000, 4400, etc.) and decreases as you go east/north-east (towards 3600, potentially lower).
Therefore, the steepest *uphill* direction from A would be roughly **South-West**, perpendicular to the 3600/3800 contour lines, pointing towards higher elevation. The steepest *downhill* direction would be roughly **North-East**.

**b. Find a possible "steepest path" from point A to point B.**

**Solution:**
A "steepest path" (also known as a path of steepest ascent/descent) is a path that always follows the direction perpendicular to the contour lines. To go from A to B (which appears to be at a higher elevation, near the 4800 contour), one would need to traverse the contours such that their path is always perpendicular to them, generally heading in an uphill direction.
Visually, from point A, one would move generally in the **West-North-West** direction, crossing the 3800, 4000, 4400, and 4800 contour lines at right angles.

**c. Estimate the elevation of point C.**

**Solution:**
Point C is located between the 3800 and 4000 contour lines. It appears to be roughly halfway or slightly closer to the 3800 line.
A reasonable estimate for the elevation of point C would be approximately **3850 feet** to **3900 feet**.

**d. Find a point D where the northern direction is uphill, while it is downhill to the southwest.**

**Solution:**
Let's analyze the conditions:
*   "northern direction is uphill": Moving North from point D should lead to higher elevation contour lines.
*   "downhill to the southwest": Moving South-West from point D should lead to lower elevation contour lines.

Let's examine the map near point C.
*   If you are at point C (approx 3850 ft), moving directly North will take you towards the 4000 ft contour line (and higher), so the northern direction is indeed uphill.
*   If you move South-West from point C, you will quickly cross the 3800 ft line and then the 3600 ft line. So, moving South-West from C is downhill.

Therefore, **point C itself** serves as a good candidate for point D, satisfying both conditions. Any point in the vicinity of C that is between the 3800 and 4000 ft contours and positioned similarly relative to the contours would also work.

---

## Practice & Reflection

"Huzzah! You've absorbed a tremendous amount of knowledge today!" Now, let's solidify your understanding with a few reflective questions.

1.  **Conceptual Connection:** In single-variable calculus, we often discuss "intervals" for domains. How do the concepts of "open region" and "closed region" in multivariable calculus generalize the idea of open vs. closed intervals? Provide an example of a domain in $\mathbb{R}^2$ that is neither open nor closed.
2.  **Visualization Challenge:** If the level curves of a function $f(x,y)$ are closely spaced circles near the origin and widely spaced circles further away, what does this tell you about the shape of the surface $z=f(x,y)$ near the origin compared to further out? Is it steeper or flatter?
3.  **Higher Dimensions:** If you were given a function $g(x,y,z,w)$, how would you try to "visualize" its behavior, given that its graph would be in $\mathbb{R}^5$? What would its "level sets" be called, and what kind of geometric objects would they represent?
4.  **Real-World Application:** Think of a physical quantity (e.g., temperature, pressure, population density) that could be modeled by a function of two or three variables. Describe its domain, range, and what its level curves/surfaces would represent in that context.

---

**And that concludes our expedition for Section 13.1! Keep your brains well-oiled, and your pencils sharpened! Until next time, stay curious!**