import { useParams } from 'react-router-dom';
import { useGetLaunchDetailsQuery } from 'api';
import { getYoutubeIdFromUrl } from 'utils/helper';
import PageLayout from '../../components/containers/PageLayout';
import MainSection from '../../components/containers/MainSection';
import MapEmbed from '../../components/common/MapEmbed';
import YoutubeEmbed from '../../components/common/YoutubeEmbed';
import LaunchHero from './LaunchHero';
import LaunchInfo from './LaunchInfo';
import RocketInfo from './RocketInfo';

const LaunchPage = () => {
    const { id } = useParams();
    const { data: launch } = useGetLaunchDetailsQuery(id as string, { skip: !id });

    const youtubeId = getYoutubeIdFromUrl(launch?.videoUrl);

    return (
        <PageLayout>
            {!launch && (<>Loading...</>)}
            {launch && (
                <>
                    <LaunchHero launch={launch}/>
                    <MainSection>
                        {youtubeId && <YoutubeEmbed id={youtubeId} />}
                        <LaunchInfo />
                        <RocketInfo rocket={launch.rocket} />
                        <MapEmbed center={launch.pad} />
                    </MainSection>
                </>
            )}
        </PageLayout>
    );
};

export default LaunchPage;
