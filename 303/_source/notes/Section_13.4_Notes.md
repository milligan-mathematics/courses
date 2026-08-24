Greetings, esteemed scholars of Milligan University! Professor Hubert J. Farnsworth, your dutiful pedagogical assistant, is delighted to guide you through the intricate pathways of **Math 303: Multivariable Calculus**, specifically **Section 13.4: The Chain Rule for Multivariable Functions**.

Prepare yourselves, for today we shall unlock one of the most powerful and versatile tools in multivariable calculus: the Chain Rule. Much like a finely tuned propulsion system for an interstellar vessel, the Chain Rule allows us to calculate rates of change for functions whose variables themselves are changing, often in complex, interconnected ways. If a quantity $A$ depends on $B$, and $B$ depends on $C$, then how does $A$ depend on $C$? The Chain Rule is our answer, elegantly quantifying these cascades of influence.

---

## 🚀 The Chain Rule: Navigating Interconnected Variables

In single-variable calculus, you learned that if $y = f(u)$ and $u = g(x)$, then $\frac{dy}{dx} = \frac{dy}{du}\frac{du}{dx}$. This allowed us to find the rate of change of $y$ with respect to $x$ by multiplying the rate of change of $y$ with respect to its immediate variable $u$, by the rate of change of $u$ with respect to $x$.

In multivariable calculus, our functions can depend on multiple variables, and these variables, in turn, can depend on other variables, leading to a richer, more complex web of dependencies. The Chain Rule extends beautifully to these scenarios, providing a systematic way to compute these composite rates of change.

### 🔬 **Conceptual Warm-up: The Dynamic Cylinder**

Let's start with a practical, albeit slightly wobbly, example to build our intuition. Imagine a cylindrical container whose volume depends on its radius $r$ and height $h$. The formula for the volume is $V = \pi r^2 h$.

We know how to calculate partial derivatives. Let's compute them:
*   $\frac{\partial V}{\partial r} = \frac{\partial}{\partial r}(\pi r^2 h) = 2\pi r h$
*   $\frac{\partial V}{\partial h} = \frac{\partial}{\partial h}(\pi r^2 h) = \pi r^2$

**What do these mean?**
*   The partial derivative $\frac{\partial V}{\partial r}$ tells us how quickly the volume changes if we slightly increase the radius, while keeping the height constant. For a given $r$ and $h$, a small change $dr$ in radius causes a change in volume of approximately $dV = \frac{\partial V}{\partial r} dr$. This makes sense with the picture: if you make the cylinder wider (increase $r$), the volume will increase. The larger the $r$ and $h$, the more significant a small change in $r$ will be.
*   The partial derivative $\frac{\partial V}{\partial h}$ tells us how quickly the volume changes if we slightly increase the height, while keeping the radius constant. For a given $r$ and $h$, a small change $dh$ in height causes a change in volume of approximately $dV = \frac{\partial V}{\partial h} dh$. This also makes sense: taller cylinders have more volume. The larger the $r$, the more significant a small change in $h$ will be (as the base area $\pi r^2$ is larger).

Now, for a true multivariable twist! Suppose our cylinder is not static, but its radius $r$ and height $h$ are both changing over time, $t$. Perhaps we're observing a very peculiar sand cone, where $r(t) = t$ and $h(t) = 6-t$ for $1 \le t \le 5$. We want to know how the volume $V$ changes over time, i.e., we want to calculate $\frac{dV}{dt}$.

Here, $V$ is a function of $r$ and $h$, and $r$ and $h$ are themselves functions of $t$. This is the perfect setup for the Multivariable Chain Rule! The rule states that to find $\frac{dV}{dt}$:

$$ \frac{dV}{dt} = \frac{\partial V}{\partial r}\frac{dr}{dt} + \frac{\partial V}{\partial h}\frac{dh}{dt} $$

Let's compute the components:
*   $\frac{\partial V}{\partial r} = 2\pi r h$
*   $\frac{\partial V}{\partial h} = \pi r^2$
*   $\frac{dr}{dt} = \frac{d}{dt}(t) = 1$
*   $\frac{dh}{dt} = \frac{d}{dt}(6-t) = -1$

Substituting these into the Chain Rule formula:
$$ \frac{dV}{dt} = (2\pi r h)(1) + (\pi r^2)(-1) $$
$$ \frac{dV}{dt} = 2\pi r h - \pi r^2 $$

Since $r$ and $h$ depend on $t$, we can substitute $r=t$ and $h=6-t$ to express $\frac{dV}{dt}$ purely in terms of $t$:
$$ \frac{dV}{dt} = 2\pi (t)(6-t) - \pi (t)^2 $$
$$ \frac{dV}{dt} = 2\pi (6t - t^2) - \pi t^2 $$
$$ \frac{dV}{dt} = 12\pi t - 2\pi t^2 - \pi t^2 $$
$$ \frac{dV}{dt} = 12\pi t - 3\pi t^2 $$

**At what time $t$ will the volume of the cylinder be at a maximum?**
To find the maximum volume, we set $\frac{dV}{dt} = 0$:
$$ 12\pi t - 3\pi t^2 = 0 $$
$$ 3\pi t (4 - t) = 0 $$
This gives $t=0$ or $t=4$. Since $t$ is in the range $1 \le t \le 5$, we consider $t=4$.
Let's check the endpoints:
*   At $t=1$: $r=1, h=5 \implies V = \pi(1)^2(5) = 5\pi$.
*   At $t=5$: $r=5, h=1 \implies V = \pi(5)^2(1) = 25\pi$.
*   At $t=4$: $r=4, h=2 \implies V = \pi(4)^2(2) = 32\pi$.

The maximum volume occurs at $t=4$, with $V = 32\pi$.
This intuitive example perfectly illustrates why we need the Chain Rule: to understand how a quantity changes when its underlying parameters are themselves in flux.

### 🌳 **Visualizing Dependencies: The Tree Diagram**

A powerful pedagogical tool for understanding the Chain Rule is the **tree diagram**. It visually maps out the dependencies between variables.

*   A variable higher up in the tree depends on the variables immediately below it.
*   Each "branch" represents a partial derivative.
*   To find the derivative of the topmost variable with respect to a bottom-most independent variable, you trace all possible paths from the top to that independent variable, multiplying the partial derivatives along each path, and then summing the results for all paths.

