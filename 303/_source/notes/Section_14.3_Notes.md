Good news, everyone! Professor Farnsworth here, your esteemed math TA from Milligan University, ready to launch into a truly exciting topic: **Double Integrals in Polar Coordinates**!

This section, Math 303, Section 14.3, is where we unlock a whole new dimension of integration power. Up until now, we've wrestled with double integrals using Cartesian coordinates ($x$ and $y$). But what happens when our region of integration is circular, or has some kind of radial symmetry? Cartesian coordinates can turn into a real nightmare, often involving square roots and complicated limits.

That's where polar coordinates come to the rescue! By transforming our variables and our differential area element, we can simplify seemingly intractable integrals and make them as smooth as a fresh batch of dark matter.

So, buckle up, put on your thinking caps, and let's delve into the wonderful world of polar integration!

---

# Math 303: Multivariable Calculus
## Section 14.3: Double Integrals in Polar Coordinates

### 🚀 Overview: Why Polar Coordinates?

In this section, we'll learn how to evaluate double integrals by converting them from Cartesian (rectangular) coordinates to polar coordinates. This transformation is particularly useful when:
1.  The region of integration $R$ has circular or radial symmetry (e.g., disks, annuli, sectors of circles).
2.  The integrand $f(x, y)$ involves expressions like $x^2 + y^2$, which simplify beautifully in polar coordinates.

We'll start by reviewing the fundamental relationships between Cartesian and polar coordinates, then derive the crucial differential area element in polar form, and finally, put it all together to evaluate double integrals. Prepare for some elegant mathematics!

---

### 🧠 Core Concepts & Definitions

Let's start by recalling the basics of polar coordinates.

#### 1. Cartesian to Polar Coordinate Conversion

A point $(x, y)$ in the Cartesian plane can be represented in polar coordinates as $(r, \theta)$, where:
*   $r$ is the distance from the origin to the point $(r \ge 0)$.
*   $\theta$ is the angle (in radians) measured counterclockwise from the positive $x$-axis to the line segment connecting the origin to the point.

The conversion formulas are:
$$
\begin{align*}
x &= r \cos \theta \\
y &= r \sin \theta
\end{align*}
$$
And, conversely, we can relate $r$ and $\theta$ back to $x$ and $y$:
$$
\begin{align*}
r^2 &= x^2 + y^2 \\
\tan \theta &= \frac{y}{x} \quad (\text{if } x \ne 0)
\end{align*}
$$
It's important to remember that $r = \sqrt{x^2 + y^2}$ (taking the positive root for $r \ge 0$).

#### 2. The Differential Area Element in Polar Coordinates

This is arguably the most critical piece of the puzzle! When we move from $dx \, dy$ to a polar differential $dr \, d\theta$, it's not a simple one-to-one substitution. Observe, class! Consider a small "polar rectangle" in a polar grid, defined by $r$ ranging from $r$ to $r + dr$ and $\theta$ ranging from $\theta$ to $\theta + d\theta$.

*   The sides of this "rectangle" are not straight lines. Two sides are arcs of circles.
*   One side has length $dr$.
*   The other side, an arc of a circle at radius $r$, has length $r \, d\theta$ (recall: arc length $s = r\theta$).

So, the area of this tiny polar rectangle is approximately $dA \approx (dr)(r \, d\theta) = r \, dr \, d\theta$.

This approximation becomes exact in the limit, which can be formally proven using the **Jacobian** of the transformation.
The Jacobian $J(r, \theta)$ for the transformation from $(r, \theta)$ to $(x, y)$ is given by:
$$
J(r, \theta) = \det \begin{pmatrix}
\frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} \\
\frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta}
\end{pmatrix}
$$
Let's compute it!
We have $x = r \cos \theta$ and $y = r \sin \theta$.
$$
\begin{align*}
\frac{\partial x}{\partial r} &= \cos \theta \\
\frac{\partial x}{\partial \theta} &= -r \sin \theta \\
\frac{\partial y}{\partial r} &= \sin \theta \\
\frac{\partial y}{\partial \theta} &= r \cos \theta
\end{align*}
$$
So, the Jacobian determinant is:
$$
\begin{align*}
J(r, \theta) &= \begin{vmatrix}
\cos \theta & -r \sin \theta \\
\sin \theta & r \cos \theta
\end{vmatrix} \\
&= (\cos \theta)(r \cos \theta) - (-r \sin \theta)(\sin \theta) \\
&= r \cos^2 \theta + r \sin^2 \theta \\
&= r(\cos^2 \theta + \sin^2 \theta) \\
&= r(1) \\
&= r
\end{align*}
$$
Therefore, the differential area element $dA$ in Cartesian coordinates transforms to polar coordinates as:
$$
dA = dx \, dy = |J(r, \theta)| \, dr \, d\theta = r \, dr \, d\theta
$$
**Crucial takeaway:** Do NOT forget the $r$ factor! It's a common mistake, and it will throw your calculations into the fourth dimension of incorrectness!

