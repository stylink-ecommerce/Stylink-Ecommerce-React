import { Outlet } from 'react-router-dom';
import Footer from './../../components/footer';
import Navbar from './../../components/navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default MainLayout;
