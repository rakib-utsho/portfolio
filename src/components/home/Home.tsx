"use client";
import React from "react";
import HeroSection from "./HeroSection/HeroSection";

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0d] transition-colors duration-300">
      <HeroSection />
    </div>
  );
}

export default Home;
