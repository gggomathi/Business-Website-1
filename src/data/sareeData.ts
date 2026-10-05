export interface SareeItem {
  id: string;
  title: string;
  category: 'Cotton' | 'Traditional' | 'Wedding' | 'Festive' | 'New Arrivals';
  description: string;
  image: string;
  highlight: string;
}

export interface CollectionCategory {
  id: string;
  title: string;
  categoryKey: 'Cotton' | 'Traditional' | 'Wedding' | 'Festive' | 'New Arrivals' | 'All';
  description: string;
  image: string;
  badge: string;
}

export const BUSINESS_INFO = {
  name: "RJ FABRICS",
  tagline: "Handloom Sarees",
  address: "No. 890, B, Sakthi Nagar, Narasingapuram Village, Krishnapuram Post, Madathukulam TK, Tiruppur DT – 642111, Tamil Nadu, India",
  addressShort: "Sakthi Nagar, Narasingapuram, Madathukulam TK, Tiruppur – 642111",
  phones: ["79043 96868", "98940 89557"],
  phoneRaw: ["+917904396868", "+919894089557"],
  whatsappNumber: "917904396868",
  whatsappDisplay: "+91 79043 96868",
  email: "jjayakrishnan289@gmail.com",
  gstin: "33ASPPJ3998R1ZL",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=No.+890+B+Sakthi+Nagar+Narasingapuram+Krishnapuram+Madathukulam+Tiruppur+642111+Tamil+Nadu",
  hours: "Mon – Sun: 9:00 AM – 8:30 PM",
  foundedRegion: "Tiruppur District, Tamil Nadu"
};

export const COLLECTIONS_LIST: CollectionCategory[] = [
  {
    id: "col-cotton",
    title: "Cotton Handloom Sarees",
    categoryKey: "Cotton",
    description: "Finely woven organic and combed cotton sarees with traditional temple borders. Breathable, lightweight, and soothing for all climates.",
    image: "/src/assets/images/cotton_handloom_saree_1791210946249.jpg",
    badge: "Pure Cotton Weave"
  },
  {
    id: "col-traditional",
    title: "Traditional Sarees",
    categoryKey: "Traditional",
    description: "Timeless South Indian motifs, authentic korvai borders, and traditional pallu patterns woven by generational handloom artisans.",
    image: "/src/assets/images/wedding_zari_saree_1791210958282.jpg",
    badge: "Heritage Tamil Drape"
  },
  {
    id: "col-wedding",
    title: "Wedding & Festive Sarees",
    categoryKey: "Wedding",
    description: "Grand bridal and celebration sarees woven in rich jewel tones with intricate antique gold zari borders and opulent pallu artistry.",
    image: "/src/assets/images/wedding_zari_saree_1791210958282.jpg",
    badge: "Bridal Zari Elegance"
  },
  {
    id: "col-daily",
    title: "Daily Wear Sarees",
    categoryKey: "Cotton",
    description: "Effortless grace designed for comfortable daily wear, workplace elegance, and casual family gatherings with soft textures.",
    image: "/src/assets/images/cotton_handloom_saree_1791210946249.jpg",
    badge: "All-Day Comfort"
  },
  {
    id: "col-designer",
    title: "Designer Handloom Sarees",
    categoryKey: "Festive",
    description: "Contemporary aesthetics blended with time-honored handloom techniques. Subtle pastels, geometric borders, and modern contrast pallus.",
    image: "/src/assets/images/festive_purple_saree_1791210971920.jpg",
    badge: "Artisan Designer Edition"
  },
  {
    id: "col-new-arrivals",
    title: "New Arrivals",
    categoryKey: "New Arrivals",
    description: "Freshly loomed handloom creations highlighting this season's most coveted festive color palettes and innovative border weaves.",
    image: "/src/assets/images/hero_handloom_saree_1791210931846.jpg",
    badge: "Fresh Off the Loom"
  }
];

export const GALLERY_ITEMS: SareeItem[] = [
  {
    id: "item-1",
    title: "Chettinad Temple Border Cotton Saree",
    category: "Cotton",
    description: "Hand-woven fine cotton saree featuring contrast mustard and peacock green korvai temple borders.",
    image: "/src/assets/images/cotton_handloom_saree_1791210946249.jpg",
    highlight: "100% Breathable Cotton"
  },
  {
    id: "item-2",
    title: "Royal Crimson Bridal Handloom Saree",
    category: "Wedding",
    description: "Exquisite deep maroon wedding drape adorned with elaborate pure gold zari floral buttas and traditional bridal pallu.",
    image: "/src/assets/images/wedding_zari_saree_1791210958282.jpg",
    highlight: "Rich Gold Zari Work"
  },
  {
    id: "item-3",
    title: "Deep Violet Festive Handloom Saree",
    category: "Festive",
    description: "Rich royal purple saree with shimmering copper-gold zari borders, woven for festive celebrations and pujas.",
    image: "/src/assets/images/festive_purple_saree_1791210971920.jpg",
    highlight: "Festive Plum & Gold"
  },
  {
    id: "item-4",
    title: "Madathukulam Heritage Loom Saree",
    category: "Traditional",
    description: "Authentic handloom saree preserving the classic weaving tradition of Tiruppur district with timeless border motifs.",
    image: "/src/assets/images/hero_handloom_saree_1791210931846.jpg",
    highlight: "Tiruppur Weaver Special"
  },
  {
    id: "item-5",
    title: "Soft Madder Red Cotton Casual Saree",
    category: "Cotton",
    description: "Lightweight, soft handloom cotton in earthy madder red with delicate checks and contrast zari line edging.",
    image: "/src/assets/images/cotton_handloom_saree_1791210946249.jpg",
    highlight: "Soft Touch Cotton"
  },
  {
    id: "item-6",
    title: "Grand Kanchipuram-Inspired Zari Saree",
    category: "Wedding",
    description: "A showstopping bridal masterpiece with peacock and rudraksha motifs etched in glistening gold thread.",
    image: "/src/assets/images/wedding_zari_saree_1791210958282.jpg",
    highlight: "Grand Bridal Pallu"
  },
  {
    id: "item-7",
    title: "Artisan Dual-Tone Loom Saree",
    category: "New Arrivals",
    description: "Latest seasonal weave combining deep wine red with emerald undertones and refined contemporary borders.",
    image: "/src/assets/images/hero_handloom_saree_1791210931846.jpg",
    highlight: "Dual-Shade Weave"
  },
  {
    id: "item-8",
    title: "Hand-Crafted Festive Magenta Saree",
    category: "Festive",
    description: "Dazzling festive saree featuring fine zari border work, hand-finished tassels, and graceful drape.",
    image: "/src/assets/images/festive_purple_saree_1791210971920.jpg",
    highlight: "Celebration Special"
  },
  {
    id: "item-9",
    title: "Classic Traditional Golden Ochre Saree",
    category: "Traditional",
    description: "Auspicious turmeric yellow handloom drape with auspicious temple design and contrasting maroon border.",
    image: "/src/assets/images/cotton_handloom_saree_1791210946249.jpg",
    highlight: "Auspicious Heritage Color"
  }
];

export const getWhatsAppLink = (message?: string): string => {
  const defaultMsg = "Hello RJ Fabrics, I am interested in your handloom sarees. Please share the available collections and details.";
  const text = message || defaultMsg;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
};
