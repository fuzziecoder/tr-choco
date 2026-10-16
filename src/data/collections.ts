import type { Collection } from "../types/catalogue";

export const collections: Collection[] = [
  {
    id: "white-chocolate",
    title: "White Chocolate",
    subtitle: "Silky & Delicate",
    editorialNote: "Pure cocoa butter paired with crunchy butterscotch, marble ribbons, and berry accents.",
    accentColor: "#FFF3CC",
    image: "/images/collections/white-chocolate.jpg",
    bgGradient: "linear-gradient(135deg, #FFF9EA 0%, #FFF3CC 100%)",
    filterSlug: "white-chocolate"
  },
  {
    id: "milk-chocolate",
    title: "Milk Chocolate",
    subtitle: "Creamy & Comforting",
    editorialNote: "Mellow cacao, golden butterscotch crunch, and gentle fruit notes crafted for everyday delight.",
    accentColor: "#EFBACA",
    image: "/images/collections/milk-chocolate.jpg",
    bgGradient: "linear-gradient(135deg, #FDF2E9 0%, #EFBACA 100%)",
    filterSlug: "milk-chocolate"
  },
  {
    id: "dark-chocolate",
    title: "Dark Chocolate",
    subtitle: "Deep & Distinctive",
    editorialNote: "Rich cacao complexity enriched with dark honey notes, crisp black currant, and roasted cashews.",
    accentColor: "#46312D",
    image: "/images/collections/dark-chocolate.jpg",
    bgGradient: "linear-gradient(135deg, #ECE5E2 0%, #D4C5C0 100%)",
    filterSlug: "dark-chocolate"
  },
  {
    id: "truffles-filled",
    title: "Truffles & Filled Chocolates",
    subtitle: "Layers of Lovely",
    editorialNote: "Textured ganache centres, coconut dusting, layered Day & Night creations, and fruit truffles.",
    accentColor: "#D9CFE4",
    image: "/images/collections/truffles-filled.jpg",
    bgGradient: "linear-gradient(135deg, #F3EEF8 0%, #D9CFE4 100%)",
    filterSlug: "truffles-filled"
  },
  {
    id: "flavours-favourites",
    title: "Flavours & Favourites",
    subtitle: "Sweet Little Gestures",
    editorialNote: "Bright tropical mango, sun-ripened strawberry, zesty pineapple, and fragrant pistachio.",
    accentColor: "#E2E9D8",
    image: "/images/collections/flavours-favourites.jpg",
    bgGradient: "linear-gradient(135deg, #F4F8F0 0%, #E2E9D8 100%)",
    filterSlug: "flavours-favourites"
  }
];
