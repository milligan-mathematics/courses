Good news, everyone! Today, we're embarking on an exhilarating journey into the heart of space curves! While our trusty unit tangent vector $\mathbf{T}(t)$ has served us admirably, it only paints part of the picture. To truly grasp the intricate dance of a curve in three dimensions—how it twists, turns, and wiggles through the void—we need more sophisticated tools. That's where the **Unit Normal and Binormal Vectors, Curvature, and Torsion** come into play!

Think of it like this: if the unit tangent vector tells us which way our space probe is heading, the normal and binormal vectors give us a complete coordinate system right on the probe itself, telling us how it's oriented and spinning. Curvature will tell us how sharply our probe is turning, and torsion, my young apprentices, will reveal how much it's twisting out of its current plane of motion! These concepts are absolutely vital, not just for passing this course (ahem!), but for real-world applications ranging from understanding the mechanics of DNA strands and relativistic physics to designing roller coasters and simulating the motion of microorganisms. Prepare for a glorious deluge of mathematical rigor!

---

## Math 303: Multivariable Calculus — Section 12.3 Lecture Notes

### The TNB Frame: A Local Coordinate System for Space Curves

At any point on a smooth curve $\mathbf{r}(t)$, the unit tangent vector $\mathbf{T}(t)$ points in the direction of motion. However, to fully describe the curve's local geometry, we need a complete orthonormal basis. This is where the **Frenet-Serret Frame** (or TNB frame) steps in, providing us with three mutually orthogonal unit vectors: the Unit Tangent ($\mathbf{T}$), Unit Normal ($\mathbf{N}$), and Unit Binormal ($\mathbf{B}$) vectors.

#### 1. The Unit Tangent Vector (Recap)

We've already encountered this fellow! For a smooth curve $\mathbf{r}(t)$, the unit tangent vector is given by:
$$ \mathbf{T}(t) = \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|} $$
Since $\mathbf{T}(t)$ is a unit vector, its magnitude is always $1$. This implies that $\mathbf{T}(t) \cdot \mathbf{T}'(t) = 0$, meaning $\mathbf{T}(t)$ and its derivative $\mathbf{T}'(t)$ are orthogonal. This orthogonality is key to defining our next vector.

#### 2. The Unit Normal Vector ($\mathbf{N}(t)$)

The unit normal vector captures the direction in which the curve is bending.
**Definition:** The **unit normal vector** $\mathbf{N}(t)$ of a smooth curve $\mathbf{r}(t)$ (for which $\mathbf{T}'(t) \neq \mathbf{0}$) is defined as:
$$ \mathbf{N}(t) = \frac{\mathbf{T}'(t)}{|\mathbf{T}'(t)|} $$
**Interpretation:** The vector $\mathbf{T}'(t)$ points in the direction of the instantaneous change of the tangent vector. Since $\mathbf{T}(t)$ is a unit vector, its change can only be in direction, not length. Thus, $\mathbf{T}'(t)$ points "inward" towards the concave side of the curve, indicating the direction of the curve's turn. $\mathbf{N}(t)$ normalizes this vector, giving us a unit vector pointing directly into the bend.

#### 3. The Unit Binormal Vector ($\mathbf{B}(t)$)

The unit binormal vector completes our orthogonal triad.
**Definition:** The **unit binormal vector** $\mathbf{B}(t)$ is defined as:
$$ \mathbf{B}(t) = \mathbf{T}(t) \times \mathbf{N}(t) $$
**Interpretation:** By definition, $\mathbf{B}(t)$ is a unit vector that is orthogonal to both $\mathbf{T}(t)$ and $\mathbf{N}(t)$. The vectors $\mathbf{T}$, $\mathbf{N}$, and $\mathbf{B}$ (in that order) form a **right-handed orthogonal system** of vectors at every point on the curve. This is known as the **TNB frame** or the **Frenet-Serret frame**, providing a local coordinate system that moves along the curve. It's incredibly useful for understanding the curve's intrinsic properties.

---

### Example 1: Finding the Unit Tangent, Normal, and Binormal Vectors for a Helix

Let's apply these definitions to a classic example: the helix!
**Problem:** Find the unit tangent, normal, and binormal vectors for the helix defined by the vector function $\mathbf{r}(t) = (\cos t, \sin t, t)$.

**Solution:**

**Step 1: Find the Unit Tangent Vector $\mathbf{T}(t)$.**
First, we compute the derivative of $\mathbf{r}(t)$:
$$ \mathbf{r}'(t) = \frac{d}{dt}(\cos t, \sin t, t) = (-\sin t, \cos t, 1) $$
Next, we find the magnitude of $\mathbf{r}'(t)$:
$$ |\mathbf{r}'(t)| = \sqrt{(-\sin t)^2 + (\cos t)^2 + 1^2} = \sqrt{\sin^2 t + \cos^2 t + 1} = \sqrt{1 + 1} = \sqrt{2} $$
Now we can find $\mathbf{T}(t)$:
$$ \mathbf{T}(t) = \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|} = \frac{1}{\sqrt{2}}(-\sin t, \cos t, 1) $$

