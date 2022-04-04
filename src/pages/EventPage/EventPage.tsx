import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetEventDetailsQuery } from 'src/api/events';
import { getYoutubeIdFromUrl } from 'src/utils/helper';
import { setPageTitle } from 'src/utils/setPageTitle';
import { HeroSection, MainSection, PageLayout } from 'src/components/containers';
import { RecentEvents, YoutubeEmbed } from 'src/components/common';
import EventHero from './EventHero';
import EventRelatedInfo from './EventRelatedInfo';

const EventPage = () => {
    const { id } = useParams();
    const { data: event } = useGetEventDetailsQuery(id as string);

    useEffect(() => setPageTitle('Event', id, event?.name), [id, event]);

    return (
        <PageLayout>
            {!event && (<>Loading...</>)}
            {event && (
                <>
                    <HeroSection imgUrl={event.feature_image}>
                        <EventHero event={event}/>
                    </HeroSection>
                    <MainSection>
                        <YoutubeEmbed id={getYoutubeIdFromUrl(event.video_url)}/>
                        <EventRelatedInfo />
                        <RecentEvents />
                    </MainSection>
                </>
            )}
        </PageLayout>
    );
};

export default EventPage;
