import dayjs from 'dayjs';
import { LaunchListItem } from 'src/api/launches/types';

// 16px - default value for 1 rem for medium font size in a browser settings
const ONE_REM = 16;

// actual value = 'font-size' of <html> root element
// const ONE_REM = parseFloat(window.getComputedStyle(document.documentElement).fontSize);

// convert a numeric value of pixels to a string with rem-value, e.g.:
// 16 -> '1.00rem' (when ONE_REM === 16)
export const pixelsToRems = (px: number): string => {
    return `${(px / ONE_REM).toFixed(3)}rem`;
};

export const getYoutubeIdFromUrl = (url?: string | null) => {
    const regExp = /v=(.+)$/;
    const result = url?.match(regExp);
    return result?.[1];
};

export const getLaunchMapCenter = (launch: LaunchListItem) => {
    return {
        lat: parseFloat(launch.pad.latitude),
        lng: parseFloat(launch.pad.longitude),
    };
};

export const createArrayOfUndef = (n: number): undefined[] => {
    return new Array(n).fill(undefined);
};

export const showDateTime = (date: string): string => {
    return dayjs(date).format('MMM D, YYYY, h:mm a');
};

export const showDate = (date?: string | null): string => {
    if (!date) return 'Date is Unknown';
    return dayjs(date).format('MMMM D, YYYY');
};
