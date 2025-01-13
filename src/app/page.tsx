// pages.tsx or Home.tsx
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PlayButton } from "@/components/PlayButton"; // Import PlayButton
import Projects from "@/components/Projects"; // Import Projects
import Stats from "@/components/Stats";

const Home: React.FC = () => {
  return (
    <>
      {/* <div className="absolute top-[-50px] right-[-25%] mx-auto h-[350px] w-[50vw] rounded-full bg-[#292334] blur-[175px] z-0"></div> */}

      {/* Main Content */}
      <div className="bg-[#0E1011]">
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
