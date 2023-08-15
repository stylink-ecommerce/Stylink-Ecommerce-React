import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto gap-x-5 lg:px-24">
        <div className="flex flex-col items-center justify-between gap-y-7 bg-black p-5 md:flex-row lg:gap-y-0">
          <figure className="h-20">
            <img src="/logo_stylink.jpg" className="h-full w-full" alt="" />
          </figure>
          <span className="text-xl">Stylink todos los Derechos Reservados &copy;{new Date().getFullYear()}</span>
          <div className="flex">
            <Instagram className="h-8 w-8" />
            <Facebook className="h-8 w-8" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
