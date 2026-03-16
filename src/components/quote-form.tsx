"use client";

import React, { useState } from "react";
import { Shield } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function QuoteForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch("/api/quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to submit");

            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            setStatus("error");
        }
    }

    return (
        <section id="quote" className="py-16 md:py-24">
            <Container>
                <SectionHeading kicker="Secure Comms" title="Request a quote" subtitle="Tell us about the mission. We’ll reply with options and pricing same-day." />
                <Card>
                    {status === "success" ? (
                        <div className="text-center py-12">
                            <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-none bg-brand-teal/20">
                                <Shield className="h-6 w-6 text-brand-teal" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Message Received</h3>
                            <p className="mt-2 text-white/70">Over and out. We'll be in touch shortly.</p>
                            <Button className="mt-6 bg-white/10 hover:bg-white/20" onClick={() => setStatus("idle")}>Send another</Button>
                        </div>
                    ) : (
                        <form
                            className="grid grid-cols-1 gap-4 md:grid-cols-2"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label htmlFor="name" className="mb-1 block text-sm text-white/90">Name</label>
                                <input id="name" name="name" required className="w-full rounded-none border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal uppercase tracking-wide text-sm font-medium" placeholder="Your name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-1 block text-sm text-white/90">Email</label>
                                <input id="email" name="email" type="email" required className="w-full rounded-none border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal uppercase tracking-wide text-sm font-medium" placeholder="you@company.com" />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="artworkUrl" className="mb-1 block text-sm text-white/90">Link to optional artwork (Drive, Dropbox, etc.)</label>
                                <input id="artworkUrl" name="artworkUrl" type="url" className="w-full rounded-none border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal text-sm font-medium" placeholder="https://..." />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="details" className="mb-1 block text-sm text-white/90">Project details</label>
                                <textarea id="details" name="details" rows={4} className="w-full rounded-none border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal text-sm font-medium" placeholder="What are we making? Quantities, sizes, date needed, shipping address…" />
                            </div>
                            <div className="md:col-span-2 flex items-center justify-between">
                                <div className="text-xs text-white/60">No spam. We reply same‑day.</div>
                                <Button type="submit" className="bg-brand-teal text-white hover:bg-[#156666] font-display uppercase tracking-widest rounded-none" disabled={status === "loading"}>
                                    {status === "loading" ? "Transmitting..." : "Send request"}
                                </Button>
                            </div>
                            {status === "error" && (
                                <p role="alert" className="text-red-400 text-sm mt-2 text-center md:col-span-2">Transmission failed. Please try again.</p>
                            )}
                        </form>
                    )}
                </Card>
            </Container>
        </section>
    );
}
