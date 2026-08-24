"Good news, everyone! Today, we embark on a truly monumental journey into the uncharted territories of **Multivariable Calculus!** Prepare your brains for a magnificent leap from the mere line segments of single-variable integration to the boundless expanses of two-dimensional regions. We're talking about **Section 14.1: Double Integrals!**"

---

# Multivariable Calculus (Math 303) - Lecture Notes 14.1: Double Integrals

### Professor Hubert J. Farnsworth, Expert Math TA and Pedagogical Assistant
_Milligan University, Department of Applied Mathematical Futurology_

---

## **1. The Grand Unveiling of Double Integrals (and their Riemann-tastic Approximations!)**

Remember how in single-variable calculus, we used definite integrals to calculate the area under a curve? Well, my brilliant students, prepare for an upgrade! We're not just finding areas anymore; we're launching into the third dimension to calculate **volumes under surfaces**! And, if you're a particular fan of signed quantities, we can also talk about the **signed volume** between a surface and the $xy$-plane.

Just like with single integrals, our journey begins with the humble Riemann sum. Imagine you have a function, say $z = f(x,y)$, that defines a surface floating gloriously above a rectangular region $R$ in the $xy$-plane. To find the volume under this surface, we'll slice and dice $R$ into a grid of tiny subrectangles.

### **The Fundamental Concept: Riemann Sums in 2D**

1.  **Partition the Region:** Divide the interval $[a,b]$ on the $x$-axis into $m$ subintervals, each of width $\Delta x = \frac{b-a}{m}$. Similarly, divide the interval $[c,d]$ on the $y$-axis into $n$ subintervals, each of width $\Delta y = \frac{d-c}{n}$.
2.  **Form Subrectangles:** These divisions create a grid of $m \times n$ subrectangles, each with area $\Delta A = \Delta x \Delta y$. Let's call a generic subrectangle $R_{ij}$.
3.  **Sample Point:** In each subrectangle $R_{ij}$, we choose a sample point $(x_i^*, y_j^*)$. This could be the top-right corner, the midpoint, or any point within the subrectangle.
4.  **Form Rectangular Prisms:** At each sample point $(x_i^*, y_j^*)$, we evaluate the function $f(x_i^*, y_j^*)$. This value represents the height of a rectangular prism (a tiny box!) whose base is $R_{ij}$ and whose height touches the surface $z = f(x,y)$. The volume of this tiny prism is $f(x_i^*, y_j^*) \Delta A$.
5.  **Sum 'em Up!:** We sum the volumes of all these tiny prisms. This gives us an approximation of the total volume under the surface:
    $$V \approx \sum_{j=1}^n \sum_{i=1}^m f(x_i^*, y_j^*) \Delta A$$
    This, my dear students, is a **double Riemann sum**!

### **Definition: The Double Integral**

As we make our subrectangles infinitely small (i.e., let $m$ and $n$ approach infinity), the approximation becomes exact. This limit defines the **double integral**:

**Definition: Double Integral**

Given a function $f(x,y)$ defined on the region $R = [a,b] \times [c,d]$ (a closed rectangle), we define the **double integral of $f$ over $R$** to be the value

$$ \iint_R f(x, y) dA = \lim_{m,n \to \infty} \sum_{j=1}^n \sum_{i=1}^m f(x_i^*, y_j^*) \Delta x \Delta y $$

provided the limit exists. If the limit exists, we say $f$ is **integrable over $R$**, and define the **signed volume** between the surface $z = f(x, y)$ and the $xy$-plane over the region $R$ to be the double integral.

_Observe the majestic diagram illustrating this concept:_

```
          z = f(x,y)
          /|\
         / | \
        /  |  \
       /   |   \
      /    |    \
     /     |     \
    /      |      \
   /       |       \
  /________|________\  Surface
 |         |         |
 |   _ _ _ | _ _ _   |
c|  y_j     |    y    |d
 |  _ _ _ _|_ _ _ _  |
 | /   /\  |  /   \  |
 |/___/___\_|/_____\ | Δy
 |         |         |
 |   ΔA    |         | Δy_j
 |_________|_________|____\ xy-plane
 a     x_i   b    x  /
            Δx
```

