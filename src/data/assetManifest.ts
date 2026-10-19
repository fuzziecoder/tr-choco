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
  // Chocolate Families (24 families) - Real Photography Active
  "white-crunchy": "/images/products/white-crunchy.png",
  "white-butterscotch": "/images/products/white-butterscotch.png",
  "nice-pista": "/images/products/nice-pista.png",
  "white-marble": "/images/products/white-marble.png",
  "white-cherry": "/images/products/white-crunchy.png",
  "dama-fruit-nut": "/images/products/dama-fruit-nut.png",
  "milk-butterscotch": "/images/products/dama-fruit-nut.png",
  "day-night-basic": "/images/products/day-night-basic.png",
  "roasted-almond": "/images/products/roasted-almond.png",
  "roasted-cashew-white": "/images/products/nice-pista.png",
  "roasted-cashew-dark": "/images/products/roasted-cashew-dark.png",
  "dark-honey": "/images/products/roasted-almond.png",
  "dark-black-currant": "/images/products/fruit-flavours.png",
  "milk-mango": "/images/products/mango-truffle.png",
  "milk-green-apple": "/images/products/fruit-flavours.png",
  "white-strawberry": "/images/products/fruit-flavours.png",
  "white-orange": "/images/products/fruit-flavours.png",
  "day-night-filling": "/images/products/day-night-filling.png",
  "english-toffee": "/images/products/english-toffee.png",
  "orange": "/images/products/fruit-flavours.png",
  "hazelnut": "/images/products/english-toffee.png",
  "coconut-truffle": "/images/products/coconut-truffle.png",
  "mango-truffle": "/images/products/mango-truffle.png",
  "strawberry-truffle": "/images/products/fruit-flavours.png",

  // Flavour Listings
  "mango-flavour": "/images/products/mango-truffle.png",
  "strawberry-flavour": "/images/products/fruit-flavours.png",
  "pineapple-flavour": "/images/products/mango-truffle.png",
  "pista-flavour": "/images/products/nice-pista.png",

  // Chocolate Treats & Confectionery
  "stuffed-cookies-chocolate": "/images/products/day-night-filling.png",
  "chocolate-beans-bottle": null,
  "stone-chocolate": null,
  "cherry-with-chocolate": "/images/products/fruit-flavours.png",
  "bubble-chocolate": null,
  "chocolate-bar": "/images/products/roasted-cashew-dark.png",
  "glucose-candy": null,
  "cherry": null,
  "milk-almond": "/images/products/roasted-almond.png",
  "dark-almond": "/images/products/roasted-almond.png",
  "white-almond": "/images/products/white-crunchy.png",
  "white-cherry-top": "/images/products/white-crunchy.png",
  "fruit-jelly-100g": null,
  "choco-chips-100g": null,
  "choco-lollipop": null,

  // Cakes & Bakery
  "brownie-with-chocolate": "/images/products/brownie-with-chocolate.webp",
  "red-velvet": null,
  "chocolate-bun": null,

  // Tea & Coffee
  "tea": "/images/products/tea-kodai-special-jar.png",
  "tea-kodai-special": "/images/products/tea-kodai-special-jar.png",
  "tea-masala": "/images/products/tea-masala-jar.png",
  "tea-lemon": "/images/products/tea-lemon-jar.png",
  "tea-cardamom": "/images/products/tea-cardamom-jar.jpg",
  "coffee": "/images/products/coffee.webp",
  "herbal-tea-all-varieties": "/images/products/herbal-tea-all-varieties.webp",
  "blue-tea": null,
  "tea-varieties": "/images/products/tea-masala-jar.png",
  "ginger-tea": "/images/products/ginger-tea.webp",
  "instant-filter-coffee": null,
  "hot-chocolate-coffee": "/images/products/hot-chocolate-coffee.webp",
  "drinking-chocolate": null,
  "green-tea": "/images/products/green-tea-jar.png",

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
  "aloe-vera-gel": "/images/products/aloe-vera-face-gel.png",
  "cold-moisturiser-lotion": "/images/products/cold-moisturiser-lotion.png",
  "avocado-jojoba-lotion": "/images/products/avocado-jojoba-lotion.png",
  "saffron-body-wash": "/images/products/saffron-body-wash.png",
  "lavender-body-wash": "/images/products/lavender-body-wash.png",
  "neem-aloevera-body-wash": "/images/products/neem-aloevera-body-wash.png",
  "avocado-face-wash": "/images/products/avocado-face-wash-hq.jpg",
  "hibiscus-face-wash": "/images/products/hibiscus-face-wash-hq.jpg",
  "neem-papaya-face-wash": "/images/products/neem-papaya-face-wash-hq.jpg",
  "orange-face-wash": "/images/products/orange-face-wash-hq.jpg",
  "vetiver-oil": "/images/finds/botanical-oils.jpg",
  "shampoo": "/images/products/shampoo-aloevera.png",
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
  "sandal-soap": "/images/products/sandal-soap.jpg",
  "charcoal-soap": "/images/products/charcoal-soap.jpg",
  "neem-tulsi-soap": "/images/products/neem-tulsi-soap.jpg",
  "avocado-soap": "/images/products/avocado-soap.jpg",
  "multani-mitti-soap": "/images/products/multani-mitti-soap.jpg",
  "shea-butter-soap": "/images/products/shea-butter-soap.jpg",
  "orange-soap": "/images/products/orange-soap.jpg",

  // Other / Requires Confirmation
  "sandalwood-colors": "/images/products/sandalwood-colors.webp",
  "wine-bottle": null,
};

