import { FC } from 'react';
import { Box } from '@mui/material';
import ChipProps from './Chip.types';
import styles from './Chip.styles';

const Chip: FC<ChipProps> = ({ children, gradient, sx, ...props }) => {
    return (
        <Box
            sx={{
                typography: 'caption',
                ...styles.basic,
                ...(gradient ? styles.bgGradient : null),
                ...sx,
            }}
            {...props}
        >
            {children}
        </Box>
    );
};

export default Chip;
