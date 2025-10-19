
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/starbooksProject.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl text-gray-light md:text-7xl mb-6">
          Muebles con alma de madera
        </h1>
        <p className="text-xl text-white md:text-2xl font-light mb-8 fade-in opacity-90 max-w-2xl mx-auto">
          Diseños artesanales y modernos para tu hogar
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link 
            href="/productos"
            className="bg-gray-dark hover:bg-gray-medium rounded-lg shadow-lg text-gray-light hover:bg-white hover:text-gray-dark px-8 py-4 font-semibold transition-all duration-300 hover:transform hover:scale-105"
          >
            Ver Productos
          </Link>
          <Link 
            href="/proyectos"
            className="border text-white hover:bg-gray-dark hover:text-withe rounded-lg px-8 py-4 font-semibold transition-all duration-300"
          >
            Nuestros Proyectos
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
