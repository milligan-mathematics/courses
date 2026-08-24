Good news, everyone! Today we're embarking on an extraordinary journey into the third dimension of integration. Prepare yourselves for the magnificent mathematical machinery of **Triple Integrals**!

In our previous adventures, we mastered single integrals for areas and lengths, and double integrals for volumes and areas in the $xy$-plane. Now, it's time to ascend to the next level. Triple integrals allow us to integrate functions over three-dimensional regions in space, enabling us to calculate not just volumes, but also the total mass, the center of mass, and even moments of inertia of complex 3D objects. This is crucial for understanding the physical properties of objects in our vast universe.

So, let's fire up our brains and dive into Math 303, Section 14.4: Triple Integrals!

---

### **Section 14.4: Triple Integrals**

#### **Overview of Topics:**

1.  **Triple Integrals and Riemann Sums:** Extending our fundamental definition to three dimensions.
2.  **Triple Integrals over General Bounded Regions:** Mastering the art of setting up limits for complex solids.
3.  **First and Second Moments of Three-Dimensional Bodies:** Applying triple integrals to calculate mass, center of mass, and moments of inertia – absolutely vital for any aspiring theoretical physicist or robot inventor!

---

### **1. Core Concepts & Definitions**

#### **1.1. Triple Integrals and Riemann Sums**

