import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { User, Brain, Rocket, Globe } from 'lucide-react';
import { ThemeContext } from '../ThemeContext'; // assuming you have ThemeContext for darkMode

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  const highlights = [
    {
      Icon: Brain,
      title: ' Web3 Enthusiast',
      description: 'I explore machine learning, and blockchain to create smart decentralized apps.',
    },
    {
      Icon: Rocket,
      title: 'Innovation Driven',
      description: 'I push boundaries with futuristic web development, crafting interactive and responsive experiences.',
    },
    {
      Icon: Globe,
      title: 'Global Mindset',
      description: 'Building solutions that can scale worldwide using modern tech stacks and blockchain.',
    },
  ];

  return (
    <section
      id="about"
      className={`py-24 relative overflow-hidden transition-colors duration-500 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Floating Background Blobs */}
      <motion.div
        className="absolute w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-20 top-10 left-1/4"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-10 right-1/4"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            ABOUT ME
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded"></div>
          <p
            className={`mt-4 text-lg md:text-xl max-w-2xl mx-auto transition-colors duration-500 ${
              darkMode ? 'text-gray-300' : 'text-gray-900'
            }`}
          >
            I am Clement Raymond a Front-End developer, blockchain enthusiast, and Web3 innovator.
            I craft immersive digital experiences combining AI, blockchain, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`relative p-8 rounded-2xl border shadow-2xl hover:scale-[1.02] transition-all duration-500 ${
                darkMode
                  ? 'bg-black/40 border-cyan-500/20'
                  : 'bg-white/10 border-purple-500/20'
              } backdrop-blur-lg`}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-sm opacity-20"></div>
              <div className="relative">
                <User className="w-12 h-12 text-cyan-400 mb-6" />
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'Audiowide, cursive', color: darkMode ? 'white' : 'black' }}
                >
                  Digital Architect
                </h3>
                <p className={`text-lg leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                  I specialize in Front-End development and blockchain. I craft immersive experiences bridging
                  traditional web and decentralized systems.
                </p>
                <p className={`text-lg leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                  Passionate about solving complex problems using React, Web3, and AI to build apps that users love.
                </p>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                  I thrive on innovation, futuristic UI/UX, and building responsive, functional, and visually stunning applications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className={`relative group rounded-lg transition-all duration-300 ${
                  darkMode ? 'bg-black/30 border border-cyan-500/20' : 'bg-white/10 border border-purple-500/20'
                }`}
                whileHover={{ scale: 1.03 }}
              >
                {/* Glow on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>

                <motion.div
                  className="relative p-6 flex items-start space-x-4"

                >
                  <div
                    className={`p-3 rounded-lg flex items-center group justify-center group-hover:rotate-180 transition-all duration-500 ${
                      darkMode ? 'bg-cyan-500' : 'bg-purple-500'
                    }`}
                  >
                    <item.Icon className="w-6  h-6 text-white" 
                                  
                    />
                  </div>
                  <div>
                    <h4 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
                      {item.title}
                    </h4>
                    <p className={`text-gray-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