Here, $\Delta A = \Delta x \Delta y$ represents the area of a small subrectangle in the $xy$-plane, and $f(x_i^*, y_j^*)$ is the height. Summing these volumes gives us the total signed volume.

### **Example 1: Using Riemann Sums to Estimate Volume under a Surface**

Let's put this into practice, though I must warn you, these are often *computationally intensive* and usually performed by advanced calculations units (or computers, as we call them these days).

**Problem:** Given the function $f(x, y) = 15 - x^2 - 2y^2$ and the region $R$ defined by $a=1, b=5/2$, $c=1/2, d=2$, find the Riemann sum approximations corresponding to $n=m=5, 10,$ and $20$ equal partitions of each interval. Assume $(x_i^*, y_j^*)$ is the top-right corner of each subrectangle. The exact value of the double integral of $f$ over $R$ is $297/16$ cubic units.

**Solution Approach:**

1.  **Determine $\Delta x$ and $\Delta y$**:
    *   For $n=m=5$: $\Delta x = \frac{5/2 - 1}{5} = \frac{3/2}{5} = \frac{3}{10}$. $\Delta y = \frac{2 - 1/2}{5} = \frac{3/2}{5} = \frac{3}{10}$. So $\Delta A = \frac{9}{100}$.
    *   For $n=m=10$: $\Delta x = \frac{3/2}{10} = \frac{3}{20}$. $\Delta y = \frac{3/2}{10} = \frac{3}{20}$. So $\Delta A = \frac{9}{400}$.
    *   For $n=m=20$: $\Delta x = \frac{3/2}{20} = \frac{3}{40}$. $\Delta y = \frac{3/2}{20} = \frac{3}{40}$. So $\Delta A = \frac{9}{1600}$.

2.  **Determine Sample Points:** For the top-right corner, $x_i^* = a + i \Delta x$ and $y_j^* = c + j \Delta y$.

3.  **Compute the Sum:** Calculate $\sum_{j=1}^n \sum_{i=1}^m f(x_i^*, y_j^*) \Delta A$ for each case.

(As Professor Lundholm correctly pointed out, this is a job for a computer, not a mere mortal with a pen and paper. But the concept is what matters!)

**Results (from computations):**

*   For $n=m=5$:
    *   Riemann sum $= \frac{6237}{400} \approx 15.5925$
    *   Difference from exact value $(18.5625) \approx 2.97$

*   For $n=m=10$:
    *   Riemann sum $= \frac{54729}{3200} \approx 17.1028$
    *   Difference from exact value $\approx 1.460$

*   For $n=m=20$:
    *   Riemann sum $= \frac{228339}{12800} \approx 17.8390$
    *   Difference from exact value $\approx 0.724$

Notice how as $n$ and $m$ increase, our approximation gets closer and closer to the exact value of $297/16 = 18.5625$. This, my friends, is the power of the limit!

---

## **2. Fubini's Fantastic Theorem: Slicing and Dicing for Fun and Profit (of Volume!)**

While Riemann sums are conceptually vital, they are a pain in the posterior to calculate by hand. Fortunately, mathematical genius comes to the rescue! We can evaluate double integrals using **iterated integrals**, a sequence of single integrals. This technique is encapsulated in **Fubini's Theorem**.

### **The Grand Principle: Iterated Integrals**

Imagine you're trying to find the volume of a very peculiar loaf of bread. Instead of summing up tiny breadcrumbs, you might try slicing the bread into thin pieces, finding the area of each slice, and then summing up (integrating) those areas along the length of the loaf. That's precisely what Fubini's Theorem allows us to do!

### **Theorem: Fubini's Theorem**

If $f(x, y)$ is **continuous** on the rectangular region $R = [a,b] \times [c,d]$, then the double integral can be evaluated as an iterated integral in two ways:

$$ \iint_R f(x, y) dA = \int_a^b \int_c^d f(x, y) dy dx = \int_c^d \int_a^b f(x, y) dx dy $$

