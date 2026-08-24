Greetings, everyone! Professor Hubert J. Farnsworth here, your esteemed Math 303 pedagogical assistant, ready to plunge into the glorious intellectual maelstrom of Multivariable Calculus. Good news, everyone! Today, we're tackling Section 15.3: **The Fundamental Theorem for Line Integrals!**

Prepare for a paradigm shift! This section is a true marvel, connecting line integrals to the elegant simplicity of potential functions, much like how the Fundamental Theorem of Calculus linked differentiation and integration. We'll explore the conditions under which a line integral becomes blissfully simple to evaluate, delve into the profound concept of "path independence," uncover the secrets of "conservative vector fields," and learn how to identify them and even find their mysterious "potential functions." This knowledge is not just academic; it's vital for understanding physics, engineering, and the very fabric of the universe itself!

***

## Math 303: Multivariable Calculus – Section 15.3 Lecture Notes

### **The Fundamental Theorem for Line Integrals**

We've been laboriously calculating line integrals by parameterizing curves and evaluating definite integrals. While a noble pursuit, what if there were a shortcut? What if we could simply evaluate a function at the endpoints of the curve, much like the good old Fundamental Theorem of Calculus? Behold, such a miracle exists!

#### **Core Concept: Gradient Fields and Potential Functions**

Recall that if we have a scalar function $f(x, y, z)$, its gradient is a vector field:
$$ \nabla f = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right\rangle $$
If a vector field $\mathbf{F}$ can be expressed as the gradient of some scalar function $f$, i.e., $\mathbf{F} = \nabla f$, then $\mathbf{F}$ is called a **conservative vector field**, and $f$ is called a **potential function** for $\mathbf{F}$. This is the key!

#### **Theorem: The Fundamental Theorem for Line Integrals (Gradient Theorem)**

Let $C$ be a smooth curve parameterized by $\mathbf{r}(t)$ for $a \le t \le b$. If $f$ is a differentiable scalar function of two or three variables whose gradient vector field $\mathbf{F} = \nabla f$ is continuous on an open region containing $C$, then the line integral of $\mathbf{F}$ along $C$ is given by:

$$ \int_C \nabla f \cdot d\mathbf{r} = f(\mathbf{r}(b)) - f(\mathbf{r}(a)) $$

Where $\mathbf{r}(a)$ is the initial point of $C$ and $\mathbf{r}(b)$ is the terminal point of $C$.

**Meaning:** This theorem is extraordinarily powerful! It tells us that if a vector field is conservative (i.e., it's a gradient field), then its line integral depends only on the endpoints of the curve, not on the path taken between them. This is a HUGE simplification!

#### **Proof of the Gradient Theorem**

*(This is where the magic happens! Let's follow the logical flow, step by step, precisely as indicated by our slides.)*

Let $C$ be a smooth curve parameterized by $\mathbf{r}(t) = \langle x(t), y(t), z(t) \rangle$ for $a \le t \le b$.
Let $f(x, y, z)$ be a differentiable scalar function such that $\nabla f = \mathbf{F}$.
We want to evaluate $\int_C \mathbf{F} \cdot d\mathbf{r}$.

By definition of a line integral, we have:
$$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) dt $$
Since $\mathbf{F} = \nabla f$, we can substitute this into the integral:
$$ \int_C \nabla f \cdot d\mathbf{r} = \int_a^b \nabla f(\mathbf{r}(t)) \cdot \mathbf{r}'(t) dt $$
Now, let's expand the dot product. Recall $\nabla f = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right\rangle$ and $\mathbf{r}'(t) = \left\langle \frac{dx}{dt}, \frac{dy}{dt}, \frac{dz}{dt} \right\rangle$.
So, $\nabla f(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$ becomes:
$$ \frac{\partial f}{\partial x}(x(t), y(t), z(t)) \frac{dx}{dt} + \frac{\partial f}{\partial y}(x(t), y(t), z(t)) \frac{dy}{dt} + \frac{\partial f}{\partial z}(x(t), y(t), z(t)) \frac{dz}{dt} $$
Aha! This entire expression is precisely the result of applying the **Chain Rule for functions of several variables** to $f(\mathbf{r}(t)) = f(x(t), y(t), z(t))$.
Specifically, the Chain Rule states:
$$ \frac{d}{dt} f(\mathbf{r}(t)) = \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt} + \frac{\partial f}{\partial z} \frac{dz}{dt} $$
Therefore, we can simplify our integral:
$$ \int_a^b \left( \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt} + \frac{\partial f}{\partial z} \frac{dz}{dt} \right) dt = \int_a^b \frac{d}{dt} f(\mathbf{r}(t)) dt $$
And now, by the fundamental brilliance of the **Fundamental Theorem of Calculus (Part 2)**, we can evaluate this definite integral:
$$ \int_a^b \frac{d}{dt} f(\mathbf{r}(t)) dt = f(\mathbf{r}(t)) \Big|_a^b = f(\mathbf{r}(b)) - f(\mathbf{r}(a)) $$
Thus, we have proven:
$$ \int_C \nabla f \cdot d\mathbf{r} = f(\mathbf{r}(b)) - f(\mathbf{r}(a)) $$
Q.E.D.! It's a magnificent result, allowing us to evaluate complex line integrals with a simple subtraction!

