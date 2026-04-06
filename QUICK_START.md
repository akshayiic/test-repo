# Quick Start Guide - CodeRabbit Testing

## Step 1: Create GitHub Repository (5 minutes)

### Option A: Using GitHub CLI (Recommended)

```bash
# Install GitHub CLI first if needed
# Then run:
gh repo create coderabbit-test-repo --public --source=. --push
```

### Option B: Manual Setup

```bash
# 1. Go to https://github.com/new
# 2. Create a new repository (don't initialize with README)
# 3. Run these commands:

git remote add origin https://github.com/YOUR_USERNAME/coderabbit-test-repo.git
git branch -M main
git push -u origin main
```

## Step 2: Install CodeRabbit (2 minutes)

1. Go to: https://github.com/marketplace/coderabbit
2. Click **"Install"**
3. Select your repository
4. Configure settings (or use defaults)

## Step 3: Create Your First Test Issue (3 minutes)

```bash
# Create first test branch
git checkout -b test/basic-review

# Make a simple change (add function without JSDoc)
# Edit src/calculator.js and add:
function squareRoot(n) {
    return Math.sqrt(n);
}

# Commit and push
git add .
git commit -m "Add square root function"
git push origin test/basic-review
```

## Step 4: Create Pull Request (2 minutes)

1. Go to your repository on GitHub
2. You'll see a banner to create a PR
3. Click **"Compare & pull request"**
4. Give it a title: "Test: Basic Code Review"
5. Click **"Create pull request"**

## Step 5: Wait for CodeRabbit Review (1-5 minutes)

CodeRabbit will automatically:
- 🤖 Review your code
- 💬 Add comments to your PR
- 📊 Provide summary of findings
- ✅ Approve or request changes

## Step 6: Review Results

Check the PR for:
- Code review comments
- Security suggestions
- Performance tips
- Best practices feedback
- Test coverage insights

## Testing Checklist

Use `ISSUES.md` for comprehensive testing scenarios:

- [ ] **Issue #1**: Basic code review (missing JSDoc)
- [ ] **Issue #2**: Error handling (division by zero)
- [ ] **Issue #3**: Unused variables
- [ ] **Issue #4**: Safe JSON parsing
- [ ] **Issue #5**: Function complexity
- [ ] **Issue #6**: Test coverage
- [ ] **Issue #7**: Performance optimization
- [ ] **Issue #8**: Full integration test
- [ ] **Issue #9**: Documentation

## What to Expect

### CodeRabbit WILL Catch:
- ✅ Missing documentation
- ✅ Security vulnerabilities
- ✅ Error handling gaps
- ✅ Unused variables
- ✅ Code smells
- ✅ Best practices violations

### CodeRabbit MAY Suggest:
- 💡 Performance improvements
- 💡 Code refactoring
- 💡 Additional test cases
- 💡 Modern JavaScript features
- 💡 Better naming conventions

### Tips for Better Testing:

1. **Start Simple**: Test one feature at a time
2. **Read Reviews Carefully**: CodeRabbit's comments are educational
3. **Iterate**: Fix issues and update PR to see new feedback
4. **Compare**: Try similar code changes to see consistency
5. **Document**: Note what CodeRabbit catches vs misses

## Troubleshooting

### CodeRabbit not reviewing?
- Check if it's installed on your repository
- Verify webhook is configured
- Check GitHub Actions logs

### No feedback on simple changes?
- Some simple changes may not trigger reviews
- Try more complex code with intentional issues

### Want to skip CodeRabbit?
- Add `[skip coderabbit]` to commit message
- Or add `coderabbit:skip` label to PR

## Need Help?

- CodeRabbit Docs: https://coderabbit.ai/docs
- GitHub Issues: https://github.com/features/issues
- Support: support@coderabbit.ai

---

**Ready to start?** Begin with Step 1 above! 🚀
