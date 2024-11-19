import React, { useState, useEffect } from "react";
import { Menu, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/credentials";
import { useCart } from "../context/CartContext";
import Cart from "./Cart"; // Importa el componente Cart

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState({});
  const { cartItems } = useCart();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "Users", currentUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser(userData);
          } else {
            console.error("No se encontró el documento del usuario.");
            setUser({});
          }
        } catch (error) {
          console.error("Error al obtener el documento:", error.message);
          setUser({});
        }
      } else {
        setUser({});
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleUserMenu = () => setIsUserMenuOpen((prev) => !prev);

  return (
    <nav className="fixed w-full bg-neutral-950/90 backdrop-blur-sm z-50 shadow-sm text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/colecciones"
              className="hover:text-red-500 transition-colors"
            >
              Colecciones
            </Link>
            <a href="/about" className="hover:text-red-500 transition-colors">
              Sobre nosotros
            </a>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="p-2 hover:text-red-500 transition-colors hover:bg-neutral-800 rounded-md flex items-center"
              >
                <User className="h-6 w-6" />
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 z-50">
                  {user.name ? (
                    <div className="px-4 py-2">
                      <p className="font-medium">
                        Hola, <span className="font-bold">{user.name}</span>
                      </p>
                      {user.is_admin && (
                        <p className="text-sm text-gray-500">Administrador</p>
                      )}
                      <Link
                        to="/perfil"
                        className="block mt-2 text-blue-600 hover:underline"
                      >
                        Ver perfil
                      </Link>
                      {user.is_admin && (
                        <Link
                          className="block mt-2 text-blue-600 hover:underline"
                          to="/add-products"
                        >
                          Añadir productos
                        </Link>
                      )}
                      <button
                        className="block mt-2 text-red-600 hover:underline"
                        onClick={() => auth.signOut()}
                      >
                        Cerrar sesión
                      </button>
                    </div>
                  ) : (
                    <div className="px-4 py-2">
                      <Link
                        to="/login"
                        className="block text-blue-600 hover:underline"
                      >
                        Iniciar sesión
                      </Link>
                      <Link
                        to="/register"
                        className="block text-blue-600 hover:underline"
                      >
                        Registrarse
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Shopping Cart */}
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="p-2 hover:text-red-500 transition-colors hover:bg-neutral-800 rounded-md relative"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
              {isCartOpen && <Cart />}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="p-2 hover:text-red-500 transition-colors hover:bg-neutral-800 rounded-md relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:text-red-500 transition-colors hover:bg-neutral-800"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-4 px-4 py-2">
              <Link
                to="/colecciones"
                className="block text-white hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Colecciones
              </Link>
              <a
                href="/about"
                className="block text-white hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre nosotros
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
