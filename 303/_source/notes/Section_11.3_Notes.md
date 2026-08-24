Greetings, esteemed students of Milligan University's Math 303!

Professor Hubert J. Farnsworth here, your venerable math TA and pedagogical assistant, ready to plunge into the fascinating realm of **Multivariable Calculus**. Today, we embark on a journey into **Section 11.3: The Dot Product** – a surprisingly simple yet profoundly powerful operation that will unlock new dimensions in our understanding of vectors.

The dot product, often called the scalar product, is our first foray into multiplying vectors. Unlike the cross product (which we'll tackle later and yields another vector), the dot product takes two vectors and, *poof*, produces a single scalar number. But don't let its scalar nature fool you! This humble number holds the key to understanding angles between vectors, determining perpendicularity, calculating work, and projecting one vector onto another. It's truly a marvel of mathematical engineering!

Prepare your brains for optimal absorption. Let's make some magnificent math!

---

## Math 303: Multivariable Calculus – Section 11.3: The Dot Product

### Core Concepts & Definitions

Let's start with the fundamental definition of this marvelous mathematical tool.

#### Definition: The Dot Product

Given two vectors $\mathbf{u}$ and $\mathbf{v}$ in $R^2$ or $R^3$:

1.  **In two dimensions ($R^2$):** If $\mathbf{u} = \langle u_1, u_2 \rangle$ and $\mathbf{v} = \langle v_1, v_2 \rangle$, their dot product is defined as:
    $$ \mathbf{u} \cdot \mathbf{v} = u_1 v_1 + u_2 v_2 $$
2.  **In three dimensions ($R^3$):** If $\mathbf{u} = \langle u_1, u_2, u_3 \rangle$ and $\mathbf{v} = \langle v_1, v_2, v_3 \rangle$, their dot product is defined as:
    $$ \mathbf{u} \cdot \mathbf{v} = u_1 v_1 + u_2 v_2 + u_3 v_3 $$

Notice that the result is always a **scalar** (a single number), not another vector. This is why it's also known as the scalar product.

#### Example 1: Evaluating Dot Products

Let's evaluate a few dot products to get a feel for the calculation.

**a.** $\langle -2, 0, 5 \rangle \cdot \langle 6, 2, 3 \rangle$

**b.** $\langle 4, -5 \rangle \cdot \langle 1, 1 \rangle$

**c.** $\langle 2, 1, -2 \rangle \cdot \langle 2, 1, -2 \rangle$

---

**Solution:**

We apply the definition directly, multiplying corresponding components and summing the results.

**a.** For $\mathbf{u} = \langle -2, 0, 5 \rangle$ and $\mathbf{v} = \langle 6, 2, 3 \rangle$:
$$ \mathbf{u} \cdot \mathbf{v} = (-2)(6) + (0)(2) + (5)(3) = -12 + 0 + 15 = 3 $$

**b.** For $\mathbf{u} = \langle 4, -5 \rangle$ and $\mathbf{v} = \langle 1, 1 \rangle$:
$$ \mathbf{u} \cdot \mathbf{v} = (4)(1) + (-5)(1) = 4 - 5 = -1 $$

**c.** For $\mathbf{u} = \langle 2, 1, -2 \rangle$ and $\mathbf{v} = \langle 2, 1, -2 \rangle$:
$$ \mathbf{u} \cdot \mathbf{v} = (2)(2) + (1)(1) + (-2)(-2) = 4 + 1 + 4 = 9 $$

---

Observe in part (c) that the dot product of a vector with itself yielded $9$. This is no coincidence! Recall that the magnitude (or length) of a vector $\mathbf{u} = \langle u_1, u_2, u_3 \rangle$ is given by $|\mathbf{u}| = \sqrt{u_1^2 + u_2^2 + u_3^2}$. Squaring both sides, we get $|\mathbf{u}|^2 = u_1^2 + u_2^2 + u_3^2$. Notice that this is precisely $\mathbf{u} \cdot \mathbf{u}$. Thus, **the dot product of a vector with itself is the square of its magnitude:** $\mathbf{u} \cdot \mathbf{u} = |\mathbf{u}|^2$. A very useful property indeed!

#### Theorem: Properties of the Dot Product

The dot product satisfies several important algebraic properties. Let $\mathbf{u}$, $\mathbf{v}$, and $\mathbf{w}$ be vectors in $R^n$ (where $n=2$ or $3$), and let $c$ be a scalar.

1.  **Commutative Property:** $\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}$
    *(The order of dot product doesn't matter.)*
2.  **Distributive Property:** $\mathbf{u} \cdot (\mathbf{v} + \mathbf{w}) = \mathbf{u} \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{w}$
    *(The dot product distributes over vector addition.)*
3.  **Scalar Multiplication Property:** $(c\mathbf{u}) \cdot \mathbf{v} = c(\mathbf{u} \cdot \mathbf{v}) = \mathbf{u} \cdot (c\mathbf{v})$
    *(Scalar multiples can be factored out.)*
4.  **Zero Vector Property:** $\mathbf{0} \cdot \mathbf{u} = 0$
    *(The dot product with the zero vector is always zero.)*
5.  **Magnitude Property:** $\mathbf{u} \cdot \mathbf{u} = |\mathbf{u}|^2$
    *(As we just discovered, the dot product of a vector with itself yields the square of its magnitude.)*

### The Dot Product and the Angle Between Two Vectors

The true geometric power of the dot product comes to light when we relate it to the angle between two vectors. This is one of the most crucial theorems in vector calculus!

#### Theorem: Dot Product and the Angle between Two Vectors

If two nonzero vectors $\mathbf{u}$ and $\mathbf{v}$ are depicted so that their initial points coincide, and if $\theta$ represents the smaller angle between them (where $0 \le \theta \le \pi$), then:
$$ \mathbf{u} \cdot \mathbf{v} = |\mathbf{u}||\mathbf{v}|\cos\theta $$

This theorem allows us to find the angle between any two nonzero vectors:
$$ \cos\theta = \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{u}||\mathbf{v}|} $$

