# GitHub Pages Deployment Guide

This document explains how this project is set up for deployment to GitHub Pages and how to deploy it.

---

## 📋 Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│  Your Repo: pixel-perfect-replication                            │
├─────────────────────────────────────────────────────────────────┤
│  Source Code (src/)                                              │
│    ├── React components, pages, styles                           │
│    └── Built by Vite → outputs to dist/                          │
├─────────────────────────────────────────────────────────────────┤
│  GitHub Actions (.github/workflows/deploy.yml)                    │
│    ├── Trigger: Push to main branch                              │
│    ├── Build: npm run build                                      │
│    ├── SPA fix: Copy index.html → 404.html                       │
│    └── Deploy: Upload dist/ to GitHub Pages                      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Live Site: https://YOUR_USERNAME.github.io/pixel-perfect-replication/ │
└─────────────────────────────────────────────────────────────────┘
```

---

## ✅ What's Already Configured

| Component | Configuration | Purpose |
|-----------|---------------|---------|
| **vite.config.ts** | `base: '/pixel-perfect-replication/'` | Tells Vite to use the repo name as the URL base path |
| **App.tsx** | `BrowserRouter basename="/pixel-perfect-replication"` | React Router knows the app lives under that path |
| **deploy.yml** | GitHub Actions workflow | Builds on every push to `main` and deploys to Pages |
| **404.html** | Copied from index.html at build time | Enables SPA routing (direct links & refreshes work) |

---

## 🚀 How to Deploy (Step-by-Step)

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/pixel-perfect-replication`
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Leave the rest as default—the workflow handles the rest

### Step 2: Push Your Code

```bash
# Ensure you're on main branch
git checkout main

# Add all changes (if any)
git add .
git commit -m "Configure for GitHub Pages deployment"

# Push to GitHub
git push origin main
```

### Step 3: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run: **"Deploy to GitHub Pages"**
3. Wait for it to complete (usually 1–2 minutes)
4. Once it shows a green checkmark, your site is live

### Step 4: View Your Site

Your site will be available at:

```
https://YOUR_USERNAME.github.io/pixel-perfect-replication/
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## 🔄 How Deployments Work

1. **On every push to `main`**, GitHub Actions runs the workflow.
2. The workflow:
   - Checks out the code
   - Installs dependencies (`npm install`)
   - Builds the project (`npm run build`) → creates `dist/` folder
   - Copies `index.html` to `404.html` (for SPA routing)
   - Uploads the `dist/` folder to GitHub Pages
3. GitHub Pages serves the static files from `dist/` at your site URL.

---

## 🧪 Test Locally Before Pushing

To simulate the production build locally:

```bash
# Install dependencies (if not done)
npm install

# Build for production
npm run build

# Preview the production build
npm run preview
```

Then open `http://localhost:4173/pixel-perfect-replication/` (or the URL shown in the terminal).

---

## ⚠️ Important Notes

- **Repository name**: The `base` path in `vite.config.ts` and `basename` in `App.tsx` must match your repository name. If you rename the repo, update both.
- **Custom domain**: To use a custom domain (e.g. `www.yoursite.com`), you’d need to change `base` to `'/'` and update `basename` accordingly.
- **Manual trigger**: You can also run the workflow manually from **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

---

## 📁 Project Structure (Relevant for Deployment)

```
pixel-perfect-replication/
├── .github/
│   └── workflows/
│       └── deploy.yml      ← GitHub Actions deployment workflow
├── src/                    ← Your React source code
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   ├── pages/
│   └── ...
├── public/                 ← Static assets (copied to dist as-is)
├── index.html              ← Entry HTML (processed by Vite)
├── vite.config.ts          ← Vite config (includes base path)
├── package.json
└── DEPLOYMENT.md           ← This file
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Site shows 404 | Ensure GitHub Pages is set to **GitHub Actions** (not "Deploy from a branch") |
| Blank page / broken assets | Check that `base` in vite.config.ts matches your repo name exactly |
| Routing doesn't work on refresh | The 404.html copy step should fix this; verify it's in the workflow |
| Build fails in Actions | Check the Actions logs; often `npm install` or `npm run build` errors |

---

## Summary

Your project is already configured for GitHub Pages. To deploy:

1. Enable **GitHub Actions** as the Pages source in repo Settings → Pages.
2. Push to `main`.
3. Open `https://YOUR_USERNAME.github.io/pixel-perfect-replication/` once the workflow finishes.
