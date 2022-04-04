import { FC } from 'react';
import { Box } from '@mui/material';
import { getStyleHeroImage } from './HeroSection.utils';
import styles from './HeroSection.styles';
import HeroSectionProps from './HeroSection.types';

const HeroSection: FC<HeroSectionProps> = ({ imgUrl, children }) => {
    return (
        <Box
            component="section"
            sx={getStyleHeroImage(styles, imgUrl)}
        >
            {children}
        </Box>
    );
};

export default HeroSection;
