Good news, everyone! Today, we embark on a truly exhilarating journey into the heart of Multivariable Calculus! Prepare your brains for a delightful explosion of knowledge as we explore the magnificent **applications of double integrals**. This isn't just abstract number-crunching; it's about understanding the very fabric of our planar objects, from their humble areas to their ponderous rotational properties!

Hold onto your hats (and your calculators), because we're diving into **Math 303, Section 14.2: Applications of Double Integrals!**

***

# Math 303: Multivariable Calculus
## Section 14.2: Applications of Double Integrals

### Overview: What Marvels Await Us?

My dear students, you've mastered the art of computing double integrals over various regions. But what good is a powerful mathematical tool if you don't know how to wield it? Today, we shall unveil the practical marvels of double integrals! We'll discover how to:

1.  **Calculate the Area of a Region:** A fundamental application, showing us that our double integral can reduce to a simple area computation.
2.  **Determine the Average Value of a Function:** Extending the idea of average value from single-variable calculus to a two-dimensional domain.
3.  **Uncover First Moments, Mass, and Center of Mass:** This is where we start understanding the "balance" of objects. Imagine finding the perfect point to spin a pizza on your finger – that's the center of mass!
4.  **Explore Second Moments, Moments of Inertia, and Radii of Gyration:** These concepts are crucial for understanding how objects resist rotation and how much rotational energy they possess. Essential for any aspiring rocket scientist or perpetual motion machine designer!

Strap in, because this is going to be a wild ride through the wonders of integral calculus!

---

### Topic 1: Area by Double Integration – The Simplest Yet Profound Application!

Let's start with something familiar, but viewed through a new lens. Remember how a single integral $\int_a^b f(x) \, dx$ could represent the area under a curve? Well, a double integral can calculate the area of a region $R$ in the $xy$-plane directly!

#### Core Concept: Area of a Region

If we consider a function $f(x,y) = 1$ over a region $R$, then the volume of the solid between the region $R$ and the plane $z=1$ is simply the area of the base $R$ multiplied by a height of $1$.

$$ \text{Volume} = \iint_R 1 \, dA = \text{Area}(R) $$

Thus, the area of a planar region $R$ can be found by evaluating the double integral of the constant function $1$ over $R$. This is wonderfully elegant, isn't it?

**Definition:** The **Area** of a closed, bounded region $R$ in the $xy$-plane is given by:
$$ A = \iint_R dA $$

#### Example 1: Using a Double Integral to Find the Area between Two Parabolas

Let's tackle a classic problem. Imagine two parabolas, $y = 3x^2$ and $y = 2 + x^2$. We want to find the area of the region $R$ bounded between them.

**Problem:** Find the area of the region $R$ bounded between the parabolas $y = 3x^2$ and $y = 2 + x^2$.

**Solution:**

1.  **Sketch the Region and Find Intersection Points:**
    *   First, we need to know where these parabolas meet. Set their $y$-values equal:
        $3x^2 = 2 + x^2$
        $2x^2 = 2$
        $x^2 = 1$
        $x = \pm 1$
    *   When $x = 1$, $y = 3(1)^2 = 3$ (or $y = 2 + (1)^2 = 3$). Point: $(1, 3)$.
    *   When $x = -1$, $y = 3(-1)^2 = 3$ (or $y = 2 + (-1)^2 = 3$). Point: $(-1, 3)$.
    *   The parabola $y = 2 + x^2$ opens upwards and has its vertex at $(0, 2)$.
    *   The parabola $y = 3x^2$ also opens upwards but is "skinnier," with its vertex at $(0, 0)$.
    *   The region $R$ is bounded above by $y = 2 + x^2$ and below by $y = 3x^2$, for $x$ from $-1$ to $1$. This makes it a Type I region.

    *(Imagine a beautiful diagram here, showing the two parabolas intersecting at $(-1,3)$ and $(1,3)$, with the enclosed region R shaded.)*

2.  **Set up the Double Integral:**
    Using the area formula $A = \iint_R dA$, and describing $R$ as a Type I region:
    $R = \{ (x,y) \mid -1 \le x \le 1, \quad 3x^2 \le y \le 2+x^2 \}$
    So, our integral becomes:
    $$ A = \int_{-1}^{1} \int_{3x^2}^{2+x^2} dy \, dx $$

