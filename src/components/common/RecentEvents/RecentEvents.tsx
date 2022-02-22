import { useCallback, /*useEffect,*/ useState } from "react";
import { Box, Button, Typography } from '@mui/material';
import SwiperCore, { Navigation, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArrowIcon from '../../ui/ArrowIcon';
import EventCard from './EventCard';
import styles from './RecentEvents.styles';
import slides from './__mocks__';

const RecentEvents = () => {
    const [swiper, setSwiper] = useState<SwiperCore>();
    const slideToPrev = useCallback(() => swiper?.slidePrev(), [swiper]);
    const slideToNext = useCallback(() => swiper?.slideNext(), [swiper]);

    // useEffect(() => console.log(swiper), [swiper]);

    return (
        <Box>
            {/* Section's title + navigation buttons with arrow icons */}
            <Box sx={styles.title}>
                <Typography
                    variant="h2"
                    align="center"
                >
                    Recent Events
                </Typography>
                {/* <Box sx={styles.arrowBlock}> */}
                    <Button onClick={slideToPrev}>
                        <ArrowIcon direction="left" />
                    </Button>
                    <Button onClick={slideToNext}>
                        <ArrowIcon direction="right" />
                    </Button>
                {/* </Box> */}
            </Box>

            {/* Event Carousel */}
            <Swiper
                modules={[Navigation, Virtual]}
                virtual
                slidesPerView={3}
                spaceBetween={30}
                // breakpoints={styles.swiperBreakpoints}
                onSwiper={setSwiper}
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx} virtualIndex={idx}>
                        <EventCard
                            text={slide}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default RecentEvents;
