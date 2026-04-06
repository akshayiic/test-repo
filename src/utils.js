/**
 * Utility functions for testing
 */

// Function without JSDoc
function formatDate(date) {
    return date.toISOString();
}

/**
 * Calculate percentage
 * @param {number} value
 * @param {number} total
 * @returns {number}
 */
function calculatePercentage(value, total) {
    return (value / total) * 100;
}

// TODO: Add error handling
function parseJSON(jsonString) {
    return JSON.parse(jsonString);
}

// Unused variable
const CONFIG = {
    apiUrl: 'https://api.example.com',
    timeout: 5000
};

module.exports = {
    formatDate,
    calculatePercentage,
    parseJSON
};
