import { ProductItem, PRODUCT_CATALOG } from "./catalog";

export type Tenant = {
    id: string;
    slug: string;
    name: string;
    logo: string; // Path to logo
    primaryColor: string;
    allowedCategories: string[]; // which categories they can see "Tees", "Hoodies"
    welcomeMessage: string;
};

export const MOCK_TENANTS: Tenant[] = [
    {
        id: "t001",
        slug: "tech-startup",
        name: "Pipeline Data Inc.",
        logo: "/assets/logo.png", // specific logo would go here
        primaryColor: "#3b82f6", // Blue
        allowedCategories: ["Tees", "Hoodies & Fleece", "Stickers, Labels & Packaging"],
        welcomeMessage: "Welcome to the Pipeline Data Employee Store. Get your swag here."
    },
    {
        id: "t002",
        slug: "construction-co",
        name: "BuildRight Construction",
        logo: "/assets/logo.png",
        primaryColor: "#f59e0b", // Orange
        allowedCategories: ["Jackets & Outerwear", "Headwear", "Polos & Wovens"],
        welcomeMessage: "BuildRight uniform ordering portal. Select your size and site location."
    },
    {
        id: "t003",
        slug: "bubba-irwins",
        name: "Bubba Irwin's Tattoo Shops",
        logo: "/assets/logo.png", // Placeholder
        primaryColor: "#dc2626", // Red
        allowedCategories: ["Tees", "Hoodies & Fleece", "Headwear", "Stickers, Labels & Packaging", "Patches"],
        welcomeMessage: "Official Merch for Bubba Irwin's. Tees, hats, and shop supplies."
    }
];

export function getTenantBySlug(slug: string): Tenant | undefined {
    return MOCK_TENANTS.find((t) => t.slug === slug);
}

export function getTenantProducts(tenant: Tenant): ProductItem[] {
    // Flatten catalog and filter by allowed categories
    const allItems: ProductItem[] = [];
    PRODUCT_CATALOG.forEach(cat => {
        if (tenant.allowedCategories.includes(cat.group)) {
            allItems.push(...cat.items);
        }
    });
    return allItems;
}
