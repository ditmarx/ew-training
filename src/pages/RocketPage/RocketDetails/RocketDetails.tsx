import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Chip, InfoItem } from 'src/components/ui';
import styles from './RocketDetails.styles';
import RocketDetailsProps from './RocketDetails.types';
import { getRocketStats, tableConfig } from './RocketDetails.utils';

const RocketDetails: FC<RocketDetailsProps> = ({ rocket }) => {
    const rocketStats = getRocketStats(rocket);

    return (
        <Box>
            <Box sx={styles.chips}>
                {rocketStats.chips.map((chip) => (
                    <Chip
                        gradient={chip.gradient}
                        key={chip.text}
                    >
                        {chip.text}
                    </Chip>
                ))}
            </Box>
            <Box sx={styles.details}>
                {tableConfig.map((column) => (
                    <Box key={column.title}>
                        <Box sx={styles.columnIcon}>
                            {column.svgIcon}
                        </Box>
                        <Typography
                            variant="body1_700"
                            sx={styles.columnTitle}
                        >
                            {column.title}
                        </Typography>
                        <Box sx={styles.columnItems}>
                            {rocketStats[column.dataKey].map((item) => (
                                <InfoItem
                                    term={item.term}
                                    value={item.value}
                                    units={item.units}
                                    vertical
                                    key={item.term}
                                />
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default RocketDetails;
