import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <About />
      <Programs />
      <Contact />
      <Footer />
    </main>
  );
}
