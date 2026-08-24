Good news, everyone! Welcome to Math 303, Section 13.8, where we're about to unlock one of the most ingenious tools in multivariable calculus: **Lagrange Multipliers!**

This section is all about optimization – finding the maximum or minimum values of a function. But not just any optimization, mind you! We're talking about *constrained* optimization, which is like trying to find the highest point on a mountain while you're forced to walk along a specific trail. This powerful technique, named after the brilliant mathematician Joseph-Louis Lagrange, allows us to tackle these problems with elegance and efficiency. Whether you're designing rocket trajectories, optimizing economic models, or just trying to find the closest point on a surface, Lagrange Multipliers are your secret weapon. Prepare for your minds to be expanded!

---

### Core Concepts & Definitions: The Method of Lagrange Multipliers

At its heart, the Method of Lagrange Multipliers addresses the following problem:

We want to find the extreme values (maximum or minimum) of a function $f(x, y)$ (or $f(x, y, z)$) subject to a **constraint** of the form $g(x, y) = c$ (or $g(x, y, z) = c$), where $c$ is a constant.

#### 1. The Geometric Intuition: When Level Curves Kiss!

Let's start with a function $f(x, y)$ and a constraint $g(x, y) = c$ in two dimensions.
Imagine the level curves of $f(x, y)$. These are curves where $f(x, y)$ takes on a constant value. As you move to higher level curves, the value of $f$ increases (assuming a positive gradient direction).
Now, imagine the constraint $g(x, y) = c$. This is a specific curve in the $xy$-plane.

Our goal is to find the maximum or minimum value of $f$ *only on this constraint curve*.

What happens at a maximum or minimum point on the constraint curve?
At such a point, the constraint curve $g(x, y) = c$ must be **tangent** to a level curve of $f(x, y)$.

Think about it: if the constraint curve crossed a level curve of $f$, you could move along the constraint in either direction to a higher or lower level curve of $f$, meaning you haven't yet reached an extremum! Only when the constraint curve just touches a level curve of $f$ without crossing it, do you find an extremum.

#### 2. Gradients and Tangency: A Parallel Story

What does tangency mean mathematically?
We know that the **gradient vector** $\nabla f(x, y)$ is always perpendicular (normal) to the level curves of $f(x, y)$.
Similarly, $\nabla g(x, y)$ is always perpendicular (normal) to the level curve $g(x, y) = c$.

If the level curve of $f$ is tangent to the constraint curve $g=c$ at a point $(x_0, y_0)$, then their normal vectors must be **parallel** at that point!

This is the core insight of Lagrange Multipliers:
At an extreme value $(x_0, y_0)$ of $f$ subject to the constraint $g(x, y) = c$, the gradient of $f$ must be parallel to the gradient of $g$.
Mathematically, this means there exists a scalar $\lambda$ (pronounced "lambda"), called the **Lagrange Multiplier**, such that:

$$ \nabla f(x_0, y_0) = \lambda \nabla g(x_0, y_0) $$

This relationship holds for functions of two variables, $f(x,y)$ and $g(x,y)$, and extends naturally to three variables, $f(x,y,z)$ and $g(x,y,z)$.

#### 3. The Method of Lagrange Multipliers (Formal Procedure for a Single Constraint)

To find the maximum and minimum values of $f(x, y, z)$ subject to the constraint $g(x, y, z) = c$:

1.  **Identify the functions:** Clearly define the objective function $f(x, y, z)$ and the constraint function $g(x, y, z) = c$.
2.  **Compute Gradients:** Calculate the gradient vectors $\nabla f$ and $\nabla g$.
    For $f(x,y,z)$, $\nabla f = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right\rangle$.
    For $g(x,y,z)$, $\nabla g = \left\langle \frac{\partial g}{\partial x}, \frac{\partial g}{\partial y}, \frac{\partial g}{\partial z} \right\rangle$.
3.  **Set up the System of Equations:** Solve the following system of equations for $x, y, z,$ and $\lambda$:
    $$ \nabla f = \lambda \nabla g $$
    $$ g(x, y, z) = c $$
    This expands into a system of $n+1$ equations for $n$ variables ($x, y, z, \dots$) and the multiplier $\lambda$. For a 3-variable function, this gives:
    $$ \frac{\partial f}{\partial x} = \lambda \frac{\partial g}{\partial x} $$
    $$ \frac{\partial f}{\partial y} = \lambda \frac{\partial g}{\partial y} $$
    $$ \frac{\partial f}{\partial z} = \lambda \frac{\partial g}{\partial z} $$
    $$ g(x, y, z) = c $$
