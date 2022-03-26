import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { dateFormat } from 'utils/helper';
import Chip from '../../../ui/Chip';
import styles from './EventCard.styles';
import EventCardProps from './EventCard.types';

const EventCard: FC<EventCardProps> = ({ event }) => {
    const navigate = useNavigate();
    const navToEventPage = () => navigate(`/event/${event.id}`);

    return (
        <Card
            variant="outlined"
            sx={styles.card}
        >
            <CardMedia
                component="img"
                height="264"
                image={event.imgUrl}
                alt=""
                loading="lazy"
                onClick={navToEventPage}
                sx={styles.pointerHover}
            />
            <CardContent sx={styles.content}>
                <Chip sx={styles.chip}>
                    {dayjs(event.date).format(dateFormat)}
                </Chip>
                <Typography
                    variant="body1_700"
                    onClick={navToEventPage}
                    sx={styles.pointerHover}
                >
                    {event.title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default EventCard;
