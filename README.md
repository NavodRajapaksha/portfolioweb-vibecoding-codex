# Portfolio Website (React + Vite)

A modern, responsive personal portfolio built with React, Tailwind CSS, and Framer Motion. Includes a frontend-only admin dashboard for managing project content via `localStorage`.

## ✨ Features
- System-based theme detection with manual override
- Smooth transitions and motion
- Fully responsive layout (mobile, tablet, desktop)
- Admin dashboard (`/admin`) for local project management
- SEO-friendly meta tags
- Netlify-ready deployment

## 📁 Folder Structure
```
├── public
│   └── _redirects
├── src
│   ├── admin
│   │   └── Admin.jsx
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SectionHeading.jsx
│   │   └── ThemeToggle.jsx
│   ├── data
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── timeline.js
│   ├── hooks
│   │   ├── useProjects.js
│   │   └── useTheme.js
│   ├── sections
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── postcss.config.cjs
├── tailwind.config.cjs
└── vite.config.js
```

## 🚀 Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## 🔐 Admin Dashboard
Visit `/admin` and use:
- **Username:** `admin`
- **Password:** `portfolio123`

Project updates are stored in `localStorage` for fast, frontend-only management.

## 🌍 Netlify Deployment
1. Push the repository to GitHub.
2. In Netlify, select **New site from Git**.
3. Use these build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Ensure the `public/_redirects` file is included to support SPA routing.

---

Feel free to customize the content, branding, and project data in `src/data/` and the section components.
