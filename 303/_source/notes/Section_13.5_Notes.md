"Good news, everyone! Prepare your minds for an exhilarating journey into the heart of Multivariable Calculus! Today, we're dissecting the very fabric of change itself, moving beyond mere coordinate axes to explore how functions behave in *any* given direction. We'll uncover the secrets of **Directional Derivatives** and reveal the majestic power of the **Gradient Vector** – a true marvel of mathematical engineering!"

---

# Math 303: Multivariable Calculus
## Section 13.5: Directional Derivatives and Gradient Vectors

### 1.0 Introduction: Beyond the Partial
My dear students, in our previous expeditions into multivariable functions, we've mastered the art of partial derivatives, allowing us to measure the rate of change of a function in directions perfectly aligned with our coordinate axes (e.g., along the $x$-axis or $y$-axis). But what if we're interested in a path that meanders diagonally across our domain? What if we want to know how quickly a mountain's elevation changes if we hike directly northeast, or how fast the temperature drops if we sprint away from a heat source at an odd angle?

For such quandaries, mere partial derivatives fall short. We need a more versatile tool, a more general concept that encapsulates the rate of change in *any arbitrary direction*. Enter the **directional derivative**! And waiting in the wings, to simplify its computation and reveal its profound geometric significance, is its trusty sidekick: the **gradient vector**.

### 2.0 Directional Derivatives: Measuring Change in Any Direction

Imagine you're standing on a surface, $f(x,y)$, representing, say, terrain elevation. You're at a point $(a,b)$. If you walk directly east (positive $x$-direction), your rate of climb is given by $f_x(a,b)$. If you walk directly north (positive $y$-direction), it's $f_y(a,b)$. But what if you walk in an arbitrary direction, specified by a vector $\mathbf{u}$? The directional derivative answers this!

#### 2.1 Definition: The Directional Derivative

The directional derivative is fundamentally a limit, much like our familiar single-variable derivative. It's the rate of change of $f$ as we move from a point $(a,b)$ along a line in the direction of a specified unit vector $\mathbf{u} = \langle u_1, u_2 \rangle$.

**Definition 13.5.1: Directional Derivative for a Function of Two Variables**
If the limit exists, the **directional derivative** of a function $f(x, y)$ at the point $(a, b)$ in the direction of the **unit vector** $\mathbf{u} = \langle u_1, u_2 \rangle$ is given by:

$$
D_{\mathbf{u}} f(a, b) = \lim_{t \to 0} \frac{f(a + t u_1, b + t u_2) - f(a, b)}{t}
$$

**Key Insight from Professor Lundholm's Notes:** It is absolutely *critical* to first convert the direction vector to a **unit vector** $\mathbf{u}$. Why? Because we want to measure the rate of change per unit distance moved. If our direction vector $\mathbf{v}$ isn't a unit vector, then moving a distance $t$ in the direction of $\mathbf{v}$ would correspond to moving a distance $t|\mathbf{v}|$. By using a unit vector, $t$ directly represents the arc length along the path, ensuring our derivative truly represents a rate of change per unit distance.

#### 2.2 Example 1: Finding a Directional Derivative Directly from the Definition

Let's put this definition to the test!

**Problem:** Find the directional derivative of $f(x, y) = 3xy$ at the point $(2, 1)$ in the direction of $\mathbf{v} = \langle 1, -1 \rangle$.

**Solution:**

**Step 1: Convert $\mathbf{v}$ to a unit vector $\mathbf{u}$.**
First, we must normalize the given direction vector $\mathbf{v}$.
The magnitude of $\mathbf{v}$ is $|\mathbf{v}| = \sqrt{1^2 + (-1)^2} = \sqrt{1 + 1} = \sqrt{2}$.
So, our unit direction vector is $\mathbf{u} = \frac{\mathbf{v}}{|\mathbf{v}|} = \frac{\langle 1, -1 \rangle}{\sqrt{2}} = \left\langle \frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}} \right\rangle$.
Thus, $u_1 = \frac{1}{\sqrt{2}}$ and $u_2 = -\frac{1}{\sqrt{2}}$.

**Step 2: Apply the definition of the directional derivative.**
We need to evaluate $D_{\mathbf{u}} f(2, 1)$ using the limit formula.
The point is $(a,b) = (2,1)$.
$$
D_{\mathbf{u}} f(2, 1) = \lim_{t \to 0} \frac{f(2 + t u_1, 1 + t u_2) - f(2, 1)}{t}
$$
Substitute $u_1$ and $u_2$:
$$
D_{\mathbf{u}} f(2, 1) = \lim_{t \to 0} \frac{f\left(2 + \frac{t}{\sqrt{2}}, 1 - \frac{t}{\sqrt{2}}\right) - f(2, 1)}{t}
$$
Now, substitute $f(x,y) = 3xy$:
$f\left(2 + \frac{t}{\sqrt{2}}, 1 - \frac{t}{\sqrt{2}}\right) = 3 \left(2 + \frac{t}{\sqrt{2}}\right) \left(1 - \frac{t}{\sqrt{2}}\right)$
$f(2, 1) = 3(2)(1) = 6$