4.  **Solve the System:** Find all points $(x, y, z)$ that satisfy this system. These are your candidate points where extrema might occur. Remember to consider cases where $\lambda=0$ or where specific variables might be zero. Also, be careful about dividing by variables that could be zero.
5.  **Evaluate $f$:** Evaluate the function $f$ at all the candidate points found in Step 4.
6.  **Identify Extrema:** Compare the values of $f$. The largest value is the maximum, and the smallest value is the minimum.
    *Important Note:* For absolute extrema, ensure the constraint region is closed and bounded (compact). If it is, the Extreme Value Theorem guarantees that absolute maxima and minima exist. If the region is not compact, these points are candidates for local extrema, and further analysis might be needed (e.g., checking behavior as you approach boundaries or infinity).

#### 4. The Proof (A Glimpse into the Mechanism)

Why does this "parallel gradients" condition actually work?
Consider a path $\mathbf{r}(t) = \langle x(t), y(t) \rangle$ (or $\langle x(t), y(t), z(t) \rangle$) that lies entirely on the constraint curve/surface $g(\mathbf{r}(t)) = c$.
If $f(\mathbf{r}(t))$ has a maximum or minimum at $t_0$, then its derivative with respect to $t$ must be zero at $t_0$:
$$ \frac{d}{dt} f(\mathbf{r}(t)) \Big|_{t=t_0} = 0 $$
By the Chain Rule, we know that:
$$ \nabla f(\mathbf{r}(t_0)) \cdot \mathbf{r}'(t_0) = 0 $$
This means that the gradient vector $\nabla f$ is orthogonal to the tangent vector $\mathbf{r}'(t_0)$ of the constraint curve at the extremum.
Now, consider the constraint itself: $g(\mathbf{r}(t)) = c$. Since $c$ is a constant, its derivative is also zero:
$$ \frac{d}{dt} g(\mathbf{r}(t)) \Big|_{t=t_0} = 0 $$
Again, by the Chain Rule:
$$ \nabla g(\mathbf{r}(t_0)) \cdot \mathbf{r}'(t_0) = 0 $$
This tells us that $\nabla g$ is also orthogonal to the tangent vector $\mathbf{r}'(t_0)$.
Since both $\nabla f$ and $\nabla g$ are orthogonal to the *same* tangent vector $\mathbf{r}'(t_0)$ at the point of extremum (and assuming $\nabla g \ne \mathbf{0}$), they must be parallel to each other. Hence, $\nabla f = \lambda \nabla g$. Ta-da!

---

### Detailed Lecture & Worked Examples

Let's dive into some glorious examples!

#### Example 1: Professor Lundholm's "Ex 0" - Finding Extrema on a Circle

**Problem:** Find the maximum and minimum values of $f(x, y) = 2x + y$ subject to the constraint $x^2 + y^2 = 1$.

**Solution:**
1.  **Identify functions:**
    Objective function: $f(x, y) = 2x + y$
    Constraint function: $g(x, y) = x^2 + y^2 = 1$
2.  **Compute Gradients:**
    $\nabla f = \left\langle \frac{\partial}{\partial x}(2x+y), \frac{\partial}{\partial y}(2x+y) \right\rangle = \langle 2, 1 \rangle$
    $\nabla g = \left\langle \frac{\partial}{\partial x}(x^2+y^2), \frac{\partial}{\partial y}(x^2+y^2) \right\rangle = \langle 2x, 2y \rangle$
3.  **Set up the System:**
    $$ \nabla f = \lambda \nabla g $$
    $$ g(x, y) = 1 $$
    This expands to:
    (1) $2 = \lambda (2x)$
    (2) $1 = \lambda (2y)$
    (3) $x^2 + y^2 = 1$
