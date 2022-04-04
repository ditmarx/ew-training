import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useGetLaunchDetailsQuery } from 'src/api/launches';
import { setPageTitle } from 'src/utils/setPageTitle';
import { PageLayout } from 'src/components/containers';
import LaunchHero from './LaunchHero';
import LaunchMain from './LaunchMain';

const LaunchPage = () => {
    const { id } = useParams();
    const { currentData: launch, isError } = useGetLaunchDetailsQuery(id as string, { skip: !id });

    useEffect(() => setPageTitle('Launch', id, launch?.name), [id, launch]);

    return (
        <PageLayout
            queryError={isError}
            queryNoData={!launch}
        >
            <LaunchHero launch={launch}/>
            <LaunchMain launch={launch}/>
        </PageLayout>
    );
};

export default LaunchPage;
