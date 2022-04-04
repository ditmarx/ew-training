import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Skeleton, Typography } from '@mui/material';
import { Chip } from 'src/components/ui';
import { ReactComponent as NoImgLogo } from 'src/assets/loader.svg';
import { showDateTime } from 'src/utils/helper';
import { getLaunchImgUrl } from 'src/api/utils/getLaunchImgUrl';
import styles from './LaunchCard.styles';
import LaunchCardProps from './LaunchCard.types';

const LaunchCardSkeleton = () => {
    return (
        <Box sx={styles.cardBox}>
            <Skeleton
                variant="rectangular"
                sx={styles.skeletonImage}
            />
            <Skeleton sx={styles.skeletonChip} />
            <Skeleton sx={styles.skeletonText} />
        </Box>
    );
};

const LaunchCard: FC<LaunchCardProps> = ({ launch }) => {
    const navigate = useNavigate();

    if (!launch) {
        return <LaunchCardSkeleton />;
    }

    const navToLaunchPage = () => navigate(`/launch/${launch.id}`);

    const launchImgUrl = getLaunchImgUrl(launch);

    return (
        <Box sx={styles.cardBox}>
            {!launchImgUrl ? (
                <Box
                    sx={styles.cardNoImage}
                    onClick={navToLaunchPage}
                >
                    <NoImgLogo height="50%" />
                </Box>
            ) : (
                <Box
                    component="img"
                    src={launchImgUrl}
                    alt=""
                    loading="lazy"
                    onClick={navToLaunchPage}
                    sx={styles.cardImage}
                />
            )}
            <Chip
                gradient
                sx={styles.cardDate}
            >
                {showDateTime(launch.net)}
            </Chip>
            <Typography
                variant="body1_700"
                onClick={navToLaunchPage}
                sx={styles.cardText}
            >
                {launch.name}
            </Typography>
        </Box>
    );
};

export default LaunchCard;
