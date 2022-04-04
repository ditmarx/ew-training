const styles = {
    outerBox: {
        display: 'flex' as const,
        flexDirection: 'column' as const,
        alignItems: 'center' as const,
    },
    title: {
        marginBottom: [2],
    },
    infoItems: {
        marginBottom: [2],
        '& > :not(:last-of-type)': {
            marginBottom: [0.5],
        },
        textAlign: 'center' as const,
    },
    chips: {
        marginBottom: 3,
        display: 'flex' as const,
        flexWrap: 'wrap' as const,
        justifyContent: 'center' as const,
        '& > div': {
            marginX: 1,
            marginBottom: 2,
        },
    },
    text: {
        width: '75%',
        textAlign: 'center' as const,
    },
};

export default styles;
