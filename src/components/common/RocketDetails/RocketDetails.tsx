import { Box, Typography } from '@mui/material';
import Chip from 'components/ui/Chip';
import InfoItem from 'components/ui/InfoItem';

import styles from './RocketDetails.styles';
import { tableConfig } from './RocketDetails.utils';
import rocketData from './__mocks__'

const RocketDetails = () => {
    return (
        <Box>
            <Box sx={styles.chips}>
                {rocketData.chips.map((chip) => (
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
                            {rocketData[column.dataKey].map((item) => (
                                <InfoItem
                                    term={item.term}
                                    value={item.value}
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
