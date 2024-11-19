import React, { useState, useEffect } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/credentials";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState(null); // Cambiado de "" a null para manejar el estado inicial

  // Monitorea el estado de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "Users", currentUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserName(userData.name || "Usuario"); // Si no hay nombre, muestra "Usuario"
          } else {
            console.error("No se encontró el documento del usuario.");
            setUserName("Usuario"); // Nombre genérico si no hay datos
          }
        } catch (error) {
          console.error("Error al obtener el documento:", error.message);
          setUserName("Usuario");
        }
      } else {
        setUserName(null); // Sin usuario autenticado
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className="fixed w-full bg-neutral-950/90 backdrop-blur-sm z-50 shadow-sm text-white">
      <div className="max-w-7xl mx-auto md:max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/">
              <img
                className="max-w-40 hidden md:block"
                src="/logo/vroom-logo.webp"
                alt="Vroom Co. Logo"
              />
              <img
                className="max-w-12 block md:hidden"
                src="/logo/logo.webp"
                alt="Vroom Co. Logo"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#new" className="hover:text-red-500 transition-colors">
              Novedades
            </a>

            <Link to="/colecciones" className="hover:text-red-500 transition-colors">
              Colecciones
            </Link>
            <a href="/about" className="hover:text-red-500 transition-colors">
              Sobre nosotros
            </a>
            {userName ? (
              // Si hay usuario autenticado, muestra "Hola, Usuario"
              <Link
                to="/perfil"
                className="p-2 hover:text-red-500 transition-colors hover:bg-neutral-800 rounded-md"
              >
                Hola, {userName}
              </Link>
            ) : (
              // Si no hay usuario autenticado, muestra "Iniciar sesión"
              <Link
                to="/login"
                className="p-2 hover:text-red-500 transition-colors hover:bg-neutral-800 rounded-md"
              >
                Iniciar sesión
              </Link>
            )}
            <button className="p-2 hover:text-red-500 transition-colors hover:bg-neutral-800 rounded-md">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button className="p-2 hover:text-red-500 transition-colors hover:bg-neutral-800 rounded-md">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:text-red-500 transition-colors hover:bg-neutral-800"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
