import { FC } from 'react';
import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from '@mui/material';
import styles from './Button.styles';

const Button: FC<ButtonProps> = (props) => {
    return (
        <MuiButton sx={styles.button} {...props} />
    );
};

export default Button;