3.  **Evaluate the Inner Integral:**
    $$ \int_{3x^2}^{2+x^2} dy = [y]_{3x^2}^{2+x^2} = (2+x^2) - (3x^2) = 2 - 2x^2 $$

4.  **Evaluate the Outer Integral:**
    $$ A = \int_{-1}^{1} (2 - 2x^2) \, dx $$
    $$ A = \left[ 2x - \frac{2}{3}x^3 \right]_{-1}^{1} $$
    $$ A = \left( 2(1) - \frac{2}{3}(1)^3 \right) - \left( 2(-1) - \frac{2}{3}(-1)^3 \right) $$
    $$ A = \left( 2 - \frac{2}{3} \right) - \left( -2 + \frac{2}{3} \right) $$
    $$ A = \left( \frac{6}{3} - \frac{2}{3} \right) - \left( -\frac{6}{3} + \frac{2}{3} \right) $$
    $$ A = \left( \frac{4}{3} \right) - \left( -\frac{4}{3} \right) $$
    $$ A = \frac{4}{3} + \frac{4}{3} = \frac{8}{3} $$

**Result:** The area of the region $R$ is $\frac{8}{3}$ square units. Great Scott, that's a precise measurement!

---

### Topic 2: The Average Value of a Function – A Deeper Insight into Our Regions!

Just like we found the average height of a function $f(x)$ over an interval $[a,b]$ with $\frac{1}{b-a}\int_a^b f(x) \, dx$, we can extend this concept to find the average value of a multivariable function $f(x,y)$ over a two-dimensional region $R$.

#### Core Concept: Average Value of $f(x,y)$

If we think of $f(x,y)$ as representing the "height" of a surface above the $xy$-plane, then $\iint_R f(x,y) \, dA$ gives us the volume under that surface. To find the average height, we simply divide this volume by the area of the base region $R$. It's like leveling out a mountain range to a flat plateau of average height!

**Definition:** The **average value** of a continuous function $f(x,y)$ over a region $R$ is given by:
$$ \bar{f} = \frac{1}{\text{Area}(R)} \iint_R f(x,y) \, dA $$

#### Example 2: Finding the Average Value of a Function over a Region

Let's use the very same region $R$ from Example 1 and find the average value of a given function over it.

**Problem:** Find the average value of $f(x,y) = 5y$ over the region $R$ from Example 1 (bounded by $y = 3x^2$ and $y = 2 + x^2$).

**Solution:**

1.  **Recall the Area of the Region:**
    From Example 1, we calculated the Area$(R) = \frac{8}{3}$. Perfect, one piece of the puzzle is already solved!

2.  **Evaluate the Double Integral of $f(x,y)$ over $R$:**
    We need to calculate $\iint_R 5y \, dA$. The region $R$ is defined as $-1 \le x \le 1$ and $3x^2 \le y \le 2+x^2$.
    $$ \iint_R 5y \, dA = \int_{-1}^{1} \int_{3x^2}^{2+x^2} 5y \, dy \, dx $$

    *   **Inner Integral:**
        $$ \int_{3x^2}^{2+x^2} 5y \, dy = \left[ \frac{5}{2}y^2 \right]_{3x^2}^{2+x^2} $$
        $$ = \frac{5}{2}(2+x^2)^2 - \frac{5}{2}(3x^2)^2 $$
        $$ = \frac{5}{2} [ (4 + 4x^2 + x^4) - (9x^4) ] $$
        $$ = \frac{5}{2} [ 4 + 4x^2 - 8x^4 ] $$

    *   **Outer Integral:**
        $$ \iint_R 5y \, dA = \int_{-1}^{1} \frac{5}{2} (4 + 4x^2 - 8x^4) \, dx $$
        $$ = \frac{5}{2} \left[ 4x + \frac{4}{3}x^3 - \frac{8}{5}x^5 \right]_{-1}^{1} $$
        Since the integrand $4 + 4x^2 - 8x^4$ is an even function, we can simplify this to $2 \times \int_{0}^{1} \frac{5}{2} (4 + 4x^2 - 8x^4) \, dx = 5 \int_{0}^{1} (4 + 4x^2 - 8x^4) \, dx$.
        $$ = 5 \left[ 4x + \frac{4}{3}x^3 - \frac{8}{5}x^5 \right]_{0}^{1} $$
        $$ = 5 \left( \left( 4(1) + \frac{4}{3}(1)^3 - \frac{8}{5}(1)^5 \right) - (0) \right) $$
        $$ = 5 \left( 4 + \frac{4}{3} - \frac{8}{5} \right) $$
        To sum these fractions, find a common denominator (15):
        $$ = 5 \left( \frac{60}{15} + \frac{20}{15} - \frac{24}{15} \right) $$
        $$ = 5 \left( \frac{60+20-24}{15} \right) $$
        $$ = 5 \left( \frac{56}{15} \right) $$
        $$ = \frac{56}{3} $$

    Hoo-boy, that was quite a calculation! But we did it! So, $\iint_R 5y \, dA = \frac{56}{3}$.

