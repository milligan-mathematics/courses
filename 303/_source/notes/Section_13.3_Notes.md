# Math 303 (Multivariable Calculus) – Section 13.3: Partial Derivatives

## 🚀 Title & Overview: Welcome to the Multivariable Frontier!

Good news, everyone! Today, we embark on an exciting journey into the heart of multivariable calculus: **Partial Derivatives!** Just when you thought single-variable derivatives were all the rage, we're ratcheting up the complexity – and the fun!

Remember how in Calc I, a derivative told us the instantaneous rate of change of a function with respect to its *single* independent variable? Well, in the glorious realm of multivariable functions, where $z = f(x,y)$ or $w = f(x,y,z)$, we have multiple independent variables. This means our function's value can change in many directions! A "regular" derivative simply won't cut it.

Enter the **partial derivative**! This ingenious invention allows us to measure the rate of change of a multivariable function when we vary *one* independent variable while holding all others constant. Imagine traversing a mountain landscape. A partial derivative with respect to $x$ tells you how steeply you're climbing if you walk strictly east-west, ignoring any north-south deviations. Similarly, a partial derivative with respect to $y$ tells you about the north-south slope.

We've got quite a bit to cover today, so let's blast off!

**Today's Crucial Topics:**

1.  **Evaluation and Interpretation of Partial Derivatives:** What are they, how do we calculate them, and what do they *mean* geometrically?
2.  **Higher-Order and Mixed Partial Derivatives:** Taking derivatives of derivatives, and discovering a neat trick called Clairaut's Theorem!
3.  **Differentiability and Continuity:** A crucial distinction in multivariable calculus – sometimes partial derivatives exist, but the function isn't even continuous! Madness, I tell you!

## 💡 Core Concepts & Definitions: The Nitty-Gritty

Let's start with the fundamental definitions. Don't let the notation scare you; it's quite logical!

### Definition: Partial Derivative with Respect to $x$

If we have a function $f(x,y)$ of two independent variables, the **partial derivative of $f$ with respect to $x$** at a point $(a,b)$ measures the rate of change of $f$ as only $x$ varies, while $y$ is held constant at $y=b$.

$$ \frac{\partial f}{\partial x}(a,b) = \lim_{h \to 0} \frac{f(a+h, b) - f(a,b)}{h} $$

Notice that this is exactly the definition of a single-variable derivative if you consider $g(x) = f(x,b)$, effectively treating $y$ as a constant. So, to compute $\frac{\partial f}{\partial x}$, we treat $y$ as a constant and differentiate $f$ with respect to $x$ using all our familiar single-variable differentiation rules!

**Geometric Interpretation:** Imagine the surface $z = f(x,y)$. If we fix $y=b$, we are essentially slicing the surface with a plane parallel to the $xz$-plane. This intersection forms a curve. The partial derivative $\frac{\partial f}{\partial x}(a,b)$ gives the slope of the tangent line to this curve at the point $(a,b,f(a,b))$ in the direction of increasing $x$.

**Notation:** You'll see several notations for the partial derivative of $f$ with respect to $x$:
*   $f_x(x,y)$ (subscript notation, very common!)
*   $\frac{\partial f}{\partial x}$ (Leibniz notation, also very common!)
*   $f_1$ or $D_1 f$ or $D_x f$ (less common, but indicates differentiation with respect to the first variable)
*   If $z = f(x,y)$, then we might write $\frac{\partial z}{\partial x}$ or $z_x$.

### Definition: Partial Derivative with Respect to $y$

Similarly, the **partial derivative of $f$ with respect to $y$** at a point $(a,b)$ measures the rate of change of $f$ as only $y$ varies, while $x$ is held constant at $x=a$.

$$ \frac{\partial f}{\partial y}(a,b) = \lim_{h \to 0} \frac{f(a, b+h) - f(a,b)}{h} $$

Here, we treat $x$ as a constant, say $x=a$, and differentiate $f$ with respect to $y$. It's like finding the derivative of $g(y) = f(a,y)$.

**Geometric Interpretation:** If we fix $x=a$, we slice the surface $z = f(x,y)$ with a plane parallel to the $yz$-plane. This intersection forms another curve. The partial derivative $\frac{\partial f}{\partial y}(a,b)$ gives the slope of the tangent line to this curve at the point $(a,b,f(a,b))$ in the direction of increasing $y$.

**Notation:** For the partial derivative of $f$ with respect to $y$:
*   $f_y(x,y)$
*   $\frac{\partial f}{\partial y}$
*   $f_2$ or $D_2 f$ or $D_y f$
*   If $z = f(x,y)$, then we might write $\frac{\partial z}{\partial y}$ or $z_y$.

**General Rule:** To find the partial derivative of $f(x,y)$ with respect to $x$, treat $y$ as a constant and differentiate with respect to $x$. To find the partial derivative of $f(x,y)$ with respect to $y$, treat $x$ as a constant and differentiate with respect to $y$. This process extends naturally to functions of three or more variables!

---

## 🛠️ Detailed Lecture & Worked Examples: Let's Get Our Hands Dirty!

Alright, Futurama fans, let's put these definitions into practice with some prime examples!

### Example 1: Tangent Lines to a Surface (Hawkes & Lundholm's Notes)

Given the function $f(x,y) = x^3y^2 - 2x^2y - 3x + y$, determine $f_x(1,1)$ and $f_y(1,1)$. Then, find equations for $L_1$ and $L_2$, the lines tangent to the surface $z=f(x,y)$ at the point $(1,1)$ and parallel to, respectively, the $xz$-plane and the $yz$-plane.

**Solution:**

**Step 1: Find the partial derivative with respect to $x$, $f_x(x,y)$.**
We treat $y$ as a constant.
$$ f_x(x,y) = \frac{\partial}{\partial x}(x^3y^2 - 2x^2y - 3x + y) $$
$$ f_x(x,y) = 3x^2y^2 - 4xy - 3 + 0 $$
$$ f_x(x,y) = 3x^2y^2 - 4xy - 3 $$

