"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import Image from "next/image";
import { useToast } from "../hooks/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const images = [
    '/yaxnicMuebles/puertas/puerta1-3.jpg',
    '/yaxnicMuebles/closets_y_vestidores/c_y_v1-1.jpg',
    '/yaxnicMuebles/muebles_de_exterior/me1-1.jpg',]

  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSending(true);
    try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
        variant: "success",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast({
        title: "Error al enviar mensaje",
        description: "Por favor, intenta de nuevo más tarde.",
        variant: "destructive",
      });
    }
  } catch (err) {
    toast({
      title: "Error",
      description: "Ocurrió un error al enviar el mensaje.",
      variant: "destructive",
    });
  } finally {
    setIsSending(false); 
  }
    
    
  };

  return (
    <section id="contacto" className=" pb-20 bg-gray-dark scroll-mt-24">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Contact Form */}
          <div className="lg:col-span-2 h-full">
            <Card className="border-none shadow-lg rounded-lg h-full">
              <CardHeader>
                <CardTitle className="text-4xl font-title font-light text-foreground">
                  Envíanos un mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm md:text-xl font-title font-medium text-gray-dark mb-2">
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
                      <label htmlFor="email" className="block text-sm md:text-xl font-medium font-title text-gray-dark mb-2">
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
                    <label htmlFor="message" className="block text-sm md:text-xl font-medium font-title text-gray-dark mb-2">
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
                    className="w-full bg-gray-dark hover:bg-gray-dark/90  rounded-xl text-lg py-3"
                    disabled={isSending}
                  >
                    {isSending ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className=" lg:col-span-1  lg:flex overflow-hidden">
            <div className="w-full overflow-hidden rounded-lg shadow-md">
              <Carousel className="relative w-full " opts={{ loop: true }} 
              plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}>
                <CarouselContent className="">
                  {images.map((image, index) => (
                    <CarouselItem key={index} className=" overflow-hidden">
                      <Image
                        src={`${image}`}
                        width={350}
                        height={480}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-[500px] object-fill rounded-lg block"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