Let's prove this, shall we? A good mathematician, like a good TA, appreciates a solid derivation!

#### Proof

Let $\mathbf{u}$ and $\mathbf{v}$ be two nonzero vectors. We can position them so their initial points coincide. Now, consider the vector $\mathbf{u} - \mathbf{v}$, which connects the terminal point of $\mathbf{v}$ to the terminal point of $\mathbf{u}$, forming a triangle (see diagram below conceptually).

By the Law of Cosines, for a triangle with sides of length $a, b, c$ and angle $\theta$ opposite side $c$, we have $c^2 = a^2 + b^2 - 2ab\cos\theta$. In our vector triangle, the sides have lengths $|\mathbf{u}|$, $|\mathbf{v}|$, and $|\mathbf{u} - \mathbf{v}|$, with $\theta$ being the angle between $\mathbf{u}$ and $\mathbf{v}$.

Applying the Law of Cosines:
$$ |\mathbf{u} - \mathbf{v}|^2 = |\mathbf{u}|^2 + |\mathbf{v}|^2 - 2|\mathbf{u}||\mathbf{v}|\cos\theta $$

Now, using the magnitude property of the dot product ($\mathbf{x} \cdot \mathbf{x} = |\mathbf{x}|^2$), we can express $|\mathbf{u} - \mathbf{v}|^2$ using the dot product:
$$ |\mathbf{u} - \mathbf{v}|^2 = (\mathbf{u} - \mathbf{v}) \cdot (\mathbf{u} - \mathbf{v}) $$
Using the distributive property of the dot product:
$$ (\mathbf{u} - \mathbf{v}) \cdot (\mathbf{u} - \mathbf{v}) = \mathbf{u} \cdot \mathbf{u} - \mathbf{u} \cdot \mathbf{v} - \mathbf{v} \cdot \mathbf{u} + \mathbf{v} \cdot \mathbf{v} $$
Using the commutative property ($\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}$) and the magnitude property ($\mathbf{u} \cdot \mathbf{u} = |\mathbf{u}|^2$, $\mathbf{v} \cdot \mathbf{v} = |\mathbf{v}|^2$):
$$ \mathbf{u} \cdot \mathbf{u} - \mathbf{u} \cdot \mathbf{v} - \mathbf{v} \cdot \mathbf{u} + \mathbf{v} \cdot \mathbf{v} = |\mathbf{u}|^2 - 2(\mathbf{u} \cdot \mathbf{v}) + |\mathbf{v}|^2 $$
So, we have:
$$ |\mathbf{u} - \mathbf{v}|^2 = |\mathbf{u}|^2 + |\mathbf{v}|^2 - 2(\mathbf{u} \cdot \mathbf{v}) $$

