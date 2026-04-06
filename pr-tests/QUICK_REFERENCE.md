# 5-PR AI Comparison Test - Quick Reference

## 🎯 Overview

Testing **Greptile** vs **CodeRabbit** with 5 comprehensive PRs covering 100 intentional bugs.

---

## 📋 PR Summary

| PR | File | Category | Bug Count | Severity | Branch |
|----|------|----------|-----------|----------|--------|
| **#1** | `PR1_SECURITY_ISSUES.js` | 🔴 Security | 15 | Critical | `pr-1-security` |
| **#2** | `PR2_RUNTIME_ERRORS.js` | 🔴 Runtime | 20 | High | `pr-2-runtime` |
| **#3** | `PR3_CODE_QUALITY.js` | 🟡 Quality | 20 | Low/Med | `pr-3-quality` |
| **#4** | `PR4_PERFORMANCE_ISSUES.js` | 🟠 Performance | 20 | Medium | `pr-4-performance` |
| **#5** | `PR5_EDGE_CASES.js` | 🟠 Edge Cases | 25 | Medium | `pr-5-edgecases` |

---

## 🚀 Quick Start Commands

### Create All 5 PRs:

```bash
# PR #1: Security Issues
git checkout -b pr-1-security
git push origin pr-1-security
# Create PR on GitHub

# PR #2: Runtime Errors
git checkout -b pr-2-runtime
git push origin pr-2-runtime
# Create PR on GitHub

# PR #3: Code Quality
git checkout -b pr-3-quality
git push origin pr-3-quality
# Create PR on GitHub

# PR #4: Performance Issues
git checkout -b pr-4-performance
git push origin pr-4-performance
# Create PR on GitHub

# PR #5: Edge Cases
git checkout -b pr-5-edgecases
git push origin pr-5-edgecases
# Create PR on GitHub
```

---

## 📊 What Each PR Tests

### PR #1: Critical Security Issues (15 bugs)
- Hardcoded API keys & credentials
- SQL injection vulnerabilities
- XSS (Cross-Site Scripting)
- Insecure random generation
- MD5 password hashing
- eval() usage
- Path traversal
- Sensitive data in URLs
- Missing rate limiting
- Exposed error messages
- Insecure session management
- CORS misconfiguration

**Expected:** Both tools should catch most security issues

---

### PR #2: Runtime Errors (20 bugs)
- Division by zero
- Null reference errors
- Undefined variables
- Array index out of bounds
- Type coercion issues
- Infinite loops
- Missing error handling
- Wrong logical operators
- Off-by-one errors
- Missing return statements
- Incorrect formulas
- Promise without error handling
- Callback hell
- Race conditions
- Memory leaks
- Blocking operations

**Expected:** Good test of error detection capabilities

---

### PR #3: Code Quality (20 bugs)
- Missing JSDoc documentation
- Unused variables
- Console.log statements
- Magic numbers
- Inconsistent naming
- Long functions
- Duplicate code
- Unused parameters
- Deep nesting
- Boolean confusion
- Commented out code
- Large parameter lists
- Missing error messages
- Poor variable names
- Redundant code

**Expected:** Both tools should catch most style issues

---

### PR #4: Performance Issues (20 bugs)
- N+1 query problems
- Inefficient loops (O(n²))
- Repeated DOM manipulation
- Synchronous operations in loops
- Unnecessary recalculations
- String concatenation in loops
- Creating objects inside loops
- Not using array methods
- Blocking main thread
- Inefficient algorithms
- Missing memoization
- Unnecessary database queries
- Not using caching
- Memory leaks
- Not debouncing input

**Expected:** Test of performance analysis capabilities

---

### PR #5: Edge Cases (25 bugs)
- Empty array handling
- Null/undefined handling
- String edge cases
- Number edge cases (NaN, Infinity)
- Array method edge cases
- Object property access
- Date edge cases
- Promise chain error handling
- Input validation
- File path validation
- Boundary conditions
- Type coercion issues
- Missing default values
- Regex edge cases
- JSON parsing edge cases
- Floating point precision
- Timeout/retry issues
- Race conditions
- Memory limits
- Network error recovery

**Expected:** Test of thoroughness and edge case detection

---

## 📈 Scoring System

### Per Bug (100 points total):
- **Detection (40):** Caught = 40, Missed = 0
- **Quality (30):** Excellent = 30, Good = 20, Fair = 10, Poor = 5
- **Actionability (20):** Yes = 20, No = 0
- **Speed (10):** Fast = 10, Medium = 5, Slow = 2

### Category Winners:
- Security: TBD
- Runtime: TBD
- Quality: TBD
- Performance: TBD
- Edge Cases: TBD

---

## 🎯 Documenting Results

For each PR, fill in:

1. **Detection Count:** How many bugs did each tool catch?
2. **Quality Rating:** How helpful was the feedback? (1-5 stars)
3. **Actionability:** Could you easily fix based on feedback?
4. **False Positives:** Did either tool flag non-issues?
5. **Surprises:** What did one catch that the other missed?

### Example Entry:

```markdown
#### Bug #1: Hardcoded API Keys (Line 11)
**Severity:** Critical

| Tool | Detected? | Quality | Actionable | Notes |
|------|-----------|---------|------------|-------|
| Greptile | ✅ Yes | ⭐⭐⭐⭐⭐ (5/5) | ✅ Yes | Excellent explanation with security context |
| CodeRabbit | ✅ Yes | ⭐⭐⭐⭐ (4/5) | ✅ Yes | Clear but less detailed |

**Winner:** Greptile (more detailed security context)
```

---

## 🏆 Final Comparison

After all 5 PRs are reviewed, you'll have:

### Detection Rates:
- Greptile: X/100 bugs (X%)
- CodeRabbit: X/100 bugs (X%)

### Quality Scores:
- Greptile: X/100
- CodeRabbit: X/100

### Category Breakdown:
| Category | Greptile | CodeRabbit | Winner |
|----------|----------|------------|--------|
| Security | X/15 | X/15 | TBD |
| Runtime | X/20 | X/20 | TBD |
| Quality | X/20 | X/20 | TBD |
| Performance | X/20 | X/20 | TBD |
| Edge Cases | X/25 | X/25 | TBD |

---

## 📝 PR Creation Template

Use this description for all PRs:

```markdown
## AI Code Review Comparison: [PR Name]

This PR tests Greptile and CodeRabbit's ability to detect [category] issues.

### Test Suite:
- **File:** `pr-tests/[filename]`
- **Bug Count:** [X] intentional bugs
- **Severity:** [Critical/High/Medium/Low]
- **Category:** [Category Name]

### Expected Testing:
✅ Detection accuracy for [specific issues]
✅ Feedback quality and actionability
✅ False positive analysis
✅ Comparison with other tool

### Documentation:
Results will be captured in `pr-tests/RESULTS_TEMPLATE.md`

---
**Tools Being Tested:**
- 🤖 Greptile: https://greptile.com
- 🐰 CodeRabbit: https://coderabbit.ai
```

---

## 🔗 Quick Links

- **Main Results:** `pr-tests/RESULTS_TEMPLATE.md`
- **Test Files:** `pr-tests/` directory
- **Repository:** https://github.com/akshayiic/test-repo

---

## ⚡ Workflow

1. ✅ Create branch for PR
2. ✅ Push to GitHub
3. ✅ Create PR with template
4. ✅ Wait for both tools to review
5. ✅ Document results in RESULTS_TEMPLATE.md
6. ✅ Repeat for all 5 PRs
7. ✅ Calculate final scores
8. ✅ Declare winner

---

**Ready to start?** Begin with PR #1! 🚀
