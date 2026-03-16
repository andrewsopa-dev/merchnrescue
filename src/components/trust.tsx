import React from "react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Card } from "./ui/card";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const STATS = [
    { label: "Veteran Owned", value: "100%", sub: "Service-Disabled" },
    { label: "On-Time Fulfillment", value: "99.9%", sub: "Mission Critical" },
    { label: "Custom Projects", value: "500+", sub: "Delivered" },
];

const SECTORS = [
    "Law Enforcement & SWAT",
    "First Responders",
    "Corporate Security",
    "CrossFit & Fitness",
    "Veteran Non-Profits",
    "Tactical Brands"
];

const TESTIMONIALS = [
    {
        quote: "No BS. We needed 300 shirts for a muster in 4 days. Merch & Rescue delivered early.",
        author: "Team Leader",
        role: "Regional SWAT Team"
    },
    {
        quote: "Finally a vendor that speaks our language. The quality is tier-one and they don't miss deadlines.",
        author: "Director of Ops",
        role: "Security Contractor"
    }
];

export function Trust() {
    return (
        <section className="py-20 md:py-28 bg-brand-black border-y border-white/5">
            <Container>
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {STATS.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6 border-b border-white/10 bg-transparent rounded-none">
                            <span className="text-4xl md:text-5xl font-black text-brand-teal font-display tracking-tight mb-2">{stat.value}</span>
                            <span className="text-white font-bold uppercase tracking-widest text-sm mb-1">{stat.label}</span>
                            <span className="text-white/40 text-xs uppercase tracking-wide">{stat.sub}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Who We Serve */}
                    <div>
                        <SectionHeading
                            kicker="Mission Partners"
                            title="Who we serve"
                            subtitle="Trusted by heavy-hitters across multiple industries."
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {SECTORS.map((sector) => (
                                <div key={sector} className="flex items-center gap-3 p-3 border-l-2 border-brand-teal/30 bg-white/[0.02]">
                                    <ShieldCheck className="h-5 w-5 text-brand-teal" />
                                    <span className="text-white/80 font-medium text-sm tracking-wide uppercase">{sector}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                            <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center">
                                <Zap className="h-5 w-5 text-coyote" />
                            </div>
                            <p className="text-sm text-white/60 leading-relaxed">
                                <strong className="text-white block uppercase tracking-wide text-xs mb-0.5">Rapid Response Capable</strong>
                                Need a rush order for an upcoming event? We prioritize urgent operational needs.
                            </p>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div>
                        <SectionHeading
                            kicker="Field Reports"
                            title="Comms check"
                            subtitle="Feedback from downrange."
                        />
                        <div className="mt-8 space-y-6">
                            {TESTIMONIALS.map((t, i) => (
                                <Card key={i} className="p-8 bg-brand-black border border-white/10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <CheckCircle2 className="h-16 w-16 text-white" />
                                    </div>
                                    <p className="text-lg text-white/90 italic leading-relaxed relative z-10">"{t.quote}"</p>
                                    <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                                        <div>
                                            <div className="text-brand-teal font-bold uppercase tracking-widest text-xs font-display">{t.author}</div>
                                            <div className="text-white/40 text-xs uppercase tracking-wide">{t.role}</div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
