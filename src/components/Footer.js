import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer 
      className="bg-gray-800 text-white p-4" 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center">
        <p>Contact: +1 (614) 316-2272 | lberhe25@wooster.edu</p>
        <p>
          <a
            href="https://www.linkedin.com/in/lberhe/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 hover:text-blue-400 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/lindaassefa/lindaassefa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            GitHub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
