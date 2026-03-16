import React from "react";
import { notFound } from "next/navigation";
import { getTenantBySlug, getTenantProducts } from "@/lib/tenants";
import { ProductCard } from "@/components/product-card";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function PortalPage({ params }: PageProps) {
    const { slug } = await params;
    const tenant = getTenantBySlug(slug);

    if (!tenant) {
        notFound();
    }

    const products = getTenantProducts(tenant);

    return (
        <div className="min-h-screen bg-brand-black text-white">
            {/* Portal Header */}
            <header className="border-b border-white/10 bg-brand-black/80 backdrop-blur-md sticky top-0 z-40">
                <Container className="h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Simulated generic logo if custom one is missing */}
                        <div className="h-10 w-10 bg-white/5 rounded-none flex items-center justify-center border border-white/10">
                            <Lock className="h-5 w-5 text-brand-teal" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold font-display uppercase tracking-wide">{tenant.name}</h1>
                            <p className="text-xs text-white/60 uppercase tracking-widest">Official Company Store</p>
                        </div>
                    </div>
                    <Link href="/" className="text-sm text-white/60 hover:text-brand-teal flex items-center gap-2 uppercase tracking-wide font-medium transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Main
                    </Link>
                </Container>
            </header>

            <main className="py-12">
                <Container>
                    <div className="mb-12 p-8 rounded-none bg-white/5 border-l-4 border-brand-teal">
                        <h2 className="text-2xl font-bold mb-2 font-display uppercase tracking-wide">Welcome</h2>
                        <p className="text-white/80 leading-relaxed">{tenant.welcomeMessage}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.length > 0 ? (
                            products.map(item => (
                                <ProductCard key={item.id} item={item} />
                            ))
                        ) : (
                            <p className="text-white/40">No products assigned to this portal yet.</p>
                        )}
                    </div>
                </Container>
            </main>
        </div>
    );
}
