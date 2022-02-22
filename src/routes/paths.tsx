// import { lazy } from 'react';
import HomePage from '../pages/HomePage';
import EventPage from '../pages/EventPage';
import LaunchPage from '../pages/LaunchPage';
import RocketPage from '../pages/RocketPage';
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
        path: '/event',
        element: <EventPage />,
    },
    {
        path: '/launch',
        element: <LaunchPage />,
    },
    {
        path: '/rocket',
        element: <RocketPage />,
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
