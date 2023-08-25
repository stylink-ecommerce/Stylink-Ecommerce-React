import { twMerge } from 'tailwind-merge';
import { MessagesSquare } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { Truck } from 'lucide-react';

const categorias = [
  {
    name: 'Todos',
  },
  {
    name: 'Camisas',
    imagePath: '/bellota_hoodle.jpg',
    active: true,
  },
  {
    name: 'Tote Bags',
    imagePath: '/christamass_shirt.jpg',
  },
  {
    name: 'Suéteres',
    imagePath: '/couple_drawing.JPG',
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
    image: '/bellota_hoodie.jpg',
  },
  {
    name: 'Producto 2',
    category: 'Tote Bags',
    price: 12.49,
    image: '/christamass_shirt.jpg',
  },
  {
    name: 'Producto 3',
    category: 'Suéteres',
    price: 35.75,
    image: '/couple_drawing.jpeg',
  },
  {
    name: 'Producto 4',
    category: 'Hoodies',
    price: 28.99,
    image: '/harry_Styles.jpeg',
  },
  {
    name: 'Producto 5',
    category: 'Tazas',
    price: 8.99,
    image: '/hs_hoodie.JPG',
  },
  {
    name: 'Producto 6',
    category: 'Polaroid',
    price: 50.0,
    image: '/love_bed_momma.jpg',
  },
  {
    name: 'Producto 7',
    category: 'Polaroid',
    price: 50.0,
    image: '/love_yourself_back.jpg',
  },
  {
    name: 'Producto 8',
    category: 'Polaroid',
    price: 50.0,
    image: '/nasa_hoodie.jpeg',
  },
  {
    name: 'Producto 9',
    category: 'Polaroid',
    price: 50.0,
    image: '/ouch_mi_crozon_totebag.jpeg',
  },
  {
    name: 'Producto 10',
    category: 'Polaroid',
    price: 50.0,
    image: '/por_las_buenas_amistades.jpg',
  },
  {
    name: 'Producto 11',
    category: 'Polaroid',
    price: 50.0,
    image: '/pulsera_gray.jpg',
  },
  {
    name: 'Producto 12',
    category: 'Polaroid',
    price: 50.0,
    image: '/pulseras_colores.jpg',
  },
  {
    name: 'Producto 13',
    category: 'Polaroid',
    price: 50.0,
    image: '/pulseras_thank_you.jpg',
  },
  {
    name: 'Producto 14',
    category: 'Polaroid',
    price: 50.0,
    image: '/reggalo_platya.jpg',
  },
  {
    name: 'Producto 15',
    category: 'Polaroid',
    price: 50.0,
    image: '/santa_gift.jpg',
  },
  {
    name: 'Producto 16',
    category: 'Polaroid',
    price: 50.0,
    image: '/self_love_club.jpg',
  },
  {
    name: 'Producto 17',
    category: 'Polaroid',
    price: 50.0,
    image: '/thank_you.jpg',
  },
  {
    name: 'Producto 18',
    category: 'Polaroid',
    price: 50.0,
    image: '/tote_bags_bad_bunny.jpg',
  },
  {
    name: 'Producto 19',
    category: 'Polaroid',
    price: 50.0,
    image: '/taza_rolling_stones.jpg',
  },
  {
    name: 'Producto 20',
    category: 'Polaroid',
    price: 50.0,
    image: '/taza_stylink.JPG',
  },
  {
    name: 'Producto 21',
    category: 'Polaroid',
    price: 50.0,
    image: '/un_coco_tote_bag.jpg',
  },
  {
    name: 'Producto 22',
    category: 'Polaroid',
    price: 50.0,
    image: '/unag_friend.jpg',
  },
  {
    name: 'Producto 23',
    category: 'Polaroid',
    price: 50.0,
    image: '/universal_soderman_shirt.jpg',
  },
  {
    name: 'Producto 24',
    category: 'Polaroid',
    price: 50.0,
    image: '/walls_louis_tomlinson.jpg',
  },
  {
    name: 'Producto 25',
    category: 'Polaroid',
    price: 50.0,
    image: '/ymlqdq_shirt.jpg',
  },
  {
    name: 'Producto 25',
    category: 'Polaroid',
    price: 50.0,
    image: '/ymlqdq_shirt.jpg',
  },
  {
    name: 'Producto 25',
    category: 'Polaroid',
    price: 50.0,
    image: '/ymlqdq_shirt.jpg',
  },


  // Puedes continuar agregando más productos aquí...
];

