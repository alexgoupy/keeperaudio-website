"use client";

const Discover = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`discover fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-10 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-center text-white text-6xl font-bold opacity-80">
        Discover Our Projects
      </h2>
    </div>
  );
};

export default Discover;
