import { FC } from 'react';
import { Box } from '@mui/material';
import { ReactComponent as SVGIcon } from "assets/logo.svg";
import LogoProps from './Logo.types';

const Logo: FC<LogoProps> = ({ width, height, sx } ) => {
    return (
        <Box sx={sx}>
            <SVGIcon width={width} />
        </Box>
    );
};

export default Logo;
