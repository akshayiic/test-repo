/**
 * PR #4: PERFORMANCE & OPTIMIZATION ISSUES
 * Category: Medium Errors
 * Severity: 🟡 Medium to High
 *
 * This file contains performance issues and inefficient code
 * to test optimization detection and performance analysis.
 */

// ============================================
// BUG #1: N+1 Query Problem
// Severity: High
// ============================================

function getUserOrdersWithItems(users) {
    const results = [];
    for (let user of users) {
        // Query inside loop - N+1 problem
        const orders = database.query('SELECT * FROM orders WHERE user_id = ?', user.id);

        for (let order of orders) {
            // Another query inside nested loop
            const items = database.query('SELECT * FROM items WHERE order_id = ?', order.id);
            order.items = items;
        }

        user.orders = orders;
        results.push(user);
    }
    return results;
}

// ============================================
// BUG #2: Inefficient Loop
// Severity: Medium
// ============================================

function findDuplicates(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // O(n²) complexity - could use Set
            if (arr[i] === arr[j]) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}

// ============================================
// BUG #3: Repeated DOM Manipulation
// Severity: Medium
// ============================================

function updateList(items) {
    const list = document.getElementById('list');
    for (let item of items) {
        // DOM manipulation inside loop - very slow
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    }
}

// ============================================
// BUG #4: Synchronous Operations in Loop
// Severity: High
// ============================================

function processFiles(filepaths) {
    const results = [];
    for (let path of filepaths) {
        // Synchronous file read in loop - blocks
        const content = fs.readFileSync(path, 'utf8');
        results.push(content.toUpperCase());
    }
    return results;
}

// ============================================
// BUG #5: Unnecessary Recalculations
// Severity: Medium
// ============================================

function calculateStats(numbers) {
    const stats = [];

    for (let i = 0; i < numbers.length; i++) {
        // Calculating length in every iteration
        const average = sum(numbers) / numbers.length;

        const deviation = numbers[i] - average;
        stats.push(deviation);
    }

    return stats;
}

// ============================================
// BUG #6: String Concatenation in Loop
// Severity: Medium
// ============================================

function buildLargeString(items) {
    let result = '';
    for (let item of items) {
        // String concatenation in loop - inefficient
        result += item + ', ';
    }
    return result;
}

// ============================================
// BUG #7: Creating Objects Inside Loop
// Severity: Medium
// ============================================

function processArray(items) {
    const results = [];
    for (let item of items) {
        // Creating new regex object in every iteration
        const regex = new RegExp('\\d+', 'g');
        const matches = item.match(regex);
        results.push(matches);
    }
    return results;
}

// ============================================
// BUG #8: Not Using Array Methods
// Severity: Low
// ============================================

function doubleAllNumbers(numbers) {
    const doubled = [];
    for (let i = 0; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2);
    }
    return doubled;
    // Could use: numbers.map(n => n * 2)
}

function filterPositive(numbers) {
    const positive = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positive.push(numbers[i]);
        }
    }
    return positive;
    // Could use: numbers.filter(n => n > 0)
}

// ============================================
// BUG #9: Unnecessary Function Calls
// Severity: Medium
// ============================================

function processList(items) {
    const results = [];

    for (let i = 0; i < items.length; i++) {
        // Calling function repeatedly with same arguments
        const processed = heavyComputation(items[i]);
        const validated = validate(processed);

        if (isValid(processed)) {
            results.push(processed);
        }
    }

    return results;
}

// ============================================
// BUG #10: Large Memory Allocations
// Severity: Medium
// ============================================

function generateHugeReport() {
    const report = [];

    for (let i = 0; i < 1000000; i++) {
        // Creating million objects - memory intensive
        report.push({
            id: i,
            data: generateRandomData(),
            timestamp: Date.now()
        });
    }

    return report;
}

// ============================================
// BUG #11: Blocking Main Thread
// Severity: High
// ============================================

function heavyComputation(data) {
    // Long-running synchronous operation
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
        result += Math.sqrt(i);
    }
    return result;
}