Just as we partitioned intervals for single integrals and rectangles for double integrals, for a triple integral, we partition a three-dimensional region (let's start with a rectangular box) into smaller sub-boxes.

Imagine a rectangular box $S$ in $\mathbb{R}^3$ defined by $S = [a,b] \times [c,d] \times [e,f]$. We can divide this box into $lmn$ smaller sub-boxes, where the $ijk$-th sub-box has dimensions $\Delta x$, $\Delta y$, and $\Delta z$. The volume of this tiny sub-box, denoted by $\Delta V_{ijk}$, is given by:

$$ \Delta V_{ijk} = \Delta x \Delta y \Delta z $$

Now, suppose we have a function $f(x,y,z)$ that we want to integrate over $S$. We pick a sample point $(x_{ijk}^*, y_{ijk}^*, z_{ijk}^*)$ within each sub-box and form the **Riemann Sum**:

$$ \sum_{i=1}^l \sum_{j=1}^m \sum_{k=1}^n f(x_{ijk}^*, y_{ijk}^*, z_{ijk}^*) \Delta V_{ijk} $$

To obtain the precise value of the integral, we take the limit as the number of sub-boxes approaches infinity (i.e., as $\Delta x, \Delta y, \Delta z \to 0$):

#### **Definition: Triple Integral**
If $f(x,y,z)$ is a function defined over a bounded solid region $S$ in $\mathbb{R}^3$, the triple integral of $f$ over $S$ is defined as:

$$ \iiint_S f(x,y,z) \,dV = \lim_{l,m,n \to \infty} \sum_{i=1}^l \sum_{j=1}^m \sum_{k=1}^n f(x_{ijk}^*, y_{ijk}^*, z_{ijk}^*) \Delta V_{ijk} $$
provided this limit exists. Here, $dV$ represents the infinitesimal volume element, which can be expressed in any of the six permutations of $dx \,dy \,dz$.

**Professor Farnsworth's Insight:** Just like in single and double integrals, this $dV$ represents an infinitesimally small volume, allowing us to sum up the values of $f$ multiplied by these tiny volumes across the entire region. It's truly a marvel! My calculations often involve considering the "Volume differential" as $dV = dz \,dy \,dx$, but rest assured, the order can be anything, as long as the limits match!

$\qquad$

#### **1.2. Fubini’s Theorem for Triple Integrals**

Calculating a triple integral directly from the Riemann sum definition would be a nightmare, even for a genius like myself! Thankfully, the brilliant Fubini developed a theorem that allows us to evaluate these integrals as iterated integrals.

**Theorem: Fubini’s Theorem for Triple Integrals**
If $f(x,y,z)$ is continuous on the rectangular box region $S = [p,q] \times [r,s] \times [t,u]$, then the triple integral of $f$ over $S$ can be evaluated as an iterated integral:

$$ \iiint_S f(x,y,z) \,dV = \int_p^q \int_r^s \int_t^u f(x,y,z) \,dz \,dy \,dx $$

Furthermore, any permutation of the order of integration ($dz \,dy \,dx$, $dx \,dy \,dz$, $dy \,dz \,dx$, etc.) yields an identical result for rectangular regions, provided $f$ is continuous. This is extremely helpful!

#### **Example 1: Using Fubini’s Theorem to Evaluate a Triple Integral**
Let's put Fubini's Theorem to the test!
Evaluate $\iiint_S (3x^2y - xyz^3) \,dV$, where $S = [1,3] \times [-1,2] \times [0,2]$.

**Solution:**
The region $S$ is a rectangular box, so we can use Fubini's Theorem. Let's choose the order $dz \,dy \,dx$.
The limits are $x \in [1,3]$, $y \in [-1,2]$, and $z \in [0,2]$.

$$ \iiint_S (3x^2y - xyz^3) \,dV = \int_1^3 \int_{-1}^2 \int_0^2 (3x^2y - xyz^3) \,dz \,dy \,dx $$

**Step 1: Integrate with respect to $z$.**
$$ \int_0^2 (3x^2y - xyz^3) \,dz = \left[ 3x^2yz - xy\frac{z^4}{4} \right]_0^2 $$
$$ = (3x^2y(2) - xy\frac{2^4}{4}) - (0) $$
$$ = 6x^2y - xy\frac{16}{4} = 6x^2y - 4xy $$

**Step 2: Integrate the result with respect to $y$.**
$$ \int_{-1}^2 (6x^2y - 4xy) \,dy = \left[ 6x^2\frac{y^2}{2} - 4x\frac{y^2}{2} \right]_{-1}^2 $$
$$ = \left[ 3x^2y^2 - 2xy^2 \right]_{-1}^2 $$
$$ = (3x^2(2^2) - 2x(2^2)) - (3x^2(-1)^2 - 2x(-1)^2) $$
$$ = (12x^2 - 8x) - (3x^2 - 2x) $$
$$ = 12x^2 - 8x - 3x^2 + 2x = 9x^2 - 6x $$

**Step 3: Integrate the result with respect to $x$.**
$$ \int_1^3 (9x^2 - 6x) \,dx = \left[ 9\frac{x^3}{3} - 6\frac{x^2}{2} \right]_1^3 $$
$$ = \left[ 3x^3 - 3x^2 \right]_1^3 $$
$$ = (3(3)^3 - 3(3)^2) - (3(1)^3 - 3(1)^2) $$
$$ = (3(27) - 3(9)) - (3 - 3) $$
$$ = (81 - 27) - (0) = 54 $$

Therefore, the value of the triple integral is $54$. Absolutely fascinating!

#### **1.3. Properties of Triple Integrals**

Triple integrals inherit many of the useful properties of single and double integrals. This makes our lives considerably easier when manipulating these formidable expressions!

**Theorem: Properties of Triple Integrals**
Let $f$ and $g$ be continuous functions over a bounded region $S$ in $\mathbb{R}^3$, and let $a$ and $b$ be constants.
1.  **Linearity:**
    $$ \iiint_S [af(x,y,z) + bg(x,y,z)] \,dV = a \iiint_S f(x,y,z) \,dV + b \iiint_S g(x,y,z) \,dV $$
    *(You can factor out constants and split sums, just like you'd expect!)*
2.  **Additivity:** If $S = S_1 \cup S_2$, where $S_1$ and $S_2$ are non-overlapping (they only meet at their boundaries, if at all), then:
    $$ \iiint_S f(x,y,z) \,dV = \iiint_{S_1} f(x,y,z) \,dV + \iiint_{S_2} f(x,y,z) \,dV $$
    *(A complex region can be broken down into simpler ones!)*
3.  **Comparison Property:** If $f(x,y,z) \geq g(x,y,z)$ for all $(x,y,z)$ in $S$, then:
    $$ \iiint_S f(x,y,z) \,dV \geq \iiint_S g(x,y,z) \,dV $$
    *(Greater functions lead to greater integrals, provided the region is positive volume!)*
4.  **Volume Calculation:** If $f(x,y,z) = 1$ for all $(x,y,z)$ in $S$, then the triple integral gives the volume of the solid $S$:
    $$ \text{Volume}(S) = \iiint_S 1 \,dV = \iiint_S \,dV $$
    *(Aha! This is a powerful application—calculating volumes of bizarre shapes!)*

---

### **2. Triple Integrals over General Bounded Regions**

Integrating over a rectangular box is straightforward with Fubini's Theorem. But what about irregularly shaped regions? Most real-world problems involve regions that are far from simple boxes. This is where our true engineering prowess comes into play!

We must carefully determine the limits of integration, which will generally be functions of the outer variables. The strategy is analogous to double integrals over general regions. We typically integrate with respect to one variable first (say, $z$), whose limits are surfaces, then project the region onto a coordinate plane (say, the $xy$-plane) and integrate over that 2D region.

**Procedure: Setting Up a Triple Integral**
To set up $\iiint_S f(x,y,z) \,dV$ over a general bounded region $S$:

1.  **Visualize and Sketch the Region $S$:** This is absolutely critical! Understanding the geometry is paramount. Identify the bounding surfaces.

2.  **Determine the Innermost Limits (e.g., $z$-limits):**
    *   Imagine a line parallel to the $z$-axis passing through the region $S$.
    *   It enters $S$ at a lower surface $z = h_1(x,y)$ and exits at an upper surface $z = h_2(x,y)$.
    *   These will be your limits for the innermost integral: $\int_{h_1(x,y)}^{h_2(x,y)} f(x,y,z) \,dz$.

3.  **Determine the Middle Limits (e.g., $y$-limits):**
    *   Project the solid $S$ onto the $xy$-plane (let's call this projection $R$).
    *   Imagine a line parallel to the $y$-axis within $R$.
    *   It enters $R$ at a left curve $y = g_1(x)$ and exits at a right curve $y = g_2(x)$.
    *   These will be your limits for the middle integral: $\int_{g_1(x)}^{g_2(x)} \dots \,dy$.

4.  **Determine the Outermost Limits (e.g., $x$-limits):**
    *   The projection $R$ will be bounded by constant values of $x$.
    *   These will be your limits for the outermost integral: $\int_a^b \dots \,dx$.

This results in an integral of the form:
$$ \iiint_S f(x,y,z) \,dV = \int_a^b \int_{g_1(x)}^{g_2(x)} \int_{h_1(x,y)}^{h_2(x,y)} f(x,y,z) \,dz \,dy \,dx $$
This is a "Type 1" region (where $z$ is integrated first). You can, of course, choose other orders (e.g., $dy \,dz \,dx$ or $dx \,dz \,dy$), which correspond to "Type 2" or "Type 3" regions, by projecting onto the $xz$-plane or $yz$-plane respectively. Always select the order that simplifies the limits of integration!

**Caution:** When setting up triple integrals over general regions, the limits are *not* always constants. The innermost limits are functions of two variables, the middle limits are functions of one variable, and only the outermost limits are constants. Misplacing a variable in a limit is a common blunder!

**Professor Farnsworth's Triple Integral Strategy Visualized:**

*(Adapted from Professor Lundholm's diagrams)*

*   **Strategy (a): Type 1 Region (Integrating $z$ first)**
    *   **Innermost:** $z$ from $z = h_1(x,y)$ (bottom surface) to $z = h_2(x,y)$ (top surface).
    *   **Middle/Outer:** Project $S$ onto the $xy$-plane to get region $R$. Then integrate over $R$ using double integral techniques.
    *   Example: $\iiint_S f(x,y,z) \,dz \,dy \,dx$.
    *   This is typically used when the solid $S$ is bounded by "top & bottom surfaces."

*   **Strategy (b): Type 2 Region (Integrating $y$ first)**
    *   **Innermost:** $y$ from $y = g_1(x,z)$ (left/back surface) to $y = g_2(x,z)$ (right/front surface).
    *   **Middle/Outer:** Project $S$ onto the $xz$-plane to get region $R$. Then integrate over $R$.
    *   Example: $\iiint_S f(x,y,z) \,dy \,dz \,dx$.
    *   This is useful when the solid $S$ is bounded by "left/right surfaces."

*   **Strategy (c): Type 3 Region (Integrating $x$ first)**
    *   **Innermost:** $x$ from $x = k_1(y,z)$ (back/left surface) to $x = k_2(y,z)$ (front/right surface).
    *   **Middle/Outer:** Project $S$ onto the $yz$-plane to get region $R$. Then integrate over $R$.
    *   Example: $\iiint_S f(x,y,z) \,dx \,dy \,dz$.
    *   This is useful when the solid $S$ is bounded by "back/front surfaces."

---

#### **Example 2: Finding the Volume of a Solid Bounded by Two Surfaces**
Find the volume of the solid $S$ bounded below by the surface $z = x^2 + 3y^2 + 2$ and above by the surface $z = 6 - x^2 - y^2$.

**Solution:**
Here, we are looking for the volume, so $f(x,y,z) = 1$. The limits for $z$ are already given directly by the two surfaces.

**Step 1: Determine $z$-limits.**
The lower surface is $z_1 = x^2 + 3y^2 + 2$.
The upper surface is $z_2 = 6 - x^2 - y^2$.
So, $z$ ranges from $x^2 + 3y^2 + 2$ to $6 - x^2 - y^2$.

**Step 2: Determine the projection $R$ onto the $xy$-plane.**
The region $R$ is where the two surfaces intersect. Set $z_1 = z_2$:
$x^2 + 3y^2 + 2 = 6 - x^2 - y^2$
$2x^2 + 4y^2 = 4$
$x^2 + 2y^2 = 2$
This is the equation of an ellipse centered at the origin.

**Step 3: Determine $y$-limits (for $dz \,dy \,dx$ order).**
From $x^2 + 2y^2 = 2$, we solve for $y$:
$2y^2 = 2 - x^2 \Rightarrow y^2 = \frac{2 - x^2}{2} \Rightarrow y = \pm \sqrt{\frac{2 - x^2}{2}}$
So, $y$ ranges from $-\sqrt{\frac{2 - x^2}{2}}$ to $\sqrt{\frac{2 - x^2}{2}}$.

**Step 4: Determine $x$-limits.**
For $y$ to be real, we need $2 - x^2 \geq 0 \Rightarrow x^2 \leq 2 \Rightarrow x = \pm \sqrt{2}$.
So, $x$ ranges from $-\sqrt{2}$ to $\sqrt{2}$.

**Step 5: Set up the integral.**
The volume $V$ is given by:
$$ V = \int_{-\sqrt{2}}^{\sqrt{2}} \int_{-\sqrt{(2-x^2)/2}}^{\sqrt{(2-x^2)/2}} \int_{x^2+3y^2+2}^{6-x^2-y^2} \,dz \,dy \,dx $$

**Step 6: Evaluate the innermost integral (with respect to $z$).**
$$ \int_{x^2+3y^2+2}^{6-x^2-y^2} 1 \,dz = [z]_{x^2+3y^2+2}^{6-x^2-y^2} = (6 - x^2 - y^2) - (x^2 + 3y^2 + 2) $$
$$ = 4 - 2x^2 - 4y^2 $$

**Step 7: Evaluate the middle integral (with respect to $y$).**
$$ \int_{-\sqrt{(2-x^2)/2}}^{\sqrt{(2-x^2)/2}} (4 - 2x^2 - 4y^2) \,dy $$
This integral is symmetric with respect to $y$, so we can write:
$$ = 2 \int_0^{\sqrt{(2-x^2)/2}} (4 - 2x^2 - 4y^2) \,dy $$
$$ = 2 \left[ (4 - 2x^2)y - \frac{4y^3}{3} \right]_0^{\sqrt{(2-x^2)/2}} $$
$$ = 2 \left[ (4 - 2x^2)\sqrt{\frac{2 - x^2}{2}} - \frac{4}{3} \left(\sqrt{\frac{2 - x^2}{2}}\right)^3 \right] $$
$$ = 2 \left[ 2(2 - x^2) \frac{\sqrt{2 - x^2}}{\sqrt{2}} - \frac{4}{3} \frac{(2 - x^2)\sqrt{2 - x^2}}{2\sqrt{2}} \right] $$
$$ = \frac{2}{\sqrt{2}} (2 - x^2)^{3/2} \left[ 2 - \frac{2}{3} \right] = \sqrt{2} (2 - x^2)^{3/2} \left( \frac{4}{3} \right) = \frac{4\sqrt{2}}{3} (2 - x^2)^{3/2} $$

**Step 8: Evaluate the outermost integral (with respect to $x$).**
$$ V = \int_{-\sqrt{2}}^{\sqrt{2}} \frac{4\sqrt{2}}{3} (2 - x^2)^{3/2} \,dx $$
This integral is also symmetric, so:
$$ V = 2 \int_0^{\sqrt{2}} \frac{4\sqrt{2}}{3} (2 - x^2)^{3/2} \,dx = \frac{8\sqrt{2}}{3} \int_0^{\sqrt{2}} (2 - x^2)^{3/2} \,dx $$
We use the trigonometric substitution $x = \sqrt{2} \sin \theta$.
Then $dx = \sqrt{2} \cos \theta \,d\theta$.
When $x = 0$, $\sin \theta = 0 \Rightarrow \theta = 0$.
When $x = \sqrt{2}$, $\sin \theta = 1 \Rightarrow \theta = \pi/2$.
Substitute into the integrand:
$2 - x^2 = 2 - (\sqrt{2} \sin \theta)^2 = 2 - 2\sin^2\theta = 2(1 - \sin^2\theta) = 2\cos^2\theta$.
So, $(2 - x^2)^{3/2} = (2\cos^2\theta)^{3/2} = (2\sqrt{2}) \cos^3\theta$.
The integral becomes:
$$ V = \frac{8\sqrt{2}}{3} \int_0^{\pi/2} (2\sqrt{2} \cos^3\theta) (\sqrt{2} \cos\theta) \,d\theta $$
$$ V = \frac{8\sqrt{2}}{3} \int_0^{\pi/2} (4 \cos^4\theta) \,d\theta = \frac{32\sqrt{2}}{3} \int_0^{\pi/2} \cos^4\theta \,d\theta $$
Now we use the power-reduction formula for $\cos^4\theta$:
$\cos^2\theta = \frac{1 + \cos(2\theta)}{2}$
$\cos^4\theta = \left(\frac{1 + \cos(2\theta)}{2}\right)^2 = \frac{1}{4}(1 + 2\cos(2\theta) + \cos^2(2\theta))$
$$ = \frac{1}{4}\left(1 + 2\cos(2\theta) + \frac{1 + \cos(4\theta)}{2}\right) $$
$$ = \frac{1}{4}\left(\frac{3}{2} + 2\cos(2\theta) + \frac{1}{2}\cos(4\theta)\right) = \frac{1}{8}(3 + 4\cos(2\theta) + \cos(4\theta)) $$
Substitute this back into the integral:
$$ V = \frac{32\sqrt{2}}{3} \int_0^{\pi/2} \frac{1}{8}(3 + 4\cos(2\theta) + \cos(4\theta)) \,d\theta $$
$$ V = \frac{4\sqrt{2}}{3} \left[ 3\theta + 4\frac{\sin(2\theta)}{2} + \frac{\sin(4\theta)}{4} \right]_0^{\pi/2} $$
$$ V = \frac{4\sqrt{2}}{3} \left[ 3\theta + 2\sin(2\theta) + \frac{1}{4}\sin(4\theta) \right]_0^{\pi/2} $$
$$ V = \frac{4\sqrt{2}}{3} \left[ \left( 3\frac{\pi}{2} + 2\sin(\pi) + \frac{1}{4}\sin(2\pi) \right) - (0 + 0 + 0) \right] $$
$$ V = \frac{4\sqrt{2}}{3} \left[ \frac{3\pi}{2} + 0 + 0 \right] = \frac{4\sqrt{2}}{3} \cdot \frac{3\pi}{2} = 2\sqrt{2}\pi $$
The volume of the solid is $2\sqrt{2}\pi$ cubic units. Magnificently done!

#### **Example 3: Changing the Order of Integration in a Triple Integral**
Evaluate the triple integral of Example 2 with the order of integration of the middle and outer integrals reversed (i.e., change from $dz \,dy \,dx$ to $dz \,dx \,dy$).

**Solution:**
We start with the same solid $S$ and the same $z$-limits:
$z$ from $z_1 = x^2 + 3y^2 + 2$ to $z_2 = 6 - x^2 - y^2$.
The projection onto the $xy$-plane is the ellipse $x^2 + 2y^2 = 2$.

Now, we want to integrate in the order $dz \,dx \,dy$.
**Step 1: Innermost integral (with respect to $z$).**
The $z$-limits remain unchanged, as they depend on $x$ and $y$:
$z$ from $x^2 + 3y^2 + 2$ to $6 - x^2 - y^2$.

**Step 2: Middle integral (with respect to $x$).**
We need to define $x$ in terms of $y$ from the projection $x^2 + 2y^2 = 2$.
$x^2 = 2 - 2y^2 \Rightarrow x = \pm \sqrt{2 - 2y^2}$.
So, $x$ ranges from $-\sqrt{2 - 2y^2}$ to $\sqrt{2 - 2y^2}$.

**Step 3: Outermost integral (with respect to $y$).**
For $x$ to be real, we need $2 - 2y^2 \geq 0 \Rightarrow 2y^2 \leq 2 \Rightarrow y^2 \leq 1 \Rightarrow y = \pm 1$.
So, $y$ ranges from $-1$ to $1$.

**Step 4: Set up the integral.**
The volume $V$ is given by:
$$ V = \int_{-1}^{1} \int_{-\sqrt{2-2y^2}}^{\sqrt{2-2y^2}} \int_{x^2+3y^2+2}^{6-x^2-y^2} \,dz \,dx \,dy $$
Indeed, this setup provides an identical result to Example 2. Sometimes one order is drastically simpler than another for evaluation, so choosing wisely is key!

---

### **3. First and Second Moments of Three-Dimensional Bodies**

Triple integrals are not just for volumes! They are indispensable for calculating physical properties of objects, such as their mass, where their weight is effectively concentrated (center of mass), and how resistant they are to rotation (moments of inertia).

Given an object in space modeled by the region $S \subseteq \mathbb{R}^3$, and whose density is represented by a function $\rho(x,y,z)$, we can define its physical properties as follows:

#### **Definition: First Moments about the Planes, Mass, and Center of Mass of an Object in $\mathbb{R}^3$**

1.  **Mass ($M$):** The total mass of the object is the integral of its density over the region.
    $$ M = \iiint_S \rho(x,y,z) \,dV $$

2.  **First Moment about the $yz$-plane ($M_{yz}$):** This measures the tendency of the object to rotate about the $yz$-plane (i.e., its distribution along the $x$-axis).
    $$ M_{yz} = \iiint_S x\rho(x,y,z) \,dV $$

3.  **First Moment about the $xz$-plane ($M_{xz}$):** This measures the distribution along the $y$-axis.
    $$ M_{xz} = \iiint_S y\rho(x,y,z) \,dV $$

4.  **First Moment about the $xy$-plane ($M_{xy}$):** This measures the distribution along the $z$-axis.
    $$ M_{xy} = \iiint_S z\rho(x,y,z) \,dV $$

5.  **Center of Mass ($\bar{x}, \bar{y}, \bar{z}$):** The point at which the entire mass of the object can be considered to be concentrated for purposes of calculating forces and torques.
    $$ \bar{x} = \frac{M_{yz}}{M} \qquad \bar{y} = \frac{M_{xz}}{M} \qquad \bar{z} = \frac{M_{xy}}{M} $$
    If the density $\rho$ is constant, the center of mass is called the **centroid** of the region $S$.

#### **Definition: Second Moments and Radii of Gyration of an Object in $\mathbb{R}^3$**

The second moments, often called **moments of inertia**, describe an object's resistance to angular acceleration about a given axis. The further the mass is from the axis, the greater the moment of inertia.

1.  **Second Moment about the $x$-axis ($I_x$):**
    $$ I_x = \iiint_S (y^2 + z^2)\rho(x,y,z) \,dV $$
    *(This represents the perpendicular distance squared from the x-axis.)*

2.  **Second Moment about the $y$-axis ($I_y$):**
    $$ I_y = \iiint_S (x^2 + z^2)\rho(x,y,z) \,dV $$
    *(This represents the perpendicular distance squared from the y-axis.)*

3.  **Second Moment about the $z$-axis ($I_z$):**
    $$ I_z = \iiint_S (x^2 + y^2)\rho(x,y,z) \,dV $$
    *(This represents the perpendicular distance squared from the z-axis.)*

4.  **Radii of Gyration ($r_x, r_y, r_z$):** The radius of gyration is a conceptual distance from the axis where, if the entire mass of the body were concentrated, it would have the same moment of inertia.
    $$ r_x = \sqrt{\frac{I_x}{M}} \qquad r_y = \sqrt{\frac{I_y}{M}} \qquad r_z = \sqrt{\frac{I_z}{M}} $$

#### **Example 4: Finding the First Moments, Center of Mass of a Tetrahedron**
Find the first moments and center of mass of the tetrahedron $S$ bounded by the coordinate planes ($x=0$, $y=0$, $z=0$) and the plane $z = 2 - 2x - y$. Assume $S$ is made of a substance with constant density $\rho$.

**Solution:**
First, let's establish the limits of integration.
The plane is $z = 2 - 2x - y$. Since we are bounded by $z=0$, we have $0 \leq z \leq 2 - 2x - y$.
For the projection onto the $xy$-plane, we set $z=0$: $2 - 2x - y = 0 \Rightarrow y = 2 - 2x$.
Since we are bounded by $y=0$, we have $0 \leq y \leq 2 - 2x$.
For the projection onto the $x$-axis, we set $y=0$: $2 - 2x = 0 \Rightarrow x = 1$.
Since we are bounded by $x=0$, we have $0 \leq x \leq 1$.

So, the region of integration is:
$0 \leq x \leq 1$
$0 \leq y \leq 2 - 2x$
$0 \leq z \leq 2 - 2x - y$

**1. Calculate Mass ($M$):**
$$ M = \iiint_S \rho \,dV = \rho \int_0^1 \int_0^{2-2x} \int_0^{2-2x-y} \,dz \,dy \,dx $$
$$ = \rho \int_0^1 \int_0^{2-2x} (2 - 2x - y) \,dy \,dx $$
$$ = \rho \int_0^1 \left[ (2 - 2x)y - \frac{y^2}{2} \right]_0^{2-2x} \,dx $$
$$ = \rho \int_0^1 \left( (2 - 2x)(2 - 2x) - \frac{(2 - 2x)^2}{2} \right) \,dx $$
$$ = \rho \int_0^1 \left( \frac{1}{2}(2 - 2x)^2 \right) \,dx = \frac{\rho}{2} \int_0^1 4(1 - x)^2 \,dx $$
$$ = 2\rho \int_0^1 (1 - 2x + x^2) \,dx = 2\rho \left[ x - x^2 + \frac{x^3}{3} \right]_0^1 $$
$$ = 2\rho \left( 1 - 1 + \frac{1}{3} \right) = 2\rho \left( \frac{1}{3} \right) = \frac{2\rho}{3} $$

**2. Calculate First Moments:**

*   **$M_{yz}$ (about the $yz$-plane):**
    $$ M_{yz} = \iiint_S x\rho \,dV = \rho \int_0^1 \int_0^{2-2x} \int_0^{2-2x-y} x \,dz \,dy \,dx $$
    $$ = \rho \int_0^1 \int_0^{2-2x} x(2 - 2x - y) \,dy \,dx $$
    $$ = \rho \int_0^1 x \left[ (2 - 2x)y - \frac{y^2}{2} \right]_0^{2-2x} \,dx $$
    $$ = \rho \int_0^1 x \left( \frac{1}{2}(2 - 2x)^2 \right) \,dx = 2\rho \int_0^1 x(1 - x)^2 \,dx $$
    $$ = 2\rho \int_0^1 (x - 2x^2 + x^3) \,dx = 2\rho \left[ \frac{x^2}{2} - \frac{2x^3}{3} + \frac{x^4}{4} \right]_0^1 $$
    $$ = 2\rho \left( \frac{1}{2} - \frac{2}{3} + \frac{1}{4} \right) = 2\rho \left( \frac{6 - 8 + 3}{12} \right) = 2\rho \left( \frac{1}{12} \right) = \frac{\rho}{6} $$

*   **$M_{xz}$ (about the $xz$-plane):**
    $$ M_{xz} = \iiint_S y\rho \,dV = \rho \int_0^1 \int_0^{2-2x} \int_0^{2-2x-y} y \,dz \,dy \,dx $$
    $$ = \rho \int_0^1 \int_0^{2-2x} y(2 - 2x - y) \,dy \,dx $$
    $$ = \rho \int_0^1 \left[ (2 - 2x)\frac{y^2}{2} - \frac{y^3}{3} \right]_0^{2-2x} \,dx $$
    $$ = \rho \int_0^1 \left( (2 - 2x)\frac{(2 - 2x)^2}{2} - \frac{(2 - 2x)^3}{3} \right) \,dx $$
    $$ = \rho \int_0^1 \left( \frac{(2 - 2x)^3}{2} - \frac{(2 - 2x)^3}{3} \right) \,dx = \rho \int_0^1 \frac{1}{6}(2 - 2x)^3 \,dx $$
    $$ = \frac{\rho}{6} \int_0^1 8(1 - x)^3 \,dx = \frac{4\rho}{3} \int_0^1 (1 - x)^3 \,dx $$
    $$ = \frac{4\rho}{3} \left[ -\frac{(1 - x)^4}{4} \right]_0^1 = \frac{4\rho}{3} \left( 0 - \left(-\frac{1}{4}\right) \right) = \frac{4\rho}{3} \cdot \frac{1}{4} = \frac{\rho}{3} $$

*   **$M_{xy}$ (about the $xy$-plane):**
    $$ M_{xy} = \iiint_S z\rho \,dV = \rho \int_0^1 \int_0^{2-2x} \int_0^{2-2x-y} z \,dz \,dy \,dx $$
    $$ = \rho \int_0^1 \int_0^{2-2x} \left[ \frac{z^2}{2} \right]_0^{2-2x-y} \,dy \,dx $$
    $$ = \frac{\rho}{2} \int_0^1 \int_0^{2-2x} (2 - 2x - y)^2 \,dy \,dx $$
    Let $u = 2 - 2x - y$, so $du = -dy$. When $y=0, u=2-2x$. When $y=2-2x, u=0$.
    $$ = \frac{\rho}{2} \int_0^1 \int_{2-2x}^{0} u^2 (-du) \,dx = \frac{\rho}{2} \int_0^1 \left[ -\frac{u^3}{3} \right]_{2-2x}^{0} \,dx $$
    $$ = \frac{\rho}{2} \int_0^1 \left( 0 - \left(-\frac{(2 - 2x)^3}{3}\right) \right) \,dx = \frac{\rho}{6} \int_0^1 (2 - 2x)^3 \,dx $$
    $$ = \frac{\rho}{6} \int_0^1 8(1 - x)^3 \,dx = \frac{4\rho}{3} \int_0^1 (1 - x)^3 \,dx $$
    $$ = \frac{4\rho}{3} \left[ -\frac{(1 - x)^4}{4} \right]_0^1 = \frac{4\rho}{3} \left( 0 - \left(-\frac{1}{4}\right) \right) = \frac{\rho}{3} $$

**3. Calculate Center of Mass ($\bar{x}, \bar{y}, \bar{z}$):**
$$ \bar{x} = \frac{M_{yz}}{M} = \frac{\rho/6}{2\rho/3} = \frac{1}{6} \cdot \frac{3}{2} = \frac{1}{4} $$
$$ \bar{y} = \frac{M_{xz}}{M} = \frac{\rho/3}{2\rho/3} = \frac{1}{2} $$
$$ \bar{z} = \frac{M_{xy}}{M} = \frac{\rho/3}{2\rho/3} = \frac{1}{2} $$
So, the center of mass (or centroid, since $\rho$ is constant) of the tetrahedron is $\left( \frac{1}{4}, \frac{1}{2}, \frac{1}{2} \right)$.
Absolutely stupendous!

#### **Example 5: Finding the Centroid, Second Moment, and Radius of Gyration of a Solid**
*(The detailed problem statement for Example 5 was not provided, only its title. Thus, I will present the general approach and refer to the definitions above, assuming it would involve a specific solid and density function, much like Example 4, but extending to second moments.)*

**General Approach:**
To find the centroid, second moments, and radii of gyration for a given solid $S$ with density $\rho(x,y,z)$:

1.  **Identify the solid $S$ and its bounding surfaces.** This will allow you to set up the limits of integration.
2.  **Determine the density function $\rho(x,y,z)$.** If it's a centroid problem, $\rho$ is constant.
3.  **Calculate the total mass ($M$).** Use the formula $M = \iiint_S \rho(x,y,z) \,dV$.
4.  **Calculate the first moments ($M_{yz}, M_{xz}, M_{xy}$).** Use the formulas involving $x\rho, y\rho, z\rho$.
5.  **Calculate the center of mass (or centroid) $(\bar{x}, \bar{y}, \bar{z})$.** Use the ratios of moments to mass.
6.  **Calculate the second moments (moments of inertia) ($I_x, I_y, I_z$).** Use the formulas involving $(y^2+z^2)\rho, (x^2+z^2)\rho, (x^2+y^2)\rho$.
7.  **Calculate the radii of gyration ($r_x, r_y, r_z$).** Use the formulas involving $\sqrt{I/M}$.

Each step involves carefully setting up and evaluating triple integrals. These computations can become quite lengthy, so choosing the optimal order of integration and exploiting symmetry can save immense amounts of time and prevent calculation errors.

---

### **Additional Practice Problems**

Let's test our understanding with a few more problems. These require setting up and evaluating triple integrals for volume or mass.

#### **Problem #25:**
Find the volume of the solid $S$ bounded by the parabolic cylinder $x = 1 - y^2$ and the planes $x = 0$, $z = 0$, and $z = 1 - x$.

**Solution:**
**1. Sketch and determine limits:**
*   The plane $z = 0$ is the lower bound for $z$. The plane $z = 1 - x$ is the upper bound. So, $0 \leq z \leq 1 - x$.
*   The parabolic cylinder $x = 1 - y^2$ opens to the left (negative $x$ direction) and its vertex is at $(1,0)$. The plane $x = 0$ is the $yz$-plane. So, $0 \leq x \leq 1 - y^2$.
*   For $x = 1 - y^2$ and $x \geq 0$, we must have $1 - y^2 \geq 0 \Rightarrow y^2 \leq 1 \Rightarrow -1 \leq y \leq 1$.

So, the limits are:
$0 \leq z \leq 1 - x$
$0 \leq x \leq 1 - y^2$
$-1 \leq y \leq 1$

**2. Set up the integral for volume ($f(x,y,z) = 1$):**
$$ V = \int_{-1}^{1} \int_0^{1-y^2} \int_0^{1-x} \,dz \,dx \,dy $$

**3. Evaluate the innermost integral (with respect to $z$):**
$$ \int_0^{1-x} 1 \,dz = [z]_0^{1-x} = 1 - x $$

**4. Evaluate the middle integral (with respect to $x$):**
$$ \int_0^{1-y^2} (1 - x) \,dx = \left[ x - \frac{x^2}{2} \right]_0^{1-y^2} $$
$$ = (1 - y^2) - \frac{(1 - y^2)^2}{2} $$
$$ = (1 - y^2) \left( 1 - \frac{1 - y^2}{2} \right) $$
$$ = (1 - y^2) \left( \frac{2 - 1 + y^2}{2} \right) = \frac{1}{2}(1 - y^2)(1 + y^2) = \frac{1}{2}(1 - y^4) $$

**5. Evaluate the outermost integral (with respect to $y$):**
$$ V = \int_{-1}^{1} \frac{1}{2}(1 - y^4) \,dy $$
This is an even function over a symmetric interval, so we can write:
$$ V = 2 \cdot \frac{1}{2} \int_0^{1} (1 - y^4) \,dy = \int_0^{1} (1 - y^4) \,dy $$
$$ = \left[ y - \frac{y^5}{5} \right]_0^{1} = \left( 1 - \frac{1}{5} \right) - (0) = \frac{4}{5} $$
The volume of the solid is $\frac{4}{5}$ cubic units. Splendid!

#### **Problem #41:**
The tetrahedron $S$ bounded by $z = 4 - x - 2y$ and the coordinate planes, with its density at the point $(x, y, z)$ being proportional to the square of the distance from the origin. Denote the constant of proportionality by $k$. Find its mass.

**Solution:**
**1. Density function:**
The distance from the origin is $\sqrt{x^2 + y^2 + z^2}$. The square of the distance is $x^2 + y^2 + z^2$.
So, the density function is $\rho(x,y,z) = k(x^2 + y^2 + z^2)$.

**2. Region of integration:**
*   $z = 0$ is the lower bound, $z = 4 - x - 2y$ is the upper bound. So, $0 \leq z \leq 4 - x - 2y$.
*   For the projection onto the $xy$-plane (set $z=0$): $4 - x - 2y = 0 \Rightarrow 2y = 4 - x \Rightarrow y = \frac{4 - x}{2}$.
    Since $y=0$ is also a boundary, $0 \leq y \leq \frac{4 - x}{2}$.
*   For the projection onto the $x$-axis (set $y=0$ in the line $y = \frac{4 - x}{2}$): $0 = \frac{4 - x}{2} \Rightarrow x = 4$.
    Since $x=0$ is also a boundary, $0 \leq x \leq 4$.

So, the limits are:
$0 \leq x \leq 4$
$0 \leq y \leq \frac{4 - x}{2}$
$0 \leq z \leq 4 - x - 2y$

**3. Set up the integral for mass ($M$):**
$$ M = \iiint_S k(x^2 + y^2 + z^2) \,dV = k \int_0^4 \int_0^{(4-x)/2} \int_0^{4-x-2y} (x^2 + y^2 + z^2) \,dz \,dy \,dx $$

**4. Evaluate the innermost integral (with respect to $z$):**
$$ \int_0^{4-x-2y} (x^2 + y^2 + z^2) \,dz = \left[ (x^2 + y^2)z + \frac{z^3}{3} \right]_0^{4-x-2y} $$
$$ = (x^2 + y^2)(4 - x - 2y) + \frac{(4 - x - 2y)^3}{3} $$

**5. The remaining integrals:**
$$ M = k \int_0^4 \int_0^{(4-x)/2} \left[ (x^2 + y^2)(4 - x - 2y) + \frac{(4 - x - 2y)^3}{3} \right] \,dy \,dx $$
Precisely! While the complete evaluation of this integral is quite lengthy and computationally intensive, the critical step is setting it up correctly. This integral would require significant algebraic expansion and several applications of the power rule for integration. For a typical exam, you'd be asked to set up such an integral, or perhaps evaluate a simpler version!

#### **Problem #27:**
The solid $S$ bounded by $z = x^2$ and the planes $z = 4$, $y = 0$, and $y = z$. Find its volume.

**Solution:**
**1. Sketch and determine limits:**
*   The surfaces are $z = x^2$ and $z = 4$. So, $x^2 \leq z \leq 4$.
*   The planes for $y$ are $y = 0$ and $y = z$. So, $0 \leq y \leq z$.
*   From $z = x^2$ and $z = 4$, the projection onto the $xz$-plane occurs where $x^2 \leq 4$, so $-2 \leq x \leq 2$.

Let's try the order $dy \,dz \,dx$:
*   **$y$-limits:** $0 \leq y \leq z$.
*   **$z$-limits:** $x^2 \leq z \leq 4$.
*   **$x$-limits:** $-2 \leq x \leq 2$.

**2. Set up the integral for volume ($f(x,y,z) = 1$):**
$$ V = \int_{-2}^{2} \int_{x^2}^{4} \int_0^z \,dy \,dz \,dx $$

**3. Evaluate the innermost integral (with respect to $y$):**
$$ \int_0^z 1 \,dy = [y]_0^z = z $$

**4. Evaluate the middle integral (with respect to $z$):**
$$ \int_{x^2}^{4} z \,dz = \left[ \frac{z^2}{2} \right]_{x^2}^{4} = \frac{4^2}{2} - \frac{(x^2)^2}{2} = 8 - \frac{x^4}{2} $$

**5. Evaluate the outermost integral (with respect to $x$):**
$$ V = \int_{-2}^{2} \left( 8 - \frac{x^4}{2} \right) \,dx $$
This is an even function integrated over a symmetric interval, so:
$$ V = 2 \int_0^{2} \left( 8 - \frac{x^4}{2} \right) \,dx $$
$$ = 2 \left[ 8x - \frac{x^5}{10} \right]_0^{2} $$
$$ = 2 \left( 8(2) - \frac{2^5}{10} \right) - (0) $$
$$ = 2 \left( 16 - \frac{32}{10} \right) = 2 \left( 16 - \frac{16}{5} \right) $$
$$ = 2 \left( \frac{80 - 16}{5} \right) = 2 \left( \frac{64}{5} \right) = \frac{128}{5} $$
The volume of the solid is $\frac{128}{5}$ cubic units. Success!

---

### **Practice & Reflection**

Alright, my intrepid young mathematicians, let's take a moment to solidify our newfound knowledge.

1.  **Conceptual Connection:** How is a triple integral a natural extension of single and double integrals? What new challenges arise in three dimensions that weren't present in two?
2.  **Order of Integration:** For a non-rectangular region, explain why the order of integration ($dx \,dy \,dz$ vs. $dz \,dy \,dx$, etc.) can significantly impact the complexity of setting up and evaluating the integral. When might one order be preferred over another?
3.  **Physical Interpretation:** If $\rho(x,y,z)$ represents the temperature distribution within a solid $S$, what would $\iiint_S \rho(x,y,z) \,dV$ represent? What about $\frac{1}{\text{Volume}(S)} \iiint_S \rho(x,y,z) \,dV$?
4.  **Centroid vs. Center of Mass:** What is the fundamental difference between the centroid and the center of mass of a solid? Under what specific condition are they the same point?
5.  **Moment of Inertia:** Explain in your own words why $I_x = \iiint_S (y^2 + z^2)\rho(x,y,z) \,dV$ includes $y^2 + z^2$. What does this term physically represent?

Think about these questions, perhaps even sketch out some regions, and discuss with your peers. True mastery comes from not just solving, but deeply understanding!

---

That concludes our exploration of Triple Integrals for today! You've successfully navigated the complexities of three-dimensional integration, a skill that will prove invaluable in your future scientific and engineering endeavors. Now go forth and integrate responsibly!

Good news, everyone! My work here is done!

**Professor Hubert J. Farnsworth**
Milligan University Math TA & Pedagogical Assistant