3.  **Calculate the Average Value:**
    Now, combine the integral value with the area:
    $$ \bar{f} = \frac{1}{\text{Area}(R)} \iint_R f(x,y) \, dA $$
    $$ \bar{f} = \frac{1}{8/3} \cdot \frac{56}{3} $$
    $$ \bar{f} = \frac{3}{8} \cdot \frac{56}{3} $$
    $$ \bar{f} = \frac{56}{8} = 7 $$

**Result:** The average value of the function $f(x,y) = 5y$ over the region $R$ is $7$. Simply fascinating!

---

### Topic 3: First Moments, Mass, and Center of Mass – Finding the Balance Point!

Now we delve into the realm of physics and engineering! Imagine a flat plate, possibly with varying thickness or material. We can use double integrals to find its total mass and, more importantly, its **center of mass** – the unique point where the plate would perfectly balance.

#### Core Concepts: Mass, First Moments, and Center of Mass

Let's assume our planar object is modeled as a region $R$ in the $xy$-plane, and its **density** (mass per unit area) at any point $(x,y)$ is given by the function $\rho(x,y)$.

**1. Mass ($M$):**
The total mass of the object is found by integrating the density function over the entire region $R$. It's like summing up all the tiny masses of infinitesimal pieces $dA$, each with density $\rho(x,y)$.
$$ M = \iint_R \rho(x,y) \, dA $$

**2. First Moments ($M_x, M_y$):**
First moments are measures of an object's tendency to rotate about an axis. They're related to torque.
*   **Moment about the x-axis ($M_x$):** This measures the tendency to rotate about the $x$-axis. The "lever arm" for a point $(x,y)$ with respect to the $x$-axis is its $y$-coordinate.
    $$ M_x = \iint_R y \rho(x,y) \, dA $$
*   **Moment about the y-axis ($M_y$):** This measures the tendency to rotate about the $y$-axis. The "lever arm" for a point $(x,y)$ with respect to the $y$-axis is its $x$-coordinate.
    $$ M_y = \iint_R x \rho(x,y) \, dA $$

**3. Center of Mass ($\bar{x}, \bar{y}$):**
The center of mass is the point $(\bar{x}, \bar{y})$ where the entire mass of the object can be considered to be concentrated for the purpose of analyzing its linear motion or static equilibrium. It's the balance point!
$$ \bar{x} = \frac{M_y}{M} \quad \text{and} \quad \bar{y} = \frac{M_x}{M} $$

#### Example 3: Finding the Center of Mass of a Plate of Varying Density

Let's put these definitions into action with a triangular plate!

**Problem:** Find the center of mass of the triangular plate bounded by $y = 0$, $x = 1$, and $y = x$ if the density of the plate at the point $(x,y)$ is given by $\rho(x,y) = x^2 + y$.

**Solution:**

1.  **Sketch the Region $R$:**
    *   The plate is bounded by $y=0$ (the $x$-axis), $x=1$ (a vertical line), and $y=x$ (a diagonal line through the origin).
    *   The vertices of this triangular region are $(0,0)$, $(1,0)$, and $(1,1)$.
    *   This is a Type I region: $0 \le x \le 1$ and $0 \le y \le x$. (Or Type II: $0 \le y \le 1$ and $y \le x \le 1$). Let's use Type I for calculation.

    *(Imagine a triangular region with vertices (0,0), (1,0), (1,1) shaded, and the density function $\rho(x,y)=x^2+y$ written nearby.)*

