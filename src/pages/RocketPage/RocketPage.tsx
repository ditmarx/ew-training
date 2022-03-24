import PageLayout from '../../components/containers/PageLayout';
import MainSection from '../../components/containers/MainSection';
import RocketHero from './RocketHero';
import RocketDetails from './RocketDetails';

const RocketPage = () => {
    return (
        <PageLayout>
            <RocketHero />
            <MainSection>
                <RocketDetails />
            </MainSection>
        </PageLayout>
    );
};

export default RocketPage;
