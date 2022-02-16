import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Stack, Typography } from "@mui/material";

const BackToHome = () => {
    return (
        <Stack direction="row" alignItems="center">
            <ArrowBackIcon />
            <Typography>Back To Home</Typography>
        </Stack>
    );
};

export default BackToHome;
