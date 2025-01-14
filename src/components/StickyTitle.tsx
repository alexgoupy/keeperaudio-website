// components/StickyTitle.tsx
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";

const StickyTitle = () => {
  return (
    <div className="relative">
      {/* Title positioned absolutely */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-transparent text-8xl font-black text-white text-right italic p-4">
        Discover
      </div>

      {/* Projects and Stats Sections */}
      <div className="mt-[150px]"> {/* Add some margin to avoid overlap */}
        <Projects />
        <Stats />
      </div>
    </div>
  );
};

export default StickyTitle;
