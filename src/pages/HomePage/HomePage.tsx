import { useEffect } from 'react';
import { setHomePageTitle } from 'src/utils/setPageTitle';
import { MainSection, PageLayout } from 'src/components/containers';
import { RecentEvents } from 'src/components/common';
import HomeHero from './HomeHero';
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
