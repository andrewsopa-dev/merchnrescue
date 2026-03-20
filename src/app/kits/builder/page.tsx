"use client";

import { useState } from "react";
import { KIT_TEMPLATES, KitTemplate, createEmptyKit, KitConfiguration } from "@/lib/kit-templates";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Package, CalendarRange, Wrench, ArrowRight, Check } from "lucide-react";

const ICON_MAP = {
    Package,
    CalendarRange,
    Wrench
};

export default function KitBuilderPage() {
    const [selectedTemplate, setSelectedTemplate] = useState<KitTemplate | null>(null);
    const [kitConfig, setKitConfig] = useState<KitConfiguration | null>(null);

    const handleTemplateSelect = (template: KitTemplate) => {
        setSelectedTemplate(template);
        setKitConfig(createEmptyKit(template.id));
    };

    const handleBackToTemplates = () => {
        setSelectedTemplate(null);
        setKitConfig(null);
    };

    return (
        <div className="min-h-screen bg-brand-black text-white">
            {/* Background texture */}
            <div
                className="pointer-events-none fixed inset-0 -z-10 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(45deg, #4b5320 0 10px, #363b17 10px 20px, #0a0c0b 20px 30px)",
                    mixBlendMode: "overlay",
                }}
            />
            <Navbar />

            <main className="py-16 md:py-24">
                <Container>
                    {!selectedTemplate ? (
                        <>
                            <SectionHeading
                                kicker="Configure Your Kit"
                                title="Deployable Kit Builder"
                                subtitle="Choose a kit template to get started, then customize products, sizes, and quantities."
                                as="h1"
                            />

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                {KIT_TEMPLATES.map((template) => {
                                    const Icon = ICON_MAP[template.icon as keyof typeof ICON_MAP];

                                    return (
                                        <div key={template.id} onClick={() => handleTemplateSelect(template)} className="cursor-pointer">
                                            <Card className="p-6 flex flex-col hover:bg-white/5 transition-all border border-white/10 rounded-sm hover:border-brand-teal/50 duration-300">
                                                <div className="mb-6 flex items-center justify-between">
                                                    <div className="grid h-12 w-12 place-items-center bg-brand-teal/10 text-brand-teal rounded-sm">
                                                        <Icon className="h-6 w-6" />
                                                    </div>
                                                    <div className="px-3 py-1 bg-white/5 text-xs font-semibold text-white/50 uppercase tracking-widest border border-white/5 rounded-sm">
                                                        {template.tag}
                                                    </div>
                                                </div>

                                                <h3 className="mb-2 text-xl font-bold text-white font-display uppercase tracking-wide">
                                                    {template.name}
                                                </h3>
                                                <div className="mb-4 text-2xl font-bold text-brand-coyote font-display tracking-widest">
                                                    {template.priceRange}{" "}
                                                    <span className="text-sm text-white/40 font-normal tracking-normal font-sans">
                                                        / kit
                                                    </span>
                                                </div>
                                                <p className="mb-8 text-sm flex-grow text-white/60 leading-relaxed border-b border-white/5 pb-6">
                                                    {template.description}
                                                </p>

                                                <ul className="mb-8 space-y-3">
                                                    {template.slots.slice(0, 4).map((slot) => (
                                                        <li key={slot.id} className="flex items-center gap-3 text-sm text-white/80">
                                                            <div className="grid place-items-center h-5 w-5 rounded-full bg-brand-teal/20">
                                                                <Check className="h-3 w-3 text-brand-teal" />
                                                            </div>
                                                            {slot.name}
                                                            {!slot.required && (
                                                                <span className="text-xs text-white/40">(optional)</span>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>

                                                <Button
                                                    className="w-full bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/20 justify-between items-center group rounded-none uppercase tracking-widest text-xs font-bold border border-white/10 py-4"
                                                >
                                                    Start Building
                                                    <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                                </Button>
                                            </Card>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Kit Builder Interface - Placeholder for Phase 2B */}
                            <div className="mb-8 flex items-center gap-4">
                                <Button
                                    onClick={handleBackToTemplates}
                                    className="bg-white/5 hover:bg-white/10 rounded-none border border-white/10"
                                >
                                    ← Back to Templates
                                </Button>
                                <div>
                                    <h1 className="text-3xl font-bold text-white font-display uppercase tracking-wide">
                                        {selectedTemplate.name} Builder
                                    </h1>
                                    <p className="text-sm text-white/60">{selectedTemplate.description}</p>
                                </div>
                            </div>

                            {/* Slot Configuration - Coming in Phase 2B */}
                            <Card className="p-8 border border-white/10">
                                <div className="text-center py-12">
                                    <Package className="h-16 w-16 text-brand-teal/50 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">Kit Builder Coming Soon</h3>
                                    <p className="text-white/60 mb-6">
                                        Phase 2B will add product selection, size breakdown, and customization options.
                                    </p>
                                    <div className="space-y-2 text-left max-w-md mx-auto">
                                        <p className="text-sm text-white/80">
                                            <strong>Template Slots:</strong>
                                        </p>
                                        <ul className="space-y-1">
                                            {selectedTemplate.slots.map((slot) => (
                                                <li key={slot.id} className="text-sm text-white/60 flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-brand-teal/50" />
                                                    {slot.name} {slot.required ? "(required)" : "(optional)"}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </>
                    )}
                </Container>
            </main>

            <Footer />
        </div>
    );
}
