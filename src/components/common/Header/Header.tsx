import { FC } from 'react';
import { Box } from "@mui/material";
import { BackToHome, Logo } from "src/components/ui";
import styles from './Header.styles';
import HeaderProps from './Header.types';

const Header: FC<HeaderProps> = ({ home }) => {
    return (
        <Box
            component="header"
            sx={styles.outerBox}
        >
            <Box sx={styles.innerBox}>
                {!home && <BackToHome />}
                <Logo sx={styles.logo} />
            </Box>
        </Box>
    );
};

export default Header;
