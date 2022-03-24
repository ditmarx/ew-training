import PageLayout from '../../components/containers/PageLayout';
import MainSection from '../../components/containers/MainSection';
import MapEmbed from '../../components/common/MapEmbed';
import YoutubeEmbed from '../../components/common/YoutubeEmbed';
import LaunchHero from './LaunchHero';
import LaunchInfo from './LaunchInfo';
import RocketInfo from './RocketInfo';

const LaunchPage = () => {
    return (
        <PageLayout>
            <LaunchHero />
            <MainSection>
                <YoutubeEmbed id={'4xJAGFR_N-c'} />
                <LaunchInfo />
                <RocketInfo />
                <MapEmbed />
            </MainSection>
        </PageLayout>
    );
};

export default LaunchPage;
