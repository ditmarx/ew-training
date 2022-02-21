import ArrowIcon from '../ArrowIcon';
import { Box, Typography } from "@mui/material";
import styles from './BackToHome.styles';

const BackToHome = () => {
    return (
        <Box sx={styles.box}>
            <ArrowIcon
                direction="left"
                width={28}
            />
            <Typography
                variant="body1_600"
                sx={styles.text}
            >
                Back To Home
            </Typography>
        </Box>
    );
};

export default BackToHome;