**Step 2: Find the Unit Normal Vector $\mathbf{N}(t)$.**
To find $\mathbf{N}(t)$, we first need $\mathbf{T}'(t)$:
$$ \mathbf{T}'(t) = \frac{d}{dt}\left(\frac{1}{\sqrt{2}}(-\sin t, \cos t, 1)\right) = \frac{1}{\sqrt{2}}(-\cos t, -\sin t, 0) $$
Next, find the magnitude of $\mathbf{T}'(t)$:
$$ |\mathbf{T}'(t)| = \frac{1}{\sqrt{2}}\sqrt{(-\cos t)^2 + (-\sin t)^2 + 0^2} = \frac{1}{\sqrt{2}}\sqrt{\cos^2 t + \sin^2 t} = \frac{1}{\sqrt{2}}\sqrt{1} = \frac{1}{\sqrt{2}} $$
Finally, we compute $\mathbf{N}(t)$:
$$ \mathbf{N}(t) = \frac{\mathbf{T}'(t)}{|\mathbf{T}'(t)|} = \frac{\frac{1}{\sqrt{2}}(-\cos t, -\sin t, 0)}{\frac{1}{\sqrt{2}}} = (-\cos t, -\sin t, 0) $$

**Step 3: Find the Unit Binormal Vector $\mathbf{B}(t)$.**
We use the definition $\mathbf{B}(t) = \mathbf{T}(t) \times \mathbf{N}(t)$:
$$ \mathbf{B}(t) = \frac{1}{\sqrt{2}}(-\sin t, \cos t, 1) \times (-\cos t, -\sin t, 0) $$
$$ \mathbf{B}(t) = \frac{1}{\sqrt{2}} \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ -\sin t & \cos t & 1 \\ -\cos t & -\sin t & 0 \end{vmatrix} $$
$$ \mathbf{B}(t) = \frac{1}{\sqrt{2}} [(\cos t \cdot 0 - 1 \cdot (-\sin t))\mathbf{i} - ((-\sin t) \cdot 0 - 1 \cdot (-\cos t))\mathbf{j} + ((-\sin t)(-\sin t) - \cos t(-\cos t))\mathbf{k}] $$
$$ \mathbf{B}(t) = \frac{1}{\sqrt{2}} [(\sin t)\mathbf{i} - (\cos t)\mathbf{j} + (\sin^2 t + \cos^2 t)\mathbf{k}] $$
$$ \mathbf{B}(t) = \frac{1}{\sqrt{2}} (\sin t, -\cos t, 1) $$
And there you have it! The complete TNB frame for our helix. Remarkable, isn't it? These three vectors form a dynamic, right-handed reference frame that glides along the curve, revealing its local orientation.

---

### The Osculating, Normal, and Rectifying Planes

With our TNB frame in hand, we can now define three important planes that "touch" the curve at any given point. These planes offer further insight into the curve's local geometry.

**Definition:** Given a vector function $\mathbf{r}(t)$ and its associated $\mathbf{T}(t)$, $\mathbf{N}(t)$, and $\mathbf{B}(t)$:

*   **Osculating Plane:** The plane containing the vectors $\mathbf{T}(t_0)$ and $\mathbf{N}(t_0)$ at a particular point $\mathbf{r}(t_0)$. Its normal vector is parallel to $\mathbf{B}(t_0)$. The name comes from the Latin word *osculari*, meaning "to kiss," as this plane "kisses" the curve, providing the best local planar approximation of the curve.
*   **Normal Plane:** The plane containing the vectors $\mathbf{N}(t_0)$ and $\mathbf{B}(t_0)$ at $\mathbf{r}(t_0)$. Its normal vector is parallel to $\mathbf{T}(t_0)$. This plane is orthogonal to the curve's direction of motion at $\mathbf{r}(t_0)$.
*   **Rectifying Plane:** The plane containing the vectors $\mathbf{B}(t_0)$ and $\mathbf{T}(t_0)$ at $\mathbf{r}(t_0)$. Its normal vector is parallel to $\mathbf{N}(t_0)$.

Recall that the equation of a plane passing through a point $\mathbf{p}_0 = (x_0, y_0, z_0)$ with a normal vector $\mathbf{n} = (A, B, C)$ is given by $A(x-x_0) + B(y-y_0) + C(z-z_0) = 0$, or $(\mathbf{x} - \mathbf{p}_0) \cdot \mathbf{n} = 0$.

---

### Example 2: Determining Equations for the Osculating, Normal, and Rectifying Planes

Let's determine these planes for our beloved helix at a specific point.

**Problem:** Use the results of Example 1 to determine equations for the osculating, normal, and rectifying planes associated with the helix $\mathbf{r}(t) = (\cos t, \sin t, t)$ at the point where $t=\pi$.

**Solution:**

First, we need to evaluate $\mathbf{r}(t)$, $\mathbf{T}(t)$, $\mathbf{N}(t)$, and $\mathbf{B}(t)$ at $t=\pi$.
*   **Position Vector:**
    $$ \mathbf{r}(\pi) = (\cos \pi, \sin \pi, \pi) = (-1, 0, \pi) $$
