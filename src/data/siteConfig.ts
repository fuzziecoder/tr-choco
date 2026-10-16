export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  brandName: string;
  brandTagline: string;
  brandSubline: string;
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
  brandName: "Cocoa Atelier",
  brandTagline: "A little sweetness. A lot to discover.",
  brandSubline: "Artisanal Chocolates, Café & Little Delights",
  hero: {
    eyebrow: "CHOCOLATES, CAFÉ & LITTLE DELIGHTS",
    heading: "A little sweetness. A lot to discover.",
    description:
      "Explore chocolate favourites, comforting café moments, and thoughtful everyday finds.",
    primaryCta: "Explore Chocolates",
    secondaryCta: "Discover the Café"
  },
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Collections", href: "#collections" },
    { label: "Café & Drinks", href: "#cafe" },
    { label: "Our Story", href: "#story" },
    { label: "Visit Us", href: "#visit" }
  ],
  headerCta: {
    label: "Explore the Collection",
    href: "#catalogue"
  },
  bento: {
    eyebrow: "EDITORIAL HIGHLIGHTS",
    heading: "Crafted with quiet devotion.",
    subheading: "An artisanal glimpse into our bakery vitrine, handcrafted truffles, and tea room."
  },
  collectionsSection: {
    eyebrow: "CURATED SELECTION",
    heading: "Every mood. Its own chocolate.",
    description:
      "Select a collection to filter our complete catalogue or inspect specific taste profiles."
  },
  storySection: {
    eyebrow: "OUR PHILOSOPHY",
    heading: "Moments made to be savoured.",
    description:
      "A quiet tribute to the craft of sweetness, mindful ingredients, and generous hospitality."
  },
  discoverySection: {
    eyebrow: "INTERACTIVE EXPLORATION",
    heading: "A whole world of little delights.",
    description:
      "Rotate through our sphere of chocolate creations, bakery specialities, and café favourites."
  },
  visitSection: {
    eyebrow: "SHOWCASE & VISIT",
    heading: "Experience Cocoa Atelier",
    disclaimer:
      "This website is an interactive digital showcase. In-person boutique reservations and direct ordering details are coming soon.",
    note:
      "We invite you to browse our full catalogue of chocolate families, café drinks, and specialty pantry goods.",
    ctaLabel: "Browse Full Catalogue",
    ctaHref: "#catalogue"
  },
  footer: {
    blurb:
      "Cocoa Atelier is an artisanal confectionery and café concept celebrating pure chocolate craft, quiet bakery rituals, and everyday moments.",
    copyright: `© ${new Date().getFullYear()} Cocoa Atelier. All rights reserved.`,
    disclaimer:
      "Catalogue details are presented for preview purposes. Selling prices and order availability will be verified prior to store opening."
  }
};