**Step 2: Evaluate $f_x(1,1)$.**
Substitute $x=1$ and $y=1$ into $f_x(x,y)$.
$$ f_x(1,1) = 3(1)^2(1)^2 - 4(1)(1) - 3 $$
$$ f_x(1,1) = 3 - 4 - 3 = -4 $$
This value, $f_x(1,1) = -4$, represents the slope of the tangent line to the surface at $(1,1, f(1,1))$ in the $x$-direction (when $y=1$).

**Step 3: Find the partial derivative with respect to $y$, $f_y(x,y)$.**
We treat $x$ as a constant.
$$ f_y(x,y) = \frac{\partial}{\partial y}(x^3y^2 - 2x^2y - 3x + y) $$
$$ f_y(x,y) = 2x^3y - 2x^2 - 0 + 1 $$
$$ f_y(x,y) = 2x^3y - 2x^2 + 1 $$

**Step 4: Evaluate $f_y(1,1)$.**
Substitute $x=1$ and $y=1$ into $f_y(x,y)$.
$$ f_y(1,1) = 2(1)^3(1) - 2(1)^2 + 1 $$
$$ f_y(1,1) = 2 - 2 + 1 = 1 $$
This value, $f_y(1,1) = 1$, represents the slope of the tangent line to the surface at $(1,1, f(1,1))$ in the $y$-direction (when $x=1$).

**Step 5: Find the $z$-coordinate of the point of tangency.**
We need the actual point $(x,y,z)$ on the surface, so we evaluate $f(1,1)$.
$$ f(1,1) = (1)^3(1)^2 - 2(1)^2(1) - 3(1) + 1 $$
$$ f(1,1) = 1 - 2 - 3 + 1 = -3 $$
So the point of tangency is $(1,1,-3)$.

**Step 6: Find the equation of line $L_1$ (parallel to the $xz$-plane).**
This line is tangent to the curve formed by the intersection of the surface $z=f(x,y)$ and the plane $y=1$.
*   The plane is $y=1$.
*   The point is $(1,1,-3)$.
*   The slope in the $x$-direction is $m_x = f_x(1,1) = -4$.
We can use the point-slope form in the $xz$-plane (where $y=1$ is fixed): $z - z_0 = m_x(x - x_0)$.
$$ z - (-3) = -4(x - 1) $$
$$ z + 3 = -4x + 4 $$
$$ z = -4x + 1 $$
So, the equation for $L_1$ is given by the system of equations:
$$ L_1: \begin{cases} z = -4x + 1 \\ y = 1 \end{cases} $$
Alternatively, in parametric form: $\vec{r}(t) = \langle 1, 1, -3 \rangle + t \langle 1, 0, -4 \rangle$.

**Step 7: Find the equation of line $L_2$ (parallel to the $yz$-plane).**
This line is tangent to the curve formed by the intersection of the surface $z=f(x,y)$ and the plane $x=1$.
*   The plane is $x=1$.
*   The point is $(1,1,-3)$.
*   The slope in the $y$-direction is $m_y = f_y(1,1) = 1$.
Using point-slope form in the $yz$-plane (where $x=1$ is fixed): $z - z_0 = m_y(y - y_0)$.
$$ z - (-3) = 1(y - 1) $$
$$ z + 3 = y - 1 $$
$$ z = y - 4 $$
So, the equation for $L_2$ is given by the system of equations:
$$ L_2: \begin{cases} z = y - 4 \\ x = 1 \end{cases} $$
Alternatively, in parametric form: $\vec{r}(t) = \langle 1, 1, -3 \rangle + t \langle 0, 1, 1 \rangle$.

**Geometric Insight:** We've found two crucial lines. These lines lie on the tangent plane to the surface at $(1,1,-3)$, giving us a localized linear approximation of the surface. Huzzah!

### Example 2: Functions of Three Variables (Hawkes & Lundholm's Notes)

Assuming $x, y,$ and $z$ are independent variables, find the three partial derivatives of the function $f(x,y,z) = x^2 \sin(yz^3) - \ln(xyz)$.

**Solution:**

The mechanical process for finding partial derivatives of functions with more than two variables is the same: treat all variables except the one you're differentiating with respect to as constants.

**1. Find $f_x(x,y,z)$:** Treat $y$ and $z$ as constants.
$$ f_x(x,y,z) = \frac{\partial}{\partial x}(x^2 \sin(yz^3) - \ln(xyz)) $$
For $x^2 \sin(yz^3)$, $\sin(yz^3)$ is a constant multiplier. The derivative of $x^2$ is $2x$.
For $\ln(xyz)$, remember that $\frac{d}{du}(\ln u) = \frac{1}{u} \frac{du}{dx}$. Here $u = xyz$. Since $y$ and $z$ are constants, $\frac{d}{dx}(xyz) = yz \cdot 1 = yz$.
$$ f_x(x,y,z) = 2x \sin(yz^3) - \frac{1}{xyz} (yz) $$
$$ f_x(x,y,z) = 2x \sin(yz^3) - \frac{1}{x} $$

**2. Find $f_y(x,y,z)$:** Treat $x$ and $z$ as constants.
$$ f_y(x,y,z) = \frac{\partial}{\partial y}(x^2 \sin(yz^3) - \ln(xyz)) $$
For $x^2 \sin(yz^3)$, $x^2$ is a constant multiplier. The derivative of $\sin(yz^3)$ with respect to $y$ requires the chain rule: $\cos(yz^3) \cdot \frac{\partial}{\partial y}(yz^3)$. Since $z$ is constant, $\frac{\partial}{\partial y}(yz^3) = z^3$.
For $\ln(xyz)$, using chain rule, $\frac{\partial}{\partial y}(xyz) = xz$.
$$ f_y(x,y,z) = x^2 \cos(yz^3) \cdot (z^3) - \frac{1}{xyz} (xz) $$
$$ f_y(x,y,z) = x^2z^3 \cos(yz^3) - \frac{1}{y} $$

