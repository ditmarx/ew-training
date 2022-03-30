import { Box, Typography } from "@mui/material";
import Logo from 'src/components/ui/Logo';
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
                    &copy; {new Date().getFullYear()} Copyright
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