2.  **Calculate the Mass ($M$):**
    $$ M = \iint_R \rho(x,y) \, dA = \int_{0}^{1} \int_{0}^{x} (x^2 + y) \, dy \, dx $$
    *   **Inner Integral:**
        $$ \int_{0}^{x} (x^2 + y) \, dy = \left[ x^2y + \frac{1}{2}y^2 \right]_{0}^{x} $$
        $$ = (x^2(x) + \frac{1}{2}(x)^2) - (0) = x^3 + \frac{1}{2}x^2 $$
    *   **Outer Integral:**
        $$ M = \int_{0}^{1} \left( x^3 + \frac{1}{2}x^2 \right) \, dx $$
        $$ = \left[ \frac{1}{4}x^4 + \frac{1}{6}x^3 \right]_{0}^{1} $$
        $$ = \left( \frac{1}{4}(1)^4 + \frac{1}{6}(1)^3 \right) - (0) $$
        $$ = \frac{1}{4} + \frac{1}{6} = \frac{3}{12} + \frac{2}{12} = \frac{5}{12} $$
    So, the total mass is $M = \frac{5}{12}$.

3.  **Calculate the First Moment about the x-axis ($M_x$):**
    $$ M_x = \iint_R y \rho(x,y) \, dA = \int_{0}^{1} \int_{0}^{x} y(x^2 + y) \, dy \, dx $$
    $$ = \int_{0}^{1} \int_{0}^{x} (x^2y + y^2) \, dy \, dx $$
    *   **Inner Integral:**
        $$ \int_{0}^{x} (x^2y + y^2) \, dy = \left[ \frac{1}{2}x^2y^2 + \frac{1}{3}y^3 \right]_{0}^{x} $$
        $$ = (\frac{1}{2}x^2(x)^2 + \frac{1}{3}(x)^3) - (0) = \frac{1}{2}x^4 + \frac{1}{3}x^3 $$
    *   **Outer Integral:**
        $$ M_x = \int_{0}^{1} \left( \frac{1}{2}x^4 + \frac{1}{3}x^3 \right) \, dx $$
        $$ = \left[ \frac{1}{10}x^5 + \frac{1}{12}x^4 \right]_{0}^{1} $$
        $$ = \left( \frac{1}{10}(1)^5 + \frac{1}{12}(1)^4 \right) - (0) $$
        $$ = \frac{1}{10} + \frac{1}{12} = \frac{6}{60} + \frac{5}{60} = \frac{11}{60} $$
    So, $M_x = \frac{11}{60}$.

4.  **Calculate the First Moment about the y-axis ($M_y$):**
    $$ M_y = \iint_R x \rho(x,y) \, dA = \int_{0}^{1} \int_{0}^{x} x(x^2 + y) \, dy \, dx $$
    $$ = \int_{0}^{1} \int_{0}^{x} (x^3 + xy) \, dy \, dx $$
    *   **Inner Integral:**
        $$ \int_{0}^{x} (x^3 + xy) \, dy = \left[ x^3y + \frac{1}{2}xy^2 \right]_{0}^{x} $$
        $$ = (x^3(x) + \frac{1}{2}x(x)^2) - (0) = x^4 + \frac{1}{2}x^3 $$
    *   **Outer Integral:**
        $$ M_y = \int_{0}^{1} \left( x^4 + \frac{1}{2}x^3 \right) \, dx $$
        $$ = \left[ \frac{1}{5}x^5 + \frac{1}{8}x^4 \right]_{0}^{1} $$
        $$ = \left( \frac{1}{5}(1)^5 + \frac{1}{8}(1)^4 \right) - (0) $$
        $$ = \frac{1}{5} + \frac{1}{8} = \frac{8}{40} + \frac{5}{40} = \frac{13}{40} $$
    So, $M_y = \frac{13}{40}$.

5.  **Calculate the Center of Mass ($\bar{x}, \bar{y}$):**
    Now, for the grand reveal, the balance point!
    $$ \bar{x} = \frac{M_y}{M} = \frac{13/40}{5/12} = \frac{13}{40} \cdot \frac{12}{5} = \frac{13 \cdot 3}{10 \cdot 5} = \frac{39}{50} $$
    $$ \bar{y} = \frac{M_x}{M} = \frac{11/60}{5/12} = \frac{11}{60} \cdot \frac{12}{5} = \frac{11 \cdot 1}{5 \cdot 5} = \frac{11}{25} $$

