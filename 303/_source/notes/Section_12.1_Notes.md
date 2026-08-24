Good news, everyone! Today, we embark on a thrilling voyage into the fascinating realm of **Multivariable Calculus**. Prepare yourselves for an intellectual journey that will expand your mathematical horizons beyond the mere $(x,y)$ plane and into the wondrous three-dimensional space, and even beyond!

Welcome to **Math 303, Section 12.1: Vector-Valued Functions**.

---

### **Overview: Plotting a Course for Higher Dimensions**

In single-variable calculus, we studied functions like $y = f(x)$, where a single input $x$ produced a single output $y$. But what if we want to describe the path of a spaceship, the trajectory of a thrown object, or the intricate shape of a roller coaster track in 3D space? For such endeavors, a single function simply won't suffice!

That, my dear students, is precisely where **vector-valued functions** come into play. Instead of a scalar output, these functions produce a *vector* as their output, allowing us to pinpoint positions and describe motion in higher dimensions. We'll learn how to represent curves in space using these powerful tools, and then, by Jove, we'll extend the fundamental operations of calculus – limits, derivatives, and integrals – to them!

Our mission objectives for today's lecture:

1.  **Vector Functions and Space Curves:** Understanding how vector functions define paths and shapes in 2D or 3D space.
2.  **Differentiation and Integration of Space Curves:** Mastering how to apply the calculus you already know to these new, exciting vector functions.

Let us commence!

---

### **Core Concepts & Definitions: The Building Blocks of Vector Calculus**

#### **1. Vector-Valued Functions**

A **vector-valued function** (or simply a **vector function**) is a function whose input is a real number (often denoted by $t$, representing time or some other parameter) and whose output is a vector.

For a function in three dimensions (which is our primary focus here in Math 303), we can write it as:

$$
\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle
$$

or, using standard basis vectors:

$$
\mathbf{r}(t) = f(t)\mathbf{i} + g(t)\mathbf{j} + h(t)\mathbf{k}
$$

Here, $f(t)$, $g(t)$, and $h(t)$ are scalar functions of the real variable $t$, and they are called the **component functions** of $\mathbf{r}(t)$. The variable $t$ is called the **parameter**.

These component functions define the coordinates of points in space at any given $t$:

$$
x = f(t), \quad y = g(t), \quad z = h(t) \quad \text{for } t \in I
$$

These are precisely the **parametric equations** for the curve traced out by the vector function.

---

#### **2. Limits of Vector Functions**

Just as with our good old scalar functions, we can define the limit of a vector function. Intuitively, $\lim_{t \to a} \mathbf{r}(t) = \mathbf{L}$ means that as $t$ gets arbitrarily close to $a$, the vector $\mathbf{r}(t)$ gets arbitrarily close to the fixed vector $\mathbf{L}$.

**Definition (Epsilon-Delta):**
Let $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$ be a vector function and $\mathbf{L}$ be a fixed vector $\mathbf{L} = \langle L_1, L_2, L_3 \rangle$. We say that $\mathbf{r}$ has limit $\mathbf{L}$ as $t$ approaches $a$, and write $\lim_{t \to a} \mathbf{r}(t) = \mathbf{L}$, if for every number $\epsilon > 0$, there is a number $\delta > 0$ such that:

$$
0 < |t-a| < \delta \implies ||\mathbf{r}(t) - \mathbf{L}|| < \epsilon
$$

Ah, the epsilon-delta definition! A classic. But good news, everyone! For practical purposes, calculating limits of vector functions is far simpler than wrestling with epsilons and deltas directly. It turns out, thanks to the Pythagorean theorem and the properties of limits, that the limit of a vector function can be found by taking the limit of each component function separately:

$$
\lim_{t \to a} \mathbf{r}(t) = \left\langle \lim_{t \to a} f(t), \lim_{t \to a} g(t), \lim_{t \to a} h(t) \right\rangle
$$

Provided that each of the individual limits $\lim_{t \to a} f(t)$, $\lim_{t \to a} g(t)$, and $\lim_{t \to a} h(t)$ exists. Splendid!

---

