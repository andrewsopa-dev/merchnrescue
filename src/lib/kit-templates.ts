// Kit Template Definitions
// These define the structure of deployable kits with customizable slots

export interface KitSlot {
    id: string;
    name: string;              // "Hoodie Selection"
    description: string;       // "Choose a premium hoodie or fleece"
    required: boolean;
    category: string[];        // Filter products by these categories ["Hoodies & Fleece", "Sweatshirts"]
    defaultQuantity: number;
    allowMultiple: boolean;    // Can select multiple products for this slot
}

export interface KitTemplate {
    id: string;
    name: string;
    description: string;
    priceRange: string;
    icon: string;              // Lucide icon name
    tag: string;               // "Corporate", "Event", "Retail"
    slots: KitSlot[];
}

export const KIT_TEMPLATES: KitTemplate[] = [
    {
        id: "standard-issue",
        name: "Standard Issue / Onboard",
        description: "Operational readiness for new recruits. Premium hoodie, tee, tumbler, and welcome dossier in a custom deployment box.",
        priceRange: "$150 - $240",
        icon: "Package",
        tag: "Corporate",
        slots: [
            {
                id: "hoodie",
                name: "Hoodie or Fleece",
                description: "Select a premium hoodie, quarter-zip, or full-zip fleece",
                required: true,
                category: ["Hoodies & Fleece", "Sweatshirts"],
                defaultQuantity: 1,
                allowMultiple: false
            },
            {
                id: "tshirt",
                name: "T-Shirt",
                description: "Choose a core or premium tee",
                required: true,
                category: ["T-Shirts"],
                defaultQuantity: 1,
                allowMultiple: false
            },
            {
                id: "drinkware",
                name: "Tumbler or Drinkware",
                description: "Add branded drinkware",
                required: true,
                category: ["Drinkware", "Tumblers"],
                defaultQuantity: 1,
                allowMultiple: false
            },
            {
                id: "extras",
                name: "Welcome Materials",
                description: "Optional stickers, decals, or branded items",
                required: false,
                category: ["Stickers & Decals", "Custom Items"],
                defaultQuantity: 1,
                allowMultiple: true
            }
        ]
    },
    {
        id: "event-resupply",
        name: "Event Resupply",
        description: "High-volume swag logistics for conferences. T-shirts, totes, and decals packed for rapid distribution at mass events.",
        priceRange: "$30 - $70",
        icon: "CalendarRange",
        tag: "Event",
        slots: [
            {
                id: "bulk-tee",
                name: "Bulk T-Shirts",
                description: "Value tees for high-volume distribution",
                required: true,
                category: ["T-Shirts"],
                defaultQuantity: 50,
                allowMultiple: false
            },
            {
                id: "tote",
                name: "Tote Bag",
                description: "Canvas or cotton tote for swag bags",
                required: true,
                category: ["Bags & Totes"],
                defaultQuantity: 50,
                allowMultiple: false
            },
            {
                id: "decals",
                name: "Stickers or Decals",
                description: "Die-cut stickers for giveaways",
                required: false,
                category: ["Stickers & Decals"],
                defaultQuantity: 100,
                allowMultiple: true
            }
        ]
    },
    {
        id: "brand-garrison",
        name: "Brand Garrison",
        description: "Full-scale merch infrastructure. Mixed apparel run with neck labels and poly-bagging protocols. Retail ready.",
        priceRange: "$900+",
        icon: "Wrench",
        tag: "Retail / DIY",
        slots: [
            {
                id: "apparel-mix",
                name: "Mixed Apparel",
                description: "Select multiple tees, hoodies, or polos for retail inventory",
                required: true,
                category: ["T-Shirts", "Hoodies & Fleece", "Polos"],
                defaultQuantity: 100,
                allowMultiple: true
            },
            {
                id: "accessories",
                name: "Accessories",
                description: "Hats, bags, or other branded items",
                required: false,
                category: ["Headwear", "Bags & Totes"],
                defaultQuantity: 25,
                allowMultiple: true
            },
            {
                id: "custom-labels",
                name: "Custom Labels & Tags",
                description: "Neck labels, hang tags, or custom packaging",
                required: true,
                category: ["Custom Items"],
                defaultQuantity: 100,
                allowMultiple: false
            }
        ]
    }
];

// Kit Configuration State
export interface KitItem {
    slotId: string;
    productId: string;
    productName: string;
    color: string;
    sizes: Record<string, number>;  // { "S": 5, "M": 10, "L": 15 }
    decorationType: "blank" | "screen-print" | "embroidery" | "dtf";
    unitCost: number;
    totalQuantity: number;
    totalCost: number;
}

export interface KitConfiguration {
    templateId: string;
    templateName: string;
    items: KitItem[];
    totalCost: number;
    totalQuantity: number;
    createdAt: Date;
}

// Helper function to get template by ID
export function getTemplateById(id: string): KitTemplate | undefined {
    return KIT_TEMPLATES.find(template => template.id === id);
}

// Helper function to initialize empty kit configuration
export function createEmptyKit(templateId: string): KitConfiguration {
    const template = getTemplateById(templateId);
    if (!template) throw new Error(`Template ${templateId} not found`);

    return {
        templateId,
        templateName: template.name,
        items: [],
        totalCost: 0,
        totalQuantity: 0,
        createdAt: new Date()
    };
}