"Aha! Observe this rather useful diagram, students! It perfectly illustrates the chopping process!"

```
          ↑                      ↑
          |                      |
      length of            chopping knife
      food knife           pointing in direction
          |                      |
          V                      V

    +-----------------+        +-----------------+
    |                 |        |                 |
    |  Area of Cross  |        |  Consecutive    |
    |     Section     |        |     Slices      |
    |                 |        |     Direction   |
    +-----------------+        +-----------------+

           Adds up areas to get volume!
```

"That's right! When integrating $dy dx$, you integrate with respect to $y$ first (from $c$ to $d$), treating $x$ as a constant. This gives you an area function, $A(x) = \int_c^d f(x,y) dy$. Then, you integrate this area function with respect to $x$ (from $a$ to $b$) to get the total volume: $\int_a^b A(x) dx$. It's like my glorious TEXTOR - TS700-UB high-speed slicer, producing perfect cuts of pepperoni and bacon, one after another, building up a delicious pile!"

The order ($dy dx$ or $dx dy$) often doesn't matter for rectangular regions (as long as $f$ is continuous), but choosing the simpler order can save you from a mathematical headache!

### **Example 2: Using Fubini's Theorem to Evaluate a Double Integral**

**Problem:** Evaluate the double integral $\iint_R (6xy^2 - 4y) dA$, where $R = [0,1] \times [0,2]$.

**Solution:**

Here, $a=0, b=1$ and $c=0, d=2$. Since the function is continuous, we can use Fubini's Theorem. Let's choose the order $dy dx$.

$$ \iint_R (6xy^2 - 4y) dA = \int_0^1 \int_0^2 (6xy^2 - 4y) dy dx $$

First, integrate with respect to $y$, treating $x$ as a constant:
$$ \int_0^2 (6xy^2 - 4y) dy $$
$$ = \left[ 6x \frac{y^3}{3} - 4 \frac{y^2}{2} \right]_0^2 $$
$$ = \left[ 2xy^3 - 2y^2 \right]_0^2 $$
Now, evaluate at the limits $y=2$ and $y=0$:
$$ = (2x(2)^3 - 2(2)^2) - (2x(0)^3 - 2(0)^2) $$
$$ = (2x \cdot 8 - 2 \cdot 4) - (0 - 0) $$
$$ = 16x - 8 $$

Now, we integrate this result with respect to $x$:
$$ \int_0^1 (16x - 8) dx $$
$$ = \left[ 16 \frac{x^2}{2} - 8x \right]_0^1 $$
$$ = \left[ 8x^2 - 8x \right]_0^1 $$
Evaluate at the limits $x=1$ and $x=0$:
$$ = (8(1)^2 - 8(1)) - (8(0)^2 - 8(0)) $$
$$ = (8 - 8) - (0 - 0) $$
$$ = 0 $$

Therefore, $\iint_R (6xy^2 - 4y) dA = 0$. (This indicates the signed volume under the surface is zero over this region – perhaps portions are above and below the $xy$-plane, cancelling out!)

### **Example 3: Using Fubini's Theorem to Evaluate a Double Integral (Revisiting Example 1)**

**Problem:** Evaluate the double integral $\iint_R (15 - x^2 - 2y^2) dA$, where $R = [1, 5/2] \times [1/2, 2]$.

**Solution:**

This is the same function and region as Example 1. Now, we can find the exact value using Fubini's Theorem. Let's integrate with respect to $x$ first, then $y$.

$$ \iint_R (15 - x^2 - 2y^2) dA = \int_{1/2}^2 \int_1^{5/2} (15 - x^2 - 2y^2) dx dy $$

