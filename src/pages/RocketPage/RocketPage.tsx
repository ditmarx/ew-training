import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../../components/containers/PageLayout';
import MainSection from '../../components/containers/MainSection';
import RocketHero from './RocketHero';
import RocketDetails from './RocketDetails';
import { useGetRocketDetailsQuery } from 'api/rockets';
import { setRocketPageTitle } from 'utils/setPageTitle';

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
