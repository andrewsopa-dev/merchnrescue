import React from "react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Button } from "./ui/button";
import Image from "next/image";

const galleryImages = [
    "/assets/gallery/deployment-1.png",
    "/assets/gallery/deployment-2.png",
    "/assets/gallery/deployment-3.png",
    "/assets/gallery/deployment-4.png",
    "/assets/gallery/deployment-5.png",
    "/assets/gallery/deployment-6.png",
];

export function Gallery() {
    return (
        <section id="gallery" className="border-y border-white/10 bg-brand-black/50 py-16 md:py-24">
            <Container>
                <SectionHeading kicker="Work" title="Recent deployments" subtitle="A lightweight sampling — more on request." />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {galleryImages.map((src, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-none border border-white/10 bg-white">
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src={src}
                                    alt={`Recent deployment ${i + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 grid place-items-center bg-black/0 opacity-0 transition group-hover:bg-black/50 group-hover:opacity-100">
                                <Button className="border border-white/15 bg-white/10 hover:bg-white/20 text-xs text-white">View</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
