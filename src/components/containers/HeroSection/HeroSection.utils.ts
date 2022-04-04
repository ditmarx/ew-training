import { SxProps, Theme } from "@mui/material";

export const getStyleHeroImage = (
    boxStyle: SxProps<Theme>,
    imgUrl?: string | null
): SxProps<Theme> => {
    if (imgUrl) {
        return {
            ...boxStyle,
            background: 'linear-gradient(to bottom, rgba(24, 27, 72, 0.5), rgba(24, 27, 72, 1))'
                    + ' center / auto 100% no-repeat'
                    + `, url(${imgUrl})`
                    + ' top center / cover no-repeat'
        };
    };
    return boxStyle;
};
