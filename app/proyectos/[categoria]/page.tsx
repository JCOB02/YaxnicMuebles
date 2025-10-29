import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { slugify } from '../../lib/utils';
import { Grid } from '@mui/material';
import { Item } from '@radix-ui/react-accordion';
import AnimateOnScroll from '@/app/components/AnimateOnScroll';
import ScrollToTop from '@/app/components/ScrollToTop';


const proyectos = [
    
    { id: "1", nombre: "Proyecto Alpha", descripcion: "Descripción del Proyecto Alpha", categoria: "Cocinas", imagenes: ['../yaxnicMuebles/cocinas/cocina1-1.jpg', '../yaxnicMuebles/cocinas/cocina1-2.jpg', '../yaxnicMuebles/cocinas/cocina1-3.jpg'] }, 
    { id: "2", nombre: "Proyecto jpña", descripcion: "hola", categoria: "Cocinas", imagenes: ['yaxnicMuebles/cocinas/cocina2-1.jpg', 'yaxnicMuebles/cocinas/cocina2-2.jpg', 'yaxnicMuebles/cocinas/cocina2-3.jpg']  }, 
    { id: "10", nombre: "Proyecto jknga", descripcion: "gsdfa", categoria: "Cocinas", imagenes: ['yaxnicMuebles/cocinas/cocina3-1', 'yaxnicMuebles/cocinas/cocina3-2', 'yaxnicMuebles/cocinas/cocina3-3']  }, 
    { id: "100", nombre: "Proyecto dasdf", descripcion: "Dto Alpha", categoria: "Cocinas", imagenes: ['yaxnicMuebles/cocinas/cocina4-1', 'yaxnicMuebles/cocinas/cocina4-2', 'yaxnicMuebles/cocinas/cocina4-3']  }, 
    { id: "2", nombre: "Proyecto Beta", descripcion: "Descripción del Proyecto Beta", categoria: "Salas", imagenes: ['yaxnicMuebles/salas/sala1-1', 'yaxnicMuebles/salas/sala1-2', 'yaxnicMuebles/salas/sala1-3']  },
    { id: "3", nombre: "Proyecto Gamma", descripcion: "Descripción del Proyecto Gamma", categoria: "Closets y Vestidores", imagenes: ['yaxnicMuebles/closets_y_vestidores/closet1-1', 'yaxnicMuebles/closets_y_vestidores/closet1-2', 'yaxnicMuebles/closets_y_vestidores/closet1-3']  },
    { id: "4", nombre: "Proyecto Delta", descripcion: "Descripción del Proyecto Delta", categoria: "Puertas", imagenes: ['../yaxnicMuebles/puertas/puerta1-1.jpg', '../yaxnicMuebles/puertas/puerta1-2.jpg', '../yaxnicMuebles/puertas/puerta1-3.jpg']  },
    { id: "14", nombre: "Proyecto Delta", descripcion: "Descripción del Proyecto Delta", categoria: "Puertas", imagenes: ['../yaxnicMuebles/puertas/puerta2-1.jpg', '../yaxnicMuebles/puertas/puerta2-2.jpg', '../yaxnicMuebles/puertas/puerta2-3.jpg']  },
    {id: "15", nombre: "Puerta Cochera", descripcion: "Puerta de madera", categoria: "Puertas", imagenes: ['../yaxnicMuebles/puertas/puerta3-1.jpg', '../yaxnicMuebles/puertas/puerta3-2.jpg', '../yaxnicMuebles/puertas/puerta3-3.jpg']  },
    { id: "5", nombre: "Proyecto Epsilon", descripcion: "Descripción del Proyecto Epsilon", categoria: "Muebles de Exterior", imagenes: ['yaxnicMuebles/muebles_de_exterior/exterior1-1', 'yaxnicMuebles/muebles_de_exterior/exterior1-2', 'yaxnicMuebles/muebles_de_exterior/exterior1-3']  },
    { id: "6", nombre: "Proyecto Zeta", descripcion: "Descripción del Proyecto Zeta", categoria: "Baños", imagenes: ['yaxnicMuebles/banos/bano1-1', 'yaxnicMuebles/banos/bano1-2', 'yaxnicMuebles/banos/bano1-3']  },
    { id: "7", nombre: "Proyecto Eta", descripcion: "Descripción del Proyecto Eta", categoria: "Recámaras", imagenes: ['yaxnicMuebles/recamaras/recamara1-1', 'yaxnicMuebles/recamaras/recamara1-2', 'yaxnicMuebles/recamaras/recamara1-3']  },
    { id: "8", nombre: "Proyecto Theta", descripcion: "Descripción del Proyecto Theta", categoria: "Sillas y Mesas", imagenes: ['yaxnicMuebles/sillas_y_mesas/mesas1-1', 'yaxnicMuebles/sillas_y_mesas/mesas1-2', 'yaxnicMuebles/sillas_y_mesas/mesas1-3']  },
    { id: "9", nombre: "Proyecto Iota", descripcion: "Descripción del Proyecto Iota", categoria: "Comerciales", imagenes: ['yaxnicMuebles/comerciales/comercial1-1', 'yaxnicMuebles/comerciales/comercial1-2', 'yaxnicMuebles/comerciales/comercial1-3']  }
];


interface Proyecto {
    params: { categoria: string };
}


export default async function ProyectosPage({params}: { params: { categoria: string } }) {
    const { categoria } = params;

    const proyecto = proyectos.filter((p) => slugify(p.categoria) === slugify(categoria));
    console.log("Categoria buscada:", proyecto);

    if (!proyecto) {
        return <div>Proyecto no encontrado</div>;
    }

    return (
        <div className='main-h-screen'>
            <ScrollToTop />
            <AnimateOnScroll />
            <Header />

            <section className='bg-gray-dark mt-16 py-20 text-white flex items-center justify-center'>
                <h1 className='text-6xl font-title font-light text-center'>{proyecto[0].categoria}</h1>
            </section>
            <section className=''>
                {proyecto.map((p, index) => (
                <Grid container spacing={2} key={index} className="m-10 scroll-animate">
                    {/* Primer elemento - 7 columnas */}
                    <Grid size={8}>
                        <img className='rounded-lg shadow-2xl' src={p.imagenes[0]} alt="Proyecto Starbooks" style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
                    </Grid>
                    <Grid size={4}>
                        <h2 className='text-4xl font-semibold text-center mb-5'>{p.nombre}</h2>
                        <p className='text-lg text-center'>{p.descripcion}</p>
                    </Grid>

                    {/* Segundo bloque - 5 columnas */}
                    <Grid container direction="column" spacing={2} size={12}>
                        {/* Elemento superior */}
                        <Grid container spacing={2} size={12}>
                            <Grid size={6}>
                                <img className='rounded-lg shadow-2xl' src={p.imagenes[1]} alt="Proyecto Starbooks" style={{ width: "100%", height: "60vh", objectFit: "cover" }} />
                            </Grid>
                            <Grid size={6}>
                                <img className='rounded-lg shadow-2xl' src={p.imagenes[2]} alt="Proyecto Starbooks" style={{ width: "100%", height: "60vh", objectFit: "cover" }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
                ))}
            </section>
            <Footer />
        </div>
    );
}