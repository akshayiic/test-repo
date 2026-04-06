# 🚀 Connect to GitHub - Step by Step

## Step 1: Check if you already have a GitHub repo

If you already created a repo on GitHub.com (like `coderabbit-test-repo`), skip to **Step 2**.

If you need to create one:

### Option A: Create on GitHub.com
1. Go to https://github.com/new
2. Repository name: `coderabbit-test-repo`
3. Make it **Public** (required for CodeRabbit free tier)
4. **DON'T** initialize with README
5. Click "Create repository"

### Option B: Install GitHub CLI (Recommended)
```bash
# Download from: https://cli.github.com/
# Or use winget on Windows:
winget install GitHub.cli
```

Then run:
```bash
gh auth login
gh repo create coderabbit-test-repo --public --source=. --push
```

## Step 2: Connect your local repo to GitHub

Replace `YOUR_USERNAME` with your GitHub username:

```bash
cd C:\Users\aksha\Documents\coderabbit-test-repo

git remote add origin https://github.com/YOUR_USERNAME/coderabbit-test-repo.git

git branch -M main

git push -u origin main
```

**Example:** If your username is `akshay`:
```bash
git remote add origin https://github.com/akshay/coderabbit-test-repo.git
```

## Step 3: Verify connection

```bash
git remote -v
```

You should see:
```
origin  https://github.com/YOUR_USERNAME/coderabbit-test-repo.git (fetch)
origin  https://github.com/YOUR_USERNAME/coderabbit-test-repo.git (push)
```

## Step 4: Install CodeRabbit

1. Go to: **https://github.com/marketplace/coderabbit**
2. Click **"Install"**
3. Select **"All repositories"** or just **"coderabbit-test-repo"**
4. Click **"Install"**

## Step 5: Create your first test issue

Since GitHub CLI (`gh`) is not installed, create issues manually:

1. Go to your repo on GitHub
2. Click **"Issues"** tab
3. Click **"New Issue"**
4. Use the template **"[TEST] CodeRabbit Test Issue"**
5. Fill in the details (copy from ISSUES.md)

Or create your first test issue with this title:
```
[Test] Basic Code Review - Missing Documentation
```

And description:
```markdown
## What to Test
- [x] Basic code review (missing documentation)

## Steps
1. Create branch: `test/basic-review`
2. Add function without JSDoc to `src/calculator.js`
3. Create PR and wait for CodeRabbit review

## Expected CodeRabbit Feedback
- ⚠️ Missing JSDoc documentation
- 💡 Suggestion to add parameter descriptions
```

## Troubleshooting

### "remote origin already exists"
```bash
git remote remove origin
# Then try adding it again
```

### "Authentication failed"
- Use a **Personal Access Token** instead of password:
  1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  2. Generate new token with `repo` permissions
  3. Use token as password when pushing

### "Can't push to GitHub"
- Make sure the repo is **Public** (not Private)
- Check you have write permissions

## Quick Test (After Setup)

```bash
# Create first test branch
git checkout -b test/basic-review

# Make a simple change
echo "" >> src/calculator.js
echo "// Missing JSDoc - test CodeRabbit" >> src/calculator.js
echo "function squareRoot(n) { return Math.sqrt(n); }" >> src/calculator.js

# Update exports in calculator.js (add this to module.exports)
# Add: squareRoot

git add .
git commit -m "Test: Add function without JSDoc"
git push origin test/basic-review
```

Then create PR on GitHub and wait for CodeRabbit! 🎉

---

**Need help?** Check `QUICK_START.md` for more details!
