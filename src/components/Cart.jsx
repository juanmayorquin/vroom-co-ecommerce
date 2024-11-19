import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="absolute right-0 top-16 bg-white text-black rounded-lg shadow-2xl w-96 z-50">
      {cartItems.length === 0 ? (
        <div className="p-6 text-center text-gray-500">Tu carrito está vacío.</div>
      ) : (
        <div className="p-6 space-y-6">
          {/* Lista de productos */}
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b pb-4 last:border-none">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400 disabled:bg-gray-100 disabled:text-gray-400"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="text-gray-700">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-800 font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm hover:underline mt-1"
                  >
                    Quitar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total y acciones */}
          <div className="space-y-4">
            <p className="text-center font-medium text-lg">
              Total: <span className="font-bold text-gray-800">${totalAmount.toFixed(2)}</span>
            </p>
            <Link
              to="/checkout"
              className="block text-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition"
            >
              Ir al checkout
            </Link>
            <button
              onClick={clearCart}
              className="block w-full text-center text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md font-medium transition"
            >
              Vaciar carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
