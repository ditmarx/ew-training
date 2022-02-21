import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        body1_600: CSSProperties;
        body1_700: CSSProperties;
        body1_800: CSSProperties;
        body2_700: CSSProperties;
    }
    interface TypographyVariantsOptions {
        body1_600?: CSSProperties;
        body1_700?: CSSProperties;
        body1_800?: CSSProperties;
        body2_700?: CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        body1_600: true;
        body1_700: true;
        body1_800: true;
        body2_700: true;
    }
}
