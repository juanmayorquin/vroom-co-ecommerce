import React, { useState } from "react";
import { useCart } from "../../../context/CartContext";
import { auth, db } from "../../../firebase/credentials";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  });
  const navigate = useNavigate();

  const calculateTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const order = {
        userId: auth.currentUser?.uid,
        items: cartItems,
        totalAmount: calculateTotalPrice(),
        deliveryInfo: formData,
        createdAt: new Date(),
      };

      await addDoc(collection(db, "Orders"), order);
      clearCart();
      navigate("/success"); // Redirige a una página de confirmación
    } catch (error) {
      console.error("Error al crear la orden:", error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Finalizar Pedido</h1>
      <div className="grid grid-cols-3 gap-8">
        {/* Resumen del pedido */}
        <div className="col-span-2 bg-white shadow-md p-6 rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Resumen del pedido</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Cantidad: {item.quantity}
                  </p>
                </div>
                <p className="text-lg font-semibold">
                  ${item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>${calculateTotalPrice()}</span>
          </div>
        </div>

        {/* Formulario de facturación */}
        <div className="bg-gray-100 shadow-md p-6 rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Datos de facturación</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium">
                Dirección de envío
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium">
                Ciudad
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Teléfono
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
            >
              Confirmar Pedido
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
