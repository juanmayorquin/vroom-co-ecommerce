import React from "react";
import Coleccion from "../../../components/Coleccion";

const PaginaColecciones = () => {
  const coleccionMotos = [
    {
      imagen: "/products/Ducati-Panigale-V4-Blanco-_Mockup_.webp",
      nombre: "Ducati Panigale V4 Shirt",
      descripcion: "Siente la velocidad.",
      precio: "COP 60.000",
    },
    {
      imagen: "/products/BMW-M1000RR-Negro-_Mockup.webp",
      nombre: "BMW M1000RR",
      descripcion: "Viste la elegancia.",
      precio: "COP 60.000",
    },
    {
        imagen: "/products/BMW-M1000RR-Negro-_Mockup.webp",
        nombre: "Proximamente",
        descripcion: "Siguenos.",
        precio: "¿?",
      },
  ];

  const coleccionCarros = [
    {
      imagen: "/products/Nissan-GT-R-Skyline-Negro-_Mockup_.webp",
      nombre: "Nissan GT-R Skyline",
      descripcion: "Diseño Deportivo.",
      precio: "COP 60.000",
    },
    {
      imagen: "/products/Toyota-Supra-MK-IV-Blanco-_Mockup_.webp",
      nombre: "Toyota Supra MK IV",
      descripcion: "'¿¡Is that a Supra!?'",
      precio: "COP 60.000",
    },
    {
        imagen: "/products/BMW-M1000RR-Negro-_Mockup.webp",
        nombre: "Proximamente",
        descripcion: "Siguenos.",
        precio: "¿?",
      },
  ];
  const Essentials = [
    {
      imagen: "/products/Frontal-Blanco.webp",
      nombre: "Essentials White",
      descripcion: "AURA",
      precio: "COP 55.000",
    },
    {
      imagen: "/products/Frontal-Negro.webp",
      nombre: "Essentials Dark",
      descripcion: "Fino y Elegante",
      precio: "COP 55.000",
    },
    {
        imagen: "/products/BMW-M1000RR-Negro-_Mockup.webp",
        nombre: "Proximamente",
        descripcion: "Siguenos.",
        precio: "¿?",
      },
  ];

  return (
    <div className="pt-20 max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Colecciones</h1>
      <Coleccion titulo="Colección Motos" productos={coleccionMotos} />
      <Coleccion titulo="Colección Carros" productos={coleccionCarros} />
      <Coleccion titulo="Vroom Essentials" productos={Essentials} />
    </div>
  );
};

export default PaginaColecciones;
