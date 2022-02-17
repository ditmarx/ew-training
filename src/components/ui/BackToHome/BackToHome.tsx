import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import ArrowIcon from '../ArrowIcon';
import { Stack, Typography } from "@mui/material";

const BackToHome = () => {
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <ArrowIcon direction="left" width={28} />
            <Typography>Back To Home</Typography>
        </Stack>
    );
};

export default BackToHome;
