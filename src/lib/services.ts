import { Printer, Layers, ShoppingBag, Package, Users, Tent, Palette } from "lucide-react";

export type ServiceItem = {
    id: string;
    title: string;
    description: string;
    icon: any;
    audience: string;
    turnaround: string;
    minimums: string;
    features: string[];
    cta: string;
};

export const SERVICES_CATALOG: ServiceItem[] = [
    {
        id: "print-fulfillment",
        title: "Print Fulfillment",
        description: "High-volume screen printing and embroidery for brands that need scale. Automated production with retail-quality finishing.",
        icon: Printer,
        audience: "Brands, Schools, Non-Profits",
        turnaround: "7-10 Days",
        minimums: "24 Units",
        features: ["Simulated Process & Spot Color", "3D Puff & Flat Embroidery", "Neck Labeling & Folding"],
        cta: "Start Bulk Order"
    },
    {
        id: "dtf-transfers",
        title: "DTF Transfers",
        description: "Industrial-grade Direct-to-Film transfers shipped to your shop or applied by ours. Vibrant, durable, and ready for any fabric.",
        icon: Layers,
        audience: "Print Shops, DIYers",
        turnaround: "24-48 Hours",
        minimums: "No Minimums",
        features: ["Hot/Cold Peel Versatility", "Unlimited Color Gamut", "Gang Sheet Optimization"],
        cta: "Order Transfers"
    },
    {
        id: "on-demand",
        title: "On-Demand Merch",
        description: "Zero-inventory stores for your team or fans. We print and ship individual orders so you don't have to hold stock.",
        icon: ShoppingBag,
        audience: "Creators, Businesses",
        turnaround: "3-5 Days",
        minimums: "No Minimums",
        features: ["Custom Branded Storefronts", "Auto-Fulfillment", "Monthly Payouts"],
        cta: "Launch Store"
    },
    {
        id: "kitting",
        title: "Kitting & Packaging",
        description: "Premium unboxing experiences. We assemble custom boxes with apparel, drinkware, and print collateral for new hires or VIPs.",
        icon: Package,
        audience: "Corporate, HR, Events",
        turnaround: "2-3 Weeks",
        minimums: "50 Kits",
        features: ["Custom Mailer Boxes", "Crinkle & Tissue Fill", "Inventory Warehousing"],
        cta: "Build a Kit"
    },
    {
        id: "corporate-orders",
        title: "Corporate & Large Group",
        description: "Uniforming and gear for departments, franchises, and entire organizations. Consistent branding across all assets.",
        icon: Users,
        audience: "Enterprises, Large Groups",
        turnaround: "10-14 Days",
        minimums: "24 Units",
        features: ["Uniform Programs", "Purchase Order Support", "Net-30 Terms Available"],
        cta: "Get Quote"
    },
    {
        id: "event-merch",
        title: "Event Merch",
        description: "Rapid deployment of festival, conference, and event merchandise. On-site activation and tight deadline management.",
        icon: Tent,
        audience: "Event Planners, Agencies",
        turnaround: "Hard Deadlines",
        minimums: "100 Units",
        features: ["Rush Production", "Split Shipping", "On-Site Support"],
        cta: "Plan Event"
    },
    {
        id: "design-help",
        title: "Design Support",
        description: "Professional art department services. From vectorizing logos to full-scale branding and separation.",
        icon: Palette,
        audience: "Everyone",
        turnaround: "2-4 Days",
        minimums: "Hourly Rate",
        features: ["Vector Conversion", "Color Separation", "Brand Identity Design"],
        cta: "Request Design"
    }
];
