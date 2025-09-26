import Navbar from "@/components/About/Navbar";
import Footer from "../(components)/Footer";
import AboutHero from "../(components)/AboutHero";
import VideoSection from "../(components)/VideoSection";
import Features from "../(components)/Features";
import AboutInfo from "../(components)/AboutInfo";
import Stats from "../(components)/Stats";
import Testimonials from "../(components)/Testimonials";

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
  );
}
