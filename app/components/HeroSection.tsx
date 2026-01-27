
import Link from 'next/link';
import TypingEffect from './TypingEffect';

const HeroSection = () => {
return (
  <section 
    id="inicio" 
    className="relative min-h-screen overflow-hidden"
    style={{
      backgroundImage: `url('/starbooksProject.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 hero-gradient"></div>

    {/* Contenedor centrado verticalmente */}
    <div className="relative z-10 min-h-screen flex items-center justify-center px-4">

      <div className="text-center text-white max-w-4xl mx-auto">

        {/* TÍTULO con altura fija */}
        <div className="h-[110px] md:h-[160px] flex items-center justify-center">
          <h1 className="text-5xl font-title text-gray-light md:text-7xl text-center leading-tight">
            <TypingEffect />
          </h1>
        </div>

        {/* Texto */}
        <p className="text-xl text-white md:text-2xl font-light mb-8 fade-in opacity-90 max-w-2xl mx-auto">
          Diseños artesanales y modernos para tu hogar
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link 
            href="/nosotros"
            className="bg-gray-dark hover:bg-gray-medium rounded-lg shadow-lg text-gray-light hover:bg-white hover:text-gray-dark px-8 py-4 font-title font-light text-lg transition-all duration-300 hover:transform hover:scale-105"
          >
            Acerca de Nosotros
          </Link>

          <Link 
            href="/proyectos"
            className="border text-white hover:bg-gray-light hover:text-gray-dark rounded-lg px-8 py-4 font-light font-title text-lg transition-all duration-300"
          >
            Nuestros Proyectos
          </Link>
        </div>

      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>

  </section>
);
  
};

export default HeroSection;
