import React from "react";
import Link from "next/link";
import { cn } from "./container"; // Reusing cn from container or checking if I should put it in lib/utils

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    as?: "button" | "a" | "link";
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
};

export const Button = ({ children, className, as = "button", href, onClick, type = "button", disabled }: ButtonProps) => {
    const baseClasses = "inline-flex items-center gap-2 rounded-none px-6 py-3 text-sm font-bold shadow-sm transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-display uppercase tracking-widest";

    if (as === "link" && href) {
        return (
            <Link href={href} className={cn(baseClasses, className)}>
                {children}
            </Link>
        );
    }

    if (as === "a" && href) {
        return (
            <a href={href} className={cn(baseClasses, className)}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={cn(baseClasses, className)} disabled={disabled}>
            {children}
        </button>
    );
};
