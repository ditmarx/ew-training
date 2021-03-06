import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { showDate } from 'src/utils/helper';
import { HeroSection } from 'src/components/containers';
import styles from './RocketHero.styles';
import RocketHeroProps from './RocketHero.types';

const RocketHero: FC<RocketHeroProps> = ({ rocket }) => {
    if (!rocket) return null;
    const company = rocket.launch_service_provider;
    return (
        <HeroSection imgUrl={rocket.image_url}>
            <Box sx={styles.container}>
                <Typography
                    variant="h1"
                    sx={styles.title}
                >
                    {rocket.full_name}
                </Typography>
                <Typography
                    variant="body1"
                    sx={styles.company}
                >
                    {company.name} ({company.abbrev})
                </Typography>
                <Typography
                    variant="body1_800"
                    sx={styles.date}
                >
                    {showDate(rocket.maiden_flight)}
                </Typography>
                <Typography
                    variant="body2"
                    sx={styles.text}
                >
                    {rocket.description}
                </Typography>
            </Box>
        </HeroSection>
    );
};

export default RocketHero;
