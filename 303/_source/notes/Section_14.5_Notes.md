Greetings, young mathematicians! Professor Hubert J. Farnsworth here, your esteemed pedagogical assistant, ready to plunge us into the fascinating (and occasionally brain-bending) world of **Math 303: Multivariable Calculus!**

Good news, everyone! Today, we're embarking on Section 14.5, where we'll unlock the secrets of **Triple Integrals in Cylindrical and Spherical Coordinates.** Why, you ask? Because, my dear students, while Cartesian coordinates ($x, y, z$) are perfectly adequate for many tasks, some solids and functions simply *beg* for a more natural, symmetrical description. Imagine trying to describe a sphere or a cylinder using only rectangular boxes – it's like trying to catch a greased pig in a tuxedo! These new coordinate systems will simplify our descriptions of regions of integration and, consequently, make those formidable triple integrals much, much easier to calculate.

Let's begin our grand adventure!

---

## Math 303: Multivariable Calculus
### Section 14.5: Triple Integrals in Cylindrical and Spherical Coordinates

### I. The Cylindrical Coordinate System: A Cartesian-Polar Hybrid

First up, let's explore **Cylindrical Coordinates**. Think of this as taking the familiar polar coordinates ($r, \theta$) from two-dimensions and simply adding the $z$-coordinate from Cartesian systems. It's like building a tower on a polar plane! This system is particularly useful for solids that possess cylindrical symmetry, or surfaces that are "extruded" along the $z$-axis.

#### A. Core Concepts & Definitions

1.  **Cylindrical Coordinates Definition:**
    A point $P$ in three-dimensional space ($R^3$) is represented by an ordered triple $(r, \theta, z)$, where:
    *   $r$ is the directed distance from the $z$-axis to the point $P$. ($r \ge 0$)
    *   $\theta$ is the angle (in radians) that the projection of $P$ onto the $xy$-plane makes with the positive $x$-axis. ($0 \le \theta < 2\pi$)
    *   $z$ is the directed distance from the $xy$-plane to the point $P$. This is the same $z$-coordinate as in Cartesian coordinates.

2.  **Coordinate Conversion:**
    To move between Cartesian and Cylindrical systems, we use the following conversion formulas:

    *   **From Cylindrical $(r, \theta, z)$ to Cartesian $(x, y, z)$:**
        $$
        x = r \cos \theta \\
        y = r \sin \theta \\
        z = z
        $$

    *   **From Cartesian $(x, y, z)$ to Cylindrical $(r, \theta, z)$:**
        $$
        r^2 = x^2 + y^2 \\
        \tan \theta = \frac{y}{x} \quad (\text{for } x \ne 0) \\
        z = z
        $$
    *   **Caution:** When converting from Cartesian to cylindrical, be careful with $\tan \theta = y/x$. This equation alone doesn't uniquely determine $\theta$. You must consider the quadrant of $(x, y)$ to choose the correct value of $\theta$. For instance, if $x=0$, $\theta$ could be $\pi/2$ or $3\pi/2$. It's often best to use $x=r\cos\theta$ and $y=r\sin\theta$ directly to deduce $\theta$.

#### B. The Differential Volume Element ($dV$)

The most crucial aspect for integration is understanding how a small volume element transforms. In Cartesian coordinates, we have $dV = dx \, dy \, dz$. In cylindrical coordinates, our infinitesimally small "box" is no longer rectangular. It's a small wedge!

Imagine a small change in $r$ (giving $dr$), a small change in $\theta$ (giving $d\theta$), and a small change in $z$ (giving $dz$).
*   The radial dimension is $dr$.
*   The height dimension is $dz$.
*   The arc length in the $xy$-plane due to $d\theta$ at radius $r$ is $r \, d\theta$.

Multiplying these three dimensions together gives us the differential volume element in cylindrical coordinates:

$$
dV = r \, dz \, dr \, d\theta
$$

This `r` factor is absolutely critical! Forgetting it is a common blunder, leading to results that are, well, simply wrong! Don't forget the `r`!

#### C. Setting Up a Triple Integral in Cylindrical Coordinates

Now, let's put it all together to set up a triple integral over a solid $S$:

$$
\iiint_S f(x, y, z) \, dV = \iiint_S f(r \cos \theta, r \sin \theta, z) \, r \, dz \, dr \, d\theta
$$

The order of integration is typically $dz \, dr \, d\theta$, as it's often easiest to define the height ($z$) between surfaces that may depend on $r$ and $\theta$, then project the solid onto the $xy$-plane to define the polar limits for $r$ and $\theta$.

**Procedure for Setting Up a Triple Integral in Cylindrical Coordinates:**

