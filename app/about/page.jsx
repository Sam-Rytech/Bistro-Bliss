import Navbar from '@/components/Home/Navbar'
import Footer from '@/components/Home/Footer'
import AboutHero from '@/components/About/AboutHero'
import VideoSection from '@/components/About/VideoSection'
import Features from '@/components/About/Features'
import AboutInfo from '@/components/About/AboutInfo'
import Stats from '@/components/About/Stats'
import Testimonials from '@/components/About/Testimonials'

export default function AboutPage() {
  return (
    <main className="font-sans">
      <Navbar />
      <AboutHero />
      <VideoSection />
      <Features />
      <AboutInfo />
      <Stats />
      <Testimonials />
      <Footer />
    </main>
  )
}