**Result:** The center of mass of the triangular plate is $\left( \frac{39}{50}, \frac{11}{25} \right)$. Incredible! This is where you'd put your finger to perfectly balance this weirdly dense plate.

*(Professor Lundholm's notes also *refer* to Example 4 (Section 14.4) and Example 3 (Section 15.2) at this point, but they are not worked out in this section. We will cover those specific gems when we arrive at their respective sections. For now, let's keep our focus on the current mission!)*

---

### Topic 4: Second Moments (Moment of Inertia) and Radii of Gyration – The Dance of Rotation!

While first moments tell us about static balance, **second moments**, or **moments of inertia**, dive into the dynamics of rotation. They describe an object's resistance to changes in its rotational motion. Think about a spinning ice skater: when she pulls her arms in, her moment of inertia decreases, and she spins faster. This is the magic we're quantifying!

#### Core Concepts: Second Moments and Radii of Gyration

Just as with first moments, we'll use the density function $\rho(x,y)$ over a region $R$.

**1. Second Moments (Moments of Inertia):**
*   **Second Moment about the x-axis ($I_x$):** This measures resistance to rotation about the $x$-axis. The square of the "lever arm" $y$ is used here, reflecting the $r^2$ dependence in kinetic energy formulas ($E_k = \frac{1}{2}I\omega^2$).
    $$ I_x = \iint_R y^2 \rho(x,y) \, dA $$
*   **Second Moment about the y-axis ($I_y$):** Measures resistance to rotation about the $y$-axis. Here, the square of the $x$-coordinate is the crucial factor.
    $$ I_y = \iint_R x^2 \rho(x,y) \, dA $$
*   **Second Moment about the Origin ($I_O$) / Polar Moment of Inertia:** This measures resistance to rotation about the origin. The distance from the origin squared is $x^2+y^2$.
    $$ I_O = \iint_R (x^2+y^2) \rho(x,y) \, dA $$
    A fantastic property of the polar moment is that it's simply the sum of the moments about the $x$ and $y$ axes: $I_O = I_x + I_y$. This is a powerful shortcut!

**2. Radii of Gyration ($r_x, r_y, r_O$):**
The radii of gyration are conceptual distances. Imagine concentrating the entire mass $M$ of an object into a single point (a "point mass"). The radius of gyration about an axis is the distance $r$ this point mass would need to be from that axis to have the *same* moment of inertia as the original object.
$$ r_x = \sqrt{\frac{I_x}{M}} \quad \text{and} \quad r_y = \sqrt{\frac{I_y}{M}} \quad \text{and} \quad r_O = \sqrt{\frac{I_O}{M}} $$
These are quite useful in engineering for simplifying complex rotational problems!

#### Example 4: Finding Second Moments of a Disk

Let's apply these definitions to a geometrically simple, yet fundamentally important object: a disk!

**Problem:** Determine $I_x$, $I_y$, and $I_O$ for a disk of radius $a$ and constant density $\rho$ centered at the origin of the $xy$-plane. Then find its three radii of gyration.

**Solution:**

1.  **Define the Region and Density:**
    *   The region $R$ is a disk centered at the origin with radius $a$. In Cartesian coordinates, this is $x^2+y^2 \le a^2$.
    *   The density is constant: $\rho(x,y) = \rho$.
    *   The total mass of the disk is $M = \text{Area} \times \text{Density} = (\pi a^2) \rho$. We'll confirm this with integration.

2.  **Calculate the Mass ($M$):**
    Using the density and converting to polar coordinates (which is often easiest for disks):
    $R = \{ (r,\theta) \mid 0 \le r \le a, \quad 0 \le \theta \le 2\pi \}$
    $dA = r \, dr \, d\theta$
    $$ M = \iint_R \rho \, dA = \int_{0}^{2\pi} \int_{0}^{a} \rho r \, dr \, d\theta $$
    $$ M = \rho \int_{0}^{2\pi} \left[ \frac{1}{2}r^2 \right]_{0}^{a} \, d\theta = \rho \int_{0}^{2\pi} \frac{1}{2}a^2 \, d\theta $$
    $$ M = \frac{1}{2}\rho a^2 [\theta]_{0}^{2\pi} = \frac{1}{2}\rho a^2 (2\pi) = \pi \rho a^2 $$
    Indeed, $M = \pi \rho a^2$. Perfect!

