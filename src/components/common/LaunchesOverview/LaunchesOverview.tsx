import { Grid, Typography } from '@mui/material';
import LaunchCard from '../LaunchCard';
import styles from './LaunchesOverview.styles';

const LaunchesOverview = () => {
    return (
        <>
            {/* Section title */}
            <Typography
                variant="h2"
                textAlign="center"
                sx={styles.typoTitle}
            >
                Spaceflight Launches
            </Typography>

            <Grid
                container
                columnSpacing={2}
                // rowSpacing={0}
                sx={styles.grid}
            >
                {new Array(6).fill('').map((card, idx) => (
                    <Grid item xs={12} sm={12} md={6} key={idx}>
                        <LaunchCard />
                    </Grid>
                ))}
            </Grid>        
        </>
    );
};

export default LaunchesOverview;
