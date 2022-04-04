import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useGetLaunchDetailsQuery } from 'src/api/launches';
import { setPageTitle } from 'src/utils/setPageTitle';
import { PageLayout } from 'src/components/containers';
import { Loader } from 'src/components/common';
import LaunchHero from './LaunchHero';
import LaunchMain from './LaunchMain';

const LaunchPage = () => {
    const { id } = useParams();
    const { currentData: launch, isError } = useGetLaunchDetailsQuery(id as string, { skip: !id });

    useEffect(() => setPageTitle('Launch', id, launch?.name), [id, launch]);

    return (
        <PageLayout>
            {(isError || !launch) ? (
                <Loader isError={isError} />
            ) : (
                <>
                    <LaunchHero launch={launch}/>
                    <LaunchMain launch={launch}/>
                </>
            )}
        </PageLayout>
    );
};

export default LaunchPage;
