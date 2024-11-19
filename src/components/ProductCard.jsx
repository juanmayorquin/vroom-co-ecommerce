import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-medium mt-2">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-[#f20b0b] transition-all"
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;