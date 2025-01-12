"use client";  // Mark this file as a client-side component

import React, { useRef, useState } from "react";

export const Hero: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-[#0E1011] text-white relative w-screen">
      <h1 className="text-[clamp(3rem,0.33009708737864063rem+11.3915857605178vw,14rem)] m-0 font-black italic leading-[0.8] tracking-[-0.08em] z-10">
        keeper.audio
      </h1>
      
      {/* Blurred background div */}
      <div className="absolute top-[-450px] right-[-450px] mx-auto h-[650px] w-[2000px] rounded-full bg-[#292334] blur-[180px] z-0"></div>

      {/* Play/Pause Button */}
      <div className="fixed bottom-6 right-6">
        <button 
          onClick={toggleAudio}
          className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
          {/* {isPlaying ? '❚❚' : '▶️'} */}
        </button>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src="https://p.scdn.co/mp3-preview/3kvNWPNah0xYCvV6XvOLam.mp3" />
    </section>
  );
};
