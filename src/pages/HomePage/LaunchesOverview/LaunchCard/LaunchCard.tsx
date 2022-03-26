import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { dateFormat } from 'utils/helper';
import Chip from '../../../../components/ui/Chip';
import styles from './LaunchCard.styles';
import LaunchCardProps from './LaunchCard.types';

const LaunchCard: FC<LaunchCardProps> = ({ launch }) => {
    const navigate = useNavigate();
    const navToLaunchPage = () => navigate(`/launch/${launch.id}`);

    return (
        <Card variant="outlined" sx={styles.card}>
            <CardMedia
                component="img"
                height="264"
                image={launch.imgUrl}
                alt=""
                sx={styles.image}
                onClick={navToLaunchPage}
            />
            <CardContent sx={styles.content}>
                <Chip
                    gradient
                    sx={styles.chip}
                >
                    {dayjs(launch.date).format(dateFormat)}
                </Chip>
                <Typography
                    variant="body1_700"
                    sx={styles.title}
                    onClick={navToLaunchPage}
                >
                    {launch.title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default LaunchCard;
