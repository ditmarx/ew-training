import { FC } from 'react';
import { Button as MuiButton } from '@mui/material';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import styles from './Button.styles';

const Button: FC<MuiButtonProps> = ({ sx, ...props }) => {
    return (
        <MuiButton
            sx={{
                ...styles.button,
                ...sx,
            }}
            {...props}
        />
    );
};

export default Button;