#### 3. Theorem: Double Integral in Polar Coordinates

Suppose we have a region $R$ in the plane that is well-described in polar coordinates as:
$$
R = \{ (r, \theta) \mid a \le \theta \le b, \ g_1(\theta) \le r \le g_2(\theta) \}
$$
where $a$ and $b$ are constants (typically $0 \le b - a \le 2\pi$), and $g_1(\theta)$ and $g_2(\theta)$ are continuous functions of $\theta$ that define the inner and outer radial boundaries of $R$.

Given an integrable function $f(x, y)$ (or $f(r, \theta)$ if already in polar form) defined over the region $R$, the double integral of $f$ over $R$ can be expressed as:
$$
\iint_R f(x, y) \, dA = \int_a^b \int_{g_1(\theta)}^{g_2(\theta)} f(r \cos \theta, r \sin \theta) \, r \, dr \, d\theta
$$
**Key steps for evaluating a double integral using polar coordinates:**
1.  **Sketch the region $R$**: This helps immensely in determining the limits of integration.
2.  **Transform the integrand**: Replace $x$ with $r \cos \theta$ and $y$ with $r \sin \theta$. Simplify expressions like $x^2 + y^2$ to $r^2$.
3.  **Determine the limits of integration for $r$ and $\theta$**:
    *   Find the smallest and largest constant values for $\theta$ (from $a$ to $b$) that enclose the region $R$.
    *   For a fixed $\theta$, find the inner radial boundary $r = g_1(\theta)$ and the outer radial boundary $r = g_2(\theta)$.
4.  **Replace $dA$**: Substitute $dA = r \, dr \, d\theta$.
5.  **Evaluate the iterated integral**: Integrate with respect to $r$ first, then with respect to $\theta$.

---

### 🧪 Detailed Lecture & Worked Examples

Let's put this magnificent theory into practice with some prime examples!

---

#### Example 1: Finding the Area Bounded between the Graphs of Two Polar Equations

**Problem:** Find the area of the region $R$ inside the circle $r = \frac{1}{2}$ and outside the cardioid $r = 1 - \cos \theta$.

**Solution:**

1.  **Sketch the Region $R$**:
    *   The circle $r = \frac{1}{2}$ is a circle centered at the origin with radius $1/2$.
    *   The cardioid $r = 1 - \cos \theta$ starts at $r=0$ when $\theta=0$, expands to $r=2$ when $\theta=\pi$, and returns to $r=0$ at $\theta=2\pi$.
    *   We are looking for the region *inside* the circle $r = 1/2$ and *outside* the cardioid $r = 1 - \cos \theta$.

    Let's visualize this:
    The region $R$ will be a crescent-shaped area. We need to find the angles $\theta$ where the two curves intersect.
    Set $1 - \cos \theta = \frac{1}{2}$:
    $\cos \theta = 1 - \frac{1}{2} = \frac{1}{2}$
    This occurs at $\theta = -\frac{\pi}{3}$ and $\theta = \frac{\pi}{3}$. (Or $5\pi/3$ and $\pi/3$, but $-\pi/3$ to $\pi/3$ is more symmetric for integration).

    The region $R$ spans from $\theta = -\frac{\pi}{3}$ to $\theta = \frac{\pi}{3}$.
    For any $\theta$ in this range, the inner boundary is the cardioid $r = 1 - \cos \theta$, and the outer boundary is the circle $r = \frac{1}{2}$.

