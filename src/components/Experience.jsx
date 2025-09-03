import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { ThemeContext } from '../ThemeContext';

const Experience = () => {
  const { darkMode } = useContext(ThemeContext);

  const experiences = [
    {
      company: 'Blockfuse Labs',
      position: 'Blockchain Developer & Web3 Innovator',
      period: '2025 - Present',
      location: 'Jos, Nigeria',
      description: 'Building cutting-edge blockchain applications and Web3 solutions, mentoring juniors, and exploring DeFi & NFT ecosystems.',
      achievements: [
        'Developed decentralized platforms and smart contracts used in real-world projects',
        'Optimized blockchain applications for gas efficiency and scalability',
        'Mentored new developers on React, Web3, and Solidity'
      ]
    },
    {
      company: 'Personal Projects',
      position: 'Full Stack Developer',
      period: '2023 - 2025',
      location: 'Jos, Nigeria',
      description: 'Worked on multiple web projects, including portfolio websites, e-commerce platforms, and Web3 test applications, improving my frontend & backend skills.',
      achievements: [
        'Built Cash-Hub, a money transfer app using JavaScript & localStorage',
        'Developed a futuristic portfolio website with animations and dark mode',
        'Created e-commerce projects using fakestoreapi.com for realistic product handling'
      ]
    },
    {
      company: 'Blockfuse Labs Intern',
      position: 'Frontend & Backend Developer',
      period: '2022 - 2023',
      location: 'Jos, Nigeria',
      description: 'Internship focused on learning blockchain, React, and backend integrations for decentralized applications.',
      achievements: [
        'Assisted in developing smart contract interactions with frontend apps',
        'Learned blockchain fundamentals and deployed test projects',
        'Collaborated with team members to create functional and modern UI/UX designs'
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-black' : 'bg-gray-100'}  relative overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20"></div>
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
            EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 transform md:-translate-x-px"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10"
                  whileInView={{ 
                    scale: [1, 1.5, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(6, 182, 212, 0.7)',
                      '0 0 0 10px rgba(6, 182, 212, 0)',
                      '0 0 0 0 rgba(6, 182, 212, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 bg-gradient-to-r from-purple-300/10 via-cyan-500/10 to-purple-500/10 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative group">
                    {/* Glassmorphism Card */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                    <div className={`relative p-6 ${darkMode ? 'bg-black/40' : 'bg-white/20'} backdrop-blur-lg rounded-2xl border ${darkMode ? 'border-cyan-500/20' : 'border-cyan-400/30'} hover:border-cyan-500/40 transition-all duration-300`}>
                      
                      {/* Company Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 
                            className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                            style={{ fontFamily: 'Audiowide, cursive' }}
                          >
                            {exp.company}
                          </h3>
                          <p className="text-cyan-400 font-semibold">{exp.position}</p>
                        </div>
                        <Briefcase className="w-8 h-8 text-purple-400" />
                      </div>

                      {/* Period and Location */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-800'} mb-4 leading-relaxed`}>
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className={`flex items-start space-x-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
