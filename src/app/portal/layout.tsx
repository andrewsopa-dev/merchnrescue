import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Client Portal Access",
    description: "Secure storefronts for authorized enterprise personnel. Enter your organization ID to access your dedicated merch store.",
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
    return children;
}
