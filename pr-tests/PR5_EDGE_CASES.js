/**
 * PR #5: EDGE CASES & ERROR HANDLING
 * Category: Medium Errors
 * Severity: 🟡 Medium
 *
 * This file contains edge case handling issues and incomplete
 * error handling to test thoroughness of code analysis.
 */

// ============================================
// BUG #1: Empty Array Handling
// Severity: Medium
// ============================================

function getFirstElement(arr) {
    return arr[0]; // No check for empty array
}

function getLastElement(arr) {
    return arr[arr.length - 1]; // Returns undefined if empty
}

// ============================================
// BUG #2: Null/Undefined Handling
// Severity: Medium
// ============================================

function getUserEmail(user) {
    return user.email; // No null check
}

function getUserNameLength(user) {
    return user.name.length; // Crashes if user or name is null
}

// ============================================
// BUG #3: String Edge Cases
// Severity: Medium
// ============================================

function capitalizeFirst(str) {
    return str[0].toUpperCase() + str.slice(1); // No empty string check
}

function reverseString(str) {
    return str.split('').reverse().join(''); // No validation
}

// ============================================
// BUG #4: Number Edge Cases
// Severity: Medium
// ============================================

function calculatePercentage(value, total) {
    return (value / total) * 100; // Division by zero
}

function getNumberSign(num) {
    if (num > 0) return 'positive';
    if (num < 0) return 'negative';
    // No handling for zero or NaN
}

// ============================================
// BUG #5: Array Methods Edge Cases
// Severity: Medium
// ============================================

function getMaxValue(numbers) {
    return Math.max(...numbers); // Empty array returns -Infinity
}

function sumArray(numbers) {
    return numbers.reduce((sum, n) => sum + n, 0); // OK but could validate
}

// ============================================
// BUG #6: Object Property Access
// Severity: Medium
// ============================================

function getStreetAddress(user) {
    return user.address.street; // No nested null checks
}

function getZipCode(contact) {
    return contact.location.zipCode; // Chain could fail
}

// ============================================
// BUG #7: Date Edge Cases
// Severity: Medium
// ============================================

function formatDate(date) {
    return date.toISOString(); // No validation if date is valid
}

function getAge(birthDate) {
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    return age; // Doesn't account for month/day
}

// ============================================
// BUG #8: Promise Chain Error Handling
// Severity: Medium
// ============================================

function fetchAndProcess() {
    fetch('/api/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network error');
            }
            return response.json();
        })
        .then(data => processData(data))
        // Missing .catch() for errors
}

// ============================================
// BUG #9: Async/Await Error Handling
// Severity: Medium
// ============================================

async function getUserData(userId) {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    return data; // No try-catch or error handling
}

// ============================================
// BUG #10: Input Validation
// Severity: Medium
// ============================================

function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear; // No validation
}

function parseUserInput(input) {
    const num = parseInt(input);
    return num * 2; // No NaN check
}

// ============================================
// BUG #11: File Path Validation
// Severity: Medium
// ============================================

function readFile(filepath) {
    const fs = require('fs');
    // No path validation - could read sensitive files
    return fs.readFileSync(filepath, 'utf8');
}

function saveFile(filename, content) {
    const fs = require('fs');
    // No directory validation
    fs.writeFileSync(filename, content);
}

// ============================================
// BUG #12: Boundary Conditions
// Severity: Medium
// ============================================

function getItemAtIndex(arr, index) {
    return arr[index]; // No bounds checking
}

function getSubstr(str, start, end) {
    return str.substring(start, end); // No validation
}

// ============================================
// BUG #13: Concurrent Request Handling
// Severity: Medium
// ============================================

async function fetchMultiple(urls) {
    const results = [];
    for (let url of urls) {
        const data = await fetch(url); // Sequential, not parallel
        results.push(data.json());
    }
    return results;
}

// ============================================
// BUG #14: Type Coercion Issues
// Severity: Medium
// ============================================

function addValues(a, b) {
    return a + b; // Could concatenate strings
}

function compareIds(id1, id2) {
    return id1 == id2; // Type coercion
}

