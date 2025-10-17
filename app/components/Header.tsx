'use client';

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/30 backdrop-blur-xl z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <h1 className="text-xl md:text-2xl text-white font-display font-bold">
              Yaxnic Muebles
            </h1>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return ( 
              <Link
                key={item.name}
                href={item.href}
                className={`group text-white transition-all duration-400 relative ${
                  isActive ? 'text-primary' : ''
                }`}
              >
                {item.name}
                        <span className={`absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/6 ${isActive ? 'w-1/2' : ''}`}></span>
        <span className={`absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/6 ${isActive ? 'w-1/2' : ''}`}></span>
              </Link>
            )})}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link href="/contacto">
              <Button className="bg-gray-dark rounded-lg hover:bg-white hover:text-gray-dark text-white transition-all duration-300 hover:scale-105">
                Contáctanos
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
                  Contáctanos
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
