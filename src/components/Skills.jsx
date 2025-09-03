import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../ThemeContext'; // your darkMode context

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Framer Motion', level: 85 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 89 },
        { name: 'Python', level: 87 },
        { name: 'GraphQL', level: 83 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 }
      ]
    },
    {
      title: 'Blockchain',
      skills: [
        { name: 'Solidity', level: 88 },
        { name: 'Web3.js', level: 85 },
        { name: 'Ethereum', level: 87 },
        { name: 'Smart Contracts', level: 82 },
        { name: 'DeFi', level: 79 }
      ]
    }
  ];

  return (
    <section
      id="skills"
      className={`py-20 relative overflow-hidden transition-colors duration-500 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            darkMode ? 'bg-cyan-500/20' : 'bg-purple-400/20'
          }`}
        ></div>
        <div
          className={`absolute bottom-0 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            darkMode ? 'bg-purple-500/20' : 'bg-cyan-400/20'
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            SKILLS MATRIX
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded"></div>
          <p
            className={`mt-4 text-lg md:text-xl max-w-2xl mx-auto transition-colors duration-500 ${
              darkMode ? 'text-gray-300' : 'text-gray-900'
            }`}
          >
            I build Front-End, Web3, and blockchain solutions. My skill matrix shows my expertise in frontend, backend, and decentralized tech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="relative group"
            >
              {/* Glassmorphism Card */}
              <div
                className={`relative p-8 rounded-2xl border shadow-2xl bg-gradient-to-r from-purple-300/10 via-cyan-500/10 to-purple-500/10 from h-full transition-all duration-300 backdrop-blur-lg ${
                  darkMode
                    ? 'bg-black/40 border-cyan-500/20 hover:border-cyan-500/40'
                    : 'bg-white/10 border-purple-500/20 hover:border-purple-500/40'
                }`}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-300"></div>
                <div className="relative">
                  <h3
                    className={`text-2xl font-bold mb-8 text-center ${
                      darkMode ? 'text-white' : 'text-black'
                    }`}
                    style={{ fontFamily: 'Audiowide, cursive' }}
                  >
                    {category.title}
                  </h3>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className={`${darkMode ? 'text-gray-300' : 'text-gray-900'} font-medium`}>{skill.name}</span>
                          <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-2 rounded-full overflow-hidden bg-gray-700/30">
                          <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.5,
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: 'easeOut'
                            }}
                          />

                          {/* Glowing Effect */}
                          <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-sm opacity-50"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.5,
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: 'easeOut'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
