import { useParams } from 'react-router-dom';
import { useGetEventDetailsQuery } from 'api';
import { getYoutubeIdFromUrl } from 'utils/helper';
import PageLayout from '../../components/containers/PageLayout';
import MainSection from '../../components/containers/MainSection';
import EventHero from './EventHero';
import EventRelatedInfo from './EventRelatedInfo';
import YoutubeEmbed from '../../components/common/YoutubeEmbed';
import RecentEvents from '../../components/common/RecentEvents';

const EventPage = () => {
    const { id } = useParams();
    const { data: event } = useGetEventDetailsQuery(id as string);

    const youtubeId = getYoutubeIdFromUrl(event?.videoUrl);

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