**3. Find $f_z(x,y,z)$:** Treat $x$ and $y$ as constants.
$$ f_z(x,y,z) = \frac{\partial}{\partial z}(x^2 \sin(yz^3) - \ln(xyz)) $$
For $x^2 \sin(yz^3)$, $x^2$ is a constant multiplier. The derivative of $\sin(yz^3)$ with respect to $z$ requires the chain rule: $\cos(yz^3) \cdot \frac{\partial}{\partial z}(yz^3)$. Since $y$ is constant, $\frac{\partial}{\partial z}(yz^3) = y \cdot 3z^2 = 3yz^2$.
For $\ln(xyz)$, using chain rule, $\frac{\partial}{\partial z}(xyz) = xy$.
$$ f_z(x,y,z) = x^2 \cos(yz^3) \cdot (3yz^2) - \frac{1}{xyz} (xy) $$
$$ f_z(x,y,z) = 3x^2yz^2 \cos(yz^3) - \frac{1}{z} $$

These three partial derivatives tell us the instantaneous rate of change of $f$ along the $x$, $y$, and $z$ axes, respectively, at any given point $(x,y,z)$. Phenomenal!

### Example 3: Implicit Differentiation (Hawkes & Lundholm's Notes)

Given the equation $z^2 - 4x^2 - 5y^2 = 0$, determine $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$, wherever they exist.

**Solution:**

In this case, $z$ is implicitly defined as a function of $x$ and $y$, i.e., $z=z(x,y)$. We'll use implicit differentiation, similar to how you learned it in single-variable calculus, but now keeping track of which variable we're differentiating with respect to and which are constants.

**1. Find $\frac{\partial z}{\partial x}$:**
Differentiate both sides of the equation with respect to $x$, treating $y$ as a constant. Remember to apply the chain rule to terms involving $z$ (since $z$ is a function of $x$).
$$ \frac{\partial}{\partial x}(z^2 - 4x^2 - 5y^2) = \frac{\partial}{\partial x}(0) $$
$$ 2z \frac{\partial z}{\partial x} - 8x - 0 = 0 $$
Now, solve for $\frac{\partial z}{\partial x}$:
$$ 2z \frac{\partial z}{\partial x} = 8x $$
$$ \frac{\partial z}{\partial x} = \frac{8x}{2z} $$
$$ \frac{\partial z}{\partial x} = \frac{4x}{z} $$
This partial derivative exists as long as $z \neq 0$.

**2. Find $\frac{\partial z}{\partial y}$:**
Differentiate both sides of the equation with respect to $y$, treating $x$ as a constant. Again, use the chain rule for terms involving $z$.
$$ \frac{\partial}{\partial y}(z^2 - 4x^2 - 5y^2) = \frac{\partial}{\partial y}(0) $$
$$ 2z \frac{\partial z}{\partial y} - 0 - 10y = 0 $$
Now, solve for $\frac{\partial z}{\partial y}$:
$$ 2z \frac{\partial z}{\partial y} = 10y $$
$$ \frac{\partial z}{\partial y} = \frac{10y}{2z} $$
$$ \frac{\partial z}{\partial y} = \frac{5y}{z} $$
This partial derivative also exists as long as $z \neq 0$.

**Note:** If we wanted to express these entirely in terms of $x$ and $y$, we could solve the original equation for $z$: $z = \pm \sqrt{4x^2+5y^2}$, then substitute this into our partial derivative expressions. But often, leaving it in terms of $x, y, z$ is perfectly acceptable and simpler!

### 💻 Technology Note: Finding Partial Derivatives

For complex functions, symbolic computation software like WolframAlpha, Maple, or Mathematica can be incredibly helpful for finding partial derivatives. For example, to find $f_x$ for $f(x,y) = x^2 \sin(yz^3) - \ln(xyz)$ in WolframAlpha, you might type `D[x^2 sin(y z^3) - ln(x y z), x]`. While they're useful tools for verification, understanding the underlying process is crucial for your mathematical development, you know, for science!

### Example 4: Estimating Propagated Error (Hawkes Slides)

Partial derivatives are not just for slopes; they're fantastic for estimating how errors in measurements propagate through calculations. Let's consider a practical scenario.

Suppose we are measuring the radius $r$ and height $h$ of a right circular cylinder, and these measurements have potential errors $\Delta r$ and $\Delta h$. We want to estimate the maximum propagated error in the calculated volume $V$.

**Solution:**

**Step 1: Write down the formula for the volume.**
The volume of a right circular cylinder is $V(r,h) = \pi r^2 h$.

**Step 2: Understand the concept of the total differential.**
For a function $f(x,y)$, the total differential $df$ is given by:
$$ dV = \frac{\partial V}{\partial r} dr + \frac{\partial V}{\partial h} dh $$
This differential $dV$ approximates the change in $V$, $\Delta V$, when $r$ changes by $dr$ (or $\Delta r$) and $h$ changes by $dh$ (or $\Delta h$).

**Step 3: Calculate the partial derivatives.**
*   Partial derivative with respect to $r$: Treat $h$ as a constant.
    $$ \frac{\partial V}{\partial r} = \frac{\partial}{\partial r}(\pi r^2 h) = 2\pi r h $$
*   Partial derivative with respect to $h$: Treat $r$ as a constant.
    $$ \frac{\partial V}{\partial h} = \frac{\partial}{\partial h}(\pi r^2 h) = \pi r^2 $$

**Step 4: Substitute the partial derivatives into the total differential.**
$$ dV = (2\pi r h) dr + (\pi r^2) dh $$

