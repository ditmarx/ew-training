import { alpha } from "@mui/material";

const styles = {
    box: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: -1,
        paddingX: 1,
        height: '100%',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: alpha('#000', 0.05),
        },
        '& > svg': {
            flexShrink: 0,
        },
    },
    text: {
        paddingLeft: 1,
    },
};

export default styles;
