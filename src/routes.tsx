import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './pages/layout';
import GameDetailsPage from './pages/GameDetailsPage';
import ErrorPage from './pages/ErrorPage';



const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
        { index: true, element: <HomePage />},
        { path: '/games/:slug', element: <GameDetailsPage />}
    ]
}]);


export default router;