**Step 5: Estimate the maximum propagated error.**
To find the maximum possible propagated error, we assume the errors in $r$ and $h$ contribute in the same direction, meaning we take the absolute values of the terms. We also replace $dr$ and $dh$ with the error magnitudes, $\Delta r$ and $\Delta h$.
$$ \Delta V \approx |dV| = \left| \frac{\partial V}{\partial r} \right| |\Delta r| + \left| \frac{\partial V}{\partial h} \right| |\Delta h| $$
$$ \Delta V \approx |2\pi r h| |\Delta r| + |\pi r^2| |\Delta h| $$
Since $r$ and $h$ are typically positive dimensions, this simplifies to:
$$ \Delta V \approx 2\pi r h |\Delta r| + \pi r^2 |\Delta h| $$

**Step 6: (Optional) Calculate the Relative Error.**
The relative error is the estimated error divided by the actual value:
$$ \text{Relative Error} = \frac{\Delta V}{V} = \frac{2\pi r h |\Delta r| + \pi r^2 |\Delta h|}{\pi r^2 h} $$
$$ \text{Relative Error} = \frac{2 |\Delta r|}{r} + \frac{|\Delta h|}{h} $$
This tells us the error as a fraction or percentage of the total volume. Quite handy for engineers and scientists trying to keep their experiments within tolerance!

---

## 🔬 TOPIC 2: Higher-Order and Mixed Partial Derivatives

Just like in single-variable calculus where you can take second, third, or even higher derivatives, we can do the same with partial derivatives! And because we have multiple variables, we can mix and match which variable we differentiate with respect to at each step.

### Notation for Higher-Order Partial Derivatives

*   **Second-order partial derivatives with respect to the same variable:**
    *   $\frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right) = \frac{\partial^2 f}{\partial x^2} = f_{xx}$
    *   $\frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right) = \frac{\partial^2 f}{\partial y^2} = f_{yy}$

*   **Mixed second-order partial derivatives:** These involve differentiating with respect to different variables. The order matters in the notation, but as we'll soon see, often not in the result!
    *   $\frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right) = \frac{\partial^2 f}{\partial y \partial x} = f_{xy}$
        *   **Important:** When using Leibniz notation $\frac{\partial^2 f}{\partial y \partial x}$, the variable closest to $f$ (here $x$) indicates the *first* differentiation, and the variable farther away (here $y$) indicates the *second* differentiation.
        *   When using subscript notation $f_{xy}$, the variable on the left (here $x$) indicates the *first* differentiation, and the variable on the right (here $y$) indicates the *second* differentiation. **This is crucial to remember and often a source of confusion!** I'll be clear in my examples.
    *   $\frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right) = \frac{\partial^2 f}{\partial x \partial y} = f_{yx}$

### Example 5: Finding Second-Order Partial Derivatives (Hawkes & Lundholm's Notes)

Determine all second-order partial derivatives of $f(x,y) = x \sin y - e^{xy^2}$.

**Solution:**

**Step 1: Find the first-order partial derivatives.**

*   **$f_x$:** Treat $y$ as a constant.
    $$ f_x(x,y) = \frac{\partial}{\partial x}(x \sin y - e^{xy^2}) $$
    $$ f_x(x,y) = \sin y - e^{xy^2} \cdot \frac{\partial}{\partial x}(xy^2) $$
    $$ f_x(x,y) = \sin y - e^{xy^2} (y^2) $$
    $$ f_x(x,y) = \sin y - y^2 e^{xy^2} $$

*   **$f_y$:** Treat $x$ as a constant.
    $$ f_y(x,y) = \frac{\partial}{\partial y}(x \sin y - e^{xy^2}) $$
    $$ f_y(x,y) = x \cos y - e^{xy^2} \cdot \frac{\partial}{\partial y}(xy^2) $$
    $$ f_y(x,y) = x \cos y - e^{xy^2} (2xy) $$
    $$ f_y(x,y) = x \cos y - 2xy e^{xy^2} $$

**Step 2: Find the second-order partial derivatives.**

*   **$f_{xx}$:** Differentiate $f_x$ with respect to $x$. Treat $y$ as a constant.
    $$ f_{xx}(x,y) = \frac{\partial}{\partial x}(\sin y - y^2 e^{xy^2}) $$
    $$ f_{xx}(x,y) = 0 - y^2 \cdot e^{xy^2} \cdot \frac{\partial}{\partial x}(xy^2) $$
    $$ f_{xx}(x,y) = -y^2 e^{xy^2} (y^2) $$
    $$ f_{xx}(x,y) = -y^4 e^{xy^2} $$

*   **$f_{yy}$:** Differentiate $f_y$ with respect to $y$. Treat $x$ as a constant. This requires the product rule for the second term.
    $$ f_{yy}(x,y) = \frac{\partial}{\partial y}(x \cos y - 2xy e^{xy^2}) $$
    $$ f_{yy}(x,y) = -x \sin y - [ (2x) \cdot \frac{\partial}{\partial y}(y e^{xy^2}) + (y e^{xy^2}) \cdot \frac{\partial}{\partial y}(2x) ] $$
    Product rule for $y e^{xy^2}$: $\frac{\partial}{\partial y}(y) \cdot e^{xy^2} + y \cdot \frac{\partial}{\partial y}(e^{xy^2}) = e^{xy^2} + y \cdot e^{xy^2} (2xy)$
    $$ f_{yy}(x,y) = -x \sin y - [ 2x (e^{xy^2} + 2xy^2 e^{xy^2}) + 0 ] $$
    $$ f_{yy}(x,y) = -x \sin y - 2x e^{xy^2} - 4x^2y^2 e^{xy^2} $$
    $$ f_{yy}(x,y) = -x \sin y - 2x e^{xy^2} (1 + 2xy^2) $$

