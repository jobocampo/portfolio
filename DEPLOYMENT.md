# Deployment Guide — Job Philipo Ochuma

Follow these steps to complete **Assignment 1** (frontend on Vercel, backend on Render).

## Step 1: Push to GitHub

1. Install [Git](https://git-scm.com/download/win) if needed.
2. Create a new repository on GitHub (e.g. `portfolio-website`).
3. In PowerShell:

```powershell
cd C:\Users\USER\portfolio
git init
git add .
git commit -m "Complete personal portfolio for Cloud Computing assignment"
git branch -M main
git remote add origin https://github.com/jobphilipo/YOUR-REPO-NAME.git
git push -u origin main
```

## Step 2: Deploy backend on Render

1. Sign in at [render.com](https://render.com).
2. **New +** → **Web Service** → connect your GitHub repo.
3. Settings:
   - **Name:** `jobphilipo-portfolio-api`
   - **Root Directory:** `backend`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. **Environment Variables:**
   - `FRONTEND_URL` = leave empty for now; add your Vercel URL after Step 3
5. Click **Create Web Service** and wait for deploy.
6. Copy your live URL, e.g. `https://jobphilipo-portfolio-api.onrender.com`

Test: open `https://YOUR-RENDER-URL.onrender.com/api/health` — you should see `{"status":"ok",...}`.

## Step 3: Deploy frontend on Vercel

1. Sign in at [vercel.com](https://vercel.com).
2. **Add New Project** → import the same GitHub repo.
3. Settings:
   - **Root Directory:** `frontend`
   - **Framework Preset:** Vite
4. **Environment Variables:**
   - `VITE_API_URL` = your Render URL (no trailing slash)
5. Deploy and copy your Vercel URL, e.g. `https://jobphilipo-portfolio.vercel.app`

## Step 4: Link frontend and backend

1. In **Render** → your service → **Environment** → set:
   - `FRONTEND_URL` = your Vercel URL
2. Save (Render will redeploy automatically).
3. In **Vercel** → **Settings** → **Environment Variables** → confirm `VITE_API_URL` is set → **Redeploy** if you changed it.

## Step 5: Verify before submission

- [ ] All 5 sections visible on the live site
- [ ] Contact form sends successfully (success message appears)
- [ ] `GET /api/health` works on Render
- [ ] Submit both URLs to your lecturer:
  - **Frontend (Vercel):** `https://....vercel.app`
  - **Backend (Render):** `https://....onrender.com`

## Local testing (before deploy)

```powershell
# Terminal 1
cd C:\Users\USER\portfolio\backend
npm install
npm run dev

# Terminal 2
cd C:\Users\USER\portfolio\frontend
npm install
npm run dev
```

Open http://localhost:5173
