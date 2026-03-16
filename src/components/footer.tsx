import React from "react";
import { Shield } from "lucide-react";
import Link from "next/link";
import { Container } from "./ui/container";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#0b1110] py-10 text-sm text-white/70">
            <Container>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-coyote" />
                        <span className="font-bold tracking-widest text-white uppercase font-display">Merch & Rescue</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/upload" className="hover:text-white">Upload Artwork</Link>
                        <Link href="/portal" className="hover:text-white">Client Access</Link>
                        <Link href="#" className="hover:text-white">Privacy</Link>
                        <Link href="#" className="hover:text-white">Terms</Link>
                        <Link href="#" className="hover:text-white">Accessibility</Link>
                    </div>
                    <div>© {new Date().getFullYear()} Merch & Rescue</div>
                </div>
            </Container>
        </footer>
    );
}
