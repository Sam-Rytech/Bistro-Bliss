import React from 'react'

export default function MenuCard({ img, title, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-left">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="text-red-700 font-semibold text-lg">
          ${price.toFixed(2)}
        </h4>
        <h3 className="text-lg font-bold mt-1">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">
          Made with eggs, lettuce, salt, oil and other ingredients.
        </p>
      </div>
    </div>
  )
}
