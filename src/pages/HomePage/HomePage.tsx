import { useEffect } from 'react';
import { setPageTitle } from 'src/utils/setPageTitle';
import { PageLayout } from 'src/components/containers';
import HomeHero from './HomeHero';
import HomeMain from './HomeMain';

const HomePage = () => {
    useEffect(() => setPageTitle('Home'), []);

    return (
        <PageLayout home>
            <HomeHero />
            <HomeMain />
        </PageLayout>
    );
};

export default HomePage;
