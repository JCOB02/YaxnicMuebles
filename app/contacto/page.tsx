
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import AnimateOnScroll from "../components/AnimateOnScroll";
import ScrollToTop from "../components/ScrollToTop";
import { Card, CardContent } from "../components/ui/card";
import { Clock, Phone, Mail, MapPin, MessageCircle, Calendar } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8 text-gold" />,
      title: "Llámanos",
      description: "Para consultas inmediatas y asesoría personalizada",
      detail: "+52 55 1234 5678",
      action: "tel:+525512345678"
    },
    {
      icon: <Mail className="h-8 w-8 text-gold" />,
      title: "Escríbenos",
      description: "Envíanos tu proyecto y te contactaremos pronto",
      detail: "contacto@yaxnicmuebles.com",
      action: "mailto:contacto@yaxnicmuebles.com"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-gold" />,
      title: "WhatsApp",
      description: "Chatea con nosotros para respuestas rápidas",
      detail: "+52 55 9876 5432",
      action: "https://wa.me/525598765432"
    }
  ];

  const services = [
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Consulta Gratuita",
      description: "Evaluación inicial de tu proyecto sin costo alguno"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Visita Domiciliaria",
      description: "Medición y asesoría directamente en tu espacio"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Cotización 24h",
      description: "Presupuesto detallado en máximo 24 horas"
    }
  ];

  const locations = [
    {
      name: "Showroom Principal",
      address: "Av. Artesanos #123, Col. Industrial",
      city: "Ciudad de México, CDMX",
      hours: "Lun - Vie: 9:00 AM - 6:00 PM | Sáb: 9:00 AM - 2:00 PM",
      description: "Nuestro showroom principal con exposición completa de productos"
    },
    {
      name: "Taller de Producción",
      address: "Calle Manufactura #456, Zona Industrial",
      city: "Tlalnepantla, Estado de México",
      hours: "Lun - Vie: 8:00 AM - 5:00 PM",
      description: "Centro de producción donde puedes ver el proceso de fabricación"
    }
  ];

  const faqs = [
    {
      question: "¿Cuánto tiempo toma fabricar un mueble?",
      answer: "El tiempo varía según la complejidad, pero generalmente entre 2-4 semanas para piezas individuales y 6-8 semanas para proyectos completos."
    },
    {
      question: "¿Ofrecen garantía en sus productos?",
      answer: "Sí, todos nuestros muebles incluyen garantía de 5 años en estructura y 2 años en acabados y herrajes."
    },
    {
      question: "¿Realizan entregas a domicilio?",
      answer: "Ofrecemos entrega e instalación gratuita en CDMX y área metropolitana. Para otros estados, consulta nuestras tarifas especiales."
    },
    {
      question: "¿Puedo personalizar completamente el diseño?",
      answer: "Absolutamente. Cada mueble puede ser completamente personalizado en dimensiones, materiales, acabados y funcionalidad."
    }
  ];

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <AnimateOnScroll />
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gray-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gray-light scroll-animate">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-light max-w-3xl mx-auto scroll-animate">
              Estamos aquí para ayudarte a crear el espacio de tus sueños. 
              Hablemos sobre tu proyecto y hagámoslo realidad juntos.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-gray-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                Múltiples Formas de Contacto
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Elige la forma que más te convenga para iniciar tu proyecto
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={method.title} className="bg-gray-dark text-center border-none rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-400 cursor-pointer scroll-animate" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      {method.icon}
                    </div>
                    <h3 className="text-2xl font-display font-semibold mb-3 text-white">
                      {method.title}
                    </h3>
                    <p className="text-gray-light mb-4">
                      {method.description}
                    </p>
                    <p className="text-gray-light font-semibold mb-4">
                      {method.detail}
                    </p>
                    <a 
                      href={method.action}
                      className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Contactar
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={service.title} className="border-none shadow-md scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {service.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <ContactSection />

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                Preguntas Frecuentes
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Resolvemos las dudas más comunes de nuestros clientes
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={faq.question} className="border-none shadow-lg scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-display font-semibold mb-3 text-foreground">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
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