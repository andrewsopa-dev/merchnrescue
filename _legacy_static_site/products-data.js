const PRODUCT_CATEGORIES = [
  {
    group: "Tees",
    items: [
      {
        id: "tees-ss-value",
        title: "Short Sleeve Tees",
        label: "Value : Unisex",
        blurb: "Affordable everyday tees for events, giveaways, and high-volume promotional runs.",
        tags: ["Value", "Unisex", "DTF", "Screen"],
        tier: "value",
        sortOrder: 1
      },
      {
        id: "tees-ss-core",
        title: "Short Sleeve Tees",
        label: "Core : Unisex",
        blurb: "Soft ringspun cotton with modern fit. The go-to blank for most projects.",
        tags: ["Core", "Unisex", "DTF", "Screen"],
        tier: "core",
        sortOrder: 2
      },
      {
        id: "tees-ss-premium",
        title: "Short Sleeve Tees",
        label: "Premium : Unisex",
        blurb: "Heavyweight retail-quality blanks. Garment-dyed and specialty fabrics available.",
        tags: ["Premium", "Unisex", "DTF", "Screen"],
        tier: "premium",
        sortOrder: 3
      },
      {
        id: "tees-ls",
        title: "Long Sleeve Tees",
        label: "Core : Unisex",
        blurb: "Year-round layering basics in lightweight and midweight cotton options.",
        tags: ["Core", "Unisex", "DTF", "Screen"],
        tier: "core",
        sortOrder: 4
      },
      {
        id: "tees-womens",
        title: "Fitted Tees",
        label: "Core : Women's",
        blurb: "Women's cut tees in slim and relaxed fits with modern silhouettes.",
        tags: ["Core", "Women's", "DTF", "Screen"],
        tier: "core",
        sortOrder: 5
      },
      {
        id: "tanks",
        title: "Tanks & Muscle Tees",
        label: "Core : Unisex",
        blurb: "Racerback, crop, and classic tanks for events, fitness, and warm weather.",
        tags: ["Core", "Unisex", "DTF", "Screen"],
        tier: "core",
        sortOrder: 6
      },
      {
        id: "tees-youth",
        title: "Youth Tees",
        label: "Core : Unisex",
        blurb: "Kids and youth sizes in soft cotton. Perfect for camps, schools, and family events.",
        tags: ["Core", "Unisex", "DTF", "Screen"],
        tier: "core",
        sortOrder: 7
      }
    ]
  },
  {
    group: "Hoodies & Fleece",
    items: [
      {
        id: "hoodies-value",
        title: "Pullover Hoodies",
        label: "Value : Unisex",
        blurb: "Budget-friendly fleece for large orders, uniforms, and promotional giveaways.",
        tags: ["Value", "Unisex", "DTF", "Screen"],
        tier: "value",
        sortOrder: 1
      },
      {
        id: "hoodies-core",
        title: "Pullover Hoodies",
        label: "Core : Unisex",
        blurb: "Midweight fleece with modern fit. Great all-around choice for most projects.",
        tags: ["Core", "Unisex", "DTF", "Screen", "Embroidery"],
        tier: "core",
        sortOrder: 2
      },
      {
        id: "hoodies-premium",
        title: "Pullover Hoodies",
        label: "Premium : Unisex",
        blurb: "Heavyweight blanks with retail quality hand feel and construction.",
        tags: ["Premium", "Unisex", "DTF", "Embroidery"],
        tier: "premium",
        sortOrder: 3
      },
      {
        id: "hoodies-zip",
        title: "Zip Hoodies",
        label: "Core : Unisex",
        blurb: "Full-zip fleece hoodies in standard and lightweight options.",
        tags: ["Core", "Unisex", "DTF", "Embroidery"],
        tier: "core",
        sortOrder: 4
      },
      {
        id: "crews",
        title: "Crewneck Sweatshirts",
        label: "Core : Unisex",
        blurb: "Classic crewnecks in fleece and french terry weights.",
        tags: ["Core", "Unisex", "DTF", "Screen", "Embroidery"],
        tier: "core",
        sortOrder: 5
      },
      {
        id: "quarter-zips",
        title: "Quarter-Zips",
        label: "Core : Unisex",
        blurb: "Pullover quarter-zips for corporate, athletic, and casual wear.",
        tags: ["Core", "Unisex", "Embroidery"],
        tier: "core",
        sortOrder: 6
      },
      {
        id: "hoodies-womens",
        title: "Cropped Hoodies",
        label: "Core : Women's",
        blurb: "Women's cropped and fitted fleece silhouettes for retail and events.",
        tags: ["Core", "Women's", "DTF", "Embroidery"],
        tier: "core",
        sortOrder: 7
      }
    ]
  },
  {
    group: "Jackets & Outerwear",
    items: [
      {
        id: "coach-jackets",
        title: "Coach Jackets",
        label: "Core : Unisex",
        blurb: "Lightweight nylon shells with snap closures. Street-ready styling.",
        tags: ["Core", "Unisex", "Outerwear", "Screen", "Embroidery"],
        tier: "core",
        sortOrder: 1
      },
      {
        id: "windbreakers",
        title: "Windbreakers",
        label: "Core : Unisex",
        blurb: "Packable pullovers and zip-ups for athletic and casual layering.",
        tags: ["Core", "Unisex", "Outerwear", "Screen", "Embroidery"],
        tier: "core",
        sortOrder: 2
      },
      {
        id: "softshells",
        title: "Softshell Jackets",
        label: "Premium : Unisex",
        blurb: "Water-resistant stretch shells for corporate and outdoor applications.",
        tags: ["Premium", "Unisex", "Outerwear", "Embroidery"],
        tier: "premium",
        sortOrder: 3
      },
      {
        id: "puffers",
        title: "Puffer Jackets",
        label: "Premium : Unisex",
        blurb: "Insulated outerwear for cold weather. Quilted and packable options.",
        tags: ["Premium", "Unisex", "Outerwear", "Embroidery", "Patches"],
        tier: "premium",
        sortOrder: 4
      },
      {
        id: "fleece-jackets",
        title: "Fleece Jackets",
        label: "Core : Unisex",
        blurb: "Full-zip polar fleece, sherpa, and microfleece options.",
        tags: ["Core", "Unisex", "Outerwear", "Embroidery"],
        tier: "core",
        sortOrder: 5
      },
      {
        id: "vests",
        title: "Vests",
        label: "Core : Unisex",
        blurb: "Insulated and fleece vests for layering and corporate wear.",
        tags: ["Core", "Unisex", "Outerwear", "Embroidery"],
        tier: "core",
        sortOrder: 6
      }
    ]
  },
  {
    group: "Headwear",
    items: [
      {
        id: "caps-structured",
        title: "Structured Caps",
        label: "Core : Unisex",
        blurb: "5-panel, 6-panel, and snapback caps with structured crowns.",
        tags: ["Core", "Unisex", "Headwear", "Embroidery", "Patches"],
        tier: "core",
        sortOrder: 1
      },
      {
        id: "caps-dad",
        title: "Dad Hats",
        label: "Core : Unisex",
        blurb: "Relaxed unstructured caps with adjustable straps. Casual and versatile.",
        tags: ["Core", "Unisex", "Headwear", "Embroidery"],
        tier: "core",
        sortOrder: 2
      },
      {
        id: "caps-trucker",
        title: "Trucker Caps",
        label: "Core : Unisex",
        blurb: "Mesh-back caps with foam fronts. Classic snapback closure.",
        tags: ["Core", "Unisex", "Headwear", "Embroidery", "Patches"],
        tier: "core",
        sortOrder: 3
      },
      {
        id: "caps-performance",
        title: "Performance Caps",
        label: "Core : Unisex",
        blurb: "Moisture-wicking athletic caps for sports, outdoor, and fitness brands.",
        tags: ["Core", "Unisex", "Headwear", "Embroidery"],
        tier: "core",
        sortOrder: 4
      },
      {
        id: "beanies",
        title: "Beanies",
        label: "Core : Unisex",
        blurb: "Knit beanies in cuffed, slouch, and pom styles for cold weather.",
        tags: ["Core", "Unisex", "Headwear", "Embroidery", "Patches"],
        tier: "core",
        sortOrder: 5
      },
      {
        id: "bucket-hats",
        title: "Bucket Hats",
        label: "Core : Unisex",
        blurb: "Cotton and nylon bucket hats for casual and streetwear branding.",
        tags: ["Core", "Unisex", "Headwear", "Embroidery", "Screen"],
        tier: "core",
        sortOrder: 6
      }
    ]
  },
  {
    group: "Polos & Wovens",
    items: [
      {
        id: "polos-value",
        title: "Polos",
        label: "Value : Unisex",
        blurb: "Budget pique polos for uniforms, hospitality, and large corporate orders.",
        tags: ["Value", "Unisex", "Embroidery"],
        tier: "value",
        sortOrder: 1
      },
      {
        id: "polos-core",
        title: "Polos",
        label: "Core : Unisex",
        blurb: "Performance and pique polos with modern fit and moisture management.",
        tags: ["Core", "Unisex", "Embroidery"],
        tier: "core",
        sortOrder: 2
      },
      {
        id: "polos-premium",
        title: "Polos",
        label: "Premium : Unisex",
        blurb: "Retail-quality polos with elevated fabrics, finishes, and construction.",
        tags: ["Premium", "Unisex", "Embroidery"],
        tier: "premium",
        sortOrder: 3
      },
      {
        id: "polos-womens",
        title: "Women's Polos",
        label: "Core : Women's",
        blurb: "Fitted and relaxed women's polos for corporate and hospitality.",
        tags: ["Core", "Women's", "Embroidery"],
        tier: "core",
        sortOrder: 4
      },
      {
        id: "button-downs",
        title: "Button-Downs",
        label: "Core : Unisex",
        blurb: "Oxford and twill dress shirts for corporate, hospitality, and retail.",
        tags: ["Core", "Unisex", "Embroidery"],
        tier: "core",
        sortOrder: 5
      },
      {
        id: "work-shirts",
        title: "Work Shirts",
        label: "Core : Unisex",
        blurb: "Durable twill and canvas shirts for trades, industrial, and outdoor.",
        tags: ["Core", "Unisex", "Embroidery", "Patches"],
        tier: "core",
        sortOrder: 6
      }
    ]
  },
  {
    group: "Bags & Accessories",
    items: [
      {
        id: "backpacks",
        title: "Backpacks",
        label: "Core : Unisex",
        blurb: "Everyday carries and laptop bags for corporate gifts and retail.",
        tags: ["Core", "Unisex", "Bags", "Embroidery", "Patches"],
        tier: "core",
        sortOrder: 1
      },
      {
        id: "duffels",
        title: "Duffel & Gym Bags",
        label: "Core : Unisex",
        blurb: "Travel duffels and athletic bags in various sizes and materials.",
        tags: ["Core", "Unisex", "Bags", "Embroidery", "Screen"],
        tier: "core",
        sortOrder: 2
      },
      {
        id: "totes",
        title: "Totes",
        label: "Core : Unisex",
        blurb: "Canvas and cotton totes for events, retail, and everyday use.",
        tags: ["Core", "Unisex", "Bags", "Screen", "DTF"],
        tier: "core",
        sortOrder: 3
      },
      {
        id: "pouches",
        title: "Pouches & Dopp Kits",
        label: "Core : Unisex",
        blurb: "Zippered pouches, cosmetic bags, and travel organizers.",
        tags: ["Core", "Unisex", "Bags", "Embroidery", "Screen"],
        tier: "core",
        sortOrder: 4
      },
      {
        id: "drinkware",
        title: "Drinkware",
        label: "Core : Unisex",
        blurb: "Stainless tumblers, water bottles, and ceramic mugs.",
        tags: ["Core", "Unisex", "Laser", "Print"],
        tier: "core",
        sortOrder: 5
      },
      {
        id: "blankets",
        title: "Blankets & Towels",
        label: "Core : Unisex",
        blurb: "Fleece blankets, beach towels, and rally towels for events.",
        tags: ["Core", "Unisex", "Embroidery", "Screen"],
        tier: "core",
        sortOrder: 6
      }
    ]
  },
  {
    group: "Stickers, Labels & Packaging",
    items: [
      {
        id: "stickers-diecut",
        title: "Die-Cut Stickers",
        label: "Custom Shape",
        blurb: "Weatherproof vinyl stickers cut to your exact design shape.",
        tags: ["Print"],
        tier: "core",
        sortOrder: 1
      },
      {
        id: "stickers-sheet",
        title: "Sticker Sheets",
        label: "Multi-Design",
        blurb: "Multiple designs on a single sheet. Kiss-cut for easy peel.",
        tags: ["Print"],
        tier: "core",
        sortOrder: 2
      },
      {
        id: "labels-woven",
        title: "Woven Labels",
        label: "Branding",
        blurb: "Sewn-in woven labels for professional garment branding.",
        tags: ["Woven"],
        tier: "core",
        sortOrder: 3
      },
      {
        id: "labels-hang",
        title: "Hang Tags",
        label: "Branding",
        blurb: "Custom printed hang tags for retail presentation.",
        tags: ["Print"],
        tier: "core",
        sortOrder: 4
      },
      {
        id: "patches",
        title: "Patches",
        label: "Embroidered & Woven",
        blurb: "Iron-on, velcro, and sew-on patches for apparel branding.",
        tags: ["Embroidered", "Woven", "Patches"],
        tier: "core",
        sortOrder: 5
      },
      {
        id: "pins",
        title: "Enamel Pins",
        label: "Hard & Soft",
        blurb: "Custom enamel pins in hard and soft finishes with various backings.",
        tags: ["Metal"],
        tier: "core",
        sortOrder: 6
      },
      {
        id: "packaging",
        title: "Packaging",
        label: "Boxes & Mailers",
        blurb: "Custom boxes, poly mailers, tissue paper, and shipping supplies.",
        tags: ["Print"],
        tier: "core",
        sortOrder: 7
      }
    ]
  }
];