Substitute these into the limit expression:
$$
D_{\mathbf{u}} f(2, 1) = \lim_{t \to 0} \frac{3 \left(2 + \frac{t}{\sqrt{2}}\right) \left(1 - \frac{t}{\sqrt{2}}\right) - 6}{t}
$$
Expand the product in the numerator:
$3 \left(2 - \frac{2t}{\sqrt{2}} + \frac{t}{\sqrt{2}} - \frac{t^2}{2}\right) = 3 \left(2 - \frac{t}{\sqrt{2}} - \frac{t^2}{2}\right) = 6 - \frac{3t}{\sqrt{2}} - \frac{3t^2}{2}$

Substitute this back into the limit:
$$
D_{\mathbf{u}} f(2, 1) = \lim_{t \to 0} \frac{\left(6 - \frac{3t}{\sqrt{2}} - \frac{3t^2}{2}\right) - 6}{t}
$$
$$
D_{\mathbf{u}} f(2, 1) = \lim_{t \to 0} \frac{- \frac{3t}{\sqrt{2}} - \frac{3t^2}{2}}{t}
$$
Factor out $t$ from the numerator and cancel it with the denominator (since $t \to 0$, $t \neq 0$):
$$
D_{\mathbf{u}} f(2, 1) = \lim_{t \to 0} \left( -\frac{3}{\sqrt{2}} - \frac{3t}{2} \right)
$$
Now, evaluate the limit as $t \to 0$:
$$
D_{\mathbf{u}} f(2, 1) = -\frac{3}{\sqrt{2}} - 0 = -\frac{3}{\sqrt{2}}
$$
We can rationalize the denominator: $D_{\mathbf{u}} f(2, 1) = -\frac{3\sqrt{2}}{2}$.

This result, my friends, tells us that at the point $(2,1)$, if we move in the direction $\langle 1, -1 \rangle$, the function $f(x,y) = 3xy$ is decreasing at a rate of approximately $2.12$ units per unit distance. Fascinating!

### 3.0 Gradient Vectors: The Direction of Steepest Ascent

Calculating directional derivatives directly from the limit definition can be, shall we say, *tedious*. Fortunately, the universe, in its infinite wisdom, has provided us with a much more elegant and powerful tool: the **gradient vector**! This vector not only simplifies our calculations but also holds profound geometric significance.

#### 3.1 Definition: The Gradient Vector

The gradient vector is essentially a vector composed of all the first-order partial derivatives of a function. It's an operator that acts on scalar functions to produce vector fields.

**Definition 13.5.2: Gradient Vector for a Function of Two Variables**
The **gradient vector** of the function $f(x, y)$ is the vector:
$$
\nabla f(x, y) = \left\langle f_x(x, y), f_y(x, y) \right\rangle = f_x(x, y) \mathbf{i} + f_y(x, y) \mathbf{j}
$$
The symbol $\nabla$ (an upside-down Greek capital delta), read as "nabla" or "del," is called the "gradient operator." The vector $\nabla f$ is read as "gradient of $f$," "grad $f$," or "del $f$."

**Definition 13.5.3: Gradient Vector for a Function of $n$ Variables**
The gradient operator extends naturally to functions of more than two variables. Given a function $f(x_1, x_2, \ldots, x_n)$, its gradient vector is:
$$
\nabla f(x_1, x_2, \ldots, x_n) = \left\langle \frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \ldots, \frac{\partial f}{\partial x_n} \right\rangle
$$

#### 3.2 Theorem: Computation of the Directional Derivative using the Gradient

A-HA! Here's the good news! This theorem simplifies the computation of the directional derivative immensely. No more terrifying limits, just a simple dot product!

**Theorem 13.5.1: Computation of $D_{\mathbf{u}} f(\mathbf{c})$**
Assuming the derivative of $f(x, y)$ at the point $(a, b)$ in the direction of the unit vector $\mathbf{u} = \langle u_1, u_2 \rangle$ exists, then:
$$
D_{\mathbf{u}} f(a, b) = \left\langle f_x(a, b), f_y(a, b) \right\rangle \cdot \langle u_1, u_2 \rangle = \nabla f(a, b) \cdot \mathbf{u}
$$
More generally, if $f(x_1, x_2, \ldots, x_n)$ is differentiable at the point $\mathbf{c} = \langle c_1, c_2, \ldots, c_n \rangle$ and if $\mathbf{u} = \langle u_1, u_2, \ldots, u_n \rangle$ is a unit vector, then:
$$
D_{\mathbf{u}} f(\mathbf{c}) = \nabla f(\mathbf{c}) \cdot \mathbf{u}
$$

Let's re-evaluate Example 1 using this powerful theorem.
For $f(x, y) = 3xy$ at $(2,1)$ in direction $\mathbf{v} = \langle 1,-1 \rangle$:
1.  **Unit vector:** $\mathbf{u} = \left\langle \frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}} \right\rangle$.
2.  **Gradient:** $\nabla f(x,y) = \langle \frac{\partial}{\partial x}(3xy), \frac{\partial}{\partial y}(3xy) \rangle = \langle 3y, 3x \rangle$.
3.  **Evaluate gradient at point:** $\nabla f(2,1) = \langle 3(1), 3(2) \rangle = \langle 3, 6 \rangle$.
4.  **Dot product:** $D_{\mathbf{u}} f(2,1) = \nabla f(2,1) \cdot \mathbf{u} = \langle 3, 6 \rangle \cdot \left\langle \frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}} \right\rangle = 3 \left(\frac{1}{\sqrt{2}}\right) + 6 \left(-\frac{1}{\sqrt{2}}\right) = \frac{3}{\sqrt{2}} - \frac{6}{\sqrt{2}} = -\frac{3}{\sqrt{2}}$.
Behold! The same result, achieved with much less algebraic drudgery!

