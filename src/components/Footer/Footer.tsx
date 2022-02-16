import { Box, Stack, Typography } from "@mui/material";
import Logo from '../ui/Logo';
import styles from './Footer.styles';

const Footer = () => {
    return (
        <Box sx={styles.box} component="footer">
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={styles.stack}
            >
                <Logo width={49} />
                <Typography variant="body2">
                    © 2022 Copyright
                </Typography>
            </Stack>
        </Box>
    );
};

export default Footer;
