
interface Eleccion {
  id: number
  icon: string
  titulo: string
  subtitulo: string
}

const eleccion: Eleccion[] = [
  {
    id: 1,
    icon: '/diseno-paleta.png',
    titulo: 'Diseños Personalizados',
    subtitulo: 'Nuestra colección de diseños exclusivos abarca desde lo vanguardista hasta lo clásico, y también ofrecemos opciones de personalización para que puedas crear algo verdaderamente único.',
  },
  {
    id: 2,
    icon: 'https://github.com/vspeed21/tienda-camisas/blob/master/img/icono_3.png?raw=true',
    titulo: 'Entrega Rápida',
    subtitulo: 'Nos enorgullece ofrecer una entrega rápida y eficiente para que puedas disfrutar de tus camisetas y tazas estampadas en tiempo récord.',
  },
  {
    id: 3,
    icon: 'https://github.com/vspeed21/tienda-camisas/blob/master/img/icono_4.png?raw=true',
    titulo: 'La mejor calidad',
    subtitulo: 'Nos esforzamos por brindarte productos que no solo sean visualmente impactantes, sino también excepcionales en términos de durabilidad y comodidad.',
  },
  {
    id: 3,
    icon: 'https://github.com/vspeed21/tienda-camisas/blob/master/img/icono_4.png?raw=true',
    titulo: 'Experiencia del Cliente Personalizada',
    subtitulo: 'Creemos que tu experiencia de compra debe ser tan especial como los productos que ofrecemos. Nuestro equipo de atención al cliente está comprometido a brindarte un servicio personalizado y atento en cada paso del camino.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen p-28">
      <div className="flex flex-col md:flex-row gap-5 items-center mb-4 md:mb-9 max-w-3xl mx-auto">
        <img
          src="/camisas_sin_nombres_de_colores.jpg"
          className="h-96 w-auto"
          alt="imagen-about"
        />
        <p>
          Somos una empresa apasionada dedicada a la creación de diseños únicos y emocionantes, plasmados en productos cotidianos como camisetas y tazas. Nuestro objetivo es transformar lo ordinario en extraordinario, añadiendo un toque de creatividad a cada aspecto de tu vida. Con años de experiencia en el mundo del diseño, nos enorgullece ofrecer una amplia gama de estilos que se adaptan a todas las personalidades y ocasiones. Cada diseño es concebido con amor y cuidado, y cada producto es una manifestación tangible de nuestra pasión por el arte y la expresión individual. Únete a nosotros en este viaje visual donde la moda se encuentra con la funcionalidad, y lleva contigo un pedazo de arte en cada prenda o taza que elijas.
        </p>
      </div>

      <hr className="" />

      <div className="flex flex-col md:flex-row my-6 gap-5">
        <div className="mb-3">
          <h2 className="text-2xl mb-1 font-bold">Misión</h2>
          <p>Inspirar y elevar la experiencia cotidiana a través de la fusión del arte y la funcionalidad. Nos esforzamos por crear diseños excepcionales que reflejen la diversidad y la creatividad del mundo que nos rodea</p>
        </div>

        <div className="mb-3">
          <h2 className="text-2xl mb-1 font-bold">Visión</h2>
          <p>Convertirnos en líderes reconocidos a nivel mundial en la industria de la creación de diseños y estampados en productos. Aspiramos a ser la primera elección para aquellos que buscan una manera única de expresarse y de regalar arte en forma tangible. A medida que avanzamos, nos esforzamos por innovar constantemente, colaborar con artistas talentosos y mantenernos a la vanguardia de las tendencias artísticas y tecnológicas</p>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center">¿Por qué elejirnos?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-6 items-center justify-center gap-3">
        {eleccion.map(item =>
          <div key={item.icon} className="flex flex-col gap-5">
            <img src={item.icon} alt="icon" className="h-40 w-80" />
            <h3 className="font-bold text-center text-lg -mt-5">{item.titulo}</h3>
            <p>
              {item.subtitulo}
            </p>
          </div>
        )}
      </div>

      <h2 className="text-4xl font-bold text-center">Nuestro Equipo</h2>

      <div className="max-w-md mx-auto mt-6">
        <img
          src="https://i.pinimg.com/236x/71/cd/da/71cdda8c1f6cce04f5edf25a4187513f.jpg"
          className="rounded mx-auto"
          alt="me"
        />
        <h3 className="font-bold text-xl text-center my-6">Maria Petronila</h3>

        <p>
          Con un talento innato para transformar ideas en obras de arte visuales trae un enfoque único a cada diseño que crea. Desde la conceptualización hasta la implementación,se dedica a convertir tus visiones en realidad tangible, aportando originalidad y autenticidad a cada prenda.
        </p>

      </div>

    </main>
  )
}