Now, we equate the two expressions for $|\mathbf{u} - \mathbf{v}|^2$:
$$ |\mathbf{u}|^2 + |\mathbf{v}|^2 - 2(\mathbf{u} \cdot \mathbf{v}) = |\mathbf{u}|^2 + |\mathbf{v}|^2 - 2|\mathbf{u}||\mathbf{v}|\cos\theta $$
Subtracting $|\mathbf{u}|^2 + |\mathbf{v}|^2$ from both sides:
$$ -2(\mathbf{u} \cdot \mathbf{v}) = -2|\mathbf{u}||\mathbf{v}|\cos\theta $$
Finally, dividing both sides by $-2$ (assuming $\mathbf{u}$ and $\mathbf{v}$ are nonzero, so $|\mathbf{u}| \ne 0$ and $|\mathbf{v}| \ne 0$):
$$ \mathbf{u} \cdot \mathbf{v} = |\mathbf{u}||\mathbf{v}|\cos\theta $$
And thus, the theorem is proven! Q.E.D.

#### Example 2: Finding the Angle Between Two Vectors

Find the angle between the vectors $\mathbf{u} = \langle -3, 1, 4 \rangle$ and $\mathbf{v} = \langle 2, 5, -1 \rangle$.

---

**Solution:**

We'll use the formula $\cos\theta = \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{u}||\mathbf{v}|}$.

**Step 1: Calculate the dot product $\mathbf{u} \cdot \mathbf{v}$.**
$$ \mathbf{u} \cdot \mathbf{v} = (-3)(2) + (1)(5) + (4)(-1) = -6 + 5 - 4 = -5 $$

**Step 2: Calculate the magnitudes $|\mathbf{u}|$ and $|\mathbf{v}|$.**
$$ |\mathbf{u}| = \sqrt{(-3)^2 + 1^2 + 4^2} = \sqrt{9 + 1 + 16} = \sqrt{26} $$
$$ |\mathbf{v}| = \sqrt{2^2 + 5^2 + (-1)^2} = \sqrt{4 + 25 + 1} = \sqrt{30} $$

**Step 3: Calculate $\cos\theta$.**
$$ \cos\theta = \frac{-5}{\sqrt{26}\sqrt{30}} = \frac{-5}{\sqrt{780}} $$

**Step 4: Find $\theta$ using the inverse cosine function.**
$$ \theta = \cos^{-1}\left(\frac{-5}{\sqrt{780}}\right) $$
Using a calculator:
$$ \theta \approx \cos^{-1}(-0.1790) \approx 100.3^\circ \text{ or } 1.751 \text{ radians} $$

### Applications of the Dot Product

The angle formula leads us directly to some extremely useful applications.

#### Definition: Orthogonal Vectors

Two nonzero vectors $\mathbf{u}$ and $\mathbf{v}$ are **orthogonal** (or perpendicular) if the angle $\theta$ between them is $\frac{\pi}{2}$ ($90^\circ$).

From our angle formula, if $\theta = \frac{\pi}{2}$, then $\cos\theta = \cos(\frac{\pi}{2}) = 0$.
Therefore, $\mathbf{u} \cdot \mathbf{v} = |\mathbf{u}||\mathbf{v}|(0) = 0$.

**Key Insight:** Two nonzero vectors $\mathbf{u}$ and $\mathbf{v}$ are orthogonal if and only if their dot product is zero:
$$ \mathbf{u} \cdot \mathbf{v} = 0 $$
*(The zero vector $\mathbf{0}$ is considered orthogonal to every vector.)*

This is an incredibly efficient way to check for perpendicularity!

#### Example 3: Finding an Unknown Component of Orthogonal Vectors

Determine $k$ so that the vectors $\langle -2, 4, -3 \rangle$ and $\langle 1, 2, k \rangle$ are orthogonal.

