import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "./ui/container";

export function Contact() {
    return (
        <section id="contact" className="border-t border-white/10 bg-brand-black py-14">
            <Container>
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <div>
                        <h3 className="text-2xl font-bold text-white">Questions or rush job?</h3>
                        <p className="mt-2 text-white/70">We can spin up quickly. If you have artwork ready, mention it in your message.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <a href="tel:14803091335" className="flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 p-3 text-white/80 hover:bg-white/10 hover:text-white transition-colors group"><Phone className="h-4 w-4 text-brand-teal group-hover:text-white transition-colors" /> <span className="font-mono text-xs">480‑309‑1335</span></a>
                        <a href="mailto:hello@merchandrescue.com" className="flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 p-3 text-white/80 hover:bg-white/10 hover:text-white transition-colors group"><Mail className="h-4 w-4 text-brand-teal group-hover:text-white transition-colors" /> <span className="text-xs uppercase tracking-wider">Email</span></a>
                        <div className="flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 p-3 text-white/80"><MapPin className="h-4 w-4 text-coyote" /> <span className="text-xs uppercase tracking-wider">Mesa, AZ</span></div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
