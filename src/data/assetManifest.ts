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

export const findsBentoImages = {
  pantry: "/images/finds/pantry-ghee-honey.jpg",
  oils: "/images/finds/botanical-oils.jpg",
  ritualCenter: "/images/finds/botanical-ritual-center.jpg",
  aloeJar: "/images/finds/aloe-skincare-jar.jpg",
  vibrantWash: "/images/finds/vibrant-body-wash.jpg",
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
  "tea": "/images/products/tea-kodai-special.jpg",
  "tea-kodai-special": "/images/products/tea-kodai-special.jpg",
  "tea-masala": "/images/products/tea-masala.jpg",
  "tea-lemon": "/images/products/tea-lemon.jpg",
  "tea-cardamom": "/images/products/tea-cardamom.jpg",
  "coffee": null,
  "herbal-tea-all-varieties": "/images/products/tea-cardamom.jpg",
  "blue-tea": null,
  "tea-varieties": "/images/products/tea-masala.jpg",
  "instant-filter-coffee": null,
  "hot-chocolate-coffee": null,
  "drinking-chocolate": null,
  "green-tea": "/images/products/green-tea.jpg",

  // Café Food & Drinks
  "egg-puffs": null,
  "veg-puffs": null,
  "avocado-sandwich": null,
  "avocado-milkshake": null,

  // Pantry
  "ghee-400ml": "/images/finds/pantry-ghee-honey.jpg",
  "honey": "/images/finds/pantry-ghee-honey.jpg",

  // Personal Care & Botanicals
  "aloe-vera-gel": "/images/finds/aloe-skincare-jar.jpg",
  "cold-moisturiser-lotion": "/images/products/cold-moisturiser-lotion.jpg",
  "avocado-jojoba-lotion": "/images/products/avocado-jojoba-lotion.jpg",
  "saffron-body-wash": "/images/finds/vibrant-body-wash.jpg",
  "lavender-body-wash": "/images/products/lavender-body-wash.jpg",
  "neem-aloevera-body-wash": "/images/products/neem-aloevera-body-wash.jpg",
  "avocado-face-wash": "/images/products/avocado-face-wash.jpg",
  "hibiscus-face-wash": "/images/products/hibiscus-face-wash.jpg",
  "neem-papaya-face-wash": "/images/products/neem-papaya-face-wash.jpg",
  "orange-face-wash": "/images/products/orange-face-wash.jpg",
  "vetiver-oil": "/images/finds/botanical-oils.jpg",
  "shampoo": "/images/products/neem-aloevera-body-wash.jpg",
  "rosewater-multani-mitti-combo": "/images/products/hibiscus-face-wash.jpg",
  "vitamin-c-oil": "/images/finds/botanical-oils.jpg",
  "vitamin-e-oil": "/images/finds/botanical-oils.jpg",
  "citronella-oil": "/images/finds/botanical-oils.jpg",
  "bath-brush": null,
  "kasturi-manjal": "/images/products/saffron-body-wash.jpg",

  // Other / Requires Confirmation
  "sandalwood-colors": null,
  "wine-bottle": null,
};

/**
 * Optional multi-image galleries per product family or slug.
 */
export const productGalleries: Record<string, string[]> = {
  "tea": [
    "/images/products/tea-kodai-special.jpg",
    "/images/products/tea-masala.jpg",
    "/images/products/tea-lemon.jpg",
    "/images/products/tea-cardamom.jpg",
  ],
  "tea-varieties": [
    "/images/products/tea-masala.jpg",
    "/images/products/tea-kodai-special.jpg",
    "/images/products/tea-cardamom.jpg",
    "/images/products/tea-lemon.jpg",
    "/images/products/green-tea.jpg",
  ],
  "green-tea": ["/images/products/green-tea.jpg"],
  "aloe-vera-gel": ["/images/products/aloe-vera-face-gel.jpg"],
  "saffron-body-wash": ["/images/products/saffron-body-wash.jpg"],
  "lavender-body-wash": ["/images/products/lavender-body-wash.jpg"],
  "neem-aloevera-body-wash": ["/images/products/neem-aloevera-body-wash.jpg"],
  "cold-moisturiser-lotion": ["/images/products/cold-moisturiser-lotion.jpg"],
  "avocado-jojoba-lotion": ["/images/products/avocado-jojoba-lotion.jpg"],
  "avocado-face-wash": ["/images/products/avocado-face-wash.jpg"],
  "hibiscus-face-wash": ["/images/products/hibiscus-face-wash.jpg"],
  "neem-papaya-face-wash": ["/images/products/neem-papaya-face-wash.jpg"],
  "orange-face-wash": ["/images/products/orange-face-wash.jpg"],
  "white-crunchy": [],
  "day-night-basic": [],
  "dark-honey": [],
  "english-toffee": [],
};
