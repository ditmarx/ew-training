import { Box, Skeleton } from '@mui/material';
import styles from '../LaunchCard.styles';

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

export default LaunchCardSkeleton;