---

#### **Example 1: Using the Fundamental Theorem for Line Integrals**

**Problem:** Evaluate $\int_C \mathbf{F} \cdot d\mathbf{r}$ where $\mathbf{F}(x, y) = \langle y e^{xy}, x e^{xy} \rangle$ and $C$ is any smooth curve from $(0, 1)$ to $(2, 0)$.

**Solution:**

1.  **Check if $\mathbf{F}$ is conservative:** We need to see if $\mathbf{F}$ is a gradient field, i.e., if there exists a potential function $f$ such that $\nabla f = \mathbf{F}$.
    Let $P(x, y) = y e^{xy}$ and $Q(x, y) = x e^{xy}$.
    We check the condition for conservative fields in $R^2$: $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$.
    $$ \frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(y e^{xy}) = 1 \cdot e^{xy} + y \cdot (x e^{xy}) = e^{xy} + xy e^{xy} $$
    $$ \frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x e^{xy}) = 1 \cdot e^{xy} + x \cdot (y e^{xy}) = e^{xy} + xy e^{xy} $$
    Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$, the vector field $\mathbf{F}$ is conservative.

2.  **Find the potential function $f(x, y)$:**
    We know that $\frac{\partial f}{\partial x} = P(x, y) = y e^{xy}$ and $\frac{\partial f}{\partial y} = Q(x, y) = x e^{xy}$.
    Integrate $P$ with respect to $x$:
    $$ f(x, y) = \int y e^{xy} dx = e^{xy} + g(y) $$
    where $g(y)$ is an arbitrary function of $y$ (acting as the "constant of integration" with respect to $x$).

    Now, differentiate $f(x, y)$ with respect to $y$ and set it equal to $Q(x, y)$:
    $$ \frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(e^{xy} + g(y)) = x e^{xy} + g'(y) $$
    We must have $x e^{xy} + g'(y) = x e^{xy}$.
    This implies $g'(y) = 0$.
    Integrating $g'(y)$ with respect to $y$, we get $g(y) = C$ (a constant).
    So, a potential function is $f(x, y) = e^{xy} + C$. We can choose $C=0$ for simplicity, so $f(x, y) = e^{xy}$.

3.  **Apply the Fundamental Theorem for Line Integrals:**
    The initial point is $\mathbf{r}(a) = (0, 1)$ and the terminal point is $\mathbf{r}(b) = (2, 0)$.
    $$ \int_C \mathbf{F} \cdot d\mathbf{r} = f(\mathbf{r}(b)) - f(\mathbf{r}(a)) $$
    $$ = f(2, 0) - f(0, 1) $$
    $$ = e^{(2)(0)} - e^{(0)(1)} $$
    $$ = e^0 - e^0 $$
    $$ = 1 - 1 = 0 $$

    Therefore, $\int_C \mathbf{F} \cdot d\mathbf{r} = 0$.

---

#### **Example 2: Determining a Fluid's Flow along a Curve**

**Problem:** A fluid's velocity field is given by $\mathbf{F}(x, y, z) = \langle yz, xz, xy \rangle$. Find the work done by this fluid field in moving a particle along a straight line segment from $A=(1, 0, 0)$ to $B=(0, 2, 0)$.

**Solution:**

1.  **Check if $\mathbf{F}$ is conservative:** Let $P=yz$, $Q=xz$, $R=xy$.
    We check the conditions for conservative fields in $R^3$:
    *   $\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(yz) = z$
    *   $\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(xz) = z$
    *   **Conclusion:** $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ (good!)

    *   $\frac{\partial P}{\partial z} = \frac{\partial}{\partial z}(yz) = y$
    *   $\frac{\partial R}{\partial x} = \frac{\partial}{\partial x}(xy) = y$
    *   **Conclusion:** $\frac{\partial P}{\partial z} = \frac{\partial R}{\partial x}$ (good!)

    *   $\frac{\partial Q}{\partial z} = \frac{\partial}{\partial z}(xz) = x$
    *   $\frac{\partial R}{\partial y} = \frac{\partial}{\partial y}(xy) = x$
    *   **Conclusion:** $\frac{\partial Q}{\partial z} = \frac{\partial R}{\partial y}$ (good!)

    Since all conditions are met, $\mathbf{F}$ is a conservative vector field.

