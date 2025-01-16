"use client"; // Mark this file as a client-side component

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface CardProps {
  card: {
    image: string;
    title: string;
    id: number;
    spotifyLink: string;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <a
      href={card.spotifyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative bg-transparent w-[200px] sm:w-[300px] lg:w-[300px] h-[200px] sm:h-[400px] lg:h-[400px] flex flex-col justify-center items-center group hover:scale-105 sm:hover:translate-y-[-30px] transition-transform duration-300 ease-in-out z-10"
    >
      <div className="flex justify-center items-center h-[200px] sm:h-[400px] bg-transparent">
        <div className="relative h-[202px] sm:h-[402px] w-[202px] sm:w-[302px] rounded-[10px] overflow-hidden before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%] before:bg-[conic-gradient(transparent,transparent,#3e344e)] before:animate-spin-slow shadow-[4px_8px_12px_rgba(0,0,0,0.2)] hover:shadow-[16px_32px_30px_rgba(0,0,0,0.4)]">
          <div
            key={card.id}
            className="transition-transform duration-300 ease-in-out transform relative h-[200px] sm:h-[400px] w-[200px] sm:w-[300px] overflow-hidden rounded-lg"
            style={{
              backgroundColor: "#1F2122",
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </a>
  );
};

// StartPage Component
const StartPage = () => {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const [inView, setInView] = useState(false);
  const [cardsInView, setCardsInView] = useState<boolean[]>(new Array(3).fill(false));

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

  // Observer for cards to trigger their animations when they come into view
  useEffect(() => {
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setCardsInView((prevState) => {
            const newState = [...prevState];
            newState[index] = true; // Mark this card as in view
            return newState;
          });
        }
      });
    }, { threshold: 0.5 });

    // Observe each card
    const cardElements = document.querySelectorAll(".card");
    cardElements.forEach((card) => {
      cardObserver.observe(card);
    });

    return () => {
      cardElements.forEach((card) => {
        cardObserver.unobserve(card);
      });
    };
  }, []);

  // Cards array with images and Spotify links
  const cards = [
    {
      image: "/images/ak-pp.webp",
      title: "Alex Keeper",
      id: 1,
      spotifyLink: "https://open.spotify.com/artist/4hxy6gamr697jKBPSmHcpB?si=LJqGVbv5RkWNECtDxtHzVQ", // Example Spotify link for Alex Keeper
    },
    {
      image: "/images/tk-pp.webp",
      title: "Tom Kha",
      id: 2,
      spotifyLink: "https://open.spotify.com/artist/7Jx4jOIIdp8GeoR2sA32fY?si=x9JIioeeTMe8AgmuFFjp5w", // Example Spotify link for Tom Kha
    },
    {
      image: "/images/nidyu-pp.webp",
      title: "nidyu.",
      id: 3,
      spotifyLink: "https://open.spotify.com/artist/6fp9TIvbzU3KMuY9nUIwyl?si=DUQSpLA7Snap1qx-bgXsCQ", // Example Spotify link for nidyu.
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center relative">
      {/* Paragraph with IntersectionObserver animation, in front of the cards */}
      <motion.p
        ref={paragraphRef}
        className="absolute top-[15%] left-[10%] text-sm text-left w-full min-w-[100px] max-w-[460px] text-white z-20 hidden sm:block" // Hide on small screens (sm and below)
        initial={{ opacity: 0 }} // Start with 0 opacity
        animate={{ opacity: inView ? 1 : 0 }} // Animate to opacity 1 when in view
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          duration: 0.5,
          delay: 0.1,
        }}
      >
        The studio has produced and managed several music projects, each with its own artistic direction, purpose, and achievements.
      </motion.p>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 mt-16 justify-center z-10 sm:flex-row flex-col">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="card"
            initial={{ opacity: 0 }}
            animate={{ opacity: cardsInView[index] ? 1 : 0 }} // Fade-in when the card is in view
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <Card key={card.id} card={card} /> {/* Removed setHoveredImage */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StartPage;
