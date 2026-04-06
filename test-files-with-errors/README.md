# AI Code Review Tool Comparison Test

This repository is designed to compare **Greptile** and **CodeRabbit** AI code review tools by testing their ability to detect intentional bugs and code quality issues.

## 🎯 Purpose

To evaluate and compare:
- **Detection accuracy** - How many bugs each tool catches
- **Feedback quality** - How helpful and detailed the feedback is
- **Actionability** - How easy it is to understand and fix issues
- **False positives** - How often tools flag non-issues
- **Category strength** - Which types of bugs each tool excels at

## 📁 Test Files

### `synthetic-bugs.js`
Contains **20 intentional bugs** across multiple categories:

| Bug # | Type | Severity | Line |
|-------|------|----------|------|
| 1 | Missing JSDoc | 🟡 Low | 11 |
| 2 | Missing Error Handling | 🟠 Medium | 18 |
| 3 | Missing Input Validation | 🟠 Medium | 25 |
| 4 | Unsafe JSON Parsing | 🟠 Medium | 33 |
| 5 | Unused Variable | 🟡 Low | 42 |
| 6 | Null Reference Risk | 🟠 Medium | 56 |
| 7 | Infinite Loop Risk | 🔴 High | 64 |
| 8 | Missing Return Statement | 🟠 Medium | 73 |
| 9 | Wrong Logical Operator | 🟠 Medium | 82 |
| 10 | Hardcoded Credentials | 🔴 Critical | 91 |
| 11 | Unused Parameters | 🟡 Low | 98 |
| 12 | Inconsistent Error Handling | 🟠 Medium | 105 |
| 13 | Missing Type Checking | 🟡 Low | 115 |
| 14 | Complex Function | 🟡 Low | 121 |
| 15 | Edge Case Not Handled | 🟠 Medium | 147 |
| 16 | SQL Injection | 🔴 Critical | 156 |
| 17 | Missing Default Case | 🟡 Low | 163 |
| 18 | Console in Production | 🟡 Low | 175 |
| 19 | Bad Async Pattern | 🟡 Low | 183 |
| 20 | Unused Import | 🟡 Low | 190 |

## 🚀 How to Use This Repository

### Step 1: Install Both Tools
```bash
# Install CodeRabbit
# Visit: https://github.com/marketplace/coderabbit

# Install Greptile
# Visit: https://greptile.com
```

### Step 2: Connect to Your Repository
Both tools need access to your GitHub repository:
- Add them as GitHub Apps
- Select this repository
- Configure settings

### Step 3: Create Test PR
```bash
git checkout -b test/ai-comparison
git add test-files-with-errors/
git commit -m "Test: Add synthetic bugs for AI comparison"
git push origin test/ai-comparison
```

### Step 4: Create Pull Request
1. Go to GitHub and create PR from `test/ai-comparison`
2. Wait for both tools to review
3. Document their feedback in `COMPARISON_TEMPLATE.md`

### Step 5: Fill Comparison Template
1. Open `COMPARISON_TEMPLATE.md`
2. For each bug (1-20), document:
   - Did Greptile catch it? (Yes/No)
   - Did CodeRabbit catch it? (Yes/No)
   - Quality of feedback (Excellent/Good/Fair/Poor)
   - Paste exact feedback from each tool
   - Declare winner for that bug

### Step 6: Calculate Scores
Fill in the summary tables:
- Overall detection rate
- Category-based analysis
- Total score out of 100

## 📊 Bug Categories

### 🔴 Critical (Security Issues)
- Hardcoded credentials
- SQL injection
- XSS vulnerabilities

### 🟠 High (Runtime Errors)
- Missing error handling
- Null reference risks
- Infinite loops

### 🟡 Medium (Code Quality)
- Missing documentation
- Unused variables
- Code smells
- Edge cases

### 🟢 Low (Style)
- Console statements
- Import organization
- Formatting

## 🎯 Evaluation Criteria

### Detection Accuracy (40%)
- How many bugs does the tool catch?
- Does it catch critical security issues?
- Does it detect subtle logic errors?

### Feedback Quality (30%)
- Is the feedback clear and specific?
- Does it explain *why* it's a problem?
- Does it provide code examples for fixes?
- Is the context helpful?

### Actionability (20%)
- Can you easily understand what to fix?
- Are the fixes straightforward?
- Does it prioritize issues by severity?

### Speed/Efficiency (10%)
- How fast does the review complete?
- Is the integration seamless?
- Does it support your workflow?

## 📋 Expected Results

### What Both Tools SHOULD Catch:
✅ Missing JSDoc documentation
✅ Hardcoded credentials
✅ SQL injection vulnerabilities
✅ Missing error handling
✅ Unused variables
✅ Unsafe JSON parsing

### What Tools MAY Catch:
⚠️ Null reference risks
⚠️ Complex functions
⚠️ Wrong logical operators
⚠️ Missing edge cases

### What Tools Might MISS:
❌ Infinite loop risks (hard to detect statically)
❌ Bad async patterns
❌ Some logic errors

## 📈 Scoring System

### Per Bug (100 points each category):
- **Detection (40):** 40 if caught, 0 if missed
- **Quality (30):** Excellent=30, Good=20, Fair=10, Poor=5
- **Actionability (20):** Yes=20, No=0
- **Speed (10):** Fast=10, Medium=5, Slow=2

### Total Score:
- Sum of all categories
- Maximum: 100 points per tool
- Percentage indicates overall effectiveness

## 🎓 Learning Outcomes

This test will help you understand:
1. **Which tool is better for your use case**
2. **What types of bugs each tool excels at**
3. **How actionable the feedback is**
4. **False positive rates**
5. **Integration and workflow fit**
6. **Cost-effectiveness**

## 🤝 Contributing

Feel free to:
- Add more test cases
- Suggest new bug categories
- Improve the template
- Share your results

## 📞 Support

- **Greptile:** https://greptile.com
- **CodeRabbit:** https://coderabbit.ai

## 📄 License

MIT License - Feel free to use this for testing and comparison

---

**Happy Testing!** 🚀

Remember: The goal is not to find a "perfect" tool, but to understand which tool works best for YOUR specific needs and workflow.