2.  **Find the potential function $f(x, y, z)$:**
    We need $\frac{\partial f}{\partial x} = yz$, $\frac{\partial f}{\partial y} = xz$, $\frac{\partial f}{\partial z} = xy$.
    Integrate $\frac{\partial f}{\partial x}$ with respect to $x$:
    $$ f(x, y, z) = \int yz \, dx = xyz + g(y, z) $$
    Now differentiate this $f$ with respect to $y$ and equate it to $Q$:
    $$ \frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(xyz + g(y, z)) = xz + \frac{\partial g}{\partial y}(y, z) $$
    We require $xz + \frac{\partial g}{\partial y}(y, z) = xz$, so $\frac{\partial g}{\partial y}(y, z) = 0$.
    This means $g(y, z)$ is a function of $z$ only, let's call it $h(z)$.
    So, $f(x, y, z) = xyz + h(z)$.

    Finally, differentiate this new $f$ with respect to $z$ and equate it to $R$:
    $$ \frac{\partial f}{\partial z} = \frac{\partial}{\partial z}(xyz + h(z)) = xy + h'(z) $$
    We require $xy + h'(z) = xy$, so $h'(z) = 0$.
    This means $h(z) = C$ (a constant).
    We can choose $C=0$, so a potential function is $f(x, y, z) = xyz$.

3.  **Apply the Fundamental Theorem for Line Integrals:**
    The starting point is $A=(1, 0, 0)$ and the ending point is $B=(0, 2, 0)$.
    The work done is $\int_C \mathbf{F} \cdot d\mathbf{r} = f(B) - f(A)$.
    $$ \int_C \mathbf{F} \cdot d\mathbf{r} = f(0, 2, 0) - f(1, 0, 0) $$
    $$ = (0)(2)(0) - (1)(0)(0) $$
    $$ = 0 - 0 = 0 $$

    The work done by this fluid field in moving the particle along the specified curve is $0$. How convenient!

---

### **Path Independence and Conservative Fields**

The Fundamental Theorem for Line Integrals revealed a profound property: for conservative fields, the integral depends only on the endpoints, not the specific path. This concept has its own name!

#### **Definition: Path Independence of Line Integrals**

Let $\mathbf{F}$ be a continuous vector field with domain $D$. A line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ is said to be **path independent** if for any two points $A$ and $B$ in $D$, the value of $\int_C \mathbf{F} \cdot d\mathbf{r}$ is the same for all paths $C$ in $D$ that start at $A$ and end at $B$.

*(Imagine a mountain climber. If the "work" done to get from one altitude to another only depends on the initial and final altitudes, not the winding path taken, then the "force field" of gravity is path independent!)*

#### **Path Independence and Conservative Fields: The Grand Unification!**

The concepts of a conservative field and a path-independent integral are not merely related; they are two sides of the same coin!

**Theorem: Conservation Implies Path Independence**

If $\mathbf{F}$ is a conservative vector field, meaning $\mathbf{F} = \nabla f$ for some scalar function $f$, then the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ is path independent.

*(This is precisely what the Fundamental Theorem for Line Integrals states: $\int_C \nabla f \cdot d\mathbf{r} = f(\mathbf{r}(b)) - f(\mathbf{r}(a))$, which only depends on the endpoints.)*

#### **Path Independence and Closed Path Integrals**

Another crucial characterization of path independence involves closed paths. A **closed path** is a curve where the starting point and ending point are the same (e.g., a circle, an ellipse, or any loop).

**Theorem: Path Independence and Closed Path Integrals**

A line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ is path independent if and only if for every closed path $C$ in the domain of $\mathbf{F}$, the line integral is zero:
$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = 0 $$
*(The circle on the integral sign $\oint$ explicitly denotes an integral over a closed path.)*

#### **Proof of Path Independence and Closed Path Integrals**