*   **$f_{xy}$:** Differentiate $f_x$ with respect to $y$. Treat $x$ as a constant. This requires the product rule for the second term.
    $$ f_{xy}(x,y) = \frac{\partial}{\partial y}(\sin y - y^2 e^{xy^2}) $$
    $$ f_{xy}(x,y) = \cos y - [ \frac{\partial}{\partial y}(y^2) e^{xy^2} + y^2 \frac{\partial}{\partial y}(e^{xy^2}) ] $$
    $$ f_{xy}(x,y) = \cos y - [ 2y e^{xy^2} + y^2 e^{xy^2} (2xy) ] $$
    $$ f_{xy}(x,y) = \cos y - 2y e^{xy^2} - 2xy^3 e^{xy^2} $$
    $$ f_{xy}(x,y) = \cos y - 2y e^{xy^2} (1 + xy^2) $$

*   **$f_{yx}$:** Differentiate $f_y$ with respect to $x$. Treat $y$ as a constant. This requires the product rule for the second term.
    $$ f_{yx}(x,y) = \frac{\partial}{\partial x}(x \cos y - 2xy e^{xy^2}) $$
    $$ f_{yx}(x,y) = \cos y - [ \frac{\partial}{\partial x}(2xy) e^{xy^2} + 2xy \frac{\partial}{\partial x}(e^{xy^2}) ] $$
    $$ f_{yx}(x,y) = \cos y - [ (2y) e^{xy^2} + 2xy e^{xy^2} (y^2) ] $$
    $$ f_{yx}(x,y) = \cos y - 2y e^{xy^2} - 2xy^3 e^{xy^2} $$
    $$ f_{yx}(x,y) = \cos y - 2y e^{xy^2} (1 + xy^2) $$

Notice anything? Indeed, $f_{xy}$ and $f_{yx}$ are the same! This isn't a coincidence; it's due to a rather elegant theorem!

### Theorem: Clairaut's Theorem (Schwarz's Theorem)

If $f(x,y)$ and its partial derivatives $f_x, f_y, f_{xy},$ and $f_{yx}$ are all defined on an open region $R$ containing the point $(a,b)$, **and if $f_{xy}$ and $f_{yx}$ are continuous at $(a,b)$**, then
$$ f_{xy}(a,b) = f_{yx}(a,b) $$
This is a truly magnificent result! It means that under reasonable continuity conditions (which are met by most functions we encounter), the order of differentiation for mixed partials doesn't matter. You can differentiate with respect to $x$ then $y$, or $y$ then $x$, and get the same result! This can save you a lot of calculation if one order is significantly easier than the other.

### Example 6: Applying Clairaut's Theorem (Hawkes & Lundholm's Notes)

Given $z = x^3y + \frac{y \sin y^2}{y^2+3}$, find $z_{yx}$.

**Solution:**

We need to find $z_{yx}$, which means we differentiate with respect to $y$ first, then with respect to $x$.
Since $z_{xy} = z_{yx}$ by Clairaut's Theorem (and this function is well-behaved), we could also calculate $z_{xy}$ if it were easier. In this case, $z_y$ is a bit messy, but then differentiating with respect to $x$ will simplify things, since only the first term has $x$.

**Step 1: Find $z_y$.**
$$ z_y = \frac{\partial}{\partial y}\left(x^3y + \frac{y \sin y^2}{y^2+3}\right) $$
For the first term, $\frac{\partial}{\partial y}(x^3y) = x^3$.
For the second term, we need the quotient rule and chain rule. This term is solely a function of $y$, so $x$ is treated as a constant in this entire expression.
Let $u = y \sin y^2$ and $v = y^2+3$.
$u' = \frac{\partial}{\partial y}(y \sin y^2) = (1)\sin y^2 + y(\cos y^2 \cdot 2y) = \sin y^2 + 2y^2 \cos y^2$.
$v' = \frac{\partial}{\partial y}(y^2+3) = 2y$.
So, $\frac{\partial}{\partial y}\left(\frac{y \sin y^2}{y^2+3}\right) = \frac{(\sin y^2 + 2y^2 \cos y^2)(y^2+3) - (y \sin y^2)(2y)}{(y^2+3)^2}$.
This looks quite involved. Let's call the second term $g(y)$.
$$ z_y = x^3 + \frac{(\sin y^2 + 2y^2 \cos y^2)(y^2+3) - 2y^2 \sin y^2}{(y^2+3)^2} $$

**Step 2: Find $z_{yx}$.**
Now we differentiate $z_y$ with respect to $x$. Since the second term $g(y)$ has no $x$ dependence, its derivative with respect to $x$ is $0$.
$$ z_{yx} = \frac{\partial}{\partial x}\left(x^3 + \frac{(\sin y^2 + 2y^2 \cos y^2)(y^2+3) - 2y^2 \sin y^2}{(y^2+3)^2}\right) $$
$$ z_{yx} = \frac{\partial}{\partial x}(x^3) + \frac{\partial}{\partial x}(g(y)) $$
$$ z_{yx} = 3x^2 + 0 $$
$$ z_{yx} = 3x^2 $$
Even though $z_y$ was complex, $z_{yx}$ turned out to be quite simple because the second term was purely a function of $y$, making its partial derivative with respect to $x$ zero! That's the power of strategic differentiation!

### Example 7: Finding Higher-Order Mixed Partial Derivatives (Hawkes & Lundholm's Notes)

Given the function $f(x,y,z) = 2x^2yz^2 - x \sin(yz) + yz^4$, compute $f_{zxyz}$ and $f_{yxzz}$.

**Solution:**

Let's follow the standard interpretation for subscript notation, where the derivatives are taken from left to right. So $f_{zxyz}$ means $f \rightarrow z \rightarrow x \rightarrow y \rightarrow z$. And $f_{yxzz}$ means $f \rightarrow y \rightarrow x \rightarrow z \rightarrow z$.
*Note: Lundholm's notes follow the Leibniz notation order for the subscript, meaning $f_{zxyz} = \frac{\partial}{\partial z} \frac{\partial}{\partial y} \frac{\partial}{\partial x} (f_z)$, so the differentiation order is $f \xrightarrow{z} f_z \xrightarrow{x} f_{zx} \xrightarrow{y} f_{zxy} \xrightarrow{z} f_{zxyz}$. We will follow this order as shown in the template.*

