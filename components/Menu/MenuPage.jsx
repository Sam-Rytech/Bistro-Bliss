"use client"
import React, { useState } from 'react'
import MenuFilter from './MenuFilter'
import MenuCard from './MenuCard'
import AppOrder from './AppOrder'

const menuItems = [
  {
    id: 1,
    title: 'Fried Eggs',
    price: 9.99,
    category: 'Breakfast',
    img: '/assets/menu/eggs.png',
  },
  {
    id: 2,
    title: 'Hawaiian Pizza',
    price: 15.99,
    category: 'Main Dishes',
    img: '/assets/menu/pizza.png',
  },
  {
    id: 3,
    title: 'Martinez Cocktail',
    price: 7.25,
    category: 'Drinks',
    img: '/assets/menu/cocktail.png',
  },
  {
    id: 4,
    title: 'Butterscotch Cake',
    price: 20.99,
    category: 'Desserts',
    img: '/assets/menu/cake.png',
  },
  {
    id: 5,
    title: 'Mint Lemonade',
    price: 5.89,
    category: 'Drinks',
    img: '/assets/menu/lemonade.png',
  },
  {
    id: 6,
    title: 'Chocolate Icecream',
    price: 18.05,
    category: 'Desserts',
    img: '/assets/menu/icecream.png',
  },
  {
    id: 7,
    title: 'Cheese Burger',
    price: 12.55,
    category: 'Main Dishes',
    img: '/assets/menu/burger.png',
  },
  {
    id: 8,
    title: 'Classic Waffles',
    price: 12.99,
    category: 'Breakfast',
    img: '/assets/menu/waffles.png',
  },
]

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <div className="px-6 py-12 text-center mt-20">
      <h2 className="text-6xl font-serif font-bold text-gray-900">Our Menu</h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        We consider all the drivers of change gives you the components you need
        to change to create a truly happens.
      </p>

      <MenuFilter active={activeCategory} setActive={setActiveCategory} />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredItems.map((item) => (
          <MenuCard key={item.id} {...item} />
        ))}
      </div>

    </div>
  )
}
