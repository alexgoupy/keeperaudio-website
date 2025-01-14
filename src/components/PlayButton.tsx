"use client"; // Mark this file as a client-side component

import React, { useState } from "react";
import { motion } from "framer-motion";

export const PlayButton: React.FC = () => {
  const [pingActive, setPingActive] = useState(true); // Ping starts as active (visible)

  const togglePing = () => {
    // Toggle ping visibility each time the button is clicked
    setPingActive((prevState) => !prevState);
  };

  return (
    <div className="fixed bottom-6 right-6 flex items-center space-x-4 justify-end">
      {/* Banner with reduced width */}
      <div className="relative flex overflow-x-hidden w-48 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_15px,_black_calc(100%-15px),transparent_100%)]">
        {/* First scrolling text */}
        <div
          className="animate-marquee whitespace-nowrap"
          style={{
            animationPlayState: pingActive ? "running" : "paused", // Pause or resume animation
          }}
        >
          <span className={`text-sm mx-2 ${pingActive ? "text-white" : "text-white/50"} transition-colors duration-150`}>•</span>
          <span className={`text-sm mx-2 ${pingActive ? "text-white" : "text-white/50"} transition-colors duration-150`}>Now Playing</span>
          <span className={`text-sm mx-2 ${pingActive ? "text-white" : "text-white/50"} transition-colors duration-150`}>•</span>
          <span className={`text-sm mx-2 ${pingActive ? "text-white" : "text-white/50"} transition-colors duration-150`}>
            Alex Keeper, maybeAlice - One of You Illusions
          </span>
        </div>

        {/* Second scrolling text for seamless effect */}
        <div
          className="absolute top-0 animate-marquee2 whitespace-nowrap"
          style={{
            animationPlayState: pingActive ? "running" : "paused", // Pause or resume animation
          }}
        >
          <span className={`text-sm mx-2 ${pingActive ? "text-white" : "text-white/50"} transition-colors duration-150`}>•</span>
          <span className={`text-sm mx-2 ${pingActive ? "text-white" : "text-white/50"} transition-colors duration-150`}>Now Playing</span>
          <span className={`text-sm mx-2 ${pingActive ? "text-white" : "text-white/50"} transition-colors duration-150`}>•</span>
          <span className={`text-sm mx-2 ${pingActive ? "text-white" : "text-white/50"} transition-colors duration-150`}>
            Alex Keeper, maybeAlice - One of You Illusions
          </span>
        </div>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePing}
        className="relative w-4 h-4 rounded-full bg-white flex items-center justify-center"
      >
        {/* Conditionally render the ping effect */}
        {pingActive && (
          <span className="absolute w-4 h-4 rounded-full border border-white animate-ping opacity-100"></span>
        )}
      </button>
    </div>
  );
};
