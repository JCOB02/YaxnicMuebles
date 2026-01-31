import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Aviso de Privacidad",
};

export default function AvisoDePrivacidad() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-24 text-gray-800">
        <h1 className="text-3xl font-title mb-6">Aviso de Privacidad</h1>

        <p className="mb-4 text-sm text-gray-500">
          Última actualización: {new Date().toLocaleDateString("es-MX")}
        </p>

        <section className="space-y-6 leading-relaxed">
          <p>
            En cumplimiento con lo establecido por la{" "}
            <strong>
              Ley Federal de Protección de Datos Personales en Posesión de los
              Particulares
            </strong>
            , se informa lo siguiente:
          </p>

          <div>
            <h2 className="text-xl font-title mb-2">
              1. Responsable de los datos personales
            </h2>
            <p>
              <strong>YaxnicMuebles</strong>, con domicilio en{" "}
              <strong>Calle 18, 97390 Umán, Yuc. México  </strong>, es responsable del uso y
              protección de sus datos personales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">
              2. Datos personales que se recaban
            </h2>
            <ul className="list-disc list-inside">
              <li>Nombre</li>
              <li>Correo electrónico</li>
              <li>Número telefónico</li>
              <li>Mensaje o información relacionada con la solicitud</li>
            </ul>
            <p className="mt-2">
              Los datos se proporcionan de manera voluntaria mediante el
              formulario de contacto o comunicación vía WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">
              3. Finalidad del tratamiento de los datos
            </h2>
            <ul className="list-disc list-inside">
              <li>Atender solicitudes de información</li>
              <li>Responder mensajes enviados por el formulario</li>
              <li>Dar seguimiento a consultas por correo o WhatsApp</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">
              4. Transferencia de datos
            </h2>
            <p>
              Sus datos personales no serán compartidos, vendidos ni
              transferidos a terceros sin su consentimiento, salvo obligación
              legal.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">
              5. Uso de plataformas de terceros
            </h2>
            <p>
              El uso del botón de WhatsApp implica que la comunicación se
              realizará mediante una plataforma externa, sujeta a sus propias
              políticas de privacidad.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">6. Derechos ARCO</h2>
            <p>
              El titular puede Acceder, Rectificar, Cancelar u Oponerse al
              tratamiento de sus datos personales.
            </p>
            <p className="mt-2 font-medium">
              yaxnicmuebles@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">
              7. Cambios al aviso de privacidad
            </h2>
            <p>
              Este aviso puede ser modificado en cualquier momento. Las
              actualizaciones se publicarán en esta misma sección.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
