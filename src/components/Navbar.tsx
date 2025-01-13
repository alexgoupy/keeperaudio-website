import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50 p-6 mix-blend-difference">
      <div className="flex w-full justify-between items-center text-white">
        {/* First link, left aligned */}
        <a href="#Projects" className="hover:underline">Discover</a>

        {/* Second link, centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a href="#create" className="hover:underline">Create</a>
        </div>

        {/* Last link, right aligned */}
        <a href="#learn" className="hover:underline">Learn</a>
      </div>
    </nav>
  );
};
