import PageLayout from '../../components/containers/PageLayout';
import MainSection from '../../components/containers/MainSection';
import EventHero from '../../components/containers/EventHero';
import YoutubeEmbed from '../../components/common/YoutubeEmbed';
import EventRelatedInfo from '../../components/common/EventRelatedInfo';
import RecentEvents from '../../components/common/RecentEvents';

const EventPage = () => {
    return (
        <PageLayout>
            <EventHero />
            <MainSection>
                <YoutubeEmbed id={'21X5lGlDOfg'}/>
                <EventRelatedInfo />
                <RecentEvents />
            </MainSection>
        </PageLayout>
    );
};

export default EventPage;
