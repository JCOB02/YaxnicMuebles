
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { Card, CardContent } from "./components/ui/card";
import Link from "next/link";
import { Hammer, Truck, Star, ArrowRight } from "lucide-react";
import { RiToolsFill } from "react-icons/ri";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { PiHouse } from "react-icons/pi";
import AnimateOnScroll from "./components/AnimateOnScroll";
import ScrollToTop from "./components/ScrollToTop";


export default function Home() {

  const services = [
    {
      icon: <Hammer className="h-8 w-8 text-gray-dark " />,
      title: "Fabricación Artesanal",
      description: "Cada pieza es única, creada por maestros carpinteros con técnicas tradicionales"
    },
    {
      icon: <TfiRulerAlt2 className="h-8 w-8 text-gray-dark"/>,
      title: "Diseño Personalizado",
      description: "Adaptamos cada mueble a tus espacios, gustos y necesidades específicas"
    },
    {
      icon: <Truck className="h-8 w-8 text-gray-dark" />,
      title: "Entrega e Instalación",
      description: "Servicio completo desde la fabricación hasta la instalación en tu hogar"
    },
    {
      icon: <RiToolsFill className="h-8 w-8 text-gray-dark" />,
      title: "Reparación y Mantenimiento",
      description: "Servicio completo desde la fabricación hasta la instalación en tu hogar"
    },
    {
      icon: <PiHouse className="h-8 w-8 text-gray-dark" />,
      title: "Carpinería en General",
      description: "Servicio completo desde la fabricación hasta la instalación en tu hogar"
    }
  ];

  const featuredProducts = [
    {
      title: "Starbucks Mérida Altabrisa",
      description: "Mesas y sillas que transforman cada comida en una experiencia especial",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Salas de Estar",
      description: "Sofás y muebles de sala diseñados para el confort y la elegancia",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Dormitorios Únicos",
      description: "Camas, cómodas y armarios que crean espacios de descanso perfectos",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

    const processes = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Evaluamos tus necesidades, espacios y preferencias de estilo"
    },
    {
      step: "02", 
      title: "Diseño y Cotización",
      description: "Creamos propuestas visuales y presupuestos detallados"
    },
    {
      step: "03",
      title: "Producción Artesanal",
      description: "Fabricamos cada pieza con técnicas tradicionales y modernas"
    },
    {
      step: "04",
      title: "Entrega e Instalación",
      description: "Llevamos y instalamos tus muebles con el máximo cuidado"
    }
  ];


  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <AnimateOnScroll />
      <Header />
      <HeroSection />
      
      
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-gray-950 from-1% via-gray-900 via-5% to-gray-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-light">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-light max-w-2xl mx-auto">
              Ofrecemos un servicio integral desde el diseño hasta la entrega
            </p>
          </div>

          <div className="space-y-8">
            {/* Primera fila: en móvil columna, en md+ fila con 3 elementos */}
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-8">
              {services.slice(0, 3).map((service, index) => (
                <Card
                  key={service.title}
                  className="text-center shadow-lg border-none rounded-lg bg-gray-light hover:scale-105 max-w-md scroll-animate"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">{service.icon}</div>
                    <h3 className="text-xl font-display font-semibold mb-4 text-gray-dark">
                      {service.title}
                    </h3>
                    <p className="text-gray-medium">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Segunda fila: en móvil columna, en md+ fila con 2 elementos centrados */}
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-8">
              {services.slice(3).map((service, index) => (
                <Card
                  key={service.title}
                  className="text-center border-none rounded-lg shadow-lg hover:scale-105 max-w-md scroll-animate"
                  style={{ animationDelay: `${(index + 3) * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">{service.icon}</div>
                    <h3 className="text-xl font-display font-semibold mb-4 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-r from-gray-medium/30 from-10% to-gray-light shadow-md">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-dark">
              Trabajos Realizados
            </h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              Descubre nuestros proyectos más recientes y cómo transformamos espacios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <Card key={product.title} className="overflow-hidden border-none rounded-sm shadow-lg scroll-animate hover:transform hover:scale-105" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6 bg-gray-dark">
                  <h3 className="text-2xl font-display font-semibold mb-3 text-gray-light/60">
                    {product.title}
                  </h3>
                  <p className="text-gray-light mb-4">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center scroll-animate">
            <Link 
              href="/proyectos"
              className="inline-flex hover:text-gray-light items-center gap-2 shadow-xl hover:bg-gray-dark rounded-lg text-gray-dark bg-white px-8 py-4 font-semibold transition-all duration-300 hover:transform hover:scale-105"
            >
              Nuestros proyectos
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-t from-gray-dark from 20% to-gray-dark/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-light">
              Nuestro Proceso
            </h2>
            <p className="text-xl text-gray-light/70 max-w-2xl mx-auto">
              Desde la primera idea hasta la entrega final, cada paso está cuidadosamente planificado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <Card key={process.step} className="text-center border-none bg-gray-medium rounded-lg shadow-lg scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="text-4xl font-display font-bold text-gray-light mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-gray-light/60">
                    {process.title}
                  </h3>
                  <p className="text-gray-light/90 text-md">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-t from-gray-light/50 from-20% to-gray-dark/30 text-foreground shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto scroll-animate">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-dark">
              ¿Listo para crear tu espacio ideal?
            </h2>
            <p className="text-xl py-5 text-gray-dark max-w-2xl mx-auto">
              Contáctanos hoy y comencemos a diseñar los muebles de tus sueños
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contacto"
                className="shadow-lg bg-gray-dark hover:bg-white rounded-lg text-white hover:text-gray-dark px-8 py-4 font-semibold transition-all duration-300 hover:transform hover:scale-105"
              >
                Solicitar Cotización
              </Link>
              <Link 
                href="/proyectos"
                className="shadow-lg rounded-lg bg-white text-black hover:transform hover:scale-105 px-8 py-4 font-semibold transition-all duration-300"
              >
                Ver Proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
