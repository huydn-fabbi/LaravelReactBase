import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFoundPage';
import ExampleListPage from './pages/ExampleListPage/ExampleListPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/example-list',
        exact: false,
        main: () => <ExampleListPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;
