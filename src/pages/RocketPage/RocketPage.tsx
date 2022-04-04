import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetRocketDetailsQuery } from 'src/api/rockets';
import { setPageTitle } from 'src/utils/setPageTitle';
import { PageLayout } from 'src/components/containers';
import RocketHero from './RocketHero';
import RocketMain from './RocketMain';

const RocketPage = () => {
    const { id } = useParams();
    const { currentData: rocket, isError } = useGetRocketDetailsQuery(id as string);

    useEffect(() => setPageTitle('Rocket', id, rocket?.full_name), [id, rocket]);

    return (
        <PageLayout
            queryError={isError}
            queryNoData={!rocket}
        >
            <RocketHero rocket={rocket} />
            <RocketMain rocket={rocket} />
        </PageLayout>
    );
};

export default RocketPage;
