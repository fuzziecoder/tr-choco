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
  "white-crunchy": "/images/products/white-crunchy.webp",
  "white-butterscotch": "/images/products/white-butterscotch.webp",
  "nice-pista": "/images/products/nice-pista.webp",
  "white-marble": "/images/products/white-marble.webp",
  "milk-butterscotch": "/images/products/white-butterscotch.webp",
  "day-night-basic": "/images/products/day-night-basic.webp",
  "roasted-almond": "/images/products/roasted-almond.webp",
  "roasted-cashew-white": "/images/products/nice-pista.webp",
  "roasted-cashew-dark": "/images/products/roasted-cashew-dark.webp",
  "dark-honey": "/images/products/roasted-almond.webp",
  "dark-black-currant": "/images/products/dark-black-currant.webp",
  "milk-mango": "/images/products/milk-mango.webp",
  "milk-green-apple": "/images/products/milk-green-apple.webp",
  "white-strawberry": "/images/products/white-strawberry.webp",
  "white-orange": "/images/products/white-orange.webp",
  "day-night-filling": "/images/products/day-night-filling.webp",
  "english-toffee": "/images/products/english-toffee.webp",
  "coconut-truffle": "/images/products/coconut-truffle-v2.webp",
  "mango-truffle": "/images/products/mango-truffle-v2.webp",
  "strawberry-truffle": "/images/products/strawberry-truffle-v2.webp",

  // Flavour Listings
  "pineapple-flavour": "/images/products/pineapple-flavour.webp",
  "pista-flavour": "/images/products/nice-pista.webp",

  // Chocolate Treats & Confectionery
  "stuffed-cookies-chocolate": "/images/products/day-night-filling.webp",
  "chocolate-beans-bottle": "/images/products/chocolate-beans-bottle-v2.webp",
  "cherry-with-chocolate": "/images/products/cherry-with-chocolate.webp",
  "bubble-chocolate": "/images/products/coconut-truffle.webp",
  "chocolate-bar": "/images/products/roasted-cashew-dark.webp",
  "glucose-candy": "/images/products/glucose-candy.webp",
  "milk-almond": "/images/products/roasted-almond.webp",
  "dark-almond": "/images/products/roasted-almond.webp",
  "white-almond": "/images/products/white-crunchy.webp",
  "choco-chips-100g": "/images/products/roasted-almond.webp",
  "choco-lollipop": "/images/products/fruit-flavours.webp",

  // Cakes & Bakery
  "brownie-with-chocolate": "/images/products/brownie-with-chocolate.webp",
  "chocolate-bun": "/images/products/chocolate-bun.webp",

  // Tea & Coffee
  "tea": "/images/products/tea-kodai-special-jar.webp",
  "tea-kodai-special": "/images/products/tea-kodai-special-jar.webp",
  "tea-masala": "/images/products/tea-masala-jar.webp",
  "tea-lemon": "/images/products/tea-lemon-jar.webp",
  "tea-cardamom": "/images/products/tea-cardamom-jar.webp",
  "coffee": "/images/products/coffee.webp",
  "herbal-tea-all-varieties": "/images/products/herbal-tea-all-varieties.webp",
  "blue-tea": "/images/products/green-tea-jar.webp",
  "tea-varieties": "/images/products/tea-masala-jar.webp",
  "ginger-tea": "/images/products/ginger-tea.webp",
  "instant-filter-coffee": "/images/products/coffee.webp",
  "hot-chocolate-coffee": "/images/products/hot-chocolate-coffee.webp",
  "drinking-chocolate": "/images/products/hot-chocolate-coffee.webp",
  "green-tea": "/images/products/green-tea-jar.webp",

  // Café Food & Drinks
  "egg-puffs": "/images/products/veg-sandwich.webp",
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
  "aloe-vera-gel": "/images/products/aloe-vera-face-gel.webp",
  "cold-moisturiser-lotion": "/images/products/cold-moisturiser-lotion.webp",
  "avocado-jojoba-lotion": "/images/products/avocado-jojoba-lotion.webp",
  "saffron-body-wash": "/images/products/saffron-body-wash.webp",
  "lavender-body-wash": "/images/products/lavender-body-wash.webp",
  "neem-aloevera-body-wash": "/images/products/neem-aloevera-body-wash.webp",
  "avocado-face-wash": "/images/products/avocado-face-wash-hq.webp",
  "hibiscus-face-wash": "/images/products/swasthya-face-wash-hibiscus.webp",
  "swasthya-face-wash-hibiscus": "/images/products/swasthya-face-wash-hibiscus.webp",
  "neem-papaya-face-wash": "/images/products/neem-papaya-face-wash-hq.webp",
  "orange-face-wash": "/images/products/orange-face-wash-hq.webp",
  "shampoo": "/images/products/shampoo-aloevera.webp",
  "rosewater-multani-mitti-combo": "/images/products/rosewater-multani-mitti-combo.webp",
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

  // Other / Specialty Items
  "sandalwood-colors": "/images/products/sandalwood-colors.webp",
};

