import React from "react";

const Producto = ({ img, name, price }) => {
  return (
    <div className='flex flex-col border p-4 rounded-md shadow m-auto hover:shadow-lg transition duration-200 max-w-72 transform hover:scale-105'>
      <img
        src={img}
        alt={name}
        className="w-full object-cover mb-2 rounded"
      />
      <div>
        <p className="text-lg font-semibold text-red-600">${price}</p>
        <h3 className="font-light">{name}</h3>
      </div>
    </div>
  );
};

export default Producto;
