import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs'; // For the theme switcher icon

function Header({ theme, toggleTheme }) {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Linda Assefa</h1>
        <nav className="flex items-center">
          <a
            href="https://www.linkedin.com/in/lberhe/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 hover:text-blue-200 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/lindaassefa/lindaassefa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors duration-300"
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
    </header>
  );
}

export default Header;
