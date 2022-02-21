import PageLayout from '../../components/containers/PageLayout';
import MainSection from '../../components/containers/MainSection';
import HomeHero from '../../components/containers/HomeHero';
import RecentEvents from '../../components/common/RecentEvents';
import LaunchesOverview from '../../components/common/LaunchesOverview';

const HomePage = () => {
    return (
        <PageLayout home>
            <HomeHero />
            <MainSection>
                <RecentEvents />
                <LaunchesOverview />
            </MainSection>
        </PageLayout>
    );
};

export default HomePage;
