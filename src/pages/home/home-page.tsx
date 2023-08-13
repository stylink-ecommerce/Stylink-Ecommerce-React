import { twMerge } from 'tailwind-merge';

const categorias = [
  {
    name: 'Todos',
  },
  {
    name: 'Camisas',
    imagePath: '/colores_camisas.jpg',
    active: true,
  },
  {
    name: 'Tote Bags',
    imagePath: '/tote_bags_bad_bunny.jpg',
  },
  {
    name: 'Suéteres',
    imagePath: '/hs_hoodie.JPG',
  },
  {
    name: 'Hoodies',
    imagePath: '/nasa_hoodie.jpeg',
  },
  {
    name: 'Tazas',
    imagePath: '/taza_stylink.JPG',
  },
  {
    name: 'Polaroid',
    imagePath: '/thank_you.jpg',
  },
];

const productos = [
  {
    name: 'Producto 1',
    category: 'Camisas',
    price: 25.99,
    image: '/producto1_camisa.jpg',
  },
  {
    name: 'Producto 2',
    category: 'Tote Bags',
    price: 12.49,
    image: '/producto2_tote_bag.jpg',
  },
  {
    name: 'Producto 3',
    category: 'Suéteres',
    price: 35.75,
    image: '/producto3_sweater.jpg',
  },
  {
    name: 'Producto 4',
    category: 'Hoodies',
    price: 28.99,
    image: '/producto4_hoodie.jpg',
  },
  {
    name: 'Producto 5',
    category: 'Tazas',
    price: 8.99,
    image: '/producto5_taza.jpg',
  },
  {
    name: 'Producto 6',
    category: 'Polaroid',
    price: 50.0,
    image: '/producto6_polaroid.jpg',
  },
  // Puedes continuar agregando más productos aquí...
];

const HomePage = () => {
  return (
    <>
      {/* features box */}
      <main>
        <section className="contain flex h-screen items-center justify-center">
          <div className="features-box">
            {/* features gradients */}
            <div className="features-gradients overflow-hidden">
              {/* gradient 1 */}
              <div className="features-gradient-1"></div>
              <div className="features-gradient-2"></div>
              <div className="features-gradient-3"></div>
            </div>
            <div className="relative z-0">
              <h1 className="features-title text-5xl opacity-80 sm:text-6xl md:text-7xl lg:text-[7rem] 2xl:text-[10rem]">Be</h1>
              <h2 className="features-title text-5xl opacity-80 sm:text-6xl md:text-7xl lg:text-[7rem] 2xl:text-[10rem]">The Creator</h2>
              <h2 className="features-title text-5xl opacity-80 sm:text-6xl md:text-7xl lg:text-[7rem] 2xl:text-[10rem]">Of What You Want</h2>
            </div>
          </div>
        </section>

        <section className="container mx-auto flex min-h-screen w-full flex-col gap-y-10 bg-skin-main px-5 lg:px-24">
          <header className="w-full">
            <ul className="grid grid-cols-7 grid-rows-1 gap-36 overflow-auto lg:flex lg:gap-0 lg:gap-x-5">
              {categorias.map((categoria) => {
                return (
                  <li
                    key={categoria.name}
                    className={twMerge(
                      'inline-block h-auto w-32 grow cursor-pointer items-center justify-center rounded-full border-2 border-skin-main p-2 text-center text-sm lg:w-28 lg:text-base',
                      categoria.active ? 'bg-skin-secondary text-skin-secondary' : ''
                    )}
                  >
                    {categoria.name.toUpperCase()}
                  </li>
                );
              })}
            </ul>
          </header>
          <main className="flex flex-col flex-wrap justify-between gap-x-5 gap-y-5 sm:flex-row">
            {productos.map((producto) => (
              <div key={producto.name} className="grow rounded-xl border border-skin-muted bg-skin-main p-5 sm:w-5/12 lg:w-[30%]">
                <figure className="flex h-64 w-full justify-center rounded-xl bg-secondary-white-300 p-5">
                  <img src="/totte_bags_bad_bnny.png" className="w-fill h-full" alt="" />
                </figure>
                <div>
                  <span className="text-xl font-semibold text-secondary-white-300">{producto.name}</span>
                </div>
                <div className="flex justify-end">
                  <span className="text-xl font-bold text-skin-primary">$. {producto.price}</span>
                </div>
              </div>
            ))}
          </main>
        </section>
      </main>
    </>
  );
};

export default HomePage;
