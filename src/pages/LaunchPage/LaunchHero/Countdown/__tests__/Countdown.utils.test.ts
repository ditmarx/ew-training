import {
    withLeadingZero,
    formatCountdown,
} from "../Countdown.utils";

describe('test "withLeadingZero" function', () => {
    test('should return stringified numbers with at least 2 digits (leading zero)', () => {
        // integers
        expect(withLeadingZero(127)).toBe('127');
        expect(withLeadingZero(59)).toBe('59');
        expect(withLeadingZero(5)).toBe('05');
        expect(withLeadingZero(0)).toBe('00');
        expect(withLeadingZero(-5)).toBe('-5');
        expect(withLeadingZero(-124)).toBe('-124');

        // floating point
        expect(withLeadingZero(12345.6789)).toBe('12345');
        expect(withLeadingZero(1.23456)).toBe('01');

        // floating point (exponential)
        expect(withLeadingZero(1.23e2)).toBe('123');
        expect(withLeadingZero(1.23e-2)).toBe('00');

        // strings
        expect(withLeadingZero('5')).toBe('05');
        expect(withLeadingZero('-5')).toBe('-5');
        expect(withLeadingZero('AA')).toBe('NaN');
        expect(withLeadingZero('null')).toBe('NaN');

        // undefined, null
        expect(withLeadingZero()).toBe('NaN');
        expect(withLeadingZero(null)).toBe('00');
    });
});

describe('test "formatCountdown" function', () => {
    test('should return dashes if input is not a number', () => {
        const dashes = '-- : -- : -- : --';
        const inputs = [
            undefined,
            null,
            true,
            false,
            NaN,
            'string',
            {},
            [],
        ];
        inputs.forEach((input) => {
            expect(formatCountdown(input)).toBe(dashes);
        });
    });

    test('should return "LAUNCHED" if input is negative', () => {
        const launched = 'LAUNCHED';
        const inputs = [
            -0.123456,
            -1,
            -12345,
            -Infinity,
        ];
        inputs.forEach((input) => {
            expect(formatCountdown(input)).toBe(launched);
        });
    });

    test('should return formatted string for non-negative inputs', () => {
        const minutes = 60;
        const hours = 60 * minutes;
        const days = 24 * hours;

        const assertions = [
            {
                input: 0,
                output: '00 : 00 : 00 : 00',
            },
            {
                input: 59,
                output: '00 : 00 : 00 : 59',
            },
            {
                input: 60,
                output: '00 : 00 : 01 : 00',
            },
            {
                input: 60 * minutes - 1,
                output: '00 : 00 : 59 : 59',
            },
            {
                input: 60 * minutes,
                output: '00 : 01 : 00 : 00',
            },
            {
                input: 24 * hours - 59,
                output: '00 : 23 : 59 : 01',
            },
            {
                input: 24 * hours,
                output: '01 : 00 : 00 : 00',
            },
            {
                input: 66 * days + 20 * hours + 2 * minutes + 8,
                output: '66 : 20 : 02 : 08',
            },
            {
                input: 365 * days + 5 * hours + 26 * minutes + 59,
                output: '365 : 05 : 26 : 59',
            },
        ]
        assertions.forEach(({ input, output }) => {
            expect(formatCountdown(input)).toBe(output);
        });
    });
});