2.  **Set up the Integral for Area**:
    The area $A$ of a region $R$ is given by $\iint_R dA$. In polar coordinates, $dA = r \, dr \, d\theta$.
    So, our integral becomes:
    $$
    A = \int_{-\pi/3}^{\pi/3} \int_{1 - \cos \theta}^{1/2} r \, dr \, d\theta
    $$

3.  **Evaluate the Inner Integral (with respect to $r$)**:
    $$
    \int_{1 - \cos \theta}^{1/2} r \, dr = \left[ \frac{1}{2} r^2 \right]_{1 - \cos \theta}^{1/2}
    $$
    $$
    = \frac{1}{2} \left( \left(\frac{1}{2}\right)^2 - (1 - \cos \theta)^2 \right)
    $$
    $$
    = \frac{1}{2} \left( \frac{1}{4} - (1 - 2 \cos \theta + \cos^2 \theta) \right)
    $$
    $$
    = \frac{1}{2} \left( \frac{1}{4} - 1 + 2 \cos \theta - \cos^2 \theta \right)
    $$
    $$
    = \frac{1}{2} \left( -\frac{3}{4} + 2 \cos \theta - \cos^2 \theta \right)
    $$
    To integrate $\cos^2 \theta$, we use the identity $\cos^2 \theta = \frac{1 + \cos(2\theta)}{2}$.
    $$
    = \frac{1}{2} \left( -\frac{3}{4} + 2 \cos \theta - \frac{1 + \cos(2\theta)}{2} \right)
    $$
    $$
    = \frac{1}{2} \left( -\frac{3}{4} - \frac{1}{2} + 2 \cos \theta - \frac{1}{2} \cos(2\theta) \right)
    $$
    $$
    = \frac{1}{2} \left( -\frac{5}{4} + 2 \cos \theta - \frac{1}{2} \cos(2\theta) \right)
    $$

4.  **Evaluate the Outer Integral (with respect to $\theta$)**:
    $$
    A = \int_{-\pi/3}^{\pi/3} \frac{1}{2} \left( -\frac{5}{4} + 2 \cos \theta - \frac{1}{2} \cos(2\theta) \right) \, d\theta
    $$
    Since the integrand is an even function ($f(-\theta) = f(\theta)$) and the limits are symmetric, we can write:
    $$
    A = 2 \int_0^{\pi/3} \frac{1}{2} \left( -\frac{5}{4} + 2 \cos \theta - \frac{1}{2} \cos(2\theta) \right) \, d\theta
    $$
    $$
    A = \int_0^{\pi/3} \left( -\frac{5}{4} + 2 \cos \theta - \frac{1}{2} \cos(2\theta) \right) \, d\theta
    $$
    $$
    = \left[ -\frac{5}{4}\theta + 2 \sin \theta - \frac{1}{2} \left( \frac{1}{2} \sin(2\theta) \right) \right]_0^{\pi/3}
    $$
    $$
    = \left[ -\frac{5}{4}\theta + 2 \sin \theta - \frac{1}{4} \sin(2\theta) \right]_0^{\pi/3}
    $$
    Now, substitute the limits:
    $$
    = \left( -\frac{5}{4}\left(\frac{\pi}{3}\right) + 2 \sin\left(\frac{\pi}{3}\right) - \frac{1}{4} \sin\left(2\cdot\frac{\pi}{3}\right) \right) - (0)
    $$
    $$
    = -\frac{5\pi}{12} + 2 \left(\frac{\sqrt{3}}{2}\right) - \frac{1}{4} \left(\frac{\sqrt{3}}{2}\right)
    $$
    $$
    = -\frac{5\pi}{12} + \sqrt{3} - \frac{\sqrt{3}}{8}
    $$
    $$
    = -\frac{5\pi}{12} + \frac{8\sqrt{3} - \sqrt{3}}{8}
    $$
    $$
    = -\frac{5\pi}{12} + \frac{7\sqrt{3}}{8}
    $$

    The area of the region $R$ is $A = \frac{7\sqrt{3}}{8} - \frac{5\pi}{12}$.

---

#### Example 2: Using Polar Coordinates to Find the Moment of Inertia about the Origin of an Annulus