#### 3.3 Example 2: Finding a Directional Derivative using the Gradient

**Problem:** Find the directional derivative of $f(x, y) = x^2 y - e^y$ at the point $(1, -1)$ in the direction of $\langle 2, 3 \rangle$.

**Solution:**

**Step 1: Find the gradient of $f(x,y)$.**
$$
f_x(x,y) = \frac{\partial}{\partial x}(x^2 y - e^y) = 2xy
$$
$$
f_y(x,y) = \frac{\partial}{\partial y}(x^2 y - e^y) = x^2 - e^y
$$
So, $\nabla f(x,y) = \langle 2xy, x^2 - e^y \rangle$.

**Step 2: Evaluate the gradient at the given point $(1, -1)$.**
$$
\nabla f(1, -1) = \langle 2(1)(-1), (1)^2 - e^{-1} \rangle = \left\langle -2, 1 - \frac{1}{e} \right\rangle
$$

**Step 3: Convert the direction vector to a unit vector.**
The given direction vector is $\mathbf{v} = \langle 2, 3 \rangle$.
Its magnitude is $|\mathbf{v}| = \sqrt{2^2 + 3^2} = \sqrt{4 + 9} = \sqrt{13}$.
The unit vector is $\mathbf{u} = \frac{\mathbf{v}}{|\mathbf{v}|} = \left\langle \frac{2}{\sqrt{13}}, \frac{3}{\sqrt{13}} \right\rangle$.

**Step 4: Compute the directional derivative using the dot product.**
$$
D_{\mathbf{u}} f(1, -1) = \nabla f(1, -1) \cdot \mathbf{u}
$$
$$
D_{\mathbf{u}} f(1, -1) = \left\langle -2, 1 - \frac{1}{e} \right\rangle \cdot \left\langle \frac{2}{\sqrt{13}}, \frac{3}{\sqrt{13}} \right\rangle
$$
$$
D_{\mathbf{u}} f(1, -1) = (-2)\left(\frac{2}{\sqrt{13}}\right) + \left(1 - \frac{1}{e}\right)\left(\frac{3}{\sqrt{13}}\right)
$$
$$
D_{\mathbf{u}} f(1, -1) = \frac{-4}{\sqrt{13}} + \frac{3}{\sqrt{13}} - \frac{3}{e\sqrt{13}}
$$
$$
D_{\mathbf{u}} f(1, -1) = \frac{-1 - \frac{3}{e}}{\sqrt{13}} = \frac{-1 - 3/e}{\sqrt{13}} \approx \frac{-1 - 3/2.718}{\sqrt{13}} \approx \frac{-1 - 1.103}{3.606} \approx \frac{-2.103}{3.606} \approx -0.583
$$
Thus, at $(1,-1)$, in the direction of $\langle 2,3 \rangle$, the function $f(x,y)$ is decreasing at a rate of approximately $0.583$ units per unit distance.

### 4.0 Properties of the Directional Derivative and the Gradient

The gradient vector is not just a computational shortcut; it reveals profound geometric properties about the function's behavior. Recall that the dot product $\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}| |\mathbf{b}| \cos \theta$, where $\theta$ is the angle between the vectors.

Since $\mathbf{u}$ is a unit vector, $|\mathbf{u}| = 1$. Therefore, we can write:
$$
D_{\mathbf{u}} f(\mathbf{c}) = \nabla f(\mathbf{c}) \cdot \mathbf{u} = |\nabla f(\mathbf{c})| |\mathbf{u}| \cos\theta = |\nabla f(\mathbf{c})| \cos\theta
$$
where $\theta$ is the angle between $\nabla f(\mathbf{c})$ and $\mathbf{u}$.

This formula, my fellow mathematicians, immediately unveils three crucially important facts about the directional derivative and the gradient:

**Theorem 13.5.2: Properties of the Directional Derivative**
Assume $f$ is differentiable at $\mathbf{c}$ and that $\nabla f(\mathbf{c}) \neq \mathbf{0}$.

1.  **Direction of Greatest Increase:** The greatest rate of increase of $f$ at $\mathbf{c}$ occurs when $\cos\theta = 1$, which means $\theta = 0$. This happens when $\mathbf{u}$ points in the **same direction as $\nabla f(\mathbf{c})$**. The maximum rate of change is $D_{\mathbf{u}} f(\mathbf{c}) = |\nabla f(\mathbf{c})|$.
    *   **Geometric Interpretation:** The gradient vector $\nabla f(\mathbf{c})$ points in the direction in which the function $f$ increases most rapidly. Its magnitude, $|\nabla f(\mathbf{c})|$, is that maximum rate of increase. Think of climbing a hill; the gradient points up the steepest path!

2.  **Direction of Greatest Decrease:** The greatest rate of decrease of $f$ at $\mathbf{c}$ occurs when $\cos\theta = -1$, which means $\theta = \pi$. This happens when $\mathbf{u}$ points in the **opposite direction of $\nabla f(\mathbf{c})$**. The minimum rate of change is $D_{\mathbf{u}} f(\mathbf{c}) = -|\nabla f(\mathbf{c})|$.
    *   **Geometric Interpretation:** Moving in the direction opposite to the gradient leads to the most rapid decrease in function value (e.g., the steepest downhill path).

