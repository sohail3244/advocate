"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const footerLinks = [
    { name: "Practice Areas", href: "/practice-area" },
    { name: "About", href: "/about" },
  ];

  return (
    <footer className="relative bg-black text-white pt-16 pb-8 px-6 overflow-hidden border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-100 h-100 bg-zinc-900/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content: Justified Space Evenly */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-12 lg:gap-8 mb-16 text-center md:text-left">
          
          {/* 1. Brand Identity */}
          <div className="flex-1 min-w-62.5 space-y-6">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="bg-white p-2 rounded-lg shrink-0">
                <Scale className="h-5 w-5 text-black" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">
                Justice & Co.
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mx-auto md:mx-0 max-w-xs italic">
              Providing sophisticated legal counsel with a focus on integrity
              and results. Based in Jaipur.
            </p>
            <div className="flex justify-center md:justify-start gap-4">

  {/* LinkedIn */}
  <motion.a
    whileHover={{ y: -3, scale: 1.1 }}
    href="https://www.linkedin.com/in/your-username"
    target="_blank"
    className="p-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
  >
    <FaLinkedin size={18} />
  </motion.a>

  {/* Instagram */}
  <motion.a
    whileHover={{ y: -3, scale: 1.1 }}
    href="https://instagram.com/your-username"
    target="_blank"
    className="p-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
  >
    <FaInstagram size={18} />
  </motion.a>

  {/* WhatsApp (AUTO MESSAGE) */}
  <motion.a
    whileHover={{ y: -3, scale: 1.1 }}
    href={`https://wa.me/917240737530?text=${encodeURIComponent(
      "Hello, I want to book a consultation."
    )}`}
    target="_blank"
    className="p-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
  >
    <FaWhatsapp size={18} />
  </motion.a>

</div>
          </div>

          {/* 2. Quick Navigation */}
          <div className="flex-1 min-w-37.5">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Details */}
          <div className="flex-1 min-w-70">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 mb-8">
              Contact
            </h4>
            <ul className="space-y-5 inline-block text-left">
              <li className="flex items-start gap-4 group">
                <MapPin className="text-white/40 group-hover:text-white transition-colors mt-1 shrink-0" size={18} />
                <span className="text-zinc-500 group-hover:text-zinc-300 text-sm transition-colors">
                  C-Scheme, District Court Road,
                  <br /> Jaipur, Rajasthan 302001
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="text-white/40 group-hover:text-white transition-colors shrink-0" size={18} />
                <span className="text-zinc-500 group-hover:text-zinc-300 text-sm transition-colors">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="text-white/40 group-hover:text-white transition-colors shrink-0" size={18} />
                <span className="text-zinc-500 group-hover:text-zinc-300 text-sm transition-colors underline underline-offset-4 decoration-white/20">
                  counsel@justicejaipur.com
                </span>
              </li>
            </ul>
          </div>
        </div>

       
      </div>
    </footer>
  );
}