'use client';
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { Card, CardContent } from "../components/ui/card";
import { TreePine, Hammer, Heart, Users } from "lucide-react";


export default function AboutUs() {

  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timeline = [
    {
      year: "2009",
      title: "Los Inicios",
      description: "Fundamos Yaxnic con la visión de crear muebles únicos y personalizados"
    },
    {
      year: "2012",
      title: "Primera Expansión",
      description: "Abrimos nuestro primer showroom y expandimos el equipo de artesanos"
    },
    {
      year: "2016",
      title: "Reconocimiento",
      description: "Ganamos el premio a la mejor mueblería artesanal de la región"
    },
    {
      year: "2020",
      title: "Innovación Digital",
      description: "Incorporamos tecnología 3D para visualización de proyectos"
    },
    {
      year: "2024",
      title: "Presente",
      description: "Más de 200 clientes satisfechos y proyectos en 3 estados"
    }
  ];

  const team = [
    {
      name: "Miguel Yaxnic",
      role: "Fundador y Maestro Carpintero",
      description: "30 años de experiencia en carpintería tradicional y diseño de muebles",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Carmen Rodríguez",
      role: "Directora de Diseño",
      description: "Especialista en interiorismo y tendencias contemporáneas",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "José Martín",
      role: "Maestro Ebanista",
      description: "Experto en acabados finos y técnicas de restauración",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const philosophy = [
    {
      icon: <TreePine className="h-8 w-8 text-gray-light" />,
      title: "Respeto por la Naturaleza",
      description: "Utilizamos maderas de fuentes sostenibles y procesos ecoamigables"
    },
    {
      icon: <Hammer className="h-8 w-8 text-gray-light" />,
      title: "Tradición Artesanal",
      description: "Combinamos técnicas centenarias con herramientas modernas"
    },
    {
      icon: <Heart className="h-8 w-8 text-gray-light" />,
      title: "Pasión por el Detalle",
      description: "Cada pieza recibe atención personalizada y acabados perfectos"
    },
    {
      icon: <Users className="h-8 w-8 text-gray-light" />,
      title: "Compromiso Familiar",
      description: "Somos una empresa familiar que valora las relaciones duraderas"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gray-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-title font-light mb-6 text-white scroll-animate">
              Nuestra Historia
            </h1>
            <p className="text-xl text-gray-light max-w-3xl mx-auto scroll-animate">
              Una historia de pasión, tradición y compromiso con la excelencia en cada mueble que creamos.
            </p>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Timeline Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 from-20% to-gray-dark to-100% ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-title font-light mb-4 text-white">
                Nuestra Trayectoria
              </h2>
              <p className="text-xl text-gray-light max-w-2xl mx-auto">
                15 años de crecimiento y evolución constante
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-light transform md:-translate-x-0.5"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} scroll-animate`} style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gray-light rounded-full transform md:-translate-x-2 z-10"></div>
                    
                    <Card className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} bg-gray-light md:w-5/12 border-none rounded-sm shadow-lg`}>
                      <CardContent className="p-6">
                        <div className="text-2xl font-display font-bold text-primary mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-gray-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-title font-light mb-4 text-gray-dark">
                Nuestra Filosofía
              </h2>
              <p className="text-xl text-gray-dark max-w-2xl mx-auto">
                Los principios que guían cada decisión y cada creación
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {philosophy.map((item, index) => (
                <Card key={item.title} className="text-center border-none bg-gray-dark rounded-lg shadow-xl scroll-animate hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-display font-semibold mb-3 text-gray-light">
                      {item.title}
                    </h3>
                    <p className="text-gray-light text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

