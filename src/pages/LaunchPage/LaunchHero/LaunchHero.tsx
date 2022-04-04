import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { HeroSection } from 'src/components/containers';
import { getLaunchImgUrl } from 'src/api/utils/getLaunchImgUrl';
import Countdown from './Countdown';
import styles from './LaunchHero.styles';
import LaunchHeroProps from './LaunchHero.types';

const LaunchHero: FC<LaunchHeroProps> = ({ launch }) => {
    return (
        <HeroSection imgUrl={getLaunchImgUrl(launch)}>
            <Box sx={styles.container}>
                <Typography
                    variant="h1"
                    sx={styles.title}
                >
                    {launch.name}
                </Typography>
                <Typography
                    variant="body1_700"
                    sx={styles.text}
                >
                    Go for Launch
                </Typography>
                <Countdown
                    date={new Date(launch.net)}
                    sx={styles.countdown}
                />
            </Box>
        </HeroSection>
    );
};

export default LaunchHero;
