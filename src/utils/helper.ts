// 16px - default value for 1 rem for medium font size in a browser settings
const ONE_REM = 16;

// actual value = 'font-size' of <html> root element
// const ONE_REM = parseFloat(window.getComputedStyle(document.documentElement).fontSize);

// convert a numeric value of pixels to a string with rem-value, e.g.:
// 16 -> '1.00rem' (when ONE_REM === 16)
export const pixelsToRems = (px: number): string => {
    return `${(px / ONE_REM).toFixed(3)}rem`;
};

export const getYoutubeIdFromUrl = (url: string) => {
    const idRegExp = /v=(.+)$/;
    const result = url?.match(idRegExp);
    return result?.[1];
};
