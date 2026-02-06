import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/home';
import ServiceDetail from '../pages/services';
import HireTalent from '../pages/forms/HireTalent';
import Influencer from '../pages/forms/Influencer';
import Talent from '../pages/forms/Talent';
import RequestQuote from '../pages/forms/RequestQuote';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/services/:slug',
                element: <ServiceDetail />,
            },
            {
                path: '/hire-talent',
                element: <HireTalent />,
            },
            {
                path: '/influencer-partnership',
                element: <Influencer />,
            },
            {
                path: '/talent-application',
                element: <Talent />,
            },
            {
                path: '/request-quote',
                element: <RequestQuote />,
            },
        ],
    },
]);
