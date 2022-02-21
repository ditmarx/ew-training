import theme from '../../../theme';

const styles = {
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 5,
        '& > button:first-of-type': {
            order: [-1, 0],
            marginLeft: [0, 'auto'],
        },
        '& > button:not(:first-of-type)': {
            marginLeft: [0, 3],
        },
    },
    swiperBreakpoints: {
        [theme.breakpoints.values.xs]: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        [theme.breakpoints.values.sm]: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        [theme.breakpoints.values.md]: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        [theme.breakpoints.values.lg]: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        [theme.breakpoints.values.xl]: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    }
};

export default styles;
