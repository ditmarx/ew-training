import { Box, Stack } from "@mui/material";
import BackToHome from "../ui/BackToHome";
import Logo from '../ui/Logo';
import HeaderProps from './Header.types';
import styles from './Header.styles';

const Header = ({ home }: HeaderProps) => {
    return (
        <Box sx={styles.box} component="header">
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
