import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>Contact: +1 (614) 316-2272 | lberhe25@wooster.edu</p>
        <p>
          <a href="https://www.linkedin.com/in/lberhe/" target="_blank" rel="noopener noreferrer" className="mr-4">
            LinkedIn
          </a>
          <a href="https://github.com/lindaassefa/lindaassefa" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;