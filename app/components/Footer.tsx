
import { Home } from "lucide-react";
import Link from "next/link";
import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100064035131640", icon: SiFacebook },
    { name: "Instagram", href: "https://www.instagram.com/yaxnicmuebles?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: SiInstagram },
    { name: "WhatsApp", href: "https://wa.me/529992395744", icon: SiWhatsapp },
  ];

  return (
    <footer className="bg-gray-dark text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity">
              <Home className="h-8 w-8" />
              <h3 className="text-2xl font-display font-bold">Yaxnic Muebles</h3>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Creamos muebles con alma de madera que transforman espacios y cuentan historias. 
              Artesanía mexicana con diseño contemporáneo.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({name, href, icon: Icon}) => (
                <a
                  key={name}
                  href={href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center target: justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                  title={name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5 text-gray-light"/>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-gray-light transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-gray-light transition-colors duration-200">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-gray-light transition-colors duration-200">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-gray-light transition-colors duration-200">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-light">
              <p className="flex items-center gap-2"><Mail className="text-gray-400 " /> yaxnicmuebles@gmail.com</p>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Yaxnic Muebles. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary-foreground text-sm transition-colors duration-200">
              Aviso de Privacidad
            </a>
            <a href="#" className="text-gray-400 over:text-primary-foreground text-sm transition-colors duration-200">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
