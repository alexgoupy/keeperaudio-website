"use client"; // Mark this file as a client-side component

import React, { useState, useEffect, useRef } from "react";

// Define the prop type for the CountUp component
interface CountUpProps {
  targetNumber: number;
  description: string;
}

const CountUp: React.FC<CountUpProps> = ({ targetNumber, description }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Callback for IntersectionObserver
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setHasStarted(true);
      } else {
        setHasStarted(false);
        setCount(0); // Reset the count when leaving the section
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
    <div ref={sectionRef} className="px-6">
      <h2 className={`text-7xl font-black ${targetNumber === 150000000 ? 'pl-16' : ''}`}>
        {count.toLocaleString()}
        {targetNumber === 70 || targetNumber === 150000000 ? "+" : ""}
      </h2>
      <p className="text-sm mt-2">{description}</p> {/* Description under the number */}
    </div>
  );
};

const StartPage = () => {
  return (
    <div className="min-h-screen bg-[#0E1011] text-white flex flex-col items-center justify-center px-10">
      {/* Container for positioning the numbers */}
      <div className="w-full relative">
        {/* Number 70+ on the left */}
        <div className="absolute left-0 text-left">
          <CountUp targetNumber={70} description="Editorial Playlists" />
        </div>
        
        {/* Number 150M at the center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <CountUp targetNumber={150000000} description="Streams" />
        </div>

        {/* Number 2+ on the right */}
        <div className="absolute right-0 text-right">
          <CountUp targetNumber={2} description="Gold Records" />
        </div>
      </div>
    </div>
  );
};

export default StartPage;
