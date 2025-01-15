"use client"; // Mark this file as a client-side component

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Define the prop type for the CountUp component
interface CountUpProps {
  targetNumber: number;
  description: string;
}

const CountUp: React.FC<CountUpProps> = ({ targetNumber, description }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false); // State to track visibility

  useEffect(() => {
    const section = sectionRef.current;

    // Callback for IntersectionObserver
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setHasStarted(true);
        setInView(true); // Trigger fade-in when in view
      } else {
        setHasStarted(false);
        setCount(0); // Reset the count when leaving the section
        setInView(false); // Reset fade-out when not in view
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (hasStarted) {
      const increment = targetNumber / 200; // Adjust this for speed, higher means slower
      let currentCount = 0;

      const intervalId = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetNumber) {
          clearInterval(intervalId);
          currentCount = targetNumber;
        }
        setCount(Math.floor(currentCount));
      }, 10); // Adjust this interval for smoother counting

      return () => clearInterval(intervalId); // Clear the interval when the component is unmounted or when the section is not visible
    }
  }, [hasStarted, targetNumber]);

  return (
    <motion.div
      ref={sectionRef}
      className=""
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        duration: 0.5,
        delay: 0.6,
      }}
    >
      <h2 className={`text-7xl font-black ${targetNumber === 150000000 ? 'pl-6' : ''}`}>
        {count.toLocaleString()}
        {/* {targetNumber === 70 || targetNumber === 150000000 || targetNumber === 10 ? "+" : ""} */}
      </h2>
      <p className="text-sm mt-2">{description}</p> {/* Description under the number */}
    </motion.div>
  );
};

const StartPage = () => {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 }
    );

    const paragraphElement = paragraphRef.current;
    if (paragraphElement) {
      observer.observe(paragraphElement);
    }

    return () => {
      if (paragraphElement) {
        observer.unobserve(paragraphElement);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center relative">
      {/* <div className="absolute align-center z-0">
        <TiltEffect />
      </div> */}

      {/* Container for positioning the numbers */}
      <div className="w-full relative z-10">

        {/* Number 10+ aligned with the paragraph on the right */}
        <div className="absolute left-[15%] text-left">
          <CountUp targetNumber={10} description="Labels" />
        </div>

        {/* Number 150M at the center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <CountUp targetNumber={150000000} description="Streams" />
        </div>

        {/* Number 70+ aligned with the paragraph on the left */}
        <div className="absolute right-[15%] text-right">
          <CountUp targetNumber={70} description="Editorial Playlists" />
        </div>

      </div>

      <motion.p
        ref={paragraphRef}
        className="absolute top-[25%] left-[15%] text-sm text-left w-full min-w-[100px] max-w-[460px] text-white"
        initial={{ opacity: 0 }} // Start with 0 opacity
        animate={{ opacity: inView ? 1 : 0 }} // Animate to opacity 1 when in view
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          duration: 0.5,
          delay: 0.2,
        }}
      >
        By closely working with record labels, each project has seen significant growth.
      </motion.p>
    </div>
  );
};

export default StartPage;
