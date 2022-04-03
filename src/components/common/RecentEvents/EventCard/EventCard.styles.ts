import { cardBgColor } from 'src/theme';

const imageHeight = 264;

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
        maxWidth: 380,
    },
    cardImage: {
        height: imageHeight,
        width: '100%',
        display: 'block' as const,
        objectFit: 'cover' as const,
        objectPosition: 'center' as const,
        marginBottom: 2,
        cursor: 'pointer',
        backgroundColor: cardBgColor,
    },
    cardNoImage: {
        height: imageHeight,
        width: '100%',
        display: 'flex' as const,
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
        marginBottom: 2,
        cursor: 'pointer',
        backgroundColor: cardBgColor,
    },
    cardDate: {
        marginBottom: 1.5,
    },
    cardText: {
        cursor: 'pointer',
    },
};

export default styles;
