import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/credentials";
import { toast } from "react-toastify";
import SignInwithGoogle from "./SignInGoogle";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuario ingresado exitosamente");
      window.location.href = "/";
      toast.success("Usuario ingresado exitosamente", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-center text-2xl font-semibold text-gray-700 mb-6">
          Iniciar sesión
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Dirección de correo electrónico
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Ingrese el correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Ingrese la contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-[#e02b0f] hover:bg-[#f20b0b] transition-colors text-white py-2 rounded-md"
            >
              Enviar
            </button>
          </div>
        </form>

        <p className="text-sm text-gray-600 text-center">
          ¿Nuevo usuario?{" "}
          <Link
            to={"/register"}
            className="text-[#e02b0f] hover:text-[#f20b0b] transition-colors"
          >
            Regístrate aquí
          </Link>
        </p>

        <div className="mt-6">
          <SignInwithGoogle />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
