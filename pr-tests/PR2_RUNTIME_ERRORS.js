/**
 * PR #2: RUNTIME & LOGIC ERRORS
 * Category: Major Errors
 * Severity: 🔴 High
 *
 * This file contains intentional runtime errors and logic bugs
 * to test error detection and code analysis capabilities.
 */

// ============================================
// BUG #1: Division by Zero
// Severity: High
// ============================================

function calculateAverage(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    // No check for empty array - division by zero
    return sum / numbers.length;
}

function divide(a, b) {
    // No validation - will cause Infinity or crash
    return a / b;
}

// ============================================
// BUG #2: Null Reference Errors
// Severity: High
// ============================================

function getUserDisplayName(user) {
    // No null check before accessing nested properties
    return user.profile.settings.displayName;
}

function processOrder(order) {
    // Assuming order exists and has items
    let total = 0;
    for (let item of order.items) {
        total += item.price;
    }
    return total;
}

function getAddress(contact) {
    // No validation - will crash if contact is null
    return contact.address.street;
}

// ============================================
// BUG #3: Undefined Variable Access
// Severity: High
// ============================================

function calculateDiscount(price) {
    // discountRate is never defined
    const discount = price * discountRate;
    return price - discount;
}

function processData(input) {
    // result is used before assignment
    return result.toUpperCase();
}

// ============================================
// BUG #4: Array Index Out of Bounds
// Severity: High
// ============================================

function getFirstThreeElements(arr) {
    // No length check
    return [arr[0], arr[1], arr[2]];
}

function getLastItem(items) {
    // Will return undefined if array is empty
    return items[items.length - 1];
}

// ============================================
// BUG #5: Type Coercion Errors
// Severity: Medium
// ============================================

function addNumbers(a, b) {
    // No type checking - could concatenate strings
    return a + b;
}

function compareValues(x, y) {
    // Using == instead of === - type coercion
    if (x == y) {
        return true;
    }
    return false;
}

// ============================================
// BUG #6: Infinite Loop Risk
// Severity: High
// ============================================

function waitForData() {
    while (!dataReady) {
        // dataReady is never updated - infinite loop
        console.log("Waiting for data...");
    }
}

function processItems(items) {
    let i = 0;
    while (i < items.length) {
        // Forgot to increment i
        console.log(items[i]);
    }
}

// ============================================
// BUG #7: Missing Error Handling
// Severity: High
// ============================================

async function fetchUserData(userId) {
    const response = await fetch(`/api/users/${userId}`);
    // No error handling for failed requests
    return response.json();
}

function parseConfig(jsonString) {
    // No try-catch for JSON parsing
    const config = JSON.parse(jsonString);
    return config;
}

function readFileContent(filepath) {
    const fs = require('fs');
    // No error handling for missing files
    return fs.readFileSync(filepath, 'utf8');
}

// ============================================
// BUG #8: Wrong Logical Operators
// Severity: Medium
// ============================================

function validateAge(age) {
    // Using && instead of ||
    if (age < 18 && age > 65) {
        return "Not working age";
    }
    return "Working age";
}

function isEligible(discount, member) {
    // Wrong logic - both conditions must be true
    if (discount || member) {
        return true;
    }
    return false;
}

// ============================================
// BUG #9: Off-by-One Errors
// Severity: Medium
// ============================================

function getFirstNItems(array, n) {
    // Should be i < n, not i <= n
    const result = [];
    for (let i = 0; i <= n; i++) {
        result.push(array[i]);
    }
    return result;
}

function sumRange(start, end) {
    let sum = 0;
    // Should be i <= end, not i < end
    for (let i = start; i < end; i++) {
        sum += i;
    }
    return sum;
}

// ============================================
// BUG #10: Missing Return Statement
// Severity: Medium
// ============================================

function calculateTax(amount) {
    const taxRate = 0.1;
    const tax = amount * taxRate;
    // Missing return statement
}

function getUserRole(user) {
    if (user.isAdmin) {
        return 'admin';
    }
    if (user.isModerator) {
        // No return for this case
    }
}

// ============================================
// BUG #11: Incorrect Formula Implementation
// Severity: Medium
// ============================================