4.  **Solve the System:**
    From (1), $1 = \lambda x$. Since $x^2+y^2=1$, $x$ cannot be zero, so $\lambda = 1/x$.
    Substitute $\lambda$ into (2):
    $1 = \frac{1}{x} (2y) \implies x = 2y$.
    Now, substitute $x = 2y$ into the constraint equation (3):
    $(2y)^2 + y^2 = 1$
    $4y^2 + y^2 = 1$
    $5y^2 = 1$
    $y^2 = \frac{1}{5} \implies y = \pm \frac{1}{\sqrt{5}}$
    For each value of $y$, find the corresponding $x$:
    *   If $y = \frac{1}{\sqrt{5}}$, then $x = 2 \left( \frac{1}{\sqrt{5}} \right) = \frac{2}{\sqrt{5}}$. Candidate point: $\left( \frac{2}{\sqrt{5}}, \frac{1}{\sqrt{5}} \right)$.
    *   If $y = -\frac{1}{\sqrt{5}}$, then $x = 2 \left( -\frac{1}{\sqrt{5}} \right) = -\frac{2}{\sqrt{5}}$. Candidate point: $\left( -\frac{2}{\sqrt{5}}, -\frac{1}{\sqrt{5}} \right)$.
5.  **Evaluate $f$ at candidate points:**
    *   $f\left( \frac{2}{\sqrt{5}}, \frac{1}{\sqrt{5}} \right) = 2\left( \frac{2}{\sqrt{5}} \right) + \frac{1}{\sqrt{5}} = \frac{4}{\sqrt{5}} + \frac{1}{\sqrt{5}} = \frac{5}{\sqrt{5}} = \sqrt{5}$.
    *   $f\left( -\frac{2}{\sqrt{5}}, -\frac{1}{\sqrt{5}} \right) = 2\left( -\frac{2}{\sqrt{5}} \right) + \left( -\frac{1}{\sqrt{5}} \right) = -\frac{4}{\sqrt{5}} - \frac{1}{\sqrt{5}} = -\frac{5}{\sqrt{5}} = -\sqrt{5}$.
6.  **Identify Extrema:**
    The maximum value is $\sqrt{5}$ at $\left( \frac{2}{\sqrt{5}}, \frac{1}{\sqrt{5}} \right)$.
    The minimum value is $-\sqrt{5}$ at $\left( -\frac{2}{\sqrt{5}}, -\frac{1}{\sqrt{5}} \right)$.

**Geometric Interpretation:** The level curves of $f(x,y)=2x+y$ are lines of the form $2x+y=k$. We are looking for the largest and smallest $k$ such that the line $2x+y=k$ intersects the circle $x^2+y^2=1$. This occurs when the line is tangent to the circle. The gradient vectors $\nabla f = \langle 2,1 \rangle$ and $\nabla g = \langle 2x, 2y \rangle$ will point in the same (or opposite) direction at these tangent points.

---

#### Example 2: Finding Absolute Extreme Values (Hawkes Example 1)

**Problem:** Find the absolute extreme values of the function $f(x, y) = x^2y$ on the curve $x^2 + 2y^2 = 6$.

**Solution:**
1.  **Identify functions:**
    Objective function: $f(x, y) = x^2y$
    Constraint function: $g(x, y) = x^2 + 2y^2 = 6$
2.  **Compute Gradients:**
    $\nabla f = \langle 2xy, x^2 \rangle$
    $\nabla g = \langle 2x, 4y \rangle$
3.  **Set up the System:**
    (1) $2xy = \lambda (2x)$
    (2) $x^2 = \lambda (4y)$
    (3) $x^2 + 2y^2 = 6$
4.  **Solve the System:**
    From (1): $2xy = 2\lambda x$. We can rewrite this as $2x(y - \lambda) = 0$. This implies either $x=0$ or $y=\lambda$.

    **Case 1: $x = 0$**
    Substitute $x=0$ into (2): $0^2 = \lambda (4y) \implies 0 = 4\lambda y$.
    This means either $\lambda=0$ or $y=0$.
    *   If $x=0$ and $y=0$, then $0^2+2(0)^2=0 \ne 6$, so this point is not on the constraint curve.
    *   If $x=0$, substitute into (3): $0^2 + 2y^2 = 6 \implies 2y^2 = 6 \implies y^2 = 3 \implies y = \pm \sqrt{3}$.
        This gives us two candidate points: $(0, \sqrt{3})$ and $(0, -\sqrt{3})$.

    **Case 2: $y = \lambda$**
    Substitute $\lambda = y$ into (2):
    $x^2 = y (4y) \implies x^2 = 4y^2$.
    Now substitute $x^2 = 4y^2$ into the constraint equation (3):
    $4y^2 + 2y^2 = 6$
    $6y^2 = 6$
    $y^2 = 1 \implies y = \pm 1$.
    For each value of $y$, find $x$ using $x^2 = 4y^2$:
    *   If $y=1$: $x^2 = 4(1)^2 \implies x^2 = 4 \implies x = \pm 2$.
        This gives two candidate points: $(2, 1)$ and $(-2, 1)$.
    *   If $y=-1$: $x^2 = 4(-1)^2 \implies x^2 = 4 \implies x = \pm 2$.
        This gives two candidate points: $(2, -1)$ and $(-2, -1)$.

    So, our list of candidate points is: $(0, \sqrt{3})$, $(0, -\sqrt{3})$, $(2, 1)$, $(-2, 1)$, $(2, -1)$, $(-2, -1)$.
