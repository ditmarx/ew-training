import { Box, Button, Stack, Typography } from "@mui/material";
import styles from './HomeHero.styles';

const HomeHero = () => {
    return (
        <Box sx={styles.box} component="section">
            <Stack
                sx={styles.stack}
                justifyContent="center"
                alignItems="flex-start"
                spacing={4}
            >
                <Typography variant="h1">
                    Upcoming Spacecraft&nbsp;Launches
                </Typography>
                <Typography variant="body2" sx={styles.typoDescription}>
                    View all launches available - including launches from the past and utilize powerful search filters.
                </Typography>
                <Button variant="contained">
                    Show All Launches
                </Button>
            </Stack>
        </Box>
    );
};

export default HomeHero;
