Good news, everyone! Today, we embark on a truly exhilarating journey into the heart of Multivariable Calculus: **Limits and Continuity of Multivariable Functions!** Prepare yourselves for a conceptual leap from the cozy confines of one-dimensional analysis to the sprawling, wondrous landscapes of higher dimensions.

As your esteemed pedagogical assistant, Professor Hubert J. Farnsworth, I will guide you through the intricate definitions, ingenious methods, and the occasional glorious explosion of mathematical insight that this section demands. Fear not, for with keen observation and a dash of algebraic dexterity, we shall conquer these multivariable marvels!

---

# Math 303: Multivariable Calculus – Section 13.2 Lecture Notes

## 🧪 Title & Overview: To Infinity and Beyond! (With Limits and Continuity!)

Welcome back, intrepid mathematicians! In single-variable calculus, we learned about limits as a way to describe the behavior of a function as its input approaches a certain value, and continuity as the property of a function having no abrupt jumps or breaks. Now, we extend these fundamental ideas to functions of multiple variables.

Why is this important, you ask? Precisely! Because in the real world, phenomena rarely depend on just one variable. Temperature in a room depends on position $(x,y,z)$, economic models juggle dozens of inputs, and gravitational fields are influenced by multiple masses. Understanding how these multivariable functions behave near a point, and whether they do so "smoothly," is crucial for everything from optimization to differential equations.

Today, we will:
*   Define what a **limit** means for a function of $n$ variables using the rigorous $\epsilon$-$\delta$ framework.
*   Explore strategies for **evaluating multivariable limits**, including techniques to show a limit *does not exist* and methods for algebraic simplification.
*   Review the **Extended Limit Laws** for multivariable functions.
*   Define **continuity** for multivariable functions and understand its implications.
*   Identify properties of **continuous multivariable functions**, including compositions.

Let's put on our thinking caps and dive headfirst into the mathematical abyss!

---

## 🔬 Core Concepts & Definitions: The Fabric of Our Mathematical Universe

Our journey begins with the bedrock of all analysis: the formal definition of a limit. Prepare for a glorious display of Greek letters!

### Definition: Limit of a Real-Valued Function of $n$ Variables

Let $f$ be a function mapping its domain $D \subseteq \mathbb{R}^n$ into $\mathbb{R}$, and let $c = (c_1, c_2, \ldots, c_n)$ be a point in either $D$ or the boundary of $D$. We say that the **limit of $f$ as $x$ approaches $c$ is $L$**, and we write:

$$ \lim_{x \to c} f(x) = L $$

if for every real number $\epsilon > 0$ there is a number $\delta > 0$ such that $|f(x) - L| < \epsilon$ whenever $x \in D$ and $0 < ||x - c|| < \delta$.

**Now, let's break this down, shall we?**

*   **$x = (x_1, x_2, \ldots, x_n)$**: This is our input vector in $n$-dimensional space, $\mathbb{R}^n$.
*   **$c = (c_1, c_2, \ldots, c_n)$**: This is the point we're approaching in $\mathbb{R}^n$.
*   **$L$**: This is the limit value, a single real number.
*   **$\epsilon > 0$**: This represents a tiny error tolerance for the *output* values of $f(x)$. We want $f(x)$ to be "close" to $L$.
*   **$\delta > 0$**: This represents a tiny distance tolerance for the *input* values $x$. We need to find a $\delta$ such that if $x$ is within $\delta$ distance of $c$ (but not equal to $c$), then $f(x)$ will be within $\epsilon$ distance of $L$.
*   **$||x - c||$**: This is the **Euclidean distance** between the points $x$ and $c$ in $\mathbb{R}^n$. Recall that the notation $||x - c||$ denotes the Euclidean distance between two points $x$ and $c$ in $\mathbb{R}^n$. So, if $x = (x_1, x_2, \ldots, x_n)$ and $c = (c_1, c_2, \ldots, c_n)$, then:
    $$ ||x - c|| = \sqrt{(x_1 - c_1)^2 + (x_2 - c_2)^2 + \ldots + (x_n - c_n)^2} $$
    For functions of two variables, $x = (x,y)$ and $c = (c_1, c_2)$, this becomes $||(x,y) - (c_1,c_2)|| = \sqrt{(x-c_1)^2 + (y-c_2)^2}$.

This definition is essentially the same as in single-variable calculus, but instead of moving along a number line, we can approach the point $c$ from *any* direction within an $n$-dimensional "ball" centered at $c$. For the limit $L$ to exist, $f(x)$ must approach the *same* value $L$ regardless of the path taken to $c$. If we can find two different paths that yield different limiting values, then the limit **does not exist!** Huzzah!

### Strategies for Proving Limits: A Farnsworthian Guide

When attempting to determine if a limit exists, one might employ several strategies, depending on the function's demeanor.

#### Proving a Limit Does Not Exist: The "Two Paths" Method
This is a robust method, often used as a first resort:
1.  **Identify Two Paths:** Find two distinct paths that approach the point $c$. Common paths include:
    *   Along the $x$-axis (set $y=0$, $z=0$, etc.)
    *   Along the $y$-axis (set $x=0$, $z=0$, etc.)
    *   Along lines $y=mx$ or $y=mx^k$.
    *   Along parabolas $y=x^2$.
    *   Along polar coordinates ($x=r\cos\theta, y=r\sin\theta$).
