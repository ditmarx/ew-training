import { Box, Skeleton } from '@mui/material';
import styles from '../EventCard.styles';

const EventCardSkeleton = () => {
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

export default EventCardSkeleton;
