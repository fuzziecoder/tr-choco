export type CategoryId =
  | "chocolates"
  | "cakes-bakery"
  | "tea-coffee"
  | "cafe"
  | "confectionery"
  | "pantry"
  | "personal-care"
  | "other";

export interface Category {
  id: CategoryId;
  label: string;
  shortLabel?: string;
  description: string;
  badgeCount?: number;
}

export type CollectionId =
  | "white-chocolate"
  | "milk-chocolate"
  | "dark-chocolate"
  | "truffles-filled"
  | "flavours-favourites";

export interface Collection {
  id: CollectionId;
  title: string;
  subtitle: string;
  editorialNote: string;
  accentColor: string;
  image: string;
  bgGradient: string;
  filterSlug: string;
}

export interface ProductVariant {
  id: string;
  label: string;
  weightGrams?: number;
  volumeMl?: number;
  sourceName: string;
  sourceReferences?: string[];
  sourceItemCode?: string;
  sellingPrice: number | null;
  image?: string;
}

export interface CatalogueProduct {
  id: string;
  slug: string;
  name: string;
  sourceNames: string[];
  categoryId: CategoryId;
  collectionIds: string[];
  description: string | null;
  image: string | null;
  gallery: string[];
  variants: ProductVariant[];
  featured: boolean;
  needsReview: boolean;
  reviewNotes?: string[];
  editorialBadge?: string;
  palette?: {
    bg: string;
    border: string;
    accent: string;
  };
}

export interface CatalogueFilterState {
  searchQuery: string;
  selectedCategory: CategoryId | "all";
  selectedCollection: CollectionId | "all";
  selectedSize: string | "all"; // e.g. "250 g", "500 g", "750 g", "1 kg", "100 g", "400 ml"
}
