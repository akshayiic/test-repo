/**
 * A simple calculator module for testing code reviews.
 * This version intentionally has some issues for CodeRabbit to catch.
 */

/**
 * Add two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtract b from a
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiply two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divide a by b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
// TODO: Handle division by zero
function divide(a, b) {
    return a / b;
}

/**
 * Calculate factorial of n
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Missing JSDoc
function power(base, exp) {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

// TEST: Function without JSDoc - CodeRabbit should catch this
function squareRoot(n) {
    return Math.sqrt(n);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    factorial,
    power,
    squareRoot
};
