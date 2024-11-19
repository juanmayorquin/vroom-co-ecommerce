import React from "react";
import Producto from "./producto";

const Coleccion = ({ titulo, productos }) => {
  return (
    <div className="mb-8 w-full max-w-4xl mx-auto flex flex-col items-center">
      <h2 className="text-xl font-bold text-gray-700 mb-4">{titulo}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {productos.map((producto, index) => (
          <Producto
            key={index}
            imagen={producto.imagen}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
          />
        ))}
      </div>
    </div>
  );
};

export default Coleccion;