1.  **Sketch the Solid:** A good sketch is worth a thousand calculations! Understand the region $S$.
2.  **Convert the Function:** Express the integrand $f(x, y, z)$ in cylindrical coordinates by substituting $x = r \cos \theta$ and $y = r \sin \theta$.
3.  **Determine $z$-limits:**
    *   Identify the lower surface $z = h_1(r, \theta)$ and the upper surface $z = h_2(r, \theta)$ that bound the solid $S$.
    *   These will be your inner integral limits: $\int_{h_1(r, \theta)}^{h_2(r, \theta)} \dots dz$.
    (Refer to diagram (a) in Professor Lundholm's notes: `z-surfaces`)
4.  **Determine $r$-limits:**
    *   Project the solid $S$ onto the $xy$-plane to obtain a region $R$.
    *   Describe $R$ in polar coordinates. For a fixed $\theta$, identify the inner curve $r = g_1(\theta)$ and outer curve $r = g_2(\theta)$ that bound $R$.
    *   These will be your middle integral limits: $\int_{g_1(\theta)}^{g_2(\theta)} \dots dr$.
    (Refer to diagram (b) in Professor Lundholm's notes: `functions concerning radius`)
5.  **Determine $\theta$-limits:**
    *   Identify the minimum and maximum values of $\theta$ (say, $\alpha$ and $\beta$) that sweep out the region $R$ in the $xy$-plane.
    *   These will be your outer integral limits: $\int_{\alpha}^{\beta} \dots d\theta$.
    (Refer to diagram (c) in Professor Lundholm's notes: `theta bounds`)
6.  **Assemble the Integral:** Combine everything, remembering the $r$ factor in $dV$:
    $$
    \iiint_S f(x, y, z) \, dV = \int_{\alpha}^{\beta} \int_{g_1(\theta)}^{g_2(\theta)} \int_{h_1(r, \theta)}^{h_2(r, \theta)} f(r \cos \theta, r \sin \theta, z) \, r \, dz \, dr \, d\theta
    $$

#### D. Worked Examples (Cylindrical Coordinates)

##### Example 1: Volume of a Paraboloid Solid

**(Hawkes Slide 13, Professor's Notes Page 1)**

**Problem:** Find the volume of the paraboloid solid $S$ bounded below by the surface $z = x^2 + y^2$ and above by $z = 1$.

**Solution:**
1.  **Sketch the Solid:** The surface $z = x^2 + y^2$ is a paraboloid opening upwards, with its vertex at the origin. It's bounded above by the plane $z=1$. This forms a bowl-shaped solid.
2.  **Convert to Cylindrical Coordinates:**
    *   The lower surface is $z = x^2 + y^2$. In cylindrical coordinates, $x^2 + y^2 = r^2$, so $z = r^2$.
    *   The upper surface is $z = 1$.
    *   The integrand for volume is $f(x, y, z) = 1$. So, $f(r, \theta, z) = 1$.
    *   The differential volume element is $dV = r \, dz \, dr \, d\theta$.
3.  **Determine $z$-limits:**
    The solid is bounded below by $z = r^2$ and above by $z = 1$.
    So, $r^2 \le z \le 1$.
4.  **Determine $r$-limits:**
    To find the projection $R$ onto the $xy$-plane, we look at the intersection of $z=r^2$ and $z=1$:
    $r^2 = 1 \implies r = 1$ (since $r \ge 0$).
    This means the projection $R$ is a disk of radius $1$ centered at the origin in the $xy$-plane.
    So, for any $\theta$, $0 \le r \le 1$.
5.  **Determine $\theta$-limits:**
    The solid is symmetric about the $z$-axis, so $\theta$ sweeps a full circle.
    So, $0 \le \theta \le 2\pi$.
6.  **Assemble and Evaluate the Integral:**
    The volume $V$ is given by:
    $$
    V = \iiint_S dV = \int_0^{2\pi} \int_0^1 \int_{r^2}^1 r \, dz \, dr \, d\theta
    $$
    First, integrate with respect to $z$:
    $$
    \int_{r^2}^1 r \, dz = r[z]_{r^2}^1 = r(1 - r^2) = r - r^3
    $$
    Next, integrate with respect to $r$:
    $$
    \int_0^1 (r - r^3) \, dr = \left[\frac{r^2}{2} - \frac{r^4}{4}\right]_0^1 = \left(\frac{1^2}{2} - \frac{1^4}{4}\right) - (0) = \frac{1}{2} - \frac{1}{4} = \frac{1}{4}
    $$
    Finally, integrate with respect to $\theta$:
    $$
    \int_0^{2\pi} \frac{1}{4} \, d\theta = \frac{1}{4}[\theta]_0^{2\pi} = \frac{1}{4}(2\pi - 0) = \frac{2\pi}{4} = \frac{\pi}{2}
    $$
    Thus, the volume of the paraboloid solid is $\frac{\pi}{2}$ cubic units.

##### Example 2: Mass and Center of Mass of a Paraboloid (Varying Density)

**(Hawkes Slide 16, Professor's Notes Page 2)**

**Problem:** Find the mass and center of mass of the paraboloid solid from Example 1 if its density is described by the function $\rho(x, y, z) = 1-z$.

**Solution:**
From Example 1, our solid $S$ is bounded by $z = x^2 + y^2$ and $z=1$. In cylindrical coordinates, $z = r^2$ and $z=1$, with $0 \le r \le 1$ and $0 \le \theta \le 2\pi$.
The density function is $\rho(x, y, z) = 1-z$, which is simply $\rho(r, \theta, z) = 1-z$ in cylindrical coordinates.

**Part 1: Find the Mass ($M$)**
The mass $M$ is given by the triple integral of the density function over the solid $S$:
$$
M = \iiint_S \rho(x, y, z) \, dV = \int_0^{2\pi} \int_0^1 \int_{r^2}^1 (1-z) r \, dz \, dr \, d\theta
$$
First, integrate with respect to $z$:
$$
\int_{r^2}^1 (1-z)r \, dz = r \left[z - \frac{z^2}{2}\right]_{r^2}^1 = r \left( \left(1 - \frac{1^2}{2}\right) - \left(r^2 - \frac{(r^2)^2}{2}\right) \right) \\
= r \left( \frac{1}{2} - r^2 + \frac{r^4}{2} \right) = \frac{r}{2} - r^3 + \frac{r^5}{2}
$$
Next, integrate with respect to $r$:
$$
\int_0^1 \left(\frac{r}{2} - r^3 + \frac{r^5}{2}\right) \, dr = \left[\frac{r^2}{4} - \frac{r^4}{4} + \frac{r^6}{12}\right]_0^1 \\
= \left(\frac{1^2}{4} - \frac{1^4}{4} + \frac{1^6}{12}\right) - (0) = \frac{1}{4} - \frac{1}{4} + \frac{1}{12} = \frac{1}{12}
$$
Finally, integrate with respect to $\theta$:
$$
M = \int_0^{2\pi} \frac{1}{12} \, d\theta = \frac{1}{12}[\theta]_0^{2\pi} = \frac{1}{12}(2\pi - 0) = \frac{2\pi}{12} = \frac{\pi}{6}
$$
The mass of the solid is $M = \frac{\pi}{6}$.

**Part 2: Find the Center of Mass $(\bar{x}, \bar{y}, \bar{z})$**
Due to the symmetry of the paraboloid and the density function $\rho(x,y,z)=1-z$ (which depends only on $z$, implying symmetry about the $z$-axis), we can immediately deduce that $\bar{x}=0$ and $\bar{y}=0$. We only need to calculate $\bar{z}$.

The moment about the $xy$-plane ($M_{xy}$) is given by:
$$
M_{xy} = \iiint_S z \rho(x, y, z) \, dV = \int_0^{2\pi} \int_0^1 \int_{r^2}^1 z(1-z) r \, dz \, dr \, d\theta
$$
First, integrate with respect to $z$:
$$
\int_{r^2}^1 z(1-z)r \, dz = r \int_{r^2}^1 (z-z^2) \, dz = r \left[\frac{z^2}{2} - \frac{z^3}{3}\right]_{r^2}^1 \\
= r \left( \left(\frac{1^2}{2} - \frac{1^3}{3}\right) - \left(\frac{(r^2)^2}{2} - \frac{(r^2)^3}{3}\right) \right) \\
= r \left( \frac{1}{2} - \frac{1}{3} - \frac{r^4}{2} + \frac{r^6}{3} \right) = r \left( \frac{1}{6} - \frac{r^4}{2} + \frac{r^6}{3} \right) \\
= \frac{r}{6} - \frac{r^5}{2} + \frac{r^7}{3}
$$
Next, integrate with respect to $r$:
$$
\int_0^1 \left(\frac{r}{6} - \frac{r^5}{2} + \frac{r^7}{3}\right) \, dr = \left[\frac{r^2}{12} - \frac{r^6}{12} + \frac{r^8}{24}\right]_0^1 \\
= \left(\frac{1^2}{12} - \frac{1^6}{12} + \frac{1^8}{24}\right) - (0) = \frac{1}{12} - \frac{1}{12} + \frac{1}{24} = \frac{1}{24}
$$
Finally, integrate with respect to $\theta$:
$$
M_{xy} = \int_0^{2\pi} \frac{1}{24} \, d\theta = \frac{1}{24}[\theta]_0^{2\pi} = \frac{1}{24}(2\pi - 0) = \frac{2\pi}{24} = \frac{\pi}{12}
$$
Now, we can find $\bar{z}$:
$$
\bar{z} = \frac{M_{xy}}{M} = \frac{\pi/12}{\pi/6} = \frac{\pi}{12} \cdot \frac{6}{\pi} = \frac{6}{12} = \frac{1}{2}
$$
So, the center of mass is $\left(0, 0, \frac{1}{2}\right)$.

##### Example 3: Mass of a Solid Bounded by a Shifted Cylinder and Cone

**(Hawkes Slide 20, Professor's Notes Page 3)**

**Problem:** Determine the mass of the solid bounded by the cylinder $(x-1)^2 + y^2 = 1$, the $xy$-plane, and the cone $z = \sqrt{x^2+y^2}$, given that its density function is $\rho(x, y, z) = x$.

**Solution:**
1.  **Sketch and Convert to Cylindrical Coordinates:**
    *   **Cylinder:** $(x-1)^2 + y^2 = 1$. Expanding this gives $x^2 - 2x + 1 + y^2 = 1$.
        In cylindrical coordinates, $x^2+y^2=r^2$ and $x=r\cos\theta$.
        So, $r^2 - 2r\cos\theta = 0$. Since $r=0$ is just a point, we can divide by $r$ (assuming $r \ne 0$ for the boundary): $r - 2\cos\theta = 0 \implies r = 2\cos\theta$.
        This is a cylinder whose cross-section in the $xy$-plane is a circle centered at $(1,0)$ with radius $1$.
    *   **$xy$-plane:** This is $z=0$.
    *   **Cone:** $z = \sqrt{x^2+y^2}$. In cylindrical coordinates, $z = r$.
    *   **Density function:** $\rho(x, y, z) = x$. In cylindrical coordinates, $\rho(r, \theta, z) = r\cos\theta$.
    *   The solid is bounded below by $z=0$ (the $xy$-plane) and above by $z=r$ (the cone).

2.  **Determine $z$-limits:**
    The lower boundary is $z=0$ and the upper boundary is $z=r$.
    So, $0 \le z \le r$.

3.  **Determine $r$-limits:**
    The projection of the solid onto the $xy$-plane is the circle $r=2\cos\theta$.
    So, for a given $\theta$, $0 \le r \le 2\cos\theta$.

4.  **Determine $\theta$-limits:**
    For the circle $r=2\cos\theta$ to be traced out, $2\cos\theta$ must be non-negative. This means $\cos\theta \ge 0$.
    This occurs for $\theta$ in the range $[-\pi/2, \pi/2]$.
    So, $-\pi/2 \le \theta \le \pi/2$.

5.  **Assemble and Evaluate the Integral:**
    The mass $M$ is given by:
    $$
    M = \iiint_S \rho(r, \theta, z) \, r \, dz \, dr \, d\theta \\
    M = \int_{-\pi/2}^{\pi/2} \int_0^{2\cos\theta} \int_0^r (r\cos\theta) r \, dz \, dr \, d\theta \\
    M = \int_{-\pi/2}^{\pi/2} \int_0^{2\cos\theta} \int_0^r r^2\cos\theta \, dz \, dr \, d\theta
    $$
    First, integrate with respect to $z$:
    $$
    \int_0^r r^2\cos\theta \, dz = r^2\cos\theta [z]_0^r = r^2\cos\theta (r-0) = r^3\cos\theta
    $$
    Next, integrate with respect to $r$:
    $$
    \int_0^{2\cos\theta} r^3\cos\theta \, dr = \cos\theta \left[\frac{r^4}{4}\right]_0^{2\cos\theta} = \cos\theta \left(\frac{(2\cos\theta)^4}{4} - 0\right) \\
    = \cos\theta \frac{16\cos^4\theta}{4} = 4\cos^5\theta
    $$
    Finally, integrate with respect to $\theta$:
    $$
    M = \int_{-\pi/2}^{\pi/2} 4\cos^5\theta \, d\theta
    $$
    Since $\cos^5\theta$ is an even function, we can simplify this to:
    $$
    M = 2 \int_0^{\pi/2} 4\cos^5\theta \, d\theta = 8 \int_0^{\pi/2} \cos^5\theta \, d\theta
    $$
    We use a reduction formula for $\int \cos^n x \, dx$ or integrate using substitution:
    $\int \cos^5\theta \, d\theta = \int \cos^4\theta \cos\theta \, d\theta = \int (1-\sin^2\theta)^2 \cos\theta \, d\theta$.
    Let $u = \sin\theta$, $du = \cos\theta \, d\theta$.
    When $\theta=0$, $u=0$. When $\theta=\pi/2$, $u=1$.
    $$
    \int_0^1 (1-u^2)^2 \, du = \int_0^1 (1 - 2u^2 + u^4) \, du = \left[u - \frac{2u^3}{3} + \frac{u^5}{5}\right]_0^1 \\
    = \left(1 - \frac{2}{3} + \frac{1}{5}\right) - 0 = \frac{15 - 10 + 3}{15} = \frac{8}{15}
    $$
    So, the mass $M$ is:
    $$
    M = 8 \cdot \frac{8}{15} = \frac{64}{15}
    $$
    The mass of the solid is $\frac{64}{15}$ units.

##### Problem 43 (From Professor's Practice Problems): Set up Mass Integral

**(Professor's Notes Page 6)**

**Problem:** Use the cylindrical coordinate system to determine the mass of the solid $S$ with the given density function: $S$ is bounded by $z = e^{x^2+y^2}$ and the plane $z = e$, with density function $\rho(x, y, z) = \sqrt{x^2+y^2}$.

**Solution (Setup Only):**
1.  **Convert to Cylindrical Coordinates:**
    *   Lower surface: $z = e^{x^2+y^2} \implies z = e^{r^2}$.
    *   Upper surface: $z = e$.
    *   Density function: $\rho(x, y, z) = \sqrt{x^2+y^2} \implies \rho(r, \theta, z) = r$.
    *   Differential volume element: $dV = r \, dz \, dr \, d\theta$.
2.  **Determine $z$-limits:**
    The solid is bounded below by $z = e^{r^2}$ and above by $z = e$.
    So, $e^{r^2} \le z \le e$.
3.  **Determine $r$-limits:**
    The intersection of the two surfaces defines the projection onto the $xy$-plane:
    $e^{r^2} = e \implies r^2 = 1 \implies r = 1$ (since $r \ge 0$).
    This means the projection is a disk of radius $1$ centered at the origin.
    So, $0 \le r \le 1$.
4.  **Determine $\theta$-limits:**
    The solid is symmetric about the $z$-axis, sweeping a full circle.
    So, $0 \le \theta \le 2\pi$.
5.  **Assemble the Integral:**
    The mass $M$ is given by:
    $$
    M = \iiint_S \rho(r, \theta, z) \, dV = \int_0^{2\pi} \int_0^1 \int_{e^{r^2}}^e r \cdot r \, dz \, dr \, d\theta \\
    M = \int_0^{2\pi} \int_0^1 \int_{e^{r^2}}^e r^2 \, dz \, dr \, d\theta
    $$
    This integral is now set up and ready for evaluation (which we are not performing here per the problem statement).

---

### II. The Spherical Coordinate System: For Spheres, Cones, and Beyond!

Alright, we've mastered cylindrical coordinates! Now, for something truly elegant: **Spherical Coordinates**. This system is incredibly powerful for dealing with solids that have spherical symmetry, like spheres or cones, or functions that are more easily described by distance from the origin and angles. It's truly a marvel!

#### A. Core Concepts & Definitions

1.  **Spherical Coordinates Definition:**
    A point $P$ in three-dimensional space ($R^3$) is represented by an ordered triple $(\rho, \theta, \phi)$, where:
    *   $\rho$ (rho) is the distance from the origin to the point $P$. ($\rho \ge 0$)
    *   $\theta$ (theta) is the same angle as in cylindrical and polar coordinates: the angle of the projection of $P$ onto the $xy$-plane measured counterclockwise from the positive $x$-axis. ($0 \le \theta < 2\pi$)
    *   $\phi$ (phi) is the angle between the positive $z$-axis and the line segment $OP$ (from the origin to $P$). ($0 \le \phi \le \pi$)
    *   **Caution:** The range for $\phi$ is crucial: $0 \le \phi \le \pi$. This range is sufficient to cover all points in $R^3$ because varying $\theta$ over $2\pi$ takes care of the full rotation around the $z$-axis, and $\phi$ covers from the positive $z$-axis (north pole, $\phi=0$) to the negative $z$-axis (south pole, $\phi=\pi$).

2.  **Coordinate Conversion Relationships:**
    This table from Professor Lundholm's notes is a fantastic reference for converting between Cartesian, Cylindrical, and Spherical coordinates:

    | Cylindrical and Cartesian | Spherical and Cylindrical | Spherical and Cartesian |
    | :------------------------ | :------------------------ | :---------------------- |
    | $r^2 = x^2 + y^2$         | $\rho^2 = r^2 + z^2$      | $\rho^2 = x^2 + y^2 + z^2$ |
    | $x = r \cos \theta$       | $r = \rho \sin \phi$      | $x = \rho \sin \phi \cos \theta$ |
    | $y = r \sin \theta$       | $\theta = \theta$         | $y = \rho \sin \phi \sin \theta$ |
    | $z = z$                   | $z = \rho \cos \phi$      | $z = \rho \cos \phi$      |

    **Key relationships for Spherical to Cartesian:**
    $$
    x = \rho \sin \phi \cos \theta \\
    y = \rho \sin \phi \sin \theta \\
    z = \rho \cos \phi
    $$
    And from Cartesian to Spherical:
    $$
    \rho^2 = x^2 + y^2 + z^2 \\
    \tan \theta = \frac{y}{x} \quad (\text{for } x \ne 0) \\
    \cos \phi = \frac{z}{\rho} = \frac{z}{\sqrt{x^2+y^2+z^2}}
    $$

#### B. The Differential Volume Element ($dV$)

Just as with cylindrical coordinates, the differential volume element is different in spherical coordinates. Imagine a tiny "spherical box" formed by infinitesimally small changes in $\rho$, $\theta$, and $\phi$.

*   The radial dimension is $d\rho$.
*   The arc length in the $xy$-plane due to $d\theta$ at radius $r = \rho \sin\phi$ is $r \, d\theta = \rho \sin\phi \, d\theta$.
*   The arc length in the $\phi$ direction due to $d\phi$ at distance $\rho$ is $\rho \, d\phi$.

Multiplying these three dimensions gives us the differential volume element in spherical coordinates:

$$
dV = \rho^2 \sin \phi \, d\rho \, d\phi \, d\theta
$$

Yes, you heard that right! The factor is $\rho^2 \sin\phi$. This is another critical factor that students often forget, much to their peril! The $\rho^2$ comes from the two arc lengths ($\rho d\phi$ and $\rho \sin\phi d\theta$), and the $\sin\phi$ factor arises from how the "width" of the spherical wedge shrinks as you move closer to the $z$-axis (where $\phi=0$ or $\phi=\pi$, and $\sin\phi=0$).

#### C. Setting Up a Triple Integral in Spherical Coordinates

To set up a triple integral over a solid $S$ in spherical coordinates:

$$
\iiint_S f(x, y, z) \, dV = \iiint_S f(\rho \sin \phi \cos \theta, \rho \sin \phi \sin \theta, \rho \cos \phi) \, \rho^2 \sin \phi \, d\rho \, d\phi \, d\theta
$$

The usual order of integration is $d\rho \, d\phi \, d\theta$.

**Procedure for Setting Up a Triple Integral in Spherical Coordinates:**

1.  **Sketch the Solid:** Visualize or sketch the region $S$.
2.  **Convert the Function:** Express the integrand $f(x, y, z)$ in spherical coordinates using the conversion formulas.
3.  **Determine $\rho$-limits:**
    *   For fixed $\theta$ and $\phi$, determine how $\rho$ varies from the origin ($0$) outwards.
    *   The inner boundary for $\rho$ is often $\rho=0$ or a surface $\rho = g_1(\theta, \phi)$.
    *   The outer boundary for $\rho$ is a surface $\rho = g_2(\theta, \phi)$.
    *   So, $g_1(\theta, \phi) \le \rho \le g_2(\theta, \phi)$.
4.  **Determine $\phi$-limits:**
    *   For fixed $\theta$, determine how $\phi$ varies from the positive $z$-axis ($\phi=0$) to the negative $z$-axis ($\phi=\pi$).
    *   The lower boundary for $\phi$ is $\phi_1$ and the upper boundary is $\phi_2$.
    *   So, $\phi_1 \le \phi \le \phi_2$. (Remember $0 \le \phi \le \pi$).
5.  **Determine $\theta$-limits:**
    *   Determine how $\theta$ varies to sweep out the entire solid $S$ around the $z$-axis.
    *   The lower boundary for $\theta$ is $\theta_1$ and the upper boundary is $\theta_2$.
    *   So, $\theta_1 \le \theta \le \theta_2$. (Remember $0 \le \theta < 2\pi$).
6.  **Assemble the Integral:** Combine everything, remembering the $\rho^2 \sin\phi$ factor in $dV$:
    $$
    \iiint_S f(x, y, z) \, dV = \int_{\theta_1}^{\theta_2} \int_{\phi_1}^{\phi_2} \int_{g_1(\theta, \phi)}^{g_2(\theta, \phi)} f(\rho, \theta, \phi) \, \rho^2 \sin \phi \, d\rho \, d\phi \, d\theta
    $$

#### D. Worked Examples (Spherical Coordinates)

##### Example 4: Converting an Equation from Cartesian to Spherical Coordinates

**(Hawkes Slide 32, Professor's Notes Page 4)**

**Problem:** Convert the equation $(x-2)^2 + y^2 + z^2 = 4$ to spherical coordinates.

**Solution:**
First, expand the Cartesian equation:
$x^2 - 4x + 4 + y^2 + z^2 = 4$

Rearrange terms:
$x^2 + y^2 + z^2 - 4x = 0$

Now, substitute the spherical conversion formulas:
*   $x^2 + y^2 + z^2 = \rho^2$
*   $x = \rho \sin \phi \cos \theta$

Substitute these into the equation:
$\rho^2 - 4(\rho \sin \phi \cos \theta) = 0$

Factor out $\rho$:
$\rho(\rho - 4 \sin \phi \cos \theta) = 0$

This equation implies either $\rho = 0$ (which is just the origin) or $\rho - 4 \sin \phi \cos \theta = 0$.
Assuming we are describing the sphere itself (not just the origin), we have:
$\rho = 4 \sin \phi \cos \theta$

This is the equation of the sphere in spherical coordinates. Notice that this sphere is centered at $(2,0,0)$ with radius $2$.

##### Example 5: Setting Up a Triple Integral in Spherical Coordinates

**(Hawkes Slide 40, Professor's Notes Page 5)**

**Problem:** Set up the general form for the integral of a function $f(x, y, z)$ over the solid $S$ defined as the first-octant portion of the sphere $(x-2)^2 + y^2 + z^2 = 4$.

**Solution (Setup Only):**
1.  **Convert to Spherical Coordinates:**
    From Example 4, the equation of the sphere in spherical coordinates is $\rho = 4 \sin \phi \cos \theta$.
    The integrand $f(x,y,z)$ becomes $f(\rho \sin \phi \cos \theta, \rho \sin \phi \sin \theta, \rho \cos \phi)$.
    The differential volume element is $dV = \rho^2 \sin \phi \, d\rho \, d\phi \, d\theta$.

2.  **Determine $\rho$-limits:**
    The solid starts from the origin ($\rho=0$) and extends to the surface of the sphere.
    So, $0 \le \rho \le 4 \sin \phi \cos \theta$.

3.  **Determine $\phi$-limits:**
    The "first-octant" restriction means $x \ge 0, y \ge 0, z \ge 0$.
    Since $z = \rho \cos \phi$, for $z \ge 0$ (and $\rho \ge 0$), we must have $\cos \phi \ge 0$. This implies $0 \le \phi \le \pi/2$.
    (Also, recall that the sphere $\rho = 4 \sin \phi \cos \theta$ means $\rho \ge 0$. Since $\sin\phi \ge 0$ for $0 \le \phi \le \pi$, we need $\cos\theta \ge 0$ for $\rho \ge 0$. This is consistent with the first octant $\theta$ limit.)
    So, $0 \le \phi \le \pi/2$.

4.  **Determine $\theta$-limits:**
    For the first octant, $x \ge 0$ and $y \ge 0$. This means $\theta$ ranges from $0$ to $\pi/2$.
    So, $0 \le \theta \le \pi/2$.

5.  **Assemble the Integral:**
    The general form of the integral is:
    $$
    \iiint_S f(x, y, z) \, dV = \int_0^{\pi/2} \int_0^{\pi/2} \int_0^{4 \sin \phi \cos \theta} f(\rho \sin \phi \cos \theta, \rho \sin \phi \sin \theta, \rho \cos \phi) \, \rho^2 \sin \phi \, d\rho \, d\phi \, d\theta
    $$
    This integral is now set up!

##### Example 6: Volume of a Solid Bounded by a Cone and a Sphere

**(Hawkes Slide 42, Professor's Notes Page 5)**

**Problem:** Find the volume of the solid bounded below by the cone $\phi = \pi/6$ and above by the sphere $\rho = 1$.

**Solution:**
1.  **Sketch the Solid:** The solid is a cone opening upwards from the origin, with its vertex at the origin, and its "top" is capped by a sphere of radius 1 centered at the origin.
2.  **Convert to Spherical Coordinates:**
    *   Lower boundary: The cone is given directly as $\phi = \pi/6$.
    *   Upper boundary: The sphere is given directly as $\rho = 1$.
    *   The integrand for volume is $f(x, y, z) = 1$. So, $f(\rho, \theta, \phi) = 1$.
    *   The differential volume element is $dV = \rho^2 \sin \phi \, d\rho \, d\phi \, d\theta$.

3.  **Determine $\rho$-limits:**
    The solid extends from the origin ($\rho=0$) to the sphere $\rho=1$.
    So, $0 \le \rho \le 1$.

4.  **Determine $\phi$-limits:**
    The solid is bounded below by the cone $\phi = \pi/6$. It extends upwards from the $z$-axis (which is $\phi=0$).
    So, $0 \le \phi \le \pi/6$. (Note: if the cone was pointing down, $\phi$ would be from $\pi/6$ to $\pi$).

5.  **Determine $\theta$-limits:**
    The solid is symmetric around the $z$-axis, so $\theta$ sweeps a full circle.
    So, $0 \le \theta \le 2\pi$.

6.  **Assemble and Evaluate the Integral:**
    The volume $V$ is given by:
    $$
    V = \iiint_S dV = \int_0^{2\pi} \int_0^{\pi/6} \int_0^1 \rho^2 \sin \phi \, d\rho \, d\phi \, d\theta
    $$
    First, integrate with respect to $\rho$:
    $$
    \int_0^1 \rho^2 \sin \phi \, d\rho = \sin \phi \left[\frac{\rho^3}{3}\right]_0^1 = \sin \phi \left(\frac{1^3}{3} - 0\right) = \frac{1}{3} \sin \phi
    $$
    Next, integrate with respect to $\phi$:
    $$
    \int_0^{\pi/6} \frac{1}{3} \sin \phi \, d\phi = \frac{1}{3} [-\cos \phi]_0^{\pi/6} = -\frac{1}{3} \left(\cos\frac{\pi}{6} - \cos 0\right) \\
    = -\frac{1}{3} \left(\frac{\sqrt{3}}{2} - 1\right) = \frac{1}{3} \left(1 - \frac{\sqrt{3}}{2}\right) = \frac{2 - \sqrt{3}}{6}
    $$
    Finally, integrate with respect to $\theta$:
    $$
    V = \int_0^{2\pi} \frac{2 - \sqrt{3}}{6} \, d\theta = \frac{2 - \sqrt{3}}{6} [\theta]_0^{2\pi} = \frac{2 - \sqrt{3}}{6} (2\pi - 0) = \frac{\pi(2 - \sqrt{3})}{3}
    $$
    The volume of the solid is $\frac{\pi(2 - \sqrt{3})}{3}$ cubic units.

##### Problem 103 (From Professor's Practice Problems): Set up Volume Integral

**(Professor's Notes Page 6)**

**Problem:** Set up a triple integral in spherical coordinates for the volume of the solid $S$: The first-octant portion of the sphere $x^2 + y^2 + (z-3)^2 = 9$. Do not evaluate the integral.

**Solution (Setup Only):**
1.  **Convert to Spherical Coordinates:**
    First, expand the Cartesian equation:
    $x^2 + y^2 + z^2 - 6z + 9 = 9$
    $x^2 + y^2 + z^2 = 6z$

    Now, substitute spherical conversion formulas:
    *   $x^2 + y^2 + z^2 = \rho^2$
    *   $z = \rho \cos \phi$

    Substitute these into the equation:
    $\rho^2 = 6(\rho \cos \phi)$

    Factor out $\rho$:
    $\rho(\rho - 6 \cos \phi) = 0$

    This implies either $\rho = 0$ (the origin) or $\rho = 6 \cos \phi$. The latter describes the sphere.
    The integrand for volume is $f(x, y, z) = 1$. So, $f(\rho, \theta, \phi) = 1$.
    The differential volume element is $dV = \rho^2 \sin \phi \, d\rho \, d\phi \, d\theta$.

2.  **Determine $\rho$-limits:**
    The solid starts from the origin ($\rho=0$) and extends to the surface $\rho = 6 \cos \phi$.
    So, $0 \le \rho \le 6 \cos \phi$.

3.  **Determine $\phi$-limits:**
    The "first-octant" restriction means $x \ge 0, y \ge 0, z \ge 0$.
    For $\rho = 6 \cos \phi$ to define a physical region (where $\rho \ge 0$), we must have $\cos \phi \ge 0$. This means $0 \le \phi \le \pi/2$.
    The entire solid is above the $xy$-plane (since $z \ge 0$), and $\phi$ sweeps from the positive $z$-axis down to the $xy$-plane.
    So, $0 \le \phi \le \pi/2$.

4.  **Determine $\theta$-limits:**
    For the first octant ($x \ge 0, y \ge 0$), $\theta$ ranges from $0$ to $\pi/2$.
    So, $0 \le \theta \le \pi/2$.

5.  **Assemble the Integral:**
    The volume $V$ is given by:
    $$
    V = \iiint_S dV = \int_0^{\pi/2} \int_0^{\pi/2} \int_0^{6 \cos \phi} \rho^2 \sin \phi \, d\rho \, d\phi \, d\theta
    $$
    This integral is now set up and ready for evaluation (which we are not performing here per the problem statement).

---

### III. Practice & Reflection: Conceptual Check-In!

Alright, my intrepid explorers of higher dimensions! That was quite a journey. Before you dash off to conquer your homework, let's just make sure those gears are properly meshing.

1.  **The Case of the Missing $r$ or $\rho^2 \sin\phi$**:
    You're setting up a triple integral in cylindrical coordinates, and you meticulously write down your integrand and limits. But then you forget the $r$ in $dV$. Or, in spherical, you forget the $\rho^2 \sin\phi$. What kind of error would this most likely lead to?
    (A) A sign error (positive vs. negative).
    (B) An incorrect numerical value (often off by a significant factor).
    (C) An integral that is impossible to evaluate.
    (D) A dimensionally inconsistent result (e.g., volume comes out as an area).

2.  **Choosing Your Weapon (Coordinate System)**:
    You need to find the mass of a solid. How would you decide whether to use Cartesian, Cylindrical, or Spherical coordinates? What key features of the *solid's boundaries* and the *integrand (density function)* would steer your choice? Give an example of a solid and density function for which each system would be the "easiest" choice.

3.  **The Angle of Confusion ($\phi$ vs. $\theta$)**:
    In spherical coordinates, why does $\phi$ only range from $0$ to $\pi$, while $\theta$ ranges from $0$ to $2\pi$? What would happen if $\phi$ ranged from $0$ to $2\pi$?

4.  **$r=2\cos\theta$ and the $xy$-plane**:
    In Example 3, we had a circle $r=2\cos\theta$ in the $xy$-plane. If we were to integrate over this region, why do the $\theta$ limits go from $-\pi/2$ to $\pi/2$ instead of $0$ to $2\pi$? What does $\cos\theta$ have to do with it?

Think about these, discuss them with your classmates, or simply ponder them deeply in your mind. True understanding comes not just from calculation, but from deep conceptual grasp!

---

That concludes our exploration of Section 14.5! Remember, practice is the key, and don't be afraid to experiment with these new coordinate systems. They are powerful tools for solving complex problems.

Now, if you'll excuse me, I hear the lab calling for a new invention involving triple integrals... To the lab!

Professor Hubert J. Farnsworth
Math 303 TA and Pedagogical Assistant
Milligan University