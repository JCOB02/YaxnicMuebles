"use client";

import Image from "next/image";
import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GaleriaModalProps {
  proyecto: {
    nombre: string;
    imagenes: string[];
  };
  onClose: () => void;
}

export default function GaleriaModal({
  proyecto,
  onClose,
}: GaleriaModalProps) {
  // ESC para cerrar
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* BOTÓN CERRAR */}
        <button
  onClick={onClose}
  aria-label="Cerrar galería"
  className="
    absolute top-3 right-3 z-50
    text-white bg-black/60 hover:bg-black/80
    rounded-full
    w-12 h-12 md:w-10 md:h-10
    flex items-center justify-center
    text-xl
    transition
  "
>
  ✕
</button>

        <Carousel
          opts={{ align: "center", loop: true }}
          className="group w-full"
        >
          <CarouselContent>
            {proyecto.imagenes.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[70vh] flex items-center justify-center">
                  <Image
                    src={img}
                    alt={`${proyecto.nombre} ${index + 1}`}
                    fill
                    className="object-contain rounded-lg"
                    quality={100}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Flechas solo desktop */}
          {proyecto.imagenes.length > 1 && (
            <>
              <CarouselPrevious className="hidden md:flex md:left-10 opacity-0 group-hover:opacity-100 transition text-white bg-black/40 hover:bg-black/60 border-none" />
              <CarouselNext className="hidden md:flex md:right-10 opacity-0 group-hover:opacity-100 transition text-white bg-black/40 hover:bg-black/60 border-none" />
            </>
          )}
        </Carousel>
      </div>
    </div>
  );
}
