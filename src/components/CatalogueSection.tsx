import React, { useState, useMemo } from "react";
import { products } from "../data/products";
import { categories } from "../data/categories";
import { collections } from "../data/collections";
import type {
  CatalogueProduct,
  CollectionId,
  CatalogueFilterState,
} from "../types/catalogue";
import { ProductCard } from "./ProductCard";
import { SpecularCTA } from "./SpecularCTA";
import { Search, RotateCcw, Sparkles, Filter, X } from "lucide-react";

interface CatalogueSectionProps {
  filterState: CatalogueFilterState;
  setFilterState: React.Dispatch<React.SetStateAction<CatalogueFilterState>>;
  onSelectProduct: (product: CatalogueProduct) => void;
}

const PAGE_SIZE = 12;

export const CatalogueSection: React.FC<CatalogueSectionProps> = ({
  filterState,
  setFilterState,
  onSelectProduct,
}) => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

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

  // Reset pagination whenever any filter criteria changes
  const updateFilter = (updates: Partial<CatalogueFilterState>) => {
    setVisibleCount(PAGE_SIZE);
    setFilterState((prev) => ({ ...prev, ...updates }));
  };

  const clearAllFilters = () => {
    setVisibleCount(PAGE_SIZE);
    setFilterState({
      searchQuery: "",
      selectedCategory: "all",
      selectedCollection: "all",
      selectedSize: "all",
    });
  };

  const hasActiveFilters =
    filterState.searchQuery.trim() !== "" ||
    filterState.selectedCategory !== "all" ||
    filterState.selectedCollection !== "all" ||
    filterState.selectedSize !== "all";

  // Filter products based on search, category, collection, and size
  const filteredProducts = useMemo(() => {
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

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <section id="catalogue" className="catalogue-section" aria-labelledby="catalogue-heading">
      <div className="section-header">
        <span className="section-eyebrow">
          <Sparkles size={13} />
          <span>COMPLETE CATALOGUE</span>
        </span>
        <h2 id="catalogue-heading" className="section-title">
          Artisanal Chocolate & Vitrine Archive
        </h2>
        <p className="section-description">
          Browse our {products.length} catalogue listings by category, collection, or confirmed size variant.
        </p>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="catalogue-toolbar">
        {/* Search Bar */}
        <div className="catalogue-search-wrap">
          <Search size={18} className="search-icon" aria-hidden="true" />
          <input
            type="search"
            value={filterState.searchQuery}
            onChange={(e) => updateFilter({ searchQuery: e.target.value })}
            placeholder="Search chocolate, bakes, teas, or notes..."
            className="catalogue-search-input"
            aria-label="Search catalogue products"
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

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button
            type="button"
            className="clear-filters-btn"
            onClick={clearAllFilters}
            aria-label="Clear all active filters"
          >
            <RotateCcw size={14} />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* Category Filter Tabs */}
      <div className="filter-group category-filter-group" role="tablist" aria-label="Filter by Category">
        <button
          type="button"
          role="tab"
          aria-selected={filterState.selectedCategory === "all"}
          className={`filter-tab ${filterState.selectedCategory === "all" ? "is-active" : ""}`}
          onClick={() => updateFilter({ selectedCategory: "all" })}
        >
          All Items ({products.length})
        </button>

        {categories.map((cat) => {
          const count = products.filter((p) => p.categoryId === cat.id).length;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={filterState.selectedCategory === cat.id}
              className={`filter-tab ${filterState.selectedCategory === cat.id ? "is-active" : ""}`}
              onClick={() => updateFilter({ selectedCategory: cat.id })}
            >
              {cat.shortLabel || cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Collection & Size Filter Row */}
      <div className="secondary-filter-row">
        {/* Collection Dropdown / Chips */}
        <div className="filter-subgroup">
          <span className="filter-label">Collection:</span>
          <select
            value={filterState.selectedCollection}
            onChange={(e) => updateFilter({ selectedCollection: e.target.value as CollectionId | "all" })}
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
          Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? "family" : "families"}
        </div>
      </div>

      {/* Product Grid */}
      {displayedProducts.length > 0 ? (
        <div className="catalogue-grid">
          {displayedProducts.map((product) => (
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
          <h3 className="empty-state-title">No matching chocolate listings found</h3>
          <p className="empty-state-desc">
            Try adjusting your search keywords or resetting your category and size filters.
          </p>
          <SpecularCTA variant="primary" size="sm" onClick={clearAllFilters}>
            Clear All Filters
          </SpecularCTA>
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="catalogue-load-more">
          <SpecularCTA
            variant="secondary"
            size="md"
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
          >
            Load More Products ({filteredProducts.length - visibleCount} remaining)
          </SpecularCTA>
        </div>
      )}
    </section>
  );
};
