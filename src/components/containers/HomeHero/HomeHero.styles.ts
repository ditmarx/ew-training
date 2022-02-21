import image from 'assets/hero-home.png';

const styles = {
    outerBox: {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
    },
    innerBox: {
        maxWidth: 1440,
        marginX: 'auto',
        paddingX: [3, 5, 7, 10, 13],
        paddingTop: ['25vmax', '25vmax', '25vmax', 28, 33],
        paddingBottom: [23, 23, 23, 28, 35],
        // minHeight: 'fit-content',
        // height: '100vh',
    },
    textDescription: {
        paddingTop: 3,
        paddingBottom: 5,
        width: ['80%', '70%', '50%', '50%', '50%'],
    },
    button: {

    }
};

export default styles;
