import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetEventDetailsQuery } from 'src/api/events';
import { getYoutubeIdFromUrl } from 'src/utils/helper';
import { setEventPageTitle } from 'src/utils/setPageTitle';
import { MainSection, PageLayout } from 'src/components/containers';
import { RecentEvents, YoutubeEmbed } from 'src/components/common';
import EventHero from './EventHero';
import EventRelatedInfo from './EventRelatedInfo';

const EventPage = () => {
    const { id } = useParams();
    const { data: event } = useGetEventDetailsQuery(id as string);

    useEffect(() => setEventPageTitle(id, event), [id, event]);

    const youtubeId = getYoutubeIdFromUrl(event?.video_url);

    return (
        <PageLayout>
            {!event && (<>Loading...</>)}
            {event && (
                <>
                    <EventHero event={event}/>
                    <MainSection>
                        {youtubeId && <YoutubeEmbed id={youtubeId}/>}
                        <EventRelatedInfo />
                        <RecentEvents />
                    </MainSection>
                </>
            )}
        </PageLayout>
    );
};

export default EventPage;
