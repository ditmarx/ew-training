import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Countdown from '../Countdown';
import styles from './LaunchHero.styles';
import LaunchHeroProps from './LaunchHero.types';

const LaunchHero: FC<LaunchHeroProps> = ({ launch }) => {
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
                    {launch.title}
                </Typography>
                <Typography
                    variant="body1_700"
                    sx={styles.text}
                >
                    Go for Launch
                </Typography>
                <Countdown
                    date={launch.date}
                    sx={styles.countdown}
                />
            </Box>
        </Box>
    );
};

export default LaunchHero;
