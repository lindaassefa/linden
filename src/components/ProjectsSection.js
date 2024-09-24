import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Real Estate Valuation Platform",
      description: "Developed a Django-based web application integrating machine learning to provide dynamic real estate valuations, leveraging linear regression models trained on the Columbus housing dataset.",
      technologies: ["Django", "Python", "scikit-learn", "Jupyter", "Joblib"],
      github: "https://github.com/lindaassefa/RealEstate_Valuation.git"
    },
    {
      title: "AI-Driven Health Support Platform",
      description: "Developing an AI-powered social platform for chronic condition support, integrating BERT-based content moderation and TensorFlow.js for personalized recommendations to enhance user engagement. Implemented core features including JWT authentication, AI-driven content flagging, and differential privacy techniques, demonstrating proficiency in full-stack development and AI integration.",
      technologies: ["Node.js", "React", "PostgreSQL", "TensorFlow.js"],
      github: "https://github.com/lindaassefa/Health-Engagement"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-tl from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-300">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-t-4 border-purple-500"
            >
              <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-300">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-300">Technologies used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
