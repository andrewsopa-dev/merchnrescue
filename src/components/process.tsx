import React from "react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";

const Step = ({ num, title, desc }: { num: string, title: string, desc: string }) => (
    <div className="relative pl-12">
        <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center border border-brand-teal/50 bg-brand-teal/10 text-sm font-bold text-brand-teal font-display">{num}</span>
        <h4 className="text-white font-bold font-display uppercase tracking-wide text-lg">{title}</h4>
        <p className="text-white/60 text-sm mt-2 leading-relaxed">{desc}</p>
    </div>
);

export function Process() {
    return (
        <section id="process" className="py-16 md:py-24 bg-white/[0.02] border-y border-white/5">
            <Container>
                <SectionHeading kicker="How it works" title="Direct action workflow" subtitle="No bureaucracy. Just results." />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <Step num="01" title="Brief & Upload" desc="Send us your artwork or design requirements. We accept all vector formats and provide templates." />
                    <Step num="02" title="Approve Proof" desc="We send a high-fidelity digital proof and quote within 24 hours. You confirm the details." />
                    <Step num="03" title="Execute" desc="We print, perform QC, and ship. Tracking numbers are sent immediately upon label creation." />
                </div>
            </Container>
        </section>
    );
}
