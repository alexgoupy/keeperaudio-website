"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";

// Projects component
const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [hoveredImage, setHoveredImage] = useState(null); // State to track hovered image

  // Transform for the cards
  const x = useTransform(scrollYProgress, [0, 1], ["42%", "-43%"]);
  
  // Inverse transform for the text
  const textX = useTransform(scrollYProgress, [1, 0], ["-35%", "-50%"]);

  return (
    <section id="Projects" ref={targetRef} className="relative h-[300vh] bg-transparent">
      {/* Card container with horizontal scroll animation */}
      <div className="sticky top-0 flex h-screen items-center overflow-x-hidden no-scrollbar">
        <motion.div style={{ x }} className="flex gap-12 z-20">
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                card={card}
                setHoveredImage={setHoveredImage} // Pass the function to update the hovered image
              />
            );
          })}
        </motion.div>

        {/* Text and background image that moves in the opposite direction */}
        <motion.div
          style={{
            textX,
          }}
          className="absolute top-[25%] left-[15%] text-sm text-left h-[40px] w-full min-w-[100px] max-w-[460px] text-white bg-cover transition-all duration-300 ease-in-out z-50"
        
        >
          The studio has produced and managed several music projects, each with its own artistic direction, purpose, and achievements.
        </motion.div>

        {/* Background image that moves in the opposite direction */}
        <motion.div
          style={{
            textX,
            backgroundImage: hoveredImage ? `url(${hoveredImage})` : 'none', // Set the background image when a card is hovered
            backgroundSize: 'cover', // Make the background cover the entire div
            backgroundPosition: 'center', // Center the background image
          }}
          className="absolute top-0 left-0 text-sm text-left w-full text-white h-full bg-cover ease-in-out z-0 blur-sm opacity-20"        />
      </div>
    </section>
  );
};

const Card = ({ card, setHoveredImage }) => {
  return (
    <div
      className="relative bg-transparent w-[300px] h-[400px] flex flex-col justify-center items-center group hover:transform hover:translate-y-[-30px] hover:scale-105 transition-transform duration-300 ease-in-out z-10"
      onMouseEnter={() => setHoveredImage(card.image)} // Set hovered image on mouse enter
      onMouseLeave={() => setHoveredImage(null)} // Reset the hovered image on mouse leave
    >
      <div className="flex justify-center items-center h-[450px] bg-transparent">
        <div className="relative h-[402px] w-[302px] rounded-[10px] overflow-hidden before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%] before:bg-[conic-gradient(transparent,transparent,#3e344e)] before:animate-spin-slow shadow-[4px_8px_12px_rgba(0,0,0,0.2)] hover:shadow-[16px_32px_30px_rgba(0,0,0,0.4)]">
          <div
            key={card.id}
            className="transition-transform duration-300 ease-in-out transform relative h-[400px] w-[300px] overflow-hidden rounded-lg" // Apply shadow on hover
            style={{
              backgroundColor: "#1F2122",
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};


// Cards array with images
const cards = [
  { image: "/images/ak-pp.webp", title: "Alex Keeper", id: 1 },
  { image: "/images/tk-pp.webp", title: "Tom Kha", id: 2 },
  { image: "/images/nidyu-pp.webp", title: "nidyu.", id: 3 },
  { image: "/images/hidn-pp.webp", title: "H:dn", id: 4 },
  { image: "/images/solei-pp.webp", title: "Solei", id: 5 },
  { image: "/images/memoryleak-pp.webp", title: "memory leak", id: 6 },
];

export default Projects;