Let's illustrate with the single-variable case: if $y = f(g(x))$.
$y$ depends on $u$, and $u$ depends on $x$.
```
      y
      |
      u
      |
      x
```
Here, $\frac{dy}{dx} = \frac{dy}{du}\frac{du}{dx}$. Simple!

Now, for our dynamic cylinder: $V$ depends on $r$ and $h$. $r$ and $h$ depend on $t$.
```
       V
      / \
     r   h
    /     \
   t       t
```
To find $\frac{dV}{dt}$, we follow the paths: $V \to r \to t$ and $V \to h \to t$.
$\frac{dV}{dt} = (\frac{\partial V}{\partial r}\frac{dr}{dt}) + (\frac{\partial V}{\partial h}\frac{dh}{dt})$. Precisely what we derived!

---

### 🧪 **Core Concept 1: The Chain Rule (Case I)**

This case applies when the outer function depends on two (or more) intermediate variables, and these intermediate variables *all* depend on a *single* independent variable. This is often the case when a function's behavior is observed along a parametric curve.

**Theorem (The Chain Rule - Case I):**
If $z = f(x,y)$ is a differentiable function of $x$ and $y$, and if $x = g(t)$ and $y = h(t)$ are both differentiable functions of a single variable $t$, then the composite function $z = f(g(t), h(t))$ is a differentiable function of $t$, and its derivative is given by:

$$ \frac{dz}{dt} = \frac{\partial z}{\partial x}\frac{dx}{dt} + \frac{\partial z}{\partial y}\frac{dy}{dt} $$

**Tree Diagram for Case I:**
```
       z
      / \
     x   y
    /     \
   t       t
```

**Pedagogical Insight (Professor Lundholm's GPA Analogy):**
Imagine your overall GPA for the semester, $f$, depends on your grade in Calc III, $g(x)$, and your grade in Physics, $h(x)$. Both of these grades, $g$ and $h$, depend on the number of hours, $x$, you study per week. We want to know how your overall GPA changes with respect to the hours you study, $\frac{df}{dx}$.

*   Your GPA ($f$) is the **dependent variable**.
*   Your Calc III grade ($g$) and Physics grade ($h$) are **intermediate variables**.
*   The hours you study per week ($x$) is the **independent variable**.

The Chain Rule then tells us:
$$ \frac{df}{dx} = \frac{\partial f}{\partial g}\frac{dg}{dx} + \frac{\partial f}{\partial h}\frac{dh}{dx} $$

*   $\frac{\partial f}{\partial g}$: How your GPA changes with a small nudge in your Calc III grade (holding Physics grade constant).
*   $\frac{dg}{dx}$: How your Calc III grade changes with a small nudge in study hours.
*   $\frac{\partial f}{\partial h}$: How your GPA changes with a small nudge in your Physics grade (holding Calc III grade constant).
*   $\frac{dh}{dx}$: How your Physics grade changes with a small nudge in study hours.

This formula sums the two ways your study hours *indirectly* affect your GPA: one path through Calc III, and another through Physics. Each path is a product of rates of change. Fascinating!

---

### 📝 **Example 1: Using the Chain Rule (Case I)**

**Problem:** Given $y = u^3v^2$ and $u = x^2$, $v = x^2 - 1$, determine $\frac{dy}{dx}$.

**Solution:**
Here, $y$ depends on $u$ and $v$, and $u$ and $v$ both depend on $x$.
Our tree diagram looks like this:
```
       y
      / \
     u   v
    /     \
   x       x
```
Applying the Chain Rule (Case I) formula:
$$ \frac{dy}{dx} = \frac{\partial y}{\partial u}\frac{du}{dx} + \frac{\partial y}{\partial v}\frac{dv}{dx} $$

First, let's find the individual derivatives:
1.  **Partial derivatives of $y$ with respect to $u$ and $v$:**
    *   $\frac{\partial y}{\partial u} = \frac{\partial}{\partial u}(u^3v^2) = 3u^2v^2$
    *   $\frac{\partial y}{\partial v} = \frac{\partial}{\partial v}(u^3v^2) = 2u^3v$

2.  **Derivatives of $u$ and $v$ with respect to $x$:**
    *   $\frac{du}{dx} = \frac{d}{dx}(x^2) = 2x$
    *   $\frac{dv}{dx} = \frac{d}{dx}(x^2 - 1) = 2x$

Now, substitute these into the Chain Rule formula:
$$ \frac{dy}{dx} = (3u^2v^2)(2x) + (2u^3v)(2x) $$
To express $\frac{dy}{dx}$ solely in terms of $x$, substitute $u=x^2$ and $v=x^2-1$:
$$ \frac{dy}{dx} = 3(x^2)^2(x^2-1)^2(2x) + 2(x^2)^3(x^2-1)(2x) $$
$$ \frac{dy}{dx} = 3x^4(x^2-1)^2(2x) + 2x^6(x^2-1)(2x) $$
$$ \frac{dy}{dx} = 6x^5(x^2-1)^2 + 4x^7(x^2-1) $$
We can factor out common terms, such as $2x^5(x^2-1)$:
$$ \frac{dy}{dx} = 2x^5(x^2-1)[3(x^2-1) + 2x^2] $$
$$ \frac{dy}{dx} = 2x^5(x^2-1)[3x^2-3 + 2x^2] $$
$$ \frac{dy}{dx} = 2x^5(x^2-1)(5x^2-3) $$
And there you have it! The rate of change of $y$ with respect to $x$.

---

### 📝 **Example 2: Rate of Change along a Parametric Curve**

**Problem:** Determine the rate of change with respect to $t$ of the function $f(x, y) = xy$ along the Lissajous curve described parametrically by $x = \sin(2t)$ and $y = \cos(3t)$. Then calculate $f'(t)$ at the specific points corresponding to $t = 0$ and $t = \frac{\pi}{6}$.

**Solution:**
Here, $f$ depends on $x$ and $y$, and both $x$ and $y$ depend on $t$. This is a direct application of Case I.
Our tree diagram:
```
       f
      / \
     x   y
    /     \
   t       t
```
The Chain Rule formula is:
$$ \frac{df}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt} $$

Let's find the necessary derivatives:
1.  **Partial derivatives of $f$ with respect to $x$ and $y$:**
    *   $\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(xy) = y$
    *   $\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(xy) = x$

2.  **Derivatives of $x$ and $y$ with respect to $t$:**
    *   $\frac{dx}{dt} = \frac{d}{dt}(\sin(2t)) = \cos(2t) \cdot 2 = 2\cos(2t)$
    *   $\frac{dy}{dt} = \frac{d}{dt}(\cos(3t)) = -\sin(3t) \cdot 3 = -3\sin(3t)$

