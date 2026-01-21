import React, { useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "./ThemeContext";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { darkMode } = useContext(ThemeContext);
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target;
      if (!target) return;
      const anchor = target.closest("a");
      if (anchor && anchor.hash) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <div className={`${darkMode ? 'bg-slate-900' : 'bg-slate-100'} text-white overflow-x-hidden min-h-screen`}>
      {/* Loading Animation */}
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-50 backdrop-blur-xl bg-slate-900/90 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ pointerEvents: "none" }}
        >
          <motion.div
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "system-ui, sans-serif" }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 1, repeat: 2 }}
          >
            LOADING...
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-30"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.button
          className="glass-button p-4 text-white rounded-full shadow-glass"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default App;
