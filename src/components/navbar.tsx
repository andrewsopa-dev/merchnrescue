"use client";

import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useCart } from "@/store/cart";
import { ArrowRight, Menu, X, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

function CartBadge() {
    const [mounted, setMounted] = useState(false);
    const count = useCart(state => state.getCartCount());
    
    React.useEffect(() => setMounted(true), []);
    
    if (!mounted || count === 0) return null;
    return (
        <span className="absolute -top-1 -right-1 bg-brand-teal text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
            {count}
        </span>
    );
}

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();

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
                        <Link className="hover:text-brand-teal transition-colors" href="/terminal">Terminal</Link>
                        <Link className="hover:text-brand-teal transition-colors" href="/#contact">Contact</Link>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        {session ? (
                           <div className="flex items-center gap-4 border-r border-white/10 pr-4 mr-2">
                               <Link href="/dashboard" className="text-sm font-bold tracking-widest text-brand-teal hover:text-white transition-colors uppercase flex items-center gap-2 group">
                                   {session.user?.image ? (
                                       <Image src={session.user.image} alt={session.user?.name || "User"} width={24} height={24} className="rounded-full border border-brand-teal group-hover:border-white transition-colors" unoptimized />
                                   ) : (
                                       <span className="h-6 w-6 rounded-full bg-brand-teal text-[#111] flex items-center justify-center text-xs group-hover:bg-white transition-colors">
                                           {session.user?.name?.charAt(0) || session.user?.email?.charAt(0) || "U"}
                                       </span>
                                   )}
                                   Dashboard
                               </Link>
                               <button onClick={() => signOut()} className="text-[10px] font-bold tracking-widest text-white/30 hover:text-red-400 transition-colors uppercase">
                                   Sign Out
                               </button>
                           </div>
                        ) : (
                            <button onClick={() => signIn("github")} className="text-sm font-bold tracking-widest text-white/50 hover:text-white transition-colors uppercase border-r border-white/10 pr-4 mr-2">
                                Operator Login
                            </button>
                        )}
                        {/* Cart Trigger */}
                        <button 
                            onClick={useCart.getState().toggleDrawer} 
                            className="relative p-2 text-white hover:text-brand-teal transition-colors"
                            aria-label="Open Cart"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            <CartBadge />
                        </button>
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