**Problem:** Suppose the annulus $R$ represents a planar object with total mass $M$. Determine its moment of inertia about the origin. Assume the annular object is made of a material with constant density $\rho$.

**Solution:**

1.  **Understand Moment of Inertia**:
    The moment of inertia $I_0$ of a planar object about the origin (or $z$-axis) is given by the double integral:
    $$
    I_0 = \iint_R (x^2 + y^2) \rho \, dA
    $$
    where $\rho$ is the density (mass per unit area). Since $\rho$ is constant, we can pull it out of the integral.
    The region $R$ is an annulus (a ring shape) bounded by two concentric circles. Let the inner radius be $a_1$ and the outer radius be $a_2$.

2.  **Transform to Polar Coordinates**:
    *   The integrand $(x^2 + y^2)$ simplifies directly to $r^2$ in polar coordinates.
    *   The differential area element $dA$ becomes $r \, dr \, d\theta$.
    *   The region $R$ in polar coordinates is: $a_1 \le r \le a_2$ and $0 \le \theta \le 2\pi$.

    So the integral becomes:
    $$
    I_0 = \rho \iint_R r^2 \, r \, dr \, d\theta = \rho \int_0^{2\pi} \int_{a_1}^{a_2} r^3 \, dr \, d\theta
    $$

3.  **Evaluate the Inner Integral (with respect to $r$)**:
    $$
    \int_{a_1}^{a_2} r^3 \, dr = \left[ \frac{1}{4} r^4 \right]_{a_1}^{a_2} = \frac{1}{4} (a_2^4 - a_1^4)
    $$

4.  **Evaluate the Outer Integral (with respect to $\theta$)**:
    $$
    I_0 = \rho \int_0^{2\pi} \frac{1}{4} (a_2^4 - a_1^4) \, d\theta
    $$
    Since $\frac{1}{4} (a_2^4 - a_1^4)$ is a constant with respect to $\theta$:
    $$
    I_0 = \rho \frac{1}{4} (a_2^4 - a_1^4) \int_0^{2\pi} d\theta
    $$
    $$
    I_0 = \rho \frac{1}{4} (a_2^4 - a_1^4) [\theta]_0^{2\pi}
    $$
    $$
    I_0 = \rho \frac{1}{4} (a_2^4 - a_1^4) (2\pi)
    $$
    $$
    I_0 = \rho \frac{\pi}{2} (a_2^4 - a_1^4)
    $$

5.  **Relate to Total Mass $M$**:
    The total mass $M$ of the annulus is its density times its area. The area of the annulus is the area of the outer circle minus the area of the inner circle:
    $A = \pi a_2^2 - \pi a_1^2 = \pi (a_2^2 - a_1^2)$.
    So, $M = \rho A = \rho \pi (a_2^2 - a_1^2)$.
    We can factor $(a_2^4 - a_1^4)$ as $(a_2^2 - a_1^2)(a_2^2 + a_1^2)$.
    Substitute this back into the expression for $I_0$:
    $$
    I_0 = \rho \frac{\pi}{2} (a_2^2 - a_1^2)(a_2^2 + a_1^2)
    $$
    $$
    I_0 = (\rho \pi (a_2^2 - a_1^2)) \frac{1}{2} (a_2^2 + a_1^2)
    $$
    $$
    I_0 = M \frac{1}{2} (a_2^2 + a_1^2)
    $$
    Thus, the moment of inertia about the origin of an annulus with mass $M$ and radii $a_1$ and $a_2$ is $I_0 = M \frac{a_1^2 + a_2^2}{2}$.

---

#### Example 3: Evaluating a Double Integral by Converting from Cartesian to Polar Coordinates

**Problem:** Evaluate the integral $\iint_R e^{-(x^2+y^2)} \, dA$, where $R$ is the unit disk centered at the origin.

**Solution:**

1.  **Analyze the Integrand and Region**:
    *   **Integrand**: $e^{-(x^2+y^2)}$. Notice the $x^2+y^2$ term, a strong indicator for polar coordinates! It will simplify to $e^{-r^2}$.
    *   **Region $R$**: The unit disk centered at the origin. In Cartesian coordinates, this is $x^2+y^2 \le 1$.
        In polar coordinates, this region is $0 \le r \le 1$ and $0 \le \theta \le 2\pi$.

