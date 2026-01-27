import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { slugify } from "../../lib/utils";
import ProyectosClient from "./proyectos";

const proyectos = [ { id: "1", nombre: "Proyecto Alpha", descripcion: "Descripción del Proyecto Alpha", categoria: "Cocinas", imagenes: ['/yaxnicMuebles/cocinas/cocina1-1.jpg', '/yaxnicMuebles/cocinas/cocina1-2.jpg', '/yaxnicMuebles/cocinas/cocina1-3.jpg', '/yaxnicMuebles/cocinas/cocina1-4.jpg'] }, 
    { id: "2", nombre: "Proyecto jpña", descripcion: "hola", categoria: "Cocinas", imagenes: ['/yaxnicMuebles/cocinas/cocina2-1.jpg', '/yaxnicMuebles/cocinas/cocina2-2.jpg', '/yaxnicMuebles/cocinas/cocina2-3.jpg', '/yaxnicMuebles/cocinas/cocina2-4.jpg'] }, 
    { id: "10", nombre: "Proyecto jknga", descripcion: "gsdfa", categoria: "Cocinas", imagenes: ['/yaxnicMuebles/cocinas/cocina3-1.jpg', '/yaxnicMuebles/cocinas/cocina3-2.jpg', '/yaxnicMuebles/cocinas/cocina3-3.jpg'] },
    { id: "100", nombre: "Proyecto dasdf", descripcion: "Dto Alpha", categoria: "Cocinas", imagenes: ['/yaxnicMuebles/cocinas/cocina4-1.jpg', '/yaxnicMuebles/cocinas/cocina4-2.jpg', '/yaxnicMuebles/cocinas/cocina4-3.jpg'] }, 
    { id: "100", nombre: "Proyecto dasdf", descripcion: "Dto Alpha", categoria: "Cocinas", imagenes: ['/yaxnicMuebles/cocinas/cocina5-1.jpg', '/yaxnicMuebles/cocinas/cocina5-2.jpg', '/yaxnicMuebles/cocinas/cocina5-3.jpg'] }, 
    { id: "10", nombre: "Proyecto Beta", descripcion: "Descripción del Proyecto Beta", categoria: "Salas", imagenes: ['yaxnicMuebles/salas/sala1-1', 'yaxnicMuebles/salas/sala1-2', 'yaxnicMuebles/salas/sala1-3'] }, 
    { id: "3", nombre: "Proyecto Gamma", descripcion: "Descripción del Proyecto Gamma", categoria: "Closets y Vestidores", imagenes: ['/yaxnicMuebles/closets_y_vestidores/closet1-1.jpg', '/yaxnicMuebles/closets_y_vestidores/closet1-2.jpg', '/yaxnicMuebles/closets_y_vestidores/closet1-3.jpg'] }, 
    { id: "13", nombre: "Proyecto Gamma", descripcion: "Descripción del Proyecto Gamma", categoria: "Closets y Vestidores", imagenes: ['/yaxnicMuebles/closets_y_vestidores/closet2-1.jpg', '/yaxnicMuebles/closets_y_vestidores/closet2-2.jpg', '/yaxnicMuebles/closets_y_vestidores/closet2-3.jpg'] },
    { id: "101", nombre: "Proyecto Gamma", descripcion: "Descripción del Proyecto Gamma", categoria: "Closets y Vestidores", imagenes: ['/yaxnicMuebles/closets_y_vestidores/closet3-1.jpg', '/yaxnicMuebles/closets_y_vestidores/closet3-2.jpg', '/yaxnicMuebles/closets_y_vestidores/closet3-3.jpg'] },
    
    { id: "4", nombre: "Proyecto Delta", descripcion: "Descripción del Proyecto Delta", categoria: "Puertas", imagenes: ['/yaxnicMuebles/puertas/puerta1-1.jpg', '/yaxnicMuebles/puertas/puerta1-2.jpg', '/yaxnicMuebles/puertas/puerta1-3.jpg'] }, 
    { id: "14", nombre: "Proyecto Delta", descripcion: "Descripción del Proyecto Delta", categoria: "Puertas", imagenes: ['/yaxnicMuebles/puertas/puerta2-1.jpg', '/yaxnicMuebles/puertas/puerta2-2.jpg', '/yaxnicMuebles/puertas/puerta2-3.jpg'] }, 
    {id: "15", nombre: "Puerta Cochera", descripcion: "Puerta de madera", categoria: "Puertas", imagenes: ['/yaxnicMuebles/puertas/puerta3-1.jpg', '/yaxnicMuebles/puertas/puerta3-2.jpg', '/yaxnicMuebles/puertas/puerta3-3.jpg'] }, 
    { id: "5", nombre: "Proyecto Epsilon", descripcion: "Descripción del Proyecto Epsilon", categoria: "Muebles de Exterior", imagenes: ['/yaxnicMuebles/muebles_de_exterior/exterior1-1.jpg', '/yaxnicMuebles/muebles_de_exterior/exterior1-2.jpg', '/yaxnicMuebles/muebles_de_exterior/exterior1-3.jpg'] }, 
    { id: "11", nombre: "Proyecto Epsilon", descripcion: "Descripción del Proyecto Epsilon", categoria: "Muebles de Exterior", imagenes: ['/yaxnicMuebles/muebles_de_exterior/exterior2-1.jpg', '/yaxnicMuebles/muebles_de_exterior/exterior2-2.jpg', '/yaxnicMuebles/muebles_de_exterior/exterior2-3.jpg'] }, 
    { id: "12", nombre: "Proyecto Epsilon", descripcion: "Descripción del Proyecto Epsilon", categoria: "Muebles de Exterior", imagenes: ['/yaxnicMuebles/muebles_de_exterior/exterior3-1.jpg', '/yaxnicMuebles/muebles_de_exterior/exterior3-2.jpg', '/yaxnicMuebles/muebles_de_exterior/exterior3-3.jpg'] }, // 
    { id: "16", nombre: "Proyecto Epsilon", descripcion: "Descripción del Proyecto Epsilon", categoria: "Sillas y Mesas", imagenes: ['/yaxnicMuebles/sillas_y_mesas/sm1-1.jpg', '/yaxnicMuebles/sillas_y_mesas/sm1-2.jpg', '/yaxnicMuebles/sillas_y_mesas/sm1-1.jpg'] }, // 
  //{ id: "6", nombre: "Proyecto Zeta", descripcion: "Descripción del Proyecto Zeta", categoria: "Baños", imagenes: ['yaxnicMuebles/banos/bano1-1', 'yaxnicMuebles/banos/bano1-2', 'yaxnicMuebles/banos/bano1-3'] }, // 
  //{ id: "7", nombre: "Proyecto Eta", descripcion: "Descripción del Proyecto Eta", categoria: "Recámaras", imagenes: ['yaxnicMuebles/recamaras/recamara1-1', 'yaxnicMuebles/recamaras/recamara1-2', 'yaxnicMuebles/recamaras/recamara1-3'] }, 
  // // { id: "8", nombre: "Proyecto Theta", descripcion: "Descripción del Proyecto Theta", categoria: "Sillas y Mesas", imagenes: ['yaxnicMuebles/sillas_y_mesas/mesas1-1', 'yaxnicMuebles/sillas_y_mesas/mesas1-2', 'yaxnicMuebles/sillas_y_mesas/mesas1-3'] }, 
    { id: "59", nombre: "Proyecto Stabucks Chetumal", descripcion: "Proyecto starbucks chetumal", categoria: "Comerciales", imagenes: ['/yaxnicMuebles/comerciales/comercial1-1.jpg', '/yaxnicMuebles/comerciales/comercial1-2.jpg', '/yaxnicMuebles/comerciales/comercial1-3.jpg'] },
  // 
    { id: "60", nombre: "Proyecto Restauracion", descripcion: "Descripción del Proyecto Comercial 2", categoria: "Restauraciones", imagenes: ['/yaxnicMuebles/restauraciones/restauracion1-1.jpg', '/yaxnicMuebles/restauraciones/restauracion1-2.jpg', '/yaxnicMuebles/restauraciones/restauracion1-3.jpg'] },
    { id: "61", nombre: "Proyecto Restauracion", descripcion: "Descripción del Proyecto Comercial 2", categoria: "Restauraciones", imagenes: ['/yaxnicMuebles/restauraciones/restauracion2-1.jpg', '/yaxnicMuebles/restauraciones/restauracion2-2.jpg', '/yaxnicMuebles/restauraciones/restauracion2-3.jpg', '/yacnicMuebles/restauraciones/restauracion2-4.jpg', 'restauraciones/restauracion2-5.jpg'] },
    { id: "62", nombre: "Proyecto Restauracion", descripcion: "Descripción del Proyecto Comercial 2", categoria: "Restauraciones", imagenes: ['/yaxnicMuebles/restauraciones/restauracion3-1.jpg', '/yaxnicMuebles/restauraciones/restauracion3-2.jpg', '/yaxnicMuebles/restauraciones/restauracion3-3.jpg', '/yaxnicMuebles/restauraciones/restauracion3-4.jpg', '/yaxnicMuebles/restauraciones/restauracion3-5.jpg'] },
    { id: "63", nombre: "Proyecto Restauracion", descripcion: "Descripción del Proyecto Comercial 2", categoria: "Restauraciones", imagenes: ['/yaxnicMuebles/restauraciones/restauracion4-1.jpg', '/yaxnicMuebles/restauraciones/restauracion4-2.jpg', '/yaxnicMuebles/restauraciones/restauracion4-3.jpg', '/yaxnicMuebles/restauraciones/restauracion4-4.jpg'] },
    ];

export default async function ProyectosPage({
    params,
    }: {
    params: { categoria: string };
    }) {
    const { categoria } = await params;

    const proyecto = proyectos.filter(
        (p) => slugify(p.categoria) === slugify(categoria)
    );

    if (proyecto.length === 0) {
        return <div className="p-10 text-center">Proyecto no encontrado</div>;
    }

    return (
        <div className="min-h-screen">
        <Header />

        <section className="bg-gray-dark mt-16 py-8 md:py-20 text-white flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-title font-light text-center">
            {proyecto[0].categoria}
            </h1>
        </section>

        {/* 👇 SOLO ESTO ES CLIENTE */}
        <ProyectosClient proyectos={proyecto} />

        <Footer />
        </div>
    );
    }