5.  **Evaluate $f$ at candidate points:**
    *   $f(0, \sqrt{3}) = (0)^2(\sqrt{3}) = 0$.
    *   $f(0, -\sqrt{3}) = (0)^2(-\sqrt{3}) = 0$.
    *   $f(2, 1) = (2)^2(1) = 4$.
    *   $f(-2, 1) = (-2)^2(1) = 4$.
    *   $f(2, -1) = (2)^2(-1) = -4$.
    *   $f(-2, -1) = (-2)^2(-1) = -4$.
6.  **Identify Extrema:**
    The absolute maximum value is $4$.
    The absolute minimum value is $-4$.

---

#### Example 3: Maximizing the Volume of a Box (Hawkes Example 2)

**Problem:** Consider again the problem of maximizing the volume function $V = xyz$ under the constraint that $x+2y+2z=84$. Solve this problem using Lagrange Multipliers. (Note: We assume $x,y,z > 0$ for a physical box, which forms a closed and bounded region when considered with the coordinate planes in the first octant).

**Solution:**
1.  **Identify functions:**
    Objective function: $f(x,y,z) = xyz$
    Constraint function: $g(x,y,z) = x+2y+2z = 84$
2.  **Compute Gradients:**
    $\nabla f = \langle yz, xz, xy \rangle$
    $\nabla g = \langle 1, 2, 2 \rangle$
3.  **Set up the System:**
    (1) $yz = \lambda (1)$
    (2) $xz = \lambda (2)$
    (3) $xy = \lambda (2)$
    (4) $x+2y+2z = 84$
4.  **Solve the System:**
    From (1), (2), and (3), we have:
    $yz = \lambda$
    $xz = 2\lambda$
    $xy = 2\lambda$

    Since we are maximizing volume, $x,y,z$ must be positive, so $\lambda$ must also be positive. This means we can safely divide by $x,y,z$ or $\lambda$.
    Equating the expressions for $2\lambda$:
    $xz = xy \implies z=y$ (since $x \ne 0$)
    Now substitute $z=y$ into $yz=\lambda$ and $xz=2\lambda$:
    $y^2 = \lambda$
    $xy = 2\lambda \implies xy = 2y^2 \implies x = 2y$ (since $y \ne 0$)

    Now we have relationships between $x, y, z$: $x=2y$ and $z=y$.
    Substitute these into the constraint equation (4):
    $(2y) + 2y + 2(y) = 84$
    $6y = 84$
    $y = 14$

    Now find $x$ and $z$:
    $x = 2(14) = 28$
    $z = 14$
    Our candidate point is $(28, 14, 14)$.
5.  **Evaluate $f$ at the candidate point:**
    $f(28, 14, 14) = (28)(14)(14) = 5488$.
6.  **Identify Extrema:**
    Since the domain ($x,y,z \ge 0$ along the plane) is closed and bounded, an absolute maximum must exist. We found only one critical point, so this must be the maximum value.
    The maximum volume is $5488$ cubic units.

---

#### Example 4: Finding the Location on a Plane Closest to a Point (Hawkes Example 3)

**Problem:** Find the location on the plane $-2x - 6y + 4z = 8$ closest to the point $(1, -2, 3)$.

**Solution:**
To find the closest point, we need to minimize the distance between a point $(x,y,z)$ on the plane and $(1,-2,3)$. It's often easier to minimize the *square* of the distance, as it removes the square root and simplifies derivatives, without changing the location of the extremum.

