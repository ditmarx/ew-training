import { useCallback, useState } from "react";
import { Box, Button, Typography } from '@mui/material';
import SwiperCore, { Navigation, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetUpcomingEventsQuery } from 'src/api/events';
import { ArrowIcon } from 'src/components/ui';
import EventCard from './EventCard';
import styles from './RecentEvents.styles';

const RecentEvents = () => {
    const [swiper, setSwiper] = useState<SwiperCore>();
    const slideToPrev = useCallback(() => swiper?.slidePrev(), [swiper]);
    const slideToNext = useCallback(() => swiper?.slideNext(), [swiper]);

    const { data: events } = useGetUpcomingEventsQuery(0);

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
                // virtual
                slidesPerView={3}
                spaceBetween={30}
                // breakpoints={styles.swiperBreakpoints}
                onSwiper={setSwiper}
            >
                {events?.map((event, idx) => (
                    <SwiperSlide
                        key={event.id}
                        // virtualIndex={idx}
                    >
                        <EventCard event={event} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default RecentEvents;
