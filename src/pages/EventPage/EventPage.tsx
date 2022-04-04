import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetEventDetailsQuery } from 'src/api/events';
import { getYoutubeIdFromUrl } from 'src/utils/helper';
import { setPageTitle } from 'src/utils/setPageTitle';
import { HeroSection, MainSection, PageLayout } from 'src/components/containers';
import { Loader, RecentEvents, YoutubeEmbed } from 'src/components/common';
import EventHero from './EventHero';
import EventRelatedInfo from './EventRelatedInfo';

const EventPage = () => {
    const { id } = useParams();
    const { currentData: event, isError } = useGetEventDetailsQuery(id as string);

    useEffect(() => setPageTitle('Event', id, event?.name), [id, event]);

    console.log('id = ', id);
    console.log('event = ', event);
    console.log('isError = ', isError);

    return (
        <PageLayout>
            {(isError || !event) ? (
                <Loader isError={isError} />
            ) : (
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
