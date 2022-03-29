import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { formatDateTime } from 'utils/helper';
import Button from '../../../components/ui/Button';
import Chip from '../../../components/ui/Chip';
import styles from './EventHero.styles';
import EventHeroProps from './EventHero.types';

const EventHero: FC<EventHeroProps> = ({ event }) => {
    return (
        <Box
            component="section"
            sx={styles.outerBox}
        >
            <Box sx={styles.innerBox}>
                <Typography
                    variant="h1"
                    sx={styles.title}
                >
                    {event.name}
                </Typography>
                <Chip sx={styles.chip}>
                    {dayjs(event.date).format(formatDateTime)}
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
        </Box>
    );
};

export default EventHero;
