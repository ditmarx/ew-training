import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetEventDetailsQuery } from 'api/events';
import { getYoutubeIdFromUrl } from 'utils/helper';
import { setEventPageTitle } from 'utils/setPageTitle';
import PageLayout from '../../components/containers/PageLayout';
import MainSection from '../../components/containers/MainSection';
import EventHero from './EventHero';
import EventRelatedInfo from './EventRelatedInfo';
import YoutubeEmbed from '../../components/common/YoutubeEmbed';
import RecentEvents from '../../components/common/RecentEvents';

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
