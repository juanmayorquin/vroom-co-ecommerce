import React from "react";

const Producto = ({ img, name, description, price }) => {
  return (
    <div className="">
      <img
        src={img}
        alt={name}
        className="w-full h-40 object-cover mb-2 rounded"
        style={{ height: "160px" }}
      />
      <div>
        <p className="text-lg font-semibold">${price}</p>
        <h3 className="font-light">{name}</h3>
      </div>
    </div>
  );
};

export default Producto;
