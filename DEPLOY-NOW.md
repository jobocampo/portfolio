# Deploy Now — Job Philipo Ochuma

Follow these steps in order. Total time: ~20 minutes.

---

## Part A: Put code on GitHub

### Option 1 — Upload ZIP (easiest, no Git needed)

1. On your Desktop, open **`portfolio-deploy.zip`** (created for you).
2. Go to **https://github.com/new**
3. Repository name: **`portfolio-website`**
4. Set to **Public** → **Create repository**
5. Click **“uploading an existing file”**
6. Drag **all files and folders** from inside the unzipped folder into GitHub.
7. Click **Commit changes**

### Option 2 — Git (if installed)

```powershell
cd C:\Users\USER\portfolio
git init
git add .
git commit -m "Portfolio for Cloud Computing assignment"
git branch -M main
git remote add origin https://github.com/jobphilipo/portfolio-website.git
git push -u origin main
```

---

## Part B: Deploy backend on Render

1. Sign in: **https://dashboard.render.com**
2. Click **New +** → **Web Service**
3. Connect **GitHub** and select **`portfolio-website`**
4. Use these settings:

| Setting | Value |
|---------|--------|
| Name | `jobphilipo-portfolio-api` |
| Root Directory | `backend` |
| Runtime | Node |
| Build Command | `npm install` |
| Start Command | `npm start` |
| Instance Type | Free |

5. Click **Create Web Service** and wait until status is **Live**
6. Copy your URL, e.g. `https://jobphilipo-portfolio-api.onrender.com`
7. Test in browser: `https://YOUR-URL.onrender.com/api/health`  
   You should see: `{"status":"ok",...}`

---

## Part C: Deploy frontend on Vercel

1. Sign in: **https://vercel.com**
2. **Add New…** → **Project** → import **`portfolio-website`** from GitHub
3. Settings:

| Setting | Value |
|---------|--------|
| Framework Preset | Vite |
| Root Directory | `frontend` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

4. Expand **Environment Variables** and add:

| Name | Value |
|------|--------|
| `VITE_API_URL` | Your Render URL (example: `https://jobphilipo-portfolio-api.onrender.com`) |

   No trailing slash.

5. Click **Deploy** and wait for **Ready**
6. Copy your Vercel URL, e.g. `https://portfolio-website.vercel.app`

---

## Part D: Connect frontend ↔ backend

1. **Render** → your web service → **Environment**
2. Add variable:

| Key | Value |
|-----|--------|
| `FRONTEND_URL` | Your full Vercel URL |

3. Save (Render redeploys automatically)
4. **Vercel** → **Deployments** → **⋯** → **Redeploy** (so build picks up API URL)

---

## Part E: Final test

Open your **Vercel URL** and check:

- [ ] Profile shows **Job Philipo Ochuma**
- [ ] Skills, Qualifications, Projects sections load
- [ ] Contact form sends (success message appears)

---

## Submit to lecturer

| Item | Your URL |
|------|----------|
| Frontend (Vercel) | `https://________________.vercel.app` |
| Backend (Render) | `https://________________.onrender.com` |

---

## Troubleshooting

**“Could not load portfolio” on Vercel**  
→ Check `VITE_API_URL` in Vercel env vars matches your Render URL exactly.

**Render service sleeping**  
→ Free tier sleeps after inactivity; first visit may take 30–60 seconds.

**CORS errors**  
→ Set `FRONTEND_URL` on Render to your exact Vercel URL (including `https://`).
