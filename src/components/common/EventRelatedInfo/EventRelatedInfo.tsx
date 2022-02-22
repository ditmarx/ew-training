import { Box, Typography } from '@mui/material';
import Chip from '../../ui/Chip';
import InfoItem from '../../ui/InfoItem';
import styles from './EventRelatedInfo.styles';

const EventRelatedInfo = () => {
    return (
        <Box>
            <Typography
                variant="h2"
                sx={styles.title}
            >
                Related Information
            </Typography>

            <Box sx={styles.card}>
                <Box sx={styles.cardImage}>
                    <img
                        src=""
                        alt=""
                    />
                </Box>
                <Box sx={styles.cardContent}>
                    <Typography
                        variant="body1_700"
                        sx={styles.contentTitle}
                    >
                        Long March 3B/E | Gaofen 14
                    </Typography>
                    <Chip sx={styles.contentDate}>
                        Dec. 6, 2020, 6:17 p.m.
                    </Chip>
                    <Box sx={styles.infoItems}>
                        <InfoItem
                            term={'Destination'}
                            value={'Low Earth Orbit'}
                        />
                        <InfoItem
                            term={'Mission'}
                            value={'Resupply'}
                        />
                    </Box>
                    <Typography variant="body2">
                        SpaceX will launch the first cargo variant of its Dragon 2 spacecraft
                        on their 21st commercial resupply services mission to the International
                        Space Station. The flight will be conducted under the second Commercial
                        Resupply Services contract with NASA. Dragon will be filled with supplies
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default EventRelatedInfo;