/**
 * Optional multi-image galleries per product family or slug.
 */
export const productGalleries: Record<string, string[]> = {
  // Chocolates Multi-View Galleries
  "white-crunchy": ["/images/products/white-crunchy.png", "/images/products/nice-pista.png"],
  "white-butterscotch": ["/images/products/white-butterscotch.png", "/images/products/white-marble.png"],
  "nice-pista": ["/images/products/nice-pista.png", "/images/products/white-crunchy.png"],
  "white-marble": ["/images/products/white-marble.png", "/images/products/white-butterscotch.png"],
  "dama-fruit-nut": ["/images/products/dama-fruit-nut.png", "/images/products/english-toffee.png"],
  "milk-butterscotch": ["/images/products/dama-fruit-nut.png", "/images/products/white-butterscotch.png"],
  "day-night-basic": ["/images/products/day-night-basic.png", "/images/products/day-night-filling.png"],
  "day-night-filling": ["/images/products/day-night-filling.png", "/images/products/day-night-basic.png"],
  "roasted-almond": ["/images/products/roasted-almond.png", "/images/products/roasted-cashew-dark.png"],
  "roasted-cashew-white": ["/images/products/nice-pista.png", "/images/products/white-crunchy.png"],
  "roasted-cashew-dark": ["/images/products/roasted-cashew-dark.png", "/images/products/roasted-almond.png"],
  "dark-honey": ["/images/products/roasted-almond.png", "/images/products/roasted-cashew-dark.png"],
  "dark-black-currant": ["/images/products/fruit-flavours.png"],
  "milk-mango": ["/images/products/mango-truffle.png", "/images/products/fruit-flavours.png"],
  "milk-green-apple": ["/images/products/fruit-flavours.png"],
  "white-strawberry": ["/images/products/fruit-flavours.png"],
  "white-orange": ["/images/products/fruit-flavours.png"],
  "english-toffee": ["/images/products/english-toffee.png", "/images/products/dama-fruit-nut.png"],
  "orange": ["/images/products/fruit-flavours.png"],
  "hazelnut": ["/images/products/english-toffee.png", "/images/products/roasted-cashew-dark.png"],
  "coconut-truffle": ["/images/products/coconut-truffle.png", "/images/products/white-crunchy.png"],
  "mango-truffle": ["/images/products/mango-truffle.png", "/images/products/fruit-flavours.png"],
  "strawberry-truffle": ["/images/products/fruit-flavours.png"],
  "mango-flavour": ["/images/products/mango-truffle.png"],
  "strawberry-flavour": ["/images/products/fruit-flavours.png"],
  "chocolate-bar": ["/images/products/roasted-cashew-dark.png", "/images/products/roasted-almond.png"],
  "stuffed-cookies-chocolate": ["/images/products/day-night-filling.png"],

  // Teas & Coffees
  "tea": [
    "/images/products/tea-kodai-special-jar.png",
    "/images/products/tea-masala-jar.png",
    "/images/products/tea-lemon-jar.png",
    "/images/products/tea-cardamom-jar.jpg",
    "/images/products/tea.webp",
  ],
  "tea-kodai-special": [
    "/images/products/tea-kodai-special-jar.png",
    "/images/products/tea-kodai-special.jpg",
  ],
  "tea-masala": [
    "/images/products/tea-masala-jar.png",
    "/images/products/tea-masala.jpg",
  ],
  "tea-lemon": [
    "/images/products/tea-lemon-jar.png",
    "/images/products/tea-lemon.jpg",
  ],
  "tea-cardamom": [
    "/images/products/tea-cardamom-jar.jpg",
    "/images/products/tea-cardamom.jpg",
  ],
  "tea-varieties": [
    "/images/products/tea-masala-jar.png",
    "/images/products/tea-kodai-special-jar.png",
    "/images/products/tea-varieties.webp",
    "/images/products/green-tea-jar.png",
  ],
  "herbal-tea-all-varieties": [
    "/images/products/herbal-tea-all-varieties.webp",
    "/images/products/ginger-tea.webp",
    "/images/products/tea-cardamom-jar.jpg",
  ],
  "green-tea": [
    "/images/products/green-tea-jar.png",
    "/images/products/green-tea.jpg",
  ],

  // Personal Care & Botanicals
  "body-lotion": [
    "/images/products/cold-moisturiser-lotion.png",
    "/images/products/avocado-jojoba-lotion.png",
    "/images/products/cold-moisturiser-lotion.jpg",
    "/images/products/avocado-jojoba-lotion.jpg",
  ],
  "body-wash": [
    "/images/products/saffron-body-wash.png",
    "/images/products/lavender-body-wash.png",
    "/images/products/neem-aloevera-body-wash.png",
    "/images/products/saffron-body-wash.jpg",
    "/images/products/lavender-body-wash.jpg",
    "/images/products/neem-aloevera-body-wash.jpg",
  ],
  "face-wash": [
    "/images/products/orange-face-wash-hq.jpg",
    "/images/products/avocado-face-wash-hq.jpg",
    "/images/products/hibiscus-face-wash-hq.jpg",
    "/images/products/neem-papaya-face-wash-hq.jpg",
    "/images/products/orange-face-wash.jpg",
    "/images/products/avocado-face-wash.jpg",
    "/images/products/hibiscus-face-wash.jpg",
    "/images/products/neem-papaya-face-wash.jpg",
  ],
  "aloe-vera-gel": ["/images/products/aloe-vera-face-gel.png", "/images/products/aloe-vera-face-gel.jpg"],
  "saffron-body-wash": ["/images/products/saffron-body-wash.png", "/images/products/saffron-body-wash.jpg"],
  "lavender-body-wash": ["/images/products/lavender-body-wash.png", "/images/products/lavender-body-wash.jpg"],
  "neem-aloevera-body-wash": ["/images/products/neem-aloevera-body-wash.png", "/images/products/neem-aloevera-body-wash.jpg"],
  "cold-moisturiser-lotion": ["/images/products/cold-moisturiser-lotion.png", "/images/products/cold-moisturiser-lotion.jpg"],
  "avocado-jojoba-lotion": ["/images/products/avocado-jojoba-lotion.png", "/images/products/avocado-jojoba-lotion.jpg"],
  "avocado-face-wash": ["/images/products/avocado-face-wash-hq.jpg", "/images/products/avocado-face-wash.jpg"],
  "hibiscus-face-wash": ["/images/products/hibiscus-face-wash-hq.jpg", "/images/products/hibiscus-face-wash.jpg"],
  "neem-papaya-face-wash": ["/images/products/neem-papaya-face-wash-hq.jpg", "/images/products/neem-papaya-face-wash.jpg"],
  "orange-face-wash": ["/images/products/orange-face-wash-hq.jpg", "/images/products/orange-face-wash.jpg"],
  "shampoo": [
    "/images/products/shampoo-aloevera.png",
    "/images/products/shampoo-charcoal.png",
    "/images/products/shampoo.webp",
  ],
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

  // Artisan Soaps
  "sandal-soap": ["/images/products/sandal-soap.jpg", "/images/products/sandal-soap.webp"],
  "charcoal-soap": ["/images/products/charcoal-soap.jpg", "/images/products/charcoal-soap.webp"],
  "neem-tulsi-soap": ["/images/products/neem-tulsi-soap.jpg", "/images/products/neem-tulsi-soap.webp"],
  "avocado-soap": ["/images/products/avocado-soap.jpg", "/images/products/avocado-soap.webp"],
  "multani-mitti-soap": ["/images/products/multani-mitti-soap.jpg", "/images/products/multani-mitti-soap.webp"],
  "shea-butter-soap": ["/images/products/shea-butter-soap.jpg", "/images/products/shea-butter-soap.webp"],
  "orange-soap": ["/images/products/orange-soap.jpg", "/images/products/orange-soap.webp"],
};
