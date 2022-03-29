import { useState, useEffect } from 'react';

const useCountdownTimer = (date?: Date) => {
    const [timeLeft, setTimeLeft] = useState<number>();

    useEffect(() => {
        if (date) {
            const timer = setInterval(() => {
                const diff = Number(date) - Date.now();
                setTimeLeft(diff);
                if (diff < 0) clearInterval(timer);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [date]);

    return timeLeft;
};

export default useCountdownTimer;
