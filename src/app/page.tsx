// In your Home.tsx or page.tsx
import { Hero } from "@/components/Hero";
import { Discover } from "@/components/Discover";
import { Stats } from "@/components/Stats";
import { Navbar } from "@/components/Navbar";
import { PlayButton } from "@/components/PlayButton"; // Import PlayButton

const Home: React.FC = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <PlayButton /> {/* Add PlayButton component here */}
        <Discover />
        <Stats />
      </div>
    </>
  );
};

export default Home;
