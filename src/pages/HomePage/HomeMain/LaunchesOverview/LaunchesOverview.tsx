import { useMemo } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useGetUpcomingLaunchesQuery } from 'src/api/launches';
import { createArrayOfUndef } from 'src/utils/helper';
import LaunchCard from './LaunchCard';
import styles from './LaunchesOverview.styles';

const LaunchesOverview = () => {
    const dummyLaunches = useMemo(() => createArrayOfUndef(4), []);
    const { data: fetchedLaunches } = useGetUpcomingLaunchesQuery(0);

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
                {(fetchedLaunches ?? dummyLaunches).map((launch, idx) => (
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={6}
                        key={launch?.id ?? idx}
                    >
                        <LaunchCard launch={launch}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LaunchesOverview;