function celsiusToFahrenheit(c) {
    // Wrong formula: should be (c * 9/5) + 32
    return c * 9 / 5 + 32;
}

function calculateCompoundInterest(principal, rate, time) {
    // Wrong formula - missing power operation
    return principal * (1 + rate) * time;
}

function calculateDistance(x1, y1, x2, y2) {
    // Wrong distance formula
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

// ============================================
// BUG #12: Promise Without Error Handling
// Severity: High
// ============================================

function fetchAndProcess() {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => processData(data))
        // No .catch() for errors
}

function saveUserData(user) {
    database.save(user)
        .then(() => console.log('Saved'))
        // Missing error handling
}

// ============================================
// BUG #13: Callback Hell Without Error Handling
// Severity: Medium
// ============================================

function getUserPosts(userId) {
    getUser(userId, (user) => {
        getPosts(user.id, (posts) => {
            getComments(posts[0].id, (comments) => {
                // Nested callbacks without error handling
                return comments;
            });
        });
    });
}

// ============================================
// BUG #14: Race Conditions
// Severity: Medium
// ============================================

let counter = 0;

function incrementCounter() {
    counter++;
    return counter;
}

// Multiple concurrent calls could cause issues
Promise.all([
    incrementCounter(),
    incrementCounter(),
    incrementCounter()
]);

// ============================================
// BUG #15: Memory Leak
// Severity: Medium
// ============================================

function processDataStream(stream) {
    const data = [];
    stream.on('data', (chunk) => {
        data.push(chunk); // Never cleared - memory leak
    });
}

function growingArray() {
    let cache = [];
    setInterval(() => {
        cache.push(new Array(1000)); // Keeps growing
    }, 1000);
}

// ============================================
// BUG #16: Missing Default Case
// Severity: Low
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
// BUG #17: Incorrect Data Type Assumption
// Severity: Medium
// ============================================

function doubleValue(value) {
    // Assuming value is always a number
    return value * 2;
}

function splitIntoWords(text) {
    // Assuming text is always a string
    return text.split(' ');
}

// ============================================
// BUG #18: Mutation of Function Parameters
// Severity: Low
// ============================================

function addUserToList(user, users) {
    user.id = Date.now(); // Mutating parameter
    users.push(user);
    return users;
}

function sortArray(arr) {
    // Mutating original array
    arr.sort();
    return arr;
}

// ============================================
// BUG #19: Blocking Operations
// Severity: Medium
// ============================================

function processLargeFile(filepath) {
    const fs = require('fs');
    // Synchronous file read - blocks event loop
    const content = fs.readFileSync(filepath, 'utf8');
    return content.toUpperCase();
}

function fetchAllData() {
    const urls = ['/api/1', '/api/2', '/api/3'];
    const results = urls.map(url => {
        // Synchronous fetch - blocks
        return fetchSync(url);
    });
    return results;
}

// ============================================
// BUG #20: Uncaught Exception Propagation
// Severity: Medium
// ============================================

function riskyOperation() {
    if (Math.random() > 0.5) {
        throw new Error('Random error');
    }
    return 'Success';
}

function processWithoutTryCatch() {
    const result = riskyOperation(); // No error handling
    return result;
}

module.exports = {
    calculateAverage,
    divide,
    getUserDisplayName,
    processOrder,
    getAddress,
    calculateDiscount,
    processData,
    getFirstThreeElements,
    getLastItem,
    addNumbers,
    compareValues,
    waitForData,
    processItems,
    fetchUserData,
    parseConfig,
    readFileContent,
    validateAge,
    isEligible,
    getFirstNItems,
    sumRange,
    calculateTax,
    getUserRole,
    celsiusToFahrenheit,
    calculateCompoundInterest,
    calculateDistance,
    fetchAndProcess,
    saveUserData,
    getUserPosts,
    incrementCounter,
    processDataStream,
    growingArray,
    getDayType,
    doubleValue,
    splitIntoWords,
    addUserToList,
    sortArray,
    processLargeFile,
    fetchAllData,
    riskyOperation,
    processWithoutTryCatch
};
