import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase/credentials";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate(); // Usamos useNavigate

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
          admin: false, // Campo admin con valor predeterminado false
        });
      }
      console.log("¡Usuario registrado exitosamente!");
      toast.success("¡Usuario registrado exitosamente!", {
        position: "top-center",
      });

      // Redirigir a la pantalla principal después de un registro exitoso
      navigate("/"); // Aquí redirigimos a la ruta principal "/"
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
          Registro
        </h3>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Nombre
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Nombre"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Apellido
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Apellido"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Dirección de correo electrónico
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Ingresa tu correo"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-[#e02b0f] text-white py-2 rounded-md hover:bg-[#f20b0b] transition"
            >
              Registrarse
            </button>
          </div>
        </form>
        <p className="text-sm text-gray-600 text-center">
          ¿Ya tienes cuenta?{" "}
          <a
            href="/login"
            className="text-[#e02b0f] hover:text-[#f20b0b] transition-colors"
          >
            Iniciar sesión
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
