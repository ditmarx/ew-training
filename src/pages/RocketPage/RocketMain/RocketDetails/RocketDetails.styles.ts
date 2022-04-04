const styles = {
    chips: {
        display: 'flex' as const,
        flexWrap: 'wrap' as const,
        justifyContent: 'center' as const,
        '& > div': {
            marginX: 1.5,
            marginBottom: 2,
        },
        marginBottom: 5,
    },
    details: {
        display: 'flex' as const,
        justifyContent: 'space-around' as const,
        textAlign: 'center' as const,
        '& > *': {
            width: '25%',
        },
    },
    columnIcon: {
        marginBottom: 2,
    },
    columnTitle: {
        marginBottom: 2,
    },
    columnItems: {
        '& > :not(:last-of-type)': {
            marginBottom: 1,
        },
    },
};

export default styles;
