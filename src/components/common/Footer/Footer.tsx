import { Box, Typography } from "@mui/material";
import Logo from '../../ui/Logo';
import styles from './Footer.styles';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={styles.box}
        >
            <Logo width={49} />
            <Typography variant="body2">
                © 2022 Copyright
            </Typography>
        </Box>
    );
};

export default Footer;
