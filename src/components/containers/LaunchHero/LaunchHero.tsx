import { Box, Typography } from '@mui/material';
import Countdown from '../../common/Countdown';
import styles from './LaunchHero.styles';

const LaunchHero = () => {
    const dateMock = Number(new Date()) + 10000;

    return (
        <Box
            component="section"
            sx={styles.outerBox}
        >
            <Box sx={styles.innerBox}>
                <Typography
                    variant="h1"
                    sx={styles.title}
                >
                    Falcon 9 Block 5 | Dragon CRS-2 SpX-21
                </Typography>
                <Typography
                    variant="body1_700"
                    sx={styles.text}
                >
                    Go for Launch
                </Typography>
                <Countdown
                    date={dateMock}
                    sx={styles.countdown}
                />
            </Box>
        </Box>
    );
};

export default LaunchHero;
