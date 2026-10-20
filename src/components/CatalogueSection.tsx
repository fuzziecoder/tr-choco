import React, { useState, useEffect, useMemo, useRef } from "react";
import { products } from "../data/products";
import { categories } from "../data/categories";
import { collections } from "../data/collections";
import type {
  CatalogueProduct,
  CategoryId,
  CollectionId,
  CatalogueFilterState,
} from "../types/catalogue";
import { ProductCard } from "./ProductCard";
import { SpecularCTA } from "./SpecularCTA";
import { scrollToSection } from "../utils/navigation";
import {
  Search,
  RotateCcw,
  Sparkles,
  Filter,
  X,
  ArrowRight,
  CheckCircle2,
  Grid,
} from "lucide-react";

interface CatalogueSectionProps {
  filterState: CatalogueFilterState;
  setFilterState: React.Dispatch<React.SetStateAction<CatalogueFilterState>>;
  onSelectProduct: (product: CatalogueProduct) => void;
}

interface CategoryCardDefinition {
  id: CategoryId | "all";
  name: string;
  theme: "all" | "blue" | "peach" | "rose" | "coral" | "sand" | "honey" | "mint" | "lavender";
  image: string;
  alt: string;
  subtitle: string;
}

const CATEGORY_CARDS: CategoryCardDefinition[] = [
  {
    id: "all",
    name: "All Items",
    theme: "all",
    image: "/images/hero/hero_pastry_tower.jpg",
    alt: "Complete Artisanal Catalogue Collection",
    subtitle: "Complete archive of confectionery, bakes & pantry",
  },
  {
    id: "chocolates",
    name: "Chocolates",
    theme: "blue",
    image: "/images/collections/flavours-favourites.jpg",
    alt: "Artisan Handcrafted Chocolates",
    subtitle: "Blocks, nut clusters, pralines & truffles",
  },
  {
    id: "confectionery",
    name: "Confectionery",
    theme: "peach",
    image: "/images/products/glucose-candy.webp",
    alt: "Glucose Candy and Confectionery Treats",
    subtitle: "Glucose candies, cherries with chocolate & sweets",
  },
  {
    id: "cakes-bakery",
    name: "Bakery",
    theme: "rose",
    image: "/images/hero/bento_sponge_slice.jpg",
    alt: "Fresh Bakes and Cakes",
    subtitle: "Chocolate brownies, chocolate buns & bakes",
  },
  {
    id: "tea-coffee",
    name: "Tea & Coffee",
    theme: "coral",
    image: "/images/products/green-tea.jpg",
    alt: "Hillside Teas and Single Origin Coffee",
    subtitle: "Nilgiri teas, herbal brews & filter roasts",
  },
  {
    id: "cafe",
    name: "Café",
    theme: "sand",
    image: "/images/hero/bento_cupcake_cherry.jpg",
    alt: "Fresh Café Food and Chilled Refreshments",
    subtitle: "Puffs, sandwiches & chilled milkshakes",
  },
  {
    id: "pantry",
    name: "Pantry",
    theme: "honey",
    image: "/images/finds/pantry-ghee-honey.jpg",
    alt: "Pure Traditional Pantry Staples",
    subtitle: "Pure traditional ghee & forest honey",
  },
  {
    id: "personal-care",
    name: "Personal Care",
    theme: "mint",
    image: "/images/products/aloe-vera-face-gel.jpg",
    alt: "Botanical Skincare and Care Essentials",
    subtitle: "Aloe vera gel, body washes & botanical oils",
  },
  {
    id: "other",
    name: "Other",
    theme: "lavender",
    image: "/images/hero/bento_macaron_lavender.jpg",
    alt: "Curated Specialty and Seasonal Items",
    subtitle: "Curated specialties & boutique creations",
  },
];

/**
 * Responsive preview limit hook based on displayed grid columns:
 * - Four-column desktop layout (>1280px): 8 products (4 cols * 2 rows)
 * - Three-column layout (992px - 1280px): 6 products (3 cols * 2 rows)
 * - Two-column tablet layout (641px - 991px): 4 products (2 cols * 2 rows)
 * - One-column mobile layout (<=640px): 2 products (1 col * 2 rows)
 */