1.  **Identify functions:**
    Objective function: $f(x,y,z) = (x-1)^2 + (y+2)^2 + (z-3)^2$ (squared distance)
    Constraint function: $g(x,y,z) = -2x - 6y + 4z = 8$
2.  **Compute Gradients:**
    $\nabla f = \langle 2(x-1), 2(y+2), 2(z-3) \rangle$
    $\nabla g = \langle -2, -6, 4 \rangle$
3.  **Set up the System:**
    (1) $2(x-1) = \lambda (-2) \implies x-1 = -\lambda \implies x = 1-\lambda$
    (2) $2(y+2) = \lambda (-6) \implies y+2 = -3\lambda \implies y = -2-3\lambda$
    (3) $2(z-3) = \lambda (4) \implies z-3 = 2\lambda \implies z = 3+2\lambda$
    (4) $-2x - 6y + 4z = 8$
4.  **Solve the System:**
    Substitute the expressions for $x, y, z$ from (1), (2), (3) into the constraint equation (4):
    $-2(1-\lambda) - 6(-2-3\lambda) + 4(3+2\lambda) = 8$
    $-2 + 2\lambda + 12 + 18\lambda + 12 + 8\lambda = 8$
    $22 + 28\lambda = 8$
    $28\lambda = 8 - 22$
    $28\lambda = -14$
    $\lambda = -\frac{14}{28} = -\frac{1}{2}$

    Now, substitute the value of $\lambda$ back into the expressions for $x, y, z$:
    $x = 1 - (-\frac{1}{2}) = 1 + \frac{1}{2} = \frac{3}{2}$
    $y = -2 - 3(-\frac{1}{2}) = -2 + \frac{3}{2} = -\frac{4}{2} + \frac{3}{2} = -\frac{1}{2}$
    $z = 3 + 2(-\frac{1}{2}) = 3 - 1 = 2$

    The only candidate point is $\left( \frac{3}{2}, -\frac{1}{2}, 2 \right)$.
5.  **Evaluate $f$ at the candidate point (optional for location, but good for verification):**
    The squared distance is $f\left( \frac{3}{2}, -\frac{1}{2}, 2 \right) = \left(\frac{3}{2}-1\right)^2 + \left(-\frac{1}{2}+2\right)^2 + (2-3)^2$
    $= \left(\frac{1}{2}\right)^2 + \left(\frac{3}{2}\right)^2 + (-1)^2$
    $= \frac{1}{4} + \frac{9}{4} + 1 = \frac{10}{4} + 1 = \frac{5}{2} + 1 = \frac{7}{2}$.
    The minimum distance is $\sqrt{\frac{7}{2}} = \frac{\sqrt{14}}{2}$.
6.  **Identify Extrema:**
    Since a plane is a closed set and the distance function tends to infinity as we move away from the point, there must be a unique absolute minimum distance. Thus, the point we found is the closest.
    The location on the plane closest to $(1, -2, 3)$ is $\left( \frac{3}{2}, -\frac{1}{2}, 2 \right)$.

---

#### Example 5: Finding Points of Relative Minimum and Maximum Distance from the Origin (Hawkes Example 4)

**Problem:** In $R^2$, find the points of relative minimum and maximum distance between the origin and the curve $y^2 = x^3 + 1$.

**Solution:**
Again, we will minimize/maximize the square of the distance from the origin $f(x,y)=x^2+y^2$.

1.  **Identify functions:**
    Objective function: $f(x, y) = x^2 + y^2$
    Constraint function: $g(x, y) = y^2 - x^3 = 1$ (rewriting $y^2 = x^3 + 1$)
2.  **Compute Gradients:**
    $\nabla f = \langle 2x, 2y \rangle$
    $\nabla g = \langle -3x^2, 2y \rangle$
3.  **Set up the System:**
    (1) $2x = \lambda (-3x^2)$
    (2) $2y = \lambda (2y)$
    (3) $y^2 - x^3 = 1$
