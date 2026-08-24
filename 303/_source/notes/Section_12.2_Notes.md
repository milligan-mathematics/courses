***Good news, everyone!*** Professor Hubert J. Farnsworth here, your esteemed math TA and pedagogical assistant from the illustrious Milligan University! Prepare your brains for an enlightening journey into the fascinating world of Multivariable Calculus. Today, we're diving deep into **Section 12.2: Arc Length and the Unit Tangent Vector.**

This section is absolutely fundamental for understanding how curves behave in space – not just where they are, but how long they are, how fast they're moving, and in what direction! It's like mapping the trajectory of my latest Planet Express delivery, but with less risk of space pirates (usually).

So, grab your thinking caps, perhaps a refreshing Nuka-Cola, and let's unravel the mysteries of curves in glorious $R^3$!

---

# Math 303 - Section 12.2: Arc Length and the Unit Tangent Vector

## Overview

In this lecture, we'll equip ourselves with the tools to measure the length of curves in three-dimensional space, understand how to describe a curve's path independent of *how fast* it's traversed, and pinpoint its exact direction of motion at any given moment. We'll then apply these concepts to the classic physics problem of projectile motion, analyzing height, distance, and speed.

Our journey through Section 12.2 will cover three main topics:

1.  **Arc Length:** How do we measure the "distance" along a wiggly path in space?
2.  **The Unit Tangent Vector:** What's the instantaneous direction of travel along a curve, normalized to a unit length?
3.  **Projectile Motion:** Applying our vector calculus tools to analyze the flight of objects under gravity.

Let's begin!

---

## 1. Arc Length of Space Curves

Imagine a tiny bug crawling along a path in space. If we want to know how far it traveled, we can't just use a ruler! We need a method to sum up all the infinitesimally small displacements along its curved path. This is precisely what **arc length** allows us to do.

### Definition: Arc Length of Space Curves

Suppose a curve $C$ is defined over the interval $a \le t \le b$ by the position vector
$$ \mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle $$
or, equivalently, by the parametric equations $x = f(t)$, $y = g(t)$, and $z = h(t)$. Suppose further that $f'$, $g'$, and $h'$ are all continuous on $[a,b]$ and that $C$ is traced out just once over the interval (except possibly for a finite number of self-intersections).

Then the **arc length** $L$ of $C$ from $t=a$ to $t=b$ is given by:
$$ L = \int_a^b \sqrt{[f'(t)]^2 + [g'(t)]^2 + [h'(t)]^2} \, dt $$
This formula can also be written in terms of derivatives with respect to $t$:
$$ L = \int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2 + \left(\frac{dz}{dt}\right)^2} \, dt $$

**Why does this work?**
Recall from earlier sections that the velocity vector is given by $\mathbf{r}'(t) = \langle f'(t), g'(t), h'(t) \rangle$. The **speed** of an object moving along the curve is the magnitude of its velocity vector:
$$ |\mathbf{r}'(t)| = \sqrt{[f'(t)]^2 + [g'(t)]^2 + [h'(t)]^2} $$
So, the arc length formula is equivalent to:
$$ L = \int_a^b |\mathbf{r}'(t)| \, dt $$
This makes perfect sense! If speed is the rate of change of distance with respect to time ($ds/dt$), then integrating speed over a time interval gives you the total distance traveled (the arc length $L$). It's just like in single-variable calculus: integrating velocity gives displacement. Here, we integrate *speed* to get *total distance* along the curve. Think of it as "adding up little lengths of tangent vectors" – a truly magnificent concept!

### Example 1: Finding the Arc Length of a Space Curve

Let's find the arc length of a portion of a helix.

**Problem:** Find the arc length of the portion of the helix $\mathbf{r}(t) = \langle \cos t, t/2, \sin t \rangle$ over the interval $[0, 4\pi]$.

**Solution:**
1.  **Find the derivative of the position vector, $\mathbf{r}'(t)$:**
    $$ \mathbf{r}'(t) = \left\langle \frac{d}{dt}(\cos t), \frac{d}{dt}(t/2), \frac{d}{dt}(\sin t) \right\rangle = \langle -\sin t, 1/2, \cos t \rangle $$
