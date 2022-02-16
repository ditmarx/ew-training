import image from 'assets/hero-home.png';

const styles = {
    box: {
        height: '1080px',
        backgroundImage: `url(${image})`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    },
    stack: {
        height: '100%',
        maxWidth: '1180px',
        mx: 'auto',
    },
    typoDescription: {
        width: '50%',
    }
};

export default styles;