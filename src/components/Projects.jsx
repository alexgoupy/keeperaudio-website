"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

// Projects component
const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);

  return (
    <section id="Projects" ref={targetRef} className="relative h-[300vh] bg-[#0E1011]">
      <div className="sticky top-0 flex h-screen items-center overflow-x-hidden no-scrollbar">
        <motion.div
          style={{ x }}
          className="flex gap-8"
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Card component without type annotations
const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[350px] overflow-hidden"
      style={{
        backgroundColor: "#1F2122", // Use the color instead of image URL
      }}
    >
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br to-white/0 p-8 text-3xl font-black text-white">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const cards = [
  { color: "#FF5733", title: "Title 1", id: 1 },
  { color: "#33FF57", title: "Title 2", id: 2 },
  { color: "#3357FF", title: "Title 3", id: 3 },
  { color: "#FFFF33", title: "Title 4", id: 4 },
  { color: "#FF33FF", title: "Title 5", id: 5 },
];

export default Projects;