2.  **Transform to Polar Coordinates**:
    *   Replace $x^2+y^2$ with $r^2$.
    *   Replace $dA$ with $r \, dr \, d\theta$.
    *   The limits for $r$ are from $0$ to $1$.
    *   The limits for $\theta$ are from $0$ to $2\pi$.

    The integral becomes:
    $$
    \iint_R e^{-(x^2+y^2)} \, dA = \int_0^{2\pi} \int_0^1 e^{-r^2} \, r \, dr \, d\theta
    $$

3.  **Evaluate the Inner Integral (with respect to $r$)**:
    This requires a substitution. Let $u = -r^2$. Then $du = -2r \, dr$, so $r \, dr = -\frac{1}{2} du$.
    When $r=0$, $u=0$. When $r=1$, $u=-1$.
    $$
    \int_0^1 e^{-r^2} \, r \, dr = \int_0^{-1} e^u \left( -\frac{1}{2} \right) du
    $$
    $$
    = -\frac{1}{2} \int_0^{-1} e^u \, du = -\frac{1}{2} [e^u]_0^{-1}
    $$
    $$
    = -\frac{1}{2} (e^{-1} - e^0) = -\frac{1}{2} \left( \frac{1}{e} - 1 \right)
    $$
    $$
    = \frac{1}{2} \left( 1 - \frac{1}{e} \right)
    $$

4.  **Evaluate the Outer Integral (with respect to $\theta$)**:
    $$
    \int_0^{2\pi} \frac{1}{2} \left( 1 - \frac{1}{e} \right) \, d\theta
    $$
    Since $\frac{1}{2} \left( 1 - \frac{1}{e} \right)$ is a constant with respect to $\theta$:
    $$
    = \frac{1}{2} \left( 1 - \frac{1}{e} \right) [\theta]_0^{2\pi}
    $$
    $$
    = \frac{1}{2} \left( 1 - \frac{1}{e} \right) (2\pi)
    $$
    $$
    = \pi \left( 1 - \frac{1}{e} \right)
    $$
    This integral is a fantastic example of how polar coordinates can turn an otherwise impossible integral (as $e^{-x^2}$ and $e^{-y^2}$ have no elementary antiderivatives) into a solvable one.

---

#### Example 4: Using a Double Integral to Find Volume of a Solid

**Problem:** Let $R$ be the triangle in the $xy$-plane with boundary lines $y=x$, $x=0$, and $y=1$. Find the volume of the solid bounded below by the region $R$ and above by the surface $z = x^2 + y^2$.

**Solution (Cartesian Approach first, then discussion of polar):**

1.  **Analyze the Region $R$ and Integrand**:
    *   **Region $R$**: A triangle defined by $x=0$ (the $y$-axis), $y=1$ (a horizontal line), and $y=x$ (a line through the origin with slope 1).
        Sketching this region:
        The vertices are $(0,0)$, $(0,1)$, and $(1,1)$.
        If we integrate $dx \, dy$:
        For $y$ from $0$ to $1$, $x$ goes from $0$ to $y$.
        If we integrate $dy \, dx$:
        For $x$ from $0$ to $1$, $y$ goes from $x$ to $1$.
    *   **Integrand**: $z = f(x,y) = x^2+y^2$. This is a paraboloid opening upwards. This integrand is very "polar-friendly" ($r^2$).

    Let's set up the integral in Cartesian coordinates first, as the region $R$ is naturally defined by linear Cartesian boundaries. We'll use the $dy \, dx$ order.
    The volume $V$ is given by $\iint_R (x^2+y^2) \, dA$.
    $$
    V = \int_0^1 \int_x^1 (x^2+y^2) \, dy \, dx
    $$

2.  **Evaluate the Inner Integral (with respect to $y$)**:
    $$
    \int_x^1 (x^2+y^2) \, dy = \left[ x^2y + \frac{1}{3}y^3 \right]_x^1
    $$
    $$
    = \left( x^2(1) + \frac{1}{3}(1)^3 \right) - \left( x^2(x) + \frac{1}{3}(x)^3 \right)
    $$
    $$
    = x^2 + \frac{1}{3} - x^3 - \frac{1}{3}x^3
    $$
    $$
    = x^2 + \frac{1}{3} - \frac{4}{3}x^3
    $$