---

**Solution:**

For the vectors to be orthogonal, their dot product must be zero. Let $\mathbf{u} = \langle -2, 4, -3 \rangle$ and $\mathbf{v} = \langle 1, 2, k \rangle$.

**Step 1: Set their dot product to zero.**
$$ \mathbf{u} \cdot \mathbf{v} = 0 $$
$$ (-2)(1) + (4)(2) + (-3)(k) = 0 $$

**Step 2: Solve for $k$.**
$$ -2 + 8 - 3k = 0 $$
$$ 6 - 3k = 0 $$
$$ 3k = 6 $$
$$ k = 2 $$

Thus, if $k=2$, the vectors $\langle -2, 4, -3 \rangle$ and $\langle 1, 2, 2 \rangle$ are orthogonal.

---

#### Example 4: Describing a Set of Orthogonal Vectors

Describe the set of all vectors orthogonal to $\mathbf{j}$.

---

**Solution:**

The vector $\mathbf{j}$ is the standard basis vector $\langle 0, 1, 0 \rangle$ in $R^3$.
Let $\mathbf{v} = \langle x, y, z \rangle$ be any vector orthogonal to $\mathbf{j}$.

**Step 1: Use the orthogonality condition.**
Since $\mathbf{v}$ is orthogonal to $\mathbf{j}$, their dot product must be zero:
$$ \mathbf{v} \cdot \mathbf{j} = 0 $$
$$ \langle x, y, z \rangle \cdot \langle 0, 1, 0 \rangle = 0 $$

**Step 2: Calculate the dot product and solve.**
$$ (x)(0) + (y)(1) + (z)(0) = 0 $$
$$ 0 + y + 0 = 0 $$
$$ y = 0 $$

This means that any vector orthogonal to $\mathbf{j}$ must have its $y$-component equal to zero. The $x$ and $z$ components can be any real numbers.

**Description:** The set of all vectors orthogonal to $\mathbf{j}$ is the set of all vectors of the form $\langle x, 0, z \rangle$, where $x$ and $z$ are any real numbers. Geometrically, this describes all vectors that lie in the **$xz$-plane**. This makes perfect sense, as the $\mathbf{j}$ vector points along the $y$-axis, and the $xz$-plane is perpendicular to the $y$-axis!

---

#### Direction Angles and Direction Cosines

For a nonzero vector $\mathbf{u} = \langle u_1, u_2, u_3 \rangle$ in $R^3$, the **direction angles** are the angles $\alpha, \beta, \gamma$ that $\mathbf{u}$ makes with the positive $x$-axis, $y$-axis, and $z$-axis, respectively. These angles are always between $0$ and $\pi$.

We can find these angles using the dot product theorem. Let $\mathbf{i} = \langle 1, 0, 0 \rangle$, $\mathbf{j} = \langle 0, 1, 0 \rangle$, and $\mathbf{k} = \langle 0, 0, 1 \rangle$ be the standard basis vectors.

*   The angle $\alpha$ between $\mathbf{u}$ and $\mathbf{i}$:
    $$ \cos\alpha = \frac{\mathbf{u} \cdot \mathbf{i}}{|\mathbf{u}||\mathbf{i}|} = \frac{u_1(1) + u_2(0) + u_3(0)}{|\mathbf{u}|(1)} = \frac{u_1}{|\mathbf{u}|} $$
*   The angle $\beta$ between $\mathbf{u}$ and $\mathbf{j}$:
    $$ \cos\beta = \frac{\mathbf{u} \cdot \mathbf{j}}{|\mathbf{u}||\mathbf{j}|} = \frac{u_1(0) + u_2(1) + u_3(0)}{|\mathbf{u}|(1)} = \frac{u_2}{|\mathbf{u}|} $$
*   The angle $\gamma$ between $\mathbf{u}$ and $\mathbf{k}$:
    $$ \cos\gamma = \frac{\mathbf{u} \cdot \mathbf{k}}{|\mathbf{u}||\mathbf{k}|} = \frac{u_1(0) + u_2(0) + u_3(1)}{|\mathbf{u}|(1)} = \frac{u_3}{|\mathbf{u}|} $$

