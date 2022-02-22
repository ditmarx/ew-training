import PageLayout from '../../components/containers/PageLayout';
import MainSection from '../../components/containers/MainSection';
import LaunchHero from '../../components/containers/LaunchHero';
import YoutubeEmbed from '../../components/common/YoutubeEmbed';
import LaunchInfo from '../../components/common/LaunchInfo';
import RocketInfo from '../../components/common/RocketInfo';
import LaunchMap from '../../components/common/LaunchMap';

const LaunchPage = () => {
    return (
        <PageLayout>
            <LaunchHero />
            <MainSection>
                <YoutubeEmbed id={'4xJAGFR_N-c'} />
                <LaunchInfo />
                <RocketInfo />
                <LaunchMap />
            </MainSection>
        </PageLayout>
    );
};

export default LaunchPage;