Substitute these into the Chain Rule formula:
$$ \frac{df}{dt} = (y)(2\cos(2t)) + (x)(-3\sin(3t)) $$
Now, substitute $x=\sin(2t)$ and $y=\cos(3t)$ to get $f'(t)$ entirely in terms of $t$:
$$ f'(t) = \cos(3t)(2\cos(2t)) + \sin(2t)(-3\sin(3t)) $$
$$ f'(t) = 2\cos(3t)\cos(2t) - 3\sin(2t)\sin(3t) $$

**Geometric Interpretation (Vector Form):**
Notice that this result can also be expressed using the dot product of the gradient vector of $f$ and the tangent vector of the parametric curve.
The gradient of $f$ is $\nabla f = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right\rangle = \langle y, x \rangle$.
The tangent vector of the curve is $\mathbf{r}'(t) = \left\langle \frac{dx}{dt}, \frac{dy}{dt} \right\rangle = \langle 2\cos(2t), -3\sin(3t) \rangle$.
Then, $\frac{df}{dt} = \nabla f \cdot \mathbf{r}'(t) = \langle y, x \rangle \cdot \langle 2\cos(2t), -3\sin(3t) \rangle = y(2\cos(2t)) + x(-3\sin(3t))$, which is precisely what we found! This means $\frac{df}{dt}$ represents the rate of change of $f$ *in the direction of the curve's motion* at any given instant.

Now, let's calculate $f'(t)$ at the specified points:

1.  **At $t=0$:**
    *   $f'(0) = 2\cos(3 \cdot 0)\cos(2 \cdot 0) - 3\sin(2 \cdot 0)\sin(3 \cdot 0)$
    *   $f'(0) = 2\cos(0)\cos(0) - 3\sin(0)\sin(0)$
    *   $f'(0) = 2(1)(1) - 3(0)(0) = 2$

2.  **At $t=\frac{\pi}{6}$:**
    *   $f'\left(\frac{\pi}{6}\right) = 2\cos\left(3 \cdot \frac{\pi}{6}\right)\cos\left(2 \cdot \frac{\pi}{6}\right) - 3\sin\left(2 \cdot \frac{\pi}{6}\right)\sin\left(3 \cdot \frac{\pi}{6}\right)$
    *   $f'\left(\frac{\pi}{6}\right) = 2\cos\left(\frac{\pi}{2}\right)\cos\left(\frac{\pi}{3}\right) - 3\sin\left(\frac{\pi}{3}\right)\sin\left(\frac{\pi}{2}\right)$
    *   $f'\left(\frac{\pi}{6}\right) = 2(0)\left(\frac{1}{2}\right) - 3\left(\frac{\sqrt{3}}{2}\right)(1)$
    *   $f'\left(\frac{\pi}{6}\right) = 0 - \frac{3\sqrt{3}}{2} = -\frac{3\sqrt{3}}{2}$

The values indicate how the function $f(x,y)$ is changing as we move along the Lissajous curve at these particular times. At $t=0$, $f$ is increasing, while at $t=\frac{\pi}{6}$, $f$ is decreasing.

---

### 🧪 **Core Concept 2: The Chain Rule (Case II)**

This case arises when the outer function depends on two (or more) intermediate variables, and these intermediate variables *each* depend on *two or more* independent variables. This leads to partial derivatives for the composite function.

**Theorem (The Chain Rule - Case II):**
If $z = f(u,v)$ is a differentiable function of $u$ and $v$, and if $u = g(x,y)$ and $v = h(x,y)$ are both differentiable functions of $x$ and $y$, then the composite function $z = f(g(x,y), h(x,y))$ is a differentiable function of $x$ and $y$, and its partial derivatives are given by:

$$ \frac{\partial z}{\partial x} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial x} $$
$$ \frac{\partial z}{\partial y} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial y} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial y} $$

**Tree Diagram for Case II:**
```
           z
          / \
         u   v
        /|\ /|\
       x y x y
```
Notice how each intermediate variable ($u, v$) has branches leading to *both* independent variables ($x, y$). This structure allows us to compute the partial derivative with respect to $x$ (collecting all paths ending at $x$) and separately for $y$ (collecting all paths ending at $y$).

---

### 📝 **Example 3: Using a Tree Diagram to Apply the Chain Rule (Case II)**

**Problem:** If $z = e^{u+2v}$ while $u = x^2y$ and $v = y^2 - x$, determine $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$.

**Solution:**
Here, $z$ depends on $u$ and $v$, and $u$ and $v$ both depend on $x$ and $y$. This is a Case II scenario.

First, let's list all the necessary partial derivatives:

1.  **Partial derivatives of $z$ with respect to $u$ and $v$:**
    *   $\frac{\partial z}{\partial u} = \frac{\partial}{\partial u}(e^{u+2v}) = e^{u+2v}$
    *   $\frac{\partial z}{\partial v} = \frac{\partial}{\partial v}(e^{u+2v}) = 2e^{u+2v}$

2.  **Partial derivatives of $u$ with respect to $x$ and $y$:**
    *   $\frac{\partial u}{\partial x} = \frac{\partial}{\partial x}(x^2y) = 2xy$
    *   $\frac{\partial u}{\partial y} = \frac{\partial}{\partial y}(x^2y) = x^2$

3.  **Partial derivatives of $v$ with respect to $x$ and $y$:**
    *   $\frac{\partial v}{\partial x} = \frac{\partial}{\partial x}(y^2 - x) = -1$
    *   $\frac{\partial v}{\partial y} = \frac{\partial}{\partial y}(y^2 - x) = 2y$

Now, let's apply the Chain Rule formulas:

**To find $\frac{\partial z}{\partial x}$:**
$$ \frac{\partial z}{\partial x} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial x} $$
Substitute the calculated partial derivatives:
$$ \frac{\partial z}{\partial x} = (e^{u+2v})(2xy) + (2e^{u+2v})(-1) $$
Factor out $e^{u+2v}$:
$$ \frac{\partial z}{\partial x} = e^{u+2v}(2xy - 2) $$
To express this entirely in terms of $x$ and $y$, substitute $u=x^2y$ and $v=y^2-x$:
$$ \frac{\partial z}{\partial x} = e^{(x^2y) + 2(y^2-x)}(2xy - 2) $$
$$ \frac{\partial z}{\partial x} = (2xy - 2)e^{x^2y + 2y^2 - 2x} $$