**1. Compute $f_{zxyz}$**
Order of differentiation: First with respect to $z$, then $x$, then $y$, then $z$.

*   **$f_z$:** (Treat $x,y$ as constants)
    $$ f_z(x,y,z) = \frac{\partial}{\partial z}(2x^2yz^2 - x \sin(yz) + yz^4) $$
    $$ f_z(x,y,z) = 4x^2yz - x \cos(yz) \cdot (y) + 4yz^3 $$
    $$ f_z(x,y,z) = 4x^2yz - xy \cos(yz) + 4yz^3 $$

*   **$f_{zx}$:** (Differentiate $f_z$ with respect to $x$. Treat $y,z$ as constants)
    $$ f_{zx}(x,y,z) = \frac{\partial}{\partial x}(4x^2yz - xy \cos(yz) + 4yz^3) $$
    $$ f_{zx}(x,y,z) = 8xyz - y \cos(yz) \cdot (1) + 0 $$
    $$ f_{zx}(x,y,z) = 8xyz - y \cos(yz) $$

*   **$f_{zxy}$:** (Differentiate $f_{zx}$ with respect to $y$. Treat $x,z$ as constants)
    $$ f_{zxy}(x,y,z) = \frac{\partial}{\partial y}(8xyz - y \cos(yz)) $$
    $$ f_{zxy}(x,y,z) = 8xz \cdot (1) - [\frac{\partial}{\partial y}(y) \cos(yz) + y \frac{\partial}{\partial y}(\cos(yz))] $$
    $$ f_{zxy}(x,y,z) = 8xz - [1 \cdot \cos(yz) + y (-\sin(yz) \cdot z)] $$
    $$ f_{zxy}(x,y,z) = 8xz - \cos(yz) + yz \sin(yz) $$

*   **$f_{zxyz}$:** (Differentiate $f_{zxy}$ with respect to $z$. Treat $x,y$ as constants)
    $$ f_{zxyz}(x,y,z) = \frac{\partial}{\partial z}(8xz - \cos(yz) + yz \sin(yz)) $$
    $$ f_{zxyz}(x,y,z) = 8x \cdot (1) - (-\sin(yz) \cdot y) + [\frac{\partial}{\partial z}(yz) \sin(yz) + yz \frac{\partial}{\partial z}(\sin(yz))] $$
    $$ f_{zxyz}(x,y,z) = 8x + y \sin(yz) + [y \sin(yz) + yz (\cos(yz) \cdot y)] $$
    $$ f_{zxyz}(x,y,z) = 8x + 2y \sin(yz) + y^2z \cos(yz) $$

**2. Compute $f_{yxzz}$**
Order of differentiation: First with respect to $y$, then $x$, then $z$, then $z$ again.

*   **$f_y$:** (Treat $x,z$ as constants)
    $$ f_y(x,y,z) = \frac{\partial}{\partial y}(2x^2yz^2 - x \sin(yz) + yz^4) $$
    $$ f_y(x,y,z) = 2x^2z^2 \cdot (1) - x \cos(yz) \cdot (z) + z^4 \cdot (1) $$
    $$ f_y(x,y,z) = 2x^2z^2 - xz \cos(yz) + z^4 $$

*   **$f_{yx}$:** (Differentiate $f_y$ with respect to $x$. Treat $y,z$ as constants)
    $$ f_{yx}(x,y,z) = \frac{\partial}{\partial x}(2x^2z^2 - xz \cos(yz) + z^4) $$
    $$ f_{yx}(x,y,z) = 4xz^2 - z \cos(yz) \cdot (1) + 0 $$
    $$ f_{yx}(x,y,z) = 4xz^2 - z \cos(yz) $$

*   **$f_{yxz}$:** (Differentiate $f_{yx}$ with respect to $z$. Treat $x,y$ as constants)
    $$ f_{yxz}(x,y,z) = \frac{\partial}{\partial z}(4xz^2 - z \cos(yz)) $$
    $$ f_{yxz}(x,y,z) = 4x(2z) - [\frac{\partial}{\partial z}(z) \cos(yz) + z \frac{\partial}{\partial z}(\cos(yz))] $$
    $$ f_{yxz}(x,y,z) = 8xz - [1 \cdot \cos(yz) + z (-\sin(yz) \cdot y)] $$
    $$ f_{yxz}(x,y,z) = 8xz - \cos(yz) + yz \sin(yz) $$

*   **$f_{yxzz}$:** (Differentiate $f_{yxz}$ with respect to $z$. Treat $x,y$ as constants)
    $$ f_{yxzz}(x,y,z) = \frac{\partial}{\partial z}(8xz - \cos(yz) + yz \sin(yz)) $$
    $$ f_{yxzz}(x,y,z) = 8x - (-\sin(yz) \cdot y) + [\frac{\partial}{\partial z}(yz) \sin(yz) + yz \frac{\partial}{\partial z}(\sin(yz))] $$
    $$ f_{yxzz}(x,y,z) = 8x + y \sin(yz) + [y \sin(yz) + yz (\cos(yz) \cdot y)] $$
    $$ f_{yxzz}(x,y,z) = 8x + 2y \sin(yz) + y^2z \cos(yz) $$

**Observation:** As predicted by Clairaut's Theorem (extended to higher orders and more variables, assuming continuity), $f_{zxyz}$ and $f_{yxzz}$ yield the same result! This confirms that the order of differentiation for mixed partials generally doesn't matter, which is a glorious simplification in our mathematical universe!

### Example 8: Verifying a Solution of a Partial Differential Equation (Hawkes Slides)

The wave equation $u_{tt} = c^2 u_{xx}$ models the motion of a waveform as it travels along a string. The function $u(x,t)$ is the displacement of a point $x$ units from one end of the string at time $t$, and the constant $c$ is determined by physical characteristics. Show that the function $u(x,t) = \sin(x-ct)$ is a solution of $u_{tt} = c^2 u_{xx}$.

**Solution:**

