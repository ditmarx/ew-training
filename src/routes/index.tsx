import { useRoutes } from 'react-router-dom';
import useScrollToTop from 'src/hooks/useScrollToTop';
import paths from './paths';

const Routes = () => {
    const routes = useRoutes(paths);
    useScrollToTop();

    return (
        <>
            {routes}
        </>
    );
};

export default Routes;