2.  **Evaluate Limits Along Each Path:** Calculate $\lim_{x \to c} f(x)$ for each chosen path.
3.  **Compare Results:** If the limits along the two paths are different, then the overall multivariable limit $\lim_{x \to c} f(x)$ **does not exist**. Sweet zombie Jesus, it's that simple!

#### Proving a Limit Does Exist: Direct Substitution or the $\epsilon$-$\delta$ Argument
If the "two paths" method doesn't yield different limits (or you suspect the limit exists), you have two primary avenues:
1.  **Direct Substitution (with Algebra):**
    *   Try plugging in the point $c$ directly. If the function is well-behaved (e.g., a polynomial, rational function where the denominator is non-zero at $c$), this might be your answer!
    *   Sometimes, a bit of algebraic manipulation (factoring, rationalizing, canceling common terms) is necessary *before* direct substitution can occur. This relies heavily on the Extended Limit Laws.
2.  **The $\epsilon$-$\delta$ Argument:**
    *   This is the rigorous, definitive way to prove a limit exists.
    *   Given an $\epsilon > 0$, you must find a $\delta > 0$ (often in terms of $\epsilon$) such that if $0 < ||x - c|| < \delta$, then $|f(x) - L| < \epsilon$.
    *   This usually involves manipulating the expression $|f(x) - L|$ and relating it to $||x - c||$.

### Theorem: Extended Limit Laws

Just as in single-variable calculus, limits of multivariable functions obey certain laws that allow us to calculate complex limits from simpler ones.

Let $f$ and $g$ be two real-valued functions of $n$ variables such that both $\lim_{x \to c} f(x)$ and $\lim_{x \to c} g(x)$ exist, where $c \in \mathbb{R}^n$ is a fixed point. Let $k$ be a fixed real number. Then the following laws hold:

*   **Sum/Difference Law:**
    $$ \lim_{x \to c} [f(x) \pm g(x)] = \lim_{x \to c} f(x) \pm \lim_{x \to c} g(x) $$
*   **Constant Multiple Law:**
    $$ \lim_{x \to c} [k f(x)] = k \lim_{x \to c} f(x) $$
*   **Product Law:**
    $$ \lim_{x \to c} [f(x) g(x)] = \left( \lim_{x \to c} f(x) \right) \left( \lim_{x \to c} g(x) \right) $$
*   **Quotient Law:**
    $$ \lim_{x \to c} \frac{f(x)}{g(x)} = \frac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)}, \quad \text{provided } \lim_{x \to c} g(x) \neq 0 $$
*   **Rational Power Law:**
    $$ \lim_{x \to c} (f(x))^{a/b} = \left( \lim_{x \to c} f(x) \right)^{a/b} $$
    (where $a$ and $b$ are nonzero integers with no common factor, provided $\lim_{x \to c} f(x) \ge 0$ if $b$ is even).

### Definition: Continuity of a Multivariable Function at a Point

Ah, continuity! The property that makes functions well-behaved, smooth, and predictable.

Given a function $f: D \to \mathbb{R}$ and a point $c \in D$, where $D \subseteq \mathbb{R}^n$, we say $f$ is **continuous at $c$** if:

$$ \lim_{x \to c} f(x) = f(c) $$

This seemingly simple definition actually encapsulates three critical conditions for continuity at a point $c$:
1.  **$f(c)$ must be defined:** The point $c$ must be in the domain of $f$.
2.  **$\lim_{x \to c} f(x)$ must exist:** The limit must approach a single, finite value.
3.  **$\lim_{x \to c} f(x) = f(c)$:** The limit must equal the actual function value at $c$.

We say $f$ is **continuous** if $f$ is continuous at every point in its domain $D$.

### Properties of Continuous Functions

Much like their single-variable counterparts, continuous multivariable functions possess several convenient properties:

*   **Polynomials:** Any polynomial function in $n$ variables is continuous everywhere in $\mathbb{R}^n$.
*   **Rational Functions:** Any rational function (a ratio of two polynomials) is continuous everywhere in its domain (i.e., where the denominator is not zero).
*   **Sums, Differences, Products, and Quotients:** If $f$ and $g$ are continuous at $c$, then $f \pm g$ and $fg$ are continuous at $c$. If $g(c) \neq 0$, then $f/g$ is also continuous at $c$.
*   **Compositions:** A glorious theorem! If $f: D \to \mathbb{R}$ is continuous at $c \in D$ (where $D \subseteq \mathbb{R}^n$), and $g: I \to \mathbb{R}$ is a single-variable function continuous at $f(c)$ (where $I$ is an interval containing $f(c)$), then the composition $(g \circ f)(x) = g(f(x))$ is continuous at $c$. (This can be extended to vector-valued outer functions as well, but this scalar case is most common here).

---

## 🚀 Detailed Lecture & Worked Examples: Observe and Learn!

Now, to the exciting part! Let's apply these concepts to some tangible problems. Pay attention, for these techniques are vital!

### Example 1: Determining Whether a Limit Exists for a Function of Two Variables

**Problem:** Determine whether the function $f(x,y) = \frac{x^2 - y^2}{x^2 + y^2}$ has a limit at the point $(0,0)$. (Note that $f$ is not defined at $(0,0)$.)

**Solution:**
Aha! This function is undefined at $(0,0)$, which often suggests the limit might not exist. This is a perfect candidate for our "two paths" method! If we can find two paths approaching $(0,0)$ that yield different limits, we're golden.