**To find $\frac{\partial z}{\partial y}$:**
$$ \frac{\partial z}{\partial y} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial y} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial y} $$
Substitute the calculated partial derivatives:
$$ \frac{\partial z}{\partial y} = (e^{u+2v})(x^2) + (2e^{u+2v})(2y) $$
Factor out $e^{u+2v}$:
$$ \frac{\partial z}{\partial y} = e^{u+2v}(x^2 + 4y) $$
Substitute $u=x^2y$ and $v=y^2-x$:
$$ \frac{\partial z}{\partial y} = (x^2 + 4y)e^{x^2y + 2y^2 - 2x} $$

**Vector Notation for Case II (Professor Lundholm's approach):**
This form of the Chain Rule can also be viewed as a dot product, similar to Example 2.
Let $\nabla z = \left\langle \frac{\partial z}{\partial u}, \frac{\partial z}{\partial v} \right\rangle$.
Let $\mathbf{r}_x = \left\langle \frac{\partial u}{\partial x}, \frac{\partial v}{\partial x} \right\rangle$.
Then $\frac{\partial z}{\partial x} = \nabla z \cdot \mathbf{r}_x$.
Similarly, let $\mathbf{r}_y = \left\langle \frac{\partial u}{\partial y}, \frac{\partial v}{\partial y} \right\rangle$.
Then $\frac{\partial z}{\partial y} = \nabla z \cdot \mathbf{r}_y$.

For this example:
$\nabla z = \langle e^{u+2v}, 2e^{u+2v} \rangle$
$\mathbf{r}_x = \langle 2xy, -1 \rangle$
$\mathbf{r}_y = \langle x^2, 2y \rangle$

So, $\frac{\partial z}{\partial x} = \langle e^{u+2v}, 2e^{u+2v} \rangle \cdot \langle 2xy, -1 \rangle = e^{u+2v}(2xy) + 2e^{u+2v}(-1) = e^{u+2v}(2xy-2)$.
And $\frac{\partial z}{\partial y} = \langle e^{u+2v}, 2e^{u+2v} \rangle \cdot \langle x^2, 2y \rangle = e^{u+2v}(x^2) + 2e^{u+2v}(2y) = e^{u+2v}(x^2+4y)$.
This vector form is concise and powerful for visualizing the contributions.

---

### 🧪 **Core Concept 3: The Chain Rule (General Case)**

The Chain Rule can be extended to any number of variables and any number of levels of dependence.

**Theorem (The Chain Rule - General Case):**
If $y = f(u_1, u_2, \ldots, u_n)$ is a differentiable function of $n$ intermediate variables $u_j$, and each variable $u_j = g_j(x_1, x_2, \ldots, x_m)$ is a differentiable function of $m$ independent variables $x_i$, then the composite function $y = f(g_1(x_1, \ldots, x_m), \ldots, g_n(x_1, \ldots, x_m))$ is a differentiable function of $x_1, \ldots, x_m$. The partial derivative of $y$ with respect to any $x_i$ is given by:

$$ \frac{\partial y}{\partial x_i} = \frac{\partial y}{\partial u_1}\frac{\partial u_1}{\partial x_i} + \frac{\partial y}{\partial u_2}\frac{\partial u_2}{\partial x_i} + \ldots + \frac{\partial y}{\partial u_n}\frac{\partial u_n}{\partial x_i} = \sum_{j=1}^n \frac{\partial y}{\partial u_j}\frac{\partial u_j}{\partial x_i} $$

**Tree Diagram for General Case:**
Imagine $y$ is at the top, $u_1, \ldots, u_n$ are the intermediate layer, and $x_1, \ldots, x_m$ are the independent variables at the bottom. To find $\frac{\partial y}{\partial x_i}$, you sum the products of derivatives along all paths from $y$ to $x_i$.

```
                 y
               / | ... | \
             u_1 u_2   u_n
            /|\ /|\   /|\
           x_1..x_m x_1..x_m x_1..x_m
```

**Vector Form of the Multivariable Chain Rule (as seen in Professor Lundholm's notes and Khan Academy):**
Let $f$ be a function $f(\mathbf{u})$ where $\mathbf{u} = \langle u_1, \ldots, u_n \rangle$.
And let each $u_j$ be a function of independent variables $\mathbf{x} = \langle x_1, \ldots, x_m \rangle$, so $\mathbf{u} = \mathbf{G}(\mathbf{x}) = \langle g_1(\mathbf{x}), \ldots, g_n(\mathbf{x}) \rangle$.
Then the gradient of $f$ with respect to $\mathbf{x}$ is given by:
$$ \nabla_{\mathbf{x}} f = Df(\mathbf{u}) D\mathbf{G}(\mathbf{x}) $$
Where $Df(\mathbf{u})$ is the gradient vector of $f$ with respect to $\mathbf{u}$, and $D\mathbf{G}(\mathbf{x})$ is the Jacobian matrix of $\mathbf{G}$ with respect to $\mathbf{x}$.

More practically for individual partial derivatives:
$\frac{\partial f}{\partial x_i} = \nabla_u f \cdot \frac{\partial \mathbf{u}}{\partial x_i}$
Where $\nabla_u f = \left\langle \frac{\partial f}{\partial u_1}, \ldots, \frac{\partial f}{\partial u_n} \right\rangle$ and $\frac{\partial \mathbf{u}}{\partial x_i} = \left\langle \frac{\partial u_1}{\partial x_i}, \ldots, \frac{\partial u_n}{\partial x_i} \right\rangle$.
This is a concise way to represent the sum.

---

### 📝 **Example 4: Applying the General Chain Rule**

**Problem:** Given $w = 2xy^3 + x^2 - yz^2$ while $x=s-t$, $y=s^2+t^2$, and $z=st$, determine $w_s$ and $w_t$. (Answers may be left in terms of the intermediate and independent variables).

**Solution:**
Here, $w$ depends on $x,y,z$, and $x,y,z$ all depend on $s,t$. This is a general case with three intermediate variables and two independent variables.

Our tree diagram for $w_s$:
```
       w
      / | \
     x  y  z
    /  /   /
   s  s   s
```
And similarly for $w_t$.

The Chain Rule formulas are:
$$ \frac{\partial w}{\partial s} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial s} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial s} + \frac{\partial w}{\partial z}\frac{\partial z}{\partial s} $$
$$ \frac{\partial w}{\partial t} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial t} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial t} + \frac{\partial w}{\partial z}\frac{\partial z}{\partial t} $$

