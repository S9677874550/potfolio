# Portfolio Website

A single-page, fully responsive developer portfolio built with plain HTML, CSS, and JavaScript — no frameworks required.

## Folder Structure

```
Portfolio/
│
├── index.html
├── css/
│   ├── style.css          → design tokens, layout, components
│   ├── responsive.css      → tablet/mobile breakpoints
│   └── animations.css     → keyframes
├── js/
│   ├── script.js          → preloader, typing effect, theme toggle, form validation
│   ├── navbar.js          → sticky nav, hamburger menu, active-link tracking
│   └── animation.js       → scroll reveal, counters, skill bars, project filter
├── images/
│   ├── profile.png        → your photo (replace placeholder)
│   ├── projects/          → project screenshots
│   └── icons/             → optional custom icons
├── assets/
│   ├── resume.pdf         → your resume (replace placeholder)
│   └── favicon.ico
└── README.md
```

## What to edit before publishing

Search the project for `[EDIT` to find every spot that needs your real
information:

1. **`index.html`**
   - Your name (replace "Arjun Mehta" throughout, including `<title>`)
   - Hero bio, About Me paragraphs
   - Social links: WhatsApp number, phone number, Instagram, LinkedIn, Facebook, email
   - Project titles, descriptions, tags, and links
   - Timeline entries (jobs/education) and certifications
   - Testimonials

2. **`images/`**
   - `profile.png` — your professional photo (square, at least 600×600px works best)
   - `projects/project1.jpg` … `project4.jpg` — screenshots of your work

3. **`assets/`**
   - `resume.pdf` — your actual resume
   - `favicon.ico` — your site icon

## Notes on features

- **Dark/Light mode** — toggled via a JS variable, not browser storage, so it resets on reload. If you want it to persist across visits, you'll need to wire up `localStorage` yourself (not included here, since it doesn't work inside in-browser preview tools, but it's safe to add once this is hosted normally).
- **Contact form** — validates name, email, and message client-side. It does **not** send real emails. To make it functional, connect it to a service like Formspree, EmailJS, or your own backend endpoint in `script.js`.
- **Floating WhatsApp/phone numbers** — currently set to placeholder numbers. Update the `href="https://wa.me/..."` and `href="tel:..."` values across `index.html`.
- **Icons** — powered by Font Awesome via CDN. Requires an internet connection to load.

## Running locally

No build step needed. Just open `index.html` in a browser, or serve the
folder with any static server, e.g.:

```bash
npx serve .
```

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses CSS
`color-mix()` and `backdrop-filter`, both well supported in current
browser versions.
