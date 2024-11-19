import React from "react";
import { CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="max-w-4xl h-screen mx-auto py-8 text-center grid place-content-center">
      <div className="flex flex-col gap-8">
        <CircleCheckBig className="text-green-600 h-24 w-24 mx-auto" />
        <h1 className="text-2xl font-bold text-green-600">
          ¡Pedido realizado con éxito!
        </h1>
      </div>
      <p className="mt-4 text-gray-700">
        Gracias por tu compra. Nos pondremos en contacto contigo pronto.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-medium py-2 px-6 rounded-md transition-colors shadow-lg"
      >
        Volver a inicio
      </Link>
    </div>
  );
};

export default Success;
