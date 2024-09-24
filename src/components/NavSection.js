import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ setActiveSection, activeSection }) => {
  const sections = ['home', 'about', 'projects', 'experience', 'contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-4">
          {sections.map((section) => (
            <motion.li key={section}>
              <button
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                  activeSection === section
                    ? 'bg-blue-400 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
