import { FC } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import styles from './EventCard.styles';
import EventCardProps from './EventCard.types';

const EventCard: FC<EventCardProps> = ({ text }) => {
    return (
        <Card variant="outlined" sx={styles.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="264"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt=""
                />
                <CardContent sx={styles.content}>
                    <Typography variant="caption" component="div" sx={styles.date}>
                        {/* Dec. 6, 2020, 6:17 p.m. */}
                        { text }
                    </Typography>
                    <Typography variant="body1">
                        Falcon 9 Block 5 | Dragon CRS-2 SpX-21
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default EventCard;
