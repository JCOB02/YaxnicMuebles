'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

interface Props {
  params: { nombre: string };
}

const productos = [
  { id: "1", nombre: "Silla de Director", descripcion: "Descubre la elegancia de lo simple con nuestra Silla Director de Madera, una pieza que combina líneas limpias, funcionalidad y calidez natural. Fabricada en madera sólida con acabado oscuro y asiento de lona en tono neutro, esta silla ofrece comodidad y estilo en perfecta armonía." },
  { id: "2", nombre: "Mesa de Madera", descripcion: "Mesa de roble macizo." },
];

export default function ProductoDetalle({ params }: { params: Promise<{ nombre: string }> }) {
  const { nombre } = React.use(params);
  console.log("Nombre del producto:", nombre);
  const producto = productos.find((p) => p.nombre.toLowerCase().replace(/\s+/g, '-') === nombre);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }
  console.log("Producto encontrado:", producto);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen items-start justify-center gap-2 pt-24 px-10 lg:px-8 lg:pt-24">
        <div className="flex-none sm:h[60vh] w-full md:w-1/2 md:h-[45vh] lg:h-[70vh] relative overflow-hidden rounded-lg shadow-lg">
          <Carousel className="relative w-full h-full">
            <CarouselContent>
              <CarouselItem className="felx items-center justify-center hover:ring-2">
                <img
                  src={`/silla_director.webp`} // Assuming the image is in the public folder 
                  alt={producto.nombre}
                  className="w-auto h-full object-cover"
                />
              </CarouselItem>
              <CarouselItem className="felx items-center justify-center">
                <img
                  src={`/silla_director.webp`} // Assuming the image is in the public folder 
                  alt={producto.nombre}
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <span className="sr-only">Anterior</span>
            </CarouselPrevious>
            <CarouselNext className="absolute right-2 top-1/2 transform -translate
            -y-1/2">
              <span className="sr-only">Siguiente</span>
            </CarouselNext>
          </Carousel>
        </div>
        <div className="sm:w-1/2 p-4">
          <h1 className="text-2xl md:text-3xl text-wood-dark font-bold mb-4">{producto.nombre}</h1>
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full decoration-transparent">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold">
                Detalles del Producto
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base text-gray-700">{producto.descripcion}</p>
              </AccordionContent> 
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold">
                Especificaciones
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Material: Madera maciza</li>
                  <li>Dimensiones: 45cm x 45cm x 90cm</li>
                  <li>Color: Natural</li>
                  <li>Capacidad de peso: 120kg</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}
