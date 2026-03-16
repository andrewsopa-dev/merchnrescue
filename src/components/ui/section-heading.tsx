import React from "react";
import { cn } from "./container"; // Reusing cn

type SectionHeadingProps = {
    kicker?: string;
    title: string;
    subtitle?: string;
    className?: string;
};

export const SectionHeading = ({ kicker, title, subtitle, className }: SectionHeadingProps) => (
    <div className={cn("mb-10 text-center", className)}>
        {kicker && <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal font-display">{kicker}</p>}
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl font-display uppercase">{title}</h2>
        {subtitle && <p className="mt-3 text-base text-white/70">{subtitle}</p>}
    </div>
);
