"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Gavel,
  ShieldCheck,
  Users,
  Briefcase,
  Scale,
  Landmark,
  ArrowRight,
} from "lucide-react";

const practiceAreas = [
  {
    title: "Criminal Defense",
    desc: "Strategic defense for high-stakes criminal litigation, white-collar crimes, and internal investigations.",
    icon: <Gavel className="w-8 h-8 md:w-10 md:h-10" />,
    color: "from-red-500/20 to-transparent",
  },
  {
    title: "Corporate Law",
    desc: "Comprehensive legal architecture for global startups, mergers, acquisitions, and compliance management.",
    icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />,
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "Family Law",
    desc: "Delicate handling of complex domestic matters including divorce, child custody, and estate planning.",
    icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
    color: "from-purple-500/20 to-transparent",
  },
  {
    title: "Real Estate",
    desc: "Expert counsel for property disputes, land acquisition, and RERA compliance in Rajasthan.",
    icon: <Landmark className="w-8 h-8 md:w-10 md:h-10" />,
    color: "from-emerald-500/20 to-transparent",
  },
  {
    title: "Intellectual Property",
    desc: "Protecting your digital and physical assets through trademark, copyright, and patent litigation.",
    icon: <Briefcase className="w-8 h-8 md:w-10 md:h-10" />,
    color: "from-amber-500/20 to-transparent",
  },
  {
    title: "Civil Litigation",
    desc: "Representing clients in high-value civil disputes, debt recovery, and contractual breaches.",
    icon: <Scale className="w-8 h-8 md:w-10 md:h-10" />,
    color: "from-zinc-500/20 to-transparent",
  },
];

export default function PracticeAreasPage() {
  return (
    // 'bg-black' hata diya gaya hai taaki Layout ka BG dikhe
    <div className="min-h-screen text-white pt-24 md:pt-32 pb-10 md:pb-20 px-4 md:px-6 overflow-hidden relative z-10">
      {/* 
         PURANE BACKGROUND DECORATIVE ELEMENTS REMOVE KAR DIYE HAIN 
         TAAKI LAYOUT KA GLOBAL BG SARE PAGES PE CONSISTENT RAHE
      */}

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-1.5 border border-white/10 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold mb-6 bg-white/5 backdrop-blur-md"
          >
            Specialization
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 md:mb-8 leading-tight"
          >
            OUR PRACTICE <br className="sm:hidden" />{" "}
            <span className="italic text-transparent bg-clip-text bg-linear-to-r from-zinc-200 to-zinc-600">
              AREAS.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base md:text-xl max-w-2xl leading-relaxed font-light mx-auto lg:mx-0"
          >
            Providing expert legal solutions across a diverse range of
            disciplines. We combine deep local knowledge with global standards.
          </motion.p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 md:p-10 rounded-[30px] md:rounded-[40px] border border-white/5 bg-zinc-900/20 backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white hover:text-black"
            >
              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="mb-6 md:mb-8 p-3 md:p-4 bg-white/5 w-fit rounded-xl md:rounded-2xl group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-xl">
                  {area.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight uppercase group-hover:translate-x-1 transition-transform duration-500">
                  {area.title}
                </h3>

                <p className="text-zinc-500 group-hover:text-zinc-800 text-sm md:text-base leading-relaxed font-light mb-6 md:mb-8">
                  {area.desc}
                </p>

                
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity hidden sm:block">
                <div className="w-12 h-px bg-current" />
                <div className="h-12 w-px bg-current absolute top-6 right-6" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 p-8 md:p-12 rounded-[30px] md:rounded-[50px] border border-white/10 bg-white/5 backdrop-blur-lg text-center"
        >
          <h2 className="text-2xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-6 uppercase">
            Need specialized counsel?
          </h2>
          <p className="text-zinc-500 mb-8 md:mb-10 max-w-xl mx-auto text-sm md:text-base font-light">
            Every case is unique. Schedule a private consultation to discuss
            your specific legal requirements with our experts.
          </p>
          <button
            onClick={() => {
              const phone = "9680752017";
              const message = "Hello, I want to book a consultation.";
              const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
              window.open(url, "_blank");
            }}
            className="w-full sm:w-auto bg-white text-black px-8 md:px-10 py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-lg active:scale-95"
          >
            Book Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
}
