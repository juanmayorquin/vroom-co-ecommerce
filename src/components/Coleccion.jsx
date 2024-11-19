import React from "react";
import Producto from "./producto";

const Coleccion = ({ products }) => {
  return (
    <div className="mb-8 w-full max-w-4xl mx-auto flex flex-col items-center">
      <div className="flex flex-wrap w-full">
        {products.map((product) => (
          <Producto
            key={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Coleccion;