A Partial Differential Equation (PDE) is an equation involving an unknown function of multiple independent variables and its partial derivatives. To show $u(x,t) = \sin(x-ct)$ is a solution, we need to compute its second partial derivatives with respect to $t$ and $x$ and substitute them into the PDE.

**1. Calculate $u_t$ (first partial derivative with respect to $t$):**
Treat $x$ and $c$ as constants. Use the chain rule with $u$-substitution, where $k = x-ct$. Then $\frac{\partial k}{\partial t} = -c$.
$$ u_t = \frac{\partial}{\partial t}(\sin(x-ct)) = \cos(x-ct) \cdot \frac{\partial}{\partial t}(x-ct) $$
$$ u_t = \cos(x-ct) \cdot (-c) = -c \cos(x-ct) $$

**2. Calculate $u_{tt}$ (second partial derivative with respect to $t$):**
Differentiate $u_t$ with respect to $t$.
$$ u_{tt} = \frac{\partial}{\partial t}(-c \cos(x-ct)) = -c \cdot (-\sin(x-ct)) \cdot \frac{\partial}{\partial t}(x-ct) $$
$$ u_{tt} = c \sin(x-ct) \cdot (-c) = -c^2 \sin(x-ct) $$

**3. Calculate $u_x$ (first partial derivative with respect to $x$):**
Treat $t$ and $c$ as constants. Use the chain rule with $k = x-ct$. Then $\frac{\partial k}{\partial x} = 1$.
$$ u_x = \frac{\partial}{\partial x}(\sin(x-ct)) = \cos(x-ct) \cdot \frac{\partial}{\partial x}(x-ct) $$
$$ u_x = \cos(x-ct) \cdot (1) = \cos(x-ct) $$

**4. Calculate $u_{xx}$ (second partial derivative with respect to $x$):**
Differentiate $u_x$ with respect to $x$.
$$ u_{xx} = \frac{\partial}{\partial x}(\cos(x-ct)) = -\sin(x-ct) \cdot \frac{\partial}{\partial x}(x-ct) $$
$$ u_{xx} = -\sin(x-ct) \cdot (1) = -\sin(x-ct) $$

**5. Verify the PDE:**
Substitute $u_{tt}$ and $u_{xx}$ into the wave equation $u_{tt} = c^2 u_{xx}$:
$$ -c^2 \sin(x-ct) = c^2 (-\sin(x-ct)) $$
$$ -c^2 \sin(x-ct) = -c^2 \sin(x-ct) $$
The equation holds true! Therefore, $u(x,t) = \sin(x-ct)$ is indeed a solution to the one-dimensional wave equation. Huzzah, physics works!

---

## 🤯 TOPIC 3: Differentiability and Continuity

Now, for a truly mind-bending revelation, prepare your brains! In single-variable calculus, if a function is differentiable at a point, it *must* be continuous at that point. Furthermore, if the derivative exists at a point, it's pretty close to being continuous.

However, in the multivariable world, things get weird. The mere existence of **all** partial derivatives at a point is **NOT** sufficient to guarantee differentiability, and shockingly, it's also **NOT** sufficient to guarantee continuity at that point! This is a crucial distinction that often trips up new students of multivariable calculus.

### Example 9: Partial Derivatives Exist, but Not Continuous (Hawkes & Lundholm's Notes)

Consider the function $f: \mathbb{R}^2 \to \mathbb{R}$ defined by:
$$ f(x,y) = \begin{cases} 1 & \text{if } xy=0 \\ 0 & \text{if } xy \neq 0 \end{cases} $$
This means $f(x,y)=1$ if $(x,y)$ lies on either the $x$-axis ($y=0$) or the $y$-axis ($x=0$). For all other points, $f(x,y)=0$. Let's examine this function at the origin $(0,0)$.

**Solution:**

**1. Evaluate $f(0,0)$.**
Since $x=0$, $xy=0$, so $f(0,0)=1$.

**2. Calculate $f_x(0,0)$ using the limit definition.**
$$ f_x(0,0) = \lim_{h \to 0} \frac{f(0+h, 0) - f(0,0)}{h} $$
Since $y=0$, $f(h,0)=1$ for any $h \neq 0$.
$$ f_x(0,0) = \lim_{h \to 0} \frac{1 - 1}{h} = \lim_{h \to 0} \frac{0}{h} = 0 $$
So, $f_x(0,0) = 0$. The partial derivative with respect to $x$ exists at the origin! This means that if you approach the origin strictly along the $x$-axis, the function value is constantly 1, so its rate of change in that direction is 0.

**3. Calculate $f_y(0,0)$ using the limit definition.**
$$ f_y(0,0) = \lim_{k \to 0} \frac{f(0, 0+k) - f(0,0)}{k} $$
Since $x=0$, $f(0,k)=1$ for any $k \neq 0$.
$$ f_y(0,0) = \lim_{k \to 0} \frac{1 - 1}{k} = \lim_{k \to 0} \frac{0}{k} = 0 $$
So, $f_y(0,0) = 0$. The partial derivative with respect to $y$ also exists at the origin! Similarly, approaching along the $y$-axis shows a constant value of 1.

**4. Examine continuity at $(0,0)$.**
For $f(x,y)$ to be continuous at $(0,0)$, we need $\lim_{(x,y) \to (0,0)} f(x,y) = f(0,0)$. We know $f(0,0)=1$.
Let's evaluate the limit:
Consider approaching $(0,0)$ along any path *not* on the axes. For example, along the line $y=x$.
For any point $(x,x)$ where $x \neq 0$, $xy = x^2 \neq 0$. So, $f(x,x) = 0$.
Therefore, $\lim_{(x,x) \to (0,0)} f(x,x) = \lim_{x \to 0} 0 = 0$.
Since we found paths where the limit is $0$ (along $y=x$) and paths where the function is $1$ (along $x$-axis or $y$-axis, but these don't quite fit the limit definition's open disk requirement as a path *to* the point), the limit $\lim_{(x,y) \to (0,0)} f(x,y)$ **does not exist** (or it takes on different values along different paths leading to the point).
Specifically, if we pick any small disk around $(0,0)$, there will be points where $f(x,y)=0$ (e.g., $f(0.1, 0.1) = 0$) and points where $f(x,y)=1$ (e.g., $f(0.1, 0) = 1$). This means the limit doesn't converge to a single value.