3.  **Evaluate the Outer Integral (with respect to $x$)**:
    $$
    V = \int_0^1 \left( x^2 + \frac{1}{3} - \frac{4}{3}x^3 \right) \, dx
    $$
    $$
    = \left[ \frac{1}{3}x^3 + \frac{1}{3}x - \frac{4}{3}\left(\frac{1}{4}x^4\right) \right]_0^1
    $$
    $$
    = \left[ \frac{1}{3}x^3 + \frac{1}{3}x - \frac{1}{3}x^4 \right]_0^1
    $$
    $$
    = \left( \frac{1}{3}(1)^3 + \frac{1}{3}(1) - \frac{1}{3}(1)^4 \right) - (0)
    $$
    $$
    = \frac{1}{3} + \frac{1}{3} - \frac{1}{3} = \frac{1}{3}
    $$
    The volume of the solid is $V = \frac{1}{3}$.

    **Discussion: Why Cartesian was better for this specific region R, despite the polar-friendly integrand:**
    While the integrand $z=x^2+y^2$ screams "polar coordinates!", the triangular region $R$ does not.
    Let's *try* to describe the region in polar coordinates:
    *   The line $x=0$ is $\theta = \pi/2$ (for $y>0$).
    *   The line $y=x$ is $\theta = \pi/4$.
    *   The line $y=1$ is $r \sin \theta = 1 \implies r = \frac{1}{\sin \theta} = \csc \theta$.

    So, for $\theta$ between $\pi/4$ and $\pi/2$, $r$ goes from $0$ to $\csc \theta$.
    The integral would be:
    $$
    V = \int_{\pi/4}^{\pi/2} \int_0^{\csc \theta} (r^2) \, r \, dr \, d\theta = \int_{\pi/4}^{\pi/2} \int_0^{\csc \theta} r^3 \, dr \, d\theta
    $$
    Inner integral:
    $$
    \int_0^{\csc \theta} r^3 \, dr = \left[ \frac{1}{4} r^4 \right]_0^{\csc \theta} = \frac{1}{4} \csc^4 \theta
    $$
    Outer integral:
    $$
    V = \int_{\pi/4}^{\pi/2} \frac{1}{4} \csc^4 \theta \, d\theta
    $$
    This integral, $\int \csc^4 \theta \, d\theta$, is certainly doable (e.g., using $\csc^2 \theta = 1+\cot^2 \theta$ and $u=\cot \theta$), but it is significantly more complex than the polynomial integral we faced in Cartesian coordinates.

    **Pedagogical point:** This example illustrates that the choice of coordinate system depends on *both* the integrand and the region of integration. For a region with straight line boundaries not passing through the origin, Cartesian coordinates often lead to simpler limits and calculations, even if the integrand itself seems to favor polar. Always sketch the region!

---

#### Additional Problem 1: Converting from Cartesian to Polar Coordinates

**Problem:** Evaluate the double integral $\int_0^1 \int_{\sqrt{x-x^2}}^{\sqrt{1-x^2}} (x^2+y^2)^{3/2} \, dy \, dx$.

**Solution:**

