import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://merchnrescue.com"), // Update this with actual production URL
  title: {
    default: "Merch & Rescue — Full-Service Merch Production & Fulfillment",
    template: "%s | Merch & Rescue",
  },
  description:
    "End-to-end merch production: design, printing, fulfillment, e-commerce, and kitting. From local shops to enterprise programs. Mission-ready.",
  keywords: [
    "Merch Production",
    "Screen Printing",
    "Fulfillment Services",
    "Corporate Kitting",
    "Custom Apparel",
    "DTF Transfers",
    "Event Merchandise",
  ],
  authors: [{ name: "Merch & Rescue" }],
  creator: "Merch & Rescue",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://merchnrescue.com",
    title: "Merch & Rescue — Full-Service Merch Production",
    description: "Battle-tested merch ops. Design, print, ship. We handle the logistics so you can focus on the mission.",
    siteName: "Merch & Rescue",
    images: [
      {
        url: "/og-image.jpg", // Needs to be created or placed in public
        width: 1200,
        height: 630,
        alt: "Merch & Rescue Production Floor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merch & Rescue — Full-Service Merch Production",
    description: "End-to-end merch production & logistics. Design, print, fulfillment.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { CartDrawer } from "@/components/cart-drawer";
import SessionProvider from "@/components/auth-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} font-sans relative`}>
        <SessionProvider>
          {children}
          <CartDrawer />
        </SessionProvider>
      </body>
    </html>
  );
}