First, integrate with respect to $x$, treating $y$ as a constant:
$$ \int_1^{5/2} (15 - x^2 - 2y^2) dx $$
$$ = \left[ 15x - \frac{x^3}{3} - 2y^2 x \right]_1^{5/2} $$
Evaluate at the limits $x=5/2$ and $x=1$:
$$ = \left( 15\left(\frac{5}{2}\right) - \frac{(5/2)^3}{3} - 2y^2 \left(\frac{5}{2}\right) \right) - \left( 15(1) - \frac{(1)^3}{3} - 2y^2 (1) \right) $$
$$ = \left( \frac{75}{2} - \frac{125/8}{3} - 5y^2 \right) - \left( 15 - \frac{1}{3} - 2y^2 \right) $$
$$ = \left( \frac{75}{2} - \frac{125}{24} - 5y^2 \right) - \left( \frac{45}{3} - \frac{1}{3} - 2y^2 \right) $$
$$ = \left( \frac{75}{2} - \frac{125}{24} - 5y^2 \right) - \left( \frac{44}{3} - 2y^2 \right) $$
Combine terms:
$$ = \frac{75}{2} - \frac{125}{24} - \frac{44}{3} - 5y^2 + 2y^2 $$
$$ = \frac{75 \cdot 12}{24} - \frac{125}{24} - \frac{44 \cdot 8}{24} - 3y^2 $$
$$ = \frac{900 - 125 - 352}{24} - 3y^2 $$
$$ = \frac{423}{24} - 3y^2 $$
Simplify the fraction: $\frac{423}{24} = \frac{141}{8}$.
$$ = \frac{141}{8} - 3y^2 $$

Now, integrate this result with respect to $y$:
$$ \int_{1/2}^2 \left( \frac{141}{8} - 3y^2 \right) dy $$
$$ = \left[ \frac{141}{8} y - 3 \frac{y^3}{3} \right]_{1/2}^2 $$
$$ = \left[ \frac{141}{8} y - y^3 \right]_{1/2}^2 $$
Evaluate at the limits $y=2$ and $y=1/2$:
$$ = \left( \frac{141}{8}(2) - (2)^3 \right) - \left( \frac{141}{8}\left(\frac{1}{2}\right) - \left(\frac{1}{2}\right)^3 \right) $$
$$ = \left( \frac{141}{4} - 8 \right) - \left( \frac{141}{16} - \frac{1}{8} \right) $$
$$ = \left( \frac{141 - 32}{4} \right) - \left( \frac{141}{16} - \frac{2}{16} \right) $$
$$ = \frac{109}{4} - \frac{139}{16} $$
$$ = \frac{109 \cdot 4}{16} - \frac{139}{16} $$
$$ = \frac{436 - 139}{16} $$
$$ = \frac{297}{16} $$

Magnificent! The exact value matches the one given in Example 1! This demonstrates the power of Fubini's Theorem over tedious Riemann sums.

---

## **3. Beyond Rectangles: Double Integrals Over General Bounded Regions**

Not all regions are perfect rectangles, my friends. Sometimes, the boundaries of our integration domain are curves, functions of $x$ or $y$. For these more exotic regions, Fubini's Theorem still applies, but our limits of integration will be functions, not just constants.

We categorize these general bounded regions into two types:

### **Type I Regions**

A region $R$ is of **Type I** if it lies between two continuous functions of $x$. That is,
$$ R = \{ (x,y) \mid a \le x \le b, \quad g_1(x) \le y \le g_2(x) \} $$
For a Type I region, the double integral of $f(x,y)$ over $R$ is given by:
$$ \iint_R f(x, y) dA = \int_a^b \int_{g_1(x)}^{g_2(x)} f(x, y) dy dx $$
_See Professor Lundholm's marvelous illustration (left side of his page 3):_
```
         Z
         ^
         |      z = f(x,y)
         |     /
         |    /
         |   /
         |  /
         | /
         +---------y=g2(x)
         |\       /
         | \     /
         |  \   /
         |   \ /
         |    R (on xy-plane)
         |   / \
         |  /   \
         | /     \
         +---------y=g1(x)
         | a   x_0   b
         +---------------> X
```

Here, for each $x$ from $a$ to $b$, $y$ varies from $g_1(x)$ to $g_2(x)$. You integrate with respect to $y$ first, then $x$.

### **Type II Regions**

