import { Box, Typography } from '@mui/material';
import { Button } from 'src/components/ui';
import styles from './HomeHero.styles';

const HomeHero = () => {
    return (
        <Box sx={styles.container}>
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
    );
};

export default HomeHero;
