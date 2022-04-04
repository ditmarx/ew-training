import { Box, Typography } from '@mui/material';
import { Button } from 'src/components/ui';
import { HeroSection } from 'src/components/containers';
import heroImage from 'src/assets/hero-home.png';
import styles from './HomeHero.styles';

const HomeHero = () => {
    return (
        <HeroSection imgUrl={heroImage}>
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
        </HeroSection>
    );
};

export default HomeHero;
