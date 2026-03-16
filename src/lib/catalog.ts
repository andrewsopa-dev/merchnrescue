// --- Color Palette Definitions ---
export const PALETTE: Record<string, string> = {
    "White": "#ffffff",
    "Black": "#000000",
    "Navy": "#1e3a8a", // blue-900 like
    "Royal": "#2563eb", // blue-600
    "Red": "#dc2626", // red-600
    "Forest": "#14532d", // green-900
    "Charcoal": "#374151", // gray-700
    "Heather Grey": "#9ca3af", // gray-400
    "Safety Green": "#d9f99d", // lime-200
    "Safety Orange": "#fb923c", // orange-400
    "Sand": "#d6d3d1", // stone-300
    "Olive": "#57534e", // stone-600
    "Maroon": "#7f1d1d", // red-900
    "Pink": "#fbcfe8", // pink-200
    "Gold": "#facc15", // yellow-400
    "Purple": "#7e22ce" // purple-700
};

// --- Presets ---
const C_BASIC = ["White", "Black", "Navy", "Heather Grey", "Charcoal"];
const C_EXTENDED = ["White", "Black", "Navy", "Royal", "Red", "Forest", "Charcoal", "Heather Grey", "Maroon"];
const C_FASHION = ["White", "Black", "Sand", "Olive", "Navy", "Charcoal", "Pink"];
const C_SAFETY = ["Safety Green", "Safety Orange", "Black"];
const C_CAPS = ["Black", "Navy", "Charcoal", "Royal", "Red", "Forest", "White"];
const C_ALL = Object.keys(PALETTE);

export type ProductItem = {
    id: string;
    title: string;
    brand: string;
    label: string;
    blurb: string;
    description?: string;
    image: string;
    tags: string[];
    tier: "value" | "core" | "premium";
    imageScale?: number;
    colorImages?: Record<string, string>;
    availableColors?: string[]; // New optional field for now, but we will populate it
    msrp?: string; // Marketing material only, not for checkout
    sortOrder?: number; // Used within a category

    // Pricing structure for e-commerce
    pricing?: {
        wholesale: number;      // Base cost (admin/wholesale pricing)
        retailBase: number;     // MSRP for end users (typically 2-3x wholesale)
        blank?: number;         // Cost for undecorated item (if orderable blank)
        decorated?: number;     // Cost with decoration added
    };

    // Decoration options
    decorationMethods?: string[];  // ["Screen Print", "Embroidery", "DTF", "Heat Transfer"]
    sizesAvailable?: string[];     // ["S", "M", "L", "XL", "2XL", "3XL"]
    inStock?: boolean;             // Inventory tracking
};

export type ProductCategory = {
    group: string;
    items: ProductItem[];
};

