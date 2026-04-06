# 🚀 Quick Start: Greptile vs CodeRabbit Comparison

## 📋 What You Need to Do

### Step 1: Push to GitHub (2 minutes)
```bash
cd C:\Users\aksha\Documents\coderabbit-test-repo
git add test-files-with-errors/ COMPARISON_TEMPLATE.md
git commit -m "Add AI comparison test suite"
git push origin test
```

### Step 2: Install Both Tools
- **CodeRabbit:** https://github.com/marketplace/coderabbit
- **Greptile:** https://greptile.com

Add both to your GitHub repository.

### Step 3: Create Test PR
```bash
git checkout -b test/ai-comparison
git push origin test/ai-comparison
```

### Step 4: Create Pull Request on GitHub
1. Go to your repo
2. Create PR from `test/ai-comparison` branch
3. Wait for both tools to review

### Step 5: Document Results
Open `COMPARISON_TEMPLATE.md` and fill in:
- ✅ Did each tool catch the bug?
- 📝 Paste their exact feedback
- ⭐ Rate feedback quality
- 🏆 Declare winner for each bug

---

## 📊 What's Being Tested

**20 Intentional Bugs:**
- 🔴 2 Critical (Security: credentials, SQL injection)
- 🟠 8 High (Error handling, null risks, infinite loops)
- 🟡 10 Medium/Low (Code quality, unused variables, documentation)

---

## 🎯 Categories Tested

| Category | Bug Count | Expected Detection |
|----------|-----------|-------------------|
| Documentation | 1 | Both tools |
| Error Handling | 3 | Both tools |
| Security | 2 | Both tools |
| Code Quality | 8 | Both tools |
| Logic Errors | 3 | Variable |
| Edge Cases | 3 | Variable |

---

## 📈 Final Score

After testing, you'll have:

### Detection Rate
- Greptile: X/20 bugs caught (X%)
- CodeRabbit: X/20 bugs caught (X%)

### Overall Score (out of 100)
- Greptile: X/100
- CodeRabbit: X/100

### Winner by Category
- Documentation: [Greptile/CodeRabbit/Tie]
- Error Handling: [Greptile/CodeRabbit/Tie]
- Security: [Greptile/CodeRabbit/Tie]
- Code Quality: [Greptile/CodeRabbit/Tie]

---

## 📝 Example: How to Fill Template

For Bug #1 (Missing JSDoc):

```markdown
### Bug #1: Missing JSDoc Documentation

| Tool | Detected? | Feedback Quality | Actionable |
|------|-----------|------------------|------------|
| Greptile | ✅ Yes | ⭐⭐⭐⭐⭐ Excellent | ✅ Yes |
| CodeRabbit | ✅ Yes | ⭐⭐⭐⭐ Good | ✅ Yes |

**Greptile Feedback:**
"Function `calculateCircleArea` is missing JSDoc documentation.
Consider adding:
```javascript
/**
 * Calculate the area of a circle
 * @param {number} radius - The radius of the circle
 * @returns {number} The area of the circle
 */
```"

**CodeRabbit Feedback:**
"src/calculator.js (2): Add JSDoc documentation for consistency
with other functions in this module."

**Winner:** Greptile (more detailed, provided example)
```

---

## 🎓 What You'll Learn

1. **Which tool catches more bugs** (detection rate)
2. **Which gives better feedback** (quality score)
3. **Which is more actionable** (ease of fixing)
4. **Which excels at specific categories** (strengths analysis)
5. **Which has fewer false positives** (accuracy)
6. **Which fits your workflow better** (integration)

---

## 🤔 After Testing

### Choose Greptile if:
- Better at catching security issues
- More detailed code explanations
- Better for complex codebases

### Choose CodeRabbit if:
- Better documentation checks
- More concise feedback
- Better for quick reviews

### Use Both if:
- Budget allows
- Want maximum coverage
- Different tools for different repos

---

## 📞 Need Help?

- **Greptile Docs:** https://greptile.com/docs
- **CodeRabbit Docs:** https://coderabbit.ai/docs
- **This Repo:** https://github.com/akshayiic/test-repo

---

**Ready to start?** Follow Step 1 above! 🚀
