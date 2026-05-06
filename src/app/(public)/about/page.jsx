'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  BookOpen, 
  Target, 
  History, 
  Scale,
  ArrowRight
} from 'lucide-react';

const values = [
  {
    title: "Meticulous Strategy",
    desc: "Every case begins with a deep dive into legal architecture to find unmatched leverage.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Uncompromising Integrity",
    desc: "Maintaining the highest ethical standards while navigating complex legal landscapes.",
    icon: <Scale className="w-6 h-6" />
  },
  {
    title: "Results Oriented",
    desc: "Our legacy is built on the tangible victories we secure for our diverse clientele.",
    icon: <Award className="w-6 h-6" />
  }
];

export default function AboutPage() {
  return (
    // Yahan se 'bg-black' hata diya gaya hai taaki layout ka BG dikhe
    <div className="min-h-screen text-white pt-24 md:pt-32 pb-10 md:pb-20 px-4 sm:px-6 relative z-10">
      
      {/* 
         PURANA BACKGROUND AMBIENCE DELETE KAR DIYA HAI 
         TAAKI LAYOUT WALA BG OVERLAP NA HO 
      */}

      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1.5 border border-white/10 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold mb-6 md:mb-8 bg-white/5 backdrop-blur-md">
              Saddam Hussain
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 md:mb-8">
              THE <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-200 to-zinc-600 italic">FOUNDATION.</span>
            </h1>
            <p className="text-zinc-400 text-base md:text-xl font-light leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Justice & Co. was founded on the principle that sophisticated legal counsel should be accessible, precise, and fearless. Based in the historic heart of Jaipur, we bridge the gap between traditional litigation and modern legal strategy.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square sm:aspect-video lg:aspect-square rounded-[30px] md:rounded-[60px] overflow-hidden border border-white/10 group shadow-2xl"
          >
            <img 
              src="saddam.jpeg" 
              alt="Office Ambience" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
          </motion.div>
        </div>

        {/* The Counsel Section */}
        <section className="mb-20 md:mb-32">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start p-8 rounded-[40px] bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="w-full lg:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase mb-4">The Lead Counsel</h2>
              <div className="w-16 h-1 bg-white mb-6 md:mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                
                <div className="flex items-center gap-4 text-zinc-400">
                  <History size={18} className="shrink-0" />
                  <span className="text-[10px] md:text-xs uppercase tracking-widest">Full Experience</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed italic">
                "Saddam Hussain brings a unique, tech-driven perspective to the legal world. As a full-stack developer turned private counsel, he understands the architecture of law, providing clients with modern solutions to age-old disputes."
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-20 md:mb-32">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-10 rounded-[30px] md:rounded-[40px] border border-white/5 bg-zinc-900/20 backdrop-blur-md hover:border-white/20 transition-colors"
            >
              <div className="mb-6 text-zinc-400">{val.icon}</div>
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-4">{val.title}</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Location & Legacy Card */}
        <div className="p-8 md:p-20 rounded-[30px] md:rounded-[60px] border border-white/10 bg-white/5 backdrop-blur-lg text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 uppercase tracking-tighter">Jaipur Roots.<br className="md:hidden" /> Global Vision.</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base font-light mb-10 md:mb-12 leading-relaxed px-2">
              Operating from High Court, Jaipur, we are committed to the local community while serving corporate and private interests across India. Our firm combines the royal grit of Rajasthan with a futuristic legal approach.
            </p>
            {/* <button className="w-full sm:w-auto bg-white text-black px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 mx-auto">
              Our Practice Areas <ArrowRight size={18} />
            </button> */}
          </div>
          <Scale className="absolute -bottom-10 -right-10 w-40 h-40 md:w-80 md:h-80 opacity-[0.03] text-white hidden sm:block" />
        </div>

      </div>
    </div>
  );
}