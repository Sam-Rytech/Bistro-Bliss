'use client'
import Navbar from '@/components/Home/Navbar'
import Hero from '@/components/Home/Hero'
import Menu from '@/components/Home/Menu'
import About from '@/components/Home/About'
import Services from '@/components/Home/Services'
import Delivery from '@/components/Home/Delivery'
import Testimonials from '@/components/Home/Testimonials'
import Blog from '@/components/Home/Blog'
import Footer from '@/components/Home/Footer'
import { use } from 'react'

export default function HomePage() {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Services />
      <Delivery />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  )
}