2.  **Calculate the magnitude of the velocity vector, $|\mathbf{r}'(t)|$:**
    $$ |\mathbf{r}'(t)| = \sqrt{(-\sin t)^2 + (1/2)^2 + (\cos t)^2} $$
    $$ |\mathbf{r}'(t)| = \sqrt{\sin^2 t + 1/4 + \cos^2 t} $$
    Recall the trigonometric identity $\sin^2 t + \cos^2 t = 1$:
    $$ |\mathbf{r}'(t)| = \sqrt{1 + 1/4} = \sqrt{5/4} = \frac{\sqrt{5}}{2} $$
    Notice that the speed is constant! This makes the integration delightfully simple.
3.  **Integrate $|\mathbf{r}'(t)|$ over the given interval $[0, 4\pi]$ to find the arc length $L$:**
    $$ L = \int_0^{4\pi} |\mathbf{r}'(t)| \, dt = \int_0^{4\pi} \frac{\sqrt{5}}{2} \, dt $$
    $$ L = \frac{\sqrt{5}}{2} [t]_0^{4\pi} = \frac{\sqrt{5}}{2} (4\pi - 0) = 2\pi\sqrt{5} $$

**Result:** The arc length of the helix over the interval $[0, 4\pi]$ is $2\pi\sqrt{5}$.
This specific helix traces two complete coils, starting at $(1,0,0)$ (at $t=0$) and ending at $(1, 2\pi, 0)$ (at $t=4\pi$). The total distance traveled along this path is $2\pi\sqrt{5}$. Because the speed was constant, the bug crawled the same distance per unit time – how convenient!

---

### Reparametrizing with Respect to Arc Length

Often, when we're studying the *pure geometry* of a curve (its shape and path), the parameter $t$ (which often represents time) can be a bit of a nuisance. It might cause the curve to be traced very quickly in some sections and very slowly in others. To abstract away the "speed" of traversal and focus solely on the geometric path, we can reparametrize a curve using its **arc length parameter**, denoted by $s$.

The arc length parameter $s$ is defined by the arc length formula, typically measured from a convenient reference point $t_0$:
$$ s(t) = \int_{t_0}^{t} |\mathbf{r}'(u)| \, du $$
Here, $s(t)$ represents the length of the curve from $t_0$ to $t$.

**Why is $s$ a "better" parameter for geometry?**
A key advantage arises from the **Fundamental Theorem of Calculus, Part I** (a delightful flashback to Calc I!):
If $F(x) = \int_a^x f(t) \, dt$, then $F'(x) = f(x)$.
Applying this to our arc length function $s(t)$:
$$ s'(t) = \frac{ds}{dt} = \frac{d}{dt} \int_{t_0}^{t} |\mathbf{r}'(u)| \, du = |\mathbf{r}'(t)| $$
This means that the rate of change of arc length with respect to $t$ is exactly the speed of the curve at time $t$. This is a crucial relationship!

If we are able to express $t$ as a function of $s$ (i.e., $t(s)$), we can then substitute this into the original position vector $\mathbf{r}(t)$ to get $\mathbf{r}(t(s))$, which is a curve parametrized by arc length.
For a curve parametrized by arc length $s$, we have a remarkable property:
$$ \frac{d\mathbf{r}}{ds} = \frac{d\mathbf{r}}{dt} \frac{dt}{ds} = \mathbf{r}'(t) \frac{1}{ds/dt} = \mathbf{r}'(t) \frac{1}{|\mathbf{r}'(t)|} $$
Since $|\mathbf{r}'(t)|$ is a scalar, this means:
$$ \left| \frac{d\mathbf{r}}{ds} \right| = \left| \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|} \right| = \frac{|\mathbf{r}'(t)|}{|\mathbf{r}'(t)|} = 1 $$
This tells us that when a curve is parametrized by arc length, the magnitude of its velocity vector (with respect to $s$) is always 1! The curve is traced out at a constant "speed" of 1 unit of length per unit of arc length. This means points separated by one unit of arc length $s$ are exactly 1 unit apart along the curve. A most elegant simplification, wouldn't you agree?

### Example 2: Parametrizing a Space Curve with Respect to Arc Length

Let's reparametrize the same helix from Example 1.

