import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetRocketDetailsQuery } from 'src/api/rockets';
import { setPageTitle } from 'src/utils/setPageTitle';
import { HeroSection, MainSection, PageLayout } from 'src/components/containers';
import { Loader } from 'src/components/common';
import RocketHero from './RocketHero';
import RocketDetails from './RocketDetails';

const RocketPage = () => {
    const { id } = useParams();
    const { currentData: rocket, isError } = useGetRocketDetailsQuery(id as string);

    useEffect(() => setPageTitle('Rocket', id, rocket?.full_name), [id, rocket]);

    return (
        <PageLayout>
            {(isError || !rocket) ? (
                <Loader isError={isError} />
            ) : (
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
