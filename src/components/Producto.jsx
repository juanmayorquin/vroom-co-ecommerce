import React from "react";

const Producto = ({ imagen, nombre, descripcion, precio }) => {
  return (
    <div className="border rounded-md p-4 shadow-md transform transition-transform hover:scale-105 w-full h-auto">
    <img
      src={imagen}
      alt={nombre}
      className="w-full h-40 object-cover mb-2 rounded"
      style={{ height: "160px" }} // Asegurar consistencia de tamaño
    />
    <h3 className="text-lg font-bold text-gray-800">{nombre}</h3>
    <p className="text-sm text-gray-600">{descripcion}</p>
    <p className="text-lg font-semibold text-[#e02b0f] mt-2">${precio}</p>
  </div>

  );
};

export default Producto;
