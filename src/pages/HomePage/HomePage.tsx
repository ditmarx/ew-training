import { useEffect } from 'react';
import { setPageTitle } from 'src/utils/setPageTitle';
import { HeroSection, MainSection, PageLayout } from 'src/components/containers';
import { RecentEvents } from 'src/components/common';
import HomeHero from './HomeHero';
import LaunchesOverview from './LaunchesOverview';
import heroImage from 'src/assets/hero-home.png';

const HomePage = () => {
    useEffect(() => setPageTitle('Home'), []);

    return (
        <PageLayout home>
            <HeroSection imgUrl={heroImage}>
                <HomeHero />
            </HeroSection>
            <MainSection>
                <RecentEvents />
                <LaunchesOverview />
            </MainSection>
        </PageLayout>
    );
};

export default HomePage;