// ============================================
// BUG #15: Missing Default Values
// Severity: Low
// ============================================

function greet(name) {
    return `Hello, ${name}!`; // No default for undefined
}

function createArray(size) {
    return new Array(size); // No validation
}

// ============================================
// BUG #16: Regex Edge Cases
// Severity: Medium
// ============================================

function extractEmail(text) {
    const regex = /[\w.]+@[\w.]+/;
    const match = text.match(regex);
    return match[0]; // No check if match exists
}

function validatePhone(phone) {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(phone); // No null check
}

// ============================================
// BUG #17: JSON Parsing Edge Cases
// Severity: Medium
// ============================================

function parseJSON(jsonString) {
    return JSON.parse(jsonString); // No error handling
}

function stringifyJSON(obj) {
    return JSON.stringify(obj); // No circular reference check
}

// ============================================
// BUG #18: Unicode/Special Characters
// Severity: Low
// ============================================

function countCharacters(str) {
    return str.length; // May not count Unicode correctly
}

function reverseWords(text) {
    return text.split(' ').reverse().join(' '); // Issues with special chars
}

// ============================================
// BUG #19: Floating Point Precision
// Severity: Medium
// ============================================

function addFloats(a, b) {
    return a + b; // Floating point precision issues
}

function compareFloats(a, b) {
    return a === b; // Should use epsilon comparison
}

// ============================================
// BUG #20: Timeout/Retry Issues
// Severity: Medium
// ============================================

async function fetchWithTimeout(url) {
    const response = await fetch(url); // No timeout handling
    return response.json();
}

function retryOperation(operation) {
    let attempts = 0;
    while (attempts < 3) {
        try {
            return operation();
        } catch (error) {
            attempts++; // No delay between retries
        }
    }
}

// ============================================
// BUG #21: Environment-Specific Issues
// Severity: Medium
// ============================================

function getApiUrl() {
    return 'http://localhost:3000/api'; // Hardcoded localhost
}

function isProduction() {
    return process.env.NODE_ENV === 'production'; // No fallback
}

// ============================================
// BUG #22: Encoding Issues
// Severity: Medium
// ============================================

function readFileBytes(filepath) {
    const fs = require('fs');
    return fs.readFileSync(filepath); // No encoding specified
}

function writeToFile(filepath, content) {
    const fs = require('fs');
    fs.writeFileSync(filepath, content); // No encoding
}

// ============================================
// BUG #23: Race Conditions
// Severity: Medium
// ============================================

let counter = 0;

function incrementCounter() {
    counter++; // Not atomic - race condition in async contexts
    return counter;
}

// ============================================
// BUG #24: Memory Limits
// Severity: Medium
// ============================================

function readLargeFile(filepath) {
    const fs = require('fs');
    // Reading entire file into memory - could exceed limits
    return fs.readFileSync(filepath, 'utf8');
}

function processHugeDataset(data) {
    // Processing entire dataset at once
    return data.map(item => heavyComputation(item));
}

// ============================================
// BUG #25: Network Error Recovery
// Severity: Medium
// ============================================

async function fetchWithRetry(url) {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        // Single retry without exponential backoff
        const response = await fetch(url);
        return response.json();
    }
}

module.exports = {
    getFirstElement,
    getLastElement,
    getUserEmail,
    getUserNameLength,
    capitalizeFirst,
    reverseString,
    calculatePercentage,
    getNumberSign,
    getMaxValue,
    sumArray,
    getStreetAddress,
    getZipCode,
    formatDate,
    getAge,
    fetchAndProcess,
    getUserData,
    calculateAge,
    parseUserInput,
    readFile,
    saveFile,
    getItemAtIndex,
    getSubstr,
    fetchMultiple,
    addValues,
    compareIds,
    greet,
    createArray,
    extractEmail,
    validatePhone,
    parseJSON,
    stringifyJSON,
    countCharacters,
    reverseWords,
    addFloats,
    compareFloats,
    fetchWithTimeout,
    retryOperation,
    getApiUrl,
    isProduction,
    readFileBytes,
    writeToFile,
    incrementCounter,
    readLargeFile,
    processHugeDataset,
    fetchWithRetry
};
