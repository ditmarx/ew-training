import dayjs from "dayjs";
import durationPlugin from "dayjs/plugin/duration";

dayjs.extend(durationPlugin);

const withLeadingZero = (n: number): string => {
    return Math.floor(n).toString().padStart(2, '0');
};

export const formatCountdown = (ms: number | undefined): string => {
    if (typeof ms !== 'number') return '-- : -- : -- : --';
    if (ms < 0) return 'LAUNCHED';

    const duration = dayjs.duration(ms);
    const days = withLeadingZero(duration.asDays());
    const time = duration.format(' : HH : mm : ss');

    return days + time;
};
