# Vihasant Sagar Public School — Website

Professional, responsive website for **Vihasant Sagar Public School, Agra**.

## Tech Stack

- **HTML5** — semantic markup
- **Tailwind CSS** (via CDN) — utility-first styling
- **Vanilla JavaScript** — mobile menu, gallery filter, scroll animations, form handlers
- **Font Awesome 6** — icons
- **Google Fonts** — Inter (body) + Merriweather (headings)

No build step required — the site is fully static and deploys anywhere.

## Pages

| File | Section |
|------|---------|
| `index.html`      | Home (hero, highlights, principal message, news, testimonials) |
| `about.html`      | About, vision, mission, values, school history timeline |
| `academics.html`  | Programs (Pre-Primary → Sr. School), streams, facilities |
| `admissions.html` | Process, documents, fee structure, online enquiry form |
| `faculty.html`    | Leadership, department heads, faculty stats |
| `gallery.html`    | Filterable photo gallery (campus / academics / sports / cultural / events) |
| `events.html`     | Upcoming events + recent news |
| `contact.html`    | Contact info, enquiry form, embedded map |

## Folder Structure

```
VS-Public-School/
├── index.html
├── about.html
├── academics.html
├── admissions.html
├── faculty.html
├── gallery.html
├── events.html
├── contact.html
├── css/
│   └── style.css
└── js/
    └── main.js
```

## Theme

- **Primary:** Deep Navy `#0b2447`
- **Accent:**  Amber / Gold `#f59e0b`
- **Body bg:** Slate `#f8fafc`

## Deploying to Hostinger

1. Download / clone the project files.
2. In Hostinger File Manager, upload everything inside `VS-Public-School/` to your `public_html/` directory (root).
3. Visit your domain — the site will load `index.html` by default.

> The contact and admission forms are front-end only. To receive submissions, integrate with a service like Formspree, EmailJS or a custom PHP handler on Hostinger.

## Customisation

- Replace stock Unsplash images with real campus / event photos in each page.
- Update phone numbers, address and email in the top bar, footer and contact page.
- Edit `css/style.css` to tweak colours via the CSS variables in `:root`.
