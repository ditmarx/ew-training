import { FC } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import LoaderProps from './Loader.types';
import styles from './Loader.styles';

const Loader: FC<LoaderProps> = ({ isError }) => {
    return (
        <Box sx={styles.container}>
            {isError ? (
                <>
                    <Typography sx={styles.text}>
                        Something went wrong :(
                        <br />
                        Please try again later...
                    </Typography>
                </>
            ) : (
                <>
                    <CircularProgress sx={styles.spinner}/>
                    <Typography sx={styles.text}>
                        Loading...
                        <br />
                        Please wait
                    </Typography>
                </>
            )}
        </Box>
    );
};

export default Loader;
