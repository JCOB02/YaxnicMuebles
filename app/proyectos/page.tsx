"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import { Card, CardContent } from "../components/ui/card";
import { Users, Clock, MapPin, Star } from "lucide-react";
import AnimateOnScroll from "../components/AnimateOnScroll";
import ScrollToTop from "../components/ScrollToTop";

export default function Projects() {

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      number: "200+",
      label: "Clientes Satisfechos"
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      number: "15",
      label: "Años de Experiencia"
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      number: "3",
      label: "Estados Atendidos"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      project: "Casa Moderna Satelite",
      comment: "Superaron todas nuestras expectativas. La calidad y atención al detalle son excepcionales.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      project: "Oficinas Corporativas",
      comment: "Profesionales en cada aspecto. Entregaron exactamente lo que habíamos visualizado.",
      rating: 5
    },
    {
      name: "Ana López",
      project: "Departamento Premium",
      comment: "Transformaron completamente nuestro espacio. Muebles hermosos y funcionales.",
      rating: 5
    }
  ];

  const services = [
    {
      title: "Proyectos Residenciales",
      description: "Casas, departamentos y espacios habitacionales completos",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Espacios Comerciales",
      description: "Oficinas, restaurantes y establecimientos comerciales",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Proyectos Corporativos",
      description: "Grandes desarrollos y amueblado de múltiples espacios",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];


  return (

    <div className="min-h-screen">
        <ScrollToTop />
        <AnimateOnScroll />
        <Header />
        <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gray-dark scroll-animate">
                Nuestros Proyectos
            </h1>
            <p className="text-xl text-brown-dark max-w-3xl mx-auto scroll-animate">
                Cada proyecto es una historia única. Descubre cómo hemos transformado espacios 
                y creado ambientes excepcionales para nuestros clientes.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center  scroll-animate" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-display text-gray-light font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <ProjectsSection />


        {/* Testimonials Section */}
      <section className="py-20 bg-gray-light shadow-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-dark">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-dark max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="text-center bg-gray-dark rounded-lg border-none shadow-lg scroll-animate" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-7 flex flex-col justify-between h-full">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-light mb-6 italic text-lg">
                    "{testimonial.comment}"
                  </p>
                  <h4 className="font-semibold text-gray-light text-md">
                    {testimonial.name}
                  </h4>
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