4.  **Solve the System:**
    From (2): $2y = 2\lambda y \implies 2y(1 - \lambda) = 0$.
    This implies either $y=0$ or $\lambda=1$.

    **Case 1: $y = 0$**
    Substitute $y=0$ into (3):
    $0^2 - x^3 = 1 \implies -x^3 = 1 \implies x^3 = -1 \implies x = -1$.
    This gives one candidate point: $(-1, 0)$.

    **Case 2: $\lambda = 1$**
    Substitute $\lambda=1$ into (1):
    $2x = 1 (-3x^2) \implies 2x = -3x^2$.
    $3x^2 + 2x = 0$
    $x(3x + 2) = 0$.
    This implies either $x=0$ or $x = -2/3$.

    *   If $x=0$:
        Substitute $x=0$ into (3):
        $y^2 - (0)^3 = 1 \implies y^2 = 1 \implies y = \pm 1$.
        This gives two candidate points: $(0, 1)$ and $(0, -1)$.
    *   If $x=-2/3$:
        Substitute $x=-2/3$ into (3):
        $y^2 - \left(-\frac{2}{3}\right)^3 = 1$
        $y^2 - \left(-\frac{8}{27}\right) = 1$
        $y^2 + \frac{8}{27} = 1$
        $y^2 = 1 - \frac{8}{27} = \frac{27-8}{27} = \frac{19}{27}$.
        $y = \pm \sqrt{\frac{19}{27}} = \pm \frac{\sqrt{19}}{3\sqrt{3}} = \pm \frac{\sqrt{57}}{9}$.
        This gives two candidate points: $\left( -\frac{2}{3}, \sqrt{\frac{19}{27}} \right)$ and $\left( -\frac{2}{3}, -\sqrt{\frac{19}{27}} \right)$.

    So, our list of candidate points is: $(-1, 0)$, $(0, 1)$, $(0, -1)$, $\left( -\frac{2}{3}, \sqrt{\frac{19}{27}} \right)$, $\left( -\frac{2}{3}, -\sqrt{\frac{19}{27}} \right)$.
5.  **Evaluate $f$ (squared distance) at candidate points:**
    *   $f(-1, 0) = (-1)^2 + (0)^2 = 1$.
    *   $f(0, 1) = (0)^2 + (1)^2 = 1$.
    *   $f(0, -1) = (0)^2 + (-1)^2 = 1$.
    *   $f\left( -\frac{2}{3}, \sqrt{\frac{19}{27}} \right) = \left(-\frac{2}{3}\right)^2 + \left(\sqrt{\frac{19}{27}}\right)^2 = \frac{4}{9} + \frac{19}{27} = \frac{12}{27} + \frac{19}{27} = \frac{31}{27}$.
    *   $f\left( -\frac{2}{3}, -\sqrt{\frac{19}{27}} \right) = \left(-\frac{2}{3}\right)^2 + \left(-\sqrt{\frac{19}{27}}\right)^2 = \frac{4}{9} + \frac{19}{27} = \frac{31}{27}$.
6.  **Identify Extrema:**
    The minimum squared distance is $1$, occurring at $(-1, 0)$, $(0, 1)$, and $(0, -1)$. The minimum distance is $\sqrt{1} = 1$.
    The maximum squared distance (among these relative extrema) is $\frac{31}{27}$, occurring at $\left( -\frac{2}{3}, \pm \sqrt{\frac{19}{27}} \right)$. The maximum distance is $\sqrt{\frac{31}{27}}$.
    *Note:* The curve $y^2 = x^3+1$ is unbounded; as $x \to \infty$, $y \to \pm \infty$, so the distance from the origin can become arbitrarily large. Thus, these "maximum distance" points are relative maxima only.

---

### Lagrange Multipliers with Two Constraints

"Good news, everyone! For those times when one constraint just isn't enough, we can handle two!"

The method of Lagrange Multipliers can be extended to situations where we need to optimize $f(x, y, z)$ subject to **two constraints**:
$g(x, y, z) = c$
$h(x, y, z) = k$

#### 1. Geometric Interpretation with Two Constraints

In three dimensions, the intersection of two surfaces $g(x,y,z)=c$ and $h(x,y,z)=k$ typically forms a **curve** $C$. We are looking for extrema of $f(x,y,z)$ along this curve $C$.

At an extremum on the curve $C$, the gradient $\nabla f$ must be orthogonal to the tangent vector of the curve $C$.
We know that the tangent vector of the curve $C$ must be orthogonal to *both* $\nabla g$ (normal to $g=c$) and $\nabla h$ (normal to $h=k$).
Therefore, $\nabla f$ must lie in the plane spanned by $\nabla g$ and $\nabla h$. This means $\nabla f$ can be expressed as a linear combination of $\nabla g$ and $\nabla h$.

