import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Chip from '../../../ui/Chip';
import styles from './EventCard.styles';
import EventCardProps from './EventCard.types';

const EventCard: FC<EventCardProps> = ({ text }) => {
    const navigate = useNavigate();
    const navToEventPage = () => navigate('/event');

    return (
        <Card
            variant="outlined"
            sx={styles.card}
        >
            <CardMedia
                component="img"
                height="264"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt=""
                onClick={navToEventPage}
                sx={{ '&:hover': { cursor: 'pointer' } }}
            />
            <CardContent sx={styles.content}>
                <Chip sx={styles.chip}>
                    {text}
                </Chip>
                <Typography
                    variant="body1"
                    onClick={navToEventPage}
                    sx={{ '&:hover': { cursor: 'pointer' } }}
                >
                    Falcon 9 Block 5 | Dragon CRS-2 SpX-21
                </Typography>
            </CardContent>
        </Card>
    );
};

export default EventCard;
