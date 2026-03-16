"use client";

import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-black/80 backdrop-blur-md">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/assets/logo.png" alt="Merch & Rescue" width={32} height={32} className="h-8 w-auto rounded-md" />
                        <span className="font-display font-bold tracking-widest text-lg text-white uppercase">Merch & Rescue</span>
                    </Link>

                    <nav className="hidden items-center gap-6 text-sm font-medium tracking-wide text-white/70 md:flex">
                        <Link className="hover:text-brand-teal transition-colors" href="/products">Products</Link>
                        <Link className="hover:text-brand-teal transition-colors" href="/#solutions">Solutions</Link>
                        <Link className="hover:text-brand-teal transition-colors" href="/#kits">Kits</Link>
                        <Link className="hover:text-brand-teal transition-colors" href="/#process">Process</Link>
                        <Link className="hover:text-brand-teal transition-colors" href="/#gallery">Gallery</Link>
                        <Link className="hover:text-brand-teal transition-colors" href="/upload">Upload</Link>
                        <Link className="hover:text-brand-teal transition-colors" href="/#contact">Contact</Link>
                    </nav>

                    <div className="hidden md:flex items-center gap-3">
                        <Button as="link" href="#quote" className="bg-brand-teal text-white hover:bg-[#156666] pointer-events-auto font-display tracking-wide uppercase">
                            Get a Quote <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>

                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden bg-brand-black border-b border-white/10"
                    >
                        <Container className="py-4 flex flex-col gap-4">
                            <Link className="text-white/70 hover:text-brand-teal font-medium" href="#solutions" onClick={() => setIsOpen(false)}>Solutions</Link>
                            <Link className="text-white/70 hover:text-brand-teal font-medium" href="#kits" onClick={() => setIsOpen(false)}>Kits</Link>
                            <Link className="text-white/70 hover:text-brand-teal font-medium" href="#process" onClick={() => setIsOpen(false)}>Process</Link>
                            <Link className="text-white/70 hover:text-brand-teal font-medium" href="#gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
                            <Link className="text-white/70 hover:text-brand-teal font-medium" href="/upload" onClick={() => setIsOpen(false)}>Upload</Link>
                            <Link className="text-white/70 hover:text-brand-teal font-medium" href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
                            <Button as="link" href="#quote" className="bg-brand-teal text-white font-display tracking-wide uppercase justify-center w-full" onClick={() => setIsOpen(false)}>
                                Get a Quote
                            </Button>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
