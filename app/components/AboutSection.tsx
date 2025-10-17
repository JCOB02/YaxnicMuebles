
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      title: "Artesanía",
      description: "Cada pieza es trabajada a mano con técnicas tradicionales y modernas"
    },
    {
      title: "Calidad",
      description: "Utilizamos únicamente maderas seleccionadas y acabados premium"
    },
    {
      title: "Diseño Atemporal",
      description: "Creamos muebles que trascienden las tendencias del momento"
    }
  ];

  return (
    <section id="nosotros" className="py-20 wood-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Con más de 15 años de experiencia en el sector mueblero, Yaxnic Muebles nació 
              del amor por la madera y la pasión por crear espacios únicos. Somos una empresa 
              familiar que combina técnicas artesanales tradicionales con diseños contemporáneos, 
              creando piezas que no solo amueblan, sino que cuentan historias.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nuestro compromiso es crear muebles que perduren en el tiempo, tanto por su 
              calidad como por su diseño. Cada proyecto es único y personalizado según las 
              necesidades y estilo de vida de nuestros clientes.
            </p>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Nuestros Valores
              </h3>
              {values.map((value, index) => (
                <Card key={value.title} className="border-none shadow-md bg-card/80">
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Taller Yaxnic Muebles"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground border-none shadow-xl">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm">Años de Experiencia</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
