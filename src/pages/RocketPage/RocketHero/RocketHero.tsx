import { Box, Typography } from '@mui/material';
import styles from './RocketHero.styles';

const RocketHero = () => {
    return (
        <Box
            component="section"
            sx={styles.outerBox}
        >
            <Box
                sx={styles.innerBox}
            >
                <Typography
                    variant="h1"
                    sx={styles.title}
                >
                    Falcon 9 Block 5
                </Typography>
                <Typography
                    variant="body1"
                    sx={styles.company}
                >
                    SpaceX (SpX)
                </Typography>
                <Typography
                    variant="body1_800"
                    sx={styles.date}
                >
                    May 11, 2018
                </Typography>
                <Typography
                    variant="body2"
                    sx={styles.text}
                >
                    Falcon 9 is a two-stage rocket designed and manufactured by SpaceX
                    for the reliable and safe transport of satellites and the Dragon
                    spacecraft into orbit. The Block 5 variant is the fifth major
                    interval aimed at improving upon the ability for rapid reusability.
                </Typography>
            </Box>
        </Box>
    );
};

export default RocketHero;
