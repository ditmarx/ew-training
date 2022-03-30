import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useGetLaunchDetailsQuery } from 'src/api/launches';
import { getYoutubeIdFromUrl } from 'src/utils/helper';
import { setLaunchPageTitle } from 'src/utils/setPageTitle';
import { MainSection, PageLayout } from 'src/components/containers';
import { MapEmbed, YoutubeEmbed } from 'src/components/common';
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
