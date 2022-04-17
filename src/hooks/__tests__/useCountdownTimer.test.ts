import { renderHook, act } from '@testing-library/react-hooks';
import useCountdownTimer from '../useCountdownTimer';

describe('test "useCountdownTimer" custom hook', () => {
    test('should countdown seconds left to the future event', async () => {
        jest.useFakeTimers();

        // generate some date in the future, e.g. 10 seconds after now
        // to countdown time (seconds) left to this date
        const initialTimeDiff = 30;
        const date = new Date(Date.now() + initialTimeDiff * 1000);

        const { result } = renderHook(() => useCountdownTimer(date));

        // setInterval's callback is not executed yet
        // value returned from the hook (timeLeft) is undefined
        expect(result.current).toBeUndefined();

        // advance timers several times by 1 second (1000 ms)
        // to see how 'timeLeft' is decremented step-by-step down to 0
        for (let secondsPassed = 1; secondsPassed <= initialTimeDiff; secondsPassed++) {
            act(() => { jest.advanceTimersByTime(1000) });
            const expectedTimeLeft = initialTimeDiff - secondsPassed;
            expect(result.current).toBe(expectedTimeLeft);
        }

        // advance timers a few more times by 1 second (1000 ms)
        // to see how 'timeLeft' becomes negative (-1) and freezes
        for (let secondsPassed = 1; secondsPassed <= 10; secondsPassed++) {
            act(() => { jest.advanceTimersByTime(1000) });
            expect(result.current).toBe(-1);
        }

        jest.useRealTimers();
    });

    test('should return negative value for passed events', async () => {
        jest.useFakeTimers();

        // generate some date in the past, e.g. 10 seconds before now
        const initialTimeDiff = 10;
        const date = new Date(Date.now() - initialTimeDiff * 1000);

        const { result } = renderHook(() => useCountdownTimer(date));

        // setInterval's callback is not executed yet
        // value returned from the hook (timeLeft) is undefined
        expect(result.current).toBeUndefined();

        // advance timers several times by 1 second (1000 ms)
        // to see how 'timeLeft' becomes and remains negative
        const expectedTimeLeft = -(1 + initialTimeDiff);
        for (let secondsPassed = 1; secondsPassed <= 10; secondsPassed++) {
            act(() => { jest.advanceTimersByTime(1000) });
            expect(result.current).toBeLessThan(0);
            expect(result.current).toBe(expectedTimeLeft);
        }

        jest.useRealTimers();
    });

    test('should be undefined if there is no input date', async () => {
        jest.useFakeTimers();

        const { result } = renderHook(() => useCountdownTimer());

        // setInterval's callback is not executed yet
        // value returned from the hook (timeLeft) is undefined
        expect(result.current).toBeUndefined();

        // advance timers several times by 1 second (1000 ms)
        // to see that 'timeLeft' remains to be undefine
        for (let secondsPassed = 1; secondsPassed <= 30; secondsPassed++) {
            act(() => { jest.advanceTimersByTime(1000) });
            expect(result.current).toBeUndefined();
        }

        jest.useRealTimers();
    });
});