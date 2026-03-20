"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe outside of component
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder");

export default function TerminalPage() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Payment succeeded! Thank you for your business.");
    }
    if (query.get("canceled")) {
      setMessage("Payment canceled. You can try again when you're ready.");
    }
  }, []);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, description }),
      });
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url; // Trigger standard Stripe Redirect
      } else {
        alert("Payment Error: " + data.error);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-brand-black px-4 py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-coyote/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md relative z-10">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center border border-brand-teal/20">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-teal">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
             </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-2 font-display uppercase tracking-widest text-center">Secure Terminal</h1>
        <p className="text-white/60 text-sm text-center mb-8">Process a custom payment or invoice via Stripe.</p>
        
        {message ? (
          <div className="p-4 rounded border border-brand-teal/30 bg-brand-teal/10 text-brand-teal text-center mb-6">
            {message}
          </div>
        ) : null}

        <form onSubmit={handleCheckout} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-white/50 mb-2">Payment Amount (USD)</label>
            <div className="relative border border-white/10 rounded-md focus-within:border-brand-teal focus-within:ring-1 focus-within:ring-brand-teal transition-all bg-black/50">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 font-bold">$</span>
              <input 
                type="number" 
                step="0.01" 
                min="1.00"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent border-none px-4 py-3 pl-8 text-white focus:outline-none focus:ring-0"
                placeholder="0.00"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-white/50 mb-2">Description / Invoice #</label>
            <input 
              type="text" 
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
              placeholder="e.g. Invoice #1024"
            />
          </div>
          <p className="text-[10px] text-white/40 text-center uppercase tracking-wider">Payments are processed securely by Stripe.</p>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-brand-teal text-white font-bold uppercase tracking-widest py-4 rounded-md hover:bg-[#156666] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            ) : "Pay with Stripe →"}
          </button>
        </form>
      </div>
    </div>
  );
}
