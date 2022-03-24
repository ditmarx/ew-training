import { useParams } from 'react-router-dom';
import { useGetEventDetailsQuery } from 'api';
import { getYoutubeIdFromUrl } from 'utils/helper';
import PageLayout from '../../components/containers/PageLayout';
import MainSection from '../../components/containers/MainSection';
import EventHero from '../../components/containers/Events/EventHero';
import YoutubeEmbed from '../../components/common/YoutubeEmbed';
import EventRelatedInfo from '../../components/containers/Events/EventRelatedInfo';
import RecentEvents from '../../components/common/RecentEvents';

const EventPage = () => {
    const { id } = useParams();
    const { data } = useGetEventDetailsQuery(id as string);

    console.log(data);

    /*
    date: "2022-03-30T11:29:00Z"
    description: "The Soyuz MS-19 spacecraft carrying ROSCOSMOS cosmonauts Anton Shkaplerov and Pyotr Dubrov as well as NASA astronaut Mark Vande Hei will land back on Earth near Dzhezkazgan, Kazakhstan."
    expeditions: (2) [{…}, {…}]
    feature_image: "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/event_images/soyuz_ms-19_lan_image_20210914210306.jpg"
    id: 326
    launches: [{…}]
    location: "Dzhezkazgan, Kazakhstan"
    name: "Soyuz MS-19 Landing"
    news_url: null
    spacestations: [{…}]
    type: {id: 9, name: 'Spacecraft Landing'}
    url: "https://spacelaunchnow.me/api/ll/2.2.0/event/326/"
    video_url: "https://www.youtube.com/watch?v=21X5lGlDOfg"
    */

    // if (!data) {
    //     return (<>Loading...</>);
    // }

    const youtubeId = getYoutubeIdFromUrl(data?.video_url);

    return (
        <PageLayout>
            <EventHero />
            <MainSection>
                {!data && (<>Loading...</>)}
                {data && (
                    <>
                        {youtubeId && <YoutubeEmbed id={youtubeId}/>}
                        <EventRelatedInfo />
                        <RecentEvents />
                    </>
                )}
            </MainSection>
        </PageLayout>
    );
};

export default EventPage;
