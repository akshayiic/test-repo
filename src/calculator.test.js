const {
    add,
    subtract,
    multiply,
    divide,
    factorial,
    power
} = require('./calculator');

describe('Calculator', () => {
    describe('add', () => {
        test('should add two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('should add negative numbers', () => {
            expect(add(-2, -3)).toBe(-5);
        });

        test('should add decimal numbers', () => {
            expect(add(2.5, 3.5)).toBe(6);
        });
    });

    describe('subtract', () => {
        test('should subtract two numbers', () => {
            expect(subtract(5, 3)).toBe(2);
        });

        test('should handle negative results', () => {
            expect(subtract(3, 5)).toBe(-2);
        });
    });

    describe('multiply', () => {
        test('should multiply two numbers', () => {
            expect(multiply(3, 4)).toBe(12);
        });

        test('should multiply by zero', () => {
            expect(multiply(5, 0)).toBe(0);
        });
    });

    describe('divide', () => {
        test('should divide two numbers', () => {
            expect(divide(10, 2)).toBe(5);
        });

        test('should handle decimal results', () => {
            expect(divide(5, 2)).toBe(2.5);
        });

        // TEST: Expose division by zero issue - CodeRabbit should catch this
        test('should throw error for division by zero', () => {
            expect(() => divide(10, 0)).toThrow();
            expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
        });
    });

    describe('factorial', () => {
        test('should calculate factorial of 0', () => {
            expect(factorial(0)).toBe(1);
        });

        test('should calculate factorial of 5', () => {
            expect(factorial(5)).toBe(120);
        });

        test('should calculate factorial of 1', () => {
            expect(factorial(1)).toBe(1);
        });
    });

    describe('power', () => {
        test('should calculate power of base and exponent', () => {
            expect(power(2, 3)).toBe(8);
        });

        test('should handle exponent of 0', () => {
            expect(power(5, 0)).toBe(1);
        });
    });
});