Let's find all the individual partial derivatives:

1.  **Partial derivatives of $w$ with respect to $x, y, z$ (the "outer" function):**
    *   $\frac{\partial w}{\partial x} = \frac{\partial}{\partial x}(2xy^3 + x^2 - yz^2) = 2y^3 + 2x$
    *   $\frac{\partial w}{\partial y} = \frac{\partial}{\partial y}(2xy^3 + x^2 - yz^2) = 6xy^2 - z^2$
    *   $\frac{\partial w}{\partial z} = \frac{\partial}{\partial z}(2xy^3 + x^2 - yz^2) = -2yz$
    *   So, $\nabla w = \langle 2y^3+2x, 6xy^2-z^2, -2yz \rangle$

2.  **Partial derivatives of $x, y, z$ with respect to $s$ and $t$ (the "inner" functions):**
    *   $\frac{\partial x}{\partial s} = \frac{\partial}{\partial s}(s-t) = 1$
    *   $\frac{\partial x}{\partial t} = \frac{\partial}{\partial t}(s-t) = -1$
    *   $\frac{\partial y}{\partial s} = \frac{\partial}{\partial s}(s^2+t^2) = 2s$
    *   $\frac{\partial y}{\partial t} = \frac{\partial}{\partial t}(s^2+t^2) = 2t$
    *   $\frac{\partial z}{\partial s} = \frac{\partial}{\partial s}(st) = t$
    *   $\frac{\partial z}{\partial t} = \frac{\partial}{\partial t}(st) = s$

Now, apply the Chain Rule. Using the compact vector notation from Professor Lundholm's notes ($\nabla w \cdot \mathbf{r}_s$ and $\nabla w \cdot \mathbf{r}_t$):
Let $\mathbf{r}(s,t) = \langle x(s,t), y(s,t), z(s,t) \rangle = \langle s-t, s^2+t^2, st \rangle$.
Then $\mathbf{r}_s = \left\langle \frac{\partial x}{\partial s}, \frac{\partial y}{\partial s}, \frac{\partial z}{\partial s} \right\rangle = \langle 1, 2s, t \rangle$.
And $\mathbf{r}_t = \left\langle \frac{\partial x}{\partial t}, \frac{\partial y}{\partial t}, \frac{\partial z}{\partial t} \right\rangle = \langle -1, 2t, s \rangle$.

**To find $\frac{\partial w}{\partial s}$ ($w_s$):**
$$ w_s = \nabla w \cdot \mathbf{r}_s = \langle 2y^3+2x, 6xy^2-z^2, -2yz \rangle \cdot \langle 1, 2s, t \rangle $$
$$ w_s = (2y^3+2x)(1) + (6xy^2-z^2)(2s) + (-2yz)(t) $$
$$ w_s = 2y^3+2x + 12sxy^2-2sz^2 - 2tyz $$
This expression is left in terms of the intermediate variables ($x,y,z$) and independent variables ($s,t$), as requested. If we needed it solely in terms of $s$ and $t$, we would substitute $x=s-t$, $y=s^2+t^2$, $z=st$. This would be a remarkably long expression, so leaving it this way is perfectly acceptable!

**To find $\frac{\partial w}{\partial t}$ ($w_t$):**
$$ w_t = \nabla w \cdot \mathbf{r}_t = \langle 2y^3+2x, 6xy^2-z^2, -2yz \rangle \cdot \langle -1, 2t, s \rangle $$
$$ w_t = (2y^3+2x)(-1) + (6xy^2-z^2)(2t) + (-2yz)(s) $$
$$ w_t = -2y^3-2x + 12txy^2-2tz^2 - 2syz $$
Again, this expression is in terms of the intermediate variables and independent variables.

This example highlights the power of the Chain Rule in managing complex dependencies. Imagine trying to directly substitute $x,y,z$ into $w$ first and then taking partial derivatives – it would be a nightmarish algebraic mess!

---

### 📝 **Example 5: Using the Chain Rule to Find Second-Order Partial Derivatives**

**Problem:** Assume $z = f(x,y)$ has continuous second-order partial derivatives. If $x = v^2 - u^2$ and $y = uv$, determine $z_{uu}$.

**Solution:**
Finding second-order partial derivatives using the Chain Rule is often tricky because it involves applying the Chain Rule *multiple times*, and sometimes the Product Rule as well. We'll need to be meticulous.

First, let's find the first partial derivatives of $z$ with respect to $u$ and $v$:

**1. Finding $z_u = \frac{\partial z}{\partial u}$:**
Using Chain Rule (Case II, since $z$ depends on $x,y$ and $x,y$ depend on $u,v$):
$$ \frac{\partial z}{\partial u} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial u} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial u} $$
Let's find the derivatives for $x$ and $y$ with respect to $u$:
*   $\frac{\partial x}{\partial u} = \frac{\partial}{\partial u}(v^2 - u^2) = -2u$
*   $\frac{\partial y}{\partial u} = \frac{\partial}{\partial u}(uv) = v$

Substitute these:
$$ z_u = \frac{\partial z}{\partial u} = \frac{\partial z}{\partial x}(-2u) + \frac{\partial z}{\partial y}(v) = -2u z_x + v z_y $$
Here, $z_x$ and $z_y$ are shorthand for $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$, which are themselves functions of $x$ and $y$, and therefore implicitly functions of $u$ and $v$.

**2. Finding $z_v = \frac{\partial z}{\partial v}$ (for completeness, though not strictly needed for $z_{uu}$):**
$$ \frac{\partial z}{\partial v} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial v} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial v} $$
Derivatives for $x$ and $y$ with respect to $v$:
*   $\frac{\partial x}{\partial v} = \frac{\partial}{\partial v}(v^2 - u^2) = 2v$
*   $\frac{\partial y}{\partial v} = \frac{\partial}{\partial v}(uv) = u$
Substitute these:
$$ z_v = \frac{\partial z}{\partial v} = \frac{\partial z}{\partial x}(2v) + \frac{\partial z}{\partial y}(u) = 2v z_x + u z_y $$