**Problem:** Reparametrize the helix $\mathbf{r}(t) = \langle \cos t, t/2, \sin t \rangle$ with respect to arc length.

**Solution:**
1.  **Find the arc length function $s(t)$:**
    From Example 1, we already calculated the speed: $|\mathbf{r}'(t)| = \frac{\sqrt{5}}{2}$.
    Let's use $t_0 = 0$ as our reference point. For clarity in integration, we can temporarily use $u$ as the variable of integration:
    $$ s(t) = \int_0^{t} |\mathbf{r}'(u)| \, du = \int_0^{t} \frac{\sqrt{5}}{2} \, du $$
    $$ s(t) = \frac{\sqrt{5}}{2} [u]_0^{t} = \frac{\sqrt{5}}{2} t $$
    This confirms that the arc length of the helix between $t=0$ and $t=4\pi$ is $s(4\pi) = \frac{\sqrt{5}}{2}(4\pi) = 2\pi\sqrt{5}$, which matches our previous result!

2.  **Solve for $t$ in terms of $s$:**
    From $s = \frac{\sqrt{5}}{2} t$, we get $t = \frac{2s}{\sqrt{5}}$.

3.  **Substitute $t(s)$ back into the original position vector $\mathbf{r}(t)$:**
    $$ \mathbf{r}(s) = \mathbf{r}(t(s)) = \left\langle \cos\left(\frac{2s}{\sqrt{5}}\right), \frac{1}{2}\left(\frac{2s}{\sqrt{5}}\right), \sin\left(\frac{2s}{\sqrt{5}}\right) \right\rangle $$
    $$ \mathbf{r}(s) = \left\langle \cos\left(\frac{2s}{\sqrt{5}}\right), \frac{s}{\sqrt{5}}, \sin\left(\frac{2s}{\sqrt{5}}\right) \right\rangle $$

**Result:** The helix parametrized with respect to arc length is $\mathbf{r}(s) = \left\langle \cos\left(\frac{2s}{\sqrt{5}}\right), \frac{s}{\sqrt{5}}, \sin\left(\frac{2s}{\sqrt{5}}\right) \right\rangle$.

**Geometric Interpretation:**
This new parametrization means that if you plug in $s=1$, you'll get the point on the helix exactly 1 unit of arc length from the starting point ($t=0$, which corresponds to $s=0$).
For example, for $s=0$, we have $\mathbf{r}(0) = \langle \cos(0), 0, \sin(0) \rangle = \langle 1,0,0 \rangle$.
For $s=1$, we get $\mathbf{r}(1) = \left\langle \cos\left(\frac{2}{\sqrt{5}}\right), \frac{1}{\sqrt{5}}, \sin\left(\frac{2}{\sqrt{5}}\right) \right\rangle$.
For $s=2$, we get $\mathbf{r}(2) = \left\langle \cos\left(\frac{4}{\sqrt{5}}\right), \frac{2}{\sqrt{5}}, \sin\left(\frac{4}{\sqrt{5}}\right) \right\rangle$.
And so on. These points mark locations that are 1 unit from each other along the helix. This makes visualizing and analyzing the curve's geometry much cleaner!

---

## 2. The Unit Tangent Vector

When we want to understand the *direction* of a curve at a particular point, we look to the tangent vector. However, the velocity vector $\mathbf{r}'(t)$ not only tells us direction but also magnitude (speed). To isolate *only* the direction, we normalize the tangent vector to have a length of 1. This gives us the **unit tangent vector**.

### Definition: Unit Tangent Vector

The **unit tangent vector** $\mathbf{T}(t)$ of a smooth curve $\mathbf{r}(t)$ (where "smooth" means $\mathbf{r}'(t) \ne \mathbf{0}$) is defined as:
$$ \mathbf{T}(t) = \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|} $$
In simpler terms, it's the velocity vector divided by its own magnitude. This ensures that $\mathbf{T}(t)$ always points in the direction of motion along the curve and always has a magnitude of 1, i.e., $|\mathbf{T}(t)| = 1$.

**Connection to Arc Length Parameter:**
As we observed earlier when discussing reparametrization by arc length, if $s$ is the arc length parameter for the curve, then the derivative of the position vector with respect to arc length is precisely the unit tangent vector:
$$ \frac{d\mathbf{r}}{ds} = \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|} = \mathbf{T}(t) $$
This confirms that, at any given point, the rate of change of a curve with respect to the arc length parameter is indeed the unit tangent vector. Fascinating!

