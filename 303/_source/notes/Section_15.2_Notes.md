Good news, everyone! Professor Hubert J. Farnsworth here, your esteemed math TA and pedagogical assistant for Math 303. Prepare for an exhilarating journey into the heart of Multivariable Calculus! Today, we're diving into **Section 15.2: Line Integrals.**

Think back to single-variable calculus. You integrated functions over intervals, finding areas or total changes along a straight line. But what if our path isn't a straight line? What if we're measuring something along a curvy wire, or calculating work done by a force field as it shoves a particle along a winding trajectory? Ah, that's where the magnificent Line Integral swoops in to save the day!

### Math 303: Multivariable Calculus
## Section 15.2: Line Integrals

### Overview: Tracing the Path of Integration

Today, we're going to extend the idea of integration from intervals on the real line to curves in two or three dimensions. These are called **Line Integrals**, and they come in two main flavors:
1.  **Line Integrals of Scalar Functions:** Imagine a wire with varying density. A scalar line integral can help us find its total mass! Or perhaps the average temperature along a specific path. Here, we integrate a scalar function $f(x,y)$ or $f(x,y,z)$ with respect to arc length $ds$.
2.  **Line Integrals of Vector Fields:** Now, imagine a force pushing a particle along a curve, or a fluid flowing through a region. A vector line integral can help us calculate the total work done by the force, or the total flow (circulation) of the fluid along a path. Here, we integrate a vector field $\mathbf{F}(x,y)$ or $\mathbf{F}(x,y,z)$ with respect to a vector differential $d\mathbf{r}$.

These tools are absolutely crucial in physics, engineering, and various scientific disciplines. Let's get cracking! To the math-mobile!

---

### Core Concepts & Definitions

Before we can compute these marvelous integrals, we need to understand the curves we're integrating over.

#### Parametric Curves

A **smooth curve** $C$ in 2D or 3D space can be represented by a vector-valued function, also known as a **parameterization**:
*   In 2D: $\mathbf{r}(t) = \langle x(t), y(t) \rangle$ for $a \le t \le b$.
*   In 3D: $\mathbf{r}(t) = \langle x(t), y(t), z(t) \rangle$ for $a \le t \le b$.

For a curve to be "smooth," its derivative $\mathbf{r}'(t)$ must be continuous and non-zero on the interval $(a,b)$. This ensures our path doesn't have any sharp corners or stops.

The **differential arc length**, denoted $ds$, is a fundamental building block. It represents an infinitesimally small piece of arc length along the curve. We derive it from the magnitude of the velocity vector:
If $\mathbf{r}(t) = \langle x(t), y(t), z(t) \rangle$, then $\mathbf{r}'(t) = \langle x'(t), y'(t), z'(t) \rangle$.
The magnitude of the velocity vector is $|| \mathbf{r}'(t) || = \sqrt{(x'(t))^2 + (y'(t))^2 + (z'(t))^2}$.
Thus, the differential arc length $ds$ is given by:
$$
ds = || \mathbf{r}'(t) || \, dt = \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2 + \left(\frac{dz}{dt}\right)^2} \, dt
$$
(For 2D curves, simply omit the $z$ components).

#### Definition: Line Integral of a Scalar Function

The line integral of a scalar function $f(x,y,z)$ along a smooth curve $C$ with respect to arc length $ds$ is defined as:
$$
\int_C f(x,y,z) \, ds = \int_a^b f(x(t), y(t), z(t)) || \mathbf{r}'(t) || \, dt
$$
**Key Idea:**
1.  **Parameterize $C$**: Express $x, y, z$ in terms of $t$.
2.  **Evaluate $f$ along $C$**: Substitute $x(t), y(t), z(t)$ into $f(x,y,z)$ to get $f(x(t),y(t),z(t))$.
3.  **Compute $ds$**: Find $|| \mathbf{r}'(t) || \, dt$.
4.  **Integrate**: Perform a standard single-variable definite integral from $t=a$ to $t=b$.

This type of integral is independent of the parameterization chosen, as long as the parameterization traces the curve in the same direction. It's often used to find:
*   **Mass of a wire:** If $f(x,y,z) = \rho(x,y,z)$ is the linear density of the wire at point $(x,y,z)$.
*   **Average value of a function along a curve.**

---