#### **3. Continuity of Vector Functions**

A vector function $\mathbf{r}(t)$ is **continuous** at a number $a$ if:

1.  $\mathbf{r}(a)$ is defined.
2.  $\lim_{t \to a} \mathbf{r}(t)$ exists.
3.  $\lim_{t \to a} \mathbf{r}(t) = \mathbf{r}(a)$.

Much like scalar functions, a vector function is continuous on an interval if it is continuous at every number in the interval. Since limits are computed component-wise, continuity is also determined component-wise: a vector function $\mathbf{r}(t)$ is continuous if and only if its component functions $f(t)$, $g(t)$, and $h(t)$ are all continuous. Simple as that!

---

#### **4. Space Curves**

Given functions $f$, $g$, and $h$, each continuous on an interval $I$, the set $C$ of points $(x,y,z)$ traced out by the vector function $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$, for $t \in I$, is called a **space curve** (or simply a **curve**) in $\mathbb{R}^3$. The curve $C$ is also defined by the parametric equations $x = f(t)$, $y = g(t)$, and $z = h(t)$ for $t \in I$.

The vector $\mathbf{r}(t)$ is often referred to as the **position vector** of the point $(x,y,z)$ on the curve. As $t$ varies, the tip of the position vector $\mathbf{r}(t)$ sweeps out the space curve.

---

#### **5. Differentiation of Vector Functions**

Now, for the really exciting part: how do we do calculus with these things? Let's start with the derivative.

The derivative of a vector function $\mathbf{r}(t)$, denoted $\mathbf{r}'(t)$ or $\frac{d\mathbf{r}}{dt}$, is defined in a manner entirely analogous to scalar functions:

$$
\mathbf{r}'(t) = \lim_{\Delta t \to 0} \frac{\mathbf{r}(t+\Delta t) - \mathbf{r}(t)}{\Delta t}
$$

Provided this limit exists. By Jove, this is familiar! The term $\mathbf{r}(t+\Delta t) - \mathbf{r}(t)$ is a vector representing the displacement between two points on the curve, and dividing by $\Delta t$ gives us an average rate of change. Taking the limit as $\Delta t \to 0$ gives us the instantaneous rate of change!

Precisely as with limits, the derivative of a vector function is found by differentiating its component functions:

$$
\mathbf{r}'(t) = \left\langle f'(t), g'(t), h'(t) \right\rangle
$$

or

$$
\mathbf{r}'(t) = f'(t)\mathbf{i} + g'(t)\mathbf{j} + h'(t)\mathbf{k}
$$

**Geometric Interpretation:** The vector $\mathbf{r}'(t)$ is the **tangent vector** to the curve at the point corresponding to $t$. It points in the direction of increasing $t$ along the curve and its magnitude, $||\mathbf{r}'(t)||$, represents the speed of a particle moving along the curve at time $t$.

---

#### **6. Differentiability and Smoothness of Space Curves**

A vector function $\mathbf{r}(t)$ is said to be **differentiable** at $t$ if $\mathbf{r}'(t)$ exists. This means all its component functions $f(t)$, $g(t)$, and $h(t)$ are differentiable at $t$.

A curve is said to be **smooth** on an interval $I$ if $\mathbf{r}'(t)$ is continuous and $\mathbf{r}'(t) \neq \mathbf{0}$ for all $t$ in $I$. If $\mathbf{r}'(t) = \mathbf{0}$ at some point, the curve might have a sharp corner or a cusp, or it might change direction instantaneously, which means it isn't "smooth" in the mathematical sense.

---

#### **7. Differentiation Rules for Vector Functions**

Fear not, many of your familiar differentiation rules from single-variable calculus have perfectly analogous counterparts for vector functions! Assume that $\mathbf{u}(t)$ and $\mathbf{v}(t)$ are differentiable vector functions, $\mathbf{C}$ is a constant vector, $f(t)$ is a differentiable scalar function, and $c$ is a scalar constant. Then:

1.  **Constant Vector Rule:**
    $$ \frac{d}{dt} [\mathbf{C}] = \mathbf{0} $$
