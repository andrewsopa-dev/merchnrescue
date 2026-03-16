import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Solutions } from "@/components/solutions";
import { Kits } from "@/components/kits";
import { Process } from "@/components/process";
import { Gallery } from "@/components/gallery";
import { Trust } from "@/components/trust";
import { QuoteForm } from "@/components/quote-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-teal/30">
      {/* Background camo-ish texture */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #4b5320 0 10px, #363b17 10px 20px, #0a0c0b 20px 30px)",
          mixBlendMode: "overlay",
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <Solutions />
        <Kits />
        <Process />
        <Gallery />
        <Trust />
        <QuoteForm />
      </main>

      <Footer />
    </div>
  );
}