**3. Now, let's find $z_{uu} = \frac{\partial}{\partial u}(z_u)$:**
We need to differentiate $z_u = -2u z_x + v z_y$ with respect to $u$.
This requires using the Product Rule for both terms, and the Chain Rule for $z_x$ and $z_y$ (since they are functions of $x(u,v)$ and $y(u,v)$).

$$ z_{uu} = \frac{\partial}{\partial u}(-2u z_x) + \frac{\partial}{\partial u}(v z_y) $$

Let's break down each term:

**Term 1: $\frac{\partial}{\partial u}(-2u z_x)$**
Using the Product Rule $\frac{\partial}{\partial u}(fg) = f'g + fg'$:
Let $f = -2u$ and $g = z_x$.
*   $\frac{\partial f}{\partial u} = -2$
*   $\frac{\partial g}{\partial u} = \frac{\partial}{\partial u}(z_x) = \frac{\partial z_x}{\partial x}\frac{\partial x}{\partial u} + \frac{\partial z_x}{\partial y}\frac{\partial y}{\partial u}$ (applying Chain Rule to $z_x$)
    *   Recall $\frac{\partial x}{\partial u} = -2u$ and $\frac{\partial y}{\partial u} = v$.
    *   So, $\frac{\partial g}{\partial u} = z_{xx}(-2u) + z_{xy}(v) = -2u z_{xx} + v z_{xy}$

Thus, Term 1 becomes:
$$ \frac{\partial}{\partial u}(-2u z_x) = (-2)z_x + (-2u)(-2u z_{xx} + v z_{xy}) $$
$$ = -2z_x + 4u^2 z_{xx} - 2uv z_{xy} $$

**Term 2: $\frac{\partial}{\partial u}(v z_y)$**
Using the Product Rule:
Let $f = v$ and $g = z_y$.
*   $\frac{\partial f}{\partial u} = 0$ (since $v$ is treated as constant when differentiating with respect to $u$, unless $v$ itself depends on $u$, which it doesn't here directly).
*   $\frac{\partial g}{\partial u} = \frac{\partial}{\partial u}(z_y) = \frac{\partial z_y}{\partial x}\frac{\partial x}{\partial u} + \frac{\partial z_y}{\partial y}\frac{\partial y}{\partial u}$ (applying Chain Rule to $z_y$)
    *   Recall $\frac{\partial x}{\partial u} = -2u$ and $\frac{\partial y}{\partial u} = v$.
    *   So, $\frac{\partial g}{\partial u} = z_{yx}(-2u) + z_{yy}(v) = -2u z_{yx} + v z_{yy}$

Thus, Term 2 becomes:
$$ \frac{\partial}{\partial u}(v z_y) = (0)z_y + v(-2u z_{yx} + v z_{yy}) $$
$$ = -2uv z_{yx} + v^2 z_{yy} $$

**Combining Term 1 and Term 2 to get $z_{uu}$:**
$$ z_{uu} = (-2z_x + 4u^2 z_{xx} - 2uv z_{xy}) + (-2uv z_{yx} + v^2 z_{yy}) $$
Since $f$ has continuous second-order partial derivatives, by Clairaut's Theorem (or Schwarz's Theorem), $z_{xy} = z_{yx}$.
$$ z_{uu} = -2z_x + 4u^2 z_{xx} - 2uv z_{xy} - 2uv z_{xy} + v^2 z_{yy} $$
$$ z_{uu} = -2z_x + 4u^2 z_{xx} - 4uv z_{xy} + v^2 z_{yy} $$

This is the final expression for $z_{uu}$. As you can see, second-order derivatives can become quite involved!

---

### 🌟 **Implicit Differentiation via the Chain Rule**

The Chain Rule provides a very elegant and structured way to perform implicit differentiation for functions of multiple variables.

**Single-Variable Review:**
Recall implicit differentiation for $F(x,y)=0$ where $y$ is implicitly defined as a function of $x$. We can think of $F$ as a function $F(x, y(x))$.
Differentiating both sides with respect to $x$:
$$ \frac{d}{dx}F(x, y(x)) = \frac{d}{dx}(0) = 0 $$
Using the Chain Rule for $F(x, y(x))$:
$$ \frac{\partial F}{\partial x}\frac{dx}{dx} + \frac{\partial F}{\partial y}\frac{dy}{dx} = 0 $$
Since $\frac{dx}{dx} = 1$:
$$ \frac{\partial F}{\partial x} + \frac{\partial F}{\partial y}\frac{dy}{dx} = 0 $$
Solving for $\frac{dy}{dx}$:
$$ \frac{dy}{dx} = -\frac{\partial F / \partial x}{\partial F / \partial y} = -\frac{F_x}{F_y} $$
This formula is incredibly useful! It holds provided $F_y \neq 0$.

**Multivariable Case:**
Now, consider an equation $F(x,y,z) = 0$ that implicitly defines $z$ as a function of $x$ and $y$, i.e., $z = f(x,y)$. We want to find $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$.
We treat $F$ as a function of $(x, y, z(x,y))$.

**To find $\frac{\partial z}{\partial x}$:**
Differentiate $F(x, y, z(x,y)) = 0$ with respect to $x$.
Applying the Chain Rule (General Case, with $F$ as the outer function and $x,y,z$ as intermediate variables, all depending on $x$):
$$ \frac{\partial F}{\partial x}\frac{\partial x}{\partial x} + \frac{\partial F}{\partial y}\frac{\partial y}{\partial x} + \frac{\partial F}{\partial z}\frac{\partial z}{\partial x} = 0 $$
Since $x$ and $y$ are independent variables, $\frac{\partial x}{\partial x} = 1$ and $\frac{\partial y}{\partial x} = 0$.
$$ \frac{\partial F}{\partial x}(1) + \frac{\partial F}{\partial y}(0) + \frac{\partial F}{\partial z}\frac{\partial z}{\partial x} = 0 $$
$$ \frac{\partial F}{\partial x} + \frac{\partial F}{\partial z}\frac{\partial z}{\partial x} = 0 $$
Solving for $\frac{\partial z}{\partial x}$:
$$ \frac{\partial z}{\partial x} = -\frac{\partial F / \partial x}{\partial F / \partial z} = -\frac{F_x}{F_z} $$
This formula is valid provided $F_z \neq 0$.

