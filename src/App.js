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
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection setActiveSection={setActiveSection} />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />; // Make sure this matches
      case 'experience':
        return <ExperienceSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="App min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Navigation setActiveSection={setActiveSection} activeSection={activeSection} />
      <main className="pt-20">
        {renderActiveSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
