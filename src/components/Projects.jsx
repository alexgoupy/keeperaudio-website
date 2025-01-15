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
        <motion.div style={{ x }} className="flex gap-8">
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

        {/* Text that moves in the opposite direction */}
        <motion.div 
          style={{ textX }} // Apply the inverse transform to the text
          className="absolute top-[25%] left-[15%] text-sm text-left w-full min-w-[100px] max-w-[460px] text-white"
        >
          The studio has produced and managed several music projects, each with its own artistic direction, purpose, and achievements.
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, setHoveredImage }) => {
  return (
    <div className="relative bg-transparent w-[300px] h-[400px] flex flex-col justify-center items-center group hover:transform hover:translate-y-[-30px] hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex justify-center items-center h-[450px] bg-transparent">
        <div className="relative h-[402px] w-[302px] rounded-[10px] shadow-[16px_16px_20px_#0000008c] overflow-hidden before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%] before:bg-[conic-gradient(transparent,transparent,#3e344e)] before:animate-spin-slow">
          <div
            key={card.id}
            className="transition-transform duration-300 ease-in-out transform relative h-[400px] w-[300px] overflow-hidden rounded-lg"
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
