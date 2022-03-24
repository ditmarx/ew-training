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
        marginBottom: [3],
        '& > :not(:last-of-type)': {
            marginBottom: [0.5],
        },
        textAlign: 'center' as const,
    },
    text: {
        textAlign: 'center' as const,
        width: '75%',
        marginX: 'auto' as const,
        marginBottom: [3],
    },
};

export default styles;
