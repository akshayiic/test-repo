/**
 * SYNTHETIC BUGS FILE
 * This file contains intentional errors to test AI code review tools
 * Each error is labeled with its type and expected detection
 */

// ============================================
// BUG #1: Missing JSDoc Documentation
// Expected: Both tools should catch this
// ============================================

function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// ============================================
// BUG #2: Missing Error Handling - Division by Zero
// Expected: Both tools should catch this
// ============================================

function divideNumbers(a, b) {
    // TODO: Handle division by zero
    return a / b;
}

// ============================================
// BUG #3: Missing Input Validation
// Expected: Both tools should catch this
// ============================================

function processUserInput(input) {
    // No validation - potential security risk
    return input.toUpperCase();
}

// ============================================
// BUG #4: Unsafe JSON Parsing
// Expected: Both tools should catch this
// ============================================

function parseJsonData(jsonString) {
    // TODO: Add try-catch for error handling
    return JSON.parse(jsonString);
}

// ============================================
// BUG #5: Unused Variable
// Expected: Both tools should catch this
// ============================================

function processData() {
    const config = {
        apiUrl: 'https://api.example.com',
        timeout: 5000,
        retries: 3
    };

    const result = "data processed";
    return result;
    // config variable is never used
}

// ============================================
// BUG #6: Potential Null Reference Error
// Expected: Both tools should catch this
// ============================================

function getUserEmail(user) {
    // No null check before accessing property
    return user.email;
}

// ============================================
// BUG #7: Infinite Loop Risk
// Expected: Both tools should catch this
// ============================================

function waitForCondition(condition) {
    while (!condition) {
        // This could run forever if condition never changes
        console.log("Waiting...");
    }
}

// ============================================
// BUG #8: Missing Return Statement
// Expected: Both tools should catch this
// ============================================

function calculateTax(amount) {
    const taxRate = 0.1;
    const tax = amount * taxRate;
    // Missing return statement
}

// ============================================
// BUG #9: Incorrect Logical Operator
// Expected: Both tools should catch this
// ============================================

function validateAge(age) {
    if (age > 18 && age < 65) { // Should be || for OR condition
        return "Working age";
    }
    return "Not in working age";
}

// ============================================
// BUG #10: Hardcoded Credentials (Security)
// Expected: Both tools should catch this
// ============================================

function connectToDatabase() {
    const apiKey = "sk-1234567890abcdef";
    const dbPassword = "admin123";
    // Security risk: hardcoded credentials
}

// ============================================
// BUG #11: Unused Function Parameter
// Expected: Both tools should catch this
// ============================================

function greetUser(name, title, age) {
    return `Hello, ${name}!`;
    // title and age parameters are never used
}

// ============================================
// BUG #12: Inconsistent Error Handling
// Expected: Both tools should catch this
// ============================================

async function fetchUserData(userId) {
    if (!userId) {
        throw new Error("User ID is required");
    }

    const response = await fetch(`/api/users/${userId}`);
    // No error handling for failed fetch
    return response.json();
}

// ============================================
// BUG #13: Missing Type Checking
// Expected: Both tools should catch this
// ============================================

function addNumbers(a, b) {
    // No type checking - could concatenate strings
    return a + b;
}

// ============================================
// BUG #14: Complex Function (Code Smell)
// Expected: Both tools should catch this
// ============================================

function processOrder(order) {
    let total = 0;
    let discount = 0;
    let tax = 0;
    let shipping = 0;

    // Calculate subtotal
    for (let item of order.items) {
        total += item.price * item.quantity;
    }

    // Apply discount
    if (total > 100) {
        discount = total * 0.1;
    }

    // Calculate tax
    tax = (total - discount) * 0.08;

    // Calculate shipping
    if (total > 50) {
        shipping = 0;
    } else {
        shipping = 5.99;
    }

    // This function is too complex and should be refactored
    return {
        subtotal: total,
        discount: discount,
        tax: tax,
        shipping: shipping,
        total: total - discount + tax + shipping
    };
}

// ============================================
// BUG #15: Missing Edge Case Handling
// Expected: Both tools should catch this
// ============================================

function calculateAverage(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    // No check for empty array - will return NaN
    return sum / numbers.length;
}

// ============================================
// BUG #16: Potential SQL Injection (Security)
// Expected: Both tools should catch this
// ============================================

function getUserByUsername(username) {
    const query = `SELECT * FROM users WHERE username = '${username}'`;
    // SQL Injection vulnerability
    return database.execute(query);
}

// ============================================
// BUG #17: Missing Default Case in Switch
// Expected: Both tools should catch this
// ============================================

function getDayType(day) {
    switch (day) {
        case 'Saturday':
        case 'Sunday':
            return 'Weekend';
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            return 'Weekday';
        // Missing default case
    }
}

// ============================================
// BUG #18: Console.log Left in Production Code
// Expected: Both tools should catch this
// ============================================

function sensitiveOperation(data) {
    console.log("Processing sensitive data:", data);
    // Console.log statements should be removed in production
    return "processed";
}

// ============================================
// BUG #19: Immediately Resolved Promise
// Expected: Both tools should catch this
// ============================================

async function fetchData() {
    return Promise.resolve("data");
    // No need for async/await with immediate resolve
}

// ============================================
// BUG #20: Unused Import Statement
// Expected: Both tools should catch this
// ============================================

const lodash = require('lodash');

function simpleFunction() {
    return "Hello";
    // lodash is imported but never used
}

module.exports = {
    calculateCircleArea,
    divideNumbers,
    processUserInput,
    parseJsonData,
    processData,
    getUserEmail,
    waitForCondition,
    calculateTax,
    validateAge,
    connectToDatabase,
    greetUser,
    fetchUserData,
    addNumbers,
    processOrder,
    calculateAverage,
    getUserByUsername,
    getDayType,
    sensitiveOperation,
    fetchData,
    simpleFunction
};
