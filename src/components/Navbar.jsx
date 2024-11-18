import React from 'react'
import { useState } from 'react';
import { Menu, ShoppingCart, User , X } from 'lucide-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <nav className="fixed w-full bg-neutral-950/90 backdrop-blur-sm z-50 shadow-sm text-white">
        <div className="max-w-7xl mx-auto md:max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href='/'>
                <img className='max-w-40 hidden md:block' src="/logo/vroom-logo.webp" alt="Vroom Co. Logo"/>
                <img className='max-w-12 block md:hidden' src="/logo/logo.webp" alt="Vroom Co. Logo"/>
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#new" className="hover:text-red-500 transition-colors">Novedades</a>
              <a href="#collections" className="hover:text-red-500 transition-colors">Colecciones</a>
              <a href="#racing" className="hover:text-red-500 transition-colors">Sobre nosotros</a>
              <Link to={"/login"} className="p-2 hover:text-red-500 transition-colors hover:bg-neutral-800 rounded-md">
                <User className="h-6 w-6" />
              </Link>
              <button className="p-2 hover:text-red-500 transition-colors hover:bg-neutral-800 rounded-md">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
  
            <div className="md:hidden flex items-center space-x-4">
            <Link to={"/login"} className="p-2 hover:text-red-500 transition-colors hover:bg-neutral-800 rounded-md">
                <User className="h-6 w-6" />
              </Link>
              <button className="p-2 hover:text-red-500 transition-colors hover:bg-neutral-800 rounded-md">
                <ShoppingCart className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:text-red-500 transition-colors hover:bg-neutral-800"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#new" className="block px-3 py-2 hover:text-red-500 transition-colors hover:bg-neutral-800">New Arrivals</a>
              <a href="#collections" className="block px-3 py-2 hover:text-red-500 transition-colors hover:bg-neutral-800">Collections</a>
              <a href="#racing" className="block px-3 py-2 hover:text-red-500 transition-colors hover:bg-neutral-800">Racing</a>
              <a href="#classics" className="block px-3 py-2 hover:text-red-500 transition-colors hover:bg-neutral-800">Classics</a>
            </div>
          </div>
        )}
      </nav>
    );
}

export default Navbar