**To find $\frac{\partial z}{\partial y}$:**
Differentiate $F(x, y, z(x,y)) = 0$ with respect to $y$.
$$ \frac{\partial F}{\partial x}\frac{\partial x}{\partial y} + \frac{\partial F}{\partial y}\frac{\partial y}{\partial y} + \frac{\partial F}{\partial z}\frac{\partial z}{\partial y} = 0 $$
Since $x$ and $y$ are independent variables, $\frac{\partial x}{\partial y} = 0$ and $\frac{\partial y}{\partial y} = 1$.
$$ \frac{\partial F}{\partial x}(0) + \frac{\partial F}{\partial y}(1) + \frac{\partial F}{\partial z}\frac{\partial z}{\partial y} = 0 $$
$$ \frac{\partial F}{\partial y} + \frac{\partial F}{\partial z}\frac{\partial z}{\partial y} = 0 $$
Solving for $\frac{\partial z}{\partial y}$:
$$ \frac{\partial z}{\partial y} = -\frac{\partial F / \partial y}{\partial F / \partial z} = -\frac{F_y}{F_z} $$
This formula is also valid provided $F_z \neq 0$.

These formulas simplify implicit differentiation tremendously!

---

### 📝 **Example 6: Using the Chain Rule for Implicit Differentiation (2 variables)**

**Problem:** Find $\frac{dy}{dx}$, given that $x^3 - y^2 = \sin(xy)$.

**Solution:**
First, rearrange the equation so all terms are on one side, defining $F(x,y)=0$:
$$ F(x,y) = x^3 - y^2 - \sin(xy) = 0 $$
Now, calculate the partial derivatives of $F$ with respect to $x$ and $y$:
*   $F_x = \frac{\partial F}{\partial x} = \frac{\partial}{\partial x}(x^3 - y^2 - \sin(xy))$
    *   $F_x = 3x^2 - 0 - \cos(xy) \cdot y$ (using chain rule for $\sin(xy)$ w.r.t. $x$)
    *   $F_x = 3x^2 - y\cos(xy)$

*   $F_y = \frac{\partial F}{\partial y} = \frac{\partial}{\partial y}(x^3 - y^2 - \sin(xy))$
    *   $F_y = 0 - 2y - \cos(xy) \cdot x$ (using chain rule for $\sin(xy)$ w.r.t. $y$)
    *   $F_y = -2y - x\cos(xy)$

Now, apply the implicit differentiation formula:
$$ \frac{dy}{dx} = -\frac{F_x}{F_y} $$
$$ \frac{dy}{dx} = -\frac{3x^2 - y\cos(xy)}{-2y - x\cos(xy)} $$
We can multiply the numerator and denominator by $-1$ to simplify the signs:
$$ \frac{dy}{dx} = \frac{3x^2 - y\cos(xy)}{2y + x\cos(xy)} $$

---

### 📝 **Example 7: Finding Partial Derivatives of an Implicit Function (3 variables)**

**Problem:** Find $z_x$ and $z_y$, given that $x^2y - xz^3 = xyz$.

**Solution:**
First, rearrange the equation to define $F(x,y,z)=0$:
$$ F(x,y,z) = x^2y - xz^3 - xyz = 0 $$
Now, calculate the partial derivatives of $F$ with respect to $x$, $y$, and $z$:

*   $F_x = \frac{\partial F}{\partial x} = \frac{\partial}{\partial x}(x^2y - xz^3 - xyz)$
    *   $F_x = 2xy - z^3 - yz$

*   $F_y = \frac{\partial F}{\partial y} = \frac{\partial}{\partial y}(x^2y - xz^3 - xyz)$
    *   $F_y = x^2 - 0 - xz$

*   $F_z = \frac{\partial F}{\partial z} = \frac{\partial}{\partial z}(x^2y - xz^3 - xyz)$
    *   $F_z = 0 - 3xz^2 - xy$

Now, apply the implicit differentiation formulas:

**To find $z_x = \frac{\partial z}{\partial x}$:**
$$ \frac{\partial z}{\partial x} = -\frac{F_x}{F_z} $$
$$ \frac{\partial z}{\partial x} = -\frac{2xy - z^3 - yz}{-3xz^2 - xy} $$
Multiply numerator and denominator by $-1$ to simplify signs:
$$ \frac{\partial z}{\partial x} = \frac{2xy - z^3 - yz}{3xz^2 + xy} $$

**To find $z_y = \frac{\partial z}{\partial y}$:**
$$ \frac{\partial z}{\partial y} = -\frac{F_y}{F_z} $$
$$ \frac{\partial z}{\partial y} = -\frac{x^2 - xz}{-3xz^2 - xy} $$
Multiply numerator and denominator by $-1$:
$$ \frac{\partial z}{\partial y} = \frac{x^2 - xz}{3xz^2 + xy} $$

These implicit differentiation techniques are invaluable for working with complex relationships between variables without explicitly solving for one in terms of the others.

---

### ➕ **Additional Chain Rule Applications (Professor Lundholm's Problems)**

Let's tackle a few more diverse problems to solidify our understanding.

### 📝 **Problem 67: Changing Volume of a Sand Cone**

**Problem:** Consider a sand cone such as one formed by a child pouring sand out of a bucket. Assume this time that its height is growing at a rate of $0.1$ inches per second, while its radius is growing at $0.05$ inches per second, at the instant when its height is $4$ inches and its radius is $6$ inches. Find the rate of change of the volume of the sand cone at this instant.

**Solution:**
The volume of a cone is $V = \frac{1}{3}\pi r^2 h$.
We are given:
*   $\frac{dh}{dt} = 0.1$ in/s
*   $\frac{dr}{dt} = 0.05$ in/s
*   At the instant of interest: $h = 4$ in, $r = 6$ in.
We want to find $\frac{dV}{dt}$.

Using the Chain Rule (Case I type, similar to our initial cylinder example):
$$ \frac{dV}{dt} = \frac{\partial V}{\partial r}\frac{dr}{dt} + \frac{\partial V}{\partial h}\frac{dh}{dt} $$

First, find the partial derivatives of $V$:
*   $\frac{\partial V}{\partial r} = \frac{\partial}{\partial r}\left(\frac{1}{3}\pi r^2 h\right) = \frac{2}{3}\pi r h$
*   $\frac{\partial V}{\partial h} = \frac{\partial}{\partial h}\left(\frac{1}{3}\pi r^2 h\right) = \frac{1}{3}\pi r^2$

