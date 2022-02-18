import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './LaunchCard.styles';

const LaunchCard = () => {
    return (
        <Card variant="outlined" sx={styles.card}>
            <CardMedia
                component="img"
                height="264"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt=""
                sx={styles.image}
            />
            <CardContent sx={styles.content}>
                <Typography
                    variant="caption"
                    component="div"
                    sx={styles.date}
                >
                    Dec. 6, 2020, 6:17 p.m.
                </Typography>
                <Typography
                    variant="body1"
                    sx={styles.title}
                >
                    Long March 3B/E | Gaofen 14
                </Typography>
            </CardContent>
        </Card>
    );
};

export default LaunchCard;