These values, $\cos\alpha$, $\cos\beta$, and $\cos\gamma$, are called the **direction cosines** of the vector $\mathbf{u}$.

An interesting property: $(\cos\alpha)^2 + (\cos\beta)^2 + (\cos\gamma)^2 = \left(\frac{u_1}{|\mathbf{u}|}\right)^2 + \left(\frac{u_2}{|\mathbf{u}|}\right)^2 + \left(\frac{u_3}{|\mathbf{u}|}\right)^2 = \frac{u_1^2 + u_2^2 + u_3^2}{|\mathbf{u}|^2} = \frac{|\mathbf{u}|^2}{|\mathbf{u}|^2} = 1$.
So, the sum of the squares of the direction cosines is always 1!

#### Example 5: Finding the Direction Angles of a Vector

Find the direction angles of the vector $\mathbf{u} = \langle 1, -2, 3 \rangle$.

---

**Solution:**

**Step 1: Find the magnitude of $\mathbf{u}$.**
$$ |\mathbf{u}| = \sqrt{1^2 + (-2)^2 + 3^2} = \sqrt{1 + 4 + 9} = \sqrt{14} $$

**Step 2: Find the direction cosines.**
$$ \cos\alpha = \frac{u_1}{|\mathbf{u}|} = \frac{1}{\sqrt{14}} $$
$$ \cos\beta = \frac{u_2}{|\mathbf{u}|} = \frac{-2}{\sqrt{14}} $$
$$ \cos\gamma = \frac{u_3}{|\mathbf{u}|} = \frac{3}{\sqrt{14}} $$

**Step 3: Find the direction angles using the inverse cosine function.**
$$ \alpha = \cos^{-1}\left(\frac{1}{\sqrt{14}}\right) \approx \cos^{-1}(0.2673) \approx 74.5^\circ $$
$$ \beta = \cos^{-1}\left(\frac{-2}{\sqrt{14}}\right) \approx \cos^{-1}(-0.5345) \approx 122.3^\circ $$
$$ \gamma = \cos^{-1}\left(\frac{3}{\sqrt{14}}\right) \approx \cos^{-1}(0.8018) \approx 36.7^\circ $$

### Vector Projections

The dot product allows us to "project" one vector onto another. Imagine shining a light perpendicular to vector $\mathbf{v}$. The shadow of vector $\mathbf{u}$ on $\mathbf{v}$ would be its projection! This has immense practical value, for instance, in physics when calculating the component of a force acting in a specific direction.

Let $\mathbf{u}$ and $\mathbf{v}$ be nonzero vectors.

*   The **scalar projection** of $\mathbf{u}$ onto $\mathbf{v}$ (also called the component of $\mathbf{u}$ along $\mathbf{v}$) is denoted $\text{comp}_{\mathbf{v}}\mathbf{u}$ and is a scalar value:
    $$ \text{comp}_{\mathbf{v}}\mathbf{u} = |\mathbf{u}|\cos\theta = \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{v}|} $$
    *(From $\mathbf{u} \cdot \mathbf{v} = |\mathbf{u}||\mathbf{v}|\cos\theta$, divide by $|\mathbf{v}|$.)*

*   The **vector projection** of $\mathbf{u}$ onto $\mathbf{v}$ is denoted $\text{proj}_{\mathbf{v}}\mathbf{u}$ and is a vector in the direction of $\mathbf{v}$:
    $$ \text{proj}_{\mathbf{v}}\mathbf{u} = \left(\frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{v}|}\right) \frac{\mathbf{v}}{|\mathbf{v}|} = \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{v}|^2} \mathbf{v} $$
    *(This takes the scalar projection and multiplies it by the unit vector in the direction of $\mathbf{v}$, which is $\frac{\mathbf{v}}{|\mathbf{v}|}$.)*

Let's visualize this with a conceptual diagram, much like Professor Lundholm's:

