const secInMinute = 60;
const secInHour = 60 * secInMinute;
const secInDay = 24 * secInHour;

const withLeadingZero = (n: number): string => {
    return String(n).padStart(2, '0');
};

export const formatCountdown = (ms: number | undefined): string => {
    if (typeof ms !== 'number') return '-- : -- : -- : --';
    if (ms < 0) return 'LAUNCHED';

    const timeSec = Math.floor(ms / 1000);
    const days = withLeadingZero(Math.floor(timeSec / secInDay));
    const hours = withLeadingZero(Math.floor((timeSec % secInDay) / secInHour));
    const minutes = withLeadingZero(Math.floor((timeSec % secInHour) / secInMinute));
    const seconds = withLeadingZero(Math.floor(timeSec % secInMinute));

    return `${days} : ${hours} : ${minutes} : ${seconds}`;
};
