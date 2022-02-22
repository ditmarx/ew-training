import { FC } from 'react';
import { Box } from '@mui/material';
import styles from './InfoItem.styles';
import InfoItemProps from './InfoItem.types';

const InfoItem: FC<InfoItemProps> = ({ term, value, vertical, centered, sx, ...props }) => {

    return (
        <Box
            sx={{
                typography: 'body2',
                ...styles.basic,
                textAlign: (centered ? 'center' : 'inherit'),
                ...sx,
            }}
            {...props}
        >
            {vertical ? (
                <>
                    {term}<br /><b>{value}</b>
                </>
            ) : (
                <>
                    <b>{`${term}:`}</b> {value}
                </>
            )}
        </Box>
    );
};

export default InfoItem;
