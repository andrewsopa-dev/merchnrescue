import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Deployable Kit Builder",
    description: "Build custom merchandise employee kits. Choose a template, configure products, and deploy drops to your team.",
};

export default function KitBuilderLayout({ children }: { children: React.ReactNode }) {
    return children;
}