3.  **Calculate the Second Moment about the x-axis ($I_x$):**
    $$ I_x = \iint_R y^2 \rho \, dA = \rho \iint_R y^2 \, dA $$
    Let's stick to Cartesian coordinates for a moment to demonstrate a common technique, then consider polar.
    The region is $R = \{ (x,y) \mid -a \le x \le a, \quad -\sqrt{a^2-x^2} \le y \le \sqrt{a^2-x^2} \}$.
    $$ I_x = \rho \int_{-a}^{a} \int_{-\sqrt{a^2-x^2}}^{\sqrt{a^2-x^2}} y^2 \, dy \, dx $$
    *   **Inner Integral:**
        $$ \int_{-\sqrt{a^2-x^2}}^{\sqrt{a^2-x^2}} y^2 \, dy = \left[ \frac{1}{3}y^3 \right]_{-\sqrt{a^2-x^2}}^{\sqrt{a^2-x^2}} $$
        $$ = \frac{1}{3} (\sqrt{a^2-x^2})^3 - \frac{1}{3} (-\sqrt{a^2-x^2})^3 $$
        $$ = \frac{1}{3} (a^2-x^2)^{3/2} - (-\frac{1}{3} (a^2-x^2)^{3/2}) $$
        $$ = \frac{2}{3} (a^2-x^2)^{3/2} $$
    *   **Outer Integral:**
        $$ I_x = \rho \int_{-a}^{a} \frac{2}{3} (a^2-x^2)^{3/2} \, dx $$
        This integral is best solved using a trigonometric substitution. Let $x = a \sin \theta$, so $dx = a \cos \theta \, d\theta$.
        When $x = -a$, $\sin \theta = -1 \Rightarrow \theta = -\pi/2$.
        When $x = a$, $\sin \theta = 1 \Rightarrow \theta = \pi/2$.
        Also, $(a^2-x^2)^{3/2} = (a^2 - a^2 \sin^2 \theta)^{3/2} = (a^2 \cos^2 \theta)^{3/2} = a^3 \cos^3 \theta$.
        $$ I_x = \frac{2\rho}{3} \int_{-\pi/2}^{\pi/2} (a^3 \cos^3 \theta) (a \cos \theta) \, d\theta $$
        $$ = \frac{2\rho a^4}{3} \int_{-\pi/2}^{\pi/2} \cos^4 \theta \, d\theta $$
        Using the power-reduction formulas: $\cos^2 \theta = \frac{1+\cos(2\theta)}{2}$.
        $\cos^4 \theta = (\cos^2 \theta)^2 = \left( \frac{1+\cos(2\theta)}{2} \right)^2 = \frac{1}{4} (1 + 2\cos(2\theta) + \cos^2(2\theta))$
        $= \frac{1}{4} \left( 1 + 2\cos(2\theta) + \frac{1+\cos(4\theta)}{2} \right)$
        $= \frac{1}{4} \left( \frac{3}{2} + 2\cos(2\theta) + \frac{1}{2}\cos(4\theta) \right)$
        $$ I_x = \frac{2\rho a^4}{3} \int_{-\pi/2}^{\pi/2} \frac{1}{4} \left( \frac{3}{2} + 2\cos(2\theta) + \frac{1}{2}\cos(4\theta) \right) \, d\theta $$
        $$ = \frac{\rho a^4}{6} \left[ \frac{3}{2}\theta + \sin(2\theta) + \frac{1}{8}\sin(4\theta) \right]_{-\pi/2}^{\pi/2} $$
        Evaluating at the limits:
        At $\pi/2$: $\frac{3}{2}(\pi/2) + \sin(\pi) + \frac{1}{8}\sin(2\pi) = \frac{3\pi}{4} + 0 + 0 = \frac{3\pi}{4}$.
        At $-\pi/2$: $\frac{3}{2}(-\pi/2) + \sin(-\pi) + \frac{1}{8}\sin(-2\pi) = -\frac{3\pi}{4} + 0 + 0 = -\frac{3\pi}{4}$.
        $$ I_x = \frac{\rho a^4}{6} \left( \frac{3\pi}{4} - (-\frac{3\pi}{4}) \right) = \frac{\rho a^4}{6} \left( \frac{6\pi}{4} \right) = \frac{\rho a^4}{6} \frac{3\pi}{2} = \frac{\pi \rho a^4}{4} $$
    So, $I_x = \frac{\pi \rho a^4}{4}$. Phew! That's a classic result!

