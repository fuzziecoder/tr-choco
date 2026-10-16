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
  "white-crunchy": null,
  "white-butterscotch": null,
  "nice-pista": null,
  "white-marble": null,
  "white-cherry": null,
  "dama-fruit-nut": null,
  "milk-butterscotch": null,
  "day-night-basic": null,
  "roasted-almond": null,
  "roasted-cashew-white": null,
  "roasted-cashew-dark": null,
  "dark-honey": null,
  "dark-black-currant": null,
  "milk-mango": null,
  "milk-green-apple": null,
  "white-strawberry": null,
  "white-orange": null,
  "day-night-filling": null,
  "english-toffee": null,
  "orange": null,
  "hazelnut": null,
  "coconut-truffle": null,
  "mango-truffle": null,
  "strawberry-truffle": null,

  // Flavour Listings
  "mango-flavour": null,
  "strawberry-flavour": null,
  "pineapple-flavour": null,
  "pista-flavour": null,

  // Chocolate Treats & Confectionery
  "stuffed-cookies-chocolate": null,
  "chocolate-beans-bottle": null,
  "stone-chocolate": null,
  "cherry-with-chocolate": null,
  "bubble-chocolate": null,
  "chocolate-bar": null,
  "glucose-candy": null,
  "cherry": null,
  "milk-almond": null,
  "dark-almond": null,
  "white-almond": null,
  "white-cherry-top": null,
  "fruit-jelly-100g": null,
  "choco-chips-100g": null,
  "choco-lollipop": null,

  // Cakes & Bakery
  "brownie-with-chocolate": null,
  "red-velvet": null,
  "chocolate-bun": null,

  // Tea & Coffee
  "tea": null,
  "coffee": null,
  "herbal-tea-all-varieties": null,
  "blue-tea": null,
  "tea-varieties": null,
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

  // Personal Care
  "vetiver-oil": null,
  "shampoo": null,
  "rosewater-multani-mitti-combo": null,
  "aloe-vera-gel": null,
  "vitamin-c-oil": null,
  "vitamin-e-oil": null,
  "citronella-oil": null,
  "bath-brush": null,
  "kasturi-manjal": null,

  // Other / Requires Confirmation
  "sandalwood-colors": null,
  "wine-bottle": null,
};

/**
 * Optional multi-image galleries per product family or slug.
 */
export const productGalleries: Record<string, string[]> = {
  "white-crunchy": [],
  "day-night-basic": [],
  "dark-honey": [],
  "english-toffee": [],
};
