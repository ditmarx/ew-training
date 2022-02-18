import { FC } from 'react';
import { Box, Stack } from "@mui/material";
import BackToHome from "../../ui/BackToHome";
import Logo from '../../ui/Logo';
import HeaderProps from './Header.types';
import styles from './Header.styles';

const Header: FC<HeaderProps> = ({ home }) => {
    return (
        <Box
            component="header"
            sx={styles.box}
        >
            <Stack
                direction="row"
                justifyContent={home ? "center" : "space-between"}
                alignItems="center"
                sx={styles.stack}
            >
                {!home && <BackToHome />}
                <Logo sx={styles.logo} />
            </Stack>
        </Box>
    );
};

export default Header;