export const PRODUCT_CATALOG: ProductCategory[] = [
    {
        group: "T-Shirts",
        items: [
            {
                id: "gildan-5000",
                title: "Heavy Cotton™ 100% Cotton T-Shirt",
                brand: "Gildan",
                label: "Value Standard",
                blurb: "The industry standard budget tee. 5.3oz US Cotton. Great for giveaways and bulk runs.",
                description: "Innovation you can feel. Made with 100% U.S. cotton and the latest breakthrough in soft cotton technology, the Gildan Heavy Cotton family has been remastered for improved printability, quality and comfort you can see and feel. 5.3-ounce, 100% US cotton. Features include a non-topstitched class width rib collar, taped neck and shoulders, classic fit, and a recycled tear-away label.",
                image: "/assets/products/gildan-5000-model.png",
                tags: ["Value", "Unisex", "Screen Print"],
                tier: "value",
                msrp: "$8.40",
                colorImages: {
                    "Black": "/assets/products/gildan-5000-model.png",
                    "Navy": "/assets/products/gildan-5000-navy.png",
                    "Red": "/assets/products/gildan-5000-red.png",
                    "Sport Grey": "/assets/products/gildan-5000-sportgrey.png",
                    "Royal": "https://cdnp.sanmar.com/medias/sys_master/images/h76/he5/30948517937182/624Wx724H_625_Royal-0-5000RoyalModelFront5/624Wx724H-625-Royal-0-5000RoyalModelFront5.jpg",
                    "White": "https://cdnp.sanmar.com/medias/sys_master/images/h32/hd6/30948521476126/624Wx724H_625_White-0-5000WhiteModelFront5/624Wx724H-625-White-0-5000WhiteModelFront5.jpg",
                    "Forest": "https://cdnp.sanmar.com/medias/sys_master/images/h41/h2c/30948803346462/624Wx724H_625_ForestGrn-0-5000ForestGrnModelFront5/624Wx724H-625-ForestGrn-0-5000ForestGrnModelFront5.jpg",
                    "Maroon": "https://cdnp.sanmar.com/medias/sys_master/images/h42/h7e/30948807540766/624Wx724H_625_Maroon-0-5000MaroonModelFront5/624Wx724H-625-Maroon-0-5000MaroonModelFront5.jpg",
                    "Safety Green": "https://cdnp.sanmar.com/medias/sys_master/images/hb8/h5e/30948519247902/624Wx724H_625_SftyGrn-0-5000SftyGrnModelFront5/624Wx724H-625-SftyGrn-0-5000SftyGrnModelFront5.jpg"
                },
                availableColors: ["Black", "Navy", "Royal", "Red", "White", "Sport Grey", "Graphite Heather", "Ash", "Forest", "Maroon", "Dark Heather", "Safety Green", "Sand", "Gold", "Light Pink", "Purple", "Carolina Blue"],
                sortOrder: 1
            },
            {
                id: "gildan-64000",
                title: "Softstyle® T-Shirt",
                brand: "Gildan",
                label: "Value Fashion",
                blurb: "Modern classic fit. High stitch density for smoother printing surface.",
                description: "The Gildan 64000 Softstyle is the bridge between promotional and fashion. Ring-spun cotton makes it softer than the 5000, with a more fitted cut.",
                image: "/assets/products/gildan-64000-model.png",
                tags: ["Value", "Unisex", "Retail"],
                tier: "value",
                msrp: "$7.42",
                colorImages: {
                    "Black": "https://cdnp.sanmar.com/medias/sys_master/images/h98/hce/30946184331294/624Wx724H_3480_Black-0-64000BlackModelFront7/624Wx724H-3480-Black-0-64000BlackModelFront7.jpg",
                    "White": "https://cdnp.sanmar.com/medias/sys_master/images/h8a/hde/30946172076062/624Wx724H_3480_White-0-64000WhiteModelFront6/624Wx724H-3480-White-0-64000WhiteModelFront6.jpg",
                    "Sand": "https://cdnp.sanmar.com/medias/sys_master/images/hda/haf/30948847058974/624Wx724H_3480_Sand-0-64000SandModelFront8/624Wx724H-3480-Sand-0-64000SandModelFront8.jpg",
                    "Olive": "https://cdnp.sanmar.com/medias/sys_master/images/h93/h0b/30946190295070/624Wx724H_3480_MilGreen-0-64000MilGreenModelFront7/624Wx724H-3480-MilGreen-0-64000MilGreenModelFront7.jpg",
                    "Navy": "https://cdnp.sanmar.com/medias/sys_master/images/h43/h46/30948846075934/624Wx724H_3480_Navy-0-64000NavyModelFront8/624Wx724H-3480-Navy-0-64000NavyModelFront8.jpg",
                    "Charcoal": "https://cdnp.sanmar.com/medias/sys_master/images/h00/hc1/30946185510942/624Wx724H_3480_Charcoal-0-64000CharcoalModelFront7/624Wx724H-3480-Charcoal-0-64000CharcoalModelFront7.jpg",
                    "Pink": "https://cdnp.sanmar.com/medias/sys_master/images/h0d/he0/30946189377566/624Wx724H_3480_LightPink-0-64000LightPinkModelFront2/624Wx724H-3480-LightPink-0-64000LightPinkModelFront2.jpg"
                },
                availableColors: C_FASHION,
                sortOrder: 1.5
            },
            {
                id: "nl-3600",
                title: "Premium Cotton Crew",
                brand: "Next Level Apparel",
                label: "Core Softspun",
                blurb: "Our most popular retail-ready tee. 4.3oz Combed Ring-Spun Cotton.",
                description: "The Next Level 3600 is instantly loved for its softness and modern fit. A massive step up from basic tees without breaking the bank. The go-to for merchandise and branding.",
                image: "/assets/products/nl-3600-black.png",
                tags: ["Core", "Unisex", "DTF", "Screen"],
                tier: "core",
                msrp: "$12.50",
                colorImages: {
                    "Black": "/assets/products/nl-3600-black.png",
                    "Navy": "/assets/products/nl-3600-navy.png",
                    "White": "https://cdnp.sanmar.com/medias/sys_master/images/h64/h08/30946365734942/624Wx724H_11018_White-0-NL3600WhiteModelFront6/624Wx724H-11018-White-0-NL3600WhiteModelFront6.jpg",
                    "Royal": "https://cdnp.sanmar.com/medias/sys_master/images/h58/h86/30946364162078/624Wx724H_11018_Royal-0-NL3600RoyalModelFront6/624Wx724H-11018-Royal-0-NL3600RoyalModelFront6.jpg",
                    "Red": "https://cdnp.sanmar.com/medias/sys_master/images/hd4/hd4/30946363965470/624Wx724H_11018_Red-0-NL3600RedModelFront6/624Wx724H-11018-Red-0-NL3600RedModelFront6.jpg",
                    "Forest": "https://cdnp.sanmar.com/medias/sys_master/images/h8a/h2a/30946360229918/624Wx724H_11018_ForestGrn-0-NL3600ForestGrnModelFront6/624Wx724H-11018-ForestGrn-0-NL3600ForestGrnModelFront6.jpg",
                    "Charcoal": "https://cdnp.sanmar.com/medias/sys_master/images/h6b/h15/30946360885278/624Wx724H_11018_HeavyMetal-0-NL3600HeavyMetalModelFront6/624Wx724H-11018-HeavyMetal-0-NL3600HeavyMetalModelFront6.jpg",
                    "Maroon": "https://cdnp.sanmar.com/medias/sys_master/images/h36/had/30946362392606/624Wx724H_11018_Maroon-0-NL3600MaroonModelFront6/624Wx724H-11018-Maroon-0-NL3600MaroonModelFront6.jpg",
                    "Heather Grey": "https://cdnp.sanmar.com/medias/sys_master/images/h4f/h38/30946361016350/624Wx724H_11018_HthrGray-0-NL3600HthrGrayModelFront6/624Wx724H-11018-HthrGray-0-NL3600HthrGrayModelFront6.jpg"
                },
                availableColors: C_EXTENDED,
                sortOrder: 2,
                imageScale: 1.15
            },
            {
                id: "nl-6210",
                title: "CVC Crew",
                brand: "Next Level Apparel",
                label: "Premium Blend",
                blurb: "The perfect blend of softness and fit. 60/40 Cotton/Poly CVC.",
                description: "The Next Level 6210 CVC Crew is a top-tier favorite. The 60/40 blend adds a slight heather texture and superior drape/recovery compared to 100% cotton. Extremely soft.",
                image: "/assets/products/nl-6210-model.png",
                tags: ["Premium", "Unisex", "Soft", "Screen"],
                tier: "premium",
                msrp: "$15.50",
                colorImages: {
                    "White": "https://cdnp.sanmar.com/medias/sys_master/images/ha4/h1d/30946475343902/624Wx724H_11021_White-0-NL6210WhiteModelFront4/624Wx724H-11021-White-0-NL6210WhiteModelFront4.jpg",
                    "Black": "https://cdnp.sanmar.com/medias/sys_master/images/ha3/h38/30946470068254/624Wx724H_11021_Black-0-NL6210BlackModelFront4/624Wx724H-11021-Black-0-NL6210BlackModelFront4.jpg",
                    "Sand": "https://cdnp.sanmar.com/medias/sys_master/images/h03/hb5/30946961981470/624Wx724H_11021_Sand-0-NL6210SandModelFront5/624Wx724H-11021-Sand-0-NL6210SandModelFront5.jpg",
                    "Olive": "https://cdnp.sanmar.com/medias/sys_master/images/h30/h38/30947125035038/624Wx724H_11021_MilGreen-0-NL6210MilGreenModelFront5/624Wx724H-11021-MilGreen-0-NL6210MilGreenModelFront5.jpg",
                    "Navy": "https://cdnp.sanmar.com/medias/sys_master/images/h10/h72/30948938874910/624Wx724H_11021_MdntNavy-0-NL6210MdntNavyModelFront6/624Wx724H-11021-MdntNavy-0-NL6210MdntNavyModelFront6.jpg",
                    "Charcoal": "https://cdnp.sanmar.com/medias/sys_master/images/h95/h45/30947120906270/624Wx724H_11021_Charcoal-0-NL6210CharcoalModelFront5/624Wx724H-11021-Charcoal-0-NL6210CharcoalModelFront5.jpg",
                    "Pink": "https://cdnp.sanmar.com/medias/sys_master/images/ha1/h83/30947123724318/624Wx724H_11021_HtrLtPnk-0-NL6210HtrLtPnkModelFront5/624Wx724H-11021-HtrLtPnk-0-NL6210HtrLtPnkModelFront5.jpg"
                },
                availableColors: C_FASHION,
                sortOrder: 2.5
            },
            {
                id: "nl-6010",
                title: "Tri-Blend Crew",
                brand: "Next Level Apparel",
                label: "Premium Tri-Blend",
                blurb: "Vintage soft feel. 50/25/25 Poly/Cotton/Rayon.",
                description: "The Next Level 6010 Tri-Blend is the definition of vintage soft. The unique heathered look and breathable fabric make it an instant favorite.",
                image: "/assets/products/nl-6010-model.png",
                tags: ["Premium", "Unisex", "Vintage Soft"],
                tier: "premium",
                msrp: "$16.80",
                colorImages: {
                    "Black": "https://cdnp.sanmar.com/medias/sys_master/images/hf8/h9e/30946558083102/624Wx724H_11025_VtgBlack-0-NL6010VtgBlackModelFront2/624Wx724H-11025-VtgBlack-0-NL6010VtgBlackModelFront2.jpg",
                    "Navy": "https://cdnp.sanmar.com/medias/sys_master/images/h85/hac/30946558476318/624Wx724H_11025_VtgNavy-0-NL6010VtgNavyModelFront2/624Wx724H-11025-VtgNavy-0-NL6010VtgNavyModelFront2.jpg",
                    "Charcoal": "https://cdnp.sanmar.com/medias/sys_master/images/h57/h24/30946556510238/624Wx724H_11025_PremHthr-0-NL6010PremHthrModelFront2/624Wx724H-11025-PremHthr-0-NL6010PremHthrModelFront2.jpg",
                    "Royal": "https://cdnp.sanmar.com/medias/sys_master/images/h70/hf7/30946559066142/624Wx724H_11025_VtgRoyal-0-NL6010VtgRoyalModelFront2/624Wx724H-11025-VtgRoyal-0-NL6010VtgRoyalModelFront2.jpg",
                    "Red": "https://cdnp.sanmar.com/medias/sys_master/images/h13/hba/30946558869534/624Wx724H_11025_VtgRed-0-NL6010VtgRedModelFront2/624Wx724H-11025-VtgRed-0-NL6010VtgRedModelFront2.jpg"
                },
                availableColors: ["Black", "Navy", "Charcoal", "Royal", "Red"],
                sortOrder: 2.8
            },
            {
                id: "mm-1016",
                title: "Stretch Jersey Crew",
                brand: "Mercer+Mettle",
                label: "Premium Performance",
                blurb: "Elevated corporate essential. Moisture-wicking, wrinkle-resistant 5.6oz synthetic blend.",
                description: "Mercer+Mettle MM1016 redefines the corporate t-shirt. Heavyweight but breathable, with a refined finish that looks professional in an office or casual setting.",
                image: "/assets/products/mm-1016-model.png",
                tags: ["Premium", "Unisex", "DTF", "Embroidery"],
                tier: "premium",
                msrp: "$28.00",
                colorImages: {
                    "White": "https://cdnp.sanmar.com/medias/624Wx724H-null?context=bWFzdGVyfGltYWdlc3wxMzU1MDN8aW1hZ2UvanBlZ3xhR0prTDJoaFl5OHpNRGt6TmpVeE9UUXdPVFk1TkM4Mk1qUlhlRGN5TkVoZmJuVnNiQXw3NjA4ZjI4OTlkY2E4NDhhM2NkMzg5ODlhNDQxZjg3OGM0NDgxZDVmYTMxNjVkYzc5NjJiMTI5NzVlMjdhZjk1",
                    "Black": "https://cdnp.sanmar.com/medias/624Wx724H-null?context=bWFzdGVyfGltYWdlc3wxMzI4MjN8aW1hZ2UvanBlZ3xhR1kyTDJnME9TOHpNRGt6TmpVeE9EWXlNekkyTWk4Mk1qUlhlRGN5TkVoZmJuVnNiQXw4YTdhYzEzYTAwMWNiMjVlOWE4YmQ5NWQ2NThiYjZmZTlmOTgxMzE1NDNjMWRhYWMzYWI1NGNmNmIxNGRmNjBk",
                    "Navy": "https://cdnp.sanmar.com/medias/624Wx724H-null?context=bWFzdGVyfGltYWdlc3wxNjA4MzZ8aW1hZ2UvanBlZ3xhREptTDJnNVppOHpNRGt6TmpVeE9UQXhOalEzT0M4Mk1qUlhlRGN5TkVoZmJuVnNiQXw1YWRiODc0MTFhMmM5M2FiYWVlNDMzYmE1MDkwMTMxZGVmNGM1NzBhYzRmOTdhOWJkZjcyZjBkNTJjYjhkNTY1",
                    "Charcoal": "https://cdnp.sanmar.com/medias/624Wx724H-null?context=bWFzdGVyfGltYWdlc3wxNTA1NjV8aW1hZ2UvanBlZ3xhRFk1TDJnell5OHpNRGt6TmpVeE9ESXpNREEwTmk4Mk1qUlhlRGN5TkVoZmJuVnNiQXxhMzYyNGM2YzY3ZjUwN2IyOTE2YjAyMzRlYjZmZDlmZDg2OGYwNGExZDFjZDY3YTZhNjhkYjY4MWViMmQ3OWQw",
                    "Heather Grey": "https://cdnp.sanmar.com/medias/624Wx724H-null?context=bWFzdGVyfGltYWdlc3wxNTA1NjV8aW1hZ2UvanBlZ3xhRFk1TDJnell5OHpNRGt6TmpVeE9ESXpNREEwTmk4Mk1qUlhlRGN5TkVoZmJuVnNiQXxhMzYyNGM2YzY3ZjUwN2IyOTE2YjAyMzRlYjZmZDlmZDg2OGYwNGExZDFjZDY3YTZhNjhkYjY4MWViMmQ3OWQw"
                },
                availableColors: C_BASIC,
                sortOrder: 3
            }
        ]
    },
    {
        group: "Hoodies & Fleece",
        items: [
            {
                id: "gildan-18500",
                title: "Heavy Blend™ Hooded Sweatshirt",
                brand: "Gildan",
                label: "Value Standard",
                blurb: "The classic pullover hoodie. 8oz 50/50 Poly/Cotton blend.",
                description: "Everyone's favorite hoodie. Warm, durable, and ready for print. The 50/50 blend reduces shrinking and pilling. A staple for schools and teams.",
                image: "/assets/products/gildan-18500-black.png",
                tags: ["Value", "Unisex", "Fleece"],
                tier: "value",
                msrp: "$30.00",
                colorImages: {
                    "White": "https://cdnp.sanmar.com/medias/sys_master/images/hb5/he8/30951233191966/624Wx724H_115_White-0-18500WhiteModelFront5/624Wx724H-115-White-0-18500WhiteModelFront5.jpg",
                    "Black": "/assets/products/gildan-18500-black.png",
                    "Navy": "/assets/products/gildan-18500-navy.png",
                    "Royal": "https://cdnp.sanmar.com/medias/sys_master/images/haf/h15/30951230636062/624Wx724H_115_Royal-0-18500RoyalModelFront5/624Wx724H-115-Royal-0-18500RoyalModelFront5.jpg",
                    "Red": "https://cdnp.sanmar.com/medias/sys_master/images/he6/h22/30951230275614/624Wx724H_115_Red-0-18500RedModelFront5/624Wx724H-115-Red-0-18500RedModelFront5.jpg",
                    "Forest": "https://cdnp.sanmar.com/medias/sys_master/images/ha5/h6a/30951226638366/624Wx724H_115_ForestGrn-0-18500ForestGrnModelFront5/624Wx724H-115-ForestGrn-0-18500ForestGrnModelFront5.jpg",
                    "Charcoal": "https://cdnp.sanmar.com/medias/sys_master/images/hcb/hde/30951225327646/624Wx724H_115_Charcoal-0-18500CharcoalModelFront5/624Wx724H-115-Charcoal-0-18500CharcoalModelFront5.jpg",
                    "Heather Grey": "/assets/products/gildan-18500-grey.png",
                    "Maroon": "https://cdnp.sanmar.com/medias/sys_master/images/h9d/h5f/30951207632926/624Wx724H_115_Maroon-0-18500MaroonModelFront5/624Wx724H-115-Maroon-0-18500MaroonModelFront5.jpg"
                },
                availableColors: C_EXTENDED,
                sortOrder: 1
            },
            {
                id: "nl-9300",
                title: "Malibu Pullover Hoodie",
                brand: "Next Level Apparel",
                label: "Premium Standard",
                blurb: "The PCH Hoodie. 7.4oz heathered fleece with a lived-in feel.",
                description: "The Next Level 9300 (formerly PCH) is a premium midweight hoodie with a super soft heathered face. Good contrast drawcords and a retail fit make it a favorite for lifestyle brands.",
                image: "https://sanmarsports.com/cdn/shop/files/NL9300_heatherblack_model_front.jpg?v=1761917102&width=2000",
                tags: ["Premium", "Unisex", "Fleece", "Soft"],
                tier: "core",
                msrp: "$42.00",
                colorImages: {
                    "Black": "https://sanmarsports.com/cdn/shop/files/NL9300_heatherblack_model_front.jpg?v=1761917102&width=2000",
                    "Navy": "https://sanmarsports.com/cdn/shop/files/NL9300_heathermidnightnavy_model_front_0ec99721-2257-4053-a0bf-c8266ee361cb.jpg?v=1761917101&width=2000",
                    "Heather Grey": "https://sanmarsports.com/cdn/shop/files/NL9300_heathergray_model_front_4430fb95-84b0-452b-a299-016d2d7fb3cf.jpg?v=1761917102&width=2000",
                    "Royal": "https://sanmarsports.com/cdn/shop/files/NL9300_heatherbayblue_model_front_b7a86efc-4af8-4266-9391-0f1418aeff51.jpg?v=1767892858&width=2000",
                    "Red": "https://sanmarsports.com/cdn/shop/files/NL9300_heathercardinal_model_front.jpg?v=1761917101&width=2000",
                    "Sand": "https://sanmarsports.com/cdn/shop/files/NL9300_oatmeal_model_front.jpg?v=1761917102&width=2000"
                },
                availableColors: ["Black", "Navy", "Heather Grey", "Royal", "Red", "Sand"],
                sortOrder: 2,
                imageScale: 1.12
            },
            {
                id: "champion-s600",
                title: "Powerblend® Crewneck Sweatshirt",
                brand: "Champion",
                label: "Performance Standard",
                blurb: "The legendary Champion crew. 9oz blend with superior pill resistance and durability.",
                description: "Champion's S6000 Powerblend® Crewneck delivers exceptional quality with 50/50 cotton/poly fleece that resists pilling. Features the iconic 'C' logo on the left sleeve and ribbed cuffs and waistband for lasting fit.",
                image: "/assets/products/champion-s600-black-front.jpg",
                tags: ["Classic", "Unisex", "Heavyweight"],
                tier: "core",
                msrp: "$36.00",
                colorImages: {
                    "Black": "/assets/products/champion-s600-black-front.jpg",
                    "Navy": "/assets/products/champion-s600-navy-front.jpg",
                    "Light Steel": "/assets/products/champion-s600-lightsteel-front.jpg",
                    "Charcoal": "/assets/products/champion-s600-charcoal-front.jpg",
                    "Red": "/assets/products/champion-s600-red-front.jpg",
                    "Royal": "/assets/products/champion-s600-royal-front.jpg"
                },
                availableColors: ["Black", "Navy", "Light Steel", "Charcoal", "Red", "Royal"],
                sortOrder: 2.5
            },
            {
                id: "burnside-8600",
                title: "Dusk to Dawn 1/4 Zip",
                brand: "Burnside",
                label: "Performance Layer",
                blurb: "Tech performance meets casual style. 100% Poly with a textured look.",
                description: "The Burnside Dusk to Dawn is a versatile quarter-zip pullover. 100% polyester fleece with a convertible collar and raglan sleeves. Great for corporate or active wear.",
                image: "/assets/products/burnside-8600-model.png",
                tags: ["Performance", "Unisex", "Quarter-Zip"],
                tier: "core",
                msrp: "$44.00",
                availableColors: ["Black", "Navy", "Charcoal", "Heather Grey"],
                sortOrder: 3
            },
            {
                id: "nl-9602",
                title: "Beach Fleece Full-Zip",
                brand: "Next Level Apparel",
                label: "Premium Soft",
                blurb: "Ultra-soft beach fleece. 80/20 Cotton/Poly for a relaxed premium feel.",
                description: "Next Level's Beach Fleece is incredibly soft and comfortable. This full-zip hoodie features a jersey-lined hood and a relaxed fit perfect for lifestyle brands.",
                image: "/assets/products/nl-9602-model.png",
                tags: ["Premium", "Unisex", "Full-Zip"],
                tier: "premium",
                msrp: "$48.00",
                availableColors: ["Black", "Navy", "Heather Grey", "Charcoal"],
                sortOrder: 3.5
            }
        ]
    },
    {
        group: "Long Sleeves",
        items: [
            {
                id: "gildan-5400",
                title: "Heavy Cotton™ Long Sleeve",
                brand: "Gildan",
                label: "Value Standard",
                blurb: "The long sleeve version of the 5000. 5.3oz 100% US Cotton.",
                description: "Perfect for cooler days or work crews. The Gildan 5400 offers the same reliable fit and durability as the 5000, with ribbed cuffs for a secure fit.",
                image: "/assets/products/gildan-5400-model-v2.png",
                tags: ["Value", "Unisex", "Ribbed Cuffs"],
                tier: "value",
                msrp: "$11.20",
                availableColors: C_EXTENDED,
                sortOrder: 1
            },
            {
                id: "gildan-2400",
                title: "Ultra Cotton® Long Sleeve",
                brand: "Gildan",
                label: "Value Heavyweight",
                blurb: "Heavier 6oz cotton for added warmth and durability.",
                description: "A step up in weight. The Gildan 2400 is a 6oz heavyweight workhorse. Great for construction, landscaping, and outdoor shifts.",
                image: "/assets/products/gildan-2400-model-v2.png",
                tags: ["Value", "Unisex", "Heavyweight"],
                tier: "value",
                msrp: "$13.00",
                availableColors: C_BASIC,
                sortOrder: 1.5
            },
            {
                id: "nl-3601",
                title: "Premium Cotton Long Sleeve",
                brand: "Next Level Apparel",
                label: "Core Softspun",
                blurb: "Retail fit and softness in a long sleeve. 4.3oz Combed Ring-Spun.",
                description: "The long sleeve companion to the 3600. Super soft, tailored fit, and perfect for band merch or fashion-forward brands.",
                image: "/assets/products/nl-3601-model-v2.png",
                tags: ["Core", "Unisex", "Retail Fit"],
                tier: "core",
                msrp: "$18.50",
                availableColors: C_BASIC,
                sortOrder: 2,
                imageScale: 1.15
            }
        ]
    },
    {
        group: "Headwear",
        items: [
            {
                id: "richardson-112",
                title: "Richardson 112 Trucker",
                brand: "Richardson",
                label: "The Standard",
                blurb: "The absolute best-selling trucker hat in the industry. Classic fit.",
                description: "Richardson 112 is THE standard for trucker hats. Mid-profile, snapback, with that classic mesh back look. Everyone expects this hat.",
                image: "/assets/products/richardson-112-black-v3.png",
                tags: ["Core", "Snapeback", "Trucker", "Patch"],
                tier: "core",
                msrp: "$14.00",
                colorImages: {
                    "Black": "/assets/products/richardson-112-black-v3.png",
                    "Navy": "/assets/products/richardson-112-navy.png",
                    "Charcoal": "https://cdnp.sanmar.com/medias/sys_master/images/h4d/h1c/30953159426078/624Wx724H_72574_Charcoal-1-112CharcoalHatFront/624Wx724H-72574-Charcoal-1-112CharcoalHatFront.jpg",
                    "Red": "https://cdnp.sanmar.com/medias/sys_master/images/h93/hd6/30954420797470/624Wx724H_72574_Red-1-112RedHatFront2/624Wx724H-72574-Red-1-112RedHatFront2.jpg",
                    "Royal": "https://cdnp.sanmar.com/medias/sys_master/images/h65/ha7/30954067689502/624Wx724H_72574_Royal-1-112RoyalHatFront/624Wx724H-72574-Royal-1-112RoyalHatFront.jpg",
                    "Forest": "https://cdnp.sanmar.com/medias/sys_master/images/h64/h09/30953927966750/624Wx724H_72574_DarkGreen-1-112DarkGreenHatFront/624Wx724H-72574-DarkGreen-1-112DarkGreenHatFront.jpg"
                },
                availableColors: ["Black", "Navy", "Charcoal", "Red", "Royal", "Forest"],
                sortOrder: 1
            },
            {
                id: "yupoong-6006",
                title: "Classic 5-Panel Trucker",
                brand: "Yupoong",
                label: "Streetwear Classic",
                blurb: "The definitive 5-panel structure. High-profile, flat visor.",
                description: "The Yupoong 6006 is the classic 5-panel trucker. Seamless front panel perfect for printing, high profile, and a flat bill.",
                image: "/assets/products/yupoong-6006-black.png",
                tags: ["Core", "Snapback", "Trucker", "5-Panel"],
                tier: "core",
                msrp: "$11.50",
                colorImages: {
                    "Black": "/assets/products/yupoong-6006-black.png",
                    "Navy": "https://cdnp.sanmar.com/medias/sys_master/images/h4b/hc2/30952974270494/624Wx724H_2001_Navy-1-6006NavyHatFront2/624Wx724H-2001-Navy-1-6006NavyHatFront2.jpg",
                    "Charcoal": "https://cdnp.sanmar.com/medias/sys_master/images/h4e/hba/30952971583518/624Wx724H_2001_Charcoal-1-6006CharcoalHatFront2/624Wx724H-2001-Charcoal-1-6006CharcoalHatFront2.jpg",
                    "Red/Black": "https://cdnp.sanmar.com/medias/sys_master/images/h6e/hd7/30952976990238/624Wx724H_2001_Red-1-6006RedHatFront2/624Wx724H-2001-Red-1-6006RedHatFront2.jpg",
                    "White/Black": "https://cdnp.sanmar.com/medias/sys_master/images/h06/h05/30952979185694/624Wx724H_2001_White-1-6006WhiteHatFront2/624Wx724H-2001-White-1-6006WhiteHatFront2.jpg"
                },
                availableColors: ["Black", "Navy", "Charcoal", "Red/Black", "White/Black"],
                sortOrder: 1.2
            },
            {
                id: "caps-dad",
                title: "Garment Washed Dad Cap",
                brand: "Port & Company",
                label: "Core Casual",
                blurb: "100% cotton twill. Unstructured, low profile.",
                description: "The classic 'Dad Hat'. Soft, unstructured, and fits everyone. Features a self-fabric slide closure.",
                image: "/assets/products/cps-dad-model-v2.png",
                tags: ["Core", "Unisex", "Embroidery"],
                tier: "core",
                msrp: "$9.50",
                colorImages: {
                    "Black": "https://cdnp.sanmar.com/medias/sys_master/images/h13/h5f/30952870240286/624Wx724H_1960_Black-1-CP86BlackHatFront/624Wx724H-1960-Black-1-CP86BlackHatFront.jpg",
                    "Navy": "https://cdnp.sanmar.com/medias/sys_master/images/h2b/hd8/30952870797342/624Wx724H_1960_Navy-1-CP86NavyHatFront/624Wx724H-1960-Navy-1-CP86NavyHatFront.jpg",
                    "Charcoal": "https://cdnp.sanmar.com/medias/sys_master/images/hf8/h5b/30952869519390/624Wx724H_1960_Charcoal-1-CP86CharcoalHatFront/624Wx724H-1960-Charcoal-1-CP86CharcoalHatFront.jpg",
                    "Royal": "https://cdnp.sanmar.com/medias/sys_master/images/h61/hbc/30952871026718/624Wx724H_1960_Royal-1-CP86RoyalHatFront/624Wx724H-1960-Royal-1-CP86RoyalHatFront.jpg",
                    "Red": "https://cdnp.sanmar.com/medias/sys_master/images/h95/hba/30952870567966/624Wx724H_1960_Red-1-CP86RedHatFront/624Wx724H-1960-Red-1-CP86RedHatFront.jpg",
                    "Forest": "https://cdnp.sanmar.com/medias/sys_master/images/hdc/h24/30952870010910/624Wx724H_1960_ForestGreen-1-CP86ForestGreenHatFront/624Wx724H-1960-ForestGreen-1-CP86ForestGreenHatFront.jpg",
                    "White": "https://cdnp.sanmar.com/medias/sys_master/images/h99/h1f/30952871616542/624Wx724H_1960_White-1-CP86WhiteHatFront/624Wx724H-1960-White-1-CP86WhiteHatFront.jpg"
                },
                availableColors: C_CAPS,
                sortOrder: 2
            },
            {
                id: "caps-performance",
                title: "Perforated Performance Cap",
                brand: "Sport-Tek",
                label: "Core Sport",
                blurb: "Moisture-wicking, breathable, and lightweight.",
                description: "Built for movement. The Sport-Tek performance cap keeps you cool with perforated panels and moisture-wicking fabric.",
                image: "/assets/products/cps-perf-model-v2.png",
                tags: ["Core", "Sport", "Moisture Wicking"],
                tier: "core",
                msrp: "$14.50",
                availableColors: ["Black", "White", "Navy", "Royal", "Red"],
                sortOrder: 13
            },
            {
                id: "beanies-knit",
                title: "Knit Beanie",
                brand: "Sportsman",
                label: "Core Warmth",
                blurb: "Dense knit beanie. Perfect for cold weather branding.",
                description: "A solid, high-quality beanie that holds its shape. Great for patches or direct embroidery.",
                image: "/assets/products/beanie-model-v2.png",
                tags: ["Core", "Unisex", "Winter", "Patch"],
                tier: "core",
                msrp: "$8.00",
                colorImages: {
                    "Black": "https://cdnp.sanmar.com/medias/sys_master/images/h81/h47/30953067028510/624Wx724H_2006_Black-1-SP12BlackModelFront/624Wx724H-2006-Black-1-SP12BlackModelFront.jpg",
                    "Navy": "https://cdnp.sanmar.com/medias/sys_master/images/h2a/h40/30953067094046/624Wx724H_2006_Navy-1-SP12NavyModelFront/624Wx724H-2006-Navy-1-SP12NavyModelFront.jpg",
                    "Charcoal": "https://cdnp.sanmar.com/medias/sys_master/images/h18/h3f/30953066045470/624Wx724H_2006_Charcoal-1-SP12CharcoalModelFront/624Wx724H-2006-Charcoal-1-SP12CharcoalModelFront.jpg",
                    "Heather Grey": "https://cdnp.sanmar.com/medias/sys_master/images/h56/h3b/30953066602526/624Wx724H_2006_HthGray-1-SP12HthGrayModelFront/624Wx724H-2006-HthGray-1-SP12HthGrayModelFront.jpg",
                    "Olive": "https://cdnp.sanmar.com/medias/sys_master/images/hf0/h3d/30953066962974/624Wx724H_2006_Olive-1-SP12OliveModelFront/624Wx724H-2006-Olive-1-SP12OliveModelFront.jpg",
                    "Safety Orange": "https://cdnp.sanmar.com/medias/sys_master/images/h74/h3a/30953067159582/624Wx724H_2006_SftyOrange-1-SP12SftyOrangeModelFront/624Wx724H-2006-SftyOrange-1-SP12SftyOrangeModelFront.jpg"
                },
                availableColors: ["Black", "Navy", "Charcoal", "Heather Grey", "Olive", "Safety Orange"],
                sortOrder: 4
            },
            {
                id: "bucket-hats",
                title: "Bio-Washed Bucket Hat",
                brand: "Big Accessories",
                label: "Core Street",
                blurb: "Classic 100% cotton twill bucket hat.",
                description: "The bucket hat is back. Bio-washed for a soft, worn-in feel. canvas for screen print or embroidery.",
                image: "/assets/products/bucket-model-v2.png",
                tags: ["Core", "Streetwear", "Embroidery"],
                tier: "core",
                msrp: "$11.00",
                colorImages: {
                    "Black": "https://cdnp.sanmar.com/medias/sys_master/images/h52/hb3/30953141379102/624Wx724H_2015_Black-1-BX003BlackModelFront/624Wx724H-2015-Black-1-BX003BlackModelFront.jpg",
                    "Navy": "https://cdnp.sanmar.com/medias/sys_master/images/h39/haf/30953141936158/624Wx724H_2015_Navy-1-BX003NavyModelFront/624Wx724H-2015-Navy-1-BX003NavyModelFront.jpg",
                    "Khaki": "https://cdnp.sanmar.com/medias/sys_master/images/h25/hb0/30953141444638/624Wx724H_2015_Khaki-1-BX003KhakiModelFront/624Wx724H-2015-Khaki-1-BX003KhakiModelFront.jpg",
                    "White": "https://cdnp.sanmar.com/medias/sys_master/images/h0c/had/30953142001694/624Wx724H_2015_White-1-BX003WhiteModelFront/624Wx724H-2015-White-1-BX003WhiteModelFront.jpg"
                },
                availableColors: ["Black", "Navy", "Khaki", "White"],
                sortOrder: 5
            }
        ]
    },
    {
        group: "Outerwear",
        items: [
            {
                id: "port-j317",
                title: "Core Soft Shell Jacket",
                brand: "Port Authority",
                label: "Core Standard",
                blurb: "The industry standard soft shell. Wind and water resistant.",
                description: "A reliable soft shell at a great price. Clean lines, weather protection, and a professional look for any corporate team.",
                image: "/assets/products/port-j317-model-v2.png",
                tags: ["Core", "Soft Shell", "Water Resistant"],
                tier: "core",
                msrp: "$68.00",
                availableColors: C_BASIC,
                sortOrder: 1
            },
            {
                id: "eb-fleece",
                title: "Full-Zip Fleece Jacket",
                brand: "Eddie Bauer",
                label: "Premium Outdoor",
                blurb: "Low-impact fleece. Warm, breathable, and versatile.",
                description: "Eddie Bauer quality in a versatile fleece. Perfect for layering. Features zippered chest pockets and open cuffs.",
                image: "/assets/products/eddie-bauer-eb200-black-model.png",
                tags: ["Premium", "Fleece", "Warm"],
                tier: "premium",
                msrp: "$80.00",
                colorImages: {
                    "Black": "/assets/products/eddie-bauer-eb200-black-model.png",
                    "Navy": "/assets/products/eddie-bauer-eb200-navy-model.png",
                    "Charcoal": "/assets/products/eddie-bauer-eb200-grey-model.png"
                },
                availableColors: ["Black", "Navy", "Charcoal", "Grey"],
                sortOrder: 12
            },
            {
                id: "tnf-dryvent",
                title: "DryVent™ Rain Jacket",
                brand: "The North Face",
                label: "Premium Technical",
                blurb: "Waterproof, breathable technical shell from The North Face.",
                description: "The ultimate rain jacket. Fully seam-sealed `DryVent` shell protects against the elements while remaining breathable.",
                image: "/assets/products/northface-dryvent-model.png",
                tags: ["Premium", "Waterproof", "Technical"],
                tier: "premium",
                msrp: "$150.00",
                colorImages: {
                    "Black": "/assets/products/northface-dryvent-model.png",
                    "Navy": "/assets/products/northface-dryvent-model.png"
                },
                availableColors: ["Black", "Navy", "Grey"],
                sortOrder: 23
            },
            {
                id: "nea-601",
                title: "Coach's Jacket",
                brand: "Sanmar",
                label: "Core Street",
                blurb: "Nylon shell with snap front. Retro sport vibe.",
                description: "The classic windbreaker coach jacket (NEA601). Lined for warmth, water-resistant, and timelessly cool.",
                image: "/assets/products/coach-jacket-model.png",
                tags: ["Core", "Streetwear", "Outerwear"],
                tier: "core",
                msrp: "$38.00",
                colorImages: {
                    "Black": "https://cdnp.sanmar.com/medias/sys_master/images/h48/hfa/30951695867934/624Wx724H_70455_Black-0-NEA601BlackModelFront3/624Wx724H-70455-Black-0-NEA601BlackModelFront3.jpg",
                    "Navy": "https://cdnp.sanmar.com/medias/sys_master/images/h9f/h1a/30951696916510/624Wx724H_70455_TrueNavy-0-NEA601TrueNavyModelFront3/624Wx724H-70455-TrueNavy-0-NEA601TrueNavyModelFront3.jpg",
                    "Forest": "https://cdnp.sanmar.com/medias/sys_master/images/he0/h83/30951695802398/624Wx724H_70455_ForestGrn-0-NEA601ForestGrnModelFront3/624Wx724H-70455-ForestGrn-0-NEA601ForestGrnModelFront3.jpg",
                    "Maroon": "https://cdnp.sanmar.com/medias/sys_master/images/hb2/hfe/30951696425982/624Wx724H_70455_DkMaroon-0-NEA601DkMaroonModelFront3/624Wx724H-70455-DkMaroon-0-NEA601DkMaroonModelFront3.jpg"
                },
                availableColors: ["Black", "Navy", "Forest", "Maroon"],
                sortOrder: 4
            },
            {
                id: "puffer-jacket",
                title: "Packable Puffer Jacket",
                brand: "Port Authority",
                label: "Premium Warmth",
                blurb: "Warm, lightweight, and packs into its own pocket.",
                description: "Modern insulation technology in a sleek profile. Water-repellent shell and warm poly-fill insulation.",
                image: "/assets/products/port-puffer-black-model.jpg",
                tags: ["Premium", "Warmth", "Layering"],
                tier: "premium",
                msrp: "$95.00",
                colorImages: {
                    "Black": "https://cdnp.sanmar.com/medias/sys_master/images/h57/h59/30952249835550/624Wx724H_6453_Black-0-J7900BlackModelFront3/624Wx724H-6453-Black-0-J7900BlackModelFront3.jpg",
                    "Navy": "https://cdnp.sanmar.com/medias/sys_master/images/h73/h1f/30952250392606/624Wx724H_6453_TrueNavy-0-J7900TrueNavyModelFront3/624Wx724H-6453-TrueNavy-0-J7900TrueNavyModelFront3.jpg",
                    "Charcoal": "https://cdnp.sanmar.com/medias/sys_master/images/h61/h58/30952250163230/624Wx724H_6453-CharGry-0-J7900CharGryModelFront3/624Wx724H-6453-CharGry-0-J7900CharGryModelFront3.jpg",
                    "Royal": "https://cdnp.sanmar.com/medias/sys_master/images/h8b/h13/30952250884126/624Wx724H_6453_TrueRoyal-0-J7900TrueRoyalModelFront3/624Wx724H-6453-TrueRoyal-0-J7900TrueRoyalModelFront3.jpg"
                },
                availableColors: ["Black", "Navy", "Charcoal", "Royal"],
                sortOrder: 5
            },
            {
                id: "fleece-vest",
                title: "Microfleece Vest",
                brand: "Port Authority",
                label: "Core Layer",
                blurb: "Lightweight warmth. Anti-pill finish.",
                description: "The perfect corporate layer. Soft microfleece adds warmth without bulk. Great for uniforming.",
                image: "/assets/products/port-vest-black-model.jpg",
                tags: ["Core", "Office", "Layering"],
                tier: "core",
                msrp: "$34.00",
                colorImages: {
                    "Black": "https://cdnp.sanmar.com/medias/sys_master/images/h55/h11/30951809589278/624Wx724H_5815_Black-0-F226BlackModelFront3/624Wx724H-5815-Black-0-F226BlackModelFront3.jpg",
                    "Navy": "https://cdnp.sanmar.com/medias/sys_master/images/hf6/h4a/30951810375710/624Wx724H_5815_TrueNavy-0-F226TrueNavyModelFront3/624Wx724H-5815-TrueNavy-0-F226TrueNavyModelFront3.jpg",
                    "Charcoal": "https://cdnp.sanmar.com/medias/sys_master/images/h47/h08/30951809196062/624Wx724H_5815_CharGry-0-F226CharGryModelFront3/624Wx724H-5815-CharGry-0-F226CharGryModelFront3.jpg"
                },
                availableColors: ["Black", "Navy", "Charcoal"],
                sortOrder: 6
            }
        ]
    },
    {
        group: "Bags",
        items: [
            {
                id: "port-duffle",
                title: "Value Duffle Bag",
                brand: "Port Authority",
                label: "Value Standard",
                blurb: "A classic gym/travel duffle. Durable 600 denier polyester.",
                description: "Simple, durable, and effective. Large main compartment with a side pocket. Good for gym kits or weekend trips.",
                image: "/assets/products/port-authority-duffle.png",
                tags: ["Value", "Durable", "Travel"],
                tier: "value",
                msrp: "$26.00",
                colorImages: {
                    "Black": "https://www.sanmar.com/medias/sys_master/images/images/h69/h10/8935043833886/6219_Black-1-BG800blackfront-624Wx724H.jpg",
                    "Red": "https://www.sanmar.com/medias/sys_master/images/images/h25/hba/8935044259870/6219_Red-1-BG800redfront-624Wx724H.jpg",
                    "Royal": "https://www.sanmar.com/medias/sys_master/images/images/h29/h8f/8935044653086/6219_TrueRoyal-1-BG800trueroyalfront-624Wx724H.jpg",
                    "Navy": "https://www.sanmar.com/medias/sys_master/images/images/h92/hba/8935044554782/6219_TrueNavy-1-BG800truenavyfront-624Wx724H.jpg"
                },
                availableColors: ["Black", "Red", "Royal", "Navy"],
                sortOrder: 1
            },
            {
                id: "ogio-metro",
                title: "Metro Pack",
                brand: "OGIO",
                label: "Premium Tech",
                blurb: "The ultimate tech backpack. Dedicated laptop sleeve and massive storage.",
                description: "The OGIO Metro is a legend. Tons of pockets, comfortable straps, and a dedicated fleece-lined laptop compartment. The standard for tech companies.",
                image: "/assets/products/ogio-metro-pack.png",
                tags: ["Premium", "Laptop", "Tech"],
                tier: "premium",
                msrp: "$85.00",
                colorImages: {
                    "Black": "https://cdnp.sanmar.com/medias/sys_master/images/hde/h2b/15706903281694/624Wx724H_1642_Black-0-711105BlackBagFront2/624Wx724H-1642-Black-0-711105BlackBagFront2.jpg",
                    "Charcoal": "https://cdnp.sanmar.com/medias/sys_master/images/hb0/he4/15706903674910/624Wx724H_1642_Noise-0-711105NoiseBagFront/624Wx724H-1642-Noise-0-711105NoiseBagFront.jpg"
                },
                availableColors: ["Black", "Charcoal"],
                sortOrder: 2
            },
            {
                id: "tote-canvas",
                title: "Heavy Canvas Tote",
                brand: "Port Authority",
                label: "Core Promo",
                blurb: "Durable 12oz cotton canvas. 10.5L capacity.",
                description: "A tote that lasts. Heavyweight canvas stands up to grocery runs and book hauling. Massive imprint area.",
                image: "/assets/products/canvas-tote-natural.png",
                tags: ["Core", "Promo", "Screen Print"],
                tier: "core",
                msrp: "$12.50",
                colorImages: {
                    "Black": "https://cdnp.sanmar.com/medias/sys_master/images/h42/h52/30951945445406/624Wx724H_2177_Black-0-B118BlackBagFront2/624Wx724H-2177-Black-0-B118BlackBagFront2.jpg",
                    "Navy": "https://cdnp.sanmar.com/medias/sys_master/images/h0e/h50/30951946821662/624Wx724H_2177_Navy-0-B118NavyBagFront2/624Wx724H-2177-Navy-0-B118NavyBagFront2.jpg",
                    "Red": "https://cdnp.sanmar.com/medias/sys_master/images/hc3/h31/30951947673630/624Wx724H_2177_Red-0-B118RedBagFront2/624Wx724H-2177-Red-0-B118RedBagFront2.jpg",
                    "Royal": "https://cdnp.sanmar.com/medias/sys_master/images/h7a/hd6/30951947804702/624Wx724H_2177_Royal-0-B118RoyalBagFront2/624Wx724H-2177-Royal-0-B118RoyalBagFront2.jpg",
                    "Forest": "https://cdnp.sanmar.com/medias/sys_master/images/h00/h8f/30951945281566/624Wx724H_2177_ForestGreen-0-B118ForestGreenBagFront2/624Wx724H-2177-ForestGreen-0-B118ForestGreenBagFront2.jpg"
                },
                availableColors: ["Black", "Navy", "Red", "Royal", "Forest"],
                sortOrder: 3
            },
            {
                id: "blanket-fleece",
                title: "Fleece Stadium Blanket",
                brand: "Port Authority",
                label: "Core Event",
                blurb: "Soft, warm, and colorful. 50x60 dimensions.",
                description: "A crowd pleaser. Anti-pill fleece in a huge range of colors. Perfect for outdoor events.",
                image: "/assets/products/fleece-blanket.png",
                tags: ["Core", "Events", "Embroidery"],
                tier: "core",
                colorImages: {
                    "Black": "https://cdnp.sanmar.com/medias/sys_master/images/h8a/h56/30952114659358/624Wx724H_1991_Black-0-BP10BlackBlanketFlat/624Wx724H-1991-Black-0-BP10BlackBlanketFlat.jpg",
                    "Navy": "https://cdnp.sanmar.com/medias/sys_master/images/hcd/h53/30952115511326/624Wx724H_1991_Navy-0-BP10NavyBlanketFlat/624Wx724H-1991-Navy-0-BP10NavyBlanketFlat.jpg",
                    "Red": "https://cdnp.sanmar.com/medias/sys_master/images/h9f/h30/30952116035614/624Wx724H_1991_Red-0-BP10RedBlanketFlat/624Wx724H-1991-Red-0-BP10RedBlanketFlat.jpg",
                    "Royal": "https://cdnp.sanmar.com/medias/sys_master/images/h66/h2f/30952116166686/624Wx724H_1991_Royal-0-BP10RoyalBlanketFlat/624Wx724H-1991-Royal-0-BP10RoyalBlanketFlat.jpg",
                    "Forest": "https://cdnp.sanmar.com/medias/sys_master/images/hcf/h31/30952114954270/624Wx724H_1991_ForestGreen-0-BP10ForestGreenBlanketFlat/624Wx724H-1991-ForestGreen-0-BP10ForestGreenBlanketFlat.jpg",
                    "Charcoal": "https://cdnp.sanmar.com/medias/sys_master/images/h03/h54/30952114528286/624Wx724H_1991-Charcoal-0-BP10CharcoalBlanketFlat/624Wx724H-1991-Charcoal-0-BP10CharcoalBlanketFlat.jpg"
                },
                availableColors: ["Black", "Navy", "Red", "Royal", "Forest", "Charcoal"],
                msrp: "$32.00",
                sortOrder: 4
            }
        ]
    },
    {
        group: "Polos",
        items: [
            {
                id: "port-k500",
                title: "Silk Touch™ Polo",
                brand: "Port Authority",
                label: "Value Uniform",
                blurb: "Legendary durability and value. 65/35 Poly/Cotton pique blend.",
                description: "The Port Authority K500 Silk Touch Polo is the industry standard for corporate uniforms. Affordable, durable, and professional with exceptional color retention.",
                image: "/assets/products/port-k500-silktouch-model.png",
                tags: ["Value", "Unisex", "Embroidery"],
                tier: "value",
                msrp: "$24.00",
                colorImages: {
                    'White': '/assets/products/port-k500-silktouch-model.png',
                    'Black': '/assets/products/port-k500-silktouch-model.png',
                    'Navy': '/assets/products/port-k500-silktouch-model.png',
                    'Royal': '/assets/products/port-k500-silktouch-model.png',
                    'Red': '/assets/products/port-k500-silktouch-model.png',
                    'Charcoal': '/assets/products/port-k500-silktouch-model.png',
                    'Forest Green': '/assets/products/port-k500-silktouch-model.png',
                    'Burgundy': '/assets/products/port-k500-silktouch-model.png',
                    'Dark Green': '/assets/products/port-k500-silktouch-model.png'
                },
                availableColors: ['White', 'Black', 'Navy', 'Royal', 'Red', 'Charcoal', 'Forest Green', 'Burgundy', 'Dark Green'],
                decorationMethods: ['Embroidery', 'Heat Transfer', 'Screen Print'],
                sizesAvailable: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
                inStock: true,
                sortOrder: 1
            },
            {
                id: "ogio-caliber",
                title: "Caliber 2.0 Polo",
                brand: "OGIO",
                label: "Core Performance",
                blurb: "Modern tech-fleece style polo with moisture wicking and stay-cool technology.",
                description: "Technical performance polo with stay-cool wicking.",
                image: "https://cdnp.sanmar.com/medias/sys_master/images/h92/hf7/30945889026078/624Wx724H_3540_BrtWhite-0-OG101BrtWhiteModelFront6/624Wx724H-3540-BrtWhite-0-OG101BrtWhiteModelFront6.jpg",
                tags: ["Core", "Unisex", "Embroidery"],
                tier: "core",
                msrp: "$29.00",
                colorImages: {
                    'White': 'https://cdnp.sanmar.com/medias/sys_master/images/h92/hf7/30945889026078/624Wx724H_3540_BrtWhite-0-OG101BrtWhiteModelFront6/624Wx724H-3540-BrtWhite-0-OG101BrtWhiteModelFront6.jpg',
                    'Black': 'https://cdnp.sanmar.com/medias/sys_master/images/h33/hb3/30945888632862/624Wx724H_3540_Blacktop-0-OG101BlacktopModelFront6/624Wx724H-3540-Blacktop-0-OG101BlacktopModelFront6.jpg',
                    'Navy': 'https://cdnp.sanmar.com/medias/sys_master/images/h59/h2a/30945890336798/624Wx724H_3540_Navy-0-OG101NavyModelFront6/624Wx724H-3540-Navy-0-OG101NavyModelFront6.jpg',
                    'Royal': 'https://cdnp.sanmar.com/medias/sys_master/images/h05/hea/30945889419294/624Wx724H_3540_ElecBlue-0-OG101ElecBlueModelFront6/624Wx724H-3540-ElecBlue-0-OG101ElecBlueModelFront6.jpg',
                    'Red': 'https://cdnp.sanmar.com/medias/sys_master/images/h50/h38/30945890762782/624Wx724H_3540_SignalRed-0-OG101SignalRedModelFront6/624Wx724H-3540-SignalRed-0-OG101SignalRedModelFront6.jpg',
                    'Charcoal': 'https://cdnp.sanmar.com/medias/sys_master/images/he8/hae/30947249291294/624Wx724H_3540_DieselGrey-0-OG101DieselGreyModelFront7/624Wx724H-3540-DieselGrey-0-OG101DieselGreyModelFront7.jpg'
                },
                availableColors: ['White', 'Black', 'Navy', 'Royal', 'Red', 'Charcoal'],
                decorationMethods: ['Embroidery', 'Heat Transfer'],
                sizesAvailable: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
                inStock: true,
                sortOrder: 2
            },
            {
                id: "mm-1005",
                title: "Stretch Pique Polo",
                brand: "Mercer+Mettle",
                label: "Premium Executive",
                blurb: "Sophisticated styling with doubled yarns for a polish that lasts.",
                description: "Premium stretch pique polo with modern fit.",
                image: "https://cdnp.sanmar.com/medias/sys_master/images/hf8/h1a/30946077573150/624Wx724H_38476_White-0-MM1005WhiteModelFront3/624Wx724H-38476-White-0-MM1005WhiteModelFront3.jpg",
                tags: ["Premium", "Unisex", "Embroidery"],
                tier: "premium",
                msrp: "$32.00",
                colorImages: {
                    'White': 'https://cdnp.sanmar.com/medias/sys_master/images/hf8/h1a/30946077573150/624Wx724H_38476_White-0-MM1005WhiteModelFront3/624Wx724H-38476-White-0-MM1005WhiteModelFront3.jpg',
                    'Black': 'https://cdnp.sanmar.com/medias/sys_master/images/h5e/h8c/30954714595358/624Wx724H_38476_DeepBlack-0-MM1005DeepBlackModelFront4/624Wx724H-38476-DeepBlack-0-MM1005DeepBlackModelFront4.jpg',
                    'Navy': 'https://cdnp.sanmar.com/medias/sys_master/images/h4f/h86/30954714726430/624Wx724H_38476_NightNavy-0-MM1005NightNavyModelFront4/624Wx724H-38476-NightNavy-0-MM1005NightNavyModelFront4.jpg',
                    'Red': 'https://cdnp.sanmar.com/medias/sys_master/images/h16/h31/30954715119646/624Wx724H_38476_Rosewood-0-MM1005RosewoodModelFront4/624Wx724H-38476-Rosewood-0-MM1005RosewoodModelFront4.jpg',
                    'Charcoal': 'https://cdnp.sanmar.com/medias/sys_master/images/h44/h2d/30954715250718/624Wx724H_38476_StormGrey-0-MM1005StormGreyModelFront4/624Wx724H-38476-StormGrey-0-MM1005StormGreyModelFront4.jpg'
                },
                availableColors: ['White', 'Black', 'Navy', 'Red', 'Charcoal'],
                decorationMethods: ['Embroidery', 'Heat Transfer'],
                sizesAvailable: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
                inStock: true,
                sortOrder: 3
            },
            {
                id: "shirt-oxford",
                title: "SuperPro™ Oxford",
                brand: "Port Authority",
                label: "Core Office",
                blurb: "Wrinkle-resistant, stain-release finish. Professional standard.",
                description: "The daily driver for office wear. Durable, crisp, and easy to care for.",
                image: "/assets/products/s658-placeholder.png",
                tags: ["Core", "Unisex", "Office"],
                tier: "core",
                msrp: "$36.00",
                colorImages: {
                    "White": "/assets/products/s658-placeholder.png",
                    "Black": "/assets/products/s658-placeholder.png",
                    "Navy": "/assets/products/s658-placeholder.png",
                    "Royal": "/assets/products/s658-placeholder.png"
                },
                availableColors: ["White", "Black", "Navy", "Royal"],
                sortOrder: 4
            },
            {
                id: "shirt-work",
                title: "Industrial Work Shirt",
                brand: "Red Kap",
                label: "Core Industrial",
                blurb: "Built for tough jobs. Touchtex™ technology for color retention.",
                description: "The standard for mechanics and industrial crews. Virtually indestructible.",
                image: "/assets/products/sp14-placeholder.png",
                tags: ["Core", "Industrial", "Durable"],
                tier: "core",
                msrp: "$32.00",
                colorImages: {
                    "Black": "/assets/products/sp14-placeholder.png",
                    "Navy": "/assets/products/sp14-placeholder.png",
                    "Charcoal": "/assets/products/sp14-placeholder.png",
                    "Grey": "/assets/products/sp14-placeholder.png"
                },
                availableColors: ["Black", "Navy", "Charcoal", "Grey"],
                sortOrder: 5
            }
        ]
    },
    {
        group: "Business Cards",
        items: [
            {
                id: "cards-standard",
                title: "Standard Matte/Gloss",
                brand: "4over",
                label: "Good",
                blurb: "Professional 14pt or 16pt stock with standard finishes.",
                description: "Classic business cards. Choose 14pt or 16pt stock with UV Gloss or Matte finish. The workhorse of networking.",
                image: "/assets/products/cards-standard.png",
                tags: ["Print", "Value"],
                tier: "value",
                msrp: "$45.00",
                sortOrder: 1
            },
            {
                id: "cards-premium",
                title: "Suede / Soft Touch",
                brand: "4over",
                label: "Better",
                blurb: "Velvet-smooth lamination that feels soft to the touch.",
                description: "Upgrade to Suede (Soft Touch) lamination. Scuff resistant and feels distinctly premium in the hand.",
                image: "/assets/products/cards-suede.png",
                tags: ["Print", "Core"],
                tier: "core",
                msrp: "$65.00",
                sortOrder: 2
            },
            {
                id: "cards-specialty",
                title: "Silk + Spot UV / Foil",
                brand: "4over",
                label: "Best",
                blurb: "Silk laminated stock with high-gloss Spot UV highlights or metallic foil.",
                description: "The ultimate impression. Silk lamination provides a water-resistant, durable base, while rising Spot UV or Metallic Foil highlights your logo.",
                image: "/assets/products/cards-spotuv.png",
                tags: ["Print", "Premium", "Spot UV"],
                tier: "premium",
                msrp: "$95.00",
                sortOrder: 3
            }
        ]
    }
];
