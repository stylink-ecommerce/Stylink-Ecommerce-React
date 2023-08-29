
import { MessagesSquare } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { Truck } from 'lucide-react';

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


        <section className="min-h-screen">
          <h1>Metodos de Pago</h1>
        </section>
      </main>
    </>
  );
};

export default HomePage;
