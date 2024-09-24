import React from 'react';

function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Linda Assefa</h1>
        <nav>
          <a href="https://www.linkedin.com/in/lberhe/" target="_blank" rel="noopener noreferrer" className="mr-4">
            LinkedIn
          </a>
          <a href="https://github.com/lindaassefa/lindaassefa" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;