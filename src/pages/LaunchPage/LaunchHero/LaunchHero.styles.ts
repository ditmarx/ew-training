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
    },
    title: {
        textAlign: 'center' as const,
        marginBottom: 2,
    },
    text: {
        textAlign: 'center' as const,
        marginBottom: 4,
    },
    countdown: {
        typography: 'h1',
        fontWeight: 900,
        backgroundColor: '#4A00E0',
        paddingY: 5,
        // paddingX: 7,
        width: '90%',
        textAlign: 'center' as const,
    },
};

export default styles;
