import { FC } from 'react';
import { Box } from '@mui/material';
import styles from './MainSection.styles';

const MainSection: FC = ({ children }) => {
    return (
        <Box
            component="section"
            sx={styles.box}
        >
            {children}
        </Box>
    );
};

export default MainSection;
