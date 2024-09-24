import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      title: "Computer Science Research Assistant",
      company: "College of Wooster",
      period: "January 2023 – August 2023",
      description: [
        "Developed web applications to display network characteristics using HTML, CSS, JavaScript, and Node.js in successful pursuit-evasion game simulations.",
        "Analyzed dependency networks in PyPI and Node.js libraries through in-depth examinations.",
        "Optimized game performance and reduced computation time by implementing heuristic search algorithms via Monte-Carlo tree search."
      ],
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "Network Analysis", "Algorithm Optimization"]
    },
    {
      title: "STEM Zone Intern",
      company: "College of Wooster",
      period: "December 2022 – May 2023",
      description: [
        "Increased STEM retention for underrepresented students by planning and promoting targeted events.",
        "Improved student understanding in CSCI-110 through regular office hour guidance.",
        "Enhanced classroom learning by assisting faculty, addressing student questions, and supporting activities."
      ],
      skills: ["Event Planning", "Tutoring", "Classroom Support", "Student Retention Strategies"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-300">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-500 cursor-pointer"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-300">{exp.title}</h3>
                  <p className="text-lg text-blue-500 dark:text-blue-300">{exp.company}</p>
                </div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                  {exp.period}
                </p>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i}>
                          <span className="text-purple-600 dark:text-purple-400 font-medium">•</span> {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
