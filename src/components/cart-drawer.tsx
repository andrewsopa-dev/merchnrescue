"use client";

import { useCart } from "@/store/cart";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function CartDrawer() {
    const { items, isDrawerOpen, toggleDrawer, setDrawerOpen, removeItem, updateQuantity, getCartTotal } = useCart();
    const [mounted, setMounted] = useState(false);

    // Escape hatch to prevent hydration mismatch with Zustand persist
    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle checkout redirect
    const handleCheckout = async () => {
        if (items.length === 0) return;
        
        try {
            // Map the cart items to a descriptive string for the basic Stripe terminal
            // Alternatively, in a full setup, we pass the line_items directly
            const description = `Merch & Rescue Order (${items.length} items)`;
            const amount = getCartTotal();

            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount, description, cartItems: items }), // Pass items for line_items generation
            });
            const data = await res.json();
            
            if (data.url) {
                window.location.href = data.url;
            } else {
                alert("Payment Error: " + data.error);
            }
        } catch (err) {
            console.error(err);
        }
    };

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isDrawerOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setDrawerOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-black border-l border-white/10 shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <h2 className="text-xl font-display font-bold uppercase tracking-widest text-white flex items-center gap-3">
                                <ShoppingCart className="h-5 w-5 text-brand-teal" />
                                Your Cart
                            </h2>
                            <button
                                onClick={toggleDrawer}
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-12 px-6">
                                    <div className="h-24 w-24 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
                                        <ShoppingCart className="h-10 w-10 text-white/20" />
                                    </div>
                                    <h3 className="font-display uppercase tracking-widest text-xl font-bold text-white mb-2">Cart is Empty</h3>
                                    <p className="text-sm text-white/40 mb-8 max-w-[200px]">Looks like you haven't added any gear to your loadout yet.</p>
                                    <button 
                                        onClick={() => setDrawerOpen(false)}
                                        className="bg-brand-teal text-[#111] hover:bg-[#156666] hover:text-white px-8 py-3 text-xs uppercase tracking-widest font-bold transition-all transform active:scale-95"
                                    >
                                        Start Building
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group">
                                        <div className="relative h-20 w-20 bg-[#f4f4f5] rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-contain p-2 mix-blend-multiply"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-white leading-tight">{item.title}</h3>
                                                    <p className="text-xs text-white/50 mt-1">{item.color} • Size: {item.size}</p>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-white/20 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center gap-3 bg-black/40 rounded-full border border-white/10 px-1">
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                        className="p-1 text-white/50 hover:text-white disabled:opacity-50"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </button>
                                                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 text-white/50 hover:text-white"
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </button>
                                                </div>
                                                <p className="font-mono text-brand-teal font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-white/10 bg-black/20">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-white/70 uppercase tracking-widest text-xs font-bold">Subtotal</span>
                                    <span className="text-2xl font-mono text-white font-bold">${getCartTotal().toFixed(2)}</span>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-brand-teal text-white font-bold uppercase tracking-widest py-4 rounded-md hover:bg-[#156666] transition-all transform active:scale-[0.98]"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
