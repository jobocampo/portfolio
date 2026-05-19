# Job Philipo Ochuma — Personal Portfolio

**Cloud Computing · Assignment 1** (15 marks)  
Full-stack portfolio: React frontend on **Vercel**, Express API on **Render**.

## Student details

| | |
|---|---|
| **Name** | Job Philipo Ochuma |
| **Location** | Makoka, Dar es Salaam, Tanzania |
| **Program** | BSc Data Science — Eastern Africa Statistical Training Centre |
| **Email** | jobphilipo@gmail.com |

## Assignment requirements

| Requirement | Status |
|-------------|--------|
| Personal profile | Done |
| Skills | Done |
| Qualifications | Done |
| Projects | Done |
| Contact information | Done |
| Frontend on Vercel | Ready to deploy |
| Backend on Render | Ready to deploy |

## Project structure

```
portfolio/
├── frontend/          React + Vite → Vercel
├── backend/           Express API → Render
├── render.yaml        Render config
├── DEPLOYMENT.md      Step-by-step deploy guide
└── README.md
```

## Run locally

**Terminal 1 — API:**
```powershell
cd backend
npm install
npm run dev
```

**Terminal 2 — Website:**
```powershell
cd frontend
npm install
npm run dev
```

- Website: http://localhost:5173  
- API: http://localhost:5000/api/health

## Deploy

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for full Vercel + Render instructions.

Quick summary:
1. Push `portfolio` folder to GitHub (`github.com/jobphilipo`)
2. Deploy `backend/` on Render
3. Deploy `frontend/` on Vercel with `VITE_API_URL` = Render URL
4. Set `FRONTEND_URL` on Render = Vercel URL

## API endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/portfolio` | All portfolio data |
| GET | `/api/profile` | Profile |
| GET | `/api/skills` | Skills |
| GET | `/api/qualifications` | Education |
| GET | `/api/projects` | Projects |
| GET | `/api/contact` | Contact info |
| POST | `/api/contact` | Contact form |

## Edit content

Update **`backend/src/data.js`** (and matching `frontend/src/fallbackData.js` if you change data).
