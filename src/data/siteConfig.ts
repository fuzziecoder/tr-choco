export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  brandName: string;
  brandTagline: string;
  brandSubline: string;
  location: string;
  phone: string;
  whatsappNumber: string;
  whatsappLink: string;
  instagramHandle: string;
  instagramUrl: string;
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  navigation: NavLink[];
  headerCta: {
    label: string;
    href: string;
  };
  bento: {
    eyebrow: string;
    heading: string;
    subheading: string;
  };
  collectionsSection: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  storySection: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  discoverySection: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  visitSection: {
    eyebrow: string;
    heading: string;
    disclaimer: string;
    note: string;
    ctaLabel: string;
    ctaHref: string;
  };
  footer: {
    blurb: string;
    copyright: string;
    disclaimer: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "TR Homemade Chocolates",
  brandTagline: "Homemade with Love",
  brandSubline: "Real Ingredients. Pure Love. • Hosur",
  location: "Hosur, Tamil Nadu",
  phone: "9363151629",
  whatsappNumber: "+91 93631 51629",
  whatsappLink: "https://wa.me/919363151629?text=Hello%20TR%20Homemade%20Chocolates!%20I%20would%20like%20to%20inquire%20about%20ordering.",
  instagramHandle: "tr__homemade__chocolates_hosur",
  instagramUrl: "https://www.instagram.com/tr__homemade__chocolates_hosur/",
  hero: {
    eyebrow: "HOMEMADE WITH LOVE • HOSUR",
    heading: "Real Ingredients. Pure Love.",
    description:
      "Handcrafted artisan chocolates made fresh in Hosur, paired with aromatic Nilgiri estate teas, bakery treats, and pure botanical botanicals.",
    primaryCta: "Explore Chocolates",
    secondaryCta: "Nilgiri Teas & Café"
  },
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Chocolates", href: "#collections" },
    { label: "Teas & Café", href: "#cafe" },
    { label: "Our Story", href: "#story" },
    { label: "Order & Visit", href: "#visit" }
  ],
  headerCta: {
    label: "Browse Catalogue",
    href: "#catalogue"
  },
  bento: {
    eyebrow: "HANDCRAFTED DELIGHTS",
    heading: "Homemade with gentle care & pure love.",
    subheading: "An artisanal glimpse into our rich chocolate slabs, hill station teas, and freshly crafted personal care."
  },
  collectionsSection: {
    eyebrow: "CURATED SELECTION",
    heading: "Every mood. Its own chocolate.",
    description:
      "Select a collection to filter our handcrafted catalogue of 24 signature chocolate families and specialties."
  },
  storySection: {
    eyebrow: "OUR PHILOSOPHY",
    heading: "From our kitchen in Hosur to your home.",
    description:
      "TR Homemade Chocolates was born out of a passion for real cocoa, genuine homemade goodness, and zero compromises on purity."
  },
  discoverySection: {
    eyebrow: "INTERACTIVE EXPLORATION",
    heading: "A world of handmade sweetness.",
    description:
      "Rotate through our sphere of chocolate creations, hill station specialty teas, and comforting treats."
  },
  visitSection: {
    eyebrow: "ORDER & CONNECT",
    heading: "Direct from TR Homemade Chocolates, Hosur",
    disclaimer:
      "Order your favourite chocolates and teas directly via WhatsApp or Instagram. Fresh batches prepared with love in Hosur.",
    note:
      "Call or message 9363151629 for custom gifting boxes, party favours, and bulk festive hampers.",
    ctaLabel: "WhatsApp Order Inquiry",
    ctaHref: "https://wa.me/919363151629?text=Hello%20TR%20Homemade%20Chocolates!%20I%20would%20like%20to%20order."
  },
  footer: {
    blurb:
      "TR Homemade Chocolates is a Hosur-based artisanal confectionery bringing you authentic homemade chocolates, estate-fresh Kodai teas, and botanical self-care.",
    copyright: `© ${new Date().getFullYear()} TR Homemade Chocolates, Hosur. All rights reserved.`,
    disclaimer:
      "Product weights and formats presented for ordering preview. WhatsApp us at 9363151629 for current batch availability."
  }
};
