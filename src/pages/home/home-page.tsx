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

        <section className="container mx-auto flex min-h-screen w-full flex-col gap-y-10 bg-skin-main lg:px-24">
          <header className="w-full">
            <ul className="flex gap-x-5">
              {categorias.map((categoria) => {
                // const classes = categoria.active ? (
                //   'rounded-full border-2 p-2'
                // ) : (

                // );

                return (
                  <li
                    key={categoria.name}
                    className={twMerge(
                      'grow cursor-pointer rounded-full border-4 border-skin-main p-3 text-2xl',
                      categoria.active ? 'bg-skin-secondary text-skin-secondary' : ''
                    )}
                  >
                    <h3 className="text-center"> {categoria.name.toUpperCase()}</h3>
                  </li>
                );
              })}
            </ul>
          </header>
          <main className="flex flex-wrap justify-between gap-y-5">
            {productos.map((producto) => (
              <div key={producto.name} className="w-[30%] rounded-xl border border-skin-muted bg-skin-main p-5">
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