### Example 3: Finding the Unit Tangent Vector for a Curve

Let's find the unit tangent vector for a slightly more complex helix.

**Problem:** Find the unit tangent vector for the curve defined by $\mathbf{r}(t) = \langle \cos t, \sin t, \cos(3t) \rangle$ over the interval $[0, 2\pi]$.

**Solution:**
1.  **Find the derivative of the position vector, $\mathbf{r}'(t)$:**
    $$ \mathbf{r}'(t) = \left\langle \frac{d}{dt}(\cos t), \frac{d}{dt}(\sin t), \frac{d}{dt}(\cos(3t)) \right\rangle = \langle -\sin t, \cos t, -3\sin(3t) \rangle $$
2.  **Calculate the magnitude of the velocity vector, $|\mathbf{r}'(t)|$:**
    $$ |\mathbf{r}'(t)| = \sqrt{(-\sin t)^2 + (\cos t)^2 + (-3\sin(3t))^2} $$
    $$ |\mathbf{r}'(t)| = \sqrt{\sin^2 t + \cos^2 t + 9\sin^2(3t)} $$
    Using the identity $\sin^2 t + \cos^2 t = 1$:
    $$ |\mathbf{r}'(t)| = \sqrt{1 + 9\sin^2(3t)} $$
    Notice that the speed is *not* constant here. This would make reparametrizing with arc length much more difficult (you'd have a complicated integral for $s(t)$ which is not always solvable in elementary functions). This is why sometimes reparametrization is "not recommended" for certain curves, unless we're just doing it for edification!
3.  **Form the unit tangent vector, $\mathbf{T}(t)$:**
    $$ \mathbf{T}(t) = \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|} = \frac{\langle -\sin t, \cos t, -3\sin(3t) \rangle}{\sqrt{1 + 9\sin^2(3t)}} $$
    $$ \mathbf{T}(t) = \left\langle \frac{-\sin t}{\sqrt{1 + 9\sin^2(3t)}}, \frac{\cos t}{\sqrt{1 + 9\sin^2(3t)}}, \frac{-3\sin(3t)}{\sqrt{1 + 9\sin^2(3t)}} \right\rangle $$

**Result:** The unit tangent vector for the given curve is $\mathbf{T}(t) = \left\langle \frac{-\sin t}{\sqrt{1 + 9\sin^2(3t)}}, \frac{\cos t}{\sqrt{1 + 9\sin^2(3t)}}, \frac{-3\sin(3t)}{\sqrt{1 + 9\sin^2(3t)}} \right\rangle$.

### Example 4: Finding the Unit Tangent Vector for a Curve (in the plane)

Let's look at a simpler 2D case to solidify the concept.

**Problem:** Find the unit tangent vector for the curve in the plane defined by $\mathbf{r}(t) = \langle \cos t, \sin t \rangle$.

**Solution:**
1.  **Find the derivative of the position vector, $\mathbf{r}'(t)$:**
    $$ \mathbf{r}'(t) = \left\langle \frac{d}{dt}(\cos t), \frac{d}{dt}(\sin t) \right\rangle = \langle -\sin t, \cos t \rangle $$
2.  **Calculate the magnitude of the velocity vector, $|\mathbf{r}'(t)|$:**
    $$ |\mathbf{r}'(t)| = \sqrt{(-\sin t)^2 + (\cos t)^2} = \sqrt{\sin^2 t + \cos^2 t} = \sqrt{1} = 1 $$
    This is the unit circle! The speed is always 1.
3.  **Form the unit tangent vector, $\mathbf{T}(t)$:**
    $$ \mathbf{T}(t) = \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|} = \frac{\langle -\sin t, \cos t \rangle}{1} = \langle -\sin t, \cos t \rangle $$

**Result:** The unit tangent vector for the circle $\mathbf{r}(t) = \langle \cos t, \sin t \rangle$ is $\mathbf{T}(t) = \langle -\sin t, \cos t \rangle$.

