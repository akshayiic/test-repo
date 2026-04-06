/**
 * PR #1: CRITICAL SECURITY ISSUES
 * Category: Major Errors
 * Severity: 🔴 Critical
 *
 * This file contains intentional security vulnerabilities to test
 * both Greptile and CodeRabbit's security detection capabilities.
 */

// ============================================
// BUG #1: Hardcoded API Keys
// Severity: Critical
// ============================================

function connectToPaymentGateway() {
    const apiKey = "fake_test_key_12345abcdef"; // Fake test key for testing
    const apiSecret = "fake_secret_key_67890ghijklmnop"; // Fake secret for testing

    // Direct API call with hardcoded credentials
    fetch('https://api.payment-gateway.com/charge', {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'X-API-Secret': apiSecret
        }
    });
}

// ============================================
// BUG #2: SQL Injection Vulnerability
// Severity: Critical
// ============================================

function getUserLogin(username, password) {
    // Direct string concatenation - SQL injection risk
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    return database.execute(query);
}

function searchProducts(searchTerm) {
    // Another SQL injection vector
    const sql = `SELECT * FROM products WHERE name LIKE '%${searchTerm}%'`;
    return database.query(sql);
}

// ============================================
// BUG #3: XSS (Cross-Site Scripting) Vulnerability
// Severity: Critical
// ============================================

function renderUserComment(comment) {
    // Directly rendering user input without sanitization
    const commentHTML = `<div class="comment">${comment}</div>`;
    document.getElementById('comments').innerHTML = commentHTML;
}

function displayUserName(name) {
    // XSS vulnerability via innerHTML
    const element = document.getElementById('username');
    element.innerHTML = name; // User input directly rendered
}

// ============================================
// BUG #4: Insecure Random Number Generation
// Severity: High
// ============================================

function generateSessionToken() {
    // Using Math.random() for security-sensitive data
    const token = Math.random().toString(36).substring(2);
    return token;
}

function generateResetCode() {
    // Predictable random for password reset
    const code = Math.floor(Math.random() * 1000000);
    return code.toString().padStart(6, '0');
}

// ============================================
// BUG #5: Hardcoded Database Credentials
// Severity: Critical
// ============================================

function connectToDatabase() {
    const dbConfig = {
        host: 'production-db.example.com',
        username: 'admin',
        password: 'FAKE_PASSWORD_FOR_TESTING_123', // Fake password for testing
        database: 'customer_data'
    };

    // Connection with hardcoded credentials
    const connection = mysql.createConnection(dbConfig);
    return connection;
}

// ============================================
// BUG #6: Sensitive Data in Console Logs
// Severity: High
// ============================================

function processPayment(cardNumber, cvv, expiry) {
    // Logging sensitive payment information
    console.log('Processing payment:', {
        cardNumber: cardNumber,
        cvv: cvv,
        expiry: expiry
    });

    // Payment processing logic
    return processCharge(cardNumber, cvv, expiry);
}

// ============================================
// BUG #7: Weak Password Handling
// Severity: High
// ============================================

function hashPassword(password) {
    // Using MD5 for password hashing (insecure)
    const crypto = require('crypto');
    const hash = crypto.createHash('md5').update(password).digest('hex');
    return hash;
}

function verifyPassword(password, hash) {
    // No salting, weak algorithm
    const crypto = require('crypto');
    const newHash = crypto.createHash('md5').update(password).digest('hex');
    return newHash === hash;
}

// ============================================
// BUG #8: Insecure Deserialization
// Severity: Critical
// ============================================

function parseUserData(data) {
    // Unsafe deserialization of user input
    const userObject = JSON.parse(data);
    return userObject;
}

function executeFromInput(input) {
    // Using eval() on user input (extremely dangerous)
    const result = eval(input);
    return result;
}

// ============================================
// BUG #9: Path Traversal Vulnerability
// Severity: Critical
// ============================================

function getUserFile(filename) {
    const fs = require('fs');
    // No validation of filename - path traversal risk
    const filePath = `/var/www/uploads/${filename}`;
    return fs.readFileSync(filePath);
}

function serveStaticFile(resource) {
    // Path traversal via ../
    const path = `/public/${resource}`;
    return sendFile(path);
}

// ============================================
// BUG #10: Sensitive Data in URL
// Severity: High
// ============================================

function resetUserPassword(email) {
    const resetToken = generateResetCode();
    // Sending sensitive token in URL (can be logged)
    const resetLink = `https://example.com/reset?token=${resetToken}&email=${email}`;
    sendEmail(email, `Reset password: ${resetLink}`);
}

function authenticateUser(token) {
    // Token in URL - visible in logs/history
    return verifyToken(token);
}

// ============================================
// BUG #11: No HTTPS Enforcement
// Severity: Medium
// ============================================

function redirectToLogin() {
    // Redirecting to HTTP instead of HTTPS
    window.location.href = 'http://example.com/login';
}

function makeAPICall(data) {
    // Insecure HTTP endpoint
    fetch('http://api.example.com/user', {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

// ============================================
// BUG #12: Missing Rate Limiting
// Severity: Medium
// ============================================

function loginAttempt(username, password) {
    // No rate limiting on login - brute force risk
    const user = authenticate(username, password);
    if (user) {
        return createSession(user);
    }
    return { error: 'Invalid credentials' };
}

// ============================================
// BUG #13: Exposed Internal Error Messages
// Severity: Medium
// ============================================

function getUserData(userId) {
    try {
        const data = database.query(`SELECT * FROM users WHERE id = ${userId}`);
        return data;
    } catch (error) {
        // Exposing internal database errors to user
        return {
            error: error.message,
            stack: error.stack,
            query: error.sql
        };
    }
}

// ============================================
// BUG #14: Insecure Session Management
// Severity: High
// ============================================

function createSession(userId) {
    // Predictable session ID
    const sessionId = `session_${userId}_${Date.now()}`;
    return sessionId;
}

function validateSession(sessionId) {
    // No session timeout or validation
    const parts = sessionId.split('_');
    return {
        userId: parts[1],
        timestamp: parts[2]
    };
}

// ============================================
// BUG #15: CORS Misconfiguration
// Severity: Medium
// ============================================

function enableCORS() {
    // Allowing all origins
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Credentials': 'true'
    };
    return corsHeaders;
}

module.exports = {
    connectToPaymentGateway,
    getUserLogin,
    searchProducts,
    renderUserComment,
    displayUserName,
    generateSessionToken,
    generateResetCode,
    connectToDatabase,
    processPayment,
    hashPassword,
    verifyPassword,
    parseUserData,
    executeFromInput,
    getUserFile,
    serveStaticFile,
    resetUserPassword,
    authenticateUser,
    redirectToLogin,
    makeAPICall,
    loginAttempt,
    getUserData,
    createSession,
    validateSession,
    enableCORS
};
