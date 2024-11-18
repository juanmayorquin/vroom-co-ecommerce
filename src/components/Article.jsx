import React from 'react'

const Article = ( {img, name, price } ) => {
  return (
    <div className='bg-gray-200 rounded-md max-w-72 p-4 drop-shadow flex flex-col gap-3 hover:'>
      <img src={img} alt={name} />
      <div>
          <p className='text-lg font-semibold'>${price}</p>
          <h3 className='font-light'>{name.toUpperCase()}</h3>
      </div>
    </div>
  )
}

export default Article