// Navigation.jsx
import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { ThemeContext } from '../ThemeContext';

const Navigation = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/90 dark:bg-black/20 backdrop-blur-md border-b border-purple-500/30 dark:border-cyan-500/30'
          : 'bg-transparent'}
        text-gray-900 dark:text-gray-100`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
<motion.div
  className="w-10 sm:w-12 md:w-14 lg:w-12"
  whileHover={{ scale: 1.1 }}
  style={{ fontFamily: 'Orbitron, monospace' }}
>
  <img
    src="src/assets/clement_raymond_logo.png"
    alt="Clement Raymond Logo"
    className="w-full h-auto object-contain"
  />
</motion.div>



          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300
                  ${
                    activeSection === item.id
                      ? 'text-purple-600 dark:text-cyan-400 font-bold'
                      : 'text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-cyan-400'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                    layoutId="activeTab"
                    initial={false}
                  />
                )}
              </motion.button>
            ))}

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              whileTap={{ rotate: 180, scale: 0.8 }}
              className="p-2 rounded-full border border-cyan-400/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.7)]"
            >
              {darkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-gray-900 dark:text-gray-100" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg border border-cyan-400/30"
            whileTap={{ rotate: 90 }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

{/* Mobile Nav */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`md:hidden fixed top-16 left-0 w-full z-50 px-6 py-6 rounded-b-2xl space-y-6 shadow-lg backdrop-blur-3xl transition-colors
        ${darkMode ? 'bg-black/90 text-gray-100' : 'bg-white/90 text-gray-900'}
      `}
    >
      {/* Dark Mode Toggle */}
      <div className="flex justify-start mb-4">
        <motion.button
          onClick={toggleDarkMode}
          whileTap={{ rotate: 180, scale: 0.9 }}
          className={`p-3 rounded-full border transition-all
            ${darkMode 
              ? 'border-cyan-500/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.9)]'
              : 'border-purple-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.8)]'
            }`}
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-gray-900" />
          )}
        </motion.button>
      </div>

      {/* Nav Items */}
      <div className="flex flex-col space-y-3">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => {
              scrollToSection(item.id);
              setIsOpen(false); // close nav after click
            }}
            className={`relative text-left text-lg font-medium px-4 py-2 transition-all duration-300 rounded-lg
              ${activeSection === item.id
                ? 'text-cyan-400 font-bold bg-cyan-500/10 dark:bg-cyan-400/10'
                : darkMode
                  ? 'text-gray-200 hover:text-cyan-400 hover:bg-cyan-500/10'
                  : 'text-gray-800 hover:text-purple-500 hover:bg-purple-500/10'
              }`}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
            {activeSection === item.id && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 w-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                layoutId="activeTab"
                initial={false}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </motion.nav>
  );
};

export default Navigation;
