import { useCallback, useState } from "react";
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

    return (
        <>
            {/* Section's title + navigation buttons with arrow icons */}
            <Box sx={styles.title}>
                <Typography variant="h2">
                    Recent Events
                </Typography>
                <Box sx={styles.arrowBlock}>
                    <Button onClick={slideToPrev}>
                        <ArrowIcon direction="left" />
                    </Button>
                    <Button onClick={slideToNext}>
                        <ArrowIcon direction="right" />
                    </Button>
                </Box>
            </Box>

            {/* Event Carousel */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                modules={[Navigation, Virtual]}
                virtual
                onSwiper={setSwiper}
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <EventCard text={slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default RecentEvents;
