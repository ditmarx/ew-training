import dayjs from "dayjs";
import durationPlugin from "dayjs/plugin/duration";

dayjs.extend(durationPlugin);

const withLeadingZero = (n: number): string => {
    return Math.floor(n).toString().padStart(2, '0');
};

export const formatCountdown = (sec?: number): string => {
    if (typeof sec !== 'number') return '-- : -- : -- : --';
    if (sec < 0) return 'LAUNCHED';

    const duration = dayjs.duration({ seconds: sec });
    const days = withLeadingZero(duration.asDays());
    const time = duration.format(' : HH : mm : ss');

    return days + time;
};
