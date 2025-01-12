"use client";  // Mark this file as a client-side component

import React, { useRef, useState } from "react";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-[#0E1011] text-white relative w-screen">
      <h1 className="text-[clamp(3rem,0.33009708737864063rem+11.3915857605178vw,14rem)] m-0 font-black italic leading-[0.8] tracking-[-0.08em] z-10">
        keeper.audio
      </h1>
      
      {/* Blurred background div */}
      <div className="absolute top-[-450px] right-[-450px] mx-auto h-[650px] w-[2000px] rounded-full bg-[#292334] blur-[180px] z-0"></div>
    </section>
  );
};