A region $R$ is of **Type II** if it lies between two continuous functions of $y$. That is,
$$ R = \{ (x,y) \mid c \le y \le d, \quad h_1(y) \le x \le h_2(y) \} $$
For a Type II region, the double integral of $f(x,y)$ over $R$ is given by:
$$ \iint_R f(x, y) dA = \int_c^d \int_{h_1(y)}^{h_2(y)} f(x, y) dx dy $$
_See Professor Lundholm's marvelous illustration (right side of his page 3):_
```
         Z
         ^
         |      z = f(x,y)
         |     /
         |    /
         |   /
         |  /
         | /
  d -----+---------x=h2(y)
   |\    |   /
   | \   |  /
   |  \  | /
   |   \ |/
   |    R (on xy-plane)
   |   / |\
   |  /  | \
   | /   |  \
  c -+---------x=h1(y)
     |       y_0
     +---------------> Y
     a           b     X
```

Here, for each $y$ from $c$ to $d$, $x$ varies from $h_1(y)$ to $h_2(y)$. You integrate with respect to $x$ first, then $y$.

Sometimes, a region can be both Type I and Type II, and you can choose the order that simplifies the integration. Other times, you may have to decompose a complex region into simpler Type I or Type II subregions. Or, you might *have* to choose one type over the other because the functions are easier to express that way, or because one order results in an unintegrable inner function (a common pedagogical trick!).

### **Example 4: Evaluating a Double Integral Over a General Region**

**Problem:** Evaluate $\iint_R 5y dA$ over the region $R$ bounded between $y = 3x^2$ and $y = 2 + x^2$.

**Solution:**

First, we need to sketch the region $R$ and determine the limits of integration.

1.  **Find Intersection Points:** Set the two functions equal to find where they intersect:
    $3x^2 = 2 + x^2$
    $2x^2 = 2$
    $x^2 = 1$
    $x = \pm 1$

    When $x=1$, $y = 3(1)^2 = 3$ (also $y = 2+(1)^2=3$). Intersection point: $(1,3)$.
    When $x=-1$, $y = 3(-1)^2 = 3$ (also $y = 2+(-1)^2=3$). Intersection point: $(-1,3)$.

2.  **Sketch the Region:**
    *   $y = 3x^2$ is a parabola opening upwards, passing through the origin, narrower.
    *   $y = 2 + x^2$ is also a parabola opening upwards, but shifted up by $2$ units, wider.
    *   The region $R$ is the area enclosed between these two parabolas, from $x=-1$ to $x=1$.

    Visually, for any $x$ between $-1$ and $1$, the lower boundary is $y = 3x^2$ and the upper boundary is $y = 2 + x^2$. This is clearly a **Type I region**.

3.  **Set Up the Integral:**
    The limits for $x$ are constants: $a=-1, b=1$.
    The limits for $y$ are functions of $x$: $g_1(x) = 3x^2, g_2(x) = 2+x^2$.
    Our integrand is $f(x,y) = 5y$.

    So, the integral is:
    $$ \iint_R 5y dA = \int_{-1}^1 \int_{3x^2}^{2+x^2} 5y dy dx $$

4.  **Evaluate the Inner Integral (with respect to $y$):**
    $$ \int_{3x^2}^{2+x^2} 5y dy = \left[ \frac{5}{2} y^2 \right]_{3x^2}^{2+x^2} $$
    $$ = \frac{5}{2} (2+x^2)^2 - \frac{5}{2} (3x^2)^2 $$
    $$ = \frac{5}{2} (4 + 4x^2 + x^4) - \frac{5}{2} (9x^4) $$
    $$ = \frac{5}{2} (4 + 4x^2 + x^4 - 9x^4) $$
    $$ = \frac{5}{2} (4 + 4x^2 - 8x^4) $$
    $$ = 5 (2 + 2x^2 - 4x^4) $$
    $$ = 10 + 10x^2 - 20x^4 $$