const beneficios = [
  {
    name: 'Respuesta Rapida',
    description: 'Utilizamos los mejores materiales y técnicas de estampado para asegurar la calidad y durabilidad de nuestros productos.',
    icon: <MessagesSquare className="h-[3rem] w-[3rem] md:h-[3rem] md:w-[4rem]" />,
  },
  {
    name: 'Personalización Única',
    description: 'Ofrecemos una amplia gama de opciones de personalización para hacer que tus prendas y objetos sean verdaderamente únicos. ',
    icon: <Pencil className="h-[3rem] w-[3rem] md:h-[3rem] md:w-[4rem]" />,
  },
  {
    name: 'Envío Rápido y Seguro',
    description:
      'Nos comprometemos a entregar tu pedido de manera rápida y segura. Nos Aseguramos que tus productos lleguen en perfectas condiciones y en el tiempo prometido.',
    icon: <Truck className="h-[3rem] w-[3rem] md:h-[3rem] md:w-[4rem]" />,
  },
];

const HomePage = () => {
  return (
    <>
      {/* features box */}
      <main className="">
        <section className="main-page-bg animate-fade-in-slow flex min-h-screen items-center justify-center px-5 md:justify-start md:px-12 lg:px-24">
          <div className="relative z-0 flex flex-col items-center gap-y-10 font-bold text-skin-primary md:w-1/2">
            <div className="flex flex-col">
              <h1 className="w-full text-center text-5xl md:text-6xl 2xl:text-8xl">Be</h1>
              <h2 className="w-full text-center text-5xl md:text-6xl 2xl:text-8xl">The Creator</h2>
              <h2 className="w-full text-center text-5xl md:text-6xl 2xl:text-8xl">Of What You Wear</h2>
            </div>

            <div>
              <h3 className="mb-4 text-center text-xl lg:text-2xl">Personalizamos tus camisas, hoodies, totebags, tazas y más.</h3>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-y-5 md:flex-row md:gap-x-5">
              <button className="w-full grow rounded-full border-4 border-skin-main bg-skin-main p-3 text-skin-primary transition duration-300 hover:bg-skin-secondary hover:text-skin-secondary sm:w-3/4 lg:w-56 lg:grow-0 lg:p-5 lg:text-xl">
                Comienza a Crear
              </button>
              <button className="w-full grow rounded-full border-4 bg-skin-secondary p-3 text-skin-secondary sm:w-3/4 lg:w-56 lg:grow-0 lg:p-5 lg:text-xl">
                Contactanos
              </button>
            </div>
          </div>

          <div></div>
        </section>

        <section className="main-second-section-bg mx-auto flex min-h-screen flex-col-reverse items-center justify-center gap-y-5 px-5 lg:flex-row lg:px-24">
          <ul className="flex flex-col gap-y-5 md:w-1/2">
            {beneficios.map((beneficio) => (
              <li className="flex flex-col items-center gap-y-5 p-5 text-center" key={beneficio.name}>
                {beneficio.icon}
                <span className="text-xl font-bold xl:text-3xl">{beneficio.name}</span>
                <p className="text-skin-muted lg:text-xl">{beneficio.description}</p>
              </li>
            ))}
          </ul>
          <h1 className="w-full text-center text-4xl font-bold md:w-1/2 md:text-4xl lg:text-5xl 2xl:text-7xl">Estamos para personalizar tu vida</h1>
        </section>

        <section className="container mx-auto flex min-h-screen w-full flex-col justify-center gap-y-10 bg-skin-main px-5 py-16 lg:px-24 lg:py-24">
          <header className="w-full">
            <ul className="grid grid-cols-7 grid-rows-1 gap-36 overflow-auto lg:flex lg:gap-0 lg:gap-x-5">
              {categorias.map((categoria) => {
                return (
                  <li
                    key={categoria.name}
                    className={twMerge(
                      'inline-block h-auto w-32 grow cursor-pointer items-center justify-center rounded-full border-4 border-skin-main p-2 text-center text-sm font-bold lg:w-20 xl:text-xl',
                      categoria.active ? 'bg-skin-secondary text-skin-secondary' : ''
                    )}
                  >
                    <span>{categoria.name.toUpperCase()}</span>
                  </li>
                );
              })}
            </ul>
          </header>
          <main className="flex flex-col justify-between gap-x-5 gap-y-5 sm:flex-row sm:flex-wrap">
            {productos.map((producto) => (
              <div key={producto.name} className="w-full rounded-xl border border-skin-muted bg-skin-main p-1 sm:w-5/12 sm:grow lg:w-[30%] bg-[#7c6363]">
                <figure className="flex h-64 w-full justify-center p-0.1 ">
                  <img src={producto.image} className="w-full h-full rounded-xl" alt=" imagen producto" />
                </figure>
                <div>
                  <span className="text-xl font-semibold text-secondary-white my">{producto.name}</span>
                </div>
                <div className="flex justify-end">
                  <span className="text-xl font-bold text-skin-primary">L. {producto.price}</span>
                </div>
                <div className='my-3  text-center mx-2'>
                  <button className=" bg-[#0c0a09] px-20 py-2 bor rounded-lg">Comprar</button>
                </div>
              </div>
            ))}
          </main>
        </section>

        <section className="min-h-screen">
          <h1>Metodos de Pago</h1>
        </section>
      </main>
    </>
  );
};

export default HomePage;