*   **Unit Tangent Vector:**
    $$ \mathbf{T}(\pi) = \frac{1}{\sqrt{2}}(-\sin \pi, \cos \pi, 1) = \frac{1}{\sqrt{2}}(0, -1, 1) $$
*   **Unit Normal Vector:**
    $$ \mathbf{N}(\pi) = (-\cos \pi, -\sin \pi, 0) = (-(-1), -(0), 0) = (1, 0, 0) $$
*   **Unit Binormal Vector:**
    $$ \mathbf{B}(\pi) = \frac{1}{\sqrt{2}}(\sin \pi, -\cos \pi, 1) = \frac{1}{\sqrt{2}}(0, -(-1), 1) = \frac{1}{\sqrt{2}}(0, 1, 1) $$
Now, we can find the equations for each plane using the point $\mathbf{p}_0 = (-1, 0, \pi)$ and the appropriate normal vector. We can use scalar multiples of the TNB vectors for simplicity.

**1. Osculating Plane (Normal vector parallel to $\mathbf{B}(\pi)$):**
We'll use $\mathbf{n} = \sqrt{2}\mathbf{B}(\pi) = (0, 1, 1)$ as our normal vector.
$$ (\mathbf{x} - \mathbf{r}(\pi)) \cdot \mathbf{n} = 0 $$
$$ (x - (-1), y - 0, z - \pi) \cdot (0, 1, 1) = 0 $$
$$ (x+1)(0) + (y)(1) + (z-\pi)(1) = 0 $$
$$ y + z - \pi = 0 $$

**2. Normal Plane (Normal vector parallel to $\mathbf{T}(\pi)$):**
We'll use $\mathbf{n} = \sqrt{2}\mathbf{T}(\pi) = (0, -1, 1)$ as our normal vector.
$$ (\mathbf{x} - \mathbf{r}(\pi)) \cdot \mathbf{n} = 0 $$
$$ (x - (-1), y - 0, z - \pi) \cdot (0, -1, 1) = 0 $$
$$ (x+1)(0) + (y)(-1) + (z-\pi)(1) = 0 $$
$$ -y + z - \pi = 0 $$

**3. Rectifying Plane (Normal vector parallel to $\mathbf{N}(\pi)$):**
We'll use $\mathbf{n} = \mathbf{N}(\pi) = (1, 0, 0)$ as our normal vector.
$$ (\mathbf{x} - \mathbf{r}(\pi)) \cdot \mathbf{n} = 0 $$
$$ (x - (-1), y - 0, z - \pi) \cdot (1, 0, 0) = 0 $$
$$ (x+1)(1) + (y)(0) + (z-\pi)(0) = 0 $$
$$ x + 1 = 0 $$
These planes provide a dynamic framework around the curve at any given point. Fascinating!

---

### Example 3: Finding Parametric Descriptions of a Ribbon and a Tube

The TNB frame is incredibly useful for constructing surfaces "around" a curve. Let's build some objects around our helix.

**Problem:** Given the helix $\mathbf{r}(t) = (\cos t, \sin t, t)$ as the base curve, find a parametric description of:
a. a ribbon of width 1 centered on the curve.
b. a circular tube of diameter 1 centered on the curve.

**Solution:**

From Example 1, we have:
*   $\mathbf{r}(t) = (\cos t, \sin t, t)$
*   $\mathbf{N}(t) = (-\cos t, -\sin t, 0)$
*   $\mathbf{B}(t) = \frac{1}{\sqrt{2}}(\sin t, -\cos t, 1)$

**a. Ribbon of width 1 centered on the curve:**
A ribbon of width $W$ centered on the curve, extending in the direction of $\mathbf{N}(t)$, can be parameterized by adding a multiple of $\mathbf{N}(t)$ to $\mathbf{r}(t)$. If the width is 1, then the parameter $u$ will range from $-1/2$ to $1/2$.
$$ \mathbf{S}(t,u) = \mathbf{r}(t) + u \mathbf{N}(t) $$
For $u \in [-1/2, 1/2]$ and $t$ over some interval (e.g., $t \in [0, 2\pi]$ for one twist of the helix).
Substituting the expressions for $\mathbf{r}(t)$ and $\mathbf{N}(t)$:
$$ \mathbf{S}(t,u) = (\cos t, \sin t, t) + u (-\cos t, -\sin t, 0) $$
$$ \mathbf{S}(t,u) = (\cos t - u\cos t, \sin t - u\sin t, t + 0) $$
$$ \mathbf{S}(t,u) = ((1-u)\cos t, (1-u)\sin t, t) $$
This function generates a surface that "tracks" the helix, with points offset in the direction of the normal vector.

