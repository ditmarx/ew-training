import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetRocketDetailsQuery } from 'src/api/rockets';
import { setPageTitle } from 'src/utils/setPageTitle';
import { HeroSection, MainSection, PageLayout } from 'src/components/containers';
import RocketHero from './RocketHero';
import RocketDetails from './RocketDetails';

const RocketPage = () => {
    const { id } = useParams();
    const { data: rocket } = useGetRocketDetailsQuery(id as string);

    useEffect(() => setPageTitle('Rocket', id, rocket?.full_name), [id, rocket]);

    return (
        <PageLayout>
            {!rocket && (<>Loading...</>)}
            {rocket && (
                <>
                    <HeroSection imgUrl={rocket.image_url}>
                        <RocketHero rocket={rocket} />
                    </HeroSection>
                    <MainSection>
                        <RocketDetails rocket={rocket} />
                    </MainSection>
                </>
            )}
        </PageLayout>
    );
};

export default RocketPage;
