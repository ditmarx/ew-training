import { Box, Grid, Typography } from '@mui/material';
import { useGetUpcomingLaunchesQuery } from 'api/launches';
import LaunchCard from './LaunchCard';
import styles from './LaunchesOverview.styles';

const LaunchesOverview = () => {
    const { data: launches } = useGetUpcomingLaunchesQuery(0);
    return (
        <Box>
            {/* Section title */}
            <Typography
                variant="h2"
                align="center"
                sx={styles.typoTitle}
            >
                Spaceflight Launches
            </Typography>

            {/* Cards */}
            <Grid
                container
                columnSpacing={2}
                // rowSpacing={0}
                justifyContent="center"
                sx={styles.grid}
            >
                {launches?.map((launch) => (
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={6}
                        key={launch.id}
                    >
                        <LaunchCard launch={launch}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LaunchesOverview;