**b. Circular tube of diameter 1 centered on the curve:**
A circular tube of diameter 1 means a radius $R = 1/2$. A circle around $\mathbf{r}(t)$ lies in the normal plane, which is spanned by $\mathbf{N}(t)$ and $\mathbf{B}(t)$. So, we construct a circle in this plane.
The standard parametric form for a circle of radius $R$ in the $\mathbf{N}$-$\mathbf{B}$ plane centered at $\mathbf{r}(t)$ is:
$$ \mathbf{S}(t,u) = \mathbf{r}(t) + R \cos u \, \mathbf{N}(t) + R \sin u \, \mathbf{B}(t) $$
For our problem, $R = 1/2$ and $u \in [0, 2\pi]$ (to trace a full circle).
Substituting the components:
$$ \mathbf{S}(t,u) = (\cos t, \sin t, t) + \frac{1}{2}\cos u (-\cos t, -\sin t, 0) + \frac{1}{2}\sin u \left(\frac{1}{\sqrt{2}}(\sin t, -\cos t, 1)\right) $$
$$ \mathbf{S}(t,u) = \left( \cos t - \frac{1}{2}\cos u \cos t + \frac{\sin u \sin t}{2\sqrt{2}}, \quad \sin t - \frac{1}{2}\cos u \sin t - \frac{\sin u \cos t}{2\sqrt{2}}, \quad t + \frac{\sin u}{2\sqrt{2}} \right) $$
This provides a parametric description of a circular tube of diameter 1 around the helix.

**A Note on the Source Material:**
*   The slide text states: "a circular tube of diameter 1 ... consists of all those points of the form $\mathbf{r}(t)+(\cos u)\mathbf{N}(t)+(\frac{1}{2}\sin u)\mathbf{B}(t)$."
*   This formula, while using $\mathbf{N}$ and $\mathbf{B}$, would actually describe an *elliptical* tube, not a circular one. A circular tube of diameter 1 (radius $1/2$) would require coefficients $(1/2 \cos u)$ and $(1/2 \sin u)$ for both $\mathbf{N}(t)$ and $\mathbf{B}(t)$ respectively. The equation I derived above is for a *circular* tube of *diameter 1*. The formula presented in the slide would yield an ellipse with semi-axes of length $1$ (along $\mathbf{N}$) and $1/2$ (along $\mathbf{B}$). It seems there might be a minor inconsistency in the source material, but my solution adheres to the stated *description* of a "circular tube of diameter 1." My handwritten notes also show $\mathbf{S}(t,u) = \mathbf{r}(t) + \cos(u) \mathbf{N}(t) + \sin(u) \mathbf{B}(t)$, which would produce a circular tube of radius 1 (diameter 2). In this lecture, I have prioritized the interpretation of "circular tube of diameter 1" as radius 1/2.

---

### Curvature ($\kappa$) and Torsion ($\tau$)

Now for the truly exciting part: quantifying the bend and twist of our curves!

#### 1. Curvature ($\kappa$)

Curvature measures how sharply a curve bends. A large curvature means a sharp bend, like a hairpin turn. A straight line has zero curvature.

**Definition:** The **curvature** $\kappa$ (kappa) of a curve at any given point is the magnitude of the rate of change of its unit tangent vector $\mathbf{T}$ with respect to the arc length parameter $s$.
$$ \kappa = \left| \frac{d\mathbf{T}}{ds} \right| $$
**Practical Formula:** Since finding the arc length parametrization $s(t)$ can be cumbersome, we often use a more convenient formula involving derivatives with respect to $t$:
$$ \kappa = \frac{|\mathbf{T}'(t)|}{|\mathbf{r}'(t)|} $$
Alternatively, and often more simply, using the cross product:
$$ \kappa = \frac{|\mathbf{r}'(t) \times \mathbf{r}''(t)|}{|\mathbf{r}'(t)|^3} $$
This formula is particularly useful as it only requires derivatives of $\mathbf{r}(t)$.

---

### Example 4: Determining the Curvature of a Line and a Circle

Let's test these formulas on some familiar shapes.

**Problem:** Determine the curvature of:
a. a line.
b. the circle $\mathbf{r}(t) = (a \cos t, a \sin t, 0)$.

**Solution:**

**a. Curvature of a line:**
Consider a line, for instance, $\mathbf{r}(t) = (x_0 + At, y_0 + Bt, z_0 + Ct)$.
$$ \mathbf{r}'(t) = (A, B, C) $$
$$ |\mathbf{r}'(t)| = \sqrt{A^2+B^2+C^2} = L $$
The unit tangent vector is:
$$ \mathbf{T}(t) = \frac{(A, B, C)}{L} $$
Since $\mathbf{T}(t)$ is a constant vector, its derivative is zero:
$$ \mathbf{T}'(t) = \mathbf{0} $$
Therefore, the curvature is:
$$ \kappa = \frac{|\mathbf{T}'(t)|}{|\mathbf{r}'(t)|} = \frac{|\mathbf{0}|}{L} = \frac{0}{L} = 0 $$
As expected, a straight line has zero curvature! It doesn't bend at all. Utterly predictable!

