// pages.tsx or Home.tsx
import { Hero } from "@/components/Hero";
import { Discover } from "@/components/Discover";
import { Stats } from "@/components/Stats";
import { Navbar } from "@/components/Navbar";
import { PlayButton } from "@/components/PlayButton"; // Import PlayButton
import HorizontalScrollCarousel from "@/components/HorizontalScrollCarousel"; // Import HorizontalScrollCarousel

const Home: React.FC = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <HorizontalScrollCarousel />
        <Stats />
        <PlayButton />
      </div>
    </>
  );
};

export default Home;
