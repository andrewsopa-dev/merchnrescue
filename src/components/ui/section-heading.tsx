import React from "react";
import { cn } from "./container"; // Reusing cn

type SectionHeadingProps = {
    kicker?: string;
    title: React.ReactNode | string;
    subtitle?: React.ReactNode | string;
    className?: string;
    as?: "h1" | "h2" | "h3";
};

export const SectionHeading = ({ kicker, title, subtitle, className, as: Component = "h2" }: SectionHeadingProps) => (
    <div className={cn("mb-10 text-center", className)}>
        {kicker && <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal font-display">{kicker}</p>}
        <Component className="text-3xl font-black tracking-tight text-white sm:text-4xl font-display uppercase">{title}</Component>
        {subtitle && <p className="mt-3 text-base text-white/70">{subtitle}</p>}
    </div>
);
