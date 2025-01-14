"use client"; // Mark this file as a client-side component

import React, { useState } from "react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left - width / 2; // Mouse X relative to element center
    const y = clientY - top - height / 2; // Mouse Y relative to element center

    // Inverted values for rotation
    const rotateX = -(y / height) * 20; // Tilt downward when the mouse is below center
    const rotateY = (x / width) * 10; // Tilt left when the mouse is to the right

    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 }); // Reset rotation on mouse leave
  };

  return (
    <div
      className="min-h-screen bg-transparent flex flex-col items-center justify-center px-10 text-white"
      style={{
        perspective: 1000, // Add perspective for realistic 3D effect
      }}
    >
      <motion.div
        className="absolute bg-[#292334] rounded-full blur-3xl opacity-0"
        style={{
          width: "600px",
          height: "400px",
        }}
        animate={{
          x: [0, 50, 0], // Move right and return
          y: [0, -50, 0], // Move up and return
        }}
        transition={{
          duration: 10, // Slow movement
          repeat: Infinity, // Loop indefinitely
          ease: "easeInOut", // Smooth transitions
        }}
      ></motion.div>

      <motion.h1
        className="text-[clamp(3rem,0.33009708737864063rem+11.3915857605178vw,14rem)] m-0 font-black italic leading-[0.8] tracking-[-0.08em] z-10 text-white pr-6"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: transform.rotateX,
          rotateY: transform.rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 150,
          // Smooth transition for rotation
          duration: 2, // Transition over half a second
          ease: "easeOut", // Ease out for smoothness
        }}
        style={{
          cursor: "pointer", // Add hover pointer for interactivity
        }}
      >
        keeper.audio
      </motion.h1>

      <p className="absolute bottom-[25%] right-[15%] text-sm text-right w-full px-10 min-w-[100px] max-w-[460px] text-white">
        keeper.audio is a creative studio focused on music production and project management.
      </p>
    </div>
  );
};
