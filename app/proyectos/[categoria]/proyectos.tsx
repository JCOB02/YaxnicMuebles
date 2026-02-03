"use client";

import { Grid } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import ScrollToTop from "@/app/components/ScrollToTop";
import GaleriaModal from "@/app/components/GaleriaModal";

interface Proyecto {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  imagenes: string[];
}

export default function ProyectosClient({
  proyectos,
}: {
  proyectos: Proyecto[];
}) {
  const [proyectoActivo, setProyectoActivo] = useState<Proyecto | null>(null);

  return (
    <>
      <ScrollToTop />
      <AnimateOnScroll />

      <section className="bg-gradient-to-t from-gray-medium/20 to-gray-light px-4 md:px-10 py-10">
       <Grid container spacing={7} className="scroll-animate">
  {proyectos.map((p) => (
    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={p.id}>
      <div
        onClick={() => setProyectoActivo(p)}
        className="cursor-pointer group"
      >
        <div className="relative w-full h-[35vh] md:h-[50vh] overflow-hidden rounded-xl shadow-xl">
          {/* IMAGEN */}
          <Image
            src={p.imagenes[0]}
            alt={p.nombre}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            quality={90}
          />

          {/* OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t from-black/70 via-black/30 to-transparent
              opacity-0 md:opacity-0
              group-hover:opacity-100
              transition-opacity duration-300
            "
          />

          {/* TEXTO */}
          {/* <div
            className="
              absolute bottom-0 left-0 right-0 p-4
              text-white
              opacity-0
              group-hover:opacity-100
              transition-all duration-300
            "
          >
            <h3 className="text-lg md:text-xl font-medium">
              {p.nombre}
            </h3>
          </div> */}
        </div>
      </div>
    </Grid>
  ))}
</Grid>

      </section>

      {/* MODAL */}
      {proyectoActivo && (
        <GaleriaModal
          proyecto={proyectoActivo}
          onClose={() => setProyectoActivo(null)}
        />
      )}
    </>
  );
}
