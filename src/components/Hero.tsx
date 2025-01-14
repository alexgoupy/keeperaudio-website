"use client";  // Mark this file as a client-side component

import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center px-10 relative">
      <h1 className="text-[clamp(3rem,0.33009708737864063rem+11.3915857605178vw,14rem)] m-0 font-black italic leading-[0.8] tracking-[-0.08em] z-10">
        keeper.audio
      </h1>      
      <p className="absolute bottom-[25%] right-[15%] text-sm text-right w-full px-10 min-w-[100px] max-w-[460px]">
        keeper.audio is a creative studio focused on music production and project management.    
      </p>
    </div>
  );
};