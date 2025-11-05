"use client";
import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import About from "./AboutSection/AboutSection";
import Skills from "./SkillSection/SkillSection";
import Experience from "./ExperienceSection/ExperienceSection";

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0d] transition-colors duration-300">
      <HeroSection />
      <About />
      <Skills />
      <Experience/>
    </div>
  );
}

export default Home;
