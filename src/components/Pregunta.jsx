import React, { useState } from 'react'

const Pregunta = ({ pregunta, respuesta }) => {
  const [abierto, setAbierto] = useState(false)

  const toggleRespuesta = () => {
    setAbierto(!abierto)
  }

  return (
    <div className="border-b border-gray-300 pb-4">
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleRespuesta}>
        <h2 className="text-xl font-semibold text-gray-800">{pregunta}</h2>
        <span className="text-gray-500">{abierto ? '-' : '+'}</span>
      </div>
      {abierto && <p className="text-gray-600 mt-2">{respuesta}</p>}
    </div>
  )
}

export default Pregunta