5.  **Evaluate the Outer Integral (with respect to $x$):**
    $$ \int_{-1}^1 (10 + 10x^2 - 20x^4) dx $$
    Since the integrand is an even function ($f(-x)=f(x)$) and the interval is symmetric about $0$, we can simplify:
    $$ = 2 \int_0^1 (10 + 10x^2 - 20x^4) dx $$
    $$ = 2 \left[ 10x + 10\frac{x^3}{3} - 20\frac{x^5}{5} \right]_0^1 $$
    $$ = 2 \left[ 10x + \frac{10}{3}x^3 - 4x^5 \right]_0^1 $$
    $$ = 2 \left( \left( 10(1) + \frac{10}{3}(1)^3 - 4(1)^5 \right) - (0) \right) $$
    $$ = 2 \left( 10 + \frac{10}{3} - 4 \right) $$
    $$ = 2 \left( 6 + \frac{10}{3} \right) $$
    $$ = 2 \left( \frac{18}{3} + \frac{10}{3} \right) $$
    $$ = 2 \left( \frac{28}{3} \right) $$
    $$ = \frac{56}{3} $$

The value of the double integral is $\frac{56}{3}$.

### **Example 5: Evaluating a Double Integral (The Case of the Troublesome Integrand!)**

**Problem:** Evaluate the iterated integral $\int_1^4 \int_y^{\sqrt{y}} \frac{\sin x}{x} dx dy$.

**Professor Farnsworth's Insight!** "Aha! A classic Milligan University challenge! Observe the limits, students. If $y$ goes from $1$ to $4$, then for $x$ to go from $y$ to $\sqrt{y}$, we'd need $y \le \sqrt{y}$, which implies $y \le 1$. This creates a temporal anomaly in our integration domain for $y > 1$! This is almost certainly a delightful pedagogical trap designed to make you think critically about region definition! The integral $\int_y^{\sqrt{y}}$ for $y > 1$ would have the lower limit greater than the upper limit, meaning it would be the negative of the integral from $\sqrt{y}$ to $y$."

"Furthermore, the integrand, $\frac{\sin x}{x}$, does not have an elementary antiderivative with respect to $x$. This is a huge clue! It screams, 'Change the order of integration, you fool!'"

"To rectify this fascinating anomaly and demonstrate the intended technique, we will solve a *corrected* and common version of this problem that showcases the necessity of switching the order of integration. Let's assume the problem *intended* the following:"

**Corrected Problem:** Evaluate the iterated integral $\int_0^1 \int_y^1 \frac{\sin x}{x} dx dy$.

**Solution for the Corrected Problem:**

1.  **Identify the Region of Integration:**
    The current limits tell us:
    *   $y \le x \le 1$
    *   $0 \le y \le 1$

    Let's sketch this region. It's bounded by:
    *   The line $x=y$ (or $y=x$)
    *   The vertical line $x=1$
    *   The horizontal line $y=0$ (the $x$-axis)

    This region is a triangle with vertices at $(0,0)$, $(1,0)$, and $(1,1)$.

2.  **Change the Order of Integration:**
    To switch the order to $dy dx$, we need to describe the same region $R$ with $x$ as the outer variable and $y$ as the inner variable.
    *   For $x$, the limits are from $0$ to $1$.
    *   For a given $x$, $y$ varies from $0$ (the $x$-axis) up to the line $y=x$.

    So, the new limits are:
    *   $0 \le y \le x$
    *   $0 \le x \le 1$

    The integral becomes:
    $$ \int_0^1 \int_0^x \frac{\sin x}{x} dy dx $$

3.  **Evaluate the Inner Integral (with respect to $y$):**
    Treat $\frac{\sin x}{x}$ as a constant with respect to $y$.
    $$ \int_0^x \frac{\sin x}{x} dy = \left[ \frac{\sin x}{x} y \right]_0^x $$
    $$ = \frac{\sin x}{x} (x) - \frac{\sin x}{x} (0) $$
    $$ = \sin x $$

4.  **Evaluate the Outer Integral (with respect to $x$):**
    $$ \int_0^1 \sin x dx $$
    $$ = \left[ -\cos x \right]_0^1 $$
    $$ = -\cos(1) - (-\cos(0)) $$
    $$ = -\cos(1) + 1 $$
    $$ = 1 - \cos(1) $$

