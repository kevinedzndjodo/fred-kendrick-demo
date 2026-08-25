import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import CelebrityEditorial from "@/components/CelebrityEditorial";
import About from "@/components/About";
import Services from "@/components/Services";
import Academy from "@/components/Academy";
import Testimonials from "@/components/Testimonials";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SelectedWork />
      <CelebrityEditorial />
      <About />
      <Services />
      <Academy />
      <Testimonials />
      <Instagram />
      <Contact />
      <Footer />
    </main>
  );
}
