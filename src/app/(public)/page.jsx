"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Gavel, Users, ArrowUpRight } from "lucide-react";
import PracticeAreasPage from "./practice-area/page";

export default function Home  ()  {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    // 'bg-black' hata diya gaya hai taaki Layout ka background dikhe
    <div className="relative min-h-screen font-sans text-white selection:bg-white selection:text-black overflow-x-hidden">
      {/* --- BACKGROUND LAYER (Transparent Logic) --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* 
           Agar aap chahte hain ki Layout ka BG hi dikhe, toh niche waali 
           motion.div (Background.png) ko delete kar dein. 
           Maine ise comment/modify kar diya hai taaki sirf halka overlay rahe.
        */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-10 text-center lg:text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 backdrop-blur-md rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold bg-white/5"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Saddam Hussain | Private Counsel
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter"
              >
                UNMATCHED <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-400 to-zinc-600 italic">
                  LEGACY.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-base md:text-xl text-zinc-400 max-w-lg leading-relaxed font-light mx-auto lg:mx-0"
              >
                Sophisticated legal strategy meeting meticulous execution. Based
                in Jaipur, serving global interests with integrity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
              >
                <button
                  onClick={() => {
                    const phone = "9680752017"; // +91 hata ke number likho
                    const message = "Hello, I want to book a consultation.";
                    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                    window.open(url, "_blank");
                  }}
                  className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 md:px-12 md:py-5 rounded-full font-black uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-2xl text-xs md:text-sm"
                >
                  Contact Firm
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Right Side: Profile Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              {/* Added backdrop-blur to the image container for a premium feel */}
              <div className="relative w-full max-w-70 sm:max-w-87.5 lg:max-w-md aspect-4/5 rounded-[40px] md:rounded-[60px] overflow-hidden border border-white/10 group shadow-2xl bg-zinc-900/20 backdrop-blur-sm">
                <img
                  src="/saddam.jpeg"
                  alt="Sohail Ahmed - Advocate"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-[60px] rounded-full hidden sm:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      {/* 
          PracticeAreasPage ke andar humne pehle hi bg-black hata diya hai, 
          isliye yahan sirf render karna kafi hai.
      */}
      <section className="relative z-10">
        <PracticeAreasPage />
      </section>
    </div>
  );
};
