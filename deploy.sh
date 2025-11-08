#!/bin/bash

# SOCIRIS Website Deployment Script
# This script helps you quickly deploy your SOCIRIS website to GitHub Pages

echo "🛡️  SOCIRIS Website Deployment"
echo "================================"
echo ""

# Check if we're in the right directory
if [ ! -f "CNAME" ]; then
    echo "❌ Error: CNAME file not found. Are you in the Launchpad directory?"
    echo "Please run: cd ~/SOCIRIS/Launchpad"
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo ""

# Show current files
echo "📄 Files in directory:"
ls -lh
echo ""

# Check if files exist
if [ ! -f "index.html" ]; then
    echo "⚠️  Warning: index.html not found!"
    echo "Please copy the website files to this directory first."
    exit 1
fi

if [ ! -f "style.css" ]; then
    echo "⚠️  Warning: style.css not found!"
    exit 1
fi

if [ ! -f "script.js" ]; then
    echo "⚠️  Warning: script.js not found!"
    exit 1
fi

echo "✅ All required files found!"
echo ""

# Git status
echo "📊 Git Status:"
git status --short
echo ""

# Ask for confirmation
read -p "Do you want to commit and push these changes? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Add all files
    echo "➕ Adding files to git..."
    git add .
    
    # Commit
    echo "💾 Committing changes..."
    read -p "Enter commit message (or press Enter for default): " commit_msg
    
    if [ -z "$commit_msg" ]; then
        commit_msg="Update SOCIRIS website - $(date '+%Y-%m-%d %H:%M')"
    fi
    
    git commit -m "$commit_msg"
    
    # Push
    echo "🚀 Pushing to GitHub..."
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Deployment successful!"
        echo ""
        echo "🌐 Your website will be live at:"
        echo "   https://sociris.com"
        echo ""
        echo "⏳ Note: It may take 1-5 minutes for changes to appear."
        echo "   You can also access it at: https://$(git config user.name).github.io/Launchpad/"
        echo ""
        echo "📊 Check deployment status:"
        echo "   https://github.com/$(git config remote.origin.url | sed 's/.*github.com[:/]\(.*\)\.git/\1/')/deployments"
    else
        echo ""
        echo "❌ Push failed. Please check your git configuration and try again."
        echo ""
        echo "Common issues:"
        echo "  1. Make sure you're authenticated with GitHub"
        echo "  2. Check if you have push access to the repository"
        echo "  3. Verify your remote is set correctly: git remote -v"
    fi
else
    echo ""
    echo "❌ Deployment cancelled."
    echo ""
    echo "To deploy manually:"
    echo "  git add ."
    echo "  git commit -m 'Your message'"
    echo "  git push origin main"
fi

echo ""
echo "================================"
echo "🛡️  SOCIRIS - Securing Pakistan's Future"
