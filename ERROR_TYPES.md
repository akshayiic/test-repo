# Types of Programming Errors

## 📊 Complete Error Classification

### 1. **Syntax Errors** (Compile-time errors)
Errors in code structure that prevent compilation/execution.

**Examples:**
```javascript
// Missing closing parenthesis
function add(a, b {
    return a + b;
}

// Missing semicolon (in languages that require it)
let x = 10

// Undefined variable
console.log(y); // y not defined
```

**Characteristics:**
- ❌ Code won't run at all
- 🔍 Caught by compiler/interpreter
- 🛠️ Easy to fix (usually)

---

### 2. **Runtime Errors** (Exceptions)
Errors that occur while the program is running.

**Examples:**
```javascript
// Division by zero
let result = 10 / 0; // Infinity or error

// Null/undefined access
let obj = null;
console.log(obj.property); // TypeError

// Array out of bounds
let arr = [1, 2, 3];
console.log(arr[10]); // undefined (may cause errors)

// Type coercion issues
let num = "5";
console.log(num + 10); // "510" (string concatenation)
```

**Characteristics:**
- ⚠️ Code starts running then crashes
- 📍 Happens at specific line/condition
- 🎯 Need error handling (try-catch)

---

### 3. **Logical Errors** (Bugs)
Code runs but produces incorrect results.

**Examples:**
```javascript
// Wrong operator
function calculateDiscount(price) {
    return price * 0.1; // Should be price * 0.9
}

// Off-by-one error
for (let i = 0; i <= array.length; i++) { // Should be <
    console.log(array[i]);
}

// Wrong condition
if (age > 18) { // Should be >= for inclusive
    console.log("Adult");
}

// Incorrect formula
function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32; // Wrong formula
}
```

**Characteristics:**
- 🐛 Code runs without errors
- ❌ Output is wrong
- 🔍 Harder to detect
- 🧪 Need thorough testing

---

### 4. **Semantic Errors**
Code is syntactically correct but doesn't make logical sense.

**Examples:**
```javascript
// Meaningless operation
let result = "hello" * 5; // NaN

// Impossible condition
if (true === false) {
    // This never executes
}

// Dead code
function neverCalled() {
    return 42;
}
```

---

### 5. **Type Errors**
Operations performed on wrong data types.

**Examples:**
```javascript
// Number operation on string
let x = "hello";
console.log(x * 2); // NaN

// Accessing string as array
let str = "hello";
console.log(str[0]); // 'h' (works but bad practice)

// Wrong type argument
Math.max("string"); // NaN
```

**Characteristics:**
- 🔤 Data type mismatch
- 🔄 Type coercion issues
- 💡 Use TypeScript to prevent

---

### 6. **Reference Errors**
Trying to access variables/functions that don't exist.

**Examples:**
```javascript
// Variable not declared
console.log(undefinedVariable); // ReferenceError

// Function not defined
myFunction(); // ReferenceError

// Scope issues
function outer() {
    console.log(innerVar); // ReferenceError
}
```

---

### 7. **Resource Errors**
Problems with system resources (memory, network, file I/O).

**Examples:**
```javascript
// Out of memory
let hugeArray = new Array(1000000000);

// Network timeout
fetch('https://example.com')
    .then(response => response.json())
    .catch(error => console.log('Network error'));

// File not found
fs.readFile('nonexistent.txt', (err, data) => {
    if (err) console.error('File not found');
});
```

---

### 8. **Concurrency Errors**
Issues with multi-threading/async operations.

**Examples:**
```javascript
// Race condition
let counter = 0;
Promise.all([
    incrementCounter(),
    incrementCounter()
]).then(() => console.log(counter)); // May be 1 or 2

// Deadlock
async function deadlock() {
    await lockA();
    await lockB(); // May cause deadlock
}

// Callback hell
getData(function(data) {
    getMoreData(data, function(moreData) {
        getEvenMoreData(moreData, function(evenMoreData) {
            // Error prone
        });
    });
});
```

---

### 9. **Arithmetic Errors**
Math-related errors.

**Examples:**
```javascript
// Division by zero
let x = 10 / 0; // Infinity

// Overflow
let big = Number.MAX_VALUE * 2; // Infinity

// Precision errors
let y = 0.1 + 0.2; // 0.30000000000000004

// NaN propagation
let result = NaN + 5; // NaN
```

---

