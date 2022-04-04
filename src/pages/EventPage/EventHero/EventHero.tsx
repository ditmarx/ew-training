import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { showDateTime } from 'src/utils/helper';
import { Button, Chip } from 'src/components/ui';
import { HeroSection } from 'src/components/containers';
import styles from './EventHero.styles';
import EventHeroProps from './EventHero.types';

const EventHero: FC<EventHeroProps> = ({ event }) => {
    if (!event) return null;
    return (
        <HeroSection imgUrl={event.feature_image}>
            <Box sx={styles.container}>
                <Typography
                    variant="h1"
                    sx={styles.title}
                >
                    {event.name}
                </Typography>
                <Chip sx={styles.chip}>
                    {showDateTime(event.date)}
                </Chip>
                <Typography
                    variant="body2"
                    sx={styles.text}
                >
                    {event.description}
                </Typography>
                <Button variant="contained">
                    Read On Site
                </Button>
            </Box>
        </HeroSection>
    );
};

export default EventHero;
