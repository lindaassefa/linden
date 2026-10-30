import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Kirar Separation",
      description: "I made this so I could upload a song and pull out vocals, drums, bass, and the other instruments. I have been trying it on Ethiopian recordings. A separate krar stem is still experimental, so that download stays turned off.",
      technologies: ["Next.js", "Python", "HTDemucs"],
      image: "/snapshots/kirar-separation.png",
      github: "https://github.com/lindaassefa/kirar-separation"
    },
    {
      title: "Music Stem Separator",
      description: "This is the dashboard version of the same idea. You drop in a WAV or MP3 and it separates vocals, drums, bass, and other, then you can play each one.",
      technologies: ["Python", "Gradio", "HTDemucs"],
      image: "/snapshots/music-stem-separator.png",
      github: "https://github.com/lindaassefa/music-stem-separator"
    },
    {
      title: "House Price Predictor",
      description: "A form where I type in a house and it estimates the price. I trained a linear regression model on housing data and connected it to the page so I could try different cities.",
      technologies: ["Python", "scikit-learn", "HTML"],
      image: "/snapshots/house-price.png",
      github: "https://github.com/lindaassefa/RealEstate_Valuation"
    },
    {
      title: "Med Mingle",
      description: "A small social app for people dealing with health stuff. You can sign in, post, and match with other users. I also started looking at using BERT to flag posts.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      image: "/snapshots/health-engagement.png",
      github: "https://github.com/lindaassefa/Health-Engagement"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-tl from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
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
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="mb-4 h-48 w-full rounded-md object-cover object-top"
              />
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
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  View on GitHub
                </a>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
