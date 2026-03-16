import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Package, CalendarRange, Wrench, Check, ArrowRight } from "lucide-react";

const KITS = [
    {
        title: "Standard Issue / Onboard",
        price: "$150 - $240",
        description: "Operational readiness for new recruits. Premium hoodie, tee, tumbler, and welcome dossier in a custom deployment box.",
        features: ["Premium Hoodie", "Branded Tumbler", "Welcome Note", "Custom Mailer Box"],
        icon: Package,
        tag: "Corporate",
    },
    {
        title: "Event Resupply",
        price: "$30 - $70",
        description: "High-volume swag logistics for conferences. T-shirts, totes, and decals packed for rapid distribution at mass events.",
        features: ["Softspun Tee", "Tote Bag", "Die-Cut Stickers", "Bulk Packed"],
        icon: CalendarRange,
        tag: "Event",
    },
    {
        title: "Brand Garrison",
        price: "$900+",
        description: "Full-scale merch infrastructure. Mixed apparel run with neck labels and poly-bagging protocols. Retail ready.",
        features: ["Mixed Apparel", "Custom Neck Labels", "Poly Bagging", "Retail Ready"],
        icon: Wrench,
        tag: "Retail / DIY",
    },
];

export function Kits() {
    return (
        <section id="kits" className="py-16 md:py-24 bg-white/5 border-t border-white/5">
            <Container>
                <SectionHeading
                    kicker="Curated Packages"
                    title="Deployable Kits"
                    subtitle="Pre-assembled mission loadouts. Customizable to your specs."
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {KITS.map((kit) => (
                        <Card key={kit.title} className="p-6 flex flex-col hover:bg-white/5 transition-all border border-white/10 rounded-sm hover:border-brand-teal/50 duration-300">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="grid h-12 w-12 place-items-center bg-brand-teal/10 text-brand-teal rounded-sm">
                                    <kit.icon className="h-6 w-6" />
                                </div>
                                <div className="px-3 py-1 bg-white/5 text-xs font-semibold text-white/50 uppercase tracking-widest border border-white/5 rounded-sm">
                                    {kit.tag}
                                </div>
                            </div>

                            <h3 className="mb-2 text-xl font-bold text-white font-display uppercase tracking-wide">{kit.title}</h3>
                            <div className="mb-4 text-2xl font-bold text-brand-coyote font-display tracking-widest">{kit.price} <span className="text-sm text-white/40 font-normal tracking-normal font-sans">/ kit</span></div>
                            <p className="mb-8 text-sm flex-grow text-white/60 leading-relaxed border-b border-white/5 pb-6">{kit.description}</p>

                            <ul className="mb-8 space-y-3">
                                {kit.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
                                        <div className="grid place-items-center h-5 w-5 rounded-full bg-brand-teal/20">
                                            <Check className="h-3 w-3 text-brand-teal" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button as="link" href="/kits/builder" className="w-full bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/20 justify-between items-center group rounded-none uppercase tracking-widest text-xs font-bold border border-white/10 py-4">
                                Build This Kit
                                <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </Button>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
