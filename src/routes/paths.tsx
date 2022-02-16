// import { lazy } from 'react';
import HomePage from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

// const Home = lazy(() => import('../pages/Home'));
// const About = lazy(() => import('../pages/About'));
// const NotFound = lazy(() => import('../pages/NotFound'));

const paths = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

export default paths;
