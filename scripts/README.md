# Deployment Scripts

This folder contains scripts for automating the deployment process.

## `deploy.ps1` (PowerShell - Windows)

Automatically builds and deploys to Vercel production.

### Usage:
```powershell
.\scripts\deploy.ps1
```

### What it does:
1. ✅ Checks for uncommitted changes (aborts if found)
2. 📦 Runs `npm run build`
3. 🌐 Deploys to Vercel production
4. 📊 Shows deployment status

### Requirements:
- PowerShell (built-in on Windows)
- Vercel CLI installed globally: `npm install -g vercel`
- Already authenticated with Vercel: `vercel login`

---

## `deploy.sh` (Bash - Linux/Mac)

Same functionality as the PowerShell script but for Bash-based systems.

### Usage:
```bash
bash scripts/deploy.sh
```

---

## Note on Auto-Deployment

**Vercel automatically deploys on every git push** if your repository is connected to your Vercel project and the branch is set to production. Check your Vercel dashboard to verify:

1. Go to your project settings in Vercel
2. Under "Git", confirm GitHub is connected
3. Production branch is set to `main`

If auto-deploy is enabled, you only need to:
```bash
git add .
git commit -m "your message"
git push
```

Vercel will handle the rest automatically! 🚀

---

## Troubleshooting

**"Vercel command not found":**
```bash
npm install -g vercel
```

**"Not authenticated with Vercel":**
```bash
vercel login
```

**"Build failed":**
Check that your local build succeeds first:
```bash
npm run build
```
