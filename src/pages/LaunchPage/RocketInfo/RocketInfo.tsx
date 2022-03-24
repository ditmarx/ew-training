import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Button from '../../../components/ui/Button';
import InfoItem from '../../../components/ui/InfoItem';
import styles from './RocketInfo.styles';
import RocketInfoProps from './RocketInfo.types';

const RocketInfo: FC<RocketInfoProps> = ({ rocket }) => {
    const navigate = useNavigate();
    const navToRocket = () => navigate(`/rocket/${rocket.id}`);

    return (
        <Box sx={styles.outerBox}>
            <Typography
                variant="h2"
                sx={styles.title}
            >
                {rocket.name}
            </Typography>
            <Box sx={styles.infoItems}>
                <InfoItem
                    term={'Family'}
                    value={rocket.family}
                />
                <InfoItem
                    term={'Configuration'}
                    value={rocket.variant}
                />
            </Box>
            <Typography
                variant="body2"
                sx={styles.text}
            >
                {rocket.description}
            </Typography>
            <Button
                variant="contained"
                onClick={navToRocket}
            >
                See Rocket Details
            </Button>
        </Box>
    );
};

export default RocketInfo;
