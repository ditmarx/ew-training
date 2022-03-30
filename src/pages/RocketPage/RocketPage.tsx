import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetRocketDetailsQuery } from 'src/api/rockets';
import { setRocketPageTitle } from 'src/utils/setPageTitle';
import { MainSection, PageLayout } from 'src/components/containers';
import RocketHero from './RocketHero';
import RocketDetails from './RocketDetails';

const RocketPage = () => {
    const { id } = useParams();
    const { data: rocket } = useGetRocketDetailsQuery(id as string);

    useEffect(() => setRocketPageTitle(id, rocket), [id, rocket]);

    return (
        <PageLayout>
            {!rocket && (<>Loading...</>)}
            {rocket && (
                <>
                    <RocketHero rocket={rocket} />
                    <MainSection>
                        <RocketDetails rocket={rocket} />
                    </MainSection>
                </>
            )}
        </PageLayout>
    );
};

export default RocketPage;
