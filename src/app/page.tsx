import Hero from "@/components/sections/Hero";
import HomeIntro from "@/components/sections/HomeIntro";
import HomePrograms from "@/components/sections/HomePrograms";
import HomeTour from "@/components/sections/HomeTour";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeIntro />
      <HomePrograms />
      <HomeTour />
      <Contact />
    </main>
  );
}
