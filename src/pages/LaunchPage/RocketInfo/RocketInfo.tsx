import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Button from '../../../components/ui/Button';
import InfoItem from '../../../components/ui/InfoItem';
import styles from './RocketInfo.styles';

const RocketInfo = () => {
    const navigate = useNavigate();
    const navToRocket = () => navigate('/rocket');

    return (
        <Box sx={styles.outerBox}>
            <Typography
                variant="h2"
                sx={styles.title}
            >
                Falcon 9 Block 5
            </Typography>
            <Box sx={styles.infoItems}>
                <InfoItem
                    term={'Family'}
                    value={'Falcon'}
                />
                <InfoItem
                    term={'Configuration'}
                    value={'Block 5'}
                />
            </Box>
            <Typography
                variant="body2"
                sx={styles.text}
            >
                Falcon 9 is a two-stage rocket designed and manufactured
                by SpaceX for the reliable and safe transport of satellites
                and the Dragon spacecraft into orbit. The Block 5 variant
                is the fifth major interval aimed at improving upon the
                ability for rapid reusability.
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
