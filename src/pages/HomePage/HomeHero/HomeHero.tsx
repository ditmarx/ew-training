import { Box, Typography } from '@mui/material';
import Button from '../../../components/ui/Button';
import styles from './HomeHero.styles';

const HomeHero = () => {
    return (
        <Box
            component="section"
            sx={styles.outerBox}
        >
            <Box sx={styles.innerBox}>
                <Typography variant="h1">
                    Upcoming
                    <br />
                    Spaceflight Launches
                </Typography>
                <Typography
                    variant="body2"
                    sx={styles.textDescription}
                >
                    View all launches available - including launches from
                    the past and utilize powerful search filters.
                </Typography>
                <Button variant="contained">
                    Show All Launches
                </Button>
            </Box>
        </Box>
    );
};

export default HomeHero;
