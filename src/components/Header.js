import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

function Header({ theme, toggleTheme }) {
  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">Linda Assefa</h1>
        <div className="flex items-center">
          <nav>
            <a
              href="https://www.linkedin.com/in/lberhe/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 hover:text-pink-300 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/lindaassefa/lindaassefa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300 transition-colors duration-300"
            >
              GitHub
            </a>
          </nav>
          <button onClick={toggleTheme} className="ml-4">
            {theme === 'light' ? (
              <BsMoon size={24} className="hover:text-yellow-400 transition-colors duration-300" />
            ) : (
              <BsSun size={24} className="hover:text-yellow-400 transition-colors duration-300" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
