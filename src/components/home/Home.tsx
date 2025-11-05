"use client";
import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import About from "./AboutSection/AboutSection";
import Skills from "./SkillSection/SkillSection";

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0d] transition-colors duration-300">
      <HeroSection />
      <About />
      <Skills />
    </div>
  );
}

export default Home;