```
        u
       /|
      / |
     /  | u_perp = u - proj_v u
    /   |
   /____|___ v
   proj_v u
```
Here, $\mathbf{u} = \text{proj}_{\mathbf{v}}\mathbf{u} + (\mathbf{u} - \text{proj}_{\mathbf{v}}\mathbf{u})$. The vector $\mathbf{u} - \text{proj}_{\mathbf{v}}\mathbf{u}$ is orthogonal to $\mathbf{v}$. This allows us to decompose any vector $\mathbf{u}$ into two orthogonal components: one parallel to $\mathbf{v}$ and one orthogonal to $\mathbf{v}$.

#### Example 6: Decomposing a Vector into a Sum of Orthogonal Vectors

Let $\mathbf{u} = \langle 4, -1, 3 \rangle$ and $\mathbf{v} = \langle -3, 0, 1 \rangle$. Express $\mathbf{u}$ as a sum of two vectors, one parallel to $\mathbf{v}$ and one perpendicular to $\mathbf{v}$.

---

**Solution:**

We want to find $\mathbf{u}_{||}$ (parallel to $\mathbf{v}$) and $\mathbf{u}_{\perp}$ (perpendicular to $\mathbf{v}$) such that $\mathbf{u} = \mathbf{u}_{||} + \mathbf{u}_{\perp}$.

**Step 1: Calculate the component of $\mathbf{u}$ parallel to $\mathbf{v}$, which is $\text{proj}_{\mathbf{v}}\mathbf{u}$.**
First, find $\mathbf{u} \cdot \mathbf{v}$ and $|\mathbf{v}|^2$.
$$ \mathbf{u} \cdot \mathbf{v} = (4)(-3) + (-1)(0) + (3)(1) = -12 + 0 + 3 = -9 $$
$$ |\mathbf{v}|^2 = (-3)^2 + 0^2 + 1^2 = 9 + 0 + 1 = 10 $$
Now, calculate $\mathbf{u}_{||}$:
$$ \mathbf{u}_{||} = \text{proj}_{\mathbf{v}}\mathbf{u} = \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{v}|^2} \mathbf{v} = \frac{-9}{10} \langle -3, 0, 1 \rangle = \left\langle \frac{27}{10}, 0, -\frac{9}{10} \right\rangle $$

**Step 2: Calculate the component of $\mathbf{u}$ perpendicular to $\mathbf{v}$, which is $\mathbf{u}_{\perp} = \mathbf{u} - \mathbf{u}_{||}$.**
$$ \mathbf{u}_{\perp} = \langle 4, -1, 3 \rangle - \left\langle \frac{27}{10}, 0, -\frac{9}{10} \right\rangle $$
$$ \mathbf{u}_{\perp} = \left\langle 4 - \frac{27}{10}, -1 - 0, 3 - \left(-\frac{9}{10}\right) \right\rangle $$
$$ \mathbf{u}_{\perp} = \left\langle \frac{40}{10} - \frac{27}{10}, -1, \frac{30}{10} + \frac{9}{10} \right\rangle $$
$$ \mathbf{u}_{\perp} = \left\langle \frac{13}{10}, -1, \frac{39}{10} \right\rangle $$

**Step 3: Verify the decomposition and orthogonality.**
The decomposition is $\mathbf{u} = \mathbf{u}_{||} + \mathbf{u}_{\perp}$:
$$ \langle 4, -1, 3 \rangle = \left\langle \frac{27}{10}, 0, -\frac{9}{10} \right\rangle + \left\langle \frac{13}{10}, -1, \frac{39}{10} \right\rangle $$
$$ \langle 4, -1, 3 \rangle = \left\langle \frac{27+13}{10}, 0-1, \frac{-9+39}{10} \right\rangle = \left\langle \frac{40}{10}, -1, \frac{30}{10} \right\rangle = \langle 4, -1, 3 \rangle $$
This confirms the decomposition. To verify orthogonality, check if $\mathbf{u}_{\perp} \cdot \mathbf{v} = 0$:
$$ \left\langle \frac{13}{10}, -1, \frac{39}{10} \right\rangle \cdot \langle -3, 0, 1 \rangle = \left(\frac{13}{10}\right)(-3) + (-1)(0) + \left(\frac{39}{10}\right)(1) $$
$$ = -\frac{39}{10} + 0 + \frac{39}{10} = 0 $$
Indeed, the perpendicular component is orthogonal to $\mathbf{v}$.

---

#### Applications: Work Done by a Force