**Geometric Interpretation:**
For a point on the unit circle, say at $t = \pi/3$, the position vector is $\mathbf{r}(\pi/3) = \langle \cos(\pi/3), \sin(\pi/3) \rangle = \langle 1/2, \sqrt{3}/2 \rangle$.
The unit tangent vector at this point is $\mathbf{T}(\pi/3) = \langle -\sin(\pi/3), \cos(\pi/3) \rangle = \langle -\sqrt{3}/2, 1/2 \rangle$.
Notice that $\mathbf{r}(\pi/3) \cdot \mathbf{T}(\pi/3) = (1/2)(-\sqrt{3}/2) + (\sqrt{3}/2)(1/2) = -\sqrt{3}/4 + \sqrt{3}/4 = 0$. This means the position vector and the unit tangent vector are perpendicular at every point on the circle. This is a property of motion along a circle! The position vector points out from the origin, and the tangent vector points along the curve. If the curve is a circle centered at the origin, these must be orthogonal.

---

## 3. Projectile Motion

Now let's apply our knowledge of vectors and derivatives to a classic physics problem: projectile motion. This is the motion of an object (a projectile) launched into the air, subject only to the force of gravity (and neglecting air resistance, for simplicity, otherwise things get quite hairy!).

The position vector function for a projectile is given by:
$$ \mathbf{r}(t) = \left\langle (v_0 \cos\theta)t + x_0, -\frac{1}{2}gt^2 + (v_0 \sin\theta)t + y_0 \right\rangle $$
Where:
*   $t$ is time.
*   $v_0$ is the initial speed (muzzle velocity, launch speed).
*   $\theta$ is the initial angle of elevation (angle above the horizontal).
*   $g$ is the acceleration due to gravity (approximately $9.8 \text{ m/s}^2$ or $32 \text{ ft/s}^2$).
*   $x_0$ is the initial horizontal position.
*   $y_0$ is the initial vertical position.

The velocity vector $\mathbf{v}(t)$ is the derivative of the position vector:
$$ \mathbf{v}(t) = \mathbf{r}'(t) = \langle v_0 \cos\theta, -gt + v_0 \sin\theta \rangle $$
The acceleration vector $\mathbf{a}(t)$ is the derivative of the velocity vector:
$$ \mathbf{a}(t) = \mathbf{v}'(t) = \langle 0, -g \rangle $$
This confirms that the only acceleration acting on the projectile is due to gravity, pointing straight down.

### Example 5: Finding the Maximum Height of a Projectile

Let's find formulas for the maximum height and the time it takes to reach that height.

**Problem:** Given the vector function for a projectile's motion, $\mathbf{r}(t) = \left\langle (v_0 \cos\theta)t + x_0, -\frac{1}{2}gt^2 + (v_0 \sin\theta)t + y_0 \right\rangle$, find formulas for its maximum height and the time at which it reaches that height.

**Solution:**
A projectile reaches its maximum height when its **vertical component of velocity is 0**. This is the point where it momentarily stops moving upwards before starting its descent.
1.  **Find the vertical component of velocity:**
    From $\mathbf{v}(t) = \langle v_0 \cos\theta, -gt + v_0 \sin\theta \rangle$, the vertical component is $v_y(t) = -gt + v_0 \sin\theta$.

2.  **Set the vertical velocity component to 0 and solve for $t$:**
    $$ -gt + v_0 \sin\theta = 0 $$
    $$ gt = v_0 \sin\theta $$
    $$ t = \frac{v_0 \sin\theta}{g} $$
    This is the time at which the projectile reaches its maximum height. Let's call this $t_{max}$.

3.  **Substitute $t_{max}$ into the vertical component of the position vector, $y(t)$, to find the maximum height:**
    The vertical component of $\mathbf{r}(t)$ is $y(t) = -\frac{1}{2}gt^2 + (v_0 \sin\theta)t + y_0$.
    $$ y_{max} = -\frac{1}{2}g\left(\frac{v_0 \sin\theta}{g}\right)^2 + (v_0 \sin\theta)\left(\frac{v_0 \sin\theta}{g}\right) + y_0 $$
    $$ y_{max} = -\frac{1}{2}g\left(\frac{v_0^2 \sin^2\theta}{g^2}\right) + \frac{v_0^2 \sin^2\theta}{g} + y_0 $$
    $$ y_{max} = -\frac{v_0^2 \sin^2\theta}{2g} + \frac{2v_0^2 \sin^2\theta}{2g} + y_0 $$
    $$ y_{max} = \frac{v_0^2 \sin^2\theta}{2g} + y_0 $$

