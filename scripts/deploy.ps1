# Portfolio Deployment Script
# This script builds and deploys to Vercel without requiring login each time

Write-Host "🚀 Starting Portfolio Deployment..." -ForegroundColor Cyan

# Check if there are uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "⚠️  You have uncommitted changes. Please commit first:" -ForegroundColor Yellow
    Write-Host $status
    exit 1
}

Write-Host "✓ All changes committed" -ForegroundColor Green

# Build the project
Write-Host "`n📦 Building project..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Build successful" -ForegroundColor Green

# Deploy to Vercel
Write-Host "`n🌐 Deploying to Vercel..." -ForegroundColor Cyan
vercel deploy --prod --cwd $PSScriptRoot/..
if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Deployment successful!" -ForegroundColor Green
    Write-Host "🌍 Live at: https://kabirsharma.mspautomation.net" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ Deployment failed!" -ForegroundColor Red
    exit 1
}
