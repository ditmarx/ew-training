import { useRoutes } from 'react-router-dom';
import paths from './paths';

const Routes = () => {
    const routes = useRoutes(paths);
    return (
        <>
            {routes}
        </>
    );
};

export default Routes;
