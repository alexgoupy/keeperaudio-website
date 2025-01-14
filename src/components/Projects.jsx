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

  const x = useTransform(scrollYProgress, [0, 1], ["35%", "-50%"]);

  return (
<section id="Projects" ref={targetRef} className="relative h-[300vh] bg-transparent">

  {/* <div className="absolute">
    <motion.div
      style={{ x }}
      className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white z-30"
    >
      <h2 className="text-3xl font-bold">Discover</h2>
    </motion.div>
  </div>   */}


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
  </div>
</section>
  );
};

const Card = ({ card, setHoveredImage }) => {
  return (
    <div className="relative bg-transparent w-[350px] h-[450px] flex justify-center items-center group">
      <div
        key={card.id}
        className="transition-transform duration-300 ease-in-out transform relative h-[450px] w-[350px] overflow-hidden rounded-lg"
        style={{
          backgroundColor: "#1F2122",
          backgroundImage: `url(${card.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
