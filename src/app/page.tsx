'use client'; // To fix the useEffect error in Next.js

import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PlayButton } from "@/components/PlayButton";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import { ReactLenis } from 'lenis/react';

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to update mouse position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Add mouse move listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const blob = document.getElementById("blur-blob");

    if (blob) {
      // Animate the blob to follow mouse position
      blob.animate(
        [
          { transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)` },
        ],
        {
          duration: 3000, // Duration of the animation
          fill: 'forwards', // Ensure the final position persists
        }
      );
    }
  }, [mousePosition]);

  return (
    <>
      <div
        id="blur-blob"
        style={{
          position: 'fixed',
          width: '500px',  // Set the size of the blur
          height: '500px',
          backgroundColor: '#292334', // Dark purple color
          borderRadius: '50%',
          filter: 'blur(150px)',
          pointerEvents: 'none', // Prevent interaction with the blur
          zIndex: 0, // Place above the background but below content
        }}
      ></div>

      <div className="bg-[#0E1011]">
        <ReactLenis root options={{ lerp: 0.08 }} />
        <Navbar />
        <Hero />
        <Projects />
        <Stats />
        <PlayButton />
      </div>
    </>
  );
};

export default Home;
