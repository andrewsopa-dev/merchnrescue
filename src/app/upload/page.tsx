import { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
    title: "Upload Artwork",
    description: "Send us your files securely. Review our preflight checklist for optimal high-resolution print results.",
};
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud, CheckCircle, FileWarning, Mail } from "lucide-react";
import Link from "next/link";

export default function UploadPage() {
    return (
        <div className="min-h-screen bg-brand-black text-white pt-24 pb-12 selection:bg-brand-teal/30">
            {/* Background camo-ish texture */}
            <div
                className="pointer-events-none fixed inset-0 -z-10 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(45deg, #4b5320 0 10px, #363b17 10px 20px, #0a0c0b 20px 30px)",
                    mixBlendMode: "overlay",
                }}
            />
            <Container>
                <SectionHeading
                    kicker="Production Ready"
                    title="Upload Artwork"
                    subtitle="Send us your files securely. Please review the preflight checklist below."
                    as="h1"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                    <Card className="p-8 backdrop-blur-sm bg-white/5 border-white/10">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 font-display uppercase tracking-wide">
                            <FileWarning className="text-brand-teal" /> Preflight Checklist
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-brand-teal shrink-0" />
                                <span className="text-white/80"><strong>Vector Formats Preferred:</strong> .AI, .EPS, .PDF, or .SVG are best for print.</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-brand-teal shrink-0" />
                                <span className="text-white/80"><strong>High-Res Raster:</strong> If using .PNG or .JPG, ensure 300 DPI at actual print size.</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-brand-teal shrink-0" />
                                <span className="text-white/80"><strong>Convert Fonts:</strong> Convert all text to outlines/shapes to prevent missing font issues.</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-brand-teal shrink-0" />
                                <span className="text-white/80"><strong>Transparent Backgrounds:</strong> Remove background colors unless they are part of the design.</span>
                            </li>
                        </ul>
                    </Card>

                    <Card className="p-8 flex flex-col justify-center items-center text-center space-y-6 backdrop-blur-sm bg-white/5 border-white/10">
                        <div className="h-20 w-20 rounded-full bg-brand-teal/20 flex items-center justify-center ring-1 ring-brand-teal/50">
                            <UploadCloud className="h-10 w-10 text-brand-teal" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-display uppercase tracking-wide">Ready to Send?</h3>
                            <p className="text-white/60 mt-2 max-w-sm mx-auto">Use our secure upload portal to drag and drop your files directly to our production team.</p>
                        </div>

                        <Button as="link" href="https://dropbox.com/request/placeholder" className="bg-brand-teal text-white hover:bg-[#156666] w-full max-w-xs h-14 text-lg font-display uppercase tracking-widest shadow-[0_0_20px_rgba(26,127,127,0.3)] hover:shadow-[0_0_30px_rgba(26,127,127,0.5)] border-b-4 border-[#125555] rounded-none justify-center">
                            Launch Upload Portal
                        </Button>

                        <div className="text-sm text-white/40 pt-4 border-t border-white/10 w-full">
                            Having trouble? <Link href="mailto:art@merchandrescue.com" className="text-brand-teal hover:underline flex items-center justify-center gap-1 inline-flex"><Mail className="h-3 w-3" /> Email us directly</Link>
                        </div>
                    </Card>
                </div>
            </Container>
        </div>
    );
}
