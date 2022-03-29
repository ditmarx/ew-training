import { FC } from 'react';
import { Box } from '@mui/material';
import styles from './InfoItem.styles';
import InfoItemProps from './InfoItem.types';

const InfoItem: FC<InfoItemProps> = ({
    term, value, units, vertical, centered, sx, ...props
}) => {

    let textValue = '-';
    if (value || (typeof value === 'number')) {
        textValue = `${value}`;
        if (units) textValue += ` ${units}`;
    }

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
                    {term}<br />
                    <b>{textValue}</b>
                </>
            ) : (
                <>
                    <b>{`${term}:`}</b> {textValue}
                </>
            )}
        </Box>
    );
};

export default InfoItem;
