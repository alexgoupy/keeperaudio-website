"use client"; // Mark this file as a client-side component

import React, { useState } from "react";
import { motion } from "framer-motion";

// Function to split text into an array of letters
const splitText = (text: string) => {
  return text.split("").map((char, index) => (
    <motion.span
      key={index}
      className="inline-block"
      initial={{ opacity: 1, y: 30 }}  // Letters start from below and are invisible
      animate={{ opacity: 1, y: 0 }}   // Letters fade in and move upwards
      transition={{
        delay: index * 0.03, // Stagger effect
        type: "spring",
        stiffness: 150,
        damping: 10,
      }}
    >
      {char}
    </motion.span>
  ));
};

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
      <motion.h1
        className="text-[3rem] sm:text-[6rem] md:text-[6rem] lg:text-[10rem] m-0 font-black italic leading-[0.8] tracking-[-0.08em] z-10 text-white"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: transform.rotateX,
          rotateY: transform.rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 100,
          duration: 2,
          ease: "easeOut",
        }}
        style={{
          textShadow: `
            ${transform.rotateY * -0.8}px ${transform.rotateX * 0.4}px 1px rgba(255, 255, 255, 0.8),
            ${transform.rotateY * -0.6}px ${transform.rotateX * 0.3}px 1px rgba(255, 255, 255, 0.8),
            ${transform.rotateY * -0.4}px ${transform.rotateX * 0.2}px 1px rgba(255, 255, 255, 0.9),
            ${transform.rotateY * -0.2}px ${transform.rotateX * 0.1}px 1px rgba(255, 255, 255, 1),
            ${transform.rotateY * -0.2}px ${transform.rotateX * 0.1}px 4px rgba(0, 0, 0, 0.8),
            ${transform.rotateY * 0.2}px ${transform.rotateX * -0.1}px 6px rgba(0, 0, 0, 0.8)
          `,
          transition: "text-shadow 0.3s ease-out",
        }}
      >
        {splitText("keeper.audio")}
      </motion.h1>

      <motion.p
        className="absolute sm:bottom-[25%] bottom-[35%] right-[10%] text-[0.7rem] md:text-sm  text-right w-full min-w-[100px] max-w-[300px] sm:max-w-[460px] text-white"
        initial={{ opacity: 0 }} // Start above the screen
        animate={{ opacity: 1 }}    // Animate into the visible area
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          duration: 0.5,
          delay: 0.5,
        }}
      >
        keeper.audio is a creative studio focused on music production and project management.
      </motion.p>
    </div>
  );
};
