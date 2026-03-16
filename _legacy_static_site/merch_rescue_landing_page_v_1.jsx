import React from "react";
import { Shirt, Truck, Shield, Clock, ArrowRight, Star, HeartHandshake, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

// Lightweight utility components
const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Button = ({ children, className = "", as = "button", href = "#" }) => {
  const Comp = as === "a" ? "a" : "button";
  return (
    <Comp
      href={as === "a" ? href : undefined}
      className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    >
      {children}
    </Comp>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur ${className}`}>{children}</div>
);

const SectionHeading = ({ kicker, title, subtitle }) => (
  <div className="mb-10 text-center">
    {kicker && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">{kicker}</p>}
    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-base text-white/70">{subtitle}</p>}
  </div>
);

const Feature = ({ icon: Icon, title, desc }) => (
  <Card>
    <div className="flex items-start gap-4">
      <div className="rounded-xl bg-emerald-400/10 p-3">
        <Icon className="h-6 w-6 text-emerald-300" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{desc}</p>
      </div>
    </div>
  </Card>
);

const Step = ({ num, title, desc }) => (
  <div className="relative pl-10">
    <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-emerald-300">{num}</span>
    <h4 className="text-white font-semibold">{title}</h4>
    <p className="text-white/70 text-sm mt-1">{desc}</p>
  </div>
);

export default function MerchAndRescue() {
  return (
    <div className="min-h-screen bg-[#0b1110] text-white">
      {/* Background camo-ish texture */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #8eb69b 0 10px, #526d5f 10px 20px, #101614 20px 30px)",
          mixBlendMode: "overlay",
        }}
      />

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b1110]/70 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400/15">
                <Shield className="h-5 w-5 text-emerald-300" />
              </div>
              <span className="font-black tracking-[0.18em] text-sm sm:text-base">MERCH & RESCUE</span>
            </a>
            <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
              <a className="hover:text-white" href="#solutions">Solutions</a>
              <a className="hover:text-white" href="#kits">Kits</a>
              <a className="hover:text-white" href="#process">Process</a>
              <a className="hover:text-white" href="#gallery">Gallery</a>
              <a className="hover:text-white" href="#contact">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button as="a" href="#quote" className="bg-emerald-400 text-[#0b1110] hover:bg-emerald-300">Get a Quote <ArrowRight className="h-4 w-4"/></Button>
            </div>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <Container>
          <div className="grid min-h-[60vh] grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">Built for the mission</p>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                Premium on‑demand merch
                <span className="block text-emerald-300">with boots‑on‑the‑ground grit.</span>
              </h1>
              <p className="mt-4 max-w-xl text-white/70">
                We design, print, and ship military‑inspired apparel and custom kits at speed. From unit morale drops to national campaigns, we keep quality high and logistics tight.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button as="a" href="#quote" className="bg-emerald-400 text-[#0b1110] hover:bg-emerald-300">Start a Project</Button>
                <Button as="a" href="#kits" className="border border-white/15 bg-white/5 hover:bg-white/10">Shop Get Pressed Packs</Button>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
                <Star className="h-4 w-4"/>
                <span>Unit‑grade quality • Fast turnarounds • Transparent pricing</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="relative">
                <div className="aspect-[4/3] w-full rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-950 to-emerald-900 p-1 shadow-2xl">
                  <div className="relative h-full w-full rounded-3xl bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.06),transparent_40%)]">
                    <div className="absolute inset-0 grid place-items-center p-6 text-center">
                      <div>
                        <Shirt className="mx-auto h-12 w-12 text-emerald-300" />
                        <p className="mt-4 text-sm text-white/80">Real prints. Real fast. DTF, screen, patches, laser, and more — all in‑house.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 shadow md:block">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-emerald-300"/>
                    <span>Nationwide shipping. PO‑friendly.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="py-16 md:py-24">
        <Container>
          <SectionHeading kicker="Capabilities" title="Solutions that scale" subtitle="Choose the path that matches your mission profile." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Feature icon={Shirt} title="On‑Demand Print Ops" desc="DTF, screen print, embroidery, laser patches, BOPP labels — precision gear for tight timelines." />
            <Feature icon={Shield} title="Unit‑Grade Quality" desc="MIL‑inspired durability and QC — so your merch survives the field, not just the photo." />
            <Feature icon={Clock} title="Rapid Turnaround" desc="Fast proofs, faster production. Rush programs available when the clock is ticking." />
          </div>
          <div className="mt-8 flex justify-center">
            <Button as="a" href="#quote" className="bg-white text-[#0b1110] hover:bg-white/90">Get a custom quote <ArrowRight className="h-4 w-4"/></Button>
          </div>
        </Container>
      </section>

      {/* KITS */}
      <section id="kits" className="border-y border-white/10 bg-white/[0.02] py-16 md:py-24">
        <Container>
          <SectionHeading kicker="DIY Packs" title="Get Pressed™ Kits" subtitle="Party‑in‑a‑box kits: pick your theme, press at home, look squared away." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {["Birthday Raid", "Bachelorette Op", "Patriot Set"].map((name, i) => (
              <Card key={i}>
                <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-[#1a2a27] to-[#0f1816]" />
                <h3 className="mt-4 text-lg font-semibold text-white">{name}</h3>
                <p className="mt-1 text-sm text-white/70">Includes themed transfers, blanks, and instructions. Refill packs available.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-white/70 text-sm">Starting at $59</span>
                  <Button as="a" href="#quote" className="border border-white/15 bg-white/5 hover:bg-white/10 text-xs">Request</Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16 md:py-24">
        <Container>
          <SectionHeading kicker="How it works" title="Simple, operator‑proof workflow" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Step num={1} title="Brief & Upload" desc="Tell us what you need and drop your art. No art? We’ll design it." />
            <Step num={2} title="Approve Proof" desc="We send a clean proof + quote. You confirm. We spin up the presses." />
            <Step num={3} title="Print & Ship" desc="Tracked, insured shipping nationwide. Need kitting? We’ll assemble it." />
          </div>
        </Container>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="border-y border-white/10 bg-white/[0.02] py-16 md:py-24">
        <Container>
          <SectionHeading kicker="Work" title="Recent deployments" subtitle="A lightweight sampling — more on request." />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#101614]">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-950 to-emerald-900" />
                <div className="absolute inset-0 grid place-items-center bg-black/0 opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100">
                  <Button className="border border-white/15 bg-white/10 hover:bg-white/20 text-xs">View</Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="py-16 md:py-24">
        <Container>
          <SectionHeading kicker="Get started" title="Request a quote" subtitle="Give us the basics — we’ll reply same‑day with options and pricing." />
          <Card>
            <form
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget));
                alert(`Thanks! We'll follow up ASAP.\n\n${JSON.stringify(data, null, 2)}`);
              }}
            >
              <div>
                <label className="mb-1 block text-sm text-white/80">Name</label>
                <input name="name" required className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Email</label>
                <input name="email" type="email" required className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="you@company.com" />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm text-white/80">Project details</label>
                <textarea name="details" rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="What are we making? Quantities, sizes, date needed, shipping address…" />
              </div>
              <div className="md:col-span-2 flex items-center justify-between">
                <div className="text-xs text-white/60">No spam. We reply same‑day.</div>
                <Button className="bg-emerald-400 text-[#0b1110] hover:bg-emerald-300">Send request</Button>
              </div>
            </form>
          </Card>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10 bg-[#0c1312] py-14">
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">Questions or rush job?</h3>
              <p className="mt-2 text-white/70">We can spin up quickly. If you have artwork ready, mention it in your message.</p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <a href="tel:14803091335" className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-white/80 hover:bg-white/10"><Phone className="h-4 w-4 text-emerald-300"/> 480‑309‑1335</a>
              <a href="mailto:hello@merchandrescue.com" className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-white/80 hover:bg-white/10"><Mail className="h-4 w-4 text-emerald-300"/> Email</a>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-white/80"><MapPin className="h-4 w-4 text-emerald-300"/> Mesa, AZ</div>
            </div>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#0b1110] py-10 text-sm text-white/70">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-emerald-300"/>
              <span className="font-semibold tracking-widest">MERCH & RESCUE</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Accessibility</a>
            </div>
            <div>© {new Date().getFullYear()} Merch & Rescue</div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
