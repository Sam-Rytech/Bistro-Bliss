import React from 'react'

export default function MenuFilter({ active, setActive }) {
  const categories = ['All', 'Breakfast', 'Main Dishes', 'Drinks', 'Desserts']

  return (
    <div className="flex justify-center gap-3 mt-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-5 py-2 rounded-full border transition ${
            active === cat
              ? 'bg-green-900 text-white border-green-900'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