1.  **Analyze the Integrand and Region**:
    *   **Integrand**: $(x^2+y^2)^{3/2}$. This is a *huge* hint for polar coordinates, as it becomes $(r^2)^{3/2} = r^3$.
    *   **Region of Integration**: This is where we need to be careful.
        The outer limits are $x$ from $0$ to $1$.
        The inner limits are $y$ from $y_1(x) = \sqrt{x-x^2}$ to $y_2(x) = \sqrt{1-x^2}$.
        Let's analyze these boundaries:
        *   $y = \sqrt{1-x^2} \implies y^2 = 1-x^2 \implies x^2+y^2 = 1$. This is the upper semi-circle of radius 1, centered at the origin.
        *   $y = \sqrt{x-x^2} \implies y^2 = x-x^2 \implies x^2-x+y^2 = 0$. Complete the square for $x$: $(x^2-x+\frac{1}{4}) + y^2 = \frac{1}{4} \implies (x-\frac{1}{2})^2 + y^2 = \left(\frac{1}{2}\right)^2$. This is the upper semi-circle of radius $1/2$, centered at $(1/2, 0)$.
        *   The limits $x=0$ to $x=1$ further restrict us to the right half-plane. Since $y \ge 0$ for both square roots, we're in the first and second quadrants. Combined with $x \in [0,1]$, we are in the first quadrant for both circles.

    Let's sketch the region:
    The outer boundary is $x^2+y^2=1$.
    The inner boundary is $(x-\frac{1}{2})^2+y^2 = (\frac{1}{2})^2$.
    The region is bounded by these two semi-circles for $x \in [0,1]$ and $y \ge 0$.
    It's a crescent-shaped region, like a segment of a larger disk from which a smaller disk has been cut out, but only in the first quadrant.

2.  **Transform to Polar Coordinates**:
    *   **Integrand**: $(x^2+y^2)^{3/2} = (r^2)^{3/2} = r^3$.
    *   **Differential Area**: $dy \, dx = r \, dr \, d\theta$.
    *   **Limits**:
        *   The outer circle $x^2+y^2=1$ is $r=1$.
        *   The inner circle $(x-\frac{1}{2})^2+y^2 = (\frac{1}{2})^2$ becomes:
            $x^2-x+1/4+y^2=1/4 \implies x^2+y^2=x$.
            In polar coordinates: $r^2 = r \cos \theta$. Dividing by $r$ (assuming $r \ne 0$, which is true for the boundary), we get $r = \cos \theta$.
        *   The region is entirely in the first quadrant ($x \ge 0, y \ge 0$).
            The circle $r=\cos \theta$ is formed for $\theta$ from $0$ to $\pi/2$.
            The circle $r=1$ is from $0$ to $\pi/2$.
            So, the angular limits are $0 \le \theta \le \pi/2$.
            For a given $\theta$, $r$ goes from $r=\cos \theta$ (inner boundary) to $r=1$ (outer boundary).

    The integral in polar coordinates is:
    $$
    \int_0^{\pi/2} \int_{\cos \theta}^{1} r^3 \cdot r \, dr \, d\theta = \int_0^{\pi/2} \int_{\cos \theta}^{1} r^4 \, dr \, d\theta
    $$

3.  **Evaluate the Inner Integral (with respect to $r$)**:
    $$
    \int_{\cos \theta}^{1} r^4 \, dr = \left[ \frac{1}{5} r^5 \right]_{\cos \theta}^{1}
    $$
    $$
    = \frac{1}{5}(1^5 - (\cos \theta)^5) = \frac{1}{5}(1 - \cos^5 \theta)
    $$

4.  **Evaluate the Outer Integral (with respect to $\theta$)**:
    $$
    I = \int_0^{\pi/2} \frac{1}{5}(1 - \cos^5 \theta) \, d\theta
    $$
    $$
    = \frac{1}{5} \left[ \int_0^{\pi/2} d\theta - \int_0^{\pi/2} \cos^5 \theta \, d\theta \right]
    $$
    The first part is easy: $\int_0^{\pi/2} d\theta = [\theta]_0^{\pi/2} = \pi/2$.
    For the second part, $\int_0^{\pi/2} \cos^5 \theta \, d\theta$, we can use reduction formulas or Wallis' integrals:
    $\int_0^{\pi/2} \cos^n \theta \, d\theta = \frac{n-1}{n} \cdot \frac{n-3}{n-2} \cdots \frac{2}{3}$ if $n$ is odd.
    So for $n=5$:
    $\int_0^{\pi/2} \cos^5 \theta \, d\theta = \frac{5-1}{5} \cdot \frac{5-3}{5-2} = \frac{4}{5} \cdot \frac{2}{3} = \frac{8}{15}$.

    Now, substitute these back:
    $$
    I = \frac{1}{5} \left( \frac{\pi}{2} - \frac{8}{15} \right)
    $$
    $$
    I = \frac{\pi}{10} - \frac{8}{75}
    $$
    This definitely demonstrates the power of polar coordinates for regions bounded by circles!

---