/**
 * Optional multi-image galleries per product family or slug.
 */
export const productGalleries: Record<string, string[]> = {
  // Chocolates Multi-View Galleries
  "white-crunchy": ["/images/products/white-crunchy.webp", "/images/products/nice-pista.webp"],
  "white-butterscotch": ["/images/products/white-butterscotch.webp", "/images/products/white-marble.webp"],
  "nice-pista": ["/images/products/nice-pista.webp", "/images/products/white-crunchy.webp"],
  "white-marble": ["/images/products/white-marble.webp", "/images/products/white-butterscotch.webp"],
  "milk-butterscotch": ["/images/products/white-butterscotch.webp"],
  "day-night-basic": ["/images/products/day-night-basic.webp", "/images/products/day-night-filling.webp"],
  "day-night-filling": ["/images/products/day-night-filling.webp", "/images/products/day-night-basic.webp"],
  "roasted-almond": ["/images/products/roasted-almond.webp", "/images/products/roasted-cashew-dark.webp"],
  "roasted-cashew-white": ["/images/products/nice-pista.webp", "/images/products/white-crunchy.webp"],
  "roasted-cashew-dark": ["/images/products/roasted-cashew-dark.webp", "/images/products/roasted-almond.webp"],
  "dark-honey": ["/images/products/roasted-almond.webp", "/images/products/roasted-cashew-dark.webp"],
  "dark-black-currant": ["/images/products/dark-black-currant.webp"],
  "milk-mango": ["/images/products/milk-mango.webp"],
  "milk-green-apple": ["/images/products/milk-green-apple.webp"],
  "white-strawberry": ["/images/products/white-strawberry.webp"],
  "white-orange": ["/images/products/white-orange.webp"],
  "english-toffee": ["/images/products/english-toffee.webp", "/images/products/roasted-almond.webp"],
  "coconut-truffle": ["/images/products/coconut-truffle-v2.webp"],
  "mango-truffle": ["/images/products/mango-truffle-v2.webp"],
  "strawberry-truffle": ["/images/products/strawberry-truffle-v2.webp"],
  "pineapple-flavour": ["/images/products/pineapple-flavour.webp"],
  "chocolate-bar": ["/images/products/roasted-cashew-dark.webp", "/images/products/roasted-almond.webp"],
  "cherry-with-chocolate": ["/images/products/cherry-with-chocolate.webp"],
  "chocolate-beans-bottle": ["/images/products/chocolate-beans-bottle-v2.webp"],
  "glucose-candy": ["/images/products/glucose-candy.webp"],
  "chocolate-bun": ["/images/products/chocolate-bun.webp"],
  "stuffed-cookies-chocolate": ["/images/products/day-night-filling.webp"],

  // Teas & Coffees
  "tea": [
    "/images/products/tea-kodai-special-jar.webp",
    "/images/products/tea-masala-jar.webp",
    "/images/products/tea-lemon-jar.webp",
    "/images/products/tea-cardamom-jar.webp",
    "/images/products/tea.webp",
  ],
  "tea-kodai-special": [
    "/images/products/tea-kodai-special-jar.webp",
    "/images/products/tea-kodai-special.webp",
  ],
  "tea-masala": [
    "/images/products/tea-masala-jar.webp",
    "/images/products/tea-masala.webp",
  ],
  "tea-lemon": [
    "/images/products/tea-lemon-jar.webp",
    "/images/products/tea-lemon.webp",
  ],
  "tea-cardamom": [
    "/images/products/tea-cardamom-jar.webp",
    "/images/products/tea-cardamom.webp",
  ],
  "tea-varieties": [
    "/images/products/tea-masala-jar.webp",
    "/images/products/tea-kodai-special-jar.webp",
    "/images/products/tea-varieties.webp",
    "/images/products/green-tea-jar.webp",
  ],
  "herbal-tea-all-varieties": [
    "/images/products/herbal-tea-all-varieties.webp",
    "/images/products/ginger-tea.webp",
    "/images/products/tea-cardamom-jar.webp",
  ],
  "green-tea": [
    "/images/products/green-tea-jar.webp",
    "/images/products/green-tea.webp",
  ],

  // Personal Care & Botanicals
  "body-lotion": [
    "/images/products/cold-moisturiser-lotion.webp",
    "/images/products/avocado-jojoba-lotion.webp",
    "/images/products/cold-moisturiser-lotion.webp",
    "/images/products/avocado-jojoba-lotion.webp",
  ],
  "body-wash": [
    "/images/products/saffron-body-wash.webp",
    "/images/products/lavender-body-wash.webp",
    "/images/products/neem-aloevera-body-wash.webp",
    "/images/products/saffron-body-wash.webp",
    "/images/products/lavender-body-wash.webp",
    "/images/products/neem-aloevera-body-wash.webp",
  ],
  "face-wash": [
    "/images/products/orange-face-wash-hq.webp",
    "/images/products/avocado-face-wash-hq.webp",
    "/images/products/hibiscus-face-wash-hq.webp",
    "/images/products/neem-papaya-face-wash-hq.webp",
    "/images/products/orange-face-wash.webp",
    "/images/products/avocado-face-wash.webp",
    "/images/products/hibiscus-face-wash.webp",
    "/images/products/neem-papaya-face-wash.webp",
  ],
  "aloe-vera-gel": ["/images/products/aloe-vera-face-gel.webp", "/images/products/aloe-vera-face-gel.webp"],
  "saffron-body-wash": ["/images/products/saffron-body-wash.webp", "/images/products/saffron-body-wash.webp"],
  "lavender-body-wash": ["/images/products/lavender-body-wash.webp", "/images/products/lavender-body-wash.webp"],
  "neem-aloevera-body-wash": ["/images/products/neem-aloevera-body-wash.webp", "/images/products/neem-aloevera-body-wash.webp"],
  "cold-moisturiser-lotion": ["/images/products/cold-moisturiser-lotion.webp", "/images/products/cold-moisturiser-lotion.webp"],
  "avocado-jojoba-lotion": ["/images/products/avocado-jojoba-lotion.webp", "/images/products/avocado-jojoba-lotion.webp"],
  "avocado-face-wash": ["/images/products/avocado-face-wash-hq.webp", "/images/products/avocado-face-wash.webp"],
  "hibiscus-face-wash": ["/images/products/swasthya-face-wash-hibiscus.webp", "/images/products/hibiscus-face-wash.webp"],
  "swasthya-face-wash-hibiscus": ["/images/products/swasthya-face-wash-hibiscus.webp", "/images/products/hibiscus-face-wash.webp"],
  "neem-papaya-face-wash": ["/images/products/neem-papaya-face-wash-hq.webp", "/images/products/neem-papaya-face-wash.webp"],
  "orange-face-wash": ["/images/products/orange-face-wash-hq.webp", "/images/products/orange-face-wash.webp"],
  "shampoo": [
    "/images/products/shampoo-aloevera.webp",
    "/images/products/shampoo-charcoal.webp",
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
  "sandal-soap": ["/images/products/sandal-soap.webp", "/images/products/sandal-soap.webp"],
  "charcoal-soap": ["/images/products/charcoal-soap.webp", "/images/products/charcoal-soap.webp"],
  "neem-tulsi-soap": ["/images/products/neem-tulsi-soap.webp", "/images/products/neem-tulsi-soap.webp"],
  "avocado-soap": ["/images/products/avocado-soap.webp", "/images/products/avocado-soap.webp"],
  "multani-mitti-soap": ["/images/products/multani-mitti-soap.webp", "/images/products/multani-mitti-soap.webp"],
  "shea-butter-soap": ["/images/products/shea-butter-soap.webp", "/images/products/shea-butter-soap.webp"],
  "orange-soap": ["/images/products/orange-soap.webp", "/images/products/orange-soap.webp"],
};
