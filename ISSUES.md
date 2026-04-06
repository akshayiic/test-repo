# Step-by-Step CodeRabbit Testing Issues

Copy these issues to GitHub after setting up your repository.

---

## Issue #1: Setup Repository on GitHub

**Title:** Initial GitHub Repository Setup

**Description:**
- [ ] Create a new GitHub repository
- [ ] Push this code to the repository
- [ ] Install CodeRabbit app from GitHub Marketplace
- [ ] Configure CodeRabbit settings

**Steps to create GitHub repo:**
```bash
# Initialize git if not already done
cd C:\Users\aksha\Documents\coderabbit-test-repo
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: JavaScript CodeRabbit test repository"

# Create GitHub repo first, then add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/coderabbit-test-repo.git

# Push to main branch
git branch -M main
git push -u origin main
```

**After creating the repo:**
1. Go to https://github.com/marketplace/coderabbit
2. Click "Install"
3. Select your repository
4. Configure CodeRabbit settings

---

## Issue #2: Test Basic Code Review

**Title:** Test Basic Code Review - Missing Documentation

**Description:**
Create a new function without JSDoc comments to test if CodeRabbit catches missing documentation.

**Steps:**
1. Create branch: `git checkout -b test/basic-review`
2. Add new function to `src/calculator.js`:
```javascript
// Missing JSDoc comments
function squareRoot(n) {
    return Math.sqrt(n);
}
```
3. Export the function in `module.exports`
4. Commit: `git commit -am "Add square root function"`
5. Push: `git push origin test/basic-review`
6. Create PR on GitHub
7. Wait for CodeRabbit review
8. Check if CodeRabbit mentions missing JSDoc

**Expected CodeRabbit feedback:**
- ⚠️ Missing JSDoc documentation
- 💡 Suggestion to add parameter descriptions
- 💡 Suggestion to add return type documentation

---

## Issue #3: Test Error Handling Detection

**Title:** Test Error Handling - Division by Zero

**Description:**
Test if CodeRabbit catches the missing error handling in the `divide` function.

**Steps:**
1. Create branch: `git checkout -b test/error-handling`
2. Review the `divide` function in `src/calculator.js` - it has a TODO comment
3. Create test cases that expose the issue in `src/calculator.test.js`:
```javascript
test('should handle division by zero', () => {
    expect(() => divide(5, 0)).toThrow();
});
```
4. Run tests locally: `npm test` (they will fail)
5. Commit: `git commit -am "Test: Add division by zero test case"`
6. Push: `git push origin test/error-handling`
7. Create PR on GitHub
8. Wait for CodeRabbit review

**Expected CodeRabbit feedback:**
- ⚠️ Missing error handling for division by zero
- 💡 Suggestion to add validation
- 💡 Code example for proper error handling

---

## Issue #4: Test Code Quality - Unused Variables

**Title:** Test Code Quality - Remove Unused Variables

**Description:**
CodeRabbit should detect the unused `CONFIG` variable in `src/utils.js`.

**Steps:**
1. Create branch: `git checkout -b test/unused-variables`
2. Either:
   - Option A: Use the CONFIG variable somewhere
   - Option B: Remove the unused variable
3. Commit the change: `git commit -am "Fix: Remove/use CONFIG variable"`
4. Push: `git push origin test/unused-variables`
5. Create PR on GitHub
6. Wait for CodeRabbit review

**Expected CodeRabbit feedback:**
- If unused: ⚠️ CONFIG variable is never used
- If fixed: ✅ No warnings about unused variables

---

## Issue #5: Test Security - JSON Parsing

**Title:** Test Security - Safe JSON Parsing

**Description:**
Test if CodeRabbit catches unsafe JSON parsing in `src/utils.js`.

**Steps:**
1. Create branch: `git checkout -b test/json-parsing`
2. Add try-catch error handling to `parseJSON` function:
```javascript
function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Failed to parse JSON:', error);
        return null;
    }
}
```
3. Add test cases for error handling
4. Commit: `git commit -am "Fix: Add safe JSON parsing"`
5. Push: `git push origin test/json-parsing`
6. Create PR on GitHub
7. Wait for CodeRabbit review

**Expected CodeRabbit feedback:**
- Before fix: ⚠️ Missing error handling for JSON parsing
- After fix: ✅ Proper error handling implemented

---

## Issue #6: Test Best Practices - Function Complexity

**Title:** Test Best Practices - Complex Function Refactoring

**Description:**
Create a complex function that CodeRabbit suggests refactoring.

