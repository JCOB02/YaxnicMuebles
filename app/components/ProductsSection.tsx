
import { Card, CardContent } from "../components/ui/card";
import Link from "next/link";

const ProductsSection = () => {
  const categories = [
    {
      id: 1,
      name: "Silla de Director",
      image: "/Imagen de WhatsApp 2025-07-16 a las 23.33.52_daf048fa.jpg",
      description: "Espacios de convivencia y relajación"
    },
    {
      id: 2,
      name: "Comedores",
      image: "https://images.unsplash.com/photo-1449972358821-2d369374bbc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Mesas y sillas para reunir a la familia"
    },
    {
      name: "Recámaras",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Muebles para el descanso perfecto"
    },
    {
      name: "Oficinas",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Espacios de trabajo funcionales"
    },
    {
      name: "Decoración",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Accesorios que completan tu hogar"
    }
  ];

  return (
    <section id="productos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Nuestros Productos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada pieza es creada con dedicación artesanal y materiales de la más alta calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={index} 

              href={`/productos/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <Card 
              className="card-hover cursor-pointer group overflow-hidden border-none shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-semibold mb-2 text-foreground">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
            
              </CardContent>
            </Card>
          </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
