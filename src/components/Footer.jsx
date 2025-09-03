import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Database, Cpu, Cloud, Server } from 'lucide-react';
import { ThemeContext } from '../ThemeContext';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  const floatingIcons = [
    { Icon: Code, delay: 0 },
    { Icon: Database, delay: 0.2 },
    { Icon: Cpu, delay: 0.4 },
    { Icon: Cloud, delay: 0.6 },
    { Icon: Server, delay: 0.8 },
  ];

  return (
    <footer className={`relative overflow-hidden border-t py-4 ${darkMode ? 'bg-black border-cyan-600/30' : 'bg-gray-100 border-gray-300'}`}>
      {/* Neon background circles */}
      <div className={`absolute top-0 left-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse ${darkMode ? 'bg-cyan-500/20' : 'bg-purple-400/20'}`}></div>
      <div className={`absolute bottom-0 right-1/3 w-96 h-96 rounded-full blur-3xl animate-pulse ${darkMode ? 'bg-purple-500/20' : 'bg-cyan-300/20'}`}></div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, delay }, index) => (
          <motion.div
            key={index}
            className={`absolute ${darkMode ? 'text-cyan-400/30' : 'text-purple-400/30'}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
              y: [-20, 20, -20],
              x: [-20, 20, -20],
              rotate: [0, 360, 0],
            }}
            transition={{ duration: 6, delay, repeat: Infinity }}
            style={{
              left: `${10 + index * 20}%`,
              top: `${10 + index * 15}%`,
            }}
          >
            <Icon size={32} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Animated Logo */}
<motion.div
  className="mx-auto mb-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
>
  <img
    src="src/assets/clement_raymond_logo.png"
    alt="Clement Raymond Logo"
    className="w-full h-full object-contain"
  />
</motion.div>

        {/* Futuristic Brand */}
        <motion.h2
          className={`text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gradient-to-r from-purple-500 to-cyan-400'}`}
          style={{ fontFamily: 'Orbitron, monospace' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Clement Raymond
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className={`text-lg mb-6 font-mono ${darkMode ? 'text-cyan-400/70' : 'text-purple-700/70'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Crafting immersive web experiences with style & precision
        </motion.p>

        {/* Animated Heart */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className={`text-sm ${darkMode ? 'text-gray-400/60' : 'text-gray-600/60'}`}>Made with</span>
          <motion.div
            animate={{ scale: [1, 1.6, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart className={`w-6 h-6 ${darkMode ? 'text-red-500' : 'text-pink-500'}`} />
          </motion.div>
          <span className={`text-sm ${darkMode ? 'text-gray-400/60' : 'text-gray-600/60'}`}>and futuristic vibes</span>
        </div>

        {/* Copyright & status */}
        <p className={`text-sm mb-2 ${darkMode ? 'text-gray-500/60' : 'text-gray-700/60'}`}>
          © 2025 Clement Raymond. All rights reserved.
        </p>

        <motion.div
          className={`text-xs font-mono ${darkMode ? 'text-cyan-400/60' : 'text-purple-400/60'}`}
          animate={{ opacity: [0.2, 1, 0.2], y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          [ SYSTEM STATUS: ONLINE ]
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
