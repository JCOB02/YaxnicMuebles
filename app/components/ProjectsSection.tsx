
import Link from "next/link";
import { Card, CardContent } from "../components/ui/card";
import { slugify } from "../lib/utils";

const ProjectsSection = () => {
  const categories = [
    {
      name: "Cocinas",
      description: "Diseño y fabricación de cocinas funcionales con estilo moderno y distribución eficiente.",
      image: "yaxnicMuebles/cocinas/cocina3-2.jpg",

    },

    {
      name: "Closets y Vestidores",
      description: "Closets y vestidores a medida con organización práctica y diseño elegante.",
      image: "yaxnicMuebles/closets_y_vestidores/closet1-1.jpg",
    },
    {
      name: "Puertas",
      description: "Puertas con diseño personalizado para interiores y exteriores  que aportan estilo y presencia a tus espacios.",
      image: "yaxnicMuebles/puertas/puerta1-3.jpg",
    },
    {
      name: "Muebles de Exterior",
      description: "Muebles para exterior resistentes al clima con diseño elegante y gran durabilidad.",
      image: "yaxnicMuebles/muebles_de_exterior/exterior3-1.jpg",
    },
        {
      name: "Sillas y Mesas",
      description: "Sillas y mesas con diseño funcional y acabados de alta calidad.",
      image: "yaxnicMuebles/sillas_y_mesas/sm1-2.jpg",
    },

    {
      name: "Comerciales",
      description: "Muebles para negocios pensados para proyectar una imagen profesional y atractiva.",
      image: "yaxnicMuebles/comerciales/comercial1-1.webp",
    },  
    {
      name: "Restauraciones",
      description: "Restauración de muebles conservando su diseño y funcionalidad original.",
      image: "/yaxnicMuebles/restauraciones/restauracion2-2.jpg",
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-gradient-to-t from-gray-medium/40 from-10%  to-gray-light/10 to-100% ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-title font-light mb-4 text-gray-dark">
            Proyectos Realizados
          </h2>
          <p className="text-xl text-gray-dark max-w-2xl mx-auto">
            Colaboraciones y espacios amueblados con nuestro estilo único y personalizado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
  {categories.map((category, index) => (
    <Link 
      key={index}
      href={`/proyectos/${slugify(category.name)}`}
      className="h-full"
    >
      <Card 
        className="card-hover rounded-sm cursor-pointer group overflow-hidden border-none shadow-lg flex flex-col h-full"
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

        <CardContent className="p-6 flex-1 group-hover:bg-gray-light/50 bg-gray-dark group-hover:text-gray-dark text-gray-light/80 transition-colors duration-300 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-title mb-2">
              {category.name}
            </h3>
            <p className="font-title line-clamp-3">
              {category.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  ))}
</div>


        <div className="text-center mt-12">
          <Link 
            href="/contacto"
            className="inline-block hover:bg-gray-medium/60 hover:text-white bg-white text-gray-dark px-8 py-4 shadow-lg rounded-sm transition-all duration-300 hover:transform hover:scale-105"
          >
            Solicita tu Proyecto
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
