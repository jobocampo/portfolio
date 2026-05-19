# Portfolio deployment helper — Job Philipo Ochuma
# Run in PowerShell from C:\Users\USER\portfolio

$ErrorActionPreference = "Stop"
$git = "C:\Program Files\Git\bin\git.exe"

if (-not (Test-Path $git)) {
    $git = (Get-Command git -ErrorAction SilentlyContinue).Source
}

Write-Host "`n=== Portfolio Deploy Helper ===" -ForegroundColor Cyan

# Step 1: Git
if (-not $git) {
    Write-Host "Git not found. Install from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Then re-run this script.`n"
    exit 1
}

Set-Location $PSScriptRoot

if (-not (Test-Path ".git")) {
    & $git init
    & $git add .
    & $git commit -m "Deploy: Job Philipo Ochuma portfolio"
    Write-Host "Git repo initialized and committed." -ForegroundColor Green
} else {
    & $git add .
    & $git commit -m "Update portfolio" 2>$null
    Write-Host "Changes committed." -ForegroundColor Green
}

Write-Host @"

NEXT STEPS (do these in your browser):

1. GITHUB
   - Go to https://github.com/new
   - Repository name: portfolio-website
   - Create repository (do NOT add README)
   - Run these commands (replace YOUR-REPO if different):

     cd C:\Users\USER\portfolio
     git remote add origin https://github.com/jobphilipo/portfolio-website.git
     git branch -M main
     git push -u origin main

2. RENDER (backend)
   - https://dashboard.render.com → New → Web Service
   - Connect GitHub repo → Root Directory: backend
   - Build: npm install | Start: npm start
   - Copy your URL (e.g. https://jobphilipo-portfolio-api.onrender.com)

3. VERCEL (frontend)
   - https://vercel.com/new → Import GitHub repo
   - Root Directory: frontend
   - Environment: VITE_API_URL = (your Render URL, no trailing slash)
   - Deploy

4. LINK THEM
   - Render → Environment → FRONTEND_URL = your Vercel URL
   - Redeploy both if needed

"@ -ForegroundColor White
