import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Términos y Condiciones",
};

export default function TerminosYCondiciones() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
        <h1 className="text-3xl font-title mb-6">Términos y Condiciones</h1>

        <p className="mb-4 text-sm text-gray-500">
          Última actualización: {new Date().toLocaleDateString("es-MX")}
        </p>

        <section className="space-y-6 leading-relaxed">
          <p>
            Al acceder y utilizar este sitio web, el usuario acepta los
            presentes Términos y Condiciones. Si no está de acuerdo con alguno
            de ellos, se recomienda no utilizar este sitio.
          </p>

          <div>
            <h2 className="text-xl font-title mb-2">
              1. Uso del sitio web
            </h2>
            <p>
              Este sitio web tiene como finalidad proporcionar información
              general sobre los servicios ofrecidos por{" "}
              <strong>Yaxnic Muebles</strong>. La información publicada es
              meramente informativa y puede cambiar sin previo aviso.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">
              2. Cotizaciones y servicios
            </h2>
            <p>
              Las cotizaciones de los servicios no se realizan a través de este
              sitio web. Cualquier cotización, presupuesto o acuerdo se llevará
              a cabo exclusivamente por medio de comunicación directa, ya sea
              vía WhatsApp o correo electrónico.
            </p>
            <p className="mt-2">
              El envío de un mensaje o solicitud de información no representa un
              compromiso u obligación contractual para ninguna de las partes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">
              3. Propiedad intelectual
            </h2>
            <p>
              Todos los contenidos de este sitio web, incluyendo textos,
              imágenes, logotipos y diseño, son propiedad de{" "}
              <strong>Yaxnic Muebles</strong> o se utilizan con la
              autorización correspondiente, y están protegidos por la
              legislación aplicable.
            </p>
            <p className="mt-2">
              Queda prohibida su reproducción total o parcial sin autorización
              previa.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">
              4. Limitación de responsabilidad
            </h2>
            <p>
              <strong>Yaxnic Muebles</strong> no se hace responsable por
              el uso que el usuario haga de la información contenida en este
              sitio web, ni por posibles daños derivados del acceso o uso del
              mismo.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">
              5. Enlaces a sitios de terceros
            </h2>
            <p>
              Este sitio puede contener enlaces a plataformas externas, como
              WhatsApp.{" "}
              <strong>Yaxnic Muebles</strong> no se hace responsable por
              el contenido, políticas o prácticas de privacidad de dichos
              sitios.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">
              6. Modificaciones
            </h2>
            <p>
              <strong>Yaxnic Muebles</strong> se reserva el derecho de
              modificar estos Términos y Condiciones en cualquier momento. Las
              modificaciones entrarán en vigor una vez publicadas en esta
              sección.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-title mb-2">
              7. Legislación aplicable
            </h2>
            <p>
              Estos Términos y Condiciones se rigen por las leyes aplicables en
              los Estados Unidos Mexicanos.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
