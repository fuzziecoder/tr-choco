/**
 * Centralized Asset Manifest
 * All product, collection, and hero images map through this file.
 * To attach new photography, simply add the file to /public/images/products/
 * and update the assigned path below without modifying any UI components.
 */

export const heroImages = {
  pastryTower: "/images/hero/hero_pastry_tower.jpg",
  macaronLavender: "/images/hero/bento_macaron_lavender.jpg",
  cupcakeCherry: "/images/hero/bento_cupcake_cherry.jpg",
  cupcakesDisplay: "/images/hero/bento_cupcakes_display.jpg",
  macaronsStack: "/images/hero/bento_macarons_stack.jpg",
  spongeSlice: "/images/hero/bento_sponge_slice.jpg",
  redVelvetTruffle: "/images/hero/bento_redvelvet_truffle.jpg",
};

export const collectionImages: Record<string, string> = {
  "white-chocolate": "/images/collections/white-chocolate.jpg",
  "milk-chocolate": "/images/collections/milk-chocolate.jpg",
  "dark-chocolate": "/images/collections/dark-chocolate.jpg",
  "truffles-filled": "/images/collections/truffles-filled.jpg",
  "flavours-favourites": "/images/collections/flavours-favourites.jpg",
};

/**
 * Product family images. If null, the UI gracefully renders a tasteful
 * pastel placeholder card with the item name, category badge, and neutral botanical illustration.
 */
export const productImages: Record<string, string | null> = {
  // Chocolate Families (24 families)
  "white-crunchy": "/images/products/white-crunchy.webp",
  "white-butterscotch": "/images/products/white-butterscotch.webp",
  "nice-pista": "/images/products/nice-pista.webp",
  "white-marble": "/images/products/white-marble.webp",
  "white-cherry": "/images/products/white-cherry.webp",
  "dama-fruit-nut": "/images/products/dama-fruit-nut.webp",
  "milk-butterscotch": "/images/products/milk-butterscotch.webp",
  "day-night-basic": "/images/products/day-night-basic.webp",
  "roasted-almond": "/images/products/roasted-almond.webp",
  "roasted-cashew-white": "/images/products/roasted-cashew-white.webp",
  "roasted-cashew-dark": "/images/products/roasted-cashew-dark.webp",
  "dark-honey": "/images/products/dark-honey.webp",
  "dark-black-currant": "/images/products/dark-black-currant.webp",
  "milk-mango": "/images/products/milk-mango.webp",
  "milk-green-apple": "/images/products/milk-green-apple.webp",
  "white-strawberry": "/images/products/white-strawberry.webp",
  "white-orange": null,
  "day-night-filling": "/images/products/day-night-filling.webp",
  "english-toffee": null,
  "orange": null,
  "hazelnut": "/images/products/hazelnut.webp",
  "coconut-truffle": "/images/products/coconut-truffle.webp",
  "mango-truffle": null,
  "strawberry-truffle": null,

  // Flavour Listings
  "mango-flavour": "/images/products/mango-flavour.webp",
  "strawberry-flavour": "/images/products/strawberry-flavour.webp",
  "pineapple-flavour": null,
  "pista-flavour": null,

  // Chocolate Treats & Confectionery
  "stuffed-cookies-chocolate": null,
  "chocolate-beans-bottle": null,
  "stone-chocolate": null,
  "cherry-with-chocolate": null,
  "bubble-chocolate": null,
  "chocolate-bar": "/images/products/chocolate-bar.webp",
  "glucose-candy": null,
  "cherry": null,
  "milk-almond": "/images/products/milk-almond.webp",
  "dark-almond": "/images/products/dark-almond.webp",
  "white-almond": "/images/products/white-almond.webp",
  "white-cherry-top": "/images/products/white-cherry-top.webp",
  "fruit-jelly-100g": null,
  "choco-chips-100g": null,
  "choco-lollipop": null,

  // Cakes & Bakery
  "brownie-with-chocolate": null,
  "red-velvet": null,
  "chocolate-bun": null,

  // Tea & Coffee
  "tea": "/images/products/tea.webp",
  "coffee": null,
  "herbal-tea-all-varieties": "/images/products/herbal-tea-all-varieties.webp",
  "blue-tea": null,
  "tea-varieties": "/images/products/tea-varieties.webp",
  "instant-filter-coffee": null,
  "hot-chocolate-coffee": null,
  "drinking-chocolate": null,
  "green-tea": null,

  // Café Food & Drinks
  "egg-puffs": null,
  "veg-puffs": null,
  "avocado-sandwich": null,
  "avocado-milkshake": null,

  // Pantry
  "ghee-400ml": null,
  "honey": null,

  // Personal Care & Artisan Soaps
  "vetiver-oil": null,
  "shampoo": "/images/products/shampoo.webp",
  "rosewater-multani-mitti-combo": "/images/products/rosewater-multani-mitti-combo.webp",
  "aloe-vera-gel": null,
  "vitamin-c-oil": null,
  "vitamin-e-oil": null,
  "citronella-oil": null,
  "bath-brush": null,
  "kasturi-manjal": "/images/products/kasturi-manjal.webp",
  "sandal-soap": "/images/products/sandal-soap.webp",
  "charcoal-soap": "/images/products/charcoal-soap.webp",
  "neem-tulsi-soap": "/images/products/neem-tulsi-soap.webp",
  "avocado-soap": "/images/products/avocado-soap.webp",
  "multani-mitti-soap": "/images/products/multani-mitti-soap.webp",
  "shea-butter-soap": "/images/products/shea-butter-soap.webp",
  "orange-soap": "/images/products/orange-soap.webp",

  // Other / Requires Confirmation
  "sandalwood-colors": "/images/products/sandalwood-colors.webp",
  "wine-bottle": null,
};

/**
 * Optional multi-image galleries per product family or slug.
 */
export const productGalleries: Record<string, string[]> = {
  "white-crunchy": ["/images/products/white-crunchy.webp"],
  "day-night-basic": ["/images/products/day-night-basic.webp"],
  "dark-honey": ["/images/products/dark-honey.webp"],
  "english-toffee": [],
  "kasturi-manjal": [
    "/images/products/kasturi-manjal.webp",
    "/images/products/kasturi-manjal-alt.webp",
    "/images/products/kasturi-manjal-jar.webp"
  ],
  "tea": ["/images/products/tea.webp", "/images/products/ginger-tea.webp"],
  "herbal-tea-all-varieties": [
    "/images/products/herbal-tea-all-varieties.webp",
    "/images/products/padimugam-tr.webp"
  ],
};
