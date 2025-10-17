
import Link from "next/link";
import { Card, CardContent } from "../components/ui/card";
import { slugify } from "../lib/utils";

const ProjectsSection = () => {
  const categories = [
    {
      name: "Cocinas",
      description: "Amueblado completo de casa habitación con estilo contemporáneo y toques rústicos",
      image: "yaxnicMuebles/cocinas/IMG_20210113_172641.jpg",

    },
    {
      name: "Salas",
      description: "Diseño de espacios de trabajo funcionales con muebles ejecutivos de madera fina",
      image: "https://plus.unsplash.com/premium_photo-1681816189276-69731364c133?q=80&w=2091&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Closets y Vestidores",
      description: "Ambientación completa con mesas, sillas y decoración artesanal mexicana",
      image: "yaxnicMuebles/closets_y_vestidores/IMG-20191223-WA0021.jpg",
    },
    {
      name: "Puertas",
      description: "Muebles modernos y funcionales para espacios reducidos sin sacrificar elegancia",
      image: "yaxnicMuebles/puertas/IMG_20210121_165916.jpg",
    },
    {
      name: "Muebles de Exterior",
      description: "Ambientación completa con mesas, sillas y decoración artesanal mexicana",
      image: "yaxnicMuebles/muebles_de_exterior/IMG-20200629-WA0021.jpg",
    },
    {
      name: "Baños",
      description: "Ambientación completa con mesas, sillas y decoración artesanal mexicana",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Recámaras",
      description: "Ambientación completa con mesas, sillas y decoración artesanal mexicana",
      image: "yaxnicMuebles/recamaras/IMG_20201112_082957.jpg",
    },
    {
      name: "Sillas y Mesas",
      description: "Ambientación completa con mesas, sillas y decoración artesanal mexicana",
      image: "yaxnicMuebles/sillas_y_mesas/IMG_20200819_182030.jpg",
    },
    {
      name: "Comerciales",
      description: "Ambientación completa con mesas, sillas y decoración artesanal mexicana",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-gradient-to-t from-gray-medium/90 from-10% via-gray-600 via-20% to-gray-light/50 to-100% ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-dark">
            Proyectos Realizados
          </h2>
          <p className="text-xl text-brown-dark max-w-2xl mx-auto">
            Colaboraciones y espacios amueblados con nuestro estilo único y personalizado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={index} 

              href={`/proyectos/${slugify(category.name)}`}
            >
            <Card 
              key={category.name} 
              className="card-hover rounded-sm cursor-pointer group overflow-hidden border-none shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6 group-hover:bg-gray-medium/50 bg-gray-medium/10 group-hover:text-gray-light text-gray-dark transition-colors duration-300">
                <h3 className="text-2xl font-display font-semibold mb-2 ">
                  {category.name}
                </h3>
                <p>
                  {category.description}
                </p>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contacto"
            className="inline-block hover:bg-gray-medium/60 hover:text-white bg-white text-gray-dark px-8 py-4 shadow-lg rounded-sm transition-all duration-300 hover:transform hover:scale-105"
          >
            Solicita tu Proyecto
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
