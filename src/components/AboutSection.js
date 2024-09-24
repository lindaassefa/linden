
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  const skills = [
    'Python', 'JavaScript', 'HTML', 'CSS', 'C', 'C++', 'SQL', 
    'Swift', 'Haskell', 'Node.js', 'Express.js', 'Flask', 
    'React', 'MongoDB', 'Mongoose', 'Stripe'
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          variants={itemVariants} 
          className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-300"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-300">Education</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Bachelor of Science in Computer Science
              <br />
              College of Wooster – Wooster, OH
              <br />
              Expected Graduation: May 2025
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-300">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full transition-transform duration-300 ease-in-out cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  title={`Skill: ${skill}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-300">Certifications</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Complete Course in Intermediate Technical Interview Prep (Codepath)
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