function usePreviewLimit(): number {
  const [limit, setLimit] = useState<number>(() => {
    if (typeof window === "undefined") return 8;
    const w = window.innerWidth;
    if (w > 1280) return 8;
    if (w > 991) return 6;
    if (w > 640) return 4;
    return 2;
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      let next = 8;
      if (w > 1280) next = 8;
      else if (w > 991) next = 6;
      else if (w > 640) next = 4;
      else next = 2;
      setLimit(next);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return limit;
}

export const CatalogueSection: React.FC<CatalogueSectionProps> = ({
  filterState,
  setFilterState,
  onSelectProduct,
}) => {
  const [viewMode, setViewMode] = useState<"preview" | "full">("preview");
  const previewLimit = usePreviewLimit();
  const previewSectionRef = useRef<HTMLDivElement>(null);
  const productGridRef = useRef<HTMLDivElement>(null);

  // Confirmed available sizes from the catalogue
  const availableSizes = [
    { label: "All Sizes", value: "all" },
    { label: "250 g", value: "250 g" },
    { label: "500 g", value: "500 g" },
    { label: "750 g", value: "750 g" },
    { label: "1 kg", value: "1 kg" },
    { label: "100 g", value: "100 g" },
    { label: "400 ml", value: "400 ml" },
  ];

  // Helper to dynamically derive category count from actual products
  const getCategoryCount = (id: CategoryId | "all" | "none"): number => {
    if (id === "all" || id === "none") return products.length;
    return products.filter((p) => p.categoryId === id).length;
  };

  // Generate category-specific "View All" label from category data
  const getViewAllButtonLabel = (catId: CategoryId | "all" | "none"): string => {
    if (catId === "none") return `View All Items (${products.length})`;
    const count = getCategoryCount(catId);
    if (catId === "all") return `View All Items (${count})`;
    const cardDef = CATEGORY_CARDS.find((c) => c.id === catId);
    const label = cardDef?.name || "Products";
    return `View All ${label} (${count})`;
  };

  // Update filter criteria
  const updateFilter = (updates: Partial<CatalogueFilterState>) => {
    setFilterState((prev) => ({ ...prev, ...updates }));
  };

  const clearAllFilters = () => {
    setFilterState((prev) => ({
      ...prev,
      searchQuery: "",
      selectedCollection: "all",
      selectedSize: "all",
    }));
  };

  const handleSelectCategory = (catId: CategoryId | "all", forceMode?: "preview" | "full") => {
    // If clicking the currently selected category in preview mode, toggle back to overview
    if (filterState.selectedCategory === catId && viewMode === "preview" && !forceMode) {
      handleReturnToCategories();
      return;
    }

    const nextMode = forceMode || "preview";
    setViewMode(nextMode);
    updateFilter({
      selectedCategory: catId,
      searchQuery: "",
      selectedCollection: "all",
      selectedSize: "all",
    });

    // Smooth scroll down without changing URL hash
    setTimeout(() => {
      if (nextMode === "full") {
        scrollToSection("full-catalogue-view", { additionalOffset: 16 });
      } else {
        scrollToSection("category-preview-section", { additionalOffset: 16 });
      }
    }, 60);
  };

  const handleOpenFullCatalogue = () => {
    setViewMode("full");
    setTimeout(() => {
      scrollToSection("full-catalogue-view", { additionalOffset: 16 });
    }, 60);
  };

  const handleReturnToCategories = () => {
    setViewMode("preview");
    updateFilter({
      selectedCategory: "none",
      searchQuery: "",
      selectedCollection: "all",
      selectedSize: "all",
    });
    scrollToSection("catalogue", { additionalOffset: 16 });
  };

  const handleSwitchToPreview = () => {
    setViewMode("preview");
    scrollToSection("category-preview-section", { additionalOffset: 16 });
  };

  const isCategorySelected = filterState.selectedCategory !== "none";

  // Filter products based on search, category, collection, and size for full catalogue view
  const filteredProducts = useMemo(() => {
    if (filterState.selectedCategory === "none") {
      return [];
    }

    return products.filter((prod) => {
      // 1. Search Query
      if (filterState.searchQuery.trim()) {
        const query = filterState.searchQuery.toLowerCase().trim();
        const matchesName = prod.name.toLowerCase().includes(query);
        const matchesDesc = prod.description?.toLowerCase().includes(query) ?? false;
        const matchesSource = prod.sourceNames.some((sn) =>
          sn.toLowerCase().includes(query)
        );
        if (!matchesName && !matchesDesc && !matchesSource) return false;
      }

      // 2. Category
      if (filterState.selectedCategory !== "all") {
        if (prod.categoryId !== filterState.selectedCategory) return false;
      }

      // 3. Collection
      if (filterState.selectedCollection !== "all") {
        if (!prod.collectionIds.includes(filterState.selectedCollection)) return false;
      }

      // 4. Confirmed Size
      if (filterState.selectedSize !== "all") {
        const matchesSize = prod.variants.some((v) => v.label === filterState.selectedSize);
        if (!matchesSize) return false;
      }

      return true;
    });
  }, [filterState]);

  // Two-row preview products: featured/editorialBadge items first, keeping original catalog order
  const previewProducts = useMemo(() => {
    if (filterState.selectedCategory === "none") return [];
    const categoryItems =
      filterState.selectedCategory === "all"
        ? products
        : products.filter((p) => p.categoryId === filterState.selectedCategory);

    const featured = categoryItems.filter((p) => p.featured || Boolean(p.editorialBadge));
    const normal = categoryItems.filter((p) => !p.featured && !Boolean(p.editorialBadge));
    const ordered = [...featured, ...normal];

    // Limit the actual displayed product list to previewLimit (never hide with fixed-height overflow container)
    return ordered.slice(0, previewLimit);
  }, [filterState.selectedCategory, previewLimit]);

  // Active category display title and details
  const activeCategoryInfo = useMemo(() => {
    if (filterState.selectedCategory === "all") {
      return {
        name: "All Items",
        description: "Viewing handcrafted listings across chocolates, confections, bakes, and botanicals.",
        total: products.length,
      };
    }
    if (filterState.selectedCategory === "none") {
      return null;
    }
    const cardDef = CATEGORY_CARDS.find((c) => c.id === filterState.selectedCategory);
    const cat = categories.find((c) => c.id === filterState.selectedCategory);
    return {
      name: cardDef?.name || cat?.label || "Selected Category",
      description: cardDef?.subtitle || cat?.description || "",
      total: products.filter((p) => p.categoryId === filterState.selectedCategory).length,
    };
  }, [filterState.selectedCategory]);

  const hasActiveSecondaryFilters =
    filterState.searchQuery.trim() !== "" ||
    filterState.selectedCollection !== "all" ||
    filterState.selectedSize !== "all";

  return (
    <section id="catalogue" className="catalogue-section" aria-labelledby="catalogue-heading">
      {/* Scope: Preserved Heading & Subtitle */}
      <div className="section-header">
        <span className="section-eyebrow">
          <Sparkles size={13} />
          <span>COMPLETE CATALOGUE</span>
        </span>
        <h2 id="catalogue-heading" className="section-title">
          Artisanal Chocolate & Vitrine Archive
        </h2>
        <p className="section-description">
          {isCategorySelected
            ? viewMode === "preview"
              ? `Previewing top artisanal selections in ${activeCategoryInfo?.name}. Click "${getViewAllButtonLabel(filterState.selectedCategory)}" below to open the complete vitrine.`
              : `Explore all ${filteredProducts.length} listings in ${activeCategoryInfo?.name || "this category"}.`
            : `Select a category below to explore our ${products.length} handcrafted listings across nine departments, or choose "All Items" to view the complete collection.`}
        </p>
      </div>

      {/* 2. IMAGE-BASED CATEGORY CARDS (Nine Categories Grid) */}
      <div className="shop-by-category-container" aria-label="Category Selection Grid">
        <div className="shop-by-category-header">
          <div className="shop-by-category-title-wrap">
            <h3 className="shop-by-category-heading">Search By Category</h3>
            <span className="shop-by-category-sublabel">9 Curated Departments</span>
          </div>

          <div className="category-header-actions">
            {isCategorySelected && (
              <button
                type="button"
                className="return-to-categories-btn"
                onClick={handleReturnToCategories}
                aria-label="Return to category overview"
              >
                <Grid size={15} />
                <span>Category Overview</span>
              </button>
            )}

            <button
              type="button"
              className={`shop-by-category-view-all ${
                filterState.selectedCategory === "all" ? "is-selected-view-all" : ""
              }`}
              onClick={() => handleSelectCategory("all")}
              aria-label="View All Items (75)"
            >
              <span>View All ({products.length})</span>
              <ArrowRight size={14} className="view-all-arrow" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* 9 Categories in Single Horizontal Row on Desktop */}
        <div className="shop-by-category-grid nine-categories-grid">
          {CATEGORY_CARDS.map((cat) => {
            const count = getCategoryCount(cat.id);
            const isSelected = filterState.selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                className={`category-showcase-card theme-${cat.theme} ${
                  isSelected ? "is-active" : ""
                }`}
                onClick={() => handleSelectCategory(cat.id)}
                aria-pressed={isSelected}
                aria-label={`Category ${cat.name}, ${count} products available. ${
                  isSelected ? "Currently selected." : "Click to view preview."
                }`}
              >
                <div className="category-card-content">
                  <div className="category-card-header-line">
                    <h4 className="category-card-title">{cat.name}</h4>
                    {isSelected && (
                      <span className="category-active-indicator" title="Selected Category">
                        <CheckCircle2 size={13} />
                      </span>
                    )}
                  </div>

                  <span className="category-card-count">
                    {count} {count === 1 ? "Product" : "Products"}
                  </span>
                </div>

                <div className="category-card-visual" aria-hidden="true">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={90}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. INITIAL STATE: Prompt when no category has been selected */}
      {!isCategorySelected && (
        <div className="catalogue-initial-prompt" aria-live="polite">
          <div className="initial-prompt-inner">
            <div className="initial-prompt-icon" aria-hidden="true">
              <Sparkles size={28} />
            </div>
            <h3 className="initial-prompt-title">Select a Category to Explore</h3>
            <p className="initial-prompt-desc">
              Choose any of the 9 categories above to browse handcrafted chocolates, confection gems,
              hillside brews, and pure botanicals—or view the complete 75-item vitrine.
            </p>
            <div className="initial-prompt-actions">
              <SpecularCTA
                variant="primary"
                size="md"
                onClick={() => handleSelectCategory("all")}
              >
                View All {products.length} Products
              </SpecularCTA>
              <SpecularCTA
                variant="secondary"
                size="md"
                onClick={() => handleSelectCategory("chocolates")}
              >
                Browse Artisan Chocolates (28)
              </SpecularCTA>
            </div>
          </div>
        </div>
      )}

      {/* 2. TWO-ROW COMPACT PRODUCT PREVIEW WITH CATEGORY-SPECIFIC "VIEW ALL" BUTTON */}
      {isCategorySelected && viewMode === "preview" && (
        <div
          id="category-preview-section"
          ref={previewSectionRef}
          className="category-preview-section"
          aria-live="polite"
        >
          <div className="preview-header-banner">
            <div className="preview-header-info">
              <span className="preview-badge">
                <Sparkles size={13} />
                <span>Two-Row Category Preview</span>
              </span>
              <h3 className="preview-category-title">{activeCategoryInfo?.name}</h3>
              <p className="preview-category-desc">
                {activeCategoryInfo?.description ||
                  `Previewing main artisanal listings from our ${activeCategoryInfo?.name} department.`}
              </p>
            </div>

            <div className="active-category-banner-actions">
              <button
                type="button"
                className="back-to-categories-pill"
                onClick={handleReturnToCategories}
                aria-label="Back to Category Selection overview"
              >
                <Grid size={15} />
                <span>All Categories</span>
              </button>

              <div className="active-count-chip">
                Showing <strong>{previewProducts.length}</strong> of {activeCategoryInfo?.total}{" "}
                {activeCategoryInfo?.total === 1 ? "product" : "products"}
              </div>
            </div>
          </div>

          {/* Compact 2-Row Preview Grid (limited to previewProducts.length, max 2 rows) */}
          <div className="catalogue-grid" aria-label={`${activeCategoryInfo?.name} 2-Row Product Preview`}>
            {previewProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>

          {/* Category-Specific View All CTA beneath the preview grid */}
          <div className="preview-view-all-cta-wrap">
            <SpecularCTA
              variant="primary"
              size="lg"
              onClick={handleOpenFullCatalogue}
              ariaLabel={`${getViewAllButtonLabel(filterState.selectedCategory)}. Open complete catalogue vitrine.`}
            >
              <span>{getViewAllButtonLabel(filterState.selectedCategory)}</span>
              <ArrowRight size={16} />
            </SpecularCTA>
            <span className="preview-cta-subtext">
              Explore all {activeCategoryInfo?.total} items in {activeCategoryInfo?.name} with search, collection filters & confirmed sizes
            </span>
          </div>
        </div>
      )}

      {/* 3. COMPLETE CATALOGUE SECTION: Full Vitrine when user clicks "View All" */}
      {isCategorySelected && viewMode === "full" && (
        <div
          id="full-catalogue-view"
          ref={productGridRef}
          className="active-category-results-section"
          aria-live="polite"
        >
          {/* Active Category Heading & Navigation */}
          <div className="active-category-banner">
            <div className="active-category-info">
              <div className="active-category-eyebrow">
                <span>COMPLETE CATEGORY VITRINE</span>
              </div>
              <h3 className="active-category-title">{activeCategoryInfo?.name}</h3>
              {activeCategoryInfo?.description && (
                <p className="active-category-desc">{activeCategoryInfo.description}</p>
              )}
            </div>

            <div className="active-category-banner-actions">
              <button
                type="button"
                className="back-to-categories-pill"
                onClick={handleSwitchToPreview}
                aria-label="Return to two-row preview for this category"
              >
                <Sparkles size={14} />
                <span>Compact Preview</span>
              </button>

              <button
                type="button"
                className="back-to-categories-pill"
                onClick={handleReturnToCategories}
                aria-label="Back to Category Selection overview"
              >
                <Grid size={15} />
                <span>All Categories</span>
              </button>

              <div className="active-count-chip">
                Showing <strong>{filteredProducts.length}</strong> of {activeCategoryInfo?.total}{" "}
                {activeCategoryInfo?.total === 1 ? "product" : "products"}
              </div>
            </div>
          </div>

          {/* Search and Secondary Filter Controls */}
          <div className="catalogue-toolbar">
            {/* Search Bar */}
            <div className="catalogue-search-wrap">
              <Search size={18} className="search-icon" aria-hidden="true" />
              <input
                type="search"
                value={filterState.searchQuery}
                onChange={(e) => updateFilter({ searchQuery: e.target.value })}
                placeholder={`Search within ${activeCategoryInfo?.name}...`}
                className="catalogue-search-input"
                aria-label={`Search products within ${activeCategoryInfo?.name}`}
              />
              {filterState.searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => updateFilter({ searchQuery: "" })}
                  aria-label="Clear search input"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Clear Active Secondary Filters Button */}
            {hasActiveSecondaryFilters && (
              <button
                type="button"
                className="clear-filters-btn"
                onClick={clearAllFilters}
                aria-label="Reset search and filters within this category"
              >
                <RotateCcw size={14} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Collection & Confirmed Size Secondary Filter Row */}
          <div className="secondary-filter-row">
            {/* Collection Filter */}
            <div className="filter-subgroup">
              <span className="filter-label">Collection:</span>
              <select
                value={filterState.selectedCollection}
                onChange={(e) =>
                  updateFilter({ selectedCollection: e.target.value as CollectionId | "all" })
                }
                className="filter-select"
                aria-label="Filter by Chocolate Collection"
              >
                <option value="all">All Collections</option>
                {collections.map((col) => (
                  <option key={col.id} value={col.id}>
                    {col.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Confirmed Size Dropdown */}
            <div className="filter-subgroup">
              <span className="filter-label">Confirmed Size:</span>
              <select
                value={filterState.selectedSize}
                onChange={(e) => updateFilter({ selectedSize: e.target.value })}
                className="filter-select"
                aria-label="Filter by Confirmed Size"
              >
                {availableSizes.map((sz) => (
                  <option key={sz.value} value={sz.value}>
                    {sz.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count Tag */}
            <div className="results-count-tag" aria-live="polite">
              Displaying <strong>{filteredProducts.length}</strong> matching{" "}
              {filteredProducts.length === 1 ? "family" : "families"}
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="catalogue-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={onSelectProduct}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="catalogue-empty-state">
              <div className="empty-state-icon" aria-hidden="true">
                <Filter size={32} />
              </div>
              <h3 className="empty-state-title">No matching products found</h3>
              <p className="empty-state-desc">
                No items in <strong>{activeCategoryInfo?.name}</strong> match your current search
                or size filters.
              </p>
              <div className="empty-state-actions">
                <SpecularCTA variant="primary" size="sm" onClick={clearAllFilters}>
                  Clear Active Filters
                </SpecularCTA>
                <SpecularCTA variant="secondary" size="sm" onClick={handleReturnToCategories}>
                  Browse All Categories
                </SpecularCTA>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
