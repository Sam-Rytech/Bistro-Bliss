import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import MenuPage from '@/components/Menu/MenuPage'
import MenuFilter from '@/components/Menu/MenuFilter'
import MenuCard from '@/components/Menu/MenuCard'
import React from 'react'

const Menu = () => {
  return (
    <div>
      <Navbar />
      <Footer />
      <MenuPage />
      <MenuFilter />
      <MenuCard />
    </div>
  )
}

export default Menu
