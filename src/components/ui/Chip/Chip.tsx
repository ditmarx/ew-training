import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import ChipProps from './Chip.types';
import styles from './Chip.styles';

const Chip: FC<ChipProps> = ({ gradient, sx, children }) => {
    return (
        <Box
            sx={sx}
            width="fit-content"
        >
            <Typography
                variant="caption"
                sx={[
                    styles.basic,
                    gradient ? styles.bgGradient : styles.bgSolid,
                ]}
            >
                {children}
            </Typography>
        </Box>
    );
};

export default Chip;
