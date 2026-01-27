
import { Card, CardContent } from "../components/ui/card";

const AboutSection = () => {
  const values = [
    {
      title: "Excelencia en Fabricación",
      description: "Cuidamos cada etapa del proceso para garantizar resultados impecables."
    },
    {
      title: "Calidad",
      description: "Utilizamos únicamente maderas seleccionadas y acabados premium."
    },
    {
      title: "Compromiso",
      description: "Asumimos cada proyecto con seriedad, puntualidad y atención al detalle."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-r from-white to-gray-medium/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-title font-light mb-6 text-gray-dark">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-gray-medium mb-8 leading-relaxed">
              Con más de 15 años de experiencia en el sector carpintero, Yaxnic Muebles nació 
              del amor por la madera y la pasión por crear espacios únicos. Somos una empresa familiar especializada en carpintería, dedicada al diseño y fabricación de mobiliario personalizado para espacios residenciales y comerciales, ofreciendo soluciones funcionales, estéticas y de alta calidad.
            </p>
            <p className="text-lg text-gray-medium mb-8 leading-relaxed">
              Nuestro compromiso es crear muebles que perduren con el tiempo, tanto por su 
              calidad como por su diseño. Cada proyecto es único y personalizado según las 
              necesidades y estilo de vida de nuestros clientes.
            </p>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-3xl font-title font-light text-gray-dark mb-4">
                Nuestros Valores
              </h3>
              {values.map((value, index) => (
                <Card key={value.title} className="border-none rounded-lg hover:scale-105 shadow-md bg-card/80 scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-4">
                    <h4 className="text-xl font-title text-gray-dark mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-medium">
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
                src="/starbooksProject.webp"
                alt="Taller Yaxnic Muebles"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-8 -left-8 bg-gray-dark text-primary-foreground border-none shadow-xl">
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
