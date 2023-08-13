import { Outlet } from 'react-router-dom';
import Footer from './../../components/footer';
import Navbar from './../../components/navbar';

const MainLayout = ({ children }: any) => {
  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <Navbar />
      </header>
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default MainLayout;
