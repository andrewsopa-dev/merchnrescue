"use client";

import React from "react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { BadgeCheck, Clock, ShieldCheck } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-24 overflow-hidden">
            {/* Background Glows aimed to match the 'console' feel */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none opacity-40 mix-blend-screen" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-od-green/20 rounded-full blur-[120px] translate-x-1/2 pointer-events-none opacity-40 mix-blend-screen" />

            <Container className="relative z-10 text-center">
                {/* Tagline Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-3 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-white/50 mb-8 uppercase font-display"
                >
                    <span>Design</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-alert-red" />
                    <span>Production</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-alert-red" />
                    <span>Fulfillment</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-alert-red" />
                    <span>E-Commerce</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tight uppercase font-display mb-8"
                >
                    Elite Merch Production.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-coyote">Mission Ready.</span>
                </motion.h1>

                {/* Subhead */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed mb-10 font-medium"
                >
                    We design, print, and ship custom apparel and gear for brands, tactical teams, and events. <span className="text-white font-bold">No fluff. 100% Veteran Owned.</span>
                </motion.p>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <Button
                        as="link"
                        href="#quote"
                        className="bg-brand-teal hover:bg-[#156666] text-white font-bold h-14 px-10 rounded-none text-lg shadow-[0_0_20px_rgba(26,127,127,0.2)] transition-all hover:shadow-[0_0_30px_rgba(26,127,127,0.4)] font-display tracking-widest uppercase border-b-4 border-[#125555]"
                    >
                        Request Quote
                    </Button>
                    <Button
                        as="link"
                        href="/upload"
                        className="bg-transparent hover:bg-white/5 text-white font-medium h-14 px-10 rounded-lg text-base border border-white/10 uppercase tracking-widest"
                    >
                        Upload Artwork
                    </Button>
                </motion.div>

                {/* Trust Ticker */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="inline-flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4 px-8 border-y border-white/5 bg-white/[0.02]"
                >
                    <div className="flex items-center gap-2 text-white/50 text-xs md:text-sm font-bold uppercase tracking-widest">
                        <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-brand-teal" />
                        <span>Veteran Owned</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/50 text-xs md:text-sm font-bold uppercase tracking-widest">
                        <Clock className="h-4 w-4 md:h-5 md:w-5 text-coyote" />
                        <span>7-Day Standard Turn</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/50 text-xs md:text-sm font-bold uppercase tracking-widest">
                        <BadgeCheck className="h-4 w-4 md:h-5 md:w-5 text-brand-teal" />
                        <span>Made in USA</span>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
