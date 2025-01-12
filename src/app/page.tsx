// In your Home.tsx or App.tsx
import { Hero } from "@/components/Hero";
import { Discover } from "@/components/Discover";
import { Stats } from "@/components/Stats";
import { Navbar } from "@/components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Discover />
        <Stats />
      </div>
    </>
  );
};

export default Home;
