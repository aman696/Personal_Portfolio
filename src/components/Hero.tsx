// HeroSection.tsx
import React, { MouseEvent } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { ArrowRight } from "lucide-react";

// Import your new assembling-particle component
import AssemblingParticleImage from "./AssemblingParticleImage";

import profilePic from "../assets/profile-pic.jpeg";

const HeroSection = () => {
  const handleScrollToProjects = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const glassButtonClass =
    "py-3 px-8 bg-white/10 backdrop-blur-sm border border-white/20 text-gradient font-semibold rounded-md hover:bg-white/30 hover:text-black shadow-md transition-all flex items-center justify-center gap-2";

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          {/* 
            Profile Picture 
            For small screens: order-1
            For medium+ screens: order-2 
          */}
<div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
  <AssemblingParticleImage
    src={profilePic}
    alt="Aman Chaturvedi"
    // This ensures a circular shape in Tailwind
    className="w-40 h-40 md:w-56 md:h-56"
    // optional: set how long the animation runs (ms)
    assembleDuration={1500}
  />
</div>

          {/* Intro Text */}
          <div className="order-2 md:order-1 w-full md:w-1/2">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gradient mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Aman Chaturvedi
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TypeAnimation
                sequence={[
                  "AI Developer & Automation Specialist",
                  3000,
                  "Crafting AI-Driven Innovations",
                  3000
                ]}
                wrapper="span"
                repeat={Infinity}
              />
            </motion.h2>

            <motion.div
              className="max-w-2xl mx-auto md:mx-0 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.25}
                scale={1.02}
                className="w-full"
              >
                <div className="glass-card p-6">
                  <p className="text-base md:text-lg text-hero-text">
                    I transform complex challenges into elegant AI-driven
                    solutions. Specializing in Pytorch, Fastapi, and React,
                    I build intelligent systems that automate workflows 
                    and deliver meaningful insights. 
                    Let's collaborate to bring your innovative ideas to life.
                  </p>
                </div>
              </Tilt>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className={glassButtonClass}
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className={glassButtonClass}>
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
