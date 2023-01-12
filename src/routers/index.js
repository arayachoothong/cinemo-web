import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard';
import SimpleLayout from '../layouts/simple';
import LoginPage from '../pages/LoginPage';
import Page404 from '../pages/Page404';
import MoviePage from '../pages/movies/Index';
import MovieDetailPage from '../pages/movies/Details';
import MyFavoritePage from '../pages/my-favorites/Index';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/movie" />, index: true },
        { path: 'movie', element: <MoviePage /> },
        { path: 'movie/detail/:id', element: <MovieDetailPage /> },
        { path: 'my-favorite', element: <MyFavoritePage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/movie" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
  return routes;
}