Therefore, the value of the corrected double integral is $1 - \cos(1)$. This example magnificently demonstrates how choosing the correct order of integration can turn an impossible problem into a tractable one!

### **Example 6: Finding the Volume of a Tetrahedron**

**Problem:** Find the volume of the tetrahedron bounded on three sides by the coordinate planes and on the fourth side by the plane $2x + 3y + z = 6$.

**Solution:**

A tetrahedron is a three-dimensional shape with four triangular faces. "Bounded by the coordinate planes" means $x \ge 0$, $y \ge 0$, and $z \ge 0$. The fourth boundary is the plane $2x + 3y + z = 6$.

1.  **Identify the Surface:**
    We want to find the volume *under* the plane, so we need to express $z$ as a function of $x$ and $y$:
    $z = f(x,y) = 6 - 2x - 3y$.

2.  **Determine the Region of Integration $R$ in the $xy$-plane:**
    The region $R$ is the projection of the tetrahedron onto the $xy$-plane. This occurs where $z=0$.
    Set $z=0$ in the plane equation:
    $2x + 3y + 0 = 6$
    $2x + 3y = 6$

    This is a line in the $xy$-plane. Since $x \ge 0$ and $y \ge 0$ (due to the coordinate planes), this line forms a triangular region with the positive $x$ and $y$ axes.
    *   When $x=0$, $3y=6 \implies y=2$. Point: $(0,2)$.
    *   When $y=0$, $2x=6 \implies x=3$. Point: $(3,0)$.

    The region $R$ is a triangle with vertices $(0,0)$, $(3,0)$, and $(0,2)$.

3.  **Set Up the Integral:**
    We can treat this as a Type I or Type II region. Let's choose Type I ($dy dx$).
    *   Limits for $x$: From $0$ to $3$.
    *   Limits for $y$: From $0$ (the $x$-axis) up to the line $2x + 3y = 6$.
        Solve for $y$: $3y = 6 - 2x \implies y = 2 - \frac{2}{3}x$.

    So, the integral for the volume is:
    $$ V = \iint_R (6 - 2x - 3y) dA = \int_0^3 \int_0^{2 - \frac{2}{3}x} (6 - 2x - 3y) dy dx $$

4.  **Evaluate the Inner Integral (with respect to $y$):**
    $$ \int_0^{2 - \frac{2}{3}x} (6 - 2x - 3y) dy $$
    $$ = \left[ (6 - 2x)y - 3\frac{y^2}{2} \right]_0^{2 - \frac{2}{3}x} $$
    $$ = (6 - 2x)\left(2 - \frac{2}{3}x\right) - \frac{3}{2}\left(2 - \frac{2}{3}x\right)^2 $$
    Factor out $(2 - \frac{2}{3}x)$:
    $$ = \left(2 - \frac{2}{3}x\right) \left[ (6 - 2x) - \frac{3}{2}\left(2 - \frac{2}{3}x\right) \right] $$
    $$ = \left(2 - \frac{2}{3}x\right) \left[ 6 - 2x - 3 + x \right] $$
    $$ = \left(2 - \frac{2}{3}x\right) \left[ 3 - x \right] $$
    $$ = 2\left(1 - \frac{1}{3}x\right) \cdot 3(1 - \frac{1}{3}x) $$
    $$ = 6\left(1 - \frac{1}{3}x\right)^2 $$
    $$ = 6\left(1 - \frac{2}{3}x + \frac{1}{9}x^2\right) $$
    $$ = 6 - 4x + \frac{2}{3}x^2 $$

5.  **Evaluate the Outer Integral (with respect to $x$):**
    $$ V = \int_0^3 \left( 6 - 4x + \frac{2}{3}x^2 \right) dx $$
    $$ = \left[ 6x - 4\frac{x^2}{2} + \frac{2}{3}\frac{x^3}{3} \right]_0^3 $$
    $$ = \left[ 6x - 2x^2 + \frac{2}{9}x^3 \right]_0^3 $$
    $$ = \left( 6(3) - 2(3)^2 + \frac{2}{9}(3)^3 \right) - (0) $$
    $$ = 18 - 2(9) + \frac{2}{9}(27) $$
    $$ = 18 - 18 + 2(3) $$
    $$ = 6 $$