3.  **Direction of No Change:** The rate of change of $f$ at $\mathbf{c}$ is $0$ if $\cos\theta = 0$, which means $\theta = \frac{\pi}{2}$ (or $\frac{3\pi}{2}$). This happens when $\mathbf{u}$ is **orthogonal (perpendicular) to $\nabla f(\mathbf{c})$**. The rate of change is $D_{\mathbf{u}} f(\mathbf{c}) = |\nabla f(\mathbf{c})| \cdot 0 = 0$.
    *   **Geometric Interpretation:** If you move in a direction perpendicular to the gradient vector, the function's value does not change. These directions lie along the **level curves** (for $f(x,y)$) or **level surfaces** (for $f(x,y,z)$) of the function. The gradient is always normal to the level sets! This is a profoundly important concept!

#### 4.1 Example 3: Exploring the Properties of the Directional Derivative

**Problem:** Given the function $f(x, y) = \sin(x + y^2)$, find the direction and value of:
a. the greatest rate of increase,
b. the greatest rate of decrease, and
c. no change from the point $(2, 1)$.

**Solution:**

**Step 1: Find the gradient vector $\nabla f(x,y)$.**
$$
f_x(x,y) = \frac{\partial}{\partial x}(\sin(x + y^2)) = \cos(x + y^2) \cdot \frac{\partial}{\partial x}(x+y^2) = \cos(x + y^2)
$$
$$
f_y(x,y) = \frac{\partial}{\partial y}(\sin(x + y^2)) = \cos(x + y^2) \cdot \frac{\partial}{\partial y}(x+y^2) = 2y \cos(x + y^2)
$$
So, $\nabla f(x, y) = \langle \cos(x + y^2), 2y \cos(x + y^2) \rangle$.

