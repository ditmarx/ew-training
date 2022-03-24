import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Chip from '../../../ui/Chip';
import styles from './EventCard.styles';
import EventCardProps from './EventCard.types';

const EventCard: FC<EventCardProps> = ({ data }) => {
    const navigate = useNavigate();
    const navToEventPage = () => navigate(`/event/${data.id}`);

    return (
        <Card
            variant="outlined"
            sx={styles.card}
        >
            <CardMedia
                component="img"
                height="264"
                image={data.imgUrl}
                alt=""
                loading="lazy"
                onClick={navToEventPage}
                sx={{ '&:hover': { cursor: 'pointer' } }}
            />
            <CardContent sx={styles.content}>
                <Chip sx={styles.chip}>
                    {data.date}
                </Chip>
                <Typography
                    variant="body1_700"
                    onClick={navToEventPage}
                    sx={{ '&:hover': { cursor: 'pointer' } }}
                >
                    {data.title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default EventCard;
