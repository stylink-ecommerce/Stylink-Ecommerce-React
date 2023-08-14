import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const pagesLinks = [
  {
    name: 'Inicio',
    path: '/',
  },
  {
    name: 'Tienda',
    path: '/shop',
  },
  {
    name: 'Acerca',
    path: '/about',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Contacto',
    path: '/contact',
  },
];

const Navbar = () => {
  return (
    <nav className="container mx-auto flex w-full items-center justify-between gap-x-5 bg-black bg-transparent p-2 px-7 lg:px-24">
      <figure className="w-20">
        <img src="/logo_stylink.png" className="h-auto w-full rounded-xl" alt="" />
      </figure>
      <div className="hidden grow justify-around lg:flex">
        {pagesLinks.map((page) => {
          return (
            <Link
              className="text-xl font-bold text-skin-primary transition duration-300 hover:scale-110 hover:text-skin-primary hover:underline"
              to={page.path}
            >
              {page.name}
            </Link>
          );
        })}
      </div>
      <ShoppingCart className="h-8 w-8 cursor-pointer text-skin-muted transition duration-300  hover:scale-110 hover:text-skin-primary" />
    </nav>
  );
};

export default Navbar;
