**MATH 303: Multivariable Calculus**
**Section 15.1: Vector Fields**

---

### **Greetings, Future Mathematical Geniuses!**

Professor Hubert J. Farnsworth here, your esteemed Milligan University Math TA and pedagogical assistant! Good news, everyone! Today, we're embarking on a truly fascinating journey into the very fabric of multivariable calculus: **Vector Fields**. Prepare yourselves for a concept that bridges the abstract world of mathematics with the tangible phenomena of physics and engineering. From swirling winds to gravitational pulls, electric forces to fluid flows, vector fields provide us with a powerful language to describe forces and flows acting throughout space.

Our mission today is to thoroughly understand what a vector field is, how to visualize it, and to explore some of its most fundamental examples. So, sharpen your pencils, engage your brains, and let's dive into the exhilarating world of vectors acting at every point!

---

### **Core Concepts & Definitions**

At its heart, a vector field is simply a function that assigns a vector to each point in a given region of space. Think of it: at every single coordinate $(x, y)$ or $(x, y, z)$, there's a little arrow pointing in a specific direction with a particular magnitude. How utterly useful!

#### **1. Vector Fields in $\mathbb{R}^2$ (Two Dimensions)**

A **two-dimensional vector field** $\mathbf{F}$ is a function that maps each point $(x, y)$ in a subset $D$ of the $xy$-plane to a two-dimensional vector $\mathbf{F}(x, y)$.

Mathematically, we express this as:
$$
\mathbf{F}(x, y) = \langle P(x, y), Q(x, y) \rangle = P(x, y)\mathbf{i} + Q(x, y)\mathbf{j}
$$
Here, $P(x, y)$ and $Q(x, y)$ are scalar-valued functions of two variables, representing the $x$-component and $y$-component of the vector at point $(x, y)$, respectively.

**Visualization:** To sketch a 2D vector field, we select a representative set of points $(x, y)$ in the domain $D$, calculate the vector $\mathbf{F}(x, y)$ at each of these points, and then draw the vector with its tail at $(x, y)$. This creates a "field" of arrows!

#### **2. Vector Fields in $\mathbb{R}^3$ (Three Dimensions)**

Similarly, a **three-dimensional vector field** $\mathbf{F}$ is a function that assigns a three-dimensional vector $\mathbf{F}(x, y, z)$ to each point $(x, y, z)$ in a subset $E$ of $\mathbb{R}^3$.

Its mathematical form is:
$$
\mathbf{F}(x, y, z) = \langle P(x, y, z), Q(x, y, z), R(x, y, z) \rangle = P(x, y, z)\mathbf{i} + Q(x, y, z)\mathbf{j} + R(x, y, z)\mathbf{k}
$$
Here, $P, Q,$ and $R$ are scalar-valued functions of three variables, giving the $x, y,$ and $z$ components of the vector, respectively.

**Visualization:** Sketching 3D vector fields is conceptually the same, but practically more challenging. We pick points $(x, y, z)$ and draw the corresponding 3D vector. Often, computer software is employed for effective visualization.

#### **3. Real-World Examples of Vector Fields**

Vector fields aren't just mathematical constructs; they describe fundamental aspects of our universe!
*   **Fluid Flow:** Imagine water flowing in a river or air currents. At each point, the water or air has a certain velocity, which can be represented by a vector. This is a **velocity field**.
*   **Gravitational Fields:** The force of gravity exerted by a massive object (like a planet) on another object. At every point in space, there's a gravitational force vector pointing towards the massive object.
*   **Electric Fields:** The force exerted by charged particles. Similar to gravity, at every point around a charge, there's an electric force vector.
*   **Magnetic Fields:** The force exerted by magnets or electric currents.
*   **Wind Patterns:** Weather maps often show wind speed and direction, a prime example of a 2D vector field.

#### **4. Gradient Vector Fields**

A particularly important type of vector field arises from scalar functions. If $f$ is a scalar function (a function that outputs a single number) of several variables, its **gradient** $\nabla f$ is a vector field.

