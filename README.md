# Hapinayan — Professional Web Developer Portfolio

A modern, fast, accessible, and responsive personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Features

- **Premium Technology Aesthetic**: Deep navy dark mode default with electric blue accents, subtle glows, glassmorphism, and cyber grid elements.
- **Dark & Light Mode**: Smooth theme toggling persisted in `localStorage`.
- **Hero Showcase**: Clear typography, action buttons, live project links, and an automatic fallback visual for your photo.
- **Photo Placeholder**: Drop your photo into `public/profile.jpg` to display it immediately.
- **Skills Matrix**: Categorized tech stack (Frontend, Backend, Database, Tools) with category filtering and interactive hover styling.
- **Featured Projects**: Deep-dive project cards for **VaultX**, **CampusXConnect**, and **HR & Work Management System** with interactive preview modals.
- **Services Section**: 6 distinct service cards tailored for web development client offerings.
- **Why Work With Me**: Factual, honest developer principles without fake metrics.
- **Structured 4-Step Process**: Understand → Plan → Build → Deliver.
- **Subtle Fiverr Integration**: Clean call-to-action to book web development gigs on Fiverr.
- **Validated Contact Form**: Client-side validation with instant `mailto:` link generator and draft copy fallback.
- **SEO & Performance Ready**: Includes `robots.txt`, dynamic `sitemap.xml`, OpenGraph tags, and semantic HTML5 hierarchy.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Vanilla CSS Variables
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono (via `next/font/google`)
- **Hosting**: Vercel Free Tier compatible (Zero paid APIs/services)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📝 How to Update & Customize

All portfolio content, URLs, projects, skills, and personal information are centralized in **one single file**:

📁 `src/data/portfolioData.ts`

- **Personal Details & Social Links**: Update `personal.name`, `personal.email`, `personal.socials` (GitHub, LinkedIn, Fiverr).
- **Projects**: Add, remove, or modify project titles, descriptions, feature bullet points, and repository URLs.
- **Skills**: Add or adjust technical skills and categories.
- **Services & Process**: Modify your service offerings and workflow steps.

### Adding Your Profile Photo
1. Save your professional photo as `profile.jpg`.
2. Move it to the `public/` folder (`public/profile.jpg`).
3. Reload the page — it will automatically display your photo!

---

## 🌐 Deploy to Vercel (Free)

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for Hapinayan portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-portfolio-repo.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Next.js is automatically detected — click **"Deploy"**.
5. Your portfolio is live with free HTTPS and automatic CI/CD!

---

## 📄 License
© 2026 Hapinayan. All rights reserved.
