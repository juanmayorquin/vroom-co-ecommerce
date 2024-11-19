import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              En Vroom Co., fusionamos la adrenalina del motorsport con el
              estilo urbano, creando prendas únicas que inspiran velocidad y
              autenticidad. Nuestra misión es vestir tu pasión con diseño y
              calidad incomparables.{" "}
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Links rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-red-500 transition-colors">
                  Tienda
                </a>
              </li>
              <li>
                <a href="/talla" className="hover:text-red-500 transition-colors">
                  Guía de Tallas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: tienda@vroom.com</li>
              <li>Phone: +1 234 567 890</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Velocity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