In physics, the work $W$ done by a constant force $\mathbf{F}$ in moving an object along a displacement vector $\mathbf{D}$ is defined as the product of the magnitude of the force in the direction of displacement and the magnitude of the displacement. This is precisely the scalar projection of $\mathbf{F}$ onto $\mathbf{D}$, multiplied by $|\mathbf{D}|$. And lo and behold, this simplifies beautifully with the dot product!

$$ W = |\mathbf{F}| \cos\theta |\mathbf{D}| $$
Since $\mathbf{F} \cdot \mathbf{D} = |\mathbf{F}||\mathbf{D}|\cos\theta$, we can simply write:
$$ W = \mathbf{F} \cdot \mathbf{D} $$
This is a powerful and concise formula for work!

#### Example 8: Using Vectors to Find the Work Done in Pulling a Wagon

A child pulls a wagon along a sidewalk, exerting a force of 70 Newtons on the handle of the wagon. The handle is at an angle of $40^\circ$ to the horizontal. If he pulls the wagon a distance of 20 meters, how much work has been done?

```
      /|
     / |  F = 70 N
    /  |
   /___|______
   40 deg
   <------D------>
    20 m
```

---

**Solution:**

**Step 1: Define the force vector $\mathbf{F}$.**
The force has magnitude $70$ N and is applied at an angle of $40^\circ$ to the horizontal. We can represent it in component form:
$$ \mathbf{F} = \langle |\mathbf{F}|\cos\theta, |\mathbf{F}|\sin\theta \rangle = \langle 70\cos(40^\circ), 70\sin(40^\circ) \rangle $$

**Step 2: Define the displacement vector $\mathbf{D}$.**
The wagon is pulled horizontally for 20 meters.
$$ \mathbf{D} = \langle 20, 0 \rangle $$

**Step 3: Calculate the work done using the dot product.**
$$ W = \mathbf{F} \cdot \mathbf{D} = \langle 70\cos(40^\circ), 70\sin(40^\circ) \rangle \cdot \langle 20, 0 \rangle $$
$$ W = (70\cos(40^\circ))(20) + (70\sin(40^\circ))(0) $$
$$ W = 1400\cos(40^\circ) $$
Using a calculator for $\cos(40^\circ) \approx 0.7660$:
$$ W \approx 1400(0.7660) \approx 1072.4 \text{ Newton-meters (N}\cdot\text{m)} \text{ or Joules (J)} $$

---

#### Example 7: Using a Projection of a Vector to Calculate Force

A boat and trailer, which together weigh 650 pounds, are to be pulled up a boat ramp that has an incline of $30^\circ$. What force is required to merely prevent the boat and trailer from rolling down the ramp?

```
          /
         /
        /  (Boat and trailer)
       /
      /
     /
    /____
   30 deg
```

---

**Solution:**

The weight of the boat and trailer is a force acting vertically downwards. The force required to prevent it from rolling down the ramp is the component of the weight vector that is parallel to the ramp, but acting upwards along the ramp.

**Step 1: Define the weight vector $\mathbf{W}$.**
The weight acts downwards, so $\mathbf{W} = \langle 0, -650 \rangle$ pounds.

**Step 2: Define a vector along the ramp.**
The ramp has an incline of $30^\circ$. A unit vector pointing *down* the ramp can be written as $\mathbf{v} = \langle \cos(30^\circ + 90^\circ), \sin(30^\circ + 90^\circ) \rangle$ or more simply, thinking of the ramp's slope, $\mathbf{v} = \langle \cos(-60^\circ), \sin(-60^\circ) \rangle$ if we consider horizontal $x$ and vertical $y$. Or, more intuitive for projection: a vector pointing *down* the ramp has angle $-30^\circ$ relative to the positive x-axis if the ramp is to the right. So, $\mathbf{r} = \langle \cos(-30^\circ), \sin(-30^\circ) \rangle = \langle \cos(30^\circ), -\sin(30^\circ) \rangle = \langle \frac{\sqrt{3}}{2}, -\frac{1}{2} \rangle$. We want a unit vector, so $|\mathbf{r}|=1$.

