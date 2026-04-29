'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion } from 'framer-motion';

export default function PublicLayout({ children }) {
    return (
        <div className="relative min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black">
            
            {/* --- UNIVERSAL BACKGROUND LAYER --- */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0 bg-no-repeat"
                    style={{ 
                        backgroundImage: `url('https://i.pinimg.com/736x/47/87/29/47872959c9fa22529e61f91baedbf8f7.jpg')`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        // Grayscale ko 0.2 kar diya taaki thoda color dikhe, aur brightness default 1 rakhi hai
                        filter: 'grayscale(0.2) brightness(1)', 
                    }}
                />
                
                {/* 
                   --- OVERLAYS MODIFICATION ---
                   In overlays ki opacity (from-black/80) ko kam kar diya hai 
                   taaki peeche ki image black na dikhe.
                */}
                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/40" />
                
                {/* Side overlay ko aap chahe toh puri tarah remove kar sakte hain ya bohot light rakh sakte hain */}
                <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-black/20 hidden md:block" />
            </div>

            {/* --- CONTENT LAYER --- */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <main className="grow">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
}