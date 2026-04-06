/**
 * PR #3: CODE QUALITY & STYLE ISSUES
 * Category: Minor Errors
 * Severity: 🟡 Low to Medium
 *
 * This file contains code quality issues and style violations
 * to test linter-like capabilities and code style enforcement.
 */

// ============================================
// BUG #1: Missing JSDoc Documentation
// Severity: Low
// ============================================

function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

function formatPhoneNumber(phone) {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

// ============================================
// BUG #2: Unused Variables
// Severity: Low
// ============================================

function processData() {
    const config = {
        apiUrl: 'https://api.example.com',
        timeout: 5000,
        retries: 3
    };

    const result = "processed";
    return result;
    // config is never used
}

function calculateTotal() {
    const taxRate = 0.1;
    const discount = 0.05;
    const subtotal = 100;

    return subtotal * taxRate;
    // discount is never used
}

// ============================================
// BUG #3: Console.log Statements
// Severity: Low
// ============================================

function processPayment(amount) {
    console.log('Processing payment:', amount);
    console.log('Payment started at:', new Date());

    // Processing logic
    const result = processCharge(amount);

    console.log('Payment completed:', result);
    return result;
}

function debugFunction(input) {
    console.log('Input received:', input);
    console.log('Processing...');
    const output = input.toUpperCase();
    console.log('Output:', output);
    return output;
}

// ============================================
// BUG #4: Magic Numbers
// Severity: Low
// ============================================

function calculateTax(amount) {
    return amount * 0.08; // Magic number
}

function retryOperation(operation) {
    let attempts = 0;
    const maxAttempts = 3; // Should be constant

    while (attempts < maxAttempts) {
        // Retry logic
        attempts++;
    }
}

// ============================================
// BUG #5: Inconsistent Naming
// Severity: Low
// ============================================

const User_Data = {};
let userProfile;
function Get_User_Info() {} // Inconsistent naming
const isValid = true;

// ============================================
// BUG #6: Long Function
// Severity: Medium
// ============================================

function processOrder(order) {
    // Validate order
    if (!order) {
        throw new Error('Order is required');
    }
    if (!order.items || order.items.length === 0) {
        throw new Error('Order must have items');
    }

    // Calculate subtotal
    let subtotal = 0;
    for (let item of order.items) {
        if (!item.price || item.price < 0) {
            throw new Error('Invalid item price');
        }
        subtotal += item.price * item.quantity;
    }

    // Apply discount
    let discount = 0;
    if (subtotal > 100) {
        discount = subtotal * 0.1;
    }

    // Calculate tax
    const tax = (subtotal - discount) * 0.08;

    // Calculate shipping
    let shipping = 5.99;
    if (subtotal > 50) {
        shipping = 0;
    }

    // Calculate total
    const total = subtotal - discount + tax + shipping;

    // Create order object
    const processedOrder = {
        subtotal: subtotal,
        discount: discount,
        tax: tax,
        shipping: shipping,
        total: total
    };

    return processedOrder;
    // Function is too long and complex
}

// ============================================
// BUG #7: Duplicate Code
// Severity: Low
// ============================================

function formatUserAddress(user) {
    let address = user.street + '\n';
    address += user.city + ', ';
    address += user.state + ' ';
    address += user.zip;
    return address;
}

function formatShippingAddress(order) {
    let address = order.street + '\n';
    address += order.city + ', ';
    address += order.state + ' ';
    address += order.zip;
    return address;
    // Duplicate logic
}

// ============================================
// BUG #8: Unused Function Parameters
// Severity: Low
// ============================================

function greetUser(name, title, age, location) {
    return `Hello, ${name}!`;
    // title, age, location are never used
}

function calculatePrice(basePrice, tax, discount, shipping) {
    return basePrice * 1.1;
    // Only uses basePrice
}

// ============================================
// BUG #9: Inconsistent Code Style
// Severity: Low
// ============================================

const user_name = "john"; // Snake case
let userProfileData; // Camel case
function GetUserById() {} // Pascal case
const isActive = true; // Camel case

// ============================================
// BUG #10: Missing Constants for Magic Strings
// Severity: Low
// ============================================

function getStatusMessage(status) {
    if (status === 'active') {
        return 'User is active';
    } else if (status === 'inactive') {
        return 'User is inactive';
    } else if (status === 'pending') {
        return 'User is pending';
    }
    // Magic strings should be constants
}

// ============================================
// BUG #11: Deep Nesting
// Severity: Medium
// ============================================

function processComplexData(data) {
    if (data) {
        if (data.items) {
            if (data.items.length > 0) {
                for (let item of data.items) {
                    if (item.valid) {
                        if (item.price > 0) {
                            if (item.inStock) {
                                // Deep nesting - hard to read
                                processItem(item);
                            }
                        }
                    }
                }
            }
        }
    }
}

// ============================================
// BUG #12: Boolean Confusion
// Severity: Low
// ============================================

function hasPermission(user, permission) {
    if (permission === true) { // Confusing boolean check
        return user.isAdmin;
    }
    return false;
}

function isValid(data) {
    if (data.valid === true) { // Unnecessary === true
        return true;
    }
    return false;
}

// ============================================
// BUG #13: Early Returns Missing
// Severity: Low
// ============================================

function validateUser(user) {
    let isValid = true;

    if (!user) {
        isValid = false;
    }

    if (!user.email) {
        isValid = false;
    }

    if (!user.name) {
        isValid = false;
    }

    return isValid;
    // Could use early returns instead
}

// ============================================
// BUG #14: Commented Out Code
// Severity: Low
// ============================================

function processData(input) {
    // const result = input.toUpperCase();
    // return result;
    return input;
}

// ============================================
// BUG #15: Large Parameter List
// Severity: Medium
// ============================================

function createUser(username, email, password, firstName, lastName, age, country, phone, newsletter) {
    // Too many parameters - should use object
    return {
        username: username,
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        age: age,
        country: country,
        phone: phone,
        newsletter: newsletter
    };
}

// ============================================
// BUG #16: Missing Error Messages
// Severity: Low
// ============================================

function divide(a, b) {
    if (b === 0) {
        throw new Error(); // Empty error message
    }
    return a / b;
}

function getUser(id) {
    if (!id) {
        throw new Error(); // No helpful message
    }
    return findUser(id);
}

// ============================================
// BUG #17: Inconsistent Return Types
// Severity: Low
// ============================================

function getValue(condition) {
    if (condition) {
        return 'string';
    }
    return 42; // Inconsistent return type
}

function findUser(id) {
    const user = database.find(id);
    if (user) {
        return user;
    }
    return null; // Could return undefined or null inconsistently
}

// ============================================
// BUG #18: Poor Variable Names
// Severity: Low
// ============================================

function calc(a, b, c) {
    const d = a + b;
    const e = d * c;
    return e;
    // Unhelpful variable names
}

function proc(x) {
    const y = x * 2;
    const z = y + 1;
    return z;
}

// ============================================
// BUG #19: Redundant Code
// Severity: Low
// ============================================

function isPositive(num) {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
    // Can be simplified to: return num > 0;
}

function isEmpty(str) {
    if (str === '') {
        return true;
    } else {
        return false;
    }
}

// ============================================
// BUG #20: Missing Edge Case Handling
// Severity: Medium
// ============================================

function capitalizeFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
    // No check for empty string
}

function getLastElement(arr) {
    return arr[arr.length - 1];
    // No check for empty array
}

module.exports = {
    calculateCircleArea,
    formatPhoneNumber,
    processData,
    calculateTotal,
    processPayment,
    debugFunction,
    calculateTax,
    retryOperation,
    processOrder,
    formatUserAddress,
    formatShippingAddress,
    greetUser,
    calculatePrice,
    getStatusMessage,
    processComplexData,
    hasPermission,
    isValid,
    validateUser,
    divide,
    getUser,
    getValue,
    findUser,
    calc,
    proc,
    isPositive,
    isEmpty,
    capitalizeFirst,
    getLastElement
};
