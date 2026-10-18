import React, { useMemo, useRef } from "react";
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
import {
  Search,
  RotateCcw,
  Sparkles,
  Filter,
  X,
  ArrowRight,
  ArrowLeft,
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
    image: "/images/hero/bento_redvelvet_truffle.jpg",
    alt: "Sweets and Confectionery Treats",
    subtitle: "Chocolate beans, dragees & sweet treats",
  },
  {
    id: "cakes-bakery",
    name: "Bakery",
    theme: "rose",
    image: "/images/hero/bento_sponge_slice.jpg",
    alt: "Fresh Bakes and Cakes",
    subtitle: "Chocolate brownies, red velvet & bakes",
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

export const CatalogueSection: React.FC<CatalogueSectionProps> = ({
  filterState,
  setFilterState,
  onSelectProduct,
}) => {
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
  const getCategoryCount = (id: CategoryId | "all"): number => {
    if (id === "all") return products.length;
    return products.filter((p) => p.categoryId === id).length;
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

  const handleSelectCategory = (catId: CategoryId | "all") => {
    // If clicking the currently selected category, toggle back to overview
    if (filterState.selectedCategory === catId) {
      updateFilter({ selectedCategory: "none", searchQuery: "", selectedCollection: "all", selectedSize: "all" });
      return;
    }

    updateFilter({
      selectedCategory: catId,
      searchQuery: "",
      selectedCollection: "all",
      selectedSize: "all",
    });

    // Smooth scroll down to the product section
    setTimeout(() => {
      productGridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleReturnToCategories = () => {
    updateFilter({
      selectedCategory: "none",
      searchQuery: "",
      selectedCollection: "all",
      selectedSize: "all",
    });
    const catalogueEl = document.querySelector("#catalogue");
    if (catalogueEl) {
      catalogueEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isCategorySelected = filterState.selectedCategory !== "none";

  // Filter products based on search, category, collection, and size
  const filteredProducts = useMemo(() => {
    // If no category has been selected yet, do not display products immediately
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

  // Active category display title and details
  const activeCategoryInfo = useMemo(() => {
    if (filterState.selectedCategory === "all") {
      return {
        name: "All Items",
        description: "Viewing all 75 catalogue listings across chocolates, confections, bakes, and botanicals.",
        total: products.length,
      };
    }
    if (filterState.selectedCategory === "none") {
      return null;
    }
    const cat = categories.find((c) => c.id === filterState.selectedCategory);
    return {
      name: cat?.label || "Selected Category",
      description: cat?.description || "",
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
            ? `Explore our ${filteredProducts.length} listings in ${activeCategoryInfo?.name || "this category"}.`
            : `Select a category below to explore our ${products.length} handcrafted listings across nine departments, or choose "All Items" to view the complete collection.`}
        </p>
      </div>

      {/* 2. IMAGE-BASED CATEGORY CARDS (Nine Categories, Two-Column Grid) */}
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
              aria-label="View all 75 catalogue listings"
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
                  isSelected ? "Currently selected." : "Click to view products."
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

      {/* 4. ACTIVE PRODUCT CATALOGUE: Displayed only after a category is selected */}
      {isCategorySelected && (
        <div
          ref={productGridRef}
          className="active-category-results-section"
          aria-live="polite"
        >
          {/* Active Category Heading & Return Navigation */}
          <div className="active-category-banner">
            <div className="active-category-info">
              <div className="active-category-eyebrow">
                <span>ACTIVE CATEGORY</span>
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
                onClick={handleReturnToCategories}
                aria-label="Back to Category Selection overview"
              >
                <ArrowLeft size={15} />
                <span>Back to Categories</span>
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
            {/* Collection Filter (especially relevant for chocolates) */}
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
