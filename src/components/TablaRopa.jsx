import React from 'react'

const TablaRopa = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tabla de Tallas para Ropa</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">Tamaño</th>
            <th className="px-4 py-2 border border-gray-300">Busto (cm)</th>
            <th className="px-4 py-2 border border-gray-300">Cintura (cm)</th>
            <th className="px-4 py-2 border border-gray-300">Caderas (cm)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">S</td>
            <td className="px-4 py-2 border border-gray-300">85-90</td>
            <td className="px-4 py-2 border border-gray-300">65-70</td>
            <td className="px-4 py-2 border border-gray-300">90-95</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">M</td>
            <td className="px-4 py-2 border border-gray-300">91-96</td>
            <td className="px-4 py-2 border border-gray-300">71-76</td>
            <td className="px-4 py-2 border border-gray-300">96-101</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">L</td>
            <td className="px-4 py-2 border border-gray-300">97-102</td>
            <td className="px-4 py-2 border border-gray-300">77-82</td>
            <td className="px-4 py-2 border border-gray-300">102-107</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default TablaRopa