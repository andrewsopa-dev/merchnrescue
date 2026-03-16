"use client";

import { useState, useEffect } from "react";
import { ProductItem, PALETTE } from "@/lib/catalog";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function ProductCard({ item }: { item: ProductItem }) {
    const [activeImage, setActiveImage] = useState(item.image);

    // Reset active image if item changes
    useEffect(() => {
        setActiveImage(item.image);
    }, [item.image]);

    // Determine border color based on tier
    const tierColor =
        item.tier === "premium" ? "border-coyote/60" :
            item.tier === "core" ? "border-brand-teal/60" : "border-white/10";

    const badgeColor =
        item.tier === "premium" ? "bg-coyote text-white" :
            item.tier === "core" ? "bg-brand-teal text-white" : "bg-white/10 text-white/60";

    const tierLabel =
        item.tier === "premium" ? "Best" :
            item.tier === "core" ? "Better" : "Good";

    return (
        <Card className={`h-full flex flex-col overflow-hidden bg-brand-black ${tierColor} hover:border-brand-teal transition-all duration-300 group`}>
            {/* Image Area */}
            <div className="relative aspect-[4/3] w-full bg-white overflow-hidden">
                {activeImage ? (
                    <Image
                        src={activeImage}
                        alt={item.title}
                        fill
                        unoptimized={activeImage.startsWith("http")}
                        className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                        style={{ transform: item.imageScale ? `scale(${item.imageScale})` : undefined }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20">
                        No Image
                    </div>
                )}
                <div className="absolute top-2 right-2 flex gap-2">
                    <span className={`px-2 py-1 rounded-none text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${badgeColor}`}>
                        {tierLabel}
                    </span>
                </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <div className="mb-1 flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-display">{item.brand}</span>
                    {item.msrp && (() => {
                        // Parse MSRP and calculate 20% discount (MSRP × 0.80)
                        const msrpValue = parseFloat(item.msrp.replace('$', ''));
                        const discountedPrice = msrpValue * 0.80;
                        return (
                            <div className="flex flex-col items-end">
                                <span className="text-sm font-mono text-brand-teal font-bold">
                                    ${discountedPrice.toFixed(2)}
                                </span>
                                <span className="text-[10px] text-white/40 line-through">
                                    {item.msrp}
                                </span>
                            </div>
                        );
                    })()}
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-teal transition-colors leading-tight font-display uppercase tracking-wide">{item.title}</h3>
                <p className="text-xs text-white/60 mb-3 uppercase tracking-wide font-medium">{item.label}</p>

                <p className="text-sm text-white/80 flex-grow mb-4 leading-relaxed line-clamp-3">{item.blurb}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                    {item.availableColors?.slice(0, 8).map((colorName) => {
                        const hex = PALETTE[colorName as keyof typeof PALETTE] || "#ccc"; // Fallback grey
                        const hasImage = item.colorImages?.[colorName];

                        return (
                            <span
                                key={colorName}
                                className={`w-3 h-3 rounded-full border border-white/20 cursor-pointer transition-transform hover:scale-150 ${hasImage ? 'ring-1 ring-white/50' : ''}`}
                                style={{ backgroundColor: hex }}
                                title={colorName}
                                onMouseEnter={() => {
                                    if (hasImage) setActiveImage(item.colorImages![colorName]);
                                }}
                                onMouseLeave={() => {
                                    setActiveImage(item.image);
                                }}
                            />
                        );
                    })}
                    {item.availableColors && item.availableColors.length > 8 && (
                        <span className="text-[10px] text-white/40 self-center">+{item.availableColors.length - 8}</span>
                    )}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-white/5">
                    {item.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded bg-white/5 text-[10px] uppercase font-semibold text-white/50 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Card>
    );
}
