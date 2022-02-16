import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    spacing: 10,
    palette: {
        background: {
            default: '#181B48'
        },
        text: {
            primary: '#F1EBFF',
            secondary: '#C0C0C0',
        }
    },
    typography: {
        fontFamily: '"Montserrat", sans-serif',
        h1: {
            fontSize: '76px',
            fontWeight: 800,
            lineHeight: '96px',
        },
        body1: {
            fontSize: '26px',
            fontWeight: 600,
            lineHeight: '38px',
        },
        body2: {
            fontFamily: '"Roboto", sans-serif',
            fontSize: '17px',
            fontWeight: 400,
            lineHeight: '28px',
            color: '#C0C0C0',
        },
        button: {
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: '20px',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    padding: '30px 80px',
                    borderRadius: '40px',
                    background: 'linear-gradient(90deg, #8E2DE2 9%, #4A00E0 86%);'
                    // fontSize: '2rem',
                },
            },
        },
    }
});

export default theme;
