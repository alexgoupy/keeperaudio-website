// pages.tsx or Home.tsx
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PlayButton } from "@/components/PlayButton"; // Import PlayButton
import Projects from "@/components/Projects"; // Import Projects
import Stats from "@/components/Stats";


const Home: React.FC = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Projects />
        <Stats />
        <PlayButton />
      </div>
    </>
  );
};

export default Home;
