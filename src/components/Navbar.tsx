"use client"; // Mark this file as a client-side component

import React from "react";
import { motion } from "framer-motion";

export const Navbar: React.FC = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-transparent z-50 p-6 mix-blend-difference"
      initial={{ y: -100 }} // Start above the screen
      animate={{ y: 0 }}    // Animate into the visible area
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        duration: 0.5,
        delay: 0.8,
      }}
    >
      <div className="flex w-full justify-between items-center text-white">
        {/* First link, left aligned */}
        <a href="#Projects" className="hover:underline">Discover</a>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a href="#create" className="hover:underline">Create</a>
        </div>

        <a href="#learn" className="hover:underline">Learn</a>
      </div>
    </motion.nav>
  );
};
