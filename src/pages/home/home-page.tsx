import { MessagesSquare } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { Truck } from 'lucide-react';
import { productos } from '../shop/shop';
import { Quote } from 'lucide-react';

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
        <section className="animate-fade-in-slow relative flex min-h-screen items-center justify-center bg-black">
          <figure
            className="absolute z-10 h-full w-full bg-cover bg-no-repeat object-cover opacity-10"
            style={{ backgroundImage: 'url("/chico_estadio.jpg")' }}
          ></figure>
          <div className="container absolute z-20 mx-auto flex flex-col items-start gap-y-10 px-5 font-bold text-skin-primary lg:px-24">
            <div className="flex flex-col gap-y-5">
              <h1 className="w-full text-center text-5xl md:text-6xl 2xl:text-8xl">Be</h1>
              <h2 className="w-full text-center text-5xl md:text-6xl 2xl:text-8xl">The Creator</h2>
              <h2 className="w-full text-center text-5xl md:text-6xl 2xl:text-8xl">Of What You Wear</h2>
              <h3 className="mb-4 text-center text-xl lg:text-2xl">Personalizamos tus camisas, hoodies, totebags, tazas y más.</h3>

              <div className="flex w-full flex-col items-center justify-center gap-x-5 gap-y-5 lg:flex-row lg:gap-y-0">
                <button className="w-full grow rounded-full border-2 border-skin-main bg-transparent p-3 text-skin-primary transition duration-300 hover:bg-skin-secondary hover:text-skin-secondary sm:w-3/4 lg:w-56 lg:grow-0 lg:p-5 lg:text-xl">
                  Comienza a Crear
                </button>
                <button className="w-full grow rounded-full border-4 bg-skin-secondary p-3 text-skin-secondary sm:w-3/4 lg:w-56 lg:grow-0 lg:p-5 lg:text-xl">
                  Contactanos
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-skin-secondary">
          <main className="container mx-auto flex flex-col flex-wrap gap-y-5 py-16 lg:flex-row">
            <h2 className="w-full text-center text-2xl font-bold text-skin-secondary md:text-4xl lg:text-5xl">Estamos para personalizar tu vida</h2>
            <ul className="container mx-auto flex w-full flex-col justify-between gap-x-5 lg:flex-row lg:px-24">
              {beneficios.map((beneficio) => (
                <li className="flex grow flex-col items-center gap-y-5 bg-skin-secondary p-5 text-center text-skin-secondary" key={beneficio.name}>
                  {beneficio.icon}
                  <span className="text-xl font-bold text-skin-secondary xl:text-3xl">{beneficio.name}</span>
                  <p className="text-skin-secondary lg:text-xl">{beneficio.description}</p>
                </li>
              ))}
            </ul>
          </main>
        </section>

        <section className="relative flex h-[80vh] justify-center">
          <div className="container absolute z-10 mx-auto grid h-full grow bg-skin-main text-skin-primary lg:px-24">
            <div className="flex h-full w-1/2 flex-col items-start justify-center gap-y-5">
              <h2 className="w-full text-6xl font-bold">Personalizaciones hechas a tu medida</h2>
              <p className="text-lg">
                Personalizamos todos tus articulos preferidos tu solo debes imaginarlo o inspirarte en diseño existente y lo hacemos realidad
              </p>
              <button className="w-full rounded-full border-2 border-skin-main bg-transparent p-3 text-xl font-bold text-skin-primary transition duration-300 hover:bg-skin-secondary hover:text-skin-secondary sm:w-3/4 lg:w-56 lg:p-5">
                Personaliza Ya!
              </button>
            </div>
          </div>
          <div
            className="absolute right-0 z-20 ml-auto  h-full w-2/5 grow bg-cover opacity-70"
            style={{ backgroundImage: 'url("/tote_bags_bad_bunny.jpg")' }}
          ></div>
        </section>

        <section className="h-auto bg-skin-secondary py-16">
          <main className="flex flex-col items-center gap-y-10">
            <section className="flex w-full flex-col items-center gap-y-10">
              <h2 className="w-full text-center text-2xl font-bold text-skin-secondary md:text-4xl lg:text-5xl">Ultimos Productos</h2>
              <ul className="container mx-auto flex justify-between gap-x-5 lg:px-24">
                {productos.slice(0, 3).map((producto) => (
                  <li className="max-h-96 w-[30%] overflow-hidden text-skin-secondary">
                    <img className="h-auto w-full" src={producto.image} alt={producto.name} />
                  </li>
                ))}
              </ul>
              <button className="w-full rounded-full border-2 border-skin-main bg-skin-main p-3 text-xl font-bold text-skin-primary transition duration-300 sm:w-3/4 lg:w-64 lg:p-5">
                Ver mas
              </button>
            </section>

            <section className="flex w-full flex-col items-center gap-y-10">
              <h2 className="w-full text-center text-2xl font-bold text-skin-secondary md:text-4xl lg:text-5xl">Testimonios de nuestros clientes</h2>
              <ul className="container mx-auto flex justify-between gap-x-5 lg:px-24">
                {productos.slice(0, 3).map((producto) => (
                  <li className="relative flex w-full grow items-center justify-center overflow-hidden border border-skin-secondary px-10 py-12 text-center text-skin-secondary">
                    <div className="absolute left-0 top-0 z-20 mb-5 px-5 py-2 text-skin-secondary">
                      <Quote />
                    </div>
                    <span className="w-full text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure molestiae minima commodi sequi explicabo consequatur suscipit
                      inventore laudantium sint iste sit distinctio tenetur, saepe facere laboriosam voluptatibus officiis velit.
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </section>
      </main>
    </>
  );
};

export default HomePage;
