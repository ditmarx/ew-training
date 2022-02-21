import { useNavigate } from 'react-router-dom';
import { Box, Typography } from "@mui/material";
import ArrowIcon from '../ArrowIcon';
import styles from './BackToHome.styles';

const BackToHome = () => {
    const navTo = useNavigate();
    const navToHome = () => navTo('/');

    return (
        <Box
            sx={styles.box}
            onClick={navToHome}
        >
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
