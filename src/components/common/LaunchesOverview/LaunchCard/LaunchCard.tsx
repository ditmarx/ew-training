import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Chip from '../../../ui/Chip';
import styles from './LaunchCard.styles';
import LaunchCardProps from './LaunchCard.types';

const LaunchCard: FC<LaunchCardProps> = ({ data }) => {
    const navigate = useNavigate();
    const navToLaunchPage = () => navigate(`/launch/${data.id}`);

    return (
        <Card variant="outlined" sx={styles.card}>
            <CardMedia
                component="img"
                height="264"
                image={data.imgUrl}
                alt=""
                sx={styles.image}
                onClick={navToLaunchPage}
            />
            <CardContent sx={styles.content}>
                <Chip
                    gradient
                    sx={styles.chip}
                >
                    {data.date}
                </Chip>
                <Typography
                    variant="body1_700"
                    sx={styles.title}
                    onClick={navToLaunchPage}
                >
                    {data.title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default LaunchCard;
