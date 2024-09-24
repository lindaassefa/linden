import React from 'react';
import { motion } from 'framer-motion';

const HomeSection = ({ setActiveSection }) => {
  const nameArray = "Linda Assefa".split("");

  const handleGetInTouch = () => {
    setActiveSection('contact');
  };

  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-sans">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight font-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {nameArray.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 8
              }}
              className="inline-block text-purple-200 hover:text-purple-100 transition-colors duration-300"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto text-indigo-200"
        >
          Computer Science Student | Aspiring AI/ML Engineer 
          <br />
          SaaS & Product Enthusiast | Full-stack Developer
        </motion.p>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 2 }}
        >
          <button
            onClick={handleGetInTouch}
            className="bg-purple-300 text-purple-900 px-6 py-2 rounded-full font-semibold text-base hover:bg-purple-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 shadow-lg font-heading"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