For a function of two variables $f(x, y)$, its gradient vector field is:
$$
\nabla f(x, y) = \left\langle \frac{\partial f}{\partial x}(x, y), \frac{\partial f}{\partial y}(x, y) \right\rangle = \frac{\partial f}{\partial x}\mathbf{i} + \frac{\partial f}{\partial y}\mathbf{j}
$$
And for a function of three variables $f(x, y, z)$:
$$
\nabla f(x, y, z) = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right\rangle = \frac{\partial f}{\partial x}\mathbf{i} + \frac{\partial f}{\partial y}\mathbf{j} + \frac{\partial f}{\partial z}\mathbf{k}
$$
These gradient vector fields have a special property: they always point in the direction of the steepest ascent of the scalar function $f$, and their magnitude indicates the rate of that ascent.

#### **5. Conservative Vector Fields and Potential Functions**

A vector field $\mathbf{F}$ is called a **conservative vector field** if it can be expressed as the gradient of some scalar function $f$. That is, if $\mathbf{F} = \nabla f$. In this case, the scalar function $f$ is called a **potential function** for $\mathbf{F}$.

Conservative vector fields are incredibly important in physics, especially in fields like mechanics and electromagnetism, because the work done by a conservative force depends only on the initial and final positions, not on the path taken.

For a 2D vector field $\mathbf{F}(x, y) = P(x, y)\mathbf{i} + Q(x, y)\mathbf{j}$ to be conservative on a simply connected domain, a necessary condition is that:
$$
\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}
$$
For a 3D vector field $\mathbf{F}(x, y, z) = P(x, y, z)\mathbf{i} + Q(x, y, z)\mathbf{j} + R(x, y, z)\mathbf{k}$ to be conservative on a simply connected domain, a necessary condition is that:
$$
\frac{\partial R}{\partial y} = \frac{\partial Q}{\partial z}, \quad \frac{\partial P}{\partial z} = \frac{\partial R}{\partial x}, \quad \frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}
$$
We'll delve deeper into these conditions in later sections, but for now, recognize that if you can *find* a scalar function $f$ such that $\nabla f = \mathbf{F}$, then $\mathbf{F}$ is conservative.

---

### **Detailed Lecture & Worked Examples**

Now, let's put these definitions into practice with some prime examples! Pay close attention to the sketching techniques, as they are crucial for building intuition.

---

