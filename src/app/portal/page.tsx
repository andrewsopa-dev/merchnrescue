"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Lock, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PortalLandingPage() {
    const [code, setCode] = useState("");
    const router = useRouter();

    const handleAccess = (e: React.FormEvent) => {
        e.preventDefault();
        if (code.trim()) {
            router.push(`/portal/${code.trim().toLowerCase()}`);
        }
    };

    return (
        <div className="min-h-screen bg-brand-black text-white flex flex-col relative overflow-hidden font-body">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/90 to-brand-teal/10 pointer-events-none"></div>

            <Container className="flex-grow flex flex-col items-center justify-center relative z-10 py-12">

                <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-full">
                    <Lock className="h-8 w-8 text-brand-teal" />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display uppercase tracking-wider text-center">
                    Client Portal <span className="text-brand-teal">Access</span>
                </h1>

                <p className="text-white/60 mb-10 text-center max-w-md uppercase tracking-wide text-sm">
                    Restricted Area. Authorized Personnel Only. <br />
                    Enter your organization ID to access your dedicated store.
                </p>

                <form onSubmit={handleAccess} className="w-full max-w-md flex flex-col gap-4">
                    <div className="relative">
                        <input
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="ENTER ACCESS ID"
                            className="w-full bg-white/5 border border-white/10 p-4 text-center text-xl font-mono uppercase tracking-widest focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all placeholder:text-white/20"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={!code.trim()}
                        className="w-full bg-brand-teal hover:bg-brand-teal/80 text-white font-bold py-4 uppercase tracking-widest flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed group border border-transparent hover:border-brand-teal/50"
                    >
                        Access Portal <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                {/* Demo Links for Reviewers */}
                <div className="mt-16 pt-8 border-t border-white/5 w-full max-w-md">
                    <p className="text-[10px] text-white/30 uppercase tracking-widest text-center mb-4">Demo Access Points</p>
                    <div className="flex flex-col gap-2">
                        <Link href="/portal/tech-startup" className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group">
                            <span className="text-xs uppercase font-bold text-white/60 group-hover:text-brand-teal">Tech Startup</span>
                            <ShieldCheck className="h-3 w-3 text-white/20 group-hover:text-brand-teal" />
                        </Link>
                        <Link href="/portal/construction-co" className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group">
                            <span className="text-xs uppercase font-bold text-white/60 group-hover:text-coyote">Construction Co.</span>
                            <ShieldCheck className="h-3 w-3 text-white/20 group-hover:text-coyote" />
                        </Link>
                    </div>
                </div>

            </Container>

            <footer className="py-6 text-center text-[10px] uppercase tracking-widest text-white/20">
                Merch & Rescue Systems // Secure Connection
            </footer>
        </div>
    );
}
