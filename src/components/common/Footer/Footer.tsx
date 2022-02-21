import { Box, Typography } from "@mui/material";
import Logo from '../../ui/Logo';
import styles from './Footer.styles';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={styles.outerBox}
        >
            <Box sx={styles.innerBox}>
                <Logo sx={styles.logo} />
                <Typography
                    variant="body2"
                    sx={styles.text}
                >
                    © 2022 Copyright
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