4.  **Calculate the Second Moment about the y-axis ($I_y$):**
    By symmetry, for a disk centered at the origin, $I_x$ must be equal to $I_y$. (Think about it: rotating about the $x$-axis or the $y$-axis is fundamentally the same for a symmetric disk).
    Thus, $I_y = \frac{\pi \rho a^4}{4}$.
    (Alternatively, you could set up the integral $\rho \iint_R x^2 \, dA$ and evaluate it, perhaps in polar coordinates where $x = r \cos \theta$, but symmetry is far more efficient!)

5.  **Calculate the Second Moment about the Origin ($I_O$):**
    The definition states $I_O = I_x + I_y$.
    $$ I_O = \frac{\pi \rho a^4}{4} + \frac{\pi \rho a^4}{4} = \frac{2\pi \rho a^4}{4} = \frac{\pi \rho a^4}{2} $$
    This is also often found directly using polar coordinates:
    $$ I_O = \iint_R (x^2+y^2)\rho \, dA = \rho \int_{0}^{2\pi} \int_{0}^{a} (r^2) r \, dr \, d\theta $$
    $$ = \rho \int_{0}^{2\pi} \int_{0}^{a} r^3 \, dr \, d\theta = \rho \int_{0}^{2\pi} \left[ \frac{1}{4}r^4 \right]_{0}^{a} \, d\theta $$
    $$ = \rho \int_{0}^{2\pi} \frac{1}{4}a^4 \, d\theta = \frac{1}{4}\rho a^4 [\theta]_{0}^{2\pi} = \frac{1}{4}\rho a^4 (2\pi) = \frac{\pi \rho a^4}{2} $$
    Much simpler via polar coordinates for $I_O$ directly, demonstrating the power of coordinate choice!

6.  **Calculate the Radii of Gyration:**
    Remember $M = \pi \rho a^2$.
    *   **About the x-axis ($r_x$):**
        $$ r_x = \sqrt{\frac{I_x}{M}} = \sqrt{\frac{\pi \rho a^4 / 4}{\pi \rho a^2}} = \sqrt{\frac{a^2}{4}} = \frac{a}{2} $$
    *   **About the y-axis ($r_y$):**
        By symmetry, $r_y = r_x = \frac{a}{2}$.
    *   **About the Origin ($r_O$):**
        $$ r_O = \sqrt{\frac{I_O}{M}} = \sqrt{\frac{\pi \rho a^4 / 2}{\pi \rho a^2}} = \sqrt{\frac{a^2}{2}} = \frac{a}{\sqrt{2}} $$

**Result:**
*   $I_x = \frac{\pi \rho a^4}{4}$
*   $I_y = \frac{\pi \rho a^4}{4}$
*   $I_O = \frac{\pi \rho a^4}{2}$
*   $r_x = \frac{a}{2}$
*   $r_y = \frac{a}{2}$
*   $r_O = \frac{a}{\sqrt{2}}$

This means if you condensed the entire mass of the disk into a single point, you'd place it $a/2$ units from the x-axis (or y-axis) to get the same moment of inertia about that axis, and $a/\sqrt{2}$ units from the origin for the same polar moment of inertia. Fascinating!

#### Example 5: Finding the Moment of Inertia about the Origin of an Annulus

Now for a more complex shape – an annulus! This is where a principle called **superposition** comes in handy.

**Problem:** Suppose an annulus represents a planar object with total mass $M$. Determine its moment of inertia about the origin. Assume constant density $\rho$.

**Solution:**

1.  **Define the Annulus and Density:**
    *   An annulus is a disk with a smaller concentric disk removed from its center. Let the outer radius be $a_2$ and the inner radius be $a_1$.
    *   The density is constant: $\rho(x,y) = \rho$.

