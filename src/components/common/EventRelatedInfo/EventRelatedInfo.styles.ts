const styles = {
    title: {
        textAlign: 'center' as const,
        marginBottom: [4, 4, 4, 4, 4],
    },
    card: {
        display: 'flex' as const,
        flexDirection: 'row' as const,
    },
    cardImage: {
        width: '49%',
        marginRight: 'auto',
        border: 1,
        '& > img': {
        },
    },
    cardContent: {
        width: '49%',
    },
    contentTitle: {
        marginBottom: [1.6],
    },
    contentDate: {
        marginBottom: [3],
    },
    infoItems: {
        marginBottom: [2],
        '& > :not(:last-of-type)': {
            marginBottom: [0.5],
        },
    },

};

export default styles;