2.  **Scalar Multiple Rules:**
    $$ \frac{d}{dt} [c\mathbf{u}(t)] = c\mathbf{u}'(t) $$
    $$ \frac{d}{dt} [f(t)\mathbf{u}(t)] = f'(t)\mathbf{u}(t) + f(t)\mathbf{u}'(t) $$
    (This is like a product rule for a scalar function and a vector function!)
3.  **Sum/Difference Rules:**
    $$ \frac{d}{dt} [\mathbf{u}(t) \pm \mathbf{v}(t)] = \mathbf{u}'(t) \pm \mathbf{v}'(t) $$
4.  **Dot Product Rule:**
    $$ \frac{d}{dt} [\mathbf{u}(t) \cdot \mathbf{v}(t)] = \mathbf{u}'(t) \cdot \mathbf{v}(t) + \mathbf{u}(t) \cdot \mathbf{v}'(t) $$
    (Aha! A product rule for dot products!)
5.  **Cross Product Rule:**
    $$ \frac{d}{dt} [\mathbf{u}(t) \times \mathbf{v}(t)] = \mathbf{u}'(t) \times \mathbf{v}(t) + \mathbf{u}(t) \times \mathbf{v}'(t) $$
    (And one for cross products, maintaining the order!)
6.  **Chain Rule:**
    $$ \frac{d}{dt} [\mathbf{u}(f(t))] = f'(t)\mathbf{u}'(f(t)) $$
    (For composing a vector function with a scalar function.)

Observe that the product rules (2nd scalar multiple, dot product, cross product) are very similar to the scalar product rule, but careful attention must be paid to the vector operations (dot vs. cross) and their order!

---

#### **8. Integration of Vector Functions**

Of course, if we can differentiate, we must be able to integrate!

**Indefinite Integrals:**
Given a vector function $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$, the **indefinite integral** of $\mathbf{r}$ with respect to $t$ is the family of all vector functions whose derivative is $\mathbf{r}$, denoted $\int \mathbf{r}(t) dt$.

Just as with differentiation, integration is performed component-wise:

$$
\int \mathbf{r}(t) dt = \left\langle \int f(t) dt, \int g(t) dt, \int h(t) dt \right\rangle + \mathbf{C}
$$

where $\mathbf{C} = \langle C_1, C_2, C_3 \rangle$ is an arbitrary constant vector of integration.

