import { Navigate, useRoutes } from 'react-router-dom';
import HomePage from '../pages/home/home-page';
import ShopPage from '../pages/auth/register-page';
import AboutPage from '../pages/about/about-page';
import AppointmentsPage from '../pages/blog/blog-page';
// import { useAuthStore2 } from '../store/auth';
import MainLayout from '../pages/layouts/main-layout';
import ContacPage from '../pages/contact/contact-page';

export default function Router() {
  // const isAuth = useAuthStore2((state) => state.isAuth  );

  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: 'home', element: <HomePage /> },
        {
          path: 'shop',
          element: <ShopPage />,
          children: [
            { path: 'shirts', element: <h1>shop/shirts</h1> },
            { path: 'tote-bags', element: <h1 className="text-7xl text-black">tote bags</h1> },
            { path: 'sweaters' },
            { path: 'hoddies' },
            { path: 'tazas' },
          ],
        },
        { path: 'blog', element: <AppointmentsPage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'contact', element: <ContacPage /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