**b. Curvature of the circle $\mathbf{r}(t) = (a \cos t, a \sin t, 0)$:**
Here, $a$ represents the radius of the circle.
First, find $\mathbf{r}'(t)$:
$$ \mathbf{r}'(t) = (-a \sin t, a \cos t, 0) $$
And its magnitude:
$$ |\mathbf{r}'(t)| = \sqrt{(-a \sin t)^2 + (a \cos t)^2 + 0^2} = \sqrt{a^2 \sin^2 t + a^2 \cos^2 t} = \sqrt{a^2(\sin^2 t + \cos^2 t)} = \sqrt{a^2} = a \quad (\text{assuming } a>0) $$
Now, calculate $\mathbf{T}(t)$:
$$ \mathbf{T}(t) = \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|} = \frac{1}{a}(-a \sin t, a \cos t, 0) = (-\sin t, \cos t, 0) $$
Next, find $\mathbf{T}'(t)$:
$$ \mathbf{T}'(t) = (-\cos t, -\sin t, 0) $$
And its magnitude:
$$ |\mathbf{T}'(t)| = \sqrt{(-\cos t)^2 + (-\sin t)^2 + 0^2} = \sqrt{\cos^2 t + \sin^2 t} = \sqrt{1} = 1 $$
Finally, compute the curvature:
$$ \kappa = \frac{|\mathbf{T}'(t)|}{|\mathbf{r}'(t)|} = \frac{1}{a} $$
This tells us that the curvature of a circle is simply the reciprocal of its radius. A smaller radius $a$ leads to a larger curvature $\kappa$, meaning the circle bends more sharply. This makes intuitive sense!

#### 2. Torsion ($\tau$)

Torsion measures how much a curve twists out of its osculating plane. Imagine a curve that is perfectly flat on a table (planar curve) – its torsion is zero. If you lift part of the curve off the table, making it twist, its torsion will be non-zero.