If $\mathbf{R}(t)$ is any particular antiderivative of $\mathbf{r}(t)$ (meaning $\mathbf{R}'(t) = \mathbf{r}(t)$), then:

$$
\int \mathbf{r}(t) dt = \mathbf{R}(t) + \mathbf{C}
$$

**Definite Integrals:**
If $f(t)$, $g(t)$, and $h(t)$ are all integrable functions over an interval $[a,b]$, then the **definite integral** of $\mathbf{r}$ from $a$ to $b$ is:

$$
\int_a^b \mathbf{r}(t) dt = \left\langle \int_a^b f(t) dt, \int_a^b g(t) dt, \int_a^b h(t) dt \right\rangle
$$

And, marvel of marvels, the Fundamental Theorem of Calculus still applies! If $\mathbf{R}(t)$ is an antiderivative of $\mathbf{r}(t)$, then:

$$
\int_a^b \mathbf{r}(t) dt = \mathbf{R}(b) - \mathbf{R}(a)
$$

---

### **Detailed Lecture & Worked Examples: Putting Theory into Practice**

Now, let us illuminate these concepts with some concrete examples. Pay close attention, for these are the blueprints for success!

#### **Example 1: Understanding the Parameters of a Vector Function (The Helix)**

Consider the vector function $\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$, for $t \in [-2\pi, 2\pi]$.

**Task:** Describe the curve represented by this function.

**Solution:**
Let's analyze the component functions:
$x = \cos t$
$y = \sin t$
$z = t$

First, consider the $x$ and $y$ components. We know that $x^2 + y^2 = (\cos t)^2 + (\sin t)^2 = \cos^2 t + \sin^2 t = 1$. This means that the projection of the curve onto the $xy$-plane is a circle of radius 1 centered at the origin.

Now, let's incorporate the $z$ component: $z = t$.
As $t$ increases, $z$ also increases. This means the curve spirals upwards.
If we let $t$ range from $-2\pi$ to $2\pi$, the curve completes two full turns around the $z$-axis, starting at $z = -2\pi$ and ending at $z = 2\pi$.

Combining these observations, the curve described by $\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$ is a **helix** that winds around a cylinder of radius 1 (defined by $x^2 + y^2 = 1$). The positive $t$ direction causes the position vector $\mathbf{r}(t)$ to travel "up" the helix (in the direction of the positive $z$-axis). If the third component were $-t$ instead, the orientation would be downward, and the arrows on the helix would be reversed.

This gives us a beautiful 3D spiral!

---

#### **Example 2: Finding the Limit of a Vector Function**

Given $\mathbf{r}(t) = \left\langle 2 - \frac{\sin t}{t}, -3 + 3t^2, \sqrt{4-t} \right\rangle$, find $\lim_{t \to 0} \mathbf{r}(t)$.

**Solution:**
Good news! We can find the limit of each component function separately.

1.  **First Component:** $\lim_{t \to 0} \left( 2 - \frac{\sin t}{t} \right)$
    We know the special trigonometric limit $\lim_{t \to 0} \frac{\sin t}{t} = 1$.
    So, $\lim_{t \to 0} \left( 2 - \frac{\sin t}{t} \right) = 2 - 1 = 1$.

2.  **Second Component:** $\lim_{t \to 0} (-3 + 3t^2)$
    This is a polynomial, so we can substitute $t = 0$.
    $\lim_{t \to 0} (-3 + 3t^2) = -3 + 3(0)^2 = -3$.

3.  **Third Component:** $\lim_{t \to 0} \sqrt{4-t}$
    This is a continuous function where $t=0$ is in the domain.
    $\lim_{t \to 0} \sqrt{4-t} = \sqrt{4-0} = \sqrt{4} = 2$.

Therefore, combining these results:

$$
\lim_{t \to 0} \mathbf{r}(t) = \langle 1, -3, 2 \rangle
$$

Precisely what we'd expect!

---

#### **Example 3: Describing a Space Curve (Intersection of Surfaces)**

**Task:** Describe the intersection of the cylinder $x^2 + y^2 = 4$ and the plane $x + z = 2$ in terms of a vector function $\mathbf{r}(t)$.

**Solution:**
We need to find parametric equations $x=f(t)$, $y=g(t)$, $z=h(t)$ that satisfy both equations.

1.  **From the Cylinder:** The equation $x^2 + y^2 = 4$ describes a cylinder of radius 2 centered along the $z$-axis. We can easily parameterize the $x$ and $y$ coordinates using trigonometric functions:
    Let $x = 2 \cos t$
    Let $y = 2 \sin t$
    (Here, $t$ can be any real number, often $0 \le t \le 2\pi$ for one revolution.)

2.  **From the Plane:** Now, substitute our expressions for $x$ into the plane equation $x + z = 2$:
    $2 \cos t + z = 2$
    Solving for $z$, we get:
    $z = 2 - 2 \cos t$

So, we have found all three component functions!

Therefore, the vector function $\mathbf{r}(t)$ that describes the curve of intersection is:

$$
\mathbf{r}(t) = \langle 2 \cos t, 2 \sin t, 2 - 2 \cos t \rangle
$$

This curve is an ellipse, the shape formed when a cylinder is sliced by a plane that is not parallel to its axis. Splendid!

---

#### **Example 4: Finding the Derivative of a Vector Function**

Given $\mathbf{r}(t) = \langle t^3 - t, e^{-t}, \ln t \rangle$, for $1 \le t \le 3$, find $\mathbf{r}'(t)$.

**Solution:**
To find the derivative of $\mathbf{r}(t)$, we simply differentiate each component function with respect to $t$.

1.  **First Component:** $\frac{d}{dt}(t^3 - t) = 3t^2 - 1$

2.  **Second Component:** $\frac{d}{dt}(e^{-t}) = -e^{-t}$

3.  **Third Component:** $\frac{d}{dt}(\ln t) = \frac{1}{t}$

Combining these, we get the derivative vector function:

$$
\mathbf{r}'(t) = \left\langle 3t^2 - 1, -e^{-t}, \frac{1}{t} \right\rangle
$$

This derivative is valid over the same interval, $1 \le t \le 3$. Note that $\ln t$ is only defined for $t > 0$, and its derivative $\frac{1}{t}$ is also defined for $t > 0$. Our interval respects this!

---

#### **Example 5: Finding the Vector Form of an Equation for a Tangent Line**

**Task:** Find the vector form of an equation for the line tangent to the helix traced out by $\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$ at the point $\left( \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, \frac{\pi}{4} \right)$.

**Solution:**
Recall that the equation of a line passing through a point $\mathbf{P}_0$ and parallel to a direction vector $\mathbf{v}$ is given by $\mathbf{L}(s) = \mathbf{P}_0 + s\mathbf{v}$. For a tangent line to a curve $\mathbf{r}(t)$ at a specific point, $\mathbf{P}_0 = \mathbf{r}(t_0)$ (the position vector of the point) and $\mathbf{v} = \mathbf{r}'(t_0)$ (the tangent vector at that point).

1.  **Find $t_0$ corresponding to the given point:**
    We are given the point $\left( \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, \frac{\pi}{4} \right)$.
    From $\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$, we can equate the components:
    $t_0 = \frac{\pi}{4}$
    Let's check if this $t_0$ gives the correct $x$ and $y$ components:
    $\cos(\frac{\pi}{4}) = \frac{\sqrt{2}}{2} = \frac{1}{\sqrt{2}}$
    $\sin(\frac{\pi}{4}) = \frac{\sqrt{2}}{2} = \frac{1}{\sqrt{2}}$
    Aha! It matches perfectly. So, the parameter value at the given point is $t_0 = \frac{\pi}{4}$.

2.  **Find the position vector $\mathbf{r}(t_0)$:**
    This is simply the given point itself, expressed as a vector:
    $\mathbf{r}\left(\frac{\pi}{4}\right) = \left\langle \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, \frac{\pi}{4} \right\rangle$

3.  **Find the derivative $\mathbf{r}'(t)$:**
    $\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$
    $\mathbf{r}'(t) = \langle -\sin t, \cos t, 1 \rangle$

4.  **Evaluate $\mathbf{r}'(t_0)$:**
    Substitute $t_0 = \frac{\pi}{4}$ into $\mathbf{r}'(t)$:
    $\mathbf{r}'\left(\frac{\pi}{4}\right) = \left\langle -\sin\left(\frac{\pi}{4}\right), \cos\left(\frac{\pi}{4}\right), 1 \right\rangle = \left\langle -\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 1 \right\rangle$

5.  **Write the equation of the tangent line:**
    Using $\mathbf{L}(s) = \mathbf{r}(t_0) + s\mathbf{r}'(t_0)$:

$$
\mathbf{L}(s) = \left\langle \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, \frac{\pi}{4} \right\rangle + s \left\langle -\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 1 \right\rangle
$$

or

$$
\mathbf{L}(s) = \left\langle \frac{1}{\sqrt{2}} - \frac{s}{\sqrt{2}}, \frac{1}{\sqrt{2}} + \frac{s}{\sqrt{2}}, \frac{\pi}{4} + s \right\rangle
$$

And there you have it, the equation of the tangent line!

---

#### **Proof: Cross Product Rule for Vector Functions**

Let's prove one of those marvelous differentiation rules: the Cross Product Rule. We need to show that $\frac{d}{dt} [\mathbf{u}(t) \times \mathbf{v}(t)] = \mathbf{u}'(t) \times \mathbf{v}(t) + \mathbf{u}(t) \times \mathbf{v}'(t)$.
**Proof:**
We will use the limit definition of the derivative:
$$ \frac{d}{dt} [\mathbf{u}(t) \times \mathbf{v}(t)] = \lim_{h \to 0} \frac{\mathbf{u}(t+h) \times \mathbf{v}(t+h) - \mathbf{u}(t) \times \mathbf{v}(t)}{h} $$
This looks like a mouthful, but observe this clever trick: we can add and subtract a term in the numerator to rearrange it into forms that resemble the derivative definitions. Let's insert $-\mathbf{u}(t)\times\mathbf{v}(t+h) + \mathbf{u}(t)\times\mathbf{v}(t+h)$ (which is just $\mathbf{0}$):

$$
= \lim_{h \to 0} \frac{\mathbf{u}(t+h) \times \mathbf{v}(t+h) - \mathbf{u}(t) \times \mathbf{v}(t+h) + \mathbf{u}(t) \times \mathbf{v}(t+h) - \mathbf{u}(t) \times \mathbf{v}(t)}{h}
$$

Now, we can split this into two fractions and factor out common terms, remembering the distributive property of the cross product:

$$
= \lim_{h \to 0} \left[ \frac{(\mathbf{u}(t+h) - \mathbf{u}(t)) \times \mathbf{v}(t+h)}{h} + \frac{\mathbf{u}(t) \times (\mathbf{v}(t+h) - \mathbf{v}(t))}{h} \right]
$$

Using the limit properties for vector sums and scalar products:

$$
= \lim_{h \to 0} \left( \frac{\mathbf{u}(t+h) - \mathbf{u}(t)}{h} \right) \times \lim_{h \to 0} \mathbf{v}(t+h) + \lim_{h \to 0} \mathbf{u}(t) \times \lim_{h \to 0} \left( \frac{\mathbf{v}(t+h) - \mathbf{v}(t)}{h} \right)
$$

Provided $\mathbf{u}$ and $\mathbf{v}$ are differentiable, then $\lim_{h \to 0} \frac{\mathbf{u}(t+h) - \mathbf{u}(t)}{h} = \mathbf{u}'(t)$ and $\lim_{h \to 0} \frac{\mathbf{v}(t+h) - \mathbf{v}(t)}{h} = \mathbf{v}'(t)$.
Also, since $\mathbf{v}(t)$ is differentiable, it must be continuous, so $\lim_{h \to 0} \mathbf{v}(t+h) = \mathbf{v}(t)$.
And $\lim_{h \to 0} \mathbf{u}(t) = \mathbf{u}(t)$ since $\mathbf{u}(t)$ does not depend on $h$.

Substituting these into our expression:

$$
= \mathbf{u}'(t) \times \mathbf{v}(t) + \mathbf{u}(t) \times \mathbf{v}'(t)
$$
Q.E.D.! An elegant proof, indeed.

---

#### **Example 6: Proving a Constant-Magnitude Vector Function and Its Tangent Are Orthogonal**

Assume $\mathbf{r}(t)$ is a differentiable vector function of constant magnitude. Geometrically, this means $\mathbf{r}(t)$ traces out a curve on a sphere centered at the origin. Show that $\mathbf{r}'(t) \cdot \mathbf{r}(t) = 0$ for all $t$. In words, this means $\mathbf{r}(t)$ and its tangent vector $\mathbf{r}'(t)$ are always orthogonal if $\left|\left|\mathbf{r}(t)\right|\right|$ is constant.

**Solution:**
If $\left|\left|\mathbf{r}(t)\right|\right|$ is constant, let this constant be $c$.
Then, $\left|\left|\mathbf{r}(t)\right|\right|^2 = c^2$.

Recall that $\left|\left|\mathbf{r}(t)\right|\right|^2 = \mathbf{r}(t) \cdot \mathbf{r}(t)$.
So, $\mathbf{r}(t) \cdot \mathbf{r}(t) = c^2$.

Now, let's differentiate both sides of this equation with respect to $t$:
$$ \frac{d}{dt} [\mathbf{r}(t) \cdot \mathbf{r}(t)] = \frac{d}{dt} [c^2] $$

The right side is the derivative of a constant, which is $0$:
$$ \frac{d}{dt} [c^2] = 0 $$

For the left side, we apply the Dot Product Rule for vector functions:
$$ \frac{d}{dt} [\mathbf{r}(t) \cdot \mathbf{r}(t)] = \mathbf{r}'(t) \cdot \mathbf{r}(t) + \mathbf{r}(t) \cdot \mathbf{r}'(t) $$
Since the dot product is commutative ($\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}$), we can write this as:
$$ \mathbf{r}'(t) \cdot \mathbf{r}(t) + \mathbf{r}'(t) \cdot \mathbf{r}(t) = 2[\mathbf{r}'(t) \cdot \mathbf{r}(t)] $$

Equating the differentiated sides:
$$ 2[\mathbf{r}'(t) \cdot \mathbf{r}(t)] = 0 $$
Dividing by 2 (assuming it's not a zero vector, which would make the statement trivial):
$$ \mathbf{r}'(t) \cdot \mathbf{r}(t) = 0 $$

This is a profoundly important result! It means that if a particle moves along a path such that its distance from the origin remains constant, its velocity vector (the tangent vector) is always perpendicular (orthogonal) to its position vector. Think of uniform circular motion, where the velocity vector is always tangent to the circle and thus perpendicular to the radius vector. This generalizes that idea to 3D!

---

#### **Example 7: Using Integration to Find Velocity and Position Vector Functions**

A particle is moving in $\mathbb{R}^3$ so that its acceleration function is $\mathbf{a}(t) = \langle 2t, 1, 0 \rangle$. The particle starts at the point $\mathbf{r}(0) = \langle -5, 0, 2 \rangle$ with initial velocity $\mathbf{v}(0) = \langle 3, 1, -1 \rangle$.

**Task:** Find the velocity $\mathbf{v}(t)$ and position $\mathbf{r}(t)$ functions of the particle. Then, find the position of the ball at 2 seconds and 4 seconds.

**Solution:**
Good news! We know that $\mathbf{v}'(t) = \mathbf{a}(t)$ and $\mathbf{r}'(t) = \mathbf{v}(t)$. We can find $\mathbf{v}(t)$ by integrating $\mathbf{a}(t)$, and then find $\mathbf{r}(t)$ by integrating $\mathbf{v}(t)$. We'll use the initial conditions to determine the constant vectors of integration.

1.  **Find $\mathbf{v}(t)$:**
    Integrate $\mathbf{a}(t)$ component-wise:
    $$ \mathbf{v}(t) = \int \mathbf{a}(t) dt = \int \langle 2t, 1, 0 \rangle dt = \left\langle \int 2t dt, \int 1 dt, \int 0 dt \right\rangle $$
    $$ \mathbf{v}(t) = \langle t^2 + C_1, t + C_2, 0 + C_3 \rangle = \langle t^2, t, 0 \rangle + \mathbf{C} $$
    Now, use the initial velocity condition $\mathbf{v}(0) = \langle 3, 1, -1 \rangle$:
    $$ \mathbf{v}(0) = \langle (0)^2 + C_1, (0) + C_2, 0 + C_3 \rangle = \langle C_1, C_2, C_3 \rangle $$
    So, $\langle C_1, C_2, C_3 \rangle = \langle 3, 1, -1 \rangle$.
    Thus, $\mathbf{C} = \langle 3, 1, -1 \rangle$.

    Our velocity function is:
    $$ \mathbf{v}(t) = \langle t^2 + 3, t + 1, -1 \rangle $$

2.  **Find $\mathbf{r}(t)$:**
    Now, integrate $\mathbf{v}(t)$ component-wise:
    $$ \mathbf{r}(t) = \int \mathbf{v}(t) dt = \int \langle t^2 + 3, t + 1, -1 \rangle dt $$
    $$ \mathbf{r}(t) = \left\langle \int (t^2+3) dt, \int (t+1) dt, \int (-1) dt \right\rangle $$
    $$ \mathbf{r}(t) = \left\langle \frac{t^3}{3} + 3t + D_1, \frac{t^2}{2} + t + D_2, -t + D_3 \right\rangle = \left\langle \frac{t^3}{3} + 3t, \frac{t^2}{2} + t, -t \right\rangle + \mathbf{D} $$
    Use the initial position condition $\mathbf{r}(0) = \langle -5, 0, 2 \rangle$:
    $$ \mathbf{r}(0) = \left\langle \frac{(0)^3}{3} + 3(0) + D_1, \frac{(0)^2}{2} + (0) + D_2, -(0) + D_3 \right\rangle = \langle D_1, D_2, D_3 \rangle $$
    So, $\langle D_1, D_2, D_3 \rangle = \langle -5, 0, 2 \rangle$.
    Thus, $\mathbf{D} = \langle -5, 0, 2 \rangle$.

    Our position function is:
    $$ \mathbf{r}(t) = \left\langle \frac{t^3}{3} + 3t - 5, \frac{t^2}{2} + t, -t + 2 \right\rangle $$

3.  **Find the position at t = 2 seconds:**
    Substitute $t = 2$ into $\mathbf{r}(t)$:
    $$ \mathbf{r}(2) = \left\langle \frac{(2)^3}{3} + 3(2) - 5, \frac{(2)^2}{2} + 2, -(2) + 2 \right\rangle $$
    $$ \mathbf{r}(2) = \left\langle \frac{8}{3} + 6 - 5, \frac{4}{2} + 2, 0 \right\rangle $$
    $$ \mathbf{r}(2) = \left\langle \frac{8}{3} + 1, 2 + 2, 0 \right\rangle $$
    $$ \mathbf{r}(2) = \left\langle \frac{8}{3} + \frac{3}{3}, 4, 0 \right\rangle $$
    $$ \mathbf{r}(2) = \left\langle \frac{11}{3}, 4, 0 \right\rangle $$

4.  **Find the position at t = 4 seconds:**
    Substitute $t = 4$ into $\mathbf{r}(t)$:
    $$ \mathbf{r}(4) = \left\langle \frac{(4)^3}{3} + 3(4) - 5, \frac{(4)^2}{2} + 4, -(4) + 2 \right\rangle $$
    $$ \mathbf{r}(4) = \left\langle \frac{64}{3} + 12 - 5, \frac{16}{2} + 4, -2 \right\rangle $$
    $$ \mathbf{r}(4) = \left\langle \frac{64}{3} + 7, 8 + 4, -2 \right\rangle $$
    $$ \mathbf{r}(4) = \left\langle \frac{64}{3} + \frac{21}{3}, 12, -2 \right\rangle $$
    $$ \mathbf{r}(4) = \left\langle \frac{85}{3}, 12, -2 \right\rangle $$

And there we have the complete kinematic picture of our particle! Truly a marvelous application of vector calculus!

---

### **Practice & Reflection: Solidifying Your Understanding**

Before we conclude our transmission, let's ensure these concepts have firmly taken root in your brilliant minds.

1.  **Conceptual Check:**
    *   What is the fundamental difference between a scalar function and a vector-valued function? Why is this distinction crucial for describing motion in space?
    *   If you're given a space curve defined by $\mathbf{r}(t)$, what does the vector $\mathbf{r}'(t)$ represent both mathematically and geometrically? What about its magnitude, $||\mathbf{r}'(t)||$?
    *   Under what conditions is a vector function continuous? And what does it mean for a curve to be "smooth"?
    *   Can the Dot Product Rule and Cross Product Rule be used interchangeably? What's the key difference in their outputs?

2.  **Challenge Problems (from Professor Lundholm's Notes!):**
    *   **Problem 25 (similar to Example 3):** Describe the intersection of the cylinder $x^2 + y^2 = 1$ and the hyperbolic paraboloid $2x^2 - y^2 = z$ as a vector function. (Hint: Use $x = \cos t$).
    *   **Problem 58 (similar to Example 5):** Find the vector form of an equation for the line tangent to the curve $\mathbf{s}(t) = \langle t, \sin 2t, \cos 2t \rangle$ at $t = 0$.
    *   **Problem 83 (precisely Example 7):** Re-work this problem from scratch, ensuring you understand each step. Pay close attention to the constants of integration!

Remember, the true power of mathematics comes from applying these concepts to solve problems. Don't hesitate to experiment, explore, and ask questions!

That's all for today's lecture on Vector-Valued Functions. Until next time, keep those brain-slugs churning!

---