**Step 2: Evaluate the gradient at the point $(2, 1)$.**
Substitute $x=2$ and $y=1$ into the gradient:
$x + y^2 = 2 + (1)^2 = 3$.
$$
\nabla f(2, 1) = \langle \cos(3), 2(1)\cos(3) \rangle = \langle \cos(3), 2\cos(3) \rangle
$$
Using a calculator for $\cos(3)$ (remembering it's in radians!), $\cos(3) \approx -0.99$.
So, $\nabla f(2, 1) \approx \langle -0.99, 2(-0.99) \rangle = \langle -0.99, -1.98 \rangle$.

**Step 3: Calculate the magnitude of the gradient at $(2, 1)$.**
$$
|\nabla f(2, 1)| = \sqrt{(\cos(3))^2 + (2\cos(3))^2} = \sqrt{\cos^2(3) + 4\cos^2(3)} = \sqrt{5\cos^2(3)} = \sqrt{5} |\cos(3)|
$$
Since $\cos(3) \approx -0.99$, we have $|\cos(3)| \approx 0.99$.
So, $|\nabla f(2, 1)| \approx \sqrt{5} (0.99) \approx 2.236 \times 0.99 \approx 2.21$.

Now, let's address the specific questions:

**a. Greatest rate of increase:**
*   **Direction:** The direction of the greatest rate of increase is the direction of the gradient vector itself.
    $\mathbf{u}_{\text{max increase}} = \frac{\nabla f(2,1)}{|\nabla f(2,1)|} = \frac{\langle \cos(3), 2\cos(3) \rangle}{\sqrt{5}|\cos(3)|} = \frac{\cos(3)}{|\cos(3)|} \frac{\langle 1, 2 \rangle}{\sqrt{5}}$.
    Since $\cos(3)$ is negative, $\frac{\cos(3)}{|\cos(3)|} = -1$.
    So, the unit direction is $-\frac{1}{\sqrt{5}}\langle 1, 2 \rangle = \left\langle -\frac{1}{\sqrt{5}}, -\frac{2}{\sqrt{5}} \right\rangle \approx \langle -0.447, -0.894 \rangle$.
    The direction is approximately $\langle -0.99, -1.98 \rangle$ (the un-normalized gradient vector itself).
*   **Value:** The greatest rate of increase is the magnitude of the gradient vector.
    Rate of increase $= |\nabla f(2, 1)| = \sqrt{5}|\cos(3)| \approx 2.21$.

**b. Greatest rate of decrease:**
*   **Direction:** The direction of the greatest rate of decrease is the opposite direction of the gradient vector.
    $\mathbf{u}_{\text{max decrease}} = -\frac{\nabla f(2,1)}{|\nabla f(2,1)|} = \frac{1}{\sqrt{5}}\langle 1, 2 \rangle = \left\langle \frac{1}{\sqrt{5}}, \frac{2}{\sqrt{5}} \right\rangle \approx \langle 0.447, 0.894 \rangle$.
    The direction is approximately $\langle 0.99, 1.98 \rangle$.
*   **Value:** The greatest rate of decrease is the negative of the magnitude of the gradient vector.
    Rate of decrease $= -|\nabla f(2, 1)| = -\sqrt{5}|\cos(3)| \approx -2.21$.

**c. No change:**
*   **Direction:** The directions of no change are orthogonal (perpendicular) to the gradient vector.
    If $\nabla f(2,1) = \langle \cos(3), 2\cos(3) \rangle$, then a vector $\langle A, B \rangle$ is orthogonal if $\langle A, B \rangle \cdot \langle \cos(3), 2\cos(3) \rangle = 0$, which means $A\cos(3) + B(2\cos(3)) = 0$.
    Since $\cos(3) \neq 0$, we can divide by it: $A + 2B = 0$, or $A = -2B$.
    So, vectors of the form $\langle -2B, B \rangle$ are orthogonal to the gradient.
    Two unit directions (obtained by normalizing $\langle -2, 1 \rangle$ and $\langle 2, -1 \rangle$) are:
    $\mathbf{u}_1 = \frac{1}{\sqrt{(-2)^2+1^2}}\langle -2, 1 \rangle = \left\langle -\frac{2}{\sqrt{5}}, \frac{1}{\sqrt{5}} \right\rangle \approx \langle -0.894, 0.447 \rangle$.
    $\mathbf{u}_2 = \frac{1}{\sqrt{2^2+(-1)^2}}\langle 2, -1 \rangle = \left\langle \frac{2}{\sqrt{5}}, -\frac{1}{\sqrt{5}} \right\rangle \approx \langle 0.894, -0.447 \rangle$.
    Using the approximate values from the notes: the directions are approximately $\langle 1.98, -0.99 \rangle$ and $\langle -1.98, 0.99 \rangle$ (these are *not* unit vectors, but point in the correct orthogonal directions).
*   **Value:** The rate of change is $0$.

**Geometric Interpretation (Referencing Figure 4 in the notes):** The directions of no change are tangent to the level curve passing through the point $(2,1)$. The gradient vector $\nabla f(2,1)$ is perpendicular to this level curve at $(2,1)$. This is a beautiful consistency, as the level curves represent points of constant function value. Moving along them implies no change in $f$.

#### 4.2 Gradient and Tangent Lines/Planes to Level Sets

The property that the gradient is orthogonal to level sets is incredibly useful for finding tangent lines to curves (which are 2D level sets) and tangent planes to surfaces (which are 3D level sets).

Let a curve be defined implicitly by $F(x,y) = k$ (a level curve). Then the gradient $\nabla F(x,y)$ is normal to this curve at $(x,y)$. A tangent line will be perpendicular to this normal vector.

**Example 4: Finding the Equation of a Line Tangent to an Implicitly Defined Curve**

**Problem:** Find an equation for the line tangent to the graph of $(x - 2)^2 + 4(y+1)^2 = 8$ at the point $(4,0)$.

**Solution:**

**Step 1: Define the function $F(x,y)$.**
The given equation defines a level curve of the function $F(x,y) = (x - 2)^2 + 4(y+1)^2$.
The specific level curve is $F(x,y) = 8$.

**Step 2: Find the gradient of $F(x,y)$.**
$$
F_x(x,y) = \frac{\partial}{\partial x}((x - 2)^2 + 4(y+1)^2) = 2(x-2) \cdot 1 = 2(x-2)
$$
$$
F_y(x,y) = \frac{\partial}{\partial y}((x - 2)^2 + 4(y+1)^2) = 4 \cdot 2(y+1) \cdot 1 = 8(y+1)
$$
So, $\nabla F(x,y) = \langle 2(x-2), 8(y+1) \rangle$.

**Step 3: Evaluate the gradient at the given point $(4,0)$.**
$$
\nabla F(4,0) = \langle 2(4-2), 8(0+1) \rangle = \langle 2(2), 8(1) \rangle = \langle 4, 8 \rangle
$$
This vector $\langle 4, 8 \rangle$ is normal to the tangent line at $(4,0)$.

**Step 4: Write the equation of the tangent line.**
A line passing through $(x_0, y_0)$ with normal vector $\langle A, B \rangle$ has the equation $A(x - x_0) + B(y - y_0) = 0$.
Here, $(x_0, y_0) = (4,0)$ and $\langle A, B \rangle = \langle 4, 8 \rangle$.
$$
4(x - 4) + 8(y - 0) = 0
$$
$$
4x - 16 + 8y = 0
$$
Divide by 4 to simplify:
$$
x - 4 + 2y = 0 \quad \text{or} \quad x + 2y = 4
$$
This is the equation of the tangent line! A truly elegant application of the gradient's orthogonality.

#### 4.3 Additional Problem from Professor Lundholm's Notes (Problem 45)

Let's tackle another one to cement this concept!

**Problem:** Find an equation for the line tangent to the graph of $(2x^2 + y^2)^2 - 9x^2y = 0$ at the point $(1,1)$.

**Solution:**

**Step 1: Define the function $F(x,y)$.**
The given equation is a level curve of $F(x,y) = (2x^2 + y^2)^2 - 9x^2y$. The specific level curve is $F(x,y) = 0$.

**Step 2: Find the gradient of $F(x,y)$.**
We need $F_x(x,y)$ and $F_y(x,y)$.
$$
F_x(x,y) = \frac{\partial}{\partial x} \left[ (2x^2 + y^2)^2 - 9x^2y \right]
$$
$$
F_x(x,y) = 2(2x^2 + y^2) \cdot (4x) - 18xy
$$
$$
F_x(x,y) = 8x(2x^2 + y^2) - 18xy
$$
And
$$
F_y(x,y) = \frac{\partial}{\partial y} \left[ (2x^2 + y^2)^2 - 9x^2y \right]
$$
$$
F_y(x,y) = 2(2x^2 + y^2) \cdot (2y) - 9x^2
$$
$$
F_y(x,y) = 4y(2x^2 + y^2) - 9x^2
$$
So, $\nabla F(x,y) = \langle 8x(2x^2 + y^2) - 18xy, 4y(2x^2 + y^2) - 9x^2 \rangle$.

**Step 3: Evaluate the gradient at the given point $(1,1)$.**
Substitute $x=1$ and $y=1$:
For $2x^2 + y^2$: $2(1)^2 + (1)^2 = 2+1 = 3$.
$$
F_x(1,1) = 8(1)(3) - 18(1)(1) = 24 - 18 = 6
$$
$$
F_y(1,1) = 4(1)(3) - 9(1)^2 = 12 - 9 = 3
$$
So, $\nabla F(1,1) = \langle 6, 3 \rangle$. This vector is normal to the tangent line at $(1,1)$.

**Step 4: Write the equation of the tangent line.**
Using $(x_0, y_0) = (1,1)$ and $\langle A, B \rangle = \langle 6, 3 \rangle$:
$$
6(x - 1) + 3(y - 1) = 0
$$
$$
6x - 6 + 3y - 3 = 0
$$
$$
6x + 3y - 9 = 0
$$
Divide by 3 to simplify:
$$
2x + y - 3 = 0 \quad \text{or} \quad 2x + y = 3
$$
Another fine victory for gradient-based tangent line determination!

### 5.0 Properties of the Gradient Operator

Just like ordinary differentiation, the gradient operator also obeys certain rules that make our lives easier when dealing with sums, products, and quotients of functions.

**Theorem 13.5.3: Properties of the Gradient**
Assume $f$ and $g$ are both differentiable functions, and $k$ is a fixed real number. Then the following laws hold:

*   **Sum/Difference Law:** $\nabla(f \pm g) = \nabla f \pm \nabla g$
*   **Constant Multiple Law:** $\nabla(kf) = k \nabla f$
*   **Product Law:** $\nabla(fg) = f \nabla g + g \nabla f$
*   **Quotient Law:** $\nabla\left(\frac{f}{g}\right) = \frac{g \nabla f - f \nabla g}{g^2}$, provided $g \neq 0$.

These properties extend the familiar rules from single-variable calculus to the multivariable vector context.

#### 5.1 Example 5: Using the Properties of the Gradient

**Problem:** Determine the gradient of the function $f(x,y) = \frac{x^2 - xy^3}{x^2 + y^2}$.

**Solution:**

This is a quotient of two functions. Let $N(x,y) = x^2 - xy^3$ (numerator) and $D(x,y) = x^2 + y^2$ (denominator).
We will use the quotient law for gradients: $\nabla\left(\frac{N}{D}\right) = \frac{D \nabla N - N \nabla D}{D^2}$.

**Step 1: Find the gradient of the numerator, $\nabla N(x,y)$.**
$$
N_x = \frac{\partial}{\partial x}(x^2 - xy^3) = 2x - y^3
$$
$$
N_y = \frac{\partial}{\partial y}(x^2 - xy^3) = -3xy^2
$$
So, $\nabla N(x,y) = \langle 2x - y^3, -3xy^2 \rangle$.

**Step 2: Find the gradient of the denominator, $\nabla D(x,y)$.**
$$
D_x = \frac{\partial}{\partial x}(x^2 + y^2) = 2x
$$
$$
D_y = \frac{\partial}{\partial y}(x^2 + y^2) = 2y
$$
So, $\nabla D(x,y) = \langle 2x, 2y \rangle$.

**Step 3: Apply the quotient rule for gradients.**
$$
\nabla f(x,y) = \frac{(x^2 + y^2) \nabla (x^2 - xy^3) - (x^2 - xy^3) \nabla (x^2 + y^2)}{(x^2 + y^2)^2}
$$
Substitute the gradients we just found:
$$
\nabla f(x,y) = \frac{(x^2 + y^2) \langle 2x - y^3, -3xy^2 \rangle - (x^2 - xy^3) \langle 2x, 2y \rangle}{(x^2 + y^2)^2}
$$
Now, expand the dot product implicit in the vector components. The numerator is a vector difference. The first component of the gradient vector is:
$$
(\nabla f)_x = \frac{(x^2 + y^2)(2x - y^3) - (x^2 - xy^3)(2x)}{(x^2 + y^2)^2}
$$
And the second component is:
$$
(\nabla f)_y = \frac{(x^2 + y^2)(-3xy^2) - (x^2 - xy^3)(2y)}{(x^2 + y^2)^2}
$$
This is a perfectly valid and compact way to write the gradient. While you *could* expand and simplify further, often this form is sufficient unless specific further calculations are required.
The handwritten notes show it in a combined vector format, which is also correct:
$$
\nabla f(x,y) = \left\langle \frac{(x^2 + y^2)(2x - y^3) - (x^2 - xy^3)(2x)}{(x^2 + y^2)^2}, \frac{(x^2 + y^2)(-3xy^2) - (x^2 - xy^3)(2y)}{(x^2 + y^2)^2} \right\rangle
$$
A truly glorious application of the quotient rule in its multivariable form!

### 6.0 Applications in Three Dimensions

The concepts of directional derivatives and gradients extend seamlessly to functions of three (or more!) variables. The principles remain the same: the gradient points in the direction of steepest ascent, its magnitude is that maximal rate, and it's orthogonal to level surfaces.

#### 6.1 Example 6: Applying the Properties of the Directional Derivative to a Function of Three Variables

**Problem:** Suppose the temperature, in Celsius, at a point $(x,y,z)$ in a small region of space over a heat source is modeled by the function
$$
T(x, y, z) = \frac{100}{1 + 2x^2 + y^2 + 0.5z^2}
$$
where $x$ and $y$ (in meters) are orthogonal horizontal displacements and $z$ (also in meters) is the vertical displacement from the heat source. Find the direction from the point $(1,3,2)$ of the **greatest rate of decrease** of temperature. What is the rate of change in that direction?

**Solution:**

**Step 1: Find the gradient of $T(x,y,z)$.**
It's easier to write $T(x,y,z) = 100(1 + 2x^2 + y^2 + 0.5z^2)^{-1}$.
$$
T_x = 100(-1)(1 + 2x^2 + y^2 + 0.5z^2)^{-2} \cdot (4x) = -\frac{400x}{(1 + 2x^2 + y^2 + 0.5z^2)^2}
$$
$$
T_y = 100(-1)(1 + 2x^2 + y^2 + 0.5z^2)^{-2} \cdot (2y) = -\frac{200y}{(1 + 2x^2 + y^2 + 0.5z^2)^2}
$$
$$
T_z = 100(-1)(1 + 2x^2 + y^2 + 0.5z^2)^{-2} \cdot (z) = -\frac{100z}{(1 + 2x^2 + y^2 + 0.5z^2)^2}
$$
So, $\nabla T(x,y,z) = \left\langle -\frac{400x}{D^2}, -\frac{200y}{D^2}, -\frac{100z}{D^2} \right\rangle$, where $D = (1 + 2x^2 + y^2 + 0.5z^2)$.
We can factor out a common term:
$$
\nabla T(x,y,z) = -\frac{100}{(1 + 2x^2 + y^2 + 0.5z^2)^2} \langle 4x, 2y, z \rangle
$$

**Step 2: Evaluate the gradient at the point $(1,3,2)$.**
First, calculate the denominator term at $(1,3,2)$:
$1 + 2(1)^2 + (3)^2 + 0.5(2)^2 = 1 + 2 + 9 + 0.5(4) = 1 + 2 + 9 + 2 = 14$.
So, $D^2 = 14^2 = 196$.

Now, evaluate $\nabla T(1,3,2)$:
$$
\nabla T(1,3,2) = -\frac{100}{(14)^2} \langle 4(1), 2(3), 2 \rangle = -\frac{100}{196} \langle 4, 6, 2 \rangle
$$
We can simplify the fraction $\frac{100}{196}$ by dividing numerator and denominator by 4: $\frac{25}{49}$.
$$
\nabla T(1,3,2) = -\frac{25}{49} \langle 4, 6, 2 \rangle
$$
This vector points in the direction of greatest temperature *increase*.

**Step 3: Determine the direction and rate of greatest decrease.**
The direction of greatest decrease is in the **opposite direction** of the gradient vector, which means we take $-\nabla T(1,3,2)$.
$$
-\nabla T(1,3,2) = - \left( -\frac{25}{49} \langle 4, 6, 2 \rangle \right) = \frac{25}{49} \langle 4, 6, 2 \rangle
$$
This is the direction of greatest decrease. As a decimal, $\frac{25}{49} \approx 0.5102$.
So, the direction vector is approximately $0.5102 \langle 4, 6, 2 \rangle = \langle 2.0408, 3.0612, 1.0204 \rangle$.
(The notes give $(2.04, 3.06, 1.02)$, which is rounded).

The **rate of greatest decrease** is $-|\nabla T(1,3,2)|$.
$$
|\nabla T(1,3,2)| = \left| -\frac{25}{49} \langle 4, 6, 2 \rangle \right| = \frac{25}{49} |\langle 4, 6, 2 \rangle|
$$
$$
|\langle 4, 6, 2 \rangle| = \sqrt{4^2 + 6^2 + 2^2} = \sqrt{16 + 36 + 4} = \sqrt{56} = \sqrt{4 \cdot 14} = 2\sqrt{14}
$$
So, the rate of increase is $\frac{25}{49} (2\sqrt{14}) = \frac{50\sqrt{14}}{49}$.
The rate of greatest **decrease** is $-\frac{50\sqrt{14}}{49}$.
Numerically, $\frac{50\sqrt{14}}{49} \approx \frac{50 \times 3.74166}{49} \approx \frac{187.083}{49} \approx 3.818$.
So, the rate of decrease is approximately $-3.82 \, \text{°C/m}$.

This tells us that if you're at $(1,3,2)$ and want to cool down the fastest, you should move in the direction $\frac{25}{49}\langle 4,6,2 \rangle$, and the temperature will drop by about $3.82$ degrees Celsius for every meter you move in that direction. Brilliant!

### 7.0 Conceptual & Advanced Problems (Inspired by Professor Lundholm)

Now for some mind-bending exercises, to truly test your conceptual understanding!

#### 7.1 Exercise 71: Path of a Heat-Seeking Object

**Problem:** Consider a path on the contour map of a differentiable two-variable function $f(x, y)$ that follows the gradient at each point. Such is a possible path of a heat-seeking object, if $f$ were a temperature function, or a path of steepest ascent on a geographical map. If such a path is parameterized as $(x(t), y(t))$, prove that $\frac{y'(t)}{x'(t)} = \frac{f_y}{f_x}$.

**Proof:**

If a path $(x(t), y(t))$ follows the gradient at each point, it means that the tangent vector to the path, $\langle x'(t), y'(t) \rangle$, is always in the same direction as the gradient vector, $\nabla f(x(t), y(t))$.
This implies that for some scalar function $k(t) > 0$:
$$
\langle x'(t), y'(t) \rangle = k(t) \nabla f(x(t), y(t))
$$
$$
\langle x'(t), y'(t) \rangle = k(t) \langle f_x(x(t), y(t)), f_y(x(t), y(t)) \rangle
$$
This gives us two component equations:
1.  $x'(t) = k(t) f_x(x(t), y(t))$
2.  $y'(t) = k(t) f_y(x(t), y(t))$

If $f_x \neq 0$ and $k(t) \neq 0$, we can divide the second equation by the first:
$$
\frac{y'(t)}{x'(t)} = \frac{k(t) f_y(x(t), y(t))}{k(t) f_x(x(t), y(t))}
$$
$$
\frac{y'(t)}{x'(t)} = \frac{f_y(x(t), y(t))}{f_x(x(t), y(t))}
$$
Since $\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{y'(t)}{x'(t)}$, this shows that the slope of the path of steepest ascent/descent is given by the ratio of the partial derivatives. A truly elegant connection!

#### 7.2 Exercise 72: Finding a Heat-Seeking Path

**Problem:** Use Exercise 71 to find the path of a heat-seeking object if it starts at the point $(5,25)$ on a plane whose temperature is given by the function $T(x, y) = 500 - x^2 - 3y^2$. (Hint: Notice that this is a separable initial value problem. See Section 8.1.)

**Solution:**

**Step 1: Find the partial derivatives of $T(x,y)$.**
$$
T_x = \frac{\partial}{\partial x}(500 - x^2 - 3y^2) = -2x
$$
$$
T_y = \frac{\partial}{\partial y}(500 - x^2 - 3y^2) = -6y
$$

**Step 2: Apply the result from Exercise 71.**
The path of a heat-seeking object follows the gradient. From Exercise 71, we have $\frac{dy}{dx} = \frac{T_y}{T_x}$.
$$
\frac{dy}{dx} = \frac{-6y}{-2x} = \frac{3y}{x}
$$

**Step 3: Solve the separable differential equation.**
This is a first-order separable ordinary differential equation.
$$
\frac{dy}{dx} = \frac{3y}{x}
$$
Separate variables:
$$
\frac{dy}{y} = \frac{3}{x} dx
$$
Integrate both sides:
$$
\int \frac{1}{y} dy = \int \frac{3}{x} dx
$$
$$
\ln|y| = 3 \ln|x| + C
$$
Using logarithm properties, $3 \ln|x| = \ln|x|^3$.
$$
\ln|y| = \ln|x|^3 + C
$$
Exponentiate both sides:
$$
|y| = e^{\ln|x|^3 + C} = e^{\ln|x|^3} e^C
$$
Let $A = \pm e^C$ (a constant, $A \neq 0$). If $y=0$ is possible, we can include $A=0$.
$$
y = A x^3
$$
This is the general equation for paths that follow the gradient for this temperature function.

**Step 4: Use the initial condition to find the specific path.**
The object starts at $(5, 25)$. Substitute $x=5$ and $y=25$ into the general solution:
$$
25 = A (5)^3
$$
$$
25 = A (125)
$$
$$
A = \frac{25}{125} = \frac{1}{5}
$$
So, the specific path of the heat-seeking object is:
$$
y = \frac{1}{5} x^3
$$
This parabola is the trajectory! What an invention!

---

### 8.0 Practice & Reflection: Solidifying Your Knowledge

Alright, my intelligent acolytes! To truly solidify these phenomenal concepts, ponder these questions:

1.  **Unit Vector Criticality:** Why is it absolutely essential that the direction vector $\mathbf{u}$ be a unit vector when defining the directional derivative? What would change if it wasn't?
2.  **Gradient's Power:** Beyond simplifying calculations, what does the gradient vector $\nabla f$ tell you about a function $f$ at a given point $\mathbf{c}$ that partial derivatives alone cannot?
3.  **Orthogonality to Level Sets:** Explain, in your own words, the geometric relationship between the gradient vector and the level curves (or surfaces) of a function. Why does this relationship make sense intuitively?
4.  **Zero Gradient:** What does it signify about a function $f$ at a point $\mathbf{c}$ if $\nabla f(\mathbf{c}) = \mathbf{0}$? Can you think of a familiar type of point in single-variable calculus that exhibits similar behavior?
5.  **Application Scenario:** Imagine you're sailing in a turbulent sea, and the depth of the water is given by $D(x,y)$. You're at coordinates $(x_0,y_0)$. Describe how you would use the directional derivative and gradient to find:
    *   The direction to steer to get to shallower water as quickly as possible.
    *   The direction to steer to maintain the current depth.

"There you have it, a journey into the exquisite world of Directional Derivatives and Gradient Vectors! Keep these powerful tools close, for they will unlock countless mysteries in your future mathematical adventures! Farewell!"