Let's try approaching $(0,0)$ along some standard paths:

**Path 1: Along the $x$-axis.**
This means $y=0$. As $(x,y) \to (0,0)$ along the $x$-axis, $x \to 0$.
Substituting $y=0$ into $f(x,y)$:
$$ f(x,0) = \frac{x^2 - 0^2}{x^2 + 0^2} = \frac{x^2}{x^2} = 1 \quad \text{for } x \neq 0 $$
So, the limit along the $x$-axis is:
$$ \lim_{(x,0) \to (0,0)} f(x,0) = \lim_{x \to 0} 1 = 1 $$

**Path 2: Along the $y$-axis.**
This means $x=0$. As $(x,y) \to (0,0)$ along the $y$-axis, $y \to 0$.
Substituting $x=0$ into $f(x,y)$:
$$ f(0,y) = \frac{0^2 - y^2}{0^2 + y^2} = \frac{-y^2}{y^2} = -1 \quad \text{for } y \neq 0 $$
So, the limit along the $y$-axis is:
$$ \lim_{(0,y) \to (0,0)} f(0,y) = \lim_{y \to 0} (-1) = -1 $$

**Conclusion:**
Since the limit along the $x$-axis is $1$ and the limit along the $y$-axis is $-1$, and these two values are different ($1 \neq -1$), the limit of $f(x,y)$ as $(x,y) \to (0,0)$ **does not exist**.

