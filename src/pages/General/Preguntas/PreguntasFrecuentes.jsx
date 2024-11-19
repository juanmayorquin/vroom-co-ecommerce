import React from 'react'
import Pregunta from '../../../components/Pregunta'
const PreguntasFrecuentes = () => {
  const preguntas = [
    {
      pregunta: '¿Cómo puedo realizar un pedido?',
      respuesta: 'Puedes realizar un pedido a través de nuestra página web seleccionando los productos que deseas y añadiéndolos al carrito de compras.'
    },
    {
      pregunta: '¿Cuál es el costo del envío?',
      respuesta: 'El costo del envío depende de tu ubicación. Puedes calcular el costo de envío en el carrito de compras antes de realizar el pago.'
    },
    {
      pregunta: '¿Cuánto tarda la entrega?',
      respuesta: 'El tiempo de entrega varía según tu ubicación, pero generalmente tarda entre 3 y 7 días hábiles.'
    },
    {
      pregunta: '¿Puedo cambiar mi pedido después de haberlo realizado?',
      respuesta: 'Una vez realizado el pedido, no podemos garantizar cambios, pero te recomendamos contactar con nuestro soporte lo antes posible para ver si es posible hacer un ajuste.'
    },
    {
      pregunta: '¿Cómo puedo rastrear mi pedido?',
      respuesta: 'Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con el número de seguimiento y un enlace para rastrear tu paquete.'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Preguntas Frecuentes</h1>
      <div className="space-y-4">
        {preguntas.map((item, index) => (
          <Pregunta key={index} pregunta={item.pregunta} respuesta={item.respuesta} />
        ))}
      </div>
    </div>
  )
}

export default PreguntasFrecuentes
