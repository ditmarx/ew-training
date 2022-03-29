import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useGetLaunchDetailsQuery } from 'api/launches';
import { getYoutubeIdFromUrl } from 'utils/helper';
import { setLaunchPageTitle } from 'utils/setPageTitle';
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

    useEffect(() => setLaunchPageTitle(id, launch), [id, launch]);

    const youtubeId = getYoutubeIdFromUrl(null);

    const mapCenter = launch && {
        lat: parseFloat(launch.pad.latitude),
        lng: parseFloat(launch.pad.longitude),
    };

    return (
        <PageLayout>
            {!launch && (<>Loading...</>)}
            {launch && (
                <>
                    <LaunchHero launch={launch}/>
                    <MainSection>
                        {youtubeId && <YoutubeEmbed id={youtubeId} />}
                        <LaunchInfo />
                        <RocketInfo rocket={launch.rocket.configuration} />
                        <MapEmbed center={mapCenter} />
                    </MainSection>
                </>
            )}
        </PageLayout>
    );
};

export default LaunchPage;