// ============================================
// BUG #12: Inefficient Algorithm
// Severity: High
// ============================================

function fibonacci(n) {
    // Exponential time complexity - very slow
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// ============================================
// BUG #13: Missing Memoization
// Severity: Medium
// ============================================

function calculateExpensive(x) {
    // Expensive calculation called repeatedly
    let result = 0;
    for (let i = 0; i < 10000; i++) {
        result += Math.pow(x, i);
    }
    return result;
}

function processNumbers(numbers) {
    return numbers.map(n => calculateExpensive(n));
    // Same values recalculated multiple times
}

// ============================================
// BUG #14: Unnecessary Database Queries
// Severity: High
// ============================================

function getUsersWithPosts(userIds) {
    const users = [];

    for (let id of userIds) {
        // Individual queries instead of batch
        const user = database.getUser(id);
        const posts = database.getPosts(id);
        user.posts = posts;
        users.push(user);
    }

    return users;
}

// ============================================
// BUG #15: Not Using Caching
// Severity: Medium
// ============================================

function getConfigValue(key) {
    // Reading config file every time - should cache
    const config = fs.readFileSync('config.json', 'utf8');
    const parsed = JSON.parse(config);
    return parsed[key];
}

function getSettings() {
    // No caching - reads file every call
    return getConfigValue('settings');
}

// ============================================
// BUG #16: Premature Optimization
// Severity: Low
// ============================================

function addTwoNumbers(a, b) {
    // Unnecessary optimization for simple operation
    const cache = new Map();
    const key = `${a},${b}`;

    if (cache.has(key)) {
        return cache.get(key);
    }

    const result = a + b;
    cache.set(key, result);
    return result;
}

// ============================================
// BUG #17: Redundant Calculations
// Severity: Medium
// ============================================

function processDataPoints(points) {
    const processed = [];

    for (let point of points) {
        // Calculating same values multiple times
        const x = point.x * 2 + 10;
        const y = point.y * 2 + 10;
        const z = point.z * 2 + 10;

        const distance1 = Math.sqrt(x * x + y * y + z * z);
        const distance2 = Math.sqrt(x * x + y * y + z * z);
        const distance3 = Math.sqrt(x * x + y * y + z * z);

        processed.push({ distance1, distance2, distance3 });
    }

    return processed;
}

// ============================================
// BUG #18: Inefficient String Operations
// Severity: Medium
// ============================================

function countOccurrences(text, word) {
    let count = 0;
    let position = 0;

    while (position !== -1) {
        position = text.indexOf(word, position);
        if (position !== -1) {
            count++;
            position += word.length;
        }
    }

    return count;
    // Could use regex: (text.match(new RegExp(word, 'g')) || []).length
}

// ============================================
// BUG #19: Not Debouncing Input
// Severity: Medium
// ============================================

function searchInputHandler(input) {
    // No debouncing - fires on every keystroke
    const results = fetchSearchResults(input);
    updateUI(results);
}

// ============================================
// BUG #20: Memory Leaks
// Severity: High
// ============================================

function cacheData() {
    const cache = {};

    setInterval(() => {
        const newData = fetchLatestData();
        // Adding to cache without cleanup
        cache[Date.now()] = newData;
    }, 1000);

    // Cache grows forever - memory leak
}

function attachEventListeners() {
    const elements = document.querySelectorAll('.item');

    elements.forEach(element => {
        element.addEventListener('click', () => {
            // Event listeners never removed
            console.log('Clicked');
        });
    });

    // Creating new elements without removing old listeners
}

module.exports = {
    getUserOrdersWithItems,
    findDuplicates,
    updateList,
    processFiles,
    calculateStats,
    buildLargeString,
    processArray,
    doubleAllNumbers,
    filterPositive,
    processList,
    generateHugeReport,
    heavyComputation,
    fibonacci,
    calculateExpensive,
    processNumbers,
    getUsersWithPosts,
    getConfigValue,
    getSettings,
    addTwoNumbers,
    processDataPoints,
    countOccurrences,
    searchInputHandler,
    cacheData,
    attachEventListeners
};