#### Additional Problem 2: Finding Volume of a Solid Bounded by Two Paraboloids

**Problem:** Find the volume of the solid $S$ that is common to the paraboloids $z = 2(x^2+y^2)$ and $z = 12 - x^2 - y^2$.

**Solution:**

1.  **Understand the Solid and Region $R$**:
    *   We have two paraboloids. $z = 2(x^2+y^2)$ opens upwards from the origin. $z = 12 - (x^2+y^2)$ opens downwards from $z=12$ on the $z$-axis.
    *   The solid $S$ is the region between these two surfaces. The volume is found by integrating the difference of the upper surface and the lower surface over their region of intersection in the $xy$-plane.
    *   The region of integration $R$ is determined by the intersection of the two paraboloids.

2.  **Find the Curve of Intersection**:
    Set the $z$ values equal:
    $2(x^2+y^2) = 12 - (x^2+y^2)$
    $3(x^2+y^2) = 12$
    $x^2+y^2 = 4$
    This is a circle centered at the origin with radius $2$. This circle defines our region of integration $R$ in the $xy$-plane.

3.  **Transform to Polar Coordinates**:
    *   **Region $R$**: The disk $x^2+y^2 \le 4$. In polar coordinates, this is $0 \le r \le 2$ and $0 \le \theta \le 2\pi$.
    *   **Integrand**: The height of the solid at any point $(x,y)$ is the difference between the upper surface and the lower surface:
        $f(x,y) = (12 - x^2 - y^2) - (2(x^2+y^2))$
        $f(x,y) = 12 - 3(x^2+y^2)$
        In polar coordinates:
        $f(r, \theta) = 12 - 3r^2$.
    *   **Differential Area**: $dA = r \, dr \, d\theta$.

    The volume integral becomes:
    $$
    V = \int_0^{2\pi} \int_0^2 (12 - 3r^2) \, r \, dr \, d\theta
    $$
    $$
    V = \int_0^{2\pi} \int_0^2 (12r - 3r^3) \, dr \, d\theta
    $$

4.  **Evaluate the Inner Integral (with respect to $r$)**:
    $$
    \int_0^2 (12r - 3r^3) \, dr = \left[ 6r^2 - \frac{3}{4}r^4 \right]_0^2
    $$
    $$
    = \left( 6(2^2) - \frac{3}{4}(2^4) \right) - (0)
    $$
    $$
    = \left( 6(4) - \frac{3}{4}(16) \right)
    $$
    $$
    = 24 - 3(4) = 24 - 12 = 12
    $$

5.  **Evaluate the Outer Integral (with respect to $\theta$)**:
    $$
    V = \int_0^{2\pi} 12 \, d\theta
    $$
    $$
    = [12\theta]_0^{2\pi}
    $$
    $$
    = 12(2\pi) - 0 = 24\pi
    $$
    The volume of the solid is $V = 24\pi$. Absolutely brilliant, wouldn't you say?

---

### 🤔 Practice & Reflection: Solidifying Your Understanding

Now that your minds have been expanded, let's make sure these concepts are firmly anchored!

1.  **When to Go Polar?** Describe at least two specific scenarios (related to the integrand or the region) where converting to polar coordinates for a double integral would be highly advantageous.
2.  **The Missing 'r':** Explain, in your own words, why the differential area element in polar coordinates is $r \, dr \, d\theta$ and not just $dr \, d\theta$. What would happen if you forgot the $r$?
3.  **Boundary Decisions:** You have a region $R$ defined by $x^2+y^2=9$ and a square centered at the origin with vertices $(\pm 1, \pm 1)$. If you needed to integrate a function $f(x,y) = \sin(\sqrt{x^2+y^2})$ over this region, would you use Cartesian or polar coordinates? Explain your reasoning.
4.  **Variable Limits:** Consider a region $R$ described by $0 \le \theta \le \pi/2$ and $0 \le r \le \sin(2\theta)$. Sketch this region. What would happen if you tried to swap the order of integration to $d\theta \, dr$?

Don't hesitate to review the examples and derivations. The more you practice visualizing these regions and transforming your integrals, the more intuitive double integrals in polar coordinates will become. Now, go forth and integrate with precision!