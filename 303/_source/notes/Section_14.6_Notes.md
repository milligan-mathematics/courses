Good news, everyone! Professor Hubert J. Farnsworth here, your esteemed (and occasionally exploding) Math 303 TA, ready to blast off into the fascinating realm of **Section 14.6: Substitutions and Multiple Integrals!**

You've all been doing splendidly with the alternate coordinate systems we've explored. We started with the simple Cartesian $dx\,dy\,dz$, then cleverly moved to cylindrical $r\,dr\,d\theta\,dz$ and spherical $\rho^2 \sin\phi\,d\rho\,d\phi\,d\theta$. Why, you ask? To make those impossibly convoluted integrals, covering impossible regions, not just possible, but *trivial*! We were basically changing our measuring sticks to fit the shape of the problem, much like fitting a square peg into a round hole... if you could magically reshape the peg!

Today, intrepid mathematicians, we're going to generalize this idea. Think of it as the grand unified theory of coordinate transformations! If plain old $u$-substitution in single integrals let us simplify functions like $\int f(g(x)) g'(x) dx$, then imagine the power of "multivariable $u$-substitution" (or as some of my less imaginative colleagues call it, $uvw$-substitution!) for double and triple integrals! We're talking about transforming not just the integrand, but the *entire region of integration* itself, squishing and stretching it into a simpler form. But, and this is a crucial *but*, when you squish or stretch an area or volume, you *change its size*. That's where our new best friend, **The Jacobian**, comes into play. It's the scaling factor that ensures we account for this distortion, making sure our integrals remain mathematically rigorous.

Let's begin!

---

## **Math 303: Multivariable Calculus — Section 14.6: Substitutions and Multiple Integrals**

### **Part 1: The Foundations of Change of Variables**

#### **1.1 The Need for General Transformations: A Quick Recap**

Remember how we tackled that infamous Gaussian integral, $\int_{-\infty}^{\infty} e^{-x^2} dx$? Impossible directly, but squaring it to $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{-(x^2+y^2)} dx dy$ suddenly opened the door to polar coordinates!
$x = r \cos\theta$, $y = r \sin\theta$.
The magic was in transforming $dx\,dy$ into $r\,dr\,d\theta$. That '$r$' wasn't just decorative; it was the **scaling factor** that compensated for changing our coordinate grid from a rectangular one to a polar one. It's the ratio of an infinitesimal area element in Cartesian coordinates to one in polar coordinates.

Similarly, for triple integrals, converting to cylindrical or spherical coordinates involves a scaling factor:
- Cylindrical: $dV = r\,dz\,dr\,d\theta$
- Spherical: $dV = \rho^2 \sin\phi\,d\rho\,d\phi\,d\theta$

These factors arise because the "grid boxes" in polar, cylindrical, or spherical coordinates don't all have the same area or volume, unlike in Cartesian coordinates. A tiny rectangle near the origin in Cartesian coordinates has the same area as one far away. Not so with polar "rectangles" – they get larger further from the origin! The Jacobian is the generalization of these $r$ and $\rho^2 \sin\phi$ terms.

#### **1.2 The Big Idea: General Coordinate Transformations**

Our goal is to transform a complicated region $R$ in the $xy$-plane (or $xyz$-space) into a simpler region $S$ in the $uv$-plane (or $uvw$-space). We do this using a transformation $T$:
$$T: S \to R$$
This transformation maps points $(u,v)$ in $S$ to points $(x,y)$ in $R$, defined by functions $x = g(u,v)$ and $y = h(u,v)$. For triple integrals, $x=g(u,v,w)$, $y=h(u,v,w)$, $z=k(u,v,w)$.

#### **1.3 The Jacobian: The Universal Scaling Factor**

When we change coordinates, an infinitesimal area (or volume) element in the new coordinate system corresponds to a distorted, possibly larger or smaller, area (or volume) element in the old system. The Jacobian tells us precisely how much the area or volume element changes during this transformation.

##### **Definition: The Jacobian of a Transformation (Two-Dimensional Version)**