**Result:**
The time at which the projectile reaches its maximum height is $t_{max} = \frac{v_0 \sin\theta}{g}$.
The maximum height reached by the projectile is $y_{max} = \frac{v_0^2 \sin^2\theta}{2g} + y_0$.

---

### Example 6: Finding the Distance Traveled by a Projectile and Its Speed at Impact

This is a comprehensive problem applying multiple concepts!

**Problem:** A bullet is shot from a rifle with a muzzle velocity of $170 \text{ m/s}$ at a $30^\circ$ angle of elevation. The bullet leaves the rifle at a height of $2 \text{ m}$ above the ground. Assuming the surrounding terrain is flat and level, how far does the bullet travel horizontally, and with what speed does it hit the ground? (Assume no air resistance, for simplicity, or we'd be here all day!)

**Solution:**
We are given:
*   $v_0 = 170 \text{ m/s}$
*   $\theta = 30^\circ$
*   $y_0 = 2 \text{ m}$
*   $g = 9.8 \text{ m/s}^2$ (standard acceleration due to gravity)
Let's assume $x_0 = 0$ for simplicity, meaning the rifle is at the origin horizontally.

The position vector is:
$$ \mathbf{r}(t) = \left\langle (v_0 \cos\theta)t + x_0, -\frac{1}{2}gt^2 + (v_0 \sin\theta)t + y_0 \right\rangle $$
Substituting the given values:
$$ \mathbf{r}(t) = \left\langle (170 \cos 30^\circ)t, -\frac{1}{2}(9.8)t^2 + (170 \sin 30^\circ)t + 2 \right\rangle $$
$$ \mathbf{r}(t) = \left\langle (170 \cdot \sqrt{3}/2)t, -4.9t^2 + (170 \cdot 1/2)t + 2 \right\rangle $$
$$ \mathbf{r}(t) = \left\langle 85\sqrt{3}t, -4.9t^2 + 85t + 2 \right\rangle $$

**Part A: How far does the bullet travel horizontally?**
To find the horizontal distance, we first need to determine the time $t$ when the bullet hits the ground. This occurs when the vertical position $y(t) = 0$.
$$ -4.9t^2 + 85t + 2 = 0 $$
This is a quadratic equation of the form $at^2 + bt + c = 0$, where $a = -4.9$, $b = 85$, and $c = 2$. We use the quadratic formula:
$$ t = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$
$$ t = \frac{-85 \pm \sqrt{85^2 - 4(-4.9)(2)}}{2(-4.9)} $$
$$ t = \frac{-85 \pm \sqrt{7225 + 39.2}}{-9.8} $$
$$ t = \frac{-85 \pm \sqrt{7264.2}}{-9.8} $$
$$ t \approx \frac{-85 \pm 85.23}{-9.8} $$
We get two possible values for $t$:
$$ t_1 = \frac{-85 + 85.23}{-9.8} = \frac{0.23}{-9.8} \approx -0.023 \text{ s} $$
$$ t_2 = \frac{-85 - 85.23}{-9.8} = \frac{-170.23}{-9.8} \approx 17.37 \text{ s} $$
The physically meaningful solution for the time of impact is $t_2 \approx 17.37 \text{ s}$ (a negative time would mean before the bullet was fired, which is not what we're looking for).

Now, substitute this time into the horizontal component of the position vector, $x(t)$:
$$ x(t_{impact}) = 85\sqrt{3} \cdot (17.37) $$
$$ x(t_{impact}) \approx 85 \cdot 1.732 \cdot 17.37 \approx 2557.07 \text{ m} $$

**Result Part A:** The bullet travels approximately $2557 \text{ meters}$ horizontally.

**Part B: What is its speed at impact?**
The speed is the magnitude of the velocity vector, $|\mathbf{v}(t)|$.
First, let's find the velocity vector $\mathbf{v}(t) = \mathbf{r}'(t)$:
$$ \mathbf{v}(t) = \langle 85\sqrt{3}, -9.8t + 85 \rangle $$
Now, evaluate the velocity vector at the time of impact $t \approx 17.37 \text{ s}$:
$$ \mathbf{v}(17.37) = \langle 85\sqrt{3}, -9.8(17.37) + 85 \rangle $$
$$ \mathbf{v}(17.37) = \langle 85\sqrt{3}, -170.226 + 85 \rangle $$
$$ \mathbf{v}(17.37) = \langle 85\sqrt{3}, -85.226 \rangle $$
Now, calculate the magnitude of this velocity vector:
$$ |\mathbf{v}(17.37)| = \sqrt{(85\sqrt{3})^2 + (-85.226)^2} $$
$$ |\mathbf{v}(17.37)| = \sqrt{(85^2 \cdot 3) + 7263.47} $$
$$ |\mathbf{v}(17.37)| = \sqrt{(7225 \cdot 3) + 7263.47} $$
$$ |\mathbf{v}(17.37)| = \sqrt{21675 + 7263.47} $$
$$ |\mathbf{v}(17.37)| = \sqrt{28938.47} $$
$$ |\mathbf{v}(17.37)| \approx 170.11 \text{ m/s} $$

**Result Part B:** The speed of the bullet at impact is approximately $170.1 \text{ m/s}$.
Notice that this is very slightly greater than its initial speed of $170 \text{ m/s}$. This small difference is due to the bullet starting at a height of $2 \text{ m}$ and falling to $0 \text{ m}$, gaining a tiny bit of kinetic energy from the conversion of potential energy. If it started and landed at the same height, its impact speed would be exactly its initial speed (due to conservation of energy).

---

## Practice & Reflection

Alright, my keen-minded apprentices, time to solidify your understanding! Ponder these questions and attempt these problems. For true mastery, don't just find the answer, explain *why* it's the answer!

**Conceptual Check-ins:**

1.  **Arc Length & Speed:** Why is integrating speed ($|\mathbf{r}'(t)|$) the correct way to find arc length? What would happen if we integrated the velocity vector $\mathbf{r}'(t)$ directly?
2.  **Reparametrization:** What is the primary benefit of parametrizing a curve with respect to arc length $s$? What is special about $|\frac{d\mathbf{r}}{ds}|$?
3.  **Unit Tangent Vector:** Explain in your own words the difference between the velocity vector $\mathbf{v}(t)$ and the unit tangent vector $\mathbf{T}(t)$. When would they be identical?
4.  **Projectile Motion:** In projectile motion (neglecting air resistance), what is constant? What is *not* constant? How does the initial launch height affect the impact speed compared to the launch speed?

**Additional Problems (from the Professor's template):**

**Problem 28:** Suppose a bug starts crawling at $(0,0,0)$ along the curve $\mathbf{r}(t) = \langle 3t, 2t^2, \frac{4\sqrt{2}}{3}t^{3/2} \rangle$. After crawling exactly 5 unit lengths, it runs into a spider web. Find the coordinates of the point where the curve pierces the spider web.

**Solution Hint:** This requires finding the arc length function $s(t)$, setting it equal to 5, solving for $t$, and then plugging that $t$ back into $\mathbf{r}(t)$.

**True or False?** Determine whether the given statement is true or false. In case of a false statement, explain or provide a counterexample.

**Problem 50:** The circle $\mathbf{r}(t) = \langle \cos t, \sin t, 0 \rangle$ has the property that $\mathbf{r}(t)$ and $\mathbf{r}'(t)$ are perpendicular for all $t$.

**Problem 51:** The helix $\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$ has the property that $\mathbf{r}(t)$ and $\mathbf{r}'(t)$ are perpendicular for all $t$.

**Problem 52:** If $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$ and $f(t)$, $g(t)$, and $h(t)$ are linear polynomials, then $\mathbf{T}(t)$ is constant.

---

That concludes our exhilarating journey through Arc Length and the Unit Tangent Vector! Remember, practice is the key to truly grasping these concepts. Don't hesitate to experiment with different curves, calculate their lengths and tangent vectors, and visualize them in your mind's eye (or with a computational tool, if you're a true Futurama fan like me!).

Until next time, keep those brain-muscles flexing! ***Wha?!*** Good bye!