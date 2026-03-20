import React from "react";
import { Metadata } from "next";
import prisma from "@/lib/db";
import { ProductCard } from "@/components/product-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
    title: "Premium Catalog & Blanks",
    description: "Curated premium blanks and goods for your custom merch. We source high-quality apparel built for durability and style.",
};

export default async function ProductsPage() {
    // Fetch directly from SQLite via Prisma
    const categories = await prisma.category.findMany({
        include: {
            products: {
                include: { colors: true },
                orderBy: { sortOrder: 'asc' }
            }
        },
        orderBy: { sortOrder: 'asc' }
    });

    // Map Prisma models to the ProductCard prop interface
    const PRODUCT_CATALOG = categories.map(cat => ({
        group: cat.name,
        items: cat.products.map(p => {
            const availableColors = p.colors.map(c => c.name);
            const colorImages: Record<string, string> = {};
            p.colors.forEach(c => {
                if (c.imageUrl) colorImages[c.name] = c.imageUrl;
            });
            return {
                id: p.id,
                title: p.title,
                brand: p.brand,
                tier: p.tier as "premium" | "core" | "value",
                label: p.label,
                blurb: p.blurb,
                description: p.description || undefined,
                msrp: p.msrp || undefined,
                image: p.image || "",
                imageScale: p.imageScale || undefined,
                tags: [p.brand], // Database tags can be expanded in Phase 3
                availableColors,
                colorImages
            };
        })
    }));

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

                    <div className="space-y-16">
                        {PRODUCT_CATALOG.map((category) => (
                            <section key={category.group} id={category.group.toLowerCase().replace(/\s+/g, '-')}>
                                <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                                    <h2 className="text-2xl font-black text-white font-display uppercase tracking-wider">{category.group}</h2>
                                    <span className="text-sm text-brand-teal font-bold uppercase tracking-wide">{category.items.length} items</span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.items.map((item) => (
                                        <ProductCard key={item.id} item={item} />
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