**Example 1: Describing and Sketching a Vector Field in $\mathbb{R}^2$**
*(Hawkes Learning Slides 11-13, Professor Lundholm's Notes Page 1, Figure 1 & 2)*

**Problem:** Describe the vector field $\mathbf{F}(x, y) = \langle -y, x \rangle$ and sketch it with representative vectors.

**Solution:**
1.  **Understand the components:**
    *   $P(x, y) = -y$
    *   $Q(x, y) = x$
2.  **Pick representative points and calculate vectors:** Let's choose a few points to get a feel for the field:
    *   At $(1, 0)$: $\mathbf{F}(1, 0) = \langle -0, 1 \rangle = \langle 0, 1 \rangle$. (Points straight up)
    *   At $(0, 1)$: $\mathbf{F}(0, 1) = \langle -1, 0 \rangle$. (Points left)
    *   At $(-1, 0)$: $\mathbf{F}(-1, 0) = \langle -0, -1 \rangle = \langle 0, -1 \rangle$. (Points straight down)
    *   At $(0, -1)$: $\mathbf{F}(0, -1) = \langle -(-1), 0 \rangle = \langle 1, 0 \rangle$. (Points right)
    *   At $(1, 1)$: $\mathbf{F}(1, 1) = \langle -1, 1 \rangle$.
    *   At $(-1, 1)$: $\mathbf{F}(-1, 1) = \langle -1, -1 \rangle$.
    *   At $(1, -1)$: $\mathbf{F}(1, -1) = \langle 1, 1 \rangle$.
    *   At $(-1, -1)$: $\mathbf{F}(-1, -1) = \langle 1, -1 \rangle$.

3.  **Analyze the behavior:**
    *   **Magnitude:** The magnitude of the vector at $(x, y)$ is $||\mathbf{F}(x, y)|| = \sqrt{(-y)^2 + x^2} = \sqrt{y^2 + x^2}$. This is exactly the distance from the origin to the point $(x, y)$. So, vectors are longer further from the origin, and shorter closer to the origin.
    *   **Direction:** Observe that the vector $\mathbf{F}(x, y) = \langle -y, x \rangle$ is always orthogonal (perpendicular) to the position vector $\mathbf{r} = \langle x, y \rangle$. The dot product $\mathbf{F} \cdot \mathbf{r} = (-y)x + x(y) = 0$. This means the vectors are tangent to circles centered at the origin.
    *   By tracing the points above, we see a **counter-clockwise rotational flow** around the origin.

4.  **Sketching:** Draw the vectors at the chosen points. The result will resemble a swirling pattern, like water draining from a tub (but rotating in the opposite direction for this specific field).

*(The provided images from Lundholm's notes (Figure 1 and Figure 2 scaled) visually confirm this counter-clockwise rotation, with Figure 2 showing scaled-down vectors for clarity.)*

---

**Example 1 (Again): A Radial Vector Field**
*(Professor Lundholm's Notes Page 1, "15.1 Example 1 again")*

**Problem:** Describe the vector field $\mathbf{F}(x, y) = \frac{\langle x, y \rangle}{2||\mathbf{r}||}$ where $\mathbf{r} = \langle x, y \rangle$, and sketch $\mathbf{F}$ with representative vectors.

**Solution:**
1.  **Re-express the vector field:**
    *   Let $\mathbf{r} = \langle x, y \rangle$.
    *   The magnitude of $\mathbf{r}$ is $||\mathbf{r}|| = \sqrt{x^2 + y^2}$.
    *   So, $\mathbf{F}(x, y) = \left\langle \frac{x}{2\sqrt{x^2 + y^2}}, \frac{y}{2\sqrt{x^2 + y^2}} \right\rangle$.
2.  **Analyze the magnitude and direction:**
    *   **Direction:** The vector $\langle x, y \rangle$ points directly away from the origin (radially outward). Since the denominator $2\sqrt{x^2+y^2}$ is a positive scalar, the vector $\mathbf{F}(x, y)$ will point in the exact same direction as $\langle x, y \rangle$. Thus, this is a **radial field**, with vectors pointing directly away from the origin.
    *   **Magnitude:** $||\mathbf{F}(x, y)|| = \left\| \frac{\langle x, y \rangle}{2\sqrt{x^2 + y^2}} \right\| = \frac{||\langle x, y \rangle||}{2||\langle x, y \rangle||} = \frac{1}{2}$.
        Aha! The magnitude of every vector in this field is constant and equal to $1/2$. This means all the arrows in our sketch will be of the same length, regardless of their position.

3.  **Sketching:** At various points $(x, y)$, draw a vector of length $1/2$ pointing directly away from the origin.
    *   At $(1, 0)$, draw $\langle 1/2, 0 \rangle$.
    *   At $(0, 1)$, draw $\langle 0, 1/2 \rangle$.
    *   At $(1, 1)$, draw $\langle 1/(2\sqrt{2}), 1/(2\sqrt{2}) \rangle$.
    This field represents a uniform outflow or expansion from the origin.

---

**Example 2: Describing and Sketching a Vector Field in $\mathbb{R}^3$**
*(Hawkes Learning Slide 14, Professor Lundholm's Notes Page 2)*

**Problem:** Describe the vector field $\mathbf{F}(x, y, z) = \langle 0, 0, 1 \rangle$ and sketch $\mathbf{F}$ with representative vectors.

**Solution:**
1.  **Understand the components:**
    *   $P(x, y, z) = 0$
    *   $Q(x, y, z) = 0$
    *   $R(x, y, z) = 1$
2.  **Analyze the behavior:**
    *   **Direction:** The vector $\langle 0, 0, 1 \rangle$ is the standard unit basis vector $\mathbf{k}$. This means that at *every* point $(x, y, z)$ in space, the vector points precisely in the positive $z$-direction.
    *   **Magnitude:** The magnitude is $||\mathbf{F}(x, y, z)|| = \sqrt{0^2 + 0^2 + 1^2} = 1$. The magnitude is constant and equal to $1$.
    This is a **constant vector field**.

3.  **Sketching:** Imagine a 3D coordinate system. At any point you choose, draw a vector of length 1 pointing straight up, parallel to the positive $z$-axis. This field looks like a uniform flow or force pushing everything upwards.

*(Professor Lundholm's notes on Page 2 and Hawkes slides mention real-world "Examples of Vector Fields" like wind patterns (Figure 5) and wind around an airfoil (Figure 7). These are excellent visual representations of fluid velocity fields.)*

---

**Example 3: Expressing Newton's Law of Universal Gravitation as a Gravitational Field**
*(Hawkes Learning Slides 20-22, Professor Lundholm's Notes Page 3)*

**Problem:** Express Newton's Law of Universal Gravitation as a gravitational field $\mathbf{F}(x, y, z)$ exerted by a mass $M$ fixed at the origin on a smaller mass $m$ located at point $(x, y, z)$.

**Background:** Newton's Law states that the force of attraction between two objects with masses $M$ and $m$ is given by $F = \frac{GMm}{r^2}$, where $G$ is the gravitational constant and $r$ is the distance between their centers. The force is attractive, meaning it pulls the objects towards each other.

**Solution:**
1.  **Define position vector and distance:**
    *   Let the mass $M$ be at the origin $(0, 0, 0)$.
    *   Let the mass $m$ be at the point $(x, y, z)$.
    *   The position vector from $M$ to $m$ is $\mathbf{r} = \langle x, y, z \rangle$.
    *   The distance between them is $r = ||\mathbf{r}|| = \sqrt{x^2 + y^2 + z^2}$.

2.  **Determine the direction of the force:**
    *   Since gravity is attractive, the force $\mathbf{F}$ on mass $m$ is directed *towards* the origin, which is opposite to the direction of the position vector $\mathbf{r}$.
    *   Therefore, the unit vector in the direction of the force is $-\frac{\mathbf{r}}{||\mathbf{r}||} = -\frac{\mathbf{r}}{r}$.

3.  **Combine magnitude and direction into a vector field:**
    *   Magnitude: $\frac{GMm}{r^2}$
    *   Direction: $-\frac{\mathbf{r}}{r}$
    *   So, the gravitational field $\mathbf{F}$ is:
        $$
        \mathbf{F}(x, y, z) = -\frac{GMm}{r^2} \left( \frac{\mathbf{r}}{r} \right) = -\frac{GMm}{r^3} \mathbf{r}
        $$

4.  **Express in component form:**
    *   Substitute $\mathbf{r} = \langle x, y, z \rangle$ and $r = (x^2 + y^2 + z^2)^{1/2}$:
        $$
        \mathbf{F}(x, y, z) = -\frac{GMm}{(x^2 + y^2 + z^2)^{3/2}} \langle x, y, z \rangle
        $$
        $$
        \mathbf{F}(x, y, z) = \left\langle -\frac{GMmx}{(x^2 + y^2 + z^2)^{3/2}}, -\frac{GMmy}{(x^2 + y^2 + z^2)^{3/2}}, -\frac{GMmz}{(x^2 + y^2 + z^2)^{3/2}} \right\rangle
        $$
This is the **gravitational field** exerted by a point mass $M$ at the origin. Notice how the vectors point radially inward, and their magnitudes decrease rapidly with distance (inverse-square law).

---

**Example 4: Expressing Coulomb's Law as an Electric Field**
*(Hawkes Learning Slides 23-26, Professor Lundholm's Notes Page 4)*

**Problem:** Express Coulomb's Law as an electric field $\mathbf{F}(x, y, z)$ exerted by a charge $Q$ fixed at the origin on another charge $q$ located at point $(x, y, z)$.

**Background:** Coulomb's Law describes the electrostatic force between two point charges. The magnitude of the force is $F = \frac{k|Qq|}{r^2}$, where $k$ is Coulomb's constant and $r$ is the distance. The force is repulsive if $Q$ and $q$ have the same sign, and attractive if they have opposite signs.

**Solution:**
1.  **Define position vector and distance:** (Same as Example 3)
    *   Charge $Q$ at the origin $(0, 0, 0)$.
    *   Charge $q$ at point $(x, y, z)$.
    *   Position vector $\mathbf{r} = \langle x, y, z \rangle$.
    *   Distance $r = ||\mathbf{r}|| = \sqrt{x^2 + y^2 + z^2}$.

2.  **Determine the direction of the force:**
    *   If $Qq > 0$ (charges have same sign), the force is repulsive, pointing *away* from the origin. The unit vector direction is $\frac{\mathbf{r}}{||\mathbf{r}||} = \frac{\mathbf{r}}{r}$.
    *   If $Qq < 0$ (charges have opposite signs), the force is attractive, pointing *towards* the origin. The unit vector direction is $-\frac{\mathbf{r}}{||\mathbf{r}||} = -\frac{\mathbf{r}}{r}$.
    *   We can combine these by using the sign of the product $Qq$.
    *   The direction can be written as $\frac{Qq}{|Qq|} \frac{\mathbf{r}}{r}$.

3.  **Combine magnitude and direction into a vector field:**
    *   Magnitude: $\frac{k|Qq|}{r^2}$
    *   Direction: $\frac{Qq}{|Qq|} \frac{\mathbf{r}}{r}$
    *   So, the electric field $\mathbf{F}$ is:
        $$
        \mathbf{F}(x, y, z) = \frac{k|Qq|}{r^2} \left( \frac{Qq}{|Qq|} \frac{\mathbf{r}}{r} \right) = \frac{kQq}{r^3} \mathbf{r}
        $$
    *(Professor Lundholm's notes use $\epsilon$ instead of $k$ as the constant, so let's stick to that notation for consistency with the provided material, even though $k$ is more standard in physics. So, $\mathbf{F}(x, y, z) = \frac{\epsilon Qq}{r^3} \mathbf{r}$.)*

4.  **Express in component form:**
    *   Substitute $\mathbf{r} = \langle x, y, z \rangle$ and $r = (x^2 + y^2 + z^2)^{1/2}$:
        $$
        \mathbf{F}(x, y, z) = \frac{\epsilon Qq}{(x^2 + y^2 + z^2)^{3/2}} \langle x, y, z \rangle
        $$
        $$
        \mathbf{F}(x, y, z) = \left\langle \frac{\epsilon Qqx}{(x^2 + y^2 + z^2)^{3/2}}, \frac{\epsilon Qqy}{(x^2 + y^2 + z^2)^{3/2}}, \frac{\epsilon Qqz}{(x^2 + y^2 + z^2)^{3/2}} \right\rangle
        $$
This is the **electric field**. If $Qq > 0$, vectors point radially outward (repulsive). If $Qq < 0$, vectors point radially inward (attractive). These are also inverse-square law fields, like gravity.

---

**Example 5: Finding the Gradient Vector Field of a Scalar Field**
*(Hawkes Learning Slides 28-30, Professor Lundholm's Notes Page 4)*

**Problem:** Determine the gradient vector field of the scalar field $f(x, y) = xy^2 - x^2$.

**Solution:**
1.  **Recall the definition of a gradient vector field:** For a 2D scalar field $f(x, y)$, the gradient vector field is $\nabla f(x, y) = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right\rangle$.

2.  **Calculate the partial derivatives:**
    *   **Partial derivative with respect to $x$ ($f_x$):** Treat $y$ as a constant.
        $$
        \frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(xy^2 - x^2) = y^2 - 2x
        $$
    *   **Partial derivative with respect to $y$ ($f_y$):** Treat $x$ as a constant.
        $$
        \frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(xy^2 - x^2) = x(2y) - 0 = 2xy
        $$

3.  **Construct the gradient vector field:**
    $$
    \nabla f(x, y) = \langle y^2 - 2x, 2xy \rangle
    $$
This vector field is a gradient vector field, meaning it is conservative. At any point $(x, y)$, the vector $\nabla f(x, y)$ indicates the direction of the steepest increase of the function $f(x, y)$, and its magnitude tells you how steep that increase is. Fascinating!

---

**Example 6: Showing That a Gravitational Field Is Conservative**
*(Hawkes Learning Slides 32-33, Professor Lundholm's Notes Page 5)*

**Problem:** Show that the gravitational field $\mathbf{F}(x, y, z) = -\frac{GMm}{r^3} \mathbf{r}$ (from Example 3) is conservative by finding a potential function $f(x, y, z)$ such that $\mathbf{F} = \nabla f$.

**Solution:**
1.  **Recall the component form of the gravitational field:**
    $$
    \mathbf{F}(x, y, z) = \left\langle -\frac{GMmx}{(x^2 + y^2 + z^2)^{3/2}}, -\frac{GMmy}{(x^2 + y^2 + z^2)^{3/2}}, -\frac{GMmz}{(x^2 + y^2 + z^2)^{3/2}} \right\rangle
    $$
    Let $P(x, y, z) = -\frac{GMmx}{(x^2 + y^2 + z^2)^{3/2}}$, $Q(x, y, z) = -\frac{GMmy}{(x^2 + y^2 + z^2)^{3/2}}$, and $R(x, y, z) = -\frac{GMmz}{(x^2 + y^2 + z^2)^{3/2}}$.

2.  **We are looking for a function $f(x, y, z)$ such that:**
    *   $\frac{\partial f}{\partial x} = P(x, y, z)$
    *   $\frac{\partial f}{\partial y} = Q(x, y, z)$
    *   $\frac{\partial f}{\partial z} = R(x, y, z)$

3.  **Integrate $P(x, y, z)$ with respect to $x$:**
    *   Let's focus on the $x$-component. We know that $\frac{d}{dx} (x^2 + y^2 + z^2)^{-1/2} = -\frac{1}{2}(x^2 + y^2 + z^2)^{-3/2}(2x) = -x(x^2 + y^2 + z^2)^{-3/2}$.
    *   Our $P(x, y, z)$ is $-GMm \cdot x(x^2 + y^2 + z^2)^{-3/2}$.
    *   So, integrating $P(x,y,z)$ with respect to $x$ should yield:
        $$
        \int -\frac{GMmx}{(x^2 + y^2 + z^2)^{3/2}} dx = GMm \int -x(x^2 + y^2 + z^2)^{-3/2} dx = GMm (x^2 + y^2 + z^2)^{-1/2} + C(y, z)
        $$
    *   Thus, $f(x, y, z) = \frac{GMm}{\sqrt{x^2 + y^2 + z^2}} + C(y, z)$.

4.  **Verify with $Q(x, y, z)$ and $R(x, y, z)$:**
    *   Let's take the partial derivative of our candidate $f$ with respect to $y$:
        $$
        \frac{\partial}{\partial y} \left( \frac{GMm}{\sqrt{x^2 + y^2 + z^2}} + C(y, z) \right) = GMm \cdot \left( -\frac{1}{2}(x^2 + y^2 + z^2)^{-3/2}(2y) \right) + \frac{\partial C}{\partial y}
        $$
        $$
        = -\frac{GMmy}{(x^2 + y^2 + z^2)^{3/2}} + \frac{\partial C}{\partial y}
        $$
    *   For this to equal $Q(x, y, z)$, we must have $\frac{\partial C}{\partial y} = 0$. This implies $C$ must be a function of $z$ only, i.e., $C(z)$.
    *   So, $f(x, y, z) = \frac{GMm}{\sqrt{x^2 + y^2 + z^2}} + C(z)$.

    *   Now, take the partial derivative with respect to $z$:
        $$
        \frac{\partial}{\partial z} \left( \frac{GMm}{\sqrt{x^2 + y^2 + z^2}} + C(z) \right) = GMm \cdot \left( -\frac{1}{2}(x^2 + y^2 + z^2)^{-3/2}(2z) \right) + \frac{d C}{d z}
        $$
        $$
        = -\frac{GMmz}{(x^2 + y^2 + z^2)^{3/2}} + \frac{d C}{d z}
        $$
    *   For this to equal $R(x, y, z)$, we must have $\frac{d C}{d z} = 0$. This implies $C$ must be a constant.

5.  **Conclusion:**
    *   Thus, we can choose $C=0$. The potential function for the gravitational field is:
        $$
        f(x, y, z) = \frac{GMm}{\sqrt{x^2 + y^2 + z^2}} = \frac{GMm}{r}
        $$
    *   Since we found a scalar function $f$ such that $\nabla f = \mathbf{F}$, the gravitational field is indeed a **conservative vector field**. (Note: In physics, potential energy is often defined with a negative sign, $U = -GMm/r$, such that $\mathbf{F} = -\nabla U$. Our $f$ is the negative of this potential energy, or the field itself is the gradient of $f$.)

---

**Matching Vector Fields with Their Graphs**
*(Professor Lundholm's Notes Page 5, Exercises 11-14)*

Let's match the given two-dimensional vector fields with their graphs (labeled A-D). This is a fantastic way to develop intuition!

**11. $\mathbf{F}(x, y) = \langle y, -x \rangle$**
*   **Analysis:**
    *   Magnitude: $||\mathbf{F}|| = \sqrt{y^2 + (-x)^2} = \sqrt{x^2 + y^2}$. Vectors are longer further from the origin.
    *   Direction:
        *   At $(1,0)$, $\mathbf{F} = \langle 0, -1 \rangle$. (Down)
        *   At $(0,1)$, $\mathbf{F} = \langle 1, 0 \rangle$. (Right)
        *   At $(-1,0)$, $\mathbf{F} = \langle 0, 1 \rangle$. (Up)
        *   At $(0,-1)$, $\mathbf{F} = \langle -1, 0 \rangle$. (Left)
    *   This is a **clockwise rotational field** around the origin. It's the opposite of Example 1.
*   **Match:** This corresponds to **Graph C**.

**12. $\mathbf{F}(x, y) = \langle x, -y \rangle$**
*   **Analysis:**
    *   Direction:
        *   At $(x,0)$, $\mathbf{F} = \langle x, 0 \rangle$. Vectors point horizontally away from the y-axis.
        *   At $(0,y)$, $\mathbf{F} = \langle 0, -y \rangle$. Vectors point vertically towards the x-axis.
        *   At $(1,1)$, $\mathbf{F} = \langle 1, -1 \rangle$.
        *   At $(-1,1)$, $\mathbf{F} = \langle -1, -1 \rangle$.
        *   At $(1,-1)$, $\mathbf{F} = \langle 1, 1 \rangle$.
    *   This field shows flow diverging from the y-axis (along x) and converging towards the x-axis (along y).
*   **Match:** This corresponds to **Graph B**.

**13. $\mathbf{F}(x, y) = \langle x, e^y \rangle$**
*   **Analysis:**
    *   $P(x,y) = x$, $Q(x,y) = e^y$.
    *   Horizontal component $P=x$: Points right for $x>0$, left for $x<0$.
    *   Vertical component $Q=e^y$: Always positive, so always points upwards. Its magnitude increases rapidly as $y$ increases.
    *   At $(0,y)$, $\mathbf{F} = \langle 0, e^y \rangle$. Purely upward flow, getting stronger as $y$ increases.
    *   At $(x,0)$, $\mathbf{F} = \langle x, 1 \rangle$. Flows away from the y-axis, with a constant upward component of 1.
*   **Match:** This corresponds to **Graph A**.

**14. $\mathbf{F}(x, y) = \frac{\langle x-1, y \rangle}{||\langle x-1, y \rangle||}$**
*   **Analysis:**
    *   This is a unit vector field. Its magnitude is always 1.
    *   The vector $\langle x-1, y \rangle$ represents a vector pointing from the point $(1, 0)$ to the point $(x, y)$.
    *   Thus, this field consists of unit vectors all pointing **radially outward from the point $(1, 0)$**.
*   **Match:** This corresponds to **Graph D**.

---

**Checking if a Vector Field is Conservative**
*(Professor Lundholm's Notes Page 6, Exercises 41, 43)*

We mentioned earlier that for a 2D vector field $\mathbf{F}(x, y) = P(x, y)\mathbf{i} + Q(x, y)\mathbf{j}$ to be conservative on a simply connected domain, a necessary (and often sufficient) condition is $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$. Let's use this test!

**41. $\mathbf{F}(x, y) = \langle y, xy \rangle$**

1.  **Identify $P$ and $Q$:**
    *   $P(x, y) = y$
    *   $Q(x, y) = xy$

2.  **Calculate partial derivatives:**
    *   $\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(y) = 1$
    *   $\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(xy) = y$

3.  **Compare:**
    *   We have $\frac{\partial P}{\partial y} = 1$ and $\frac{\partial Q}{\partial x} = y$.
    *   Since $1 \neq y$ (unless $y=1$), the condition $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$ is not met for all $(x,y)$.

4.  **Conclusion:** The vector field $\mathbf{F}(x, y) = \langle y, xy \rangle$ is **not conservative**.

---

**43. $\mathbf{F}(x, y) = \langle y^2 \cos(xy^2), 2xy \cos(xy^2) \rangle$**

1.  **Identify $P$ and $Q$:**
    *   $P(x, y) = y^2 \cos(xy^2)$
    *   $Q(x, y) = 2xy \cos(xy^2)$

2.  **Calculate partial derivatives:**
    *   $\frac{\partial P}{\partial y}$: Use product rule and chain rule.
        $$
        \frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(y^2 \cos(xy^2)) = (2y) \cos(xy^2) + y^2 (-\sin(xy^2)) (x \cdot 2y)
        $$
        $$
        = 2y \cos(xy^2) - 2xy^3 \sin(xy^2)
        $$
    *   $\frac{\partial Q}{\partial x}$: Use product rule and chain rule.
        $$
        \frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(2xy \cos(xy^2)) = (2y) \cos(xy^2) + (2xy) (-\sin(xy^2)) (y^2)
        $$
        $$
        = 2y \cos(xy^2) - 2xy^3 \sin(xy^2)
        $$

3.  **Compare:**
    *   We have $\frac{\partial P}{\partial y} = 2y \cos(xy^2) - 2xy^3 \sin(xy^2)$
    *   And $\frac{\partial Q}{\partial x} = 2y \cos(xy^2) - 2xy^3 \sin(xy^2)$
    *   Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$, the condition is met!

4.  **Conclusion:** The vector field $\mathbf{F}(x, y) = \langle y^2 \cos(xy^2), 2xy \cos(xy^2) \rangle$ **is conservative**. Magnificent!

---

### **Technology Note: Graphing Vector Fields**
*(Hawkes Learning Slides 34-37)*

While sketching vector fields by hand is excellent for building intuition, for complex fields or detailed visualizations, we often turn to technology! Software like Wolfram Alpha, GeoGebra, MATLAB, Mathematica, and even online calculus tools can plot vector fields. These tools allow us to quickly see the overall flow patterns, identify critical points, and explore the behavior of the field without the tedium of calculating dozens of individual vectors. Don't hesitate to use them to enhance your understanding!

---

### **Practice & Reflection**

Alright, my budding mathematicians! Now it's your turn to solidify your understanding. Ponder these questions, and perhaps try a quick sketch or two.

1.  **Conceptual Check:** In your own words, explain the fundamental difference between a scalar field and a vector field. Provide an example of each.
2.  **Visual Intuition:** If you were to sketch the vector field $\mathbf{F}(x, y) = \langle 1, 0 \rangle$, what would it look like? What about $\mathbf{F}(x, y) = \langle 0, -1 \rangle$? How do these differ from $\mathbf{F}(x, y) = \langle x, 0 \rangle$?
3.  **Gradient Insight:** You just found that $\nabla f(x, y) = \langle y^2 - 2x, 2xy \rangle$ for $f(x, y) = xy^2 - x^2$. At the point $(1, 2)$, calculate $\nabla f(1, 2)$. What does this vector tell you about the function $f$ at $(1, 2)$?
4.  **Conservative Fields:** Why are conservative vector fields so important in physics? (Hint: Think about work and energy).
5.  **Challenge Sketch:** Try to sketch the vector field $\mathbf{F}(x, y) = \langle x, y \rangle / ||\langle x, y \rangle||$ (a unit radial field) for points in the first quadrant. How does it compare to the field from Example 1 (Again)?

---

That concludes our expedition into Vector Fields for Section 15.1! Remember, the universe is full of these magnificent mathematical constructs, shaping everything from the smallest subatomic particles to the grandest galaxies. Keep exploring, keep questioning, and never stop learning!

**Professor Hubert J. Farnsworth, out!**