2.  **Principle of Superposition (for Moments of Inertia):**
    The beauty of integrals is their additive property. We can think of the annulus as a large disk (radius $a_2$) from which a smaller disk (radius $a_1$) has been *subtracted*.
    So, the moment of inertia of the annulus about the origin ($I_{O, \text{annulus}}$) is:
    $$ I_{O, \text{annulus}} = I_{O, \text{disk}(a_2)} - I_{O, \text{disk}(a_1)} $$
    This is much easier than setting up a complex integral with bounds for the annulus!

3.  **Recall Results from Example 4:**
    From Example 4, we found that for a disk of radius $a$ and constant density $\rho$, its moment of inertia about the origin is $I_O = \frac{\pi \rho a^4}{2}$.

4.  **Apply Superposition:**
    *   For the outer disk (radius $a_2$): $I_{O, \text{disk}(a_2)} = \frac{\pi \rho a_2^4}{2}$.
    *   For the inner disk (radius $a_1$): $I_{O, \text{disk}(a_1)} = \frac{\pi \rho a_1^4}{2}$.
    $$ I_{O, \text{annulus}} = \frac{\pi \rho a_2^4}{2} - \frac{\pi \rho a_1^4}{2} $$
    $$ I_{O, \text{annulus}} = \frac{\pi \rho}{2} (a_2^4 - a_1^4) $$

5.  **Express in Terms of Total Mass $M$ of the Annulus:**
    The total mass of the annulus, $M$, is the mass of the outer disk minus the mass of the inner disk.
    $$ M = \text{Area}_{\text{annulus}} \times \rho = (\pi a_2^2 - \pi a_1^2) \rho = \pi \rho (a_2^2 - a_1^2) $$
    Now, let's try to substitute this $M$ into our $I_{O, \text{annulus}}$ formula.
    We have $a_2^4 - a_1^4 = (a_2^2 - a_1^2)(a_2^2 + a_1^2)$.
    $$ I_{O, \text{annulus}} = \frac{\pi \rho}{2} (a_2^2 - a_1^2)(a_2^2 + a_1^2) $$
    Notice that $M = \pi \rho (a_2^2 - a_1^2)$.
    So, we can write:
    $$ I_{O, \text{annulus}} = \frac{1}{2} M (a_2^2 + a_1^2) $$

**Result:** The moment of inertia of the annulus about the origin is $\frac{\pi \rho}{2} (a_2^4 - a_1^4)$, which can also be expressed as $\frac{1}{2} M (a_1^2 + a_2^2)$, where $M$ is the total mass of the annulus. By Jove, that's clever!

*(Professor Lundholm's notes and the Hawkes slides also list "Example 6: Finding Second Moments and Radii of Gyration of a Plate of Constant Density." This would involve choosing a specific region (like a rectangle or a triangle) and a constant density, then applying the same steps we've done for the disk and triangular plate. It's an excellent exercise to solidify your understanding!)*

---

### Practice & Reflection: Time to Engage Your Brain-Slugs!

Alright, my astute scholars, we've covered a vast expanse of double integral applications. To truly cement this knowledge, let's ponder some crucial questions:

1.  **Coordinate Systems:** For what types of regions and density functions would polar coordinates be particularly advantageous when calculating mass, moments, or radii of gyration? When would Cartesian coordinates be preferred? Give specific examples.
2.  **Physical Interpretation:** If you calculated $M_x = 0$ for a region, what would that tell you about the object's center of mass and its symmetry?
3.  **Density's Role:** How does a non-constant density function $\rho(x,y)$ change the calculation of area, mass, and moments compared to a constant density? Why is this physically intuitive?
4.  **Radii of Gyration:** You found that for a disk, $r_x = a/2$ and $r_O = a/\sqrt{2}$. Why is $r_O$ larger than $r_x$? Think about the distribution of mass relative to the axis of rotation.
5.  **Error Check:** If you are calculating the center of mass of an object and find that $(\bar{x}, \bar{y})$ lies *outside* the physical boundaries of the object, is this always an error? Provide an example where it might not be.

Ponder these deep questions, and you'll be well on your way to mastering these incredible applications of double integrals! Now, if you'll excuse me, I have a sudden urge to calculate the moment of inertia of my new invention, the "What-If" Machine! To the lab!