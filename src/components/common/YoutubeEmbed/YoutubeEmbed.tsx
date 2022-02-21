import { FC } from 'react';
import { Box } from '@mui/material';
import styles from './YoutubeEmbed.styles';
import YoutubeEmbedProps from './YoutubeEmbed.types';

const YoutubeEmbed: FC<YoutubeEmbedProps> = ({ id }) => {
    return (
        <Box sx={styles.box}>
            <iframe
                title="YouTube video player"
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={styles.iframe}
            />
        </Box>
    );
};

export default YoutubeEmbed;