*(For a fascinating visual, you can explore this function's graph at https://www.geogebra.org/3d/ktr4py32)*. Observe how approaching from different directions on the $xy$-plane leads to different heights on the surface!

### Example 2: Finding Limits of Functions of Two Variables (Algebraic Manipulation)

These limits require a bit of algebraic wizardry before direct substitution.

**a. Problem:** Find $\lim_{(x,y)\to(0,0)} \frac{xy - y^2}{\sqrt{x} - \sqrt{y}}$.

**Solution:**
If we try to plug in $(0,0)$ directly, we get $\frac{0}{0}$, an indeterminate form. We need to perform some algebraic manipulation. The presence of square roots suggests rationalizing the denominator.

First, factor the numerator: $xy - y^2 = y(x - y)$.
$$ \lim_{(x,y)\to(0,0)} \frac{y(x - y)}{\sqrt{x} - \sqrt{y}} $$
Now, rationalize the denominator by multiplying the numerator and denominator by the conjugate, $\sqrt{x} + \sqrt{y}$:
$$ \lim_{(x,y)\to(0,0)} \frac{y(x - y)}{(\sqrt{x} - \sqrt{y})} \cdot \frac{(\sqrt{x} + \sqrt{y})}{(\sqrt{x} + \sqrt{y})} $$
$$ = \lim_{(x,y)\to(0,0)} \frac{y(x - y)(\sqrt{x} + \sqrt{y})}{(\sqrt{x})^2 - (\sqrt{y})^2} $$
$$ = \lim_{(x,y)\to(0,0)} \frac{y(x - y)(\sqrt{x} + \sqrt{y})}{x - y} $$
Aha! We have a common factor of $(x-y)$ in the numerator and denominator. We can cancel this factor, as long as $x \neq y$. Since we are taking a limit as $(x,y) \to (0,0)$, we are considering points *near* $(0,0)$ but not necessarily *at* $(0,0)$. The points where $x=y$ form a line, and we are not restricted to approaching along that line. So, for points where $x \neq y$, the cancellation is legitimate.

$$ = \lim_{(x,y)\to(0,0)} y(\sqrt{x} + \sqrt{y}) $$
Now, this expression is a product of continuous functions, so we can use direct substitution:
$$ = 0(\sqrt{0} + \sqrt{0}) = 0(0) = 0 $$
Thus, $\lim_{(x,y)\to(0,0)} \frac{xy - y^2}{\sqrt{x} - \sqrt{y}} = 0$.

**b. Problem:** Find $\lim_{(x,y)\to(1,4)} \frac{\sqrt{x+3} - \sqrt{y}}{x-y+3}$.

**Solution:**
Again, direct substitution yields $\frac{\sqrt{1+3} - \sqrt{4}}{1-4+3} = \frac{\sqrt{4} - 2}{0} = \frac{0}{0}$, an indeterminate form. Let's rationalize the numerator this time.

Multiply the numerator and denominator by the conjugate of the numerator, $\sqrt{x+3} + \sqrt{y}$:
$$ \lim_{(x,y)\to(1,4)} \frac{\sqrt{x+3} - \sqrt{y}}{x-y+3} \cdot \frac{\sqrt{x+3} + \sqrt{y}}{\sqrt{x+3} + \sqrt{y}} $$
$$ = \lim_{(x,y)\to(1,4)} \frac{(\sqrt{x+3})^2 - (\sqrt{y})^2}{(x-y+3)(\sqrt{x+3} + \sqrt{y})} $$
$$ = \lim_{(x,y)\to(1,4)} \frac{x+3 - y}{(x-y+3)(\sqrt{x+3} + \sqrt{y})} $$
Notice that the term $x+3-y$ in the numerator is the same as $x-y+3$ in the denominator! We can cancel these common factors, as long as $x-y+3 \neq 0$.
$$ = \lim_{(x,y)\to(1,4)} \frac{1}{\sqrt{x+3} + \sqrt{y}} $$
Now, we can use direct substitution, as the denominator will not be zero:
$$ = \frac{1}{\sqrt{1+3} + \sqrt{4}} = \frac{1}{\sqrt{4} + \sqrt{4}} = \frac{1}{2 + 2} = \frac{1}{4} $$
Thus, $\lim_{(x,y)\to(1,4)} \frac{\sqrt{x+3} - \sqrt{y}}{x-y+3} = \frac{1}{4}$.

### Example 3: Finding a Limit of a Function of Two Variables (The $\epsilon$-$\delta$ Proof!)

**Problem:** Find $\lim_{(x,y)\to(0,0)} \frac{5x^2y}{x^2 + y^2}$ if the limit exists.

**Solution:**
Again, direct substitution gives $\frac{0}{0}$. Let's try the "two paths" method first.

**Path 1: Along the $x$-axis ($y=0$).**
$$ \lim_{(x,0) \to (0,0)} \frac{5x^2(0)}{x^2 + 0^2} = \lim_{x \to 0} \frac{0}{x^2} = \lim_{x \to 0} 0 = 0 $$

**Path 2: Along the $y$-axis ($x=0$).**
$$ \lim_{(0,y) \to (0,0)} \frac{5(0)^2y}{0^2 + y^2} = \lim_{y \to 0} \frac{0}{y^2} = \lim_{y \to 0} 0 = 0 $$

**Path 3: Along $y=mx$ (any line through the origin).**
$$ \lim_{(x,mx) \to (0,0)} \frac{5x^2(mx)}{x^2 + (mx)^2} = \lim_{x \to 0} \frac{5mx^3}{x^2 + m^2x^2} = \lim_{x \to 0} \frac{5mx^3}{x^2(1 + m^2)} $$
For $x \neq 0$, we can cancel $x^2$:
$$ = \lim_{x \to 0} \frac{5mx}{1 + m^2} = \frac{5m(0)}{1 + m^2} = 0 $$
All these paths give a limit of $0$. This *suggests* the limit might be $0$, but it doesn't *prove* it. To prove it definitively, we must use the $\epsilon$-$\delta$ definition.

**The $\epsilon$-$\delta$ Proof for $L=0$:**

We want to show that for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $0 < ||(x,y) - (0,0)|| < \delta$, then $|f(x,y) - 0| < \epsilon$.
In other words, if $0 < \sqrt{x^2+y^2} < \delta$, then $\left|\frac{5x^2y}{x^2+y^2} - 0\right| < \epsilon$.

Let's work with the expression $|f(x,y) - 0|$:
$$ \left|\frac{5x^2y}{x^2+y^2}\right| = \frac{|5x^2y|}{x^2+y^2} = 5 \frac{x^2|y|}{x^2+y^2} $$
Now, we need to relate this to $\sqrt{x^2+y^2}$.
Observe that $x^2 \le x^2+y^2$. Therefore, $\frac{x^2}{x^2+y^2} \le 1$. (This is a glorious trick!)
So, we have:
$$ 5 \frac{x^2|y|}{x^2+y^2} \le 5 \cdot 1 \cdot |y| = 5|y| $$
Furthermore, we know that $|y| = \sqrt{y^2}$. And since $y^2 \le x^2+y^2$, we have $\sqrt{y^2} \le \sqrt{x^2+y^2}$.
So, $|y| \le \sqrt{x^2+y^2}$.

Combining these inequalities:
$$ \left|\frac{5x^2y}{x^2+y^2}\right| \le 5|y| \le 5\sqrt{x^2+y^2} $$
Aha! We have successfully related $|f(x,y) - 0|$ to $\sqrt{x^2+y^2}$, which is $||(x,y) - (0,0)||$.
We want this final expression to be less than $\epsilon$:
$$ 5\sqrt{x^2+y^2} < \epsilon $$
If we choose $\delta$ such that $\sqrt{x^2+y^2} < \delta$, then we need $5\delta < \epsilon$.
Therefore, we can choose $\delta = \frac{\epsilon}{5}$.

**Formal Proof:**
Given any $\epsilon > 0$, choose $\delta = \frac{\epsilon}{5}$.
Then, whenever $0 < ||(x,y) - (0,0)|| < \delta$, we have $0 < \sqrt{x^2+y^2} < \delta$.
Consider $|f(x,y) - 0|$:
$$ |f(x,y) - 0| = \left|\frac{5x^2y}{x^2+y^2}\right| = 5 \frac{x^2|y|}{x^2+y^2} $$
Since $x^2 \le x^2+y^2$, we know that $\frac{x^2}{x^2+y^2} \le 1$.
Also, $|y| = \sqrt{y^2} \le \sqrt{x^2+y^2}$.
Thus,
$$ |f(x,y) - 0| \le 5 \cdot 1 \cdot |y| \le 5 \sqrt{x^2+y^2} $$
Since $\sqrt{x^2+y^2} < \delta$, we have:
$$ |f(x,y) - 0| < 5\delta $$
By our choice of $\delta = \frac{\epsilon}{5}$, we get:
$$ |f(x,y) - 0| < 5 \left(\frac{\epsilon}{5}\right) = \epsilon $$
Therefore, $\lim_{(x,y)\to(0,0)} \frac{5x^2y}{x^2+y^2} = 0$.

*(You can visualize this function at https://www.geogebra.org/3d/rapncnpe. Notice how it smoothly approaches $0$ at the origin, forming a sort of "cone.")*

### Example 4: Determining Where Multivariable Functions Are Continuous

**a. Problem:** Determine where $f(x,y,z) = \frac{1}{x^2 + y^2 + z^2 - 9}$ is continuous.

**Solution:**
This is a rational function. Rational functions are continuous everywhere in their domain. The only points not in the domain are those where the denominator is zero.
So, $f(x,y,z)$ is discontinuous where $x^2 + y^2 + z^2 - 9 = 0$.
This means $x^2 + y^2 + z^2 = 9$.
This equation describes a sphere centered at the origin with radius $3$.

Therefore, $f(x,y,z)$ is continuous on all of $\mathbb{R}^3$ **except** for the points on the sphere $x^2 + y^2 + z^2 = 9$. In other words, its domain of continuity is $\{ (x,y,z) \in \mathbb{R}^3 \mid x^2 + y^2 + z^2 \neq 9 \}$.

**b. Problem:** Determine where $g(x,y) = 9x^4 - 2x^3y + \frac{7xy^2}{1 + x^2y^4}$ is continuous.

**Solution:**
This function is a sum of two parts: a polynomial and a rational function.
The first part, $P(x,y) = 9x^4 - 2x^3y$, is a polynomial in two variables. Polynomials are continuous everywhere in $\mathbb{R}^2$.
The second part, $R(x,y) = \frac{7xy^2}{1 + x^2y^4}$, is a rational function. Rational functions are continuous everywhere in their domain. We need to check if the denominator, $1 + x^2y^4$, can ever be zero.
Since $x^2 \ge 0$ and $y^4 \ge 0$, their product $x^2y^4 \ge 0$.
Therefore, $1 + x^2y^4 \ge 1$. The denominator is never zero.

Since both the polynomial part and the rational part (whose denominator is never zero) are continuous everywhere in $\mathbb{R}^2$, their sum $g(x,y)$ is also continuous everywhere in $\mathbb{R}^2$.

### Example 5: Defining the Continuous Extension of a Function of Two Variables

**Problem:** If possible, extend the definition of the function $f(x,y) = \frac{5x^2y}{x^2+y^2}$ to make it continuous everywhere.

**Solution:**
We recognize this function from Example 3. We found that $f(x,y)$ is undefined at $(0,0)$. For $f$ to be continuous at $(0,0)$, two conditions must be met:
1.  The limit $\lim_{(x,y)\to(0,0)} f(x,y)$ must exist.
2.  The limit must equal the function's value at $(0,0)$, i.e., $f(0,0)$.

From Example 3, we rigorously proved using the $\epsilon$-$\delta$ definition that:
$$ \lim_{(x,y)\to(0,0)} \frac{5x^2y}{x^2+y^2} = 0 $$
Since the limit exists, we can "patch" the hole in the function's domain at $(0,0)$ by defining $f(0,0)$ to be this limit value.

Therefore, we can define the continuous extension of $f(x,y)$ as:
$$ F(x,y) = \begin{cases} \frac{5x^2y}{x^2+y^2} & \text{if } (x,y) \neq (0,0) \\ 0 & \text{if } (x,y) = (0,0) \end{cases} $$
This new function $F(x,y)$ is continuous everywhere in $\mathbb{R}^2$. Huzzah!

### Example 6: Examining the Continuity of Compositions of Multivariable Functions

**a. Problem:** Examine the continuity of $f(x,y,z) = e^{-3xy-4x^2}$.

**Solution:**
This function is a composition. Let $g(u) = e^u$ and $h(x,y,z) = -3xy - 4x^2$.
Then $f(x,y,z) = g(h(x,y,z))$.

*   **Inner function $h(x,y,z)$:** This is a polynomial in three variables. Polynomials are continuous everywhere in $\mathbb{R}^3$.
*   **Outer function $g(u)$:** This is the exponential function, which is continuous for all real numbers $u$.

Since $h(x,y,z)$ is continuous everywhere and $g(u)$ is continuous everywhere, their composition $f(x,y,z) = e^{-3xy-4x^2}$ is continuous everywhere in $\mathbb{R}^3$. Precisely!

**b. Problem:** Examine the continuity of $g(x,y) = \arctan\left(\frac{x}{x-y}\right)$.

**Solution:**
This is also a composition. Let $h(u) = \arctan(u)$ and $k(x,y) = \frac{x}{x-y}$.
Then $g(x,y) = h(k(x,y))$.

*   **Inner function $k(x,y)$:** This is a rational function. Rational functions are continuous everywhere in their domain. The domain is restricted where the denominator is zero, i.e., $x-y = 0$, or $x=y$.
    So, $k(x,y)$ is continuous for all $(x,y)$ where $x \neq y$.
*   **Outer function $h(u)$:** This is the arctangent function, which is continuous for all real numbers $u$.

Since $k(x,y)$ is continuous for $x \neq y$, and $h(u)$ is continuous for all possible outputs of $k(x,y)$, their composition $g(x,y) = \arctan\left(\frac{x}{x-y}\right)$ is continuous for all $(x,y)$ where $x \neq y$. The function is discontinuous along the line $y=x$.

### Additional Example (from Professor's Notes): Path Dependence for $\frac{2x^{3/2}y}{x^2+y^2}$

**Problem (similar to HW 27):** Show that the function $g(x,y) = \frac{2x^{3/2}y}{x^2+y^2}$ has a limiting value of $0$ when the origin is approached in the $xy$-plane along any parabola $y=cx^2$, but any limiting value between $-1$ and $1$ can be achieved by considering the curves $y=cx^{3/2}$.

**Solution:**
First, direct substitution at $(0,0)$ gives $\frac{0}{0}$.

**Path 1: Along any parabola $y=cx^2$ (for $x \to 0$).**
Substitute $y=cx^2$ into $g(x,y)$:
$$ \lim_{(x,cx^2) \to (0,0)} \frac{2x^{3/2}(cx^2)}{x^2+(cx^2)^2} = \lim_{x \to 0} \frac{2cx^{3/2}x^2}{x^2+c^2x^4} = \lim_{x \to 0} \frac{2cx^{7/2}}{x^2(1+c^2x^2)} $$
For $x \neq 0$, we can cancel $x^2$:
$$ = \lim_{x \to 0} \frac{2cx^{3/2}}{1+c^2x^2} $$
As $x \to 0$, $x^{3/2} \to 0$ and $c^2x^2 \to 0$.
$$ = \frac{2c(0)}{1+c^2(0)} = \frac{0}{1} = 0 $$
So, along any parabolic path of the form $y=cx^2$, the limit is $0$.

**Path 2: Along the curves $y=cx^{3/2}$ (for $x \to 0$).**
Substitute $y=cx^{3/2}$ into $g(x,y)$:
$$ \lim_{(x,cx^{3/2}) \to (0,0)} \frac{2x^{3/2}(cx^{3/2})}{x^2+(cx^{3/2})^2} $$
$$ = \lim_{x \to 0} \frac{2c x^{3/2}x^{3/2}}{x^2+c^2(x^{3/2})^2} = \lim_{x \to 0} \frac{2cx^3}{x^2+c^2x^3} $$
For $x \neq 0$, we can factor out $x^2$ from the denominator and cancel:
$$ = \lim_{x \to 0} \frac{2cx^3}{x^2(1+c^2x)} = \lim_{x \to 0} \frac{2cx}{1+c^2x} $$
As $x \to 0$:
$$ = \frac{2c(0)}{1+c^2(0)} = \frac{0}{1} = 0 \quad \text{Wait, this seems wrong based on the professor's notes.} $$

*Correction from professor's notes*: The notes show $y=cx^{3/2}$ for the second path and then show:
$\lim \frac{2x^{3/2}(cx^{3/2})}{x^3+(cx^{3/2})^2} = \lim \frac{2cx^3}{x^3+c^2x^3} = \lim \frac{2cx^3}{x^3(1+c^2)} = \lim \frac{2c}{1+c^2}$.
Let's re-evaluate the denominator step.
The term $(cx^{3/2})^2 = c^2 (x^{3/2})^2 = c^2 x^{ (3/2)*2 } = c^2 x^3$.
So the denominator is $x^2 + c^2x^3$.
This means my previous substitution was correct: $\lim_{x \to 0} \frac{2cx^3}{x^2(1+c^2x)} = \lim_{x \to 0} \frac{2cx}{1+c^2x} = 0$.

Let's re-read the handwritten note's expression for $g(x,y)$ carefully.
It is $g(x,y) = \frac{2x^{3/2}y}{x^2+y^2}$.
Then for $y=cx^{3/2}$, it substitutes into the function:
$$ \frac{2x^{3/2}(cx^{3/2})}{x^2 + (cx^{3/2})^2} = \frac{2cx^3}{x^2 + c^2x^3} $$
Aha! The handwritten notes actually write $x^3$ in the denominator where I have $x^2$. This changes everything! The professor's notes for the denominator is $x^3 + (cx^{3/2})^2 = x^3 + c^2x^3$. This indicates there might be a typo in the original function or the path definition in the notes, or it's a completely different problem.

Let's assume the question meant a slightly different function or path to get the result shown in the notes.
If the function were, say, $g(x,y) = \frac{2x^2y}{x^3+y^2}$ and we approached along $y=cx^{3/2}$. No, this isn't it either.

Let's stick to the problem as stated: $g(x,y) = \frac{2x^{3/2}y}{x^2+y^2}$.
The *note* is that *any limiting value between -1 and 1 can be achieved*. My calculation along $y=cx^{3/2}$ yielding $0$ is inconsistent with this note.
What path *would* lead to limits depending on $c$? We need the degrees of $x$ and $y$ in the numerator and denominator to match more closely, or for the $x^{3/2}$ to be balanced.
Consider polar coordinates: $x=r\cos\theta$, $y=r\sin\theta$.
$$ g(x,y) = \frac{2(r\cos\theta)^{3/2}(r\sin\theta)}{(r\cos\theta)^2 + (r\sin\theta)^2} = \frac{2r^{3/2}\cos^{3/2}\theta \cdot r\sin\theta}{r^2\cos^2\theta + r^2\sin^2\theta} $$
$$ = \frac{2r^{5/2}\cos^{3/2}\theta \sin\theta}{r^2(\cos^2\theta + \sin^2\theta)} = \frac{2r^{5/2}\cos^{3/2}\theta \sin\theta}{r^2} $$
$$ = 2r^{1/2}\cos^{3/2}\theta \sin\theta $$
As $(x,y) \to (0,0)$, $r \to 0$.
$$ \lim_{r \to 0} 2r^{1/2}\cos^{3/2}\theta \sin\theta = 2(0)^{1/2}\cos^{3/2}\theta \sin\theta = 0 $$
This also yields $0$. This implies that the limit *is* $0$ and the professor's handwritten note about "any limiting value between -1 and 1 can be achieved by considering the curves $y=cx^{3/2}$" is for a *different problem* or there's a subtle point I'm missing about domain for $x^{3/2}$ which is only defined for $x \ge 0$.

Let's assume the handwritten calculation means the following:
The function $g(x,y) = \frac{2x^{3/2}y}{x^2+y^2}$.
The professor's note shows: $\lim_{(x,y)\to(0,0), y=cx^{3/2}} \frac{2x^{3/2}(cx^{3/2})}{x^3+(cx^{3/2})^2} = \lim_{x\to 0} \frac{2cx^3}{x^3+c^2x^3}$.
This implies that *either* the original function was $\frac{2x^{3/2}y}{x^3+y^2}$ (numerator degree 2.5 + 1 = 3.5, denominator degree max(3,3)=3) *or* the denominator $x^2+y^2$ somehow became $x^3+y^2$ for some reason.
Given the previous example with $x^2+y^2$ in the denominator, it's very likely the denominator is $x^2+y^2$. The handwritten notes for *this specific line of calculation* appear to have a typo, where $x^2$ in the denominator becomes $x^3$.

Let's stick to the problem $g(x,y) = \frac{2x^{3/2}y}{x^2+y^2}$ and assume the *claim* about different limits is meant to be true, and work backward to a path that would support it. A common approach for this is $y=mx^{k}$ where the exponent $k$ is carefully chosen to make the powers of $x$ match.

Let's try a path $y=mx$.
$$ \lim_{x \to 0} \frac{2x^{3/2}(mx)}{x^2+(mx)^2} = \lim_{x \to 0} \frac{2mx^{5/2}}{x^2+m^2x^2} = \lim_{x \to 0} \frac{2mx^{5/2}}{x^2(1+m^2)} = \lim_{x \to 0} \frac{2m x^{1/2}}{1+m^2} = 0 $$
Still $0$. The limit is genuinely $0$ along *all* polynomial paths and polar coordinates for this function.

**Re-evaluating the Professor's note:**
The note clearly states: "but any limiting value between -1 and 1 can be achieved by considering the curves $y=cx^{3/2}$."
This suggests that *my interpretation of the function's variables* or *the path $y=cx^{3/2}$* in relation to the function might be incorrect or missing context.

Let's assume the professor's notes *intended* to show a limit that depends on $c$ for the general function form of $\frac{P(x,y)}{Q(x,y)}$.
If the function were, for example, $f(x,y) = \frac{2xy}{x^2+y^2}$, then along $y=mx$, we would get $\frac{2x(mx)}{x^2+(mx)^2} = \frac{2mx^2}{x^2(1+m^2)} = \frac{2m}{1+m^2}$. This limit depends on $m$.
For $g(x,y) = \frac{2x^{3/2}y}{x^2+y^2}$, the limit seems to be $0$ no matter what path.

However, the professor's handwritten calculation for $y=cx^{3/2}$ explicitly uses $x^3$ in the denominator, not $x^2$.
Let's analyze the handwritten line:
$\lim \frac{2x^{3/2}(cx^{3/2})}{x^3+(cx^{3/2})^2} = \lim \frac{2cx^3}{x^3+c^2x^3} = \lim \frac{2cx^3}{x^3(1+c^2)} = \lim \frac{2c}{1+c^2}$.
If this *hypothetical* problem or function had $x^3$ in the denominator instead of $x^2$ for the first term:
Let $G(x,y) = \frac{2x^{3/2}y}{x^3+y^2}$.
Then along $y=cx^{3/2}$:
$$ \lim_{(x,cx^{3/2})\to(0,0)} \frac{2x^{3/2}(cx^{3/2})}{x^3+(cx^{3/2})^2} = \lim_{x\to 0} \frac{2cx^3}{x^3+c^2x^3} = \lim_{x\to 0} \frac{2cx^3}{x^3(1+c^2)} = \lim_{x\to 0} \frac{2c}{1+c^2} = \frac{2c}{1+c^2} $$
Aha! This matches the professor's handwritten result. This expression $\frac{2c}{1+c^2}$ indeed has a range of values.
Let $h(c) = \frac{2c}{1+c^2}$. We can find the maximum/minimum values using calculus.
$h'(c) = \frac{2(1+c^2) - 2c(2c)}{(1+c^2)^2} = \frac{2+2c^2 - 4c^2}{(1+c^2)^2} = \frac{2-2c^2}{(1+c^2)^2}$.
Setting $h'(c)=0$ gives $2-2c^2=0 \implies c^2=1 \implies c = \pm 1$.
For $c=1$, $h(1) = \frac{2(1)}{1+1^2} = \frac{2}{2} = 1$.
For $c=-1$, $h(-1) = \frac{2(-1)}{1+(-1)^2} = \frac{-2}{2} = -1$.
As $c \to \pm \infty$, $h(c) \to 0$.
So the range of values is $[-1, 1]$. This fully matches the professor's notes!

**Conclusion for this "Problem 27" example:** The original function given in the problem statement, $g(x,y) = \frac{2x^{3/2}y}{x^2+y^2}$, has a limit of $0$ at $(0,0)$ along all paths (including those from the notes). The professor's note's calculation for getting a $c$-dependent limit of $\frac{2c}{1+c^2}$ must implicitly refer to a different function, specifically $G(x,y) = \frac{2x^{3/2}y}{x^3+y^2}$. I will present the solution assuming the *intended* function was $G(x,y) = \frac{2x^{3/2}y}{x^3+y^2}$ to demonstrate the concept of path-dependent limits leading to different values.

**Revised Problem 27:** Show that for the function $g(x,y) = \frac{2x^{3/2}y}{x^3+y^2}$:
1.  Approaching the origin along any parabola $y=cx^2$ yields a limit of $0$.
2.  Approaching the origin along the curves $y=cx^{3/2}$ yields a limit that depends on $c$, covering values in $[-1,1]$. Conclude the limit does not exist.

**Solution (Revised):**
We are examining the function $g(x,y) = \frac{2x^{3/2}y}{x^3+y^2}$ at $(0,0)$.

**Path 1: Along any parabola $y=cx^2$ (for $x \to 0$).**
Substitute $y=cx^2$ into $g(x,y)$:
$$ \lim_{(x,cx^2) \to (0,0)} \frac{2x^{3/2}(cx^2)}{x^3+(cx^2)^2} = \lim_{x \to 0} \frac{2cx^{7/2}}{x^3+c^2x^4} = \lim_{x \to 0} \frac{2cx^{7/2}}{x^3(1+c^2x)} $$
For $x \neq 0$, we can cancel $x^3$:
$$ = \lim_{x \to 0} \frac{2cx^{1/2}}{1+c^2x} = \frac{2c(0)}{1+c^2(0)} = 0 $$
So, along any parabolic path $y=cx^2$, the limit is $0$.

**Path 2: Along the curves $y=cx^{3/2}$ (for $x \to 0$).**
Substitute $y=cx^{3/2}$ into $g(x,y)$:
$$ \lim_{(x,cx^{3/2}) \to (0,0)} \frac{2x^{3/2}(cx^{3/2})}{x^3+(cx^{3/2})^2} $$
$$ = \lim_{x \to 0} \frac{2c x^{3/2}x^{3/2}}{x^3+c^2(x^{3/2})^2} = \lim_{x \to 0} \frac{2cx^3}{x^3+c^2x^3} $$
For $x \neq 0$, we can factor $x^3$ from the denominator and cancel:
$$ = \lim_{x \to 0} \frac{2cx^3}{x^3(1+c^2)} = \lim_{x \to 0} \frac{2c}{1+c^2} = \frac{2c}{1+c^2} $$
This limit *depends on the value of $c$*. For example:
*   If $c=0$ (the path is $y=0$, the $x$-axis), the limit is $\frac{0}{1} = 0$.
*   If $c=1$ (the path is $y=x^{3/2}$), the limit is $\frac{2(1)}{1+1^2} = 1$.
*   If $c=-1$ (the path is $y=-x^{3/2}$), the limit is $\frac{2(-1)}{1+(-1)^2} = -1$.
Since we found different limits (e.g., $0 \neq 1$) by approaching $(0,0)$ along different paths, the limit of $g(x,y)$ as $(x,y) \to (0,0)$ **does not exist**.
The values of $\frac{2c}{1+c^2}$ span the interval $[-1,1]$ as $c$ varies.

---

## 🧠 Practice & Reflection: Solidifying Your Knowledge!

Alright, you magnificent students! You've absorbed a colossal amount of knowledge today. Now, let's put those brilliant minds to the test with a few thought-provoking questions.

1.  **Conceptual Check-in:** Explain in your own words why, for a multivariable limit to exist, the function must approach the *same* value regardless of the path taken towards the point. How does this differ from single-variable limits?
2.  **True or False? (No. 61 from Professor's Notes):** If $\lim_{(x,y)\to(a,b)} f(x,y)$ exists and its value is $L$, then $f(a,b) = L$. Justify your answer with an explanation or a counterexample.
3.  **True or False? (No. 63 from Professor's Notes):** If $\lim_{(x,y)\to(0,0)} f(x,y)$ exists and the limiting value of $f(x,y)$ along the line $y=x$ is $f(0,0)$, then $f(x,y)$ is continuous at $(0,0)$. Justify your answer.
4.  **Application:** Consider the function $f(x,y) = \frac{xy}{x^2+y^2}$.
    *   What happens if you approach $(0,0)$ along the $x$-axis ($y=0$)?
    *   What happens if you approach $(0,0)$ along the $y$-axis ($x=0$)?
    *   What happens if you approach $(0,0)$ along the line $y=mx$?
    *   Does $\lim_{(x,y)\to(0,0)} f(x,y)$ exist? Why or why not?

Take some time to ponder these questions. They are designed to probe your understanding beyond mere computation!

---

That concludes our rigorous expedition into the realm of multivariable limits and continuity for today! You've grappled with complex definitions, navigated treacherous algebraic waters, and emerged victorious! Remember, the universe of multivariable calculus is vast and full of wonders. Keep exploring, keep questioning, and never stop learning!

Until next time, this is Professor Hubert J. Farnsworth, signing off! Huzzah!