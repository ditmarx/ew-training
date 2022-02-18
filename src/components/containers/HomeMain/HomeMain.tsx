import { Box } from '@mui/material';
import RecentEvents from '../../common/RecentEvents';
import LaunchesOverview from '../../common/LaunchesOverview';
import styles from './HomeMain.styles';

const HomeMain = () => {
    return (
        <Box
            component="main"
            sx={styles.box}
        >
            <RecentEvents />
            <LaunchesOverview />
        </Box>
    );
};

export default HomeMain;
