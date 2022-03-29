import { useEffect } from 'react';
import { setHomePageTitle } from 'utils/setPageTitle';
import PageLayout from '../../components/containers/PageLayout';
import MainSection from '../../components/containers/MainSection';
import HomeHero from './HomeHero';
import RecentEvents from '../../components/common/RecentEvents';
import LaunchesOverview from './LaunchesOverview';

const HomePage = () => {
    useEffect(() => setHomePageTitle(), []);

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
