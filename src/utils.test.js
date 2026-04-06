const {
    formatDate,
    calculatePercentage,
    parseJSON
} = require('./utils');

describe('Utils', () => {
    describe('formatDate', () => {
        test('should format date to ISO string', () => {
            const date = new Date('2024-01-01T00:00:00Z');
            expect(formatDate(date)).toBe('2024-01-01T00:00:00.000Z');
        });
    });

    describe('calculatePercentage', () => {
        test('should calculate percentage correctly', () => {
            expect(calculatePercentage(25, 100)).toBe(25);
        });

        test('should calculate decimal percentage', () => {
            expect(calculatePercentage(1, 3)).toBeCloseTo(33.33, 2);
        });
    });

    describe('parseJSON', () => {
        test('should parse valid JSON', () => {
            expect(parseJSON('{"key": "value"}')).toEqual({ key: 'value' });
        });

        test('should parse JSON array', () => {
            expect(parseJSON('[1, 2, 3]')).toEqual([1, 2, 3]);
        });

        // TODO: Add error handling tests
    });
});
