import React from 'react'
import { useState } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img className='max-w-40 hidden md:block' src="/logo/vroom-logo-oscuro.webp" alt="Vroom Co. Logo"/>
              <img className='max-w-16 block md:hidden' src="/logo/logo-oscuro.webp" alt="Vroom Co. Logo"/>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#new" className="text-gray-900 hover:text-gray-600">Novedades</a>
              <a href="#collections" className="text-gray-900 hover:text-gray-600">Colecciones</a>
              <a href="#racing" className="text-gray-900 hover:text-gray-600">Sobre nosotros</a>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
  
            <div className="md:hidden flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-900 hover:bg-gray-100"
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
              <a href="#new" className="block px-3 py-2 text-gray-900 hover:bg-gray-100">New Arrivals</a>
              <a href="#collections" className="block px-3 py-2 text-gray-900 hover:bg-gray-100">Collections</a>
              <a href="#racing" className="block px-3 py-2 text-gray-900 hover:bg-gray-100">Racing</a>
              <a href="#classics" className="block px-3 py-2 text-gray-900 hover:bg-gray-100">Classics</a>
            </div>
          </div>
        )}
      </nav>
    );
}

export default Navbar