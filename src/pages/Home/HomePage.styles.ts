import image from 'assets/hero-home.png';

const styles = {
    hero: {
        box: {
            height: '1080px',
            backgroundImage: `url(${image})`,
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',     // prev-value: 'contain'
        },
        stack: {
            height: '100%',
            maxWidth: '1180px',
            mx: 'auto',
        },
        typoDescription: {
            width: '50%',
        },
    },
    main: {
        box: {
            backgroundColor: '#1C2056',
            width: '1440px',
            padding: '100px 130px',
            marginTop: '-118px',
            mx: 'auto',
        },
    },
};

export default styles;
