import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Chip from '../../../ui/Chip';
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
                <Chip
                    gradient
                    sx={styles.chip}
                >
                    Dec. 6, 2020, 6:17 p.m.
                </Chip>
                <Typography
                    variant="body1_700"
                    sx={styles.title}
                >
                    Long March 3B/E | Gaofen 14
                </Typography>
            </CardContent>
        </Card>
    );
};

export default LaunchCard;
