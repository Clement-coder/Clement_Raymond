import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Globe, Code } from 'lucide-react';
import { ThemeContext } from '../ThemeContext';

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  const projects = [
    {
      id: 1,
      title: 'Cash-Hub',
      description: 'A banking app to send and receive money between users, fully built with JavaScript and localStorage.',
      image: 'https://images.pexels.com/photos/4386430/pexels-photo-4386430.jpeg',
      tags: ['JavaScript', 'localStorage', 'Frontend', 'Backend'],
      icon: Database,
      gradient: 'from-cyan-500 to-purple-600'
    },
    {
      id: 2,
      title: 'FakeStore E-commerce',
      description: 'An online store using fakestoreapi.com products with add to cart, update, remove, and clear cart functionalities.',
      image: 'https://images.pexels.com/photos/3945685/pexels-photo-3945685.jpeg',
      tags: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
      icon: Code,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'My futuristic portfolio website showcasing projects, skills, and animations using React and Tailwind CSS.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      tags: ['React', 'Tailwind', 'Framer Motion', 'Frontend'],
      icon: Globe,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 4,
      title: 'Web3 Test Project',
      description: 'Next.js + Tailwind CSS Web3 project built with App Router, demonstrating blockchain interactions and smart contract calls.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      tags: ['Next.js', 'Tailwind', 'Web3', 'Smart Contracts'],
      icon: Database,
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      title: 'Yield MVP',
      description: 'Decentralized agro-finance platform connecting Nigerian farmers with investors, milestone-based disbursements via smart contracts.',
      image: 'https://images.pexels.com/photos/1122861/pexels-photo-1122861.jpeg',
      tags: ['Solidity', 'React', 'Ethers.js', 'Blockchain'],
      icon: Code,
      gradient: 'from-cyan-500 to-purple-500'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-black' : 'bg-gray-100'} relative overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Project Card */}
              <motion.div
                className={`relative h-full ${darkMode ? 'bg-black/40' : 'bg-white/20'} backdrop-blur-lg bg-gradient-to-r from-purple-300/10 via-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20 overflow-hidden hover:border-cyan-500/40 transition-all duration-300`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Glowing Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}></div>
                  
                  {/* Floating Icon */}
                  <motion.div
                    className="absolute top-4 right-4 p-3 bg-black/30 backdrop-blur-sm rounded-lg border border-cyan-500/30 ease-in-out duration-200"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <project.icon className={`w-6 h-6 ${darkMode ? 'text-cyan-400' : 'text-cyan-400'}`} />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 relative">
                  <h3 
                    className={`text-xl font-bold mb-3 transition-colors ${darkMode ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-blue-600'}`}
                    style={{ fontFamily: 'Audiowide, cursive' }}
                  >
                    {project.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-800'} mb-4 leading-relaxed`}>
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 ${
                          darkMode 
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' 
                          : 'bg-blue-200/30 text-blue-800 border-blue-300/30'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <motion.button
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.button>
                    
                    <motion.button
                      className={`flex items-center space-x-2 px-4 py-2 border font-medium rounded-lg transition-all duration-300 ${
                        darkMode 
                        ? 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500'
                        : 'border-blue-300/30 text-blue-700 hover:bg-blue-200/20 hover:border-blue-400'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
