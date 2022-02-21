import { FC } from 'react';
import { Box } from '@mui/material';
import { ReactComponent as LogoIcon } from "assets/logo.svg";
import LogoProps from './Logo.types';

const Logo: FC<LogoProps> = ({ sx } ) => {
    return (
        <Box sx={sx}>
            <LogoIcon />
        </Box>
    );
};

export default Logo;
