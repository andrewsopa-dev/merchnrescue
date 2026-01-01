const PRODUCT_CATEGORIES = [
  {
    group: "Tees",
    items: [
      {
        id: "tees-ss-value",
        title: "Short Sleeve Tees",
        label: "Value : Unisex",
        blurb: "Affordable everyday tees for events, giveaways, and high-volume runs.",
        tags: ["DTF", "Screen"],
        image: "assets/placeholder.svg",
        sortOrder: 1
      },
      {
        id: "tees-ss-core",
        title: "Short Sleeve Tees",
        label: "Core : Unisex",
        blurb: "Soft ringspun cotton with modern fit. The go-to for most projects.",
        tags: ["DTF", "Screen", "Embroidery"],
        image: "assets/placeholder.svg",
        sortOrder: 2
      },
      {
        id: "tees-ss-premium",
        title: "Short Sleeve Tees",
        label: "Premium : Unisex",
        blurb: "Heavyweight retail-quality blanks. Garment-dyed and specialty fabrics.",
        tags: ["DTF", "Screen"],
        image: "assets/placeholder.svg",
        sortOrder: 3
      },
      {
        id: "tees-ls",
        title: "Long Sleeve Tees",
        label: "Core : Unisex",
        blurb: "Year-round layering basics in lightweight and midweight options.",
        tags: ["DTF", "Screen"],
        image: "assets/placeholder.svg",
        sortOrder: 4
      },
      {
        id: "tees-womens",
        title: "Fitted Tees",
        label: "Core : Women's",
        blurb: "Women's cut tees in slim and relaxed fits with modern silhouettes.",
        tags: ["DTF", "Screen"],
        image: "assets/placeholder.svg",
        sortOrder: 5
      },
      {
        id: "tanks",
        title: "Tanks & Muscle Tees",
        label: "Core : Unisex",
        blurb: "Racerback, crop, and classic tanks for events and warm weather.",
        tags: ["DTF", "Screen"],
        image: "assets/placeholder.svg",
        sortOrder: 6
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
        blurb: "Budget-friendly fleece for large orders and promotional use.",
        tags: ["DTF", "Screen"],
        image: "assets/placeholder.svg",
        sortOrder: 1
      },
      {
        id: "hoodies-core",
        title: "Pullover Hoodies",
        label: "Core : Unisex",
        blurb: "Midweight fleece with modern fit. Great all-around choice.",
        tags: ["DTF", "Screen", "Embroidery"],
        image: "assets/placeholder.svg",
        sortOrder: 2
      },
      {
        id: "hoodies-premium",
        title: "Pullover Hoodies",
        label: "Premium : Unisex",
        blurb: "Heavyweight blanks with retail quality. Independent, Champion tier.",
        tags: ["DTF", "Embroidery"],
        image: "assets/placeholder.svg",
        sortOrder: 3
      },
      {
        id: "hoodies-zip",
        title: "Zip Hoodies",
        label: "Core : Unisex",
        blurb: "Full-zip fleece in standard and lightweight options.",
        tags: ["DTF", "Screen", "Embroidery"],
        image: "assets/placeholder.svg",
        sortOrder: 4
      },
      {
        id: "crews",
        title: "Crewneck Sweatshirts",
        label: "Core : Unisex",
        blurb: "Classic crewnecks in fleece and french terry weights.",
        tags: ["DTF", "Screen", "Embroidery"],
        image: "assets/placeholder.svg",
        sortOrder: 5
      },
      {
        id: "quarter-zips",
        title: "Quarter-Zips",
        label: "Core : Unisex",
        blurb: "Pullover quarter-zips for corporate and athletic wear.",
        tags: ["Embroidery"],
        image: "assets/placeholder.svg",
        sortOrder: 6
      },
      {
        id: "hoodies-womens",
        title: "Cropped Hoodies",
        label: "Core : Women's",
        blurb: "Women's cropped and fitted fleece silhouettes.",
        tags: ["DTF", "Embroidery"],
        image: "assets/placeholder.svg",
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
        blurb: "Lightweight nylon shells with snap closures. Street-ready.",
        tags: ["Screen", "Embroidery"],
        image: "assets/placeholder.svg",
        sortOrder: 1
      },
      {
        id: "windbreakers",
        title: "Windbreakers",
        label: "Core : Unisex",
        blurb: "Packable pullovers and zip-ups for athletic and casual use.",
        tags: ["Screen", "Embroidery"],
        image: "assets/placeholder.svg",
        sortOrder: 2
      },
      {
        id: "softshells",
        title: "Softshell Jackets",
        label: "Premium : Unisex",
        blurb: "Water-resistant stretch shells for corporate and outdoor wear.",
        tags: ["Embroidery"],
        image: "assets/placeholder.svg",
        sortOrder: 3
      },
      {
        id: "puffers",
        title: "Puffer Jackets",
        label: "Premium : Unisex",
        blurb: "Insulated outerwear for cold weather. Quilted and packable options.",
        tags: ["Embroidery", "Patches"],
        image: "assets/placeholder.svg",
        sortOrder: 4
      },
      {
        id: "fleece-jackets",
        title: "Fleece Jackets",
        label: "Core : Unisex",
        blurb: "Full-zip polar fleece and sherpa options.",
        tags: ["Embroidery"],
        image: "assets/placeholder.svg",
        sortOrder: 5
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
        tags: ["Embroidery", "Patches"],
        image: "assets/placeholder.svg",
        sortOrder: 1
      },
      {
        id: "caps-dad",
        title: "Dad Hats",
        label: "Core : Unisex",
        blurb: "Relaxed unstructured caps with adjustable straps.",
        tags: ["Embroidery"],
        image: "assets/placeholder.svg",
        sortOrder: 2
      },
      {
        id: "caps-trucker",
        title: "Trucker Caps",
        label: "Core : Unisex",
        blurb: "Mesh-back caps with foam fronts and snapback closures.",
        tags: ["Embroidery", "Patches"],
        image: "assets/placeholder.svg",
        sortOrder: 3
      },
      {
        id: "beanies",
        title: "Beanies",
        label: "Core : Unisex",
        blurb: "Knit beanies in cuffed, slouch, and pom styles.",
        tags: ["Embroidery", "Patches"],
        image: "assets/placeholder.svg",
        sortOrder: 4
      },
      {
        id: "bucket-hats",
        title: "Bucket Hats",
        label: "Core : Unisex",
        blurb: "Cotton and nylon bucket hats for casual branding.",
        tags: ["Embroidery", "Screen"],
        image: "assets/placeholder.svg",
        sortOrder: 5
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
        blurb: "Budget pique polos for uniforms and large orders.",
        tags: ["Embroidery"],
        image: "assets/placeholder.svg",
        sortOrder: 1
      },
      {
        id: "polos-core",
        title: "Polos",
        label: "Core : Unisex",
        blurb: "Performance and pique polos with modern fit.",
        tags: ["Embroidery"],
        image: "assets/placeholder.svg",
        sortOrder: 2
      },
      {
        id: "polos-premium",
        title: "Polos",
        label: "Premium : Unisex",
        blurb: "Retail-quality polos with elevated fabrics and finishes.",
        tags: ["Embroidery"],
        image: "assets/placeholder.svg",
        sortOrder: 3
      },
      {
        id: "button-downs",
        title: "Button-Downs",
        label: "Core : Unisex",
        blurb: "Oxford and twill shirts for corporate and hospitality.",
        tags: ["Embroidery"],
        image: "assets/placeholder.svg",
        sortOrder: 4
      },
      {
        id: "work-shirts",
        title: "Work Shirts",
        label: "Core : Unisex",
        blurb: "Durable twill and canvas shirts for trades and industrial use.",
        tags: ["Embroidery", "Patches"],
        image: "assets/placeholder.svg",
        sortOrder: 5
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
        blurb: "Everyday carries and laptop bags. Corporate gifts and retail.",
        tags: ["Embroidery", "Patches"],
        image: "assets/placeholder.svg",
        sortOrder: 1
      },
      {
        id: "duffels",
        title: "Duffel & Gym Bags",
        label: "Core : Unisex",
        blurb: "Travel duffels and athletic bags in various sizes.",
        tags: ["Embroidery", "Screen"],
        image: "assets/placeholder.svg",
        sortOrder: 2
      },
      {
        id: "totes",
        title: "Totes",
        label: "Core : Unisex",
        blurb: "Canvas and cotton totes for events and everyday use.",
        tags: ["Screen", "DTF"],
        image: "assets/placeholder.svg",
        sortOrder: 3
      },
      {
        id: "pouches",
        title: "Pouches & Dopp Kits",
        label: "Core : Unisex",
        blurb: "Zippered pouches, cosmetic bags, and travel organizers.",
        tags: ["Embroidery", "Screen"],
        image: "assets/placeholder.svg",
        sortOrder: 4
      },
      {
        id: "drinkware",
        title: "Drinkware",
        label: "Core : Unisex",
        blurb: "Stainless tumblers, water bottles, and mugs.",
        tags: ["Laser", "Print"],
        image: "assets/placeholder.svg",
        sortOrder: 5
      },
      {
        id: "blankets",
        title: "Blankets & Towels",
        label: "Core : Unisex",
        blurb: "Fleece blankets, beach towels, and rally towels.",
        tags: ["Embroidery", "Screen"],
        image: "assets/placeholder.svg",
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
        image: "assets/placeholder.svg",
        sortOrder: 1
      },
      {
        id: "stickers-sheet",
        title: "Sticker Sheets",
        label: "Multi-Design",
        blurb: "Multiple designs on a single sheet. Kiss-cut for easy peel.",
        tags: ["Print"],
        image: "assets/placeholder.svg",
        sortOrder: 2
      },
      {
        id: "labels-tags",
        title: "Labels & Hang Tags",
        label: "Branding",
        blurb: "Woven labels, printed tags, and custom hang tags.",
        tags: ["Woven", "Print"],
        image: "assets/placeholder.svg",
        sortOrder: 3
      },
      {
        id: "patches",
        title: "Patches",
        label: "Embroidered & Woven",
        blurb: "Iron-on, velcro, and sew-on patches for apparel branding.",
        tags: ["Embroidered", "Woven"],
        image: "assets/placeholder.svg",
        sortOrder: 4
      },
      {
        id: "pins",
        title: "Enamel Pins",
        label: "Hard & Soft",
        blurb: "Custom enamel pins in hard and soft enamel finishes.",
        tags: ["Metal"],
        image: "assets/placeholder.svg",
        sortOrder: 5
      },
      {
        id: "packaging",
        title: "Packaging",
        label: "Boxes & Mailers",
        blurb: "Custom boxes, poly mailers, and tissue paper.",
        tags: ["Print"],
        image: "assets/placeholder.svg",
        sortOrder: 6
      }
    ]
  }
];
