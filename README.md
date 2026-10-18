# Cocoa Atelier — Showcase Website

An editorial, luxury-inspired chocolate and café showcase website built with **React**, **TypeScript**, and **Vite**, featuring interactive components adapted from modern web design patterns and the **React Bits** catalog.

---

## Quick Start

### 1. Installation
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Typecheck
```bash
npm run build
npm run preview
```

---

## Visual Direction & Screenshot Fidelity

The design recreates the aesthetic of the reference visual:
- **Outer Shell & Ambient Glow**: A rich, deep pink-to-dark-cocoa radial background (`#4a2d36` to `#1a0e13`).
- **Centered Warm-White Page Shell**: Max-width container (`#fffefa`) with generously rounded outer corners (`border-radius: 36px`), clean borders, and soft elevation.
- **Header**: Compact header with a cursive script brand mark ("Cocoa Atelier"), 5 understated navigation links ("Home", "Collections", "Café & Drinks", "Our Story", "Visit Us"), and a dark cocoa specular pill button ("Explore the Collection").
- **Hero Card**: Cream-to-blush horizontal gradient (`#fff3cc` to `#efbaca`), large dark typography with serif styling, high-fidelity 3D celebration cake centerpiece on a fluted pink pedestal, floating pastel macarons, and animated golden pearl orbs.
- **Asymmetric Bento Vitrine**: A 3-column asymmetric bento layout immediately after the hero featuring lavender, pale sage, butter cream, and blush panels:
  - Floating strawberry macaron card
  - Cherry vanilla cupcake card
  - Lavender editorial card with pill badges
  - Landscape bakery vitrine display with cupcakes and purple macaron
  - Vertical macaron trilogy stack
  - Cream-to-pink promotional card
  - Wide pale sage artisanal bakes card with sponge cake slice
  - Red velvet slice with purple truffle confectionery card
  - Curated gift hampers editorial card.

---

## The Four Interactive Components

### 1. Accordion Gallery (`src/components/CollectionAccordion.tsx`)
- **Interaction**: Horizontal expanding gallery with smooth flex transitions, image drift with tilt/parallax based on cursor proximity, grayscale-to-color transition, and active caption reveals.
- **Collections**: White Chocolate, Milk Chocolate, Dark Chocolate, Truffles & Filled Chocolates, Flavours & Favourites.
- **Selection Action**: Clicking any collection updates the central catalogue filter and scrolls to the browsing section.
- **Responsive Fallback**: Stacks vertically on mobile viewports (< 768px).

### 2. Scroll Stack (`src/components/CraftScrollStack.tsx`)
- **Interaction**: Desktop pinning and stacking with scale reduction and opacity dimming using GSAP and ScrollTrigger.
- **Story Chapters**: *"It starts with curiosity."*, *"Made for the slow moments."*, and *"A gift that says a little more."*
- **Card Styling**: Alternating pale sage, lavender, and blush pastel card backgrounds.
- **Responsive Fallback**: Automatically degrades to a clean, native scrolling layout on mobile devices or when reduced motion is preferred (`prefers-reduced-motion: reduce`).

### 3. Specular Button (`src/components/SpecularCTA.tsx`)
- **Interaction**: Cursor-following specular radial highlight, dark-cocoa base with creamy light reflections, pill radius (`border-radius: 9999px`), and keyboard focus rings.
- **Variants**: Primary dark-cocoa, secondary cream, and subtle options. Supports both navigation links (`<a>`) and action triggers (`<button>`).

### 4. Infinite Menu (`src/components/ChocolateDiscovery.tsx`)
- **Interaction**: 3D rotating cylinder/sphere with active item detection, smooth drag inertia, dynamic detail reveal, Previous/Next controls, and direct modal trigger.
- **Accessibility & Low-Power Fallback**: Features a toggle to switch directly to a static grid view, ensuring comfortable browsing on all devices.

---

## Catalogue Organization & Integrity

The catalogue contains **72 authoritative products**:
- **24 Chocolate Families with Confirmed Sizes**: Each family (`White Crunchy`, `Day & Night — Basic`, `Dark Honey`, `English Toffee`, etc.) has confirmed variants of **250 g, 500 g, 750 g, and 1 kg**. Variants are grouped into a single family card with size options in the detail modal.
- **4 Flavour Listings**: Mango, Strawberry, Pineapple, and Pista.
- **15 Confectionery Items**: Including confirmed 100 g sizes for `Fruit Jelly` and `Choco Chips`.
- **3 Cakes & Bakery**: Brownie with Chocolate, Red Velvet, Chocolate Bun.
- **9 Tea & Coffee**: Filter coffee, blue tea, hot chocolate coffee, drinking chocolate, etc.
- **4 Café Food & Drinks**: Egg puffs, veg puffs, avocado sandwich, avocado milkshake.
- **2 Pantry Staples**: Traditional ghee (400 ml) and natural forest honey.
- **9 Personal Care Items**: Pure botanical oils, rosewater combo, aloe vera gel, bath brush.
- **2 Unconfirmed / Specialty Items**: Sandalwood Colors and Wine Bottle.

### Integrity Rules
- **No Invented Prices**: All unverified selling prices are stored as `null`. Customer cards show neutral boutique showcase notes rather than ₹0 or fake discounts.
- **No Fake Purchase Flows**: No dummy cart, checkout, or accounts. Every interactive element performs a real action.
- **Preserved Source References**: Source item codes (`WCHY`, `DNB`, `DH`, `ET`, etc.) are preserved for internal tracking.

---

## How to Add Product Photographs

1. **Place Photos**:
   Save `.webp` or `.jpg` photos into `public/images/products/`.
2. **Follow Recommended Filenames**:
   Consult `public/product-image-checklist.csv` for canonical filenames (e.g., `white-crunchy.webp`, `dark-honey.webp`).
3. **Run Asset Discovery**:
   ```bash
   node scripts/asset-discovery.js
   ```
   This script reports 100% exact matches and flags candidate filenames.
4. **Link in Asset Manifest**:
   Update `src/data/assetManifest.ts`:
   ```ts
   export const productImages: Record<string, string | null> = {
     "white-crunchy": "/images/products/white-crunchy.webp",
     // ...
   };
   ```
   Missing images automatically render tasteful pastel placeholders with product monogram and category crest.

---

## How to Enter Verified Selling Prices

When selling prices are officially confirmed:
1. Open `src/data/products.ts`.
2. Locate the product variant and update `sellingPrice`:
   ```ts
   {
     id: "white-crunchy-250g",
     label: "250 g",
     weightGrams: 250,
     sourceName: "White Crunchy 250 g",
     sourceItemCode: "WCHY250",
     sellingPrice: 350, // Set verified price here
   }
   ```
3. The detail modal will automatically display the verified price formatted with currency.

---

## How to Update Brand & Business Information

Open `src/data/siteConfig.ts` to edit:
- Brand name (default: *"Cocoa Atelier"*)
- Taglines and hero copy
- Navigation links and destinations
- Visit Us boutique hours and address notes
- Footer copyright and disclosures.

---

## Technical Stack & Dependencies

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Vanilla CSS with CSS custom properties (`tokens.css`, `global.css`, `responsive.css`)
- **Animation**: GSAP 3 + ScrollTrigger
- **Icons**: Lucide React (feather-light interface icons)
- **Zero Heavy UI Kits**: Handcrafted for maximum performance, clean markup, and exact visual fidelity.
