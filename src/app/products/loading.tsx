import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Loading() {
    return (
        <div className="min-h-screen bg-brand-black text-white">
            <div
                className="pointer-events-none fixed inset-0 -z-10 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(45deg, #4b5320 0 10px, #363b17 10px 20px, #0a0c0b 20px 30px)",
                    mixBlendMode: "overlay",
                }}
            />
            <Navbar />

            <main className="py-16 md:py-24">
                <Container>
                    <SectionHeading
                        kicker="Catalog"
                        title="Premium Blanks & Goods"
                        subtitle="Curated for quality and printability. If you don't see it, we can source it."
                        as="h1"
                    />

                    <div className="space-y-16 animate-pulse">
                        {[1, 2].map((i) => (
                            <section key={i}>
                                <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                                    <div className="h-8 w-48 bg-white/10 rounded-sm"></div>
                                    <div className="h-4 w-16 bg-brand-teal/20 rounded-sm"></div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[1, 2, 3, 4, 5, 6].map((j) => (
                                        <div key={j} className="h-[450px] bg-white/5 border border-white/5 flex flex-col">
                                            <div className="w-full aspect-[4/3] bg-white/10 relative">
                                                <div className="absolute top-2 right-2 h-4 w-12 bg-white/20"></div>
                                            </div>
                                            <div className="p-4 flex flex-col flex-grow space-y-3">
                                                <div className="h-3 w-1/4 bg-white/10"></div>
                                                <div className="h-6 w-3/4 bg-white/20"></div>
                                                <div className="h-3 w-1/2 bg-white/10"></div>
                                                <div className="flex-grow space-y-2 pt-2">
                                                    <div className="h-2 w-full bg-white/5"></div>
                                                    <div className="h-2 w-full bg-white/5"></div>
                                                    <div className="h-2 w-2/3 bg-white/5"></div>
                                                </div>
                                                <div className="flex gap-2 pt-4 border-t border-white/5">
                                                    <div className="h-8 w-1/3 bg-white/10"></div>
                                                    <div className="h-8 flex-1 bg-white/10"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    );
}