**Step 3: Calculate the scalar projection of the weight vector onto the ramp vector.**
We want the component of the weight force that acts *down* the ramp. This is the scalar projection of $\mathbf{W}$ onto $\mathbf{r}$.
$$ \text{comp}_{\mathbf{r}}\mathbf{W} = \frac{\mathbf{W} \cdot \mathbf{r}}{|\mathbf{r}|} $$
Since $\mathbf{r}$ is a unit vector, $|\mathbf{r}|=1$, so $\text{comp}_{\mathbf{r}}\mathbf{W} = \mathbf{W} \cdot \mathbf{r}$.
$$ \mathbf{W} \cdot \mathbf{r} = \langle 0, -650 \rangle \cdot \langle \cos(30^\circ), -\sin(30^\circ) \rangle $$
$$ = (0)(\cos(30^\circ)) + (-650)(-\sin(30^\circ)) $$
$$ = 650\sin(30^\circ) $$
We know $\sin(30^\circ) = \frac{1}{2}$.
$$ = 650 \left(\frac{1}{2}\right) = 325 \text{ pounds} $$

This scalar value, $325$ pounds, represents the magnitude of the force pulling the boat down the ramp. To merely prevent it from rolling down, an equal and opposite force must be applied *up* the ramp.

**Step 4: State the required force.**
The force required to prevent the boat and trailer from rolling down the ramp is $325$ pounds, acting parallel to the ramp and directed upwards.

---

### Definition: Parallel Vectors

Two nonzero vectors $\mathbf{u}$ and $\mathbf{v}$ are **parallel** if the angle $\theta$ between them is $0$ or $\pi$.

*   If $\theta = 0$, they point in the same direction. $\cos(0) = 1$. So $\mathbf{u} \cdot \mathbf{v} = |\mathbf{u}||\mathbf{v}|$.
*   If $\theta = \pi$, they point in opposite directions. $\cos(\pi) = -1$. So $\mathbf{u} \cdot \mathbf{v} = -|\mathbf{u}||\mathbf{v}|$.

In general, two nonzero vectors are parallel if and only if one is a scalar multiple of the other, i.e., $\mathbf{u} = c\mathbf{v}$ for some scalar $c$. If $c > 0$, they point in the same direction. If $c < 0$, they point in opposite directions.

### Practice & Reflection

Now, for a moment of contemplation, let's solidify our understanding of the dot product's essence!

1.  **Conceptual Check:** If $\mathbf{u}$ and $\mathbf{v}$ are nonzero vectors, what can you conclude about the angle between them if $\mathbf{u} \cdot \mathbf{v} > 0$? What if $\mathbf{u} \cdot \mathbf{v} < 0$?
2.  **Geometric Interpretation:** Consider a line in $R^2$ defined by the equation $ax + by = c$. Explain how the coefficients $\langle a, b \rangle$ relate to the line using the dot product.
3.  **Planes and Normals:** Professor Lundholm posed a question: "How do you find parallel and normal vectors from an equation like $4x+5y+2z=12$?"
    *   Think about how the dot product definition of a plane, $\mathbf{n} \cdot \mathbf{x} = d$, directly answers this. What is $\mathbf{n}$ in this specific equation? What does $\mathbf{n}$ represent geometrically for the plane?
4.  **Vector Decomposition:** You've decomposed a vector into parallel and perpendicular components. Why is this decomposition unique for a given vector and direction?
5.  **Challenge (Thales' Theorem):**
    Thales' Theorem states that any point on a circle determines a right triangle with the endpoints of any diameter not containing the point. Use vectors to prove Thales' Theorem. (Hint: It is enough to prove the statement for the unit circle centered at the origin. Let the diameter endpoints be $\langle -1, 0 \rangle$ and $\langle 1, 0 \rangle$, and let the point on the circle be $\langle x, y \rangle$). How does the dot product play a crucial role here?

---

That concludes our exploration of the dot product, my brilliant students! Remember, the dot product is more than just a calculation; it's a powerful conceptual bridge between the algebraic and geometric aspects of vectors. Master it, and you'll find countless applications in physics, engineering, and further mathematical studies.

Until next time, keep those vector components organized, and may your calculations always be orthogonal!

Your (pedagogical) Professor,

Hubert J. Farnsworth