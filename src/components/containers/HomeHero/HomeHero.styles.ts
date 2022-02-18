import image from 'assets/hero-home.png';

const styles = {
    boxOuter: {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',     // prev-value: 'contain'
        paddingBottom: 12,
    },
    boxInner: {
        maxWidth: 1180,
        mx: 'auto',
        paddingTop: 33,
        paddingBottom: 23,
    },
    typoDescription: {
        paddingTop: 3,
        paddingBottom: 5,
        width: '50%',
    },
};

export default styles;
