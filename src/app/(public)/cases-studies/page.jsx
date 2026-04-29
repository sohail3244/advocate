'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  ChevronRight, 
  Scale, 
  Calendar, 
  Tag,
  CheckCircle2
} from 'lucide-react';

const cases = [
  {
    title: "The State vs. Vardhan Group",
    category: "Criminal Defense",
    year: "2025",
    outcome: "Acquittal",
    description: "Successfully defended a multi-million dollar corporate fraud allegation, resulting in all charges being dropped due to lack of evidence.",
    tags: ["White Collar Crime", "High Stakes", "Litigation"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070"
  },
  {
    title: "Tech-Alpha Merger Dispute",
    category: "Corporate Law",
    year: "2024",
    outcome: "Settled",
    description: "Mediated a complex cross-border merger dispute between two leading tech giants in Jaipur's Special Economic Zone.",
    tags: ["M&A", "Arbitration", "Tech Law"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070"
  },
  {
    title: "Heritage Land Acquisition",
    category: "Real Estate",
    year: "2024",
    outcome: "Victory",
    description: "Represented local landowners against illegal encroachment by industrial developers, securing 100% compensation and land rights.",
    tags: ["Property Law", "Civil Rights", "Landmark Case"],
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070"
  },
  {
    title: "Global IP Infringement",
    category: "Intellectual Property",
    year: "2023",
    outcome: "Injunction Granted",
    description: "Secured an immediate stay order against a global brand for infringing upon a local artisan's trademarked designs.",
    tags: ["Trademark", "Copyright", "Legal Architecture"],
    image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=2070"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[20%] right-[-10%] w-125 h-125 bg-zinc-900/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-[-5%] w-100 h-100 bg-white/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-white/30" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-500">Legal Portfolio</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none"
          >
            Significant <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-200 to-zinc-600 italic">Benchmarks.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-zinc-500 text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          >
            A curated selection of our most complex legal victories. We redefine the boundaries of justice through strategic grit and intellectual rigor.
          </motion.p>
        </header>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative flex flex-col"
            >
              {/* Image Container with Shutter Effect */}
              <div className="relative aspect-16/10 overflow-hidden rounded-4xl border border-white/10">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Year Badge */}
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest border border-white/10">
                  EST. {item.year}
                </div>
                
                {/* Status Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <CheckCircle2 size={12} /> {item.outcome}
                </div>
              </div>

              {/* Content Section */}
              <div className="pt-8 px-2">
                <div className="flex items-center gap-3 mb-4">
                  <Tag size={12} className="text-zinc-600" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500">{item.category}</span>
                </div>
                
                <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-zinc-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-zinc-500 font-light leading-relaxed mb-6 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest font-bold px-3 py-1 border border-white/5 rounded-md text-zinc-600 italic">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] group/btn transition-all">
                  Read Case Journal 
                  <div className="p-2 border border-white/10 rounded-full group-hover/btn:border-white transition-colors">
                    <ExternalLink size={12} />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Statistics (Extra Premium Touch) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-black mb-2">98%</div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-600">Success Rate</div>
          </div>
          <div>
            <div className="text-4xl font-black mb-2">500+</div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-600">Cases Won</div>
          </div>
          <div>
            <div className="text-4xl font-black mb-2">15yr</div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-600">Legal Legacy</div>
          </div>
          <div>
            <div className="text-4xl font-black mb-2">₹20B</div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-600">Damages Recovered</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}