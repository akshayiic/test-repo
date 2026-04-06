# PR #2: Runtime Errors - Complete Comparison

**PR Link:** https://github.com/akshayiic/test-repo/pull/2
**Category:** 🔴 Runtime Errors
**Total Bugs:** 20
**File:** `pr-tests/PR2_RUNTIME_ERRORS.js`

---

## 🤖 Greptile Results

### 📊 Greptile Summary:
- **Detection Rate:** [X]/20 ([X]%)
- **Average Quality:** [X]/5 stars
- **Actionable Feedback:** [X]%
- **False Positives:** [X]

### Detailed Results:

| Bug # | Bug Type | Line | Detected? | Quality | Actionable |
|-------|----------|------|-----------|---------|------------|
| 1 | Division by Zero | 10 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 2 | Division by Zero #2 | 16 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 3 | Null Reference | 23 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 4 | Null Reference #2 | 29 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 5 | Null Reference #3 | 35 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 6 | Undefined Variable | 42 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 7 | Undefined Variable #2 | 48 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 8 | Array Out of Bounds | 55 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 9 | Array Out of Bounds #2 | 61 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 10 | Type Coercion | 68 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 11 | Type Coercion #2 | 74 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 12 | Infinite Loop | 81 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 13 | Infinite Loop #2 | 88 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 14 | Missing Error Handling | 95 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 15 | Missing Error Handling #2 | 102 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 16 | Missing Error Handling #3 | 109 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 17 | Wrong Logical Operator | 116 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 18 | Wrong Logical Operator #2 | 123 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 19 | Missing Return | 130 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 20 | Missing Return #2 | 138 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |

---

## 🐰 CodeRabbit Results

### 📊 CodeRabbit Summary:
- **Detection Rate:** [X]/20 ([X]%)
- **Average Quality:** [X]/5 stars
- **Actionable Feedback:** [X]%
- **False Positives:** [X]

### Detailed Results:

| Bug # | Bug Type | Line | Detected? | Quality | Actionable |
|-------|----------|------|-----------|---------|------------|
| 1 | Division by Zero | 10 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 2 | Division by Zero #2 | 16 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 3 | Null Reference | 23 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 4 | Null Reference #2 | 29 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 5 | Null Reference #3 | 35 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 6 | Undefined Variable | 42 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 7 | Undefined Variable #2 | 48 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 8 | Array Out of Bounds | 55 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 9 | Array Out of Bounds #2 | 61 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 10 | Type Coercion | 68 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 11 | Type Coercion #2 | 74 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 12 | Infinite Loop | 81 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 13 | Infinite Loop #2 | 88 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 14 | Missing Error Handling | 95 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 15 | Missing Error Handling #2 | 102 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 16 | Missing Error Handling #3 | 109 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 17 | Wrong Logical Operator | 116 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 18 | Wrong Logical Operator #2 | 123 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 19 | Missing Return | 130 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |
| 20 | Missing Return #2 | 138 | ⬜/☐ | ⬜⬜⬜⬜⬜ | ⬜/☐ |

---

## 🏆 Head-to-Head Comparison

| Bug Type | Greptile | CodeRabbit | Winner |
|----------|----------|------------|--------|
| Division by Zero | ⬜/☐ | ⬜/☐ | TBD |
| Null References | ⬜/☐ | ⬜/☐ | TBD |
| Undefined Variables | ⬜/☐ | ⬜/☐ | TBD |
| Array Bounds | ⬜/☐ | ⬜/☐ | TBD |
| Type Coercion | ⬜/☐ | ⬜/☐ | TBD |
| Infinite Loops | ⬜/☐ | ⬜/☐ | TBD |
| Error Handling | ⬜/☐ | ⬜/☐ | TBD |
| Logic Errors | ⬜/☐ | ⬜/☐ | TBD |
| Missing Returns | ⬜/☐ | ⬜/☐ | TBD |

---

## 📈 Final Scores for PR #2

| Tool | Detection | Quality | Actionability | **Total** |
|------|-----------|---------|--------------|----------|
| **Greptile** | [X]/40 | [X]/30 | [X]/20 | **[X]/90** |
| **CodeRabbit** | [X]/40 | [X]/30 | [X]/20 | **[X]/90** |

### **Winner for PR #2:** [Greptile / CodeRabbit / Tie]

---

## 💬 Key Differences

### What Greptile Did Better:
- [List after review]

### What CodeRabbit Did Better:
- [List after review]

---

## 🎯 Runtime Error Category Conclusion

**Best for Runtime Error Detection:** [Greptile / CodeRabbit]

**Reason:** [Fill after testing]

**Recommendation:** [Fill after testing]

---

**Last Updated:** [Date]
**Review Status:** ⬜ Waiting | ☐ Complete
