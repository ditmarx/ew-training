import { Box, Stack, Typography } from '@mui/material';
import Button from '../../components/ui/Button';
import PageLayout from '../../components/containers/PageLayout';
import RecentEvents from '../../components/common/RecentEvents';
import LaunchesOverview from '../../components/common/LaunchesOverview';
import styles from './HomePage.styles';

const HomePage = () => {
    return (
        <PageLayout home>

            {/* Hero section */}
            <Box sx={styles.hero.box} component="section">
                <Stack
                    sx={styles.hero.stack}
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={4}
                >
                    <Typography variant="h1">
                        Upcoming Spacecraft&nbsp;Launches
                    </Typography>
                    <Typography variant="body2" sx={styles.hero.typoDescription}>
                        View all launches available - including launches from
                        the past and utilize powerful search filters.
                    </Typography>
                    <Button variant="contained">
                        Show All Launches
                    </Button>
                </Stack>
            </Box>

            {/* Main content */}
            <Box sx={styles.main.box} component="section">
                <RecentEvents />
                <LaunchesOverview />
            </Box>
            
        </PageLayout>
    );
};

export default HomePage;
