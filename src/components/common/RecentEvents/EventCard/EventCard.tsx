import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Chip } from 'src/components/ui';
import EventCardSkeleton from './EventCardSkeleton';
import { ReactComponent as NoImgLogo } from 'src/assets/loader.svg';
import { showDateTime } from 'src/utils/helper';
import styles from './EventCard.styles';
import EventCardProps from './EventCard.types';

const EventCard: FC<EventCardProps> = ({ event }) => {
    const navigate = useNavigate();

    if (!event) return <EventCardSkeleton />;

    const navToEventPage = () => navigate(`/event/${event.id}`);

    return (
        <Box sx={styles.cardBox}>
            {!event.feature_image ? (
                <Box
                    sx={styles.cardNoImage}
                    onClick={navToEventPage}
                >
                    <NoImgLogo height="50%" />
                </Box>
            ) : (
                <Box
                    component="img"
                    src={event.feature_image}
                    alt=""
                    loading="lazy"
                    onClick={navToEventPage}
                    sx={styles.cardImage}
                />
            )}
            <Chip sx={styles.cardDate}>
                {showDateTime(event.date)}
            </Chip>
            <Typography
                variant="body1_700"
                onClick={navToEventPage}
                sx={styles.cardText}
            >
                {event.name}
            </Typography>
        </Box>
    );
};

export default EventCard;
