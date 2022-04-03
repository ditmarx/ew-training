import { cardBgColor } from 'src/theme';

const imageHeight = 300;

const styles = {
    skeletonImage: {
        height: imageHeight,
        width: '100%',
        backgroundColor: cardBgColor,
        marginBottom: 2,
    },
    skeletonChip: {
        width: '60%',
        backgroundColor: cardBgColor,
    },
    skeletonText: {
        width: '90%',
        backgroundColor: cardBgColor,
    },
    cardBox: {
        marginBottom: 5,
    },
    cardImage: {
        height: imageHeight,
        width: '100%',
        display: 'block' as const,
        objectFit: 'cover' as const,
        objectPosition: 'center' as const,
        marginBottom: -2,
        backgroundColor: cardBgColor,
        cursor: 'pointer',
    },
    cardNoImage: {
        height: imageHeight,
        width: '100%',
        display: 'flex' as const,
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
        marginBottom: -2,
        backgroundColor: cardBgColor,
        cursor: 'pointer',
    },
    cardDate: {
        marginBottom: 2,
        marginX: 'auto',
        position: 'relative',
        zIndex: 1,
        cursor: 'pointer',
    },
    cardText: {
        textAlign: 'center',
        cursor: 'pointer',
    },
};

export default styles;
