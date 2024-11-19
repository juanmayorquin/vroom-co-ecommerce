import React from 'react'

const SobreNosotros = () => {
  return (
    <div className="pt-20 max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Columna izquierda con el texto */}
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-gray-800 mb-6">Sobre Nosotros</h1>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-red-600">Somos Vroom</span>, un emprendimiento colombiano que se dedica a ofrecer productos de alta calidad en el mundo del racing. Nos especializamos en brindarte los diseños más atractivos y exclusivos inspirados en tus modelos de coches y motos favoritos. Nuestro objetivo es que puedas disfrutar de la emoción de las carreras no solo en la pista, sino también en tu día a día con nuestras colecciones únicas.
          </p>
          <p className="text-lg text-gray-700">
            Desde nuestros inicios, nos hemos comprometido con la calidad y la satisfacción de nuestros clientes. Cada uno de nuestros productos es cuidadosamente diseñado y fabricado para ofrecerte una experiencia única. Ya sea que estés buscando accesorios, ropa o artículos exclusivos, en Vroom encontrarás lo que necesitas para expresar tu pasión por las carreras.
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-red-600">Misión:</span> Brindar a nuestros clientes productos de calidad que reflejen su pasión por el racing, con diseños innovadores y un enfoque en la satisfacción total.
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-red-600">Visión:</span> Ser reconocidos como la marca líder en Colombia en el sector de accesorios y ropa inspirada en el mundo del racing, y expandir nuestra presencia a nivel internacional.
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-red-600">Valores:</span> Compromiso, calidad, innovación y pasión por las carreras.
          </p>
        </div>

        {/* Columna derecha con la imagen */}
        <div className="flex justify-center items-center">
          <img 
            src="img/about.jpeg" 
            alt="Vroom racing" 
            className="max-w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default SobreNosotros
