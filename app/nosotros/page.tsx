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
  description: "Comenzamos ofreciendo trabajos de carpintería con dedicación y atención al detalle."
},
{
  year: "2012",
  title: "Crecimiento",
  description: "Ampliamos nuestros servicios y empezamos a atender más proyectos residenciales."
},
{
  year: "2016",
  title: "Experiencia",
  description: "Consolidamos nuestra forma de trabajo y la confianza de nuestros clientes."
},
{
  year: "2020",
  title: "Adaptación",
  description: "Continuamos operando y ajustándonos a las nuevas necesidades de nuestros clientes."
},
{
  year: new Date().getFullYear().toString(),
  title: "Actualidad",
  description: "Seguimos creando muebles a la medida con calidad y compromiso, desarrollando proyectos residenciales y comerciales."
}

  ];


  const philosophy = [
    {
      icon: <TreePine className="h-8 w-8 text-gray-light" />,
      title: "Respeto por la Naturaleza",
      description: "Utilizamos maderas de fuentes sostenibles y procesos ecoamigables."
    },
    {
      icon: <Hammer className="h-8 w-8 text-gray-light" />,
      title: "Vocación de Servicio",
      description: "Trabajamos para aportar valor real en cada espacio que creamos."
    },
    {
      icon: <Heart className="h-8 w-8 text-gray-light" />,
      title: "Pasión por el Detalle",
      description: "Cada pieza recibe atención personalizada y acabados perfectos."
    },
    {
      icon: <Users className="h-8 w-8 text-gray-light" />,
      title: "Compromiso Familiar",
      description: "Somos una empresa familiar que valora las relaciones duraderas."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gray-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-title font-light mb-6 text-white">
              Nuestra Historia
            </h1>
            <p className="text-xl text-gray-light max-w-3xl mx-auto  ">
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
                        <div className="text-2xl font-title font-light text-gray-dark mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-display font-light mb-2 text-gray-dark">
                          {item.title}
                        </h3>
                        <p className="text-gray-medium">
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

