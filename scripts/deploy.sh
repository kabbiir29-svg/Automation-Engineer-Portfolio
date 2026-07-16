#!/bin/bash

# Portfolio Deployment Script (Bash/Linux/Mac version)
# This script builds and deploys to Vercel without requiring login each time

echo "🚀 Starting Portfolio Deployment..."

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  You have uncommitted changes. Please commit first:"
    git status --porcelain
    exit 1
fi

echo "✓ All changes committed"

# Build the project
echo ""
echo "📦 Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi
echo "✓ Build successful"

# Deploy to Vercel
echo ""
echo "🌐 Deploying to Vercel..."
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
vercel deploy --prod --cwd "$SCRIPT_DIR/.."

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo "🌍 Live at: https://kabirsharma.mspautomation.net"
else
    echo ""
    echo "❌ Deployment failed!"
    exit 1
fi