Now, substitute the given values at the instant of interest ($r=6, h=4, \frac{dr}{dt}=0.05, \frac{dh}{dt}=0.1$):
*   At this instant: $\frac{\partial V}{\partial r} = \frac{2}{3}\pi (6)(4) = \frac{48}{3}\pi = 16\pi$
*   At this instant: $\frac{\partial V}{\partial h} = \frac{1}{3}\pi (6)^2 = \frac{36}{3}\pi = 12\pi$

Substitute these into the Chain Rule formula:
$$ \frac{dV}{dt} = (16\pi)(0.05) + (12\pi)(0.1) $$
$$ \frac{dV}{dt} = 0.8\pi + 1.2\pi $$
$$ \frac{dV}{dt} = 2\pi $$

The rate of change of the volume of the sand cone at this instant is $2\pi$ cubic inches per second.

### 📝 **Problem 65: Changing Area of a Circular Sector**

**Problem:** Consider a circular sector of radius $r$ and central angle $\theta$. Suppose that $\theta$ is increasing at a rate of $0.1$ radians per minute, while $r$ is decreasing at a rate of $0.2$ inches per minute. Find the rate of change of the area at the instant when $\theta = 1$ radian and $r = 15$ inches.

**Solution:**
The area of a circular sector is $A = \frac{1}{2}r^2\theta$.
We are given:
*   $\frac{d\theta}{dt} = 0.1$ rad/min
*   $\frac{dr}{dt} = -0.2$ in/min (decreasing rate is negative)
*   At the instant of interest: $\theta = 1$ rad, $r = 15$ in.
We want to find $\frac{dA}{dt}$.

Using the Chain Rule (Case I type):
$$ \frac{dA}{dt} = \frac{\partial A}{\partial r}\frac{dr}{dt} + \frac{\partial A}{\partial \theta}\frac{d\theta}{dt} $$

First, find the partial derivatives of $A$:
*   $\frac{\partial A}{\partial r} = \frac{\partial}{\partial r}\left(\frac{1}{2}r^2\theta\right) = r\theta$
*   $\frac{\partial A}{\partial \theta} = \frac{\partial}{\partial \theta}\left(\frac{1}{2}r^2\theta\right) = \frac{1}{2}r^2$

Now, substitute the given values at the instant of interest ($r=15, \theta=1, \frac{dr}{dt}=-0.2, \frac{d\theta}{dt}=0.1$):
*   At this instant: $\frac{\partial A}{\partial r} = (15)(1) = 15$
*   At this instant: $\frac{\partial A}{\partial \theta} = \frac{1}{2}(15)^2 = \frac{1}{2}(225) = 112.5$

Substitute these into the Chain Rule formula:
$$ \frac{dA}{dt} = (15)(-0.2) + (112.5)(0.1) $$
$$ \frac{dA}{dt} = -3 + 11.25 $$
$$ \frac{dA}{dt} = 8.25 $$

The rate of change of the area of the circular sector at this instant is $8.25$ square inches per minute.

### 📝 **Problem 57: General Chain Rule Tree Diagram**

**Problem:** Use a tree diagram to write out the Chain Rule for the first partial derivatives $f_x$ and $f_y$ of $f(t,u,v,w)$, where $t = t(x,y)$, $u = u(x,y)$, $v = v(x,y)$, and $w = w(x,y)$.

**Solution:**
Here, $f$ depends on four intermediate variables ($t,u,v,w$), and each of these intermediate variables depends on two independent variables ($x,y$). This is a general Chain Rule application.

**Tree Diagram for $f_x$ (and implicitly for $f_y$):**
```
                    f
                  / | | \
                 t  u v  w
                / \ / \ / \ / \
               x  y x  y x  y x  y
```
To find $f_x = \frac{\partial f}{\partial x}$, we trace all paths from $f$ down to $x$, multiplying derivatives along each branch, and then summing them up.

**Formula for $f_x = \frac{\partial f}{\partial x}$:**
$$ \frac{\partial f}{\partial x} = \frac{\partial f}{\partial t}\frac{\partial t}{\partial x} + \frac{\partial f}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial f}{\partial v}\frac{\partial v}{\partial x} + \frac{\partial f}{\partial w}\frac{\partial w}{\partial x} $$

**Formula for $f_y = \frac{\partial f}{\partial y}$:**
Similarly, to find $f_y = \frac{\partial f}{\partial y}$, we trace all paths from $f$ down to $y$.
$$ \frac{\partial f}{\partial y} = \frac{\partial f}{\partial t}\frac{\partial t}{\partial y} + \frac{\partial f}{\partial u}\frac{\partial u}{\partial y} + \frac{\partial f}{\partial v}\frac{\partial v}{\partial y} + \frac{\partial f}{\partial w}\frac{\partial w}{\partial y} $$

These formulas provide a systematic way to compute the partial derivatives of complex composite functions. The tree diagram helps keep track of all the dependencies and ensures no path is missed.

---

## 🤔 **Practice & Reflection: Conceptual Check-in**

1.  **Scenario Analysis:** You are monitoring the temperature $T$ (in degrees Celsius) at a specific point on a metal plate. The temperature $T$ is a function of its coordinates $(x,y)$, i.e., $T(x,y)$. However, the plate is expanding, so its coordinates $(x,y)$ are themselves functions of time $t$, $x(t)$ and $y(t)$.
    *   Draw a tree diagram representing these dependencies.
    *   Write down the Chain Rule formula you would use to find the rate of change of temperature with respect to time, $\frac{dT}{dt}$.
    *   Explain in words what each term in your formula represents.

2.  **Tree Diagram Challenge:** Consider a function $Q$ that depends on variables $r$, $s$, and $t$. Each of these variables ($r,s,t$) in turn depends on variables $x$ and $y$.
    *   Draw a tree diagram for this situation.
    *   Write out the Chain Rule formulas for $\frac{\partial Q}{\partial x}$ and $\frac{\partial Q}{\partial y}$.

3.  **Implicit Chain Rule Justification:** Why is the implicit differentiation formula $\frac{dy}{dx} = -\frac{F_x}{F_y}$ (for $F(x,y)=0$) considered a "Chain Rule" application, even though it looks like a simple ratio of partial derivatives? Briefly explain the underlying mechanism.

---

That concludes our expedition into the fascinating realm of the Multivariable Chain Rule! You've successfully navigated its various cases, from simple parametric curves to complex, interconnected systems, and even mastered its application in implicit differentiation. Keep practicing, and these powerful techniques will become second nature.

Farewell, my clever students! And remember: Knowledge is power, guard it well!
Professor Hubert J. Farnsworth, signing off.