#### 2. Formal Procedure for Two Constraints

To find the extreme values of $f(x, y, z)$ subject to $g(x, y, z) = c$ and $h(x, y, z) = k$:

1.  **Identify functions:** Define $f(x, y, z)$, $g(x, y, z) = c$, and $h(x, y, z) = k$.
2.  **Compute Gradients:** Calculate $\nabla f$, $\nabla g$, and $\nabla h$.
3.  **Set up the System of Equations:** Solve the following system of equations for $x, y, z,$ and two Lagrange multipliers $\lambda$ and $\mu$ (pronounced "mu"):
    $$ \nabla f = \lambda \nabla g + \mu \nabla h $$
    $$ g(x, y, z) = c $$
    $$ h(x, y, z) = k $$
    This system will typically have $n+2$ equations for $n$ variables (e.g., $x,y,z$) and the two multipliers $\lambda, \mu$. For a 3-variable function, this gives:
    $$ \frac{\partial f}{\partial x} = \lambda \frac{\partial g}{\partial x} + \mu \frac{\partial h}{\partial x} $$
    $$ \frac{\partial f}{\partial y} = \lambda \frac{\partial g}{\partial y} + \mu \frac{\partial h}{\partial y} $$
    $$ \frac{\partial f}{\partial z} = \lambda \frac{\partial g}{\partial z} + \mu \frac{\partial h}{\partial z} $$
    $$ g(x, y, z) = c $$
    $$ h(x, y, z) = k $$
4.  **Solve the System:** Find all candidate points $(x, y, z)$.
5.  **Evaluate $f$:** Evaluate the function $f$ at all candidate points.
6.  **Identify Extrema:** Compare the values of $f$ to find the maximum and minimum.

---

#### Example 6: Lagrange Multipliers with Two Constraints (Hawkes Example 5)

**Problem:** Find the absolute extreme values of $f(x,y,z) = x+y+z$ subject to the constraints $x^2+2y^2=6$ and $3x+2y+4z=5$.

**Solution:**
1.  **Identify functions:**
    Objective function: $f(x,y,z) = x+y+z$
    Constraint 1: $g(x,y,z) = x^2+2y^2 = 6$
    Constraint 2: $h(x,y,z) = 3x+2y+4z = 5$
2.  **Compute Gradients:**
    $\nabla f = \langle 1, 1, 1 \rangle$
    $\nabla g = \langle 2x, 4y, 0 \rangle$
    $\nabla h = \langle 3, 2, 4 \rangle$
3.  **Set up the System:**
    $$ \nabla f = \lambda \nabla g + \mu \nabla h $$
    $$ g(x, y, z) = 6 $$
    $$ h(x, y, z) = 5 $$
    This expands to:
    (1) $1 = \lambda (2x) + \mu (3)$
    (2) $1 = \lambda (4y) + \mu (2)$
    (3) $1 = \lambda (0) + \mu (4) \implies 1 = 4\mu$
    (4) $x^2+2y^2=6$
    (5) $3x+2y+4z=5$
4.  **Solve the System:**
    From (3), we immediately find $\mu = \frac{1}{4}$.

    Substitute $\mu = \frac{1}{4}$ into (1) and (2):
    (1) $1 = 2\lambda x + 3\left(\frac{1}{4}\right) \implies 1 = 2\lambda x + \frac{3}{4} \implies \frac{1}{4} = 2\lambda x \implies \lambda x = \frac{1}{8}$
    (2) $1 = 4\lambda y + 2\left(\frac{1}{4}\right) \implies 1 = 4\lambda y + \frac{1}{2} \implies \frac{1}{2} = 4\lambda y \implies \lambda y = \frac{1}{8}$

    From $\lambda x = \frac{1}{8}$ and $\lambda y = \frac{1}{8}$:
    Since $1/8 \ne 0$, $\lambda$ cannot be zero. Therefore, we can deduce that $x=y$.

    Now substitute $x=y$ into constraint (4):
    $x^2 + 2x^2 = 6$
    $3x^2 = 6$
    $x^2 = 2 \implies x = \pm \sqrt{2}$.

    **Case 1: $x = \sqrt{2}$**
    Since $x=y$, we have $y = \sqrt{2}$.
    Substitute $x=\sqrt{2}$ and $y=\sqrt{2}$ into constraint (5):
    $3(\sqrt{2}) + 2(\sqrt{2}) + 4z = 5$
    $5\sqrt{2} + 4z = 5$
    $4z = 5 - 5\sqrt{2}$
    $z = \frac{5 - 5\sqrt{2}}{4}$
    Candidate point: $\left( \sqrt{2}, \sqrt{2}, \frac{5 - 5\sqrt{2}}{4} \right)$.

    **Case 2: $x = -\sqrt{2}$**
    Since $x=y$, we have $y = -\sqrt{2}$.
    Substitute $x=-\sqrt{2}$ and $y=-\sqrt{2}$ into constraint (5):
    $3(-\sqrt{2}) + 2(-\sqrt{2}) + 4z = 5$
    $-5\sqrt{2} + 4z = 5$
    $4z = 5 + 5\sqrt{2}$
    $z = \frac{5 + 5\sqrt{2}}{4}$
    Candidate point: $\left( -\sqrt{2}, -\sqrt{2}, \frac{5 + 5\sqrt{2}}{4} \right)$.
