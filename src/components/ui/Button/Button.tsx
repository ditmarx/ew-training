import { FC } from 'react';
import { Button as MuiButton } from '@mui/material';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import styles from './Button.styles';

const Button: FC<MuiButtonProps> = (props) => {
    return (
        <MuiButton
            sx={{
                ...styles.button,
                ...props.sx,
            }}
            {...props}
        />
    );
};

export default Button;
