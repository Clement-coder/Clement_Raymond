import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose, darkMode }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
            onClick={onClose}
          ></div>

          {/* Modal Content */}
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl p-6 ${
              darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 p-2 rounded-full ${
                darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors`}
            >
              <X size={24} />
            </button>

            {/* Project Image */}
            <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30`}></div>
            </div>

            {/* Project Details */}
            <h3
              className="text-3xl font-bold mb-3"
              style={{ fontFamily: 'Audiowide, cursive' }}
            >
              {project.title}
            </h3>
            <p className="text-lg mb-4 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-sm font-medium rounded-full border ${
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
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button flex items-center space-x-2 px-4 py-2 text-white font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 border font-medium rounded-lg transition-all duration-300 ${
                    darkMode
                      ? 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500'
                      : 'border-blue-300/30 text-blue-700 hover:bg-blue-200/20 hover:border-blue-400'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
