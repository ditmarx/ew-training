import PageLayout from '../../components/containers/PageLayout';
import HomeHero from '../../components/common/Home/HomeHero';
import HomeMain from '../../components/common/Home/HomeMain';

const HomePage = () => {
    // useEffect(() => {}, []);

    return (
        <PageLayout home>
            <HomeHero />
            <HomeMain />
        </PageLayout>
    );
};

export default HomePage;
