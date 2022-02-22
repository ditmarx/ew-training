import { Box, Typography } from '@mui/material';
import Button from '../../../ui/Button';
import Chip from '../../../ui/Chip';
import styles from './EventHero.styles';

const HomeHero = () => {
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
                    CRS-21 Dragon Docking
                </Typography>
                <Chip sx={styles.chip}>
                    Dec. 6, 2020, 6:17 p.m.
                </Chip>
                <Typography
                    variant="body2"
                    sx={styles.text}
                >
                    Following its launch atop a Falcon 9, the CRS-21 Dragon will
                    autonomously dock to the ISS, bringing crew supplies as well
                    as experiments.
                </Typography>
                <Button variant="contained">
                    Read On Site
                </Button>
            </Box>
        </Box>
    );
};

export default HomeHero;
