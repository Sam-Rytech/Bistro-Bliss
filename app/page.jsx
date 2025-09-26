"use client"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Services from "@/components/Services";
import Delivery from "@/components/Delivery";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import { use } from "react";

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
  );
}
