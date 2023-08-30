import { twMerge } from 'tailwind-merge';
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

export const productos = [
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

const ShopPage = () => {
  return (
    <section className="container mx-auto my-10 flex min-h-screen w-full flex-col justify-center gap-y-10 bg-skin-main px-5 py-16 lg:px-24 lg:py-24">
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
          <div
            key={producto.name}
            className="w-full rounded-xl border border-skin-muted bg-skin-main p-1 shadow-lg shadow-pink-500/50 hover:scale-105 sm:w-5/12 sm:grow lg:w-[30%]"
          >
            <figure className="p-0.1 flex h-64 w-full justify-center ">
              <img src={producto.image} className="h-full w-full rounded-xl " alt=" imagen producto" />
            </figure>
            <div className="m-2 mb-0 flex justify-between">
              <span className="text-secondary-white text-xl font-semibold">{producto.name}</span>
              <span className="text-xl font-bold text-secondary-white-950 text-skin-primary">L. {producto.price}</span>
            </div>
            <div className="mx-8  my-3 grid grid-flow-col justify-stretch">
              <button className=" bor rounded-lg bg-[#3b3b3b] px-20 py-2 transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#24522a]">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default ShopPage;
