import PageLayout from '../../components/containers/PageLayout';
import HomeHero from '../../components/containers/HomeHero';
import HomeMain from '../../components/containers/HomeMain';

const HomePage = () => {
    return (
        <PageLayout home>
            <HomeHero />
            <HomeMain />
        </PageLayout>
    );
};

export default HomePage;