The volume of the tetrahedron is $6$ cubic units. Excellent work!

---

## **4. Properties of Double Integrals (The Rules of the Game!)**

Just like their single-variable counterparts, double integrals obey a set of predictable and useful rules. These properties make manipulating and simplifying double integrals much easier, allowing us to conquer even more complex problems!

Assume that $f(x, y)$ and $g(x, y)$ are continuous functions, that $k$ is a constant, and that $R$, $R_1$, and $R_2$ are regions with at most boundary points in common. Assume also that all the integrals below exist. Then the following properties hold:

1.  **Constant Multiple Property:** You can pull a constant factor out of the integral, just like with single integrals.
    $$ \iint_R kf(x,y) dA = k \iint_R f(x,y) dA $$

2.  **Sum/Difference Property (Linearity):** The integral of a sum or difference of functions is the sum or difference of their integrals. This is incredibly powerful!
    $$ \iint_R [f(x,y) \pm g(x,y)] dA = \iint_R f(x,y) dA \pm \iint_R g(x,y) dA $$

3.  **Domination Property (Comparison):** If one function is always greater than or equal to another over the region, then its integral will also be greater than or equal to the other's integral. This is useful for inequalities and bounds!
    If $f(x,y) \ge g(x,y)$ on $R$, then
    $$ \iint_R f(x,y) dA \ge \iint_R g(x,y) dA $$
    A special case: if $f(x,y) \ge 0$ on $R$, then $\iint_R f(x,y) dA \ge 0$.

4.  **Disjoint Region Property (Additivity):** If a region $R$ can be split into two non-overlapping subregions $R_1$ and $R_2$ (they only share a boundary), then the integral over $R$ is the sum of the integrals over $R_1$ and $R_2$. This is vital for complex regions!
    If $R = R_1 \cup R_2$ where $R_1$ and $R_2$ only share boundary points, then
    $$ \iint_R f(x,y) dA = \iint_{R_1} f(x,y) dA + \iint_{R_2} f(x,y) dA $$
    _Consider the illustration, where $R$ is split into $R_1$ and $R_2$ by a shared internal boundary:_
    ```
      y
      ^
      |    +-------+
      |   /  R1  / \
      |  /     /    \
      | +-----+-------+
      | |     |   R2  |
      | +-----+-------+
      +----------------> x
      0
    ```

These properties are the bedrock upon which our multi-dimensional integration techniques are built. Understand them, internalize them, and they will serve you well in all your future mathematical endeavors!

---

## **5. Practice & Reflection (Your Brain on Math!)**

Alright, my intrepid learners! Take a moment to reflect on the fantastic journey we've just completed. To solidify your understanding, ponder these critical inquiries:

1.  **Geometric Intuition Check:** What is the geometric meaning of $\iint_R 1 dA$? How does this relate to something you might have calculated in single-variable calculus?

2.  **Order of Integration:** Explain, in your own words, when you would prefer to integrate $dy dx$ versus $dx dy$ over a general non-rectangular region. What factors influence your choice?

3.  **Negative Values:** If $f(x,y)$ is always negative over a region $R$, what can you say about the sign of $\iint_R f(x,y) dA$? What does this represent geometrically?

4.  **Continuity is Key:** Fubini's Theorem requires $f(x,y)$ to be continuous. Why is this condition important? What might go wrong if $f(x,y)$ has discontinuities within the region $R$? (Think back to single-variable calculus for clues!)

"There you have it, my brilliant students! Double integrals are not merely an extension of single integrals; they are a glorious expansion into new mathematical dimensions! Keep practicing, keep questioning, and soon you'll be integrating surfaces like a seasoned multivariable champion! Now, if you'll excuse me, I hear the siren song of a freshly brewed cup of dark matter coffee!"