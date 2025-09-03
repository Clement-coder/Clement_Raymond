import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../ThemeContext';

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields!');
      return;
    }

    setSending(true);
    const toastId = toast.loading('Sending message...', { position: 'top-right' });

    try {
      await emailjs.send(
        'service_cywjpfk',      // service ID
        'template_0pk8voe',     // template ID
        formData,
        'sptXBJgMPx8p5uIFX'    // public key
      );

      toast.success('Message sent successfully!', { id: toastId });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message!', { id: toastId });
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    { Icon: Mail, label: 'Email', value: 'chinexzy37@gmail.com', href: 'mailto:chinexzy37@gmail.com' },
    { Icon: Phone, label: 'WhatsApp', value: '+2348121090660', href: 'https://wa.me/2341234567890' },
    { Icon: MapPin, label: 'Location', value: 'Jos, Nigeria', href: 'https://www.google.com/maps/place/Jos,+Plateau/@9.9081085,8.7950328,24595m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1053724e68ec1c83:0x21ebe700fbd5381d!8m2!3d9.8965273!4d8.8583309!16zL20vMDRmcWQw?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D' }
  ];

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/Clement-coder', color: 'hover:text-white' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/clement-raymond-861154335/', color: 'hover:text-blue-400' },
    { Icon: Twitter, href: 'https://x.com/PhantomOfCode', color: 'hover:text-cyan-400' }
  ];

  return (
    <section id="contact" className={`py-20 relative overflow-hidden ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
      <Toaster />
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, monospace' }}>
            CONTACT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-4"></div>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Ready to bring your next project to life? Let's connect and create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20"></div>
              <div className={`relative p-8 rounded-2xl border ${darkMode ? 'bg-black/50 border-cyan-500' : 'bg-white/20 border-gray-400'}`}>
                <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'Audiowide, cursive' }}>
                  Get In Touch
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, idx) => (
                    <motion.a key={idx} href={info.href} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 group ${darkMode ? 'hover:bg-cyan-500/10' : 'hover:bg-gray-300/20'}`} whileHover={{ x: 10 }}>
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                        <info.Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>{info.label}</p>
                        <p className={`font-medium ${darkMode ? 'text-white group-hover:text-cyan-400' : 'text-black group-hover:text-purple-600'} transition-colors`}>
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-cyan-500/20">
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>Follow me on social media</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, idx) => (
                      <motion.a key={idx} href={social.href} target="_blank" rel="noopener noreferrer"
                        className={`p-3 rounded-lg border ${darkMode ? 'bg-black/40 border-cyan-500 text-gray-400' : 'bg-white/20 border-gray-400 text-black'} ${social.color} transition-all duration-300`} whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.9 }}>
                        <social.Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20"></div>
            <form onSubmit={handleSubmit} className={`relative p-8 rounded-2xl border ${darkMode ? 'bg-black/50 border-cyan-500' : 'bg-white/20 border-gray-400'}`}>
              <div className="space-y-6">
                {/* Inputs */}
                {['Name', 'Email'].map((label) => (
                  <div key={label}>
                    <label className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} block text-sm font-medium mb-2`}>{label}</label>
                    <input
                      type={label === 'Email' ? 'email' : 'text'}
                      name={label.toLowerCase()}
                      value={formData[label.toLowerCase()]}
                      onChange={handleChange}
                      placeholder={label === 'Email' ? 'you@example.com' : 'Your Name'}
                      required
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none transition-all duration-300 ${
                        darkMode
                          ? 'bg-black/40 border-cyan-500 text-white placeholder-gray-500 focus:border-cyan-500'
                          : 'bg-white/20 border-gray-400 text-black placeholder-gray-700 focus:border-purple-500'
                      }`}
                    />
                  </div>
                ))}

                <div>
                  <label className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} block text-sm font-medium mb-2`}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none transition-all duration-300 resize-none ${
                      darkMode
                        ? 'bg-black/40 border-cyan-500 text-white placeholder-gray-500 focus:border-cyan-500'
                        : 'bg-white/20 border-gray-400 text-black placeholder-gray-700 focus:border-purple-500'
                    }`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{sending ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