Given a coordinate transformation $T$ from a region $S$ in the $uv$-plane to a region $R$ in the $xy$-plane, defined by $x = g(u,v)$ and $y = h(u,v)$, where $g$ and $h$ have continuous first-order partial derivatives, **The Jacobian** (or **Jacobian determinant**) of $T$ is denoted by $\frac{\partial(x,y)}{\partial(u,v)}$ and is defined as the determinant of the matrix of partial derivatives:

$$ \frac{\partial(x,y)}{\partial(u,v)} = \det \begin{pmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{pmatrix} = \frac{\partial x}{\partial u} \frac{\partial y}{\partial v} - \frac{\partial x}{\partial v} \frac{\partial y}{\partial u} $$

*Hubert's Insight*: Think of the columns of this matrix as the gradient vectors of $x$ and $y$ with respect to $u$ and $v$ respectively, or, as my colleague Dr. Lundholm points out, $\nabla_x$ and $\nabla_y$ with respect to $u,v$. This determinant measures the "stretching factor" (and orientation change) of the infinitesimal area element $du\,dv$ as it transforms into $dx\,dy$.

---

### **Part 2: Change of Variables in Double Integrals**

Now we put the Jacobian to work!

#### **2.1 Theorem: Change of Variables in a Double Integral**

Assume $T$ is a coordinate transformation from a region $S$ in the $uv$-plane to a region $R$ in the $xy$-plane, defined by $x = g(u,v)$ and $y = h(u,v)$. Assume $g$ and $h$ both have continuous first-order partial derivatives, and that $T$ is one-to-one on $S$ (except possibly on its boundary). Assume also that the Jacobian of $T$, $\frac{\partial(x,y)}{\partial(u,v)}$, is nonzero on $S$ and that $f$ is continuous on $R$. Then,

$$ \iint_R f(x,y) \,dA = \iint_S f(g(u,v), h(u,v)) \left| \frac{\partial(x,y)}{\partial(u,v)} \right| \,du\,dv $$

*Hubert's Note*: The absolute value around the Jacobian is crucial! Area and volume are always positive quantities, so we need to ensure our scaling factor is positive, regardless of the order of variables in the determinant.

#### **2.2 Example 1: Using a Jacobian to Derive a Double Integral in Polar Coordinates**

Let's use the Jacobian to re-derive the familiar area element for polar coordinates.

**Problem:** Use a Jacobian to derive the formulation of double integrals in polar coordinates.

**Solution:**
1.  **Define the Transformation:**
    Polar coordinates relate to Cartesian coordinates by:
    $x = g(r,\theta) = r \cos\theta$
    $y = h(r,\theta) = r \sin\theta$
    Here, $u=r$ and $v=\theta$.

2.  **Calculate the Partial Derivatives:**
    $\frac{\partial x}{\partial r} = \cos\theta$
    $\frac{\partial x}{\partial \theta} = -r \sin\theta$
    $\frac{\partial y}{\partial r} = \sin\theta$
    $\frac{\partial y}{\partial \theta} = r \cos\theta$

3.  **Compute the Jacobian:**
    $$ \frac{\partial(x,y)}{\partial(r,\theta)} = \det \begin{pmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta} \end{pmatrix} = \det \begin{pmatrix} \cos\theta & -r \sin\theta \\ \sin\theta & r \cos\theta \end{pmatrix} $$
    $$ = (\cos\theta)(r \cos\theta) - (-r \sin\theta)(\sin\theta) $$
    $$ = r \cos^2\theta + r \sin^2\theta $$
    $$ = r (\cos^2\theta + \sin^2\theta) $$
    $$ = r(1) = r $$

4.  **Apply the Change of Variables Theorem:**
    The absolute value of the Jacobian is $|r|$. Since $r \ge 0$ in polar coordinates (distance from origin), $|r|=r$.
    Thus, $dA = |\frac{\partial(x,y)}{\partial(r,\theta)}| dr\,d\theta = r\,dr\,d\theta$.
    So, the double integral becomes:
    $$ \iint_R f(x,y) \,dA = \iint_S f(r \cos\theta, r \sin\theta) r\,dr\,d\theta $$
    This is precisely the formula we've been using! How delightful!

#### **2.3 Example 2: Using a Change of Variables to Evaluate a Double Integral**

This is where the power of general transformations truly shines, transforming truly gnarly regions into pleasant rectangles!

**Problem:** Use a change of variables to evaluate $\iint_R \frac{3x+2y}{x+4y} \,dA$, where $R$ is the region bounded by $x=0$, $y=0$, and $3x+2y=2$.

**Solution:**
This integral looks like a job for the *Professor's Patented Problem-Solving Process!*

1.  **Analyze the Integrand and Region, and Decide on a Helpful Transformation:**
    *   **Integrand:** We see terms like $3x+2y$ and $x+4y$. This is a huge hint! Let's try to simplify these expressions directly.
    *   **Region:** The boundaries are $x=0$, $y=0$, and $3x+2y=2$. The last boundary also features $3x+2y$.
    *   **Proposed Transformation:** Let's define our new variables $u$ and $v$ based on these expressions:
        $$ u = 3x+2y $$
        $$ v = x+4y $$
    *   This choice immediately simplifies our integrand to $\frac{u}{v}$. Splendid!

2.  **Solve for $x$ and $y$ in terms of $u$ and $v$ (Inverse Transformation):**
    We need $x=g(u,v)$ and $y=h(u,v)$ to compute the Jacobian.
    From $u = 3x+2y$ (Eq. 1) and $v = x+4y$ (Eq. 2):
    Multiply Eq. 2 by 3: $3v = 3x+12y$ (Eq. 3)
    Subtract Eq. 1 from Eq. 3: $(3x+12y) - (3x+2y) = 3v-u$
    $10y = 3v-u \implies \mathbf{y = \frac{3v-u}{10}}$
    Now substitute $y$ back into Eq. 2:
    $x = v - 4y = v - 4\left(\frac{3v-u}{10}\right) = v - \frac{12v-4u}{10} = \frac{10v - 12v + 4u}{10} = \frac{4u-2v}{10} = \mathbf{\frac{2u-v}{5}}$
    So our inverse transformation is:
    $x = \frac{2u-v}{5}$
    $y = \frac{3v-u}{10}$

3.  **Calculate the Jacobian:**
    First, find the partial derivatives of $x$ and $y$ with respect to $u$ and $v$:
    $\frac{\partial x}{\partial u} = \frac{2}{5}$
    $\frac{\partial x}{\partial v} = -\frac{1}{5}$
    $\frac{\partial y}{\partial u} = -\frac{1}{10}$
    $\frac{\partial y}{\partial v} = \frac{3}{10}$
    Now, compute the Jacobian determinant:
    $$ \frac{\partial(x,y)}{\partial(u,v)} = \det \begin{pmatrix} \frac{2}{5} & -\frac{1}{5} \\ -\frac{1}{10} & \frac{3}{10} \end{pmatrix} $$
    $$ = \left(\frac{2}{5}\right)\left(\frac{3}{10}\right) - \left(-\frac{1}{5}\right)\left(-\frac{1}{10}\right) $$
    $$ = \frac{6}{50} - \frac{1}{50} = \frac{5}{50} = \frac{1}{10} $$
    The absolute value of the Jacobian is $\left|\frac{1}{10}\right| = \frac{1}{10}$.

4.  **Transform the Boundaries of Region $R$ to define Region $S$:**
    The original region $R$ is a triangle in the $xy$-plane with vertices $(0,0)$, $(2/3,0)$, and $(0,1)$. Let's see how its boundaries transform into the $uv$-plane.
    *   **Boundary 1: $x=0$**
        Substitute $x=\frac{2u-v}{5}$ into $x=0$:
        $\frac{2u-v}{5} = 0 \implies 2u-v=0 \implies \mathbf{v=2u}$
    *   **Boundary 2: $y=0$**
        Substitute $y=\frac{3v-u}{10}$ into $y=0$:
        $\frac{3v-u}{10} = 0 \implies 3v-u=0 \implies \mathbf{v=\frac{u}{3}}$
    *   **Boundary 3: $3x+2y=2$**
        We defined $u=3x+2y$. So, this boundary directly becomes:
        $\mathbf{u=2}$

    Now we have our new region $S$ in the $uv$-plane, bounded by $v=u/3$, $v=2u$, and $u=2$. This is a triangle in the $uv$-plane (as shown in Dr. Lundholm's diagram on page 5), much simpler to integrate over!
    The minimum value of $u$ (where $v=u/3$ and $v=2u$ intersect) is $u=0$.
    So, $u$ ranges from $0$ to $2$. For a given $u$, $v$ ranges from the lower boundary $v=u/3$ to the upper boundary $v=2u$.

5.  **Set up and Evaluate the New Integral:**
    Using the Change of Variables Theorem:
    $$ \iint_R \frac{3x+2y}{x+4y} \,dA = \iint_S \left(\frac{u}{v}\right) \left| \frac{\partial(x,y)}{\partial(u,v)} \right| \,du\,dv $$
    $$ = \int_{u=0}^{u=2} \int_{v=u/3}^{v=2u} \frac{u}{v} \left(\frac{1}{10}\right) \,dv\,du $$
    $$ = \frac{1}{10} \int_0^2 u \left[ \ln|v| \right]_{v=u/3}^{v=2u} \,du $$
    Since $u \ge 0$, $v \ge 0$ in our region $S$, we can drop the absolute value for $\ln$.
    $$ = \frac{1}{10} \int_0^2 u \left( \ln(2u) - \ln\left(\frac{u}{3}\right) \right) \,du $$
    Using logarithm properties ($\ln A - \ln B = \ln(A/B)$):
    $$ = \frac{1}{10} \int_0^2 u \ln\left(\frac{2u}{u/3}\right) \,du $$
    $$ = \frac{1}{10} \int_0^2 u \ln(6) \,du $$
    Since $\ln(6)$ is a constant:
    $$ = \frac{\ln(6)}{10} \int_0^2 u \,du $$
    $$ = \frac{\ln(6)}{10} \left[ \frac{u^2}{2} \right]_0^2 $$
    $$ = \frac{\ln(6)}{10} \left( \frac{2^2}{2} - \frac{0^2}{2} \right) $$
    $$ = \frac{\ln(6)}{10} (2) $$
    $$ = \frac{\ln(6)}{5} $$
    Magnificent! This result would have been far more cumbersome, if not impossible, to obtain directly in Cartesian coordinates.

---

### **Part 3: Extending to Triple Integrals**

Just as we generalized from single to double integrals, we can extend this brilliant machinery to triple integrals! More dimensions, more fun!

#### **3.1 The Jacobian for Three Dimensions**

The principle remains the same: define a transformation from $(u,v,w)$ space to $(x,y,z)$ space, then take the determinant of the partial derivatives.

##### **Definition: The Jacobian of a Transformation (Three-Dimensional Version)**

Given a coordinate transformation $T$ from a region $S$ in $uvw$-space to a region $R$ in $xyz$-space, defined by $x = g(u,v,w)$, $y = h(u,v,w)$, and $z = k(u,v,w)$, where $g, h,$ and $k$ all have continuous first-order partial derivatives, **The Jacobian** of $T$ is denoted by $\frac{\partial(x,y,z)}{\partial(u,v,w)}$ and is defined as the determinant of the $3 \times 3$ matrix of partial derivatives:

$$ \frac{\partial(x,y,z)}{\partial(u,v,w)} = \det \begin{pmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} & \frac{\partial x}{\partial w} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} & \frac{\partial y}{\partial w} \\ \frac{\partial z}{\partial u} & \frac{\partial z}{\partial v} & \frac{\partial z}{\partial w} \end{pmatrix} $$

*Hubert's Warning*: Computing $3 \times 3$ determinants can be tedious. Double-check your work, or you might end up in a temporal paradox!

#### **3.2 Theorem: Change of Variables in a Triple Integral**

Assume $T$ is a coordinate transformation from a region $S$ in $uvw$-space to a region $R$ in $xyz$-space, defined by $x=g(u,v,w)$, $y=h(u,v,w)$, and $z=k(u,v,w)$. Assume $g, h,$ and $k$ all have continuous first-order partial derivatives, and that $T$ is one-to-one on $S$ (except possibly on its boundary). Assume also that the Jacobian of $T$, $\frac{\partial(x,y,z)}{\partial(u,v,w)}$, is nonzero on $S$ and that $f$ is continuous on $R$. Then,

$$ \iiint_R f(x,y,z) \,dV = \iiint_S f(g(u,v,w), h(u,v,w), k(u,v,w)) \left| \frac{\partial(x,y,z)}{\partial(u,v,w)} \right| \,du\,dv\,dw $$

#### **3.3 Example 3: Using a Jacobian to Derive a Triple Integral in Spherical Coordinates**

Time to revisit our spherical friends!

**Problem:** Use a Jacobian to derive the formulation of triple integrals in spherical coordinates.

**Solution:**
1.  **Define the Transformation:**
    Spherical coordinates relate to Cartesian coordinates by:
    $x = \rho \sin\phi \cos\theta$
    $y = \rho \sin\phi \sin\theta$
    $z = \rho \cos\phi$
    Here, $u=\rho$, $v=\theta$, $w=\phi$.

2.  **Calculate the Partial Derivatives:**
    This requires careful differentiation!
    *   For $x$:
        $\frac{\partial x}{\partial \rho} = \sin\phi \cos\theta$
        $\frac{\partial x}{\partial \theta} = -\rho \sin\phi \sin\theta$
        $\frac{\partial x}{\partial \phi} = \rho \cos\phi \cos\theta$
    *   For $y$:
        $\frac{\partial y}{\partial \rho} = \sin\phi \sin\theta$
        $\frac{\partial y}{\partial \theta} = \rho \sin\phi \cos\theta$
        $\frac{\partial y}{\partial \phi} = \rho \cos\phi \sin\theta$
    *   For $z$:
        $\frac{\partial z}{\partial \rho} = \cos\phi$
        $\frac{\partial z}{\partial \theta} = 0$
        $\frac{\partial z}{\partial \phi} = -\rho \sin\phi$

3.  **Compute the Jacobian:**
    $$ \frac{\partial(x,y,z)}{\partial(\rho,\theta,\phi)} = \det \begin{pmatrix} \sin\phi \cos\theta & -\rho \sin\phi \sin\theta & \rho \cos\phi \cos\theta \\ \sin\phi \sin\theta & \rho \sin\phi \cos\theta & \rho \cos\phi \sin\theta \\ \cos\phi & 0 & -\rho \sin\phi \end{pmatrix} $$
    Let's expand this determinant. It's often easiest to pick a row or column with a zero, like the third row in this case.
    Using cofactor expansion along the third row:
    $= \cos\phi \det \begin{pmatrix} -\rho \sin\phi \sin\theta & \rho \cos\phi \cos\theta \\ \rho \sin\phi \cos\theta & \rho \cos\phi \sin\theta \end{pmatrix} $
    $\quad - 0 \det \begin{pmatrix} \dots \end{pmatrix} $
    $\quad + (-\rho \sin\phi) \det \begin{pmatrix} \sin\phi \cos\theta & -\rho \sin\phi \sin\theta \\ \sin\phi \sin\theta & \rho \sin\phi \cos\theta \end{pmatrix} $

    Let's calculate the two $2 \times 2$ determinants:
    First determinant:
    $(-\rho \sin\phi \sin\theta)(\rho \cos\phi \sin\theta) - (\rho \cos\phi \cos\theta)(\rho \sin\phi \cos\theta)$
    $= -\rho^2 \sin\phi \cos\phi \sin^2\theta - \rho^2 \sin\phi \cos\phi \cos^2\theta$
    $= -\rho^2 \sin\phi \cos\phi (\sin^2\theta + \cos^2\theta)$
    $= -\rho^2 \sin\phi \cos\phi$

    Second determinant:
    $(\sin\phi \cos\theta)(\rho \sin\phi \cos\theta) - (-\rho \sin\phi \sin\theta)(\sin\phi \sin\theta)$
    $= \rho \sin^2\phi \cos^2\theta + \rho \sin^2\phi \sin^2\theta$
    $= \rho \sin^2\phi (\cos^2\theta + \sin^2\theta)$
    $= \rho \sin^2\phi$

    Now, substitute these back into the expansion:
    $= \cos\phi (-\rho^2 \sin\phi \cos\phi) + (-\rho \sin\phi)(\rho \sin^2\phi)$
    $= -\rho^2 \sin\phi \cos^2\phi - \rho^2 \sin^3\phi$
    Factor out $-\rho^2 \sin\phi$:
    $= -\rho^2 \sin\phi (\cos^2\phi + \sin^2\phi)$
    $= -\rho^2 \sin\phi (1)$
    $= -\rho^2 \sin\phi$

    So, $\frac{\partial(x,y,z)}{\partial(\rho,\theta,\phi)} = -\rho^2 \sin\phi$.

4.  **Apply the Change of Variables Theorem:**
    We need the absolute value of the Jacobian: $|-\rho^2 \sin\phi|$.
    Since $\rho \ge 0$ (distance), $\rho^2 \ge 0$.
    In spherical coordinates, the angle $\phi$ is typically defined as $0 \le \phi \le \pi$. In this range, $\sin\phi \ge 0$.
    Therefore, $|-\rho^2 \sin\phi| = \rho^2 \sin\phi$.
    Thus, $dV = \left| \frac{\partial(x,y,z)}{\partial(\rho,\theta,\phi)} \right| \,d\rho\,d\theta\,d\phi = \rho^2 \sin\phi \,d\rho\,d\theta\,d\phi$.
    And the triple integral becomes:
    $$ \iiint_R f(x,y,z) \,dV = \iiint_S f(\rho \sin\phi \cos\theta, \rho \sin\phi \sin\theta, \rho \cos\phi) \rho^2 \sin\phi \,d\rho\,d\theta\,d\phi $$
    Another classic derived with the might of the Jacobian!

#### **3.4 Example 4: Using a Change of Variables to Evaluate a Triple Integral**

For our final journey, let's tackle a triple integral over a region defined by skewed planes!

**Problem:** Use a change of variables to evaluate $\iiint_R \left(\frac{3x-z}{2} + \frac{y}{3}\right) \,dV$, where $R$ is the solid bounded by the planes $y=0$, $y=3$, $z=0$, $z=4$, $3x=z$, and $3x=z+3$.

**Solution:**
Follow the Professor's Patented Problem-Solving Process!

1.  **Analyze the Integrand and Region, and Decide on a Helpful Transformation:**
    *   **Integrand:** We see terms like $3x-z$ and $y/3$.
    *   **Region:** The boundaries include $y=0, y=3$ (suggesting $y/3$ is useful), and $3x=z, 3x=z+3$ (suggesting $3x-z$ is useful).
    *   **Proposed Transformation:** Let's simplify these directly:
        $$ u = 3x-z $$
        $$ v = z/2 $$
        $$ w = y/3 $$
    *   This choice makes the integrand $\frac{u}{2} + w$. Excellent!

2.  **Solve for $x$, $y$, and $z$ in terms of $u$, $v$, and $w$ (Inverse Transformation):**
    From our definitions:
    $z = 2v$
    $y = 3w$
    Substitute $z=2v$ into $u=3x-z$:
    $u = 3x - 2v \implies 3x = u+2v \implies x = \frac{u+2v}{3}$
    So our inverse transformation is:
    $x = \frac{u+2v}{3}$
    $y = 3w$
    $z = 2v$

3.  **Calculate the Jacobian:**
    First, find the partial derivatives:
    *   For $x$:
        $\frac{\partial x}{\partial u} = \frac{1}{3}$
        $\frac{\partial x}{\partial v} = \frac{2}{3}$
        $\frac{\partial x}{\partial w} = 0$
    *   For $y$:
        $\frac{\partial y}{\partial u} = 0$
        $\frac{\partial y}{\partial v} = 0$
        $\frac{\partial y}{\partial w} = 3$
    *   For $z$:
        $\frac{\partial z}{\partial u} = 0$
        $\frac{\partial z}{\partial v} = 2$
        $\frac{\partial z}{\partial w} = 0$
    Now, compute the Jacobian determinant:
    $$ \frac{\partial(x,y,z)}{\partial(u,v,w)} = \det \begin{pmatrix} \frac{1}{3} & \frac{2}{3} & 0 \\ 0 & 0 & 3 \\ 0 & 2 & 0 \end{pmatrix} $$
    Expand along the first column (or second row, it has two zeros!):
    Using first column:
    $= \frac{1}{3} \det \begin{pmatrix} 0 & 3 \\ 2 & 0 \end{pmatrix} - 0 \det (\dots) + 0 \det (\dots) $
    $= \frac{1}{3} ((0)(0) - (3)(2))$
    $= \frac{1}{3} (-6) = -2$
    The absolute value of the Jacobian is $|-2|=2$.

4.  **Transform the Boundaries of Region $R$ to define Region $S$:**
    *   **Boundary 1: $y=0$**
        $3w=0 \implies \mathbf{w=0}$
    *   **Boundary 2: $y=3$**
        $3w=3 \implies \mathbf{w=1}$
    *   **Boundary 3: $z=0$**
        $2v=0 \implies \mathbf{v=0}$
    *   **Boundary 4: $z=4$**
        $2v=4 \implies \mathbf{v=2}$
    *   **Boundary 5: $3x=z$**
        This is $3x-z=0$. Since $u=3x-z$, this becomes $\mathbf{u=0}$.
    *   **Boundary 6: $3x=z+3$**
        This is $3x-z=3$. Since $u=3x-z$, this becomes $\mathbf{u=3}$.
    The new region $S$ in $uvw$-space is a simple rectangular box:
    $0 \le u \le 3$
    $0 \le v \le 2$
    $0 \le w \le 1$
    Much, much simpler to integrate over!

5.  **Set up and Evaluate the New Integral:**
    Using the Change of Variables Theorem:
    $$ \iiint_R \left(\frac{3x-z}{2} + \frac{y}{3}\right) \,dV = \iiint_S \left(\frac{u}{2} + w\right) \left| \frac{\partial(x,y,z)}{\partial(u,v,w)} \right| \,du\,dv\,dw $$
    $$ = \int_{w=0}^{w=1} \int_{v=0}^{v=2} \int_{u=0}^{u=3} \left(\frac{u}{2} + w\right) (2) \,du\,dv\,dw $$
    Let's evaluate the inner integral first:
    $$ \int_0^3 2\left(\frac{u}{2} + w\right) \,du = \int_0^3 (u + 2w) \,du $$
    $$ = \left[ \frac{u^2}{2} + 2wu \right]_0^3 = \left( \frac{3^2}{2} + 2w(3) \right) - (0) = \frac{9}{2} + 6w $$
    Now the middle integral:
    $$ \int_0^2 \left( \frac{9}{2} + 6w \right) \,dv = \left[ \frac{9}{2}v + 6wv \right]_0^2 $$
    $$ = \left( \frac{9}{2}(2) + 6w(2) \right) - (0) = 9 + 12w $$
    Finally, the outer integral:
    $$ \int_0^1 (9 + 12w) \,dw = \left[ 9w + 6w^2 \right]_0^1 $$
    $$ = (9(1) + 6(1)^2) - (0) = 9 + 6 = \mathbf{15} $$
    Another complex integral brought to its knees by the power of coordinate transformations! My work here is done!

---

### **Practice & Reflection: Cementing Your Understanding**

Before you zoom off, let's solidify some of these concepts.

1.  **Conceptual Check:** Why do we take the *absolute value* of the Jacobian in the Change of Variables Theorem? What would happen if we didn't?
2.  **Transformation Strategy:** When faced with a double or triple integral, how do you decide what transformation to use? What clues should you look for in the integrand and the region of integration?
3.  **Inverse Jacobian:** Sometimes it's easier to find the Jacobian of the inverse transformation, $\frac{\partial(u,v)}{\partial(x,y)}$. How is this related to $\frac{\partial(x,y)}{\partial(u,v)}$? (Hint: Think about inverse matrices and determinants!)
4.  **Boundary Importance:** Explain in your own words why transforming the boundaries of the region $R$ into $S$ is just as important as computing the Jacobian. What could go wrong if you made a mistake here?
5.  **Calculate the 2D Jacobian:** For the transformation $x=u^2-v^2$ and $y=2uv$, calculate the Jacobian $\frac{\partial(x,y)}{\partial(u,v)}$.

---

That's it for Section 14.6! Keep practicing, and remember, with enough mathematical rigor, even the most daunting integrals can be tamed! To the future!