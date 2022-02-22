const styles = {
    outerBox: {
        // backgroundImage: `url(${image})`,
        backgroundPosition: 'top center' as const,
        backgroundRepeat: 'no-repeat' as const,
        backgroundSize: 'auto 100%' as const,
        marginBottom: -11.8,
    },
    innerBox: {
        height: 1080,
        maxWidth: 1440,
        marginX: 'auto',
        paddingX: [27, 27, 27, 27, 27],
        display: 'flex' as const,
        flexDirection: 'column' as const,
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
        textAlign: 'center' as const,
    },
    title: {
        marginBottom: 1,
    },
    company: {
        marginBottom: 2,
    },
    date: {
        marginBottom: 4,
    },
    text: {

    },
};

export default styles;
