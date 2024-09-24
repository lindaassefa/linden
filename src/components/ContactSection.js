
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Get in Touch</h2>
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white" 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
