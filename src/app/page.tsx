import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PlayButton } from "@/components/PlayButton";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import { TiltEffect } from "@/components/ui/TiltEffect";
import { ReactLenis } from "lenis/dist/lenis-react";

const Home: React.FC = () => {
  return (
    <div className="bg-[#0E1011]">
      <PlayButton />
      <ReactLenis root options={{ lerp: 0.08,}}></ReactLenis>
      <Navbar />

      <Hero />
      <Projects />
      <Stats />

    </div>
  );
};

export default Home;
