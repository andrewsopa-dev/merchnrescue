import React from "react";
import { cn } from "./container";

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn("rounded-none border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm", className)}>
        {children}
    </div>
);
