# Contributing to Milligan Mathematics Courses

Welcome to the team! This guide will help you get set up with the repository and our tools, including Google Antigravity.

## 1. Getting Set Up

### Prerequisites
- GitHub Account (connected to the Milligan Mathematics organization)
- Google Antigravity installed on your machine

### Clone the Repository
1. Open your terminal or Git client.
2. Clone the repository:
   ```bash
   git clone https://github.com/milligan-mathematics/courses.git
   cd courses
   ```

### Open in Antigravity
1. Open the **Antigravity** application.
2. Select **Open Folder** and navigate to the cloned `courses` directory.
3. Antigravity will index the project and be ready to assist you.

## 2. Development Workflow

1. **Pull the latest changes** before starting work:
   ```bash
   git pull origin main
   ```
2. **Create a new branch** for your feature or content update:
   ```bash
   git checkout -b name-of-your-feature
   ```
3. **Make your changes**. You can ask Antigravity to help you write content, fix bugs, or style pages.
4. **Test locally** (if you have Jekyll installed):
   ```bash
   bundle exec jekyll serve
   ```
   *If you don't have Jekyll, you can push your branch and check the GitHub pages deployment (if enabled for branches).*
5. **Commit and Push**:
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push origin name-of-your-feature
   ```
6. **Open a Pull Request** on GitHub to merge your changes into `main`.

## 3. Styling Guidelines

We have a custom styling system located in `assets/css/style.css`. Please use our defined variables and classes to maintain consistency.

### Colors
Use CSS variables for colors to ensure branding consistency:

| Variable | Description | Hex |
| :--- | :--- | :--- |
| `--color-primary` | Milligan Orange (Main) | `#F36E24` |
| `--color-primary-dark` | Burnt Orange (Hover) | `#CD5920` |
| `--color-black` | Buffalo Black | `#000000` |
| `--color-accent-blue` | Stoele Blue | `#009CDE` |
| `--color-accent-green`| Anglin Field Green | `#008552` |

### Typography
- **Headings**: Use `<h1>` through `<h6>`. They automatically use the primary font ("Franklin Gothic Medium").
- **Body**: Standard text uses the secondary font ("Proxima Nova").

### Common Components

#### Course Cards (`.course-card`)
Used on the main landing page to display courses.
```html
<div class="course-card">
    <div class="course-number">MATH 123</div>
    <h3>Course Title</h3>
    <p>Course description goes here.</p>
    <a href="/courses/123/" class="course-link">View Course →</a>
</div>
```

#### Demo Items (`.demo-item`)
Used for listing activities or interactive content on course pages.
```html
<li class="demo-item">
    <a href="activity-link.html">Activity Name</a>
</li>
```

#### Buttons & Links
- Standard links (`<a>`) are styled with the primary color.
- Hover states transition to the darker orange.

## 4. Project Structure

- **`_layouts/`**: HTML templates for different page types (default, course, home).
- **`assets/`**: CSS, images, and other static files.
- **`[CourseNumber]/`**: Directories for specific courses (e.g., `211/`, `351/`). These contain the specific pages and resources for that class.
- **`_config.yml`**: Jekyll configuration settings.

## Need Help?
Just ask Antigravity! You can say things like:
- *"Create a new activity page for Math 211 using the standard layout."*
- *"Style this list using our demo-item class."*
- *"Fix the mobile responsiveness of this table."*