#### Definition: Mass, Moments, Center of Mass, and Radii of Gyration

If $C$ represents a wire or a thin rod and $\rho(x,y,z)$ is its linear mass density (mass per unit length), then:

1.  **Mass (M):** The total mass of the wire is:
    $$
    M = \int_C \rho(x,y,z) \, ds
    $$

2.  **First Moments (2D example: wire in the $xy$-plane):** These measure the distribution of mass relative to the coordinate axes.
    *   Moment about the $x$-axis: $M_x = \int_C y \rho(x,y) \, ds$
    *   Moment about the $y$-axis: $M_y = \int_C x \rho(x,y) \, ds$
    (For 3D, we'd have $M_{yz} = \int_C x \rho(x,y,z) \, ds$, $M_{xz} = \int_C y \rho(x,y,z) \, ds$, $M_{xy} = \int_C z \rho(x,y,z) \, ds$)

3.  **Center of Mass $(\bar{x}, \bar{y}, \bar{z})$:** This is the point where the entire mass of the object can be considered concentrated for certain calculations (like balancing).
    *   For 2D:
        $$
        \bar{x} = \frac{M_y}{M} \quad \text{and} \quad \bar{y} = \frac{M_x}{M}
        $$
    *   For 3D:
        $$
        \bar{x} = \frac{M_{yz}}{M}, \quad \bar{y} = \frac{M_{xz}}{M}, \quad \bar{z} = \frac{M_{xy}}{M}
        $$

4.  **Second Moments (Moments of Inertia) and Radii of Gyration:** These measure an object's resistance to angular acceleration about an axis. They are especially important in rotational dynamics.
    *   For a wire in 2D with density $\rho(x,y)$:
        *   Moment of inertia about the $x$-axis: $I_x = \int_C y^2 \rho(x,y) \, ds$
        *   Moment of inertia about the $y$-axis: $I_y = \int_C x^2 \rho(x,y) \, ds$
        *   Moment of inertia about the origin (polar moment): $I_0 = \int_C (x^2+y^2) \rho(x,y) \, ds = I_x + I_y$
    *   **Radius of Gyration ($R_x, R_y, R_0$):** This represents the distance from the axis at which the entire mass of the object would need to be concentrated to have the same moment of inertia.
        *   $R_x = \sqrt{I_x / M}$, $R_y = \sqrt{I_y / M}$, $R_0 = \sqrt{I_0 / M}$
    (Similar definitions exist for 3D objects, but we'll focus on the concepts for now.)

---

#### Definition: Line Integral of a Vector Field

The line integral of a vector field $\mathbf{F}$ along a smooth curve $C$ with respect to $\mathbf{r}$ (or with respect to $dx, dy, dz$) is defined as:
$$
\int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt
$$
Where $\mathbf{F}(x,y,z) = \langle P(x,y,z), Q(x,y,z), R(x,y,z) \rangle$ and $\mathbf{r}(t) = \langle x(t), y(t), z(t) \rangle$.
The differential vector $d\mathbf{r}$ is $\mathbf{r}'(t) \, dt = \langle x'(t), y'(t), z'(t) \rangle \, dt = \langle dx, dy, dz \rangle$.

**Key Idea:**
1.  **Parameterize $C$**: Express $x, y, z$ in terms of $t$.
2.  **Evaluate $\mathbf{F}$ along $C$**: Substitute $x(t), y(t), z(t)$ into $\mathbf{F}(x,y,z)$ to get $\mathbf{F}(x(t),y(t),z(t))$.
3.  **Compute $\mathbf{r}'(t)$**: Find the derivative of the parameterization.
4.  **Compute the dot product**: $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$.
5.  **Integrate**: Perform a standard single-variable definite integral from $t=a$ to $t=b$.

This type of integral *depends on the orientation* of the curve $C$. If we reverse the direction of integration, the sign of the integral changes.

#### Work, Flow, and Line Integrals

*   **Work Done by a Force Field:** If $\mathbf{F}$ represents a force field, then the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ gives the total work done by the force in moving a particle along the curve $C$.
    *   Work is done when the force has a component in the direction of motion. The dot product $\mathbf{F} \cdot d\mathbf{r}$ captures exactly this: the component of $\mathbf{F}$ parallel to the tiny displacement $d\mathbf{r}$.

*   **Flow of a Fluid (Circulation):** If $\mathbf{F}$ represents the velocity field of a fluid, then the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ represents the **flow** of the fluid along the curve $C$. If $C$ is a closed curve, this integral is called the **circulation**, which measures the tendency of the fluid to circulate around the curve.
    *   A positive value indicates flow generally with the orientation of the curve, while a negative value indicates flow against it.

---

### Detailed Lecture & Worked Examples

Let's put these definitions into action! Each step is critical, so pay close attention.

#### Example 1: Evaluating a Line Integral (Scalar Function)

**Problem:** Evaluate $\int_C (x^2 + y^2) \, ds$ where $C$ is the line segment from $(0,0)$ to $(1,2)$.

**Solution:**

**Step 1: Parameterize the curve $C$.**
The line segment from $(x_0, y_0)$ to $(x_1, y_1)$ can be parameterized as:
$\mathbf{r}(t) = \langle x_0 + (x_1-x_0)t, y_0 + (y_1-y_0)t \rangle$ for $0 \le t \le 1$.
Here, $(x_0, y_0) = (0,0)$ and $(x_1, y_1) = (1,2)$.
So, $\mathbf{r}(t) = \langle 0 + (1-0)t, 0 + (2-0)t \rangle = \langle t, 2t \rangle$.
Thus, $x(t) = t$ and $y(t) = 2t$ for $0 \le t \le 1$.

**Step 2: Compute $\mathbf{r}'(t)$ and $|| \mathbf{r}'(t) ||$.**
$\mathbf{r}'(t) = \frac{d}{dt}\langle t, 2t \rangle = \langle 1, 2 \rangle$.
$|| \mathbf{r}'(t) || = \sqrt{(1)^2 + (2)^2} = \sqrt{1+4} = \sqrt{5}$.

**Step 3: Substitute $x(t)$, $y(t)$ into $f(x,y)$ and compute $ds$.**
Our function is $f(x,y) = x^2 + y^2$.
Substituting $x(t)=t$ and $y(t)=2t$:
$f(x(t), y(t)) = (t)^2 + (2t)^2 = t^2 + 4t^2 = 5t^2$.
And $ds = || \mathbf{r}'(t) || \, dt = \sqrt{5} \, dt$.

**Step 4: Set up and evaluate the definite integral.**
$$
\int_C (x^2 + y^2) \, ds = \int_0^1 (5t^2) (\sqrt{5}) \, dt
$$
$$
= 5\sqrt{5} \int_0^1 t^2 \, dt
$$
$$
= 5\sqrt{5} \left[ \frac{t^3}{3} \right]_0^1
$$
$$
= 5\sqrt{5} \left( \frac{1^3}{3} - \frac{0^3}{3} \right)
$$
$$
= 5\sqrt{5} \left( \frac{1}{3} \right) = \frac{5\sqrt{5}}{3}
$$
**Result:** The line integral is $\frac{5\sqrt{5}}{3}$. Huzzah!

---

#### Example 2: Evaluating a Line Integral (Scalar Function in 3D)

**Problem:** Evaluate $\int_C (x+y+z) \, ds$ where $C$ is the helix $\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$ for $0 \le t \le \pi$.

**Solution:**

**Step 1: Parameterization is given!**
$\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$ for $0 \le t \le \pi$.
So, $x(t) = \cos t$, $y(t) = \sin t$, $z(t) = t$.

**Step 2: Compute $\mathbf{r}'(t)$ and $|| \mathbf{r}'(t) ||$.**
$\mathbf{r}'(t) = \frac{d}{dt}\langle \cos t, \sin t, t \rangle = \langle -\sin t, \cos t, 1 \rangle$.
$|| \mathbf{r}'(t) || = \sqrt{(-\sin t)^2 + (\cos t)^2 + (1)^2}$
$|| \mathbf{r}'(t) || = \sqrt{\sin^2 t + \cos^2 t + 1}$
Since $\sin^2 t + \cos^2 t = 1$, we have:
$|| \mathbf{r}'(t) || = \sqrt{1 + 1} = \sqrt{2}$.

**Step 3: Substitute $x(t)$, $y(t)$, $z(t)$ into $f(x,y,z)$ and compute $ds$.**
Our function is $f(x,y,z) = x+y+z$.
Substituting:
$f(x(t), y(t), z(t)) = \cos t + \sin t + t$.
And $ds = || \mathbf{r}'(t) || \, dt = \sqrt{2} \, dt$.

**Step 4: Set up and evaluate the definite integral.**
$$
\int_C (x+y+z) \, ds = \int_0^\pi (\cos t + \sin t + t) (\sqrt{2}) \, dt
$$
$$
= \sqrt{2} \int_0^\pi (\cos t + \sin t + t) \, dt
$$
$$
= \sqrt{2} \left[ \sin t - \cos t + \frac{t^2}{2} \right]_0^\pi
$$
Now, let's evaluate at the limits:
At $t=\pi$: $\sin \pi - \cos \pi + \frac{\pi^2}{2} = 0 - (-1) + \frac{\pi^2}{2} = 1 + \frac{\pi^2}{2}$.
At $t=0$: $\sin 0 - \cos 0 + \frac{0^2}{2} = 0 - 1 + 0 = -1$.
Subtracting the lower limit from the upper limit:
$$
= \sqrt{2} \left[ \left(1 + \frac{\pi^2}{2}\right) - (-1) \right]
$$
$$
= \sqrt{2} \left( 1 + \frac{\pi^2}{2} + 1 \right)
$$
$$
= \sqrt{2} \left( 2 + \frac{\pi^2}{2} \right)
$$
$$
= 2\sqrt{2} + \frac{\pi^2 \sqrt{2}}{2}
$$
**Result:** The line integral is $2\sqrt{2} + \frac{\pi^2 \sqrt{2}}{2}$. Magnificent!

---

#### Example 3: Finding the Mass, First Moments, and Center of Mass of an Object

**Problem:** Find the mass and center of mass of a wire bent into the shape of a semicircle $x^2+y^2=a^2$ in the upper half-plane ($y \ge 0$), if its linear density is $\rho(x,y) = k y$, where $k$ is a constant.

**Solution:**

**Step 1: Parameterize the curve $C$.**
A semicircle in the upper half-plane of radius $a$ can be parameterized as:
$\mathbf{r}(t) = \langle a \cos t, a \sin t \rangle$ for $0 \le t \le \pi$.
Thus, $x(t) = a \cos t$ and $y(t) = a \sin t$.

**Step 2: Compute $\mathbf{r}'(t)$ and $|| \mathbf{r}'(t) ||$.**
$\mathbf{r}'(t) = \frac{d}{dt}\langle a \cos t, a \sin t \rangle = \langle -a \sin t, a \cos t \rangle$.
$|| \mathbf{r}'(t) || = \sqrt{(-a \sin t)^2 + (a \cos t)^2}$
$|| \mathbf{r}'(t) || = \sqrt{a^2 \sin^2 t + a^2 \cos^2 t}$
$|| \mathbf{r}'(t) || = \sqrt{a^2 (\sin^2 t + \cos^2 t)} = \sqrt{a^2 (1)} = \sqrt{a^2} = a$ (since $a$ is a radius, it's positive).
So, $ds = a \, dt$.

**Step 3: Evaluate $\rho(x,y)$ along $C$.**
Given $\rho(x,y) = ky$. Substituting $y(t) = a \sin t$:
$\rho(x(t), y(t)) = k (a \sin t) = ka \sin t$.

**Step 4: Calculate the Mass ($M$).**
$$
M = \int_C \rho(x,y) \, ds = \int_0^\pi (ka \sin t) (a \, dt)
$$
$$
= ka^2 \int_0^\pi \sin t \, dt
$$
$$
= ka^2 [-\cos t]_0^\pi
$$
$$
= ka^2 (-\cos \pi - (-\cos 0))
$$
$$
= ka^2 (-(-1) - (-1))
$$
$$
= ka^2 (1 + 1) = 2ka^2
$$
**Mass $M = 2ka^2$.**

**Step 5: Calculate the First Moments ($M_x, M_y$).**
*   **Moment about the $x$-axis ($M_x$):**
    $$
    M_x = \int_C y \rho(x,y) \, ds = \int_0^\pi (a \sin t) (ka \sin t) (a \, dt)
    $$
    $$
    = ka^3 \int_0^\pi \sin^2 t \, dt
    $$
    Use the half-angle identity: $\sin^2 t = \frac{1 - \cos(2t)}{2}$.
    $$
    = ka^3 \int_0^\pi \frac{1 - \cos(2t)}{2} \, dt
    $$
    $$
    = \frac{ka^3}{2} \left[ t - \frac{\sin(2t)}{2} \right]_0^\pi
    $$
    $$
    = \frac{ka^3}{2} \left[ \left(\pi - \frac{\sin(2\pi)}{2}\right) - \left(0 - \frac{\sin(0)}{2}\right) \right]
    $$
    $$
    = \frac{ka^3}{2} \left[ (\pi - 0) - (0 - 0) \right] = \frac{\pi ka^3}{2}
    $$
    **Moment $M_x = \frac{\pi ka^3}{2}$.**

*   **Moment about the $y$-axis ($M_y$):**
    $$
    M_y = \int_C x \rho(x,y) \, ds = \int_0^\pi (a \cos t) (ka \sin t) (a \, dt)
    $$
    $$
    = ka^3 \int_0^\pi \cos t \sin t \, dt
    $$
    We can use a substitution here: Let $u = \sin t$, then $du = \cos t \, dt$.
    When $t=0, u=\sin 0 = 0$. When $t=\pi, u=\sin \pi = 0$.
    $$
    = ka^3 \int_0^0 u \, du = 0
    $$
    **Moment $M_y = 0$.** This makes sense, as the semicircle is symmetric about the $y$-axis, and the density $ky$ is also symmetric ($k(-x)y \ne kxy$, but $ky$ itself is symmetric for the shape $x^2+y^2=a^2$, and $x$ is odd). The total moment should be zero.

**Step 6: Calculate the Center of Mass $(\bar{x}, \bar{y})$.**
$$
\bar{x} = \frac{M_y}{M} = \frac{0}{2ka^2} = 0
$$
$$
\bar{y} = \frac{M_x}{M} = \frac{\frac{\pi ka^3}{2}}{2ka^2} = \frac{\pi ka^3}{2 \cdot 2ka^2} = \frac{\pi a}{4}
$$
**Center of Mass $(\bar{x}, \bar{y}) = \left(0, \frac{\pi a}{4}\right)$.** Excellent! This result tells us that the center of mass is on the $y$-axis, as expected, and it's located $\frac{\pi}{4}$ of the radius up from the diameter.

---

#### Example 4: Finding the Work Done by a Force Field in Moving a Particle

**Problem:** Find the work done by the force field $\mathbf{F}(x,y,z) = \langle yz, xz, xy \rangle$ in moving a particle along the curve $C: \mathbf{r}(t) = \langle t^2, t^3, t \rangle$ from $t=0$ to $t=1$.

**Solution:**

**Step 1: Parameterization is given!**
$\mathbf{r}(t) = \langle t^2, t^3, t \rangle$ for $0 \le t \le 1$.
So, $x(t) = t^2$, $y(t) = t^3$, $z(t) = t$.

**Step 2: Compute $\mathbf{r}'(t)$.**
$\mathbf{r}'(t) = \frac{d}{dt}\langle t^2, t^3, t \rangle = \langle 2t, 3t^2, 1 \rangle$.

**Step 3: Evaluate $\mathbf{F}$ along $C$, i.e., $\mathbf{F}(\mathbf{r}(t))$.**
The force field is $\mathbf{F}(x,y,z) = \langle yz, xz, xy \rangle$.
Substitute $x(t)=t^2, y(t)=t^3, z(t)=t$:
$\mathbf{F}(\mathbf{r}(t)) = \langle (t^3)(t), (t^2)(t), (t^2)(t^3) \rangle$
$\mathbf{F}(\mathbf{r}(t)) = \langle t^4, t^3, t^5 \rangle$.

**Step 4: Compute the dot product $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$.**
$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle t^4, t^3, t^5 \rangle \cdot \langle 2t, 3t^2, 1 \rangle$
$$
= (t^4)(2t) + (t^3)(3t^2) + (t^5)(1)
$$
$$
= 2t^5 + 3t^5 + t^5 = 6t^5
$$

**Step 5: Set up and evaluate the definite integral for work.**
The work $W = \int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^1 \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt$.
$$
W = \int_0^1 6t^5 \, dt
$$
$$
= \left[ 6 \frac{t^6}{6} \right]_0^1
$$
$$
= [t^6]_0^1
$$
$$
= (1)^6 - (0)^6 = 1 - 0 = 1
$$
**Result:** The work done by the force field is $1$. This means the force field helps push the particle along the curve!

---

#### Example 5: Determining a Fluid's Flow along a Curve

**Problem:** Determine the flow of the vector field $\mathbf{F}(x,y) = \langle -y, x \rangle$ along the unit circle $C: \mathbf{r}(t) = \langle \cos t, \sin t \rangle$ for $0 \le t \le 2\pi$.

**Solution:**

**Step 1: Parameterization is given!**
$\mathbf{r}(t) = \langle \cos t, \sin t \rangle$ for $0 \le t \le 2\pi$. This traces the unit circle counter-clockwise.
So, $x(t) = \cos t$ and $y(t) = \sin t$.

**Step 2: Compute $\mathbf{r}'(t)$.**
$\mathbf{r}'(t) = \frac{d}{dt}\langle \cos t, \sin t \rangle = \langle -\sin t, \cos t \rangle$.

**Step 3: Evaluate $\mathbf{F}$ along $C$, i.e., $\mathbf{F}(\mathbf{r}(t))$.**
The vector field is $\mathbf{F}(x,y) = \langle -y, x \rangle$.
Substitute $x(t)=\cos t, y(t)=\sin t$:
$\mathbf{F}(\mathbf{r}(t)) = \langle -\sin t, \cos t \rangle$.

**Step 4: Compute the dot product $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$.**
$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle -\sin t, \cos t \rangle \cdot \langle -\sin t, \cos t \rangle$
$$
= (-\sin t)(-\sin t) + (\cos t)(\cos t)
$$
$$
= \sin^2 t + \cos^2 t = 1
$$
Notice how $\mathbf{F}(\mathbf{r}(t))$ is parallel to $\mathbf{r}'(t)$ in this case! The field is always tangent to the circle, pointing in the direction of increasing $t$. This means we expect a positive flow.

**Step 5: Set up and evaluate the definite integral for flow.**
The flow is $\int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^{2\pi} \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt$.
$$
\text{Flow} = \int_0^{2\pi} 1 \, dt
$$
$$
= [t]_0^{2\pi}
$$
$$
= 2\pi - 0 = 2\pi
$$
**Result:** The flow of the fluid along the unit circle is $2\pi$. This positive value indicates that the fluid generally flows in the counter-clockwise direction along the circle, with a constant tangential component. A fascinating result, indeed!

---

### Practice & Reflection: Solidifying Your Understanding

Alright, intrepid mathematicians, now it's time to let these concepts percolate! Think about these questions to deepen your understanding.

1.  **Conceptual Check-in:**
    *   What is the fundamental difference in interpretation between $\int_C f \, ds$ and $\int_C \mathbf{F} \cdot d\mathbf{r}$? How do their "integrands" differ conceptually?
    *   Why does the calculation of $ds$ involve the magnitude of $\mathbf{r}'(t)$, while $d\mathbf{r}$ involves the vector $\mathbf{r}'(t)$ itself?
    *   When might you expect a line integral of a vector field to be zero? Give two distinct reasons.
    *   If a parameterization $\mathbf{r}_1(t)$ traces a curve $C$ from $A$ to $B$, and $\mathbf{r}_2(u)$ traces the *same* curve $C$ but from $B$ to $A$, how would $\int_C f \, ds$ using $\mathbf{r}_1$ compare to using $\mathbf{r}_2$? What about $\int_C \mathbf{F} \cdot d\mathbf{r}$? Explain your reasoning!

2.  **Calculation Practice:**
    *   Evaluate $\int_C (x^2 + y) \, ds$ where $C$ is the curve $y = x^3$ from $(0,0)$ to $(1,1)$.
    *   Evaluate $\int_C \mathbf{F} \cdot d\mathbf{r}$ for $\mathbf{F}(x,y) = \langle y, -x \rangle$ and $C$ is the line segment from $(0,0)$ to $(1,0)$ then to $(1,1)$. (Hint: This is a piecewise smooth curve, so you'll split the integral into two parts.)

Don't fret if these take a moment to ponder! Multivariable calculus demands deep thought. If you have any questions or want to discuss further, you know where to find me. Keep up the splendid work, and I'll see you next time! Good news indeed!