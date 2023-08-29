import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import _ from 'lodash';

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = _.debounce(() => {
      setScrolled(window.scrollY > 50);
    }); // 100ms

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={twMerge('fixed top-0 z-50 w-full py-4 transition duration-300 ease-linear', scrolled && 'bg-skin-secondary py-0')}>
      <nav
        className={twMerge(
          `container mx-auto flex w-full items-center justify-between gap-x-5 bg-transparent px-7 lg:px-24`,
          scrolled && 'text-skin-secondary'
        )}
      >
        <figure className="w-20">
          {scrolled ? <img src="/logo_stylink.png" className="h-auto w-full rounded-xl" alt="" /> : <img src="/no_bg_white_letters.png" alt="" />}
        </figure>
        <div className="hidden grow justify-around lg:flex">
          {pagesLinks.map((page) => {
            return (
              <Link
                key={page.name}
                className={twMerge(
                  'text-xl font-bold text-skin-primary transition duration-300 hover:scale-110 hover:text-skin-primary hover:underline',
                  scrolled && 'text-skin-secondary hover:text-skin-secondary'
                )}
                to={page.path}
              >
                {page.name}
              </Link>
            );
          })}
        </div>
        <ShoppingCart className="text-skin-main h-8 w-8 cursor-pointer transition duration-300  hover:scale-110 hover:text-skin-primary" />
      </nav>
    </header>
  );
};

export default Navbar;