Thus, $f(x,y)$ is **not continuous** at $(0,0)$, even though both partial derivatives $f_x(0,0)$ and $f_y(0,0)$ exist! Utter chaos! This highlights that partial derivatives only give information about changes along specific axial directions, not the function's behavior in all directions.

### Definition: Differentiability of Multivariable Functions

So, if existence of partial derivatives isn't enough, what *does* it mean for a multivariable function to be differentiable? It means that the function can be well-approximated by a linear function near that point.

For a function $f: \mathbb{R}^2 \to \mathbb{R}$, $f$ is **differentiable at $(a,b)$** if $f_x(a,b)$ and $f_y(a,b)$ exist and the increment $\Delta f = f(a+\Delta x, b+\Delta y) - f(a,b)$ can be written in the form:
$$ \Delta f = f_x(a,b) \Delta x + f_y(a,b) \Delta y + \epsilon_1 \Delta x + \epsilon_2 \Delta y $$
where $\epsilon_1 \to 0$ and $\epsilon_2 \to 0$ as $(\Delta x, \Delta y) \to (0,0)$.

This definition means that the error in the linear approximation ($f_x \Delta x + f_y \Delta y$) goes to zero faster than $\Delta x$ and $\Delta y$ do. It's a more stringent condition than just the existence of partial derivatives.

For a function $f: \mathbb{R}^3 \to \mathbb{R}$, $f$ is **differentiable at $(a,b,c)$** if $f_x(a,b,c)$, $f_y(a,b,c)$, and $f_z(a,b,c)$ exist and the increment $\Delta f = f(a+\Delta x, b+\Delta y, c+\Delta z) - f(a,b,c)$ satisfies:
$$ \Delta f = f_x(a,b,c) \Delta x + f_y(a,b,c) \Delta y + f_z(a,b,c) \Delta z + \epsilon_1 \Delta x + \epsilon_2 \Delta y + \epsilon_3 \Delta z $$
where $\epsilon_1, \epsilon_2, \epsilon_3 \to 0$ as $(\Delta x, \Delta y, \Delta z) \to (0,0,0)$.

### Theorem: The Increment Theorem of Differentiability

While existence of partial derivatives doesn't guarantee differentiability, there's a practical test that often does!

If the partial derivatives $f_x(x,y)$ and $f_y(x,y)$ exist throughout an open region $R$ containing the point $(a,b)$, **and if $f_x$ and $f_y$ are both continuous at $(a,b)$**, then $f$ is **differentiable at $(a,b)$**.

This is our saving grace! If the partial derivatives are themselves continuous, then the function is differentiable. This is usually easy to check for most functions we encounter.

### Theorem: Differentiability Implies Continuity

Finally, let's restore some order to the universe! The connection between differentiability and continuity *does* hold in the right direction:

If a function $f$ is **differentiable at a point**, then $f$ is **continuous at that point**.

**Proof Sketch:**
Let $f$ be differentiable at $(a,b)$. This means we can write:
$$ \Delta f = f_x(a,b) \Delta x + f_y(a,b) \Delta y + \epsilon_1 \Delta x + \epsilon_2 \Delta y $$
where $\epsilon_1 \to 0$ and $\epsilon_2 \to 0$ as $(\Delta x, \Delta y) \to (0,0)$.
Now, consider the limit of $\Delta f$ as $(\Delta x, \Delta y) \to (0,0)$:
$$ \lim_{(\Delta x, \Delta y) \to (0,0)} \Delta f = f_x(a,b)(0) + f_y(a,b)(0) + (0)(0) + (0)(0) = 0 $$
Since $\Delta f = f(a+\Delta x, b+\Delta y) - f(a,b)$, we have:
$$ \lim_{(\Delta x, \Delta y) \to (0,0)} [f(a+\Delta x, b+\Delta y) - f(a,b)] = 0 $$
$$ \lim_{(\Delta x, \Delta y) \to (0,0)} f(a+\Delta x, b+\Delta y) = f(a,b) $$
This is precisely the definition of continuity at $(a,b)$! So, if a function is "smooth enough" to be differentiable, it must also be continuous. Phew!

## 🧠 Practice & Reflection: Time to Flex Your Brain Muscles!

Alright, you magnificent students! You've absorbed a veritable supernova of information. Now, let's solidify your understanding with a few conceptual check-ins. Don't worry, these won't cost you an arm and a leg, just a bit of brainpower!

1.  **Conceptual Distillation:** In your own words, what is the fundamental difference between how a regular derivative (from Calc I) and a partial derivative measure change? How does the "holding other variables constant" aspect manifest in a real-world scenario (like temperature on a map)?

2.  **Clairaut's Clarity:** Why is Clairaut's Theorem so useful? Can you think of a function (or describe its properties) for which $f_{xy}$ and $f_{yx}$ might *not* be equal at a particular point? (Hint: Think about the conditions for the theorem!)

3.  **The Continuity Conundrum:** Explain why the existence of both $f_x(a,b)$ and $f_y(a,b)$ is insufficient to guarantee continuity for $f(x,y)$ at $(a,b)$. Relate this back to Example 9 – what does that function "look like" at the origin that causes this weirdness?

4.  **Differentiability Deciphered:** If you are given a function $f(x,y)$ and asked to determine if it is differentiable at a point $(a,b)$, what is the most practical theorem you would use to make this determination, and what steps would you take?

That's all for today, my intellectual adventurers! You've just taken a monumental leap into the world of multivariable calculus. Keep those calculators humming and those brains buzzing! Farewell, for now!