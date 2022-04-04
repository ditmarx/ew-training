import { Box, Typography } from '@mui/material';
import { Chip, InfoItem } from 'src/components/ui';
import styles from './LaunchInfo.styles';

const LaunchInfo = () => {
    return (
        <Box sx={styles.outerBox}>
            <Typography
                variant="h2"
                sx={styles.title}
            >
                Overview
            </Typography>
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
            <Box sx={styles.chips}>
                <Chip gradient>
                    LAUNCH COMPLEX 39A
                </Chip>
                <Chip gradient>
                    LOW EARTH ORBIT
                </Chip>
                <Chip gradient>
                    PROBABILITY: 60%
                </Chip>
                <Chip>
                    KENNEDY SPACE CENTER, FL, USA
                </Chip>
            </Box>
            <Typography
                variant="body2"
                sx={styles.text}
            >
                SpaceX will launch the first cargo variant of its Dragon 2
                spacecraft on their 21st commercial resupply services mission
                to the International Space Station. The flight will be conducted
                under the second Commercial Resupply Services contract with NASA.
                Dragon will be filled with supplies and payloads, including critical
                materials to directly support more than 250 science and research
                investigations that occur onboard the orbiting laboratory.
            </Typography>
        </Box>
    );
};

export default LaunchInfo;
