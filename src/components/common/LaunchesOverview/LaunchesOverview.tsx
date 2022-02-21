import { Box, Grid, Typography } from '@mui/material';
import LaunchCard from './LaunchCard';
import styles from './LaunchesOverview.styles';

const LaunchesOverview = () => {
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
                {new Array(6).fill('').map((card, idx) => (
                    <Grid item xs={12} sm={8} md={6} key={idx}>
                        <LaunchCard />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LaunchesOverview;
