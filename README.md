# Neon Web

A modern, responsive, neon‑themed website built with HTML5, CSS3 (custom properties, dark mode default), and vanilla JavaScript. The design features glowing neon text, smooth CSS animations, and a mobile‑first layout.

## ✨ Features

- **Dark mode as default** using CSS custom properties (`--bg-color`, `--primary-neon`, etc.).
- **Neon glow & flicker animation** on headings and buttons.
- **Responsive design** – flexbox and grid layout adapt to any screen size.
- **Mobile navigation** with an accessible hamburger toggle.
- **Animated button states** with subtle glow transitions.
- **Contact form** with client‑side validation and friendly feedback.
- **Semantic HTML5** (`header`, `nav`, `main`, `section`, `footer`).
- **No external dependencies** – pure HTML, CSS, and JS.

## 📂 Project Structure

```
neon-web/
├─ index.html      # Main page markup
├─ styles.css      # All styling, dark theme, animations
├─ script.js       # Navigation toggle & form handling
└─ README.md       # Project documentation (this file)
```

## 🚀 Getting Started

1. **Clone or download** the repository.

   ```bash
   git clone https://github.com/yourusername/neon-web.git
   ```

2. **Open** `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).

   No build step or server is required.

## 🛠️ Customization

- **Colors** – edit the CSS custom properties in `:root` inside `styles.css` to change the neon palette.
- **Background image** – replace the URL in `.hero::before` with your own image.
- **Content** – modify the HTML sections in `index.html` to suit your needs.

## 📱 Responsive Behavior

- **Desktop** – navigation links displayed inline.
- **Tablet & Mobile** – navigation collapses into a hamburger menu. Click the hamburger to reveal the menu.

## 🎨 Design Notes

- The neon effect is achieved with multiple `text-shadow` layers and a `@keyframes neon-flicker` animation.
- Smooth transitions (`var(--transition-speed)`) are applied to interactive elements for a polished feel.
- The dark theme is the default; you can extend the stylesheet with a light‑mode toggle if desired.

## 🙏 Acknowledgements

- Background image sourced from Unsplash (free for commercial use).
- Inspiration drawn from classic arcade neon signage.

---

Enjoy the glow! 🚀