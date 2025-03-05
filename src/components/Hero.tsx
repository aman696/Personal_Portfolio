import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import { ArrowRight } from "lucide-react";
/* ----------------------------------------------------------------
   Main HeroSection Component
   ---------------------------------------------------------------- */
   const HeroSection = () => {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Reusable Neural Background */}
  
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
            {/* Header: Name */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gradient mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Aman Chaturvedi
            </motion.h1>
  
            {/* Subheader: Brief Tagline + Type Animation */}
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TypeAnimation
                sequence={[
                  'AI Developer & Automation Specialist',
                  3000,
                  'Crafting AI-Driven Innovations',
                  3000,
                ]}
                wrapper="span"
                repeat={Infinity}
              />
            </motion.h2>
  
            {/* Description Paragraph */}
            <motion.div
              className="max-w-2xl mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Tilt perspective={500} glareEnable={true} glareMaxOpacity={0.25} scale={1.02} className="w-full">
                <div className="glass-card p-6">
                  <p className="text-base md:text-lg text-hero-text">
                    I transform complex challenges into elegant AI-driven solutions. 
                    Specializing in TensorFlow, Flask, and React, I build intelligent 
                    systems that automate workflows and deliver meaningful insights. 
                    Let's collaborate to bring your innovative ideas to life.
                  </p>
                </div>
              </Tilt>
            </motion.div>
  
            {/* Call-to-Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="#projects" className="py-3 px-8 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 shadow-lg transition-all flex items-center justify-center gap-2">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="py-3 px-8 bg-transparent border border-orange-500 text-orange-500 font-semibold rounded-md hover:bg-orange-500/10 transition-all flex items-center justify-center">
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>
  
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2"
              animate={{ opacity: [0, 1, 0], y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </motion.div>
        </motion.div>
      </section>
    );
  };
  
  export default HeroSection;