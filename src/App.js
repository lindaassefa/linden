import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Navigation from './components/NavSection';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // This useEffect ensures the page scrolls to the correct section when activeSection changes
  useEffect(() => {
    const section = document.getElementById(activeSection);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div className="App min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Navigation setActiveSection={setActiveSection} activeSection={activeSection} />
      <main className="pt-20">
        {/* Render all sections, so they are always available for scrolling */}
        <HomeSection setActiveSection={setActiveSection} />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection /> {/* Keep this section always rendered */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
