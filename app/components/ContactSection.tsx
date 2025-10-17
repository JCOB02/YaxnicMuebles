"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Contact, Home, User } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Nos encantaría escuchar tus ideas y ayudarte a hacerlas realidad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Contact className="h-6 w-6 text-primary" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Dirección</h4>
                  <p className="text-muted-foreground">
                    Av. Artesanos #123<br />
                    Col. Industrial<br />
                    Ciudad de México, CDMX 01234
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                  <p className="text-muted-foreground">+52 55 1234 5678</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">contacto@yaxnicmuebles.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Horarios</h4>
                  <p className="text-muted-foreground">
                    Lun - Vie: 9:00 AM - 6:00 PM<br />
                    Sáb: 9:00 AM - 2:00 PM<br />
                    Dom: Cerrado
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-foreground">
                  Envíanos un mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nombre completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        required
                        className="border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Correo electrónico
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                        className="border-border"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntanos sobre tu proyecto..."
                      required
                      rows={6}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
