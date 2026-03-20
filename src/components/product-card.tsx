"use client";

import { useState, useEffect } from "react";
import { ProductItem, PALETTE } from "@/lib/catalog";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useCart } from "@/store/cart";

export function ProductCard({ item }: { item: ProductItem }) {
    const [activeImage, setActiveImage] = useState(item.image);
    const [selectedColor, setSelectedColor] = useState(item.availableColors?.[0] || "Default");
    const [selectedSize, setSelectedSize] = useState("L");
    const addItem = useCart(state => state.addItem);

    // Reset active image if item changes
    useEffect(() => {
        setActiveImage(item.image);
    }, [item.image]);

    // Determine border color based on tier
    const tierColor =
        item.tier === "premium" ? "border-coyote/60" :
            item.tier === "core" ? "border-brand-teal/60" : "border-white/10";



    return (
        <Card className={`h-full flex flex-col overflow-hidden bg-brand-black ${tierColor} hover:border-brand-teal transition-all duration-300 group`}>
            {/* Image Area */}
            <div className="relative aspect-square w-full bg-[#f4f4f5] overflow-hidden border-b border-white/10 group-hover:bg-white transition-colors duration-500">
                {activeImage ? (
                    <Image
                        src={activeImage}
                        alt={item.title}
                        fill
                        className="object-contain object-center mix-blend-multiply p-8 transition-all duration-500 ease-in-out group-hover:scale-105"
                        style={{ transform: item.imageScale ? `scale(${item.imageScale})` : undefined }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20">
                        No Image
                    </div>
                )}

            </div>

            <div className="p-4 flex flex-col flex-grow">
                <div className="mb-1 flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold">{item.brand}</span>
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
                            <button
                                key={colorName}
                                className={`w-6 h-6 p-1 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-125 focus:outline-none focus:ring-1 focus:ring-brand-teal`}
                                title={colorName}
                                onClick={() => {
                                    setSelectedColor(colorName);
                                    if (hasImage) setActiveImage(item.colorImages![colorName]);
                                }}
                                onMouseEnter={() => {
                                    if (hasImage) setActiveImage(item.colorImages![colorName]);
                                }}
                                onMouseLeave={() => {
                                    const selectedHasImage = item.colorImages?.[selectedColor];
                                    setActiveImage(selectedHasImage ? item.colorImages![selectedColor] : item.image);
                                }}
                            >
                                <span 
                                    className={`w-3 h-3 block rounded-full border border-white/20 ${hasImage ? 'ring-1 ring-white/50' : ''} ${selectedColor === colorName ? 'scale-125 ring-2 ring-brand-teal' : ''}`}
                                    style={{ backgroundColor: hex }}
                                />
                            </button>
                        );
                    })}
                    {item.availableColors && item.availableColors.length > 8 && (
                        <span className="text-[10px] text-white/50 self-center pl-1">+{item.availableColors.length - 8}</span>
                    )}
                </div>

                <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 rounded bg-white/10 text-[10px] uppercase font-semibold text-white/70 border border-white/10">
                                {tag}
                            </span>
                        ))}
                    </div>
                    
                    <div className="flex gap-2">
                        <select 
                            value={selectedSize} 
                            onChange={e => setSelectedSize(e.target.value)}
                            className="bg-black/50 border border-white/10 text-white text-[10px] rounded px-2 outline-none focus:border-brand-teal uppercase font-bold"
                        >
                            {["S", "M", "L", "XL", "2XL"].map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <button 
                            onClick={() => {
                                const msrpValue = parseFloat((item.msrp || "$20").replace('$', ''));
                                const price = item.pricing?.retailBase || (msrpValue * 0.80);
                                addItem({
                                    id: `${item.id}-${selectedColor}-${selectedSize}`,
                                    productId: item.id,
                                    title: item.title,
                                    brand: item.brand,
                                    color: selectedColor,
                                    size: selectedSize,
                                    price: price,
                                    quantity: 1,
                                    image: activeImage || item.image
                                });
                            }}
                            className="flex-1 bg-white/10 hover:bg-brand-teal text-white text-[10px] font-bold uppercase tracking-widest py-2 rounded transition-all transform active:scale-[0.96]"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    );
}
