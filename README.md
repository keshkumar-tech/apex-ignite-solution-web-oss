<div align="center">

<img src="public/images/apex-logo-300.png" alt="Apex Ignite Solutions" width="140" />

# Apex Ignite Solutions — Corporate Website

**A premium, multi-page marketing website for a precision thermoplastic injection-moulding manufacturer.**

Production-grade React front end · 25 routes · SEO-ready · blazing-fast first paint

<br />

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.26-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-Proprietary-101D32?style=for-the-badge)]()

</div>

---

## 📌 Overview

This repository contains the complete source code for the **Apex Ignite Solutions Pvt. Ltd.** website — a full redesign of the original single-page site into a modern, maintainable, multi-page application.

Every navigation link now points to a real, indexable page. Content is centralised in a single data file, the design system lives entirely in Tailwind config, and the build is optimised for Core Web Vitals (LCP, CLS, INP).

> **Live reference:** [apexignite.omsoftsolution.net.in](https://apexignite.omsoftsolution.net.in/)

---

## 🛠️ Technology Stack

<table>
<tr>
<td width="50%" valign="top">

### Core

| Technology              | Version | Purpose                                        |
| :---------------------- | :------ | :--------------------------------------------- |
| ⚛️ **React**            | `18.3`  | UI library (concurrent features, lazy loading) |
| 🧭 **React Router DOM** | `6.26`  | Client-side routing (25 routes, nested layout) |
| ⚡ **Vite**             | `5.4`   | Dev server + production bundler                |
| 🎨 **Tailwind CSS**     | `3.4`   | Utility-first design system                    |
| 🧩 **PostCSS**          | `8.4`   | CSS pipeline                                   |
| 🔧 **Autoprefixer**     | `10.4`  | Vendor prefixing                               |

</td>
<td width="50%" valign="top">

### Platform & Engineering

| Area                 | Implementation                                             |
| :------------------- | :--------------------------------------------------------- |
| 🗂️ **Content layer** | Single source of truth (`src/data/site.js`)                |
| 🔍 **SEO**           | Custom `useSeo` hook — title, meta, canonical, OG, JSON-LD |
| 🖼️ **Media**         | WebP/PNG imagery, lazy loading, preloaded LCP hero         |
| ♿ **Accessibility** | Skip-link, focus states, `aria` labels, keyboard nav       |
| 🚀 **Performance**   | Code splitting, inlined critical CSS, font swap            |
| 🌐 **Deployment**    | Apache/cPanel `.htaccess` SPA rewrite + Nginx config       |
| 📮 **Forms**         | PHP endpoint + reCAPTCHA v2 (lazy-loaded)                  |

</td>
</tr>
</table>

### Also used

`HTML5` · `CSS3` · `ES Modules (ESM)` · `JavaScript (ES2022)` · `JSX` · `JSON-LD / Schema.org` · `Google Fonts (Plus Jakarta Sans + Sora)` · `Git / GitHub`

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/keshkumar-tech/apex-ignite-solution-web-oss.git
cd apex-ignite-solution-web-oss

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev        # → http://127.0.0.1:5173

# 4. Production build
npm run build      # → /dist

# 5. Preview the build locally
npm run preview
```

### Requirements

- **Node.js** ≥ 18
- **npm** ≥ 9 (or pnpm / yarn — lockfile is npm)

---

## 🗺️ Pages & Routes (25)

| Route                                        | Page                             |
| :------------------------------------------- | :------------------------------- |
| `/`                                          | Home                             |
| `/about-us`                                  | About — Overview                 |
| `/director-message`                          | About — Director's Message       |
| `/mission-vision`                            | About — Mission & Vision         |
| `/our-team`                                  | About — Our Team                 |
| `/awards-achievements`                       | About — Awards & Achievements    |
| `/quality-certifications`                    | About — Quality & Certifications |
| `/our-infrastructure`                        | About — Our Infrastructure       |
| `/products`                                  | Products index                   |
| `/products/automotive-lock-components`       | Automotive Lock Components       |
| `/products/auto-electrical-alternator-parts` | Auto Electrical Alternator Parts |
| `/products/auto-electrical-starter-parts`    | Auto Electrical Starter Parts    |
| `/products/automotive-steering-components`   | Automotive Steering Components   |
| `/products/washing-machine-parts`            | Washing Machine Parts            |
| `/products/mcb-switchgear-parts`             | MCB & Switchgear Parts           |
| `/products/speedometer-components`           | Speedometer Components           |
| `/products/oil-gauge-meter-components`       | Oil Gauge Meter Components       |
| `/our-customers`                             | Our Customers                    |
| `/industries`                                | Industries                       |
| `/careers`                                   | Careers                          |
| `/contact-us`                                | Contact Us                       |
| `/gallery`                                   | Gallery                          |
| `/privacy-policy`                            | Privacy Policy                   |
| `/terms-of-service`                          | Terms of Service                 |
| `/sitemap`                                   | Sitemap                          |
| `*`                                          | 404 — Not Found                  |

---

## 📂 Project Structure

```text
.
├─ index.html                  # Shell + inlined critical CSS + JSON-LD organization schema
├─ package.json
├─ vite.config.js
├─ tailwind.config.js          # Entire design system (colours, shadows, animations)
├─ postcss.config.js
│
├─ public/
│  ├─ images/                  # 113 original company images (logo, products, parts, plant, clients)
│  ├─ sitemap.xml
│  ├─ robots.txt
│  └─ .htaccess                # Apache SPA rewrite + caching + security headers
│
└─ src/
   ├─ main.jsx                 # Entry point
   ├─ App.jsx                  # Route table, layout, lazy loading, scroll restoration
   ├─ index.css                # Tailwind layers + base typography
   │
   ├─ data/
   │  └─ site.js               # ALL content — single source of truth
   │
   ├─ lib/
   │  └─ useSeo.js             # Per-page title / description / canonical / OG
   │
   ├─ components/
   │  ├─ layout/               # Header · Footer · FloatingActions
   │  ├─ ui/                   # Icon.jsx · Primitives.jsx (Section, Button, PageBanner, Reveal…)
   │  └─ sections/             # ProductCard · Process · Faq · ProfileTabs · Timeline
   │                           # PartsGrid · EnquiryForm · AboutSidebar
   │
   └─ pages/
      ├─ Home.jsx  Products.jsx  ProductDetail.jsx  Customers.jsx
      ├─ Industries.jsx  Careers.jsx  Contact.jsx  Gallery.jsx
      ├─ Privacy.jsx  Terms.jsx  Sitemap.jsx  NotFound.jsx
      └─ about/   AboutOverview · DirectorMessage · MissionVision · OurTeam
                  Awards · Quality · Infrastructure
```

---

## 🎨 Design System

| Token                | Value                               | Usage                          |
| :------------------- | :---------------------------------- | :----------------------------- |
| **Navy**             | `#101D32`                           | Primary dark surface / headers |
| **Brand Blue**       | `#174B83`                           | Links, primary actions         |
| **Accent Orange**    | `#F58235`                           | CTAs, highlights, focus        |
| **Teal**             | `#0E9F8A`                           | Secondary accents              |
| **Light Background** | `#F5F7FA`                           | Page canvas                    |
| **Dark Text**        | `#202A36`                           | Body copy                      |
| **Muted Text**       | `#687586`                           | Secondary copy                 |
| **Display Font**     | `Sora`                              | Headings                       |
| **Body Font**        | `Plus Jakarta Sans`                 | Paragraphs & UI                |
| **Radius**           | `10 / 14 / 22 px`                   | Cards, panels                  |
| **Breakpoints**      | `640 / 768 / 1024 / 1240 / 1340 px` | Responsive grid                |

All tokens live in **`tailwind.config.js`** — change colours, shadows, or animations there, nowhere else. Custom keyframes (`fadeUp`, `marquee`, `shine`, `float`, `pulseRing`, `gradientShift`, `spinSlow`, `drawIn`) are defined in the same file.

---

## ⚡ Performance notes

- **Route-level code splitting** — Home ships in the main chunk (instant hero paint); every other route is `React.lazy` loaded.
- **Inlined critical CSS** — a static `boot-hero` paints before React boots, so the LCP element never waits on the stylesheet.
- **Font strategy** — `display=swap` + `preconnect` so text is never invisible.
- **Image strategy** — LCP hero image is `preload`ed with `fetchpriority="high"`; the rest lazy-load.
- **Zero layout shift** — the boot shell occupies the same box as the real hero, so hydration is invisible.

---

## 📮 Enquiry Form

Both enquiry forms post to the site's existing PHP endpoint:

```http
POST /send-mail.php          (multipart/form-data)

full_name, phone, email, company, product, message, g-recaptcha-response
```

- Field names match the **original** website, so the existing PHP handler keeps working untouched.
- A success message appears **only** after a `2xx` response — never on optimism.
- If the endpoint fails, the user gets an honest error plus the real phone/email.
- **reCAPTCHA v2** loads lazily on first interaction with the submit button.

> **Deploy note:** copy `send-mail.php` from the hosting account into the web root next to `index.html`. Without it, the form correctly reports that the enquiry could not be sent.

---

## 🌐 Deployment

### Apache / cPanel

1. `npm run build`
2. Upload the **contents of `dist/`** to the web root.
3. Ensure `.htaccess`, `sitemap.xml` and `robots.txt` are uploaded (they are inside `dist/`).
4. Add your existing `send-mail.php`.
5. Enable `mod_rewrite` so deep links like `/products/washing-machine-parts` survive a refresh.

### Nginx

```nginx
location / {
  try_files $uri $uri/ /index.html;
}

location = /send-mail.php {
  include fastcgi_params;
  fastcgi_pass unix:/run/php/php-fpm.sock;
}
```

### Vercel / Netlify

Set build command `npm run build`, output directory `dist`, and add an SPA fallback rewrite to `/index.html`.

---

## ✅ Content rules

- All copy comes from the original website. No invented products, clients, statistics, certifications, addresses, or testimonials.
- Where the original had **no text** (Director's Message, Our Team, Careers openings, Privacy Policy, Terms of Service), the page is built with real navigation and imagery plus a clearly marked _"pending verification"_ notice — never dummy copy.

---

<div align="center">

**Built with care by [OM Soft Solution](https://omsoftsolution.net.in/)**

⭐ If this project helped you, consider giving it a star.

</div>
