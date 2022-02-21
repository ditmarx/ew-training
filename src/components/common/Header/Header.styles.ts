import { alpha } from '@mui/material/styles';
import { pixelsToRems } from '../../../utils/helper';

const headerHeightPx = [60, 70, 80, 90, 100];
const headerHeightRem = headerHeightPx.map(px => pixelsToRems(px));
const logoWidthRem = headerHeightPx.map(px => pixelsToRems(0.95 * px));

const styles = {
    outerBox: {
        backgroundColor: alpha('#000', 0.2),    // = 'rgba(0, 0, 0, 0.2)'
        position: 'absolute' as const,
        top: 0,
        width: '100%',
        height: headerHeightRem,
    },
    innerBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        maxWidth: 1440,
        marginX: 'auto',
        paddingX: [3, 4, 7, 10, 13],
    },
    logo: {
        minWidth: logoWidthRem,
        marginTop: headerHeightRem,
    },
};

export default styles;
