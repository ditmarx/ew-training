import { createTheme } from '@mui/material/styles';
import { pixelsToRems } from 'src/utils/helper';

const theme = createTheme({
    spacing: 10,
    shape: {
        borderRadius: 10,
    },
    palette: {
        background: {
            default: '#181B48'
        },
        text: {
            primary: '#F1EBFF',
            secondary: '#C0C0C0',
        },
    },
    typography: {
        fontFamily: '"Montserrat", sans-serif',
        h1: {
            fontWeight: 800,
            fontSize: pixelsToRems(76),
            lineHeight: 1.21,           // = 92px/76px
        },
        h2: {
            fontWeight: 800,
            fontSize: pixelsToRems(54),
            lineHeight: 1.185,          // = 64px/54px
        },
        body1: {
            fontSize: pixelsToRems(26),
            lineHeight: 1.46,           // = 38px/26px
        },
        body2: {
            fontFamily: '"Roboto", sans-serif',
            fontWeight: 400,
            fontSize: pixelsToRems(17),
            lineHeight: 1.647,          // = 28px/17px
        },
        button: {
            fontWeight: 700,
            fontSize: pixelsToRems(20),
            lineHeight: 1,
            textTransform: 'none',
        },
        caption: {
            fontWeight: 500,
            fontStyle: 'italic',
            fontSize: pixelsToRems(18),
            lineHeight: 1,
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiCardActionArea: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    body1: 'div',
                    body2: 'div',
                    body1_600: 'div',
                    body1_700: 'div',
                    body1_800: 'div',
                    body2_700: 'div',
                    caption: 'div',
                },
            },
        },
    },
});

theme.typography.h1 = {
    ...theme.typography.h1,
    [theme.breakpoints.down('lg')]: { fontSize: pixelsToRems(64) },
    [theme.breakpoints.down('md')]: { fontSize: pixelsToRems(52) },
    [theme.breakpoints.down('sm')]: { fontSize: pixelsToRems(42) },
};

theme.typography.h2 = {
    ...theme.typography.h2,
    [theme.breakpoints.down('lg')]: { fontSize: pixelsToRems(50) },
    [theme.breakpoints.down('md')]: { fontSize: pixelsToRems(40) },
    [theme.breakpoints.down('sm')]: { fontSize: pixelsToRems(32) },
};

theme.typography.body1 = {
    ...theme.typography.body1,
    [theme.breakpoints.down('lg')]: { fontSize: pixelsToRems(24) },
    [theme.breakpoints.down('md')]: { fontSize: pixelsToRems(22) },
    [theme.breakpoints.down('sm')]: { fontSize: pixelsToRems(18) },
};

theme.typography.body2 = {
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
};

theme.typography.body1_600 = {
    ...theme.typography.body1,
    fontWeight: 600,
};

theme.typography.body1_700 = {
    ...theme.typography.body1,
    fontWeight: 700,
};

theme.typography.body1_800 = {
    ...theme.typography.body1,
    fontWeight: 800,
};

theme.typography.body2_700 = {
    ...theme.typography.body2,
    fontWeight: 700,
};

theme.typography.caption = {
    ...theme.typography.caption,
    [theme.breakpoints.down('lg')]: { fontSize: pixelsToRems(18) },
    [theme.breakpoints.down('md')]: { fontSize: pixelsToRems(16) },
    [theme.breakpoints.down('sm')]: { fontSize: pixelsToRems(15) },
};

export default theme;