**Definition:** The **torsion** $\tau$ (tau) of a curve at any given point is defined by the relationship:
$$ \frac{d\mathbf{B}}{ds} = -\tau \mathbf{N} $$
From this, we can derive a formula for $\tau$:
$$ \tau = -\frac{d\mathbf{B}}{ds} \cdot \mathbf{N} $$
**Practical Formula:** Similar to curvature, there's a more direct formula for torsion using derivatives of $\mathbf{r}(t)$:
$$ \tau = \frac{(\mathbf{r}'(t) \times \mathbf{r}''(t)) \cdot \mathbf{r}'''(t)}{|\mathbf{r}'(t) \times \mathbf{r}''(t)|^2} $$
This formula is derived from the fact that $\tau$ is related to how the osculating plane changes.

---

#### The Frenet-Serret Formulas

These three formulas, named after Jean Frenet and Joseph Serret, succinctly describe how the TNB frame vectors change as we move along the curve. They are the fundamental equations of the theory of space curves!

**Theorem: The Frenet-Serret Formulas**
Given a curve $\mathbf{r}$ and its associated unit tangent, normal, and binormal vectors $\mathbf{T}$, $\mathbf{N}$, and $\mathbf{B}$, we have the following relationships with respect to arc length $s$:
1.  $$ \frac{d\mathbf{T}}{ds} = \kappa \mathbf{N} $$
    (The tangent vector changes in the direction of the normal, proportional to curvature.)
2.  $$ \frac{d\mathbf{N}}{ds} = -\kappa \mathbf{T} + \tau \mathbf{B} $$
    (The normal vector changes towards the negative tangent (due to curvature) and towards the binormal (due to torsion).)
3.  $$ \frac{d\mathbf{B}}{ds} = -\tau \mathbf{N} $$
    (The binormal vector changes in the direction of the negative normal, proportional to torsion.)

---

### Example 5: Calculating the Curvature and Torsion Functions of a Helix

Let's put the definitions of curvature and torsion to the ultimate test using our helix example.

**Problem:** Calculate the curvature and torsion functions for the helix $\mathbf{r}(t) = (\cos t, \sin t, t)$.

**Solution:**

For this problem, we will use the definitions involving arc length for practice, as done in the handwritten notes.

**Step 1: Determine the arc length parameter $s(t)$ and its inverse $t(s)$.**
From Example 1, we found $|\mathbf{r}'(t)| = \sqrt{2}$.
The arc length $s(t)$ from $t=0$ to $t$ is:
$$ s(t) = \int_0^t |\mathbf{r}'(u)| du = \int_0^t \sqrt{2} du = \sqrt{2}t $$
Thus, we can express $t$ in terms of $s$:
$$ t(s) = \frac{s}{\sqrt{2}} $$

**Step 2: Express $\mathbf{T}(t)$, $\mathbf{N}(t)$, and $\mathbf{B}(t)$ in terms of $s$.**
Substitute $t = s/\sqrt{2}$ into our results from Example 1:
$$ \mathbf{T}(s) = \frac{1}{\sqrt{2}}\left(-\sin\left(\frac{s}{\sqrt{2}}\right), \cos\left(\frac{s}{\sqrt{2}}\right), 1\right) $$
$$ \mathbf{N}(s) = \left(-\cos\left(\frac{s}{\sqrt{2}}\right), -\sin\left(\frac{s}{\sqrt{2}}\right), 0\right) $$
$$ \mathbf{B}(s) = \frac{1}{\sqrt{2}}\left(\sin\left(\frac{s}{\sqrt{2}}\right), -\cos\left(\frac{s}{\sqrt{2}}\right), 1\right) $$

**Step 3: Calculate Curvature $\kappa = \left| \frac{d\mathbf{T}}{ds} \right|$.**
We need to differentiate $\mathbf{T}(s)$ with respect to $s$. Remember to use the chain rule: $\frac{d}{ds}f(s/\sqrt{2}) = f'(s/\sqrt{2}) \cdot \frac{1}{\sqrt{2}}$.
$$ \frac{d\mathbf{T}}{ds} = \frac{1}{\sqrt{2}} \left( -\cos\left(\frac{s}{\sqrt{2}}\right) \cdot \frac{1}{\sqrt{2}}, -\sin\left(\frac{s}{\sqrt{2}}\right) \cdot \frac{1}{\sqrt{2}}, 0 \right) $$
$$ \frac{d\mathbf{T}}{ds} = \frac{1}{2}\left(-\cos\left(\frac{s}{\sqrt{2}}\right), -\sin\left(\frac{s}{\sqrt{2}}\right), 0\right) $$
Now, find the magnitude of this vector:
$$ \kappa = \left| \frac{d\mathbf{T}}{ds} \right| = \frac{1}{2}\sqrt{\left(-\cos\left(\frac{s}{\sqrt{2}}\right)\right)^2 + \left(-\sin\left(\frac{s}{\sqrt{2}}\right)\right)^2 + 0^2} $$
$$ \kappa = \frac{1}{2}\sqrt{\cos^2\left(\frac{s}{\sqrt{2}}\right) + \sin^2\left(\frac{s}{\sqrt{2}}\right)} = \frac{1}{2}\sqrt{1} = \frac{1}{2} $$
So, the curvature of the helix is a constant $1/2$. This makes sense, as a helix bends uniformly.

**Step 4: Calculate Torsion $\tau = -\frac{d\mathbf{B}}{ds} \cdot \mathbf{N}$.**
First, differentiate $\mathbf{B}(s)$ with respect to $s$:
$$ \frac{d\mathbf{B}}{ds} = \frac{1}{\sqrt{2}} \left( \cos\left(\frac{s}{\sqrt{2}}\right) \cdot \frac{1}{\sqrt{2}}, -\left(-\sin\left(\frac{s}{\sqrt{2}}\right)\right) \cdot \frac{1}{\sqrt{2}}, 0 \right) $$
$$ \frac{d\mathbf{B}}{ds} = \frac{1}{2}\left(\cos\left(\frac{s}{\sqrt{2}}\right), \sin\left(\frac{s}{\sqrt{2}}\right), 0\right) $$
Now, take the dot product with $\mathbf{N}(s)$:
$$ \frac{d\mathbf{B}}{ds} \cdot \mathbf{N}(s) = \frac{1}{2}\left(\cos\left(\frac{s}{\sqrt{2}}\right), \sin\left(\frac{s}{\sqrt{2}}\right), 0\right) \cdot \left(-\cos\left(\frac{s}{\sqrt{2}}\right), -\sin\left(\frac{s}{\sqrt{2}}\right), 0\right) $$
$$ \frac{d\mathbf{B}}{ds} \cdot \mathbf{N}(s) = \frac{1}{2}\left(-\cos^2\left(\frac{s}{\sqrt{2}}\right) - \sin^2\left(\frac{s/\sqrt{2}}\right) + 0\right) $$
$$ \frac{d\mathbf{B}}{ds} \cdot \mathbf{N}(s) = \frac{1}{2}(-(\cos^2(s/\sqrt{2}) + \sin^2(s/\sqrt{2}))) = \frac{1}{2}(-1) = -\frac{1}{2} $$
Finally, compute $\tau$:
$$ \tau = -\left(\frac{d\mathbf{B}}{ds} \cdot \mathbf{N}\right) = -\left(-\frac{1}{2}\right) = \frac{1}{2} $$
The torsion of the helix is also a constant $1/2$. This indicates a uniform twist, which perfectly describes the constant spiral motion of a helix. Magnificently consistent!

---

### Tangential and Normal Components of Acceleration

When an object moves along a curve, its acceleration can be broken down into two components: one along the tangent direction (speeding up or slowing down), and one along the normal direction (turning).

**Definition:** The **tangential** ($a_T$) and **normal** ($a_N$) components of acceleration of an object with position function $\mathbf{r}(t)$ are defined as:
$$ \mathbf{a}(t) = a_T \mathbf{T}(t) + a_N \mathbf{N}(t) $$
Where:
*   **Tangential component of acceleration:** $a_T = s''(t) = \frac{d}{dt}(|\mathbf{r}'(t)|)$. This component measures the rate of change of the object's speed. It can also be found using $a_T = \frac{\mathbf{r}'(t) \cdot \mathbf{r}''(t)}{|\mathbf{r}'(t)|}$.
*   **Normal component of acceleration:** $a_N = (s'(t))^2 \kappa = |\mathbf{v}(t)|^2 \kappa$. This component measures the acceleration due to the change in direction. It can also be found using $a_N = \frac{|\mathbf{r}'(t) \times \mathbf{r}''(t)|}{|\mathbf{r}'(t)|}$.

We also know that the magnitude of the acceleration vector is related to its components by the Pythagorean theorem:
$$ |\mathbf{a}|^2 = a_T^2 + a_N^2 $$
This relationship can be very useful for finding $a_N$ if $a_T$ and $|\mathbf{a}|$ are known: $a_N = \sqrt{|\mathbf{a}|^2 - a_T^2}$.

---

### Example 6: Finding the Tangential and Normal Components of Acceleration of an Object

Let's find these components for an object moving along a spiral path.

**Problem:** Find the tangential and normal components of acceleration of an object whose position function is the spiral $\mathbf{r}(t) = (t \cos t, t \sin t, 0)$.

**Solution:**

**Step 1: Find $\mathbf{r}'(t)$ and $\mathbf{r}''(t)$.**
First derivative ($\mathbf{v}(t)$):
$$ \mathbf{r}'(t) = \frac{d}{dt}(t \cos t, t \sin t, 0) = (\cos t - t \sin t, \sin t + t \cos t, 0) $$
Second derivative ($\mathbf{a}(t)$):
$$ \mathbf{r}''(t) = \frac{d}{dt}(\cos t - t \sin t, \sin t + t \cos t, 0) $$
$$ = (-\sin t - (\sin t + t \cos t), \cos t + (\cos t - t \sin t), 0) $$
$$ = (-2 \sin t - t \cos t, 2 \cos t - t \sin t, 0) $$

**Step 2: Find the Tangential Component of Acceleration, $a_T = s''(t)$.**
First, calculate the speed $s'(t) = |\mathbf{r}'(t)|$:
$$ |\mathbf{r}'(t)|^2 = (\cos t - t \sin t)^2 + (\sin t + t \cos t)^2 + 0^2 $$
$$ = (\cos^2 t - 2t \sin t \cos t + t^2 \sin^2 t) + (\sin^2 t + 2t \sin t \cos t + t^2 \cos^2 t) $$
$$ = (\cos^2 t + \sin^2 t) + t^2(\sin^2 t + \cos^2 t) = 1 + t^2 $$
So, the speed is $s'(t) = \sqrt{1+t^2}$.
Now, differentiate $s'(t)$ to find $a_T = s''(t)$:
$$ a_T = \frac{d}{dt}(\sqrt{1+t^2}) = \frac{1}{2\sqrt{1+t^2}}(2t) = \frac{t}{\sqrt{1+t^2}} $$

**Step 3: Find the Normal Component of Acceleration, $a_N$.**
We'll use the relation $a_N = \sqrt{|\mathbf{a}|^2 - a_T^2}$.
First, calculate the magnitude squared of the acceleration vector $|\mathbf{a}|^2 = |\mathbf{r}''(t)|^2$:
$$ |\mathbf{r}''(t)|^2 = (-2 \sin t - t \cos t)^2 + (2 \cos t - t \sin t)^2 + 0^2 $$
$$ = (4 \sin^2 t + 4t \sin t \cos t + t^2 \cos^2 t) + (4 \cos^2 t - 4t \sin t \cos t + t^2 \sin^2 t) $$
$$ = 4(\sin^2 t + \cos^2 t) + t^2(\cos^2 t + \sin^2 t) $$
$$ = 4(1) + t^2(1) = 4 + t^2 $$
Now, substitute into the formula for $a_N$:
$$ a_N = \sqrt{|\mathbf{a}|^2 - a_T^2} = \sqrt{(4 + t^2) - \left(\frac{t}{\sqrt{1+t^2}}\right)^2} $$
$$ a_N = \sqrt{4 + t^2 - \frac{t^2}{1+t^2}} = \sqrt{\frac{(4+t^2)(1+t^2) - t^2}{1+t^2}} $$
$$ a_N = \sqrt{\frac{4 + 4t^2 + t^2 + t^4 - t^2}{1+t^2}} = \sqrt{\frac{4 + 4t^2 + t^4}{1+t^2}} $$
Notice that the numerator is a perfect square: $4 + 4t^2 + t^4 = (2+t^2)^2$.
$$ a_N = \sqrt{\frac{(2+t^2)^2}{1+t^2}} = \frac{|2+t^2|}{\sqrt{1+t^2}} $$
Since $2+t^2$ is always positive, we can remove the absolute value:
$$ a_N = \frac{2+t^2}{\sqrt{1+t^2}} $$
So there you have it! The tangential and normal components of acceleration. This method, using the magnitude relationship, often saves a lot of work compared to calculating curvature directly. Brilliant!

---

### Summary of Space Curve Definitions and Formulas

A handy table for your reference, my dear students! Remember these well, they are the bedrock of understanding curves in space!

| Concept                                 | Definition / Formula                                                                                                                                                                                                                                                                                                                                                                    |
| :-------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Unit Tangent Vector**                 | $$ \mathbf{T}(t) = \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|} = \frac{d\mathbf{r}}{ds} $$                                                                                                                                                                                                                                                                                                    |
| **Unit Normal Vector**                  | $$ \mathbf{N}(t) = \frac{\mathbf{T}'(t)}{|\mathbf{T}'(t)|} $$ <br> _(Alternative):_ $$ \mathbf{N}(t) = \frac{(\mathbf{r}'(t) \times \mathbf{r}''(t)) \times \mathbf{r}'(t)}{|(\mathbf{r}'(t) \times \mathbf{r}''(t)) \times \mathbf{r}'(t)|} $$                                                                                                                                                 |
| **Unit Binormal Vector**                | $$ \mathbf{B}(t) = \mathbf{T}(t) \times \mathbf{N}(t) $$ <br> _(Alternative):_ $$ \mathbf{B}(t) = \frac{\mathbf{r}'(t) \times \mathbf{r}''(t)}{|\mathbf{r}'(t) \times \mathbf{r}''(t)|} $$                                                                                                                                                                                                |
| **Arc Length Parameter**                | $$ s(t) = \int_{t_0}^t |\mathbf{r}'(u)| du \quad \text{and} \quad s'(t) = |\mathbf{r}'(t)| $$                                                                                                                                                                                                                                                                                              |
| **Osculating Plane**                    | Spanned by $\mathbf{T}(t)$ and $\mathbf{N}(t)$; normal vector is $\mathbf{B}(t)$.                                                                                                                                                                                                                                                                                                     |
| **Normal Plane**                        | Spanned by $\mathbf{N}(t)$ and $\mathbf{B}(t)$; normal vector is $\mathbf{T}(t)$.                                                                                                                                                                                                                                                                                                     |
| **Rectifying Plane**                    | Spanned by $\mathbf{B}(t)$ and $\mathbf{T}(t)$; normal vector is $\mathbf{N}(t)$.                                                                                                                                                                                                                                                                                                     |
| **Velocity**                            | $$ \mathbf{v}(t) = \mathbf{r}'(t) = s'(t)\mathbf{T}(t) $$                                                                                                                                                                                                                                                                                                                             |
| **Acceleration**                        | $$ \mathbf{a}(t) = \mathbf{r}''(t) = a_T \mathbf{T}(t) + a_N \mathbf{N}(t) $$                                                                                                                                                                                                                                                                                                          |
| **Tangential Component of Acceleration** | $$ a_T = s''(t) = \frac{\mathbf{r}'(t) \cdot \mathbf{r}''(t)}{|\mathbf{r}'(t)|} $$                                                                                                                                                                                                                                                                                                     |
| **Normal Component of Acceleration**     | $$ a_N = (s'(t))^2 \kappa = |\mathbf{v}(t)|^2 \kappa = \frac{|\mathbf{r}'(t) \times \mathbf{r}''(t)|}{|\mathbf{r}'(t)|} = \sqrt{|\mathbf{a}(t)|^2 - a_T^2} $$                                                                                                                                                                                                                        |
| **Curvature**                           | $$ \kappa = \left|\frac{d\mathbf{T}}{ds}\right| = \frac{|\mathbf{T}'(t)|}{|\mathbf{r}'(t)|} = \frac{|\mathbf{r}'(t) \times \mathbf{r}''(t)|}{|\mathbf{r}'(t)|^3} $$                                                                                                                                                                                                                      |
| **Torsion**                             | $$ \tau = -\frac{d\mathbf{B}}{ds} \cdot \mathbf{N}(t) $$ <br> _(Alternative):_ $$ \tau = \frac{(\mathbf{r}'(t) \times \mathbf{r}''(t)) \cdot \mathbf{r}'''(t)}{|\mathbf{r}'(t) \times \mathbf{r}''(t)|^2} $$                                                                                                                                                                           |
| **Frenet-Serret Formulas**              | $$ \frac{d\mathbf{T}}{ds} = \kappa \mathbf{N} $$ $$ \frac{d\mathbf{N}}{ds} = -\kappa \mathbf{T} + \tau \mathbf{B} $$ $$ \frac{d\mathbf{B}}{ds} = -\tau \mathbf{N} $$                                                                                                                                                                                                                    |

---

### Practice & Reflection

Now, for some cogitation to truly solidify these concepts!

1.  **Conceptual Check:** Explain in your own words how the unit normal vector $\mathbf{N}(t)$ is related to the unit tangent vector $\mathbf{T}(t)$ and why it always points "inward" for a curve. What happens if $\mathbf{T}'(t) = \mathbf{0}$?
2.  **Geometric Interpretation:** Describe the physical meaning of curvature $\kappa$ and torsion $\tau$. If you are driving a car, what sensations would correspond to large $\kappa$ and large $\tau$?
3.  **TNB Frame Importance:** Why is the TNB frame (or Frenet-Serret frame) considered so important for understanding the geometry of space curves, beyond just knowing the position and velocity?
4.  **Acceleration Components:** An object moves along a straight line at constant speed. What are its tangential ($a_T$) and normal ($a_N$) components of acceleration? Justify your answer using the definitions.
5.  **Challenge:** Consider a curve that lies entirely in a plane (a planar curve). What can you say about its torsion? Can you mathematically prove this from the definition of torsion using $\mathbf{B}(t)$? (Hint: if a curve is planar, its binormal vector must be constant and orthogonal to the plane).

That's all for today, my little mathematicians! Keep pondering these wonders, and you'll be designing your own space-faring trajectories in no time! Good news, everyone! Now, off you go, before I accidentally send you to a parallel universe where cats rule the world! Grumble grumble...