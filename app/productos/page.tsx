
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsSection from "../components/ProductsSection";
import AnimateOnScroll from "../components/AnimateOnScroll";
import ScrollToTop from "../components/ScrollToTop";
import { Card, CardContent } from "../components/ui/card";
import { Star, Award, Palette } from "lucide-react";

export default function Products() {

  const features = [
    {
      icon: <Star className="h-8 w-8 text-gold" />,
      title: "Calidad Premium",
      description: "Maderas selectas importadas y nacionales con certificación de calidad"
    },
    {
      icon: <Award className="h-8 w-8 text-gold" />,
      title: "Garantía Extendida",
      description: "Todos nuestros productos incluyen garantía de 5 años en estructura"
    },
    {
      icon: <Palette className="h-8 w-8 text-gold" />,
      title: "Diseño Personalizado",
      description: "Adaptamos cada pieza a tus espacios y necesidades específicas"
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
      <Header />
      <ScrollToTop />
      <AnimateOnScroll />
      <div className="pt-5">
        {/* Hero Section */}

        {/* Products Grid */}
        <ProductsSection />

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                ¿Por qué elegir Yaxnic?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Más de una década creando muebles excepcionales que transforman espacios
                Cada mueble que creamos es una obra de arte funcional, diseñada para durar generaciones 
              y adaptarse perfectamente a tu estilo de vida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className="text-center border-none shadow-lg scroll-animate" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                Nuestro Proceso
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Desde la primera idea hasta la entrega final, cada paso está cuidadosamente planificado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processes.map((process, index) => (
                <Card key={process.step} className="text-center border-none shadow-lg scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="text-4xl font-display font-bold text-primary mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                      {process.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {process.description}
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