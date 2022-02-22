import PageLayout from '../../components/containers/PageLayout';
import MainSection from '../../components/containers/MainSection';
import RocketHero from '../../components/containers/Rocket/RocketHero';
import RocketDetails from '../../components/common/RocketDetails';

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
