import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Globe, Code } from 'lucide-react';
import { ThemeContext } from '../ThemeContext';
import FoodraImage from '../assets/foodra.png';
import FansOnlyImage from '../assets/fansOnly.png';
import CipherlinkImage from '../assets/cipherlink.png';
import OfframpImage from '../assets/offramp_1.png';
import RecurchainImage from '../assets/recurchain.png';
import AxiomsphereImage from '../assets/Axiomsphere.png';
import CroptrustImage from '../assets/croptrust.png';

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  const projects = [
    {
      id: 1,
      title: 'Foodra Platform',
      description: 'Foodra is a decentralized agricultural platform using blockchain, AI, and digital finance to empower farmers with identity, credit, inputs, training, insurance, and market access.',
      tags: ['Blockchain', 'Web3', 'AgriTech', 'Next.js', 'Smart Contracts'],
      image: FoodraImage,
      icon: Database,
      gradient: 'from-green-500 to-teal-600',
      github: 'https://github.com/Clement-coder/foodra-platform',
      live: 'https://foodra-platform.vercel.app/'
    },
    {
      id: 2,
      title: 'FansOnly',
      description: 'Decentralized loyalty platform for creators, artists, and influencers to connect with fans through exclusive content, experiences, and token-based rewards.',
      tags: ['Web3', 'Creators', 'NFTs', 'Smart Contracts'],
      image: FansOnlyImage,
      icon: Globe,
      gradient: 'from-purple-500 to-pink-600',
      github: 'https://github.com/Clement-coder/FansOnly',
      live: 'https://fans-only-kd4t.vercel.app/'
    },
    {
      id: 3,
      title: 'Cipherlink',
      description: 'Lightweight web app enabling secure encryption, sharing, and decryption of messages with local history tracking and a clean, modern interface.',
      tags: ['Encryption', 'Web App', 'React', 'LocalStorage'],
      image: CipherlinkImage,
      icon: Code,
      gradient: 'from-cyan-500 to-purple-500',
      github: 'https://github.com/Clement-coder/cipherlink',
      live: 'https://cipherlink-delta.vercel.app/'
    },
    {
      id: 4,
      title: 'Offramp API',
      description: 'Scalable backend API for crypto-to-fiat off-ramp services, handling rates, providers, notifications, and transaction status.',
      tags: ['Backend', 'API', 'Crypto', 'Node.js'],
      image: OfframpImage,
      icon: Database,
      gradient: 'from-orange-500 to-red-600',
      github: 'https://github.com/Clement-coder/offramp-api',
      live: 'https://offramp-api.vercel.app/'
    },
    {
      id: 5,
      title: 'Car Dealer NFT Marketplace',
      description: 'Decentralized car dealership marketplace where dealers and buyers trade vehicles as NFTs, with smart contracts and responsive React + Tailwind frontend.',
      tags: ['NFTs', 'Marketplace', 'React', 'Smart Contracts'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      icon: Database,
      gradient: 'from-cyan-500 to-purple-600',
      github: 'https://github.com/Clement-coder/car-dealer-nft-marketplace',
      live: ''
    },
    {
      id: 6,
      title: 'RecurChain',
      description: 'Decentralized automation system for real-world recurring payments using USDC on Base. Walletless login and autonomous payment agents.',
      tags: ['Web3', 'Crypto Payments', 'Next.js', 'Smart Contracts'],
      image: RecurchainImage,
      icon: Code,
      gradient: 'from-purple-500 to-pink-600',
      github: 'https://github.com/Clement-coder/recurchain',
      live: 'https://recurchain.vercel.app/'
    },
    {
      id: 7,
      title: 'Web3 Contract Collection',
      description: 'Collection of production-grade Solidity contracts: Student System, Hospital Manager, Bank DeFi Module, DAO Voting, built with Hardhat, Ignition, OpenZeppelin.',
      tags: ['Solidity', 'Smart Contracts', 'Blockchain', 'Hardhat'],
      image: 'https://images.pexels.com/photos/4386430/pexels-photo-4386430.jpeg',
      icon: Code,
      gradient: 'from-green-500 to-teal-600',
      github: 'https://github.com/Clement-coder/web3-contract-collection',
      live: ''
    },
    {
      id: 8,
      title: 'AxiomSphere',
      description: 'Decentralized AI agent platform. Deploy autonomous agents, automate tasks, track micropayments, manage wallets, and monitor activity seamlessly.',
      tags: ['AI', 'Web3', 'Automation', 'Smart Contracts'],
      image: AxiomsphereImage,
      icon: Globe,
      gradient: 'from-orange-500 to-red-600',
      github: 'https://github.com/Clement-coder/AxiomSphere',
      live: 'https://axiom-sphere.vercel.app/'
    },
    {
      id: 9,
      title: 'CropTrust',
      description: 'Modern agriculture marketplace bridging farmers and buyers through trust, transparency, and seamless interaction with a futuristic, calm design.',
      tags: ['AgriTech', 'Web3', 'Marketplace', 'Blockchain'],
      image: CroptrustImage,
      icon: Database,
      gradient: 'from-cyan-500 to-purple-500',
      github: 'https://github.com/Clement-coder/Crop-Trust',
      live: 'https://crop-trust.vercel.app/'
    },
    {
      id: 10,
      title: 'ReTrust Marketplace',
      description: 'Decentralized second-hand product marketplace built on Web3 using escrow smart contracts for trust, transparency, and fraud-free trading.',
      tags: ['Web3', 'Marketplace', 'Smart Contracts', 'React'],
      image: 'https://images.pexels.com/photos/3945685/pexels-photo-3945685.jpeg',
      icon: Globe,
      gradient: 'from-purple-500 to-pink-600',
      github: 'https://github.com/Clement-coder/retrust-marketplace',
      live: ''
    }
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-black' : 'bg-gray-100'} relative overflow-hidden`}>
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
              <motion.div
                className={`relative h-full ${darkMode ? 'bg-black/40' : 'bg-white/20'} backdrop-blur-lg bg-gradient-to-r from-purple-300/10 via-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20 overflow-hidden hover:border-cyan-500/40 transition-all duration-300`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30`}></div>
                  
                  <motion.div
                    className="absolute top-4 right-4 p-3 bg-black/30 backdrop-blur-sm rounded-lg border border-cyan-500/30 ease-in-out duration-200"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <project.icon className={`w-6 h-6 ${darkMode ? 'text-cyan-400' : 'text-cyan-400'}`} />
                  </motion.div>
                </div>

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
                  
                  <div className="flex space-x-4">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
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
                      </motion.a>
                    )}
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
