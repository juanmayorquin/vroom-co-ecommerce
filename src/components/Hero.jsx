import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-full flex items-center bg-gradient-to-r from-neutral-900 to-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl font-bold mb-4 text-neutral-500">
          <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            ¡Vive la Velocidad!
          </span>
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Explora nuestra exclusiva colección de streetwear urbano y lleva tu
          pasión por el motorsport a las calles.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center px-6 py-3 bg-[#e02b0f] hover:bg-[#f20b0b]  transition-colors rounded-full text-white font-semibold"
        >
          Shop Now
          <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
