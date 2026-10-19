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
  // Chocolate Families (24 families) - Placeholders active
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
  "brownie-with-chocolate": "/images/products/brownie-with-chocolate.webp",
  "red-velvet": null,
  "chocolate-bun": null,

  // Tea & Coffee
  "tea": "/images/products/tea.webp",
  "tea-kodai-special": "/images/products/tea-kodai-special.jpg",
  "tea-masala": "/images/products/tea-masala.jpg",
  "tea-lemon": "/images/products/tea-lemon.jpg",
  "tea-cardamom": "/images/products/tea-cardamom.jpg",
  "coffee": "/images/products/coffee.webp",
  "herbal-tea-all-varieties": "/images/products/herbal-tea-all-varieties.webp",
  "blue-tea": null,
  "tea-varieties": "/images/products/tea-varieties.webp",
  "ginger-tea": "/images/products/ginger-tea.webp",
  "instant-filter-coffee": null,
  "hot-chocolate-coffee": "/images/products/hot-chocolate-coffee.webp",
  "drinking-chocolate": null,
  "green-tea": "/images/products/green-tea.jpg",

  // Café Food & Drinks
  "egg-puffs": null,
  "veg-puffs": null,
  "avocado-sandwich": "/images/products/avocado-sandwich.webp",
  "avocado-milkshake": "/images/products/avocado-milkshake.webp",
  "brownie-tub": "/images/products/brownie-tub.webp",
  "mini-cookies-dip": "/images/products/mini-cookies-dip.webp",
  "donut": "/images/products/donut.webp",
  "veg-sandwich": "/images/products/veg-sandwich.webp",
  "chocolate-sandwich": "/images/products/chocolate-sandwich.webp",
  "masala-sweetcorn": "/images/products/masala-sweetcorn.webp",
  "sweetcorn": "/images/products/sweetcorn.webp",
  "cold-chocolate-coffee": "/images/products/cold-chocolate-coffee.webp",

  // Pantry
  "ghee-400ml": "/images/finds/pantry-ghee-honey.jpg",
  "honey": "/images/finds/pantry-ghee-honey.jpg",

  // Personal Care & Botanicals
  "aloe-vera-gel": "/images/products/aloe-vera-face-gel.jpg",
  "cold-moisturiser-lotion": "/images/products/cold-moisturiser-lotion.jpg",
  "avocado-jojoba-lotion": "/images/products/avocado-jojoba-lotion.jpg",
  "saffron-body-wash": "/images/products/saffron-body-wash.jpg",
  "lavender-body-wash": "/images/products/lavender-body-wash.jpg",
  "neem-aloevera-body-wash": "/images/products/neem-aloevera-body-wash.jpg",
  "avocado-face-wash": "/images/products/avocado-face-wash.jpg",
  "hibiscus-face-wash": "/images/products/hibiscus-face-wash.jpg",
  "neem-papaya-face-wash": "/images/products/neem-papaya-face-wash.jpg",
  "orange-face-wash": "/images/products/orange-face-wash.jpg",
  "vetiver-oil": "/images/finds/botanical-oils.jpg",
  "shampoo": "/images/products/shampoo.webp",
  "rosewater-multani-mitti-combo": "/images/products/rosewater-multani-mitti-combo.webp",
  "vitamin-c-oil": "/images/finds/botanical-oils.jpg",
  "vitamin-e-oil": "/images/finds/botanical-oils.jpg",
  "citronella-oil": "/images/finds/botanical-oils.jpg",
  "bath-brush": null,
  "kasturi-manjal": "/images/products/kasturi-manjal.webp",
  "red-sandalwood-powder": "/images/products/red-sandalwood-powder.webp",
  "padimugam": "/images/products/padimugam.webp",
  "padimugam-tr": "/images/products/padimugam-tr.webp",

  // Handmade Artisan Soaps
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
  "tea": [
    "/images/products/tea-kodai-special.jpg",
    "/images/products/tea-masala.jpg",
    "/images/products/tea-lemon.jpg",
    "/images/products/tea-cardamom.jpg",
    "/images/products/tea.webp",
  ],
  "tea-varieties": [
    "/images/products/tea-varieties.webp",
    "/images/products/tea-masala.jpg",
    "/images/products/tea-kodai-special.jpg",
    "/images/products/tea-cardamom.jpg",
    "/images/products/tea-lemon.jpg",
    "/images/products/green-tea.jpg",
  ],
  "herbal-tea-all-varieties": [
    "/images/products/herbal-tea-all-varieties.webp",
    "/images/products/ginger-tea.webp",
    "/images/products/tea-cardamom.jpg",
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
  "white-butterscotch": [],
  "nice-pista": [],
  "white-marble": [],
  "white-cherry": [],
  "dama-fruit-nut": [],
  "milk-butterscotch": [],
  "day-night-basic": [],
  "day-night-filling": [],
  "roasted-almond": [],
  "roasted-cashew-white": [],
  "roasted-cashew-dark": [],
  "dark-honey": [],
  "dark-black-currant": [],
  "milk-mango": [],
  "milk-green-apple": [],
  "white-strawberry": [],
  "hazelnut": [],
  "coconut-truffle": [],
  "mango-flavour": [],
  "strawberry-flavour": [],
  "chocolate-bar": [],
  "kasturi-manjal": [
    "/images/products/kasturi-manjal.webp",
    "/images/products/kasturi-manjal-jar.webp",
    "/images/products/kasturi-manjal-alt.webp",
  ],
  "sandalwood-colors": [
    "/images/products/sandalwood-colors.webp",
    "/images/products/red-sandalwood-powder.webp",
    "/images/products/sandalwood-manjal-combo.webp",
  ],
  "sandal-soap": ["/images/products/sandal-soap.webp"],
  "charcoal-soap": ["/images/products/charcoal-soap.webp"],
  "neem-tulsi-soap": ["/images/products/neem-tulsi-soap.webp"],
  "avocado-soap": ["/images/products/avocado-soap.webp"],
  "multani-mitti-soap": ["/images/products/multani-mitti-soap.webp"],
  "shea-butter-soap": ["/images/products/shea-butter-soap.webp"],
  "orange-soap": ["/images/products/orange-soap.webp"],
};