**Steps:**
1. Create branch: `git checkout -b test/complex-function`
2. Add a complex function to `src/calculator.js`:
```javascript
// TODO: This function is too complex and needs refactoring
function calculateStatistics(numbers) {
    let sum = 0;
    let avg = 0;
    let min = numbers[0];
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if (numbers[i] < min) min = numbers[i];
        if (numbers[i] > max) max = numbers[i];
    }
    avg = sum / numbers.length;
    let variance = 0;
    for (let i = 0; i < numbers.length; i++) {
        variance += Math.pow(numbers[i] - avg, 2);
    }
    variance /= numbers.length;
    return { sum, avg, min, max, variance };
}
```
3. Add tests
4. Commit: `git commit -am "Add statistics calculation function"`
5. Push: `git push origin test/complex-function`
6. Create PR on GitHub
7. Wait for CodeRabbit review

**Expected CodeRabbit feedback:**
- ⚠️ Function is too complex
- 💡 Suggestion to break into smaller functions
- 💡 Code readability improvements

---

## Issue #7: Test Test Coverage

**Title:** Test Coverage - Increase Coverage

**Description:**
Check if CodeRabbit identifies missing test coverage.

**Steps:**
1. Create branch: `git checkout -b test/test-coverage`
2. Run coverage report: `npm test -- --coverage`
3. Identify functions with low coverage
4. Add tests for uncovered code paths
5. Commit: `git commit -am "Improve test coverage"`
6. Push: `git push origin test/test-coverage`
7. Create PR on GitHub
8. Wait for CodeRabbit review

**Expected CodeRabbit feedback:**
- 📊 Test coverage metrics
- 💡 Suggestions for additional test cases
- 💡 Unhandled edge cases to test

---

## Issue #8: Test Performance - Optimization

**Title:** Test Performance - Recursive vs Iterative

**Description:**
Test if CodeRabbit suggests performance improvements for the recursive factorial function.

**Steps:**
1. Create branch: `git checkout -b test/performance`
2. Review the `factorial` function - it's recursive
3. Add an iterative version as an alternative:
```javascript
function factorialIterative(n) {
    if (n < 0) return 0;
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
```
4. Add performance comparison tests
5. Commit: `git commit -am "Add iterative factorial implementation"`
6. Push: `git push origin test/performance`
7. Create PR on GitHub
8. Wait for CodeRabbit review

**Expected CodeRabbit feedback:**
- 💡 Performance considerations
- 💡 When to use recursive vs iterative
- 💡 Stack overflow risk with recursion

---

## Issue #9: Full Integration Test

**Title:** Full Integration - Real-world Scenario

**Description:**
Create a complete feature with multiple issues to test CodeRabbit's comprehensive review.

**Steps:**
1. Create branch: `git checkout -b feature/advanced-calculator`
2. Add new advanced calculator module with:
   - Complex number operations
   - Matrix operations
   - Scientific functions
3. Include intentional issues:
   - Missing error handling
   - No JSDoc comments
   - Unused variables
   - Complex functions
   - Security concerns
4. Add comprehensive tests
5. Update documentation
6. Commit: `git commit -am "Add advanced calculator module"`
7. Push: `git push origin feature/advanced-calculator`
8. Create PR on GitHub
9. Wait for CodeRabbit review

**Expected CodeRabbit feedback:**
- Multiple actionable suggestions
- Security vulnerabilities
- Code quality improvements
- Documentation needs
- Testing gaps
- Best practices violations

---

## Issue #10: Documentation and Cleanup

**Title:** Documentation - Complete CodeRabbit Test Summary

**Description:**
Document all findings from CodeRabbit testing and create a summary.

**Steps:**
1. Create branch: `git checkout -b docs/coderabbit-summary`
2. Create `CODERABBIT_TEST_REPORT.md` with:
   - What CodeRabbit caught
   - What it missed
   - False positives
   - Overall assessment
   - Recommendations
3. Update README with lessons learned
4. Commit: `git commit -am "docs: Add CodeRabbit test report"`
5. Push: `git push origin docs/coderabbit-summary`
6. Create PR on GitHub

**Expected Outcome:**
Complete documentation of CodeRabbit's capabilities and limitations

---

## Next Steps After GitHub Setup

Once you've created the GitHub repository, you can create these issues using:

```bash
# Install GitHub CLI if not already installed
# Then create issues programmatically

gh issue create --title "Initial GitHub Repository Setup" --body "See ISSUES.md for details"
gh issue create --title "Test Basic Code Review - Missing Documentation" --body "See ISSUES.md Issue #2"
```

Or create them manually through GitHub's web interface.
