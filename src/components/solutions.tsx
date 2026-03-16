import React from "react";
import { Shirt, Shield, Clock, ArrowRight } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Feature = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <Card>
        <div className="flex items-start gap-4">
            <div className="rounded-none bg-brand-teal/10 p-3">
                <Icon className="h-6 w-6 text-brand-teal" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-white font-display tracking-wide uppercase">{title}</h3>
                <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
        </div>
    </Card>
);

export function Solutions() {
    return (
        <section id="solutions" className="py-16 md:py-24">
            <Container>
                <SectionHeading kicker="Capabilities" title="Mission Capabilities" subtitle="Tailored production solutions for any operational requirement." />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <Feature icon={Shirt} title="On‑Demand Production" desc="High-fidelity DTF, Screen Print, and Embroidery. No minimums on extensive catalog items. Scalable from 1 to 1000+ units." />
                    <Feature icon={Shield} title="Unit‑Grade Standards" desc="MIL-SPEC durability checks on every item. Quality Control (QC) that ensures gear survives the field." />
                    <Feature icon={Clock} title="Rapid Deployment" desc="Standard 7-10 day turn around. Expedited 24-48 hour rush production available for mission-critical deadlines." />
                </div>
                <div className="mt-8 flex justify-center">
                    <Button as="link" href="#quote" className="bg-white/5 text-white hover:bg-white/10 border border-white/10 px-8 py-4 text-base font-semibold rounded-none tracking-wide uppercase font-display">
                        Request Capabilities Deck <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </Container>
        </section>
    );
}
