import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useGetLaunchDetailsQuery } from 'src/api/launches';
import { getLaunchImgUrl } from 'src/api/utils/getLaunchImgUrl';
import { getLaunchMapCenter, getYoutubeIdFromUrl } from 'src/utils/helper';
import { setPageTitle } from 'src/utils/setPageTitle';
import { HeroSection, MainSection, PageLayout } from 'src/components/containers';
import { MapEmbed, YoutubeEmbed } from 'src/components/common';
import LaunchHero from './LaunchHero';
import LaunchInfo from './LaunchInfo';
import RocketInfo from './RocketInfo';

const LaunchPage = () => {
    const { id } = useParams();
    const { data: launch } = useGetLaunchDetailsQuery(id as string, { skip: !id });

    useEffect(() => setPageTitle('Launch', id, launch?.name), [id, launch]);

    return (
        <PageLayout>
            {!launch && (<>Loading...</>)}
            {launch && (
                <>
                    <HeroSection imgUrl={getLaunchImgUrl(launch)}>
                        <LaunchHero launch={launch}/>
                    </HeroSection>
                    <MainSection>
                        <YoutubeEmbed id={getYoutubeIdFromUrl(null)} />
                        <LaunchInfo />
                        <RocketInfo rocket={launch.rocket.configuration} />
                        <MapEmbed center={getLaunchMapCenter(launch)} />
                    </MainSection>
                </>
            )}
        </PageLayout>
    );
};

export default LaunchPage;
