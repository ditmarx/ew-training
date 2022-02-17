import { useState } from "react";
import SwiperCore, { Navigation, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button, Stack, Typography } from '@mui/material';
import ArrowIcon from '../../ui/ArrowIcon';
import EventCard from '../EventCard';
import styles from './RecentEvents.styles';

const slides = new Array(20).fill('').map((slide, idx) => (`Slide ${idx + 1}`));

const RecentEvents = () => {
    const [swiper, setSwiper] = useState<SwiperCore>();

    return (
        <>
            {/* Section title + navigation buttons */}
            <Stack
                direction="row"
                justifyContent="space-between"
                sx={styles.navbar}
            >
                <Typography variant="h2">
                    Recent Events
                </Typography>
                <Stack
                    direction="row"
                    spacing={2}
                >
                    <Button onClick={() => swiper?.slidePrev() }>
                        <ArrowIcon direction="left" />
                    </Button>
                    <Button onClick={() => swiper?.slideNext() }>
                        <ArrowIcon direction="right" />
                    </Button>
                </Stack>
            </Stack>

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
