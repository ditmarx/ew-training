const styles = {
    title: {
        textAlign: 'center' as const,
        marginBottom: [4, 4, 4, 4, 4],
    },
    card: {
        display: 'flex' as const,
        flexDirection: 'row' as const,
    },
    eventTitle: {
        marginBottom: 1.6,
    },
    chip: {
        marginBottom: 3,
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
};

export default styles;
