
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { Card, CardContent } from "./components/ui/card";
import Link from "next/link";
import { Hammer, Truck, Star, ArrowRight, Paintbrush } from "lucide-react";
import { RiToolsFill } from "react-icons/ri";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { PiHouse } from "react-icons/pi";
import AnimateOnScroll from "./components/AnimateOnScroll";
import ScrollToTop from "./components/ScrollToTop";
import Image from "next/image";

  const services = [
    {
      icon: <Hammer className="h-8 w-8 text-gray-dark " />,
      title: "Fabricación a Medida",
      description: "Carpintería a medida con muebles fabricados con calidad, precisión y detalle."
    },
    {
      icon: <TfiRulerAlt2 className="h-8 w-8 text-gray-dark"/>,
      title: "Diseño Personalizado",
      description: "Adaptamos cada mueble a tus espacios, gustos y necesidades específicas."
    },
      {
    icon: <Paintbrush className="h-8 w-8 text-gray-dark" />,
    title: "Pintura y Acabados",
    description: "Aplicación de barnices, pinturas y acabados de alta calidad para un resultado duradero."
  },
    {
      icon: <Truck className="h-8 w-8 text-gray-dark" />,
      title: "Entrega e Instalación",
      description: "Servicio completo desde la fabricación hasta la instalación en tu hogar."
    },
    {
      icon: <RiToolsFill className="h-8 w-8 text-gray-dark" />,
      title: "Reparación y Mantenimiento",
      description: "Reparación y mantenimiento de muebles y trabajos en madera para prolongar su vida útil."
    },
    {
      icon: <PiHouse className="h-8 w-8 text-gray-dark" />,
      title: "Carpinería en General",
      description: "Servicios de carpintería para proyectos residenciales y comerciales."
    }
  ];

  const featuredProyects = [
    {
      title: "Starbucks Chetumal",
      category: "comerciales",
      description: "Proyecto comercial para Starbucks con mobiliario funcional y alineado a su marca.",
      image: "/starbooksProject.webp"
    },
    {
      title: "Mesa de Centro",
      category: "sillas-y-mesas",
      description: "Mesa con madera de Encino, con soporte de herreria y cubierta de Granito de alta calidad.",
      image: "/yaxnicMuebles/sillas_y_mesas/sm1-1.jpg"
    },
    {
      title: "Cocina Moderna",
      category: "cocinas",
      description: "Cocina moderna diseñada a medida, con acabados de alta calidad y distribución funcional.",
      image: "/yaxnicMuebles/cocinas/cocina3-1.jpg"
    }
  ];

    const processes = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Evaluamos tus necesidades, espacios y preferencias de estilo."
    },
    {
      step: "02", 
      title: "Cotización",
      description: "Definimos materiales, medidas y costos para ofrecerte una cotización clara y precisa."
    },
    {
      step: "03",
      title: "Proceso de Fabricación",
      description: "Fabricamos cada pieza con precisión, cuidando cada detalle y acabado."
    },
    {
      step: "04",
      title: "Entrega e Instalación",
      description: "Llevamos e instalamos tus muebles con cuidado y precisión."
    }
  ];


export default function Home() {



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
            <h2 className="text-4xl md:text-6xl font-title font-light mb-4 text-gray-light">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-light max-w-2xl mx-auto">
              Ofrecemos un servicio integral desde el diseño hasta la entrega
            </p>
          </div>

          <div className="space-y-8">
            {/* Primera fila: en móvil columna, en md+ fila con 3 elementos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="text-center shadow-lg border-none rounded-lg bg-gray-light hover:scale-105 h-full scroll-animate"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8 flex flex-col items-center h-full">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>

                    <h3 className="text-xl font-display font-semibold mb-4 text-gray-dark">
                      {service.title}
                    </h3>

                    <p className="text-gray-medium min-h-[3.5rem]">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-10 bg-gradient-to-r from-gray-medium/30 from-10% to-gray-light shadow-md">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-6xl font-title font-light mb-4 text-gray-dark">
              Trabajos Realizados
            </h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              Descubre nuestros proyectos más recientes y cómo transformamos espacios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
  {featuredProyects.map((product, index) => (
    <Link
      href={`/proyectos/${product.category}`}
      key={product.title}
      className="h-full"
    >
      <Card
        className="h-full flex flex-col overflow-hidden border-none rounded-lg shadow-lg scroll-animate hover:scale-105 transition-transform"
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        {/* Imagen */}
        <div className="relative w-full h-48">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Contenido */}
        <CardContent className="p-6 bg-gray-dark flex flex-col flex-1">
          <h3 className="text-2xl font-title font-light mb-3 text-gray-light">
            {product.title}
          </h3>

          <p className="font-light text-gray-light mb-4 min-h-[3rem]">
            {product.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  ))}
</div>


          <div className="text-center scroll-animate">
            <Link 
              href="/proyectos"
              className="inline-flex font-title hover:text-gray-light items-center gap-2 shadow-xl hover:bg-gray-dark rounded-lg text-gray-dark bg-white px-8 py-4 font-semibold transition-all duration-300 hover:transform hover:scale-105"
            >
              Nuestros Proyectos
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-t from-gray-dark from 20% to-gray-dark/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-6xl font-title font-light mb-4 text-gray-light">
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
                  <div className="text-4xl font-title font-light text-gray-light mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-2xl md:text-2xl font-title font-ligth mb-3 text-gray-light/60">
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
            <h2 className="text-4xl md:text-6xl font-title font-light mb-4 text-gray-dark">
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
