import { Navigate, useRoutes } from 'react-router-dom';
import HomePage from '../pages/home/home-page';
import AppointmentsPage from '../pages/blog/blog-page';
// import { useAuthStore2 } from '../store/auth';
import MainLayout from '../pages/layouts/main-layout';
import ContacPage from '../pages/contact/contact-page';
import AboutPage from '../pages/about/about';
import ShopPage from '../pages/shop/shop';
export default function Router() {
  // const isAuth = useAuthStore2((state) => state.isAuth  );

  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: 'home', element: <HomePage /> },
      
        { path: 'shop', element: <ShopPage /> },
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
