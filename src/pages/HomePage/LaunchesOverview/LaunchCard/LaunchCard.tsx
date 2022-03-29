import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { formatDateTime } from 'utils/helper';
import Chip from '../../../../components/ui/Chip';
import styles from './LaunchCard.styles';
import LaunchCardProps from './LaunchCard.types';

const LaunchCard: FC<LaunchCardProps> = ({ launch }) => {
    const navigate = useNavigate();
    const navToLaunchPage = () => navigate(`/launch/${launch.id}`);

    const launchImgUrl = launch.image_url ?? launch.rocket.configuration.image_url;

    return (
        <Card variant="outlined" sx={styles.card}>
            <CardMedia
                component="img"
                height="264"
                image={launchImgUrl}
                alt=""
                sx={styles.image}
                onClick={navToLaunchPage}
            />
            <CardContent sx={styles.content}>
                <Chip
                    gradient
                    sx={styles.chip}
                >
                    {dayjs(launch.net).format(formatDateTime)}
                </Chip>
                <Typography
                    variant="body1_700"
                    sx={styles.title}
                    onClick={navToLaunchPage}
                >
                    {launch.name}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default LaunchCard;