*(Let's prove this fundamental equivalence!)*

**Part 1: Path Independence $\implies$ Integral over Closed Path is Zero**

Assume $\int_C \mathbf{F} \cdot d\mathbf{r}$ is path independent.
Let $C$ be any closed path. Pick an arbitrary point $A$ on $C$. Since $C$ is closed, it starts and ends at $A$.
We can split $C$ into two paths, $C_1$ and $C_2$, both starting at $A$ and ending at some other point $B$ on $C$. (See diagram below).
However, a more direct approach is this: Since $C$ is a closed path, its initial point $\mathbf{r}(a)$ and terminal point $\mathbf{r}(b)$ are the same.
Let's denote $\mathbf{r}(a) = P_0$ and $\mathbf{r}(b) = P_0$.
If $\mathbf{F}$ is path independent, it must be conservative (we'll prove this next!).
Then $\int_C \mathbf{F} \cdot d\mathbf{r} = f(P_0) - f(P_0) = 0$.
Alternatively, if path independent, consider any point $A$ on the closed curve $C$. Divide $C$ into two distinct paths, $C_1$ from $A$ to $A$ (which is $C$ itself).
Let's consider a closed path $C$. We can represent $C$ as $C_1 \cup C_2^{-1}$ where $C_1$ goes from point $P$ to point $Q$, and $C_2$ goes from $P$ to $Q$. $C_2^{-1}$ is the path from $Q$ to $P$ along $C_2$ but in the reverse direction.
Since the line integral is path independent, $\int_{C_1} \mathbf{F} \cdot d\mathbf{r} = \int_{C_2} \mathbf{F} \cdot d\mathbf{r}$ for any two paths $C_1, C_2$ from $P$ to $Q$.
Consider a closed path $C$. Pick two distinct points $P$ and $Q$ on $C$. $C$ can be viewed as $C_1$ from $P$ to $Q$ followed by $C_2$ from $Q$ to $P$.
So $C = C_1 \cup C_2$.
Then $\oint_C \mathbf{F} \cdot d\mathbf{r} = \int_{C_1} \mathbf{F} \cdot d\mathbf{r} + \int_{C_2} \mathbf{F} \cdot d\mathbf{r}$.
Since $C_2$ goes from $Q$ to $P$, its reverse path $C_2^{-1}$ goes from $P$ to $Q$. We know $\int_{C_2} \mathbf{F} \cdot d\mathbf{r} = - \int_{C_2^{-1}} \mathbf{F} \cdot d\mathbf{r}$.
So $\oint_C \mathbf{F} \cdot d\mathbf{r} = \int_{C_1} \mathbf{F} \cdot d\mathbf{r} - \int_{C_2^{-1}} \mathbf{F} \cdot d\mathbf{r}$.
Because the integral is path independent, $\int_{C_1} \mathbf{F} \cdot d\mathbf{r} = \int_{C_2^{-1}} \mathbf{F} \cdot d\mathbf{r}$ (since both go from $P$ to $Q$).
Therefore, $\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$.

**Part 2: Integral over Closed Path is Zero $\implies$ Path Independence**

Assume $\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$ for every closed path $C$.
Let $C_1$ and $C_2$ be any two paths from point $A$ to point $B$.
We want to show that $\int_{C_1} \mathbf{F} \cdot d\mathbf{r} = \int_{C_2} \mathbf{F} \cdot d\mathbf{r}$.
Consider the closed path formed by $C_1$ followed by the reverse of $C_2$, denoted $C_2^{-1}$. This closed path is $C = C_1 \cup C_2^{-1}$.
By our assumption, the integral over this closed path is zero:
$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \int_{C_1 \cup C_2^{-1}} \mathbf{F} \cdot d\mathbf{r} = 0 $$
Using the properties of line integrals:
$$ \int_{C_1} \mathbf{F} \cdot d\mathbf{r} + \int_{C_2^{-1}} \mathbf{F} \cdot d\mathbf{r} = 0 $$
We also know that integrating over a reversed path changes the sign: $\int_{C_2^{-1}} \mathbf{F} \cdot d\mathbf{r} = - \int_{C_2} \mathbf{F} \cdot d\mathbf{r}$.
Substituting this back:
$$ \int_{C_1} \mathbf{F} \cdot d\mathbf{r} - \int_{C_2} \mathbf{F} \cdot d\mathbf{r} = 0 $$
$$ \int_{C_1} \mathbf{F} \cdot d\mathbf{r} = \int_{C_2} \mathbf{F} \cdot d\mathbf{r} $$
Since this holds for any two paths $C_1$ and $C_2$ from $A$ to $B$, the line integral is path independent.

This theorem provides an incredibly useful test for path independence!

#### **Theorem: Path Independence Implies Conservation**

If $\int_C \mathbf{F} \cdot d\mathbf{r}$ is path independent in a simply connected domain $D$, then $\mathbf{F}$ is a conservative vector field, meaning there exists a scalar function $f$ such that $\mathbf{F} = \nabla f$.

*(This is the converse of the earlier theorem, completing the equivalence. The condition "simply connected domain" is crucial here. A simply connected domain is one where every closed loop can be shrunk to a point without leaving the domain. For example, $R^2$ is simply connected, but $R^2$ with the origin removed is not.)*

#### **Proof of Path Independence Implies Conservation**

*(This proof requires careful construction of the potential function. Hold onto your hats!)*

Let $\mathbf{F}(x, y, z) = \langle P(x, y, z), Q(x, y, z), R(x, y, z) \rangle$ be a vector field defined on a simply connected domain $D$. Assume $\int_C \mathbf{F} \cdot d\mathbf{r}$ is path independent.
Our goal is to construct a potential function $f(x, y, z)$ such that $\nabla f = \mathbf{F}$.

1.  **Define the potential function:**
    Choose an arbitrary fixed reference point $A = (x_0, y_0, z_0)$ in $D$.
    For any point $B = (x, y, z)$ in $D$, define $f(x, y, z)$ as the line integral of $\mathbf{F}$ from $A$ to $B$:
    $$ f(x, y, z) = \int_A^B \mathbf{F} \cdot d\mathbf{r} = \int_{(x_0, y_0, z_0)}^{(x, y, z)} P \, dx + Q \, dy + R \, dz $$
    Since the integral is path independent, this definition of $f$ is well-defined; its value only depends on the endpoints $(x_0, y_0, z_0)$ and $(x, y, z)$, not the specific path taken.

2.  **Show $\frac{\partial f}{\partial x} = P$:**
    To find $\frac{\partial f}{\partial x}$, we consider a path from $(x_0, y_0, z_0)$ to $(x+\Delta x, y, z)$ that consists of two parts:
    *   Path $C_1$ from $(x_0, y_0, z_0)$ to $(x, y, z)$
    *   Path $C_2$ from $(x, y, z)$ to $(x+\Delta x, y, z)$ (a straight line segment parallel to the x-axis).

    Then, by the additive property of line integrals:
    $$ f(x+\Delta x, y, z) = \int_{(x_0, y_0, z_0)}^{(x+\Delta x, y, z)} \mathbf{F} \cdot d\mathbf{r} = \int_{(x_0, y_0, z_0)}^{(x, y, z)} \mathbf{F} \cdot d\mathbf{r} + \int_{(x, y, z)}^{(x+\Delta x, y, z)} \mathbf{F} \cdot d\mathbf{r} $$
    $$ f(x+\Delta x, y, z) = f(x, y, z) + \int_{(x, y, z)}^{(x+\Delta x, y, z)} P \, dx + Q \, dy + R \, dz $$
    So, $f(x+\Delta x, y, z) - f(x, y, z) = \int_{(x, y, z)}^{(x+\Delta x, y, z)} P \, dx + Q \, dy + R \, dz$.

    Now, let's evaluate the line integral along the segment $C_2$ from $(x, y, z)$ to $(x+\Delta x, y, z)$.
    For this segment, $y$ and $z$ are constant, so $dy=0$ and $dz=0$.
    We can parameterize $C_2$ as $\mathbf{r}(t) = \langle t, y, z \rangle$ for $t \in [x, x+\Delta x]$.
    Then $d\mathbf{r} = \langle dt, 0, 0 \rangle$.
    The integral becomes:
    $$ \int_{(x, y, z)}^{(x+\Delta x, y, z)} P \, dx + Q \, dy + R \, dz = \int_x^{x+\Delta x} P(t, y, z) dt $$
    Therefore:
    $$ \frac{\partial f}{\partial x} = \lim_{\Delta x \to 0} \frac{f(x+\Delta x, y, z) - f(x, y, z)}{\Delta x} = \lim_{\Delta x \to 0} \frac{1}{\Delta x} \int_x^{x+\Delta x} P(t, y, z) dt $$
    By the **Fundamental Theorem of Calculus (Part 1)**, if $P$ is continuous, this limit is simply $P(x, y, z)$.
    Thus, $\frac{\partial f}{\partial x} = P(x, y, z)$.

3.  **Show $\frac{\partial f}{\partial y} = Q$ and $\frac{\partial f}{\partial z} = R$:**
    The proofs for $\frac{\partial f}{\partial y} = Q(x, y, z)$ and $\frac{\partial f}{\partial z} = R(x, y, z)$ follow an identical logic, choosing integration paths that include segments parallel to the y-axis and z-axis, respectively. (This is where the simply connected domain matters, ensuring we can always choose such paths without issues).

Since we have shown that $\frac{\partial f}{\partial x} = P$, $\frac{\partial f}{\partial y} = Q$, and $\frac{\partial f}{\partial z} = R$, it follows that $\nabla f = \langle P, Q, R \rangle = \mathbf{F}$.
Thus, $\mathbf{F}$ is a conservative vector field.

---

### **Component Test for Conservative Vector Fields**

The theorems above establish a beautiful equivalence:
**$\mathbf{F}$ is conservative $\iff$ $\int_C \mathbf{F} \cdot d\mathbf{r}$ is path independent $\iff$ $\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$ for all closed paths $C$.**

But how can we *easily* check if a given vector field $\mathbf{F}$ is conservative without having to find $f$ first, or test every possible path? Fortunately, there's a practical test involving partial derivatives of the components of $\mathbf{F}$.

#### **Theorem: Component Test for Conservative Vector Fields**

Let $\mathbf{F} = \langle P, Q, R \rangle$ be a vector field whose components have continuous first-order partial derivatives on a simply connected domain $D$.

1.  **In $R^2$**: If $\mathbf{F}(x, y) = \langle P(x, y), Q(x, y) \rangle$, then $\mathbf{F}$ is conservative if and only if
    $$ \frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} $$

2.  **In $R^3$**: If $\mathbf{F}(x, y, z) = \langle P(x, y, z), Q(x, y, z), R(x, y, z) \rangle$, then $\mathbf{F}$ is conservative if and only if
    $$ \frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} \quad \text{and} \quad \frac{\partial P}{\partial z} = \frac{\partial R}{\partial x} \quad \text{and} \quad \frac{\partial Q}{\partial z} = \frac{\partial R}{\partial y} $$
    *(This can be succinctly expressed using the curl operator: $\mathbf{F}$ is conservative if and only if $\text{curl } \mathbf{F} = \nabla \times \mathbf{F} = \mathbf{0}$. You'll learn more about the curl in a later section!)*

**Why this test works (briefly):** If $\mathbf{F} = \nabla f = \langle f_x, f_y, f_z \rangle$, then $P = f_x$, $Q = f_y$, $R = f_z$.
Then, assuming continuity of second partial derivatives, Clairaut's Theorem tells us that mixed partials are equal:
$P_y = (f_x)_y = f_{xy}$
$Q_x = (f_y)_x = f_{yx}$
Since $f_{xy} = f_{yx}$, we must have $P_y = Q_x$. Similar logic applies to the other pairs in $R^3$.
The "simply connected" condition ensures that these necessary conditions are also sufficient.

---

#### **Example 3: Showing That a Vector Field Is Not Conservative**

**Problem:** Determine if the vector field $\mathbf{F}(x, y) = \langle x^2 y, xy^2 \rangle$ is conservative.

**Solution:**

1.  **Identify $P$ and $Q$:**
    $P(x, y) = x^2 y$
    $Q(x, y) = xy^2$

2.  **Apply the Component Test for $R^2$:**
    Calculate the required partial derivatives:
    $$ \frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(x^2 y) = x^2 $$
    $$ \frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(xy^2) = y^2 $$

3.  **Compare the partial derivatives:**
    We see that $x^2 \ne y^2$ (in general).
    Since $\frac{\partial P}{\partial y} \ne \frac{\partial Q}{\partial x}$, the vector field $\mathbf{F}$ is **not conservative**.

---

#### **Example 4: Showing That a Vector Field Is Not Conservative (in $R^3$)**

**Problem:** Determine if the vector field $\mathbf{F}(x, y, z) = \langle yz, xz, x^2 y \rangle$ is conservative.

**Solution:**

1.  **Identify $P, Q, R$:**
    $P(x, y, z) = yz$
    $Q(x, y, z) = xz$
    $R(x, y, z) = x^2 y$

2.  **Apply the Component Test for $R^3$:**
    We need to check three conditions: $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$, $\frac{\partial P}{\partial z} = \frac{\partial R}{\partial x}$, and $\frac{\partial Q}{\partial z} = \frac{\partial R}{\partial y}$.

    *   **Condition 1:** $\frac{\partial P}{\partial y}$ vs. $\frac{\partial Q}{\partial x}$
        $$ \frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(yz) = z $$
        $$ \frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(xz) = z $$
        This condition holds: $z = z$. (So far, so good!)

    *   **Condition 2:** $\frac{\partial P}{\partial z}$ vs. $\frac{\partial R}{\partial x}$
        $$ \frac{\partial P}{\partial z} = \frac{\partial}{\partial z}(yz) = y $$
        $$ \frac{\partial R}{\partial x} = \frac{\partial}{\partial x}(x^2 y) = 2xy $$
        This condition fails: $y \ne 2xy$ (in general).

3.  **Conclusion:**
    Since one of the conditions ($\frac{\partial P}{\partial z} = \frac{\partial R}{\partial x}$) is not met, the vector field $\mathbf{F}$ is **not conservative**.
    *(You don't need to check the third condition once one fails, unless you're feeling particularly masochistic!)*

---

#### **Example 5: Finding a Potential Function for a Vector Field**

**Problem:** Show that the vector field $\mathbf{F}(x, y, z) = \langle y^2 z^3, 2xy z^3, 3xy^2 z^2 \rangle$ is conservative and find a potential function $f(x, y, z)$ for it.

**Solution:**

1.  **Check if $\mathbf{F}$ is conservative (using the Component Test):**
    $P = y^2 z^3$
    $Q = 2xy z^3$
    $R = 3xy^2 z^2$

    *   $\frac{\partial P}{\partial y} = 2y z^3$
    *   $\frac{\partial Q}{\partial x} = 2y z^3$
    *   **Match!** $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$

    *   $\frac{\partial P}{\partial z} = 3y^2 z^2$
    *   $\frac{\partial R}{\partial x} = 3y^2 z^2$
    *   **Match!** $\frac{\partial P}{\partial z} = \frac{\partial R}{\partial x}$

    *   $\frac{\partial Q}{\partial z} = 6xy z^2$
    *   $\frac{\partial R}{\partial y} = 6xy z^2$
    *   **Match!** $\frac{\partial Q}{\partial z} = \frac{\partial R}{\partial y}$

    Since all conditions are met, $\mathbf{F}$ is a conservative vector field.

2.  **Find the potential function $f(x, y, z)$:**
    We know that $f_x = P$, $f_y = Q$, and $f_z = R$.

    *   **Step 1: Integrate $P$ with respect to $x$.**
        $$ f(x, y, z) = \int P \, dx = \int y^2 z^3 \, dx = xy^2 z^3 + g(y, z) $$
        Here, $g(y, z)$ is an arbitrary function of $y$ and $z$ (our "constant" with respect to $x$).

    *   **Step 2: Differentiate $f$ with respect to $y$ and equate to $Q$.**
        $$ \frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(xy^2 z^3 + g(y, z)) = 2xy z^3 + \frac{\partial g}{\partial y}(y, z) $$
        We know this must equal $Q$: $2xy z^3 + \frac{\partial g}{\partial y}(y, z) = 2xy z^3$.
        This implies $\frac{\partial g}{\partial y}(y, z) = 0$.
        So, $g(y, z)$ must be a function of $z$ only. Let $g(y, z) = h(z)$.
        Thus, $f(x, y, z) = xy^2 z^3 + h(z)$.

    *   **Step 3: Differentiate this new $f$ with respect to $z$ and equate to $R$.**
        $$ \frac{\partial f}{\partial z} = \frac{\partial}{\partial z}(xy^2 z^3 + h(z)) = 3xy^2 z^2 + h'(z) $$
        We know this must equal $R$: $3xy^2 z^2 + h'(z) = 3xy^2 z^2$.
        This implies $h'(z) = 0$.
        So, $h(z)$ must be a constant. Let $h(z) = C$.

    *   **Step 4: Combine the results.**
        A potential function for $\mathbf{F}$ is $f(x, y, z) = xy^2 z^3 + C$.
        We usually choose $C=0$ for simplicity, so $f(x, y, z) = xy^2 z^3$.

---

#### **Example 6: Using a Potential Function to Evaluate a Line Integral**

**Problem:** Evaluate $\int_C \mathbf{F} \cdot d\mathbf{r}$ for the vector field $\mathbf{F}(x, y) = \langle 2x \cos y, -x^2 \sin y \rangle$ where $C$ is the curve parameterized by $\mathbf{r}(t) = \langle t^2, \pi t \rangle$ for $0 \le t \le 1$.

**Solution:**

1.  **Check if $\mathbf{F}$ is conservative:**
    $P(x, y) = 2x \cos y$
    $Q(x, y) = -x^2 \sin y$

    $$ \frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(2x \cos y) = -2x \sin y $$
    $$ \frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(-x^2 \sin y) = -2x \sin y $$
    Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$, $\mathbf{F}$ is conservative.

2.  **Find the potential function $f(x, y)$:**
    *   Integrate $P$ with respect to $x$:
        $$ f(x, y) = \int 2x \cos y \, dx = x^2 \cos y + g(y) $$
    *   Differentiate $f$ with respect to $y$ and equate to $Q$:
        $$ \frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(x^2 \cos y + g(y)) = -x^2 \sin y + g'(y) $$
        Since this must equal $Q = -x^2 \sin y$:
        $$ -x^2 \sin y + g'(y) = -x^2 \sin y $$
        So, $g'(y) = 0$, which means $g(y) = C$.
    *   A potential function is $f(x, y) = x^2 \cos y$. (Choosing $C=0$).

3.  **Apply the Fundamental Theorem for Line Integrals:**
    The curve $C$ is parameterized by $\mathbf{r}(t) = \langle t^2, \pi t \rangle$ for $0 \le t \le 1$.
    *   Initial point: $\mathbf{r}(0) = \langle 0^2, \pi \cdot 0 \rangle = (0, 0)$.
    *   Terminal point: $\mathbf{r}(1) = \langle 1^2, \pi \cdot 1 \rangle = (1, \pi)$.

    Using the theorem: $\int_C \mathbf{F} \cdot d\mathbf{r} = f(\mathbf{r}(1)) - f(\mathbf{r}(0))$
    $$ = f(1, \pi) - f(0, 0) $$
    $$ = (1)^2 \cos(\pi) - (0)^2 \cos(0) $$
    $$ = 1 \cdot (-1) - 0 \cdot 1 $$
    $$ = -1 - 0 = -1 $$

    The value of the line integral is $-1$. This was much easier than parameterizing and integrating directly!

---

#### **Example 7: Using a Potential Function to Evaluate a Line Integral (More complex path)**

**Problem:** Evaluate $\int_C \mathbf{F} \cdot d\mathbf{r}$ where $\mathbf{F}(x, y, z) = \langle e^z, 1, xe^z \rangle$ and $C$ is the curve from $(0, 1, 0)$ to $(1, 0, \ln 2)$ along a path consisting of three line segments:
1.  From $(0, 1, 0)$ to $(1, 1, 0)$
2.  From $(1, 1, 0)$ to $(1, 0, 0)$
3.  From $(1, 0, 0)$ to $(1, 0, \ln 2)$

**Solution:**

1.  **Check if $\mathbf{F}$ is conservative:**
    $P(x, y, z) = e^z$
    $Q(x, y, z) = 1$
    $R(x, y, z) = xe^z$

    *   $\frac{\partial P}{\partial y} = 0$
    *   $\frac{\partial Q}{\partial x} = 0$
    *   **Match!**

    *   $\frac{\partial P}{\partial z} = e^z$
    *   $\frac{\partial R}{\partial x} = e^z$
    *   **Match!**

    *   $\frac{\partial Q}{\partial z} = 0$
    *   $\frac{\partial R}{\partial y} = 0$
    *   **Match!**

    All conditions are met, so $\mathbf{F}$ is conservative.

2.  **Find the potential function $f(x, y, z)$:**
    *   Integrate $P$ with respect to $x$:
        $$ f(x, y, z) = \int e^z \, dx = xe^z + g(y, z) $$
    *   Differentiate $f$ with respect to $y$ and equate to $Q$:
        $$ \frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(xe^z + g(y, z)) = \frac{\partial g}{\partial y}(y, z) $$
        Since this must equal $Q=1$: $\frac{\partial g}{\partial y}(y, z) = 1$.
        Integrate $\frac{\partial g}{\partial y}$ with respect to $y$: $g(y, z) = \int 1 \, dy = y + h(z)$.
        So, $f(x, y, z) = xe^z + y + h(z)$.
    *   Differentiate this new $f$ with respect to $z$ and equate to $R$:
        $$ \frac{\partial f}{\partial z} = \frac{\partial}{\partial z}(xe^z + y + h(z)) = xe^z + h'(z) $$
        Since this must equal $R=xe^z$: $xe^z + h'(z) = xe^z$.
        So, $h'(z) = 0$, which means $h(z) = C$.
    *   A potential function is $f(x, y, z) = xe^z + y$. (Choosing $C=0$).

3.  **Apply the Fundamental Theorem for Line Integrals:**
    The starting point of the overall curve $C$ is $(0, 1, 0)$.
    The ending point of the overall curve $C$ is $(1, 0, \ln 2)$.
    *(Notice we don't need to parameterize or worry about the three segments at all! This is the power of the Fundamental Theorem!)*

    $$ \int_C \mathbf{F} \cdot d\mathbf{r} = f(\text{terminal point}) - f(\text{initial point}) $$
    $$ = f(1, 0, \ln 2) - f(0, 1, 0) $$
    $$ = (1 \cdot e^{\ln 2} + 0) - (0 \cdot e^0 + 1) $$
    Recall that $e^{\ln 2} = 2$.
    $$ = (1 \cdot 2 + 0) - (0 \cdot 1 + 1) $$
    $$ = 2 - 1 = 1 $$

    The value of the line integral is $1$. Astounding, isn't it? What would have been three separate, potentially messy line integral calculations collapsed into a single subtraction! That's efficient!

---

### **Practice & Reflection (Beyond the Lab Bench)**

Alright, my keen-minded apprentices, it's time to solidify this knowledge before your brains melt from sheer intellectual density!

1.  **Conceptual Check-in:**
    *   In your own words, explain *why* the Fundamental Theorem for Line Integrals is analogous to the Fundamental Theorem of Calculus. What role does the potential function play?
    *   What does it mean for a line integral to be "path independent"? Provide a real-world example (e.g., related to gravity, elevation, etc.).
    *   If you're given a vector field $\mathbf{F}$ and asked to evaluate $\int_C \mathbf{F} \cdot d\mathbf{r}$, what is the *first thing* you should always check? Why?
    *   Can a vector field be conservative if its domain is not simply connected? If so, what does the component test tell you in such a case? (Hint: The component test's conditions are still necessary, but not always sufficient!)

2.  **Quick Practice Problem:**
    Consider the vector field $\mathbf{F}(x, y) = \langle 2xy^3 + 1, 3x^2 y^2 - \cos y \rangle$.
    a.  Is $\mathbf{F}$ conservative? Show your work using the component test.
    b.  If it is conservative, find a potential function $f(x, y)$.
    c.  Use the potential function to evaluate $\int_C \mathbf{F} \cdot d\mathbf{r}$ where $C$ is any path from $(1, 0)$ to $(0, \pi/2)$.

Think about these, experiment, and don't be afraid to make mistakes! That's how we learn, by bravely venturing into the unknown, usually with a grand plan that inevitably goes horribly wrong. But then we learn!

That's all for today, my brilliant young minds! Keep those gears turning, and I'll see you next time. Farewell!