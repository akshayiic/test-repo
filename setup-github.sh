#!/bin/bash

# Setup GitHub Repository for CodeRabbit Testing
# This script helps you push your local repo to GitHub

echo "🚀 CodeRabbit Test Repository Setup"
echo "===================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git is not initialized. Run: git init"
    exit 1
fi

# Check if remote exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Git remote 'origin' already configured"
    git remote -v
else
    echo "⚠️  No git remote configured"
    echo ""
    echo "To setup GitHub repository:"
    echo "1. Create a new repository at https://github.com/new"
    echo "2. Run: git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
    echo "3. Run: git branch -M main"
    echo "4. Run: git push -u origin main"
    echo ""
    echo "Replace YOUR_USERNAME and YOUR_REPO_NAME with your details"
fi

echo ""
echo "📋 Next Steps:"
echo "1. Create GitHub repository"
echo "2. Add remote: git remote add origin <your-repo-url>"
echo "3. Push code: git push -u origin main"
echo "4. Install CodeRabbit: https://github.com/marketplace/coderabbit"
echo "5. Start testing with issues in ISSUES.md"
echo ""
echo "✨ Good luck testing CodeRabbit!"
