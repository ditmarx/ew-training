// import { lazy } from 'react';
import HomePage from 'src/pages/HomePage';
import EventPage from 'src/pages/EventPage';
import LaunchPage from 'src/pages/LaunchPage';
import RocketPage from 'src/pages/RocketPage';
import NotFound from 'src/pages/NotFound';

// const Home = lazy(() => import('../pages/Home'));
// const About = lazy(() => import('../pages/About'));
// const NotFound = lazy(() => import('../pages/NotFound'));

const paths = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/event/:id',
        element: <EventPage />,
    },
    {
        path: '/launch/:id',
        element: <LaunchPage />,
    },
    {
        path: '/rocket/:id',
        element: <RocketPage />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

export default paths;
