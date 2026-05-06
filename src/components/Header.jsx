'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Scale, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Practice Areas', href: '/practice-area' },
    // { name: 'Case Studies', href: '/cases-studies' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-100 transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-8'
        } bg-transparent`}
      >
        {/* Scroll Progress Bar (Full transparent background ke saath match karta hai) */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-white/20 origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          
          {/* Enhanced Logo */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 cursor-pointer group relative z-110"
          >
            <div className="relative overflow-hidden bg-white p-2 rounded-xl">
              <Scale className="h-5 w-5 text-black relative z-10" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tighter uppercase text-white">Saddam Hussain</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 font-bold">Private Chambers</span>
            </div>
          </motion.div>

          {/* Centered Desktop Nav - Semi transparent capsule */}
          <nav className="hidden lg:flex items-center bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-6 py-2 text-[10px] uppercase tracking-widest font-bold text-zinc-300 hover:text-white transition-colors group"
              >
                {link.name}
                <motion.span 
                  className="absolute bottom-1.5 left-6 right-6 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300" 
                />
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4 relative z-110">
            <button
  onClick={() => {
    const phone = "919680752017"; 
    const message = "Hello, I want to book a consultation.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}
  className="group relative overflow-hidden bg-white text-black px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-transform active:scale-95"
>
  <span className="relative z-10 flex items-center gap-2">
    Book Consultation
  </span>
</button>
          </div>

          {/* Mobile Menu Button - Z-index high rakha hai taaki menu ke upar dikhe */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 relative z-110 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Improved Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-screen bg-black/95 backdrop-blur-xl z-1F05 flex flex-col p-12 justify-center items-center text-center"
            >
              <div className="space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-4xl font-black tracking-tighter text-white hover:text-zinc-400 transition-colors uppercase"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-20 pt-12 border-t border-white/10 w-full max-w-xs"
              >
                <p className="text-zinc-500 uppercase tracking-widest text-[10px] mb-4 font-bold">Quick Contact</p>
                <p className="text-xl font-bold text-white tracking-widest">+91 98765 43210</p>
                <div className="flex justify-center gap-6 mt-8">
                   <span className="text-zinc-400 text-xs border-b border-zinc-800">Instagram</span>
                   <span className="text-zinc-400 text-xs border-b border-zinc-800">LinkedIn</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}