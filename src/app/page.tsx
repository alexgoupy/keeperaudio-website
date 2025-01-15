'use client'; // To fix the useEffect error in Next.js

import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PlayButton } from "@/components/PlayButton";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import { ReactLenis } from 'lenis/react';
import { div } from "framer-motion/client";

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBlobVisible, setBlobVisible] = useState(false);

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
    // Delay the blob appearance after 0.5s
    const timer = setTimeout(() => {
      setBlobVisible(true);
    }, 500); // 0.5 seconds delay

    // Clean up the timeout
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const blob = document.getElementById("blur-blob");

    if (blob && isBlobVisible) {
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
  }, [mousePosition, isBlobVisible]);

  return (
    <>
      {/* The blob with transition for opacity */}
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
          opacity: isBlobVisible ? 1 : 0, // Initially set opacity to 0, will change after the delay
          transition: 'opacity 1s ease-out', // Smooth transition for opacity change
        }}>
      </div>

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