### 10. **Input Validation Errors**
Not validating user input properly.

**Examples:**
```javascript
// No validation
function divide(a, b) {
    return a / b; // Fails if b is 0 or not a number
}

// SQL Injection (security error)
let query = `SELECT * FROM users WHERE name = '${userName}'`;

// XSS vulnerability
element.innerHTML = userInput; // Allows script injection
```

---

### 11. **Security Errors**
Vulnerabilities that can be exploited.

**Types:**
- **SQL Injection** - Malicious database queries
- **XSS (Cross-Site Scripting)** - Injecting malicious scripts
- **CSRF (Cross-Site Request Forgery)** - Fake requests
- **Authentication bypass** - Weak auth implementation
- **Data exposure** - Leaking sensitive data
- **Dependency vulnerabilities** - Outdated/insecure packages

---

### 12. **Performance Errors**
Code works but is inefficient.

**Examples:**
```javascript
// N+1 query problem
users.forEach(user => {
    let orders = getOrders(user.id); // Database call in loop
});

// Unnecessary loops
for (let i = 0; i < array.length; i++) {
    // array.length calculated every iteration
}

// Memory leak
let elements = [];
setInterval(() => {
    elements.push(document.createElement('div'));
}, 1000);
```

---

### 13. **Integration Errors**
Problems with external systems/APIs.

**Examples:**
- API changes (breaking changes)
- Incorrect API usage
- Missing authentication
- Rate limiting exceeded
- Network timeouts

---

### 14. **Configuration Errors**
Wrong settings/environment variables.

**Examples:**
```javascript
// Wrong API keys
const apiKey = 'wrong-key';

// Incorrect environment
const apiUrl = 'http://localhost:3000'; // In production

// Missing configuration
const dbConfig = {}; // Missing required fields
```

---

### 15. **Logic Errors in Tests**
Tests that pass but don't actually test anything.

**Examples:**
```javascript
// Always passes
test('example', () => {
    expect(true).toBe(true);
});

// Wrong assertion
test('add', () => {
    expect(add(2, 2)).toBe(5); // Should be 4
});

// Not testing edge cases
test('divide', () => {
    expect(divide(10, 2)).toBe(5); // Missing: divide by zero
});
```

---

## 🎯 Error Detection Methods

| Error Type | Detection Method | Tool |
|------------|------------------|------|
| Syntax | Compiler/Linter | ESLint, TypeScript |
| Runtime | Error handling | Try-catch, error boundaries |
| Logical | Testing | Unit tests, integration tests |
| Type | Type checker | TypeScript, Flow |
| Security | Security audit | CodeRabbit, Snyk, SonarQube |
| Performance | Profiling | Chrome DevTools, Lighthouse |
| Resource | Monitoring | APM tools, logging |

---

## 🛡️ Prevention Strategies

### 1. **Use TypeScript**
Prevents type errors at compile-time.

### 2. **Write Tests**
- Unit tests for functions
- Integration tests for workflows
- E2E tests for user flows

### 3. **Code Review**
Use tools like CodeRabbit to catch issues early.

### 4. **Linting**
ESLint, Prettier for code quality.

### 5. **Error Handling**
```javascript
try {
    riskyOperation();
} catch (error) {
    console.error('Error:', error);
    handleGracefully(error);
}
```

### 6. **Input Validation**
```javascript
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Arguments must be numbers');
    }
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}
```

### 7. **Logging & Monitoring**
Track errors in production.

---

## 📈 Error Severity Levels

1. **Critical** - Crashes system, security breach
2. **High** - Data loss, major feature broken
3. **Medium** - Feature partially broken
4. **Low** - Minor issues, workarounds exist
5. **Cosmetic** - UI/UX issues only

---

## 🎓 Summary

**15 Major Error Types:**
1. Syntax Errors
2. Runtime Errors
3. Logical Errors
4. Semantic Errors
5. Type Errors
6. Reference Errors
7. Resource Errors
8. Concurrency Errors
9. Arithmetic Errors
10. Input Validation Errors
11. Security Errors
12. Performance Errors
13. Integration Errors
14. Configuration Errors
15. Logic Errors in Tests

**Key Takeaway:**
- Use **tools** (linter, TypeScript) to catch errors early
- Write **tests** to prevent logical errors
- Use **CodeRabbit** to catch code quality issues
- Implement **error handling** for runtime errors
- Practice **defensive programming**
