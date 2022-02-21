import { FC } from 'react';
import { Typography } from '@mui/material';
import styles from './InfoItem.styles';
import InfoItemProps from './InfoItem.types';

const InfoItem: FC<InfoItemProps> = ({ term, value, vertical, centered }) => {

    return (
        <Typography
            variant="body2"
            align={centered ? 'center' : 'inherit'}
            sx={styles.text}
            mb={undefined}
        >
            {vertical ? (
                <>
                    {term}
                    <br />
                    <b>{value}</b>
                </>
            ) : (
                <>
                    <b>{`${term}:`}</b> {value}
                </>
            )}
        </Typography>
    );
};

export default InfoItem;