5.  **Evaluate $f$ at candidate points:**
    *   For $\left( \sqrt{2}, \sqrt{2}, \frac{5 - 5\sqrt{2}}{4} \right)$:
        $f = \sqrt{2} + \sqrt{2} + \frac{5 - 5\sqrt{2}}{4} = 2\sqrt{2} + \frac{5 - 5\sqrt{2}}{4}$
        $= \frac{8\sqrt{2} + 5 - 5\sqrt{2}}{4} = \frac{5 + 3\sqrt{2}}{4}$.
    *   For $\left( -\sqrt{2}, -\sqrt{2}, \frac{5 + 5\sqrt{2}}{4} \right)$:
        $f = -\sqrt{2} - \sqrt{2} + \frac{5 + 5\sqrt{2}}{4} = -2\sqrt{2} + \frac{5 + 5\sqrt{2}}{4}$
        $= \frac{-8\sqrt{2} + 5 + 5\sqrt{2}}{4} = \frac{5 - 3\sqrt{2}}{4}$.
6.  **Identify Extrema:**
    The curve formed by the intersection of the cylinder $x^2+2y^2=6$ and the plane $3x+2y+4z=5$ is a closed and bounded curve (an ellipse), so absolute extrema must exist.
    Absolute Maximum value: $\frac{5 + 3\sqrt{2}}{4}$.
    Absolute Minimum value: $\frac{5 - 3\sqrt{2}}{4}$.

---

### Practice & Reflection: Conceptual Check-ins

Good news, everyone! Now that your minds are brimming with multivariable brilliance, let's solidify that understanding with some thought-provoking questions!

1.  **Geometric Interpretation:** Explain in your own words why the gradients of $f$ and $g$ must be parallel at an extremum point on the constraint curve $g(x,y)=c$. What happens if they are not parallel?
2.  **The Role of $\lambda$:** What does the Lagrange multiplier $\lambda$ actually represent? If $\lambda=0$ at an extremum, what does that tell you about the relationship between $f$ and $g$?
3.  **Boundary Conditions:** When applying Lagrange Multipliers, we find critical points. How do you distinguish between a maximum, minimum, or saddle point, especially if the constraint region is not compact (like in Example 5)? Why is it easier when the constraint region is compact?
4.  **$\nabla g = \mathbf{0}$?:** The method of Lagrange Multipliers assumes $\nabla g \ne \mathbf{0}$ on the constraint curve. What happens if $\nabla g = \mathbf{0}$ at a point on the constraint? Could an extremum occur there?
5.  **Squared Distance Trick:** We often minimize the squared distance $f(x,y,z)^2$ instead of the distance $f(x,y,z)$ itself. Why is this a valid and often preferred approach?
6.  **Two Constraints Extension:** How does the geometric intuition for two constraints, $g(x,y,z)=c$ and $h(x,y,z)=k$, extend from the single constraint case? Why does $\nabla f$ become a linear combination of $\nabla g$ and $\nabla h$?

Keep pondering these questions, my intrepid mathematicians! The deeper your conceptual understanding, the more powerful your problem-solving abilities become! And remember, the universe has many more mathematical wonders waiting to be discovered!