import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Database, Cpu, Cloud, Server } from 'lucide-react';
import { ThemeContext } from '../ThemeContext';

const Hero = () => {
  const { darkMode } = useContext(ThemeContext); // get darkMode from context

  const floatingIcons = [
    { Icon: Code, delay: 0 },
    { Icon: Database, delay: 0.2 },
    { Icon: Cpu, delay: 0.4 },
    { Icon: Cloud, delay: 0.6 },
    { Icon: Server, delay: 0.8 },
  ];

  return (
    <section
      id="hero"
      className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}
    >
      {/* Animated Background Grid */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <div
          className={`absolute inset-0 ${
            darkMode
              ? 'bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-black'
              : 'bg-gradient-to-b from-cyan-200/10 via-purple-200/10 to-white'
          }`}
        ></div>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke={darkMode ? 'rgba(0,255,255,0.3)' : 'rgba(0,0,0,0.1)'}
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${
            darkMode ? 'bg-cyan-400' : 'bg-purple-400'
          } opacity-60`}
          initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
          animate={{
            y: [0, -50 + Math.random() * 50, 0],
            x: [0, -50 + Math.random() * 50, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          {/* Floating Tech Icons */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingIcons.map(({ Icon, delay }, index) => (
              <motion.div
                key={index}
                className={`absolute ${darkMode ? 'text-cyan-400/40' : 'text-purple-400/40'}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.8, 1.2, 0.8],
                  y: [-30, 30, -30],
                  x: [-20, 20, -20],
                  rotate: [0, 360, 0],
                }}
                transition={{ duration: 6, delay, repeat: Infinity }}
                style={{
                  left: `${10 + index * 20}%`,
                  top: `${20 + index * 15}%`,
                }}
              >
                <Icon size={48} />
              </motion.div>
            ))}
          </div>

          {/* Main Hero Text */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1
              className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent"
              style={{
                fontFamily: 'Orbitron, monospace',
                backgroundImage: darkMode
                  ? 'linear-gradient(to right, #00fff0, #a855f7, #f472b6)'
                  : 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
              }}
            >
              Clement Raymond
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="mb-8">
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-2 rounded-lg blur-lg opacity-30"
                style={{
                  background: darkMode
                    ? 'linear-gradient(to right, #00fff0, #a855f7)'
                    : 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                }}
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <h2
                className={`relative text-2xl md:text-4xl font-semibold px-6 py-3 rounded-lg border backdrop-blur-sm ${
                  darkMode
                    ? 'text-white bg-black/50 border-cyan-500/30'
                    : 'text-gray-900 bg-white/50 border-purple-300'
                }`}
                style={{ fontFamily: 'Audiowide, cursive' }}
              >
              Front-End Web & Blockchain Developer
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-800'
            }`}
          >
            I build modern web3 applications, smart contracts, and elegant front-end experiences for a decentralized future.
          </motion.p>

          {/* Buttons */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              className="relative px-8 py-4 font-semibold rounded-lg overflow-hidden group"
              style={{
                background: darkMode
                  ? 'linear-gradient(to right, #00fff0, #a855f7)'
                  : 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                color: '#fff',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
            </motion.button>

            <motion.button
              className={`relative px-8 py-4 font-semibold rounded-lg transition-all duration-300 ${
                darkMode
                  ? 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  : 'border-2 border-purple-500 text-purple-500 hover:bg-purple-200/20'
              }`}
              whileHover={{ scale: 1.05, boxShadow: darkMode ? '0 0 20px rgba(0,255,255,0.5)' : '0 0 20px rgba(139,92,246,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Chevron */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <ChevronDown className={`w-8 h-8 ${darkMode ? 'text-cyan-400' : 'text-purple-500'}`} />
      </motion.div>
    </section>
  );
};

export default Hero;
